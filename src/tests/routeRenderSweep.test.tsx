/**
 * routeRenderSweep.test.tsx — every routable screen must survive being opened
 * COLD, with no content payload loaded.
 *
 * THE BUG CLASS THIS EXISTS FOR. `ScenesScreen` read `scene.qs.map` against a
 * payload whose items carry `items`, so it threw on EVERY open from the day it
 * was created and nobody knew for three weeks (Sentry 0d68c47c, 2026-09-05).
 * It was not an obscure screen and it was not a subtle throw — it was total,
 * immediate, and completely invisible.
 *
 * IT WAS INVISIBLE BY CONSTRUCTION, which is the part worth understanding.
 * `AppRouter` wraps its screens in `ScreenErrorBoundary` 865 times. That is
 * correct — one broken screen must not destroy a learner's session — but it
 * means a screen that throws renders a card and dies quietly. Nothing fails,
 * no test goes red, and the only witness is Sentry, whose server relay was
 * itself not forwarding anything until 2026-09-04.
 *
 * So this sweep does not look for uncaught exceptions; the boundary eats
 * those. It renders the REAL router at each route key and asserts the boundary
 * did not engage. A test that rendered the components directly would prove
 * they work when wired — the component-test/wiring-test split this repo has
 * been bitten by twice (AlphabetScreen's `award`, the speaking coach's
 * unreachable state).
 *
 * COLD IS HALF THE JOB, and the half that could not have caught ScenesScreen.
 * With no payload loaded, `content?.SCENES ?? []` is empty and the bad
 * dereference is never reached. `contentShapeSweep.test.tsx` is the other
 * half: the same sweep with the REAL `/api/content/core` payload in the hook.
 * Cold still matters on its own — first paint, offline, and a failed content
 * fetch are all real states a learner meets.
 *
 * WHAT NEITHER CAN SEE, stated so the next reader does not over-trust them: a
 * screen that renders fine and is WRONG. The audio bug never threw — it
 * returned a 400. Silent wrongness needs Sentry or a field report; these catch
 * the class that crashes.
 */
// Firebase reaches for IndexedDB on init, and jsdom has none — the rejection
// is unhandled and Vitest warns it can cause false positives across the whole
// run. A test that pollutes the suite it lives in is not acceptable, so the
// sweep brings the real shim the repo already depends on.
import 'fake-indexeddb/auto';
// Type-only now: rendering moved to the shared harness, so nothing here
// touches the React runtime.
import type React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { ROUTE_KEYS, ROUTER_SRC, installMatchMedia, openRoute } from './helpers/routeSweepHarness';

describe('the sweep knows what it is sweeping', () => {
  it('derives the route list from the router, never a hand-written copy', () => {
    // A hand-maintained list decays exactly like the one that hid 1,030
    // vocabulary words — and it decays quietly, passing at whatever rate it
    // still covers.
    expect(ROUTE_KEYS.length).toBeGreaterThan(300);
    expect(ROUTE_KEYS).toContain('history');
    expect(ROUTE_KEYS).toContain('top100');
  });

  it('the boundary it watches for is the one the router actually uses', () => {
    const boundary = readFileSync('src/components/shared/ScreenErrorBoundary.tsx', 'utf8');
    expect(boundary).toMatch(/data-testid="screen-error-boundary"/);
    expect(boundary).toMatch(/getDerivedStateFromError/);
    expect(ROUTER_SRC).toMatch(/<ScreenErrorBoundary/);
  });
});

// The context mocks cannot move into the harness: `vi.mock` is hoisted per
// test FILE. The harness sets `globalThis.__sweepCtx`; these read it.
vi.mock('../context/AppContext', async (orig) => {
  const real = (await orig()) as Record<string, unknown>;
  return { ...real, useApp: () => (globalThis as Record<string, unknown>).__sweepCtx };
});
vi.mock('../context/StatsContext', async (orig) => {
  const real = (await orig()) as Record<string, unknown>;
  return {
    ...real,
    useStats: () => (globalThis as Record<string, unknown>).__sweepCtx,
  };
});

installMatchMedia();

let AppRouter: React.ComponentType<Record<string, unknown>>;
beforeEach(async () => {
  ({ default: AppRouter } = await import('../components/AppRouter'));
});
afterEach(() => {
  (globalThis as Record<string, unknown>).__sweepCtx = undefined;
});

describe('opening a route does not crash the screen', () => {
  it('sweeps every route key through the real router', async () => {
    const broken: { key: string; why: string }[] = [];
    for (const key of ROUTE_KEYS) {
      const why = await openRoute(AppRouter, key);
      if (why) broken.push({ key, why });
      cleanup();
    }
    const crashed = broken.filter((b) => b.why === 'boundary engaged');
    const empty = broken.filter((b) => b.why !== 'boundary engaged').map((b) => b.key);
    // NO ARTIFACT FILE. This used to write the result set to a fixed path in
    // the OS temp dir, which CodeQL correctly flagged on PR #639: a predictable
    // temp filename is the symlink/TOCTOU pattern, and a test should not be
    // leaving side-effect files behind at all. It was a scaffold for reading
    // results while the sweep was being built; the assertions below now carry
    // the same information in their failure messages, so it bought nothing.
    // THE ASSERTION. A screen that throws on open is a total, silent outage of
    // that feature: the boundary renders a card and the learner's only signal
    // is that nothing works.
    expect(
      crashed.map((c) => c.key),
      `screen(s) crash on open: ${crashed.map((c) => c.key).join(', ')}`,
    ).toEqual([]);

    // COVERAGE IS ASSERTED TOO, because a sweep that stops exercising screens
    // reports the same green as a sweep that finds nothing wrong. This is the
    // ratio rule: count what the guard MISSES, not the list length.
    expect(
      d_exercisedFloor(ROUTE_KEYS.length) <= ROUTE_KEYS.length - empty.length,
      `only ${ROUTE_KEYS.length - empty.length}/${ROUTE_KEYS.length} routes rendered anything — ` +
        `the sweep has stopped exercising screens: ${empty.slice(0, 10).join(', ')}`,
    ).toBe(true);

    // `reading` renders nothing under the harness: its branch is gated on a
    // passage handed in at launch, which no stub supplies. Recorded rather
    // than silently counted as clean — it is the ONE route this sweep does not
    // cover, and naming it is what stops that number growing unnoticed.
    expect(empty).toEqual(['reading']);
  }, 600000);
});

/** 99% of routes must actually render — one gated route is the known floor. */
function d_exercisedFloor(total: number): number {
  return total - 1;
}
