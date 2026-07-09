const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const MAX_KEYS = 2000;
const NETLIFY_CHUNK_SIZE = 4800;

const count = Number(process.argv[2] || 10);
if (!Number.isInteger(count) || count < 1 || count > MAX_KEYS) {
  console.error(`Usage: node scripts/generate-access-keys.js <count> (1-${MAX_KEYS})`);
  process.exit(1);
}

const keys = Array.from({ length: count }, () => {
  const raw = crypto.randomBytes(10).toString('hex').toUpperCase();
  return `${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8, 12)}-${raw.slice(12, 16)}-${raw.slice(16, 20)}`;
});

function splitForNetlify(list) {
  const chunks = [];
  let current = [];
  let currentLen = 0;

  for (const key of list) {
    const addLen = (current.length ? 1 : 0) + key.length;
    if (currentLen + addLen > NETLIFY_CHUNK_SIZE && current.length) {
      chunks.push(current.join(','));
      current = [key];
      currentLen = key.length;
    } else {
      current.push(key);
      currentLen += addLen;
    }
  }

  if (current.length) chunks.push(current.join(','));
  return chunks;
}

const root = path.join(__dirname, '..');
const outFile = path.join(root, 'access-keys.txt');

fs.writeFileSync(outFile, keys.join('\n') + '\n', 'utf8');

const chunks = splitForNetlify(keys);
chunks.forEach((chunk, index) => {
  const suffix = index === 0 ? '' : `-${index + 1}`;
  fs.writeFileSync(path.join(root, `access-keys-netlify${suffix}.txt`), chunk, 'utf8');
});

console.log(`Generated ${keys.length} keys -> ${outFile}`);
console.log(`Netlify chunks: ${chunks.length} file(s)`);
chunks.forEach((chunk, index) => {
  const name = index === 0 ? 'ACCESS_KEYS' : `ACCESS_KEYS_${index + 1}`;
  const file = index === 0 ? 'access-keys-netlify.txt' : `access-keys-netlify-${index + 1}.txt`;
  console.log(`  ${name} <- ${file} (${chunk.length} chars)`);
});
console.log('');
console.log('Netlify → Environment variables → add each ACCESS_KEYS* variable separately.');
