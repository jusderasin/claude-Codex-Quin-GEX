const dashboardMetrics = document.querySelectorAll('.metric-grid .metric');
const nextPanel = document.querySelector('.next-panel');
const vaultTable = document.querySelector('#data table');

document.querySelector('.header-meta strong').textContent = '23 SEP 2026';

dashboardMetrics[0].querySelector('strong').textContent = '450';
dashboardMetrics[0].querySelector('small').textContent = 'NQ 50 · ES 50 · VXX 200 · 150 à reclassifier';
dashboardMetrics[2].querySelector('strong').textContent = '7';

nextPanel.querySelector('h2').textContent = 'Étendre NQ1!';
nextPanel.querySelector('.badge').textContent = 'LOT 1/5';
nextPanel.querySelector('.badge').classList.remove('amber');
nextPanel.querySelector('p').textContent = 'Le premier lot NQ canonique est audité. Prochaine collecte : 50 séances strictement antérieures au 13 juillet 2026.';
nextPanel.querySelector('.progress span').style.width = '100%';
nextPanel.querySelector('small').textContent = '50 séances NQ · 0 close manquant · 2 IV Rank hors plage';

vaultTable.innerHTML = `
  <thead><tr><th>Asset</th><th>Sessions</th><th>Période locale</th><th>Close manquant</th><th>Flags</th><th>État</th><th>Export</th></tr></thead>
  <tbody>
    <tr><td><b>NQ1!</b></td><td>50</td><td>13 JUL 2026 → 22 SEP 2026</td><td>0</td><td>2</td><td><span class="data-state ready">AUDITÉ</span></td><td><a class="download-link" href="data/nq1_clean_2026-07-13_2026-09-22.csv" download>CSV</a></td></tr>
    <tr><td><b>ES1!</b></td><td>50</td><td>25 SEP 2025 → 04 DEC 2025</td><td>0</td><td>0</td><td><span class="data-state partial">CLOSE SEUL</span></td><td><a class="download-link" href="data/es1_close_clean_2025-09-25_2025-12-04.csv" download>CSV</a></td></tr>
    <tr><td><b>À identifier</b></td><td>150</td><td>Ancien fichier étiqueté ES1!</td><td>0</td><td>1</td><td><span class="data-state pending">QUARANTAINE</span></td><td>—</td></tr>
    <tr><td><b>VXX</b></td><td>200</td><td>03 DEC 2025 → 21 SEP 2026</td><td>1</td><td>2</td><td><span class="data-state ready">AUDITÉ</span></td><td><a class="download-link" href="data/vxx_master.csv" download>CSV</a></td></tr>
    <tr><td><b>VXN</b></td><td>0</td><td>Historique indisponible chez Quin</td><td>—</td><td>—</td><td><span class="data-state pending">INDISPONIBLE</span></td><td>—</td></tr>
  </tbody>`;

const dashboardStyle = document.createElement('style');
dashboardStyle.textContent = `.download-link{display:inline-flex;align-items:center;padding:5px 9px;border:1px solid #2c665b;color:var(--mint);font:700 .62rem var(--mono);letter-spacing:.08em;text-decoration:none}.download-link:hover,.download-link:focus-visible{background:rgba(93,228,199,.1);outline:none}`;
document.head.append(dashboardStyle);
