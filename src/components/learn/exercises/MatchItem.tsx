// Match: left column fixed, right column shuffled (deterministically). Tap a left
// entry, then a right one. A correct pair locks; a wrong pair is the miss.
import React, { useMemo, useState } from 'react';
import { chipStyle, Feedback, PromptCard, useAttempts } from './shared';
import { seededOrder } from './seeded';
import type { ItemProps, MatchExercise } from './types';

export default function MatchItem({
  item,
  onSettle,
  eyebrow,
  color,
  seed,
}: ItemProps<MatchExercise>) {
  const a = useAttempts(onSettle);
  const order = useMemo(() => seededOrder(item.pairs.length, seed), [item.pairs.length, seed]);
  const [sel, setSel] = useState<number | null>(null);
  const [locked, setLocked] = useState<number[]>([]);
  const [flash, setFlash] = useState<{ l: number; r: number } | null>(null);

  const allLocked = (l: number[]) => l.length === item.pairs.length;
  const isLocked = (i: number) => a.status === 'shown' || locked.includes(i);

  function pickLeft(i: number) {
    if (a.settled || isLocked(i)) return;
    setSel(i);
    setFlash(null);
  }
  function pickRight(pairIdx: number) {
    if (a.settled || sel === null || isLocked(pairIdx)) return;
    if (pairIdx === sel) {
      const next = [...locked, sel];
      setLocked(next);
      setSel(null);
      setFlash(null);
      if (allLocked(next)) a.right();
    } else {
      setFlash({ l: sel, r: pairIdx });
      setSel(null);
      a.miss();
    }
  }

  const revealed =
    a.status === 'shown' ? item.pairs.map((p) => `${p[0]} = ${p[1]}`).join(' · ') : undefined;

  return (
    <>
      <PromptCard
        eyebrow={eyebrow}
        color={color}
        q={item.q || 'Match each item on the left to its partner.'}
      />
      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {item.pairs.map((p, i) => (
            <button
              key={i}
              lang="hr"
              data-testid={`ex-match-left-${i}`}
              aria-pressed={sel === i}
              disabled={a.settled || isLocked(i)}
              style={chipStyle(
                isLocked(i) ? 'right' : flash?.l === i ? 'wrong' : sel === i ? 'selected' : 'idle',
                isLocked(i),
              )}
              onClick={() => pickLeft(i)}
            >
              {p[0]}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {order.map((pairIdx, pos) => (
            <button
              key={pairIdx}
              lang="hr"
              data-testid={`ex-match-right-${pos}`}
              data-pair={pairIdx}
              disabled={a.settled || isLocked(pairIdx) || sel === null}
              style={chipStyle(
                isLocked(pairIdx) ? 'right' : flash?.r === pairIdx ? 'wrong' : 'idle',
                isLocked(pairIdx),
              )}
              onClick={() => pickRight(pairIdx)}
            >
              {item.pairs[pairIdx]![1]}
            </button>
          ))}
        </div>
      </div>
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={item.hint}
        explanation={item.explanation}
        revealed={revealed}
      />
    </>
  );
}
