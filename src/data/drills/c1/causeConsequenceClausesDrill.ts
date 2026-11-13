// src/data/drills/c1/causeConsequenceClausesDrill.ts
//
// C1 CAUSE AND CONSEQUENCE — the drill for the `cause-consequence-clauses` lesson
// (C1 position 23).
//
// Three modes, eight items each:
//   uzrok      — causal connectors: jer after the main clause; budući da, kako,
//                zato što and s obzirom na to da when the cause comes first
//   posljedica — consequential connectors: tako da, tako / toliko … da, pa, te
//   zarez      — the comma after a fronted clause, and the full form of s obzirom na to da
//
// Causal pošto is common in speech; this drill never offers it, as either right or
// wrong, in a causal slot. Where two connectors both fit, only one is ever offered.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CAUSE_CONSEQUENCE_CLAUSES_MODE_LABELS: Record<string, string> = {
  uzrok: '❓ Uzrok',
  posljedica: '➡️ Posljedica',
  zarez: '✏️ Zarez i oblik',
};

export const CAUSE_CONSEQUENCE_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Ostali smo kod kuće ____ je padala kiša.',
    en: 'We stayed at home because it was raining.',
    opts: ['jer', 'pa', 'tako da', 'te'],
    answer: 'jer',
    tip: 'The cause follows the main clause.',
  },
  {
    mode: 'uzrok',
    q: '____ nije bilo autobusa, išli smo pješice.',
    en: 'As there was no bus, we walked.',
    opts: ['Kako', 'Jer', 'Pa', 'Te'],
    answer: 'Kako',
    tip: 'Causal kako opens the sentence; jer cannot.',
  },
  {
    mode: 'uzrok',
    q: '____ je bio bolestan, nije došao na posao.',
    en: 'Since he was ill, he did not come to work.',
    opts: ['Budući da', 'Jer', 'Tako da', 'Pa'],
    answer: 'Budući da',
    tip: 'A cause placed first.',
  },
  {
    mode: 'uzrok',
    q: '____ je rok istekao, zahtjev je odbijen.',
    en: 'Given that the deadline had passed, the request was refused.',
    opts: ['S obzirom na to da', 'Tako da', 'Jer', 'Te'],
    answer: 'S obzirom na to da',
    tip: 'A formal cause placed first.',
  },
  {
    mode: 'uzrok',
    q: 'Nisam ti se javio ____ sam izgubio mobitel.',
    en: 'I did not get in touch because I lost my phone.',
    opts: ['zato što', 'tako da', 'pa', 'te'],
    answer: 'zato što',
    tip: 'The second clause gives the reason.',
  },
  {
    mode: 'uzrok',
    q: '____ je most bio zatvoren zbog bure, na otok smo išli trajektom.',
    en: 'As the bridge was closed because of the bora, we went to the island by ferry.',
    opts: ['Kako', 'Pa', 'Te', 'Jer'],
    answer: 'Kako',
    tip: 'A formal cause that must open the sentence.',
  },
  {
    mode: 'uzrok',
    q: 'Koji veznik uvodi uzrok?',
    en: 'Which connector introduces a cause?',
    opts: ['budući da', 'tako da', 'pa', 'te'],
    answer: 'budući da',
    tip: 'A cause answers "why?".',
  },
  {
    mode: 'uzrok',
    q: 'Što u pažljivom standardu znači pošto u rečenici „Pošto je ručao, legao je“?',
    en: 'In careful standard Croatian, what does the first word of “Pošto je ručao, legao je” mean?',
    opts: ['nakon što', 'zato što', 'tako da', 'iako'],
    answer: 'nakon što',
    tip: 'In careful standard it is a time conjunction.',
  },
  // ── posljedica ────────────────────────────────────────────────────────────
  {
    mode: 'posljedica',
    q: 'Bilo je tako hladno ____ se jezero zaledilo.',
    en: 'It was so cold that the lake froze.',
    opts: ['da', 'jer', 'kako', 'budući da'],
    answer: 'da',
    tip: 'tako in the main clause is answered by da.',
  },
  {
    mode: 'posljedica',
    q: 'Na koncert je došlo ____ ljudi da su mnogi stajali vani.',
    en: 'So many people came to the concert that many stood outside.',
    opts: ['toliko', 'zato', 'kako', 'budući'],
    answer: 'toliko',
    tip: 'A quantity of people sets up the result.',
  },
  {
    mode: 'posljedica',
    q: 'Promet je stajao dva sata ____ smo zakasnili.',
    en: 'Traffic stood still for two hours, so we were late.',
    opts: ['tako da', 'budući da', 'jer', 'kako'],
    answer: 'tako da',
    tip: 'The second clause is the result.',
  },
  {
    mode: 'posljedica',
    q: 'Bio sam umoran ____ sam rano legao.',
    en: 'I was tired, so I went to bed early.',
    opts: ['pa', 'jer', 'budući da', 'kako'],
    answer: 'pa',
    tip: 'The everyday link for a consequence.',
  },
  {
    mode: 'posljedica',
    q: 'Cesta je zatvorena ____ je promet preusmjeren.',
    en: 'The road is closed, and so traffic has been diverted.',
    opts: ['te', 'jer', 'budući da', 'zato što'],
    answer: 'te',
    tip: 'A formal link for a consequence.',
  },
  {
    mode: 'posljedica',
    q: 'Toliko je radio ____ se razbolio.',
    en: 'He worked so much that he fell ill.',
    opts: ['da', 'jer', 'kako bi', 'budući da'],
    answer: 'da',
    tip: 'toliko … da states what followed.',
  },
  {
    mode: 'posljedica',
    q: 'Kiša je padala cijeli dan ____ je utakmica odgođena.',
    en: 'It rained all day, so the match was postponed.',
    opts: ['tako da', 'jer', 'kako', 'budući da'],
    answer: 'tako da',
    tip: 'The second clause is the result.',
  },
  {
    mode: 'posljedica',
    q: 'Koji veznik uvodi posljedicu?',
    en: 'Which connector introduces a consequence?',
    opts: ['tako da', 'budući da', 'jer', 'zato što'],
    answer: 'tako da',
    tip: 'A consequence answers "with what result?".',
  },
  // ── zarez ─────────────────────────────────────────────────────────────────
  {
    mode: 'zarez',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'Budući da je padala kiša, ostali smo kod kuće.',
      'Budući da je padala kiša ostali smo kod kuće.',
      'Budući, da je padala kiša, ostali smo kod kuće.',
      'Budući da, je padala kiša ostali smo kod kuće.',
    ],
    answer: 'Budući da je padala kiša, ostali smo kod kuće.',
    tip: 'A fronted clause is closed by a comma.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'Zato što je kasnio propustio je vlak.',
      'Zato, što je kasnio propustio je vlak.',
      'Zato što je kasnio, propustio je vlak.',
      'Zato što, je kasnio, propustio je vlak.',
    ],
    answer: 'Zato što je kasnio, propustio je vlak.',
    tip: 'Nothing splits the connector; a comma closes the fronted clause.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'Kako nije bilo taksija išli smo pješice.',
      'Kako nije bilo taksija, išli smo pješice.',
      'Kako, nije bilo taksija, išli smo pješice.',
      'Kako nije, bilo taksija išli smo pješice.',
    ],
    answer: 'Kako nije bilo taksija, išli smo pješice.',
    tip: 'A comma after the fronted cause.',
  },
  {
    mode: 'zarez',
    q: 'Koji je oblik standardan?',
    en: 'Which form is standard?',
    opts: ['s obzirom na to da', 'obzirom da', 's obzirom da', 'obzirom na to da'],
    answer: 's obzirom na to da',
    tip: 'The full connector keeps the opening preposition and the pronoun.',
  },
  {
    mode: 'zarez',
    q: 'Koja rečenica nije standardna?',
    en: 'Which sentence is not standard?',
    opts: [
      'Jer je padala kiša, ostali smo kod kuće.',
      'Ostali smo kod kuće jer je padala kiša.',
      'Zato što je padala kiša, ostali smo kod kuće.',
      'Kako je padala kiša, ostali smo kod kuće.',
    ],
    answer: 'Jer je padala kiša, ostali smo kod kuće.',
    tip: 'A jer clause follows the main clause.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'S obzirom na to da je kasno, idemo kući.',
      'S obzirom na to da je kasno idemo kući.',
      'S obzirom, na to da je kasno, idemo kući.',
      'S obzirom na to, da je kasno idemo kući.',
    ],
    answer: 'S obzirom na to da je kasno, idemo kući.',
    tip: 'The connector stays whole, and the fronted clause ends with a comma.',
  },
  {
    mode: 'zarez',
    q: 'Koja rečenica nije standardna?',
    en: 'Which sentence is not standard?',
    opts: [
      'Jer nema vremena, ne može doći.',
      'Ne može doći jer nema vremena.',
      'Budući da nema vremena, ne može doći.',
      'Kako nema vremena, ne može doći.',
    ],
    answer: 'Jer nema vremena, ne može doći.',
    tip: 'jer cannot open a sentence before its main clause.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'Pošto smo večerali izašli smo u šetnju.',
      'Pošto, smo večerali izašli smo u šetnju.',
      'Pošto smo večerali, izašli smo u šetnju.',
      'Pošto smo, večerali, izašli smo u šetnju.',
    ],
    answer: 'Pošto smo večerali, izašli smo u šetnju.',
    tip: 'A fronted time clause is closed by a comma too.',
  },
];
