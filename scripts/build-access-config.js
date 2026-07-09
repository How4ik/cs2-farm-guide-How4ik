const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outFile = path.join(root, 'access', 'config.js');

function sha256(value) {
  return crypto.createHash('sha256').update(value, 'utf8').digest('hex');
}

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
  if (fromEnv) return parseKeys(fromEnv);

  const keysFile = path.join(root, 'access-keys.txt');
  if (fs.existsSync(keysFile)) {
    return parseKeys(fs.readFileSync(keysFile, 'utf8'));
  }

  return [];
}

function hasSupabaseEnv() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY);
}

const keys = loadKeys();
const keyHashes = [...new Set(keys.map(sha256))];
const isNetlify = process.env.NETLIFY === 'true';

const config = {
  authMode: isNetlify ? 'netlify' : hasSupabaseEnv() ? 'supabase' : 'client',
  keyHashes: isNetlify ? [] : keyHashes,
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
};

fs.writeFileSync(
  outFile,
  `window.__GUIDE_AUTH_CONFIG = ${JSON.stringify(config, null, 2)};\n`,
  'utf8'
);

console.log(`Access config -> access/config.js (${isNetlify ? 'netlify mode' : keyHashes.length + ' keys'})`);
if (!isNetlify && !keyHashes.length) {
  console.warn('Warning: no ACCESS_KEYS set. Auth will reject all keys in production.');
}
