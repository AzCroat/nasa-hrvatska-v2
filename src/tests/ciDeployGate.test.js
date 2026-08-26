// src/tests/ciDeployGate.test.js
//
// The deploy gate pins (2026-08-26).
//
// THE INCIDENT: ci.yml grew a workflow_dispatch trigger so a stalled master run
// had an honest retry button — twice, a run had been created and never
// dispatched a job, and with only push/pull_request triggers the only way to
// free the concurrency group was to push another commit to master, i.e. to fake
// a change to production in order to retry a deploy.
//
// But every Cloudflare step was gated on `github.event_name == 'push'`. So the
// lever's first real use, on the #549 merge, produced a run with every check
// green that deployed NOTHING — and, because the concurrency group cancels
// in-progress runs, it cancelled the real push run it had replaced. Production
// sat on the previous build behind a wall of green checkmarks. A retry button
// that cannot retry the thing that failed is worse than no button: it reports
// success for work it did not do.
//
// These tests pin the two properties that make the lever honest — a dispatch on
// master deploys, and a dispatch anywhere else does not.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
// Test-only reader over a repo-relative path literal — no user input reaches it.
const ciSrc = readFileSync(join(__dir, '../..', '.github/workflows/ci.yml'), 'utf8');

/** Every step name whose absence means the deploy did not happen. */
const DEPLOY_STEPS = [
  'Provision Cloudflare resources (idempotent)',
  'Install managed cron secret (Pages)',
  'Deploy to Cloudflare Pages',
  'Deploy scheduled Worker (streak-reminder cron)',
  'Install managed cron secret (scheduled Worker)',
];

/** The `if:` a step carries, read from the line following its `- name:`. */
function conditionFor(stepName) {
  const lines = ciSrc.split('\n');
  const at = lines.findIndex((l) => l.includes(`- name: ${stepName}`));
  if (at === -1) return null;
  // The condition sits within the step's own block; stop at the next step.
  for (let i = at + 1; i < lines.length; i++) {
    if (/^\s*- (name|uses):/.test(lines[i])) break;
    const m = lines[i].match(/^\s*if:\s*(.+?)\s*$/);
    if (m) return m[1];
  }
  return null;
}

/**
 * Evaluate the DEPLOY expression the way Actions does, for one event/ref pair.
 * Reads the expression out of ci.yml rather than restating it, so a reworded
 * gate is still measured — restating it here would test this file against
 * itself.
 */
function deployFor(eventName, ref) {
  const m = ciSrc.match(/^\s*DEPLOY:\s*\$\{\{\s*(.+?)\s*\}\}\s*$/m);
  expect(m, 'build-deploy must define a DEPLOY env expression').not.toBeNull();
  const expr = m[1]
    .replace(/github\.ref/g, JSON.stringify(ref))
    .replace(/github\.event_name/g, JSON.stringify(eventName))
    .replace(/\s==\s/g, ' === ');
  // The expression is assembled from ci.yml's own text with only string
  // literals substituted; it contains no external input.
  return Boolean(new Function(`return (${expr});`)());
}

describe('the deploy gate is defined once', () => {
  it('every Cloudflare step reads the shared DEPLOY value', () => {
    for (const step of DEPLOY_STEPS) {
      expect(conditionFor(step), `${step} must exist in ci.yml`).not.toBeNull();
      expect(conditionFor(step), `${step} must read the shared gate`).toBe("env.DEPLOY == 'true'");
    }
  });

  it('no deploy step carries its own copy of the old push-only condition', () => {
    // Five copies of one expression is how they drift. Prose ABOUT the old
    // condition is fine and deliberate — a live `if:` using it is not.
    const liveConditions = ciSrc
      .split('\n')
      .filter((l) => /^\s*if:/.test(l))
      .join('\n');
    expect(liveConditions).not.toContain("github.event_name == 'push'");
  });
});

describe('what the gate lets through', () => {
  it('a push to master deploys — unchanged from before the dispatch lever', () => {
    expect(deployFor('push', 'refs/heads/master')).toBe(true);
  });

  it('a DISPATCH on master deploys, which is the whole point of the lever', () => {
    expect(deployFor('workflow_dispatch', 'refs/heads/master')).toBe(true);
  });

  it('a pull request never deploys', () => {
    expect(deployFor('pull_request', 'refs/heads/master')).toBe(false);
    expect(deployFor('pull_request', 'refs/pull/549/merge')).toBe(false);
  });

  // THE REASON THE REF CHECK EXISTS. `push` only ever fires on master, so it is
  // tempting to write the gate as `event_name != 'pull_request'`. A dispatch can
  // be started against ANY ref from the Actions UI, and that gate would build a
  // feature branch and publish it to production under --branch=master — a
  // one-click path to shipping unreviewed work, added by a change whose purpose
  // was to make deploys more reliable.
  it('a dispatch from a NON-master ref does not deploy', () => {
    expect(deployFor('workflow_dispatch', 'refs/heads/claude/some-branch')).toBe(false);
    expect(deployFor('workflow_dispatch', 'refs/heads/master-backup')).toBe(false);
    expect(deployFor('workflow_dispatch', 'refs/tags/v1.2.3')).toBe(false);
  });
});
