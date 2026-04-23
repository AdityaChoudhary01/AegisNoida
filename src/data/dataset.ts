// ============================================================================
// GREATER NOIDA CRIME DATASET
// 25 real sectors with realistic crime statistics across multiple categories
// Data synthesized based on typical NCR crime patterns (2019-2024)
// Categories: Theft, Burglary, Assault, Vehicle, Cybercrime, Harassment, Fraud
// ============================================================================

export interface SectorRecord {
  id: number;
  sector: string;
  lat: number;
  lng: number;
  population: number; // in thousands
  policeStations: number;
  cctvCoverage: number; // 0-100
  streetLightIndex: number; // 0-100
  // Crime counts (annual average for last 3 years)
  theft: number;
  burglary: number;
  assault: number;
  vehicleCrime: number;
  cyberCrime: number;
  harassment: number;
  fraud: number;
  total: number;
  riskLevel: "Low" | "Moderate" | "High" | "Critical";
}

// Realistic Greater Noida sectors with approximate lat/lng
export const GREATER_NOIDA_SECTORS: SectorRecord[] = [
  { id: 1, sector: "Alpha 1", lat: 28.4744, lng: 77.5040, population: 45, policeStations: 2, cctvCoverage: 78, streetLightIndex: 85, theft: 62, burglary: 18, assault: 14, vehicleCrime: 41, cyberCrime: 33, harassment: 21, fraud: 27, total: 216, riskLevel: "Moderate" },
  { id: 2, sector: "Alpha 2", lat: 28.4698, lng: 77.5083, population: 52, policeStations: 1, cctvCoverage: 65, streetLightIndex: 72, theft: 78, burglary: 26, assault: 19, vehicleCrime: 54, cyberCrime: 41, harassment: 29, fraud: 34, total: 281, riskLevel: "High" },
  { id: 3, sector: "Beta 1", lat: 28.4664, lng: 77.5121, population: 48, policeStations: 2, cctvCoverage: 82, streetLightIndex: 88, theft: 55, burglary: 15, assault: 11, vehicleCrime: 36, cyberCrime: 38, harassment: 18, fraud: 29, total: 202, riskLevel: "Moderate" },
  { id: 4, sector: "Beta 2", lat: 28.4613, lng: 77.5158, population: 55, policeStations: 1, cctvCoverage: 58, streetLightIndex: 68, theft: 84, burglary: 31, assault: 22, vehicleCrime: 58, cyberCrime: 44, harassment: 33, fraud: 38, total: 310, riskLevel: "High" },
  { id: 5, sector: "Gamma 1", lat: 28.4572, lng: 77.5201, population: 41, policeStations: 2, cctvCoverage: 88, streetLightIndex: 92, theft: 42, burglary: 12, assault: 8, vehicleCrime: 28, cyberCrime: 31, harassment: 13, fraud: 22, total: 156, riskLevel: "Low" },
  { id: 6, sector: "Gamma 2", lat: 28.4531, lng: 77.5238, population: 47, policeStations: 2, cctvCoverage: 75, streetLightIndex: 80, theft: 58, burglary: 19, assault: 13, vehicleCrime: 38, cyberCrime: 36, harassment: 20, fraud: 28, total: 212, riskLevel: "Moderate" },
  { id: 7, sector: "Delta 1", lat: 28.4492, lng: 77.5284, population: 38, policeStations: 1, cctvCoverage: 62, streetLightIndex: 70, theft: 71, burglary: 24, assault: 18, vehicleCrime: 48, cyberCrime: 29, harassment: 25, fraud: 31, total: 246, riskLevel: "High" },
  { id: 8, sector: "Delta 2", lat: 28.4453, lng: 77.5327, population: 43, policeStations: 2, cctvCoverage: 80, streetLightIndex: 84, theft: 49, burglary: 14, assault: 10, vehicleCrime: 33, cyberCrime: 35, harassment: 16, fraud: 26, total: 183, riskLevel: "Moderate" },
  { id: 9, sector: "Pi 1", lat: 28.4821, lng: 77.4987, population: 60, policeStations: 1, cctvCoverage: 52, streetLightIndex: 62, theft: 98, burglary: 38, assault: 27, vehicleCrime: 67, cyberCrime: 48, harassment: 41, fraud: 44, total: 363, riskLevel: "Critical" },
  { id: 10, sector: "Pi 2", lat: 28.4875, lng: 77.4945, population: 58, policeStations: 2, cctvCoverage: 68, streetLightIndex: 74, theft: 74, burglary: 23, assault: 17, vehicleCrime: 51, cyberCrime: 42, harassment: 27, fraud: 35, total: 269, riskLevel: "High" },
  { id: 11, sector: "Mu 1", lat: 28.4512, lng: 77.5401, population: 36, policeStations: 2, cctvCoverage: 85, streetLightIndex: 90, theft: 38, burglary: 11, assault: 7, vehicleCrime: 25, cyberCrime: 28, harassment: 12, fraud: 20, total: 141, riskLevel: "Low" },
  { id: 12, sector: "Mu 2", lat: 28.4471, lng: 77.5444, population: 40, policeStations: 1, cctvCoverage: 70, streetLightIndex: 76, theft: 53, burglary: 17, assault: 12, vehicleCrime: 35, cyberCrime: 33, harassment: 18, fraud: 25, total: 193, riskLevel: "Moderate" },
  { id: 13, sector: "Omicron 1", lat: 28.4388, lng: 77.5521, population: 33, policeStations: 2, cctvCoverage: 90, streetLightIndex: 94, theft: 32, burglary: 9, assault: 6, vehicleCrime: 21, cyberCrime: 26, harassment: 10, fraud: 18, total: 122, riskLevel: "Low" },
  { id: 14, sector: "Omicron 2", lat: 28.4342, lng: 77.5567, population: 37, policeStations: 2, cctvCoverage: 83, streetLightIndex: 87, theft: 45, burglary: 13, assault: 9, vehicleCrime: 30, cyberCrime: 30, harassment: 14, fraud: 23, total: 164, riskLevel: "Moderate" },
  { id: 15, sector: "Chi 1", lat: 28.4289, lng: 77.5612, population: 42, policeStations: 1, cctvCoverage: 60, streetLightIndex: 66, theft: 81, burglary: 28, assault: 21, vehicleCrime: 56, cyberCrime: 39, harassment: 31, fraud: 36, total: 292, riskLevel: "High" },
  { id: 16, sector: "Chi 2", lat: 28.4241, lng: 77.5658, population: 39, policeStations: 2, cctvCoverage: 77, streetLightIndex: 82, theft: 52, burglary: 16, assault: 12, vehicleCrime: 36, cyberCrime: 34, harassment: 19, fraud: 27, total: 196, riskLevel: "Moderate" },
  { id: 17, sector: "Phi 1", lat: 28.4198, lng: 77.5701, population: 44, policeStations: 1, cctvCoverage: 55, streetLightIndex: 64, theft: 89, burglary: 33, assault: 24, vehicleCrime: 61, cyberCrime: 45, harassment: 36, fraud: 40, total: 328, riskLevel: "Critical" },
  { id: 18, sector: "Phi 2", lat: 28.4151, lng: 77.5745, population: 41, policeStations: 2, cctvCoverage: 72, streetLightIndex: 78, theft: 57, burglary: 20, assault: 14, vehicleCrime: 40, cyberCrime: 37, harassment: 22, fraud: 29, total: 219, riskLevel: "Moderate" },
  { id: 19, sector: "Sigma 1", lat: 28.4912, lng: 77.4893, population: 65, policeStations: 1, cctvCoverage: 48, streetLightIndex: 58, theft: 105, burglary: 42, assault: 31, vehicleCrime: 72, cyberCrime: 52, harassment: 45, fraud: 48, total: 395, riskLevel: "Critical" },
  { id: 20, sector: "Sigma 2", lat: 28.4963, lng: 77.4847, population: 62, policeStations: 2, cctvCoverage: 65, streetLightIndex: 70, theft: 82, burglary: 27, assault: 20, vehicleCrime: 57, cyberCrime: 47, harassment: 33, fraud: 41, total: 307, riskLevel: "High" },
  { id: 21, sector: "Knowledge Park 1", lat: 28.4712, lng: 77.4821, population: 50, policeStations: 3, cctvCoverage: 92, streetLightIndex: 95, theft: 35, burglary: 10, assault: 7, vehicleCrime: 24, cyberCrime: 55, harassment: 11, fraud: 38, total: 180, riskLevel: "Moderate" },
  { id: 22, sector: "Knowledge Park 2", lat: 28.4665, lng: 77.4865, population: 54, policeStations: 3, cctvCoverage: 89, streetLightIndex: 93, theft: 40, burglary: 12, assault: 8, vehicleCrime: 27, cyberCrime: 58, harassment: 13, fraud: 42, total: 200, riskLevel: "Moderate" },
  { id: 23, sector: "Techzone 4", lat: 28.5021, lng: 77.4758, population: 58, policeStations: 2, cctvCoverage: 85, streetLightIndex: 88, theft: 48, burglary: 15, assault: 10, vehicleCrime: 32, cyberCrime: 62, harassment: 16, fraud: 49, total: 232, riskLevel: "Moderate" },
  { id: 24, sector: "Jaypee Greens", lat: 28.4589, lng: 77.5034, population: 35, policeStations: 2, cctvCoverage: 95, streetLightIndex: 97, theft: 25, burglary: 7, assault: 4, vehicleCrime: 16, cyberCrime: 24, harassment: 8, fraud: 17, total: 101, riskLevel: "Low" },
  { id: 25, sector: "Pari Chowk", lat: 28.4648, lng: 77.5017, population: 70, policeStations: 2, cctvCoverage: 73, streetLightIndex: 79, theft: 92, burglary: 32, assault: 23, vehicleCrime: 63, cyberCrime: 49, harassment: 37, fraud: 43, total: 339, riskLevel: "Critical" }
];

// Historical yearly data for trends (2019-2024)
export interface YearlyTrend {
  year: number;
  theft: number;
  burglary: number;
  assault: number;
  vehicleCrime: number;
  cyberCrime: number;
  harassment: number;
  fraud: number;
}

export const YEARLY_TRENDS: YearlyTrend[] = [
  { year: 2019, theft: 1420, burglary: 480, assault: 320, vehicleCrime: 980, cyberCrime: 340, harassment: 410, fraud: 520 },
  { year: 2020, theft: 1180, burglary: 390, assault: 250, vehicleCrime: 760, cyberCrime: 580, harassment: 340, fraud: 680 },
  { year: 2021, theft: 1340, burglary: 440, assault: 290, vehicleCrime: 890, cyberCrime: 780, harassment: 420, fraud: 820 },
  { year: 2022, theft: 1520, burglary: 510, assault: 350, vehicleCrime: 1020, cyberCrime: 920, harassment: 510, fraud: 940 },
  { year: 2023, theft: 1680, burglary: 560, assault: 390, vehicleCrime: 1140, cyberCrime: 1080, harassment: 590, fraud: 1060 },
  { year: 2024, theft: 1580, burglary: 530, assault: 360, vehicleCrime: 1080, cyberCrime: 1240, harassment: 620, fraud: 1180 }
];

// Monthly patterns (average across sectors)
export const MONTHLY_PATTERNS = [
  { month: "Jan", total: 680 }, { month: "Feb", total: 620 },
  { month: "Mar", total: 710 }, { month: "Apr", total: 740 },
  { month: "May", total: 810 }, { month: "Jun", total: 790 },
  { month: "Jul", total: 820 }, { month: "Aug", total: 850 },
  { month: "Sep", total: 780 }, { month: "Oct", total: 860 },
  { month: "Nov", total: 910 }, { month: "Dec", total: 950 }
];

// Hour-of-day patterns
export const HOURLY_PATTERNS = Array.from({ length: 24 }, (_, h) => {
  // Peak: 20:00-02:00 (nighttime), dip during early morning
  const base = 30;
  let mult = 1;
  if (h >= 20 || h <= 2) mult = 3.2;
  else if (h >= 17 && h < 20) mult = 2.1;
  else if (h >= 3 && h <= 6) mult = 0.4;
  else if (h >= 7 && h <= 10) mult = 1.3;
  else mult = 1.5;
  return { hour: h, count: Math.round(base * mult + (Math.random() * 15)) };
});

// Feature columns used for ML
export const FEATURE_KEYS: (keyof SectorRecord)[] = [
  "population", "policeStations", "cctvCoverage", "streetLightIndex",
  "theft", "burglary", "assault", "vehicleCrime", "cyberCrime", "harassment", "fraud"
];

export const CRIME_CATEGORIES = [
  "theft", "burglary", "assault", "vehicleCrime", "cyberCrime", "harassment", "fraud"
] as const;

export const RISK_COLORS: Record<string, string> = {
  Low: "#10b981",
  Moderate: "#f59e0b",
  High: "#f97316",
  Critical: "#ef4444"
};
