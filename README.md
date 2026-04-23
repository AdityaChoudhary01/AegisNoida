# Aegis Noida — Advanced Geospatial Safety Intelligence System
### Final Year Major Project — 2026

**Aegis Noida** is a professional-grade safety intelligence and predictive analysis platform designed for the city of Greater Noida. It leverages advanced Hybrid Machine Learning (K-Means++ & Weighted KNN) and Geospatial Graph Theory (Safety-Weighted Dijkstra) to provide actionable insights for urban safety, police resource allocation, and citizen navigation.

---

## 🚀 Key Features

### 1. Hybrid ML Intelligence Matrix
- **K-Means++ Clustering**: Unsupervised learning engine that segment Greater Noida into four distinct risk zones (Secure, Moderate, Elevated, Critical) based on multi-dimensional infrastructure and crime density data.
- **Weighted KNN Classification**: Supervised classifier used to predict risk levels for custom locations or simulated scenarios with high confidence intervals.
- **Time-Series Forecasting**: Longitudinal analysis of 5-year crime history to project future trends and seasonal spikes.

### 2. Safety-Weighted Road Navigator
- **Real Road Integration**: Unlike standard Euclidean distance models, Aegis Noida fetches **live road networks from OpenStreetMap (Overpass API)**.
- **Risk-Weighted Dijkstra**: A custom pathfinding algorithm that calculates the "Safest Path" by penalizing road segments passing through high-crime clusters. It optimizes for *security over speed*.

### 3. Policy & Infrastructure Simulator
- **What-If Analysis**: Allows administrative users to simulate the impact of physical interventions (CCTV deployment, Street Lighting, Police Outposts).
- **ROI Modeling**: Predicts the increase in Safety Score and reduction in street crime based on resource allocation.

### 4. Hyper-Modern Command Center UI
- **Glassmorphism Design**: High-fidelity UI using backdrop blurs, glow effects, and modern typography (Plus Jakarta Sans).
- **Interactive Geospatial Visualization**: Dynamic Leaflet-based maps with custom pulsing markers, cluster heatmaps, and route overlays.
- **State-of-the-Art Animations**: Powered by Framer Motion for seamless view transitions and component entrance effects.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | Next.js 14+ (App Router) |
| **Styling** | TailwindCSS, Glassmorphism CSS |
| **Animations** | Framer Motion, GSAP |
| **Mapping Engine** | Leaflet, React-Leaflet, Overpass API (OSM) |
| **AI/ML Logic** | Custom TypeScript implementation of K-Means++ & KNN |
| **Data Visualization** | Chart.js 4.0, React-Chartjs-2 |
| **Icons & Assets** | Lucide React |

---

## 📊 Methodology & Logic

### Cluster Analysis (K-Means++)
The system analyzes 40+ monitored nodes using the following features:
- $X_1$: Crime Density (Total Crimes / Population)
- $X_2$: Infrastructure Index (CCTV % + Lighting %)
- $X_3$: Response Capability (Police Stations / Area)

### Safest Path Calculation
The cost function for an edge $e$ between nodes $u$ and $v$ is:
$$Cost(e) = Distance(e) \times \left( 1 + \frac{100 - SafetyScore(midpoint)}{8} \right)$$
This ensures that the algorithm chooses paths through safer sectors even if they are slightly longer.

---

## 📂 Project Structure

- `/app/components`: High-fidelity React components (Map, Sidebar, Dashboard).
- `/app/ml`: Core intelligence engines (Clustering, Routing, KNN).
- `/app/data`: Master geospatial dataset of Greater Noida.
- `/app/utils`: Helper functions and styling utilities.

---

## 🏗️ Installation & Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎓 Academic Contribution
This project solves the "Safety-Distance Paradox" in urban planning and demonstrates high engineering depth in:
1. **Real-time Geospatial Graph Processing**.
2. **Unsupervised Learning for Dynamic Risk Modeling**.
3. **High-Performance Edge Deployment**.

**Developer**: Aditya  
**Project Guide**: [Your Teacher's Name]  
**Institution**: [Your College Name]
