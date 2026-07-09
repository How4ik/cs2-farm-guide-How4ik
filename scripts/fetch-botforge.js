const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'chapters', '_botforge-guide-raw.md');
const URL = 'https://pochito.gitbook.io/bot-forge/llms-full.txt';

(async () => {
  const r = await fetch(URL);
  if (!r.ok) throw new Error(`Fetch failed: ${r.status}`);
  const text = await r.text();
  fs.writeFileSync(OUT, text, 'utf8');
  console.log('Saved', OUT, 'chars:', text.length);

  await require('./fetch-botforge-images').run();
})();
