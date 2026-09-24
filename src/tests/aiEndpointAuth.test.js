/**
 * aiEndpointAuth.test.js — every endpoint that spends Claude money is gated.
 *
 * CLAUDE.md states the rule and names its single exception: "Never bypass
 * `requireAuthedAI` for a new USER-FACING AI endpoint; it is the budget's only
 * choke point for user traffic. The one sanctioned exception is
 * `/api/golden-calibration`."
 *
 * NOTHING ENFORCED IT. `requireAuth.test.js` covers the FUNCTION thoroughly —
 * 401 unauthenticated, 429 over quota, 429 at the monthly cap, fail-closed with
 * no storage backend, cost 0 for cache-served endpoints. All of that is about
 * how the gate behaves WHEN CALLED, and says nothing about whether an endpoint
 * calls it. That is the component-test / wiring-test split this repo has met
 * before: `AlphabetScreen`'s own tests passed `award` themselves while the
 * router never did, so a 20 XP call was dead for the life of the screen.
 *
 * Here the cost of the gap is different in kind. An ungated Claude endpoint is
 * unauthenticated access to paid generation: no per-user daily quota, no
 * pre-charge against the monthly ledger, and — because the observatory samples
 * on membership in the ceiling table rather than on the gate — output that can
 * still reach a learner. NOTHING HAS DRIFTED: all 23 user-facing Claude
 * endpoints are gated today. This is the ratchet.
 *
 * DERIVED FROM SOURCE. The endpoint set comes from "this file talks to
 * api.anthropic.com", not from a list someone maintains, because a list is
 * exactly what a new endpoint gets added without.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strip = (s) => s.replace(/(^|[^:])\/\/.*$/gm, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

/** Route files only: `_`-prefixed modules are shared helpers, never endpoints. */
function endpointFiles(dir, out = []) {
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
    if (statSync(p).isDirectory()) endpointFiles(p, out);
    else if (p.endsWith('.js') && !p.includes('__tests__') && !/\/_/.test(p)) out.push(p);
  }
  return out;
}

const routeOf = (f) => '/' + f.replace(/^functions\//, '').replace(/\.js$/, '');

/** Every route that actually calls Claude. */
const CLAUDE_ENDPOINTS = endpointFiles('functions/api')
  .map((f) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
    const src = strip(readFileSync(f, 'utf8'));
    return { route: routeOf(f), src };
  })
  .filter((e) => /api\.anthropic\.com|ANTHROPIC_URL/.test(e.src));

/**
 * The one endpoint allowed past the user gate, with its reason.
 *
 * `/api/golden-calibration` is dispatch-only: no user can reach it (CRON_SECRET
 * or the self-provisioned CALIBRATION_SECRET, both timing-safe), and it
 * pre-charges its ENTIRE run's ceiling via `checkAndChargeBudget` before the
 * first Claude call — so the $10/month guarantee holds without the user gate.
 *
 * Checked in BOTH staleness directions below, because an exemption that has
 * stopped describing anything is the `idioms` failure this repo met once: it
 * kept asserting a live dead end while guarding nothing.
 */
const CRON_GATED_ONLY = ['/api/golden-calibration'];

describe('the derivation is real', () => {
  it('finds the Claude endpoints', () => {
    // Vacuous otherwise. The count is cross-checked against CLAUDE.md's own
    // figure ("24 Claude endpoints"), so a matcher that silently stopped
    // matching half of them shows up here rather than as a green sweep.
    expect(CLAUDE_ENDPOINTS.length).toBeGreaterThanOrEqual(20);
  });

  it('excludes shared helper modules', () => {
    // `_`-prefixed files are not routes; one appearing here would mean the
    // filter broke and the results are about the wrong set of files.
    expect(CLAUDE_ENDPOINTS.filter((e) => e.route.includes('/_'))).toEqual([]);
  });
});

describe('every user-facing Claude endpoint is behind requireAuthedAI', () => {
  it('has no ungated spender', () => {
    const ungated = CLAUDE_ENDPOINTS.filter(
      (e) => !/requireAuthedAI\s*\(/.test(e.src) && !CRON_GATED_ONLY.includes(e.route),
    ).map((e) => e.route);
    expect(
      ungated,
      'These endpoints call Claude with no `requireAuthedAI` gate, so they spend ' +
        'the monthly budget with no per-user quota and no authentication:\n' +
        ungated.map((r) => `  - ${r}`).join('\n'),
    ).toEqual([]);
  });
});

describe('the exemption is honest in both directions', () => {
  it.each(CRON_GATED_ONLY)('%s still exists and still calls Claude', (route) => {
    expect(CLAUDE_ENDPOINTS.map((e) => e.route)).toContain(route);
  });

  it.each(CRON_GATED_ONLY)(
    '%s is still ungated — otherwise it should come off the list',
    (route) => {
      const e = CLAUDE_ENDPOINTS.find((x) => x.route === route);
      expect(e && /requireAuthedAI\s*\(/.test(e.src)).toBe(false);
    },
  );

  it.each(CRON_GATED_ONLY)('%s is cron-gated instead, not simply open', (route) => {
    // THE HALF THAT MAKES THE EXEMPTION SAFE. "No user gate" is only acceptable
    // because no user can reach it at all; without this the exemption would
    // read as permission to ship an open Claude endpoint.
    const e = CLAUDE_ENDPOINTS.find((x) => x.route === route);
    expect(e.src, 'the sanctioned exception lost its cron gate — it is now open').toMatch(
      /isAuthorizedCron|CRON_SECRET|CALIBRATION_SECRET/,
    );
    // ...and it still pre-charges the whole run, which is what preserves the
    // monthly cap in the absence of the per-request gate.
    expect(e.src, 'the exception no longer pre-charges its run against the budget').toMatch(
      /checkAndChargeBudget/,
    );
  });
});
