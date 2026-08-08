/**
 * swNavigationOrder.test.ts — navigations must reach the network before the
 * install-time precache, and chunk routes must fail over on 404s.
 *
 * THE DEFECT (client half of the 2026-08 stale-shell incident, #415)
 * -----------------------------------------------------------------
 * Workbox matches routes first-registered-first (workbox-routing Router pushes
 * onto an array and returns the first hit), and precacheAndRoute() registers a
 * route that maps a navigation to "/" onto the precached index.html
 * (directoryIndex default). sw.js called precacheAndRoute() BEFORE registering
 * the NetworkFirst NavigationRoute — so for "/", the one URL that matters,
 * every SW-controlled visit was served the INSTALL-TIME shell cache-first and
 * the "three-level network-first fallback" was dead code. After each deploy
 * the old shell requested content-hashed chunks the server no longer had,
 * for the seconds until the SW update forced a reload.
 *
 * THE SECOND DEFECT, created by the server-side fix
 * -------------------------------------------------
 * Since 2026-08-06 a missing asset is answered with 404 (uncacheable), not the
 * SPA HTML fallback. The SW's chunk guards threw only on `text/html` — a 404
 * sailed through, Workbox treats any completed fetch as success (cache
 * fallback fires only on thrown errors), and the page got the 404 even when
 * the old chunk sat in the `-js` cache. That is the exact Sentry signature
 * "Failed to fetch dynamically imported module: …/pushNotifications-….js".
 * The guards now throw on `!response.ok` too, restoring the seamless
 * cached-chunk fallback during the deploy window.
 *
 * Like sw-cache-lifecycle.test.ts, these pin POLICY by reading the source —
 * the SW's routing isn't unit-runnable without a ServiceWorkerGlobalScope.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SW = readFileSync(resolve(__dirname, '../..', 'src/sw.js'), 'utf8');

/**
 * Comment-stripped, so assertions are about code, not prose quoting it.
 *
 * ORDER MATTERS: full-line `//` comments are stripped FIRST. sw.js prose says
 * "/api/*" inside a line comment, and running the block-comment regex first
 * treats that as a block-comment OPENER — it then swallows 6 kB of real code
 * up to the next `*` `/` sequence (inside a regex literal), and every
 * assertion here would run against a hole where the routes used to be.
 */
const SW_CODE = SW.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

describe('navigation route order', () => {
  const navIdx = SW_CODE.indexOf('new NavigationRoute(');
  const precacheIdx = SW_CODE.indexOf('precacheAndRoute(');

  it('non-vacuity: both registrations exist exactly once', () => {
    expect(navIdx).toBeGreaterThan(-1);
    expect(precacheIdx).toBeGreaterThan(-1);
    expect(SW_CODE.indexOf('new NavigationRoute(', navIdx + 1)).toBe(-1);
    expect(SW_CODE.indexOf('precacheAndRoute(', precacheIdx + 1)).toBe(-1);
  });

  it('the NavigationRoute is registered BEFORE precacheAndRoute', () => {
    // Workbox returns the FIRST matching route. If the precache registers
    // first, it captures navigations to "/" (directoryIndex → index.html) and
    // serves the install-time shell cache-first, so "/" never gets NetworkFirst
    // and every deploy re-opens the stale-shell window.
    expect(navIdx).toBeLessThan(precacheIdx);
  });

  it('navigations stay NetworkFirst with the precached shell as last resort', () => {
    const nav = SW_CODE.slice(navIdx, precacheIdx);
    expect(nav).toMatch(/new NetworkFirst\(/);
    expect(nav).toMatch(/handlerDidError: async \(\) => matchPrecache\('index\.html'\)/);
    expect(nav).toMatch(/denylist: \[\/\^\\\/api\\\/\/\]/);
  });
});

describe('chunk-route guards fail over on non-OK responses', () => {
  // Both the data-chunk route and the general JS route carry the guard. A 404
  // from the missing-asset middleware must throw so NetworkFirst /
  // StaleWhileRevalidate fall back to the cached copy of the old chunk.
  const guards = [...SW_CODE.matchAll(/fetchDidSucceed:[\s\S]{0,400}?return response;/g)];

  it('non-vacuity: both chunk routes have a fetchDidSucceed guard', () => {
    expect(guards.length).toBe(2);
  });

  it('every guard throws on !response.ok, not only on text/html', () => {
    for (const g of guards) {
      expect(g[0]).toContain('!response?.ok');
      expect(g[0]).toMatch(/startsWith\('text\/html'\)/);
      expect(g[0]).toMatch(/throw new Error/);
    }
  });
});
