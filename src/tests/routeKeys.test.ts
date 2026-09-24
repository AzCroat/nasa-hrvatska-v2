/**
 * routeKeys.test.ts — the blank page at the end of a stale link (2026-09-24).
 *
 * `App.tsx`'s path effect did `_setCurrentScreen(p.slice(1))` with no
 * validation. The SPA fallback serves index.html for every path, so ANY address
 * became a screen key; an unknown one matches no branch in `AppRouter`, which
 * has no fallback. Measured in a real browser, seeded and authenticated:
 *
 *   /genitivedrill   main content 1,388 characters
 *   /nonsense        main content    33 characters   (header + tab bar only)
 *   /culture         main content    33
 *   /Dashboard       main content    33
 *
 * `/culture` is the one that matters: the Croatia tab was CALLED Culture until
 * 2026-04-26 (this repo's nav table carried the stale name for five months
 * afterwards), so every link and bookmark from before that date lands on a page
 * with no message, no active tab and nothing to do — the dead end the
 * next-step directive exists to forbid, on the one route no spec visits.
 * `/Dashboard` is the same thing one capital letter away from a real screen.
 *
 * THE LIST IS THE RISK, AND IT IS WHY THIS FILE EXISTS. A 430-entry set of
 * screen keys is exactly the hand-maintained list this repo keeps finding
 * decayed — so it is DERIVED from `AppRouter.tsx` here and compared in BOTH
 * directions. A screen added without its key would send its own URL to the
 * not-found card; a key left behind after a screen is deleted would send a dead
 * path to a blank page again. Both are a red build.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { ROUTE_KEYS, NOT_FOUND_SCREEN, isKnownScreen } from '../lib/routeKeys';

const ROUTER = readFileSync('src/components/AppRouter.tsx', 'utf8');
const APP = readFileSync('src/App.tsx', 'utf8');

/** The keys the router actually branches on, read from its own source. */
const DERIVED = new Set(
  [...ROUTER.matchAll(/currentScreen === '([a-zA-Z0-9_-]+)'/g)].map((m) => m[1]),
);

describe('the derivation is real', () => {
  it('finds the app’s screens, not a handful', () => {
    expect(DERIVED.size).toBeGreaterThan(300);
    expect(DERIVED.has('dashboard')).toBe(true);
  });
});

describe('ROUTE_KEYS is exactly what AppRouter branches on', () => {
  it('names no screen the router does not have', () => {
    const extra = [...ROUTE_KEYS].filter((k) => !DERIVED.has(k));
    expect(
      extra,
      'these keys no longer exist in AppRouter — a learner reaching one gets a ' +
        'blank page, because isKnownScreen() waves it through and nothing renders',
    ).toEqual([]);
  });

  it('misses no screen the router has', () => {
    const missing = [...DERIVED].filter((k) => !ROUTE_KEYS.has(k));
    expect(
      missing,
      'these screens exist but are not in ROUTE_KEYS, so their own URL now ' +
        'resolves to the not-found card — regenerate the list',
    ).toEqual([]);
  });
});

describe('the not-found screen', () => {
  it('is not itself one of the derived keys', () => {
    // It is branched on through the CONSTANT, so the derivation cannot see it —
    // which is correct: `/not_found` typed by hand should land on the card too.
    expect(DERIVED.has(NOT_FOUND_SCREEN)).toBe(false);
    expect(isKnownScreen(NOT_FOUND_SCREEN)).toBe(false);
  });

  it('has a branch in AppRouter that renders the card', () => {
    expect(ROUTER).toMatch(/currentScreen === NOT_FOUND_SCREEN/);
    expect(ROUTER).toMatch(/<ScreenNotFound\b/);
  });

  it('is what the path effect falls back to, and the raw form is gone', () => {
    // The defect was one unguarded line; a source pin is what stops it coming
    // back in a refactor that "simplifies" the ternary away.
    expect(APP).toMatch(/_setCurrentScreen\(isKnownScreen\(scr\) \? scr : NOT_FOUND_SCREEN\)/);
    expect(APP).not.toMatch(/_setCurrentScreen\(scr\);/);
  });
});

describe('isKnownScreen', () => {
  it('accepts a real screen and refuses everything else', () => {
    expect(isKnownScreen('dashboard')).toBe(true);
    expect(isKnownScreen('genitivedrill')).toBe(true);
    expect(isKnownScreen('nonsense')).toBe(false);
    // the two real-world cases this was written for
    expect(isKnownScreen('culture')).toBe(false);
    expect(isKnownScreen('Dashboard')).toBe(false);
  });
});
