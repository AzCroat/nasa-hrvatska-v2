/**
 * accentInk — a per-item accent colour made safe to paint TEXT with in either theme.
 *
 * WHAT THIS PINS AND WHY EACH CLAUSE EARNED ITS PLACE:
 *
 *  - LIGHT MODE MUST BE BYTE-EXACT. The whole safety argument for changing 173 call
 *    sites at once is that a 0% mix computes to the input's own channels, so light mode
 *    cannot move. That is a BROWSER fact, not a source fact, so it is asserted in
 *    `e2e/dark-mode-ink.spec.js` against a real engine; here we pin the expression that
 *    makes it true, including `in srgb` — `in oklab` computes to `oklab(...)` and `#333`
 *    at 0% comes back with non-zero a/b, i.e. off pure grey.
 *  - THE TWO PASS-THROUGHS ARE LOAD-BEARING, not defensive padding. A `var(--…)` input
 *    arrives from `ConstellationData`'s `ink` field through the same prop a raw accent
 *    would, and a falsy input arrives at the `||` sites, where a truthy invalid mix would
 *    stop the fallback firing and the element would silently inherit.
 *  - THE MODULE MUST NOT IMPORT ANYTHING. It is imported by 75 components including four
 *    on the first-paint path, so a single import here would pull that module's graph onto
 *    it (the trap `firstPaintGraph` exists for).
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { accentInk, INK_LIFT_VAR } from '../lib/accentInk';

describe('accentInk', () => {
  it('mixes a raw accent toward white by the theme-owned lift', () => {
    expect(accentInk('#003da5')).toBe('color-mix(in srgb, #003da5, #fff var(--ink-lift))');
    expect(accentInk('rgb(29, 29, 27)')).toBe(
      'color-mix(in srgb, rgb(29, 29, 27), #fff var(--ink-lift))',
    );
  });

  it('mixes in srgb, not oklab — oklab drifts a 0% mix off the input', () => {
    expect(accentInk('#333')).toContain('in srgb');
    expect(accentInk('#333')).not.toContain('oklab');
  });

  it('names the lift variable rather than inlining a percentage', () => {
    // A literal 62% here would be a second place to remember, and light mode would then
    // have no way to be 0%.
    expect(INK_LIFT_VAR).toBe('--ink-lift');
    expect(accentInk('#000')).toContain(`var(${INK_LIFT_VAR})`);
    expect(accentInk('#000')).not.toMatch(/\d+%/);
  });

  it('passes a theme token through untouched', () => {
    // ConstellationData gives each case an `ink` field that is already a token; lifting it
    // would wash out a colour the theme had already chosen for dark mode.
    expect(accentInk('var(--ink-accent)')).toBe('var(--ink-accent)');
    expect(accentInk('  var(--ink-red)  ')).toBe('  var(--ink-red)  ');
  });

  it('passes a falsy value through so a || fallback still fires', () => {
    // `accentInk(k.color) || 'var(--ink-strong)'` must fall back when k.color is absent.
    // A mix built on `undefined` would be a TRUTHY string holding an invalid colour, so
    // the fallback would never run and the element would inherit instead.
    expect(accentInk(undefined)).toBeUndefined();
    expect(accentInk(null)).toBeNull();
    expect(accentInk('')).toBe('');
    expect(accentInk('   ')).toBe('   ');
    for (const v of [undefined, null, ''])
      expect(accentInk(v) || 'var(--fallback)').toBe('var(--fallback)');
  });

  it('fades an accent with the alpha INSIDE the mix', () => {
    // `accentInk(c) + '99'` is nonsense — two hex digits cannot be appended to a
    // `color-mix()` string — and seven sites fade an accent as ink. The nesting is
    // byte-exact in light mode: #4f46e5 at 0.6 computes to
    // `color(srgb 0.309804 0.27451 0.898039 / 0.6)`, which is rgba(79,70,229,0.6) exactly,
    // the same value `#4f46e599` produces. Verified in a browser.
    expect(accentInk('#4f46e5', 0.6)).toBe(
      'color-mix(in srgb, color-mix(in srgb, #4f46e5, #fff var(--ink-lift)) 60%, transparent)',
    );
    expect(accentInk('#4f46e5', 0.5)).toContain('50%, transparent');
    // alpha 1 (or absent) must not wrap — an opaque ink needs no second mix.
    expect(accentInk('#4f46e5', 1)).toBe(accentInk('#4f46e5'));
    expect(accentInk('#4f46e5', Number.NaN)).toBe(accentInk('#4f46e5'));
    // and the pass-throughs still win over the fade
    expect(accentInk('var(--ink-red)', 0.5)).toBe('var(--ink-red)');
    expect(accentInk(undefined, 0.5)).toBeUndefined();
  });

  it('the module imports nothing — it sits on the first-paint path', () => {
    const src = readFileSync('src/lib/accentInk.ts', 'utf8');
    const imports = [...src.matchAll(/^\s*import\b[^\n]*/gm)].map((m) => m[0]);
    expect(imports, 'accentInk must stay import-free; 75 components pull it in').toEqual([]);
  });

  it('both themes define the lift, and 0% / 62% are the two halves', () => {
    const css = readFileSync('src/index.css', 'utf8');
    // `:root` is 0% so light mode is byte-identical; `.dark` is the only half that moves.
    expect(css).toMatch(/--ink-lift:\s*0%/);
    expect(css).toMatch(/--ink-lift:\s*62%/);
    // Exactly two declarations — a third would mean a scope nobody measured.
    expect([...css.matchAll(/--ink-lift\s*:/g)]).toHaveLength(2);
  });
});
