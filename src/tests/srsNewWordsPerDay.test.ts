// Every learner meets NEW_WORDS_PER_DAY new words a day (owner, 2026-11-19: "if you don't
// know the words how can you become fluent?"). Before this, a new deck word entered only when
// fewer than ten reviews were due, and at most five — so a learner with a full queue met none.
import { describe, it, expect, beforeEach } from 'vitest';
import {
  NEW_WORDS_PER_DAY,
  todaysNewWords,
  getPrioritizedReviewQueue,
  getServableReviewCount,
  addWordToSRS,
  getSRScore,
} from '../lib/srs';

const pool = Array.from({ length: 40 }, (_, i) => [`riječ${i}`, `word ${i}`, `Primjer ${i}.`]);
const names = pool.map((w) => w[0] as string);

beforeEach(() => {
  localStorage.clear();
});

describe('the daily new words', () => {
  it('is ten words, taken in pool order from words with no card yet', () => {
    expect(NEW_WORDS_PER_DAY).toBe(10);
    expect(todaysNewWords(names)).toEqual(names.slice(0, 10));
  });

  it('is the same set on every call during a day', () => {
    const first = todaysNewWords(names);
    // A different order on the second call (a different screen) must not change today's set.
    expect(todaysNewWords([...names].reverse())).toEqual(first);
  });

  it('never grows past ten in a day, even after the learner answers some', () => {
    const first = todaysNewWords(names);
    getSRScore(first[0]!, true, 1500);
    getSRScore(first[1]!, true, 1500);
    const after = todaysNewWords(names);
    // The two answered words have a card now, so they leave the set; no replacements today.
    expect(after).toEqual(first.slice(2));
    expect(after.length).toBe(8);
  });

  it('skips a word that already has a card (a lesson word, or one already learned)', () => {
    addWordToSRS('riječ0');
    addWordToSRS('riječ1');
    expect(todaysNewWords(names)).toEqual(names.slice(2, 12));
  });

  it('is a fresh set the next day', () => {
    const first = todaysNewWords(names);
    localStorage.setItem('nh_new_words_day', JSON.stringify({ date: '2000-01-01', words: first }));
    for (const w of first) addWordToSRS(w);
    expect(todaysNewWords(names)).toEqual(names.slice(10, 20));
  });

  it('is empty when the pool has nothing unseen', () => {
    for (const n of names) addWordToSRS(n);
    expect(todaysNewWords(names)).toEqual([]);
  });
});

describe('the review queue and the Home count', () => {
  it('serves the new words even when twenty reviews are already due', () => {
    // Twenty cards, all overdue.
    const sr: Record<string, unknown> = {};
    for (let i = 20; i < 40; i++) {
      sr[`riječ${i}`] = { s: 1, d: 5, r: 1, w: 0, l: 0, b: 1, due: Date.now() - 3 * 86400000 };
    }
    localStorage.setItem('nh_sr', JSON.stringify(sr));
    const queue = getPrioritizedReviewQueue(pool).map((w) => w[0]);
    const fresh = names.slice(0, 10);
    for (const w of fresh) expect(queue, `${w} is in the queue`).toContain(w);
    expect(queue.length).toBe(30);
  });

  it('serves ten new words to a learner with nothing due', () => {
    expect(getPrioritizedReviewQueue(pool).map((w) => w[0])).toEqual(names.slice(0, 10));
  });

  it('counts the new words in what the Home screen says is waiting', () => {
    expect(getServableReviewCount(new Set(names))).toBe(10);
    addWordToSRS('riječ0');
    // riječ0 now has a card (due later); today's set is still those ten minus the one learned.
    expect(getServableReviewCount(new Set(names))).toBe(9);
  });
});
