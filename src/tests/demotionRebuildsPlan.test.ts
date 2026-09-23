/**
 * demotionRebuildsPlan — an honest rollback reaches the daily plan
 * (sweep 46, 2026-09-23).
 *
 * The NOT-YET-CHECKED list has named this interaction for weeks: "a demotion
 * (verification_fail rollback) vs content already unlocked and vs a daily plan
 * built at the higher level." It is the INTERACTION seam rather than the claims
 * seam — two mechanisms that are each correct alone, meeting.
 *
 * THE RISK. `rollbackProvisionalOnFail` steps a failed provisional level down
 * inside `recordEquivalencyAttempt`, writing only to the certification store.
 * The daily plan is built from `getContentUnlockLevel(getUserCefr(xp, lc, gc))`
 * — and **a demotion does not change XP, lessons or grammar completions**. So
 * the whole question is whether the rollback reaches the unlock level at all,
 * and then whether the plan notices. If either link is missing, a learner the
 * app has just honestly rolled back to B1 keeps being served the B2 plan it
 * built that morning, from a level it no longer says they hold — the badge and
 * the plan disagreeing about the same learner, which is the 2026-09-06 field
 * report's shape in a new place.
 *
 * THE RESULT IS NEGATIVE — both links hold — and it is recorded with a DRIVEN
 * guard rather than a paragraph, because the two halves live in different files
 * and neither one's own tests can see the join.
 *
 * WHICH MECHANISM CARRIES IT WAS MEASURED, AND MY FIRST ANSWER WAS WRONG. I
 * wrote that the link is `getContentUnlockLevel`'s closing
 * `return getCertifiedLevel()` — provisional passes counted, the rollback
 * removing one. Mutating that line to `getVerifiedLevel()` left this file fully
 * green, which said the claim was false, and dumping the real state said why:
 *
 *     BEFORE  certified=B2 verified=A1 gate.required=true gate.target=B2 unlock=B1
 *     AFTER   certified=B1 verified=A1 gate.required=true gate.target=B1 unlock=A2
 *
 * The **verification gate** carries it. A demotion only ever happens to a
 * PROVISIONAL level (`rollbackProvisionalOnFail` returns null otherwise), and a
 * provisional level above the verified one is exactly what makes the gate
 * required — so the gate branch returns `levelBelow(gate.target)` before
 * `getCertifiedLevel()` is ever reached, and the drop the plan sees is the
 * GATE TARGET moving down. That is asserted below, so the finding is pinned
 * rather than left in a comment. (The `getVerifiedLevel` swap is a real defect
 * in its own right — it takes content away from grandfathered learners — and
 * CLAUDE.md records it as already guarded by two other tests. It is NOT this
 * file's subject, and claiming it would be claiming a guard I do not have.)
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDailySession } from '../hooks/useDailySession';
import {
  recordEquivalencyAttempt,
  getCertifiedLevel,
  getContentUnlockLevel,
  getVerificationGate,
} from '../lib/cefrCertification';
import type { CefrLevel } from '../lib/cefr';
import { getUserCefr } from '../lib/cefr';
import { cefrRank } from '../lib/cefr';
import { SCREEN_CEFR } from '../lib/categoryRoutes';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  getCategoryStatus: vi.fn(() => ({ seen: false, accuracy: null, lastSeen: 0 })),
  CONJ_CATEGORIES: new Set<string>(),
  CATEGORY_MIN_CEFR: {},
}));

/** A grandfathered learner: provisional passes to B2, XP well past it. */
function seedGrandfatheredAtB2() {
  const long = Date.now() - 9e8;
  localStorage.setItem('nh_cefr_migration_v1_done', '1');
  localStorage.setItem(
    'nh_cefr_certifications',
    JSON.stringify({
      v: 1,
      passes: {
        A2: { level: 'A2', passedAt: long, score: 0.8, provisional: true },
        B1: { level: 'B1', passedAt: long, score: 0.8, provisional: true },
        B2: { level: 'B2', passedAt: long, score: 0.8, provisional: true },
      },
      checkpoints: { demotions: [] },
    }),
  );
}

/** The REAL failed check, through the REAL recorder. */
function failTheB2Check() {
  return recordEquivalencyAttempt({
    level: 'B2',
    scores: { vocab: 0.4, grammar: 0.4, reading: 0.4, listening: 0.4 },
    currentLessonCount: 60,
    currentXp: 9000,
  });
}

/** What HomeTab computes and hands the session hook, verbatim. */
const unlockLevel = () => getContentUnlockLevel(getUserCefr(9000, 60, 40));

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-09-23T10:00:00'));
});
afterEach(() => vi.useRealTimers());

describe('the rollback reaches the level the plan is built at', () => {
  it('a failed provisional check lowers the certified level', () => {
    seedGrandfatheredAtB2();
    expect(getCertifiedLevel()).toBe('B2');
    const r = failTheB2Check();
    expect(r.rollback).toEqual({ from: 'B2', to: 'B1' });
    expect(getCertifiedLevel()).toBe('B1');
  });

  it('...and therefore lowers the unlock level HomeTab passes to the plan', () => {
    seedGrandfatheredAtB2();
    const before = unlockLevel();
    failTheB2Check();
    const after = unlockLevel();
    expect(
      cefrRank(after),
      `The rollback wrote a demotion but the unlock level stayed at ${before}. ` +
        `The daily plan is built from this expression, and XP/lc/gc are unchanged ` +
        `by a demotion — so if this does not move, nothing reaches the plan.`,
    ).toBeLessThan(cefrRank(before));
  });

  it('the gate target is what moves — the measured mechanism, pinned', () => {
    // Recorded because I got this wrong first time and a mutation said so. A
    // demotion only ever touches a PROVISIONAL level, and a provisional level
    // above the verified one is what makes the gate required — so the gate
    // branch answers before `getCertifiedLevel()` is reached.
    seedGrandfatheredAtB2();
    const gBefore = getVerificationGate();
    expect(gBefore.required).toBe(true);
    expect(gBefore.target).toBe('B2');
    failTheB2Check();
    const gAfter = getVerificationGate();
    expect(gAfter.required).toBe(true);
    expect(
      cefrRank(gAfter.target as CefrLevel),
      'The gate target did not follow the rollback. It is the path the unlock ' +
        'level actually takes for a grandfathered learner, measured rather than assumed.',
    ).toBeLessThan(cefrRank(gBefore.target as CefrLevel));
  });

  it('XP, lessons and grammar are untouched — the link cannot come from there', () => {
    // Stated mechanically so the premise of the test above is not an assumption.
    seedGrandfatheredAtB2();
    const eligible = getUserCefr(9000, 60, 40);
    failTheB2Check();
    expect(getUserCefr(9000, 60, 40)).toBe(eligible);
  });
});

describe('the plan itself rebuilds at the lower level', () => {
  it('a demotion mid-day replaces the plan', () => {
    const { result, rerender } = renderHook(({ lvl }) => useDailySession(lvl), {
      initialProps: { lvl: 'B2' },
    });
    expect(result.current.session.cefrLevel).toBe('B2');
    const before = result.current.session.activities.map((a) => a.screen);

    act(() => {
      rerender({ lvl: 'A2' });
    });
    expect(result.current.session.cefrLevel).toBe('A2');
    // Same day, so this is the CEFR branch, not the rollover branch.
    expect(result.current.session.date).toBe('2026-09-23');
    expect(result.current.session.activities.length).toBeGreaterThan(0);
    // NOT `activities !== before`: the two plans could legitimately coincide on
    // a quiet day, and a pass/fail line at the mean of a randomised behaviour is
    // the coin flip #490 warned about. The PROPERTY is what matters — nothing in
    // the rebuilt plan may sit above the level the learner now holds. `screenCefr`
    // is the same gate the builder itself applies, so this asks the builder's own
    // question of its own output.
    for (const a of result.current.session.activities) {
      const gate = SCREEN_CEFR[a.screen];
      if (!gate) continue; // ungated screens are available at every level
      expect(
        cefrRank(gate) <= cefrRank('A2'),
        `${a.screen} is gated at ${gate} and survived a demotion to A2 — the plan ` +
          `is still serving content from a level the app no longer says the learner holds.`,
      ).toBe(true);
    }
    void before;
  });

  it('work already done that day is NOT wiped by the demotion', () => {
    // The 2026-05-21 incident, from the other direction: a level change must
    // preserve completions by screen-match. A learner who has just been told
    // they are a level lower should not also be told they have done nothing.
    const { result, rerender } = renderHook(({ lvl }) => useDailySession(lvl), {
      initialProps: { lvl: 'B2' },
    });
    const first = result.current.session.activities[0]!;
    act(() => result.current.markDone(first.id));
    expect(result.current.session.completedIds).toContain(first.id);

    act(() => {
      rerender({ lvl: 'A2' });
    });
    const stillThere = result.current.session.activities.find((a) => a.screen === first.screen);
    if (stillThere) {
      expect(result.current.session.completedIds).toContain(stillThere.id);
    }
    // And the day is not reset to "nothing done" by the level change alone
    // unless the new plan genuinely shares no screen with the old one.
    expect(result.current.session.date).toBe('2026-09-23');
  });

  it('the persisted blob carries the new level, so a later mount agrees', () => {
    const { rerender } = renderHook(({ lvl }) => useDailySession(lvl), {
      initialProps: { lvl: 'B2' },
    });
    act(() => {
      rerender({ lvl: 'A2' });
    });
    const raw = JSON.parse(localStorage.getItem('nh_daily_session') || '{}');
    expect(raw.cefrLevel).toBe('A2');
  });
});
