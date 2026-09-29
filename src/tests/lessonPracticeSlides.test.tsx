// lessonPracticeSlides.test.tsx — worked examples and guided practice between the
// explanation and the check (owner request, 2026-09-27). Drives the REAL
// AnimatedLesson and the REAL merge, because the defect this could ship is a slide
// that renders and never lets the learner past it, or practice that quietly moves
// the score the check is supposed to own.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import { withPractice, LESSON_PRACTICE } from '../../functions/api/content/_data/lessonPractice.js';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import {
  DEEPENED_LEVELS,
  practiceProblems,
  lessonDepthProblems,
} from '../../scripts/lessonDepthRules.mjs';

const setStats = vi.fn();
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta: vi.fn(), stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/teachPractice', () => ({ recordLessonTaught: vi.fn() }));
vi.mock('../lib/curriculumProgress', () => ({
  markLessonComplete: vi.fn(),
  readCurriculumSpine: () => null,
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));

import AnimatedLesson from '../components/learn/AnimatedLesson';

const checkItem = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});

function lesson() {
  return withPractice([
    {
      id: 'plural-nouns',
      title: 'Plural of Nouns',
      level: 'A1',
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
          items: [0, 1, 2, 3, 0, 1].map((c, i) => checkItem(i + 1, c)),
        },
        { type: 'summary', title: 'Summary', points: ['p1'] },
      ],
    },
  ])[0]!;
}

const next = () => fireEvent.click(screen.getByTestId('lesson-nav-next'));
const nextDisabled = () => (screen.getByTestId('lesson-nav-next') as HTMLButtonElement).disabled;

beforeEach(() => setStats.mockClear());

describe('the merge places the new slides where the teaching needs them', () => {
  it('worked examples before the first formative quiz, practice right before the check', () => {
    const types = lesson().slides.map((s: { type: string }) => s.type);
    expect(types).toEqual([
      'intro',
      'rule',
      'worked',
      'worked',
      'quiz',
      'practice',
      'check',
      'summary',
    ]);
  });

  it('leaves a lesson with no authored practice untouched', () => {
    const plain = { id: 'no-such-lesson', slides: [{ type: 'intro' }] };
    expect(withPractice([plain])[0]).toBe(plain);
  });

  it('every entry names a real lesson (a renamed lesson would silently lose its practice)', () => {
    const ids = new Set(LESSONS.map((l: { id: string }) => l.id));
    for (const id of Object.keys(LESSON_PRACTICE)) expect(ids.has(id), id).toBe(true);
  });

  it('every level is deepened, and every one of the 180 lessons has its entry', () => {
    expect([...DEEPENED_LEVELS].sort()).toEqual(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
    const missing = LESSONS.filter((l: { id: string }) => !LESSON_PRACTICE[l.id]).map(
      (l: { id: string }) => l.id,
    );
    expect(missing, 'lessons with no worked examples or guided practice').toEqual([]);
    expect(LESSONS.length).toBeGreaterThanOrEqual(180);
  });

  it('every lesson in a deepened level is held to the rules', () => {
    for (const l of LESSONS.filter((x: { level: string }) => DEEPENED_LEVELS.includes(x.level)))
      expect(lessonDepthProblems(l), l.id).toEqual([]);
  });

  it('the rules reject a lesson with no practice and a hint that gives the answer away', () => {
    const bare = { level: 'A1', slides: [{ type: 'check' }, { type: 'summary' }] };
    expect(practiceProblems(bare).join(' ')).toMatch(/worked examples/);
    expect(practiceProblems(bare).join(' ')).toMatch(/guided-practice/);
    const leaky = lesson();
    const p = leaky.slides.find((s: { type: string }) => s.type === 'practice');
    p.items[0].hint = `It is ${p.items[0].options[p.items[0].correct]}, obviously.`;
    expect(practiceProblems(leaky).join(' ')).toMatch(/gives the answer away/);
  });
});

describe('a worked example is shown step by step, and must be seen through', () => {
  it('holds Next until every step and the answer have been revealed', () => {
    render(<AnimatedLesson lesson={lesson()} goBack={vi.fn()} award={vi.fn()} />);
    next(); // rule
    next(); // first worked example
    expect(screen.getByTestId('lesson-worked')).toBeTruthy();
    expect(screen.getAllByTestId('worked-step')).toHaveLength(1);
    expect(screen.queryByTestId('worked-answer')).toBeNull();
    expect(nextDisabled()).toBe(true);
    fireEvent.click(screen.getByTestId('worked-next-step'));
    fireEvent.click(screen.getByTestId('worked-next-step'));
    expect(screen.getAllByTestId('worked-step')).toHaveLength(3);
    expect(screen.getByTestId('worked-answer').textContent).toContain('knjige');
    expect(nextDisabled()).toBe(false);
  });

  it('stays complete when the learner comes back to it', () => {
    render(<AnimatedLesson lesson={lesson()} goBack={vi.fn()} award={vi.fn()} />);
    next();
    next();
    fireEvent.click(screen.getByTestId('worked-next-step'));
    fireEvent.click(screen.getByTestId('worked-next-step'));
    next(); // second worked
    fireEvent.click(screen.getByText('← Prev'));
    expect(screen.getByTestId('worked-answer')).toBeTruthy();
    expect(nextDisabled()).toBe(false);
  });
});

describe('guided practice gives a hint and a second try before the answer', () => {
  function toPractice() {
    render(<AnimatedLesson lesson={lesson()} goBack={vi.fn()} award={vi.fn()} />);
    next(); // rule
    for (let w = 0; w < 2; w++) {
      next(); // worked
      while (screen.queryByTestId('worked-next-step'))
        fireEvent.click(screen.getByTestId('worked-next-step'));
    }
    next(); // quiz
    fireEvent.click(screen.getAllByRole('button', { name: /^Option/ })[0]!);
    fireEvent.click(screen.getByText('Check Answer'));
    next(); // practice
    expect(screen.getByTestId('lesson-practice')).toBeTruthy();
  }
  const opts = () => screen.getAllByTestId('practice-option');
  const correctIdx = (): number => {
    const p = lesson().slides.find((s: { type: string }) => s.type === 'practice');
    const q = within(screen.getByTestId('lesson-practice')).getByText(/./, {
      selector: 'p',
    }).textContent;
    return p.items.find((it: { q: string }) => it.q === q).correct;
  };
  // A practice item may be TYPED (academic programme, 2026-09-29): answer it in the box.
  const curAnswer = (): string => {
    const p = lesson().slides.find((s: { type: string }) => s.type === 'practice');
    const q = within(screen.getByTestId('lesson-practice')).getByText(/./, {
      selector: 'p',
    }).textContent;
    return p.items.find((it: { q: string }) => it.q === q)?.answer ?? '';
  };
  const typed = (text: string): boolean => {
    const inp = screen.queryByTestId('practice-typed-input');
    if (!inp) return false;
    fireEvent.change(inp, { target: { value: text } });
    fireEvent.click(screen.getByTestId('practice-typed-submit'));
    return true;
  };

  it('a first wrong answer shows a hint and strikes the option; the second resolves it', () => {
    toPractice();
    const c = correctIdx();
    const wrong = [0, 1, 2, 3].filter((i) => i !== c);
    fireEvent.click(opts()[wrong[0]!]!);
    expect(screen.getByTestId('practice-hint')).toBeTruthy();
    expect(opts()[wrong[0]!]!.getAttribute('data-verdict')).toBe('wrong');
    expect(screen.queryByTestId('practice-explanation')).toBeNull();
    fireEvent.click(opts()[wrong[1]!]!);
    expect(screen.queryByTestId('practice-hint')).toBeNull();
    expect(opts()[c]!.getAttribute('data-verdict')).toBe('correct');
    expect(screen.getByTestId('practice-explanation').textContent).toMatch(/answer is shown/);
  });

  it('a right answer after the hint says so', () => {
    toPractice();
    const c = correctIdx();
    fireEvent.click(opts()[[0, 1, 2, 3].find((i) => i !== c)!]!);
    fireEvent.click(opts()[c]!);
    expect(screen.getByTestId('practice-explanation').textContent).toMatch(/second try/);
  });

  it('holds Next until every practice item is resolved', () => {
    toPractice();
    const n = lesson().slides.find((s: { type: string }) => s.type === 'practice').items.length;
    for (let i = 0; i < n; i++) {
      expect(nextDisabled()).toBe(true);
      if (!typed(curAnswer())) fireEvent.click(opts()[correctIdx()]!);
      const more = screen.queryByTestId('practice-next-item');
      if (more) fireEvent.click(more);
    }
    expect(nextDisabled()).toBe(false);
  });

  it('practice is not scored: getting it all wrong credits nothing and blocks nothing', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={lesson()} goBack={vi.fn()} award={award} />);
    next();
    for (let w = 0; w < 2; w++) {
      next();
      while (screen.queryByTestId('worked-next-step'))
        fireEvent.click(screen.getByTestId('worked-next-step'));
    }
    next();
    fireEvent.click(screen.getAllByRole('button', { name: /^Option/ })[0]!);
    fireEvent.click(screen.getByText('Check Answer'));
    next();
    const n = lesson().slides.find((s: { type: string }) => s.type === 'practice').items.length;
    for (let i = 0; i < n; i++) {
      // Two wrong answers on every item.
      if (typed('xxxx')) {
        typed('yyyy');
      } else {
        const c = correctIdx();
        const wrong = [0, 1, 2, 3].filter((k) => k !== c);
        fireEvent.click(opts()[wrong[0]!]!);
        fireEvent.click(opts()[wrong[1]!]!);
      }
      const more = screen.queryByTestId('practice-next-item');
      if (more) fireEvent.click(more);
    }
    expect(award).not.toHaveBeenCalled();
    expect(nextDisabled()).toBe(false);
    next(); // the check still opens
    expect(screen.getByTestId('lesson-check')).toBeTruthy();
  });
});
