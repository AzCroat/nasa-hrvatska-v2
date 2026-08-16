/**
 * Phase 1 mastery gate — provisional (grandfathered) passes and the
 * verification gate (2026-08-16, owner directive).
 *
 * Grandfathered certificates keep the content access they granted, but they
 * are PROVISIONAL: the level was inherited from activity, never demonstrated.
 * While any provisional level sits above the genuinely-verified level, the
 * journey locks onto verification — new content at/above the gate's target is
 * paused (getContentUnlockLevel caps below it) and there is no snooze. A real
 * pass lifts the gate instantly. Nothing is ever revoked: access stays,
 * provisional passes survive, only forward progression waits.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  getCertificationState,
  writeCertificationState,
  migrateGrandfatheredCertification,
  markProvisionalGrandfathers,
  grantProvisionalPlacement,
  mergeRemoteCertifications,
  recordEquivalencyAttempt,
  isGrandfatherPassSignature,
  isProvisionalPass,
  getVerifiedLevel,
  getCertifiedLevel,
  getVerificationGate,
  isBlockedByVerificationGate,
  getContentUnlockLevel,
  computePassed,
  type CertificationState,
  type CertificationPass,
} from '../cefrCertification';

const GF_PASS: CertificationPass = {
  passedAt: 1700000000000,
  scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
  overall: 80,
};

const REAL_PASS: CertificationPass = {
  passedAt: 1710000000000,
  scores: { vocab: 0.9, grammar: 0.85, reading: 0.95, speaking: 0.82, writing: 0.84 },
  overall: 87.2,
};

function seedState(passes: CertificationState['passes']): void {
  const s = getCertificationState();
  s.passes = passes;
  writeCertificationState(s);
}

beforeEach(() => {
  localStorage.clear();
  // The content-unlock race guard: pretend the grandfather migration ran.
  localStorage.setItem('nh_cefr_migration_v1_done', '1');
});

describe('grandfather signature detection', () => {
  it('matches the exact migration shape', () => {
    expect(isGrandfatherPassSignature(GF_PASS)).toBe(true);
  });

  it('does not match a real pass, even a minimum-score one with extra skills', () => {
    expect(isGrandfatherPassSignature(REAL_PASS)).toBe(false);
    expect(
      isGrandfatherPassSignature({
        passedAt: 1,
        scores: { vocab: 0.8, grammar: 0.8, reading: 0.8, speaking: 0.8 },
        overall: 80,
      }),
    ).toBe(false);
    expect(
      isGrandfatherPassSignature({
        passedAt: 1,
        scores: { vocab: 0.8, grammar: 0.85, reading: 0.8 },
        overall: 81.7,
      }),
    ).toBe(false);
  });

  it('isProvisionalPass honours the explicit flag regardless of shape', () => {
    expect(isProvisionalPass({ ...REAL_PASS, provisional: true })).toBe(true);
    expect(isProvisionalPass(REAL_PASS)).toBe(false);
    expect(isProvisionalPass(GF_PASS)).toBe(true); // signature fallback
  });
});

describe('migrations', () => {
  it('new grandfather passes are written provisional', () => {
    localStorage.removeItem('nh_cefr_migration_v1_done');
    migrateGrandfatheredCertification('B1');
    const s = getCertificationState();
    expect(s.passes.A2?.provisional).toBe(true);
    expect(s.passes.B1?.provisional).toBe(true);
    expect(s.passes.B2).toBeUndefined();
  });

  it('markProvisionalGrandfathers flags legacy unmarked grandfather passes once', () => {
    seedState({ A2: { ...GF_PASS }, B1: { ...REAL_PASS } });
    markProvisionalGrandfathers();
    const s = getCertificationState();
    expect(s.passes.A2?.provisional).toBe(true);
    expect(s.passes.B1?.provisional).toBeUndefined();
    expect(localStorage.getItem('nh_cefr_provisional_v1_done')).toBe('1');
  });
});

describe('verified level and the gate', () => {
  it('provisional passes do not raise the verified level', () => {
    seedState({ A2: { ...GF_PASS, provisional: true }, B1: { ...GF_PASS, provisional: true } });
    expect(getCertifiedLevel()).toBe('B1'); // access level unchanged
    expect(getVerifiedLevel()).toBe('A1'); // nothing demonstrated
    const gate = getVerificationGate();
    expect(gate.required).toBe(true);
    expect(gate.target).toBe('B1');
    expect(gate.options).toEqual(['B1', 'A2']);
  });

  it('a real pass anywhere in the ladder subsumes lower provisional levels', () => {
    seedState({ A2: { ...GF_PASS, provisional: true }, B1: { ...REAL_PASS } });
    expect(getVerifiedLevel()).toBe('B1');
    expect(getVerificationGate().required).toBe(false);
  });

  it('step-down verification narrows the gate but keeps the top target', () => {
    seedState({
      A2: { ...REAL_PASS },
      B1: { ...GF_PASS, provisional: true },
    });
    const gate = getVerificationGate();
    expect(gate.required).toBe(true);
    expect(gate.verified).toBe('A2');
    expect(gate.target).toBe('B1');
    expect(gate.options).toEqual(['B1']);
  });

  it('blocks new content at/above the target, keeps everything below open', () => {
    seedState({ A2: { ...GF_PASS, provisional: true }, B1: { ...GF_PASS, provisional: true } });
    expect(isBlockedByVerificationGate('B1')).toBe(true);
    expect(isBlockedByVerificationGate('B2')).toBe(true);
    expect(isBlockedByVerificationGate('A2')).toBe(false);
    expect(isBlockedByVerificationGate('A1')).toBe(false);
    // The unlock cap every content pool inherits:
    expect(getContentUnlockLevel('B1')).toBe('A2');
  });

  it('no gate → unlock level is the certified level, as before', () => {
    seedState({ A2: { ...REAL_PASS } });
    expect(getVerificationGate().required).toBe(false);
    expect(getContentUnlockLevel('B1')).toBe('A2');
  });

  it('a passed verification lifts the gate and restores the full level instantly', () => {
    seedState({ A2: { ...GF_PASS, provisional: true }, B1: { ...GF_PASS, provisional: true } });
    expect(getContentUnlockLevel('B1')).toBe('A2');
    recordEquivalencyAttempt({
      level: 'B1',
      scores: { vocab: 0.9, grammar: 0.9, reading: 0.9, speaking: 0.85, writing: 0.85 },
      currentLessonCount: 10,
    });
    expect(getVerifiedLevel()).toBe('B1');
    expect(getVerificationGate().required).toBe(false);
    expect(getContentUnlockLevel('B1')).toBe('B1');
  });

  it('a failed verification keeps access AND keeps the gate (no revocation, no skip)', () => {
    seedState({ B1: { ...GF_PASS, provisional: true } });
    const res = recordEquivalencyAttempt({
      level: 'B1',
      scores: { vocab: 0.9, grammar: 0.9, reading: 0.9, speaking: 0.4, writing: 0.5 },
      currentLessonCount: 10,
    });
    expect(res.passed).toBe(false);
    expect(getCertifiedLevel()).toBe('B1'); // access not revoked
    expect(getVerificationGate().required).toBe(true); // gate still on
  });
});

describe('writing skill', () => {
  it('counts toward pass/fail whenever present', () => {
    const fail = computePassed({ vocab: 1, grammar: 1, reading: 1, writing: 0.5 });
    expect(fail.passed).toBe(false);
    const pass = computePassed({ vocab: 1, grammar: 1, reading: 1, writing: 0.85 });
    expect(pass.passed).toBe(true);
  });

  it('requireWriting makes an attempt without a writing score unpassable', () => {
    const res = computePassed({ vocab: 1, grammar: 1, reading: 1 }, { requireWriting: true });
    expect(res.passed).toBe(false);
  });

  it('recordEquivalencyAttempt requires writing at B1+ but not below', () => {
    const b1 = recordEquivalencyAttempt({
      level: 'B1',
      scores: { vocab: 1, grammar: 1, reading: 1, speaking: 0.9 },
      currentLessonCount: 0,
    });
    expect(b1.passed).toBe(false); // writing missing
    localStorage.clear();
    localStorage.setItem('nh_cefr_migration_v1_done', '1');
    const a2 = recordEquivalencyAttempt({
      level: 'A2',
      scores: { vocab: 1, grammar: 1, reading: 1 },
      currentLessonCount: 0,
    });
    expect(a2.passed).toBe(true); // A2 needs no writing/speaking
  });
});

describe('cross-device merge', () => {
  it('merges the writing score (max) instead of dropping it', () => {
    seedState({ B1: { ...REAL_PASS, scores: { ...REAL_PASS.scores, writing: 0.84 } } });
    mergeRemoteCertifications({
      passes: { B1: { ...REAL_PASS, scores: { ...REAL_PASS.scores, writing: 0.95 } } },
      attempts: [],
      lastFailedAt: {},
      checkpoints: {
        lastCheckpointAt: null,
        activeDaysAtLastCheckpoint: 0,
        consecutiveFails: {},
        focusSkills: {},
        demotions: [],
        snoozedUntil: null,
      },
      v: 2,
    });
    expect(getCertificationState().passes.B1?.scores.writing).toBe(0.95);
  });

  it('an unmarked grandfather blob from an old device cannot wash off provisional', () => {
    seedState({ B1: { ...GF_PASS, provisional: true } });
    mergeRemoteCertifications({
      passes: { B1: { ...GF_PASS } }, // old client: no flag, same signature
      attempts: [],
      lastFailedAt: {},
      checkpoints: {
        lastCheckpointAt: null,
        activeDaysAtLastCheckpoint: 0,
        consecutiveFails: {},
        focusSkills: {},
        demotions: [],
        snoozedUntil: null,
      },
      v: 2,
    });
    expect(isProvisionalPass(getCertificationState().passes.B1)).toBe(true);
    expect(getVerificationGate().required).toBe(true);
  });

  it('a real pass from another device clears provisional everywhere', () => {
    seedState({ B1: { ...GF_PASS, provisional: true } });
    mergeRemoteCertifications({
      passes: { B1: { ...REAL_PASS } },
      attempts: [],
      lastFailedAt: {},
      checkpoints: {
        lastCheckpointAt: null,
        activeDaysAtLastCheckpoint: 0,
        consecutiveFails: {},
        focusSkills: {},
        demotions: [],
        snoozedUntil: null,
      },
      v: 2,
    });
    expect(isProvisionalPass(getCertificationState().passes.B1)).toBe(false);
    expect(getVerifiedLevel()).toBe('B1');
    expect(getVerificationGate().required).toBe(false);
  });

  it('an incoming provisional pass on a fresh device arrives flagged', () => {
    mergeRemoteCertifications({
      passes: { A2: { ...GF_PASS } }, // unmarked, signature only
      attempts: [],
      lastFailedAt: {},
      checkpoints: {
        lastCheckpointAt: null,
        activeDaysAtLastCheckpoint: 0,
        consecutiveFails: {},
        focusSkills: {},
        demotions: [],
        snoozedUntil: null,
      },
      v: 2,
    });
    expect(getCertificationState().passes.A2?.provisional).toBe(true);
  });
});

describe('placement grants provisional standing (Phase 5)', () => {
  it('grants provisional passes up to the placed level and switches the gate on', () => {
    grantProvisionalPlacement('B1');
    const s = getCertificationState();
    expect(isProvisionalPass(s.passes.A2)).toBe(true);
    expect(isProvisionalPass(s.passes.B1)).toBe(true);
    expect(s.passes.B2).toBeUndefined();
    const gate = getVerificationGate();
    expect(gate.required).toBe(true);
    expect(gate.target).toBe('B1');
    // Practice below the placed level opens; the placed level waits for a
    // real verification. The unlock race guard is initialised by the grant.
    expect(getContentUnlockLevel('A1')).toBe('A2');
  });

  it('A1 placement grants nothing — the entry point needs no certificate', () => {
    grantProvisionalPlacement('A1');
    expect(Object.keys(getCertificationState().passes)).toHaveLength(0);
    expect(getVerificationGate().required).toBe(false);
  });

  it('never overwrites a real pass when a returning user re-takes placement', () => {
    seedState({ A2: { ...REAL_PASS } });
    grantProvisionalPlacement('B1');
    const s = getCertificationState();
    expect(isProvisionalPass(s.passes.A2)).toBe(false); // real pass kept
    expect(isProvisionalPass(s.passes.B1)).toBe(true);
    expect(getVerifiedLevel()).toBe('A2');
    expect(getVerificationGate().target).toBe('B1');
  });

  it('is idempotent across repeated placements', () => {
    grantProvisionalPlacement('A2');
    const first = JSON.stringify(getCertificationState().passes.A2!.scores);
    grantProvisionalPlacement('A2');
    expect(JSON.stringify(getCertificationState().passes.A2!.scores)).toBe(first);
    expect(Object.keys(getCertificationState().passes)).toEqual(['A2']);
  });
});
