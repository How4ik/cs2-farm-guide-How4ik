(function () {
  if (window.__docsifyBooted) return;
  window.__docsifyBooted = true;

  window.$docsify = {
    name: 'Гайд по ферме CS',
    repo: '',
    basePath: '/',
    relativePath: true,
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md',
    },
    subMaxLevel: 0,
    auto2top: true,
    search: {
      placeholder: 'Поиск...',
      noData: 'Ничего не найдено',
      depth: 3,
    },
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
