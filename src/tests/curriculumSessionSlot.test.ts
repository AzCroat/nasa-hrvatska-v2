// src/tests/curriculumSessionSlot.test.ts
//
// PRIORITY 0 — TODAY'S LESSON (Wave 1, 2026-08-28).
//
// Before this slot, every guaranteed slot in buildSessionActivities was practice
// or assessment: the app tested competence it had never taught. A lesson could
// only reach a learner by winning a fill slot, as one A1-tagged pool entry among
// roughly a hundred.
//
// Three properties are pinned, and the second is the one a future change is most
// likely to break by accident:
//
//   1. the lesson comes FIRST — a lesson each day, before anything tests you
//   2. it costs a FILL slot, not an extra one, so the session-length contract
//      (A1 → 3, A2+ → 4, +2 in fluency mode) does not move
//   3. no spine means no slot, and the session composes exactly as it did before

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

import { buildSessionActivities } from '../hooks/useDailySession';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import type { CurriculumEntry } from '../lib/curriculum';

// Real lesson ids, so the LESSON_TAUGHT_CATEGORY lookup exercises the real map
// rather than a fixture that cannot drift with it.
const SPINE: CurriculumEntry[] = [
  {
    id: 'alphabet',
    level: 'A1',
    order: 1,
    prerequisites: [],
    objectives: ['Read any Croatian word aloud'],
    title: 'Croatian Alphabet & Pronunciation',
  },
  {
    id: 'present-tense-verbs',
    level: 'A1',
    order: 2,
    prerequisites: ['alphabet'],
    objectives: ['Conjugate regular verbs'],
    title: 'Present Tense Verbs',
  },
];

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
});

describe('the lesson comes first', () => {
  it('is the very first activity in the session', () => {
    writeCurriculumSpine(SPINE);
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.screen).toBe('animlesson');
    expect(acts[0]?.id).toBe('curriculum_alphabet');
  });

  it('carries the lesson title and a checkable reason', () => {
    writeCurriculumSpine(SPINE);
    const first = buildSessionActivities('A1')[0];
    expect(first?.label).toBe('Croatian Alphabet & Pronunciation');
    expect(first?.reason).toBe('Lesson 1 of 2 in A1');
  });

  it('advances once the learner completes it', () => {
    writeCurriculumSpine(SPINE);
    markLessonComplete('alphabet', '2026-08-28');
    expect(buildSessionActivities('A1')[0]?.id).toBe('curriculum_present-tense-verbs');
  });

  it('appears exactly once — never two lessons in a session', () => {
    writeCurriculumSpine(SPINE);
    const lessons = buildSessionActivities('A1').filter((a) => a.screen === 'animlesson');
    expect(lessons.length).toBe(1);
  });
});

describe('THE LENGTH CONTRACT: the lesson costs a fill slot, not an extra one', () => {
  it('A1 session length is identical with and without a spine', () => {
    const without = buildSessionActivities('A1').length;
    writeCurriculumSpine(SPINE);
    const withSpine = buildSessionActivities('A1').length;
    expect(withSpine).toBe(without);
  });

  it('holds at A2 and above, where the fill target is larger', () => {
    for (const level of ['A2', 'B1', 'B2', 'C1', 'C2']) {
      localStorage.clear();
      const without = buildSessionActivities(level).length;
      writeCurriculumSpine(SPINE);
      const withSpine = buildSessionActivities(level).length;
      expect(withSpine, `${level} session grew from ${without} to ${withSpine}`).toBe(without);
    }
  });
});

describe('teaching leads straight into doing', () => {
  it('the drill for what the lesson taught follows it in the SAME session', () => {
    // The existing coupling only fires on the NEXT session, because it reads a
    // queue the lesson writes on completion. Without this the learner is taught a
    // concept and then tested on something else for the rest of the day.
    writeCurriculumSpine(SPINE);
    markLessonComplete('alphabet', '2026-08-28'); // advance to the verb lesson
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.id).toBe('curriculum_present-tense-verbs');
    expect(acts[1]?.id).toBe('curriculum_practice_present-tense');
    expect(acts[1]?.reason).toContain('lesson taught');
  });

  it('a lesson with no honest category gets NO drill rather than a wrong one', () => {
    // `alphabet` is deliberately unmapped in LESSON_TAUGHT_CATEGORY. A wrong
    // drill after a lesson is worse than no drill.
    writeCurriculumSpine(SPINE);
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.id).toBe('curriculum_alphabet');
    expect(acts[1]?.id ?? '').not.toMatch(/^curriculum_practice_/);
  });
});

describe('no spine, no slot — the session composes as it always did', () => {
  it('adds no lesson when the curriculum has never been fetched', () => {
    const acts = buildSessionActivities('A1');
    expect(acts.some((a) => a.id.startsWith('curriculum_'))).toBe(false);
  });

  it('adds no lesson when the cached spine is corrupt', () => {
    localStorage.setItem('nh_curriculum_spine', 'not json');
    const acts = buildSessionActivities('A1');
    expect(acts.some((a) => a.id.startsWith('curriculum_'))).toBe(false);
    expect(acts.length).toBeGreaterThan(0);
  });

  it('still builds a full session when the spine is empty', () => {
    writeCurriculumSpine([]);
    expect(buildSessionActivities('A1').length).toBeGreaterThan(0);
  });
});
