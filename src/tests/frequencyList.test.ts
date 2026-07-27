/**
 * frequencyList.test.ts — structural validation for the corpus-frequency word
 * list (src/lib/frequency500.ts). Added with the 2026-07 content expansion
 * (500 → 1,250 ranks). The list seeds the SRS "fresh" pool
 * (activeVocabulary.ts) and drives FrequencyTrackScreen's quiz/progress math,
 * so a duplicate lemma, rank gap, or bad POS silently corrupts learning state.
 */
import { describe, it, expect } from 'vitest';
import { FREQUENCY_500, type FrequencyEntry } from '../lib/frequency500';

const ALLOWED_POS = new Set([
  'conj',
  'prep',
  'pron',
  'verb',
  'noun',
  'adj',
  'adv',
  'det',
  'num',
  'part',
  'interj',
]);

describe('frequency list — structural integrity', () => {
  it('coverage never regresses below the 2026-07 expansion floor (1,250 ranks)', () => {
    expect(FREQUENCY_500.length).toBeGreaterThanOrEqual(1250);
  });

  it('ranks are contiguous 1..N with no gaps or duplicates', () => {
    FREQUENCY_500.forEach((e: FrequencyEntry, i: number) => {
      expect(e.rank, `index ${i}`).toBe(i + 1);
    });
  });

  it('lemmas are unique (case-insensitive), non-empty, and Croatian-clean', () => {
    const seen = new Set<string>();
    for (const e of FREQUENCY_500) {
      const k = e.hr.toLowerCase();
      expect(seen.has(k), `duplicate lemma: ${e.hr}`).toBe(false);
      seen.add(k);
      expect(e.hr.trim().length, `empty hr at rank ${e.rank}`).toBeGreaterThan(0);
      // Croatian orthography, spaces (reflexive 'se' verbs), and hyphens
      // (e-pošta) only — no stray punctuation/digits that would break TTS or
      // quiz rendering.
      expect(e.hr, `bad characters in "${e.hr}"`).toMatch(/^[a-zčćđšž]+([ -][a-zčćđšž]+)*$/i);
    }
  });

  it('every entry has a non-empty gloss and a valid POS tag', () => {
    for (const e of FREQUENCY_500) {
      expect(e.en.trim().length, `empty gloss at rank ${e.rank} (${e.hr})`).toBeGreaterThan(0);
      expect(ALLOWED_POS.has(e.pos), `bad pos "${e.pos}" at rank ${e.rank} (${e.hr})`).toBe(true);
    }
  });
});
