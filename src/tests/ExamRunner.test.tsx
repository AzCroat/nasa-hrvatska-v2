// src/tests/ExamRunner.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Stub the speaking screen so this test isolates ExamRunner's MCQ + scoring logic.
vi.mock('../components/exam/SpeakingTaskScreen.js', () => ({
  default: ({ onScore }: { onScore: (n: number) => void }) => (
    <button data-testid="stub-speak" onClick={() => onScore(0.9)}>
      speak
    </button>
  ),
}));

import ExamRunner from '../components/exam/ExamRunner.js';
import type { RunnerQuestion } from '../lib/checkpointExam.js';

const questions: RunnerQuestion[] = [
  {
    id: 'q1',
    skill: 'vocab',
    prompt: 'V?',
    options: ['a', 'b', 'c', 'd'],
    correctIndex: 0,
    level: 'B1',
  },
  {
    id: 'q2',
    skill: 'grammar',
    prompt: 'G?',
    options: ['a', 'b', 'c', 'd'],
    correctIndex: 1,
    level: 'B1',
  },
];

describe('ExamRunner', () => {
  it('buckets MCQ by skill and folds in the speaking score, then completes', async () => {
    const onComplete = vi.fn();
    render(
      <ExamRunner
        questions={questions}
        speaking={{
          level: 'B1',
          tasks: [{ id: 's1', prompt: 'p', promptEn: 'p', seconds: 45 }],
          scorer: { assess: vi.fn() },
        }}
        onComplete={onComplete}
      />,
    );
    // Q1 correct (index 0)
    fireEvent.click(screen.getByTestId('answer-0'));
    fireEvent.click(screen.getByTestId('exam-next'));
    // Q2 correct (index 1)
    fireEvent.click(screen.getByTestId('answer-1'));
    fireEvent.click(screen.getByTestId('exam-next'));
    // Speaking (stubbed) → 0.9
    fireEvent.click(screen.getByTestId('stub-speak'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(onComplete.mock.calls[0]![0]).toEqual({ vocab: 1, grammar: 1, speaking: 0.9 });
  });

  it('lets a mic-unable learner skip the speaking task — completes with NO speaking score', async () => {
    // Regression guard: the speaking phase must never trap a learner without a
    // mic. Skipping records no speaking score (scores.speaking stays absent),
    // which in shadow mode never affects the result.
    const onComplete = vi.fn();
    render(
      <ExamRunner
        questions={questions}
        speaking={{
          level: 'B1',
          tasks: [{ id: 's1', prompt: 'p', promptEn: 'p', seconds: 45 }],
          scorer: { assess: vi.fn() },
        }}
        onComplete={onComplete}
      />,
    );
    fireEvent.click(screen.getByTestId('answer-0'));
    fireEvent.click(screen.getByTestId('exam-next'));
    fireEvent.click(screen.getByTestId('answer-1'));
    fireEvent.click(screen.getByTestId('exam-next'));
    // Skip instead of speaking.
    fireEvent.click(screen.getByTestId('speak-skip'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(onComplete.mock.calls[0]![0]).toEqual({ vocab: 1, grammar: 1 });
    expect(onComplete.mock.calls[0]![0].speaking).toBeUndefined();
  });
});

describe('ExamRunner — skip paths (owner decision 2026-08-16: skip = wrong, check always completes)', () => {
  it('skipping an MCQ counts it against its skill like a wrong answer', async () => {
    const onComplete = vi.fn();
    render(<ExamRunner questions={questions} onComplete={onComplete} />);
    // Q1: skip without selecting anything.
    fireEvent.click(screen.getByTestId('exam-skip'));
    // Q2: answer correctly (index 1).
    fireEvent.click(screen.getByTestId('answer-1'));
    fireEvent.click(screen.getByTestId('exam-next'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    const scores = onComplete.mock.calls[0]![0];
    expect(scores.vocab).toBe(0); // skipped → 0/1
    expect(scores.grammar).toBe(1); // answered → 1/1
  });

  it('speaking zero-skip records a 0 score and completes (no pending trap)', async () => {
    const onComplete = vi.fn();
    render(
      <ExamRunner
        questions={[]}
        speaking={{
          level: 'B1',
          tasks: [{ id: 's1', prompt: 'p', promptEn: 'p', seconds: 45 }],
          scorer: { assess: vi.fn() },
        }}
        onComplete={onComplete}
      />,
    );
    fireEvent.click(screen.getByTestId('speak-skip-zero'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(onComplete.mock.calls[0]![0].speaking).toBe(0);
  });

  it('the finish-later mic skip still advances WITHOUT a speaking score', async () => {
    const onComplete = vi.fn();
    render(
      <ExamRunner
        questions={[]}
        speaking={{
          level: 'B1',
          tasks: [{ id: 's1', prompt: 'p', promptEn: 'p', seconds: 45 }],
          scorer: { assess: vi.fn() },
        }}
        onComplete={onComplete}
      />,
    );
    fireEvent.click(screen.getByTestId('speak-skip'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(onComplete.mock.calls[0]![0].speaking).toBeUndefined();
  });
});

describe('ExamRunner — mid-MCQ save & resume (owner directive 2026-08-16)', () => {
  it('reports progress after every MCQ advance so the caller can persist it', () => {
    const onMcqProgress = vi.fn();
    render(<ExamRunner questions={questions} onComplete={vi.fn()} onMcqProgress={onMcqProgress} />);
    // Q1 answered correctly.
    fireEvent.click(screen.getByTestId('answer-0'));
    fireEvent.click(screen.getByTestId('exam-next'));
    expect(onMcqProgress).toHaveBeenCalledWith(1, { vocab: { total: 1, correct: 1 } });
    // Q2 skipped — progress fires for skips too (a skip is an answer).
    fireEvent.click(screen.getByTestId('exam-skip'));
    expect(onMcqProgress).toHaveBeenLastCalledWith(2, {
      vocab: { total: 1, correct: 1 },
      grammar: { total: 1, correct: 0 },
    });
  });

  it('resumes from a saved index with prior tallies folded into the final scores', async () => {
    const onComplete = vi.fn();
    render(
      <ExamRunner
        questions={questions}
        onComplete={onComplete}
        initialIdx={1}
        initialAcc={{ vocab: { total: 1, correct: 1 } }}
      />,
    );
    // Fast-forwarded past Q1: the visible question is Q2 (grammar).
    expect(screen.getByText('G?')).toBeTruthy();
    expect(screen.getByTestId('exam-progress').textContent).toContain('2 / 2');
    fireEvent.click(screen.getByTestId('answer-1'));
    fireEvent.click(screen.getByTestId('exam-next'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    // The pre-resume vocab tally survives into the final scores.
    expect(onComplete.mock.calls[0]![0]).toEqual({ vocab: 1, grammar: 1 });
  });

  it('an initialIdx at the end of the questions goes straight to speaking', () => {
    render(
      <ExamRunner
        questions={questions}
        speaking={{
          level: 'B1',
          tasks: [{ id: 's1', prompt: 'p', promptEn: 'p', seconds: 45 }],
          scorer: { assess: vi.fn() },
        }}
        onComplete={vi.fn()}
        initialIdx={2}
        initialAcc={{ vocab: { total: 1, correct: 1 }, grammar: { total: 1, correct: 0 } }}
      />,
    );
    expect(screen.getByTestId('stub-speak')).toBeTruthy();
    expect(screen.queryByTestId('exam-next')).toBeNull();
  });

  it('renders the exit control only when onExit is provided, and fires it', () => {
    const onExit = vi.fn();
    const { rerender } = render(<ExamRunner questions={questions} onComplete={vi.fn()} />);
    expect(screen.queryByTestId('exam-exit')).toBeNull();
    rerender(<ExamRunner questions={questions} onComplete={vi.fn()} onExit={onExit} />);
    fireEvent.click(screen.getByTestId('exam-exit'));
    expect(onExit).toHaveBeenCalledTimes(1);
  });
});
