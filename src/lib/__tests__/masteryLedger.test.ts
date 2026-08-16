/**
 * Phase 2 mastery ledger — rolling per-(level, skill) evidence from scored
 * practice. The ledger MEASURES ability (scores may go down); the merge is
 * monotone in EVIDENCE, not score. Dwell contributes nothing: only events
 * with a real correctness/quality signal are recorded.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  recordMasteryEvent,
  recordExerciseOutcome,
  recordSrsOutcome,
  recordExamSkillScores,
  getMasteryLedger,
  getMasteryProfile,
  readinessForVerification,
  mergeRemoteMasteryLedger,
  snapshotMasteryLedger,
  MIN_SAMPLES,
} from '../masteryLedger';

function seedProfile(xp: number): void {
  // getCurrentContentLevel reads uS → uP_<email>.st and the certification
  // store. With the migration flag unset, getContentUnlockLevel returns the
  // eligible level — deterministic for tests.
  localStorage.setItem('uS', JSON.stringify({ u: 'test@example.com' }));
  localStorage.setItem('uP_test@example.com', JSON.stringify({ st: { xp, lc: 0, gc: 0 } }));
}

beforeEach(() => {
  localStorage.clear();
});

describe('recordMasteryEvent', () => {
  it('accumulates an EWMA and sample count per (level, skill)', () => {
    recordMasteryEvent({ level: 'A2', skill: 'grammar', score: 1 });
    recordMasteryEvent({ level: 'A2', skill: 'grammar', score: 0 });
    const cell = getMasteryLedger().cells['A2:grammar']!;
    expect(cell.n).toBe(2);
    expect(cell.s).toBeGreaterThan(0);
    expect(cell.s).toBeLessThan(1);
  });

  it('a run of failures honestly drags a high score down', () => {
    for (let i = 0; i < 10; i++) recordMasteryEvent({ level: 'B1', skill: 'vocab', score: 1 });
    const high = getMasteryLedger().cells['B1:vocab']!.s;
    for (let i = 0; i < 10; i++) recordMasteryEvent({ level: 'B1', skill: 'vocab', score: 0.2 });
    const after = getMasteryLedger().cells['B1:vocab']!.s;
    expect(after).toBeLessThan(high);
  });

  it('rejects unknown levels and skills silently', () => {
    recordMasteryEvent({ level: 'Z9' as never, skill: 'grammar', score: 1 });
    recordMasteryEvent({ level: 'A2', skill: 'dance' as never, score: 1 });
    expect(Object.keys(getMasteryLedger().cells)).toHaveLength(0);
  });
});

describe('profile and readiness', () => {
  it('a cell below MIN_SAMPLES is untested regardless of score', () => {
    recordMasteryEvent({ level: 'B1', skill: 'grammar', score: 1 });
    const p = getMasteryProfile('B1');
    expect(p.grammar?.tested).toBe(false);
    expect(p.grammar?.strong).toBe(false);
  });

  it('sustained accuracy above threshold with enough samples reads strong', () => {
    for (let i = 0; i < MIN_SAMPLES + 2; i++) {
      recordMasteryEvent({ level: 'B1', skill: 'grammar', score: 0.95 });
    }
    expect(getMasteryProfile('B1').grammar?.strong).toBe(true);
  });

  it('verification readiness reads the stronger-evidenced band (target vs below)', () => {
    // Gated learner practicing at A2 for a B1 verification.
    for (let i = 0; i < MIN_SAMPLES + 3; i++) {
      recordMasteryEvent({ level: 'A2', skill: 'grammar', score: 0.9 });
      recordMasteryEvent({ level: 'A2', skill: 'vocab', score: 0.5 });
    }
    const r = readinessForVerification('B1');
    expect(r.strong).toContain('grammar');
    expect(r.developing).toContain('vocab');
    expect(r.untested).toContain('speaking');
    expect(r.untested).toContain('writing');
  });
});

describe('ingestion adapters', () => {
  it('exercise outcomes map activityType to a skill at the current level', () => {
    seedProfile(1500); // B1-eligible
    recordExerciseOutcome({ activityType: 'grammar', score: 9, total: 12 });
    const cell = getMasteryLedger().cells['B1:grammar']!;
    expect(cell.s).toBeCloseTo(0.75, 5);
  });

  it("types without an honest skill signal ('lesson') are skipped", () => {
    seedProfile(1500);
    recordExerciseOutcome({ activityType: 'lesson', score: 10, total: 10 });
    recordExerciseOutcome({ score: 10, total: 10 });
    recordExerciseOutcome({ activityType: 'grammar' }); // no score → skipped
    expect(Object.keys(getMasteryLedger().cells)).toHaveLength(0);
  });

  it('SRS answers are small-weight vocab evidence', () => {
    seedProfile(500); // A2-eligible
    recordSrsOutcome(true);
    const cell = getMasteryLedger().cells['A2:vocab']!;
    expect(cell.n).toBeLessThan(1);
    expect(cell.s).toBe(1);
  });

  it('exam sections are high-weight evidence at the target status level', () => {
    recordExamSkillScores('B1', { vocab: 0.9, grammar: 0.8, speaking: 0.7, writing: undefined });
    const cells = getMasteryLedger().cells;
    expect(cells['B1:vocab']?.n).toBe(3);
    expect(cells['B1:speaking']?.s).toBe(0.7);
    expect(cells['B1:writing']).toBeUndefined();
  });
});

describe('cross-device merge (evidence-monotone)', () => {
  it('the cell with more samples wins whole; ties break to later update', () => {
    recordMasteryEvent({ level: 'A2', skill: 'vocab', score: 1 }); // local n=1
    mergeRemoteMasteryLedger({
      v: 1,
      cells: { 'A2:vocab': { s: 0.6, n: 8, at: 123 } },
    });
    expect(getMasteryLedger().cells['A2:vocab']).toEqual({ s: 0.6, n: 8, at: 123 });
    // Lower-evidence remote does NOT overwrite.
    mergeRemoteMasteryLedger({ v: 1, cells: { 'A2:vocab': { s: 1, n: 2, at: 999 } } });
    expect(getMasteryLedger().cells['A2:vocab']!.n).toBe(8);
  });

  it('tolerates null, garbage, and wrong versions', () => {
    mergeRemoteMasteryLedger(null);
    mergeRemoteMasteryLedger(undefined);
    mergeRemoteMasteryLedger({ v: 2 as never, cells: {} });
    mergeRemoteMasteryLedger({ v: 1, cells: { 'A2:vocab': { s: 'x' } } } as never);
    expect(Object.keys(getMasteryLedger().cells)).toHaveLength(0);
  });

  it('snapshot returns undefined when empty so Firestore never stores an empty blob', () => {
    expect(snapshotMasteryLedger()).toBeUndefined();
    recordMasteryEvent({ level: 'A2', skill: 'vocab', score: 1 });
    expect(snapshotMasteryLedger()).toBeDefined();
  });
});
