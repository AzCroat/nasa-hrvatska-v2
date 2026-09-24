/**
 * pronunciation.spec.js
 *
 * Comprehensive E2E tests for SpeakingScreen, PronunciationScorer, and
 * WebSpeechResultPanel — the features most at risk before Google Play launch.
 *
 * Covers:
 *  1. SpeakingScreen renders with word, phonetic guide, and action buttons
 *  2. Self-assessment path ("I Said It Correctly!") — no mic required
 *  3. Web Speech API match path — simulated hr-HR recognition
 *  4. Web Speech API nomatch path — transcript doesn't match target
 *  5. English-translation recognition (the "četiri" → "four" bug fix)
 *     — browser returns English meaning, must score as correct & NOT display "four"
 *  6. All words completed → summary screen shown
 *  7. Microphone permission denied error handling
 *  8. No-speech timeout handling
 *  9. Score display and colour thresholds
 * 10. "Try Again" resets scorer state
 * 11. Slow-play TTS button present
 * 12. Back navigation exits speaking screen
 */

import { test, expect } from '@playwright/test';
import {
  seedAuth,
  blockFirebase,
  mockTTS,
  mockContent,
  localYMD,
  silentWav,
} from './fixtures/seed-auth.js';

// Hard cap: every test in this file must finish within 12 seconds.
// isVisible timeouts and waitForTimeout values are trimmed to match.
test.setTimeout(12_000);

// ── Speech Recognition mock factory ────────────────────────────────────────
// Installed via page.addInitScript before the page loads.
// window.__mockSR__ is read at start() time so each test can configure the
// response via page.evaluate(() => window.__mockSR__ = { ... }) before triggering.
const SR_MOCK_SCRIPT = `
  (function () {
    class MockSR {
      constructor() {
        this.lang = 'hr-HR';
        this.maxAlternatives = 3;
        this.continuous = false;
        this.interimResults = false;
        this.onresult = null;
        this.onerror = null;
        this.onend = null;
      }
      start() {
        const cfg = window.__mockSR__ || {};
        const delay = cfg.delay || 300;
        setTimeout(() => {
          if (cfg.error) {
            this.onerror?.({ error: cfg.error, type: cfg.error });
            setTimeout(() => this.onend?.(), 100);
            return;
          }
          if (cfg.transcripts && cfg.transcripts.length) {
            // Build array-like SpeechRecognitionResultList
            const alts = cfg.transcripts.map(t => ({ transcript: t, confidence: 0.92 }));
            // Array.from(e.results[0]) must iterate alts array
            const resultList = [alts];
            // SpeechRecognitionResult is iterable — make alts work with Array.from
            Object.defineProperty(alts, Symbol.iterator, {
              value: function*() { yield* cfg.transcripts.map(t => ({ transcript: t, confidence: 0.92 })); }
            });
            this.onresult?.({ results: resultList });
          } else {
            // No speech scenario — simulate timeout via onerror no-speech
            setTimeout(() => {
              this.onerror?.({ error: 'no-speech', type: 'no-speech' });
              setTimeout(() => this.onend?.(), 100);
            }, 200);
          }
          setTimeout(() => this.onend?.(), 150);
        }, delay);
      }
      stop() { setTimeout(() => this.onend?.(), 80); }
      abort() { setTimeout(() => this.onend?.(), 80); }
    }
    window.SpeechRecognition = MockSR;
    window.webkitSpeechRecognition = MockSR;
    // Stub MediaRecorder so PronunciationScorer falls through to WebSpeech mode.
    // By returning false for all mime types, the Azure recording path is skipped.
    if (typeof window.MediaRecorder !== 'undefined') {
      const origIsTypeSupported = MediaRecorder.isTypeSupported;
      MediaRecorder.isTypeSupported = () => false;
    }
  })();
`;

// `goToSpeaking` lived here and is gone (2026-09-24). It seeded `nh_scr` to put
// the learner straight on the speaking screen — a key the app never reads back
// (a probe found it null after the screen opens), so that navigation had never
// worked; and it wrote `nh_stats` immediately before `seedAuth` overwrote it.
// The real path is `openSpeaking` below.

// ── Shared setup ────────────────────────────────────────────────────────────
async function setup(page) {
  await page.addInitScript(SR_MOCK_SCRIPT);
  await seedAuth(page);
  await blockFirebase(page);
  await mockTTS(page);
  // The Grad surface reads /api/content/* — without the fixture its places do
  // not render, which is one of the two reasons this file could never reach
  // the speaking screen.
  await mockContent(page);
  // Mock pronunciation-assess (Azure) to return not-ok so it falls back to WebSpeech
  await page.route('/api/pronunciation-assess', route => route.fulfill({
    status: 503,
    contentType: 'application/json',
    body: JSON.stringify({ ok: false }),
  }));
  // Mock pronunciation-coach to return fast
  await page.route('/api/pronunciation-coach', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({
      feedback: 'Good attempt! Focus on the vowel sounds.',
      issue: 'vowel',
      phonetic_guide: '/tʃe.ti.ri/',
      drills: [{ word: 'tri', tip: 'Practice the ending' }],
    }),
  }));
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
}

/**
 * REACHING THE SCREEN — and why this helper had to be written (2026-09-24).
 *
 * Every navigation in this file was written against a Practice tab that had
 * "category tiles" (`button.cat-tile`) inside "Drill" and "Challenge" panels.
 * That tab was replaced by the Grad surface — six places, each holding its own
 * exercises — and `cat-tile` now exists only in `index.css`: no component in
 * `src/` renders it. So every `catTile` locator matched nothing.
 *
 * Because each of those locators was consulted inside `if (await
 * X.isVisible(...).catch(() => false))`, the tests did not FAIL when the
 * screen could not be reached — they skipped their own bodies and passed.
 * Measured by instrumenting every guard and running the file: **21 guards,
 * 19 never fired**, across 40 green tests. The spec's own header calls these
 * "the features most at risk before Google Play launch".
 *
 * The real path is Grad -> Anina kavana -> Govori, and the assertion after it
 * is what makes a future move of that entry point fail loudly instead of
 * quietly.
 */
/** The word the learner is being asked to say, read from the screen itself. */
async function targetWord(page) {
  return (await page.getByTestId('speaking-word').first().textContent())?.trim();
}

async function openSpeaking(page) {
  await page.goto('/practice');
  await expect(page.getByText('Danas u gradu')).toBeVisible({ timeout: 20_000 });
  await page.getByText('Anina kavana', { exact: true }).first().click();
  await page.getByText('Govori', { exact: false }).first().click();
  await expect(page.getByText(/Pronunciation Practice/i).first()).toBeVisible({ timeout: 8_000 });
}

// ===========================================================================
// 1. SpeakingScreen structure
// ===========================================================================

test.describe('SpeakingScreen structure', () => {
  test.beforeEach(async ({ page }) => {
    await setup(page);
  });

  test('shows Pronunciation Practice heading', async ({ page }) => {
    // This used to seed `nh_scr` and then assert only `if (body.includes(...))`.
    // The restore never put the learner on the screen, so the assertion never ran.
    await openSpeaking(page);
    await expect(page.getByText(/Pronunciation Practice/i).first()).toBeVisible();
  });

  test('offers both play speeds and both ways to be scored', async ({ page }) => {
    await openSpeaking(page);
    await expect(page.getByRole('button', { name: /Normal/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Slow/i }).first()).toBeVisible();
    // The two scoring paths: the microphone, and the keyboard-safe self-assess.
    await expect(page.getByRole('button', { name: /Test My Pronunciation/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /I Said It Correctly/i }).first()).toBeVisible();
  });
});

// ===========================================================================
// 2. Self-assessment path — no mic required
// ===========================================================================

test.describe('Self-assessment path', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(SR_MOCK_SCRIPT);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.route('/api/pronunciation-assess', route => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false }) }));
    await page.route('/api/pronunciation-coach', route => route.fulfill({ contentType: 'application/json', body: JSON.stringify({ feedback: 'Good!', issue: '', phonetic_guide: '', drills: [] }) }));
  });

  test('self-assessment marks the word done without a microphone', async ({ page }) => {
    await openSpeaking(page);
    const selfAssess = page.getByRole('button', { name: /I Said It Correctly/i }).first();
    await expect(selfAssess).toBeVisible();
    await selfAssess.click();
    // After self-assess the learner is offered the way on.
    await expect(page.getByRole('button', { name: /Next|Finish|Done/i }).first()).toBeVisible({
      timeout: 4_000,
    });
  });
});

// ===========================================================================
// 3. PronunciationScorer — WebSpeech mode, direct navigation
// ===========================================================================

test.describe('PronunciationScorer WebSpeech mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(SR_MOCK_SCRIPT);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.route('/api/pronunciation-assess', route => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false }) }));
    await page.route('/api/pronunciation-coach', route => route.fulfill({ contentType: 'application/json', body: JSON.stringify({ feedback: 'Great pronunciation!', issue: '', phonetic_guide: '/dɔ.bar/', drills: [] }) }));
    await page.goto('/practice');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
  });

  test('Test My Pronunciation button is present in speaking exercises', async ({ page }) => {
    await openSpeaking(page);
    await expect(
      page.getByRole('button', { name: /Test My Pronunciation/i }).first(),
    ).toBeVisible();
  });

  test('HR match — saying the word on screen scores positively', async ({ page }) => {
    // The word is drawn from the learner's pool, so it is read off the screen
    // rather than hardcoded: the old version fed 'dobar' to whatever word had
    // been served, which could never have been a match even had it run.
    await openSpeaking(page);
    const word = await targetWord(page);
    expect(word && word.length).toBeGreaterThan(0);
    await page.evaluate((w) => {
      window.__mockSR__ = { transcripts: [w], delay: 100 };
    }, word);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toBeVisible({ timeout: 6_000 });
    const bodyText = (await page.locator('body').textContent()) || '';
    const m = bodyText.match(/(\d+)%/);
    expect(m, 'the verdict panel states a percentage').not.toBeNull();
    expect(parseInt(m[1], 10)).toBeGreaterThan(0);
  });
});

// ===========================================================================
// 4. English-translation recognition bug fix
//    ("četiri" → browser returns "four" → should show as CORRECT, not "You said: four")
// ===========================================================================

test.describe('English-translation recognition (browser returns the meaning)', () => {
  // The bug: hr-HR recognition falls through to the browser's English model, so
  // saying "četiri" comes back as "four". That IS a correct pronunciation — the
  // English ASR decoded the Croatian phonemes — and the panel must say so rather
  // than reporting `You said: "four"` as a miss.
  //
  // The old version of these two tests hardcoded the transcript 'four' against
  // whatever word the pool happened to serve, so even had they reached the
  // screen they could only have matched by coincidence. Both now read the
  // gloss off the page and feed THAT back.
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(SR_MOCK_SCRIPT);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.route('/api/pronunciation-assess', (r) =>
      r.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false }) }),
    );
    await page.route('/api/pronunciation-coach', (r) =>
      r.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ feedback: 'You recognized the meaning correctly!', issue: '', phonetic_guide: '', drills: [] }),
      }),
    );
  });

  test('the panel does not print the English word back as what you said', async ({ page }) => {
    await openSpeaking(page);
    const english = (await page.getByTestId('speaking-gloss').first().textContent())?.trim();
    expect(english && english.length).toBeGreaterThan(0);
    await page.evaluate((e) => {
      window.__mockSR__ = { transcripts: [e], delay: 100 };
    }, english);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toBeVisible({ timeout: 6_000 });

    const bodyText = (await page.locator('body').textContent()) || '';
    expect(bodyText).not.toContain(`You said: “${english}”`);
    expect(bodyText).not.toContain(`You said: "${english}"`);
    expect(bodyText).not.toContain('🔴 Try again');
  });

  test('recognition via the translation is treated as correct', async ({ page }) => {
    await openSpeaking(page);
    const english = (await page.getByTestId('speaking-gloss').first().textContent())?.trim();
    await page.evaluate((e) => {
      window.__mockSR__ = { transcripts: [e], delay: 100 };
    }, english);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toBeVisible({ timeout: 6_000 });

    // No acoustic score is claimed for a translation match — the panel says the
    // meaning was recognised instead of inventing a percentage (NEVER-DO 13).
    await expect(page.getByTestId('webspeech-result')).toContainText(/recogni[sz]ed|matched the meaning/i);
    await expect(page.locator('body')).not.toContainText('🔴 Try again');
  });
});

// ===========================================================================
// 5. Mic error handling
// ===========================================================================

test.describe('Microphone error handling', () => {
  test('a refused microphone is explained, not swallowed', async ({ page }) => {
    // SR_MOCK_SCRIPT raises 'no-speech' when no transcripts are configured; this
    // test wants 'not-allowed', so it installs its own recogniser — but it now
    // reaches the screen, which is the part that never happened before.
    await page.addInitScript(`
      (function () {
        class DeniedSR {
          constructor() { this.lang = 'hr-HR'; this.maxAlternatives = 3; }
          start() {
            setTimeout(() => {
              this.onerror?.({ error: 'not-allowed', type: 'not-allowed' });
              setTimeout(() => this.onend?.(), 60);
            }, 120);
          }
          stop() { setTimeout(() => this.onend?.(), 60); }
          abort() { setTimeout(() => this.onend?.(), 60); }
        }
        window.SpeechRecognition = DeniedSR;
        window.webkitSpeechRecognition = DeniedSR;
        if (typeof MediaRecorder !== 'undefined') MediaRecorder.isTypeSupported = () => false;
      })();
    `);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.route('/api/pronunciation-assess', (r) =>
      r.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false }) }),
    );
    await page.route('/api/pronunciation-coach', (r) =>
      r.fulfill({ contentType: 'application/json', body: JSON.stringify({ feedback: 'Good!', issue: '', phonetic_guide: '', drills: [] }) }),
    );

    await openSpeaking(page);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();

    // The learner is TOLD, in words about the microphone — not left with a
    // spinner and not shown a raw error code. Unconditional: the old version
    // asserted this inside `if (bodyText includes permission|microphone|allow)`,
    // which is the assertion checking itself.
    await expect(page.locator('body')).toContainText(/microphone|permission|allow/i, {
      timeout: 6_000,
    });
    await expect(page.locator('body')).not.toContainText('not-allowed');
    await expect(page.locator('body')).not.toContainText('Something went wrong');
    // And the way back is still offered.
    await expect(page.getByRole('button', { name: /Test My Pronunciation/i }).first()).toBeVisible();
  });
});

// ===========================================================================
// 6. Score badge display thresholds
// ===========================================================================

test.describe('Score badge thresholds', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(SR_MOCK_SCRIPT);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.route('/api/pronunciation-assess', (r) =>
      r.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false }) }),
    );
    await page.route('/api/pronunciation-coach', (r) =>
      r.fulfill({ contentType: 'application/json', body: JSON.stringify({ feedback: 'Keep practicing!', issue: '', phonetic_guide: '', drills: [] }) }),
    );
  });

  test('scoring throws no JS errors', async ({ page }) => {
    const jsErrors = [];
    page.on('pageerror', (err) => jsErrors.push(err.message));

    await openSpeaking(page);
    const word = await targetWord(page);
    await page.evaluate((w) => {
      window.__mockSR__ = { transcripts: [w, w + 'a'], delay: 100 };
    }, word);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toBeVisible({ timeout: 6_000 });

    const unexpected = jsErrors.filter(
      (e) =>
        !e.includes('firebase') &&
        !e.includes('firestore') &&
        !e.includes('fetch') &&
        !e.includes('AbortError'),
    );
    expect(unexpected).toHaveLength(0);
  });

  test('a near miss is scored below a perfect match, and both state a percentage', async ({ page }) => {
    await openSpeaking(page);
    const word = await targetWord(page);

    const read = async () => {
      const t = (await page.getByTestId('webspeech-result').textContent()) || '';
      const m = t.match(/(\d+)%/);
      expect(m, 'the verdict states a percentage').not.toBeNull();
      return parseInt(m[1], 10);
    };

    await page.evaluate((w) => {
      window.__mockSR__ = { transcripts: [w], delay: 100 };
    }, word);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toBeVisible({ timeout: 6_000 });
    const exact = await read();

    // Try Again returns the scorer to idle — the second half of what this
    // describe used to claim to test, and the reason the retry path is here.
    await page.getByRole('button', { name: /Try Again/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Test My Pronunciation/i }).first()).toBeVisible();

    // A mangled attempt scores lower than the exact one.
    await page.evaluate((w) => {
      window.__mockSR__ = { transcripts: ['zzz' + w.slice(2) + 'qq'], delay: 100 };
    }, word);
    await page.getByRole('button', { name: /Test My Pronunciation/i }).first().click();
    await expect(page.getByTestId('webspeech-result')).toBeVisible({ timeout: 6_000 });
    const mangled = await read();

    expect(exact).toBeGreaterThan(mangled);
  });
});
// The MC quiz was reached through the same dead panel. Covered by
// `e2e/month-audit.spec.js` and `e2e/week-audit.spec.js`.


// ===========================================================================
// 10. Profile / Me tab persistence
// ===========================================================================

test.describe('Profile persistence', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/me');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
  });

  test('shows seeded XP and streak values on profile', async ({ page }) => {
    const body = await page.locator('body').textContent();
    // Seeded stats: xp=250, streak=5
    expect(body).toContain('250');
  });

  test('streak count matches seeded value', async ({ page }) => {
    // Seeded streak = 5
    await expect(page.getByText(/5/i).first()).toBeVisible();
  });

  test('level badge visible', async ({ page }) => {
    await expect(page.getByText(/Level|Lv\./i).first()).toBeVisible({ timeout: 2_000 });
  });

  // 'settings accessible from profile tab' was removed here: it looked for a
  // button named /settings|⚙️/, found none (Settings is a `.profile-tab-pill`),
  // and so asserted nothing. Its subject is `e2e/me-tab.spec.js`'s
  // 'clicking Settings pill switches to Settings content', which drives the
  // real control.

  test('localStorage not cleared on profile tab visit', async ({ page }) => {
    // beforeEach navigated to /me. Verify seeded XP (250) is still rendered in the DOM.
    // (Avoid page.evaluate — the app may still be navigating when it runs, causing
    // "Execution context was destroyed" or SecurityError on about:blank.)
    await expect(page.getByText('250').first()).toBeVisible({ timeout: 2_000 });
  });
});

// ===========================================================================
// 11. Streak mechanics
// ===========================================================================

test.describe('Streak mechanics', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
  });

  test('streak earn-back token visible when yesterday streak broke', async ({ page }) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yd = localYMD(yesterday); // local, matching the app's localDateStr()

    // Use addInitScript (not evaluate) — page is still at about:blank here, so
    // page.evaluate() throws SecurityError: localStorage access denied on about:blank.
    // addInitScript registers a script that runs on the next page.goto() navigation.
    await page.addInitScript((ydStr) => {
      // Simulate: had 15-day streak, broke yesterday
      const eb = { streak: 15, lc: 0, date: ydStr };
      localStorage.setItem('nh_earn_back', JSON.stringify(eb));
      try {
        const stats = JSON.parse(localStorage.getItem('nh_stats') || '{}');
        stats.streak = 0;  // streak broke
        localStorage.setItem('nh_stats', JSON.stringify(stats));
      } catch (_) {}
    }, yd);

    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });

    // Earn-back banner or token should be visible
    // `if (body includes earn) expect(body to match earn)` is a tautology: it
    // cannot fail, whatever Home renders. Seeded with a streak that broke
    // yesterday, the recovery offer is the behaviour under test, so assert it.
    await expect(page.locator('body')).toContainText(/earn|recover|repair|restore/i, {
      timeout: 8_000,
    });
  });

  test('streak of exactly 7 shows "a full week" message', async ({ page }) => {
    // addInitScript not evaluate — page hasn't navigated yet so localStorage is inaccessible
    await page.addInitScript(() => {
      try {
        const stats = JSON.parse(localStorage.getItem('nh_stats') || '{}');
        stats.streak = 7;
        // LOCAL date — the app compares against localDateStr(), and
        // toISOString() (UTC) is a different day near midnight off-UTC.
        const d = new Date();
        stats.lastDate =
          d.getFullYear() +
          '-' +
          String(d.getMonth() + 1).padStart(2, '0') +
          '-' +
          String(d.getDate()).padStart(2, '0');
        localStorage.setItem('nh_stats', JSON.stringify(stats));
      } catch (_) {}
    });

    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });

    // Knight Hrvoje should say "a full week" for exactly 7
    const body = await page.locator('body').textContent();
    if (body.includes('streak')) {
      // Should say "full week" but ONLY at 7, not 8+
      // We can't guarantee Hrvoje is visible, but confirm no regression
      const hasWrongWeekText = body.includes('8-day streak — a full week') ||
                               body.includes('9-day streak — a full week') ||
                               body.includes('10-day streak — a full week');
      expect(hasWrongWeekText).toBe(false);
    }
  });

  test('streak of 8 does NOT say "a full week"', async ({ page }) => {
    await page.addInitScript(() => {
      try {
        const stats = JSON.parse(localStorage.getItem('nh_stats') || '{}');
        stats.streak = 8;
        // LOCAL date — the app compares against localDateStr(), and
        // toISOString() (UTC) is a different day near midnight off-UTC.
        const d = new Date();
        stats.lastDate =
          d.getFullYear() +
          '-' +
          String(d.getMonth() + 1).padStart(2, '0') +
          '-' +
          String(d.getDate()).padStart(2, '0');
        localStorage.setItem('nh_stats', JSON.stringify(stats));
      } catch (_) {}
    });

    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });

    const body = await page.locator('body').textContent();
    const incorrectText = body.includes('8-day streak — a full week') ||
                          body.match(/8.day streak.*full week/i);
    expect(incorrectText).toBeFalsy();
  });
});

// ===========================================================================
// 12. Audio system — no "Audio Unavailable" on desktop Chrome
// ===========================================================================

test.describe('Audio system', () => {
  // These used to click "the first 🔊 button on the home screen", inside a
  // visibility guard, and assert nothing when there wasn't one. The speaker
  // this file is actually about is the one beside the word being practised.
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(SR_MOCK_SCRIPT);
    await seedAuth(page);
    await blockFirebase(page);
    await mockContent(page);
  });

  test('the speaker button requests TTS and never says audio is unavailable', async ({ page }) => {
    let body = null;
    await page.route('**/api/tts', (route) => {
      body = route.request().postDataJSON();
      route.fulfill({ status: 200, contentType: 'audio/wav', body: silentWav(80) });
    });

    await openSpeaking(page);
    const word = await targetWord(page);
    await page.getByRole('button', { name: /Normal/i }).first().click();

    // The request is made, and it carries the word on screen — not an empty
    // string, which is what a silently-broken `text` prop would send.
    await expect.poll(() => body, { timeout: 6_000 }).not.toBeNull();
    expect(typeof body.text).toBe('string');
    expect(body.text.length).toBeGreaterThan(0);
    expect(body.text).toContain(word);

    await expect(page.locator('body')).not.toContainText('Audio Unavailable');
  });

  test('the slow speaker asks for the slow rendering of the same word', async ({ page }) => {
    const calls = [];
    await page.route('**/api/tts', (route) => {
      calls.push(route.request().postDataJSON());
      route.fulfill({ status: 200, contentType: 'audio/wav', body: silentWav(80) });
    });

    await openSpeaking(page);
    const word = await targetWord(page);
    await page.getByRole('button', { name: /Slow/i }).first().click();

    await expect.poll(() => calls.length, { timeout: 6_000 }).toBeGreaterThan(0);
    const slow = calls.find((c) => c && c.slow);
    expect(slow, 'the slow button asks for slow audio').toBeTruthy();
    expect(slow.text).toContain(word);
  });
});

// ===========================================================================
// 13. LearnPath sequential integrity
// ===========================================================================

test.describe('LearnPath sequential flow', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/learn');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
  });

  // The Learn path WIDGET was retired; the `learnpath` SCREEN it linked to is
  // what this block has always been about, so these tests now open the screen
  // through the link that survived the widget rather than asserting its header.
  test('the full path opens from the Learn tab', async ({ page }) => {
    await page.getByTestId('open-learn-path').click();
    await expect(page.getByText(/level\s+\d+/i).first()).toBeVisible({ timeout: 10_000 });
  });

  test('path items render without crashing', async ({ page }) => {
    const jsErrors = [];
    page.on('pageerror', e => jsErrors.push(e.message));
    await page.waitForTimeout(400);
    const unexpected = jsErrors.filter(e =>
      !e.includes('firebase') && !e.includes('firestore') && !e.includes('fetch') && !e.includes('AbortError')
    );
    expect(unexpected).toHaveLength(0);
  });

  // 'clicking a path item navigates without blank screen' was removed here:
  // none of `[data-path-item]`, `.path-item` or `.lp-item` is rendered
  // anywhere in `src/`, so the body never ran. "Opening a screen does not go
  // blank" is now covered for EVERY route, not one path tile, by
  // `e2e/route-render-sweep.spec.js`.

  test('Listening lesson accessible after Reading completed (lp16 fix)', async ({ page }) => {
    // Seed stats that unlock Listening (lc >= 12 OR gc >= 2)
    await page.evaluate(() => {
      const stats = JSON.parse(localStorage.getItem('nh_stats') || '{}');
      stats.gc = 2;   // 2 grammar sessions — satisfies the old condition
      stats.lc = 12;  // also satisfies the new fallback
      localStorage.setItem('nh_stats', JSON.stringify(stats));
    });
    await page.reload();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
    await page.getByTestId('open-learn-path').click();
    await expect(page.getByText(/level\s+\d+/i).first()).toBeVisible({ timeout: 10_000 });

    // Listening item should NOT be locked
    const lockedListening = page.getByText(/Listening.*locked|locked.*Listening/i);
    expect(await lockedListening.isVisible({ timeout: 800 }).catch(() => false)).toBe(false);
  });
});

// ===========================================================================
// 14. Navigation — all tabs accessible
// ===========================================================================

test.describe('Navigation smoke test', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
  });

  const tabs = [
    { name: 'Home', href: '/', text: /Level|streak|XP/i },
    { name: 'Learn', href: '/learn', text: /My Path|Grammar|Lesson/i },
    { name: 'Practice', href: '/practice', text: /Practice|Drill|Game/i },
    { name: 'Croatia', href: '/croatia', text: /Croatia|Hrvatska|Discover/i },
    { name: 'Profile', href: '/me', text: /Level|streak|XP|Profile/i },
  ];

  for (const tab of tabs) {
    test(`${tab.name} tab navigates and renders content`, async ({ page }) => {
      const jsErrors = [];
      page.on('pageerror', e => jsErrors.push(e.message));

      await page.goto(tab.href);
      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
      await expect(page.locator('body')).not.toContainText('Something went wrong', { timeout: 5_000 });

      // Wait for the React app to render meaningful content before asserting on it.
      // `not.toBeEmpty()` is satisfied by a SINGLE character, so it does not actually
      // establish that the tab has hydrated — and the length check that followed it
      // read textContent() once, into a plain value, so `toBeGreaterThan(100)` had no
      // auto-waiting left to do. Observed on CI: bodies of 0, 20 and 53 characters
      // failing on the first attempt and passing on retry ~2s later.
      // expect.poll re-reads until the body is actually populated. The threshold is
      // unchanged at >100 — this makes the existing assertion wait properly, it does
      // not relax what is being asserted.
      await expect
        .poll(async () => ((await page.locator('body').textContent()) ?? '').trim().length, {
          timeout: 10_000,
        })
        .toBeGreaterThan(100);

      const unexpected = jsErrors.filter(e =>
        !e.includes('firebase') && !e.includes('firestore') && !e.includes('fetch') && !e.includes('AbortError')
      );
      expect(unexpected).toHaveLength(0);
    });
  }
});

// ===========================================================================
// 15. Croatia tab sub-sections
// ===========================================================================

test.describe('Croatia tab', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/croatia');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
  });

  test('Croatia tab loads without error', async ({ page }) => {
    const body = await page.locator('body').textContent();
    expect(body.trim().length).toBeGreaterThan(50);
    expect(body).not.toContain('Something went wrong');
  });

  test('doors surface accessible', async ({ page }) => {
    await expect(page.getByText('Danas u Hrvatskoj')).toBeVisible({ timeout: 15_000 });
    await page.getByText('Krajevi').first().click();
    await expect(page.getByText('← Hrvatska')).toBeVisible({ timeout: 8_000 });
    const body = await page.locator('body').textContent();
    expect(body.trim().length).toBeGreaterThan(50);
  });

  test('no seasonal banner for past holidays (Easter fix)', async ({ page }) => {
    const body = await page.locator('body').textContent();
    // Easter banner should not appear after Easter 2025
    const easterTerms = ['Uskrs u Hrvatskoj', 'Easter in Croatia'];
    // These may appear in cultural content — but NOT as a promotional banner
    // with a dismiss button / featured overlay
    const bannerLocator = page.locator('[class*="banner"], [class*="seasonal"]').filter({ hasText: /Uskrs|Easter/i });
    expect(await bannerLocator.isVisible({ timeout: 1_000 }).catch(() => false)).toBe(false);
  });
});

// ===========================================================================
// 16. Offline / error boundary resilience
// ===========================================================================

test.describe('Offline resilience', () => {
  test('app shows graceful state when all API calls fail', async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    // Block ALL API calls
    await page.route('/api/**', route => route.abort());
    await mockTTS(page);
    await mockContent(page); // override — TTS needs to work

    const jsErrors = [];
    page.on('pageerror', e => jsErrors.push(e.message));

    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
    await page.waitForTimeout(200);

    // App must not white-screen — navigation must still render
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    const body = await page.locator('body').textContent();
    expect(body.trim().length).toBeGreaterThan(100);

    const critical = jsErrors.filter(e =>
      !e.includes('firebase') && !e.includes('firestore') && !e.includes('fetch') &&
      !e.includes('AbortError') && !e.includes('NetworkError') && !e.includes('Failed to fetch')
    );
    expect(critical).toHaveLength(0);
  });
});

// ===========================================================================
// 17. XP/level progression — boundary conditions
// ===========================================================================

test.describe('XP and level boundary conditions', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({ timeout: 10_000 });
  });

  test('XP value renders as a number without NaN or undefined', async ({ page }) => {
    // Seeded XP is 250 — verify it renders cleanly with no corruption
    const body = await page.locator('body').textContent();
    expect(body).not.toMatch(/NaN|undefined/i);
    expect(body).toContain('250');
  });

  test('level indicator renders without errors', async ({ page }) => {
    const body = await page.locator('body').textContent();
    expect(body).not.toContain('Something went wrong');
    expect(body).not.toMatch(/NaN|undefined/i);
    await expect(page.getByText(/Level|Lv\./i).first()).toBeVisible({ timeout: 2_000 });
  });
});
