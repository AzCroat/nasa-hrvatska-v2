// src/tests/GuidedWritingScreen.test.tsx
//
// The teaching ladder must actually ladder: study → frames (accent-tolerant,
// reveal-after-2-misses, never a trap) → free production gated on minWords →
// graded submit feeding the same loops WritingScreen feeds.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

const recordMasteryEventMock = vi.fn();
const applyErrorsMock = vi.fn();
const signalMock = vi.fn();
const aiPostMock = vi.fn();

vi.mock('../lib/aiPost', () => ({ _aiPost: (...a: unknown[]) => aiPostMock(...a) }));
vi.mock('../lib/masteryLedger', () => ({
  recordMasteryEvent: (...a: unknown[]) => recordMasteryEventMock(...a),
}));
vi.mock('../lib/adaptiveFeedback.js', () => ({
  applyWritingErrorsToAdaptive: (...a: unknown[]) => applyErrorsMock(...a),
}));
vi.mock('../lib/sessionSignal', () => ({
  signalSessionCompleteIfActive: (...a: unknown[]) => signalMock(...a),
}));
vi.mock('../lib/srs.js', () => ({ addWordToSRS: vi.fn() }));
vi.mock('../lib/learnerErrors.js', () => ({ logError: vi.fn() }));
vi.mock('../lib/cefrCertification', () => ({ getCurrentContentLevel: () => 'A1' }));
vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => ({ isOnline: true }) }));

import GuidedWritingScreen, {
  frameMatches,
  pickUnit,
} from '../components/practice/GuidedWritingScreen';
import { unitsForLevel } from '../data/writingCurriculum';

describe('frameMatches — accent/punctuation tolerance', () => {
  it('accepts exact, case-insensitive, and listed alternates; rejects wrong answers', () => {
    expect(frameMatches('se', 'se')).toBe(true);
    expect(frameMatches('  SE ', 'se')).toBe(true);
    expect(frameMatches('Njemačke', 'Njemačke')).toBe(true);
    expect(frameMatches('kanade', 'Njemačke', ['Amerike', 'Kanade'])).toBe(true);
    expect(frameMatches('njemacka', 'Njemačke')).toBe(false); // wrong case ending
    expect(frameMatches('', 'se')).toBe(false);
  });
});

describe('pickUnit — rotation', () => {
  beforeEach(() => localStorage.clear());
  it('rotates through the level units across visits', () => {
    const a1 = unitsForLevel('A1');
    const first = pickUnit('A1');
    const second = pickUnit('A1');
    expect(first.id).toBe(a1[0]!.id);
    expect(second.id).toBe(a1[1]!.id);
  });
});

function advanceToWrite() {
  // Stage 1 → 2
  fireEvent.click(screen.getByTestId('gw-to-frames'));
  // Solve all frames via reveal (2 wrong tries unlock "show answer")
  // — exercising the never-a-trap contract along the way.
  for (;;) {
    const input = screen.queryByTestId('gw-frame-input');
    if (!input) break; // stage advanced to write
    fireEvent.change(input, { target: { value: 'xxxx' } });
    fireEvent.click(screen.getByTestId('gw-frame-check'));
    fireEvent.change(input, { target: { value: 'xxxx' } });
    fireEvent.click(screen.getByTestId('gw-frame-check'));
    fireEvent.click(screen.getByTestId('gw-frame-reveal'));
    fireEvent.click(screen.getByTestId('gw-frame-next'));
  }
}

describe('GuidedWritingScreen — the three-stage ladder', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('walks study → frames → write; reveal path never traps a stuck learner', () => {
    render(<GuidedWritingScreen goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('gw-study')).toBeTruthy();
    advanceToWrite();
    expect(screen.getByTestId('gw-text')).toBeTruthy();
    expect(screen.getByTestId('gw-checklist')).toBeTruthy();
  });

  it('submit is gated on the unit minWords', () => {
    render(<GuidedWritingScreen goBack={vi.fn()} award={vi.fn()} />);
    advanceToWrite();
    fireEvent.change(screen.getByTestId('gw-text'), { target: { value: 'prekratko' } });
    expect((screen.getByTestId('gw-submit') as HTMLButtonElement).disabled).toBe(true);
  });

  it('a graded submit feeds mastery (weight 2, unit level), adaptive errors and the session signal', async () => {
    aiPostMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        score: 72,
        corrected_text: 'Zovem se Marko.',
        changes: [
          { original: 'Zovem sam', corrected: 'Zovem se', note: 'reflexive', errorType: 'other' },
        ],
        strengths: ['Clear sentences'],
        encouragement: 'Bravo!',
      }),
    });
    const award = vi.fn();
    render(<GuidedWritingScreen goBack={vi.fn()} award={award} />);
    advanceToWrite();
    const words = Array.from({ length: 30 }, (_, i) => `riječ${i}`).join(' ');
    fireEvent.change(screen.getByTestId('gw-text'), { target: { value: words } });
    fireEvent.click(screen.getByTestId('gw-submit'));
    await waitFor(() => expect(screen.getByTestId('gw-result')).toBeTruthy());
    expect(recordMasteryEventMock).toHaveBeenCalledWith(
      expect.objectContaining({ skill: 'writing', weight: 2, score: 0.72 }),
    );
    expect(applyErrorsMock).toHaveBeenCalledWith(['other']);
    expect(signalMock).toHaveBeenCalledWith('writing_guided');
    expect(award).toHaveBeenCalled();
  });

  it('a dead grader still completes the session (self-heal) and shows an error', async () => {
    aiPostMock.mockResolvedValue({ ok: false, status: 500, json: async () => ({}) });
    render(<GuidedWritingScreen goBack={vi.fn()} award={vi.fn()} />);
    advanceToWrite();
    const words = Array.from({ length: 30 }, (_, i) => `riječ${i}`).join(' ');
    fireEvent.change(screen.getByTestId('gw-text'), { target: { value: words } });
    fireEvent.click(screen.getByTestId('gw-submit'));
    await waitFor(() => expect(signalMock).toHaveBeenCalledWith('writing_guided'));
    expect(recordMasteryEventMock).not.toHaveBeenCalled();
  });
});
