// Detects stale-chunk / dynamic-import failures after a deploy. When old HTML
// references a vendor chunk whose hash changed, the browser gets a 404 (or the
// SW returns the SPA fallback index.html), which manifests as one of these
// browser-specific errors. All inputs are expected to be lowercase already.
//
//   Chrome:       "failed to fetch" / "expected a javascript module script … mime type"
//   Safari/WebKit:"importing a module script failed"
//   Firefox:      "error loading dynamically imported module"
//   WebKit iOS:   "importing binding name 'X' is not found" (stale named import)
//   Webpack/Vite: "loading chunk N failed"
export function isChunkLoadError(msg: string): boolean {
  return (
    msg.includes('failed to fetch') ||
    msg.includes('importing a module script failed') ||
    msg.includes('dynamically imported module') ||
    msg.includes('expected a javascript module script') ||
    msg.includes('mime type') ||
    msg.includes('loading chunk') ||
    msg.includes('importing binding name')
  );
}

/**
 * The self-healing reload budget.
 *
 * At most MAX_ATTEMPTS reloads inside RELOAD_WINDOW_MS, tracked per tab.
 *
 * The window is the whole point. The budget used to be a bare counter that was
 * never reset anywhere in the app, and sessionStorage survives reloads, so it
 * was 2 attempts per TAB LIFETIME rather than 2 per incident. An installed PWA
 * or a phone tab left open across several deploys spent the budget on its first
 * two (successfully healed) incidents, and from then on every stale-chunk error
 * skipped the heal entirely — no purge, no reload, straight to the error
 * reporter. That is the shape of a chunk-error cluster that stays "ongoing" on
 * an app whose healer works fine.
 *
 * Resetting on a successful boot would be the obvious alternative and is a
 * trap: a lazily-imported screen chunk that fails every time would reload,
 * mount, reset, fail, reload — forever. A window bounds the retries no matter
 * what the failure is, while still letting a genuinely new incident heal.
 */
const MAX_ATTEMPTS = 2;
const RELOAD_WINDOW_MS = 30 * 60 * 1000;

/**
 * Cache-name fragments the heal purges: the two caches that decide WHICH CODE
 * RUNS. Purging '-js' alone was self-defeating — SPA navigation is NetworkFirst
 * over `<ver>-html` with a 10s network timeout, so a reload on a slow
 * connection could be handed the SAME stale index.html, still pointing at the
 * chunks that just failed, and burn a budget slot achieving nothing.
 *
 * '-data', '-images', '-audio' and '-fonts' are deliberately NOT purged: they
 * hold offline study content, not the app's entry point.
 */
const PURGE_FRAGMENTS = ['-js', '-html'];

function readAttempts(storageKey: string, now: number): number {
  const raw = sessionStorage.getItem(storageKey);
  if (!raw) return 0;
  try {
    const parsed = JSON.parse(raw) as { n?: unknown; ts?: unknown };
    if (parsed && typeof parsed.n === 'number' && typeof parsed.ts === 'number') {
      // Attempts older than the window belong to a previous, already-resolved
      // incident and must not count against a new one.
      return now - parsed.ts < RELOAD_WINDOW_MS ? parsed.n : 0;
    }
  } catch {
    /* fall through */
  }
  // Legacy bare-integer value, written before the window existed. Those tabs are
  // exactly the ones stuck at the old permanent cap, so start them fresh instead
  // of carrying the lockout forward.
  return 0;
}

export function reloadWithCachePurge(storageKey: string): boolean {
  try {
    const now = Date.now();
    const attempts = readAttempts(storageKey, now);
    if (attempts >= MAX_ATTEMPTS) return false;
    sessionStorage.setItem(storageKey, JSON.stringify({ n: attempts + 1, ts: now }));
    // The purge is best-effort; the RELOAD is the part that must happen. Reading
    // Cache Storage can throw synchronously in privacy-restricted profiles, and
    // letting that escape meant the heal gave up entirely — no purge AND no
    // reload — on exactly the browsers most likely to need it.
    let purging = false;
    try {
      if ('caches' in globalThis && globalThis.caches) {
        purging = true;
        caches
          .keys()
          .then((names) =>
            names.forEach((name) => {
              if (name.includes('nasa-hrvatska') && PURGE_FRAGMENTS.some((f) => name.includes(f))) {
                caches.delete(name);
              }
            }),
          )
          .catch(() => {})
          .finally(() => globalThis.location.reload());
      }
    } catch (_) {
      purging = false;
    }
    if (!purging) globalThis.location.reload();
    return true;
  } catch (_) {
    return false;
  }
}
