/**
 * dailyGoalCard.test.tsx — the daily-XP-goal bar on the Today tab.
 *
 * The goal (nh_daily_goal_xp) and today's earned XP (nh_daily_xp_<date>) were
 * only ever rendered inside the now-unmounted HeroSection, so the commitment the
 * user set at onboarding was invisible. DailyGoalCard surfaces it on the live
 * Today tab. These tests pin the three states: in-progress, exactly met, and the
 * clamp when earned XP exceeds the goal.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../lib/appUtils', () => ({
  getDailyXP: vi.fn(() => 0),
  getDailyXPGoal: vi.fn(() => 50),
}));

import DailyGoalCard from '../components/home/DailyGoalCard';
import { getDailyXP, getDailyXPGoal } from '../lib/appUtils';

const mockXP = (v: number) => vi.mocked(getDailyXP).mockReturnValue(v);
const mockGoal = (v: number) => vi.mocked(getDailyXPGoal).mockReturnValue(v);

describe('DailyGoalCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockXP(0);
    mockGoal(50);
  });

  it('shows in-progress state with earned / goal XP', () => {
    mockXP(30);
    mockGoal(50);
    render(<DailyGoalCard xp={30} />);
    expect(screen.getByText('30 / 50 XP')).toBeInTheDocument();
    expect(screen.getByText("Today's goal")).toBeInTheDocument();
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '30');
    expect(bar).toHaveAttribute('aria-valuemax', '50');
  });

  it('shows the complete state when earned XP meets the goal', () => {
    mockXP(50);
    mockGoal(50);
    render(<DailyGoalCard xp={50} />);
    expect(screen.getByText('50 / 50 XP')).toBeInTheDocument();
    expect(screen.getByText("Today's goal — complete!")).toBeInTheDocument();
  });

  it('clamps the displayed earned XP to the goal when it is exceeded', () => {
    mockXP(120);
    mockGoal(50);
    render(<DailyGoalCard xp={120} />);
    // Displayed numerator is clamped so the bar never reads "120 / 50".
    expect(screen.getByText('50 / 50 XP')).toBeInTheDocument();
    expect(screen.getByText("Today's goal — complete!")).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });
});
