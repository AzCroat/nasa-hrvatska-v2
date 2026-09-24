/**
 * speakQuestEarned — the Speak Quest is only marked by a screen that can hear
 * the learner speak (sweep 35, 2026-09-23).
 *
 * The Speak Quest reads "Complete 1 speaking exercise" and pays 25 XP; a second
 * tick the same day auto-promotes `speak2` (`TIER2_MAP`) for 50 more. Two
 * screens cleared it without a microphone anywhere in them:
 *
 *   * `VideoLessonScreen` — watch a clip, answer multiple-choice comprehension
 *     questions, `markQuest('speak')`. This is the 2026-08-14 mislabel: the
 *     listening screens were moved off the speak quest that day, correctly,
 *     and this one was not.
 *   * `SlangScreen` — a multiple-choice slang quiz that awards `'vocabulary'`
 *     and marked `'speak'`, OUTSIDE its own one-shot guard, so re-finishing
 *     ticked it again and paid the tier-2 quest for one quiz.
 *
 * THE RULE, and why it is this rule. "No microphone → no speak quest" is the
 * obvious statement and it is WRONG here: `DialogueSim` has no recogniser and
 * legitimately marks the quest, because its production path is typed and the
 * app's typed-production fallback counts identically (the Guided Speaking
 * contract). So the rule is: a screen may mark the speak quest when it has a
 * SPEECH INPUT PATH, or when its own `award` calls the work `'speaking'` —
 * the screen's own classification, which is the thing a quest must not
 * contradict.
 *
 * MEASURED BEFORE IT WAS WRITTEN, because widening a matcher is the dangerous
 * direction (the lint's 123-false-positive lesson). The broader rule "a quest
 * must match the award's activityType" was dry-run first and produced SIX hits
 * across 648 component files, of which four are honest dual-purpose screens
 * (news is culture AND reading; a tutor conversation does correct grammar).
 * This rule produces exactly the two defects above and nothing else.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';

const ROOT = resolve(__dirname, '..');
const FILES: string[] = [];
(function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === 'tests') continue;
      walk(p);
    } else if (/\.tsx?$/.test(name)) FILES.push(p);
  }
})(ROOT);

/** Comments stripped: several of these files DISCUSS `markQuest('speak')`. */
function strip(src: string): string {
  return readFileSync(src, 'utf8')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
    .replace(/\/\*[\s\S]*?\*\//g, '');
}

const SPEECH =
  /SpeechRecognition|MediaRecorder|getUserMedia|useWhisperSTT|recogniz|recognition|startRecording|audioChunks/i;

/**
 * A screen's speech path may live in a child — this repo decomposes exactly
 * that way (`ListeningComprehensionScreen` keeps its whole completion in
 * `listening/useListeningQuiz`). NOT LOAD-BEARING ON TODAY'S CORPUS, and said
 * plainly rather than left to look like coverage: mutation M14 (walk the
 * screen's own file only) leaves all 7 tests green, because every current
 * claimant has its recogniser inline or takes the `award('speaking')` branch.
 * It is kept because the semantics are right, not because it is catching
 * something.
 */
function localImports(file: string): string[] {
  const out: string[] = [];
  for (const m of strip(file).matchAll(/from\s+'(\.[^']+)'/g)) {
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

const MARK_SPEAK = /markQuest\(\s*['"]speak['"]\s*\)/;
const AWARDS_SPEAKING = /award\([^;]*?,\s*(?:true|false)\s*,\s*['"]speaking['"]\s*\)/;

const CLAIMANTS = FILES.filter((f) => MARK_SPEAK.test(strip(f)));

/**
 * THE CONVERSE RULE (added 2026-09-23, one sweep later). The block below asks
 * whether a claimant of the quest EARNED it. This one asks whether a screen
 * that earned it CLAIMS it — and the answer was no, twice:
 *
 *   * `MajaScreen` — awards `'speaking'`, carries a recogniser, and marked
 *     `culture`: "Explore a Croatian region or media item", for a spoken
 *     conversation that is neither. One quest wrongly credited, one rightly
 *     owed and withheld, in a single line.
 *   * `GuidedSpeakingScreen` — the app's own rubric-graded speaking practice,
 *     and the screen `FluencySnapshot`'s nudge was just repointed at, marked
 *     NOTHING. Work done, credit withheld.
 *
 * MEASURED BEFORE IT WAS WRITTEN, like its twin: seven screens award
 * `'speaking'` with a speech-input path, five marked `speak`, and those two did
 * not. Zero false positives — which is what makes the rule shippable rather
 * than a thirty-one-hit blanket like the payload-gated one.
 */
const SPEAKS_AND_SCORES = FILES.filter((f) => {
  const src = strip(f);
  return AWARDS_SPEAKING.test(src) && [f, ...localImports(f)].some((g) => SPEECH.test(strip(g)));
});

describe('a screen that does speaking practice claims the quest for it', () => {
  it('the subject is not empty — several screens really do both', () => {
    expect(SPEAKS_AND_SCORES.length).toBeGreaterThanOrEqual(5);
  });

  it.each(SPEAKS_AND_SCORES.map((f) => [relative(ROOT, f), f] as const))(
    '%s marks the speak quest',
    (_name, file) => {
      expect(
        MARK_SPEAK.test(strip(file)),
        `${relative(ROOT, file)} awards its work as 'speaking' and can hear the learner, but ` +
          `never marks the Speak Quest ("Complete 1 speaking exercise"). Either the learner ` +
          `earned it and it is being withheld, or the screen is marking some OTHER quest for ` +
          `speaking practice — both of which this rule exists to catch.`,
      ).toBe(true);
    },
  );
});

/**
 * THE SAME RULE, POINTED AT WRITING. Asked immediately after the speaking one
 * and it found the same shape twice more: `GuidedWritingScreen` — the
 * rubric-graded guided writing that the B2 formal email and the C1 academic
 * units route to — and `LessonProduceStep` both award `'writing'` and marked
 * NOTHING. The Writing Quest reads "Submit a written exercise" and pays 25 XP;
 * both of those screens submit a written exercise.
 *
 * Measured first, as ever: three screens award `'writing'`, one marked `write`,
 * two did not. No microphone clause is needed here — writing has no analogue of
 * the DialogueSim case, because the input device is the keyboard either way.
 */
const AWARDS_WRITING = /award\([^;]*?,\s*(?:true|false)\s*,\s*['"]writing['"]\s*\)/;
const MARK_WRITE = /markQuest\(\s*['"]write['"]\s*\)/;
const WRITERS = FILES.filter((f) => AWARDS_WRITING.test(strip(f)));

describe('a screen that grades writing claims the quest for it', () => {
  it('the subject is not empty', () => {
    expect(WRITERS.length).toBeGreaterThanOrEqual(3);
  });

  it.each(WRITERS.map((f) => [relative(ROOT, f), f] as const))(
    '%s marks the write quest',
    (_name, file) => {
      expect(
        MARK_WRITE.test(strip(file)),
        `${relative(ROOT, file)} awards its work as 'writing' but never marks the Writing Quest ` +
          `("Submit a written exercise"). The learner submitted one.`,
      ).toBe(true);
    },
  );
});

describe("markQuest('speak') is earned, not assumed", () => {
  it('the subject is not empty — several screens really do mark it', () => {
    // Without this, a rename of markQuest would empty the subject and it.each
    // would register no tests at all, passing silently.
    expect(CLAIMANTS.length).toBeGreaterThanOrEqual(5);
  });

  it.each(CLAIMANTS.map((f) => [relative(ROOT, f), f] as const))(
    '%s can actually hear (or calls its own work speaking)',
    (_name, file) => {
      const ownSource = strip(file);
      const graph = [file, ...localImports(file)];
      const hasSpeech = graph.some((g) => SPEECH.test(strip(g)));
      const callsItSpeaking = AWARDS_SPEAKING.test(ownSource);
      expect(
        hasSpeech || callsItSpeaking,
        `${relative(ROOT, file)} marks the Speak Quest ("Complete 1 speaking exercise", 25 XP, ` +
          `tier-2 at 50 more) with no speech-input path in its import graph and without calling ` +
          `its own award 'speaking'. Either the screen does not belong on that quest — mark the ` +
          `one that matches what it awards — or it has gained a production path this rule cannot ` +
          `see, in which case widen it deliberately and re-measure.`,
      ).toBe(true);
    },
  );
});
