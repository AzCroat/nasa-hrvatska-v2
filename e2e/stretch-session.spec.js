// e2e/stretch-session.spec.js
//
// THE STRETCH (Daily Session redesign, increment 6 — owner decision 6, 2026-09-28).
//
// Owner: a finished daily session read as a finished day. Now the bar is the
// app's — the core session plus every Stretch the evidence justifies (floor 1,
// cap 3) — and the Home card is the next Stretch's hero until it is met.
//
// Driven in a real browser against the REAL hook: a plan for today whose core is
// complete is seeded in localStorage; on load the hook reads the evidence, appends
// Stretch 1 and the card becomes its hero. A second seed meets the bar and reads
// "Day Complete!". Seeding the plan (rather than finishing five activities by
// hand) is what makes this deterministic; the hook tests drive the completion
// path itself.
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent, localYMD } from './fixtures/seed-auth.js';
import { forceCefr } from './fixtures/forceCefr.js';

const CORE = [
  { id: 'c_alphabet', label: 'Alphabet', screen: 'alphabet', category: 'general' },
  { id: 'c_gen', label: 'Genitive', screen: 'genitive', category: 'genitive' },
  { id: 'c_city', label: 'City of the Day', screen: 'cityofday', category: 'culture' },
];

/** A plan for TODAY at A1 (the level forceCefr('A1') makes the hook build at), core done. */
function seedPlan(page, extra = {}) {
  return page.addInitScript(
    ({ core, extra }) => {
      if (window.top !== window) return;
      const today = new Date();
      const ymd = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      localStorage.setItem(
        'nh_daily_session',
        JSON.stringify({
          date: ymd,
          cefrLevel: 'A1',
          spineSeen: true,
          activities: core,
          completedIds: core.map((a) => a.id),
          estimatedMinutes: core.length * 5,
          ...extra,
        }),
      );
    },
    { core: CORE, extra },
  );
}

test.describe('the Stretch', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await forceCefr(page, 'A1');
  });

  test('a finished core session is not a finished day: Home leads with Stretch 1', async ({
    page,
  }) => {
    await seedPlan(page);
    await page.goto('/');
    const hero = page.getByTestId('stretch-hero');
    await expect(hero).toBeVisible({ timeout: 30_000 });
    await expect(hero).toHaveAttribute('data-stretch', '1');
    await expect(hero).toContainText('STRETCH 1 OF');
    await expect(hero.getByTestId('stretch-core-chip')).toContainText('Core session');
    const cta = page.getByTestId('session-begin-cta');
    await expect(cta).toContainText(/Begin Stretch 1 of \d/);
    await expect(cta).toBeEnabled();
    // The bar is the app's, and the card says so (decision 6a).
    await expect(page.getByTestId('stretch-reason')).toContainText(
      /every stretch your results call for/,
    );
    // The completion card must NOT be showing.
    await expect(page.getByTestId('session-complete-title')).toHaveCount(0);
    // The plan persisted with the Stretch, so a reload meets the same hero.
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('nh_daily_session')));
    expect(stored.activities.some((a) => a.stretch === 1)).toBe(true);
    expect(stored.stretchTarget).toBeGreaterThanOrEqual(1);
    // Every screen appears once — the completion handshake matches by screen.
    const screens = stored.activities.map((a) => a.screen);
    expect(new Set(screens).size).toBe(screens.length);
    // Never a lesson from the course in a Stretch (the gate is untouched).
    expect(stored.activities.filter((a) => a.stretch).some((a) => a.screen === 'animlesson')).toBe(
      false,
    );
  });

  test('once every owed Stretch is done the day is complete', async ({ page }) => {
    await seedPlan(page, {
      stretchTarget: 1,
      activities: [
        ...CORE,
        { id: 's_dict', label: 'Dictation', screen: 'dictation', category: 'writing', stretch: 1 },
      ],
      completedIds: [...CORE.map((a) => a.id), 's_dict'],
    });
    await page.goto('/');
    const title = page.getByTestId('session-complete-title');
    await expect(title).toBeVisible({ timeout: 30_000 });
    await expect(title).toHaveText('Day Complete!');
    await expect(page.getByTestId('session-card')).toContainText(/Core session \+ 1 stretch/);
    await expect(page.getByTestId('stretch-hero')).toHaveCount(0);
  });
});
