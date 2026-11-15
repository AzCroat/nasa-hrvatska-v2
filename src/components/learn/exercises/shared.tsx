// Shared pieces of the exercise player: the card styles, the prompt card, the
// attempt contract (first miss -> hint and a second try; second miss -> answer) and
// the feedback box. Every kind uses these, so the contract is written once.
import React, { useRef, useState } from 'react';
import { accentInk } from '../../../lib/accentInk';
import type { Settle } from './types';

export const card: React.CSSProperties = {
  background: 'var(--card)',
  borderRadius: 14,
  border: '1px solid var(--card-b)',
  padding: '16px 18px',
  marginBottom: 12,
  boxShadow: 'var(--card-shadow)',
};

export const eyebrowStyle = (color: string): React.CSSProperties => ({
  fontSize: 'var(--text-xs)',
  fontWeight: 800,
  letterSpacing: '.08em',
  color: accentInk(color),
  textTransform: 'uppercase',
  marginBottom: 6,
});

export const GENERIC_HINT = 'Not quite — try once more.';

export function PromptCard({
  eyebrow,
  color,
  q,
  children,
}: {
  eyebrow: string;
  color: string;
  q?: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={card}>
      <div style={eyebrowStyle(color)}>{eyebrow}</div>
      {q && (
        <p
          lang="hr"
          style={{
            fontSize: 'var(--text-md)',
            fontWeight: 800,
            margin: 0,
            color: 'var(--heading)',
          }}
        >
          {q}
        </p>
      )}
      {children}
    </div>
  );
}

export type Status = 'open' | Settle;

/** The attempt contract: one miss shows the hint, a second miss settles as shown. */
export function useAttempts(onSettle: (r: Settle) => void) {
  const [misses, setMisses] = useState(0);
  const [status, setStatus] = useState<Status>('open');
  const done = useRef(false);
  const missCount = useRef(0);
  const settle = (r: Settle) => {
    if (done.current) return;
    done.current = true;
    setStatus(r);
    onSettle(r);
  };
  const miss = () => {
    if (done.current) return 0;
    missCount.current += 1;
    const m = missCount.current;
    setMisses(m);
    if (m >= 2) settle('shown');
    return m;
  };
  return { misses, status, settled: status !== 'open', settle, miss, right: () => settle('right') };
}

export function Feedback({
  status,
  misses,
  hint,
  explanation,
  revealed,
}: {
  status: Status;
  misses: number;
  hint?: string;
  explanation: string;
  /** Extra text shown once settled (the answer, the audio text). */
  revealed?: React.ReactNode;
}) {
  return (
    <>
      {status === 'open' && misses === 1 && (
        <div data-testid="ex-hint" role="status" style={{ ...card, background: 'var(--info-bg)' }}>
          <strong style={{ color: 'var(--ink-info)' }}>
            {hint ? 'Not quite — here is a hint. ' : GENERIC_HINT}
          </strong>
          {hint && <span style={{ color: 'var(--text)' }}>{hint}</span>}
        </div>
      )}
      {status !== 'open' && (
        <div data-testid="ex-explanation" data-result={status} role="status" style={card}>
          <strong style={{ color: status === 'right' ? 'var(--ink-green)' : 'var(--ink-error)' }}>
            {status === 'right'
              ? misses === 0
                ? '✅ Correct!'
                : '✅ Got it on the second try.'
              : status === 'skipped'
                ? 'Skipped — this one does not count.'
                : '❌ The answer is shown above.'}
          </strong>{' '}
          {revealed && (
            <span
              lang="hr"
              data-testid="ex-revealed"
              style={{ fontWeight: 800, color: 'var(--heading)' }}
            >
              {revealed}{' '}
            </span>
          )}
          <span style={{ color: 'var(--text)' }}>{explanation}</span>
        </div>
      )}
    </>
  );
}

export function optionStyle(
  state: 'idle' | 'right' | 'wrong',
  disabled: boolean,
): React.CSSProperties {
  const base: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    marginBottom: 8,
    borderRadius: 12,
    textAlign: 'left',
    fontFamily: 'inherit',
    fontSize: 'var(--text-base)',
    fontWeight: 600,
    display: 'block',
    lineHeight: 1.4,
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled && state === 'idle' ? 0.55 : 1,
    background: 'var(--card)',
    border: '2px solid var(--card-b)',
    color: 'var(--heading)',
  };
  if (state === 'right')
    return {
      ...base,
      background: 'var(--success-bg)',
      border: '2px solid var(--success)',
      color: 'var(--ink-green)',
    };
  if (state === 'wrong')
    return {
      ...base,
      background: 'var(--error-bg)',
      border: '2px solid var(--error)',
      color: 'var(--ink-error)',
      textDecoration: 'line-through',
    };
  return base;
}

/** Tile / chip button used by match, sort, order and fix. */
export function chipStyle(
  state: 'idle' | 'selected' | 'right' | 'wrong',
  disabled = false,
): React.CSSProperties {
  const base: React.CSSProperties = {
    padding: '10px 14px',
    borderRadius: 12,
    fontFamily: 'inherit',
    fontSize: 'var(--text-base)',
    fontWeight: 700,
    lineHeight: 1.3,
    cursor: disabled ? 'default' : 'pointer',
    background: 'var(--card)',
    border: '2px solid var(--card-b)',
    color: 'var(--heading)',
  };
  if (state === 'selected') return { ...base, border: '2px solid var(--heading)' };
  if (state === 'right')
    return {
      ...base,
      background: 'var(--success-bg)',
      border: '2px solid var(--success)',
      color: 'var(--ink-green)',
    };
  if (state === 'wrong')
    return {
      ...base,
      background: 'var(--error-bg)',
      border: '2px solid var(--error)',
      color: 'var(--ink-error)',
    };
  return base;
}

export const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '12px 14px',
  borderRadius: 12,
  border: '2px solid var(--card-b)',
  fontSize: 'var(--text-base)',
  fontFamily: 'inherit',
  background: 'var(--card)',
  color: 'var(--heading)',
};
