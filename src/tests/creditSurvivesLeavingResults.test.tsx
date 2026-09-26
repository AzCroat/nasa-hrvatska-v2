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
