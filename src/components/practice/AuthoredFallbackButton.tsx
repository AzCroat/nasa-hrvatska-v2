// src/components/practice/AuthoredFallbackButton.tsx
//
// The visible half of DEGRADE VISIBLY (2026-08-20): when an AI-backed activity
// cannot generate, this offers the authored equivalent instead of leaving the
// learner with an error and a retry button.
//
// Extracted rather than inlined because AIListeningScreen is at the 800-line
// max-lines ceiling and because any AI screen that gains an entry in
// AUTHORED_FALLBACK needs exactly this affordance — the second caller should
// reuse it, not re-style it.
//
// Deliberately says nothing about the failure. The error banner above it already
// reports what went wrong; this is the way forward, and it reads as an offer of
// content rather than an apology.

import React from 'react';
import { authoredFallbackFor } from '../../lib/authoredFallback';
import { useApp } from '../../context/AppContext';

interface Props {
  /** The AI-backed screen that failed; its substitute is looked up here. */
  forScreen: string;
  testId?: string;
}

/**
 * Renders nothing when the screen has no authored substitute, so callers can
 * mount it unconditionally behind their own error state.
 *
 * Navigating deliberately does NOT credit the session — finishing the substitute
 * does, via the completion signal matching the originally launched screen.
 */
export default function AuthoredFallbackButton({ forScreen, testId }: Props) {
  const { setScr } = useApp();
  const fallback = authoredFallbackFor(forScreen);
  if (!fallback) return null;
  return (
    <button
      data-testid={testId ?? 'authored-fallback'}
      onClick={() => setScr(fallback.screen)}
      className="b bp"
      style={{ width: '100%', marginBottom: 16, textAlign: 'left', padding: '12px 14px' }}
    >
      <span style={{ fontWeight: 800 }}>🎧 {fallback.label} →</span>
      <span style={{ display: 'block', fontSize: 12, fontWeight: 600, opacity: 0.85 }}>
        {fallback.blurb}
      </span>
    </button>
  );
}
