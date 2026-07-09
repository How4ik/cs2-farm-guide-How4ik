const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'chapters', '_standard-guide-raw.md');
const URL = 'https://standard-arb.gitbook.io/standard-arb-docs/llms-full.txt';

(async () => {
  const r = await fetch(URL);
  if (!r.ok) throw new Error(`Fetch failed: ${r.status}`);
  const text = await r.text();
  fs.writeFileSync(OUT, text, 'utf8');
  console.log('Saved', OUT, 'chars:', text.length);

  await require('./fetch-standard-images').run();
})();
