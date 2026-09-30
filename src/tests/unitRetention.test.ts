/**
 * unitRetention — mastery is retention, not one sitting.
 *
 * THE RULE THIS FILE EXISTS TO KEEP: a failed re-check NEVER un-advances a unit.
 * The learner met the bar on evidence, and taking that away would be the app
 * changing its mind about something it measured. `lessonRetention` states the same
 * for a lesson ("a lesson is NEVER un-passed; the ladder is the only thing that
 * moves") and this is that rule one level up.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  RECHECK_RETRY_DAYS,
  UNIT_RECHECK_INTERVALS,
  afterRecheck,
  mergeRecheck,
  recheckDue,
  retentionHeld,
  startRecheckLadder,
} from '../lib/unitRetention';
import {
  recordUnitTest,
  recordUnitProduction,
  recordUnitRecheck,
  startUnitRetention,
  retainedUnits,
  dueRecheckUnits,
  unitRecord,
  passedUnits,
  producedUnits,
} from '../lib/courseUnitProgress';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the ladder', () => {
  it('expands, and its first rung is later than a lesson’s', () => {
    expect([...UNIT_RECHECK_INTERVALS]).toEqual([7, 30]);
    for (let i = 1; i < UNIT_RECHECK_INTERVALS.length; i++) {
      expect(UNIT_RECHECK_INTERVALS[i]!).toBeGreaterThan(UNIT_RECHECK_INTERVALS[i - 1]!);
    }
  });

  it('starts at the first interval after the bar was met', () => {
    expect(startRecheckLadder('2026-09-01')).toEqual({ stage: 0, dueAt: '2026-09-08' });
  });

  it('is due on the day and not before', () => {
    const r = startRecheckLadder('2026-09-01');
    expect(recheckDue(r, '2026-09-07')).toBe(false);
    expect(recheckDue(r, '2026-09-08')).toBe(true);
    expect(recheckDue(r, '2026-09-20')).toBe(true);
    expect(recheckDue(undefined, '2026-09-20')).toBe(false);
  });

  it('climbs on a pass and schedules the next interval', () => {
    const r = afterRecheck(startRecheckLadder('2026-09-01'), true, '2026-09-08');
    expect(r).toMatchObject({ stage: 1, dueAt: '2026-10-08', lastAt: '2026-09-08' });
    expect(retentionHeld(r)).toBe(false);
  });

  it('is held at the top of the ladder, and stops being due', () => {
    let r = afterRecheck(startRecheckLadder('2026-09-01'), true, '2026-09-08');
    r = afterRecheck(r, true, '2026-10-08');
    expect(retentionHeld(r)).toBe(true);
    expect(r.heldAt).toBe('2026-10-08');
    expect(recheckDue(r, '2027-01-01')).toBe(false);
  });

  // A FAILURE MOVES THE LADDER AND NOTHING ELSE.
  it('resets to stage 0 and returns tomorrow on a failure', () => {
    const climbed = afterRecheck(startRecheckLadder('2026-09-01'), true, '2026-09-08');
    const failed = afterRecheck(climbed, false, '2026-10-08');
    expect(failed.stage).toBe(0);
    expect(failed.dueAt).toBe('2026-10-09');
    expect(RECHECK_RETRY_DAYS).toBe(1);
    expect(retentionHeld(failed)).toBe(false);
  });

  // THE RETRY AFTER A SLIP IS AT THE SAME STAGE, so the stage cannot seed a fresh paper;
  // the count of sittings can (sweep 225).
  it('counts every sitting, pass or fail', () => {
    let r = afterRecheck(startRecheckLadder('2026-09-01'), false, '2026-09-08');
    expect(r).toMatchObject({ stage: 0, sat: 1 });
    r = afterRecheck(r, false, '2026-09-09');
    expect(r).toMatchObject({ stage: 0, sat: 2 });
    r = afterRecheck(r, true, '2026-09-10');
    expect(r).toMatchObject({ stage: 1, sat: 3 });
    r = afterRecheck(r, true, '2026-10-10');
    expect(r).toMatchObject({ stage: 2, sat: 4 });
  });

  it('can be re-climbed after a failure', () => {
    let r = afterRecheck(startRecheckLadder('2026-09-01'), false, '2026-09-08');
    r = afterRecheck(r, true, '2026-09-09');
    r = afterRecheck(r, true, '2026-09-16');
    expect(retentionHeld(r)).toBe(true);
  });

  it('survives a malformed date rather than producing NaN', () => {
    expect(startRecheckLadder('not-a-date').dueAt).toBe('not-a-date');
    expect(startRecheckLadder('').dueAt).toBe('');
    expect(startRecheckLadder('2026-9-1').dueAt).toBe('2026-9-1');
  });

  // CALENDAR ARITHMETIC, NOT CLOCK ARITHMETIC. `localDayBoundary.test.ts` flagged the
  // first version of `addDays` for using `toISOString`; the rewrite formats UTC parts
  // by hand, so these must hold whatever the runner's timezone is.
  it('rolls over months and years, and leap days', () => {
    expect(startRecheckLadder('2026-09-25').dueAt).toBe('2026-10-02');
    expect(startRecheckLadder('2026-12-28').dueAt).toBe('2027-01-04');
    expect(afterRecheck(startRecheckLadder('2028-02-01'), true, '2028-02-08').dueAt).toBe(
      '2028-03-09',
    );
  });
});

describe('the store', () => {
  function meetBar(id = 'A1-1'): void {
    recordUnitTest(id, 15, 15, true, '2026-09-01');
    recordUnitProduction(id, 'write', 70, '2026-09-01');
    recordUnitProduction(id, 'speak', 0.8, '2026-09-01');
  }

  it('starts the ladder once, and never restarts a running one', () => {
    meetBar();
    startUnitRetention('A1-1', '2026-09-01');
    expect(unitRecord('A1-1')!.recheck).toEqual({ stage: 0, dueAt: '2026-09-08' });
    // A later re-take must not push the next re-check away.
    startUnitRetention('A1-1', '2026-09-20');
    expect(unitRecord('A1-1')!.recheck!.dueAt).toBe('2026-09-08');
  });

  it('does not start a ladder for a unit it has never heard of', () => {
    startUnitRetention('A1-1', '2026-09-01');
    expect(unitRecord('A1-1')).toBeNull();
  });

  it('reports what is due, oldest first', () => {
    meetBar('A1-1');
    startUnitRetention('A1-1', '2026-09-01');
    meetBar('A1-2');
    startUnitRetention('A1-2', '2026-08-20');
    expect(dueRecheckUnits('2026-09-10')).toEqual(['A1-2', 'A1-1']);
    expect(dueRecheckUnits('2026-08-28')).toEqual(['A1-2']);
    expect(dueRecheckUnits('2026-08-01')).toEqual([]);
  });

  it('reports a held unit as retained', () => {
    meetBar();
    startUnitRetention('A1-1', '2026-09-01');
    recordUnitRecheck('A1-1', true, '2026-09-08');
    expect([...retainedUnits()]).toEqual([]);
    recordUnitRecheck('A1-1', true, '2026-10-08');
    expect([...retainedUnits()]).toEqual(['A1-1']);
  });

  // THE CONTRACT: a failed re-check takes nothing away.
  it('leaves the pass and the production untouched on a failed re-check', () => {
    meetBar();
    startUnitRetention('A1-1', '2026-09-01');
    recordUnitRecheck('A1-1', false, '2026-09-08');
    expect([...passedUnits()]).toEqual(['A1-1']);
    expect([...producedUnits()]).toEqual(['A1-1']);
    expect(unitRecord('A1-1')!.passedAt).toBe('2026-09-01');
    expect(unitRecord('A1-1')!.recheck).toMatchObject({ stage: 0, dueAt: '2026-09-09' });
  });

  it('refuses a re-check for a unit with no record', () => {
    expect(recordUnitRecheck('A1-1', true)).toBeNull();
  });
});

describe('the merge', () => {
  it('takes the LATER checked ladder', () => {
    const a = { stage: 1, dueAt: '2026-10-08', lastAt: '2026-09-08' };
    const b = { stage: 0, dueAt: '2026-09-02', lastAt: '2026-09-01' };
    expect(mergeRecheck(a, b)).toMatchObject({ stage: 1, dueAt: '2026-10-08' });
    expect(mergeRecheck(b, a)).toMatchObject({ stage: 1, dueAt: '2026-10-08' });
  });

  // A HELD UNIT CANNOT BE ROLLED BACK BY A DEVICE THAT IS BEHIND.
  it('keeps a held ladder held, whichever side is later', () => {
    const held = { stage: 2, dueAt: '2026-10-08', lastAt: '2026-10-08', heldAt: '2026-10-08' };
    const behind = { stage: 0, dueAt: '2026-11-01', lastAt: '2026-10-25' };
    const m = mergeRecheck(held, behind)!;
    expect(retentionHeld(m)).toBe(true);
    expect(m.heldAt).toBe('2026-10-08');
  });

  it('keeps the EARLIER held date', () => {
    const m = mergeRecheck(
      { stage: 2, dueAt: 'x', heldAt: '2026-10-20' },
      { stage: 2, dueAt: 'y', heldAt: '2026-10-08' },
    )!;
    expect(m.heldAt).toBe('2026-10-08');
  });

  it('keeps the LARGER count of sittings, whichever side is later', () => {
    const later = { stage: 0, dueAt: '2026-09-10', lastAt: '2026-09-09', sat: 1 };
    const earlier = { stage: 0, dueAt: '2026-09-09', lastAt: '2026-09-08', sat: 3 };
    expect(mergeRecheck(later, earlier)!.sat).toBe(3);
    expect(mergeRecheck(earlier, later)!.sat).toBe(3);
    expect(mergeRecheck({ stage: 0, dueAt: 'x' }, { stage: 0, dueAt: 'y' })!.sat).toBeUndefined();
  });

  it('carries one side when the other has none', () => {
    const only = { stage: 1, dueAt: '2026-10-08' };
    expect(mergeRecheck(only, undefined)).toBe(only);
    expect(mergeRecheck(undefined, only)).toBe(only);
    expect(mergeRecheck(undefined, undefined)).toBeUndefined();
  });
});
