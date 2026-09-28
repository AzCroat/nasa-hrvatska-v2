// src/tests/reviewScreenHooksOrder.test.tsx
//
// "Rendered more hooks than during the previous render" — Sentry 21022c33,
// 2026-09-28, on /review, the app's highest-volume daily action.
//
// Sweep 102 (2026-09-24) gave ReviewScreen early returns for the loading /
// unavailable / empty states; sweep 139 (2026-09-25) then added the credit
// `useEffect` BELOW them. A learner who opened /review before the vocabulary
// payload landed rendered the loading branch (fewer hooks), and the render that
// followed the payload registered one more hook than the last — React throws, the
// screen boundary catches it, the learner sees an error card instead of their
// cards. Live for three days. This drives exactly that transition against the
// REAL screen: content loading → content present.
//
// The rules-of-hooks lint did not catch it (see the AUDIT-STATE entry for why),
// which is why the transition is pinned behaviourally here.

import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../lib/srs', async (orig) => ({
  ...(await orig<object>()),
  getDueReviews: () => [],
  getPrioritizedReviewQueue: (pool: string[][]) => pool.slice(0, 4),
}));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({
    stats: { vs: [], xp: 400, lc: 4, gc: 2 },
    setStats: vi.fn(),
    writeDelta: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
  }),
  StatsProvider: ({ children }: { children: React.ReactNode }) => children,
}));
vi.mock('../hooks/useHaptic', () => ({
  useHaptic: () => ({
    correct: vi.fn(),
    wrong: vi.fn(),
    tap: vi.fn(),
    success: vi.fn(),
    award: vi.fn(),
  }),
}));
vi.mock('../data', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;
  return { ...actual, speak: vi.fn(), speakSlow: vi.fn() };
});

const state = vi.fn<[], { content: unknown; loading: boolean; error: unknown }>(() => ({
  content: null,
  loading: true,
  error: null,
}));
vi.mock('../hooks/useContent', () => ({
  useContent: () => state(),
  peekContent: () => state().content,
}));

import ReviewScreen from '../components/practice/ReviewScreen';

const STATS = { xp: 400, lc: 4, gc: 2, badges: [], vs: [] } as never;
const CONTENT = {
  V: {
    basics: [
      ['bog', 'hello', 'Bog, kako si?'],
      ['hvala', 'thank you', 'Hvala lijepa.'],
      ['molim', 'please', 'Molim te.'],
      ['da', 'yes', 'Da, može.'],
      ['ne', 'no', 'Ne, hvala.'],
    ],
  },
  V_LEVELS: { basics: 'A1' },
};

describe('ReviewScreen renders the same hooks whether or not the cards have arrived', () => {
  it('survives the loading → loaded transition without a hooks-order error', () => {
    state.mockReturnValue({ content: null, loading: true, error: null });
    const { rerender } = render(
      <ReviewScreen stats={STATS} goBack={() => {}} award={vi.fn()} allCats={['basics']} />,
    );
    expect(screen.getByTestId('review-unavailable').getAttribute('data-pool-block')).toBe(
      'loading',
    );
    state.mockReturnValue({ content: CONTENT, loading: false, error: null });
    // This is the render that threw in production.
    expect(() =>
      rerender(
        <ReviewScreen stats={STATS} goBack={() => {}} award={vi.fn()} allCats={['basics']} />,
      ),
    ).not.toThrow();
    expect(screen.queryByTestId('review-unavailable')).toBeNull();
    // The full screen is up: a question with its options.
    expect(screen.getAllByRole('button').length).toBeGreaterThan(1);
  });
});
