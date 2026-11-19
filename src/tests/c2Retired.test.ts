// The course ends at C1 (owner decision, 2026-11-18): C2 was folded into C1.
// A stored 'C2' (an old device, an old synced blob) must keep working by
// reading as C1, and nothing may offer or compute a level above C1.
import { describe, it, expect } from 'vitest';
import { CEFR_ORDER, normalizeCefr, cefrRank, getUserCefr } from '../lib/cefr';
import { getCheckpointSetFor, getNextTestFor } from '../data/cefrEquivalencyItems';

describe('C2 is retired', () => {
  it('a stored C2 reads as C1', () => {
    expect(normalizeCefr('C2')).toBe('C1');
    expect(cefrRank('C2')).toBe(cefrRank('C1'));
  });

  it('no amount of XP computes a level above C1', () => {
    expect(getUserCefr(999999, 0, 0)).toBe('C1');
    expect(getUserCefr(0, 9999, 9999)).toBe('C1');
  });

  it('the level list has no C2', () => {
    expect([...CEFR_ORDER]).not.toContain('C2');
    expect(CEFR_ORDER[CEFR_ORDER.length - 1]).toBe('C1');
  });

  it('C1 has a checkpoint bank and no advancement test above it', () => {
    expect(getCheckpointSetFor('C1')).not.toBeNull();
    expect(getNextTestFor('C1')).toBeNull();
  });
});
