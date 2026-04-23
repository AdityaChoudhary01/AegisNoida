"use client";
import CommandCenter from "./components/CommandCenter";
import LoginPage from "./components/LoginPage";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { isAuthenticated, isReady, showAuth } = useAuth();

  // Prevent flash while checking session
  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-[#05060f] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // If not authenticated at all (should not happen with auto-guest but safe to keep)
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <>
      <CommandCenter />
      {showAuth && <LoginPage isModal={true} />}
    </>
  );
}
