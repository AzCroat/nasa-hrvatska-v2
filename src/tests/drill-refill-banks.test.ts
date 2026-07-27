/**
 * drill-refill-banks.test.ts — Structural guards for the Batch 4b bank refills.
 *
 * 2026-07 depth expansion grew the sub-20 drill banks:
 * UNJUMBLE 15→40, PREPDRILL 15→40, PREPS 15→25, ORDINALS 15→20,
 * ORDQUIZ 15→30, COMPARE 15→24, COMPQUIZ 15→30, RELPRON.quiz 8→20,
 * VOCATIVE.quiz 10→22, NEGATION_QUIZ 14→20.
 * These tests pin the floors and per-item contracts.
 */
import { describe, it, expect } from 'vitest';
import {
  UNJUMBLE,
  PREPS,
  PREPDRILL,
  ORDINALS,
  ORDQUIZ,
  COMPARE,
  COMPQUIZ,
  RELPRON,
  VOCATIVE,
} from '../data/exercises.js';
import { NEGATION_QUIZ } from '../components/practice/exercises/NegationScreen';

function expectUniquePairs<T>(bank: T[], key: (i: T) => string, name: string) {
  const keys = bank.map(key);
  const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
  expect(dupes, `${name}: duplicate items: ${dupes.join(' | ')}`).toEqual([]);
}

describe('UNJUMBLE bank', () => {
  it('has at least 40 items', () => {
    expect(UNJUMBLE.length).toBeGreaterThanOrEqual(40);
  });

  it('every correct sentence uses exactly the given words in order-preserving form', () => {
    for (const item of UNJUMBLE) {
      expect(item.words.length, item.correct).toBeGreaterThanOrEqual(3);
      expect(item.en, item.correct).toBeTruthy();
      // Stripping terminal punctuation, the correct sentence must be some
      // permutation of the word tiles joined by single spaces.
      const stripped = item.correct.replace(/[.!?]$/, '');
      const parts = stripped.split(' ');
      expect(parts.length, item.correct).toBe(item.words.length);
      expect([...parts].sort(), item.correct).toEqual([...item.words].sort());
      // The sentence must end with punctuation so learners see a real sentence.
      expect(/[.!?]$/.test(item.correct), item.correct).toBe(true);
    }
  });

  it('correct sentences are unique', () => {
    expectUniquePairs(UNJUMBLE, (i) => i.correct, 'UNJUMBLE');
  });
});

describe('PREPDRILL bank', () => {
  it('has at least 40 items', () => {
    expect(PREPDRILL.length).toBeGreaterThanOrEqual(40);
  });

  it('every item has a ___ blank, en, and 4 unique opts containing the answer', () => {
    for (const item of PREPDRILL) {
      expect(item.sentence).toContain('___');
      expect(item.en, item.sentence).toBeTruthy();
      expect(item.opts, item.sentence).toHaveLength(4);
      expect(new Set(item.opts).size, item.sentence).toBe(4);
      expect(item.opts, item.sentence).toContain(item.answer);
    }
  });

  it('(sentence, answer) pairs are unique', () => {
    expectUniquePairs(PREPDRILL, (i) => `${i.sentence} ${i.answer}`, 'PREPDRILL');
  });
});

describe('PREPS reference', () => {
  it('has at least 25 prepositions, each with case(s) and example(s)', () => {
    expect(PREPS.length).toBeGreaterThanOrEqual(25);
    for (const p of PREPS) {
      expect(p.cases.length, p.prep).toBeGreaterThanOrEqual(1);
      expect(p.ex.length, p.prep).toBeGreaterThanOrEqual(1);
      expect(p.en, p.prep).toBeTruthy();
    }
  });

  it('prepositions are unique', () => {
    expectUniquePairs(PREPS, (i) => i.prep, 'PREPS');
  });
});

describe('ORDINALS + ORDQUIZ', () => {
  it('ORDINALS covers 1..20 contiguously with hr + loc forms', () => {
    expect(ORDINALS.length).toBeGreaterThanOrEqual(20);
    ORDINALS.forEach((o: { num: number; hr: string; loc: string }, i: number) => {
      expect(o.num).toBe(i + 1);
      expect(o.hr, `#${o.num}`).toBeTruthy();
      expect(o.loc, `#${o.num}`).toBeTruthy();
    });
  });

  it('ORDQUIZ has ≥30 items with the answer among 3 unique opts', () => {
    expect(ORDQUIZ.length).toBeGreaterThanOrEqual(30);
    for (const q of ORDQUIZ) {
      expect(q.opts, q.q).toHaveLength(3);
      expect(new Set(q.opts).size, q.q).toBe(3);
      expect(q.opts, q.q).toContain(q.a);
    }
    expectUniquePairs(ORDQUIZ, (i) => `${i.q} ${i.a}`, 'ORDQUIZ');
  });
});

describe('COMPARE + COMPQUIZ', () => {
  it('COMPARE has ≥24 adjectives with comp/super/en and unique bases', () => {
    expect(COMPARE.length).toBeGreaterThanOrEqual(24);
    for (const c of COMPARE) {
      expect(c.comp, c.base).toBeTruthy();
      expect(c.super, c.base).toMatch(/^naj/);
      expect(c.en, c.base).toBeTruthy();
    }
    expectUniquePairs(COMPARE, (i) => i.base, 'COMPARE');
  });

  it('COMPQUIZ has ≥30 items with the answer among 3 unique opts', () => {
    expect(COMPQUIZ.length).toBeGreaterThanOrEqual(30);
    for (const q of COMPQUIZ) {
      expect(q.opts, q.q).toHaveLength(3);
      expect(new Set(q.opts).size, q.q).toBe(3);
      expect(q.opts, q.q).toContain(q.a);
    }
    expectUniquePairs(COMPQUIZ, (i) => `${i.q} ${i.a}`, 'COMPQUIZ');
  });
});

describe('RELPRON quiz', () => {
  it('has ≥20 items, each answer drawn from the declension table forms', () => {
    expect(RELPRON.quiz.length).toBeGreaterThanOrEqual(20);
    const tableForms = new Set<string>();
    for (const g of Object.values(RELPRON.table) as Array<Record<string, string>>) {
      for (const f of Object.values(g)) f.split('/').forEach((x) => tableForms.add(x));
    }
    tableForms.add('kojim'); // instrumental distractor is a real form
    for (const q of RELPRON.quiz) {
      expect(q.opts, q.q).toContain(q.a);
      expect(new Set(q.opts).size, q.q).toBe(q.opts.length);
      expect(tableForms.has(q.a), `${q.q} → ${q.a} not a table form`).toBe(true);
    }
    expectUniquePairs(RELPRON.quiz, (i) => `${i.q} ${i.a}`, 'RELPRON.quiz');
  });
});

describe('VOCATIVE', () => {
  it('quiz has ≥22 items with the answer distinct from all al distractors', () => {
    expect(VOCATIVE.quiz.length).toBeGreaterThanOrEqual(22);
    for (const q of VOCATIVE.quiz) {
      expect(q.al, q.q).not.toContain(q.a);
      expect(new Set([q.a, ...q.al]).size, q.q).toBe(q.al.length + 1);
    }
    expectUniquePairs(VOCATIVE.quiz, (i) => `${i.q} ${i.a}`, 'VOCATIVE.quiz');
  });

  it('has a dedicated -ica → -ice rule (not lumped under -a → -o)', () => {
    const icaRule = VOCATIVE.rules.find((r: { pattern: string }) => r.pattern.includes('-ica'));
    expect(icaRule).toBeTruthy();
    const aRule = VOCATIVE.rules.find((r: { pattern: string }) =>
      r.pattern.includes('ending in -a'),
    );
    for (const [nom] of aRule.examples) {
      expect(nom.endsWith('ica'), `${nom} belongs under the -ica rule`).toBe(false);
    }
  });
});

describe('NEGATION_QUIZ', () => {
  it('has ≥20 items with 4 unique opts containing the answer', () => {
    expect(NEGATION_QUIZ.length).toBeGreaterThanOrEqual(20);
    for (const q of NEGATION_QUIZ) {
      expect(q.opts, q.q).toHaveLength(4);
      expect(new Set(q.opts).size, q.q).toBe(4);
      expect(q.opts, q.q).toContain(q.a);
    }
    expectUniquePairs(NEGATION_QUIZ, (i) => `${i.q} ${i.a}`, 'NEGATION_QUIZ');
  });
});
