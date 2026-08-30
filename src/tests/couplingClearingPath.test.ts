// src/tests/couplingClearingPath.test.ts
//
// A ROUTED SCREEN MUST BE ABLE TO CLEAR THE COUPLING (2026-08-29).
//
// The teach → practice coupling has now been found broken three times, each in
// a different place, and each time the suite guarding the previous break stayed
// green:
//
//   1. the category had no route at all        → curriculumCouplingResolves
//   2. the route resolved but never cleared    → recordScreenPractised (route-based)
//   3. the screen itself cannot complete       → this file
//
// Case 3 is the one neither of the others can see. `curriculumCouplingResolves`
// round-trips every mapping by CALLING the clearing function directly, which is
// the right way to test the queue and says nothing about whether the screen the
// learner actually lands on ever calls it. In production almost every drill
// reaches `recordScreenPractised` through `completeExercise` — so a screen that
// grades and awards by itself, or has no quiz at all, is a dead end: the
// coupling resolves, the learner is sent there, does the work, and the queue
// entry sits for its full 14-day TTL re-claiming a session slot every day.
//
// Its first run found three, across three different levels, all live:
//   * `writing_guided` — grades against the /api/correct rubric and awards from
//     the score, so it never touched completeExercise. This is the route for
//     B2 `formal-email` and C1 academic writing. Fixed here with the one call.
//   * `relpron` — awards per correct answer and credits `gc` itself. This is
//     CATEGORY_EASIER_SCREEN.subordination, the B1 relative-clause route.
//     Fixed here the same way.
//   * `idioms` — see below; that one needs content, not a call.
//
// This walks the REAL router and the REAL import graph, because the alternative
// — a list of screens written in this file — is the mistake `a2Curriculum.test`
// made: a test that restates production data cannot check production data.
//
// One trap worth recording, because it cost a first run: every screen in
// AppRouter is wrapped in `<ScreenErrorBoundary>`, so the naive "first
// capitalised tag after the route guard" picks the boundary for all of them and
// reports every single screen as broken. A guard that fails for everything is
// as useless as one that passes for everything.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from '../lib/categoryRoutes';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, '..');
const ROUTER = path.join(SRC, 'components/AppRouter.tsx');
const EXTS = ['.tsx', '.ts', '.jsx', '.js'];

/**
 * Screens the coupling can send a learner to whose completion does NOT reach
 * `recordScreenPractised`. Each entry states what is actually wrong, because
 * the two are different faults with different fixes.
 *
 * THIS SET IS EMPTY as of 2026-08-30, and every dead end it ever held is fixed.
 *
 * It is not a suppression list. Two tests below hold it honest, and the second
 * exists because of how the last entry left: an exemption can go stale in TWO
 * ways, and only one of them was covered.
 *
 *   1. the screen GAINS a clearing path — covered from the start, and it caught
 *      its own `relpron` entry going stale within a single session;
 *   2. nothing ROUTES to the screen any more, so the exemption guards nothing —
 *      NOT covered, and that is exactly what happened to `idioms`. Repointing
 *      the category at the real drill left this file green with an exemption
 *      that had stopped meaning anything, still recording a live dead end that
 *      no longer existed.
 */
const KNOWN_NO_CLEARING_PATH: Record<string, string> = {
  // `idioms` was the last entry, removed 2026-08-30 by repointing the category
  // from `idioms` (IdiomsScreen, a browse list with no completion) to
  // `idiomdrill` — a real graded C1 drill that was in the pool the whole time.
  // The exemption's recorded reason said the fix was "an idiom DRILL at C1
  // (`frazeologija` exists but is C2)". It named the wrong candidate: nothing
  // ever had to be authored. See the comment on the route in categoryRoutes.ts.
};

function resolveModule(fromDir: string, spec: string): string | null {
  const base = path.resolve(fromDir, spec);
  for (const ext of EXTS) if (fs.existsSync(base + ext)) return base + ext;
  for (const ext of EXTS) {
    const idx = path.join(base, 'index' + ext);
    if (fs.existsSync(idx)) return idx;
  }
  return null;
}

/**
 * Does this module, or anything it imports, reach `recordScreenPractised`?
 *
 * Two ways in, and both count: `completeExercise` calls it for every drill that
 * goes through the shared completion authority, and a screen with its own
 * grading (guided writing grades against the /api/correct rubric and awards
 * from the score) may call it directly. What is NOT acceptable is neither.
 */
function reachesClearingPath(file: string, seen = new Set<string>()): boolean {
  if (seen.has(file)) return false;
  seen.add(file);
  // DECLARATIONS ARE NOT CALL SITES (2026-08-30). Found by mutation while
  // wiring `alphabet`: deleting its `recordScreenPractised('alphabet')` call
  // left this whole suite GREEN, because the screen still imported
  // `lib/teachPractice` — and that module DECLARES `recordScreenPractised`, so
  // following the import matched the declaration and reported the screen as
  // reaching the clearing path. Removing the import as well turned it red,
  // which isolates the cause exactly.
  //
  // The hole is worse than one screen: ANY screen that imports teachPractice
  // for any reason at all would have satisfied this guard without calling
  // anything. Stripping the declaration is the narrow fix — a module that only
  // defines the function no longer answers the question, while every genuine
  // call site (ModeDrill's `completeExercise(...)`, GuidedWritingScreen's
  // direct call) still does.
  const src = fs
    .readFileSync(file, 'utf8')
    .replace(/\bfunction\s+(?:completeExercise|recordScreenPractised)\s*\(/g, 'function __decl__(');
  if (/\b(completeExercise|recordScreenPractised)\s*\(/.test(src)) return true;
  const dir = path.dirname(file);
  // `import type` is erased at build time, so it is not a runtime path. Following
  // it would report every drill DATA BANK as "reaching" completeExercise, purely
  // because the bank imports the ModeDrillItem type — which would quietly make
  // this whole file assert nothing.
  for (const m of src.matchAll(/import\s+(?!type\b)[^;]*?from\s+'(\.[^']+)'/g)) {
    const next = resolveModule(dir, m[1]!);
    if (next && reachesClearingPath(next, seen)) return true;
  }
  return false;
}

const routerSrc = fs.readFileSync(ROUTER, 'utf8');

/** screen id → the component AppRouter renders for it. */
function componentForScreen(screen: string): string | null {
  const marker = `currentScreen === '${screen}'`;
  const at = routerSrc.indexOf(marker);
  if (at === -1) return null;
  const block = routerSrc.slice(at, at + 600);
  // Skip the error boundary every route is wrapped in (and Suspense, where one
  // is used) — the screen component is the first tag that is neither.
  for (const m of block.matchAll(/<([A-Z]\w+)[\s/>]/g)) {
    const name = m[1]!;
    if (name !== 'ScreenErrorBoundary' && name !== 'Suspense') return name;
  }
  return null;
}

/** component name → its module path, from either import form. */
function fileForComponent(name: string): string | null {
  const lazy = routerSrc.match(
    new RegExp(`const ${name} = lazyWithReload\\(\\s*\\(\\) => import\\('([^']+)'\\)`),
  );
  const direct = routerSrc.match(new RegExp(`^import ${name} from '([^']+)'`, 'm'));
  const spec = lazy?.[1] ?? direct?.[1];
  return spec ? resolveModule(path.join(SRC, 'components'), spec) : null;
}

const ROUTED_SCREENS = [
  ...new Set([...Object.values(CATEGORY_SCREEN_MAP), ...Object.values(CATEGORY_EASIER_SCREEN)]),
].sort();

describe('every screen the coupling routes to can clear the coupling', () => {
  it('has screens to check', () => {
    // A silently empty list would make every assertion below vacuous.
    expect(ROUTED_SCREENS.length).toBeGreaterThan(20);
  });

  const checked = ROUTED_SCREENS.filter((s) => !(s in KNOWN_NO_CLEARING_PATH));

  it.each(checked)('%s can discharge the queue when the learner finishes it', (screen) => {
    const comp = componentForScreen(screen);
    expect(
      comp,
      `AppRouter has no route block for "${screen}" — the coupling sends nowhere`,
    ).toBeTruthy();
    const file = fileForComponent(comp!);
    expect(file, `could not resolve the module for <${comp}>`).toBeTruthy();
    expect(
      reachesClearingPath(file!),
      `<${comp}> (${screen}) reaches neither completeExercise nor recordScreenPractised. ` +
        `A coupling to it resolves, sends the learner there, and then never clears — the queue ` +
        `entry re-claims a session slot every day for its full 14-day TTL. Either finish the ` +
        `screen through completeExercise, call recordScreenPractised at its genuine completion ` +
        `point, or do not route a category to it.`,
    ).toBe(true);
  });
});

describe('the exemptions are real', () => {
  const entries = Object.entries(KNOWN_NO_CLEARING_PATH);

  it('the set is empty, or every entry below is checked', () => {
    // `it.each` over an empty list registers no tests, so without this the two
    // blocks below would silently assert nothing once the set emptied. Stating
    // the count is what makes an empty set a deliberate fact rather than a gap.
    expect(entries.length).toBe(0);
  });

  it.each(entries)('%s still genuinely lacks a clearing path', (screen, reason) => {
    const comp = componentForScreen(screen);
    expect(comp, `no router block for exempted screen "${screen}"`).toBeTruthy();
    const file = fileForComponent(comp!);
    expect(file, `could not resolve the module for exempted <${comp}>`).toBeTruthy();
    expect(
      reachesClearingPath(file!),
      `${screen} is exempted ("${reason}") but now DOES reach the clearing path. ` +
        `Remove it from KNOWN_NO_CLEARING_PATH — a stale exemption hides the next regression.`,
    ).toBe(false);
  });

  it.each(entries)('%s is still a screen the coupling can actually reach', (screen) => {
    // THE SECOND WAY AN EXEMPTION GOES STALE, and the one that was uncovered
    // until 2026-08-30. If no category routes here any more, the exemption
    // guards nothing while still asserting a live dead end exists. `idioms` sat
    // in exactly that state the moment its category was repointed, and this
    // file stayed green.
    expect(
      ROUTED_SCREENS,
      `${screen} is exempted but nothing routes to it — the exemption is moot. Delete it.`,
    ).toContain(screen);
  });
});

describe('the walker itself works', () => {
  // Mutation insurance. Both halves above are only meaningful if
  // reachesClearingPath can actually tell the two cases apart; a walker
  // that always returned true would make the first block vacuous, and one that
  // always returned false would make the second block vacuous.
  it('sees a direct call', () => {
    const engine = path.join(SRC, 'components/practice/ModeDrill.tsx');
    expect(reachesClearingPath(engine)).toBe(true);
  });

  it('sees a call one import away', () => {
    // Every engine-backed drill is a wrapper whose own file never mentions
    // completeExercise — the call is in ModeDrill.
    const wrapper = path.join(SRC, 'components/practice/drills/QuestionsDrill.tsx');
    expect(/completeExercise/.test(fs.readFileSync(wrapper, 'utf8'))).toBe(false);
    expect(reachesClearingPath(wrapper)).toBe(true);
  });

  it('does not see one where there is none', () => {
    const bank = path.join(SRC, 'data/drills/questionsDrill.ts');
    expect(reachesClearingPath(bank)).toBe(false);
  });
});
