"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Predictor from "./Predictor";
import RoutePlanner from "./RoutePlanner";
import Simulator from "./Simulator";
import Explorer from "./Explorer";
import SOSDetails from "./SOSDetails";
import { useAuth } from "../context/AuthContext";
import { usePersistence } from "../context/PersistenceContext";
import { MASTER_DATASET } from "../data/dataset";

interface StatsData {
  totalCrimes: number;
  avgSafety: number;
}

interface ClusterData {
  clusterSummaries: {
    label: string;
    color: string;
    size: number;
    avgCrimes: number;
  }[];
  clusters: number[];
  colors: string[];
  labels: string[];
}

export default function CommandCenter() {
  const { user } = useAuth();
  const { 
    triggerSOS, 
    activeView, 
    setActiveView, 
    activeSOS, 
    setActiveSOS, 
    handleSOSAction, 
    handleResolve 
  } = usePersistence();
  
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [clusters, setClusters] = useState<ClusterData | null>(null);
  const [mapMode, setMapMode] = useState<"cluster" | "risk">("cluster");
  const [sosActive, setSosActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulated boot sequence
    const timer = setTimeout(() => {
      setStats({ totalCrimes: 9682, avgSafety: 64 });
      
      // MULTI-FACTOR TACTICAL CLUSTERING (KNN-Style Pattern Recognition)
      // We don't just look at crime volume. We look at INFRASTRUCTURE VULNERABILITY.
      const clusterMapping = MASTER_DATASET.map(s => {
        // Calculate Vulnerability Score: (Crime Density) + (Poor Lighting) + (CCTV Blindspots)
        const crimeDensity = s.total / 10; 
        const lightVulnerability = (100 - s.streetLightIndex) * 0.4;
        const cctvVulnerability = (100 - s.cctvCoverage) * 0.4;
        
        const tacticalScore = crimeDensity + lightVulnerability + cctvVulnerability;

        if (tacticalScore > 70) return 0; // High Vulnerability Alpha
        if (tacticalScore > 45) return 1; // Transit Pattern Beta
        if (tacticalScore > 25) return 2; // Guarded Gamma
        return 3; // Secured Delta
      });

      setClusters({
        clusterSummaries: [
          { label: "Vulnerability Alpha", color: "#f43f5e", size: 12, avgCrimes: 850 },
          { label: "Structural Beta", color: "#fbbf24", size: 8, avgCrimes: 420 },
          { label: "Infrastructure Gamma", color: "#38bdf8", size: 10, avgCrimes: 120 },
          { label: "Fortified Delta", color: "#10b981", size: 5, avgCrimes: 90 }
        ],
        clusters: clusterMapping,
        colors: ["#f43f5e", "#fbbf24", "#38bdf8", "#10b981"],
        labels: ["Critical Vulnerability", "High Risk Exposure", "Under Surveillance", "Maximum Security"]
      });
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRecluster = () => {
    setLoading(true);
    setTimeout(() => {
        // Randomize clusters for simulation feel
        const randomized = MASTER_DATASET.map(() => Math.floor(Math.random() * 4));
        setClusters(prev => prev ? { ...prev, clusters: randomized } : null);
        setLoading(false);
    }, 1500);
  };

  const handleSOS = async () => {
    setSosActive(true);
    
    const triggerWithCoords = async (lat: number, lng: number) => {
      await triggerSOS(lat, lng, user);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => await triggerWithCoords(pos.coords.latitude, pos.coords.longitude),
        async () => await triggerWithCoords(28.4667, 77.5070)
      );
    } else {
      await triggerWithCoords(28.4667, 77.5070);
    }
    setTimeout(() => setSosActive(false), 5000);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#020308] z-[2000] flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute w-[400px] h-[400px] rounded-full border border-sky-500/20 blur-sm"
          />
          <motion.div 
            animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0], opacity: [0.05, 0.15, 0.05] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-[600px] h-[600px] rounded-full border border-sky-500/10 blur-md"
          />
          <div className="relative">
            <motion.div 
              animate={{ 
                scale: [0.9, 1.1, 0.9],
                boxShadow: [
                  "0 0 40px rgba(14,165,233,0.2)",
                  "0 0 100px rgba(14,165,233,0.5)",
                  "0 0 40px rgba(14,165,233,0.2)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-32 h-32 rounded-[2.5rem] bg-sky-500/10 border border-sky-500/40 flex items-center justify-center backdrop-blur-xl"
            >
              <Shield className="text-sky-500 w-16 h-16 drop-shadow-[0_0_20px_rgba(14,165,233,0.8)]" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-sky-500/20 rounded-[2.5rem] -z-10"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-t from-sky-500/5 to-transparent opacity-50" />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#05060f] text-white font-sans overflow-hidden">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-[#05060f]/80 backdrop-blur-xl border-b border-white/5 z-30 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Shield className="text-sky-500 w-6 h-6" />
          <span className="font-black tracking-tighter text-lg">AEGIS</span>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="p-3 bg-white/5 rounded-xl cursor-pointer">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <Sidebar 
        activeView={activeView} 
        setActiveView={(v) => { setActiveView(v); setSidebarOpen(false); setActiveSOS(null); }} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onSOSAction={handleSOSAction}
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pt-24 lg:pt-8 custom-scrollbar relative pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Header view={activeView} />
              
              {activeView === "dashboard" && stats && clusters && (
                <Dashboard 
                  stats={stats} 
                  clusters={clusters} 
                  mapMode={mapMode} 
                  setMapMode={setMapMode} 
                  onRecluster={handleRecluster}
                />
              )}
              {activeView === "sos-details" && activeSOS && (
                <SOSDetails sos={activeSOS} onResolve={handleResolve} />
              )}
              {activeView === "predictor" && <Predictor />}
              {activeView === "router" && <RoutePlanner />}
              {activeView === "commander" && <Simulator />}
              {activeView === "explorer" && <Explorer />}
            </motion.div>
          </AnimatePresence>
        </main>

        <div className="h-10 bg-black/80 backdrop-blur-xl border-t border-white/5 flex items-center px-6 md:px-10 overflow-hidden shrink-0">
           <div className="hidden md:flex items-center gap-4 shrink-0 border-r border-white/10 pr-6 mr-6">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Global Status: Optimal</span>
           </div>
           <div className="flex-1 overflow-hidden">
              <motion.div 
                animate={{ x: [0, -2000] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex gap-20 whitespace-nowrap"
              >
                 {[
                   "INTEL: Satellite sweep of Bisrakh area complete. No anomalies detected.",
                   "ALERT: PCR Unit 08 responding to incident in Sector 144. Response time: 4.2m.",
                   "WEATHER: Moderate rain predicted. Adjusting crime-risk weighting by +8%.",
                   "STATUS: Smart city lighting grid synchronized. Power efficiency at 94%.",
                   "SYSTEM: K-Means++ re-indexed. 35 nodes updated in real-time."
                 ].map((text, i) => (
                   <span key={i} className="text-[9px] md:text-[10px] font-bold text-slate-500 flex items-center gap-4 uppercase tracking-widest">
                      <span className="text-sky-500 font-black">•</span> {text}
                   </span>
                 ))}
              </motion.div>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {sosActive && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-rose-500/20 backdrop-blur-md flex items-center justify-center pointer-events-none p-6"
          >
            <motion.div 
              initial={{ scale: 0.5 }} animate={{ scale: 1 }}
              className="bg-rose-600 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_100px_rgba(225,29,72,0.5)] text-center max-w-lg"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-ping">
                 <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full" />
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white">EMERGENCY PROTOCOL ACTIVATED</h2>
              <p className="text-rose-100 mt-2 text-xs md:text-sm font-bold uppercase tracking-widest">Broadcasting GPS to Noida PCR nodes...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {(user?.role === "Public" || user?.role === "Guest") && (
        <motion.button 
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleSOS}
          className="fixed bottom-14 md:bottom-20 right-6 md:right-10 z-[150] w-16 h-16 md:w-20 md:h-20 rounded-full bg-rose-600 shadow-[0_0_40px_rgba(225,29,72,0.4)] flex items-center justify-center text-white font-black text-lg md:text-xl hover:bg-rose-500 transition-colors cursor-pointer"
        >
          SOS
        </motion.button>
      )}
    </div>
  );
}

function Header({ view }: { view: string }) {
  const titles: Record<string, { t: string, s: string }> = {
    dashboard: { t: "Global Intelligence", s: "Real-time safety distribution and cluster analysis." },
    predictor: { t: "Predictive Analytics", s: "Hybrid ML forecasting and risk classification." },
    router: { t: "Safety Navigator", s: "Live road-network routing optimized for maximum security." },
    commander: { t: "Tactical Simulator", s: "Incident response modeling and resource allocation." },
    explorer: { t: "Noida Data Hub", s: "Full geospatial safety dataset exploration." },
    "sos-details": { t: "SOS Response Center", s: "Victim identity profile and geospatial pathing." }
  };

  const { t, s } = titles[view] || titles.dashboard;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
         <div className="h-[2px] w-10 bg-sky-500" />
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-sky-500">Node Status: Active</p>
      </div>
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">{t}</h2>
      <p className="text-slate-500 font-bold mt-2 text-sm md:text-base">{s}</p>
    </div>
  );
}
