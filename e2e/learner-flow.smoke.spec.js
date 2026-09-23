/**
 * Production smoke — CAN A LEARNER ACTUALLY LEARN? (2026-09-22)
 *
 * THE GAP THIS EXISTS FOR, measured rather than assumed. `smoke.spec.js` runs
 * twice daily against production across four browsers, and all 16 of its tests
 * are INFRASTRUCTURE: HTTP 200, the title, not-a-Cloudflare-block, the root is
 * not blank, the entry module is JavaScript, the service worker and icons are
 * served. It never signs in, never opens a lesson, never plays audio, never
 * asks for feedback.
 *
 * So the only thing watching production checks that the site SERVES, not that
 * it TEACHES. Every defect the owner has reported in the field would pass all
 * sixteen, twice a day, indefinitely: the B2 listening section that played
 * nothing, `monthly_budget_exhausted` rendered raw on screen, the badge
 * claiming a level nothing had measured, "Try again when you have internet
 * access" for a server-side quota cap. That is not a coincidence — it is the
 * mechanism. With no automated check that a learner can learn, the OWNER is
 * the integration test, which is why finished work kept coming back.
 *
 * WHAT THIS ADDS, and deliberately not more: the shallowest end-to-end slice
 * that would actually have failed. A guest enters, the daily plan contains real
 * activities, the first one opens and renders, and nothing throws on the way.
 *
 * THE GUEST PATH IS USED BECAUSE IT NEEDS NO CREDENTIALS. `full-user-audit`
 * and `user-experience-audit` already cover more and are `test.skip`ped in CI
 * for exactly that reason ("Requires real Firebase credentials") — correctly,
 * since they target the live site with a real account. A guest needs none, so
 * this can run unattended forever.
 *
 * TWO COSTS, STATED RATHER THAN DISCOVERED LATER:
 *
 *  1. AI BUDGET. The app's whole AI spend is capped at $10/month and a cached
 *     endpoint is only free on a hit. So this suite must never open an activity
 *     that GENERATES: no micro-lesson, no ai-chat, no conversation, no writing
 *     evaluation. It opens the curriculum lesson, whose body is a cached
 *     content fetch, and asserts on the session card otherwise. `assertNoAiSpend`
 *     below fails the test if a generating endpoint was called at all, so a
 *     future edit cannot quietly start billing the budget twice a day.
 *  2. ANONYMOUS USERS. "Continue as Guest" signs in anonymously for real, so
 *     every run creates a Firebase anonymous user. That is why the learner flow
 *     is pinned to ONE browser (chromium) rather than the four the config runs:
 *     2 users/day instead of 8. The infrastructure tests still run everywhere.
 */
import { test, expect } from '@playwright/test';

/** Endpoints that SPEND: a call here costs real money from the $10/month cap. */
const GENERATING = [
  '/api/ai-chat',
  '/api/conversation',
  '/api/conversational-tutor',
  '/api/maja',
  '/api/micro-lesson',
  '/api/correct',
  '/api/speaking-coach',
  '/api/assess-speaking',
  '/api/explain-error',
  '/api/listening',
  '/api/grammar-diagnosis',
  '/api/photo-vocab',
  '/api/flux-generate',
];

function watchSpend(page) {
  const spent = [];
  page.on('request', (r) => {
    const u = r.url();
    const hit = GENERATING.find((e) => u.includes(e));
    if (hit) spent.push(hit);
  });
  return spent;
}

function watchErrors(page) {
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e).slice(0, 200)));
  return errs;
}

async function enterAsGuest(page) {
  await page.goto('/');
  const guest = page.getByRole('button', { name: /Continue as Guest/i });
  await expect(guest, 'the login screen must offer a guest entry').toBeVisible({
    timeout: 30_000,
  });
  await guest.click();
  // The app shell is up once a tab bar exists. Generous: cold cache + SW install.
  await expect(page.getByRole('button', { name: /^Today$/i }).first()).toBeVisible({
    timeout: 45_000,
  });
}

test.describe('Production smoke — a learner can actually start learning', () => {
  // One browser only: each run creates a real anonymous Firebase user.
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'Learner flow runs on one browser only — each run creates an anonymous user',
  );

  test('a guest can enter the app', async ({ page }) => {
    const errs = watchErrors(page);
    await enterAsGuest(page);
    expect(errs, `uncaught JS errors entering as guest:\n${errs.join('\n')}`).toEqual([]);
  });

  test("today's plan contains real activities, and no error boundary", async ({ page }) => {
    await enterAsGuest(page);

    // The session card is the product's core promise: something to do today.
    //
    // WAIT FOR IT RATHER THAN READING ONCE. `enterAsGuest` returns as soon as
    // the tab bar exists — that is the app SHELL, and Home's content is a lazy
    // chunk that arrives after it. A one-shot `innerText()` therefore raced the
    // render and failed on a slow runner with a body holding only the header,
    // the nav and the sidebar: no session card, no error boundary, no uncaught
    // error (the guest-entry test above asserts that separately and passed).
    //
    // This does NOT weaken the check. A locator assertion still fails if the
    // card never appears; it only stops the test asking before Home has had a
    // chance to answer. The timeout is the same generous budget the shell gets,
    // because this runs on a cold cache right after a service-worker install.
    await expect(
      page.getByText(/TODAY'S SESSION|Dnevna Vježba/i).first(),
      'Home shows no daily session',
    ).toBeVisible({ timeout: 45_000 });

    const body = await page.locator('body').innerText();
    // "~20 min · N activities" — N must be a real count, not zero.
    const m = body.match(/(\d+)\s+activit/i);
    expect(m, 'the session card states no activity count').toBeTruthy();
    expect(Number(m[1]), 'the daily plan is empty').toBeGreaterThan(0);

    expect(
      await page.locator('[data-testid="screen-error-boundary"]').count(),
      'a screen crashed on Home',
    ).toBe(0);
  });

  test('the first activity opens and renders without crashing', async ({ page }) => {
    const errs = watchErrors(page);
    await enterAsGuest(page);

    // NOT a test.skip on absence. The first draft did that, and on a re-run
    // where the session had already been started the control reads something
    // else, so the test SILENTLY SKIPPED — a guard that disappears exactly when
    // state differs is decorative, which is the failure this whole suite exists
    // to stop. Home must always offer a way in; if it does not, that IS the
    // defect, so this fails rather than skips.
    const start = page
      .getByRole('button', { name: /Begin Session|Continue Session|Resume|Start/i })
      .first();
    await expect(start, 'Home offers no way to start or resume the daily session').toBeVisible({
      timeout: 20_000,
    });
    await start.click();
    await page.waitForTimeout(6000);

    expect(
      await page.locator('[data-testid="screen-error-boundary"]').count(),
      'the first activity rendered an error boundary',
    ).toBe(0);
    // Something substantive rendered, not a blank shell.
    const text = await page.locator('body').innerText();
    expect(text.trim().length, 'the first activity rendered almost nothing').toBeGreaterThan(80);
    expect(errs, `uncaught JS errors opening the first activity:\n${errs.join('\n')}`).toEqual([]);
  });

  test('the smoke run itself never spends the AI budget', async ({ page }) => {
    // A guard on this suite, not on the app: a twice-daily run that calls a
    // generating endpoint would bill the $10/month cap 60 times a month.
    const spent = watchSpend(page);
    await enterAsGuest(page);
    await page.waitForTimeout(4000);
    expect(
      spent,
      `smoke run called generating endpoints: ${[...new Set(spent)].join(', ')}`,
    ).toEqual([]);
  });
});
