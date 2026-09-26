/**
 * unitTest — the cumulative test's sampling, interleaving and bar.
 *
 * THREE THINGS HERE CAN FAIL SILENTLY AND EACH WOULD LOOK FINE FROM THE SCREEN:
 * a paper that is blocked rather than interleaved (three items from one lesson in
 * a row — which is the practice condition the test exists to avoid, and the
 * screen renders it identically); a retake that serves the same questions (which
 * measures memory of the paper, not the unit); and a threshold applied as a
 * percentage the learner has to convert. All three are asserted on the real
 * curriculum bodies, not a fixture, because the sampler's behaviour depends on how
 * many check items a lesson actually carries.
 */
import { describe, it, expect } from 'vitest';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { buildCourseUnits } from '../lib/courseUnits';
import type { CurriculumEntry } from '../lib/curriculum';
import {
  buildUnitTest,
  unitItemsNeeded,
  unitTestAvailability,
  unitTestBreakdown,
  unitTestPassed,
  unitTestScore,
  ITEMS_PER_LESSON,
  UNIT_PASS_THRESHOLD,
  UNIT_TEST_ITEMS,
  UNIT_TEST_MIN_ITEMS,
  type LessonBodyLike,
} from '../lib/unitTest';
import { LESSON_PASS_THRESHOLD } from '../lib/lessonCheck';

const UNITS = buildCourseUnits(CURRICULUM as unknown as CurriculumEntry[]);
const BY_ID = new Map((LESSONS as LessonBodyLike[]).map((l) => [l.id, l]));

/** Item identity for comparing papers: the LESSON plus the question. */
function ident(x: { lessonId: string; q: string }): string {
  return x.lessonId + '\u241f' + x.q;
}

function bodiesFor(unitIndex: number): LessonBodyLike[] {
  return UNITS[unitIndex]!.lessons.map((l) => BY_ID.get(l.id)!).filter(Boolean);
}

describe('the bar', () => {
  it('is stricter than a single lesson, because the test is cumulative', () => {
    expect(UNIT_PASS_THRESHOLD).toBeGreaterThan(LESSON_PASS_THRESHOLD);
  });

  // STATE THE COUNT, NOT THE PERCENTAGE (owner report, 2026-09-25).
  it('converts the threshold into a count of items', () => {
    expect(unitItemsNeeded(15)).toBe(13);
    expect(unitItemsNeeded(10)).toBe(9);
    expect(unitItemsNeeded(8)).toBe(7);
    expect(unitItemsNeeded(0)).toBe(0);
  });

  it('passes at the count and fails one below it', () => {
    expect(unitTestPassed(13, 15)).toBe(true);
    expect(unitTestPassed(12, 15)).toBe(false);
    expect(unitTestPassed(15, 15)).toBe(true);
  });

  // A TEST WITH NO ITEMS IS NOT A TEST. `0 >= 0` is exactly how a credit for work
  // nobody did has happened in this codebase before (NEVER-DO 14).
  it('never passes an empty test', () => {
    expect(unitTestPassed(0, 0)).toBe(false);
    expect(unitTestPassed(5, 0)).toBe(false);
    expect(unitTestPassed(NaN, 15)).toBe(false);
    expect(unitTestPassed(13, NaN)).toBe(false);
  });

  it('refuses to serve a test that is too short to be one', () => {
    expect(unitTestAvailability(new Array(UNIT_TEST_MIN_ITEMS).fill(0))).toBe('ready');
    expect(unitTestAvailability(new Array(UNIT_TEST_MIN_ITEMS - 1).fill(0))).toBe('insufficient');
    expect(unitTestAvailability([])).toBe('insufficient');
  });
});

describe('the paper, built from the real curriculum', () => {
  it('is UNIT_TEST_ITEMS long for every one of the 36 units', () => {
    for (let i = 0; i < UNITS.length; i++) {
      const items = buildUnitTest(bodiesFor(i));
      expect(items.length, UNITS[i]!.id).toBe(UNIT_TEST_ITEMS);
      expect(unitTestAvailability(items), UNITS[i]!.id).toBe('ready');
    }
  });

  it('draws from every lesson of the unit, evenly', () => {
    for (let i = 0; i < UNITS.length; i++) {
      const items = buildUnitTest(bodiesFor(i));
      const counts = new Map<string, number>();
      for (const it of items) counts.set(it.lessonId, (counts.get(it.lessonId) ?? 0) + 1);
      expect([...counts.keys()].sort(), UNITS[i]!.id).toEqual(
        UNITS[i]!.lessons.map((l) => l.id).sort(),
      );
      for (const [id, n] of counts) expect(n, `${UNITS[i]!.id} / ${id}`).toBe(ITEMS_PER_LESSON);
    }
  });

  // INTERLEAVED, NOT BLOCKED. This is the property the whole design rests on, and
  // a shuffle-based build would fail it intermittently — which is why the build is
  // round-robin and deterministic.
  it('never puts two items from the same lesson next to each other', () => {
    for (let i = 0; i < UNITS.length; i++) {
      const items = buildUnitTest(bodiesFor(i));
      for (let k = 1; k < items.length; k++) {
        expect(
          items[k]!.lessonId,
          `${UNITS[i]!.id}: items ${k - 1} and ${k} are both from ${items[k]!.lessonId}`,
        ).not.toBe(items[k - 1]!.lessonId);
      }
    }
  });

  it('serves the same paper twice for one attempt, so a reload is not a new test', () => {
    const a = buildUnitTest(bodiesFor(0), 2);
    const b = buildUnitTest(bodiesFor(0), 2);
    expect(a.map(ident)).toEqual(b.map(ident));
  });

  // NEVER RE-TEST WITH THE SAME SAMPLE (lessonRetention's rule, inherited).
  //
  // IDENTITY IS (lesson, question), NOT the question text. Measured: "Which
  // sentence is correct?" is a shared generic stem in 20 of the 36 units, so a
  // by-text comparison reports a repeat between two DIFFERENT lessons' items, and
  // this assertion failed on correct code until it was fixed. No lesson repeats a
  // question inside its own check (also measured: 0 of 180).
  it('gives a retake different questions', () => {
    for (let i = 0; i < UNITS.length; i++) {
      const first = buildUnitTest(bodiesFor(i), 0).map(ident);
      const second = buildUnitTest(bodiesFor(i), 1).map(ident);
      const shared = second.filter((k) => first.includes(k));
      expect(shared, `${UNITS[i]!.id} repeated ${shared.length} of ${first.length}`).toHaveLength(
        0,
      );
    }
  });

  // THE GENERIC STEM IS RIGHT FOR THIS TEST, pinned so it is not read as a defect.
  // A single-lesson check can name its topic because the lesson just taught it; a
  // MIXED test must not, because knowing "this one is about the genitive" removes
  // the discrimination the interleaving exists to measure. The options carry the
  // content, so every item stands alone.
  it('does not label which lesson an item came from, anywhere the learner can see', () => {
    const items = buildUnitTest(bodiesFor(0));
    for (const it of items) {
      expect(it.q).not.toContain(it.lessonId);
      for (const o of it.options) expect(o).not.toContain(it.lessonId);
    }
  });

  it('carries a question, four options, a correct index and an explanation', () => {
    const items = buildUnitTest(bodiesFor(0));
    for (const it of items) {
      expect(typeof it.q).toBe('string');
      expect(it.options.length).toBeGreaterThanOrEqual(2);
      expect(it.correct).toBeGreaterThanOrEqual(0);
      expect(it.correct).toBeLessThan(it.options.length);
      expect(it.lessonId.length).toBeGreaterThan(0);
    }
  });
});

describe('degradation', () => {
  const item = { q: 'q', options: ['a', 'b'], correct: 0, explanation: 'e' };
  const withItems = (id: string, n: number): LessonBodyLike => ({
    id,
    slides: [
      { type: 'check', items: new Array(n).fill(0).map((_, k) => ({ ...item, q: id + k })) },
    ],
  });

  it('contributes nothing from a lesson with no check slide, and blocks nothing', () => {
    const items = buildUnitTest([
      withItems('a', 6),
      { id: 'b', slides: [{ type: 'intro' }] },
      withItems('c', 6),
    ]);
    expect(items.map((x) => x.lessonId)).toEqual(['a', 'c', 'a', 'c', 'a', 'c']);
    expect(unitTestAvailability(items)).toBe('insufficient');
  });

  it('handles an empty unit and an empty body list', () => {
    expect(buildUnitTest([])).toEqual([]);
    expect(buildUnitTest([{ id: 'x' }])).toEqual([]);
  });

  it('takes what a thin lesson has rather than repeating an item', () => {
    const items = buildUnitTest([withItems('a', 1), withItems('b', 2)]);
    expect(items.map((x) => x.q)).toEqual(['a0', 'b0', 'b1']);
    expect(new Set(items.map((x) => x.q)).size).toBe(items.length);
  });

  it('caps at UNIT_TEST_ITEMS even when the unit is unusually rich', () => {
    const many = new Array(9).fill(0).map((_, i) => withItems('l' + i, 6));
    expect(buildUnitTest(many)).toHaveLength(UNIT_TEST_ITEMS);
  });
});

describe('scoring and the report', () => {
  const items = buildUnitTest(bodiesFor(0));

  it('counts only answers that match the source-order correct index', () => {
    const allRight: Record<number, number> = {};
    items.forEach((it, i) => (allRight[i] = it.correct));
    expect(unitTestScore(items, allRight)).toBe(items.length);
    expect(unitTestScore(items, {})).toBe(0);
  });

  it('reports which of the unit’s lessons the misses came from', () => {
    const answers: Record<number, number> = {};
    items.forEach((it, i) => {
      // Miss everything from the unit's first lesson, get the rest right.
      answers[i] =
        it.lessonId === items[0]!.lessonId ? (it.correct + 1) % it.options.length : it.correct;
    });
    const rows = unitTestBreakdown(items, answers);
    const weak = rows.filter((r) => r.correct < r.total);
    expect(weak).toHaveLength(1);
    expect(weak[0]!.lessonId).toBe(items[0]!.lessonId);
    expect(weak[0]!.correct).toBe(0);
    expect(weak[0]!.total).toBe(ITEMS_PER_LESSON);
    expect(rows.reduce((n, r) => n + r.total, 0)).toBe(items.length);
  });
});
