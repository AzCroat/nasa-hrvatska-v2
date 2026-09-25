/**
 * SWEEP 119 — `void total; // suppress unused warning` WAS THE GATE THAT NEVER RAN.
 *
 * `MicroLessonScreen`'s results effect computed the quiz length, discarded it, and
 * then paid XP, marked the grammar quest and incremented `gc` **on any score** —
 * zero of three correct included. `gc` feeds the CEFR score (`xp + lc*15 + gc*25`)
 * and the Learn Path stage, so a learner who got every question in their own
 * weak-word review wrong still advanced their measured level. The sibling screen
 * `ImpersonalScreen`, whose quiz has the identical shape, routes through
 * `completeLesson` and is gated at the shared 75%.
 *
 * The results card was the same claim one layer up: "XP Earned +10" over a 0/3
 * answer sheet, and "Odlično!" at 2 of 3 — a failing score under that rule.
 *
 * THE SESSION SIGNAL IS WHY THIS IS NOT A ONE-LINE CHANGE. The pool entry for this
 * screen says "awards on results", i.e. `award()` was what wrote
 * `nh_session_completed` — so gating the award alone would strand a
 * session-launched micro-lesson at N-1/N on every failed attempt. Credit is gated;
 * the flow is not.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import MicroLessonScreen from '../components/learn/MicroLessonScreen';

const setStats = vi.fn();
const writeDelta = vi.fn();
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0, vs: [] }, setStats, writeDelta }),
}));
const markQuest = vi.fn();
vi.mock('../lib/quests.js', () => ({ markQuest: (k: string) => markQuest(k) }));
vi.mock('../data', () => ({
  H: (t: string, s: string) => (
    <div>
      <h2>{t}</h2>
      <p>{s}</p>
    </div>
  ),
  speak: vi.fn(),
  getMistakes: () => [
    { hr: 'kruh', en: 'bread', count: 4 },
    { hr: 'mlijeko', en: 'milk', count: 3 },
  ],
}));

const LESSON = {
  focus: 'accusative after volim',
  title: 'What you love takes the accusative',
  intro: 'Two sentences of intro.',
  examples: [{ hr: 'Volim kruh.', en: 'I love bread.', highlight: 'kruh' }],
  quiz: [
    { question: 'Volim ___.', options: ['kruh', 'kruha', 'kruhu', 'kruhom'], answer: 0 },
    { question: 'Pijem ___.', options: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'], answer: 0 },
    { question: 'Imam ___.', options: ['kruh', 'kruha', 'kruhu', 'kruhom'], answer: 0 },
  ],
  tip: 'The thing you want changes its ending.',
};

vi.mock('../lib/apiFetch.js', () => ({
  apiFetch: vi.fn(async () => ({ ok: true, json: async () => LESSON })),
}));

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  setStats.mockClear();
  writeDelta.mockClear();
  markQuest.mockClear();
});

/** Play the whole quiz, choosing the right answer for the first `rightCount` items. */
async function playQuiz(rightCount: number, award: ReturnType<typeof vi.fn>) {
  render(<MicroLessonScreen award={award} goBack={() => {}} />);
  await waitFor(() => expect(screen.getByText('Start Quiz →')).toBeTruthy());
  await act(async () => {
    screen.getByText('Start Quiz →').click();
  });
  for (let i = 0; i < LESSON.quiz.length; i += 1) {
    const q = LESSON.quiz[i]!;
    // The correct option is index 0 in this fixture; pick a wrong one once the
    // budget of right answers is spent.
    const label = i < rightCount ? q.options[0]! : q.options[1]!;
    await act(async () => {
      screen.getByText(label).click();
    });
    await act(async () => {
      screen.getByText(i === LESSON.quiz.length - 1 ? 'See Results' : 'Next →').click();
    });
  }
}

describe('a failed micro-lesson credits nothing', () => {
  it('0 of 3 writes no XP, no gc and no grammar quest', async () => {
    const award = vi.fn();
    await playQuiz(0, award);
    expect(screen.getByText('Još malo!')).toBeTruthy();
    expect(award).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(markQuest).not.toHaveBeenCalled();
  });

  it('2 of 3 is BELOW the shared 75% rule and credits nothing', async () => {
    const award = vi.fn();
    await playQuiz(2, award);
    // The floor that keeps the not-called assertions above from passing on a quiz
    // that never ran: the screen must have reached its results view and scored it.
    expect(screen.getByTestId('micro-lesson-xp').textContent).toBe('2/3');
    expect(award).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(markQuest).not.toHaveBeenCalled();
  });

  it('3 of 3 credits XP, gc and the grammar quest', async () => {
    const award = vi.fn();
    await playQuiz(3, award);
    expect(screen.getByTestId('micro-lesson-xp').textContent).toBe('+25');
    expect(award).toHaveBeenCalledWith(25);
    expect(setStats).toHaveBeenCalled();
    expect(writeDelta).toHaveBeenCalledWith({ gc: 1 });
    expect(markQuest).toHaveBeenCalledWith('grammar');
  });

  it('the results card never claims XP it did not pay', async () => {
    await playQuiz(1, vi.fn());
    expect(screen.getByText('Score')).toBeTruthy();
    expect(screen.queryByText('XP Earned')).toBeNull();
    expect(screen.getByText(/did not count/)).toBeTruthy();
    // Math.ceil(3 * 0.75) === 3: on a three-item quiz the shared rule admits no slips,
    // and the card now SAYS so instead of leaving the learner to infer it.
    expect(screen.getByText('3 of 3 needed to log this lesson.')).toBeTruthy();
  });

  it('a FAILED attempt still completes the session activity it was launched as', async () => {
    // Today's Session is a practice FLOW. The award used to be what wrote
    // nh_session_completed, so gating it without this would strand the day at N-1/N.
    sessionStorage.setItem('nh_session_started', 'micro_lesson');
    await playQuiz(0, vi.fn());
    expect(sessionStorage.getItem('nh_session_completed')).toBe('micro_lesson');
  });
});
