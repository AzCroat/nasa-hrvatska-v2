// Picture slides (visual-learning pilot, PR 1, 2026-10-29): motion-versus-rest in
// the A1 locative lesson. A picture is passive: it must sit where the data says,
// carry only forms the declension engine produces, say everything in words as
// well as colour, degrade on an unknown kind, and never gate a lesson.
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
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { LESSON_VISUALS, withVisuals } from '../../functions/api/content/_data/lessonVisuals.js';
import { decline } from '../lib/croatianMorphology';

type Slide = { type: string; title?: string; [k: string]: unknown };
const lessonOf = (id: string) =>
  (LESSONS as Array<{ id: string; slides: Slide[] }>).find((l) => l.id === id)!;
const visualOf = () => lessonOf('locative-intro').slides.find((s) => s.type === 'visual')!;

describe('placement', () => {
  it('the picture follows the rule it illustrates and precedes the worked examples', () => {
    const types = lessonOf('locative-intro').slides.map((s) => `${s.type}:${s.title ?? ''}`);
    const at = types.findIndex((t) => t.startsWith('visual:'));
    expect(at).toBeGreaterThan(0);
    expect(types[at - 1]).toBe('rule:Kamo? and Gdje?');
    expect(at).toBeLessThan(types.findIndex((t) => t.startsWith('worked:')));
  });
  it('the check is still immediately before the summary', () => {
    const t = lessonOf('locative-intro').slides.map((s) => s.type);
    expect(t[t.length - 2]).toBe('check');
    expect(t[t.length - 1]).toBe('summary');
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
  it('only lessons with a picture change, and the pilot is exactly one picture', () => {
    const withPictures = (LESSONS as Array<{ id: string; slides: Slide[] }>)
      .filter((l) => l.slides.some((s) => s.type === 'visual'))
      .map((l) => l.id);
    expect(withPictures).toEqual(['locative-intro']);
    const plain = { id: 'x', slides: [{ type: 'rule', title: 'r' }] };
    expect(withVisuals([plain])[0]).toBe(plain);
  });
});

describe('the Croatian in the picture is what the engine produces', () => {
  it('the accusative and locative of škola are the underlined words', () => {
    const d = decline('škola', 'f');
    expect(d).toBeTruthy();
    const panels = (visualOf().panels as Array<{ hr: string; focus: string }>) ?? [];
    expect(panels).toHaveLength(2);
    expect(panels[0]!.focus).toBe(d!.forms.Asg);
    expect(panels[1]!.focus).toBe(d!.forms.Lsg);
    for (const p of panels) expect(p.hr).toContain(p.focus);
  });
  it('the caption’s na pair is real too (tržnica)', () => {
    const d = decline('tržnica', 'f');
    const cap = String(visualOf().caption);
    expect(cap).toContain(`na ${d!.forms.Asg}`);
    expect(cap).toContain(`na ${d!.forms.Lsg}`);
  });
});

describe('the rendered picture', () => {
  it('says everything in words, not only colour: question, case, movement, underlined ending', () => {
    render(<LessonVisualSlide slide={visualOf()} lesson={{ color: '#16a34a', bg: '#f0fdf4' }} />);
    const move = screen.getByTestId('visual-panel-move');
    const rest = screen.getByTestId('visual-panel-rest');
    expect(within(move).getByText('Kamo?')).toBeTruthy();
    expect(within(move).getByText(/movement · accusative/i)).toBeTruthy();
    expect(within(rest).getByText('Gdje?')).toBeTruthy();
    expect(within(rest).getByText(/no movement · locative/i)).toBeTruthy();
    const underlined = within(move).getByTestId('visual-focus');
    expect(underlined.textContent).toBe('školu');
    expect(underlined.style.textDecoration).toBe('underline');
    expect(within(rest).getByTestId('visual-focus').textContent).toBe('školi');
  });
  it('gives assistive technology one description and hides the drawing', () => {
    const { container } = render(
      <LessonVisualSlide slide={visualOf()} lesson={{ color: '#16a34a', bg: '#f0fdf4' }} />,
    );
    expect(screen.getByRole('group').getAttribute('aria-label')).toBe(String(visualOf().alt));
    for (const svg of container.querySelectorAll('svg')) {
      expect(svg.getAttribute('aria-hidden')).toBe('true');
    }
  });
  it('an unknown kind degrades to the slide’s own text, never an error', () => {
    render(
      <LessonVisualSlide
        slide={{ type: 'visual', kind: 'from-the-future', title: 'T', body: 'Plain words.' }}
        lesson={{ color: '#16a34a', bg: '#f0fdf4' }}
      />,
    );
    expect(screen.getByText('Plain words.')).toBeTruthy();
  });
  it('uses theme tokens only: no colour literal in the picture', () => {
    const src = readFileSync('src/components/learn/visuals/MotionRestVisual.tsx', 'utf8')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    expect(src).not.toMatch(/#[0-9a-fA-F]{3,8}\b/);
    expect(src).not.toMatch(/rgba?\(/);
  });
});

describe('in the lesson', () => {
  const tinyLesson = () => ({
    id: 'locative-intro',
    title: 'Locative',
    level: 'A1',
    duration: '~6 min',
    bg: '#f0fdf4',
    color: '#16a34a',
    icon: '📚',
    slides: [
      { type: 'intro', title: 'Intro', body: 'b', icon: '📚' },
      visualOf(),
      { type: 'rule', title: 'After', body: 'x', highlight: 'x' },
      { type: 'summary', title: 'Summary', points: ['p'] },
    ],
  });
  it('is passive: Next is enabled at once and moves on, with nothing credited', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={tinyLesson()} goBack={vi.fn()} award={award} />);
    fireEvent.click(screen.getByTestId('lesson-nav-next')); // intro → picture
    expect(screen.getByTestId('lesson-visual-slide')).toBeTruthy();
    const nextBtn = screen.getByTestId('lesson-nav-next') as HTMLButtonElement;
    expect(nextBtn.disabled).toBe(false);
    fireEvent.click(nextBtn);
    expect(screen.queryByTestId('lesson-visual-slide')).toBeNull();
    expect(award).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
  });
});
