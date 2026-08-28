// src/tests/curriculumSync.test.ts
//
// CURRICULUM PROGRESS ON THE WIRE (Wave 1, 2026-08-28).
//
// The teaching sequence reads completed lesson ids to decide what to teach next.
// If that never syncs, a learner who opens the app on a second device is taught
// lesson 1 again — and worse, the device that syncs LAST could push its empty
// state over the one that has the history.
//
// Four-point change, per the sync architecture rules: the snapshot, the remote
// apply, an additive merge, and the types. These pin the two halves that can
// silently destroy progress.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs.js', () => ({ getSR: vi.fn(() => ({})), saveSR: vi.fn() }));

import { buildProgressSnapshot } from '../lib/progressSnapshot';
import { applyRemoteProgress } from '../lib/applyRemoteProgress';
import { markLessonComplete, readCurriculumProgress } from '../lib/curriculumProgress';
import type { Stats } from '../types';

const STATS = {
  xp: 0,
  lc: 0,
  gc: 0,
  badges: [],
  vs: [],
  ct: [],
  streak: 0,
} as unknown as Stats;

function snapshot() {
  return buildProgressSnapshot({
    uid: 'u1',
    name: 'Test',
    stats: STATS,
    dchlA: [],
    dchlSl: [],
    favs: [],
    jWords: [],
  }) as unknown as Record<string, unknown>;
}

/** applyRemoteProgress needs setters; none of them matter to this file. */
const noopSetters = new Proxy({} as Record<string, unknown>, {
  get: () => () => {},
}) as never;

beforeEach(() => {
  localStorage.clear();
});

describe('the snapshot carries curriculum progress', () => {
  it('includes completed lessons so a second device knows what was taught', () => {
    markLessonComplete('alphabet', '2026-08-01');
    markLessonComplete('gender', '2026-08-02');
    expect(snapshot().nh_curriculum_progress).toEqual({
      alphabet: '2026-08-01',
      gender: '2026-08-02',
    });
  });

  it('omits the field entirely when nothing has been completed', () => {
    // undefined lets Firestore's setDoc(merge) drop the key, so a fresh device
    // never overwrites server history with its empty state — the same guard the
    // other structured-track fields use.
    expect(snapshot().nh_curriculum_progress).toBeUndefined();
  });
});

describe('the remote apply merges additively', () => {
  it('adds lessons this device has never seen', () => {
    markLessonComplete('alphabet', '2026-08-01');
    applyRemoteProgress({ nh_curriculum_progress: { gender: '2026-08-05' } }, noopSetters);
    expect(readCurriculumProgress()).toEqual({
      alphabet: '2026-08-01',
      gender: '2026-08-05',
    });
  });

  it('NEVER un-completes a lesson the remote does not know about', () => {
    // The guarantee that makes this safe to sync at all. A device that has been
    // offline since before the curriculum shipped pushes a map without 'alphabet';
    // the local completion must survive.
    markLessonComplete('alphabet', '2026-08-01');
    applyRemoteProgress({ nh_curriculum_progress: { gender: '2026-08-05' } }, noopSetters);
    expect(readCurriculumProgress().alphabet).toBe('2026-08-01');
  });

  it('keeps the EARLIER date when both devices know a lesson', () => {
    markLessonComplete('alphabet', '2026-08-20');
    applyRemoteProgress({ nh_curriculum_progress: { alphabet: '2026-08-01' } }, noopSetters);
    expect(readCurriculumProgress().alphabet).toBe('2026-08-01');
  });

  it('leaves local progress untouched when the remote has none', () => {
    markLessonComplete('alphabet', '2026-08-01');
    applyRemoteProgress({}, noopSetters);
    expect(readCurriculumProgress()).toEqual({ alphabet: '2026-08-01' });
  });

  it('ignores a malformed remote value rather than wiping local', () => {
    markLessonComplete('alphabet', '2026-08-01');
    applyRemoteProgress({ nh_curriculum_progress: 'not an object' }, noopSetters);
    expect(readCurriculumProgress()).toEqual({ alphabet: '2026-08-01' });
  });
});

describe('a full round trip preserves everything both sides knew', () => {
  it('device A and device B converge on the union', () => {
    // A learned the alphabet; B learned gender. Neither may lose the other's work.
    markLessonComplete('alphabet', '2026-08-01');
    const fromA = snapshot().nh_curriculum_progress;

    localStorage.clear();
    markLessonComplete('gender', '2026-08-02');
    applyRemoteProgress({ nh_curriculum_progress: fromA }, noopSetters);

    expect(readCurriculumProgress()).toEqual({
      alphabet: '2026-08-01',
      gender: '2026-08-02',
    });
  });
});
