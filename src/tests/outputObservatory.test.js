// src/tests/outputObservatory.test.js
//
// Output-observation pins (owner directive, 2026-08-18): the bakery Cyrillic
// incident was found by the owner in the field. These tests pin the machinery
// that makes the NEXT one machine-found: the guard's observer hook, the
// middleware's persistence rules (incidents always, clean output sampled),
// the sweep endpoint's auth + report, and the single-source Serbism rules.

import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { latinizeResponseBody, OBSERVE_SAMPLE_CHARS } from '../../functions/api/_croatianGuard.js';
import { findSerbism, SERBISM_RULES } from '../../functions/api/_serbisms.js';
import {
  onRequestPost as sweep,
  partitionIncidentsByAge,
} from '../../functions/api/output-observatory.js';

const DAY = 24 * 60 * 60 * 1000;
/** Fixtures must age with the clock, or they silently fall out of the freshness
 *  window and start failing on a date nobody chose. */
const agoIso = (ms) => new Date(Date.now() - ms).toISOString();

const __dir = dirname(fileURLToPath(import.meta.url));
const mwSrc = readFileSync(join(__dir, '../../functions/_middleware.js'), 'utf8');
const sweepSrc = readFileSync(join(__dir, '../../functions/api/output-observatory.js'), 'utf8');

// ── Guard observer ────────────────────────────────────────────────────────────

function jsonResponse(body) {
  return new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('latinizeResponseBody — observer hook', () => {
  it('reports contamination with the PRE-transliteration text, and the client still gets clean Latin', async () => {
    const observe = vi.fn();
    const wrapped = latinizeResponseBody(
      jsonResponse({ hr: 'Dobro jutro, пекара je otvorena' }),
      observe,
    );
    const served = await wrapped.text();
    expect(served).toContain('pekara'); // client sees transliterated Latin
    expect(served).not.toMatch(/[Ѐ-ӿ]/);
    expect(observe).toHaveBeenCalledTimes(1);
    const info = observe.mock.calls[0][0];
    expect(info.contaminated).toBe(true);
    expect(info.text).toContain('пекара'); // observer sees what the MODEL produced
  });

  it('reports clean responses as clean', async () => {
    const observe = vi.fn();
    const wrapped = latinizeResponseBody(jsonResponse({ hr: 'Dobro jutro' }), observe);
    await wrapped.text();
    expect(observe).toHaveBeenCalledWith({
      contaminated: false,
      text: expect.stringContaining('Dobro jutro'),
    });
  });

  it('truncates the observed text to the sample cap', async () => {
    const observe = vi.fn();
    const big = 'x'.repeat(OBSERVE_SAMPLE_CHARS * 3);
    const wrapped = latinizeResponseBody(jsonResponse({ hr: big }), observe);
    await wrapped.text();
    expect(observe.mock.calls[0][0].text.length).toBe(OBSERVE_SAMPLE_CHARS);
  });

  it('never calls the observer for non-textual bodies', () => {
    const observe = vi.fn();
    const audio = new Response(new Uint8Array([1, 2, 3]), {
      headers: { 'Content-Type': 'audio/mpeg' },
    });
    const out = latinizeResponseBody(audio, observe);
    expect(out).toBe(audio);
    expect(observe).not.toHaveBeenCalled();
  });

  it('an observer that throws never damages the response', async () => {
    const wrapped = latinizeResponseBody(jsonResponse({ hr: 'miran tekst' }), () => {
      throw new Error('observer bug');
    });
    expect(await wrapped.text()).toContain('miran tekst');
  });
});

// ── Middleware persistence rules (source pins) ────────────────────────────────

describe('middleware observation wiring (source pins)', () => {
  const src = mwSrc;

  it('samples ONLY the AI surface — membership in the metered-ceiling table', () => {
    expect(src).toContain('ENDPOINT_CEILING_MICROUSD');
    expect(src).toContain('pathname in ENDPOINT_CEILING_MICROUSD');
  });

  it('incidents always persist; clean output is sampled', () => {
    expect(src).toContain('!contaminated && Math.random() >= OBS_SAMPLE_RATE');
  });

  it('flush-time KV writes are kept alive via a bounded waitUntil', () => {
    expect(src).toContain('waitUntil');
    expect(src).toContain('OBS_FLUSH_TIMEOUT_MS');
  });

  it('only 200s are observed — errors are not "served output"', () => {
    expect(src).toContain('status !== 200');
  });
});

// ── Shared Serbism rules (single source) ──────────────────────────────────────

describe('_serbisms.js — the one blocklist', () => {
  it('catches real Serbisms', () => {
    expect(findSerbism('Kupio sam hleb u pekari')).toMatchObject({ use: 'kruh' });
    expect(findSerbism('Vreme je lepo danas')).toBeTruthy();
    expect(findSerbism('pozorište u centru')).toMatchObject({ use: 'kazalište' });
  });

  it('never flags standard Croatian (the 123-false-positive lesson)', () => {
    expect(findSerbism('Ova rečenica je duga')).toBeNull(); // reč inside rečenica
    expect(findSerbism('Nemam vremena za to')).toBeNull(); // oblique of vrijeme
    expect(findSerbism('On reče da dolazi')).toBeNull(); // aorist of reći
    expect(findSerbism('Vrijeme je lijepo')).toBeNull();
  });

  it('the content lint imports THESE rules (no fork)', () => {
    const lint = readFileSync(join(__dir, '../../scripts/lintCroatianText.mjs'), 'utf8');
    expect(lint).toContain("from '../functions/api/_serbisms.js'");
    expect(SERBISM_RULES.length).toBeGreaterThanOrEqual(15);
  });
});

// ── Sweep endpoint ────────────────────────────────────────────────────────────

function mockKv(records) {
  return {
    async list({ prefix }) {
      return {
        keys: Object.keys(records)
          .filter((k) => k.startsWith(prefix))
          .map((name) => ({ name })),
        list_complete: true,
      };
    },
    async get(key) {
      return records[key] ? JSON.stringify(records[key]) : null;
    },
  };
}

function sweepContext({ secret, env }) {
  return {
    request: new Request('https://nasahrvatska.com/api/output-observatory', {
      method: 'POST',
      headers: secret ? { 'x-cron-secret': secret } : {},
    }),
    env,
  };
}

describe('/api/output-observatory — the sweep', () => {
  it('503 when no secret is configured; 401 on a wrong secret', async () => {
    const r1 = await sweep(sweepContext({ secret: 'x', env: {} }));
    expect(r1.status).toBe(503);
    const r2 = await sweep(
      sweepContext({
        secret: 'wrong',
        env: { CALIBRATION_SECRET: 'right', PUSH_SUBSCRIPTIONS: mockKv({}) },
      }),
    );
    expect(r2.status).toBe(401);
  });

  it('reports incidents and re-screens samples with the shared rules', async () => {
    const kv = mockKv({
      'obs:i:recent:aaaa11': {
        path: '/api/dialogue',
        at: agoIso(2 * DAY), // fresh — this one still gates
        contaminated: true,
        text: 'Добро јутро, пекара',
      },
      'obs:s:2026-08-18:_api_maja:bbbb22': {
        path: '/api/maja',
        at: '2026-08-18T11:00:00.000Z',
        contaminated: false,
        text: 'Kupio sam hleb i mlijeko', // Serbism the prompt rule missed
      },
      'obs:s:2026-08-18:_api_listening:cccc33': {
        path: '/api/listening',
        at: '2026-08-18T12:00:00.000Z',
        contaminated: false,
        text: 'Vrijeme je lijepo i sunčano.',
      },
    });
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: { CALIBRATION_SECRET: 's3cret', PUSH_SUBSCRIPTIONS: kv },
      }),
    );
    expect(res.status).toBe(200);
    const report = await res.json();
    expect(report.clean).toBe(false);
    expect(report.incidents).toHaveLength(1);
    expect(report.incidents[0].path).toBe('/api/dialogue');
    expect(report.samples.checked).toBe(2);
    expect(report.samples.findings).toHaveLength(1);
    expect(report.samples.findings[0]).toMatchObject({
      kind: 'serbism',
      match: 'hleb',
      use: 'kruh',
    });
  });

  it('a quiet week is clean', async () => {
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: { CRON_SECRET: 's3cret', PUSH_SUBSCRIPTIONS: mockKv({}) },
      }),
    );
    const report = await res.json();
    expect(report.clean).toBe(true);
    expect(report.incidents).toHaveLength(0);
  });

  it('spends nothing: no Claude call anywhere in the sweep', () => {
    expect(sweepSrc).not.toContain('anthropic');
    expect(sweepSrc).not.toContain('claude-haiku');
  });
});

// ── Incident age filter (2026-08-25) ──────────────────────────────────────────
//
// Incidents live in KV for 14 days and the sweep runs weekly, so one incident
// used to fail the build on two consecutive Mondays — the second time long
// after it was fixed. An alarm that keeps sounding for a resolved problem is
// one its reader learns to skip, which costs more than it saves.

describe('partitionIncidentsByAge', () => {
  const now = Date.parse('2026-08-25T06:00:00.000Z');
  const at = (ms) => ({ at: new Date(now - ms).toISOString() });

  it('gates on an incident inside the window and retains one outside it', () => {
    const { fresh, retained } = partitionIncidentsByAge(
      [at(1 * DAY), at(7 * DAY), at(9 * DAY), at(13 * DAY)],
      { now },
    );
    expect(fresh).toHaveLength(2);
    expect(retained).toHaveLength(2);
  });

  it('is inclusive at exactly the boundary, exclusive one millisecond past it', () => {
    // The window is 8 days: one weekly sweep interval plus a day of slack, so
    // every incident is fresh for exactly the one sweep that should escalate it.
    expect(partitionIncidentsByAge([at(8 * DAY)], { now }).fresh).toHaveLength(1);
    expect(partitionIncidentsByAge([at(8 * DAY + 1)], { now }).fresh).toHaveLength(0);
  });

  it('counts an undateable incident as FRESH', () => {
    // Ageing out is a privilege earned by a timestamp we can read. A record we
    // cannot date must not slip past the gate for being unclassifiable — that
    // would make a corrupt record the quietest kind.
    for (const inc of [{}, { at: null }, { at: 'not a date' }, { at: 12345 }, null]) {
      expect(partitionIncidentsByAge([inc], { now }).fresh, JSON.stringify(inc)).toHaveLength(1);
    }
  });

  it('treats a future timestamp as fresh rather than ancient', () => {
    // Clock skew between the edge that wrote the record and the sweep must not
    // hand an incident a free pass.
    expect(partitionIncidentsByAge([at(-1 * DAY)], { now }).fresh).toHaveLength(1);
  });

  it('survives a non-array input', () => {
    expect(partitionIncidentsByAge(undefined)).toEqual({ fresh: [], retained: [] });
    expect(partitionIncidentsByAge(null)).toEqual({ fresh: [], retained: [] });
  });
});

describe('the sweep only gates on fresh incidents', () => {
  const oldIncident = {
    'obs:i:old:ffff66': {
      path: '/api/dialogue',
      at: agoIso(11 * DAY),
      contaminated: true,
      text: 'Добро јутро',
    },
  };

  it('an incident older than the window is retained, reported, and does NOT fail the sweep', async () => {
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: { CRON_SECRET: 's3cret', PUSH_SUBSCRIPTIONS: mockKv(oldIncident) },
      }),
    );
    const report = await res.json();
    expect(report.clean).toBe(true);
    expect(report.incidents).toHaveLength(0);
    // Still visible: a problem nobody fixed must not vanish, it must stop crying
    // wolf. The workflow prints these as warnings.
    expect(report.retainedIncidents.count).toBe(1);
    expect(report.retainedIncidents.entries[0].path).toBe('/api/dialogue');
    expect(report.retainedIncidents.freshWindowDays).toBe(8);
  });

  it('a recurrence writes a new record, which is fresh again and fails', async () => {
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: {
          CRON_SECRET: 's3cret',
          PUSH_SUBSCRIPTIONS: mockKv({
            ...oldIncident,
            'obs:i:new:aaaa77': {
              path: '/api/dialogue',
              at: agoIso(1 * DAY),
              contaminated: true,
              text: 'Добро јутро',
            },
          }),
        },
      }),
    );
    const report = await res.json();
    expect(report.clean).toBe(false);
    expect(report.incidents).toHaveLength(1);
    expect(report.retainedIncidents.count).toBe(1);
  });

  it('an old incident never suppresses a fresh SAMPLE finding', async () => {
    // The age filter is about incidents only. Samples carry a 14-day TTL and are
    // re-screened every sweep, so they are already self-limiting.
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: {
          CRON_SECRET: 's3cret',
          PUSH_SUBSCRIPTIONS: mockKv({
            ...oldIncident,
            'obs:s:x:_api_maja:bbbb88': {
              path: '/api/maja',
              at: agoIso(1 * DAY),
              contaminated: false,
              text: 'Kupio sam hleb i mlijeko',
            },
          }),
        },
      }),
    );
    const report = await res.json();
    expect(report.clean).toBe(false);
    expect(report.samples.findings).toHaveLength(1);
  });

  it('a retained incident still counts toward its prompt roll-up', async () => {
    // Ageing out of the GATE is not ageing out of the record. "Which prompt has
    // a history of contamination" is exactly the question the roll-up answers.
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: {
          CRON_SECRET: 's3cret',
          PUSH_SUBSCRIPTIONS: mockKv({
            'obs:i:old:ffff99': {
              path: '/api/dialogue',
              at: agoIso(11 * DAY),
              contaminated: true,
              text: 'Добро јутро',
              promptId: 'dialogue-turn',
              promptVersion: 'deadbeef',
            },
          }),
        },
      }),
    );
    const report = await res.json();
    expect(report.prompts).toContainEqual({
      prompt: 'dialogue-turn@deadbeef',
      samples: 1,
      findings: 1,
    });
  });
});

describe('the workflow reads the split report', () => {
  const wf = readFileSync(join(__dir, '../../.github/workflows/output-observatory.yml'), 'utf8');

  it('fails on fresh incidents and findings only', () => {
    expect(wf).toContain('if incidents or findings:');
  });

  it('prints retained incidents as warnings, never as an error', () => {
    // If this block is ever turned into an ::error:: the filter is undone — the
    // sweep would go red for the same resolved incident every Monday again.
    expect(wf).toContain('retainedIncidents');
    const retainedLine = wf.split('\n').find((l) => l.includes('retained') && l.includes('::'));
    expect(retainedLine).toBeTruthy();
    expect(retainedLine).toContain('::warning::');
  });
});

describe('the sweep groups a multi-prompt observation honestly (2026-08-24)', () => {
  it('names both prompts rather than filing the record as uninstrumented', async () => {
    // /api/golden-calibration runs two evaluator prompts in one dispatch, so the
    // middleware stores `prompts: [...]` instead of a single promptId. Before
    // promptKeyOf learned that shape, such a record fell through to
    // "(uninstrumented)" — the exact opposite of the truth.
    const kv = mockKv({
      'obs:s:2026-08-24:_api_golden-calibration:dddd44': {
        path: '/api/golden-calibration',
        at: '2026-08-24T09:00:00.000Z',
        contaminated: false,
        text: 'Vrijeme je lijepo.',
        prompts: [
          { id: 'writing-eval', version: 'aabbccdd' },
          { id: 'speaking-rubric', version: '11223344' },
        ],
      },
    });
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: { CALIBRATION_SECRET: 's3cret', PUSH_SUBSCRIPTIONS: kv },
      }),
    );
    const report = await res.json();
    const keys = report.prompts.map((p) => p.prompt ?? p.key ?? Object.values(p)[0]);
    expect(keys).toContain('writing-eval@aabbccdd + speaking-rubric@11223344');
    expect(keys).not.toContain('(uninstrumented)');
  });

  it('still groups a single-prompt record by its one tag', async () => {
    const kv = mockKv({
      'obs:s:2026-08-24:_api_correct:eeee55': {
        path: '/api/correct',
        at: '2026-08-24T09:00:00.000Z',
        contaminated: false,
        text: 'Vrijeme je lijepo.',
        promptId: 'writing-eval',
        promptVersion: 'aabbccdd',
      },
    });
    const res = await sweep(
      sweepContext({
        secret: 's3cret',
        env: { CALIBRATION_SECRET: 's3cret', PUSH_SUBSCRIPTIONS: kv },
      }),
    );
    const report = await res.json();
    const keys = report.prompts.map((p) => p.prompt ?? p.key ?? Object.values(p)[0]);
    expect(keys).toContain('writing-eval@aabbccdd');
  });
});
