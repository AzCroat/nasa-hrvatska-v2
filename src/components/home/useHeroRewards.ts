import { useState, useEffect } from 'react';
import { useStats } from '../../context/StatsContext';
import { earnFreeze, getStreakFreezes } from '../../data';
import {
  getXPBoost,
  activateXPBoost,
  canActivateXPBoost,
  XP_BOOST_COST,
} from '../../lib/appUtils.js';
import { FREEZE_COST_XP } from '../../lib/streakFreeze.js';
import { availableXp } from '../../lib/xpBalance.js';

// Streak Restore cost — matches the RewardsPanel affordability gate (xp >= 200).
const STREAK_RESTORE_COST = 200;

/**
 * Hero rewards state + actions — streak freezes, 2× XP boost, and streak
 * recovery. Extracted from HeroSection as part of the 1c decomposition. Owns the
 * freeze/boost/restore state, the 10s boost-countdown effect, and the three
 * purchase/restore handlers (reading stats via useStats() directly). Behavior-
 * identical to the prior inline state + onClick closures. `today` and onSyncNow
 * come from the caller (the restore handler writes per-day keys + flushes sync).
 */
export function useHeroRewards({ today, onSyncNow }: { today: string; onSyncNow?: () => void }) {
  const { stats: st, setStats, writeDelta } = useStats();

  // Record an XP spend authoritatively: increment the monotonic `spent` counter
  // locally AND via an atomic Firestore delta, then flush. Earned `xp` is never
  // reduced (that would be refunded by the Math.max sync merge). Spendable
  // balance = xp - spent.
  const spendXp = (cost: number) => {
    setStats((s) => ({ ...s, spent: (s.spent || 0) + cost }));
    writeDelta({ spent: cost });
    if (onSyncNow) onSyncNow();
  };
  const [freezes, setFreezes] = useState(getStreakFreezes);
  const [freezeMsg, setFreezeMsg] = useState('');
  const [boost, setBoost] = useState(() => getXPBoost());
  const [boostMsg, setBoostMsg] = useState('');
  const [streakRestored, setStreakRestored] = useState(false);
  const [streakRestoreMsg, setStreakRestoreMsg] = useState('');

  // Refresh boost countdown every 10 s while active
  useEffect(() => {
    if (!boost.active) return undefined;
    const id = setInterval(() => {
      const b = getXPBoost();
      setBoost(b);
      if (!b.active) clearInterval(id);
    }, 10000);
    return () => clearInterval(id);
  }, [boost.active]);

  const activateBoost = () => {
    if (availableXp(st) < XP_BOOST_COST) {
      setBoostMsg(`Need ${XP_BOOST_COST} XP to activate boost`);
      setTimeout(() => setBoostMsg(''), 3000);
      return;
    }
    if (!canActivateXPBoost()) {
      setBoostMsg('Boost available once per 24 hours');
      setTimeout(() => setBoostMsg(''), 3000);
      return;
    }
    spendXp(XP_BOOST_COST);
    activateXPBoost();
    setBoost(getXPBoost());
  };

  const earnFreezeReward = () => {
    if (freezes >= 2) {
      setFreezeMsg('Freeze slots full — max 2 stored.');
      return;
    }
    if (availableXp(st) >= FREEZE_COST_XP) {
      // Same price as the Settings → Streak Protection purchase — one freeze
      // costs FREEZE_COST_XP everywhere (owner decision, 2026-07-21).
      spendXp(FREEZE_COST_XP);
      earnFreeze();
      setFreezes((f) => f + 1);
      setFreezeMsg('✓ Streak freeze earned! Your streak is protected for one missed day.');
    } else setFreezeMsg(`You need ${FREEZE_COST_XP} XP to earn a streak freeze. Keep going!`);
  };

  const restoreStreak = () => {
    // Record the 200-XP cost on the monotonic `spent` counter (authoritative +
    // synced) instead of subtracting earned xp via a negative award — that
    // subtraction was refunded by the Math.max sync merge (the #110 bug).
    spendXp(STREAK_RESTORE_COST);
    localStorage.setItem('nh_streak_restored_' + today, '1');
    // Write streak back to 1 using the uStreak key (same format as getStreak in data.jsx)
    localStorage.setItem('uStreak', JSON.stringify({ count: 1, last: today }));
    // Sync with streak.js repair key so canRepairStreak() returns false this session
    try {
      const rd = JSON.parse(localStorage.getItem('nh_streak_repair') || '{}');
      rd.lastRepair = today;
      localStorage.setItem('nh_streak_repair', JSON.stringify(rd));
    } catch (_) {}
    setStreakRestored(true);
    setStreakRestoreMsg('✓ Streak restored! Keep it alive today 🔥');
    if (onSyncNow) onSyncNow();
  };

  return {
    freezes,
    freezeMsg,
    boost,
    boostMsg,
    streakRestored,
    streakRestoreMsg,
    activateBoost,
    earnFreezeReward,
    restoreStreak,
  };
}

export type RewardsState = ReturnType<typeof useHeroRewards>;
