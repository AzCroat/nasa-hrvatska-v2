// budgetReconcile.test.js — pins the spontaneous-conversation unlock
// (2026-08-14): the ledger pre-charges worst-case ceilings, then refunds down
// to ACTUAL usage after the response. Without this, $9/month funded ~400
// conversation turns while the true bill was under $1.50.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  actualClaudeCostMicroUsd,
  reconcileBudget,
  checkAndChargeBudget,
  ENDPOINT_CEILING_MICROUSD,
} from '../../functions/api/_aiBudget.js';

function fakeD1(initial) {
  const state = { spend: initial };
  return {
    state,
    prepare(sql) {
      return {
        bind(...args) {
          return {
            async first() {
              // upsert binds (month, ceiling) — take the numeric arg.
              state.spend += args.find((a) => typeof a === 'number') ?? 0;
              return { microusd: state.spend };
            },
            async run() {
              const amt = args.find((a) => typeof a === 'number') ?? 0;
              if (/MAX\(0, microusd - \?1\)/.test(sql)) {
                state.spend = Math.max(0, state.spend - amt);
              } else {
                state.spend -= amt;
              }
              return {};
            },
          };
        },
      };
    },
  };
}

describe('actualClaudeCostMicroUsd', () => {
  it('prices a typical cached conversational turn ~10x under the ceiling', () => {
    // 12k cached-read input (0.1x) + 60 uncached + 300 output tokens.
    const actual = actualClaudeCostMicroUsd({
      input_tokens: 60,
      cache_read_input_tokens: 12_000,
      output_tokens: 300,
    });
    expect(actual).toBe(Math.ceil(60 + 1200 + 1500)); // 2,760 µ$
    expect(actual * 5).toBeLessThan(ENDPOINT_CEILING_MICROUSD['/api/conversation']);
  });

  it('returns null for missing or empty usage (reconcile becomes a no-op)', () => {
    expect(actualClaudeCostMicroUsd(null)).toBeNull();
    expect(actualClaudeCostMicroUsd({})).toBeNull();
    expect(actualClaudeCostMicroUsd({ input_tokens: 0, output_tokens: 0 })).toBeNull();
  });
});

describe('reconcileBudget', () => {
  it('refunds ceiling minus actual on D1', async () => {
    const db = fakeD1(ENDPOINT_CEILING_MICROUSD['/api/conversation']);
    await reconcileBudget({ AI_QUOTA_DB: db }, '/api/conversation', {
      input_tokens: 60,
      cache_read_input_tokens: 12_000,
      output_tokens: 300,
    });
    expect(db.state.spend).toBe(2_760); // only the actual cost remains
  });

  it('never refunds when actual >= ceiling and never goes negative', async () => {
    const db = fakeD1(1_000);
    await reconcileBudget({ AI_QUOTA_DB: db }, '/api/conversation', {
      input_tokens: 500_000, // pathological — actual far above ceiling
      output_tokens: 0,
    });
    expect(db.state.spend).toBe(1_000); // untouched

    const db2 = fakeD1(100); // ledger below the refund (concurrent race)
    await reconcileBudget({ AI_QUOTA_DB: db2 }, '/api/conversation', {
      input_tokens: 60,
      cache_read_input_tokens: 12_000,
      output_tokens: 300,
    });
    expect(db2.state.spend).toBe(0); // clamped, not negative
  });

  it('KV fallback refunds and clamps at zero; storage errors never throw', async () => {
    const store = new Map();
    const kv = {
      async get(k) {
        return store.get(k) ?? null;
      },
      async put(k, v) {
        store.set(k, v);
      },
    };
    const month = new Date().toISOString().slice(0, 7);
    store.set(`budget:${month}`, String(50_000));
    await reconcileBudget({ PUSH_SUBSCRIPTIONS: kv }, '/api/dialogue', {
      input_tokens: 60,
      cache_read_input_tokens: 12_000,
      output_tokens: 300,
    });
    const ceiling = ENDPOINT_CEILING_MICROUSD['/api/dialogue'];
    expect(parseInt(store.get(`budget:${month}`), 10)).toBe(
      Math.max(0, 50_000 - (ceiling - 2_760)),
    );
    // No backend at all → resolves without throwing (ceiling stays charged).
    await expect(
      reconcileBudget({}, '/api/dialogue', { output_tokens: 10 }),
    ).resolves.toBeUndefined();
  });

  it('charge + reconcile round-trip records actual spend, restoring capacity', async () => {
    const db = fakeD1(0);
    const env = { AI_QUOTA_DB: db };
    await checkAndChargeBudget(env, '/api/conversation');
    await reconcileBudget(env, '/api/conversation', {
      input_tokens: 60,
      cache_read_input_tokens: 12_000,
      output_tokens: 300,
    });
    expect(db.state.spend).toBe(2_760);
  });
});

describe('wiring (source pins)', () => {
  it('conversation.js captures SSE usage and reconciles at stream end', () => {
    const src = readFileSync('functions/api/conversation.js', 'utf8');
    expect(src).toContain("parsed.type === 'message_start' && parsed.message?.usage");
    expect(src).toContain("parsed.type === 'message_delta' && parsed.usage");
    expect(src).toContain("reconcileBudget(env, '/api/conversation', usageAcc)");
  });

  it('dialogue.js reconciles with the parsed response usage', () => {
    const src = readFileSync('functions/api/dialogue.js', 'utf8');
    expect(src).toContain("reconcileBudget(env, '/api/dialogue', data?.usage)");
  });

  it('DialogueSim opens the AI conversation for B1+ daily-session launches', () => {
    const src = readFileSync('src/components/practice/DialogueSim.tsx', 'utf8');
    expect(src).toContain("ssGet('nh_session_started') === 'dialogue'");
    expect(src).toMatch(/>= cefrRank\('B1'\)/);
    expect(src).toContain('setAiMode(sessionAiFirst)');
  });
});
