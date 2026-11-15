// lessonTextSlide.test.tsx — the listen/read text step inside an animated lesson,
// driven through the REAL AnimatedLesson: the text is readable without any audio, the
// English is behind a toggle, a line plays on tap, a failed "Listen first" names its
// cause and blocks nothing, and Next is held until the questions are settled (and
// never held by a text with no questions).
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { withPractice, LESSON_PRACTICE } from '../../functions/api/content/_data/lessonPractice.js';
import { TEXT_FIXTURE } from '../../e2e/fixtures/exercise-kinds-fixture.js';

const speakMock = vi.fn();
vi.mock('../lib/audio', () => ({
  speak: (...a: unknown[]) => speakMock(...a),
  speakSlow: vi.fn(),
  stopAudio: vi.fn(),
  getLastTtsFailure: () => ({ cause: 'network' }),
  describeTtsFailure: () => 'The connection dropped.',
}));
vi.mock('../lib/audio.js', () => ({
  speak: (...a: unknown[]) => speakMock(...a),
  speakSlow: vi.fn(),
  stopAudio: vi.fn(),
  getLastTtsFailure: () => ({ cause: 'network' }),
  describeTtsFailure: () => 'The connection dropped.',
}));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats: vi.fn(), writeDelta: vi.fn(), stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/teachPractice', () => ({ recordLessonTaught: vi.fn() }));
vi.mock('../lib/curriculumProgress', () => ({
  markLessonComplete: vi.fn(),
  readCurriculumSpine: () => null,
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));

import AnimatedLesson from '../components/learn/AnimatedLesson';

const checkItem = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});

function lessonWith(text: unknown) {
  const base = {
    id: 'text-test-lesson',
    title: 'Text test',
    level: 'A1',
    bg: '#f0fdf4',
    color: '#16a34a',
    icon: '📚',
    slides: [
      { type: 'intro', title: 'Intro', body: 'b', icon: '📚' },
      { type: 'rule', title: 'Rule', body: 'r', highlight: 'r' },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [0, 1, 2, 3, 0, 1].map((c, i) => checkItem(i + 1, c)),
      },
      { type: 'summary', title: 'Summary', points: ['p1'] },
    ],
  };
  (LESSON_PRACTICE as Record<string, unknown>)['text-test-lesson'] = { text };
  return withPractice([base])[0]!;
}

const next = () => fireEvent.click(screen.getByTestId('lesson-nav-next'));
const nextDisabled = () => (screen.getByTestId('lesson-nav-next') as HTMLButtonElement).disabled;
const id = (s: string) => screen.getByTestId(s);
/** Listen stage -> the text. */
const openText = () => fireEvent.click(id('lesson-text-show'));
/** The text -> its questions. */
const openQuestions = () => {
  openText();
  fireEvent.click(id('lesson-text-questions'));
};

beforeEach(() => {
  speakMock.mockReset();
  speakMock.mockResolvedValue('played');
});

describe('the text slide', () => {
  it('sits right after the intro, opens on LISTEN with the text hidden, and the text is one tap away with no audio and no English', () => {
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    expect(id('lesson-text').getAttribute('data-stage')).toBe('listen');
    // By ear first: nothing of the text is on screen until the learner asks for it.
    expect(screen.queryByTestId('lesson-text-line-0')).toBeNull();
    expect((id('lesson-text-show') as HTMLButtonElement).disabled).toBe(false);
    openText();
    expect(id('lesson-text').getAttribute('data-stage')).toBe('read');
    expect(id('lesson-text-line-0').textContent).toMatch(/Bog! Ja sam Ana\./);
    expect(speakMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId('lesson-text-en-0')).toBeNull();
  });

  it('Show English reveals every line and Hide English hides them again', () => {
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    openText();
    fireEvent.click(id('lesson-text-english'));
    expect(id('lesson-text-en-0').textContent).toBe('Hi! I am Ana.');
    expect(id('lesson-text-en-2').textContent).toBe('Nice to meet you.');
    fireEvent.click(id('lesson-text-english'));
    expect(screen.queryByTestId('lesson-text-en-0')).toBeNull();
  });

  it('tapping a line plays exactly that line', async () => {
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    openText();
    fireEvent.click(id('lesson-text-line-1'));
    await waitFor(() => expect(speakMock).toHaveBeenCalledTimes(1));
    expect(speakMock).toHaveBeenCalledWith('Bog, Ana! Ja sam Marko.');
  });

  it('Listen first plays every line in order', async () => {
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    fireEvent.click(id('lesson-text-listen'));
    await waitFor(() => expect(speakMock).toHaveBeenCalledTimes(3));
    expect(speakMock.mock.calls.map((c) => c[0])).toEqual(
      TEXT_FIXTURE.lines.map((l: { hr: string }) => l.hr),
    );
  });

  it('a failed Listen first names the cause and blocks nothing', async () => {
    speakMock.mockResolvedValue('failed');
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    fireEvent.click(id('lesson-text-listen'));
    await waitFor(() => expect(id('lesson-text-audio-failed')).toBeTruthy());
    expect(id('lesson-text-audio-failed').textContent).toMatch(/connection dropped/);
    expect(speakMock).toHaveBeenCalledTimes(1); // stopped at the first failure
    // A dead recording opens the text itself, and the questions still work.
    expect(id('lesson-text').getAttribute('data-stage')).toBe('read');
    expect(id('lesson-text-line-0')).toBeTruthy();
    fireEvent.click(id('lesson-text-questions'));
    fireEvent.click(id('ex-tf-false'));
    expect(id('ex-explanation')).toBeTruthy();
  });

  it('holds Next until every question is settled', () => {
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    expect(nextDisabled()).toBe(true);
    openQuestions();
    // The question is on its own screen; the whole text is one tap away, never clipped.
    expect(screen.queryByTestId('lesson-text-line-0')).toBeNull();
    fireEvent.click(id('lesson-text-lookback'));
    expect(screen.getAllByTestId(/^lesson-text-line-/)).toHaveLength(TEXT_FIXTURE.lines.length);
    fireEvent.click(id('ex-tf-false')); // right
    expect(nextDisabled()).toBe(true);
    fireEvent.click(id('ex-next-item'));
    fireEvent.click(screen.getAllByTestId('practice-option')[0]!); // right
    expect(nextDisabled()).toBe(false);
  });

  it('a settled text stays open when the learner comes back to it', () => {
    render(<AnimatedLesson lesson={lessonWith(TEXT_FIXTURE)} goBack={vi.fn()} award={vi.fn()} />);
    next();
    openQuestions();
    fireEvent.click(id('ex-tf-false'));
    fireEvent.click(id('ex-next-item'));
    fireEvent.click(screen.getAllByTestId('practice-option')[0]!);
    next();
    fireEvent.click(screen.getByText('← Prev'));
    expect(nextDisabled()).toBe(false);
  });

  it('a text with no questions never holds Next', () => {
    render(
      <AnimatedLesson
        lesson={lessonWith({ ...TEXT_FIXTURE, questions: [] })}
        goBack={vi.fn()}
        award={vi.fn()}
      />,
    );
    next();
    expect(id('lesson-text')).toBeTruthy();
    expect(nextDisabled()).toBe(false);
  });
});
