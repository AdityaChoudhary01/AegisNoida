/* =====================================================================
   CrimeSense.AI — Frontend Controller
   ===================================================================== */

// Chart.js global defaults — premium dark theme
Chart.defaults.font.family = "'Space Grotesk', sans-serif";
Chart.defaults.color = "#94a3b8";
Chart.defaults.borderColor = "rgba(255,255,255,0.06)";
Chart.defaults.plugins.legend.labels.color = "#cbd5e1";
Chart.defaults.plugins.tooltip.backgroundColor = "rgba(5,6,10,0.95)";
Chart.defaults.plugins.tooltip.titleColor = "#67e8f9";
Chart.defaults.plugins.tooltip.bodyColor = "#e2e8f0";
Chart.defaults.plugins.tooltip.borderColor = "rgba(34,211,238,0.3)";
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.displayColors = true;
Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels.display = false; // off by default

const palette = {
  cyan: "#06b6d4", violet: "#a855f7", pink: "#ec4899", amber: "#f59e0b",
  emerald: "#10b981", rose: "#f43f5e", indigo: "#6366f1", sky: "#0ea5e9",
  orange: "#f97316", red: "#ef4444", green: "#22c55e"
};

const state = {
  stats: null,
  sectors: [],
  kmeans: null,
  charts: {},
  map: null,
  mapLayer: null,
  mapMode: "cluster"
};

// Toast helper
function toast(msg, ms = 2200) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._to);
  t._to = setTimeout(() => t.classList.remove("show"), ms);
}

// Update loader
function loaderMsg(m) {
  const el = document.getElementById("loader-msg");
  if (el) el.textContent = m;
}

// ---------------------------------------------------------------------
// BOOT
// ---------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", async () => {
  AOS.init({ duration: 700, once: true, offset: 60 });

  try {
    loaderMsg("Loading dataset…");
    const [sectorsRes, statsRes] = await Promise.all([
      axios.get("/api/sectors"),
      axios.get("/api/stats")
    ]);
    state.sectors = sectorsRes.data.data;
    state.stats = statsRes.data;

    loaderMsg("Rendering dashboard…");
    renderKPIs();
    renderDashboardCharts();

    loaderMsg("Running K-Means…");
    await runKMeans();

    loaderMsg("Preparing UI…");
    setupSectorDropdown();
    renderSectorTable();
    initMap();
    setupEventListeners();

    // Hide loader
    setTimeout(() => {
      document.getElementById("loader").style.opacity = 0;
      setTimeout(() => document.getElementById("loader").style.display = "none", 400);
    }, 300);

    toast("AI Engine ready. Welcome to CrimeSense.");
  } catch (err) {
    console.error(err);
    loaderMsg("Error: " + err.message);
  }
});

// ---------------------------------------------------------------------
// KPIs
// ---------------------------------------------------------------------
function renderKPIs() {
  const s = state.stats;
  animateNumber("kpi-sectors", s.totalSectors);
  animateNumber("kpi-crimes", s.totalCrimes);
  document.getElementById("kpi-cctv").textContent = s.avgCctvCoverage + "%";
  animateNumber("kpi-police", s.totalPoliceStations);
}

function animateNumber(id, target, dur = 1200) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---------------------------------------------------------------------
// DASHBOARD CHARTS
// ---------------------------------------------------------------------
function gradient(ctx, area, c1, c2) {
  if (!area) return c1;
  const g = ctx.createLinearGradient(0, area.top, 0, area.bottom);
  g.addColorStop(0, c1); g.addColorStop(1, c2);
  return g;
}

function renderDashboardCharts() {
  const s = state.stats;

  // Category bar
  const catLabels = Object.keys(s.categoryTotals).map(c => c.charAt(0).toUpperCase() + c.slice(1));
  const catVals = Object.values(s.categoryTotals);
  state.charts.category = new Chart(document.getElementById("chart-category"), {
    type: "bar",
    data: {
      labels: catLabels,
      datasets: [{
        label: "Total Crimes",
        data: catVals,
        borderRadius: 8,
        backgroundColor: (ctx) => {
          const { ctx: c, chartArea } = ctx.chart;
          const colors = [palette.cyan, palette.violet, palette.pink, palette.amber, palette.emerald, palette.orange, palette.rose];
          const solid = colors[ctx.dataIndex % colors.length];
          return gradient(c, chartArea, solid, solid + "55");
        },
        borderColor: "rgba(255,255,255,0.05)",
        borderWidth: 1,
        hoverBackgroundColor: "#67e8f9"
      }]
    },
    options: commonBarOpts()
  });

  // Risk doughnut
  const riskLbls = Object.keys(s.riskDistribution);
  const riskData = Object.values(s.riskDistribution);
  const riskColors = riskLbls.map(l => s.riskColors[l]);
  state.charts.risk = new Chart(document.getElementById("chart-risk"), {
    type: "doughnut",
    data: { labels: riskLbls, datasets: [{
      data: riskData, backgroundColor: riskColors, borderColor: "#0b0e17", borderWidth: 3, hoverOffset: 14
    }]},
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: "65%",
      plugins: {
        legend: { position: "bottom", labels: { boxWidth: 12, padding: 14 } },
        datalabels: {
          display: true, color: "#fff", font: { weight: "700" },
          formatter: (v, ctx) => {
            const t = ctx.chart.data.datasets[0].data.reduce((a,b)=>a+b,0);
            return v > 0 ? Math.round(v/t*100) + "%" : "";
          }
        }
      }
    }
  });

  // Yearly line
  const yrLbls = s.yearlyTrends.map(y => y.year);
  const cats = ["theft", "burglary", "assault", "vehicleCrime", "cyberCrime", "harassment", "fraud"];
  const lineColors = [palette.cyan, palette.violet, palette.amber, palette.emerald, palette.pink, palette.orange, palette.indigo];
  state.charts.yearly = new Chart(document.getElementById("chart-yearly"), {
    type: "line",
    data: {
      labels: yrLbls,
      datasets: cats.map((cat, i) => ({
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
        data: s.yearlyTrends.map(y => y[cat]),
        borderColor: lineColors[i],
        backgroundColor: lineColors[i] + "22",
        borderWidth: 2.5, tension: 0.4, pointRadius: 4, pointHoverRadius: 7, pointBackgroundColor: lineColors[i], fill: false
      }))
    },
    options: commonLineOpts()
  });

  // Monthly area
  state.charts.monthly = new Chart(document.getElementById("chart-monthly"), {
    type: "line",
    data: {
      labels: s.monthlyPatterns.map(m => m.month),
      datasets: [{
        label: "Monthly Crimes",
        data: s.monthlyPatterns.map(m => m.total),
        borderColor: palette.amber,
        backgroundColor: (ctx) => {
          const { ctx: c, chartArea } = ctx.chart;
          return gradient(c, chartArea, "rgba(245,158,11,0.45)", "rgba(245,158,11,0.02)");
        },
        tension: 0.5, fill: true, borderWidth: 2.5, pointRadius: 5, pointHoverRadius: 8, pointBackgroundColor: palette.amber
      }]
    },
    options: commonLineOpts()
  });

  // Hourly radar
  state.charts.hourly = new Chart(document.getElementById("chart-hourly"), {
    type: "radar",
    data: {
      labels: s.hourlyPatterns.map(h => h.hour + ":00"),
      datasets: [{
        label: "Crime Incidents",
        data: s.hourlyPatterns.map(h => h.count),
        backgroundColor: "rgba(236,72,153,0.18)",
        borderColor: palette.pink, borderWidth: 2,
        pointBackgroundColor: palette.pink, pointRadius: 2, pointHoverRadius: 5
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        r: { angleLines: { color: "rgba(255,255,255,0.08)" }, grid: { color: "rgba(255,255,255,0.08)" },
             pointLabels: { color: "#94a3b8", font: { size: 10 } }, ticks: { display: false, backdropColor: "transparent" } }
      },
      plugins: { legend: { display: false } }
    }
  });

  // Top / safest combo
  const top = s.topSectors, safe = s.safestSectors;
  state.charts.topsafe = new Chart(document.getElementById("chart-topsafe"), {
    type: "bar",
    data: {
      labels: top.map(t => t.sector),
      datasets: [
        { label: "High Crime (Top 5)", data: top.map(t => t.total), backgroundColor: "rgba(239,68,68,0.6)", borderColor: palette.red, borderWidth: 1, borderRadius: 6, stack: "t" },
        { label: "Safest (Top 5)", data: safe.map(t => t.total), backgroundColor: "rgba(16,185,129,0.6)", borderColor: palette.emerald, borderWidth: 1, borderRadius: 6, stack: "s" }
      ]
    },
    options: {
      ...commonBarOpts(),
      scales: {
        x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
        y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" } }
      },
      plugins: {
        legend: { display: true, position: "top" },
        tooltip: {
          callbacks: {
            afterLabel: (ctx) => {
              const arr = ctx.datasetIndex === 0 ? top : safe;
              const item = arr[ctx.dataIndex];
              return item ? `Sector: ${item.sector}\nRisk: ${item.risk}` : "";
            }
          }
        }
      }
    }
  });
}

function commonBarOpts() {
  return {
    responsive: true, maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
      y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" }, beginAtZero: true }
    },
    plugins: { legend: { display: false } }
  };
}
function commonLineOpts() {
  return {
    responsive: true, maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
    scales: {
      x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#94a3b8" } },
      y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" }, beginAtZero: true }
    },
    plugins: { legend: { position: "top", labels: { boxWidth: 10, padding: 10, font: { size: 11 } } } }
  };
}

// ---------------------------------------------------------------------
// K-MEANS
// ---------------------------------------------------------------------
async function runKMeans() {
  const k = parseInt(document.getElementById("km-k").value);
  const features = document.getElementById("km-features").value;
  const url = `/api/kmeans?k=${k}&features=${encodeURIComponent(features)}`;

  const btn = document.getElementById("km-run");
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Computing…'; }

  try {
    const res = await axios.get(url);
    state.kmeans = res.data;
    renderKMeansResult(res.data);
    if (state.map) renderMap();
    toast(`K-Means complete · k=${k} · silhouette=${res.data.silhouette}`);
  } catch (e) {
    toast("K-Means failed: " + e.message);
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-play"></i> Run K-Means'; }
  }
}

function renderKMeansResult(data) {
  document.getElementById("km-iter").textContent = data.iterations;
  document.getElementById("km-inertia").textContent = data.inertia;
  document.getElementById("km-sil").textContent = data.silhouette;
  document.getElementById("km-kval").textContent = data.k;
  document.getElementById("km-silence-pill").textContent = `silhouette ${data.silhouette}`;

  // Scatter chart with PCA-like 2D projection: use total crimes vs cctv coverage
  const points = data.sectorClusters.map(sc => {
    const full = state.sectors.find(s => s.id === sc.id);
    return { x: full.cctvCoverage, y: sc.total, label: sc.sector, cluster: sc.cluster, color: sc.clusterColor, clusterLabel: sc.clusterLabel };
  });

  const datasetsByCluster = {};
  for (const p of points) {
    if (!datasetsByCluster[p.cluster]) {
      datasetsByCluster[p.cluster] = {
        label: p.clusterLabel,
        data: [],
        backgroundColor: p.color + "cc",
        borderColor: p.color,
        borderWidth: 2,
        pointRadius: 10, pointHoverRadius: 14
      };
    }
    datasetsByCluster[p.cluster].data.push({ x: p.x, y: p.y, name: p.label });
  }

  if (state.charts.kmeansScatter) state.charts.kmeansScatter.destroy();
  state.charts.kmeansScatter = new Chart(document.getElementById("chart-kmeans-scatter"), {
    type: "scatter",
    data: { datasets: Object.values(datasetsByCluster) },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: "CCTV Coverage (%)", color: "#94a3b8" },
             grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#94a3b8" } },
        y: { title: { display: true, text: "Annual Crime Total", color: "#94a3b8" },
             grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" } }
      },
      plugins: {
        legend: { position: "top", labels: { boxWidth: 12, padding: 10 } },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const p = ctx.raw;
              return `${p.name} · CCTV ${p.x}% · ${p.y} crimes`;
            },
            title: (items) => items[0].dataset.label
          }
        }
      }
    }
  });

  // Elbow chart
  if (state.charts.elbow) state.charts.elbow.destroy();
  state.charts.elbow = new Chart(document.getElementById("chart-elbow"), {
    type: "line",
    data: {
      labels: data.elbow.map(e => "k=" + e.k),
      datasets: [
        {
          label: "Inertia (WCSS)", data: data.elbow.map(e => e.inertia),
          yAxisID: "y", borderColor: palette.cyan, backgroundColor: "rgba(6,182,212,0.15)",
          tension: 0.35, fill: true, borderWidth: 2.5, pointRadius: 5, pointHoverRadius: 8, pointBackgroundColor: palette.cyan
        },
        {
          label: "Silhouette",
          data: data.elbow.map(e => e.silhouette),
          yAxisID: "y1", borderColor: palette.pink, backgroundColor: "rgba(236,72,153,0.12)",
          tension: 0.35, fill: false, borderWidth: 2.5, borderDash: [6,4], pointRadius: 5, pointBackgroundColor: palette.pink
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#94a3b8" } },
        y: { position: "left", grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" }, title: { display: true, text: "Inertia", color: "#94a3b8" } },
        y1: { position: "right", grid: { drawOnChartArea: false }, ticks: { color: "#94a3b8" }, title: { display: true, text: "Silhouette", color: "#94a3b8" } }
      },
      plugins: { legend: { position: "top" } }
    }
  });

  // Cluster summary list
  const sum = document.getElementById("km-summary");
  sum.innerHTML = data.clusterSummaries
    .sort((a, b) => a.rank - b.rank)
    .map(cs => `
      <div class="cluster-summary-item" style="--cluster-color:${cs.color}">
        <div class="flex justify-between items-center mb-1">
          <div class="font-semibold" style="color:${cs.color}">● ${cs.label}</div>
          <div class="text-xs font-mono text-slate-400">${cs.size} sectors</div>
        </div>
        <div class="text-xs text-slate-400">Avg. crimes/yr · <span class="font-mono text-slate-200">${cs.avgCrimes}</span></div>
        <div class="text-xs text-slate-500 mt-1">${cs.sectors.join(" · ")}</div>
      </div>`).join("");
}

// ---------------------------------------------------------------------
// KNN PREDICTION
// ---------------------------------------------------------------------
function setupSectorDropdown() {
  const sel = document.getElementById("knn-sector");
  sel.innerHTML = '<option value="">— Enter custom values —</option>' +
    state.sectors.map(s => `<option value="${s.id}">${s.sector} (${s.riskLevel})</option>`).join("");
}

function fillFormFromSector(sectorId) {
  const s = state.sectors.find(x => x.id === Number(sectorId));
  if (!s) return;
  for (const key of ["population","policeStations","cctvCoverage","streetLightIndex","theft","burglary","assault","vehicleCrime","cyberCrime","harassment","fraud"]) {
    const el = document.getElementById("f-" + key);
    if (el) el.value = s[key];
  }
}

async function runKNN() {
  const btn = document.getElementById("knn-run");
  btn.disabled = true; btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Predicting…';

  const sectorId = document.getElementById("knn-sector").value;
  const payload = {
    k: parseInt(document.getElementById("knn-k").value),
    metric: document.getElementById("knn-metric").value
  };
  if (sectorId) {
    payload.sectorId = sectorId;
  } else {
    for (const key of ["population","policeStations","cctvCoverage","streetLightIndex","theft","burglary","assault","vehicleCrime","cyberCrime","harassment","fraud"]) {
      payload[key] = Number(document.getElementById("f-" + key).value || 0);
    }
  }

  try {
    const res = await axios.post("/api/knn/predict", payload);
    renderKNNResult(res.data);
    toast(`Predicted: ${res.data.prediction.label} (${res.data.prediction.confidence}%)`);
    document.getElementById("knn").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (e) {
    toast("KNN prediction failed: " + e.message);
  } finally {
    btn.disabled = false; btn.innerHTML = '<i class="fas fa-brain"></i> Predict Risk Level';
  }
}

function renderKNNResult(res) {
  document.getElementById("knn-result-empty").classList.add("hidden");
  document.getElementById("knn-result").classList.remove("hidden");
  document.getElementById("knn-acc").textContent = `accuracy ${res.model.accuracy}%`;

  const riskColors = state.stats.riskColors;
  const color = riskColors[res.prediction.label] || palette.cyan;

  // Hero card
  const hero = document.getElementById("knn-hero");
  hero.style.setProperty("--risk-color", color);
  const riskIcon = { Low: "shield-heart", Moderate: "shield-halved", High: "triangle-exclamation", Critical: "radiation" }[res.prediction.label] || "question";
  hero.innerHTML = `
    <div class="hero-lbl">Predicted Risk</div>
    <div class="hero-val"><i class="fas fa-${riskIcon}"></i> ${res.prediction.label}</div>
    <div class="hero-sub">${res.meta.sector ? "Sector: <b>" + res.meta.sector + "</b>" : "Custom location"}</div>
    <div class="hero-conf">Confidence <b>${res.prediction.confidence}%</b></div>
  `;

  // Probabilities horizontal bar
  const probLbls = Object.keys(res.prediction.probabilities);
  const probVals = probLbls.map(l => res.prediction.probabilities[l]);
  const probColors = probLbls.map(l => riskColors[l] || palette.cyan);
  if (state.charts.knnProb) state.charts.knnProb.destroy();
  state.charts.knnProb = new Chart(document.getElementById("chart-knn-prob"), {
    type: "bar",
    data: { labels: probLbls, datasets: [{ data: probVals, backgroundColor: probColors, borderRadius: 6 }] },
    options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false,
      scales: {
        x: { beginAtZero: true, max: 100, grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8", callback: v => v + "%" } },
        y: { grid: { display: false }, ticks: { color: "#cbd5e1", font: { weight: "600" } } }
      },
      plugins: {
        legend: { display: false },
        datalabels: { display: true, color: "#fff", font: { weight: "700", size: 11 }, anchor: "end", align: "end", formatter: v => v + "%" },
        tooltip: { callbacks: { label: ctx => ctx.parsed.x + "%" } }
      }
    }
  });

  // Neighbors list
  const n = document.getElementById("knn-neighbors");
  n.innerHTML = res.prediction.neighbors.map((nb, i) => `
    <div class="neighbor-item">
      <div class="flex items-center gap-2">
        <div class="neighbor-rank">${i + 1}</div>
        <div>
          <div class="font-semibold text-sm">${nb.sector}</div>
          <div class="text-xs text-slate-500 font-mono">dist ${nb.distance} · weight ${nb.weight}</div>
        </div>
      </div>
      <div class="text-right">
        <span class="risk-badge risk-${nb.actualRisk}">${nb.actualRisk}</span>
        <div class="text-xs text-slate-500 mt-1">${nb.total} crimes</div>
      </div>
    </div>`).join("");

  // Accuracy vs K
  if (state.charts.knnK) state.charts.knnK.destroy();
  state.charts.knnK = new Chart(document.getElementById("chart-knn-k"), {
    type: "line",
    data: {
      labels: res.model.perKAccuracy.map((_, i) => "k=" + (i + 1)),
      datasets: [{
        label: "CV Accuracy (%)", data: res.model.perKAccuracy,
        borderColor: palette.cyan, backgroundColor: "rgba(6,182,212,0.15)",
        tension: 0.35, fill: true, borderWidth: 2.5, pointRadius: 4, pointBackgroundColor: palette.cyan
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#94a3b8", font: { size: 9 } } },
        y: { beginAtZero: true, max: 100, grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8", callback: v => v + "%" } }
      },
      plugins: { legend: { display: false } }
    }
  });

  // Confusion matrix
  const cm = res.model.confusionMatrix;
  const labels = Object.keys(cm);
  let html = "<table class='cm-table'><thead><tr><th>Actual↓/Pred→</th>";
  for (const l of labels) html += `<th>${l}</th>`;
  html += "</tr></thead><tbody>";
  for (const actual of labels) {
    html += `<tr><th>${actual}</th>`;
    for (const pred of labels) {
      const v = cm[actual][pred] || 0;
      const diag = actual === pred;
      html += `<td class="${diag ? 'diag' : 'off'}">${v}</td>`;
    }
    html += "</tr>";
  }
  html += "</tbody></table>";
  document.getElementById("knn-cm").innerHTML = html;
}

// ---------------------------------------------------------------------
// MAP
// ---------------------------------------------------------------------
function initMap() {
  state.map = L.map("leaflet-map", { zoomControl: true, attributionControl: false })
    .setView([28.464, 77.517], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
  }).addTo(state.map);

  L.control.attribution({ position: "bottomright" })
    .addAttribution('© OpenStreetMap')
    .addTo(state.map);

  renderMap();
}

function renderMap() {
  if (!state.map) return;
  if (state.mapLayer) state.map.removeLayer(state.mapLayer);
  state.mapLayer = L.layerGroup();

  const useCluster = state.mapMode === "cluster" && state.kmeans;
  const riskColors = state.stats.riskColors;

  for (const s of state.sectors) {
    let color, label;
    if (useCluster) {
      const sc = state.kmeans.sectorClusters.find(c => c.id === s.id);
      color = sc ? sc.clusterColor : "#06b6d4";
      label = sc ? sc.clusterLabel : "—";
    } else {
      color = riskColors[s.riskLevel] || "#06b6d4";
      label = s.riskLevel;
    }

    const radius = Math.max(10, Math.min(32, Math.sqrt(s.total) * 1.3));

    // Outer halo
    L.circle([s.lat, s.lng], {
      radius: radius * 35, color: color, fillColor: color, fillOpacity: 0.08, weight: 0
    }).addTo(state.mapLayer);

    // Pulsing circle marker
    const marker = L.circleMarker([s.lat, s.lng], {
      radius: radius * 0.6, color: "#ffffff", weight: 2, fillColor: color, fillOpacity: 0.85
    });

    marker.bindPopup(`
      <div style="min-width:220px">
        <div style="font-size:11px; letter-spacing:.2em; text-transform:uppercase; color:#94a3b8">Sector</div>
        <div style="font-size:1.1rem; font-weight:700; color:#67e8f9">${s.sector}</div>
        <div style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap">
          <span style="padding:2px 8px; border-radius:999px; background:${color}33; color:${color}; font-size:10px; font-weight:600; border:1px solid ${color}66">${label}</span>
          <span style="padding:2px 8px; border-radius:999px; background:rgba(255,255,255,0.05); color:#cbd5e1; font-size:10px">Risk: ${s.riskLevel}</span>
        </div>
        <hr style="border-color:rgba(255,255,255,0.08); margin:10px 0"/>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:12px; font-family:'JetBrains Mono'">
          <div>👥 Pop: <b>${s.population}k</b></div>
          <div>🚨 Total: <b style="color:${color}">${s.total}</b></div>
          <div>🎥 CCTV: <b>${s.cctvCoverage}%</b></div>
          <div>💡 Lights: <b>${s.streetLightIndex}%</b></div>
          <div>🕵️ Theft: <b>${s.theft}</b></div>
          <div>🏠 Burglary: <b>${s.burglary}</b></div>
          <div>💻 Cyber: <b>${s.cyberCrime}</b></div>
          <div>💳 Fraud: <b>${s.fraud}</b></div>
        </div>
      </div>
    `);

    marker.on("click", () => {
      // Pre-fill KNN form
      document.getElementById("knn-sector").value = s.id;
      fillFormFromSector(s.id);
      toast(`Selected ${s.sector} in predictor`);
    });

    marker.addTo(state.mapLayer);
  }
  state.mapLayer.addTo(state.map);

  // Legend
  const legend = document.getElementById("map-legend");
  if (useCluster) {
    legend.innerHTML = state.kmeans.clusterSummaries
      .sort((a, b) => a.rank - b.rank)
      .map(c => `<span class="chip" style="border-color:${c.color}88; color:${c.color}"><span style="width:10px;height:10px;background:${c.color};border-radius:50%;display:inline-block;box-shadow:0 0 8px ${c.color}"></span> ${c.label} <span class="text-slate-500 text-xs ml-1">${c.size} sectors</span></span>`)
      .join("");
  } else {
    legend.innerHTML = ["Low", "Moderate", "High", "Critical"].map(r =>
      `<span class="chip" style="border-color:${riskColors[r]}88; color:${riskColors[r]}"><span style="width:10px;height:10px;background:${riskColors[r]};border-radius:50%;display:inline-block"></span> ${r}</span>`
    ).join("");
  }
}

// ---------------------------------------------------------------------
// SECTOR TABLE
// ---------------------------------------------------------------------
function renderSectorTable() {
  const q = (document.getElementById("sector-search").value || "").toLowerCase();
  const riskFilter = document.getElementById("sector-risk-filter").value;
  const sort = document.getElementById("sector-sort").value;

  let list = state.sectors.filter(s =>
    (!q || s.sector.toLowerCase().includes(q)) &&
    (!riskFilter || s.riskLevel === riskFilter)
  );
  if (sort === "total-desc") list.sort((a, b) => b.total - a.total);
  else if (sort === "total-asc") list.sort((a, b) => a.total - b.total);
  else if (sort === "name") list.sort((a, b) => a.sector.localeCompare(b.sector));
  else if (sort === "cctv") list.sort((a, b) => b.cctvCoverage - a.cctvCoverage);

  const tb = document.getElementById("sector-tbody");
  tb.innerHTML = list.map(s => `
    <tr>
      <td><b class="text-slate-100">${s.sector}</b><div class="text-xs text-slate-500 font-mono">${s.lat.toFixed(3)}, ${s.lng.toFixed(3)}</div></td>
      <td><span class="risk-badge risk-${s.riskLevel}">${s.riskLevel}</span></td>
      <td class="num text-slate-100 font-bold">${s.total}</td>
      <td class="num">${s.theft}</td><td class="num">${s.burglary}</td>
      <td class="num">${s.cyberCrime}</td><td class="num">${s.fraud}</td>
      <td class="num">${s.cctvCoverage}%</td><td class="num">${s.population}k</td>
      <td class="num">
        <button class="chip" data-action="predict" data-id="${s.id}"><i class="fas fa-brain"></i> Predict</button>
      </td>
    </tr>
  `).join("");

  tb.querySelectorAll("[data-action='predict']").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      document.getElementById("knn-sector").value = id;
      fillFormFromSector(id);
      document.getElementById("knn").scrollIntoView({ behavior: "smooth" });
      toast("Loaded sector for prediction");
    });
  });
}

// ---------------------------------------------------------------------
// EVENTS
// ---------------------------------------------------------------------
function setupEventListeners() {
  // K-Means
  document.getElementById("km-k").addEventListener("input", (e) => {
    document.getElementById("km-k-val").textContent = e.target.value;
  });
  document.getElementById("km-run").addEventListener("click", runKMeans);
  document.getElementById("km-features").addEventListener("change", runKMeans);

  // KNN
  document.getElementById("knn-k").addEventListener("input", (e) => {
    document.getElementById("knn-k-val").textContent = e.target.value;
  });
  document.getElementById("knn-run").addEventListener("click", runKNN);
  document.getElementById("knn-sector").addEventListener("change", (e) => {
    if (e.target.value) fillFormFromSector(e.target.value);
  });

  // Map modes
  document.getElementById("map-mode-cluster").addEventListener("click", () => switchMapMode("cluster"));
  document.getElementById("map-mode-risk").addEventListener("click", () => switchMapMode("risk"));

  // Sector filters
  document.getElementById("sector-search").addEventListener("input", renderSectorTable);
  document.getElementById("sector-risk-filter").addEventListener("change", renderSectorTable);
  document.getElementById("sector-sort").addEventListener("change", renderSectorTable);
}

function switchMapMode(mode) {
  state.mapMode = mode;
  document.getElementById("map-mode-cluster").classList.toggle("chip-active", mode === "cluster");
  document.getElementById("map-mode-risk").classList.toggle("chip-active", mode === "risk");
  renderMap();
}
