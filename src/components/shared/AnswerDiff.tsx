// src/components/shared/AnswerDiff.tsx
//
// THE TWO WORDS, SIDE BY SIDE, WITH THE LETTERS THAT DIFFER MARKED (owner, 2026-11-12).
// A wrong-answer explanation that is correct and does not help is the problem this
// answers: the learner could not SEE what was different. This shows it, in the same
// underlined-ending style as the lesson charts, and says it in one plain sentence with
// no grammar word in it — so it is safe for a learner who has not been taught the case.
//
// It states only what the letters show (`lib/answerContrast.formDiff`), never a grammar
// claim. Two words that begin differently are shown as they are, unmarked, with no
// sentence: "only the ending is different" would be a guess there.

import React from 'react';
import { formDiff, diffSentence } from '../../lib/answerContrast';

const MARK: React.CSSProperties = {
  color: 'var(--ink-accent)',
  textDecoration: 'underline',
  textUnderlineOffset: 3,
  fontWeight: 800,
};

function Word({ text, from, marked }: { text: string; from: number; marked: boolean }) {
  if (!marked || from >= text.length) {
    return <span style={{ fontWeight: 800 }}>{text}</span>;
  }
  return (
    <span style={{ fontWeight: 800 }}>
      {text.slice(0, from)}
      <span data-testid="diff-letters" style={MARK}>
        {text.slice(from)}
      </span>
    </span>
  );
}

export default function AnswerDiff({ chosen, answer }: { chosen: string; answer: string }) {
  const d = formDiff(chosen, answer);
  if (!d) return null;
  const marked = d.kind === 'ending';
  const sentence = diffSentence(d);
  const row: React.CSSProperties = { display: 'flex', gap: 10, alignItems: 'baseline' };
  const label: React.CSSProperties = { width: 78, flexShrink: 0, color: 'var(--subtext)' };
  return (
    <div
      data-testid="answer-diff"
      role="group"
      aria-label={`You picked ${chosen}. The answer is ${answer}.`}
      style={{
        padding: '10px 12px',
        marginBottom: 8,
        borderRadius: 10,
        background: 'var(--card)',
        border: '1.5px solid var(--card-b)',
        fontSize: 15,
        lineHeight: 1.7,
      }}
    >
      <div style={row}>
        <span style={{ ...label, fontSize: 12 }}>You picked</span>
        <span data-testid="diff-chosen">
          <Word text={d.common + d.chosenTail} from={d.common.length} marked={marked} />
        </span>
        <span aria-hidden="true" style={{ color: 'var(--ink-error)' }}>
          ✗
        </span>
      </div>
      <div style={row}>
        <span style={{ ...label, fontSize: 12 }}>The answer</span>
        <span data-testid="diff-answer">
          <Word text={d.common + d.answerTail} from={d.common.length} marked={marked} />
        </span>
        <span aria-hidden="true" style={{ color: 'var(--ink-green)' }}>
          ✓
        </span>
      </div>
      {sentence && (
        <p
          data-testid="diff-sentence"
          style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--text)' }}
        >
          {sentence}
        </p>
      )}
    </div>
  );
}
