/**
 * cefrCertification.rollback.test.ts — HONEST ROLLBACK (owner directive,
 * 2026-08-17, from a live field report: a learner scored 0% on writing in the
 * C1 verification yet still displayed C1).
 *
 * Pins:
 *  - a FAILED verification of a provisional level steps standing down one
 *    level (remove failed provisional + all provisionals above; grant
 *    provisional one below unless A1/occupied; record a 'verification_fail'
 *    demotion)
 *  - a failed ADVANCEMENT attempt (no provisional held) rolls nothing back
 *  - the demotion is a merge TOMBSTONE: stale sync blobs cannot resurrect a
 *    rolled-back level, in either direction; a pass RE-EARNED after the
 *    demotion always survives
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  recordEquivalencyAttempt,
  mergeRemoteCertifications,
  getCertificationState,
  getCertifiedLevel,
  getVerificationGate,
  getLastVerificationRollback,
  isProvisionalPass,
  emptyCheckpointState,
  type CertificationState,
} from '../cefrCertification.js';

const KEY = 'nh_cefr_certifications';

/** Grandfather-signature provisional pass (the shape migrations write). */
const provisionalPass = (passedAt = 1000) => ({
  passedAt,
  scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
  overall: 80,
  provisional: true,
});

const realPass = (passedAt = 1000) => ({
  passedAt,
  scores: { vocab: 0.9, grammar: 0.9, reading: 0.9, listening: 0.9, speaking: 0.9, writing: 0.9 },
  overall: 90,
});

function seed(passes: Record<string, unknown>, extra: Partial<CertificationState> = {}) {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      passes,
      attempts: [],
      lastFailedAt: {},
      checkpoints: emptyCheckpointState(),
      v: 2,
      ...extra,
    }),
  );
}

// The son's exact shape: strong receptive skills, failed production.
const FAILED_C1_SCORES = {
  vocab: 0.9,
  grammar: 0.9,
  reading: 0.9,
  listening: 0.85,
  speaking: 0.3,
  writing: 0,
};

beforeEach(() => localStorage.clear());

describe('failed verification rolls provisional standing down', () => {
  it('C1 provisional + failed check → B2 provisional, tombstone recorded, gate targets B2', () => {
    seed({
      A2: provisionalPass(),
      B1: provisionalPass(),
      B2: provisionalPass(),
      C1: provisionalPass(),
    });
    const res = recordEquivalencyAttempt({
      level: 'C1',
      scores: FAILED_C1_SCORES,
      currentLessonCount: 50,
    });
    expect(res.passed).toBe(false);
    expect(res.rollback).toEqual({ from: 'C1', to: 'B2' });
    const s = getCertificationState();
    expect(s.passes.C1).toBeUndefined();
    expect(s.passes.B2 && isProvisionalPass(s.passes.B2)).toBe(true);
    expect(getCertifiedLevel()).toBe('B2');
    const gate = getVerificationGate();
    expect(gate.required).toBe(true);
    expect(gate.target).toBe('B2');
    expect(getLastVerificationRollback()).toMatchObject({ from: 'C1', to: 'B2' });
  });

  it('grants the level below when it was not already held', () => {
    seed({ B2: provisionalPass() }); // B2 only, nothing below
    const res = recordEquivalencyAttempt({
      level: 'B2',
      scores: FAILED_C1_SCORES,
      currentLessonCount: 10,
    });
    expect(res.rollback).toEqual({ from: 'B2', to: 'B1' });
    const s = getCertificationState();
    expect(s.passes.B1 && isProvisionalPass(s.passes.B1)).toBe(true);
  });

  it('also clears provisionals ABOVE the failed level (even less demonstrated)', () => {
    seed({ B2: provisionalPass(), C1: provisionalPass() });
    recordEquivalencyAttempt({ level: 'B2', scores: FAILED_C1_SCORES, currentLessonCount: 10 });
    const s = getCertificationState();
    expect(s.passes.B2).toBeUndefined();
    expect(s.passes.C1).toBeUndefined();
    expect(getVerificationGate().target).toBe('B1');
  });

  it('failed A2 verification lands on the A1 floor with the gate resolved', () => {
    seed({ A2: provisionalPass() });
    const res = recordEquivalencyAttempt({
      level: 'A2',
      scores: FAILED_C1_SCORES,
      currentLessonCount: 3,
    });
    expect(res.rollback).toEqual({ from: 'A2', to: 'A1' });
    expect(getCertifiedLevel()).toBe('A1');
    expect(getVerificationGate().required).toBe(false); // nothing provisional left
  });

  it('a failed ADVANCEMENT attempt (no provisional held) rolls nothing back', () => {
    seed({ A2: realPass() }); // verified A2, attempting B1 advancement
    const res = recordEquivalencyAttempt({
      level: 'B1',
      scores: FAILED_C1_SCORES,
      currentLessonCount: 20,
    });
    expect(res.passed).toBe(false);
    expect(res.rollback).toBeNull();
    expect(getCertifiedLevel()).toBe('A2');
    expect(getCertificationState().checkpoints.demotions).toHaveLength(0);
  });

  it('never touches a REAL pass at the failed level', () => {
    seed({ B1: realPass() });
    const res = recordEquivalencyAttempt({
      level: 'B1',
      scores: FAILED_C1_SCORES,
      currentLessonCount: 20,
    });
    expect(res.rollback).toBeNull();
    expect(getCertificationState().passes.B1).toBeTruthy();
  });
});

describe('demotion tombstones in the sync merge', () => {
  it('a stale remote blob cannot resurrect the rolled-back level', () => {
    seed({ C1: provisionalPass(1000) });
    recordEquivalencyAttempt({ level: 'C1', scores: FAILED_C1_SCORES, currentLessonCount: 50 });
    expect(getCertificationState().passes.C1).toBeUndefined();
    // The other device never saw the rollback — its blob still carries C1.
    mergeRemoteCertifications({
      passes: { C1: provisionalPass(1000) },
      attempts: [],
      lastFailedAt: {},
      checkpoints: emptyCheckpointState(),
      v: 2,
    } as unknown as CertificationState);
    expect(getCertificationState().passes.C1).toBeUndefined();
    expect(getCertifiedLevel()).toBe('B2');
  });

  it('a remote demotion clears the stale local pass (tombstones travel)', () => {
    seed({ C1: provisionalPass(1000) });
    const cp = emptyCheckpointState();
    cp.demotions.push({ from: 'C1', to: 'B2', at: 5000, reason: 'verification_fail' });
    mergeRemoteCertifications({
      passes: {},
      attempts: [],
      lastFailedAt: {},
      checkpoints: cp,
      v: 2,
    } as unknown as CertificationState);
    expect(getCertificationState().passes.C1).toBeUndefined();
  });

  it('a pass RE-EARNED after the demotion always survives the sweep', () => {
    seed({});
    const cp = emptyCheckpointState();
    cp.demotions.push({ from: 'B1', to: 'A2', at: 5000, reason: 'verification_fail' });
    seed({ B1: realPass(9000) }, { checkpoints: cp });
    mergeRemoteCertifications({
      passes: { B1: realPass(9000) },
      attempts: [],
      lastFailedAt: {},
      checkpoints: emptyCheckpointState(),
      v: 2,
    } as unknown as CertificationState);
    expect(getCertificationState().passes.B1).toBeTruthy();
    expect(getCertifiedLevel()).toBe('B1');
  });

  it('closes the pre-existing checkpoint-demotion resurrection hole too', () => {
    seed({ A2: realPass(1000), B1: realPass(1000) });
    const cp = emptyCheckpointState();
    cp.demotions.push({ from: 'B1', to: 'A2', at: 5000, reason: 'checkpoint_fail' });
    seed({ A2: realPass(1000) }, { checkpoints: cp });
    mergeRemoteCertifications({
      passes: { A2: realPass(1000), B1: realPass(1000) }, // stale device
      attempts: [],
      lastFailedAt: {},
      checkpoints: emptyCheckpointState(),
      v: 2,
    } as unknown as CertificationState);
    expect(getCertificationState().passes.B1).toBeUndefined();
    expect(getCertifiedLevel()).toBe('A2');
  });
});
