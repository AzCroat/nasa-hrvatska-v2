// src/tests/serviceAccountInstall.test.js
//
// The Firebase service-account install pins (2026-08-26).
//
// THE FINDING: FIREBASE_SERVICE_ACCOUNT_JSON has never been set on the Pages
// project. /api/backup-health's first run reported fifteen consecutive config
// failures — the weekly Firestore backup has NEVER produced a restorable
// snapshot. The same value gates /api/delete-account, which fails CLOSED, so a
// learner asking to delete their account gets a 500 and keeps it; and
// /api/backfill; and the Google TTS fallback.
//
// It sat unfixed for years because it was filed as a dashboard chore. It is the
// same install path the managed cron secret already uses. CI now applies it on
// every deploy, so it is set once as a GitHub secret and never drifts after.
//
// These tests pin the four properties that make that install safe:
//   1. it runs BEFORE the Pages deploy (a Pages secret reaches Functions only
//      through a NEW deployment)
//   2. an ABSENT secret warns and continues (it cannot take the deploy red for
//      a condition that predates the change and no code can fix)
//   3. a PRESENT-but-broken secret fails (holding a credential we cannot write
//      is the drift the cron work was done to end)
//   4. the value never reaches argv, a log line, or an error message — this
//      repo is public

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '../..');
// Test-only reads over repo-relative path literals — no user input reaches them.
const ciSrc = readFileSync(join(root, '.github/workflows/ci.yml'), 'utf8');
const backupSrc = readFileSync(join(root, 'functions/api/backup-progress.js'), 'utf8');
const deleteSrc = readFileSync(join(root, 'functions/api/delete-account.js'), 'utf8');

const SECRET = 'FIREBASE_SERVICE_ACCOUNT_JSON';

/** The `run:` body of the install step, isolated from the rest of the file. */
function installBlock() {
  const start = ciSrc.indexOf('- name: Install Firebase service account (Pages)');
  expect(start, 'the install step must exist in ci.yml').toBeGreaterThan(-1);
  const rest = ciSrc.slice(start + 1);
  const end = rest.indexOf('\n      - name:');
  return end === -1 ? rest : rest.slice(0, end);
}

describe('the install is wired into the deploy', () => {
  it('writes the secret to the Pages project', () => {
    expect(ciSrc).toContain(`wrangler@3 pages secret put ${SECRET}`);
  });

  it('runs BEFORE the Pages deploy', () => {
    // Installed afterwards it would sit unused until the next push — the deploy
    // that "fixed" the outage would not have.
    const install = ciSrc.indexOf(`pages secret put ${SECRET}`);
    const deploy = ciSrc.indexOf('wrangler@3 pages deploy');
    expect(install).toBeGreaterThan(-1);
    expect(deploy).toBeGreaterThan(install);
  });

  it('is gated on the shared deploy gate, not its own condition', () => {
    expect(installBlock()).toContain("if: env.DEPLOY == 'true'");
  });

  it('reads the value from a GitHub secret rather than hard-coding it', () => {
    expect(installBlock()).toContain(`${SECRET}: \${{ secrets.${SECRET} }}`);
    // A literal credential in a public repo, in any shape.
    expect(ciSrc).not.toMatch(/-----BEGIN [A-Z ]*PRIVATE KEY-----/);
  });
});

describe('absent versus broken are treated differently', () => {
  it('an ABSENT secret warns and exits 0, so the deploy still ships', () => {
    const block = installBlock();
    expect(block).toMatch(/if \[ -z "\$\{FIREBASE_SERVICE_ACCOUNT_JSON:-\}" \]/);
    expect(block).toContain('::warning');
    expect(block).toContain('exit 0');
  });

  it('the absence warning NAMES the secret and what breaks without it', () => {
    // A warning that does not say what to set is the class of warning people
    // learn to skim — setup-cf-resources.mjs warned for years about a variable
    // the codebase did not need while never mentioning this one.
    const block = installBlock();
    const warnLine = block.split('\n').find((l) => l.includes('::warning'));
    expect(warnLine).toContain(SECRET);
    expect(warnLine).toMatch(/backup/i);
    expect(warnLine).toMatch(/delete-account/i);
  });

  it('a PRESENT-but-broken secret fails the step rather than installing it', () => {
    const block = installBlock();
    // set -e plus an explicit non-zero exit from the shape check.
    expect(block).toContain('set -euo pipefail');
    expect(block).toContain('process.exit(1)');
    // Never continue-on-error: holding a credential we cannot write is the
    // drift condition itself.
    expect(block).not.toContain('continue-on-error');
  });

  it('the shape check rejects malformed JSON and missing required fields', () => {
    const block = installBlock();
    expect(block).toContain('JSON.parse');
    for (const field of ['client_email', 'private_key', 'project_id']) {
      expect(block).toContain(field);
    }
  });
});

describe('secret hygiene — this repo is public', () => {
  it('the value is piped on stdin, never passed as an argument', () => {
    const block = installBlock();
    expect(block).toContain(`printf '%s' "\${${SECRET}}"`);
    // The secret name may appear as a wrangler argument (that is the KEY, not
    // the value); the expansion must never be one.
    expect(block).not.toMatch(/wrangler@3[^\n]*\$\{FIREBASE_SERVICE_ACCOUNT_JSON\}/);
  });

  it('the shape check reads the environment, never argv', () => {
    expect(installBlock()).toContain(`process.env.${SECRET}`);
  });

  it('nothing in the step echoes the value', () => {
    const block = installBlock();
    for (const line of block.split('\n')) {
      if (!/\b(echo|console\.(log|error))\b/.test(line)) continue;
      expect(line, `a log line must not interpolate the secret: ${line.trim()}`).not.toMatch(
        /\$\{?FIREBASE_SERVICE_ACCOUNT_JSON|process\.env\.FIREBASE_SERVICE_ACCOUNT_JSON|\braw\b/,
      );
    }
  });

  it('never enables shell tracing, which would print the piped value', () => {
    expect(installBlock()).not.toMatch(/set -[a-z]*x/);
  });
});

describe('what depends on this secret', () => {
  // If a future change stops reading it in these two places, this install is
  // pointless and the test should say so rather than quietly guarding nothing.
  it('the weekly backup still requires it', () => {
    expect(backupSrc).toContain(`env.${SECRET}`);
  });

  it('account deletion still requires it, and still fails CLOSED', () => {
    expect(deleteSrc).toContain(`env.${SECRET}`);
    expect(deleteSrc).toContain('server_misconfigured');
  });
});
