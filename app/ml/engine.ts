"use client";
// ============================================================================
// AEGIS NOIDA — HYBRID ML ENGINE
// K-Means++ Clustering & Weighted KNN Classification
// ============================================================================

import { MASTER_DATASET } from "../data/dataset";

// --- K-MEANS ---

export interface ClusterResult {
  clusters: number[];
  centroids: number[][];
  labels: string[];
  colors: string[];
}

function euclidean(a: number[], b: number[]): number {
  return Math.sqrt(a.reduce((s, v, i) => s + (v - b[i]) ** 2, 0));
}

export function runKMeans(k = 4): ClusterResult {
  const features = MASTER_DATASET.map(s => [
    s.total / s.population, // density
    s.cctvCoverage / 100,
    s.streetLightIndex / 100,
    s.policeStations / 5
  ]);

  // Smarter seeding (K-Means++)
  const centroidsArr: number[][] = [features[0]];
  for (let i = 1; i < k; i++) {
    const dists = features.map(f => Math.min(...centroidsArr.map(c => euclidean(f, c))));
    const sum = dists.reduce((a, b) => a + b, 0);
    let r = Math.random() * sum;
    const idx = dists.findIndex(d => (r -= d) <= 0);
    centroidsArr.push(features[idx === -1 ? 0 : idx]);
  }

  let centroids = centroidsArr;
  const clusters = new Array(features.length).fill(0);
  for (let iter = 0; iter < 100; iter++) {
    let changed = false;
    features.forEach((f, i) => {
      let minD = Infinity, best = 0;
      centroids.forEach((c, ci) => {
        const d = euclidean(f, c);
        if (d < minD) { minD = d; best = ci; }
      });
      if (clusters[i] !== best) { clusters[i] = best; changed = true; }
    });
    if (!changed) break;

    centroids = centroids.map((_, ci) => {
      const members = features.filter((_, i) => clusters[i] === ci);
      if (members.length === 0) return centroids[ci];
      return members[0].map((_, fi) => members.reduce((s, m) => s + m[fi], 0) / members.length);
    });
  }

  const avgRisk = centroids.map((c, ci) => {
    const members = MASTER_DATASET.filter((_, i) => clusters[i] === ci);
    return members.reduce((s, m) => s + m.total, 0) / (members.length || 1);
  });

  const order = [...Array(k).keys()].sort((a, b) => avgRisk[a] - avgRisk[b]);
  const rankMap = new Array(k).fill(0);
  order.forEach((c, r) => rankMap[c] = r);

  const labels = ["Secure Zone", "Moderate Zone", "Elevated Risk", "Critical Alert"];
  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#0ea5e9"];

  return {
    clusters,
    centroids,
    labels: order.map((_, i) => labels[rankMap[i]]),
    colors: order.map((_, i) => colors[rankMap[i]])
  };
}

// --- KNN ---

export interface KNNPrediction {
  label: string;
  confidence: number;
  predictedCrimeType: string;
  neighbors: { name: string; distance: number; risk: string }[];
}

export function predictRisk(input: number[], k = 5): KNNPrediction {
  const training = MASTER_DATASET.map(s => ({
    features: [s.population, s.policeStations, s.cctvCoverage, s.streetLightIndex, s.theft, s.burglary, s.assault, s.vehicleCrime],
    label: s.riskLevel,
    name: s.name,
    // Crime distribution for KNN type prediction
    crimes: { theft: s.theft, burglary: s.burglary, assault: s.assault, vehicleCrime: s.vehicleCrime, cyberCrime: s.cyberCrime, harassment: s.harassment, fraud: s.fraud }
  }));

  const dists = training.map(t => ({
    ...t,
    distance: euclidean(input, t.features)
  })).sort((a, b) => a.distance - b.distance).slice(0, k);

  const votes: Record<string, number> = {};
  const crimeVotes: Record<string, number> = {};

  dists.forEach(d => {
    const weight = 1 / (d.distance + 0.01);
    votes[d.label] = (votes[d.label] || 0) + weight;
    
    // Weighted Crime Type Vote
    const dominantType = Object.keys(d.crimes).sort((a, b) => d.crimes[b as keyof typeof d.crimes] - d.crimes[a as keyof typeof d.crimes])[0];
    crimeVotes[dominantType] = (crimeVotes[dominantType] || 0) + weight;
  });

  const bestLabel = Object.keys(votes).sort((a, b) => votes[b] - votes[a])[0];
  const bestCrimeType = Object.keys(crimeVotes).sort((a, b) => crimeVotes[b] - crimeVotes[a])[0];
  const totalWeight = Object.values(votes).reduce((a, b) => a + b, 0);

  return {
    label: bestLabel,
    confidence: Math.round((votes[bestLabel] / totalWeight) * 100),
    predictedCrimeType: bestCrimeType,
    neighbors: dists.map(d => ({ name: d.name, distance: Math.round(d.distance * 100) / 100, risk: d.label }))
  };
}
