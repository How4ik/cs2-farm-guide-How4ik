const { verifyToken, jsonResponse, COOKIE_NAME, getAllowedKeys, parseCookies } = require('./auth-shared');

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
    });
  }

  if (req.method !== 'GET') {
    return jsonResponse(405, { ok: false });
  }

  try {
    const cookies = parseCookies(req.headers.get('cookie'));
    const session = verifyToken(cookies[COOKIE_NAME]);
    if (!session) {
      return jsonResponse(401, { ok: false });
    }
    const allowed = getAllowedKeys();
    if (!allowed.includes(session.key)) {
      return jsonResponse(401, { ok: false });
    }
    return jsonResponse(200, { ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse(500, { ok: false });
  }
};
