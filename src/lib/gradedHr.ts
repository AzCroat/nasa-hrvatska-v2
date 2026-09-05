/**
 * gradedHr — pick the Croatian text of a bilingual culture record at the
 * learner's level (content expansion item 6, 2026-09-05).
 *
 * The culture data carries a Croatian layer in `*Hr` fields (`introHr`,
 * `textHr`, …) written at ONE register — roughly B1 — and served identically to
 * an A1 beginner and a C2 reader. Records that have been graded carry the same
 * text at every other level in sibling fields named `<base><Level>`:
 * `textHrA1`, `textHrA2`, `textHrB2`, `textHrC1`, `textHrC2`. The bare field
 * stays the B1 baseline, so every consumer that never heard of grading — and
 * every payload cached before it — reads exactly what it read before.
 *
 * Selection walks DOWN the ladder from the learner's level to the nearest text
 * that exists, then falls back to the bare field. It never serves a level ABOVE
 * the learner's, and it reports which level it actually served so a screen can
 * say "at your level" only when that is true (the honesty rule from
 * activityReason: never state something the app did not do).
 *
 * The field-name shape is load-bearing for the Croatian lint: lintCroatianText
 * matches `[a-zA-Z]*Hr[ABC]?[12]?`, so a graded field is scanned by
 * construction. Do not move graded text into a nested `{ A1: … }` object — the
 * level keys are not field names the lint knows.
 */
import { CEFR_ORDER, type CefrLevel } from './cefr';

/** The bare `*Hr` field is written at this level. */
export const GRADED_BASE_LEVEL: CefrLevel = 'B1';

/** The field that carries `base` at `level` — the bare base field IS the B1 text. */
export function gradedField(base: string, level: CefrLevel): string {
  return level === GRADED_BASE_LEVEL ? base : `${base}${level}`;
}

export interface GradedPick {
  text: string;
  /** The level whose text was actually served (may sit below the learner's). */
  level: CefrLevel;
  /** True only when `level` is the learner's own level. */
  atLevel: boolean;
}

/**
 * The Croatian text of `base` for a learner at `level`, walking down the ladder
 * to the nearest available text and finally to the bare field. Returns null
 * when the record carries no Croatian at all (the pre-bilingual EN-only shape).
 */
export function pickGradedHr(
  rec: Record<string, unknown> | null | undefined,
  base: string,
  level: string,
): GradedPick | null {
  if (!rec) return null;
  const idx = (CEFR_ORDER as readonly string[]).indexOf(level);
  // An unknown level reads the baseline: nothing above it can be claimed.
  const ladder: readonly CefrLevel[] =
    idx < 0 ? [GRADED_BASE_LEVEL] : [...CEFR_ORDER.slice(0, idx + 1)].reverse();
  for (const l of ladder) {
    const v = rec[gradedField(base, l)];
    if (typeof v === 'string' && v.trim()) return { text: v, level: l, atLevel: l === level };
  }
  // Below B1 with no A-band text (a payload older than the grading): the bare
  // field is the only Croatian there is, and it is the B1 text.
  const v = rec[base];
  return typeof v === 'string' && v.trim()
    ? { text: v, level: GRADED_BASE_LEVEL, atLevel: false }
    : null;
}
