// One exercise at a time, in order, with a Next button once the current one is
// settled. Reports completion when EVERY item is settled (right, shown or skipped),
// which is what lets AnimatedLesson release its Next button. Never scored.
import React, { useState } from 'react';
import ExerciseItem, { KIND_LABEL, kindOf } from './ExerciseItem';
import type { Exercise } from './types';

export default function ExerciseSequence({
  items,
  label,
  color,
  done,
  onComplete,
  nextTestId = 'ex-next-item',
  nextLabel = 'Next question →',
}: {
  items: Exercise[];
  label: string;
  color: string;
  /** The slide was already completed: reopen it with every item settled. */
  done: boolean;
  onComplete: () => void;
  nextTestId?: string;
  nextLabel?: string;
}) {
  const [idx, setIdx] = useState(done ? Math.max(0, items.length - 1) : 0);
  const [resolved, setResolved] = useState<boolean[]>(() => items.map(() => done));
  const item = items[idx];
  if (!item) return null;

  function settle() {
    const all = resolved.map((r, k) => (k === idx ? true : r));
    setResolved(all);
    if (all.every(Boolean)) onComplete();
  }

  const kind = kindOf(item);
  const eyebrow = `${label} · ${idx + 1} of ${items.length} · ${KIND_LABEL[kind] ?? kind} · not scored`;

  return (
    <>
      <ExerciseItem
        key={idx}
        item={item}
        eyebrow={eyebrow}
        color={color}
        seed={idx}
        settled={done}
        onSettle={settle}
      />
      {resolved[idx] && idx < items.length - 1 && (
        <button
          className="b bp"
          data-testid={nextTestId}
          style={{ width: '100%' }}
          onClick={() => setIdx(idx + 1)}
        >
          {nextLabel}
        </button>
      )}
    </>
  );
}
