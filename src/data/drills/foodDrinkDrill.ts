// src/data/drills/foodDrinkDrill.ts
//
// A1 FOOD & DRINK — the drill for the `food-drink` lesson.
//
// The structure under this topic is the case pair a learner meets on their first
// day in a café and gets wrong for months: what you ORDER is accusative
// (*pijem kavu*), what you order a QUANTITY of is genitive (*čaša vode*,
// *šalica kave*). Same noun, two endings, decided by whether a measure word
// stands in front of it.
//
// The rest is the fixed exchange itself. *Izvolite?* opens it, *htio bih* /
// *htjela bih* is the polite request, *može* is the cheerful yes, and *račun,
// molim* ends it. None of that can be derived; it has to be met.
//
// Three modes:
//   rijeci  — the vocabulary, with the genders that trip people
//   padez   — accusative for the order, genitive for the quantity
//   kafic   — ordering, and what the other person says

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const FOOD_DRINK_MODE_LABELS: Record<string, string> = {
  rijeci: '🍽️ Hrana i piće',
  padez: '🎯 Akuzativ ili genitiv',
  kafic: '☕ U kafiću',
};

export const FOOD_DRINK_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Kojeg je roda "kava"?',
    en: 'What gender is kava?',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'nema rod'],
    answer: 'ženskoga',
    tip: 'Feminine — which is why it becomes kavu when you order it.',
  },
  {
    mode: 'rijeci',
    q: 'Kojeg je roda "kruh"?',
    en: 'What gender is kruh?',
    opts: ['muškoga', 'ženskoga', 'srednjega', 'nema rod'],
    answer: 'muškoga',
    tip: 'Masculine and inanimate, so the accusative looks the same: jedem kruh.',
  },
  {
    mode: 'rijeci',
    q: 'Voda bez mjehurića je ____.',
    en: 'Still water is…',
    opts: ['negazirana', 'gazirana', 'topla', 'hladna'],
    answer: 'negazirana',
    tip: 'gazirana / negazirana — the question every waiter asks.',
  },
  {
    mode: 'rijeci',
    q: 'Kojeg je roda "meso"?',
    en: 'What gender is meso?',
    opts: ['srednjega', 'muškoga', 'ženskoga', 'nema rod'],
    answer: 'srednjega',
    tip: 'Neuter — meso, mlijeko, vino, pivo all end in -o.',
  },
  {
    mode: 'rijeci',
    q: 'Što znači "sok"?',
    en: 'What is sok?',
    opts: ['juice', 'soup', 'salt', 'sauce'],
    answer: 'juice',
    tip: 'Sok — masculine, and a false friend for anyone expecting "soup".',
  },
  {
    mode: 'rijeci',
    q: 'Riba je ____ roda.',
    en: 'Riba is…',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'množina'],
    answer: 'ženskoga',
    tip: 'Feminine: jedem ribu.',
  },
  {
    mode: 'rijeci',
    q: 'Što je "sir"?',
    en: 'What is sir?',
    opts: ['cheese', 'sugar', 'syrup', 'soup'],
    answer: 'cheese',
    tip: 'Sir — masculine, and nothing to do with the English word it looks like.',
  },
  {
    mode: 'rijeci',
    q: 'Što znači "Idemo na kavu"?',
    en: 'What does it mean?',
    opts: ['poziv na druženje', 'poziv na kofein', 'poziv na ručak', 'poziv na piće'],
    answer: 'poziv na druženje',
    tip: 'An invitation to company. Nobody is counting the coffee.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Pijem ____. (kava)',
    en: 'I am drinking coffee.',
    opts: ['kavu', 'kava', 'kave', 'kavom'],
    answer: 'kavu',
    tip: 'What you drink is the OBJECT → accusative: pijem kavu.',
  },
  {
    mode: 'padez',
    q: 'Šalica ____. (kava)',
    en: 'a cup of coffee',
    opts: ['kave', 'kavu', 'kava', 'kavom'],
    answer: 'kave',
    tip: 'A measure word in front → GENITIVE: šalica kave.',
  },
  {
    mode: 'padez',
    q: 'Čaša ____. (voda)',
    en: 'a glass of water',
    opts: ['vode', 'vodu', 'voda', 'vodom'],
    answer: 'vode',
    tip: 'čaša vode — the same genitive as every quantity.',
  },
  {
    mode: 'padez',
    q: 'Pijem ____. (voda)',
    en: 'I am drinking water.',
    opts: ['vodu', 'vode', 'voda', 'vodom'],
    answer: 'vodu',
    tip: 'No measure word, so back to the accusative: pijem vodu.',
  },
  {
    mode: 'padez',
    q: 'Što odlučuje padež?',
    en: 'What decides the case?',
    opts: [
      'stoji li ispred riječ za količinu',
      'rod imenice',
      'koje je vrijeme',
      'je li piće toplo',
    ],
    answer: 'stoji li ispred riječ za količinu',
    tip: 'Measure word → genitive. No measure word → accusative. One question.',
  },
  {
    mode: 'padez',
    q: 'Jedem ____. (riba)',
    en: 'I am eating fish.',
    opts: ['ribu', 'ribe', 'riba', 'ribom'],
    answer: 'ribu',
    tip: 'Accusative: jedem ribu.',
  },
  {
    mode: 'padez',
    q: 'Kilogram ____. (jabuke)',
    en: 'a kilo of apples',
    opts: ['jabuka', 'jabuke', 'jabukama', 'jabuku'],
    answer: 'jabuka',
    tip: 'Genitive plural after a measure: kilogram jabuka.',
  },
  {
    mode: 'padez',
    q: 'Litra ____. (mlijeko)',
    en: 'a litre of milk',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'litra mlijeka.',
  },

  // ── kafic ─────────────────────────────────────────────────────────────────
  {
    mode: 'kafic',
    q: 'Konobar kaže: ____?',
    en: 'The waiter opens with:',
    opts: ['Izvolite', 'Molim', 'Hvala', 'Oprostite'],
    answer: 'Izvolite',
    tip: 'Izvolite? — "what can I get you". It is the opening move.',
  },
  {
    mode: 'kafic',
    q: 'Uljudno naručivanje: ____ jednu kavu.',
    en: 'Politely ordering a coffee.',
    opts: ['Htio bih', 'Hoću', 'Dajte', 'Trebam'],
    answer: 'Htio bih',
    tip: 'Htio bih / htjela bih — the conditional is what makes it polite.',
  },
  {
    mode: 'kafic',
    q: 'Kako žena kaže "I would like"?',
    en: 'A woman says:',
    opts: ['Htjela bih', 'Htio bih', 'Htjeli bismo', 'Htio bi'],
    answer: 'Htjela bih',
    tip: 'The participle agrees with the speaker: htio / htjela.',
  },
  {
    mode: 'kafic',
    q: 'Kako tražite račun?',
    en: 'How do you ask for the bill?',
    opts: ['Račun, molim.', 'Novac, molim.', 'Cijena, molim.', 'Plaćanje, molim.'],
    answer: 'Račun, molim.',
    tip: 'Račun, molim — three words, and it works everywhere.',
  },
  {
    mode: 'kafic',
    q: 'Vedro "da" u kafiću je ____.',
    en: 'The cheerful yes:',
    opts: ['Može', 'Dobro', 'Da', 'Naravno'],
    answer: 'Može',
    tip: 'Može! — literally "it can", and it is everywhere in spoken Croatian.',
  },
  {
    mode: 'kafic',
    q: 'Jedna kava, ____.',
    en: 'One coffee, please.',
    opts: ['molim', 'hvala', 'izvolite', 'oprostite'],
    answer: 'molim',
    tip: 'The thing plus molim is the shortest complete order there is.',
  },
  {
    mode: 'kafic',
    q: 'Što znači "Izvolite" kad vam nešto daju?',
    en: 'What does it mean when handing something over?',
    opts: ['here you are', 'thank you', 'excuse me', 'goodbye'],
    answer: 'here you are',
    tip: 'Izvolite does both jobs — asking and giving. Context separates them.',
  },
  {
    mode: 'kafic',
    q: 'Nakon "hvala" konobar kaže ____.',
    en: 'After thanks, the waiter says:',
    opts: ['Nema na čemu', 'Izvolite', 'Račun', 'Može'],
    answer: 'Nema na čemu',
    tip: 'Nema na čemu, or simply molim.',
  },
];
