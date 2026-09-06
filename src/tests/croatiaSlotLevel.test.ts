/**
 * croatiaSlotLevel.test.ts — the culture slot serves the learner's level
 * (content expansion item 3, 2026-09-05).
 *
 * THE FINDING. CROATIA_POOL had 41 entries: 18 unlevelled (A1 by default), A2 5,
 * B1 15, and ONE entry each at B2, C1 and C2 — the deep-dive tier pages, three
 * essays each. The slot rotated least-recently-served over everything unlocked,
 * so over 40 culture days a B2 learner saw own-level content on 1, a C1 learner
 * on 1, a C2 learner on 1 (measured before this change, real builder).
 *
 * TWO FIXES, both needed. (1) Content: 8 essays per tier, one pool entry per
 * essay, so the own tier has 8–9 cards instead of 1–2. (2) Rotation: the slot
 * alternates between the learner's OWN-TIER cycle (entries gated at exactly
 * their level, plus self-levelling `adaptive` entries) and the LOWER cycle,
 * whichever was served less recently; LRS within each, so the 2026-08-14
 * "same card every day" guarantee holds per cycle.
 *
 * After: own-level share over 40 days ≈ 50% at every level with a lower cycle.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({
  getDueReviews: vi.fn(() => []),
  getServableReviewCount: vi.fn(() => 0),
  getSR: vi.fn(() => ({})),
}));
vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  getCategoryStatus: vi.fn(() => ({ seen: false, accuracy: null, lastSeen: 0 })),
  CONJ_CATEGORIES: new Set(),
  CATEGORY_MIN_CEFR: {},
}));

import { buildSessionActivities, CROATIA_POOL } from '../hooks/useDailySession';
import { CITY_OF_DAY_SLOT_MAX_CEFR } from '../lib/croatiaPool';
import { localDateStr } from '../lib/dateUtils';
import { isUnlocked, cefrRank } from '../lib/cefr';

const IDS = new Set(CROATIA_POOL.map((c) => c.id));
const byId = new Map(CROATIA_POOL.map((c) => [c.id, c]));
// OWNER DECISION (2026-09-06): City of the Day is a rotation entry from B1 up;
// at A1–A2 the first-claim ritual serves it, so it stays out of that rotation.
const cityFirstClaim = (level: string) => cefrRank(level) <= cefrRank(CITY_OF_DAY_SLOT_MAX_CEFR);
const rotationFor = (level: string) =>
  CROATIA_POOL.filter((c) => !cityFirstClaim(level) || c.screen !== 'cityofday');

function ownTier(level: string) {
  return rotationFor(level).filter(
    (c) =>
      isUnlocked(c.cefr ?? 'A1', level) &&
      ((c.cefr ?? 'A1') === level ||
        (c.adaptive && isUnlocked(c.cefr ?? 'A1', level)) ||
        Boolean(c.ownAtLevels?.includes(level))),
  );
}
function culturePick(level: string) {
  return buildSessionActivities(level).find((a) => IDS.has(a.id))!;
}
/** N builds with the served map advancing one day per build, as real days do. */
function daysOf(level: string, n: number): string[] {
  const picks: string[] = [];
  const today = localDateStr();
  const todayMs = new Date(`${today}T12:00:00`).getTime();
  for (let i = 0; i < n; i++) {
    const pick = culturePick(level);
    picks.push(pick.id);
    // Back-date what this build served to "n-1-i days ago" (ascending toward
    // today), so each later build sees a strictly older/newer ordering exactly
    // as consecutive real days produce — and nothing carries a future date.
    const map = JSON.parse(localStorage.getItem('nh_session_served') || '{}') as Record<
      string,
      string
    >;
    const stamp = new Date(todayMs - (n - 1 - i) * 86400000).toISOString().slice(0, 10);
    for (const k of Object.keys(map)) if (map[k] === today) map[k] = stamp;
    localStorage.setItem('nh_session_served', JSON.stringify(map));
  }
  return picks;
}

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('nh_cityofday_date', localDateStr()); // force the rotation branch
});

describe('the pool now has an own tier to serve at every level', () => {
  it.each(['B2', 'C1', 'C2'])('%s has at least 8 own-tier entries (was 1)', (level) => {
    expect(ownTier(level).length).toBeGreaterThanOrEqual(8);
  });

  it('croatianews is self-levelling and counts as own tier from B1 up', () => {
    expect(byId.get('croatianews')!.adaptive).toBe(true);
    for (const l of ['B1', 'B2', 'C1', 'C2'])
      expect(ownTier(l).map((c) => c.id)).toContain('croatianews');
    expect(ownTier('A2').map((c) => c.id)).not.toContain('croatianews'); // still B1-gated
  });

  it('history grades its own Croatian (item 6) and counts as own tier at EVERY level', () => {
    // A1-gated + adaptive: the screen reads the learner's level through
    // lib/gradedHr, so for a C2 learner the Homeland War timeline is C2 prose,
    // not the B1 baseline everyone used to get — and the slot may say so.
    expect(byId.get('history')!.adaptive).toBe(true);
    for (const l of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
      expect(
        ownTier(l).map((c) => c.id),
        l,
      ).toContain('history');
  });
});

describe('the rotation alternates own tier and lower, LRS within each', () => {
  it.each(['A2', 'B1', 'B2', 'C1', 'C2'])(
    '%s — over 40 days, own-level content is served on roughly half (was ≤ 1 of 40 at B2+)',
    (level) => {
      const own = new Set(ownTier(level).map((c) => c.id));
      const picks = daysOf(level, 40);
      const atLevel = picks.filter((id) => own.has(id)).length;
      expect(atLevel, `${level}: ${picks.join(',')}`).toBeGreaterThanOrEqual(19);
      expect(atLevel).toBeLessThanOrEqual(21);
      // and strictly alternates from day one
      for (let i = 1; i < picks.length; i++) {
        expect(own.has(picks[i]!), `day ${i}`).toBe(!own.has(picks[i - 1]!));
      }
    },
  );

  it('the first culture day of an advanced learner is at level', () => {
    for (const l of ['B2', 'C1', 'C2']) {
      localStorage.clear();
      localStorage.setItem('nh_cityofday_date', localDateStr());
      expect(ownTier(l).map((c) => c.id)).toContain(culturePick(l).id);
    }
  });

  it('nothing repeats inside a cycle until the cycle is exhausted (C1)', () => {
    const own = ownTier('C1');
    const lower = rotationFor('C1').filter(
      (c) => isUnlocked(c.cefr ?? 'A1', 'C1') && !own.includes(c),
    );
    const picks = daysOf('C1', 2 * lower.length);
    const ownPicks = picks.filter((id) => own.some((c) => c.id === id));
    const lowerPicks = picks.filter((id) => lower.some((c) => c.id === id));
    // own cycle: first own.length picks are all distinct; same for lower
    expect(new Set(ownPicks.slice(0, own.length)).size).toBe(own.length);
    expect(new Set(lowerPicks.slice(0, lower.length)).size).toBe(lower.length);
    // and every lower entry is still reachable (the 2026-08-14 contract, per cycle)
    expect(new Set(lowerPicks).size).toBe(lower.length);
  });

  it('A1 has no lower cycle and rotates exactly as before (plain LRS over everything)', () => {
    const eligible = rotationFor('A1').filter((c) => isUnlocked(c.cefr ?? 'A1', 'A1'));
    const picks = daysOf('A1', eligible.length);
    expect(new Set(picks).size).toBe(eligible.length);
  });

  it('the reason names the level only when the pick really is own tier', () => {
    localStorage.clear();
    localStorage.setItem('nh_cityofday_date', localDateStr());
    const first = culturePick('C2') as { id: string; reason?: string };
    expect(first.reason).toBe('Culture at your level.');
    const second = culturePick('C2') as { id: string; reason?: string };
    expect(second.reason).toBe("Today's culture pick.");
  });

  it('cityofday keeps first claim when not yet visited — at A1 and A2 only', () => {
    localStorage.removeItem('nh_cityofday_date');
    for (const l of ['A1', 'A2']) expect(culturePick(l).id, l).toBe('cityofday');
  });
});

// OWNER DECISION (2026-09-05). Everything above forces the rotation branch by
// marking City of the Day visited, because the daily plan is built once a day
// BEFORE anyone has opened it — so in production the slot was `cityofday` on
// every daily build at every level, and the rotation measured above never
// reached a learner except on a same-day rebuild. From B1 up the slot is the
// rotation on every build. These tests do NOT set the visited flag: they
// measure the daily build.
//
// OWNER DECISION (2026-09-06): with graded Croatian on every city, City of the
// Day is BACK IN that B1+ rotation — as one least-recently-served entry, never
// a daily first claim. Own tier where it has the learner's band (B1, C1 —
// `ownAtLevels`), lower tier elsewhere (B2, C2 read the band below). Measured
// with the real builder over 40 daily builds: cityofday 2/40 at B1 and C1
// (own cycle, "Culture at your level."), 1/40 at B2 and C2 (lower cycle,
// "Today's culture pick."); own-level share unchanged at 20/40 everywhere.
describe('daily builds (City of the Day NOT visited) — the branch production actually hits', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it.each(['B1', 'B2', 'C1', 'C2'])(
    '%s serves cityofday as a rotation entry (1–3 of 40), alternates from day one, own-level ≈ half',
    (level) => {
      const own = new Set(ownTier(level).map((c) => c.id));
      const picks = daysOf(level, 40);
      const cityDays = picks.filter((id) => id === 'cityofday').length;
      expect(cityDays, `${level}: ${picks.join(',')}`).toBeGreaterThanOrEqual(1);
      expect(cityDays, 'a rotation entry, not the daily ritual').toBeLessThanOrEqual(3);
      const atLevel = picks.filter((id) => own.has(id)).length;
      expect(atLevel, `${level}: ${picks.join(',')}`).toBeGreaterThanOrEqual(19);
      expect(atLevel).toBeLessThanOrEqual(21);
      expect(own.has(picks[0]!), 'first daily culture pick is at level').toBe(true);
      for (let i = 1; i < picks.length; i++) {
        expect(own.has(picks[i]!), `day ${i}`).toBe(!own.has(picks[i - 1]!));
      }
    },
  );

  it.each(['B1', 'B2', 'C1', 'C2'])(
    '%s — the cityofday pick claims "at your level" exactly when the entry has that band',
    (level) => {
      const entry = byId.get('cityofday')!;
      const ownHere = Boolean(entry.ownAtLevels?.includes(level));
      const today = localDateStr();
      const todayMs = new Date(`${today}T12:00:00`).getTime();
      // walk until cityofday is served (bounded by one full walk of both cycles)
      const span = 2 * rotationFor(level).length + 2;
      let served: { id: string; reason?: string } | undefined;
      for (let i = 0; i < span && !served; i++) {
        const pick = culturePick(level) as { id: string; reason?: string };
        if (pick.id === 'cityofday') served = pick;
        const map = JSON.parse(localStorage.getItem('nh_session_served') || '{}') as Record<
          string,
          string
        >;
        const stamp = new Date(todayMs - (span - 1 - i) * 86400000).toISOString().slice(0, 10);
        for (const k of Object.keys(map)) if (map[k] === today) map[k] = stamp;
        localStorage.setItem('nh_session_served', JSON.stringify(map));
      }
      expect(served, `${level}: cityofday never served in ${span} days`).toBeTruthy();
      expect(served!.reason).toBe(ownHere ? 'Culture at your level.' : "Today's culture pick.");
      expect(ownHere).toBe(level === 'B1' || level === 'C1');
    },
  );

  it.each(['B1', 'C2'])(
    '%s — the visited flag no longer matters: the 40-day series is identical with and without it',
    (level) => {
      // At A1–A2 "not visited" forces City of the Day (the ritual). From B1 up
      // it is a rotation entry, so an unvisited City of the Day must not claim
      // the slot — the series must be the same either way.
      const without = daysOf(level, 40);
      localStorage.clear();
      localStorage.setItem('nh_cityofday_date', localDateStr());
      const withFlag = daysOf(level, 40);
      expect(without).toEqual(withFlag);
    },
  );

  it.each(['A1', 'A2'])(
    '%s keeps the ritual: cityofday on every daily build until visited',
    (level) => {
      for (let i = 0; i < 5; i++) expect(culturePick(level).id).toBe('cityofday');
      localStorage.setItem('nh_cityofday_date', localDateStr());
      expect(culturePick(level).id).not.toBe('cityofday');
    },
  );

  it('the threshold is the pool constant, and B1 is the first level with a real own tier', () => {
    expect(CITY_OF_DAY_SLOT_MAX_CEFR).toBe('A2');
    expect(ownTier('B1').length).toBeGreaterThanOrEqual(15);
    // cityofday is in the B1+ rotation, and own tier only where it has the band
    expect(rotationFor('B1').map((c) => c.id)).toContain('cityofday');
    expect(rotationFor('A2').map((c) => c.id)).not.toContain('cityofday');
    expect(ownTier('B1').map((c) => c.id)).toContain('cityofday');
    expect(ownTier('B2').map((c) => c.id)).not.toContain('cityofday');
  });
});
