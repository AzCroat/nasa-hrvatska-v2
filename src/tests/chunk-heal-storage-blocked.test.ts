import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { reloadWithCachePurge } from '../lib/chunkErrors';

// The self-healer used to switch itself OFF on storage-restricted profiles.
//
// sessionStorage.getItem THROWS (it does not return null) when cookies/site-data
// are blocked. That throw escaped into reloadWithCachePurge's outer catch, which
// returns false — and false is main.tsx's "heal did not happen" signal, so it
// skipped the purge+reload and reported to Sentry instead. Those users sat on a
// stale bundle until they manually hard-refreshed.
//
// Conflating "blocked" with "0 attempts" would be worse: with no way to persist
// a count, every chunk error would reload forever. So blocked storage gets
// exactly one heal per window, tracked in window.name (which survives a same-tab
// reload and is not behind the storage permission gate).

const KEY = 'nh_reload_attempt';
const WINDOW_MS = 30 * 60 * 1000;

let reloadSpy: ReturnType<typeof vi.fn>;
let origName: string;

function blockStorage() {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new DOMException('blocked', 'SecurityError');
  });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new DOMException('blocked', 'SecurityError');
  });
}

beforeEach(() => {
  origName = globalThis.name;
  globalThis.name = '';
  sessionStorage.clear();
  reloadSpy = vi.fn();
  Object.defineProperty(globalThis, 'location', {
    value: { reload: reloadSpy },
    writable: true,
    configurable: true,
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  globalThis.name = origName;
});

describe('chunk heal when storage is blocked', () => {
  it('still heals — the regression: it used to give up entirely', () => {
    blockStorage();
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadSpy).toHaveBeenCalled();
  });

  it('heals exactly once, so a permanently-failing chunk cannot loop forever', () => {
    blockStorage();
    expect(reloadWithCachePurge(KEY)).toBe(true);
    // Second attempt in the same window is refused.
    expect(reloadWithCachePurge(KEY)).toBe(false);
    expect(reloadWithCachePurge(KEY)).toBe(false);
  });

  it('allows a new heal once the window has elapsed — a later incident is genuine', () => {
    blockStorage();
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(false);

    // Age the marker past the window.
    globalThis.name = globalThis.name.replace(
      /~nh-heal:(\d+)~/,
      `~nh-heal:${Date.now() - WINDOW_MS - 1000}~`,
    );
    expect(reloadWithCachePurge(KEY)).toBe(true);
  });

  it('preserves any pre-existing window.name rather than clobbering it', () => {
    blockStorage();
    globalThis.name = 'someOtherLibraryValue';
    reloadWithCachePurge(KEY);
    expect(globalThis.name).toContain('someOtherLibraryValue');
    expect(globalThis.name).toMatch(/~nh-heal:\d+~/);
  });

  it('falls back to the one-shot when reads work but writes are refused', () => {
    // Read-only storage: getItem succeeds, setItem throws. The budget can never
    // advance, so without the fallback this would reload unbounded.
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('blocked', 'SecurityError');
    });
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(false);
  });

  it('healthy storage is unaffected — still two attempts, not one', () => {
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(false);
  });
});
