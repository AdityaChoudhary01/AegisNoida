"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { MASTER_DATASET, SectorRecord } from "../data/dataset";
import axios from "axios";

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
  triggerSOS: (lat: number, lng: number, user: { name?: string, email?: string, mobileNumber?: string, age?: number, role?: string } | null) => Promise<void>;
  resolveSOS: (id: string) => Promise<void>;
  broadcastAlert: (title: string, message: string, type: "General" | "Alert") => Promise<void>;
  handleSOSAction: (sosId: string) => void;
  handleResolve: (id: string) => void;
  clearNotifications: () => Promise<void>;
  refreshData: () => Promise<void>;
}

const PersistenceContext = createContext<PersistenceContextType | undefined>(undefined);

export function PersistenceProvider({ children }: { children: React.ReactNode }) {
  const [dataset] = useState<SectorRecord[]>(MASTER_DATASET);
  const [sosAlerts, setSosAlerts] = useState<SOSAlert[]>([]);
  const [cityNotifications, setCityNotifications] = useState<CityNotification[]>([]);
  const [activeSOS, setActiveSOS] = useState<SOSAlert | null>(null);
  const [activeView, setActiveView] = useState("dashboard");

  const refreshData = useCallback(async () => {
    try {
      const [sosRes, notifRes] = await Promise.all([
        axios.get('/api/sos'),
        axios.get('/api/notifications')
      ]);

      if (sosRes.data.success) {
        setSosAlerts(sosRes.data.sosAlerts);
      }
      if (notifRes.data.success) {
        setCityNotifications(notifRes.data.notifications);
      }
    } catch (error) {
      console.error("Failed to refresh persistence data:", error);
    }
  }, []);

  useEffect(() => {
    const initializeData = async () => {
      await refreshData();
    };
    initializeData();

    // 5-second polling for real-time synchronization across machines
    const interval = setInterval(refreshData, 5000);
    return () => clearInterval(interval);
  }, [refreshData]);

  const triggerSOS = async (lat: number, lng: number, user: { name?: string, email?: string, mobileNumber?: string, age?: number, role?: string } | null) => {
    try {
      const res = await axios.post('/api/sos', { lat, lng, user });
      if (res.data.success) {
        const newSOS = res.data.sos;
        
        // Also broadcast an emergency notification
        await axios.post('/api/notifications', {
          title: "CRITICAL: SOS BROADCAST",
          message: `Emergency signal from ${newSOS.userName}. [M: ${newSOS.userMobile}] - Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}. Respond immediately.`,
          type: "Emergency",
          isSOS: true,
          sosId: newSOS.id
        });

        await refreshData();
      }
    } catch (error) {
      console.error("Failed to trigger SOS:", error);
    }
  };

  const resolveSOS = async (id: string) => {
    try {
      const res = await axios.patch('/api/sos', { id });
      if (res.data.success) {
        await refreshData();
      }
    } catch (error) {
      console.error("Failed to resolve SOS:", error);
    }
  };

  const clearNotifications = async () => {
    try {
      const res = await axios.delete('/api/notifications');
      if (res.data.success) {
        setCityNotifications([]);
      }
    } catch (error) {
      console.error("Failed to clear notifications:", error);
    }
  };

  const broadcastAlert = async (title: string, message: string, type: "General" | "Alert") => {
    try {
      const res = await axios.post('/api/notifications', { title, message, type });
      if (res.data.success) {
        await refreshData();
      }
    } catch (error) {
      console.error("Failed to broadcast alert:", error);
    }
  };

  const handleSOSAction = (sosId: string) => {
    const alert = sosAlerts.find(a => a.id === sosId);
    if (alert) {
      setActiveSOS(alert);
      setActiveView("sos-details");
    }
  };

  const handleResolve = async (id: string) => {
    await resolveSOS(id);
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
      clearNotifications,
      refreshData
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
