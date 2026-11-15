// Listen: AUDIO-FIRST — the Croatian is not shown until the item is settled. The
// options stay locked until the recording has played to the end (useHeardGate); a
// failed play names its cause and offers Try again and a skip that settles the item
// as skipped (not right, not wrong).
import React, { useState } from 'react';
import { useHeardGate } from '../../../hooks/useHeardGate';
import AudioFailureNotice from '../../shared/AudioFailureNotice';
import { Feedback, optionStyle, PromptCard, useAttempts } from './shared';
import type { ItemProps, ListenExercise } from './types';

export function PlayButton({
  testId,
  status,
  onPlay,
}: {
  testId: string;
  status: string;
  onPlay: () => void;
}) {
  return (
    <button
      className="b bp"
      data-testid={testId}
      data-audio-status={status}
      disabled={status === 'playing'}
      onClick={onPlay}
      style={{ width: '100%', marginBottom: 12 }}
    >
      {status === 'playing' ? '🔊 Playing…' : status === 'played' ? '🔊 Play again' : '🔊 Play'}
    </button>
  );
}

export default function ListenItem({ item, onSettle, eyebrow, color }: ItemProps<ListenExercise>) {
  const a = useAttempts(onSettle);
  const gate = useHeardGate();
  const [tried, setTried] = useState<number[]>([]);
  const locked = !gate.heard || a.settled;

  function choose(i: number) {
    if (locked || tried.includes(i)) return;
    setTried([...tried, i]);
    if (i === item.correct) a.right();
    else a.miss();
  }

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      {!a.settled && (
        <PlayButton
          testId="ex-listen-play"
          status={gate.status}
          onPlay={() => void gate.play(item.audio)}
        />
      )}
      {gate.status === 'failed' && !a.settled && (
        <AudioFailureNotice
          testId="ex-audio"
          failure={gate.failure}
          onRetry={() => void gate.play(item.audio)}
          onSkip={() => a.settle('skipped')}
        />
      )}
      {item.options.map((o, i) => (
        <button
          key={i}
          lang="hr"
          data-testid={`ex-listen-option-${i}`}
          disabled={locked || tried.includes(i)}
          style={optionStyle(
            a.settled && i === item.correct && a.status !== 'skipped'
              ? 'right'
              : tried.includes(i)
                ? 'wrong'
                : 'idle',
            locked || tried.includes(i),
          )}
          onClick={() => choose(i)}
        >
          {o}
        </button>
      ))}
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={item.hint}
        explanation={item.explanation}
        revealed={a.settled ? item.audio : undefined}
      />
    </>
  );
}
