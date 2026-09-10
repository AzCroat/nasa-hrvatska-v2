/**
 * azureTtsInstall.test.js — the Croatian voice's credential rides the same
 * install path as every other secret, and a failed play names itself.
 *
 * Owner, 2026-09-09: "Audio unavailable on Listening exercise. It created
 * lesson and words, but no audio still."
 *
 * That report narrows the fault sharply, and the narrowing is the reason this
 * file exists. AIListeningScreen produced its lesson AND its word list on the
 * same tap — so the learner is authenticated, the 300/day quota has room, and
 * the monthly budget is not paused. Every shared precondition of /api/tts was
 * demonstrably healthy. What failed was the voice chain itself.
 *
 * AZURE_TTS_KEY is the first backend in that chain and the only real Croatian
 * neural voice in it. Without it /api/tts falls to Google Translate TTS, which
 * answers a consent/token body to datacenter IPs — a 200 with no audio, which
 * until today was served as success (see emptyAudio.test.ts).
 *
 * It was a dashboard-only variable. This repo has already paid for that once:
 * FIREBASE_SERVICE_ACCOUNT_JSON had NEVER been set, for years, because it was
 * filed as a dashboard chore while CI had already proven it can write Pages
 * secrets. Same fix, same contract.
 *
 * NOT CLAIMED: that an unset key is the owner's cause. It cannot be read from
 * here. What is claimed is that the credential now has a mechanism instead of
 * a memory, and that a failure says which one it was.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const CI = readFileSync('.github/workflows/ci.yml', 'utf8');
/**
 * Bounded at the NEXT step and stripped of comments. Slicing "until the deploy"
 * is what let this step's own prose break sentryDsnInstall's assertion when it
 * was inserted between that step and the deploy — a guard must describe ITS
 * step, not everything that happens to follow it.
 */
const _from = CI.slice(CI.indexOf('- name: Install Azure Speech credentials (Pages)'));
const _next = _from.indexOf('\n      - name:', 1);
const STEP = (_next > 0 ? _from.slice(0, _next) : _from).replace(/^\s*#.*$/gm, '');

describe('the Azure key is installed by CI, not by memory', () => {
  it('has an install step reading the GitHub secret', () => {
    expect(CI).toMatch(/Install Azure Speech credentials \(Pages\)/);
    expect(STEP).toMatch(/AZURE_TTS_KEY: \$\{\{ secrets\.AZURE_TTS_KEY \}\}/);
    expect(STEP).toMatch(/AZURE_TTS_REGION: \$\{\{ secrets\.AZURE_TTS_REGION \}\}/);
  });

  it('installs BEFORE the Pages deploy', () => {
    // Load-bearing and the same ordering the cron-secret work pinned: a Pages
    // secret reaches Functions through a NEW deployment, not the running one.
    // Installed after `pages deploy`, the key would not take effect until the
    // NEXT push — which looks exactly like the fix not working.
    expect(CI.indexOf('Install Azure Speech credentials (Pages)')).toBeLessThan(
      CI.indexOf('Deploy to Cloudflare Pages'),
    );
  });

  it('absent is a WARNING and exit 0; present-but-broken FAILS', () => {
    // A condition that predates this step and no code can fix must not take the
    // whole deploy red. A credential we hold and cannot write is the drift the
    // cron work exists to end, so that direction fails.
    expect(STEP).toMatch(/::warning title=Azure Speech key not set/);
    expect(STEP).toMatch(/exit 0/);
    expect(STEP).toMatch(/process\.exit\(1\)/);
    expect(STEP, 'a silent skip re-arms exactly the trap this closes').not.toMatch(
      /continue-on-error/,
    );
  });

  it('keeps secret hygiene: stdin not argv, env not argv, names never values', () => {
    // This repo is public. Same rules as the service-account and DSN steps.
    expect(STEP).toMatch(/printf '%s' "\$\{AZURE_TTS_KEY\}"/);
    expect(STEP).toMatch(/pages secret put AZURE_TTS_KEY/);
    expect(STEP).toMatch(/process\.env\.AZURE_TTS_KEY/);
    expect(STEP, 'the key must never reach a command line').not.toMatch(
      /secret put AZURE_TTS_KEY.*\$\{?AZURE_TTS_KEY/,
    );
    expect(STEP, 'set -x would echo the secret').not.toMatch(/set -x/);
  });

  it('names the variable /api/tts actually reads', () => {
    // The Sentry bug in miniature: the relay guarded on SENTRY_DSN while the
    // sync pushed VITE_SENTRY_DSN, so the guard was permanently false. Derive
    // the name from the endpoint rather than restating it.
    const tts = readFileSync('functions/api/tts.js', 'utf8');
    expect(tts).toMatch(/env\.AZURE_TTS_KEY/);
    expect(tts).toMatch(/env\.AZURE_TTS_REGION/);
  });
});

describe('a failed play on the AI listening screen names its cause', () => {
  const SRC = readFileSync('src/components/practice/AIListeningScreen.tsx', 'utf8')
    // Comments stripped: the block added there quotes the old string verbatim.
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');

  it('reads the recorded failure instead of a fixed sentence', () => {
    expect(SRC).toMatch(/describeTtsFailure\(getLastTtsFailure\(\)\)/);
    expect(
      SRC,
      'the bare "Audio unavailable — transcript only" is back; it names nothing',
    ).not.toMatch(/Audio unavailable — transcript only/);
  });
});
