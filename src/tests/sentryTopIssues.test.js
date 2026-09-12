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

/**
 * Every `call` to the sessions endpoint, one string per invocation, sliced
 * from the URL to the end of its backslash-continued command. Derived rather
 * than counted: a third sessions read added next month is picked up here, and
 * a hand-written "there are two" would pass at whatever rate it still covered.
 */
function sessionCalls(code) {
  const out = [];
  const url = '/sessions/';
  let i = code.indexOf(url);
  while (i !== -1) {
    const lines = code.slice(i).split('\n');
    const cmd = [];
    for (const line of lines) {
      cmd.push(line);
      if (!line.trimEnd().endsWith('\\')) break;
    }
    out.push(cmd.join('\n'));
    i = code.indexOf(url, i + url.length);
  }
  return out;
}

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

describe('a refusal reports what the token CAN reach', () => {
  it('probes the endpoints instead of repeating one sentence', () => {
    // WHY (2026-09-11): four credential changes in a row ended at the same
    // "403 You do not have permission", because that is all Sentry says for a
    // missing scope, an invisible project and an org policy alike. Asking for
    // a fifth change while the report still cannot tell them apart is the
    // wrong-but-plausible-hypothesis loop, and it spends the owner's time.
    expect(CODE).toMatch(/What this token can reach/);
    expect(CODE).toMatch(/probe\(\) \{/);
    // The discriminator no re-paste can reveal: /auth/ answers 200 for a USER
    // auth token and 401/403 for an ORGANIZATION token, whose fixed scope set
    // never includes event:read.
    expect(CODE).toMatch(/api\/0\/auth\//);
    expect(CODE).toMatch(/user token.*org token/);
    // Both issue routes are probed, so "can it read ANY issues" and "can it
    // read THIS project's issues" stop being the same question.
    expect(CODE).toMatch(/no project filter/);
  });

  it('prints statuses and fixed path shapes, never slugs or bodies', () => {
    const probe = CODE.slice(
      CODE.indexOf('What this token can reach'),
      CODE.indexOf('NAME THE REMEDY'),
    );
    expect(probe, 'the probe echoes the org slug').not.toMatch(/echo[^\n]*\$ORG/);
    expect(probe, 'the probe dumps a response body').not.toMatch(/cat "\$BODY"/);
    // Labels are literal; the slugs are substituted out of what is displayed.
    expect(probe).toMatch(/<org>/);
    expect(probe).toMatch(/<proj>/);
  });
});

describe('zero sessions is diagnosed, not just reported', () => {
  it('reads the project itself, which says whether sessions ever arrived', () => {
    // "sessions=0" alone cannot tell "the browser SDK is not delivering" from
    // "the query is shaped wrong", and the CODE says sessions should flow:
    // browserSessionIntegration is in the SDK defaults, an `integrations`
    // ARRAY merges with those defaults rather than replacing them, beforeSend
    // only filters ERROR events, and nothing sets autoSessionTracking: false,
    // a tunnel or a custom transport. The project endpoint settles it, and
    // this token already reaches it.
    expect(CODE).toMatch(/Ingestion health/);
    expect(CODE).toMatch(/hasSessions/);
    expect(CODE).toMatch(/firstEvent/);
    // A second, differently shaped read: no groupBy, 90 days. If both come
    // back empty the absence is real rather than an artefact of the first.
    expect(CODE).toMatch(/sessions_90d_ungrouped/);
    expect(CODE).toMatch(/statsPeriod=90d/);
  });

  it('reports an ABSENT field as absent, never as false', () => {
    // A field the serializer does not return must not be rendered `false`.
    // "no sessions" for a field that was never there is a fabricated
    // measurement — the failure this repo keeps writing down.
    expect(CODE).toMatch(/if has\("hasSessions"\) then \.hasSessions else "absent" end/);
    expect(CODE, 'an absent field would read as false').not.toMatch(/\.hasSessions \/\/ false/);
  });

  it('every sessions read carries an interval', () => {
    // THE DEFECT THIS PINS, and it produced a fabricated measurement I
    // reported to the owner half a dozen times. Sentry's sessions endpoint
    // REQUIRES `interval`. Without it the 90d ungrouped read answers
    // `400 Your interval and date range would create too many results` and
    // the 14d grouped read answers **200 with an empty groups array** — which
    // reads exactly like "this project has had no sessions in fourteen days".
    // It never had. `hasSessions=true` on the project settles it.
    //
    // Derived, not restated: EVERY sessions call must carry it, because the
    // two reads exist to corroborate each other and one malformed read
    // silently turns a corroboration into a repetition.
    const calls = sessionCalls(CODE);
    expect(calls.length, 'the sessions endpoint is not read at all').toBeGreaterThanOrEqual(2);
    const missing = calls.filter((c) => !/--data-urlencode "interval=/.test(c));
    expect(
      missing.length,
      `sessions read(s) with no interval — these return 400 or an empty 200:\n${missing.join('\n---\n')}`,
    ).toBe(0);
  });

  it('an empty result is reported as undetermined, never as zero', () => {
    // The other half of the same defect. Even with `interval` pinned above, a
    // query that resolves to nothing must not assert an absence — say what
    // was not resolvable and point at the field that CAN answer yes or no.
    expect(CODE, 'an empty query result is stated as an absence of sessions').not.toMatch(
      /no sessions in this window/,
    );
    expect(CODE).toMatch(/sessions not resolvable from this query/);
  });

  it('degrades instead of failing the report', () => {
    // Ingestion health is supporting evidence. Losing it must not cost the
    // list, exactly as with session health.
    // Anchored on CODE, not on comment text: `CODE` has comments stripped, so
    // an anchor that only exists in a comment yields -1 and slices to the end
    // of the file — which contains every `exit 1` in the script. Caught by the
    // assertion failing, which is the assertion working.
    const slice = CODE.slice(
      CODE.indexOf('Ingestion health'),
      CODE.indexOf('echo "── Session health'),
    );
    expect(slice).toMatch(/project detail unavailable/);
    expect(slice, 'a missing probe now fails the whole report').not.toMatch(/exit 1/);
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
    // The refusal must name the remedy, not just the symptom. This used to
    // pin one literal sentence; that went stale the moment the remedy became
    // conditional on WHICH token was used, and a stale pin is how a guard
    // starts failing for a reason unrelated to what it guards. It now asserts
    // the property: every branch names the secret, and the refusal carries
    // whichever branch applied.
    const hints = CODE.match(/SENTRY_ISSUES_TOKEN [a-z]/g) ?? [];
    expect(hints.length, 'no branch of the remedy names the secret').toBeGreaterThanOrEqual(3);
    expect(CODE).toMatch(/\$REMEDY/);
    expect(CODE).toMatch(/event:read/);
  });

  it('never reads the whole secrets context', () => {
    // `toJSON(secrets)` answered one question — which secret NAMES Actions can
    // see — and it answered it. Keeping a read of the ENTIRE secrets context
    // in a PUBLIC repo's workflow afterwards is debt, not coverage; it is also
    // a textbook exfiltration shape and the most likely reason this workflow
    // alone started coming back `action_required`. A diagnostic that has done
    // its job is removed, not left lying around.
    expect(CODE, 'the whole secrets context is read again').not.toMatch(/toJSON\(secrets\)/);
    expect(CODE, 'the secrets JSON is back in env').not.toMatch(/SECRET_NAMES_JSON/);
  });

  it('the fallback announces itself', () => {
    // THE DEFECT THIS CLOSES (2026-09-11): the owner added
    // SENTRY_ISSUES_TOKEN, the run still read it empty, fell back SILENTLY,
    // and then told them to add the secret they had just added. A report that
    // misstates its own cause is worse than one that says nothing.
    expect(CODE).toMatch(/is not visible to this job/);
    expect(CODE).toMatch(/not readable by Actions/);
    expect(CODE).toMatch(/REMEDY="\$ISSUES_HINT"/);
    expect(CODE).toMatch(/\$REMEDY/);
  });

  it('names a missing secret by NAME, never by value', () => {
    // Absent must be a clear message rather than an obscure 404, and the
    // diagnostic prints field names only — the backup-health lesson.
    expect(CODE).toMatch(/Sentry secrets missing/);
    expect(CODE).toMatch(/MISSING="\$MISSING SENTRY_AUTH_TOKEN"/);
  });
});

describe('it can actually be triggered, and never reddens a deploy', () => {
  it('runs on push and on a schedule, not only on demand', () => {
    // API dispatches began returning `action_required` — queued, zero jobs,
    // awaiting a UI approval. Every API route out is closed (approve is
    // fork-PR only, rerun is refused, repository_dispatch is proxy-blocked),
    // while PUSH runs are not gated. A report that can only be produced by
    // asking the owner to click is a report that does not get produced.
    expect(CODE).toMatch(/push:\s*\n\s*branches: \[master\]/);
    expect(CODE).toMatch(/schedule:/);
    expect(CODE).toMatch(/cron: '10 7 \* \* \*'/);
  });

  it('supplies the window defaults that `inputs` cannot give on push', () => {
    // `inputs` is empty for push/schedule, so an un-defaulted PERIOD would
    // send `statsPeriod=` and query nothing.
    expect(CODE).toMatch(/PERIOD: \$\{\{ inputs\.period \|\| '14d' \}\}/);
    expect(CODE).toMatch(/LIMIT: \$\{\{ inputs\.limit \|\| '20' \}\}/);
  });

  it('is RED on dispatch and a WARNING on push', () => {
    // On dispatch the list is the whole point, so a refusal must fail. On
    // push it rides along with a deploy, and a telemetry read has no business
    // turning a green deploy red.
    expect(CODE).toMatch(/EVENT: \$\{\{ github\.event_name \}\}/);
    expect(CODE).toMatch(/if \[ "\$\{EVENT:-workflow_dispatch\}" = "workflow_dispatch" \]/);
    expect(CODE).toMatch(/::warning title=Sentry issues unreadable/);
  });

  it('cannot die silently inside an assignment', () => {
    // FOUND BY DRY-RUN, NOT BY READING. jq exits 5 when $BODY holds an array
    // rather than an object — which the probe guarantees, since it leaves
    // $BODY on a list endpoint — and a failing command substitution inside an
    // ASSIGNMENT aborts under `set -e`, before anything is printed.
    expect(CODE).toMatch(/head -c 200 \|\| true/);
    // And the refusal's own reason must be captured BEFORE the probe reuses
    // $BODY, or the message describes whichever endpoint the probe hit last.
    const secondAt = CODE.indexOf('SECOND="$ST ($(detail))"');
    const probeAt = CODE.indexOf('What this token can reach');
    expect(secondAt, 'the refusal reason is not captured').toBeGreaterThan(-1);
    expect(secondAt, 'the probe clobbers $BODY before the reason is read').toBeLessThan(probeAt);
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
