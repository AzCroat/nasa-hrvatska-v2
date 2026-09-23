/**
 * src/lib/cefr.ts
 *
 * CEFR utility functions for the Naša Hrvatska learning app.
 * Provides: CEFR level computation, ranking, and exercise unlock logic.
 *
 * ── WHICH LEVEL TO USE WHERE (convention — read before wiring a new surface) ──
 * `getUserCefr(xp, lc, gc)` is the raw, XP/activity-derived ELIGIBLE level. It can
 * be inflated by dwell time, so almost nothing should consume it directly — it is
 * the INPUT to the two certified-aware helpers in cefrCertification.ts:
 *
 *   • PROFICIENCY CLAIMS → `getDisplayLevel(eligible)`. The VERIFIED level: levels
 *     the learner actually passed a check for, provisional (grandfathered) passes
 *     excluded. Use for anything the user reads as truth about their ability: the
 *     CEFR badge, the hero bar, "you have reached X", certificates.
 *     This used to be `getEffectiveLevelForUnlock`, and that was wrong in a way
 *     that took two field reports to see (2026-09-06, 2026-09-08): the unlock
 *     level counts provisional passes, and the grandfather migration writes one
 *     for every level up to the learner's XP-derived level — so a learner whose
 *     XP once touched C1 was shown "C1 · Advanced" for a level nobody had
 *     measured. A claim and a door are different questions; keep them apart.
 *
 *   • CONTENT UNLOCK → `getContentUnlockLevel(eligible)`. The certified level —
 *     provisional passes INCLUDED, deliberately, so grandfathered learners keep
 *     the content they already had — and RACE-SAFE: until the one-time grandfather
 *     migration has run it falls back to eligible so first-load content is never
 *     wrongly locked. Use for what the user can practice: daily-session selection,
 *     Grad recommendations, isUnlocked.
 *
 *   • `getEffectiveLevelForUnlock(eligible)` is the certified level without the
 *     race guard. It is NOT a display helper — the checkpoint system uses it to
 *     decide which exam to offer.
 *
 * Rule of thumb: pass the raw eligible level into the appropriate helper; don't
 * consume `getUserCefr` directly for a user-facing claim or a content gate.
 */

export const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type CefrLevel = (typeof CEFR_ORDER)[number];

/**
 * Returns the numeric rank (index) for a CEFR level.
 * Unknown levels → 0 (treated as A1).
 * @example cefrRank('B1') → 2
 * @example cefrRank('X9') → 0
 */
export function cefrRank(cefr: string): number {
  const i = CEFR_ORDER.indexOf(cefr as CefrLevel);
  return i === -1 ? 0 : i;
}

/**
 * Returns the CEFR level one rank below `level`, or null when `level` is the
 * floor (A1). Used by certification/checkpoint demotion logic.
 * @example levelBelow('B1') → 'A2'
 * @example levelBelow('A1') → null
 */
export function levelBelow(level: CefrLevel): CefrLevel | null {
  const idx = CEFR_ORDER.indexOf(level);
  return idx <= 0 ? null : CEFR_ORDER[idx - 1]!;
}

/**
 * Returns true when an exercise is unlocked for the user.
 * Unlocked if: exerciseCefr rank ≤ userCefr rank
 *
 * Unknown exercise CEFR (e.g., 'A1+') → always unlocked (fail-open for missing data).
 *
 * The `userCefr` argument is the level the caller wants to check against.
 * When the CERTIFICATION_REQUIRED feature flag (in cefrCertification.ts) is
 * active, callers should pass the user's *certified* level (from
 * `getCertifiedLevel()`) instead of their *eligible* level (from
 * `getUserCefr()`). Until the flag flips, callers continue to pass the
 * eligible level so behaviour is unchanged.
 *
 * @example isUnlocked('B1', 'B1') → true
 * @example isUnlocked('B2', 'B1') → false
 * @example isUnlocked('A1+', 'A1') → true (unknown exercise CEFR)
 */
export function isUnlocked(exerciseCefr: string, userCefr: string): boolean {
  return cefrRank(exerciseCefr) <= cefrRank(userCefr);
}

/**
 * Returns the level the application should treat as authoritative for
 * content unlocking. Encapsulates the eligible-vs-certified decision so
 * callers don't have to know which mode is active.
 *
 * When `CERTIFICATION_REQUIRED` is false:
 *   returns `eligible` (activity-derived, getUserCefr output).
 *
 * When `CERTIFICATION_REQUIRED` is true (the current state — hard-gated mode):
 *   returns the user's certified level (highest test-passed CEFR).
 *
 * The caller injects the certification module's exports to avoid a
 * circular import — cefrCertification.ts depends on this file for the
 * CefrLevel type and cefrRank helper. The two helpers needed are
 * trivially small so passing them in is cleaner than dynamic-import
 * wrangling at the module boundary.
 *
 * Most code paths should use `getEffectiveLevelForUnlock()` (below)
 * which wires up the module connection at one centralised call site.
 *
 * @param eligible The activity-derived level.
 * @param cert Optional certification helpers. When omitted, returns eligible.
 */
export function getEffectiveLevel(
  eligible: CefrLevel,
  cert?: {
    CERTIFICATION_REQUIRED: boolean;
    getCertifiedLevel: () => CefrLevel;
  },
): CefrLevel {
  if (!cert || !cert.CERTIFICATION_REQUIRED) return eligible;
  return cert.getCertifiedLevel();
}

/**
 * THE CEFR BAND TABLE — the one place the thresholds are written down.
 *
 * Until 2026-09-23 these five numbers lived in FOUR places: this function's
 * inline `if` ladder, `StatsTab`'s `CEFR_META[...].needed`, a second inline
 * `CEFR_FLOOR` map a few hundred lines below it in the same file, and
 * `heroHelpers`' own `CEFR_BANDS`. They all agreed — measured, not assumed —
 * but only ONE of them had a reason to change, and that asymmetry is what makes
 * this kind of drift silent: move a band here and the LEVEL moves everywhere
 * while every progress bar keeps measuring against the old target, with the
 * badge and the bar both looking perfectly plausible.
 *
 * That is not hypothetical in this codebase. The 2026-09-06 field report — "it
 * shows C1, I'm not C1" — came from three copies of the level formula that were
 * "in sync with each other and with nothing that mattered". The LEVEL was
 * consolidated then; these thresholds were not.
 *
 * `ceiling` is the score at which the learner leaves the band (exclusive floor
 * of the next), and is null at C2, which is terminal.
 */
export const CEFR_BANDS: ReadonlyArray<{
  level: CefrLevel;
  floor: number;
  ceiling: number | null;
}> = [
  { level: 'A1', floor: 0, ceiling: 300 },
  { level: 'A2', floor: 300, ceiling: 1200 },
  { level: 'B1', floor: 1200, ceiling: 3500 },
  { level: 'B2', floor: 3500, ceiling: 8000 },
  { level: 'C1', floor: 8000, ceiling: 18000 },
  { level: 'C2', floor: 18000, ceiling: null },
];

/** The progress score a level is derived from: XP plus weighted completions. */
export function cefrScore(xp: number, lc: number, gc: number): number {
  return (xp || 0) + (lc || 0) * 15 + (gc || 0) * 25;
}

/** The band a level occupies. Every consumer of a floor or a target reads this. */
export function cefrBand(level: CefrLevel): { floor: number; ceiling: number | null } {
  const band = CEFR_BANDS.find((b) => b.level === level);
  return band ? { floor: band.floor, ceiling: band.ceiling } : { floor: 0, ceiling: null };
}

/**
 * Computes the user's CEFR level from progress statistics.
 *
 * Formula: total = xp + lc*15 + gc*25 (`cefrScore`)
 * Thresholds: `CEFR_BANDS` above — A1 (<300) → A2 (<1200) → B1 (<3500) →
 * B2 (<8000) → C1 (<18000) → C2.
 *
 * @param xp - Total XP earned
 * @param lc - Lesson completions
 * @param gc - Grammar completions
 * @returns CEFR level (one of: A1, A2, B1, B2, C1, C2)
 *
 * @example getUserCefr(0, 0, 0) → 'A1'
 * @example getUserCefr(300, 0, 0) → 'A2'
 * @example getUserCefr(150, 10, 0) → 'A2' (150 + 10*15 = 300)
 */
export function getUserCefr(xp: number, lc: number, gc: number): CefrLevel {
  const total = cefrScore(xp, lc, gc);
  for (const band of CEFR_BANDS) {
    if (band.ceiling === null || total < band.ceiling) return band.level;
  }
  return 'C2';
}
