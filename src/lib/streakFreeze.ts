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
  writeDelta?: (delta: { spent: number }) => void,
): PurchaseResult {
  const stored = getFreezesStored();
  if (stored >= 2) return { ok: false, reason: 'Already have maximum 2 freezes stored' };
  if (currentXP < FREEZE_COST)
    return { ok: false, reason: `Need ${FREEZE_COST} XP — you have ${currentXP}` };

  // Record the cost on the monotonic `spent` counter — never reduce earned `xp`,
  // which the Math.max sync merge would refund (the #110 bug). Spendable balance
  // = xp - spent. Mirror the local bump with an authoritative Firestore delta.
  setStats((prev) => ({ ...prev, spent: (prev.spent || 0) + FREEZE_COST }));
  if (writeDelta) writeDelta({ spent: FREEZE_COST });
  earnFreeze();
  return { ok: true, stored: getStreakFreezes() };
}

export const FREEZE_COST_XP = FREEZE_COST;
