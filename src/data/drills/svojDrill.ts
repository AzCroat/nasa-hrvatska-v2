// src/data/drills/svojDrill.ts
//
// A2 SVOJ — the drill for the `svoj` lesson.
//
// `svojmoj` already exists and is a genuine svoj-vs-moj screen, but it is B1
// while the lesson is A2, so the coupling could never reach it: the learner met
// the one construction English cannot express and was sent nowhere. This is the
// A2 drill; `svojmoj` stays in the pool for B1 and above.
//
// What makes svoj worth its own drill rather than a corner of a possessives
// round: getting it wrong does not sound wrong. "Ivan pere njegov auto" is a
// perfectly grammatical Croatian sentence — it just says Ivan is washing
// somebody else's car. There is no ungrammaticality for the learner's ear to
// catch, so the only way to acquire it is to be asked.
//
// Three modes:
//   izbor     — svoj or njegov/njezin/njihov
//   oblici    — the endings, which decline exactly like moj
//   znacenje  — reading the difference back out of a finished sentence

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const SVOJ_MODE_LABELS: Record<string, string> = {
  izbor: '🔁 Svoj ili njegov',
  oblici: '📐 Oblici',
  znacenje: '🔍 Što rečenica znači',
};

export const SVOJ_DRILL_DATA: ModeDrillItem[] = [
  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'Ivan pere ____ auto. (vlastiti)',
    en: 'Ivan is washing his own car.',
    opts: ['svoj', 'njegov', 'njegovog', 'njezin'],
    answer: 'svoj',
    tip: 'The owner IS the subject, so svoj. Njegov would be somebody else’s car.',
  },
  {
    mode: 'izbor',
    q: 'Ana voli ____ sestru. (vlastitu)',
    en: 'Ana loves her own sister.',
    opts: ['svoju', 'njezinu', 'njegovu', 'njihovu'],
    answer: 'svoju',
    tip: 'Ana is the subject and the owner → svoju.',
  },
  {
    mode: 'izbor',
    q: 'Marko je uzeo ____ knjigu. (Aninu)',
    en: 'Marko took her book. (Ana’s)',
    opts: ['njezinu', 'svoju', 'njegovu', 'njihovu'],
    answer: 'njezinu',
    tip: 'The owner is NOT the subject, so the ordinary possessive: njezinu.',
  },
  {
    mode: 'izbor',
    q: 'Djeca su pojela ____ ručak. (vlastiti)',
    en: 'The children ate their own lunch.',
    opts: ['svoj', 'njihov', 'njegov', 'naš'],
    answer: 'svoj',
    tip: 'Svoj covers every person — including "their own".',
  },
  {
    mode: 'izbor',
    q: 'Kada NE koristimo svoj?',
    en: 'When is svoj wrong?',
    opts: ['kad vlasnik nije subjekt', 'u množini', 'u prošlom vremenu', 'sa ženskim rodom'],
    answer: 'kad vlasnik nije subjekt',
    tip: 'That is the whole rule. Everything else about svoj follows from it.',
  },
  {
    mode: 'izbor',
    q: 'Uzimam ____ knjigu. (moju)',
    en: 'I am taking my book.',
    opts: ['svoju', 'mojoj', 'mene', 'meni'],
    answer: 'svoju',
    tip: 'With ja and ti, moju is not wrong — but svoju is far more natural.',
  },
  {
    mode: 'izbor',
    q: 'Oni su prodali ____ kuću. (susjedovu)',
    en: 'They sold their house. (the neighbour’s)',
    opts: ['njihovu', 'svoju', 'njegovu', 'našu'],
    answer: 'njihovu',
    tip: 'Not the subject’s house → njihovu.',
  },
  {
    mode: 'izbor',
    q: 'Petra razgovara sa ____ bratom. (vlastitim)',
    en: 'Petra is talking to her own brother.',
    opts: ['svojim', 'njezinim', 'njegovim', 'njihovim'],
    answer: 'svojim',
    tip: 'Instrumental of svoj: svojim. The case changes, the choice does not.',
  },

  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Vidim ____ brata. (svoj)',
    en: 'I see my own brother.',
    opts: ['svog', 'svoj', 'svoju', 'svom'],
    answer: 'svog',
    tip: 'Animate masculine accusative equals the genitive: svog brata.',
  },
  {
    mode: 'oblici',
    q: 'Živim u ____ kući. (svoj)',
    en: 'I live in my own house.',
    opts: ['svojoj', 'svoju', 'svoja', 'svojim'],
    answer: 'svojoj',
    tip: 'Locative feminine: u svojoj kući. Identical to u mojoj kući.',
  },
  {
    mode: 'oblici',
    q: 'Nemam ____ auta. (svoj)',
    en: 'I do not have my own car.',
    opts: ['svog', 'svoj', 'svojem', 'svojim'],
    answer: 'svog',
    tip: 'Genitive after nemati: svog auta.',
  },
  {
    mode: 'oblici',
    q: 'Pišem ____ prijatelju. (svoj)',
    en: 'I am writing to my own friend.',
    opts: ['svom', 'svog', 'svoj', 'svojim'],
    answer: 'svom',
    tip: 'Dative masculine: svom prijatelju.',
  },
  {
    mode: 'oblici',
    q: 'Kao koja se riječ sklanja "svoj"?',
    en: 'Svoj declines like which word?',
    opts: ['moj', 'taj', 'onaj', 'koji'],
    answer: 'moj',
    tip: 'svoj–svoja–svoje, exactly like moj–moja–moje. No new endings to learn.',
  },
  {
    mode: 'oblici',
    q: 'Čuvaju ____ stvari. (svoj, množina)',
    en: 'They are looking after their own things.',
    opts: ['svoje', 'svoji', 'svoja', 'svojim'],
    answer: 'svoje',
    tip: 'Feminine plural accusative: svoje stvari.',
  },
  {
    mode: 'oblici',
    q: 'Došao je sa ____ psom. (svoj)',
    en: 'He came with his own dog.',
    opts: ['svojim', 'svoj', 'svoga', 'svojem'],
    answer: 'svojim',
    tip: 'Instrumental masculine: sa svojim psom.',
  },
  {
    mode: 'oblici',
    q: 'To je ____ dijete. (svoj — nominativ)',
    en: 'That is one’s own child.',
    opts: ['svoje', 'svoj', 'svoja', 'svojim'],
    answer: 'svoje',
    tip: 'Neuter nominative: svoje dijete.',
  },

  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: '"Ivan pere njegov auto." Čiji je auto?',
    en: 'Whose car is it?',
    opts: ['nekoga drugoga', 'Ivanov', 'ničiji', 'ne može se znati'],
    answer: 'nekoga drugoga',
    tip: 'Njegov points AWAY from the subject. Ivan is washing someone else’s car.',
  },
  {
    mode: 'znacenje',
    q: '"Ana voli svoju sestru." Čija je sestra?',
    en: 'Whose sister?',
    opts: ['Anina', 'druge žene', 'Markova', 'nije rečeno'],
    answer: 'Anina',
    tip: 'Svoju points back at the subject: Ana’s own sister.',
  },
  {
    mode: 'znacenje',
    q: '"Uzeli su njihove stvari." Čije su stvari?',
    en: 'Whose things?',
    opts: ['tuđe', 'njihove vlastite', 'naše', 'nije važno'],
    answer: 'tuđe',
    tip: 'Njihove = other people’s. Their OWN things would be svoje stvari.',
  },
  {
    mode: 'znacenje',
    q: 'Koja rečenica znači "he is washing his own car"?',
    en: 'Which one means his own?',
    opts: ['Pere svoj auto.', 'Pere njegov auto.', 'Pere njegovog auta.', 'Pere mu auto.'],
    answer: 'Pere svoj auto.',
    tip: 'Only svoj can say "his own" without naming him again.',
  },
  {
    mode: 'znacenje',
    q: 'Zašto je pogreška sa "svoj" opasna?',
    en: 'Why is the svoj mistake dangerous?',
    opts: [
      'rečenica ostaje točna, ali mijenja značenje',
      'rečenica postaje negramatična',
      'mijenja vrijeme radnje',
      'ne razumije se ništa',
    ],
    answer: 'rečenica ostaje točna, ali mijenja značenje',
    tip: 'Nothing sounds wrong — you have simply said something you did not mean.',
  },
  {
    mode: 'znacenje',
    q: '"Marko je nazvao svoju majku." Čija majka?',
    en: 'Whose mother?',
    opts: ['Markova', 'tuđa', 'Anina', 'nije rečeno'],
    answer: 'Markova',
    tip: 'Subject = owner → svoju.',
  },
  {
    mode: 'znacenje',
    q: 'Na koga upućuje "svoj"?',
    en: 'What does svoj point to?',
    opts: ['na subjekt rečenice', 'na objekt', 'na govornika', 'na sugovornika'],
    answer: 'na subjekt rečenice',
    tip: 'Always the subject of its own clause — that is the entire definition.',
  },
  {
    mode: 'znacenje',
    q: '"Vratio sam mu njegovu knjigu." Je li to točno?',
    en: 'Is that correct?',
    opts: [
      'da — vlasnik nije subjekt',
      'ne — treba svoju',
      'ne — treba moju',
      'ne — treba njezinu',
    ],
    answer: 'da — vlasnik nije subjekt',
    tip: 'The subject is ja; the owner is on. Njegovu is exactly right here.',
  },
];
