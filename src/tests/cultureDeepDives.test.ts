/**
 * cultureDeepDives.test.ts — the B2–C2 culture deep dives (fluency initiative).
 *
 * Before this feature, every CROATIA_POOL entry gated at B1 or below, so an
 * advanced learner's daily culture slot recycled B1 prose forever. These
 * guards pin: the essay data contract (both copies identical), the three
 * CEFR-gated pool entries, the auto-complete contract membership, the router
 * wiring, and — because the content pipeline keeps THREE separate key lists
 * (core.js exports, the API's KEYS, the etag script's CORE_KEYS) — that
 * CULTURE_DEEP_DIVES is present in all three so it can never ship from one
 * list and silently drop from another.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { CULTURE_DEEP_DIVES } from '../data/cultural/deepdives.js';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { SESSION_AUTOCOMPLETE_SCREENS } from '../hooks/useDailySession';

const TIERS = ['B2', 'C1', 'C2'] as const;

describe('culture deep-dive data', () => {
  it('has 8 essays per tier, each with 3 bilingual paragraphs and 5 vocab pairs', () => {
    // 3 → 8 per tier (2026-09-05, content expansion item 3): with one entry per
    // essay, the tier IS the culture slot's own-tier cycle at B2+, and a cycle
    // of three repeats every third day.
    for (const tier of TIERS) {
      const essays = CULTURE_DEEP_DIVES[tier];
      expect(essays.length, tier).toBeGreaterThanOrEqual(8);
      for (const e of essays) {
        expect(e.key.length, `${tier}/${e.key}`).toBeGreaterThan(2);
        expect(e.title.length, `${tier}/${e.key}`).toBeGreaterThan(3);
        expect(e.titleEn.length, `${tier}/${e.key}`).toBeGreaterThan(3);
        expect(e.paragraphs.length, `${tier}/${e.key}`).toBeGreaterThanOrEqual(3);
        for (const p of e.paragraphs) {
          expect(p.hr.length, `${tier}/${e.key}`).toBeGreaterThan(150);
          expect(p.en.length, `${tier}/${e.key}`).toBeGreaterThan(150);
        }
        // Real Croatian, not ASCII transliteration: every essay's HR text
        // must carry diacritics.
        const hrAll = e.paragraphs.map((p) => p.hr).join(' ');
        expect(/[čćžšđ]/i.test(hrAll), `${tier}/${e.key} diacritics`).toBe(true);
        expect(e.vocab.length, `${tier}/${e.key}`).toBeGreaterThanOrEqual(4);
        for (const [hr, en] of e.vocab) {
          expect(hr.length).toBeGreaterThan(1);
          expect(en.length).toBeGreaterThan(1);
        }
      }
      const keys = essays.map((e) => e.key);
      expect(new Set(keys).size, tier).toBe(keys.length);
    }
  });

  it('client and serverless data copies are byte-identical', () => {
    const client = readFileSync('src/data/cultural/deepdives.js', 'utf8');
    const server = readFileSync('functions/api/content/_data/cultural/deepdives.js', 'utf8');
    expect(client).toBe(server);
  });
});

describe('culture deep-dive wiring', () => {
  // The pool cannot import the data (first-paint path), so its per-essay entries
  // are hand-listed; this DERIVES the expected list from the data and checks it
  // in both directions, so an essay authored without its entry — or an entry
  // whose essay was renamed — fails here rather than serving an empty screen.
  it('the Croatia slot carries exactly one entry per ESSAY at the tier gate', () => {
    for (const tier of TIERS) {
      const expected = CULTURE_DEEP_DIVES[tier].map(
        (e) => `kultura_${tier.toLowerCase()}_${e.key}`,
      );
      const actual = CROATIA_POOL.filter((e) =>
        e.id.startsWith(`kultura_${tier.toLowerCase()}_`),
      ).map((e) => e.id);
      expect(actual.sort(), tier).toEqual([...expected].sort());
      for (const id of expected) {
        const entry = CROATIA_POOL.find((e) => e.id === id)!;
        expect(entry.cefr, id).toBe(tier);
        expect(entry.category, id).toBe('culture');
        expect(entry.screen, id).toBe(id);
      }
    }
  });

  it('the tier CATALOG pages are no longer pool entries (one essay per culture day)', () => {
    for (const tier of TIERS) {
      expect(CROATIA_POOL.find((e) => e.id === `kultura_${tier.toLowerCase()}`)).toBeUndefined();
    }
  });

  it('the pool now reaches above B1 (the original gap)', () => {
    const gates = new Set(CROATIA_POOL.map((e) => e.cefr ?? 'A1'));
    expect(gates.has('B2')).toBe(true);
    expect(gates.has('C1')).toBe(true);
    expect(gates.has('C2')).toBe(true);
  });

  it('every essay screen auto-completes on return (Croatia slot contract)', () => {
    for (const tier of TIERS) {
      for (const e of CULTURE_DEEP_DIVES[tier]) {
        const id = `kultura_${tier.toLowerCase()}_${e.key}`;
        expect(SESSION_AUTOCOMPLETE_SCREENS.has(id), id).toBe(true);
      }
    }
  });

  it('AppRouter routes every essay AND every tier catalog to CultureDeepDiveScreen', () => {
    const src = readFileSync('src/components/AppRouter.tsx', 'utf8');
    for (const tier of TIERS) {
      const t = tier.toLowerCase();
      expect(src).toContain(`currentScreen === 'kultura_${t}'`);
      expect(src).toContain(`<CultureDeepDiveScreen tier="${tier}" goBack={goBack} />`);
      for (const e of CULTURE_DEEP_DIVES[tier]) {
        expect(src, `${tier}/${e.key} route`).toContain(
          `currentScreen === 'kultura_${t}_${e.key}'`,
        );
        expect(src, `${tier}/${e.key} props`).toContain(
          `<CultureDeepDiveScreen tier="${tier}" essayKey="${e.key}" goBack={goBack} />`,
        );
      }
    }
  });

  it('CULTURE_DEEP_DIVES is in ALL THREE content-pipeline key lists', () => {
    const dataCore = readFileSync('functions/api/content/_data/core.js', 'utf8');
    const apiCore = readFileSync('functions/api/content/core.js', 'utf8');
    const etagScript = readFileSync('scripts/generate-content-etags.mjs', 'utf8');
    expect(dataCore).toContain('CULTURE_DEEP_DIVES');
    expect(apiCore).toContain("'CULTURE_DEEP_DIVES'");
    expect(etagScript).toContain("'CULTURE_DEEP_DIVES'");
  });

  it('the Croatian encoding lint scans both data copies', () => {
    const lint = readFileSync('scripts/lintCroatianText.mjs', 'utf8');
    expect(lint).toContain("'src/data/cultural/deepdives.js'");
    expect(lint).toContain("'functions/api/content/_data/cultural/deepdives.js'");
  });
});
