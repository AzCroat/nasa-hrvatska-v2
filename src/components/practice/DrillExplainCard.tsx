// src/components/practice/DrillExplainCard.tsx
//
// Renders a useExplainError state as the prominent teaching card the McGame
// explanation established — under the drill's static feedback panel, only on
// wrong answers, gone by the next question.
//
// NULL MEANS "NOT ASKED", NOT "FAILED", and conflating the two is what the
// owner hit on 2026-09-17: the hook set null on every failure, this returned
// null for it, and `WrongAnswerHelp` had already spent the button — so the
// learner pressed for an explanation and got silence. A failure is now its own
// state and says what happened, per the feedback directive's "never render
// nothing on a feedback failure".

import React from 'react';
import { isExplainFailed, type ExplainState } from '../../hooks/useExplainError';

export default function DrillExplainCard({
  state,
  onRetry,
}: {
  state: ExplainState;
  /** Offered only when the failure is one a retry can actually clear. */
  onRetry?: () => void;
}) {
  if (state === null) return null;
  if (isExplainFailed(state)) {
    const f = state.failed;
    return (
      <div
        data-testid="drill-explain-failed"
        data-kind={f.kind}
        style={{
          marginTop: 10,
          padding: '10px 14px',
          background: 'var(--bar-bg, #f9fafb)',
          border: '1px solid var(--card-b, #e5e7eb)',
          borderRadius: 10,
          fontSize: 13,
          lineHeight: 1.6,
          color: 'var(--subtext)',
        }}
      >
        {/* The classifier's own sentence: a daily limit, a paused budget and a
            dropped connection each say what they are. */}
        {f.message}
        {f.retryable && onRetry && (
          <button
            data-testid="drill-explain-retry"
            onClick={onRetry}
            style={{
              display: 'block',
              marginTop: 6,
              background: 'none',
              border: 'none',
              color: 'var(--subtext)',
              fontSize: 12,
              fontWeight: 700,
              textDecoration: 'underline',
              cursor: 'pointer',
              fontFamily: 'inherit',
              padding: 0,
            }}
          >
            Try again
          </button>
        )}
      </div>
    );
  }
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
