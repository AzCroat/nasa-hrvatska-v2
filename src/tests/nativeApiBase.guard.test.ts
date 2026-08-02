import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

/**
 * Class guard: no bare `fetch()` in src/ may take a relative '/api/...' URL.
 *
 * WHY THIS IS A WHOLE CLASS, not three separate bugs
 * --------------------------------------------------
 * On Capacitor native the app is served from https://localhost, which has no
 * Pages Functions. Capacitor's WebViewLocalServer (html5mode, which defaults to
 * true and is not overridden in capacitor.config.ts) routes any request whose
 * last path segment contains no dot back to the bundled index.html — as
 * text/html, with status **200**.
 *
 * So a relative '/api/...' on native does not 404 and does not throw a network
 * error. It returns a web page that looks like a success:
 *
 *   res.ok      → true
 *   res.status  → 200
 *   res.json()  → throws SyntaxError ("Unexpected token '<'")
 *
 * Every caller therefore fails in whatever way its own error handling happens to
 * fall through to — "empty response", "check your internet", "Verification
 * failed" — none of which point at the actual cause. Three transports were fixed
 * one at a time as each symptom was reported (_aiPost, then _nativePost, then
 * apiFetch and contentClient); this test exists so the fourth one is caught at
 * commit time instead of by a user on a phone.
 *
 * THE RULE
 * --------
 * Any call to a Pages Function must resolve against an absolute base:
 *   - `apiFetch()`      — prefixes API_BASE internally (src/lib/apiFetch.ts)
 *   - `_aiPost()`       — prefixes API_BASE internally (src/lib/aiPost.ts)
 *   - `_nativePost()`   — walks _NATIVE_ENDPOINTS (src/lib/nativePost.ts)
 *   - `contentClient`   — prefixes API_BASE in fetchAuthed
 *   - or `API_BASE + '/api/...'` directly, for one-off unauthenticated calls
 *     such as the Turnstile pre-registration check in useAuth.
 *
 * Static bundled assets are NOT covered by this rule and must stay relative:
 * '/version.json' has a dot in its last segment, so Capacitor serves the real
 * bundled file rather than the html5mode fallback. That is correct behaviour and
 * the pattern below only matches '/api/' paths, so it does not flag it.
 */

const SRC = join(process.cwd(), 'src');

// Case-sensitive on purpose: `apiFetch(` contains a capital F, so a lowercase
// `fetch(` cannot match it. This finds bare fetch/window.fetch/globalThis.fetch
// and leaves the sanctioned wrappers alone.
const BARE_RELATIVE_API = /\bfetch\(\s*['"`]\/api\//g;

// fetch() is not the only transport that can reach a Pages Function, and this
// guard originally only knew about it — which is how useSyncManager's
// `navigator.sendBeacon('/api/save-progress', …)` sat here unflagged.
//
// sendBeacon fails WORSE than fetch on native, not better. It returns a boolean
// that only means "queued for sending", never "delivered", so there is no
// response to inspect and no error to catch: the html5mode handler answers with
// index.html and the caller cannot tell. That beacon is the close-the-app save,
// so on native it silently discarded any progress not already in Firestore.
const BARE_RELATIVE_BEACON = /sendBeacon\(\s*['"`]\/api\//g;

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      // Tests legitimately assert on relative URLs (they are the web contract).
      if (entry === 'tests' || entry === '__tests__') continue;
      walk(full, out);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry)) {
      out.push(full);
    }
  }
  return out;
}

describe('native API base — class guard', () => {
  const files = walk(SRC);

  it('scans a plausible number of source files (guard against a broken walker)', () => {
    // If the walker silently returns nothing, the assertion below would pass
    // vacuously — which is exactly how an earlier sweep of this kind missed
    // cases. Pin a floor.
    expect(files.length).toBeGreaterThan(200);
  });

  it('no source file calls bare fetch() with a relative /api/ URL', () => {
    const offenders: string[] = [];
    for (const file of files) {
      const code = readFileSync(file, 'utf8');
      for (const m of code.matchAll(BARE_RELATIVE_API)) {
        const line = code.slice(0, m.index).split('\n').length;
        offenders.push(`${relative(process.cwd(), file)}:${line}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it('no source file calls sendBeacon() with a relative /api/ URL', () => {
    const offenders: string[] = [];
    for (const file of files) {
      const code = readFileSync(file, 'utf8');
      for (const m of code.matchAll(BARE_RELATIVE_BEACON)) {
        const line = code.slice(0, m.index).split('\n').length;
        offenders.push(`${relative(process.cwd(), file)}:${line}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it('both sendBeacon call sites resolve against an absolute base', () => {
    // Presence of the base, asserted per file: the pattern check above only
    // proves the literal '/api/...' form is gone, which a refactor into a
    // template string would satisfy while still being relative.
    const beaconFiles: Array<[string, RegExp]> = [
      // The close-the-app progress save.
      ['src/hooks/useSyncManager.ts', /sendBeacon\(\s*API_BASE \+ '\/api\/save-progress'/],
      // errorReporter keeps its own call-time base helper rather than API_BASE —
      // see the note in that file about the Capacitor bridge being injected
      // asynchronously. Same result, different evaluation moment.
      ['src/lib/errorReporter.ts', /sendBeacon\(\s*`\$\{_getNativeApiBase\(\)\}\/api\//],
    ];
    for (const [file, pattern] of beaconFiles) {
      const code = readFileSync(join(process.cwd(), file), 'utf8');
      expect(code, `${file} must resolve its beacon URL absolutely`).toMatch(pattern);
    }
  });

  it('the three transports and contentClient each resolve against API_BASE', () => {
    const expectAbsolute: Array<[string, RegExp]> = [
      ['src/lib/apiFetch.ts', /API_BASE \+ url/],
      ['src/lib/aiPost.ts', /API_BASE \+ path/],
      ['src/lib/contentClient.ts', /API_BASE \+ path/],
      // _nativePost uses its own ordered endpoint list rather than API_BASE.
      ['src/lib/nativePost.ts', /_NATIVE_ENDPOINTS/],
    ];
    for (const [file, pattern] of expectAbsolute) {
      const code = readFileSync(join(process.cwd(), file), 'utf8');
      expect(code, `${file} must resolve API paths absolutely`).toMatch(pattern);
    }
  });

  it('useAuth resolves the Turnstile verify call against API_BASE', () => {
    // Reachable only when VITE_TURNSTILE_SITEKEY is set at build time, but when
    // it is, a relative URL made native registration impossible: the html5mode
    // HTML came back 200, .json() threw into the catch, verifyJson.ok was
    // undefined, and the user saw "Verification failed. Please try again."
    const code = readFileSync(join(process.cwd(), 'src/hooks/useAuth.ts'), 'utf8');
    expect(code).toMatch(/fetch\(`\$\{API_BASE\}\/api\/turnstile\/verify`/);
  });
});
