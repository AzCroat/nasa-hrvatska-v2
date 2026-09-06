/**
 * cefrBadgeCertified.test.tsx — every CEFR badge shows the CERTIFIED level.
 *
 * Field report, 2026-09-06: a learner failed their B2 Level Check and the honest
 * rollback stepped their standing down to B1 — the Me tab said B1 — while the
 * upper-right desktop badge still said "C1 · Advanced". DesktopPanel and the
 * hero card's CEFR bar each ran their OWN copy of the XP formula and displayed
 * the ELIGIBLE band; only StatsTab consulted certification. A badge is a
 * proficiency claim (src/lib/cefr.ts convention block), so all three surfaces
 * now resolve through getEffectiveLevelForUnlock, and this file pins:
 *
 *   - the desktop badge after a real rollback (the reported scenario, driven
 *     through recordEquivalencyAttempt — not a hand-seeded post-state)
 *   - the hero bar's level and its "Level Check" label when XP has outrun the
 *     certified level (XP does not advance a level; a check does)
 *   - the other direction — a learner certified AT their XP band still sees it,
 *     so the fix cannot over-correct into showing A1 to everyone
 *
 * Mutation-verified on first run: reverting DesktopPanel to the raw XP formula
 * fails the rollback + gate tests; reverting heroHelpers fails the hero block.
 */
import React from 'react';
import { readFileSync } from 'node:fs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { recordEquivalencyAttempt, getCertifiedLevel } from '../lib/cefrCertification';
import { getCEFR } from '../components/home/heroHelpers';
import HeroStats from '../components/home/HeroStats';
import { provisionalPass, seedCertifiedTo, writeCertState } from './helpers/seedCertified';

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
  it('after a failed B2 check rolls standing down to B1, the badge says B1 · Intermediate, not C1 · Advanced', () => {
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
    expect(getCertifiedLevel()).toBe('B1');

    statsRef.stats = C1_BAND_STATS;
    render(<DesktopPanel />);
    const badge = screen.getByTestId('desktop-cefr-badge');
    expect(badge).toHaveTextContent('B1');
    expect(badge).toHaveTextContent('Intermediate');
    expect(badge).not.toHaveTextContent('C1');
    expect(badge).not.toHaveTextContent('Advanced');
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

  it('agrees with the Me tab by construction: both read getEffectiveLevelForUnlock', () => {
    // A SOURCE pin, because the bug was three copies of one formula drifting
    // apart: a fourth copy would pass every rendering test above at whatever
    // rate its thresholds still matched.
    for (const f of [
      'src/components/shared/DesktopPanel.tsx',
      'src/components/home/heroHelpers.ts',
      'src/components/profile/StatsTab.tsx',
    ]) {
      const src = readFileSync(f, 'utf8');
      expect(src, `${f} must resolve the badge through certification`).toMatch(
        /getEffectiveLevelForUnlock\(/,
      );
      expect(
        src,
        `${f} must not carry its own copy of the band thresholds as a level decision`,
      ).not.toMatch(/total\s*<\s*8000\)\s*return\s*['"]B2['"]/);
    }
  });
});

describe('hero CEFR bar — certified level and the Level Check label', () => {
  it('after the rollback the hero reads B1 → B2 and says Level Check, not a percentage', () => {
    writeCertState({ A2: provisionalPass(), B1: provisionalPass(), B2: provisionalPass() });
    recordEquivalencyAttempt({ level: 'B2', scores: FAILED_B2, currentLessonCount: 40 });

    const cefr = getCEFR(C1_BAND_STATS.xp, C1_BAND_STATS.lc, C1_BAND_STATS.gc);
    expect(cefr.current).toBe('B1');
    expect(cefr.next).toBe('B2');
    expect(cefr.awaitingAssessment).toBe(true);
    expect(cefr.pctInLevel).toBe(100);

    render(
      <HeroStats
        streak={{ count: 1 }}
        freezes={0}
        xpPct={10}
        xpCur={10}
        xpNeeded={100}
        level={1}
        cefr={cefr}
        lc={40}
        xp={9000}
      />,
    );
    const el = screen.getByTestId('hero-cefr-level');
    expect(el).toHaveTextContent(/B1\s*→\s*B2/);
    expect(el).toHaveTextContent('Level Check');
    expect(el).not.toHaveTextContent('%');
    expect(el).not.toHaveTextContent('C1');
  });

  it('certified at the XP band → the bar shows the within-band percentage as before', () => {
    seedCertifiedTo('B1');
    const cefr = getCEFR(2350, 0, 0); // B1 floor 1200, span 2300 → 50%
    expect(cefr).toMatchObject({
      current: 'B1',
      next: 'B2',
      pctInLevel: 50,
      awaitingAssessment: false,
    });
    render(
      <HeroStats
        streak={{ count: 1 }}
        freezes={0}
        xpPct={10}
        xpCur={10}
        xpNeeded={100}
        level={1}
        cefr={cefr}
        lc={0}
        xp={2350}
      />,
    );
    expect(screen.getByTestId('hero-cefr-level')).toHaveTextContent(/B1\s*→\s*B2\s*·\s*50%/);
  });

  it('a real pass earned with less XP than the band floor clamps at 0%, never negative', () => {
    seedCertifiedTo('B1');
    expect(getCEFR(500, 0, 0).pctInLevel).toBe(0);
  });
});
