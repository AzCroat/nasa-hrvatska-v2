// Sort: tap an item, then tap the group it belongs to. No drag-and-drop, so it is
// keyboard-operable. A correct placement locks the item into its group; a wrong one
// is the miss.
import React, { useState } from 'react';
import { card, chipStyle, Feedback, PromptCard, useAttempts } from './shared';
import type { ItemProps, SortExercise } from './types';

export default function SortItem({ item, onSettle, eyebrow, color }: ItemProps<SortExercise>) {
  const a = useAttempts(onSettle);
  const [sel, setSel] = useState<number | null>(null);
  const [placed, setPlaced] = useState<number[]>([]);
  const [flash, setFlash] = useState<number | null>(null);

  const shown = a.status === 'shown';
  const inGroup = (i: number) => shown || placed.includes(i);

  function pickItem(i: number) {
    if (a.settled || inGroup(i)) return;
    setSel(i);
    setFlash(null);
  }
  function pickGroup(g: number) {
    if (a.settled || sel === null) return;
    if (item.items[sel]!.group === g) {
      const next = [...placed, sel];
      setPlaced(next);
      setSel(null);
      setFlash(null);
      if (next.length === item.items.length) a.right();
    } else {
      setFlash(sel);
      setSel(null);
      a.miss();
    }
  }

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        {item.items.map((it, i) =>
          inGroup(i) ? null : (
            <button
              key={i}
              lang="hr"
              data-testid={`ex-sort-item-${i}`}
              aria-pressed={sel === i}
              disabled={a.settled}
              style={chipStyle(flash === i ? 'wrong' : sel === i ? 'selected' : 'idle', a.settled)}
              onClick={() => pickItem(i)}
            >
              {it.hr}
            </button>
          ),
        )}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        {item.groups.map((name, g) => (
          <button
            key={g}
            data-testid={`ex-sort-group-${g}`}
            disabled={a.settled || sel === null}
            onClick={() => pickGroup(g)}
            style={{
              ...card,
              flex: '1 1 140px',
              marginBottom: 0,
              textAlign: 'left',
              fontFamily: 'inherit',
              cursor: a.settled || sel === null ? 'default' : 'pointer',
              color: 'var(--heading)',
            }}
          >
            <strong style={{ display: 'block', marginBottom: 6 }}>{name}</strong>
            <span lang="hr" data-testid={`ex-sort-placed-${g}`} style={{ fontWeight: 700 }}>
              {item.items
                .filter((it, i) => it.group === g && inGroup(i))
                .map((it) => it.hr)
                .join(' · ')}
            </span>
          </button>
        ))}
      </div>
      <Feedback
        status={a.status}
        misses={a.misses}
        hint={item.hint}
        explanation={item.explanation}
      />
    </>
  );
}
