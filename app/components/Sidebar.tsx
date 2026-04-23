"use client";
import { useState } from "react";
import { LayoutGrid, Route, Brain, Database, TowerControl, Bell, Settings, X, Info, LogOut, User as UserIcon, ShieldAlert, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "../utils/cn";
import { useAuth } from "../context/AuthContext";
import { usePersistence } from "../context/PersistenceContext";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  onSOSAction?: (sosId: string) => void;
}

export default function Sidebar({ activeView, setActiveView, isOpen = false, onClose, onSOSAction }: SidebarProps) {
  const { user, logout, setShowAuth } = useAuth();
  const { cityNotifications, clearNotifications } = usePersistence();
  const [showNotifications, setShowNotifications] = useState(false);
  
  const items = [
    { id: "dashboard", label: "Intelligence", icon: LayoutGrid, group: "Core" },
    { id: "predictor", label: "Risk Engine", icon: Brain, group: "Analysis" },
    { id: "router", label: "Navigator", icon: Route, group: "Dispatch" },
    { id: "commander", label: "Simulator", icon: TowerControl, group: "Training" },
    { id: "explorer", label: "Data Hub", icon: Database, group: "System" },
  ];

  const filteredNotifications = cityNotifications.filter(n => {
    if (user?.role === "Police" || user?.role === "Admin") return true;
    return !n.isSOS; 
  });

  const groups = Array.from(new Set(items.map(i => i.group)));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[35] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-[#0a0b1e]/80 backdrop-blur-3xl border-r border-white/5 transition-transform duration-500 ease-out flex flex-col p-6",
        !isOpen && "-translate-x-full lg:translate-x-0"
      )}>
          <div className="flex items-center gap-4 mb-16 px-2">
             <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.1)] overflow-hidden relative">
                <Image src="/logo.png" alt="Aegis Logo" fill className="object-cover" />
             </div>
             <div>
                <h1 className="text-xl font-black tracking-tighter text-white">AEGIS<span className="text-sky-500">NOIDA</span></h1>
                <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">Intelligence Node</p>
             </div>
          </div>

          <nav className="space-y-10 flex-1 overflow-y-auto custom-scrollbar pr-2 mb-6">
            {groups.map(group => (
              <div key={group}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-6 ml-5">{group}</p>
                <div className="space-y-2">
                  {items.filter(i => i.group === group).map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveView(item.id);
                        if (window.innerWidth < 1024) onClose?.();
                      }}
                      className={cn(
                        "nav-item w-full",
                        activeView === item.id && "active"
                      )}
                    >
                      <item.icon size={20} />
                      <span className="text-sm font-bold">{item.label}</span>
                      {activeView === item.id && (
                        <motion.div layoutId="active" className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_#0ea5e9]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="p-4 glass-card bg-sky-500/5 border-sky-500/10 flex flex-col gap-4">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                   <UserIcon className="w-5 h-5 text-sky-400" />
                </div>
                <div className="flex-1 overflow-hidden">
                   <p className="text-xs font-black text-white truncate capitalize">{user?.name}</p>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{user?.role}</p>
                </div>
                {user?.role !== "Guest" && (
                  <button onClick={logout} className="p-2 hover:bg-rose-500/10 hover:text-rose-500 rounded-lg transition-all cursor-pointer">
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
             </div>
             {user?.role === "Guest" && (
               <button 
                onClick={() => setShowAuth(true)}
                className="w-full py-3 bg-sky-500/10 border border-sky-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest text-sky-400 hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
               >
                 <ShieldAlert className="w-3 h-3" /> Elevate Clearance
               </button>
             )}
          </div>
          
          <div className="flex items-center justify-between px-2 text-slate-500 mt-6">
             <button className="hover:text-white transition-colors cursor-pointer p-2"><Settings className="w-5 h-5" /></button>
             {user?.role !== "Guest" && (
               <button 
                 onClick={() => setShowNotifications(true)}
                 className="hover:text-white transition-colors relative cursor-pointer p-2"
               >
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-ping" />
               </button>
             )}
          </div>
      </aside>

      <AnimatePresence>
        {showNotifications && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowNotifications(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[300]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full md:w-96 bg-[#0a0c16] border-l border-white/5 z-[350] p-8 md:p-10 flex flex-col"
            >
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-3">
                    <Bell className="text-sky-500" /> Notifications
                  </h3>
                  <div className="flex gap-2">
                     <button 
                       onClick={clearNotifications}
                       className="p-2 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer text-[10px] font-black uppercase tracking-widest text-rose-500 border border-rose-500/20"
                     >
                       Purge
                     </button>
                     <button onClick={() => setShowNotifications(false)} className="p-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
                       <X className="w-5 h-5 text-slate-500" />
                     </button>
                  </div>
               </div>

               <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                  {filteredNotifications.map(n => (
                    <div 
                      key={n.id} 
                      onClick={() => {
                        if (n.isSOS && n.sosId && onSOSAction) {
                          onSOSAction(n.sosId);
                          setShowNotifications(false);
                        }
                      }}
                      className={cn(
                        "p-6 glass-card group transition-all cursor-pointer",
                        n.isSOS ? "border-rose-500/20 hover:border-rose-500/50 bg-rose-500/5" : "hover:border-white/10"
                      )}
                    >
                       <div className="flex justify-between items-start mb-2">
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg",
                            n.type === 'Emergency' ? 'bg-rose-500/10 text-rose-500' : 
                            n.type === 'Alert' ? 'bg-amber-500/10 text-amber-400' : 'bg-sky-500/10 text-sky-500'
                          )}>
                            {n.title}
                          </span>
                          <span className="text-[10px] text-slate-600 font-bold">{n.time}</span>
                       </div>
                       <p className="text-xs text-slate-400 font-medium leading-relaxed">{n.message}</p>
                       {n.isSOS && (
                         <button 
                           onClick={(e) => {
                             e.stopPropagation();
                             if (n.sosId && onSOSAction) onSOSAction(n.sosId);
                           }}
                           className="mt-4 flex items-center gap-2 text-[10px] font-black text-rose-500 hover:text-rose-400 uppercase tracking-widest cursor-pointer transition-colors border-none bg-transparent"
                         >
                            <Navigation size={12} /> View Response Profile
                         </button>
                       )}
                    </div>
                  ))}

                  {filteredNotifications.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center opacity-30">
                       <Info size={40} className="mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest">No active alerts</p>
                    </div>
                  )}
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
