// src/lib/levelReview.ts
//
// THE END-OF-LEVEL REVIEW (owner request, 2026-09-27): "a review unit at the end
// of each level. It would mix practice across all six units right before the
// Level Check, so the learner is prepared rather than just tested."
//
// A unit test mixes five lessons; nothing in the course mixed a whole LEVEL, and
// the Level Check that follows a level does exactly that. So the first time a
// learner met all six units' material side by side was the exam. This is the
// rehearsal:
//
//   - 18 items, three from each of the level's six units, INTERLEAVED round-robin
//     so no two neighbours come from the same unit (the unit test's own argument,
//     one level up: discrimination is what a mixed paper tests);
//   - PRACTICE, not a test: a missed item shows its explanation and comes back at
//     the end of the round until it is answered right. The learner leaves having
//     got every item right at least once;
//   - the FIRST-TRY score per unit is what the result reports, because that — not
//     the corrected second pass — is the honest readiness signal, and it names the
//     units worth another look before the Level Check.
//
// It gates nothing. Course advancement is the unit bar; level status is the Level
// Check. This sits between them and prepares for the second.

import type { LessonCheckItem } from './lessonCheck';

export const LEVEL_REVIEW_ITEMS = 18;
export const ITEMS_PER_UNIT = 3;
/** Below this the review is not worth serving (a stale cache that lost bodies). */
export const LEVEL_REVIEW_MIN_ITEMS = 9;

export interface ReviewLessonBody {
  id: string;
  slides?: readonly { type?: string; items?: readonly unknown[] }[];
}

export interface ReviewUnitInput {
  unitId: string;
  /** The unit's lesson bodies, in spine order. Missing bodies are simply absent. */
  lessons: readonly ReviewLessonBody[];
}

export interface LevelReviewItem extends LessonCheckItem {
  lessonId: string;
  unitId: string;
}

function validItems(lesson: ReviewLessonBody): LessonCheckItem[] {
  const check = (lesson.slides || []).find((s) => s?.type === 'check') as
    { items?: unknown; itemsB?: unknown } | undefined;
  // Both forms (lib/lessonCheck): the review samples the whole pool.
  const raw = [
    ...(Array.isArray(check?.items) ? check!.items : []),
    ...(Array.isArray(check?.itemsB) ? check!.itemsB : []),
  ];
  return raw.filter((x): x is LessonCheckItem => {
    const it = x as Partial<LessonCheckItem>;
    return (
      typeof it?.q === 'string' &&
      Array.isArray(it.options) &&
      it.options.length >= 2 &&
      Number.isInteger(it.correct) &&
      (it.correct as number) >= 0 &&
      (it.correct as number) < it.options.length
    );
  });
}

/**
 * Build the review. Deterministic for a given attempt, so a reload serves the same
 * paper, and rotated by attempt so a second review is not the first again.
 *
 * Within a unit the three items come from three DIFFERENT lessons where the unit has
 * them (lesson k+attempt, item attempt), so a unit is represented by its breadth,
 * not by one lesson's check.
 */
export function buildLevelReview(
  units: readonly ReviewUnitInput[],
  attempt = 0,
): LevelReviewItem[] {
  const perUnit: LevelReviewItem[][] = units.map((u) => {
    const lessons = u.lessons
      .map((l) => ({ id: l.id, items: validItems(l) }))
      .filter((l) => l.items.length > 0);
    const out: LevelReviewItem[] = [];
    if (lessons.length === 0) return out;
    for (let k = 0; out.length < ITEMS_PER_UNIT && k < lessons.length * 6; k++) {
      const lesson = lessons[(k + attempt) % lessons.length]!;
      const round = Math.floor(k / lessons.length);
      const item = lesson.items[(attempt + round) % lesson.items.length]!;
      if (out.some((o) => o.lessonId === lesson.id && o.q === item.q)) continue;
      out.push({ ...item, lessonId: lesson.id, unitId: u.unitId });
    }
    return out;
  });
  const out: LevelReviewItem[] = [];
  for (let round = 0; round < ITEMS_PER_UNIT; round++) {
    for (const bucket of perUnit) {
      const it = bucket[round];
      if (it) out.push(it);
    }
  }
  return out.slice(0, LEVEL_REVIEW_ITEMS);
}

/** Per-unit first-try result, in unit order — which units are worth another look. */
export function reviewBreakdown(
  items: readonly LevelReviewItem[],
  firstTry: Readonly<Record<number, boolean>>,
): { unitId: string; correct: number; total: number }[] {
  const by = new Map<string, { unitId: string; correct: number; total: number }>();
  items.forEach((it, i) => {
    const row = by.get(it.unitId) ?? { unitId: it.unitId, correct: 0, total: 0 };
    row.total += 1;
    if (firstTry[i]) row.correct += 1;
    by.set(it.unitId, row);
  });
  return [...by.values()];
}

/**
 * Should the course serve a level's review now?
 *
 * ONLY AT THE CROSSING. The review is due for level L when every unit of L has met
 * the bar, the review is not yet done, and the learner is standing at the first unit
 * of the next level WITHOUT having started it. A learner already working inside a
 * later level is not dragged back to review an old one — the map still offers it.
 */
export function levelReviewDue(input: {
  /** The unit the course is on (first not yet past the bar). */
  current: { level: string; indexInLevel: number; lessonIds: readonly string[] } | null;
  /** The level before `current.level`, if any. */
  previousLevel: string | null;
  /** Every unit of the previous level has met the bar. */
  previousLevelAdvanced: boolean;
  reviewed: ReadonlySet<string>;
  completed: ReadonlySet<string>;
}): string | null {
  const { current, previousLevel } = input;
  if (!current || !previousLevel) return null;
  if (current.indexInLevel !== 1) return null;
  if (!input.previousLevelAdvanced) return null;
  if (input.reviewed.has(previousLevel)) return null;
  if (current.lessonIds.some((id) => input.completed.has(id))) return null;
  return previousLevel;
}
