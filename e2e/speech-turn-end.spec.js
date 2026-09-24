/**
 * speech-turn-end.spec.js — one answer must stay one turn.
 *
 * OWNER REPORT, 2026-09-24: Baka Mara "wasn't always reading properly or
 * picking up my full sentences."
 *
 * A Web Speech session ends for two different reasons, and `MajaScreen`'s
 * `onend` treated them as one: OUR silence timer calling stop() because the
 * utterance looked finished, versus the speech SERVICE ending a `continuous`
 * session on its own — a long pause, a service timeout, a network blip — while
 * the learner is still mid-sentence.
 *
 * `majaTurnEnd.test.ts` pins the decision function. This pins the SCREENS, with
 * a fake recognizer that does exactly what Chrome does: emit a partial result,
 * then end the session by itself. Reproduced against the old handler before the
 * fix, and it is the whole defect in one line of output — the learner's single
 * sentence became two turns:
 *
 *   BEFORE   POST /api/maja  {"message":"Jučer sam bio"}          ← answered!
 *            POST /api/maja  {"message":"u dućanu s bakom"}
 *   AFTER    POST /api/maja  {"message":"Jučer sam bio u dućanu s bakom"}
 *
 * The unit test cannot see that, because the bug is in which branch the screen
 * takes and how the transcript is carried across a restart — not in the
 * decision itself.
 */
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

/** A SpeechRecognition the test drives: it can speak, and it can quit. */
const FAKE_RECOGNIZER = () => {
  window.__rec = { starts: 0 };
  class FakeRec {
    constructor() {
      this.lang = '';
      this.continuous = false;
      this.interimResults = false;
      this.onresult = null;
      this.onend = null;
      this.onerror = null;
      this.results = [];
    }
    start() {
      window.__rec.starts++;
      // A NEW session starts with no results — which is why a restart that does
      // not carry the transcript forward would lose everything said so far.
      this.results = [];
      window.__rec.last = this;
    }
    stop() {
      this.onend?.();
    }
    abort() {
      this.onend = null;
    }
    _say(text) {
      this.results = [[{ transcript: text }]];
      this.results.length = 1;
      this.results[0].length = 1;
      this.onresult?.({ results: this.results });
    }
    _quit() {
      this.onend?.();
    }
  }
  window.SpeechRecognition = FakeRec;
  window.webkitSpeechRecognition = FakeRec;
};

test.describe('Baka Mara / Maja — a service-ended session is not a finished sentence', () => {
  test('one sentence interrupted by the speech service still arrives whole', async ({ page }) => {
    test.setTimeout(120_000);
    await blockFirebase(page);
    await seedAuth(page, { xp: 4000 });
    await mockContent(page);
    await mockTTS(page);
    await page.addInitScript(FAKE_RECOGNIZER);

    const sent = [];
    await page.route('**/api/maja**', (route) => {
      const body = route.request().postData() || '';
      try {
        const m = JSON.parse(body)?.message;
        if (m) sent.push(m);
      } catch {
        /* session-start call has an empty message */
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reply: 'Dobro.' }),
      });
    });

    await page.goto('/maja', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);
    const start = page.getByRole('button', { name: /poč|start|razgovor/i }).first();
    if (await start.count()) await start.click().catch(() => {});

    // The recognizer must actually be running, or everything below is vacuous.
    await expect
      .poll(() => page.evaluate(() => window.__rec?.starts ?? 0), { timeout: 20_000 })
      .toBeGreaterThan(0);

    // Half a sentence, then the SERVICE ends the session — not our timer.
    await page.evaluate(() => window.__rec.last._say('Jučer sam bio'));
    await page.waitForTimeout(200);
    await page.evaluate(() => window.__rec.last._quit());

    // It must re-open the mic rather than end the learner's turn for them.
    await expect
      .poll(() => page.evaluate(() => window.__rec.starts), { timeout: 10_000 })
      .toBeGreaterThan(1);
    expect(sent, 'half a sentence was sent while the learner was still talking').toEqual([]);

    // Finish the sentence in the new session; our own timer ends the turn.
    await page.evaluate(() => window.__rec.last._say('u dućanu s bakom'));
    await expect.poll(() => sent.length, { timeout: 20_000 }).toBe(1);
    expect(sent[0], 'the two halves must arrive as one sentence').toBe(
      'Jučer sam bio u dućanu s bakom',
    );
  });
});

test.describe('Guided Speaking — the same defect, on an answer that gets graded', () => {
  test('a service-ended session does not cost the learner the first half of their answer', async ({
    page,
  }) => {
    test.setTimeout(120_000);
    await blockFirebase(page);
    await seedAuth(page, { xp: 4000 });
    await mockContent(page);
    await mockTTS(page);
    await page.addInitScript(FAKE_RECOGNIZER);

    await page.goto('/speaking_guided', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);

    // Walk to the SPEAK stage (LISTEN → REHEARSE → BUILD → SPEAK).
    for (let i = 0; i < 8; i++) {
      if (await page.getByTestId('gs-record').count()) break;
      const next = page.getByRole('button', { name: /dalje|next|nastavi|continue|→/i }).first();
      if (!(await next.count())) break;
      await next.click().catch(() => {});
      await page.waitForTimeout(400);
    }
    // Reaching the stage is part of the assertion: a walk that silently stopped
    // short would make everything below vacuous.
    await expect(page.getByTestId('gs-record')).toHaveCount(1);

    await page.getByTestId('gs-record').click();
    await expect
      .poll(() => page.evaluate(() => window.__rec?.starts ?? 0), { timeout: 15_000 })
      .toBeGreaterThan(0);

    await page.evaluate(() => window.__rec.last._say('Zovem se Marko i dolazim iz Kanade'));
    await page.waitForTimeout(200);
    await page.evaluate(() => window.__rec.last._quit()); // the SERVICE ends it

    await expect
      .poll(() => page.evaluate(() => window.__rec.starts), { timeout: 10_000 })
      .toBeGreaterThan(1);

    await page.evaluate(() => window.__rec.last._say('i učim hrvatski svaki dan jer volim baku'));

    // Measured against the old handler: the transcript was the SECOND half only
    // — 8 words of a 15-word answer — and that fragment is what got scored and
    // measured against the stage's word floor.
    await expect
      .poll(async () => (await page.getByTestId('gs-transcript').inputValue()).trim(), {
        timeout: 15_000,
      })
      .toBe('Zovem se Marko i dolazim iz Kanade i učim hrvatski svaki dan jer volim baku');
  });
});
