/**
 * ciRunnerPinned — a job that installs Playwright WebKit runs on a PINNED Ubuntu image.
 *
 * 2026-11-14: GitHub moved `ubuntu-latest` from 24.04 to 26.04 between two CI runs a few hours
 * apart. Playwright's WebKit links libicudata.so.74, which only 24.04 ships, so every WebKit
 * launch failed ("error while loading shared libraries") on every change — and the deploy waits
 * on that job, so nothing could ship. The jobs below must not follow `ubuntu-latest` again until
 * Playwright's WebKit supports the newer image.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const strip = (s) =>
  s
    .split('\n')
    .filter((l) => !/^\s*#/.test(l))
    .join('\n');

/** Split a workflow into its jobs: { name, body } for each top-level key under `jobs:`. */
function jobsOf(file) {
  // Test-only reader over a repo-relative path from a fixed list — no user input reaches it.
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const raw = readFileSync(resolve(__dirname, '..', '..', '.github', 'workflows', file), 'utf8');
  const src = strip(raw);
  const after = src.slice(src.indexOf('\njobs:') + 6);
  const parts = after.split(/\n(?= {2}[A-Za-z0-9_-]+:\s*$)/m);
  return parts
    .map((p) => {
      const m = /^\s*([A-Za-z0-9_-]+):\s*$/m.exec(p);
      return m ? { name: m[1], body: p } : null;
    })
    .filter(Boolean);
}

const FILES = ['ci.yml', 'production-smoke.yml'];

describe('a job that installs Playwright WebKit does not follow ubuntu-latest', () => {
  for (const file of FILES) {
    const webkitJobs = jobsOf(file).filter(
      (j) => /\bwebkit\b/i.test(j.body) || /WebKit/.test(j.body),
    );
    it(`${file}: finds at least one WebKit job (the guard is not vacuous)`, () => {
      expect(webkitJobs.length).toBeGreaterThan(0);
    });
    for (const job of webkitJobs) {
      it(`${file} › ${job.name} runs on a pinned image`, () => {
        const m = /runs-on:\s*(\S+)/.exec(job.body);
        expect(m, `${job.name} has no runs-on`).toBeTruthy();
        expect(m[1]).not.toBe('ubuntu-latest');
        expect(m[1]).toMatch(/^ubuntu-\d+\.\d+$/);
      });
    }
  }
});
