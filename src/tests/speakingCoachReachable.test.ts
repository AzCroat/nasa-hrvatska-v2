// src/tests/speakingCoachReachable.test.ts
//
// THE SPEAKING COACH MUST BE REACHABLE FROM PRACTICE (2026-09-07).
//
// The defect this exists to keep closed, in full, because it is the clearest
// instance of the component-test / wiring-test split this repo already has a
// rule about:
//
//   `speakingCoach.test.js` proved the library records a mastery event, applies
//   the error taxonomy and fails soft. All true. Nothing proved a LEARNER could
//   reach it. Its only caller was `SpeakingScreen.maybeCoach`, which fires only
//   when `sw[2]` is one of 'question-response' | 'picture-description' |
//   'dialogue-completion' — and every path that fills that screen's item list
//   (`launchSpeaking` from Practice and the Me tab, the daily-session branch,
//   the learn-path branch) passes `acquisitionPool` VOCAB ROWS, whose third
//   element is not a prompt type. The commit that added those prompt pools
//   (d51e9de1, 2026-04-25) touched two component files and no launcher.
//
//   Consequence: `recordMasteryEvent({ skill: 'speaking' })` fired ONLY from
//   the Level Check and the checkpoints. Daily speaking practice produced no
//   speaking evidence at all, which is the exact finding the 2026-08-18
//   production-teaching audit set out to fix — and it was answered by writing
//   a correct library and wiring it to a state nothing produces.
//
// So the assertion is not "GuidedSpeakingScreen calls the coach" (a test that
// names one screen goes stale the moment the screen is renamed). It is: SOME
// screen the daily session can actually launch reaches the coach, walked
// through the REAL production pool, the REAL router and the REAL import graph.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTION_POOL } from '../hooks/useDailySession';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, '..');
const ROUTER = path.join(SRC, 'components/AppRouter.tsx');
const EXTS = ['.tsx', '.ts', '.jsx', '.js'];
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
 * Does this module, or anything it imports at runtime, CALL the coach?
 *
 * Declarations are stripped first. `lib/speakingCoach` declares
 * `requestSpeakingCoach`, so without this any screen importing that module for
 * a type would satisfy the guard while calling nothing — the identical hole
 * that made `couplingClearingPath` pass for a screen whose call had been
 * deleted (2026-08-30). `import type` is erased at build time and is not a
 * runtime path, so it is not followed.
 */
function reachesCoach(file: string, seen = new Set<string>()): boolean {
  if (seen.has(file)) return false;
  seen.add(file);
  const src = fs
    .readFileSync(file, 'utf8')
    .replace(
      /\b(?:export\s+)?(?:async\s+)?function\s+requestSpeakingCoach\s*\(/g,
      'function __decl__(',
    );
  if (/\brequestSpeakingCoach\s*\(/.test(src)) return true;
  const dir = path.dirname(file);
  for (const m of src.matchAll(/import\s+(?!type\b)[^;]*?from\s+'(\.[^']+)'/g)) {
    const next = resolveModule(dir, m[1]!);
    if (next && reachesCoach(next, seen)) return true;
  }
  return false;
}

/** screen id → the component AppRouter renders for it (skipping the boundary). */
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

const SPEAK_SCREENS = PRODUCTION_POOL.filter((p) => p.kind === 'speak').map((p) => p.screen);

describe('the speaking coach is reachable from daily practice', () => {
  it('every production-pool screen resolves to a real routed component', () => {
    for (const screen of PRODUCTION_POOL.map((p) => p.screen)) {
      const component = componentForScreen(screen);
      expect(component, `${screen} has no route in AppRouter`).toBeTruthy();
      expect(fileForComponent(component!), `${component} has no module`).toBeTruthy();
    }
  });

  it('at least one SPEAK screen the session can launch actually calls the coach', () => {
    const reaching = SPEAK_SCREENS.filter((screen) => {
      const component = componentForScreen(screen);
      const file = component && fileForComponent(component);
      return file ? reachesCoach(file) : false;
    });
    expect(
      reaching.length,
      `No screen in PRODUCTION_POOL reaches requestSpeakingCoach. Rubric-graded speaking ` +
        `would then exist only inside the Level Check, and daily practice would write no ` +
        `speaking evidence to the mastery ledger — the 2026-08-18 finding, reopened. ` +
        `Speak screens checked: ${SPEAK_SCREENS.join(', ')}`,
    ).toBeGreaterThan(0);
  });

  it('the reachable coach screen is usable WITHOUT a microphone', () => {
    // A coach reachable only behind a mic is not reachable for a learner whose
    // browser or device refuses one — and the transcript, not the audio, is what
    // the coach grades, so there is no reason to require it.
    const reaching = PRODUCTION_POOL.filter((p) => {
      const component = componentForScreen(p.screen);
      const file = component && fileForComponent(component);
      return file ? reachesCoach(file) : false;
    });
    expect(reaching.some((p) => p.micRequired === false)).toBe(true);
  });

  it('a coach-reaching screen is available from the lowest level, like guided writing', () => {
    const reaching = PRODUCTION_POOL.filter((p) => {
      const component = componentForScreen(p.screen);
      const file = component && fileForComponent(component);
      return file ? reachesCoach(file) : false;
    });
    expect(reaching.some((p) => p.cefr === 'A1')).toBe(true);
  });
});

describe('the walk itself is not decorative', () => {
  it('does not count a module that merely DECLARES the coach', () => {
    // If this ever returns true, the declaration strip has broken and every
    // screen importing lib/speakingCoach for a type would pass the guard above.
    const lib = resolveModule(path.join(SRC, 'lib'), './speakingCoach');
    expect(lib).toBeTruthy();
    expect(reachesCoach(lib!)).toBe(false);
  });

  it('does not report a screen that has nothing to do with speaking', () => {
    const component = componentForScreen('writing_guided');
    const file = component && fileForComponent(component);
    expect(file).toBeTruthy();
    expect(reachesCoach(file!)).toBe(false);
  });
});
