// src/lib/sessionLevel.ts
//
// THE SESSION'S LEVEL IS THE COURSE'S LEVEL (Daily Session redesign, increment 1,
// owner decision 1 of 2026-09-28: "course-unit level for everyone").
//
// Until this module, only the teaching slot (P0) knew where the learner stood in
// the course; every other slot — and the production screens' own choice of unit —
// read the XP-derived unlock level. The course deliberately ignores that level
// ("one path, everyone starts at Unit 1"), so a learner with B1 XP standing on
// Unit 1 read the A1 alphabet lesson and was then handed a B1 speaking task and a
// free B1 conversation. Measured, not inferred: `sessionTaughtSetProbe.test.ts`.
//
// Two readers, one fact:
//   * `sessionLevel(fallback)` — what the session builder gates its picks on.
//   * `launchedLevel(screen, fallback)` — what a screen opened FROM the session
//     builds its content at. A screen opened from the Practice tab keeps the
//     learner's own level; that door is not this module's business.
//
// The fallback is the caller's XP level, and it is used in exactly two states:
// no curriculum data (the spine is a cached fetch and can be absent — absence
// degrades to the old behaviour, never to no session), and a FINISHED course
// (`currentIndex` null), where the learner has earned their own level.
//
// This module reads sessionStorage itself rather than importing a reader from
// `sessionSignal`: fourteen test files `vi.mock` that module with only
// `signalSessionCompleteIfActive`, and a new named import from a partially mocked
// module is `undefined` at the call site (CLAUDE.md, "A Null Transport Now Says
// Why"). It imports nothing from `cefrCertification` for the same reason.

import type { CefrLevel } from './cefr';
import { readCourseState } from './courseStep';

/** The key HomeTab and the next-step engine write when the session launches a screen. */
const SESSION_STARTED_KEY = 'nh_session_started';

/**
 * The level of the course unit the learner currently stands on, or null when
 * there is no curriculum data or the course is finished.
 */
export function courseUnitLevel(): CefrLevel | null {
  try {
    const state = readCourseState();
    if (state.units.length === 0 || state.currentIndex === null) return null;
    const unit = state.units.find((u) => u.index === state.currentIndex);
    return unit ? unit.level : null;
  } catch {
    return null;
  }
}

/** The level the session builder gates its graded picks on. */
export function sessionLevel(fallback: string): string {
  return courseUnitLevel() ?? fallback;
}

/**
 * The level a screen should build its content at: the course level when THIS
 * screen was launched from the daily session, the caller's fallback otherwise.
 */
export function launchedLevel(screen: string, fallback: CefrLevel): CefrLevel {
  let started: string | null = null;
  try {
    started =
      typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(SESSION_STARTED_KEY);
  } catch {
    started = null;
  }
  if (started !== screen) return fallback;
  return courseUnitLevel() ?? fallback;
}
