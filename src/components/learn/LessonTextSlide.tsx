// ─── LessonTextSlide.tsx ──────────────────────────────────────────────────────
// A short dialogue or text inside a lesson, with three parts on one slide:
//   1. Listen first — plays the lines in order (never required: reading is not
//      gated on audio, and a failed play only names its cause);
//   2. the text itself, visible from the start; tap a line to hear it, and a toggle
//      reveals the English (hidden by default);
//   3. questions about it, through the exercise player (hint -> second try ->
//      answer; never scored).
// AnimatedLesson holds Next until every question is settled; a text with no
// questions never holds it.

import React, { useEffect, useRef, useState } from 'react';
import { speak, stopAudio, getLastTtsFailure, describeTtsFailure } from '../../lib/audio';
import type { BaseSlide, LessonMeta } from './lessonSlideTypes';
import ExerciseSequence from './exercises/ExerciseSequence';
import { card, eyebrowStyle } from './exercises/shared';
import type { Exercise } from './exercises/types';

export interface TextLine {
  who?: string;
  hr: string;
  en: string;
}

export default function LessonTextSlide({
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
  const lines = (Array.isArray(slide.lines) ? slide.lines : []) as TextLine[];
  const questions = (Array.isArray(slide.questions) ? slide.questions : []) as Exercise[];
  const [showEn, setShowEn] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);
  const [failure, setFailure] = useState<string | null>(null);
  const run = useRef(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => () => {
      run.current++; // stops a Listen-first run at its next line
      stopAudio();
    },
    [],
  );
  // A text with no questions never holds Next.
  useEffect(() => {
    if (questions.length === 0 && !done) onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function playFrom(start: number, all: boolean) {
    const gen = ++run.current;
    setFailure(null);
    for (let i = start; i < lines.length; i++) {
      if (run.current !== gen) return;
      setPlaying(i);
      const r = await speak(lines[i]!.hr);
      if (run.current !== gen || r === 'superseded') return;
      if (r === 'failed') {
        setFailure(describeTtsFailure(getLastTtsFailure()));
        break;
      }
      if (!all) break;
    }
    if (run.current === gen) setPlaying(null);
  }

  function readTheText() {
    textRef.current?.scrollIntoView?.({ block: 'start', behavior: 'smooth' });
    textRef.current?.focus();
  }

  return (
    <div data-testid="lesson-text">
      <div style={card}>
        <div style={eyebrowStyle(lesson.color)}>{slide.kind === 'text' ? 'Text' : 'Dialogue'}</div>
        <p
          lang="hr"
          style={{
            fontSize: 'var(--text-md)',
            fontWeight: 800,
            margin: '0 0 12px',
            color: 'var(--heading)',
          }}
        >
          {slide.title as string}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            className="b bp"
            data-testid="lesson-text-listen"
            onClick={() => void playFrom(0, true)}
          >
            🔊 Listen first
          </button>
          <button className="b" data-testid="lesson-text-read" onClick={readTheText}>
            Read the text
          </button>
          <button
            className="b"
            data-testid="lesson-text-english"
            aria-pressed={showEn}
            onClick={() => setShowEn(!showEn)}
          >
            {showEn ? 'Hide English' : 'Show English'}
          </button>
        </div>
        {failure && (
          <div
            data-testid="lesson-text-audio-failed"
            role="status"
            style={{ marginTop: 10, fontSize: 'var(--text-sm)', color: 'var(--text)' }}
          >
            The recording couldn&apos;t be played. {failure} You can still read the text.
          </div>
        )}
      </div>

      <div ref={textRef} tabIndex={-1} style={{ outline: 'none' }}>
        {lines.map((l, i) => (
          <button
            key={i}
            data-testid={`lesson-text-line-${i}`}
            onClick={() => void playFrom(i, false)}
            style={{
              ...card,
              width: '100%',
              textAlign: 'left',
              fontFamily: 'inherit',
              cursor: 'pointer',
              display: 'block',
              color: 'var(--heading)',
              borderColor: playing === i ? 'var(--heading)' : 'var(--card-b)',
            }}
          >
            {l.who && (
              <strong
                style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--subtext)' }}
              >
                {l.who}
              </strong>
            )}
            <span lang="hr" style={{ fontSize: 'var(--text-md)', fontWeight: 700 }}>
              {l.hr}
            </span>
            {showEn && (
              <span
                data-testid={`lesson-text-en-${i}`}
                style={{
                  display: 'block',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--subtext)',
                  marginTop: 4,
                }}
              >
                {l.en}
              </span>
            )}
          </button>
        ))}
      </div>

      {questions.length > 0 && (
        <ExerciseSequence
          items={questions}
          label="Check your reading"
          color={lesson.color}
          done={done}
          onComplete={onComplete}
        />
      )}
    </div>
  );
}
