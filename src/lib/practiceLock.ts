// src/lib/practiceLock.ts
//
// THE PRACTICE TAB FOLLOWS THE COURSE (owner report, 2026-11-13: "According to the application I
// am on the first lesson. Why am I seeing things about padeži?").
//
// The Practice tab unlocked drills by CEFR level alone, so a learner on lesson 1 of A1 could open
// every A1 drill — the accusative, genitive and locative drills included, though the course does
// not teach a case until lesson 28. The lesson lock (lib/lessonLock) already says which lessons a
// learner has reached; this module asks the same question of a drill. A drill is AHEAD of the
// learner when every lesson that practises it (LESSON_TAUGHT_CATEGORY → the category's route in
// CATEGORY_SCREEN_MAP / CATEGORY_EASIER_SCREEN) is still locked. A drill no lesson leads to (the
// vocabulary games, listening, speaking) is not a course topic and stays open.
//
// Absence degrades to "nothing locked", exactly as the lesson lock does: no spine → no lock, so a
// learner is never shut out of practice by a fetch that has not landed.

import { LESSON_TAUGHT_CATEGORY } from './teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from './categoryRoutes';
import { readOpenLessons } from './lessonLock';
import { readCurriculumSpine } from './curriculumProgress';

/**
 * Skill screens, not course topics: a lesson may route its follow-up practice to them (guided
 * writing after the formal-email lesson), but the screen itself serves the learner's own level and
 * must stay open, or Guided Writing would be locked for everyone until B2.
 */
const SKILL_SCREENS = new Set([
  'writing_guided',
  'speaking_guided',
  'writing',
  'dictation',
  'dialogue',
  'shadowing',
]);

/** Screen key → the lessons whose taught category routes to it. */
export function lessonsByScreen(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  for (const [lesson, category] of Object.entries(LESSON_TAUGHT_CATEGORY)) {
    for (const screen of [CATEGORY_SCREEN_MAP[category], CATEGORY_EASIER_SCREEN[category]]) {
      if (!screen) continue;
      const list = out.get(screen) ?? [];
      if (!list.includes(lesson)) list.push(lesson);
      out.set(screen, list);
    }
  }
  return out;
}

const LEVEL_RANK: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };

/**
 * Why a drill is not open yet, or null. Pure: the open-lesson set and the spine positions are
 * passed in. `open` null means the course is unknown, and nothing is locked.
 */
export function practiceLockReason(
  screen: string,
  open: ReadonlySet<string> | null,
  lessons: ReadonlyMap<string, readonly string[]>,
  position: ReadonlyMap<string, { level: string; order: number }>,
): string | null {
  if (!open || SKILL_SCREENS.has(screen)) return null;
  const teaching = lessons.get(screen);
  if (!teaching || teaching.length === 0) return null;
  if (teaching.some((id) => open.has(id))) return null;
  const first = teaching
    .map((id) => ({ id, at: position.get(id) }))
    .filter((x): x is { id: string; at: { level: string; order: number } } => !!x.at)
    .sort(
      (a, b) =>
        (LEVEL_RANK[a.at.level] ?? 9) - (LEVEL_RANK[b.at.level] ?? 9) || a.at.order - b.at.order,
    )[0];
  return first
    ? `Opens with ${first.at.level} lesson ${first.at.order}.`
    : 'Opens with a later lesson.';
}

/** A per-render lookup over the stored course: drill screen → lock reason or null. */
export function readPracticeLock(): (screen: string) => string | null {
  const open = readOpenLessons();
  if (!open) return () => null;
  const lessons = lessonsByScreen();
  const position = new Map(
    readCurriculumSpine().map((e) => [e.id, { level: e.level, order: e.order }]),
  );
  return (screen) => practiceLockReason(screen, open, lessons, position);
}
