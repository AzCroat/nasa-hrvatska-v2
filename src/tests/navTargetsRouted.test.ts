/**
 * navTargetsRouted.test.ts — every in-screen navigation target is a real screen.
 *
 * WHY THIS EXISTS
 * ---------------
 * Sweep 67 measured the SEARCH index's targets (2,467 rows, 67 distinct, all
 * routed) and wrote `searchIndexTargets.test.ts` for them, noting that search is
 * "the one door with no guard at all". Search is not the only door. Screens
 * navigate each other directly, and `exerciseCatalog.ts` is a hand-maintained
 * list of Practice-tab cards whose whole job is to name a screen — the decaying
 * -list shape this repo keeps rediscovering.
 *
 * A target that names no routed key is not a crash and not an error. It is a tap
 * that goes nowhere: `currentScreen` becomes a string the router has no branch
 * for, and the learner gets a blank surface. That is the owner's standing
 * complaint in its purest form, and nothing checked it.
 *
 * MEASURED FIRST, and the result was clean: 102 distinct literal targets across
 * two real navigation APIs, against 430 routed keys, 0 unrouted. So this is a
 * RATCHET against the next typo, not a fix — said plainly, because a guard
 * written after a clean sweep is easy to mistake for a save.
 *
 * WHAT IT CANNOT SEE, stated so nobody reads more into a pass than is there:
 * only LITERAL targets. A screen key held in a variable, or assembled at run
 * time (the `region_${id}` shape), is invisible here and is covered — where it
 * is covered at all — by the route sweeps that render every routed key.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

/** Line comments first — a `//` naming a path like `/api/*` otherwise opens a
 *  block comment that eats the rest of the file (sweep 71/72). */
const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const ROUTER = readFileSync('src/components/AppRouter.tsx', 'utf8');

/** The keys the router actually has a branch for. Derived, never restated. */
function routedKeys(): Set<string> {
  return new Set([...ROUTER.matchAll(/currentScreen === '([^']+)'/g)].map((m) => m[1]!));
}

/**
 * The two REAL navigation APIs, confirmed by reading their call sites rather
 * than guessed from plausible names: `setScr` (the router's own setter, 48
 * targets) and `go` (the factory in `exerciseCatalog.ts` that builds a card's
 * `action`, 58 targets). `setScreen`, `launchScreen` and `navigate` were
 * measured and match NOTHING in this corpus, so naming them here would be a
 * matcher alternative that guards nothing — the `whisperClaudeScorer` mistake.
 */
const NAV_CALL = /\b(?:setScr|go)\s*\(\s*'([a-z0-9_]{2,})'/gi;

function literalTargets(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const files = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f) => !f.includes('/tests/') && !f.includes('.test.') && !f.includes('__tests__'),
  );
  for (const f of files)
    for (const m of strip(readFileSync(f, 'utf8')).matchAll(NAV_CALL)) {
      const t = m[1]!;
      if (!out.has(t)) out.set(t, []);
      out.get(t)!.push(f);
    }
  return out;
}

/**
 * The OTHER door: navigation held as DATA. A pool entry's `screen`, a
 * `CATEGORY_SCREEN_MAP` value, an authored fallback's substitute — each is a
 * screen key a learner reaches by tapping a card, and each lives in a
 * hand-maintained structure that keeps gaining rows.
 *
 * `curriculumCouplingResolves` already walks the two CATEGORY maps through the
 * REAL session builder, which is stronger than this. The pools' own `screen:`
 * fields are the part with no routing check, so they are the reason this half
 * exists; the maps are included because the same three lines cover them.
 */
function dataScreenRefs(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const add = (where: string, v: string) => {
    if (!out.has(where)) out.set(where, []);
    out.get(where)!.push(v);
  };
  for (const p of [
    'src/lib/sessionPools.ts',
    'src/lib/croatiaPool.ts',
    'src/lib/retentionSlot.ts',
    'src/lib/inputSlot.ts',
  ])
    for (const m of strip(readFileSync(p, 'utf8')).matchAll(/\bscreen:\s*'([a-z0-9_]+)'/gi))
      add(p, m[1]!);

  const cr = strip(readFileSync('src/lib/categoryRoutes.ts', 'utf8'));
  for (const blk of ['CATEGORY_SCREEN_MAP', 'CATEGORY_EASIER_SCREEN']) {
    const i = cr.indexOf(blk);
    if (i < 0) continue;
    for (const m of cr.slice(i, cr.indexOf('};', i)).matchAll(/:\s*'([a-z0-9_]+)'/gi))
      add(blk, m[1]!);
  }
  const af = strip(readFileSync('src/lib/authoredFallback.ts', 'utf8'));
  for (const m of af.matchAll(/:\s*'([a-z0-9_]+)'/gi)) add('authoredFallback', m[1]!);
  return out;
}

describe('every screen named as DATA is a routed screen', () => {
  it('reads a real corpus of screen-valued entries', () => {
    const n = [...dataScreenRefs().values()].reduce((a, v) => a + v.length, 0);
    expect(n).toBeGreaterThan(200);
  });

  it('no pool entry, category route or fallback names an unrouted screen', () => {
    const routed = routedKeys();
    const dead: string[] = [];
    for (const [where, vals] of dataScreenRefs())
      for (const v of new Set(vals)) if (!routed.has(v)) dead.push(`${where}: '${v}'`);
    expect(
      dead,
      `these cards would launch a screen the router cannot render:\n${dead.join('\n')}`,
    ).toEqual([]);
  });
});

/**
 * The Croatia tab's 40 door cards. `doors.ts` declares TWO `id` fields and they
 * mean different things — `Door.id` is a DoorId ('price' | 'krajevi' | …), while
 * `DoorItem.id` is, in that file's own words, "the screen id handed to setScr",
 * and `launchDoorItem` does exactly that. A matcher that takes every `id:` in
 * the file reports the five door ids as unrouted screens; reading the type
 * declaration is what separates them, so this is scoped to the DOOR_ITEMS array.
 *
 * `hrvatska.test.ts` already covers the doors thoroughly — orphans, duplicates,
 * and that `launchDoorItem` "navigates to the screen id". None of that asks
 * whether the router can RENDER that id, which is the difference between a card
 * that navigates and a card that works.
 */
function doorItemScreens(): string[] {
  const src = strip(readFileSync('src/components/hrvatska/doors.ts', 'utf8'));
  const i = src.indexOf('DOOR_ITEMS');
  expect(i, 'DOOR_ITEMS not found in doors.ts').toBeGreaterThan(-1);
  return [...src.slice(i).matchAll(/\bid:\s*'([a-z0-9_]+)'/gi)].map((m) => m[1]!);
}

describe('every Croatia door card opens a screen that exists', () => {
  it('reads the real door items', () => {
    expect(doorItemScreens().length).toBeGreaterThan(30);
  });

  it('no door card navigates to an unrouted screen', () => {
    const routed = routedKeys();
    expect(doorItemScreens().filter((id) => !routed.has(id))).toEqual([]);
  });
});

/**
 * The Learn Path's own destinations, which live in SERVER content
 * (`functions/api/content/_data/learnPath.js`) rather than in `src/`.
 *
 * That corpus boundary is why this exists. A reachability census scoped to
 * `src/` reports `listeningpath` as a routed screen nothing can reach — it is
 * reached, twice, by the spine. The spine is the app's backbone and a
 * hand-maintained data file; `learnPathReachableCk` and `learnPathTapCompletion`
 * guard its `ck` rules, and neither asks whether its `go` is a screen the router
 * can render.
 */
function learnPathTargets(): string[] {
  const src = strip(readFileSync('functions/api/content/_data/learnPath.js', 'utf8'));
  return [...new Set([...src.matchAll(/\bgo:\s*'([a-z0-9_-]+)'/gi)].map((m) => m[1]!))];
}

describe('every Learn Path destination is a routed screen', () => {
  it('reads the real spine', () => {
    expect(learnPathTargets().length).toBeGreaterThan(30);
  });

  it('no path item sends the learner to an unrouted screen', () => {
    const routed = routedKeys();
    expect(learnPathTargets().filter((g) => !routed.has(g))).toEqual([]);
  });
});

describe('every literal navigation target is a routed screen', () => {
  it('the router and the corpus are both really being read', () => {
    // Without this the rule below passes by scanning nothing — the vacuous-guard
    // failure this suite exists to prevent.
    expect(routedKeys().size).toBeGreaterThan(300);
    expect(literalTargets().size).toBeGreaterThan(40);
  });

  it('no navigation names a screen the router has no branch for', () => {
    const routed = routedKeys();
    const dead = [...literalTargets().entries()]
      .filter(([t]) => !routed.has(t))
      .map(([t, files]) => `'${t}' <- ${files.slice(0, 3).join(', ')}`);
    expect(
      dead,
      `these taps land on a screen key the router cannot render (blank surface):\n${dead.join('\n')}`,
    ).toEqual([]);
  });

  it('and the matcher would actually catch one', () => {
    // A positive control, because a clean result from a matcher nobody has seen
    // fail is indistinguishable from a matcher that matches nothing.
    const found = [...strip(`  setScr('nope_not_a_screen');`).matchAll(NAV_CALL)].map((m) => m[1]);
    expect(found).toEqual(['nope_not_a_screen']);
    expect(routedKeys().has('nope_not_a_screen')).toBe(false);
  });
});
