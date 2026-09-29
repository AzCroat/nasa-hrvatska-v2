// e2e/keep-learning.spec.js
//
// KEEP LEARNING (owner decision, 2026-09-29 — sweep 216; replaced the Stretch).
//
// Owner: "I don't like stretch design, its not guiding the learner to keep
// learning", then: "not try to teach new concepts but review those that the learner
// has not proven mastery." After the core session Home shows a continuous review
// flow — blocks of about four, each appended when the last finishes — and there is
// no "Day Complete" card at all.
//
// Driven in a real browser against the REAL hook: a plan for today whose core is
// complete is seeded in localStorage; on load the hook appends block 1 and the card
// becomes its hero. Seeding the plan (rather than finishing five activities by hand)
// is what makes this deterministic; the hook tests drive the completion path itself.
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
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

test.describe('Keep Learning', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await forceCefr(page, 'A1');
  });

  test('a finished core session leads straight into a review block — never a finished day', async ({
    page,
  }) => {
    await seedPlan(page);
    await page.goto('/');
    const hero = page.getByTestId('keep-learning-hero');
    await expect(hero).toBeVisible({ timeout: 30_000 });
    await expect(hero).toHaveAttribute('data-keep', '1');
    await expect(hero).toContainText('KEEP LEARNING');
    await expect(hero.getByTestId('keep-core-chip')).toContainText("Today's session done");
    const cta = page.getByTestId('session-begin-cta');
    await expect(cta).toContainText('Continue');
    await expect(cta).toBeEnabled();
    // Every item says why it is here.
    await expect(page.getByTestId('next-activity-reason')).not.toBeEmpty();
    // No terminal state, and no Stretch copy.
    await expect(page.getByTestId('session-complete-title')).toHaveCount(0);
    await expect(page.getByText(/Day Complete/)).toHaveCount(0);
    await expect(page.getByText(/Stretch/)).toHaveCount(0);
    // The plan persisted with the block, so a reload meets the same hero.
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('nh_daily_session')));
    const block = stored.activities.filter((a) => a.keep === 1);
    expect(block.length).toBeGreaterThan(0);
    // Never a lesson after the session (owner: review, not new concepts).
    expect(block.some((a) => a.screen === 'animlesson' || a.screen === 'unittest')).toBe(false);
  });

  test('a finished block is followed by the next one, and a plan the Stretch build called "Day Complete" is not', async ({
    page,
  }) => {
    await seedPlan(page, {
      stretchTarget: 1,
      activities: [
        ...CORE,
        { id: 's_dict', label: 'Dictation', screen: 'dictation', category: 'writing', stretch: 1 },
      ],
      completedIds: [...CORE.map((a) => a.id), 's_dict'],
    });
    await page.goto('/');
    const hero = page.getByTestId('keep-learning-hero');
    await expect(hero).toBeVisible({ timeout: 30_000 });
    await expect(hero).toHaveAttribute('data-keep', '2');
    await expect(page.getByTestId('session-complete-title')).toHaveCount(0);
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('nh_daily_session')));
    expect(stored.stretchTarget).toBeUndefined();
    expect(stored.activities.find((a) => a.id === 's_dict').keep).toBe(1);
  });
});
