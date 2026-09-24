// src/tests/sessionScreensFeedLedger.test.ts
//
// EVERY SCREEN THE RECOMMENDER SELECTS ON MUST BE ABLE TO CHANGE THE MEASUREMENT
// THAT SELECTED IT (2026-09-23).
//
// The defect this exists to keep closed. There are TWO evidence stores and the
// daily practice screens were writing the first but not the second:
//
//   `lib/adaptive.ts` recordTopicResult()  — the adaptive topic store. Shadowing,
//     Speaking and the Listening Quiz all wrote it, which is why the gap looked
//     like nothing was missing when you read any one screen.
//   `lib/masteryLedger.ts`                 — nothing.
//
// The consumers differ, and only the second one steers the session:
// `weakestProductionKind`, `weakestReceptiveKind`, `getNextStep`'s weakest-skill
// rung, the concept map and SkillRadar all read the MASTERY ledger.
//
// Measured with the real selector before the fix: a learner who does Shadowing,
// Speaking and Speaking Sprint every day for a month and Guided Writing twice a
// week has `speaking = undefined` — UNTESTED — and `weakestProductionKind`
// returns 'speak'. Wire the same three screens and the same learner (a strong
// speaker at 0.90, a weaker writer at 0.70) reads speaking-strong /
// writing-developing and the slot returns 'write'. So the harm was not "less
// evidence": THE RECOMMENDER POINTED AT THE WRONG SKILL, sending a strong
// speaker to more speaking and never to the writing they were weaker at.
//
// This is the general form of two earlier one-screen fixes — the 2026-09-23
// reading fix (`activityType: 'reading'` had NO writer at all, so the input slot
// served reading 40/40 sessions) and the 2026-09-07 speaking-coach reachability
// fix. Both were written about one skill. This asks the question of every screen
// the two slots can serve.
//
// The assertion deliberately does NOT name screens: a test that lists them goes
// stale the moment the pool grows, which is the hand-maintained-list decay this
// repo has recorded four times. It walks the REAL pools, the REAL router and the
// REAL import graph.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTION_POOL } from '../hooks/useDailySession';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { inputKindOf } from '../lib/inputSlot';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, '..');
const ROUTER = path.join(SRC, 'components/AppRouter.tsx');
const EXTS = ['.tsx', '.ts', '.jsx', '.js'];

/** Read a file, or '' if it is gone — one syscall, no check-then-use pair. */
function readOrEmpty(p: string): string {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return '';
  }
}

/** Every source file under a directory, tests included — callers filter. */
function walkSource(dir: string, out: string[] = []): string[] {
  // `withFileTypes` answers "directory or file" from the same syscall that
  // listed the entry, so there is no separate stat to race against — CodeQL
  // flags the check-then-use pair (js/file-system-race) and is right about the
  // shape even in a test.
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkSource(p, out);
    else if (ent.isFile() && EXTS.some((x) => p.endsWith(x))) out.push(p);
  }
  return out;
}
const routerSrc = fs.readFileSync(ROUTER, 'utf8');

function resolveModule(fromDir: string, spec: string): string | null {
  const base = path.resolve(fromDir, spec);
  for (const ext of EXTS) if (fs.existsSync(base + ext)) return base + ext;
  for (const ext of EXTS) {
    const idx = path.join(base, 'index' + ext);
    if (fs.existsSync(idx)) return idx;
  }
  return null;
}

/**
 * The entry-point writers. Every one bottoms out in `recordMasteryEvent`, so
 * matching a use of any of these names is matching "this code puts evidence in
 * the ledger".
 *
 * THEY ARE SPLIT BY HOW THEY ARE USED, AND THE FIRST VERSION OF THIS FILE GOT
 * ONE WRONG (2026-09-23, the day after it shipped). It required call syntax for
 * all six — but `whisperClaudeScorer` is an OBJECT (`export const
 * whisperClaudeScorer: SpeakingScorer = { … }`), handed to an exam runner as
 * `scorer: whisperClaudeScorer`, and never called by that name anywhere. So
 * `whisperClaudeScorer\s*\(` matched **nothing in the entire corpus** while
 * reading as coverage of the exam speaking path. CLAUDE.md already carries a
 * NEVER rule for this exact shape one step removed — "never name a transport
 * helper in a guard's URL-matching alternation without checking it passes a
 * URL" — and it recurred here in a fresh file. `WRITER_USES_MATCH` below fails
 * on any entry with no use in the corpus, so a decorative name cannot sit here
 * again.
 *
 * FUNCTION writers are matched as calls. VALUE writers are matched as bare
 * references, because handing a scorer to a runner IS the wiring — the runner
 * is what calls `.score()`.
 *
 * `srMark` / `getSRScore` are the SRS-answer path and were MISSING from the
 * first version. `getSRScore` calls `recordSrsOutcome` on every graded review,
 * which is the app's highest-volume `vocab` evidence; `srMark` is the `data`
 * barrel's one-line delegate to it, and is what Flashcards, McGame, MatchGame,
 * ZnamGame, ReviewScreen and six more actually call. Including them is NARROW
 * rather than a re-opening of the lib/ hole: `mayDescend` still refuses to
 * enter `src/lib` and `src/data`, so only a DIRECT call in a screen or a
 * component it composes counts — which is precisely the act of grading an
 * answer. Verified not to weaken anything: none of the five screens wired in
 * #720 calls either name, so each of that PR's mutations still fails.
 */
const FUNCTION_WRITERS = [
  'recordMasteryEvent',
  'recordExerciseOutcome',
  'recordSrsOutcome',
  'completeExercise',
  'requestSpeakingCoach',
  'srMark',
  'getSRScore',
];
/** Writers used by REFERENCE, not called by name — see the note above. */
const VALUE_WRITERS = ['whisperClaudeScorer'];
const ALL_WRITERS = [...FUNCTION_WRITERS, ...VALUE_WRITERS];

const WRITER_CALL = new RegExp(
  `\\b(?:(?:${FUNCTION_WRITERS.join('|')})\\s*\\(|(?:${VALUE_WRITERS.join('|')})\\b)`,
);

/**
 * WHERE THE WALK MAY GO, and this is the load-bearing part.
 *
 * It follows imports into `components/` and `hooks/` ONLY — the modules a screen
 * COMPOSES — never into `lib/`. The first draft followed everything and reported
 * `dialogue` as wired; the trace was
 *   DialogueSim -> lib/aiPost -> lib/userContext -> lib/srs (calls recordSrsOutcome)
 * so ANY screen importing `aiPost`, which is nearly every AI screen, satisfied the
 * guard while calling nothing itself. That is the decorative-guard failure one
 * level deeper than the declaration-stripping that `speakingCoachReachable`
 * already does, and a hand-written stop-list would only have moved it again.
 *
 * A screen's ledger write is in exactly one of three places: its own file, a
 * component or hook it composes, or a GRADING library it explicitly delegates
 * grading to. The third is the allowlist below — small, and each entry is a
 * module whose whole purpose is to score the learner.
 *
 * `useExerciseCompletion` is excluded although it lives in `hooks/`: it DECLARES
 * `completeExercise` and its body calls `recordExerciseOutcome`, so descending
 * into it would pass any screen that imports it for a type. Its NAME is still
 * matched at the call site, which is the only place that proves anything.
 */
const GRADING_LIBS = [
  path.join(SRC, 'lib/speakingCoach.ts'),
  path.join(SRC, 'lib/speaking/whisperClaudeScorer.ts'),
];
const BLOCKED = [path.join(SRC, 'hooks/useExerciseCompletion.ts')];

function mayDescend(file: string): boolean {
  if (BLOCKED.includes(file)) return false;
  if (GRADING_LIBS.includes(file)) return true;
  return file.startsWith(path.join(SRC, 'components')) || file.startsWith(path.join(SRC, 'hooks'));
}

/** Declarations stripped first, for the same reason. */
function stripDeclarations(src: string): string {
  return src
    .replace(
      new RegExp(
        `\\b(?:export\\s+)?(?:async\\s+)?function\\s+(?:${ALL_WRITERS.join('|')})\\s*\\(`,
        'g',
      ),
      'function __decl__(',
    )
    .replace(
      // A VALUE writer is matched bare, so its own `export const <name> =`
      // declaration would otherwise make its defining module self-satisfying.
      new RegExp(`\\b(?:export\\s+)?const\\s+(?:${VALUE_WRITERS.join('|')})\\b`, 'g'),
      'const __decl__',
    );
}

function reachesLedger(file: string, seen = new Set<string>(), isRoot = true): boolean {
  if (seen.has(file)) return false;
  if (!isRoot && !mayDescend(file)) return false;
  seen.add(file);
  const src = stripDeclarations(fs.readFileSync(file, 'utf8'));
  if (WRITER_CALL.test(src)) return true;
  const dir = path.dirname(file);
  for (const m of src.matchAll(/import\s+(?!type\b)[^;]*?from\s+'(\.[^']+)'/g)) {
    const next = resolveModule(dir, m[1]!);
    if (next && reachesLedger(next, seen, false)) return true;
  }
  return false;
}

function componentForScreen(screen: string): string | null {
  const at = routerSrc.indexOf(`currentScreen === '${screen}'`);
  if (at === -1) return null;
  const block = routerSrc.slice(at, at + 600);
  for (const m of block.matchAll(/<([A-Z]\w+)[\s/>]/g)) {
    const name = m[1]!;
    if (name !== 'ScreenErrorBoundary' && name !== 'Suspense') return name;
  }
  return null;
}

function fileForComponent(name: string): string | null {
  const lazy = routerSrc.match(
    new RegExp(`const ${name} = lazyWithReload\\(\\s*\\(\\) => import\\('([^']+)'\\)`),
  );
  const direct = routerSrc.match(new RegExp(`^import ${name} from '([^']+)'`, 'm'));
  const spec = lazy?.[1] ?? direct?.[1];
  return spec ? resolveModule(path.join(SRC, 'components'), spec) : null;
}

function screenReachesLedger(screen: string): boolean {
  const component = componentForScreen(screen);
  const file = component && fileForComponent(component);
  return file ? reachesLedger(file) : false;
}

/**
 * Screens that legitimately put NOTHING in the ledger, each with the reason.
 * Two different reasons live here and conflating them is how the first draft of
 * this list went wrong: most of these have NO SCORE at all (the ledger's own
 * rule is that only a real correctness or quality signal may enter it — "Dwell
 * time contributes NOTHING here"), but `dialogue` has a perfectly good score
 * that is not evidence OF THE SKILL it would be filed under. Hence the name:
 * not "no score", but "not evidence".
 *
 * Checked in BOTH staleness directions below — AND note what that cannot do: a
 * staleness test only asks whether an exempted screen has GAINED a write, so a
 * lazily-reasoned exemption for a screen that genuinely never writes passes for
 * ever. Every reason here was checked by reading the screen.
 */
const NOT_LEDGER_EVIDENCE: Record<string, string> = {
  dialogue:
    'It DOES grade (score over scenario.turns.length) — the reason is not "no score", ' +
    'which was my first and wrong answer, read off the pool row rather than the screen. ' +
    'It grades RECOGNITION: pick one of four options, no microphone, no acoustic score. ' +
    'Recording that as spoken-production evidence would let a learner who has never ' +
    'spoken read as a tested speaker and stop being offered speaking practice — the ' +
    'inverse of the defect this guard exists for. micRequired:false is a SCHEDULING ' +
    'decision; the ledger is a MEASUREMENT.',
  speaking_sprint:
    'Verified by reading the screen, not inferred from the pool: SpeakingSprintScreen ' +
    'holds a `rounds` counter and NO correctness variable at all — its award is ' +
    '`totalRounds * 5`. Recording an attempt count as an accuracy would be NEVER-DO 13.',
  grammarreader:
    'A reference surface — tap a word for its analysis over authored passages. ' +
    'reference: true in the pool, and the input slot excludes it outright.',
  storymode:
    'Reading a generated story with an explicit Finish button and no comprehension ' +
    'check — it awards a flat 15 XP as activityType "story", which ACTIVITY_TO_SKILL ' +
    'deliberately does not map. There is no score, so there is nothing honest to record.',
  ai_story:
    'Same shape as storymode: a generated story, flat 15 XP, activityType "story", ' +
    'no questions and no score.',
};

describe('every production-pool screen can change the production measurement', () => {
  it('resolves every pool screen to a real routed component', () => {
    for (const p of PRODUCTION_POOL) {
      const component = componentForScreen(p.screen);
      expect(component, `${p.screen} has no route in AppRouter`).toBeTruthy();
      expect(fileForComponent(component!), `${component} has no module`).toBeTruthy();
    }
  });

  it('every graded production screen reaches the mastery ledger', () => {
    const missing = PRODUCTION_POOL.filter(
      (p) => !(p.screen in NOT_LEDGER_EVIDENCE) && !screenReachesLedger(p.screen),
    ).map((p) => p.screen);
    expect(
      missing,
      `These production screens grade the learner and write NOTHING the recommender ` +
        `reads, so P2.5 keeps selecting a skill the practice it serves cannot re-measure. ` +
        `Wire recordExerciseOutcome at the screen's genuine completion point, or add it to ` +
        `NOT_LEDGER_EVIDENCE with the reason it has no honest score.`,
    ).toEqual([]);
  });
});

describe('every guaranteed-input entry can change the receptive measurement', () => {
  const INPUT = CEFR_EXERCISE_POOL.filter((e) => inputKindOf(e.category) !== null);

  it('the input set is not empty (an empty set asserts nothing)', () => {
    expect(INPUT.length).toBeGreaterThan(3);
  });

  it('every graded input entry reaches the mastery ledger', () => {
    const missing = INPUT.filter(
      (e) => !(e.screen in NOT_LEDGER_EVIDENCE) && !screenReachesLedger(e.screen),
    ).map((e) => e.screen);
    expect(
      missing,
      `These input screens grade comprehension and write NOTHING the recommender reads. ` +
        `An untested receptive cell scores MAXIMUM need and selectGuaranteedInput lets ` +
        `weakest OVERRIDE the alternation, so the slot latches on the kind the learner ` +
        `is already practising and the other kind is never served — the 2026-09-23 ` +
        `reading defect, in the other direction.`,
    ).toEqual([]);
  });
});

describe('the exemptions are real', () => {
  it('every exempted screen still exists in a pool', () => {
    const ids = new Set([
      ...PRODUCTION_POOL.map((p) => p.screen),
      ...CEFR_EXERCISE_POOL.map((e) => e.screen),
    ]);
    for (const screen of Object.keys(NOT_LEDGER_EVIDENCE)) {
      expect(ids.has(screen), `${screen} is exempted but is in no pool — stale entry`).toBe(true);
    }
  });

  it('no exempted screen has quietly gained a ledger write', () => {
    // The other staleness direction, which `couplingClearingPath`'s exemption set
    // was missing when a repointed category left it guarding nothing.
    for (const [screen, reason] of Object.entries(NOT_LEDGER_EVIDENCE)) {
      expect(
        screenReachesLedger(screen),
        `${screen} now reaches the ledger, so its exemption ("${reason}") is stale — ` +
          `remove it and let the main assertion cover the screen.`,
      ).toBe(false);
    }
  });

  it('records how many exemptions there are, so an emptied list is noticed', () => {
    expect(Object.keys(NOT_LEDGER_EVIDENCE).length).toBe(5);
  });
});

describe('the walk itself is not decorative', () => {
  it('does not count a module that merely imports the ledger without calling it', () => {
    const tmp = path.join(SRC, 'tests', '__tmp_importer_only.ts');
    fs.writeFileSync(
      tmp,
      "import { recordExerciseOutcome } from '../lib/masteryLedger';\nexport const unused = typeof recordExerciseOutcome;\n",
    );
    try {
      // The import is present and the ledger module is reachable, but there is no
      // CALL — `typeof x` is not `x(`. If this ever returns true the guard would
      // pass for any screen that so much as imports the module.
      expect(reachesLedger(tmp)).toBe(false);
    } finally {
      fs.unlinkSync(tmp);
    }
  });

  it('does count a direct call', () => {
    const tmp = path.join(SRC, 'tests', '__tmp_caller.ts');
    fs.writeFileSync(
      tmp,
      "import { recordExerciseOutcome } from '../lib/masteryLedger';\n" +
        "export function done() { recordExerciseOutcome({ activityType: 'listening', score: 1, total: 1 }); }\n",
    );
    try {
      expect(reachesLedger(tmp)).toBe(true);
    } finally {
      fs.unlinkSync(tmp);
    }
  });
});

// ── The writer set has to earn its own entries ───────────────────────────────
//
// TWO WAYS A NAME IN `ALL_WRITERS` CAN BE A LIE, and the first version of this
// file shipped with one of each:
//
//   1. It does not actually write. Nothing checked that `requestSpeakingCoach`
//      still calls `recordMasteryEvent`; if it stopped, every screen delegating
//      to it would keep passing this suite while recording nothing. That is the
//      decorative-guard failure CLAUDE.md keeps rediscovering, aimed at the
//      guard's own vocabulary instead of at a screen.
//   2. It never matches. `whisperClaudeScorer` is an object passed as a value,
//      so the call-shaped pattern matched it NOWHERE in the corpus — a name
//      that reads as coverage of the exam speaking path and supplies none.
//
// Both are checked here, over the real source, so an entry that stops writing
// or stops matching fails rather than quietly widening nothing.
describe('every name in the writer set is a real ledger writer', () => {
  /**
   * Follow a writer to `recordMasteryEvent`, through lib this time — the
   * question here is about the LIBRARY's plumbing, not a screen's wiring, so
   * the `mayDescend` restriction that governs screen walks does not apply.
   *
   * A writer qualifies when its declaring module calls `recordMasteryEvent`, or
   * calls ANOTHER writer that qualifies. The second clause is not a convenience:
   * `srMark` is the data barrel's one-line delegate to `getSRScore`, which is
   * where the `recordSrsOutcome` call lives, so a single-hop rule would reject a
   * writer that genuinely writes.
   */
  const HOMES = [
    path.join(SRC, 'lib/masteryLedger.ts'),
    path.join(SRC, 'lib/srs.ts'),
    path.join(SRC, 'lib/speakingCoach.ts'),
    path.join(SRC, 'lib/speaking/whisperClaudeScorer.ts'),
    path.join(SRC, 'hooks/useExerciseCompletion.ts'),
    path.join(SRC, 'data/content.tsx'),
  ];

  /**
   * COMMENTS ARE STRIPPED, AND MUTATION IS WHY. `speakingCoach.ts` opens with a
   * header comment reading "mastery ledger: recordMasteryEvent(skill 'speaking',
   * weight 2)". Unstripped, that sentence satisfied the check on its own: gutting
   * the REAL call left this suite fully green. A guard that a module's prose about
   * itself can satisfy is measuring documentation.
   */
  const stripComments = (src: string): string =>
    src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');

  function declaringModules(name: string): string[] {
    const decl = new RegExp(
      `(?:function|const|let)\\s+${name}\\b|\\b${name}\\s*[:=]\\s*(?:async\\s*)?(?:function|\\(|\\{)`,
    );
    return HOMES.filter((h) => decl.test(stripComments(readOrEmpty(h))));
  }

  function writesToLedger(name: string, seen = new Set<string>()): boolean {
    if (name === 'recordMasteryEvent') return true;
    if (seen.has(name)) return false;
    seen.add(name);
    for (const home of declaringModules(name)) {
      const src = stripComments(readOrEmpty(home));
      if (/\brecordMasteryEvent\s*\(/.test(src)) return true;
      for (const other of ALL_WRITERS) {
        if (other === name) continue;
        if (new RegExp(`\\b${other}\\s*\\(`).test(src) && writesToLedger(other, seen)) return true;
      }
    }
    return false;
  }

  it.each(ALL_WRITERS)('%s bottoms out in recordMasteryEvent', (name) => {
    expect(
      writesToLedger(name),
      `${name} is named as a ledger writer but no module declaring it reaches ` +
        `recordMasteryEvent. Either it stopped writing — in which case every screen ` +
        `delegating to it is now passing this suite while recording nothing — or it ` +
        `never wrote and should not be in the set.`,
    ).toBe(true);
  });

  it('every writer matches at least one real use — a name that matches nothing guards nothing', () => {
    const corpus = walkSource(SRC)
      .filter((f) => !f.includes('/tests/'))
      .map((f) => stripDeclarations(fs.readFileSync(f, 'utf8')))
      .join('\n');
    const unused = ALL_WRITERS.filter((name) => {
      const pat = FUNCTION_WRITERS.includes(name)
        ? new RegExp(`\\b${name}\\s*\\(`)
        : new RegExp(`\\b${name}\\b`);
      return !pat.test(corpus);
    });
    expect(
      unused,
      `${unused.join(', ')} appear in the writer set but match nothing in src/. ` +
        `That is what shipped for whisperClaudeScorer on 2026-09-22: an object ` +
        `matched with call syntax, reading as coverage and supplying none. Either ` +
        `the name is wrong, the shape is wrong (FUNCTION_WRITERS vs VALUE_WRITERS), ` +
        `or the writer is gone and the entry should be removed.`,
    ).toEqual([]);
  });
});
