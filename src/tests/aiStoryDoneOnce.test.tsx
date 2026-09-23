/**
 * aiStoryDoneOnce — the Done button on AIStoryScreen is a one-shot
 * (sweep 35, 2026-09-23).
 *
 * WHY THIS EXISTS AT ALL. Sweep 35 made this screen record a READING rep, so
 * the Fluency Snapshot stops telling a learner whose reading is AI stories that
 * Reading is their lightest skill. A counter that can be inflated is the same
 * class of lie as one that stands still, and this button could be tapped
 * repeatedly: `goBack` is behind a 400 ms timeout and nothing disabled it.
 *
 * WHAT THE OLD GUARD WAS. `const [, setDone] = useState(false)` — a state
 * setter whose value is DISCARDED at the destructure. It forced a re-render,
 * nothing read it, and no branch anywhere consulted it. It read like a
 * completion latch and was not one; the award was already double-tappable, and
 * survived only because the XP cooldown absorbs the second one. The rep is
 * recorded ABOVE that cooldown by design (input volume is decoupled from the
 * XP economy), so it had no such protection.
 */
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { getReadingReps } from '../lib/readingMetric';

vi.mock('../lib/apiFetch.js', () => ({
  apiFetch: vi.fn(async () => ({
    ok: true,
    status: 200,
    json: async () => ({
      reply: JSON.stringify({
        story: 'Ana je otišla na tržnicu i kupila kruh.',
        translation: 'Ana went to the market and bought bread.',
        words_used: ['kruh'],
      }),
    }),
  })),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn(), speakSlow: vi.fn() }));
vi.mock('../lib/activeVocabulary', () => ({
  getActiveVocabulary: () => ({
    targets: ['kruh'],
    weak: [],
    due: [],
    learning: [],
    fresh: ['kruh'],
  }),
}));
vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => true }));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 400, lc: 5, gc: 5 }, setStats: vi.fn() }),
}));
vi.mock('../components/family/CharacterPortrait', () => ({
  default: () => React.createElement('div'),
}));

import AIStoryScreen from '../components/practice/AIStoryScreen';

describe('AIStoryScreen — Done records exactly one reading rep', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('a single tap records one rep', async () => {
    const award = vi.fn();
    render(<AIStoryScreen goBack={vi.fn()} award={award} />);
    const done = await screen.findByText(/Done —/, {}, { timeout: 4000 });
    fireEvent.click(done);
    await waitFor(() => expect(getReadingReps().total).toBe(1));
    expect(award).toHaveBeenCalledTimes(1);
  });

  it('three rapid taps still record ONE rep and award ONCE', async () => {
    // The exact shape the discarded `setDone` did not prevent: goBack is behind
    // a 400 ms timeout, so the button stays live and clickable after the first
    // tap. Before the ref, this recorded three reads of one story.
    const award = vi.fn();
    render(<AIStoryScreen goBack={vi.fn()} award={award} />);
    const done = await screen.findByText(/Done —/, {}, { timeout: 4000 });
    fireEvent.click(done);
    fireEvent.click(done);
    fireEvent.click(done);
    await waitFor(() => expect(getReadingReps().total).toBe(1));
    expect(award).toHaveBeenCalledTimes(1);
    expect(getReadingReps().thisWeek).toBe(1);
  });
});
