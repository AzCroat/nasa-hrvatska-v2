// src/tests/courseUnitCanDo.test.tsx
//
// Recommendation 6 (2026-09-29): every one of the 36 units carries 2–3 can-do
// statements, keyed by the same ids the course derives, and the course map shows them.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { COURSE_UNIT_CAN_DO, canDoFor } from '../data/courseUnitCanDo';
import { COURSE_UNIT_TITLES } from '../data/courseUnitTitles';
import { findSerbism } from '../../functions/api/_serbisms.js';
import { containsCyrillic } from '../../functions/api/_croatianGuard.js';

describe('can-do statements', () => {
  const ids = Object.keys(COURSE_UNIT_TITLES);

  it('exist for exactly the 36 units, 2–3 each', () => {
    expect(ids).toHaveLength(36);
    expect(Object.keys(COURSE_UNIT_CAN_DO).sort()).toEqual([...ids].sort());
    for (const id of ids) {
      expect(canDoFor(id).length, id).toBeGreaterThanOrEqual(2);
      expect(canDoFor(id).length, id).toBeLessThanOrEqual(3);
    }
    expect(canDoFor('Z9-9')).toEqual([]);
  });

  it('speak in the learner’s voice, and their embedded Croatian passes the shared checks', () => {
    // The files are English with Croatian examples in running text, which no lint field
    // matcher reads — so the shared Serbism and script checks run here instead.
    for (const [id, list] of Object.entries(COURSE_UNIT_CAN_DO))
      for (const c of list) {
        expect(c, id).toMatch(/^I can /);
        expect(containsCyrillic(c), `${id}: ${c}`).toBe(false);
        expect(findSerbism(c), `${id}: ${c}`).toBeFalsy();
      }
  });

  it('the course map and the production brief render them', () => {
    const map = fs.readFileSync('src/components/learn/CourseMapScreen.tsx', 'utf8');
    expect(map).toMatch(/course-unit-cando-\$\{unit\.id\}/);
    expect(map).toMatch(/canDoFor\(unit\.id\)\.map/);
    const prod = fs.readFileSync('src/components/learn/UnitProductionScreen.tsx', 'utf8');
    expect(prod).toMatch(/canDoFor\(unit\.id\)/);
  });
});

describe('the depth rules see a hole in an item list', () => {
  it('reports a sparse practice or check array', async () => {
    const { practiceProblems } = await import('../../scripts/lessonDepthRules.mjs');
    // eslint-disable-next-line no-sparse-arrays
    const holed = [{ q: 'a' }, , { q: 'b' }];
    const probs = practiceProblems({
      level: 'A1',
      slides: [
        { type: 'practice', items: holed },
        { type: 'check', items: holed },
      ],
    } as never) as string[];
    expect(probs.some((p) => /practice items: has an empty slot/.test(p))).toBe(true);
    expect(probs.some((p) => /check items: has an empty slot/.test(p))).toBe(true);
  });
});
