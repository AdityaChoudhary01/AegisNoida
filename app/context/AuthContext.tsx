"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export type UserRole = "Police" | "Public" | "Admin" | "Guest";

interface User {
  id?: string;
  name: string;
  role: UserRole;
  email: string;
  password?: string;
  age?: number;
  mobileNumber?: string;
  beltNumber?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole, beltNumber?: string) => Promise<{ success: boolean; message: string }>;
  signup: (userData: User) => Promise<{ success: boolean; message: string }>;
  continueAsGuest: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  isReady: boolean;
  showAuth: boolean;
  setShowAuth: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      // Hydrate local session state
      const savedSession = localStorage.getItem("aegis_user");
      if (savedSession) {
        try {
          setUser(JSON.parse(savedSession));
        } catch (e) {
          console.error("Failed to parse saved session", e);
        }
      } else {
        setUser({ name: "Guest Observer", email: "guest@aegis.local", role: "Guest" });
      }
      setIsReady(true);
    };
    
    initializeAuth();
  }, []);

  const login = async (email: string, password: string, role: UserRole, beltNumber?: string) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password, role, beltNumber });
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("aegis_user", JSON.stringify(res.data.user));
        return { success: true, message: res.data.message };
      }
      return { success: false, message: res.data.message };
    } catch (error: unknown) {
      let message = "Login failed";
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }
      return { success: false, message };
    }
  };

  const signup = async (userData: User) => {
    try {
      const res = await axios.post('/api/auth/register', userData);
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("aegis_user", JSON.stringify(res.data.user));
        return { success: true, message: res.data.message };
      }
      return { success: false, message: res.data.message };
    } catch (error: unknown) {
      let message = "Registration failed";
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }
      return { success: false, message };
    }
  };

  const continueAsGuest = () => {
    const guestUser: User = { name: "Guest Observer", email: "guest@aegis.local", role: "Guest" };
    setUser(guestUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("aegis_user");
  };

  return (
    <AuthContext.Provider value={{ 
      user, login, signup, continueAsGuest, logout, isAuthenticated: !!user, isReady, showAuth, setShowAuth 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
