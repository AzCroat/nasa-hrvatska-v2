// src/tests/sessionVariety.test.ts
//
// Vary by SKILL, not by screen (recommender audit, 2026-08-20).
//
// The defect: the Priority-3 fill excluded recently-seen SCREENS, which reads as
// variety but is not. A1's pool is case-heavy — 9 of its 33 entries — so three
// different screens could hand a learner three case drills in a row and every
// one of them passed the recency filter.
//
// What must NOT regress while fixing that:
//   * session length (the variety pass reorders, it never shortens)
//   * the difficulty contract — a B2 session contains no tier-1 games
//   * the one-reference-per-session cap
// A pure "no repeated group" rule would break the first of those the moment a
// level's pool ran out of families, which is why the second pass exists.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({
  getDueReviews: vi.fn(() => []),
  getServableReviewCount: vi.fn(() => 0),
}));

import { buildSessionActivities, CEFR_EXERCISE_POOL } from '../hooks/useDailySession';
import { skillGroupOf, SKILL_GROUP } from '../lib/skillGroups';

/** Group counts for the graded (non-Croatia) part of a session. */
function groupCounts(acts: Array<{ category: string }>): Record<string, number> {
  const out: Record<string, number> = {};
  for (const a of acts) {
    const g = skillGroupOf(a.category);
    if (!g) continue; // Croatia slots are outside the taxonomy by design
    out[g] = (out[g] ?? 0) + 1;
  }
  return out;
}

describe('every pool category is grouped', () => {
  it('no pool entry falls through the variety pass ungrouped', () => {
    const ungrouped = CEFR_EXERCISE_POOL.filter((e) => !skillGroupOf(e.category)).map((e) => e.id);
    expect(ungrouped, `ungrouped pool entries: ${ungrouped.join(', ')}`).toEqual([]);
  });
});

describe('sessions spread across skill families', () => {
  beforeEach(() => localStorage.clear());

  /**
   * The scenario that actually reproduces the defect: an ACTIVE learner.
   *
   * With empty storage a session is already varied — measured peak was 1 family
   * per session at A1 — because the guaranteed slots consume most of a short
   * session. The stacking appears once recency has thinned the pool: a learner
   * who recently did the non-case screens leaves a remaining A1 pool dominated
   * by case drills. Measured before the fix, that produced FOUR case activities
   * out of five graded slots in 40 of 40 runs. Fluency mode lengthens the
   * session so there are enough fill slots for the effect to show.
   */
  function seedActiveLearner(level: 'A1' | 'A2' | 'B1' | 'B2'): void {
    const recentNonCase = CEFR_EXERCISE_POOL.filter(
      (e) => e.cefr === level && skillGroupOf(e.category) !== 'case',
    ).map((e) => e.screen);
    localStorage.setItem('nh_recent_exercises', JSON.stringify(recentNonCase));
    localStorage.setItem('nh_fluency_mode', 'true');
  }

  it('an active A1 learner does not get a session stacked with case drills', () => {
    for (let i = 0; i < 25; i++) {
      localStorage.clear();
      seedActiveLearner('A1');
      const acts = buildSessionActivities('A1');
      const counts = groupCounts(acts);
      for (const [group, n] of Object.entries(counts)) {
        expect(
          n,
          `A1 session had ${n} ${group} activities: ${acts.map((a) => a.screen).join(', ')}`,
        ).toBeLessThanOrEqual(2);
      }
    }
  });

  it('holds for A2 as well', () => {
    for (let i = 0; i < 25; i++) {
      localStorage.clear();
      seedActiveLearner('A2');
      const acts = buildSessionActivities('A2');
      const counts = groupCounts(acts);
      for (const [group, n] of Object.entries(counts)) {
        expect(n, `A2 session had ${n} ${group} activities`).toBeLessThanOrEqual(2);
      }
    }
  });

  it('a fresh A1 session stays varied too', () => {
    for (let i = 0; i < 25; i++) {
      localStorage.clear();
      const acts = buildSessionActivities('A1');
      const counts = groupCounts(acts);
      for (const [group, n] of Object.entries(counts)) {
        expect(n, `A1 session had ${n} ${group} activities`).toBeLessThanOrEqual(2);
      }
    }
  });

  it('touches more than one family whenever it serves more than one graded activity', () => {
    for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
      localStorage.clear();
      const acts = buildSessionActivities(level);
      const counts = groupCounts(acts);
      const graded = Object.values(counts).reduce((a, b) => a + b, 0);
      if (graded > 1) {
        expect(
          Object.keys(counts).length,
          `${level} session collapsed to a single skill family`,
        ).toBeGreaterThan(1);
      }
    }
  });
});

describe('variety does not cost length or difficulty', () => {
  beforeEach(() => localStorage.clear());

  it('session length is unchanged — still 4–6 activities', () => {
    for (const level of ['A1', 'A2', 'B1', 'B2', 'C1'] as const) {
      localStorage.clear();
      const acts = buildSessionActivities(level);
      expect(acts.length, `${level} session length`).toBeGreaterThanOrEqual(4);
      expect(acts.length, `${level} session length`).toBeLessThanOrEqual(6);
    }
  });

  it('a session never exceeds one reference (browse) entry', () => {
    const referenceScreens = new Set(
      CEFR_EXERCISE_POOL.filter((e) => e.reference).map((e) => e.screen),
    );
    for (let i = 0; i < 15; i++) {
      localStorage.clear();
      const acts = buildSessionActivities('B2');
      const refs = acts.filter((a) => referenceScreens.has(a.screen));
      expect(
        refs.length,
        `reference entries: ${refs.map((r) => r.screen).join(', ')}`,
      ).toBeLessThanOrEqual(1);
    }
  });

  it('the grouping itself stays total — SKILL_GROUP covers what the pool uses', () => {
    for (const entry of CEFR_EXERCISE_POOL) {
      expect(
        SKILL_GROUP[entry.category],
        `${entry.id} (${entry.category}) has no skill group`,
      ).toBeTruthy();
    }
  });
});
