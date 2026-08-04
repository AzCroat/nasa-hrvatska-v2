import React from 'react';
import { XP_BOOST_COST, STREAK_RESTORE_COST } from '../../lib/appUtils.js';
import { FREEZE_COST_XP } from '../../lib/streakFreeze.js';
import type { RewardsState } from './useHeroRewards';
import { lsGet } from '../../lib/safeStorage';

/**
 * Hero rewards UI — XP-boost card, streak-freeze button, and streak-recovery
 * button. Extracted from HeroSection as part of the 1c decomposition. Receives
 * the useHeroRewards surface as `rewards` (destructured here so the markup is
 * verbatim) plus the reads the block needs (xp / streakCount / today).
 */
export default function RewardsPanel({
  rewards,
  xp,
  streakCount,
  today,
}: {
  rewards: RewardsState;
  xp: number;
  streakCount: number;
  today: string;
}) {
  const {
    freezes,
    freezeMsg,
    boost,
    boostMsg,
    streakRestored,
    streakRestoreMsg,
    activateBoost,
    earnFreezeReward,
    restoreStreak,
  } = rewards;
  return (
    <React.Fragment>
      {/* ── XP BOOST — DuoLingo best practice: session 2× multiplier ── */}
      {boost.active ? (
        <div
          style={{
            marginBottom: 12,
            background: 'linear-gradient(135deg,rgba(251,191,36,.22),rgba(245,158,11,.14))',
            border: '1.5px solid rgba(251,191,36,.42)',
            borderRadius: 12,
            padding: '9px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 20, lineHeight: 1 }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 900,
                color: '#fbbf24',
                letterSpacing: '.04em',
              }}
            >
              2× XP BOOST ACTIVE
            </div>
            <div
              style={{
                fontSize: 10,
                color: 'rgba(251,191,36,.75)',
                marginTop: 1,
                fontWeight: 600,
              }}
            >
              {Math.ceil(boost.msRemaining / 60000)} min remaining · all XP doubled
            </div>
          </div>
          <span style={{ fontSize: 18 }}>🔥</span>
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>
          <button
            onClick={activateBoost}
            style={{
              background: 'rgba(251,191,36,0.10)',
              border: '1.5px solid rgba(251,191,36,0.28)',
              borderRadius: 12,
              padding: '9px 14px',
              fontSize: 11,
              color: 'rgba(251,191,36,0.88)',
              fontWeight: 800,
              cursor: 'pointer',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              minHeight: 40,
              fontFamily: "'Outfit',sans-serif",
              transition: 'background .15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(251,191,36,0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(251,191,36,0.10)';
            }}
          >
            <span>⚡</span>
            <span>2× XP Boost · {XP_BOOST_COST} XP · 30 min</span>
          </button>
          {boostMsg && (
            <div
              style={{
                fontSize: 10,
                color: 'rgba(251,191,36,.8)',
                marginTop: 5,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {boostMsg}
            </div>
          )}
        </div>
      )}

      {/* Streak freeze — compact */}
      {freezes === 0 && (
        <div>
          <button
            onClick={earnFreezeReward}
            style={{
              background: 'rgba(255,255,255,.09)',
              border: '1.5px solid rgba(255,255,255,.25)',
              borderRadius: 12,
              padding: '9px 14px',
              fontSize: 11,
              color: 'rgba(255,255,255,.75)',
              fontWeight: 700,
              cursor: 'pointer',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              minHeight: 40,
              fontFamily: "'Outfit',sans-serif",
            }}
          >
            <span>🛡️</span>
            <span>Earn Streak Freeze · {FREEZE_COST_XP} XP</span>
          </button>
          {freezeMsg && (
            <div
              style={{
                fontSize: 10,
                color: 'rgba(255,255,255,.8)',
                marginTop: 5,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {freezeMsg}
            </div>
          )}
        </div>
      )}

      {/* Streak Recovery — show when streak is 0, the learner can afford the
          restore (xp here is availableXp, not lifetime earned), and they
          haven't restored today. The gate and the label below both read
          STREAK_RESTORE_COST, so they cannot drift from what useHeroRewards
          actually charges. */}
      {streakCount === 0 &&
        xp >= STREAK_RESTORE_COST &&
        !streakRestored &&
        !lsGet('nh_streak_restored_' + today) && (
          <div style={{ marginTop: 8 }}>
            <button
              onClick={restoreStreak}
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,.4)',
                borderRadius: 12,
                padding: '9px 14px',
                fontSize: 11,
                color: 'rgba(255,255,255,.85)',
                fontWeight: 700,
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                minHeight: 40,
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              <span>🔄</span>
              <span>Restore streak — {STREAK_RESTORE_COST} XP</span>
            </button>
            {streakRestoreMsg && (
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(253,186,116,.95)',
                  marginTop: 5,
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                {streakRestoreMsg}
              </div>
            )}
          </div>
        )}
      {streakRestored && streakRestoreMsg && (
        <div
          style={{
            fontSize: 10,
            color: 'rgba(253,186,116,.95)',
            marginTop: 5,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {streakRestoreMsg}
        </div>
      )}
    </React.Fragment>
  );
}
