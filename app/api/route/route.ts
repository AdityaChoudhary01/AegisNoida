import { NextResponse } from "next/server";
import axios from "axios";
import { MASTER_DATASET } from "@/app/data/dataset";

// OSRM Public Mirrors for redundancy
const OSRM_ENDPOINTS = [
  "https://router.project-osrm.org/route/v1/driving/",
  "https://osrm.faws.dev/route/v1/driving/",
  "https://routing.openstreetmap.de/routed-car/route/v1/driving/"
];

function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371e3;
  const phi1 = lat1 * Math.PI / 180, phi2 = lat2 * Math.PI / 180;
  const deltaPhi = (lat2 - lat1) * Math.PI / 180, deltaLambda = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(deltaPhi/2) ** 2 + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getSafetyHops(start: [number, number], end: [number, number]): [number, number][] {
  const nodes = MASTER_DATASET;
  const adj: Record<number, { to: number, dist: number, weight: number }[]> = {};

  nodes.forEach(u => {
    adj[u.id] = [];
    nodes.forEach(v => {
      if (u.id === v.id) return;
      const d = haversine(u.lat, u.lng, v.lat, v.lng);
      // Increased density for more tactical waypoints
      if (d < 3500) { 
        const avgSafety = (u.safetyScore + v.safetyScore) / 2;
        const penalty = 1 + Math.pow((100 - avgSafety) / 10, 3); // Heavily penalize risk
        adj[u.id].push({ to: v.id, dist: d, weight: d * penalty });
      }
    });
  });

  const findNearest = (lat: number, lng: number) => {
    let minD = Infinity, best = nodes[0];
    nodes.forEach(n => {
      const d = haversine(lat, lng, n.lat, n.lng);
      if (d < minD) { minD = d; best = n; }
    });
    return best;
  };

  const startNode = findNearest(start[0], start[1]);
  const endNode = findNearest(end[0], end[1]);

  const dists: Record<number, number> = { [startNode.id]: 0 };
  const prev: Record<number, number | null> = {};
  const pq: [number, number][] = [[0, startNode.id]];

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift()!;
    if (u === endNode.id) break;
    if (d > (dists[u] ?? Infinity)) continue;
    (adj[u] || []).forEach(edge => {
      const newD = d + edge.weight;
      if (newD < (dists[edge.to] ?? Infinity)) {
        dists[edge.to] = newD;
        prev[edge.to] = u;
        pq.push([newD, edge.to]);
      }
    });
  }

  const hops: [number, number][] = [];
  let curr: number | null = endNode.id;
  if (dists[endNode.id] === undefined) return [start, end];

  while (curr !== null) {
    const s = nodes.find(x => x.id === curr)!;
    hops.unshift([s.lat, s.lng]);
    curr = prev[curr] ?? null;
  }
  return [start, ...hops, end];
}

export async function POST(req: Request) {
  try {
    const { start, end } = await req.json();
    const hops = getSafetyHops(start, end);
    
    // OSRM Coordinate snapping radius (meters)
    const rads = hops.map(() => "1000").join(";");
    const coordsStr = hops.map(h => `${h[1].toFixed(6)},${h[0].toFixed(6)}`).join(";");
    
    let routeData = null;

    for (const endpoint of OSRM_ENDPOINTS) {
      try {
        const url = `${endpoint}${coordsStr}?overview=full&geometries=geojson&radiuses=${rads}`;
        const res = await axios.get(url, { timeout: 5000 });
        if (res.data?.routes?.[0]) {
          routeData = res.data.routes[0];
          break;
        }
      } catch {
        continue;
      }
    }

    if (routeData) {
      const polyline = routeData.geometry.coordinates.map((c: [number, number]) => [c[1], c[0]]);
      
      // Calculate real-time safety score
      let safetySum = 0;
      hops.forEach(h => {
        const nearest = MASTER_DATASET.reduce((acc, s) => {
          const d = haversine(h[0], h[1], s.lat, s.lng);
          return d < acc.d ? { d, s: s.safetyScore } : acc;
        }, { d: Infinity, s: 70 });
        safetySum += nearest.s;
      });

      return NextResponse.json({
        success: true,
        polyline,
        distance: (routeData.distance / 1000).toFixed(2),
        safetyScore: Math.round(safetySum / hops.length)
      });
    }

    // High-fidelity fallback logic if all OSRM mirrors fail
    // We draw straight lines but flag it as "Simplified" in the UI logic if needed
    return NextResponse.json({
      success: false,
      message: "Road network mirrors unavailable. Showing tactical waypoints.",
      polyline: hops,
      distance: (haversine(start[0], start[1], end[0], end[1]) / 1000).toFixed(2),
      safetyScore: 65
    });

  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
