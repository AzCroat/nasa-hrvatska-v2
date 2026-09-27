/**
 * An ink and the surface under it must agree about the theme.
 *
 * The two guards either side of this one each judge ONE element:
 * `inlineInkContrast` an ink against the dark card, `themedInlineBackground` an
 * opaque-light background under a themed class. The shape between them is a surface
 * painted by a PARENT and an ink carried by a CHILD, where each element is individually
 * defensible and the pair is not. See the helper's header for the four combinations and
 * which two are defects.
 *
 * MEASURED BEFORE IT WAS WRITTEN, AND THE NUMBERS ARE WHY IT IS ONE GUARD AND NOT TWO:
 * 31 sites in 21 files for the light-slab clause, and 2 for the themed-slab clause —
 * both of them CREATED by fixing the 31. A guard for either alone would have shipped the
 * other.
 */
import { describe, it, expect } from 'vitest';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  findLightSlabThemedInk,
  findThemedSlabDarkInk,
  elementSpan,
  styleBodies,
} from './helpers/inkSurfaceAgreement';

describe('an ink and its surface agree about the theme', () => {
  it('no hardcoded light slab holds a themed ink', () => {
    const named = findLightSlabThemedInk().map(
      (f) => `${f.file}:${f.line} background: ${f.surface} with ${f.inks.join(', ')} inside`,
    );
    expect(
      named,
      'A hardcoded LIGHT background stays light in dark mode while a themed ink inside it ' +
        "goes light — so the text vanishes. GrammarConstellation's endings table measured " +
        '1.13:1 that way. Either make the surface a tint token (--surface-mute, --mode-bg, ' +
        '--warning-bg, --success-bg, --error-bg, --info-bg) so it follows the theme, or ' +
        'give the ink a fixed dark value so the pair owns its own contrast.',
    ).toEqual([]);
  });

  it('no themed slab holds a hardcoded dark ink', () => {
    const named = findThemedSlabDarkInk().map(
      (f) => `${f.file}:${f.line} background: ${f.surface} with ${f.inks.join(', ')} inside`,
    );
    expect(
      named,
      'A THEMED background goes dark in dark mode, so a hardcoded dark ink on it is ' +
        'dark-on-dark. This is the exact shape that fixing the clause above CREATES, which ' +
        'is why both live in one guard: use an --ink-* token for the ink too.',
    ).toEqual([]);
  });

  it('both clauses find a planted defect and neither is vacuous', () => {
    // NEITHER CLAUSE HAS A REAL SUBJECT ANY MORE — all 33 are fixed — so without these
    // fixtures both would pass on a gutted derivation. Same standard the opacity clause in
    // inlineInkContrast had to meet.
    const dir = mkdtempSync(join(tmpdir(), 'agree-'));

    const lightSlab = join(dir, 'LightSlab.tsx');
    writeFileSync(
      lightSlab,
      `export const A = () => (
  <div style={{ background: '#f1f5f9', padding: 8 }}>
    <span style={{ fontSize: 12, color: 'var(--text)' }}>light slab, themed ink</span>
  </div>
);\n`,
    );
    const c1 = findLightSlabThemedInk([lightSlab]);
    expect(c1).toHaveLength(1);
    expect(c1[0]!.surface).toBe('#f1f5f9');
    expect(c1[0]!.inks).toEqual(['var(--text)']);

    const themedSlab = join(dir, 'ThemedSlab.tsx');
    writeFileSync(
      themedSlab,
      `export const B = () => (
  <div style={{ background: 'var(--surface-mute)', padding: 8 }}>
    <span style={{ fontSize: 12, color: '#475569' }}>themed slab, dark ink</span>
  </div>
);\n`,
    );
    const c2 = findThemedSlabDarkInk([themedSlab]);
    expect(c2).toHaveLength(1);
    expect(c2[0]!.inks).toEqual(['#475569']);

    // THE SELF-PAINTING EXEMPTION IS WHAT MAKES CLAUSE 2 MEASURABLE. Omitting it reported
    // 30 sites where the truth was 2: the other 24 were `background:'#f3f4f6'` chips with
    // grey ink, correct in either theme because the chip owns both halves.
    const ownChip = join(dir, 'OwnChip.tsx');
    writeFileSync(
      ownChip,
      `export const C = () => (
  <div style={{ background: 'var(--card)', padding: 8 }}>
    <span style={{ background: '#f3f4f6', color: '#6b7280' }}>a chip that owns both halves</span>
  </div>
);\n`,
    );
    expect(findThemedSlabDarkInk([ownChip])).toEqual([]);

    // And a correct pair must not be reported by either clause.
    const ok = join(dir, 'Ok.tsx');
    writeFileSync(
      ok,
      `export const D = () => (
  <div style={{ background: 'var(--surface-mute)', padding: 8 }}>
    <span style={{ color: 'var(--ink-muted)' }}>both follow the theme</span>
  </div>
);\n`,
    );
    expect(findLightSlabThemedInk([ok])).toEqual([]);
    expect(findThemedSlabDarkInk([ok])).toEqual([]);
  });

  it('elementSpan brace-matches rather than stopping at the first >', () => {
    // A regex cannot find a JSX element's end: a style object holds arrow functions and
    // strings containing `>` and `}`. The codemod that fixed the ink class orphaned a
    // brace in 25 files at once by trying.
    const src = `<div onClick={() => setTab('a')} style={{ color: 'red' }}><b>x</b></div>`;
    const span = elementSpan(src, 0);
    expect(span).toBe(src);
    expect(span).toContain('<b>x</b>');

    // A self-closing tag ends at its own `/>`.
    const sc = `<img src="a" onLoad={() => go()} /><p>after</p>`;
    expect(elementSpan(sc, 0)).toBe('<img src="a" onLoad={() => go()} />');

    // Nesting of the same tag counts levels, so the OUTER close wins.
    const nested = `<div><div>inner</div>outer</div>tail`;
    expect(elementSpan(nested, 0)).toBe('<div><div>inner</div>outer</div>');
  });

  it('styleBodies returns each style object, brace-matched', () => {
    const src = `<a style={{ color: 'red' }}><b style={{ background: '#fff' }}>x</b></a>`;
    const bodies = styleBodies(src);
    expect(bodies).toHaveLength(2);
    expect(bodies[0]).toContain("color: 'red'");
    expect(bodies[1]).toContain("background: '#fff'");
  });
});
