// A stalled browser install is not a code failure (2026-10-26). The auto-rerun
// must fire for that and for nothing else, and only once.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const wf = readFileSync('.github/workflows/ci-rerun-install-stall.yml', 'utf8').replace(
  /^\s*#.*$/gm,
  '',
);
const ci = readFileSync('.github/workflows/ci.yml', 'utf8');

describe('ci-rerun-install-stall', () => {
  it('watches the workflow ci.yml defines, and only its completion', () => {
    const name = /^name:\s*(.+)$/m.exec(ci)?.[1]?.trim();
    expect(name).toBe('CI');
    expect(wf).toMatch(/workflows:\s*\['CI'\]/);
    expect(wf).toMatch(/types:\s*\[completed\]/);
  });
  it('re-runs once: failed conclusion and attempt 1 only', () => {
    expect(wf).toMatch(/workflow_run\.conclusion == 'failure'/);
    expect(wf).toMatch(/workflow_run\.run_attempt == 1/);
  });
  it('only when EVERY failed step is an install step', () => {
    expect(wf).toMatch(/failedSteps\.every\(\(n\) => n\.startsWith\('Install Playwright'\)\)/);
    expect(wf).toMatch(/failed\.length > 0/);
  });
  it('re-runs the failed jobs, not the whole run', () => {
    expect(wf).toMatch(/reRunWorkflowFailedJobs/);
    expect(wf).not.toMatch(/reRunWorkflow\(/);
  });
  it('every install step ci.yml has is named so the rule can match it', () => {
    const names = [...ci.matchAll(/- name: (Install Playwright[^\n]*)/g)].map((m) => m[1]);
    expect(names.length).toBeGreaterThanOrEqual(6);
    for (const n of names) expect(n.startsWith('Install Playwright')).toBe(true);
  });
  it('shares nothing with ci.yml (no cache, artifact or concurrency group)', () => {
    expect(wf).not.toMatch(/actions\/cache|upload-artifact|concurrency:/);
  });
});
