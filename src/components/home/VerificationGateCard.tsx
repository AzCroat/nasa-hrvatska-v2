// src/components/home/VerificationGateCard.tsx
//
// The Phase 1 mastery-gate takeover card (2026-08-16). Shown at the top of the
// Today tab whenever the user holds a provisional (grandfathered, never
// demonstrated) CEFR level. There is deliberately NO dismiss and NO snooze —
// the only way forward is through the verification — but practice below the
// gate stays open, so the card informs and directs rather than walls off.

import React from 'react';
import type { VerificationGate, SkillKey } from '../../lib/cefrCertification';
import { getLastVerificationRollback } from '../../lib/cefrCertification';
import { readinessForVerification } from '../../lib/masteryLedger';

const SKILL_LABEL: Record<SkillKey, string> = {
  vocab: 'Vocabulary',
  grammar: 'Grammar',
  reading: 'Reading',
  listening: 'Listening',
  speaking: 'Speaking',
  writing: 'Writing',
};

interface Props {
  gate: VerificationGate;
  onStartVerification: () => void;
}

export default function VerificationGateCard({ gate, onStartVerification }: Props) {
  if (!gate.required || !gate.target) return null;
  // Honest rollback (2026-08-17): after a failed check stepped the level down,
  // the card must SAY so — unchanged copy after a completed test reads as
  // "your test didn't count".
  const rollback = getLastVerificationRollback();
  // Phase 2 mastery ledger: show what daily practice already signals, so the
  // learner walks into the verification knowing where they stand.
  const readiness = readinessForVerification(gate.target);
  const readinessLine =
    readiness.strong.length + readiness.developing.length > 0
      ? [
          readiness.strong.length > 0 &&
            `strong in ${readiness.strong.map((s) => SKILL_LABEL[s]).join(', ')}`,
          readiness.developing.length > 0 &&
            `developing ${readiness.developing.map((s) => SKILL_LABEL[s]).join(', ')}`,
          readiness.untested.length > 0 &&
            `untested in ${readiness.untested.map((s) => SKILL_LABEL[s]).join(', ')}`,
        ]
          .filter(Boolean)
          .join(' · ')
      : null;
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
        {rollback && rollback.to === gate.target
          ? `Your ${rollback.from} check didn't pass, so your level honestly moved to ${gate.target}. Verify it to stand on solid ground — then win ${rollback.from} back for real.`
          : `Your ${gate.target} was carried over from activity — mastery means demonstrating it. New ${gate.target} content is paused until you pass the verification; everything below stays open, and that practice is exactly the preparation.`}
      </p>
      {readinessLine && (
        <p
          data-testid="verification-gate-readiness"
          style={{
            fontSize: 12,
            lineHeight: 1.5,
            opacity: 0.85,
            margin: '0 0 12px',
            fontWeight: 600,
          }}
        >
          Your practice signals: {readinessLine}.
        </p>
      )}
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
