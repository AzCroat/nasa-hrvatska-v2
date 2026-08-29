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
import { CATEGORY_SCREEN_MAP } from '../lib/categoryRoutes';
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
}[] = [{ screen: 'pluraldrill', category: 'plural', lesson: 'plural-nouns', cefr: 'A1' }];

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

describe('the programme is aimed at lessons that had no drill', () => {
  it('every programme drill serves a lesson that is now coupled', () => {
    // A drill authored for a lesson that stays unmapped would be unreachable by
    // the coupling — the exact failure this programme exists to remove.
    for (const d of PROGRAMME_DRILLS) {
      expect(LESSON_TAUGHT_CATEGORY[d.lesson], `${d.lesson} has no coupling`).toBeTruthy();
    }
  });
});
