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
 * Pick the least-recently-served lesson unlocked at the session's CEFR and
 * record the serve. Returns null when nothing is unlocked (caller should bail
 * with the empty-pool launch-failure path, never navigate to a blank screen).
 */
export function pickSessionLesson<T extends AnimLessonLike>(lessons: T[]): T | null {
  const cefr = readSessionCefr();
  const unlocked = lessons.filter((l) => isUnlocked(l.level ?? 'A1', cefr));
  if (unlocked.length === 0) return null;
  const served = readServedLessons();
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
