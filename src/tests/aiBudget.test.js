/**
 * aiBudget.test.js — the global monthly spend governor (_aiBudget.js).
 *
 * The guarantee under test: total metered AI spend cannot exceed
 * MONTHLY_BUDGET_MICROUSD, because every call pre-charges its worst-case
 * ceiling at the single gate and is refused once the ledger would pass the
 * budget. Two properties keep that guarantee real over time:
 *
 *   1. THE LEDGER NEVER UNDERSTATES A CALL. Each Claude endpoint's ceiling is
 *      derived from its max_tokens — so these tests re-read max_tokens from
 *      the endpoint SOURCES and fail if any endpoint raises its output cap
 *      without raising its ceiling. Drift fails the build, not the budget.
 *
 *   2. EVERY GATED ENDPOINT IS METERED. Every functions/api file that calls
 *      requireAuthedAI must have an explicit ceiling entry (or knowingly ride
 *      the default). A new AI endpoint that forgets its entry gets the
 *      DEFAULT ceiling — metered, never free.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import {
  MONTHLY_BUDGET_MICROUSD,
  ENDPOINT_CEILING_MICROUSD,
  DEFAULT_CEILING_MICROUSD,
  claudeCeiling,
  checkAndChargeBudget,
} from '../../functions/api/_aiBudget.js';

const API_DIR = 'functions/api';

/** Minimal D1 stub implementing exactly what _aiBudget uses. */
function fakeD1(initialSpend = 0) {
  const state = { spend: initialSpend };
  return {
    state,
    prepare(sql) {
      return {
        bind(...args) {
          return {
            async first() {
              if (sql.includes('INSERT INTO ai_month_spend')) {
                state.spend += args[1];
                return { microusd: state.spend };
              }
              if (sql.startsWith('SELECT')) return { microusd: state.spend };
              throw new Error(`unexpected first(): ${sql}`);
            },
            async run() {
              if (sql.includes('microusd = microusd - ')) {
                state.spend -= args[0];
                return {};
              }
              throw new Error(`unexpected run(): ${sql}`);
            },
          };
        },
      };
    },
  };
}

describe('ceilings cannot drift below reality', () => {
  const claudeFiles = readdirSync(API_DIR).filter((f) => {
    if (!f.endsWith('.js') || f.startsWith('_')) return false;
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources from readdirSync
    return readFileSync(`${API_DIR}/${f}`, 'utf8').includes('claude-haiku');
  });

  it('non-vacuity: the source scan finds the Claude endpoints', () => {
    expect(claudeFiles.length).toBeGreaterThanOrEqual(20);
  });

  it('every Claude endpoint ceiling covers 12k input + its own max_tokens output', () => {
    for (const f of claudeFiles) {
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- same: repo source scan
      const src = readFileSync(`${API_DIR}/${f}`, 'utf8');
      const caps = [...src.matchAll(/max_tokens:\s*(\d+)/g)].map((m) => parseInt(m[1], 10));
      if (caps.length === 0) continue; // proxies another endpoint; no direct call
      const worst = Math.max(...caps);
      const path = `/api/${f.replace(/\.js$/, '')}`;
      const ceiling = ENDPOINT_CEILING_MICROUSD[path];
      expect(ceiling, `${path} missing from ENDPOINT_CEILING_MICROUSD`).toBeDefined();
      expect(
        ceiling,
        `${path}: max_tokens=${worst} needs ceiling >= claudeCeiling(${worst}) — raise the table entry`,
      ).toBeGreaterThanOrEqual(claudeCeiling(worst));
    }
  });

  it('every requireAuthedAI endpoint is metered (explicit entry or the default)', () => {
    const gated = readdirSync(API_DIR).filter(
      (f) =>
        f.endsWith('.js') &&
        !f.startsWith('_') &&
        // eslint-disable-next-line security/detect-non-literal-fs-filename -- same: repo source scan
        readFileSync(`${API_DIR}/${f}`, 'utf8').includes('requireAuthedAI('),
    );
    expect(gated.length).toBeGreaterThanOrEqual(25);
    for (const f of gated) {
      const path = `/api/${f.replace(/\.js$/, '')}`;
      const ceiling = ENDPOINT_CEILING_MICROUSD[path] ?? DEFAULT_CEILING_MICROUSD;
      expect(ceiling, `${path} must carry a positive ceiling`).toBeGreaterThan(0);
    }
  });

  it('the expensive providers dwarf the Claude ceilings — the whale hole is closed', () => {
    expect(ENDPOINT_CEILING_MICROUSD['/api/npc-video']).toBeGreaterThanOrEqual(200_000);
    expect(ENDPOINT_CEILING_MICROUSD['/api/did-stream']).toBeGreaterThanOrEqual(200_000);
    expect(ENDPOINT_CEILING_MICROUSD['/api/flux-generate']).toBeGreaterThanOrEqual(50_000);
  });
});

describe('the breaker', () => {
  const env = (db, kv = null) => ({ AI_QUOTA_DB: db, PUSH_SUBSCRIPTIONS: kv });

  it('charges the ceiling and allows while under budget', async () => {
    const db = fakeD1(0);
    const res = await checkAndChargeBudget(env(db), '/api/ai-chat');
    expect(res.allowed).toBe(true);
    expect(db.state.spend).toBe(ENDPOINT_CEILING_MICROUSD['/api/ai-chat']);
  });

  it('refuses at the budget line and refunds the pre-charge — the ledger stays honest', async () => {
    const nearCap = MONTHLY_BUDGET_MICROUSD - 1_000; // less than any ceiling remains
    const db = fakeD1(nearCap);
    const res = await checkAndChargeBudget(env(db), '/api/conversation');
    expect(res.allowed).toBe(false);
    // Refund happened: ledger back to the pre-call truth, so a raised budget
    // or a new month is judged against money actually spent.
    expect(db.state.spend).toBe(nearCap);
    expect(res.resetAt).toMatch(/^\d{4}-\d{2}-01T00:00:00/);
  });

  it('an unknown endpoint is charged the default — never free', async () => {
    const db = fakeD1(0);
    await checkAndChargeBudget(env(db), '/api/some-future-endpoint');
    expect(db.state.spend).toBe(DEFAULT_CEILING_MICROUSD);
  });

  it('falls back to KV when D1 is absent, and still refuses at the line', async () => {
    const store = new Map();
    const kv = {
      async get(k) {
        return store.get(k) ?? null;
      },
      async put(k, v) {
        store.set(k, v);
      },
    };
    const ok = await checkAndChargeBudget(env(null, kv), '/api/ai-chat');
    expect(ok.allowed).toBe(true);
    store.set(`budget:${new Date().toISOString().slice(0, 7)}`, String(MONTHLY_BUDGET_MICROUSD));
    const refused = await checkAndChargeBudget(env(null, kv), '/api/ai-chat');
    expect(refused.allowed).toBe(false);
  });

  it('fails CLOSED with no storage — the guarantee outranks the garnish', async () => {
    const res = await checkAndChargeBudget(env(null, null), '/api/ai-chat');
    expect(res.allowed).toBe(false);
  });
});
