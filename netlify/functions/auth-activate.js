const { getStore } = require('@netlify/blobs');
const {
  getAllowedKeys,
  createSession,
  cookieHeader,
  jsonResponse,
} = require('./auth-shared');

function parseBody(event) {
  try {
    return JSON.parse(event.body || '{}');
  } catch {
    return {};
  }
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const body = parseBody(event);
    const key = String(body.key || '')
      .trim()
      .toUpperCase();
    const deviceId = String(body.deviceId || '').trim();

    if (!key || key.length < 8) {
      return jsonResponse(400, { ok: false, error: 'Введите ключ доступа' });
    }
    if (!deviceId || deviceId.length < 8) {
      return jsonResponse(400, { ok: false, error: 'Не удалось определить устройство. Обновите страницу' });
    }

    const allowed = getAllowedKeys();
    if (!allowed.includes(key)) {
      return jsonResponse(403, { ok: false, error: 'Неверный ключ доступа' });
    }

    const store = getStore('guide-keys');
    const recordRaw = await store.get(key);

    if (recordRaw) {
      const record = JSON.parse(recordRaw);
      if (record.deviceId !== deviceId) {
        return jsonResponse(403, {
          ok: false,
          error: 'Этот ключ уже активирован на другом устройстве',
        });
      }
    } else {
      await store.set(
        key,
        JSON.stringify({
          deviceId,
          activatedAt: new Date().toISOString(),
        })
      );
    }

    const token = createSession(key, deviceId);
    return jsonResponse(200, { ok: true }, { 'Set-Cookie': cookieHeader(token) });
  } catch (err) {
    console.error(err);
    return jsonResponse(500, { ok: false, error: 'Ошибка сервера. Попробуйте позже' });
  }
};
