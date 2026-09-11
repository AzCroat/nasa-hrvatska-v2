/**
 * contentShapeSweep.test.tsx — every screen must survive the REAL payload.
 *
 * THE BUG THIS REPRODUCES. `ScenesScreen` computed
 * `SCENES.reduce((s, sc) => s + sc.qs.length, 0)` against `/api/content/core`,
 * whose SCENES entries carry `items`, not `qs`. A comment said the local
 * `SCENES` export had "moved server-side"; it had not — the payload key and
 * the local export shared a NAME and held different DATA. The screen threw on
 * every open from the day it was pointed at `useContent`, and nobody knew for
 * three weeks (Sentry 0d68c47c, 2026-09-05).
 *
 * WHY THE COLD SWEEP CANNOT CATCH IT, which is the whole reason this file
 * exists as a second pass rather than a stricter first one. `routeRenderSweep`
 * opens every route with no payload loaded, so `content?.SCENES ?? []` is an
 * empty array, `.reduce` never runs its callback, and the bad dereference is
 * never reached. The sweep reports the screen clean — correctly, for the state
 * it tested. A guard that covers most of a thing reads exactly like a guard
 * that covers the thing.
 *
 * So this sweep primes `useContent` with the ACTUAL `/api/content/core` body,
 * assembled from the same `_data/core.js` module and the same `KEYS` list the
 * endpoint serves, and then opens all 421 routes. TypeScript cannot do this
 * job: `Content` types every field as `Record<string, unknown>` / `unknown[]`
 * on purpose, so the shape INSIDE a key is unchecked by construction — and
 * `as any[]` at the call site, which is what ScenesScreen used, would defeat it
 * even if it were not.
 *
 * WHAT IT STILL CANNOT SEE: a screen that renders fine and shows the wrong
 * thing. This catches the class that throws.
 */
import 'fake-indexeddb/auto';
import React from 'react';
import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest';
import { render, cleanup, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import * as CORE from '../../functions/api/content/_data/core.js';
import { ROUTE_KEYS, installMatchMedia, openRoute } from './helpers/routeSweepHarness';
import { useContent, peekContent, _resetContentHookForTests } from '../hooks/useContent';

/**
 * The served key list, DERIVED from the endpoint rather than restated. A
 * hand-copied list here would be the exact defect the sweep hunts: it would go
 * stale as the payload grew and the sweep would quietly stop exercising the
 * new keys, while still reporting green.
 */
const CORE_SRC = readFileSync('functions/api/content/core.js', 'utf8');
const KEYS: string[] = (() => {
  const block = CORE_SRC.slice(CORE_SRC.indexOf('const KEYS = ['), CORE_SRC.indexOf('];'));
  return [...block.matchAll(/^\s*'([A-Z0-9_]+)',/gm)].map((m) => m[1]);
})();

/** The body `buildBody()` returns, built the same way. */
const PAYLOAD: Record<string, unknown> = {};
for (const k of KEYS) PAYLOAD[k] = (CORE as Record<string, unknown>)[k];

vi.mock('../lib/contentClient', async (orig) => {
  const real = (await orig()) as Record<string, unknown>;
  return {
    ...real,
    getContent: () => Promise.resolve((globalThis as Record<string, unknown>).__corePayload),
  };
});

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

describe('the payload under test is the one the endpoint serves', () => {
  it('derives the key list from core.js, never a hand-written copy', () => {
    expect(KEYS.length).toBeGreaterThanOrEqual(30);
    expect(KEYS).toContain('SCENES');
    expect(KEYS).toContain('V_LEVELS');
    // Every served key must actually resolve to content. A key that came back
    // undefined would make this sweep silently test `?? []` fallbacks instead
    // of the real shapes — passing for the same reason the cold sweep passes.
    const missing = KEYS.filter((k) => PAYLOAD[k] === undefined);
    expect(missing, `served keys absent from the data module: ${missing.join(', ')}`).toEqual([]);
  });

  it('carries the shape the historical bug turned on', () => {
    // Not decoration: if SCENES entries ever stop carrying `items`, the
    // positive control below stops meaning anything and this says so.
    const scenes = PAYLOAD.SCENES as { items?: unknown[] }[];
    expect(Array.isArray(scenes)).toBe(true);
    expect(scenes.length).toBeGreaterThan(0);
    expect(Array.isArray(scenes[0].items)).toBe(true);
    expect(
      (scenes[0] as Record<string, unknown>).qs,
      'SCENES now carries `qs` — the bug that motivated this sweep has changed shape',
    ).toBeUndefined();
  });
});

function Probe(): React.ReactElement {
  const { content } = useContent();
  return <div data-testid="probe">{content ? 'loaded' : 'cold'}</div>;
}

let AppRouter: React.ComponentType<Record<string, unknown>>;

beforeAll(async () => {
  (globalThis as Record<string, unknown>).__corePayload = PAYLOAD;
  _resetContentHookForTests();
  // Prime the hook's MODULE-level state once. Every screen rendered afterwards
  // sees the payload synchronously, which is the state a returning learner is
  // actually in — the hook caches across mounts by design.
  (globalThis as Record<string, unknown>).__sweepCtx = { currentScreen: 'home', stats: {} };
  render(<Probe />);
  await waitFor(() => expect(peekContent()).not.toBeNull(), { timeout: 5000 });
  cleanup();
});

beforeEach(async () => {
  ({ default: AppRouter } = await import('../components/AppRouter'));
});
afterEach(() => {
  (globalThis as Record<string, unknown>).__sweepCtx = undefined;
});

describe('opening a route with the real payload does not crash the screen', () => {
  it('the payload really is loaded before the sweep starts', () => {
    // Without this the whole sweep degrades to the cold one and reports the
    // same green — testing the `?? []` fallbacks and nothing else.
    expect(peekContent()).not.toBeNull();
    expect((peekContent() as unknown as Record<string, unknown>).SCENES).toBeDefined();
  });

  it('sweeps every route key through the real router', async () => {
    const broken: { key: string; why: string }[] = [];
    for (const key of ROUTE_KEYS) {
      const why = await openRoute(AppRouter, key);
      if (why) broken.push({ key, why });
      cleanup();
    }
    const crashed = broken.filter((b) => b.why === 'boundary engaged');
    const empty = broken.filter((b) => b.why !== 'boundary engaged').map((b) => b.key);

    expect(
      crashed.map((c) => c.key),
      `screen(s) crash on open WITH the real content payload: ${crashed
        .map((c) => c.key)
        .join(', ')}`,
    ).toEqual([]);

    // Coverage asserted, same ratio rule as the cold sweep. Note the floor is
    // checked against the same one-route allowance: loading content can only
    // make MORE screens render, never fewer.
    expect(
      ROUTE_KEYS.length - empty.length >= ROUTE_KEYS.length - 1,
      `only ${ROUTE_KEYS.length - empty.length}/${ROUTE_KEYS.length} routes rendered anything: ` +
        empty.slice(0, 10).join(', '),
    ).toBe(true);
  }, 600000);
});
