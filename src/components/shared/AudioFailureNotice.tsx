// src/components/shared/AudioFailureNotice.tsx
//
// Inline card shown where a recording that the learner NEEDS to hear could
// not be played (2026-09-06). Names the cause in one honest sentence (from
// the failure audio.ts recorded), offers a retry, and — where the caller
// allows it — a way past the item that does not score it. Never a bare
// "Audio unavailable": a learner who cannot hear a listening item must know
// why, and must never be pushed into guessing.
import React from 'react';
import { describeTtsFailure, type TtsFailure } from '../../lib/audio';

export default function AudioFailureNotice({
  failure,
  onRetry,
  onSkip,
  skipLabel = "Skip this one — it won't count",
  testId = 'audio-failed',
}: {
  failure: TtsFailure | null;
  onRetry: () => void;
  /** When provided, renders a secondary action that moves on WITHOUT scoring. */
  onSkip?: () => void;
  skipLabel?: string;
  testId?: string;
}) {
  return (
    <div
      data-testid={testId}
      role="alert"
      style={{
        margin: '12px 0',
        padding: '12px 14px',
        borderRadius: 12,
        background: 'rgba(180,83,9,.08)',
        border: '1px solid rgba(180,83,9,.35)',
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--text)',
        textAlign: 'left',
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 4 }}>The recording couldn&apos;t be played.</div>
      <div>{describeTtsFailure(failure)}</div>
      <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
        <button
          className="b bp"
          data-testid={`${testId}-retry`}
          onClick={onRetry}
          style={{ flex: 1 }}
        >
          Try again
        </button>
        {onSkip && (
          <button className="b" data-testid={`${testId}-skip`} onClick={onSkip} style={{ flex: 1 }}>
            {skipLabel}
          </button>
        )}
      </div>
    </div>
  );
}
