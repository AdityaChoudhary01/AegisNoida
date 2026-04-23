"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Target, Activity, ShieldAlert, Zap } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  Point
} from "chart.js";
import { MASTER_DATASET, RISK_COLORS, SectorRecord } from "../data/dataset";
import { predictRisk } from "../ml/engine";
import CustomSelect from "./CustomSelect";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PredictionResult {
  label: string;
  confidence: number;
  predictedCrimeType: string;
  neighbors: {
    name: string;
    risk: string;
    distance: number;
  }[];
  sector: SectorRecord;
}

export default function Predictor() {
  const [selectedId, setSelectedId] = useState("");
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);

  const handlePredict = () => {
    if (!selectedId) return;
    const s = MASTER_DATASET.find(x => x.id === Number(selectedId))!;
    const input = [s.population, s.policeStations, s.cctvCoverage, s.streetLightIndex, s.theft, s.burglary, s.assault, s.vehicleCrime];
    const res = predictRisk(input);
    setPrediction({ ...res, sector: s } as PredictionResult);
  };

  const chartData: ChartData<"line", (number | Point | null)[], string> | null = prediction ? {
    labels: prediction.sector.history.map((h) => h.year.toString()),
    datasets: [
      {
        label: "Actual Incidents",
        data: prediction.sector.history.map((h) => h.total),
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        borderWidth: 4
      },
      {
        label: "KNN Predicted Path",
        data: [...prediction.sector.history.map((h) => h.total), prediction.sector.total * 1.08],
        borderColor: "#8b5cf6",
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 0
      }
    ]
  } : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
      <div className="lg:col-span-1 space-y-6">
        <div className="glass-card p-8 !overflow-visible relative z-[100]">
           <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="text-sky-500" /> ML Predictor</h3>
           <p className="text-[10px] text-slate-500 mb-8 leading-relaxed font-bold uppercase tracking-widest">
             Neural Engine: <span className="text-sky-400">KNN-Weighted Architecture</span>
           </p>

           <div className="space-y-6">
              <CustomSelect 
                label="Analysis Target"
                placeholder="Select Area..."
                options={MASTER_DATASET}
                value={selectedId}
                onChange={setSelectedId}
                icon={<Target className="w-4 h-4 text-sky-400" />}
              />
              <button 
                onClick={handlePredict}
                disabled={!selectedId}
                className="w-full btn-pro py-5 cursor-pointer"
              >
                Execute Analysis <Sparkles className="w-4 h-4 ml-2" />
              </button>
           </div>
        </div>

        {prediction && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="glass-card p-6 border-rose-500/20 bg-rose-500/5">
              <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest flex items-center gap-2">
                <ShieldAlert size={12} className="text-rose-500" /> Primary Threat Prediction
              </p>
              <h4 className="text-xl font-black mt-2 text-white uppercase tracking-tight">{prediction.predictedCrimeType}</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
                <div className="metric-card glass-card p-6">
                  <p className="text-[9px] uppercase font-bold text-slate-500 tracking-widest">Risk Category</p>
                  <h4 className="text-2xl font-black mt-1" style={{ color: RISK_COLORS[prediction.label] }}>{prediction.label}</h4>
                </div>
                <div className="metric-card glass-card p-6 border-sky-500/20">
                  <p className="text-[9px] uppercase font-bold text-slate-500 tracking-widest">Model Certainty</p>
                  <h4 className="text-2xl font-black mt-1 text-sky-400">{prediction.confidence}%</h4>
                </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="lg:col-span-3 space-y-6 md:space-y-10">
        <div className="glass-card p-6 md:p-10 h-[400px] md:h-[500px]">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10">
              <h3 className="text-xl font-bold flex items-center gap-2"><TrendingUp className="text-violet-500" /> Forecast Simulation</h3>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-sky-500" /> Historical
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-violet-500" /> KNN Projected
                 </div>
              </div>
           </div>
           <div className="h-[250px] md:h-[350px]">
              {chartData ? (
                <Line 
                  data={chartData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: { grid: { color: "rgba(255,255,255,0.03)" }, ticks: { color: "#64748b", font: { size: 10, weight: 'bold' } } },
                      x: { grid: { display: false }, ticks: { color: "#64748b", font: { size: 10, weight: 'bold' } } }
                    },
                    plugins: { 
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: '#0a0b1e',
                        titleFont: { size: 12, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        cornerRadius: 12,
                        displayColors: false
                      }
                    }
                  }} 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-700 border-2 border-dashed border-white/5 rounded-3xl">
                   <Target className="w-12 h-12 mb-4 opacity-20" />
                   <p className="text-sm font-bold uppercase tracking-widest opacity-40">Target Sector Awaiting Input</p>
                </div>
              )}
           </div>
        </div>

        {prediction && (
          <div className="glass-card p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
                <Zap className="w-40 h-40 text-emerald-500" />
             </div>
             <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-white"><Activity className="text-emerald-500" /> Geospatial Neighbors (KNN Clusters)</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prediction.neighbors.map((n, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                     className="p-6 glass border-white/5 rounded-2xl hover:border-white/20 transition-all cursor-pointer group"
                   >
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-sm font-black text-white group-hover:text-sky-400 transition-colors">{n.name}</span>
                         <div className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: RISK_COLORS[n.risk], color: RISK_COLORS[n.risk] }} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                           <span>Relational Distance</span>
                           <span className="text-slate-300">{n.distance.toFixed(2)} units</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }} animate={{ width: `${Math.max(100 - n.distance, 10)}%` }}
                             className="h-full bg-sky-500/50" 
                           />
                        </div>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
