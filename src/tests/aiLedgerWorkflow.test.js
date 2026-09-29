// src/tests/aiLedgerWorkflow.test.js
//
// The AI budget ledger report must stay READ-ONLY: the workflow is dispatch-only and
// calls one route, and the route (functions/api/ai-ledger.js) authenticates like the
// other ops sweeps, writes nothing and reports the current and previous month.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { onRequestPost, previousMonth } from '../../functions/api/ai-ledger.js';

const wf = fs.readFileSync('.github/workflows/ai-ledger.yml', 'utf8');
const src = fs.readFileSync('functions/api/ai-ledger.js', 'utf8');

describe('the AI ledger workflow', () => {
  it('runs only on dispatch', () => {
    expect(wf).toMatch(/on:\s*\n\s*workflow_dispatch:/);
    expect(wf).not.toMatch(/\n\s*(push|pull_request|schedule):/);
  });

  it('makes exactly one request, to the ledger route', () => {
    const urls = [...wf.matchAll(/https:\/\/[^\s"]+/g)].map((m) => m[0]);
    expect(urls).toEqual(['https://nasahrvatska.com/api/ai-ledger']);
    expect(wf).not.toMatch(/-X (DELETE|PUT|PATCH)/);
  });

  it('derives the same credential the observatory uses', () => {
    expect(wf).toMatch(/"nh-calibration-v1"/);
    expect(wf).toMatch(/x-cron-secret: \$\{TOKEN\}/);
  });
});

function fakeDb(rows) {
  const writes = [];
  return {
    writes,
    prepare(sql) {
      if (!/^SELECT/.test(sql)) writes.push(sql);
      return {
        bind: (month) => ({
          first: async () => (rows[month] != null ? { microusd: rows[month] } : null),
        }),
      };
    },
  };
}

const req = (secret) =>
  new Request('https://nasahrvatska.com/api/ai-ledger', {
    method: 'POST',
    headers: secret ? { 'x-cron-secret': secret } : {},
  });

describe('the ledger route', () => {
  it('503s when no secret is configured', async () => {
    const res = await onRequestPost({ request: req('x'), env: {} });
    expect(res.status).toBe(503);
  });

  it('401s on a wrong secret, and on none', async () => {
    const env = { CALIBRATION_SECRET: 'right', AI_QUOTA_DB: fakeDb({}) };
    expect((await onRequestPost({ request: req('wrong'), env })).status).toBe(401);
    expect((await onRequestPost({ request: req(''), env })).status).toBe(401);
  });

  it('reports the current and previous months, and writes nothing', async () => {
    const now = new Date();
    const month = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
    const db = fakeDb({ [month]: 3_000_000, [previousMonth(month)]: 1_500_000 });
    const res = await onRequestPost({
      request: req('right'),
      env: { CRON_SECRET: 'right', AI_QUOTA_DB: db },
    });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.store).toBe('d1');
    expect(body.current.month).toBe(month);
    expect(body.current.spentMicroUsd).toBe(3_000_000);
    expect(body.current.daysElapsed).toBe(now.getUTCDate());
    expect(body.current.perDayMicroUsd).toBe(Math.round(3_000_000 / now.getUTCDate()));
    expect(body.previous.month).toBe(previousMonth(month));
    expect(body.previous.spentMicroUsd).toBe(1_500_000);
    expect(db.writes).toEqual([]);
  });

  it('prepares nothing but a SELECT', () => {
    // The route delegates to getBudgetStatus, whose only statement is the SELECT.
    expect(src).not.toMatch(/\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE)\b/);
  });

  it('knows which month came before', () => {
    expect(previousMonth('2026-10')).toBe('2026-09');
    expect(previousMonth('2026-01')).toBe('2025-12');
  });
});
