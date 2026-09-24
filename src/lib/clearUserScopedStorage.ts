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
 * ALL OF THAT WAS ABOUT localStorage, AND THAT IS THE NEXT THING THAT WAS WRONG.
 * sessionStorage was swept by a hand-written list of six with nothing counting
 * what it missed — the list-length trap, sitting immediately below the paragraph
 * that describes it. Fifteen live keys were outside it and two of them carried
 * CREDIT into the next account. Both halves are derived now; see
 * DEVICE_SESSION_KEYS below for what that found and what must NOT be swept.
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

/**
 * sessionStorage: EVERYTHING except the keys below.
 *
 * Wider than the localStorage rule on purpose. It was the same `nh_` prefix rule
 * until the exemptions turned out to be undone by a blanket
 * `sessionStorage.clear()` at both call sites; absorbing that clear is what let
 * it be deleted without changing which third-party keys survive a sign-out.
 *
 * THIS HALF WAS A HAND-MAINTAINED LIST OF SIX, AND IT LOOKED COVERED.
 * localStorage is swept by prefix plus a derived list that reads all of `src/`;
 * sessionStorage was six literals nothing counted. Fifteen keys sat outside
 * them, every one `nh_`-prefixed — which is why nobody looked: the prefix
 * sweep runs over `localStorage` only, so a name that reads as covered was not.
 *
 * Two of the fifteen did not merely go stale, they moved CREDIT between
 * accounts, and both fire on a mount rather than on some rare path:
 *
 *   nh_plan_pending_idx   DailyPlanCard writes it when the learner opens a plan
 *                         activity and marks that activity DONE when the card
 *                         next mounts. The card is on Home — the first screen
 *                         the incoming learner sees — so user A opening an
 *                         activity and signing out ticked it off B's plan.
 *                         The launch site's own comment shows the author
 *                         reasoning about exactly one way a pending index can
 *                         wrongly credit ("cleared on page refresh, so if the
 *                         target screen errors … NOT wrongly marked done"); an
 *                         account change is a second way, and it does not
 *                         refresh.
 *   nh_grammar_unit_*     the same shape on GrammarTrackScreen's mount effect:
 *                         `completed` + `pending` → markDone(pending).
 *
 * That is NEVER-DO 14 — crediting work the learner could not have done — in the
 * one place where the work was not merely undone but someone else's.
 *
 * SCOPE, STATED EXACTLY, BECAUSE THE FIRST DRAFT OF THIS PARAGRAPH OVERSTATED
 * IT. Both markers are written and read entirely on the device: `markDone`
 * writes `nh_plan_done_<date>` and `nh_grammar_track_done`, and NEITHER reaches
 * Firestore — the first is not in `buildProgressSnapshot` at all, and the second
 * is shadowed there by a boolean of the same name (see below). So this is one
 * learner's device showing another learner credit they did not earn, not a
 * cross-account cloud write like the `uFavs` leak above. The distinction is the
 * difference between "wrong on this device until it is re-derived" and
 * "permanent, on every device, and un-undoable", and the earlier wording claimed
 * the second.
 *
 * FOUND WHILE CHECKING THAT CLAIM, AND NOT FIXED HERE: `nh_grammar_track_done`
 * holds a JSON ARRAY of completed unit ids (GrammarTrackScreen `PROGRESS_KEY +
 * 'done'`), while `buildProgressSnapshot` reads the same key as
 * `lsGet(...) === 'true'` and `applyRemoteProgress` writes the literal `'true'`
 * back into it. One key, two shapes: the grammar track's real progress has
 * therefore never synced, and were the flag ever true on the wire the apply
 * would overwrite the array with `'true'`, which `getProgress()` parses to a
 * boolean and the header renders as `NaN%`. It cannot fire from current code —
 * the snapshot can only ever send `false`, because `'["a1-questions"]' ===
 * 'true'` is false — so it is a dead field shadowing a live one, which is a sync
 * four-point change and belongs in its own commit, not in a leak fix.
 *
 * So the list is no longer the mechanism. What remains is an EXEMPTION list —
 * the only thing a sign-out now spares — so adding a key here is a decision on
 * the record, and the guard test checks it in both staleness directions.
 *
 * AND THE EXEMPTIONS BELOW WERE DECORATIVE FOR AS LONG AS THEY EXISTED.
 * Both call sites ran `sessionStorage.clear()` on the line after this function
 * returned — App.tsx's `onSignedOut` and `onUserChanged`, the only two paths a
 * user leaves by — so all three reload-loop breakers went anyway, on every
 * sign-out and every account switch. The guard test asserted the preservation by
 * calling this function ON ITS OWN, which is exactly the component-test /
 * wiring-test split this codebase keeps rediscovering: a unit test of a sweep
 * cannot see what the caller does two lines later.
 *
 * The harm is bounded and worth stating exactly rather than at its strongest:
 * the budgets are 2 reloads per session (`nh_ver_reload`, reset to 0 whenever
 * the running build is current) and 2 per 30-minute window (the chunk-error
 * pair). So a sign-out did not re-arm an unbounded loop — it bought the tab two
 * more reloads, one of which purges caches. That still lands on the learner who
 * signed out BECAUSE the app was misbehaving, which is the one learner holding a
 * spent budget.
 *
 * The fix is here rather than at the call sites: the sweep widened to every
 * session key that is not a device key, so it does everything the blanket clear
 * did, and the blanket clear is gone. The delta against the old behaviour is
 * exactly those three keys.
 */
export const DEVICE_SESSION_KEYS: readonly string[] = [
  // The version-mismatch reload counter (main.tsx `_VER_RELOAD_KEY`), capped at
  // 2 consecutive reloads per session so a stale bundle can never loop. It
  // describes THIS TAB's relationship to the deployed build, not the learner.
  // Clearing it on sign-out would re-arm the loop it exists to break — a
  // sign-out on a stale build would buy two more reloads, then two more.
  'nh_ver_reload',
  // The chunk-error attempt counters `chunkErrors.ts` reads and writes
  // (`reloadWithCachePurge` / `wouldHealChunkError`), same cap, same reason.
  // These two are the reason this file measures before it sweeps: they reach
  // sessionStorage as a PARAMETER, threaded from five call sites, so a scan for
  // key-shaped literals at the storage call cannot see them. A prefix sweep
  // written without looking would have quietly weakened the loop breaker on
  // three keys while fixing a leak on two.
  'nh_reload_attempt',
  'nh_binding_reload',
];

/**
 * Non-`nh_` sessionStorage keys, classified so the guard test can tell "decided"
 * from "nobody has looked at it yet" — the same role NOT_USER_SCOPED_KEYS plays
 * for localStorage.
 *
 * NOTE THE ASYMMETRY WITH localStorage: being listed here does NOT spare a key.
 * The session sweep takes everything but DEVICE_SESSION_KEYS, so these two are
 * cleared like any other — which is what the blanket clear did to them before,
 * so nothing changed for them. Only DEVICE_SESSION_KEYS exempts.
 */
export const NOT_USER_SCOPED_SESSION_KEYS: readonly string[] = [
  // Legacy service-worker reload guards. main.tsx only ever REMOVES these (they
  // blocked SW updates after 3 reloads in an older scheme) and nothing in the
  // app writes them, so there is nothing one account can leave for another.
  'sw-reload-count',
  'sw-reloaded-at',
];

/**
 * User-scoped sessionStorage keys — the sessionStorage twin of
 * USER_SCOPED_LEGACY_KEYS.
 *
 * Empty today, and since the sweep widened to every non-device key it is also
 * REDUNDANT: a future user-scoped key is swept whether or not it is listed here.
 * Kept rather than deleted because the guard test uses it to assert the two
 * lists cannot contradict each other — a key cannot be both device-level and
 * user-scoped — and because listing one costs nothing if the prefix rule ever
 * comes back.
 */
export const USER_SCOPED_SESSION_KEYS: readonly string[] = [];

/** Dexie database backing the vocabulary journal screen. */
const JOURNAL_DB = 'NasaHrvatska';

function removeLocal(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    /* storage blocked (SecurityError) — nothing was persisted to clear */
  }
}

function removeSession(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {
    /* sessionStorage sits behind the same permission gate */
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

  // EVERY session key except the loop breakers — not just `nh_`. Both call sites
  // used to follow this function with a blanket `sessionStorage.clear()`, which
  // is where the DEVICE_SESSION_KEYS exemptions were actually being undone. The
  // clear is gone, so this sweep has to be exactly as wide as it was, or a
  // sign-out would start leaving behind whatever Firebase, Sentry and PostHog
  // keep in sessionStorage — a behaviour change nobody asked for, smuggled in
  // under a leak fix.
  let sessionKeys: string[] = [];
  try {
    sessionKeys = Object.keys(sessionStorage).filter((k) => !DEVICE_SESSION_KEYS.includes(k));
  } catch {
    /* sessionStorage sits behind the same permission gate as localStorage */
  }
  [...sessionKeys, ...USER_SCOPED_SESSION_KEYS].forEach(removeSession);

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
