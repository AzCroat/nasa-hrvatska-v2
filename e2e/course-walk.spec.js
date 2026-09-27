/**
 * course-walk.spec.js — the course advancing, walked in a real browser (2026-09-27).
 *
 * `course-map.spec.js` covers the map and the unit test. This covers what happens
 * AFTER the test: the two production tasks, the gate opening the next unit, a refused
 * evaluator not walling the course, and the A1 → A2 boundary reaching Home.
 *
 * SEED ONCE. An init script re-runs on every navigation, so a seed that writes
 * `nh_course_units` unconditionally overwrites whatever the app recorded in between —
 * the first draft of this walk "found" a production task that never recorded and a
 * refusal that never opened the gate, and both were the seed. The sessionStorage
 * flag is what makes the later reads mean something.
 */
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { CURRICULUM } from '../functions/api/content/_data/curriculum.js';

const byLevel = (lv) =>
  CURRICULUM.filter((l) => l.level === lv)
    .sort((a, b) => a.order - b.order)
    .map((l) => l.id);
const A1 = byLevel('A1');
const UNIT1 = A1.slice(0, 5);
const DAY = '2026-09-01';

const WORDS =
  'Zovem se Ana i živim u Zagrebu. Imam brata i sestru. Moj brat je student, a moja sestra je učiteljica. ' +
  'Volim čitati knjige i piti kavu s prijateljima. Ovo je moja kuća i moj grad.';

async function setup(page, done, units, reviews) {
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await seedAuth(page);
  await blockFirebase(page);
  await mockTTS(page);
  await mockContent(page);
  await page.addInitScript(
    ([ids, u, r]) => {
      if (window.top !== window) return;
      if (sessionStorage.getItem('cw_seeded')) return;
      sessionStorage.setItem('cw_seeded', '1');
      const d = {};
      for (const id of ids) d[id] = '2026-09-01';
      localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done: d }));
      localStorage.setItem(
        'nh_course_units',
        JSON.stringify(r ? { units: u, reviews: r } : { units: u }),
      );
    },
    [done, units, reviews],
  );
  return errs;
}

const unitState = (page, id) =>
  page.getByTestId(`course-unit-${id}`).getAttribute('data-unit-state');

async function openMap(page) {
  await page.goto('/coursemap');
  await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
}

test('writing and speaking the Unit 1 tasks opens Unit 2, and Home teaches it', async ({
  page,
}) => {
  test.setTimeout(180_000);
  const errs = await setup(page, UNIT1, {
    'A1-1': { passedAt: DAY, bestCorrect: 14, bestTotal: 15 },
  });
  await page.route('**/api/correct', (r) =>
    r.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ score: 78, changes: [] }),
    }),
  );
  await page.route('**/api/speaking-coach', (r) =>
    r.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        scores: { fluency: 0.8, grammar: 0.8, vocabulary: 0.8, pronunciation: 0.8 },
        overall: 0.8,
        errors: [],
        advice: 'Dobro.',
        encouragement: 'Bravo!',
      }),
    }),
  );
  await openMap(page);
  expect(await unitState(page, 'A1-2')).toBe('locked');

  for (const k of ['write', 'speak']) {
    await page.getByTestId(`course-unit-${k}-A1-1`).click();
    await page.getByTestId('unit-production-input').fill(WORDS);
    await page.getByTestId('unit-production-submit').click();
    await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 15_000 });
    await page.getByTestId('unit-production-done').click();
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  }

  // Bar met, retention pending: cleared, not yet mastered — and the next unit opens.
  expect(await unitState(page, 'A1-1')).toBe('cleared');
  expect(await unitState(page, 'A1-2')).toBe('current');
  expect(await unitState(page, 'A1-3')).toBe('locked');

  await page.goto('/');
  const card = page.getByTestId('session-card');
  await expect(card).toBeVisible({ timeout: 30_000 });
  // Unit 2's first lesson leads the day; no Unit 1 task is offered again.
  await expect(card).toContainText('Unit 2 of 36', { timeout: 20_000 });
  await expect(card).not.toContainText('Unit 1: write');
  expect(errs).toEqual([]);
});

test('a refused evaluator names the cause and does not wall the course', async ({ page }) => {
  test.setTimeout(120_000);
  const errs = await setup(page, UNIT1, {
    'A1-1': { passedAt: DAY, bestCorrect: 14, bestTotal: 15 },
  });
  await page.route('**/api/correct', (r) =>
    r.fulfill({
      status: 429,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'monthly_budget_exhausted' }),
    }),
  );
  await openMap(page);
  await page.getByTestId('course-unit-write-A1-1').click();
  await page.getByTestId('unit-production-input').fill(WORDS);
  await page.getByTestId('unit-production-submit').click();
  const failed = page.getByTestId('unit-production-failed');
  await expect(failed).toBeVisible({ timeout: 15_000 });
  await expect(failed).toContainText(/allowance/i);
  await expect(failed).toContainText(/course carries on/i);

  // The sentence above is a promise; the map is where it is kept.
  await openMap(page);
  expect(await unitState(page, 'A1-2')).toBe('current');
  expect(errs).toEqual([]);
});

function allA1Mastered() {
  const units = {};
  for (let i = 1; i <= 6; i++) {
    units[`A1-${i}`] = {
      passedAt: DAY,
      production: { wroteAt: DAY, writeScore: 80, spokeAt: DAY, speakScore: 0.8 },
      recheck: { stage: 2, dueAt: '2026-12-30', heldAt: DAY },
    };
  }
  return units;
}

// Crossing a level serves the mixed review of the level just finished FIRST —
// the course has opened A2, but the review is what Home leads with, once.
test('finishing A1 opens A2 Unit 1 on the map, and Home leads with the A1 review', async ({
  page,
}) => {
  test.setTimeout(120_000);
  const errs = await setup(page, A1, allA1Mastered());
  await openMap(page);
  expect(await unitState(page, 'A1-6')).toBe('mastered');
  expect(await unitState(page, 'A2-1')).toBe('current');
  await expect(page.getByTestId('course-units-mastered')).toContainText('6 of 36');
  await expect(page.getByTestId('course-level-review-A1')).toHaveAttribute('data-done', '0');

  await page.goto('/');
  const card = page.getByTestId('session-card');
  await expect(card).toBeVisible({ timeout: 30_000 });
  await expect(card).toContainText('A1 review', { timeout: 20_000 });
  await expect(card).not.toContainText('Unit 7 of 36');
  expect(errs).toEqual([]);
});

test('once the A1 review is done, Home teaches A2 Unit 1', async ({ page }) => {
  test.setTimeout(120_000);
  const errs = await setup(page, A1, allA1Mastered(), {
    A1: { doneAt: DAY, firstTryCorrect: 16, total: 18 },
  });
  await openMap(page);
  await expect(page.getByTestId('course-level-review-A1')).toHaveAttribute('data-done', '1');

  await page.goto('/');
  const card = page.getByTestId('session-card');
  await expect(card).toBeVisible({ timeout: 30_000 });
  await expect(card).toContainText('Unit 7 of 36', { timeout: 20_000 });
  await expect(card).not.toContainText('A1 review');
  expect(errs).toEqual([]);
});
