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
// NO SPINE, NO SLOT. getNextLesson returns null only when the curriculum has
// never been fetched, and the session then composes exactly as it did before this
// existed — a path that has never stranded anyone. Teaching is an addition to the
// session, never a dependency of building one.

import type { SkillCategory } from './adaptive';
import { getNextLesson, type CurriculumStep } from './curriculum';
import { readCurriculumSpine, readCompletedLessons } from './curriculumProgress';
import { getCertifiedLevel } from './cefrCertification';
import { LESSON_TAUGHT_CATEGORY } from './teachPractice';

/**
 * The lesson to teach in today's session, or null when there is no curriculum
 * data to answer from. Never throws: a failure here must cost the teaching slot,
 * never the session.
 */
export function resolveCurriculumLesson(userCefr: string): CurriculumStep | null {
  try {
    const spine = readCurriculumSpine();
    if (spine.length === 0) return null;
    return getNextLesson({
      spine,
      completed: readCompletedLessons(),
      certifiedLevel: getCertifiedLevel(),
      unlockedLevel: userCefr as never,
    });
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
  const step = resolveCurriculumLesson(opts.userCefr);
  if (!step) return [];
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
