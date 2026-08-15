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
import { POVRATNI_DRILL_DATA } from '../components/practice/PovratniDrill';
import { SKLONIDBA_DRILL_DATA } from '../components/practice/SklonidbaImenaDrill';
import { PRIJEDLOZNI_DRILL_DATA } from '../components/practice/PrijedlozniIzraziDrill';
import { EMFAZA_DRILL_DATA } from '../components/practice/EmfazaDrill';
import { VIDNIJANSE_DRILL_DATA } from '../components/practice/VidNijanseDrill';
import { POGODBENE_DRILL_DATA } from '../components/practice/PogodbeneDrill';
import { ODREDJENOST_DRILL_DATA } from '../components/practice/OdredjenostDrill';
import { DATUMI_DRILL_DATA } from '../components/practice/DatumiDrill';
import { SKLONIDBA_BROJEVA_DRILL_DATA } from '../components/practice/SklonidbaBrojevaDrill';
import { NAMJERA_DRILL_DATA } from '../components/practice/NamjeraDrill';
import { SROCNOST_DRILL_DATA } from '../components/practice/SrocnostDrill';
import { TRPNI_DRILL_DATA } from '../components/practice/TrpniDrill';
import { INFINITIV_DA_DRILL_DATA } from '../components/practice/InfinitivDaDrill';
import { VIDSKI_PAROVI_DRILL_DATA } from '../components/practice/VidskiParoviDrill';
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
    id: 'povratni',
    data: POVRATNI_DRILL_DATA,
    modes: ['oblik', 'vrste', 'znacenje'],
    category: 'register',
    tier: 4,
  },
  {
    id: 'sklonidbaimena',
    data: SKLONIDBA_DRILL_DATA,
    modes: ['osobna', 'titule', 'zemljopisna'],
    category: 'genitive',
    tier: 4,
  },
  {
    id: 'prijedlozni',
    data: PRIJEDLOZNI_DRILL_DATA,
    modes: ['padez', 'razlike', 'slozeni'],
    category: 'genitive',
    tier: 4,
  },
  {
    id: 'vidnijanse',
    data: VIDNIJANSE_DRILL_DATA,
    modes: ['faze', 'nijansa', 'ponavljanje'],
    category: 'aspect-perfective',
    tier: 4,
  },
  {
    id: 'pogodbene',
    data: POGODBENE_DRILL_DATA,
    modes: ['irealne', 'potencijalne', 'realne'],
    category: 'conditional',
    tier: 5,
  },
  {
    id: 'odredjenost',
    data: ODREDJENOST_DRILL_DATA,
    modes: ['oblik', 'padez', 'znacenje'],
    category: 'nominative',
    tier: 4,
  },
  {
    id: 'datumi',
    data: DATUMI_DRILL_DATA,
    modes: ['datum', 'redni', 'vrijeme'],
    category: 'numerals',
    tier: 4,
  },
  {
    id: 'sklonidbabrojeva',
    data: SKLONIDBA_BROJEVA_DRILL_DATA,
    modes: ['brojevne', 'dvatri', 'obadvoje'],
    category: 'numerals',
    tier: 4,
  },
  {
    id: 'namjera',
    data: NAMJERA_DRILL_DATA,
    modes: ['daprezent', 'kakobi', 'radi'],
    category: 'subordination',
    tier: 4,
  },
  {
    id: 'srocnost',
    data: SROCNOST_DRILL_DATA,
    modes: ['mjesovito', 'vecina', 'zbirne'],
    category: 'nominative',
    tier: 5,
  },
  {
    id: 'trpni',
    data: TRPNI_DRILL_DATA,
    modes: ['jotacija', 'tvorba', 'uporaba'],
    category: 'participle',
    tier: 4,
  },
  {
    id: 'infinitivda',
    data: INFINITIV_DA_DRILL_DATA,
    modes: ['daprezent', 'izbor', 'standard'],
    category: 'register',
    tier: 4,
  },
  {
    id: 'vidskiparovi',
    data: VIDSKI_PAROVI_DRILL_DATA,
    modes: ['nijansa', 'parovi', 'sekundarna'],
    category: 'aspect-imperfective',
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

describe('C1 drill-pool breadth (program tally: 21/30)', () => {
  it('the pool now offers at least 21 C1 exercises', () => {
    const c1 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'C1');
    expect(c1.length).toBeGreaterThanOrEqual(21);
  });
});
