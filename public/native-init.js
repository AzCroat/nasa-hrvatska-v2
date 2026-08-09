// Capacitor native detection — applied synchronously before React mounts so CSS
// overrides take effect from the very first paint.
// Detection uses window.location.hostname === 'localhost' with no port — set by
// the OS before any JS runs (Capacitor androidScheme:'https' -> origin https://localhost).
// This is 100% race-condition-free; window.Capacitor bridge injection is async
// and unreliable at this point.
try {
  // Capacitor Android: https://localhost (no port).
  // Dev/CI server: http://localhost:4173 (has a port).
  if (window.location.hostname === 'localhost' && !window.location.port) {
    document.documentElement.classList.add('capacitor-native');
  }
} catch (e) {}

// Saved theme → data-theme BEFORE first paint, so the static boot shell in
// index.html (and the page ground behind the app) paints in the right colors
// instead of flashing light at dark-mode users. Mirrors usePreferences.ts:
// localStorage 'darkMode' wins; key absent → system preference. React
// recomputes the same value on mount, so this only closes the pre-mount gap.
//
// Lives HERE (external file) and not inline in index.html for two reasons:
// it stays valid if CSP ever drops 'unsafe-inline', and the
// keepPublicScriptsExternal plugin in vite.config.js fingerprints inline
// scripts by this file's first code line ("try {") — an inline script starting
// the same way gets silently replaced by a duplicate native-init tag.
try {
  var _nhDm = localStorage.getItem('darkMode');
  var _nhDark =
    _nhDm === null
      ? !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      : _nhDm === 'true';
  document.documentElement.setAttribute('data-theme', _nhDark ? 'dark' : 'light');
} catch (e) {}
