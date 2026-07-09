const fs = require('fs');
const path = require('path');
const { getStore } = require('@netlify/blobs');

const root = path.join(__dirname, '..');
const STORE_NAME = 'guide-config';
const BLOB_KEY = 'allowed-keys';

function parseKeys(raw) {
  return raw
    .split(/[\n,;]+/)
    .map((k) => k.trim().toUpperCase())
    .filter(Boolean);
}

function loadKeys() {
  const keysFile = path.join(root, 'access-keys.txt');
  if (!fs.existsSync(keysFile)) {
    console.error('Файл access-keys.txt не найден. Сначала выполните: npm run keys 300');
    process.exit(1);
  }

  return [...new Set(parseKeys(fs.readFileSync(keysFile, 'utf8')))];
}

async function main() {
  const siteID = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_AUTH_TOKEN;

  if (!siteID || !token) {
    console.error('Нужны NETLIFY_SITE_ID и NETLIFY_AUTH_TOKEN.');
    console.error('');
    console.error('1. Netlify → User settings → Applications → New access token');
    console.error('2. Site settings → General → Site ID');
    console.error('3. В PowerShell:');
    console.error('   $env:NETLIFY_AUTH_TOKEN="ваш_токен"');
    console.error('   $env:NETLIFY_SITE_ID="ваш_site_id"');
    console.error('   npm run upload-keys');
    process.exit(1);
  }

  const keys = loadKeys();
  const store = getStore({ name: STORE_NAME, siteID, token });
  await store.set(BLOB_KEY, JSON.stringify(keys));

  console.log(`Загружено ${keys.length} ключей в Netlify Blobs (${STORE_NAME}/${BLOB_KEY}).`);
  console.log('Теперь удалите ACCESS_KEYS и ACCESS_KEYS_2 из Netlify Environment variables.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
