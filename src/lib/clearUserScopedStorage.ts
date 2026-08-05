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
 * to forget things. So this module owns the whole answer and both call sites use
 * it.
 *
 * The guard test is what keeps the list honest, and it previously claimed more
 * than it checked. It said it asserted that "every user-scoped key the app
 * actually writes appears here"; it only inspected the keys `applyRemoteProgress`
 * reads via `lsGet('…')`. Five user-scoped keys sat outside that narrow window
 * and survived a sign-out for exactly as long as the docstring said they could
 * not. An overstated guarantee is worse than none, because it stops the next
 * person looking.
 *
 * `clearUserScopedStorage.test.ts` now reads ALL of `src/` — reads as well as
 * writes, and through one level of `const KEY = '…'` indirection, because each of
 * those forms hid one of the five — and requires every non-`nh_` key it finds to
 * be classified either here or in NOT_USER_SCOPED_KEYS below. Neither list is a
 * place to forget things any more: a new key that is in neither fails the test.
 *
 * THE `uSR` TRAP — READ THIS BEFORE TRIMMING EITHER LIST
 * -----------------------------------------------------
 * This list used to justify an omission with: "dead registry entries like
 * `uFamily`/`uSRS` are deliberately absent". That is true of `uSRS`, which is an
 * unused constant in constants/storage.ts. But the key `getSR()` actually falls
 * back to is `uSR` — one letter shorter, never written by current code, only
 * read (srs.ts). `nh_sr` was swept by the prefix and `uSR` was not, so the next
 * account to sign in on a legacy device inherited the previous user's entire SRS
 * deck, then pushed it to their own Firestore `srs/{uid}` doc. The audit checked
 * the registry and never checked the read site.
 *
 * The lesson generalises: a key being absent from the constants registry is not
 * evidence that nothing touches it, and a near-miss name is not the same name.
 * Verify against the call site, not against a list of names you expect.
 */

/**
 * Per-user keys that do NOT start with `nh_` and so are missed by the prefix
 * sweep. Every one of these is read or written by the app today, verified at the
 * call site rather than from the constants registry (see the `uSR` trap above).
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
  // Sign-in throttle. NOTE: the annotation here used to read "per identity, not
  // per device", which is not accurate — the key carries no uid and the counter
  // is device-wide, same as `reg_attempts` (which is deliberately NOT swept, see
  // below). Left in place because removing it would change an auth-path
  // behaviour nobody asked to change; the asymmetry is recorded, not endorsed.
  'login_attempts',
  // The legacy SRS deck. `getSR()` falls back to this when `nh_sr` is empty, so
  // leaving it behind hands the whole flashcard deck to the next account — and
  // the review that follows writes it into THEIR Firestore `srs/{uid}`. Same
  // shape as the uFavs/uJournal leak. See "the uSR trap" above for why it was
  // missed. Never written by current code; read-only migration input.
  'uSR',
  // Legacy twin of `nh_placement_done`. The prefix sweep takes `nh_placement_done`
  // and `onboarded`, so this was the single flag still standing between a brand
  // new learner and the placement test: App.tsx only routes to `new-placement`
  // when lc===0 && xp===0 && none of the three are set. The next account was
  // never placed, and never had its level calibrated. applyRemoteProgress writes
  // this one too, so it is effectively synced state.
  'placement_done',
  // Per-topic accuracy. Feeds getWeakTopics() -> InsightsTab and
  // CroatianErrorInsights, and the personalised lesson path — so the incoming
  // user's "your weak areas" panel is built from the previous user's mistakes.
  // Also listed in fbExportUserData, so it would land in their GDPR export.
  // Exactly the reason majaMemory is above.
  'topic_accuracy',
  // The 18+ confirmation for the slang screen. `slangVisited` was swept and the
  // age gate sitting next to it was not: one adult confirming lifted it for
  // whoever signed in next on a family device.
  'slangAgeConfirmed',
  // Drives the comeback bonus (App.tsx compares it against Date.now()). Guarded
  // by stats.xp > 0 so a brand-new account is unaffected, but an existing one
  // gets a bonus computed from the previous user's absence.
  'lastSeen',
];

/**
 * Non-`nh_` keys that are deliberately NOT swept, each with the reason.
 *
 * This exists so the guard test can tell "classified as device-level" apart from
 * "nobody has looked at it yet". Adding a key here is a decision on the record;
 * leaving a new key out of both lists fails the test.
 */
export const NOT_USER_SCOPED_KEYS: readonly string[] = [
  // Device-level preferences — they belong to the browser, not the account.
  // Wiping these would make signing out reset someone else's theme, which is not
  // what "clear my data" means.
  'darkMode',
  'cookieConsent',
  'cookie_consent_v1',
  // Abuse throttles with no uid in the key: they are device-wide by design, and
  // clearing them on sign-out would let a sign-out reset the limiter.
  'contactSubmits',
  'reg_attempts',
  // Transient navigation hint: GradTab sets it, SlangScreen reads it and removes
  // it on the same render. Never outlives the navigation that created it.
  'slangInitSection',
  // Already cleared, just not from here — firebase.ts `cS()` does lsRemove('uS')
  // on both the explicit sign-out and the null-user listener branch.
  'uS',
  // Never written anywhere in src/ — `useSyncManager` only ever reads it, so the
  // backup banner's condition is effectively `!onboarded`. A dead read cannot be
  // left behind by one account for another; it is listed here so the test does
  // not flag it, and noted so the dead branch is not mistaken for live state.
  'fbBackupConfirmed',
  // Guards a one-time backfill of the mistakes deck. Its own comment calls it
  // per-device, but the data it writes (`uMistakes`) is per-user and IS swept,
  // so the next account's deck never backfills. Left as-is deliberately: the
  // intent is muddled rather than plainly wrong, and changing it is a product
  // call, not a leak fix.
  'uMistakesBootstrapped',
  // The per-user progress blob is removed by uid via the `uid` parameter, so the
  // bare prefix the scanner sees here needs no separate entry.
  'uP_',
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
