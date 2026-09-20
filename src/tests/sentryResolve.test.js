// src/tests/sentryResolve.test.js
//
// The Sentry resolve pins (2026-09-20).
//
// `sentry-resolve.yml` is the first workflow in this repo that MUTATES a
// third-party system. Everything else that touches Sentry reads. That makes
// its safety properties structural rather than incidental, and every one of
// them is invisible from a green run: a workflow that grew a `schedule:`
// trigger, or that interpolated a dispatch input into its own shell, would
// pass CI forever and be discovered the way this repo discovers things —
// afterwards, from the outside.
//
// The five properties below are each the kind a reviewer would have to
// remember to check. The sixth is the one that keeps the DESIGN honest: the
// read-only report must stay read-only, because "does this workflow change
// anything" being answerable from the trigger block is the entire reason the
// two are separate files.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
// Test-only reads over repo-relative path literals — no user input reaches
// either, and they are spelled out rather than built by a helper so the
// security lint can see that for itself (same shape as ciDeployGate.test.js).
const src = readFileSync(join(__dir, '../..', '.github/workflows/sentry-resolve.yml'), 'utf8');
const report = readFileSync(
  join(__dir, '../..', '.github/workflows/sentry-top-issues.yml'),
  'utf8',
);

/** The lines of a top-level block (`on:`, `permissions:`, …), excluding its key. */
function topBlock(text, key) {
  const lines = text.split('\n');
  const at = lines.findIndex((l) => l === `${key}:` || l.startsWith(`${key}:`));
  if (at === -1) return [];
  const out = [];
  for (let i = at + 1; i < lines.length; i++) {
    if (/^\S/.test(lines[i])) break;
    out.push(lines[i]);
  }
  return out;
}

/** Every `run: |` script body in the file, as one string per step. */
function runBlocks(text) {
  const lines = text.split('\n');
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*)run:\s*\|/);
    if (!m) continue;
    const indent = m[1].length;
    const body = [];
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].trim() !== '' && lines[j].search(/\S/) <= indent) break;
      body.push(lines[j]);
    }
    blocks.push(body.join('\n'));
  }
  return blocks;
}

describe('sentry-resolve.yml — a workflow that writes', () => {
  it('can only be started by a human, never on a schedule or a push', () => {
    // THE safety property. Every other guard in the file is downstream of
    // nothing firing unattended, so this is the one that cannot be relaxed
    // "just for a nightly cleanup".
    const triggers = topBlock(src, 'on')
      .filter((l) => /^ {2}\S/.test(l))
      .map((l) => l.trim().replace(/:.*$/, ''));
    expect(triggers).toEqual(['workflow_dispatch']);
  });

  it('never interpolates a dispatch input into its own shell', () => {
    // `${{ inputs.x }}` inside `run:` is substituted by the runner BEFORE bash
    // parses the line, so a crafted input is executed as shell. Binding
    // through `env:` and reading `$VAR` is the only safe form. This is the
    // standard Actions script-injection shape and it is worth a mechanical
    // check, because the safe and unsafe versions look almost identical.
    for (const body of runBlocks(src)) {
      expect(body).not.toMatch(/\$\{\{/);
    }
    // …and the values it does need are bound, so the check above cannot be
    // satisfied by a step that simply stopped reading its inputs.
    for (const name of ['ISSUES_IN', 'STATUS_IN', 'DRY_RUN']) {
      expect(src).toMatch(new RegExp(`${name}:\\s*\\$\\{\\{\\s*inputs\\.`));
    }
  });

  it('confirms every write landed by reading the issue back', () => {
    // A 200 on the PUT is not evidence the status changed — Sentry accepts an
    // unknown statusDetails key without complaint. The read-back is what makes
    // the run's "OK" line a measurement rather than an assumption, and it is
    // the rule this whole repo is built on.
    const body = runBlocks(src).join('\n');
    const put = body.indexOf('put_issue "$GID"');
    expect(put).toBeGreaterThan(-1);
    const after = body.slice(put);
    expect(after).toMatch(/ST=\$\(get_issue "\$GID"\)/);
    expect(after).toMatch(/NOT APPLIED/);
    // The comparison itself, not merely a re-read next to it.
    expect(after).toMatch(/\[ "\$NOW" != "\$WANT" \]/);
  });

  it('refuses an issue belonging to another project', () => {
    // Issue ids are opaque and org-wide, so a mistyped digit lands on a real
    // issue somewhere else and every call above the guard succeeds.
    const body = runBlocks(src).join('\n');
    expect(body).toMatch(/OWNER=\$\(jq -r '\.project\.slug/);
    expect(body).toMatch(/\[ "\$OWNER" != "\$PROJ" \]/);
    expect(body).toMatch(/REFUSED: belongs to project/);
  });

  it('asks for no more GitHub permission than a read', () => {
    const perms = topBlock(src, 'permissions')
      .map((l) => l.trim())
      .filter(Boolean);
    expect(perms).toEqual(['contents: read']);
  });

  it('handles exactly the statuses it offers — derived from both, not restated', () => {
    // A hand-kept list in a test decays exactly like one in production. Both
    // sides are read out of the file: an option added to the dropdown without
    // a case arm would dispatch to the "unknown status" branch, and an arm
    // without an option is dead code nobody can reach.
    const optLines = src.slice(src.indexOf('options:')).split('\n');
    const offered = [];
    for (const l of optLines.slice(1)) {
      const m = l.match(/^\s+- ([A-Za-z]+)\s*$/);
      if (m) offered.push(m[1]);
      else if (l.trim() && !l.trim().startsWith('#')) break;
    }
    const handled = [
      ...runBlocks(src)
        .join('\n')
        .matchAll(/^\s*([A-Za-z]+)\)\s+PAYLOAD=/gm),
    ].map((m) => m[1]);
    expect(offered.length).toBeGreaterThan(0);
    expect([...handled].sort()).toEqual([...offered].sort());
  });

  it('only names the scope remedy when a write was actually refused', () => {
    // FOUND BY RUNNING IT, NOT BY READING IT. The first version printed
    // "regenerate your token with event:write" for every failure, so a
    // mistyped issue id answered with a credential remedy — a report lying
    // about its own cause, which is the precise defect sentry-top-issues.yml's
    // header exists to warn about. A scope can only explain a refused WRITE.
    const body = runBlocks(src).join('\n');
    expect(body).toMatch(/WRITE_REFUSED=\$\(\(WRITE_REFUSED \+ 1\)\)/);
    expect(body).toMatch(/if \[ "\$WRITE_REFUSED" -gt 0 \]/);
    expect(body).toMatch(/NOT a credential or scope problem/);
  });
});

describe('sentry-top-issues.yml — and the report it must stay separate from', () => {
  it('still mutates nothing', () => {
    // The report runs on push and on a daily schedule. It is allowed those
    // triggers precisely BECAUSE it cannot change anything; the moment it
    // grows a write, an unattended mutation exists in this repo again and the
    // separation these two files are built on is gone.
    for (const body of runBlocks(report)) {
      expect(body).not.toMatch(/-X\s*(PUT|POST|DELETE|PATCH)/);
    }
    expect(report).toMatch(/READ-ONLY/);
  });
});
