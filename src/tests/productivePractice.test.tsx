// src/tests/productivePractice.test.tsx
//
// PARALLEL FORMS, TYPED PRACTICE, LESSON VOCABULARY — the engine half of academic
// recommendations 2 and 3 (owner go-ahead, 2026-09-29). The content is authored per
// level and a level is held to it once it joins PRODUCTIVE_LEVELS; this file pins the
// machinery every level will run through, on synthetic lessons, so it holds before
// the first level ships.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { judgeTyped, normalizeTyped } from '../lib/typedAnswer';
import { lessonGate, findCheckSlide } from '../lib/lessonCheck';
import { buildRetentionQueue, recordCheckFailure, readRetention } from '../lib/lessonRetention';
import { GuidedPracticeSlide } from '../components/learn/LessonPracticeSlides';
// @ts-expect-error — plain JS module
import { withPractice } from '../../functions/api/content/_data/lessonPractice.js';
// @ts-expect-error — plain JS module
import {
  productiveProblems,
  typedItemProblems,
  PRODUCTIVE_LEVELS,
  practiceProblems,
} from '../../scripts/lessonDepthRules.mjs';

const mc = (q: string, correct = 0) => ({
  q,
  options: [`${q}-a`, `${q}-b`, `${q}-c`, `${q}-d`],
  correct,
  explanation: 'e',
});
const formA = [0, 1, 2, 3, 0, 1].map((c, i) => mc(`A${i}`, c));
const formB = [2, 0, 1, 3, 1, 0].map((c, i) => mc(`B${i}`, c));
const slides = [
  { type: 'intro' },
  { type: 'check', items: formA, itemsB: formB },
  { type: 'summary' },
];

beforeEach(() => localStorage.clear());

describe('typed answers are judged exactly, with diacritics named separately', () => {
  it('right: case, spaces and surrounding punctuation do not matter', () => {
    expect(judgeTyped('  Žene. ', 'žene')).toBe('right');
    expect(judgeTyped('mi  je', 'mi je')).toBe('right');
    expect(judgeTyped('„kuću“', 'kuću')).toBe('right');
  });

  it('an accepted alternative is right', () => {
    expect(judgeTyped('sa sestrom', 's sestrom', ['sa sestrom'])).toBe('right');
  });

  it('accents: right except for the hooks — a different word in Croatian, so not right', () => {
    expect(judgeTyped('zene', 'žene')).toBe('accents');
    expect(judgeTyped('kuca', 'kuća')).toBe('accents');
    expect(judgeTyped('dak', 'đak')).toBe('accents');
  });

  it('wrong: a different ending is wrong, however close — no fuzzy distance', () => {
    expect(judgeTyped('žena', 'žene')).toBe('wrong');
    expect(judgeTyped('kuće', 'kuću')).toBe('wrong');
    expect(judgeTyped('', 'žene')).toBe('wrong');
  });

  it('normalises typographic quotes', () => {
    expect(normalizeTyped('„Bog!“')).toBe('bog');
  });
});

describe('two forms of the check', () => {
  it('attempt 0 sits form A, attempt 1 form B, and the pool is A then B', () => {
    const a = lessonGate(slides as never, 0);
    const b = lessonGate(slides as never, 1);
    expect(a.kind === 'check' && a.form).toBe('A');
    expect(b.kind === 'check' && b.form).toBe('B');
    expect(b.kind === 'check' && b.items.map((i) => i.q)).toEqual(formB.map((i) => i.q));
    expect(b.kind === 'check' && b.poolOffset).toBe(6);
    expect(findCheckSlide(slides as never)!.pool.map((i) => i.q)).toEqual([
      ...formA.map((i) => i.q),
      ...formB.map((i) => i.q),
    ]);
  });

  it('a lesson without a full form B sits form A on every attempt', () => {
    const one = [{ type: 'check', items: formA, itemsB: formB.slice(0, 3) }];
    const g = lessonGate(one as never, 1);
    expect(g.kind === 'check' && g.form).toBe('A');
    expect(g.kind === 'check' && g.poolOffset).toBe(0);
  });

  it('a form-B miss is a card on the form-B item, and the review serves that item', () => {
    const now = Date.now();
    // Pool index 6 + 2 = form B item 2.
    recordCheckFailure('l', { results: [{ idx: 8, correct: false }], now });
    const q = buildRetentionQueue(
      [{ id: 'l', slides: slides as never }],
      readRetention(),
      '2026-09-29',
      now + 2 * 86_400_000, // a first miss is due 24 h on the scheduler's own clock
    );
    expect(q.map((x) => x.item.q)).toEqual(['B2']);
  });
});

describe('placement: withPractice attaches form B and the lesson vocabulary', () => {
  it('puts itemsB on the check slide and vocab on the lesson', async () => {
    const mod = await import('../../functions/api/content/_data/lessonPractice.js');
    const map = (mod as { LESSON_PRACTICE: Record<string, unknown> }).LESSON_PRACTICE;
    map['__probe'] = {
      practice: { title: 'P', items: [] },
      checkB: formB,
      vocab: [['kuća', 'house', 'Ovo je moja kuća.']],
    };
    try {
      const [out] = withPractice([
        { id: '__probe', slides: [{ type: 'check', items: formA }, { type: 'summary' }] },
      ]);
      expect(out.slides.find((s: { type: string }) => s.type === 'check').itemsB).toEqual(formB);
      expect(out.vocab).toEqual([['kuća', 'house', 'Ovo je moja kuća.']]);
    } finally {
      delete map['__probe'];
    }
  });
});

describe('the depth rules a level is held to once it is productive', () => {
  const typed = (n: number) => ({
    type: 'type',
    q: `Vidim ____ (${n}).`,
    answer: 'mamu',
    hint: 'The object of vidjeti takes the accusative.',
    explanation: 'mama → mamu',
  });
  const good = {
    id: 'g',
    level: 'A1',
    vocab: Array.from({ length: 8 }, (_, i) => [`riječ${i}`, `word ${i}`, `Primjer ${i}.`]),
    slides: [
      {
        type: 'practice',
        items: [
          ...Array.from({ length: 8 }, (_, i) => mc(`P${i}`, i % 4)),
          ...[1, 2, 3, 4].map(typed),
        ],
      },
      { type: 'check', items: formA, itemsB: formB },
      { type: 'summary' },
    ],
  };

  it('a complete lesson passes', () => {
    expect(productiveProblems(good)).toEqual([]);
  });

  it('flags a missing form B, thin practice, too few typed items and thin vocabulary', () => {
    const bad = {
      ...good,
      vocab: good.vocab.slice(0, 3),
      slides: [
        { type: 'practice', items: good.slides[0]!.items!.slice(0, 5) },
        { type: 'check', items: formA },
        { type: 'summary' },
      ],
    };
    const p = productiveProblems(bad).join('\n');
    expect(p).toMatch(/form B needs/);
    expect(p).toMatch(/needs >= 12 items/);
    expect(p).toMatch(/typed items/);
    expect(p).toMatch(/vocab entries/);
  });

  it('a typed item must have a blank, and must not give its answer in the hint or the question', () => {
    expect(typedItemProblems({ ...typed(1), q: 'Vidim mamu.' }, 'x').join()).toMatch(/blank/);
    expect(typedItemProblems({ ...typed(1), hint: 'It is mamu.' }, 'x').join()).toMatch(
      /hint gives/,
    );
    expect(typedItemProblems({ ...typed(1), q: 'Vidim ____ — mamu.' }, 'x').join()).toMatch(
      /contains its own answer/,
    );
  });

  it('the practice rules every level runs apply the typed-item rules to typed items', () => {
    const lesson = {
      ...good,
      slides: [
        {
          type: 'practice',
          items: [...good.slides[0]!.items!.slice(0, 8), { ...typed(1), q: 'Vidim mamu.' }],
        },
        ...good.slides.slice(1),
      ],
    };
    expect(practiceProblems(lesson).join('\n')).toMatch(/typed q needs a ____ blank/);
    // ...and do NOT hold a typed item to the four-option rule.
    expect(practiceProblems(lesson).join('\n')).not.toMatch(/item 8: needs exactly 4 options/);
  });

  it('PRODUCTIVE_LEVELS is where a level opts in (none may be listed without its content)', () => {
    expect(Array.isArray(PRODUCTIVE_LEVELS)).toBe(true);
  });
});

describe('the guided-practice slide runs typed items', () => {
  const lesson = { title: 'L', color: '#16a34a', bg: '#fff', icon: 'x' } as never;
  const slide = {
    type: 'practice',
    items: [
      {
        type: 'type',
        q: 'Vidim ____.',
        answer: 'žene',
        hint: 'Plural object.',
        explanation: 'žene',
      },
    ],
  } as never;

  it('a right answer resolves the item and completes the slide', () => {
    const onComplete = vi.fn();
    render(
      <GuidedPracticeSlide slide={slide} lesson={lesson} done={false} onComplete={onComplete} />,
    );
    fireEvent.change(screen.getByTestId('practice-typed-input'), { target: { value: 'Žene' } });
    fireEvent.click(screen.getByTestId('practice-typed-submit'));
    expect(screen.getByTestId('practice-explanation').textContent).toMatch(/Correct/);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('missing hooks gets the diacritics hint, not the plain one, and a second try', () => {
    render(<GuidedPracticeSlide slide={slide} lesson={lesson} done={false} onComplete={vi.fn()} />);
    fireEvent.change(screen.getByTestId('practice-typed-input'), { target: { value: 'zene' } });
    fireEvent.click(screen.getByTestId('practice-typed-submit'));
    const hint = screen.getByTestId('practice-hint');
    expect(hint.getAttribute('data-verdict')).toBe('accents');
    expect(hint.textContent).toMatch(/letters with marks/);
    expect(screen.getByTestId('practice-typed-input')).toBeTruthy(); // still open
  });

  it('two misses resolve it with the answer shown', () => {
    const onComplete = vi.fn();
    render(
      <GuidedPracticeSlide slide={slide} lesson={lesson} done={false} onComplete={onComplete} />,
    );
    for (const v of ['žena', 'ženu']) {
      fireEvent.change(screen.getByTestId('practice-typed-input'), { target: { value: v } });
      fireEvent.click(screen.getByTestId('practice-typed-submit'));
    }
    expect(screen.getByTestId('practice-typed-answer').textContent).toBe('žene');
    expect(screen.getByTestId('practice-explanation').textContent).toMatch(/answer is shown/);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
