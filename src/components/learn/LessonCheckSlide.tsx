// ─── LessonCheckSlide.tsx ─────────────────────────────────────────────────────
// The mastery-check slide of AnimatedLesson (owner directive, 2026-09-07).
// Split from LessonSlides.tsx at the 800-line lint cap; the cap was not raised.

import React, { useMemo, useState } from 'react';
import { shuffledOrder, type LessonCheckItem } from '../../lib/lessonCheck';
import type { LessonMeta } from './lessonSlideTypes';

// ── Mastery check slide ───────────────────────────────────────────────────────
//
// The summative check (lib/lessonCheck.ts): ≥6 items answered one at a time,
// each revealed with its explanation once chosen, options shuffled per ATTEMPT
// so a retake is not a memory test of positions. The parent owns the answers
// (source-order indices) and the attempt counter; this component owns only
// which item is on screen. Remount on retake via `key={attempt}`.

export function CheckSlide({
  items,
  lesson,
  attempt,
  answers,
  onAnswer,
}: {
  items: LessonCheckItem[];
  lesson: LessonMeta;
  attempt: number;
  answers: Record<number, number>;
  onAnswer: (itemIndex: number, sourceOptionIndex: number) => void;
}) {
  const [pos, setPos] = useState(() => {
    // Resume at the first unanswered item (a Prev/Next round trip must not
    // reset a half-finished check).
    const first = items.findIndex((_, i) => answers[i] === undefined);
    return first < 0 ? Math.max(0, items.length - 1) : first;
  });
  const orders = useMemo(
    () => items.map((it, i) => shuffledOrder(it.options.length, attempt, i)),
    [items, attempt],
  );
  const item = items[pos];
  if (!item) return null;
  const order = orders[pos]!;
  const chosen = answers[pos];
  const revealed = chosen !== undefined;
  const isCorrect = revealed && chosen === item.correct;
  const answered = items.filter((_, i) => answers[i] !== undefined).length;
  const isLast = pos === items.length - 1;

  function optionStyle(source: number): React.CSSProperties {
    const base: React.CSSProperties = {
      width: '100%',
      padding: '12px 16px',
      marginBottom: 8,
      borderRadius: 12,
      cursor: revealed ? 'default' : 'pointer',
      textAlign: 'left',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      fontWeight: 600,
      transition: 'all .15s',
      display: 'block',
      lineHeight: 1.4,
      background: 'var(--card)',
      border: '2px solid var(--card-b)',
      color: 'var(--heading)',
    };
    if (!revealed) return base;
    if (source === item!.correct) {
      return { ...base, background: '#f0fdf4', border: '2px solid #16a34a', color: '#16a34a' };
    }
    if (source === chosen) {
      return { ...base, background: '#fef2f2', border: '2px solid #dc2626', color: '#dc2626' };
    }
    return { ...base, color: 'var(--subtext)', opacity: 0.6 };
  }

  return (
    <div data-testid="lesson-check" data-attempt={attempt}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 10,
        }}
      >
        <h3
          style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 900,
            color: 'var(--heading)',
            margin: 0,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Mastery Check
        </h3>
        <span
          data-testid="lesson-check-progress"
          style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--subtext)' }}
        >
          {pos + 1} / {items.length}
        </span>
      </div>
      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--subtext)', margin: '0 0 12px' }}>
        Show what you learned — you need 75% to complete the lesson.
      </p>
      <div
        style={{
          background: 'var(--card)',
          borderRadius: 14,
          border: '1px solid var(--card-b)',
          padding: '18px 20px',
          marginBottom: 16,
          textAlign: 'center',
          boxShadow: 'var(--card-shadow)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--text-md)',
            fontWeight: 800,
            color: 'var(--heading)',
            lineHeight: 1.4,
            margin: 0,
          }}
          data-testid="lesson-check-question"
        >
          {item.q}
        </p>
      </div>
      <div>
        {order.map((source, slot) => (
          <button
            key={source}
            data-testid="lesson-check-option"
            data-source={source}
            style={optionStyle(source)}
            disabled={revealed}
            onClick={() => !revealed && onAnswer(pos, source)}
            aria-label={'Option ' + (slot + 1) + ': ' + item.options[source]}
          >
            <span
              style={{
                display: 'inline-block',
                width: 22,
                height: 22,
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '22px',
                fontSize: 11,
                fontWeight: 900,
                marginRight: 10,
                outline: '2px solid currentColor',
                verticalAlign: 'middle',
              }}
            >
              {String.fromCharCode(65 + slot)}
            </span>
            {item.options[source]}
          </button>
        ))}
      </div>
      {revealed && (
        <div
          style={{
            marginTop: 12,
            borderRadius: 12,
            padding: '14px 16px',
            background: isCorrect ? '#f0fdf4' : '#fffbeb',
            border: '1.5px solid ' + (isCorrect ? '#86efac' : '#fcd34d'),
            animation: 'slideIn .3s ease forwards',
          }}
          data-testid="lesson-check-feedback"
          data-correct={isCorrect ? '1' : '0'}
        >
          <div
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 900,
              color: isCorrect ? '#16a34a' : '#b45309',
              marginBottom: 4,
            }}
          >
            {isCorrect ? '✓ Correct!' : '✗ Not quite'}
          </div>
          {item.explanation && (
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--subtext)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.explanation}
            </p>
          )}
          {!isLast && (
            <button
              className="b bp"
              data-testid="lesson-check-next"
              style={{ width: '100%', marginTop: 12, background: lesson.color }}
              onClick={() => setPos((p) => Math.min(p + 1, items.length - 1))}
            >
              Next question →
            </button>
          )}
          {isLast && answered === items.length && (
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--subtext)',
                margin: '12px 0 0',
                fontWeight: 700,
              }}
            >
              All answered — tap Next to see your result.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
