// src/components/learn/LocalMorphology.tsx
//
// Extracted from GrammarReader when that file reached the 800-line lint cap.
// The cap was not raised.

import React from 'react';
import {
  analyzeForm,
  decline,
  describeReading,
  CASES,
  CASE_NAME,
} from '../../lib/croatianMorphology';

/**
 * The FREE half of a word tap (Rec #6, 2026-09-07). `lib/croatianMorphology`
 * reads the ending with rules — no network, no Claude call, no quota — so the
 * sheet has something true to show the instant it opens, and keeps showing it
 * when the AI path is unavailable (offline, daily limit, budget pause).
 *
 * It lists EVERY reading the ending permits rather than picking one. That is
 * not hedging: `knjige` really is the genitive singular and the nominative
 * plural, and a learner told only one of those has been told something wrong
 * most of the time. Disambiguating needs the sentence, which is exactly what
 * the AI button below is for.
 */
export default function LocalMorphology({ word }: { word: string }) {
  const reading = React.useMemo(() => analyzeForm(word), [word]);
  const table = React.useMemo(() => {
    const lemma = reading.candidates.find((c) => c.lemma && c.pos === 'noun')?.lemma;
    return lemma ? decline(lemma) : null;
  }, [reading]);
  if (reading.candidates.length === 0) return null;

  return (
    <div data-testid="local-morphology" style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 800, color: 'var(--subtext)' }}>
        {reading.unambiguous ? 'What this is' : 'What this ending can be'}
      </div>
      <ul style={{ margin: '6px 0 0', paddingLeft: 18 }}>
        {reading.candidates.slice(0, 6).map((c, i) => (
          <li
            key={i}
            data-testid="local-reading"
            data-case={c.case || ''}
            style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: 2 }}
          >
            {describeReading(c)}
            {c.case && c.note ? ` (${c.note})` : ''}
          </li>
        ))}
      </ul>
      {table && (
        <details data-testid="local-declension" style={{ marginTop: 10 }}>
          <summary style={{ fontSize: 'var(--text-xs)', fontWeight: 800, cursor: 'pointer' }}>
            Full declension of {table.lemma}
            {table.attested ? '' : ' (from the regular pattern)'}
          </summary>
          <table style={{ width: '100%', marginTop: 8, fontSize: 'var(--text-xs)' }}>
            <tbody>
              {CASES.map((c) => (
                <tr key={c}>
                  <td style={{ color: 'var(--subtext)', padding: '2px 6px 2px 0' }}>
                    {CASE_NAME[c]}
                  </td>
                  <td lang="hr" style={{ padding: '2px 6px 2px 0' }}>
                    {table.forms[`${c}sg`]}
                  </td>
                  <td lang="hr" style={{ padding: '2px 0' }}>
                    {table.forms[`${c}pl`]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {table.note && (
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--subtext)', lineHeight: 1.6 }}>
              {table.note}
            </p>
          )}
        </details>
      )}
    </div>
  );
}

/**
 * The sheet a tap opens BEFORE any AI call: the rule-based reading, the
 * declension table when a lemma is recoverable, and one button to ask which
 * reading applies in this sentence. Lives here rather than in GrammarReader
 * because that file is at its 800-line lint cap.
 */
export function LocalOnlySheet({
  word,
  onClose,
  onExplain,
  explaining,
}: {
  word: string;
  onClose: () => void;
  onExplain?: () => void;
  explaining: boolean;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0,0,0,.35)',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Word analysis"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxHeight: '70vh',
          overflowY: 'auto',
          background: 'var(--card)',
          borderRadius: '20px 20px 0 0',
          padding: '20px 18px 32px',
          animation: 'grSheet .22s ease',
          boxShadow: '0 -4px 24px rgba(0,0,0,.15)',
        }}
      >
        <div
          style={{
            width: 36,
            height: 4,
            background: 'var(--card-b)',
            borderRadius: 2,
            margin: '0 auto 16px',
          }}
        />
        <div
          lang="hr"
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 900,
            color: 'var(--heading)',
            marginBottom: 14,
          }}
        >
          {word.replace(/[.,!?;:]/g, '')}
        </div>
        <LocalMorphology word={word} />
        {onExplain && (
          <button
            className="b bp"
            data-testid="explain-in-sentence"
            style={{ width: '100%' }}
            disabled={explaining}
            onClick={onExplain}
          >
            {explaining ? 'Reading the sentence…' : 'Which one is it here?'}
          </button>
        )}
      </div>
    </div>
  );
}
