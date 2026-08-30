// src/data/drills/clothingDrill.ts
//
// A2 CLOTHES — the drill for the `clothes-appearance` lesson.
//
// Three things sit under the vocabulary. The verb is *nositi*, not *imati* — a
// learner who reaches for "I have a red shirt" produces a sentence about
// ownership when they meant one about what is on them. What you wear takes the
// accusative, so the adjective has to move with it: *crvena majica* becomes
// *crvenu majicu* the moment it is worn.
//
// Then the garments that are ALWAYS plural: *hlače*, *traperice*, *cipele*,
// *tenisice*, *čarape*. Not "a pair of" — plural full stop, which means plural
// agreement everywhere (*nove hlače*, *crne cipele*) and no singular to fall
// back on.
//
// Three modes:
//   nositi   — the verb and the accusative object it takes
//   slaganje — the plural-only garments, and colours agreeing like adjectives
//   ducan    — the shop exchange, start to finish

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const CLOTHING_MODE_LABELS: Record<string, string> = {
  nositi: '👕 Nositi',
  slaganje: '🎨 Slaganje',
  ducan: '🛍️ U dućanu',
};

export const CLOTHING_DRILL_DATA: ModeDrillItem[] = [
  // ── nositi ────────────────────────────────────────────────────────────────
  {
    mode: 'nositi',
    q: '____ crvenu majicu.',
    en: 'I am wearing a red T-shirt.',
    opts: ['Nosim', 'Imam', 'Držim', 'Stavljam'],
    answer: 'Nosim',
    tip: 'The verb for wearing is nositi. Imam would say you own it.',
  },
  {
    mode: 'nositi',
    q: 'Nosim ____. (bijela košulja)',
    en: 'I am wearing a white shirt.',
    opts: ['bijelu košulju', 'bijela košulja', 'bijele košulje', 'bijelom košuljom'],
    answer: 'bijelu košulju',
    tip: 'Accusative, and the adjective moves with the noun.',
  },
  {
    mode: 'nositi',
    q: 'Koji padež traži "nositi"?',
    en: 'Which case does nositi take?',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'instrumental'],
    answer: 'akuzativ',
    tip: 'An ordinary direct object.',
  },
  {
    mode: 'nositi',
    q: 'Nosi ____. (crni džemper)',
    en: 'He is wearing a black jumper.',
    opts: ['crni džemper', 'crnog džempera', 'crnom džemperu', 'crnim džemperom'],
    answer: 'crni džemper',
    tip: 'Džemper is masculine inanimate, so the accusative looks like the nominative.',
  },
  {
    mode: 'nositi',
    q: 'Koji glagol znači "to put on"?',
    en: 'Which verb means to put on?',
    opts: ['obući', 'nositi', 'skinuti', 'probati'],
    answer: 'obući',
    tip: 'Obući is the action, nositi the state. Skinuti is to take off.',
  },
  {
    mode: 'nositi',
    q: 'Zimi nosim ____. (topao kaput)',
    en: 'In winter I wear a warm coat.',
    opts: ['topao kaput', 'toplog kaputa', 'toplom kaputu', 'toplim kaputom'],
    answer: 'topao kaput',
    tip: 'topao kaput — and zimi is the bare adverb, with no preposition.',
  },
  {
    mode: 'nositi',
    q: 'Što je "šal"?',
    en: 'What is šal?',
    opts: ['scarf', 'hat', 'glove', 'belt'],
    answer: 'scarf',
    tip: 'šal. A cap is kapa.',
  },
  {
    mode: 'nositi',
    q: 'Što je "haljina"?',
    en: 'What is haljina?',
    opts: ['dress', 'skirt', 'blouse', 'coat'],
    answer: 'dress',
    tip: 'haljina. A skirt is suknja.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Koje su riječi uvijek u množini?',
    en: 'Which are always plural?',
    opts: ['hlače i cipele', 'majica i kapa', 'haljina i suknja', 'šal i kaput'],
    answer: 'hlače i cipele',
    tip: 'hlače, traperice, cipele, tenisice, čarape — plural, with no singular.',
  },
  {
    mode: 'slaganje',
    q: 'Kupujem ____ hlače. (nov)',
    en: 'I am buying new trousers.',
    opts: ['nove', 'novu', 'novi', 'novo'],
    answer: 'nove',
    tip: 'Plural noun → plural adjective: nove hlače.',
  },
  {
    mode: 'slaganje',
    q: 'Nosim ____ cipele. (crn)',
    en: 'I am wearing black shoes.',
    opts: ['crne', 'crnu', 'crni', 'crno'],
    answer: 'crne',
    tip: 'crne cipele.',
  },
  {
    mode: 'slaganje',
    q: '____ hlače su skupe.',
    en: 'These trousers are expensive.',
    opts: ['Ove', 'Ova', 'Ovaj', 'Ovo'],
    answer: 'Ove',
    tip: 'The demonstrative agrees too: ove hlače su skupe.',
  },
  {
    mode: 'slaganje',
    q: 'Imam ____ majicu. (plav)',
    en: 'I have a blue T-shirt.',
    opts: ['plavu', 'plava', 'plavi', 'plavo'],
    answer: 'plavu',
    tip: 'Colours agree like any adjective, and majicu is accusative.',
  },
  {
    mode: 'slaganje',
    q: 'Kaput je ____. (zelen)',
    en: 'The coat is green.',
    opts: ['zelen', 'zelena', 'zeleno', 'zelene'],
    answer: 'zelen',
    tip: 'Kaput is masculine, and after je the short form is standard.',
  },
  {
    mode: 'slaganje',
    q: 'Kupila je ____ traperice. (siv)',
    en: 'She bought grey jeans.',
    opts: ['sive', 'sivu', 'sivi', 'sivo'],
    answer: 'sive',
    tip: 'Traperice are plural, so sive.',
  },
  {
    mode: 'slaganje',
    q: 'Čarape su ____. (bijel)',
    en: 'The socks are white.',
    opts: ['bijele', 'bijela', 'bijeli', 'bijelo'],
    answer: 'bijele',
    tip: 'bijele čarape.',
  },

  // ── ducan ─────────────────────────────────────────────────────────────────
  {
    mode: 'ducan',
    q: 'Kako pitate smijete li isprobati?',
    en: 'How do you ask to try something on?',
    opts: ['Mogu li ovo probati?', 'Hoću ovo probati.', 'Probam li ovo?', 'Dajte mi probati.'],
    answer: 'Mogu li ovo probati?',
    tip: 'Mogu li…? — the polite way to ask permission.',
  },
  {
    mode: 'ducan',
    q: 'Što je "kabina"?',
    en: 'What is kabina?',
    opts: ['fitting room', 'till', 'shelf', 'entrance'],
    answer: 'fitting room',
    tip: 'Gdje je kabina?',
  },
  {
    mode: 'ducan',
    q: 'Kako tražite veći broj?',
    en: 'How do you ask for a bigger size?',
    opts: ['Imate li veći broj?', 'Imate li velik broj?', 'Ima li veći broj?', 'Dajte veći broj.'],
    answer: 'Imate li veći broj?',
    tip: 'Veći is the comparative, and Imate is the Vi form a shop assistant gets.',
  },
  {
    mode: 'ducan',
    q: 'Prodavačica pita: Koja je vaša ____?',
    en: 'What size are you?',
    opts: ['veličina', 'veliko', 'veličanstvo', 'visina'],
    answer: 'veličina',
    tip: 'veličina — size. Visina is height.',
  },
  {
    mode: 'ducan',
    q: 'Kako se kaže "it is too small for me"?',
    en: 'It is too small for me.',
    opts: ['Malo mi je.', 'Malo me je.', 'Malo sam.', 'Mali mi je.'],
    answer: 'Malo mi je.',
    tip: 'Another dative sentence: malo mi je, veliko mi je.',
  },
  {
    mode: 'ducan',
    q: 'Odlučili ste kupiti. Kažete: ____',
    en: 'You have decided.',
    opts: ['Uzet ću ovo.', 'Uzimam ovo?', 'Uzeo bih ovo?', 'Uzmi ovo.'],
    answer: 'Uzet ću ovo.',
    tip: 'Uzet ću ovo — the future, and the standard closing line.',
  },
  {
    mode: 'ducan',
    q: 'Što znači "na sniženju"?',
    en: 'What does na sniženju mean?',
    opts: ['on sale', 'sold out', 'in stock', 'brand new'],
    answer: 'on sale',
    tip: 'From sniziti, to lower. Every shop window in January says it.',
  },
  {
    mode: 'ducan',
    q: 'Tražim drugu ____. (colour)',
    en: 'I am looking for another colour.',
    opts: ['boju', 'boja', 'boje', 'bojom'],
    answer: 'boju',
    tip: 'Tražiti takes the accusative: tražim drugu boju.',
  },
];
