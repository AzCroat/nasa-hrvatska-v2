/**
 * learnPathUnavailable — an empty Learn Path says WHY it is empty.
 *
 * THE FINDING (sweep 99, 2026-09-24). `LEARN_PATH` comes from
 * `/api/content/core`, which lands after first paint, so this screen has no
 * milestones to count until it does. It used to render "0% done",
 * "0 / 0 milestones" and — measured, not guessed — the praise line
 * **"Amazing progress!"** over them.
 *
 * That line is reachable ONLY in this state: with content present and every
 * item finished, `pct === 100` takes the trophy branch instead (asserted
 * below). So the single thing "Amazing progress!" ever meant was "the path has
 * not loaded", and it said the opposite — NEVER-DO 13 on the one screen whose
 * whole job is reporting measured progress. It is also PERMANENT rather than
 * transient when the content fetch fails, which is the same shape sweep 97
 * found behind the Grad tab's silent taps.
 *
 * "Still loading" and "could not be loaded" are kept apart for the reason
 * `poolLaunchBlock` keeps them apart: telling a learner their path failed while
 * the request is still in flight is a claim the app has not measured.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

const contentMock = vi.fn();
vi.mock('../hooks/useContent', () => ({ useContent: () => contentMock() }));

import LearnPath from '../components/profile/LearnPath';

const PATH = [
  {
    level: 1,
    title: 'Stage One',
    items: [{ id: 'a', name: 'Item A', ckRule: { vsIncludes: 'a' } }],
  },
];

const text = () => (document.body.textContent || '').replace(/\s+/g, ' ');

describe('an empty Learn Path never claims progress', () => {
  beforeEach(() => vi.clearAllMocks());

  it('while content is loading it says so, and counts nothing', () => {
    contentMock.mockReturnValue({ content: null, loading: true });
    render(<LearnPath st={{ xp: 0, lc: 0, gc: 0, vs: [] }} goBack={vi.fn()} />);
    expect(screen.getByTestId('learnpath-unavailable')).toHaveTextContent(
      /Still loading your path/i,
    );
    expect(text()).not.toContain('Amazing progress!');
    expect(text()).not.toContain('0 / 0 milestones');
    // The ring must not assert a measured 0%.
    expect(text()).not.toContain('0%');
  });

  it('once the fetch has finished and produced nothing it says THAT instead', () => {
    contentMock.mockReturnValue({ content: null, loading: false });
    render(<LearnPath st={{ xp: 0, lc: 0, gc: 0, vs: [] }} goBack={vi.fn()} />);
    expect(screen.getByTestId('learnpath-unavailable')).toHaveTextContent(/could not be loaded/i);
    expect(text()).not.toContain('Still loading');
  });

  it('with a real path it counts normally and the notice is absent', () => {
    contentMock.mockReturnValue({ content: { LEARN_PATH: PATH }, loading: false });
    render(<LearnPath st={{ xp: 0, lc: 0, gc: 0, vs: [] }} goBack={vi.fn()} />);
    expect(screen.queryByTestId('learnpath-unavailable')).toBeNull();
    expect(text()).toContain('0 / 1 milestones');
    expect(text()).toContain('Currently on: Stage One');
  });

  it('the praise line belongs to the TROPHY case, which needs a real path', () => {
    // This is the assertion that makes the finding a finding: with everything
    // complete the screen says the trophy line, never "Amazing progress!" — so
    // that string could only ever have been the no-content state.
    contentMock.mockReturnValue({ content: { LEARN_PATH: PATH }, loading: false });
    render(<LearnPath st={{ xp: 10, lc: 1, gc: 0, vs: ['a'] }} goBack={vi.fn()} />);
    expect(text()).toContain('All milestones complete');
    expect(text()).not.toContain('Amazing progress!');
  });
});
