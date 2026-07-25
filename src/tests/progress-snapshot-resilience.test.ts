/**
 * progress-snapshot-resilience.test.ts — buildProgressSnapshot must never throw.
 *
 * P0 (2026-07-25). buildProgressSnapshot is the single source of truth for every
 * document written to Firebase. It read localStorage 67 times, all unguarded, and
 * `localStorage.getItem` does not merely return null in a cookie/site-data-blocked
 * profile — it THROWS SecurityError. So for those users the function threw on its
 * first read.
 *
 * The four call sites in useSyncManager each sit inside a try, so there the throw
 * was "only" a permanently skipped cloud save. But App.tsx's auto-save effect
 * calls it OUTSIDE its try — the try there wraps just the localStorage.setItem
 * below it:
 *
 *     const snap = buildProgressSnapshot({...});   // <- throws here
 *     try { localStorage.setItem('uP_' + uid, ...); } catch (e) { ... }
 *
 * That effect re-runs on every stats change, so a signed-in user on a blocked
 * profile hit it immediately and repeatedly.
 *
 * Fixed at the source: every read now goes through safeStorage.lsGet, whose
 * contract (`string | null`) is identical to getItem, so the surrounding
 * `|| '0'` / `=== 'true'` expressions are unchanged.
 *
 * The assertion below is deliberately "does not throw" rather than a snapshot of
 * expected values: it covers the whole dependency tree, including getSR(),
 * getStreak(), getStreakFreezes(), gP() and snapshotCertifications(), any of which
 * could reintroduce an unguarded read.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildProgressSnapshot } from '../lib/progressSnapshot';
import type { Stats } from '../types/index.js';

afterEach(() => {
  vi.unstubAllGlobals();
});

/** Storage that throws on every operation, as a blocked profile does. */
function blockedStorage(): Storage {
  const boom = () => {
    throw new DOMException('The operation is insecure.', 'SecurityError');
  };
  return {
    getItem: boom,
    setItem: boom,
    removeItem: boom,
    clear: boom,
    key: boom,
    get length(): number {
      return boom() as never;
    },
  } as unknown as Storage;
}

const STATS = {
  xp: 250,
  lc: 4,
  gc: 2,
  badges: ['first_lesson'],
  vs: ['lp1'],
} as unknown as Stats;

const ARGS = {
  uid: 'uid_test',
  name: 'Ana',
  stats: STATS,
  dchlA: [true, false],
  dchlSl: ['a'],
  favs: ['zdravo'],
  jWords: ['bog'],
};

describe('buildProgressSnapshot on a storage-blocked profile', () => {
  it('does not throw when every localStorage read raises SecurityError', () => {
    vi.stubGlobal('localStorage', blockedStorage());
    expect(() => buildProgressSnapshot(ARGS as never)).not.toThrow();
  });

  it('still returns a usable document carrying the React-state progress', () => {
    vi.stubGlobal('localStorage', blockedStorage());
    const snap = buildProgressSnapshot(ARGS as never) as Record<string, unknown>;
    // The point of surviving: the XP earned this session must still reach
    // Firebase even though nothing could be read back from local storage.
    // (Progress lives under `stats`, not at the top level — checked against the
    // returned document rather than assumed.)
    expect(snap).toBeTruthy();
    expect((snap.stats as Stats).xp).toBe(250);
    expect((snap.stats as Stats).badges).toEqual(['first_lesson']);
    expect(snap.name).toBe('Ana');
    expect(snap.favs).toEqual(['zdravo']);
    expect(snap.journal).toEqual(['bog']);
    // Settings that could not be read degrade to the documented empty default
    // instead of taking the whole write down with them.
    expect(snap.nh_level).toBe('');
    expect(snap.onboarded).toBe(false);
  });

  it('does not throw when reads work but writes are rejected (quota exhausted)', () => {
    // The other real shape: reads succeed, writes throw. The snapshot is
    // read-only, so this must be a no-op — pinned so a future write added here
    // cannot silently reintroduce the failure.
    const store = new Map<string, string>([['uStreak', JSON.stringify({ count: 3, last: '' })]]);
    vi.stubGlobal('localStorage', {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: () => {
        throw new DOMException('QuotaExceededError', 'QuotaExceededError');
      },
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: store.size,
    } as unknown as Storage);
    expect(() => buildProgressSnapshot(ARGS as never)).not.toThrow();
  });

  it('reads through safeStorage, not raw localStorage', () => {
    // Structural guard: a new raw `localStorage.getItem` added to this module
    // would reintroduce the throw for exactly the profiles the fix protects.
    // (Comments legitimately mention localStorage, so strip them first.)
    const src = readFileSync(resolve(__dirname, '../lib/progressSnapshot.ts'), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '');
    expect(src).not.toMatch(/localStorage\.getItem/);
    expect(src).not.toMatch(/localStorage\.setItem/);
  });
});
