/**
 * screenBoundaryCoverage.test.ts — every routed screen crashes by NAME.
 *
 * THE GAP. AppRouter routes 429 screens and wraps 425 of them in
 * `<ScreenErrorBoundary name="…">`. Three rendered bare: `welcome`,
 * `placement` and `equivalency` — onboarding, the placement test, and the
 * Level Check, which is where a learner's CEFR standing is decided. A crash in
 * any of them escaped to the root boundary, which means:
 *
 *   - it is reported as scope `'root'`, not as the screen, so the one question
 *     you ask of a crash report — WHICH screen — is unanswerable. That is the
 *     same defect class as the codeless 502 that made six different
 *     `err(502, …)` paths indistinguishable in Sentry;
 *   - the learner gets the whole-app crash card and a full page reload instead
 *     of the per-screen "Try Again / Go Back" that keeps the app mounted.
 *
 * WHAT IT IS NOT, because I got this wrong first and it is worth recording:
 * the boundary's `componentDidCatch` also self-heals stale-chunk errors, and I
 * was about to report those three screens as missing that heal. They are not.
 * `lazyWithReload` catches a chunk failure AT THE IMPORT SITE and calls
 * `reloadWithCachePurge` before any boundary is involved, capped at 2 attempts.
 * The boundary's copy is a second line. Check where a mechanism actually lives
 * before reporting its absence.
 *
 * DERIVED FROM THE ROUTER, not a list. A screen added next month is covered
 * without anyone remembering this file — which is the whole reason the three
 * above went unnoticed: nothing counted.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const strip = (s: string) => s.replace(/(^|[^:])\/\/.*$/gm, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const ROUTER = strip(readFileSync('src/components/AppRouter.tsx', 'utf8'));

/** Every screen id the router can render. */
const SCREENS = [
  ...new Set([...ROUTER.matchAll(/currentScreen\s*===\s*'([^']+)'/g)].map((m) => m[1]!)),
];

/** Every screen a boundary names. `name` is what reaches Sentry, so it is the field checked. */
const NAMED = new Set(
  [...ROUTER.matchAll(/<ScreenErrorBoundary[^>]*\bname="([^"]+)"/g)].map((m) => m[1]!),
);

/**
 * The one screen deliberately left to the root boundary, with its reason.
 *
 * `dashboard` is not a lazy screen component — it is the app shell, rendered
 * as inline JSX (search bar, tab content, chrome). The root boundary IS the
 * right level for the shell: if the shell is broken there is no "rest of the
 * app" left to keep mounted, and a per-screen card inside a broken shell would
 * be the thing that failed.
 *
 * Checked in BOTH staleness directions below — an exemption that no longer
 * describes anything is the `idioms` failure this repo has already met once.
 */
const ROOT_BOUNDARY_ONLY = ['dashboard'];

describe('the derivation is real', () => {
  it('finds the routes and the boundaries', () => {
    // Either side coming back empty makes every assertion below vacuous.
    expect(SCREENS.length).toBeGreaterThan(400);
    expect(NAMED.size).toBeGreaterThan(400);
  });
});

describe('every routed screen is wrapped in a named boundary', () => {
  it('has no screen that crashes anonymously', () => {
    const bare = SCREENS.filter((s) => !NAMED.has(s) && !ROOT_BOUNDARY_ONLY.includes(s));
    expect(
      bare,
      'These screens render with no <ScreenErrorBoundary name="…">, so a crash ' +
        'in them is reported as scope `root` — the report cannot say which screen ' +
        'broke — and the learner gets the whole-app crash card instead of a ' +
        'per-screen retry:\n' +
        bare.map((b) => `  - ${b}`).join('\n'),
    ).toEqual([]);
  });

  it('the three that were bare are specifically covered', () => {
    // Named explicitly because of WHAT they are: onboarding, the placement
    // test, and the Level Check that decides a learner's CEFR standing.
    for (const s of ['welcome', 'placement', 'equivalency']) expect(NAMED.has(s)).toBe(true);
  });
});

describe('the exemption is honest in both directions', () => {
  it.each(ROOT_BOUNDARY_ONLY)('%s is still routed', (s) => {
    // An exemption for a screen that no longer exists guards nothing while
    // suspending the rule.
    expect(SCREENS).toContain(s);
  });

  it.each(ROOT_BOUNDARY_ONLY)('%s is still genuinely unwrapped', (s) => {
    // ...and one that HAS since been wrapped should come off the list, or the
    // list quietly stops meaning what it says.
    expect(NAMED.has(s)).toBe(false);
  });
});

describe('a named boundary is worth having', () => {
  const SEB = strip(readFileSync('src/components/shared/ScreenErrorBoundary.tsx', 'utf8'));

  it('reports the crash under the screen name', () => {
    // The whole value of the `name` prop. Without this call the wrapper is
    // decorative: the learner gets a nicer card and Sentry learns nothing.
    expect(SEB).toMatch(/componentDidCatch/);
    expect(SEB).toMatch(/reportBoundaryError\(\s*error,\s*info,\s*screenName/);
  });
});
