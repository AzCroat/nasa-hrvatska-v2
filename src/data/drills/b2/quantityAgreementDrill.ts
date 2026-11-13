// src/data/drills/b2/quantityAgreementDrill.ts
//
// B2 AGREEMENT AFTER NUMBERS — the drill for the `quantity-agreement` lesson.
//
// Four patterns: jedan (full singular agreement, also 21, 31…); dva/tri/četiri (adjective
// in -a m/n or -e f, plural verb); pet+ and nekoliko/mnogo/malo (genitive plural, singular
// verb, neuter singular past); dvoje/troje/četvero (genitive plural, singular verb).
//
// Two things are deliberately never tested against each other, because both are standard
// or both are widely accepted: the masculine participle after dva/tri/četiri (su došla and
// su došli), and plural agreement after pet+ in speech (pet ljudi su došli). Distractors
// are always mismatched or plainly wrong forms (su došlo, je došao after pet, dva dobrih).
//
// Three modes:
//   dva-cetiri — two, three, four (and oba/obje)
//   pet        — five and up, quantity words, and numbers ending in one
//   zbirni     — collective numbers

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const QUANTITY_AGREEMENT_MODE_LABELS: Record<string, string> = {
  'dva-cetiri': '2️⃣ Dva–četiri',
  pet: '5️⃣ Pet i više',
  zbirni: '👨‍👩‍👧 Zbirni brojevi',
};

export const QUANTITY_AGREEMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── dva-cetiri ───────────────────────────────────────────────────────────
  {
    mode: 'dva-cetiri',
    q: 'Dva ____ prijatelja su došla na zabavu.',
    en: 'Two good friends came to the party.',
    opts: ['dobra', 'dobri', 'dobrih', 'dobre'],
    answer: 'dobra',
    tip: 'After dva a masculine adjective ends in -a.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Dvije ____ sestre žive u Splitu.',
    en: 'Two younger sisters live in Split.',
    opts: ['mlađa', 'mlađih', 'mlađe', 'mlađi'],
    answer: 'mlađe',
    tip: 'After dvije a feminine adjective ends in -e.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Tri ____ sela leže uz rijeku.',
    en: 'Three small villages lie along the river.',
    opts: ['malih', 'male', 'malo', 'mala'],
    answer: 'mala',
    tip: 'After tri a neuter adjective ends in -a.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Dvije sestre su ____ iz Zadra.',
    en: 'Two sisters came from Zadar.',
    opts: ['došla', 'došao', 'došle', 'došlo'],
    answer: 'došle',
    tip: 'A feminine noun after dvije takes the participle in -e.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Četiri sela su ____ u požaru.',
    en: 'Four villages burned down in the fire.',
    opts: ['izgorjelo', 'izgorjela', 'izgorjele', 'izgorio'],
    answer: 'izgorjela',
    tip: 'A neuter noun after četiri takes the participle in -a.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Tri studentice ____ u istom stanu.',
    en: 'Three students (women) live in the same flat.',
    opts: ['stanuje', 'stanuju', 'stanujem', 'stanuješ'],
    answer: 'stanuju',
    tip: 'After tri the verb is plural.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Oba ____ rade u istoj tvrtki.',
    en: 'Both brothers work in the same company.',
    opts: ['brata', 'braća', 'braće', 'bratu'],
    answer: 'brata',
    tip: 'Oba works like dva: the genitive-singular form of brat.',
  },
  {
    mode: 'dva-cetiri',
    q: 'Dva ____ stola stoje u kutu.',
    en: 'Two old tables stand in the corner.',
    opts: ['starih', 'stari', 'stara', 'stare'],
    answer: 'stara',
    tip: 'After dva a masculine adjective ends in -a, like the noun.',
  },
  // ── pet ──────────────────────────────────────────────────────────────────
  {
    mode: 'pet',
    q: 'Pet ljudi ____ došlo na predavanje.',
    en: 'Five people came to the lecture.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    tip: 'Došlo is neuter singular, so the auxiliary is singular.',
  },
  {
    mode: 'pet',
    q: 'Na izlet je otišlo pet ____ učenika.',
    en: 'Five good pupils went on the trip.',
    opts: ['dobra', 'dobri', 'dobrih', 'dobre'],
    answer: 'dobrih',
    tip: 'After pet the adjective is in the genitive plural.',
  },
  {
    mode: 'pet',
    q: 'Nekoliko radnika je ____ na posao.',
    en: 'Several workers were late for work.',
    opts: ['zakasnio', 'zakasnila', 'zakasnilo', 'zakasnile'],
    answer: 'zakasnilo',
    tip: 'After nekoliko the participle is neuter singular.',
  },
  {
    mode: 'pet',
    q: 'Ljeti mnogo turista ____ Dubrovnik.',
    en: 'In summer many tourists visit Dubrovnik.',
    opts: ['posjećujem', 'posjećuje', 'posjećujemo', 'posjećuješ'],
    answer: 'posjećuje',
    tip: 'After mnogo the verb is third person singular.',
  },
  {
    mode: 'pet',
    q: 'U zgradi je deset ____ stanova.',
    en: 'There are ten new flats in the building.',
    opts: ['nova', 'novih', 'novi', 'novo'],
    answer: 'novih',
    tip: 'After deset: genitive plural adjective.',
  },
  {
    mode: 'pet',
    q: 'Nekoliko ____ je položilo ispit.',
    en: 'Several students passed the exam.',
    opts: ['studenti', 'studenta', 'studenata', 'studente'],
    answer: 'studenata',
    tip: 'Nekoliko takes the genitive plural.',
  },
  {
    mode: 'pet',
    q: 'Dvadeset i jedan student ____ ispit.',
    en: 'Twenty-one students passed the exam.',
    opts: ['su položila', 'je položio', 'je položilo', 'je položila'],
    answer: 'je položio',
    tip: 'A number ending in one: full masculine singular agreement.',
  },
  {
    mode: 'pet',
    q: 'Koliko je ljudi ____ na koncertu?',
    en: 'How many people were at the concert?',
    opts: ['bio', 'bila', 'bilo', 'bile'],
    answer: 'bilo',
    tip: 'After koliko the participle is neuter singular.',
  },
  {
    mode: 'pet',
    q: 'Koja je rečenica pogrešna?',
    en: 'Which sentence is wrong?',
    opts: [
      'Pet studenata je došlo.',
      'Pet studenata je došao.',
      'Dva studenta su došla.',
      'Dvije studentice su došle.',
    ],
    answer: 'Pet studenata je došao.',
    tip: 'After pet the participle is neuter, not masculine.',
  },
  // ── zbirni ───────────────────────────────────────────────────────────────
  {
    mode: 'zbirni',
    q: 'Imaju ____ djece, dvije kćeri i sina.',
    en: 'They have three children, two daughters and a son.',
    opts: ['tri', 'troje', 'trojica', 'treće'],
    answer: 'troje',
    tip: 'Children are counted with collective numbers.',
  },
  {
    mode: 'zbirni',
    q: 'Dvoje djece ____ u bazenu.',
    en: 'Two children are swimming in the pool.',
    opts: ['plivam', 'pliva', 'plivaš', 'plivamo'],
    answer: 'pliva',
    tip: 'After a collective number the verb is third person singular.',
  },
  {
    mode: 'zbirni',
    q: 'Dvoje djece je ____ cijelo poslijepodne.',
    en: 'Two children drew all afternoon.',
    opts: ['crtao', 'crtala', 'crtalo', 'crtale'],
    answer: 'crtalo',
    tip: 'After a collective number the participle is neuter singular.',
  },
  {
    mode: 'zbirni',
    q: 'Na ispit je došlo ____ studenata: Ivan, Ana i Marija.',
    en: 'Three students came to the exam: Ivan, Ana and Marija.',
    opts: ['tri', 'troje', 'trojica', 'treći'],
    answer: 'troje',
    tip: 'A group of men and women together takes a collective number.',
  },
  {
    mode: 'zbirni',
    q: 'Obitelj Horvat ima ____ djece.',
    en: 'The Horvat family has four children.',
    opts: ['četiri', 'četvrto', 'četvero', 'četvorica'],
    answer: 'četvero',
    tip: 'Collective number for four, used with djeca.',
  },
  {
    mode: 'zbirni',
    q: 'Što znači "dvoje studenata"?',
    en: 'What does this phrase mean?',
    opts: [
      'two male students',
      'a male and a female student',
      'two female students',
      'twelve students',
    ],
    answer: 'a male and a female student',
    tip: 'A collective number names a mixed pair.',
  },
  {
    mode: 'zbirni',
    q: 'Troje ____ je položilo ispit.',
    en: 'Three students (a mixed group) passed the exam.',
    opts: ['studenta', 'studenti', 'studenata', 'studentima'],
    answer: 'studenata',
    tip: 'A collective number takes the genitive plural.',
  },
];
