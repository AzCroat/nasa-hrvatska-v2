/**
 * routeSweepHarness.tsx — the one definition of "open every route and see".
 *
 * TWO sweeps use this: `routeRenderSweep` opens every screen COLD (no content
 * loaded) and `contentShapeSweep` opens every screen with the REAL
 * `/api/content/core` payload in the hook. They must agree on the route list
 * and on what counts as a crash, and a second copy of either would drift —
 * this repo's recurring finding, most recently the hardcoded 56-category
 * vocabulary list that went stale while the payload grew to 89.
 *
 * What CANNOT live here: `vi.mock` calls. They are hoisted per test FILE, so
 * each sweep declares its own context mocks and reads `globalThis.__sweepCtx`,
 * which this module sets.
 */
import React from 'react';
import { expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';

/** Every `currentScreen === '<key>'` branch the real router dispatches on. */
const ROUTER_SRC = readFileSync('src/components/AppRouter.tsx', 'utf8');
export const ROUTE_KEYS: string[] = [
  ...new Set([...ROUTER_SRC.matchAll(/ScreenErrorBoundary key="([a-z0-9_]+)"/g)].map((m) => m[1])),
].sort();

export { ROUTER_SRC };

/**
 * A permissive stand-in for every value the router pulls off its two contexts
 * and its props. Anything a screen reads resolves to something inert rather
 * than undefined, so a crash means the SCREEN is wrong — not that the harness
 * starved it. Unknown keys return a no-op function, which is safe to call and
 * safe to render as a child.
 */
export function makeCtx(currentScreen: string): Record<string, unknown> {
  const base: Record<string, unknown> = {
    currentScreen,
    stats: { xp: 0, lc: 0, gc: 0, badges: [], vs: [], ct: [] },
    setStats: () => {},
    level: 'A1',
    award: () => {},
    authUser: { uid: 'u1', email: 'a@b.c' },
    name: 'Test',
    favs: [],
    jWords: [],
    tab: 'home',
    srchQ: '',
    srchR: [],
    srchOpen: false,
    dchlA: [],
  };
  return new Proxy(base, {
    get(t, p: string) {
      if (p in t) return t[p];
      if (typeof p === 'symbol') return undefined;
      // Arrays and objects are read far more often than they are called;
      // a function satisfies both `x()` and `{x}` without throwing.
      return () => {};
    },
    has: () => true,
  });
}

/**
 * jsdom ships no matchMedia, and PhotoVocabScanner reads it on mount. That is
 * a HARNESS gap, not a defect — every real browser has it — so the polyfill
 * lets the screen actually be exercised instead of being exempted. Exempting
 * it would have recorded a permanent "known failure" for a screen that works.
 */
export function installMatchMedia(): void {
  if (window.matchMedia) return;
  window.matchMedia = ((q: string) => ({
    matches: false,
    media: q,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

/** Render the REAL router at one key. Returns null when clean, else the cause. */
export async function openRoute(
  AppRouter: React.ComponentType<Record<string, unknown>>,
  key: string,
): Promise<string | null> {
  (globalThis as Record<string, unknown>).__sweepCtx = makeCtx(key);
  const ctx = makeCtx(key) as Record<string, unknown>;
  try {
    render(<AppRouter {...ctx} />);
  } catch (e) {
    return `threw during render: ${(e as Error)?.message?.slice(0, 120)}`;
  }
  // Screens are lazy(); give the chunk a chance to resolve and throw.
  try {
    await waitFor(() => expect(document.body.textContent).not.toBe(''), { timeout: 2000 });
  } catch {
    /* an empty screen is not a crash */
  }
  const text = (document.body.textContent || '').trim();
  if (screen.queryByTestId('screen-error-boundary')) return 'boundary engaged';
  // COVERAGE, not just verdicts. A route that renders NOTHING has not been
  // exercised, and counting it as "clean" is the decorative-guard failure this
  // repo keeps rediscovering: the sweep would report 419 passes for screens it
  // never ran. Reported separately so the ratio is visible.
  return text.length === 0 ? 'EMPTY (not exercised)' : null;
}
