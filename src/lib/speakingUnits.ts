// src/lib/speakingUnits.ts
//
// Guided Speaking's unit rotation and the checklist check, moved out of
// GuidedSpeakingScreen (2026-09-29) so the screen could stay under the 800-line cap
// while gaining the SPEAK-stage recording check. Behaviour is unchanged; the screen
// re-exports all four names.

import {
  SPEAKING_CURRICULUM,
  speakingUnitsForLevel,
  type SpeakingChecklistItem,
  type SpeakingUnit,
} from '../data/speakingCurriculum';
import type { CefrLevel } from './cefr.js';

const UNIT_PTR_KEY = 'nh_guided_speaking_idx';

export function countSpokenWords(raw: string): number {
  return raw.trim().split(/\s+/).filter(Boolean).length;
}

/** Rotate through the level's units across visits so content does not repeat. */
/**
 * The unit this learner is on at `level`. A READ, and only a read (2026-09-27).
 *
 * It used to advance the stored pointer as it read, and it is called when the screen
 * MOUNTS — so opening a unit and backing out skipped it for the whole rotation, and a
 * learner who backed out of their first unit never met it. The floors in this
 * curriculum ladder by index on the premise that the rotation is sequential ("unit 0
 * really is the learner's first"); advancing on open made that premise false for
 * anyone who looked before committing. The pointer now moves in `advanceSpeakingUnit`, called
 * from the graded finish — the same place the course coupling is discharged. Found
 * walking a learner's day in a browser: reopening an abandoned unit served another.
 */
export function pickSpeakingUnit(level: string): SpeakingUnit {
  const pool = speakingUnitsForLevel(level as CefrLevel);
  const units = pool.length > 0 ? pool : SPEAKING_CURRICULUM.filter((u) => u.level === 'A1');
  let idx = 0;
  try {
    idx = parseInt(localStorage.getItem(`${UNIT_PTR_KEY}:${level}`) || '0', 10) || 0;
  } catch {
    /* storage unavailable — first unit */
  }
  return units[((idx % units.length) + units.length) % units.length]!;
}

/** Move this level's pointer past the unit just FINISHED. Only a graded finish calls it. */
export function advanceSpeakingUnit(level: string): void {
  const pool = speakingUnitsForLevel(level as CefrLevel);
  const units = pool.length > 0 ? pool : SPEAKING_CURRICULUM.filter((u) => u.level === 'A1');
  try {
    const idx = parseInt(localStorage.getItem(`${UNIT_PTR_KEY}:${level}`) || '0', 10) || 0;
    localStorage.setItem(`${UNIT_PTR_KEY}:${level}`, String((idx + 1) % units.length));
  } catch {
    /* storage unavailable — same unit next time */
  }
}

export function checklistSatisfied(item: SpeakingChecklistItem, transcript: string): boolean {
  if (typeof item.minWords === 'number') return countSpokenWords(transcript) >= item.minWords;
  if (item.words && item.words.length > 0) {
    const low = transcript.toLowerCase();
    return item.words.some((w) => low.includes(w.toLowerCase()));
  }
  return false;
}
