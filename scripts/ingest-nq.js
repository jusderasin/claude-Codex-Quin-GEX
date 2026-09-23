const fs = require('fs');
const path = require('path');

const input = process.argv[2];
const out = process.argv[3];
if (!input || !out) throw new Error('Usage: node ingest-nq.js <input.md> <output.csv>');

const clean = (value) => value.trim().replace(/^\$|,/g, '').replace(/%$/, '');
const number = (value) => value === '' || value === '—' ? '' : clean(value);
const millions = (value) => {
  const v = clean(value);
  if (!v || v === '—') return '';
  if (v.endsWith('M')) return String(Number(v.slice(0, -1)));
  if (v.endsWith('K')) return String(Number(v.slice(0, -1)) / 1000);
  return String(Number(v) / 1000000);
};
const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;

const rows = fs.readFileSync(input, 'utf8').split(/\r?\n/)
  .filter(line => /^\| 20\d\d-\d\d-\d\d /.test(line))
  .map(line => line.split('|').slice(1, -1).map(v => v.trim()))
  .map(c => {
    const ivRank = Number(number(c[10]));
    const skew = Number(number(c[13]));
    const flags = [];
    if (ivRank < 0 || ivRank > 100) flags.push('iv_rank_out_of_range');
    if (Math.abs(skew) > 150) flags.push('skew_outlier');
    if (!number(c[1])) flags.push('missing_close');
    return [
      'NQ1!', c[0], number(c[1]), millions(c[2]), number(c[3]), number(c[4]),
      number(c[5]), number(c[6]), number(c[7]), number(c[8]), number(c[9]),
      number(c[10]), number(c[11]), number(c[12]), '', number(c[13]),
      number(c[14]), '', number(c[15]), '', '', '', '', c[16].toLowerCase(),
      'quin_2026-09-23', flags.join(';')
    ];
  })
  .sort((a, b) => a[1].localeCompare(b[1]));

const header = ['asset','date','close','net_gex_m','put_support','put_support_0dte','call_resistance','call_resistance_0dte','hvl','one_d_min','one_d_max','iv_rank','iv_0dte','iv_1m','iv_3m','skew_0dte','skew_1m','skew_3m','vrp','vrp_3m','nvrp','term_structure_slope','dex','swing_bias','source','quality_flags'];
fs.writeFileSync(out, [header, ...rows].map(row => row.map(quote).join(',')).join('\n') + '\n');
console.log(`rows=${rows.length} first=${rows[0]?.[1]} last=${rows.at(-1)?.[1]} flags=${rows.filter(r => r.at(-1)).length}`);
