// src/components/practice/listening/AIListeningResults.tsx
//
// The results view of AIListeningScreen, extracted 2026-09-26.
//
// WHY IT MOVED. AIListeningScreen sat two counted lines under the project's hard
// 800-line cap, so the dark-mode ink change — `color: 'var(--ink-accent)'` is ten
// characters longer than the `#0e7490` it replaced — pushed one JSX attribute past
// Prettier's 100 columns, it wrapped over three lines, and the file went to 802.
// The cap is a project rule: it is not raised and no override is added. This is the
// same move that produced `dwellCredit.ts`, `blackHoleScreens.ts`, `croatiaPool.ts`
// and `writingPrompts.ts`.
//
// It is a pure render — no state, no effects, no completion call. Everything it
// needs is passed in, so the seam is exactly where the phase check was.

import React from 'react';
import { H } from '../../../data';

/** The score line's own style, hoisted for the same reason the file was split. */
const SCORE_STYLE = { fontSize: 36, fontWeight: 900, color: 'var(--ink-accent)', marginBottom: 4 };

const KICKER = {
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--subtext)',
  textTransform: 'uppercase' as const,
  letterSpacing: 1,
  marginBottom: 12,
};

const XP_PILL = {
  display: 'inline-block',
  background: 'linear-gradient(135deg, #d97706, #f59e0b)',
  color: '#fff',
  borderRadius: 20,
  padding: '6px 20px',
  fontSize: 18,
  fontWeight: 900,
};

interface VocabRow {
  hr: string;
  en: string;
}

export interface AIListeningResultsProps {
  /** The generated exercise: its questions decide the total, its vocab the recap. */
  content: { questions: unknown[]; vocab?: VocabRow[] };
  score: number;
  /** "Try Another" — back to the setup phase, keeping the learner on this screen. */
  onRetry: () => void;
  goBack: () => void;
}

export default function AIListeningResults({
  content,
  score,
  onRetry,
  goBack,
}: AIListeningResultsProps) {
  const total = content.questions.length;
  const xpEarned = 10 + score * 5;
  const emoji = score === total ? '🏆' : score >= total * 0.6 ? '🎉' : '💪';
  const vocab = content.vocab ?? [];

  return (
    <div className="scr-wrap">
      {H('📊 Results', 'AI Listening Exercise', goBack)}

      <div className="c" style={{ textAlign: 'center', padding: '24px 16px', marginBottom: 16 }}>
        <div style={{ fontSize: 52, marginBottom: 8 }}>{emoji}</div>
        <div style={SCORE_STYLE}>
          {score} / {total}
        </div>
        <div style={{ color: 'var(--subtext)', fontSize: 14, marginBottom: 16 }}>
          {score === total
            ? 'Perfect score!'
            : score >= total * 0.6
              ? 'Good work!'
              : 'Keep practising!'}
        </div>
        <div style={XP_PILL}>+{xpEarned} XP</div>
      </div>

      {vocab.length > 0 && (
        <div className="c" style={{ marginBottom: 20 }}>
          <div style={KICKER}>Vocabulary from this exercise</div>
          {vocab.map((v, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: i < vocab.length - 1 ? '1px solid var(--bar-bg)' : 'none',
              }}
            >
              <span style={{ fontWeight: 700, color: 'var(--ink-flag)', fontSize: 15 }}>
                {v.hr}
              </span>
              <span style={{ color: 'var(--subtext)', fontSize: 14 }}>{v.en}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: 10 }}>
        <button className="b bg" style={{ flex: 1 }} onClick={onRetry}>
          🔁 Try Another
        </button>
        <button className="b bp" style={{ flex: 1 }} onClick={goBack}>
          ← Done
        </button>
      </div>
    </div>
  );
}
