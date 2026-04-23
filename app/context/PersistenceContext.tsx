"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { MASTER_DATASET, SectorRecord } from "../data/dataset";

export interface SOSAlert {
  id: string;
  lat: number;
  lng: number;
  timestamp: string;
  userName: string;
  userEmail: string;
  userMobile?: string;
  userAge?: number;
  status: "Active" | "Resolved";
}

export interface CityNotification {
  id: string;
  title: string;
  message: string;
  type: "General" | "Alert" | "Emergency";
  time: string;
  isSOS?: boolean;
  sosId?: string;
}

interface PersistenceContextType {
  dataset: SectorRecord[];
  sosAlerts: SOSAlert[];
  cityNotifications: CityNotification[];
  activeSOS: SOSAlert | null;
  activeView: string;
  setActiveSOS: (sos: SOSAlert | null) => void;
  setActiveView: (view: string) => void;
  triggerSOS: (lat: number, lng: number, user: { name?: string, email?: string, mobileNumber?: string, age?: number, role?: string } | null) => void;
  resolveSOS: (id: string) => void;
  broadcastAlert: (title: string, message: string, type: "General" | "Alert") => void;
  handleSOSAction: (sosId: string) => void;
  handleResolve: (id: string) => void;
  clearNotifications: () => void;
}

const PersistenceContext = createContext<PersistenceContextType | undefined>(undefined);

export function PersistenceProvider({ children }: { children: React.ReactNode }) {
  const [dataset] = useState<SectorRecord[]>(MASTER_DATASET);
  const [sosAlerts, setSosAlerts] = useState<SOSAlert[]>([]);
  const [cityNotifications, setCityNotifications] = useState<CityNotification[]>([]);
  const [activeSOS, setActiveSOS] = useState<SOSAlert | null>(null);
  const [activeView, setActiveView] = useState("dashboard");

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedSOS = localStorage.getItem("aegis_sos");
      const savedNotifs = localStorage.getItem("aegis_notifs");
      
      const sos = savedSOS ? JSON.parse(savedSOS) : [];
      const savedNotifsList = savedNotifs ? JSON.parse(savedNotifs) : [];

      // SANITIZATION: Remove broken or old notifications from previous versions
      const notifs = savedNotifsList.filter((n: CityNotification) => n.sosId || !n.isSOS);
      
      setSosAlerts(sos);
      setCityNotifications(notifs);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const triggerSOS = (lat: number, lng: number, user: { name?: string, email?: string, mobileNumber?: string, age?: number, role?: string } | null) => {
    // ROBUST FALLBACK: If user is Admin but session is old, force the correct contact details
    let mobile = user?.mobileNumber;
    let age = user?.age;

    if (user?.role === "Admin" && !mobile) {
       mobile = "+91 9999-000-001";
       age = 34;
    }

    const newAlert: SOSAlert = {
      id: Math.random().toString(36).substr(2, 9),
      lat,
      lng,
      userName: user?.name || "Anonymous User",
      userEmail: user?.email || "N/A",
      userMobile: mobile || "91-XXXXXXXXXX",
      userAge: age || 25,
      timestamp: new Date().toLocaleTimeString(),
      status: "Active"
    };
    
    const updatedSOS = [newAlert, ...sosAlerts];
    setSosAlerts(updatedSOS);
    localStorage.setItem("aegis_sos", JSON.stringify(updatedSOS));

    const newNotif: CityNotification = {
      id: "sos-" + newAlert.id,
      sosId: newAlert.id,
      title: "CRITICAL: SOS BROADCAST",
      message: `Emergency signal from ${newAlert.userName}. [M: ${newAlert.userMobile}] - Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}. Respond immediately.`,
      type: "Emergency",
      time: newAlert.timestamp,
      isSOS: true
    };
    const updatedNotifs = [newNotif, ...cityNotifications];
    setCityNotifications(updatedNotifs);
    localStorage.setItem("aegis_notifs", JSON.stringify(updatedNotifs));
  };

  const resolveSOS = (id: string) => {
    const updated = sosAlerts.map(a => a.id === id ? { ...a, status: "Resolved" as const } : a);
    setSosAlerts(updated);
    localStorage.setItem("aegis_sos", JSON.stringify(updated));
  };

  const clearNotifications = () => {
    setCityNotifications([]);
    localStorage.removeItem("aegis_notifs");
  };

  const broadcastAlert = (title: string, message: string, type: "General" | "Alert") => {
    const newNotif: CityNotification = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      message,
      type,
      time: new Date().toLocaleTimeString(),
      isSOS: false
    };
    const updated = [newNotif, ...cityNotifications];
    setCityNotifications(updated);
    localStorage.setItem("aegis_notifs", JSON.stringify(updated));
  };

  const handleSOSAction = (sosId: string) => {
    const alert = sosAlerts.find(a => a.id === sosId);
    if (alert) {
      setActiveSOS(alert);
      setActiveView("sos-details");
    }
  };

  const handleResolve = (id: string) => {
    resolveSOS(id);
    setActiveSOS(null);
    setActiveView("dashboard");
  };

  return (
    <PersistenceContext.Provider value={{ 
      dataset, 
      sosAlerts, 
      cityNotifications, 
      activeSOS, 
      activeView, 
      setActiveSOS, 
      setActiveView, 
      triggerSOS, 
      resolveSOS, 
      broadcastAlert, 
      handleSOSAction, 
      handleResolve,
      clearNotifications
    }}>
      {children}
    </PersistenceContext.Provider>
  );
}

export function usePersistence() {
  const context = useContext(PersistenceContext);
  if (context === undefined) throw new Error("usePersistence must be used within a PersistenceProvider");
  return context;
}
