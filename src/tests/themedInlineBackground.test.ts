// src/tests/themedInlineBackground.test.ts
//
// See helpers/themedInlineBackground.ts for the finding: 32 `.ob` option buttons
// painted an OPAQUE LIGHT background inline while `.ob` supplied the text colour,
// so every multiple-choice option in 30 screens was invisible in dark mode
// (measured 1.23:1 resting, 1.01:1 on the chosen wrong option).
//
// The fix is the project's own convention — `.ob.ok` / `.ob.no`, which set `color`
// beside their background and were already used by twelve screens. This is the
// ratchet that stops the 33rd.

import { describe, it, expect } from 'vitest';
import { writeFileSync, mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  findThemedInlineBackgrounds,
  themedClasses,
  isOpaqueLight,
} from './helpers/themedInlineBackground';
import { escapeRegExp } from './helpers/emptyClaimSurfaces';

describe('a themed class owns both halves of its contrast', () => {
  it('no element overrides a themed background with an opaque light literal', () => {
    const findings = findThemedInlineBackgrounds();
    const named = findings.map(
      (f) => `${f.file}:${f.line} .${f.cls} background: ${f.literals.join(' ')}`,
    );
    expect(
      named,
      'These classes set `color` from a theme variable (#e2e8f0 in dark mode). An ' +
        'inline opaque LIGHT background wins over the class background and leaves ' +
        'that light colour in place, so the text is invisible in dark mode while ' +
        'the screen looks perfectly fine in light mode. Express the state with the ' +
        '`ok`/`no` classes, use a `var(...)` or a translucent `rgba()`, or set ' +
        '`color` inline too.',
    ).toEqual([]);
  });

  it('the derivation is not vacuous — it finds the real classes and a planted defect', () => {
    // A derivation that matched no class, or no tag, would make the assertion above
    // pass for ever. Both halves are checked against the real stylesheet and a
    // synthetic file, because the corpus is now clean and cannot prove either.
    const themed = themedClasses(readFileSync('src/index.css', 'utf8'));
    expect(themed.has('ob')).toBe(true);
    expect(themed.size).toBeGreaterThan(10);

    const dir = mkdtempSync(join(tmpdir(), 'themed-'));
    const bad = join(dir, 'Bad.tsx');
    writeFileSync(
      bad,
      `export const A = () => (
  <button className="ob" style={{ background: 'white', borderColor: 'red' }}>x</button>
);\n`,
    );
    const hits = findThemedInlineBackgrounds([bad]);
    expect(hits.length).toBe(1);
    expect(hits[0]!.literals).toEqual(["'white'"]);
    expect(hits[0]!.cls).toBe('ob');
  });

  it('follows a background named through a local — the shape 25 of the 32 defects had', () => {
    // THE CLAUSE THIS PINS SURVIVED ITS OWN FIRST MUTATION. Written without the
    // identifier hop, the guard stayed GREEN when a real defective file was put
    // back: `background: bg` carries no literal in the tag, and `let bg = 'white'`
    // sits in the `.map` callback above it. The corpus is clean now, so nothing
    // real exercises the hop and only this synthetic control can keep it honest.
    const dir = mkdtempSync(join(tmpdir(), 'themed-hop-'));
    const f = join(dir, 'Hop.tsx');
    writeFileSync(
      f,
      `export const A = ({ answered, opt, cur, chosen }: any) => (
  <>
    {cur.opts.map((o: string) => {
      let bg = 'white';
      let bc = 'rgba(14,116,144,.12)';
      if (answered) {
        if (opt === cur.answer) {
          bg = '#dcfce7';
          bc = '#16a34a';
        } else if (opt === chosen) {
          bg = '#fee2e2';
          bc = '#dc2626';
        }
      }
      return (
        <button key={o} className="ob" style={{ background: bg, borderColor: bc }}>
          {o}
        </button>
      );
    })}
  </>
);\n`,
    );
    const hits = findThemedInlineBackgrounds([f]);
    expect(hits.length, 'a background named through a local must still be followed').toBe(1);
    expect(hits[0]!.literals.sort()).toEqual(["'#dcfce7'", "'#fee2e2'", "'white'"]);
  });

  it('does NOT flag a background that tracks the theme, or an element that sets its own colour', () => {
    // The three legitimate shapes, each present in the tree today. Flagging these
    // would make the guard noise, and noise is how a guard gets ignored.
    const dir = mkdtempSync(join(tmpdir(), 'themed-ok-'));
    const f = join(dir, 'Ok.tsx');
    writeFileSync(
      f,
      `export const A = () => (
  <>
    <button className="ob" style={{ background: 'rgba(22,163,74,.12)' }}>a</button>
    <button className="ob" style={{ background: 'var(--card)' }}>b</button>
    <button className="ob" style={{ background: '#dcfce7', color: '#166534' }}>c</button>
    <button className="ob" style={{ background: '#0e7490' }}>d</button>
  </>
);\n`,
    );
    expect(findThemedInlineBackgrounds([f])).toEqual([]);
  });

  it('classifies a light paint by its darkest channel, not by its name', () => {
    expect(isOpaqueLight('white')).toBe(true);
    expect(isOpaqueLight("'#dcfce7'")).toBe(true); // the success tint
    expect(isOpaqueLight("'#fee2e2'")).toBe(true); // the error tint
    expect(isOpaqueLight("'#fff'")).toBe(true);
    // A pale-looking colour with one mid channel is NOT light enough to hide
    // #e2e8f0 text, and calling it one would flag correct code.
    expect(isOpaqueLight("'#dcfc74'")).toBe(false);
    expect(isOpaqueLight("'#0e7490'")).toBe(false);
    expect(isOpaqueLight("'rgba(255,255,255,.1)'")).toBe(false);
    expect(isOpaqueLight("'var(--ob-bg)'")).toBe(false);
  });

  it('the state classes it steers people to actually set a colour', () => {
    // `.ob.ok` / `.ob.no` are only a fix because they set `color` as well as
    // `background`. If someone trimmed them to a background alone, this whole
    // guard would be pointing at the same defect it forbids.
    const css = readFileSync('src/index.css', 'utf8');
    for (const cls of ['ob.ok', 'ob.no']) {
      // `cls.replace('.', '\\.')` was a PARTIAL escape: a STRING pattern replaces only
      // the FIRST occurrence and nothing but `.`, which is the `js/incomplete-sanitization`
      // shape CodeQL flagged on this branch. Escape the whole thing.
      const m = new RegExp(`\\.${escapeRegExp(cls)}\\s*\\{([^}]*)\\}`).exec(css);
      expect(
        m,
        `.${cls} must exist — it is what the failure message tells people to use`,
      ).toBeTruthy();
      expect(m![1], `.${cls} must set an explicit color`).toMatch(/(?:^|[;\s])color\s*:/);
    }
  });
});
