// Picture slides (visual-learning pilot, 2026-10-29): the owner's case charts
// ("Padezi Graphs - Singular" and "- Plural") as passive lesson slides. It must sit where the
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
import {
  SINGULAR_ROWS,
  PLURAL_ROWS,
  GENDERS,
} from '../../functions/api/content/_data/caseCharts.js';
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
      ['plural-cases', 'The Other Three Share One Ending'],
    ] as const) {
      const types = lessonOf(id).slides.map((s) => `${s.type}:${s.title ?? ''}`);
      const at = types.findIndex((t) => t.startsWith('visual:'));
      expect(at, id).toBeGreaterThan(0);
      expect(types[at - 1]).toContain(after);
      expect(at).toBeLessThan(types.findIndex((t) => t.startsWith('worked:')));
    }
  });
  it('the check is still immediately before the summary in both', () => {
    for (const id of ['cases', 'locative-intro', 'plural-cases']) {
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
  it('the pilot is exactly these three lessons; unlisted lessons are untouched', () => {
    const withPictures = (LESSONS as Array<{ id: string; slides: Slide[] }>)
      .filter((l) => l.slides.some((s) => s.type === 'visual'))
      .map((l) => l.id)
      .sort();
    expect(withPictures).toEqual(['cases', 'locative-intro', 'plural-cases']);
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

// The regular plural of an adjective, by gender and case — written out as endings,
// because the engine does not decline adjectives. These six stems all follow it
// (the fleeting a of moderan / dobar is a masculine-singular matter only).
const ADJ_PLURAL: Record<'m' | 'f' | 'n', Record<string, string>> = {
  m: { Npl: 'i', Gpl: 'ih', Dpl: 'im', Apl: 'e', Vpl: 'i', Lpl: 'im', Ipl: 'im' },
  f: { Npl: 'e', Gpl: 'ih', Dpl: 'im', Apl: 'e', Vpl: 'e', Lpl: 'im', Ipl: 'im' },
  n: { Npl: 'a', Gpl: 'ih', Dpl: 'im', Apl: 'a', Vpl: 'a', Lpl: 'im', Ipl: 'im' },
};
// sat has two plurals by meaning: sati (hours — what the engine knows) and satovi
// (watches, clocks — what the owner's chart means by "skupi satovi").
const SAT_WATCHES: Record<string, string> = {
  Npl: 'satovi',
  Gpl: 'satova',
  Dpl: 'satovima',
  Apl: 'satove',
  Vpl: 'satovi',
  Lpl: 'satovima',
  Ipl: 'satovima',
};

type Mark = { word: string; base: string; kind: 'n' | 'a'; end?: string };
type Row = { key: string; cells: Array<Array<{ hr: string; marks: Mark[] }>> };

function checkChart(rows: Row[]) {
  let lines = 0;
  let nouns = 0;
  let adjectives = 0;
  for (const row of rows) {
    row.cells.forEach((cell, ci) => {
      const gender = (GENDERS as Array<{ key: 'f' | 'n' | 'm' }>)[ci]!.key;
      for (const ln of cell) {
        lines++;
        let from = 0;
        for (const mk of ln.marks) {
          const at = ln.hr.indexOf(mk.word, from);
          expect(at, `${ln.hr} must contain ${mk.word} in order`).toBeGreaterThanOrEqual(0);
          from = at + mk.word.length;
          if (mk.kind === 'n') {
            nouns++;
            const want =
              mk.base === 'sat' && row.key.endsWith('pl')
                ? SAT_WATCHES[row.key]!
                : decline(mk.base, gender)!.forms[row.key as 'Nsg'];
            expect(want, `${row.key} ${gender} ${mk.base}`).toBeTruthy();
            // proper nouns: the engine lowercases its input
            expect(mk.word.toLowerCase(), `${row.key} ${gender} ${mk.base}`).toBe(
              want.toLowerCase(),
            );
          } else {
            adjectives++;
            expect(mk.word, `${row.key} ${gender} adjective ${mk.base}`).toBe(
              mk.base + ADJ_PLURAL[gender][row.key]!,
            );
          }
          // An authored `end` may only WIDEN the marked letters, and must be a real suffix.
          if (mk.end) {
            expect(mk.word.endsWith(mk.end), `${mk.word} ends in ${mk.end}`).toBe(true);
            expect(mk.end.endsWith(endingOf(mk.word, mk.base))).toBe(true);
          }
        }
      }
    });
  }
  return { lines, nouns, adjectives };
}

describe('every marked word in the charts is what the language says', () => {
  it('singular: each noun equals decline(base, gender) for its case (all 44 lines)', () => {
    const r = checkChart(SINGULAR_ROWS as Row[]);
    expect(r).toEqual({ lines: 44, nouns: 44, adjectives: 0 });
  });
  it('plural: each noun equals decline(...) and each adjective its regular plural (all 42 lines)', () => {
    const r = checkChart(PLURAL_ROWS as Row[]);
    expect(r).toEqual({ lines: 42, nouns: 42, adjectives: 42 });
  });
  it('the plural chart’s rows are the same seven cases, keyed in the plural', () => {
    expect(PLURAL_ROWS.map((r: { key: string }) => r.key)).toEqual([
      'Npl',
      'Gpl',
      'Dpl',
      'Apl',
      'Vpl',
      'Lpl',
      'Ipl',
    ]);
  });
  it('endingOf marks exactly the letters that changed', () => {
    expect(endingOf('školu', 'škola')).toBe('u');
    expect(endingOf('kućo', 'kuća')).toBe('o');
    expect(endingOf('bicikl', 'bicikl')).toBe(''); // unchanged: nothing to mark
    expect(endingOf('brate', 'brat')).toBe('e');
    expect(endingOf('novim', 'nov')).toBe('im'); // an adjective's base is its stem
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
  it('the plural chart marks the adjective AND the noun ending in each phrase', () => {
    render(<LessonVisualSlide slide={visualOf('plural-cases')} lesson={LESSON} />);
    const dat = screen.getByTestId('chart-row-Dpl');
    // "Idem prema novim kućama." — two marked endings: im and ama
    const ends = within(dat)
      .getAllByTestId('chart-ending')
      .map((e) => e.textContent);
    expect(ends).toContain('im');
    expect(ends).toContain('ama');
    // the genitive plural of kuća / zgrada IS the ending -a, though it equals the singular
    const gen = within(screen.getByTestId('chart-row-Gpl')).getAllByTestId('chart-word');
    expect(
      gen.some(
        (w) =>
          w.textContent === 'kuća' &&
          w.querySelector('[data-testid=chart-ending]')?.textContent === 'a',
      ),
    ).toBe(true);
    expect(screen.getAllByRole('rowheader')).toHaveLength(7);
  });
  it('the plural caption says what the chart shows: -ima / -ama on nouns, -im on the adjective', () => {
    const cap = String(visualOf('plural-cases').caption);
    expect(cap).toContain('-ima');
    expect(cap).toContain('-ama');
    expect(cap).toContain('-im ');
    // and the chart really does: masculine/neuter nouns end -ima, feminine -ama
    const row = (PLURAL_ROWS as Row[]).find((r) => r.key === 'Dpl')!;
    const nounEnds = row.cells.map((cell) =>
      cell.map((l) => l.marks.find((m) => m.kind === 'n')!.word.slice(-3)),
    );
    expect(nounEnds[0]).toEqual(['ama', 'ama']);
    expect(nounEnds[1]).toEqual(['ima']);
    expect(nounEnds[2]).toEqual(['ima']);
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
