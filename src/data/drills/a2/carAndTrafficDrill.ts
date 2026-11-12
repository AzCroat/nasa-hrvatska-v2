// src/data/drills/a2/carAndTrafficDrill.ts
//
// A2 CARS AND TRAFFIC — the drill for the `car-and-traffic` lesson.
//
// Breakdowns use the dative + se: Auto mi se pokvario. The traps are the cluster order
// (mi before se), the gender of auto (masculine, so pokvario and gotov), and the cases
// after the garage and road phrases.
//
// Three modes:
//   kvar    — what went wrong, with dative + se
//   servis  — the car's parts and the conversation at the garage
//   promet  — traffic, parking and petrol

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CAR_AND_TRAFFIC_MODE_LABELS: Record<string, string> = {
  kvar: '🛠️ Kvar',
  servis: '🔧 Servis',
  promet: '🚦 Promet',
};

export const CAR_AND_TRAFFIC_DRILL_DATA: ModeDrillItem[] = [
  // ── kvar ──────────────────────────────────────────────────────────────────
  {
    mode: 'kvar',
    q: 'Auto ____ pokvario.',
    en: 'My car has broken down.',
    opts: ['mi se', 'se mi', 'me se', 'mi je'],
    answer: 'mi se',
    tip: 'The dative comes before se.',
  },
  {
    mode: 'kvar',
    q: 'Probušila mi se ____.',
    en: 'I have a flat tyre.',
    opts: ['gumu', 'guma', 'gume', 'gumom'],
    answer: 'guma',
    tip: 'The tyre is the subject — nominative.',
  },
  {
    mode: 'kvar',
    q: 'Auto mi se ____.',
    en: 'My car broke down.',
    opts: ['pokvarila', 'pokvarilo', 'pokvario', 'pokvarili'],
    answer: 'pokvario',
    tip: 'auto ends in -o but is masculine.',
  },
  {
    mode: 'kvar',
    q: 'Pregrijao ____ se motor.',
    en: 'His engine overheated.',
    opts: ['ga', 'mu', 'joj', 'on'],
    answer: 'mu',
    tip: 'His → the dative mu, before se.',
  },
  {
    mode: 'kvar',
    q: 'Akumulator mi je ____.',
    en: 'My battery is flat.',
    opts: ['prazna', 'prazno', 'prazan', 'prazni'],
    answer: 'prazan',
    tip: 'akumulator is masculine.',
  },
  {
    mode: 'kvar',
    q: 'Auto mi ne ____.',
    en: 'My car won’t start.',
    opts: ['palim', 'pališ', 'pale', 'pali'],
    answer: 'pali',
    tip: 'The car is the subject, third person singular.',
  },
  {
    mode: 'kvar',
    q: '____ se pokvario auto.',
    en: 'Dad’s car broke down.',
    opts: ['Tata', 'Tati', 'Tatu', 'Tatom'],
    answer: 'Tati',
    tip: 'The owner in the dative: tati.',
  },
  {
    mode: 'kvar',
    q: 'Which sentence is correct?',
    en: 'Our car has broken down.',
    opts: [
      'Auto nam se pokvario.',
      'Auto se nam pokvario.',
      'Nam se auto pokvario.',
      'Auto nas se pokvario.',
    ],
    answer: 'Auto nam se pokvario.',
    tip: 'nam in second place, before se.',
  },

  // ── servis ────────────────────────────────────────────────────────────────
  {
    mode: 'servis',
    q: 'Možete li pogledati ____?',
    en: 'Can you look at the brakes?',
    opts: ['kočnicama', 'kočnice', 'kočnicom', 'kočnica'],
    answer: 'kočnice',
    tip: 'pogledati + accusative plural.',
  },
  {
    mode: 'servis',
    q: 'Kad će auto biti ____?',
    en: 'When will the car be ready?',
    opts: ['gotova', 'gotovo', 'gotovi', 'gotov'],
    answer: 'gotov',
    tip: 'gotov agrees with the masculine auto.',
  },
  {
    mode: 'servis',
    q: 'Koliko ____ to koštati?',
    en: 'How much will that cost?',
    opts: ['ću', 'će', 'ćeš', 'ćemo'],
    answer: 'će',
    tip: 'to is third person: će.',
  },
  {
    mode: 'servis',
    q: 'Zvao sam ____.',
    en: 'I called the mechanic.',
    opts: ['mehaničar', 'mehaničaru', 'mehaničara', 'mehaničarom'],
    answer: 'mehaničara',
    tip: 'zvati + accusative; a person in -ar takes -a.',
  },
  {
    mode: 'servis',
    q: 'Kofer je u ____.',
    en: 'The suitcase is in the boot.',
    opts: ['prtljažnik', 'prtljažnika', 'prtljažnikom', 'prtljažniku'],
    answer: 'prtljažniku',
    tip: 'u + locative for where it is.',
  },
  {
    mode: 'servis',
    q: 'What are the parts below called in English?',
    lead: 'brisači',
    en: 'Choose the English word.',
    opts: ['windscreen wipers', 'brakes', 'headlights', 'mirrors'],
    answer: 'windscreen wipers',
    tip: 'brisati — to wipe.',
  },
  {
    mode: 'servis',
    q: 'What is the part below called in English?',
    lead: 'volan',
    en: 'Choose the English word.',
    opts: ['the boot', 'the steering wheel', 'the engine', 'the tyre'],
    answer: 'the steering wheel',
    tip: 'You hold it to steer.',
  },
  {
    mode: 'servis',
    q: 'Which question asks the mechanic what is wrong?',
    en: 'What’s wrong?',
    opts: ['Što ne valja?', 'Što ne valjaš?', 'Što ne valjam?', 'Što ne valjati?'],
    answer: 'Što ne valja?',
    tip: 'valjati, third person: ne valja.',
  },

  // ── promet ────────────────────────────────────────────────────────────────
  {
    mode: 'promet',
    q: 'Na ____ skreni desno.',
    en: 'Turn right at the traffic lights.',
    opts: ['semafor', 'semaforu', 'semafora', 'semaforom'],
    answer: 'semaforu',
    tip: 'na + locative for a place.',
  },
  {
    mode: 'promet',
    q: 'U ____ toku uzmi drugi izlaz.',
    en: 'Take the second exit at the roundabout.',
    opts: ['kružni', 'kružnog', 'kružnom', 'kružnim'],
    answer: 'kružnom',
    tip: 'u + locative, and the adjective agrees.',
  },
  {
    mode: 'promet',
    q: 'Ovdje se ne ____ parkirati.',
    en: 'No parking here.',
    opts: ['smijem', 'smije', 'smiješ', 'smiju'],
    answer: 'smije',
    tip: 'The impersonal: se + third person singular.',
  },
  {
    mode: 'promet',
    q: 'Na autocesti se plaća ____.',
    en: 'On the motorway you pay a toll.',
    opts: ['cestarinu', 'cestarine', 'cestarina', 'cestarini'],
    answer: 'cestarina',
    tip: 'In a se-sentence the thing paid is the subject.',
  },
  {
    mode: 'promet',
    q: 'Gužva je, ____ ćemo.',
    en: 'There’s a jam — we’ll be late.',
    opts: ['zakasniti', 'zakasnit', 'zakasni', 'zakasnio'],
    answer: 'zakasnit',
    tip: 'Before ćemo the infinitive drops its final -i.',
  },
  {
    mode: 'promet',
    q: 'Dobio sam ____ za parkiranje.',
    en: 'I got a parking fine.',
    opts: ['kazna', 'kazni', 'kaznom', 'kaznu'],
    answer: 'kaznu',
    tip: 'dobiti + accusative.',
  },
  {
    mode: 'promet',
    q: 'At the petrol station, which asks the attendant to fill the tank?',
    en: 'Fill it up, please.',
    opts: ['Napunim, molim.', 'Napunite, molim.', 'Napuni se, molim.', 'Napunio, molim.'],
    answer: 'Napunite, molim.',
    tip: 'The polite imperative.',
  },
  {
    mode: 'promet',
    q: 'What is the word below in English?',
    lead: 'gužva',
    en: 'Choose the English word.',
    opts: ['a roundabout', 'a toll', 'a traffic jam', 'a junction'],
    answer: 'a traffic jam',
    tip: 'Too many cars in one place.',
  },
];
