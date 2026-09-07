// animatedLessonGate.test.tsx — the animated lesson records completion ONLY on
// a passed mastery check (owner directive, 2026-09-07: "taught in-depth and
// then tested"). Drives the REAL AnimatedLesson: the pure gate has its own
// test; this one proves the screen obeys it — XP, gc, the al_ path key, the
// curriculum completion and the taught-queue all fire on a pass and none of
// them on a fail, and the fail state offers a retake that can still credit.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';

const setStats = vi.fn();
const writeDelta = vi.fn();
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta, stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
const markQuest = vi.fn();
vi.mock('../lib/quests.js', () => ({ markQuest: (...a: unknown[]) => markQuest(...a) }));
const recordLessonTaught = vi.fn();
vi.mock('../lib/teachPractice', () => ({
  recordLessonTaught: (...a: unknown[]) => recordLessonTaught(...a),
}));
const markLessonComplete = vi.fn();
vi.mock('../lib/curriculumProgress', () => ({
  markLessonComplete: (...a: unknown[]) => markLessonComplete(...a),
}));
const signalSessionCompleteIfActive = vi.fn();
vi.mock('../lib/sessionSignal', () => ({
  signalSessionCompleteIfActive: (...a: unknown[]) => signalSessionCompleteIfActive(...a),
}));

import AnimatedLesson from '../components/learn/AnimatedLesson';

const item = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});

function lessonWithCheck() {
  return {
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
      { type: 'quiz', q: 'Formative?', options: ['yes', 'no'], correct: 0, explanation: 'e' },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [item(1, 0), item(2, 1), item(3, 2), item(4, 3), item(5, 0), item(6, 1)],
      },
      { type: 'summary', title: 'Summary', points: ['p1'] },
    ],
  };
}

function lessonWithoutCheck() {
  const l = lessonWithCheck();
  l.slides = l.slides.filter((s) => s.type !== 'check');
  l.slides.splice(3, 0, {
    type: 'quiz',
    q: 'Second?',
    options: ['yes', 'no'],
    correct: 1,
    explanation: 'e',
  });
  return l;
}

function next() {
  fireEvent.click(screen.getByTestId('lesson-nav-next'));
}

/** Answer the formative quiz slide currently on screen. */
function answerFormative(correct: boolean, correctText: string) {
  const buttons = screen.getAllByRole('button', { name: /^Option/ });
  const target = correct
    ? buttons.find((b) => b.textContent?.includes(correctText))!
    : buttons.find((b) => !b.textContent?.includes(correctText))!;
  fireEvent.click(target);
  fireEvent.click(screen.getByText('Check Answer'));
}

/** Answer the whole check on screen: `wrongItems` = which item numbers to miss. */
function answerCheck(wrongItems: number[]) {
  for (let i = 0; i < 6; i++) {
    const check = screen.getByTestId('lesson-check');
    const options = within(check).getAllByTestId('lesson-check-option');
    const q = within(check).getByTestId('lesson-check-question').textContent;
    const n = Number(q!.replace('Question ', ''));
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
  setStats.mockClear();
  writeDelta.mockClear();
  markQuest.mockClear();
  recordLessonTaught.mockClear();
  markLessonComplete.mockClear();
  signalSessionCompleteIfActive.mockClear();
});

describe('AnimatedLesson mastery gate', () => {
  it('locks Next on the check slide until every item is answered', () => {
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={vi.fn()} />);
    next(); // rule
    next(); // quiz
    answerFormative(true, 'yes');
    next(); // check
    expect(screen.getByTestId('lesson-check')).toBeTruthy();
    expect(screen.getByTestId('lesson-check-locked')).toBeTruthy();
    expect((screen.getByTestId('lesson-nav-next') as HTMLButtonElement).disabled).toBe(true);
    answerCheck([]);
    expect(screen.queryByTestId('lesson-check-locked')).toBeNull();
    expect((screen.getByTestId('lesson-nav-next') as HTMLButtonElement).disabled).toBe(false);
  });

  it('PASS (6/6): credits once — 25 XP, gc, al_ key, curriculum completion, taught queue', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={award} />);
    next();
    next();
    answerFormative(false, 'yes'); // the formative slide does not decide the gate
    next();
    answerCheck([]);
    next(); // summary
    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(screen.getByText('6/6')).toBeTruthy();
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(25, false, 'lesson');
    expect(markLessonComplete).toHaveBeenCalledWith('plural-nouns', expect.any(String));
    expect(recordLessonTaught).toHaveBeenCalledWith('plural-nouns');
    expect(markQuest).toHaveBeenCalledWith('grammar');
    expect(writeDelta).toHaveBeenCalledWith({ vs: ['al_plural-nouns'] });
    expect(writeDelta).toHaveBeenCalledWith({ gc: 1 });
    expect(signalSessionCompleteIfActive).not.toHaveBeenCalled();
  });

  it('PASS at the threshold (5/6) credits; one slip is allowed', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={award} />);
    next();
    next();
    answerFormative(true, 'yes');
    next();
    answerCheck([3]);
    next();
    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(award).toHaveBeenCalledTimes(1);
  });

  it('FAIL (4/6): records NOTHING, shows the honest result, signals the session flow once', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={award} />);
    next();
    next();
    answerFormative(true, 'yes');
    next();
    answerCheck([2, 5]);
    next();
    expect(screen.getByTestId('lesson-check-failed')).toBeTruthy();
    expect(screen.getByTestId('lesson-check-score').textContent).toBe('4/6');
    expect(screen.queryByText('Lesson Complete!')).toBeNull();
    expect(award).not.toHaveBeenCalled();
    expect(markLessonComplete).not.toHaveBeenCalled();
    expect(recordLessonTaught).not.toHaveBeenCalled();
    expect(markQuest).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(signalSessionCompleteIfActive).toHaveBeenCalledTimes(1);
    expect(signalSessionCompleteIfActive).toHaveBeenCalledWith('animlesson');
    // The nav's last button is now the retake, not Finish.
    expect(screen.getByTestId('lesson-nav-next').textContent).toContain('Retake');
  });

  it('after a fail, retaking and passing credits exactly once', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={award} />);
    next();
    next();
    answerFormative(true, 'yes');
    next();
    answerCheck([1, 2, 3]);
    next();
    expect(screen.getByTestId('lesson-check-failed')).toBeTruthy();
    fireEvent.click(screen.getByTestId('lesson-check-retake'));
    // Back on the check, fresh attempt, nothing answered.
    const check = screen.getByTestId('lesson-check');
    expect(check.getAttribute('data-attempt')).toBe('1');
    expect(within(check).getByTestId('lesson-check-progress').textContent).toBe('1 / 6');
    answerCheck([]);
    next();
    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(award).toHaveBeenCalledTimes(1);
    expect(markLessonComplete).toHaveBeenCalledTimes(1);
    expect(signalSessionCompleteIfActive).toHaveBeenCalledTimes(1); // the fail, not the pass
  });

  it('"Review the lesson first" returns to the content with the attempt reset', () => {
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={vi.fn()} />);
    next();
    next();
    answerFormative(true, 'yes');
    next();
    answerCheck([1, 2, 3]);
    next();
    fireEvent.click(screen.getByTestId('lesson-check-review'));
    expect(screen.getByText('Rule')).toBeTruthy();
    expect(screen.getByText('2 / 5')).toBeTruthy();
  });

  it('options are presented in a different order on the retake', () => {
    render(<AnimatedLesson lesson={lessonWithCheck()} goBack={vi.fn()} award={vi.fn()} />);
    next();
    next();
    answerFormative(true, 'yes');
    next();
    const firstOrder = screen
      .getAllByTestId('lesson-check-option')
      .map((o) => o.getAttribute('data-source'))
      .join('');
    answerCheck([1, 2, 3, 4]);
    next();
    fireEvent.click(screen.getByTestId('lesson-check-retake'));
    const secondOrder = screen
      .getAllByTestId('lesson-check-option')
      .map((o) => o.getAttribute('data-source'))
      .join('');
    expect(secondOrder).not.toBe(firstOrder);
  });

  it('OLDER PAYLOAD (no check slide): gated on the formative quizzes — 2/2 credits, 1/2 does not', () => {
    const award = vi.fn();
    const { unmount } = render(
      <AnimatedLesson lesson={lessonWithoutCheck()} goBack={vi.fn()} award={award} />,
    );
    next();
    next();
    answerFormative(true, 'yes');
    next();
    answerFormative(false, 'no');
    next();
    expect(screen.getByTestId('lesson-check-failed')).toBeTruthy();
    expect(screen.getByTestId('lesson-check-score').textContent).toBe('1/2');
    expect(award).not.toHaveBeenCalled();
    expect(markLessonComplete).not.toHaveBeenCalled();
    // Retake sends the learner back to the first quiz slide with answers cleared.
    fireEvent.click(screen.getByTestId('lesson-check-retake'));
    expect(screen.getByText('Formative?')).toBeTruthy();
    expect(screen.getByText('Check Answer')).toBeTruthy();
    answerFormative(true, 'yes');
    next();
    answerFormative(true, 'no');
    next();
    expect(screen.getByTestId('lesson-complete')).toBeTruthy();
    expect(award).toHaveBeenCalledTimes(1);
    unmount();
  });
});
