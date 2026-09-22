// src/tests/codeqlPushTrigger.test.js
//
// CODEQL NEVER RAN ON A MASTER PUSH (found 2026-09-22, while trying to verify
// something else).
//
// `codeql.yml` triggered on `pull_request` and a weekly Monday 06:00 schedule
// and nothing else. A PR analysis reports against the PR's MERGE COMMIT, not
// against `refs/heads/master`, and GitHub tracks code-scanning alerts PER REF —
// so the default branch was analysed once a week. Two consequences, both silent:
// merged code sat up to seven days unscanned, and an alert a merge actually
// FIXED stayed open on master until the next Monday.
//
// Measured rather than reasoned: of 1,122 CodeQL workflow runs, ZERO carried
// `event: push`, and the only `master`-branch analyses were the scheduled ones.
//
// HOW IT WAS FOUND IS THE PART WORTH KEEPING. I was trying to confirm that a
// dismissed alert really was dismissed, and had planned to read the answer off
// "the master run's fresh CodeQL analysis". Reading the triggers first is what
// showed that no such analysis exists — the verification I was about to perform
// would have found no CodeQL on that run and been one inference away from
// reporting "nothing red, therefore confirmed", which is a conclusion
// manufactured out of an absence. A missing mechanism and a passing mechanism
// look identical from the outside.
//
// WHAT THIS GUARD DOES NOT COVER, said plainly rather than left to be assumed:
// it derives its subject from `codeql-action/analyze`, i.e. workflows that run a
// real CodeQL ANALYSIS. `security.yml` uses `codeql-action/upload-sarif` to push
// third-party (Semgrep) results into the same Security tab and has the SAME
// push-trigger gap; it is deliberately outside this file's subject and is NOT
// fixed here. Do not read a green run of this suite as "code scanning is
// refreshed on master" — read it as "every CodeQL analysis is".

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '../..');
const WF_DIR = join(root, '.github/workflows');

// Test-only reads over repo-relative path literals — no user input reaches them.
const workflows = readdirSync(WF_DIR)
  .filter((f) => f.endsWith('.yml') || f.endsWith('.yaml'))
  .map((f) => ({
    file: f,
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources from readdirSync
    src: readFileSync(join(WF_DIR, f), 'utf8'),
  }));

/** The top-level `on:` mapping of a workflow, as raw lines. */
function onBlock(src) {
  const lines = src.split('\n');
  const start = lines.findIndex((l) => /^on:\s*$/.test(l));
  if (start === -1) return null;
  const out = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (/^\S/.test(lines[i])) break; // the next top-level key ends the block
    out.push(lines[i]);
  }
  return out;
}

/**
 * The branch filter of one trigger inside an `on:` block.
 *   null  — the trigger is absent entirely
 *   []    — the trigger is present with no branch filter (i.e. every branch)
 *   [...] — the branches listed, flow (`[a, b]`) or block (`- a`) form
 * Comment lines are stripped first: this file's own `on:` block explains itself
 * at length, and prose naming a branch must not read as configuration.
 */
function branchesFor(block, trigger) {
  if (!block) return null;
  const lines = block.filter((l) => !/^\s*#/.test(l));
  const at = lines.findIndex((l) => new RegExp(`^\\s{2}${trigger}:`).test(l));
  if (at === -1) return null;
  const found = [];
  for (let i = at + 1; i < lines.length; i++) {
    if (/^\s{2}\S/.test(lines[i])) break; // the next trigger ends this one
    const flow = lines[i].match(/^\s+branches:\s*\[(.*)\]\s*$/);
    if (flow) {
      return flow[1]
        .split(',')
        .map((s) => s.trim().replace(/['"]/g, ''))
        .filter(Boolean);
    }
    if (/^\s+branches:\s*$/.test(lines[i])) {
      for (let j = i + 1; j < lines.length; j++) {
        const item = lines[j].match(/^\s+-\s*(.+?)\s*$/);
        if (!item) break;
        found.push(item[1].replace(/['"]/g, ''));
      }
      return found;
    }
  }
  return found;
}

/** Workflows that run a real CodeQL analysis — derived, never listed. */
const analysisWorkflows = workflows.filter(({ src }) => /github\/codeql-action\/analyze/.test(src));

/**
 * The branch we deploy from, read out of ci.yml's own deploy gate rather than
 * written down here. Restating 'master' in a test would make this file a second
 * place to remember; deriving it states the property that actually matters —
 * we scan the branch we ship.
 */
function deployBranch() {
  const ci = readFileSync(join(WF_DIR, 'ci.yml'), 'utf8');
  const m = ci.match(/github\.ref\s*==\s*'refs\/heads\/([A-Za-z0-9._-]+)'/);
  return m ? m[1] : null;
}

describe('every CodeQL analysis runs on the branch we deploy', () => {
  it('the derivation finds something to check', () => {
    // Without this, a renamed action or a moved file would empty the set and
    // make every assertion below vacuously true — the failure mode this repo
    // keeps rediscovering. Both floors, because either one alone can rot.
    expect(workflows.length).toBeGreaterThan(10);
    expect(analysisWorkflows.length).toBeGreaterThanOrEqual(1);
  });

  it('ci.yml still states the deploy branch this check derives from', () => {
    const branch = deployBranch();
    expect(branch, "ci.yml's deploy gate must still name a refs/heads/<branch>").toBeTruthy();
    expect(branch).toMatch(/^[A-Za-z0-9._-]+$/);
  });

  it('each analysis workflow triggers on push to that branch', () => {
    const branch = deployBranch();
    const bad = [];
    for (const { file, src } of analysisWorkflows) {
      const push = branchesFor(onBlock(src), 'push');
      if (push === null) {
        bad.push(`${file}: no push trigger — master is analysed only on a schedule`);
      } else if (push.length > 0 && !push.includes(branch)) {
        bad.push(`${file}: push trigger excludes ${branch} (has ${push.join(', ') || 'none'})`);
      }
    }
    expect(bad, `CodeQL would not re-analyse the deploy branch:\n  ${bad.join('\n  ')}`).toEqual(
      [],
    );
  });

  it('the scheduled run survives alongside the push trigger', () => {
    // A push trigger only ever analyses code that CHANGED. The weekly run is
    // what re-tests UNCHANGED code against queries published since — different
    // coverage, so replacing one with the other is a silent loss.
    for (const { file, src } of analysisWorkflows) {
      const block = onBlock(src);
      expect(block, `${file} must have a parseable on: block`).not.toBeNull();
      expect(
        block.filter((l) => !/^\s*#/.test(l)).some((l) => /^\s{2}schedule:/.test(l)),
        `${file} lost its schedule — unchanged code would stop being re-analysed`,
      ).toBe(true);
    }
  });

  it('the pull_request trigger survives too', () => {
    // Scanning master is not a substitute for scanning a PR: catching a finding
    // before it merges is the whole point of the PR check.
    const branch = deployBranch();
    for (const { file, src } of analysisWorkflows) {
      const pr = branchesFor(onBlock(src), 'pull_request');
      expect(pr, `${file} lost its pull_request trigger`).not.toBeNull();
      expect(
        pr.length === 0 || pr.includes(branch),
        `${file}'s pull_request trigger no longer covers ${branch}`,
      ).toBe(true);
    }
  });
});
