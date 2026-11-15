// Transform: rewrite the shown sentence as instructed. Typed, judged on the whole
// sentence by typedAnswer.
import React from 'react';
import { card, Feedback, PromptCard, useAttempts } from './shared';
import TypedBox, { useTyped } from './TypedBox';
import type { ItemProps, TransformExercise } from './types';

export default function TransformItem({
  item,
  onSettle,
  eyebrow,
  color,
}: ItemProps<TransformExercise>) {
  const a = useAttempts(onSettle);
  const t = useTyped(item.answer, item.accept, (v) => {
    if (v === 'right') a.right();
    else a.miss();
  });
  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      <div
        lang="hr"
        data-testid="ex-transform-from"
        style={{ ...card, fontWeight: 800, color: 'var(--heading)' }}
      >
        {item.from}
      </div>
      {!a.settled && (
        <TypedBox
          inputId="ex-transform-input"
          draft={t.draft}
          setDraft={t.setDraft}
          submit={t.submit}
          disabled={false}
        />
      )}
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={t.last === 'accents' ? `Nearly — mind the č, ć, đ, š, ž. ${item.hint}` : item.hint}
        explanation={item.explanation}
        revealed={a.status === 'shown' ? item.answer : undefined}
      />
    </>
  );
}
