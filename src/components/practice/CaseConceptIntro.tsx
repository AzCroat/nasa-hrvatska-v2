// src/components/practice/CaseConceptIntro.tsx
//
// The TEACHING PHASE every case drill now opens with (concept-teaching
// directive, 2026-08-18) — the AspectDrillScreen pattern ported to the case
// system: concept first, questions second. Before this, all seven case drills
// mounted straight into question 1, and nothing in the app told an A1 learner
// what a case even is.
//
// Two layers:
//   1. WHY_WORDS_CHANGE — the one-time global primer (the he/him/his English
//      bridge). Shown before the learner's FIRST case drill ever, then
//      remembered (localStorage) and collapsed behind a "remind me" toggle.
//   2. The drill's own concept card — plain-English name, the question the
//      case answers, the English bridge, example + counterexample.
//
// Returning learners tap straight through — the card is a 2-second refresher,
// never a gate with friction.

import React, { useState } from 'react';
import { caseConceptById, WHY_WORDS_CHANGE } from '../../data/caseConcepts';

export const CASE_PRIMER_SEEN_KEY = 'nh_case_primer_seen';

function primerSeen(): boolean {
  try {
    return localStorage.getItem(CASE_PRIMER_SEEN_KEY) === '1';
  } catch {
    return true; // storage unavailable → don't force the primer every time
  }
}

function markPrimerSeen(): void {
  try {
    localStorage.setItem(CASE_PRIMER_SEEN_KEY, '1');
  } catch {
    /* storage unavailable */
  }
}

interface CaseConceptIntroProps {
  conceptId: string;
  onStart: () => void;
}

export default function CaseConceptIntro({ conceptId, onStart }: CaseConceptIntroProps) {
  const concept = caseConceptById(conceptId);
  const [showPrimer, setShowPrimer] = useState(() => !primerSeen());

  if (!concept) {
    // Unknown id — never block practice on a content mismatch.
    onStart();
    return null;
  }

  const card: React.CSSProperties = {
    background: 'var(--card, #fff)',
    border: '1.5px solid var(--card-b, #e5e7eb)',
    borderRadius: 12,
    padding: '14px 16px',
    marginBottom: 12,
  };

  return (
    <div data-testid="case-concept-intro">
      {showPrimer && (
        <div
          style={{ ...card, border: '1.5px solid var(--info, #0284c7)' }}
          data-testid="case-primer"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 18 }}>{WHY_WORDS_CHANGE.icon}</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--heading)' }}>
              {WHY_WORDS_CHANGE.title}
            </span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6, marginBottom: 8 }}>
            {WHY_WORDS_CHANGE.body}
          </div>
          <div
            style={{ background: 'var(--bar-bg, #f9fafb)', borderRadius: 8, padding: '8px 10px' }}
          >
            <div style={{ fontSize: 13, fontStyle: 'italic', fontWeight: 600 }}>
              {WHY_WORDS_CHANGE.example.hr}
            </div>
            <div style={{ fontSize: 12, color: 'var(--subtext)' }}>
              {WHY_WORDS_CHANGE.example.en}
            </div>
            <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 2 }}>
              💡 {WHY_WORDS_CHANGE.example.note}
            </div>
          </div>
        </div>
      )}
      {!showPrimer && (
        <button
          onClick={() => setShowPrimer(true)}
          data-testid="case-primer-toggle"
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--subtext)',
            fontSize: 12,
            cursor: 'pointer',
            marginBottom: 6,
            padding: 0,
          }}
        >
          🔑 Why do Croatian words change? Remind me
        </button>
      )}

      <div style={card} data-testid="case-concept-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 20 }}>{concept.icon}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}>
            {concept.title}
          </span>
        </div>
        <div style={{ fontSize: 12, color: 'var(--subtext)', marginBottom: 8 }}>
          Answers: <em>{concept.question}</em>
        </div>
        <div
          style={{ fontSize: 13, color: 'var(--text, #374151)', lineHeight: 1.6, marginBottom: 8 }}
        >
          {concept.whatItDoes}
        </div>
        <div
          style={{
            background: 'rgba(14,116,144,.07)',
            border: '1px solid var(--info, #0284c7)',
            borderRadius: 8,
            padding: '8px 10px',
            fontSize: 13,
            lineHeight: 1.55,
            marginBottom: 8,
          }}
          data-testid="case-english-bridge"
        >
          🇬🇧 {concept.englishBridge}
        </div>
        <div
          style={{
            background: 'var(--bar-bg, #f9fafb)',
            borderRadius: 8,
            padding: '8px 10px',
            marginBottom: 6,
          }}
        >
          <div style={{ fontSize: 13, fontStyle: 'italic', fontWeight: 600 }}>
            ✓ {concept.example.hr}
          </div>
          <div style={{ fontSize: 12, color: 'var(--subtext)' }}>{concept.example.en}</div>
          <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 2 }}>
            {concept.example.note}
          </div>
        </div>
        <div style={{ background: 'var(--bar-bg, #f9fafb)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontSize: 13, fontStyle: 'italic', fontWeight: 600 }}>
            ↔ {concept.counterex.hr}
          </div>
          <div style={{ fontSize: 12, color: 'var(--subtext)' }}>{concept.counterex.en}</div>
          <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 2 }}>
            {concept.counterex.note}
          </div>
        </div>
      </div>

      <button
        className="b bp"
        data-testid="case-intro-start"
        style={{ width: '100%', padding: '13px 0', fontSize: 15, fontWeight: 800 }}
        onClick={() => {
          markPrimerSeen();
          onStart();
        }}
      >
        Start questions →
      </button>
    </div>
  );
}
