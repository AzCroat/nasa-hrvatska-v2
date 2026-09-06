// src/tests/ExamRunner.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Stub the speaking screen so this test isolates ExamRunner's MCQ + scoring
// logic. The stub passes a full assessment (like the real screen after the
// transcript-review step) so the evidence path is exercised too.
const STUB_ASSESSMENT = {
  transcript: 'čujem te dobro',
  scores: { range: 0.9, accuracy: 0.9, fluency: 0.9, task: 0.9 },
  overall: 0.9,
  transcriptSufficiency: 0.9,
};
vi.mock('../components/exam/SpeakingTaskScreen.js', () => ({
  default: ({ onScore }: { onScore: (n: number, a?: unknown) => void }) => (
    <button data-testid="stub-speak" onClick={() => onScore(0.9, STUB_ASSESSMENT)}>
      speak
    </button>
  ),
}));

// Audio is mocked so the listening gate can be driven deterministically:
// `speakResult` is what the next speak() resolves to, `lastFailure` what
// getLastTtsFailure() reports afterwards.
const audioMock = {
  speak: vi.fn(async () => audioMock.speakResult),
  speakResult: 'azure' as string,
  lastFailure: null as null | { cause: string; status?: number; code?: string },
};
vi.mock('../lib/audio.js', () => ({
  speak: (...a: unknown[]) => audioMock.speak(...(a as [])),
  getLastTtsFailure: () => audioMock.lastFailure,
  describeTtsFailure: (f: { cause: string } | null) => `desc:${f?.cause ?? 'none'}`,
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

  it('forwards speaking evidence (prompt + transcript + rubric) to onComplete', async () => {
    // Audit trail (2026-08-16): what a speaking score was based on rides along
    // with the scores so the caller can persist it with the attempt.
    const onComplete = vi.fn();
    render(
      <ExamRunner
        questions={[]}
        speaking={{
          level: 'B1',
          tasks: [{ id: 's1', prompt: 'Opišite dan.', promptEn: 'p', seconds: 45 }],
          scorer: { assess: vi.fn() },
        }}
        onComplete={onComplete}
      />,
    );
    fireEvent.click(screen.getByTestId('stub-speak'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    const evidence = onComplete.mock.calls[0]![1];
    expect(evidence.speaking).toHaveLength(1);
    expect(evidence.speaking[0].transcript).toBe('čujem te dobro');
    expect(evidence.speaking[0].prompt).toBe('Opišite dan.');
    expect(evidence.speaking[0].overall).toBe(0.9);
    // A skipped task (score 0, no assessment) contributes NO evidence — covered
    // by the zero-skip test above completing with calls[0][1] === undefined.
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

describe('ExamRunner — a listening item is scored only after its recording has PLAYED (2026-09-06)', () => {
  // Field report: a Level Check's listening section played nothing; the runner
  // fired speak() and ignored the result, so blind answers were scored and the
  // failed check rolled the learner's level back. Nothing may be answered,
  // skipped or scored until the audio has actually played through.
  const listening: RunnerQuestion[] = [
    {
      id: 'l1',
      skill: 'listening',
      prompt: 'Listen. What does she order?',
      options: ['coffee', 'tea', 'juice', 'water'],
      correctIndex: 0,
      audioText: 'Dobar dan. Jednu kavu, molim.',
      level: 'A1',
    },
    {
      id: 'l2',
      skill: 'listening',
      prompt: 'Listen. How many brothers?',
      options: ['one', 'two', 'three', 'four'],
      correctIndex: 1,
      audioText: 'Imam dva brata i jednu sestru.',
      level: 'A1',
    },
  ];

  beforeEach(() => {
    audioMock.speak.mockClear();
    audioMock.speakResult = 'azure';
    audioMock.lastFailure = null;
  });

  function expectLocked() {
    for (let i = 0; i < 4; i++) expect(screen.getByTestId(`answer-${i}`)).toBeDisabled();
    expect(screen.getByTestId('exam-next')).toBeDisabled();
    expect(screen.getByTestId('exam-skip')).toBeDisabled();
  }

  it('answers, Continue and skip are locked until the recording has played; a successful play unlocks them', async () => {
    const onComplete = vi.fn();
    render(<ExamRunner questions={[listening[0]!]} onComplete={onComplete} />);
    expectLocked();
    expect(screen.getByTestId('exam-audio-hint')).toBeInTheDocument();
    // A click on a locked answer selects nothing.
    fireEvent.click(screen.getByTestId('answer-0'));
    expect(screen.getByTestId('exam-next')).toBeDisabled();

    fireEvent.click(screen.getByTestId('exam-audio-play'));
    expect(audioMock.speak).toHaveBeenCalledWith('Dobar dan. Jednu kavu, molim.');
    await waitFor(() =>
      expect(screen.getByTestId('exam-audio-play').getAttribute('data-audio-status')).toBe(
        'played',
      ),
    );
    expect(screen.queryByTestId('exam-audio-hint')).toBeNull();
    for (let i = 0; i < 4; i++) expect(screen.getByTestId(`answer-${i}`)).not.toBeDisabled();
    expect(screen.getByTestId('exam-skip')).not.toBeDisabled();

    fireEvent.click(screen.getByTestId('answer-0'));
    fireEvent.click(screen.getByTestId('exam-next'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(onComplete.mock.calls[0]![0]).toEqual({ listening: 1 });
  });

  it('a failed play names the cause, keeps everything locked, and retry plays again', async () => {
    audioMock.speakResult = 'failed';
    audioMock.lastFailure = {
      cause: 'no_fallback_voice',
      status: 429,
      code: 'daily_quota_exceeded',
    };
    const onExit = vi.fn();
    render(<ExamRunner questions={[listening[0]!]} onComplete={vi.fn()} onExit={onExit} />);
    fireEvent.click(screen.getByTestId('exam-audio-play'));
    await waitFor(() => expect(screen.getByTestId('exam-audio-failed')).toBeInTheDocument());
    expect(screen.getByTestId('exam-audio-failed')).toHaveTextContent('desc:no_fallback_voice');
    expect(screen.getByTestId('exam-audio-failed')).toHaveTextContent(
      "won't count until you've heard it",
    );
    expectLocked();
    // Save & exit hands control back to the caller, which parks the attempt.
    fireEvent.click(screen.getByTestId('exam-audio-exit'));
    expect(onExit).toHaveBeenCalledTimes(1);

    // Retry: audio is back → unlocked.
    audioMock.speakResult = 'azure';
    fireEvent.click(screen.getByTestId('exam-audio-retry'));
    expect(audioMock.speak).toHaveBeenCalledTimes(2);
    await waitFor(() => expect(screen.queryByTestId('exam-audio-failed')).toBeNull());
    for (let i = 0; i < 4; i++) expect(screen.getByTestId(`answer-${i}`)).not.toBeDisabled();
  });

  it('the failure card offers no exit when the caller provided none', async () => {
    audioMock.speakResult = 'failed';
    render(<ExamRunner questions={[listening[0]!]} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByTestId('exam-audio-play'));
    await waitFor(() => expect(screen.getByTestId('exam-audio-failed')).toBeInTheDocument());
    expect(screen.queryByTestId('exam-audio-exit')).toBeNull();
    expect(screen.getByTestId('exam-audio-retry')).toBeInTheDocument();
  });

  it('advancing to the next listening item locks it again until ITS recording has played', async () => {
    const onComplete = vi.fn();
    render(<ExamRunner questions={listening} onComplete={onComplete} />);
    fireEvent.click(screen.getByTestId('exam-audio-play'));
    await waitFor(() => expect(screen.getByTestId('answer-0')).not.toBeDisabled());
    fireEvent.click(screen.getByTestId('answer-0'));
    fireEvent.click(screen.getByTestId('exam-next'));
    // Item 2: locked again, own hint, own recording.
    expect(screen.getByText('Listen. How many brothers?')).toBeInTheDocument();
    expectLocked();
    fireEvent.click(screen.getByTestId('exam-audio-play'));
    expect(audioMock.speak).toHaveBeenLastCalledWith('Imam dva brata i jednu sestru.');
    await waitFor(() => expect(screen.getByTestId('answer-1')).not.toBeDisabled());
    fireEvent.click(screen.getByTestId('answer-1'));
    fireEvent.click(screen.getByTestId('exam-next'));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(onComplete.mock.calls[0]![0]).toEqual({ listening: 1 });
  });

  it('a superseded play (learner tapped again) leaves the gate to the newer play', async () => {
    let resolveFirst: (v: string) => void = () => {};
    audioMock.speak.mockImplementationOnce(() => new Promise<string>((r) => (resolveFirst = r)));
    render(<ExamRunner questions={[listening[0]!]} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByTestId('exam-audio-play'));
    expect(screen.getByTestId('exam-audio-play').getAttribute('data-audio-status')).toBe('playing');
    // Second tap: resolves 'azure' (default). First then reports superseded.
    fireEvent.click(screen.getByTestId('exam-audio-play'));
    resolveFirst('superseded');
    await waitFor(() =>
      expect(screen.getByTestId('exam-audio-play').getAttribute('data-audio-status')).toBe(
        'played',
      ),
    );
    expect(screen.queryByTestId('exam-audio-failed')).toBeNull();
  });

  it('non-listening items are untouched: answers are enabled immediately and speak() is never called', () => {
    render(<ExamRunner questions={questions} onComplete={vi.fn()} />);
    expect(screen.getByTestId('answer-0')).not.toBeDisabled();
    expect(screen.getByTestId('exam-skip')).not.toBeDisabled();
    expect(screen.queryByTestId('exam-audio-play')).toBeNull();
    expect(audioMock.speak).not.toHaveBeenCalled();
  });
});
