// Picture slides (visual-learning pilot, PR 1, 2026-10-29): the owner's case chart
// ("Padezi Graphs - Singular") as a passive lesson slide. It must sit where the
// data says, carry only forms the declension engine produces, mark the ending in
// words/underline as well as colour, degrade on an unknown kind, and never gate a
// lesson.
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import { readFileSync } from 'node:fs';

const setStats = vi.fn();
const writeDelta = vi.fn();
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta, stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/teachPractice', () => ({ recordLessonTaught: vi.fn() }));
vi.mock('../lib/curriculumProgress', () => ({
  markLessonComplete: vi.fn(),
  readCompletedLessons: () => new Set<string>(),
  readCurriculumSpine: () => [],
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));

import AnimatedLesson from '../components/learn/AnimatedLesson';
import LessonVisualSlide from '../components/learn/LessonVisualSlide';
import { endingOf } from '../components/learn/visuals/CaseChartVisual';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { LESSON_VISUALS, withVisuals } from '../../functions/api/content/_data/lessonVisuals.js';
import { SINGULAR_ROWS, GENDERS } from '../../functions/api/content/_data/caseCharts.js';
import { decline } from '../lib/croatianMorphology';

type Slide = { type: string; title?: string; [k: string]: unknown };
const lessonOf = (id: string) =>
  (LESSONS as Array<{ id: string; slides: Slide[] }>).find((l) => l.id === id)!;
const visualOf = (id: string) => lessonOf(id).slides.find((s) => s.type === 'visual')!;
const LESSON = { color: '#16a34a', bg: '#f0fdf4' };

describe('placement', () => {
  it('cases: the chart follows the overview table; locative-intro: after the feminine rule', () => {
    for (const [id, after] of [
      ['cases', 'The 7 Cases — Overview'],
      ['locative-intro', 'Feminine Takes -i'],
    ] as const) {
      const types = lessonOf(id).slides.map((s) => `${s.type}:${s.title ?? ''}`);
      const at = types.findIndex((t) => t.startsWith('visual:'));
      expect(at, id).toBeGreaterThan(0);
      expect(types[at - 1]).toContain(after);
      expect(at).toBeLessThan(types.findIndex((t) => t.startsWith('worked:')));
    }
  });
  it('the check is still immediately before the summary in both', () => {
    for (const id of ['cases', 'locative-intro']) {
      const t = lessonOf(id).slides.map((s) => s.type);
      expect(t[t.length - 2]).toBe('check');
      expect(t[t.length - 1]).toBe('summary');
    }
  });
  it('every authored anchor exists (a missing title is a failure, never a silent skip)', () => {
    for (const [id, extras] of Object.entries(LESSON_VISUALS) as Array<
      [string, Array<{ after: string }>]
    >) {
      const titles = lessonOf(id)
        .slides.filter((s) => s.type !== 'visual')
        .map((s) => s.title);
      for (const e of extras) expect(titles, `${id} → ${e.after}`).toContain(e.after);
    }
  });
  it('the pilot is exactly these two lessons; unlisted lessons are untouched', () => {
    const withPictures = (LESSONS as Array<{ id: string; slides: Slide[] }>)
      .filter((l) => l.slides.some((s) => s.type === 'visual'))
      .map((l) => l.id)
      .sort();
    expect(withPictures).toEqual(['cases', 'locative-intro']);
    const plain = { id: 'x', slides: [{ type: 'rule', title: 'r' }] };
    expect(withVisuals([plain])[0]).toBe(plain);
  });
});

describe('the chart is the owner’s: seven cases, three genders, in his column order', () => {
  it('rows are the seven cases in order and columns Ženski / Srednji / Muški', () => {
    expect(SINGULAR_ROWS.map((r: { key: string }) => r.key)).toEqual([
      'Nsg',
      'Gsg',
      'Dsg',
      'Asg',
      'Vsg',
      'Lsg',
      'Isg',
    ]);
    expect(GENDERS.map((g: { hr: string }) => g.hr)).toEqual([
      'Ženski rod',
      'Srednji rod',
      'Muški rod',
    ]);
    expect(SINGULAR_ROWS.map((r: { name: string }) => r.name)).toEqual([
      'Nominativ',
      'Genitiv',
      'Dativ',
      'Akuzativ',
      'Vokativ',
      'Lokativ',
      'Instrumental',
    ]);
  });
});

describe('every noun in the chart is what the declension engine produces', () => {
  it('each cell’s word equals decline(base, gender) for its case (proper nouns compared case-insensitively: the engine lowercases its input)', () => {
    let checked = 0;
    for (const row of SINGULAR_ROWS as Array<{
      key: string;
      cells: Array<Array<{ hr: string; word: string; base: string; end?: string }>>;
    }>) {
      row.cells.forEach((lines, ci) => {
        const gender = (GENDERS as Array<{ key: 'f' | 'n' | 'm' }>)[ci]!.key;
        for (const ln of lines) {
          const d = decline(ln.base, gender);
          expect(d, `${ln.base} (${gender})`).toBeTruthy();
          expect(d!.forms[row.key as 'Nsg'].toLowerCase(), `${row.key} ${gender} ${ln.base}`).toBe(
            ln.word.toLowerCase(),
          );
          expect(ln.hr, `${ln.hr} must contain ${ln.word}`).toContain(ln.word);
          // An authored `end` may only WIDEN the marked letters, and must be a real suffix.
          if (ln.end) {
            expect(ln.word.endsWith(ln.end), `${ln.word} ends in ${ln.end}`).toBe(true);
            expect(ln.end.endsWith(endingOf(ln.word, ln.base))).toBe(true);
          }
          checked++;
        }
      });
    }
    expect(checked).toBe(44); // every line of the owner's singular chart
  });
  it('endingOf marks exactly the letters that changed', () => {
    expect(endingOf('školu', 'škola')).toBe('u');
    expect(endingOf('kućo', 'kuća')).toBe('o');
    expect(endingOf('bicikl', 'bicikl')).toBe(''); // unchanged: nothing to mark
    expect(endingOf('brate', 'brat')).toBe('e');
    // more → morem shares 'more', so the prefix rule marks only 'm'; the chart authors 'em'
    expect(endingOf('morem', 'more')).toBe('m');
  });
  it('the soft-stem instrumental marks the real ending -em, not just the last letter', () => {
    render(<LessonVisualSlide slide={visualOf('cases')} lesson={LESSON} />);
    const ends = within(screen.getByTestId('chart-row-Isg'))
      .getAllByTestId('chart-ending')
      .map((e) => e.textContent);
    expect(ends).toContain('em');
  });
});

describe('the rendered chart', () => {
  it('is a real table: 3 gender columns + the case column, 7 case rows with their question words', () => {
    render(<LessonVisualSlide slide={visualOf('cases')} lesson={LESSON} />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(4);
    expect(screen.getByRole('columnheader', { name: /Ženski rod/ })).toBeTruthy();
    expect(screen.getByRole('columnheader', { name: /Srednji rod/ })).toBeTruthy();
    expect(screen.getByRole('columnheader', { name: /Muški rod/ })).toBeTruthy();
    expect(screen.getAllByRole('rowheader')).toHaveLength(7);
    const loc = screen.getByTestId('chart-row-Lsg');
    expect(within(loc).getByText('Gdje sam ja?')).toBeTruthy();
    expect(within(loc).getByText('Where am I?')).toBeTruthy();
    expect(screen.getByText('Koga, čega nema?')).toBeTruthy();
  });
  it('marks each changed ending in text (underline), not only colour', () => {
    render(<LessonVisualSlide slide={visualOf('cases')} lesson={LESSON} />);
    const endings = screen.getAllByTestId('chart-ending');
    expect(endings.length).toBeGreaterThan(20);
    for (const e of endings) expect(e.style.textDecoration).toBe('underline');
    // "Idem prema kući." — the locative/dative ending is the final i
    const dat = within(screen.getByTestId('chart-row-Dsg')).getAllByTestId('chart-ending');
    expect(dat.map((e) => e.textContent)).toContain('i');
  });
  it('the overview picks no row; the locative lesson picks the Lokativ row, in words and aria', () => {
    const { unmount } = render(<LessonVisualSlide slide={visualOf('cases')} lesson={LESSON} />);
    expect(screen.queryByTestId('chart-this-lesson')).toBeNull();
    unmount();
    render(<LessonVisualSlide slide={visualOf('locative-intro')} lesson={LESSON} />);
    const picked = screen.getByTestId('chart-row-Lsg');
    expect(picked.getAttribute('aria-current')).toBe('true');
    expect(within(picked).getByTestId('chart-this-lesson').textContent).toMatch(/This lesson/);
    expect(
      screen.getAllByTestId(/^chart-row-/).filter((r) => r.getAttribute('aria-current')),
    ).toHaveLength(1);
  });
  it('gives assistive technology one description and a keyboard-scrollable region', () => {
    render(<LessonVisualSlide slide={visualOf('cases')} lesson={LESSON} />);
    const region = screen.getByRole('region');
    expect(region.getAttribute('aria-label')).toBe(String(visualOf('cases').alt));
    expect(region.getAttribute('tabindex')).toBe('0');
  });
  it('an unknown kind degrades to the slide’s own text, never an error', () => {
    render(
      <LessonVisualSlide
        slide={{ type: 'visual', kind: 'from-the-future', title: 'T', body: 'Plain words.' }}
        lesson={LESSON}
      />,
    );
    expect(screen.getByText('Plain words.')).toBeTruthy();
  });
  it('uses theme tokens only: no colour literal in the chart', () => {
    const src = readFileSync('src/components/learn/visuals/CaseChartVisual.tsx', 'utf8')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    expect(src).not.toMatch(/#[0-9a-fA-F]{3,8}\b/);
    expect(src).not.toMatch(/rgba?\(/);
  });
});

describe('in the lesson', () => {
  const tinyLesson = () => ({
    id: 'cases',
    title: 'Cases',
    level: 'A1',
    duration: '~6 min',
    bg: '#f0fdf4',
    color: '#16a34a',
    icon: '📚',
    slides: [
      { type: 'intro', title: 'Intro', body: 'b', icon: '📚' },
      visualOf('cases'),
      { type: 'rule', title: 'After', body: 'x', highlight: 'x' },
      { type: 'summary', title: 'Summary', points: ['p'] },
    ],
  });
  it('is passive: Next is enabled at once and moves on, with nothing credited', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={tinyLesson()} goBack={vi.fn()} award={award} />);
    fireEvent.click(screen.getByTestId('lesson-nav-next')); // intro → chart
    expect(screen.getByTestId('lesson-visual-slide')).toBeTruthy();
    const nextBtn = screen.getByTestId('lesson-nav-next') as HTMLButtonElement;
    expect(nextBtn.disabled).toBe(false);
    fireEvent.click(nextBtn);
    expect(screen.queryByTestId('lesson-visual-slide')).toBeNull();
    expect(award).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
  });
});
