// True / false: two buttons, the standard hint -> second try -> answer contract.
import React, { useState } from 'react';
import { Feedback, optionStyle, PromptCard, useAttempts } from './shared';
import type { ItemProps, TrueFalseExercise } from './types';

export default function TrueFalseItem({
  item,
  onSettle,
  eyebrow,
  color,
}: ItemProps<TrueFalseExercise>) {
  const a = useAttempts(onSettle);
  const [tried, setTried] = useState<boolean[]>([]);

  function pick(v: boolean) {
    if (a.settled || tried.includes(v)) return;
    setTried([...tried, v]);
    if (v === item.answer) a.right();
    else a.miss();
  }

  const btn = (v: boolean, label: string, id: string) => {
    const right = a.settled && v === item.answer;
    const wrong = tried.includes(v) && v !== item.answer;
    return (
      <button
        key={id}
        data-testid={id}
        disabled={a.settled || tried.includes(v)}
        style={{
          ...optionStyle(right ? 'right' : wrong ? 'wrong' : 'idle', a.settled || wrong),
          flex: 1,
          textAlign: 'center',
          marginBottom: 0,
        }}
        onClick={() => pick(v)}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {btn(true, 'Točno · True', 'ex-tf-true')}
        {btn(false, 'Netočno · False', 'ex-tf-false')}
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
