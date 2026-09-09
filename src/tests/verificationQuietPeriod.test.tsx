// src/tests/verificationQuietPeriod.test.tsx
//
// Verification quiet period (owner directives, 2026-08-18 and 2026-09-07).
// The findings this pins, in order:
//
//   1. (2026-08-18) The gate hero was a PERMANENT red takeover — a failed
//      check rolled the level down to a new provisional target, so the banner
//      survived the very exam the learner just sat.
//   2. (2026-09-07) The first fix quieted the hero for seven CALENDAR days
//      and left a one-line "ready on <date>" chip at the top of Home. After a
//      failed B2 check the chip was still the first thing on the page, and a
//      calendar timer measures nothing about learning. The owner's standing
//      instruction: the prompt comes back "after a certain amount of learning
//      time so that we can always make sure that the progress made is being
//      retained on the path to fluency."
//
// So: any attempt (pass or fail) takes the prompt OFF Home — nothing rendered,
// no chip — until VERIFICATION_RETURN_XP has been EARNED since the attempt.
// The GATE itself (locked content) stays exactly as strict.

import React from 'react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

import {
  VERIFICATION_RETURN_XP,
  getLastAttemptAt,
  getLatestAttempt,
  verificationQuietStatus,
  isVerificationQuiet,
  recordEquivalencyAttempt,
  mergeRemoteCertifications,
  getCertificationState,
  type CertificationState,
  type VerificationGate,
} from '../lib/cefrCertification';
import { DAILY_XP_GOAL } from '../lib/appUtils';
import VerificationGateCard from '../components/home/VerificationGateCard';

const KEY = 'nh_cefr_certifications';
const DAY = 24 * 60 * 60 * 1000;

type SeedAttempt = { level: string; passed: boolean; takenAt: number; xp?: number };

function seedState({ attempts = [] as SeedAttempt[] } = {}) {
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

// Typed, NOT `as never`. The cast this replaced is why adding `nextCheck` to
// VerificationGate did not fail typecheck — it failed at render, as two tests
// that could not find the card. A fixture cast to `never` is a fixture the
// compiler cannot keep in step with the type it stands in for.
// One-level stack here, so the rung to climb IS the top of it.
const GATE: VerificationGate = {
  required: true,
  target: 'B2',
  nextCheck: 'B2',
  verified: 'B1',
  options: ['B2'],
};

beforeEach(() => localStorage.clear());

describe('the threshold', () => {
  it('is a week of practice at the default daily goal — the calendar week it replaced, counted in work', () => {
    expect(VERIFICATION_RETURN_XP).toBe(7 * DAILY_XP_GOAL);
  });
});

describe('quiet-period helpers', () => {
  it('no attempts ever → not quiet (the hero greets first-timers)', () => {
    seedState();
    expect(getLastAttemptAt()).toBeNull();
    expect(getLatestAttempt()).toBeNull();
    expect(isVerificationQuiet(5000)).toBe(false);
    expect(verificationQuietStatus(5000)).toEqual({
      quiet: false,
      earnedSince: 0,
      remaining: 0,
      since: null,
    });
  });

  it('an attempt with an XP baseline → quiet until VERIFICATION_RETURN_XP has been EARNED since', () => {
    const takenAt = Date.now() - 1000;
    seedState({ attempts: [{ level: 'C1', passed: false, takenAt, xp: 4000 }] });
    expect(getLastAttemptAt()).toBe(takenAt);
    // Nothing earned yet.
    let s = verificationQuietStatus(4000);
    expect(s.quiet).toBe(true);
    expect(s.earnedSince).toBe(0);
    expect(s.remaining).toBe(VERIFICATION_RETURN_XP);
    // One short.
    s = verificationQuietStatus(4000 + VERIFICATION_RETURN_XP - 1);
    expect(s.quiet).toBe(true);
    expect(s.remaining).toBe(1);
    // Exactly enough.
    s = verificationQuietStatus(4000 + VERIFICATION_RETURN_XP);
    expect(s.quiet).toBe(false);
    expect(s.earnedSince).toBe(VERIFICATION_RETURN_XP);
    expect(s.remaining).toBe(0);
    expect(s.since?.takenAt).toBe(takenAt);
  });

  it('CALENDAR time does not end the quiet period — only learning does', () => {
    // Thirty days old and not one XP earned since: still quiet. This is the
    // 2026-09-07 rule; the first fix would have brought the hero back here.
    seedState({
      attempts: [{ level: 'C1', passed: false, takenAt: Date.now() - 30 * DAY, xp: 4000 }],
    });
    expect(isVerificationQuiet(4000)).toBe(true);
    // And an attempt from an hour ago with the practice already done is NOT
    // quiet — the prompt does not wait for a date.
    seedState({
      attempts: [{ level: 'C1', passed: false, takenAt: Date.now() - 3600_000, xp: 4000 }],
    });
    expect(isVerificationQuiet(4000 + VERIFICATION_RETURN_XP)).toBe(false);
  });

  it('a PASSED attempt quiets identically — taking the test is what counts', () => {
    seedState({ attempts: [{ level: 'B1', passed: true, takenAt: Date.now() - DAY, xp: 2000 }] });
    expect(isVerificationQuiet(2000 + 10)).toBe(true);
  });

  it('the LATEST attempt across levels drives the window', () => {
    seedState({
      attempts: [
        { level: 'C1', passed: false, takenAt: Date.now() - 30 * DAY, xp: 1000 },
        { level: 'B2', passed: false, takenAt: Date.now() - DAY, xp: 4000 },
      ],
    });
    // 4200 XP: 3200 past the OLD attempt, only 200 past the latest → quiet.
    expect(isVerificationQuiet(4200)).toBe(true);
    expect(verificationQuietStatus(4200).since?.level).toBe('B2');
  });

  it('an unknown XP total (0 — the pre-hydration render) reads as quiet, and does NOT backfill', () => {
    seedState({ attempts: [{ level: 'B2', passed: false, takenAt: Date.now() - DAY }] });
    expect(isVerificationQuiet(0)).toBe(true);
    expect(isVerificationQuiet(NaN)).toBe(true);
    expect(getLatestAttempt()?.xp).toBeUndefined();
  });

  it('a legacy attempt with no baseline is backfilled ONCE with the first XP seen, then measured from there', () => {
    // The owner's own state on 2026-09-07: yesterday's failed B2 check was
    // recorded before the field existed.
    seedState({ attempts: [{ level: 'B2', passed: false, takenAt: Date.now() - DAY }] });
    let s = verificationQuietStatus(7300);
    expect(s.quiet).toBe(true);
    expect(s.earnedSince).toBe(0);
    expect(getLatestAttempt()?.xp).toBe(7300); // persisted
    // Later, more XP: counted from the backfilled baseline, not re-baselined.
    s = verificationQuietStatus(7300 + 200);
    expect(s.earnedSince).toBe(200);
    expect(s.quiet).toBe(true);
    s = verificationQuietStatus(7300 + VERIFICATION_RETURN_XP);
    expect(s.quiet).toBe(false);
    expect(getLatestAttempt()?.xp).toBe(7300); // still the first value
  });
});

describe('recordEquivalencyAttempt stashes the baseline', () => {
  it('a new attempt carries the XP it was recorded at', () => {
    recordEquivalencyAttempt({
      level: 'B2',
      scores: { vocab: 0.5, grammar: 0.5, reading: 0.5 },
      currentLessonCount: 10,
      currentXp: 5120,
    });
    expect(getLatestAttempt()?.xp).toBe(5120);
    expect(isVerificationQuiet(5120)).toBe(true);
    expect(isVerificationQuiet(5120 + VERIFICATION_RETURN_XP)).toBe(false);
  });

  it('a caller that omits currentXp leaves the field absent (legacy path → lazy backfill)', () => {
    recordEquivalencyAttempt({
      level: 'B2',
      scores: { vocab: 0.5, grammar: 0.5, reading: 0.5 },
      currentLessonCount: 10,
    });
    expect(getLatestAttempt()?.xp).toBeUndefined();
  });
});

describe('the baseline survives a merge', () => {
  it('a remote copy of the same attempt WITHOUT a baseline cannot erase a local one', () => {
    const takenAt = 1_700_000_000_000;
    seedState({ attempts: [{ level: 'B2', passed: false, takenAt, xp: 7300 }] });
    const remote = getCertificationState();
    const stale: CertificationState = JSON.parse(JSON.stringify(remote));
    delete stale.attempts[0]!.xp;
    mergeRemoteCertifications(stale);
    expect(getLatestAttempt()?.xp).toBe(7300);
  });

  it('a local copy WITHOUT a baseline adopts the remote one (the device that backfilled wins)', () => {
    const takenAt = 1_700_000_000_000;
    seedState({ attempts: [{ level: 'B2', passed: false, takenAt }] });
    const remote = getCertificationState();
    const withBaseline: CertificationState = JSON.parse(JSON.stringify(remote));
    withBaseline.attempts[0]!.xp = 7300;
    mergeRemoteCertifications(withBaseline);
    expect(getCertificationState().attempts).toHaveLength(1);
    expect(getLatestAttempt()?.xp).toBe(7300);
  });
});

describe('the baseline is WIRED, not just supported', () => {
  // A component test supplies its own props, so it cannot see whether the
  // real screen passes the XP through — deleting `currentXp: userXp` from the
  // exam screen left every test above green (mutation M6, 2026-09-07). The
  // router and the screen are pinned by source, the same way the CEFR badge
  // resolver is.
  const read = (p: string) => readFileSync(join(__dirname, '..', p), 'utf8');

  it('the exam screen records the attempt WITH the learner XP it was handed', () => {
    const src = read('components/profile/EquivalencyTestScreen.tsx');
    expect(src).toMatch(/recordEquivalencyAttempt\(\{[\s\S]*?currentXp:\s*userXp[\s\S]*?\}\)/);
  });

  it('the router hands the exam screen the live stats.xp', () => {
    const src = read('components/AppRouter.tsx');
    expect(src).toMatch(/<EquivalencyTestScreen[\s\S]*?userXp=\{stats\.xp/);
  });

  it('Home hands the gate card the live stats.xp and the engine hands it to getNextStep', () => {
    expect(read('components/home/HomeTab.tsx')).toMatch(
      /<VerificationGateCard[\s\S]*?currentXp=\{st\.xp\}/,
    );
    expect(read('hooks/useNextStepEngine.ts')).toMatch(/getNextStep\(\{[^}]*xp:\s*st\?\.xp/);
  });
});

describe('VerificationGateCard — hero vs nothing', () => {
  it('never-attempted: the full hero with its CTA, no "returning" line', () => {
    seedState();
    render(<VerificationGateCard gate={GATE} currentXp={5000} onStartVerification={() => {}} />);
    expect(screen.getByTestId('verification-gate-card')).toBeTruthy();
    expect(screen.getByTestId('verification-gate-cta')).toBeTruthy();
    expect(screen.queryByTestId('verification-gate-returning')).toBeNull();
  });

  it('inside the quiet period: NOTHING — no hero, no chip, no CTA (owner, 2026-09-07)', () => {
    seedState({ attempts: [{ level: 'B2', passed: false, takenAt: Date.now() - DAY, xp: 5000 }] });
    const { container } = render(
      <VerificationGateCard gate={GATE} currentXp={5100} onStartVerification={() => {}} />,
    );
    expect(container.innerHTML).toBe('');
    expect(screen.queryByTestId('verification-gate-chip')).toBeNull();
    expect(screen.queryByTestId('verification-gate-card')).toBeNull();
  });

  it('a week old and no practice since: still nothing (a date does not bring it back)', () => {
    seedState({
      attempts: [{ level: 'B2', passed: false, takenAt: Date.now() - 9 * DAY, xp: 5000 }],
    });
    const { container } = render(
      <VerificationGateCard gate={GATE} currentXp={5000} onStartVerification={() => {}} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('after VERIFICATION_RETURN_XP of practice the hero returns and SAYS what brought it back', () => {
    seedState({
      attempts: [{ level: 'B2', passed: false, takenAt: Date.now() - DAY, xp: 5000 }],
    });
    render(
      <VerificationGateCard
        gate={GATE}
        currentXp={5000 + VERIFICATION_RETURN_XP + 20}
        onStartVerification={() => {}}
      />,
    );
    expect(screen.getByTestId('verification-gate-card')).toBeTruthy();
    expect(screen.getByTestId('verification-gate-cta')).toBeTruthy();
    expect(screen.getByTestId('verification-gate-returning').textContent).toContain(
      `${VERIFICATION_RETURN_XP + 20} XP`,
    );
  });

  it('the pre-hydration render (xp 0) shows nothing rather than flashing the hero', () => {
    seedState({ attempts: [{ level: 'B2', passed: false, takenAt: Date.now() - DAY, xp: 5000 }] });
    const { container } = render(
      <VerificationGateCard gate={GATE} currentXp={0} onStartVerification={() => {}} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('no gate → nothing at all (a real pass clears everything)', () => {
    seedState();
    const { container } = render(
      <VerificationGateCard
        gate={{ required: false, target: null, verified: 'B1', options: [] } as never}
        currentXp={5000}
        onStartVerification={() => {}}
      />,
    );
    expect(container.innerHTML).toBe('');
  });
});
