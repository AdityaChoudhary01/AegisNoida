"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TowerControl, Zap, ArrowRight, Lightbulb, Users, Target, Shield, Radio, MapPin, CheckCircle } from "lucide-react";
import { MASTER_DATASET } from "../data/dataset";
import CustomSelect from "./CustomSelect";
import { useAuth } from "../context/AuthContext";
import { usePersistence } from "../context/PersistenceContext";

export default function Simulator() {
  const { user } = useAuth();
  const { sosAlerts, resolveSOS } = usePersistence();
  const [selectedId, setSelectedId] = useState("");
  const [cctv, setCctv] = useState(0);
  const [police, setPolice] = useState(0);
  const [lights, setLights] = useState(0);

  const sector = MASTER_DATASET.find(x => x.id === Number(selectedId));

  const calculateImpact = () => {
    if (!sector) return { score: 0, delta: 0 };
    const base = sector.safetyScore;
    const bonus = (cctv * 0.15) + (police * 5) + (lights * 0.1);
    const newScore = Math.min(98, Math.round(base + bonus));
    return { score: newScore, delta: newScore - base };
  };

  const impact = calculateImpact();

  const activeAlerts = sosAlerts.filter(a => a.status === "Active");

  // Police Portal View
  if (user?.role === "Police" || user?.role === "Admin") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Radio className="w-32 h-32" /></div>
              <div className="flex items-center justify-between mb-10">
                 <div>
                    <h3 className="text-2xl font-black text-white">ACTIVE DISPATCH QUEUE</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-1">Live Emergency Monitoring Node</p>
                 </div>
                 <div className="px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
                    {activeAlerts.length} Critical Alerts
                 </div>
              </div>

              <div className="space-y-4">
                 <AnimatePresence mode="popLayout">
                    {activeAlerts.length > 0 ? (
                      activeAlerts.map(alert => (
                        <motion.div 
                          key={alert.id}
                          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                          className="p-6 glass border-white/5 rounded-3xl flex items-center gap-6 group hover:border-rose-500/30 transition-all"
                        >
                           <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/10">
                              <Shield className="text-rose-500 w-6 h-6" />
                           </div>
                           <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                 <h4 className="font-black text-white uppercase tracking-tight">SOS TRIGGER: {alert.userName}</h4>
                                 <span className="px-2 py-0.5 rounded-lg bg-white/5 text-[8px] font-bold text-slate-500">{alert.timestamp}</span>
                              </div>
                              <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                 <MapPin className="w-3 h-3 text-sky-500" /> COORDINATES: {alert.lat}, {alert.lng}
                              </p>
                           </div>
                           <button 
                             onClick={async () => await resolveSOS(alert.id)}
                             className="px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer flex items-center gap-2"
                           >
                              <CheckCircle className="w-4 h-4" /> Resolve
                           </button>
                        </motion.div>
                      ))
                    ) : (
                      <div className="py-20 flex flex-col items-center text-center opacity-40">
                         <CheckCircle className="w-16 h-16 mb-4 text-emerald-500" />
                         <h3 className="text-xl font-bold">ALL CLEAR</h3>
                         <p className="text-xs text-slate-500">No active emergency signals detected in Noida grid.</p>
                      </div>
                    )}
                 </AnimatePresence>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                 <h4 className="text-sm font-bold mb-6 flex items-center gap-2 text-sky-400"><Target className="w-4 h-4" /> PCR Response Metrics</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold text-slate-500 uppercase">Avg Response Time</span>
                       <span className="text-2xl font-black text-white">4.2<span className="text-xs text-slate-600 ml-1">m</span></span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <div className="w-[85%] h-full bg-sky-500" />
                    </div>
                 </div>
              </div>
              <div className="glass-card p-8">
                 <h4 className="text-sm font-bold mb-6 flex items-center gap-2 text-emerald-400"><Users className="w-4 h-4" /> On-Field Deployment</h4>
                 <div className="flex items-center gap-6">
                    <div className="flex-1">
                       <p className="text-3xl font-black text-white">42</p>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Active Units</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-1 glass-card p-8 space-y-8">
           <h3 className="text-lg font-black text-white uppercase tracking-tight">Intelligence Feed</h3>
           <div className="space-y-6">
              {[
                { time: "18:42", msg: "Satellite re-sync with Delta-4 node successful." },
                { time: "18:35", msg: "PCR-12 patrolling Alpha-2 commercial belt." },
                { time: "18:20", msg: "Traffic congestion detected near Pari Chowk." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                   <span className="text-[10px] font-black text-sky-500 shrink-0">{item.time}</span>
                   <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{item.msg}</p>
                </div>
              ))}
           </div>
           <div className="pt-8 border-t border-white/5">
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 rounded-xl transition-all border border-white/5">
                View Full Logs
              </button>
           </div>
        </div>
      </div>
    );
  }

  // Public Simulator View
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-1 glass-card p-6 md:p-10 space-y-10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-sky-500/10"><TowerControl className="text-sky-400" /></div>
          <div>
            <h3 className="text-xl font-bold">Policy Simulator</h3>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Infrastructure ROI Modeling</p>
          </div>
        </div>

        <div className="space-y-8">
           <CustomSelect 
             label="Simulated Zone"
             placeholder="Select Target Sector..."
             options={MASTER_DATASET}
             value={selectedId}
             onChange={setSelectedId}
             icon={<Target className="w-4 h-4 text-sky-400" />}
           />

           <div className="space-y-6">
             <div className="space-y-4">
               <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>Additional CCTV Units</span>
                  <span className="text-sky-400">{cctv}</span>
               </div>
               <input type="range" value={cctv} onChange={(e) => setCctv(Number(e.target.value))} min={0} max={100} className="w-full accent-sky-500 bg-white/5 h-2 rounded-full cursor-pointer" />
             </div>

             <div className="space-y-4">
               <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>New Police Outposts</span>
                  <span className="text-indigo-400">{police}</span>
               </div>
               <input type="range" value={police} onChange={(e) => setPolice(Number(e.target.value))} min={0} max={5} className="w-full accent-indigo-500 bg-white/5 h-2 rounded-full cursor-pointer" />
             </div>

             <div className="space-y-4">
               <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>Lighting Index Improvement</span>
                  <span className="text-amber-400">{lights}%</span>
               </div>
               <input type="range" value={lights} onChange={(e) => setLights(Number(e.target.value))} min={0} max={100} className="w-full accent-amber-500 bg-white/5 h-2 rounded-full cursor-pointer" />
             </div>
           </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-6 md:gap-10">
        {!sector ? (
          <div className="flex-1 glass-card p-10 flex flex-col items-center justify-center text-center opacity-40 border-dashed border-2">
             <Zap className="w-16 h-16 mb-6 text-slate-700" />
             <h3 className="text-2xl font-black">Simulator Offline</h3>
             <p className="max-w-xs mt-2 text-sm text-slate-500">Select a zone to activate the infrastructure ROI predictive modeling engine.</p>
          </div>
        ) : (
          <>
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5"><TowerControl className="w-24 h-24 md:w-32 md:h-32" /></div>
               <h3 className="text-xl font-bold mb-6 md:mb-10">Predicted Safety ROI</h3>
               
               <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-6 md:py-10 relative z-10">
                  <div className="text-center">
                     <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">Baseline</p>
                     <div className="text-4xl md:text-5xl font-black text-slate-400">{sector.safetyScore}%</div>
                  </div>
                  <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 90] }} transition={{ repeat: Infinity, duration: 2 }} className="md:rotate-0">
                    <ArrowRight className="text-slate-700 w-8 h-8 md:w-10 md:h-10" />
                  </motion.div>
                  <div className="text-center">
                     <p className="text-[10px] uppercase font-bold text-sky-400 mb-2">Projected</p>
                     <div className="text-6xl md:text-7xl font-black text-sky-500 drop-shadow-[0_0_25px_rgba(14,165,233,0.3)]">{impact.score}%</div>
                  </div>
               </div>

               <div className="flex justify-center mt-6">
                  <div className="px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-bold flex items-center gap-2">
                     <Zap className="w-3 h-3" /> Net Impact: +{impact.delta}% Safety Increase
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               <div className="glass-card p-8">
                  <h4 className="text-sm font-bold mb-6 flex items-center gap-2 text-indigo-400"><Users className="w-4 h-4" /> Demographic Impact</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Improvement in {sector.name} affects approximately <b>{sector.population}k</b> residents. 
                    Predicted reduction in street crimes: <b>{Math.round(impact.delta * 0.8)}%</b>.
                  </p>
               </div>
               <div className="glass-card p-8">
                  <h4 className="text-sm font-bold mb-6 flex items-center gap-2 text-amber-400"><Lightbulb className="w-4 h-4" /> Strategy Optimization</h4>
                  <ul className="space-y-3">
                    <li className="text-[11px] text-slate-400 flex items-start gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0" />
                       Combining CCTV with lighting yields 1.4x better ROI.
                    </li>
                    <li className="text-[11px] text-slate-400 flex items-start gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0" />
                       Outpost placement should focus on {sector.type} boundaries.
                    </li>
                  </ul>
               </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
