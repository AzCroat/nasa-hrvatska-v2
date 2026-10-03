// src/tests/d1Provisioned.test.js
//
// AI_QUOTA_DB WAS NEVER BOUND (2026-10-03). Four gates are D1-first — the AI
// quota, the monthly budget ledger, the IP rate limiter and the XP caps — and
// CLAUDE.md said the binding was set in the dashboard. /api/ai-ledger reported
// `store: kv`: every one of them was on its KV fallback, and a KV hiccup made
// the budget gate fail closed and tell a learner their monthly allowance was
// used up at 6% of it (Sentry 14c076e5). The deploy now provisions and binds
// the database, the way it already provisions the KV namespaces.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const SETUP = readFileSync('scripts/setup-cf-resources.mjs', 'utf8');

describe('the deploy provisions the D1 database the gates read first', () => {
  it('creates and binds AI_QUOTA_DB — the binding every D1-first gate reads', () => {
    expect(SETUP).toMatch(/REQUIRED_D1\s*=\s*\[\s*\{\s*binding:\s*'AI_QUOTA_DB'/);
    const gates = [
      readFileSync('functions/api/_aiQuota.js', 'utf8'),
      readFileSync('functions/api/_aiBudget.js', 'utf8'),
      readFileSync('functions/api/_rateLimit.js', 'utf8'),
      readFileSync('functions/api/_xpVelocityStore.js', 'utf8'),
    ];
    for (const src of gates) expect(src).toMatch(/env\??\.AI_QUOTA_DB/);
    expect(SETUP).toMatch(/d1_databases:/);
  });

  it('is fail-soft: a token without D1 permission warns and the deploy continues', () => {
    const block = SETUP.slice(SETUP.indexOf('for (const { binding, name } of REQUIRED_D1)'));
    const loop = block.slice(0, block.indexOf('// Reload project after patching'));
    expect(loop).toMatch(/try\s*\{/);
    expect(loop).toMatch(/catch \(e\)[\s\S]*::warning::/);
    expect(loop).not.toMatch(/process\.exit/);
  });
});
