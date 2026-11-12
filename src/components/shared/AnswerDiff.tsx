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

/**
 * The drill's own sentence with the correct word put in the blank — "Vidim ____." →
 * "Vidim kavu." — or null when the prompt has no blank to fill. A trailing bracketed cue
 * is dropped: it belongs to the question, not to the finished sentence.
 */
export function filledSentence(prompt: string | undefined, answer: string): string | null {
  if (!prompt || !/_{2,}/.test(prompt)) return null;
  const cleaned = prompt.replace(/\s*\([^)]*\)(?=[.!?…]*\s*$)/, '').trim();
  return cleaned.replace(/_{2,}/, answer);
}

export default function AnswerDiff({
  chosen,
  answer,
  sentence: prompt,
}: {
  chosen: string;
  answer: string;
  /** The drill's prompt, so the correct word can be shown inside its sentence. */
  sentence?: string;
}) {
  const d = formDiff(chosen, answer);
  if (!d) return null;
  const inSentence = filledSentence(prompt, answer);
  const at = inSentence ? inSentence.indexOf(answer) : -1;
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
      {inSentence && at >= 0 && (
        <p
          data-testid="diff-in-sentence"
          style={{ margin: '8px 0 0', fontSize: 15, lineHeight: 1.6, color: 'var(--text)' }}
        >
          <span style={{ fontSize: 12, color: 'var(--subtext)' }}>In the sentence: </span>
          {inSentence.slice(0, at)}
          <span style={MARK}>{answer}</span>
          {inSentence.slice(at + answer.length)}
        </p>
      )}
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
