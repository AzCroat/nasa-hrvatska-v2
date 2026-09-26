// src/lib/unitTest.ts
//
// THE UNIT TEST (Step 3, increment 2, 2026-09-26).
//
// WHAT THE COURSE WAS MISSING. Increment 1 gave the learner 36 units and their
// place in them; nothing yet asked "have you actually got this?" at the end of
// one. Each individual lesson already has a mastery check (`lessonCheck.ts`,
// 75%) — but a per-lesson check taken minutes after reading that lesson measures
// something much weaker than a course needs, for two reasons that are both
// well-established in the research the owner asked for:
//
//   * BLOCKED practice inflates performance and depresses retention. Five checks,
//     each immediately after its own lesson, is maximally blocked. A CUMULATIVE
//     test that mixes items from all five lessons is interleaved practice
//     (Bjork's desirable difficulty): it feels harder, scores lower, and predicts
//     later recall far better.
//   * The hard part of Croatian is DISCRIMINATION — accusative against genitive,
//     perfective against imperfective. A single-lesson check cannot see an
//     interference error because only one of the confusable pair is in the room.
//     A mixed test can. (`lessonRetention.ts` makes the same argument for its
//     weekly cumulative, and made it first.)
//
// So the unit test samples ACROSS the unit's five lessons and interleaves them by
// construction, and it is graded at a HIGHER bar than one lesson:
// UNIT_PASS_THRESHOLD 0.85 against LESSON_PASS_THRESHOLD 0.75. That is not
// arbitrary strictness — the unit test is what the course will advance on, and a
// threshold that a learner clears with two thirds of a unit understood is not a
// mastery gate.
//
// STATE THE COUNT, NOT THE PERCENTAGE (owner report, 2026-09-25). A learner reads
// "11 / 15" beside "need 85%" and has to do arithmetic to find out whether they
// passed. `unitItemsNeeded` exists so every surface can say "13 of 15 needed".
//
// A TEST WITH NO ITEMS IS NOT A TEST. `unitTestPassed(0, 0)` is FALSE, because a
// 0-of-0 pass would credit a learner for work they could not do (NEVER-DO 14),
// and `0 >= 0` is exactly how that has happened here before. A unit whose lessons
// carry too few check items to assemble a real test is reported as `insufficient`
// and must not be walled — see `unitTestAvailability`.

import { findCheckSlide, type LessonCheckItem } from './lessonCheck';

/** Items in a full unit test: three from each of a unit's five lessons. */
export const UNIT_TEST_ITEMS = 15;

/** Items sampled from any one lesson. */
export const ITEMS_PER_LESSON = 3;

/**
 * The bar. Higher than a single lesson's 75% on purpose: this is cumulative,
 * interleaved, and it is what advancement is measured on.
 */
export const UNIT_PASS_THRESHOLD = 0.85;

/**
 * Fewest items that can still be called a unit test. Below this the test is not
 * served at all rather than being served short — a four-item "unit test" would be
 * a worse measurement than the five lesson checks it replaces, and a learner who
 * failed one would have been failed by the data.
 */
export const UNIT_TEST_MIN_ITEMS = 8;

export interface UnitTestItem extends LessonCheckItem {
  /** Which lesson of the unit this item came from — the mixed report needs it. */
  lessonId: string;
}

/** A lesson body, as /api/content/lessons serves it. */
export interface LessonBodyLike {
  id: string;
  slides?: readonly { type?: string; items?: unknown }[];
}

/** How many correct answers a test of `total` items needs. */
export function unitItemsNeeded(total: number): number {
  if (!Number.isFinite(total) || total <= 0) return 0;
  return Math.ceil(total * UNIT_PASS_THRESHOLD);
}

/** Passed? Never true for an empty test. */
export function unitTestPassed(correct: number, total: number): boolean {
  if (!Number.isFinite(correct) || !Number.isFinite(total) || total <= 0) return false;
  return correct >= unitItemsNeeded(total);
}

export type UnitTestAvailability = 'ready' | 'insufficient';

export function unitTestAvailability(items: readonly unknown[]): UnitTestAvailability {
  return items.length >= UNIT_TEST_MIN_ITEMS ? 'ready' : 'insufficient';
}

/**
 * Which `ITEMS_PER_LESSON` of a lesson's check items to use on this attempt.
 *
 * Rotated by attempt so a retake is a retake and not the same fifteen questions
 * — the rule `lessonRetention.ts` states as "never re-test a lesson with the same
 * sample twice". With six items and three per attempt, attempts 0 and 1 share
 * nothing; the cycle repeats after two.
 */
function sampleForAttempt(count: number, attempt: number, take: number): number[] {
  const n = Math.min(take, count);
  if (n <= 0) return [];
  // A window of n, stepped by n, wrapping: attempt 0 takes items 0..2, attempt 1
  // takes 3..5, and with six items the two attempts share nothing.
  const windows = Math.ceil(count / n);
  const start = ((attempt % windows) * n) % count;
  return Array.from({ length: n }, (_, k) => (start + k) % count);
}

/**
 * Build the unit test.
 *
 * INTERLEAVED BY CONSTRUCTION, round-robin: one item from each lesson in turn,
 * then the next from each. That is deliberately not a shuffle — a shuffle
 * sometimes puts three items from one lesson together, which is the blocked
 * practice this test exists to avoid, and it would make the interleaving
 * unverifiable. Determinism also means a reload mid-test serves the same paper.
 *
 * Lessons are taken in the order given (the unit's spine order). A lesson whose
 * body carries no valid check items contributes nothing rather than blocking the
 * build; `unitTestAvailability` decides whether what is left is a test at all.
 */
export function buildUnitTest(lessons: readonly LessonBodyLike[], attempt = 0): UnitTestItem[] {
  const perLesson: UnitTestItem[][] = [];
  for (const lesson of lessons) {
    const slides = Array.isArray(lesson?.slides) ? lesson.slides : [];
    const found = findCheckSlide(slides);
    const items = found?.items ?? [];
    if (items.length === 0) {
      perLesson.push([]);
      continue;
    }
    const picks = sampleForAttempt(items.length, attempt, ITEMS_PER_LESSON);
    perLesson.push(picks.map((i) => ({ ...items[i]!, lessonId: lesson.id })));
  }

  const out: UnitTestItem[] = [];
  const deepest = perLesson.reduce((m, a) => Math.max(m, a.length), 0);
  for (let round = 0; round < deepest; round++) {
    for (const bucket of perLesson) {
      const item = bucket[round];
      if (item) out.push(item);
    }
  }
  return out.slice(0, UNIT_TEST_ITEMS);
}

/**
 * Per-lesson result for a finished test — which of the unit's lessons the learner
 * actually missed, so the report can say where to go back to.
 *
 * `answers` maps ITEM INDEX (position in the built test) to the chosen SOURCE
 * option index, the same convention `lessonCheck.countCorrect` uses.
 */
export function unitTestBreakdown(
  items: readonly UnitTestItem[],
  answers: Readonly<Record<number, number>>,
): { lessonId: string; correct: number; total: number }[] {
  const by = new Map<string, { lessonId: string; correct: number; total: number }>();
  items.forEach((it, i) => {
    const row = by.get(it.lessonId) ?? { lessonId: it.lessonId, correct: 0, total: 0 };
    row.total += 1;
    if (answers[i] === it.correct) row.correct += 1;
    by.set(it.lessonId, row);
  });
  return [...by.values()];
}

/** Correct answers in a finished test. */
export function unitTestScore(
  items: readonly UnitTestItem[],
  answers: Readonly<Record<number, number>>,
): number {
  let n = 0;
  items.forEach((it, i) => {
    if (answers[i] === it.correct) n++;
  });
  return n;
}
