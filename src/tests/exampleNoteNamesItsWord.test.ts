// src/tests/exampleNoteNamesItsWord.test.ts
//
// AN ENDING NOTE MUST NAME THE WORD IT IS ABOUT (owner report, 2026-09-29).
//
// "Grad je velik. Gradovi su veliki." carried the note "short masculine takes -ovi".
// The note was written about the noun (grad → gradovi) and is true of it; but the
// example changes TWO words, and the one a reader's eye lands on is the adjective
// (velik → veliki), which takes -i. Owner: "you state that Velik should add ovi,
// when it is simply just adding i." The sibling item on the same slide had the same
// shape ("More je toplo. Mora su topla." — "neuter -e → -a", while toplo → topla is
// -o → -a). Sweep 176's hand census of all 180 lessons read both as correct, because
// each note IS correct about the word its author meant — the defect is ATTRIBUTION,
// which only shows when you ask which word the reader will attach it to.
//
// The rule: an example item whose note states an ending change (a bare "-suffix")
// and whose two sentences differ in more than one word must NAME one of the example's
// own words in the note. Guided-practice and mastery-check items are outside the
// rule — their "second sentence" is an English cue in brackets, and their notes
// always state the answer form, which the census confirmed.
import { describe, expect, it } from 'vitest';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';

const ENDING = /(^|[\s(])-[a-zčćđšž]{1,5}\b/;
// The copula changing number (je → su) is not an ending a note could be misread as
// describing, so it does not count as a second changed word.
const COPULA = new Set(['je', 'su', 'sam', 'si', 'smo', 'ste', 'nije', 'nisu']);
const tok = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-zčćđšž\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

interface Finding {
  lesson: string;
  slide: string;
  hr: string;
  note: string;
  changed: string[];
}

interface ExampleItem {
  hr?: string;
  en?: string;
  note?: string;
}
interface Slide {
  type?: string;
  title?: string;
  items?: ExampleItem[];
}
interface Lesson {
  id: string;
  slides?: Slide[];
}

export function attributionFindings(lessons: Lesson[]): { checked: number; findings: Finding[] } {
  const findings: Finding[] = [];
  let checked = 0;
  for (const l of lessons) {
    for (const s of l.slides ?? []) {
      if (s.type !== 'example' || !Array.isArray(s.items)) continue;
      for (const item of s.items) {
        const note: string = item.note ?? '';
        const hr: string = item.hr ?? '';
        if (!hr || !ENDING.test(note)) continue;
        const sents = hr.split(/[.!?]\s+/).filter(Boolean);
        if (sents.length < 2) continue;
        checked++;
        const a = tok(sents[0]);
        const b = tok(sents[1]);
        const changed = b.filter((w, i) => a[i] !== w && !COPULA.has(w));
        if (changed.length < 2) continue;
        const noteToks = new Set(tok(note));
        const names = tok(hr).some((t) => t.length > 2 && noteToks.has(t));
        if (!names) findings.push({ lesson: l.id, slide: s.title ?? '', hr, note, changed });
      }
    }
  }
  return { checked, findings };
}

describe('an ending note on a two-change example names the word it is about', () => {
  it('every shipped lesson', () => {
    const { checked, findings } = attributionFindings(LESSONS as unknown as Lesson[]);
    // Non-vacuity: the rule must actually be reaching two-sentence example items with
    // ending notes (measured 7 across the 180 lessons on 2026-09-29; the positive
    // control below is what proves the predicate, this only proves the population).
    expect(checked).toBeGreaterThanOrEqual(5);
    expect(
      findings.map(
        (f) => `${f.lesson} "${f.slide}": ${f.hr} — "${f.note}" (${f.changed.join(', ')})`,
      ),
    ).toEqual([]);
  });

  it('positive control: the shipped defect, as it shipped', () => {
    const { findings } = attributionFindings([
      {
        id: 'ctl',
        slides: [
          {
            type: 'example',
            title: 'ctl',
            items: [
              {
                hr: 'Grad je velik. Gradovi su veliki.',
                en: '',
                note: 'short masculine takes -ovi',
              },
              // ONE word changes besides the copula: the note cannot be misread.
              { hr: 'Ovo je knjiga. Ovo su knjige.', en: '', note: 'feminine -a → -e' },
              // Two words change and the note names the noun: fine.
              {
                hr: 'More je toplo. Mora su topla.',
                en: '',
                note: 'the noun more → mora changes -e → -a',
              },
            ],
          },
        ],
      },
    ]);
    expect(findings.map((f) => f.hr)).toEqual(['Grad je velik. Gradovi su veliki.']);
  });
});
