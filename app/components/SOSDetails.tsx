"use client";
import { Phone, Mail, Calendar, MapPin, Navigation, ShieldAlert, CheckCircle2 } from "lucide-react";
import { SOSAlert } from "../context/PersistenceContext";
import MapComponent from "./Map";

interface SOSDetailsProps {
  sos: SOSAlert;
  onResolve: (id: string) => void;
}

export default function SOSDetails({ sos, onResolve }: SOSDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* User Identity Profile */}
      <div className="space-y-6">
        <div className="glass-card p-8 border-rose-500/20 bg-rose-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
            Live SOS
          </div>
          <div className="flex items-center gap-4 mb-8">
             <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/30">
                <ShieldAlert className="text-rose-500 w-8 h-8" />
             </div>
             <div>
                <h3 className="text-xl font-black text-white">{sos.userName}</h3>
                <p className="text-[10px] text-rose-500 font-bold uppercase tracking-widest">Emergency Victim Profile</p>
             </div>
          </div>

          <div className="space-y-4">
             <DetailItem icon={Phone} label="Contact Mobile" value={sos.userMobile || "N/A"} color="text-sky-400" />
             <DetailItem icon={Mail} label="Email Address" value={sos.userEmail} color="text-sky-400" />
             <DetailItem icon={Calendar} label="Age Group" value={`${sos.userAge} Years`} color="text-sky-400" />
             <DetailItem icon={MapPin} label="Coordinates" value={`${sos.lat.toFixed(6)}, ${sos.lng.toFixed(6)}`} color="text-rose-400" />
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
             <button 
              onClick={() => onResolve(sos.id)}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
             >
               <CheckCircle2 size={16} /> Mark as Resolved
             </button>
          </div>
        </div>

        <div className="glass-card p-6 border-white/5">
           <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
             <Navigation size={14} className="text-sky-500" /> Response Intelligence
           </h4>
           <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Estimated Arrival</p>
              <p className="text-lg font-black text-white">4.2 Minutes</p>
           </div>
        </div>
      </div>

      {/* Geospatial Response Map */}
      <div className="lg:col-span-2 space-y-6">
        <div className="glass-card p-4 h-[600px] relative overflow-hidden">
           <div className="absolute top-8 left-8 z-10 p-4 glass-card bg-black/80 border-sky-500/50">
              <p className="text-[10px] font-black uppercase tracking-widest text-sky-400 mb-1">Path Optimization</p>
              <p className="text-xs font-bold text-white">Dijkstra Shortest Path: Active</p>
           </div>
           <MapComponent mode="risk" clusters={null} sosLocation={{ lat: sos.lat, lng: sos.lng }} showPath={true} />
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon: Icon, label, value, color }: { icon: React.ElementType, label: string, value: string, color: string }) {
  return (
    <div className="flex items-center gap-4">
       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
          <Icon className="w-5 h-5 text-slate-500" />
       </div>
       <div>
          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{label}</p>
          <p className={cn("text-sm font-bold", color)}>{value}</p>
       </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
