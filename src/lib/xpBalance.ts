/**
 * xpBalance — the spendable XP balance.
 *
 * `stats.xp` is the lifetime EARNED total (monotonic, synced, drives CEFR /
 * level / badges). `stats.spent` is the lifetime SPENT total (also monotonic).
 * The XP a user can actually spend on perks is the difference. Perk
 * affordability gates and "you have N XP" balance displays must use this;
 * achievement/score/progress displays keep using earned `stats.xp`.
 */
export function availableXp(stats: { xp?: number; spent?: number } | null | undefined): number {
  return Math.max(0, (stats?.xp || 0) - (stats?.spent || 0));
}
