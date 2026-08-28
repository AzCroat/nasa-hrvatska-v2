// src/tests/curriculumCouplingResolves.test.ts
//
// EVERY MAPPING MUST ACTUALLY RESOLVE (Wave 3, 2026-08-28).
//
// The teach → practice map can be honest and still be useless. `gender →
// vocab-a2` is the standing example: the pairing is reasonable, but the
// category routes to a drill gated at A2, so for the A1 learners that lesson is
// written for it silently resolves to nothing. The learner is queued a category
// that never becomes an activity, and no error is raised anywhere.
//
// The per-level suites each assert their own mappings, but they do it against a
// hand-written copy of the screen map — which is a second source of truth, and
// the exact thing this repo keeps learning not to create. This file goes through
// the REAL session builder instead, so it exercises CATEGORY_SCREEN_MAP and
// CATEGORY_EASIER_SCREEN as they actually are.
//
// It caught its own reason for existing: deleting the subordination easier-route
// left every other B1 assertion green, because none of them touched the
// resolution path.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

import { buildSessionActivities } from '../hooks/useDailySession';
import { writeCurriculumSpine } from '../lib/curriculumProgress';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import type { CurriculumEntry } from '../lib/curriculum';

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
const spine = CURRICULUM as Entry[];
const lessonById = new Map((LESSONS as { id: string; title: string }[]).map((l) => [l.id, l]));

/**
 * The one mapping known NOT to resolve, kept as a named exception rather than a
 * standing failure. `gender` (A1) maps to vocab-a2, which routes to `znam` (A2),
 * so for the A1 learners the lesson is written for it resolves to nothing.
 *
 * It is the only one of the original ten left unfixed, and deliberately: unlike
 * numerals, idioms, passive, nominalization and word-order, `vocab-a2` IS in
 * ALL_CATEGORIES. Giving it an easier route would change what the adaptive
 * scheduler serves every A1 learner — a real behaviour change that deserves its
 * own decision rather than arriving as a side effect of a content wave.
 *
 * This list can only shrink. See the test at the bottom of the file.
 */
const KNOWN_UNRESOLVED = new Set(['gender']);

/**
 * Every curriculum lesson that claims a practice category. These are the
 * mappings whose promise the app has to keep.
 */
const MAPPED = spine.filter((e) => LESSON_TAUGHT_CATEGORY[e.id] && !KNOWN_UNRESOLVED.has(e.id));

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
});

/**
 * Put ONE lesson at the front of a spine of its own, so the P0 slot has no
 * choice but to serve it, then build a session at that lesson's level and read
 * back what followed it.
 */
function practiceFor(entry: Entry): string | null {
  const one: CurriculumEntry[] = [
    {
      id: entry.id,
      level: entry.level as CurriculumEntry['level'],
      order: 1,
      prerequisites: [],
      objectives: ['x'],
      title: lessonById.get(entry.id)?.title ?? entry.id,
    },
  ];
  writeCurriculumSpine(one);
  const acts = buildSessionActivities(entry.level);
  const hit = acts.find((a) => a.id.startsWith('curriculum_practice_'));
  return hit ? hit.screen : null;
}

describe('a mapped lesson leads to a drill the learner can actually open', () => {
  it('has mappings to check at all', () => {
    // Guards against the whole suite passing vacuously if the map is emptied.
    expect(MAPPED.length).toBeGreaterThanOrEqual(15);
  });

  it.each(MAPPED.map((e) => [e.id, e.level, LESSON_TAUGHT_CATEGORY[e.id]] as const))(
    '%s (%s → %s) resolves to a real screen',
    (id, level) => {
      const entry = spine.find((e) => e.id === id)!;
      const screen = practiceFor(entry);
      expect(
        screen,
        `${id} is mapped to "${LESSON_TAUGHT_CATEGORY[id]}", but at ${level} that category ` +
          `resolves to no drill. Either the mapped screen is gated above ${level} with no ` +
          `CATEGORY_EASIER_SCREEN fallback, or the category has no route at all. A learner ` +
          `finishing this lesson is queued a category that never becomes an activity.`,
      ).toBeTruthy();
    },
  );
});

describe('the known exception is named, not silently tolerated', () => {
  // `gender → vocab-a2` predates this guard and is a real instance of the bug:
  // vocab-a2 routes to `znam`, which is A2, and `gender` is an A1 lesson. It is
  // listed here rather than fixed because adding a vocab-a2 easier-route would
  // change adaptive picks for every A1 session — a behaviour change that wants
  // its own decision, not a side effect of a content wave.
  //
  // The test asserts the exception STILL FAILS to resolve. If someone fixes it,
  // this goes red and the entry should be deleted — which is the point: the
  // list can only shrink.
  it('gender still does not resolve at A1 (documented, not fixed)', () => {
    const entry = spine.find((e) => e.id === 'gender')!;
    expect(entry.level).toBe('A1');
    expect(LESSON_TAUGHT_CATEGORY['gender']).toBe('vocab-a2');
    expect(
      practiceFor(entry),
      'gender now resolves at A1 — good. Delete this test and the KNOWN_UNRESOLVED note.',
    ).toBeNull();
  });
});
