// src/tests/helpers/themedInlineBackground.ts
//
// A THEMED CLASS OWNS BOTH HALVES OF ITS CONTRAST, AND AN INLINE BACKGROUND ONLY
// OVERRIDES ONE (2026-09-26).
//
// `src/index.css` has 21 classes that set BOTH `background` and `color` from theme
// variables — `.ob` is the one a learner meets most, on every multiple-choice
// option in the app. In dark mode `.ob` is `--ob-bg: #1e293b` on
// `--ob-c: #e2e8f0`. An inline `style={{ background: 'white' }}` wins over the
// class's background and leaves its light `color` in place, so the learner reads
// #e2e8f0 on #ffffff: measured in Chrome at **1.23:1** resting and **1.01:1** on
// the chosen wrong option, against the 4.5:1 WCAG AA floor. The options are not
// hard to read — they are invisible, and the screen looks perfectly fine in light
// mode, which is why this survived. Dark mode is not opt-in: `usePreferences`
// follows `prefers-color-scheme` unless the learner has chosen otherwise.
//
// WHAT IS FORBIDDEN IS NARROW AND MEASURED. An inline background is fine when it
// TRACKS THE THEME — a `var(...)`, or a translucent `rgba()` that composites over
// whatever the class painted — and fine when the element also sets `color`, because
// then it owns both halves. Only an OPAQUE LIGHT literal with no inline `color` is
// a defect. Widening it to "no inline background at all" would flag five correct
// translucent sites and `VocativeScreen`, which sets its own colour; a rule that is
// mostly false alarms is one everybody learns to ignore (the 123-false-positive
// lesson).
//
// WHY axe DID NOT CATCH IT. `route-render-sweep.spec.js` runs axe over all 430
// routes — and its own title says "contrast aside": it COUNTS `color-contrast`
// violations and prints them "(not asserted)". It also runs in the default theme,
// so the dark half was outside both the measurement and the assertion.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

/** Classes whose CSS rule sets background AND color from theme variables. */
export function themedClasses(css: string): Set<string> {
  const out = new Set<string>();
  for (const m of css.matchAll(/(^|\})\s*([^{}@]+)\{([^{}]*)\}/g)) {
    const body = m[3]!;
    if (!/background\s*:\s*var\(/.test(body)) continue;
    if (!/(?:^|[;\s])color\s*:\s*var\(/.test(body)) continue;
    for (const c of m[2]!.matchAll(/\.([a-zA-Z][\w-]*)/g)) out.add(c[1]!);
  }
  return out;
}

/**
 * Is this colour literal an OPAQUE LIGHT paint?
 *
 * `white`, or a hex whose every channel is ≥ 0xcc. A translucent `rgba()` is not:
 * it composites over the class's own background and therefore tracks the theme.
 */
export function isOpaqueLight(lit: string): boolean {
  const v = lit.replace(/['"]/g, '').trim();
  if (/^white$/i.test(v)) return true;
  const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(v);
  if (!m) return false;
  const hex =
    m[1]!.length === 3
      ? m[1]!
          .split('')
          .map((c) => c + c)
          .join('')
      : m[1]!;
  return [0, 2, 4].every((i) => parseInt(hex.slice(i, i + 2), 16) >= 0xcc);
}

export interface Finding {
  file: string;
  line: number;
  cls: string;
  literals: string[];
}

/**
 * Walk every opening JSX tag in `src/`, BRACE-MATCHED rather than by regex.
 *
 * The first version of the codemod that fixed this class used a lazy
 * `\{[\s\S]*?\}` over the state block and stopped at an inner `else if`'s closing
 * brace, orphaning the outer one in 25 files at once. A tag can contain arrow
 * functions, nested objects and strings holding braces; balance them.
 */
function openingTags(src: string): { index: number; text: string }[] {
  const out: { index: number; text: string }[] = [];
  for (const m of src.matchAll(/<(?:button|div|span|a|li|td|th)\b/g)) {
    const start = m.index!;
    let i = start + m[0].length;
    let depth = 0;
    let quote: string | null = null;
    while (i < src.length) {
      const c = src[i]!;
      if (quote) {
        if (c === quote && src[i - 1] !== '\\') quote = null;
      } else if (c === '"' || c === "'" || c === '`') quote = c;
      else if (c === '{') depth++;
      else if (c === '}') depth--;
      else if (c === '>' && depth === 0) break;
      i++;
    }
    if (i < src.length) out.push({ index: start, text: src.slice(start, i + 1) });
  }
  return out;
}

export function findThemedInlineBackgrounds(files?: string[]): Finding[] {
  const css = readFileSync('src/index.css', 'utf8');
  const themed = themedClasses(css);
  const list =
    files ??
    execSync('git ls-files "src/**/*.tsx"', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
  const findings: Finding[] = [];
  for (const f of list) {
    const src = readFileSync(f, 'utf8');
    for (const tag of openingTags(src)) {
      // the class names this element carries, from a literal className
      const cm = /className\s*=\s*(?:"([^"]*)"|\{\s*['"`]([^'"`]*)['"`])/.exec(tag.text);
      if (!cm) continue;
      const classes = (cm[1] ?? cm[2] ?? '').split(/\s+/).filter(Boolean);
      const hit = classes.filter((c) => themed.has(c));
      if (!hit.length) continue;
      // an element that sets its OWN colour owns both halves and is fine
      if (/(?:^|[,{\s])color\s*:/.test(tag.text)) continue;
      const bg = /\b(?:background|backgroundColor)\s*:([\s\S]*?)(?:,\s*[a-zA-Z]+\s*:|\}\})/.exec(
        tag.text,
      );
      if (!bg) continue;
      const expr = bg[1]!;
      // ONE HOP THROUGH A LOCAL. The commonest shape by far is `background: bg`
      // with `let bg = 'white'` computed just above in the `.map` callback — 25 of
      // the 32 original defects looked like that, and a literals-only scan of the
      // TAG finds none of them. Mutation caught exactly this: the first version of
      // this guard stayed green when a real defective file was restored. So a bare
      // identifier is followed to every literal assigned to it in this file — the
      // same hop `aiResponseContract` needs through component state.
      const sources = [expr];
      const ident = /^\s*([A-Za-z_$][\w$]*)\s*$/.exec(expr);
      if (ident) {
        for (const a of src.matchAll(new RegExp(`\\b${ident[1]!}\\s*=\\s*([^;\n]+)`, 'g')))
          sources.push(a[1]!);
      }
      const literals = sources
        .flatMap((sx) => [...sx.matchAll(/'[^']*'|"[^"]*"|#[0-9a-fA-F]{3,6}\b/g)].map((x) => x[0]!))
        .filter(isOpaqueLight);
      if (!literals.length) continue;
      findings.push({
        file: f,
        line: src.slice(0, tag.index).split('\n').length,
        cls: hit.join('+'),
        literals: [...new Set(literals)],
      });
    }
  }
  return findings;
}
