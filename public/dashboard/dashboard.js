/* ============================================================
 * Registrations Analytics Dashboard
 * Vanilla JS + Chart.js. Talks to the Express aggregation API.
 * Served from the same origin (/dashboard), so API_BASE is empty.
 * ============================================================ */

const API_BASE = ''; // same origin as the Express server

// Chart instances (kept so we can update instead of re-creating)
const charts = {};
// Table pagination state
let currentPage = 1;
const PAGE_LIMIT = 10;

const COLORS = [
  '#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed',
  '#0891b2', '#db2777', '#65a30d', '#ea580c', '#0d9488',
];

/* ---------- Helpers ---------- */

// Read the current state of all filter inputs into a query object.
function getFilters() {
  return {
    from: document.getElementById('f-from').value,
    to: document.getElementById('f-to').value,
    district: document.getElementById('f-district').value,
    gender: document.getElementById('f-gender').value,
    occupation: document.getElementById('f-occupation').value,
    status: document.getElementById('f-status').value,
    groupBy: document.getElementById('f-groupby').value,
  };
}

// Turn a filter object into a URL query string (skipping empty values).
function toQuery(extra = {}) {
  const params = new URLSearchParams();
  const all = { ...getFilters(), ...extra };
  Object.entries(all).forEach(([k, v]) => {
    if (v !== '' && v != null) params.append(k, v);
  });
  return params.toString();
}

async function fetchJSON(url) {
  const res = await fetch(API_BASE + url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

function setStatus(text, ok = true) {
  const pill = document.getElementById('status-pill');
  pill.textContent = text;
  pill.style.background = ok ? '#eef2ff' : '#fee2e2';
  pill.style.color = ok ? '#2563eb' : '#991b1b';
}

/* ---------- Chart rendering ---------- */

// Create-or-update pattern: keeps charts smooth when filters change.
function upsertChart(key, canvasId, config) {
  if (charts[key]) {
    charts[key].data = config.data;
    charts[key].update();
  } else {
    charts[key] = new Chart(document.getElementById(canvasId), config);
  }
}

function renderTimeseries(data) {
  upsertChart('timeseries', 'chart-timeseries', {
    type: 'line',
    data: {
      labels: data.map((d) => d.date),
      datasets: [{
        label: 'Registrations',
        data: data.map((d) => d.count),
        borderColor: COLORS[0],
        backgroundColor: 'rgba(37,99,235,0.12)',
        fill: true,
        tension: 0.3,
        pointRadius: 2,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
    },
  });
}

function renderPie(key, canvasId, data) {
  upsertChart(key, canvasId, {
    type: 'doughnut',
    data: {
      labels: data.map((d) => d.label),
      datasets: [{
        data: data.map((d) => d.count),
        backgroundColor: COLORS,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
    },
  });
}

function renderBar(key, canvasId, data) {
  upsertChart(key, canvasId, {
    type: 'bar',
    data: {
      labels: data.map((d) => d.label),
      datasets: [{
        label: 'Count',
        data: data.map((d) => d.count),
        backgroundColor: COLORS[0],
        borderRadius: 4,
      }],
    },
    options: {
      indexAxis: 'y', // horizontal bars read better for long labels
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { beginAtZero: true, ticks: { precision: 0 } } },
    },
  });
}

/* ---------- Data loading ---------- */

// Load KPIs + all charts from the single aggregation endpoint.
async function loadDashboard() {
  setStatus('Loading…');
  try {
    const d = await fetchJSON('/api/dashboard?' + toQuery());

    document.getElementById('kpi-total').textContent = d.kpis.total.toLocaleString();
    document.getElementById('kpi-pending').textContent = d.kpis.pending.toLocaleString();
    document.getElementById('kpi-approved').textContent = d.kpis.approved.toLocaleString();
    document.getElementById('kpi-rate').textContent = d.kpis.approvalRate + '%';
    document.getElementById('kpi-districts').textContent = d.kpis.uniqueDistricts.toLocaleString();

    renderTimeseries(d.timeseries);
    renderPie('gender', 'chart-gender', d.byGender);
    renderBar('district', 'chart-district', d.byDistrict);
    renderBar('occupation', 'chart-occupation', d.byOccupation);
    renderPie('status', 'chart-status', d.byStatus);

    setStatus(`Updated ${new Date().toLocaleTimeString()}`);
  } catch (err) {
    console.error(err);
    setStatus('Error loading data', false);
  }
}

// Load the paginated raw table (shares the same filters).
async function loadTable() {
  const tbody = document.getElementById('table-body');
  try {
    const d = await fetchJSON('/api/registrations?' + toQuery({ page: currentPage, limit: PAGE_LIMIT }));

    if (!d.rows.length) {
      tbody.innerHTML = '<tr><td colspan="8" class="empty">No registrations match these filters.</td></tr>';
    } else {
      tbody.innerHTML = d.rows.map((r) => {
        const status = (r.status || 'unknown').toLowerCase();
        const date = r.created_at ? new Date(r.created_at).toLocaleDateString() : '—';
        return `<tr>
          <td>${esc(r.registration_id)}</td>
          <td>${esc(r.first_name)} ${esc(r.last_name)}</td>
          <td>${esc(r.district)}</td>
          <td>${esc(r.occupation)}</td>
          <td>${esc(r.gender)}</td>
          <td><span class="badge ${status}">${esc(r.status || 'unknown')}</span></td>
          <td>${date}</td>
          <td class="docs">${docLinks(r.documents)}</td>
        </tr>`;
      }).join('');
    }

    document.getElementById('page-info').textContent = `Page ${d.page} of ${d.pages}`;
    document.getElementById('btn-prev').disabled = d.page <= 1;
    document.getElementById('btn-next').disabled = d.page >= d.pages;
  } catch (err) {
    console.error(err);
    tbody.innerHTML = '<tr><td colspan="7" class="empty">Error loading table.</td></tr>';
  }
}

// Render small clickable links for whichever documents a person uploaded.
function docLinks(docs) {
  if (!docs) return '<span class="muted">—</span>';
  const labels = { photo: 'Photo', resume: 'Resume', aadhaar: 'Aadhaar', other: 'Doc' };
  const links = Object.keys(labels)
    .filter((k) => docs[k])
    .map((k) => `<a href="${esc(docs[k])}" target="_blank" rel="noopener">${labels[k]}</a>`);
  return links.length ? links.join(' ') : '<span class="muted">—</span>';
}

// Basic HTML escaping for table cells.
function esc(v) {
  if (v == null) return '—';
  return String(v).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* ---------- Filters wiring ---------- */

// Apply filters globally: reset to page 1 and refresh charts + table together.
function applyFilters() {
  currentPage = 1;
  loadDashboard();
  loadTable();
}

// Populate a <select> with options from the API.
function fillSelect(id, values) {
  const sel = document.getElementById(id);
  values.forEach((v) => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = v;
    sel.appendChild(opt);
  });
}

async function initFilters() {
  try {
    const f = await fetchJSON('/api/filters');
    fillSelect('f-district', f.districts);
    fillSelect('f-gender', f.genders);
    fillSelect('f-occupation', f.occupations);
    fillSelect('f-status', f.statuses);
  } catch (err) {
    console.error('Could not load filter options', err);
  }

  // Any filter change re-runs every chart + the table.
  ['f-from', 'f-to', 'f-district', 'f-gender', 'f-occupation', 'f-status', 'f-groupby']
    .forEach((id) => document.getElementById(id).addEventListener('change', applyFilters));

  document.getElementById('btn-reset').addEventListener('click', () => {
    document.querySelectorAll('.filters input').forEach((el) => (el.value = ''));
    document.querySelectorAll('.filters select').forEach((el) => (el.selectedIndex = 0));
    applyFilters();
  });

  // Download CSV of the currently-filtered registrations.
  document.getElementById('btn-export').addEventListener('click', () => {
    window.location.href = API_BASE + '/api/export.csv?' + toQuery();
  });

  document.getElementById('btn-prev').addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; loadTable(); }
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    currentPage++; loadTable();
  });
}

/* ---------- Boot ---------- */
(async function init() {
  await initFilters();
  loadDashboard();
  loadTable();
})();
