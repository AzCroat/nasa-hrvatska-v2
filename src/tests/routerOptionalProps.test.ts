/**
 * routerOptionalProps.test.ts — a dead branch behind an optional prop (2026-09-23).
 *
 * THE CLASS, and it has now bitten three times. A component declares `foo?:` and
 * branches on it (`foo && …`, `typeof foo === 'function'`, `foo?.()`). Nothing
 * passes it. The branch is unreachable, and **a dead branch behind an
 * optional-prop check is indistinguishable from a deliberate optional
 * dependency** — which is exactly why all three survived so long:
 *
 *   AlphabetScreen.award   `<AlphabetScreen goBack={goBack} />` with no `award`,
 *                          so `if (typeof award === 'function')` was false and
 *                          the quiz's 20 XP was dead for the life of the screen.
 *                          Its own component tests passed `award` themselves,
 *                          which proves the screen works WHEN WIRED and says
 *                          nothing about whether it IS.
 *   LevelQuiz.onPass       `if (passed && onPass) onPass()`, never supplied.
 *                          Harmless — the pass is recorded in
 *                          `stats.levelQuizPasses`, which LearnPath consumes —
 *                          but dead in both directions. Removed with this file.
 *   MicPermissionDeniedExplainer.onUseWriting (2026-09-25, sweep 128)
 *                          A "Use writing instead" button gated on an optional
 *                          callback that NOT ONE of its ten render sites passed,
 *                          under a docstring saying it was "hidden when the
 *                          consumer doesn't pass the callback (e.g. screens with
 *                          no writing analog like AIConversation)" — prose that
 *                          reads as a considered per-consumer choice and was
 *                          describing a button that had never rendered.
 *
 * `routerAwardProp.test.ts` already guards the FIRST one. It is scoped to the
 * name `award`, so it could never have found the second: the survey that
 * declared AlphabetScreen "the only one" was a survey of that one prop, not of
 * the class. This file asks the general question, and after sweep 128 it asks it
 * of two CALLER SETS, because the third instance was outside the first one:
 *
 *   CHECK A  a ROUTED screen, an optional prop it BRANCHES on, and AppRouter.
 *   CHECK B  ANY component, an optional prop whose TYPE IS A FUNCTION and which
 *            the component uses, and EVERY PRODUCTION CALLER of it.
 *
 * Check A could not see the explainer at all — it is a shared child, not a route,
 * so it was never in `ROUTED`. Check B's scope was chosen by measurement, not by
 * taste: restricted to FUNCTION-typed props it yields exactly the one real
 * finding across 204 subjects, whereas admitting value props yields 13 cosmetic
 * ones (a defaulted flag, a style override), and a guard that is mostly false
 * positives trains everyone to ignore it.
 *
 * TEST FILES ARE NOT CALLERS. That is the AlphabetScreen lesson as a rule: a
 * component test that supplies the prop is evidence about the component, never
 * about the wiring, so `src/tests` is excluded from the caller set. With it
 * included, the explainer's own test passes `onUseWriting` and Check B reports
 * clean on the very defect it was written for.
 *
 * THE ATTRIBUTE SCANNER IS LOAD-BEARING, and a naive one gets this wrong in the
 * dangerous direction. Matching props with `<Name([^>]*)>` stops at the FIRST
 * `>` — and AppRouter passes arrow functions (`setTab={(id: string) => { … }}`),
 * so the capture truncates mid-attribute and every prop after it reads as "never
 * passed". Measured: that version reported `HomeTab.authUser` as dead when
 * AppRouter passes it plainly. Truncation shrinks the passed-set, so it can only
 * ADD false positives — it fails loud rather than silent, but it fails. `attrsOf`
 * balances braces and skips strings so it reads the whole tag.
 *
 * AND THE PROPS TYPE IS RESOLVED FROM THE COMPONENT'S OWN SIGNATURE (sweep 128).
 * It used to be the FIRST `…Props` declaration in the file, which in 13 of 619
 * component files is not the component's own — `BadgeArtwork`→`ShapeProps`,
 * `WordSprint`→`TimerDisplayProps`, `ProductionDrillScreen`→`LevelBadgeProps`,
 * `StoryViewPanel`→`WordTokenProps`, four screens→`QuizBlockProps`, three
 * →`BackBtnProps`. Those files were being checked against an INNER helper's
 * props, so the guard was asking the wrong question of them in both directions.
 * It cost nothing today (Check A reports the same set either way), so this half
 * is a ratchet.
 *
 * **THERE IS NO FALLBACK TO THE FIRST `…Props` DECLARATION, and that is a
 * measurement rather than a preference.** My first draft kept one for components
 * whose signature would not resolve, and it MANUFACTURED a finding: `StoriesTab`
 * takes no props at all (`const { award } = useApp()`), so the fallback read the
 * inner `WordTileProps.award` and reported it against `StoriesTab`'s call sites
 * — a dead prop on a live award path. An unresolvable signature yields NO
 * subject; a wrong subject is worse than a missing one.
 *
 * Getting that resolver right took one non-obvious fix: **the depth walk must
 * not count `<` and `>`.** Every `=>` inside a function type decremented the
 * depth, which took 33 of 401 routed components from resolved to unresolved —
 * and unresolved is silent. With `(){}[]` only, 400 of 401 resolve (the holdout
 * was a class component, now handled) and 588 of 619 component files do.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const ROUTER = strip(readFileSync('src/components/AppRouter.tsx', 'utf8'));

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|jsx)$/.test(e)) out.push(p);
  }
  return out;
}
const COMPONENT_FILES = walk('src/components');

function componentFiles(): Map<string, string> {
  const out = new Map<string, string>();
  for (const p of COMPONENT_FILES) {
    const name = p
      .split('/')
      .pop()!
      .replace(/\.(tsx|jsx)$/, '');
    if (!out.has(name)) out.set(name, p);
  }
  return out;
}
const FILES = componentFiles();

/** Production callers: every JSX-bearing file in src/ EXCEPT the tests. */
const CALLER_SRC: string[] = walk('src')
  .filter((p) => !p.includes('/tests/') && !/\.test\.[jt]sx?$/.test(p))
  .map((p) => strip(readFileSync(p, 'utf8')));

/** The attribute text of one JSX opening tag, balancing `{}` and skipping
 *  strings so an arrow function's `=>` cannot end the tag early. */
function attrsOf(src: string, from: number): string {
  let depth = 0;
  let quote = '';
  for (let i = from; i < src.length; i++) {
    const c = src[i]!;
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '>' && depth === 0) return src.slice(from, i);
  }
  return src.slice(from);
}

/**
 * A JSX **props spread** — `<Foo {...rest} />` — which makes the passed-set
 * unknowable, so such a component is skipped.
 *
 * IT MUST BE DETECTED AT ATTRIBUTE DEPTH. A bare `/\{\s*\.\.\./` test also
 * matches an object spread nested inside a handler body, and AppRouter's
 * `<PlacementTest onComplete={… ({...prev}) …} onCancel={…} />` has one — so the
 * loose version skipped four components (PlacementTest, SessionCard, HrvatskaTab,
 * RazgovorTab) that pass every prop plainly. A skip is a silent loss of
 * coverage, which is the one direction this file must not fail in.
 */
function hasPropsSpread(attrs: string): boolean {
  let depth = 0;
  let quote = '';
  for (let i = 0; i < attrs.length; i++) {
    const c = attrs[i]!;
    if (quote) {
      if (c === quote && attrs[i - 1] !== '\\') quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') {
      if (depth === 0 && /^\s*\.\.\./.test(attrs.slice(i + 1))) return true;
      depth++;
    } else if (c === '}') depth--;
  }
  return false;
}

/** Props passed to <Name> across the given sources, plus what could not be read. */
function passedTo(
  sources: string[],
  name: string,
): { props: Set<string>; spread: boolean; sites: number } {
  const props = new Set<string>();
  let spread = false;
  let sites = 0;
  const re = new RegExp(`<${name}\\b`, 'g');
  for (const src of sources) {
    if (!src.includes('<' + name)) continue;
    for (const m of src.matchAll(re)) {
      sites++;
      const attrs = attrsOf(src, m.index! + m[0].length);
      if (hasPropsSpread(attrs)) spread = true;
      for (const a of attrs.matchAll(/(\w+)\s*=/g)) props.add(a[1]!);
    }
  }
  return { props, spread, sites };
}

/** Every prop name AppRouter passes to <Name>, across all its usages. */
function propsPassedTo(name: string): Set<string> {
  return passedTo([ROUTER], name).props;
}

/**
 * The text of a component's FIRST parameter declaration — balancing `(){}[]`
 * and NEVER `<>`, because every `=>` in a function type would decrement the
 * depth and lose the parameter entirely.
 */
export function paramText(src: string, name: string): string | null {
  const re = new RegExp(
    `(?:export\\s+default\\s+)?(?:function\\s+${name}\\s*(?:<[^>]*>)?\\s*\\(` +
      `|const\\s+${name}\\s*(?::[^=]*)?=\\s*(?:React\\.)?(?:memo\\s*\\()?\\s*(?:function\\s*\\w*\\s*)?\\()`,
  );
  const m = re.exec(src);
  if (!m) return null;
  const from = m.index + m[0].length;
  let depth = 0;
  let quote = '';
  for (let i = from; i < src.length; i++) {
    const c = src[i]!;
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      quote = c;
      continue;
    }
    if (c === '{' || c === '(' || c === '[') depth++;
    else if (c === '}' || c === ']') depth--;
    else if (c === ')') {
      if (depth === 0) return src.slice(from, i);
      depth--;
    }
  }
  return null;
}

/** The type annotation of a parameter, split at the parameter's OWN `:`. */
function annotationOf(param: string): string | null {
  let depth = 0;
  let quote = '';
  for (let i = 0; i < param.length; i++) {
    const c = param[i]!;
    if (quote) {
      if (c === quote && param[i - 1] !== '\\') quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      quote = c;
      continue;
    }
    if (c === '{' || c === '(' || c === '[') depth++;
    else if (c === '}' || c === ')' || c === ']') depth--;
    else if (c === ':' && depth === 0) return param.slice(i + 1).trim();
  }
  return null;
}

function namedTypeBody(src: string, typeName: string): string | null {
  // `extends` has to be admitted: `interface ReadingListProps extends LaunchSetters {`
  // was the last unresolved routed component before it was. Inherited members are
  // NOT read, so an optional prop declared on the parent yields no subject — this
  // can only miss a finding, never invent one.
  const d = new RegExp(
    `(?:interface|type)\\s+${typeName}\\s*(?:extends\\s+[^{]+)?=?\\s*\\{([\\s\\S]*?)\\n\\}`,
  ).exec(src);
  return d ? d[1]! : null;
}

/**
 * The body of a component's OWN props type — `''` when it takes none, `null`
 * when the signature cannot be resolved. NEVER the first `…Props` in the file.
 */
export function ownPropsBody(src: string, name: string): string | null {
  const cls = new RegExp(
    `class\\s+${name}\\s+extends\\s+(?:React\\.)?Component<\\s*([A-Za-z_$][\\w$]*)`,
  ).exec(src);
  if (cls) return namedTypeBody(src, cls[1]!);

  const param = paramText(src, name);
  if (param === null) return null;
  if (!param.trim()) return '';
  const ann = annotationOf(param);
  if (!ann) return null;
  const named = /^([A-Za-z_$][\w$]*)$/.exec(ann.replace(/\s*=[\s\S]*$/, '').trim());
  if (named) return namedTypeBody(src, named[1]!);
  if (ann.startsWith('{')) {
    let depth = 0;
    for (let i = 0; i < ann.length; i++) {
      if (ann[i] === '{') depth++;
      else if (ann[i] === '}') {
        depth--;
        if (depth === 0) return ann.slice(1, i);
      }
    }
  }
  return null;
}

/** Optional props a component declares AND branches on. */
function optionalBranchedProps(file: string): string[] {
  const src = strip(readFileSync(file, 'utf8'));
  const name = file
    .split('/')
    .pop()!
    .replace(/\.(tsx|jsx)$/, '');
  const body = ownPropsBody(src, name);
  if (!body) return [];
  const optional = [...body.matchAll(/^\s*(\w+)\?\s*:/gm)].map((m) => m[1]!);
  return optional.filter((p) => BRANCHES_ON(p).test(src));
}

/**
 * THE PREDICATE MISSED TWO SHAPES, AND ONE OF THEM WAS LIVE (2026-09-24).
 *
 * The first version matched `&& p`, `p &&`, `typeof p === 'function'` and
 * `p?.(` — four ways of branching, and not the two commonest for a BOOLEAN:
 * `p || q` and `p ? x : y`. `McGame.challengeMode` was optional, passed by
 * nothing (not AppRouter, not one test), and used as
 * `challengeMode || heartsAlwaysOn`; it forwarded to `McGameOver`, whose two
 * `challengeMode` arms could therefore never render — one of them a refill
 * line contradicting `lives.ts`. The guard was written for exactly this class
 * the day before and reported it clean, because the class is defined by its
 * MATCHER and the matcher knew four spellings out of six.
 *
 * Widening is the direction that invents false positives, so it was censused
 * first: across 400 routed components the two added shapes yield exactly two
 * props, one real and one a deliberate test seam (see EXEMPT).
 */
const BRANCHES_ON = (p: string) =>
  new RegExp(
    `&&\\s*${p}\\b|\\b${p}\\s*&&|typeof\\s+${p}\\s*===\\s*['"]function|\\b${p}\\?\\.\\(` +
      // `p || q` / `q || p` — how an optional boolean is usually defaulted.
      `|\\b${p}\\s*\\|\\||\\|\\|\\s*${p}\\b` +
      // `p ? x : y`, excluding `p?.` (optional chaining) and `p?:` (a type).
      `|\\b${p}\\s*\\?[^.:]`,
  );

/** A prop whose declared type is a function — the Check B scope. */
const IS_FUNCTION_TYPE = (t: string) => /=>/.test(t) || /^\(\s*\)/.test(t);

/** The component USES the callback: calls it, or hands it to a handler/child. */
const USES = (p: string) =>
  new RegExp(`\\b${p}\\s*\\(|\\b${p}\\?\\.\\(|=\\{\\s*${p}\\s*\\}|&&\\s*${p}\\b|\\b${p}\\s*&&`);

/** Optional FUNCTION props a component declares and uses. */
function optionalCallbackProps(file: string): string[] {
  const src = strip(readFileSync(file, 'utf8'));
  const name = file
    .split('/')
    .pop()!
    .replace(/\.(tsx|jsx)$/, '');
  const body = ownPropsBody(src, name);
  if (!body) return [];
  return [...body.matchAll(/^\s*(\w+)\?\s*:\s*([^\n]+)$/gm)]
    .filter((m) => IS_FUNCTION_TYPE(m[2]!))
    .map((m) => m[1]!)
    .filter((p) => USES(p).test(src));
}

/**
 * Optional props a component branches on that the caller legitimately omits.
 * The reason has to be that PRODUCTION omits it BY DESIGN and the component
 * supplies its own value — the `vocabPool.allCats` shape, an injection seam
 * kept for tests. "Nothing passes it" is the defect this file exists to find,
 * so it is never a reason to be here.
 */
const EXEMPT: Record<string, string> = {
  'RetentionCheckScreen.lessons':
    'Test-fixture injection. retentionWiring.test.tsx passes the lesson bodies; ' +
    'production omits it and the screen FETCHES them instead — `if (lessons) return undefined` ' +
    'skips the fetch when injected. The branch is reachable in both directions.',
};

/**
 * Components with an optional callback that NOTHING RENDERS AT ALL — a strictly
 * worse condition than a dead prop, and one that Check B cannot judge, because
 * with no call site there is no passed-set to compare against.
 *
 * `noUnreachableModules.test.ts` does not cover these either, deliberately: its
 * walk seeds from every test as well as the app entries, so "a module kept alive
 * only by its own tests still counts as reachable — that is a softer problem and
 * is not what this guard is for". A component reachable only from its own test
 * therefore falls between the two, which is how this one went a hundred days
 * unrendered while being MAINTAINED FOUR TIMES.
 *
 * Listing them here is what makes the skip non-silent.
 */
const NOT_RENDERED: Record<string, string> = {
  'DailyListeningCard.award':
    'SUPERSEDED, not stranded (2026-09-25). 589 lines, 15 XP, a quest and per-line ' +
    'audio, rendered by nothing since 2026-06-19 — PR #55 (Grad redesign) deleted its ' +
    'only site in PracticeTab while its own plan said in writing "Keep … ' +
    'DailyListeningCard (reused by Grad/Today)", and the new site was never added. It ' +
    'is not reinstated because the routed AIListeningScreen (922 lines, in ' +
    'PRODUCTION_POOL and serving the P2.8 comprehension slot) calls the SAME ' +
    '/api/listening for the same job, so a second door would double-award the same ' +
    'generator — the RegionScreens.tsx shape. Deletion is a separate decision: three ' +
    'guards pin this PATH in source-pin lists (aiRefusalMessages, questIdsExist, ' +
    'aiSurfaceClassifies) and dailyListeningCard.test.ts imports correctOption, the ' +
    'MediaCard.tsx exemption shape in noUnreachableModules.',
};

const ROUTED = [...new Set([...ROUTER.matchAll(/<([A-Z]\w+)\b/g)].map((m) => m[1]!))].filter((n) =>
  FILES.has(n),
);

describe('AppRouter supplies every optional prop its screens branch on', () => {
  it('the sweep is real: it resolves a substantial number of routed components', () => {
    expect(ROUTED.length).toBeGreaterThan(100);
  });

  it('the attribute scanner reads a whole tag, arrow functions included', () => {
    // The exact shape that broke the naive version: a `>` inside an arrow
    // function, with the prop under test AFTER it.
    const tag = `<Foo a={(id: string) => { return id; }} bar={1} baz="x >" qux={2}>`;
    const attrs = attrsOf(tag, tag.indexOf('<Foo') + 4);
    const names = [...attrs.matchAll(/(\w+)\s*=/g)].map((m) => m[1]);
    expect(names).toContain('bar');
    expect(names).toContain('qux');
  });

  it('non-vacuity: a prop the router DOES pass is seen as passed', () => {
    // HomeTab.authUser is passed plainly, and is what the naive scanner missed.
    expect(propsPassedTo('HomeTab')).toContain('authUser');
  });

  it('no routed screen branches on an optional prop the router never passes', () => {
    const dead: string[] = [];
    for (const name of ROUTED) {
      const passed = propsPassedTo(name);
      for (const p of optionalBranchedProps(FILES.get(name)!)) {
        if (passed.has(p) || EXEMPT[`${name}.${p}`]) continue;
        dead.push(`${name}.${p}  (${FILES.get(name)})`);
      }
    }
    expect(
      dead,
      'these components branch on an optional prop AppRouter never supplies, so the branch is ' +
        'unreachable — either pass the prop or delete the branch. A dead branch behind an ' +
        'optional-prop check looks exactly like a deliberate optional dependency.',
    ).toEqual([]);
  });

  it('the widened shapes match what they were added for', () => {
    // Driven against the real matcher rather than asserted about it, so a
    // reworded regex that stops matching `||` fails here.
    expect(BRANCHES_ON('flag').test('const on = flag || pref;')).toBe(true);
    expect(BRANCHES_ON('flag').test('{flag ? a : b}')).toBe(true);
    // The original four still match: `p?.(` is a CALL of an optional callback,
    // which is not the same as `p?.foo` — writing the probe as `flag?.call()`
    // failed here first, correctly, because that is optional chaining.
    expect(BRANCHES_ON('flag').test('flag?.()')).toBe(true);
    // The type declaration itself must NOT read as a branch, or every optional
    // prop would match its own `?:` and the filter would select all of them.
    expect(BRANCHES_ON('flag').test('  flag?: boolean;')).toBe(false);
  });

  it('every exemption still names a real, still-exempt prop', () => {
    // Both staleness directions: the component must still exist and still
    // declare the prop as optional, and the router must still NOT pass it —
    // an exemption over a prop the router now supplies is guarding nothing.
    expect(Object.keys(EXEMPT).length).toBeGreaterThan(0);
    for (const [key, reason] of Object.entries(EXEMPT)) {
      const [comp, prop] = key.split('.') as [string, string];
      expect(reason.length, `${key} needs a stated reason`).toBeGreaterThan(40);
      const file = FILES.get(comp);
      expect(file, `${key}: component no longer exists`).toBeTruthy();
      expect(
        optionalBranchedProps(file!),
        `${key}: no longer an optional branched prop — drop the exemption`,
      ).toContain(prop);
      expect(
        propsPassedTo(comp).has(prop),
        `${key}: AppRouter now passes it — drop the exemption`,
      ).toBe(false);
    }
  });
});

describe("a component's own props type is resolved from its own signature", () => {
  it('reads the signature, NOT the first …Props declaration in the file', () => {
    // BadgeArtwork declares ShapeProps first, for an inner helper. Reading that
    // one asks the wrong question of the file — in both directions.
    const src = strip(readFileSync(FILES.get('BadgeArtwork')!, 'utf8'));
    expect(
      /interface\s+ShapeProps/.test(src),
      'fixture moved: BadgeArtwork no longer declares ShapeProps first',
    ).toBe(true);
    const body = ownPropsBody(src, 'BadgeArtwork');
    expect(body, 'BadgeArtwork should resolve to its OWN props').toBeTruthy();
    // The own props carry the badge fields; ShapeProps does not.
    expect(body).toMatch(/\bbadgeId\b|\bbadge\b|\bsize\b/);
  });

  it('an unresolvable signature yields NO subject rather than a wrong one', () => {
    // StoriesTab takes no props (`const { award } = useApp()`), and the inner
    // WordTileProps declares `award?`. A first-…Props fallback reported
    // `StoriesTab.award` as a dead prop on a live award path.
    const src = strip(readFileSync(FILES.get('StoriesTab')!, 'utf8'));
    expect(
      /interface\s+WordTileProps/.test(src),
      'fixture moved: StoriesTab no longer has WordTileProps',
    ).toBe(true);
    expect(ownPropsBody(src, 'StoriesTab')).toBe('');
    expect(optionalCallbackProps(FILES.get('StoriesTab')!)).toEqual([]);
  });

  it('the depth walk does not count `<`/`>` — every `=>` would decrement it', () => {
    // This shape is why 33 of 401 routed components silently failed to resolve.
    const src = `export default function Foo({\n  a,\n  onX,\n}: {\n  a: number;\n  onX?: (n: number) => void;\n}) {\n  return null;\n}\n`;
    const body = ownPropsBody(src, 'Foo');
    expect(body, 'a function-typed member must not lose the parameter').toBeTruthy();
    expect(body).toMatch(/onX\?/);
  });

  it('resolves a class component and an `extends` interface', () => {
    const cls = `interface FooProps {\n  onDone?: () => void;\n}\nexport default class Foo extends React.Component<FooProps, S> {}\n`;
    expect(ownPropsBody(cls, 'Foo')).toMatch(/onDone\?/);
    const ext = `interface FooProps extends Base {\n  onDone?: () => void;\n}\nexport default function Foo({ onDone }: FooProps) {}\n`;
    expect(ownPropsBody(ext, 'Foo')).toMatch(/onDone\?/);
  });

  it('resolution covers nearly every component file, so the sweep is not thin', () => {
    let resolved = 0;
    for (const f of COMPONENT_FILES) {
      const name = f
        .split('/')
        .pop()!
        .replace(/\.(tsx|jsx)$/, '');
      if (ownPropsBody(strip(readFileSync(f, 'utf8')), name) !== null) resolved++;
    }
    // 588 of 619 at the time of writing. A floor, so a resolver that quietly
    // stops reading a shape fails here instead of going silent.
    expect(resolved).toBeGreaterThan(520);
  });
});

describe('no component uses an optional callback that no production caller passes', () => {
  /** Every component with an optional callback it uses, and a render site. */
  function subjects(): {
    name: string;
    file: string;
    props: string[];
    sites: number;
    spread: boolean;
  }[] {
    const out: { name: string; file: string; props: string[]; sites: number; spread: boolean }[] =
      [];
    for (const f of COMPONENT_FILES) {
      const name = f
        .split('/')
        .pop()!
        .replace(/\.(tsx|jsx)$/, '');
      const props = optionalCallbackProps(f);
      if (!props.length) continue;
      const { sites, spread } = passedTo(CALLER_SRC, name);
      out.push({ name, file: f, props, sites, spread });
    }
    return out;
  }

  it('the sweep is real: it has a substantial subject population', () => {
    const live = subjects().filter((s) => s.sites > 0 && !s.spread);
    // 204 at the time of writing.
    expect(live.length).toBeGreaterThan(150);
  });

  it('the props spread is detected at ATTRIBUTE depth, not anywhere in the tag', () => {
    const nested = `<Foo onDone={() => set({ ...prev, a: 1 })} onCancel={c}>`;
    expect(
      hasPropsSpread(attrsOf(nested, 4)),
      'an object spread inside a handler body is not a props spread',
    ).toBe(false);
    const real = `<Foo {...rest} onCancel={c}>`;
    expect(hasPropsSpread(attrsOf(real, 4))).toBe(true);
    // And the live consequence: PlacementTest passes onCancel plainly at both
    // AppRouter sites, and the loose test skipped it over a `{...prev}`.
    expect(propsPassedTo('PlacementTest')).toContain('onCancel');
  });

  it('test files are NOT callers — a component test proves wiring of nothing', () => {
    // The AlphabetScreen lesson as an assertion: with src/tests in the caller
    // set, the explainer's own test supplied `onUseWriting` and this whole
    // describe reported clean on the defect it was written for.
    expect(CALLER_SRC.some((s) => s.includes('@testing-library/react'))).toBe(false);
  });

  it('every optional callback a component uses is passed by some caller', () => {
    const dead: string[] = [];
    for (const s of subjects()) {
      if (s.sites === 0 || s.spread) continue;
      const { props: passed } = passedTo(CALLER_SRC, s.name);
      for (const p of s.props) {
        if (passed.has(p) || EXEMPT[`${s.name}.${p}`]) continue;
        dead.push(`${s.name}.${p}  (${s.file})`);
      }
    }
    expect(
      dead,
      'these components USE an optional callback prop that no production caller passes, so the ' +
        'branch behind it cannot render. Either pass it from the consumer that needs it, or ' +
        'delete the prop and the branch — and correct any docstring implying a consumer chooses.',
    ).toEqual([]);
  });

  it('the unrendered components are listed with reasons, so the skip is not silent', () => {
    const zero = subjects().filter((s) => s.sites === 0);
    const keys = zero.flatMap((s) => s.props.map((p) => `${s.name}.${p}`));
    expect(
      keys.sort(),
      'a component with an optional callback that NOTHING renders is outside this check (no ' +
        'call site, no passed-set) and outside noUnreachableModules (its own test keeps it ' +
        'reachable). Record it in NOT_RENDERED with the reason, or give it a render site.',
    ).toEqual(Object.keys(NOT_RENDERED).sort());
  });

  it('every NOT_RENDERED entry still names a real, still-unrendered component', () => {
    expect(Object.keys(NOT_RENDERED).length).toBeGreaterThan(0);
    for (const [key, reason] of Object.entries(NOT_RENDERED)) {
      const [comp, prop] = key.split('.') as [string, string];
      expect(reason.length, `${key} needs a stated reason`).toBeGreaterThan(80);
      const file = FILES.get(comp);
      expect(file, `${key}: component no longer exists`).toBeTruthy();
      expect(
        optionalCallbackProps(file!),
        `${key}: no longer an optional callback prop — drop the entry`,
      ).toContain(prop);
      expect(
        passedTo(CALLER_SRC, comp).sites,
        `${key}: something renders it now — drop the entry and let the check judge it`,
      ).toBe(0);
    }
  });
});
