// ─── LessonTextSlide.tsx ──────────────────────────────────────────────────────
// A short dialogue or text inside a lesson, run the way a class runs it — three
// stages on one slide (owner direction, 2026-11-15):
//
//   1. LISTEN — the recording plays and the text is HIDDEN, so the first meeting
//      with the language is by ear. "Show the text" is always enabled: reading is
//      never gated on audio, and a failed play names its cause and opens the text.
//   2. READ — the WHOLE text, nothing clipped. Tap a line to hear it. The English
//      is hidden and one deliberate tap away ("Need help? Show English").
//   3. QUESTIONS — on their own screen, the question first, so it is never a scroll
//      below the text. The text is one tap away ("Look at the dialogue again").
//      Questions go through the exercise player (hint -> second try -> answer;
//      never scored).
//
// AnimatedLesson holds Next until every question is settled; a text with no
// questions never holds it and has no third stage.

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

type Stage = 'listen' | 'read' | 'questions';

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
  const [stage, setStage] = useState<Stage>('listen');
  const [showEn, setShowEn] = useState(false);
  const [lookBack, setLookBack] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [heard, setHeard] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);
  const [failure, setFailure] = useState<string | null>(null);
  const run = useRef(0);
  // A RECALL question ("Without looking back at the dialogue: …") tests what the learner
  // took in by listening and reading, so the way back to the text is not offered beside it
  // (owner report, 2026-11-15: the two said opposite things). The later questions ask the
  // learner to notice grammar and to write Croatian; there the text is support, one tap away.
  const recall = /^without looking back/i.test(
    String((questions[qIdx] as { q?: string } | undefined)?.q ?? ''),
  );
  const isText = slide.kind === 'text';
  const noun = isText ? 'text' : 'dialogue';

  useEffect(
    () => () => {
      run.current++; // stops a play-all run at its next line
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
        // A recording that cannot play must not leave the learner on a blank stage.
        setStage((s) => (s === 'listen' ? 'read' : s));
        break;
      }
      if (!all) break;
    }
    if (run.current === gen) {
      setPlaying(null);
      if (all) setHeard(true);
    }
  }

  function toStage(next: Stage) {
    run.current++;
    stopAudio();
    setPlaying(null);
    setStage(next);
  }

  const textBlock = (
    <div data-testid="lesson-text-lines" style={{ borderTop: '1px solid var(--card-b)' }}>
      {lines.map((l, i) => (
        <button
          key={i}
          data-testid={`lesson-text-line-${i}`}
          onClick={() => void playFrom(i, false)}
          style={{
            width: '100%',
            textAlign: 'left',
            fontFamily: 'inherit',
            cursor: 'pointer',
            display: 'block',
            padding: '6px 4px',
            border: 'none',
            borderBottom: '1px solid var(--card-b)',
            borderRadius: 0,
            background: playing === i ? 'var(--bar-bg)' : 'transparent',
            color: 'var(--heading)',
          }}
        >
          <span lang="hr" style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>
            {l.who && <span style={{ fontWeight: 800, color: 'var(--subtext)' }}>{l.who}: </span>}
            {l.hr}
          </span>
          {showEn && (
            <span
              data-testid={`lesson-text-en-${i}`}
              style={{
                display: 'block',
                fontSize: 'var(--text-xs)',
                color: 'var(--subtext)',
                marginTop: 2,
              }}
            >
              {l.en}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const compact: React.CSSProperties = {
    padding: '7px 10px',
    fontSize: 'var(--text-sm)',
    minHeight: 0,
    whiteSpace: 'nowrap',
  };

  const failureNote = failure && (
    <div
      data-testid="lesson-text-audio-failed"
      role="status"
      style={{ marginTop: 10, fontSize: 'var(--text-sm)', color: 'var(--text)' }}
    >
      The recording couldn&apos;t be played. {failure} You can still read the {noun}.
    </div>
  );

  const heading = (
    <>
      <div style={eyebrowStyle(lesson.color)}>
        {isText ? 'Text' : 'Dialogue'} ·{' '}
        {stage === 'listen' ? '1 Listen' : stage === 'read' ? '2 Read' : '3 Questions'}
      </div>
      <p
        lang="hr"
        style={{
          fontSize: 'var(--text-md)',
          fontWeight: 800,
          margin: '0 0 8px',
          color: 'var(--heading)',
        }}
      >
        {slide.title as string}
      </p>
    </>
  );

  return (
    <div data-testid="lesson-text" data-stage={stage} style={{ paddingBottom: 24 }}>
      {stage === 'listen' && (
        <div style={card}>
          {heading}
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text)', margin: '0 0 12px' }}>
            Listen first, without reading. Catch what you can — play it as often as you like.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              className="b bp"
              data-testid="lesson-text-listen"
              onClick={() => void playFrom(0, true)}
            >
              🔊 {heard ? 'Listen again' : 'Listen'}
            </button>
            <button className="b" data-testid="lesson-text-show" onClick={() => toStage('read')}>
              {heard ? `Now read the ${noun} →` : 'Show the text'}
            </button>
          </div>
          {failureNote}
        </div>
      )}

      {stage === 'read' && (
        <div style={{ ...card, padding: '10px 12px' }}>
          {/* ONE COMPACT HEADER ROW, THEN THE WHOLE TEXT (owner report, 2026-11-15: the last
              lines of a dialogue sat under the lesson's bottom bar). The title, the three
              controls and an eight-line dialogue fit one phone screen; the way on to the
              questions is in the row, so it is in view however long the text is. */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
            <span style={{ ...eyebrowStyle(lesson.color), marginBottom: 0 }}>
              {isText ? 'Text' : 'Dialogue'} · 2 Read
            </span>
            <span
              lang="hr"
              style={{ fontSize: 'var(--text-sm)', fontWeight: 800, color: 'var(--heading)' }}
            >
              {slide.title as string}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
            <button
              className="b"
              data-testid="lesson-text-listen"
              onClick={() => void playFrom(0, true)}
              style={compact}
            >
              🔊 Listen
            </button>
            <button
              className="b"
              data-testid="lesson-text-english"
              aria-pressed={showEn}
              onClick={() => setShowEn(!showEn)}
              style={compact}
            >
              {showEn ? 'Hide English' : 'English'}
            </button>
            {questions.length > 0 && (
              <button
                className="b bp"
                data-testid="lesson-text-questions"
                onClick={() => toStage('questions')}
                style={{ ...compact, flex: 1 }}
              >
                Questions →
              </button>
            )}
          </div>
          {textBlock}
          {failureNote}
          {/* The same way on, at the end of the text: on a small phone a learner who has
              scrolled down to the last line should not have to scroll back up. */}
          {questions.length > 0 && (
            <button
              className="b bp"
              data-testid="lesson-text-questions-bottom"
              onClick={() => toStage('questions')}
              style={{ ...compact, width: '100%', marginTop: 8 }}
            >
              Questions →
            </button>
          )}
        </div>
      )}

      {stage === 'questions' && (
        <>
          <ExerciseSequence
            items={questions}
            label={`About the ${noun}`}
            color={lesson.color}
            done={done}
            onComplete={onComplete}
            onIndex={(i) => {
              setQIdx(i);
              setLookBack(false);
            }}
          />
          {!recall && (
            <div style={card}>
              <button
                className="b"
                data-testid="lesson-text-lookback"
                aria-expanded={lookBack}
                onClick={() => setLookBack(!lookBack)}
                style={{ width: '100%' }}
              >
                {lookBack ? `Hide the ${noun}` : `Look at the ${noun} again`}
              </button>
              {lookBack && <div style={{ marginTop: 10 }}>{textBlock}</div>}
            </div>
          )}
        </>
      )}
    </div>
  );
}
