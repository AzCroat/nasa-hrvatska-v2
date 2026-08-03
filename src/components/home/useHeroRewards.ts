import { useState, useEffect } from 'react';
import { useStats } from '../../context/StatsContext';
import { earnFreeze, getStreakFreezes } from '../../data';
import {
  getXPBoost,
  activateXPBoost,
  canActivateXPBoost,
  XP_BOOST_COST,
  restoreStreakDays,
} from '../../lib/appUtils.js';
import { FREEZE_COST_XP } from '../../lib/streakFreeze.js';
import { availableXp } from '../../lib/xpBalance.js';
import { safeSetItem } from '../../hooks/useLocalStorage';
import { lsSet } from '../../lib/safeStorage';

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
    // Persist the restored streak BEFORE charging for it. These two writes were
    // bare and sat AFTER spendXp, so on storage that rejects writes (Safari
    // Private Browsing, a quota-exhausted profile) the learner was charged 200 XP
    // and the throw then skipped the uStreak write, the success message and the
    // sync — they paid and got nothing back. safeSetItem reports failure instead
    // of throwing, so the charge can be withheld when the restore cannot stick.
    if (!safeSetItem('uStreak', { count: 1, last: today })) {
      setStreakRestoreMsg(
        'Could not restore your streak — this browser is blocking storage. No XP was spent.',
      );
      return;
    }
    // Backfill the canonical day-set. `uStreak` is only a DERIVED cache:
    // applyRemoteProgress recomputes the streak from `nh_streak_days` on every
    // remote snapshot and overwrites the cache with the result. This button only
    // renders at count === 0, which means today is NOT in the day-set — so
    // without this line the next sync (~2 min, or the next app launch) re-derives
    // 0 and silently undoes the restore, while `spent` keeps the 200 XP because
    // it is deliberately monotonic. The user pays and gets nothing.
    //
    // repairStreak (streak.ts) and applyStreakEarnBack (appUtils.ts) already do
    // exactly this, each with a comment saying why; this third recovery path was
    // missed, and it is the only one users can actually reach — showStreakRepair
    // is never set true, and canRepairStreak() requires a state computeStreak
    // cannot produce.
    restoreStreakDays(1, today);
    // The cost goes on the monotonic `spent` counter (authoritative + synced)
    // rather than subtracting earned xp via a negative award — that subtraction
    // was refunded by the Math.max sync merge (the #110 bug).
    spendXp(STREAK_RESTORE_COST);
    lsSet('nh_streak_restored_' + today, '1');
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
