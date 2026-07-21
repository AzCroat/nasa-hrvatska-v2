/**
 * streakFreeze.ts — Streak freeze / streak protection purchases.
 *
 * Costs 50 XP to buy. Max 2 stored. Purchased freezes go into the same
 * 'uFreeze' store that updateStreak() (appUtils.ts) auto-spends when the
 * user returns after exactly one missed day — so a bought freeze actually
 * protects the streak, and syncs to Firebase like earned ones do.
 * getStreakFreezes() also migrates any freezes stranded in the legacy
 * 'nh_streak_freezes' store, which had no consumer.
 */

import { getStreakFreezes, earnFreeze } from './appUtils.js';

const FREEZE_COST = 50; // XP cost to purchase one freeze

export function getFreezesStored(): number {
  return getStreakFreezes();
}

interface PurchaseResult {
  ok: boolean;
  reason?: string;
  stored?: number;
}

export function purchaseFreeze(
  currentXP: number,
  setStats: (fn: (prev: Record<string, number>) => Record<string, number>) => void,
): PurchaseResult {
  const stored = getFreezesStored();
  if (stored >= 2) return { ok: false, reason: 'Already have maximum 2 freezes stored' };
  if (currentXP < FREEZE_COST)
    return { ok: false, reason: `Need ${FREEZE_COST} XP — you have ${currentXP}` };

  // Deduct XP via React state setter
  setStats((prev) => ({ ...prev, xp: Math.max(0, (prev.xp || 0) - FREEZE_COST) }));
  earnFreeze();
  return { ok: true, stored: getStreakFreezes() };
}

export const FREEZE_COST_XP = FREEZE_COST;
