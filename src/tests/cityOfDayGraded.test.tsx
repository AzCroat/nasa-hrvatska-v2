/**
 * cityOfDayGraded.test.tsx — graded Croatian on City of the Day
 * (content expansion item 6, geography half, 2026-09-05).
 *
 * City of the Day was English prose plus three Croatian words per city, for
 * 364 cities, with no Croatian text field at all. A tranche of cities now
 * carries a Croatian intro in THREE bands — `introHrA1`, `introHr` (the B1
 * baseline, same convention as HISTORY) and `introHrC1` — and the screen picks
 * by the learner's level through lib/gradedHr, which walks DOWN to the nearest
 * band: A2 reads A1, B2 reads B1, C2 reads C1, and the chip names the band it
 * actually served rather than claiming "at your level".
 *
 * Pinned here, each of which failed on its own during the build:
 *  - COVERAGE is derived, never restated: the count of graded cities is read
 *    off the data, the floor is the tranche that shipped, and the pool flag
 *    `adaptive` must agree with whether coverage is complete — so it can be
 *    flipped neither early (a claim about ungraded days) nor forgotten late.
 *  - the DATA: every graded city has all three bands, genuinely different,
 *    lengths that rise with the band, real Croatian, no stray band names.
 *  - the SCREEN: a component test with a REAL graded city at every level,
 *    because a picker nobody calls would pass the data pins.
 *  - both geography copies are byte-identical (the screen imports the client
 *    copy; the API serves the server copy).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';
import { CROATIAN_CITIES } from '../data/cultural/geography.js';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { pickGradedHr, gradedField } from '../lib/gradedHr';

type City = Record<string, unknown> & { name: string };
const cities = CROATIAN_CITIES as City[];
const graded = cities.filter((c) => typeof c.introHr === 'string' && c.introHr.trim());
const BANDS = ['A1', 'B1', 'C1'] as const;
const words = (s: unknown) =>
  String(s ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

/** Tranche 1 (2026-09-05): 46 cities. Raise with every tranche, never lower. */
const TRANCHE_FLOOR = 46;

describe('City of the Day — graded Croatian coverage (derived)', () => {
  it(`at least ${TRANCHE_FLOOR} cities carry a graded intro, and a partial tranche is stated as partial`, () => {
    expect(graded.length).toBeGreaterThanOrEqual(TRANCHE_FLOOR);
    expect(graded.length).toBeLessThanOrEqual(cities.length);
  });

  it('the pool flag agrees with coverage: `adaptive` only when EVERY city is graded', () => {
    // `adaptive` means "own-tier for every learner at or above the gate". A day
    // on an ungraded city would make that false, so the flag waits for the
    // whole pool — and must flip the day the pool is complete.
    const entry = CROATIA_POOL.find((c) => c.id === 'cityofday')!;
    const complete = graded.length === cities.length;
    expect(
      Boolean(entry.adaptive),
      complete
        ? 'every city is graded — mark cityofday adaptive'
        : `${cities.length - graded.length} cities ungraded — cityofday must not be adaptive`,
    ).toBe(complete);
  });

  it('the two geography copies are byte-identical', () => {
    const a = readFileSync('src/data/cultural/geography.js', 'utf8');
    const b = readFileSync('functions/api/content/_data/cultural/geography.js', 'utf8');
    expect(a).toBe(b);
  });

  it('both copies are in the Croatian lint TARGETS (a graded field outside them is unlinted)', () => {
    const lint = readFileSync('scripts/lintCroatianText.mjs', 'utf8');
    expect(lint).toContain("'src/data/cultural/geography.js'");
    expect(lint).toContain("'functions/api/content/_data/cultural/geography.js'");
  });
});

describe('City of the Day — graded data', () => {
  it('every graded city carries all three bands, each a different text', () => {
    for (const c of graded) {
      const texts = BANDS.map((l) => c[gradedField('introHr', l)]);
      texts.forEach((t, i) =>
        expect(typeof t === 'string' && t.trim().length > 0, `${c.name} ${BANDS[i]}`).toBe(true),
      );
      expect(new Set(texts).size, `${c.name} bands share a text`).toBe(BANDS.length);
    }
  });

  it('register rises with band: A1 short and simple, B1 a paragraph, C1 substantial', () => {
    for (const c of graded) {
      const a1 = words(c.introHrA1);
      const b1 = words(c.introHr);
      const c1 = words(c.introHrC1);
      expect(a1, `${c.name} A1 stays short`).toBeLessThanOrEqual(55);
      expect(b1, `${c.name} B1 is a paragraph`).toBeGreaterThanOrEqual(60);
      expect(c1, `${c.name} C1 is substantial`).toBeGreaterThanOrEqual(100);
      expect(a1).toBeLessThan(b1);
      expect(b1).toBeLessThan(c1);
    }
  });

  it('a graded city uses ONLY the three bands (no half-graded A2/B2/C2 siblings)', () => {
    // The design is three bands with the picker walking down. A stray
    // `introHrB2` on one city would silently serve that city differently.
    for (const c of graded) {
      const extra = Object.keys(c).filter(
        (k) => /^introHr/.test(k) && !/^introHr(A1|C1)?$/.test(k),
      );
      expect(extra, `${c.name}`).toEqual([]);
    }
  });

  it('an ungraded city carries no partial band either', () => {
    for (const c of cities) {
      if (graded.includes(c)) continue;
      expect(
        Object.keys(c).some((k) => /^introHr/.test(k)),
        `${c.name} has a band without the B1 baseline`,
      ).toBe(false);
    }
  });

  it('the graded corpus is real Croatian (diacritics present, no encoding bleed)', () => {
    const all = graded
      .flatMap((c) => BANDS.map((l) => String(c[gradedField('introHr', l)])))
      .join(' ');
    expect(/[čćđšž]/.test(all)).toBe(true);
    expect(/Ä|Å¡|Å¾|Ä‡|â€|[Ѐ-ӿ]/.test(all)).toBe(false);
  });

  it('the picker walks down to the nearest band on a three-band record', () => {
    const c = graded[0]!;
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
const ungraded = cities.find((c) => !c.introHr)!;

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
    expect(screen.getByText(String(dubrovnik[gradedField('introHr', band)]))).toBeInTheDocument();
    for (const other of BANDS) {
      if (other !== band)
        expect(screen.queryByText(String(dubrovnik[gradedField('introHr', other)]))).toBeNull();
    }
    expect(screen.getByTestId('cityofday-reading-level').textContent).toBe(
      atLevel ? `Croatian at your level · ${band}` : `Croatian · ${band}`,
    );
    // the English intro still renders — the Croatian is added, not swapped in
    expect(screen.getByText(String(dubrovnik.intro))).toBeInTheDocument();
  });

  it('an ungraded city renders exactly as before: no Croatian block, no chip', () => {
    mockLevel = 'B1';
    mockCity = ungraded;
    expect(ungraded).toBeTruthy();
    render(<CityOfDayScreen goBack={vi.fn()} />);
    expect(screen.queryByTestId('cityofday-graded-hr')).toBeNull();
    expect(screen.queryByTestId('cityofday-reading-level')).toBeNull();
    expect(screen.getByText(String(ungraded.intro))).toBeInTheDocument();
  });

  it('still marks itself visited on mount (the session builder reads this key)', () => {
    render(<CityOfDayScreen goBack={vi.fn()} />);
    expect(localStorage.getItem('nh_cityofday_date')).toBeTruthy();
  });
});
