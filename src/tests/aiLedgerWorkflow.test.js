// src/tests/aiLedgerWorkflow.test.js
//
// The AI budget ledger report (.github/workflows/ai-ledger.yml) must stay READ-ONLY:
// dispatch-only, and the only SQL it sends is one SELECT.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';

const wf = fs.readFileSync('.github/workflows/ai-ledger.yml', 'utf8');

describe('the AI ledger report is read-only', () => {
  it('runs only on dispatch', () => {
    expect(wf).toMatch(/on:\s*\n\s*workflow_dispatch:/);
    expect(wf).not.toMatch(/\n\s*(push|pull_request|schedule):/);
  });

  it('sends exactly one SQL statement, and it is a SELECT on the ledger', () => {
    const sql = [...wf.matchAll(/"sql":"([^"]*)"/g)].map((m) => m[1]);
    expect(sql).toEqual(['SELECT month, microusd FROM ai_month_spend ORDER BY month DESC LIMIT 3']);
    expect(wf).not.toMatch(/\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE)\b/);
  });

  it('never deletes or creates a database', () => {
    expect(wf).not.toMatch(/-X (DELETE|PUT|PATCH)/);
    const posts = [...wf.matchAll(/-X POST[^\n]*\n?[^\n]*/g)].map((m) => m[0]);
    expect(posts.every((p) => /\/query/.test(p))).toBe(true);
  });
});
