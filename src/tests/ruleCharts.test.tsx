// The rule charts (2026-10-29): the owner's padeži chart, made for seven more rules —
// present and past endings, pronouns by case, adjective endings, clitic slots, number
// words with nouns, aspect pairs. Every form in them is checked here against something
// the app already owns, because a wrong ending in a chart is worse than no chart.
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { readFileSync } from 'node:fs';

vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats: vi.fn(), writeDelta: vi.fn(), stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));

import LessonVisualSlide from '../components/learn/LessonVisualSlide';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { VERBS } from '../../functions/api/content/_data/grammar.js';
import {
  LESSON_RULE_CHARTS,
  PRESENT_VERBS,
  PAST,
  PRONOUN_FORMS,
  PRONOUN_COLUMNS,
  CLITIC_SLOTS,
  NUMBER_ROWS_SPEC,
  ASPECT_PAIRS,
  presentChartSlide,
  pastChartSlide,
  pronounChartSlide,
  adjectiveChartSlide,
  cliticChartSlide,
  numberChartSlide,
  aspectChartSlide,
} from '../../functions/api/content/_data/ruleCharts.js';
import { SINGULAR_ROWS, GENDERS } from '../../functions/api/content/_data/caseCharts.js';
import { decline, analyzeForm } from '../lib/croatianMorphology';
import { CLOSED } from '../lib/croatianClosedClass';

type Mark = {
  word: string;
  base: string;
  kind: 'n' | 'a';
  end?: string;
  start?: string;
  cell?: string;
};
type Line = { hr: string; en?: string; marks: Mark[] };
type Row = { key: string; name: string; nameEn: string; cells: Line[][] };
type Slide = { type: string; title?: string; [k: string]: unknown };
const lessonOf = (id: string) =>
  (LESSONS as Array<{ id: string; slides: Slide[] }>).find((l) => l.id === id)!;
const chartOf = (id: string) => lessonOf(id).slides.find((s) => s.type === 'visual')!;
const rowsOf = (slide: unknown) => (slide as { rows: Row[] }).rows;
const LESSON = { color: '#16a34a', bg: '#f0fdf4' };
const verb = (inf: string) =>
  (VERBS as Array<{ inf: string; present?: string[]; past?: Record<string, string[]> }>).find(
    (v) => v.inf === inf,
  )!;

// Where each chart lives is an authoring decision, so it is written out here.
const PLACED: Record<string, string> = {
  'present-tense-verbs': 'The Three Conjugation Classes',
  present: 'Three Conjugation Classes',
  'past-tense': 'Gender Endings of the L-Participle',
  'object-pronouns': 'The Short Forms — Dative',
  'adjective-agreement': 'Adjective Endings — Key Cases',
  clitics: 'The Clitic Chain — Fixed Order',
  'clitics-advanced': 'The Internal Order of Clitics',
  'word-order-emphasis': 'The Clitic Anchor Never Moves',
  'numbers-nouns': 'The Three-Way Counting Rule',
  aspect: 'Aspect Pairs — Patterns',
};

describe('placement', () => {
  it('exactly these ten lessons carry a rule chart, each straight after its anchor', () => {
    expect(Object.keys(LESSON_RULE_CHARTS).sort()).toEqual(Object.keys(PLACED).sort());
    for (const [id, after] of Object.entries(PLACED)) {
      const titles = lessonOf(id).slides.map((s) => `${s.type}:${s.title ?? ''}`);
      const at = titles.findIndex((t) => t.startsWith('visual:'));
      expect(at, id).toBeGreaterThan(0);
      expect(titles[at - 1], id).toContain(after);
      expect(chartOf(id).kind, id).toBe('ending-chart');
      const worked = titles.findIndex((t) => t.startsWith('worked:'));
      if (worked >= 0) expect(at, id).toBeLessThan(worked);
    }
  });
  it('the mastery check is still just before the summary, and the chart gates nothing', () => {
    for (const id of Object.keys(PLACED)) {
      const t = lessonOf(id).slides.map((s) => s.type);
      expect(t[t.length - 2], id).toBe('check');
      expect(t[t.length - 1], id).toBe('summary');
      expect(chartOf(id).type).toBe('visual');
    }
  });
  it('one chart per lesson, and no lesson carries a case chart AND a rule chart', () => {
    for (const id of Object.keys(PLACED))
      expect(
        lessonOf(id).slides.filter((s) => s.type === 'visual'),
        id,
      ).toHaveLength(1);
  });
});

describe('present tense: every form is the VERBS dataset’s', () => {
  const rows = rowsOf(presentChartSlide({ title: 't', caption: 'c' }));
  it('is six persons by four verbs', () => {
    expect(rows).toHaveLength(6);
    for (const r of rows) expect(r.cells).toHaveLength(4);
    expect(PRESENT_VERBS).toHaveLength(4);
  });
  PRESENT_VERBS.forEach((inf, col) => {
    it(`the ${inf} column equals the dataset, and the marked ending is what follows the stem`, () => {
      const want = verb(inf).present!;
      rows.forEach((r, i) => {
        const ln = r.cells[col]![0]!;
        expect(ln.hr, `${inf} person ${i}`).toBe(want[i]);
        const mk = ln.marks[0]!;
        expect(mk.word).toBe(want[i]);
        // the stem is what all six forms share, so the ending is a real suffix
        expect(want[i]!.startsWith(mk.base)).toBe(true);
        expect(want[i]!.length).toBeGreaterThan(mk.base.length);
      });
    });
  });
});

describe('past tense: every form is the VERBS dataset’s', () => {
  const rows = rowsOf(pastChartSlide({ title: 't', caption: 'c' }));
  it('matches the dataset for every cell it shows, and shows a dash only where the form is never said', () => {
    const data = verb('čitati').past!;
    (['m', 'f', 'n'] as const).forEach((g, ci) => {
      rows.forEach((r, i) => {
        const ln = r.cells[ci]![0]!;
        if (PAST[g][i] === null) {
          expect(ln.hr).toBe('—');
          // the dash stands only for the neuter of a person: ja / ti / mi / vi
          expect([0, 1, 3, 4]).toContain(i);
          expect(g).toBe('n');
        } else {
          expect(ln.hr, `${g} ${i}`).toBe(data[g]![i]);
        }
      });
    });
  });
  it('marks the gender ending on the participle: o / la / lo, li / le / la', () => {
    const ends = (ci: number) =>
      rows
        .map((r) => r.cells[ci]![0]!.marks[0])
        .filter(Boolean)
        .map((m) => m!.word.slice('čita'.length));
    expect(ends(0)).toEqual(['o', 'o', 'o', 'li', 'li', 'li']);
    expect(ends(1)).toEqual(['la', 'la', 'la', 'le', 'le', 'le']);
    expect(ends(2)).toEqual(['lo', 'la']);
  });
});

describe('pronouns: every long form is the right case of the right pronoun', () => {
  const CASE_OF: Record<string, string> = {
    Nsg: 'N',
    Gsg: 'G',
    Dsg: 'D',
    Asg: 'A',
    Lsg: 'L',
    Isg: 'I',
  };
  const LEMMA_OF = ['ja', 'ti', 'on', 'ona', 'mi', 'vi', 'oni'];
  for (const [key, cells] of Object.entries(PRONOUN_FORMS) as Array<
    [string, Array<[string[], string?]>]
  >) {
    it(`${key}: each form is a ${CASE_OF[key]} reading of its own pronoun`, () => {
      expect(cells).toHaveLength(PRONOUN_COLUMNS.length);
      cells.forEach(([longs, short], ci) => {
        for (const long of longs) {
          const readings = CLOSED[long] ?? [];
          const hit = readings.filter((c) => c.case === CASE_OF[key]);
          expect(hit.length, `${key} ${long} must be a ${CASE_OF[key]} form`).toBeGreaterThan(0);
          if (key !== 'Nsg' && ci !== 2) {
            // on / ono share a column, so the lemma is checked everywhere else
            expect(
              hit.some((c) => c.lemma === LEMMA_OF[ci]),
              `${key} ${long} lemma`,
            ).toBe(true);
          }
        }
        if (short) {
          for (const sh of short.split(' / ')) {
            const rs = CLOSED[sh] ?? [];
            expect(rs.length, `short form ${sh}`).toBeGreaterThan(0);
          }
        }
      });
    });
  }
  it('the tap-a-word sheet knows the forms the chart shows (nju, mnom, tobom, njim, njom, one)', () => {
    for (const [w, c] of [
      ['nju', 'A'],
      ['mnom', 'I'],
      ['tobom', 'I'],
      ['njim', 'I'],
      ['njom', 'I'],
      ['one', 'N'],
    ] as const) {
      const r = analyzeForm(w);
      expect(
        r.candidates.some((x) => x.case === c),
        w,
      ).toBe(true);
    }
  });
  it('has no vocative row, and says why', () => {
    const slide = pronounChartSlide({ title: 't', caption: 'c' });
    expect(rowsOf(slide).map((r) => r.key)).toEqual(['Nsg', 'Gsg', 'Dsg', 'Asg', 'Lsg', 'Isg']);
    expect(String(LESSON_RULE_CHARTS['object-pronouns']![0]!.slide.caption)).toMatch(/vocative/);
  });
  it('writes sa before mnom and s before the rest', () => {
    const ins = rowsOf(pronounChartSlide({ title: 't', caption: 'c' })).find(
      (r) => r.key === 'Isg',
    )!;
    const text = ins.cells.map((c) => c[0]!.hr);
    expect(text[0]).toBe('sa mnom');
    expect(text[1]).toBe('s tobom');
  });
});

// The regular singular endings of a hard-stem adjective, written out — the engine does
// not decline adjectives (the same reason the plural chart carries its own table).
const ADJ_SG: Record<'m' | 'f' | 'n', Record<string, string>> = {
  f: { Nsg: 'a', Gsg: 'e', Dsg: 'oj', Asg: 'u', Vsg: 'a', Lsg: 'oj', Isg: 'om' },
  n: { Nsg: 'o', Gsg: 'og', Dsg: 'om', Asg: 'o', Vsg: 'o', Lsg: 'om', Isg: 'im' },
  m: { Nsg: 'i', Gsg: 'og', Dsg: 'om', Asg: 'i', Vsg: 'i', Lsg: 'om', Isg: 'im' },
};
describe('adjectives: both endings of every phrase are what the language says', () => {
  const rows = rowsOf(adjectiveChartSlide({ title: 't', caption: 'c' }));
  it('is the seven cases by three genders, in the owner’s column order', () => {
    expect(rows.map((r) => r.key)).toEqual(SINGULAR_ROWS.map((r: { key: string }) => r.key));
    for (const r of rows) expect(r.cells).toHaveLength(3);
  });
  it('each adjective is nov + the regular ending; each noun is decline(base, gender)', () => {
    let nouns = 0;
    let adjs = 0;
    for (const row of rows) {
      row.cells.forEach((cell, ci) => {
        const gender = (GENDERS as Array<{ key: 'f' | 'n' | 'm' }>)[ci]!.key;
        cell.forEach((ln, li) => {
          for (const mk of ln.marks) {
            if (mk.kind === 'a') {
              adjs++;
              // the one cell with two lines: a masculine PERSON takes the genitive form
              const animate = row.key === 'Asg' && gender === 'm' && li === 1;
              const want = animate ? 'og' : ADJ_SG[gender][row.key]!;
              expect(mk.word, `${row.key} ${gender} adjective`).toBe(mk.base + want);
            } else {
              nouns++;
              const d = decline(mk.base, gender)!;
              expect(mk.word, `${row.key} ${gender} ${mk.base}`).toBe(d.forms[row.key as 'Nsg']);
            }
          }
        });
      });
    }
    expect(adjs).toBe(nouns);
    expect(adjs).toBe(22);
  });
});

describe('clitics: the order is the language’s, and the lessons’', () => {
  it('runs li, the auxiliary, the dative, the accusative, se, je', () => {
    expect(CLITIC_SLOTS.map((s: { key: string }) => s.key)).toEqual([
      'li',
      'aux',
      'dat',
      'acc',
      'se',
      'je',
    ]);
  });
  it('agrees with the clitics lesson’s own table, in the same relative order', () => {
    const table = lessonOf('clitics').slides.find(
      (s) => s.type === 'table' && s.title === 'The Clitic Chain — Fixed Order',
    ) as unknown as { rows: string[][] };
    const lessonOrder = table.rows.map((r) => r[1]!);
    const find = (re: RegExp) => lessonOrder.findIndex((t) => re.test(t));
    const idx = [/conditional/, /past-tense auxiliary/, /dative/, /accusative/, /reflexive/].map(
      find,
    );
    expect(idx.every((i) => i >= 0)).toBe(true);
    expect([...idx].sort((a, b) => a - b)).toEqual(idx);
  });
  it('every example puts each marked clitic in its slot: nothing before a lower slot', () => {
    const rank: Record<string, number> = {};
    CLITIC_SLOTS.forEach((s: { words: Line[] }, i: number) => {
      for (const w of s.words) for (const t of w.hr.split(/[ ,()]+/).filter(Boolean)) rank[t] = i;
    });
    for (const s of CLITIC_SLOTS as Array<{ key: string; examples: Line[] }>) {
      for (const ex of s.examples) {
        const words = ex.hr.replace(/[.?!,]/g, '').split(' ');
        const clitics = words.filter((w) => rank[w] !== undefined && w !== 'je' && w !== 'ju');
        const ranks = clitics.map((w) => rank[w]!);
        expect(ranks, `${ex.hr}`).toEqual([...ranks].sort((a, b) => a - b));
        // the marked word is a clitic of ITS OWN row
        const marked = ex.marks[0]!.word;
        expect(
          (CLITIC_SLOTS as Array<{ key: string; words: Line[] }>)
            .find((x) => x.key === s.key)!
            .words.some((w) => w.hr.split(/[ ,()]+/).includes(marked)),
          `${ex.hr}: ${marked}`,
        ).toBe(true);
      }
    }
  });
  it('the chain example in the caption obeys the order it teaches', () => {
    expect('Ona mu ga je dala.'.split(' ').slice(1, 4)).toEqual(['mu', 'ga', 'je']);
    expect(String(LESSON_RULE_CHARTS.clitics![0]!.slide.caption)).toContain('Ona mu ga je dala.');
  });
});

describe('numbers: each noun is the form the counting rule asks for', () => {
  it('equals the engine’s genitive singular / genitive plural / nominative, row by row', () => {
    const rows = rowsOf(numberChartSlide({ title: 't', caption: 'c' }));
    expect(rows).toHaveLength(NUMBER_ROWS_SPEC.length);
    const base = ['dan', 'minuta', 'selo'];
    const gender = ['m', 'f', 'n'] as const;
    const seen = new Set<string>();
    for (const row of rows) {
      row.cells.forEach((cell, ci) => {
        const mk = cell[0]!.marks[0]!;
        const d = decline(base[ci]!, gender[ci])!;
        expect(mk.word, `${row.key} ${base[ci]} ${mk.cell}`).toBe(d.forms[mk.cell as 'Nsg']);
        seen.add(mk.cell!);
      });
    }
    expect([...seen].sort()).toEqual(['Gpl', 'Gsg', 'Nsg']);
  });
  it('applies the rule the lesson teaches: 2–4 genitive singular, 5+ and 11–14 genitive plural', () => {
    const cellOf = (key: string) => NUMBER_ROWS_SPEC.find((r: string[]) => r[0] === key)![3];
    expect(cellOf('1')).toBe('Nsg');
    expect(cellOf('2-4')).toBe('Gsg');
    expect(cellOf('5-10')).toBe('Gpl');
    expect(cellOf('11-14')).toBe('Gpl');
    expect(cellOf('21')).toBe('Nsg');
    expect(cellOf('22-24')).toBe('Gsg');
    expect(cellOf('25+')).toBe('Gpl');
  });
  it('agrees with the lesson’s own dan table, line for line', () => {
    const tbl = lessonOf('numbers-nouns').slides.find(
      (s) => s.type === 'table' && s.title === 'The Counting Rule — "dan" (day)',
    ) as unknown as { rows: string[][] };
    const lesson = new Map(tbl.rows.map((r) => [r[1]!, r[2]!]));
    const rows = rowsOf(numberChartSlide({ title: 't', caption: 'c' }));
    const dan = (key: string) => rows.find((r) => r.key === key)!.cells[0]![0]!.hr;
    const kind: Record<string, string> = {
      Nsg: 'nominative singular',
      Gsg: 'genitive singular',
      Gpl: 'genitive plural',
    };
    for (const [phrase, rule] of lesson) {
      const key = NUMBER_ROWS_SPEC.find((r: string[]) => dan(r[0]!) === phrase);
      if (key) expect(kind[key[3]!], phrase).toBe(rule);
    }
    expect(lesson.size).toBeGreaterThan(0);
  });
});

describe('aspect: every pair is one the app already teaches', () => {
  const taught = new Set<string>();
  for (const id of ['aspect', 'aspect-perfective']) {
    for (const s of lessonOf(id).slides)
      if (s.type === 'table')
        for (const r of (s as unknown as { rows: string[][] }).rows) taught.add(`${r[0]}>${r[1]}`);
  }
  const all = Object.values(ASPECT_PAIRS).flat() as string[][];
  it('each pair is in an aspect lesson’s table or the VERBS dataset', () => {
    for (const [imp, pf] of all) {
      const inDataset = (VERBS as Array<{ inf: string; pair?: string | null }>).some(
        (v) => v.inf === imp && v.pair === pf,
      );
      expect(taught.has(`${imp}>${pf}`) || inDataset, `${imp} > ${pf}`).toBe(true);
    }
  });
  it('marks exactly what makes the difference: a prefix, an ending, or the whole word', () => {
    for (const [imp, pf, , pre] of ASPECT_PAIRS.prefix as string[][]) {
      expect(pf!.startsWith(pre!)).toBe(true);
      expect(pf!.slice(pre!.length)).toBe(imp);
    }
    for (const [imp, pf, , base] of ASPECT_PAIRS.ending as string[][]) {
      expect(imp!.startsWith(base!) && pf!.startsWith(base!)).toBe(true);
      expect(imp).not.toBe(pf);
    }
  });
});

describe('the rendered rule charts', () => {
  const ALL: Array<[string, string]> = [
    ['present-tense-verbs', 'Osoba'],
    ['past-tense', 'Osoba'],
    ['object-pronouns', 'Padeži'],
    ['adjective-agreement', 'Padeži'],
    ['clitics', 'Mjesto'],
    ['numbers-nouns', 'Broj'],
    ['aspect', 'Kako nastaje'],
  ];
  for (const [id, corner] of ALL) {
    it(`${id}: a real table with its own corner heading and an accessible description`, () => {
      render(<LessonVisualSlide slide={chartOf(id)} lesson={LESSON} />);
      expect(screen.getByTestId('visual-case-chart')).toBeTruthy();
      expect(screen.getByRole('columnheader', { name: new RegExp(corner) })).toBeTruthy();
      expect(screen.getAllByRole('rowheader').length).toBeGreaterThanOrEqual(3);
      expect(screen.getByRole('region').getAttribute('aria-label')).toBe(String(chartOf(id).alt));
      expect(screen.getByRole('region').getAttribute('tabindex')).toBe('0');
    });
  }
  it('does not number person rows, but numbers the clitic slots', () => {
    const { unmount } = render(
      <LessonVisualSlide slide={chartOf('present-tense-verbs')} lesson={LESSON} />,
    );
    expect(screen.queryByText(/^1\. /)).toBeNull();
    unmount();
    render(<LessonVisualSlide slide={chartOf('clitics')} lesson={LESSON} />);
    expect(screen.getAllByRole('rowheader').map((h) => h.textContent)[0]).toMatch(/^1\. li/);
  });
  it('underlines the verb ending in text, not only colour', () => {
    render(<LessonVisualSlide slide={chartOf('present-tense-verbs')} lesson={LESSON} />);
    const ja = screen.getAllByRole('row')[1]!;
    const ends = within(ja)
      .getAllByTestId('chart-ending')
      .map((e) => e.textContent);
    expect(ends).toEqual(['am', 'im', 'em', 'em']);
    for (const e of within(ja).getAllByTestId('chart-ending'))
      expect(e.style.textDecoration).toBe('underline');
  });
  it('marks an aspect prefix at the START of the word', () => {
    render(<LessonVisualSlide slide={chartOf('aspect')} lesson={LESSON} />);
    const words = screen.getAllByTestId('chart-word');
    const na = words.find((w) => w.textContent === 'napisati')!;
    expect(na.firstElementChild?.getAttribute('data-testid')).toBe('chart-ending');
    expect(na.firstElementChild?.textContent).toBe('na');
  });
  it('shows an English gloss beneath an aspect verb', () => {
    render(<LessonVisualSlide slide={chartOf('aspect')} lesson={LESSON} />);
    // beside BOTH partners, so the two columns' lines stay level
    expect(screen.getAllByText('to write')).toHaveLength(2);
  });
  it('the chart module uses theme tokens only (no colour literal)', () => {
    const src = readFileSync('functions/api/content/_data/ruleCharts.js', 'utf8');
    expect(src).not.toMatch(/#[0-9a-fA-F]{3,8}\b/);
  });
  it('the caption of every rule chart exists and is plain English', () => {
    for (const [id, [first]] of Object.entries(LESSON_RULE_CHARTS) as Array<
      [string, Array<{ slide: { caption: string; alt: string } }>]
    >) {
      expect(first!.slide.caption.length, id).toBeGreaterThan(40);
      expect(first!.slide.alt.length, id).toBeGreaterThan(60);
    }
    // a builder smoke test: each slide builder returns an ending-chart
    for (const f of [
      presentChartSlide,
      pastChartSlide,
      adjectiveChartSlide,
      cliticChartSlide,
      numberChartSlide,
      aspectChartSlide,
    ])
      expect((f as (a: object) => { kind: string })({ title: 't', caption: 'c' }).kind).toBe(
        'ending-chart',
      );
  });
});
