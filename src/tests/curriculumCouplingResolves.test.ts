// src/tests/curriculumCouplingResolves.test.ts
//
// EVERY MAPPING MUST ACTUALLY RESOLVE (Wave 3, 2026-08-28).
//
// The teach → practice map can be honest and still be useless. `gender →
// vocab-a2` was the standing example: the pairing was reasonable, but the
// category routed to a drill gated at A2, so for the A1 learners that lesson is
// written for it silently resolved to nothing. The learner was queued a category
// that never became an activity, and no error was raised anywhere. It was the
// last such mapping and was fixed on 2026-08-28; the exception set is now empty.
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
import {
  LESSON_TAUGHT_CATEGORY,
  recordLessonTaught,
  recordScreenPractised,
  pendingTaughtCategories,
  categoryForScreen,
  clearTaughtQueue,
} from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from '../lib/categoryRoutes';
import type { CurriculumEntry } from '../lib/curriculum';

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
const spine = CURRICULUM as Entry[];
const lessonById = new Map((LESSONS as { id: string; title: string }[]).map((l) => [l.id, l]));

/**
 * EMPTY as of 2026-08-28, and that is the point: the list could only shrink and
 * it has reached zero. `gender` was the last entry — it mapped to 'vocab-a2',
 * which routes to `znam` (A2), so for the A1 learners the lesson is written for
 * it resolved to nothing.
 *
 * It was NOT fixed by giving 'vocab-a2' an easier route, which would have
 * changed what the adaptive scheduler serves every A1 learner. `genderdrill` is
 * an A1 drill that already matched the lesson and was tagged 'vocab-a2' only
 * because there was no better tag; it now carries its own pool-only `gender`
 * category, so the coupling resolves and nothing else moves.
 *
 * Keep this set. A future mapping that cannot resolve belongs here with its
 * reason rather than as a deleted assertion — but it can still only shrink.
 */
const KNOWN_UNRESOLVED = new Set<string>();

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

describe('finishing that drill CLEARS the coupling', () => {
  // THE OTHER HALF OF THE ROUND TRIP (2026-08-28).
  //
  // The suite above proves a mapped lesson REACHES a drill. It does not prove
  // that doing the drill discharges the intention — and for 18 of 62 mappings
  // it did not. Several categories share one screen (`cloze` serves past-tense
  // and conditional; `aspectdrill` serves all three aspect categories) and
  // `writing_guided` has no pool entry at all, while clearing was keyed on the
  // screen's single POOL TAG. Those couplings resolved perfectly, sent the
  // learner to the right drill, and then sat in the queue for their full
  // 14-day TTL, re-claiming a session slot every day.
  //
  // It went unnoticed because reachability and clearing are separate paths:
  // reverting the rekcija pool tag left the suite above completely green. Only
  // mutation-testing exposed it, which is why this block walks the real
  // record → resolve → finish → cleared cycle rather than inspecting a map.
  it.each(MAPPED.map((e) => [e.id, e.level, LESSON_TAUGHT_CATEGORY[e.id]] as const))(
    '%s (%s → %s) clears when its drill is finished',
    (id) => {
      const entry = spine.find((e) => e.id === id)!;
      const screen = practiceFor(entry);
      expect(
        screen,
        `${id} did not resolve — the suite above should have caught this`,
      ).toBeTruthy();

      clearTaughtQueue();
      recordLessonTaught(id);
      expect(pendingTaughtCategories(), `${id} did not queue its category`).toContain(
        LESSON_TAUGHT_CATEGORY[id],
      );

      recordScreenPractised(screen!);
      expect(
        pendingTaughtCategories(),
        `${id} is mapped to "${LESSON_TAUGHT_CATEGORY[id]}" and routes to "${screen}", but ` +
          `finishing that screen does not clear the queue entry. The coupling will re-claim a ` +
          `session slot every day until its 14-day TTL expires, serving the same drill over ` +
          `and over. Usually means the screen's pool tag names a different category and no ` +
          `route agrees with it either.`,
      ).not.toContain(LESSON_TAUGHT_CATEGORY[id]);
      clearTaughtQueue();
    },
  );
});

describe('the dedicated lesson SCREENS clear too', () => {
  // LESSON_TAUGHT_CATEGORY deliberately holds two id spaces: server content
  // lessons (which are spine entries, covered above) and the dedicated lesson
  // SCREENS, which complete through completeExercise under their screen id and
  // never appear in the spine. `MAPPED` filters on the spine, so those were
  // outside every assertion in this file — and one of them, `tenses`, was among
  // the 18 broken couplings. A guard that covers most of a thing looks exactly
  // like a guard that covers the thing.
  //
  // These have no spine entry to feed the session builder, so the route maps
  // supply the screen. That is production data used as INPUT to a behavioural
  // assertion, not a restatement of it: the claim under test is that finishing
  // the drill discharges the intention.
  const nonSpine = Object.keys(LESSON_TAUGHT_CATEGORY).filter(
    (id) => !spine.some((e) => e.id === id),
  );

  it('has some to check', () => {
    expect(nonSpine.length).toBeGreaterThanOrEqual(3);
  });

  it.each(nonSpine)('%s clears when its drill is finished', (id) => {
    const category = LESSON_TAUGHT_CATEGORY[id];
    const screens = [CATEGORY_SCREEN_MAP[category], CATEGORY_EASIER_SCREEN[category]].filter(
      Boolean,
    ) as string[];
    expect(
      screens.length,
      `${id} maps to "${category}", which has no route at all`,
    ).toBeGreaterThan(0);

    const cleared = screens.some((screen) => {
      clearTaughtQueue();
      recordLessonTaught(id);
      recordScreenPractised(screen);
      return !pendingTaughtCategories().includes(category);
    });
    clearTaughtQueue();
    expect(
      cleared,
      `${id} is mapped to "${category}" and routes to ${screens.join(' / ')}, but finishing ` +
        `those screens never clears the queue entry.`,
    ).toBe(true);
  });
});

describe('the exception list is empty, and stays honest if it is not', () => {
  // `gender → vocab-a2` was the last standing exception and was fixed on
  // 2026-08-28 by giving `genderdrill` its own pool-only category. What replaces
  // the old "this still fails" assertion is a check that the set means what it
  // says: anything listed must ACTUALLY fail to resolve, so a stale entry can
  // never sit here quietly exempting a mapping that works.
  it('every listed exception genuinely does not resolve', () => {
    for (const id of KNOWN_UNRESOLVED) {
      const entry = spine.find((e) => e.id === id);
      expect(entry, `${id} is listed as unresolved but is not in the spine`).toBeTruthy();
      expect(
        practiceFor(entry!),
        `${id} is listed in KNOWN_UNRESOLVED but now resolves — delete the entry.`,
      ).toBeNull();
    }
  });

  it('gender resolves at A1, where it could not before', () => {
    const entry = spine.find((e) => e.id === 'gender')!;
    expect(entry.level).toBe('A1');
    expect(LESSON_TAUGHT_CATEGORY['gender']).toBe('gender');
    expect(practiceFor(entry)).toBe('genderdrill');
  });

  it("clears on the drill's REAL completion key, which is not its screen id", () => {
    // GenderDrillScreen calls completeExercise({ key: 'gender' }) — not
    // 'genderdrill'. The blocks above clear using the SCREEN the builder
    // returned, so they would stay green even if the real key path broke.
    //
    // It works through categoryForScreen's documented "the key IS a category"
    // fallback, and that fallback only fires because 'gender' is now a category
    // named in the pool. Rename either half and this is the assertion that
    // notices; nothing else would.
    expect(categoryForScreen('gender')).toBe('gender');
    expect(categoryForScreen('genderdrill')).toBe('gender');

    clearTaughtQueue();
    recordLessonTaught('gender');
    expect(pendingTaughtCategories()).toContain('gender');
    recordScreenPractised('gender');
    expect(pendingTaughtCategories()).not.toContain('gender');
    clearTaughtQueue();
  });
});
