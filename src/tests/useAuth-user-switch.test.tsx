/**
 * useAuth-user-switch.test.tsx — a different account taking over the tab must
 * not inherit the previous account's progress.
 *
 * THE BUG
 * -------
 * The auth listener tracked `earlyRestored` — "did we restore something" — but
 * never WHOSE. So it could not tell "the session I already restored" from "a
 * different person just signed in".
 *
 * Reachable across tabs, which is ordinary use on a shared device. Auth persists
 * to indexedDB/localStorage, so signing out and in as someone else in tab 2
 * broadcasts to tab 1. Tab 1 receives the null first, but the listener's
 * `if (earlyRestored) return` deliberately keeps the local session — that guard
 * exists so a spurious offline null does not wipe a working session — so tab 1
 * never resets. Tab 1 then receives the NEW user, and nothing reset stats:
 * `earlyRestored` was still true from tab 1's own mount, so the local-restore
 * branch was skipped and the eventual isHydrate dispatch merged the new
 * account's stats into the OLD account's React state.
 *
 * That merge is additive by design (Math.max on counters, unions on arrays), so
 * the previous user's XP, badges and visited screens landed in this account,
 * were written to their blob, and synced to Firestore. Additive means there is
 * no later merge that can undo it.
 *
 * The fix compares identity rather than presence, and clears the previous
 * user's progress before anything can merge into it.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

// Captured so a test can drive the auth listener directly — the existing
// useAuth suite stubs this to never fire, which is why this path had no cover.
let fireAuth: ((u: unknown) => void) | null = null;

const gP = vi.fn();
const gS = vi.fn();
const fbLoadProgress = vi.fn(async () => null);

// One mock, because there is one module. This used to be split across
// `vi.mock('../data')` and `vi.mock('../lib/firebase.js')` — not because the
// symbols lived in two places (all of them are defined in lib/firebase.ts) but
// because useAuth imported nine of them through the content barrel. That barrel
// re-exports src/data/content.tsx, which dragged the whole lesson library onto
// the first-paint path; see src/tests/firstPaintGraph.test.ts. The import now
// points at the module that actually defines these, so the mock follows it.
vi.mock('../lib/firebase.js', () => ({
  gP: (...a: unknown[]) => gP(...a),
  lP: vi.fn(),
  gS: () => gS(),
  sS: vi.fn(),
  cS: vi.fn(),
  touchSession: vi.fn(),
  isValidEmail: (e: string) => /@/.test(e),
  fbLogin: vi.fn(),
  fbRegister: vi.fn(),
  fbLogout: vi.fn(),
  fbLoginGoogle: vi.fn(),
  fbResetPassword: vi.fn(),
  fbLoadProgress: (...a: unknown[]) => fbLoadProgress(...(a as [])),
  fbOnAuthStateChanged: (fn: (u: unknown) => void) => {
    fireAuth = fn;
    return () => {};
  },
  initFirebase: vi.fn(),
  fbSaveProgress: vi.fn(() => Promise.resolve()),
  fbSignInGuest: vi.fn(() => Promise.resolve({ ok: false })),
}));
vi.mock('../lib/sentryUserContext', () => ({ setSentryUser: vi.fn() }));
vi.mock('../lib/appUtils.js', () => ({ updateStreak: vi.fn() }));
vi.mock('../lib/srs.js', () => ({ getSR: () => ({}) }));

import { useAuth } from '../hooks/useAuth';

const USER_A = 'ana@example.com';
const USER_B = 'boris@example.com';

/** A's local blob — 900 XP, badges and screens B has never seen. */
const A_BLOB = {
  savedAt: 1000,
  stats: { xp: 900, lc: 40, badges: ['x500', 'str30'], vs: ['phonology'], ct: ['greetings'] },
};

function mkCallbacks() {
  return {
    onSignedIn: vi.fn(),
    onSignedOut: vi.fn(),
    onUserChanged: vi.fn(),
    applyRemoteProgress: vi.fn(),
    setSyncReady: vi.fn(),
  };
}

function fbUser(email: string) {
  return {
    email,
    uid: 'uid-' + email,
    displayName: email,
    emailVerified: true,
    providerData: [{ providerId: 'password' }],
  };
}

beforeEach(() => {
  fireAuth = null;
  gP.mockReset();
  gS.mockReset();
  fbLoadProgress.mockReset();
  fbLoadProgress.mockResolvedValue(null);
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('useAuth — a different account takes over the tab', () => {
  /** Mount with A's session already restored, exactly as tab 1 would be. */
  function mountAsA(cbs: ReturnType<typeof mkCallbacks>) {
    gS.mockReturnValue({ u: USER_A, d: 'Ana' });
    gP.mockImplementation((k: string) => (k === USER_A ? A_BLOB : null));
    const r = renderHook(() => useAuth(cbs));
    // The early restore ran: A's progress is in state.
    expect(cbs.onSignedIn).toHaveBeenCalledWith(
      expect.objectContaining({ progress: A_BLOB, user: expect.objectContaining({ u: USER_A }) }),
    );
    return r;
  }

  it('clears the previous account before the new one is applied', async () => {
    const cbs = mkCallbacks();
    mountAsA(cbs);
    expect(cbs.onUserChanged).not.toHaveBeenCalled();

    await act(async () => {
      fireAuth!(fbUser(USER_B));
      await Promise.resolve();
    });

    expect(cbs.onUserChanged).toHaveBeenCalledTimes(1);
  });

  it('does NOT hand B a payload carrying A’s progress', async () => {
    const cbs = mkCallbacks();
    mountAsA(cbs);
    cbs.onSignedIn.mockClear();

    await act(async () => {
      fireAuth!(fbUser(USER_B));
      await Promise.resolve();
    });

    // Non-vacuity first. Against the pre-fix code onSignedIn was never called
    // for B at all — the restore branch was skipped — so a bare loop over the
    // calls asserted nothing and passed while the bug was live.
    expect(cbs.onSignedIn.mock.calls.length).toBeGreaterThan(0);

    // Every payload delivered for B must be free of A's blob. (State-level
    // contamination came from MERGE_REMOTE running against A's stats; the reset
    // is what prevents that, and this asserts the payload side.)
    for (const call of cbs.onSignedIn.mock.calls) {
      expect(call[0].user.u).toBe(USER_B);
      expect(call[0].progress).not.toBe(A_BLOB);
      const st = (call[0].progress as { stats?: { xp?: number } } | null)?.stats;
      if (st) expect(st.xp).not.toBe(900);
    }
  });

  it('re-applies the incoming account’s own local blob', async () => {
    const cbs = mkCallbacks();
    mountAsA(cbs);
    const B_BLOB = { savedAt: 2000, stats: { xp: 10, lc: 1 } };
    gP.mockImplementation((k: string) => (k === USER_A ? A_BLOB : k === USER_B ? B_BLOB : null));
    cbs.onSignedIn.mockClear();

    await act(async () => {
      fireAuth!(fbUser(USER_B));
      await Promise.resolve();
    });

    // Resetting earlyRestored is what lets B's own restore run at all.
    expect(cbs.onSignedIn).toHaveBeenCalledWith(
      expect.objectContaining({ progress: B_BLOB, user: expect.objectContaining({ u: USER_B }) }),
    );
  });

  it('does not fire for the SAME account re-authenticating', async () => {
    // Token refresh and cross-tab activity both re-fire the listener with the
    // same user. Resetting there would throw away unsynced local progress.
    const cbs = mkCallbacks();
    mountAsA(cbs);

    await act(async () => {
      fireAuth!(fbUser(USER_A));
      await Promise.resolve();
    });

    expect(cbs.onUserChanged).not.toHaveBeenCalled();
  });

  it('does not fire on a first sign-in with no prior session', async () => {
    const cbs = mkCallbacks();
    gS.mockReturnValue(null);
    gP.mockReturnValue(null);
    renderHook(() => useAuth(cbs));

    await act(async () => {
      fireAuth!(fbUser(USER_B));
      await Promise.resolve();
    });

    expect(cbs.onUserChanged).not.toHaveBeenCalled();
  });

  it('does not fire on sign-out — that path has its own reset', async () => {
    const cbs = mkCallbacks();
    mountAsA(cbs);

    await act(async () => {
      fireAuth!(null);
      await Promise.resolve();
    });

    expect(cbs.onUserChanged).not.toHaveBeenCalled();
  });
});
