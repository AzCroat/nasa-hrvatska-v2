/**
 * dark-mode-ink.spec.js — in dark mode, no text may be painted with a DARK colour.
 *
 * WHY NOT axe. `route-render-sweep`'s axe pass counts `color-contrast` and asserts
 * nothing about it ("contrast aside"), and it could not judge this class even if it
 * did: axe reports **incomplete**, not a violation, for any element whose background
 * it cannot resolve, and this app paints its page with a `radial-gradient` on the
 * `.dark` wrapper. Measured on a 109-route sample in dark mode: **478 violation nodes
 * against 3,564 INCOMPLETE ones**. The 1,308 hardcoded dark inks this spec exists to
 * keep out were almost all in that incomplete bucket — which is why fixing every one
 * of them moved axe's violation count by a single node.
 *
 * WHAT THIS ASSERTS INSTEAD is an invariant that needs no background at all: in dark
 * mode the page is dark, so text is light. An element whose computed `color` is DARK
 * is either a defect or is sitting on a light surface it paints itself — and that
 * second case is detectable without compositing anything, by walking up for an
 * ancestor with an opaque light `background-color`.
 *
 * It runs over a sample rather than all 430 routes so it can sit in the ordinary
 * suite: the whole-tree question is answered statically by
 * `src/tests/inlineInkContrast.test.ts`, and this is the wiring half — proof that the
 * tokens actually resolve dark in a real browser, which no source test can give.
 */
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

/**
 * Routes chosen to span the surfaces the ink change touched, PLUS every route a
 * whole-app run of this same detector actually found broken (2026-09-27). The first six
 * were picked by reading the diff; the rest were picked by the browser, which is the
 * only reason they are here — a sample chosen from source cannot know that /verbdrill
 * had 120 unreadable elements.
 */
const ROUTES = [
  'discourse', // an engine-shaped drill: mode label, gloss, tip
  'countries', // a themed tint with a badge on it — the pairing case
  'certificate', // the profile surface
  'analytics', // the densest numeric surface in the app
  'imenicame', // a pre-engine drill
  'grammarmap', // a table-heavy reference screen
  'verbdrill', // 120 findings: every conjugated form, in a <button> inheriting UA black
  'alphabet', // 30, the same shape
  'readlist', // 63: level badges, ink on a ~9% tint of itself
  'crmap', // 20: category pills, same shape
  'negation', // 15: a bare <button> that DOES set its own dark ink
  'football', // 14: per-club identity colours used as text
  'croatiaathletes', // 11: a per-athlete accent on a 5% tint
];

test.describe('dark mode paints light ink', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.addInitScript(() => {
      if (window.top !== window) return; // an init script runs in EVERY frame
      try {
        localStorage.setItem('darkMode', 'true');
        localStorage.setItem('nh_dm_explicit', '1');
      } catch {
        /* storage blocked — the test fails visibly rather than silently */
      }
    });
  });

  /**
   * THE SINGLE BIGGEST INSTANCE OF THIS CLASS WAS FORM CONTROLS, AND IT NEEDS ITS OWN
   * ASSERTION because the route walk below can only say a page is clean today.
   *
   * A <button> does not inherit `color` — the UA stylesheet gives it `buttontext` — so
   * setting a base colour on body and on the theme wrapper fixed nothing for them.
   * Measured over all 430 routes in dark mode, 214 of 437 offending elements were text
   * inside a button that sets no colour of its own. This pins the normalisation that
   * fixes it, at the level that matters: what a real engine computes.
   */
  test('a <button> with no colour of its own follows the theme', async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto('/verbdrill');
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1200);
    const black = await page.evaluate(() => {
      const out = [];
      for (const el of document.body.querySelectorAll('button,input,select,textarea')) {
        if ((el.getAttribute('style') || '').match(/(?:^|;)\s*color\s*:/)) continue;
        const c = getComputedStyle(el).color;
        const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(c);
        if (!m) continue;
        if (+m[1] < 40 && +m[2] < 40 && +m[3] < 40) out.push(c);
      }
      return [...new Set(out)];
    });
    expect(
      black,
      'A form control that sets no colour of its own must INHERIT the theme. The UA ' +
        'stylesheet gives it `buttontext`, which is black, so in dark mode it is black ' +
        'on a dark card — that was 214 of 437 offending elements app-wide, including ' +
        'every conjugated form on this screen. `button,input,optgroup,select,textarea ' +
        '{ color: inherit }` in index.css is what fixes it.',
    ).toEqual([]);
  });

  for (const route of ROUTES) {
    test(`/${route} has no dark ink on a dark surface`, async ({ page }) => {
      test.setTimeout(90_000);
      await page.goto('/' + route);
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(1200); // let transitions finish — a 500ms read sampled
      // one route mid-transition and reported 3,741 nodes that settle to 0.

      const bad = await page.evaluate(() => {
        const lum = (r, g, b) => {
          const f = (x) => {
            const c = x / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          };
          return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
        };
        const parse = (s) => {
          // A `color-mix()` computes to `color(srgb r g b / a)` with channels in 0..1,
          // NOT to `rgb(...)`. A parser that only knows `rgba?(` returns null for it and
          // this walker then SKIPS the element — so the moment any ink is expressed as a
          // mix, the guard stops seeing it while still reading green. Both forms here.
          const cf = /color\(\s*srgb\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s+([\d.eE+-]+)(?:\s*\/\s*([\d.eE+-]+))?\s*\)/.exec(
            s || '',
          );
          if (cf) {
            const rgb = [1, 2, 3].map((i) => parseFloat(cf[i]) * 255);
            return { rgb, a: cf[4] === undefined ? 1 : parseFloat(cf[4]) };
          }
          const m = /rgba?\(([^)]+)\)/.exec(s || '');
          if (!m) return null;
          const p = m[1].split(',').map((v) => parseFloat(v));
          return p.length >= 3 ? { rgb: p.slice(0, 3), a: p.length > 3 ? p[3] : 1 } : null;
        };
        const out = [];
        for (const el of document.querySelectorAll('*')) {
          // only elements that actually paint text of their own
          const text = [...el.childNodes]
            .filter((n) => n.nodeType === 3)
            .map((n) => n.textContent.trim())
            .join('');
          if (!text) continue;
          // An emoji or a pictograph is painted by the font, not by `color` — 25 flag
          // spans on /countries reported black ink that no learner can see. Require a
          // letter or a digit before judging an element's ink.
          if (!/[\p{L}\p{N}]/u.test(text)) continue;
          const cs = getComputedStyle(el);
          if (cs.visibility === 'hidden' || cs.display === 'none' || cs.opacity === '0') continue;
          const fg = parse(cs.color);
          if (!fg || fg.a < 0.5) continue;
          // DARK ink: luminance below the midpoint between the dark card and white
          if (lum(...fg.rgb) > 0.18) continue;
          // Is it on a light surface something in its own chain paints opaquely?
          let p = el;
          let onLight = false;
          while (p && p !== document.documentElement) {
            const b = parse(getComputedStyle(p).backgroundColor);
            if (b && b.a >= 0.9) {
              onLight = lum(...b.rgb) > 0.18;
              break;
            }
            p = p.parentElement;
          }
          if (onLight) continue;
          out.push(
            `${cs.color} — "${text.slice(0, 40)}" — ${(el.getAttribute('style') || el.className || el.tagName).toString().slice(0, 70)}`,
          );
        }
        return [...new Set(out)];
      });

      expect(
        bad,
        'In dark mode the page is dark, so its text must be light. Each of these ' +
          'elements paints DARK text and nothing in its own chain paints a light ' +
          'surface under it — so it is dark-on-dark. Use one of the --ink-* tokens.',
      ).toEqual([]);
    });
  }
});
