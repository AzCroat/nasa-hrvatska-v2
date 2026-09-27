// src/lib/unitProduction.ts
//
// PRODUCTION IN THE GATE (Step 3, increment 4, 2026-09-26).
//
// The owner's design for advancement, verbatim from the plan they accepted:
// _"advance on accuracy (unit test at 85%) + production (one spoken, one
// written, rubric-graded)"_. The unit test carries the accuracy half; this
// carries the other one.
//
// WHY PRODUCTION IS PART OF THE BAR AT ALL. The unit test is RECOGNITION —
// fifteen four-option items. A learner can recognise the accusative in a list and
// be unable to reach for it in a sentence, and that gap is where learners plateau;
// `LessonProduceStep` says the same about a single lesson and said it first.
// Pushed output (Swain) is the mechanism: producing extended language forces the
// learner to notice what they cannot yet say, and the corrective feedback is what
// makes the noticing useful.
//
// NOTHING IS AUTHORED HERE, and that is deliberate. The brief comes from the
// unit's five lessons' own `objectives` — the spine's "you will be able to…" lines
// — exactly as `LessonProduceStep` builds its brief from one lesson's. Authoring
// 72 fresh tasks would create a second statement of what each unit teaches, which
// is the hand-maintained-list decay this codebase keeps rediscovering; and the
// objectives are already the honest answer to "what should they be able to say
// now".
//
// THE SCORE DOES NOT GATE, AND THAT IS A CHOICE WORTH STATING. Production is done
// when the learner has produced at the word floor and the evaluator has graded it,
// whatever the score. Two reasons: the accuracy bar is the unit test, which is
// deterministic and re-takeable, and adding a second threshold would gate a
// learner's course progress on a language model's judgement of their prose. The
// score IS recorded, shown, and fed to the mastery ledger and the error taxonomy —
// it just does not decide whether the course opens the next unit.
//
// TWO FLOORS, AND SPOKEN IS LOWER THAN WRITTEN. Speech is produced under time
// pressure with no chance to revise, which is why `speakingCurriculum`'s own
// floors sit below the writing curriculum's at every level. Same reasoning here.

import type { CefrLevel } from './cefr';
import type { CourseUnit } from './courseUnits';

/** Words of WRITTEN Croatian a unit's written task asks for, by level. */
export const UNIT_WRITE_FLOOR: Record<string, number> = {
  A1: 25,
  A2: 30,
  B1: 40,
  B2: 50,
  C1: 60,
  C2: 70,
};

/** Words of SPOKEN Croatian, lower at every level — see the note above. */
export const UNIT_SPEAK_FLOOR: Record<string, number> = {
  A1: 15,
  A2: 18,
  B1: 25,
  B2: 30,
  C1: 40,
  C2: 50,
};

export type ProductionKind = 'write' | 'speak';

export interface UnitProductionBrief {
  kind: ProductionKind;
  unitId: string;
  level: CefrLevel;
  /** The unit's five lessons' objectives, deduplicated, in course order. */
  objectives: string[];
  /** What the learner is asked to do, in English. */
  task: string;
  minWords: number;
}

export function floorFor(kind: ProductionKind, level: string): number {
  const table = kind === 'write' ? UNIT_WRITE_FLOOR : UNIT_SPEAK_FLOOR;
  return table[level] ?? table.A1!;
}

/**
 * The brief for one of a unit's two production tasks.
 *
 * Objectives are capped at six lines: five lessons carry up to fifteen, and a
 * fifteen-point brief is a wall of text nobody reads — and it would be a worse
 * PROMPT for the evaluator too, which grades against what the brief asked for.
 * The cap takes them in course order, so the earliest lessons of the unit lead.
 */
export function unitProductionBrief(unit: CourseUnit, kind: ProductionKind): UnitProductionBrief {
  const seen = new Set<string>();
  const objectives: string[] = [];
  for (const lesson of unit.lessons) {
    for (const o of lesson.objectives ?? []) {
      const line = typeof o === 'string' ? o.trim() : '';
      if (!line || seen.has(line)) continue;
      seen.add(line);
      objectives.push(line);
      if (objectives.length >= 6) break;
    }
    if (objectives.length >= 6) break;
  }
  const level = unit.level;
  const minWords = floorFor(kind, level);
  const task =
    kind === 'write'
      ? `Write at least ${minWords} words of Croatian using what this unit taught.`
      : `Speak for at least ${minWords} words of Croatian using what this unit taught.`;
  return { kind, unitId: unit.id, level, objectives, task, minWords };
}

/** The `prompt` sent to the evaluator — the brief in one line. */
export function briefPrompt(brief: UnitProductionBrief): string {
  const points = brief.objectives.map((o) => `• ${o}`).join('\n');
  return `${brief.task}\n\nShow that you can:\n${points}`;
}

/** Enough language to be worth grading? */
export function meetsFloor(text: string, minWords: number): boolean {
  return countWords(text) >= minWords;
}

export function countWords(text: string): number {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}
