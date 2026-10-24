// A stalled browser download is not an outage (owner report, 2026-10-24: three
// of four scheduled smoke runs went red on the Playwright install while every
// browser that installed loaded the live site). The workflow must not email the
// owner for that, and must not go blind either. Text pins on the workflow, with
// comments stripped (the explanatory comments quote the very strings pinned).
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const wf = readFileSync('.github/workflows/production-smoke.yml', 'utf8').replace(/^\s*#.*$/gm, '');
// A top-level job's text: from "  <name>:" to the next two-space-indented key.
const job = (name) => {
  const m = wf.match(
    new RegExp(`^  ${name}:\\n([\\s\\S]*?)(?=^  [a-z][\\w-]*:\\n|(?![\\s\\S]))`, 'm'),
  );
  expect(m, `job ${name}`).toBeTruthy();
  return m[1];
};
const smoke = job('smoke');
const install = smoke.slice(smoke.indexOf('id: install'), smoke.indexOf('- name: Run smoke tests'));

describe('production smoke: an install stall is inconclusive, not red', () => {
  it('the install step exists and never fails the job', () => {
    expect(install.length).toBeGreaterThan(100);
    expect(install).not.toMatch(/exit 1/);
    expect(install).toMatch(/ok=false/);
    expect(install).toMatch(/ok=true/);
  });
  it('installs only the engine the matrix entry runs, not all three', () => {
    expect(install).not.toMatch(/chromium firefox webkit/);
    expect(install).toMatch(/playwright install --with-deps "\$ENGINE"/);
  });
  it('tests run only when the install succeeded', () => {
    const tests = smoke.slice(smoke.indexOf('- name: Run smoke tests'));
    expect(tests.slice(0, 200)).toMatch(/if: steps\.install\.outputs\.ok == 'true'/);
  });
  it('a skipped browser cannot leave monitoring silently blind', () => {
    const v = job('verify-coverage');
    expect(v).toMatch(/needs: smoke/);
    expect(v).toMatch(/MIN_RAN = 3/);
    expect(v).toMatch(/setFailed/);
  });
  it('an open failure issue closes only when every browser actually ran', () => {
    const r = job('resolve-on-success');
    expect(r).toMatch(/needs: \[smoke, verify-coverage\]/);
    expect(r).toMatch(/needs\.verify-coverage\.outputs\.all_ran == 'true'/);
  });
  it('a real test failure still alerts', () => {
    const a = job('alert-on-failure');
    expect(a).toMatch(/if: failure\(\)/);
    expect(a).toMatch(/needs: smoke/);
  });
});
