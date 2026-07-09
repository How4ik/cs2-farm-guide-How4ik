const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outFile = path.join(root, 'netlify', 'functions', 'allowed-keys.json');

function parseKeys(raw) {
  return raw
    .split(/[\n,;]+/)
    .map((k) => k.trim().toUpperCase())
    .filter(Boolean);
}

function loadKeys() {
  const parts = [process.env.ACCESS_KEYS];
  for (let i = 2; i <= 10; i += 1) {
    const value = process.env[`ACCESS_KEYS_${i}`];
    if (value) parts.push(value);
  }

  const fromEnv = parts.filter(Boolean).join(',');
  if (fromEnv) return [...new Set(parseKeys(fromEnv))];

  const keysFile = path.join(root, 'access-keys.txt');
  if (fs.existsSync(keysFile)) {
    return [...new Set(parseKeys(fs.readFileSync(keysFile, 'utf8')))];
  }

  return [];
}

const keys = loadKeys();
fs.writeFileSync(outFile, JSON.stringify(keys) + '\n', 'utf8');
console.log(`Function keys baked -> netlify/functions/allowed-keys.json (${keys.length} keys)`);

if (!keys.length) {
  console.warn('Warning: no keys baked. Set ACCESS_KEYS during build or keep access-keys.txt locally.');
}
