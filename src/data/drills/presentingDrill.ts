// src/data/drills/presentingDrill.ts
//
// B2 GIVING A PRESENTATION — the drill for the `presentations` lesson.
//
// The structure is signposting, and it is the difference between a talk an
// audience can follow and one they cannot. Croatian expects the turns to be
// announced out loud: *Podijelio sam izlaganje u tri dijela*, then *Prvo…*,
// *Zatim…*, *Prelazim na sljedeću točku*, *Na kraju…*. In English a speaker
// can get away with a pause; in a Croatian talk the phrase is expected and its
// absence reads as disorganisation.
//
// Two fixed forms carry weight. The opener is CONDITIONAL — *Danas bih vam
// želio predstaviti…* — because a bare *želim* announces rather than offers.
// And *Hvala na pažnji* is the close: it is fixed, it is expected, and stopping
// without it leaves a room unsure whether you have finished.
//
// The third piece is the question you cannot answer. *Ako sam dobro razumio,
// pitate…* checks the question and buys thinking time in one move.
//
// Three modes:
//   otvaranje — opening, and the conditional that does it
//   signali   — signposting every turn
//   pitanja   — the slide, the close, and the question you cannot answer

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PRESENTING_MODE_LABELS: Record<string, string> = {
  otvaranje: '🎤 Otvaranje',
  signali: '🧭 Signali',
  pitanja: '❓ Pitanja',
};

export const PRESENTING_DRILL_DATA: ModeDrillItem[] = [
  // ── otvaranje ─────────────────────────────────────────────────────────────
  {
    mode: 'otvaranje',
    q: 'Danas ____ vam želio predstaviti novi projekt.',
    en: 'Today I would like to present the new project.',
    opts: ['bih', 'ću', 'sam', 'bi'],
    answer: 'bih',
    tip: 'The CONDITIONAL opener. Želim vam predstaviti announces rather than offers.',
  },
  {
    mode: 'otvaranje',
    q: 'Kako žena otvara izlaganje?',
    en: 'A woman opens with:',
    opts: [
      'Danas bih vam željela predstaviti…',
      'Danas bih vam želio predstaviti…',
      'Danas ću vam predstaviti…',
      'Danas vam predstavljam…',
    ],
    answer: 'Danas bih vam željela predstaviti…',
    tip: 'The participle agrees with the speaker, in front of a room.',
  },
  {
    mode: 'otvaranje',
    q: 'Tema mog ____ je turizam. (izlaganje)',
    en: 'The topic of my talk is tourism.',
    opts: ['izlaganja', 'izlaganje', 'izlaganju', 'izlaganjem'],
    answer: 'izlaganja',
    tip: 'Genitive: tema mog izlaganja.',
  },
  {
    mode: 'otvaranje',
    q: 'Podijelio sam izlaganje ____ tri dijela.',
    en: 'I have divided the talk into three parts.',
    opts: ['u', 'na', 'za', 'po'],
    answer: 'u',
    tip: 'u plus the accusative for dividing INTO parts.',
  },
  {
    mode: 'otvaranje',
    q: 'Zašto se najavljuje struktura na početku?',
    en: 'Why announce the structure?',
    opts: ['slušatelj zna gdje se nalazi', 'zvuči formalnije', 'popunjava vrijeme', 'nema razloga'],
    answer: 'slušatelj zna gdje se nalazi',
    tip: 'Without it a listener cannot tell a digression from the next section.',
  },
  {
    mode: 'otvaranje',
    q: 'Hvala što ____ došli.',
    en: 'Thank you for coming.',
    opts: ['ste', 'su', 'smo', 'si'],
    answer: 'ste',
    tip: 'A room is Vi, so ste.',
  },
  {
    mode: 'otvaranje',
    q: 'Kako se pozdravlja skupina na početku?',
    en: 'Greeting a room:',
    opts: ['Dobar dan svima.', 'Bog svima.', 'Dobar dan tebi.', 'Pozdrav ekipa.'],
    answer: 'Dobar dan svima.',
    tip: 'Neutral and correct anywhere. Bog is for people you know.',
  },
  {
    mode: 'otvaranje',
    q: 'Koji je padež u "svima"?',
    en: 'Which case is svima?',
    opts: ['dativ', 'genitiv', 'lokativ', 'instrumental'],
    answer: 'dativ',
    tip: 'The greeting is TO everyone: dobar dan svima.',
  },

  // ── signali ───────────────────────────────────────────────────────────────
  {
    mode: 'signali',
    q: '____ na sljedeću točku.',
    en: 'I move on to the next point.',
    opts: ['Prelazim', 'Prelazi', 'Prijeći', 'Prelazimo se'],
    answer: 'Prelazim',
    tip: 'Prelazim na… — announced out loud at every turn.',
  },
  {
    mode: 'signali',
    q: 'Koji padež traži "prelaziti na"?',
    en: 'Which case after na here?',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'dativ'],
    answer: 'akuzativ',
    tip: 'Movement towards → accusative: na sljedeću točku.',
  },
  {
    mode: 'signali',
    q: 'Koji je uobičajeni redoslijed signala?',
    en: 'The usual sequence:',
    opts: [
      'Prvo… Zatim… Na kraju…',
      'Jedan… Dva… Tri…',
      'Uvod… Sredina… Kraj…',
      'Prije… Poslije… Onda…',
    ],
    answer: 'Prvo… Zatim… Na kraju…',
    tip: 'Three markers, and the audience never loses its place.',
  },
  {
    mode: 'signali',
    q: 'Što znači "zatim"?',
    en: 'What does zatim mean?',
    opts: ['next, then', 'therefore', 'meanwhile', 'finally'],
    answer: 'next, then',
    tip: 'Zatim / nakon toga / potom all do the same job.',
  },
  {
    mode: 'signali',
    q: 'Kao što ____ na slajdu…',
    en: 'As you can see on the slide…',
    opts: ['vidite', 'vidiš', 'vidimo', 'vidjeti'],
    answer: 'vidite',
    tip: 'Vi throughout, from the first word to the last.',
  },
  {
    mode: 'signali',
    q: 'Ovaj grafikon ____ rast prihoda.',
    en: 'This chart shows the growth in revenue.',
    opts: ['pokazuje', 'pokazuju', 'pokazati', 'pokazan'],
    answer: 'pokazuje',
    tip: 'Grafikon is singular masculine.',
  },
  {
    mode: 'signali',
    q: 'Obratite ____ na treći stupac.',
    en: 'Note the third column in particular.',
    opts: ['pozornost', 'pozornosti', 'pozornošću', 'pozoran'],
    answer: 'pozornost',
    tip: 'Obratiti pozornost NA plus the accusative.',
  },
  {
    mode: 'signali',
    q: 'Što znači "Brojke govore same za sebe"?',
    en: 'What does it mean?',
    opts: [
      'podaci su dovoljno jasni',
      'brojke su netočne',
      'treba ih objasniti',
      'brojke se ponavljaju',
    ],
    answer: 'podaci su dovoljno jasni',
    tip: 'The figures speak for themselves — and it saves a slide of commentary.',
  },

  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: 'Kako se zatvara izlaganje?',
    en: 'How does a talk close?',
    opts: ['Hvala na pažnji.', 'To je sve.', 'Gotov sam.', 'Doviđenja.'],
    answer: 'Hvala na pažnji.',
    tip: 'Fixed and expected. Without it a room is unsure you have finished.',
  },
  {
    mode: 'pitanja',
    q: 'Koji padež traži "hvala na"?',
    en: 'Which case after hvala na?',
    opts: ['lokativ', 'akuzativ', 'genitiv', 'dativ'],
    answer: 'lokativ',
    tip: 'hvala NA plus the locative — the same government as čestitam na.',
  },
  {
    mode: 'pitanja',
    q: 'Ako sam dobro ____, pitate o troškovima.',
    en: 'If I have understood correctly, you are asking about the costs.',
    opts: ['razumio', 'razumijem', 'razumjeti', 'razumljiv'],
    answer: 'razumio',
    tip: 'Checks the question and buys thinking time in one move.',
  },
  {
    mode: 'pitanja',
    q: 'Što učiniti s pitanjem na koje ne znate odgovor?',
    en: 'A question you cannot answer:',
    opts: [
      'reći da ćete provjeriti i javiti',
      'improvizirati',
      'prijeći na sljedeće',
      'reći da nije važno',
    ],
    answer: 'reći da ćete provjeriti i javiti',
    tip: 'Provjerit ću i javiti vam. It costs nothing and is believed.',
  },
  {
    mode: 'pitanja',
    q: 'Ima li ____ pitanja?',
    en: 'Are there any questions?',
    opts: ['kakvih', 'kakve', 'kakva', 'kakvim'],
    answer: 'kakvih',
    tip: 'Ima takes the GENITIVE: ima li kakvih pitanja?',
  },
  {
    mode: 'pitanja',
    q: 'Što znači "Ukratko, …" na kraju dijela?',
    en: 'What does it signal?',
    opts: ['sažetak', 'novu točku', 'primjer', 'pitanje'],
    answer: 'sažetak',
    tip: 'It signals a summary — and warns the audience to listen.',
  },
  {
    mode: 'pitanja',
    q: 'Vratit ____ se na to kasnije.',
    en: 'I will come back to that later.',
    opts: ['ću', 'ćemo', 'će', 'bih'],
    answer: 'ću',
    tip: 'Vratit ću se na to — and the clitic sits in second position.',
  },
  {
    mode: 'pitanja',
    q: 'Zašto je "Hvala na pažnji" bolje od "To je sve"?',
    en: 'Why the fixed close?',
    opts: ['jasno označava kraj i zahvaljuje', 'dulje je', 'formalnije zvuči', 'nema razlike'],
    answer: 'jasno označava kraj i zahvaljuje',
    tip: 'It ends the talk and thanks the room in three words.',
  },
];
