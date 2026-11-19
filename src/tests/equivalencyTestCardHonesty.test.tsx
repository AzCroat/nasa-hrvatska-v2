/**
 * The Me-tab Level Check card may only say "confirmed" / "passed" about REAL
 * passes (owner report, 2026-11-19: "CONFIRMED C2" shown to a learner who had
 * not finished A1 lesson 3). `getCertifiedLevel` counts provisional
 * (grandfathered) passes — the 2026-09-08 badge split missed this card, a sixth
 * display surface. The check it names must be the one the screen will open.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import EquivalencyTestCard from '../components/profile/EquivalencyTestCard';
import { getLevelCheckOffer } from '../lib/levelCheckOffer';
import { CEFR_ORDER } from '../lib/cefr';
import { provisionalPass, realPass, writeCertState } from './helpers/seedCertified';

const TOP = CEFR_ORDER[CEFR_ORDER.length - 1]!;
const above = CEFR_ORDER.slice(1);

beforeEach(() => localStorage.clear());

describe('EquivalencyTestCard honesty', () => {
  it('a learner with ONLY provisional passes up to the top level is told nothing is confirmed and offered the A1 check', () => {
    const passes: Record<string, unknown> = {};
    for (const l of above) passes[l] = provisionalPass();
    writeCertState(passes);
    const { container } = render(<EquivalencyTestCard userEligible={TOP} onTakeTest={() => {}} />);
    const text = container.textContent ?? '';
    expect(text).not.toMatch(/(?<!UN)CONFIRMED/);
    expect(text).not.toMatch(/passed every Level Check/i);
    expect(screen.queryByTestId('equivalency-card-topped-out')).toBeNull();
    expect(screen.getByTestId('equivalency-card-cta')).toBeTruthy();
    expect(text).toContain('Take the A1 Level Check');
    expect(text).toMatch(/No level is confirmed yet/);
  });

  it('names the same check the launched screen opens (one function, both readers)', () => {
    const passes: Record<string, unknown> = {};
    for (const l of above) passes[l] = provisionalPass();
    writeCertState(passes);
    const offer = getLevelCheckOffer();
    expect(offer.set?.levelFrom).toBe('A1');
    expect(offer.target).toBe('A2');
  });

  it('a learner with a REAL pass at the top level sees the topped-out state', () => {
    const passes: Record<string, unknown> = {};
    for (const l of above) passes[l] = realPass();
    writeCertState(passes);
    const { container } = render(<EquivalencyTestCard userEligible={TOP} onTakeTest={() => {}} />);
    expect(screen.getByTestId('equivalency-card-topped-out')).toBeTruthy();
    expect(container.textContent).toContain(`CONFIRMED ${TOP}`);
    expect(container.textContent).toMatch(/passed every Level Check/i);
  });

  it('real passes up to B2 plus a provisional C1 confirm B2 only and offer the next check', () => {
    writeCertState({
      A2: realPass(),
      B1: realPass(),
      B2: realPass(),
      C1: provisionalPass(),
    });
    const { container } = render(<EquivalencyTestCard userEligible={TOP} onTakeTest={() => {}} />);
    const text = container.textContent ?? '';
    expect(text).toContain('B2 is confirmed');
    expect(text).not.toContain('CONFIRMED C1');
    expect(text).toContain('Take the B2 Level Check');
  });
});
