// src/lib/accentInk.ts
//
// A PER-ITEM ACCENT COLOUR, MADE SAFE TO USE AS TEXT IN EITHER THEME (2026-09-27).
//
// THE SHAPE THIS EXISTS FOR. `inlineInkContrast` closed the class where an inline
// `color:` is a hardcoded LITERAL — it reads a `--ink-*` token now, and the token owns
// both halves. The tail it could not reach is the same defect wearing a variable:
//
//     <span style={{ color: team.color }}>Dinamo</span>
//
// The value arrives from DATA, so no static rule can name it and no token can replace
// it: `team.color` is the club's identity (Dinamo `#003da5`, Hajduk `#1d1d1b`, Osijek
// `#e85d04`), and the SAME field is correctly used as a badge background two lines
// away. Measured over `src/**`: 147 such render sites in 70 files, fed by 743 `color:`
// declarations across 56 data modules — so fixing the data would mean editing 743
// entries to serve 147 reads, and it would give every accent a second home to drift
// from. The render site is where the question is asked, so it is where it is answered.
//
// WHAT IT DOES. `color-mix(in srgb, C, #fff var(--ink-lift))`, with `--ink-lift` 0% in
// `:root` and 62% in `.dark`. Two properties make it safe at 147 sites at once:
//
//   * LIGHT MODE IS BYTE-IDENTICAL, not approximately so. A 0% mix computes to the
//     input's exact channels — verified in a real browser for every hex in the corpus
//     (`#003da5` → `color(srgb 0 0.239216 0.647059)`, which is rgb(0,61,165) exactly).
//     That is why `in srgb` and not `in oklab`: oklab computes to `oklab(...)` and
//     `#333` at 0% comes back with non-zero a/b, i.e. off pure grey.
//   * THE DARKEST ACCENT IN THE CORPUS CLEARS AA. 55% already puts `#0f172a` — the
//     worst case — at 4.99:1 on `--card` (#1e293b); 62% puts every measured accent at
//     6.2:1 or better while keeping the hue (`#003da5` → `#9eb5dd` still reads as
//     Dinamo blue, `#1d1d1b` → `#a9a9a8` as Hajduk's near-black).
//
// WHAT IT COSTS, STATED. The lift is uniform, so an accent that is ALREADY light in
// light mode (`#fcd34d` → `#feeebb`) loses saturation in dark mode for no contrast gain.
// Conditioning the lift on the accent's own luminance is not expressible in CSS, and a
// JS branch would need the theme at call time — which is exactly the coupling a CSS
// variable removes. A pale accent on a dark card is a cosmetic cost; dark-on-dark is an
// unreadable one.
//
// WHERE IT MUST NOT BE USED, and this is not a style preference:
//
//   * ON AN ELEMENT PAINTING ITS OWN OPAQUE LIGHT BACKGROUND. It owns both halves of
//     its contrast already, and lifting its ink puts light text on a light chip. Sweep
//     157 shipped that regression on 19 routes by fixing two things that were each
//     correct alone; the arbiter is `e2e/dark-mode-ink.spec.js`, which reads the real
//     composited surface, not a source rule.
//   * ON A `var(--…)` TOKEN — and that case IS handled here, by a pass-through, because
//     real callers reach it. `ConstellationData` gives each case an `ink` field that is
//     already a token, and `CaseCard` renders it through the same prop a data accent would
//     arrive on, so the call site cannot tell them apart. A token is already light in dark
//     mode; lifting it would wash out a colour the theme had chosen. (A branch no caller
//     reaches would be dead code — this one has a caller and a test.)
//
// AN UNSUPPORTED BROWSER FAILS SAFE. `color-mix()` is Chrome 111 / Safari 16.2 / Firefox
// 113; older engines reject the declaration at parse time, so `color` is simply not set
// and the element INHERITS a themed colour — readable in both themes, losing only the
// brand hue. That is strictly better than the dark-on-dark it replaces.

/** Surface tokens that fail as text, mapped to the ink token that carries the same hue.
 *  Exported so the guard can require every entry's twin to exist in both themes. */
export const STATUS_INK: Readonly<Record<string, string>> = {
  'var(--success)': 'var(--ink-green)',
  'var(--warning)': 'var(--ink-warn)',
  'var(--error)': 'var(--ink-error)',
  'var(--accent)': 'var(--ink-accent)',
};

/** The theme-owned lift: 0% in light, 62% in dark. Defined in `src/index.css`. */
export const INK_LIFT_VAR = '--ink-lift';

/**
 * Make a raw accent colour safe to paint TEXT with in either theme.
 *
 * @param color a CSS colour the DATA supplies (`#003da5`, `rgb(…)`, a named colour) —
 *              never a `var(--…)` token, and never on an element that paints its own
 *              opaque light background. See the header for why both are excluded.
 */
// OVERLOADED so the return type tracks the input. React's `Color` accepts
// `string | undefined` and not `null`, so a single `string | null | undefined` signature
// fails to type-check at every one of the 173 call sites — the runtime behaviour is right
// and only the type was too wide.
export function accentInk(color: string, alpha?: number): string;
export function accentInk(color: string | undefined, alpha?: number): string | undefined;
export function accentInk(color: string | null, alpha?: number): string | null;
export function accentInk(
  color: string | null | undefined,
  alpha?: number,
): string | null | undefined;
export function accentInk(
  color: string | null | undefined,
  alpha?: number,
): string | null | undefined {
  // A NON-STRING OR EMPTY VALUE IS RETURNED UNCHANGED, and that is load-bearing at the
  // `||` sites: `accentInk(k.color) || 'var(--ink-strong)'` must still fall back when
  // `k.color` is absent. Returning a mix built on `undefined` would be a TRUTHY string
  // holding an invalid colour, so the fallback would never fire and the element would
  // silently inherit instead.
  if (typeof color !== 'string' || !color.trim()) return color;
  // A STATUS OR BRAND TOKEN IS A SURFACE COLOUR, AND IT HAS AN INK TWIN (2026-09-27).
  // `--success` is 3.30:1 on white and `--warning` 3.19:1, so as TEXT both fail AA in
  // light mode, and `--error` fails on its own tint (3.95:1 on --error-bg-strong); the
  // `--accent` teal has no dark override at all. The same data field is correctly a
  // badge BACKGROUND elsewhere (StatsTab paints `cefr.color` both ways), so the data
  // must keep the surface token and the INK question is answered here, at the render
  // site. Each twin's dark value equals the token's own, so dark mode does not move.
  const trimmed = color.trim();
  const twin = STATUS_INK[trimmed];
  if (twin) return twin;
  // Any other theme token is already correct in both themes — see the header.
  if (trimmed.startsWith('var(')) return color;
  const lifted = `color-mix(in srgb, ${inkSafeOnLight(color)}, #fff var(${INK_LIFT_VAR}))`;
  // A FADED ACCENT NEEDS ITS ALPHA INSIDE THE MIX, because `accentInk(c) + '99'` is
  // nonsense — you cannot append two hex digits to a `color-mix()` string. Seven sites
  // fade an accent as ink (`accent + '99'`, `+ '80'`, `+ 'cc'`), and the guard skipped
  // them on the reasoning that a translucent colour "tracks the theme" — true of a
  // SURFACE and false of an INK: a dark accent at 60% over a dark card is still dark.
  // Nesting is byte-exact in light mode, verified in a browser: #4f46e5 at 0.6 comes back
  // as `color(srgb 0.309804 0.27451 0.898039 / 0.6)`, which is rgba(79,70,229,0.6) exactly
  // — the same value `#4f46e599` produces.
  if (typeof alpha === 'number' && Number.isFinite(alpha) && alpha < 1) {
    return `color-mix(in srgb, ${lifted} ${Math.round(Math.max(0, alpha) * 100)}%, transparent)`;
  }
  return lifted;
}

// ── LIGHT MODE: A PALE ACCENT IS DARKENED JUST ENOUGH TO READ (2026-09-27) ──────────────
//
// The lift above fixes DARK mode and leaves light mode byte-identical on purpose — which
// also left every accent that is too pale for white exactly as unreadable as it was.
// Measured over all 430 routes in the light theme (sweep 169): the data accents painted
// through this function were the largest group left under AA once the status tokens were
// fixed — `#16a34a` (3.30:1 on white), `#0d9488` 3.74, `#0891b2` 3.68, `#d97706` 3.19, and
// worse on the ~9% tint of themselves that most of these pills sit on (2.9–3.7).
//
// The value arrives as a literal at call time, so its luminance is KNOWABLE here — which is
// exactly what CSS cannot do. A colour that already clears `INK_TARGET_ON_WHITE` is returned
// as the SAME STRING (light mode byte-exact, as before); a paler one is mixed toward black in
// sRGB, which keeps the hue, by the smallest amount that reaches the target. The dark lift is
// then applied to THAT colour; a colour at the target luminance lifts to ~9:1 on the card, so
// dark mode stays readable.
//
// 5.5, not 4.5, because the text usually sits on a tint of its own colour, not on white:
// 5.5:1 on white is ~4.6:1 on #ebebeb, the palest tint the census measured.
// Formats other than hex and rgb()/rgba() (a named colour, hsl()) pass through untouched.

/** The contrast against pure white an accent must reach before it is used as ink. */
export const INK_TARGET_ON_WHITE = 5.5;

function channelsOf(c: string): [number, number, number] | null {
  const s = c.trim();
  let m = /^#([0-9a-f]{3})$/i.exec(s);
  if (m)
    return [0, 1, 2].map((i) => parseInt(m![1]![i]! + m![1]![i]!, 16)) as [number, number, number];
  m = /^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(s);
  if (m)
    return [0, 2, 4].map((i) => parseInt(m![1]!.slice(i, i + 2), 16)) as [number, number, number];
  m = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,[^)]*)?\)$/i.exec(s);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return null;
}

function luminance([r, g, b]: [number, number, number]): number {
  const f = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/** Contrast of a colour against white, or null when the format is not one we parse. */
export function contrastOnWhite(color: string): number | null {
  const ch = channelsOf(color);
  return ch ? 1.05 / (luminance(ch) + 0.05) : null;
}

/**
 * The colour itself when it already reads on white at `INK_TARGET_ON_WHITE`; otherwise the
 * same hue mixed toward black by the least amount that does. Unparseable input is returned
 * unchanged.
 */
export function inkSafeOnLight(color: string): string {
  const ch = channelsOf(color);
  if (!ch) return color;
  const maxLum = 1.05 / INK_TARGET_ON_WHITE - 0.05;
  if (luminance(ch) <= maxLum) return color;
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 24; i++) {
    const k = (lo + hi) / 2;
    const mixed = ch.map((v) => v * (1 - k)) as [number, number, number];
    if (luminance(mixed) <= maxLum) hi = k;
    else lo = k;
  }
  // Round each channel DOWN so rounding can never put the result back over the line.
  const out = ch.map((v) => Math.floor(v * (1 - hi)));
  return '#' + out.map((v) => v.toString(16).padStart(2, '0')).join('');
}
