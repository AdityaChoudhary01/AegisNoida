import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { PersistenceProvider } from "./context/PersistenceContext";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Aegis Noida — Smart Safety Intelligence",
  description: "Advanced Geospatial Safety Intelligence System for Greater Noida. Final Year Major Project.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} ${mono.variable} font-sans antialiased bg-[#05060f] text-slate-200`}>
        <AuthProvider>
          <PersistenceProvider>
            {children}
          </PersistenceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
