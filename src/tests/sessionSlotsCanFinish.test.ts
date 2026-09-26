/**
 * sessionSlotsCanFinish.test.ts — every screen the daily session can launch must be
 * able to FINISH that session slot.
 *
 * THE STRAND. `SessionCard.onStart` writes `nh_session_started`, and Today's Session
 * only advances when HomeTab, on return, finds `shouldAutoCompleteOnReturn(pending,
 * completed)` true. A screen that satisfies neither branch leaves the plan at N-1/N
 * for ever: re-tapping Start re-drops the learner onto the same activity, and the
 * on-completion auto-regenerate is blocked behind it too.
 *
 * It has been fixed ONE SCREEN AT A TIME, at least four times, each after it reached a
 * learner: the whole Croatia slot (2026-06-12, when the dwell credit that used to cover
 * browse screens was removed), `alphabet` (2026-09-23 — its award was gated on a `vs`
 * key the dwell timer had PRE-WRITTEN, so the day-one curriculum drill could be
 * finished and the session stayed at N-1/N), `micro_lesson` (sweep 119, where gating
 * the award for the first time would have stranded it had the signal not been moved
 * above the gate), and `dictation`'s empty-bank case. Nothing ever asked the question
 * of every screen the slots can serve — the `sessionScreensFeedLedger` shape applied to
 * the session handshake instead of the mastery ledger.
 *
 * THE TWO COMPLETION MECHANISMS, and a guard that knows only one reports ~64 healthy
 * screens as broken:
 *   1. THE SIGNAL. `useAward` writes `nh_session_completed` itself, so ANY positive
 *      award completes the slot — `signalSessionCompleteIfActive` is the supplementary
 *      path for screens that grade without awarding, and `completeExercise` /
 *      `completeLesson` call it.
 *   2. AUTO-COMPLETE ON VIEW. `SESSION_AUTOCOMPLETE_SCREENS` — every CROATIA_POOL
 *      screen plus the `reference: true` pool entries — is marked done on return,
 *      because a browse surface has nothing to grade. Derived from the pools, so it
 *      cannot drift.
 *
 * Measured: 376 session-launchable screens, ZERO that can finish by neither route. So
 * this is a RATCHET, not a save — and the value is that the next browse screen added to
 * a pool, or the next graded screen whose award moves behind a gate, fails here instead
 * of stranding a learner's day.
 *
 * AND MY FIRST RUN REPORTED TWO FINDINGS ON CORRECT CODE, both `award?.(...)`.
 * `award\s*\(` does not match an OPTIONAL call, and `AlkaScreen` passes
 * `onXp: (xp) => award?.(xp, true, 'vocabulary')` while `RoleplayScreen` calls
 * `award?.(20, false, 'speaking')`. A matcher that misses the syntax the corpus
 * actually uses manufactures findings — the mirror of this repo's "a name that matches
 * nothing guards nothing", and the optional-call arm is asserted below for that reason.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SESSION_SCREEN_IDS, SESSION_AUTOCOMPLETE_SCREENS } from '../hooks/useDailySession';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, '..');
const EXTS = ['.tsx', '.ts', '.jsx', '.js'];
const routerSrc = fs.readFileSync(path.join(SRC, 'components/AppRouter.tsx'), 'utf8');

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

function resolveModule(fromDir: string, spec: string): string | null {
  const base = path.resolve(fromDir, spec);
  for (const ext of EXTS) if (fs.existsSync(base + ext)) return base + ext;
  for (const ext of EXTS) {
    const idx = path.join(base, 'index' + ext);
    if (fs.existsSync(idx)) return idx;
  }
  return null;
}

/** Anything that ends with `nh_session_completed` being written. */
const FINISHERS = [
  'signalSessionCompleteIfActive',
  'completeExercise',
  'completeLesson',
  'award',
  'markLessonComplete',
];
/** `?.(` is admitted — see the header. */
const FINISH_CALL = new RegExp(`\\b(?:${FINISHERS.join('|')})\\s*\\??\\.?\\s*\\(`);

/**
 * The walk follows `components/` and `hooks/` only — the modules a screen COMPOSES —
 * never `lib/`, for the reason `sessionScreensFeedLedger` records: following everything
 * let any screen importing `lib/aiPost` satisfy the guard through a transitive call it
 * never made. The three modules that DECLARE a finisher are blocked so importing one
 * for a type cannot satisfy anything; their NAMES are still matched at the call site,
 * which is the only place that proves a screen finishes.
 */
const BLOCKED = [
  path.join(SRC, 'hooks/useExerciseCompletion.ts'),
  path.join(SRC, 'hooks/useLessonCompletion.ts'),
  path.join(SRC, 'hooks/useAward.ts'),
  path.join(SRC, 'lib/sessionSignal.ts'),
];
const mayDescend = (f: string) =>
  !BLOCKED.includes(f) &&
  (f.startsWith(path.join(SRC, 'components')) || f.startsWith(path.join(SRC, 'hooks')));

const stripDecl = (s: string) =>
  s.replace(
    new RegExp(
      `\\b(?:export\\s+)?(?:async\\s+)?function\\s+(?:${FINISHERS.join('|')})\\s*\\(`,
      'g',
    ),
    'function __decl__(',
  );

function reachesFinish(file: string, seen = new Set<string>(), root = true): boolean {
  if (seen.has(file)) return false;
  if (!root && !mayDescend(file)) return false;
  seen.add(file);
  const src = stripDecl(strip(fs.readFileSync(file, 'utf8')));
  if (FINISH_CALL.test(src)) return true;
  const dir = path.dirname(file);
  for (const m of src.matchAll(/import\s+(?!type\b)[^;]*?from\s+'(\.[^']+)'/g)) {
    const next = resolveModule(dir, m[1]!);
    if (next && reachesFinish(next, seen, false)) return true;
  }
  return false;
}

function componentForScreen(screen: string): string | null {
  const at = routerSrc.indexOf(`currentScreen === '${screen}'`);
  if (at === -1) return null;
  for (const m of routerSrc.slice(at, at + 600).matchAll(/<([A-Z]\w+)[\s/>]/g)) {
    const n = m[1]!;
    if (n !== 'ScreenErrorBoundary' && n !== 'Suspense') return n;
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

const screens = [...SESSION_SCREEN_IDS].sort();

describe('every session-launchable screen can finish its slot', () => {
  it('the population is real and every screen resolves to a routed module', () => {
    // A floor, so a pool that stops exporting cannot make the judgement vacuous.
    expect(screens.length).toBeGreaterThan(300);
    const unresolved = screens.filter((s) => {
      const c = componentForScreen(s);
      return !c || !fileForComponent(c);
    });
    expect(unresolved, 'these session screens resolve to no routed module').toEqual([]);
  });

  it('no screen strands the session', () => {
    const stranded = screens.filter(
      (s) =>
        !SESSION_AUTOCOMPLETE_SCREENS.has(s) &&
        !reachesFinish(fileForComponent(componentForScreen(s)!)!),
    );
    expect(
      stranded,
      'these screens can be launched as a daily-session activity and can never mark it ' +
        'done: they neither reach a finisher (award / signalSessionCompleteIfActive / ' +
        'completeExercise / completeLesson) nor sit in SESSION_AUTOCOMPLETE_SCREENS. The ' +
        "learner's plan stays at N-1/N for ever and re-tapping Start re-drops them onto " +
        'the same activity. Either award on a genuine finish, call the signal, or — for a ' +
        'browse surface with nothing to grade — add it to a pool the autocomplete set is ' +
        'derived from.',
    ).toEqual([]);
  });

  it('BOTH mechanisms are load-bearing, and neither alone is enough', () => {
    // Without the autocomplete branch a large slice of healthy browse screens would
    // read as stranded; without the signal branch the graded ones would. Asserting
    // both are non-trivial is what stops a future simplification dropping one.
    const byAutocompleteOnly = screens.filter(
      (s) =>
        SESSION_AUTOCOMPLETE_SCREENS.has(s) &&
        !reachesFinish(fileForComponent(componentForScreen(s)!)!),
    );
    const bySignal = screens.filter((s) =>
      reachesFinish(fileForComponent(componentForScreen(s)!)!),
    );
    expect(byAutocompleteOnly.length, 'the autocomplete branch covers nothing').toBeGreaterThan(20);
    expect(bySignal.length, 'the signal branch covers nothing').toBeGreaterThan(200);
  });

  it('the matcher admits an OPTIONAL call, which is what two real screens use', () => {
    // `award?.(...)` is the only completion path AlkaScreen and RoleplayScreen have, and
    // the first version of this guard reported both as stranded. A matcher that misses
    // the corpus's own syntax manufactures findings on correct code.
    expect(FINISH_CALL.test("onXp: (xp) => award?.(xp, true, 'vocabulary')")).toBe(true);
    expect(FINISH_CALL.test("award?.(20, false, 'speaking')")).toBe(true);
    expect(FINISH_CALL.test('award(20)')).toBe(true);
    // And it does not fire on a bare mention, or a declaration would satisfy a module.
    expect(FINISH_CALL.test('the award is granted later')).toBe(false);
    for (const s of ['alka', 'roleplay']) {
      expect(screens, `${s} left the session pools — drop it from this assertion`).toContain(s);
      expect(
        reachesFinish(fileForComponent(componentForScreen(s)!)!),
        `${s} no longer reaches a finisher`,
      ).toBe(true);
    }
  });

  it('a declaration does not count as a finish', () => {
    // The four modules that DECLARE a finisher are blocked, so the walk never enters
    // them; `stripDecl` is the belt for a module that declares one and is NOT blocked —
    // a future extraction, or a screen that defines its own local `completeLesson`.
    for (const b of BLOCKED) expect(fs.existsSync(b), `${b} moved — update BLOCKED`).toBe(true);
    expect(stripDecl('export function completeExercise(args) {')).not.toMatch(FINISH_CALL);

    // MEASURED: removing the stripDecl CALL from reachesFinish changes nothing today,
    // because BLOCKED already covers every real declarer. A clause that survives its own
    // mutation is decoration until a positive control exercises it, so the control is
    // FABRICATED — a module whose only mention of a finisher is its own declaration must
    // not read as finishing, and must read as finishing once it also calls one.
    const dir = fs.mkdtempSync(path.join(SRC, '..', 'node_modules', '.finish-probe-'));
    const decl = path.join(dir, 'Declarer.tsx');
    try {
      fs.writeFileSync(decl, 'export function completeLesson(a) {\n  return a;\n}\n');
      expect(reachesFinish(decl), 'a bare declaration reads as a finish').toBe(false);
      fs.writeFileSync(
        decl,
        'export function completeLesson(a) {\n  return a;\n}\nexport const go = () => award?.(5);\n',
      );
      expect(reachesFinish(decl), 'a real call does not read as a finish').toBe(true);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
