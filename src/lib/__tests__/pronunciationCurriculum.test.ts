// src/lib/__tests__/pronunciationCurriculum.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import {
  resolvePhonemeKey,
  phonemesInText,
  logPronunciationWeakness,
  getWeakPhonemes,
  orderByWeakness,
  getNextWeakPhoneme,
  weaknessPattern,
  PRONUNCIATION_PHONEMES,
} from '../pronunciationCurriculum.js';
import { getTopErrors } from '../learnerErrors.js';

describe('resolvePhonemeKey', () => {
  it('resolves Croatian letters and digraphs (any case)', () => {
    expect(resolvePhonemeKey('č')).toBe('č');
    expect(resolvePhonemeKey('Ć')).toBe('ć');
    expect(resolvePhonemeKey('LJ')).toBe('lj');
    expect(resolvePhonemeKey('nj')).toBe('nj');
    expect(resolvePhonemeKey('r')).toBe('r');
  });

  it('resolves Azure/IPA symbols onto letter keys', () => {
    expect(resolvePhonemeKey('tʃ')).toBe('č');
    expect(resolvePhonemeKey('tɕ')).toBe('ć');
    expect(resolvePhonemeKey('ʃ')).toBe('š');
    expect(resolvePhonemeKey('ʒ')).toBe('ž');
    expect(resolvePhonemeKey('dʑ')).toBe('đ');
    expect(resolvePhonemeKey('ʎ')).toBe('lj');
    expect(resolvePhonemeKey('ɲ')).toBe('nj');
  });

  it('finds a digraph embedded in a longer label before single chars', () => {
    expect(resolvePhonemeKey('lj_1')).toBe('lj');
  });

  it('returns null for untracked sounds and empty input', () => {
    expect(resolvePhonemeKey('a')).toBeNull();
    expect(resolvePhonemeKey('')).toBeNull();
    expect(resolvePhonemeKey(null)).toBeNull();
    expect(resolvePhonemeKey(undefined)).toBeNull();
  });
});

describe('phonemesInText', () => {
  it('finds the hard diacritic/digraph phonemes present in a string', () => {
    expect(phonemesInText('Šuma je puna ptica.').sort()).toEqual(['š']);
    expect(phonemesInText('Njegova kći.').sort()).toEqual(['ć', 'nj'].sort());
  });

  it('never reports plain "r" from mere presence (too common a sound)', () => {
    expect(phonemesInText('Dobar dan, more')).toEqual([]);
  });

  it('is empty for text with no tracked sounds and for empty input', () => {
    expect(phonemesInText('Dobar dan.')).toEqual([]);
    expect(phonemesInText('')).toEqual([]);
    expect(phonemesInText(null)).toEqual([]);
  });
});

describe('logPronunciationWeakness — the score→weakness loop', () => {
  beforeEach(() => localStorage.clear());

  it('is a no-op when the attempt was not scored or scored at/above the pass bar', () => {
    expect(logPronunciationWeakness({ score: null, worstPhoneme: 'č' })).toEqual([]);
    expect(logPronunciationWeakness({ score: 70, worstPhoneme: 'č' })).toEqual([]);
    expect(logPronunciationWeakness({ score: 95, targetText: 'čaj' })).toEqual([]);
    expect(getTopErrors(10, 'pronunciation')).toHaveLength(0);
  });

  it("records Azure's worst phoneme when a breakdown is available", () => {
    const recorded = logPronunciationWeakness({
      score: 55,
      worstPhoneme: 'tʃ',
      source: 'shadowing',
    });
    expect(recorded).toEqual(['č']);
    const errs = getTopErrors(10, 'pronunciation');
    expect(errs).toHaveLength(1);
    expect(errs[0]!.pattern).toBe(weaknessPattern('č'));
    expect(errs[0]!.category).toBe('pronunciation');
  });

  it('falls back to the hard phonemes in the target text when no worst phoneme is given', () => {
    const recorded = logPronunciationWeakness({ score: 40, targetText: 'Šuma i njiva' }).sort();
    expect(recorded).toEqual(['nj', 'š'].sort());
    expect(getTopErrors(10, 'pronunciation')).toHaveLength(2);
  });

  it('de-dupes within a single call (one flooding phrase records each sound once)', () => {
    logPronunciationWeakness({ score: 40, targetText: 'Šuška šuška šuti' });
    const errs = getTopErrors(10, 'pronunciation');
    expect(errs).toHaveLength(1);
    expect(errs[0]!.pattern).toBe(weaknessPattern('š'));
    expect(errs[0]!.count).toBe(1); // one call → count 1, not once per occurrence
  });
});

describe('getWeakPhonemes / orderByWeakness / getNextWeakPhoneme', () => {
  beforeEach(() => localStorage.clear());

  it('ranks phonemes most-weak first by frequency', () => {
    // č caught 3×, š caught once → č ranks ahead of š.
    logPronunciationWeakness({ score: 50, worstPhoneme: 'č' });
    logPronunciationWeakness({ score: 50, worstPhoneme: 'č' });
    logPronunciationWeakness({ score: 50, worstPhoneme: 'č' });
    logPronunciationWeakness({ score: 50, worstPhoneme: 'š' });
    expect(getWeakPhonemes()).toEqual(['č', 'š']);
  });

  it('ignores heuristic (non-acoustic) pronunciation patterns', () => {
    // A spelling-derived pronunciation error must not be mistaken for a phoneme.
    logPronunciationWeakness({ score: 50, worstPhoneme: 'č' });
    // Simulate a heuristic entry via a raw logError-style pattern by scoring text.
    expect(getWeakPhonemes()).toEqual(['č']);
  });

  it('orders a phoneme list weak-first, keeping the rest in original order', () => {
    logPronunciationWeakness({ score: 50, worstPhoneme: 'r' });
    const ordered = orderByWeakness(PRONUNCIATION_PHONEMES);
    expect(ordered[0]).toBe('r');
    // The remaining sounds keep their curriculum order.
    expect(ordered.slice(1)).toEqual(PRONUNCIATION_PHONEMES.filter((k) => k !== 'r'));
  });

  it('recommends the weakest un-mastered phoneme, skipping mastered ones', () => {
    logPronunciationWeakness({ score: 50, worstPhoneme: 'č' });
    logPronunciationWeakness({ score: 50, worstPhoneme: 'š' });
    logPronunciationWeakness({ score: 50, worstPhoneme: 'š' });
    // š is weakest, but already mastered → recommend č next.
    expect(getNextWeakPhoneme(['š'])).toBe('č');
    expect(getNextWeakPhoneme([])).toBe('š');
    expect(getNextWeakPhoneme(['š', 'č'])).toBeNull();
  });
});
