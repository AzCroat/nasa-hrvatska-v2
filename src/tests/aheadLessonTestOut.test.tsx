// aheadLessonTestOut.test.tsx — owner, 2026-11-19: "You should be able to test out of any
// lesson at any time." A lesson still AHEAD of the learner opens as its test-out only: the
// teaching slides are never shown (reading stays sequential), a pass completes it exactly as
// in order (and leaves every earlier lesson untouched), a fail records nothing and names the
// lesson that opens it. Drives the REAL AnimatedLesson against the REAL course stores.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { writeCurriculumSpine, readCompletedLessons } from '../lib/curriculumProgress';
import { buildCourseUnits } from '../lib/courseUnits';
import { openLessonIds } from '../lib/lessonLock';
import { readCourseState } from '../lib/courseStep';
import type { CurriculumEntry } from '../lib/curriculum';

const setStats = vi.fn();
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta: vi.fn(), stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));

import AnimatedLesson from '../components/learn/AnimatedLesson';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);
const LESSONS = UNITS[0]!.lessons;
const AHEAD = LESSONS[2]!;

const item = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});

function lesson() {
  return {
    id: AHEAD.id,
    title: 'Ahead',
    level: 'A1',
    duration: '~6 min',
    bg: '#f0fdf4',
    color: '#16a34a',
    icon: '📚',
    slides: [
      { type: 'intro', title: 'Intro', body: 'b', icon: '📚' },
      { type: 'rule', title: 'Rule', body: 'knjiga → knjige', highlight: 'knjige' },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [item(1, 0), item(2, 1), item(3, 2), item(4, 3), item(5, 0), item(6, 1)],
      },
      { type: 'summary', title: 'Summary', points: ['p1'] },
    ],
  };
}

function answerCheck(wrongItems: number[]) {
  for (let i = 0; i < 6; i++) {
    const check = screen.getByTestId('lesson-check');
    const options = within(check).getAllByTestId('lesson-check-option');
    const n = Number(within(check).getByTestId('lesson-check-question').textContent!.slice(9));
    const correctSource = [0, 1, 2, 3, 0, 1][n - 1]!;
    const pick = wrongItems.includes(n)
      ? options.find((o) => Number(o.getAttribute('data-source')) !== correctSource)!
      : options.find((o) => Number(o.getAttribute('data-source')) === correctSource)!;
    fireEvent.click(pick);
    const nextQ = within(check).queryByTestId('lesson-check-next');
    if (nextQ) fireEvent.click(nextQ);
  }
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  setStats.mockClear();
  writeCurriculumSpine(SPINE);
});

describe('testing out of a lesson that is still ahead', () => {
  it('opens in the check, never on the teaching slides', () => {
    render(<AnimatedLesson lesson={lesson()} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('lesson-check')).toBeTruthy();
    expect(screen.queryByTestId('lesson-test-out')).toBeNull();
    expect(screen.queryByText('knjiga → knjige')).toBeNull();
  });

  it('a pass completes THAT lesson only: lessons 1 and 2 stay unread, today’s lesson is still lesson 1', () => {
    render(<AnimatedLesson lesson={lesson()} goBack={vi.fn()} award={vi.fn()} />);
    answerCheck([]);
    fireEvent.click(screen.getByTestId('lesson-nav-next'));
    const done = readCompletedLessons();
    expect(done.has(AHEAD.id)).toBe(true);
    expect(done.has(LESSONS[0]!.id)).toBe(false);
    expect(done.has(LESSONS[1]!.id)).toBe(false);
    const state = readCourseState();
    const open = openLessonIds(state.units, done, state.advanced, state.currentIndex);
    expect(open.has(LESSONS[0]!.id)).toBe(true);
    expect(open.has(LESSONS[1]!.id)).toBe(false);
    expect(state.rows[0]!.done).toBe(1);
  });

  it('a fail records nothing, says the lesson is read in order, and opens the lesson that opens it', () => {
    const onOpenLesson = vi.fn(async () => true);
    render(
      <AnimatedLesson
        lesson={lesson()}
        goBack={vi.fn()}
        award={vi.fn()}
        onOpenLesson={onOpenLesson}
      />,
    );
    answerCheck([1, 2, 3]);
    fireEvent.click(screen.getByTestId('lesson-nav-next'));
    expect(readCompletedLessons().size).toBe(0);
    expect(setStats).not.toHaveBeenCalled();
    expect(screen.getByTestId('lesson-check-failed').textContent).toMatch(/read in order/);
    fireEvent.click(screen.getByTestId('lesson-ahead-open'));
    expect(onOpenLesson).toHaveBeenCalledWith(LESSONS[0]!.id);
  });
});
