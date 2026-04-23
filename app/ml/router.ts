import axios from "axios";
import { MASTER_DATASET } from "../data/dataset";

export interface RouteResult {
  polyline: [number, number][];
  distance: number;
  safetyScore: number;
  nodes: number;
}

function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371e3;
  const φ1 = lat1 * Math.PI / 180, φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180, Δλ = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(Δφ/2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Step 1: Calculate the SAFEST sequence of Sectors to hop through using Dijkstra.
 * This ensures we actively route around high-crime / critical zones.
 */
function getSafetyHops(start: [number, number], end: [number, number]): [number, number][] {
  const nodes = MASTER_DATASET;
  const adj: Record<number, { to: number, dist: number, weight: number }[]> = {};

  nodes.forEach(u => {
    adj[u.id] = [];
    nodes.forEach(v => {
      if (u.id === v.id) return;
      const d = haversine(u.lat, u.lng, v.lat, v.lng);
      // Connect nearby sectors (up to 5.5km) to form a dense tactical grid
      if (d < 5500) {
        const avgSafety = (u.safetyScore + v.safetyScore) / 2;
        // Exponential penalty for low-safety routes
        const penalty = 1 + Math.pow((100 - avgSafety) / 10, 2);
        adj[u.id].push({ to: v.id, dist: d, weight: d * penalty });
      }
    });
  });

  const findNearestSector = (lat: number, lng: number) => {
    let minD = Infinity, best = nodes[0];
    nodes.forEach(n => {
      const d = haversine(lat, lng, n.lat, n.lng);
      if (d < minD) { minD = d; best = n; }
    });
    return best;
  };

  const startSector = findNearestSector(start[0], start[1]);
  const endSector = findNearestSector(end[0], end[1]);

  const dists: Record<number, number> = { [startSector.id]: 0 };
  const prev: Record<number, number | null> = {};
  const pq: [number, number][] = [[0, startSector.id]];

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift()!;
    if (u === endSector.id) break;
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
  let curr: number | null = endSector.id;
  
  if (dists[endSector.id] === undefined) {
    // Ultimate fallback if no path found in grid
    return [start, end];
  }

  while (curr !== null && dists[curr] !== undefined) {
    const s = nodes.find(x => x.id === curr)!;
    hops.unshift([s.lat, s.lng]);
    curr = prev[curr] ?? null;
  }

  // Ensure exact start and end coordinates are included
  return [start, ...hops, end];
}

/**
 * Main Routing Engine
 * Combines our custom Safety-Grid Dijkstra with OSRM for 100% accurate road mapping.
 */
export async function calculateSafestPath(start: [number, number], end: [number, number]): Promise<RouteResult> {
  const hops = getSafetyHops(start, end);
  
  // OSRM requires coordinates as Lng,Lat separated by semicolons
  const coordsStr = hops.map(h => `${h[1].toFixed(5)},${h[0].toFixed(5)}`).join(";");
  
  // Fetch real-world road geometries connecting our safety hops
  const url = `http://router.project-osrm.org/route/v1/driving/${coordsStr}?overview=full&geometries=geojson`;

  try {
    const res = await axios.get(url, { timeout: 10000 });
    
    if (res.data && res.data.routes && res.data.routes.length > 0) {
      const route = res.data.routes[0];
      
      // OSRM returns GeoJSON [lng, lat], Leaflet polyline requires [lat, lng]
      const polyline = route.geometry.coordinates.map((c: [number, number]) => [c[1], c[0]]);
      
      // Calculate overall safety score based on the sectors we hopped through
      let safetySum = 0;
      hops.forEach(h => {
        const nearest = MASTER_DATASET.reduce((acc, currS) => {
           const d = haversine(h[0], h[1], currS.lat, currS.lng);
           return d < acc.d ? { d, s: currS.safetyScore } : acc;
        }, { d: Infinity, s: 70 });
        safetySum += nearest.s;
      });

      return {
        polyline: polyline,
        distance: Math.round((route.distance / 1000) * 100) / 100, // Format to 2 decimal places (km)
        safetyScore: Math.round(safetySum / hops.length),
        nodes: polyline.length
      };
    }
  } catch (error) {
    console.error("OSRM Routing Failed. Falling back to direct hops.", error);
  }

  // Absolute fallback: If OSRM fails or times out, just draw straight lines between the hops.
  // This ensures the application never crashes during a network failure.
  let safetySum = 0;
  let totalD = 0;
  for (let i = 0; i < hops.length; i++) {
     const nearest = MASTER_DATASET.reduce((acc, currS) => {
         const d = haversine(hops[i][0], hops[i][1], currS.lat, currS.lng);
         return d < acc.d ? { d, s: currS.safetyScore } : acc;
     }, { d: Infinity, s: 70 });
     safetySum += nearest.s;
     
     if (i > 0) {
         totalD += haversine(hops[i-1][0], hops[i-1][1], hops[i][0], hops[i][1]);
     }
  }

  return {
    polyline: hops,
    distance: Math.round((totalD / 1000) * 100) / 100,
    safetyScore: Math.round(safetySum / hops.length),
    nodes: hops.length
  };
}
