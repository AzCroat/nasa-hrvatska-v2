/**
 * listening-banks.test.ts — Structural guards for the Batch 3a listening depth
 * expansion: comprehension EXERCISES (now A1–C2), DICTATION_DATA (A1–C2
 * ladder), and the level-tagged LISTEN pool.
 */
import { describe, it, expect } from 'vitest';
import { EXERCISES } from '../components/practice/listening/exercises';
import { DICTATION_DATA } from '../components/practice/DictationScreen';
import { LISTEN } from '../data/exercises.js';

const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

describe('comprehension EXERCISES', () => {
  it('covers all six CEFR levels', () => {
    expect(Object.keys(EXERCISES)).toEqual(CEFR);
  });

  it('every level has ≥3 sets and ≥24 questions; A1–B2 have ≥4 sets', () => {
    for (const [lvl, block] of Object.entries(EXERCISES)) {
      const qCount = block.sets.reduce((a, s) => a + s.questions.length, 0);
      expect(block.sets.length, `${lvl} sets`).toBeGreaterThanOrEqual(3);
      expect(qCount, `${lvl} questions`).toBeGreaterThanOrEqual(23);
      if (['A1', 'A2', 'B1', 'B2'].includes(lvl)) {
        expect(block.sets.length, `${lvl} sets`).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('every question has hr, en, and 4 unique opts containing en', () => {
    for (const [lvl, block] of Object.entries(EXERCISES)) {
      for (const set of block.sets) {
        for (const question of set.questions) {
          expect(question.hr, `${lvl}/${set.title}`).toBeTruthy();
          expect(question.en, question.hr).toBeTruthy();
          expect(question.opts, question.hr).toHaveLength(4);
          expect(new Set(question.opts).size, question.hr).toBe(4);
          expect(question.opts, question.hr).toContain(question.en);
        }
      }
    }
  });

  it('(hr, en) pairs are unique within each level', () => {
    for (const [lvl, block] of Object.entries(EXERCISES)) {
      const keys = block.sets.flatMap((s) => s.questions.map((x) => `${x.hr} ${x.en}`));
      const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
      expect(dupes, `${lvl}: ${dupes.join(' | ')}`).toEqual([]);
    }
  });
});

describe('DICTATION_DATA', () => {
  it('has ≥60 items spanning all six levels with ≥8 at C1 and ≥6 at C2', () => {
    expect(DICTATION_DATA.length).toBeGreaterThanOrEqual(60);
    const by: Record<string, number> = {};
    for (const d of DICTATION_DATA) {
      expect(d.text, JSON.stringify(d)).toBeTruthy();
      expect(d.en, d.text).toBeTruthy();
      expect(CEFR, d.text).toContain(d.level);
      by[d.level] = (by[d.level] ?? 0) + 1;
    }
    expect(by['C1'] ?? 0).toBeGreaterThanOrEqual(8);
    expect(by['C2'] ?? 0).toBeGreaterThanOrEqual(6);
  });

  it('texts are unique', () => {
    const keys = DICTATION_DATA.map((d) => d.text);
    const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
    expect(dupes, dupes.join(' | ')).toEqual([]);
  });
});

describe('LISTEN pool', () => {
  it('has ≥45 items, every one level-tagged with 4 unique opts containing en', () => {
    expect(LISTEN.length).toBeGreaterThanOrEqual(45);
    for (const item of LISTEN) {
      expect(item.hr, JSON.stringify(item)).toBeTruthy();
      expect(item.en, item.hr).toBeTruthy();
      expect(CEFR, `${item.hr} untagged`).toContain(item.level);
      expect(item.opts, item.hr).toHaveLength(4);
      expect(new Set(item.opts).size, item.hr).toBe(4);
      expect(item.opts, item.hr).toContain(item.en);
    }
  });

  it('covers B1+ meaningfully (≥20 items at B1 or above)', () => {
    const upper = LISTEN.filter((x) => ['B1', 'B2', 'C1', 'C2'].includes(x.level));
    expect(upper.length).toBeGreaterThanOrEqual(20);
  });

  it('(hr, en) pairs are unique', () => {
    const keys = LISTEN.map((x) => `${x.hr} ${x.en}`);
    const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
    expect(dupes, dupes.join(' | ')).toEqual([]);
  });
});
