/**
 * clearUserScopedStorage — the single place that wipes one user's data off a
 * shared device.
 *
 * WHY THIS EXISTS
 * ---------------
 * Sign-out swept `nh_*` by prefix plus a short hand-maintained list. The whole
 * `u*` generation of keys predates that prefix and was never added, so `uFavs`
 * and `uJournal` (among others) survived a sign-out. That is not merely stale
 * local state, because `applyRemoteProgress` UNIONS localStorage into whatever
 * account signs in next:
 *
 *   applyRemoteProgress.ts:168-177  lsGet('uFavs')   → union with remote → write back
 *   applyRemoteProgress.ts:203-207  lsGet('uJournal') → mergeJournals    → write back
 *
 * and `buildProgressSnapshot` then pushes the merged arrays to the NEW user's
 * Firestore document. On a family or library device, user A's saved words ended
 * up permanently in user B's cloud account, on all of B's devices, and in B's SRS
 * queue. The merge is additive by design, so it could not be undone. `if
 * (fp.journal)` is true even for `[]`, so a brand-new account with no remote
 * history inherited them too.
 *
 * Clearing React state was not enough — App.tsx's onSignedOut/onUserChanged
 * already did `setFavs([]); setJWords([])`, and applyRemoteProgress simply
 * re-read localStorage on the next snapshot and put them back.
 *
 * THE RULE THIS ENCODES
 * ---------------------
 * A prefix sweep plus a hand-maintained list is what failed: the list is a place
 * to forget things. So this module owns the whole answer, both call sites use it,
 * and clearUserScopedStorage.test.ts asserts that every user-scoped key the app
 * actually writes appears here. Adding a new per-user key without adding it here
 * fails that test.
 *
 * WHAT IS DELIBERATELY *NOT* CLEARED
 * ----------------------------------
 * Device-level preferences that belong to the browser rather than the account:
 * `darkMode`, reduce-motion, install prompts. Wiping those would make signing out
 * reset someone else's theme, which is not what "clear my data" means.
 */

/**
 * Per-user keys that do NOT start with `nh_` and so are missed by the prefix
 * sweep. Every one of these is written by the app today (verified by grep — dead
 * registry entries like `uFamily`/`uSRS` are deliberately absent so this list
 * cannot rot into fiction).
 */
export const USER_SCOPED_LEGACY_KEYS: readonly string[] = [
  // Synced to Firestore — these are the ones that caused cross-account writes.
  'uFavs',
  'uJournal',
  // Learning state: feeds the mistake-review deck and the streak.
  'uMistakes',
  'uStreak',
  'uFreeze',
  // Per-user progress and history.
  'progress_history',
  'xpCooldown',
  'onboarded',
  'dcDay3',
  'heritageStory',
  'slangVisited',
  // AI tutor: the chosen persona, and the accumulated mistake patterns that
  // DailyPlanCard reads to shape the next plan. Leaving these behind means the
  // incoming user's daily plan is built from the previous user's errors.
  'maja_persona',
  'majaMemory',
  // Auth throttling — per identity, not per device.
  'login_attempts',
];

/** sessionStorage markers that must not survive an account change. */
export const USER_SCOPED_SESSION_KEYS: readonly string[] = [
  'nh_ex_start',
  'nh_checkpoint_level',
  'nh_readlist_filter',
  'nh_session_started',
  'nh_session_category',
  'nh_session_completed',
];

/** Dexie database backing the vocabulary journal screen. */
const JOURNAL_DB = 'NasaHrvatska';

function removeLocal(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    /* storage blocked (SecurityError) — nothing was persisted to clear */
  }
}

/**
 * Remove every trace of the outgoing user from this device.
 *
 * @param uid  the signed-out user's id, so the per-user `uP_<uid>` blob goes too.
 *
 * Every operation is individually guarded: on a storage-blocked profile
 * `Object.keys(localStorage)` throws the same SecurityError as `getItem`, and an
 * unguarded throw here would abort sign-out before it reached the login screen —
 * the exact failure this codebase already hit once.
 */
export function clearUserScopedStorage(uid?: string): void {
  if (uid) removeLocal('uP_' + uid);

  let nhKeys: string[] = [];
  try {
    nhKeys = Object.keys(localStorage).filter((k) => k.startsWith('nh_'));
  } catch {
    /* storage unavailable — nothing was persisted, so nothing to sweep */
  }
  nhKeys.forEach(removeLocal);

  USER_SCOPED_LEGACY_KEYS.forEach(removeLocal);

  USER_SCOPED_SESSION_KEYS.forEach((k) => {
    try {
      sessionStorage.removeItem(k);
    } catch {
      /* sessionStorage sits behind the same permission gate */
    }
  });

  // The journal screen mirrors `uJournal` into IndexedDB, so clearing only
  // localStorage would still show the previous user their predecessor's words.
  // Best-effort and deliberately not awaited: sign-out must not block on it, and
  // a failure here is a display-only leak rather than a cloud write.
  void clearJournalDb();
}

async function clearJournalDb(): Promise<void> {
  try {
    const Dexie = (await import('dexie')).default;
    const db = new Dexie(JOURNAL_DB) as unknown as {
      open: () => Promise<unknown>;
      table: (n: string) => { clear: () => Promise<void> };
      close: () => void;
    };
    await db.open();
    await db.table('journal').clear();
    db.close();
  } catch {
    /* IndexedDB unavailable, blocked, or the table does not exist yet */
  }
}
