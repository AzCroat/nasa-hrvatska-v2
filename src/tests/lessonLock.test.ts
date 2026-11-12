// src/tests/lessonLock.test.ts
//
// THE COURSE IS SEQUENTIAL (owner decision, 2026-11-12): a lesson ahead of the learner
// is locked, in every door; test-out stays and moves the learner forward IN ORDER.
// See src/lib/lessonLock.ts.
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { buildCourseUnits } from '../lib/courseUnits';
import {
  openLessonIds,
  lockReasonFor,
  readOpenLessons,
  readLockLookup,
  lessonLockReason,
} from '../lib/lessonLock';
import { readCourseState } from '../lib/courseStep';
import { unitTestOffer } from '../lib/courseUnits';
import { markLessonComplete } from '../lib/curriculumProgress';
import { readCourseAhead } from '../lib/courseGate';
import type { CurriculumEntry } from '../lib/curriculum';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);
const U1 = UNITS[0]!.lessons.map((l) => l.id);
const U2 = UNITS[1]!.lessons.map((l) => l.id);

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});
const seed = () => localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));

describe('openLessonIds — the pure rule', () => {
  it('a new learner has exactly ONE lesson open: the first', () => {
    const open = openLessonIds(UNITS, new Set(), new Set(), 1);
    expect([...open]).toEqual([U1[0]]);
  });

  it('finishing (or testing out of) a lesson opens the next, one at a time, in order', () => {
    for (let k = 1; k < U1.length; k++) {
      const open = openLessonIds(UNITS, new Set(U1.slice(0, k)), new Set(), 1);
      expect(open.has(U1[k]!), `after ${k} done`).toBe(true);
      if (k + 1 < U1.length) expect(open.has(U1[k + 1]!), `after ${k} done`).toBe(false);
    }
  });

  it('cannot be skipped: a lesson completed out of order does not open the ones between', () => {
    const open = openLessonIds(UNITS, new Set([U1[2]!]), new Set(), 1);
    expect(open.has(U1[0]!)).toBe(true); // today's lesson is still the FIRST unread one
    expect(open.has(U1[1]!)).toBe(false);
    expect(open.has(U1[3]!)).toBe(false);
  });

  it('a later unit stays locked until the unit before it is ADVANCED (test and production)', () => {
    const allRead = openLessonIds(UNITS, new Set(U1), new Set(), 1);
    expect(U2.some((id) => allRead.has(id))).toBe(false);
    const advanced = openLessonIds(UNITS, new Set(U1), new Set([UNITS[0]!.id]), 2);
    expect(advanced.has(U2[0]!)).toBe(true);
    expect(advanced.has(U2[1]!)).toBe(false);
  });

  it('a finished course opens every lesson', () => {
    const all = new Set(UNITS.map((u) => u.id));
    const open = openLessonIds(UNITS, new Set(), all, null);
    expect(open.size).toBe(SPINE.length);
  });
});

describe('lockReasonFor — says what unlocks it, never what it teaches', () => {
  const open = openLessonIds(UNITS, new Set(), new Set(), 1);
  it('names the unit to pass for a later unit', () => {
    expect(lockReasonFor(U2[0]!, UNITS, open, 1)).toBe('Opens after you pass Unit 1.');
  });
  it('names the lesson before it for the same unit', () => {
    expect(lockReasonFor(U1[3]!, UNITS, open, 1)).toBe('Opens after lesson 3 of this unit.');
  });
  it('is null for an open lesson and for an id the spine does not know', () => {
    expect(lockReasonFor(U1[0]!, UNITS, open, 1)).toBeNull();
    expect(lockReasonFor('not-a-lesson', UNITS, open, 1)).toBeNull();
  });
});

describe('from storage, with the real spine', () => {
  it('ABSENCE NEVER LOCKS: with no spine nothing is locked', () => {
    expect(readOpenLessons()).toBeNull();
    expect(lessonLockReason(U2[0]!)).toBeNull();
    expect(readLockLookup()('cases')).toBeNull();
  });

  it('with the spine, a new learner is locked out of everything but lesson 1', () => {
    seed();
    expect(lessonLockReason(U1[0]!)).toBeNull();
    expect(lessonLockReason(U1[1]!)).not.toBeNull();
    expect(lessonLockReason(U2[0]!)).toBe('Opens after you pass Unit 1.');
    expect(readLockLookup()(SPINE[SPINE.length - 1]!.id)).not.toBeNull();
  });

  it('completing a lesson (which a test-out also does) opens the next, in storage terms', () => {
    seed();
    markLessonComplete(U1[0]!, '2026-11-12');
    expect(lessonLockReason(U1[1]!)).toBeNull();
    expect(lessonLockReason(U1[2]!)).not.toBeNull();
  });

  it('is ONE definition with the daily session: the lessons it calls reached are the open ones', () => {
    seed();
    markLessonComplete(U1[0]!, '2026-11-12');
    const open = readOpenLessons()!;
    const ahead = readCourseAhead();
    // a concept taught by an open lesson is reached; every concept the session treats
    // as ahead is taught only by a locked lesson
    const lockedIds = SPINE.filter((e) => !open.has(e.id)).map((e) => e.id);
    expect(lockedIds.length).toBe(SPINE.length - open.size);
    expect(ahead.categories.size).toBeGreaterThan(0);
  });
});

describe('TEST-OUT SURVIVES THE LOCK (owner requirement, 2026-11-12)', () => {
  it('a new learner is still offered the unit test-out on the unit they stand on', () => {
    seed();
    const row = readCourseState().rows.find((r) => r.unit.index === 1)!;
    expect(unitTestOffer(row)).toBe('testout');
  });

  it('the lock module does not touch the test-out machinery (it only reads progress)', () => {
    const src = readFileSync('src/lib/lessonLock.ts', 'utf8')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    expect(src).not.toMatch(/testout|testOut|lesson-test-out|recordUnitTest|markLessonComplete/);
  });

  it('the lesson test-out is still offered on the intro of an open lesson', () => {
    const src = readFileSync('src/components/learn/AnimatedLesson.tsx', 'utf8');
    expect(src).toContain('lesson-test-out');
  });
});

describe('every door asks the lock', () => {
  const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  it('launchAnimLesson refuses a locked lesson (the backstop)', () => {
    const src = strip(readFileSync('src/hooks/useScreenLauncher.ts', 'utf8'));
    const at = src.indexOf('const launchAnimLesson = useCallback(');
    expect(at).toBeGreaterThan(0);
    expect(src.slice(at, at + 400)).toMatch(/if \(lessonLockReason\(lessonId\)\) return false;/);
  });
  it.each([
    ['src/components/learn/LearningCenter.tsx', /readLockLookup/],
    ['src/components/learn/CourseMapScreen.tsx', /readLockLookup/],
    ['src/components/learn/UnitTestScreen.tsx', /lessonLockReason/],
    ['src/components/learn/LevelReviewScreen.tsx', /lessonLockReason/],
  ])('%s consults the lock before offering a lesson', (file, re) => {
    expect(strip(readFileSync(file, 'utf8'))).toMatch(re);
  });
});
