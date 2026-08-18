// src/tests/productionTeaching.test.ts
//
// Plumbing pins for the production-teaching wave (2026-08-18). The 2026-08-18
// audit found writing structurally unschedulable (no 'writing' category, both
// writing screens tagged 'speaking', no adaptive route, no feedback path) and
// daily speaking feeding NOTHING back to the mastery ledger. These tests pin
// the closed loops so they cannot silently reopen.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/random.js', () => ({ rnd: () => 0 }));

import { ALL_CATEGORIES } from '../lib/adaptive';
import { skillForCategory } from '../lib/masteryLedger';
import { applyExamScoresToAdaptive } from '../lib/adaptiveFeedback';
import {
  selectProductionExercise,
  SESSION_SCREEN_IDS,
  PRODUCTION_SCREEN_IDS,
} from '../hooks/useDailySession';

describe('writing is a first-class schedulable category', () => {
  it("'writing' is in ALL_CATEGORIES, appended LAST (first-pick order preserved)", () => {
    expect(ALL_CATEGORIES[ALL_CATEGORIES.length - 1]).toBe('writing');
    expect(ALL_CATEGORIES[0]).toBe('genitive'); // brand-new user's first pick
  });

  it("skillForCategory('writing') maps to the writing skill, not the grammar catch-all", () => {
    expect(skillForCategory('writing')).toBe('writing');
  });

  it('the writing category routes to a real, registered session screen', () => {
    // CATEGORY_SCREEN_MAP.writing → 'writing_guided'; SESSION_SCREEN_IDS is
    // derived from the map + pools, and session-routes.test.ts asserts every
    // member resolves in AppRouter — so membership here proves the route.
    expect(SESSION_SCREEN_IDS.has('writing_guided')).toBe(true);
    expect(PRODUCTION_SCREEN_IDS.has('writing_guided')).toBe(true);
  });

  it('a weak exam WRITING score reschedules writing practice (the 0%-writing case)', () => {
    localStorage.clear();
    applyExamScoresToAdaptive({ writing: 0 } as never);
    const cats = JSON.parse(localStorage.getItem('nh_cat_sr') || '{}');
    expect(cats.writing, 'writing category was not rescheduled').toBeTruthy();
  });
});

describe('guided writing serves the levels that had nothing', () => {
  beforeEach(() => localStorage.clear());

  it('an A1 learner (mic denied) gets a WRITE production slot — impossible before', () => {
    const result = selectProductionExercise({
      cefr: 'A1',
      micState: 'denied',
      recentScreens: [],
      kindBias: 'write',
    });
    expect(result?.screen).toBe('writing_guided');
  });

  it("kindBias 'write' at every level finds a writing exercise", () => {
    for (const cefr of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      const result = selectProductionExercise({
        cefr,
        micState: 'available',
        recentScreens: [],
        kindBias: 'write',
      });
      expect(result, `${cefr} returned nothing for kindBias write`).toBeTruthy();
      expect(
        ['writing_guided', 'writing', 'dictation'].includes(result!.screen),
        `${cefr} got non-writing screen ${result!.screen} despite write bias`,
      ).toBe(true);
    }
  });
});
