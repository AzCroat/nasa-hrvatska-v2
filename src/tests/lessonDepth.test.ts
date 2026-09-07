// lessonDepth.test.ts — every animated lesson TEACHES IN DEPTH AND THEN TESTS
// (owner directive, 2026-09-07).
//
// The census this closes: all 180 lessons were one template — ~28 Croatian
// example words and two ungated quiz questions each, C2 thinner than A1 — and
// completion was recorded on reaching the summary slide. The rules live in
// scripts/lessonDepthRules.mjs (shared with the author's dry-run script); this
// file is the build gate. It also ties the DATA to the GATE: the renderer's
// lessonGate() must resolve every shipped lesson to its mastery check, because
// a malformed check silently degrades to quiz gating and nothing else would say.
import { describe, it, expect } from 'vitest';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import {
  lessonDepthProblems,
  exampleHrWords,
  MIN_CHECK_ITEMS,
  MIN_EXAMPLE_HR_WORDS,
} from '../../scripts/lessonDepthRules.mjs';
import { lessonGate, MIN_CHECK_ITEMS as GATE_MIN } from '../lib/lessonCheck';

type Lesson = (typeof LESSONS)[number];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
const byLevel = (lv: string) => (LESSONS as Lesson[]).filter((l) => l.level === lv);

describe('the teaching-depth contract holds for every lesson', () => {
  it('is 180 lessons, 30 per level, all in the spine', () => {
    expect(LESSONS.length).toBe(180);
    const spine = new Set(CURRICULUM.map((e: { id: string }) => e.id));
    for (const lv of LEVELS) expect(byLevel(lv).length, lv).toBe(30);
    for (const l of LESSONS as Lesson[]) expect(spine.has(l.id), l.id).toBe(true);
  });

  it('every lesson passes every depth rule (the failure names the lesson and the rule)', () => {
    const failing = (LESSONS as Lesson[])
      .map((l) => ({ id: l.id, problems: lessonDepthProblems(l) }))
      .filter((r) => r.problems.length > 0);
    expect(
      failing.map((r) => `${r.id}: ${r.problems.join('; ')}`).join('\n'),
      'lessons violating the depth contract',
    ).toBe('');
  });

  it('the gate the renderer computes is the mastery check for EVERY lesson', () => {
    // A check with a malformed item is dropped by findCheckSlide; a check with
    // no valid items falls back to quiz gating. Neither must happen silently.
    expect(GATE_MIN).toBe(MIN_CHECK_ITEMS);
    for (const l of LESSONS as Lesson[]) {
      const g = lessonGate(l.slides as Array<{ type?: string }>);
      expect(g.kind, `${l.id} gate kind`).toBe('check');
      expect(g.total, `${l.id} check items`).toBeGreaterThanOrEqual(MIN_CHECK_ITEMS);
    }
  });

  it('depth scales with level: per-level Croatian example words meet the floors', () => {
    for (const lv of LEVELS) {
      const lessons = byLevel(lv);
      const total = lessons.reduce((n, l) => n + exampleHrWords(l), 0);
      // Every lesson meets its own floor; the level total is the sum's floor.
      expect(total, `${lv} example words`).toBeGreaterThanOrEqual(30 * MIN_EXAMPLE_HR_WORDS[lv]);
    }
  });

  it('the whole corpus carries at least three times the pre-directive example prose', () => {
    // 5,124 Croatian example words on 2026-09-07 (census). A floor, not a
    // target: the level floors sum to 21,000.
    const total = (LESSONS as Lesson[]).reduce((n, l) => n + exampleHrWords(l), 0);
    expect(total).toBeGreaterThanOrEqual(15_000);
  });
});
