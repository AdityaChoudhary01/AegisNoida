"use client";
import { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "Police" | "Public" | "Admin" | "Guest";

interface User {
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
  login: (email: string, password: string, role: UserRole, beltNumber?: string) => { success: boolean; message: string };
  signup: (userData: User) => { success: boolean; message: string };
  continueAsGuest: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  isReady: boolean;
  showAuth: boolean;
  setShowAuth: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initial Admin Account
const INITIAL_ADMIN = {
  email: "admin@aegis.gov",
  password: "noida_secure_root",
  name: "Master Administrator",
  role: "Admin" as UserRole,
  mobileNumber: "+91 9999-000-001",
  age: 34
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Hydrate Session
      const savedSession = localStorage.getItem("aegis_user");
      if (savedSession) {
        setUser(JSON.parse(savedSession));
      } else {
        // Default to Guest on first visit
        setUser({ name: "Guest Observer", email: "guest@aegis.local", role: "Guest" });
      }

      // Hydrate "Database"
      const savedUsers = localStorage.getItem("aegis_db_users");
      let users: User[] = savedUsers ? JSON.parse(savedUsers) : [];
      
      // Ensure Admin exists in DB
      if (!users.find(u => u.email === INITIAL_ADMIN.email)) {
        users = [INITIAL_ADMIN, ...users];
        localStorage.setItem("aegis_db_users", JSON.stringify(users));
      }
      setAllUsers(users);
      setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const login = (email: string, password: string, role: UserRole, beltNumber?: string) => {
    // 1. Admin Verification (Strict)
    if (role === "Admin") {
      if (email === INITIAL_ADMIN.email && password === INITIAL_ADMIN.password) {
        setUser(INITIAL_ADMIN);
        localStorage.setItem("aegis_user", JSON.stringify(INITIAL_ADMIN));
        return { success: true, message: "Admin Access Granted" };
      }
      return { success: false, message: "Invalid Administrative Credentials" };
    }

    // 2. Police Verification (Simulated/Random but tracked)
    if (role === "Police") {
      const policeUser = { name: "Officer " + (beltNumber || "Unknown"), email, role, beltNumber };
      setUser(policeUser);
      localStorage.setItem("aegis_user", JSON.stringify(policeUser));
      return { success: true, message: "Police Dispatch Authorized" };
    }

    // 3. Public Verification (Database-backed)
    const found = allUsers.find(u => u.email === email && u.password === password && u.role === "Public");
    if (found) {
      setUser(found);
      localStorage.setItem("aegis_user", JSON.stringify(found));
      return { success: true, message: "Identity Verified" };
    }

    return { success: false, message: "Identity Not Found. Please Register." };
  };

  const signup = (userData: User) => {
    if (userData.role === "Admin") {
      return { success: false, message: "Action Restricted: Cannot create Admin accounts." };
    }

    if (allUsers.find(u => u.email === userData.email)) {
      return { success: false, message: "Identity already exists in Matrix." };
    }

    const updated = [userData, ...allUsers];
    setAllUsers(updated);
    localStorage.setItem("aegis_db_users", JSON.stringify(updated));
    
    setUser(userData);
    localStorage.setItem("aegis_user", JSON.stringify(userData));
    return { success: true, message: "Identity Established Successfully" };
  };

  const continueAsGuest = () => {
    const guestUser: User = { name: "Guest Observer", email: "guest@aegis.local", role: "Guest" };
    setUser(guestUser);
    // We don't persist guests across sessions to encourage registration
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
