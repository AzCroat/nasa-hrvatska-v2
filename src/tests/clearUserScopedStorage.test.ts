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
