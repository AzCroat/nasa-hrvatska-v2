// lessonCheck.test.ts — the pure mastery-check gate (owner directive, 2026-09-07).
import { describe, it, expect } from 'vitest';
import {
  lessonGate,
  lessonPassed,
  countCorrect,
  gateStartSlide,
  shuffledOrder,
  findCheckSlide,
  MIN_CHECK_ITEMS,
  LESSON_PASS_THRESHOLD,
} from '../lib/lessonCheck';
import { LESSON_PASS_THRESHOLD as GATE_THRESHOLD } from '../lib/lessonGate';

const item = (correct: number) => ({
  q: 'Q',
  options: ['a', 'b', 'c', 'd'],
  correct,
  explanation: 'because',
});

const withCheck = [
  { type: 'intro' },
  { type: 'rule' },
  { type: 'quiz', options: ['x', 'y'], correct: 0 },
  { type: 'check', items: [item(0), item(1), item(2), item(3), item(0), item(1)] },
  { type: 'summary', points: [] },
];

describe('lessonGate', () => {
  it('prefers the check slide when it carries valid items', () => {
    const g = lessonGate(withCheck);
    expect(g.kind).toBe('check');
    expect(g.total).toBe(6);
    expect(gateStartSlide(g)).toBe(3);
  });

  it('degrades to the formative quiz slides on an older payload without a check', () => {
    const g = lessonGate([
      { type: 'intro' },
      { type: 'quiz', options: ['x', 'y'], correct: 0 },
      { type: 'quiz', options: ['x', 'y'], correct: 1 },
      { type: 'summary' },
    ]);
    expect(g).toEqual({ kind: 'quiz', slideIndexes: [1, 2], total: 2 });
    expect(gateStartSlide(g)).toBe(1);
  });

  it('a check slide whose items are all malformed is not a gate — the quiz slides are', () => {
    const g = lessonGate([
      { type: 'quiz', options: ['x', 'y'], correct: 0 },
      { type: 'check', items: [{ q: 'no options' }, { options: ['a'], correct: 5 }] },
      { type: 'summary' },
    ]);
    expect(g.kind).toBe('quiz');
  });

  it('nothing to test → none, and none passes (pre-gate behaviour, no shipped lesson)', () => {
    const g = lessonGate([{ type: 'intro' }, { type: 'summary' }]);
    expect(g).toEqual({ kind: 'none', total: 0 });
    expect(lessonPassed(g, 0)).toBe(true);
    expect(gateStartSlide(g)).toBeNull();
  });

  it('findCheckSlide drops malformed items rather than trusting them', () => {
    const found = findCheckSlide([
      { type: 'check', items: [item(1), { q: 'x', options: ['a'], correct: 0 }, 'junk'] },
    ]);
    expect(found?.items).toHaveLength(1);
  });
});

describe('lessonPassed', () => {
  it('uses the shared 75% lesson threshold, not a private one', () => {
    expect(LESSON_PASS_THRESHOLD).toBe(GATE_THRESHOLD);
    expect(LESSON_PASS_THRESHOLD).toBe(0.75);
  });

  it('at six items: 5/6 passes, 4/6 does not', () => {
    const g = lessonGate(withCheck);
    expect(lessonPassed(g, 5)).toBe(true);
    expect(lessonPassed(g, 4)).toBe(false);
    expect(lessonPassed(g, 6)).toBe(true);
    expect(lessonPassed(g, 0)).toBe(false);
  });

  it('MIN_CHECK_ITEMS is six: one slip allowed, two not', () => {
    expect(MIN_CHECK_ITEMS).toBe(6);
    expect(Math.ceil(MIN_CHECK_ITEMS * LESSON_PASS_THRESHOLD)).toBe(5);
  });

  it('countCorrect compares SOURCE indices, ignoring unanswered items', () => {
    const items = [item(2), item(0), item(3)];
    expect(countCorrect(items, { 0: 2, 1: 1 })).toBe(1);
    expect(countCorrect(items, { 0: 2, 1: 0, 2: 3 })).toBe(3);
    expect(countCorrect(items, {})).toBe(0);
  });
});

describe('shuffledOrder', () => {
  it('is a permutation, deterministic per (attempt, item), and differs across attempts', () => {
    const a = shuffledOrder(4, 0, 0);
    expect([...a].sort()).toEqual([0, 1, 2, 3]);
    expect(shuffledOrder(4, 0, 0)).toEqual(a);
    const orders = new Set<string>();
    for (let attempt = 0; attempt < 6; attempt++) orders.add(shuffledOrder(4, attempt, 0).join(''));
    expect(orders.size).toBeGreaterThan(1);
  });

  it('the correct option does not sit at the same slot on every attempt', () => {
    const slots = new Set<number>();
    for (let attempt = 0; attempt < 12; attempt++) {
      slots.add(shuffledOrder(4, attempt, 3).indexOf(2));
    }
    expect(slots.size).toBeGreaterThan(1);
  });
});
