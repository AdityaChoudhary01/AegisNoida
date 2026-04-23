// ============================================================================
// K-MEANS CLUSTERING ALGORITHM (Pure TypeScript implementation)
// Used to cluster Greater Noida sectors into risk zones based on crime features
// ============================================================================

export interface KMeansResult {
  clusters: number[]; // cluster index per point
  centroids: number[][];
  iterations: number;
  inertia: number; // within-cluster sum of squares
  silhouette: number;
  clusterSizes: number[];
}

function euclidean(a: number[], b: number[]): number {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const d = a[i] - b[i];
    s += d * d;
  }
  return Math.sqrt(s);
}

function mean(vectors: number[][]): number[] {
  const n = vectors.length;
  if (n === 0) return [];
  const dim = vectors[0].length;
  const out = new Array(dim).fill(0);
  for (const v of vectors) for (let i = 0; i < dim; i++) out[i] += v[i];
  for (let i = 0; i < dim; i++) out[i] /= n;
  return out;
}

/**
 * Standardize features (z-score normalization)
 */
export function standardize(data: number[][]): { normalized: number[][]; means: number[]; stds: number[] } {
  const n = data.length;
  const dim = data[0].length;
  const means = new Array(dim).fill(0);
  const stds = new Array(dim).fill(0);

  for (const row of data) for (let i = 0; i < dim; i++) means[i] += row[i];
  for (let i = 0; i < dim; i++) means[i] /= n;

  for (const row of data) for (let i = 0; i < dim; i++) stds[i] += (row[i] - means[i]) ** 2;
  for (let i = 0; i < dim; i++) stds[i] = Math.sqrt(stds[i] / n) || 1;

  const normalized = data.map(row => row.map((v, i) => (v - means[i]) / stds[i]));
  return { normalized, means, stds };
}

/**
 * K-Means++ initialization - smarter centroid seeding
 */
function kmeansPlusPlusInit(data: number[][], k: number, seed = 42): number[][] {
  // Deterministic PRNG so results are reproducible
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const centroids: number[][] = [];
  // Pick first centroid randomly
  centroids.push([...data[Math.floor(rand() * data.length)]]);

  for (let c = 1; c < k; c++) {
    const dists = data.map(p => {
      let minD = Infinity;
      for (const cen of centroids) {
        const d = euclidean(p, cen);
        if (d < minD) minD = d;
      }
      return minD * minD;
    });
    const sum = dists.reduce((a, b) => a + b, 0);
    let r = rand() * sum;
    let idx = 0;
    for (let i = 0; i < dists.length; i++) {
      r -= dists[i];
      if (r <= 0) { idx = i; break; }
    }
    centroids.push([...data[idx]]);
  }
  return centroids;
}

/**
 * Run K-Means algorithm
 */
export function kmeans(
  data: number[][],
  k: number,
  maxIter = 300,
  tol = 1e-4,
  seed = 42
): KMeansResult {
  if (data.length === 0 || k <= 0) {
    return { clusters: [], centroids: [], iterations: 0, inertia: 0, silhouette: 0, clusterSizes: [] };
  }

  let centroids = kmeansPlusPlusInit(data, k, seed);
  let clusters = new Array(data.length).fill(0);
  let iterations = 0;

  for (let iter = 0; iter < maxIter; iter++) {
    iterations++;

    // Assign each point to nearest centroid
    let changed = false;
    for (let i = 0; i < data.length; i++) {
      let minD = Infinity;
      let best = 0;
      for (let c = 0; c < k; c++) {
        const d = euclidean(data[i], centroids[c]);
        if (d < minD) { minD = d; best = c; }
      }
      if (clusters[i] !== best) { clusters[i] = best; changed = true; }
    }

    // Recompute centroids
    const newCentroids: number[][] = [];
    let totalShift = 0;
    for (let c = 0; c < k; c++) {
      const members = data.filter((_, i) => clusters[i] === c);
      const newC = members.length > 0 ? mean(members) : [...centroids[c]];
      totalShift += euclidean(newC, centroids[c]);
      newCentroids.push(newC);
    }
    centroids = newCentroids;

    if (!changed || totalShift < tol) break;
  }

  // Compute inertia (sum of squared distances to centroid)
  let inertia = 0;
  for (let i = 0; i < data.length; i++) {
    const d = euclidean(data[i], centroids[clusters[i]]);
    inertia += d * d;
  }

  // Cluster sizes
  const clusterSizes = new Array(k).fill(0);
  for (const c of clusters) clusterSizes[c]++;

  // Silhouette score (simplified)
  const silhouette = silhouetteScore(data, clusters, k);

  return { clusters, centroids, iterations, inertia, silhouette, clusterSizes };
}

/**
 * Silhouette score: measure of how well points fit their cluster
 * Range [-1, 1]. Higher = better.
 */
export function silhouetteScore(data: number[][], clusters: number[], k: number): number {
  if (k < 2 || data.length < 2) return 0;
  let total = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const ci = clusters[i];
    // Mean intra-cluster distance (a)
    let aSum = 0, aCount = 0;
    for (let j = 0; j < data.length; j++) {
      if (i !== j && clusters[j] === ci) { aSum += euclidean(data[i], data[j]); aCount++; }
    }
    const a = aCount > 0 ? aSum / aCount : 0;

    // Mean nearest-cluster distance (b)
    let b = Infinity;
    for (let c = 0; c < k; c++) {
      if (c === ci) continue;
      let bSum = 0, bCount = 0;
      for (let j = 0; j < data.length; j++) {
        if (clusters[j] === c) { bSum += euclidean(data[i], data[j]); bCount++; }
      }
      if (bCount > 0) {
        const bMean = bSum / bCount;
        if (bMean < b) b = bMean;
      }
    }

    if (b === Infinity) continue;
    const s = (b - a) / Math.max(a, b);
    total += s;
    count++;
  }
  return count > 0 ? total / count : 0;
}

/**
 * Elbow method - compute inertia for k=1..maxK
 */
export function elbowAnalysis(data: number[][], maxK = 8): { k: number; inertia: number; silhouette: number }[] {
  const results: { k: number; inertia: number; silhouette: number }[] = [];
  for (let k = 1; k <= maxK; k++) {
    const r = kmeans(data, k, 200, 1e-4, 42);
    results.push({ k, inertia: r.inertia, silhouette: k > 1 ? r.silhouette : 0 });
  }
  return results;
}

/**
 * Label clusters by average crime total (for semantic naming)
 */
export function labelClusters(
  clusters: number[],
  totals: number[],
  k: number
): { clusterLabels: string[]; clusterColors: string[]; rankMap: number[] } {
  const avgByCluster = new Array(k).fill(0);
  const countByCluster = new Array(k).fill(0);
  for (let i = 0; i < clusters.length; i++) {
    avgByCluster[clusters[i]] += totals[i];
    countByCluster[clusters[i]]++;
  }
  for (let c = 0; c < k; c++) if (countByCluster[c] > 0) avgByCluster[c] /= countByCluster[c];

  // Sort clusters by avg ascending (0 = safest)
  const order = [...Array(k).keys()].sort((a, b) => avgByCluster[a] - avgByCluster[b]);
  const rankMap = new Array(k).fill(0);
  order.forEach((c, rank) => (rankMap[c] = rank));

  const labelSet = k === 2 ? ["Safe", "Risky"]
    : k === 3 ? ["Safe", "Moderate", "High Risk"]
    : k === 4 ? ["Safe", "Moderate", "High Risk", "Critical"]
    : k === 5 ? ["Very Safe", "Safe", "Moderate", "High Risk", "Critical"]
    : Array.from({ length: k }, (_, i) => `Zone ${i + 1}`);

  const colorSet = k === 2 ? ["#10b981", "#ef4444"]
    : k === 3 ? ["#10b981", "#f59e0b", "#ef4444"]
    : k === 4 ? ["#10b981", "#f59e0b", "#f97316", "#ef4444"]
    : k === 5 ? ["#059669", "#10b981", "#f59e0b", "#f97316", "#ef4444"]
    : ["#10b981", "#22c55e", "#eab308", "#f59e0b", "#f97316", "#ef4444", "#dc2626", "#991b1b"].slice(0, k);

  const clusterLabels = new Array(k).fill("");
  const clusterColors = new Array(k).fill("");
  for (let c = 0; c < k; c++) {
    clusterLabels[c] = labelSet[rankMap[c]];
    clusterColors[c] = colorSet[rankMap[c]];
  }
  return { clusterLabels, clusterColors, rankMap };
}
