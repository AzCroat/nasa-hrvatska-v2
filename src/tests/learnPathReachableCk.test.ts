/**
 * learnPathReachableCk.test.ts — a Learn Path item must be completable AT ALL.
 *
 * THE OTHER END OF `learnPathTapCompletion`. That suite forbids an item that is
 * satisfied merely by OPENING it. This one forbids the opposite failure: a
 * `{ vsIncludes: 'x' }` leaf naming a key that NOTHING in the app ever writes
 * into `stats.vs`. Such an item can never tick complete, for anyone, ever — the
 * tile sits unfinished on the path forever and the level above it never unlocks
 * through that route. Nothing errors; the predicate simply returns false for the
 * life of the product.
 *
 * The repo has met the shape once, in the coupling: `GenderDrillScreen` fires
 * completion key `'gender'`, not `'genderdrill'`, and only a dedicated assertion
 * caught it. A vs key is the same kind of string — written in one file, read in
 * another, with nothing but spelling holding them together.
 *
 * NOTHING IS UNREACHABLE TODAY: all 57 distinct `vsIncludes` keys are
 * producible. This is the ratchet, and it is worth writing down precisely
 * because the survey behind it was expensive — see below.
 *
 * FOUR MATCHER CORRECTIONS SEPARATED "41 SUSPECTS" FROM "ZERO FINDINGS", and
 * every one of them was my scan's blind spot rather than a defect in the app:
 *
 *   1. `al_<lessonId>` keys are written by AnimatedLesson from a COMPUTED
 *      `doneKey`, so no literal exists to grep. 19 keys.
 *   2. `vs: [...(prev.vs || []), 'x']` — the `[]` inside the spread ends a
 *      naive `\[[^\]]*\]` match before it reaches `'x'`. Bracket matching has to
 *      be balanced.
 *   3. Graded screens do not write `vs` themselves at all; `completeExercise`
 *      writes `entry.vsKey ?? key` for them. 15 keys, invisible until the
 *      registry is read.
 *   4. The registry's rows are `key: g('gc', 'grammar', 'lesson')` helper CALLS,
 *      not object literals, so a `key:\s*\{` match found 1 of 259.
 *
 * Each correction dropped the suspect list without changing a line of product
 * code. A sweep's first number is a property of the sweep.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const LEARN_PATH_SRC = strip(readFileSync('functions/api/content/_data/learnPath.js', 'utf8'));

/** Every `vsIncludes` key the served path tests. */
const VS_REQUIRED = [
  ...new Set([...LEARN_PATH_SRC.matchAll(/vsIncludes:\s*'([^']+)'/g)].map((m) => m[1]!)),
];

/** Item ids — `launchPathItem` writes `vs: [item.id]` on tap. */
const ITEM_IDS = new Set([...LEARN_PATH_SRC.matchAll(/\bid:\s*'([^']+)'/g)].map((m) => m[1]!));

/** Black-hole screens — the launcher writes `vs: [screenId]` on open. */
const BLACK_HOLE = new Set(
  [
    ...strip(readFileSync('src/lib/blackHoleScreens.ts', 'utf8')).matchAll(
      /^\s{2}'?([A-Za-z_][\w]*)'?:\s*'(?:lc|gc)'/gm,
    ),
  ].map((m) => m[1]!),
);

/** Literals any screen writes into `stats.vs` itself. */
function literalVsWrites(): Map<string, string> {
  const out = new Map<string, string>();
  for (const file of globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f) => !f.includes('/tests/') && !f.includes('.test.'),
  )) {
    const src = strip(readFileSync(file, 'utf8'));
    for (const m of src.matchAll(/vs:\s*\[/g)) {
      // BALANCED, not `[^\]]*`. The common form is
      // `vs: [...(prev.vs || []), 'key']`, and the `[]` inside the spread ends a
      // character-class match before the key it is looking for.
      let i = m.index! + m[0].length;
      let depth = 1;
      while (i < src.length && depth > 0) {
        const c = src[i];
        if (c === '[') depth++;
        else if (c === ']') depth--;
        i++;
      }
      for (const lit of src.slice(m.index!, i).matchAll(/'([^']+)'/g))
        if (!out.has(lit[1]!)) out.set(lit[1]!, file);
    }
  }
  return out;
}

/** `completeExercise` writes `entry.vsKey ?? key` for every registry row. */
function registryKeys(): { keys: Set<string>; overrides: Set<string> } {
  const src = strip(readFileSync('src/lib/completion/exerciseRegistry.ts', 'utf8'));
  // Rows are `key: g(...)` helper CALLS as well as object literals — matching
  // only `key: {` finds 1 of 259.
  const keys = new Set(
    [...src.matchAll(/^\s{2}'?([A-Za-z_][\w-]*)'?:\s*(?:[a-zA-Z_$][\w$]*\(|\{)/gm)].map(
      (m) => m[1]!,
    ),
  );
  const overrides = new Set([...src.matchAll(/vsKey:\s*'([^']+)'/g)].map((m) => m[1]!));
  return { keys, overrides };
}

/** AnimatedLesson writes `al_<lessonId>` from a computed key — no literal to find. */
function serverLessonIds(): Set<string> {
  const out = new Set<string>();
  for (const f of globSync('functions/api/content/_data/lessons*.js'))
    for (const m of strip(readFileSync(f, 'utf8')).matchAll(/\bid:\s*'([^']+)'/g)) out.add(m[1]!);
  return out;
}

describe('the derivation is real', () => {
  it('finds the rules and every producer of a vs key', () => {
    // Any side coming back empty makes the check below pass vacuously — and the
    // registry in particular returned 1 on the first attempt, which would have
    // reported 15 healthy keys as unreachable.
    expect(VS_REQUIRED.length).toBeGreaterThan(40);
    expect(ITEM_IDS.size).toBeGreaterThan(50);
    expect(BLACK_HOLE.size).toBeGreaterThan(10);
    expect(literalVsWrites().size).toBeGreaterThan(10);
    expect(registryKeys().keys.size).toBeGreaterThan(200);
    expect(serverLessonIds().size).toBe(180);
  });

  it('resolves the two shapes a naive scan misses', () => {
    const written = literalVsWrites();
    // `vs: [...(prev.vs || []), 'past_tense_lesson']` — balanced brackets.
    expect([...written.keys()]).toContain('past_tense_lesson');
    // `conditional: g('gc', 'grammar', 'lesson')` — a helper call, not a literal.
    expect([...registryKeys().keys]).toContain('conditional');
  });
});

describe('every Learn Path completion check can actually be satisfied', () => {
  it('has no vsIncludes key that nothing writes', () => {
    const written = literalVsWrites();
    const { keys, overrides } = registryKeys();
    const lessons = serverLessonIds();

    const unreachable = VS_REQUIRED.filter(
      (v) =>
        !BLACK_HOLE.has(v) &&
        !written.has(v) &&
        !overrides.has(v) &&
        !keys.has(v) &&
        !ITEM_IDS.has(v) &&
        !(v.startsWith('al_') && lessons.has(v.slice(3))),
    );

    expect(
      unreachable,
      'These Learn Path items require a vs key that nothing in the app ever ' +
        'writes, so they can never tick complete for anyone:\n' +
        unreachable.map((u) => `  - ${u}`).join('\n'),
    ).toEqual([]);
  });
});
