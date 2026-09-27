// src/lib/curriculum.ts
//
// THE SPINE'S ROW SHAPE. Two types, and the history of the engine that used to
// live here.
//
// WHAT THIS FILE WAS (Wave 1, 2026-08-28 → increment 3, 2026-09-26). It held
// `getNextLesson`, the sequencer that replaced "least-recently-served, unlocked at
// this CEFR" — rotation, not pedagogy, which could serve the genitive deep-dive to
// someone who had never met the concept of a case. Its central idea was the
// CERTIFICATION INFERENCE, and the reasoning behind it is worth keeping because the
// problem it solved is real and will come back in another form:
//
//   On the day the curriculum shipped, every existing learner had zero completed
//   lessons — the record did not exist before. "First incomplete lesson in spine
//   order" therefore greeted a certified C1 learner with A1 lesson 1. The two ways
//   to fix that were to BACKFILL completions (a lie in synced storage, never again
//   distinguishable from a real completion) or to INFER: a prerequisite counts as
//   satisfied when its level sits strictly below the learner's certified level.
//   Nothing is written, and the inference disappears the moment the evidence does.
//
// WHY IT IS GONE. The owner's directive of 2026-09-26 is _"all users follow the same
// learning path. If they are already somewhat familiar they will be able to master
// easier subjects quickly."_ Under one path, position is POSITIONAL — and while the
// inference stayed, the daily session and the course map answered "what comes next"
// differently for exactly the learners the course was rebuilt for: the session
// served a certified learner their own level, the map showed that unit as locked.
//
// So `src/lib/courseStep.ts` is the one answer now, and the old engine was DELETED
// rather than deprecated. A second sequencer in the tree — unused, tested, and
// plausible — is the `SpeakingScreen` prompt-pool shape: a duplicate invites editing
// the one nobody renders. What replaced the inference is not a shortcut in the
// sequencer but the TEST-OUT offer (`unitTestOffer`): the same test at the same bar,
// available before the reading, so a learner who knows A1 clears its six units
// quickly.
//
// THE NULL CONTRACT SURVIVES, in `courseStep.nextCourseStep`: null means only "there
// is no curriculum data", and the caller omits the teaching slot and composes the
// session exactly as it did before any of this existed. Absence of data is reported,
// never papered over.

import type { CEFRLevel as CefrLevel } from '../types';

export interface CurriculumEntry {
  id: string;
  level: CefrLevel;
  order: number;
  prerequisites: string[];
  objectives: string[];
  /** Display metadata carried on the spine payload. */
  title?: string;
  subtitle?: string;
  icon?: string;
  duration?: string;
}

export interface CurriculumStep {
  entry: CurriculumEntry;
  /** True when re-serving an already-completed lesson because the spine ran out. */
  isReview: boolean;
  /**
   * Why this lesson, in words a learner can check against reality. Authored from
   * facts the engine actually has — never a measured-sounding claim it invented.
   */
  reason: string;
}
