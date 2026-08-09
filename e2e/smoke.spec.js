/**
 * Production smoke tests — run against the deployed site (production by default,
 * or any URL via SMOKE_BASE_URL, so a preview can be checked before merge).
 * Checks: site is up, no JS crashes, PWA assets load, security headers present.
 *
 * Runs twice daily (08:00 and 20:00 UTC) via .github/workflows/production-smoke.yml,
 * plus workflow_dispatch. Deliberately NOT on push: a push-triggered run fires
 * before Cloudflare finishes deploying, so it would test the previous build.
 * (The old header here said "every 6 hours + on every push" — neither was true.)
 */
import { test, expect } from '@playwright/test';

test.describe('Production smoke — site availability', () => {
  test('homepage returns HTTP 200', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('page title contains Naša Hrvatska', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Naša Hrvatska/i, { timeout: 30_000 });
  });

  // Guards against a Cloudflare edge block/challenge being served to real users.
  // On 2026-06-27 macOS/Private-Relay users were shown "Attention Required! |
  // Cloudflare" → "Sorry, you have been blocked" while every other monitor was
  // green. CI runs from clean datacenter IPs so it won't reproduce an IP-scoped
  // block — but if a block is ever broad enough to hit a clean IP, this fails
  // loudly and the workflow auto-files a critical issue.
  test('homepage is not a Cloudflare block / challenge page', async ({ page }) => {
    const response = await page.goto('/');
    expect(
      response?.headers()?.['cf-mitigated'],
      'cf-mitigated header present → Cloudflare is challenging/blocking this request',
    ).toBeFalsy();
    const title = await page.title();
    expect(title, `Got Cloudflare interstitial title: "${title}"`).not.toMatch(
      /Attention Required/i,
    );
    const body = await page.evaluate(() => document.body?.innerText ?? '');
    expect(body, 'Homepage body contains a Cloudflare block-page phrase').not.toMatch(
      /you have been blocked|Sorry, you have been blocked/i,
    );
  });

  // Collect the evidence a blank #root needs. On 2026-08-04/05 this test failed
  // twice on WebKit and produced no diagnosis at all, because the one error that
  // explains an empty root — WebKit's "Importing a module script failed" — is on
  // the ignore list in the crash test below. The symptom was asserted and the
  // cause was suppressed, so the failure said only "empty".
  function watchAssets(page) {
    const requestFailures = [];
    const badResponses = [];
    const moduleErrors = [];
    page.on('requestfailed', (r) => {
      requestFailures.push(`${r.method()} ${r.url()} — ${r.failure()?.errorText ?? 'failed'}`);
    });
    page.on('response', (r) => {
      if (!/\.(?:js|mjs)(?:$|\?)/.test(r.url())) return;
      const ct = r.headers()['content-type'] || '(no content-type)';
      // A script served as text/html is production Incident 1 all over again —
      // WebKit refuses to execute it where Chrome is often lenient.
      if (r.status() >= 400 || !/javascript|ecmascript/i.test(ct)) {
        badResponses.push(`${r.status()} ${ct} ${r.url()}`);
      }
    });
    page.on('pageerror', (e) => {
      if (/module script|Importing a module/i.test(e.message)) moduleErrors.push(e.message);
    });
    const fmt = (label, xs) =>
      `${label}:\n${xs.length ? xs.map((x) => `  - ${x}`).join('\n') : '  (none)'}`;
    return () =>
      [
        '',
        '── DIAGNOSTICS ──────────────────────────────────────────────',
        fmt('Failed asset requests', requestFailures),
        fmt('JS responses that were non-2xx or not a JavaScript MIME type', badResponses),
        fmt('Module-import errors', moduleErrors),
      ].join('\n');
  }

  test('app root renders — not a blank white screen', async ({ page }) => {
    const diagnostics = watchAssets(page);
    await page.goto('/');
    try {
      // index.html ships a static boot shell (#nh-boot) inside #root, so
      // "#root is not empty" no longer proves anything — the shell satisfies
      // it even when the app never executes. React mounted ⇔ #root has
      // content AND the shell is gone (React's first render replaces it).
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return !!root && root.children.length > 0 && !document.getElementById('nh-boot');
        },
        { timeout: 20_000 },
      );
    } catch (err) {
      // Re-thrown with the asset evidence attached: an empty root is almost
      // always a script that never loaded or never executed, and which one it
      // was is the whole difference between a diagnosis and a shrug.
      throw new Error(`${err.message}\n${diagnostics()}`, { cause: err });
    }
  });

  test('app displays content within 25 seconds', async ({ page }) => {
    await page.goto('/');
    // Wait for React to render something — login screen OR main app. The
    // static boot shell (#nh-boot) also has visible text, so require it gone:
    // otherwise the shell alone would pass this within milliseconds.
    await page.waitForFunction(
      () => {
        const root = document.getElementById('root');
        if (!root || document.getElementById('nh-boot')) return false;
        return !!root.innerText && root.innerText.trim().length > 5;
      },
      { timeout: 25_000 },
    );
  });

  test('no unexpected JavaScript crashes on load', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/');
    // Give Firebase and React time to initialise
    await page.waitForTimeout(5_000);
    const fatal = errors.filter(
      (e) =>
        !e.includes('firebase') &&
        !e.includes('firestore') &&
        !e.includes('Failed to fetch') &&
        !e.includes('NetworkError') &&
        !e.includes('net::ERR') &&
        !e.includes('AbortError') &&
        !e.includes('service worker') &&
        !e.includes('ServiceWorker') &&
        !e.includes('access control checks') &&
        // Kept non-fatal ON PURPOSE: during a Cloudflare deploy rollover, a
        // lazily-imported chunk URL from the previous build can 404 for a few
        // seconds, and failing the gate on that would be pure flake. But this
        // ignore is also why an empty #root produced no diagnosis for two runs, so
        // the entry module now has its own hard status/MIME assertion below, and
        // the blank-root test prints every module error it saw.
        !e.includes('Importing a module script failed') &&
        !e.includes('sw.js'),
    );
    expect(fatal, `Unexpected JS errors on load: ${fatal.join(' | ')}`).toHaveLength(0);
  });
});

test.describe('Production smoke — PWA assets', () => {
  // The suite checked the MIME type of sw.js — because sw.js served as text/html
  // is one of this app's two documented service-worker incidents — but never
  // checked the entry module, which is the script that actually has to execute
  // for anything at all to render. A wrong status or MIME type here is a blank
  // white screen for every user on the browsers that enforce it strictly.
  test('entry module is served as JavaScript (blank-screen guard)', async ({ page }) => {
    await page.goto('/');
    const src = await page.evaluate(
      () => document.querySelector('script[type="module"][src]')?.getAttribute('src') ?? null,
    );
    expect(src, 'index.html must reference a type="module" entry script').toBeTruthy();

    // Relative, so it resolves against the config's baseURL like every other
    // request here. Hardcoding the production origin would silently keep testing
    // production if this suite were ever pointed at a preview deployment.
    const resp = await page.request.get(src);
    expect(resp.status(), `entry module ${src} must return 200`).toBe(200);
    expect(
      resp.headers()['content-type'] || '(no content-type)',
      `entry module ${src} must be served as JavaScript, or strict browsers refuse to execute it`,
    ).toMatch(/javascript|ecmascript/i);
  });

  test('service worker script is served correctly', async ({ page }) => {
    // Verify sw.js is served with the correct MIME type and status.
    // Playwright browser contexts don't reliably complete SW install/activate
    // against remote URLs (isolated context lifecycle), so we check the file
    // itself — if sw.js is served correctly, real browsers will register it.
    const resp = await page.request.get('/sw.js');
    expect(resp.status(), 'sw.js must return 200').toBe(200);
    const ct = resp.headers()['content-type'] || '';
    expect(ct, 'sw.js must be served as JavaScript').toMatch(/javascript/);
  });

  test('192x192 app icon is served', async ({ page }) => {
    const resp = await page.request.get('/icon-192.png');
    expect(resp.status()).toBe(200);
    expect(resp.headers()['content-type']).toContain('image/png');
  });

  test('512x512 app icon is served', async ({ page }) => {
    const resp = await page.request.get('/icon-512.png');
    expect(resp.status()).toBe(200);
  });

  test('apple-touch-icon is served', async ({ page }) => {
    const resp = await page.request.get('/apple-touch-icon.png');
    expect(resp.status()).toBe(200);
  });

  test('assetlinks.json is served (Android TWA domain verification)', async ({ page }) => {
    const resp = await page.request.get('/.well-known/assetlinks.json');
    expect(resp.status()).toBe(200);
  });

  test('web app manifest link tag is present in HTML head', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const manifestHref = await page.evaluate(() => {
      const link = document.querySelector('link[rel="manifest"]');
      return link?.href ?? null;
    });
    expect(manifestHref, 'manifest <link rel="manifest"> must exist in <head>').toBeTruthy();
    // Lighthouse validates the manifest content — smoke test only checks presence
  });
});

test.describe('Production smoke — security headers', () => {
  test('HTTPS is enforced (final URL is https://)', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.url()).toMatch(/^https:/);
  });

  test('X-Frame-Options or frame-ancestors CSP is set', async ({ page }) => {
    const response = await page.goto('/');
    const h = response?.headers() ?? {};
    const ok =
      'x-frame-options' in h || (h['content-security-policy'] ?? '').includes('frame-ancestors');
    expect(ok, 'Must have X-Frame-Options or CSP frame-ancestors').toBe(true);
  });

  test('Content-Security-Policy header is present', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.headers()?.['content-security-policy']).toBeTruthy();
  });
});
