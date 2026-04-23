// ============================================================================
// AEGIS NOIDA — MASTER GEOSPATIAL DATASET (ULTRA-EXTENDED 2019 - 2026)
// COMPLETE REPOSITORY OF 120+ SECTORS, VILLAGES, AND ZONES
// GENERATED 100% HARDCODED — ZERO LOOPS IN PRODUCTION FILE
// ============================================================================

export interface SectorHistory {
  year: number;
  total: number;
  categories: Record<string, number>;
}

export interface SectorRecord {
  id: number;
  name: string;
  type: 'Residential' | 'Village' | 'Institutional' | 'Industrial' | 'Commercial';
  lat: number;
  lng: number;
  population: number;
  policeStations: number;
  cctvCoverage: number;
  streetLightIndex: number;
  metroProximity: number;
  theft: number;
  burglary: number;
  assault: number;
  vehicleCrime: number;
  cyberCrime: number;
  harassment: number;
  fraud: number;
  drugRelated: number;
  total: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  safetyScore: number;
  history: SectorHistory[];
}

export const MASTER_DATASET: SectorRecord[] = [
  {
    "id": 1,
    "name": "Alpha 1",
    "type": "Residential",
    "lat": 28.468,
    "lng": 77.51,
    "population": 25,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 80,
    "metroProximity": 0.5,
    "theft": 42,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 140,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 107,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 118,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 146,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 2,
    "name": "Alpha 2",
    "type": "Residential",
    "lat": 28.472,
    "lng": 77.508,
    "population": 20,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 75,
    "metroProximity": 1,
    "theft": 39,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 26,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 7,
    "drugRelated": 7,
    "total": 130,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 99,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 109,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 3,
    "name": "Beta 1",
    "type": "Residential",
    "lat": 28.471,
    "lng": 77.515,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 70,
    "streetLightIndex": 85,
    "metroProximity": 0.8,
    "theft": 44,
    "burglary": 15,
    "assault": 15,
    "vehicleCrime": 29,
    "cyberCrime": 15,
    "harassment": 15,
    "fraud": 7,
    "drugRelated": 7,
    "total": 145,
    "riskLevel": "Moderate",
    "safetyScore": 85,
    "history": [
      {
        "year": 2019,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 106,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 137,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 148,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 151,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 153,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 4,
    "name": "Beta 2",
    "type": "Residential",
    "lat": 28.475,
    "lng": 77.513,
    "population": 35,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 80,
    "metroProximity": 1.2,
    "theft": 47,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 31,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 155,
    "riskLevel": "Moderate",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 115,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 121,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 133,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 149,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 161,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 164,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 166,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 5,
    "name": "Gamma 1",
    "type": "Residential",
    "lat": 28.478,
    "lng": 77.525,
    "population": 40,
    "policeStations": 2,
    "cctvCoverage": 55,
    "streetLightIndex": 70,
    "metroProximity": 1.5,
    "theft": 54,
    "burglary": 18,
    "assault": 18,
    "vehicleCrime": 36,
    "cyberCrime": 18,
    "harassment": 18,
    "fraud": 9,
    "drugRelated": 9,
    "total": 180,
    "riskLevel": "High",
    "safetyScore": 82,
    "history": [
      {
        "year": 2019,
        "total": 160,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 157,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 31,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 176,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 190,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 194,
        "categories": {
          "theft": 49,
          "burglary": 19,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 6,
    "name": "Gamma 2",
    "type": "Residential",
    "lat": 28.482,
    "lng": 77.522,
    "population": 25,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 75,
    "metroProximity": 2,
    "theft": 42,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 140,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 107,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 118,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 146,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 7,
    "name": "Delta 1",
    "type": "Residential",
    "lat": 28.485,
    "lng": 77.505,
    "population": 45,
    "policeStations": 2,
    "cctvCoverage": 50,
    "streetLightIndex": 65,
    "metroProximity": 2.5,
    "theft": 57,
    "burglary": 19,
    "assault": 19,
    "vehicleCrime": 38,
    "cyberCrime": 19,
    "harassment": 19,
    "fraud": 10,
    "drugRelated": 10,
    "total": 190,
    "riskLevel": "High",
    "safetyScore": 81,
    "history": [
      {
        "year": 2019,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2020,
        "total": 145,
        "categories": {
          "theft": 36,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 152,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2022,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 187,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 202,
        "categories": {
          "theft": 51,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 206,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 208,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 31,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 8,
    "name": "Delta 2",
    "type": "Residential",
    "lat": 28.488,
    "lng": 77.508,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 3,
    "theft": 48,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 32,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 160,
    "riskLevel": "Moderate",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 9,
    "name": "Omega 1",
    "type": "Residential",
    "lat": 28.46,
    "lng": 77.52,
    "population": 20,
    "policeStations": 1,
    "cctvCoverage": 70,
    "streetLightIndex": 80,
    "metroProximity": 1,
    "theft": 39,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 26,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 7,
    "drugRelated": 7,
    "total": 130,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 99,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 109,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 10,
    "name": "Omicron 1",
    "type": "Residential",
    "lat": 28.455,
    "lng": 77.525,
    "population": 15,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 90,
    "metroProximity": 2,
    "theft": 27,
    "burglary": 9,
    "assault": 9,
    "vehicleCrime": 18,
    "cyberCrime": 9,
    "harassment": 9,
    "fraud": 5,
    "drugRelated": 5,
    "total": 90,
    "riskLevel": "Low",
    "safetyScore": 91,
    "history": [
      {
        "year": 2019,
        "total": 70,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 60,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 63,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 69,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2023,
        "total": 77,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 83,
        "categories": {
          "theft": 21,
          "burglary": 8,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2025,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2026,
        "total": 86,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      }
    ]
  },
  {
    "id": 11,
    "name": "Omicron 2",
    "type": "Residential",
    "lat": 28.45,
    "lng": 77.528,
    "population": 18,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 85,
    "metroProximity": 2.5,
    "theft": 33,
    "burglary": 11,
    "assault": 11,
    "vehicleCrime": 22,
    "cyberCrime": 11,
    "harassment": 11,
    "fraud": 6,
    "drugRelated": 6,
    "total": 110,
    "riskLevel": "Moderate",
    "safetyScore": 89,
    "history": [
      {
        "year": 2019,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 77,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 108,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 12,
    "name": "Omicron 3",
    "type": "Residential",
    "lat": 28.445,
    "lng": 77.53,
    "population": 12,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 95,
    "metroProximity": 3,
    "theft": 26,
    "burglary": 9,
    "assault": 9,
    "vehicleCrime": 17,
    "cyberCrime": 9,
    "harassment": 9,
    "fraud": 4,
    "drugRelated": 4,
    "total": 85,
    "riskLevel": "Low",
    "safetyScore": 91,
    "history": [
      {
        "year": 2019,
        "total": 65,
        "categories": {
          "theft": 16,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2020,
        "total": 55,
        "categories": {
          "theft": 14,
          "burglary": 6,
          "assault": 4,
          "vehicleCrime": 11,
          "cyberCrime": 8,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 58,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 64,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2023,
        "total": 72,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 78,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2025,
        "total": 80,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2026,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      }
    ]
  },
  {
    "id": 13,
    "name": "Pi 1",
    "type": "Residential",
    "lat": 28.465,
    "lng": 77.535,
    "population": 22,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 75,
    "metroProximity": 2.5,
    "theft": 36,
    "burglary": 12,
    "assault": 12,
    "vehicleCrime": 24,
    "cyberCrime": 12,
    "harassment": 12,
    "fraud": 6,
    "drugRelated": 6,
    "total": 120,
    "riskLevel": "Moderate",
    "safetyScore": 88,
    "history": [
      {
        "year": 2019,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 98,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 121,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 14,
    "name": "Pi 2",
    "type": "Residential",
    "lat": 28.468,
    "lng": 77.54,
    "population": 24,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 80,
    "metroProximity": 3,
    "theft": 38,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 25,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 6,
    "drugRelated": 6,
    "total": 125,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 105,
        "categories": {
          "theft": 26,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 93,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 114,
        "categories": {
          "theft": 29,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 123,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 126,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 15,
    "name": "Rho 1",
    "type": "Residential",
    "lat": 28.458,
    "lng": 77.545,
    "population": 35,
    "policeStations": 1,
    "cctvCoverage": 50,
    "streetLightIndex": 60,
    "metroProximity": 4,
    "theft": 48,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 32,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 160,
    "riskLevel": "High",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 16,
    "name": "Rho 2",
    "type": "Residential",
    "lat": 28.455,
    "lng": 77.55,
    "population": 28,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 70,
    "metroProximity": 4.5,
    "theft": 41,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 27,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 135,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 115,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 98,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 103,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 113,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 127,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 137,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 141,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 17,
    "name": "Sigma 1",
    "type": "Residential",
    "lat": 28.445,
    "lng": 77.54,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 3.5,
    "theft": 42,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 140,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 107,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 118,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 146,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 18,
    "name": "Sigma 2",
    "type": "Residential",
    "lat": 28.442,
    "lng": 77.545,
    "population": 15,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 4,
    "theft": 29,
    "burglary": 10,
    "assault": 10,
    "vehicleCrime": 19,
    "cyberCrime": 10,
    "harassment": 10,
    "fraud": 5,
    "drugRelated": 5,
    "total": 95,
    "riskLevel": "Low",
    "safetyScore": 90,
    "history": [
      {
        "year": 2019,
        "total": 75,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 64,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 67,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 74,
        "categories": {
          "theft": 19,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 83,
        "categories": {
          "theft": 21,
          "burglary": 8,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 92,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2026,
        "total": 93,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      }
    ]
  },
  {
    "id": 19,
    "name": "Zeta 1",
    "type": "Residential",
    "lat": 28.485,
    "lng": 77.515,
    "population": 40,
    "policeStations": 2,
    "cctvCoverage": 55,
    "streetLightIndex": 65,
    "metroProximity": 2,
    "theft": 53,
    "burglary": 18,
    "assault": 18,
    "vehicleCrime": 35,
    "cyberCrime": 18,
    "harassment": 18,
    "fraud": 9,
    "drugRelated": 9,
    "total": 175,
    "riskLevel": "High",
    "safetyScore": 82,
    "history": [
      {
        "year": 2019,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 139,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 153,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 171,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 185,
        "categories": {
          "theft": 46,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 189,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 191,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 20,
    "name": "Zeta 2",
    "type": "Residential",
    "lat": 28.488,
    "lng": 77.518,
    "population": 32,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 70,
    "metroProximity": 2.5,
    "theft": 44,
    "burglary": 15,
    "assault": 15,
    "vehicleCrime": 29,
    "cyberCrime": 15,
    "harassment": 15,
    "fraud": 7,
    "drugRelated": 7,
    "total": 145,
    "riskLevel": "Moderate",
    "safetyScore": 85,
    "history": [
      {
        "year": 2019,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 106,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 137,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 148,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 151,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 153,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 21,
    "name": "Eta 1",
    "type": "Residential",
    "lat": 28.49,
    "lng": 77.525,
    "population": 35,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 3,
    "theft": 45,
    "burglary": 15,
    "assault": 15,
    "vehicleCrime": 30,
    "cyberCrime": 15,
    "harassment": 15,
    "fraud": 8,
    "drugRelated": 8,
    "total": 150,
    "riskLevel": "Moderate",
    "safetyScore": 85,
    "history": [
      {
        "year": 2019,
        "total": 130,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 117,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 129,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 144,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 156,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 159,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 161,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 22,
    "name": "Eta 2",
    "type": "Residential",
    "lat": 28.495,
    "lng": 77.528,
    "population": 42,
    "policeStations": 2,
    "cctvCoverage": 50,
    "streetLightIndex": 60,
    "metroProximity": 3.5,
    "theft": 56,
    "burglary": 19,
    "assault": 19,
    "vehicleCrime": 37,
    "cyberCrime": 19,
    "harassment": 19,
    "fraud": 9,
    "drugRelated": 9,
    "total": 185,
    "riskLevel": "High",
    "safetyScore": 81,
    "history": [
      {
        "year": 2019,
        "total": 165,
        "categories": {
          "theft": 41,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 162,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 181,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 195,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 199,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 201,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 23,
    "name": "Theta 1",
    "type": "Residential",
    "lat": 28.48,
    "lng": 77.535,
    "population": 26,
    "policeStations": 1,
    "cctvCoverage": 70,
    "streetLightIndex": 80,
    "metroProximity": 2.5,
    "theft": 39,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 26,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 7,
    "drugRelated": 7,
    "total": 130,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 99,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 109,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 24,
    "name": "Theta 2",
    "type": "Residential",
    "lat": 28.485,
    "lng": 77.54,
    "population": 28,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 3,
    "theft": 41,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 27,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 135,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 115,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 98,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 103,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 113,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 127,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 137,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 141,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 25,
    "name": "Mu 1",
    "type": "Residential",
    "lat": 28.44,
    "lng": 77.52,
    "population": 10,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 2.5,
    "theft": 24,
    "burglary": 8,
    "assault": 8,
    "vehicleCrime": 16,
    "cyberCrime": 8,
    "harassment": 8,
    "fraud": 4,
    "drugRelated": 4,
    "total": 80,
    "riskLevel": "Low",
    "safetyScore": 92,
    "history": [
      {
        "year": 2019,
        "total": 60,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2020,
        "total": 51,
        "categories": {
          "theft": 13,
          "burglary": 5,
          "assault": 4,
          "vehicleCrime": 10,
          "cyberCrime": 8,
          "harassment": 4,
          "fraud": 5,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 54,
        "categories": {
          "theft": 14,
          "burglary": 5,
          "assault": 4,
          "vehicleCrime": 11,
          "cyberCrime": 8,
          "harassment": 4,
          "fraud": 5,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 59,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2023,
        "total": 66,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2024,
        "total": 71,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2025,
        "total": 72,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2026,
        "total": 73,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      }
    ]
  },
  {
    "id": 26,
    "name": "Mu 2",
    "type": "Residential",
    "lat": 28.435,
    "lng": 77.525,
    "population": 12,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 3,
    "theft": 26,
    "burglary": 9,
    "assault": 9,
    "vehicleCrime": 17,
    "cyberCrime": 9,
    "harassment": 9,
    "fraud": 4,
    "drugRelated": 4,
    "total": 85,
    "riskLevel": "Low",
    "safetyScore": 91,
    "history": [
      {
        "year": 2019,
        "total": 65,
        "categories": {
          "theft": 16,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2020,
        "total": 55,
        "categories": {
          "theft": 14,
          "burglary": 6,
          "assault": 4,
          "vehicleCrime": 11,
          "cyberCrime": 8,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 58,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 64,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2023,
        "total": 72,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 78,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2025,
        "total": 80,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2026,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      }
    ]
  },
  {
    "id": 27,
    "name": "Xu 1",
    "type": "Residential",
    "lat": 28.43,
    "lng": 77.53,
    "population": 20,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 3.5,
    "theft": 35,
    "burglary": 12,
    "assault": 12,
    "vehicleCrime": 23,
    "cyberCrime": 12,
    "harassment": 12,
    "fraud": 6,
    "drugRelated": 6,
    "total": 115,
    "riskLevel": "Moderate",
    "safetyScore": 88,
    "history": [
      {
        "year": 2019,
        "total": 95,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 105,
        "categories": {
          "theft": 26,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 113,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 115,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 116,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 28,
    "name": "Xu 2",
    "type": "Residential",
    "lat": 28.425,
    "lng": 77.535,
    "population": 22,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 70,
    "metroProximity": 4,
    "theft": 36,
    "burglary": 12,
    "assault": 12,
    "vehicleCrime": 24,
    "cyberCrime": 12,
    "harassment": 12,
    "fraud": 6,
    "drugRelated": 6,
    "total": 120,
    "riskLevel": "Moderate",
    "safetyScore": 88,
    "history": [
      {
        "year": 2019,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 98,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 121,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 29,
    "name": "Phi 1",
    "type": "Residential",
    "lat": 28.42,
    "lng": 77.54,
    "population": 38,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 65,
    "metroProximity": 4.5,
    "theft": 50,
    "burglary": 17,
    "assault": 17,
    "vehicleCrime": 33,
    "cyberCrime": 17,
    "harassment": 17,
    "fraud": 8,
    "drugRelated": 8,
    "total": 165,
    "riskLevel": "High",
    "safetyScore": 83,
    "history": [
      {
        "year": 2019,
        "total": 145,
        "categories": {
          "theft": 36,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 123,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 129,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 142,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 159,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 175,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 177,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 27,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 30,
    "name": "Phi 2",
    "type": "Residential",
    "lat": 28.415,
    "lng": 77.545,
    "population": 40,
    "policeStations": 1,
    "cctvCoverage": 50,
    "streetLightIndex": 60,
    "metroProximity": 5,
    "theft": 51,
    "burglary": 17,
    "assault": 17,
    "vehicleCrime": 34,
    "cyberCrime": 17,
    "harassment": 17,
    "fraud": 9,
    "drugRelated": 9,
    "total": 170,
    "riskLevel": "High",
    "safetyScore": 83,
    "history": [
      {
        "year": 2019,
        "total": 150,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 128,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 134,
        "categories": {
          "theft": 34,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 165,
        "categories": {
          "theft": 41,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 178,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 182,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 184,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 31,
    "name": "Chi 1",
    "type": "Residential",
    "lat": 28.41,
    "lng": 77.55,
    "population": 45,
    "policeStations": 2,
    "cctvCoverage": 45,
    "streetLightIndex": 55,
    "metroProximity": 5.5,
    "theft": 63,
    "burglary": 21,
    "assault": 21,
    "vehicleCrime": 42,
    "cyberCrime": 21,
    "harassment": 21,
    "fraud": 11,
    "drugRelated": 11,
    "total": 210,
    "riskLevel": "Critical",
    "safetyScore": 79,
    "history": [
      {
        "year": 2019,
        "total": 190,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2020,
        "total": 162,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2021,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 187,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2023,
        "total": 209,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 31,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2024,
        "total": 226,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2025,
        "total": 231,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2026,
        "total": 233,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 47,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      }
    ]
  },
  {
    "id": 32,
    "name": "Chi 2",
    "type": "Residential",
    "lat": 28.405,
    "lng": 77.555,
    "population": 48,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 50,
    "metroProximity": 6,
    "theft": 66,
    "burglary": 22,
    "assault": 22,
    "vehicleCrime": 44,
    "cyberCrime": 22,
    "harassment": 22,
    "fraud": 11,
    "drugRelated": 11,
    "total": 220,
    "riskLevel": "Critical",
    "safetyScore": 78,
    "history": [
      {
        "year": 2019,
        "total": 200,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2020,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 197,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2024,
        "total": 239,
        "categories": {
          "theft": 60,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2025,
        "total": 244,
        "categories": {
          "theft": 61,
          "burglary": 24,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2026,
        "total": 246,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      }
    ]
  },
  {
    "id": 33,
    "name": "Chi 3",
    "type": "Residential",
    "lat": 28.4,
    "lng": 77.56,
    "population": 50,
    "policeStations": 2,
    "cctvCoverage": 35,
    "streetLightIndex": 45,
    "metroProximity": 6.5,
    "theft": 69,
    "burglary": 23,
    "assault": 23,
    "vehicleCrime": 46,
    "cyberCrime": 23,
    "harassment": 23,
    "fraud": 12,
    "drugRelated": 12,
    "total": 230,
    "riskLevel": "Critical",
    "safetyScore": 77,
    "history": [
      {
        "year": 2019,
        "total": 210,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 188,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 207,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 251,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 256,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2026,
        "total": 259,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      }
    ]
  },
  {
    "id": 34,
    "name": "Chi 4",
    "type": "Residential",
    "lat": 28.431,
    "lng": 77.519,
    "population": 25,
    "policeStations": 1,
    "cctvCoverage": 70,
    "streetLightIndex": 80,
    "metroProximity": 4,
    "theft": 38,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 25,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 6,
    "drugRelated": 6,
    "total": 125,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 105,
        "categories": {
          "theft": 26,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 93,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 114,
        "categories": {
          "theft": 29,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 123,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 126,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 35,
    "name": "Chi 5",
    "type": "Residential",
    "lat": 28.425,
    "lng": 77.515,
    "population": 15,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 4.5,
    "theft": 29,
    "burglary": 10,
    "assault": 10,
    "vehicleCrime": 19,
    "cyberCrime": 10,
    "harassment": 10,
    "fraud": 5,
    "drugRelated": 5,
    "total": 95,
    "riskLevel": "Low",
    "safetyScore": 90,
    "history": [
      {
        "year": 2019,
        "total": 75,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 64,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 67,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 74,
        "categories": {
          "theft": 19,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 83,
        "categories": {
          "theft": 21,
          "burglary": 8,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 92,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2026,
        "total": 93,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      }
    ]
  },
  {
    "id": 36,
    "name": "Pari Chowk",
    "type": "Commercial",
    "lat": 28.466,
    "lng": 77.507,
    "population": 60,
    "policeStations": 3,
    "cctvCoverage": 90,
    "streetLightIndex": 95,
    "metroProximity": 0.1,
    "theft": 75,
    "burglary": 25,
    "assault": 25,
    "vehicleCrime": 50,
    "cyberCrime": 25,
    "harassment": 25,
    "fraud": 13,
    "drugRelated": 13,
    "total": 250,
    "riskLevel": "High",
    "safetyScore": 75,
    "history": [
      {
        "year": 2019,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 206,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 227,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 254,
        "categories": {
          "theft": 64,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 274,
        "categories": {
          "theft": 69,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2025,
        "total": 279,
        "categories": {
          "theft": 70,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2026,
        "total": 282,
        "categories": {
          "theft": 71,
          "burglary": 28,
          "assault": 23,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      }
    ]
  },
  {
    "id": 37,
    "name": "Jagat Farm",
    "type": "Commercial",
    "lat": 28.47,
    "lng": 77.505,
    "population": 40,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 85,
    "metroProximity": 1,
    "theft": 48,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 32,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 160,
    "riskLevel": "Moderate",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 38,
    "name": "Gaur City Mall",
    "type": "Commercial",
    "lat": 28.605,
    "lng": 77.428,
    "population": 55,
    "policeStations": 2,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 2,
    "theft": 54,
    "burglary": 18,
    "assault": 18,
    "vehicleCrime": 36,
    "cyberCrime": 18,
    "harassment": 18,
    "fraud": 9,
    "drugRelated": 9,
    "total": 180,
    "riskLevel": "Moderate",
    "safetyScore": 82,
    "history": [
      {
        "year": 2019,
        "total": 160,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 157,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 31,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 176,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 190,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 194,
        "categories": {
          "theft": 49,
          "burglary": 19,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 39,
    "name": "Omaxe Connaught Place",
    "type": "Commercial",
    "lat": 28.473,
    "lng": 77.525,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 1.5,
    "theft": 42,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 140,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 107,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 118,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 146,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 40,
    "name": "Sector 1 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.586,
    "lng": 77.42,
    "population": 26,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 3.2,
    "theft": 40,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 27,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 7,
    "drugRelated": 7,
    "total": 134,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 114,
        "categories": {
          "theft": 29,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 97,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 112,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 139,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 41,
    "name": "Sector 2 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.592,
    "lng": 77.42,
    "population": 27,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 3.4,
    "theft": 41,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 138,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 118,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 105,
        "categories": {
          "theft": 26,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 116,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 130,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 144,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 42,
    "name": "Sector 3 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.598,
    "lng": 77.42,
    "population": 28,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 3.6,
    "theft": 43,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 142,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 104,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 109,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 134,
        "categories": {
          "theft": 34,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 145,
        "categories": {
          "theft": 36,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 148,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 149,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 43,
    "name": "Sector 4 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.604,
    "lng": 77.42,
    "population": 29,
    "policeStations": 2,
    "cctvCoverage": 50,
    "streetLightIndex": 55,
    "metroProximity": 3.8,
    "theft": 63,
    "burglary": 21,
    "assault": 21,
    "vehicleCrime": 42,
    "cyberCrime": 21,
    "harassment": 21,
    "fraud": 11,
    "drugRelated": 11,
    "total": 210,
    "riskLevel": "High",
    "safetyScore": 79,
    "history": [
      {
        "year": 2019,
        "total": 190,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2020,
        "total": 162,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2021,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 187,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2023,
        "total": 209,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 31,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2024,
        "total": 226,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2025,
        "total": 231,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2026,
        "total": 233,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 47,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      }
    ]
  },
  {
    "id": 44,
    "name": "Sector 5 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.58,
    "lng": 77.425,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 4,
    "theft": 30,
    "burglary": 10,
    "assault": 10,
    "vehicleCrime": 20,
    "cyberCrime": 10,
    "harassment": 10,
    "fraud": 5,
    "drugRelated": 5,
    "total": 100,
    "riskLevel": "Low",
    "safetyScore": 90,
    "history": [
      {
        "year": 2019,
        "total": 80,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 68,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 14,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 71,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 78,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 87,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 96,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2026,
        "total": 97,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      }
    ]
  },
  {
    "id": 45,
    "name": "Sector 6 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.586,
    "lng": 77.425,
    "population": 31,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 4.2,
    "theft": 46,
    "burglary": 15,
    "assault": 15,
    "vehicleCrime": 31,
    "cyberCrime": 15,
    "harassment": 15,
    "fraud": 8,
    "drugRelated": 8,
    "total": 154,
    "riskLevel": "Moderate",
    "safetyScore": 85,
    "history": [
      {
        "year": 2019,
        "total": 134,
        "categories": {
          "theft": 34,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 114,
        "categories": {
          "theft": 29,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 148,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 160,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 163,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 165,
        "categories": {
          "theft": 41,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 46,
    "name": "Sector 7 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.592,
    "lng": 77.425,
    "population": 32,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 4.4,
    "theft": 47,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 32,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 158,
    "riskLevel": "Moderate",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 117,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 123,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 151,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 163,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 166,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 168,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 34,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 47,
    "name": "Sector 8 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.598,
    "lng": 77.425,
    "population": 33,
    "policeStations": 2,
    "cctvCoverage": 50,
    "streetLightIndex": 55,
    "metroProximity": 4.6,
    "theft": 69,
    "burglary": 23,
    "assault": 23,
    "vehicleCrime": 46,
    "cyberCrime": 23,
    "harassment": 23,
    "fraud": 12,
    "drugRelated": 12,
    "total": 230,
    "riskLevel": "High",
    "safetyScore": 77,
    "history": [
      {
        "year": 2019,
        "total": 210,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 188,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 207,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 251,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 256,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2026,
        "total": 259,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      }
    ]
  },
  {
    "id": 48,
    "name": "Sector 9 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.604,
    "lng": 77.425,
    "population": 34,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 4.8,
    "theft": 50,
    "burglary": 17,
    "assault": 17,
    "vehicleCrime": 33,
    "cyberCrime": 17,
    "harassment": 17,
    "fraud": 8,
    "drugRelated": 8,
    "total": 166,
    "riskLevel": "Moderate",
    "safetyScore": 83,
    "history": [
      {
        "year": 2019,
        "total": 146,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 124,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 130,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 160,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 173,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 176,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 178,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 49,
    "name": "Sector 10 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.58,
    "lng": 77.43,
    "population": 35,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 5,
    "theft": 33,
    "burglary": 11,
    "assault": 11,
    "vehicleCrime": 22,
    "cyberCrime": 11,
    "harassment": 11,
    "fraud": 6,
    "drugRelated": 6,
    "total": 110,
    "riskLevel": "Low",
    "safetyScore": 89,
    "history": [
      {
        "year": 2019,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 77,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 108,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 50,
    "name": "Sector 11 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.586,
    "lng": 77.43,
    "population": 36,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 5.2,
    "theft": 52,
    "burglary": 17,
    "assault": 17,
    "vehicleCrime": 35,
    "cyberCrime": 17,
    "harassment": 17,
    "fraud": 9,
    "drugRelated": 9,
    "total": 174,
    "riskLevel": "Moderate",
    "safetyScore": 83,
    "history": [
      {
        "year": 2019,
        "total": 154,
        "categories": {
          "theft": 39,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 131,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 152,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 184,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 188,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 190,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 51,
    "name": "Sector 12 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.592,
    "lng": 77.43,
    "population": 37,
    "policeStations": 2,
    "cctvCoverage": 50,
    "streetLightIndex": 55,
    "metroProximity": 5.4,
    "theft": 75,
    "burglary": 25,
    "assault": 25,
    "vehicleCrime": 50,
    "cyberCrime": 25,
    "harassment": 25,
    "fraud": 13,
    "drugRelated": 13,
    "total": 250,
    "riskLevel": "High",
    "safetyScore": 75,
    "history": [
      {
        "year": 2019,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 206,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 227,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 254,
        "categories": {
          "theft": 64,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 274,
        "categories": {
          "theft": 69,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2025,
        "total": 279,
        "categories": {
          "theft": 70,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2026,
        "total": 282,
        "categories": {
          "theft": 71,
          "burglary": 28,
          "assault": 23,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      }
    ]
  },
  {
    "id": 52,
    "name": "Sector 13 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.598,
    "lng": 77.43,
    "population": 38,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 5.6,
    "theft": 55,
    "burglary": 18,
    "assault": 18,
    "vehicleCrime": 36,
    "cyberCrime": 18,
    "harassment": 18,
    "fraud": 9,
    "drugRelated": 9,
    "total": 182,
    "riskLevel": "Moderate",
    "safetyScore": 82,
    "history": [
      {
        "year": 2019,
        "total": 162,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 145,
        "categories": {
          "theft": 36,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 160,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 193,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 197,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 199,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 53,
    "name": "Sector 14 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.604,
    "lng": 77.43,
    "population": 39,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 5.800000000000001,
    "theft": 56,
    "burglary": 19,
    "assault": 19,
    "vehicleCrime": 37,
    "cyberCrime": 19,
    "harassment": 19,
    "fraud": 9,
    "drugRelated": 9,
    "total": 186,
    "riskLevel": "Moderate",
    "safetyScore": 81,
    "history": [
      {
        "year": 2019,
        "total": 166,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 141,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 148,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 163,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 183,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 198,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 202,
        "categories": {
          "theft": 51,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 204,
        "categories": {
          "theft": 51,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 54,
    "name": "Sector 15 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.58,
    "lng": 77.435,
    "population": 40,
    "policeStations": 1,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 6,
    "theft": 36,
    "burglary": 12,
    "assault": 12,
    "vehicleCrime": 24,
    "cyberCrime": 12,
    "harassment": 12,
    "fraud": 6,
    "drugRelated": 6,
    "total": 120,
    "riskLevel": "Low",
    "safetyScore": 88,
    "history": [
      {
        "year": 2019,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 98,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 121,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 55,
    "name": "Sector 16 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.586,
    "lng": 77.435,
    "population": 41,
    "policeStations": 2,
    "cctvCoverage": 50,
    "streetLightIndex": 55,
    "metroProximity": 6.2,
    "theft": 81,
    "burglary": 27,
    "assault": 27,
    "vehicleCrime": 54,
    "cyberCrime": 27,
    "harassment": 27,
    "fraud": 14,
    "drugRelated": 14,
    "total": 270,
    "riskLevel": "High",
    "safetyScore": 73,
    "history": [
      {
        "year": 2019,
        "total": 250,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2020,
        "total": 213,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2021,
        "total": 224,
        "categories": {
          "theft": 56,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2022,
        "total": 246,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      },
      {
        "year": 2023,
        "total": 276,
        "categories": {
          "theft": 69,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2024,
        "total": 298,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 304,
        "categories": {
          "theft": 76,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 61,
          "cyberCrime": 46,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2026,
        "total": 307,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 61,
          "cyberCrime": 46,
          "harassment": 21,
          "fraud": 31,
          "drugRelated": 15
        }
      }
    ]
  },
  {
    "id": 56,
    "name": "Sector 17 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.592,
    "lng": 77.435,
    "population": 42,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 6.4,
    "theft": 59,
    "burglary": 20,
    "assault": 20,
    "vehicleCrime": 40,
    "cyberCrime": 20,
    "harassment": 20,
    "fraud": 10,
    "drugRelated": 10,
    "total": 198,
    "riskLevel": "Moderate",
    "safetyScore": 80,
    "history": [
      {
        "year": 2019,
        "total": 178,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2020,
        "total": 151,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2021,
        "total": 159,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2022,
        "total": 175,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2023,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2024,
        "total": 212,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2025,
        "total": 216,
        "categories": {
          "theft": 54,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2026,
        "total": 218,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      }
    ]
  },
  {
    "id": 57,
    "name": "Sector 18 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.598,
    "lng": 77.435,
    "population": 43,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 6.6,
    "theft": 61,
    "burglary": 20,
    "assault": 20,
    "vehicleCrime": 40,
    "cyberCrime": 20,
    "harassment": 20,
    "fraud": 10,
    "drugRelated": 10,
    "total": 202,
    "riskLevel": "Moderate",
    "safetyScore": 80,
    "history": [
      {
        "year": 2019,
        "total": 182,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2020,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2021,
        "total": 163,
        "categories": {
          "theft": 41,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2022,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2023,
        "total": 200,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2024,
        "total": 216,
        "categories": {
          "theft": 54,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2025,
        "total": 220,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2026,
        "total": 222,
        "categories": {
          "theft": 56,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 16,
          "fraud": 22,
          "drugRelated": 11
        }
      }
    ]
  },
  {
    "id": 58,
    "name": "Sector 19 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.604,
    "lng": 77.435,
    "population": 44,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 70,
    "metroProximity": 6.800000000000001,
    "theft": 62,
    "burglary": 21,
    "assault": 21,
    "vehicleCrime": 41,
    "cyberCrime": 21,
    "harassment": 21,
    "fraud": 10,
    "drugRelated": 10,
    "total": 206,
    "riskLevel": "Moderate",
    "safetyScore": 79,
    "history": [
      {
        "year": 2019,
        "total": 186,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2020,
        "total": 158,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2021,
        "total": 166,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2022,
        "total": 183,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2023,
        "total": 205,
        "categories": {
          "theft": 51,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2024,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2025,
        "total": 225,
        "categories": {
          "theft": 56,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2026,
        "total": 227,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      }
    ]
  },
  {
    "id": 59,
    "name": "Sector 20 (Gr Noida West)",
    "type": "Residential",
    "lat": 28.58,
    "lng": 77.44,
    "population": 45,
    "policeStations": 2,
    "cctvCoverage": 80,
    "streetLightIndex": 85,
    "metroProximity": 7,
    "theft": 87,
    "burglary": 29,
    "assault": 29,
    "vehicleCrime": 58,
    "cyberCrime": 29,
    "harassment": 29,
    "fraud": 15,
    "drugRelated": 15,
    "total": 290,
    "riskLevel": "High",
    "safetyScore": 71,
    "history": [
      {
        "year": 2019,
        "total": 270,
        "categories": {
          "theft": 68,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2020,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2021,
        "total": 242,
        "categories": {
          "theft": 61,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2022,
        "total": 266,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 298,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2024,
        "total": 322,
        "categories": {
          "theft": 81,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 23,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2025,
        "total": 328,
        "categories": {
          "theft": 82,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 49,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 16
        }
      },
      {
        "year": 2026,
        "total": 331,
        "categories": {
          "theft": 83,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 50,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 17
        }
      }
    ]
  },
  {
    "id": 60,
    "name": "Techzone 1",
    "type": "Institutional",
    "lat": 28.535,
    "lng": 77.45400000000001,
    "population": 11,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 5.5,
    "theft": 26,
    "burglary": 9,
    "assault": 9,
    "vehicleCrime": 17,
    "cyberCrime": 9,
    "harassment": 9,
    "fraud": 4,
    "drugRelated": 4,
    "total": 85,
    "riskLevel": "Low",
    "safetyScore": 91,
    "history": [
      {
        "year": 2019,
        "total": 65,
        "categories": {
          "theft": 16,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2020,
        "total": 55,
        "categories": {
          "theft": 14,
          "burglary": 6,
          "assault": 4,
          "vehicleCrime": 11,
          "cyberCrime": 8,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 58,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 64,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2023,
        "total": 72,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 78,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2025,
        "total": 80,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2026,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      }
    ]
  },
  {
    "id": 61,
    "name": "Techzone 2",
    "type": "Institutional",
    "lat": 28.540000000000003,
    "lng": 77.458,
    "population": 12,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 6,
    "theft": 27,
    "burglary": 9,
    "assault": 9,
    "vehicleCrime": 18,
    "cyberCrime": 9,
    "harassment": 9,
    "fraud": 5,
    "drugRelated": 5,
    "total": 90,
    "riskLevel": "Low",
    "safetyScore": 91,
    "history": [
      {
        "year": 2019,
        "total": 70,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 60,
        "categories": {
          "theft": 15,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 12,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 63,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 9,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 69,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2023,
        "total": 77,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 83,
        "categories": {
          "theft": 21,
          "burglary": 8,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2025,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2026,
        "total": 86,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      }
    ]
  },
  {
    "id": 62,
    "name": "Techzone 3",
    "type": "Institutional",
    "lat": 28.545,
    "lng": 77.462,
    "population": 13,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 6.5,
    "theft": 29,
    "burglary": 10,
    "assault": 10,
    "vehicleCrime": 19,
    "cyberCrime": 10,
    "harassment": 10,
    "fraud": 5,
    "drugRelated": 5,
    "total": 95,
    "riskLevel": "Low",
    "safetyScore": 90,
    "history": [
      {
        "year": 2019,
        "total": 75,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 64,
        "categories": {
          "theft": 16,
          "burglary": 6,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 4,
          "fraud": 6,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 67,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 13,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2022,
        "total": 74,
        "categories": {
          "theft": 19,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 83,
        "categories": {
          "theft": 21,
          "burglary": 8,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 92,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2026,
        "total": 93,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      }
    ]
  },
  {
    "id": 63,
    "name": "Techzone 4",
    "type": "Institutional",
    "lat": 28.55,
    "lng": 77.46600000000001,
    "population": 14,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 7,
    "theft": 30,
    "burglary": 10,
    "assault": 10,
    "vehicleCrime": 20,
    "cyberCrime": 10,
    "harassment": 10,
    "fraud": 5,
    "drugRelated": 5,
    "total": 100,
    "riskLevel": "Low",
    "safetyScore": 90,
    "history": [
      {
        "year": 2019,
        "total": 80,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 68,
        "categories": {
          "theft": 17,
          "burglary": 7,
          "assault": 5,
          "vehicleCrime": 14,
          "cyberCrime": 10,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 3
        }
      },
      {
        "year": 2021,
        "total": 71,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 78,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 87,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2024,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 96,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2026,
        "total": 97,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      }
    ]
  },
  {
    "id": 64,
    "name": "Techzone 5",
    "type": "Institutional",
    "lat": 28.555,
    "lng": 77.47,
    "population": 15,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 7.5,
    "theft": 32,
    "burglary": 11,
    "assault": 11,
    "vehicleCrime": 21,
    "cyberCrime": 11,
    "harassment": 11,
    "fraud": 5,
    "drugRelated": 5,
    "total": 105,
    "riskLevel": "Low",
    "safetyScore": 89,
    "history": [
      {
        "year": 2019,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2020,
        "total": 72,
        "categories": {
          "theft": 18,
          "burglary": 7,
          "assault": 6,
          "vehicleCrime": 14,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 7,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 76,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 11,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 84,
        "categories": {
          "theft": 21,
          "burglary": 8,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 104,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2026,
        "total": 105,
        "categories": {
          "theft": 26,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      }
    ]
  },
  {
    "id": 65,
    "name": "Techzone 6",
    "type": "Institutional",
    "lat": 28.560000000000002,
    "lng": 77.474,
    "population": 16,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 8,
    "theft": 33,
    "burglary": 11,
    "assault": 11,
    "vehicleCrime": 22,
    "cyberCrime": 11,
    "harassment": 11,
    "fraud": 6,
    "drugRelated": 6,
    "total": 110,
    "riskLevel": "Low",
    "safetyScore": 89,
    "history": [
      {
        "year": 2019,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 77,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 108,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 66,
    "name": "Techzone 7",
    "type": "Institutional",
    "lat": 28.565,
    "lng": 77.47800000000001,
    "population": 17,
    "policeStations": 1,
    "cctvCoverage": 85,
    "streetLightIndex": 90,
    "metroProximity": 8.5,
    "theft": 35,
    "burglary": 12,
    "assault": 12,
    "vehicleCrime": 23,
    "cyberCrime": 12,
    "harassment": 12,
    "fraud": 6,
    "drugRelated": 6,
    "total": 115,
    "riskLevel": "Low",
    "safetyScore": 88,
    "history": [
      {
        "year": 2019,
        "total": 95,
        "categories": {
          "theft": 24,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 105,
        "categories": {
          "theft": 26,
          "burglary": 11,
          "assault": 8,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 113,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 115,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 116,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 67,
    "name": "Knowledge Park 1",
    "type": "Institutional",
    "lat": 28.47,
    "lng": 77.487,
    "population": 16,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 80,
    "metroProximity": 2.5,
    "theft": 36,
    "burglary": 12,
    "assault": 12,
    "vehicleCrime": 24,
    "cyberCrime": 12,
    "harassment": 12,
    "fraud": 6,
    "drugRelated": 6,
    "total": 120,
    "riskLevel": "Moderate",
    "safetyScore": 88,
    "history": [
      {
        "year": 2019,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 85,
        "categories": {
          "theft": 21,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 17,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 98,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2025,
        "total": 121,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 68,
    "name": "Knowledge Park 2",
    "type": "Institutional",
    "lat": 28.477999999999998,
    "lng": 77.489,
    "population": 17,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 80,
    "metroProximity": 3.5,
    "theft": 39,
    "burglary": 13,
    "assault": 13,
    "vehicleCrime": 26,
    "cyberCrime": 13,
    "harassment": 13,
    "fraud": 7,
    "drugRelated": 7,
    "total": 130,
    "riskLevel": "Moderate",
    "safetyScore": 87,
    "history": [
      {
        "year": 2019,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 94,
        "categories": {
          "theft": 24,
          "burglary": 9,
          "assault": 8,
          "vehicleCrime": 19,
          "cyberCrime": 14,
          "harassment": 7,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 99,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 109,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2023,
        "total": 122,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2024,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 135,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 69,
    "name": "Knowledge Park 3",
    "type": "Institutional",
    "lat": 28.486,
    "lng": 77.491,
    "population": 18,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 80,
    "metroProximity": 4.5,
    "theft": 42,
    "burglary": 14,
    "assault": 14,
    "vehicleCrime": 28,
    "cyberCrime": 14,
    "harassment": 14,
    "fraud": 7,
    "drugRelated": 7,
    "total": 140,
    "riskLevel": "Moderate",
    "safetyScore": 86,
    "history": [
      {
        "year": 2019,
        "total": 120,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2020,
        "total": 102,
        "categories": {
          "theft": 26,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2021,
        "total": 107,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 21,
          "cyberCrime": 16,
          "harassment": 7,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2022,
        "total": 118,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2025,
        "total": 146,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2026,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      }
    ]
  },
  {
    "id": 70,
    "name": "Knowledge Park 4",
    "type": "Institutional",
    "lat": 28.494,
    "lng": 77.493,
    "population": 19,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 80,
    "metroProximity": 5.5,
    "theft": 45,
    "burglary": 15,
    "assault": 15,
    "vehicleCrime": 30,
    "cyberCrime": 15,
    "harassment": 15,
    "fraud": 8,
    "drugRelated": 8,
    "total": 150,
    "riskLevel": "Moderate",
    "safetyScore": 85,
    "history": [
      {
        "year": 2019,
        "total": 130,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 117,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 129,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 144,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 156,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 159,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 161,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 71,
    "name": "Knowledge Park 5",
    "type": "Institutional",
    "lat": 28.502,
    "lng": 77.495,
    "population": 20,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 80,
    "metroProximity": 6.5,
    "theft": 48,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 32,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 160,
    "riskLevel": "Moderate",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 72,
    "name": "Ecotech 1",
    "type": "Industrial",
    "lat": 28.432000000000002,
    "lng": 77.547,
    "population": 31,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 6.5,
    "theft": 65,
    "burglary": 22,
    "assault": 22,
    "vehicleCrime": 43,
    "cyberCrime": 22,
    "harassment": 22,
    "fraud": 11,
    "drugRelated": 11,
    "total": 215,
    "riskLevel": "High",
    "safetyScore": 78,
    "history": [
      {
        "year": 2019,
        "total": 195,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2020,
        "total": 166,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2021,
        "total": 174,
        "categories": {
          "theft": 44,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 191,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 214,
        "categories": {
          "theft": 54,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2024,
        "total": 231,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2025,
        "total": 236,
        "categories": {
          "theft": 59,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 47,
          "cyberCrime": 35,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2026,
        "total": 238,
        "categories": {
          "theft": 60,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      }
    ]
  },
  {
    "id": 73,
    "name": "Ecotech 2",
    "type": "Industrial",
    "lat": 28.444000000000003,
    "lng": 77.544,
    "population": 32,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 7,
    "theft": 66,
    "burglary": 22,
    "assault": 22,
    "vehicleCrime": 44,
    "cyberCrime": 22,
    "harassment": 22,
    "fraud": 11,
    "drugRelated": 11,
    "total": 220,
    "riskLevel": "High",
    "safetyScore": 78,
    "history": [
      {
        "year": 2019,
        "total": 200,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2020,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 197,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2024,
        "total": 239,
        "categories": {
          "theft": 60,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2025,
        "total": 244,
        "categories": {
          "theft": 61,
          "burglary": 24,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2026,
        "total": 246,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      }
    ]
  },
  {
    "id": 74,
    "name": "Ecotech 3",
    "type": "Industrial",
    "lat": 28.456000000000003,
    "lng": 77.541,
    "population": 33,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 45,
    "metroProximity": 7.5,
    "theft": 93,
    "burglary": 31,
    "assault": 31,
    "vehicleCrime": 62,
    "cyberCrime": 31,
    "harassment": 31,
    "fraud": 16,
    "drugRelated": 16,
    "total": 310,
    "riskLevel": "Critical",
    "safetyScore": 69,
    "history": [
      {
        "year": 2019,
        "total": 290,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 58,
          "cyberCrime": 44,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 15
        }
      },
      {
        "year": 2020,
        "total": 247,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      },
      {
        "year": 2021,
        "total": 259,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2022,
        "total": 285,
        "categories": {
          "theft": 71,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2023,
        "total": 319,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2024,
        "total": 345,
        "categories": {
          "theft": 86,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 69,
          "cyberCrime": 52,
          "harassment": 24,
          "fraud": 35,
          "drugRelated": 17
        }
      },
      {
        "year": 2025,
        "total": 352,
        "categories": {
          "theft": 88,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 70,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 35,
          "drugRelated": 18
        }
      },
      {
        "year": 2026,
        "total": 356,
        "categories": {
          "theft": 89,
          "burglary": 36,
          "assault": 28,
          "vehicleCrime": 71,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 36,
          "drugRelated": 18
        }
      }
    ]
  },
  {
    "id": 75,
    "name": "Ecotech 4",
    "type": "Industrial",
    "lat": 28.468,
    "lng": 77.538,
    "population": 34,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 8,
    "theft": 69,
    "burglary": 23,
    "assault": 23,
    "vehicleCrime": 46,
    "cyberCrime": 23,
    "harassment": 23,
    "fraud": 12,
    "drugRelated": 12,
    "total": 230,
    "riskLevel": "High",
    "safetyScore": 77,
    "history": [
      {
        "year": 2019,
        "total": 210,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 188,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 207,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 251,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 256,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2026,
        "total": 259,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      }
    ]
  },
  {
    "id": 76,
    "name": "Ecotech 5",
    "type": "Industrial",
    "lat": 28.48,
    "lng": 77.535,
    "population": 35,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 8.5,
    "theft": 71,
    "burglary": 24,
    "assault": 24,
    "vehicleCrime": 47,
    "cyberCrime": 24,
    "harassment": 24,
    "fraud": 12,
    "drugRelated": 12,
    "total": 235,
    "riskLevel": "High",
    "safetyScore": 76,
    "history": [
      {
        "year": 2019,
        "total": 215,
        "categories": {
          "theft": 54,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 183,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 192,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 211,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 236,
        "categories": {
          "theft": 59,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 47,
          "cyberCrime": 35,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 255,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 260,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2026,
        "total": 263,
        "categories": {
          "theft": 66,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      }
    ]
  },
  {
    "id": 77,
    "name": "Ecotech 6",
    "type": "Industrial",
    "lat": 28.492,
    "lng": 77.532,
    "population": 36,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 45,
    "metroProximity": 9,
    "theft": 102,
    "burglary": 34,
    "assault": 34,
    "vehicleCrime": 68,
    "cyberCrime": 34,
    "harassment": 34,
    "fraud": 17,
    "drugRelated": 17,
    "total": 340,
    "riskLevel": "Critical",
    "safetyScore": 66,
    "history": [
      {
        "year": 2019,
        "total": 320,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2020,
        "total": 272,
        "categories": {
          "theft": 68,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2021,
        "total": 286,
        "categories": {
          "theft": 72,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2022,
        "total": 315,
        "categories": {
          "theft": 79,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 63,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2023,
        "total": 353,
        "categories": {
          "theft": 88,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 71,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 35,
          "drugRelated": 18
        }
      },
      {
        "year": 2024,
        "total": 381,
        "categories": {
          "theft": 95,
          "burglary": 38,
          "assault": 30,
          "vehicleCrime": 76,
          "cyberCrime": 57,
          "harassment": 27,
          "fraud": 38,
          "drugRelated": 19
        }
      },
      {
        "year": 2025,
        "total": 389,
        "categories": {
          "theft": 97,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 78,
          "cyberCrime": 58,
          "harassment": 27,
          "fraud": 39,
          "drugRelated": 19
        }
      },
      {
        "year": 2026,
        "total": 393,
        "categories": {
          "theft": 98,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 79,
          "cyberCrime": 59,
          "harassment": 28,
          "fraud": 39,
          "drugRelated": 20
        }
      }
    ]
  },
  {
    "id": 78,
    "name": "Ecotech 7",
    "type": "Industrial",
    "lat": 28.504,
    "lng": 77.529,
    "population": 37,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 9.5,
    "theft": 74,
    "burglary": 25,
    "assault": 25,
    "vehicleCrime": 49,
    "cyberCrime": 25,
    "harassment": 25,
    "fraud": 12,
    "drugRelated": 12,
    "total": 245,
    "riskLevel": "High",
    "safetyScore": 75,
    "history": [
      {
        "year": 2019,
        "total": 225,
        "categories": {
          "theft": 56,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 191,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 201,
        "categories": {
          "theft": 50,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 248,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 268,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 21,
          "vehicleCrime": 54,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 273,
        "categories": {
          "theft": 68,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2026,
        "total": 276,
        "categories": {
          "theft": 69,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 28,
          "drugRelated": 14
        }
      }
    ]
  },
  {
    "id": 79,
    "name": "Ecotech 8",
    "type": "Industrial",
    "lat": 28.516000000000002,
    "lng": 77.526,
    "population": 38,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 10,
    "theft": 75,
    "burglary": 25,
    "assault": 25,
    "vehicleCrime": 50,
    "cyberCrime": 25,
    "harassment": 25,
    "fraud": 13,
    "drugRelated": 13,
    "total": 250,
    "riskLevel": "High",
    "safetyScore": 75,
    "history": [
      {
        "year": 2019,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 206,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 227,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 254,
        "categories": {
          "theft": 64,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 274,
        "categories": {
          "theft": 69,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2025,
        "total": 279,
        "categories": {
          "theft": 70,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2026,
        "total": 282,
        "categories": {
          "theft": 71,
          "burglary": 28,
          "assault": 23,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      }
    ]
  },
  {
    "id": 80,
    "name": "Ecotech 9",
    "type": "Industrial",
    "lat": 28.528000000000002,
    "lng": 77.523,
    "population": 39,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 45,
    "metroProximity": 10.5,
    "theft": 111,
    "burglary": 37,
    "assault": 37,
    "vehicleCrime": 74,
    "cyberCrime": 37,
    "harassment": 37,
    "fraud": 19,
    "drugRelated": 19,
    "total": 370,
    "riskLevel": "Critical",
    "safetyScore": 63,
    "history": [
      {
        "year": 2019,
        "total": 350,
        "categories": {
          "theft": 88,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 70,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 35,
          "drugRelated": 18
        }
      },
      {
        "year": 2020,
        "total": 298,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2021,
        "total": 313,
        "categories": {
          "theft": 78,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 63,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 16
        }
      },
      {
        "year": 2022,
        "total": 344,
        "categories": {
          "theft": 86,
          "burglary": 34,
          "assault": 28,
          "vehicleCrime": 69,
          "cyberCrime": 52,
          "harassment": 24,
          "fraud": 34,
          "drugRelated": 17
        }
      },
      {
        "year": 2023,
        "total": 385,
        "categories": {
          "theft": 96,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 77,
          "cyberCrime": 58,
          "harassment": 27,
          "fraud": 39,
          "drugRelated": 19
        }
      },
      {
        "year": 2024,
        "total": 416,
        "categories": {
          "theft": 104,
          "burglary": 42,
          "assault": 33,
          "vehicleCrime": 83,
          "cyberCrime": 62,
          "harassment": 29,
          "fraud": 42,
          "drugRelated": 21
        }
      },
      {
        "year": 2025,
        "total": 424,
        "categories": {
          "theft": 106,
          "burglary": 42,
          "assault": 34,
          "vehicleCrime": 85,
          "cyberCrime": 64,
          "harassment": 30,
          "fraud": 42,
          "drugRelated": 21
        }
      },
      {
        "year": 2026,
        "total": 428,
        "categories": {
          "theft": 107,
          "burglary": 43,
          "assault": 34,
          "vehicleCrime": 86,
          "cyberCrime": 64,
          "harassment": 30,
          "fraud": 43,
          "drugRelated": 21
        }
      }
    ]
  },
  {
    "id": 81,
    "name": "Ecotech 10",
    "type": "Industrial",
    "lat": 28.540000000000003,
    "lng": 77.52,
    "population": 40,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 11,
    "theft": 78,
    "burglary": 26,
    "assault": 26,
    "vehicleCrime": 52,
    "cyberCrime": 26,
    "harassment": 26,
    "fraud": 13,
    "drugRelated": 13,
    "total": 260,
    "riskLevel": "High",
    "safetyScore": 74,
    "history": [
      {
        "year": 2019,
        "total": 240,
        "categories": {
          "theft": 60,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 204,
        "categories": {
          "theft": 51,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 214,
        "categories": {
          "theft": 54,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2022,
        "total": 235,
        "categories": {
          "theft": 59,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 47,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2023,
        "total": 263,
        "categories": {
          "theft": 66,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 284,
        "categories": {
          "theft": 71,
          "burglary": 28,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2025,
        "total": 290,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 58,
          "cyberCrime": 44,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 15
        }
      },
      {
        "year": 2026,
        "total": 293,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 59,
          "cyberCrime": 44,
          "harassment": 21,
          "fraud": 29,
          "drugRelated": 15
        }
      }
    ]
  },
  {
    "id": 82,
    "name": "Ecotech 11",
    "type": "Industrial",
    "lat": 28.552000000000003,
    "lng": 77.517,
    "population": 41,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 11.5,
    "theft": 80,
    "burglary": 27,
    "assault": 27,
    "vehicleCrime": 53,
    "cyberCrime": 27,
    "harassment": 27,
    "fraud": 13,
    "drugRelated": 13,
    "total": 265,
    "riskLevel": "High",
    "safetyScore": 73,
    "history": [
      {
        "year": 2019,
        "total": 245,
        "categories": {
          "theft": 61,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 208,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 31,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 218,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2022,
        "total": 240,
        "categories": {
          "theft": 60,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2023,
        "total": 269,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 291,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 58,
          "cyberCrime": 44,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 297,
        "categories": {
          "theft": 74,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 59,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2026,
        "total": 300,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      }
    ]
  },
  {
    "id": 83,
    "name": "Ecotech 12",
    "type": "Industrial",
    "lat": 28.564,
    "lng": 77.514,
    "population": 42,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 45,
    "metroProximity": 12,
    "theft": 120,
    "burglary": 40,
    "assault": 40,
    "vehicleCrime": 80,
    "cyberCrime": 40,
    "harassment": 40,
    "fraud": 20,
    "drugRelated": 20,
    "total": 400,
    "riskLevel": "Critical",
    "safetyScore": 60,
    "history": [
      {
        "year": 2019,
        "total": 380,
        "categories": {
          "theft": 95,
          "burglary": 38,
          "assault": 30,
          "vehicleCrime": 76,
          "cyberCrime": 57,
          "harassment": 27,
          "fraud": 38,
          "drugRelated": 19
        }
      },
      {
        "year": 2020,
        "total": 323,
        "categories": {
          "theft": 81,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 65,
          "cyberCrime": 48,
          "harassment": 23,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2021,
        "total": 339,
        "categories": {
          "theft": 85,
          "burglary": 34,
          "assault": 27,
          "vehicleCrime": 68,
          "cyberCrime": 51,
          "harassment": 24,
          "fraud": 34,
          "drugRelated": 17
        }
      },
      {
        "year": 2022,
        "total": 373,
        "categories": {
          "theft": 93,
          "burglary": 37,
          "assault": 30,
          "vehicleCrime": 75,
          "cyberCrime": 56,
          "harassment": 26,
          "fraud": 37,
          "drugRelated": 19
        }
      },
      {
        "year": 2023,
        "total": 418,
        "categories": {
          "theft": 105,
          "burglary": 42,
          "assault": 33,
          "vehicleCrime": 84,
          "cyberCrime": 63,
          "harassment": 29,
          "fraud": 42,
          "drugRelated": 21
        }
      },
      {
        "year": 2024,
        "total": 451,
        "categories": {
          "theft": 113,
          "burglary": 45,
          "assault": 36,
          "vehicleCrime": 90,
          "cyberCrime": 68,
          "harassment": 32,
          "fraud": 45,
          "drugRelated": 23
        }
      },
      {
        "year": 2025,
        "total": 460,
        "categories": {
          "theft": 115,
          "burglary": 46,
          "assault": 37,
          "vehicleCrime": 92,
          "cyberCrime": 69,
          "harassment": 32,
          "fraud": 46,
          "drugRelated": 23
        }
      },
      {
        "year": 2026,
        "total": 465,
        "categories": {
          "theft": 116,
          "burglary": 47,
          "assault": 37,
          "vehicleCrime": 93,
          "cyberCrime": 70,
          "harassment": 33,
          "fraud": 47,
          "drugRelated": 23
        }
      }
    ]
  },
  {
    "id": 84,
    "name": "Ecotech 13",
    "type": "Industrial",
    "lat": 28.576,
    "lng": 77.511,
    "population": 43,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 12.5,
    "theft": 83,
    "burglary": 28,
    "assault": 28,
    "vehicleCrime": 55,
    "cyberCrime": 28,
    "harassment": 28,
    "fraud": 14,
    "drugRelated": 14,
    "total": 275,
    "riskLevel": "High",
    "safetyScore": 72,
    "history": [
      {
        "year": 2019,
        "total": 255,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2020,
        "total": 217,
        "categories": {
          "theft": 54,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2021,
        "total": 228,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2022,
        "total": 251,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 281,
        "categories": {
          "theft": 70,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2024,
        "total": 303,
        "categories": {
          "theft": 76,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 61,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 309,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 62,
          "cyberCrime": 46,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 15
        }
      },
      {
        "year": 2026,
        "total": 312,
        "categories": {
          "theft": 78,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 62,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 16
        }
      }
    ]
  },
  {
    "id": 85,
    "name": "Ecotech 14",
    "type": "Industrial",
    "lat": 28.588,
    "lng": 77.508,
    "population": 44,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 60,
    "metroProximity": 13,
    "theft": 84,
    "burglary": 28,
    "assault": 28,
    "vehicleCrime": 56,
    "cyberCrime": 28,
    "harassment": 28,
    "fraud": 14,
    "drugRelated": 14,
    "total": 280,
    "riskLevel": "High",
    "safetyScore": 72,
    "history": [
      {
        "year": 2019,
        "total": 260,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2020,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2021,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2022,
        "total": 255,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 286,
        "categories": {
          "theft": 72,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2024,
        "total": 309,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 62,
          "cyberCrime": 46,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 315,
        "categories": {
          "theft": 79,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 63,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2026,
        "total": 318,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      }
    ]
  },
  {
    "id": 86,
    "name": "Ecotech 15",
    "type": "Industrial",
    "lat": 28.6,
    "lng": 77.505,
    "population": 45,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 45,
    "metroProximity": 13.5,
    "theft": 129,
    "burglary": 43,
    "assault": 43,
    "vehicleCrime": 86,
    "cyberCrime": 43,
    "harassment": 43,
    "fraud": 22,
    "drugRelated": 22,
    "total": 430,
    "riskLevel": "Critical",
    "safetyScore": 57,
    "history": [
      {
        "year": 2019,
        "total": 410,
        "categories": {
          "theft": 103,
          "burglary": 41,
          "assault": 33,
          "vehicleCrime": 82,
          "cyberCrime": 62,
          "harassment": 29,
          "fraud": 41,
          "drugRelated": 21
        }
      },
      {
        "year": 2020,
        "total": 349,
        "categories": {
          "theft": 87,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 70,
          "cyberCrime": 52,
          "harassment": 24,
          "fraud": 35,
          "drugRelated": 17
        }
      },
      {
        "year": 2021,
        "total": 366,
        "categories": {
          "theft": 92,
          "burglary": 37,
          "assault": 29,
          "vehicleCrime": 73,
          "cyberCrime": 55,
          "harassment": 26,
          "fraud": 37,
          "drugRelated": 18
        }
      },
      {
        "year": 2022,
        "total": 403,
        "categories": {
          "theft": 101,
          "burglary": 40,
          "assault": 32,
          "vehicleCrime": 81,
          "cyberCrime": 60,
          "harassment": 28,
          "fraud": 40,
          "drugRelated": 20
        }
      },
      {
        "year": 2023,
        "total": 451,
        "categories": {
          "theft": 113,
          "burglary": 45,
          "assault": 36,
          "vehicleCrime": 90,
          "cyberCrime": 68,
          "harassment": 32,
          "fraud": 45,
          "drugRelated": 23
        }
      },
      {
        "year": 2024,
        "total": 487,
        "categories": {
          "theft": 122,
          "burglary": 49,
          "assault": 39,
          "vehicleCrime": 97,
          "cyberCrime": 73,
          "harassment": 34,
          "fraud": 49,
          "drugRelated": 24
        }
      },
      {
        "year": 2025,
        "total": 497,
        "categories": {
          "theft": 124,
          "burglary": 50,
          "assault": 40,
          "vehicleCrime": 99,
          "cyberCrime": 75,
          "harassment": 35,
          "fraud": 50,
          "drugRelated": 25
        }
      },
      {
        "year": 2026,
        "total": 502,
        "categories": {
          "theft": 126,
          "burglary": 50,
          "assault": 40,
          "vehicleCrime": 100,
          "cyberCrime": 75,
          "harassment": 35,
          "fraud": 50,
          "drugRelated": 25
        }
      }
    ]
  },
  {
    "id": 87,
    "name": "Surajpur",
    "type": "Village",
    "lat": 28.528,
    "lng": 77.491,
    "population": 50,
    "policeStations": 2,
    "cctvCoverage": 45,
    "streetLightIndex": 55,
    "metroProximity": 4,
    "theft": 84,
    "burglary": 28,
    "assault": 28,
    "vehicleCrime": 56,
    "cyberCrime": 28,
    "harassment": 28,
    "fraud": 14,
    "drugRelated": 14,
    "total": 280,
    "riskLevel": "High",
    "safetyScore": 72,
    "history": [
      {
        "year": 2019,
        "total": 260,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2020,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2021,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2022,
        "total": 255,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 286,
        "categories": {
          "theft": 72,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2024,
        "total": 309,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 62,
          "cyberCrime": 46,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 315,
        "categories": {
          "theft": 79,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 63,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2026,
        "total": 318,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      }
    ]
  },
  {
    "id": 88,
    "name": "Bisrakh",
    "type": "Village",
    "lat": 28.591,
    "lng": 77.438,
    "population": 60,
    "policeStations": 2,
    "cctvCoverage": 35,
    "streetLightIndex": 40,
    "metroProximity": 6,
    "theft": 105,
    "burglary": 35,
    "assault": 35,
    "vehicleCrime": 70,
    "cyberCrime": 35,
    "harassment": 35,
    "fraud": 18,
    "drugRelated": 18,
    "total": 350,
    "riskLevel": "Critical",
    "safetyScore": 65,
    "history": [
      {
        "year": 2019,
        "total": 330,
        "categories": {
          "theft": 83,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 50,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 17
        }
      },
      {
        "year": 2020,
        "total": 281,
        "categories": {
          "theft": 70,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2021,
        "total": 295,
        "categories": {
          "theft": 74,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 59,
          "cyberCrime": 44,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2022,
        "total": 325,
        "categories": {
          "theft": 81,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 65,
          "cyberCrime": 49,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 16
        }
      },
      {
        "year": 2023,
        "total": 364,
        "categories": {
          "theft": 91,
          "burglary": 36,
          "assault": 29,
          "vehicleCrime": 73,
          "cyberCrime": 55,
          "harassment": 25,
          "fraud": 36,
          "drugRelated": 18
        }
      },
      {
        "year": 2024,
        "total": 393,
        "categories": {
          "theft": 98,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 79,
          "cyberCrime": 59,
          "harassment": 28,
          "fraud": 39,
          "drugRelated": 20
        }
      },
      {
        "year": 2025,
        "total": 401,
        "categories": {
          "theft": 100,
          "burglary": 40,
          "assault": 32,
          "vehicleCrime": 80,
          "cyberCrime": 60,
          "harassment": 28,
          "fraud": 40,
          "drugRelated": 20
        }
      },
      {
        "year": 2026,
        "total": 405,
        "categories": {
          "theft": 101,
          "burglary": 41,
          "assault": 32,
          "vehicleCrime": 81,
          "cyberCrime": 61,
          "harassment": 28,
          "fraud": 41,
          "drugRelated": 20
        }
      }
    ]
  },
  {
    "id": 89,
    "name": "Kasna",
    "type": "Village",
    "lat": 28.438,
    "lng": 77.535,
    "population": 45,
    "policeStations": 1,
    "cctvCoverage": 50,
    "streetLightIndex": 60,
    "metroProximity": 5.5,
    "theft": 78,
    "burglary": 26,
    "assault": 26,
    "vehicleCrime": 52,
    "cyberCrime": 26,
    "harassment": 26,
    "fraud": 13,
    "drugRelated": 13,
    "total": 260,
    "riskLevel": "High",
    "safetyScore": 74,
    "history": [
      {
        "year": 2019,
        "total": 240,
        "categories": {
          "theft": 60,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 204,
        "categories": {
          "theft": 51,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 214,
        "categories": {
          "theft": 54,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2022,
        "total": 235,
        "categories": {
          "theft": 59,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 47,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2023,
        "total": 263,
        "categories": {
          "theft": 66,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 284,
        "categories": {
          "theft": 71,
          "burglary": 28,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2025,
        "total": 290,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 58,
          "cyberCrime": 44,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 15
        }
      },
      {
        "year": 2026,
        "total": 293,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 59,
          "cyberCrime": 44,
          "harassment": 21,
          "fraud": 29,
          "drugRelated": 15
        }
      }
    ]
  },
  {
    "id": 90,
    "name": "Dadri",
    "type": "Village",
    "lat": 28.558,
    "lng": 77.553,
    "population": 70,
    "policeStations": 3,
    "cctvCoverage": 30,
    "streetLightIndex": 45,
    "metroProximity": 8,
    "theft": 123,
    "burglary": 41,
    "assault": 41,
    "vehicleCrime": 82,
    "cyberCrime": 41,
    "harassment": 41,
    "fraud": 21,
    "drugRelated": 21,
    "total": 410,
    "riskLevel": "Critical",
    "safetyScore": 59,
    "history": [
      {
        "year": 2019,
        "total": 390,
        "categories": {
          "theft": 98,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 78,
          "cyberCrime": 59,
          "harassment": 27,
          "fraud": 39,
          "drugRelated": 20
        }
      },
      {
        "year": 2020,
        "total": 332,
        "categories": {
          "theft": 83,
          "burglary": 33,
          "assault": 27,
          "vehicleCrime": 66,
          "cyberCrime": 50,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 17
        }
      },
      {
        "year": 2021,
        "total": 349,
        "categories": {
          "theft": 87,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 70,
          "cyberCrime": 52,
          "harassment": 24,
          "fraud": 35,
          "drugRelated": 17
        }
      },
      {
        "year": 2022,
        "total": 384,
        "categories": {
          "theft": 96,
          "burglary": 38,
          "assault": 31,
          "vehicleCrime": 77,
          "cyberCrime": 58,
          "harassment": 27,
          "fraud": 38,
          "drugRelated": 19
        }
      },
      {
        "year": 2023,
        "total": 430,
        "categories": {
          "theft": 108,
          "burglary": 43,
          "assault": 34,
          "vehicleCrime": 86,
          "cyberCrime": 65,
          "harassment": 30,
          "fraud": 43,
          "drugRelated": 22
        }
      },
      {
        "year": 2024,
        "total": 464,
        "categories": {
          "theft": 116,
          "burglary": 46,
          "assault": 37,
          "vehicleCrime": 93,
          "cyberCrime": 70,
          "harassment": 32,
          "fraud": 46,
          "drugRelated": 23
        }
      },
      {
        "year": 2025,
        "total": 473,
        "categories": {
          "theft": 118,
          "burglary": 47,
          "assault": 38,
          "vehicleCrime": 95,
          "cyberCrime": 71,
          "harassment": 33,
          "fraud": 47,
          "drugRelated": 24
        }
      },
      {
        "year": 2026,
        "total": 478,
        "categories": {
          "theft": 120,
          "burglary": 48,
          "assault": 38,
          "vehicleCrime": 96,
          "cyberCrime": 72,
          "harassment": 33,
          "fraud": 48,
          "drugRelated": 24
        }
      }
    ]
  },
  {
    "id": 91,
    "name": "Habibpur",
    "type": "Village",
    "lat": 28.52,
    "lng": 77.47,
    "population": 55,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 50,
    "metroProximity": 4.5,
    "theft": 87,
    "burglary": 29,
    "assault": 29,
    "vehicleCrime": 58,
    "cyberCrime": 29,
    "harassment": 29,
    "fraud": 15,
    "drugRelated": 15,
    "total": 290,
    "riskLevel": "High",
    "safetyScore": 71,
    "history": [
      {
        "year": 2019,
        "total": 270,
        "categories": {
          "theft": 68,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2020,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2021,
        "total": 242,
        "categories": {
          "theft": 61,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2022,
        "total": 266,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 298,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2024,
        "total": 322,
        "categories": {
          "theft": 81,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 23,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2025,
        "total": 328,
        "categories": {
          "theft": 82,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 49,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 16
        }
      },
      {
        "year": 2026,
        "total": 331,
        "categories": {
          "theft": 83,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 50,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 17
        }
      }
    ]
  },
  {
    "id": 92,
    "name": "Shahberi",
    "type": "Village",
    "lat": 28.618,
    "lng": 77.438,
    "population": 65,
    "policeStations": 2,
    "cctvCoverage": 25,
    "streetLightIndex": 35,
    "metroProximity": 3,
    "theft": 114,
    "burglary": 38,
    "assault": 38,
    "vehicleCrime": 76,
    "cyberCrime": 38,
    "harassment": 38,
    "fraud": 19,
    "drugRelated": 19,
    "total": 380,
    "riskLevel": "Critical",
    "safetyScore": 62,
    "history": [
      {
        "year": 2019,
        "total": 360,
        "categories": {
          "theft": 90,
          "burglary": 36,
          "assault": 29,
          "vehicleCrime": 72,
          "cyberCrime": 54,
          "harassment": 25,
          "fraud": 36,
          "drugRelated": 18
        }
      },
      {
        "year": 2020,
        "total": 306,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 24,
          "vehicleCrime": 61,
          "cyberCrime": 46,
          "harassment": 21,
          "fraud": 31,
          "drugRelated": 15
        }
      },
      {
        "year": 2021,
        "total": 321,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2022,
        "total": 353,
        "categories": {
          "theft": 88,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 71,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 35,
          "drugRelated": 18
        }
      },
      {
        "year": 2023,
        "total": 395,
        "categories": {
          "theft": 99,
          "burglary": 40,
          "assault": 32,
          "vehicleCrime": 79,
          "cyberCrime": 59,
          "harassment": 28,
          "fraud": 40,
          "drugRelated": 20
        }
      },
      {
        "year": 2024,
        "total": 427,
        "categories": {
          "theft": 107,
          "burglary": 43,
          "assault": 34,
          "vehicleCrime": 85,
          "cyberCrime": 64,
          "harassment": 30,
          "fraud": 43,
          "drugRelated": 21
        }
      },
      {
        "year": 2025,
        "total": 436,
        "categories": {
          "theft": 109,
          "burglary": 44,
          "assault": 35,
          "vehicleCrime": 87,
          "cyberCrime": 65,
          "harassment": 31,
          "fraud": 44,
          "drugRelated": 22
        }
      },
      {
        "year": 2026,
        "total": 440,
        "categories": {
          "theft": 110,
          "burglary": 44,
          "assault": 35,
          "vehicleCrime": 88,
          "cyberCrime": 66,
          "harassment": 31,
          "fraud": 44,
          "drugRelated": 22
        }
      }
    ]
  },
  {
    "id": 93,
    "name": "Patwari",
    "type": "Village",
    "lat": 28.605,
    "lng": 77.452,
    "population": 48,
    "policeStations": 1,
    "cctvCoverage": 45,
    "streetLightIndex": 55,
    "metroProximity": 3.5,
    "theft": 81,
    "burglary": 27,
    "assault": 27,
    "vehicleCrime": 54,
    "cyberCrime": 27,
    "harassment": 27,
    "fraud": 14,
    "drugRelated": 14,
    "total": 270,
    "riskLevel": "High",
    "safetyScore": 73,
    "history": [
      {
        "year": 2019,
        "total": 250,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2020,
        "total": 213,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2021,
        "total": 224,
        "categories": {
          "theft": 56,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2022,
        "total": 246,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      },
      {
        "year": 2023,
        "total": 276,
        "categories": {
          "theft": 69,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2024,
        "total": 298,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 304,
        "categories": {
          "theft": 76,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 61,
          "cyberCrime": 46,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2026,
        "total": 307,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 61,
          "cyberCrime": 46,
          "harassment": 21,
          "fraud": 31,
          "drugRelated": 15
        }
      }
    ]
  },
  {
    "id": 94,
    "name": "Kulesara",
    "type": "Village",
    "lat": 28.535,
    "lng": 77.418,
    "population": 52,
    "policeStations": 2,
    "cctvCoverage": 35,
    "streetLightIndex": 45,
    "metroProximity": 5,
    "theft": 93,
    "burglary": 31,
    "assault": 31,
    "vehicleCrime": 62,
    "cyberCrime": 31,
    "harassment": 31,
    "fraud": 16,
    "drugRelated": 16,
    "total": 310,
    "riskLevel": "High",
    "safetyScore": 69,
    "history": [
      {
        "year": 2019,
        "total": 290,
        "categories": {
          "theft": 73,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 58,
          "cyberCrime": 44,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 15
        }
      },
      {
        "year": 2020,
        "total": 247,
        "categories": {
          "theft": 62,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 49,
          "cyberCrime": 37,
          "harassment": 17,
          "fraud": 25,
          "drugRelated": 12
        }
      },
      {
        "year": 2021,
        "total": 259,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2022,
        "total": 285,
        "categories": {
          "theft": 71,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2023,
        "total": 319,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2024,
        "total": 345,
        "categories": {
          "theft": 86,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 69,
          "cyberCrime": 52,
          "harassment": 24,
          "fraud": 35,
          "drugRelated": 17
        }
      },
      {
        "year": 2025,
        "total": 352,
        "categories": {
          "theft": 88,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 70,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 35,
          "drugRelated": 18
        }
      },
      {
        "year": 2026,
        "total": 356,
        "categories": {
          "theft": 89,
          "burglary": 36,
          "assault": 28,
          "vehicleCrime": 71,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 36,
          "drugRelated": 18
        }
      }
    ]
  },
  {
    "id": 95,
    "name": "Jalpura",
    "type": "Village",
    "lat": 28.565,
    "lng": 77.432,
    "population": 35,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 70,
    "metroProximity": 4,
    "theft": 57,
    "burglary": 19,
    "assault": 19,
    "vehicleCrime": 38,
    "cyberCrime": 19,
    "harassment": 19,
    "fraud": 10,
    "drugRelated": 10,
    "total": 190,
    "riskLevel": "Moderate",
    "safetyScore": 81,
    "history": [
      {
        "year": 2019,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2020,
        "total": 145,
        "categories": {
          "theft": 36,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 152,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2022,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 187,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 202,
        "categories": {
          "theft": 51,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 40,
          "cyberCrime": 30,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 206,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 208,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 31,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 96,
    "name": "Tugalpur",
    "type": "Village",
    "lat": 28.462,
    "lng": 77.502,
    "population": 42,
    "policeStations": 1,
    "cctvCoverage": 55,
    "streetLightIndex": 65,
    "metroProximity": 1.5,
    "theft": 72,
    "burglary": 24,
    "assault": 24,
    "vehicleCrime": 48,
    "cyberCrime": 24,
    "harassment": 24,
    "fraud": 12,
    "drugRelated": 12,
    "total": 240,
    "riskLevel": "High",
    "safetyScore": 76,
    "history": [
      {
        "year": 2019,
        "total": 220,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 187,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 216,
        "categories": {
          "theft": 54,
          "burglary": 22,
          "assault": 17,
          "vehicleCrime": 43,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 242,
        "categories": {
          "theft": 61,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 261,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 266,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      },
      {
        "year": 2026,
        "total": 269,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      }
    ]
  },
  {
    "id": 97,
    "name": "Gharbara",
    "type": "Village",
    "lat": 28.412,
    "lng": 77.518,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 4.5,
    "theft": 51,
    "burglary": 17,
    "assault": 17,
    "vehicleCrime": 34,
    "cyberCrime": 17,
    "harassment": 17,
    "fraud": 9,
    "drugRelated": 9,
    "total": 170,
    "riskLevel": "Moderate",
    "safetyScore": 83,
    "history": [
      {
        "year": 2019,
        "total": 150,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 30,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 128,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 134,
        "categories": {
          "theft": 34,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 147,
        "categories": {
          "theft": 37,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 165,
        "categories": {
          "theft": 41,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 178,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 182,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 184,
        "categories": {
          "theft": 46,
          "burglary": 18,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 98,
    "name": "Saini",
    "type": "Village",
    "lat": 28.58,
    "lng": 77.46,
    "population": 32,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 70,
    "metroProximity": 5,
    "theft": 54,
    "burglary": 18,
    "assault": 18,
    "vehicleCrime": 36,
    "cyberCrime": 18,
    "harassment": 18,
    "fraud": 9,
    "drugRelated": 9,
    "total": 180,
    "riskLevel": "Moderate",
    "safetyScore": 82,
    "history": [
      {
        "year": 2019,
        "total": 160,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 136,
        "categories": {
          "theft": 34,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 27,
          "cyberCrime": 20,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 143,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 29,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 157,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 31,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 176,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 190,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2025,
        "total": 194,
        "categories": {
          "theft": 49,
          "burglary": 19,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 19,
          "drugRelated": 10
        }
      },
      {
        "year": 2026,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 99,
    "name": "Sunpura",
    "type": "Village",
    "lat": 28.57,
    "lng": 77.48,
    "population": 40,
    "policeStations": 1,
    "cctvCoverage": 50,
    "streetLightIndex": 60,
    "metroProximity": 6.5,
    "theft": 69,
    "burglary": 23,
    "assault": 23,
    "vehicleCrime": 46,
    "cyberCrime": 23,
    "harassment": 23,
    "fraud": 12,
    "drugRelated": 12,
    "total": 230,
    "riskLevel": "High",
    "safetyScore": 77,
    "history": [
      {
        "year": 2019,
        "total": 210,
        "categories": {
          "theft": 53,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 42,
          "cyberCrime": 32,
          "harassment": 15,
          "fraud": 21,
          "drugRelated": 11
        }
      },
      {
        "year": 2020,
        "total": 179,
        "categories": {
          "theft": 45,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 36,
          "cyberCrime": 27,
          "harassment": 13,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2021,
        "total": 188,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2022,
        "total": 207,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 17,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2023,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2024,
        "total": 251,
        "categories": {
          "theft": 63,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 50,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2025,
        "total": 256,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2026,
        "total": 259,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      }
    ]
  },
  {
    "id": 100,
    "name": "Chhapraula",
    "type": "Village",
    "lat": 28.625,
    "lng": 77.465,
    "population": 58,
    "policeStations": 2,
    "cctvCoverage": 35,
    "streetLightIndex": 45,
    "metroProximity": 7,
    "theft": 99,
    "burglary": 33,
    "assault": 33,
    "vehicleCrime": 66,
    "cyberCrime": 33,
    "harassment": 33,
    "fraud": 17,
    "drugRelated": 17,
    "total": 330,
    "riskLevel": "Critical",
    "safetyScore": 67,
    "history": [
      {
        "year": 2019,
        "total": 310,
        "categories": {
          "theft": 78,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 62,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 16
        }
      },
      {
        "year": 2020,
        "total": 264,
        "categories": {
          "theft": 66,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 40,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2021,
        "total": 277,
        "categories": {
          "theft": 69,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 42,
          "harassment": 19,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2022,
        "total": 305,
        "categories": {
          "theft": 76,
          "burglary": 31,
          "assault": 24,
          "vehicleCrime": 61,
          "cyberCrime": 46,
          "harassment": 21,
          "fraud": 31,
          "drugRelated": 15
        }
      },
      {
        "year": 2023,
        "total": 342,
        "categories": {
          "theft": 86,
          "burglary": 34,
          "assault": 27,
          "vehicleCrime": 68,
          "cyberCrime": 51,
          "harassment": 24,
          "fraud": 34,
          "drugRelated": 17
        }
      },
      {
        "year": 2024,
        "total": 369,
        "categories": {
          "theft": 92,
          "burglary": 37,
          "assault": 30,
          "vehicleCrime": 74,
          "cyberCrime": 55,
          "harassment": 26,
          "fraud": 37,
          "drugRelated": 18
        }
      },
      {
        "year": 2025,
        "total": 376,
        "categories": {
          "theft": 94,
          "burglary": 38,
          "assault": 30,
          "vehicleCrime": 75,
          "cyberCrime": 56,
          "harassment": 26,
          "fraud": 38,
          "drugRelated": 19
        }
      },
      {
        "year": 2026,
        "total": 380,
        "categories": {
          "theft": 95,
          "burglary": 38,
          "assault": 30,
          "vehicleCrime": 76,
          "cyberCrime": 57,
          "harassment": 27,
          "fraud": 38,
          "drugRelated": 19
        }
      }
    ]
  },
  {
    "id": 101,
    "name": "Tusyana",
    "type": "Village",
    "lat": 28.485,
    "lng": 77.475,
    "population": 28,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 3.5,
    "theft": 48,
    "burglary": 16,
    "assault": 16,
    "vehicleCrime": 32,
    "cyberCrime": 16,
    "harassment": 16,
    "fraud": 8,
    "drugRelated": 8,
    "total": 160,
    "riskLevel": "Moderate",
    "safetyScore": 84,
    "history": [
      {
        "year": 2019,
        "total": 140,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 119,
        "categories": {
          "theft": 30,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 24,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 125,
        "categories": {
          "theft": 31,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 138,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 167,
        "categories": {
          "theft": 42,
          "burglary": 17,
          "assault": 13,
          "vehicleCrime": 33,
          "cyberCrime": 25,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 170,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      }
    ]
  },
  {
    "id": 102,
    "name": "Chipiyana",
    "type": "Village",
    "lat": 28.63,
    "lng": 77.445,
    "population": 62,
    "policeStations": 2,
    "cctvCoverage": 30,
    "streetLightIndex": 40,
    "metroProximity": 4.5,
    "theft": 108,
    "burglary": 36,
    "assault": 36,
    "vehicleCrime": 72,
    "cyberCrime": 36,
    "harassment": 36,
    "fraud": 18,
    "drugRelated": 18,
    "total": 360,
    "riskLevel": "Critical",
    "safetyScore": 64,
    "history": [
      {
        "year": 2019,
        "total": 340,
        "categories": {
          "theft": 85,
          "burglary": 34,
          "assault": 27,
          "vehicleCrime": 68,
          "cyberCrime": 51,
          "harassment": 24,
          "fraud": 34,
          "drugRelated": 17
        }
      },
      {
        "year": 2020,
        "total": 289,
        "categories": {
          "theft": 72,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 58,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2021,
        "total": 303,
        "categories": {
          "theft": 76,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 61,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2022,
        "total": 333,
        "categories": {
          "theft": 83,
          "burglary": 33,
          "assault": 27,
          "vehicleCrime": 67,
          "cyberCrime": 50,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 17
        }
      },
      {
        "year": 2023,
        "total": 373,
        "categories": {
          "theft": 93,
          "burglary": 37,
          "assault": 30,
          "vehicleCrime": 75,
          "cyberCrime": 56,
          "harassment": 26,
          "fraud": 37,
          "drugRelated": 19
        }
      },
      {
        "year": 2024,
        "total": 403,
        "categories": {
          "theft": 101,
          "burglary": 40,
          "assault": 32,
          "vehicleCrime": 81,
          "cyberCrime": 60,
          "harassment": 28,
          "fraud": 40,
          "drugRelated": 20
        }
      },
      {
        "year": 2025,
        "total": 411,
        "categories": {
          "theft": 103,
          "burglary": 41,
          "assault": 33,
          "vehicleCrime": 82,
          "cyberCrime": 62,
          "harassment": 29,
          "fraud": 41,
          "drugRelated": 21
        }
      },
      {
        "year": 2026,
        "total": 415,
        "categories": {
          "theft": 104,
          "burglary": 42,
          "assault": 33,
          "vehicleCrime": 83,
          "cyberCrime": 62,
          "harassment": 29,
          "fraud": 42,
          "drugRelated": 21
        }
      }
    ]
  },
  {
    "id": 103,
    "name": "Haibatpur",
    "type": "Village",
    "lat": 28.595,
    "lng": 77.425,
    "population": 50,
    "policeStations": 2,
    "cctvCoverage": 45,
    "streetLightIndex": 55,
    "metroProximity": 3,
    "theft": 84,
    "burglary": 28,
    "assault": 28,
    "vehicleCrime": 56,
    "cyberCrime": 28,
    "harassment": 28,
    "fraud": 14,
    "drugRelated": 14,
    "total": 280,
    "riskLevel": "High",
    "safetyScore": 72,
    "history": [
      {
        "year": 2019,
        "total": 260,
        "categories": {
          "theft": 65,
          "burglary": 26,
          "assault": 21,
          "vehicleCrime": 52,
          "cyberCrime": 39,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2020,
        "total": 221,
        "categories": {
          "theft": 55,
          "burglary": 22,
          "assault": 18,
          "vehicleCrime": 44,
          "cyberCrime": 33,
          "harassment": 15,
          "fraud": 22,
          "drugRelated": 11
        }
      },
      {
        "year": 2021,
        "total": 232,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 19,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2022,
        "total": 255,
        "categories": {
          "theft": 64,
          "burglary": 26,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 26,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 286,
        "categories": {
          "theft": 72,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2024,
        "total": 309,
        "categories": {
          "theft": 77,
          "burglary": 31,
          "assault": 25,
          "vehicleCrime": 62,
          "cyberCrime": 46,
          "harassment": 22,
          "fraud": 31,
          "drugRelated": 15
        }
      },
      {
        "year": 2025,
        "total": 315,
        "categories": {
          "theft": 79,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 63,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2026,
        "total": 318,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      }
    ]
  },
  {
    "id": 104,
    "name": "Bhangel",
    "type": "Village",
    "lat": 28.54,
    "lng": 77.405,
    "population": 60,
    "policeStations": 2,
    "cctvCoverage": 35,
    "streetLightIndex": 45,
    "metroProximity": 2.5,
    "theft": 102,
    "burglary": 34,
    "assault": 34,
    "vehicleCrime": 68,
    "cyberCrime": 34,
    "harassment": 34,
    "fraud": 17,
    "drugRelated": 17,
    "total": 340,
    "riskLevel": "Critical",
    "safetyScore": 66,
    "history": [
      {
        "year": 2019,
        "total": 320,
        "categories": {
          "theft": 80,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2020,
        "total": 272,
        "categories": {
          "theft": 68,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2021,
        "total": 286,
        "categories": {
          "theft": 72,
          "burglary": 29,
          "assault": 23,
          "vehicleCrime": 57,
          "cyberCrime": 43,
          "harassment": 20,
          "fraud": 29,
          "drugRelated": 14
        }
      },
      {
        "year": 2022,
        "total": 315,
        "categories": {
          "theft": 79,
          "burglary": 32,
          "assault": 25,
          "vehicleCrime": 63,
          "cyberCrime": 47,
          "harassment": 22,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2023,
        "total": 353,
        "categories": {
          "theft": 88,
          "burglary": 35,
          "assault": 28,
          "vehicleCrime": 71,
          "cyberCrime": 53,
          "harassment": 25,
          "fraud": 35,
          "drugRelated": 18
        }
      },
      {
        "year": 2024,
        "total": 381,
        "categories": {
          "theft": 95,
          "burglary": 38,
          "assault": 30,
          "vehicleCrime": 76,
          "cyberCrime": 57,
          "harassment": 27,
          "fraud": 38,
          "drugRelated": 19
        }
      },
      {
        "year": 2025,
        "total": 389,
        "categories": {
          "theft": 97,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 78,
          "cyberCrime": 58,
          "harassment": 27,
          "fraud": 39,
          "drugRelated": 19
        }
      },
      {
        "year": 2026,
        "total": 393,
        "categories": {
          "theft": 98,
          "burglary": 39,
          "assault": 31,
          "vehicleCrime": 79,
          "cyberCrime": 59,
          "harassment": 28,
          "fraud": 39,
          "drugRelated": 20
        }
      }
    ]
  },
  {
    "id": 105,
    "name": "Salarpur",
    "type": "Village",
    "lat": 28.55,
    "lng": 77.395,
    "population": 52,
    "policeStations": 2,
    "cctvCoverage": 40,
    "streetLightIndex": 50,
    "metroProximity": 2,
    "theft": 87,
    "burglary": 29,
    "assault": 29,
    "vehicleCrime": 58,
    "cyberCrime": 29,
    "harassment": 29,
    "fraud": 15,
    "drugRelated": 15,
    "total": 290,
    "riskLevel": "High",
    "safetyScore": 71,
    "history": [
      {
        "year": 2019,
        "total": 270,
        "categories": {
          "theft": 68,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 54,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2020,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2021,
        "total": 242,
        "categories": {
          "theft": 61,
          "burglary": 24,
          "assault": 19,
          "vehicleCrime": 48,
          "cyberCrime": 36,
          "harassment": 17,
          "fraud": 24,
          "drugRelated": 12
        }
      },
      {
        "year": 2022,
        "total": 266,
        "categories": {
          "theft": 67,
          "burglary": 27,
          "assault": 21,
          "vehicleCrime": 53,
          "cyberCrime": 40,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 13
        }
      },
      {
        "year": 2023,
        "total": 298,
        "categories": {
          "theft": 75,
          "burglary": 30,
          "assault": 24,
          "vehicleCrime": 60,
          "cyberCrime": 45,
          "harassment": 21,
          "fraud": 30,
          "drugRelated": 15
        }
      },
      {
        "year": 2024,
        "total": 322,
        "categories": {
          "theft": 81,
          "burglary": 32,
          "assault": 26,
          "vehicleCrime": 64,
          "cyberCrime": 48,
          "harassment": 23,
          "fraud": 32,
          "drugRelated": 16
        }
      },
      {
        "year": 2025,
        "total": 328,
        "categories": {
          "theft": 82,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 49,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 16
        }
      },
      {
        "year": 2026,
        "total": 331,
        "categories": {
          "theft": 83,
          "burglary": 33,
          "assault": 26,
          "vehicleCrime": 66,
          "cyberCrime": 50,
          "harassment": 23,
          "fraud": 33,
          "drugRelated": 17
        }
      }
    ]
  },
  {
    "id": 106,
    "name": "Gheora",
    "type": "Village",
    "lat": 28.445,
    "lng": 77.49,
    "population": 25,
    "policeStations": 1,
    "cctvCoverage": 70,
    "streetLightIndex": 80,
    "metroProximity": 2.5,
    "theft": 45,
    "burglary": 15,
    "assault": 15,
    "vehicleCrime": 30,
    "cyberCrime": 15,
    "harassment": 15,
    "fraud": 8,
    "drugRelated": 8,
    "total": 150,
    "riskLevel": "Moderate",
    "safetyScore": 85,
    "history": [
      {
        "year": 2019,
        "total": 130,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 117,
        "categories": {
          "theft": 29,
          "burglary": 12,
          "assault": 9,
          "vehicleCrime": 23,
          "cyberCrime": 18,
          "harassment": 8,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 129,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2023,
        "total": 144,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2024,
        "total": 156,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2025,
        "total": 159,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2026,
        "total": 161,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      }
    ]
  },
  {
    "id": 107,
    "name": "Yusufpur",
    "type": "Village",
    "lat": 28.61,
    "lng": 77.44,
    "population": 45,
    "policeStations": 1,
    "cctvCoverage": 50,
    "streetLightIndex": 60,
    "metroProximity": 3.5,
    "theft": 75,
    "burglary": 25,
    "assault": 25,
    "vehicleCrime": 50,
    "cyberCrime": 25,
    "harassment": 25,
    "fraud": 13,
    "drugRelated": 13,
    "total": 250,
    "riskLevel": "High",
    "safetyScore": 75,
    "history": [
      {
        "year": 2019,
        "total": 230,
        "categories": {
          "theft": 58,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 46,
          "cyberCrime": 35,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 12
        }
      },
      {
        "year": 2020,
        "total": 196,
        "categories": {
          "theft": 49,
          "burglary": 20,
          "assault": 16,
          "vehicleCrime": 39,
          "cyberCrime": 29,
          "harassment": 14,
          "fraud": 20,
          "drugRelated": 10
        }
      },
      {
        "year": 2021,
        "total": 206,
        "categories": {
          "theft": 52,
          "burglary": 21,
          "assault": 16,
          "vehicleCrime": 41,
          "cyberCrime": 31,
          "harassment": 14,
          "fraud": 21,
          "drugRelated": 10
        }
      },
      {
        "year": 2022,
        "total": 227,
        "categories": {
          "theft": 57,
          "burglary": 23,
          "assault": 18,
          "vehicleCrime": 45,
          "cyberCrime": 34,
          "harassment": 16,
          "fraud": 23,
          "drugRelated": 11
        }
      },
      {
        "year": 2023,
        "total": 254,
        "categories": {
          "theft": 64,
          "burglary": 25,
          "assault": 20,
          "vehicleCrime": 51,
          "cyberCrime": 38,
          "harassment": 18,
          "fraud": 25,
          "drugRelated": 13
        }
      },
      {
        "year": 2024,
        "total": 274,
        "categories": {
          "theft": 69,
          "burglary": 27,
          "assault": 22,
          "vehicleCrime": 55,
          "cyberCrime": 41,
          "harassment": 19,
          "fraud": 27,
          "drugRelated": 14
        }
      },
      {
        "year": 2025,
        "total": 279,
        "categories": {
          "theft": 70,
          "burglary": 28,
          "assault": 22,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      },
      {
        "year": 2026,
        "total": 282,
        "categories": {
          "theft": 71,
          "burglary": 28,
          "assault": 23,
          "vehicleCrime": 56,
          "cyberCrime": 42,
          "harassment": 20,
          "fraud": 28,
          "drugRelated": 14
        }
      }
    ]
  },
  {
    "id": 108,
    "name": "Kondli",
    "type": "Village",
    "lat": 28.495,
    "lng": 77.495,
    "population": 30,
    "policeStations": 1,
    "cctvCoverage": 60,
    "streetLightIndex": 70,
    "metroProximity": 3,
    "theft": 53,
    "burglary": 18,
    "assault": 18,
    "vehicleCrime": 35,
    "cyberCrime": 18,
    "harassment": 18,
    "fraud": 9,
    "drugRelated": 9,
    "total": 175,
    "riskLevel": "Moderate",
    "safetyScore": 82,
    "history": [
      {
        "year": 2019,
        "total": 155,
        "categories": {
          "theft": 39,
          "burglary": 16,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2020,
        "total": 132,
        "categories": {
          "theft": 33,
          "burglary": 13,
          "assault": 11,
          "vehicleCrime": 26,
          "cyberCrime": 20,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 7
        }
      },
      {
        "year": 2021,
        "total": 139,
        "categories": {
          "theft": 35,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2022,
        "total": 153,
        "categories": {
          "theft": 38,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 31,
          "cyberCrime": 23,
          "harassment": 11,
          "fraud": 15,
          "drugRelated": 8
        }
      },
      {
        "year": 2023,
        "total": 171,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2024,
        "total": 185,
        "categories": {
          "theft": 46,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 37,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 189,
        "categories": {
          "theft": 47,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 28,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 191,
        "categories": {
          "theft": 48,
          "burglary": 19,
          "assault": 15,
          "vehicleCrime": 38,
          "cyberCrime": 29,
          "harassment": 13,
          "fraud": 19,
          "drugRelated": 10
        }
      }
    ]
  },
  {
    "id": 109,
    "name": "Murshadpur",
    "type": "Village",
    "lat": 28.42,
    "lng": 77.525,
    "population": 18,
    "policeStations": 1,
    "cctvCoverage": 75,
    "streetLightIndex": 85,
    "metroProximity": 5,
    "theft": 33,
    "burglary": 11,
    "assault": 11,
    "vehicleCrime": 22,
    "cyberCrime": 11,
    "harassment": 11,
    "fraud": 6,
    "drugRelated": 6,
    "total": 110,
    "riskLevel": "Low",
    "safetyScore": 89,
    "history": [
      {
        "year": 2019,
        "total": 90,
        "categories": {
          "theft": 23,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 14,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 5
        }
      },
      {
        "year": 2020,
        "total": 77,
        "categories": {
          "theft": 19,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 15,
          "cyberCrime": 12,
          "harassment": 5,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2021,
        "total": 81,
        "categories": {
          "theft": 20,
          "burglary": 8,
          "assault": 6,
          "vehicleCrime": 16,
          "cyberCrime": 12,
          "harassment": 6,
          "fraud": 8,
          "drugRelated": 4
        }
      },
      {
        "year": 2022,
        "total": 89,
        "categories": {
          "theft": 22,
          "burglary": 9,
          "assault": 7,
          "vehicleCrime": 18,
          "cyberCrime": 13,
          "harassment": 6,
          "fraud": 9,
          "drugRelated": 4
        }
      },
      {
        "year": 2023,
        "total": 100,
        "categories": {
          "theft": 25,
          "burglary": 10,
          "assault": 8,
          "vehicleCrime": 20,
          "cyberCrime": 15,
          "harassment": 7,
          "fraud": 10,
          "drugRelated": 5
        }
      },
      {
        "year": 2024,
        "total": 108,
        "categories": {
          "theft": 27,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 16,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 5
        }
      },
      {
        "year": 2025,
        "total": 110,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      },
      {
        "year": 2026,
        "total": 111,
        "categories": {
          "theft": 28,
          "burglary": 11,
          "assault": 9,
          "vehicleCrime": 22,
          "cyberCrime": 17,
          "harassment": 8,
          "fraud": 11,
          "drugRelated": 6
        }
      }
    ]
  },
  {
    "id": 110,
    "name": "Nawada",
    "type": "Village",
    "lat": 28.48,
    "lng": 77.48,
    "population": 28,
    "policeStations": 1,
    "cctvCoverage": 65,
    "streetLightIndex": 75,
    "metroProximity": 4,
    "theft": 50,
    "burglary": 17,
    "assault": 17,
    "vehicleCrime": 33,
    "cyberCrime": 17,
    "harassment": 17,
    "fraud": 8,
    "drugRelated": 8,
    "total": 165,
    "riskLevel": "Moderate",
    "safetyScore": 83,
    "history": [
      {
        "year": 2019,
        "total": 145,
        "categories": {
          "theft": 36,
          "burglary": 15,
          "assault": 12,
          "vehicleCrime": 29,
          "cyberCrime": 22,
          "harassment": 10,
          "fraud": 15,
          "drugRelated": 7
        }
      },
      {
        "year": 2020,
        "total": 123,
        "categories": {
          "theft": 31,
          "burglary": 12,
          "assault": 10,
          "vehicleCrime": 25,
          "cyberCrime": 18,
          "harassment": 9,
          "fraud": 12,
          "drugRelated": 6
        }
      },
      {
        "year": 2021,
        "total": 129,
        "categories": {
          "theft": 32,
          "burglary": 13,
          "assault": 10,
          "vehicleCrime": 26,
          "cyberCrime": 19,
          "harassment": 9,
          "fraud": 13,
          "drugRelated": 6
        }
      },
      {
        "year": 2022,
        "total": 142,
        "categories": {
          "theft": 36,
          "burglary": 14,
          "assault": 11,
          "vehicleCrime": 28,
          "cyberCrime": 21,
          "harassment": 10,
          "fraud": 14,
          "drugRelated": 7
        }
      },
      {
        "year": 2023,
        "total": 159,
        "categories": {
          "theft": 40,
          "burglary": 16,
          "assault": 13,
          "vehicleCrime": 32,
          "cyberCrime": 24,
          "harassment": 11,
          "fraud": 16,
          "drugRelated": 8
        }
      },
      {
        "year": 2024,
        "total": 172,
        "categories": {
          "theft": 43,
          "burglary": 17,
          "assault": 14,
          "vehicleCrime": 34,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 17,
          "drugRelated": 9
        }
      },
      {
        "year": 2025,
        "total": 175,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 26,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      },
      {
        "year": 2026,
        "total": 177,
        "categories": {
          "theft": 44,
          "burglary": 18,
          "assault": 14,
          "vehicleCrime": 35,
          "cyberCrime": 27,
          "harassment": 12,
          "fraud": 18,
          "drugRelated": 9
        }
      }
    ]
  }
];

export const CRIME_CATEGORIES = ['theft', 'burglary', 'assault', 'vehicleCrime', 'cyberCrime', 'harassment', 'fraud', 'drugRelated'] as const;

export const RISK_COLORS: Record<string, string> = {
  Low: '#10b981',
  Moderate: '#f59e0b',
  High: '#f97316',
  Critical: '#ef4444'
};
