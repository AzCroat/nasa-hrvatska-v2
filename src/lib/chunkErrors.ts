// Detects stale-chunk / dynamic-import failures after a deploy. When old HTML
// references a vendor chunk whose hash changed, the browser gets a 404 (or the
// SW returns the SPA fallback index.html), which manifests as one of these
// browser-specific errors. All inputs are expected to be lowercase already.
//
//   Chrome:       "failed to fetch dynamically imported module: <url>"
//                 "failed to load module script: expected a javascript module
//                  script but the server responded with a mime type of text/html"
//   Safari/WebKit:"importing a module script failed"
//                 "'text/html' is not a valid javascript mime type"
//   Firefox:      "error loading dynamically imported module"
//   WebKit iOS:   "importing binding name 'X' is not found" (stale named import)
//   Webpack/Vite: "loading chunk N failed"
//
// EVERY pattern below must be MODULE-SPECIFIC. This predicate does not merely
// report — a match makes the caller purge caches and reload the page. Two
// patterns used to be far too broad:
//
//   'failed to fetch' — the standard message for ANY failed fetch(). A single
//     API request failing on a flaky connection matched, so window.onunhandled
//     rejection purged the cache and force-reloaded the app mid-session. It also
//     burned the reload budget, which is why genuine stale-chunk incidents later
//     found it spent. It was redundant besides: Chrome's real dynamic-import
//     message is caught by 'dynamically imported module'.
//
//   'mime type' — matched any message merely mentioning a MIME type. Replaced by
//     the two full module-load phrasings above.
export function isChunkLoadError(msg: string): boolean {
  return (
    msg.includes('importing a module script failed') ||
    msg.includes('dynamically imported module') ||
    msg.includes('failed to load module script') ||
    msg.includes('expected a javascript module script') ||
    msg.includes('is not a valid javascript mime type') ||
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

/**
 * Marker used to bound the heal when sessionStorage is unusable.
 *
 * window.name survives a same-tab reload and is NOT behind the Web Storage
 * permission gate, so it still works on exactly the profiles that made us need a
 * fallback. Any existing value is preserved — the stamp is appended and matched
 * by pattern, never assigned over.
 */
const NO_STORE_RE = /~nh-heal:(\d+)~/;

// `name` is not on typeof globalThis in this TS config; narrow accessor rather
// than casting globalThis wholesale.
interface NamedGlobal {
  name?: string;
}

function readNoStoreStamp(): number | null {
  try {
    const m = NO_STORE_RE.exec((globalThis as NamedGlobal).name || '');
    return m ? Number(m[1]) : null;
  } catch {
    return null;
  }
}

function writeNoStoreStamp(now: number): void {
  try {
    const g = globalThis as NamedGlobal;
    g.name = (g.name || '').replace(NO_STORE_RE, '') + `~nh-heal:${now}~`;
  } catch {
    /* window.name unavailable — the heal still runs, just unbounded-by-marker */
  }
}

/**
 * Attempts used so far, or 'unavailable' when storage itself cannot be read.
 *
 * The distinction matters. sessionStorage.getItem THROWS (it does not return
 * null) when cookies/site-data are blocked for the origin — supervised profiles,
 * "block all cookies", some privacy modes and embedded webviews. That throw used
 * to escape into reloadWithCachePurge's outer catch, which returned false, and
 * false is the "heal did not happen" signal: no cache purge, no reload, straight
 * to the error reporter. The self-healer was silently switched off entirely for
 * those users, who then sat on a stale bundle until they manually hard-refreshed.
 *
 * Conflating it with "0 attempts" would be worse than the bug: with no way to
 * persist a count, every chunk error would reload forever.
 */
function readAttempts(storageKey: string, now: number): number | 'unavailable' {
  let raw: string | null;
  try {
    raw = sessionStorage.getItem(storageKey);
  } catch {
    return 'unavailable';
  }
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

/**
 * One heal per RELOAD_WINDOW_MS when the attempt count cannot be persisted.
 * Returns false if the window's single heal has already been spent.
 */
function claimNoStoreHeal(now: number): boolean {
  const last = readNoStoreStamp();
  if (last !== null && now - last < RELOAD_WINDOW_MS) return false;
  writeNoStoreStamp(now);
  return true;
}

/**
 * Read-only peek at the same budget reloadWithCachePurge consumes: true when a
 * chunk error hitting the global handlers right now would be healed (purge +
 * reload), false when the window's budget is already spent.
 *
 * Exists for Sentry's beforeSend. The SDK's global-handler integration captures
 * a chunk error BEFORE our own window handlers run the heal, so returning true
 * from those handlers never stopped the SDK capture — every successful heal
 * still produced a Sentry event, and the issue re-flagged as "regressed" on
 * every deploy-heavy week. beforeSend uses this peek to drop events the heal is
 * about to handle while keeping budget-exhausted ones — the genuinely stuck
 * users, which is the only signal worth alerting on. Read-only is load-bearing:
 * beforeSend runs before the heal increments the count, so consuming budget
 * here would double-charge every incident.
 */
export function wouldHealChunkError(storageKey: string): boolean {
  try {
    const now = Date.now();
    const attempts = readAttempts(storageKey, now);
    if (attempts === 'unavailable') {
      const last = readNoStoreStamp();
      return last === null || now - last >= RELOAD_WINDOW_MS;
    }
    return attempts < MAX_ATTEMPTS;
  } catch {
    return false;
  }
}

export function reloadWithCachePurge(storageKey: string): boolean {
  try {
    const now = Date.now();
    const attempts = readAttempts(storageKey, now);

    // Storage blocked: heal once per window instead of not at all. One
    // unbudgeted reload is strictly better than leaving the user on a broken
    // bundle, and the window keeps a permanently-failing chunk from looping.
    if (attempts === 'unavailable') {
      if (!claimNoStoreHeal(now)) return false;
      return purgeAndReload();
    }

    if (attempts >= MAX_ATTEMPTS) return false;
    try {
      sessionStorage.setItem(storageKey, JSON.stringify({ n: attempts + 1, ts: now }));
    } catch {
      // getItem succeeded but setItem threw (quota, or a profile that permits
      // reads only). Without a recorded attempt the budget cannot advance, so
      // fall back to the same one-per-window marker rather than reloading
      // unbounded.
      if (!claimNoStoreHeal(now)) return false;
    }
    return purgeAndReload();
  } catch (_) {
    return false;
  }
}

function purgeAndReload(): boolean {
  {
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
  }
}

/**
 * Stable Sentry fingerprint for a self-healed stale-chunk load failure.
 * One group, so a spike is legible without the noise of per-URL variants.
 */
const CHUNK_FINGERPRINT = 'stale-chunk-load-selfhealed';

/**
 * Minimal structural view of the Sentry event fields we touch. Declared locally
 * so this helper and its tests need no Sentry SDK types — the real `Event` is
 * structurally assignable to it. Same shape as idbTelemetry's.
 */
export interface MinimalChunkEvent {
  exception?: { values?: Array<{ value?: string }> };
  message?: unknown;
  level?: string;
  fingerprint?: string[];
}

/** Primary error text of an event, lowercased for matching. */
export function chunkEventMessage(event: MinimalChunkEvent): string {
  const v = event.exception?.values?.[0]?.value;
  if (typeof v === 'string') return v.toLowerCase();
  if (typeof event.message === 'string') return event.message.toLowerCase();
  return '';
}

/**
 * Downgrade a stale-chunk load failure to 'warning' with a stable fingerprint.
 *
 * WHY THIS IS NOT AN ERROR. The app already self-heals these: isChunkLoadError
 * above triggers a cache purge and reload, bounded by the attempt window. The
 * cause is environmental — a deploy landed while a tab was open, so the HTML in
 * memory references a chunk hash that no longer exists. Nothing in our code is
 * wrong, and the user is recovered automatically.
 *
 * WHY NOT SILENCE IT. Frequency is the signal. A steady trickle is ordinary
 * deploy churn; a spike means the healer stopped working, or a deploy left the
 * CDN serving HTML for asset URLs (the 2026-08-04 incident that put the
 * missing-asset guard in the middleware). Dropping these would lose the only
 * evidence of either.
 *
 * 'warning' rather than the IDB family's 'info' — deliberately one notch
 * higher. An IDB failure is invisible to the user; this one takes their screen
 * away and reloads it mid-session. It should not page, but it should not be
 * filed with the truly inconsequential either. Mutates and returns the event.
 */
export function downgradeChunkLoadEvent<T extends MinimalChunkEvent>(event: T): T {
  if (isChunkLoadError(chunkEventMessage(event))) {
    event.level = 'warning';
    event.fingerprint = [CHUNK_FINGERPRINT];
  }
  return event;
}
