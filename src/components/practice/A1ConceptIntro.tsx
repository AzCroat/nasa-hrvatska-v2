// src/components/practice/A1ConceptIntro.tsx
//
// The teaching phase for the two A1 drills (PresentTenseDrill, WordOrderDrill).
// Same contract as CaseConceptIntro: concept first, questions second, and a
// returning learner taps straight through — a 2-second refresher, never a gate
// with friction.
//
// Deliberately NOT a reuse of CaseConceptIntro: that component is bound to the
// case system (caseConceptById) and owns the one-time WHY_WORDS_CHANGE primer
// about words changing their endings. Verb endings and word order are different
// concepts with no case primer to show, so bending it would have meant a
// conceptId union plus a "show the primer?" flag threaded through both. This is
// the same visual language against a different data source.

import React from 'react';
import { a1ConceptById } from '../../data/a1Concepts';

interface A1ConceptIntroProps {
  conceptId: string;
  onStart: () => void;
}

export default function A1ConceptIntro({ conceptId, onStart }: A1ConceptIntroProps) {
  const concept = a1ConceptById(conceptId);

  // Unknown id → don't strand the learner on an empty card; go straight to the
  // questions. (Mirrors CaseConceptIntro's missing-concept behaviour.)
  if (!concept) {
    return (
      <button
        className="b bp"
        style={{ width: '100%' }}
        data-testid="a1-intro-start"
        onClick={onStart}
      >
        Start practising →
      </button>
    );
  }

  return (
    <div data-testid="a1-concept-intro">
      <div className="c" style={{ padding: '18px 16px' }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: '#0e7490',
            marginBottom: 6,
          }}
        >
          Before you practise
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.3, marginBottom: 10 }}>
          {concept.title}
        </div>

        <div style={{ fontSize: 15, fontWeight: 600, color: '#334155', marginBottom: 6 }}>
          {concept.question}
        </div>
        <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.55, marginBottom: 14 }}>
          {concept.bridge}
        </div>

        <div
          style={{
            background: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: 10,
            padding: '12px 14px',
            marginBottom: 14,
          }}
        >
          <div style={{ fontSize: 17, fontWeight: 700, color: '#0369a1', lineHeight: 1.5 }}>
            {concept.example.hr}
          </div>
          <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{concept.example.en}</div>
        </div>

        <ul style={{ margin: '0 0 14px', paddingLeft: 20 }}>
          {concept.points.map((p) => (
            <li
              key={p}
              style={{ fontSize: 14, color: '#475569', lineHeight: 1.55, marginBottom: 6 }}
            >
              {p}
            </li>
          ))}
        </ul>

        <div
          style={{
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: 10,
            padding: '12px 14px',
          }}
        >
          <div style={{ fontSize: 14, color: '#9a3412', lineHeight: 1.6 }}>
            <span style={{ textDecoration: 'line-through', opacity: 0.75 }}>
              {concept.counter.wrong}
            </span>{' '}
            → <strong>{concept.counter.right}</strong>
          </div>
          <div style={{ fontSize: 13, color: '#c2410c', marginTop: 5 }}>{concept.counter.why}</div>
        </div>
      </div>

      <button
        className="b bp"
        style={{ width: '100%', marginTop: 12 }}
        data-testid="a1-intro-start"
        onClick={onStart}
      >
        Start practising →
      </button>
    </div>
  );
}
