/**
 * learnerFlow — the owner's report of 2026-11-19, driven through the real stores.
 *
 * "Unit 1 and 2 have 5/5. That is passing and should have unlocked three." A unit
 * advances when all its lessons are PASSED or its test is; production never gates.
 * "You should be able to test out of any lesson at any time." A locked lesson or unit
 * offers its test-out; reading ahead stays closed. A passed drill counts.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import { recordUnitTest, readCourseUnits } from '../lib/courseUnitProgress';
import { readCourseState, currentOwedStep, recommendedCourseSteps } from '../lib/courseStep';
import { buildCourseUnits, lockReason, unitTestOffer, mapTestOffer } from '../lib/courseUnits';
import {
  openLessonIds,
  readLockLookup,
  readNextOpenLesson,
  lessonLockReason,
  requestLessonTestOut,
  LESSON_TESTOUT_KEY,
} from '../lib/lessonLock';
import { recordMasteryPass } from '../lib/lessonRetention';
import type { CurriculumEntry } from '../lib/curriculum';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);

function pass(unitIndex: number, count = 5): void {
  for (const l of UNITS[unitIndex]!.lessons.slice(0, count)) {
    markLessonComplete(l.id, '2026-09-01');
    recordMasteryPass(l.id, { score: 6, total: 6, results: [], at: '2026-09-01' });
  }
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  writeCurriculumSpine(SPINE);
});

describe('a unit advances on its lessons alone', () => {
  it('Units 1 and 2 passed with no test and no production: Unit 3 is open, 1-2 advanced', () => {
    pass(0);
    pass(1);
    const state = readCourseState();
    expect(state.advanced.has('A1-1') && state.advanced.has('A1-2')).toBe(true);
    expect(state.open.has('A1-3')).toBe(true);
    expect(state.rows[2]!.state).not.toBe('locked');
    expect(state.currentIndex).toBe(3);
  });

  it('one lesson of Unit 2 not passed: Unit 3 stays locked and the reason names that lesson', () => {
    pass(0);
    for (const l of UNITS[1]!.lessons.slice(1)) markLessonComplete(l.id, '2026-09-01');
    const state = readCourseState();
    const row3 = state.rows[2]!;
    expect(row3.state).toBe('locked');
    const step = currentOwedStep(state)!;
    expect(step.lesson.id).toBe(UNITS[1]!.lessons[0]!.id);
    const why = lockReason(row3, state.rows[1]!.unit, step)!;
    expect(why).toContain(UNITS[1]!.lessons[0]!.title || UNITS[1]!.lessons[0]!.id);
    expect(why).toContain('lesson 1 of Unit 2');
    expect(why).toMatch(/test out/);
    // The lock names the owed step for lessons of the locked unit too.
    const lookup = readLockLookup();
    expect(lookup(UNITS[2]!.lessons[0]!.id)).toContain('lesson 1 of Unit 2');
  });

  it('starts the retention ladder for a unit advanced by lessons alone', () => {
    pass(0);
    expect(readCourseUnits().units['A1-1']?.recheck).toBeUndefined();
    readCourseState();
    expect(readCourseUnits().units['A1-1']?.recheck).toBeDefined();
  });

  it('recommends the unit test after the next lesson, never as a gate', () => {
    pass(0);
    expect(readCourseState().open.has('A1-2')).toBe(true);
    const rec = recommendedCourseSteps();
    expect(rec[0]?.kind).toBe('unit-test');
    expect(mapTestOffer(readCourseState().rows[0]!)).toBe('primary');
  });
});

describe('test-out of any lesson or unit, locked or not', () => {
  it('a locked unit offers its test as a test-out', () => {
    const state = readCourseState();
    const locked = state.rows.find((r) => r.state === 'locked')!;
    expect(unitTestOffer(locked)).toBe('testout');
    expect(mapTestOffer(locked)).toBe('testout');
  });

  it('a unit passed ahead is kept, stays honestly locked, and advances at once when reached', () => {
    recordUnitTest('A1-3', 15, 15, true, '2026-09-01', true);
    let state = readCourseState();
    expect(state.rows[2]!.state).toBe('locked');
    expect(state.rows[2]!.tested).toBe(true);
    expect(state.advanced.has('A1-3')).toBe(false);
    expect(lockReason(state.rows[2]!, state.rows[1]!.unit, currentOwedStep(state))).toMatch(
      /already passed this unit/,
    );
    pass(0);
    pass(1);
    state = readCourseState();
    expect(state.advanced.has('A1-3')).toBe(true);
    expect(state.currentIndex).toBe(4);
  });

  it('a lesson completed out of order breaks nothing: lessons 1 and 2 stay open as today, counts right', () => {
    const lessons = UNITS[0]!.lessons;
    markLessonComplete(lessons[2]!.id, '2026-09-01');
    const state = readCourseState();
    const done = new Set([lessons[2]!.id]);
    const open = openLessonIds(state.units, done, state.advanced, state.currentIndex);
    expect(open.has(lessons[0]!.id)).toBe(true); // today's lesson is still lesson 1
    expect(open.has(lessons[2]!.id)).toBe(true);
    expect(open.has(lessons[1]!.id)).toBe(false);
    expect(state.rows[0]!.done).toBe(1);
    expect(readNextOpenLesson()?.id).toBe(lessons[0]!.id);
  });

  it('a locked lesson names its owed step and says it can be tested out of', () => {
    const lessons = UNITS[0]!.lessons;
    const why = lessonLockReason(lessons[3]!.id)!;
    expect(why).toContain('Finish lesson 1 of this unit to open lesson 4');
    expect(why).toMatch(/test out of it any time/);
  });

  it('the test-out handoff is a one-shot key naming the lesson', () => {
    requestLessonTestOut('alphabet');
    expect(sessionStorage.getItem(LESSON_TESTOUT_KEY)).toBe('alphabet');
  });
});
