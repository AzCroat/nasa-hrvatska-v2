/**
 * chunk-reload-budget.test.ts — the stale-chunk self-healing reload.
 *
 * Two defects fixed here, both found while triaging an "ongoing" Sentry cluster
 * (24 of 27 errors in one week: "Importing a module script failed", "'text/html'
 * is not a valid JavaScript MIME type", a failed dynamic import). The app HAS a
 * healer for exactly that class, so every one of those events was a user whose
 * heal did not work.
 *
 * 1. THE BUDGET WAS PER TAB LIFETIME, NOT PER INCIDENT. It was a bare counter in
 *    sessionStorage, incremented on every attempt and reset nowhere in the app.
 *    sessionStorage survives reloads, so an installed PWA or a phone tab left
 *    open across several deploys spent both attempts on its first two (healed)
 *    incidents; from then on every stale-chunk error skipped the heal entirely.
 *
 * 2. THE PURGE LEFT THE HTML CACHE INTACT. Only '<ver>-js' caches were deleted,
 *    while SPA navigation is NetworkFirst over '<ver>-html' with a 10s network
 *    timeout — so the healing reload could be served the same stale index.html
 *    pointing at the chunks that had just failed, and burn a slot for nothing.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { reloadWithCachePurge, isChunkLoadError } from '../lib/chunkErrors';

const KEY = 'nh_reload_attempt';

const reload = vi.fn();
let deleted: string[] = [];
let cacheNames: string[] = [];

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-07-25T12:00:00Z'));
  sessionStorage.clear();
  reload.mockClear();
  deleted = [];
  cacheNames = [
    'nasa-hrvatska-v1700000000000-js',
    'nasa-hrvatska-v1700000000000-html',
    'nasa-hrvatska-v1700000000000-data',
    'nasa-hrvatska-v1700000000000-images',
    'nasa-hrvatska-v1700000000000-audio',
    'nasa-hrvatska-v1700000000000-fonts',
    'workbox-precache-v2-https://nasahrvatska.com/',
    'some-other-pwa-cache',
  ];

  vi.stubGlobal('location', { reload } as unknown as Location);
  vi.stubGlobal('caches', {
    keys: async () => cacheNames,
    delete: async (name: string) => {
      deleted.push(name);
      return true;
    },
  } as unknown as CacheStorage);
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

/** Lets the caches.keys().then().finally() chain settle so reload() has fired. */
async function settle() {
  await vi.runAllTimersAsync();
  await Promise.resolve();
}

describe('reload budget is per incident, not per tab lifetime', () => {
  it('allows two attempts, then refuses the third', () => {
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(false);
  });

  it('a spent budget recovers after the window, so a NEW incident can still heal', () => {
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(false);

    // Same tab, half an hour later — a different deploy, a different incident.
    // Before the fix this returned false forever and the error went straight to
    // Sentry without the heal ever being attempted.
    vi.advanceTimersByTime(31 * 60 * 1000);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    expect(reloadWithCachePurge(KEY)).toBe(false);
  });

  it('keeps counting within the window — retries seconds apart are ONE incident', () => {
    expect(reloadWithCachePurge(KEY)).toBe(true);
    vi.advanceTimersByTime(3000);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    vi.advanceTimersByTime(3000);
    // Bounded: a permanently-failing chunk cannot reload-loop the app.
    expect(reloadWithCachePurge(KEY)).toBe(false);
  });

  it('a legacy bare-integer value does not carry the old permanent lockout forward', () => {
    // What a tab running the previous build already has in sessionStorage.
    sessionStorage.setItem(KEY, '2');
    expect(reloadWithCachePurge(KEY)).toBe(true);
  });

  it('budgets for different failure classes are independent', () => {
    expect(reloadWithCachePurge('nh_reload_attempt')).toBe(true);
    expect(reloadWithCachePurge('nh_reload_attempt')).toBe(true);
    expect(reloadWithCachePurge('nh_reload_attempt')).toBe(false);
    expect(reloadWithCachePurge('nh_binding_reload')).toBe(true);
  });
});

describe('cache purge covers the caches that decide which code runs', () => {
  it('purges the JS cache AND the navigation/HTML cache', async () => {
    reloadWithCachePurge(KEY);
    await settle();
    expect(deleted).toContain('nasa-hrvatska-v1700000000000-js');
    // Pre-fix this was left in place, so the healing reload could be handed the
    // same stale index.html referencing the chunks that had just failed.
    expect(deleted).toContain('nasa-hrvatska-v1700000000000-html');
  });

  it('leaves offline study content and other origins alone', async () => {
    reloadWithCachePurge(KEY);
    await settle();
    expect(deleted).not.toContain('nasa-hrvatska-v1700000000000-data');
    expect(deleted).not.toContain('nasa-hrvatska-v1700000000000-images');
    expect(deleted).not.toContain('nasa-hrvatska-v1700000000000-audio');
    expect(deleted).not.toContain('nasa-hrvatska-v1700000000000-fonts');
    expect(deleted).not.toContain('some-other-pwa-cache');
  });

  it('reloads even when the Cache Storage API is unavailable', async () => {
    vi.stubGlobal('caches', undefined);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    await settle();
    expect(reload).toHaveBeenCalled();
  });

  it('reloads even when reading Cache Storage THROWS (privacy-restricted profile)', async () => {
    // The purge is best-effort; the reload is the part that heals. Letting this
    // throw escape meant no purge AND no reload, on exactly the browsers most
    // likely to be serving a stale chunk.
    vi.stubGlobal('caches', {
      get keys(): never {
        throw new DOMException('The operation is insecure.', 'SecurityError');
      },
    } as unknown as CacheStorage);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    await settle();
    expect(reload).toHaveBeenCalled();
  });

  it('reloads even if listing caches rejects asynchronously', async () => {
    vi.stubGlobal('caches', {
      keys: async () => {
        throw new Error('storage denied');
      },
      delete: async () => true,
    } as unknown as CacheStorage);
    expect(reloadWithCachePurge(KEY)).toBe(true);
    await settle();
    expect(reload).toHaveBeenCalled();
  });
});

describe('isChunkLoadError still matches every shape seen in production', () => {
  // Exact strings from the Sentry digest that prompted this work.
  it.each([
    'importing a module script failed.',
    "'text/html' is not a valid javascript mime type.",
    'failed to fetch dynamically imported module: https://nasahrvatska.com/assets/pushnotifications-bpsl2jq1.js',
    'error loading dynamically imported module',
    'loading chunk 42 failed',
    "importing binding name 'v' is not found",
  ])('matches %s', (msg) => {
    expect(isChunkLoadError(msg)).toBe(true);
  });

  it('does not match an ordinary app error', () => {
    expect(isChunkLoadError('cannot read properties of undefined')).toBe(false);
  });
});
