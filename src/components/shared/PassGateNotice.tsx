/**
 * PassGateNotice — the "Not yet" state for a screen that gates credit on the
 * shared LESSON_PASS_THRESHOLD.
 *
 * WHY THIS EXISTS. Five screens wrote a LEARN_PATH `vs` gate key, incremented
 * lc/gc and paid XP on the FINISH button, with no reference to the score. A
 * learner who got 0 of 8 listening questions right still marked the `listening`
 * path node complete and still collected XP. None of the five is dwell-credited,
 * so unlike the BLACK_HOLE_SCREENS there was no design intent behind it — the
 * score was simply display-only, exactly the state `AnimatedLesson` was in
 * before the mastery-check directive.
 *
 * The rule those screens now follow is `completeExercise`'s, not a new one:
 * on a fail NOTHING is recorded — no XP, no `vs`, no lc/gc, no quest, and no
 * coupling clear — and the learner is told the score, the bar, and how to go
 * again. Copying that shape rather than inventing one is deliberate; a second
 * definition of "passed" is the drift this codebase keeps rediscovering.
 *
 * WHAT IT MUST NOT DO: strand anyone. Every screen mounting this keeps a way
 * out (`onLeave`) beside the retry, because a learner who cannot reach 75%
 * today must still be able to leave the screen.
 */
import React from 'react';
import { LESSON_PASS_THRESHOLD } from '../../lib/lessonGate';

export default function PassGateNotice({
  score,
  total,
  onRetry,
  onLeave,
  hint,
}: {
  score: number;
  total: number;
  onRetry: () => void;
  onLeave: () => void;
  /** One line of screen-specific advice, e.g. what to listen for. */
  hint?: string;
}) {
  const needed = Math.ceil(total * LESSON_PASS_THRESHOLD);
  return (
    <div data-testid="pass-gate-failed" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>💪</div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 900,
          color: 'var(--heading)',
          fontFamily: "'Playfair Display', serif",
          marginBottom: 6,
        }}
      >
        Not yet
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)', marginBottom: 4 }}>
        {score} / {total}
      </div>
      <div style={{ fontSize: 13, color: 'var(--subtext)', marginBottom: 4 }}>
        You need {needed} of {total} to complete this one.
      </div>
      <div style={{ fontSize: 12, color: 'var(--subtext)', marginBottom: 18 }}>
        Nothing was recorded — go again and it counts.
      </div>
      {hint && (
        <div style={{ fontSize: 13, color: 'var(--subtext)', marginBottom: 18 }}>{hint}</div>
      )}
      <button
        className="b bp"
        style={{ width: '100%', marginBottom: 10 }}
        data-testid="pass-gate-retry"
        onClick={onRetry}
      >
        Try again
      </button>
      <button
        className="b bg"
        style={{ width: '100%' }}
        data-testid="pass-gate-leave"
        onClick={onLeave}
      >
        Back
      </button>
    </div>
  );
}
