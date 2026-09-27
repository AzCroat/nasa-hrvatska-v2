// src/lib/curriculumSlot.ts
//
// PRIORITY 0 — TODAY'S LESSON: resolution (Wave 1, 2026-08-28).
//
// Extracted from useDailySession so the session builder places slots and this
// module decides what the teaching slot contains. It also kept that file under
// its 800-line lint ceiling, which is the ceiling doing its job: curriculum
// resolution is not session composition.
//
// THE GAP THIS CLOSES: every slot buildSessionActivities guaranteed was practice
// or assessment. The app tested competence it had never taught — a lesson could
// only reach a learner by winning a fill slot, as one A1-tagged pool entry among
// roughly a hundred, pushed down by difficulty ordering for anyone above A1.
//
// FIRST POSITION IS THE REQUIREMENT, not a preference: a lesson each day, before
// anything tests you. It is deliberately NOT a hard gate — a blocker would break
// the never-strand contract for anyone who cannot finish a lesson in one sitting.
// Ordering carries the intent.
//
// IT COSTS A FILL SLOT, NOT AN EXTRA ONE. The caller pushes this before the fill
// loop, which caps on activities.length, so the tested session-length contract
// (A1 → 3, A2+ → 4, +2 in fluency mode) is unchanged by construction rather than
// by a second cap that could drift from the first.
//
// NO SPINE, NO SLOT. `courseStep.nextCourseStep` returns null only when the
// curriculum has never been fetched, and the session then composes exactly as it
// did before this existed — a path that has never stranded anyone. Teaching is an
// addition to the session, never a dependency of building one.

import type { SkillCategory } from './adaptive';
import type { CurriculumStep } from './curriculum';
import {
  nextCourseStep,
  unitTestActivityId,
  unitProductionActivityId,
  unitRecheckActivityId,
} from './courseStep';
import { requestUnitTest } from './courseUnitProgress';
import { requestUnitProduction } from './unitProductionRequest';
import { LESSON_TAUGHT_CATEGORY } from './teachPractice';

/**
 * The lesson to teach in today's session, or null when the course has no lesson to
 * serve — either because there is no curriculum data, or because the learner's open
 * unit is read through and its TEST is the next step (see `buildCurriculumSlots`).
 * Never throws: a failure here must cost the teaching slot, never the session.
 *
 * THE COURSE DECIDES, NOT THE CERTIFICATION INFERENCE (increment 3, 2026-09-26).
 * This used to call `getNextLesson`, which treats everything below a learner's
 * certified level as known and therefore serves a certified B1 learner their own
 * level's first lesson — a unit the course map shows as locked. One path for
 * everyone means position is positional, and it means Home and the map cannot
 * disagree. `userCefr` is no longer read for the pick; it stays in the signature
 * because the follow-on drill below is still CEFR-gated, which is about what the
 * learner can OPEN rather than where they are.
 */
export function resolveCurriculumLesson(_userCefr?: string): CurriculumStep | null {
  try {
    const step = nextCourseStep();
    if (!step || step.kind !== 'lesson') return null;
    return { entry: step.lesson, isReview: false, reason: step.reason };
  } catch {
    return null;
  }
}

/** Stable activity id for a curriculum lesson slot. */
export function curriculumLessonId(lessonId: string): string {
  return `curriculum_${lessonId}`;
}

/**
 * The category whose drill practises what this lesson taught, or undefined.
 *
 * Reads LESSON_TAUGHT_CATEGORY rather than keeping a second copy: that map is the
 * single source of truth and is CONSERVATIVE on purpose — `alphabet`,
 * `basic-questions` and `adjective-agreement` are deliberately unmapped because
 * they have no unambiguous drill. Undefined here means the lesson gets no
 * follow-on practice, which is correct: a wrong drill right after a lesson is
 * worse than no drill.
 */
export function curriculumPracticeCategory(lessonId: string): SkillCategory | undefined {
  return LESSON_TAUGHT_CATEGORY[lessonId];
}

/**
 * The follow-on practice activity for today's lesson, or null.
 *
 * The screen maps stay in useDailySession — they are the single source of truth
 * for every drill pick — and are passed in rather than duplicated. Resolution is
 * the SAME chain as the adaptive pick (mapped screen, then the easier equivalent,
 * with a CEFR gate on whichever it lands on) and that reuse is load-bearing:
 * `present-tense` maps to `cloze` (A2), so an A1 learner finishing the A1 verb
 * lesson would otherwise be promised practice they cannot open.
 */
export function curriculumPracticeActivity(opts: {
  lessonId: string;
  userCefr: string;
  used: ReadonlySet<string>;
  screenMap: Partial<Record<SkillCategory, string>>;
  easierMap: Partial<Record<SkillCategory, string>>;
  screenCefr: Record<string, string | undefined>;
  isUnlocked: (screenCefr: string, userCefr: string) => boolean;
}): { id: string; label: string; screen: string; category: SkillCategory } | null {
  const taught = curriculumPracticeCategory(opts.lessonId);
  if (!taught) return null;
  for (const screen of [opts.screenMap[taught], opts.easierMap[taught]]) {
    if (!screen || opts.used.has(screen)) continue;
    const cefr = opts.screenCefr[screen];
    if (cefr && !opts.isUnlocked(cefr, opts.userCefr)) continue;
    return {
      id: `curriculum_practice_${taught}`,
      label: taught.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      screen,
      category: taught,
    };
  }
  return null;
}

interface SlotActivity {
  id: string;
  label: string;
  screen: string;
  category: SkillCategory | 'general';
  reason: string;
}

/**
 * Today's teaching slots: the lesson, and the drill for what it taught.
 *
 * Returns [] when there is no curriculum data, so the caller adds nothing and the
 * session composes exactly as it did before this existed. One or two entries
 * otherwise — never more, because a session teaches one lesson.
 */
export function buildCurriculumSlots(opts: {
  userCefr: string;
  screenMap: Partial<Record<SkillCategory, string>>;
  easierMap: Partial<Record<SkillCategory, string>>;
  screenCefr: Record<string, string | undefined>;
  isUnlocked: (screenCefr: string, userCefr: string) => boolean;
}): SlotActivity[] {
  let course: ReturnType<typeof nextCourseStep> = null;
  try {
    course = nextCourseStep();
  } catch {
    course = null;
  }
  if (!course) return [];

  // THE UNIT TEST IS A TEACHING SLOT, and it has to be, or the course stalls.
  // With the reading done, the alternative to serving the test is serving the NEXT
  // unit's lesson — racing past the gate — or serving nothing, which leaves the
  // course waiting on an action Home never asks for. It takes P0's slot exactly as
  // a lesson does, and carries no follow-on drill: the test is the whole step.
  //
  // The handoff is written HERE rather than at launch, because the session builder
  // is the only place that knows which unit the slot is about. It is idempotent and
  // ephemeral (sessionStorage), and the screen reads it non-destructively.
  if (course.kind === 'unit-test') {
    try {
      requestUnitTest(course.unit.id);
    } catch {
      /* the screen reports that it has no unit rather than crashing */
    }
    return [
      {
        id: unitTestActivityId(course.unit.id),
        label: `Unit ${course.unit.index} test`,
        screen: 'unittest',
        category: 'general',
        reason: course.reason,
      },
    ];
  }

  // PRODUCTION IS A TEACHING SLOT TOO, for the same reason the test is: with the
  // test passed and production owed, serving the next unit's lesson would advance
  // the learner past a bar they have not met, and serving nothing would leave the
  // course waiting on an action Home never asks for.
  if (course.kind === 'production') {
    try {
      requestUnitProduction(course.unit.id, course.owed);
    } catch {
      /* the screen reports that it has no unit rather than crashing */
    }
    return [
      {
        id: unitProductionActivityId(course.unit.id, course.owed),
        label:
          course.owed === 'write'
            ? `Unit ${course.unit.index}: write`
            : `Unit ${course.unit.index}: speak`,
        screen: 'unitproduction',
        category: 'general',
        reason: course.reason,
      },
    ];
  }

  // A DUE RE-CHECK IS THE TEACHING SLOT, ahead of the next lesson. It runs the unit's
  // own test again on a fresh sample; the handoff carries the `recheck` marker so the
  // screen records the ladder rather than a first pass.
  if (course.kind === 'recheck') {
    try {
      requestUnitTest(course.unit.id, 'recheck');
    } catch {
      /* the screen reports that it has no unit rather than crashing */
    }
    return [
      {
        id: unitRecheckActivityId(course.unit.id),
        label: `Unit ${course.unit.index} check-up`,
        screen: 'unittest',
        category: 'general',
        reason: course.reason,
      },
    ];
  }

  const step: CurriculumStep = {
    entry: course.lesson,
    isReview: false,
    reason: course.reason,
  };
  const out: SlotActivity[] = [
    {
      id: curriculumLessonId(step.entry.id),
      label: step.entry.title || 'Today\u2019s Lesson',
      screen: 'animlesson',
      category: 'general',
      reason: step.reason,
    },
  ];
  const practice = curriculumPracticeActivity({
    lessonId: step.entry.id,
    userCefr: opts.userCefr,
    used: new Set(out.map((a) => a.screen)),
    screenMap: opts.screenMap,
    easierMap: opts.easierMap,
    screenCefr: opts.screenCefr,
    isUnlocked: opts.isUnlocked,
  });
  if (practice) out.push({ ...practice, reason: 'Practising what today\u2019s lesson taught' });
  return out;
}

// ── The teaching slot's second chance (2026-09-22) ───────────────────────────
//
// THE DEFECT THIS CLOSES, measured in a browser rather than reasoned about:
// on a learner's FIRST load on a device the daily plan contained no lesson at
// all, and nothing put one back for the rest of that day.
//
// It is not a race that sometimes goes the wrong way — it goes the wrong way
// every time. HomeTab both BUILDS the plan (a synchronous read of the cached
// spine, at mount) and TRIGGERS the fetch that fills the cache (an effect). The
// build therefore always precedes the data it needs. Measured on a cold cache:
// plan committed at 550ms, the curriculum request not even issued until 6474ms.
// The plan is then persisted and invalidated only by a date or CEFR change, so
// navigating away, coming back, and a full reload all kept the lesson-less plan.
//
// `resolveCurriculumLesson`'s null contract is right and unchanged — no spine,
// no slot, never a stranded session. The bug was asking once, before the answer
// could exist, and never asking again.
//
// THE SAME CLASS IS ALREADY FIXED IN THIS FILE'S CALLER for a different slot:
// the Word Review comment in buildSessionActivities records that an empty pool
// on a cold open "silently dropped the Word Review slot from the whole day's
// session (it's built once, keyed on userCefr)". That one had an offline
// fallback to fall back to. Teaching has none — there is no local copy of the
// curriculum — so it needs the other remedy: ask again when the data lands.
//
// THE SIGNAL IS THE SPINE'S OWN WRITE (CURRICULUM_SPINE_EVENT), not the content
// payload. `getContent()` and `getCurriculumSpine()` are two different fetches
// kicked off together, and the first version of this fix watched the wrong one
// and silently never fired.
//
// WHY IT MAY ONLY FIRE ON AN UNTOUCHED SESSION. Re-rolling a plan the learner
// has already started is the 2026-05-21 incident ("I did my activities but the
// card forgot"), and that is strictly worse than a missing lesson. So a learner
// who opens an activity within the first seconds of a cold start still loses
// the lesson for that day. That is the deliberate cost, and it is the smaller
// one.

/** The facts this decision needs. `spineAvailable` is lazy: it parses the cache. */
export interface TeachingRetryInput {
  /** Whether a spine was available when the persisted plan was built. */
  spineSeen: boolean | undefined;
  /** The date the persisted plan was built for. */
  sessionDate: string;
  /** Today, from the caller's canonical date helper. */
  today: string;
  /** How many activities the learner has already finished today. */
  completedCount: number;
  /** Whether a usable spine exists NOW. Called only if everything else passes. */
  spineAvailable: () => boolean;
}

/**
 * Whether today's plan should be rebuilt because the curriculum arrived after
 * it was committed.
 *
 * Every clause is a reason not to: the plan already had a spine; it belongs to
 * another day (the rollover effect owns that); the learner has started; or
 * there is still nothing to teach from.
 */
export function shouldRetryTeachingSlot(input: TeachingRetryInput): boolean {
  if (input.spineSeen) return false;
  if (input.sessionDate !== input.today) return false;
  if (input.completedCount > 0) return false;
  return input.spineAvailable();
}

/**
 * Whether a STARTED, unfinished plan committed before the curriculum arrived should
 * have the teaching slots INSERTED into it (2026-09-27).
 *
 * The rebuild above refuses a started plan, rightly: re-rolling one is the
 * 2026-05-21 incident. But that refusal left the documented cost as the ordinary
 * case for a NEW learner — measured in a browser, a guest who landed on Home and
 * tapped Begin within the first seconds had the Genitive case drill as their first
 * ever activity, with no lesson anywhere in the day. Inserting is not re-rolling:
 * nothing completed is touched or reordered, so the card cannot "forget". A FINISHED
 * plan is left alone — the next-step engine's course rung answers "what next" there.
 */
export function shouldSpliceTeachingSlot(input: TeachingRetryInput & { total: number }): boolean {
  if (input.spineSeen) return false;
  if (input.sessionDate !== input.today) return false;
  if (input.completedCount === 0) return false; // untouched — the rebuild owns it
  if (input.completedCount >= input.total) return false; // finished — leave it
  return input.spineAvailable();
}

/**
 * Insert `slots` before the first unfinished activity, skipping any whose id or screen
 * the plan already holds. Completed activities keep their place and their ids.
 */
export function spliceTeachingSlots<T extends { id: string; screen: string }>(
  activities: readonly T[],
  completedIds: readonly string[],
  slots: readonly T[],
): T[] {
  const ids = new Set(activities.map((a) => a.id));
  const screens = new Set(activities.map((a) => a.screen));
  const add = slots.filter((s) => !ids.has(s.id) && !screens.has(s.screen));
  if (add.length === 0) return [...activities];
  const done = new Set(completedIds);
  const at = activities.findIndex((a) => !done.has(a.id));
  const i = at < 0 ? activities.length : at;
  return [...activities.slice(0, i), ...add, ...activities.slice(i)];
}
