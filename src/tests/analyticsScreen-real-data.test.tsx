/**
 * analyticsScreen-real-data.test.tsx — every number on the Analytics screen must
 * come from a field something actually writes.
 *
 * THE BUG
 * -------
 * Three of the screen's values read fields that no code in the app produces:
 *
 *   s.vc            — never written anywhere. The "Vocabulary" bar sat empty
 *                     while its five neighbours filled.
 *   s.longestStreak — never written anywhere. Rendered as a 🏆 "BEST STREAK"
 *                     tile via `s.longestStreak || streak`, so "best" was just a
 *                     second copy of "current".
 *   s.streak        — written by useAward, but sanitizeStats does not allowlist
 *                     it and mergeStatsFromRemote builds on `...ds`, where DS
 *                     has no streak. Every Firestore snapshot reset it to
 *                     undefined, and sync runs every two minutes, so the steady
 *                     state was 0 — the screen told a learner on a long streak
 *                     they had none.
 *
 *   s.readingDone   — never written anywhere either, and MISSED BY THIS FILE
 *                     when it was written (2026-09-23). The "Reading" bar sits
 *                     TWO LINES below the Vocabulary one in the same array and
 *                     had the identical defect; the fix above named the class in
 *                     a comment and did not look at the next entry. A guard
 *                     scoped to the field in front of you says nothing about its
 *                     neighbour. Reading is now counted from the `reading_*`
 *                     markers ReadingScreen writes into `stats.vs`, through the
 *                     one helper the read3 badge also uses.
 *
 * Why the type system was no help: the prop was declared
 * `Partial<Stats & { streak?: number; longestStreak?: number; vc?: number }>`.
 * The screen described the shape it wanted rather than the shape that exists, so
 * tsc had nothing to object to. That widening is now gone, which is what stops
 * this recurring.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

const getStreak = vi.fn();
const getSR = vi.fn();

vi.mock('../../src/data', () => ({}));
vi.mock('../data', () => ({
  H: (title: string) => React.createElement('h1', null, title),
  getMistakes: () => [],
  getDueReviews: () => [],
  getSR: () => getSR(),
  getStreak: () => getStreak(),
  BADGES: [],
}));

import AnalyticsScreen from '../components/profile/AnalyticsScreen';

beforeEach(() => {
  getStreak.mockReset();
  getSR.mockReset();
  getStreak.mockReturnValue({ count: 0, last: '' });
  getSR.mockReturnValue({});
});

function renderScreen(stats: Record<string, unknown>) {
  return render(
    React.createElement(AnalyticsScreen, {
      goBack: () => {},
      stats: stats as never,
      name: 'Ana',
    }),
  );
}

/**
 * The Vocabulary MiniBar renders its label and value as adjacent siblings.
 * Match the label exactly (icon included) — a loose /Vocabulary/ also hits other
 * copy on the screen.
 */
function barValue(labelWithIcon: string): string | undefined {
  const label = screen.getByText((_t, el) => el?.textContent?.trim() === labelWithIcon);
  return label.nextElementSibling?.textContent?.trim();
}
const vocabBarValue = () => barValue('\u{1F4D6} Vocabulary');
const readingBarValue = () => barValue('\u{1F4F0} Reading');

describe('AnalyticsScreen shows real data', () => {
  it('reads the streak from getStreak(), not the stats mirror that sync wipes', () => {
    // This is the post-sync state: stats.streak is gone, localStorage still has
    // the real value. Before the fix the screen rendered 0 here.
    getStreak.mockReturnValue({ count: 30, last: '2026-08-02' });
    renderScreen({ xp: 900, lc: 40 });
    expect(screen.getByText('30 🔥')).toBeTruthy();
  });

  it('still shows the streak when the stats object disagrees', () => {
    // stats.streak is deliberately wrong/stale — the canonical source wins.
    getStreak.mockReturnValue({ count: 12, last: '2026-08-02' });
    renderScreen({ xp: 900, streak: 999 });
    expect(screen.getByText('12 🔥')).toBeTruthy();
    expect(screen.queryByText('999 🔥')).toBeNull();
  });

  it('counts Vocabulary from the SRS deck rather than a field nothing writes', () => {
    getSR.mockReturnValue({ kuca: {}, more: {}, pas: {} });
    renderScreen({ xp: 100 });
    expect(vocabBarValue()).toBe('3');
  });

  it('shows zero Vocabulary only when the SRS deck is genuinely empty', () => {
    // Non-vacuity: the assertion above must be able to distinguish 3 from 0.
    getSR.mockReturnValue({});
    renderScreen({ xp: 100 });
    expect(vocabBarValue()).toBe('0');
  });

  it('counts Reading from the vs markers rather than a field nothing writes', () => {
    // ReadingScreen pushes `reading_<title>` into stats.vs on completion. Before
    // the fix this bar read s.readingDone and rendered 0 for every learner in
    // the app, forever, whatever they had read.
    renderScreen({ xp: 100, vs: ['reading_Prvi_tekst', 'reading_Drugi_tekst'] });
    expect(readingBarValue()).toBe('2');
  });

  it('shows zero Reading only when nothing has been read', () => {
    // Non-vacuity: the assertion above must be able to distinguish 2 from 0.
    renderScreen({ xp: 100, vs: ['grammarmap', 'alphabet'] });
    expect(readingBarValue()).toBe('0');
  });

  it('counts distinct passages, not repeats', () => {
    renderScreen({ xp: 100, vs: ['reading_Isti', 'reading_Isti', 'reading_Drugi'] });
    expect(readingBarValue()).toBe('2');
  });

  it('keeps a legacy synced readingDone as a floor, never as the measurement', () => {
    // A device that synced a value in before the field went dead must not lose
    // it; but the markers win when they are ahead.
    renderScreen({ xp: 100, readingDone: 5, vs: [] });
    expect(readingBarValue()).toBe('5');
  });

  it('no longer renders a BEST STREAK tile — nothing tracks a longest streak', () => {
    getStreak.mockReturnValue({ count: 7, last: '2026-08-02' });
    renderScreen({ xp: 900, longestStreak: 40 });
    expect(screen.queryByText(/BEST STREAK/i)).toBeNull();
    // And the value it used to display must not appear anywhere.
    expect(screen.queryByText('40 🏆')).toBeNull();
  });
});
