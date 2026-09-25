/**
 * emptyClaimSurfaces — derives the surfaces that render a CLAIM (or bail) on a
 * content-derived collection being empty.
 *
 * "Empty" and "the payload has not arrived" are the same expression, so every
 * such render is a place the app can tell a learner something false about their
 * own deck. Sweep 101 found four live instances of it — "All caught up!" on
 * Review, "Complete a few vocabulary lessons first" on HOME, "No words match
 * your search." on the advanced lists, and a Start button that did nothing at
 * all — and the shared classifier `poolLaunchBlock` already existed.
 *
 * FOUR SHAPES, and each was added only after it was found to hide a member the
 * previous shape could not see (the sweep-99 rule: a derivation that misses a
 * known member is an unfinished tool, not a negative result):
 *   1. `X.length === 0 && <…>`                     — the obvious one
 *   2. `if (X.length === 0) return (<…>)`          — hid Review's "All caught up!"
 *   3. `const flag = X.length === 0` then `flag ?` — hid LearnPath's
 *   4. `if (X.length < 4) setFlag(true)`           — hid SpeedChallenge's, whose
 *      pool lives in a REF (`pool.current = buildQuestionPool(V)`), an assignment
 *      rather than a declaration, so the whole screen was invisible.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * Escape EVERY regex metacharacter before interpolating a value into a pattern.
 *
 * Every derivation in this file and its two sibling guards built patterns as
 * `` new RegExp(`\\b${name}\\b`) `` escaping only `$`. Two things wrong with that,
 * and the second is why it is fixed here rather than argued about:
 *
 *  - CORRECTNESS: a name containing `.` matches any character, so `r.timeline`
 *    would match `r<anything>timeline`, and a name containing `(` or `[` makes an
 *    invalid pattern that THROWS at match time. The derivations feed themselves
 *    names read out of source (`[A-Za-z_$][\w$.]*` admits dots), so this is not
 *    hypothetical — it is the silent-mis-match class this whole hunt is about,
 *    inside the tools doing the hunting.
 *  - CodeQL reports it as `js/regex-injection` (high). The alert count on PR #746
 *    went 2 → 7 in lockstep with the commit that added five more of these, which
 *    is what identified the subject after a first hypothesis about clear-text
 *    storage that the evidence did not support.
 */
export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (!['node_modules', 'tests', '__tests__'].includes(e)) walk(p, out);
    } else if (/\.tsx$/.test(e) && !/\.test\./.test(e)) out.push(p);
  }
  return out;
}

const EMPTY_TEST =
  /\.length\s*(?:===\s*0|==\s*0|<\s*\d+|<=\s*0)|^\s*!\s*[A-Za-z_$][\w$.]*\.length|Object\.keys\([^)]*\)\.length\s*(?:===\s*0|<\s*\d+)/;

/** Names holding content-derived data, closed over declarations AND assignments. */
function contentDerived(src: string): Set<string> {
  const derived = new Set<string>();
  for (const m of src.matchAll(/const\s*\{([^}]*)\}\s*=\s*useContent\s*\(\s*\)/g))
    for (const part of m[1]!.split(',')) {
      const t = part.trim();
      if (t) derived.add((t.includes(':') ? t.split(':')[1]! : t).trim());
    }
  if (!derived.size) return derived;
  const mentions = (txt: string) =>
    [...derived].some((d) => new RegExp(`\\b${escapeRegExp(d)}\\b`).test(txt));
  const DECL = /(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=]{0,160})?=\s*([\s\S]{0,500}?);\n/g;
  const ASSIGN = /([A-Za-z_$][\w$]*)(?:\.current)?\s*=\s*([^;\n]{0,300});/g;
  // A MULTI-LINE INITIALIZER SWALLOWS THE NEXT DECLARATION. `DECL` runs lazily to
  // the first `;\n`, so `const levelNarrative = (() => {` consumes the
  // `const rungs = LEVEL_NARRATIVE[…];` inside its own body — matchAll then
  // resumes past it and `rungs` never enters the closure. HeroSection's
  // `rungs[…] || 'Learning'` is the known member that exposed it: a derivation
  // that cannot see a member found by reading is unfinished (sweep 103). The
  // SINGLE-LINE pass restarts from the top and catches whatever the lazy one ate.
  const DECL_LINE =
    /(?<!for\s*\()(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=;\n]{0,120})?=\s*([^;\n]{1,300});/g;
  for (let i = 0; i < 8; i++) {
    for (const m of src.matchAll(DECL)) if (mentions(m[2]!)) derived.add(m[1]!);
    for (const m of src.matchAll(DECL_LINE)) if (mentions(m[2]!)) derived.add(m[1]!);
    for (const m of src.matchAll(ASSIGN)) if (mentions(m[2]!)) derived.add(m[1]!);
  }
  return derived;
}

export type EmptyClaimSurface = { file: string; conditions: string[] };

/**
 * Sweep 102: a content-derived NUMBER rendered on a screen that never
 * early-returns on the content state — so the number is on screen before the
 * payload arrives, and for ever after a failed fetch.
 *
 * `emptyClaimSurfaces` keys on an EMPTINESS TEST, which cannot see this: nothing
 * compares anything to zero, the count simply IS zero. `AdvancedVocabScreen`
 * rendered "0/0 learned" over a 0% bar and `VocabSceneComponents` "0 / 0 words
 * discovered" — sweep 99's `0 / 0 milestones` in two more places, and on
 * AdvancedVocab it sat directly ABOVE the list sweep 101 had just taught to name
 * its own state. **Fixing one claim on a screen does not fix the others.**
 */
export type NumericClaimSurface = { file: string; guarded: boolean; rendered: string[] };

/**
 * Is every render of `name` inside a `{<content-derived value> && (…)}` gate?
 *
 * That is guarded BY CONSTRUCTION and needs no notice: `LearnTab` computes
 * `overallPct` 0 and `stagePct` 100 on an empty path — two numbers that
 * contradict each other — but the whole card sits inside `{nextItem && (…)}`,
 * and `nextItem` is only ever assigned while walking the path, so an absent
 * payload renders nothing at all. Without this the derivation would demand a
 * notice for a line no learner can reach, which is how a guard earns the
 * false-positive reputation that gets it ignored.
 */
/**
 * The enclosing brace spans around an index, innermost first, up to `levels`.
 * A number's own gate can sit a level or two out — `{countsKnown ? `${a}/${b}` :
 * '—'}` puts it one out, a style object two — so a single innermost span is not
 * enough to see it.
 */
function enclosingSpans(src: string, at: number, levels = 4): string[] {
  const out: string[] = [];
  let from = at;
  for (let l = 0; l < levels; l++) {
    let depth = 0;
    let open = -1;
    for (let i = from; i >= 0; i--) {
      if (src[i] === '}') depth++;
      else if (src[i] === '{') {
        if (depth === 0) {
          open = i;
          break;
        }
        depth--;
      }
    }
    if (open < 0) break;
    // STOP AT A FUNCTION BODY. Four levels out from JSX reaches the COMPONENT's
    // own braces, which mention every flag declared anywhere in it — so the walk
    // silently degenerated into the per-file check it was written to replace, and
    // reverting the counter left the suite green. A span holding a `return (` is
    // a function body, not a JSX expression container.
    {
      let d2 = 0;
      let cl = src.length;
      for (let j = open; j < src.length; j++) {
        if (src[j] === '{') d2++;
        else if (src[j] === '}') {
          d2--;
          if (d2 === 0) {
            cl = j;
            break;
          }
        }
      }
      if (/\breturn\s*\(/.test(src.slice(open, cl + 1))) break;
    }
    let d = 0;
    let close = src.length;
    for (let j = open; j < src.length; j++) {
      if (src[j] === '{') d++;
      else if (src[j] === '}') {
        d--;
        if (d === 0) {
          close = j;
          break;
        }
      }
    }
    out.push(src.slice(open, close + 1));
    from = open - 1;
  }
  return out;
}

function insideContentGate(src: string, name: string, derived: Set<string>): boolean {
  const esc = escapeRegExp;
  const uses = [
    ...src.matchAll(new RegExp(`\\{\\s*${esc(name)}\\s*\\}|\\$\\{\\s*${esc(name)}\\s*\\}`, 'g')),
  ];
  if (!uses.length) return false;
  // every `{<derived> && (` opener and the index its brace closes at
  const gates: Array<[number, number]> = [];
  for (const g of src.matchAll(/\{\s*([A-Za-z_$][\w$.]*)\s*&&\s*\(/g)) {
    const base = g[1]!.split('.')[0]!;
    if (!derived.has(base)) continue;
    let depth = 0;
    let j = g.index!;
    for (; j < src.length; j++) {
      if (src[j] === '{') depth++;
      else if (src[j] === '}') {
        depth--;
        if (depth === 0) break;
      }
    }
    gates.push([g.index!, j]);
  }
  return uses.every((u) => gates.some(([a, b]) => u.index! > a && u.index! < b));
}

export function numericClaimSurfaces(root = 'src/components'): NumericClaimSurface[] {
  const out: NumericClaimSurface[] = [];
  for (const f of walk(root)) {
    const raw = readFileSync(f, 'utf8');
    if (!/useContent\s*\(\s*\)/.test(raw)) continue;
    const src = strip(raw);
    const derived = contentDerived(src);
    if (!derived.size) continue;
    const mentions = (txt: string, set: Set<string>) =>
      [...set].some((d) => new RegExp(`\\b${escapeRegExp(d)}\\b`).test(txt));
    // `for (let li = 0; li < LEARN_PATH.length; li++)` is NOT a content-derived
    // number: the lazy `;\n` made a for-header swallow the rest of the statement
    // and pick up the array it iterates, which reported LearnPath's loop index —
    // used as a React key and a subscript — as a rendered claim.
    const DECL =
      /(?<!for\s*\()(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=]{0,160})?=\s*([\s\S]{0,500}?);\n/g;

    // A number counted or reduced out of content-derived data.
    const nums = new Set<string>();
    for (let i = 0; i < 4; i++)
      for (const m of src.matchAll(DECL)) {
        const init = m[2]!;
        if (!mentions(init, derived) && !mentions(init, nums)) continue;
        if (/\.length\b|\breduce\(|Math\.(?:round|floor)\s*\(|\.size\b/.test(init)) nums.add(m[1]!);
      }

    const rendered = [...nums].filter((n) =>
      new RegExp(`\\{\\s*${escapeRegExp(n)}\\s*\\}|\\$\\{\\s*${escapeRegExp(n)}\\s*\\}`).test(src),
    );
    if (!rendered.length) continue;
    // "Guarded" means SOME early return stands between the hook and the render —
    // whether it names the content state directly or asks the shared classifier.
    // THE PREDICATE IS PER-RENDER, NOT PER-FILE, and the per-file version was
    // decorative — mutation caught it. `AdvancedVocabScreen` consults the
    // classifier for its WORD LIST (sweep 101), so a file-level check reported
    // the counter directly above it as guarded while it still read
    // "0/0 learned" over a 0% bar. A screen makes several claims and each needs
    // its own answer, which is the very lesson this sweep records.
    const gateFlags = new Set<string>();
    for (let i = 0; i < 3; i++)
      for (const m of src.matchAll(DECL))
        if (/\bpoolLaunchBlock\s*\(/.test(m[2]!) || mentions(m[2]!, gateFlags))
          gateFlags.add(m[1]!);

    const wholeScreenGuard =
      /if\s*\([^)]*(?:\bloading\b|!\s*content\b|\berror\b)[^)]*\)\s*(?:\{\s*)?return/.test(src) ||
      [...gateFlags].some((fl) => new RegExp(`if\\s*\\([^)]*\\b${escapeRegExp(fl)}\\b`).test(src));

    const renderGuarded = (n: string): boolean => {
      if (wholeScreenGuard) return true;
      if (insideContentGate(src, n, derived)) return true;
      const esc = escapeRegExp(n);
      const uses = [
        ...src.matchAll(new RegExp(`\\{\\s*${esc}\\s*\\}|\\$\\{\\s*${esc}\\s*\\}`, 'g')),
      ];
      return uses.every((u) =>
        enclosingSpans(src, u.index!).some((span) => mentions(span, gateFlags)),
      );
    };

    const guarded = rendered.every(renderGuarded);
    out.push({ file: f, guarded, rendered });
  }
  return out;
}

/** Every component file whose render or handler branches on content-derived emptiness. */
export function emptyClaimSurfaces(root = 'src/components'): EmptyClaimSurface[] {
  const out: EmptyClaimSurface[] = [];
  for (const f of walk(root)) {
    const raw = readFileSync(f, 'utf8');
    if (!/useContent\s*\(\s*\)/.test(raw)) continue;
    const src = strip(raw);
    const derived = contentDerived(src);
    if (!derived.size) continue;
    const mentions = (txt: string) =>
      [...derived].some((d) => new RegExp(`\\b${escapeRegExp(d)}\\b`).test(txt));

    const conditions = new Set<string>();
    const add = (c: string) => conditions.add(c.replace(/\s+/g, ' ').trim());

    // flags whose initializer is itself an emptiness test over derived data
    const flags = new Set<string>();
    const DECL =
      /(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=]{0,160})?=\s*([\s\S]{0,500}?);\n/g;
    for (let i = 0; i < 3; i++)
      for (const m of src.matchAll(DECL))
        if (
          EMPTY_TEST.test(m[2]!) &&
          (mentions(m[2]!) ||
            [...flags].some((fl) => new RegExp(`\\b${escapeRegExp(fl)}\\b`).test(m[2]!)))
        )
          flags.add(m[1]!);

    // 1 + 2: inline conditional render, and early return
    for (const m of src.matchAll(
      /(?:if\s*\(|\{)\s*([^;{}]{1,200}?)\s*\)?\s*(?:&&|\?|\)\s*\{?\s*return)/g,
    )) {
      const cond = m[1]!;
      if (!EMPTY_TEST.test(cond)) continue;
      if (!mentions(cond)) continue;
      add(cond);
    }
    // 3: a named emptiness flag that reaches the render
    for (const fl of flags)
      if (new RegExp(`\\b${escapeRegExp(fl)}\\b\\s*(?:&&|\\?)`).test(src)) add(fl);
    // 4: a state flag set from an emptiness test
    for (const m of src.matchAll(/if\s*\(([^;{}]{1,200}?)\)\s*\{([\s\S]{0,240}?)\}/g)) {
      if (!EMPTY_TEST.test(m[1]!) || !mentions(m[1]!)) continue;
      if (/set[A-Z][\w$]*\s*\(\s*true\s*\)|set[A-Z][\w$]*\s*\(\s*['"]/.test(m[2]!)) add(m[1]!);
      if (/^\s*return\s*;/m.test(m[2]!)) add(m[1]!);
    }
    // a bare silent bail
    for (const m of src.matchAll(/if\s*\(([^;{}]{1,200}?)\)\s*return\s*;/g)) {
      if (EMPTY_TEST.test(m[1]!) && mentions(m[1]!)) add(m[1]!);
    }

    if (conditions.size) out.push({ file: f, conditions: [...conditions] });
  }
  return out;
}

/** Does this file consult the shared three-way classifier? */
export function consultsClassifier(file: string): boolean {
  return /\bpoolLaunchBlock\s*\(/.test(strip(readFileSync(file, 'utf8')));
}
