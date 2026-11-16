// ─── LessonTextSlide.tsx ──────────────────────────────────────────────────────
// A short dialogue or text inside a lesson, run the way a class runs it — three
// stages on one slide (owner direction, 2026-11-15):
//
//   1. LISTEN — the recording plays and the text is HIDDEN, so the first meeting
//      with the language is by ear. Reading is never gated on audio: the lesson's
//      Next button opens the text at any time, and a failed play opens it by itself.
//   2. READ — the WHOLE text. Tap a line to hear it. The English is hidden and one
//      deliberate tap away.
//   3. QUESTIONS — on their own screen, the question first. Questions go through the
//      exercise player (hint -> second try -> answer; never scored).
//
// ONE WAY FORWARD, ALWAYS IN THE SAME PLACE. This slide has no "continue" button of
// its own. It tells the lesson what its Next button should do at each stage (`onNav`),
// so the learner presses the same button, in the same spot, all the way through a
// lesson. Earlier drafts put a second and then a third button on the reading screen;
// the owner's verdict was that it was neither necessary nor clear.
//
// THE TEXT HAS ITS OWN AREA between the lesson header and the bottom bar. On an
// ordinary phone the whole dialogue fits. On a small one it scrolls INSIDE that area,
// with a soft fade where more follows — the header stays put and nothing is chopped
// mid-line under the bar.
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

/** What the lesson's Next / Prev buttons do while this slide is mid-way through its stages.
 *  The button keeps saying "Next →" (one button, one label, one place); `label` is its
 *  accessible name, which says where it leads. */
export interface StepNav {
  label: string;
  advance: () => void;
  back?: () => void;
}

type Stage = 'listen' | 'read' | 'questions';

export default function LessonTextSlide({
  slide,
  lesson,
  done,
  onComplete,
  onNav,
}: {
  slide: BaseSlide;
  lesson: LessonMeta;
  done: boolean;
  onComplete: () => void;
  /** Tells the lesson what its Next button does at this stage; null = behave as usual. */
  onNav?: (nav: StepNav | null) => void;
}) {
  const lines = (Array.isArray(slide.lines) ? slide.lines : []) as TextLine[];
  const questions = (Array.isArray(slide.questions) ? slide.questions : []) as Exercise[];
  const hasQuestions = questions.length > 0;
  // Coming back to a finished text opens on the text itself, not on the hidden stage.
  const [stage, setStage] = useState<Stage>(done ? 'read' : 'listen');
  const [showEn, setShowEn] = useState(false);
  const [lookBack, setLookBack] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [heard, setHeard] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);
  const [failure, setFailure] = useState<string | null>(null);
  const [moreBelow, setMoreBelow] = useState(false);
  const run = useRef(0);
  const scroller = useRef<HTMLDivElement>(null);
  const isText = slide.kind === 'text';
  const noun = isText ? 'text' : 'dialogue';
  // A RECALL question ("Without looking back at the dialogue: …") tests what the learner
  // took in by listening and reading, so the way back to the text is not offered beside it.
  const recall = /^without looking back/i.test(
    String((questions[qIdx] as { q?: string } | undefined)?.q ?? ''),
  );

  useEffect(
    () => () => {
      run.current++; // stops a play-all run at its next line
      stopAudio();
    },
    [],
  );
  // A text with no questions never holds Next.
  useEffect(() => {
    if (!hasQuestions && !done) onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toStage(next: Stage) {
    run.current++;
    stopAudio();
    setPlaying(null);
    setStage(next);
  }

  // The lesson's own Next button is the way forward at every stage.
  useEffect(() => {
    if (!onNav) return undefined;
    if (stage === 'listen') {
      onNav({ label: `Read the ${noun}`, advance: () => toStage('read') });
    } else if (stage === 'read' && hasQuestions && !done) {
      onNav({
        label: 'Go to the questions',
        advance: () => toStage('questions'),
        back: () => toStage('listen'),
      });
    } else onNav(null);
    return () => onNav(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, done]);

  // Is there more text below the visible part of the reading area?
  function measure() {
    const el = scroller.current;
    setMoreBelow(!!el && el.scrollHeight - el.scrollTop - el.clientHeight > 4);
  }
  useEffect(() => {
    measure();
  }, [stage, showEn, lookBack]);

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

  const small: React.CSSProperties = {
    padding: '7px 12px',
    fontSize: 'var(--text-sm)',
    minHeight: 0,
    whiteSpace: 'nowrap',
  };
  const fade = 'linear-gradient(to bottom, #000 calc(100% - 36px), transparent)';

  const textLines = lines.map((l, i) => (
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
        padding: '7px 4px',
        border: 'none',
        borderTop: i === 0 ? 'none' : '1px solid var(--card-b)',
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
  ));

  const failureNote = failure && (
    <div
      data-testid="lesson-text-audio-failed"
      role="status"
      style={{ marginTop: 8, fontSize: 'var(--text-sm)', color: 'var(--text)' }}
    >
      The recording couldn&apos;t be played. {failure} You can still read the {noun}.
    </div>
  );

  const header = (step: string) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
      <span style={{ ...eyebrowStyle(lesson.color), marginBottom: 0 }}>
        {isText ? 'Text' : 'Dialogue'} · {step}
      </span>
      <span
        lang="hr"
        style={{ fontSize: 'var(--text-md)', fontWeight: 800, color: 'var(--heading)' }}
      >
        {slide.title as string}
      </span>
    </div>
  );

  return (
    <div data-testid="lesson-text" data-stage={stage}>
      {stage === 'listen' && (
        <div style={card}>
          {header('1 of 3 · Listen')}
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text)', margin: '10px 0 14px' }}>
            Listen first, without reading. Catch what you can — play it as often as you like.
          </p>
          <button
            className="b bp"
            data-testid="lesson-text-listen"
            onClick={() => void playFrom(0, true)}
            style={{ width: '100%' }}
          >
            🔊 {heard ? 'Listen again' : 'Listen'}
          </button>
          {failureNote}
        </div>
      )}

      {stage === 'read' && (
        <div style={{ ...card, padding: '12px 14px' }}>
          <div style={{ marginBottom: 8 }}>{header(hasQuestions ? '2 of 3 · Read' : 'Read')}</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <button
              className="b"
              data-testid="lesson-text-listen"
              onClick={() => void playFrom(0, true)}
              style={small}
            >
              🔊 Listen again
            </button>
            <button
              className="b"
              data-testid="lesson-text-english"
              aria-pressed={showEn}
              onClick={() => setShowEn(!showEn)}
              style={small}
            >
              {showEn ? 'Hide English' : 'Show English'}
            </button>
          </div>
          <div
            ref={scroller}
            onScroll={measure}
            data-testid="lesson-text-lines"
            data-more-below={moreBelow ? '1' : '0'}
            style={{
              // Fits between the lesson header and the bottom bar on any phone; a longer
              // text scrolls inside this area and fades where more follows.
              maxHeight: 'max(180px, calc(100dvh - 400px))',
              overflowY: 'auto',
              borderTop: '1px solid var(--card-b)',
              WebkitMaskImage: moreBelow ? fade : undefined,
              maskImage: moreBelow ? fade : undefined,
            }}
          >
            {textLines}
          </div>
          {/* A small phone cannot show a long dialogue at once: say so, plainly. */}
          {moreBelow && (
            <div
              data-testid="lesson-text-more"
              aria-hidden="true"
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                color: 'var(--subtext)',
                paddingTop: 4,
              }}
            >
              ↓ scroll for the rest
            </div>
          )}
          {failureNote}
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
            <div style={{ ...card, padding: '10px 14px' }}>
              <button
                className="b"
                data-testid="lesson-text-lookback"
                aria-expanded={lookBack}
                onClick={() => setLookBack(!lookBack)}
                style={{ ...small, width: '100%' }}
              >
                {lookBack ? `Hide the ${noun}` : `Look at the ${noun} again`}
              </button>
              {lookBack && <div style={{ marginTop: 8 }}>{textLines}</div>}
            </div>
          )}
        </>
      )}
    </div>
  );
}
