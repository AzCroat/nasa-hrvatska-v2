// Order: shuffled word tiles. Tap a tile to add it to the answer line, tap a placed
// tile to take it back. Check when every tile is placed.
import React, { useMemo, useState } from 'react';
import { card, chipStyle, Feedback, PromptCard, useAttempts } from './shared';
import { seededOrder } from './seeded';
import type { ItemProps, OrderExercise } from './types';

// Capitals and punctuation ride on the tiles ("Sutra", "kino."), so another correct
// order built from the same tiles can never equal an accepted sentence letter for
// letter. The ORDER of the words is what is tested: compare without case or punctuation.
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[.,!?;:"'„”“]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export default function OrderItem({
  item,
  onSettle,
  eyebrow,
  color,
  seed,
}: ItemProps<OrderExercise>) {
  const a = useAttempts(onSettle);
  const order = useMemo(() => seededOrder(item.words.length, seed), [item.words.length, seed]);
  const [placed, setPlaced] = useState<number[]>([]); // indices into item.words

  const correct = item.words.join(' ');
  const full = placed.length === item.words.length;

  function check() {
    if (a.settled || !full) return;
    const said = norm(placed.map((i) => item.words[i]).join(' '));
    const ok = [correct, ...(item.accept ?? [])].some((s) => norm(s) === said);
    if (ok) a.right();
    else a.miss();
  }

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      <div
        data-testid="ex-order-line"
        lang="hr"
        style={{
          ...card,
          minHeight: 56,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          alignItems: 'center',
        }}
      >
        {a.status === 'shown' ? (
          <strong style={{ color: 'var(--ink-error)' }}>{correct}</strong>
        ) : (
          placed.map((wi, k) => (
            <button
              key={wi}
              data-testid={`ex-order-placed-${k}`}
              disabled={a.settled}
              style={chipStyle(a.status === 'right' ? 'right' : 'idle', a.settled)}
              onClick={() => setPlaced(placed.filter((x) => x !== wi))}
            >
              {item.words[wi]}
            </button>
          ))
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }} lang="hr">
        {order.map((wi, pos) => (
          <button
            key={wi}
            data-testid={`ex-order-tile-${pos}`}
            disabled={a.settled || placed.includes(wi)}
            style={{
              ...chipStyle('idle', a.settled || placed.includes(wi)),
              opacity: placed.includes(wi) ? 0.35 : 1,
            }}
            onClick={() => setPlaced([...placed, wi])}
          >
            {item.words[wi]}
          </button>
        ))}
      </div>
      {!a.settled && (
        <button
          className="b bp"
          data-testid="ex-check"
          style={{ width: '100%', marginBottom: 12 }}
          disabled={!full}
          onClick={check}
        >
          Check
        </button>
      )}
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={item.hint}
        explanation={item.explanation}
      />
    </>
  );
}
