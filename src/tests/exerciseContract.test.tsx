import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import type { Stats, StatsContextValue } from '../types';

// Freeze Fisher-Yates shuffle so opts[0] stays in place (no swaps occur).
// In every DATA item, answer === opts[0]. With rnd() returning 0.9999,
// Math.floor(0.9999 * (i+1)) === i for every i, so each swap is a no-op.
vi.mock('../lib/random.js', () => ({
  rnd: () => 0.9999,
}));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

// SP11b: ConjugationDrill (and other grammar-dependent drills under contract test) now
// fetch grammar data via useGrammar(). Mock with real CONJ from the server-side data
// so the drill renders past its loading state and the contract checks (award, markQuest)
// actually fire.
vi.mock('../hooks/useGrammar', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grammarMod = (await vi.importActual('../../functions/api/content/_data/grammar.js')) as any;
  return {
    useGrammar: () => ({
      grammar: {
        PADEZI: grammarMod.PADEZI ?? {},
        GRAM: grammarMod.GRAM ?? {},
        CONJ: grammarMod.CONJ,
        MODAL: grammarMod.MODAL ?? {},
        TENSES: grammarMod.TENSES ?? {},
        ASPECT: grammarMod.ASPECT ?? {},
        ASPECT_PAIRS: grammarMod.ASPECT_PAIRS ?? [],
        CONDITIONAL: grammarMod.CONDITIONAL ?? {},
        FORMAL_REGISTER: grammarMod.FORMAL_REGISTER ?? {},
        IMPERSONAL: grammarMod.IMPERSONAL ?? {},
        PHONOLOGY: grammarMod.PHONOLOGY ?? {},
        PITCH_ACCENT: grammarMod.PITCH_ACCENT ?? [],
        PADEZI_FULL: grammarMod.PADEZI_FULL ?? {},
      },
      loading: false,
      error: null,
      reload: () => {},
    }),
  };
});

function makeCtx() {
  const setStats = vi.fn();
  const writeDelta = vi.fn();
  const dispatch = vi.fn();
  const award = vi.fn();
  const stats: Stats = {
    xp: 0,
    lc: 0,
    gc: 0,
    sp: 0,
    de: 0,
    rc: 0,
    pf: 0,
    mv: 0,
    hi: 0,
    str: 0,
    authLoading: 0,
    diff: 'beginner',
    ct: [],
    vs: [],
    rs: [],
    badges: [],
  };
  const value: StatsContextValue = { stats, setStats, writeDelta, dispatch, award, level: 1 };
  return { value, setStats, writeDelta, award };
}

async function completeDrill(awardMock: ReturnType<typeof vi.fn>, completionOverride?: () => void) {
  // A click that changes NOTHING in the DOM is not progress. Three in a row is a
  // dead end, and stopping there is what keeps the staleness block below cheap:
  // without it, Priority 3 drives the 24 undriveable screens for the full 300
  // iterations over 70–140-button DOMs, and this file went from seconds to four
  // minutes. Measured, per screen: GenderDrillScreen 50s, ComparativesScreen 37s,
  // VerbDrillScreen 36s. innerHTML rather than textContent, because selecting a
  // tile can legitimately change only styling on its way somewhere.
  let lastHtml = '';
  let idle = 0;
  const progressed = () => {
    const html = document.body.innerHTML;
    if (html === lastHtml) return ++idle < 3;
    lastHtml = html;
    idle = 0;
    return true;
  };
  // 60, down from 300 (sweep 138), and the number is a measurement rather than a
  // guess: the longest drill that actually completes here takes 20 clicks
  // (ClozeEngine: 10 questions x answer+Next), and the widest real shape is 15
  // questions x 2 = 30. The cap is only ever REACHED by a screen the driver cannot
  // finish, and every iteration there is a `queryAllByRole` over a 70-140-button
  // DOM — at 300 the staleness block below cost 36 seconds of CI for 24 negatives.
  for (let i = 0; i < 60; i++) {
    // Award fired means we reached the done screen and the contract was executed.
    if (awardMock.mock.calls.length > 0) break;

    // If a per-drill override is supplied, delegate to it each iteration.
    if (completionOverride) {
      completionOverride();
      continue;
    }

    // Priority 0: click a menu tile (div.tc) for drills that start with a mode-select screen
    // e.g. ConjugationDrill shows tense tiles before the quiz begins.
    const menuTile = document.querySelector('.tc') as HTMLElement | null;
    if (menuTile) {
      fireEvent.click(menuTile);
      if (!progressed()) break;
      continue;
    }

    // Priority 0.5 (concept-teaching, 2026-08-18): the case drills open with a
    // teaching phase — tap through its Start button like a returning learner.
    const introStart = document.querySelector(
      '[data-testid="case-intro-start"]',
    ) as HTMLElement | null;
    if (introStart) {
      fireEvent.click(introStart);
      if (!progressed()) break;
      continue;
    }

    const allButtons = screen.queryAllByRole('button');

    // Priority 1: click "Next ->", "See results", "done", or "finish" when visible.
    // "Finish!" is the completion CTA on ConjugationDrill's results screen.
    const advanceBtn = allButtons.find((b) =>
      /next|see results|done|finish/i.test((b as HTMLElement).textContent || ''),
    );
    if (advanceBtn) {
      fireEvent.click(advanceBtn);
      if (!progressed()) break;
      continue;
    }

    // Priority 2: click the first option button (className "ob") — with rnd()===0
    // Fisher-Yates doesn't swap, so opts[0] === answer for every question.
    const optionBtn = allButtons.find(
      (b) => (b as HTMLElement).className.includes('ob') && !(b as HTMLButtonElement).disabled,
    );
    if (optionBtn) {
      fireEvent.click(optionBtn);
      if (!progressed()) break;
      continue;
    }

    // Priority 3 (sweep 138): an option button with NO class at all. The 25 skips
    // below all said "inline styles, no .ob class", and for one of them that was
    // the whole blocker — but a bare-className rule alone CANNOT work, measured:
    // in ClozeEngine every button has an empty className, including a mode toggle
    // (Multiple Choice / Typing) that a naive rule flips back and forth for ever,
    // and a speaker button. So the discriminator is what a control LOOKS like:
    // options are words, controls are prefixed with an emoji or are a nav verb.
    // Advance is still checked first (Priority 1), which is what stops the loop
    // sitting on "🔊 Hear it" once feedback is showing.
    const plainOption = allButtons.find((b) => {
      const el = b as HTMLButtonElement;
      const t = (el.textContent || '').trim();
      return (
        !el.disabled &&
        t.length > 0 &&
        !/^(back|home|exit|menu|close|skip|cancel)\b/i.test(t) &&
        // A leading non-letter/digit is a control affordance in this codebase's
        // convention (🔘 Multiple Choice, 💡 Show grammar hint, 🔊 Hear it).
        /^[\p{L}\p{N}"'(]/u.test(t)
      );
    });
    if (plainOption) {
      fireEvent.click(plainOption);
      if (!progressed()) break;
      continue;
    }

    // Safety: no recognised button found — break to avoid infinite loop.
    break;
  }
}

// Drills that fully conform to the gold contract (award + markQuest + setStats + writeDelta with vs).
// AspectDrillScreen has been moved to its own isolated file: aspectDrillContract.test.tsx
const FULL_CONTRACT_DRILLS = [
  // ─── Phase 1: Grammar drills (original 13) ───────────────────────────────────
  {
    name: 'InstrumentalDrill',
    path: '../components/practice/InstrumentalDrill',
    vsTag: 'instrumental',
  },
  { name: 'PassiveDrill', path: '../components/practice/PassiveDrill', vsTag: 'passive' },
  { name: 'CliticDrill', path: '../components/practice/CliticDrill', vsTag: 'clitic' },
  { name: 'ImperativeDrill', path: '../components/practice/ImperativeDrill', vsTag: 'imperative' },
  {
    name: 'NegationGenDrill',
    path: '../components/practice/NegationGenDrill',
    vsTag: 'negationgen',
  },
  { name: 'PrepDrill', path: '../components/practice/PrepDrill', vsTag: 'preposition' },
  { name: 'GenitiveDrill', path: '../components/practice/GenitiveDrill', vsTag: 'genitive' },
  { name: 'NominativeDrill', path: '../components/practice/NominativeDrill', vsTag: 'nominative' },
  { name: 'LocativeDrill', path: '../components/practice/LocativeDrill', vsTag: 'locative' },
  { name: 'AccusativeDrill', path: '../components/practice/AccusativeDrill', vsTag: 'accusative' },
  {
    name: 'ConjugationDrill',
    path: '../components/practice/ConjugationDrill',
    vsTag: 'conjugation',
  },

  // ─── SP2 Tier 1: exercises now following contract ─────────────────────────────
  // ClozeEngine: DRIVEABLE since sweep 138, and its skip had been stale for as long
  // as the helper's Priority 3 was missing. Its buttons carry no class at all — the
  // stated reason — but that was never the whole blocker: a bare-className rule
  // clicks this screen's OWN mode toggle (Multiple Choice / Typing) for ever. The
  // advance-first ordering plus "a control is prefixed with an emoji" drives it in
  // 20 clicks.
  { name: 'ClozeEngine', path: '../components/practice/ClozeEngine', vsTag: 'cloze' },
  // ProductionDrillScreen: contract-compliant but multi-phase (Transform/Translate/Build)
  // with inline-style buttons; helper cannot navigate phase transitions.
  {
    name: 'ProductionDrillScreen',
    path: '../components/practice/ProductionDrillScreen',
    vsTag: 'production',
    skip: true,
    skipReason: 'Multi-phase (Transform/Translate/Build), inline-style buttons, no .ob class',
  },
  // TranslateDrillsScreen: contract-compliant but option buttons use inline styles.
  {
    name: 'TranslateDrillsScreen',
    path: '../components/practice/TranslateDrillsScreen',
    vsTag: 'translate',
    skip: true,
    skipReason: 'Option buttons use inline styles (no .ob class); helper cannot click options',
  },
  // SentenceTileScreen: contract-compliant but uses tile drag/click ordering interaction.
  {
    name: 'SentenceTileScreen',
    path: '../components/practice/SentenceTileScreen',
    vsTag: 'sentence-tile',
    skip: true,
    skipReason: 'Tile ordering interaction (not MC); helper cannot assemble sentences',
  },
  // Unjumble: contract-compliant but uses text input for word-order answers.
  {
    name: 'Unjumble',
    path: '../components/practice/Unjumble',
    vsTag: 'unjumble',
    skip: true,
    skipReason: 'Text input for word-order answers; no .ob class MC buttons',
  },
  // DictationScreen: contract-compliant (listening, lc counter) but uses text input.
  {
    name: 'DictationScreen',
    path: '../components/practice/DictationScreen',
    vsTag: 'dictation',
    skip: true,
    skipReason: 'Listening + text-input interaction; no .ob MC buttons for helper to drive',
  },
  // NumTime: contract-compliant AND driveable — .ob class buttons + "Next →" / "Finish!".
  { name: 'NumTime', path: '../components/practice/NumTime', vsTag: 'numtime' },
  // WordSprint: contract-compliant but timer-based sprint game with no .ob MC loop.
  {
    name: 'WordSprint',
    path: '../components/practice/WordSprint',
    vsTag: 'wordsprint',
    skip: true,
    skipReason: 'Timer-based sprint game with custom game loop; no .ob MC buttons',
  },

  // ─── SP2 Tier 2: partial-compliance exercises now fully compliant ─────────────
  // MatchGame: contract-compliant but uses role="button" div pairs for matching.
  {
    name: 'MatchGame',
    path: '../components/practice/MatchGame',
    vsTag: 'match',
    skip: true,
    skipReason: 'Pair-matching with role="button" divs (not .ob buttons); custom game loop',
  },
  // ZnamGame: contract-compliant but uses .tc section tiles + non-ob card buttons.
  {
    name: 'ZnamGame',
    path: '../components/practice/ZnamGame',
    vsTag: 'znam',
    skip: true,
    // REASON CORRECTED 2026-09-23 — the old one was wrong and would have sent the
    // next person to fix the wrong thing. It read "Section-select (.tc tiles) +
    // flashcard flip interaction; no .ob MC buttons". Measured by un-skipping:
    // the helper drives this screen fine (the `.tc` priority handles the section
    // select and `award` DOES fire), so the buttons were never the problem. What
    // actually blocks it is in the component: ZnamGame awards per CORRECT answer
    // and gates credit on a >=75% comprehension pass via `completeExercise`. The
    // helper clicks the first option, which ZnamGame shuffles with its own `sh()`,
    // so it scores ~1/N, never reaches the gate, and `markQuest` is never called.
    // Its completion contract is registry-driven and IS covered, by
    // `lib/completion/__tests__/exerciseRegistry.test.ts` (znam -> vocab/vocabulary).
    skipReason:
      'Credit is gated on a >=75% comprehension pass; the helper picks the first ' +
      'shuffled option so it scores ~1/N and the completion contract never fires',
  },
  // BojeGame: contract-compliant but multi-mode game (learn/quiz phases), non-ob buttons.
  {
    name: 'BojeGame',
    path: '../components/practice/BojeGame',
    vsTag: 'boje',
    skip: true,
    skipReason: 'Multi-mode game (learn → quiz → results); no .ob MC buttons in quiz phase',
  },
  // TypingScreen: contract-compliant but uses text input (typing the word).
  {
    name: 'TypingScreen',
    path: '../components/practice/TypingScreen',
    vsTag: 'typing',
    skip: true,
    skipReason: 'Text-input typing interaction; no .ob MC buttons for helper to drive',
  },
  // CollocationsGame: contract-compliant AND driveable — .ob buttons + "🏠 Done".
  // Uses 'vocabulary' activityType and 'vocab' questArg (not grammar).
  {
    name: 'CollocationsGame',
    path: '../components/practice/CollocationsGame',
    vsTag: 'collocations',
    activityType: 'vocabulary',
    questArg: 'vocab',
  },
  // PitchAccentScreen: contract-compliant but option buttons use inline styles (no .ob).
  {
    name: 'PitchAccentScreen',
    path: '../components/practice/PitchAccentScreen',
    vsTag: 'pitch-accent',
    skip: true,
    skipReason: 'Accent-type option buttons use inline styles (no .ob class)',
  },
  // WordFamilies: contract-compliant AND driveable — .ob buttons + "🏠 Done".
  { name: 'WordFamilies', path: '../components/practice/WordFamilies', vsTag: 'word-families' },
  // PronunciationContrast: contract-compliant AND driveable — .ob buttons + "🏠 Done".
  {
    name: 'PronunciationContrast',
    path: '../components/practice/PronunciationContrast',
    vsTag: 'pronunciation-contrast',
  },
  // ShadowingScreen: contract-compliant (listening, lc) but requires audio recording.
  {
    name: 'ShadowingScreen',
    path: '../components/practice/ShadowingScreen',
    vsTag: 'shadowing',
    skip: true,
    skipReason: 'Audio recording interaction (microphone); helper cannot simulate speech',
  },
  // NumbersCasesDrill: contract-compliant AND driveable — .ob buttons + "See results" / "Next →".
  {
    name: 'NumbersCasesDrill',
    path: '../components/practice/NumbersCasesDrill',
    vsTag: 'numbers-cases',
  },

  // ─── SP2 Tier 3: exercises/ subdir — all contract-compliant ──────────────────
  // All Tier 3 exercises fire award automatically via useEffect when the last
  // question is answered. However their option buttons use inline styles (no .ob)
  // so the generic helper cannot click options to advance through questions.
  //
  // These are skipped HERE, not untested: every one now has its own behavioural
  // contract test that drives it with a real answer key and asserts both a
  // passing and a failing run (src/tests/<screen>.contract.test.tsx, via the
  // shared helper in src/tests/helpers/mcDrill.tsx). The registry-wide invariant
  // — no `gated` key may hand-roll its credit — lives in
  // gatedCreditSites.contract.test.ts.
  {
    name: 'GenderDrillScreen',
    path: '../components/practice/exercises/GenderDrillScreen',
    vsTag: 'gender',
    skip: true,
    skipReason: 'Multi-section UI (sort/plural/adj), inline-style option buttons, no .ob class',
  },
  {
    name: 'VerbDrillScreen',
    path: '../components/practice/exercises/VerbDrillScreen',
    vsTag: 'verb-drill',
    skip: true,
    skipReason: 'Inline-style option buttons (no .ob class); helper cannot click answers',
  },
  {
    name: 'NegationScreen',
    path: '../components/practice/exercises/NegationScreen',
    vsTag: 'negation',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
  {
    name: 'FutureTenseScreen',
    path: '../components/practice/exercises/FutureTenseScreen',
    vsTag: 'future-tense',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
  {
    name: 'CityLocativeScreen',
    path: '../components/practice/exercises/CityLocativeScreen',
    vsTag: 'city-locative',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
  {
    name: 'ReflexiveScreen',
    path: '../components/practice/exercises/ReflexiveScreen',
    vsTag: 'reflexive',
    skip: true,
    skipReason: 'Complex multi-section reflexive UI; inline-style buttons, no .ob class',
  },
  {
    name: 'FillStoryScreen',
    path: '../components/practice/exercises/FillStoryScreen',
    vsTag: 'fill-story',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
  {
    name: 'ConvMatchScreen',
    path: '../components/practice/exercises/ConvMatchScreen',
    vsTag: 'conv-match',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; dialogue-matching interaction, no .ob class',
  },
  {
    name: 'PronounsScreen',
    path: '../components/practice/exercises/PronounsScreen',
    vsTag: 'pronouns',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
  {
    name: 'SentenceBuilderScreen',
    path: '../components/practice/exercises/SentenceBuilderScreen',
    vsTag: 'sentence-builder',
    skip: true,
    // Not drag-to-build, as this reason used to claim — it is a plain MC list
    // with inline-styled buttons, driven for real in sentenceBuilder.contract.test.tsx.
    skipReason: 'Inline-style MC buttons (no .ob class); helper cannot click options',
  },
  {
    name: 'PossessivesScreen',
    path: '../components/practice/exercises/PossessivesScreen',
    vsTag: 'possessives',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
  {
    name: 'ComparativesScreen',
    path: '../components/practice/exercises/ComparativesScreen',
    vsTag: 'comparatives',
    skip: true,
    skipReason: 'Award auto-fires via useEffect; inline-style buttons, helper cannot drive MC loop',
  },
];

describe('Exercise Contract -- gold-pattern drills', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('DativeDrill follows the contract', async () => {
    const { default: DativeDrill } = await import('../components/practice/DativeDrill');
    const { value, setStats, writeDelta, award } = makeCtx();
    const goBack = vi.fn();

    render(
      <StatsProvider value={value}>
        <DativeDrill goBack={goBack} award={award} />
      </StatsProvider>,
    );

    await completeDrill(award);

    // award(xp: number, celebrate: boolean, activityType: string)
    expect(award).toHaveBeenCalledTimes(1);
    expect(award.mock.calls[0]![0]).toBeGreaterThan(0);
    expect(award.mock.calls[0]![2]).toBe('grammar');

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    // Verify the setStats updater actually mutates gc and vs correctly.
    expect(setStats).toHaveBeenCalledWith(expect.any(Function));
    const setStatsUpdater = setStats.mock.calls[0]![0] as (
      prev: typeof value.stats,
    ) => typeof value.stats;
    const updatedStats = setStatsUpdater(value.stats);
    expect(updatedStats.gc).toBe(1);
    expect(updatedStats.vs).toContain('dative');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['dative']) }),
    );
  });

  for (const drill of FULL_CONTRACT_DRILLS) {
    const testFn = (drill as { skip?: boolean }).skip ? it.skip : it;
    testFn(`${drill.name} follows the contract`, () => assertContract(drill));
  }
});

/**
 * THE SKIPS ARE CHECKED, NOT TRUSTED (2026-09-23).
 *
 * Every `skip: true` above carries a `skipReason`, and a reason recorded beside
 * an exemption is the thing this repo has been burned by more than once: the
 * `idioms` coupling exemption named the wrong candidate and sat there guarding
 * nothing while a real drill existed. A skip is a claim — "the helper cannot
 * drive this to its completion contract" — and a claim nothing re-runs decays
 * silently: refactor a drill into `.ob` buttons and its test stays skipped
 * forever, green, testing nothing.
 *
 * So each skipped entry is RE-RUN here and required to still fail. This asserts
 * the claim itself rather than any particular cause, which matters because the
 * causes are not uniform: 24 of the 25 never call `award` at all, and ZnamGame
 * calls it and then fails at `markQuest` for a completely different reason (see
 * its corrected note above). A predicate like "award is never called" would have
 * looked right, passed 24 times, and been wrong about the one that mattered.
 *
 * When this fails, the drill has become driveable: delete its `skip` and let the
 * real contract test run.
 */
describe('the skips are still real', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  const skipped = FULL_CONTRACT_DRILLS.filter((d) => (d as { skip?: boolean }).skip);

  it('there are some, and every one states a reason', () => {
    // A floor, because `it.each` over an empty list registers no tests at all —
    // the shape that makes a staleness check silently stop checking.
    expect(skipped.length).toBeGreaterThan(20);
    for (const d of skipped) {
      expect((d as { skipReason?: string }).skipReason, `${d.name} has no skipReason`).toBeTruthy();
    }
  });

  // EXPLICIT TIMEOUT, SIZED ON A MEASUREMENT. These re-run the FULL gold contract,
  // which drives the screen until `completeDrill` gives up — inherently the slow
  // path, and `GenderDrillScreen` is a 10.9 s outlier standalone against ~1.5 s for
  // the next slowest. At the 30 s default it timed out under a fully parallel
  // `vitest run` (and only there — it passes every time the file runs alone), which
  // is a load factor of ~2.8x. 60 s is 5.5x the measured standalone cost.
  //
  // This is sizing a bound to what the work costs, not loosening a gate to go
  // green: nothing about the assertion changes, and a screen that becomes
  // driveable still fails it. If a future edit makes these materially slower,
  // re-measure rather than raising this again.
  const STALENESS_TIMEOUT_MS = 60_000;

  for (const drill of skipped) {
    it(
      `${drill.name} still cannot be driven`,
      async () => {
        await expect(
          assertContract(drill),
          `${drill.name} now satisfies the contract test — its skip is stale. ` +
            'Delete `skip: true` from its entry so the real test runs.',
        ).rejects.toThrow();
      },
      STALENESS_TIMEOUT_MS,
    );
  }
});

/** The gold contract, as one body, so the staleness check re-runs exactly it. */
async function assertContract(drill: (typeof FULL_CONTRACT_DRILLS)[number]): Promise<void> {
  const mod = await import(/* @vite-ignore */ drill.path);
  const ComponentToRender = mod.default as React.ComponentType<{
    goBack: () => void;
    award?: (...args: unknown[]) => void;
  }>;

  const { value, setStats, writeDelta, award } = makeCtx();
  const goBack = vi.fn();

  render(
    <StatsProvider value={value}>
      <ComponentToRender goBack={goBack} award={award} />
    </StatsProvider>,
  );

  await completeDrill(award);

  const expectedActivityType = (drill as { activityType?: string }).activityType ?? 'grammar';
  const expectedQuestArg = (drill as { questArg?: string }).questArg ?? 'grammar';

  expect(award).toHaveBeenCalledTimes(1);
  expect(award.mock.calls[0]![0]).toBeGreaterThan(0);
  expect(award.mock.calls[0]![2]).toBe(expectedActivityType);
  expect(markQuestMock).toHaveBeenCalledWith(expectedQuestArg);

  // Verify the setStats updater actually produces gc+1 and includes the vs-tag.
  expect(setStats).toHaveBeenCalledWith(expect.any(Function));
  const setStatsUpdater = setStats.mock.calls[0]![0] as (
    prev: StatsContextValue['stats'],
  ) => StatsContextValue['stats'];
  const updatedStats = setStatsUpdater(value.stats);
  expect(updatedStats.gc).toBe(1);
  expect(updatedStats.vs).toContain(drill.vsTag);

  expect(writeDelta).toHaveBeenCalledWith(
    expect.objectContaining({ gc: 1, vs: expect.arrayContaining([drill.vsTag]) }),
  );
}
