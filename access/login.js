(function () {
  const DEVICE_KEY = 'guide_device_id';
  const gate = document.getElementById('access-gate');
  const form = document.getElementById('access-form');
  const input = document.getElementById('access-key');
  const errorEl = document.getElementById('access-error');
  const submitBtn = document.getElementById('access-submit');

  function isLocalDev() {
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  }

  function isPublicHost() {
    return location.hostname.endsWith('github.io');
  }

  function getDeviceId() {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  }

  function unlockGuide() {
    document.body.classList.remove('access-locked');
    gate.classList.add('hidden');
    window.dispatchEvent(new Event('guide-auth-ok'));
  }

  function showError(message) {
    errorEl.textContent = message || '';
  }

  async function verifySession() {
    const res = await fetch('/.netlify/functions/auth-verify', {
      method: 'GET',
      credentials: 'same-origin',
    });
    return res.ok;
  }

  async function activateKey(key) {
    const res = await fetch('/.netlify/functions/auth-activate', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: key.trim(),
        deviceId: getDeviceId(),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'Не удалось активировать ключ');
    }
  }

  async function init() {
    if (isLocalDev() || isPublicHost()) {
      unlockGuide();
      return;
    }

    document.body.classList.add('access-locked');
    gate.classList.remove('hidden');

    try {
      if (await verifySession()) {
        unlockGuide();
        return;
      }
    } catch {
      showError('Сервис авторизации недоступен. Деплой должен быть на Netlify.');
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
