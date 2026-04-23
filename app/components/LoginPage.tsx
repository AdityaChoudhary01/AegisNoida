"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Mail, Lock, Fingerprint, ArrowRight, BadgeCheck, User as UserIcon, Phone, Calendar, AlertCircle } from "lucide-react";
import { useAuth, UserRole } from "../context/AuthContext";

export default function LoginPage({ isModal = false }: { isModal?: boolean }) {
  const { login, signup, continueAsGuest, setShowAuth } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [beltNumber, setBeltNumber] = useState("");
  const [role, setRole] = useState<UserRole>("Public");
  const [status, setStatus] = useState<"idle" | "authenticating" | "verifying">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("authenticating");
    
    let result;
    if (!isLogin) {
      result = await signup({ 
        email, 
        password,
        name: name || email.split("@")[0], 
        role, 
        age: Number(age), 
        mobileNumber: mobile, 
        beltNumber: role === "Police" ? beltNumber : undefined 
      });
    } else {
      if (role === "Police") {
        setStatus("verifying");
        // Simulated extra delay for police verification
        await new Promise(resolve => setTimeout(resolve, 1000));
        result = await login(email, password, role, beltNumber);
      } else {
        result = await login(email, password, role);
      }
    }
    handleResult(result);
  };

  const handleResult = (result: { success: boolean; message: string }) => {
    if (!result.success) {
      setError(result.message);
      setStatus("idle");
    } else {
      if (isModal) setShowAuth(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#05060f] z-[1000] overflow-y-auto custom-scrollbar">
      <div className="bg-mesh opacity-50" />
      
      {/* Centering Wrapper */}
      <div className="min-h-full w-full flex flex-col items-center justify-center p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-lg relative z-10"
        >
          <div className="glass-card p-8 md:p-10 border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.2)] mb-4 relative">
                <Shield className="text-sky-500 w-8 h-8" />
                {isModal && (
                  <button 
                    onClick={() => setShowAuth(false)}
                    className="absolute -top-12 -right-12 p-3 hover:bg-white/5 rounded-full transition-colors cursor-pointer text-slate-500 hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-white uppercase">{isLogin ? "Sign In" : "Register"}</h2>
              <div className="flex gap-4 mt-2">
                <button 
                  onClick={() => { setIsLogin(true); setError(""); }} 
                  className={`text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors ${isLogin ? 'text-sky-400' : 'text-slate-600 hover:text-slate-400'}`}
                >
                  Sign In
                </button>
                {role === "Public" && (
                  <>
                    <div className="w-[1px] h-3 bg-white/10" />
                    <button 
                      onClick={() => { setIsLogin(false); setError(""); }} 
                      className={`text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors ${!isLogin ? 'text-sky-400' : 'text-slate-600 hover:text-slate-400'}`}
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex gap-2 p-1 glass rounded-2xl mb-2">
                {(["Public", "Police", "Admin"] as UserRole[]).map(r => (
                  <button 
                    key={r}
                    type="button"
                    disabled={status !== "idle"}
                    onClick={() => { 
                      setRole(r); 
                      setError(""); 
                      if (r !== "Public") setIsLogin(true);
                    }}
                    className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                      role === r ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "text-slate-500 hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-3 text-rose-500 text-xs font-bold"
                  >
                    <AlertCircle size={16} />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {!isLogin && (
                  <div className="relative md:col-span-2">
                    <UserIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text" required placeholder="Full Legal Name" value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all"
                    />
                  </div>
                )}

                <div className={isLogin ? "md:col-span-2 relative" : "relative"}>
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="email" required placeholder="Email Address" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all"
                  />
                </div>

                {!isLogin && (
                  <>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        type="tel" required placeholder="Mobile Number" value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        type="number" required placeholder="Age" value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all"
                      />
                    </div>
                  </>
                )}

                <AnimatePresence mode="popLayout">
                  {role === "Police" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      className="relative overflow-hidden md:col-span-2"
                    >
                      <BadgeCheck className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                      <input 
                        type="text" required placeholder="Police Belt Number" value={beltNumber}
                        onChange={(e) => setBeltNumber(e.target.value)}
                        className="w-full bg-sky-500/5 border border-sky-500/20 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all text-sky-400"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative md:col-span-2">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder={role === "Admin" ? "Admin Password" : "Password"}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-sky-500/50 transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-5 bg-sky-500 hover:bg-sky-400 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 overflow-hidden relative group"
              >
                {status === "idle" ? (
                  <>
                    <Fingerprint className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {isLogin ? "Login Now" : "Register Now"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {status === "authenticating" ? "Loading..." : "Verifying..."}
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-white/5 text-center space-y-6">
               {!isModal && (
                 <button 
                   type="button"
                   onClick={() => continueAsGuest()}
                   className="text-[10px] text-sky-400 font-black uppercase tracking-[0.2em] hover:text-sky-300 transition-colors cursor-pointer"
                 >
                   Continue as Guest Observer
                 </button>
               )}
               <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] leading-relaxed">
                 {role === "Admin" ? "RESTRICTED ADMIN ACCESS" : role === "Police" ? "OFFICIAL POLICE ACCESS" : "SECURE SYSTEM ACCESS"}
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
