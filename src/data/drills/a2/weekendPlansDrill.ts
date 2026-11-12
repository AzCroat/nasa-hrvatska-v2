// src/data/drills/a2/weekendPlansDrill.ts
//
// A2 WEEKEND PLANS — the drill for the `weekend-plans` lesson.
//
// Three things: talking about the weekend with the present or the future (and where
// ću goes), the time words (u subotu, ovaj vikend, za vikend), and booking a room —
// hotel or private accommodation — where the adjective follows the room into the
// accusative.
//
// Three modes:
//   planovi  — present and future for plans; ću in second position
//   vrijeme  — u + accusative days, ovaj / sljedeći vikend, za vikend
//   smjestaj — hotel, apartman, slobodnu sobu, noćenje

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const WEEKEND_PLANS_MODE_LABELS: Record<string, string> = {
  planovi: '🗓️ Planovi',
  vrijeme: '⏰ Kada?',
  smjestaj: '🏨 Smještaj',
};

export const WEEKEND_PLANS_DRILL_DATA: ModeDrillItem[] = [
  // ── planovi ───────────────────────────────────────────────────────────────
  {
    mode: 'planovi',
    q: 'U subotu ____ na more.',
    en: 'On Saturday we are going to the sea.',
    opts: ['idemo', 'ići', 'išli', 'idete'],
    answer: 'idemo',
    tip: 'An arranged plan with a time word can use the present.',
  },
  {
    mode: 'planovi',
    q: 'U nedjelju ____ ostati kod kuće.',
    en: 'On Sunday I will stay at home.',
    opts: ['ću', 'ćeš', 'će', 'ćemo'],
    answer: 'ću',
    tip: 'The ja form of the future helper, in second position.',
  },
  {
    mode: 'planovi',
    q: 'Koja je rečenica ispravna?',
    en: 'Which sentence is correct?',
    opts: [
      'U subotu ću ići na izlet.',
      'U subotu ići ću na izlet.',
      'Ću ići u subotu na izlet.',
      'U subotu ću idem na izlet.',
    ],
    answer: 'U subotu ću ići na izlet.',
    tip: 'Ću stands second, after the first phrase, and is followed by the infinitive.',
  },
  {
    mode: 'planovi',
    q: '____ ćemo dva dana u Zadru.',
    en: 'We will stay two days in Zadar.',
    opts: ['Ostat', 'Ostati', 'Ostanemo', 'Ostali'],
    answer: 'Ostat',
    tip: 'An infinitive in -ti that opens the sentence drops its -i before the future helper.',
  },
  {
    mode: 'planovi',
    q: '____ ćemo na izlet u planine.',
    en: 'We will go on a trip to the mountains.',
    opts: ['Ići', 'Ić', 'Idemo', 'Išli'],
    answer: 'Ići',
    tip: 'Infinitives in -ći keep their whole form before the future helper.',
  },
  {
    mode: 'planovi',
    q: 'Ovaj vikend ____ u Split kod prijatelja.',
    en: 'This weekend we are travelling to Split to stay with friends.',
    opts: ['putujemo', 'putovamo', 'putujete', 'putovali'],
    answer: 'putujemo',
    tip: 'putovati → putuj- + -emo.',
  },
  {
    mode: 'planovi',
    q: 'Što ____ za vikend?',
    en: 'What are you doing at the weekend? (to a friend)',
    opts: ['radiš', 'radim', 'radite', 'radi'],
    answer: 'radiš',
    tip: 'To a friend: the ti form, radiš.',
  },
  {
    mode: 'planovi',
    q: 'U nedjelju ćemo se ____.',
    en: 'On Sunday we will rest.',
    opts: ['odmoriti', 'odmorimo', 'odmorit', 'odmorili'],
    answer: 'odmoriti',
    tip: 'After ćemo, the whole infinitive.',
  },
  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: 'Idem u kino ____ navečer.',
    en: 'I am going to the cinema on Friday evening.',
    opts: ['u petak', 'u petku', 'na petak', 'u petka'],
    answer: 'u petak',
    tip: 'Days take u + accusative; petak looks the same in the accusative.',
  },
  {
    mode: 'vrijeme',
    q: 'Vidimo se ____!',
    en: 'See you on Saturday!',
    opts: ['u subotu', 'u subota', 'u suboti', 'na subotu'],
    answer: 'u subotu',
    tip: 'u + accusative: subota → subotu.',
  },
  {
    mode: 'vrijeme',
    q: 'Što radiš ____?',
    en: 'What are you doing at the weekend?',
    opts: ['za vikend', 'u vikend', 'na vikendu', 'po vikend'],
    answer: 'za vikend',
    tip: 'The fixed phrase is za vikend.',
  },
  {
    mode: 'vrijeme',
    q: '____ ćemo ići u planine.',
    en: 'Next weekend we will go to the mountains.',
    opts: ['Sljedeći vikend', 'U sljedeći vikend', 'Sljedeći vikendu', 'Na sljedeći vikend'],
    answer: 'Sljedeći vikend',
    tip: 'Sljedeći vikend and ovaj vikend need no preposition.',
  },
  {
    mode: 'vrijeme',
    q: '____ uvijek idemo kod bake.',
    en: 'Every weekend we go to our grandmother’s.',
    opts: ['Vikendom', 'Vikendu', 'Za vikendom', 'Vikenda'],
    answer: 'Vikendom',
    tip: 'For something you do every weekend: vikendom.',
  },
  {
    mode: 'vrijeme',
    q: 'Dolazimo ____ ujutro.',
    en: 'We are coming on Sunday morning.',
    opts: ['u nedjelju', 'u nedjelji', 'na nedjelju', 'nedjelja'],
    answer: 'u nedjelju',
    tip: 'u + accusative: nedjelja → nedjelju.',
  },
  {
    mode: 'vrijeme',
    q: '____ putujemo u Zadar.',
    en: 'This weekend we are travelling to Zadar.',
    opts: ['Ovaj vikend', 'U ovom vikendu', 'Na ovaj vikend', 'Ovog vikend'],
    answer: 'Ovaj vikend',
    tip: 'No preposition: ovaj vikend.',
  },
  {
    mode: 'vrijeme',
    q: 'U subotu ____ idemo na tržnicu.',
    en: 'On Saturday morning we are going to the market.',
    opts: ['ujutro', 'jutro', 'u jutro', 'jutrom'],
    answer: 'ujutro',
    tip: 'Ujutro, popodne, navečer are adverbs: one word, no preposition.',
  },
  // ── smjestaj ──────────────────────────────────────────────────────────────
  {
    mode: 'smjestaj',
    q: 'Imate li ____ sobu za petak?',
    en: 'Do you have a free room for Friday?',
    opts: ['slobodnu', 'slobodna', 'slobodnoj', 'slobodne'],
    answer: 'slobodnu',
    tip: 'The room is the object: feminine accusative -u on both words.',
  },
  {
    mode: 'smjestaj',
    q: 'Tražimo ____ smještaj blizu plaže.',
    en: 'We are looking for cheap accommodation near the beach.',
    opts: ['jeftin', 'jeftina', 'jeftinog', 'jeftinu'],
    answer: 'jeftin',
    tip: 'Masculine and not alive: the accusative looks like the basic form.',
  },
  {
    mode: 'smjestaj',
    q: 'Želim ____ sobu s pogledom na more.',
    en: 'I would like a double room with a sea view.',
    opts: ['dvokrevetnu', 'dvokrevetna', 'dvokrevetne', 'dvokrevetnoj'],
    answer: 'dvokrevetnu',
    tip: 'Feminine accusative object: dvokrevetnu sobu.',
  },
  {
    mode: 'smjestaj',
    q: 'Koliko košta ____ s doručkom?',
    en: 'How much is one night with breakfast?',
    opts: ['noćenje', 'noćenja', 'noćenju', 'noćenjem'],
    answer: 'noćenje',
    tip: 'It is the subject of košta, so it stays in its basic form.',
  },
  {
    mode: 'smjestaj',
    q: 'Rezervirali smo ____ apartman s kuhinjom.',
    en: 'We have booked a small flat with a kitchen.',
    opts: ['mali', 'malog', 'malu', 'malom'],
    answer: 'mali',
    tip: 'Apartman is masculine and not alive.',
  },
  {
    mode: 'smjestaj',
    q: 'Doručak je ____ u cijenu.',
    en: 'Breakfast is included in the price.',
    opts: ['uključen', 'uključena', 'uključeno', 'uključiti'],
    answer: 'uključen',
    tip: 'Doručak is masculine, so the adjective-like form has no ending.',
  },
  {
    mode: 'smjestaj',
    q: 'U hotelu ključ dobijete na ____.',
    en: 'In a hotel you get the key at reception.',
    opts: ['recepciji', 'recepcija', 'recepciju', 'recepcijom'],
    answer: 'recepciji',
    tip: 'A place: na + locative.',
  },
  {
    mode: 'smjestaj',
    q: 'Tražim ____ sobu, daleko od ceste.',
    en: 'I am looking for a quiet room, far from the road.',
    opts: ['mirnu', 'mirna', 'mirnoj', 'mirne'],
    answer: 'mirnu',
    tip: 'Feminine accusative object: mirnu sobu.',
  },
  {
    mode: 'smjestaj',
    q: 'Imate li ____ za dvije osobe?',
    en: 'Do you have a holiday flat for two people?',
    opts: ['apartman', 'apartmana', 'apartmanu', 'apartmanom'],
    answer: 'apartman',
    tip: 'Masculine, not alive: the accusative is the basic form.',
  },
];
