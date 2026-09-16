/**
 * learningCenter.test.tsx — the Learning Center is wired, and looking something
 * up still costs nothing.
 *
 * THIS IS THE HALF PHASE 1 COULD NOT WRITE. `learningIndex.test.ts` drives the
 * pure builder with a fixture it assembles itself, which says nothing about
 * which catalogues the APP hands it — a test cannot meaningfully guard its own
 * fixture. That assembly now lives in `useLearningIndex`, so the first block
 * below derives the set of content catalogues from source and fails when one is
 * missing from it. Forgetting a catalogue is otherwise invisible: the Center
 * renders fewer rows and nothing says so, which is exactly how the three
 * hand-listed doors it replaces decayed.
 *
 * The second half is the component/wiring split this codebase keeps paying for.
 * A test that renders a screen and supplies its props proves the screen works
 * when wired; only walking the router proves it IS wired — that is how
 * `AlphabetScreen` shipped for its whole life with a dead `award` branch. So the
 * render tests below drive the REAL screen against the REAL index and the REAL
 * spine store, and separate source pins hold the router and the Learn tab.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';

vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0 }, dispatch: vi.fn(), setStats: vi.fn() }),
}));
vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: null }),
  peekContent: () => null,
}));

vi.mock('../lib/contentClient', () => ({
  // The Center seeds from the cached spine; this proves it never needs the
  // network to work, and keeps the suite off it.
  getCurriculumSpine: vi.fn(async () => []),
}));

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { writeCurriculumSpine, CURRICULUM_PROGRESS_KEY } = await import('../lib/curriculumProgress');
const LearningCenter = (await import('../components/learn/LearningCenter')).default;

const ASSEMBLER = 'src/hooks/useLearningIndex.ts';

// ───────────────────────────────────────────────────────────────────────────
// 1. THE ASSEMBLY NAMES EVERY CATALOGUE
// ───────────────────────────────────────────────────────────────────────────

/**
 * Catalogues that exist but are deliberately NOT sources, each with the reason.
 * Checked in BOTH staleness directions below, because an exemption can rot two
 * ways and only one is obvious: the thing it names can disappear, or the reason
 * can stop being true. The `idioms` dead end survived a staleness test that
 * only checked the first.
 */
const CATALOGUE_EXEMPT: Record<string, string> = {
  CONTEXTUAL_POOL:
    'Hero motivational copy in heroData.ts — lines shown on the Today card, not learnable content with a screen to open.',
};

function sourceFiles(): string[] {
  const out: string[] = [];
  for (const dir of ['src/lib', 'src/hooks', 'src/components/home']) {
    for (const f of readdirSync(dir)) {
      if (/\.(ts|tsx)$/.test(f) && !f.endsWith('.test.ts') && !f.endsWith('.test.tsx')) {
        out.push(`${dir}/${f}`);
      }
    }
  }
  return out;
}

describe('the index is assembled from EVERY catalogue the app keeps', () => {
  const files = sourceFiles();
  /**
   * The assembler's CODE, with comments stripped.
   *
   * THIS STRIP IS LOAD-BEARING AND ITS ABSENCE MADE THE GUARD DECORATIVE. The
   * file's own header explains why importing `useDailySession` is not a bundle
   * regression and names PRODUCTION_POOL while doing it — so a plain
   * `includes()` stayed true after the catalogue was deleted from the actual
   * assembly, and dropping it failed nothing. Prose about a thing is not a use
   * of it. Found by mutation; the same shape defeated the module-reachability
   * guard earlier in this codebase.
   */
  const assembler = readFileSync(ASSEMBLER, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/^\s*\/\/.*$/gm, ' ');

  /** Every exported catalogue-shaped constant, derived rather than listed. */
  const catalogues = (() => {
    const found = new Map<string, string>();
    for (const f of files) {
      const src = readFileSync(f, 'utf8');
      for (const m of src.matchAll(/^export const ([A-Z][A-Z0-9_]*(?:POOL|ENTRIES))\b/gm)) {
        found.set(m[1]!, f);
      }
    }
    return found;
  })();

  it('strips comments before looking for a catalogue name', () => {
    // Guards the guard: if this strip ever becomes a no-op, every assertion
    // above it degrades to "is the name mentioned anywhere in the file".
    expect(assembler).not.toContain('bundle regression');
    expect(assembler).toContain('CEFR_EXERCISE_POOL');
  });

  it('found the catalogues at all (the derivation itself still works)', () => {
    expect(catalogues.size).toBeGreaterThanOrEqual(5);
    expect([...catalogues.keys()]).toContain('CEFR_EXERCISE_POOL');
    expect([...catalogues.keys()]).toContain('PRODUCTION_POOL');
  });

  it('names every catalogue, directly or through one it already names', () => {
    const unreached: string[] = [];
    for (const [name] of catalogues) {
      if (name in CATALOGUE_EXEMPT) continue;
      if (assembler.includes(name)) continue;
      // Covered transitively: spread INTO the LITERAL of a catalogue the
      // assembler names. `PRACTICE_PROGRAMME_ENTRIES` and `C_LEVEL_DRILL_ENTRIES`
      // are both spread into CEFR_EXERCISE_POOL, so naming them in the assembler
      // would double every one of their rows.
      //
      // BOTH HALVES OF THIS ARE LOAD-BEARING AND THE LOOSE VERSION WAS USELESS.
      // Written as "some file spreads N and also exports something the assembler
      // names", it rescued CROATIA_POOL — because `useDailySession` happens to
      // contain `...CROATIA_POOL.map((c) => c.screen)`, a derived screen-key
      // list, and also exports PRODUCTION_POOL. Deleting CROATIA_POOL from the
      // assembly left this suite fully green. Found by mutation. So the spread
      // must be BARE (`...N,` — not `...N.map(`), and it must sit inside that
      // catalogue's own literal rather than anywhere in its file.
      const spreadIntoNamed = [...catalogues.entries()].some(([other, otherFile]) => {
        if (other === name || !assembler.includes(other)) return false;
        const src = readFileSync(otherFile, 'utf8');
        const start = src.search(new RegExp(`^export const ${other}\\b`, 'm'));
        if (start < 0) return false;
        const rest = src.slice(start + 1);
        const nextExport = rest.search(/^export /m);
        const literal = nextExport < 0 ? rest : rest.slice(0, nextExport);
        return new RegExp(`\\.\\.\\.${name}\\s*[,\\]]`).test(literal);
      });
      if (!spreadIntoNamed) unreached.push(name);
    }
    expect(
      unreached,
      `catalogues the Learning Center cannot see — add them to ${ASSEMBLER} or exempt them with a reason: ${unreached.join(', ')}`,
    ).toEqual([]);
  });

  it('keeps its exemptions honest in both directions', () => {
    for (const [name, reason] of Object.entries(CATALOGUE_EXEMPT)) {
      expect(reason.length, `${name} needs a stated reason`).toBeGreaterThan(20);
      // (a) it must still exist — an exemption for a deleted export guards nothing
      expect(catalogues.has(name), `${name} no longer exists; drop the exemption`).toBe(true);
      // (b) it must still be absent — if it were added as a source the exemption
      //     would sit here asserting a gap that had closed
      expect(assembler.includes(name), `${name} IS now a source; drop the exemption`).toBe(false);
    }
    expect(Object.keys(CATALOGUE_EXEMPT).length).toBe(1);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 2. IT IS WIRED (source pins — a render test cannot see this)
// ───────────────────────────────────────────────────────────────────────────

describe('the Center is reachable in the real app', () => {
  const router = readFileSync('src/components/AppRouter.tsx', 'utf8');
  const learnTab = readFileSync('src/components/learn/LearnTab.tsx', 'utf8');

  it('the router renders it for its screen key', () => {
    expect(router).toContain("currentScreen === 'learning_center'");
    expect(router).toMatch(/<LearningCenter\b/);
  });

  it('the router hands it every prop it needs, not just some', () => {
    const block = router.slice(
      router.indexOf('<LearningCenter'),
      router.indexOf('</ScreenErrorBoundary>', router.indexOf('<LearningCenter')),
    );
    // `launchAnimLesson` is the one that matters: without it every lesson row is
    // inert, and TypeScript would not catch it — lazyWithReload types the screen
    // as `any`, which is how a router prop went missing here before.
    expect(block).toMatch(/goBack=\{/);
    expect(block).toMatch(/launchAnimLesson=\{launchAnimLesson\}/);
    expect(block).toMatch(/onOpenScreen=\{/);
  });

  it('the Learn tab offers a way in', () => {
    expect(learnTab).toContain("setScr('learning_center')");
  });

  it('is registered in BOTH screen→tab maps and BOTH restore-safe sets', () => {
    // App.tsx carries two of each, and a comment beside one records that they
    // once disagreed and flipped the highlighted tab depending on entry path.
    const app = readFileSync('src/App.tsx', 'utf8');
    expect([...app.matchAll(/learning_center: 'learn'/g)]).toHaveLength(2);
    expect([...app.matchAll(/'learning_center',/g)]).toHaveLength(2);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 3. THE SCREEN, DRIVEN FOR REAL
// ───────────────────────────────────────────────────────────────────────────

interface Body {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
}
const BODY_BY_ID = new Map((LESSONS as Body[]).map((l) => [l.id, l]));
const servedSpine = (CURRICULUM as Array<Record<string, unknown>>)
  .filter((e) => BODY_BY_ID.has(e.id as string))
  .map((e) => {
    const b = BODY_BY_ID.get(e.id as string)!;
    return { ...e, title: b.title, subtitle: b.subtitle, icon: b.icon };
  });

function renderCenter() {
  const launchAnimLesson = vi.fn();
  const onOpenScreen = vi.fn();
  const goBack = vi.fn();
  render(
    React.createElement(LearningCenter, {
      goBack,
      launchAnimLesson,
      onOpenScreen,
      sh: <T,>(a: T[]) => a,
    }),
  );
  return { launchAnimLesson, onOpenScreen, goBack };
}

function search(q: string): void {
  fireEvent.change(screen.getByTestId('lc-search'), { target: { value: q } });
}

describe('the Center, rendered against the real catalogues', () => {
  beforeEach(() => {
    localStorage.clear();
    writeCurriculumSpine(servedSpine as never);
  });
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('opens on the syllabus, not on an empty search', () => {
    renderCenter();
    expect(screen.getByTestId('lc-syllabus')).toBeTruthy();
    expect(screen.queryByTestId('lc-results')).toBeNull();
    // Every level is present, so the whole curriculum is browsable from here.
    for (const lvl of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      expect(screen.getByTestId(`lc-level-${lvl}`)).toBeTruthy();
    }
  });

  it('finds the case material for "padeži" and can open a lesson', () => {
    const { launchAnimLesson } = renderCenter();
    search('padeži');
    const rows = screen.getAllByTestId('lc-row');
    expect(rows.length).toBeGreaterThan(3);
    // Select by KIND, not by title text: the pool also carries a drill labelled
    // "Cases Overview", so matching on the word alone picks a screen row and the
    // lesson path is never exercised (which is how this assertion first passed
    // the wrong thing).
    const lessonRow = rows.find((r) => r.getAttribute('data-kind') === 'lesson');
    expect(lessonRow, 'a pade\u017ei search must surface LESSONS, not only drills').toBeTruthy();
    fireEvent.click(lessonRow!);
    expect(launchAnimLesson).toHaveBeenCalledTimes(1);
    const openedId = launchAnimLesson.mock.calls[0]![0] as string;
    expect(new Set(servedSpine.map((e) => e.id as string)).has(openedId)).toBe(true);
  });

  it('opens a DRILL row through the screen path, not the lesson path', () => {
    const { launchAnimLesson, onOpenScreen } = renderCenter();
    search('genitive');
    const rows = screen.getAllByTestId('lc-row');
    // Select the DRILL kind explicitly. "Not a lesson" was enough while there
    // were three kinds; the reference desk added `concept` and `tool`, whose
    // rows open a panel on this screen rather than navigating, so the loose
    // selector silently started testing a different path.
    const drill = rows.find((r) => r.getAttribute('data-kind') === 'drill');
    expect(drill, 'a genitive search must surface practice as well as lessons').toBeTruthy();
    fireEvent.click(drill!);
    expect(onOpenScreen).toHaveBeenCalledTimes(1);
    expect(launchAnimLesson).not.toHaveBeenCalled();
  });

  it('surfaces lessons AND practice for one query, which is the point', () => {
    renderCenter();
    search('genitive');
    const kinds = new Set(screen.getAllByTestId('lc-row').map((r) => r.getAttribute('data-kind')));
    expect(kinds.has('lesson')).toBe(true);
    expect(kinds.size).toBeGreaterThan(1);
  });

  it('opens a REFERENCE row on the desk, in place, navigating nowhere', () => {
    const { launchAnimLesson, onOpenScreen } = renderCenter();
    search('genitiv');
    const concept = screen
      .getAllByTestId('lc-row')
      .find((r) => r.getAttribute('data-kind') === 'concept');
    expect(concept, 'a Croatian case name must reach its concept card').toBeTruthy();
    fireEvent.click(concept!);
    // The answer appears here rather than on another screen, so neither launcher
    // may fire — a reference panel is not a navigation.
    expect(launchAnimLesson).not.toHaveBeenCalled();
    expect(onOpenScreen).not.toHaveBeenCalled();
    expect(screen.getByTestId('reference-desk')).toBeTruthy();
    expect(screen.getByTestId('rd-open-genitive')).toBeTruthy();
  });

  it('offers the reference desk as a standing mode, not only via search', () => {
    renderCenter();
    fireEvent.click(screen.getByTestId('lc-mode-reference'));
    expect(screen.getByTestId('reference-desk')).toBeTruthy();
    expect(screen.queryByTestId('lc-syllabus')).toBeNull();
    fireEvent.click(screen.getByTestId('lc-mode-syllabus'));
    expect(screen.getByTestId('lc-syllabus')).toBeTruthy();
  });

  it('says so plainly when nothing matches', () => {
    renderCenter();
    search('qqzzxnotathing');
    expect(screen.getByTestId('lc-empty')).toBeTruthy();
    expect(screen.queryAllByTestId('lc-row')).toHaveLength(0);
  });

  it('marks completed lessons without gating anything', () => {
    localStorage.setItem(
      CURRICULUM_PROGRESS_KEY,
      JSON.stringify({ done: { alphabet: '2026-01-01' } }),
    );
    renderCenter();
    search('alphabet');
    const rows = screen.getAllByTestId('lc-row');
    expect(rows.some((r) => r.textContent?.includes('✓'))).toBe(true);
  });

  it('opens C2 material for an A1 learner — lookup is never gated', () => {
    const { launchAnimLesson } = renderCenter();
    // No stats are supplied at all, so there is no level to gate on: that IS the
    // contract. "At any time" is the whole request this screen answers.
    fireEvent.click(screen.getByTestId('lc-level-C2'));
    const rows = screen.getAllByTestId('lc-row');
    expect(rows.length).toBeGreaterThan(5);
    fireEvent.click(rows[0]!);
    expect(launchAnimLesson).toHaveBeenCalledTimes(1);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 4. LOOKING SOMETHING UP IS NOT CREDIT
// ───────────────────────────────────────────────────────────────────────────

describe('looking something up costs nothing', () => {
  beforeEach(() => {
    localStorage.clear();
    writeCurriculumSpine(servedSpine as never);
  });
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('writes NOTHING to storage across a full browse-and-open', () => {
    const before = JSON.stringify(localStorage);
    const { launchAnimLesson } = renderCenter();
    search('genitive');
    // Open one of each kind that navigates, then browse the syllabus and open a
    // lesson from there. Explicit kinds rather than "the first row": the result
    // order is a ranking decision and must not silently steer this test.
    const rows = () => screen.getAllByTestId('lc-row');
    fireEvent.click(rows().find((r) => r.getAttribute('data-kind') === 'drill')!);
    fireEvent.click(rows().find((r) => r.getAttribute('data-kind') === 'lesson')!);
    search('');
    fireEvent.click(screen.getByTestId('lc-mode-syllabus'));
    fireEvent.click(screen.getByTestId('lc-level-B1'));
    fireEvent.click(rows()[0]!);
    expect(launchAnimLesson).toHaveBeenCalled();
    expect(JSON.stringify(localStorage)).toBe(before);
  });

  it('imports no award, stats or progress-writing module', () => {
    const src = readFileSync('src/components/learn/LearningCenter.tsx', 'utf8');
    const imports = [...src.matchAll(/^import[^;]+from '([^']+)';/gm)].map((m) => m[1]!);
    for (const spec of imports) {
      expect(spec, `${spec} can write progress`).not.toMatch(
        /useAward|statsReducer|completeExercise|progressSnapshot|firebase/,
      );
    }
    // StatsContext IS imported, and deliberately: phase 4 reads the learner's
    // level to hand a guarded screen a deck at that level. Reading is not
    // crediting, so the rule is about the WRITE path — the Center must never
    // dispatch or award. Checked on the code, comments stripped, because this
    // file's own prose discusses awarding.
    const code = src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^\s*\/\/.*$/gm, ' ');
    expect(code).not.toMatch(
      /\bdispatch\s*\(|\baward\s*\(|markLessonComplete|recordScreenPractised/,
    );
    // The one progress module it may touch is READ-only at this call site.
    expect(src).toContain('readCompletedLessons');
    expect(src).not.toMatch(/markLessonComplete|recordScreenPractised|awardXP/);
  });
});
