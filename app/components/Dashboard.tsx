"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Map as MapIcon, Activity, TrendingUp, Video, Building2, LucideIcon } from "lucide-react";
import CountUp from "react-countup";
import MapComponent from "./Map";
import { cn } from "../utils/cn";

interface ClusterSummary {
  label: string;
  color: string;
  size: number;
  avgCrimes: number;
}

interface DashboardProps {
  stats: {
    totalCrimes: number;
    avgSafety: number;
  };
  clusters: {
    clusterSummaries: ClusterSummary[];
    clusters: number[];
    colors: string[];
    labels: string[];
  } | null;
  mapMode: "cluster" | "risk";
  setMapMode: (mode: "cluster" | "risk") => void;
  onRecluster: () => void;
}

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  trend: string;
  trendColor: string;
}

interface AlertItem {
  time: string;
  type: string;
  msg: string;
  color: string;
}

export default function Dashboard({ stats, clusters, mapMode, setMapMode, onRecluster }: DashboardProps) {
  const [alerts, setAlerts] = useState<AlertItem[]>([
    { time: "2m ago", type: "ALERT", msg: "Smart Lighting sensors triggered in Delta-2. High traffic detected.", color: "text-amber-400" },
    { time: "15m ago", type: "POLICE", msg: "Patrol Node 14 reassigned to Surajpur boundary for ritual safety.", color: "text-sky-400" },
    { time: "45m ago", type: "INFO", msg: "K-Means engine detected shift in cluster 3 centroid. Updating risk maps.", color: "text-emerald-400" }
  ]);

  useEffect(() => {
    const messages = [
      "Noise sensors triggered in Pari Chowk. Deploying acoustic analysis...",
      "CCTV Node 82 restored. Connection latency: 12ms.",
      "Traffic flow deviation detected in Knowledge Park III. Optimizing signals...",
      "Safe-Path request processed for Bisrakh intersection. Path optimized.",
      "Thermal sweep initiated for Alpha-1 sector. Background noise cleared."
    ];
    const types = ["ALERT", "SYSTEM", "INTEL", "POLICE"];
    const colors = ["text-rose-400", "text-sky-400", "text-violet-400", "text-emerald-400"];

    const interval = setInterval(() => {
      const newAlert: AlertItem = {
        time: "Just Now",
        type: types[Math.floor(Math.random() * types.length)],
        msg: messages[Math.floor(Math.random() * messages.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      setAlerts(prev => [newAlert, ...prev.slice(0, 2)]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          label="Total Crime Incidents" 
          value={stats.totalCrimes} 
          icon={Activity} 
          trend="+3.2%" 
          trendColor="text-rose-500" 
        />
        <MetricCard 
          label="Avg Safety Index" 
          value={stats.avgSafety} 
          suffix="%" 
          icon={Shield} 
          trend="Secure" 
          trendColor="text-emerald-500" 
        />
        <MetricCard 
          label="CCTV Saturation" 
          value={68} 
          suffix="%" 
          icon={Video} 
          trend="Optimal" 
          trendColor="text-sky-500" 
        />
        <MetricCard 
          label="Active Patrols" 
          value={124} 
          icon={Building2} 
          trend="+12" 
          trendColor="text-indigo-500" 
        />
      </div>

      {/* Main Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
             <h3 className="text-xl font-bold flex items-center gap-2"><MapIcon className="text-sky-500" /> Geospatial Distribution</h3>
             <div className="flex gap-2 p-1 glass rounded-2xl">
                <button 
                  onClick={() => setMapMode("cluster")}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                    mapMode === "cluster" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "text-slate-400 hover:text-white"
                  )}
                >
                  Clusters
                </button>
                <button 
                  onClick={() => setMapMode("risk")}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                    mapMode === "risk" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "text-slate-400 hover:text-white"
                  )}
                >
                  Risk Levels
                </button>
             </div>
          </div>
          <div className="h-[600px] glass-card p-4">
             <MapComponent mode={mapMode} clusters={clusters} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2"><TrendingUp className="text-violet-500" /> Cluster Intelligence</h3>
          <div className="glass-card p-6 flex flex-col gap-6 h-[600px] overflow-hidden relative">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Engine</p>
                <p className="text-sm font-black text-sky-400">K-Means++ Optimized</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">K-Value</p>
                <p className="text-sm font-black">4 Zones</p>
              </div>
            </div>
            
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {clusters?.clusterSummaries?.map((c, i) => (
                <div key={i} className="p-5 glass border-white/5 rounded-2xl group hover:border-white/10 transition-all cursor-pointer">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                      <span className="text-xs font-bold" style={{ color: c.color }}>{c.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">{c.size} areas</span>
                  </div>
                  <div className="flex justify-between items-end">
                     <div>
                       <p className="text-[10px] text-slate-500 font-medium">Avg Crime Index</p>
                       <p className="text-lg font-black">{c.avgCrimes}</p>
                     </div>
                     <div className="text-right">
                       <p className="text-[10px] text-slate-500 font-medium">Risk Priority</p>
                       <p className="text-sm font-bold text-slate-300">{i + 1}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-white/5">
               <button onClick={onRecluster} className="w-full btn-pro text-xs py-4 cursor-pointer">Run Re-Clustering <TrendingUp className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Grade Feature: News / Incident Feed */}
      <div className="glass-card p-6 md:p-8">
         <h3 className="text-xl font-bold mb-8 flex items-center gap-2"><Activity className="text-emerald-500" /> Live Safety Feed (Simulation)</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alerts.map((a, i) => (
              <FeedItem 
                key={i}
                time={a.time} 
                type={a.type} 
                msg={a.msg} 
                color={a.color} 
              />
            ))}
         </div>
      </div>
    </div>
  );
}

interface FeedItemProps {
  time: string;
  type: string;
  msg: string;
  color: string;
}

function FeedItem({ time, type, msg, color }: FeedItemProps) {
  return (
    <div className="p-6 glass rounded-[2rem] border-white/5 hover:border-white/10 transition-all cursor-pointer">
       <div className="flex justify-between items-center mb-4">
          <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", color)}>{type}</span>
          <span className="text-[10px] text-slate-500 font-bold">{time}</span>
       </div>
       <p className="text-xs text-slate-400 leading-relaxed font-medium">{msg}</p>
    </div>
  );
}

function MetricCard({ label, value, suffix = "", icon: Icon, trend, trendColor }: MetricCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="metric-card glass-card p-6 group overflow-hidden cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
          <Icon className="w-6 h-6 text-sky-400" />
        </div>
        <div className={cn("text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg bg-white/5", trendColor)}>
          {trend}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
        <h4 className="text-4xl font-black mt-1">
          <CountUp end={value} duration={2} separator="," />{suffix}
        </h4>
      </div>
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-all" />
    </motion.div>
  );
}
