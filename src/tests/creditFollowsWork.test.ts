/**
 * creditFollowsWork.test.ts — a finished exercise must be credited for the WORK,
 * not for the acknowledgement.
 *
 * THE DEFECT (sweep 139). **Twenty-one screens** paid their credit from the onClick of
 * the Done / Finish button on their results view. That view is rendered inside the same
 * wrapper as `H(title, subtitle, goBack)`, which draws a real Back BUTTON
 * (`src/data/content.tsx`) — and `TabBar` is mounted on EVERY screen but `welcome` and
 * `placement` (`App.tsx`), so a tab is always another way out. Several views had a
 * fourth exit of their own (📋 Menu, 📖 Review, 🔄 Retry, Practice Again). A learner who
 * answered every question and left by any other exit got no XP, no `gc`/`lc`/`rc`, no
 * `vs`, no quest mark, no `writeDelta`, no ledger write and no session signal, having
 * done all the work.
 *
 * Twelve used `completeExercise`; nine hand-rolled the same credit
 * (`award` + `markQuest` + their own `vs` bookkeeping). The worst of the nine is
 * `ReviewScreen` — the app's highest-volume daily action — where finishing every due
 * SRS card and tapping a tab lost the XP, the `rc` counter, `vs: srsreview` and the
 * review count the quest reads.
 *
 * SEVEN PRINTED A CLAIM THEY HAD NOT HONOURED: `Unjumble`, `VocativeScreen`,
 * `BojeGame`, `DictationScreen`, `ListeningScreen` and `LiveTutorDebrief` render
 * "+N XP" on that view (the last ON the button itself), `ModalScreen` announces
 * "🏅 Modal Verbs Badge Earned!" and `PastTenseLessonScreen` "Quest complete! +20 XP
 * bonus" — all before the thing was credited.
 *
 * Nothing in the suite could see it, because every contract test in
 * `exerciseContract.test.tsx` clicks Done. A test that exercises the paying path
 * cannot tell you the other path exists.
 *
 * THE RULE IS THE CONJUNCTION, and each clause alone would be wrong:
 *   - crediting from an `onClick` is fine — `BojeGame` and `ZnamGame` credit from the
 *     ADVANCE button of the final question, which IS the act of finishing; they move
 *     the learner onto a results view whose credit is already recorded, so every exit
 *     from it is equivalent. Banning the shape would flag both as defects.
 *   - calling `goBack()` from an `onClick` is fine everywhere.
 * Paying only when the learner presses the button that LEAVES is what makes a second
 * exit lose their work. The fix moves the credit into an effect keyed on reaching the
 * results view, with a `total > 0` guard so `0 >= 0` cannot credit an unplayed
 * exercise on mount (sweep 106 / NEVER-DO 14).
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, walk, completionCallers, creditGatedOnExit } from './helpers/creditOnExit';

/** The twelve that route through `completeExercise`. */
const FIXED = [
  'src/components/learn/ModalScreen.tsx',
  'src/components/learn/PadeziScreen.tsx',
  'src/components/learn/PadezifullScreen.tsx',
  'src/components/practice/AspectDrillScreen.tsx',
  'src/components/practice/CollocationsGame.tsx',
  'src/components/practice/NumTime.tsx',
  'src/components/practice/PrepDrill.tsx',
  'src/components/practice/TypingScreen.tsx',
  'src/components/practice/Unjumble.tsx',
  'src/components/practice/VocativeScreen.tsx',
  'src/components/practice/WordFamilies.tsx',
  'src/components/practice/ConjugationDrill.tsx',
];

/**
 * The nine that hand-roll the same credit (`award` + `markQuest` + their own `vs`
 * bookkeeping) rather than going through the single authority. Deliberately NOT
 * converted: each grades and awards itself, and routing them through
 * `completeExercise` would change live XP semantics for no gain here — the
 * `writing_guided` / `relpron` precedent.
 */
const FIXED_HANDROLLED = [
  'src/components/croatia/LiveTutorDebrief.tsx',
  'src/components/learn/AlphabetScreen.tsx',
  'src/components/learn/PastTenseLessonScreen.tsx',
  'src/components/practice/DictationScreen.tsx',
  'src/components/practice/ListeningScreen.tsx',
  'src/components/practice/PitchAccentScreen.tsx',
  'src/components/practice/PronunciationContrast.tsx',
  'src/components/practice/ReviewScreen.tsx',
  'src/components/practice/ShadowingScreen.tsx',
];

/**
 * The three that credit through `completeLesson`, the wrapper — the omission that made
 * this rule blind to them until 2026-09-26. They are pinned separately because the
 * FIXED block above asserts `completeExercise({`, which a `completeLesson` caller does
 * not contain, so it could not have seen these three even once the writer set found
 * them. Real-world mutation: with `completeLesson(` out of `CREDIT_WRITERS`, all three
 * pre-fix files read CLEAN; with it in, all three are flagged and all three post-fix
 * files are clean.
 */
const FIXED_LESSON = [
  'src/components/learn/DeclensionScreen.tsx',
  'src/components/learn/FutureTenseLessonScreen.tsx',
  'src/components/learn/TensesScreen.tsx',
];

/** The two screens that credit from an advance button — correct, and not flagged. */
const ADVANCE_CREDITERS = [
  'src/components/practice/BojeGame.tsx',
  'src/components/practice/ZnamGame.tsx',
];

describe('an exercise is credited for the work, not for the acknowledgement', () => {
  const files = walk('src');

  it('the population is real', () => {
    // A floor, so a walk or a matcher that silently stops finding anything cannot
    // make the judgement below vacuous.
    const callers = completionCallers(files);
    expect(callers.length).toBeGreaterThan(100);
    for (const f of [
      'src/components/practice/TypingScreen.tsx',
      'src/hooks/useLessonCompletion.ts',
    ])
      expect(callers, `${f} must be in the population`).toContain(f);
  });

  it('no screen makes its credit conditional on which exit the learner takes', () => {
    expect(
      creditGatedOnExit(files),
      'these screens call completeExercise from the onClick of a control that also navigates ' +
        'away, so the credit is paid only if the learner leaves by that exact button. The ' +
        'results view also carries the Back button H(title, subtitle, goBack) draws — and often ' +
        'a Menu / Review / Retry button too — so finishing every question and leaving by any ' +
        'other exit pays nothing. Credit on REACHING the results view instead, in an effect, ' +
        'gated on the item total being positive so an empty bank cannot credit on mount.',
    ).toEqual([]);
  });

  it('non-vacuity: the defect shape is detected when it is present', () => {
    // A fabricated subject rather than a real file, so this clause cannot come to
    // depend on some screen keeping the defect (sweep 137's rule).
    const dir = fs.mkdtempSync(path.join(ROOT, 'node_modules/.credit-probe-'));
    const rel = path.relative(ROOT, path.join(dir, 'Probe.tsx'));
    try {
      fs.writeFileSync(
        path.join(ROOT, rel),
        [
          'export default function Probe({ goBack }) {',
          '  return <button onClick={() => {',
          "    completeExercise({ key: 'probe', score, total, stats, setStats });",
          '    goBack();',
          '  }}>Done</button>;',
          '}',
        ].join('\n'),
      );
      expect(creditGatedOnExit([rel]), 'the matcher no longer sees the defect').toEqual([rel]);

      // The same file with the credit moved into an effect is NOT flagged — otherwise
      // the rule would forbid the fix it demands.
      fs.writeFileSync(
        path.join(ROOT, rel),
        [
          'export default function Probe({ goBack }) {',
          '  useEffect(() => {',
          '    if (total === 0 || i < total) return;',
          "    completeExercise({ key: 'probe', score, total, stats, setStats });",
          '  }, [i, total]);',
          '  return <button onClick={goBack}>Done</button>;',
          '}',
        ].join('\n'),
      );
      expect(creditGatedOnExit([rel]), 'the rule flags the prescribed fix').toEqual([]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it('the twelve fixed screens still credit, and credit from an effect', () => {
    // The rule above is satisfied by a screen that stopped calling completeExercise
    // at all. These twelve must still credit, and from an effect — the shape that
    // makes both exits equivalent.
    for (const f of FIXED) {
      const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
      expect(src, `${f} no longer credits at all`).toContain('completeExercise({');
      const at = src.indexOf('completeExercise({');
      const before = src.slice(Math.max(0, at - 1600), at);
      const effectAt = before.lastIndexOf('useEffect');
      expect(effectAt > before.lastIndexOf('onClick'), `${f} credits outside an effect again`).toBe(
        true,
      );
      // And the effect refuses a zero total, or `0 >= 0` credits an unplayed exercise
      // on mount (sweep 106). THE WINDOW IS THE EFFECT'S OWN GUARD REGION, from
      // `useEffect(` to the call — a fixed 1600-char look-behind passed with the
      // guard DELETED, because that much preceding code mentions a length somewhere.
      // Every instance of this repo's fixed-window defect has been found the same
      // way: by mutating and watching the assertion hold.
      expect(
        before.slice(effectAt),
        `${f}'s credit effect has no positivity guard — an empty bank would credit on mount`,
      ).toMatch(/(length === 0|total === 0|length > 0|total > 0|\.length &&|!\w*[Tt]otal\b)/);
    }
  });

  it('the three completeLesson screens still credit, and credit from an effect', () => {
    for (const f of FIXED_LESSON) {
      const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
      expect(src, `${f} no longer credits at all`).toContain('completeLesson({');
      const at = src.indexOf('completeLesson({');
      const before = src.slice(Math.max(0, at - 1600), at);
      const effectAt = before.lastIndexOf('useEffect');
      expect(effectAt > before.lastIndexOf('onClick'), `${f} credits outside an effect again`).toBe(
        true,
      );
      // Same positivity requirement, read from the effect's own guard region — an empty
      // question bank must not credit an unplayed lesson on mount (sweep 106).
      expect(
        before.slice(effectAt),
        `${f}'s credit effect has no positivity guard — an empty bank would credit on mount`,
      ).toMatch(/(length === 0|total === 0|length > 0|total > 0|\.length &&|!\w*[Tt]otal\b)/);
    }
  });

  it('the nine hand-rolled screens still credit, and credit from an effect', () => {
    // These never used `completeExercise`, so the FIXED check above cannot see them.
    // Each must still pay, and from an effect. The writer names are what each screen
    // actually calls; a screen that lost its whole credit block would pass a
    // "not from an onClick" check trivially.
    const WRITERS = /(award\(|markQuest\(|recordExerciseOutcome\(|recordSrsReview\()/;
    for (const f of FIXED_HANDROLLED) {
      const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
      const at = src.search(/\n\s*(if \(typeof award|if \(award\)|markQuest\(|recordSrsReview\()/);
      expect(at, `${f} no longer credits at all`).toBeGreaterThan(-1);
      expect(src.slice(at, at + 400), `${f}'s credit is not a writer call`).toMatch(WRITERS);
      const before = src.slice(Math.max(0, at - 2600), at);
      expect(
        before.lastIndexOf('useEffect') > before.lastIndexOf('onClick'),
        `${f} credits outside an effect again`,
      ).toBe(true);
    }
  });

  it('crediting from an advance button is not flagged', () => {
    // These two are the reason the rule is a conjunction. If they ever appear in the
    // judgement above, the matcher has widened into a shape that is correct.
    for (const f of ADVANCE_CREDITERS) {
      expect(fs.existsSync(path.join(ROOT, f)), `${f} moved`).toBe(true);
      expect(creditGatedOnExit([f]), `${f} is not a credit-on-exit defect`).toEqual([]);
    }
  });
});
