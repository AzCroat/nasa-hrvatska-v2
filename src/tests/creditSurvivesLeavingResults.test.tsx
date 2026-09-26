/**
 * creditSurvivesLeavingResults.test.tsx — finishing an exercise must credit it,
 * whichever way the learner leaves the results screen.
 *
 * THE DEFECT. Six drills call `completeExercise` from the onClick of the Done /
 * Finish button on their results view, award nothing per answer, AND render that
 * view through `H(title, subtitle, goBack)` — which draws a real Back BUTTON. So
 * the results screen has two exits and only one of them pays: a learner who answers
 * every question correctly and taps Back instead of Done gets no XP, no `gc`/`vs`,
 * no writeDelta and no session signal, having done all the work. Nothing in the
 * suite could see it, because every contract test clicks Done.
 *
 * THREE screens are DRIVEN here, out of the twenty-one. `TypingScreen` because it is the
 * sharpest case — `xp = tyS * 5` is paid entirely at the end, so leaving by the Back
 * button cost the learner everything. `Unjumble` because its results view PRINTS
 * "+N XP" it had not yet paid, so the promise and the silence were on screen
 * together; it is also the shape no content mock can reach, driven off the real
 * static bank. And `PronunciationContrast` because it is one of the NINE that
 * hand-roll the credit (`award` + `markQuest` + their own `vs` write) and never reach
 * `completeExercise` — a different code path, so a driven case on one of the twelve
 * says nothing about it. The other eighteen are held by `creditFollowsWork.test.ts`,
 * which derives the defect's source shape and flags all twenty-one pre-fix files while
 * leaving `BojeGame` and `ZnamGame` — which credit from the final ADVANCE button, and
 * are correct — alone.
 *
 * The fix credits on REACHING the results view (all items answered) rather than on
 * acknowledging it, so the two exits become equivalent. Both are asserted below:
 * leaving by Back must credit exactly as Done does, and Done must still not credit
 * twice.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import type { Stats, StatsContextValue } from '../types';

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

/** Five pairs, Croatian first — `tyW[0]` is the answer, `tyW[1]` is the prompt. */
const WORDS: [string, string][] = [
  ['kruh', 'bread'],
  ['voda', 'water'],
  ['mlijeko', 'milk'],
  ['sir', 'cheese'],
  ['jabuka', 'apple'],
];
const ANSWER_FOR = new Map(WORDS.map(([hr, en]) => [en, hr]));

vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: { V: { basics: WORDS } }, loading: false, error: null }),
}));

function makeCtx() {
  const setStats = vi.fn();
  const writeDelta = vi.fn();
  const dispatch = vi.fn();
  const award = vi.fn();
  const stats = {
    xp: 0,
    lc: 0,
    gc: 0,
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
  } as unknown as Stats;
  const value = { stats, setStats, writeDelta, dispatch, award, level: 1 } as StatsContextValue;
  return { value, setStats, writeDelta, award };
}

/** Answer every question correctly and stop on the results view. */
function playThrough() {
  for (let i = 0; i < 40; i++) {
    const done = screen.queryByText(/Done/i);
    if (done) return;
    const next = screen.queryByText(/^(Next|See Results)/i);
    if (next) {
      fireEvent.click(next);
      continue;
    }
    // The prompt is the ENGLISH gloss; the answer is its Croatian pair.
    const prompt = [...ANSWER_FOR.keys()].find((en) => screen.queryByText(en));
    if (!prompt) break;
    const input = screen.getByPlaceholderText(/Type Croatian/i);
    fireEvent.change(input, { target: { value: ANSWER_FOR.get(prompt)! } });
    fireEvent.click(screen.getByText('Check Answer'));
  }
}

describe('finishing a drill credits it however the learner leaves', () => {
  beforeEach(() => markQuestMock.mockClear());

  it('the premise: the results view really does offer a second exit', async () => {
    // Without this the two assertions below could pass for the wrong reason — a
    // results screen with only a Done button has no defect to fix.
    const { default: TypingScreen } = await import('../components/practice/TypingScreen');
    const { value } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <TypingScreen goBack={goBack} award={value.award} />
      </StatsProvider>,
    );
    playThrough();
    expect(screen.queryByText(/Done/i), 'never reached the results view').toBeTruthy();
    expect(screen.getByText(/← Back|Back/i), 'results view has no Back affordance').toBeTruthy();
  });

  it('leaving by Back after answering everything still credits the work', async () => {
    const { default: TypingScreen } = await import('../components/practice/TypingScreen');
    const { value, setStats, writeDelta, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <TypingScreen goBack={goBack} award={value.award} />
      </StatsProvider>,
    );
    playThrough();

    fireEvent.click(screen.getByText(/← Back|Back/i));

    expect(award, 'a finished drill paid nothing when the learner left by Back').toHaveBeenCalled();
    expect(setStats).toHaveBeenCalled();
    expect(writeDelta).toHaveBeenCalled();
    expect(goBack).toHaveBeenCalled();
  });

  it('pressing Done credits exactly once, not twice', async () => {
    const { default: TypingScreen } = await import('../components/practice/TypingScreen');
    const { value, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <TypingScreen goBack={goBack} award={value.award} />
      </StatsProvider>,
    );
    playThrough();

    fireEvent.click(screen.getByText(/Done/i));
    expect(award).toHaveBeenCalledTimes(1);
  });
});

describe('Unjumble: the "+N XP" on the results view is honoured by either exit', () => {
  /**
   * Driven off the REAL `UNJUMBLE` bank rather than a mock: the screen takes its
   * round from `sh(UNJUMBLE).slice(0, 10)` inside a `useState` initializer, so there
   * is nothing to inject. Each question is solved by tapping the word tiles in the
   * order the bank's own `correct` string gives, which is what a learner does.
   */
  async function play() {
    const { UNJUMBLE } = (await import('../data')) as unknown as {
      UNJUMBLE: { en: string; correct: string; words: string[] }[];
    };
    for (let guard = 0; guard < 60; guard++) {
      if (screen.queryByText(/Continue/i)) return;
      // 'Finish!' is this screen's LAST-question advance, not an exit — the exit on
      // the results view is 'Continue →', checked above.
      const next = screen.queryByText(/^(Next →|Finish!)$/);
      if (next) {
        fireEvent.click(next);
        continue;
      }
      // The prompt is the English gloss, rendered in quotes.
      const item = UNJUMBLE.find((u) => screen.queryByText(`"${u.en}"`));
      if (!item) break;
      for (const w of item.correct.replace(/[?.!,;:]/g, '').split(/\s+/)) {
        const tile = screen.getAllByRole('button').find((b) => (b.textContent || '').trim() === w);
        if (tile) fireEvent.click(tile);
      }
      fireEvent.click(screen.getByText(/^Check/));
    }
  }

  it('leaving by Back pays the XP the results view promised', async () => {
    const { default: Unjumble } = await import('../components/practice/Unjumble');
    const { value, setStats, writeDelta, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <Unjumble goBack={goBack} award={value.award} />
      </StatsProvider>,
    );
    await play();

    // The promise is on screen...
    expect(screen.getByText(/\+\d+ XP/), 'never reached the results view').toBeTruthy();
    // ...and the learner leaves by the OTHER exit.
    fireEvent.click(screen.getByText(/← Back|Back/i));

    expect(award, 'the results view promised XP and leaving by Back paid none').toHaveBeenCalled();
    expect(setStats).toHaveBeenCalled();
    expect(writeDelta).toHaveBeenCalled();
    expect(goBack).toHaveBeenCalled();
  });

  it('Continue → credits exactly once, not twice', async () => {
    const { default: Unjumble } = await import('../components/practice/Unjumble');
    const { value, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <Unjumble goBack={goBack} award={value.award} />
      </StatsProvider>,
    );
    await play();

    fireEvent.click(screen.getByText(/Continue/i));
    expect(award).toHaveBeenCalledTimes(1);
  });
});

describe('PronunciationContrast: the hand-rolled credit path', () => {
  /**
   * One of the nine screens that never touch `completeExercise`: it awards, marks the
   * quest and writes its own `vs`/`gc`. Static bank, plain multiple choice, so it is
   * the cheapest of the nine to drive — and driving ONE of them is what a source pin
   * cannot do: an effect can be present and still never fire (a wrong dependency, a
   * condition that is never true), and only rendering shows that.
   */
  async function play() {
    const { DATA } = (await import('../components/practice/PronunciationContrast')) as unknown as {
      DATA: { q: string; answer: string; opts: string[] }[];
    };
    for (let guard = 0; guard < 80; guard++) {
      if (screen.queryByText(/Done/i)) return;
      const next = screen.queryByText(/^Next/);
      if (next) {
        fireEvent.click(next);
        continue;
      }
      const item = DATA.find((d) => screen.queryByText(d.q));
      if (!item) break;
      const opt = screen
        .getAllByRole('button')
        .find((b) => (b.textContent || '').trim() === item.answer);
      if (!opt) break;
      fireEvent.click(opt);
    }
  }

  it('leaving by Back after answering everything still credits the work', async () => {
    const { default: PronunciationContrast } =
      await import('../components/practice/PronunciationContrast');
    const { value, setStats, writeDelta, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <PronunciationContrast goBack={goBack} award={value.award!} />
      </StatsProvider>,
    );
    await play();

    expect(screen.queryByText(/Done/i), 'never reached the results view').toBeTruthy();
    fireEvent.click(screen.getByText(/← Back|Back/i));

    expect(award, 'a finished drill paid nothing when the learner left by Back').toHaveBeenCalled();
    expect(markQuestMock, 'the quest was not marked').toHaveBeenCalledWith('grammar');
    expect(setStats).toHaveBeenCalled();
    expect(writeDelta).toHaveBeenCalled();
  });

  it('pressing Done credits exactly once, not twice', async () => {
    const { default: PronunciationContrast } =
      await import('../components/practice/PronunciationContrast');
    const { value, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <PronunciationContrast goBack={goBack} award={value.award!} />
      </StatsProvider>,
    );
    await play();

    fireEvent.click(screen.getByText(/Done/i));
    expect(award).toHaveBeenCalledTimes(1);
    expect(goBack).toHaveBeenCalled();
  });
});

/**
 * DeclensionScreen: the wrapper's own instance, and a retry that never retried.
 *
 * Driven because this screen is the `completeLesson` half of the class
 * (sweep 143) — a DIFFERENT authority from the twelve above, reached through a
 * wrapper module, which is exactly why `creditFollowsWork`'s writer set could not
 * see it. Its results view has THREE exits — "📖 Review" (back to the case table,
 * inside the screen), H(..., goBack)'s Back button, and the ever-present TabBar —
 * while only "✓ Done" paid, above a line PRINTING "+N XP".
 *
 * Answers are derived from the real `DECL` data rather than guessed: the question
 * renders "{caseNum}. {CASE} CASE" and the noun, so the correct form is
 * `noun.cases[caseNum - 1]`. A wrong answer would be useless here — `completeLesson`
 * gates at 75%, so a failing run records nothing and every assertion below would
 * pass for the wrong reason.
 */
describe('DeclensionScreen: the completeLesson instance', () => {
  type Noun = { nom: string; en: string; g: string; cases: string[] };

  async function playCorrectly() {
    const { DECL } = (await import('../data')) as unknown as {
      DECL: { nouns: Noun[]; caseNames: string[] };
    };
    fireEvent.click(screen.getByText(/Test the Cases/));
    for (let guard = 0; guard < 40; guard++) {
      if (screen.queryByText(/correct$/)) return; // results view: "N/14 correct"
      const next = screen.queryByText(/^(Next →|See Results)$/);
      if (next) {
        fireEvent.click(next);
        continue;
      }
      // The prompt line names the ENGLISH gloss, which is unambiguous — the
      // nominative form also appears among the OPTIONS, so matching on it picks
      // the wrong noun (or throws on a duplicate).
      const head = screen.getByText(/^\d+\. [A-ZČĆĐŠŽ]+ CASE$/).textContent || '';
      const caseNum = Number(head.split('.')[0]);
      const gloss = (document.body.textContent || '').match(/\((.+?)\) — pick the correct/);
      expect(gloss, `no prompt line found beside "${head}"`).toBeTruthy();
      const noun = DECL.nouns.find((n) => n.en === gloss![1]);
      expect(noun, `no DECL noun glossed "${gloss![1]}"`).toBeTruthy();
      const correct = noun!.cases[caseNum - 1]!;
      const opt = screen
        .getAllByRole('button')
        .find((b) => (b.textContent || '').trim() === correct);
      expect(opt, `no option offered the correct form "${correct}"`).toBeTruthy();
      fireEvent.click(opt!);
    }
  }

  it('answering everything and tapping 📖 Review still credits the lesson', async () => {
    const { default: DeclensionScreen } = await import('../components/learn/DeclensionScreen');
    const { value, setStats, writeDelta, award } = makeCtx();
    const goBack = vi.fn();
    render(
      <StatsProvider value={value}>
        <DeclensionScreen goBack={goBack} award={value.award} />
      </StatsProvider>,
    );
    await playCorrectly();

    // The promise is on screen, and so is a second exit that used to swallow it.
    expect(screen.getByText(/\+\d+ XP/), 'never reached the results view').toBeTruthy();
    const review = screen.getByText(/📖 Review/);
    fireEvent.click(review);

    expect(award, 'a passed lesson paid nothing when the learner tapped Review').toHaveBeenCalled();
    expect(setStats).toHaveBeenCalled();
    expect(writeDelta).toHaveBeenCalled();
    // Review is an in-screen exit, so the screen itself must NOT have navigated away.
    expect(goBack).not.toHaveBeenCalled();
  });

  it('↻ Try again actually starts a new attempt', async () => {
    // The old handler set only `mode`, and the `quizDone` branch is tested BEFORE quiz
    // mode — so "Review & retry" walked the learner to the table and back to the same
    // finished results, for ever. Reached here by ANSWERING WRONGLY on purpose: the
    // retry button only renders below the pass gate.
    const { DECL } = (await import('../data')) as unknown as {
      DECL: { nouns: Noun[]; caseNames: string[] };
    };
    const { default: DeclensionScreen } = await import('../components/learn/DeclensionScreen');
    const { value } = makeCtx();
    render(
      <StatsProvider value={value}>
        <DeclensionScreen goBack={vi.fn()} award={value.award} />
      </StatsProvider>,
    );
    fireEvent.click(screen.getByText(/Test the Cases/));
    for (let guard = 0; guard < 40; guard++) {
      if (screen.queryByText(/correct$/)) break;
      const next = screen.queryByText(/^(Next →|See Results)$/);
      if (next) {
        fireEvent.click(next);
        continue;
      }
      const head = screen.getByText(/^\d+\. [A-ZČĆĐŠŽ]+ CASE$/).textContent || '';
      const caseNum = Number(head.split('.')[0]);
      const gloss = (document.body.textContent || '').match(/\((.+?)\) — pick the correct/)!;
      const noun = DECL.nouns.find((n) => n.en === gloss[1])!;
      const correct = noun.cases[caseNum - 1]!;
      // Every option is a case form of SOME noun in the table, so that set identifies
      // the option buttons without knowing which four were shuffled in. Picking "a
      // button that is not the answer" instead would hit "Back to reference".
      const forms = new Set(DECL.nouns.flatMap((n) => n.cases));
      const wrong = screen.getAllByRole('button').find((b) => {
        const t = (b.textContent || '').trim();
        return t !== correct && forms.has(t);
      });
      expect(wrong, `no wrong option offered beside "${correct}"`).toBeTruthy();
      fireEvent.click(wrong!);
    }
    const retry = screen.queryByText(/↻ Try again/);
    expect(retry, 'a failing run showed no retry affordance').toBeTruthy();
    fireEvent.click(retry!);

    // A fresh attempt means question 1 of the quiz, not the same finished results.
    expect(screen.queryByText(/correct$/), 'the retry returned to the old results').toBeNull();
    expect(screen.getByText(/^\d+\. [A-ZČĆĐŠŽ]+ CASE$/)).toBeTruthy();
  });
});
