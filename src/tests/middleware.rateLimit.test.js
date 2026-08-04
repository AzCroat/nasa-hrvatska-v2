/**
 * middleware.rateLimit.test.js — the /api/* rate limiter, driven for real.
 *
 * The only coverage this middleware had was a source grep for a stale constant.
 * Both defects below are behavioural and neither is visible in the source at a
 * glance, so they are exercised through `onRequest` against a stub Cache API.
 *
 * 1. THE WINDOW NEVER CLOSED. The cache key carried no time component and every
 *    increment rewrote the entry with a fresh `max-age=60`, so the expiry slid
 *    forward on each request. A client active more often than once a minute
 *    never got a reset: the count climbed until it hit 60 and then the caller
 *    was locked out, having made 60 requests over any span at all rather than
 *    60 in a minute.
 *
 * 2. THE 429 CARRIED NO CORS HEADERS. Invisible on the web (same origin), fatal
 *    in the Capacitor build, where the app runs at https://localhost and calls
 *    https://nasahrvatska.com — cross-origin, so a response with no
 *    `Access-Control-Allow-Origin` makes the fetch reject outright. The throttle
 *    reached the client as a network error, never as a 429. At /api/award that
 *    is the difference between server-validated XP and the client's own claimed
 *    figure, which useAward.ts writes to Firestore on any failure.
 *
 * Preflights are covered too: they used to consume the same per-path budget, so
 * a cross-origin client spent it twice as fast, and a 429 on the preflight took
 * the real request with it.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { onRequest } from '../../functions/_middleware.js';

// Minimal stand-in for `caches.default`. Honours max-age so the test can prove
// the window closes on the bucket rather than on TTL luck.
function makeCache() {
  const store = new Map();
  return {
    store,
    async match(req) {
      const hit = store.get(req.url);
      if (!hit) return undefined;
      if (Date.now() >= hit.expires) {
        store.delete(req.url);
        return undefined;
      }
      return new Response(hit.body);
    },
    async put(req, res) {
      const body = await res.text();
      const cc = res.headers.get('Cache-Control') || '';
      const maxAge = parseInt((cc.match(/max-age=(\d+)/) || [])[1] ?? '60', 10);
      store.set(req.url, { body, expires: Date.now() + maxAge * 1000 });
    },
  };
}

const PATH = 'https://nasahrvatska.com/api/award';
const NATIVE_ORIGIN = 'https://localhost';

function req(url = PATH, { method = 'POST', ip = '1.2.3.4', origin = '' } = {}) {
  const headers = { 'cf-connecting-ip': ip };
  if (origin) headers.origin = origin;
  return new Request(url, { method, headers });
}

function ctx(request, next) {
  return { request, next, env: { ENVIRONMENT: 'production' } };
}

let cache;
const next = () => Promise.resolve(new Response('ok', { status: 200 }));

// Drain the fire-and-forget setRateLimit() before the next request reads it.
const settle = () => new Promise((r) => setTimeout(r, 0));

async function hit(opts) {
  const res = await onRequest(ctx(req(PATH, opts), next));
  await settle();
  return res;
}

beforeEach(() => {
  cache = makeCache();
  // Fake Date ONLY. Two reasons, both learned the hard way here:
  //   - The counter buckets on Math.floor(Date.now()/60000), so a loop of 61
  //     requests that happens to straddle a real minute boundary gets a genuine
  //     reset and the assertion fails at random. Freezing Date makes the window
  //     the test's to control.
  //   - settle() below is a real setTimeout. Faking timers wholesale leaves it
  //     unscheduled and the test hangs until the suite timeout.
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(new Date('2026-08-03T12:00:00Z'));
  vi.stubGlobal('caches', { default: cache });
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe('the limit is per minute, not per lifetime', () => {
  it('lets 60 requests through and throttles the 61st within one minute', async () => {
    for (let i = 0; i < 60; i++) expect((await hit()).status).toBe(200);
    expect((await hit()).status).toBe(429);
  });

  it('resets at the next minute instead of accumulating across windows', async () => {
    // The exact scenario that locked people out, and the timings matter: the
    // gap between the two bursts is 40s, SHORTER than the old 60s TTL. So under
    // the old unbucketed key the entry was still alive when the second burst
    // began — 50 + 20 = 70 against a limit of 60 — and the user was throttled
    // despite never making 60 requests in any single minute.
    //
    // A longer gap would let the old entry expire on its own and the test would
    // pass against the bug it exists to catch.
    vi.setSystemTime(new Date('2026-08-03T12:00:30Z'));
    for (let i = 0; i < 50; i++) expect((await hit()).status).toBe(200);

    // Crosses the minute boundary, but stays inside the old TTL.
    vi.setSystemTime(new Date('2026-08-03T12:01:10Z'));
    for (let i = 0; i < 20; i++) {
      expect((await hit()).status).toBe(200);
    }
  });

  it('counts each IP and each path separately', async () => {
    for (let i = 0; i < 60; i++) await hit();
    expect((await hit()).status).toBe(429);
    expect((await hit({ ip: '9.9.9.9' })).status).toBe(200);

    const other = await onRequest(ctx(req('https://nasahrvatska.com/api/tts'), next));
    expect(other.status).toBe(200);
  });

  it('leaves non-API routes alone entirely', async () => {
    const res = await onRequest(
      ctx(req('https://nasahrvatska.com/learn', { method: 'GET' }), next),
    );
    expect(res.status).toBe(200);
    expect(cache.store.size).toBe(0);
  });
});

describe('the 429 is readable cross-origin', () => {
  const exhaust = async (origin) => {
    for (let i = 0; i < 60; i++) await hit({ origin });
    return hit({ origin });
  };

  it('reflects an allowed origin so the native client can read the status', async () => {
    // Without this header the fetch rejects and the caller never sees a 429 —
    // it sees a network error and takes its generic failure branch.
    const res = await exhaust('https://nasahrvatska.com');
    expect(res.status).toBe(429);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://nasahrvatska.com');
    await expect(res.json()).resolves.toHaveProperty('error');
  });

  it('still answers with a usable origin when the caller sends none (native/PWA)', async () => {
    const res = await exhaust('');
    expect(res.status).toBe(429);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://nasahrvatska.com');
  });

  it('does not reflect an origin that is not ours', async () => {
    const res = await exhaust('https://evil.example.com');
    expect(res.status).toBe(429);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://nasahrvatska.com');
  });

  it('keeps Retry-After so a client can back off correctly', async () => {
    const res = await exhaust('https://nasahrvatska.com');
    expect(res.headers.get('Retry-After')).toBe('60');
    expect(res.headers.get('X-RateLimit-Remaining')).toBe('0');
  });

  it('rejects the request in dev only when the origin is not localhost', async () => {
    for (let i = 0; i < 60; i++) await hit({ origin: 'http://localhost:5173' });
    const devCtx = {
      request: req(PATH, { origin: 'http://localhost:5173' }),
      next,
      env: { ENVIRONMENT: 'development' },
    };
    const res = await onRequest(devCtx);
    expect(res.status).toBe(429);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('http://localhost:5173');
  });
});

describe('CORS preflights are not charged to the budget', () => {
  it('passes OPTIONS through without counting it', async () => {
    for (let i = 0; i < 200; i++) {
      const res = await onRequest(
        ctx(req(PATH, { method: 'OPTIONS', origin: NATIVE_ORIGIN }), next),
      );
      expect(res.status).toBe(200);
    }
    await settle();
    expect(cache.store.size).toBe(0);
    // And the real request still has its full allowance.
    expect((await hit({ origin: NATIVE_ORIGIN })).status).toBe(200);
  });
});

describe('the in-memory fallback when the Cache API is unavailable', () => {
  beforeEach(() => {
    vi.stubGlobal('caches', {
      get default() {
        throw new Error('Cache API unavailable');
      },
    });
  });

  it('throttles at half the limit and answers with CORS headers too', async () => {
    // The fallback 429 was the second copy of the same header block — the shape
    // of duplication where a fix lands on one branch and not the other.
    let throttled = null;
    for (let i = 0; i < 40 && !throttled; i++) {
      const res = await onRequest(ctx(req(PATH, { origin: 'https://nasahrvatska.com' }), next));
      if (res.status === 429) throttled = res;
    }
    expect(throttled).not.toBeNull();
    expect(throttled.headers.get('Access-Control-Allow-Origin')).toBe('https://nasahrvatska.com');
    expect(throttled.headers.get('Retry-After')).toBe('60');
  });
});
