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
}[] = [{ screen: 'objekt', category: 'clitics', lesson: 'object-pronouns', cefr: 'A2' }];

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
