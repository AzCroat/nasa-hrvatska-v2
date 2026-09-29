// e2e/guided-speaking-assessed.spec.js
//
// Guided Speaking's REHEARSE stage scores the REAL recording against the phrase
// (lib/spokenCheck, components/practice/AssessedMic). The unit tests fake the recorder;
// this runs the real MediaRecorder on Chromium's fake microphone, so the capture, the
// base64 encoding and the request are the production ones. Azure is mocked: the point
// is what the app sends and what it shows for the answer that comes back.

import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockContent, mockTTS } from './fixtures/seed-auth.js';

test.use({
  launchOptions: {
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  },
});

test('REHEARSE sends the real recording with the phrase as reference, and shows each word', async ({
  page,
  context,
  browserName,
}) => {
  test.skip(browserName !== 'chromium', 'the fake-microphone flags are Chromium-only');
  test.setTimeout(90_000);
  await context.grantPermissions(['microphone']);
  await blockFirebase(page);
  await seedAuth(page, { xp: 200 });
  await mockContent(page);
  await mockTTS(page);

  let sent = null;
  await page.route('**/api/pronunciation-assess', async (route) => {
    sent = JSON.parse(route.request().postData() || '{}');
    const words = String(sent.referenceText || '')
      .replace(/[.,!?]/g, '')
      .split(/\s+/)
      .filter(Boolean);
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        recognized: sent.referenceText,
        word_scores: words.map((w, i) => ({
          word: w,
          score: i === 1 ? 0 : 90,
          error: i === 1 ? 'Omission' : 'None',
        })),
      }),
    });
  });

  await page.goto('/speaking_guided', { waitUntil: 'domcontentloaded' });
  await page.getByTestId('gs-to-rehearse').click({ timeout: 20_000 });

  const mic = page.getByTestId('gs-assess-phrase');
  await expect(mic).toBeVisible();
  await mic.click(); // start recording
  await page.waitForTimeout(1500);
  await mic.click(); // stop → assessed

  const readout = page.getByTestId('gs-heard-words');
  await expect(readout).toBeVisible({ timeout: 15_000 });
  await expect(readout.locator('[data-status="missing"]')).toHaveCount(1);

  // What the app sent: the phrase on screen as the reference, and real audio bytes.
  expect(sent).not.toBeNull();
  await expect(page.getByTestId('gs-rehearse')).toContainText(sent.referenceText);
  expect(sent.locale).toBe('hr-HR');
  expect(String(sent.audioBase64).length).toBeGreaterThan(200);
  // A missed word holds back "Točno".
  await expect(page.getByText('Točno! ✓')).toHaveCount(0);
});
