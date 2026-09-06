/**
 * cityOfDayGraded.test.tsx — graded Croatian on City of the Day
 * (content expansion item 6, geography half, 2026-09-05/06).
 *
 * City of the Day was English prose plus three Croatian words per city, for
 * 364 cities, with no Croatian text field at all. Every city now has a Croatian
 * intro in THREE bands — `introHrA1`, `introHr` (the B1 baseline, same
 * convention as HISTORY) and `introHrC1` — in `src/data/cultural/geographyHr.js`
 * (its own lazy chunk; NOT on the city record, which is spread into the core
 * payload). The screen picks by the learner's level through lib/gradedHr, which
 * walks DOWN to the nearest band: A2 reads A1, B2 reads B1, C2 reads C1, and the
 * chip names the band it actually served rather than claiming "at your level".
 *
 * Pinned here, each of which failed on its own during the build:
 *  - COVERAGE is derived, never restated: every city in CROATIAN_CITIES has an
 *    entry, no entry names a city that does not exist (a renamed city would
 *    silently lose its Croatian), and the pool flag `adaptive` follows a rule
 *    derived from the bands — not from a number someone typed.
 *  - the DATA: every city has all three bands, genuinely different, lengths that
 *    rise with the band, real Croatian, no stray band names.
 *  - the SCREEN: a component test with a REAL graded city at every level,
 *    because a picker nobody calls would pass the data pins; plus the
 *    degrade path (a city with no entry renders as before).
 *  - the two geography copies stay byte-identical, and the graded module is in
 *    the lint TARGETS (a module outside them is unlinted Croatian).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';
import { CROATIAN_CITIES } from '../data/cultural/geography.js';
import { CITY_INTRO_HR } from '../data/cultural/geographyHr.js';
import { CROATIA_POOL, CITY_OF_DAY_SLOT_MAX_CEFR } from '../lib/croatiaPool';
import { pickGradedHr, gradedField } from '../lib/gradedHr';
import { CEFR_ORDER, cefrRank } from '../lib/cefr';

type City = Record<string, unknown> & { name: string };
type Rec = Record<string, unknown>;
const cities = CROATIAN_CITIES as City[];
const hr = CITY_INTRO_HR as Record<string, Rec>;
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

  it('the pool flag follows the bands: adaptive only if every slot-served level has its OWN band', () => {
    // `adaptive` makes croatiaReason say "Culture at your level." City of the
    // Day is served by the slot at levels ≤ CITY_OF_DAY_SLOT_MAX_CEFR (A1–A2);
    // with A1/B1/C1 bands an A2 learner reads A1, so the claim would be false.
    // Derived, so adding an A2 band flips the expectation and names why.
    const served = CEFR_ORDER.filter((l) => cefrRank(l) <= cefrRank(CITY_OF_DAY_SLOT_MAX_CEFR));
    const ownBandEverywhere = served.every((l) =>
      names.every((n) => typeof hr[n]?.[gradedField('introHr', l)] === 'string'),
    );
    const entry = CROATIA_POOL.find((c) => c.id === 'cityofday')!;
    expect(
      Boolean(entry.adaptive),
      ownBandEverywhere
        ? 'every slot-served level has its own band — mark cityofday adaptive'
        : `levels ${served.join('/')} are slot-served but not all have their own band — cityofday must not be adaptive`,
    ).toBe(ownBandEverywhere);
    // and the premise this test reasons from, stated:
    expect(served).toEqual(['A1', 'A2']);
    expect(ownBandEverywhere).toBe(false);
  });

  it('the two geography copies are byte-identical', () => {
    const a = readFileSync('src/data/cultural/geography.js', 'utf8');
    const b = readFileSync('functions/api/content/_data/cultural/geography.js', 'utf8');
    expect(a).toBe(b);
  });

  it('the graded module is in the Croatian lint TARGETS and in its own vite chunk', () => {
    const lint = readFileSync('scripts/lintCroatianText.mjs', 'utf8');
    expect(lint).toContain("'src/data/cultural/geographyHr.js'");
    const vite = readFileSync('vite.config.js', 'utf8');
    const hrRule = vite.indexOf("'src/data/cultural/geographyHr'");
    const geoRule = vite.indexOf("'src/data/cultural/geography')");
    expect(hrRule).toBeGreaterThan(-1);
    // the substring rule for geography would swallow geographyHr if it came first
    expect(hrRule).toBeLessThan(geoRule);
    expect(vite).toMatch(/geographyHr'\)\)\s*return 'chunk-geo-hr'/);
  });

  it('only CityOfDayScreen imports the graded module (the Home card and core must not)', () => {
    const card = readFileSync('src/components/home/CityOfDayCard.tsx', 'utf8');
    expect(card).not.toContain('geographyHr');
    const core = readFileSync('functions/api/content/_data/core.js', 'utf8');
    expect(core).not.toContain('geographyHr');
    const scr = readFileSync('src/components/croatia/CityOfDayScreen.tsx', 'utf8');
    expect(scr).toContain("from '../../data/cultural/geographyHr.js'");
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

  it('register rises with band: A1 short and simple, B1 a paragraph, C1 substantial', () => {
    for (const n of names) {
      const r = hr[n]!;
      const a1 = words(r.introHrA1);
      const b1 = words(r.introHr);
      const c1 = words(r.introHrC1);
      expect(a1, `${n} A1 stays short`).toBeLessThanOrEqual(55);
      expect(b1, `${n} B1 is a paragraph`).toBeGreaterThanOrEqual(60);
      expect(c1, `${n} C1 is substantial`).toBeGreaterThanOrEqual(100);
      expect(a1, `${n} A1 < B1`).toBeLessThan(b1);
      expect(b1, `${n} B1 < C1`).toBeLessThan(c1);
    }
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

  it('the picker walks down to the nearest band on a three-band record', () => {
    const c = hr[names[0]!]!;
    expect(pickGradedHr(c, 'introHr', 'A1')).toMatchObject({ level: 'A1', atLevel: true });
    expect(pickGradedHr(c, 'introHr', 'A2')).toMatchObject({ level: 'A1', atLevel: false });
    expect(pickGradedHr(c, 'introHr', 'B1')).toMatchObject({ level: 'B1', atLevel: true });
    expect(pickGradedHr(c, 'introHr', 'B2')).toMatchObject({ level: 'B1', atLevel: false });
    expect(pickGradedHr(c, 'introHr', 'C1')).toMatchObject({ level: 'C1', atLevel: true });
    expect(pickGradedHr(c, 'introHr', 'C2')).toMatchObject({ level: 'C1', atLevel: false });
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
  ] as const)('at %s renders the %s band and the chip is honest about it', (l, band, atLevel) => {
    mockLevel = l;
    render(<CityOfDayScreen goBack={vi.fn()} />);
    expect(screen.getByText(String(dubrovnikHr[gradedField('introHr', band)]))).toBeInTheDocument();
    for (const other of BANDS) {
      if (other !== band)
        expect(screen.queryByText(String(dubrovnikHr[gradedField('introHr', other)]))).toBeNull();
    }
    expect(screen.getByTestId('cityofday-reading-level').textContent).toBe(
      atLevel ? `Croatian at your level · ${band}` : `Croatian · ${band}`,
    );
    // the English intro still renders — the Croatian is added, not swapped in
    expect(screen.getByText(String(dubrovnik.intro))).toBeInTheDocument();
  });

  it('a city with no graded entry renders exactly as before: no Croatian block, no chip', () => {
    // Every real city has an entry now, so the degrade path is driven with a
    // city whose name the map cannot know — the shape a renamed city would take.
    mockLevel = 'B1';
    mockCity = { ...dubrovnik, name: 'Nepostojeći Grad' };
    render(<CityOfDayScreen goBack={vi.fn()} />);
    expect(screen.queryByTestId('cityofday-graded-hr')).toBeNull();
    expect(screen.queryByTestId('cityofday-reading-level')).toBeNull();
    expect(screen.getByText(String(dubrovnik.intro))).toBeInTheDocument();
  });

  it('still marks itself visited on mount (the session builder reads this key)', () => {
    render(<CityOfDayScreen goBack={vi.fn()} />);
    expect(localStorage.getItem('nh_cityofday_date')).toBeTruthy();
  });
});
