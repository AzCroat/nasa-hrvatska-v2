/**
 * interactionCurriculum — a structured conversation progression over the
 * existing guided dialogue scenarios (Content-Rec #9, "the human-interaction
 * path").
 *
 * The audit flagged conversation as the app's most *scattered* skill: the
 * Dialogue Simulator, Razgovor partners, roleplay and free AI chat are all
 * independent launchers with no sense of order — the learner has no answer to
 * "what conversation should I have next?". Listening, reading and pronunciation
 * each got a `*Curriculum.ts` that answers exactly that; conversation had none.
 *
 * This module gives the guided dialogue scenarios the same structured
 * treatment: an ordered, level-aware path with device-local progress
 * (mirroring `listeningCurriculum`'s `nh_*_track_done` done-set — which is not
 * synced, so neither is this). Once the guided path is complete the learner is
 * pointed at the already-built B2+ "Advanced Conversations" bridge.
 *
 * It ships NO machine-authored Croatian: every unit is a pointer at an existing
 * reviewed scenario in `dialogueScenarios.js`. The curriculum is just an
 * ordering + a progress store over content that already ships, so the
 * engine-first content rule is preserved.
 */

import { SCENARIOS } from '../components/practice/dialogueScenarios.js';
import { sortScenariosByLevel } from './conversationLevel';

export interface InteractionUnit {
  id: string; // matches a dialogueScenarios scenario id — used to mark done
  level: string; // CEFR: the scenario's difficulty (A1 | A2 | B1)
  title: string; // scenario title (may carry a leading emoji)
  subtitle: string; // one-line English description
}

interface RawScenario {
  id: string;
  title: string;
  subtitle: string;
  difficulty: string;
}

// The path is a pointer layer over the reviewed guided scenarios — no authored
// content lives here. Ordering within a level follows the source array (which
// runs concrete/transactional → richer/social).
export const INTERACTION_CURRICULUM: InteractionUnit[] = (SCENARIOS as RawScenario[]).map((s) => ({
  id: s.id,
  level: s.difficulty,
  title: s.title,
  subtitle: s.subtitle,
}));

const DONE_KEY = 'nh_interaction_track_done';

/** The set of completed interaction-unit ids (device-local). Never throws. */
export function getInteractionDone(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(DONE_KEY) || '[]');
    return Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

/** Mark a unit complete. Idempotent; safe to call on every completion. */
export function markInteractionUnitDone(unitId: string | null | undefined): void {
  if (!unitId) return;
  try {
    const done = getInteractionDone();
    if (!done.includes(unitId)) {
      localStorage.setItem(DONE_KEY, JSON.stringify([...done, unitId]));
    }
  } catch {
    // localStorage unavailable / quota — non-fatal; progress is best-effort.
  }
}

/** The unit for a given scenario id, or undefined if it isn't on the path. */
export function findInteractionUnit(scenarioId: string): InteractionUnit | undefined {
  return INTERACTION_CURRICULUM.find((u) => u.id === scenarioId);
}

/**
 * The recommended next conversation: the first not-yet-completed unit in
 * level-appropriate order (at/below the learner's level first, closest first,
 * stretch last — reusing the Content-Rec #4 sort). Returns null when the whole
 * guided path is done (the UI then surfaces the Advanced Conversations bridge).
 */
export function getNextInteractionUnit(userLevel: string): InteractionUnit | null {
  const done = getInteractionDone();
  const ordered = sortScenariosByLevel(
    INTERACTION_CURRICULUM.map((u) => ({ ...u, difficulty: u.level })),
    userLevel || 'A1',
  );
  const next = ordered.find((u) => !done.includes(u.id));
  return next
    ? { id: next.id, level: next.level, title: next.title, subtitle: next.subtitle }
    : null;
}

/** Done / total counts across the whole guided path. */
export function getInteractionProgress(): { done: number; total: number } {
  const done = getInteractionDone();
  return {
    done: INTERACTION_CURRICULUM.filter((u) => done.includes(u.id)).length,
    total: INTERACTION_CURRICULUM.length,
  };
}

/** True once every guided scenario has been completed. */
export function isInteractionPathComplete(): boolean {
  const { done, total } = getInteractionProgress();
  return total > 0 && done >= total;
}
