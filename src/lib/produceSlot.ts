// src/lib/produceSlot.ts
//
// THE DAY'S PRODUCTION IS ABOUT THE DAY'S CONCEPT (Daily Session redesign,
// increment 2a; owner decision 4 of 2026-09-28, "production on lesson days").
//
// Until this, the session's production slot (P2.5) rotated writing and speaking
// units chosen by level and by the ledger's weakest skill — never about the lesson
// the learner had just read. The lesson's own produce step (`LessonProduceStep`,
// on the passed summary: two or three sentences using THAT lesson's objectives,
// graded by the same `/api/correct` rubric as Guided Writing) existed and was
// optional. On a LESSON day the slot is now that step.
//
// SCOPE IS THE DECISION'S: a day whose course step IS a lesson. A check-up day (a
// lesson riding behind a re-check), a unit-test, production or level-review day
// keeps the pool pick, so no day carries two production tasks.
//
// CREDIT FOLLOWS THE WORK. The step records `produced` on a graded submission
// wherever it was written; `creditProducedSlots` marks the session slot done from
// that record, so a learner who wrote it on the lesson page is not asked twice.
// A SKIPPED step records nothing and the slot stays — the honest state
// (NEVER-DO 14). The standalone screen (`lessonproduce`) is for that learner.
//
// This file exists because useDailySession.ts is at its 800-line cap, which is
// not raised (the inputSlot / retentionSlot / curriculumSlot precedent).

import type { DailySession, SessionActivity } from './dailySessionStore';
import { markDoneInSession, persistSession, recordSessionComplete } from './dailySessionStore';
import {
  lessonProduceActivityId,
  lessonIdOfProduceActivity,
  requestLessonProduce,
  lessonProduced,
  lastProducedKind,
  type ProduceKind,
} from './lessonProduceRequest';
import { produceReason } from './activityReason';
import { weakestProductionKind } from './masteryLedger';
import type { CefrLevel } from './cefr';

interface SlotLike {
  id: string;
  label: string;
  screen: string;
}

/**
 * The lesson-day production activity, or null on any other day shape.
 * `curriculumSlots` is P0's output; the day is a lesson day iff its FIRST slot is
 * the lesson (a re-check day puts the lesson second, behind the check-up).
 */
export function selectLessonProduceSlot(
  curriculumSlots: readonly SlotLike[],
  level: string,
): (SessionActivity & { reason: string }) | null {
  const first = curriculumSlots[0];
  if (!first || first.screen !== 'animlesson') return null;
  const lessonId = first.id.replace(/^curriculum_/, '');
  if (!lessonId || lessonId === first.id) return null;
  const kind = pickProduceKind(level);
  // A corrective day labels the LESSON "Again: <title>" (curriculumSlot); the
  // production task is about the concept, and "Write it: Again: …" read as nonsense.
  const title = first.label.replace(/^Again: /, '');
  try {
    requestLessonProduce(lessonId, kind);
  } catch {
    /* the screen reports that it has no lesson rather than crashing */
  }
  return {
    id: lessonProduceActivityId(lessonId, kind),
    label: `${kind === 'speak' ? 'Say it' : 'Write it'}: ${title}`,
    screen: 'lessonproduce',
    category: kind === 'speak' ? 'speaking' : 'writing',
    reason: produceReason(title, kind),
  };
}

/**
 * WRITE or SPEAK today (increment 2b). The ledger's weaker production skill decides
 * when it has a verdict; with none it ALTERNATES from the last graded produce step,
 * opening on WRITE — so a learner meets both modalities on the day's concept rather
 * than writing every day (the cost 2a stated).
 */
export function pickProduceKind(level: string): ProduceKind {
  const weakest = weakestProductionKind(level as CefrLevel);
  if (weakest) return weakest;
  return lastProducedKind() === 'write' ? 'speak' : 'write';
}

/**
 * Mark every pending produce slot whose lesson has a RECORDED production as done.
 * Returns the same object when nothing changes, so a state setter can no-op.
 */
export function creditProducedSlots(session: DailySession): DailySession {
  let updated = session;
  for (const a of session.activities) {
    if (a.screen !== 'lessonproduce' || updated.completedIds.includes(a.id)) continue;
    const named = lessonIdOfProduceActivity(a.id);
    // Either modality settles the slot: the work is production on the concept.
    if (!named || !lessonProduced(named.lessonId)) continue;
    updated = markDoneInSession(updated, a.id);
  }
  if (updated === session) return session;
  persistSession(updated);
  if (updated.completedIds.length === updated.activities.length) {
    recordSessionComplete(updated.date);
  }
  return updated;
}
