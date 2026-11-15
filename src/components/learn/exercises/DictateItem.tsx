// Dictate: AUDIO-FIRST. Type what you heard. The input is locked until the
// recording has played to the end; a failed play offers Try again and a skip that
// settles the item as skipped. Judged by typedAnswer.
import React from 'react';
import { useHeardGate } from '../../../hooks/useHeardGate';
import AudioFailureNotice from '../../shared/AudioFailureNotice';
import { PlayButton } from './ListenItem';
import { Feedback, PromptCard, useAttempts } from './shared';
import TypedBox, { useTyped } from './TypedBox';
import type { DictateExercise, ItemProps } from './types';

export default function DictateItem({
  item,
  onSettle,
  eyebrow,
  color,
}: ItemProps<DictateExercise>) {
  const a = useAttempts(onSettle);
  const gate = useHeardGate();
  const t = useTyped(item.answer, item.accept, (v) => {
    if (v === 'right') a.right();
    else a.miss();
  });
  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q="Listen, then type what you hear." />
      {!a.settled && (
        <PlayButton
          testId="ex-dictate-play"
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
      {!a.settled && (
        <TypedBox
          inputId="ex-dictate-input"
          draft={t.draft}
          setDraft={t.setDraft}
          submit={t.submit}
          disabled={!gate.heard}
          placeholder="Type what you heard…"
        />
      )}
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={t.last === 'accents' ? `Nearly — mind the č, ć, đ, š, ž. ${item.hint}` : item.hint}
        explanation={item.explanation}
        revealed={a.settled ? item.answer : undefined}
      />
    </>
  );
}
