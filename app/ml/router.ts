import axios from "axios";

export interface RouteResult {
  polyline: [number, number][];
  distance: number;
  safetyScore: number;
  nodes: number;
  success?: boolean;
}

/**
 * Tactical Routing Bridge
 * Delegates complex safety-weighted road snapping to the server-side API.
 */
export async function calculateSafestPath(start: [number, number], end: [number, number]): Promise<RouteResult> {
  try {
    const response = await axios.post('/api/route', { start, end });
    
    if (response.data.success) {
      return {
        polyline: response.data.polyline,
        distance: parseFloat(response.data.distance),
        safetyScore: response.data.safetyScore,
        nodes: response.data.polyline.length,
        success: true
      };
    } else {
      // Handle the case where API returns a fallback path
      return {
        polyline: response.data.polyline,
        distance: parseFloat(response.data.distance),
        safetyScore: response.data.safetyScore,
        nodes: response.data.polyline.length,
        success: false
      };
    }
  } catch (error) {
    console.error("Tactical Routing Engine Error:", error);
    // Absolute frontend fallback (Straight line)
    return {
      polyline: [start, end],
      distance: 0,
      safetyScore: 50,
      nodes: 2,
      success: false
    };
  }
}
