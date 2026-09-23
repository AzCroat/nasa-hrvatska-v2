/**
 * inputRepsRecorded — every session-servable LISTENING or READING activity must
 * record a rep of its own modality (sweep 35, 2026-09-23).
 *
 * THE CLAIM THIS PROTECTS. `FluencySnapshot` (Me → Insights) shows three
 * counters and then names one:
 *
 *     This week your lightest skill is Reading — give it some reps.
 *
 * That is a COMPARISON, and a comparison is only as honest as the least
 * instrumented of the things compared. The counters come from
 * `recordListeningRep` / `recordReadingRep`, which `useAward` fires off
 * `award`'s third argument — a string each screen picks for itself. Three
 * screens picked one that is not their modality, and the app disagreed with
 * itself in writing:
 *
 *   * `VideoLessonScreen` — pool `category: 'listening'`, awarded `'lesson'`,
 *     and marked the SPEAK quest ("Complete 1 speaking exercise") on a screen
 *     with no microphone. That is the 2026-08-14 `markQuest('speak')` mislabel
 *     that was corrected on the other listening screens and survived here.
 *   * `StoryModeScreen` — pool `category: 'reading'`, awarded `'story'`, and
 *     called `markQuest('reading')` ON THE NEXT LINE. Two statements one line
 *     apart, disagreeing about what the learner had just done.
 *   * `AIStoryScreen` — pool `category: 'reading'`, awarded `'story'`.
 *
 * Measured before the fix: listening recorded from 3 of its 4 session-servable
 * pool entries, reading from 1 of its 3. So a learner whose reading was AI
 * stories saw Reading sit at zero and was told, every week, to go and read.
 *
 * WHY THIS IS A DERIVATION AND NOT THREE ASSERTIONS. The defect is not in any
 * one screen — it is that a modality is declared in the POOL and recorded at
 * the SCREEN, with nothing joining the two. A test naming the three screens
 * goes stale the moment a fourth input activity is authored, which is exactly
 * how the census that found this came to be needed. So the subject is derived
 * from `CEFR_EXERCISE_POOL` itself.
 *
 * WHAT IT DOES NOT COVER, stated: this walks SOURCE, so it proves a recording
 * path EXISTS, not that it runs. The plumbing it depends on — that the
 * activityType really is what the counter keys off, and that it is read before
 * the XP-cooldown gate — is asserted as an EFFECT in `useAward-coverage.test.ts`
 * against the real hook and the real metric modules.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, basename, join } from 'node:path';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';

const ROOT = resolve(__dirname, '..');
const read = (p: string) => readFileSync(p, 'utf8');

/** Every .ts/.tsx under src/, so a screen can be found by component name. */
const FILES: string[] = [];
(function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.tsx?$/.test(name)) FILES.push(p);
  }
})(ROOT);

const ROUTER = read(resolve(ROOT, 'components/AppRouter.tsx'));
const REGISTRY = read(resolve(ROOT, 'lib/completion/exerciseRegistry.ts'));

/** The two MODALITY categories — the same definition `inputSlot.inputKindOf` uses. */
const MODALITIES = ['listening', 'reading'] as const;
type Modality = (typeof MODALITIES)[number];

const INPUT_ENTRIES = CEFR_EXERCISE_POOL.filter((e) =>
  (MODALITIES as readonly string[]).includes(e.category as string),
) as Array<{ id: string; screen: string; category: Modality; reference?: boolean }>;

/**
 * A `reference: true` entry is a BROWSE surface — no graded finish, auto-
 * completed, at most one per session — and the guaranteed-input slot excludes
 * them outright. There is nothing for it to record, so it is exempt. Checked in
 * both staleness directions below, per the `couplingClearingPath` lesson.
 */
const REFERENCE_EXEMPT: Record<string, string> = {
  grammarreader:
    'Grammar X-Ray is tap-a-word analysis over authored passages: no score, no ' +
    'graded finish, reference contract. P2.8 never serves it.',
};

/** The first component rendered under `currentScreen === '<screen>'`. */
function componentFor(screen: string): string | null {
  const i = ROUTER.indexOf(`currentScreen === '${screen}'`);
  if (i < 0) return null;
  const window = ROUTER.slice(i, i + 900);
  const names = [...window.matchAll(/<([A-Z][A-Za-z0-9_]*)/g)]
    .map((m) => m[1]!)
    .filter((n) => n !== 'ScreenErrorBoundary' && n !== 'React' && n !== 'Suspense');
  return names[0] ?? null;
}

function fileForComponent(component: string): string | null {
  return FILES.find((f) => basename(f).replace(/\.tsx?$/, '') === component) ?? null;
}

/** `exerciseRegistry`'s activityType for a completion key, or null. */
function registryActivityType(key: string): string | null {
  const esc = key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const m = new RegExp(`['"]?${esc}['"]?:\\s*[ge]\\(([^)]*)\\)`).exec(REGISTRY);
  if (!m) return null;
  const args = m[1]!.split(',').map((s) => s.trim().replace(/^'|'$/g, ''));
  return args[2] ?? null;
}

/**
 * Comments are stripped before every match. A file that MENTIONS
 * `recordReadingRep` in prose — this fix put such a comment beside each call —
 * would otherwise read as compliance, which is the decorative direction.
 */
export function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
}

/**
 * Declarations are stripped too, and THIS IS THE LOAD-BEARING ONE — the first
 * draft of this guard was decorative because of it. The walk below follows a
 * screen's local imports (it has to: `ListeningComprehensionScreen` keeps its
 * whole completion in a hook), and `lib/listeningMetric` DECLARES
 * `recordListeningRep`. So every screen that merely IMPORTED the recorder
 * matched the call test, and deleting the call from `VideoLessonScreen` left
 * all 25 tests green. Same shape, same cause and same fix as
 * `couplingClearingPath.test.ts`'s `recordScreenPractised` blind spot, which is
 * written up in CLAUDE.md — and re-derived here from a mutation rather than
 * remembered, which is the point of running one.
 */
function stripDeclarations(src: string, name: string): string {
  const esc = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  return src
    .replace(new RegExp(`(?:export\\s+)?(?:async\\s+)?function\\s+${esc}\\s*\\(`, 'g'), ' (')
    .replace(new RegExp(`(?:const|let|var)\\s+${esc}\\s*(?::[^=\\n]*)?=`, 'g'), ' =');
}

/** Source as the call tests see it: no comments, no declaration of `name`. */
function callableSourceOf(src: string, name: string): string {
  return stripDeclarations(stripComments(src), name);
}
function callableSource(file: string, name: string): string {
  return callableSourceOf(read(file), name);
}

const strip = stripComments;

/** Relative imports of a file, resolved to paths on disk. */
function localImports(file: string): string[] {
  const out: string[] = [];
  for (const m of strip(read(file)).matchAll(/from\s+'(\.[^']+)'/g)) {
    const spec = m[1]!.replace(/\.js$/, '');
    for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx']) {
      const p = resolve(dirname(file), spec + ext);
      if (FILES.includes(p)) {
        out.push(p);
        break;
      }
    }
  }
  return out;
}

/** How (if at all) finishing this screen records a rep of `modality`. */
function recordingPath(file: string, modality: Modality): string | null {
  const recorder = modality === 'reading' ? 'recordReadingRep' : 'recordListeningRep';
  // The screen plus its own local imports: ListeningComprehensionScreen keeps
  // its whole completion in `listening/useListeningQuiz`, so a one-file walk
  // would report the app's oldest listening quiz as uninstrumented.
  const seen = new Set<string>([file]);
  for (const dep of localImports(file)) seen.add(dep);
  for (const f of seen) {
    const src = callableSource(f, recorder);
    if (new RegExp(`award\\([^)]*['"]${modality}['"]`).test(src)) return `award('${modality}')`;
    if (new RegExp(`\\b${recorder}\\s*\\(`).test(src)) return `${recorder}()`;
    for (const m of src.matchAll(/completeExercise\(\{\s*key:\s*'([^']+)'/g)) {
      if (registryActivityType(m[1]!) === modality) return `completeExercise('${m[1]}')`;
    }
  }
  return null;
}

describe('the source filters are driven, not trusted to the corpus', () => {
  // M7 showed comment-stripping is load-bearing in the DANGEROUS direction:
  // unstripped, AIListeningScreen's own write-up of the markQuest('speak')
  // mislabel and VideoLessonScreen's new comment about it both read as
  // violations, and the quest block fabricated two. M1 showed declaration-
  // stripping is load-bearing in the other: without it, importing the recorder
  // counted as calling it.
  it('a call in a comment does not count as a call', () => {
    const src = `// recordReadingRep();\n/* markQuest('speak') */\nconst x = 1;`;
    expect(stripComments(src)).not.toContain('recordReadingRep');
    expect(stripComments(src)).not.toContain('speak');
  });

  it('a URL inside code survives — the // in https:// is not a comment', () => {
    expect(stripComments(`const u = 'https://example.test/x';`)).toContain('https://example.test');
  });

  it('a declaration does not count as a call, but a call does', () => {
    const decl = `export function recordReadingRep(): void {}`;
    const call = `recordReadingRep();`;
    const re = /\brecordReadingRep\s*\(/;
    expect(re.test(decl)).toBe(true); // the raw source DOES match — that was the bug
    expect(re.test(callableSourceOf(decl, 'recordReadingRep'))).toBe(false);
    expect(re.test(callableSourceOf(call, 'recordReadingRep'))).toBe(true);
  });
});

describe('every modality pool entry resolves to a real screen', () => {
  it('finds at least two entries per modality — an empty subject registers no tests', () => {
    for (const modality of MODALITIES) {
      const n = INPUT_ENTRIES.filter((e) => e.category === modality).length;
      expect(n, `${modality} pool entries`).toBeGreaterThanOrEqual(2);
    }
  });

  it.each(INPUT_ENTRIES.map((e) => [e.id, e.screen] as const))(
    '%s → %s renders a component with a source file',
    (_id, screen) => {
      const component = componentFor(screen);
      expect(component, `no router branch for '${screen}'`).toBeTruthy();
      expect(fileForComponent(component!), `no source file for <${component}>`).toBeTruthy();
    },
  );
});

describe('a graded input activity records a rep of its own modality', () => {
  const graded = INPUT_ENTRIES.filter((e) => !e.reference);

  it.each(graded.map((e) => [e.id, e.category] as const))(
    '%s records a %s rep on completion',
    (id, modality) => {
      const entry = graded.find((e) => e.id === id)!;
      const file = fileForComponent(componentFor(entry.screen)!)!;
      expect(
        recordingPath(file, modality),
        `${id} (${entry.screen}) is a '${modality}' pool entry whose completion records no ` +
          `${modality} rep. FluencySnapshot compares the three counters and names the lightest, ` +
          `so an unrecorded activity makes that sentence wrong for anyone who does it. Fix it ` +
          `where the screen genuinely finishes: award(..., '${modality}'), a completeExercise ` +
          `key whose registry row carries that activityType, or a direct ` +
          `record${modality === 'reading' ? 'Reading' : 'Listening'}Rep() call.`,
      ).toBeTruthy();
    },
  );

  it('the reference exemptions are still reference, and still exist', () => {
    for (const id of Object.keys(REFERENCE_EXEMPT)) {
      const entry = INPUT_ENTRIES.find((e) => e.id === id);
      expect(
        entry,
        `exempt '${id}' is no longer a modality pool entry — drop the row`,
      ).toBeTruthy();
      expect(
        entry!.reference,
        `exempt '${id}' is no longer reference: it now needs a rep like any other`,
      ).toBe(true);
    }
    // ...and nothing reference is missing from the list, which is the other
    // staleness direction: a new browse entry must be a decision, not a gap.
    for (const e of INPUT_ENTRIES.filter((x) => x.reference))
      expect(
        REFERENCE_EXEMPT[e.id],
        `reference entry '${e.id}' has no recorded reason`,
      ).toBeTruthy();
  });
});

describe('a listening or reading screen does not claim the speaking quest', () => {
  // VideoLessonScreen marked `speak` — clearing "Complete 1 speaking exercise"
  // for a learner who had not spoken. This is the MODALITY-scoped form of the
  // rule and it is deliberately kept beside the general one in
  // `speakQuestEarned.test.ts`: that file asks whether ANY claimant of the
  // quest can hear the learner, this one asks whether a pool entry declared
  // `listening`/`reading` contradicts its own declaration. Both are derived
  // from production data, neither restates the other's subject, and they fail
  // with different sentences — which is the whole value of having both.
  it.each(INPUT_ENTRIES.map((e) => [e.id, e.screen] as const))(
    "%s does not markQuest('speak')",
    (id, screen) => {
      const file = fileForComponent(componentFor(screen)!)!;
      const src = strip(read(file));
      expect(
        /markQuest\(\s*['"]speak['"]\s*\)/.test(src),
        `${id} (${screen}) marks the SPEAK quest, which says "Complete 1 speaking exercise". ` +
          `This screen has no speaking in it.`,
      ).toBe(false);
    },
  );
});
