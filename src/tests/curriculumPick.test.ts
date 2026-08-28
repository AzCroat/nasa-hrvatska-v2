// src/tests/curriculumPick.test.ts
//
// CURRICULUM-FIRST LESSON SELECTION + PROGRESS STORAGE (Wave 1, 2026-08-28).
//
// pickSessionLesson used to be pure rotation — least-recently-served among
// everything unlocked. That is how the genitive deep-dive could reach a learner
// who had never met the concept of a case. The spine now decides.
//
// The assertion that matters most here is NOT that the curriculum wins. It is
// that its ABSENCE degrades to the old rotation rather than to nothing: the
// spine is a cached fetch and can legitimately be missing on a first run, a
// cleared cache or an offline start, and on that path the app must still teach.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
}));

import { pickSessionLesson } from '../lib/sessionLessonPick';
import { getCertifiedLevel } from '../lib/cefrCertification';
import {
  readCurriculumSpine,
  writeCurriculumSpine,
  readCompletedLessons,
  readCurriculumProgress,
  markLessonComplete,
  mergeCurriculumProgress,
  CURRICULUM_PROGRESS_KEY,
} from '../lib/curriculumProgress';
import type { CurriculumEntry } from '../lib/curriculum';

const LESSONS = [
  { id: 'alphabet', level: 'A1' },
  { id: 'greetings', level: 'A1' },
  { id: 'gender', level: 'A1' },
];

const SPINE: CurriculumEntry[] = [
  { id: 'alphabet', level: 'A1', order: 1, prerequisites: [], objectives: ['a'] },
  { id: 'greetings', level: 'A1', order: 2, prerequisites: ['alphabet'], objectives: ['b'] },
  { id: 'gender', level: 'A1', order: 3, prerequisites: ['greetings'], objectives: ['c'] },
];

beforeEach(() => {
  localStorage.clear();
  vi.mocked(getCertifiedLevel).mockReturnValue('A1' as never);
  localStorage.setItem('nh_daily_session', JSON.stringify({ cefrLevel: 'A1' }));
});

describe('the curriculum decides which lesson is taught', () => {
  it('serves spine order, not rotation order', () => {
    writeCurriculumSpine(SPINE);
    expect(pickSessionLesson(LESSONS)?.id).toBe('alphabet');
  });

  it('advances as lessons are completed', () => {
    writeCurriculumSpine(SPINE);
    markLessonComplete('alphabet', '2026-08-28');
    expect(pickSessionLesson(LESSONS)?.id).toBe('greetings');
    markLessonComplete('greetings', '2026-08-28');
    expect(pickSessionLesson(LESSONS)?.id).toBe('gender');
  });

  it('beats rotation even when the spine pick was served most recently', () => {
    // The decisive difference from the old policy. Rotation would send the
    // most-recently-served lesson to the BACK of the queue; the curriculum keeps
    // it in front until the learner actually completes it.
    writeCurriculumSpine(SPINE);
    localStorage.setItem(
      'nh_session_served_lessons',
      JSON.stringify({ alphabet: '2026-08-28', greetings: '2020-01-01', gender: '2020-01-01' }),
    );
    expect(pickSessionLesson(LESSONS)?.id).toBe('alphabet');
  });
});

describe('THE FALLBACK: no spine must never mean no teaching', () => {
  it('falls back to least-recently-served rotation when the spine is absent', () => {
    localStorage.setItem(
      'nh_session_served_lessons',
      JSON.stringify({ alphabet: '2026-08-28', greetings: '2026-08-27', gender: '2020-01-01' }),
    );
    expect(pickSessionLesson(LESSONS)?.id).toBe('gender');
  });

  it('falls back when the cached spine is corrupt', () => {
    localStorage.setItem('nh_curriculum_spine', '{ not json');
    expect(pickSessionLesson(LESSONS)).not.toBeNull();
  });

  it('falls back when the spine names lessons this client cannot serve', () => {
    // A spine ahead of the client's lesson catalog — mid-deploy, or a stale
    // cache. Returning null here would mean "no lesson today" for a data skew
    // that rotation handles perfectly well.
    writeCurriculumSpine([
      { id: 'not-shipped-yet', level: 'A1', order: 1, prerequisites: [], objectives: ['x'] },
    ]);
    expect(pickSessionLesson(LESSONS)).not.toBeNull();
  });

  it('still returns null when genuinely nothing is unlocked', () => {
    // The one honest null: the caller bails to the empty-pool path rather than
    // navigating to a blank screen.
    writeCurriculumSpine(SPINE);
    expect(pickSessionLesson([{ id: 'x', level: 'C2' }])).toBeNull();
  });
});

describe('the spine cache tolerates bad data', () => {
  it('drops rows that cannot be sequenced rather than trusting them', () => {
    localStorage.setItem(
      'nh_curriculum_spine',
      JSON.stringify([
        { id: 'ok', level: 'A1', order: 1, prerequisites: [], objectives: ['x'] },
        { id: 'no-order', level: 'A1', prerequisites: [] },
        null,
        'nonsense',
      ]),
    );
    const spine = readCurriculumSpine();
    expect(spine.map((e) => e.id)).toEqual(['ok']);
  });

  it('returns an empty spine rather than throwing on garbage', () => {
    localStorage.setItem('nh_curriculum_spine', 'not json at all');
    expect(readCurriculumSpine()).toEqual([]);
  });
});

describe('progress storage', () => {
  it('records a completion once and keeps the FIRST date', () => {
    // "When did I learn this" must not be rewritten by a revisit.
    markLessonComplete('alphabet', '2026-08-01');
    markLessonComplete('alphabet', '2026-08-28');
    expect(readCurriculumProgress()).toEqual({ alphabet: '2026-08-01' });
    expect(readCompletedLessons()).toEqual(new Set(['alphabet']));
  });

  it('survives a corrupt progress blob without losing the session', () => {
    localStorage.setItem(CURRICULUM_PROGRESS_KEY, '{{{');
    expect(readCompletedLessons()).toEqual(new Set());
    expect(readCurriculumProgress()).toEqual({});
  });

  it('ignores an empty lesson id', () => {
    markLessonComplete('', '2026-08-28');
    expect(readCurriculumProgress()).toEqual({});
  });
});

describe('the merge is additive, like every other merge in this app', () => {
  it('unions lesson ids from both sides', () => {
    const out = mergeCurriculumProgress({ a: '2026-08-01' }, { b: '2026-08-02' });
    expect(Object.keys(out).sort()).toEqual(['a', 'b']);
  });

  it('a remote merge can NEVER un-complete a lesson', () => {
    // The guarantee that makes sync safe. Remote is missing 'a' entirely.
    const out = mergeCurriculumProgress({ a: '2026-08-01' }, {});
    expect(out.a).toBe('2026-08-01');
  });

  it('keeps the EARLIER date when both sides know a lesson', () => {
    // A second device cannot postpone when you learned something.
    expect(mergeCurriculumProgress({ a: '2026-08-01' }, { a: '2026-08-20' }).a).toBe('2026-08-01');
    expect(mergeCurriculumProgress({ a: '2026-08-20' }, { a: '2026-08-01' }).a).toBe('2026-08-01');
  });

  it('tolerates a null or malformed remote', () => {
    expect(mergeCurriculumProgress({ a: '1' }, null)).toEqual({ a: '1' });
    expect(mergeCurriculumProgress({ a: '1' }, undefined)).toEqual({ a: '1' });
    expect(mergeCurriculumProgress({ a: '1' }, { b: 42 as unknown as string, '': 'x' })).toEqual({
      a: '1',
    });
  });
});
