// src/data/drills/a1/boljetiDrill.ts
//
// A1 WHAT HURTS? — the drill for the `boljeti` lesson (new A1, 88).
//
// The body part is the subject and the person is the object, in the short
// accusative: Boli me glava. The verb counts the body part — boli for one, bole for
// several (and leđa is always plural). Another person goes into the accusative too:
// Mariju boli glava, Ivana bole leđa. In the past the participle agrees with the body
// part, je follows the short pronoun and su precedes it. Boli mi glava is heard from
// natives (the standard is me), so a dative form is NEVER offered as a wrong option:
// the distractors are the subject form, the wrong person or a stray verb (2026-11-13).
// A possessive is not a distractor either: Boli njegov zub is correct Croatian.
//
// Three modes:
//   zamjenice — me, te, ga, je, nas, vas, ih, and named people
//   broj      — boli or bole
//   proslo    — the past, questions and no

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const BOLJETI_MODE_LABELS: Record<string, string> = {
  zamjenice: '🤕 Koga boli?',
  broj: '🦵 Boli ili bole?',
  proslo: '⏪ Jučer, pitanja i ne',
};

export const BOLJETI_DRILL_DATA: ModeDrillItem[] = [
  // ── zamjenice ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenice',
    q: 'Boli ____ glava.',
    en: 'I have a headache.',
    opts: ['me', 'te', 'ja', 'sam'],
    answer: 'me',
    tip: 'boljeti takes the short accusative form.',
  },
  {
    mode: 'zamjenice',
    q: 'Boli ____ zub.',
    en: 'He has toothache.',
    opts: ['ga', 'me', 'on', 'je'],
    answer: 'ga',
    tip: 'The short accusative for on.',
  },
  {
    mode: 'zamjenice',
    q: 'Boli ____ grlo.',
    en: 'She has a sore throat.',
    opts: ['je', 'te', 'ona', 'ga'],
    answer: 'je',
    tip: 'The short accusative for ona.',
  },
  {
    mode: 'zamjenice',
    q: 'Bole ____ noge.',
    en: 'Our legs hurt.',
    opts: ['nas', 'ih', 'mi', 'smo'],
    answer: 'nas',
    tip: 'The short accusative for mi.',
  },
  {
    mode: 'zamjenice',
    q: 'Bole li ____ leđa?',
    en: 'Does your back hurt? (polite)',
    opts: ['vas', 'nas', 'vi', 'ste'],
    answer: 'vas',
    tip: 'The short accusative for vi.',
  },
  {
    mode: 'zamjenice',
    q: 'Bole ____ oči.',
    en: 'Their eyes hurt.',
    opts: ['ih', 'ga', 'oni', 'su'],
    answer: 'ih',
    tip: 'The short accusative for oni.',
  },
  {
    mode: 'zamjenice',
    q: '____ boli glava.',
    en: 'Marija has a headache.',
    opts: ['Mariju', 'Marija', 'Marijin', 'Marijom'],
    answer: 'Mariju',
    tip: 'The person is the object: feminine -a becomes -u.',
  },
  {
    mode: 'zamjenice',
    q: '____ bole leđa.',
    en: "Ivan's back hurts.",
    opts: ['Ivana', 'Ivan', 'Ivanov', 'Ivanom'],
    answer: 'Ivana',
    tip: 'A man is a living masculine noun: his accusative ends in -a.',
  },

  // ── broj ──────────────────────────────────────────────────────────────────
  {
    mode: 'broj',
    q: '____ me noge.',
    en: 'My legs hurt.',
    opts: ['Bole', 'Boli', 'Bolim', 'Boliš'],
    answer: 'Bole',
    tip: 'Several legs: the plural verb.',
  },
  {
    mode: 'broj',
    q: '____ me noga.',
    en: 'My leg hurts.',
    opts: ['Boli', 'Bole', 'Bolim', 'Bolite'],
    answer: 'Boli',
    tip: 'One leg: the singular verb.',
  },
  {
    mode: 'broj',
    q: '____ ga zubi.',
    en: 'His teeth hurt.',
    opts: ['Bole', 'Boli', 'Bolimo', 'Boliš'],
    answer: 'Bole',
    tip: 'zubi is plural.',
  },
  {
    mode: 'broj',
    q: '____ me leđa.',
    en: 'My back hurts.',
    opts: ['Bole', 'Boli', 'Bolim', 'Boljelo'],
    answer: 'Bole',
    tip: 'leđa only exists in the plural.',
  },
  {
    mode: 'broj',
    q: '____ li te uho?',
    en: 'Does your ear hurt?',
    opts: ['Boli', 'Bole', 'Boliš', 'Bolim'],
    answer: 'Boli',
    tip: 'One ear: the singular verb; the ear is the subject, not you.',
  },
  {
    mode: 'broj',
    q: 'Bole me ____.',
    en: 'My ears hurt.',
    opts: ['uši', 'uho', 'uha', 'ušima'],
    answer: 'uši',
    tip: 'The plural of uho is uši.',
  },
  {
    mode: 'broj',
    q: 'Boli me ____.',
    en: 'My stomach hurts.',
    opts: ['trbuh', 'trbuha', 'trbuhu', 'trbuhom'],
    answer: 'trbuh',
    tip: 'The body part is the subject: the plain form.',
  },
  {
    mode: 'broj',
    q: '____ nas glave.',
    en: 'Our heads hurt.',
    opts: ['Bole', 'Boli', 'Bolimo', 'Bolite'],
    answer: 'Bole',
    tip: 'glave is plural, so the verb is plural.',
  },

  // ── proslo ────────────────────────────────────────────────────────────────
  {
    mode: 'proslo',
    q: 'Jučer me je ____ glava.',
    en: 'Yesterday I had a headache.',
    opts: ['boljela', 'bolio', 'boljelo', 'boljeli'],
    answer: 'boljela',
    tip: 'glava is feminine: the past ends in -la.',
  },
  {
    mode: 'proslo',
    q: 'Jučer ga je ____ zub.',
    en: 'Yesterday he had toothache.',
    opts: ['bolio', 'boljela', 'boljelo', 'boljele'],
    answer: 'bolio',
    tip: 'zub is masculine singular.',
  },
  {
    mode: 'proslo',
    q: 'Jučer me je ____ grlo.',
    en: 'Yesterday my throat hurt.',
    opts: ['boljelo', 'bolio', 'boljela', 'boljeli'],
    answer: 'boljelo',
    tip: 'grlo is neuter: the past ends in -lo.',
  },
  {
    mode: 'proslo',
    q: 'Jučer ____ me boljele noge.',
    en: 'Yesterday my legs hurt.',
    opts: ['su', 'je', 'sam', 'smo'],
    answer: 'su',
    tip: 'Several legs: the plural auxiliary, which comes before me.',
  },
  {
    mode: 'proslo',
    q: '____ te boli?',
    en: 'What hurts?',
    opts: ['Što', 'Tko', 'Koga', 'Čega'],
    answer: 'Što',
    tip: 'The thing that hurts is the subject: što.',
  },
  {
    mode: 'proslo',
    q: 'Ništa me ____ boli.',
    en: 'Nothing hurts.',
    opts: ['ne', 'ni', 'nije', 'nema'],
    answer: 'ne',
    tip: 'ništa still needs ne right before the verb.',
  },
  {
    mode: 'proslo',
    q: 'Gdje ____ boli?',
    en: 'Where does it hurt? (polite)',
    opts: ['vas', 'ste', 'vi', 'vaš'],
    answer: 'vas',
    tip: 'boljeti takes the accusative: vas.',
  },
  {
    mode: 'proslo',
    q: 'Više me ne ____.',
    en: 'It does not hurt any more.',
    opts: ['boli', 'bolim', 'boliš', 'bolimo'],
    answer: 'boli',
    tip: 'It is the thing that hurts: third person singular.',
  },
];
