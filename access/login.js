(function () {
  const DEVICE_KEY = 'guide_device_id';
  const SESSION_KEY = 'guide_session';
  const LOCAL_BIND_KEY = 'guide_local_activation';

  const gate = document.getElementById('access-gate');
  const form = document.getElementById('access-form');
  const input = document.getElementById('access-key');
  const errorEl = document.getElementById('access-error');
  const submitBtn = document.getElementById('access-submit');
  const config = window.__GUIDE_AUTH_CONFIG || { keyHashes: [] };

  function isLocalDev() {
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  }

  function getDeviceId() {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  }

  async function hashKey(key) {
    const data = new TextEncoder().encode(String(key || '').trim().toUpperCase());
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  function unlockGuide() {
    document.body.classList.remove('access-locked');
    gate.classList.add('hidden');
    window.dispatchEvent(new Event('guide-auth-ok'));
  }

  function showError(message) {
    errorEl.textContent = message || '';
  }

  function saveSession(keyHash) {
    const session = {
      keyHash,
      deviceId: getDeviceId(),
      exp: Date.now() + 90 * 24 * 60 * 60 * 1000,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function readSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (!session.keyHash || !session.deviceId || !session.exp) return null;
      if (session.exp < Date.now()) return null;
      if (session.deviceId !== getDeviceId()) return null;
      if (!config.keyHashes.includes(session.keyHash)) return null;
      return session;
    } catch {
      return null;
    }
  }

  function hasSupabase() {
    return Boolean(config.supabaseUrl && config.supabaseAnonKey);
  }

  async function activateOnServer(keyHash) {
    const deviceId = getDeviceId();
    const url = `${config.supabaseUrl.replace(/\/$/, '')}/rest/v1/rpc/activate_guide_key`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${config.supabaseAnonKey}`,
      },
      body: JSON.stringify({
        p_key_hash: keyHash,
        p_device_id: deviceId,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || data.error || 'Ошибка сервера авторизации');
    }
    if (!data.ok) {
      throw new Error(data.error || 'Не удалось активировать ключ');
    }
  }

  async function activateLocally(keyHash) {
    const deviceId = getDeviceId();
    let record = null;
    try {
      record = JSON.parse(localStorage.getItem(LOCAL_BIND_KEY) || 'null');
    } catch {
      record = null;
    }

    if (record && record.keyHash !== keyHash && record.deviceId === deviceId) {
      throw new Error('На этом устройстве уже активирован другой ключ');
    }

    if (record && record.keyHash === keyHash && record.deviceId !== deviceId) {
      throw new Error('Этот ключ уже активирован на другом устройстве');
    }

    localStorage.setItem(
      LOCAL_BIND_KEY,
      JSON.stringify({
        keyHash,
        deviceId,
        activatedAt: new Date().toISOString(),
      })
    );
  }

  async function verifyLocalBinding(keyHash) {
    let record = null;
    try {
      record = JSON.parse(localStorage.getItem(LOCAL_BIND_KEY) || 'null');
    } catch {
      record = null;
    }
    if (!record) return;
    if (record.keyHash !== keyHash) {
      throw new Error('На этом устройстве активирован другой ключ');
    }
    if (record.deviceId !== getDeviceId()) {
      throw new Error('Сессия недействительна на этом устройстве');
    }
  }

  async function activateKey(key) {
    const normalized = String(key || '').trim().toUpperCase();
    if (normalized.length < 8) {
      throw new Error('Введите ключ доступа');
    }

    const keyHash = await hashKey(normalized);
    if (!config.keyHashes.includes(keyHash)) {
      throw new Error('Неверный ключ доступа');
    }

    if (hasSupabase()) {
      await activateOnServer(keyHash);
    } else {
      await activateLocally(keyHash);
    }

    saveSession(keyHash);
  }

  async function verifySession() {
    const session = readSession();
    if (!session) return false;

    if (hasSupabase()) {
      await activateOnServer(session.keyHash);
    } else {
      await verifyLocalBinding(session.keyHash);
    }

    return true;
  }

  async function init() {
    if (isLocalDev()) {
      unlockGuide();
      return;
    }

    document.body.classList.add('access-locked');
    gate.classList.remove('hidden');

    if (!config.keyHashes.length) {
      showError('Ключи доступа не настроены. Добавьте ACCESS_KEYS в GitHub Secrets.');
      return;
    }

    try {
      if (await verifySession()) {
        unlockGuide();
        return;
      }
    } catch (err) {
      localStorage.removeItem(SESSION_KEY);
      showError(err.message);
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      showError('');
      submitBtn.disabled = true;
      try {
        await activateKey(input.value);
        unlockGuide();
      } catch (err) {
        showError(err.message);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  window.GuideAccess = { init, unlockGuide, verifySession };
  init();
})();
