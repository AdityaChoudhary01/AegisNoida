"use client";
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LeafletMouseEvent } from "leaflet";
import { MASTER_DATASET, RISK_COLORS } from "../data/dataset";

interface MapDisplayProps {
  mode: "cluster" | "risk" | "route";
  clusters?: {
    clusters: number[];
    colors: string[];
    labels: string[];
  } | null;
  routeData?: {
    polyline: [number, number][];
  } | null;
  sosLocation?: { lat: number; lng: number } | null;
  showPath?: boolean;
}

export default function MapDisplay({ mode, clusters, routeData, sosLocation, showPath }: MapDisplayProps) {
  const center: [number, number] = sosLocation ? [sosLocation.lat, sosLocation.lng] : [28.464, 77.517];

  return (
    <MapContainer 
      center={center} 
      zoom={sosLocation ? 14 : 12} 
      className="w-full h-full"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* 
          CLEAN VIBRANT DATA LAYER 
          Removed the 'Circle' (meters) background layers as they create dark 'blobs' when zoomed out.
          Using high-saturation CircleMarkers with a consistent scale.
      */}
      {(mode === "cluster" || mode === "risk") && MASTER_DATASET.map((s, i) => {
        let color = RISK_COLORS[s.riskLevel];
        let label: string = s.riskLevel;

        if (mode === "cluster" && clusters) {
           const cIdx = clusters.clusters[i];
           // Ensure color exists, fallback to a vibrant default if missing
           color = clusters.colors[cIdx] || "#38bdf8";
           label = clusters.labels[cIdx] || "Unknown Cluster";
        }
        
        // Sizing that stays clear at all zoom levels
        const radiusValue = Math.sqrt(s.total) * 0.8 + 4;

        return (
          <div key={`${mode}-${s.id}`}>
            {/* Soft Glow Layer (Pixel based so it doesn't blob on zoom out) */}
            <CircleMarker
              center={[s.lat, s.lng]}
              radius={radiusValue + 12}
              pathOptions={{
                fillColor: color,
                fillOpacity: 0.15,
                stroke: false
              }}
              className="pointer-events-none"
            />
            
            {/* Core Data Point */}
            <CircleMarker
              center={[s.lat, s.lng]}
              radius={radiusValue}
              pathOptions={{
                fillColor: color,
                fillOpacity: 1, 
                color: "white",
                weight: 1.5,
              }}
              eventHandlers={{
                mouseover: (e: LeafletMouseEvent) => {
                  e.target.openPopup();
                  e.target.setStyle({ weight: 4 });
                },
                mouseout: (e: LeafletMouseEvent) => {
                  e.target.closePopup();
                  e.target.setStyle({ weight: 1.5 });
                }
              }}
            >
              <Popup className="custom-popup">
                <div className="p-4 min-w-[220px] bg-[#0a0b1e] text-white rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                       <p className="text-[9px] uppercase font-black tracking-widest text-slate-500 mb-1">
                         {mode === "cluster" ? "Intelligence Cluster" : "Risk Territory"}
                       </p>
                       <h4 className="text-sm font-black tracking-tight uppercase">{s.name}</h4>
                       <div className="flex items-center gap-2 mt-2">
                          <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: color, color: color }} />
                          <p className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>{label}</p>
                       </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[8px] uppercase font-bold text-slate-500 tracking-widest">Incidents</p>
                      <p className="text-base font-black">{s.total}</p>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase font-bold text-slate-500 tracking-widest">Safety Index</p>
                      <p className="text-base font-black text-emerald-400">{s.safetyScore}%</p>
                    </div>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          </div>
        );
      })}

      {/* EMERGENCY OVERLAY: Live Distress Monitoring */}
      {sosLocation && (
        <>
          <CircleMarker 
            center={[sosLocation.lat, sosLocation.lng]} 
            radius={25} 
            pathOptions={{ fillColor: "#f43f5e", fillOpacity: 0.3, color: "#f43f5e", weight: 2 }}
            className="animate-ping"
          />
          <CircleMarker 
            center={[sosLocation.lat, sosLocation.lng]} 
            radius={10} 
            pathOptions={{ fillColor: "#f43f5e", fillOpacity: 1, color: "white", weight: 3 }}
          >
             <Popup>
                <div className="p-3 bg-rose-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest">
                  Signal Origin: {sosLocation.lat.toFixed(4)}, {sosLocation.lng.toFixed(4)}
                </div>
             </Popup>
          </CircleMarker>

          {showPath && (
            <Polyline 
              positions={[
                [28.4667, 77.5070], 
                [sosLocation.lat, sosLocation.lng]
              ]}
              pathOptions={{ color: "#f43f5e", weight: 6, dashArray: "15, 15", opacity: 1 }}
            />
          )}
        </>
      )}

      {mode === "route" && routeData && (
        <>
          <Polyline 
            positions={routeData.polyline} 
            pathOptions={{ color: "#0ea5e9", weight: 8, opacity: 0.9, lineCap: "round" }} 
          />
        </>
      )}
    </MapContainer>
  );
}
