// src/tests/teachPractice.test.ts
//
// Teach → practice coupling (recommender audit, 2026-08-20).
//
// The behaviour under test is the audit's systemic finding: finishing a lesson
// used to change nothing about the next session. These tests pin the full loop —
// lesson queues a category, session claims a slot for it, practice clears it —
// plus the two properties that keep it from becoming noise: entries expire, and
// the slot is never a drill the learner cannot open.

import { describe, it, expect, beforeEach } from 'vitest';
import {
  LESSON_TAUGHT_CATEGORY,
  TAUGHT_TTL_DAYS,
  TAUGHT_MAX,
  recordLessonTaught,
  recordCategoryPractised,
  pendingTaughtCategories,
  categoryForScreen,
  clearTaughtQueue,
} from '../lib/teachPractice';
import { resolveTaughtPracticeActivity } from '../hooks/useDailySession';

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');

const DAY = 86400000;

describe('the taught queue', () => {
  beforeEach(() => clearTaughtQueue());

  it('queues the category a lesson taught', () => {
    recordLessonTaught('present-tense-verbs');
    expect(pendingTaughtCategories()).toEqual(['present-tense']);
  });

  // A hand-named unmapped lesson used to be asserted here as well —
  // `adjective-agreement`, the example the conservative-map note in
  // teachPractice.ts happened to give. It went stale on 2026-08-30 when the
  // drill for it shipped, which is the FOURTH time a hardcoded fixture in this
  // block has gone red for a correct change. The derived assertion below covers
  // the same behaviour over every uncovered lesson rather than one, so the
  // hardcoded one bought nothing but a maintenance trap and is gone.

  it('ignores EVERY lesson the map does not cover', () => {
    // This assertion used to name one lesson as its example, and the name went
    // stale three times in two days — `basic-questions`, then `family-people`,
    // then `house-home`, each because the drill written for it shipped. That is
    // the right way for a lesson to leave the unmapped list, but a hand-picked
    // fixture turns a correct change into a red test and tempts whoever is
    // holding it into weakening the assertion instead. So the inputs were
    // derived from the map, with a guard against the derivation going vacuous.
    //
    // On 2026-08-30 that guard fired, and it was right to: mapping `alphabet`
    // made the map TOTAL over the curriculum, so there is no uncovered lesson
    // left to feed in and a loop over an empty list asserts nothing.
    //
    // The BEHAVIOUR is still real — an id the map does not cover must queue
    // nothing — so it is exercised with a synthetic id rather than deleted.
    // That is not the hand-picked fixture removed above: it is chosen BECAUSE
    // no lesson can ever be called that, so unlike a real lesson name it cannot
    // go stale when the next drill ships.
    const NOT_A_LESSON = '__no-such-lesson__';
    expect(NOT_A_LESSON in LESSON_TAUGHT_CATEGORY).toBe(false);
    clearTaughtQueue();
    recordLessonTaught(NOT_A_LESSON);
    expect(pendingTaughtCategories(), 'an unmapped id queued something').toEqual([]);

    // And the derived loop stays, so a future lesson added without a mapping is
    // covered the moment it appears. It is empty today, which is the point.
    const uncovered = (CURRICULUM as { id: string }[])
      .map((e) => e.id)
      .filter((id) => !(id in LESSON_TAUGHT_CATEGORY));

    for (const id of uncovered) {
      clearTaughtQueue();
      recordLessonTaught(id);
      expect(pendingTaughtCategories(), `${id} queued something despite being unmapped`).toEqual(
        [],
      );
    }
  });

  it('practising the category clears it', () => {
    recordLessonTaught('present-tense-verbs');
    recordCategoryPractised('present-tense');
    expect(pendingTaughtCategories()).toEqual([]);
  });

  it('re-reading a lesson refreshes rather than duplicating', () => {
    const t0 = 1_700_000_000_000;
    recordLessonTaught('present-tense-verbs', t0);
    recordLessonTaught('present-tense-verbs', t0 + DAY);
    expect(pendingTaughtCategories(t0 + DAY)).toEqual(['present-tense']);
  });

  it('returns oldest first so nothing waits behind a newer lesson', () => {
    const t0 = 1_700_000_000_000;
    recordLessonTaught('present-tense-verbs', t0);
    recordLessonTaught('genitive-deep', t0 + DAY);
    expect(pendingTaughtCategories(t0 + 2 * DAY)).toEqual(['present-tense', 'genitive']);
  });

  it('entries expire — a lesson finished long ago is no longer a pending intention', () => {
    const t0 = 1_700_000_000_000;
    recordLessonTaught('present-tense-verbs', t0);
    const later = t0 + (TAUGHT_TTL_DAYS + 1) * DAY;
    expect(pendingTaughtCategories(later)).toEqual([]);
  });

  it('the queue is capped — a nudge, not a backlog', () => {
    const t0 = 1_700_000_000_000;
    const lessons = [
      'present-tense-verbs',
      'past-tense',
      'future-tense',
      'genitive-deep',
      'accusative-deep',
      'dative-locative',
      'instrumental',
    ];
    lessons.forEach((l, i) => recordLessonTaught(l, t0 + i * 1000));
    expect(pendingTaughtCategories(t0 + 10_000).length).toBeLessThanOrEqual(TAUGHT_MAX);
  });

  it('survives unparseable storage without throwing', () => {
    localStorage.setItem('nh_taught_pending', '{not json');
    expect(() => pendingTaughtCategories()).not.toThrow();
    expect(pendingTaughtCategories()).toEqual([]);
  });
});

describe('categoryForScreen — both completion-key shapes', () => {
  it('resolves a key that IS a category (drills that key on the category)', () => {
    expect(categoryForScreen('present-tense')).toBe('present-tense');
    expect(categoryForScreen('nominative')).toBe('nominative');
  });

  it('resolves a key that is a screen id (drills that key on the screen)', () => {
    expect(categoryForScreen('locdrill')).toBe('dative-locative');
    expect(categoryForScreen('presentdrill')).toBe('present-tense');
  });

  it('returns undefined for anything unrecognised', () => {
    expect(categoryForScreen('not_a_real_screen')).toBeUndefined();
  });
});

describe('the lesson map is sane', () => {
  it('every mapped lesson points at a non-empty category string', () => {
    for (const [lesson, category] of Object.entries(LESSON_TAUGHT_CATEGORY)) {
      expect(typeof category, `${lesson} maps to a non-string`).toBe('string');
      expect(category.length, `${lesson} maps to an empty category`).toBeGreaterThan(0);
    }
  });

  it('covers the A1 verb lesson this coupling was built for', () => {
    expect(LESSON_TAUGHT_CATEGORY['present-tense-verbs']).toBe('present-tense');
  });
});

describe('the session slot', () => {
  beforeEach(() => clearTaughtQueue());

  it('is null when nothing is pending — the common case costs nothing', () => {
    expect(resolveTaughtPracticeActivity('A1', new Set())).toBeNull();
  });

  it('claims a slot for the drill that practises what was just taught', () => {
    recordLessonTaught('genitive-deep');
    const act = resolveTaughtPracticeActivity('B1', new Set());
    expect(act?.screen).toBe('genitivedrill');
    expect(act?.category).toBe('genitive');
    expect(act?.id).toBe('taught_genitive');
  });

  it('A1 + the A1 verb lesson resolves to the A1 drill, not the locked A2 one', () => {
    // The case the whole feature exists for. present-tense maps to `cloze` (A2);
    // without the easier-screen fallback this would return null and the coupling
    // would promise practice it never delivers.
    recordLessonTaught('present-tense-verbs');
    const act = resolveTaughtPracticeActivity('A1', new Set());
    expect(act?.screen).toBe('presentdrill');
  });

  it('never returns a drill above the learner CEFR', () => {
    recordLessonTaught('clitics-advanced'); // → clitics → `clitic` (B2)
    expect(resolveTaughtPracticeActivity('A1', new Set())).toBeNull();
  });

  it('does not double-book a screen the session already queued', () => {
    recordLessonTaught('genitive-deep');
    expect(resolveTaughtPracticeActivity('B1', new Set(['genitivedrill']))).toBeNull();
  });

  it('falls through to the next pending category when the first is unusable', () => {
    // Real-clock timestamps: resolveTaughtPracticeActivity reads the queue with
    // Date.now(), so a fixed past epoch would expire before it ever looked.
    const now = Date.now();
    recordLessonTaught('clitics-advanced', now - 1000); // B2 drill — locked at A1
    recordLessonTaught('cases', now); // → nominative → nomdrill (A1)
    const act = resolveTaughtPracticeActivity('A1', new Set());
    expect(act?.screen).toBe('nomdrill');
  });
});
