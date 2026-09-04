/**
 * vocabPool.test.ts — the level-gated vocabulary deck (2026-09-04).
 *
 * THE FINDING: every review/flashcard/quiz pool was `ALL_CATS.flatMap(V)`, a
 * 56-name list hardcoded in App.tsx. The server had 89 levelled categories plus
 * 17 composed aliases; the list knew 56 of them and none of the B1 band, so
 * 1,030 of the 2,357 core words — and all 2,163 words of the B2–C2 tiers — were
 * unreachable by any drill, at any level. The deck is now DERIVED from the
 * payload's V_LEVELS (src/lib/vocabPool.ts).
 *
 * These tests run the derivation against the REAL server payload (house
 * precedent: vocab-structure, vocabulary-coverage), never a restatement of it.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import * as CORE from '../../functions/api/content/_data/core.js';
import {
  vocabCategories,
  vocabPool,
  vocabPoolWords,
  acquisitionPool,
  categoryLevel,
  type VocabSource,
} from '../lib/vocabPool';
import { CEFR_ORDER, cefrRank, type CefrLevel } from '../lib/cefr';

const SRC = CORE as unknown as VocabSource;
const V = CORE.V as Record<string, string[][]>;
const LV = CORE.V_LEVELS as Record<string, CefrLevel>;
const NONE = new Set<string>();
const lemmas = (rows: unknown[][]) => new Set(rows.map((w) => (w[0] as string).toLowerCase()));
const tierLemmas = (t: Record<string, unknown>) => lemmas(Object.values(t).flat() as unknown[][]);

describe('the payload carries the map the deck is derived from', () => {
  it('every V category is levelled, except the pinned exclusion', () => {
    const unlevelled = Object.keys(V).filter((k) => !LV[k] && !CORE.V_POOL_EXCLUDED.includes(k));
    expect(unlevelled).toEqual([]);
    expect(CORE.V_POOL_EXCLUDED).toEqual(['Alphabet']);
  });

  it('the hardcoded list was genuinely behind the payload (the census this replaces)', () => {
    // The 56 names that were in App.tsx before this change. Kept here ONLY so the
    // gap is re-runnable rather than a number in a commit message: with the real
    // payload, 40+ levelled categories and ≥1,000 words sat outside it.
    const OLD = new Set(
      'greetings|numbers|family|inlaws|colors|months|directions|shopping|conjunctions|culture|daily routine|in the classroom|commands at home|fairy tales|hobbies|health|zagreb|animals|body & face|home & rooms|clothing|weather & seasons|time & calendar|transport|questions|restaurant|places|adjectives|emotions|opposites|comparatives|professions|travel|food|kafic|verbs|fruits|vegetables|sports|holidays|imendan|personality|work|opinions|environment|society|civic|life_events|easter|At the Airport|At the Restaurant|At the Doctor|At the Beach|At the Market|Meeting People|Emergency'.split(
        '|',
      ),
    );
    const missing = Object.keys(LV).filter((k) => !OLD.has(k));
    expect(missing.length).toBeGreaterThanOrEqual(40);
    const missingWords = missing.reduce((n, k) => n + (V[k]?.length ?? 0), 0);
    expect(missingWords).toBeGreaterThanOrEqual(1000);
    // ...and every one of them is now reachable at B1.
    const pool = lemmas(vocabPool(SRC, 'B1', { tracked: NONE }));
    for (const k of missing.filter((k) => cefrRank(LV[k]!) <= cefrRank('B1'))) {
      for (const w of V[k]!) expect(pool.has(w[0]!.toLowerCase()), `${k}: ${w[0]}`).toBe(true);
    }
  });
});

describe('vocabCategories — derived from V_LEVELS, gated by level', () => {
  it.each(CEFR_ORDER)('at %s returns exactly the categories tagged at or below', (level) => {
    const got = vocabCategories(SRC, level);
    const want = Object.keys(V).filter((k) => LV[k] && cefrRank(LV[k]!) <= cefrRank(level));
    expect([...got].sort()).toEqual(want.sort());
    // Ascending by level — a browse list reads A1 first.
    const ranks = got.map((k) => cefrRank(LV[k]!));
    for (let i = 1; i < ranks.length; i++) expect(ranks[i]).toBeGreaterThanOrEqual(ranks[i - 1]!);
  });

  it('never includes the excluded key', () => {
    expect(vocabCategories(SRC, 'C2')).not.toContain('Alphabet');
  });

  it('A1 is no longer the whole hardcoded list: B1 categories are gated out', () => {
    const a1 = vocabCategories(SRC, 'A1');
    expect(a1).toContain('greetings');
    expect(a1).not.toContain('conjunctions'); // B1, but was in ALL_CATS for every learner
  });

  it('categoryLevel reads the tag, null when untagged', () => {
    expect(categoryLevel(SRC, 'greetings')).toBe('A1');
    expect(categoryLevel(SRC, 'conjunctions')).toBe('B1');
    expect(categoryLevel(SRC, 'journalism')).toBe('B2');
    expect(categoryLevel(SRC, 'Alphabet')).toBeNull();
    expect(categoryLevel(null, 'greetings')).toBeNull();
  });
});

describe('vocabPool — the advanced tiers are reachable, at their level and not below', () => {
  const B2 = tierLemmas(CORE.V_B2 as Record<string, unknown>);
  const C1 = tierLemmas(CORE.V_C1 as Record<string, unknown>);
  const C2 = tierLemmas(CORE.V_C2 as Record<string, unknown>);

  // The tiers overlap the core (measured: V∩B2 184 lemmas, B2∩C1 72, C1∩C2 35)
  // and a lemma is served at the LOWEST band that carries it, so "absent" is
  // asserted only for lemmas whose every source sits above the learner.
  const coreLemmasUpTo = (level: CefrLevel) =>
    lemmas(
      Object.keys(LV)
        .filter((k) => cefrRank(LV[k]!) <= cefrRank(level))
        .flatMap((k) => V[k]!),
    );

  it('B1: nothing whose only source is a tier', () => {
    const pool = lemmas(vocabPool(SRC, 'B1', { tracked: NONE }));
    const low = coreLemmasUpTo('B1');
    let checked = 0;
    for (const w of [...B2, ...C1, ...C2]) {
      if (low.has(w)) continue;
      expect(pool.has(w), w).toBe(false);
      checked++;
    }
    expect(checked).toBeGreaterThan(1500); // non-vacuity: the tiers ARE mostly new words
  });

  it('B2: every V_B2 lemma, nothing whose only source is C1/C2', () => {
    const pool = lemmas(vocabPool(SRC, 'B2', { tracked: NONE }));
    for (const w of B2) expect(pool.has(w), w).toBe(true);
    const low = new Set([...coreLemmasUpTo('B2'), ...B2]);
    for (const w of [...C1, ...C2]) if (!low.has(w)) expect(pool.has(w), w).toBe(false);
  });

  it('C2: every lemma of every band', () => {
    const pool = lemmas(vocabPool(SRC, 'C2', { tracked: NONE }));
    for (const w of [...B2, ...C1, ...C2]) expect(pool.has(w), w).toBe(true);
    for (const k of Object.keys(LV))
      for (const w of V[k]!) expect(pool.has(w[0]!.toLowerCase())).toBe(true);
    expect(pool.size).toBeGreaterThan(4000);
  });

  it('is deduped by lemma (aliases and cross-tier repeats collapse)', () => {
    const pool = vocabPool(SRC, 'C2', { tracked: NONE });
    expect(new Set(pool.map((w) => w[0]!.toLowerCase())).size).toBe(pool.length);
  });

  it('every row is a servable [hr, en] pair', () => {
    for (const w of vocabPool(SRC, 'C2', { tracked: NONE })) {
      expect(typeof w[0]).toBe('string');
      expect(typeof w[1]).toBe('string');
      expect(w[0]!.length).toBeGreaterThan(0);
    }
  });
});

describe('ordering IS the acquisition path', () => {
  it.each(CEFR_ORDER)('at %s the pool opens with the learner’s own band', (level) => {
    // getPrioritizedReviewQueue tops a thin review up with the first unseen words
    // in pool order — so new words must enter from the band being worked at,
    // not from `greetings` for everyone.
    const pool = vocabPool(SRC, level, { tracked: NONE });
    const own = lemmas(acquisitionPool(SRC, level, { tracked: NONE }));
    const head = pool.slice(0, 50);
    for (const w of head) expect(own.has(w[0]!.toLowerCase()), `${level}: ${w[0]}`).toBe(true);
  });

  it('bands descend after the learner’s own: at B1, A2 words precede A1 words', () => {
    const pool = vocabPool(SRC, 'B1', { tracked: NONE });
    // A lemma carried by two bands is served in the HIGHER one (own band first,
    // dedupe keeps the first), so the band of a word is the max of its tags —
    // over the bands the learner can be served from; a B2 alias that repeats a
    // B1 word (literature ∋ istraživanje) is not where a B1 learner met it.
    const bandOf = new Map<string, number>();
    for (const k of Object.keys(LV)) {
      if (cefrRank(LV[k]!) > cefrRank('B1')) continue;
      for (const w of V[k]!) {
        const key = w[0]!.toLowerCase();
        bandOf.set(key, Math.max(bandOf.get(key) ?? 0, cefrRank(LV[k]!)));
      }
    }
    const seq = pool.map((w) => bandOf.get(w[0]!.toLowerCase()) ?? 0);
    for (let i = 1; i < seq.length; i++) expect(seq[i]).toBeLessThanOrEqual(seq[i - 1]!);
  });
});

describe('acquisitionPool — own band plus what is already being tracked', () => {
  it('a C1 learner with empty SRS meets C1 words only', () => {
    const own = lemmas(acquisitionPool(SRC, 'C1', { tracked: NONE }));
    const C1 = tierLemmas(CORE.V_C1 as Record<string, unknown>);
    expect(own.size).toBe(C1.size);
    for (const w of C1) expect(own.has(w)).toBe(true);
    expect(own.has('hvala')).toBe(false); // A1
  });

  it('a lower-band word already in SRS stays in the C1 acquisition deck', () => {
    const own = lemmas(acquisitionPool(SRC, 'C1', { tracked: new Set(['Hvala']) }));
    expect(own.has('hvala')).toBe(true);
  });

  it('an A1 learner gets an A1 deck that includes the situational aliases', () => {
    const own = lemmas(acquisitionPool(SRC, 'A1', { tracked: NONE }));
    expect(own.has('aerodrom')).toBe(true); // 'At the Airport', A1
    expect(own.has('novinar')).toBe(false); // journalism, B2
    expect(own.size).toBeGreaterThan(500);
  });
});

describe('a tracked card never becomes unservable (the demotion case)', () => {
  it('a word from a band ABOVE the learner stays in vocabPool while SRS tracks it', () => {
    const C2 = tierLemmas(CORE.V_C2 as Record<string, unknown>);
    const [word] = [...C2];
    const original = (
      Object.values(CORE.V_C2 as Record<string, string[][]>).flat() as string[][]
    ).find((w) => w[0]!.toLowerCase() === word)![0]!;
    expect(lemmas(vocabPool(SRC, 'A1', { tracked: NONE })).has(word!)).toBe(false);
    expect(lemmas(vocabPool(SRC, 'A1', { tracked: new Set([original]) })).has(word!)).toBe(true);
  });
});

describe('Home and Review agree by construction', () => {
  it('vocabPoolWords is exactly the lemma set of vocabPool', () => {
    for (const level of CEFR_ORDER) {
      const words = vocabPoolWords(SRC, level, { tracked: NONE });
      const pool = vocabPool(SRC, level, { tracked: NONE });
      expect(words.size).toBe(pool.length);
      for (const w of pool) expect(words.has(w[0]!)).toBe(true);
    }
  });
});

describe('absence degrades to the old width, never to nothing', () => {
  const noLevels: VocabSource = {
    V: { a: [['x', 'y']], b: [['p', 'q']] },
    V_B2: { t: [['z', 'w']] },
  };

  it('no V_LEVELS → every V category, no tiers', () => {
    expect(vocabCategories(noLevels, 'A1')).toEqual(['a', 'b']);
    expect(vocabPool(noLevels, 'C2').map((w) => w[0])).toEqual(['x', 'p']);
    expect(acquisitionPool(noLevels, 'C2').map((w) => w[0])).toEqual(['x', 'p']);
  });

  it('no content → empty, not a throw', () => {
    expect(vocabCategories(null, 'A1')).toEqual([]);
    expect(vocabPool(undefined, 'A1')).toEqual([]);
    expect(acquisitionPool({}, 'A1')).toEqual([]);
  });

  it('the fixture override bypasses gating and tiers', () => {
    const src: VocabSource = {
      V: { basics: [['jedan', 'one']], hi: [['bog', 'hi']] },
      V_LEVELS: { basics: 'C2', hi: 'A1' },
    };
    expect(vocabCategories(src, 'A1', { cats: ['basics'] })).toEqual(['basics']);
    expect(vocabPool(src, 'A1', { cats: ['basics'] }).map((w) => w[0])).toEqual(['jedan']);
    expect(acquisitionPool(src, 'A1', { cats: ['basics'] }).map((w) => w[0])).toEqual(['jedan']);
  });

  it('an empty own band falls back to the whole pool rather than stranding a launch', () => {
    const src: VocabSource = { V: { hi: [['bog', 'hi']] }, V_LEVELS: { hi: 'A1' } };
    expect(acquisitionPool(src, 'B2', { tracked: NONE }).map((w) => w[0])).toEqual(['bog']);
  });
});

describe('the wiring — the derivation is what production reads', () => {
  const read = (p: string) => readFileSync(p, 'utf8');

  it('App.tsx no longer carries a hardcoded category list', () => {
    const src = read('src/App.tsx');
    expect(src).not.toMatch(/const ALL_CATS\s*=/);
    expect(src).not.toMatch(/'At the Airport'/);
  });

  it.each([
    ['src/components/practice/ReviewScreen.tsx', /vocabPool\(content, level/],
    ['src/components/home/HomeTab.tsx', /vocabPoolWords\(content, vocabLvl\)/],
    ['src/components/grad/GradTab.tsx', /acquisitionPool\(content, vocabLevel\(/],
    [
      'src/components/learn/BrowseContentModal.tsx',
      /vocabCategories\(coreContent, vocabLevel\(stats\)\)/,
    ],
    ['src/hooks/useScreenLauncher.ts', /acquisitionPool\(src, vocabLevel\(\)/],
  ])('%s builds its deck from lib/vocabPool', (file, call) => {
    const src = read(file);
    expect(src).toMatch(/from '(\.\.\/)+lib\/vocabPool'/);
    expect(src).toMatch(call);
  });

  it('no deck consumer still flattens a category list over V by hand', () => {
    for (const file of [
      'src/components/practice/ReviewScreen.tsx',
      'src/components/home/HomeTab.tsx',
      'src/components/grad/GradTab.tsx',
      'src/hooks/useScreenLauncher.ts',
    ]) {
      // Comments stripped: the launcher's header quotes the old shape by name.
      const code = read(file)
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
      expect(code, file).not.toMatch(
        /allCats\s*\.flatMap|_cats\.flatMap|Object\.keys\(V\)\.flatMap/,
      );
    }
  });

  it('the payload key list, its test and the etag generator all ship V_LEVELS', () => {
    expect(read('functions/api/content/core.js')).toMatch(/'V_LEVELS'/);
    expect(read('functions/api/content/__tests__/core.test.js')).toMatch(/'V_LEVELS'/);
    expect(read('scripts/generate-content-etags.mjs')).toMatch(/'V_LEVELS'/);
    expect(read('e2e/fixtures/content-fixture.js')).toMatch(/\bV_LEVELS,/);
    expect(read('src/types/content.ts')).toMatch(/V_LEVELS: Record<string, string>/);
  });
});
