// SW/cache migration script — cleans up pre-v12 legacy caches.
// Keeps ALL current caches: the app's own versioned runtime caches
// ('nasa-hrvatska-v12/13/14/...') AND the Workbox precache ('workbox-precache
// -v2-<scope>'), which holds the offline app shell (index.html, offline.html,
// CSS, fonts, icons). The precache is repopulated only during SW INSTALL, which
// does NOT re-run between deploys — so deleting it (as the old prefix-only
// check did on every load) left cold-start offline navigation broken and the
// offline UI unstyled. Only caches with a genuinely foreign name are removed.
// NOTE: SW unregister removed — it was killing v13+ SWs and causing a
// blank-white-screen infinite reload loop for all users.
// Skip in Capacitor native shell — SW and Cache API are unavailable in WebView.
if ('serviceWorker' in navigator && !window.Capacitor?.isNativePlatform?.()) {
  var KEEP_CACHE_PREFIXES = ['nasa-hrvatska-v', 'workbox-'];
  caches.keys().then(function(keys) {
    keys.forEach(function(k) {
      var keep = KEEP_CACHE_PREFIXES.some(function(p) { return k.indexOf(p) === 0; });
      if (!keep) caches.delete(k);
    });
  });
}
