"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "../utils/cn";

interface Option {
  id: string | number;
  name: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  icon?: React.ReactNode;
}

export default function CustomSelect({ options, value, onChange, placeholder, label, icon }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.id.toString() === value.toString());

  const filteredOptions = options.filter(o => 
    o.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      {label && <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">{label}</label>}
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer transition-all hover:bg-white/10 group",
          isOpen && "border-sky-500/50 bg-white/10 shadow-[0_0_20px_rgba(14,165,233,0.1)]"
        )}
      >
        <div className="flex items-center gap-4 overflow-hidden">
          {icon}
          <span className={cn(
            "text-sm font-medium truncate",
            !selectedOption ? "text-slate-500" : "text-white"
          )}>
            {selectedOption ? selectedOption.name : placeholder}
          </span>
        </div>
        <ChevronDown className={cn("w-4 h-4 text-slate-500 transition-transform duration-300", isOpen && "rotate-180")} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 z-[500] bg-[#0a0c16]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="p-4 border-b border-white/5 bg-white/5">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Search areas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-sky-500/30 transition-all"
                  />
               </div>
            </div>
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map(option => (
                  <div 
                    key={option.id}
                    onClick={() => {
                      onChange(option.id.toString());
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={cn(
                      "px-6 py-4 text-sm font-medium cursor-pointer transition-colors",
                      option.id.toString() === value.toString() ? "bg-sky-500/20 text-sky-400" : "text-slate-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {option.name}
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-xs text-slate-600 font-bold uppercase tracking-widest">
                  No matching area
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
