/**
 * MicPermissionDeniedExplainer — shown when useRecorder.state === 'denied'.
 *
 * Detects platform via getMicPermissionPlatform() and renders per-OS re-grant
 * instructions plus ONE action: "Try Again", which invokes onRetry.
 *
 * THERE WAS A SECOND BUTTON AND NO CONSUMER COULD EVER RENDER IT (2026-09-25).
 * An optional `onUseWriting` gated a "Use writing instead" button, and this
 * docstring said it was "hidden when the consumer doesn't pass the callback
 * (e.g., screens with no writing analog like AIConversation)" — which reads as
 * a deliberate per-consumer choice and was not one: measured across all ten
 * render sites, NOT ONE passed it, so the button had never appeared in the app.
 * The `AlphabetScreen.award` / `LevelQuiz.onPass` shape (see
 * `routerOptionalProps.test.ts`), and its own test supplied the prop itself,
 * which proves the branch works WHEN WIRED and says nothing about whether it is.
 *
 * It is removed rather than wired because the writing alternative was never
 * this component's job: every consumer that HAS one renders it itself, beside
 * this card — `SpeakingTaskScreen`'s `speak-typed-submit` textarea,
 * `LiveTutorScreen`'s "You can type your Croatian below.", AIConversation, Maja
 * and the speaking sprint. The rest (pronunciation scoring, shadowing, the
 * graded reader's read-aloud) have no writing analog at all, because reading
 * aloud IS the task there. A card offering a second route must not be the only
 * thing that knows the route exists.
 *
 * role="alert" so screen readers announce the blocked state.
 */
import React from 'react';
import { getMicPermissionPlatform, type MicPermissionPlatform } from '../../lib/platform';

const INSTRUCTIONS: Record<MicPermissionPlatform, string> = {
  'ios-safari': 'Open Settings → Safari → Microphone → enable for nasahrvatska.com',
  'ios-app': 'Open Settings → Naša Hrvatska → Microphone → enable',
  'android-browser': 'Tap the lock icon in the URL bar → Permissions → Microphone → Allow',
  'android-app': 'Open Settings → Apps → Naša Hrvatska → Permissions → Microphone → Allow',
  desktop: 'Click the lock icon next to the URL and re-enable Microphone.',
};

interface Props {
  onRetry: () => void;
}

export default function MicPermissionDeniedExplainer({ onRetry }: Props) {
  const platform = getMicPermissionPlatform();
  const text = INSTRUCTIONS[platform];

  return (
    <div
      role="alert"
      style={{
        padding: 16,
        border: '1px solid #f59e0b',
        borderRadius: 12,
        background: '#fffbeb',
        marginTop: 12,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 15,
          color: '#92400e',
          marginBottom: 8,
        }}
      >
        🎤 Microphone access is blocked
      </div>
      <div
        style={{
          fontSize: 14,
          color: '#78350f',
          marginBottom: 12,
        }}
      >
        {text}
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={onRetry}
          style={{
            padding: '8px 14px',
            background: '#f59e0b',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
