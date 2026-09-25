/**
 * SWEEP 122 — A KV TTL IS SECONDS, AND THE NAME IS THE ONLY THING THAT SAYS SO.
 *
 * Cloudflare KV's `expirationTtl` is in SECONDS. Every duration constant in this
 * codebase states its unit in its name, and the wider sweep found that is exactly
 * why the unit class is clean: 49 unit-named constants (`_MS`, `_SECONDS`,
 * `_MINUTES`, `_HOURS`, `_DAYS`) and every single use converts correctly, because a
 * name that states a unit makes the author do the arithmetic.
 *
 * The failure this guards is silent and expensive in one direction. Pass a `_DAYS`
 * value here and a 90-day cache becomes a 90-SECOND cache: `/api/tts` regenerates
 * every phrase on nearly every request, which is real money against a $10/month
 * ceiling and looks like nothing at all — the audio still plays. Pass a `_MS` value
 * and the entry effectively never expires.
 *
 * Measured when written: 24 `expirationTtl` arguments, all seconds. One constant,
 * `WEEKLY_TTL` in backup-mine.js, was the sole TTL whose NAME did not state its unit
 * (it held 90 days in seconds, correctly) — renamed `WEEKLY_TTL_SECONDS` in the same
 * change, because the name is the mechanism this whole class relies on.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

/** Every `expirationTtl: <expr>` argument in the Worker/Functions tree. */
function ttlArguments() {
  const out = [];
  for (const f of globSync('functions/**/*.js')) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
    const s = strip(readFileSync(f, 'utf8'));
    for (const m of s.matchAll(/expirationTtl\s*:\s*([^,}\n]+)/g)) {
      const line = s.slice(0, m.index).split('\n').length;
      out.push({ file: f, line, expr: m[1].trim() });
    }
  }
  return out;
}

/**
 * Is this expression seconds-valued ON ITS FACE?
 *
 * Either arithmetic over numeric literals (`60 * 60 * 24 * 90`, `604800`) — where the
 * reader can check the unit by reading it — or an identifier that states seconds in
 * its own name. A bare identifier that does NOT state its unit is the thing this
 * refuses: `expirationTtl: WEEKLY_TTL` reads exactly the same whether the constant
 * holds seconds, milliseconds or days.
 */
function secondsOnItsFace(expr) {
  // A TERNARY CHOOSES BETWEEN TWO TTLS and its CONDITION carries no unit, so only the
  // value positions are checked. `/middleware`'s
  // `contaminated ? OBS_INCIDENT_TTL_S : OBS_SAMPLE_TTL_S` is the real instance, and
  // the first version of this predicate reported it — a false finding on correct code,
  // which is the direction that gets a guard ignored.
  const operands = expr.includes('?')
    ? expr
        .slice(expr.indexOf('?') + 1)
        .split(':')
        .map((p) => p.trim())
    : [expr];
  return operands.every((part) => {
    if (/^[\d_\s*+/()-]+$/.test(part)) return true;
    const SECONDS_NAME = /(_SECONDS|_TTL_S|_S)$|^ttlSeconds$|Seconds$/;
    const ids = [...part.matchAll(/[A-Za-z_$][\w$]*/g)].map((m) => m[0]);
    return ids.length > 0 && ids.every((id) => SECONDS_NAME.test(id));
  });
}

describe('every KV expirationTtl is seconds, and says so', () => {
  const args = ttlArguments();

  it('the census is real', () => {
    expect(args.length).toBeGreaterThanOrEqual(20);
    // Both shapes are present, so neither branch of the predicate is dead.
    expect(args.some((a) => /^[\d_\s*+/()-]+$/.test(a.expr))).toBe(true);
    expect(args.some((a) => /[A-Za-z]/.test(a.expr))).toBe(true);
  });

  it('no TTL argument hides its unit behind a name that does not state one', () => {
    const bad = args
      .filter((a) => !secondsOnItsFace(a.expr))
      .map((a) => `${a.file}:${a.line} → expirationTtl: ${a.expr}`);
    expect(
      bad,
      'Cloudflare KV takes SECONDS. A name that does not state its unit reads the ' +
        'same whether it holds seconds, ms or days — and a _DAYS value here turns a ' +
        "90-day cache into a 90-second one, which regenerates /api/tts's audio on " +
        'nearly every request and looks like nothing at all.\n' +
        bad.map((b) => `  - ${b}`).join('\n'),
    ).toEqual([]);
  });

  it('POSITIVE CONTROL — the predicate rejects the units that would be wrong', () => {
    expect(secondsOnItsFace('60 * 60 * 24 * 90')).toBe(true);
    expect(secondsOnItsFace('604800')).toBe(true);
    expect(secondsOnItsFace('PUSH_KV_TTL_SECONDS')).toBe(true);
    expect(secondsOnItsFace('VELOCITY_TTL_S')).toBe(true);
    expect(secondsOnItsFace('ttlSeconds')).toBe(true);
    // The shapes that must fail: a bare name, and any other unit.
    expect(secondsOnItsFace('WEEKLY_TTL')).toBe(false);
    expect(secondsOnItsFace('PARTIAL_TTL_MS')).toBe(false);
    expect(secondsOnItsFace('BACKUP_STALE_DAYS')).toBe(false);
    expect(secondsOnItsFace('PUSH_RUN_STALE_MINUTES')).toBe(false);
    // A ternary: the condition is not an operand, but BOTH arms are.
    expect(secondsOnItsFace('contaminated ? OBS_INCIDENT_TTL_S : OBS_SAMPLE_TTL_S')).toBe(true);
    expect(secondsOnItsFace('contaminated ? OBS_INCIDENT_TTL_S : PARTIAL_TTL_MS')).toBe(false);
  });

  it('the 90-day TTS audio cache is still 90 days in seconds', () => {
    // The single most expensive TTL in the app: CLAUDE.md's AI-cost layer 6 rests on
    // "TTS audio is generated once per unique phrase (KV, 90 days)".
    const tts = strip(readFileSync('functions/api/tts.js', 'utf8'));
    const m = /expirationTtl\s*:\s*([^,}\n]+)/.exec(tts);
    expect(m, 'tts.js no longer sets a KV TTL').toBeTruthy();
    // No eval: the guard above already proves this argument is numeric-literal
    // arithmetic, and every TTL in the tree is a product, so multiplying its literals
    // is exact and needs no interpreter.
    const expr = m[1].trim();
    expect(expr, 'the TTS TTL is no longer a product of literals').toMatch(/^[\d_\s*]+$/);
    const product = expr
      .split('*')
      .map((n) => Number(n.trim().replace(/_/g, '')))
      .reduce((a, b) => a * b, 1);
    expect(product).toBe(60 * 60 * 24 * 90);
  });
});
