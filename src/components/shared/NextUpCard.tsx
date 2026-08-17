/**
 * src/components/shared/NextUpCard.tsx
 *
 * The recommended action pinned atop a tab (owner directive, 2026-08-16:
 * "the user should never be able to navigate to content [without guidance] —
 * something should always be recommended"). A tab that opens as a plain menu
 * still leaves the choice to the learner; this card leads with the SINGLE
 * best next action from the same engine as the post-completion prompt
 * (useNextStepEngine → lib/nextStep.ts), so a menu is never just a menu.
 *
 * Recomputes on every mount — a tab visit is a fresh decision point.
 */

import { useState } from 'react';
import { type NextStep } from '../../lib/nextStep.js';
import { useNextStepEngine } from '../../hooks/useNextStepEngine.js';

export default function NextUpCard() {
  const { computeStep, launch } = useNextStepEngine();
  // Once per mount: the recommendation for THIS visit. (Lazy initializer —
  // never recomputed on re-render, so the card can't flicker mid-visit.)
  const [step] = useState<NextStep | null>(computeStep);

  if (!step) return null;

  return (
    <div
      data-testid="next-up-card"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 15px',
        marginBottom: 16,
        background: 'linear-gradient(135deg,#0e7490,#0a5c73)',
        borderRadius: 14,
        color: '#fff',
        boxShadow: '0 4px 18px rgba(10,92,115,0.25)',
      }}
    >
      <span style={{ fontSize: 24, flexShrink: 0 }}>🎯</span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          Preporučeno · next up
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 800,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {step.label}
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 500,
            opacity: 0.85,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {step.reason}
        </div>
      </div>
      <button
        data-testid="next-up-card-start"
        onClick={() => launch(step)}
        style={{
          flexShrink: 0,
          padding: '10px 16px',
          background: '#fff',
          color: '#0a5c73',
          border: 'none',
          borderRadius: 11,
          fontSize: 13,
          fontWeight: 800,
          cursor: 'pointer',
        }}
      >
        Start →
      </button>
    </div>
  );
}
