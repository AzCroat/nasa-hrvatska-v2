import React from 'react';
import { H, speak, shMemo } from '../../../data';
import { ADJOPPOSITES } from '../../../data';
import { clickable } from '../../../lib/clickable';

interface Props {
  goBack: () => void;
}

function OppositesScreen({ goBack }: Props) {
  return (
    <div className="scr-wrap">
      {H('↔️ Opposites', 'Learn adjective pairs with animals', goBack)}
      {shMemo('ao', ADJOPPOSITES, undefined).map(function (
        p: { a: string; b: string; ex: { a: string; b: string } },
        i: number,
      ) {
        return (
          <div
            key={i}
            className="c"
            style={{
              marginBottom: 10,
              padding: '10px 14px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
              {...clickable(function () {
                speak(p.ex.a);
              }, 'Hear ' + p.ex.a)}
            >
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--success)' }}>{p.a}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-muted-warm)' }}>{p.ex.a}</div>
            </div>
            <div style={{ fontSize: 18, color: '#d6d3d1' }}>↔</div>
            <div
              style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
              {...clickable(function () {
                speak(p.ex.b);
              }, 'Hear ' + p.ex.b)}
            >
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--error)' }}>{p.b}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-muted-warm)' }}>{p.ex.b}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OppositesScreen;
