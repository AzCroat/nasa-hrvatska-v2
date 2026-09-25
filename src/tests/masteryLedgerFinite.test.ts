/**
 * SWEEP 124 — A CLAMP BOUNDS THE RANGE, NOT THE FINITENESS.
 *
 * `recordMasteryEvent` opened with `Math.max(0, Math.min(1, ev.score))`, which
 * CLAUDE.md records as the backstop that makes a mis-scaled score harmless
 * (sweep 113: a raw 0–100 folds in as a perfect 1.0, "the backstop is right").
 * It bounds the RANGE. `Math.max(0, Math.min(1, NaN))` is NaN, so it does not
 * bound the finiteness — and a single non-finite score is worse than a mis-scaled
 * one, because it cannot be undone:
 *
 *   1. the cell stores `{s: NaN, n: NaN}`;
 *   2. `JSON.stringify` writes that as `{"s": null, "n": null}`;
 *   3. `getMasteryProfile` then reports `tested: null >= MIN_SAMPLES` — FALSE for
 *      ever — and an untested cell scores MAXIMUM need in
 *      `weakestReceptiveKind` / `weakestProductionKind`, so the recommender
 *      latches onto that one skill (#720's reading latch, reached from the other
 *      side);
 *   4. `mergeRemoteMasteryLedger` cannot repair it, because its own validation
 *      rejects the `null` that was written — and `r.n > l.n` is false against a
 *      NaN, so even a valid remote cell loses.
 *
 * WHY THIS EXISTS AT ALL, stated honestly: the hole is LATENT. The census that
 * found it walked every percentage-and-XP division in the app — 81 candidates,
 * 47 with no guard on their own line or above — and every single denominator
 * bottoms out in a static bank, a `Math.max(…, 1)`, a required content field, or
 * a branch unreachable when the array is empty (`ClozeEngine`'s topic filter
 * falls back to the whole bank; `CefrTest` returns its level picker before the
 * results view; `RetentionCheckScreen` returns on `queue.length === 0` above its
 * `done` branch; `ReadingScreen`'s award sits inside `rp.qs[rqi] && (…)`). So
 * nothing reaches this today. That is 47 separate reachability arguments holding
 * one invariant up; this file is one argument instead.
 *
 * The OTHER sink is already guarded and already pinned: `award()` refuses a
 * non-finite amount (`useAward.test.ts` — "award(NaN) is a no-op"), and
 * `completeExercise` pays XP only through `award`, so no division can corrupt
 * `stats.xp`. This is the half nothing covered.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  recordMasteryEvent,
  recordExerciseOutcome,
  getMasteryProfile,
  getMasteryLedger,
  mergeRemoteMasteryLedger,
} from '../lib/masteryLedger';

const KEY = 'nh_mastery_ledger';

beforeEach(() => {
  localStorage.clear();
});

/** Enough good events (MIN_SAMPLES = 5) that the cell reads as tested. */
function seedTested() {
  for (let i = 0; i < 6; i++)
    recordMasteryEvent({ level: 'B1', skill: 'writing', score: 0.8, weight: 1 });
}

describe('the mastery ledger refuses a non-finite score', () => {
  it('the harness is real: a good event does reach the ledger', () => {
    seedTested();
    const p = getMasteryProfile('B1');
    expect(p.writing?.tested).toBe(true);
    expect(p.writing?.score).toBeCloseTo(0.8, 5);
  });

  it.each([NaN, Infinity, -Infinity])('score %s is rejected outright', (bad) => {
    seedTested();
    const before = JSON.stringify(getMasteryLedger());
    recordMasteryEvent({ level: 'B1', skill: 'writing', score: bad as number, weight: 1 });
    expect(JSON.stringify(getMasteryLedger())).toBe(before);
    // And the cell still reports itself as measured.
    expect(getMasteryProfile('B1').writing?.tested).toBe(true);
  });

  it('a non-finite WEIGHT is rejected too — it is the sample count', () => {
    seedTested();
    const before = JSON.stringify(getMasteryLedger());
    recordMasteryEvent({ level: 'B1', skill: 'writing', score: 0.5, weight: NaN });
    expect(JSON.stringify(getMasteryLedger())).toBe(before);
  });

  it('WHAT THE OLD CODE DID: the clamp alone lets NaN through', () => {
    // The mutation this file exists to catch, expressed rather than asserted
    // about production — so the claim above is re-runnable and not a story.
    expect(Math.max(0, Math.min(1, NaN))).toBeNaN();
    expect(Math.max(0.05, Math.min(4, NaN))).toBeNaN();
    // …and the poisoned shape really is unrecoverable through the merge: the
    // `r.n > l.n` comparison is false in BOTH directions against a NaN, and the
    // `null` that `JSON.stringify` leaves behind fails `>= MIN_SAMPLES` for ever.
    const poisoned = Number('x');
    expect(poisoned > 3).toBe(false);
    expect(3 > poisoned).toBe(false);
    expect((null as unknown as number) >= 3).toBe(false);
  });

  it('a poisoned cell already on disk is DROPPED on load, not carried', () => {
    // What `JSON.stringify` leaves behind after a NaN was folded in once.
    localStorage.setItem(
      KEY,
      JSON.stringify({
        v: 1,
        cells: {
          'B1:writing': { s: null, n: null, at: Date.now() },
          'B1:reading': { s: 0.7, n: 5, at: Date.now() },
        },
      }),
    );
    const p = getMasteryProfile('B1');
    expect(
      p.writing,
      'a null cell must read as never measured, not as untested-with-a-score',
    ).toBeUndefined();
    expect(p.reading?.tested).toBe(true);
  });

  it('and a poisoned cell from ANOTHER device is refused by the merge', () => {
    seedTested();
    mergeRemoteMasteryLedger({
      v: 1,
      cells: { 'B1:writing': { s: NaN, n: 9999, at: Date.now() + 1000 } },
    } as never);
    const p = getMasteryProfile('B1');
    expect(p.writing?.score).toBeCloseTo(0.8, 5);
    expect(p.writing?.tested).toBe(true);
  });
});

describe('the exercise wrapper refuses a zero total — the division never happens', () => {
  /** The wrapper picks the level itself (`getCurrentContentLevel`), so read cells. */
  const cells = () => Object.entries(getMasteryLedger().cells);

  it('total 0 records nothing, so `score / total` cannot reach a cell', () => {
    // THIS ASSERTS THE OUTCOME, NOT A LINE, and the distinction is measured:
    // removing `total <= 0` from `recordExerciseOutcome` leaves this GREEN, because
    // the finiteness check above now catches the 0/0 it produces. That is the
    // property wanted — the invariant is defended twice and neither defence alone
    // is load-bearing — so this test must not claim to pin that line. Before this
    // file, the `total <= 0` return was the ONLY thing standing between every
    // `score / questions.length` in the app and a poisoned cell, and nothing
    // exercised it at all.
    recordExerciseOutcome({ activityType: 'grammar', score: 0, total: 0 });
    expect(cells()).toEqual([]);
  });

  it('a real total does record — so the test above is not vacuous', () => {
    recordExerciseOutcome({ activityType: 'grammar', score: 8, total: 10 });
    const got = cells();
    expect(got).toHaveLength(1);
    expect(got[0]![0]).toMatch(/:grammar$/);
    expect(got[0]![1].s).toBeCloseTo(0.8, 5);
  });
});
