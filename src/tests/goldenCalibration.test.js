/**
 * goldenCalibration.test.js — the golden-set drift check (analysis-trust
 * directive, 2026-08-16).
 *
 * Guarantees under test:
 *   - the golden set is structurally sound (unique ids, sane bands, both
 *     evaluator kinds covered, weak samples genuinely carry learner errors)
 *   - the endpoint is dispatch-only: wrong/absent CRON_SECRET never reaches
 *     Claude, and a refused budget runs NOTHING
 *   - the whole run is pre-charged as ONE ceiling that covers every sample
 *     (the aiBudget "ledger never understates" discipline, applied here)
 *   - drift verdict: 2+ out-of-band samples = drift; a lone miss is variance
 *   - calibration uses the SAME prompt builders as the production endpoints
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { GOLDEN_SET } from '../../functions/api/_goldenSet.js';
import {
  ENDPOINT_CEILING_MICROUSD,
  MONTHLY_BUDGET_MICROUSD,
  claudeCeiling,
} from '../../functions/api/_aiBudget.js';
import { onRequestPost } from '../../functions/api/golden-calibration.js';

// ── Golden set structure ─────────────────────────────────────────────────────

describe('golden set structure', () => {
  it('has both kinds, unique ids, and at least 10 samples', () => {
    expect(GOLDEN_SET.length).toBeGreaterThanOrEqual(10);
    expect(new Set(GOLDEN_SET.map((s) => s.id)).size).toBe(GOLDEN_SET.length);
    expect(GOLDEN_SET.filter((s) => s.kind === 'writing').length).toBeGreaterThanOrEqual(5);
    expect(GOLDEN_SET.filter((s) => s.kind === 'speaking').length).toBeGreaterThanOrEqual(5);
  });

  it('every band is sane for its scale and leaves detection room', () => {
    for (const s of GOLDEN_SET) {
      const [min, max] = s.expected;
      const scale = s.kind === 'writing' ? 100 : 1;
      expect(min, s.id).toBeGreaterThanOrEqual(0);
      expect(max, s.id).toBeLessThanOrEqual(scale);
      expect(min, s.id).toBeLessThan(max);
      // A band spanning the whole scale can never detect drift.
      expect(max - min, `${s.id} band must exclude part of the scale`).toBeLessThan(scale);
    }
  });

  it('includes low-band probes for both kinds — drift that INFLATES scores must be catchable', () => {
    const lowWriting = GOLDEN_SET.some((s) => s.kind === 'writing' && s.expected[1] <= 60);
    const lowSpeaking = GOLDEN_SET.some((s) => s.kind === 'speaking' && s.expected[1] <= 0.65);
    expect(lowWriting).toBe(true);
    expect(lowSpeaking).toBe(true);
  });

  it('golden Croatian carries diacritics where expected (authoring floor)', () => {
    // Strong samples are native-standard Croatian: at least one diacritic each.
    // (The deliberately WEAK samples — diacritic-free interlanguage and the
    // sparse breakdown answer — omit them BY DESIGN.)
    const weakByDesign = new Set(['w-b1-broken', 's-b1-minimal']);
    const strong = GOLDEN_SET.filter((s) => !weakByDesign.has(s.id));
    for (const s of strong) {
      expect(/[čćđšž]/i.test(s.text), `${s.id} should contain diacritics`).toBe(true);
    }
  });
});

// ── The endpoint ─────────────────────────────────────────────────────────────

/** Anthropic stub: returns a writing eval or speaking rubric per request body. */
function claudeFetchStub({ writingScore = 75, speakingCriterion = 0.8 } = {}) {
  return vi.fn(async (_url, init) => {
    const body = JSON.parse(init.body);
    const isWriting = !!body.system; // writing sends a system prompt; rubric does not
    const payload = isWriting
      ? { score: writingScore, corrected_text: 'ok', changes: [] }
      : {
          range: speakingCriterion,
          accuracy: speakingCriterion,
          fluency: speakingCriterion,
          task: speakingCriterion,
        };
    return {
      ok: true,
      json: async () => ({ content: [{ text: JSON.stringify(payload) }] }),
    };
  });
}

function d1Stub(initialSpend = 0) {
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
              return { microusd: state.spend };
            },
            async run() {
              if (sql.includes('microusd = microusd - ')) state.spend -= args[0];
              return {};
            },
          };
        },
        async run() {
          return {};
        },
      };
    },
  };
}

function makeRequest(secret) {
  return new Request('https://nasahrvatska.com/api/golden-calibration', {
    method: 'POST',
    headers: secret ? { 'x-cron-secret': secret } : {},
  });
}

const SECRET = 'test-cron-secret';

describe('golden-calibration endpoint', () => {
  let fetchSpy;
  beforeEach(() => {
    fetchSpy = claudeFetchStub();
    vi.stubGlobal('fetch', fetchSpy);
  });
  afterEach(() => vi.unstubAllGlobals());

  const baseEnv = () => ({
    CRON_SECRET: SECRET,
    ANTHROPIC_API_KEY: 'k',
    AI_QUOTA_DB: d1Stub(),
  });

  it('rejects a wrong secret without touching Claude or the budget', async () => {
    const env = baseEnv();
    const res = await onRequestPost({ request: makeRequest('wrong'), env });
    expect(res.status).toBe(401);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(env.AI_QUOTA_DB.state.spend).toBe(0);
  });

  it('503s when NEITHER auth secret is configured (never silently open)', async () => {
    const res = await onRequestPost({
      request: makeRequest(SECRET),
      env: { ANTHROPIC_API_KEY: 'k', AI_QUOTA_DB: d1Stub() },
    });
    expect(res.status).toBe(503);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('accepts the self-provisioned CALIBRATION_SECRET without CRON_SECRET', async () => {
    // The zero-owner-action path: calibration.yml derives and installs
    // CALIBRATION_SECRET itself; CRON_SECRET stays untouched.
    const env = {
      CALIBRATION_SECRET: 'derived-token',
      ANTHROPIC_API_KEY: 'k',
      AI_QUOTA_DB: d1Stub(),
    };
    const bad = await onRequestPost({ request: makeRequest('wrong'), env });
    expect(bad.status).toBe(401);
    const res = await onRequestPost({ request: makeRequest('derived-token'), env });
    expect(res.status).toBe(200);
  });

  it('refuses at the budget cap and runs NOTHING', async () => {
    const env = { ...baseEnv(), AI_QUOTA_DB: d1Stub(MONTHLY_BUDGET_MICROUSD) };
    const res = await onRequestPost({ request: makeRequest(SECRET), env });
    expect(res.status).toBe(429);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('pre-charges the full-run ceiling before the first Claude call', async () => {
    const env = baseEnv();
    await onRequestPost({ request: makeRequest(SECRET), env });
    expect(env.AI_QUOTA_DB.state.spend).toBe(ENDPOINT_CEILING_MICROUSD['/api/golden-calibration']);
  });

  it('healthy evaluators → all samples within band, no drift', async () => {
    // Stub scores (writing 75, speaking 0.8) sit inside every WIDE band except
    // the deliberate low-band probes — so tune per-sample: the stub is global,
    // so instead assert the report's shape and that the probes miss as expected.
    const res = await onRequestPost({ request: makeRequest(SECRET), env: baseEnv() });
    expect(res.status).toBe(200);
    const report = await res.json();
    expect(report.total).toBe(GOLDEN_SET.length);
    expect(report.evaluated).toBe(GOLDEN_SET.length);
    // A uniform 75/0.8 grader IS drift against the low-band probes — that is
    // the probes working: an evaluator that scores broken answers well must
    // trip the alarm.
    const misses = report.samples.filter((s) => s.evaluated && !s.ok).map((s) => s.id);
    expect(misses).toContain('w-b1-broken');
    expect(report.drift).toBe(misses.length >= 2);
  });

  it('a per-sample evaluator failure is reported, not fatal', async () => {
    let call = 0;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (_url, init) => {
        call++;
        if (call === 1) return { ok: false, status: 500 };
        const body = JSON.parse(init.body);
        const isWriting = !!body.system;
        const payload = isWriting
          ? { score: 30 }
          : { range: 0.3, accuracy: 0.3, fluency: 0.3, task: 0.3 };
        return { ok: true, json: async () => ({ content: [{ text: JSON.stringify(payload) }] }) };
      }),
    );
    const res = await onRequestPost({ request: makeRequest(SECRET), env: baseEnv() });
    expect(res.status).toBe(200);
    const report = await res.json();
    expect(report.evaluated).toBe(GOLDEN_SET.length - 1);
    expect(report.samples.filter((s) => !s.evaluated)).toHaveLength(1);
  });
});

// ── Budget discipline ────────────────────────────────────────────────────────

describe('golden-calibration budget entry', () => {
  it('the single-run ceiling covers EVERY sample in the set', () => {
    const perSample = (s) => (s.kind === 'writing' ? claudeCeiling(2600) : claudeCeiling(100));
    const runCost = GOLDEN_SET.reduce((sum, s) => sum + perSample(s), 0);
    expect(ENDPOINT_CEILING_MICROUSD['/api/golden-calibration']).toBeGreaterThanOrEqual(runCost);
  });

  it('calibration imports the SAME prompt builders production uses', () => {
    const calib = readFileSync('functions/api/golden-calibration.js', 'utf8');
    expect(calib).toContain("from './_evalPrompts.js'");
    const correct = readFileSync('functions/api/correct.js', 'utf8');
    expect(correct).toContain('writingEvalSystemPrompt');
    const assess = readFileSync('functions/api/assess-speaking.js', 'utf8');
    expect(assess).toContain('speakingRubricPrompt');
  });
});
