import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getHearts, loseHeart } from '../lib/lives';
import { enqueue, flush } from '../lib/offlineAwardQueue';
import { applyRemoteProgress } from '../lib/applyRemoteProgress';

/**
 * Storage-resilience guards.
 *
 * A full or blocked localStorage (Safari Private Browsing, a quota-exhausted
 * profile) must never crash a screen or silently abandon a cloud restore. These
 * three paths each violated that:
 *   - lives.saveState threw out of React render (getHearts is called inside a
 *     useMemo in McGame), so the ErrorBoundary replaced the whole quiz screen.
 *   - applyRemoteProgress's early writes were bare, so the first failure aborted
 *     the remaining ~50 restore steps.
 *   - offlineAwardQueue grew without bound and TypeError'd on a non-array value.
 */

const QUEUE_KEY = 'nh_offline_award_queue';

function makeSetters() {
  return {
    setFavs: vi.fn(),
    setJWords: vi.fn(),
    sDchlA: vi.fn(),
    sDchlSl: vi.fn(),
    setOnboarded: vi.fn(),
    setName: vi.fn(),
  };
}

describe('lives — hearts survive an unwritable localStorage', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  it('getHearts does not throw when setItem throws (was crashing McGame during render)', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError');
    });
    // No stored state + unwritable storage is exactly the Private-Browsing case:
    // the `!s` branch is always taken, so saveState ran on every single call.
    expect(() => getHearts()).not.toThrow();
    expect(getHearts()).toBe(5);
  });

  it('loseHeart does not throw when setItem throws, and still reports the decrement', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError');
    });
    expect(() => loseHeart()).not.toThrow();
    expect(loseHeart()).toBe(4); // 5 - 1, computed in memory
  });
});

describe('offlineAwardQueue — bounded growth and shape safety', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  it('caps retained entries instead of growing forever', () => {
    for (let i = 0; i < 260; i++) {
      enqueue({ activityType: 'vocabulary', claimedXp: i, timestamp: i });
    }
    const stored = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
    expect(stored.length).toBeLessThanOrEqual(200);
    // Keeps the MOST RECENT entries — the newest claim must survive the trim.
    expect(stored[stored.length - 1].claimedXp).toBe(259);
  });

  it('enqueue recovers from a corrupt (non-array) stored value', () => {
    localStorage.setItem(QUEUE_KEY, '5');
    expect(() => enqueue({ activityType: 'vocabulary', claimedXp: 1, timestamp: 1 })).not.toThrow();
    const stored = JSON.parse(localStorage.getItem(QUEUE_KEY) || 'null');
    expect(Array.isArray(stored)).toBe(true);
    expect(stored).toHaveLength(1);
  });

  it('flush does not TypeError on a non-array stored value (and clears it)', async () => {
    localStorage.setItem(QUEUE_KEY, '5'); // `5 .length` is undefined → old code fell through to .filter
    await expect(flush('uid123')).resolves.toBeUndefined();
    expect(localStorage.getItem(QUEUE_KEY)).toBeNull();
  });

  it('flush tolerates an object stored where an array was expected', async () => {
    localStorage.setItem(QUEUE_KEY, '{"a":1}');
    await expect(flush('uid123')).resolves.toBeUndefined();
  });
});

describe('applyRemoteProgress — one failed write must not abort the restore', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  it('keeps restoring later fields after an early write throws', () => {
    const real = Storage.prototype.setItem;
    // Fail ONLY the very first write in the function ('onboarded'), which used to
    // throw straight out and skip everything below it.
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(function (
      this: Storage,
      k: string,
      v: string,
    ) {
      if (k === 'onboarded') throw new DOMException('QuotaExceededError');
      return real.call(this, k, v);
    });

    const setters = makeSetters();
    expect(() =>
      applyRemoteProgress(
        { onboarded: true, stats: { xp: 100 }, nh_goal: 'travel', nh_culture: 'dalmatia' },
        setters,
      ),
    ).not.toThrow();

    // Fields written AFTER the failing one must still be present.
    expect(localStorage.getItem('nh_goal')).toBe('travel');
    expect(localStorage.getItem('nh_culture')).toBe('dalmatia');
  });

  it('completes without throwing when storage is entirely unwritable', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError');
    });
    const setters = makeSetters();
    expect(() =>
      applyRemoteProgress({ onboarded: true, stats: { xp: 100 }, name: 'Ana' }, setters),
    ).not.toThrow();
    // Non-storage side effects still run — the restore reached the end.
    expect(setters.setName).toHaveBeenCalledWith('Ana');
  });
});

// ── Streak / award path ───────────────────────────────────────────────────────
//
// updateStreak() runs on EVERY lesson completion (useAward.ts:400) and its final
// act is persisting the streak. That write, plus earnFreeze/spendFreeze and the
// ceremony/weekly-XP/journey writes in useAward, were all bare. On unwritable
// storage the throw escaped the award: the streak write was lost AND every badge,
// ceremony, freeze grant and toast queued after it was skipped. A learner in
// Safari Private Browsing completed a lesson and silently got nothing.
describe('streak + freeze survive an unwritable localStorage', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  function breakWrites() {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError');
    });
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError');
    });
  }

  it('updateStreak does not throw out of the award path', async () => {
    const { updateStreak } = await import('../lib/appUtils');
    breakWrites();
    expect(() => updateStreak('2026-07-25')).not.toThrow();
    // Still returns a usable result so the caller can award badges off it.
    const r = updateStreak('2026-07-25');
    expect(typeof r.count).toBe('number');
  });

  it('earnFreeze and spendFreeze do not throw', async () => {
    const { earnFreeze, spendFreeze } = await import('../lib/appUtils');
    breakWrites();
    expect(() => earnFreeze()).not.toThrow();
    expect(() => spendFreeze()).not.toThrow();
  });

  it('a freeze purchase cannot throw after the XP has already been spent', async () => {
    const { purchaseFreeze } = await import('../lib/streakFreeze');
    breakWrites();
    const setStats = vi.fn();
    // purchaseFreeze records the 50 XP cost and THEN calls earnFreeze(). If that
    // second step threw, the learner was charged and got no freeze.
    expect(() => purchaseFreeze(500, setStats)).not.toThrow();
    expect(setStats).toHaveBeenCalled();
  });

  it('applyStreakEarnBack and incrementCulture do not throw', async () => {
    const { applyStreakEarnBack, incrementCulture } = await import('../lib/appUtils');
    breakWrites();
    expect(() => applyStreakEarnBack()).not.toThrow();
    expect(() => incrementCulture('citiesViewed')).not.toThrow();
  });
});

// ── Boot / onboarding / auth path ─────────────────────────────────────────────
//
// safeStorage.ts exists because an unguarded write on the startup path crashes
// the app before React mounts — a permanent blank screen. Several first-run
// paths still had bare writes, and they fail closed in the worst way:
//   - WelcomeScreen.startPlacement() sets ten keys; a throw on any of them
//     abandoned the rest, so `onboarded` was never written and placement never
//     started — a brand-new user stuck on the welcome screen for good.
//   - CookieConsent's mount effect read AND wrote unguarded, i.e. it threw for
//     exactly the profiles that block site data.
//   - useAuth's sign-out cleanup individually guarded its nh_* loop but not the
//     fixed key list three lines later, so a throw skipped setAuthUser(null) and
//     sign-out silently did not complete — the previous user stayed signed in on
//     a shared device.
describe('boot + onboarding paths survive an unwritable localStorage', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  function breakStorage() {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('SecurityError');
    });
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new DOMException('SecurityError');
    });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('SecurityError');
    });
  }

  it('lsGet/lsSet/lsRemove absorb a storage that throws on every operation', async () => {
    const { lsGet, lsSet, lsRemove } = await import('../lib/safeStorage');
    breakStorage();
    expect(() => lsSet('k', 'v')).not.toThrow();
    expect(() => lsRemove('k')).not.toThrow();
    expect(() => lsGet('k')).not.toThrow();
    expect(lsGet('k')).toBeNull();
  });

  it('acceptAllCookies does not throw for a site-data-blocked profile', async () => {
    const { acceptAllCookies } = await import('../components/shared/CookieConsent');
    breakStorage();
    expect(() => acceptAllCookies()).not.toThrow();
  });
});
