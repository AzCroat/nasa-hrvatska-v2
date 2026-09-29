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
  // Converted in the browser to 16 kHz WAV (lib/audioWav): the RIFF header, base64'd.
  expect(sent.audioMimeType).toBe('audio/wav');
  expect(String(sent.audioBase64).startsWith('UklGR')).toBe(true);
  // A missed word holds back "Točno".
  await expect(page.getByText('Točno! ✓')).toHaveCount(0);
});

// A recogniser the test drives, so SPEAK runs without Google's speech service.
const FAKE_RECOGNIZER = () => {
  class Rec {
    constructor() {
      this.lang = '';
      this.continuous = false;
      this.interimResults = false;
      this.onresult = null;
      this.onerror = null;
      this.onend = null;
    }
    start() {
      window.__rec = this;
    }
    stop() {}
    abort() {}
    _say(t) {
      this.onresult?.({ results: [[{ transcript: t }]] });
    }
  }
  window.webkitSpeechRecognition = Rec;
  window.SpeechRecognition = Rec;
};

test('SPEAK checks the transcript against its own recording, and tells the learner what did not come through', async ({
  page,
  context,
  browserName,
}) => {
  test.skip(browserName !== 'chromium', 'the fake-microphone flags are Chromium-only');
  test.setTimeout(120_000);
  await context.grantPermissions(['microphone']);
  await blockFirebase(page);
  await seedAuth(page, { xp: 200 });
  await mockContent(page);
  await mockTTS(page);
  await page.addInitScript(FAKE_RECOGNIZER);

  let sent = null;
  await page.route('**/api/pronunciation-assess', async (route) => {
    sent = JSON.parse(route.request().postData() || '{}');
    const words = String(sent.referenceText || '')
      .split(/\s+/)
      .filter(Boolean);
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        recognized: sent.referenceText,
        word_scores: words.map((w) => ({
          word: w,
          score: w === 'Zagrebu' ? 25 : 90,
          error: w === 'Zagrebu' ? 'Mispronunciation' : 'None',
        })),
      }),
    });
  });

  await page.goto('/speaking_guided', { waitUntil: 'domcontentloaded' });
  await page.getByTestId('gs-to-rehearse').click({ timeout: 20_000 });
  for (const id of ['gs-phrase-next', 'gs-build-next']) {
    for (let i = 0; i < 12; i++) {
      const n = page.getByTestId(id);
      if (!(await n.count())) break;
      await n.click();
    }
  }
  await expect(page.getByTestId('gs-your-turn')).toBeVisible();

  const answer = 'Zovem se Marko i živim u Zagrebu i učim hrvatski svaki dan';
  await page.getByTestId('gs-record').click();
  await page.waitForTimeout(1500);
  await page.evaluate((t) => window.__rec._say(t), answer);
  await page.getByTestId('gs-record').click(); // stop

  await expect(page.getByTestId('gs-speak-unconfirmed')).toBeVisible({ timeout: 15_000 });
  await expect(page.getByTestId('gs-speak-words').locator('[data-status="unclear"]')).toHaveText(
    /Zagrebu/,
  );
  expect(sent.referenceText).toBe(answer);
  expect(sent.audioMimeType).toBe('audio/wav');
  // The button came back: a second take is possible.
  await expect(page.getByTestId('gs-record')).toHaveText(/Start speaking/);
});

// THE SCRIPTED ASSESSMENT HEARS TO MATCH ITS REFERENCE (calibration, 2026-09-29): played
// "Imam sestra." it reported "Imam sestru." at 100. The build stage must grade the
// UNBIASED transcript of the take, so a wrong ending is named, not credited.
test('BUILD grades the unbiased transcript: a wrong ending is named even when the scripted text is right', async ({
  page,
  context,
  browserName,
}) => {
  test.skip(browserName !== 'chromium', 'the fake-microphone flags are Chromium-only');
  test.setTimeout(120_000);
  await context.grantPermissions(['microphone']);
  await blockFirebase(page);
  await seedAuth(page, { xp: 200 });
  await mockContent(page);
  await mockTTS(page);

  const sentBodies = [];
  await page.route('**/api/pronunciation-assess', async (route) => {
    const sent = JSON.parse(route.request().postData() || '{}');
    sentBodies.push(sent);
    const words = String(sent.referenceText || '')
      .replace(/[.,!?]/g, '')
      .split(/\s+/)
      .filter(Boolean);
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        // What the biased assessment reports: the reference, perfectly.
        recognized: sent.referenceText,
        word_scores: words.map((w) => ({ word: w, score: 100, error: 'None' })),
        // What was actually said: the nominative.
        ...(sent.unbiased ? { unbiased: 'Imam sestra.', unbiasedError: null } : {}),
      }),
    });
  });

  await page.goto('/speaking_guided', { waitUntil: 'domcontentloaded' });
  await page.getByTestId('gs-to-rehearse').click({ timeout: 20_000 });
  for (let i = 0; i < 12; i++) {
    if (await page.getByTestId('gs-build').isVisible()) break;
    await page.getByTestId('gs-phrase-next').click();
  }
  await expect(page.getByTestId('gs-build')).toBeVisible();

  const mic = page.getByTestId('gs-assess-build');
  await mic.click();
  await page.waitForTimeout(1500);
  await mic.click();

  const contrast = page.getByTestId('gs-build-contrast');
  await expect(contrast).toBeVisible({ timeout: 15_000 });
  await expect(contrast).toContainText('sestra');
  await expect(contrast).toContainText('sestru');
  await expect(page.getByTestId('gs-build-right')).toHaveCount(0);
  // The build take asked for the unbiased transcript.
  expect(sentBodies.some((b) => b.unbiased === true && /sestru/.test(b.referenceText))).toBe(true);
});
