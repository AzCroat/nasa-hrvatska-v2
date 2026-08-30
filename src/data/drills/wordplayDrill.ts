// src/data/drills/wordplayDrill.ts
//
// C2 HUMOR — JEZIČNI — the drill for the `humor-jezicni` lesson.
//
// Croatian puns turn on things that do not survive writing. *Grȃd* is a city
// and *grȁd* is hail — same five letters, different PITCH ACCENT — so *Pao je
// grad* is a joke you cannot see. *Kosa* is hair or a scythe, *luk* is an onion
// or an arch. A learner reading the transcript of a joke will find nothing
// funny in it and be right.
//
// CASE ENDINGS ARE ALSO A PUNCHLINE, because the ending fixes the role: change
// it and the sentence describes a different situation with the same words in
// the same order.
//
// The DIMINUTIVE applied to something large is the standard comic mismatch —
// *računčić* for a four-hundred-euro bill — and a switch into kajkavian or a
// marked regional accent is a COMIC REGISTER, not mockery of the region.
//
// The lesson's own concession is worth keeping: missing a joke at C2 is normal.
// Recognising the device is the achievable goal.
//
// Three modes:
//   naglasak — the pitch-accent pairs
//   nastavci — case endings as the trap
//   registar — the diminutive and the dialect switch

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const WORDPLAY_MODE_LABELS: Record<string, string> = {
  naglasak: '🎵 Naglasak',
  nastavci: '🔚 Nastavci',
  registar: '🎭 Komični registar',
};

export const WORDPLAY_DRILL_DATA: ModeDrillItem[] = [
  // ── naglasak ──────────────────────────────────────────────────────────────
  {
    mode: 'naglasak',
    q: '"Pao je grad." Koja su dva čitanja?',
    en: 'What are the two readings?',
    opts: ['grad je pao ili je tuklo tuču', 'samo jedno', 'grad i vrt', 'grad i brod'],
    answer: 'grad je pao ili je tuklo tuču',
    tip: 'The city fell, or it hailed. Only the accent separates them.',
  },
  {
    mode: 'naglasak',
    q: 'Što razlikuje ta dva "grad"?',
    en: 'What distinguishes them?',
    opts: ['naglasak', 'pravopis', 'padež', 'rod'],
    answer: 'naglasak',
    tip: 'Pitch accent, and it is invisible in ordinary writing.',
  },
  {
    mode: 'naglasak',
    q: 'Koja su dva značenja riječi "kosa"?',
    en: 'Two meanings of kosa:',
    opts: ['kosa i kosa za travu', 'kosa i kost', 'kosa i koza', 'samo jedno'],
    answer: 'kosa i kosa za travu',
    tip: 'Hair and a scythe — homographs with different accents.',
  },
  {
    mode: 'naglasak',
    q: 'Koja su značenja riječi "luk"?',
    en: 'Meanings of luk:',
    opts: ['luk, luk u zidu, luk za strijele', 'samo povrće', 'luk i lug', 'luk i lijek'],
    answer: 'luk, luk u zidu, luk za strijele',
    tip: 'Onion, arch and bow — one form doing three jobs.',
  },
  {
    mode: 'naglasak',
    q: 'Zašto se te šale gube u pisanju?',
    en: 'Why do they vanish in writing?',
    opts: ['naglasak se ne bilježi', 'kraće je', 'pravopis ih briše', 'ne gube se'],
    answer: 'naglasak se ne bilježi',
    tip: 'Ordinary Croatian orthography does not mark it.',
  },
  {
    mode: 'naglasak',
    q: '"Sam sam." Što to znači?',
    en: 'What does Sam sam mean?',
    opts: ['sam sam', 'jesam ja', 'samo sam', 'sami smo'],
    answer: 'sam sam',
    tip: 'I am alone — two identical words, two different grammars.',
  },
  {
    mode: 'naglasak',
    q: 'Koliko naglasaka razlikuje hrvatski standard?',
    en: 'How many accents does the standard distinguish?',
    opts: ['četiri', 'dva', 'tri', 'šest'],
    answer: 'četiri',
    tip: 'Two rising, two falling — and most speakers use fewer in practice.',
  },
  {
    mode: 'naglasak',
    q: 'Je li nepoznavanje naglaska prepreka razumijevanju?',
    en: 'Does accent matter for comprehension?',
    opts: ['rijetko, osim u šalama', 'uvijek', 'nikad', 'samo u pjesmi'],
    answer: 'rijetko, osim u šalama',
    tip: 'Context resolves nearly everything — except a pun, which needs the ambiguity.',
  },

  // ── nastavci ──────────────────────────────────────────────────────────────
  {
    mode: 'nastavci',
    q: 'Što u hrvatskom drži ulogu riječi u rečenici?',
    en: 'What fixes the role of a word?',
    opts: ['nastavak', 'red riječi', 'naglasak', 'prijedlog'],
    answer: 'nastavak',
    tip: 'Which is why an ending can be a punchline.',
  },
  {
    mode: 'nastavci',
    q: '"Vidio je psa." Tko koga vidi?',
    en: 'Who sees whom?',
    opts: ['on vidi psa', 'pas vidi njega', 'nejasno je', 'oboje'],
    answer: 'on vidi psa',
    tip: 'psa is accusative, so the dog is the object whatever the order.',
  },
  {
    mode: 'nastavci',
    q: '"Psa je vidio." Mijenja li se tko koga vidi?',
    en: 'Does reordering change it?',
    opts: ['ne', 'da', 'ovisi o naglasku', 'ovisi o kontekstu'],
    answer: 'ne',
    tip: 'The ending carries the role; the order carries only the emphasis.',
  },
  {
    mode: 'nastavci',
    q: 'Zašto je to plodno tlo za šalu?',
    en: 'Why is that fertile ground for jokes?',
    opts: [
      'jedan glas mijenja cijelu situaciju',
      'riječi su duge',
      'red je slobodan',
      'nije plodno',
    ],
    answer: 'jedan glas mijenja cijelu situaciju',
    tip: 'A single letter reassigns who did what to whom.',
  },
  {
    mode: 'nastavci',
    q: 'Što se dogodi ako se zamijene padeži u šali?',
    en: 'What happens when the cases swap?',
    opts: ['zamijene se uloge', 'rečenica postaje negramatična', 'ništa', 'mijenja se vrijeme'],
    answer: 'zamijene se uloge',
    tip: 'And the sentence stays perfectly grammatical, which is the trap.',
  },
  {
    mode: 'nastavci',
    q: 'Koji padež nosi izravni objekt?',
    en: 'Which case carries the direct object?',
    opts: ['akuzativ', 'genitiv', 'dativ', 'instrumental'],
    answer: 'akuzativ',
    tip: 'And for animate masculines it looks like the genitive, which adds a layer.',
  },
  {
    mode: 'nastavci',
    q: 'Zašto engleski nema tu vrstu šale?',
    en: 'Why does English lack this kind of joke?',
    opts: ['ulogu nosi red riječi', 'nema homonima', 'nema naglaska', 'ima je jednako'],
    answer: 'ulogu nosi red riječi',
    tip: 'English puns on words; Croatian can also pun on grammar.',
  },
  {
    mode: 'nastavci',
    q: 'Što je "homograf"?',
    en: 'What is a homograph?',
    opts: ['ista slova, drugo značenje', 'isti izgovor', 'isti korijen', 'isti nastavak'],
    answer: 'ista slova, drugo značenje',
    tip: 'grad, kosa, luk — and in Croatian the accent usually separates them.',
  },

  // ── registar ──────────────────────────────────────────────────────────────
  {
    mode: 'registar',
    q: 'Što postiže "računčić" za račun od 400 eura?',
    en: 'What does računčić achieve?',
    opts: ['komični nesklad', 'nježnost', 'ublažavanje', 'preciznost'],
    answer: 'komični nesklad',
    tip: 'A diminutive on something large is the standard comic mismatch.',
  },
  {
    mode: 'registar',
    q: 'Koji je uobičajeni komični postupak s deminutivom?',
    en: 'The standard comic use:',
    opts: ['primijeniti ga na nešto veliko', 'na nešto malo', 'na osobu', 'na glagol'],
    answer: 'primijeniti ga na nešto veliko',
    tip: 'The gap between the suffix and the thing is where the joke sits.',
  },
  {
    mode: 'registar',
    q: 'Što je prelazak u kajkavski usred razgovora?',
    en: 'What is a switch into kajkavian?',
    opts: ['komični registar', 'pogreška', 'ismijavanje kraja', 'nemar'],
    answer: 'komični registar',
    tip: 'A register choice — and reading it as mockery is a misreading.',
  },
  {
    mode: 'registar',
    q: 'Je li prelazak u narječje pogrdan?',
    en: 'Is the switch derogatory?',
    opts: ['ne, obično nije', 'uvijek jest', 'samo prema selu', 'samo u medijima'],
    answer: 'ne, obično nije',
    tip: 'Speakers switch into their own varieties for comic effect constantly.',
  },
  {
    mode: 'registar',
    q: 'Što deminutiv obično znači izvan šale?',
    en: 'What does a diminutive usually signal?',
    opts: ['toplinu', 'veličinu', 'prijezir', 'formalnost'],
    answer: 'toplinu',
    tip: 'Warmth, which is exactly what makes the comic mismatch work.',
  },
  {
    mode: 'registar',
    q: 'Je li propuštanje šale na C2 razini neuobičajeno?',
    en: 'Is missing a joke unusual at C2?',
    opts: ['ne, posve je normalno', 'da', 'samo za odrasle učenike', 'samo u govoru'],
    answer: 'ne, posve je normalno',
    tip: 'The lesson says so, and the achievable goal is recognising the device.',
  },
  {
    mode: 'registar',
    q: 'Što je realan cilj na ovoj razini?',
    en: 'What is the realistic goal?',
    opts: ['prepoznati postupak', 'uhvatiti svaku šalu', 'izmišljati šale', 'prevesti ih'],
    answer: 'prepoznati postupak',
    tip: 'Knowing that a pun happened is most of the way there.',
  },
  {
    mode: 'registar',
    q: 'Koji je najbolji odgovor kad šala promakne?',
    en: 'When a joke goes past you:',
    opts: ['pitati o čemu je riječ', 'nasmijati se svejedno', 'šutjeti', 'promijeniti temu'],
    answer: 'pitati o čemu je riječ',
    tip: 'Explaining a pun is something Croatians enjoy doing.',
  },
];
