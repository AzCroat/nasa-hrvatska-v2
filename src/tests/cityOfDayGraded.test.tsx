/**
 * cityOfDayGraded.test.tsx — graded Croatian on City of the Day
 * (content expansion item 6, geography half, 2026-09-05/06; split per band
 * 2026-09-07).
 *
 * City of the Day was English prose plus three Croatian words per city, for
 * 364 cities, with no Croatian text field at all. Every city now has a Croatian
 * intro in THREE bands — `introHrA1`, `introHr` (the B1 baseline, same
 * convention as HISTORY) and `introHrC1` — each in its OWN module under
 * `src/data/cultural/cityHr/`, dynamically imported by the screen so a learner
 * downloads the band they read and no other. `resolveCityHrBand` walks DOWN to
 * the nearest SHIPPED band: A2 reads A1, B2 reads B1, C2 reads C1, and the chip
 * names the band it actually served rather than claiming "at your level".
 *
 * Pinned here, each of which failed on its own during the build:
 *  - COVERAGE is derived, never restated: every city in CROATIAN_CITIES has an
 *    entry, no entry names a city that does not exist (a renamed city would
 *    silently lose its Croatian), and the pool flag `adaptive` follows a rule
 *    derived from the bands — not from a number someone typed.
 *  - the SPLIT: `CITY_HR_BANDS` equals the band files on disk (Vite needs a
 *    literal import path per band, so that list is hand-written and decays like
 *    any hand-written list); every band file is in the lint TARGETS; each gets
 *    its own `chunk-geo-hr-*` chunk, whose prefix is what the service worker's
 *    `chunk-geo*` precache exclusion matches; and NOTHING statically imports a
 *    band, which would put the whole corpus back in the screen's chunk graph.
 *  - the DATA: every city has all three bands, genuinely different, lengths that
 *    rise with the band, real Croatian, no stray band names.
 *  - the SCREEN: a component test with a REAL graded city at every level,
 *    because a picker nobody calls would pass the data pins; plus the
 *    degrade path (a city with no entry renders as before).
 *  - the two geography copies stay byte-identical.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';
import { CROATIAN_CITIES } from '../data/cultural/geography.js';
import { readdirSync } from 'node:fs';
import { CITY_INTRO_HR_A1 } from '../data/cultural/cityHr/A1.js';
import { CITY_INTRO_HR_B1 } from '../data/cultural/cityHr/B1.js';
import { CITY_INTRO_HR_C1 } from '../data/cultural/cityHr/C1.js';
import { CROATIA_POOL, CITY_OF_DAY_SLOT_MAX_CEFR } from '../lib/croatiaPool';
import { gradedField } from '../lib/gradedHr';
import { CITY_HR_BANDS, resolveCityHrBand, loadCityHrBand } from '../lib/cityIntroHr';
import { CEFR_ORDER } from '../lib/cefr';
import { BAND_RULES, checkCity, wordsIn } from '../../scripts/cityHrBandRules.mjs';

type City = Record<string, unknown> & { name: string };
type Rec = Record<string, unknown>;
const cities = CROATIAN_CITIES as City[];
/**
 * The corpus is one module PER BAND now, so the data assertions below rebuild
 * the merged view they were written against. That merge is also the check that
 * the split is complete: a city missing from one band file shows up here as a
 * missing band, in the same assertion that has always covered it.
 */
const BAND_MODULES: Record<string, Record<string, Rec>> = {
  A1: CITY_INTRO_HR_A1 as Record<string, Rec>,
  B1: CITY_INTRO_HR_B1 as Record<string, Rec>,
  C1: CITY_INTRO_HR_C1 as Record<string, Rec>,
};
const hr: Record<string, Rec> = {};
for (const mod of Object.values(BAND_MODULES))
  for (const [city, rec] of Object.entries(mod)) hr[city] = { ...(hr[city] ?? {}), ...rec };
const names = cities.map((c) => c.name);
const BANDS = ['A1', 'B1', 'C1'] as const;
const words = (s: unknown) =>
  String(s ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

describe('City of the Day — graded Croatian coverage (derived)', () => {
  it('EVERY city has a graded entry, and every entry names a real city', () => {
    const missing = names.filter((n) => !hr[n]);
    expect(missing, `ungraded cities: ${missing.slice(0, 8).join(', ')}`).toEqual([]);
    const orphans = Object.keys(hr).filter((k) => !names.includes(k));
    expect(orphans, 'entries whose city no longer exists').toEqual([]);
    expect(Object.keys(hr).length).toBe(cities.length);
  });

  it('the city record itself carries NO introHr* fields (they must not ride the core payload)', () => {
    for (const c of cities) {
      expect(
        Object.keys(c).some((k) => /^introHr/.test(k)),
        `${c.name} has a graded field on the record`,
      ).toBe(false);
    }
  });

  it('the pool entry names its own-tier levels from the bands, and is adaptive only if that is every level', () => {
    // OWNER DECISION (2026-09-06): City of the Day is back in the B1+ rotation.
    // The slot says "Culture at your level." for an own-tier pick, so the entry
    // may claim own tier ONLY at levels where every city has that band; with
    // A1/B1/C1 bands a B2 learner reads B1 and the claim would be false there.
    // `ownAtLevels` is DERIVED here from the data: authoring an A2 band for
    // every city changes the expectation and the failure message names it.
    const bandLevels = CEFR_ORDER.filter((l) =>
      names.every((n) => typeof hr[n]?.[gradedField('introHr', l)] === 'string'),
    );
    const entry = CROATIA_POOL.find((c) => c.id === 'cityofday')!;
    expect(
      [...(entry.ownAtLevels ?? [])],
      'ownAtLevels must equal the fully-banded levels',
    ).toEqual(bandLevels);
    const everyLevel = bandLevels.length === CEFR_ORDER.length;
    expect(
      Boolean(entry.adaptive),
      everyLevel
        ? 'every level has its own band — ownAtLevels is redundant, mark cityofday adaptive'
        : `levels ${CEFR_ORDER.filter((l) => !bandLevels.includes(l)).join('/')} lack their own band — cityofday must not be adaptive`,
    ).toBe(everyLevel);
    // the premise stated, so a silent band change cannot pass unnoticed
    expect(bandLevels).toEqual(['A1', 'B1', 'C1']);
    // and the first-claim ritual is unchanged by the rotation decision
    expect(CITY_OF_DAY_SLOT_MAX_CEFR).toBe('A2');
  });

  it('the two geography copies are byte-identical', () => {
    const a = readFileSync('src/data/cultural/geography.js', 'utf8');
    const b = readFileSync('functions/api/content/_data/cultural/geography.js', 'utf8');
    expect(a).toBe(b);
  });

  it('CITY_HR_BANDS names exactly the band modules that exist on disk', () => {
    // Vite needs a literal path per dynamic import, so the list is hand-written
    // — which means it decays like any hand-written list. Derive the truth from
    // the directory: a band authored without being listed never loads, and a
    // band listed without being authored resolves to an import that throws.
    const onDisk = readdirSync('src/data/cultural/cityHr')
      .filter((f) => /^[A-C][12]\.js$/.test(f))
      .map((f) => f.replace('.js', ''))
      .sort((a, b) => CEFR_ORDER.indexOf(a as never) - CEFR_ORDER.indexOf(b as never));
    expect([...CITY_HR_BANDS], 'CITY_HR_BANDS vs the files').toEqual(onDisk);
    expect(Object.keys(BAND_MODULES).sort()).toEqual([...onDisk].sort());
  });

  it('every band module is in the Croatian lint TARGETS and gets its own vite chunk', () => {
    const lint = readFileSync('scripts/lintCroatianText.mjs', 'utf8');
    for (const b of CITY_HR_BANDS)
      expect(lint, `${b} band outside TARGETS is unlinted Croatian`).toContain(
        `'src/data/cultural/cityHr/${b}.js'`,
      );
    const vite = readFileSync('vite.config.js', 'utf8');
    // The `chunk-geo-hr-` prefix is what keeps these out of the SW precache,
    // which matches `**/chunk-geo*.js` — an auto-named chunk would be precached.
    expect(vite).toMatch(/cityHr\\\/\(\[A-C\]\[12\]\)/);
    expect(vite).toMatch(/return `chunk-geo-hr-\$\{band\[1\]\.toLowerCase\(\)\}`/);
    const sw = readFileSync('vite.config.js', 'utf8');
    expect(sw).toContain("'**/chunk-geo*.js'");
  });

  it('nothing STATICALLY imports the corpus — the screen loads one band, the card and core neither', () => {
    const card = readFileSync('src/components/home/CityOfDayCard.tsx', 'utf8');
    expect(card).not.toContain('cityHr');
    const core = readFileSync('functions/api/content/_data/core.js', 'utf8');
    expect(core).not.toContain('cityHr');
    const scr = readFileSync('src/components/croatia/CityOfDayScreen.tsx', 'utf8');
    // A static import would put every band back in the screen's chunk graph,
    // which is the 710-KB-for-240-KB shape the split exists to end.
    expect(scr).not.toMatch(/^import .*cityHr/m);
    expect(scr).toContain('loadCityHrBand');
    // and the only dynamic imports of a band are the loader's own literals
    const loader = readFileSync('src/lib/cityIntroHr.ts', 'utf8');
    for (const b of CITY_HR_BANDS)
      expect(loader).toContain(`import('../data/cultural/cityHr/${b}.js')`);
  });
});

describe('City of the Day — graded data', () => {
  it('every city carries all three bands, each a different text', () => {
    for (const n of names) {
      const texts = BANDS.map((l) => hr[n]![gradedField('introHr', l)]);
      texts.forEach((t, i) =>
        expect(typeof t === 'string' && t.trim().length > 0, `${n} ${BANDS[i]}`).toBe(true),
      );
      expect(new Set(texts).size, `${n} bands share a text`).toBe(BANDS.length);
    }
  });

  it('every city meets the band contract — word range and a strictly rising ladder', () => {
    // The contract is DATA in scripts/cityHrBandRules.mjs, shared with the
    // author's dry run (`node scripts/cityHrBandCheck.mjs`). Stating the
    // thresholds here instead would be the lesson-depth mistake: two
    // definitions, one of them enforced.
    const failures: string[] = [];
    for (const n of names) {
      const bands: Record<string, unknown> = {};
      for (const b of BANDS) bands[b] = hr[n]![gradedField('introHr', b)];
      failures.push(...(checkCity(n, bands) as string[]));
    }
    expect(failures.slice(0, 10), `${failures.length} band-contract failures`).toEqual([]);
  });

  it('the contract covers every band the ladder names, with ranges that do not overlap out of order', () => {
    // A rules file that forgot a band would let that band ship unchecked.
    for (const b of BANDS) {
      expect(BAND_RULES[b as keyof typeof BAND_RULES], `${b} has no rule`).toBeTruthy();
      const [lo, hi] = (BAND_RULES as Record<string, { words: [number, number] }>)[b]!.words;
      expect(hi).toBeGreaterThan(lo);
    }
    // and the shared word counter agrees with the local one the file already had
    expect(wordsIn('jedan dva tri')).toBe(words('jedan dva tri'));
  });

  it('every entry uses ONLY the three bands (no half-graded A2/B2/C2 siblings)', () => {
    for (const n of names) {
      const extra = Object.keys(hr[n]!).filter((k) => !/^introHr(A1|C1)?$/.test(k));
      expect(extra, `${n}`).toEqual([]);
    }
  });

  it('the corpus is real Croatian at scale: diacritics present, no encoding bleed, no Cyrillic', () => {
    const all = names.flatMap((n) => BANDS.map((l) => String(hr[n]![gradedField('introHr', l)])));
    const joined = all.join(' ');
    expect(/[čćđšž]/.test(joined)).toBe(true);
    expect(/Ä|Å¡|Å¾|Ä‡|â€|[Ѐ-ӿ]/.test(joined)).toBe(false);
    // the whole-corpus floor: three bands × 364 cities is a real reading corpus
    expect(words(joined)).toBeGreaterThanOrEqual(90000);
  });

  it('the band resolver walks down to the nearest SHIPPED band, never above', () => {
    // Same rule pickGradedHr applied per record; with one module per band it
    // has to be answered from the shipped set instead, and the answer must be
    // identical — that equivalence is what makes the split behaviour-preserving.
    expect(resolveCityHrBand('A1')).toBe('A1');
    expect(resolveCityHrBand('A2')).toBe('A1');
    expect(resolveCityHrBand('B1')).toBe('B1');
    expect(resolveCityHrBand('B2')).toBe('B1');
    expect(resolveCityHrBand('C1')).toBe('C1');
    expect(resolveCityHrBand('C2')).toBe('C1');
    // an unknown level reads the baseline, claiming nothing
    expect(resolveCityHrBand('')).toBe('B1');
    for (const l of CEFR_ORDER)
      expect(
        CEFR_ORDER.indexOf(resolveCityHrBand(l)),
        `${l} must never be served a band above it`,
      ).toBeLessThanOrEqual(CEFR_ORDER.indexOf(l));
  });
});

// ── The screen ───────────────────────────────────────────────────────────────
let mockLevel = 'B1';
vi.mock('../lib/cefr', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, getUserCefr: () => mockLevel };
});
vi.mock('../lib/cefrCertification', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, getContentUnlockLevel: (l: string) => l };
});
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0 } }),
}));
vi.mock('../data', () => ({ speak: vi.fn() }));
let mockCity: City | undefined;
vi.mock('../lib/dailyPickers', () => ({
  getCityOfDay: () => mockCity,
}));
import CityOfDayScreen from '../components/croatia/CityOfDayScreen';

const dubrovnik = cities.find((c) => c.name === 'Dubrovnik')!;
const dubrovnikHr = hr['Dubrovnik']!;

describe('CityOfDayScreen', () => {
  beforeEach(() => {
    localStorage.clear();
    mockCity = dubrovnik;
  });

  it('reads the learner CEFR through the SAME expression HomeTab hands the session builder', () => {
    const home = readFileSync('src/components/home/HomeTab.tsx', 'utf8');
    const scr = readFileSync('src/components/croatia/CityOfDayScreen.tsx', 'utf8');
    const expr = /getContentUnlockLevel\(\s*getUserCefr\(/;
    expect(home).toMatch(expr);
    expect(scr).toMatch(expr);
  });

  it.each([
    ['A1', 'A1', true],
    ['A2', 'A1', false],
    ['B1', 'B1', true],
    ['B2', 'B1', false],
    ['C1', 'C1', true],
    ['C2', 'C1', false],
  ] as const)(
    'at %s renders the %s band and the chip is honest about it',
    async (l, band, atLevel) => {
      mockLevel = l;
      render(<CityOfDayScreen goBack={vi.fn()} />);
      // The band arrives through a dynamic import, so this waits — the screen
      // paints first and the Croatian follows, which is the whole point of the
      // split. `findByText` failing here means the band never loaded at all.
      expect(
        await screen.findByText(String(dubrovnikHr[gradedField('introHr', band)])),
      ).toBeInTheDocument();
      for (const other of BANDS) {
        if (other !== band)
          expect(screen.queryByText(String(dubrovnikHr[gradedField('introHr', other)]))).toBeNull();
      }
      expect(screen.getByTestId('cityofday-reading-level').textContent).toBe(
        atLevel ? `Croatian at your level · ${band}` : `Croatian · ${band}`,
      );
      // the English intro still renders — the Croatian is added, not swapped in
      expect(screen.getByText(String(dubrovnik.intro))).toBeInTheDocument();
    },
  );

  it('a city with no graded entry renders exactly as before: no Croatian block, no chip', async () => {
    // Every real city has an entry now, so the degrade path is driven with a
    // city whose name the map cannot know — the shape a renamed city would take.
    mockLevel = 'B1';
    mockCity = { ...dubrovnik, name: 'Nepostojeći Grad' };
    render(<CityOfDayScreen goBack={vi.fn()} />);
    // "loaded and absent", not "not loaded yet" — those look identical at the
    // first paint, so settle the band first. Awaiting the loader resolves the
    // same module the component awaits (one module cache), and waitFor covers
    // the render that follows its promise.
    await loadCityHrBand('B1');
    await waitFor(() => expect(screen.getByText(String(dubrovnik.intro))).toBeInTheDocument());
    expect(screen.queryByTestId('cityofday-graded-hr')).toBeNull();
    expect(screen.queryByTestId('cityofday-reading-level')).toBeNull();
    expect(screen.getByText(String(dubrovnik.intro))).toBeInTheDocument();
  });

  it('still marks itself visited on mount (the session builder reads this key)', () => {
    render(<CityOfDayScreen goBack={vi.fn()} />);
    expect(localStorage.getItem('nh_cityofday_date')).toBeTruthy();
  });
});
