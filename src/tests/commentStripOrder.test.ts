/**
 * commentStripOrder.test.ts — guards strip comments in the order that works.
 *
 * WHY THIS EXISTS (sweep 71, src/sw.js).
 * ---------------------------------------
 * Dozens of guards in this repo read production source, remove the comments and
 * assert about the code that is left. That strip is load-bearing: without it,
 * prose NAMING the thing a guard forbids reads as the offence, and this codebase
 * has the scars to prove it.
 *
 * Stripping BLOCK comments first is a trap. A `//` comment that mentions a path
 * like `/api/*` or `src/data/drills/*` contains the two characters that open a
 * block comment, so the block regex opens there and runs to the next `*` + `/`
 * ANYWHERE later in the file — and any regex literal ending in a star before
 * its closing slash (the Google Fonts route is one) supplies the closer readily.
 *
 * In `src/sw.js` that swallowed 15,102 characters of a 21,532-character file:
 * EVERY `registerRoute` call became invisible, including to the assertion that
 * the service worker never touches `localStorage` or `indexedDB` — the one that
 * matters most, since a SW update must never destroy a learner's progress. The
 * guard was green throughout, because a guard whose subject has vanished passes.
 *
 * Stripping LINE comments first removes that comment, `/*` and all, before the
 * block pass ever runs. The two orders are otherwise equivalent: reordering all
 * 72 files that had the pair left the full suite at 612 files / 9815 passing,
 * byte-identical in outcome. That is why this is a pure ordering rule.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO.
 * -----------------------------------
 * It does not consolidate the strips into one shared helper. Measured across the
 * suite there are NINE line-strip variants and THREE block-strip variants, and
 * two groups differ on purpose rather than by accident: 20 uses strip WHOLE-LINE
 * comments only (`/^\s*\/\/.*$/gm`), leaving a trailing `// note` after code
 * intact, and 4 target JSX comment expressions specifically. Folding those
 * into one helper would widen their semantics silently, under cover of a fix
 * about ordering. Order is the defect; order is what this fixes.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

/** A regex literal that removes block comments. */
const isBlockStrip = (re: string) => re.includes('\\/\\*') && re.includes('\\*\\/');
/** A regex literal that removes line comments. */
const isLineStrip = (re: string) => re.includes('\\/\\/') && !isBlockStrip(re);

/**
 * The `.replace(/…/flags, …)` calls of one file, in source order, each tagged
 * with whether it is CHAINED onto the call before it.
 *
 * Chaining is established by closing each call properly and then requiring the
 * very next non-whitespace text to be `.replace(`. The first draft of this file
 * used a cheaper test — "the preceding text ends with `)`" — and that reported
 * FIVE offences that do not exist: `readFileSync(path, 'utf8')` also ends with
 * `)`, so it stitched the last call of one chain onto the first call of the
 * next. Every one was already in the right order. That is the fabricated-finding
 * shape sweeps 63 and 68 hit with fixed character windows, met a third time; the
 * fix is the same one, which is to stop approximating the boundary and parse it.
 */
function replaceCalls(src: string): { re: string; chained: boolean }[] {
  const out: { re: string; chained: boolean }[] = [];
  // `[` is excluded from the final alternative ON PURPOSE. Without that, `[`
  // can be consumed either by the character-class branch or by the catch-all,
  // so `[]` has two parses and a run of them backtracks exponentially when the
  // closing `/` never arrives — CodeQL flagged exactly that on this line. With
  // it, the three alternatives are start-disjoint (`\\`, `[`, everything else)
  // and the match is linear. A `]` outside a class stays legal and still lands
  // in the catch-all.
  const LITERAL = /^\s*(\/(?:\\.|\[(?:\\.|[^\]\\])*\]|[^/\\\n[])+\/[gimsuy]*)/;
  let prevEnd = -1;
  for (let at = src.indexOf('.replace('); at !== -1; at = src.indexOf('.replace(', at + 1)) {
    const open = at + '.replace'.length;
    const lit = LITERAL.exec(src.slice(open + 1));
    if (!lit) continue;
    // Close the call: depth from the '(' after `.replace`, skipping quoted
    // strings so an apostrophe or a ')' inside a replacement cannot end it early.
    let i = open + 1 + lit[0].length;
    let depth = 1;
    while (i < src.length && depth > 0) {
      const c = src[i]!;
      if (c === "'" || c === '"' || c === '`') {
        const quote = c;
        i++;
        while (i < src.length && src[i] !== quote) i += src[i] === '\\' ? 2 : 1;
      } else if (c === '(') depth++;
      else if (c === ')') depth--;
      i++;
    }
    const chained = prevEnd !== -1 && src.slice(prevEnd, at).trim() === '';
    out.push({ re: lit[1]!, chained });
    prevEnd = i;
  }
  return out;
}

const FILES = globSync('src/**/*.{test,guard.test}.{ts,tsx,js,jsx}').filter(
  (f) => !f.includes('node_modules'),
);

describe('comment strippers run line-comments first', () => {
  it('scans a real corpus of guards', () => {
    // Without this the rule below could pass by scanning nothing at all.
    expect(FILES.length).toBeGreaterThan(300);
    const withStrip = FILES.filter((f) =>
      replaceCalls(readFileSync(f, 'utf8')).some((c) => isBlockStrip(c.re)),
    );
    expect(withStrip.length).toBeGreaterThan(30);
  });

  it('no guard strips block comments before line comments', () => {
    const offenders: string[] = [];
    for (const f of FILES) {
      const calls = replaceCalls(readFileSync(f, 'utf8'));
      for (let i = 0; i + 1 < calls.length; i++)
        if (isBlockStrip(calls[i]!.re) && calls[i + 1]!.chained && isLineStrip(calls[i + 1]!.re))
          offenders.push(`${f}: ${calls[i]!.re} before ${calls[i + 1]!.re}`);
    }
    expect(
      offenders,
      `strip line comments FIRST — a "//" comment naming a path like /api/* otherwise opens a block comment that eats the rest of the file:\n${offenders.join('\n')}`,
    ).toEqual([]);
  });

  it('the literal parser is linear, not exponential', () => {
    // The pathological input CodeQL named: a '/' followed by many '[]' pairs and
    // no closing '/'. Before the fix each pair had two parses, so this backtracks
    // for longer than the universe has run and the test times out rather than
    // fails — which is the signal. Kept small enough to be instant when linear.
    const evil = `.replace(/${'[]'.repeat(60)}`;
    const started = Date.now();
    expect(replaceCalls(evil)).toEqual([]);
    expect(Date.now() - started).toBeLessThan(1000);
  });

  it('and the detector actually recognises the shape it forbids', () => {
    // A positive control: the rule above is only worth anything if this fails.
    const bad = `const x = s.replace(/\\/\\*[\\s\\S]*?\\*\\//g, '').replace(/(^|[^:])\\/\\/[^\\n]*/g, '$1');`;
    const calls = replaceCalls(bad);
    expect(calls).toHaveLength(2);
    expect(isBlockStrip(calls[0]!.re)).toBe(true);
    expect(isLineStrip(calls[1]!.re)).toBe(true);
    expect(calls[1]!.chained).toBe(true);
  });
});
