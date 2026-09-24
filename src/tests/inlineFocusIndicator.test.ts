/**
 * inlineFocusIndicator.test.ts — the focus ring an inline style silently wins
 * against (2026-09-24).
 *
 * THE CLASS. This app has exactly two focus indicators, both in `src/index.css`:
 *
 *   :focus-visible                 outline: 3px solid var(--info)
 *   input:focus, textarea:focus    border-color + a 4px box-shadow ring
 *                                  (a text field never gets the first: the base
 *                                  input rule sets `outline:none`, and its
 *                                  selector outranks `:focus-visible`)
 *
 * An inline style beats BOTH, whatever the stylesheet says, and the loss is
 * invisible: the control still renders, still clicks, still reads correctly to
 * a screen reader. Only a keyboard user meets it, and only as an absence.
 *
 * Found by tabbing every route of the built app and comparing each element's
 * computed appearance focused against unfocused (sweep 93). Six sites used
 * `outline` as DECORATION — a selected-state ring — which replaced the focus
 * ring with one that does not change on focus:
 *
 *   HeritageModeScreen         the four section tabs
 *   VideoLessonScreen          the topic cards and the level pills
 *   LearningPreferencesSection the voice and speech-rate pills
 *   PostcardScreen             the city thumbnails (`3px solid transparent`
 *                              when unselected — present, and invisible)
 *
 * and two text fields overrode the ring itself: the dashboard search box (an
 * inline `boxShadow` for resting elevation) and AI Conversation's free-writing
 * textarea, which set `outline`, `border` AND `boxShadow` inline and therefore
 * had **no focus indicator of any kind**.
 *
 * WHY THE RULES ARE SHAPED THIS WAY. Measured before writing, so neither is a
 * guess at what the codebase does:
 *   - 41 inputs/textareas carry an inline `border`. That is the app's
 *     convention, and it costs only the border-colour half — the box-shadow
 *     ring still fires. So "no inline border on a field" would be a rule
 *     against the codebase, not against the defect. The defect is overriding
 *     BOTH halves, which exactly one site did.
 *   - 23 inputs/textareas carry an inline `outline: 'none'`. That is redundant
 *     with the base input rule and costs nothing, because a field's ring is the
 *     box-shadow. So the outline rule is scoped to values OTHER than 'none' —
 *     decoration — which after the fixes is zero sites.
 *
 * WHAT IT DOES NOT COVER, stated rather than implied: a style object held in a
 * variable (`MyWordsScreen`'s `styles.input`) has no JSX owner to attribute it
 * to, and a ring removed by a stylesheet rule added later is a CSS question,
 * not a JSX one. The E2E half of this — tab every route, compare focused
 * against unfocused — lives in `e2e/route-render-sweep.spec.js`.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

// Line comments FIRST (sweep 72): a `//` naming a path like /api/* otherwise
// opens a block comment that runs to the next star-slash anywhere in the file.
// The `{/* … */}` JSX form needs no pass of its own — the block rule empties it.
const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const FOCUSABLE = new Set(['button', 'a', 'input', 'select', 'textarea']);
const FIELD = new Set(['input', 'textarea']);

const FILES = globSync('src/**/*.{tsx,jsx}').filter((f) => !/[\\/]tests[\\/]/.test(f));
const SRC = new Map(FILES.map((f) => [f, strip(readFileSync(f, 'utf8'))]));

type Prop = {
  file: string;
  line: number;
  owner: string;
  tagAt: number;
  prop: string;
  value: string;
};

/** Every inline style property of interest, attributed to the JSX tag it sits in. */
function props(): Prop[] {
  const out: Prop[] = [];
  const RE = /\b(outline|outlineColor|outlineStyle|outlineWidth|boxShadow|border|borderColor)\s*:/g;
  for (const [file, s] of SRC) {
    const tags = [...s.matchAll(/<\s*([A-Za-z][A-Za-z0-9.]*)/g)];
    for (const m of s.matchAll(RE)) {
      const i = m.index!;
      let owner = '?';
      let tagAt = -1;
      for (let k = tags.length - 1; k >= 0; k--)
        if (tags[k].index! < i) {
          owner = tags[k][1];
          tagAt = tags[k].index!;
          break;
        }
      out.push({
        file,
        line: s.slice(0, i).split('\n').length,
        owner,
        tagAt,
        prop: m[1],
        value: s
          .slice(i + m[0].length, i + m[0].length + 120)
          .split('\n')[0]
          .trim(),
      });
    }
  }
  return out;
}

const PROPS = props();
const CSS = readFileSync('src/index.css', 'utf8');

describe('the scan is real', () => {
  it('sees a substantial number of inline style properties', () => {
    expect(PROPS.length).toBeGreaterThan(200);
  });

  it('attributes many of them to focusable elements', () => {
    // Without this every assertion below could pass against a matcher that
    // resolves no owners at all.
    expect(PROPS.filter((p) => FOCUSABLE.has(p.owner)).length).toBeGreaterThan(80);
    expect(PROPS.filter((p) => FIELD.has(p.owner)).length).toBeGreaterThan(40);
  });

  it('still sees the harmless shapes the rules deliberately allow', () => {
    // If these two populations went to zero the rules below would be passing
    // over an empty set rather than over the codebase they were measured on.
    const noneOutline = PROPS.filter(
      (p) => p.prop.startsWith('outline') && FIELD.has(p.owner) && /^'none'/.test(p.value),
    );
    const fieldBorder = PROPS.filter((p) => p.prop.startsWith('border') && FIELD.has(p.owner));
    expect(noneOutline.length).toBeGreaterThan(15);
    expect(fieldBorder.length).toBeGreaterThan(30);
  });
});

describe('the CSS this depends on still exists', () => {
  it(':focus-visible draws an outline GLOBALLY', () => {
    // The selector has to be bare. `.sub-tab-pill:focus-visible` also carries
    // an `outline: 3px solid var(--info)`, so a loose regex here passes with
    // every global ring deleted — which is the mutation that found this.
    const global = [...CSS.matchAll(/([^{}]+)\{([^}]*)\}/g)].filter(
      (m) => m[1].trim() === ':focus-visible' && /outline\s*:\s*\d/.test(m[2]),
    );
    expect(global.length, 'nothing draws a keyboard focus ring app-wide').toBeGreaterThan(0);
  });

  it('a focused text field changes its border AND gets a ring', () => {
    const m = CSS.match(/input:focus,\s*textarea:focus\s*\{([^}]*)\}/);
    expect(m, 'the only focus indicator a text field has').toBeTruthy();
    expect(m![1]).toMatch(/border-color\s*:/);
    expect(m![1]).toMatch(/box-shadow\s*:/);
  });
});

describe('no inline style takes a focus indicator away', () => {
  it('a focusable element never uses `outline` as decoration', () => {
    const bad = PROPS.filter(
      (p) => p.prop.startsWith('outline') && FOCUSABLE.has(p.owner) && !/^'none'/.test(p.value),
    ).map((p) => `${p.file}:${p.line} <${p.owner}> ${p.prop}: ${p.value}`);
    expect(
      bad,
      "an inline outline beats the app's :focus-visible rule, so a decorative one " +
        'leaves the control with no keyboard focus ring — put the decoration on ' +
        'box-shadow (inset reads the same) and leave outline to focus',
    ).toEqual([]);
  });

  it('a text field never overrides BOTH of its focus indicators', () => {
    // Grouped by the owning TAG, not by file: a screen may hold several fields,
    // and only a single element setting both is the defect.
    const owners = new Map<string, Prop[]>();
    for (const p of PROPS) {
      if (!FIELD.has(p.owner) || p.tagAt < 0) continue;
      const key = `${p.file}@${p.tagAt}`;
      owners.set(key, [...(owners.get(key) ?? []), p]);
    }
    const bad = [...owners.entries()]
      .filter(
        ([, ps]) =>
          ps.some((p) => /^border/.test(p.prop)) && ps.some((p) => p.prop === 'boxShadow'),
      )
      .map(([k, ps]) => `${k} sets ${ps.map((p) => p.prop).join(' + ')}`);
    expect(
      bad,
      'a text field gets no :focus-visible outline, so its border colour and its ' +
        'box-shadow ring are the whole indicator — overriding both inline leaves ' +
        'nothing. Move the resting decoration into a class (see .write-area).',
    ).toEqual([]);
  });
});

describe('the two fields repaired for this stay repaired', () => {
  it('the dashboard search input carries no inline box-shadow', () => {
    const s = SRC.get('src/components/AppRouter.tsx')!;
    const i = s.indexOf('id="app-search"');
    expect(i).toBeGreaterThan(0);
    expect(s.slice(i, i + 1400)).toContain('className="search-inp"');
    expect(s.slice(i, i + 1400)).not.toMatch(/boxShadow\s*:/);
  });

  it('the AI Conversation writing textarea carries no inline border or shadow', () => {
    const s = SRC.get('src/components/croatia/AIConversation.tsx')!;
    const i = s.indexOf('Piši ovdje na hrvatskom');
    expect(i).toBeGreaterThan(0);
    const win = s.slice(i, i + 700);
    expect(win).toContain('className="write-area"');
    expect(win).not.toMatch(/\bborder\s*:/);
    expect(win).not.toMatch(/boxShadow\s*:/);
  });

  it('the classes those two moved onto exist and lose to input:focus', () => {
    // A class selector is (0,1,0); `input:focus` is (0,1,1) and wins — which is
    // the entire reason moving the declarations off the element works.
    expect(CSS).toMatch(/\.search-inp\s*\{[^}]*box-shadow\s*:/);
    expect(CSS).toMatch(/\.write-area\s*\{[^}]*border\s*:[^}]*box-shadow\s*:/);
    expect(CSS).not.toMatch(/#app-search\s*\{/);
  });
});
