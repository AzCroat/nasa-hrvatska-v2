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

  it('every level has ≥6 sets and ≥38 questions; A1–B2 have ≥7 sets', () => {
    // Floors raised by the 2026-07 connected-speech expansion (+3 sets / +15
    // questions per level).
    for (const [lvl, block] of Object.entries(EXERCISES)) {
      const qCount = block.sets.reduce((a, s) => a + s.questions.length, 0);
      expect(block.sets.length, `${lvl} sets`).toBeGreaterThanOrEqual(6);
      expect(qCount, `${lvl} questions`).toBeGreaterThanOrEqual(38);
      if (['A1', 'A2', 'B1', 'B2'].includes(lvl)) {
        expect(block.sets.length, `${lvl} sets`).toBeGreaterThanOrEqual(7);
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
  it('has ≥80 items spanning all six levels with ≥18 at C1 and ≥16 at C2', () => {
    // C1/C2 floors raised by the 2026-07 dictation depth expansion (+10 each).
    expect(DICTATION_DATA.length).toBeGreaterThanOrEqual(80);
    const by: Record<string, number> = {};
    for (const d of DICTATION_DATA) {
      expect(d.text, JSON.stringify(d)).toBeTruthy();
      expect(d.en, d.text).toBeTruthy();
      expect(CEFR, d.text).toContain(d.level);
      by[d.level] = (by[d.level] ?? 0) + 1;
    }
    expect(by['C1'] ?? 0).toBeGreaterThanOrEqual(18);
    expect(by['C2'] ?? 0).toBeGreaterThanOrEqual(16);
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

// ── 3b: connected-speech passages + shadowing level tags ─────────────────────
import { SHADOWING } from '../data/cultural/language.js';
import { readFileSync } from 'node:fs';

describe('3b — connected-speech passage sets', () => {
  const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  it('every level has at least four passage sets with valid structure', () => {
    // Floor raised from 1 by the 2026-07 connected-speech expansion.
    for (const lvl of CEFR) {
      const ld = (EXERCISES as Record<string, (typeof EXERCISES)['A1']>)[lvl]!;
      const passageSets = ld.sets.filter(
        (s) => 'passage' in s && typeof (s as { passage?: string }).passage === 'string',
      );
      expect(passageSets.length, `${lvl} passage sets`).toBeGreaterThanOrEqual(4);
      for (const s of passageSets) {
        const passage = (s as { passage: string }).passage;
        // connected speech: multiple sentences
        expect(
          passage.split('.').filter((x) => x.trim()).length,
          `${lvl} sentences`,
        ).toBeGreaterThanOrEqual(3);
        expect(s.questions.length, `${lvl} questions`).toBeGreaterThanOrEqual(4);
        for (const q of s.questions) {
          expect(passage.includes(q.hr), `${lvl}: "${q.hr}" not in passage`).toBe(true);
          expect(q.opts, q.hr).toContain(q.en);
          expect(new Set(q.opts).size, `${lvl}: dup opts for "${q.hr}"`).toBe(q.opts.length);
        }
      }
    }
  });
});

describe('3b — shadowing level tags', () => {
  const CEFR = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

  it('every shadowing item carries hr/en/tip and a valid CEFR level', () => {
    expect(SHADOWING.length).toBeGreaterThanOrEqual(36);
    for (const s of SHADOWING as Array<Record<string, string>>) {
      expect(typeof s.hr, JSON.stringify(s)).toBe('string');
      expect(typeof s.en, s.hr).toBe('string');
      expect(typeof s.tip, s.hr).toBe('string');
      expect(CEFR.has(s.level!), `${s.hr} → ${s.level}`).toBe(true);
    }
  });

  it('every CEFR band has at least 5 shadowing items', () => {
    const by: Record<string, number> = {};
    for (const s of SHADOWING as Array<Record<string, string>>) {
      by[s.level!] = (by[s.level!] ?? 0) + 1;
    }
    for (const lvl of CEFR) {
      expect(by[lvl] ?? 0, `level ${lvl}`).toBeGreaterThanOrEqual(5);
    }
  });

  it('hr texts are unique and the client mirror matches the server file', () => {
    const hrs = (SHADOWING as Array<Record<string, string>>).map((s) => s.hr);
    expect(new Set(hrs).size).toBe(hrs.length);
    const server = readFileSync('functions/api/content/_data/cultural/language.js', 'utf8');
    const client = readFileSync('src/data/cultural/language.js', 'utf8');
    expect(client).toBe(server);
  });
});
