/**
 * counterWritesGoThroughAuthority.test.ts — no component may increment a mastery counter
 * on its own.
 *
 * WHY THIS IS THE POINT OF THE COMPLETION ENGINE. `getCEFR` scores a learner
 * `xp + lc * 15 + gc * 25`, and that score drives the Learn Path stage. A screen that
 * writes `gc: s.gc + 1` itself has to remember, by hand, that the write must happen at most
 * once ever — and measured on 2026-09-26, **seventeen of them did not**: no `vs` flag, and
 * where there was a ref it does not survive a remount. Driven twice over one shared stats
 * object, `gc` went 1 → 2 on every one. Twenty-five CEFR points per replay.
 *
 * `completeExercise` owns an idempotent `vs` write, so a screen that routes through it
 * CANNOT have this bug. This guard is what turns that from "fixed in 17 places" into "not
 * expressible": the counter write lives in exactly one module, and a new screen either
 * routes through it or fails here.
 *
 * SCOPE. Only an INCREMENT is forbidden (`<counter>: x.<counter> + 1`). Reading a counter,
 * displaying it, or merging one from a remote device is a different act and is untouched —
 * `mergeStatsFromRemote` takes the max of two known values rather than crediting new work.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

/** `gc: s.gc + 1`, `lc: prev.lc + 1`, … — a screen crediting its own completion. */
const INCREMENT = /\b(lc|gc|sp|rc)\s*:\s*\(?\s*\w+\.\1\s*\+\s*1/g;

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(path.join(ROOT, dir))) {
    const rel = path.join(dir, e);
    if (fs.statSync(path.join(ROOT, rel)).isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
}

/**
 * The modules allowed to increment a counter, each with the reason. These are not
 * screens: they are the authority itself and the reducer it is built on.
 */
const OWNS_THE_COUNTER: Record<string, string> = {
  'src/lib/dwellCredit.ts':
    'the PASSIVE dwell path for black-hole screens — a second, deliberate completion route, ' +
    "and it is idempotent: `wasFirstVisit()` is assigned inside the caller's `vs` updater, " +
    'so a repeat visit returns before crediting ("counters already credited")',
  'src/components/learn/AnimatedLesson.tsx':
    'the engine behind all 180 content lessons, whose `vs` key is PER LESSON (`al_<id>`) and ' +
    'whose completion also writes the curriculum spine, the taught queue and the retention ' +
    'ladder — more than the authority models. Already idempotent: it checks ' +
    "vs?.includes('al_' + lessonId) before crediting",
  'src/components/learn/LessonScreen.tsx':
    'its updater writes FOUR stats at once (lc, pf, rs, ct) in one call, which the authority ' +
    'does not model — it owns `vs` plus a single counter. The one place the authority is too ' +
    'narrow, and the course spine replaces this path',
  'src/components/learn/PitchAccentMastery.tsx':
    "already idempotent by its own check — vs?.includes('pitch_accent') before crediting",
  'src/components/practice/SpeakingScreen.tsx':
    "already idempotent by its own check — vs?.includes('speaking') before crediting",
};
// TWO EXEMPTIONS I WROTE BY REASONING WERE BOGUS, AND THE STALENESS CLAUSE CAUGHT BOTH.
// `useExerciseCompletion.ts` writes `next[statKind] = (prev[statKind] || 0) + 1` through a
// COMPUTED key, so the literal `gc: s.gc + 1` shape this guard forbids never matches it;
// and `statsReducer.ts` does not touch `lc`/`gc` at all — it dispatches actions, and the
// counter arithmetic lives elsewhere. An exemption that cannot fire is the stale-exemption
// shape with its reason written in advance, which is why every entry below is required to
// still match the pattern.

describe('a mastery counter is incremented in one place', () => {
  const files = walk('src')
    .filter((f) => /\.(ts|tsx)$/.test(f))
    .filter((f) => !f.includes(`tests${path.sep}`) && !/\.test\./.test(f));

  const offenders: { file: string; counters: string[] }[] = [];
  for (const f of files) {
    if (OWNS_THE_COUNTER[f.split(path.sep).join('/')]) continue;
    const hits = [...strip(fs.readFileSync(path.join(ROOT, f), 'utf8')).matchAll(INCREMENT)].map(
      (m) => m[1]!,
    );
    if (hits.length) offenders.push({ file: f, counters: [...new Set(hits)] });
  }

  it('no component or library increments lc/gc/sp/rc outside the authority', () => {
    expect(
      offenders.map((o) => `${o.file} (+${o.counters.join(',')})`),
      'route the completion through completeExercise: it owns the idempotent vs write, so ' +
        'the counter cannot be credited twice. Pass `xp: 0` and no `award` to keep the ' +
        "screen's own XP call exactly as it is — only idempotency should change.",
    ).toEqual([]);
  });

  it('the scan reaches the tree and the exemptions are still real', () => {
    // Zero offenders is what a healthy tree reports AND what a walk that stopped
    // descending reports. This is the only clause that tells them apart.
    expect(files.length, 'the walk found almost no source files').toBeGreaterThan(500);
    for (const [file, reason] of Object.entries(OWNS_THE_COUNTER)) {
      expect(fs.existsSync(path.join(ROOT, file)), `${file} is exempted but does not exist`).toBe(
        true,
      );
      const src = strip(fs.readFileSync(path.join(ROOT, file), 'utf8'));
      expect(
        INCREMENT.test(src),
        `${file} no longer increments a counter — remove its exemption so it is guarded`,
      ).toBe(true);
      INCREMENT.lastIndex = 0;
      expect(reason.length, `${file}'s exemption has no reason`).toBeGreaterThan(30);
    }
  });
});
