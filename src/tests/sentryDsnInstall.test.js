/**
 * sentryDsnInstall.test.js — the Sentry DSN reaches BOTH halves (2026-09-04).
 *
 * THE DEFECT: `/api/report-error` reads `env.SENTRY_DSN`. Nothing installed a
 * variable by that name — `sync-cf-pages-env.yml` pushed `VITE_SENTRY_DSN`, a
 * different key — so the relay's `if (env.SENTRY_DSN)` was permanently false
 * and it had never forwarded a single event. It still console.errors to the
 * Cloudflare tail, which is exactly what made the endpoint look healthy.
 *
 * It was found from OUTSIDE the code, by noticing the Sentry project had
 * received nothing at all. Nothing in the repo could have surfaced it: this is
 * a two-places-must-agree fact, and the two places were a JS property access
 * and a shell argument in a YAML file. No type, no import, no test connected
 * them — the identical shape as the cron secret that drifted across a Worker
 * secret and a Pages env var for 79 consecutive failed runs, which is why
 * cronAuth.test.js exists and why this does.
 *
 * The second half is quieter and worth stating plainly: `main.tsx` guards
 * `Sentry.init` on the DSN being truthy and skips the dynamic import when it is
 * empty. That is deliberate (no DSN, no 40KB SDK) and therefore silent — an
 * unset GitHub secret expands to "" and ships a build with no telemetry at all,
 * with nothing in the log to say so. Same shape as FIREBASE_SERVICE_ACCOUNT_JSON
 * going unset for years, so it gets the same ::warning treatment.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const CI = readFileSync('.github/workflows/ci.yml', 'utf8');
const SYNC = readFileSync('.github/workflows/sync-cf-pages-env.yml', 'utf8');
const RELAY = readFileSync('functions/api/report-error.js', 'utf8');
const MAIN = readFileSync('src/main.tsx', 'utf8');

/** The env var name the server relay actually reads, derived from source. */
function relayVarName() {
  const m = RELAY.match(/env\.([A-Z0-9_]+)\s*&&[^\n]*isSentryIgnored/);
  if (!m) throw new Error('could not find the DSN guard in report-error.js');
  return m[1];
}

describe('the name the code reads is the name CI installs', () => {
  it('the relay reads SENTRY_DSN (unprefixed)', () => {
    // DERIVED from report-error.js rather than restated, so renaming the
    // variable there fails here instead of silently decoupling the two.
    expect(relayVarName()).toBe('SENTRY_DSN');
  });

  it('ci.yml installs that exact name onto Pages', () => {
    const name = relayVarName();
    expect(
      CI,
      `report-error.js reads env.${name}, but ci.yml never installs a Pages ` +
        `secret by that name. This is the defect the file documents: the relay ` +
        `goes permanently quiet and still logs to the Cloudflare tail, so it ` +
        `looks healthy.`,
    ).toContain(`pages secret put ${name}`);
  });

  it('does NOT install the VITE_-prefixed name onto Pages', () => {
    // Inert by construction: the browser bundle is built in ci.yml and deployed
    // as prebuilt static assets, so Cloudflare never rebuilds and nothing
    // VITE_-prefixed on Pages can reach the client. Installing it invites the
    // belief that the client half is covered by the Pages env, which it is not.
    expect(CI).not.toMatch(/pages secret put VITE_SENTRY_DSN/);
    expect(SYNC).not.toMatch(/push_secret\s+VITE_SENTRY_DSN/);
  });

  it('the manual sync workflow pushes the same name as ci.yml', () => {
    // sync-cf-pages-env.yml is workflow_dispatch-only. Left on the old name it
    // would silently reinstate the bug on the next dispatch — the drift half of
    // the cron finding, where two processes wrote the same fact differently.
    expect(SYNC).toMatch(/push_secret\s+SENTRY_DSN\b/);
  });
});

describe('the install runs where a Pages secret can take effect', () => {
  it('installs BEFORE the Pages deploy', () => {
    // A Pages secret reaches Functions through a NEW deployment, not the
    // running one. Installed after `pages deploy`, the value sits there unused
    // until whatever deploy happens next — which is indistinguishable from
    // working, right up until it matters. Same ordering rule as the cron
    // secret's Pages half and the service account.
    const install = CI.indexOf('pages secret put SENTRY_DSN');
    const deploy = CI.indexOf('pages deploy dist');
    expect(install, 'the SENTRY_DSN install step is missing').toBeGreaterThan(-1);
    expect(deploy, 'the Pages deploy step is missing').toBeGreaterThan(-1);
    expect(install, 'SENTRY_DSN must be installed BEFORE pages deploy').toBeLessThan(deploy);
  });

  it('is gated on the same DEPLOY env as every other Cloudflare step', () => {
    // The ref check in env.DEPLOY is load-bearing: a workflow_dispatch can
    // target any ref, and a Cloudflare step gated on the event name alone would
    // publish a feature branch to production. Pinned generally by
    // ciDeployGate.test.js; asserted here so a NEW Cloudflare step cannot be
    // added without it.
    const step = CI.slice(CI.indexOf('- name: Install Sentry DSN (Pages)'));
    const head = step.slice(0, step.indexOf('run: |'));
    expect(head).toMatch(/if:\s*env\.DEPLOY == 'true'/);
  });
});

describe('absent is warned about, malformed is a failure', () => {
  it('an absent secret warns rather than failing the deploy', () => {
    // A condition no code change can fix must not take the whole deploy red —
    // it predates the change and blocking on it helps nobody. But it must not
    // be SILENT either: a silent skip is the failure mode this repo keeps
    // rediscovering. Warn, exit 0.
    const step = CI.slice(CI.indexOf('- name: Install Sentry DSN (Pages)'));
    const body = step.slice(0, step.indexOf('- name: Deploy to Cloudflare Pages'));
    expect(body).toMatch(/::warning title=Sentry DSN not set/);
    expect(body).toMatch(/exit 0/);
    expect(body, 'an absent-secret skip must not be continue-on-error').not.toMatch(
      /continue-on-error/,
    );
  });

  it('the BUILD warns too, because the client half is guarded silently', () => {
    // main.tsx skips Sentry.init on an empty DSN and never imports the SDK.
    // That is correct and it is invisible; the build should say so.
    expect(MAIN).toMatch(/if \(import\.meta\.env\.VITE_SENTRY_DSN\)/);
    expect(CI).toMatch(/- name: Warn if the Sentry DSN is absent/);
    const step = CI.slice(CI.indexOf('- name: Warn if the Sentry DSN is absent'));
    const body = step.slice(0, step.indexOf('- name: Build'));
    expect(body).toMatch(/if \[ -z "\$\{VITE_SENTRY_DSN:-\}" \]/);
    expect(body).toMatch(/::warning title=Sentry DSN not set/);
  });

  it('never tests a secret in a step-level `if`', () => {
    // The `secrets` context is not among those available to `steps.<id>.if`.
    // A condition written there does not fail loudly — it just does not do what
    // it looks like it does, which is the whole category of bug this file
    // exists for. Both install steps bind through `env` and test in the shell;
    // so must anything added later.
    expect(
      CI,
      'a step-level `if` referencing the secrets context does not evaluate as written',
    ).not.toMatch(/if:\s*\$\{\{\s*secrets\./);
  });

  it('validates DSN shape before installing it', () => {
    // forwardToSentry does `new URL(dsn)` and derives the public key from the
    // username and the project id from the path, inside waitUntil — so a
    // malformed DSN fails after the response has already been returned, where
    // nobody sees it. Catch it at install time instead.
    const step = CI.slice(CI.indexOf('- name: Install Sentry DSN (Pages)'));
    const body = step.slice(0, step.indexOf('- name: Deploy to Cloudflare Pages'));
    expect(body).toMatch(/new URL\(raw\)/);
    expect(body).toMatch(/u\.username/);
    expect(body).toMatch(/u\.pathname/);
  });
});

describe('the deploy ships the telemetry it was built with', () => {
  // THE GAP THIS CLOSES (2026-09-04): with the secret set, valid, and installed
  // for the relay, a live browser still had `window.__nhSentry === undefined`
  // and made no request for the SDK chunk — so the DSN was falsy at runtime in
  // whatever bundle was being served. Every layer either side of that was
  // checkable from here; the one link in the middle, "did the DSN reach the
  // artifact we uploaded", could only be answered by opening DevTools on
  // production.
  //
  // Reproduced locally in both directions before the step was written: built
  // WITH the DSN, it is inlined and a vendor-sentry chunk is emitted; built
  // with an empty one, Rollup tree-shakes the whole block, so the chunk is not
  // emitted AT ALL and no ingest host appears anywhere in dist. That second
  // shape is exactly what the live site showed.
  const step = CI.slice(CI.indexOf('- name: Verify the built bundle carries the Sentry DSN'));
  const body = step.slice(0, step.indexOf('- name: Bundle size check'));

  it('the step exists', () => {
    expect(CI).toMatch(/- name: Verify the built bundle carries the Sentry DSN/);
  });

  it('asserts the OUTPUT, not the input', () => {
    // The Build step proves the variable was PASSED. Only reading dist/ proves
    // it was BAKED IN, and that distinction is the entire finding.
    expect(body).toMatch(/readdirSync\(dir\)/);
    expect(body).toMatch(/dist\/assets/);
    expect(body).toMatch(/\.includes\(dsn\)/);
  });

  it('checks the SDK chunk was emitted as well as the DSN', () => {
    // Two independent signals: an empty DSN tree-shakes the import away, so a
    // missing vendor-sentry chunk is its own evidence and does not depend on
    // the string search finding anything.
    // Assert the DERIVATION, not the mention. Written first as a bare
    // /vendor-sentry/ + /hasSdkChunk/ text match, it survived a mutation that
    // replaced the whole computation with `const hasSdkChunk = true` — both
    // strings still appeared. A guard that matches the words around a check
    // rather than the check is the decorative kind this file exists to prevent.
    expect(body).toMatch(
      /const hasSdkChunk = files\.some\(\(f\) => \/vendor-sentry\/\.test\(f\)\)/,
    );
    expect(body).toMatch(/if \(!hasSdkChunk\)/);
  });

  it('runs AFTER the build and BEFORE the Pages deploy', () => {
    // Before the build there is nothing to read; after the deploy the artifact
    // is already public and the check is a post-mortem.
    const build = CI.indexOf('- name: Build\n        run: npm run build');
    const verify = CI.indexOf('- name: Verify the built bundle carries the Sentry DSN');
    const deploy = CI.indexOf('pages deploy dist');
    expect(build).toBeGreaterThan(-1);
    expect(verify, 'verification must come after the build').toBeGreaterThan(build);
    expect(verify, 'verification must come before the deploy').toBeLessThan(deploy);
  });

  it('FAILS when the DSN is held but did not reach the bundle', () => {
    // Present-but-not-shipped is a broken pipeline, and shipping it restores
    // the silent blackout this exists for. Same contract as the install steps:
    // absent warns, present-but-wrong fails.
    expect(body).toMatch(/if \(!carriesDsn\)/);
    expect(body).toMatch(/process\.exit\(1\)/);
    expect(body, 'a failure here must not be swallowed').not.toMatch(/continue-on-error/);
  });

  it('WARNS rather than failing when there is no DSN to look for', () => {
    expect(body).toMatch(/if \[ -z "\$\{SENTRY_DSN:-\}" \]/);
    expect(body).toMatch(/::warning title=Sentry DSN not set/);
    expect(body).toMatch(/exit 0/);
  });

  it('never prints the DSN', () => {
    // The bundle ships it to every browser, but a CI log is a different
    // audience with a different retention. Counts and booleans only.
    expect(body).toMatch(/process\.env\.SENTRY_DSN/);
    expect(body).not.toMatch(/process\.argv/);
    expect(body).not.toMatch(/console\.log\([^)]*\bdsn\b[^)]*\)/);
    expect(body).not.toMatch(/echo[^\n]*\$\{?SENTRY_DSN\}?/);
  });
});

describe('secret hygiene — this repo is public', () => {
  it('the value is piped on stdin, never passed as an argument', () => {
    // Same rule as the service account and the backup failure codes: names
    // never values. argv is visible in process listings and in any `set -x`.
    const step = CI.slice(CI.indexOf('- name: Install Sentry DSN (Pages)'));
    const body = step.slice(0, step.indexOf('- name: Deploy to Cloudflare Pages'));
    expect(body).toMatch(/printf '%s' "\$\{SENTRY_DSN\}"\s*\\?\s*\n?\s*\| npx/);
    // The node shape check must read the environment, not argv.
    expect(body).toMatch(/process\.env\.SENTRY_DSN/);
    expect(body).not.toMatch(/process\.argv/);
    // No diagnostic may echo the DSN itself.
    expect(body).not.toMatch(/echo[^\n]*\$\{?SENTRY_DSN\}?/);
  });
});
