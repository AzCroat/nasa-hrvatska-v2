// src/data/drills/b1/motionVerbsDrill.ts
//
// B1 motion verbs — the drill for the `motion-verbs` lesson (B1-19).
//
// The lesson teaches the prefixed motion verbs and their aspect partners (odlaziti /
// otići, dolaziti / doći, ulaziti / ući, izlaziti / izaći, vraćati se / vratiti se,
// prijeći, obići, prolaziti) and the case a destination takes: u / na + the
// accusative for where the movement leads, the locative for where you already are,
// po + the locative for moving around inside a place. The shared aspect drill had no
// motion items at all, so this bank is the lesson's own.
//
// Three modes:
//   prefiks — which prefix: u-, iz-, do-, od-, pre-, ob-, pro-
//   vid     — imperfective habit or process vs perfective completed movement
//   padez   — u / na + accusative or locative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MOTION_VERBS_MODE_LABELS: Record<string, string> = {
  prefiks: '🚪 Ući, izaći, prijeći',
  vid: '🔁 Dolazi ili je došao?',
  padez: '📍 U grad ili u gradu?',
};

export const MOTION_VERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── prefiks ───────────────────────────────────────────────────────────────
  {
    mode: 'prefiks',
    q: '____ sam u sobu i upalio svjetlo.',
    en: 'I went into the room and switched on the light.',
    opts: ['Ušao', 'Izašao', 'Prešao', 'Obišao'],
    answer: 'Ušao',
    tip: 'u- matches the preposition u: into.',
  },
  {
    mode: 'prefiks',
    q: 'Svako jutro u sedam ____ iz kuće.',
    en: 'Every morning at seven I leave the house.',
    opts: ['izlazim', 'ulazim', 'prelazim', 'dolazim'],
    answer: 'izlazim',
    tip: 'iz- matches the preposition iz: out of.',
  },
  {
    mode: 'prefiks',
    q: '____ smo cestu na semaforu.',
    en: 'We crossed the road at the traffic lights.',
    opts: ['Prešli', 'Ušli', 'Izašli', 'Došli'],
    answer: 'Prešli',
    tip: 'pre- means across: prijeći → prešli.',
  },
  {
    mode: 'prefiks',
    q: '____ smo cijeli otok za jedan dan.',
    en: 'We went all round the island in one day.',
    opts: ['Obišli', 'Prošli', 'Ušli', 'Otišli'],
    answer: 'Obišli',
    tip: 'ob- means around: obići.',
  },
  {
    mode: 'prefiks',
    q: 'Svaki dan ____ pored škole.',
    en: 'Every day I pass by the school.',
    opts: ['prolazim', 'ulazim', 'obilazim', 'izlazim'],
    answer: 'prolazim',
    tip: 'pro- means past or through: prolaziti.',
  },
  {
    mode: 'prefiks',
    q: 'Što znači prefiks u glagolu "doći"?',
    en: 'What does the prefix in doći add?',
    opts: ['toward, arriving', 'away, leaving', 'out of', 'across'],
    answer: 'toward, arriving',
    tip: 'do- is towards; od- is away (otići).',
  },
  {
    mode: 'prefiks',
    q: 'Što znači prefiks u glagolu "otići"?',
    en: 'What does the prefix in otići add?',
    opts: ['away, leaving', 'toward, arriving', 'into', 'around'],
    answer: 'away, leaving',
    tip: 'od-/o- is away: otići, odlaziti.',
  },
  {
    mode: 'prefiks',
    q: 'Molim vas, ____. (come in — polite)',
    en: 'Please come in.',
    opts: ['uđite', 'izađite', 'uđi', 'ući'],
    answer: 'uđite',
    tip: 'u- into, and molim vas takes the Vi-form imperative.',
  },

  // ── vid ───────────────────────────────────────────────────────────────────
  {
    mode: 'vid',
    q: 'Moji roditelji ____ svako ljeto.',
    en: 'My parents come every summer.',
    opts: ['dolaze', 'došli', 'došla', 'doći'],
    answer: 'dolaze',
    tip: 'A repeated arrival: imperfective dolaziti.',
  },
  {
    mode: 'vid',
    q: 'Zakasnili smo, vlak je već ____.',
    en: 'We are late, the train has already left.',
    opts: ['otišao', 'odlazio', 'išao', 'odlazi'],
    answer: 'otišao',
    tip: 'The train is gone: perfective otići.',
  },
  {
    mode: 'vid',
    q: 'Kao dijete sam svaki dan ____ u školu pješice. (a man)',
    en: 'As a child I walked to school every day.',
    opts: ['išao', 'otišao', 'došao', 'ušao'],
    answer: 'išao',
    tip: 'A habit in the past is imperfective.',
  },
  {
    mode: 'vid',
    q: 'Ana je ____ prije sat vremena. Sada je ovdje.',
    en: 'Ana arrived an hour ago. She is here now.',
    opts: ['došla', 'dolazila', 'išla', 'otišla'],
    answer: 'došla',
    tip: 'A completed arrival: perfective doći.',
  },
  {
    mode: 'vid',
    q: 'Koji je par nesvršeni / svršeni glagol za "leave"?',
    en: 'Which is the imperfective / perfective pair for "leave"?',
    opts: ['odlaziti / otići', 'ići / otići', 'otići / odlaziti', 'dolaziti / otići'],
    answer: 'odlaziti / otići',
    tip: 'ići and otići are not an aspect pair; otići pairs with odlaziti.',
  },
  {
    mode: 'vid',
    q: 'Koji je par nesvršeni / svršeni glagol za "enter"?',
    en: 'Which is the imperfective / perfective pair for "enter"?',
    opts: ['ulaziti / ući', 'ući / ulaziti', 'ići / ući', 'izlaziti / ući'],
    answer: 'ulaziti / ući',
    tip: 'The imperfective comes first: ulaziti, then the perfective ući.',
  },
  {
    mode: 'vid',
    q: 'Odlazim sutra ujutro, a ____ se u nedjelju.',
    en: 'I am leaving tomorrow morning and coming back on Sunday.',
    opts: ['vraćam', 'vratim', 'vratio', 'vraćao'],
    answer: 'vraćam',
    tip: 'A plan in the present, like odlazim: imperfective vraćati se.',
  },
  {
    mode: 'vid',
    q: 'Došli su u devet i u ponoć su ____.',
    en: 'They came at nine and at midnight they left.',
    opts: ['otišli', 'odlazili', 'išli', 'dolazili'],
    answer: 'otišli',
    tip: 'One completed departure at a point in time: perfective.',
  },
  {
    mode: 'vid',
    q: 'Svake godine ljeti ____ na Hvar.',
    en: 'Every year in summer we go to Hvar.',
    opts: ['idemo', 'otišli', 'išli', 'otići'],
    answer: 'idemo',
    tip: 'A yearly habit: the imperfective ići.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Sutra idemo na ____. (plaža)',
    en: 'Tomorrow we are going to the beach.',
    opts: ['plažu', 'plaži', 'plaže', 'plažom'],
    answer: 'plažu',
    tip: 'A destination after a verb of motion: accusative.',
  },
  {
    mode: 'padez',
    q: 'Cijeli dan smo na ____. (plaža)',
    en: 'We are on the beach all day.',
    opts: ['plaži', 'plažu', 'plaže', 'plažom'],
    answer: 'plaži',
    tip: 'Being somewhere: locative.',
  },
  {
    mode: 'padez',
    q: 'Idem u ____ kupiti kruh.',
    en: 'I am going into town to buy bread.',
    opts: ['grad', 'gradu', 'grada', 'gradom'],
    answer: 'grad',
    tip: 'u + accusative for where the movement leads; grad does not change.',
  },
  {
    mode: 'padez',
    q: 'Volim šetati po ____. (grad)',
    en: 'I like walking around the town.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    tip: 'po + locative: moving around inside a place.',
  },
  {
    mode: 'padez',
    q: 'Ušao je u ____ i sjeo. (kuhinja)',
    en: 'He went into the kitchen and sat down.',
    opts: ['kuhinju', 'kuhinji', 'kuhinje', 'kuhinjom'],
    answer: 'kuhinju',
    tip: 'ući u + accusative: into.',
  },
  {
    mode: 'padez',
    q: 'Izašao sam iz ____ u sedam. (kuća)',
    en: 'I left the house at seven.',
    opts: ['kuće', 'kuću', 'kući', 'kućom'],
    answer: 'kuće',
    tip: 'iz always takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Spot the error: "Idem u gradu."',
    en: 'Find the mistake.',
    opts: [
      'gradu should be grad — a destination is accusative',
      'u should be na',
      'idem should be odem',
      'nothing is wrong',
    ],
    answer: 'gradu should be grad — a destination is accusative',
    tip: 'u gradu is where you already are.',
  },
];
