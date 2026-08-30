// src/tests/practiceProgrammeDrills.test.ts
//
// THE PRACTICE PROGRAMME (2026-08-29).
//
// The curriculum work closed "the app tests what it never taught". The audit
// that followed found the mirror gap: 117 of the 180 lessons teach something
// the app never drills — not because a mapping was broken, but because no drill
// existed. This programme authors one per uncoupled lesson.
//
// Each drill here is a DATA BANK plus a dozen-line wrapper over the shared
// ModeDrill engine, because the 75 hand-written drills are the same ~400-line
// component and paying that per drill would make the content the small part of
// the work.
//
// WHAT THIS FILE GUARDS, and why the central coupling suite does not already:
//
// `curriculumCouplingResolves.test.ts` proves the lesson reaches the drill and
// that finishing it clears the queue. Both stay green if the drill's POOL TAG
// is wrong, because clearing is route-based — verified by mutation: retagging
// `pluraldrill` to 'vocab-a2' left all 128 of its assertions passing.
//
// The tag still matters for two things the coupling never touches:
//   * ATTRIBUTION — categoryForScreen() feeds the adaptive store, so a wrong
//     tag credits practice to a category the learner did not practise;
//   * VARIETY — SKILL_GROUP is keyed on the category, so a wrong tag can put a
//     drill in the wrong family and let the P3 pass serve four of a kind.
//
// So this asserts the agreement between sessionPools and categoryRoutes for the
// drills that exist solely to serve one category. It is NOT the general
// invariant "routed category equals pool tag" — that is false by design for the
// shared screens (`aspectdrill` serves all three aspect categories, `cloze`
// serves past-tense and conditional), which is exactly why those couplings once
// failed to clear.

import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from '../lib/categoryRoutes';
import { SKILL_GROUP } from '../lib/skillGroups';
import { LESSON_TAUGHT_CATEGORY, categoryForScreen } from '../lib/teachPractice';
import type { SkillCategory } from '../lib/adaptive';

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');
type Entry = { id: string; level: string };

/**
 * One row per drill authored by this programme. Grows a wave at a time.
 *
 * `lesson` is the curriculum lesson it was written for — the whole reason the
 * drill exists — so a drill added without a lesson to serve fails here.
 */
const PROGRAMME_DRILLS: {
  screen: string;
  category: SkillCategory;
  lesson: string;
  cefr: string;
}[] = [
  { screen: 'pluraldrill', category: 'plural', lesson: 'plural-nouns', cefr: 'A1' },
  { screen: 'negacija', category: 'negation', lesson: 'negation', cefr: 'A1' },
  { screen: 'pridjevi', category: 'adjectives', lesson: 'adjectives-basic', cefr: 'A1' },
  { screen: 'pokazne', category: 'demonstratives', lesson: 'demonstratives', cefr: 'A1' },
  { screen: 'imatidrill', category: 'having', lesson: 'imati-nemati', cefr: 'A1' },
  { screen: 'imperativ', category: 'imperative', lesson: 'imperative-basic', cefr: 'A1' },
  { screen: 'possess', category: 'possessives', lesson: 'possessives', cefr: 'A1' },
  { screen: 'upitne', category: 'questions', lesson: 'basic-questions', cefr: 'A1' },
  {
    screen: 'mjesto',
    category: 'place-prepositions',
    lesson: 'prepositions-place',
    cefr: 'A1',
  },
  { screen: 'vrijemea1', category: 'time', lesson: 'time-calendar', cefr: 'A1' },
  { screen: 'pozdravi', category: 'greetings', lesson: 'greetings-farewells', cefr: 'A1' },
  // ── A2 ────────────────────────────────────────────────────────────────────
  { screen: 'svojdrill', category: 'reflexive-possessive', lesson: 'svoj', cefr: 'A2' },
  {
    screen: 'mnozinapadezi',
    category: 'plural-cases',
    lesson: 'plural-cases',
    cefr: 'A2',
  },
  { screen: 'kolicinaa2', category: 'quantity', lesson: 'quantity', cefr: 'A2' },
  { screen: 'komparacija', category: 'comparison', lesson: 'comparatives-a2', cefr: 'A2' },
  // A2 topical block (2026-08-29). Ten authored banks. The pool tag matters
  // here for the usual two reasons (attribution and SKILL_GROUP) plus a third
  // specific to this block: five of the ten have a same-named REFERENCE screen
  // in the pool, so a wrong tag would be easy to write and hard to see.
  { screen: 'dom', category: 'home', lesson: 'house-home', cefr: 'A2' },
  { screen: 'zdravlje', category: 'health', lesson: 'body-health', cefr: 'A2' },
  { screen: 'odjeca', category: 'clothing', lesson: 'clothes-appearance', cefr: 'A2' },
  { screen: 'izgled', category: 'appearance', lesson: 'describing-people', cefr: 'A2' },
  { screen: 'zanimanja', category: 'jobs', lesson: 'work-jobs', cefr: 'A2' },
  { screen: 'skola', category: 'education', lesson: 'school-studies', cefr: 'A2' },
  { screen: 'hobiji', category: 'hobbies', lesson: 'hobbies-free-time', cefr: 'A2' },
  { screen: 'putovanje', category: 'travel', lesson: 'travel-transport', cefr: 'A2' },
  { screen: 'dogovor', category: 'invitations', lesson: 'plans-invitations', cefr: 'A2' },
  {
    screen: 'blagdani',
    category: 'celebrations',
    lesson: 'celebrations-holidays',
    cefr: 'A2',
  },
  // B1 topical block (2026-08-30). Ten authored banks.
  { screen: 'misljenje', category: 'opinions', lesson: 'opinions-agreeing', cefr: 'B1' },
  { screen: 'osjecaji', category: 'feelings', lesson: 'feelings-inner-life', cefr: 'B1' },
  { screen: 'zalbe', category: 'complaints', lesson: 'complaints-problems', cefr: 'B1' },
  { screen: 'salter', category: 'bureaucracy', lesson: 'bureaucracy', cefr: 'B1' },
  { screen: 'najam', category: 'renting', lesson: 'renting-flat', cefr: 'B1' },
  { screen: 'zivotopis', category: 'job-search', lesson: 'job-interview', cefr: 'B1' },
  { screen: 'mediji', category: 'news', lesson: 'media-news', cefr: 'B1' },
  { screen: 'tehnologija', category: 'technology', lesson: 'technology-internet', cefr: 'B1' },
  { screen: 'priroda', category: 'nature', lesson: 'environment-nature', cefr: 'B1' },
  { screen: 'kuhanje', category: 'cooking', lesson: 'food-cooking', cefr: 'B1' },
  // ── B1 ────────────────────────────────────────────────────────────────────
  { screen: 'infda', category: 'infinitive-da', lesson: 'infinitive-vs-da', cefr: 'B1' },
  {
    screen: 'prepricavanje',
    category: 'reported-speech',
    lesson: 'reported-speech',
    cefr: 'B1',
  },
  { screen: 'bezlicnob1', category: 'impersonal', lesson: 'impersonal', cefr: 'B1' },
  { screen: 'vrijemeklauze', category: 'time-clauses', lesson: 'time-clauses', cefr: 'B1' },
  { screen: 'uzrokb1', category: 'cause-purpose', lesson: 'cause-purpose', cefr: 'B1' },
  // ── C2 ────────────────────────────────────────────────────────────────────
  // These eight are RETAGS, not new banks — the drill already existed and was
  // already right. They belong in this table for exactly the reason the table
  // exists: the pool tag is what `categoryForScreen` credits and what
  // SKILL_GROUP keys on, and route-based clearing would mask a wrong one.
  { screen: 'pravopis', category: 'orthography', lesson: 'pravopis-dvojbe', cefr: 'C2' },
  {
    screen: 'interpunkcija',
    category: 'punctuation',
    lesson: 'zarez-interpunkcija',
    cefr: 'C2',
  },
  {
    screen: 'administrativni',
    category: 'admin-style',
    lesson: 'administrativni-stil',
    cefr: 'C2',
  },
  { screen: 'akademski', category: 'academic-style', lesson: 'znanstveni-stil', cefr: 'C2' },
  {
    screen: 'novinski',
    category: 'journalistic-style',
    lesson: 'publicisticki-stil',
    cefr: 'C2',
  },
  {
    screen: 'stilskefigure',
    category: 'figures-of-speech',
    lesson: 'stilske-figure',
    cefr: 'C2',
  },
  { screen: 'lektor', category: 'editing', lesson: 'uredjivanje-teksta', cefr: 'C2' },
  { screen: 'preciznost', category: 'precision', lesson: 'precizno-nijansiranje', cefr: 'C2' },
  // ── B2 ────────────────────────────────────────────────────────────────────
  { screen: 'prilozib2', category: 'verbal-adverbs', lesson: 'verbal-adverbs', cefr: 'B2' },
  {
    screen: 'negacijab2',
    category: 'negation-advanced',
    lesson: 'negation-advanced',
    cefr: 'B2',
  },
  { screen: 'vidglagoli', category: 'aspect-verbs', lesson: 'aspect-with-verbs', cefr: 'B2' },
  { screen: 'intenzitet', category: 'intensity', lesson: 'degrees-intensity', cefr: 'B2' },
  // ── C1 ────────────────────────────────────────────────────────────────────
  // The first two are RETAGS of existing C1 drills; the rest are authored.
  { screen: 'kolokacije', category: 'collocations', lesson: 'collocations', cefr: 'C1' },
  { screen: 'pitchaccent', category: 'prosody', lesson: 'accent-prosody', cefr: 'C1' },
  {
    screen: 'usporedbec1',
    category: 'advanced-comparison',
    lesson: 'comparison-advanced',
    cefr: 'C1',
  },
  { screen: 'tvorbac1', category: 'word-formation', lesson: 'tvorba-rijeci', cefr: 'C1' },
  {
    screen: 'deminutivi',
    category: 'diminutives',
    lesson: 'diminutives-augmentatives',
    cefr: 'C1',
  },
  {
    screen: 'sazimanje',
    category: 'summarising',
    lesson: 'summarising-paraphrase',
    cefr: 'C1',
  },

  // ── A1 topical block ──────────────────────────────────────────────────────
  { screen: 'obitelj', category: 'family', lesson: 'family-people', cefr: 'A1' },
  { screen: 'zemlje', category: 'countries', lesson: 'countries-languages', cefr: 'A1' },
  { screen: 'hrana', category: 'food', lesson: 'food-drink', cefr: 'A1' },
  { screen: 'grad', category: 'directions', lesson: 'directions-town', cefr: 'A1' },
  { screen: 'meteo', category: 'weather', lesson: 'weather-seasons', cefr: 'A1' },
  { screen: 'svidjanje', category: 'preferences', lesson: 'likes-preferences', cefr: 'A1' },
];

/**
 * `objekt` is the exception this table cannot hold, and it is worth stating
 * rather than quietly omitting.
 *
 * Every row above owns its category outright: the drill is the only screen the
 * category routes to, so pool tag and route must agree exactly. `objekt` is
 * instead the EASIER route for `clitics`, a category that already existed, is in
 * ALL_CATEGORIES, and keeps `clitic` (B2) as its primary route. Asserting
 * `CATEGORY_SCREEN_MAP.clitics === 'objekt'` would be false and asserting the
 * pool tag is unique to it would be wrong — so it gets its own block below,
 * which checks the thing that actually matters for it.
 */
const EASIER_ROUTE_DRILLS: {
  screen: string;
  category: SkillCategory;
  lesson: string;
  cefr: string;
}[] = [
  { screen: 'objekt', category: 'clitics', lesson: 'object-pronouns', cefr: 'A2' },
  // Same shape at B2, and a mis-tag fixed with it: `isklonidba` (C1) IS the
  // i-declension paradigm — it was tagged `instrumental`, which is a case, not
  // a declension class. It keeps the primary route; the B2 lesson gets a drill
  // a B2 learner can actually open.
  { screen: 'isklonidbab2', category: 'i-declension', lesson: 'i-declension', cefr: 'B2' },
];

describe('every programme drill is wired consistently', () => {
  it('has drills to check', () => {
    expect(PROGRAMME_DRILLS.length).toBeGreaterThan(0);
  });

  it.each(PROGRAMME_DRILLS)('$screen is in the pool at $cefr, tagged $category', (d) => {
    const entry = CEFR_EXERCISE_POOL.find((e) => e.screen === d.screen);
    expect(
      entry,
      `${d.screen} is not in CEFR_EXERCISE_POOL — the session can never serve it`,
    ).toBeTruthy();
    expect(entry!.cefr, `${d.screen} is not at ${d.cefr}`).toBe(d.cefr);
    expect(
      entry!.category,
      `${d.screen} is tagged "${entry!.category}" but was authored for "${d.category}". ` +
        `The coupling would still resolve and still clear — clearing is route-based — but ` +
        `completing it would credit the wrong category to the adaptive store, and SKILL_GROUP ` +
        `would place it in the wrong family for the variety pass.`,
    ).toBe(d.category);
  });

  it.each(PROGRAMME_DRILLS)('$category routes to $screen', (d) => {
    expect(
      CATEGORY_SCREEN_MAP[d.category],
      `"${d.category}" does not route to ${d.screen}, so the lesson that queues it has nowhere to go`,
    ).toBe(d.screen);
  });

  it.each(PROGRAMME_DRILLS)('$lesson claims $category', (d) => {
    expect(
      LESSON_TAUGHT_CATEGORY[d.lesson],
      `${d.lesson} is the lesson ${d.screen} was authored for, but it does not claim "${d.category}"`,
    ).toBe(d.category);
  });

  it.each(PROGRAMME_DRILLS)('$lesson is a real curriculum lesson at $cefr', (d) => {
    const entry = (CURRICULUM as Entry[]).find((e) => e.id === d.lesson);
    expect(entry, `${d.lesson} is not in the curriculum spine`).toBeTruthy();
    expect(entry!.level, `${d.lesson} is not a ${d.cefr} lesson`).toBe(d.cefr);
  });

  it.each(PROGRAMME_DRILLS)('$category has a skill group for the variety pass', (d) => {
    expect(
      SKILL_GROUP[d.category],
      `"${d.category}" has no SKILL_GROUP row — the coverage matrix miscounts it and the ` +
        `variety pass treats it as ungrouped`,
    ).toBeTruthy();
  });

  it.each(PROGRAMME_DRILLS)('finishing $screen credits $category', (d) => {
    // The attribution half. categoryForScreen is what completeExercise feeds to
    // the adaptive store and the coupling queue.
    expect(categoryForScreen(d.screen)).toBe(d.category);
  });
});

describe('a drill wired as an easier route is wired completely', () => {
  it.each(EASIER_ROUTE_DRILLS)('$screen is the easier route for $category', (d) => {
    expect(
      CATEGORY_EASIER_SCREEN[d.category],
      `${d.screen} exists so that ${d.category} resolves below the level of its primary ` +
        `route; without this row the lesson it was written for still has nowhere to go`,
    ).toBe(d.screen);
  });

  it.each(EASIER_ROUTE_DRILLS)('$category keeps its primary route', (d) => {
    // The easier route is a fallback, not a replacement: a B2 learner weak on
    // clitics must still get the B2 drill.
    const primary = CATEGORY_SCREEN_MAP[d.category];
    expect(primary, `${d.category} lost its primary route`).toBeTruthy();
    expect(primary, `${d.category}'s primary route was overwritten by the easier one`).not.toBe(
      d.screen,
    );
  });

  it.each(EASIER_ROUTE_DRILLS)('the PRIMARY route for $category is tagged $category too', (d) => {
    // Added 2026-08-29 after a mutation showed this file could not see the
    // thing the B2 tranche actually changed: reverting the `isklonidba` retag
    // (i-declension -> instrumental) left all 202 assertions passing, because
    // every row above checks the EASIER screen's tag and nothing checked the
    // primary's. A category served by two dedicated screens must be carried by
    // both of them, or completing the primary credits the wrong category to the
    // adaptive store — the exact failure the pool-tag block exists to catch.
    //
    // This is NOT the general "routed screen equals pool tag" rule, which is
    // false for shared screens (`cloze` serves past-tense and conditional).
    // These two categories are each served by two DEDICATED drills.
    const primary = CATEGORY_SCREEN_MAP[d.category];
    const entry = CEFR_EXERCISE_POOL.find((e) => e.screen === primary);
    expect(entry, `${d.category}'s primary route ${primary} is not in the pool`).toBeTruthy();
    expect(
      entry!.category,
      `${d.category} routes to ${primary} as its primary, but that entry is tagged ` +
        `"${entry!.category}". Finishing it would credit the wrong category.`,
    ).toBe(d.category);
  });

  it.each(EASIER_ROUTE_DRILLS)('$screen is in the pool at $cefr, tagged $category', (d) => {
    const entry = CEFR_EXERCISE_POOL.find((e) => e.screen === d.screen);
    expect(entry, `${d.screen} is not in CEFR_EXERCISE_POOL`).toBeTruthy();
    expect(entry!.cefr).toBe(d.cefr);
    expect(entry!.category).toBe(d.category);
  });

  it.each(EASIER_ROUTE_DRILLS)('$lesson claims $category', (d) => {
    expect(LESSON_TAUGHT_CATEGORY[d.lesson]).toBe(d.category);
  });
});

describe('the programme is aimed at lessons that had no drill', () => {
  it('every programme drill serves a lesson that is now coupled', () => {
    // A drill authored for a lesson that stays unmapped would be unreachable by
    // the coupling — the exact failure this programme exists to remove.
    for (const d of [...PROGRAMME_DRILLS, ...EASIER_ROUTE_DRILLS]) {
      expect(LESSON_TAUGHT_CATEGORY[d.lesson], `${d.lesson} has no coupling`).toBeTruthy();
    }
  });
});

describe('every wrapper completes under the key it is routed at', () => {
  // THE `genderdrill` TRAP, one level up (2026-08-30).
  //
  // `GenderDrillScreen` is routed at `genderdrill` and completes with the key
  // `'gender'`. That mismatch worked only through `categoryForScreen`'s "the key
  // IS a category" fallback, and it went untested for years because every suite
  // cleared the queue using the SCREEN the builder returned rather than the key
  // the screen actually passes.
  //
  // This programme has now produced 45 drills that are the SAME ~12-line
  // wrapper, differing mainly in a hand-typed `id="..."` string that ModeDrill
  // forwards to completeExercise as the completion key. Copy a wrapper, change
  // the imports, forget the id, and the drill routes correctly, renders
  // correctly, grades correctly — and clears somebody else's coupling. Nothing
  // else in the suite looks at that string.
  //
  // So this reads the wrappers on disk and the router as it is, and asserts the
  // three names agree: the completion key, the screen the route registers, and
  // the pool entry.
  const DRILL_DIR = path.join(__dirname, '..', 'components', 'practice', 'drills');
  const routerSource = fs.readFileSync(
    path.join(__dirname, '..', 'components', 'AppRouter.tsx'),
    'utf8',
  );
  const wrappers = fs
    .readdirSync(DRILL_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .map((file) => {
      const src = fs.readFileSync(path.join(DRILL_DIR, file), 'utf8');
      return { file, component: file.replace(/\.tsx$/, ''), id: src.match(/\bid="([^"]+)"/)?.[1] };
    });

  it('there are wrappers to check', () => {
    // A rename of the directory would otherwise make every assertion vacuous.
    expect(wrappers.length).toBeGreaterThan(20);
  });

  it.each(wrappers)('$component completes as "$id"', ({ component, id }) => {
    expect(id, `${component} passes no id= to ModeDrill`).toBeTruthy();

    // The route block that renders this component must be keyed on the same
    // string. `<Component ` is matched with the trailing space so a component
    // whose name prefixes another's cannot borrow its route.
    const at = routerSource.indexOf(`<${component} `);
    expect(at, `AppRouter never renders <${component}>`).toBeGreaterThan(-1);
    const before = routerSource.slice(0, at);
    const routedAs = [...before.matchAll(/currentScreen === '([^']+)'/g)].pop()?.[1];
    expect(
      routedAs,
      `<${component}> completes as "${id}" but is routed at "${routedAs}". The coupling ` +
        `clears on the route, so the queue entry for "${routedAs}" would never discharge.`,
    ).toBe(id);

    // And the pool has to know the screen under that same name, or the P3 fill
    // can never serve it and categoryForScreen credits nothing.
    expect(
      CEFR_EXERCISE_POOL.some((e) => e.screen === id),
      `"${id}" is not a screen in CEFR_EXERCISE_POOL`,
    ).toBe(true);
  });
});
