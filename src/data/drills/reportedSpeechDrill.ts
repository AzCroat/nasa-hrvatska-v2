// src/data/drills/reportedSpeechDrill.ts
//
// B1 REPORTED SPEECH — the drill for the `reported-speech` lesson.
//
// CLAUDE.md names this lesson explicitly as the notable unmappable one: the pool
// HAS a reported-speech drill (`neizravni`), but it is B2, and the easier route
// for its `subordination` category was already taken by `relpron` — so mapping
// it would send a B1 learner to a relative-pronoun drill after a lesson on
// reporting what people said. Wrong drill, so no drill. This is the B1 drill,
// with its own category, so nothing has to be shared or displaced.
//
// The single rule worth the whole drill: **Croatian does not backshift.** English
// forces "he said he WAS coming"; Croatian keeps exactly what was said —
// *Rekao je da dolazi*. An English speaker will shift the tense for years unless
// something asks them not to, and the shifted version is grammatical, so nothing
// in the sentence flags it as wrong.
//
// Three modes:
//   vrijeme — the no-backshift rule
//   osobe   — what DOES move: pronouns, possessives, time words
//   pitanja — reporting questions and requests

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const REPORTED_SPEECH_MODE_LABELS: Record<string, string> = {
  vrijeme: '⏸️ Vrijeme se ne mijenja',
  osobe: '🔄 Što se ipak mijenja',
  pitanja: '❓ Pitanja i molbe',
};

export const REPORTED_SPEECH_DRILL_DATA: ModeDrillItem[] = [
  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: '"Dolazim." → Rekao je da ____.',
    en: 'He said he was coming.',
    opts: ['dolazi', 'je dolazio', 'će doći', 'dođe'],
    answer: 'dolazi',
    tip: 'Croatian keeps the ORIGINAL tense. English shifts to "was coming"; Croatian does not.',
  },
  {
    mode: 'vrijeme',
    q: '"Ne znam." → Rekla je da ____.',
    en: 'She said she did not know.',
    opts: ['ne zna', 'nije znala', 'neće znati', 'ne bi znala'],
    answer: 'ne zna',
    tip: 'Present stays present: rekla je da ne zna.',
  },
  {
    mode: 'vrijeme',
    q: '"Bio sam tamo." → Rekao je da ____ tamo.',
    en: 'He said he had been there.',
    opts: ['je bio', 'je bio bio', 'bude', 'bi bio'],
    answer: 'je bio',
    tip: 'Past stays past — there is no pluperfect shift.',
  },
  {
    mode: 'vrijeme',
    q: '"Doći ću." → Rekao je da ____.',
    en: 'He said he would come.',
    opts: ['će doći', 'je došao', 'dolazi', 'bi došao'],
    answer: 'će doći',
    tip: 'Future stays future: rekao je da će doći.',
  },
  {
    mode: 'vrijeme',
    q: 'Mijenja li hrvatski vrijeme u neizravnom govoru?',
    en: 'Does Croatian shift the tense?',
    opts: ['ne', 'da, uvijek', 'samo u prošlosti', 'samo u budućnosti'],
    answer: 'ne',
    tip: 'Never. Whatever they said, you keep — that is the whole rule.',
  },
  {
    mode: 'vrijeme',
    q: '"Radim."→ Rekla mi je da ____.',
    en: 'She told me she was working.',
    opts: ['radi', 'je radila', 'će raditi', 'radim'],
    answer: 'radi',
    tip: 'Present in, present out.',
  },
  {
    mode: 'vrijeme',
    q: 'Zašto je engleski govornik ovdje u nevolji?',
    en: 'Why does this trip English speakers up?',
    opts: [
      'engleski obavezno pomiče vrijeme',
      'hrvatski nema prošlo vrijeme',
      'hrvatski nema "da"',
      'nema razloga',
    ],
    answer: 'engleski obavezno pomiče vrijeme',
    tip: 'English backshifts automatically, so the habit transfers and produces a wrong meaning.',
  },
  {
    mode: 'vrijeme',
    q: '"Učim hrvatski." → Rekao je da ____ hrvatski.',
    en: 'He said he was learning Croatian.',
    opts: ['uči', 'je učio', 'će učiti', 'nauči'],
    answer: 'uči',
    tip: 'Still present: rekao je da uči hrvatski.',
  },

  // ── osobe ─────────────────────────────────────────────────────────────────
  {
    mode: 'osobe',
    q: '"Ja dolazim." → Rekao je da ____ dolazi.',
    en: 'He said HE was coming.',
    opts: ['on', 'ja', 'ti', 'mi'],
    answer: 'on',
    tip: 'The tense does not move, but the PERSON does: ja → on.',
  },
  {
    mode: 'osobe',
    q: '"Moja sestra." → Rekao je da je ____ sestra bolesna.',
    en: 'He said his sister was ill.',
    opts: ['njegova', 'moja', 'tvoja', 'svoja'],
    answer: 'njegova',
    tip: 'Possessives shift to your point of view: moja → njegova.',
  },
  {
    mode: 'osobe',
    q: '"Doći ću sutra." (rečeno prošli tjedan) → Rekao je da će doći ____.',
    en: 'He said he would come the next day.',
    opts: ['sljedeći dan', 'sutra', 'jučer', 'danas'],
    answer: 'sljedeći dan',
    tip: 'Reporting later moves the time words: sutra → sljedeći dan.',
  },
  {
    mode: 'osobe',
    q: 'Što se mijenja u neizravnom govoru?',
    en: 'What actually changes?',
    opts: ['osobe, posvojne riječi i vremenske oznake', 'glagolsko vrijeme', 'red riječi', 'ništa'],
    answer: 'osobe, posvojne riječi i vremenske oznake',
    tip: 'Everything that points at WHO and WHEN — but never the tense itself.',
  },
  {
    mode: 'osobe',
    q: '"Volim te." → Rekao mi je da ____ voli.',
    en: 'He told me he loved me.',
    opts: ['me', 'te', 'ga', 'nas'],
    answer: 'me',
    tip: 'You are the one being addressed, so te → me.',
  },
  {
    mode: 'osobe',
    q: '"Ovdje je lijepo." (rečeno drugdje) → Rekla je da je ____ lijepo.',
    en: 'She said it was nice there.',
    opts: ['tamo', 'ovdje', 'tu', 'ovamo'],
    answer: 'tamo',
    tip: 'Place words shift too if you are reporting somewhere else: ovdje → tamo.',
  },
  {
    mode: 'osobe',
    q: '"Mi idemo." → Rekli su da ____ idu.',
    en: 'They said they were going.',
    opts: ['oni', 'mi', 'vi', 'on'],
    answer: 'oni',
    tip: 'mi → oni, from their point of view to yours.',
  },
  {
    mode: 'osobe',
    q: '"Bio sam jučer." (rečeno danas) → Rekao je da je bio ____.',
    en: 'He said he had been there the day before.',
    opts: ['dan prije', 'jučer', 'sutra', 'danas'],
    answer: 'dan prije',
    tip: 'jučer → dan prije when the reporting happens later.',
  },

  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: '"Gdje živiš?" → Pitao je gdje ____.',
    en: 'He asked where I lived.',
    opts: ['živim', 'sam živio', 'ću živjeti', 'živiš'],
    answer: 'živim',
    tip: 'The question word stays, the person shifts, the tense does not.',
  },
  {
    mode: 'pitanja',
    q: '"Dolaziš li?" → Pitao je ____ dolazim.',
    en: 'He asked whether I was coming.',
    opts: ['je li', 'da', 'što', 'kako'],
    answer: 'je li',
    tip: 'A yes/no question is reported with je li (or li after the verb).',
  },
  {
    mode: 'pitanja',
    q: '"Pomozi mi." → Rekao mi je ____ mu pomognem.',
    en: 'He told me to help him.',
    opts: ['da', 'kako', 'što', 'ako'],
    answer: 'da',
    tip: 'A request becomes da + present: rekao mi je da mu pomognem.',
  },
  {
    mode: 'pitanja',
    q: '"Nemoj kasniti." → Rekla mi je da ne ____.',
    en: 'She told me not to be late.',
    opts: ['kasnim', 'kasniti', 'sam kasnio', 'ću kasniti'],
    answer: 'kasnim',
    tip: 'The negative request also becomes da + present: da ne kasnim.',
  },
  {
    mode: 'pitanja',
    q: 'Kako se prenosi zapovijed?',
    en: 'How is a command reported?',
    opts: ['da + prezent', 'infinitivom', 'imperativom', 'kondicionalom'],
    answer: 'da + prezent',
    tip: 'Never with the imperative itself — always da + present.',
  },
  {
    mode: 'pitanja',
    q: '"Kada stižeš?" → Pitala je kada ____.',
    en: 'She asked when I was arriving.',
    opts: ['stižem', 'sam stigao', 'ću stići', 'stigneš'],
    answer: 'stižem',
    tip: 'Question word kept, person shifted, tense untouched.',
  },
  {
    mode: 'pitanja',
    q: '"Zatvori prozor." → Rekao mi je da ____ prozor.',
    en: 'He told me to close the window.',
    opts: ['zatvorim', 'zatvoriti', 'zatvori', 'zatvaram'],
    answer: 'zatvorim',
    tip: 'da + first person present, because I am the one being told.',
  },
  {
    mode: 'pitanja',
    q: 'Zadržava li se upitna riječ?',
    en: 'Is the question word kept?',
    opts: ['da', 'ne', 'samo "gdje"', 'samo u prošlosti'],
    answer: 'da',
    tip: 'Gdje, kada, zašto, kako all stay exactly as they were.',
  },
];
