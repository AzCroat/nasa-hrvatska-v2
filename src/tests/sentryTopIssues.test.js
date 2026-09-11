/**
 * sentryTopIssues.test.js — the triage report is read-only, leaks nothing, and
 * CANNOT REPORT SUCCESS WITHOUT A LIST.
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
 * org's error data, in a PUBLIC repo. Three properties have to hold and none
 * is visible from the YAML at a glance: it must not be able to MUTATE
 * anything in Sentry, it must not be able to print the token, and a refusal
 * must go RED — the first version's first real run answered 403 and finished
 * GREEN with no list in it, because `set -e` does not fail a step on a
 * non-final pipeline stage and `curl -f` had already thrown away the one
 * sentence that said why.
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
    expect(CODE).toMatch(/api\/0\/organizations\/\$ORG\/issues\//);
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

describe('a refusal goes red, and names itself', () => {
  it('fails the step on a failed pipeline stage', () => {
    // THE DEFECT, in one assertion. `curl … | jq` under a bare `set -e` exits
    // 0 on a 403: the status of a pipeline is the status of its LAST command.
    // The run was green and empty.
    expect(CODE, 'a failed curl can pass again').toMatch(/set -eu -o pipefail/);
  });

  it('checks the status of every call instead of trusting the exit code', () => {
    const checks = [...CODE.matchAll(/if \[ "\$ST" != "200" \]; then/g)];
    expect(checks.length, 'a call is unchecked').toBeGreaterThanOrEqual(3);
    // Each one must actually stop, not warn and carry on with an empty body.
    expect(CODE.match(/exit 1/g)?.length ?? 0).toBeGreaterThanOrEqual(4);
  });

  it('keeps the response body so the cause can name itself', () => {
    // `-f` discards the body. Sentry answers a scope refusal with a one-line
    // `detail`, which is the difference between "bad token", "wrong org" and
    // "missing scope" — the same class as ttsFetch returning a bare null for
    // a response that had in fact arrived.
    expect(CODE, 'curl -f is back: the reason is discarded again').not.toMatch(/curl -sfS|curl -f/);
    expect(CODE).toMatch(/-o "\$BODY"/);
    expect(CODE).toMatch(/jq -r '\.detail \/\/ \.error \/\/ empty'/);
  });
});

describe('a refused issue stream still reports what it can', () => {
  it('reads session health BEFORE the issues, so a refusal is not a dead end', () => {
    // This is the situation the report is actually in (2026-09-11): the token
    // reads release health but not issues. Session health also answers the
    // question an issue count cannot on its own — "412 events" means one
    // thing against 400 sessions and another against 40,000.
    const sessions = CODE.indexOf('/sessions/');
    const issues = CODE.indexOf('/issues/');
    expect(sessions, 'session health is not read at all').toBeGreaterThan(-1);
    expect(sessions, 'session health is read after the issues it must outlive').toBeLessThan(
      issues,
    );
    expect(CODE).toMatch(/groupBy=session\.status/);
  });

  it('a refused health read degrades — it must not take the report red', () => {
    // Under pipefail the reflex is to exit on every non-200. Here that would
    // be wrong: health is supporting evidence, and losing it must not cost
    // the list. The issues fetch is the only thing that gates the exit code.
    const slice = CODE.slice(CODE.indexOf('/sessions/'), CODE.indexOf('/issues/'));
    expect(slice).toMatch(/session health unavailable/);
    expect(slice, 'a missing health read now fails the whole report').not.toMatch(/exit 1/);
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
    // NAMES ARE ALLOWED, EXPANSIONS ARE NOT, and the first draft of this
    // forbade both — it went red the moment the refusal message started
    // naming SENTRY_AUTH_TOKEN as the secret that stays untouched, which is
    // exactly the "names never values" rule being obeyed. A guard that
    // forbids the remedy is not a stricter guard, it is a wrong one. So it
    // matches a `$`-expansion only, and `$TOKEN_NAME` (a name) is fine while
    // `$TOKEN` (the value) is not.
    expect(CODE, 'a token VALUE is echoed').not.toMatch(/echo[^\n]*\$\{?SENTRY_\w*TOKEN/);
    expect(CODE, 'the resolved token is echoed').not.toMatch(
      /echo[^\n]*\$\{?TOKEN\}?(?![_A-Za-z0-9])/,
    );
  });

  it('prints statuses and names, never the org slug or the body verbatim', () => {
    // The diagnostic added for the 403 is exactly where a "just print the
    // response" reflex would leak identifiers. `detail` is bounded and
    // selected by key; nothing cats the body.
    expect(CODE).toMatch(/head -c 200/);
    expect(CODE, 'the raw error body is dumped').not.toMatch(/cat "\$BODY"/);
    expect(CODE, 'the org slug is printed').not.toMatch(/echo[^\n]*\$ORG/);
  });

  it('takes a dedicated issues token so granting the scope cannot break uploads', () => {
    // SENTRY_AUTH_TOKEN is shared with verify-sentry-sourcemaps.yml, which
    // needs release/artifact-bundle write. Telling someone to REPLACE it with
    // an issues-scoped token breaks source-map upload silently — discovered
    // months later, at the worst moment, on an unreadable stack trace. The
    // optional secret keeps the grant additive.
    expect(CODE).toMatch(/SENTRY_ISSUES_TOKEN: \$\{\{ secrets\.SENTRY_ISSUES_TOKEN \}\}/);
    expect(CODE, 'the preferred token is not tried first').toMatch(
      /TOKEN=\$\(printf '%s' "\$\{SENTRY_ISSUES_TOKEN:-\}"/,
    );
    // `set -u` aborts on an unset variable, and the whole point of this one is
    // that it is normally unset — so both reads must carry the `:-` default
    // or the step dies before it can say anything useful.
    expect(CODE).toMatch(/"\$\{SENTRY_AUTH_TOKEN:-\}"/);
    // The refusal must name the remedy, not just the symptom.
    expect(CODE).toMatch(/Add a repo secret SENTRY_ISSUES_TOKEN/);
    expect(CODE).toMatch(/event:read/);
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
