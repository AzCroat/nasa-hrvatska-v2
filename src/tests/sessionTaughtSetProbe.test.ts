// src/tests/sessionTaughtSetProbe.test.ts
//
// INCREMENT 0 of docs/daily-session-redesign.md — MEASURE G1 BEFORE CHANGING ANYTHING.
//
// G1 (read from code): only the P0 teaching slot follows the learner's COURSE
// position; every other slot is chosen by `userCefr`, the XP-derived unlock level.
// So a learner ahead by XP can be served graded activities on categories the
// course has not yet taught them. This probe puts a number on that through the
// REAL builder, for course positions × XP levels, and prints a table. It asserts
// only non-vacuity (the harness reached the builder), never a target — the
// target belongs to increment 1, where this file becomes the ratchet.
//
// Taught set (design §6): LESSON_TAUGHT_CATEGORY of every completed lesson, plus
// every lesson of a unit the course has ADVANCED the learner past.
// Graded activity: a non-P0 activity whose screen is not a reference/culture
// auto-complete screen and whose category is a skill category (not 'general').

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

import { buildSessionActivities, SESSION_AUTOCOMPLETE_SCREENS } from '../hooks/useDailySession';
import {
  writeCurriculumSpine,
  markLessonComplete,
  readCompletedLessons,
} from '../lib/curriculumProgress';
import { recordUnitTest, recordUnitProduction, recordLevelReview } from '../lib/courseUnitProgress';
import { readCourseState } from '../lib/courseStep';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import type { CurriculumEntry } from '../lib/curriculum';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const RUNS = 40;
/** 1-based course unit the learner stands on (all earlier units fully advanced). */
const POSITIONS = [1, 3, 7, 13] as const;
const XP_LEVELS = ['A1', 'B1', 'C1'] as const;

function advanceTo(unitIndex: number): void {
  const { units } = readCourseState();
  const finishedLevels = new Set<string>();
  for (const u of units) {
    if (u.index >= unitIndex) break;
    for (const l of u.lessons) markLessonComplete(l.id, '2026-09-01');
    recordUnitTest(u.id, 20, 20, true, '2026-09-01');
    recordUnitProduction(u.id, 'write', 0.9, '2026-09-01');
    recordUnitProduction(u.id, 'speak', 0.9, '2026-09-01');
    finishedLevels.add(u.level);
  }
  // A level whose units are all advanced serves its LEVEL REVIEW at the crossing
  // (increment 6) — record it as done so P0 is the lesson, which is the scenario
  // the table describes. The level the learner is now IN is not finished.
  const standing = units.find((u) => u.index === unitIndex);
  for (const lv of finishedLevels) {
    if (lv !== standing?.level) recordLevelReview(lv, 18, 18, '2026-09-01');
  }
  // Retention starts on the first read of the state and the 7-day re-check must
  // not be due today, or P0 would be a check-up rather than the lesson.
}

function taughtSet(): Set<string> {
  const { units, advanced } = readCourseState();
  const completed = new Set(readCompletedLessons());
  const out = new Set<string>();
  for (const u of units) {
    for (const l of u.lessons) {
      if (!advanced.has(u.id) && !completed.has(l.id)) continue;
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      if (c) out.add(c);
    }
  }
  return out;
}

/**
 * Production and conversation are SKILLS, not concepts: no lesson's taught category
 * is `speaking` or `writing`, so a taught-set test cannot judge them. Their question
 * is different — which LEVEL of unit/scenario the screen opens — and that level is
 * chosen inside the screen from the XP level (`pickSpeakingUnit(level)`,
 * `pickUnit(level)`, the dialogue scenario picker), not by the session builder.
 * Counted separately so the concept figure is honest.
 */
const SKILL_CATEGORIES = new Set(['speaking', 'writing']);

function isP0(id: string): boolean {
  return /^(curriculum_|unit_|level_review)/.test(id);
}

describe('increment 0 — how much of the session is on material the course has not taught', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    vi.clearAllMocks();
    writeCurriculumSpine(SPINE);
  });

  /** Two day shapes: a LESSON day (P0 = lesson + drill) and a UNIT-TEST day (P0 = test only). */
  type Day = 'lesson' | 'unit-test';

  function seed(pos: number, day: Day): void {
    localStorage.clear();
    sessionStorage.clear();
    writeCurriculumSpine(SPINE);
    advanceTo(pos);
    if (day === 'unit-test') {
      const unit = readCourseState().units.find((u) => u.index === pos)!;
      for (const l of unit.lessons) markLessonComplete(l.id, '2026-09-10');
    }
  }

  function measure(day: Day): { rows: string[]; concept: number; skill: number } {
    const rows: string[] = [];
    let conceptTotal = 0;
    let skillTotal = 0;
    for (const pos of POSITIONS) {
      for (const lv of XP_LEVELS) {
        seed(pos, day);
        const taught = taughtSet();
        // Anchor: P0 must be the shape this table claims, or the row describes
        // some other day.
        const first = buildSessionActivities(lv)[0];
        expect(first?.screen, `P0 at unit ${pos}/${lv} (${day} day)`).toBe(
          day === 'lesson' ? 'animlesson' : 'unittest',
        );

        let concept = 0;
        let conceptUntaught = 0;
        let skill = 0;
        const offenders = new Map<string, number>();
        const shapes = new Map<string, number>();
        for (let i = 0; i < RUNS; i++) {
          sessionStorage.clear();
          const acts = buildSessionActivities(lv);
          const shape = acts.map((a) => (isP0(a.id) ? 'P0' : a.screen)).join(' | ');
          shapes.set(shape, (shapes.get(shape) ?? 0) + 1);
          for (const a of acts) {
            if (isP0(a.id)) continue;
            if (SESSION_AUTOCOMPLETE_SCREENS.has(a.screen)) continue;
            if (a.category === 'general') continue;
            if (SKILL_CATEGORIES.has(a.category)) {
              skill++;
              continue;
            }
            concept++;
            if (!taught.has(a.category)) {
              conceptUntaught++;
              offenders.set(a.category, (offenders.get(a.category) ?? 0) + 1);
            }
          }
        }
        conceptTotal += concept;
        skillTotal += skill;
        const top = [...offenders.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([c, n]) => `${c}×${n}`)
          .join(', ');
        const commonest = [...shapes.entries()].sort((a, b) => b[1] - a[1])[0]!;
        rows.push(
          `unit ${String(pos).padStart(2)} | xp ${lv} | taught ${String(taught.size).padStart(2)} | concept drills/run ${(concept / RUNS).toFixed(2)}, untaught ${String(Math.round((100 * conceptUntaught) / Math.max(1, concept))).padStart(3)}% [${top || '—'}] | skill slots/run ${(skill / RUNS).toFixed(2)} | shape ${commonest[1]}/${RUNS}: ${commonest[0]}`,
        );
      }
    }
    return { rows, concept: conceptTotal, skill: skillTotal };
  }

  it('measures, for a LESSON day and a UNIT-TEST day, per course position × XP level', () => {
    const lesson = measure('lesson');
    const test = measure('unit-test');
    console.log(
      [
        '',
        `G1 PROBE — ${RUNS} sessions per cell. "concept drills" = graded non-P0 activities with a`,
        'lesson-taught category; "skill slots" = production/conversation (level chosen in-screen by XP).',
        '',
        'LESSON DAY (P0 = lesson + its drill)',
        ...lesson.rows,
        '',
        'UNIT-TEST DAY (P0 = the unit test only)',
        ...test.rows,
        '',
      ].join('\n'),
    );
    // Non-vacuity only: both populations must have been reached.
    expect(lesson.skill + test.skill).toBeGreaterThan(0);
    expect(test.concept).toBeGreaterThan(0);
  });
});
