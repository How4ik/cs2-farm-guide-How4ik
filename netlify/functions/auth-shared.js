const crypto = require('crypto');

const COOKIE_NAME = 'guide_auth';
const SESSION_DAYS = 90;

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error('AUTH_SECRET is not set (min 16 characters)');
  }
  return secret;
}

function getAllowedKeys() {
  const raw = process.env.ACCESS_KEYS || '';
  return raw
    .split(/[\n,;]+/)
    .map((k) => k.trim().toUpperCase())
    .filter(Boolean);
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
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

module.exports = {
  COOKIE_NAME,
  getAllowedKeys,
  createSession,
  verifyToken,
  cookieHeader,
  jsonResponse,
};
