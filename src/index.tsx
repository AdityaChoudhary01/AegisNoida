import { Hono } from "hono";
import { cors } from "hono/cors";
import {
  GREATER_NOIDA_SECTORS,
  YEARLY_TRENDS,
  MONTHLY_PATTERNS,
  HOURLY_PATTERNS,
  FEATURE_KEYS,
  CRIME_CATEGORIES,
  RISK_COLORS,
  SectorRecord
} from "./data/dataset";
import { kmeans, standardize, elbowAnalysis, labelClusters } from "./ml/kmeans";
import { KNNClassifier, knnCrossValidate } from "./ml/knn";
import { renderPage } from "./renderer";

const app = new Hono();
app.use("/api/*", cors());

// ---------------------------------------------------------------------------
// API: Dataset
// ---------------------------------------------------------------------------
app.get("/api/sectors", (c) => {
  return c.json({ data: GREATER_NOIDA_SECTORS, count: GREATER_NOIDA_SECTORS.length });
});

app.get("/api/stats", (c) => {
  const totalCrimes = GREATER_NOIDA_SECTORS.reduce((s, r) => s + r.total, 0);
  const avgCrimes = totalCrimes / GREATER_NOIDA_SECTORS.length;
  const riskDist: Record<string, number> = { Low: 0, Moderate: 0, High: 0, Critical: 0 };
  for (const r of GREATER_NOIDA_SECTORS) riskDist[r.riskLevel]++;

  const categoryTotals: Record<string, number> = {};
  for (const cat of CRIME_CATEGORIES) {
    categoryTotals[cat] = GREATER_NOIDA_SECTORS.reduce((s, r) => s + (r[cat] as number), 0);
  }

  const topSectors = [...GREATER_NOIDA_SECTORS].sort((a, b) => b.total - a.total).slice(0, 5);
  const safestSectors = [...GREATER_NOIDA_SECTORS].sort((a, b) => a.total - b.total).slice(0, 5);

  return c.json({
    totalCrimes,
    avgCrimes: Math.round(avgCrimes),
    totalSectors: GREATER_NOIDA_SECTORS.length,
    totalPoliceStations: GREATER_NOIDA_SECTORS.reduce((s, r) => s + r.policeStations, 0),
    avgCctvCoverage: Math.round(GREATER_NOIDA_SECTORS.reduce((s, r) => s + r.cctvCoverage, 0) / GREATER_NOIDA_SECTORS.length),
    riskDistribution: riskDist,
    categoryTotals,
    topSectors: topSectors.map(s => ({ sector: s.sector, total: s.total, risk: s.riskLevel })),
    safestSectors: safestSectors.map(s => ({ sector: s.sector, total: s.total, risk: s.riskLevel })),
    yearlyTrends: YEARLY_TRENDS,
    monthlyPatterns: MONTHLY_PATTERNS,
    hourlyPatterns: HOURLY_PATTERNS,
    riskColors: RISK_COLORS
  });
});

// ---------------------------------------------------------------------------
// API: K-Means Clustering
// ---------------------------------------------------------------------------
app.get("/api/kmeans", (c) => {
  const k = parseInt(c.req.query("k") || "4");
  const features = (c.req.query("features") || "crime").split(",");

  // Build feature matrix
  let selectedKeys: (keyof SectorRecord)[];
  if (features.includes("all")) {
    selectedKeys = FEATURE_KEYS;
  } else if (features.includes("crime")) {
    selectedKeys = CRIME_CATEGORIES as any;
  } else {
    selectedKeys = features.filter(f => (FEATURE_KEYS as string[]).includes(f)) as any;
    if (selectedKeys.length === 0) selectedKeys = CRIME_CATEGORIES as any;
  }

  const data = GREATER_NOIDA_SECTORS.map(s => selectedKeys.map(key => Number(s[key])));
  const { normalized } = standardize(data);
  const result = kmeans(normalized, k, 300, 1e-4, 42);
  const totals = GREATER_NOIDA_SECTORS.map(s => s.total);
  const { clusterLabels, clusterColors, rankMap } = labelClusters(result.clusters, totals, k);
  const elbow = elbowAnalysis(normalized, 8);

  const sectorClusters = GREATER_NOIDA_SECTORS.map((s, i) => ({
    id: s.id,
    sector: s.sector,
    lat: s.lat,
    lng: s.lng,
    total: s.total,
    cluster: result.clusters[i],
    clusterLabel: clusterLabels[result.clusters[i]],
    clusterColor: clusterColors[result.clusters[i]],
    rank: rankMap[result.clusters[i]]
  }));

  // Cluster summaries
  const clusterSummaries = [];
  for (let cid = 0; cid < k; cid++) {
    const members = sectorClusters.filter(s => s.cluster === cid);
    const avgTotal = members.length > 0 ? members.reduce((a, b) => a + b.total, 0) / members.length : 0;
    clusterSummaries.push({
      cluster: cid,
      label: clusterLabels[cid],
      color: clusterColors[cid],
      rank: rankMap[cid],
      size: members.length,
      avgCrimes: Math.round(avgTotal),
      sectors: members.map(m => m.sector)
    });
  }

  return c.json({
    k,
    iterations: result.iterations,
    inertia: Math.round(result.inertia * 100) / 100,
    silhouette: Math.round(result.silhouette * 1000) / 1000,
    clusterSizes: result.clusterSizes,
    clusterLabels,
    clusterColors,
    sectorClusters,
    clusterSummaries,
    elbow,
    featuresUsed: selectedKeys
  });
});

// ---------------------------------------------------------------------------
// API: KNN Prediction
// ---------------------------------------------------------------------------
app.post("/api/knn/predict", async (c) => {
  const body = await c.req.json();
  const k = Math.max(1, Math.min(15, parseInt(body.k ?? "5")));
  const metric = (body.metric || "euclidean") as "euclidean" | "manhattan" | "chebyshev";

  // Build training data - label = riskLevel, features = crime categories + infra features
  const featureKeys: (keyof SectorRecord)[] = [
    "population", "policeStations", "cctvCoverage", "streetLightIndex",
    "theft", "burglary", "assault", "vehicleCrime", "cyberCrime", "harassment", "fraud"
  ];

  const training = GREATER_NOIDA_SECTORS.map(s => ({
    features: featureKeys.map(f => Number(s[f])),
    label: s.riskLevel,
    meta: { sector: s.sector, total: s.total, id: s.id }
  }));

  const clf = new KNNClassifier(k, metric, true);
  clf.fit(training, true);

  // Input: either existing sector, or custom features
  let input: number[];
  let inputMeta: any = {};
  if (body.sectorId != null) {
    const s = GREATER_NOIDA_SECTORS.find(x => x.id === Number(body.sectorId));
    if (!s) return c.json({ error: "Sector not found" }, 400);
    input = featureKeys.map(f => Number(s[f]));
    inputMeta = { sector: s.sector, actualRisk: s.riskLevel };
  } else {
    input = featureKeys.map(f => {
      const v = body[f];
      return v != null ? Number(v) : 0;
    });
  }

  const prediction = clf.predict(input);

  // Cross-validation for model metrics
  const cv = knnCrossValidate(training, k, metric, 5);

  return c.json({
    prediction: {
      label: prediction.label,
      confidence: Math.round(prediction.confidence * 1000) / 10, // percent
      probabilities: Object.fromEntries(
        Object.entries(prediction.probabilities).map(([k, v]) => [k, Math.round(v * 1000) / 10])
      ),
      neighbors: prediction.neighbors.map(n => ({
        sector: n.meta?.sector,
        actualRisk: n.label,
        distance: Math.round(n.distance * 1000) / 1000,
        weight: Math.round(n.weight * 10000) / 10000,
        total: n.meta?.total
      }))
    },
    meta: inputMeta,
    model: {
      k,
      metric,
      accuracy: Math.round(cv.accuracy * 10000) / 100,
      perKAccuracy: cv.perKAccuracy.map(a => Math.round(a * 10000) / 100),
      confusionMatrix: cv.confusionMatrix,
      trainingSize: training.length,
      features: featureKeys
    }
  });
});

// ---------------------------------------------------------------------------
// Frontend - single HTML entry rendered via renderer.tsx
// ---------------------------------------------------------------------------
app.get("/", (c) => renderPage(c));

export default app;
