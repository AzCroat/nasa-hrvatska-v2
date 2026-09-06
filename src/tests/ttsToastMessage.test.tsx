/**
 * ttsToastMessage.test.tsx — the site-wide audio toast names the cause
 * (2026-09-06). It used to say "Audio unavailable" for 2.5 s whatever had
 * happened; it now shows the sentence audio.ts put on the event.
 */
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';

vi.mock('../components/shared/KnightToast', () => ({ default: () => null }));
import { AppToasts } from '../components/shared/AppToasts';

const baseProps = {
  comebackBonus: false,
  freezeUsedToast: false,
  earnBackPrompt: null,
  streakRestoredCount: 0,
  streakRepairAvailable: false,
  onRepairStreak: null,
  showAndroidInstall: false,
  setShowAndroidInstall: vi.fn(),
  deferredInstallPrompt: null,
  showPwaInstall: false,
  setShowPwaInstall: vi.fn(),
  showBackupBanner: false,
  setShowBackupBanner: vi.fn(),
  emailUnverified: false,
  setEmailUnverified: vi.fn(),
  resendVerification: vi.fn(),
};

describe('TTS failure toast', () => {
  it('shows the cause sentence when one is supplied', () => {
    render(
      <AppToasts
        {...baseProps}
        ttsFailedToast
        ttsFailedMessage="Today's AI allowance is used up, so new audio can't be generated until midnight UTC."
      />,
    );
    expect(screen.getByTestId('tts-failed-toast')).toHaveTextContent(/midnight UTC/);
  });

  it('falls back to the generic line when no cause was supplied', () => {
    render(<AppToasts {...baseProps} ttsFailedToast />);
    expect(screen.getByTestId('tts-failed-toast')).toHaveTextContent('Audio unavailable');
  });

  it('App reads the message off the event detail and shows it for longer than a glance', () => {
    const src = readFileSync('src/App.tsx', 'utf8');
    expect(src).toMatch(/detail\?\.message/);
    expect(src).toMatch(/ttsFailedMessage=\{ttsFailedMsg\}/);
    const m = src.match(/setTimeout\(\(\) => setTtsFailedToast\(false\), (\d+)\)/);
    expect(m, 'toast timeout not found').toBeTruthy();
    expect(Number(m![1])).toBeGreaterThanOrEqual(4000);
  });
});
