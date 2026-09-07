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
// Layer 3 is deliberately NOT automatic. A Claude call on every wrong answer
// across the practice programme is a per-learner cost on the commonest event in
// the app, against a $10/month ceiling and a 300-turn daily quota. Pressing
// "Why?" is the learner saying the free layers were not enough.

import React, { useState } from 'react';
import { contrastAnswers } from '../../lib/answerContrast';
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
}

export default function WrongAnswerHelp({
  chosen,
  answer,
  context,
  type = 'drill',
  level = 'B1',
}: Props) {
  const contrast = React.useMemo(() => contrastAnswers(chosen, answer), [chosen, answer]);
  const { explain, request } = useExplainError(type, level);
  const [asked, setAsked] = useState(false);

  const ask = () => {
    setAsked(true);
    void request(chosen, answer, context);
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
      {asked && <DrillExplainCard state={explain} />}
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
