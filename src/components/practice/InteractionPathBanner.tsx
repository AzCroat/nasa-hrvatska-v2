import React from 'react';
import type { InteractionUnit } from '../../lib/interactionCurriculum';

/**
 * InteractionPathBanner — the structured conversation-path header on the
 * Dialogue Simulator menu (Content-Rec #9). Shows the learner's progress
 * through the guided scenarios and a one-tap "Start recommended" CTA for the
 * next conversation, or — once the guided path is complete — points at the
 * B2+ "Advanced Conversations" bridge. Presentational only; all progression
 * logic lives in lib/interactionCurriculum.
 */
export default function InteractionPathBanner({
  nextUnit,
  progress,
  showAdvancedBridge,
  onStart,
  onAdvanced,
}: {
  nextUnit: InteractionUnit | null;
  progress: { done: number; total: number };
  showAdvancedBridge: boolean;
  onStart: () => void;
  onAdvanced?: () => void;
}) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg,#0e7490,#155e75)',
        borderRadius: 16,
        padding: '14px 16px',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 900,
            color: 'rgba(255,255,255,.65)',
            textTransform: 'uppercase',
            letterSpacing: '.12em',
          }}
        >
          Your Conversation Path
        </span>
        <span style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,.8)' }}>
          {progress.done}/{progress.total} scenarios
        </span>
      </div>
      {/* Progress bar */}
      <div
        style={{
          height: 5,
          background: 'rgba(255,255,255,.2)',
          borderRadius: 3,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: (progress.total ? (progress.done / progress.total) * 100 : 0) + '%',
            height: '100%',
            background: 'rgba(255,255,255,.9)',
            borderRadius: 3,
            transition: 'width .4s ease',
          }}
        />
      </div>
      {nextUnit ? (
        <React.Fragment>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 2 }}>
            Next: {nextUnit.title}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.75)', marginBottom: 12 }}>
            {nextUnit.subtitle} · {nextUnit.level}
          </div>
          <button
            onClick={onStart}
            style={{
              width: '100%',
              padding: '11px 0',
              borderRadius: 10,
              border: 'none',
              background: '#fff',
              color: '#0e7490',
              fontWeight: 800,
              fontSize: 14,
              fontFamily: "'Outfit',sans-serif",
              cursor: 'pointer',
            }}
          >
            ▶ Start recommended
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            style={{
              fontSize: 13,
              color: '#fff',
              fontWeight: 700,
              marginBottom: showAdvancedBridge ? 12 : 0,
            }}
          >
            🎉 Guided conversation path complete!
          </div>
          {showAdvancedBridge && onAdvanced && (
            <button
              onClick={onAdvanced}
              style={{
                width: '100%',
                padding: '11px 0',
                borderRadius: 10,
                border: '1.5px solid rgba(255,255,255,.85)',
                background: 'transparent',
                color: '#fff',
                fontWeight: 800,
                fontSize: 14,
                fontFamily: "'Outfit',sans-serif",
                cursor: 'pointer',
              }}
            >
              🎙️ Continue with Advanced Conversations
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
