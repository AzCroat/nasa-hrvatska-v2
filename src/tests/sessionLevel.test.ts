// src/tests/sessionLevel.test.ts — the session's level is the course's level
// (Daily Session redesign, increment 1; owner decision 1, 2026-09-28).
//
// Driven through the REAL course stores and the REAL 180-lesson spine, because a
// fixture spine at one level cannot tell a course-reading version from an
// XP-reading one (courseUnits.test.ts learned the same thing).

import { describe, it, expect, beforeEach } from 'vitest';
import { courseUnitLevel, sessionLevel, launchedLevel } from '../lib/sessionLevel';
import { seedCourseAt } from './helpers/courseSeed';
import { unitIndexAt } from './helpers/unitIndex';
import { readCourseState } from '../lib/courseStep';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('courseUnitLevel', () => {
  it('is null with no curriculum data, so callers fall back to the learner’s own level', () => {
    expect(courseUnitLevel()).toBeNull();
    expect(sessionLevel('B1')).toBe('B1');
    expect(launchedLevel('speaking_guided', 'B1')).toBe('B1');
  });

  it.each(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])(
    'a %s unit is served at its own level, whatever the XP level says',
    (level) => {
      seedCourseAt(unitIndexAt(level, 1));
      expect(courseUnitLevel()).toBe(level);
      expect(sessionLevel('C2')).toBe(level);
      expect(sessionLevel('A1')).toBe(level);
    },
  );

  it('is null once the whole course is finished — the learner has earned their own level', () => {
    const total = (() => {
      seedCourseAt(1);
      return readCourseState().units.length;
    })();
    localStorage.clear();
    seedCourseAt(total + 1);
    expect(readCourseState().currentIndex).toBeNull();
    expect(courseUnitLevel()).toBeNull();
    expect(sessionLevel('B2')).toBe('B2');
  });
});

describe('launchedLevel — only the screen the session launched reads the course level', () => {
  it('returns the course level for the launched screen and the fallback for any other', () => {
    seedCourseAt(1);
    sessionStorage.setItem('nh_session_started', 'speaking_guided');
    expect(launchedLevel('speaking_guided', 'B1')).toBe('A1');
    expect(launchedLevel('writing_guided', 'B1')).toBe('B1');
    expect(launchedLevel('dialogue', 'B1')).toBe('B1');
  });

  it('returns the fallback when nothing was launched from the session', () => {
    seedCourseAt(1);
    expect(launchedLevel('speaking_guided', 'B1')).toBe('B1');
  });

  it('follows the course upward too: a fast learner at a B1 unit with A1 XP gets B1', () => {
    seedCourseAt(unitIndexAt('B1'));
    sessionStorage.setItem('nh_session_started', 'dialogue');
    expect(launchedLevel('dialogue', 'A1')).toBe('B1');
  });
});
