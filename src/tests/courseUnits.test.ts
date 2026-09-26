/**
 * courseUnits — the course's shape, derived from the real spine.
 *
 * WHAT THIS GUARDS THAT NOTHING ELSE DOES. The units are a CHUNKING of the
 * curriculum spine rather than a second list of 180 lesson ids (see the header
 * of src/lib/courseUnits.ts for why). A chunking cannot desynchronise from its
 * source — but it CAN silently lose lessons off the end of a level, or produce a
 * course whose numbering does not match what a learner is shown, and neither
 * would throw. So this drives the derivation over the REAL spine, not a fixture.
 *
 * AND IT PINS THE ONE-PATH DIRECTIVE MECHANICALLY (owner, 2026-09-26: "all users
 * follow the same learning path"). `getNextLesson` infers that everything below a
 * learner's certified level is already known; the course must not, or a returning
 * learner opens the map with twelve units marked in a way nothing measured. A
 * source pin is the only thing that can say so, because a certification-reading
 * version would pass every behavioural test written with an A1 fixture.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import {
  buildCourseUnits,
  courseProgress,
  courseMapBlock,
  nextCourseLesson,
  unitOfLesson,
  COURSE_MAP_COPY,
  UNIT_SIZE,
  COURSE_LEVELS,
} from '../lib/courseUnits';
import type { CurriculumEntry } from '../lib/curriculum';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];

function src(rel: string): string {
  return readFileSync(resolve(__dirname, '..', rel), 'utf8');
}

/** The shared strip idiom — line comments FIRST, blocks LAST (sweep 72). */
function strip(s: string): string {
  return s.replace(/^\s*\/\/[^\n]*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('buildCourseUnits over the real spine', () => {
  const units = buildCourseUnits(SPINE);

  it('produces six units per level and 36 in all', () => {
    expect(units).toHaveLength(36);
    for (const lv of COURSE_LEVELS) {
      expect(units.filter((u) => u.level === lv)).toHaveLength(6);
    }
  });

  it('gives every unit UNIT_SIZE lessons', () => {
    for (const u of units) {
      expect(u.lessons, u.id).toHaveLength(UNIT_SIZE);
    }
  });

  it('numbers units densely from 1, in CEFR then spine order', () => {
    expect(units.map((u) => u.index)).toEqual(Array.from({ length: 36 }, (_, i) => i + 1));
    // The level order is the learner's path: all of A1 before any of A2.
    expect(units.map((u) => u.level)).toEqual(
      COURSE_LEVELS.flatMap((lv) => Array.from({ length: 6 }, () => lv)),
    );
    for (const u of units) expect(u.id).toBe(`${u.level}-${u.indexInLevel}`);
  });

  it('places every spine lesson in exactly one unit, and invents none', () => {
    const placed = units.flatMap((u) => u.lessons.map((l) => l.id));
    expect(new Set(placed).size).toBe(placed.length);
    expect(placed.slice().sort()).toEqual(SPINE.map((e) => e.id).sort());
  });

  it('keeps each unit ordered by the spine, ascending, with no gap', () => {
    for (const u of units) {
      const orders = u.lessons.map((l) => l.order);
      expect(orders, u.id).toEqual([...orders].sort((a, b) => a - b));
      expect(orders[0], u.id).toBe((u.indexInLevel - 1) * UNIT_SIZE + 1);
    }
  });

  it('authors a title for every unit (none falls back to a positional name)', () => {
    const derived = units.filter((u) => u.titleDerived);
    expect(
      derived.map((u) => u.id),
      'these units have no authored title in src/data/courseUnitTitles.ts',
    ).toEqual([]);
    for (const u of units) {
      expect(u.title.length, u.id).toBeGreaterThan(3);
      expect(u.subtitle.length, u.id).toBeGreaterThan(10);
    }
  });

  it('finds the unit a lesson belongs to, and reports an unknown lesson as absent', () => {
    expect(unitOfLesson(units, 'cases')?.id).toBe('A1-4');
    expect(unitOfLesson(units, 'jezik-i-drustvo')?.id).toBe('C2-6');
    expect(unitOfLesson(units, 'no-such-lesson')).toBeNull();
    expect(unitOfLesson(units, '')).toBeNull();
  });

  // A LEVEL WHOSE COUNT IS NOT A MULTIPLE OF FIVE MUST NOT LOSE ITS REMAINDER.
  // Dropping the tail is the one failure mode of a chunking that is invisible
  // from the map: the lessons simply are not there.
  it('ends a short level with a short unit rather than dropping lessons', () => {
    const seven: CurriculumEntry[] = Array.from({ length: 7 }, (_, i) => ({
      id: `x${i + 1}`,
      level: 'A1',
      order: i + 1,
      prerequisites: [],
      objectives: ['o'],
    }));
    const u = buildCourseUnits(seven);
    expect(u).toHaveLength(2);
    expect(u[1]!.lessons.map((l) => l.id)).toEqual(['x6', 'x7']);
    expect(u.flatMap((x) => x.lessons)).toHaveLength(7);
  });

  it('produces nothing from an empty spine', () => {
    expect(buildCourseUnits([])).toEqual([]);
  });
});

describe('courseProgress', () => {
  const units = buildCourseUnits(SPINE);

  it('starts every learner at unit 1 with nothing claimed', () => {
    const p = courseProgress(units, []);
    expect(p.currentIndex).toBe(1);
    expect(p.unitsDone).toBe(0);
    expect(p.lessonsDone).toBe(0);
    expect(p.lessonsTotal).toBe(180);
    expect(p.units[0]!.state).toBe('current');
    expect(p.units[1]!.state).toBe('upcoming');
    expect(p.units[35]!.state).toBe('upcoming');
  });

  it('marks a finished unit done and moves the position on', () => {
    const done = units[0]!.lessons.map((l) => l.id);
    const p = courseProgress(units, done);
    expect(p.units[0]!.state).toBe('done');
    expect(p.units[0]!.done).toBe(5);
    expect(p.currentIndex).toBe(2);
    expect(p.unitsDone).toBe(1);
    expect(p.lessonsDone).toBe(5);
  });

  // A learner can reach a later lesson through search, which is ungated. The
  // current unit is still the first unfinished one, and it honestly reports the
  // partial count rather than skipping ahead.
  it('keeps the position at the first unfinished unit even when a later one is complete', () => {
    const done = [...units[2]!.lessons.map((l) => l.id), units[0]!.lessons[0]!.id];
    const p = courseProgress(units, done);
    expect(p.currentIndex).toBe(1);
    expect(p.units[0]!.state).toBe('current');
    expect(p.units[0]!.done).toBe(1);
    expect(p.units[2]!.state).toBe('done');
    expect(p.unitsDone).toBe(1);
  });

  it('reports a completed course with no current unit', () => {
    const p = courseProgress(
      units,
      SPINE.map((e) => e.id),
    );
    expect(p.currentIndex).toBeNull();
    expect(p.unitsDone).toBe(36);
    expect(p.lessonsDone).toBe(180);
    expect(p.units.every((r) => r.state === 'done')).toBe(true);
  });

  // A COUNT IS A CLAIM TOO. With no spine the caller must render its
  // content-state notice; these zeros exist so it can tell that it must.
  it('returns zeros and no position for an empty course', () => {
    const p = courseProgress([], []);
    expect(p).toMatchObject({
      currentIndex: null,
      unitsDone: 0,
      unitsTotal: 0,
      lessonsDone: 0,
      lessonsTotal: 0,
    });
  });

  it('accepts a Set or an array of completions identically', () => {
    const ids = units[0]!.lessons.map((l) => l.id);
    expect(courseProgress(units, new Set(ids)).lessonsDone).toBe(
      courseProgress(units, ids).lessonsDone,
    );
  });
});

describe('nextCourseLesson', () => {
  const units = buildCourseUnits(SPINE);

  it('is the first lesson of the course for a new learner', () => {
    const n = nextCourseLesson(units, []);
    expect(n?.lesson.id).toBe('alphabet');
    expect(n?.unit.id).toBe('A1-1');
  });

  it('skips completed lessons without leaving the course order', () => {
    const n = nextCourseLesson(units, ['alphabet', 'greetings-farewells']);
    expect(n?.lesson.id).toBe('pronouns-biti');
  });

  it('is null when everything is complete', () => {
    expect(
      nextCourseLesson(
        units,
        SPINE.map((e) => e.id),
      ),
    ).toBeNull();
  });
});

describe('courseMapBlock — three facts, three sentences', () => {
  it('says nothing when there are units', () => {
    expect(courseMapBlock('pending', 36)).toBeNull();
    expect(courseMapBlock('failed', 36)).toBeNull();
  });

  it('distinguishes not-yet from failed from genuinely empty', () => {
    expect(courseMapBlock('pending', 0)).toBe('loading');
    expect(courseMapBlock('failed', 0)).toBe('unavailable');
    expect(courseMapBlock('settled', 0)).toBe('empty');
  });

  it('gives each state its own sentence, and no sentence blames the learner', () => {
    const copies = Object.values(COURSE_MAP_COPY);
    expect(new Set(copies).size).toBe(copies.length);
    for (const c of copies) expect(c).not.toMatch(/\byou (?:have|did|must)\b/i);
  });
});

describe('the course does not read a CEFR level', () => {
  // The one-path directive, made mechanical. A version that consulted the
  // certified level would pass every test above (they all use A1-order spines),
  // so only the source can say this.
  it('imports no certification or CEFR-derivation module', () => {
    const code = strip(src('lib/courseUnits.ts'));
    for (const banned of [
      'cefrCertification',
      'getUserCefr',
      'getDisplayLevel',
      'getContentUnlockLevel',
      'getGenerationCefr',
      'getCertifiedLevel',
      'getVerifiedLevel',
    ]) {
      expect(code, `courseUnits must not depend on ${banned}`).not.toContain(banned);
    }
  });

  it('takes no level or certification argument in its public surface', () => {
    const code = strip(src('lib/courseUnits.ts'));
    expect(code).not.toMatch(/certifiedLevel|unlockedLevel/);
  });
});
