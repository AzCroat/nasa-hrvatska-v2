/**
 * cspCoversClientRequests.test.ts — a host the client fetches but the CSP does
 * not allow fails IN PRODUCTION ONLY.
 *
 * WHY NOTHING ELSE CATCHES IT
 * ---------------------------
 * The Content-Security-Policy lives in `public/_headers`, which only Cloudflare
 * Pages serves. jsdom does not enforce CSP at all, and the E2E suite runs
 * against `vite preview`, which does not serve `_headers` — so a blocked
 * request is green in every gate this repo has and dead on nasahrvatska.com.
 * It is the exact failure shape the owner's standing directive is about: a
 * feature that works everywhere except where the learner is.
 *
 * WHAT MAKES THE POLICY SAFE TODAY
 * --------------------------------
 * Measured: the client makes NO absolute-URL request of its own. Every call is
 * same-origin (`/api/...`), the radio streams are proxied server-side, and
 * `index.html` loads no external script or stylesheet. The only cross-origin
 * traffic comes from bundled SDKs — Firebase, Sentry, PostHog — whose hosts are
 * all in `connect-src`. `connect-src 'self'` plus those three is therefore
 * sufficient BECAUSE of the same-origin property, not independently of it.
 *
 * So this guards the property the policy rests on: the day someone writes
 * `fetch('https://api.example.com/...')` in a component, connect-src stops
 * listing everything the client talks to, and nothing else would say so.
 *
 * MEASURED CLEAN when written — a ratchet, not a fix.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const PROD = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
  (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
);

/** A request API given an absolute URL literal as its first argument. */
const ABSOLUTE_REQUEST =
  /\b(?:fetch|new\s+EventSource|new\s+WebSocket|importScripts)\s*\(\s*[`'"](https?|wss?):\/\//g;

const CSP = readFileSync('public/_headers', 'utf8');
const connectSrc = /Content-Security-Policy:[^\n]*?connect-src ([^;]+);/.exec(CSP)?.[1] ?? '';

describe('the client makes no request the CSP cannot see', () => {
  it('the derivation is real', () => {
    expect(PROD.length).toBeGreaterThan(400);
    expect(connectSrc).toContain("'self'");
  });

  it('non-vacuity: the matcher fires on a request it should catch', () => {
    // A matcher that matched nothing would make the sweep below vacuous, and a
    // clean result from a matcher nobody has seen fire is indistinguishable
    // from one that matches nothing.
    const probe = `fetch('https://api.example.com/x')`;
    expect([...probe.matchAll(ABSOLUTE_REQUEST)].length).toBe(1);
    expect([...`fetch('/api/tts')`.matchAll(ABSOLUTE_REQUEST)].length).toBe(0);
  });

  it('no production file requests an absolute URL', () => {
    const offenders: string[] = [];
    for (const f of PROD) {
      const src = strip(readFileSync(f, 'utf8'));
      for (const m of src.matchAll(ABSOLUTE_REQUEST)) {
        const line = src.slice(0, m.index).split('\n').length;
        offenders.push(`${f}:${line}`);
      }
    }
    expect(
      offenders,
      'connect-src no longer lists everything the client talks to. A host it ' +
        'omits is blocked on nasahrvatska.com and nowhere else — jsdom ignores ' +
        'CSP and `vite preview` does not serve _headers, so every gate stays ' +
        'green. Add the host to connect-src in public/_headers, or route the ' +
        'call through /api like the rest of the app.',
    ).toEqual([]);
  });

  it('the SDK hosts the bundles do reach are still allowed', () => {
    // These are reached by Firebase/Sentry/PostHog from inside the bundle, so
    // the sweep above cannot see them — they are pinned by name instead.
    for (const host of ['*.googleapis.com', 'sentry.io', '*.posthog.com'])
      expect(connectSrc).toContain(host);
  });
});
