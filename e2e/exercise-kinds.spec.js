import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { TEXT_FIXTURE, PRACTICE_FIXTURE } from './fixtures/exercise-kinds-fixture.js';

/**
 * The exercise player in a real browser: a lesson carrying a text step and one of
 * every new exercise kind, opened from the Learn tab's course card.
 *
 * Lesson `alphabet` is patched into the lessons payload AFTER mockContent (Playwright
 * uses the most recently added matching route), so nothing about the shipped lessons
 * changes. The text slide goes right after the intro, as withPractice places it, and
 * the practice slide's items are replaced by the fixture.
 */
test.describe('Exercise player', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    const { LESSONS_FIXTURE } = await import('./fixtures/content-fixture.js');
    const patched = LESSONS_FIXTURE.map((l) => {
      if (l.id !== 'alphabet') return l;
      // The lesson may already carry its own text step: the fixture replaces it.
      const slides = l.slides
        .filter((s) => s.type !== 'text')
        .map((s) => (s.type === 'practice' ? { ...s, items: PRACTICE_FIXTURE } : s));
      const introAt = slides.findIndex((s) => s.type === 'intro');
      slides.splice(introAt + 1, 0, { type: 'text', ...TEXT_FIXTURE });
      return { ...l, slides };
    });
    await page.route('**/api/content/lessons', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: patched, etag: 'mock-lessons-exercise-kinds' }),
        headers: { ETag: '"mock-lessons-exercise-kinds"' },
      }),
    );
    await page.goto('/learn');
    await expect(page.getByTestId('learn-lesson-start')).toBeVisible({ timeout: 20_000 });
  });

  /** Solve one exercise, correctly, on the first try, from its fixture data. */
  async function solve(page, item) {
    const t = (id) => page.getByTestId(id);
    switch (item.type) {
      case 'tf':
        await t(`ex-tf-${item.answer}`).click();
        break;
      case 'match':
        for (let i = 0; i < item.pairs.length; i++) {
          await t(`ex-match-left-${i}`).click();
          await page.locator(`[data-testid^="ex-match-right-"][data-pair="${i}"]`).click();
        }
        break;
      case 'sort':
        for (let i = 0; i < item.items.length; i++) {
          await t(`ex-sort-item-${i}`).click();
          await t(`ex-sort-group-${item.items[i].group}`).click();
        }
        break;
      case 'order':
        for (const w of item.words) {
          await page
            .locator('[data-testid^="ex-order-tile-"]:not([disabled])')
            .filter({ hasText: new RegExp(`^${w.replace('.', '\\.')}$`) })
            .first()
            .click();
        }
        await t('ex-check').click();
        break;
      case 'transform':
        await t('ex-transform-input').fill(item.answer);
        await t('ex-check').click();
        break;
      case 'fix':
        await t(`ex-fix-word-${item.wrong}`).click();
        break;
      case 'listen':
        // Audio-first: locked until the (silent) recording has played to the end.
        await expect(t('ex-listen-option-0')).toBeDisabled();
        await t('ex-listen-play').click();
        await expect(t('ex-listen-option-0')).toBeEnabled({ timeout: 15_000 });
        await t(`ex-listen-option-${item.correct}`).click();
        break;
      case 'dictate':
        await expect(t('ex-dictate-input')).toBeDisabled();
        await t('ex-dictate-play').click();
        await expect(t('ex-dictate-input')).toBeEnabled({ timeout: 15_000 });
        await t('ex-dictate-input').fill(item.answer);
        await t('ex-check').click();
        break;
      default:
        // Multiple choice: pick the right option by its text.
        await page
          .getByTestId('practice-option')
          .filter({ hasText: item.options[item.correct] })
          .first()
          .click();
    }
  }

  /** Answer every item of the open slide; leaves Next enabled. */
  async function finishSlide(page, items) {
    const next = page.getByTestId('lesson-nav-next');
    for (let i = 0; i < items.length; i++) {
      await solve(page, items[i]);
      const explained = page
        .getByTestId('ex-explanation')
        .or(page.getByTestId('practice-explanation'));
      await expect(explained.first()).toBeVisible();
      if (i < items.length - 1) {
        await page
          .getByTestId('practice-next-item')
          .or(page.getByTestId('ex-next-item'))
          .first()
          .click();
      }
    }
    await expect(next).toBeEnabled();
  }

  test('the text step and every new kind work, and Next waits for them', async ({ page }) => {
    await page.getByTestId('learn-lesson-start').click();
    const next = page.getByTestId('lesson-nav-next');
    await expect(next).toBeVisible({ timeout: 20_000 });

    // Intro -> the text step, right after it.
    await next.click();
    await expect(page.getByTestId('lesson-text')).toBeVisible();
    await expect(page.getByTestId('lesson-text-line-0')).toContainText('Bog! Ja sam Ana.');
    await expect(page.getByTestId('lesson-text-en-0')).toHaveCount(0);
    await page.getByTestId('lesson-text-english').click();
    await expect(page.getByTestId('lesson-text-en-0')).toHaveText('Hi! I am Ana.');
    await expect(next).toBeDisabled();
    await finishSlide(page, TEXT_FIXTURE.questions);
    await next.click();

    // Walk forward to the guided practice slide.
    for (let step = 0; step < 80; step++) {
      if (await page.getByTestId('lesson-practice').isVisible()) break;
      const reveal = page.getByTestId('worked-next-step');
      if (await reveal.isVisible()) {
        await reveal.click();
        continue;
      }
      const checkAnswer = page.getByRole('button', { name: 'Check Answer' });
      if (await checkAnswer.isVisible()) {
        await page
          .getByRole('button', { name: /^Option 1:/ })
          .first()
          .click();
        await checkAnswer.click();
      }
      if (await next.isEnabled()) await next.click();
    }
    await expect(page.getByTestId('lesson-practice')).toBeVisible();
    await expect(next).toBeDisabled();

    await finishSlide(page, PRACTICE_FIXTURE);
  });
});
