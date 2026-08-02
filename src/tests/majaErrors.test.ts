import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  majaErrorMessage,
  isAbortFailure,
  MAJA_START_FALLBACK,
  MAJA_TURN_FALLBACK,
} from '../components/croatia/majaErrors';

describe('majaErrorMessage', () => {
  it('names an expired session on 401', () => {
    expect(majaErrorMessage(401, MAJA_TURN_FALLBACK)).toBe(
      'Sesija je istekla. Odjavi se i prijavi ponovo.',
    );
  });

  it('names the daily AI limit on a 429 that really IS the daily ceiling', () => {
    // Mid-conversation this used to read as a transient glitch, so the learner
    // retried into the same wall instead of being told to come back tomorrow.
    expect(majaErrorMessage(429, MAJA_TURN_FALLBACK, 'daily_quota_exceeded')).toBe(
      'Prekoračen dnevni limit AI razgovora. Pokušaj sutra.',
    );
  });

  it('names the BURST limiter separately — it is not the daily ceiling', () => {
    // /api/maja goes through requireAuthedAI, which answers 429 for the
    // per-minute limiter (`rate_limited`) as well as the daily quota. Reporting
    // both as "Pokušaj sutra" sent a learner away for the day when they had
    // only typed two messages quickly — and the obvious response to that
    // message, stopping, is exactly the wrong one.
    expect(majaErrorMessage(429, MAJA_TURN_FALLBACK, 'rate_limited')).toBe(
      'Šalješ poruke prebrzo. Pričekaj trenutak i pokušaj ponovo.',
    );
  });

  it('assumes burst when a 429 arrives with no readable code', () => {
    // Deliberate behaviour CHANGE: a bare 429 used to report the daily limit.
    // classifyAiLimit defaults to burst because guessing daily is the more
    // damaging error — it sends someone away for a day over a few seconds.
    expect(majaErrorMessage(429, MAJA_TURN_FALLBACK)).toBe(
      'Šalješ poruke prebrzo. Pričekaj trenutak i pokušaj ponovo.',
    );
  });

  it('names a server error across the whole 5xx range', () => {
    for (const s of [500, 502, 503, 504, 599]) {
      expect(majaErrorMessage(s, MAJA_TURN_FALLBACK)).toBe(
        'Serverska greška. Pokušaj za koji trenutak.',
      );
    }
  });

  it('falls back per caller — start and turn keep distinct defaults', () => {
    expect(majaErrorMessage(undefined, MAJA_START_FALLBACK)).toBe(MAJA_START_FALLBACK);
    expect(majaErrorMessage(undefined, MAJA_TURN_FALLBACK)).toBe(MAJA_TURN_FALLBACK);
    expect(MAJA_START_FALLBACK).not.toBe(MAJA_TURN_FALLBACK);
  });

  it('does not claim a server error for other 4xx', () => {
    expect(majaErrorMessage(400, MAJA_TURN_FALLBACK)).toBe(MAJA_TURN_FALLBACK);
    expect(majaErrorMessage(404, MAJA_TURN_FALLBACK)).toBe(MAJA_TURN_FALLBACK);
  });

  it('all messages carry full Croatian diacritics', () => {
    // Guard against a future edit dropping č/ć/š/ž, which is how Croatian copy
    // usually degrades.
    expect(majaErrorMessage(429, MAJA_TURN_FALLBACK, 'daily_quota_exceeded')).toContain(
      'Prekoračen',
    );
    expect(majaErrorMessage(429, MAJA_TURN_FALLBACK, 'rate_limited')).toContain('Šalješ');
    expect(majaErrorMessage(429, MAJA_TURN_FALLBACK, 'rate_limited')).toContain('Pričekaj');
    expect(majaErrorMessage(500, MAJA_TURN_FALLBACK)).toContain('greška');
    expect(MAJA_TURN_FALLBACK).toContain('Nešto');
    expect(MAJA_START_FALLBACK).toContain('moguće');
  });
});

describe('isAbortFailure', () => {
  it('is true for an AbortError (teardown / time-to-first-byte timeout)', () => {
    const e = new Error('aborted');
    e.name = 'AbortError';
    expect(isAbortFailure(e)).toBe(true);
  });

  it('is false for a real failure, and never throws on odd input', () => {
    expect(isAbortFailure(new Error('API 500'))).toBe(false);
    expect(isAbortFailure(undefined)).toBe(false);
    expect(isAbortFailure(null)).toBe(false);
    expect(isAbortFailure('boom')).toBe(false);
  });
});

describe('MajaScreen wiring', () => {
  const CODE = readFileSync(
    join(process.cwd(), 'src/components/croatia/MajaScreen.tsx'),
    'utf8',
  ).replace(/\/\/.*$/gm, ''); // strip comments — they mention the old strings

  it('both failure paths route through the shared mapping', () => {
    // Two call sites: startSession and the streaming turn.
    expect(CODE.match(/majaErrorMessage\(/g)?.length).toBe(2);
    expect(CODE).toContain('MAJA_START_FALLBACK');
    expect(CODE).toContain('MAJA_TURN_FALLBACK');
  });

  it('BOTH paths attach the HTTP status to the thrown error', () => {
    // Without _status the catch cannot distinguish 429 from a network blip —
    // that was the actual defect. Asserting the COUNT, not just presence:
    // startSession already attached _status before this change, so a
    // presence-only check passed against the pre-fix code and proved nothing.
    expect(CODE.match(/_status:\s*res\.status/g)?.length).toBe(2);
  });

  it('BOTH paths attach the server error code as well', () => {
    // The status alone cannot separate the burst limiter from the daily
    // ceiling — both are 429 — so each throw site must also carry the body's
    // error code, and each catch must pass it on.
    expect(CODE.match(/_code:\s*await readErrorCode\(res\)/g)?.length).toBe(2);
    expect(CODE.match(/\?\._code/g)?.length).toBe(2);
  });

  it('no hardcoded status message survives in the component', () => {
    // If a branch is reintroduced inline, the two implementations will drift.
    expect(CODE).not.toContain('Sesija je istekla');
    expect(CODE).not.toContain('Prekoračen dnevni limit');
    expect(CODE).not.toContain('Serverska greška');
  });

  it('both paths report to Sentry, skipping user aborts', () => {
    expect(CODE.match(/reportError\(/g)?.length).toBe(2);
    expect(CODE.match(/isAbortFailure\(/g)?.length).toBe(2);
  });
});
