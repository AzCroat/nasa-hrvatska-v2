/**
 * Free Writing pays when the graded result ARRIVES, not when a button on it is pressed.
 *
 * The whole payment — XP, the write quest, the `writing` path key and, through award(),
 * the daily-session slot — used to sit in the results view's "✨ New Prompt" onClick. A
 * learner who wrote, got graded, read the feedback and tapped Back was paid nothing and
 * left the session at N-1/N. Found walking a learner's day in a browser (2026-09-27).
 * The old test file described that as the contract ("completion occurs on New Prompt
 * button click") and tested copies of the onClick rather than the screen.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

const award = vi.fn();
const setStats = vi.fn();
const writeDelta = vi.fn();
const markQuest = vi.hoisted(() => vi.fn());

vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { vs: [] }, setStats, writeDelta, dispatch: vi.fn(), level: 1 }),
}));
vi.mock('../lib/quests.js', () => ({ markQuest }));
vi.mock('../hooks/useOnlineStatus', () => ({
  useOnlineStatus: () => ({ isOnline: true, backOnline: false }),
}));
vi.mock('../lib/random.js', () => ({ rnd: () => 0 }));
vi.mock('../lib/aiPost', () => ({
  _aiPost: vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          corrected: 'Ispravljeno.',
          score: 80,
          changes: [],
          encouragement: 'Bravo!',
        }),
    }),
  ),
}));

import WritingScreen, { minWordsFor } from '../components/practice/WritingScreen';

const words = (n: number) => Array(n).fill('riječ').join(' ');

async function writeAndGrade(n: number) {
  render(<WritingScreen goBack={vi.fn()} award={award} />);
  fireEvent.change(screen.getByPlaceholderText(/Piši na hrvatskom/), {
    target: { value: words(n) },
  });
  fireEvent.click(screen.getByText(/Check with AI/));
  await waitFor(() => expect(screen.getByTestId('new-prompt-btn')).toBeTruthy());
}

beforeEach(() => vi.clearAllMocks());

describe('Free Writing credit', () => {
  it('a graded piece at its floor is paid BEFORE any button on the result is pressed', async () => {
    await writeAndGrade(minWordsFor('A1')); // this learner carries no stats → A1 prompts
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(13, false, 'writing');
    expect(markQuest).toHaveBeenCalledWith('write');
    expect(writeDelta).toHaveBeenCalledWith({ vs: ['writing'] });
  });

  it('a graded piece BELOW its floor is not paid, and the result says why', async () => {
    await writeAndGrade(minWordsFor('A1') - 1);
    expect(award).not.toHaveBeenCalled();
    expect(markQuest).not.toHaveBeenCalled();
    expect(screen.getByTestId('word-count-warning').textContent).toMatch(/19 words.*at least 20/);
  });

  it('pressing New Prompt pays nothing more — it only moves to a new prompt', async () => {
    await writeAndGrade(minWordsFor('A1'));
    fireEvent.click(screen.getByTestId('new-prompt-btn'));
    expect(award).toHaveBeenCalledTimes(1);
    expect((screen.getByPlaceholderText(/Piši na hrvatskom/) as HTMLTextAreaElement).value).toBe(
      '',
    );
  });
});
