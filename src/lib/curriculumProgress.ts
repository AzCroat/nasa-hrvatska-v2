// src/lib/curriculumProgress.ts
//
// WHAT THE LEARNER HAS BEEN TAUGHT, AND WHAT THE SPINE LOOKS LIKE (Wave 1).
//
// Two small stores, both localStorage, both read synchronously:
//
//   nh_curriculum_spine     — the spine fetched from /api/content/curriculum,
//                             cached so the session builder can read it without
//                             becoming async. Content, not progress: it is a
//                             cache and is never synced.
//   nh_curriculum_progress  — the lesson ids this learner has actually completed.
//                             Progress, so it DOES sync, additively.
//
// WHY THE CACHE EXISTS AT ALL: buildSessionActivities is synchronous, and making
// it async to await a fetch would ripple through every caller and every test for
// the sake of one slot. A cached spine keeps the seam where it belongs — and its
// absence is already a defined state, because getNextLesson returns null with no
// spine and the session simply composes as it did before.

import type { CurriculumEntry } from './curriculum';

/** Cached spine from /api/content/curriculum. Content cache — never synced. */
const SPINE_KEY = 'nh_curriculum_spine';

/** Completed lesson ids. Progress — synced, additively. */
export const CURRICULUM_PROGRESS_KEY = 'nh_curriculum_progress';

interface StoredProgress {
  /** lesson id → ISO date completed. A map rather than a list so a re-completion
   *  cannot duplicate an entry, and so the union merge is trivially correct. */
  done: Record<string, string>;
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const v = JSON.parse(raw) as T;
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

// ── Spine cache ─────────────────────────────────────────────────────────────

/** The cached spine, or [] when it has never been fetched. */
export function readCurriculumSpine(): CurriculumEntry[] {
  const v = readJson<unknown>(SPINE_KEY, []);
  if (!Array.isArray(v)) return [];
  // Defensive: a truncated or half-written cache must not crash the session
  // builder. Entries that do not carry the sequencing fields are dropped rather
  // than trusted — a spine row without an order cannot be sequenced.
  return v.filter(
    (e): e is CurriculumEntry =>
      !!e &&
      typeof (e as CurriculumEntry).id === 'string' &&
      typeof (e as CurriculumEntry).order === 'number' &&
      typeof (e as CurriculumEntry).level === 'string' &&
      Array.isArray((e as CurriculumEntry).prerequisites),
  );
}

export function writeCurriculumSpine(spine: readonly CurriculumEntry[]): void {
  try {
    localStorage.setItem(SPINE_KEY, JSON.stringify(spine));
  } catch {
    /* a full quota must never break a session */
  }
}

// ── Progress ────────────────────────────────────────────────────────────────

/** Lesson ids the learner has completed. */
export function readCompletedLessons(): Set<string> {
  const v = readJson<StoredProgress>(CURRICULUM_PROGRESS_KEY, { done: {} });
  const done = v && typeof v === 'object' ? v.done : null;
  if (!done || typeof done !== 'object') return new Set();
  return new Set(Object.keys(done));
}

/** The raw map, for the sync snapshot. */
export function readCurriculumProgress(): Record<string, string> {
  const v = readJson<StoredProgress>(CURRICULUM_PROGRESS_KEY, { done: {} });
  return v && typeof v.done === 'object' && v.done ? v.done : {};
}

/**
 * Record that a lesson was completed. Idempotent: the FIRST completion date is
 * kept, because "when did I learn this" should not be rewritten by a revisit.
 */
export function markLessonComplete(lessonId: string, isoDate: string): void {
  if (!lessonId) return;
  try {
    const done = readCurriculumProgress();
    if (done[lessonId]) return;
    done[lessonId] = isoDate;
    localStorage.setItem(CURRICULUM_PROGRESS_KEY, JSON.stringify({ done }));
  } catch {
    /* never break a completion over a storage failure */
  }
}

/**
 * Merge a remote progress map into local. ADDITIVE, like every other merge in
 * this app: the union of lesson ids, and for a lesson both sides know, the
 * EARLIER date wins — a second device cannot postpone when you learned something.
 * A remote merge can never un-complete a lesson.
 */
export function mergeCurriculumProgress(
  local: Record<string, string>,
  remote: Record<string, string> | null | undefined,
): Record<string, string> {
  const out: Record<string, string> = { ...local };
  if (!remote || typeof remote !== 'object') return out;
  for (const [id, at] of Object.entries(remote)) {
    if (typeof id !== 'string' || typeof at !== 'string' || !id || !at) continue;
    const existing = out[id];
    out[id] = existing && existing < at ? existing : at;
  }
  return out;
}
