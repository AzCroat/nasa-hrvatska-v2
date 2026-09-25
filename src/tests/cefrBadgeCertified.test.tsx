/**
 * cefrBadgeCertified.test.tsx — every CEFR badge shows the VERIFIED level.
 *
 * Field report, 2026-09-06: a learner failed their B2 Level Check and the honest
 * rollback stepped their standing down to B1 — the Me tab said B1 — while the
 * upper-right desktop badge still said "C1 · Advanced". DesktopPanel and the
 * hero card's CEFR bar each ran their OWN copy of the XP formula and displayed
 * the ELIGIBLE band; only StatsTab consulted certification. All three were
 * pointed at getEffectiveLevelForUnlock, which made them agree.
 *
 * SECOND FIELD REPORT, 2026-09-08: "it shows C1, I'm not C1." Making the three
 * surfaces agree never asked whether the number they agreed on was true.
 * getEffectiveLevelForUnlock returns the CERTIFIED level, which counts
 * PROVISIONAL passes — and migrateGrandfatheredCertification writes one for
 * every level up to the learner's XP-derived level. So a learner whose XP once
 * reached C1 held a provisional C1, and all three badges said C1 for a level
 * nobody had demonstrated. The first fix made three wrong numbers consistent.
 *
 * Owner decision: a badge reads the VERIFIED level (real passes only) via
 * getDisplayLevel; CONTENT UNLOCK keeps reading the certified level, so the
 * display gets honest and nobody loses access. This file pins both halves:
 *
 *   - the desktop badge after a real rollback (the reported scenario, driven
 *     through recordEquivalencyAttempt — not a hand-seeded post-state), AND
 *     that the certified level the door still opens on is unchanged
 *   - the other direction — a learner with a REAL pass at their XP band still
 *     sees it, so the fix cannot over-correct into showing A1 to everyone
 *
 * Mutation-verified: reverting any surface to the raw XP formula, or back to
 * getEffectiveLevelForUnlock, fails here.
 *
 * THE THIRD SURFACE WAS NEVER RENDERED, AND THIS FILE RENDERED IT ANYWAY (sweep
 * 129/131, 2026-09-25). `heroHelpers.getCEFR` → `HeroStats` is the OLD Home hero's
 * bar, and `HomeTab` stopped importing `HeroSection` on 2026-04-25 — five months
 * before the first report. So the reported badge was `DesktopPanel`, the live
 * surfaces were two, and the hero-bar block here (its level label, its "Level
 * Check" text, its within-band percentage) was testing a component no learner
 * could see. The cluster is deleted; those assertions went with it, and nothing
 * live carries `pctInLevel` — StatsTab's own getCEFR never had it.
 */
import React from 'react';
import { readFileSync } from 'node:fs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  recordEquivalencyAttempt,
  getCertifiedLevel,
  getVerifiedLevel,
} from '../lib/cefrCertification';
import {
  provisionalPass,
  realPass,
  seedCertifiedTo,
  writeCertState,
} from './helpers/seedCertified';

// StatsContext is mocked per test via this holder so the panel can be rendered
// bare (useStats throws outside its provider).
const statsRef: { stats: { xp: number; lc: number; gc: number } } = {
  stats: { xp: 0, lc: 0, gc: 0 },
};
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: statsRef.stats }),
}));
vi.mock('../data', () => ({ nXP: vi.fn(() => 100) }));

import DesktopPanel from '../components/shared/DesktopPanel';

// A B2 attempt that fails on production — strong receptive skills, no writing.
const FAILED_B2 = {
  vocab: 0.9,
  grammar: 0.9,
  reading: 0.9,
  listening: 0.85,
  speaking: 0.3,
  writing: 0,
};

// XP total in the C1 band (8000..17999): 9000 + 40*15 + 12*25 = 9900.
const C1_BAND_STATS = { xp: 9000, lc: 40, gc: 12 };

beforeEach(() => {
  localStorage.clear();
  statsRef.stats = { xp: 0, lc: 0, gc: 0 };
});

describe('DesktopPanel CEFR badge — the reported rollback scenario', () => {
  it('after a failed B2 check the badge shows the VERIFIED level, not the provisional standing it rolled back to', () => {
    // Grandfathered (provisional) standing up to B2 — the learner's C1-band XP
    // is what the old badge read. The B2 verification fails on production.
    writeCertState({ A2: provisionalPass(), B1: provisionalPass(), B2: provisionalPass() });
    const res = recordEquivalencyAttempt({
      level: 'B2',
      scores: FAILED_B2,
      currentLessonCount: 40,
    });
    expect(res.passed).toBe(false);
    expect(res.rollback).toEqual({ from: 'B2', to: 'B1' });

    // THE SPLIT, both halves. The rollback leaves a PROVISIONAL B1 — the
    // certified level, which content unlock reads, so this learner keeps every
    // B1 door they had. Nothing they have demonstrated, so the badge says A1.
    expect(getCertifiedLevel()).toBe('B1');
    expect(getVerifiedLevel()).toBe('A1');

    statsRef.stats = C1_BAND_STATS;
    render(<DesktopPanel />);
    const badge = screen.getByTestId('desktop-cefr-badge');
    expect(badge).toHaveTextContent('A1');
    expect(badge).toHaveTextContent('Beginner');
    expect(badge).not.toHaveTextContent('C1');
    expect(badge).not.toHaveTextContent('Advanced');
    // The 2026-09-06 behaviour: B1 came from a pass the migration granted.
    expect(badge).not.toHaveTextContent('B1');
  });

  it('a purely grandfathered learner is shown A1 — the badge never claims a migrated level', () => {
    // No check ever taken; XP alone put them in the C1 band and the migration
    // granted provisional passes all the way up. This is the reported case.
    writeCertState({
      A2: provisionalPass(),
      B1: provisionalPass(),
      B2: provisionalPass(),
      C1: provisionalPass(),
    });
    expect(getCertifiedLevel()).toBe('C1'); // access unchanged
    statsRef.stats = C1_BAND_STATS;
    render(<DesktopPanel />);
    const badge = screen.getByTestId('desktop-cefr-badge');
    expect(badge).toHaveTextContent('A1');
    expect(badge).not.toHaveTextContent('C1');
  });

  it('ONE real pass among the grandfathered levels is shown — verified, not merely held', () => {
    writeCertState({ A2: realPass(), B1: provisionalPass(), B2: provisionalPass() });
    statsRef.stats = C1_BAND_STATS;
    render(<DesktopPanel />);
    const badge = screen.getByTestId('desktop-cefr-badge');
    expect(badge).toHaveTextContent('A2');
    expect(badge).not.toHaveTextContent('B2');
  });

  it('a learner certified at their XP band still sees that band (no over-correction)', () => {
    seedCertifiedTo('C1');
    statsRef.stats = C1_BAND_STATS;
    render(<DesktopPanel />);
    const badge = screen.getByTestId('desktop-cefr-badge');
    expect(badge).toHaveTextContent('C1');
    expect(badge).toHaveTextContent('Advanced');
  });

  it('XP alone never advances the badge past the certified level', () => {
    seedCertifiedTo('A2');
    statsRef.stats = { xp: 20000, lc: 0, gc: 0 }; // C2-band XP
    render(<DesktopPanel />);
    const badge = screen.getByTestId('desktop-cefr-badge');
    expect(badge).toHaveTextContent('A2');
    expect(badge).toHaveTextContent('Elementary');
    expect(badge).not.toHaveTextContent('C2');
  });

  it('agrees with the Me tab by construction: both read getDisplayLevel', () => {
    // A SOURCE pin, because the bug was three copies of one formula drifting
    // apart: a fourth copy would pass every rendering test above at whatever
    // rate its thresholds still matched.
    // Two files, not three: the hero bar that used to be the middle entry was
    // never rendered and is gone (sweep 136).
    for (const f of [
      'src/components/shared/DesktopPanel.tsx',
      'src/components/profile/StatsTab.tsx',
    ]) {
      const src = readFileSync(f, 'utf8');
      expect(src, `${f} must resolve the badge through the VERIFIED level`).toMatch(
        /getDisplayLevel\(/,
      );
      expect(
        src,
        `${f} must not carry its own copy of the band thresholds as a level decision`,
      ).not.toMatch(/total\s*<\s*8000\)\s*return\s*['"]B2['"]/);
      // The unlock resolver counts provisional passes. A badge that reaches for
      // it is the 2026-09-08 bug returning.
      expect(src, `${f} is a proficiency claim and must not read the UNLOCK level`).not.toMatch(
        /getEffectiveLevelForUnlock\(/,
      );
    }
  });
});
