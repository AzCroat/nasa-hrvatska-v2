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
import { accentInk } from '../../lib/accentInk';
import type { BaseSlide, LessonMeta } from './lessonSlideTypes';

export interface WorkedStep {
  /** Short label for the step, e.g. "Find the verb". */
  label?: string;
  /** What the learner should notice or do at this step. */
  text: string;
}

export interface PracticeItem {
  q: string;
  options: string[];
  correct: number;
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

const eyebrow = (lesson: LessonMeta): React.CSSProperties => ({
  fontSize: 'var(--text-xs)',
  fontWeight: 800,
  letterSpacing: '.08em',
  color: accentInk(lesson.color),
  textTransform: 'uppercase',
  marginBottom: 6,
});

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

type ItemState = { tried: number[]; resolved: boolean };

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
  const items = (Array.isArray(slide.items) ? slide.items : []) as unknown as PracticeItem[];
  const [idx, setIdx] = useState(done ? Math.max(0, items.length - 1) : 0);
  const [state, setState] = useState<ItemState[]>(() =>
    items.map((it) => ({ tried: done ? [it.correct] : [], resolved: done })),
  );
  const item = items[idx];
  const st = state[idx];
  if (!item || !st) return null;

  const wrongTries = st.tried.filter((t) => t !== item.correct).length;
  const gotIt = st.tried.includes(item.correct);

  function choose(i: number) {
    if (!st || st.resolved || st.tried.includes(i) || !item) return;
    const tried = [...st.tried, i];
    const wrong = tried.filter((t) => t !== item.correct).length;
    // Resolved on the right answer, or on the SECOND wrong one (then it is shown).
    const resolved = i === item.correct || wrong >= 2;
    const next = state.map((s, k) => (k === idx ? { tried, resolved } : s));
    setState(next);
    if (resolved && next.every((s) => s.resolved)) onComplete();
  }

  function optionStyle(i: number): React.CSSProperties {
    const base: React.CSSProperties = {
      width: '100%',
      padding: '12px 16px',
      marginBottom: 8,
      borderRadius: 12,
      textAlign: 'left',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      fontWeight: 600,
      display: 'block',
      lineHeight: 1.4,
      cursor: st!.resolved || st!.tried.includes(i) ? 'default' : 'pointer',
      background: 'var(--card)',
      border: '2px solid var(--card-b)',
      color: 'var(--heading)',
    };
    const showRight = i === item!.correct && st!.resolved;
    if (showRight)
      return {
        ...base,
        background: 'var(--success-bg)',
        border: '2px solid var(--success)',
        color: 'var(--ink-green)',
      };
    if (st!.tried.includes(i))
      return {
        ...base,
        background: 'var(--error-bg)',
        border: '2px solid var(--error)',
        color: 'var(--ink-error)',
        textDecoration: 'line-through',
      };
    return base;
  }

  return (
    <div data-testid="lesson-practice">
      <div style={card}>
        <div style={eyebrow(lesson)}>
          Guided practice · {idx + 1} of {items.length} · not scored
        </div>
        <p
          lang="hr"
          style={{
            fontSize: 'var(--text-md)',
            fontWeight: 800,
            margin: 0,
            color: 'var(--heading)',
          }}
        >
          {item.q}
        </p>
      </div>

      {item.options.map((o, i) => (
        <button
          key={i}
          lang="hr"
          data-testid="practice-option"
          data-verdict={
            i === item.correct && st.resolved
              ? 'correct'
              : st.tried.includes(i)
                ? 'wrong'
                : undefined
          }
          disabled={st.resolved || st.tried.includes(i)}
          style={optionStyle(i)}
          onClick={() => choose(i)}
        >
          {o}
        </button>
      ))}

      {!st.resolved && wrongTries === 1 && (
        <div
          data-testid="practice-hint"
          role="status"
          style={{ ...card, background: 'var(--info-bg)' }}
        >
          <strong style={{ color: 'var(--ink-info)' }}>Not quite — here is a hint. </strong>
          <span style={{ color: 'var(--text)' }}>{item.hint}</span>
        </div>
      )}

      {st.resolved && (
        <div data-testid="practice-explanation" role="status" style={card}>
          <strong style={{ color: gotIt ? 'var(--ink-green)' : 'var(--ink-error)' }}>
            {gotIt
              ? wrongTries === 0
                ? '✅ Correct!'
                : '✅ Got it on the second try.'
              : '❌ The answer is shown above.'}
          </strong>{' '}
          <span style={{ color: 'var(--text)' }}>{item.explanation}</span>
        </div>
      )}

      {st.resolved && idx < items.length - 1 && (
        <button
          className="b bp"
          data-testid="practice-next-item"
          style={{ width: '100%' }}
          onClick={() => setIdx(idx + 1)}
        >
          Next practice question →
        </button>
      )}
    </div>
  );
}
