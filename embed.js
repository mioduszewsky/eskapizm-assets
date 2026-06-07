(function () {
  var currentScript = document.currentScript;
  if (!currentScript) return;

  var allowedBanners = {
    'Baner_Tajlandia.html': true,
    'Baner_Wietnam.html': true,
    'Baner_Filipiny.html': true,
    'Baner_Indonezja.html': true,
    'tajlandia.html': true,
    'wietnam.html': true,
    'filipiny.html': true,
    'indonezja.html': true,
  };

  function cdnBaseFromScript(src) {
    try {
      var url = new URL(src);
      var path = url.pathname.replace(/\/embed\.js$/, '/');
      return url.origin + path;
    } catch (_) {
      return 'https://cdn.jsdelivr.net/gh/mioduszewsky/eskapizm-assets@main/';
    }
  }

  function requestedBanner() {
    var fromData = currentScript.getAttribute('data-banner');
    if (fromData && allowedBanners[fromData]) return fromData;

    try {
      var fromQuery = new URL(currentScript.src).searchParams.get('banner');
      if (fromQuery && allowedBanners[fromQuery]) return fromQuery;
    } catch (_) {
      return 'Baner_Tajlandia.html';
    }

    return 'Baner_Tajlandia.html';
  }

  function renderError(host) {
    host.innerHTML = '<a href="https://eskapizm.com/?utm_source=affiliate&utm_medium=baner&utm_campaign=fallback" target="_blank" rel="noopener" style="display:block;padding:16px;border:1px solid #e7e5e4;border-radius:12px;color:#1c1917;text-decoration:none;font-family:system-ui,-apple-system,sans-serif;">Zobacz plany podrozy Eskapizm</a>';
  }

  var banner = requestedBanner();
  var base = cdnBaseFromScript(currentScript.src);
  var host = document.createElement('div');
  host.setAttribute('data-eskapizm-banner', banner);

  currentScript.parentNode.insertBefore(host, currentScript);

  fetch(base + banner)
    .then(function (response) {
      if (!response.ok) throw new Error('Banner fetch failed');
      return response.text();
    })
    .then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var shadow = host.attachShadow ? host.attachShadow({ mode: 'open' }) : null;
      var target = shadow || host;
      var baseStyle = document.createElement('style');
      baseStyle.textContent = ':host{display:block;width:100%;}';
      target.appendChild(baseStyle);

      doc.querySelectorAll('head link[rel="preconnect"], head link[rel="stylesheet"], head style').forEach(function (node) {
        target.appendChild(node.cloneNode(true));
      });

      Array.prototype.slice.call(doc.body.childNodes).forEach(function (node) {
        target.appendChild(node.cloneNode(true));
      });
    })
    .catch(function () {
      renderError(host);
    });
})();
