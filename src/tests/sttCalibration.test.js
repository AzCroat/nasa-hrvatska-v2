// src/tests/sttCalibration.test.js
//
// STT-stage calibration pins (owner directive, 2026-08-19 — gap #7). The
// rubric golden set proves grading is honest AFTER a transcript exists; these
// pins protect the machinery that verifies the transcript-producing stage
// itself: the WER math, the golden phrase set, the production-path wiring
// (real TTS voice in, real provider chain out), and the cost architecture.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  STT_GOLDEN_PHRASES,
  STT_WER_BAND,
  wordErrorRate,
  normalizeForWer,
} from '../../functions/api/_sttGoldenSet.js';
import { ENDPOINT_CEILING_MICROUSD } from '../../functions/api/_aiBudget.js';
import { onRequestPost as sttCalibrate } from '../../functions/api/stt-calibration.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const endpointSrc = readFileSync(join(__dir, '../../functions/api/stt-calibration.js'), 'utf8');
const workflowSrc = readFileSync(
  join(__dir, '../../.github/workflows/stt-calibration.yml'),
  'utf8',
);

describe('wordErrorRate — the yardstick', () => {
  it('identical → 0; empty hypothesis → 1', () => {
    expect(wordErrorRate('dobar dan svima', 'dobar dan svima')).toBe(0);
    expect(wordErrorRate('dobar dan', '')).toBe(1);
  });

  it('case and punctuation never count as errors', () => {
    expect(wordErrorRate('Dobar dan, kako ste?', 'dobar dan kako ste')).toBe(0);
  });

  it('DIACRITICS count — c vs č is exactly what Croatian STT must get right', () => {
    expect(wordErrorRate('čaša šećera', 'casa secera')).toBe(1);
    expect(normalizeForWer('Čaša!')).toBe('čaša');
  });

  it('one substitution in four words → 0.25', () => {
    expect(wordErrorRate('idem u veliki grad', 'idem u mali grad')).toBe(0.25);
  });

  it('insertions and deletions both count', () => {
    expect(wordErrorRate('idem doma', 'idem sada doma')).toBe(0.5); // insertion
    expect(wordErrorRate('idem sada doma', 'idem doma')).toBeCloseTo(1 / 3); // deletion
  });
});

describe('the golden phrase set', () => {
  it('has 6 unique phrases exercising diacritics, numbers and palatals', () => {
    expect(STT_GOLDEN_PHRASES).toHaveLength(6);
    const ids = STT_GOLDEN_PHRASES.map((p) => p.id);
    expect(new Set(ids).size).toBe(6);
    const all = STT_GOLDEN_PHRASES.map((p) => p.text).join(' ');
    expect(/[čćžšđ]/.test(all)).toBe(true); // diacritic coverage
    expect(/lj|nj/.test(all)).toBe(true); // palatal clusters
    for (const p of STT_GOLDEN_PHRASES) {
      expect(p.text.split(' ').length, `${p.id} long enough for meaningful WER`).toBeGreaterThan(3);
    }
  });

  it('the band catches gross breakage without pinning provider variance', () => {
    expect(STT_WER_BAND).toBeGreaterThanOrEqual(0.2);
    expect(STT_WER_BAND).toBeLessThanOrEqual(0.5);
  });
});

describe('endpoint — production-path and cost pins', () => {
  it('runs the REAL production speech chain, not a parallel one', () => {
    expect(endpointSrc).toContain("from './_transcribe.js'"); // Deepgram→Whisper chain
    expect(endpointSrc).toContain("from './tts.js'"); // the voice learners hear
  });

  it('pre-charges the whole run at the budget gate before any provider call', () => {
    expect(endpointSrc).toContain("checkAndChargeBudget(env, '/api/stt-calibration')");
    expect(ENDPOINT_CEILING_MICROUSD['/api/stt-calibration']).toBe(6 * (4_000 + 15_000));
  });

  it('makes zero Claude calls', () => {
    expect(endpointSrc).not.toContain('anthropic');
    expect(endpointSrc).not.toContain('claude-haiku');
  });

  it('503 when no calibration secret is configured; 401 on a wrong secret', async () => {
    const mkReq = (secret) =>
      new Request('https://nasahrvatska.com/api/stt-calibration', {
        method: 'POST',
        headers: secret ? { 'x-cron-secret': secret } : {},
      });
    const r1 = await sttCalibrate({ request: mkReq('x'), env: {} });
    expect(r1.status).toBe(503);
    const r2 = await sttCalibrate({
      request: mkReq('wrong'),
      env: {
        CALIBRATION_SECRET: 'right',
        AZURE_TTS_KEY: 'k',
        DEEPGRAM_API_KEY: 'k',
      },
    });
    expect(r2.status).toBe(401);
  });
});

describe('workflow — the red-on-drift wrapper', () => {
  it('calls the endpoint with the shared derived credential and fails on drift', () => {
    expect(workflowSrc).toContain('/api/stt-calibration');
    expect(workflowSrc).toContain('nh-calibration-v1');
    expect(workflowSrc).toContain('STT drift detected');
  });
});
