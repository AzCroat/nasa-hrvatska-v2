/**
 * @vitest-environment node
 *
 * bootShell.test.ts — the static boot shell and the E2E mount predicates are
 * one contract, pinned together.
 *
 * index.html ships a branded loading shell (#nh-boot) INSIDE #root so the
 * seconds before React mounts paint something instead of a blank white page.
 * That makes every "#root is not empty" assertion vacuous: the shell satisfies
 * it even when the app bundle never executes — which is precisely the failure
 * the production blank-screen smoke test exists to catch. The specs therefore
 * assert "#root has content AND #nh-boot is gone" (React's first render
 * replaces the shell).
 *
 * This test fails if either half of that contract drifts:
 *   - the shell is renamed/moved/removed in index.html without updating the
 *     specs (their `!getElementById('nh-boot')` check would then pass while
 *     the shell is still on screen → smoke is blind again), or
 *   - a spec regresses to a bare emptiness check on #root.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');

describe('the static boot shell in index.html', () => {
  it('exists, inside #root, under the agreed id', () => {
    const rootIdx = html.indexOf('<div id="root">');
    // The ELEMENT, not the first mention — the id also appears in head comments/CSS.
    const bootIdx = html.indexOf('<div id="nh-boot"');
    expect(rootIdx, 'index.html must contain <div id="root">').toBeGreaterThan(-1);
    expect(bootIdx, 'the boot shell (id="nh-boot") is missing').toBeGreaterThan(-1);
    expect(bootIdx, 'the boot shell must live INSIDE #root so React replaces it').toBeGreaterThan(
      rootIdx,
    );
  });

  it('has its inline styles (a shell with no styling is an unstyled text flash)', () => {
    expect(html).toContain('#nh-boot {');
    // Reduced-motion users must not get an infinite spinner animation.
    expect(html).toContain('prefers-reduced-motion');
  });

  it('native-init.js applies the saved theme before first paint', () => {
    // The shell's dark styling keys on data-theme; native-init.js (external,
    // synchronous, before #root) is what sets it pre-paint. NOT inline in
    // index.html: the keepPublicScriptsExternal plugin fingerprints inline
    // scripts by native-init's first code line ("try {") and silently swallows
    // look-alike inline scripts at build time.
    const init = readFileSync('public/native-init.js', 'utf8');
    expect(init).toContain("localStorage.getItem('darkMode')");
    expect(init).toContain("setAttribute('data-theme'");
  });

  it("carries no <h1> — auth/guest specs assert the app's own h1", () => {
    const rootIdx = html.indexOf('<div id="root">');
    const shellEnd = html.indexOf('</div>', html.indexOf('nh-boot-spin'));
    // Strip HTML comments first — the rule is allowed to explain itself in one.
    // Looped to a fixed point: a single-pass replace can recombine fragments
    // into a fresh "<!--" (CodeQL js/incomplete-multi-character-sanitization).
    let markup = html.slice(rootIdx, shellEnd);
    for (let prev = ''; prev !== markup; ) {
      prev = markup;
      markup = markup.replace(/<!--[\s\S]*?-->/g, '');
    }
    expect(markup).not.toMatch(/<h1[\s>]/);
  });
});

describe('the E2E mount predicates know about the shell', () => {
  // Every spec whose "did the app render" check the shell would otherwise
  // satisfy. profile-persist is exempt: its beforeEach already waits for the
  // app's nav bar, which only exists after mount.
  const specs = ['e2e/smoke.spec.js', 'e2e/offline.spec.js', 'e2e/auth-edge-cases.spec.js'];

  it.each(specs)('%s excludes #nh-boot from its mount check', (spec) => {
    const src = readFileSync(spec, 'utf8');
    expect(src, `${spec} must gate on the boot shell being gone`).toContain('nh-boot');
  });

  it('smoke.spec no longer trusts a bare emptiness check on #root', () => {
    const src = readFileSync('e2e/smoke.spec.js', 'utf8');
    expect(
      /locator\(['"]#root['"]\)\)\s*\.not\.toBeEmpty/.test(src),
      'smoke.spec.js uses not.toBeEmpty on #root — the boot shell satisfies that even when the app never boots',
    ).toBe(false);
  });
});
