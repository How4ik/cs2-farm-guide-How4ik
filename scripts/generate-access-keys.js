const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2] || 10);
if (!Number.isInteger(count) || count < 1 || count > 500) {
  console.error('Usage: node scripts/generate-access-keys.js <count>');
  process.exit(1);
}

const keys = Array.from({ length: count }, () => {
  const raw = crypto.randomBytes(10).toString('hex').toUpperCase();
  return `${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8, 12)}-${raw.slice(12, 16)}-${raw.slice(16, 20)}`;
});

const outFile = path.join(__dirname, '..', 'access-keys.txt');
fs.writeFileSync(outFile, keys.join('\n') + '\n', 'utf8');

console.log(`Generated ${keys.length} keys -> ${outFile}`);
console.log('');
console.log('Add to Netlify environment variable ACCESS_KEYS (comma-separated):');
console.log(keys.join(','));
