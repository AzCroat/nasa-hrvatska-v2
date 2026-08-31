/**
 * Telemetry helpers for the environmental IndexedDB "internal-server" error.
 * Kept in their own module (rather than sentryHelpers.ts) so the unit-tested
 * logic lives in a file with no unrelated history.
 */

/**
 * Environmental IndexedDB errors — failures of the user's device or browser
 * lifecycle, not of our code. Two families, both non-actionable:
 *
 * 1. "An internal error was encountered in the Indexed Database server"
 *    (Chromium's UnknownError DOMException) — flaky/corrupted disk storage,
 *    eviction under pressure, private-mode restrictions, or a WebView IDB bug.
 *
 * 2. "Database is closing" / "The connection is closing" (2026-08-22) — the IDB
 *    connection is torn down while an operation is still in flight, which is
 *    what a page-hide, tab suspend or bfcache eviction looks like from inside
 *    Firebase's _openDb. Ordinary on mobile Safari, where backgrounding the app
 *    suspends the page mid-flush. Reported from production 2026-08-22 as two
 *    high-priority events in the same second — one user, one page-hide.
 *
 *    FIREFOX WORDS THIS FAMILY DIFFERENTLY (2026-08-31), which is why it went
 *    unmatched for nine days. Chromium and WebKit name the database in the
 *    message; Firefox raises a bare InvalidStateError whose text is "An attempt
 *    was made to use an object that is not, or is no longer, usable" — the same
 *    condition (an IDBDatabase or transaction used after teardown) with none of
 *    the words the matcher looked for. Found when CI's Firefox smoke went red on
 *    three unrelated specs at once, all reporting that string, while every
 *    behavioural assertion passed and Chrome's full suite was green. A
 *    browser-specific message in a browser-agnostic matcher is invisible until
 *    the one browser that phrases it differently happens to hit the race.
 *
 *    The name is matched as well as the text, because Firefox's DOMException
 *    carries `name: 'InvalidStateError'` and callers concatenate name onto
 *    message — belt and braces if the wording is ever reworded again.
 *
 * Both surface ASYNCHRONOUSLY from Firebase's persistence layer (Firestore
 * persistentLocalCache / Auth indexedDBLocalPersistence), so the init-time
 * try/catch cascades in firebase.ts cannot catch them and they bubble up as
 * unhandled rejections. Firebase degrades gracefully (Firestore → network,
 * Auth → localStorage) and localStorage is authoritative for progress in this
 * app, so nothing is lost — the user sees nothing.
 *
 * Matches stay deliberately narrow so ACTIONABLE IDB errors keep paging at full
 * priority: QuotaExceeded (we are actually out of space), VersionError (our
 * migration is wrong), ConstraintError (our schema is wrong). "server" appears
 * only in family 1; "closing" and the Firefox InvalidStateError only in family
 * 2. None of the three actionable names contains either phrase, which is what
 * keeps the widening safe — asserted in idbTelemetry.test.ts rather than
 * assumed. Callers pass an already-lowercased msg.
 * KEEP IN SYNC with functions/api/report-error.js IGNORED_SENTRY_PATTERNS.
 */
export function isEnvironmentalIdbError(msg: string): boolean {
  return environmentalIdbKind(msg) !== null;
}

/**
 * Which family an environmental IDB message belongs to, or null if it is not
 * one. Separate from the boolean because the two families get DIFFERENT Sentry
 * fingerprints: lumping them under one group would hide a spike in either. A
 * jump in 'closing' means something changed about our unload/flush timing; a
 * jump in 'server' means devices are failing. Those want different responses.
 */
export function environmentalIdbKind(msg: string): 'server' | 'closing' | null {
  if (msg.includes('indexed database server')) return 'server';
  if (
    msg.includes('database is closing') ||
    msg.includes('connection is closing') ||
    // Firefox's wording for the same teardown race (see family 2 above). Both
    // the message text and the DOMException name are matched; callers build the
    // haystack from message + name, so either one is enough on its own.
    msg.includes('object that is not, or is no longer, usable') ||
    msg.includes('invalidstateerror')
  ) {
    return 'closing';
  }
  return null;
}

/**
 * Stable Sentry fingerprints. The 'server' string is UNCHANGED from when it was
 * the only family — renaming it would split the existing issue's history and
 * lose the frequency baseline it exists to provide.
 */
const IDB_FINGERPRINT = {
  server: 'environmental-indexeddb-server-error',
  closing: 'environmental-indexeddb-closing',
} as const;

/**
 * Minimal structural view of the Sentry event fields we inspect. Declared
 * locally so this helper and its tests don't need the Sentry SDK types — the
 * real `Event` is structurally assignable to it.
 */
export interface MinimalSentryEvent {
  exception?: { values?: Array<{ value?: string }> };
  message?: unknown;
  level?: string;
  fingerprint?: string[];
}

/**
 * Primary error text of a Sentry event, lowercased for matching: the first
 * exception's `value`, else a string `message`, else ''.
 */
export function sentryEventMessage(event: MinimalSentryEvent): string {
  const exceptionValue = event.exception?.values?.[0]?.value;
  if (typeof exceptionValue === 'string') return exceptionValue.toLowerCase();
  if (typeof event.message === 'string') return event.message.toLowerCase();
  return '';
}

/**
 * If `event` is an environmental IndexedDB internal-server error, downgrade it
 * to 'info' with a stable fingerprint — it stops paging as a high-priority
 * issue but is retained so a frequency spike from a real regression still
 * surfaces. Mutates and returns the event. See isEnvironmentalIdbError().
 */
export function downgradeEnvironmentalIdbEvent<T extends MinimalSentryEvent>(event: T): T {
  const kind = environmentalIdbKind(sentryEventMessage(event));
  if (kind) {
    event.level = 'info';
    event.fingerprint = [IDB_FINGERPRINT[kind]];
  }
  return event;
}
