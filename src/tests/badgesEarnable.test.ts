/**
 * badgesEarnable.test.ts — a badge on the board must be winnable.
 *
 * THE DEFECT. Three badges could not be earned by any amount of practice:
 *
 *   city5    "Explored 5 Croatian cities"     nh_culture.cityCnt
 *   city15   "Discovered 15 Croatian cities"  nh_culture.cityCnt
 *   proverb  "Read 3 Croatian proverbs"       nh_culture.proverbCnt
 *
 * `cityCnt` and `proverbCnt` appeared in exactly two places in the whole repo:
 * those predicates, and `appUtils.test.ts`, which sets them by hand — the same
 * shape `deadKeyReaders.test.tsx` records for the three breadth badges, where
 * "the tests around them supplied the key by hand, which proves the reader parses
 * correctly and proves nothing about whether the value ever arrives in
 * production". Both screens exist and are reachable: CityOfDayScreen shows one of
 * 365 cities a day and ProverbsScreen lists every proverb. Neither wrote a thing.
 *
 * HOW THE SWEEP WORKED, and the trap in it: evaluate every predicate against a
 * deliberately MAXIMAL learner and see which stay false. The first run reported
 * FIFTEEN, and twelve of those were the fixture's fault, not the app's — badges
 * that read `getCultureStats()`, `new Date()` or localStorage, which an empty
 * jsdom does not supply. A thirteenth, `read3`, failed because the fixture set
 * `readingDone: true` where the app stores a NUMBER, and `true >= 3` is false.
 * The sweep's first number is a property of the sweep. This file supplies all
 * three sources, so a badge that stays false is a real finding.
 *
 * DISTINCT ITEMS, NOT OPENS. `incrementCulture` counts opens — five taps on one
 * media item make mediaCnt 5 — so using it here would have made "Explored 5
 * Croatian cities" true of a learner who opened one city five times.
 * `recordCultureItem` stores `kind:id` markers and derives the count from them.
 */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { BADGES, recordCultureItem, getCultureStats, mergeCultureStats } from '../lib/appUtils';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

type Badge = { id: string; d: string; r: (s: Record<string, unknown>) => boolean };
const ALL = BADGES as unknown as Badge[];

/** A learner who has done everything the app can record. */
function maximalStats() {
  return {
    xp: 1e9,
    lc: 1e9,
    gc: 1e9,
    pf: 1e9,
    sp: 1e9,
    hi: 1e9,
    mv: 1e9,
    streak: 1e9,
    srsTotal: 1e9,
    mediaVisits: 1e9,
    mistakesMastered: 1e9,
    readingDone: 1e9,
    dialectDone: 1,
    footballDone: 1,
    textingDone: 1,
    vs: [...Object.keys(EXERCISE_COMPLETION), 'reading_A', 'reading_B', 'reading_C'],
  };
}

/** Everything a maximal learner would have outside the stats object. */
function maximalWorld() {
  localStorage.setItem('nh_goal', 'heritage');
  localStorage.setItem('nh_weekend_days', JSON.stringify({ sat: true, sun: true }));
  const culture: Record<string, number> = { mediaCnt: 99, bakaCnt: 99, regionCnt: 99 };
  for (let i = 0; i < 20; i++) culture['city:City' + i] = 1;
  for (let i = 0; i < 5; i++) culture['proverb:P' + i] = 1;
  culture.cityCnt = 20;
  culture.proverbCnt = 5;
  localStorage.setItem('nh_culture', JSON.stringify(culture));
}

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  // 07:00 satisfies `earlybird`; `nightowl` needs >= 22, so the two are mutually
  // exclusive by construction and are checked separately below.
  vi.setSystemTime(new Date(2026, 0, 15, 7, 0, 0));
});
afterEach(() => vi.useRealTimers());

describe('every badge can be earned', () => {
  it('the sweep is real: it sees every badge and a maximal learner', () => {
    expect(ALL.length).toBeGreaterThan(50);
    expect(Object.keys(EXERCISE_COMPLETION).length).toBeGreaterThan(100);
  });

  it('non-vacuity: an empty learner earns almost nothing', () => {
    // If the fixture leaked state, everything would pass and this file would be
    // decorative.
    const earned = ALL.filter((b) => {
      try {
        return b.r({});
      } catch {
        return false;
      }
    });
    expect(earned.length).toBeLessThan(5);
  });

  it('no badge stays unwinnable for a learner who has done everything', () => {
    maximalWorld();
    const s = maximalStats();
    // Two families are MUTUALLY EXCLUSIVE by construction and so cannot all hold
    // at once for any real learner either: the clock pair (before 8am / after
    // 10pm) and the goal trio (a learner has exactly one `nh_goal`). Each is
    // asserted on its own world below rather than waved away — that is the
    // difference between an exemption and a blind spot.
    const EXCLUSIVE = new Set(['nightowl', 'family5', 'travel5']);
    const unearnable = ALL.filter((b) => !EXCLUSIVE.has(b.id) && !b.r(s)).map(
      (b) => `${b.id} — ${b.d}`,
    );
    expect(
      unearnable,
      'these badges are on the board and no amount of practice can win them:\n' +
        unearnable.map((x) => `  - ${x}`).join('\n'),
    ).toEqual([]);
  });

  it('the two clock badges are each winnable at their own hour', () => {
    vi.setSystemTime(new Date(2026, 0, 15, 7, 0, 0));
    expect(ALL.find((b) => b.id === 'earlybird')!.r({})).toBe(true);
    vi.setSystemTime(new Date(2026, 0, 15, 23, 0, 0));
    expect(ALL.find((b) => b.id === 'nightowl')!.r({})).toBe(true);
  });

  it('each goal badge is winnable under its own goal', () => {
    // And only under its own: a learner on the travel goal must not collect the
    // heritage badge, which is what makes these three exclusive rather than
    // simply unearnable.
    for (const [goal, id] of [
      ['heritage', 'heritage5'],
      ['family', 'family5'],
      ['travel', 'travel5'],
    ] as const) {
      localStorage.setItem('nh_goal', goal);
      const badge = ALL.find((b) => b.id === id)!;
      expect(badge.r({ lc: 5 }), `${id} is unwinnable on the ${goal} goal`).toBe(true);
      expect(badge.r({ lc: 4 }), `${id} ignores its lesson threshold`).toBe(false);
      for (const other of ['heritage5', 'family5', 'travel5'].filter((x) => x !== id)) {
        expect(ALL.find((b) => b.id === other)!.r({ lc: 5 })).toBe(false);
      }
    }
  });
});

describe('the counters the culture badges read are actually written', () => {
  const SRC = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
  );
  const strip = (s: string) =>
    s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

  /** Culture counters the badge predicates depend on. */
  const required = [
    ...new Set(
      [
        ...strip(readFileSync('src/lib/appUtils.ts', 'utf8')).matchAll(
          /getCultureStats\(\)\.(\w+)/g,
        ),
      ].map((m) => m[1]!),
    ),
  ];

  it('derives the counters from the predicates themselves', () => {
    expect(required).toContain('cityCnt');
    expect(required).toContain('proverbCnt');
    expect(required.length).toBeGreaterThan(3);
  });

  it('every counter a badge reads has a writer in src', () => {
    // A counter with no writer is a badge nobody can earn, and it fails in total
    // silence — the read just returns undefined forever.
    const written = new Set<string>();
    for (const f of SRC) {
      const s = strip(readFileSync(f, 'utf8'));
      for (const m of s.matchAll(/incrementCulture\(\s*'(\w+)'/g)) written.add(m[1]!);
      // recordCultureItem('city', …) maintains `cityCnt`.
      for (const m of s.matchAll(/recordCultureItem\(\s*'(\w+)'/g)) written.add(m[1]! + 'Cnt');
    }
    const orphans = required.filter((k) => !written.has(k));
    expect(orphans, 'these culture counters are read by a badge and written by nothing').toEqual(
      [],
    );
  });
});

describe('recordCultureItem counts distinct items', () => {
  it('counts one item once, however many times it is opened', () => {
    expect(recordCultureItem('city', 'Zagreb')).toBe(1);
    expect(recordCultureItem('city', 'Zagreb')).toBe(1);
    expect(recordCultureItem('city', 'Zagreb')).toBe(1);
    expect(getCultureStats().cityCnt).toBe(1);
  });

  it('counts each new item', () => {
    for (const c of ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar']) recordCultureItem('city', c);
    expect(getCultureStats().cityCnt).toBe(5);
    expect(BADGES.find((b) => b.id === 'city5')!.r({})).toBe(true);
    expect(BADGES.find((b) => b.id === 'city15')!.r({})).toBe(false);
  });

  it('keeps kinds apart', () => {
    recordCultureItem('city', 'Zagreb');
    recordCultureItem('proverb', 'Tko rano rani, dvije sreće grabi.');
    expect(getCultureStats().cityCnt).toBe(1);
    expect(getCultureStats().proverbCnt).toBe(1);
  });

  it('leaves the open-counters alone', () => {
    localStorage.setItem('nh_culture', JSON.stringify({ mediaCnt: 7 }));
    recordCultureItem('city', 'Zagreb');
    expect(getCultureStats().mediaCnt).toBe(7);
  });
});

describe('the culture blob merges additively', () => {
  it('never reduces an open-counter (NEVER DO 4)', () => {
    // It used to be a straight overwrite, so syncing from a device that had seen
    // less took the counters DOWN.
    expect(mergeCultureStats({ mediaCnt: 12 }, { mediaCnt: 3 }).mediaCnt).toBe(12);
    expect(mergeCultureStats({ mediaCnt: 3 }, { mediaCnt: 12 }).mediaCnt).toBe(12);
  });

  it('unions the distinct markers from both devices', () => {
    const a = { 'city:Zagreb': 1, 'city:Split': 1, cityCnt: 2 };
    const b = { 'city:Rijeka': 1, cityCnt: 1 };
    expect(mergeCultureStats(a, b).cityCnt).toBe(3);
    expect(mergeCultureStats(b, a).cityCnt).toBe(3);
  });

  it('recomputes a distinct count rather than trusting a carried-over one', () => {
    // A count from a device whose markers did not come with it would claim items
    // this learner cannot show.
    expect(mergeCultureStats({ 'city:Zagreb': 1 }, { cityCnt: 900 }).cityCnt).toBe(1);
  });

  it('survives junk on either side', () => {
    expect(() => mergeCultureStats({}, {})).not.toThrow();
    expect(mergeCultureStats({ mediaCnt: NaN }, { mediaCnt: -5 }).mediaCnt).toBe(0);
  });
});

describe('both screens record what their badge counts', () => {
  const strip = (s: string) =>
    s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

  it('CityOfDayScreen records the city by name', () => {
    const src = strip(readFileSync('src/components/croatia/CityOfDayScreen.tsx', 'utf8'));
    expect(src).toMatch(/recordCultureItem\('city',\s*String\(city\.name/);
  });

  it('ProverbsScreen records the proverb the learner heard', () => {
    // Both the tap and the keyboard path go through one handler, so a learner
    // using the keyboard is counted the same.
    const src = strip(readFileSync('src/components/croatia/ProverbsScreen.tsx', 'utf8'));
    expect(src).toMatch(/recordCultureItem\('proverb',\s*p\.hr\)/);
    expect(src).toMatch(/onClick=\{\(\) => hear\(p\)\}/);
    expect(src).toMatch(/onKeyDown[\s\S]{0,160}hear\(p\)/);
  });
});
