const dashboardMetrics = document.querySelectorAll('.metric-grid .metric');
const nextPanel = document.querySelector('.next-panel');
const vaultTable = document.querySelector('#data table');

document.querySelector('.header-meta strong').textContent = '23 SEP 2026';

dashboardMetrics[0].querySelector('strong').textContent = '350';
dashboardMetrics[0].querySelector('small').textContent = 'ES 150 · VXX 200 · autres à intégrer';
dashboardMetrics[2].querySelector('strong').textContent = '4';

nextPanel.querySelector('h2').textContent = 'Compléter ES1!';
nextPanel.querySelector('.badge').textContent = 'VXN INDISPONIBLE';
nextPanel.querySelector('.badge').classList.remove('amber');
nextPanel.querySelector('p').textContent = 'Quin confirme l’absence de données historiques VXN. Prochaine collecte : clôtures ES1! manquantes du 25 septembre au 4 décembre 2025.';
nextPanel.querySelector('.progress span').style.width = '100%';
nextPanel.querySelector('small').textContent = 'VXN consigné comme indisponible · aucune estimation utilisée';

vaultTable.innerHTML = `
  <thead><tr><th>Asset</th><th>Sessions</th><th>Période locale</th><th>Close manquant</th><th>Flags</th><th>État</th><th>Export</th></tr></thead>
  <tbody>
    <tr><td><b>ES1!</b></td><td>150</td><td>03 NOV 2025 → 18 SEP 2026</td><td>0</td><td>2</td><td><span class="data-state ready">CLEAN</span></td><td><a class="download-link" href="data/es1_clean.csv" download>CSV</a></td></tr>
    <tr><td><b>VXX</b></td><td>200</td><td>03 DEC 2025 → 21 SEP 2026</td><td>1</td><td>2</td><td><span class="data-state ready">AUDITÉ</span></td><td><a class="download-link" href="data/vxx_master.csv" download>CSV</a></td></tr>
    <tr><td><b>VXN</b></td><td>0</td><td>Historique indisponible chez Quin</td><td>—</td><td>—</td><td><span class="data-state pending">INDISPONIBLE</span></td><td>—</td></tr>
    <tr><td><b>NQ1!</b></td><td>—</td><td>Tables reçues, ingestion à faire</td><td>—</td><td>connus</td><td><span class="data-state pending">EN ATTENTE</span></td><td>—</td></tr>
  </tbody>`;

const dashboardStyle = document.createElement('style');
dashboardStyle.textContent = `.download-link{display:inline-flex;align-items:center;padding:5px 9px;border:1px solid #2c665b;color:var(--mint);font:700 .62rem var(--mono);letter-spacing:.08em;text-decoration:none}.download-link:hover,.download-link:focus-visible{background:rgba(93,228,199,.1);outline:none}`;
document.head.append(dashboardStyle);
