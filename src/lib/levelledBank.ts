/**
 * levelledBank — serve a bank at or below the learner's level (2026-09-07).
 *
 * THE DEFECT THIS EXISTS TO END, and it has now been found four times in four
 * places: a practice bank carries a per-item CEFR `level`, and the code that
 * builds the round is `shuffle(BANK).slice(0, N)` — the level is authored,
 * shipped, rendered on a badge, and never read.
 *
 *   LISTEN            45 items · fixed 2026-09-04 (`_levelledListen`)
 *   DICTATION_DATA    80 items · fixed 2026-09-07 (`_levelledDictation`)
 *   TRANSFORMS        43 items · fixed here
 *   TRANSLATE_PROD    30 items · fixed here
 *   TRANSLATE_DRILLS  64 items · fixed here (+ C1_DRILLS)
 *
 * Each was fixed on its own and the next one stayed invisible, because a
 * per-screen fix leaves nothing that can see the sixth bank. Two facts made
 * that inevitable and are worth stating: the level is on the DATA, so a bank
 * looks levelled from the inside no matter what the consumer does; and the
 * round-building line reads perfectly well — it just never mentions the field.
 *
 * So this is the one definition, and `levelledBankReads.test.ts` DERIVES the
 * set of levelled banks from source and requires each one's consumer to reach
 * it. A seventh bank cannot join silently.
 *
 * The contract, inherited from `_levelledListen` and unchanged:
 *   - at or below the learner's level, source order preserved;
 *   - an UNLEVELLED item is kept at every level, because `cefrRank` reads an
 *     unknown level as A1 — absence degrades to servable, it never excludes;
 *   - below `LEVELLED_BANK_MIN` survivors the WHOLE bank is served, because a
 *     launch must never bail, or shrink to two questions, on a classification
 *     gap. That fallback is a floor, not a feature: when it fires for a level
 *     the bank has no content there, and the honest fix is content.
 */
import { isUnlocked } from './cefr';
import type { CefrLevel } from './cefr';

/** Fewer survivors than this and the whole bank is served instead. */
export const LEVELLED_BANK_MIN = 4;

export function levelledBank<T extends { level?: string }>(
  bank: readonly T[],
  level: CefrLevel,
  min: number = LEVELLED_BANK_MIN,
): T[] {
  const ok = bank.filter((q) => isUnlocked(q?.level ?? '', level));
  return ok.length >= min ? ok : [...bank];
}
