/**
 * route-render-sweep.spec.js — every screen survives a direct-URL load.
 *
 * WHY THIS IS A REAL USER PATH, not a synthetic one
 * -------------------------------------------------
 * `setScr` ends in `navigate(s === 'dashboard' ? '/' : '/' + s)`, so EVERY
 * screen in this app has a real URL, and App.tsx's path effect turns an
 * unrecognised path straight back into `_setCurrentScreen(p.slice(1))`. A
 * learner reaches these by refreshing, by the back button, or by a bookmark —
 * and on that entry the screen renders WITHOUT the launch-time state its normal
 * caller would have set. Nothing exercised that. Every existing spec navigates
 * by clicking visible text, and the only `page.goto` targets in the suite are
 * the five tab paths.
 *
 * WHY IT IS NOT IN THE DEPLOY-GATING RUN
 * --------------------------------------
 * 430 routes take ~4.8 min, and `playwright.config.js` deliberately pins
 * `workers: 1` (recorded reason: flakiness at 4) with `retries: 2` — so one
 * flaky route would cost ~15 min on the job that gates every deploy. It runs
 * from `.github/workflows/route-render-sweep.yml` instead, weekly and on
 * dispatch, failing red — the same shape as the output-observatory, calibration
 * and push-health sweeps, which exist for exactly this reason.
 *
 * WHAT IT PROVES, AND WHAT IT DOES NOT
 * ------------------------------------
 * It proves each screen RENDERS without engaging `ScreenErrorBoundary`. It does
 * NOT prove the screen works: nothing is clicked (sweep 75 measured 110 screens
 * with no interaction test, and that stands), `/api/content/*` is fixtured while
 * every other `/api/*` 404s, so the AI surfaces are covered in their degrade
 * state only, and direct entry means many screens render their empty state
 * rather than a populated one. "Does not crash on refresh" is the claim.
 *
 * IT ALSO COLLECTS UNCAUGHT EXCEPTIONS, because the boundary only sees a throw
 * during RENDER. This repo has been bitten by the other half: `RegionScreen`
 * rendered `v.tip` while every row carries `note`, dropping every authored line
 * silently, and an unhandled rejection inside an effect produces no boundary at
 * all. Only `pageerror` is asserted, never `console.error` — a console sweep in
 * an environment with blocked egress or no Firebase key reports the environment,
 * not the product (measured: 430 of 430 routes log something, 0 have a defect).
 *
 * THE CONTROL IS PART OF THE SPEC ON PURPOSE. A sweep that navigated 430 times
 * and silently landed on the dashboard every time would report a perfect score,
 * and that is indistinguishable from a real pass. The first test below pins that
 * distinct routes render distinct screens; without it the second is unfalsifiable.
 */
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { readFileSync } from 'node:fs';

/** Routes the router actually branches on, read from its own source. */
const ROUTES = [
  ...new Set(
    [
      ...readFileSync('src/components/AppRouter.tsx', 'utf8').matchAll(
        /currentScreen === '([a-z0-9_-]+)'/g,
      ),
    ].map((m) => m[1]),
  ),
].sort();

/** Screens whose rendered text is known to differ — the control's sample. */
const DISTINCT_SAMPLE = [
  'genitivedrill',
  'flashcards',
  'journal',
  'alphabet',
  'dictation',
  'writing',
];

test.describe('route render sweep', () => {
  test.skip(
    !process.env.ROUTE_SWEEP,
    'runs from .github/workflows/route-render-sweep.yml (ROUTE_SWEEP=1), not the deploy gate',
  );

  test.beforeEach(async ({ page }) => {
    await blockFirebase(page);
    await seedAuth(page);
    await mockContent(page);
    await mockTTS(page);
  });

  test('control: the derivation is real and distinct routes render distinct screens', async ({
    page,
  }) => {
    test.setTimeout(120_000);
    // A derivation that matched nothing would make the sweep below vacuous.
    expect(ROUTES.length).toBeGreaterThan(300);
    expect(ROUTES).toContain('dashboard');

    await page.goto('/');
    await page.waitForLoadState('networkidle').catch(() => {});

    const fingerprints = new Set();
    for (const r of DISTINCT_SAMPLE) {
      await page.goto('/' + r, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);
      const txt = (
        await page
          .locator('body')
          .innerText()
          .catch(() => '')
      ).replace(/\s+/g, ' ');
      fingerprints.add(txt);
    }
    // If direct-URL entry silently bounced to the dashboard, every fingerprint
    // would be identical and the sweep would be measuring one screen 430 times.
    expect(
      fingerprints.size,
      'direct-URL navigation is not reaching distinct screens — the sweep below would be vacuous',
    ).toBe(DISTINCT_SAMPLE.length);
  });

  test('every route renders without crashing or raising an uncaught exception', async ({
    page,
  }) => {
    test.setTimeout(30 * 60 * 1000);

    let raised = [];
    page.on('pageerror', (e) => raised.push(String(e.message).slice(0, 160)));

    await page.goto('/');
    await page.waitForLoadState('networkidle').catch(() => {});

    const crashed = [];
    const threw = [];
    for (const r of ROUTES) {
      raised = [];
      try {
        await page.goto('/' + r, { waitUntil: 'domcontentloaded', timeout: 15_000 });
        await page.waitForTimeout(350);
        if (await page.locator('[data-testid="screen-error-boundary"]').count()) {
          crashed.push(r);
        }
      } catch (e) {
        crashed.push(`${r} (navigation: ${String(e.message).slice(0, 80)})`);
      }
      // An effect that rejects raises here and engages no boundary — the half
      // the check above cannot see.
      if (raised.length) threw.push(`${r}: ${[...new Set(raised)][0]}`);
    }
    expect(
      crashed,
      'these screens crash when opened by URL — the path a learner takes on ' +
        'refresh, back-button or a bookmark',
    ).toEqual([]);
    expect(
      threw,
      'these screens raise an uncaught exception with no boundary to catch it, ' +
        'so nothing renders an error and nothing fails — it is simply wrong',
    ).toEqual([]);
  });
});
