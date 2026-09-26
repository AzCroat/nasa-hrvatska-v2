/**
 * courseUnitProgress — the unit mastery store and its merge.
 *
 * TWO CLASSES OF FAILURE HERE ARE SILENT AND PERMANENT. A merge that lets a
 * remote blob take a pass away un-masters a unit the learner earned, on a device
 * they were not using; and a store that writes anything a scheduler reads turns a
 * DIAGNOSTIC into credit, which is the separation the gate's "on a fail nothing is
 * recorded" rule depends on. Both are asserted directly.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  COURSE_UNITS_KEY,
  MAX_UNIT_ATTEMPTS,
  courseUnitsOrUndef,
  insufficientUnits,
  markUnitTestInsufficient,
  mergeCourseUnits,
  passedUnits,
  readCourseUnits,
  recordUnitTest,
  unitRecord,
  writeCourseUnits,
  requestUnitTest,
  readUnitTestRequest,
  clearUnitTestRequest,
} from '../lib/courseUnitProgress';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('recording an attempt', () => {
  it('records a pass and reports the unit as passed', () => {
    recordUnitTest('A1-1', 13, 15, true, '2026-09-20');
    expect([...passedUnits()]).toEqual(['A1-1']);
    expect(unitRecord('A1-1')).toMatchObject({ passedAt: '2026-09-20', bestCorrect: 13 });
  });

  it('records a FAIL as an attempt and leaves the unit unpassed', () => {
    recordUnitTest('A1-1', 11, 15, false, '2026-09-20');
    expect([...passedUnits()]).toEqual([]);
    const r = unitRecord('A1-1')!;
    expect(r.passedAt).toBeUndefined();
    expect(r.attempts).toHaveLength(1);
    expect(r.attempts![0]).toMatchObject({ correct: 11, total: 15, passed: false });
  });

  // A UNIT IS NOT UN-MASTERED BY A BAD DAY — the same rule lessonRetention holds
  // for a failed re-check.
  it('keeps the first pass date when a later attempt fails', () => {
    recordUnitTest('A1-1', 15, 15, true, '2026-09-10');
    recordUnitTest('A1-1', 4, 15, false, '2026-09-25');
    const r = unitRecord('A1-1')!;
    expect(r.passedAt).toBe('2026-09-10');
    expect(r.attempts).toHaveLength(2);
    expect([...passedUnits()]).toEqual(['A1-1']);
  });

  it('keeps the FIRST pass date when a later attempt also passes', () => {
    recordUnitTest('A1-1', 13, 15, true, '2026-09-10');
    recordUnitTest('A1-1', 15, 15, true, '2026-09-25');
    expect(unitRecord('A1-1')!.passedAt).toBe('2026-09-10');
    expect(unitRecord('A1-1')!.bestCorrect).toBe(15);
  });

  it('keeps the best score and never lowers it', () => {
    recordUnitTest('A1-1', 15, 15, true);
    recordUnitTest('A1-1', 8, 15, false);
    expect(unitRecord('A1-1')!.bestCorrect).toBe(15);
  });

  // THE CAP DROPS THE NEWEST. The first attempt is the acquisition signal.
  it('caps attempts keeping the earliest', () => {
    for (let i = 0; i < MAX_UNIT_ATTEMPTS + 4; i++) {
      recordUnitTest('A1-1', i, 15, false, `2026-09-${String(i + 1).padStart(2, '0')}`);
    }
    const r = unitRecord('A1-1')!;
    expect(r.attempts).toHaveLength(MAX_UNIT_ATTEMPTS);
    expect(r.attempts![0]!.at).toBe('2026-09-01');
    expect(r.attempts![MAX_UNIT_ATTEMPTS - 1]!.correct).toBe(MAX_UNIT_ATTEMPTS - 1);
  });

  it('refuses a zero-item test outright', () => {
    expect(recordUnitTest('A1-1', 0, 0, true)).toBeNull();
    expect(recordUnitTest('', 13, 15, true)).toBeNull();
    expect([...passedUnits()]).toEqual([]);
  });

  it('survives an unreadable store', () => {
    localStorage.setItem(COURSE_UNITS_KEY, 'not json');
    expect(readCourseUnits()).toEqual({ units: {} });
    recordUnitTest('A1-1', 13, 15, true);
    expect([...passedUnits()]).toEqual(['A1-1']);
  });

  it('is absent from the snapshot when empty, and present once used', () => {
    expect(courseUnitsOrUndef()).toBeUndefined();
    recordUnitTest('A1-1', 13, 15, true);
    expect(courseUnitsOrUndef()).toBeTruthy();
  });
});

describe('the insufficient marker', () => {
  it('is recorded, and is not a pass', () => {
    markUnitTestInsufficient('B2-3');
    expect([...insufficientUnits()]).toEqual(['B2-3']);
    expect([...passedUnits()]).toEqual([]);
  });

  it('does not overwrite an existing record', () => {
    recordUnitTest('B2-3', 11, 15, false);
    markUnitTestInsufficient('B2-3');
    expect(unitRecord('B2-3')!.attempts).toHaveLength(1);
    expect(unitRecord('B2-3')!.insufficient).toBe(true);
  });
});

describe('the merge is additive', () => {
  it('unions units known to either side', () => {
    const m = mergeCourseUnits(
      { units: { 'A1-1': { passedAt: '2026-09-10' } } },
      { units: { 'A1-2': { passedAt: '2026-09-11' } } },
    );
    expect(Object.keys(m.units).sort()).toEqual(['A1-1', 'A1-2']);
  });

  // A REMOTE MERGE CAN NEVER UN-MASTER A UNIT.
  it('keeps a pass the other side does not have', () => {
    const m = mergeCourseUnits(
      { units: { 'A1-1': { passedAt: '2026-09-10' } } },
      {
        units: {
          'A1-1': { attempts: [{ at: '2026-09-01', correct: 2, total: 15, passed: false }] },
        },
      },
    );
    expect(m.units['A1-1']!.passedAt).toBe('2026-09-10');
  });

  it('takes the EARLIER pass date — a second device cannot postpone mastery', () => {
    const m = mergeCourseUnits(
      { units: { 'A1-1': { passedAt: '2026-09-20' } } },
      { units: { 'A1-1': { passedAt: '2026-09-05' } } },
    );
    expect(m.units['A1-1']!.passedAt).toBe('2026-09-05');
  });

  it('takes the better score', () => {
    const m = mergeCourseUnits(
      { units: { 'A1-1': { bestCorrect: 10, bestTotal: 15 } } },
      { units: { 'A1-1': { bestCorrect: 14, bestTotal: 15 } } },
    );
    expect(m.units['A1-1']!.bestCorrect).toBe(14);
  });

  // ATTEMPTS ARE HISTORY: the device that saw the FIRST attempt contributes it.
  it('unions attempts oldest-first and de-duplicates them', () => {
    const local = {
      units: {
        'A1-1': { attempts: [{ at: '2026-09-10', correct: 9, total: 15, passed: false }] },
      },
    };
    const remote = {
      units: {
        'A1-1': {
          attempts: [
            { at: '2026-09-01', correct: 4, total: 15, passed: false },
            { at: '2026-09-10', correct: 9, total: 15, passed: false },
          ],
        },
      },
    };
    const m = mergeCourseUnits(local, remote);
    expect(m.units['A1-1']!.attempts!.map((a) => a.at)).toEqual(['2026-09-01', '2026-09-10']);
  });

  it('caps the merged attempt list keeping the earliest', () => {
    const many = (base: number) =>
      Array.from({ length: 8 }, (_, i) => ({
        at: `2026-09-${String(base + i).padStart(2, '0')}`,
        correct: i,
        total: 15,
        passed: false,
      }));
    const m = mergeCourseUnits(
      { units: { 'A1-1': { attempts: many(1) } } },
      { units: { 'A1-1': { attempts: many(11) } } },
    );
    expect(m.units['A1-1']!.attempts).toHaveLength(MAX_UNIT_ATTEMPTS);
    expect(m.units['A1-1']!.attempts![0]!.at).toBe('2026-09-01');
  });

  // A PASS ANYWHERE OUTRANKS "I COULD NOT BUILD A TEST" ANYWHERE: a device that
  // assembled and passed the test is better evidence than one with a stale payload.
  it('clears the insufficient marker when either side has a pass', () => {
    const m = mergeCourseUnits(
      { units: { 'A1-1': { insufficient: true } } },
      { units: { 'A1-1': { passedAt: '2026-09-10' } } },
    );
    expect(m.units['A1-1']!.insufficient).toBeUndefined();
    expect(m.units['A1-1']!.passedAt).toBe('2026-09-10');
  });

  it('keeps the marker while neither side has a pass', () => {
    const m = mergeCourseUnits(
      { units: { 'A1-1': { insufficient: true } } },
      { units: { 'A1-1': { attempts: [] } } },
    );
    expect(m.units['A1-1']!.insufficient).toBe(true);
  });

  it('survives junk on either side', () => {
    expect(mergeCourseUnits({ units: {} }, null)).toEqual({ units: {} });
    expect(mergeCourseUnits({ units: {} }, { nope: 1 })).toEqual({ units: {} });
    expect(
      mergeCourseUnits({ units: { 'A1-1': { passedAt: 'x' } } }, undefined).units['A1-1'],
    ).toBeTruthy();
  });
});

describe('the navigation handoff', () => {
  // READ NON-DESTRUCTIVELY: a unit test must survive a remount, unlike the
  // Learning Center's one-shot lesson lookup.
  it('survives repeated reads and is cleared explicitly', () => {
    requestUnitTest('A1-4');
    expect(readUnitTestRequest()).toBe('A1-4');
    expect(readUnitTestRequest()).toBe('A1-4');
    clearUnitTestRequest();
    expect(readUnitTestRequest()).toBeNull();
  });

  it('ignores an empty request', () => {
    requestUnitTest('');
    expect(readUnitTestRequest()).toBeNull();
  });
});

describe('the store writes nothing a scheduler reads', () => {
  // The separation the gate depends on: this is a DIAGNOSTIC, never credit.
  it('touches only its own key', () => {
    recordUnitTest('A1-1', 13, 15, true);
    markUnitTestInsufficient('A1-2');
    writeCourseUnits(readCourseUnits());
    const keys = Object.keys(localStorage).sort();
    expect(keys).toEqual([COURSE_UNITS_KEY]);
  });
});
