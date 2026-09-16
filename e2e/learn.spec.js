import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

test.describe('Learn tab', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    // BrowseContentModal consumes useGrammar()+useContent(); without the content
    // mocks /api/content/* 404s under `vite preview` and the modal stays in
    // LoadingState (its header never renders).
    await mockContent(page);
    // Navigate directly to /learn to avoid post-auth navigate('/') race on tab click.
    await page.goto('/learn');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
    await expect(page.getByText('Your Path')).toBeVisible({ timeout: 20_000 });
  });

  test.describe('Calm surface', () => {
    test('renders Your Path heading', async ({ page }) => {
      await expect(page.getByText('Your Path')).toBeVisible();
    });

    test('shows the Profesor Kovac tutor hero', async ({ page }) => {
      await expect(page.getByTestId('portrait-kovac')).toBeVisible();
    });

    test('shows Grammar Ref button in hero', async ({ page }) => {
      await expect(page.getByText('📖 Ref')).toBeVisible();
    });

    test('shows the Browse all link', async ({ page }) => {
      await expect(page.getByRole('button', { name: /Browse all lessons/ })).toBeVisible();
    });
  });

  test.describe('Browse catalog (relocated entry points)', () => {
    async function openBrowse(page) {
      await page.getByRole('button', { name: /Browse all lessons/ }).click();
      await expect(page.getByText('Browse All Content')).toBeVisible({ timeout: 10_000 });
    }

    test('Learning Paths & Tracks holds the relocated tracks', async ({ page }) => {
      await openBrowse(page);
      // 'Learning Paths & Tracks' is open by default — content shows without toggling.
      await expect(page.getByText('AI Micro-Lesson')).toBeVisible({ timeout: 8_000 });
      await expect(page.getByText('Grammar Track A1→C2')).toBeVisible();
    });

    test('Pronunciation Lab holds the relocated pronunciation tools', async ({ page }) => {
      await openBrowse(page);
      // 'Pronunciation Lab' is open by default — content shows without toggling.
      await expect(page.getByText('Pronunciation Course')).toBeVisible({ timeout: 8_000 });
      await expect(page.getByText('Pitch Accent')).toBeVisible();
    });

    test('launching a relocated track navigates without error', async ({ page }) => {
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await openBrowse(page);
      // Section open by default — the track tile is present without toggling.
      await page.getByText('AI Micro-Lesson').waitFor({ state: 'visible', timeout: 8_000 });
      await page.getByText('AI Micro-Lesson').click();
      await page.waitForTimeout(500);
      const unexpected = errors.filter(
        e => !e.includes('firebase') && !e.includes('firestore') && !e.includes('fetch'),
      );
      expect(unexpected).toHaveLength(0);
    });
  });

  // ── LEARNING CENTER ────────────────────────────────────────────────────
  // The lookup door. Everything else on this tab answers "what next"; this is
  // the only surface that answers "teach me X, now". Navigation is by testid
  // rather than by copy, per the project's Playwright conventions.
  test.describe('Learning Center', () => {
    async function openCenter(page) {
      await page.getByTestId('open-learning-center').click();
      await expect(page.getByTestId('learning-center')).toBeVisible({ timeout: 15_000 });
    }

    test('the Learn tab offers a way to look something up', async ({ page }) => {
      await expect(page.getByTestId('open-learning-center')).toBeVisible();
    });

    test('opens on the whole syllabus, every level browsable', async ({ page }) => {
      await openCenter(page);
      await expect(page.getByTestId('lc-syllabus')).toBeVisible();
      // Every level, including ones above the seeded learner: lookup is ungated.
      for (const lvl of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
        await expect(page.getByTestId(`lc-level-${lvl}`)).toBeVisible();
      }
    });

    test('searching "padeži" surfaces case material', async ({ page }) => {
      await openCenter(page);
      await page.getByTestId('lc-search').fill('padeži');
      await expect(page.getByTestId('lc-results')).toBeVisible({ timeout: 10_000 });
      await expect(page.getByTestId('lc-row').first()).toBeVisible();
      // The owner's own example, and the reason this screen exists: the query
      // must reach LESSONS, not only the one drill screen it used to find.
      await expect(page.locator('[data-testid="lc-row"][data-kind="lesson"]').first())
        .toBeVisible({ timeout: 10_000 });
    });

    test('the diacritic-free spelling searches the same', async ({ page }) => {
      await openCenter(page);
      await page.getByTestId('lc-search').fill('padezi');
      await expect(page.getByTestId('lc-row').first()).toBeVisible({ timeout: 10_000 });
    });

    test('opening a lesson from search navigates without error', async ({ page }) => {
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await openCenter(page);
      await page.getByTestId('lc-search').fill('genitive');
      const lessonRow = page.locator('[data-testid="lc-row"][data-kind="lesson"]').first();
      await expect(lessonRow).toBeVisible({ timeout: 10_000 });
      await lessonRow.click();
      // The Center must be gone — the lesson took over the screen.
      await expect(page.getByTestId('learning-center')).toBeHidden({ timeout: 15_000 });
      const unexpected = errors.filter(
        (e) => !e.includes('firebase') && !e.includes('firestore') && !e.includes('fetch'),
      );
      expect(unexpected).toHaveLength(0);
    });
  });

  test.describe('Back navigation', () => {
    test('clicking Grammar Ref button navigates to grammar reference', async ({ page }) => {
      await page.getByText('📖 Ref').waitFor({ state: 'visible', timeout: 8_000 });
      await page.getByText('📖 Ref').click();
      await expect(page.getByText(/Grammar/i).first()).toBeVisible({ timeout: 10_000 });
    });
  });
});
