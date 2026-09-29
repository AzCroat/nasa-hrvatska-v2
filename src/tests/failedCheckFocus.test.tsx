// src/tests/failedCheckFocus.test.tsx
//
// A FAILED CHECK IS A FOCUS AREA, NOT A RETAKE (owner directive, 2026-09-29):
// "When a user fails a lesson let's not let them go back and click through the
// right answers to get a passing score. Let's note they did not pass and add as an
// area of focus in review."
//
// The screen half (no same-day retake, the closed check on a fresh opening, the
// next day's reopening on a new paper) is driven in animatedLessonGate.test.tsx.
// This file pins the three stores that make the fail a focus area:
//   1. lib/checkLock      — what "closed today" means, and what it never means;
//   2. lessonRetention    — a fail files its missed items as Lesson Review cards and
//                           starts no ladder, and those cards are served;
//   3. conceptMap         — the lesson reads "Not passed yet" and leads "Worth revisiting".

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

const completed = new Set<string>();
vi.mock('../lib/curriculumProgress', async (orig) => {
  const actual = (await orig()) as Record<string, unknown>;
  return { ...actual, readCompletedLessons: () => completed };
});

import { checkLockedToday, priorAttemptCount } from '../lib/checkLock';
import { recordCheckAttempt } from '../lib/lessonAttempts';
import {
  recordCheckFailure,
  recordMasteryPass,
  readRetention,
  buildRetentionQueue,
} from '../lib/lessonRetention';
import { buildConceptMap, conceptSummaryLine } from '../lib/conceptMap';
import ConceptMapCard from '../components/profile/ConceptMapCard';

const TODAY = '2026-09-29';
const YESTERDAY = '2026-09-28';
const fail = (id: string, at: string, kind: 'lesson' | 'testout' = 'lesson') =>
  recordCheckAttempt(id, { score: 2, total: 6, passed: false, kind, missed: [0, 1, 2, 3], at });
const pass = (id: string, at: string) =>
  recordCheckAttempt(id, { score: 6, total: 6, passed: true, kind: 'lesson', missed: [], at });

const item = (n: number) => ({
  q: `Question ${n}`,
  options: ['a', 'b', 'c', 'd'],
  correct: 0,
  explanation: `Rule ${n}`,
});
const lesson = (id: string) => ({
  id,
  title: `Lesson ${id}`,
  slides: [{ type: 'check', items: [1, 2, 3, 4, 5, 6].map(item) }],
});

beforeEach(() => {
  localStorage.clear();
  completed.clear();
});

describe('1. the check is closed for the rest of the day a LESSON check fails', () => {
  it('a fail today closes it', () => {
    fail('cases', TODAY);
    expect(checkLockedToday('cases', TODAY)).toBe(true);
  });

  it('a fail YESTERDAY does not — the corrective day reopens the check', () => {
    fail('cases', YESTERDAY);
    expect(checkLockedToday('cases', TODAY)).toBe(false);
  });

  it('a failed TEST-OUT closes nothing — it is taken before the lesson is taught', () => {
    fail('cases', TODAY, 'testout');
    expect(checkLockedToday('cases', TODAY)).toBe(false);
  });

  it('the LATEST real attempt decides: a pass after a fail reopens it', () => {
    fail('cases', TODAY);
    pass('cases', TODAY);
    expect(checkLockedToday('cases', TODAY)).toBe(false);
  });

  it('a completed lesson replayed for practice is never locked', () => {
    fail('cases', TODAY);
    completed.add('cases');
    expect(checkLockedToday('cases', TODAY)).toBe(false);
  });

  it('a new opening starts on a new attempt number, so the retake is a new shuffle', () => {
    expect(priorAttemptCount('cases')).toBe(0);
    fail('cases', YESTERDAY);
    expect(priorAttemptCount('cases')).toBe(1);
  });
});

describe('2. the missed items become Lesson Review cards, and no ladder starts', () => {
  it('files only the misses, and writes no lesson record', () => {
    recordCheckFailure('cases', {
      results: [0, 1, 2, 3, 4, 5].map((idx) => ({ idx, correct: idx > 1 })),
    });
    const store = readRetention();
    expect(store.lessons).toEqual({});
    expect(Object.keys(store.items).sort()).toEqual(['cases#0', 'cases#1']);
  });

  it('those cards are what the Lesson Review serves', () => {
    const now = Date.now();
    recordCheckFailure('cases', {
      results: [0, 1, 2, 3, 4, 5].map((idx) => ({ idx, correct: idx > 1 })),
      now,
    });
    // A first miss is due 24 hours after the scheduler's own clock (measured), so ask
    // two days on — asking at exactly one day raced the scheduler by milliseconds.
    const queue = buildRetentionQueue(
      [lesson('cases')],
      readRetention(),
      TODAY,
      now + 2 * 86_400_000,
    );
    expect(queue.map((q) => `${q.lessonId}#${q.idx}:${q.part}`).sort()).toEqual([
      'cases#0:card',
      'cases#1:card',
    ]);
  });

  it('a clean run files nothing', () => {
    recordCheckFailure('cases', { results: [0, 1, 2].map((idx) => ({ idx, correct: true })) });
    expect(readRetention().items).toEqual({});
  });
});

describe('3. the concept map lists the lesson as a focus area', () => {
  const spine = [
    { id: 'cases', level: 'A1', title: 'Cases' },
    { id: 'plural', level: 'A1', title: 'Plural' },
  ];

  it('a failed, never-passed lesson is NOT PASSED YET — measured, unlike untaught', () => {
    fail('cases', TODAY);
    const map = buildConceptMap(spine, readRetention(), TODAY);
    expect(map.entries.find((e) => e.lessonId === 'cases')!.state).toBe('notpassed');
    expect(map.entries.find((e) => e.lessonId === 'plural')!.state).toBe('untaught');
    expect(map.needsWork.map((e) => e.lessonId)).toEqual(['cases']);
    expect(conceptSummaryLine(map)).toMatch(/1 lesson not passed yet/);
  });

  it('a failed TEST-OUT is not a focus area — the lesson simply is not taught yet', () => {
    fail('cases', TODAY, 'testout');
    const map = buildConceptMap(spine, readRetention(), TODAY);
    expect(map.entries.find((e) => e.lessonId === 'cases')!.state).toBe('untaught');
    expect(map.needsWork).toEqual([]);
  });

  it('once passed, the lesson leaves the state and the retention ladder speaks for it', () => {
    fail('cases', YESTERDAY);
    pass('cases', TODAY);
    recordMasteryPass('cases', { score: 6, total: 6, results: [], at: TODAY });
    const map = buildConceptMap(spine, readRetention(), TODAY);
    expect(map.entries.find((e) => e.lessonId === 'cases')!.state).toBe('passed');
  });

  it('ranks above everything else in "Worth revisiting"', () => {
    recordMasteryPass('plural', { score: 3, total: 6, results: [], at: TODAY }); // shaky
    fail('cases', TODAY);
    const map = buildConceptMap(spine, readRetention(), TODAY);
    expect(map.needsWork.map((e) => e.state)).toEqual(['notpassed', 'shaky']);
  });

  it('the Me-tab card shows it before any lesson has been passed', () => {
    fail('cases', TODAY);
    recordCheckFailure('cases', { results: [{ idx: 0, correct: false }] });
    render(<ConceptMapCard setScr={vi.fn()} spine={spine as never} />);
    expect(screen.getByTestId('concept-map-summary').textContent).toMatch(/not passed yet/);
    const row = screen.getByTestId('concept-row');
    expect(row.getAttribute('data-state')).toBe('notpassed');
    expect(row.textContent).toMatch(/Not passed yet/);
  });
});
