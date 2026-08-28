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
