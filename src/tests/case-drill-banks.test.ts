/**
 * case-drill-banks.test.ts — Structural guards for the four case-drill item banks.
 *
 * 2026-07 depth expansion (audit Batch 4a) grew each bank 20 → 50 items.
 * These tests pin the floor and the item contract so future edits can't
 * silently shrink a bank, orphan an answer, or duplicate a question.
 */
import { describe, it, expect } from 'vitest';
import { DATA as NOM } from '../components/practice/NominativeDrill';
import { DATA as INSTR } from '../components/practice/InstrumentalDrill';
import { DATA as DAT } from '../components/practice/DativeDrill';

interface DrillItem {
  q: string;
  opts: string[];
  answer: string;
  en: string;
  tip: string;
  nom?: string;
}

const BANKS: Array<[string, DrillItem[]]> = [
  ['NominativeDrill', NOM],
  ['InstrumentalDrill', INSTR],
  ['DativeDrill', DAT],
];

describe.each(BANKS)('%s bank', (name, bank) => {
  it('has at least 50 items', () => {
    expect(bank.length).toBeGreaterThanOrEqual(50);
  });

  it('every item has q with a ___ blank, en, tip, and 4 unique opts containing the answer', () => {
    for (const item of bank) {
      expect(item.q, `${name}: q missing`).toBeTruthy();
      expect(item.q).toContain('___');
      expect(item.en, `${name}: en missing for "${item.q}"`).toBeTruthy();
      expect(item.tip, `${name}: tip missing for "${item.q}"`).toBeTruthy();
      expect(item.opts, `${name}: opts for "${item.q}"`).toHaveLength(4);
      expect(new Set(item.opts).size, `${name}: duplicate opts in "${item.q}"`).toBe(4);
      expect(item.opts, `${name}: answer not in opts for "${item.q}"`).toContain(item.answer);
    }
  });

  it('(question, answer) pairs are unique within the bank', () => {
    // Repeating a prompt with a different target word is legitimate drill
    // design; repeating prompt AND answer is an accidental duplicate item.
    // Separator chosen because it cannot occur in authored drill text. Written as
    // an ESCAPE, not a raw byte: a literal NUL makes git treat this file as binary
    // and render every change to it as "Binary files differ" (see
    // sourceIsText.test.ts). The runtime value is the same.
    const keys = bank.map((i) => `${i.q}\u0000${i.answer}`);
    const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
    expect(dupes, `${name}: duplicate items: ${dupes.join(' | ')}`).toEqual([]);
  });

  it('contains plural-form coverage (post-expansion requirement)', () => {
    const pluralTagged = bank.filter((i) => /PLURAL/i.test(i.tip));
    expect(pluralTagged.length, `${name}: plural items`).toBeGreaterThanOrEqual(5);
  });
});
