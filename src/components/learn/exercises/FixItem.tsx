// Fix: one word in the sentence is wrong. Tap it; the corrected sentence appears.
// Tapping any other word is a miss.
import React, { useState } from 'react';
import { card, chipStyle, Feedback, PromptCard, useAttempts } from './shared';
import type { FixExercise, ItemProps } from './types';

export default function FixItem({ item, onSettle, eyebrow, color }: ItemProps<FixExercise>) {
  const a = useAttempts(onSettle);
  const [tried, setTried] = useState<number[]>([]);
  const fixed = item.words.map((w, i) => (i === item.wrong ? item.answer : w)).join(' ');
  const reveal = a.settled && a.status !== 'skipped';

  function tap(i: number) {
    if (a.settled || tried.includes(i)) return;
    setTried([...tried, i]);
    if (i === item.wrong) a.right();
    else a.miss();
  }

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q || 'One word is wrong. Tap it.'} />
      <div
        lang="hr"
        style={{ ...card, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}
      >
        {item.words.map((w, i) => (
          <button
            key={i}
            data-testid={`ex-fix-word-${i}`}
            disabled={a.settled || tried.includes(i)}
            style={chipStyle(
              reveal && i === item.wrong ? 'right' : tried.includes(i) ? 'wrong' : 'idle',
              a.settled || tried.includes(i),
            )}
            onClick={() => tap(i)}
          >
            {w}
          </button>
        ))}
      </div>
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={item.hint}
        explanation={item.explanation}
        revealed={reveal ? fixed : undefined}
      />
    </>
  );
}
