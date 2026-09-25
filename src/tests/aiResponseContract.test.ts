/**
 * SWEEP 121 — THE SERVER→CLIENT HALF OF AN AI ENDPOINT'S CONTRACT.
 *
 * Sweep 120 established that there are TWO contracts around an AI endpoint and that
 * they are not the same set: the prompt's declared JSON binds the MODEL to the
 * endpoint, and the endpoint's own RESPONSE binds it to the client. Most of these
 * endpoints RESHAPE — `/api/assess-speaking` nests the rubric under `scores` and adds
 * `transcript`, `/api/speaking-coach` returns a wholly different object, `/api/listening`
 * rebuilds its payload field by field — so comparing a client's reads against the
 * PROMPT reports envelope fields as findings and misses the real question.
 *
 * The real question is the `scene.qs` / `v.tip` class on an AI boundary: a client
 * reading a field the endpoint never sends. `undefined` short-circuits the optional
 * render, the card is one line shorter, and there is no throw, no Sentry event and no
 * failing test — `RegionScreen` rendered every dialect word's note from `v.tip` for the
 * life of the screen while the payload carried `note`.
 *
 * MEASURED when written: 31 attributable client files across 20 endpoints, and the
 * contract HOLDS — five candidates, every one a non-defect (two were this
 * derivation's own gap: `/api/listening` sets `speakers`/`narrator` onto its response
 * AFTER the literal, conditionally on style). So this is a ratchet, not a save; say
 * that plainly rather than dressing a clean sweep as a find.
 *
 * SWEEP 123 WIDENED IT THREE WAYS AND THE CONTRACT STILL HOLDS — 43 files over 33
 * endpoints, the only candidates being the three already-tolerated fallback arms:
 *   1. MULTI-ENDPOINT FILES ARE NO LONGER SKIPPED. `paths.size !== 1` excluded TEN
 *      files, and they are the AI-heaviest screens in the product. They are compared
 *      against the UNION of their endpoints' keys — see `attributable` for why the
 *      union, and not per-handler scoping, is the honest rule here.
 *   2. A DESTRUCTURED READ IS A READ. `const { imageUrl } = await r.json()` bound no
 *      name the read loop could follow. Measured: five such reads in the whole client
 *      tree, every one correct.
 *   3. A TEMPLATE-PREFIXED PATH IS A PATH. `` `${apiBase}/api/server-time` `` was
 *      invisible, so two files reached no endpoint at all.
 * And one hardening in the DANGEROUS direction: `strip` left TRAILING comments, so
 * `foo(); // ok({ x })` credited the endpoint with a key it does not send — a real
 * finding turned into a pass. Mutation-verified on real files, both directions.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync, readdirSync } from 'node:fs';

const API = 'functions/api';
const strip = (s: string) =>
  s
    // LINE comments FIRST, both shapes, and blocks LAST (sweep 72's ordering rule: a
    // `//` naming a path like `/api/*` otherwise opens a block comment that eats the
    // rest of the file, and a guard whose subject has vanished passes).
    .replace(/^\s*\/\/.*$/gm, '')
    // TRAILING comments as well, and this is the DANGEROUS direction (sweep 123):
    // `foo(); // ok({ neverSent })` makes `keysOf` credit a key the endpoint does not
    // send, which turns a real finding into a pass. Only a `//` preceded by
    // whitespace, so a URL's `://` inside a string survives; and never one whose body
    // contains `*/`, so a one-line `/* a // b */` keeps its own terminator for the
    // block pass instead of becoming a runaway.
    .replace(/([^\S\n])\/\/(?:(?!\*\/)[^\n])*$/gm, '$1')
    .replace(/\/\*[\s\S]*?\*\//g, '');
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * A path start with NO closing quote required — a query string must not hide it —
 * and `}` as an opener, because `` `${apiBase}/api/server-time` `` is how the two
 * base-prefixed callers spell it (sweep 123: measured 5 files whose endpoint the
 * quote-only form could not see, 2 of them real code and 3 trailing comments).
 */
const WIDE = /['"`}](\/api\/[a-z0-9-]+)/g;

function braceSpan(s: string, i: number): string | null {
  let d = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') d++;
    else if (s[j] === '}') {
      d--;
      if (d === 0) return s.slice(i, j + 1);
    }
  }
  return null;
}

/** Depth-1 comma-separated segments of an object literal, skipping strings. */
function splitTop(block: string): string[] {
  const inner = block.slice(1, -1);
  const segs: string[] = [];
  let d = 0;
  let cur = '';
  let q: string | null = null;
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i]!;
    if (q) {
      cur += c;
      if (c === '\\') {
        cur += inner[i + 1] ?? '';
        i++;
      } else if (c === q) q = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') {
      q = c;
      cur += c;
      continue;
    }
    if ('{[('.includes(c)) d++;
    else if ('}])'.includes(c)) d--;
    if (c === ',' && d === 0) {
      segs.push(cur);
      cur = '';
      continue;
    }
    cur += c;
  }
  if (cur.trim()) segs.push(cur);
  return segs;
}

function keysOf(block: string): { keys: Set<string>; spreads: Set<string> } {
  const keys = new Set<string>();
  const spreads = new Set<string>();
  for (const seg of splitTop(block)) {
    const t = seg.trim();
    if (!t) continue;
    let m = /^\.\.\.\s*([A-Za-z_$][\w$]*)/.exec(t);
    if (m) {
      spreads.add(m[1]!);
      continue;
    }
    m = /^['"]?([A-Za-z_$][\w$]*)['"]?\s*:/.exec(t);
    if (m) {
      keys.add(m[1]!);
      continue;
    }
    m = /^([A-Za-z_$][\w$]*)$/.exec(t);
    if (m) keys.add(m[1]!);
  }
  return { keys, spreads };
}

/** Keys a prompt in this endpoint's graph declares — used only for a forwarded parse. */
function promptKeys(file: string): Set<string> {
  const out = new Set<string>();
  const seen = [file, ...globSync(`${API}/_*.js`)];
  const src = readFileSync(file, 'utf8');
  for (const f of seen) {
    const s = readFileSync(f, 'utf8');
    const defs = [...s.matchAll(/definePrompt\(\s*'([^']+)'/g)];
    const consts = new Map<string, string>();
    for (const c of s.matchAll(/const\s+([A-Za-z_$][\w$]*)\s*=\s*definePrompt\(\s*'([^']+)'/g))
      consts.set(c[2]!, c[1]!);
    defs.forEach((m, i) => {
      const end = i + 1 < defs.length ? defs[i + 1]!.index! : Math.min(s.length, m.index! + 6000);
      const body = s.slice(m.index! + m[0].length, end);
      const cname = consts.get(m[1]!);
      // A shared prompt counts only when this endpoint references its const.
      if (f !== file && !(cname && new RegExp(`\\b${esc(cname)}\\b`).test(src))) return;
      for (const k of body.matchAll(/"([A-Za-z_$][\w$]*)"\s*:/g)) out.add(k[1]!);
    });
  }
  return out;
}

/**
 * Everything an endpoint can put on a 200 body: the `ok({…})` literals, a 200
 * `new Response(JSON.stringify({…}))`, a local object returned through `ok(x)` —
 * INCLUDING the `x.key = …` assignments that follow it, which `/api/listening` uses
 * for `speakers`/`narrator` — and, when the parsed model object is spread or
 * forwarded whole, the prompt's own keys.
 */
function responseKeys(file: string): Set<string> {
  const s = strip(readFileSync(file, 'utf8'));
  const keys = new Set<string>();
  const spreads = new Set<string>();
  const locals = new Map<string, { keys: Set<string>; spreads: Set<string> }>();
  for (const m of s.matchAll(/const\s+([A-Za-z_$][\w$]*)\s*=\s*\{/g)) {
    const b = braceSpan(s, m.index! + m[0].length - 1);
    if (b) locals.set(m[1]!, keysOf(b));
  }
  const addLocal = (n: string) => {
    const got = locals.get(n);
    if (!got) return false;
    got.keys.forEach((k) => keys.add(k));
    got.spreads.forEach((k) => spreads.add(k));
    // Post-hoc assignments: `response.speakers = …`
    for (const a of s.matchAll(new RegExp(`${esc(n)}\\.([A-Za-z_$][\\w$]*)\\s*=[^=]`, 'g')))
      keys.add(a[1]!);
    return true;
  };
  for (const m of s.matchAll(/(?<![\w$.])ok\(\s*\{/g)) {
    const b = braceSpan(s, m.index! + m[0].length - 1);
    if (!b) continue;
    const got = keysOf(b);
    got.keys.forEach((k) => keys.add(k));
    got.spreads.forEach((k) => spreads.add(k));
  }
  for (const m of s.matchAll(/new Response\(\s*JSON\.stringify\(\s*\{/g)) {
    const at = m.index! + m[0].length - 1;
    const b = braceSpan(s, at);
    if (!b) continue;
    if (!s.slice(at + b.length, at + b.length + 120).includes('status: 200')) continue;
    const got = keysOf(b);
    got.keys.forEach((k) => keys.add(k));
    got.spreads.forEach((k) => spreads.add(k));
  }
  const parsedVars = new Set(
    [...s.matchAll(/([A-Za-z_$][\w$]*)\s*=\s*(?:await\s+)?parseModelJson\(/g)].map((m) => m[1]!),
  );
  let forwardsParsed = [...spreads].some((n) => parsedVars.has(n));
  for (const m of s.matchAll(
    /new Response\(\s*JSON\.stringify\(\s*([A-Za-z_$][\w$]*)\s*\)|(?<![\w$.])ok\(\s*([A-Za-z_$][\w$]*)\s*[,)]/g,
  )) {
    const n = (m[1] || m[2])!;
    if (parsedVars.has(n)) forwardsParsed = true;
    addLocal(n);
  }
  if (forwardsParsed) promptKeys(file).forEach((k) => keys.add(k));
  return keys;
}

/** Fields read off a parsed response body in one client file. */
function fieldsRead(src: string): Set<string> {
  const s = strip(src);
  const names = new Set(
    [
      ...s.matchAll(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:await\s+)?[^;\n]*\.json\(\)/g),
    ].map((m) => m[1]!),
  );
  names.add('data');
  // ONE HOP THROUGH STATE, and without it this guard was decorative: almost every
  // screen does `const data = await res.json()` and then `setContent(data)`, reading
  // fields later as `content.en_summary`. Renaming a field the endpoint sends left
  // the whole suite GREEN until this hop existed (measured, not reasoned). The same
  // one-binding-hop that made sweep 118's constant lookup work.
  for (const n of [...names]) {
    for (const m of s.matchAll(new RegExp(`(set[A-Za-z_$][\\w$]*)\\(\\s*${esc(n)}\\s*[,)]`, 'g'))) {
      const setter = m[1]!;
      const decl = new RegExp(`\\[\\s*([A-Za-z_$][\\w$]*)\\s*,\\s*${esc(setter)}\\s*\\]`).exec(s);
      if (decl) names.add(decl[1]!);
    }
    // `ref.current = data` — the other way a component keeps a response.
    for (const m of s.matchAll(
      new RegExp(`([A-Za-z_$][\\w$]*)\\.current\\s*=\\s*${esc(n)}\\b`, 'g'),
    ))
      names.add(`${m[1]!}.current`);
  }
  const out = new Set<string>();
  for (const n of names)
    for (const m of s.matchAll(new RegExp(`${esc(n)}\\??\\.([A-Za-z_$][\\w$]*)\\b`, 'g')))
      out.add(m[1]!);
  // A DESTRUCTURED read is the same read, and it binds no name for the loop above to
  // follow: `const { imageUrl } = await r.json()` is how two screens read
  // /api/flux-generate. Measured across the whole client tree (sweep 123): FIVE such
  // reads, every one correct — so this is a ratchet, not a save. Both shapes count,
  // straight off `.json()` and off a tracked name; `...rest` binds no field.
  const destructured = (list: string) => {
    for (const part of list.split(',')) {
      const t = part.trim();
      if (!t || t.startsWith('...')) continue;
      const m = /^['"]?([A-Za-z_$][\w$]*)['"]?\s*[:=]?/.exec(t);
      if (m) out.add(m[1]!);
    }
  };
  for (const m of s.matchAll(
    /(?:const|let|var)\s*\{([^{}]*)\}\s*=\s*(?:await\s+)?[^;\n]*\.json\(\)/g,
  ))
    destructured(m[1]!);
  for (const n of names)
    for (const m of s.matchAll(
      new RegExp(`(?:const|let|var)\\s*\\{([^{}]*)\\}\\s*=\\s*${esc(n)}\\b`, 'g'),
    ))
      destructured(m[1]!);
  // Response/Promise/collection members and the shared error channel.
  for (const k of [
    'ok',
    'json',
    'headers',
    'status',
    'then',
    'catch',
    'length',
    'size',
    'map',
    'filter',
    'forEach',
    'slice',
    'join',
    'trim',
    'toString',
    'push',
    'find',
    'some',
    'every',
    'error',
    // `resetAt` rides the SHARED 429 envelope `requireAuthedAI` sends
    // (`daily_quota_exceeded` / the budget pause), read inside `if (!res.ok)` — the
    // same channel as `error`, and never a field of a 200.
    'resetAt',
    // A ReadableStream member reached through a NAME COLLISION: MajaScreen declares
    // `const body = await res.clone().json()` for the error code AND streams with
    // `res.body.getReader()`, so the tracked name `body` picks up `.getReader`.
    'getReader',
  ])
    out.delete(k);
  return out;
}

/**
 * Reads a client may make that the endpoint does not send. Each is the SECOND arm of
 * a tolerant fallback whose first arm the endpoint does send, so the learner never
 * sees a blank — the `mistakes` shape sweep 114 recorded. Both staleness directions
 * are checked below.
 */
const TOLERATED: Record<string, string> = {
  'src/components/practice/AIStoryScreen.tsx:message':
    'the second arm of `data.reply || data.message || data.text`, where /api/maja always sends `reply`',
  'src/components/practice/AIStoryScreen.tsx:text':
    'the third arm of that same chain — ai-chat/maja emit `{ text }` only when the model reply is not JSON at all',
  'src/components/practice/WritingScreen.tsx:mistakes':
    'the pre-`changes` key name, read only as the second arm of `data.changes || data.mistakes || []` (sweep 114)',
};

function endpointFiles(): Map<string, string> {
  const m = new Map<string, string>();
  for (const f of readdirSync(API))
    if (f.endsWith('.js') && !f.startsWith('_')) m.set(`/api/${f.slice(0, -3)}`, `${API}/${f}`);
  return m;
}

type Subject = { file: string; path: string; keys: Set<string>; endpoints: string[] };

/**
 * Every client file that talks to at least one of these endpoints.
 *
 * A SINGLE-endpoint file is compared against that endpoint's keys. A MULTI-endpoint
 * file is compared against the UNION of its endpoints' keys — sweep 121 skipped those
 * outright (`paths.size !== 1`), which left TEN files covered by nothing at all, and
 * they are the AI-heaviest screens in the product: LiveTutorScreen (4 endpoints),
 * AIConversation (4), MajaScreen, CroatianNewsScreen, GrammarExplainer,
 * PronunciationScorer, VideoLessonScreen, Flashcards, PhraseOfDayScreen and
 * pushNotifications.
 *
 * The union is WEAKER than per-handler attribution and it is deliberately the rule
 * chosen: it cannot produce a false finding, whereas scoping each read to the
 * brace-matched enclosing function requires parsing TSX, and a string-and-regex-aware
 * scanner written for exactly that reported 4 of these 10 files unbalanced on its
 * first run and 99 of 969 across the tree (JSX `</div>` reads as a regex start, a
 * `'` inside `/["'()]/` opens a string). A guard built on a fragile parser is the
 * decorative-guard failure this file exists to prevent.
 *
 * WHAT THE UNION CANNOT SEE, stated: inside a multi-endpoint file, a field sent by
 * endpoint A but read off B's response. It still catches the `v.tip` class — a field
 * NO endpoint in the file sends — which is the failure that has actually shipped.
 */
function attributable(): Subject[] {
  const eps = endpointFiles();
  const out: Subject[] = [];
  for (const f of globSync('src/**/*.{ts,tsx}')) {
    if (/(^|\/)(tests|__tests__)\//.test(f) || /\.test\./.test(f)) continue;
    const src = strip(readFileSync(f, 'utf8'));
    const known = [...new Set([...src.matchAll(WIDE)].map((m) => m[1]!))].filter((p) => eps.has(p));
    if (known.length === 0) continue;
    const keys = new Set<string>();
    for (const p of known) for (const k of responseKeys(eps.get(p)!)) keys.add(k);
    if (keys.size === 0) continue;
    out.push({ file: f, path: known.join(' + '), keys, endpoints: known });
  }
  return out;
}

describe('an AI endpoint sends every field its clients read', () => {
  const subjects = attributable();

  it('the derivation is real and reaches the reshaping endpoints', () => {
    // 43 client files over 33 endpoints when written (31/20 before the union rule).
    expect(subjects.length).toBeGreaterThanOrEqual(40);
    expect(new Set(subjects.flatMap((s) => s.endpoints)).size).toBeGreaterThanOrEqual(30);
    // The ten multi-endpoint files sweep 121 skipped outright must be IN. A count
    // alone would pass on ten single-endpoint files, so the AI-heaviest four are
    // named: those are the screens whose reads were checked by nothing.
    const multi = subjects.filter((s) => s.endpoints.length > 1);
    expect(multi.length).toBeGreaterThanOrEqual(10);
    const files = new Set(multi.map((s) => s.file));
    for (const f of [
      'src/components/croatia/LiveTutorScreen.tsx',
      'src/components/croatia/AIConversation.tsx',
      'src/components/croatia/MajaScreen.tsx',
      'src/components/learn/GrammarExplainer.tsx',
    ])
      expect(files, `${f} must be a subject — it was covered by nothing`).toContain(f);
    // The `}` opener, pinned: `dateUtils` spells its path `` `${apiBase}/api/server-time` ``
    // and is reachable ONLY through it. Without this the widening survives its own
    // mutation — 41 subjects still clears the floor above, which is how a clause
    // becomes decoration.
    expect(
      subjects.map((s) => s.file),
      'a `${base}/api/…` path must be seen',
    ).toContain('src/lib/dateUtils.ts');
    const listening = responseKeys(`${API}/listening.js`);
    // The literal's keys AND the conditional post-hoc assignments.
    expect([...listening].sort()).toEqual(
      expect.arrayContaining(['title', 'questions', 'vocab', 'speakers', 'narrator']),
    );
    // A reshaping endpoint must NOT inherit its prompt's keys: /api/speaking-coach
    // nests the rubric under `scores`, so the rubric's own names are not on the wire.
    const coach = responseKeys(`${API}/speaking-coach.js`);
    expect(coach.has('scores')).toBe(true);
    expect(coach.has('fluency')).toBe(false);
  });

  it('every field a client reads is one its endpoint can send', () => {
    const bad: string[] = [];
    for (const { file, path, keys } of subjects)
      for (const k of fieldsRead(readFileSync(file, 'utf8')))
        if (!keys.has(k) && !(`${file}:${k}` in TOLERATED)) bad.push(`${file} [${path}]: .${k}`);
    expect(
      bad,
      'The endpoint is the contract. A field it never sends reads `undefined` for ' +
        'ever: the optional render short-circuits, the card is one line shorter, and ' +
        'nothing throws (RegionScreen rendered `v.tip` over a payload carrying ' +
        '`note`, for the life of the screen).\n' +
        bad.map((b) => `  - ${b}`).join('\n'),
    ).toEqual([]);
  });

  it('POSITIVE CONTROL — a DESTRUCTURED read is seen, in both shapes', () => {
    // Straight off `.json()` (the only two flux-generate readers), off a
    // base-prefixed template path (`${apiBase}/api/server-time`), and the plain
    // single-name form. Without the destructure clause all three read as no read at
    // all, so the contract would be satisfied vacuously for those files.
    expect(fieldsRead(readFileSync('src/components/practice/StoryScreens.tsx', 'utf8'))).toContain(
      'imageUrl',
    );
    expect(fieldsRead(readFileSync('src/components/learn/GrammarReader.tsx', 'utf8'))).toContain(
      'text',
    );
    expect(fieldsRead(readFileSync('src/lib/dateUtils.ts', 'utf8'))).toContain('ts');
    // …and the endpoints really do send them, which is why the sweep found nothing.
    expect(responseKeys(`${API}/flux-generate.js`).has('imageUrl')).toBe(true);
    expect(responseKeys(`${API}/server-time.js`).has('ts')).toBe(true);
    // A `...rest` binds no field and must not be reported as one.
    expect([...fieldsRead('const { a, ...rest } = await r.json();')].sort()).toEqual(['a']);
  });

  it('POSITIVE CONTROL — a TRAILING comment cannot credit a key the endpoint never sends', () => {
    // The dangerous direction. `strip` anchored `//` at line start, so
    // `something(); // ok({ neverSent })` fed `keysOf` a phantom key and turned a real
    // finding into a pass. A `://` inside a string must survive, or every endpoint
    // that mentions a URL loses the rest of its line.
    expect(strip('call(); // ok({ neverSent })\n')).not.toContain('neverSent');
    expect(strip("const u = 'https://x/y';\n")).toContain('https://x/y');
    expect(strip('a(); /* ok({ gone }) */ b();\n')).not.toContain('gone');
    // A trailing `//` naming a glob must go BEFORE the block pass, or its `/*` opens
    // a comment that runs to the next `*/` anywhere later (sweep 72's defect).
    expect(strip('keep1(); // src/data/drills/*\nconst re = /x*/;\nkeep2();\n')).toContain('keep2');
    // …and a ONE-LINE block comment must keep its own `*/`, so the trailing pass
    // leaves it alone rather than truncating it into a runaway.
    const mixed = strip('a(); /* ok({ gone2 }) // note */ keep3();\n');
    expect(mixed).not.toContain('gone2');
    expect(mixed).toContain('keep3');
  });

  it('POSITIVE CONTROL — dropping the post-hoc assignments re-finds /api/listening', () => {
    // `response.speakers = …` is set after the literal, conditionally on style. With
    // only the literal read, both AI Listening surfaces report `speakers` — which is
    // what this clause exists to prevent, and it survived until it was measured.
    const s = strip(readFileSync(`${API}/listening.js`, 'utf8'));
    const at = s.indexOf('const response = {');
    expect(at).toBeGreaterThan(-1);
    const literalOnly = keysOf(braceSpan(s, s.indexOf('{', at))!).keys;
    expect(literalOnly.has('title')).toBe(true);
    expect(literalOnly.has('speakers')).toBe(false);
    expect(responseKeys(`${API}/listening.js`).has('speakers')).toBe(true);
  });

  it('every TOLERATED entry is still read and still unsent', () => {
    for (const [key, reason] of Object.entries(TOLERATED)) {
      expect(reason.length, `${key} needs a measured reason`).toBeGreaterThan(60);
      const at = key.lastIndexOf(':');
      const file = key.slice(0, at);
      const field = key.slice(at + 1);
      const subject = subjects.find((s) => s.file === file);
      expect(subject, `${key}: no longer an attributable client — drop the entry`).toBeTruthy();
      expect(
        fieldsRead(readFileSync(file, 'utf8')).has(field),
        `${key} is no longer read — drop the entry`,
      ).toBe(true);
      expect(
        subject!.keys.has(field),
        `${key} is now sent by ${subject!.path} — drop the entry`,
      ).toBe(false);
    }
    expect(Object.keys(TOLERATED)).toHaveLength(3);
  });
});
