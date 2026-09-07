// lessonTestOut.test.tsx — a learner who already knows a lesson can prove it
// instead of reading it (owner recommendation 4, 2026-09-07).
//
// The gap: a returning or heritage learner had to page through every slide of
// a lesson they already knew to reach its check. The check IS the standard for
// "you know this", so it is offered up front.
//
// The two rules this pins, because both are ways to get it wrong:
//   ONE BAR, NOT TWO — passing the check out of order completes the lesson
//   exactly as passing it in order does: XP, gc, the al_ key, the curriculum
//   spine AND the retention schedule. A second, stricter threshold for the
//   same six questions would be arbitrary and unexplainable.
//   A FAILED TEST-OUT IS NOT A FAILED LESSON — it is the answer to "should I
//   read this?". It records NOTHING (no cards, no ladder: those belong to
//   lessons actually learned) and its primary action is the lesson itself,
//   not another attempt at the check.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';

const setStats = vi.fn();
const writeDelta = vi.fn();
let vs: string[] = [];
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta, stats: { vs, lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
const markQuest = vi.fn();
vi.mock('../lib/quests.js', () => ({ markQuest: (...a: unknown[]) => markQuest(...a) }));
const recordLessonTaught = vi.fn();
vi.mock('../lib/teachPractice', () => ({
  recordLessonTaught: (...a: unknown[]) => recordLessonTaught(...a),
  recordScreenPractised: vi.fn(),
}));
const markLessonComplete = vi.fn();
vi.mock('../lib/curriculumProgress', () => ({
  markLessonComplete: (...a: unknown[]) => markLessonComplete(...a),
  readCurriculumSpine: () => [],
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));

import AnimatedLesson from '../components/learn/AnimatedLesson';
import { readRetention } from '../lib/lessonRetention';

const item = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});
const CHECK_ITEMS = [item(1, 0), item(2, 1), item(3, 2), item(4, 3), item(5, 0), item(6, 1)];
const LESSON = {
  id: 'plural-nouns',
  title: 'Plural of Nouns',
  level: 'A1',
  duration: '~6 min',
  bg: '#f0fdf4',
  color: '#16a34a',
  icon: '📚',
  slides: [
    { type: 'intro', title: 'From One to Many', body: 'b', icon: '📚' },
    { type: 'rule', title: 'Rule', body: 'knjiga → knjige', highlight: 'knjige' },
    { type: 'quiz', q: 'Formative?', options: ['yes', 'no'], correct: 0, explanation: 'e' },
    { type: 'check', title: 'Mastery Check', items: CHECK_ITEMS },
    { type: 'summary', title: 'Summary', points: ['p1'] },
  ],
};

function answerCheck(wrong: number[] = []) {
  for (let i = 0; i < CHECK_ITEMS.length; i++) {
    const check = screen.getByTestId('lesson-check');
    const options = within(check).getAllByTestId('lesson-check-option');
    const n = Number(within(check).getByTestId('lesson-check-question').textContent!.slice(9));
    const correctSource = CHECK_ITEMS[n - 1]!.correct;
    const pick = wrong.includes(n)
      ? options.find((o) => Number(o.getAttribute('data-source')) !== correctSource)!
      : options.find((o) => Number(o.getAttribute('data-source')) === correctSource)!;
    fireEvent.click(pick);
    const nextQ = within(check).queryByTestId('lesson-check-next');
    if (nextQ) fireEvent.click(nextQ);
  }
}
const next = () => fireEvent.click(screen.getByTestId('lesson-nav-next'));

beforeEach(() => {
  localStorage.clear();
  vs = [];
  setStats.mockClear();
  writeDelta.mockClear();
  markQuest.mockClear();
  recordLessonTaught.mockClear();
  markLessonComplete.mockClear();
});

describe('the offer', () => {
  it('is on the intro slide of a lesson with a check', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('lesson-test-out')).toBeTruthy();
  });

  it('is NOT offered once the learner is past the intro', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    expect(screen.queryByTestId('lesson-test-out')).toBeNull();
  });

  it('is NOT offered for a lesson already completed — there is nothing to skip', () => {
    vs = ['al_plural-nouns'];
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.queryByTestId('lesson-test-out')).toBeNull();
  });

  it('is NOT offered when the lesson has no mastery check (an older payload)', () => {
    const legacy = { ...LESSON, slides: LESSON.slides.filter((s) => s.type !== 'check') };
    render(<AnimatedLesson lesson={legacy} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.queryByTestId('lesson-test-out')).toBeNull();
  });

  it('jumps straight to the check, skipping the teaching slides', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    expect(screen.getByTestId('lesson-check')).toBeTruthy();
  });
});

describe('passing the test-out completes the lesson exactly as reading it would', () => {
  it('records XP, gc, the path key, the curriculum and the retention schedule', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={award} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck();
    next();

    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(award).toHaveBeenCalledWith(25, false, 'lesson');
    expect(markQuest).toHaveBeenCalledWith('grammar');
    expect(writeDelta).toHaveBeenCalledWith({ vs: ['al_plural-nouns'] });
    expect(writeDelta).toHaveBeenCalledWith({ gc: 1 });
    expect(markLessonComplete).toHaveBeenCalledWith('plural-nouns', expect.any(String));
    expect(recordLessonTaught).toHaveBeenCalledWith('plural-nouns');
    // ONE BAR: the retention ladder starts here too, so a lesson tested out of
    // still comes back for its re-checks.
    expect(readRetention().lessons['plural-nouns']).toBeTruthy();
  });

  it('passes at the SAME threshold as an in-order pass — 5 of 6, not a stricter bar', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={award} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([3]); // 5/6
    next();
    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(award).toHaveBeenCalledTimes(1);
  });
});

describe('failing the test-out is not a failed lesson', () => {
  it('records NOTHING — no XP, no completion, no cards, no ladder', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={award} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]); // 3/6
    next();

    expect(screen.getByTestId('lesson-check-failed')).toBeTruthy();
    expect(award).not.toHaveBeenCalled();
    expect(markLessonComplete).not.toHaveBeenCalled();
    expect(recordLessonTaught).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    // Cards and ladders belong to lessons actually learned.
    expect(readRetention().lessons).toEqual({});
    expect(readRetention().items).toEqual({});
  });

  it('offers the LESSON, not another attempt at the check', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]);
    next();
    expect(screen.getByTestId('lesson-check-retake').textContent).toContain('Take the lesson');
    expect(screen.getByTestId('lesson-nav-next').textContent).not.toContain('Retake');
  });

  // The summary's inline button and the bottom nav are two controls with two
  // handlers; changing one and not the other is exactly how this shipped wrong
  // the first time, so both are driven.
  it('the bottom nav takes the lesson too, not just the inline button', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]);
    next();
    next(); // the nav button, now labelled "Take the lesson"
    expect(screen.getByText('From One to Many')).toBeTruthy();
    expect(screen.getByText('1 / 5')).toBeTruthy();
  });

  it('taking the lesson starts it from the top with the answers cleared', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]);
    next();
    fireEvent.click(screen.getByTestId('lesson-check-retake'));

    expect(screen.getByText('From One to Many')).toBeTruthy();
    expect(screen.getByText('1 / 5')).toBeTruthy();
    // The offer is gone: they answered the question it asked.
    expect(screen.queryByTestId('lesson-test-out')).toBeNull();
  });

  it('and then passing the check at the end completes the lesson once', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={award} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]);
    next();
    fireEvent.click(screen.getByTestId('lesson-check-retake'));

    next(); // rule
    next(); // quiz
    fireEvent.click(screen.getAllByRole('button', { name: /^Option/ })[0]!);
    fireEvent.click(screen.getByText('Check Answer'));
    next(); // check
    answerCheck();
    next(); // summary

    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(award).toHaveBeenCalledTimes(1);
    expect(markLessonComplete).toHaveBeenCalledTimes(1);
  });
});
