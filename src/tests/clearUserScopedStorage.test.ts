/**
 * clearUserScopedStorage.test.ts — one user's data must not reach another's account.
 *
 * THE BUG
 * -------
 * Sign-out swept `nh_*` by prefix plus a short hand-maintained list. The whole
 * `u*` generation of keys predates that prefix and was never added, so `uFavs`
 * and `uJournal` survived a sign-out — and `applyRemoteProgress` UNIONS
 * localStorage into whatever account signs in next, then `buildProgressSnapshot`
 * pushes the merged arrays to the NEW user's Firestore document.
 *
 * On a family or library device, user A's saved words ended up permanently in
 * user B's cloud account, on all of B's devices, and in B's SRS queue. The merge
 * is additive by design, so it could not be undone.
 *
 * Clearing React state was not enough, and that is what made it look handled:
 * App.tsx's onSignedOut/onUserChanged already did `setFavs([]); setJWords([])`,
 * and applyRemoteProgress simply re-read localStorage on the next snapshot.
 *
 * WHY THE LAST TEST IN THIS FILE MATTERS MOST
 * -------------------------------------------
 * The root cause was not a missing key — it was that the list of keys was a place
 * to forget things. `keeps pace with the app's real user-scoped keys` reads the
 * app's own source and fails if a per-user key is written somewhere but absent
 * from the sweep. Without it, this fix repairs today's leak and permits the next.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import {
  clearUserScopedStorage,
  USER_SCOPED_LEGACY_KEYS,
  NOT_USER_SCOPED_KEYS,
  USER_SCOPED_SESSION_KEYS,
  NOT_USER_SCOPED_SESSION_KEYS,
  DEVICE_SESSION_KEYS,
} from '../lib/clearUserScopedStorage';

/** Everything user A leaves behind on a shared device. */
function seedUserA(): void {
  localStorage.setItem('uFavs', JSON.stringify([{ hr: 'kuća', en: 'house' }]));
  localStorage.setItem('uJournal', JSON.stringify([{ hr: 'more', en: 'sea' }]));
  localStorage.setItem('uMistakes', JSON.stringify(['pas']));
  localStorage.setItem('uStreak', JSON.stringify({ count: 40, last: '2026-08-03' }));
  localStorage.setItem('progress_history', JSON.stringify([{ d: '2026-08-01', xp: 120 }]));
  localStorage.setItem('onboarded', 'true');
  localStorage.setItem('xpCooldown', JSON.stringify({ flash: '2026-08-03' }));
  localStorage.setItem('nh_streak_days', JSON.stringify({ '2026-08-03': true }));
  localStorage.setItem('uP_a@example.com', JSON.stringify({ xp: 5000 }));
  // Device-level preference — belongs to the browser, not the account.
  localStorage.setItem('darkMode', 'true');
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});
afterEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

describe('clearUserScopedStorage', () => {
  it('the premise holds: the seed really is present before the sweep', () => {
    // Without this, "the key is gone" below could pass because it was never set.
    seedUserA();
    expect(localStorage.getItem('uFavs')).not.toBeNull();
    expect(localStorage.getItem('uJournal')).not.toBeNull();
  });

  it('removes the two keys that were written into the next account', () => {
    seedUserA();
    clearUserScopedStorage('a@example.com');

    // These are the ones applyRemoteProgress unions into the incoming account
    // and progressSnapshot then pushes to that account's Firestore document.
    expect(localStorage.getItem('uFavs')).toBeNull();
    expect(localStorage.getItem('uJournal')).toBeNull();
  });

  it('removes every other per-user key, including the uP_<uid> blob', () => {
    seedUserA();
    clearUserScopedStorage('a@example.com');

    for (const k of ['uMistakes', 'uStreak', 'progress_history', 'onboarded', 'xpCooldown']) {
      expect(localStorage.getItem(k)).toBeNull();
    }
    expect(localStorage.getItem('nh_streak_days')).toBeNull();
    expect(localStorage.getItem('uP_a@example.com')).toBeNull();
  });

  it('leaves device-level preferences alone', () => {
    // Signing out must not reset the theme for whoever uses the browser next.
    seedUserA();
    clearUserScopedStorage('a@example.com');
    expect(localStorage.getItem('darkMode')).toBe('true');
  });

  it('clears the session markers that would mis-attribute an activity', () => {
    sessionStorage.setItem('nh_session_started', 'speaking');
    sessionStorage.setItem('nh_ex_start', '123');
    clearUserScopedStorage();
    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(sessionStorage.getItem('nh_ex_start')).toBeNull();
  });

  it('does not throw when storage is blocked — sign-out must still complete', () => {
    // On a supervised/blocked profile Object.keys(localStorage) throws the same
    // SecurityError as getItem. An unguarded throw here aborts sign-out before it
    // reaches the login screen — a failure this codebase has already hit once.
    const boom = () => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    };
    vi.stubGlobal('localStorage', {
      getItem: boom,
      setItem: boom,
      removeItem: boom,
      clear: boom,
      key: boom,
      length: 0,
    });
    expect(() => clearUserScopedStorage('a@example.com')).not.toThrow();
    vi.unstubAllGlobals();
  });

  it('is idempotent', () => {
    seedUserA();
    clearUserScopedStorage('a@example.com');
    expect(() => clearUserScopedStorage('a@example.com')).not.toThrow();
    expect(localStorage.getItem('uFavs')).toBeNull();
  });
});

describe('both account-exit paths use the shared sweep', () => {
  it('sign-out and account-switch both call it', () => {
    // The bug was that these two diverged: sign-out had a hand-maintained list
    // and the switch path cleared React state only.
    expect(readFileSync('src/hooks/useAuth.ts', 'utf8')).toMatch(/clearUserScopedStorage\(/);
    const app = readFileSync('src/App.tsx', 'utf8');
    expect(app).toMatch(/onSignedOut\(\)[\s\S]{0,600}clearUserScopedStorage\(/);
    expect(app).toMatch(/onUserChanged\(\)[\s\S]{0,700}clearUserScopedStorage\(/);
  });
});

describe('the sweep keeps pace with the app’s real user-scoped keys', () => {
  it('every non-nh_ key applyRemoteProgress reads from localStorage is swept', () => {
    // applyRemoteProgress is the exact mechanism that turned leftover local data
    // into a cross-account Firestore write, so anything it reads back out of
    // localStorage and merges MUST be cleared when the account changes. This
    // reads the real source, so a newly-merged key that nobody added to the sweep
    // fails here instead of silently leaking.
    const src = readFileSync('src/lib/applyRemoteProgress.ts', 'utf8');
    const read = new Set<string>();
    for (const m of src.matchAll(/lsGet\('([^']+)'\)/g)) read.add(m[1]!);

    // Non-vacuity: if the regex ever stops matching, this test says nothing.
    expect(read.size).toBeGreaterThan(3);

    const swept = new Set<string>(USER_SCOPED_LEGACY_KEYS);
    const missed = [...read].filter((k) => !k.startsWith('nh_') && !swept.has(k));
    expect(missed).toEqual([]);
  });
});

/**
 * The check above is the one that shipped with the original fix, and it is
 * narrower than it looked: it only sees keys `applyRemoteProgress` READS via a
 * `lsGet('literal')`. Five user-scoped keys lived outside that window and
 * survived a sign-out anyway — one per blind spot:
 *
 *   uSR               only ever read, and from srs.ts, not applyRemoteProgress
 *   topic_accuracy    reached through `const KEY = 'topic_accuracy'`
 *   placement_done    written by applyRemoteProgress (_safeSet), never read there
 *   slangAgeConfirmed only touched from a component
 *   lastSeen          only touched from App.tsx
 *
 * So this pass reads all of src/, follows reads AND writes, and resolves one
 * level of const indirection. Every non-`nh_` key it finds must be classified in
 * one of the two exported lists — a key in neither is the failure.
 */
describe('every non-nh_ storage key in the app is classified', () => {
  const STORAGE_CALL =
    /(?:localStorage\.(?:getItem|setItem|removeItem)|lsGet|lsSet|lsRemove|_safeSet)\(\s*([A-Za-z_$][\w$]*|'[^']*')/g;

  function collectKeys(): Map<string, string> {
    const files = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
      (f) => !f.includes('/tests/') && !f.includes('.test.'),
    );
    const found = new Map<string, string>();
    for (const file of files) {
      // Strip comments first. Prose in this very file documents the calls it is
      // describing (`lsGet('…')`), and a scanner that reads its own commentary
      // reports keys nothing executes.
      const src = readFileSync(file, 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
      // One level of indirection: `const KEY = 'topic_accuracy'` then
      // `localStorage.getItem(KEY)`. Without this the scan misses adaptive.ts
      // and both auth throttles.
      const consts = new Map<string, string>();
      for (const m of src.matchAll(
        /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*'([^']+)'/g,
      ))
        consts.set(m[1]!, m[2]!);
      for (const m of src.matchAll(STORAGE_CALL)) {
        const arg = m[1]!;
        const key = arg.startsWith("'") ? arg.slice(1, -1) : consts.get(arg);
        if (key && !found.has(key)) found.set(key, file);
      }
    }
    return found;
  }

  it('the scan actually finds the keys it is supposed to police', () => {
    // Non-vacuity, and specifically for each blind spot above: if the regex or
    // the const resolution silently stops working, an empty "missed" list below
    // would look like a pass.
    const keys = collectKeys();
    expect(keys.size).toBeGreaterThan(40);
    for (const k of ['uSR', 'topic_accuracy', 'placement_done', 'slangAgeConfirmed', 'lastSeen'])
      expect([...keys.keys()]).toContain(k);
    // Proves the const-indirection branch is load-bearing, not decoration.
    expect(keys.get('topic_accuracy')).toContain('adaptive');
  });

  it('leaves nothing unclassified', () => {
    const classified = new Set<string>([...USER_SCOPED_LEGACY_KEYS, ...NOT_USER_SCOPED_KEYS]);
    const unclassified = [...collectKeys()]
      .filter(([k]) => !k.startsWith('nh_') && !classified.has(k))
      .map(([k, file]) => `${k} (${file})`);
    // A new non-nh_ key must be a deliberate decision: swept as user data, or
    // listed as not-user-scoped with a reason. Neither is not an option.
    expect(unclassified).toEqual([]);
  });

  it('the two lists do not disagree with each other', () => {
    const swept = new Set<string>(USER_SCOPED_LEGACY_KEYS);
    expect(NOT_USER_SCOPED_KEYS.filter((k) => swept.has(k))).toEqual([]);
  });
});

/**
 * THE SESSIONSTORAGE HALF WAS NEVER DERIVED, AND IT READ AS COVERED.
 *
 * Everything above this point polices localStorage: a prefix sweep plus a list
 * the scan above keeps honest. sessionStorage was six literals in
 * USER_SCOPED_SESSION_KEYS with nothing counting what it missed — the list-length
 * trap, one file below the place that documents it.
 *
 * Fifteen live keys sat outside those six, and every one of them is
 * `nh_`-prefixed, which is precisely why the gap survived: the prefix sweep runs
 * over `localStorage` only, so the names read as covered. Two moved CREDIT
 * between accounts on a MOUNT — `nh_plan_pending_idx` (DailyPlanCard — since
 * DELETED as unreachable, so that vector is gone; kept here as the record of
 * what the scan is for, on Home,
 * the incoming learner's first screen) and `nh_grammar_unit_pending` +
 * `nh_grammar_unit_completed` (GrammarTrackScreen) — writing a done-marker into
 * the next account's localStorage. Device-local, NOT a cloud write: neither
 * done-marker reaches Firestore, and the difference from the `uFavs` leak above
 * matters, so see the scope paragraph in clearUserScopedStorage.ts rather than
 * reading this as the same severity.
 *
 * The sweep is now the same prefix rule as localStorage, so this scan's job is
 * the mirror image of the one above: find every sessionStorage key the app
 * touches and require it to be classified.
 */
describe('every sessionStorage key in the app is classified', () => {
  /**
   * `ss*` are the wrappers in lib/safeStorage; raw `sessionStorage.*` calls are
   * still scattered through the components. `reloadWithCachePurge` and
   * `wouldHealChunkError` are here because their key arrives as a PARAMETER —
   * `chunkErrors.ts` never names it — so a scan that only reads the storage call
   * cannot see `nh_reload_attempt` or `nh_binding_reload` at all, and those are
   * two of the three keys that must NOT be swept.
   *
   * The `[\w$]*` prefix on the helper names is load-bearing and was found by
   * this test failing: main.tsx calls the local wrapper `_reloadWithCachePurge`,
   * and `\b` does not match between `_` and `r`, so a word-boundary match saw
   * four of the five call sites and missed the only one that names
   * `nh_binding_reload`.
   */
  const SESSION_CALL =
    /(?:sessionStorage\.(?:getItem|setItem|removeItem)|\bss(?:Get|Set|Remove)|[\w$]*(?:reloadWithCachePurge|wouldHealChunkError))\(\s*([A-Za-z_$][\w$]*|'[^']*'|`[^`]*`)/g;

  /** A template-literal key contributes its static prefix: `nh_story_img_${…}`. */
  const literal = (raw: string): string | undefined => {
    if (raw.startsWith("'")) return raw.slice(1, -1);
    if (raw.startsWith('`')) {
      const body = raw.slice(1, -1);
      const stop = body.indexOf('${');
      return stop === -1 ? body : body.slice(0, stop);
    }
    return undefined;
  };

  function collectSessionKeys(): Map<string, string> {
    const files = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
      (f) =>
        !f.includes('/tests/') &&
        !f.includes('.test.') &&
        // The two generic wrappers take the key as a parameter; scanning them
        // yields the parameter NAME, never a key.
        !f.endsWith('safeStorage.ts') &&
        !f.endsWith('chunkErrors.ts') &&
        // …and the sweep itself, which removes keys it is handed.
        !f.endsWith('clearUserScopedStorage.ts'),
    );
    const found = new Map<string, string>();
    for (const file of files) {
      // Comments first, for the same reason as the localStorage scan: the prose
      // in these files names the very keys it describes.
      const src = readFileSync(file, 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
      const consts = new Map<string, string>();
      for (const m of src.matchAll(
        /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*(['`][^'`]*['`])/g,
      )) {
        const v = literal(m[2]!);
        if (v) consts.set(m[1]!, v);
      }
      for (const m of src.matchAll(SESSION_CALL)) {
        const key = literal(m[1]!) ?? consts.get(m[1]!);
        if (key && !found.has(key)) found.set(key, file);
      }
    }
    return found;
  }

  it('the scan finds the keys it is supposed to police, including the hidden shapes', () => {
    const keys = [...collectSessionKeys().keys()];
    expect(keys.length).toBeGreaterThan(15);
    // One per shape that hid a key, so a silent regression in any branch of the
    // scanner shows up here rather than as an empty "unclassified" list:
    //   plain literal · const indirection · `'prefix' + x` · template prefix ·
    //   threaded parameter.
    for (const k of [
      // Plain literal. This was `nh_plan_pending_idx` (DailyPlanCard) until that
      // component was deleted as unreachable — a positive control that lives in
      // the corpus dies with the corpus, so prefer one in a file the app
      // actually reaches.
      'nh_ex_start',
      'nh_ver_reload',
      'nh_last_scr_',
      'nh_story_img_',
      'nh_reload_attempt',
    ])
      expect(keys).toContain(k);
  });

  it('leaves nothing unclassified', () => {
    // `nh_` is the sweep; anything outside it must be a recorded decision.
    const classified = new Set<string>([
      ...USER_SCOPED_SESSION_KEYS,
      ...NOT_USER_SCOPED_SESSION_KEYS,
    ]);
    const unclassified = [...collectSessionKeys()]
      .filter(([k]) => !k.startsWith('nh_') && !classified.has(k))
      .map(([k, file]) => `${k} (${file})`);
    expect(unclassified).toEqual([]);
  });

  it('the exemptions are honest in both directions', () => {
    // An exemption for a key nothing touches guards nothing while suspending the
    // rule — the `idioms` failure. Checked as a set so an empty list cannot make
    // this register no assertions at all.
    const touched = new Set(collectSessionKeys().keys());
    expect(DEVICE_SESSION_KEYS.length).toBeGreaterThan(0);
    expect(DEVICE_SESSION_KEYS.filter((k) => !touched.has(k))).toEqual([]);
    expect(NOT_USER_SCOPED_SESSION_KEYS.filter((k) => !touched.has(k))).toEqual([]);
    // The lists must not contradict one another.
    expect(DEVICE_SESSION_KEYS.filter((k) => USER_SCOPED_SESSION_KEYS.includes(k))).toEqual([]);
  });
});

describe('an account change cannot hand the next learner credit', () => {
  it('drops the daily-plan pending index', () => {
    // DailyPlanCard's mount effect turns this into markDone(idx) — on Home, the
    // first screen the incoming learner sees. It is written when an activity is
    // OPENED, so user A merely tapping one and signing out ticked it off B's plan.
    sessionStorage.setItem('nh_plan_pending_idx', '3');
    clearUserScopedStorage('a@example.com');
    expect(sessionStorage.getItem('nh_plan_pending_idx')).toBeNull();
  });

  it('drops the grammar-unit completion handoff', () => {
    // GrammarTrackScreen's mount effect: completed === 'true' && pending →
    // markDone(pending), which is a unit ticked off in the next account.
    sessionStorage.setItem('nh_grammar_unit_completed', 'true');
    sessionStorage.setItem('nh_grammar_unit_pending', 'a1-questions');
    clearUserScopedStorage('a@example.com');
    expect(sessionStorage.getItem('nh_grammar_unit_completed')).toBeNull();
    expect(sessionStorage.getItem('nh_grammar_unit_pending')).toBeNull();
  });

  it('drops the rest of the outgoing learner’s session state', () => {
    // Not credit, but still one account's state rendered to another: a resumed
    // flashcard position, a generated level quiz, the tab the previous user was
    // last on.
    for (const k of ['nh_flash_resume', 'nh_level_quiz', 'nh_last_scr_learn', 'nh_cloze_topic'])
      sessionStorage.setItem(k, 'x');
    clearUserScopedStorage('a@example.com');
    for (const k of ['nh_flash_resume', 'nh_level_quiz', 'nh_last_scr_learn', 'nh_cloze_topic'])
      expect(sessionStorage.getItem(k)).toBeNull();
  });

  /**
   * The overshoot this fix nearly shipped. These three counters cap consecutive
   * reloads per session; resetting them on sign-out buys a tab on a stale bundle
   * two more reloads, then two more.
   *
   * NAMED, NOT ITERATED. The first draft looped over DEVICE_SESSION_KEYS and was
   * decorative: deleting `nh_reload_attempt` from that list left the suite green,
   * because the test simply stopped testing the key it no longer contained. A
   * test that draws its cases from the list under test cannot police the list.
   */
  const RELOAD_BREAKERS = ['nh_ver_reload', 'nh_reload_attempt', 'nh_binding_reload'];

  it.each(RELOAD_BREAKERS)('keeps %s — it is about the build, not the learner', (k) => {
    sessionStorage.setItem(k, '{"n":2}');
    clearUserScopedStorage('a@example.com');
    expect(sessionStorage.getItem(k)).toBe('{"n":2}');
  });

  /**
   * THE THREE ASSERTIONS ABOVE WERE TRUE AND PRODUCTION DID THE OPPOSITE.
   *
   * They call `clearUserScopedStorage` on its own. Both account-exit handlers
   * ran `sessionStorage.clear()` on the line after it returned, so every
   * exemption above was undone on every real sign-out and every account switch —
   * a unit test of a sweep cannot see what its caller does two lines later, and
   * this file is the one that had most reason to look.
   *
   * So the preservation is asserted where it is actually decided: in the
   * handlers. Matched as a bare call because that is the shape that defeats the
   * sweep no matter which file it appears in, over the WHOLE of src/ rather than
   * App.tsx alone — a third exit path added tomorrow is the same defect.
   *
   * COMMENTS ARE STRIPPED, and this guard failed on its own first run without
   * it: the fix necessarily leaves prose behind NAMING the call it forbids, in
   * both files it was removed from, so an unstripped match reports the
   * explanation as the offence. The same strip is load-bearing in the dangerous
   * direction elsewhere in this repo; here it is what makes the rule writable
   * down at all.
   */
  it('no account-exit path blanket-clears sessionStorage after the sweep', () => {
    const strip = (src: string) =>
      src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    const offenders = globSync('src/**/*.{ts,tsx,js,jsx}')
      .filter((f) => !f.includes('/tests/') && !f.includes('.test.') && !f.includes('__tests__'))
      .filter((f) => /sessionStorage\s*\.\s*clear\s*\(/.test(strip(readFileSync(f, 'utf8'))));
    expect(offenders).toEqual([]);
  });

  it('and that guard can still see a real one', () => {
    // The strip above is the kind of step that can silently swallow the subject
    // along with the prose. A positive control costs one line and is the only
    // reason the assertion above means anything.
    const strip = (src: string) =>
      src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    expect(/sessionStorage\s*\.\s*clear\s*\(/.test(strip('  sessionStorage.clear();'))).toBe(true);
  });

  it('the sweep is as wide as the clear it replaced', () => {
    // Deleting the blanket clear must not quietly change which NON-`nh_` keys
    // survive a sign-out — third-party session state included. This is the half
    // that makes the removal behaviour-preserving, and without it the fix would
    // be a silent scope change wearing a leak fix's clothes.
    sessionStorage.setItem('firebase:pendingRedirect:demo', 'x');
    sessionStorage.setItem('sw-reload-count', '2');
    clearUserScopedStorage('a@example.com');
    expect(sessionStorage.getItem('firebase:pendingRedirect:demo')).toBeNull();
    expect(sessionStorage.getItem('sw-reload-count')).toBeNull();
  });

  it('and those three are exactly the exemptions', () => {
    // So a fourth exemption has to be argued for here too, rather than added to
    // the list and inheriting this file's silence.
    expect([...DEVICE_SESSION_KEYS].sort()).toEqual([...RELOAD_BREAKERS].sort());
  });

  it('still clears the markers the original list covered', () => {
    sessionStorage.setItem('nh_session_started', 'speaking');
    sessionStorage.setItem('nh_ex_start', '123');
    clearUserScopedStorage();
    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(sessionStorage.getItem('nh_ex_start')).toBeNull();
  });
});

describe('the keys that survived the previous sweep are gone', () => {
  it('clears the SRS fallback that handed the next account the whole deck', () => {
    // getSR() reads `uSR` when `nh_sr` is empty, so leaving it behind is not
    // stale local state — the next user studies these cards and syncs them into
    // their own srs/{uid} document.
    localStorage.setItem('uSR', JSON.stringify({ kuća: { w: 3 } }));
    localStorage.setItem('nh_sr', JSON.stringify({ more: { w: 1 } }));
    clearUserScopedStorage('a@example.com');
    expect(localStorage.getItem('uSR')).toBeNull();
    expect(localStorage.getItem('nh_sr')).toBeNull();
  });

  it('clears the flags that decided the next learner never gets placed', () => {
    localStorage.setItem('placement_done', 'true');
    localStorage.setItem('onboarded', 'true');
    localStorage.setItem('nh_placement_done', 'true');
    clearUserScopedStorage('a@example.com');
    // App.tsx routes a 0-XP learner to `new-placement` only when all three are
    // absent, so any one surviving is enough to skip placement entirely.
    for (const k of ['placement_done', 'onboarded', 'nh_placement_done'])
      expect(localStorage.getItem(k)).toBeNull();
  });

  it('clears adaptive accuracy, the age gate, and the comeback timestamp', () => {
    localStorage.setItem('topic_accuracy', JSON.stringify({ padezi: { attempts: 9, correct: 2 } }));
    localStorage.setItem('slangAgeConfirmed', 'true');
    localStorage.setItem('lastSeen', String(Date.now()));
    clearUserScopedStorage('a@example.com');
    for (const k of ['topic_accuracy', 'slangAgeConfirmed', 'lastSeen'])
      expect(localStorage.getItem(k)).toBeNull();
  });

  it('still leaves the deliberate exclusions alone', () => {
    // The fix must not overshoot into device-level state.
    localStorage.setItem('darkMode', 'true');
    localStorage.setItem('cookie_consent_v1', 'accepted');
    localStorage.setItem('contactSubmits', JSON.stringify([1, 2]));
    localStorage.setItem('reg_attempts', JSON.stringify({ count: 3, since: 1 }));
    clearUserScopedStorage('a@example.com');
    expect(localStorage.getItem('darkMode')).toBe('true');
    expect(localStorage.getItem('cookie_consent_v1')).toBe('accepted');
    expect(localStorage.getItem('contactSubmits')).not.toBeNull();
    expect(localStorage.getItem('reg_attempts')).not.toBeNull();
  });
});
