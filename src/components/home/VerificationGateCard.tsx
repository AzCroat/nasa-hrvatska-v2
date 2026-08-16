// src/components/home/VerificationGateCard.tsx
//
// The Phase 1 mastery-gate takeover card (2026-08-16). Shown at the top of the
// Today tab whenever the user holds a provisional (grandfathered, never
// demonstrated) CEFR level. There is deliberately NO dismiss and NO snooze —
// the only way forward is through the verification — but practice below the
// gate stays open, so the card informs and directs rather than walls off.

import React from 'react';
import type { VerificationGate } from '../../lib/cefrCertification';

interface Props {
  gate: VerificationGate;
  onStartVerification: () => void;
}

export default function VerificationGateCard({ gate, onStartVerification }: Props) {
  if (!gate.required || !gate.target) return null;
  return (
    <div
      data-testid="verification-gate-card"
      style={{
        background: 'linear-gradient(135deg,#7c2d12,#9a3412)',
        borderRadius: 18,
        padding: '18px 18px 16px',
        marginBottom: 14,
        color: '#fff',
        boxShadow: '0 6px 22px rgba(124,45,18,0.35)',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 900,
          letterSpacing: '.2em',
          opacity: 0.85,
          marginBottom: 6,
        }}
      >
        LEVEL VERIFICATION REQUIRED
      </div>
      <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.35, marginBottom: 8 }}>
        Make your {gate.target} real
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.55, opacity: 0.92, margin: '0 0 14px' }}>
        Your {gate.target} was carried over from activity — mastery means demonstrating it. New{' '}
        {gate.target} content is paused until you pass the verification; everything below stays
        open, and that practice is exactly the preparation.
      </p>
      <button
        data-testid="verification-gate-cta"
        onClick={onStartVerification}
        style={{
          display: 'block',
          width: '100%',
          padding: '14px',
          background: '#fff',
          color: '#7c2d12',
          border: 'none',
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 900,
          cursor: 'pointer',
        }}
      >
        Verify {gate.target} now →
      </button>
    </div>
  );
}
