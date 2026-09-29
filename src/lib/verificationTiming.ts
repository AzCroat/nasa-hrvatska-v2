// src/lib/verificationTiming.ts
//
// THE LEVEL CHECK COMES AFTER THE LEVEL (owner directive, 2026-09-29):
// "we need to not have the verification test pop up every two days, its annoying and
// shouldn't be coming up that often. It is something that should come up a week or more
// after completing an entire CEFR level with mastery."
//
// Before this, the Home prompt appeared whenever a provisional level was waiting and
// VERIFICATION_RETURN_XP (350) had been earned since the last attempt — for a daily
// learner, every few days, whatever they were learning. Now the prompt for a level waits
// for the COURSE: every unit of that CEFR level has met the bar (unit test + both
// production tasks), and at least VERIFICATION_WAIT_DAYS have passed since the last of
// them — a delay that makes the check a test of what stayed, not of what was just
// studied. After a failed attempt it waits the same week again. The XP cadence still
// applies on top. The GATE (locked content) is untouched; this times the PROMPT only,
// and the Me tab still offers the check to anyone who wants it sooner.
//
// WITH NO CURRICULUM DATA THE PROMPT WAITS. The spine is a fetch, so "absent" is
// almost always "not here yet" — and the first version, which fell back to the old
// rule on absence, put the card on Home for the seconds before the spine landed on
// every fresh load (found by an E2E mutation: the spec kept passing with no course
// seeded at all). The GATE is untouched and the Me tab still offers the check, so a
// prompt held back while the course is unknown costs nothing; a prompt the owner
// asked to be rare, shown on a guess, is the defect.

import { readCourseState } from './courseStep';
import { readCourseUnits } from './courseUnitProgress';
import { daysBetween } from './lessonRetention';
import { localDateStr } from './dateUtils';

export const VERIFICATION_WAIT_DAYS = 7;

const ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/**
 * The course level a Level Check tests. A check keyed L tests L-competency and grants
 * L+1 status (lib/cefrCertification), so the card's "Make your B1 real" is the check
 * keyed A2 — and the course level that must be finished first is A2.
 */
export function courseLevelForStatus(status: string): string | null {
  const i = ORDER.indexOf(status);
  return i > 0 ? ORDER[i - 1]! : null;
}

/** The date the learner finished every unit of `level` in the course, or null. */
export function levelCompletedAt(level: string): string | null {
  const state = readCourseState();
  const units = state.units.filter((u) => u.level === level);
  if (units.length === 0 || !units.every((u) => state.advanced.has(u.id))) return null;
  const store = readCourseUnits();
  let last = '';
  for (const u of units) {
    const r = store.units[u.id];
    for (const d of [r?.passedAt, r?.production?.wroteAt, r?.production?.spokeAt]) {
      if (typeof d === 'string' && d > last) last = d;
    }
  }
  return last || localDateStr();
}

/**
 * Whether Home may prompt the Level Check that makes STATUS `level` real, today. `lastAttemptAt` is the
 * epoch ms of the learner's latest check attempt, if any.
 */
export function verificationPromptReady(
  level: string | null | undefined,
  lastAttemptAt: number | null | undefined,
  today: string = localDateStr(),
): boolean {
  if (!level) return false;
  let hasCourse = false;
  try {
    hasCourse = readCourseState().units.length > 0;
  } catch {
    hasCourse = false;
  }
  if (!hasCourse) return false; // course unknown yet: the prompt waits (header)
  const tested = courseLevelForStatus(level);
  if (!tested) return false;
  const done = levelCompletedAt(tested);
  if (!done || daysBetween(done, today) < VERIFICATION_WAIT_DAYS) return false;
  if (typeof lastAttemptAt === 'number' && Number.isFinite(lastAttemptAt)) {
    if (daysBetween(localDateStr(new Date(lastAttemptAt)), today) < VERIFICATION_WAIT_DAYS)
      return false;
  }
  return true;
}
