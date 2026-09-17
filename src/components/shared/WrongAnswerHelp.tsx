// src/components/shared/WrongAnswerHelp.tsx
//
// The wrong-answer panel (owner recommendation 7, 2026-09-07). One component,
// mounted once in `ModeDrill`, so all 109 engine-backed drills gain it at once
// — the leverage the engine was extracted for.
//
// Three layers, cheapest first (the rec #6 pattern):
//   1. the item's authored tip, which the drill already renders above this
//   2. the rule-based contrast — free, offline, instant
//   3. the AI explanation, behind a button the learner presses
//
// A FOURTH THING, and it is not a layer: the way back to the TEACHING. The
// three layers above all explain the ITEM. A learner who has just got the same
// structure wrong twice does not want a better gloss of one question, they want
// the lesson — and until the Learning Center existed there was nowhere to send
// them. `lessonsTeachingScreen` runs the teach→practice coupling backwards, so
// the drill names the lesson that taught it; the button is absent when the maps
// cannot name one, rather than opening a search and hoping.
//
// Layer 3 is deliberately NOT automatic. A Claude call on every wrong answer
// across the practice programme is a per-learner cost on the commonest event in
// the app, against a $10/month ceiling and a 300-turn daily quota. Pressing
// "Why?" is the learner saying the free layers were not enough.

import React, { useState } from 'react';
import { contrastAnswers } from '../../lib/answerContrast';
import { lessonsTeachingScreen, requestLessonLookup } from '../../lib/lessonLookup';
import { useApp } from '../../context/AppContext';
import { useExplainError } from '../../hooks/useExplainError';
import DrillExplainCard from '../practice/DrillExplainCard';

interface Props {
  /** What the learner picked. */
  chosen: string;
  /** What the item wanted. */
  answer: string;
  /** The Croatian prompt, sent as context if the learner asks for more. */
  context: string;
  /** The explain-error `type` tag, e.g. 'case_drill'. */
  type?: string;
  level?: string;
  /**
   * The drill's own screen id. Used ONLY to name the lesson that teaches it; a
   * drill that does not pass one simply gets no "Learn this" link.
   */
  screen?: string;
}

export default function WrongAnswerHelp({
  chosen,
  answer,
  context,
  type = 'drill',
  level = 'B1',
  screen,
}: Props) {
  const contrast = React.useMemo(() => contrastAnswers(chosen, answer), [chosen, answer]);
  const { explain, request } = useExplainError(type, level);
  const [asked, setAsked] = useState(false);
  const { setScr } = useApp();
  const teaching = React.useMemo(() => (screen ? lessonsTeachingScreen(screen) : []), [screen]);

  const ask = () => {
    setAsked(true);
    void request(chosen, answer, context);
  };

  // Hand the lesson(s) to the Learning Center, which owns the launcher. Looking
  // something up is not credit and never was: this navigates and writes nothing.
  const learn = () => {
    requestLessonLookup(teaching);
    setScr('learning_center');
  };

  return (
    <div data-testid="wrong-answer-help" style={{ marginTop: 10 }}>
      {contrast && (
        <div
          data-testid="answer-contrast"
          style={{
            padding: '10px 12px',
            borderRadius: 10,
            background: 'var(--card)',
            border: '1.5px solid var(--card-b)',
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          {contrast.headline && (
            <p data-testid="contrast-headline" style={{ margin: '0 0 8px', fontWeight: 700 }}>
              {contrast.headline}
            </p>
          )}
          <ContrastLine
            testid="contrast-chosen"
            label="You picked"
            word={contrast.chosen.word}
            readings={contrast.chosen.readings}
          />
          <ContrastLine
            testid="contrast-answer"
            label="The answer"
            word={contrast.answer.word}
            readings={contrast.answer.readings}
          />
        </div>
      )}

      {!asked && (
        <button
          data-testid="wrong-answer-why"
          onClick={ask}
          style={{
            marginTop: 8,
            background: 'none',
            border: 'none',
            color: 'var(--subtext)',
            fontSize: 12,
            fontWeight: 700,
            textDecoration: 'underline',
            cursor: 'pointer',
            fontFamily: 'inherit',
            padding: 0,
          }}
        >
          Explain this one to me
        </button>
      )}
      {asked && <DrillExplainCard state={explain} onRetry={ask} />}

      {teaching.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <button
            data-testid="wrong-answer-learn"
            data-lessons={teaching.join(',')}
            onClick={learn}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--subtext)',
              fontSize: 12,
              fontWeight: 700,
              textDecoration: 'underline',
              cursor: 'pointer',
              fontFamily: 'inherit',
              padding: 0,
            }}
          >
            {teaching.length === 1 ? 'Learn this properly' : 'Lessons that teach this'}
          </button>
        </div>
      )}
    </div>
  );
}

function ContrastLine({
  testid,
  label,
  word,
  readings,
}: {
  testid: string;
  label: string;
  word: string;
  readings: string[];
}) {
  return (
    <div data-testid={testid} style={{ marginBottom: 4 }}>
      <span style={{ color: 'var(--subtext)' }}>{label} </span>
      <strong lang="hr">{word}</strong>
      {readings.length > 0 && (
        <span style={{ color: 'var(--subtext)' }}>
          {' — '}
          {readings.length === 1 ? readings[0] : `can be ${readings.join(', or ')}`}
        </span>
      )}
    </div>
  );
}
