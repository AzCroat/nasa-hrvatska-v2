/**
 * sentryTopIssues.test.js — the triage report is read-only and leaks nothing.
 *
 * WHY THE WORKFLOW EXISTS. Every real defect found in the 2026-09-10 audio and
 * feedback work came from a Sentry event or an owner field report; none came
 * from reading code. The 421-route render sweep found ZERO crashes, which is
 * the useful negative: what remains is silent wrongness, whose only trace is
 * in Sentry. The credential to read that has been sitting in CI all along
 * (ai-usage-stats.yml uses it for release health) — the list was simply never
 * asked for.
 *
 * WHY THIS FILE EXISTS. The workflow holds a token with read access to the
 * org's error data, in a PUBLIC repo. Two properties have to hold and neither
 * is visible from the YAML at a glance: it must not be able to MUTATE anything
 * in Sentry, and it must not be able to print the token.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const WF = readFileSync('.github/workflows/sentry-top-issues.yml', 'utf8');
/**
 * Comments stripped. EVERY assertion about what the workflow DOES reads this,
 * not `WF` — the raw text contains prose explaining each rule, and a pin
 * satisfied by its own explanation guards nothing. Found by mutation: swapping
 * `sort=freq` for `sort=date` in the real curl left the ranking assertion
 * green, because the comment above it says the words `sort=freq`. Fifth
 * instance of this shape in one session.
 */
const CODE = WF.replace(/^\s*#.*$/gm, '');

describe('the Sentry triage report is read-only', () => {
  it('lists issues and never mutates them', () => {
    // A token that can resolve, assign, merge or delete issues is one typo
    // away from destroying the triage history it exists to read.
    expect(CODE).toMatch(/api\/0\/projects\/\$ORG\/\$PROJ\/issues\//);
    for (const verb of ['-X PUT', '-X POST', '-X DELETE', '--request PUT', '--request DELETE']) {
      expect(CODE, `the report can ${verb} against Sentry`).not.toContain(verb);
    }
  });

  it('ranks by event count — the question a P0/P1 triage actually asks', () => {
    // `sort=freq` answers "what is hurting the most people". Sorting by newest
    // would put a one-off ahead of an outage.
    expect(CODE).toMatch(/sort=\$?freq/);
    expect(CODE).toMatch(/query=is:unresolved/);
  });
});

describe('the token cannot reach a log line', () => {
  it('is bound through env and never passed on a command line', () => {
    // This repo is public. Same rule as the cron-secret, service-account and
    // DSN install steps: argv reaches the process table.
    expect(CODE).toMatch(/SENTRY_AUTH_TOKEN: \$\{\{ secrets\.SENTRY_AUTH_TOKEN \}\}/);
    expect(CODE).toMatch(/Authorization: Bearer \$TOKEN/);
  });

  it('never enables set -x, which would echo it', () => {
    // Comments mentioning `set -x` are stripped first — a rule satisfied by
    // prose about the rule is the decorative-guard failure this repo keeps
    // rediscovering (offlineResourceKey, PopCultureScreen, emptyAudio, and the
    // Azure step that broke sentryDsnInstall's slice).
    expect(CODE).not.toMatch(/set -x/);
    expect(CODE, 'the token is echoed').not.toMatch(/echo[^\n]*SENTRY_AUTH_TOKEN/);
  });

  it('names a missing secret by NAME, never by value', () => {
    // Absent must be a clear message rather than an obscure 404, and the
    // diagnostic prints field names only — the backup-health lesson.
    expect(CODE).toMatch(/Sentry secrets missing/);
    expect(CODE).toMatch(/MISSING="\$MISSING SENTRY_AUTH_TOKEN"/);
  });
});

describe('it is dispatchable and touches no deploy', () => {
  it('runs only on demand', () => {
    expect(CODE).toMatch(/on:\s*\n\s*workflow_dispatch:/);
  });

  it('carries no Cloudflare deploy step', () => {
    // ciDeployGate pins that every Cloudflare step reads env.DEPLOY. The
    // simplest way to stay outside that contract is to have no such step.
    expect(CODE).not.toMatch(/pages deploy|wrangler deploy/);
    expect(CODE).toMatch(/permissions:\s*\n\s*contents: read/);
  });
});
