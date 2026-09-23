/**
 * navTargetsRoute — every navigation target named in a data table is a screen
 * AppRouter can actually render (sweep 39, 2026-09-23).
 *
 * THERE IS NO CATCH-ALL IN AppRouter. It is one long chain of
 * `currentScreen === '<id>' && (...)`, so an id no branch matches renders
 * NOTHING: a blank content area under the tab bar, with no error, no
 * ScreenErrorBoundary and nothing in Sentry. A dead navigation target is
 * therefore the quietest possible defect — it looks exactly like a screen that
 * has not finished loading.
 *
 * FOUND BY CENSUS, and the census is the guard. Four dead values across the
 * whole of `src`, every one reachable by tapping a visible control:
 *
 *   * `HeritageModeScreen` — `aspect_drill`, `tivi`, `formal_register` against
 *     the real `aspectdrill`, `tivicompare`, `formalregister`. Three cards in
 *     the Heritage Mode menu that went to a blank page.
 *   * `CroatianErrorInsights` — `'quiz'`, which is not a route at all (the
 *     multiple-choice game is `mcgame`). It was two ERROR_META entries, the
 *     DEFAULT meta for every unrecognised error pattern, two rows of the weak-
 *     topic map, AND its `|| 'quiz'` fallback. Measured against the topic ids
 *     `recordTopicResult` is actually called with in production, NINE OF TWELVE
 *     weak topics resolved to it.
 *
 * WHAT THIS DOES NOT CHECK, stated rather than implied: a target can route and
 * still not work if its branch is PAYLOAD-GATED — `currentScreen === 'speaking'`
 * renders `ScreenGuard` unless a launcher set `sw` first. Thirty-one
 * navigations in `src` name such a screen and almost all are legitimate (the
 * launcher sets the payload, then navigates), so a blanket rule here would be
 * thirty-one false positives — the lint's 123-false-positive lesson. The one
 * real instance (`FluencySnapshot`'s speaking nudge, which used a plain
 * `setScr`) is pinned in `fluencySnapshot.test.tsx` against the same derived
 * gated set, where the launcher question can actually be answered.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';

const SRC = resolve(__dirname, '..');
const ROUTER = join(SRC, 'components/AppRouter.tsx');

const FILES: string[] = [];
(function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === 'tests') continue;
      walk(p);
    } else if (/\.tsx?$/.test(name)) FILES.push(p);
  }
})(SRC);

function strip(file: string): string {
  return readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
}

/** Every id AppRouter has a branch for. Derived — never restated here. */
export const ROUTED: ReadonlySet<string> = new Set(
  [...readFileSync(ROUTER, 'utf8').matchAll(/currentScreen === '([^']+)'/g)].map((m) => m[1]!),
);

/** The fields a data table uses to name where a tap goes. */
const NAV_FIELD = /\b(screen|scr|go|practiceScreen)\s*:\s*'([a-zA-Z_][a-zA-Z0-9_-]*)'/g;
const SET_SCR = /\bsetScr\(\s*'([^']+)'\s*\)/g;

interface Target {
  id: string;
  where: string;
}

const TARGETS: Target[] = [];
for (const file of FILES) {
  if (file === ROUTER) continue;
  const src = strip(file);
  const where = relative(SRC, file);
  for (const m of src.matchAll(NAV_FIELD))
    TARGETS.push({ id: m[2]!, where: `${where} (${m[1]}:)` });
  for (const m of src.matchAll(SET_SCR)) TARGETS.push({ id: m[1]!, where: `${where} (setScr)` });
}

describe('the router is the only definition of a screen that exists', () => {
  it('finds a substantial subject — an empty census proves nothing', () => {
    // Both halves, because they decay differently: a data table can lose its
    // field NAME (then NAV_FIELD yields nothing) and a component can stop
    // calling setScr with a literal (then SET_SCR does).
    expect(ROUTED.size).toBeGreaterThan(300);
    expect(TARGETS.filter((t) => t.where.includes('(setScr)')).length).toBeGreaterThan(40);
    expect(TARGETS.filter((t) => !t.where.includes('(setScr)')).length).toBeGreaterThan(40);
  });

  it('every navigation target in src has a router branch', () => {
    const dead = TARGETS.filter((t) => !ROUTED.has(t.id));
    expect(
      dead.map((t) => `${t.id}  ← ${t.where}`).sort(),
      'these navigate to an id AppRouter has no case for. There is no catch-all, ' +
        'so the content area renders EMPTY — no error, no boundary, nothing in Sentry. ' +
        'Either the id is a typo for a real branch, or the destination does not exist ' +
        'and the control should not be there.',
    ).toEqual([]);
  });

  it('the census actually resolves ids, verified by a control', () => {
    // Without this the assertion above passes just as happily on a broken
    // matcher that finds nothing, or a ROUTED set that contains everything.
    expect(ROUTED.has('definitely_not_a_screen')).toBe(false);
    expect(ROUTED.has('review')).toBe(true);
    expect(TARGETS.some((t) => t.id === 'review')).toBe(true);
  });
});
