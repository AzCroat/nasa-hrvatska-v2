// src/components/practice/DrillExplainCard.tsx
//
// Renders a useExplainError state as the prominent teaching card the McGame
// explanation established — under the drill's static feedback panel, only on
// wrong answers, gone by the next question. Null state renders nothing (the
// hook fails quietly; the static tip is still there).

import React from 'react';
import type { ExplainState } from '../../hooks/useExplainError';

export default function DrillExplainCard({ state }: { state: ExplainState }) {
  if (state === null) return null;
  if (state === 'loading') {
    return (
      <div
        style={{
          marginTop: 10,
          padding: '10px 14px',
          background: 'var(--bar-bg, #f9fafb)',
          border: '1px solid var(--card-b, #e5e7eb)',
          borderRadius: 10,
          fontSize: 13,
          color: 'var(--subtext)',
        }}
        data-testid="drill-explain-loading"
      >
        🤖 Getting a plain-English explanation…
      </div>
    );
  }
  return (
    <div
      style={{
        marginTop: 10,
        padding: '12px 14px',
        background: 'linear-gradient(135deg, rgba(139,92,246,.08), rgba(59,130,246,.08))',
        border: '1px solid rgba(139,92,246,.35)',
        borderRadius: 10,
      }}
      data-testid="drill-explain-card"
    >
      <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 4, color: 'var(--heading)' }}>
        🤖 Why {state.rule ? `— ${state.rule}` : ''}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text, #374151)' }}>
        {state.explanation}
      </div>
      {state.tip && (
        <div style={{ fontSize: 12, marginTop: 6, color: 'var(--subtext)' }}>💡 {state.tip}</div>
      )}
      {state.example && (
        <div style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic', color: 'var(--subtext)' }}>
          {state.example}
        </div>
      )}
    </div>
  );
}
