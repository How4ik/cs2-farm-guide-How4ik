(function () {
  if (window.__docsifyBooted) return;
  window.__docsifyBooted = true;

  function ensureHashRoute() {
    var hash = location.hash;
    if (!hash || hash === '#') {
      location.replace(location.pathname + location.search + '#/');
    }
  }

  ensureHashRoute();

  window.$docsify = {
    name: 'Гайд по ферме CS',
    repo: '',
    basePath: '/',
    homepage: 'README.md',
    relativePath: true,
    loadSidebar: true,
    alias: {
      '': '/README.md',
      '/': '/README.md',
      '/.*/_sidebar.md': '/_sidebar.md',
    },
    subMaxLevel: 0,
    auto2top: true,
    search: {
      placeholder: 'Поиск...',
      noData: 'Ничего не найдено',
      depth: 3,
    },
    plugins: [
      function (hook) {
        hook.beforeEach(function (html, next) {
          if (typeof html === 'string' && /<!doctype html/i.test(html)) {
            next('# Не удалось загрузить страницу\n\nОбновите вкладку (**Ctrl+F5**) и войдите снова.');
            return;
          }
          next(html);
        });
      },
    ],
  };

  var docsifyScript = document.createElement('script');
  docsifyScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/docsify/4.13.1/docsify.min.js';
  docsifyScript.onload = function () {
    var searchScript = document.createElement('script');
    searchScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/docsify/4.13.1/plugins/search.min.js';
    document.body.appendChild(searchScript);
  };
  document.body.appendChild(docsifyScript);
})();
