/**
 * guardedAssertions.test.ts — a test that asserts nothing is not a test.
 *
 * THE FINDING THIS RATCHETS (sweep 96, 2026-09-24). Three tests in
 * `gradedInputScreen.transport.test.tsx` put every assertion behind
 * `if (mockNativePost.mock.calls.length > 0)`. The effect they were driving
 * returns early unless `recordingIdx !== null`, which only a click on the
 * record button sets, and no test clicked it — so `_nativePost` was never
 * called, the condition was never true, and the file's whole stated subject
 * ("posts the CORRECT backend keys … and does NOT use the old wrong keys") was
 * unverified for as long as it existed. Green the entire time.
 *
 * `e2e/pronunciation.spec.js` was the same shape at scale: 21 conditional
 * bodies, 19 of which never executed, because the navigation they all depended
 * on (`button.cat-tile`) had not existed in `src/` since the Practice tab
 * became the Grad surface. 40 green tests over "the features most at risk
 * before Google Play launch".
 *
 * THE GUARD IS A LIST OF EXEMPTIONS, AND EACH ONE CARRIES A MEASUREMENT.
 * A static rule cannot tell a condition that fires from one that cannot; the
 * only honest evidence is running it. Every entry below was measured by
 * instrumenting its condition and running its file, and the count is recorded.
 * A new instance lands as a FAILURE with the file, test name and condition.
 *
 * Keyed on (file, test name), not line number: line numbers move on every edit
 * above them, and an exemption that silently stops matching is the decay this
 * repo has been burned by more than once.
 */
import { describe, it, expect } from 'vitest';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import { findGuardedOnlyTests, scanFiles } from './helpers/guardedAssertions';

const FILES = execSync(
  "git ls-files 'src/**/*.test.ts' 'src/**/*.test.tsx' 'e2e/*.spec.js' 'functions/**/*.test.js'",
  { encoding: 'utf8' },
)
  .split('\n')
  .filter(Boolean);

interface Exemption {
  file: string;
  name: string;
  /** Why the guard is legitimate, and the measured number of times it fired. */
  reason: string;
}

const EXEMPT: readonly Exemption[] = [
  {
    file: 'e2e/production-auth-flow.spec.js',
    name: 'invalid login shows error not crash',
    reason:
      'Excluded from the default Playwright run (playwright.config.js testIgnore) — it is a ' +
      'manual probe against https://nasahrvatska.com, where the sign-in form is legitimately ' +
      'absent if the browser already holds a session. Never measured in CI because it never ' +
      'runs there.',
  },
  {
    file: 'src/components/razgovor/razgovor.test.ts',
    name: 'every persona mode names a persona key',
    reason:
      'Selects the persona subset of PARTNERS inside a loop; the assertion is about that ' +
      "subset. Measured: fires 5 times (PARTNERS carries 5 `launch: 'persona'` modes).",
  },
  {
    file: 'src/lib/conjugation/__tests__/verbsData.test.ts',
    name: 'form arrays have correct lengths and no empty strings',
    reason:
      'Five independent guards on OPTIONAL dataset fields (present/future1/conditional/' +
      'imperative/past); a record legitimately omits some. Measured: the present guard alone ' +
      'fires 212 times.',
  },
  {
    file: 'src/lib/conjugation/__tests__/verbsData.test.ts',
    name: 'every aspect pair resolves to another record when present in the dataset',
    reason:
      'The title states the condition: only pairs present in the dataset are checked. ' +
      'Measured: fires 23 times.',
  },
  {
    file: 'src/tests/clozeEngine.topic.test.tsx',
    name: 'every tagged sentence in the full bank uses a valid routed topic',
    reason:
      'Checks the TAGGED sentences; an untagged one is not a violation. Measured: fires 28 times.',
  },
  {
    file: 'src/tests/sanitizeStats.test.ts',
    name: 'returns empty validated object when all entries are invalid',
    reason:
      'The contract is "empty OR absent", and absent is the stronger outcome. Measured: fires.',
  },
  {
    file: 'src/tests/sessionVariety.test.ts',
    name: 'touches more than one family whenever it serves more than one graded activity',
    reason:
      'The title states the condition: variety is only meaningful above one graded activity. ' +
      'Measured: fires 4 times.',
  },
  {
    file: 'src/tests/useDailySession.test.ts',
    name: 'does not repeat exercises from nh_recent_exercises',
    reason:
      'Croatia-slot activities are exempt from the recency rule by design, so the guard ' +
      'selects the activities the rule is about. Measured: fires 4 times.',
  },
  {
    file: 'src/tests/utilityLibs.test.ts',
    name: 'hr and en fields are non-empty strings (if pool available)',
    reason:
      'getWordOfDay() returns null when the pool is unavailable, which its sibling test ' +
      'asserts in both directions. Measured: fires.',
  },
];

function key(x: { file: string; name: string }) {
  return `${x.file} :: ${x.name}`;
}

describe('no test may assert only inside a condition it does not establish', () => {
  const found = scanFiles(FILES);
  const exemptKeys = new Set(EXEMPT.map(key));

  it('finds the shape at all — the detector is not vacuous', () => {
    // A guard that reports nothing is indistinguishable from a guard that
    // cannot see. This floor is the same one `exerciseContract`'s staleness
    // block needs, for the same reason.
    expect(FILES.length).toBeGreaterThan(400);
    expect(found.length).toBeGreaterThan(0);
  });

  it('detects a guarded-only test, and does NOT flag an unguarded one', () => {
    // POSITIVE CONTROL. Without this the whole file could be satisfied by an
    // analyser that returns [] — which is precisely the decorative shape the
    // repo keeps rediscovering, most recently in `levelledBankFloor`'s first
    // draft, where the predicate could not fire on any bank worth guarding.
    const bad = `
      it('checks the payload', async () => {
        await drive();
        if (mock.mock.calls.length > 0) {
          expect(mock.mock.calls[0][1]).toHaveProperty('audioBase64');
        }
      });
    `;
    const good = `
      it('checks the payload', async () => {
        await drive();
        expect(mock).toHaveBeenCalledTimes(1);
        if (extra) { expect(extra).toBe(1); }
      });
    `;
    const bothBranches = `
      it('renders with or without a host', () => {
        if (place.host) { expect(portrait()).toBeTruthy(); }
        else { expect(portrait()).toBeNull(); }
      });
    `;
    expect(findGuardedOnlyTests('probe.ts', bad)).toHaveLength(1);
    expect(findGuardedOnlyTests('probe.ts', good)).toHaveLength(0);
    // An if/else where BOTH branches assert always runs one of them.
    expect(findGuardedOnlyTests('probe.ts', bothBranches)).toHaveLength(0);
  });

  it('every exempted test still exists and still has the shape', () => {
    // Staleness, direction 1: an exemption over a test that was fixed or
    // deleted guards nothing while reading as a live carve-out — the `idioms`
    // coupling exemption, which sat there naming a dead end that had been
    // repaired.
    const foundKeys = new Set(found.map(key));
    for (const e of EXEMPT) {
      expect(fs.existsSync(e.file), `${e.file} no longer exists`).toBe(true);
      expect(
        foundKeys.has(key(e)),
        `${key(e)} no longer asserts only inside a condition — delete its exemption`,
      ).toBe(true);
      expect(e.reason.length, `${key(e)} has no reason`).toBeGreaterThan(40);
    }
  });

  it('no test outside the exemption list asserts only inside a condition', () => {
    // Staleness, direction 2 — and the ratchet itself.
    const offenders = found.filter((f) => !exemptKeys.has(key(f)));
    const detail = offenders
      .map(
        (o) =>
          `  ${o.file}:${o.line}\n    "${o.name}"\n    guarded by: if (${o.conditions.join(' | ')})`,
      )
      .join('\n');
    expect(
      offenders,
      offenders.length
        ? `These tests pass when their condition is false, asserting nothing:\n${detail}\n\n` +
            'Either drive the state the assertion needs (and assert it unconditionally), or add ' +
            'an entry to EXEMPT with a reason AND a measured firing count — measure it by ' +
            'instrumenting the condition and running the file, never by reading the code.'
        : '',
    ).toEqual([]);
  });
});
