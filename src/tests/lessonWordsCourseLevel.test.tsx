// src/tests/lessonWordsCourseLevel.test.tsx
//
// RECOMMENDATION 3 (owner go-ahead, 2026-09-29), both halves:
//   1. a PASSED lesson's own words are enrolled in spaced review and served by the deck;
//   2. the Practice tab, the deck and the generators follow the COURSE level
//      (getGenerationCefr), with the old answer kept when there is no curriculum data.

import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'node:fs';
import {
  enrolLessonVocab,
  readLessonWords,
  mergeLessonWords,
  sanitizeLessonWords,
  lessonWordsOrUndef,
  LESSON_WORDS_KEY,
} from '../lib/lessonWords';
import { getSR, getServableReviewCount } from '../lib/srs';
import { vocabPool, vocabPoolWords, acquisitionPool } from '../lib/vocabPool';
import { applyRemoteProgress } from '../lib/applyRemoteProgress';
import { getGenerationCefr } from '../lib/cefrCertification';
import { courseContentLevel } from '../lib/sessionLevel';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const VOCAB = [
  ['kruh', 'bread', 'Kupujem kruh u pekari.'],
  ['mlijeko', 'milk', 'Pijem mlijeko ujutro.'],
];
const SRC = {
  V: { basics: [['bog', 'hi', 'Bog, kako si?']] },
  V_LEVELS: { basics: 'A1' },
};

beforeEach(() => localStorage.clear());

describe('1. a passed lesson’s words go into review', () => {
  it('enrols each row once, as a new SRS card, keeping the first date', () => {
    expect(enrolLessonVocab('food-drink', VOCAB, '2026-09-29')).toBe(2);
    expect(enrolLessonVocab('food-drink', VOCAB, '2026-10-01')).toBe(0); // idempotent
    const store = readLessonWords();
    expect(store['kruh']).toMatchObject({
      hr: 'kruh',
      en: 'bread',
      lessonId: 'food-drink',
      at: '2026-09-29',
    });
    expect(Object.keys(getSR())).toEqual(expect.arrayContaining(['kruh', 'mlijeko']));
  });

  it('ignores malformed rows and a missing list', () => {
    expect(enrolLessonVocab('x', [['', 'y'], 'nope', [3, 4]])).toBe(0);
    expect(enrolLessonVocab('x', undefined)).toBe(0);
    expect(localStorage.getItem(LESSON_WORDS_KEY)).toBeNull();
  });

  it('the deck serves them, so Home’s count and Review agree', () => {
    enrolLessonVocab('food-drink', VOCAB);
    const pool = vocabPool(SRC, 'A1', { tracked: new Set() });
    expect(pool.map((w) => w[0])).toEqual(expect.arrayContaining(['bog', 'kruh', 'mlijeko']));
    expect(vocabPoolWords(SRC, 'A1', { tracked: new Set() }).has('kruh')).toBe(true);
    // They lead the acquisition pool — what is being taught now.
    expect(acquisitionPool(SRC, 'A1', { tracked: new Set() })[0]![0]).toBe('kruh');
  });

  it('an enrolled word is SERVABLE once due: the count Home shows includes it', () => {
    enrolLessonVocab('food-drink', VOCAB);
    const sr = getSR();
    for (const w of Object.values(sr)) (w as { due: number }).due = Date.now() - 1000;
    localStorage.setItem('nh_sr', JSON.stringify(sr));
    expect(getServableReviewCount(vocabPoolWords(SRC, 'A1'))).toBeGreaterThanOrEqual(2);
  });

  it('syncs: both sync points are wired, a remote blob merges in, the EARLIER date wins', () => {
    const snap = fs.readFileSync('src/lib/progressSnapshot.ts', 'utf8');
    expect(snap).toMatch(/nh_lesson_words:\s*lessonWordsOrUndef\(\)/);
    enrolLessonVocab('food-drink', [VOCAB[0]!], '2026-09-29');
    const setters = {
      setFavs: vi.fn(),
      setJWords: vi.fn(),
      sDchlA: vi.fn(),
      sDchlSl: vi.fn(),
      setOnboarded: vi.fn(),
      setName: vi.fn(),
    };
    applyRemoteProgress(
      {
        nh_lesson_words: {
          kruh: { hr: 'kruh', en: 'bread', example: 'e', lessonId: 'food-drink', at: '2026-09-01' },
          voda: { hr: 'voda', en: 'water', example: 'e', lessonId: 'food-drink', at: '2026-09-02' },
        },
      },
      setters as never,
    );
    const s = readLessonWords();
    expect(s['kruh']!.at).toBe('2026-09-01');
    expect(s['voda']).toBeTruthy();
  });

  it('merge and sanitise are total', () => {
    expect(mergeLessonWords(null, undefined)).toEqual({});
    expect(
      sanitizeLessonWords({ Kruh: { hr: 'kruh', en: 'b', example: '', lessonId: 'l', at: 'd' } }),
    ).toEqual({});
    expect(lessonWordsOrUndef()).toBeUndefined();
  });
});

describe('2. the Practice tab and the deck follow the course level', () => {
  const spine = [...CURRICULUM].sort((a, b) => a.order - b.order);
  const seedCourse = (completed: string[]) => {
    localStorage.setItem('nh_curriculum_spine', JSON.stringify(spine));
    localStorage.setItem(
      'nh_curriculum_progress',
      JSON.stringify({ done: Object.fromEntries(completed.map((id) => [id, '2026-09-01'])) }),
    );
  };

  it('with no curriculum data the old answer stands (placement / earned)', () => {
    localStorage.setItem('nh_level', 'B1');
    expect(courseContentLevel()).toBeNull();
    expect(getGenerationCefr({ xp: 0, lc: 0, gc: 0 })).toBe('B1');
  });

  it('a learner who has finished the whole course is served C2', () => {
    seedCourse([]);
    const units: Record<string, unknown> = {};
    for (const lv of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
      for (let i = 1; i <= 6; i++)
        units[`${lv}-${i}`] = {
          passedAt: '2026-09-01',
          production: {
            wroteAt: '2026-09-01',
            writeScore: 80,
            spokeAt: '2026-09-01',
            speakScore: 0.8,
          },
          recheck: { stage: 2, dueAt: '2026-12-30', heldAt: '2026-09-01' },
        };
    localStorage.setItem('nh_course_units', JSON.stringify({ units }));
    expect(courseContentLevel()).toBe('C2');
  });

  it('a Unit-1 learner with a B1 placement and C1 XP is served A1', () => {
    seedCourse([]);
    localStorage.setItem('nh_level', 'B1');
    expect(courseContentLevel()).toBe('A1');
    expect(getGenerationCefr({ xp: 50_000, lc: 500, gc: 500 })).toBe('A1');
  });
});
