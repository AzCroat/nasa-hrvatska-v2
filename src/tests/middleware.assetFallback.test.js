/**
 * middleware.assetFallback.test.js — a missing immutable asset must be an
 * uncacheable 404, never a cacheable HTML page.
 *
 * THE INCIDENT (issue #415)
 * -------------------------
 * Cloudflare Pages serves the SPA fallback (index.html, HTTP 200, text/html)
 * for any unknown path — including /assets/<hash>.js — and _headers marks
 * /assets/* as `public, max-age=31536000, immutable`. One request for an asset
 * the current deployment doesn't have and an edge node caches an HTML page
 * under a .js URL for a year. Browsers refuse text/html as a module script, so
 * every visitor routed through that node gets a blank white screen. Production
 * smoke caught it live on 2026-08-06:
 *
 *   200 text/html; charset=utf-8  …/assets/vendor-firebase-Bi-3RS3U.js
 *   "'text/html' is not a valid JavaScript MIME type for module script"
 *
 * The middleware turns that fallback into a 404 with `Cache-Control: no-store`.
 * These tests drive `onRequest` the same way middleware.rateLimit.test.js does.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { onRequest } from '../../functions/_middleware.js';

const ORIGIN = 'https://nasahrvatska.com';

function ctx(path, next) {
  return {
    request: new Request(`${ORIGIN}${path}`, { headers: { 'cf-connecting-ip': '1.2.3.4' } }),
    next,
    env: { ENVIRONMENT: 'production' },
  };
}

const htmlFallback = () =>
  Promise.resolve(
    new Response('<!doctype html><div id="root"></div>', {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        // What _headers stamps on anything under /assets/* — the poison.
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }),
  );

const realScript = () =>
  Promise.resolve(
    new Response('export const x = 1;', {
      status: 200,
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }),
  );

describe('missing-asset guard', () => {
  it('turns the HTML fallback for a missing /assets/ file into an uncacheable 404', async () => {
    const res = await onRequest(ctx('/assets/vendor-firebase-Bi-3RS3U.js', htmlFallback));
    expect(res.status).toBe(404);
    // no-store on the way out is the entire point: a cached copy of this
    // response under an asset URL is the year-long poison from the incident.
    expect(res.headers.get('cache-control')).toBe('no-store');
    expect(res.headers.get('content-type')).not.toMatch(/html/i);
  });

  it('guards /audio/ the same way — it carries the same immutable rule', async () => {
    const res = await onRequest(ctx('/audio/phrase-01.mp3', htmlFallback));
    expect(res.status).toBe(404);
    expect(res.headers.get('cache-control')).toBe('no-store');
  });

  it('passes a real asset through byte-for-byte untouched', async () => {
    const res = await onRequest(ctx('/assets/index-abc123.js', realScript));
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toBe('application/javascript');
    // The immutable header must SURVIVE for real files — long-lived caching of
    // content-hashed assets is correct and is what makes the app fast.
    expect(res.headers.get('cache-control')).toContain('immutable');
    expect(await res.text()).toBe('export const x = 1;');
  });

  it('does not touch the SPA fallback for page URLs — react-router needs it', async () => {
    // A deep link like /learn must still serve the shell. Only the immutable
    // asset directories are guarded; everywhere else HTML is the right answer.
    const res = await onRequest(ctx('/learn', htmlFallback));
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toMatch(/html/i);
  });
});

describe('_headers covers the path the document is actually served at', () => {
  // Pages redirects /index.html → / and matches _headers rules on the REQUEST
  // path, so a no-store rule on /index.html alone never applies to the URL
  // users load. This is a text assertion because there is no Cloudflare to run
  // in a unit test — the deployed behaviour is what production smoke checks.
  const src = readFileSync('public/_headers', 'utf8');

  it('has an exact rule for "/" with no-store', () => {
    expect(src).toMatch(/^\/\n\s+Cache-Control: no-cache, no-store, must-revalidate/m);
  });

  it('keeps immutable caching for real assets', () => {
    expect(src).toMatch(/^\/assets\/\*\n\s+Cache-Control: public, max-age=31536000, immutable/m);
  });
});
