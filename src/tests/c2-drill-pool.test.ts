/**
 * c2-drill-pool.test.ts — data guards for the C2 drill-pool expansion
 * (Phase 2, fluency initiative): GerundDrill (glagolski prilozi) and
 * PrecisionDrill (formal-register collocations + preposition government).
 * Mirrors c2-structure-drill.test.ts so all C2 drills carry the same
 * contract: >=24 items, 3 modes with >=8 each, 4 unique opts + tip,
 * pool registration at C2/tier 5, and a gated completion-registry entry.
 */
import { describe, it, expect } from 'vitest';
import { GERUND_DRILL_DATA } from '../components/practice/GerundDrill';
import { PRECISION_DRILL_DATA } from '../components/practice/PrecisionDrill';
import { CEFR_EXERCISE_POOL, EXERCISE_DIFFICULTY } from '../lib/sessionPools';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const DRILLS = [
  {
    id: 'gerunddrill',
    data: GERUND_DRILL_DATA,
    modes: ['izbor', 'pravila', 'tvorba'],
    category: 'participle',
  },
  {
    id: 'preciznost',
    data: PRECISION_DRILL_DATA,
    modes: ['glagolske', 'nijanse', 'prijedlozi'],
    category: 'precision',
  },
] as const;

for (const drill of DRILLS) {
  describe(`C2 drill: ${drill.id}`, () => {
    it('has >=24 items covering all three modes with >=8 each', () => {
      expect(drill.data.length).toBeGreaterThanOrEqual(24);
      const modes = new Set(drill.data.map((d) => d.mode));
      expect([...modes].sort()).toEqual([...drill.modes]);
      for (const mode of modes) {
        expect(
          drill.data.filter((d) => d.mode === mode).length,
          `mode ${mode}`,
        ).toBeGreaterThanOrEqual(8);
      }
    });

    it('every item has 4 unique opts containing the answer, plus a tip and gloss', () => {
      for (const d of drill.data) {
        expect(d.opts.length, d.q).toBe(4);
        expect(new Set(d.opts).size, `dup opts: ${d.q}`).toBe(4);
        expect(d.opts, d.q).toContain(d.answer);
        expect(typeof d.tip, d.q).toBe('string');
        expect(d.tip.length, d.q).toBeGreaterThan(10);
        expect(typeof d.en, d.q).toBe('string');
      }
    });

    it('has no duplicate questions', () => {
      const qs = drill.data.map((d) => d.q);
      expect(new Set(qs).size).toBe(qs.length);
    });

    it('is registered in the session pool at C2 tier 5', () => {
      const entry = CEFR_EXERCISE_POOL.find((e) => e.id === drill.id);
      expect(entry).toBeTruthy();
      expect(entry!.cefr).toBe('C2');
      expect(entry!.screen).toBe(drill.id);
      expect(entry!.category).toBe(drill.category);
      expect(EXERCISE_DIFFICULTY[drill.id]).toBe(5);
    });

    it('has a gated completion-registry entry (grammar credit at 75%)', () => {
      const reg = EXERCISE_COMPLETION[drill.id];
      expect(reg).toBeTruthy();
      expect(reg.policy.kind).toBe('gated');
      expect(reg.policy.statKind).toBe('gc');
    });
  });
}

describe('C2 drill-pool breadth', () => {
  it('the pool now offers at least 3 non-adaptive C2 exercises', () => {
    const c2 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'C2' && !e.adaptive);
    expect(c2.length).toBeGreaterThanOrEqual(3);
  });
});
