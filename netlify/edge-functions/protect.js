const COOKIE_NAME = 'guide_auth';

const PROTECTED_PREFIXES = ['/chapters/'];
const PROTECTED_EXACT = ['/_sidebar.md', '/README.md', '/readme.md'];

function shouldProtect(pathname) {
  if (PROTECTED_EXACT.includes(pathname)) return true;
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
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

async function importKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );
}

function base64UrlToBytes(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function verifyToken(token, secret) {
  if (!token || !token.includes('.')) return false;
  const [payloadB64, signatureB64] = token.split('.');
  const key = await importKey(secret);
  const valid = await crypto.subtle.verify(
    'HMAC',
    key,
    base64UrlToBytes(signatureB64),
    new TextEncoder().encode(payloadB64)
  );
  if (!valid) return false;
  try {
    const payload = JSON.parse(new TextDecoder().decode(base64UrlToBytes(payloadB64)));
    return payload.exp && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export default async (request, context) => {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  if (host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
    return context.next();
  }

  if (!shouldProtect(url.pathname)) {
    return context.next();
  }

  const secret = Netlify.env.get('AUTH_SECRET');
  if (!secret) {
    return new Response('Auth is not configured', { status: 503 });
  }

  const cookies = parseCookies(request.headers.get('cookie'));
  const ok = await verifyToken(cookies[COOKIE_NAME], secret);
  if (!ok) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  return context.next();
};
