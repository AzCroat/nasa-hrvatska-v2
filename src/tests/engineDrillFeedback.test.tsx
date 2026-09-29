/**
 * engineDrillFeedback.test.tsx — what a learner is TOLD, in every drill on the shared
 * engine (2026-09-27). Derived from the glob: a drill authored next month is a subject
 * without an edit.
 *
 * This replaces twelve per-drill files (animate-acc, clitic, dative, fleeting-a,
 * imperative, instrumental, negation-gen, numbers-cases, passive, prep, and the grouped
 * b2/c1 files). Each asserted the same dozen things about ONE hand-written screen that
 * no longer exists — `.ob` buttons, "See results", a 10- or 20-question round. What
 * those files guarded is kept here for every engine drill at once:
 *
 *   - the verdict is said in WORDS, not only in a border colour (a colour-blind learner
 *     could not read the engine's verdict before this change — WCAG 1.4.1);
 *   - the tip is shown after answering, right or wrong;
 *   - a wrong answer opens the "why" panel, a right one does not;
 *   - the options lock once answered;
 *   - a run is 12 questions (owner decision, 2026-09-27);
 *   - a drill that teaches before it tests shows its concept card first.
 *
 * CREDIT is not re-asserted here: `handWrittenDrills.contract.test.tsx` drives every
 * `*Drill.tsx` — these wrappers included — through a perfect run, a failed run and a
 * retry, and asserts the credit is recorded before any exit is pressed.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { DRILL_RUN_LENGTH } from '../lib/drillRun';
import AppContext from '../context/AppContext';
import { PREPDRILL } from '../data/exercises.js';

// Identity shuffle: `rnd` is the one source of randomness the engine draws with.
vi.mock('../lib/random.js', () => ({ rnd: () => 0.99 }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
const aiPost = vi.hoisted(() => vi.fn());
vi.mock('../lib/aiPost', () => ({ _aiPost: aiPost }));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: {}, setStats: vi.fn(), writeDelta: vi.fn() }),
  StatsProvider: ({ children }: { children: React.ReactNode }) => children,
}));

const MODULES = import.meta.glob('../components/practice/*Drill.tsx');
const SOURCES = import.meta.glob('../components/practice/*Drill.tsx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const SUBJECTS = Object.keys(MODULES)
  .filter((p) => SOURCES[p]!.includes('<ModeDrill'))
  .map((p) => ({ name: p.replace(/^.*\//, '').replace(/\.tsx$/, ''), path: p, src: SOURCES[p]! }))
  .sort((a, b) => a.name.localeCompare(b.name));

async function mount(path: string) {
  const mod = (await MODULES[path]!()) as {
    default: React.ComponentType<{ goBack: () => void; award: () => void }>;
  };
  const Drill = mod.default;
  render(
    <AppContext.Provider value={{ setScr: vi.fn() } as never}>
      <Drill goBack={vi.fn()} award={vi.fn()} />
    </AppContext.Provider>,
  );
  // A drill that teaches first shows its concept card; tap through like a returning learner.
  const start = document.querySelector('[data-testid$="intro-start"]') as HTMLElement | null;
  if (start) fireEvent.click(start);
}

beforeEach(() => {
  cleanup();
  aiPost.mockReset();
  aiPost.mockResolvedValue({ ok: false, status: 503, json: async () => ({}) });
});

describe('every engine drill says what happened, and why', () => {
  it('the glob reaches the whole engine-backed programme', () => {
    // 109 practice-programme wrappers live under src/data/drills behind their own
    // screen files elsewhere; these are the ones in this directory. Measured 2026-09-27.
    expect(SUBJECTS.length).toBeGreaterThanOrEqual(70);
    for (const n of ['AccusativeDrill', 'PrepDrill', 'NegationGenDrill', 'RegisterDrill'])
      expect(SUBJECTS.map((s) => s.name)).toContain(n);
  });

  it.each(SUBJECTS)(
    '$name: a 12-question run, a spoken verdict, the tip, and locked options',
    async ({ path }) => {
      await mount(path);
      expect(screen.getByText(`1 / ${DRILL_RUN_LENGTH}`)).toBeTruthy();

      const opts = screen.getAllByTestId('drill-option');
      expect(opts.length).toBeGreaterThanOrEqual(2);
      // The last option, so both verdicts get exercised across the corpus.
      fireEvent.click(opts[opts.length - 1]!);

      const verdict = screen.getByTestId('drill-verdict');
      const clicked = screen.getAllByTestId('drill-option')[opts.length - 1]!;
      const right = clicked.getAttribute('data-verdict') === 'correct';
      expect(verdict.textContent).toBe(right ? '✅ Correct!' : '❌ Incorrect.');
      // The tip follows the verdict in the same panel — the rule, not only the outcome.
      expect(verdict.parentElement!.textContent!.length).toBeGreaterThan(
        verdict.textContent!.length + 3,
      );
      expect(Boolean(screen.queryByTestId('wrong-answer-help'))).toBe(!right);

      // Locked: a second click on the option with the OPPOSITE verdict changes nothing.
      // (Any other option can share the first one's verdict, which is how the first
      // version of this assertion survived the lock being deleted.)
      const after = screen.getAllByTestId('drill-option');
      const other = right
        ? after.find((o) => o !== after[opts.length - 1])!
        : after.find((o) => o.getAttribute('data-verdict') === 'correct')!;
      expect(other).toBeTruthy();
      fireEvent.click(other);
      expect(screen.getByTestId('drill-verdict').textContent).toBe(
        right ? '✅ Correct!' : '❌ Incorrect.',
      );
    },
  );
});

describe('what the converted drills carried with them', () => {
  it('the negation drill still shows the sentence being negated', async () => {
    await mount('../components/practice/NegationGenDrill.tsx');
    expect(screen.getByTestId('drill-lead').textContent).toContain('Imam brata.');
  });

  it('the case drills still teach the concept before the first question', async () => {
    const { default: Drill } = await import('../components/practice/AccusativeDrill');
    render(
      <AppContext.Provider value={{ setScr: vi.fn() } as never}>
        <Drill goBack={vi.fn()} award={vi.fn()} />
      </AppContext.Provider>,
    );
    expect(screen.getByTestId('case-concept-intro')).toBeTruthy();
    expect(screen.queryByTestId('drill-option')).toBeNull();
  });

  it('a case drill asks for the explanation written for learners with no grammar background', async () => {
    await mount('../components/practice/AccusativeDrill.tsx');
    // Find a wrong option: answer, and if it was right, move on and try again.
    for (let i = 0; i < DRILL_RUN_LENGTH && !screen.queryByTestId('wrong-answer-help'); i++) {
      const o = screen.getAllByTestId('drill-option');
      fireEvent.click(o[o.length - 1]!);
      if (!screen.queryByTestId('wrong-answer-help'))
        fireEvent.click(screen.getByTestId('drill-next'));
    }
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    expect(aiPost).toHaveBeenCalledTimes(1);
    expect(aiPost.mock.calls[0]![1]).toMatchObject({ type: 'case_drill' });
  });

  it('every preposition item explains itself, starting from its own answer', () => {
    // The bank had no tips at all until 2026-09-27, so a wrong answer said nothing.
    expect(PREPDRILL.length).toBeGreaterThanOrEqual(40);
    for (const item of PREPDRILL as { answer: string; tip?: string }[]) {
      expect(item.tip, item.answer).toBeTruthy();
      expect(item.tip!.toLowerCase().startsWith(item.answer.toLowerCase())).toBe(true);
    }
  });
});
