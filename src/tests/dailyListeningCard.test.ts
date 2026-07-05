// src/tests/dailyListeningCard.test.ts
// Regression guard: the Daily Listening card must score against the /api/listening
// response shape { q, options, correct(index) } — it previously read a non-existent
// `answer` field, so every question scored wrong. correctOption() is the resolver.
import { describe, it, expect, vi } from 'vitest';

// The component module pulls in browser/audio helpers at import; stub the leaf
// modules so importing the pure helper never touches the DOM/audio.
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));

import { correctOption } from '../components/home/DailyListeningCard';

describe('DailyListeningCard.correctOption — API contract { options, correct }', () => {
  const options = ['Ordinacija', 'Škola', 'Trgovina', 'Kavana'];

  it('resolves the correct option from the numeric `correct` index', () => {
    expect(correctOption({ q: 'Gdje su?', options, correct: 0 })).toBe('Ordinacija');
    expect(correctOption({ q: 'Gdje su?', options, correct: 3 })).toBe('Kavana');
  });

  it('falls back to a legacy literal `answer` field when no index is present', () => {
    expect(correctOption({ options, answer: 'Škola' })).toBe('Škola');
  });

  it('is undefined for an out-of-range index or missing data (never a false match)', () => {
    expect(correctOption({ options, correct: 99 })).toBeUndefined();
    expect(correctOption({ options })).toBeUndefined();
  });

  it('does NOT read a `question`/`answer`-only shape as correct (the old bug)', () => {
    // The old code compared the picked option to `q.answer` (undefined here) →
    // nothing ever matched. correctOption resolves via the real index instead.
    const q = { question: 'stale prompt field', options, correct: 1 };
    expect(correctOption(q)).toBe('Škola');
    expect(correctOption(q)).not.toBeUndefined();
  });
});
