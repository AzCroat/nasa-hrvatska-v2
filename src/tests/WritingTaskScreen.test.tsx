// Field report 2026-08-16: the hard minWords gate meant a learner below the
// level could never submit — trapped mid-exam, reading as "the evaluation is
// broken". Contract now: submit opens at a small floor (scored as written),
// and skip is ALWAYS available, scoring 0 so the check completes honestly.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

const aiPost = vi.fn();
vi.mock('../lib/aiPost', () => ({ _aiPost: (...a: unknown[]) => aiPost(...a) }));

import WritingTaskScreen from '../components/exam/WritingTaskScreen';

const task = {
  id: 't1',
  prompt: 'Napišite nešto.',
  promptEn: 'Write something.',
  minWords: 60,
};

beforeEach(() => aiPost.mockReset());

describe('WritingTaskScreen', () => {
  it('skip is always available and scores 0', () => {
    const onScore = vi.fn();
    render(<WritingTaskScreen task={task} level="A2" onScore={onScore} />);
    fireEvent.click(screen.getByTestId('writing-skip'));
    expect(onScore).toHaveBeenCalledWith(0);
    expect(aiPost).not.toHaveBeenCalled();
  });

  it('submit unlocks at the floor, well below the target word count', () => {
    render(<WritingTaskScreen task={task} level="A2" onScore={vi.fn()} />);
    const input = screen.getByTestId('writing-input');
    expect(screen.getByTestId('writing-submit')).toBeDisabled();
    fireEvent.change(input, {
      target: { value: 'ovo je kratak odgovor od točno deset riječi evo ga' },
    });
    expect(screen.getByTestId('writing-submit')).not.toBeDisabled();
  });

  it('a submitted answer is evaluated and the 0-100 score normalises to 0..1', async () => {
    aiPost.mockResolvedValue({ ok: true, json: async () => ({ score: 72 }) });
    const onScore = vi.fn();
    render(<WritingTaskScreen task={task} level="B1" onScore={onScore} />);
    fireEvent.change(screen.getByTestId('writing-input'), {
      target: { value: 'jedan dva tri četiri pet šest sedam osam devet deset' },
    });
    fireEvent.click(screen.getByTestId('writing-submit'));
    await waitFor(() => expect(onScore).toHaveBeenCalled());
    expect(onScore.mock.calls[0]![0]).toBeCloseTo(0.72, 5);
  });

  it('an evaluation failure never scores — it surfaces retry, and skip remains open', async () => {
    aiPost.mockResolvedValue({ ok: false, status: 503, json: async () => ({ error: 'down' }) });
    const onScore = vi.fn();
    render(<WritingTaskScreen task={task} level="B1" onScore={onScore} />);
    fireEvent.change(screen.getByTestId('writing-input'), {
      target: { value: 'jedan dva tri četiri pet šest sedam osam devet deset' },
    });
    fireEvent.click(screen.getByTestId('writing-submit'));
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument());
    expect(onScore).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('writing-skip'));
    expect(onScore).toHaveBeenCalledWith(0);
  });
});
