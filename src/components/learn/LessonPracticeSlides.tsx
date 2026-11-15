// ─── LessonPracticeSlides.tsx ─────────────────────────────────────────────────
// TEACH, THEN WORK IT THROUGH, THEN PRACTISE — and only then test (owner request,
// 2026-09-27: "more learning and then reaffirming testing at every level").
//
// A lesson used to go explanation → example sentences → two single-shot quiz
// questions → the mastery check. Two things were missing between the explanation
// and the check, and both are what makes an explanation usable:
//
//   WORKED EXAMPLE  — a problem solved one visible step at a time. Example slides
//                     show FINISHED sentences; they never show the reasoning that
//                     produces one ("the verb takes an object → accusative →
//                     feminine -a becomes -u → kavu"). Worked examples are the
//                     best-evidenced way to teach a novice a procedure.
//   GUIDED PRACTICE — four questions with a HINT and a SECOND TRY before the
//                     answer is shown. Not scored: it is practice, and a learner
//                     who needs the hint is exactly who it is for. The mastery
//                     check that follows is where the lesson is measured.
//
// Both slides report completion to AnimatedLesson, which holds Next until the
// whole solution has been seen / every item resolved — the same rule the quiz
// slide already follows (answer before you advance).

import React, { useState } from 'react';
import type { BaseSlide, LessonMeta } from './lessonSlideTypes';
import ExerciseSequence from './exercises/ExerciseSequence';
import { eyebrowStyle } from './exercises/shared';
import type { Exercise } from './exercises/types';

export interface WorkedStep {
  /** Short label for the step, e.g. "Find the verb". */
  label?: string;
  /** What the learner should notice or do at this step. */
  text: string;
}

export interface PracticeItem {
  /** 'choice' (four options, the default) or 'type' — the learner WRITES the form
   *  (academic recommendation 2, 2026-09-29: recognition is not production). */
  type?: 'choice' | 'type';
  q: string;
  options: string[];
  correct: number;
  /** Typed items: the expected answer, and any other spelling that is equally right. */
  answer?: string;
  accept?: string[];
  /** Shown after a first wrong answer — a nudge toward the rule, never the answer. */
  hint: string;
  /** Shown once the item is resolved. */
  explanation: string;
}

const card: React.CSSProperties = {
  background: 'var(--card)',
  borderRadius: 14,
  border: '1px solid var(--card-b)',
  padding: '16px 18px',
  marginBottom: 12,
  boxShadow: 'var(--card-shadow)',
};

const eyebrow = (lesson: LessonMeta): React.CSSProperties => eyebrowStyle(lesson.color);

// ── Worked example ────────────────────────────────────────────────────────────

export function WorkedSlide({
  slide,
  lesson,
  done,
  onComplete,
}: {
  slide: BaseSlide;
  lesson: LessonMeta;
  done: boolean;
  onComplete: () => void;
}) {
  const steps = (Array.isArray(slide.steps) ? slide.steps : []) as WorkedStep[];
  const [shown, setShown] = useState(done ? steps.length : Math.min(1, steps.length));
  const all = shown >= steps.length;

  function reveal() {
    const n = shown + 1;
    setShown(n);
    if (n >= steps.length) onComplete();
  }
  // A worked example with a single step is complete on arrival.
  React.useEffect(() => {
    if (steps.length <= 1 && !done) onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-testid="lesson-worked">
      <div style={card}>
        <div style={eyebrow(lesson)}>Worked example</div>
        <p
          lang="hr"
          style={{
            fontSize: 'var(--text-md)',
            fontWeight: 800,
            margin: 0,
            color: 'var(--heading)',
          }}
        >
          {slide.problem as string}
        </p>
        {typeof slide.en === 'string' && slide.en && (
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--subtext)', margin: '6px 0 0' }}>
            {slide.en}
          </p>
        )}
      </div>

      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {steps.slice(0, shown).map((s, i) => (
          <li key={i} data-testid="worked-step" style={{ ...card, display: 'flex', gap: 12 }}>
            <span
              aria-hidden="true"
              style={{
                flex: '0 0 26px',
                height: 26,
                borderRadius: 13,
                background: 'var(--bar-bg)',
                color: 'var(--heading)',
                fontWeight: 800,
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {i + 1}
            </span>
            <div style={{ fontSize: 'var(--text-sm)', lineHeight: 1.55, color: 'var(--text)' }}>
              {s.label && (
                <strong style={{ display: 'block', color: 'var(--heading)' }}>{s.label}</strong>
              )}
              {s.text}
            </div>
          </li>
        ))}
      </ol>

      {all ? (
        <div data-testid="worked-answer" style={{ ...card, borderColor: 'var(--success)' }}>
          <div style={{ ...eyebrow(lesson), color: 'var(--ink-green)' }}>Answer</div>
          <p
            lang="hr"
            style={{
              fontSize: 'var(--text-md)',
              fontWeight: 800,
              margin: 0,
              color: 'var(--heading)',
            }}
          >
            {slide.answer as string}
          </p>
        </div>
      ) : (
        <button
          className="b bp"
          data-testid="worked-next-step"
          style={{ width: '100%' }}
          onClick={reveal}
        >
          Show the next step ({shown} of {steps.length})
        </button>
      )}
    </div>
  );
}

// ── Guided practice ───────────────────────────────────────────────────────────
// Each item is rendered by the exercise player (exercises/): multiple choice and
// typed as before, plus the newer kinds. The contract is the same for all of them.

export function GuidedPracticeSlide({
  slide,
  lesson,
  done,
  onComplete,
}: {
  slide: BaseSlide;
  lesson: LessonMeta;
  done: boolean;
  onComplete: () => void;
}) {
  const items = (Array.isArray(slide.items) ? slide.items : []) as unknown as Exercise[];
  return (
    <div data-testid="lesson-practice">
      <ExerciseSequence
        items={items}
        label="Guided practice"
        color={lesson.color}
        done={done}
        onComplete={onComplete}
        nextTestId="practice-next-item"
        nextLabel="Next practice question →"
      />
    </div>
  );
}
