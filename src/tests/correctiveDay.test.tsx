// src/tests/correctiveDay.test.tsx — the corrective day (Daily Session redesign,
// increment 4; owner decision 5, 2026-09-28). Bloom: corrective instruction, then
// the test again — not a plain retry. Driven through the real course stores, the
// real session builder and the real AnimatedLesson.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../lib/srs', async (orig) => ({ ...(await orig<object>()), getDueReviews: () => [] }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats: vi.fn(), writeDelta: vi.fn(), stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));

import { buildSessionActivities } from '../hooks/useDailySession';
import { curriculumPracticeActivity, rearmCourseHandoff } from '../lib/curriculumSlot';
import { recordCheckAttempt } from '../lib/lessonAttempts';
import { markLessonComplete } from '../lib/curriculumProgress';
import { readCourseState } from '../lib/courseStep';
import {
  isCorrectiveLesson,
  latestLessonAttempt,
  firstWorkedSlide,
  CORRECTIVE_LESSON_KEY,
  requestCorrectiveLesson,
} from '../lib/correctiveDay';
import { seedCourseAt } from './helpers/courseSeed';
import AnimatedLesson from '../components/learn/AnimatedLesson';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.clearAllMocks();
});

const fail = (lessonId: string, at = '2026-09-27') =>
  recordCheckAttempt(lessonId, {
    score: 3,
    total: 6,
    passed: false,
    kind: 'lesson',
    missed: [1],
    at,
  });
const pass = (lessonId: string, at = '2026-09-28') =>
  recordCheckAttempt(lessonId, {
    score: 6,
    total: 6,
    passed: true,
    kind: 'lesson',
    missed: [],
    at,
  });

describe('what makes a lesson corrective', () => {
  it('a failed real check on an incomplete lesson; not a test-out, not after a pass', () => {
    seedCourseAt(1);
    const lessonId = readCourseState().units[0]!.lessons[0]!.id;
    expect(isCorrectiveLesson(lessonId)).toBe(false);
    recordCheckAttempt(lessonId, {
      score: 2,
      total: 6,
      passed: false,
      kind: 'testout',
      missed: [],
    });
    // A failed test-out is the answer to "should I read this?", not a failed lesson.
    expect(isCorrectiveLesson(lessonId)).toBe(false);
    fail(lessonId);
    expect(isCorrectiveLesson(lessonId)).toBe(true);
    expect(latestLessonAttempt(lessonId)?.passed).toBe(false);
    pass(lessonId);
    markLessonComplete(lessonId, '2026-09-28');
    expect(isCorrectiveLesson(lessonId)).toBe(false);
  });

  it('firstWorkedSlide names the first worked example, or null for an older body', () => {
    expect(
      firstWorkedSlide([
        { type: 'intro' },
        { type: 'rule' },
        { type: 'worked' },
        { type: 'check' },
      ]),
    ).toBe(2);
    expect(firstWorkedSlide([{ type: 'intro' }, { type: 'check' }])).toBeNull();
  });
});

describe('the session on a corrective day', () => {
  it('names the sitting, states why, writes the handoff, and keeps the day a lesson day', () => {
    seedCourseAt(1);
    const lessonId = readCourseState().units[0]!.lessons[0]!.id;
    const before = buildSessionActivities('A1');
    expect(before[0]!.label.startsWith('Again: ')).toBe(false);
    sessionStorage.clear();
    fail(lessonId);
    const acts = buildSessionActivities('A1');
    expect(acts[0]!.screen).toBe('animlesson');
    expect(acts[0]!.id).toBe(`curriculum_${lessonId}`);
    expect(acts[0]!.label.startsWith('Again: ')).toBe(true);
    expect(acts[0]!.reason).toMatch(/didn’t land/);
    expect(sessionStorage.getItem(CORRECTIVE_LESSON_KEY)).toBe(lessonId);
    // Still a lesson day: the produce step is there and the length is unchanged.
    expect(acts.some((a) => a.screen === 'lessonproduce')).toBe(true);
    expect(acts.length).toBe(before.length);
    // The coupled drill, where the lesson has one, says it is the easier one first.
    const drill = acts.find((a) => a.id.startsWith('curriculum_practice_'));
    if (drill) expect(drill.reason).toMatch(/easier drill/i);
  });

  it('the coupled drill prefers the EASIER route on a corrective day, the mapped one otherwise', () => {
    const base = {
      lessonId: 'present-tense-verbs', // taught category: present-tense
      userCefr: 'A1',
      used: new Set<string>(),
      screenMap: { 'present-tense': 'hard' } as never,
      easierMap: { 'present-tense': 'easy' } as never,
      screenCefr: { hard: 'A1', easy: 'A1' },
      isUnlocked: () => true,
    };
    expect(curriculumPracticeActivity(base)?.screen).toBe('hard');
    expect(curriculumPracticeActivity({ ...base, preferEasier: true })?.screen).toBe('easy');
    // With the easier route absent, the mapped one still serves.
    expect(
      curriculumPracticeActivity({ ...base, preferEasier: true, easierMap: {} as never })?.screen,
    ).toBe('hard');
  });

  it('rearmCourseHandoff re-arms the corrective handoff for the day’s lesson id, and only then', () => {
    seedCourseAt(1);
    const lessonId = readCourseState().units[0]!.lessons[0]!.id;
    rearmCourseHandoff(`curriculum_${lessonId}`);
    expect(sessionStorage.getItem(CORRECTIVE_LESSON_KEY)).toBeNull();
    fail(lessonId);
    rearmCourseHandoff(`curriculum_${lessonId}`);
    expect(sessionStorage.getItem(CORRECTIVE_LESSON_KEY)).toBe(lessonId);
    sessionStorage.clear();
    rearmCourseHandoff(`curriculum_practice_present-tense`);
    rearmCourseHandoff(`curriculum_produce_write_${lessonId}`);
    expect(sessionStorage.getItem(CORRECTIVE_LESSON_KEY)).toBeNull();
  });
});

describe('the lesson opens at its worked examples on a corrective day', () => {
  const lesson = () => ({
    id: 'plural-nouns',
    title: 'Plural of Nouns',
    level: 'A1',
    duration: '~6 min',
    bg: '#f0fdf4',
    color: '#16a34a',
    icon: '📚',
    slides: [
      { type: 'intro', title: 'Intro', body: 'b', icon: '📚' },
      { type: 'rule', title: 'Rule', body: 'knjiga → knjige', highlight: 'knjige' },
      {
        type: 'worked',
        title: 'Worked',
        problem: 'knjiga → ?',
        steps: [{ text: 'feminine -a' }, { text: '-a becomes -e' }, { text: 'knjige' }],
      },
      { type: 'quiz', q: 'Formative?', options: ['yes', 'no'], correct: 0, explanation: 'e' },
      { type: 'summary', title: 'Summary', points: ['p1'] },
    ],
  });

  it('with the handoff naming THIS lesson: starts on the worked example, and clears the handoff', () => {
    requestCorrectiveLesson('plural-nouns');
    render(<AnimatedLesson lesson={lesson() as never} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('lesson-worked')).toBeTruthy();
    expect(sessionStorage.getItem(CORRECTIVE_LESSON_KEY)).toBeNull();
  });

  it('with the handoff naming ANOTHER lesson, or none: starts at the intro, handoff untouched', () => {
    requestCorrectiveLesson('some-other-lesson');
    render(<AnimatedLesson lesson={lesson() as never} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.queryByTestId('lesson-worked')).toBeNull();
    expect(screen.getByText('Intro')).toBeTruthy();
    expect(sessionStorage.getItem(CORRECTIVE_LESSON_KEY)).toBe('some-other-lesson');
  });

  it('an older body with no worked slide opens at the intro (never a blank slide)', () => {
    requestCorrectiveLesson('plural-nouns');
    const l = lesson();
    l.slides = l.slides.filter((s) => s.type !== 'worked');
    render(<AnimatedLesson lesson={l as never} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByText('Intro')).toBeTruthy();
  });
});
