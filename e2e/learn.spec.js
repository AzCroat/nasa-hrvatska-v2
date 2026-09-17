import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

test.describe('Learn tab', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    // The Learning Center consumes useContent(); without the content mocks
    // /api/content/* 404s under `vite preview` and the index never fills.
    await mockContent(page);
    // Navigate directly to /learn to avoid post-auth navigate('/') race on tab click.
    await page.goto('/learn');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
    // The readiness anchor used to be 'Your Path', the header above the Learn
    // path widget. That widget is retired; this testid is the surface's own
    // stable handle and does not depend on copy.
    await expect(page.getByTestId('open-learning-center')).toBeVisible({ timeout: 20_000 });
  });

  test.describe('Calm surface', () => {
    test('offers the full path, which the retired widget used to own', async ({ page }) => {
      await expect(page.getByTestId('open-learn-path')).toBeVisible();
    });

    test('shows the Profesor Kovac tutor hero', async ({ page }) => {
      await expect(page.getByTestId('portrait-kovac')).toBeVisible();
    });

    test('shows Grammar Ref button in hero', async ({ page }) => {
      await expect(page.getByText('📖 Ref')).toBeVisible();
    });

  });

  // ── THE SCREENS THE RETIRED MODAL WAS THE ONLY DOOR TO ───────────────────
  // These three asserted BrowseContentModal's sections. The modal is gone; the
  // screens it alone reached were rehomed into the Learning Center's index as
  // `lib/unpooledScreens`. The COVERAGE is what mattered — that those entry
  // points are still reachable — so they were repointed at the new door rather
  // than deleted with the old one.
  test.describe('Relocated entry points (Learning Center)', () => {
    async function find(page, query) {
      await page.getByTestId('open-learning-center').click();
      await expect(page.getByTestId('learning-center')).toBeVisible({ timeout: 15_000 });
      await page.getByTestId('lc-search').fill(query);
      await expect(page.getByTestId('lc-row').first()).toBeVisible({ timeout: 10_000 });
    }

    test('the grammar tracks are reachable', async ({ page }) => {
      await find(page, 'grammar track');
      await expect(page.getByText('Grammar Track A1→C2')).toBeVisible({ timeout: 8_000 });
    });

    test('the pronunciation tools are reachable', async ({ page }) => {
      await find(page, 'pitch accent');
      // `exact` matters: the pooled C1 drill is 'Pitch Accents' and the
      // rehomed unpooled screen is 'Pitch Accent'. A substring match resolves
      // to both and, worse, would pass on the pooled row alone — which is not
      // the one this test exists to check.
      await expect(page.getByText('Pitch Accent', { exact: true })).toBeVisible({ timeout: 8_000 });
    });

    test('launching a relocated screen navigates without error', async ({ page }) => {
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await find(page, 'grammar track');
      await page.getByText('Grammar Track A1→C2').click();
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
      // The spine is a cached fetch that arrives AFTER first paint — the Center
      // says "Lessons are still loading, search works already" until it does.
      // The first version of this asserted on the default 5s and passed locally
      // while failing on a loaded CI runner: a race in the test, not the app.
      await expect(page.getByTestId('lc-level-A1')).toBeVisible({ timeout: 20_000 });
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

    test('the reference desk answers from the device, with no network', async ({ page }) => {
      await openCenter(page);
      await page.getByTestId('lc-mode-reference').click();
      await expect(page.getByTestId('reference-desk')).toBeVisible();

      // The live declension table: type a noun, get all seven cases. Nothing
      // here is fetched or generated — it is computed from the rules on device.
      await page.getByTestId('rd-panel-declension-table').click();
      await page.getByTestId('rd-declension-input').fill('knjiga');
      await expect(page.getByTestId('rd-declension-table')).toBeVisible();
      await expect(page.getByTestId('rd-case-row')).toHaveCount(7);
      // Sibilarization in the dative/locative singular — the reason this is
      // worth generating rather than hand-writing.
      await expect(page.locator('[data-testid="rd-case-row"][data-case="D"]')).toContainText(
        'knjizi',
      );
    });

    test('a consonant-final noun asks for its gender instead of guessing', async ({ page }) => {
      await openCenter(page);
      await page.getByTestId('lc-mode-reference').click();
      await page.getByTestId('rd-panel-declension-table').click();
      await page.getByTestId('rd-declension-input').fill('stvar');
      // Left to guess, the engine returns `stvara` for a real feminine noun.
      await expect(page.getByTestId('rd-gender-choice')).toBeVisible();
      await page.getByTestId('rd-gender-f').click();
      await expect(page.locator('[data-testid="rd-case-row"][data-case="G"]')).toContainText(
        'stvari',
      );
    });

    test('searching a Croatian case name opens its concept card in place', async ({ page }) => {
      await openCenter(page);
      await page.getByTestId('lc-search').fill('genitiv');
      const concept = page.locator('[data-testid="lc-row"][data-kind="concept"]').first();
      await expect(concept).toBeVisible({ timeout: 10_000 });
      await concept.click();
      // The answer arrives on this screen — a reference panel is not a navigation.
      await expect(page.getByTestId('learning-center')).toBeVisible();
      await expect(page.getByTestId('rd-open-genitive')).toBeVisible();
    });

    test('opening Flashcards reaches the exercise, not the "start it properly" guard', async ({
      page,
    }) => {
      // The phase-2 defect: the Center opened every row with a bare setScr, and
      // `flashcards` renders ScreenGuard unless a launcher seeded fcInitPool. So
      // this row showed "Session refreshed" — and ScreenGuard clears
      // nh_session_started on mount, stranding any daily session in progress.
      await openCenter(page);
      await page.getByTestId('lc-search').fill('flashcards');
      const row = page.locator('[data-testid="lc-row"][data-kind="drill"]').first();
      await expect(row).toBeVisible({ timeout: 10_000 });
      // The vocabulary arrives from /api/content/core after first paint, so an
      // immediate tap is refused with "still loading" — correctly, and that is
      // its own unit test. Retry the tap until the deck is there rather than
      // sleeping: this is what a learner does, and it keeps the assertion about
      // the LAUNCH rather than about timing.
      await expect(async () => {
        await row.click();
        await expect(page.getByTestId('learning-center')).toBeHidden({ timeout: 3_000 });
      }).toPass({ timeout: 30_000 });
      await expect(page.getByText('Session refreshed')).toHaveCount(0);
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
