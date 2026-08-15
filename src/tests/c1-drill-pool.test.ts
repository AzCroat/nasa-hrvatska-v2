/**
 * c1-drill-pool.test.ts — data guards for the C1 drill-pool expansion
 * (fluency initiative 2026-08-14; program target: 30+ drills per level).
 * KolokacijeDrill (formal collocations + rekcija + register),
 * EmfazaDrill (information structure: topic/focus order, emphatic
 * constructions, clitic clusters), VidNijanseDrill (aspectual nuance
 * beyond the B1 basics). Same contract as the B2/C2 drills: >=24 items,
 * 3 modes with >=8 each, 4 unique opts + tip + gloss, pool registration
 * at C1, gated completion-registry entry.
 */
import { describe, it, expect } from 'vitest';
import { KOLOKACIJE_DRILL_DATA } from '../components/practice/KolokacijeDrill';
import { EMFAZA_DRILL_DATA } from '../components/practice/EmfazaDrill';
import { VIDNIJANSE_DRILL_DATA } from '../components/practice/VidNijanseDrill';
import { CEFR_EXERCISE_POOL, EXERCISE_DIFFICULTY } from '../lib/sessionPools';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const DRILLS = [
  {
    id: 'kolokacije',
    data: KOLOKACIJE_DRILL_DATA,
    modes: ['glagolske', 'padezi', 'registar'],
    category: 'register',
    tier: 5,
  },
  {
    id: 'emfaza',
    data: EMFAZA_DRILL_DATA,
    modes: ['fokus', 'stil', 'tema'],
    category: 'word-order',
    tier: 5,
  },
  {
    id: 'vidnijanse',
    data: VIDNIJANSE_DRILL_DATA,
    modes: ['faze', 'nijansa', 'ponavljanje'],
    category: 'aspect-perfective',
    tier: 4,
  },
] as const;

for (const drill of DRILLS) {
  describe(`C1 drill: ${drill.id}`, () => {
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

    it('is registered in the session pool at C1 with its tier', () => {
      const entry = CEFR_EXERCISE_POOL.find((e) => e.id === drill.id);
      expect(entry).toBeTruthy();
      expect(entry!.cefr).toBe('C1');
      expect(entry!.screen).toBe(drill.id);
      expect(entry!.category).toBe(drill.category);
      expect(EXERCISE_DIFFICULTY[drill.id]).toBe(drill.tier);
    });

    it('has a gated completion-registry entry (grammar credit at 75%)', () => {
      const reg = EXERCISE_COMPLETION[drill.id];
      expect(reg).toBeTruthy();
      expect(reg.policy.kind).toBe('gated');
      expect(reg.policy.statKind).toBe('gc');
    });
  });
}

describe('C1 drill-pool breadth (program tally: 9/30)', () => {
  it('the pool now offers at least 9 C1 exercises', () => {
    const c1 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'C1');
    expect(c1.length).toBeGreaterThanOrEqual(9);
  });
});
