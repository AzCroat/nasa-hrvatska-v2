import React, { useMemo } from 'react';
import { getDailyXP, getDailyXPGoal } from '../../lib/appUtils';

/**
 * DailyGoalCard — the daily-XP-goal progress bar for the Today tab.
 *
 * The goal is chosen during onboarding (GoalSetterModal / WelcomeScreen, stored
 * in `nh_daily_goal_xp`); today's earned XP accumulates in `nh_daily_xp_<date>`
 * (written by useAward on every award, synced across devices via
 * progressSnapshot / applyRemoteProgress). Both were previously rendered ONLY
 * inside HeroSection, which is no longer mounted anywhere — so the goal the user
 * committed to at signup was invisible in the running app. This surfaces it on
 * the live Today tab.
 *
 * `xp` is passed purely to re-key the memo so the bar recomputes when the user
 * earns XP while this tab happens to stay mounted. (HomeTab normally unmounts on
 * navigating into an exercise and re-reads on return, which already refreshes
 * the values — this just keeps it live in the rare mounted-award case.)
 *
 * Styled with the app's theme CSS variables (light/dark aware) so it matches the
 * surrounding Today cards — do NOT hardcode the dark-hero rgba palette here.
 */
export default function DailyGoalCard({ xp }: { xp: number }) {
  const { dailyXP, dailyXPGoal } = useMemo(
    () => ({ dailyXP: getDailyXP(), dailyXPGoal: getDailyXPGoal() }),
    // xp is an intentional re-key trigger; the values come from localStorage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xp],
  );

  const goalXP = Math.min(dailyXP, dailyXPGoal);
  const goalPct = dailyXPGoal > 0 ? Math.min(Math.round((goalXP / dailyXPGoal) * 100), 100) : 0;
  const goalDone = dailyXP >= dailyXPGoal;

  return (
    <div
      style={{
        background: goalDone ? 'var(--success-bg)' : 'var(--card)',
        border: `1px solid ${goalDone ? 'var(--success-b)' : 'var(--card-b)'}`,
        borderRadius: 16,
        padding: '12px 16px',
        marginBottom: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 14 }}>{goalDone ? '🎯' : '⚡'}</span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: goalDone ? 'var(--success)' : 'var(--heading)',
              letterSpacing: '.04em',
              textTransform: 'uppercase',
            }}
          >
            {goalDone ? "Today's goal — complete!" : "Today's goal"}
          </span>
        </div>
        <span
          style={{
            fontSize: 12,
            fontWeight: 900,
            color: goalDone ? 'var(--success)' : 'var(--heading)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {goalXP} / {dailyXPGoal} XP
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: 'var(--bar-bg)',
          borderRadius: 8,
          overflow: 'hidden',
        }}
        role="progressbar"
        aria-valuenow={goalXP}
        aria-valuemin={0}
        aria-valuemax={dailyXPGoal}
        aria-label="Today's XP goal progress"
      >
        <div
          style={{
            height: '100%',
            width: goalPct + '%',
            background: goalDone ? 'var(--success)' : 'var(--accent)',
            borderRadius: 8,
            transition: 'width 0.6s ease',
          }}
        />
      </div>
    </div>
  );
}
