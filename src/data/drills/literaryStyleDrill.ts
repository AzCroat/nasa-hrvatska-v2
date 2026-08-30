// src/data/drills/literaryStyleDrill.ts
//
// C2 KNJIŽEVNI STIL — the drill for the `knjizevni-stil` lesson.
//
// The AORIST and the IMPERFECT are dead in speech and entirely alive in
// literature, so a learner who has never met them opens a novel and finds verbs
// they cannot parse. *Reče i ode* is aorist — sudden, elevated, the default
// narrative tense of older prose. *Sjedaše i šutjaše* is imperfect — sustained,
// lyrical.
//
// FREE INDIRECT STYLE puts a character's thought into the narrator's grammar,
// with no *mislio je da* to mark it. The reader has to notice that the voice
// changed while the person and tense did not.
//
// DIALECT IN DIALOGUE IS BIOGRAPHY: one *kaj* places a character
// geographically and socially in a single line, and a translator who
// standardises it has deleted the characterisation.
//
// And the long literary sentence is a STRUCTURE. Find the main clause, then
// reread — the instruction the lesson closes on.
//
// Three modes:
//   vremena — the aorist and the imperfect
//   glas    — free indirect style and the historic present
//   citanje — dialect as characterisation, and parsing a long sentence

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const LITERARY_STYLE_MODE_LABELS: Record<string, string> = {
  vremena: '📜 Aorist i imperfekt',
  glas: '🗣️ Glas pripovjedača',
  citanje: '🔍 Čitanje',
};

export const LITERARY_STYLE_DRILL_DATA: ModeDrillItem[] = [
  // ── vremena ───────────────────────────────────────────────────────────────
  {
    mode: 'vremena',
    q: 'Koje je vrijeme "reče"?',
    en: 'What tense is reče?',
    opts: ['aorist', 'imperfekt', 'perfekt', 'prezent'],
    answer: 'aorist',
    tip: 'Sudden, elevated, and the default narrative tense of older prose.',
  },
  {
    mode: 'vremena',
    q: 'Koje je vrijeme "bijaše"?',
    en: 'What tense is bijaše?',
    opts: ['imperfekt', 'aorist', 'pluskvamperfekt', 'kondicional'],
    answer: 'imperfekt',
    tip: 'Sustained past — the lyrical one.',
  },
  {
    mode: 'vremena',
    q: 'Što aorist prenosi što perfekt ne prenosi?',
    en: 'What does the aorist add?',
    opts: ['naglost i uzvišenost', 'dovršenost', 'trajanje', 'sigurnost'],
    answer: 'naglost i uzvišenost',
    tip: 'The perfect reports; the aorist stages.',
  },
  {
    mode: 'vremena',
    q: 'Što prenosi imperfekt?',
    en: 'What does the imperfect convey?',
    opts: ['trajno stanje u prošlosti', 'jednokratan čin', 'budućnost u prošlosti', 'pretpostavku'],
    answer: 'trajno stanje u prošlosti',
    tip: 'Sjedaše i šutjaše — he sat and was silent, at length.',
  },
  {
    mode: 'vremena',
    q: 'Gdje su ta vremena živa?',
    en: 'Where are they alive?',
    opts: ['u književnosti', 'u govoru', 'u novinama', 'u pravu'],
    answer: 'u književnosti',
    tip: 'Dead in speech, everywhere in literary and older texts.',
  },
  {
    mode: 'vremena',
    q: 'Aorist od "otići" u 3. licu jednine je ____.',
    en: 'aorist of otići, 3rd singular:',
    opts: ['ode', 'otiđe', 'otišao je', 'odlazi'],
    answer: 'ode',
    tip: 'Reče i ode — the pairing you meet most.',
  },
  {
    mode: 'vremena',
    q: 'Što je "historijski prezent"?',
    en: 'What is the historic present?',
    opts: [
      'prezent za prošli događaj',
      'prezent za sadašnjost',
      'staro vrijeme',
      'pripovjedni aorist',
    ],
    answer: 'prezent za prošli događaj',
    tip: 'Ulazi on i vidi… — it puts the reader inside the moment.',
  },
  {
    mode: 'vremena',
    q: 'Što postiže inverzija "Dođe zima"?',
    en: 'What does the inversion achieve?',
    opts: ['ističe događaj', 'ističe subjekt', 'skraćuje', 'formalizira'],
    answer: 'ističe događaj',
    tip: 'The verb first foregrounds the happening rather than the thing.',
  },

  // ── glas ──────────────────────────────────────────────────────────────────
  {
    mode: 'glas',
    q: 'Što je "slobodni neupravni govor"?',
    en: 'What is free indirect style?',
    opts: [
      'misao lika u gramatici pripovjedača',
      'citat bez navodnika',
      'unutarnji monolog u prvom licu',
      'dijalog bez crtica',
    ],
    answer: 'misao lika u gramatici pripovjedača',
    tip: 'The voice changes while the person and tense do not.',
  },
  {
    mode: 'glas',
    q: 'Što ga NE označava?',
    en: 'What does not mark it?',
    opts: ['uvodni "mislio je da"', 'promjena leksika', 'promjena tona', 'retoričko pitanje'],
    answer: 'uvodni "mislio je da"',
    tip: 'Its whole point is that the introducing clause is absent.',
  },
  {
    mode: 'glas',
    q: 'Po čemu se prepoznaje?',
    en: 'How do you spot it?',
    opts: ['rječnik i ton pripadaju liku', 'po vremenu', 'po padežu', 'po duljini'],
    answer: 'rječnik i ton pripadaju liku',
    tip: 'The narrator would not have chosen those words.',
  },
  {
    mode: 'glas',
    q: 'Zašto pisci posežu za njim?',
    en: 'Why do writers use it?',
    opts: ['blizina lika bez prekida pripovijedanja', 'kraće je', 'formalnije je', 'lakše se piše'],
    answer: 'blizina lika bez prekida pripovijedanja',
    tip: 'You get inside the character without stopping to announce it.',
  },
  {
    mode: 'glas',
    q: 'Što je "arhaizam"?',
    en: 'What is an archaism?',
    opts: ['zastarjela riječ', 'dijalektizam', 'posuđenica', 'kovanica'],
    answer: 'zastarjela riječ',
    tip: 'vazda, tja, spomen — and they signal distance in time.',
  },
  {
    mode: 'glas',
    q: 'Što signalizira arhaizam u modernom tekstu?',
    en: 'What does an archaism signal?',
    opts: ['vremensku distancu', 'nemar', 'formalnost', 'regiju'],
    answer: 'vremensku distancu',
    tip: 'Deliberate distance, not carelessness.',
  },
  {
    mode: 'glas',
    q: 'Što znači "vazda"?',
    en: 'What does vazda mean?',
    opts: ['uvijek', 'nikad', 'odmah', 'možda'],
    answer: 'uvijek',
    tip: 'An archaism you will meet in older prose and in some dialects.',
  },
  {
    mode: 'glas',
    q: 'Što znači "jur"?',
    en: 'What does jur mean?',
    opts: ['već', 'jer', 'jur ne postoji', 'jedva'],
    answer: 'već',
    tip: 'Common in older texts, gone from the modern language.',
  },

  // ── citanje ───────────────────────────────────────────────────────────────
  {
    mode: 'citanje',
    q: 'Što narječje u dijalogu radi?',
    en: 'What does dialect in dialogue do?',
    opts: [
      'smješta lika društveno i zemljopisno',
      'ukrašava tekst',
      'označava starinu',
      'ništa posebno',
    ],
    answer: 'smješta lika društveno i zemljopisno',
    tip: 'Biography in one line — and a translator who standardises it deletes it.',
  },
  {
    mode: 'citanje',
    q: 'Što se izgubi ako se dijalog standardizira?',
    en: 'What is lost by standardising it?',
    opts: ['karakterizacija', 'značenje', 'ritam', 'ništa'],
    answer: 'karakterizacija',
    tip: 'The sentence still means the same and tells you nothing about who said it.',
  },
  {
    mode: 'citanje',
    q: 'Što se traži prvo u dugoj književnoj rečenici?',
    en: 'What do you find first?',
    opts: ['glavna rečenica', 'zadnji zarez', 'subjekt', 'glagolski prilog'],
    answer: 'glavna rečenica',
    tip: 'Find it, then reread. The rest hangs off it.',
  },
  {
    mode: 'citanje',
    q: 'Je li duga književna rečenica nemarna?',
    en: 'Is it sloppy?',
    opts: ['ne, građena je', 'da', 'ovisi o piscu', 'ovisi o razdoblju'],
    answer: 'ne, građena je',
    tip: 'Longer, not looser — which is why finding the spine works.',
  },
  {
    mode: 'citanje',
    q: 'Koje se vrijeme najčešće susreće u starijoj pripovjednoj prozi?',
    en: 'Commonest narrative tense in older prose:',
    opts: ['aorist', 'perfekt', 'prezent', 'futur'],
    answer: 'aorist',
    tip: 'With the imperfect for background and the pluperfect for what came before.',
  },
  {
    mode: 'citanje',
    q: 'Što je pluskvamperfekt?',
    en: 'What is the pluperfect?',
    opts: [
      'radnja prije druge prošle radnje',
      'davna prošlost',
      'dovršena sadašnjost',
      'pripovjedni prezent',
    ],
    answer: 'radnja prije druge prošle radnje',
    tip: 'bio je došao — and it sequences a narrative that moves backwards.',
  },
  {
    mode: 'citanje',
    q: 'Zašto se književni tekst ne čita s rječnikom u ruci?',
    en: 'Why not read with a dictionary?',
    opts: ['gubi se rečenična cjelina', 'sporo je', 'rječnik je nepotpun', 'treba ga čitati'],
    answer: 'gubi se rečenična cjelina',
    tip: 'The same instruction the B2 literature lesson gave: page first, words after.',
  },
  {
    mode: 'citanje',
    q: 'Koji je red napada na tešku rečenicu?',
    en: 'The order of attack:',
    opts: [
      'glagoli, pa struktura, pa rječnik',
      'rječnik, pa glagoli',
      'od kraja prema početku',
      'redom',
    ],
    answer: 'glagoli, pa struktura, pa rječnik',
    tip: 'Verbs carry the frame; the vocabulary is the last thing you need.',
  },
];
