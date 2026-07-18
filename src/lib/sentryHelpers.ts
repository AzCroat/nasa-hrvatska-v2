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
  return isAbort && ex.mechanism?.type === 'onunhandledrejection';
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
 */
export function isBenignSwLoadRejection(event: AbortFilterEvent | null | undefined): boolean {
  const ex = event?.exception?.values?.[0];
  if (!ex) return false;
  const msg = ex.value ?? '';
  const isSwLoad =
    /\bsw\.js\b/.test(msg) && /load failed|failed to (fetch|load|register)/i.test(msg);
  const isSecurity = ex.type === 'SecurityError' || /\bSecurityError\b/.test(msg);
  return isSwLoad && isSecurity && ex.mechanism?.type === 'onunhandledrejection';
}
