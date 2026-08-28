/**
 * sessionLessonPick — Wave 5 (session catchment): lesson selection for
 * session-launched animated lessons. The 'animlesson' route renders only when
 * the parent holds a full Lesson object, so the session launcher must pick one
 * before navigating. Policy: least-recently-served lesson unlocked at the
 * level the current session was built for (useDailySession persists that as
 * nh_daily_session.cefrLevel).
 */
import { isUnlocked } from './cefr';
import { localDateStr } from './dateUtils';
import { getNextLesson } from './curriculum';
import { readCurriculumSpine, readCompletedLessons } from './curriculumProgress';
import { getCertifiedLevel } from './cefrCertification';

// Screen-id → last-served date, per LESSON id (the 'animlesson' screen is one
// route serving a 45-lesson catalog). Mirrors useDailySession's
// nh_session_served map; never pruned — a few dozen ids is negligible.
const SESSION_SERVED_LESSONS_KEY = 'nh_session_served_lessons';

export interface AnimLessonLike {
  id: string;
  level?: string;
}

/** The CEFR the current daily session was built for; 'A1' when unknown. */
export function readSessionCefr(): string {
  try {
    return (
      (JSON.parse(localStorage.getItem('nh_daily_session') || '{}') as { cefrLevel?: string })
        .cefrLevel || 'A1'
    );
  } catch {
    return 'A1';
  }
}

function readServedLessons(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(SESSION_SERVED_LESSONS_KEY) || '{}') as Record<
      string,
      string
    >;
  } catch {
    return {};
  }
}

/**
 * Pick the lesson to teach, and record the serve.
 *
 * CURRICULUM FIRST (Wave 1, 2026-08-28). This used to be pure rotation —
 * least-recently-served among everything unlocked — which is how the genitive
 * deep-dive could reach someone who had never met the concept of a case. The
 * curriculum spine now answers the question properly: sequence and prerequisites
 * decide, and the learner walks a syllabus rather than a shuffle.
 *
 * Rotation is KEPT as the fallback, not deleted. The spine is a cached fetch and
 * can legitimately be absent — a first run, a cleared cache, an offline start —
 * and on that path the app must behave exactly as it did before this existed
 * rather than refusing to teach. Absence of curriculum data degrades to the old
 * policy; it never degrades to nothing.
 *
 * Returns null when nothing is unlocked (caller bails with the empty-pool
 * launch-failure path, never navigating to a blank screen).
 */
export function pickSessionLesson<T extends AnimLessonLike>(lessons: T[]): T | null {
  const cefr = readSessionCefr();
  const unlocked = lessons.filter((l) => isUnlocked(l.level ?? 'A1', cefr));
  if (unlocked.length === 0) return null;
  const served = readServedLessons();

  // ── Curriculum first ──────────────────────────────────────────────────────
  // The step is only honoured when its lesson is actually present and unlocked.
  // A spine that names a lesson this client cannot serve must fall through to
  // rotation rather than return null: the learner gets taught either way.
  const curriculumPick = (() => {
    try {
      const spine = readCurriculumSpine();
      if (spine.length === 0) return null;
      const step = getNextLesson({
        spine,
        completed: readCompletedLessons(),
        certifiedLevel: getCertifiedLevel(),
      });
      if (!step) return null;
      return unlocked.find((l) => l.id === step.entry.id) ?? null;
    } catch {
      // Curriculum is an improvement to the pick, never a dependency of it.
      return null;
    }
  })();

  if (curriculumPick) {
    try {
      served[curriculumPick.id] = localDateStr();
      localStorage.setItem(SESSION_SERVED_LESSONS_KEY, JSON.stringify(served));
    } catch {
      /* quota/private mode — rotation degrades gracefully */
    }
    return curriculumPick;
  }

  const pick = [...unlocked].sort((a, b) => {
    const la = served[a.id] ?? '';
    const lb = served[b.id] ?? '';
    return la < lb ? -1 : la > lb ? 1 : 0;
  })[0]!;
  try {
    served[pick.id] = localDateStr();
    localStorage.setItem(SESSION_SERVED_LESSONS_KEY, JSON.stringify(served));
  } catch {
    /* quota/private mode — rotation degrades gracefully */
  }
  return pick;
}
