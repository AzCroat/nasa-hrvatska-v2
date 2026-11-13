// src/data/drills/a1/imperativeNegativeDrill.ts
//
// A1 NEGATIVE COMMANDS — the drill for the `imperative-negative` lesson.
//
// nemoj / nemojte / nemojmo + the infinitive is the everyday way to say "don't"; ne + the
// imperative is the short warning (Ne diraj!). Little words go straight after nemoj.
//
// Three modes:
//   nemoj     — nemoj + infinitive, and where the clitics go
//   ne        — ne + imperative
//   pristojno — the polite nemojte
//   neka      — neka + the present for someone else (book L20, added 2026-11-13)
// reći → reci is not asked: the lesson 94 rule cannot produce it, and neither is the
// untaught negative pronoun nikome.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IMPERATIVE_NEGATIVE_MODE_LABELS: Record<string, string> = {
  nemoj: '✋ Nemoj',
  ne: '🚫 Ne + imperativ',
  pristojno: '🎩 Pristojno',
  neka: '👉 Neka',
};

export const IMPERATIVE_NEGATIVE_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'nemoj',
    q: 'Nemoj ____!',
    en: "Don't go!",
    opts: ['ići', 'ideš', 'idi', 'idem'],
    answer: 'ići',
    tip: 'Nemoj takes the infinitive.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj ____ kasno.',
    en: "Don't come late.",
    opts: ['doći', 'dođeš', 'dođi', 'dođem'],
    answer: 'doći',
    tip: 'After nemoj, the infinitive.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj ____ kruh.',
    en: "Don't forget the bread.",
    opts: ['zaboraviti', 'zaboraviš', 'zaboravi', 'zaboravio'],
    answer: 'zaboraviti',
    tip: 'The verb stays in the infinitive.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj ____ reći kraj filma.',
    en: "Don't tell me the end of the film.",
    opts: ['mi', 'me', 'mene', 'moj'],
    answer: 'mi',
    tip: 'The short dative, straight after nemoj.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj ____ zvati.',
    en: "Don't call him.",
    opts: ['ga', 'mu', 'njemu', 'on'],
    answer: 'ga',
    tip: 'The short accusative, straight after nemoj.',
  },
  {
    mode: 'nemoj',
    q: '____ kasniti, film počinje u osam.',
    en: "Let's not be late, the film starts at eight.",
    opts: ['Nemojmo', 'Nemoj', 'Nemojte', 'Ne'],
    answer: 'Nemojmo',
    tip: 'Nemojmo = let us not.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj se ____.',
    en: "Don't worry.",
    opts: ['brinuti', 'brineš', 'brini', 'brinem'],
    answer: 'brinuti',
    tip: 'se after nemoj, then the infinitive.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj to ____!',
    en: "Don't drink that!",
    opts: ['piti', 'piješ', 'pij', 'pio'],
    answer: 'piti',
    tip: 'After nemoj, the infinitive.',
  },
  {
    mode: 'ne',
    q: 'Ne ____, vruće je!',
    en: "Don't touch, it's hot!",
    opts: ['diraj', 'diraš', 'dirao', 'diraju'],
    answer: 'diraj',
    tip: 'Ne + the imperative.',
  },
  {
    mode: 'ne',
    q: 'Ne ____, sve će biti dobro.',
    en: "Don't cry, everything will be fine.",
    opts: ['plači', 'plačeš', 'plakao', 'plaču'],
    answer: 'plači',
    tip: 'The imperative of plakati.',
  },
  {
    mode: 'ne',
    q: 'Ne ____!',
    en: "Don't shout!",
    opts: ['viči', 'vičeš', 'vikao', 'viču'],
    answer: 'viči',
    tip: 'The imperative of vikati.',
  },
  {
    mode: 'ne',
    q: 'Ne ____ to mami.',
    en: "Don't tell Mum that.",
    opts: ['pričaj', 'pričaš', 'pričao', 'pričati'],
    answer: 'pričaj',
    tip: 'The imperative of pričati: the oni form pričaju, then -j.',
  },
  {
    mode: 'ne',
    q: 'Ne ____ se!',
    en: "Don't be angry!",
    opts: ['ljuti', 'ljutiš', 'ljutio', 'ljutiti'],
    answer: 'ljuti',
    tip: 'The imperative of ljutiti se.',
  },
  {
    mode: 'ne',
    q: 'Ne ____, stići ćemo.',
    en: "Don't worry, we'll make it.",
    opts: ['brini', 'brineš', 'brinuo', 'brinu'],
    answer: 'brini',
    tip: 'The imperative of brinuti.',
  },
  {
    mode: 'ne',
    q: 'Ne ____ se kroz prozor!',
    en: "Don't lean out of the window!",
    opts: ['naginji', 'naginješ', 'naginjao', 'naginju'],
    answer: 'naginji',
    tip: 'The imperative of naginjati se.',
  },
  {
    mode: 'ne',
    q: 'Koja rečenica zabranjuje nešto jednom prijatelju?',
    en: 'Which sentence forbids something to one friend?',
    opts: ['Ne diraj!', 'Ne diraš.', 'Ne dira.', 'Ne diram.'],
    answer: 'Ne diraj!',
    tip: 'Ne + the imperative is a command; the others are statements.',
  },
  {
    mode: 'pristojno',
    q: 'Molim vas, ____ pušiti ovdje.',
    en: 'Please do not smoke here.',
    opts: ['nemojte', 'nemoj', 'nemojmo', 'nemam'],
    answer: 'nemojte',
    tip: 'Molim vas calls for nemojte.',
  },
  {
    mode: 'pristojno',
    q: 'Nemojte se ____.',
    en: 'Please do not worry.',
    opts: ['brinuti', 'brinete', 'brinite', 'brinu'],
    answer: 'brinuti',
    tip: 'After nemojte, the infinitive.',
  },
  {
    mode: 'pristojno',
    q: 'Nemojte ____ zaboraviti.',
    en: 'Please do not forget it (the umbrella).',
    opts: ['ga', 'mu', 'on', 'njemu'],
    answer: 'ga',
    tip: 'Kišobran is masculine: the short accusative ga.',
  },
  {
    mode: 'pristojno',
    q: '____ se ljutiti, molim vas.',
    en: 'Please do not be angry.',
    opts: ['Nemojte', 'Nemoj', 'Nemojmo', 'Nemam'],
    answer: 'Nemojte',
    tip: 'Molim vas calls for the polite form.',
  },
  {
    mode: 'pristojno',
    q: 'Nemojte ____ prije devet.',
    en: 'Please do not come before nine.',
    opts: ['doći', 'dođete', 'dođite', 'dođu'],
    answer: 'doći',
    tip: 'The infinitive after nemojte.',
  },
  {
    mode: 'pristojno',
    q: 'Nemojte ____ glasno, dijete spava.',
    en: 'Please do not speak loudly, the child is sleeping.',
    opts: ['govoriti', 'govorite', 'govori', 'govore'],
    answer: 'govoriti',
    tip: 'The infinitive after nemojte.',
  },
  {
    mode: 'pristojno',
    q: 'Ne ____ se kroz prozor!',
    en: 'Please do not lean out of the window!',
    opts: ['naginjite', 'naginji', 'naginjete', 'naginju'],
    answer: 'naginjite',
    tip: 'The polite imperative after ne.',
  },
  {
    mode: 'pristojno',
    q: 'Koja je rečenica pristojna?',
    en: 'Which sentence is polite?',
    opts: [
      'Nemojte kasniti, molim vas.',
      'Nemoj kasniti, molim vas.',
      'Nemojte kasnite, molim vas.',
      'Nemoj kasniš, molim te.',
    ],
    answer: 'Nemojte kasniti, molim vas.',
    tip: 'Nemojte, the infinitive, and molim vas, all polite.',
  },
  {
    mode: 'neka',
    q: 'Gospodin Horvat je stigao. — ____ čeka pet minuta.',
    en: 'Mr Horvat has arrived. — Let him wait five minutes.',
    opts: ['Neka', 'Nemoj', 'Čekaj', 'Nemojte'],
    answer: 'Neka',
    tip: 'For someone else, not "you": neka + the present.',
  },
  {
    mode: 'neka',
    q: 'Neka on ____ račun.',
    en: 'Let him pay the bill.',
    opts: ['plati', 'platiti', 'platio', 'platite'],
    answer: 'plati',
    tip: 'After neka comes the ordinary present form for on.',
  },
  {
    mode: 'neka',
    q: 'Neka djeca ____ vani.',
    en: 'Let the children play outside.',
    opts: ['igraju', 'igrati', 'igrajte', 'igraj'],
    answer: 'igraju',
    tip: 'neka + the present form for oni.',
  },
  {
    mode: 'neka',
    q: 'Ako je umoran, neka ____ kući.',
    en: 'If he is tired, let him go home.',
    opts: ['ide', 'ići', 'idi', 'idite'],
    answer: 'ide',
    tip: 'neka + the present form for on: ide.',
  },
];
