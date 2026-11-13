// src/data/drills/b2/healthPreventionDrill.ts
//
// B2 HEALTH AND PREVENTION — the drill for the `health-prevention` lesson.
//
// Three structures carry the lesson: pain with boljeti and the person in the accusative
// (Boli me glava), addiction with o + locative and quitting with od + genitive or an
// infinitive (ovisnost o nikotinu, odviknuti se od cigareta, prestati pušiti), and advice
// in the Vi-form imperative, nemojte + infinitive, or the conditional.
//
// Three modes:
//   bolest   — illness, pain and the doctor
//   ovisnost — addiction, quitting, prevention
//   savjet   — advice, including heat-wave advice

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const HEALTH_PREVENTION_MODE_LABELS: Record<string, string> = {
  bolest: '🤒 Bolest',
  ovisnost: '🚭 Ovisnost',
  savjet: '💬 Savjet',
};

export const HEALTH_PREVENTION_DRILL_DATA: ModeDrillItem[] = [
  // ── bolest ───────────────────────────────────────────────────────────────
  {
    mode: 'bolest',
    q: 'Boli ____ glava.',
    en: 'I have a headache.',
    opts: ['ja', 'me', 'mi', 'moja'],
    answer: 'me',
    tip: 'Boljeti takes the person in the accusative, short form me.',
  },
  {
    mode: 'bolest',
    q: 'Bole ____ leđa od jučer.',
    en: 'His back has hurt since yesterday.',
    opts: ['ga', 'mu', 'on', 'njegova'],
    answer: 'ga',
    tip: 'Accusative of on, short form: ga.',
  },
  {
    mode: 'bolest',
    q: 'Liječnica mi je dala ____ za antibiotik.',
    en: 'The doctor gave me a prescription for an antibiotic.',
    opts: ['ljekarnu', 'recept', 'pregled', 'temperaturu'],
    answer: 'recept',
    tip: 'The paper you take to the pharmacy.',
  },
  {
    mode: 'bolest',
    q: 'Lijek sam kupio u ____.',
    en: 'I bought the medicine at the pharmacy.',
    opts: ['ljekarna', 'ljekarnu', 'ljekarni', 'ljekarnom'],
    answer: 'ljekarni',
    tip: 'Where? u + locative: u ljekarni.',
  },
  {
    mode: 'bolest',
    q: 'Već tri dana imam visoku ____.',
    en: 'I have had a high fever for three days.',
    opts: ['temperaturu', 'prehladu', 'recept', 'kašalj'],
    answer: 'temperaturu',
    tip: 'A fever is temperatura; visoka agrees with it.',
  },
  {
    mode: 'bolest',
    q: 'Moj djed je zdrav kao ____.',
    en: 'My grandfather is as fit as a fiddle.',
    opts: ['dren', 'drvo', 'hrast', 'list'],
    answer: 'dren',
    tip: 'The idiom names the cornel tree, which has very hard wood.',
  },
  {
    mode: 'bolest',
    q: 'Prošlog tjedna sam se ____ i ostao kod kuće.',
    en: 'Last week I fell ill and stayed at home.',
    opts: ['razbolio', 'razboljeti', 'razbolim', 'razboljen'],
    answer: 'razbolio',
    tip: 'Past tense, masculine: razbolio sam se.',
  },
  {
    mode: 'bolest',
    q: 'Idem na preventivni ____ jednom godišnje.',
    en: 'I go for a check-up once a year.',
    opts: ['recept', 'lijek', 'pregled', 'kašalj'],
    answer: 'pregled',
    tip: 'Preventivni pregled is a routine check-up.',
  },
  // ── ovisnost ─────────────────────────────────────────────────────────────
  {
    mode: 'ovisnost',
    q: 'Ovisnost ____ uništava zdravlje.',
    en: 'Addiction to nicotine ruins your health.',
    opts: ['od nikotina', 'o nikotinu', 'na nikotin', 's nikotinom'],
    answer: 'o nikotinu',
    tip: 'Ovisnost takes o + locative.',
  },
  {
    mode: 'ovisnost',
    q: 'Moj ujak je ovisan o ____.',
    en: 'My uncle is addicted to gambling.',
    opts: ['kocka', 'kocke', 'kocki', 'kockom'],
    answer: 'kocki',
    tip: 'After o the locative: kocki (kocka here means gambling).',
  },
  {
    mode: 'ovisnost',
    q: 'Teško se odviknuti ____.',
    en: 'It is hard to wean yourself off cigarettes.',
    opts: ['o cigaretama', 'od cigareta', 'cigarete', 's cigaretama'],
    answer: 'od cigareta',
    tip: 'Odviknuti se takes od + genitive.',
  },
  {
    mode: 'ovisnost',
    q: 'Sestra je prestala ____ prije dvije godine.',
    en: 'My sister stopped smoking two years ago.',
    opts: ['da puši', 'pušio', 'pušiti', 'puši'],
    answer: 'pušiti',
    tip: 'Prestati takes the infinitive.',
  },
  {
    mode: 'ovisnost',
    q: 'Bolje spriječiti nego ____.',
    en: 'Prevention is better than cure.',
    opts: ['liječiti', 'liječnik', 'lijek', 'liječi'],
    answer: 'liječiti',
    tip: 'The proverb pairs two infinitives.',
  },
  {
    mode: 'ovisnost',
    q: 'Cjepivo ____ mnoge bolesti.',
    en: 'A vaccine prevents many diseases.',
    opts: ['sprječava', 'spriječiti', 'sprječavao', 'sprječavati'],
    answer: 'sprječava',
    tip: 'Present tense, third person singular.',
  },
  {
    mode: 'ovisnost',
    q: 'Ona je ____ o alkoholu, ali traži pomoć.',
    en: 'She is addicted to alcohol, but she is seeking help.',
    opts: ['ovisan', 'ovisna', 'ovisno', 'ovisni'],
    answer: 'ovisna',
    tip: 'The adjective agrees with ona: feminine.',
  },
  {
    mode: 'ovisnost',
    q: 'Pomoć možete potražiti u ____ za ovisnosti.',
    en: 'You can look for help at a counselling centre for addictions.',
    opts: ['savjetovalištu', 'savjetovalište', 'savjetovališta', 'savjetovalištem'],
    answer: 'savjetovalištu',
    tip: 'Where? u + locative, neuter: savjetovalištu.',
  },
  // ── savjet ───────────────────────────────────────────────────────────────
  {
    mode: 'savjet',
    q: '____ puno vode tijekom toplinskog vala.',
    en: 'Drink plenty of water during the heat wave (public advice).',
    opts: ['Pij', 'Pijte', 'Piju', 'Pijete'],
    answer: 'Pijte',
    tip: 'Public advice uses the Vi-form imperative, ending in -te.',
  },
  {
    mode: 'savjet',
    q: '____ izlaziti na sunce između 11 i 17 sati.',
    en: 'Do not go out in the sun between 11 and 17 (public notice).',
    opts: ['Ne', 'Nemoj', 'Nemojte', 'Nećete'],
    answer: 'Nemojte',
    tip: 'A Vi-form prohibition: this word + the infinitive.',
  },
  {
    mode: 'savjet',
    q: 'Trebali ____ više spavati.',
    en: 'You should sleep more (polite).',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'biste',
    tip: 'Conditional auxiliary for Vi.',
  },
  {
    mode: 'savjet',
    q: 'Na tvom mjestu ja ____ otišao liječniku.',
    en: 'If I were you, I would go to the doctor.',
    opts: ['bi', 'bih', 'biste', 'bismo'],
    answer: 'bih',
    tip: 'Conditional auxiliary for ja.',
  },
  {
    mode: 'savjet',
    q: 'Nikad ne ____ djecu u parkiranom autu.',
    en: 'Never leave children in a parked car.',
    opts: ['ostavljajte', 'ostavljate', 'ostaviti', 'ostavljaju'],
    answer: 'ostavljajte',
    tip: 'A negated Vi-form imperative.',
  },
  {
    mode: 'savjet',
    q: 'Bilo bi dobro da se više ____.',
    en: 'It would be good if you moved more (to a friend).',
    opts: ['krećeš', 'kretati', 'kreći', 'kretao'],
    answer: 'krećeš',
    tip: 'After da a conjugated present-tense verb, ti-form.',
  },
  {
    mode: 'savjet',
    q: 'Koji je savjet za toplinski val ISPRAVAN?',
    en: 'Which heat-wave tip is correct?',
    opts: [
      'Trčite u podne.',
      'Nosite laganu odjeću i šešir.',
      'Pijte samo kavu.',
      'Ostavite psa u autu.',
    ],
    answer: 'Nosite laganu odjeću i šešir.',
    tip: 'Light clothing and a hat keep the body cool.',
  },
  {
    mode: 'savjet',
    q: 'Koji savjet prijatelju zvuči blago?',
    en: 'Which advice to a friend sounds gentle?',
    opts: [
      'Spavati više!',
      'Trebao bi više spavati.',
      'Nemojte spavati.',
      'Spavaš premalo i gotovo.',
    ],
    answer: 'Trebao bi više spavati.',
    tip: 'The conditional of trebati softens advice.',
  },
];
