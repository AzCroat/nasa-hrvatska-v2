// e2e/speaking-microphone.spec.js
//
// THE SPEAKING PATHS, ON A MICROPHONE STREAM (2026-09-30).
//
// Every other speaking spec either types its answer or replaces the recorder. This one
// runs under `playwright.microphone.config.js`, which feeds Chromium's fake capture
// device from a committed WAV of Croatian speech — "Imam sestru." in macOS's hr_HR
// voice (Lana), converted to 16 kHz mono PCM with ffmpeg (1.0 s, 32 KB). So the whole
// production path runs on real audio: getUserMedia → MediaRecorder (WebM/Opus in
// Chrome) → Web Audio decode → 16 kHz WAV (lib/audioWav) → base64 → the request.
//
// The SERVER is mocked at the network layer, as every spec here does — Azure's real
// scoring and the coach's real judgement cannot be run from CI. What this proves is
// what the app SENDS (the WAV itself is decoded and measured below) and what it does
// with every kind of answer that can come back.
//
// The browser's speech recogniser is Google's cloud service and cannot run headless,
// so the stages that need a TRANSCRIPT (SPEAK, the lesson and unit spoken steps) use a
// driven fake recogniser — while the real MediaRecorder records the real file beside
// it, which is exactly the production arrangement (components/practice/SpeakCheck).

import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockContent, mockTTS, TEST_EMAIL } from './fixtures/seed-auth.js';
import { CURRICULUM_FIXTURE } from './fixtures/content-fixture.js';

// ── The request's audio, measured ──────────────────────────────────────────────────

/** Parse a base64 WAV body: header fields and the loudness of its samples. */
function wavInfo(b64) {
  const buf = Buffer.from(String(b64 || ''), 'base64');
  const tag = (o) => buf.toString('ascii', o, o + 4);
  if (buf.length < 44 || tag(0) !== 'RIFF' || tag(8) !== 'WAVE') return { riff: false };
  // Walk the chunks rather than assume the data chunk sits at byte 36.
  let off = 12;
  let fmt = null;
  let data = null;
  while (off + 8 <= buf.length) {
    const id = tag(off);
    const size = buf.readUInt32LE(off + 4);
    if (id === 'fmt ') fmt = off + 8;
    if (id === 'data') data = { start: off + 8, size: Math.min(size, buf.length - off - 8) };
    off += 8 + size + (size % 2);
  }
  if (fmt === null || !data) return { riff: true, fmt: false };
  const format = buf.readUInt16LE(fmt);
  const channels = buf.readUInt16LE(fmt + 2);
  const sampleRate = buf.readUInt32LE(fmt + 4);
  const bits = buf.readUInt16LE(fmt + 14);
  const n = Math.floor(data.size / 2);
  let sum = 0;
  let peak = 0;
  for (let i = 0; i < n; i++) {
    const s = buf.readInt16LE(data.start + i * 2) / 32768;
    sum += s * s;
    if (Math.abs(s) > peak) peak = Math.abs(s);
  }
  return {
    riff: true,
    fmt: true,
    format,
    channels,
    sampleRate,
    bits,
    seconds: n / (sampleRate || 1),
    rms: n ? Math.sqrt(sum / n) : 0,
    peak,
  };
}

/** Every take must be the documented format AND carry the sound the microphone heard. */
function expectRealWav(body) {
  expect(body.audioMimeType).toBe('audio/wav');
  expect(body.locale).toBe('hr-HR');
  const w = wavInfo(body.audioBase64);
  expect(w.riff, 'the body is a RIFF/WAVE file').toBe(true);
  expect(w.format, 'PCM').toBe(1);
  expect(w.channels, 'mono').toBe(1);
  expect(w.sampleRate, '16 kHz').toBe(16000);
  expect(w.bits, '16-bit').toBe(16);
  expect(w.seconds, 'the take has a real duration').toBeGreaterThan(0.5);
  // The fixture's speech peaks well above −12 dBFS. Silence (a capture that never
  // started, a muted track, a zero-filled buffer) is below 0.001 RMS.
  expect(w.rms, `speech energy in the uploaded WAV (rms=${w.rms})`).toBeGreaterThan(0.01);
  return w;
}

// ── Page setup ────────────────────────────────────────────────────────────────────

// xp 0 keeps the seeded learner at A1 (score 0 + 10×15 + 5×25 = 275 < 300), so Guided
// Speaking serves the first A1 unit, whose first BUILD sentence is "Imam sestru." — the
// sentence in the fixture WAV.
async function setup(page, { xp = 0, session } = {}) {
  await blockFirebase(page);
  await seedAuth(page, { xp });
  await mockContent(page);
  await mockTTS(page);
  if (session) {
    await page.addInitScript((screen) => {
      if (window.top !== window) return;
      if (sessionStorage.getItem('__mic_seeded')) return;
      sessionStorage.setItem('__mic_seeded', '1');
      sessionStorage.setItem('nh_session_started', screen);
    }, session);
  }
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  return errors;
}

/** A SpeechRecognition the test drives (the real one is a cloud service). */
const FAKE_RECOGNIZER = (mode) => {
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
      window.__rec.last = this;
      this.results = []; // a new session starts with nothing
      if (mode === 'denied') {
        setTimeout(() => {
          this.onerror?.({ error: 'not-allowed' });
          this.onend?.();
        }, 50);
      }
    }
    stop() {
      this.onend?.();
    }
    abort() {
      this.onend = null;
    }
    _say(text) {
      const r = [{ transcript: text }];
      r.isFinal = true;
      this.results = [r];
      this.onresult?.({ results: this.results, resultIndex: 0 });
    }
    _quit() {
      this.onend?.();
    }
  }
  window.SpeechRecognition = FakeRec;
  window.webkitSpeechRecognition = FakeRec;
};

/** A passed lesson, the way a real pass leaves it: completed AND on the retention ladder. */
const SEED_PASSED_LESSON = ({ spine, id, courseUnits }) => {
  if (window.top !== window) return;
  localStorage.setItem('nh_curriculum_spine', JSON.stringify(spine));
  localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done: { [id]: '2026-09-29' } }));
  localStorage.setItem(
    'nh_lesson_retention',
    JSON.stringify({
      v: 1,
      lessons: {
        [id]: {
          passedAt: '2026-09-29',
          stage: 0,
          due: '2026-10-02',
          checks: 1,
          last: { at: '2026-09-29', score: 6, total: 6, kind: 'mastery' },
        },
      },
      items: {},
      cumulative: { lastAt: null, count: 0 },
    }),
  );
  if (courseUnits) localStorage.setItem('nh_course_units', JSON.stringify(courseUnits));
};

/** An assessment that hears every word of the reference clearly. */
function clearWords(ref, overrides = {}) {
  return String(ref || '')
    .replace(/[.,!?]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => overrides[w] || { word: w, score: 92, error: 'None' });
}

function json(route, status, body) {
  return route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });
}

const COACH_OK = {
  scores: { fluency: 0.8, grammar: 0.8, vocabulary: 0.8, pronunciation: 0.8 },
  overall: 0.8,
  errors: [],
  advice: 'Dobro — pazi na padeže.',
  encouragement: 'Bravo!',
};

async function toRehearse(page) {
  await page.goto('/speaking_guided', { waitUntil: 'domcontentloaded' });
  await page.getByTestId('gs-to-rehearse').click({ timeout: 30_000 });
  await expect(page.getByTestId('gs-rehearse')).toBeVisible();
}

async function toBuild(page) {
  await toRehearse(page);
  for (let i = 0; i < 12 && !(await page.getByTestId('gs-build').isVisible()); i++) {
    await page.getByTestId('gs-phrase-next').click();
  }
  await expect(page.getByTestId('gs-build')).toBeVisible();
}

async function toSpeak(page) {
  await toBuild(page);
  for (let i = 0; i < 12 && !(await page.getByTestId('gs-your-turn').isVisible()); i++) {
    await page.getByTestId('gs-build-next').click();
  }
  await expect(page.getByTestId('gs-your-turn')).toBeVisible();
}

/** Record one take on an assessed mic: the fixture loops, so 1.6 s holds all of it. */
async function takeOn(page, testId) {
  const mic = page.getByTestId(testId);
  await expect(mic).toHaveText(/Say it/);
  await mic.click();
  await expect(mic).toHaveText(/Stop/, { timeout: 10_000 });
  await page.waitForTimeout(1600);
  await mic.click();
}

const xpOf = (page) =>
  page.evaluate((email) => {
    try {
      const p = JSON.parse(localStorage.getItem('uP_' + email) || '{}');
      // The app saves the profile as `stats`; the seed writes `st`.
      return p.stats?.xp ?? p.st?.xp ?? null;
    } catch {
      return null;
    }
  }, TEST_EMAIL);

// ── 1. REHEARSE ───────────────────────────────────────────────────────────────────

test.describe('Guided Speaking REHEARSE, on the microphone', () => {
  test('a take is uploaded as real 16 kHz speech and read back word by word', async ({ page }) => {
    const errors = await setup(page);
    const sent = [];
    await page.route('**/api/pronunciation-assess', async (route) => {
      const body = JSON.parse(route.request().postData() || '{}');
      sent.push(body);
      await json(route, 200, {
        ok: true,
        recognized: body.referenceText,
        word_scores: clearWords(body.referenceText),
      });
    });

    await toRehearse(page);
    await takeOn(page, 'gs-assess-phrase');

    const readout = page.getByTestId('gs-heard-words');
    await expect(readout).toBeVisible({ timeout: 20_000 });
    await expect(readout).toContainText('every word came through clearly');
    await expect(readout.locator('[data-status="good"]')).not.toHaveCount(0);
    await expect(page.getByText('Točno! ✓')).toBeVisible();

    expect(sent).toHaveLength(1);
    const w = expectRealWav(sent[0]);
    expect(w.seconds).toBeLessThan(15); // the stage's own cap
    await expect(page.getByTestId('gs-rehearse')).toContainText(sent[0].referenceText);
    // REHEARSE grades against the phrase: it does not ask for the unbiased transcript.
    expect(sent[0].unbiased).toBeUndefined();
    expect(errors).toEqual([]);
  });

  test('a take with no speech in it names why, and the learner can simply say it again', async ({
    page,
  }) => {
    const errors = await setup(page);
    const sent = [];
    await page.route('**/api/pronunciation-assess', async (route) => {
      const body = JSON.parse(route.request().postData() || '{}');
      sent.push(body);
      if (sent.length === 1) {
        // Azure heard nothing (NoMatch / InitialSilenceTimeout): sweep 218's 422.
        await json(route, 422, { ok: false, error: 'no_speech' });
        return;
      }
      await json(route, 200, {
        ok: true,
        recognized: body.referenceText,
        word_scores: clearWords(body.referenceText),
      });
    });

    await toRehearse(page);
    await takeOn(page, 'gs-assess-phrase');

    const notice = page.getByTestId('gs-assess-phrase-notice');
    await expect(notice).toBeVisible({ timeout: 20_000 });
    await expect(notice).toContainText(/couldn't transcribe/i);
    // The retry is the SAME checked take, not a quiet downgrade to the recogniser.
    await takeOn(page, 'gs-assess-phrase');
    await expect(page.getByTestId('gs-heard-words')).toBeVisible({ timeout: 20_000 });
    await expect(notice).toHaveCount(0);
    expect(sent).toHaveLength(2);
    expectRealWav(sent[1]);
    // And the stage never blocked: Next was there throughout.
    await expect(page.getByTestId('gs-phrase-next')).toBeEnabled();
    expect(errors).toEqual([]);
  });
});

// ── 2. BUILD ──────────────────────────────────────────────────────────────────────

test.describe('Guided Speaking BUILD, on the microphone', () => {
  test('grades the unbiased transcript: a wrong ending is named, the right one passes', async ({
    page,
  }) => {
    const errors = await setup(page);
    const sent = [];
    // The first A1 unit's first sentence is "Imam sestru." — the fixture says exactly
    // that. The scripted assessment hears to match its reference, so `recognized` is
    // always the reference; only `unbiased` carries what was said.
    const said = ['Imam sestra.', 'Imam sestru.'];
    await page.route('**/api/pronunciation-assess', async (route) => {
      const body = JSON.parse(route.request().postData() || '{}');
      sent.push(body);
      await json(route, 200, {
        ok: true,
        recognized: body.referenceText,
        word_scores: clearWords(body.referenceText),
        unbiased: said[sent.length - 1] ?? said[1],
        unbiasedError: null,
      });
    });

    await toBuild(page);
    await expect(page.getByTestId('gs-build')).toContainText('I have a sister');

    await takeOn(page, 'gs-assess-build');
    await expect(page.getByTestId('gs-build-input')).toHaveValue('Imam sestra.', {
      timeout: 20_000,
    });
    const contrast = page.getByTestId('gs-build-contrast');
    await expect(contrast).toBeVisible();
    await expect(contrast).toContainText('sestra');
    await expect(page.getByTestId('gs-build-right')).toHaveCount(0);

    await takeOn(page, 'gs-assess-build');
    await expect(page.getByTestId('gs-build-input')).toHaveValue('Imam sestru.', {
      timeout: 20_000,
    });
    await expect(page.getByTestId('gs-build-right')).toBeVisible();
    await expect(contrast).toHaveCount(0);

    expect(sent).toHaveLength(2);
    for (const b of sent) {
      expect(b.unbiased, 'BUILD asks for the unbiased transcript').toBe(true);
      expect(b.referenceText).toBe('Imam sestru.');
      expectRealWav(b);
    }
    expect(errors).toEqual([]);
  });
});

// ── 3. SPEAK ──────────────────────────────────────────────────────────────────────

const HALF_1 = 'Zovem se Marko i dolazim iz Kanade';
const HALF_2 = 'i učim hrvatski svaki dan jer volim baku';
const WHOLE = `${HALF_1} ${HALF_2}`;

async function speakAcrossAServiceEnd(page) {
  await page.getByTestId('gs-record').click();
  await expect
    .poll(() => page.evaluate(() => window.__rec?.starts ?? 0), { timeout: 15_000 })
    .toBe(1);
  await page.waitForTimeout(800);
  await page.evaluate((t) => window.__rec.last._say(t), HALF_1);
  await page.evaluate(() => window.__rec.last._quit()); // the SPEECH SERVICE ends it
  await expect.poll(() => page.evaluate(() => window.__rec.starts), { timeout: 10_000 }).toBe(2);
  // The recording kept going across the restart: still one take, still "Stop".
  await expect(page.getByTestId('gs-record')).toHaveText(/Stop/);
  await page.waitForTimeout(800);
  await page.evaluate((t) => window.__rec.last._say(t), HALF_2);
  await page.getByTestId('gs-record').click(); // the learner stops
  await expect(page.getByTestId('gs-transcript')).toHaveValue(WHOLE);
}

test.describe('Guided Speaking SPEAK, on the microphone', () => {
  test('a long answer survives a service-ended session and reaches the coach whole', async ({
    page,
  }) => {
    const errors = await setup(page);
    await page.addInitScript(FAKE_RECOGNIZER);
    const assessed = [];
    const coached = [];
    await page.route('**/api/pronunciation-assess', async (route) => {
      const body = JSON.parse(route.request().postData() || '{}');
      assessed.push(body);
      await json(route, 200, {
        ok: true,
        recognized: body.referenceText,
        word_scores: clearWords(body.referenceText, {
          baku: { word: 'baku', score: 20, error: 'Mispronunciation' },
        }),
      });
    });
    await page.route('**/api/speaking-coach', async (route) => {
      coached.push(JSON.parse(route.request().postData() || '{}'));
      await json(route, 200, COACH_OK);
    });

    await toSpeak(page);
    await speakAcrossAServiceEnd(page);

    // ONE take covered the whole answer, and it was checked against the whole answer.
    await expect(page.getByTestId('gs-speak-words')).toBeVisible({ timeout: 20_000 });
    await expect(
      page.getByTestId('gs-speak-words').locator('[data-status="unclear"]'),
    ).toContainText('baku');
    expect(assessed).toHaveLength(1);
    expect(assessed[0].referenceText).toBe(WHOLE);
    const w = expectRealWav(assessed[0]);
    expect(w.seconds, 'the take spans both recogniser sessions').toBeGreaterThan(1.2);

    await page.getByTestId('gs-submit').click();
    await expect(page.getByTestId('gs-result')).toBeVisible({ timeout: 20_000 });
    expect(coached).toHaveLength(1);
    expect(coached[0].transcript).toBe(WHOLE);
    expect(coached[0].unconfirmed).toEqual(['baku']);
    expect(errors).toEqual([]);
  });

  for (const [label, status, body, pattern] of [
    ['a server error', 502, { error: 'upstream_error' }, /temporarily unavailable/i],
    [
      'a paused monthly budget',
      503,
      { error: 'monthly_budget_exhausted' },
      /allowance is used up/i,
    ],
  ]) {
    test(`${label} from the coach is named, and the session is not stranded`, async ({ page }) => {
      const errors = await setup(page, { session: 'speaking_guided' });
      await page.addInitScript(FAKE_RECOGNIZER);
      await page.route('**/api/pronunciation-assess', async (route) => {
        const b = JSON.parse(route.request().postData() || '{}');
        await json(route, 200, {
          ok: true,
          recognized: b.referenceText,
          word_scores: clearWords(b.referenceText),
        });
      });
      let coachCalls = 0;
      await page.route('**/api/speaking-coach', async (route) => {
        coachCalls++;
        await json(route, status, body);
      });

      await toSpeak(page);
      await speakAcrossAServiceEnd(page);
      await page.getByTestId('gs-submit').click();

      const failed = page.getByTestId('gs-coach-failed');
      await expect(failed).toBeVisible({ timeout: 20_000 });
      await expect(failed).toContainText(pattern);
      expect(coachCalls).toBe(1);
      // The learner spoke: the session slot is freed, and the way on is offered.
      await expect
        .poll(() => page.evaluate(() => sessionStorage.getItem('nh_session_completed')))
        .toBe('speaking_guided');
      await expect(page.getByTestId('gs-continue-anyway')).toBeVisible();
      // Their answer is still there to retry with.
      await expect(page.getByTestId('gs-transcript')).toHaveValue(WHOLE);
      expect(errors).toEqual([]);
    });
  }
});

// ── 4. The lesson produce step and the unit production task, spoken ──────────────

const LESSON = CURRICULUM_FIXTURE.find((e) => e.level === 'A1');
const PRODUCE_SAID = 'Imam sestru i brata. Moja sestra živi u Zagrebu i radi u školi.';

test.describe('The spoken production steps, on the microphone', () => {
  test('the lesson produce step records, is graded and is credited once', async ({ page }) => {
    const errors = await setup(page, { session: 'lessonproduce' });
    await page.addInitScript(FAKE_RECOGNIZER);
    await page.addInitScript(SEED_PASSED_LESSON, { spine: CURRICULUM_FIXTURE, id: LESSON.id });
    await page.addInitScript((id) => {
      if (window.top === window) sessionStorage.setItem('nh_lesson_produce', `${id}|speak`);
    }, LESSON.id);
    const assessed = [];
    const coached = [];
    await page.route('**/api/pronunciation-assess', async (route) => {
      const b = JSON.parse(route.request().postData() || '{}');
      assessed.push(b);
      await json(route, 200, {
        ok: true,
        recognized: b.referenceText,
        word_scores: clearWords(b.referenceText),
      });
    });
    await page.route('**/api/speaking-coach', async (route) => {
      coached.push(JSON.parse(route.request().postData() || '{}'));
      await json(route, 200, COACH_OK);
    });

    await page.goto('/lessonproduce', { waitUntil: 'domcontentloaded' });
    await expect(page.getByTestId('produce-step')).toBeVisible({ timeout: 30_000 });
    await expect(page.getByText('Now say it')).toBeVisible();

    const mic = page.getByTestId('produce-mic');
    await mic.click();
    await expect(mic).toHaveText(/Stop listening/);
    await page.waitForTimeout(1600);
    await page.evaluate((t) => window.__rec.last._say(t), PRODUCE_SAID);
    await mic.click();
    await expect(page.getByTestId('produce-input')).toHaveValue(PRODUCE_SAID);
    await expect(page.getByTestId('gs-speak-words')).toBeVisible({ timeout: 20_000 });
    expect(assessed).toHaveLength(1);
    expect(assessed[0].referenceText).toBe(PRODUCE_SAID);
    expectRealWav(assessed[0]);

    const before = await xpOf(page);
    await page.getByTestId('produce-submit').click();
    await expect(page.getByTestId('produce-result')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('produce-result')).toContainText('80/100');
    expect(coached).toHaveLength(1);
    expect(coached[0].transcript).toBe(PRODUCE_SAID);
    // Credited: the retention record says it was SPOKEN, the slot is freed, XP is paid —
    // once (round(0.8 × 10) + 5 = 13), however long the result sits there.
    const produced = await page.evaluate(
      (id) =>
        JSON.parse(localStorage.getItem('nh_lesson_retention') || '{}').lessons?.[id]?.produced,
      LESSON.id,
    );
    expect(produced?.kind).toBe('speak');
    await expect
      .poll(() => page.evaluate(() => sessionStorage.getItem('nh_session_completed')))
      .toBe('lessonproduce');
    await expect.poll(() => xpOf(page)).toBeGreaterThanOrEqual(before + 13);
    const paid = (await xpOf(page)) - before;
    await page.waitForTimeout(1500);
    expect((await xpOf(page)) - before, 'the award is paid once').toBe(paid);
    expect(errors).toEqual([]);
  });

  test('the unit production spoken task records, is graded and is credited once', async ({
    page,
  }) => {
    const errors = await setup(page);
    await page.addInitScript(FAKE_RECOGNIZER);
    await page.addInitScript(() => {
      if (window.top !== window) return;
      localStorage.setItem(
        'nh_course_units',
        JSON.stringify({ units: { 'A1-1': { passedAt: '2026-09-20' } } }),
      );
    });
    const assessed = [];
    const coached = [];
    await page.route('**/api/pronunciation-assess', async (route) => {
      const b = JSON.parse(route.request().postData() || '{}');
      assessed.push(b);
      await json(route, 200, {
        ok: true,
        recognized: b.referenceText,
        word_scores: clearWords(b.referenceText),
      });
    });
    await page.route('**/api/speaking-coach', async (route) => {
      coached.push(JSON.parse(route.request().postData() || '{}'));
      await json(route, 200, COACH_OK);
    });

    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
    await page.getByTestId('course-unit-speak-A1-1').click();
    await expect(page.getByTestId('unit-production')).toBeVisible({ timeout: 20_000 });

    // Two takes: this recogniser APPENDS, and each take's recording is checked
    // against only the words it added (SpeakCheck `appends`).
    const takes = [
      'Zovem se Marko i dolazim iz Kanade. Imam sestru i brata.',
      'Živim u Torontu i radim u bolnici. Učim hrvatski jer želim razgovarati s bakom.',
    ];
    const mic = page.getByTestId('unit-production-mic');
    for (const said of takes) {
      await mic.click();
      await expect(mic).toHaveText(/Stop recording/);
      await page.waitForTimeout(1600);
      await page.evaluate((t) => window.__rec.last._say(t), said);
      await mic.click();
      await expect.poll(() => assessed.length, { timeout: 20_000 }).toBe(takes.indexOf(said) + 1);
    }
    await expect(page.getByTestId('unit-production-input')).toHaveValue(takes.join(' '));
    expect(assessed.map((b) => b.referenceText)).toEqual(takes);
    for (const b of assessed) expectRealWav(b);
    await expect(page.getByTestId('gs-speak-words')).toBeVisible();

    const before = await xpOf(page);
    await page.getByTestId('unit-production-submit').click();
    await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('unit-production-result')).toContainText('80/100');
    expect(coached).toHaveLength(1);
    expect(coached[0].transcript).toBe(takes.join(' '));
    const stored = await page.evaluate(() =>
      JSON.parse(localStorage.getItem('nh_course_units') || '{}'),
    );
    expect(stored.units['A1-1'].production?.spokeAt).toBeTruthy();
    await expect.poll(() => xpOf(page)).toBeGreaterThanOrEqual(before + 30);
    const paid = (await xpOf(page)) - before;
    await page.waitForTimeout(1500);
    expect((await xpOf(page)) - before, 'the award is paid once').toBe(paid);
    expect(errors).toEqual([]);
  });
});

// ── 5. Microphone permission denied (project `mic-denied`: a REAL NotAllowedError) ─

test.describe('Microphone blocked @denied', () => {
  test('every speaking surface offers the typed path, and nothing blocks @denied', async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const errors = await setup(page);
    // The recogniser is blocked too: Chrome reports `not-allowed` when the mic is.
    await page.addInitScript(FAKE_RECOGNIZER, 'denied');
    await page.addInitScript(SEED_PASSED_LESSON, {
      spine: CURRICULUM_FIXTURE,
      id: LESSON.id,
      courseUnits: { units: { 'A1-1': { passedAt: '2026-09-20' } } },
    });
    let assessCalls = 0;
    await page.route('**/api/pronunciation-assess', async (route) => {
      assessCalls++;
      await json(route, 500, { error: 'should_not_be_called' });
    });
    const coached = [];
    await page.route('**/api/speaking-coach', async (route) => {
      coached.push(JSON.parse(route.request().postData() || '{}'));
      await json(route, 200, COACH_OK);
    });

    // The permission really is refused in this project.
    await page.goto('/speaking_guided', { waitUntil: 'domcontentloaded' });
    const denied = await page.evaluate(async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ audio: true });
        s.getTracks().forEach((t) => t.stop());
        return 'granted';
      } catch (e) {
        return e.name;
      }
    });
    expect(denied).toBe('NotAllowedError');

    // REHEARSE: the checked mic says why it is off; the stage advances.
    await page.getByTestId('gs-to-rehearse').click({ timeout: 30_000 });
    await page.getByTestId('gs-assess-phrase').click();
    await expect(page.getByTestId('gs-assess-phrase-notice')).toContainText(/microphone/i, {
      timeout: 15_000,
    });
    await expect(page.getByTestId('gs-phrase-next')).toBeEnabled();
    for (let i = 0; i < 12 && !(await page.getByTestId('gs-build').isVisible()); i++) {
      await page.getByTestId('gs-phrase-next').click();
    }

    // BUILD: the typed answer grades exactly like a spoken one.
    await expect(page.getByTestId('gs-build')).toBeVisible();
    await page.getByTestId('gs-build-input').fill('Imam sestru.');
    await page.getByTestId('gs-build-check').click();
    await expect(page.getByTestId('gs-build-right')).toBeVisible();
    for (let i = 0; i < 12 && !(await page.getByTestId('gs-your-turn').isVisible()); i++) {
      await page.getByTestId('gs-build-next').click();
    }

    // SPEAK: the mic reports the block and names the typed path; typing is graded.
    await page.getByTestId('gs-record').click();
    await expect(page.getByTestId('gs-your-turn')).toContainText(/type your answer instead/i, {
      timeout: 10_000,
    });
    await page.getByTestId('gs-transcript').fill(WHOLE);
    await page.getByTestId('gs-submit').click();
    await expect(page.getByTestId('gs-result')).toBeVisible({ timeout: 20_000 });

    // The lesson produce step, spoken.
    await page.evaluate(
      (id) => sessionStorage.setItem('nh_lesson_produce', `${id}|speak`),
      LESSON.id,
    );
    await page.goto('/lessonproduce', { waitUntil: 'domcontentloaded' });
    await expect(page.getByTestId('produce-step')).toBeVisible({ timeout: 30_000 });
    await page.getByTestId('produce-mic').click();
    await expect(page.getByTestId('produce-mic-error')).toContainText(/type/i, {
      timeout: 10_000,
    });
    await page.getByTestId('produce-input').fill(PRODUCE_SAID);
    await page.getByTestId('produce-submit').click();
    await expect(page.getByTestId('produce-result')).toBeVisible({ timeout: 20_000 });

    // The unit production spoken task.
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
    await page.getByTestId('course-unit-speak-A1-1').click();
    await expect(page.getByTestId('unit-production')).toBeVisible({ timeout: 20_000 });
    await page.getByTestId('unit-production-mic').click();
    await expect(page.getByTestId('unit-production-mic-error')).toContainText(/type/i, {
      timeout: 10_000,
    });
    await page
      .getByTestId('unit-production-input')
      .fill(Array.from({ length: 3 }, () => PRODUCE_SAID).join(' '));
    await page.getByTestId('unit-production-submit').click();
    await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 20_000 });

    // Three typed answers graded; no recording was ever sent.
    expect(coached).toHaveLength(3);
    expect(assessCalls).toBe(0);
    expect(errors).toEqual([]);
  });
});
