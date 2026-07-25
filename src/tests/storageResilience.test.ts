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
