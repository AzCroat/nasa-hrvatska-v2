import { isChunkLoadError, wouldHealChunkError } from './chunkErrors';

/**
 * Browsers known to crash Sentry Replay's DOM snapshotter via content-blocker
 * shims that return non-Element nodes from DOM queries. When this returns
 * false, callers must omit Sentry.replayIntegration() from the integrations
 * array. Tracing and the error SDK still run — only Replay is affected.
 *
 * Keep the message-match defenses in src/main.tsx ignoreErrors and
 * functions/api/report-error.js IGNORED_SENTRY_PATTERNS as belt-and-suspenders
 * for shim browsers we haven't UA-detected yet.
 */
export function shouldEnableSentryReplay(userAgent?: string): boolean {
  const ua = userAgent ?? (typeof navigator !== 'undefined' ? navigator.userAgent : '');
  // DuckDuckGo Mobile (iOS WebKit) — confirmed to break Replay on 2026-05-28.
  // Also matches DDG Desktop, but its user share is small and disabling Replay
  // there is a cheap trade-off vs. UA-detect complexity.
  if (/DuckDuckGo/.test(ua)) return false;
  return true;
}

/**
 * Session Replay records a user's interaction session (DOM mutations, clicks,
 * navigation) — analytics-grade data collection that, unlike crash telemetry,
 * requires the same explicit cookie consent as PostHog before it may run.
 * Consent is stored in localStorage under 'cookie_consent_v1' (see
 * CookieConsent.tsx / analytics.ts); Replay is only permitted once the user has
 * actively accepted. Crash/error reporting itself stays ungated — this gate is
 * specifically for the Replay integration.
 *
 * Takes the already-read consent value so the caller (src/main.tsx, at module
 * load, before React mounts) can use its own SecurityError-safe storage reader.
 */
export function isReplayConsentGranted(consentValue: string | null | undefined): boolean {
  return consentValue === 'accepted';
}

/**
 * Minimal structural view of the Sentry event fields the abort filter inspects.
 * The real Sentry `Event` is structurally assignable to it.
 */
interface AbortFilterEvent {
  exception?: {
    values?: Array<{
      type?: string;
      value?: string;
      mechanism?: { type?: string };
    }>;
  };
}

/**
 * True when the event arrived as an unhandled promise rejection.
 *
 * WHY THIS IS NOT AN EQUALITY CHECK
 * ---------------------------------
 * Both filters below used to compare against the bare string
 * `'onunhandledrejection'`. The browser SDK now emits
 * `'auto.browser.global_handlers.onunhandledrejection'`
 * (@sentry/browser 10.x, integrations/globalhandlers.js), so every one of those
 * comparisons was false in production and BOTH filters were dead — benign
 * aborted fetches and benign Safari sw.js load failures all reached Sentry and
 * paged on the high-priority channel.
 *
 * It went unnoticed because the tests hand-wrote the bare form as a fixture,
 * which proves the matcher parses a shape the SDK never sends. So the suffix
 * match below is paired with a test that reads the string out of the INSTALLED
 * SDK — the point being that the next rename fails CI instead of going quiet.
 *
 * Anchored on the dot so this can only ever widen along the SDK's own
 * `auto.<platform>.<integration>.<hook>` namespacing, and can never start
 * matching a different hook such as `…global_handlers.onerror`.
 */
function isUnhandledRejection(mechanismType: string | undefined): boolean {
  if (!mechanismType) return false;
  return (
    mechanismType === 'onunhandledrejection' || mechanismType.endsWith('.onunhandledrejection')
  );
}

/**
 * True when a Sentry event is a benign AbortError surfaced as an *unhandled
 * promise rejection*. `apiFetch` re-throws AbortError (src/lib/apiFetch.ts), so a
 * fire-and-forget request aborted by SPA navigation or its own timeout escapes
 * as an unhandled rejection — nothing user-facing broke, the request was simply
 * cut short (common on slow iOS in-app WebKit like DuckDuckGo Mobile). Scoped to
 * the `onunhandledrejection` mechanism so an AbortError captured any other way
 * (e.g. an explicit Sentry.captureException, or a real synchronous throw) is
 * still reported.
 */
export function isBenignAbortRejection(event: AbortFilterEvent | null | undefined): boolean {
  const ex = event?.exception?.values?.[0];
  if (!ex) return false;
  const isAbort = ex.type === 'AbortError' || /\bAbortError\b/i.test(ex.value ?? '');
  return isAbort && isUnhandledRejection(ex.mechanism?.type);
}

/**
 * True when a Sentry event is a benign service-worker script-load failure
 * surfaced as an *unhandled promise rejection* — Safari's signature is
 * `SecurityError: Script https://…/sw.js load failed` (DOMException 18),
 * thrown when a privacy setting ("Block all cookies", some private-browsing
 * configurations) or a transient network failure blocks the SW script fetch,
 * typically during the browser's own periodic registration *update* check
 * (which vite-plugin-pwa's onRegisterError does not cover). Nothing
 * user-facing breaks — the app simply runs without offline support — so
 * these must not page anyone. Scoped to the onunhandledrejection mechanism
 * and to the sw.js script specifically; any other SecurityError still reports.
 *
 * 2026-07-25: this filter existed and the events still reached Sentry, because
 * it required a SecurityError. Safari also reports the SAME environmental
 * registration failure as a plain `TypeError: Script https://…/sw.js load
 * failed`, so that variant slipped through. Widened to cover it — but
 * NARROWLY, matching only that exact whole-message shape.
 *
 * Two things stay REPORTED on purpose:
 *   - anything mentioning a MIME type. sw.js served as text/html silently
 *     breaks the SW update flow for every user on that deploy; it is one of
 *     this app's two documented service-worker incidents and is very much
 *     actionable. The explicit guard below means widening the type check can
 *     never swallow it.
 *   - anything not arriving as an unhandled rejection, e.g. an explicit
 *     captureException or a real synchronous throw.
 */
export function isBenignSwLoadRejection(event: AbortFilterEvent | null | undefined): boolean {
  const ex = event?.exception?.values?.[0];
  if (!ex) return false;
  if (!isUnhandledRejection(ex.mechanism?.type)) return false;
  const msg = ex.value ?? '';
  // Actionable — never suppress (production Incident 1).
  if (/mime type/i.test(msg)) return false;
  const isSwLoad =
    /\bsw\.js\b/.test(msg) && /load failed|failed to (fetch|load|register)/i.test(msg);
  if (!isSwLoad) return false;
  const isSecurity = ex.type === 'SecurityError' || /\bSecurityError\b/.test(msg);
  // Safari's TypeError variant of the same environmental failure. Anchored to the
  // whole message so a richer, more specific error cannot match by accident.
  const isEnvTypeError =
    ex.type === 'TypeError' && /^script\s+\S+\s+load failed\.?$/i.test(msg.trim());
  return isSecurity || isEnvTypeError;
}

/**
 * Disposition for a chunk-load-failure event ("Importing a module script
 * failed" and friends — see isChunkLoadError).
 *
 * These events have a self-healer (chunkErrors.reloadWithCachePurge) invoked by
 * every error channel, but the Sentry SDK's global-handler integration captures
 * the error BEFORE those handlers run, so `return true` there never suppressed
 * the SDK event — a working heal still reported to Sentry on every deploy-heavy
 * week (2026-08 weekly digest: 8 of 9 errors were exactly this, "Regressed").
 *
 *   'drop'            — the heal is about to purge + reload this page; the event
 *                       is transient residue of a WORKING heal. Not actionable.
 *   'keep-exhausted'  — the reload budget for this window is spent; this user is
 *                       genuinely stuck on a stale bundle. The only chunk signal
 *                       worth alerting on.
 *   'not-chunk'       — everything else; caller proceeds normally.
 *
 * The budget peek is read-only (see wouldHealChunkError) — beforeSend runs
 * before the heal charges the budget, so consuming it here would double-charge.
 */
export function chunkHealDisposition(
  event: AbortFilterEvent & { message?: string },
): 'drop' | 'keep-exhausted' | 'not-chunk' {
  const ex = event?.exception?.values?.[0];
  const msg = ((ex?.value ?? '') + ' ' + (event?.message ?? '')).toLowerCase();
  if (!isChunkLoadError(msg)) return 'not-chunk';
  // Stale named-import ("importing binding name") heals on its own budget key —
  // mirror the split in main.tsx's window handlers.
  const key = msg.includes('importing binding name') ? 'nh_binding_reload' : 'nh_reload_attempt';
  return wouldHealChunkError(key) ? 'drop' : 'keep-exhausted';
}
