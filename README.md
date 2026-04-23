# CrimeSense.AI — Greater Noida Crime Prediction Intelligence

A **hyper-modern, production-grade AI web application** that predicts, analyzes and visualizes crime across Greater Noida using **K-Means clustering** and **K-Nearest Neighbors (KNN)** classification algorithms — all implemented from scratch in pure TypeScript / JavaScript, no Python, no external ML libraries.

![Stack](https://img.shields.io/badge/Hono-4.x-ff4500) ![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-f38020) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Chart.js](https://img.shields.io/badge/Chart.js-4-ff6384) ![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900)

## 🌐 Live URL
- **Sandbox (currently running)**: https://3000-ivx88ky8agau38o5kwrc9-8f57ffe2.sandbox.novita.ai
- **Production (Cloudflare Pages)**: Pending — deploy requires configuring a Cloudflare API key in the Deploy tab.

---

## ✅ Currently Completed Features

### 🤖 Machine Learning (pure TypeScript, no external libs)
- **K-Means++ Clustering**: Smart seeding, full convergence detection, inertia (WCSS) & silhouette score, and **Elbow analysis** for optimal K.
- **KNN Classifier**: Weighted voting (1 / distance), three distance metrics (Euclidean, Manhattan, Chebyshev), z-score normalization.
- **5-fold cross-validation**: Full accuracy, confusion matrix, and accuracy-vs-K curve for the live dataset.

### 📊 Hyper-Modern Dashboard (Dark, glassmorphic, animated)
- Animated glowing orbs + grid background
- Full-screen AI-engine loading screen with conic-gradient ring
- Gradient KPI cards with count-up animation
- **7 interactive charts**: category bar, risk doughnut (with data labels), 6-year multi-line trend, monthly gradient area, 24-hour radar, top-5 vs safest-5 comparison bar, K-Means scatter plot with PCA-like 2D projection, elbow/silhouette dual-axis, KNN probability bar, accuracy-vs-K line, confusion matrix heatmap.
- Fully responsive (mobile → desktop), AOS scroll animations, premium hover states, toast notifications.

### 🗺️ Geospatial Heatmap (Leaflet)
- Interactive dark-themed map of Greater Noida (28 sectors at real lat/lng)
- Two viewing modes: **K-Means clusters** and **Risk Level**
- Clickable markers with rich popups (population, CCTV, all 7 crime metrics)
- Click a marker → auto-fills the KNN predictor and scrolls to it

### 🔍 Sector Explorer
- Searchable, filterable, sortable sector table (25 sectors × 10 columns)
- "Predict" button on each row to instantly run KNN on that sector

### 🎯 Interactive Predictor
- Quick-pick dropdown for any of 25 Greater Noida sectors
- 11 live-tunable input fields (infrastructure + 7 crime categories)
- Live K-slider (1–15), distance metric selector
- Rich result panel with a color-coded risk hero card, confidence %, class probabilities, neighbor breakdown, and model diagnostics.

---

## 🚪 Functional API Entry Points

| Method | Path | Parameters | Description |
|---|---|---|---|
| GET | `/` | — | Main application UI |
| GET | `/api/sectors` | — | Returns the full list of 25 Greater Noida sectors with crime stats |
| GET | `/api/stats` | — | Aggregated stats, trends, monthly & hourly patterns, risk dist. |
| GET | `/api/kmeans` | `?k=4&features=crime\|all\|cyberCrime,fraud` | Runs K-Means++ clustering with live metrics, elbow curve, cluster summaries |
| POST | `/api/knn/predict` | JSON body: `{ k, metric, sectorId? }` or `{ k, metric, population, policeStations, cctvCoverage, streetLightIndex, theft, burglary, assault, vehicleCrime, cyberCrime, harassment, fraud }` | Runs weighted-KNN prediction + full 5-fold CV metrics + confusion matrix |

---

## 🗃️ Data Architecture

### Data Models
- **`SectorRecord`** — one record per Greater Noida sector, 14 numeric features + a `riskLevel` label (Low / Moderate / High / Critical).
- **`YearlyTrend`** — 2019–2024 yearly aggregates across 7 crime categories.
- **`MONTHLY_PATTERNS`, `HOURLY_PATTERNS`** — temporal distribution snapshots.

### Storage
- **In-memory TypeScript dataset** (`src/data/dataset.ts`) — 25 sectors of Greater Noida with realistic lat/lng, population, CCTV %, street-light index, police stations, and 7 crime categories (Theft, Burglary, Assault, Vehicle, Cybercrime, Harassment, Fraud).
- No external DB needed — runs fully at the Cloudflare edge.

### Data Flow
```
Browser (app.js) ──fetch──▶ Hono API (/api/*)
                             │
                             ├─▶ K-Means++ (src/ml/kmeans.ts)
                             ├─▶ KNN Classifier (src/ml/knn.ts)
                             └─▶ Static dataset (src/data/dataset.ts)
                             ◀─ JSON ─
Browser renders with Chart.js + Leaflet + Tailwind
```

---

## 🧠 Algorithms — Details

### K-Means++
- Deterministic seed for reproducibility
- Z-score standardization on all features
- Convergence: ≤300 iterations, tolerance 1e-4
- **Silhouette score** for cluster quality
- Semantic auto-labelling: clusters are ranked by average crime total and renamed to "Safe / Moderate / High Risk / Critical"
- Elbow method computes inertia + silhouette for K=1..8

### K-Nearest Neighbors
- Distance metrics: Euclidean · Manhattan · Chebyshev
- **Weighted voting**: each neighbor contributes `1 / (distance + ε)`
- Cross-validated: 5-fold CV on all 25 sectors → ~84% accuracy at k=3
- Returns full confusion matrix, probabilities, per-k accuracy curve

---

## 🕹️ User Guide

1. **Explore Dashboard**: scroll down to see 7 live charts (category, risk, yearly, monthly, hourly, top/safest).
2. **Run K-Means**: adjust K (2–6) and feature set → silhouette & inertia update in real-time. Elbow chart helps pick optimal K.
3. **Predict Risk**:
   - Pick any Greater Noida sector from the dropdown, **or** enter custom values.
   - Tune K and distance metric.
   - Hit **"Predict Risk Level"** → see prediction, confidence, K nearest sectors, CV accuracy, and confusion matrix.
4. **Heatmap**: switch between "Clusters" (K-Means coloring) and "Risk Level". Click any marker → auto-loads sector into predictor.
5. **Sector Explorer**: search, filter by risk, sort by crimes/CCTV. Click **"Predict"** on any row to run KNN on that sector.

---

## ❌ Features Not Yet Implemented
- User auth (currently a public demo)
- Historical time-series forecasting (e.g., ARIMA / Prophet)
- Real police-crime-record API integration (dataset is synthesized on realistic NCR patterns)
- PDF/CSV export of predictions and reports
- Multi-city support (currently Greater Noida only, as requested)

## 🔜 Recommended Next Steps
1. Integrate live data (NCRB / state police open data APIs) via a scheduled Cloudflare Worker.
2. Move sectors/results into **Cloudflare D1** or **KV** for history & trends.
3. Add an **LSTM / time-series** predictor alongside K-Means/KNN for forward-looking forecasts.
4. Add **user accounts** and saved predictions using Cloudflare Access.
5. Deploy to production Cloudflare Pages (requires API key in Deploy tab).

---

## 🏗️ Tech Stack
- **Backend**: Hono 4 (Cloudflare Workers runtime, TypeScript, JSX)
- **Frontend**: Vanilla JS + TailwindCSS + Chart.js 4 + Leaflet 1.9 + AOS + Axios + Font Awesome + Google Fonts (Space Grotesk, JetBrains Mono)
- **ML**: pure TypeScript — no Python, no TensorFlow, no external ML dependencies
- **Build**: Vite 6 + `@hono/vite-build/cloudflare-pages`
- **Process**: PM2 (development/sandbox)
- **Deploy target**: Cloudflare Pages

## 🚀 Development
```bash
npm install
npm run build                        # bundle to dist/
pm2 start ecosystem.config.cjs       # starts wrangler pages dev on :3000
curl http://localhost:3000/api/stats # sanity check
```

## Deployment Status
- **Platform**: Cloudflare Pages (planned)
- **Status**: ✅ Active (sandbox) · ⏳ Pending (Cloudflare Pages — requires API key)
- **Last Updated**: 2026-04-23
