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

import {
  buildSessionActivities,
  SESSION_AUTOCOMPLETE_SCREENS,
  PRODUCTION_POOL,
} from '../hooks/useDailySession';
import { isUnlocked, cefrRank } from '../lib/cefr';
import { readCompletedLessons } from '../lib/curriculumProgress';
import { readCourseState } from '../lib/courseStep';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { seedCourseAt, readWholeUnit } from './helpers/courseSeed';

const RUNS = 40;
/** 1-based course unit the learner stands on (all earlier units fully advanced). */
const POSITIONS = [1, 3, 7, 13] as const;
const XP_LEVELS = ['A1', 'B1', 'C1'] as const;

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
/**
 * Listening and reading are the other two MODALITY categories (`courseGate`'s
 * `MODALITY_CATEGORIES`): comprehension of graded input, not a lesson's concept, so
 * they are neither a concept drill nor a production slot here. Counted apart.
 */
const INPUT_CATEGORIES = new Set(['listening', 'reading']);

function isP0(id: string): boolean {
  return /^(curriculum_|unit_|level_review)/.test(id);
}

describe('increment 0 — how much of the session is on material the course has not taught', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    vi.clearAllMocks();
  });

  /** Two day shapes: a LESSON day (P0 = lesson + drill) and a UNIT-TEST day (P0 = test only). */
  type Day = 'lesson' | 'unit-test';

  function seed(pos: number, day: Day): void {
    localStorage.clear();
    sessionStorage.clear();
    seedCourseAt(pos);
    if (day === 'unit-test') readWholeUnit(pos);
  }

  interface Cell {
    pos: number;
    lv: string;
    concept: number;
    conceptUntaught: number;
    skill: number;
    /** Screens served in skill slots across all runs. */
    skillScreens: Set<string>;
  }

  function measure(day: Day): {
    rows: string[];
    cells: Cell[];
    concept: number;
    conceptUntaught: number;
    skill: number;
  } {
    const rows: string[] = [];
    const cells: Cell[] = [];
    let conceptTotal = 0;
    let untaughtTotal = 0;
    let skillTotal = 0;
    for (const pos of POSITIONS) {
      for (const lv of XP_LEVELS) {
        seed(pos, day);
        const taught = taughtSet();
        const skillScreens = new Set<string>();
        // Anchor: P0 must be the shape this table claims, or the row describes
        // some other day.
        const first = buildSessionActivities(lv)[0];
        expect(first?.screen, `P0 at unit ${pos}/${lv} (${day} day)`).toBe(
          day === 'lesson' ? 'animlesson' : 'unittest',
        );

        let concept = 0;
        let conceptUntaught = 0;
        let skill = 0;
        let input = 0;
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
              skillScreens.add(a.screen);
              continue;
            }
            if (INPUT_CATEGORIES.has(a.category)) {
              input++;
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
        untaughtTotal += conceptUntaught;
        skillTotal += skill;
        cells.push({ pos, lv, concept, conceptUntaught, skill, skillScreens });
        const top = [...offenders.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([c, n]) => `${c}×${n}`)
          .join(', ');
        const commonest = [...shapes.entries()].sort((a, b) => b[1] - a[1])[0]!;
        rows.push(
          `unit ${String(pos).padStart(2)} | xp ${lv} | taught ${String(taught.size).padStart(2)} | concept drills/run ${(concept / RUNS).toFixed(2)}, untaught ${String(Math.round((100 * conceptUntaught) / Math.max(1, concept))).padStart(3)}% [${top || '—'}] | skill slots/run ${(skill / RUNS).toFixed(2)} | input/run ${(input / RUNS).toFixed(2)} | shape ${commonest[1]}/${RUNS}: ${commonest[0]}`,
        );
      }
    }
    return {
      rows,
      cells,
      concept: conceptTotal,
      conceptUntaught: untaughtTotal,
      skill: skillTotal,
    };
  }

  const lesson = measure('lesson');
  const test = measure('unit-test');

  it('measures, for a LESSON day and a UNIT-TEST day, per course position × XP level', () => {
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
    // Non-vacuity: both populations must have been reached.
    expect(lesson.skill + test.skill).toBeGreaterThan(0);
    expect(test.concept).toBeGreaterThan(0);
  });

  // ── THE RATCHET (increment 1, 2026-09-28). Increment 0 measured; from here the
  // numbers are held. Each clause names the decision it enforces.
  it('no concept drill outside P0 is on a category the course has not taught (decision 1)', () => {
    expect(lesson.conceptUntaught + test.conceptUntaught).toBe(0);
  });

  it('the skill slots follow the COURSE level, not XP (decisions 1 and 3)', () => {
    const unlockedAt = (screen: string, level: string) => {
      const entry = PRODUCTION_POOL.find((p) => p.screen === screen);
      return !!entry && isUnlocked(entry.cefr, level);
    };
    for (const c of [...lesson.cells, ...test.cells]) {
      const courseLevel = c.pos >= 13 ? 'B1' : c.pos >= 7 ? 'A2' : 'A1';
      // The conversation anchor is a COURSE-B1 fact: absent at A1/A2 units whatever
      // the XP says, present at a B1 unit even for an A1-XP learner.
      const anchored = cefrRank(courseLevel) >= cefrRank('B1');
      expect(c.skill / RUNS, `unit ${c.pos} / xp ${c.lv}: skill slots per session`).toBe(
        anchored ? 2 : 1,
      );
      // Every production/conversation screen served is unlocked at the course level.
      for (const s of c.skillScreens) {
        expect(
          unlockedAt(s, courseLevel),
          `unit ${c.pos} / xp ${c.lv}: ${s} at ${courseLevel}`,
        ).toBe(true);
      }
    }
  });
});
