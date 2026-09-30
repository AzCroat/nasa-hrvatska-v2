/**
 * The speaking paths, driven by a MICROPHONE STREAM (e2e/speaking-microphone.spec.js).
 *
 * Every other speaking spec types its answer or fakes the whole recorder. This one
 * feeds Chromium's fake capture device from a committed Croatian WAV
 * (e2e/fixtures/speech-hr-imam-sestru.wav), so the app's own getUserMedia →
 * MediaRecorder → Web Audio decode → 16 kHz WAV → upload path runs on real audio.
 *
 * A config of its own because the flags are browser-wide: `--use-fake-ui-for-media-stream`
 * grants every mic prompt, which would silently change what the rest of the suite
 * measures. The main config ignores the spec; `ci.yml` runs this config after the Chrome
 * suite.
 *
 * Two projects. `mic` has the fake device fed from the file and the prompt auto-accepted.
 * `mic-denied` has a fake device but NO fake UI and no permission grant, so headless
 * Chromium refuses the prompt — a real NotAllowedError from getUserMedia, not a stub.
 * Tests tagged `@denied` run there and only there.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';

const here = path.dirname(fileURLToPath(import.meta.url));
// MIC_E2E_WAV swaps the audio the fake microphone plays — how the spec's own
// "the upload carries the microphone's sound" check was mutation-verified (silence fails it).
const SPEECH_WAV =
  process.env.MIC_E2E_WAV || path.join(here, 'e2e', 'fixtures', 'speech-hr-imam-sestru.wav');
// The preview port. 4173 as everywhere else; overridable so a run cannot silently
// reuse a server another checkout started on the default port.
const PORT = Number(process.env.MIC_E2E_PORT || 4173);

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/speaking-microphone.spec.js',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: 120_000,
  reporter: [['html', { open: 'never', outputFolder: 'playwright-mic-report' }], ['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    colorScheme: 'light',
    reducedMotion: 'reduce',
  },
  projects: [
    {
      name: 'mic',
      grepInvert: /@denied/,
      use: {
        ...devices['Desktop Chrome'],
        permissions: ['microphone'],
        launchOptions: {
          args: [
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
            `--use-file-for-fake-audio-capture=${SPEECH_WAV}`,
          ],
        },
      },
    },
    {
      name: 'mic-denied',
      grep: /@denied/,
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chromium',
        launchOptions: { args: ['--use-fake-device-for-media-stream'] },
      },
    },
  ],
  webServer: {
    command: `npx vite preview --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
