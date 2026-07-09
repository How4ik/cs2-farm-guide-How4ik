const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { getStore } = require('@netlify/blobs');

const COOKIE_NAME = 'guide_auth';
const SESSION_DAYS = 90;
const KEYS_STORE = 'guide-config';
const KEYS_BLOB = 'allowed-keys';

let cachedKeys = null;
let keysPromise = null;

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error('AUTH_SECRET is not set (min 16 characters)');
  }
  return secret;
}

function parseKeys(raw) {
  return raw
    .split(/[\n,;]+/)
    .map((k) => k.trim().toUpperCase())
    .filter(Boolean);
}

function loadKeysFromEnv() {
  const parts = [process.env.ACCESS_KEYS];
  for (let i = 2; i <= 10; i += 1) {
    const value = process.env[`ACCESS_KEYS_${i}`];
    if (value) parts.push(value);
  }

  return parts
    .filter(Boolean)
    .join(',');
}

function loadKeysFromFile() {
  try {
    const bakedPath = path.join(__dirname, 'allowed-keys.json');
    if (!fs.existsSync(bakedPath)) return null;
    const keys = JSON.parse(fs.readFileSync(bakedPath, 'utf8'));
    return Array.isArray(keys) && keys.length ? keys : null;
  } catch {
    return null;
  }
}

async function getAllowedKeys() {
  if (cachedKeys) return cachedKeys;
  if (keysPromise) return keysPromise;

  keysPromise = (async () => {
    const fromFile = loadKeysFromFile();
    if (fromFile) {
      cachedKeys = fromFile;
      return cachedKeys;
    }

    try {
      const store = getStore(KEYS_STORE);
      const raw = await store.get(KEYS_BLOB);
      if (raw) {
        const keys = JSON.parse(raw);
        if (Array.isArray(keys) && keys.length) {
          cachedKeys = keys;
          return cachedKeys;
        }
      }
    } catch (err) {
      console.error('Failed to read keys from Netlify Blobs:', err);
    }

    const fromEnv = loadKeysFromEnv();
    cachedKeys = fromEnv ? parseKeys(fromEnv) : [];
    return cachedKeys;
  })();

  return keysPromise;
}

function signPayload(payload) {
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', getSecret()).update(payloadB64).digest('base64url');
  return `${payloadB64}.${signature}`;
}

function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [payloadB64, signature] = token.split('.');
  const expected = crypto.createHmac('sha256', getSecret()).update(payloadB64).digest('base64url');
  if (signature.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
    if (!payload.key || !payload.device || !payload.exp) return null;
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function createSession(key, deviceId) {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  return signPayload({ key: key.toUpperCase(), device: deviceId, exp });
}

function cookieHeader(token) {
  const maxAge = SESSION_DAYS * 24 * 60 * 60;
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

function jsonResponse(status, body, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...extraHeaders,
    },
  });
}

function parseCookies(header) {
  const out = {};
  if (!header) return out;
  for (const part of header.split(';')) {
    const [name, ...rest] = part.trim().split('=');
    if (name) out[name] = rest.join('=');
  }
  return out;
}

module.exports = {
  COOKIE_NAME,
  getAllowedKeys,
  getSecret,
  createSession,
  verifyToken,
  cookieHeader,
  jsonResponse,
  parseCookies,
};
