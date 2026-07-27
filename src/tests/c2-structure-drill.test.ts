/**
 * c2-structure-drill.test.ts — data guards for the session pool's first C2
 * grammar drill (task #45: before it, the guaranteed-grammar slot silently
 * served C1 to C2 users).
 */
import { describe, it, expect } from 'vitest';
import { C2_DRILL_DATA } from '../components/practice/C2StructureDrill';
import { CEFR_EXERCISE_POOL, EXERCISE_DIFFICULTY } from '../lib/sessionPools';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

describe('C2 structure drill', () => {
  it('has ≥24 items covering all three modes', () => {
    expect(C2_DRILL_DATA.length).toBeGreaterThanOrEqual(24);
    const modes = new Set(C2_DRILL_DATA.map((d) => d.mode));
    expect([...modes].sort()).toEqual(['comma', 'nominal', 'tense']);
    for (const mode of modes) {
      expect(
        C2_DRILL_DATA.filter((d) => d.mode === mode).length,
        `mode ${mode}`,
      ).toBeGreaterThanOrEqual(8);
    }
  });

  it('every item has 4 unique opts containing the answer, plus a tip', () => {
    for (const d of C2_DRILL_DATA) {
      expect(d.opts.length, d.q).toBe(4);
      expect(new Set(d.opts).size, `dup opts: ${d.q}`).toBe(4);
      expect(d.opts, d.q).toContain(d.answer);
      expect(typeof d.tip, d.q).toBe('string');
      expect(d.tip.length, d.q).toBeGreaterThan(10);
    }
  });

  it('is registered in the session pool at C2 with a grammar-structure category and tier 5', () => {
    const entry = CEFR_EXERCISE_POOL.find((e) => e.id === 'c2drill');
    expect(entry).toBeTruthy();
    expect(entry!.cefr).toBe('C2');
    expect(entry!.screen).toBe('c2drill');
    expect(entry!.category).toBe('nominalization');
    expect(EXERCISE_DIFFICULTY['c2drill']).toBe(5);
  });

  it('has a completion-registry entry (gated grammar credit)', () => {
    const reg = EXERCISE_COMPLETION['c2drill'];
    expect(reg).toBeTruthy();
  });
});
