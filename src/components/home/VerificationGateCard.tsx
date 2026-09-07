// src/components/home/VerificationGateCard.tsx
//
// The Phase 1 mastery-gate takeover card (2026-08-16). Shown at the top of the
// Today tab whenever the user holds a provisional (grandfathered, never
// demonstrated) CEFR level. There is deliberately NO dismiss and NO snooze —
// the only way forward is through the verification — but practice below the
// gate stays open, so the card informs and directs rather than walls off.

import React from 'react';
import type { VerificationGate, SkillKey } from '../../lib/cefrCertification';
import {
  getLastVerificationRollback,
  verificationQuietStatus,
  VERIFICATION_RETURN_XP,
} from '../../lib/cefrCertification';
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
  /** Live `stats.xp` — the quiet period is measured in XP earned since the
   *  last attempt, so the card needs the current total. */
  currentXp: number;
  onStartVerification: () => void;
}

export default function VerificationGateCard({ gate, currentXp, onStartVerification }: Props) {
  if (!gate.required || !gate.target) return null;
  // QUIET PERIOD (owner directives, 2026-08-18 + 2026-09-07): any verification
  // attempt — pass or fail — takes the prompt OFF Home entirely until the
  // learner has EARNED VERIFICATION_RETURN_XP since. Nothing is rendered while
  // quiet: not the hero, not the one-line chip the first fix left behind
  // ("why is it still at the top of my home page?"). Taking the test must
  // visibly change this page, and a check that comes back after a stretch of
  // learning is a retention check — the reason the prompt exists at all. The
  // GATE stays (content above the target remains locked) and the Me tab's
  // card still offers the check to anyone who wants it sooner. The full hero
  // still greets a learner who has never attempted.
  const quiet = verificationQuietStatus(currentXp);
  if (quiet.quiet) return null;
  // Honest rollback (2026-08-17): after a failed check stepped the level down,
  // the card must SAY so — unchanged copy after a completed test reads as
  // "your test didn't count".
  const rollback = getLastVerificationRollback();
  // Returning after learning: name the practice that brought the prompt back,
  // measured — never a claim the app did not count.
  const returningLine =
    quiet.since && quiet.earnedSince >= VERIFICATION_RETURN_XP
      ? `You've earned ${quiet.earnedSince} XP of practice since your last check — time to confirm it stuck.`
      : null;
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
      {returningLine && (
        <p
          data-testid="verification-gate-returning"
          style={{
            fontSize: 12,
            lineHeight: 1.5,
            opacity: 0.85,
            margin: '0 0 12px',
            fontWeight: 600,
          }}
        >
          {returningLine}
        </p>
      )}
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
