// ─── LessonSummarySlide.tsx ───────────────────────────────────────────────────
// The summary slide of AnimatedLesson: PASSED renders the completion, NOT PASSED
// the honest result with a retake. Split from LessonSlides.tsx at the 800-line
// lint cap; the cap was not raised.

import React from 'react';
import type { BaseSlide, LessonMeta } from './LessonSlides';

// ── Summary slide ─────────────────────────────────────────────────────────────
//
// Two states, decided by the parent from lib/lessonCheck: PASSED renders the
// completion (takeaways, score, XP); NOT PASSED renders the honest result —
// score, the threshold, nothing recorded — with the two ways forward. The
// summary never says "Lesson Complete!" for a lesson that was not.

export function SummarySlide({
  slide,
  lesson,
  score,
  quizTotal,
  xpAwarded,
  passed = true,
  gateKind = 'quiz',
  onRetake,
  onReview,
}: {
  slide: BaseSlide;
  lesson: LessonMeta;
  score: number;
  quizTotal: number;
  xpAwarded: number;
  passed?: boolean;
  gateKind?: 'check' | 'quiz' | 'none';
  onRetake?: () => void;
  onReview?: () => void;
}) {
  if (!passed) {
    return (
      <div style={{ textAlign: 'center' }} data-testid="lesson-check-failed">
        <div style={{ fontSize: 64, lineHeight: 1, marginBottom: 16 }}>💪</div>
        <h2
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 900,
            color: lesson.color,
            marginBottom: 6,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Not yet
        </h2>
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--subtext)',
            marginBottom: 20,
            fontWeight: 600,
          }}
        >
          {lesson.title}
        </p>
        <div
          style={{
            background: lesson.bg,
            borderRadius: 12,
            border: '1px solid ' + lesson.color + '44',
            padding: '14px',
            marginBottom: 16,
          }}
        >
          <div
            style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, color: lesson.color }}
            data-testid="lesson-check-score"
          >
            {score}/{quizTotal}
          </div>
          <div
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--subtext)',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            {gateKind === 'check' ? 'Mastery Check' : 'Quiz Score'}
          </div>
        </div>
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--subtext)',
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          You need 75% to complete this lesson. Nothing was recorded — review the lesson and take
          the check again.
        </p>
        <button
          className="b bp"
          data-testid="lesson-check-retake"
          style={{ width: '100%', marginBottom: 10, background: lesson.color }}
          onClick={onRetake}
        >
          ↻ Retake the check
        </button>
        <button
          data-testid="lesson-check-review"
          onClick={onReview}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            background: 'none',
            border: '1px solid var(--card-b)',
            borderRadius: 12,
            color: 'var(--heading)',
            fontSize: 'var(--text-sm)',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Review the lesson first
        </button>
      </div>
    );
  }
  return (
    <div style={{ textAlign: 'center' }} data-testid="lesson-complete">
      {/* Header */}
      <div style={{ fontSize: 64, lineHeight: 1, marginBottom: 16 }}>{lesson.icon}</div>
      <h2
        style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 900,
          color: lesson.color,
          marginBottom: 6,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Lesson Complete!
      </h2>
      <p
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--subtext)',
          marginBottom: 24,
          fontWeight: 600,
        }}
      >
        {lesson.title}
      </p>

      {/* Key points */}
      <div
        style={{
          background: 'var(--card)',
          borderRadius: 14,
          border: '1px solid var(--card-b)',
          padding: '16px 18px',
          marginBottom: 16,
          textAlign: 'left',
          boxShadow: 'var(--card-shadow)',
        }}
      >
        <div
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 800,
            color: lesson.color,
            textTransform: 'uppercase',
            letterSpacing: '.08em',
            marginBottom: 10,
          }}
        >
          Key Takeaways
        </div>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {slide.points!.map((pt: string, i: number) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 9,
                fontSize: 'var(--text-sm)',
                color: 'var(--heading)',
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: lesson.color,
                  fontWeight: 900,
                  fontSize: 14,
                  marginTop: 1,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Scores */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, justifyContent: 'center' }}>
        {quizTotal > 0 && (
          <div
            style={{
              flex: 1,
              background: lesson.bg,
              borderRadius: 12,
              border: '1px solid ' + lesson.color + '44',
              padding: '12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, color: lesson.color }}>
              {score}/{quizTotal}
            </div>
            <div
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--subtext)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {gateKind === 'check' ? 'Mastery Check' : 'Quiz Score'}
            </div>
          </div>
        )}
        <div
          style={{
            flex: 1,
            background: '#fffbeb',
            borderRadius: 12,
            border: '1px solid #fcd34d',
            padding: '12px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, color: '#d97706' }}>+25</div>
          <div
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--subtext)',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            XP Earned
          </div>
        </div>
      </div>
    </div>
  );
}
