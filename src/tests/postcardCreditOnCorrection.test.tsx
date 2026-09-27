/**
 * The Postcard pays when the correction arrives, not from Download or Share.
 *
 * `postcard` is a daily-session culture entry. Its only credit used to sit behind
 * Download and Share on step 3, so writing the postcard, reading the correction and
 * leaving by Back or a tab paid nothing and stranded the session slot — and a canvas
 * that never became ready kept both buttons disabled for ever. A failed correction
 * stranded the slot too: no authored substitute exists, so the credit-or-strand rule
 * (`creditIfNoAuthoredFallback`) applies. Found by a census of credit-paying handlers
 * on finished views (2026-09-27).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

const apiFetch = vi.hoisted(() => vi.fn());
const signal = vi.hoisted(() => vi.fn());
vi.mock('../context/StatsContext', () => ({ useStats: () => ({ level: 'A2' }) }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch }));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: signal }));

import PostcardScreen from '../components/croatia/PostcardScreen';

async function writeAndCheck() {
  const award = vi.fn();
  render(<PostcardScreen goBack={vi.fn()} award={award} />);
  fireEvent.change(screen.getByPlaceholderText(/Dragi prijatelju/), {
    target: { value: 'Dragi Ivane, ovdje je lijepo i toplo.' },
  });
  fireEvent.click(screen.getByText('🤖 Check & Create Postcard'));
  return award;
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Postcard credit', () => {
  it('a successful correction pays once, before any step-3 button is pressed', async () => {
    apiFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        corrected_text: 'Dragi Ivane, ovdje je lijepo i toplo.',
        changes: [],
        score: 90,
      }),
    });
    const award = await writeAndCheck();
    await waitFor(() => expect(award).toHaveBeenCalledTimes(1));
    expect(award).toHaveBeenCalledWith(15, false, 'culture');
  });

  it('a failed correction pays nothing but frees the session slot', async () => {
    apiFetch.mockResolvedValue({
      ok: false,
      status: 502,
      json: async () => ({}),
      headers: new Headers(),
    });
    const award = await writeAndCheck();
    await waitFor(() => expect(signal).toHaveBeenCalledWith('postcard'));
    expect(award).not.toHaveBeenCalled();
  });
});
