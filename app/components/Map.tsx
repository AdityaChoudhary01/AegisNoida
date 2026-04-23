"use client";
import dynamic from "next/dynamic";

const MapDisplay = dynamic(() => import("./MapDisplay"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-900/50 animate-pulse rounded-[2rem]" />
});

interface MapProps {
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

export default function MapComponent(props: MapProps) {
  return <MapDisplay {...props} />;
}
