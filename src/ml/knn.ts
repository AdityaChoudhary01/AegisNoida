// ============================================================================
// K-NEAREST NEIGHBORS (KNN) CLASSIFIER
// Used to predict the Risk Level of a location based on input features.
// Supports: uniform / distance-weighted voting, multiple distance metrics
// ============================================================================

export type DistanceMetric = "euclidean" | "manhattan" | "chebyshev";

export interface KNNTrainingPoint {
  features: number[];
  label: string;
  meta?: Record<string, any>;
}

export interface KNNPrediction {
  label: string;
  confidence: number; // 0-1
  probabilities: Record<string, number>;
  neighbors: { label: string; distance: number; meta?: any; weight: number }[];
  contributions: Record<string, number>;
}

function distance(a: number[], b: number[], metric: DistanceMetric): number {
  let s = 0;
  switch (metric) {
    case "manhattan":
      for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]);
      return s;
    case "chebyshev": {
      let m = 0;
      for (let i = 0; i < a.length; i++) {
        const d = Math.abs(a[i] - b[i]);
        if (d > m) m = d;
      }
      return m;
    }
    case "euclidean":
    default:
      for (let i = 0; i < a.length; i++) {
        const d = a[i] - b[i];
        s += d * d;
      }
      return Math.sqrt(s);
  }
}

export class KNNClassifier {
  private training: KNNTrainingPoint[] = [];
  private means: number[] = [];
  private stds: number[] = [];
  private normalized = false;

  constructor(private k = 5, private metric: DistanceMetric = "euclidean", private weighted = true) {}

  fit(points: KNNTrainingPoint[], normalize = true) {
    if (points.length === 0) return;
    const dim = points[0].features.length;
    if (normalize) {
      this.means = new Array(dim).fill(0);
      this.stds = new Array(dim).fill(0);
      for (const p of points) for (let i = 0; i < dim; i++) this.means[i] += p.features[i];
      for (let i = 0; i < dim; i++) this.means[i] /= points.length;
      for (const p of points) for (let i = 0; i < dim; i++) this.stds[i] += (p.features[i] - this.means[i]) ** 2;
      for (let i = 0; i < dim; i++) this.stds[i] = Math.sqrt(this.stds[i] / points.length) || 1;
      this.training = points.map(p => ({
        features: p.features.map((v, i) => (v - this.means[i]) / this.stds[i]),
        label: p.label,
        meta: p.meta
      }));
      this.normalized = true;
    } else {
      this.training = points;
      this.normalized = false;
    }
  }

  predict(features: number[]): KNNPrediction {
    if (this.training.length === 0) {
      return { label: "Unknown", confidence: 0, probabilities: {}, neighbors: [], contributions: {} };
    }
    const input = this.normalized
      ? features.map((v, i) => (v - this.means[i]) / this.stds[i])
      : features;

    const dists = this.training.map(p => ({
      label: p.label,
      distance: distance(input, p.features, this.metric),
      meta: p.meta
    }));
    dists.sort((a, b) => a.distance - b.distance);
    const neighbors = dists.slice(0, this.k);

    // Weighted vote: weight = 1 / (distance + epsilon)
    const votes: Record<string, number> = {};
    const neighborWithWeight = neighbors.map(n => {
      const weight = this.weighted ? 1 / (n.distance + 1e-6) : 1;
      votes[n.label] = (votes[n.label] || 0) + weight;
      return { ...n, weight };
    });

    const totalWeight = Object.values(votes).reduce((a, b) => a + b, 0);
    const probabilities: Record<string, number> = {};
    for (const lbl of Object.keys(votes)) probabilities[lbl] = votes[lbl] / totalWeight;

    let bestLbl = "";
    let bestScore = -1;
    for (const lbl of Object.keys(votes)) {
      if (votes[lbl] > bestScore) { bestScore = votes[lbl]; bestLbl = lbl; }
    }
    return {
      label: bestLbl,
      confidence: probabilities[bestLbl] || 0,
      probabilities,
      neighbors: neighborWithWeight,
      contributions: votes
    };
  }
}

/**
 * Train/test split + cross-validation for KNN accuracy
 */
export function knnCrossValidate(
  points: KNNTrainingPoint[],
  k: number,
  metric: DistanceMetric = "euclidean",
  folds = 5
): { accuracy: number; confusionMatrix: Record<string, Record<string, number>>; perKAccuracy: number[] } {
  if (points.length < folds) folds = points.length;
  const shuffled = [...points].sort(() => Math.random() - 0.5);
  const foldSize = Math.floor(shuffled.length / folds);

  let correct = 0;
  let total = 0;
  const confusion: Record<string, Record<string, number>> = {};
  const labels = Array.from(new Set(points.map(p => p.label)));
  for (const l of labels) { confusion[l] = {}; for (const ll of labels) confusion[l][ll] = 0; }

  for (let f = 0; f < folds; f++) {
    const start = f * foldSize;
    const end = f === folds - 1 ? shuffled.length : start + foldSize;
    const test = shuffled.slice(start, end);
    const train = [...shuffled.slice(0, start), ...shuffled.slice(end)];
    const clf = new KNNClassifier(k, metric, true);
    clf.fit(train, true);
    for (const p of test) {
      const pred = clf.predict(p.features);
      if (pred.label === p.label) correct++;
      total++;
      if (confusion[p.label] && confusion[p.label][pred.label] !== undefined) {
        confusion[p.label][pred.label]++;
      }
    }
  }

  // Test accuracy for different k values (k=1..15)
  const perKAccuracy: number[] = [];
  for (let ki = 1; ki <= 15; ki++) {
    let c = 0, t = 0;
    for (let f = 0; f < folds; f++) {
      const start = f * foldSize;
      const end = f === folds - 1 ? shuffled.length : start + foldSize;
      const test = shuffled.slice(start, end);
      const train = [...shuffled.slice(0, start), ...shuffled.slice(end)];
      const clf = new KNNClassifier(ki, metric, true);
      clf.fit(train, true);
      for (const p of test) {
        const pred = clf.predict(p.features);
        if (pred.label === p.label) c++;
        t++;
      }
    }
    perKAccuracy.push(t > 0 ? c / t : 0);
  }

  return { accuracy: total > 0 ? correct / total : 0, confusionMatrix: confusion, perKAccuracy };
}
