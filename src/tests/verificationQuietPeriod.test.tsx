// src/tests/verificationQuietPeriod.test.tsx
//
// Verification quiet period (owner directive, 2026-08-18). The finding this
// pins: the gate hero was a PERMANENT red takeover — a failed check rolled
// the level down to a new provisional target, so the banner survived the very
// exam the learner just sat. Now any attempt (pass or fail) quiets the hero
// for a week: the chip names when the next check is ready, the next-step
// engine recommends practice instead of a retake, and the GATE itself (locked
// content) stays exactly as strict.

import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

import {
  VERIFICATION_QUIET_DAYS,
  getLastAttemptAt,
  verificationQuietUntil,
  isVerificationQuiet,
} from '../lib/cefrCertification';
import VerificationGateCard from '../components/home/VerificationGateCard';

const KEY = 'nh_cefr_certifications';
const DAY = 24 * 60 * 60 * 1000;

function seedState({
  attempts = [] as Array<{ level: string; passed: boolean; takenAt: number }>,
} = {}) {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      passes: {},
      attempts: attempts.map((a) => ({ ...a, scores: { vocab: 0.5, grammar: 0.5, reading: 0.5 } })),
      lastFailedAt: {},
      checkpoints: { unlocked: {}, demotions: [] },
      v: 2,
    }),
  );
}

const GATE = { required: true, target: 'B2', verified: 'B1', options: ['B2'] } as never;

beforeEach(() => localStorage.clear());

describe('quiet-period helpers', () => {
  it('no attempts ever → not quiet (the hero greets first-timers)', () => {
    seedState();
    expect(getLastAttemptAt()).toBeNull();
    expect(isVerificationQuiet()).toBe(false);
    expect(verificationQuietUntil()).toBeNull();
  });

  it('an attempt today → quiet, until exactly attempt + quiet window', () => {
    const takenAt = Date.now() - 1000;
    seedState({ attempts: [{ level: 'C1', passed: false, takenAt }] });
    expect(getLastAttemptAt()).toBe(takenAt);
    expect(isVerificationQuiet()).toBe(true);
    expect(verificationQuietUntil()).toBe(takenAt + VERIFICATION_QUIET_DAYS * DAY);
  });

  it('a PASSED attempt quiets identically — taking the test is what counts', () => {
    seedState({ attempts: [{ level: 'B1', passed: true, takenAt: Date.now() - DAY }] });
    expect(isVerificationQuiet()).toBe(true);
  });

  it('the quiet lapses after the window — the hero may return', () => {
    seedState({
      attempts: [
        { level: 'C1', passed: false, takenAt: Date.now() - (VERIFICATION_QUIET_DAYS + 1) * DAY },
      ],
    });
    expect(isVerificationQuiet()).toBe(false);
  });

  it('the LATEST attempt across levels drives the window', () => {
    seedState({
      attempts: [
        { level: 'C1', passed: false, takenAt: Date.now() - 30 * DAY },
        { level: 'B2', passed: false, takenAt: Date.now() - DAY },
      ],
    });
    expect(isVerificationQuiet()).toBe(true);
  });
});

describe('VerificationGateCard — hero vs chip', () => {
  it('never-attempted: the full hero with its CTA', () => {
    seedState();
    render(<VerificationGateCard gate={GATE} onStartVerification={() => {}} />);
    expect(screen.getByTestId('verification-gate-card')).toBeTruthy();
    expect(screen.getByTestId('verification-gate-cta')).toBeTruthy();
    expect(screen.queryByTestId('verification-gate-chip')).toBeNull();
  });

  it('inside the quiet period: the one-line chip, no red hero, no CTA', () => {
    seedState({ attempts: [{ level: 'C1', passed: false, takenAt: Date.now() - DAY }] });
    render(<VerificationGateCard gate={GATE} onStartVerification={() => {}} />);
    expect(screen.getByTestId('verification-gate-chip')).toBeTruthy();
    expect(screen.getByTestId('verification-gate-chip').textContent).toContain('B2');
    expect(screen.queryByTestId('verification-gate-card')).toBeNull();
    expect(screen.queryByTestId('verification-gate-cta')).toBeNull();
  });

  it('quiet lapsed without an attempt: the hero returns', () => {
    seedState({
      attempts: [
        { level: 'C1', passed: false, takenAt: Date.now() - (VERIFICATION_QUIET_DAYS + 2) * DAY },
      ],
    });
    render(<VerificationGateCard gate={GATE} onStartVerification={() => {}} />);
    expect(screen.getByTestId('verification-gate-card')).toBeTruthy();
    expect(screen.queryByTestId('verification-gate-chip')).toBeNull();
  });

  it('no gate → nothing at all (a real pass clears everything)', () => {
    seedState();
    const { container } = render(
      <VerificationGateCard
        gate={{ required: false, target: null, verified: 'B1', options: [] } as never}
        onStartVerification={() => {}}
      />,
    );
    expect(container.innerHTML).toBe('');
  });
});
