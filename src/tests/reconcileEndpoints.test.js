// reconcileEndpoints.test.js — EVERY Claude endpoint reconciles its pre-charge
// down to actual usage (2026-09-07).
//
// The gate pre-charges each call's worst-case ceiling (the budget guarantee).
// Until this change only three of twenty-four Claude endpoints refunded the
// difference afterwards; the rest booked ~5x their real cost permanently —
// /api/correct $0.025 per essay against ~$0.005 — so a $9 month could be
// "spent" by mid-month, and from then on every live evaluation the learner
// asked for (writing feedback, the speaking coach, the Level Check's scoring)
// answered monthly_budget_exhausted. The owner's directive that feedback MUST
// work every time cannot coexist with a ledger that lies about spend.
//
// The set is DERIVED from source — a new endpoint that calls Claude and does
// not reconcile fails here — with a stated exemption per file that legitimately
// cannot use the one-liner.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { reconcileSafely, ENDPOINT_CEILING_MICROUSD } from '../../functions/api/_aiBudget.js';

const dir = 'functions/api';
const claudeCallers = readdirSync(dir)
  .filter((f) => f.endsWith('.js') && !f.startsWith('_'))
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
  .filter((f) => readFileSync(`${dir}/${f}`, 'utf8').includes('api.anthropic.com/v1/messages'));

/** Files that cannot use the per-response one-liner, each with its reason. */
const EXEMPT = {
  // Streams SSE and reconciles itself from message_start/message_delta usage
  // (budgetReconcile.test.js pins that wiring).
  'conversation.js': "reconcileBudget(env, '/api/conversation', usageAcc)",
  // Fans out FOUR simplifyArticle calls under ONE 4x ':generate' pre-charge;
  // a per-call refund against the 4x ceiling would over-refund. Left charged.
  'news.js': null,
  // Dispatch-only: the whole golden run is pre-charged as one ceiling before
  // the first call; no user is ever refused because of it.
  'golden-calibration.js': null,
};

describe('Claude endpoints reconcile the pre-charged ceiling', () => {
  it('the census finds the endpoints (the file list is real)', () => {
    expect(claudeCallers.length).toBeGreaterThanOrEqual(20);
    expect(claudeCallers).toEqual(
      expect.arrayContaining(['correct.js', 'assess-speaking.js', 'explain-error.js']),
    );
  });

  it.each(claudeCallers)('%s reconciles (or carries a stated exemption)', (f) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
    const src = readFileSync(`${dir}/${f}`, 'utf8');
    if (f in EXEMPT) {
      const marker = EXEMPT[f];
      if (marker) expect(src).toContain(marker);
      return;
    }
    expect(src).toContain("from './_aiBudget.js'");
    // The pathname passed must be a real ceiling key, so the refund is
    // computed against the ceiling that was actually charged.
    const calls = [...src.matchAll(/reconcile(?:Safely|Budget)\(env, '([^']+)'/g)].map((m) => m[1]);
    expect(calls.length).toBeGreaterThan(0);
    for (const key of calls) {
      expect(
        ENDPOINT_CEILING_MICROUSD[key],
        `${f} reconciles against unknown key ${key}`,
      ).toBeGreaterThan(0);
    }
  });

  it('every exemption is still a Claude caller (a stale exemption guards nothing)', () => {
    for (const f of Object.keys(EXEMPT)) expect(claudeCallers).toContain(f);
  });

  it('reconcileSafely never throws into a handler', async () => {
    const env = {
      AI_QUOTA_DB: {
        prepare() {
          throw new Error('D1 down');
        },
      },
    };
    await expect(
      reconcileSafely(env, '/api/correct', { input_tokens: 10, output_tokens: 10 }),
    ).resolves.toBeUndefined();
  });

  it('the writing evaluator refunds to ACTUAL cost — the number that decides whether feedback works', async () => {
    const state = { spend: ENDPOINT_CEILING_MICROUSD['/api/correct'] };
    const db = {
      prepare(sql) {
        return {
          bind(...args) {
            return {
              async run() {
                const amt = args.find((a) => typeof a === 'number') ?? 0;
                if (/MAX\(0, microusd - \?1\)/.test(sql))
                  state.spend = Math.max(0, state.spend - amt);
                return {};
              },
              async first() {
                return { microusd: state.spend };
              },
            };
          },
        };
      },
    };
    // A real 3,000-char essay: ~1,500 input tokens, ~600 output tokens.
    await reconcileSafely({ AI_QUOTA_DB: db }, '/api/correct', {
      input_tokens: 1500,
      output_tokens: 600,
    });
    expect(state.spend).toBe(1500 + 600 * 5); // 4,500 µ$ — not the 25,000 ceiling
    expect(ENDPOINT_CEILING_MICROUSD['/api/correct'] / state.spend).toBeGreaterThan(5);
  });
});
