/**
 * syncTelemetry — a name for every way the progress layer can fail.
 *
 * THE DEFECT THIS EXISTS TO CLOSE. `reportError` appeared **zero times** in
 * `useSyncManager.ts` and `firebase.ts`. The subsystem that persists a
 * learner's progress — the one with its own architecture section, its own
 * skill file and four NEVER-DO rules — had no telemetry of any kind. A failed
 * save was a `console.error` at best and `.catch(() => {})` at worst, and
 * `fbSaveProgress`'s own comment says so out loud: it logs the blob size on
 * `permission-denied` so that the 200 KB rule rejection "is diagnosable from a
 * console screenshot". A console screenshot is not a diagnostic; it requires
 * the learner to open DevTools and send a picture, for the failure they are
 * least equipped to notice and most harmed by. "The 100k-XP sync-halt stayed
 * invisible for so long" is in that same comment — this is how.
 *
 * Same class as the two failures this codebase has already closed: the TTS
 * refusal that returned a bare `false` (`audio.ts`), and the feedback path
 * that returned a bare `null` (`aiFailure.ts`). Same shape of answer: a closed
 * vocabulary of causes, one report per cause capped per session, and names
 * rather than values.
 *
 * WHAT IS DELIBERATELY NOT REPORTED, because a report nobody believes is worse
 * than none — the `PUSH_FAIL_MIN_ATTEMPTS` rule applied here:
 *
 *  - **A single `unavailable`.** That is an ordinary offline blip in a PWA, and
 *    localStorage is authoritative, so nothing is lost: the next periodic push
 *    carries it. Reporting it would file a Sentry issue every time a learner
 *    goes through a tunnel, and a reader who learns to ignore `sync_failed`
 *    will ignore the `permission_denied` that matters. It is reported only
 *    after `PERSISTENT_UNAVAILABLE` consecutive failures — thirty minutes of a
 *    signed-in, foregrounded session unable to write, which is no longer a
 *    tunnel.
 *  - **The unload push.** `saveSnapshot(true)` fires as the page is closing and
 *    is expected to lose races. Its localStorage half IS reported, because that
 *    half is what makes the next launch correct.
 *
 * NAMES, NEVER VALUES. Nothing here forwards a snapshot, a learner's text or a
 * uid. The Sentry message is `sync_failed:<stage>:<cause>` — stable, so Sentry
 * groups it — and the sizes that make a rejection diagnosable ride in the
 * free-text context, never in the grouping key.
 */
import { reportError } from './errorReporter';

/** Every way the progress layer is known to fail. Closed on purpose. */
export type SyncFailureCause =
  /** Firestore rules refused the write: blob over 200 KB, a non-monotonic XP,
   *  a CEFR field of the wrong type. The silent halt, and the one that matters
   *  most — it never resolves on its own. */
  | 'permission_denied'
  /** The ID token is gone or was revoked. Every subsequent write fails too. */
  | 'unauthenticated'
  /** Offline or a transient backend blip. Benign once; an incident sustained. */
  | 'unavailable'
  /** Firestore rate/quota limits. */
  | 'resource_exhausted'
  /** Firebase never came up, so nothing was ever going to be written. */
  | 'not_initialized'
  /** localStorage is full. The authoritative store could not be written — the
   *  worst of these, and the only one that loses progress on this device. */
  | 'local_quota'
  /** A remote snapshot arrived and could not be applied. Silent loss on the
   *  READ side, which no save-path guard would ever see. */
  | 'merge_failed'
  /** `apiFetch` could not mint an ID token, so the request went out
   *  unauthenticated and the endpoint answered 401. */
  | 'token_failed'
  | 'unknown';

/** At most this many reports per (stage, cause) per session. */
export const SYNC_REPORT_CAP = 3;

/**
 * Consecutive `unavailable` failures before it stops being "a tunnel".
 * The periodic push runs every 5 minutes, so six is half an hour.
 */
export const PERSISTENT_UNAVAILABLE = 6;

const _reported = new Map<string, number>();

/** Test seam — the cap is per session, and a test suite is one session. */
export function resetSyncTelemetry(): void {
  _reported.clear();
}

/**
 * Map a thrown value or an `{ ok:false, code }` result onto the vocabulary.
 *
 * Firestore codes arrive either bare (`permission-denied`) or namespaced
 * (`firestore/permission-denied`), and `fbSaveProgress` hands back its own
 * `'Firebase not initialized'` message with no code at all, so this reads both
 * the code and the message rather than trusting one.
 *
 * THE MESSAGE LIVES UNDER TWO NAMES. A thrown Error carries it as `message`; a
 * `fbSaveProgress` result carries it as `err` (`{ ok:false, err, code }`).
 * Reading only `message` would classify every no-code result as `unknown` —
 * including `'Firebase not initialized'`, which is the one case where nothing
 * was ever going to be written at all.
 */
export function classifySyncFailure(e: unknown): SyncFailureCause {
  if (!e) return 'unknown';
  const err = e as { code?: unknown; name?: unknown; message?: unknown; err?: unknown };
  const code = typeof err.code === 'string' ? err.code.toLowerCase() : '';
  const name = typeof err.name === 'string' ? err.name : '';
  const rawMsg = typeof err.message === 'string' ? err.message : err.err;
  const msg = typeof rawMsg === 'string' ? rawMsg.toLowerCase() : '';
  const s = typeof e === 'string' ? e.toLowerCase() : '';

  if (name === 'QuotaExceededError' || code.includes('quota-exceeded')) return 'local_quota';
  if (code.includes('permission-denied') || msg.includes('permission')) return 'permission_denied';
  if (code.includes('unauthenticated') || code.includes('auth/')) return 'unauthenticated';
  if (code.includes('resource-exhausted')) return 'resource_exhausted';
  if (code.includes('unavailable') || code.includes('deadline-exceeded') || msg.includes('offline'))
    return 'unavailable';
  if (msg.includes('not initialized') || s.includes('not initialized')) return 'not_initialized';
  return 'unknown';
}

/** A cause that is only worth reporting once it has persisted. */
function _isBenign(cause: SyncFailureCause): boolean {
  return cause === 'unavailable';
}

/**
 * Record a sync-layer failure. Returns whether it actually reported, so a
 * caller (and a test) can tell "suppressed" from "sent" rather than guessing.
 *
 * `consecutive` is how many times this stage has failed in a row — 1 for a
 * one-shot path that does not track it. Only the benign causes read it.
 *
 * `cause` overrides the classifier for the failures that arrive as something
 * other than a Firestore error — a merge that threw, a token that could not be
 * minted. The classifier reads codes it knows; it must not GUESS at ones it
 * does not, so those sites name their own.
 */
export function reportSyncFailure(
  stage: string,
  e: unknown,
  opts: { consecutive?: number; detail?: string; cause?: SyncFailureCause } = {},
): boolean {
  try {
    const cause = opts.cause ?? classifySyncFailure(e);
    const consecutive = opts.consecutive ?? 1;
    if (_isBenign(cause) && consecutive < PERSISTENT_UNAVAILABLE) return false;
    const key = stage + ':' + cause;
    const n = _reported.get(key) ?? 0;
    if (n >= SYNC_REPORT_CAP) return false;
    _reported.set(key, n + 1);
    reportError(
      new Error(`sync_failed:${key}`),
      `sync stage=${stage} cause=${cause} consecutive=${consecutive}` +
        (opts.detail ? ' ' + opts.detail : ''),
      cause,
    );
    return true;
  } catch {
    /* telemetry must never be able to break a save */
    return false;
  }
}
