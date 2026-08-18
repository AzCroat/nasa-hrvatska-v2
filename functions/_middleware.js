/* eslint-disable no-console */
/**
 * Cloudflare Pages Middleware — Security, Rate Limiting & Request Logging
 * Runs on EVERY request (root-level _middleware, no _routes.json). Rate
 * limiting + logging apply to /api/*; the missing-asset guard below applies to
 * the immutable asset directories; everything else passes straight through.
 *
 * Primary rate limiting via Cache API.
 * Fallback: module-level in-memory circuit breaker when Cache API unavailable.
 * When fallback activates, applies 50% of normal limit (multiple isolates may run).
 *
 * All requests are logged as structured JSON: { ts, level, endpoint, method, ms, status }.
 * Use `wrangler tail` or a Cloudflare Log Drain to ingest these in production.
 *
 * ── The limit is per fixed minute, and the cache key has to say so ────────────
 * The counter used a key with no time component (`rl:<ip>:<path>`) and rewrote
 * it on every increment with a fresh `max-age=60`. Expiry is computed from the
 * response at put time, so each request pushed the entry's expiry a further 60
 * seconds out: for anyone making requests more often than once a minute the
 * entry never expired and the count only ever climbed. That is not 60 requests
 * per minute, it is 60 requests *ever* for as long as you keep coming back —
 * an ordinary session walks into a lockout it did nothing to deserve.
 *
 * Bucketing the key by minute fixes it at the source: each minute is a distinct
 * key that starts at zero, so the count cannot carry across windows however the
 * cache treats the TTL. `max-age` is now only garbage collection for keys
 * nothing will read again. This is what the in-memory fallback below already
 * did correctly — the two paths now agree.
 *
 * ── Why the 429 needs CORS headers ───────────────────────────────────────────
 * Both 429s were returned with `Content-Type` and no `Access-Control-*`. On the
 * web that is invisible, because the app and /api/* share an origin. In the
 * Capacitor build the app runs at https://localhost and calls
 * https://nasahrvatska.com/api/*, which is cross-origin: a response without
 * `Access-Control-Allow-Origin` is not merely unreadable, the fetch *rejects*.
 * So on native a throttle arrived as a network error rather than a 429, and
 * callers took their generic failure branch instead of their rate-limit one.
 *
 * That mattered most at /api/award, whose whole job is to replace client-claimed
 * XP with a server-validated figure. Its client (useAward.ts) falls back to the
 * claimed amount whenever the call fails, and writes that to Firestore — so
 * every throttled award silently became unvalidated XP. Preflights made it
 * worse: OPTIONS counted against the same per-path budget, so a cross-origin
 * client burned it twice as fast, and a 429 on the *preflight* took the real
 * request with it. Preflights are now exempt.
 */

import { corsHeaders, isAllowedOrigin } from './api/_helpers.js';
import { latinizeResponseBody } from './api/_croatianGuard.js';
import { ENDPOINT_CEILING_MICROUSD } from './api/_aiBudget.js';

// ── Module-level fallback map ─────────────────────────────────────────────────
// Used when caches.default is unavailable. Per-isolate — not shared across instances.
const _mwFallback = new Map();

function _mwCleanup() {
  if (_mwFallback.size <= 500) return;
  const cutoffWindow = Math.floor(Date.now() / 60000) - 2;
  for (const [k, v] of _mwFallback) {
    if (v.w < cutoffWindow) _mwFallback.delete(k);
  }
}

function _mwFallbackCheck(key, limit) {
  _mwCleanup();
  const fallbackLimit = Math.max(1, Math.floor(limit * 0.5));
  const window = Math.floor(Date.now() / 60000);
  const entry = _mwFallback.get(key);
  if (!entry || entry.w !== window) {
    _mwFallback.set(key, { c: 1, w: window });
    return true;
  }
  if (entry.c >= fallbackLimit) return false;
  entry.c++;
  return true;
}

// ── Rate limit config ─────────────────────────────────────────────────────────
// Per-endpoint AI rate limiting is owned by requireAuthedAI (D1-backed, globally
// consistent). Middleware applies a uniform general limit only.
const GENERAL_RATE_LIMIT = 60; // per minute

async function getRateLimit(cache, key) {
  const cached = await cache.match(new Request(`https://ratelimit.internal/${key}`));
  if (!cached) return 0;
  return parseInt(await cached.text(), 10) || 0;
}

async function setRateLimit(cache, key, count) {
  const res = new Response(String(count), {
    // Only garbage collection now — the minute bucket in the key is what ends
    // the window. 120s so a key outlives its own bucket rather than expiring
    // mid-minute and handing the caller a free reset.
    headers: { 'Cache-Control': 'max-age=120' },
  });
  await cache.put(new Request(`https://ratelimit.internal/${key}`), res);
}

/**
 * 429 body + headers, built in one place.
 *
 * It was written out twice — once on the Cache API path, once on the in-memory
 * fallback — which is exactly the shape of duplication where a fix lands on one
 * copy and not the other.
 *
 * The origin is reflected only when it is one of ours. `corsHeaders` echoes
 * whatever it is handed, and every endpoint pairs it with an `isAllowedOrigin`
 * check for that reason; a throttle response should not be the one place that
 * makes itself readable to any site that asks.
 */
function tooManyRequests(limit, origin, isDev) {
  const allowed = isAllowedOrigin(origin, isDev) ? origin : '';
  return new Response(
    JSON.stringify({ error: 'Too many requests. Please wait before trying again.' }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': '60',
        'X-RateLimit-Limit': String(limit),
        'X-RateLimit-Remaining': '0',
        ...corsHeaders(allowed),
      },
    },
  );
}

/**
 * A missing immutable asset must be a 404, never a cacheable HTML page.
 *
 * THE INCIDENT (2026-08-04 → 08-06, issue #415)
 * ---------------------------------------------
 * Cloudflare Pages serves the SPA fallback — index.html, HTTP 200, text/html —
 * for ANY path it cannot find, including /assets/<hash>.js. And _headers gives
 * everything under /assets/* `Cache-Control: public, max-age=31536000,
 * immutable`, because content-hashed files never change. Put together: one
 * request for an asset the current deployment doesn't have (a deploy rollover
 * window is enough) and an edge node caches AN HTML PAGE under a .js URL for
 * up to a year. Every later visitor routed through that node gets HTML where
 * the boot-path script should be; browsers refuse to execute text/html as a
 * module, React never mounts, and the user sees a blank white screen. Smoke
 * caught exactly this on 2026-08-06: `200 text/html …/assets/vendor-firebase-
 * Bi-3RS3U.js` → "'text/html' is not a valid JavaScript MIME type".
 *
 * The fallback itself must stay — react-router page URLs depend on it — so the
 * fix is scoped to the two immutable directories: if what would be served for
 * an asset URL is HTML, the asset does not exist, and the only safe answer is
 * an uncacheable 404. That is also self-healing for already-poisoned edge
 * entries: the poisoned response still arrives here via next(), still smells
 * of text/html, and leaves as a 404 the CDN is told not to store.
 */
const IMMUTABLE_ASSET_PREFIXES = ['/assets/', '/audio/'];

function isHtml(response) {
  return /text\/html/i.test(response.headers.get('content-type') || '');
}

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const start = Date.now();

  if (IMMUTABLE_ASSET_PREFIXES.some((p) => pathname.startsWith(p))) {
    const response = await next();
    if (isHtml(response)) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          // no-store on BOTH the CDN and the browser: a cached copy of this
          // response under an asset URL is the exact poison described above.
          'Cache-Control': 'no-store',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
    return response;
  }

  // Only apply rate limiting + logging to API routes
  if (!pathname.startsWith('/api/')) return next();

  // CORS preflights are not the traffic this limit exists to shed: they carry no
  // payload and do no downstream work. Counting them charged cross-origin
  // clients (the native build) two requests for every one they made, and a 429
  // on a preflight blocks the real request outright — with no CORS headers on
  // it, the browser reports a network failure and the actual status never
  // reaches the caller.
  if (request.method === 'OPTIONS') return next();

  // Use only cf-connecting-ip — x-forwarded-for is client-controlled and spoofable.
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const origin = request.headers.get('origin') || '';
  const isDev = env?.ENVIRONMENT !== 'production';

  const limit = GENERAL_RATE_LIMIT;
  // The minute bucket is what makes this a per-minute limit — see the header
  // comment. Without it the key is immortal and the count only accumulates.
  const bucket = Math.floor(Date.now() / 60000);
  const cacheKey = `rl:${ip}:${pathname}:${bucket}`;

  try {
    const cache = caches.default;
    const current = await getRateLimit(cache, cacheKey);

    if (current >= limit) {
      return tooManyRequests(limit, origin, isDev);
    }

    // Increment — fire and forget to avoid adding latency. Read-then-write is
    // not atomic, so concurrent requests can read the same count; the limit is
    // deliberately approximate. The per-user caps in /api/award and
    // _rateLimit.js are the exact ones.
    setRateLimit(cache, cacheKey, current + 1).catch(() => {});
  } catch {
    // Cache API unavailable — use in-memory fallback instead of failing open
    console.warn('[Middleware] Cache API unavailable — using in-memory fallback');
    // The fallback stores its own window alongside the count and resets on the
    // same minute boundary, so it takes the UNbucketed key. Passing the bucketed
    // one would still count correctly but would add a fresh map entry every
    // minute per ip+path, which is churn `_mwCleanup` then has to sweep.
    const fallbackAllowed = _mwFallbackCheck(`rl:${ip}:${pathname}`, limit);
    if (!fallbackAllowed) {
      return tooManyRequests(limit, origin, isDev);
    }
  }

  const response = await next();

  // Structured request log — visible in `wrangler tail` and Cloudflare Log Drains
  const ms = Date.now() - start;
  const status = response?.status ?? 0;
  const logEntry = JSON.stringify({
    ts: new Date().toISOString(),
    level: status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info',
    endpoint: pathname,
    method: request.method,
    ms,
    status,
  });
  if (status >= 500) {
    console.error(logEntry);
  } else if (status >= 400) {
    console.warn(logEntry);
  } else {
    console.log(logEntry);
  }

  // CROATIAN SCRIPT GUARD (owner directive, 2026-08-17): this is the ONE
  // chokepoint every /api response passes through, so it is where the
  // guarantee lives — no Cyrillic can reach the client from any endpoint,
  // present or future. Textual bodies only; binary (TTS audio) untouched;
  // streaming-safe. See functions/api/_croatianGuard.js.
  //
  // OUTPUT OBSERVATION (owner directive, 2026-08-18): the bakery Cyrillic
  // incident was found by the owner in the field, not by the system. The same
  // chokepoint now OBSERVES what AI endpoints actually serve: every
  // contamination becomes a durable KV incident record, and a small random
  // sample (~2%) of clean AI output is retained (truncated, 14-day TTL) for
  // the weekly /api/output-observatory sweep. Fail-soft everywhere — an
  // observation failure can never affect the response.
  return latinizeResponseBody(response, buildObserver(context, pathname, status));
}

// ── Output observation (2026-08-18) ──────────────────────────────────────────
// Which endpoints get observed: exactly the AI surface — the metered-ceiling
// table is already the canonical list of AI endpoints (including the ceiling-0
// cache-served ones), so membership there IS the sampling predicate. Nothing
// non-AI (sync, content, push) is ever sampled.
const OBS_SAMPLE_RATE = 0.02;
const OBS_INCIDENT_TTL_S = 60 * 60 * 24 * 30; // incidents: 30 days
const OBS_SAMPLE_TTL_S = 60 * 60 * 24 * 14; // routine samples: 14 days
const OBS_FLUSH_TIMEOUT_MS = 20_000;

function buildObserver(context, pathname, status) {
  const env = context?.env;
  const kv = env?.KV || env?.PUSH_SUBSCRIPTIONS;
  if (!kv) return undefined;
  if (!(pathname in ENDPOINT_CEILING_MICROUSD)) return undefined;
  if (status !== 200) return undefined; // observe served content, not errors

  // The observer fires at stream FLUSH — after onRequest has returned — so the
  // KV write needs the event kept alive: register a deferred with waitUntil
  // now, settle it from the observer. The timeout race bounds the case where
  // the client aborts mid-stream and flush never runs.
  let settle;
  const done = new Promise((r) => {
    settle = r;
  });
  try {
    context.waitUntil(
      Promise.race([done, new Promise((r) => setTimeout(r, OBS_FLUSH_TIMEOUT_MS))]),
    );
  } catch {
    return undefined; // no waitUntil → a flush-time write could be cut off; skip
  }

  return ({ contaminated, text }) => {
    const write = (async () => {
      // Incidents ALWAYS persist; clean output is sampled.
      if (!contaminated && Math.random() >= OBS_SAMPLE_RATE) return;
      const at = new Date().toISOString();
      const rand = Math.random().toString(36).slice(2, 8);
      const slug = pathname.replace(/[^a-z0-9-]/gi, '_');
      const key = contaminated ? `obs:i:${at}:${rand}` : `obs:s:${at.slice(0, 10)}:${slug}:${rand}`;
      await kv.put(key, JSON.stringify({ path: pathname, at, contaminated, text }), {
        expirationTtl: contaminated ? OBS_INCIDENT_TTL_S : OBS_SAMPLE_TTL_S,
      });
    })();
    write.catch(() => {}).finally(settle);
  };
}
