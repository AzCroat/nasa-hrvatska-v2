/**
 * vocab-structure.test.ts — Guards for the Batch 6a vocabulary structure work:
 * every core V category CEFR-tagged via V_LEVELS, the rescued essential
 * key-word categories in circulation, the stale client V_B2/V_C1/V_C2 copies
 * gone for good, and the server C2 tier at its new 300-word floor.
 */
import { describe, it, expect } from 'vitest';
import * as clientVocab from '../data/vocabulary.js';
// Server data imported directly by tests — house precedent (vocabulary-coverage,
// gradedStories); the client reads these tiers via /api/content/core.
import { V_C2, V_C1, V_B2 } from '../../functions/api/content/_data/vocabulary.js';

const CEFR = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

describe('core V CEFR tagging (V_LEVELS)', () => {
  it('every V category is mapped to a valid level', () => {
    const cats = Object.keys(clientVocab.V);
    const unmapped = cats.filter((c) => !clientVocab.V_LEVELS[c]);
    expect(unmapped, `unmapped: ${unmapped.join(', ')}`).toEqual([]);
    for (const [cat, lvl] of Object.entries(clientVocab.V_LEVELS)) {
      expect(CEFR.has(lvl as string), `${cat} → ${lvl}`).toBe(true);
    }
  });

  it('V_LEVELS has no entries for categories that do not exist', () => {
    const cats = new Set(Object.keys(clientVocab.V));
    const stale = Object.keys(clientVocab.V_LEVELS).filter((c) => !cats.has(c));
    expect(stale, `stale: ${stale.join(', ')}`).toEqual([]);
  });
});

describe('rescued essential key words', () => {
  it('essential (a1)/(a2) are V categories with 30 words each', () => {
    expect(clientVocab.V['essential (a1)']).toHaveLength(30);
    expect(clientVocab.V['essential (a2)']).toHaveLength(30);
  });
});

describe('stale client advanced-vocab copies', () => {
  it('client bundle no longer exports V_B2/V_C1/V_C2 (server-only tiers)', () => {
    expect((clientVocab as Record<string, unknown>).V_B2).toBeUndefined();
    expect((clientVocab as Record<string, unknown>).V_C1).toBeUndefined();
    expect((clientVocab as Record<string, unknown>).V_C2).toBeUndefined();
  });
});

describe('server advanced tiers', () => {
  it('V_C2 has ≥300 words across ≥16 categories with unique lemmas', () => {
    const counts = Object.values(V_C2).map((arr) => arr.length);
    expect(Object.keys(V_C2).length).toBeGreaterThanOrEqual(16);
    expect(counts.reduce((a, b) => a + b, 0)).toBeGreaterThanOrEqual(300);
    const seen = new Set<string>();
    for (const arr of Object.values(V_C2)) {
      for (const entry of arr) {
        expect(entry.length, entry[0]).toBeGreaterThanOrEqual(2);
        expect(seen.has(entry[0]), `duplicate lemma: ${entry[0]}`).toBe(false);
        seen.add(entry[0]);
      }
    }
  });

  it('every new C2 entry carries an example sentence', () => {
    for (const [cat, arr] of Object.entries(V_C2)) {
      for (const entry of arr) {
        expect(entry[1], `${cat}: ${entry[0]} missing gloss`).toBeTruthy();
      }
    }
  });

  it('B2/C1 tiers keep their audited floors', () => {
    const count = (tier: Record<string, unknown[][]>) =>
      Object.values(tier).reduce((n, arr) => n + arr.length, 0);
    expect(count(V_B2 as never)).toBeGreaterThanOrEqual(963);
    expect(count(V_C1 as never)).toBeGreaterThanOrEqual(900);
  });

  it('no tier contains duplicate lemmas (B2 legacy dups fixed in Batch 6c)', () => {
    for (const [name, tier] of [
      ['V_B2', V_B2],
      ['V_C1', V_C1],
      ['V_C2', V_C2],
    ] as const) {
      const seen = new Set<string>();
      for (const arr of Object.values(tier)) {
        for (const entry of arr as string[][]) {
          const key = (entry[0] as string).toLowerCase();
          expect(seen.has(key), `duplicate ${name} lemma: ${entry[0]}`).toBe(false);
          seen.add(key);
        }
      }
    }
  });
});
