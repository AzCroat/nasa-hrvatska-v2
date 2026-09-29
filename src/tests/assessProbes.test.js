// src/tests/assessProbes.test.js
//
// The STT calibration's pronunciation-assessment probes (2026-09-29): does Azure tell a
// wrong case ending from a right one? The endpoint is driven with the speech providers
// mocked; what is pinned is the probe design, the verdict rule, and the gate.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import fs from 'node:fs';

const assessMock = vi.fn();
const ttsMock = vi.fn(async () => new Uint8Array([82, 73, 70, 70]).buffer);
vi.mock('../../functions/api/pronunciation-assess.js', () => ({
  azureAssess: (...a) => assessMock(...a),
}));
vi.mock('../../functions/api/tts.js', () => ({ tryAzure: (...a) => ttsMock(...a) }));
vi.mock('../../functions/api/_transcribe.js', () => ({
  transcribeCroatian: async () => ({ text: 'x', provider: 'mock' }),
}));
vi.mock('../../functions/api/_aiBudget.js', async (orig) => ({
  ...(await orig()),
  checkAndChargeBudget: async () => ({ allowed: true }),
}));

import {
  ASSESS_PROBES,
  ASSESS_UNCLEAR_BELOW,
  assessFocusFlagged,
} from '../../functions/api/_sttGoldenSet.js';
import { onRequestPost } from '../../functions/api/stt-calibration.js';
import { UNCLEAR_BELOW, checkedWords } from '../lib/spokenCheck';

const run = async () => {
  const res = await onRequestPost({
    request: new Request('https://x/api/stt-calibration', {
      method: 'POST',
      headers: { 'x-cron-secret': 's' },
    }),
    env: {
      CRON_SECRET: 's',
      AZURE_TTS_KEY: 'k',
      AZURE_TTS_REGION: 'westeurope',
      DEEPGRAM_API_KEY: 'd',
    },
  });
  return res.json();
};

// Azure "hears" the audio for `said` against `reference`: every word matching the
// reference is clear, and a reference word the speaker did not say is mispronounced.
function azureHearing(flagWrong = true) {
  return async (_k, _r, _audio, contentType, reference) => {
    const said = assessMock.mock.calls.length % 2 === 1 ? 'control' : 'miscue';
    const probe = ASSESS_PROBES.find((p) => p.reference === reference);
    const words = reference.replace(/[.,]/g, '').split(' ');
    return {
      ok: true,
      durationS: 2,
      parsed: {
        recognized: said === 'control' ? probe.reference : probe.wrong,
        word_scores: words.map((w) => {
          const bad = said === 'miscue' && flagWrong && w === probe.focus;
          return { word: w, score: bad ? 30 : 90, error: bad ? 'Mispronunciation' : 'None' };
        }),
        contentType,
      },
    };
  };
}

beforeEach(() => {
  assessMock.mockReset();
  ttsMock.mockClear();
});

describe('the probes', () => {
  it('each wrong form differs from the reference only at its focus word', () => {
    expect(ASSESS_PROBES.length).toBeGreaterThanOrEqual(4);
    for (const p of ASSESS_PROBES) {
      const a = p.reference.replace(/[.,]/g, '').split(' ');
      const b = p.wrong.replace(/[.,]/g, '').split(' ');
      expect(a.length, p.id).toBe(b.length);
      const diff = a.filter((w, i) => w !== b[i]);
      expect(diff, p.id).toEqual([p.focus]);
    }
  });

  it('the verdict rule is the app’s own rule', () => {
    expect(ASSESS_UNCLEAR_BELOW).toBe(UNCLEAR_BELOW);
    const cases = [
      { word: 'kavu', score: 90, error: 'None' },
      { word: 'kavu', score: 50, error: 'None' },
      { word: 'kavu', score: 80, error: 'Mispronunciation' },
      { word: 'kavu', score: 0, error: 'Omission' },
    ];
    for (const c of cases) {
      const app = checkedWords([c])[0].status !== 'good';
      expect(assessFocusFlagged([c], 'kavu'), JSON.stringify(c)).toBe(app);
    }
    expect(assessFocusFlagged([], 'kavu')).toBe(true); // not scored at all
    expect(assessFocusFlagged([{ word: 'kavu', score: 90, error: 'Insertion' }], 'kavu')).toBe(
      true,
    );
  });
});

describe('the calibration run', () => {
  it('scores both halves against the CORRECT sentence, as WAV, and passes when Azure discriminates', async () => {
    assessMock.mockImplementation(azureHearing(true));
    const report = await run();
    expect(assessMock).toHaveBeenCalledTimes(ASSESS_PROBES.length * 2);
    for (const call of assessMock.mock.calls) {
      expect(call[3]).toBe('audio/wav');
      expect(ASSESS_PROBES.map((p) => p.reference)).toContain(call[4]);
    }
    expect(ttsMock.mock.calls.some((c) => c[1].outputFormat === 'riff-16khz-16bit-mono-pcm')).toBe(
      true,
    );
    expect(report.assessment).toMatchObject({ total: 8, failed: 0, drift: false });
  });

  it('reports drift when Azure does NOT flag the wrong endings', async () => {
    assessMock.mockImplementation(azureHearing(false));
    const report = await run();
    expect(report.assessment.failed).toBe(ASSESS_PROBES.length);
    expect(report.assessment.drift).toBe(true);
    expect(report.assessment.probes.every((p) => p.miscue.ok === false && p.control.ok)).toBe(true);
  });

  it('the workflow fails red on assessment drift', () => {
    const wf = fs.readFileSync('.github/workflows/stt-calibration.yml', 'utf8');
    expect(wf).toMatch(/if a\.get\('drift'\):[\s\S]*?failed = True/);
    expect(wf).toMatch(/if failed:\s*\n\s*sys\.exit\(1\)/);
  });
});
