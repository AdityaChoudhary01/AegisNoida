"use client";
import { useState } from "react";
import { Search, ArrowUpRight, Download, FileText, Share2 } from "lucide-react";
import { MASTER_DATASET, RISK_COLORS } from "../data/dataset";
import { cn } from "../utils/cn";

export default function Explorer() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [exporting, setExporting] = useState(false);

  const filtered = MASTER_DATASET.filter(s => 
    (s.name.toLowerCase().includes(query.toLowerCase())) &&
    (type === "All" || s.type === type)
  );

  const types = ["All", "Residential", "Village", "Institutional", "Industrial", "Commercial"];

  const handleExport = () => {
    setExporting(true);
    setTimeout(() => {
      // Functional Export Logic: CSV Generation
      const headers = ["ID", "Name", "Type", "Risk Level", "Safety Score", "Population", "Crimes"];
      const rows = MASTER_DATASET.map(s => [
        s.id, s.name, s.type, s.riskLevel, s.safetyScore, s.population, s.total
      ]);
      const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "Aegis_Noida_Safety_Report.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setExporting(false);
    }, 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Aegis Noida Intelligence',
        text: 'Accessing real-time safety analytics for Greater Noida.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert("Intelligence Link copied to clipboard!");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search sectors, villages, or hubs..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all focus:bg-white/10"
          />
        </div>
        
        <div className="flex items-center gap-4">
           <button 
             onClick={handleExport}
             disabled={exporting}
             className="px-6 py-4 rounded-[1.5rem] bg-white/5 border border-white/10 text-xs font-bold flex items-center gap-3 hover:bg-white/10 transition-all disabled:opacity-50"
           >
             {exporting ? "Compiling Matrix..." : <><FileText className="w-4 h-4 text-sky-400" /> Export Intelligence Report</>}
           </button>
           <button onClick={handleShare} className="p-4 rounded-[1.5rem] bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all">
              <Share2 className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {types.map(t => (
          <button 
            key={t}
            onClick={() => setType(t)}
            className={cn(
              "px-6 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
              type === t 
                ? "bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20" 
                : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Main Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#0a0c16]/95 backdrop-blur-xl z-20">
              <tr className="text-[10px] uppercase tracking-widest text-slate-500 font-black">
                <th className="px-10 py-6 border-b border-white/5">Area Node</th>
                <th className="px-10 py-6 border-b border-white/5">Risk Classification</th>
                <th className="px-10 py-6 border-b border-white/5 text-center">Safety Index</th>
                <th className="px-10 py-6 border-b border-white/5 text-right">Population</th>
                <th className="px-10 py-6 border-b border-white/5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map(s => (
                <tr key={s.id} className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="px-10 py-6">
                    <div className="font-bold text-slate-200 group-hover:text-white transition-colors">{s.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono tracking-tighter uppercase mt-1">{s.type} · {s.lat.toFixed(3)}, {s.lng.toFixed(3)}</div>
                  </td>
                  <td className="px-10 py-6">
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight"
                      style={{ 
                        backgroundColor: RISK_COLORS[s.riskLevel] + "22", 
                        color: RISK_COLORS[s.riskLevel],
                        border: `1px solid ${RISK_COLORS[s.riskLevel]}44`
                      }}
                    >
                      {s.riskLevel}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-center">
                    <div className={cn(
                      "text-sm font-black",
                      s.safetyScore > 75 ? "text-emerald-400" : s.safetyScore > 50 ? "text-sky-400" : "text-rose-400"
                    )}>
                      {s.safetyScore}%
                    </div>
                  </td>
                  <td className="px-10 py-6 text-right text-sm font-mono text-slate-400">{s.population}k</td>
                  <td className="px-10 py-6 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="p-2 rounded-xl bg-white/5 hover:bg-sky-500 hover:text-white transition-all text-slate-500">
                          <Download className="w-4 h-4" />
                       </button>
                       <button className="p-2 rounded-xl bg-white/5 hover:bg-sky-500 hover:text-white transition-all text-slate-500">
                          <ArrowUpRight className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
