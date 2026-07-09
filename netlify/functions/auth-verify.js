const { verifyToken, jsonResponse, COOKIE_NAME } = require('./auth-shared');

function parseCookies(header) {
  const out = {};
  if (!header) return out;
  for (const part of header.split(';')) {
    const [name, ...rest] = part.trim().split('=');
    if (name) out[name] = rest.join('=');
  }
  return out;
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return jsonResponse(405, { ok: false });
  }

  try {
    const cookies = parseCookies(event.headers.cookie || event.headers.Cookie);
    const session = verifyToken(cookies[COOKIE_NAME]);
    if (!session) {
      return jsonResponse(401, { ok: false });
    }
    return jsonResponse(200, { ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse(500, { ok: false });
  }
};
