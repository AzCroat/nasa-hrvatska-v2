// ─── LessonVisualSlide ────────────────────────────────────────────────────────
// A PICTURE slide in a lesson (2026-10-29, visual-learning pilot). It is passive
// by contract, like a `rule` slide: it gates nothing, scores nothing and credits
// nothing, so the mastery check, XP and the retention ladder are exactly as they
// were. `kind` picks the diagram; an unknown kind (newer data than this build)
// renders the slide's own `body` text and never an error, so a lesson cached
// ahead of the bundle degrades to a text slide instead of a dead end.

import React from 'react';
import MotionRestVisual, { type MotionRestSlide } from './visuals/MotionRestVisual';
import type { LessonMeta } from './lessonSlideTypes';

export interface VisualSlide {
  type?: string;
  kind?: string;
  title?: string;
  body?: string;
  [key: string]: unknown;
}

export default function LessonVisualSlide({
  slide,
  lesson,
}: {
  slide: VisualSlide;
  lesson: LessonMeta;
}) {
  return (
    <div data-testid="lesson-visual-slide">
      {slide.title && (
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: 'var(--text)',
            margin: '4px 0 12px',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {slide.title}
        </h2>
      )}
      {slide.kind === 'motion-rest' ? (
        <MotionRestVisual slide={slide as unknown as MotionRestSlide} />
      ) : (
        <p
          style={{
            color: 'var(--text)',
            lineHeight: 1.6,
            borderLeft: `4px solid ${lesson.color}`,
            paddingLeft: 12,
          }}
        >
          {slide.body || ''}
        </p>
      )}
    </div>
  );
}
