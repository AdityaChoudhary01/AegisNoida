import type { Context } from "hono";

export function renderPage(c: Context) {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CrimeSense AI — Greater Noida Crime Prediction Intelligence</title>
  <meta name="description" content="Hyper-modern AI-powered crime rate prediction platform for Greater Noida using K-Means clustering and KNN classification." />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%9B%A1%EF%B8%8F%3C/text%3E%3C/svg%3E" />

  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

  <!-- Leaflet map -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <!-- Chart.js with all plugins -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>

  <!-- Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios@1.7.2/dist/axios.min.js"></script>

  <!-- AOS for scroll animations -->
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet" />
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

  <link rel="stylesheet" href="/static/styles.css" />
</head>
<body class="bg-[#05060a] text-slate-100 antialiased min-h-screen overflow-x-hidden">

  <!-- Animated background orbs -->
  <div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="grid-bg"></div>
  </div>

  <!-- Loading screen -->
  <div id="loader" class="fixed inset-0 z-[100] bg-[#05060a] flex items-center justify-center">
    <div class="flex flex-col items-center gap-5">
      <div class="loader-ring"></div>
      <div class="text-lg font-semibold tracking-widest text-cyan-400">INITIALIZING&nbsp;AI&nbsp;ENGINE</div>
      <div class="text-xs text-slate-500 font-mono" id="loader-msg">Loading dataset…</div>
    </div>
  </div>

  <!-- NAV -->
  <nav class="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      <div class="flex items-center gap-3">
        <div class="logo-mark"><i class="fas fa-shield-halved"></i></div>
        <div>
          <div class="font-bold text-lg tracking-tight">CrimeSense<span class="text-cyan-400">.AI</span></div>
          <div class="text-[10px] uppercase tracking-[0.25em] text-slate-500 -mt-1">Greater Noida Intelligence</div>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-1 text-sm">
        <a href="#dashboard" class="nav-link"><i class="fas fa-chart-line"></i> Dashboard</a>
        <a href="#kmeans" class="nav-link"><i class="fas fa-circle-nodes"></i> K-Means</a>
        <a href="#knn" class="nav-link"><i class="fas fa-brain"></i> KNN</a>
        <a href="#map" class="nav-link"><i class="fas fa-map-location-dot"></i> Heatmap</a>
        <a href="#sectors" class="nav-link"><i class="fas fa-layer-group"></i> Sectors</a>
      </div>
      <div class="flex items-center gap-2">
        <span class="live-dot"></span>
        <span class="text-xs text-slate-400 font-mono">LIVE · AI READY</span>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <header class="relative pt-16 pb-12 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-6">
        <span class="live-dot"></span> AI · Machine Learning · Greater Noida
      </div>
      <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95]">
        Predict, Analyze &amp; <br />
        <span class="gradient-text">Prevent Crime</span>
        <br /> with AI Intelligence.
      </h1>
      <p class="mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
        A production-grade crime prediction engine for <span class="text-cyan-400 font-semibold">Greater Noida</span>,
        powered by live <span class="text-violet-300 font-semibold">K-Means clustering</span> &amp;
        <span class="text-fuchsia-300 font-semibold">K-Nearest Neighbors</span> classification —
        analyzing 25+ sectors, 7 crime categories and 6 years of historical patterns in real-time.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#knn" class="btn-primary"><i class="fas fa-bolt"></i> Run Prediction</a>
        <a href="#kmeans" class="btn-ghost"><i class="fas fa-circle-nodes"></i> Explore Clusters</a>
        <a href="#map" class="btn-ghost"><i class="fas fa-map-location-dot"></i> View Heatmap</a>
      </div>

      <!-- Top KPIs -->
      <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4" id="kpi-grid">
        <div class="kpi-card"><div class="kpi-label">Total Sectors</div><div class="kpi-value" id="kpi-sectors">—</div><div class="kpi-trend text-cyan-400"><i class="fas fa-location-dot"></i> Monitored</div></div>
        <div class="kpi-card"><div class="kpi-label">Total Crimes (YTD)</div><div class="kpi-value" id="kpi-crimes">—</div><div class="kpi-trend text-rose-400"><i class="fas fa-arrow-trend-up"></i> Tracked</div></div>
        <div class="kpi-card"><div class="kpi-label">Avg. CCTV Coverage</div><div class="kpi-value" id="kpi-cctv">—</div><div class="kpi-trend text-emerald-400"><i class="fas fa-video"></i> Active</div></div>
        <div class="kpi-card"><div class="kpi-label">Police Stations</div><div class="kpi-value" id="kpi-police">—</div><div class="kpi-trend text-indigo-400"><i class="fas fa-building-shield"></i> Deployed</div></div>
      </div>
    </div>
  </header>

  <!-- DASHBOARD: Charts -->
  <section id="dashboard" class="px-4 sm:px-6 py-10">
    <div class="max-w-7xl mx-auto">
      <div class="section-title">
        <div>
          <div class="section-eyebrow">Live Analytics</div>
          <h2 class="section-h">Crime Intelligence Dashboard</h2>
        </div>
        <div class="text-xs font-mono text-slate-500">/api/stats · real-time</div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div class="glass-card lg:col-span-2" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-chart-column text-cyan-400"></i> Crimes by Category</h3><span class="badge-pill">Last 3Y avg</span></div>
          <div class="chart-box h-80"><canvas id="chart-category"></canvas></div>
        </div>
        <div class="glass-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-head"><h3><i class="fas fa-chart-pie text-fuchsia-400"></i> Risk Distribution</h3><span class="badge-pill">Sectors</span></div>
          <div class="chart-box h-80"><canvas id="chart-risk"></canvas></div>
        </div>
        <div class="glass-card lg:col-span-2" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-chart-line text-emerald-400"></i> 6-Year Crime Trend</h3><span class="badge-pill">2019 → 2024</span></div>
          <div class="chart-box h-80"><canvas id="chart-yearly"></canvas></div>
        </div>
        <div class="glass-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-head"><h3><i class="fas fa-calendar-days text-amber-400"></i> Monthly Pattern</h3><span class="badge-pill">2024</span></div>
          <div class="chart-box h-80"><canvas id="chart-monthly"></canvas></div>
        </div>
        <div class="glass-card" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-clock text-rose-400"></i> Hourly Crime Pattern</h3><span class="badge-pill">24h radar</span></div>
          <div class="chart-box h-80"><canvas id="chart-hourly"></canvas></div>
        </div>
        <div class="glass-card lg:col-span-2" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-ranking-star text-violet-400"></i> Top 5 High-Crime vs Top 5 Safest Sectors</h3><span class="badge-pill">Leaderboard</span></div>
          <div class="chart-box h-80"><canvas id="chart-topsafe"></canvas></div>
        </div>
      </div>
    </div>
  </section>

  <!-- K-MEANS -->
  <section id="kmeans" class="px-4 sm:px-6 py-10">
    <div class="max-w-7xl mx-auto">
      <div class="section-title">
        <div>
          <div class="section-eyebrow">Unsupervised Learning</div>
          <h2 class="section-h">K-Means Risk Clustering</h2>
          <p class="text-sm text-slate-400 mt-1 max-w-2xl">Sectors are clustered into risk zones using K-Means++ on normalized crime features. Adjust K and feature set to see live recomputation.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div class="glass-card lg:col-span-1" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-sliders text-cyan-400"></i> Model Config</h3></div>
          <div class="p-5 space-y-5">
            <div>
              <label class="text-xs uppercase tracking-widest text-slate-400">Number of clusters (K)</label>
              <div class="flex items-center gap-3 mt-2">
                <input id="km-k" type="range" min="2" max="6" value="4" class="range-slider flex-1" />
                <div id="km-k-val" class="font-mono text-lg font-bold text-cyan-300 w-8 text-center">4</div>
              </div>
            </div>
            <div>
              <label class="text-xs uppercase tracking-widest text-slate-400">Feature set</label>
              <select id="km-features" class="select-dark mt-2 w-full">
                <option value="crime">Crime categories only</option>
                <option value="all">All (crime + infrastructure)</option>
                <option value="theft,burglary,assault">Violent/Property only</option>
                <option value="cyberCrime,fraud">Cyber &amp; Fraud</option>
              </select>
            </div>
            <button id="km-run" class="btn-primary w-full"><i class="fas fa-play"></i> Run K-Means</button>
            <div class="grid grid-cols-2 gap-3 pt-2">
              <div class="metric-box"><div class="metric-lbl">Iterations</div><div id="km-iter" class="metric-val">—</div></div>
              <div class="metric-box"><div class="metric-lbl">Inertia</div><div id="km-inertia" class="metric-val">—</div></div>
              <div class="metric-box"><div class="metric-lbl">Silhouette</div><div id="km-sil" class="metric-val">—</div></div>
              <div class="metric-box"><div class="metric-lbl">K</div><div id="km-kval" class="metric-val">—</div></div>
            </div>
          </div>
        </div>

        <div class="glass-card lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
          <div class="card-head"><h3><i class="fas fa-diagram-project text-violet-400"></i> Cluster Scatter (PCA 2D)</h3><span class="badge-pill" id="km-silence-pill">—</span></div>
          <div class="chart-box h-96"><canvas id="chart-kmeans-scatter"></canvas></div>
        </div>

        <div class="glass-card lg:col-span-2" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-chart-bar text-emerald-400"></i> Elbow Method (Optimal K)</h3><span class="badge-pill">K=1..8</span></div>
          <div class="chart-box h-80"><canvas id="chart-elbow"></canvas></div>
        </div>

        <div class="glass-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-head"><h3><i class="fas fa-layer-group text-amber-400"></i> Cluster Summary</h3></div>
          <div id="km-summary" class="p-5 space-y-3 max-h-[22rem] overflow-auto scroll-thin"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- KNN -->
  <section id="knn" class="px-4 sm:px-6 py-10">
    <div class="max-w-7xl mx-auto">
      <div class="section-title">
        <div>
          <div class="section-eyebrow">Supervised Learning</div>
          <h2 class="section-h">KNN Crime Risk Predictor</h2>
          <p class="text-sm text-slate-400 mt-1 max-w-2xl">Enter location parameters or pick an existing sector. The KNN classifier predicts a risk level using weighted voting from the K nearest sectors.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <!-- Form -->
        <div class="glass-card lg:col-span-1" data-aos="fade-up">
          <div class="card-head"><h3><i class="fas fa-wand-magic-sparkles text-fuchsia-400"></i> Prediction Input</h3></div>
          <div class="p-5 space-y-4">
            <div>
              <label class="text-xs uppercase tracking-widest text-slate-400">Quick-pick sector (optional)</label>
              <select id="knn-sector" class="select-dark mt-2 w-full">
                <option value="">— Enter custom values —</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div><label class="lbl">K (neighbors)</label>
                <div class="flex items-center gap-2 mt-1">
                  <input id="knn-k" type="range" min="1" max="15" value="5" class="range-slider flex-1"/>
                  <span id="knn-k-val" class="font-mono font-bold text-cyan-300 w-6 text-center">5</span>
                </div>
              </div>
              <div><label class="lbl">Distance</label>
                <select id="knn-metric" class="select-dark mt-1 w-full">
                  <option value="euclidean">Euclidean</option>
                  <option value="manhattan">Manhattan</option>
                  <option value="chebyshev">Chebyshev</option>
                </select>
              </div>
            </div>

            <div class="pt-2"><div class="text-xs uppercase tracking-widest text-slate-400 mb-2">Infrastructure</div>
              <div class="grid grid-cols-2 gap-3">
                <div><label class="lbl">Population (k)</label><input id="f-population" type="number" min="1" class="input-dark" value="50" /></div>
                <div><label class="lbl">Police Stations</label><input id="f-policeStations" type="number" min="0" max="10" class="input-dark" value="2" /></div>
                <div><label class="lbl">CCTV %</label><input id="f-cctvCoverage" type="number" min="0" max="100" class="input-dark" value="70" /></div>
                <div><label class="lbl">Street Lights</label><input id="f-streetLightIndex" type="number" min="0" max="100" class="input-dark" value="75" /></div>
              </div>
            </div>

            <div class="pt-2"><div class="text-xs uppercase tracking-widest text-slate-400 mb-2">Crime Counts (annual)</div>
              <div class="grid grid-cols-2 gap-3">
                <div><label class="lbl">Theft</label><input id="f-theft" type="number" min="0" class="input-dark" value="55" /></div>
                <div><label class="lbl">Burglary</label><input id="f-burglary" type="number" min="0" class="input-dark" value="18" /></div>
                <div><label class="lbl">Assault</label><input id="f-assault" type="number" min="0" class="input-dark" value="13" /></div>
                <div><label class="lbl">Vehicle</label><input id="f-vehicleCrime" type="number" min="0" class="input-dark" value="37" /></div>
                <div><label class="lbl">Cybercrime</label><input id="f-cyberCrime" type="number" min="0" class="input-dark" value="35" /></div>
                <div><label class="lbl">Harassment</label><input id="f-harassment" type="number" min="0" class="input-dark" value="18" /></div>
                <div class="col-span-2"><label class="lbl">Fraud</label><input id="f-fraud" type="number" min="0" class="input-dark" value="27" /></div>
              </div>
            </div>

            <button id="knn-run" class="btn-primary w-full mt-2"><i class="fas fa-brain"></i> Predict Risk Level</button>
          </div>
        </div>

        <!-- Result -->
        <div class="glass-card lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
          <div class="card-head"><h3><i class="fas fa-crosshairs text-rose-400"></i> Prediction Result</h3><span id="knn-acc" class="badge-pill">—</span></div>
          <div class="p-5">
            <div id="knn-result-empty" class="text-center py-14">
              <div class="big-icon"><i class="fas fa-brain"></i></div>
              <p class="text-slate-400 mt-3">Fill in the form and hit <b class="text-cyan-300">Predict Risk Level</b> to see a live KNN classification.</p>
            </div>
            <div id="knn-result" class="hidden space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="md:col-span-1 result-hero" id="knn-hero"></div>
                <div class="md:col-span-2">
                  <div class="text-xs uppercase tracking-widest text-slate-400 mb-2">Class Probabilities</div>
                  <div class="chart-box h-48"><canvas id="chart-knn-prob"></canvas></div>
                </div>
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-slate-400 mb-2">K Nearest Sectors</div>
                <div id="knn-neighbors" class="grid grid-cols-1 md:grid-cols-2 gap-2"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="glass-inner">
                  <div class="text-xs uppercase tracking-widest text-slate-400 mb-2">Accuracy vs K (5-fold CV)</div>
                  <div class="chart-box h-48"><canvas id="chart-knn-k"></canvas></div>
                </div>
                <div class="glass-inner">
                  <div class="text-xs uppercase tracking-widest text-slate-400 mb-2">Confusion Matrix</div>
                  <div id="knn-cm" class="overflow-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAP / HEATMAP -->
  <section id="map" class="px-4 sm:px-6 py-10">
    <div class="max-w-7xl mx-auto">
      <div class="section-title">
        <div>
          <div class="section-eyebrow">Geospatial</div>
          <h2 class="section-h">Greater Noida Risk Heatmap</h2>
          <p class="text-sm text-slate-400 mt-1">Interactive map showing cluster-based risk zones for every sector.</p>
        </div>
        <div class="flex gap-2">
          <button id="map-mode-cluster" class="chip chip-active"><i class="fas fa-circle-nodes"></i> Clusters</button>
          <button id="map-mode-risk" class="chip"><i class="fas fa-fire"></i> Risk Level</button>
        </div>
      </div>
      <div class="glass-card mt-6 overflow-hidden" data-aos="fade-up">
        <div id="leaflet-map" class="w-full h-[32rem]"></div>
        <div id="map-legend" class="p-4 flex flex-wrap gap-3 border-t border-white/5"></div>
      </div>
    </div>
  </section>

  <!-- SECTORS TABLE -->
  <section id="sectors" class="px-4 sm:px-6 py-10">
    <div class="max-w-7xl mx-auto">
      <div class="section-title">
        <div>
          <div class="section-eyebrow">Database</div>
          <h2 class="section-h">Sector Explorer</h2>
        </div>
        <div class="flex gap-2 items-center">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"></i>
            <input id="sector-search" placeholder="Search sector…" class="input-dark pl-9 w-60" />
          </div>
          <select id="sector-risk-filter" class="select-dark">
            <option value="">All Risks</option>
            <option>Low</option><option>Moderate</option><option>High</option><option>Critical</option>
          </select>
          <select id="sector-sort" class="select-dark">
            <option value="total-desc">Most crimes</option>
            <option value="total-asc">Least crimes</option>
            <option value="name">Name</option>
            <option value="cctv">Best CCTV</option>
          </select>
        </div>
      </div>
      <div class="glass-card mt-6 overflow-hidden" data-aos="fade-up">
        <div class="overflow-auto max-h-[28rem] scroll-thin">
          <table class="w-full text-sm">
            <thead class="sticky top-0 bg-[#0b0e17]/95 backdrop-blur">
              <tr class="text-xs uppercase tracking-widest text-slate-400 text-left">
                <th class="p-3">Sector</th><th class="p-3">Risk</th><th class="p-3 text-right">Total</th>
                <th class="p-3 text-right">Theft</th><th class="p-3 text-right">Burglary</th>
                <th class="p-3 text-right">Cyber</th><th class="p-3 text-right">Fraud</th>
                <th class="p-3 text-right">CCTV</th><th class="p-3 text-right">Pop.</th>
                <th class="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody id="sector-tbody"></tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="px-4 sm:px-6 py-10 border-t border-white/5 mt-10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 items-start">
      <div>
        <div class="flex items-center gap-3">
          <div class="logo-mark"><i class="fas fa-shield-halved"></i></div>
          <div>
            <div class="font-bold">CrimeSense<span class="text-cyan-400">.AI</span></div>
            <div class="text-xs text-slate-500">Greater Noida Crime Prediction Intelligence</div>
          </div>
        </div>
        <p class="mt-3 text-xs text-slate-500 max-w-md">Data is synthesized on realistic NCR patterns for demonstration. Algorithms: pure-JS K-Means++ clustering and weighted KNN classification.</p>
      </div>
      <div class="flex flex-col items-start md:items-end gap-2 text-xs text-slate-500 font-mono">
        <div>Built with <span class="text-cyan-300">Hono</span> · <span class="text-cyan-300">Cloudflare Pages</span> · <span class="text-cyan-300">Chart.js</span> · <span class="text-cyan-300">Leaflet</span></div>
        <div>Algorithms: K-Means++ · Weighted-KNN · 5-fold CV</div>
        <div class="text-slate-600">© 2026 CrimeSense AI</div>
      </div>
    </div>
  </footer>

  <!-- TOAST -->
  <div id="toast" class="toast"></div>

  <script src="/static/app.js"></script>
</body>
</html>`);
}
