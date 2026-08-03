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
import { readFileSync } from 'node:fs';
import { clearUserScopedStorage, USER_SCOPED_LEGACY_KEYS } from '../lib/clearUserScopedStorage';

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
