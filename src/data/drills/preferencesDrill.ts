// src/data/drills/preferencesDrill.ts
//
// A1 LIKES & PREFERENCES — the drill for the `likes-preferences` lesson.
//
// This is the least "topical" lesson in the topical block. Its subject is a
// SYNTACTIC FLIP that has no English equivalent: *voljeti* behaves the way
// English "like" does — *volim kavu*, plain object — while *sviđati se* turns
// the sentence inside out. The thing becomes the SUBJECT and the person becomes
// a dative clitic. *Sviđa mi se film* is "the film appeals to me", and the verb
// counts the FILM, not you: *sviđaju mi se filmovi*.
//
// A learner who has not been made to do this says *sviđam film* for years, and
// it is not a vocabulary slip — the sentence has been assembled backwards.
//
// Three modes:
//   voljeti  — voljeti vs sviđati se, and which to reach for
//   zamjenice — the dative clitic that names the person
//   slaganje — the verb agrees with the THING

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PREFERENCES_MODE_LABELS: Record<string, string> = {
  voljeti: '💚 Voljeti ili sviđati se',
  zamjenice: '👤 Kome se sviđa',
  slaganje: '🔢 Slaganje s predmetom',
};

export const PREFERENCES_DRILL_DATA: ModeDrillItem[] = [
  // ── voljeti ───────────────────────────────────────────────────────────────
  {
    mode: 'voljeti',
    q: '____ kavu.',
    en: 'I like coffee.',
    opts: ['Volim', 'Sviđa mi se', 'Sviđam', 'Sviđa se'],
    answer: 'Volim',
    tip: 'Voljeti works like English: subject, verb, plain object. Volim kavu.',
  },
  {
    mode: 'voljeti',
    q: 'Koji padež traži "voljeti"?',
    en: 'Which case does voljeti take?',
    opts: ['akuzativ', 'dativ', 'genitiv', 'nominativ'],
    answer: 'akuzativ',
    tip: 'Accusative — an ordinary direct object.',
  },
  {
    mode: 'voljeti',
    q: 'Kako "sviđati se" mijenja rečenicu?',
    en: 'What does sviđati se do?',
    opts: ['stvar postaje subjekt', 'ništa se ne mijenja', 'traži genitiv', 'briše subjekt'],
    answer: 'stvar postaje subjekt',
    tip: 'The thing becomes the subject and you become a dative. The sentence flips.',
  },
  {
    mode: 'voljeti',
    q: 'Kako najbolje misliti o "sviđa mi se"?',
    en: 'How should you think of it?',
    opts: ['to mi se dopada', 'ja to volim', 'ja to imam', 'to je moje'],
    answer: 'to mi se dopada',
    tip: 'Think "it appeals to me", never "I like it". The English frame is what misleads.',
  },
  {
    mode: 'voljeti',
    q: 'Zašto je "Sviđam film" pogrešno?',
    en: 'Why is that wrong?',
    opts: ['film mora biti subjekt', 'treba genitiv', 'nedostaje "se"', 'nije pogrešno'],
    answer: 'film mora biti subjekt',
    tip: 'It says "I appeal to the film". The sentence has been built backwards.',
  },
  {
    mode: 'voljeti',
    q: 'Za osobu koju volite rabi se ____.',
    en: 'For a person you love:',
    opts: ['voljeti', 'sviđati se', 'oboje jednako', 'nijedno'],
    answer: 'voljeti',
    tip: 'Volim te. Sviđaš mi se is a good deal lighter — closer to "I fancy you".',
  },
  {
    mode: 'voljeti',
    q: 'Više ____ čaj nego kavu.',
    en: 'I prefer tea to coffee.',
    opts: ['volim', 'sviđam', 'sviđa mi se', 'volim se'],
    answer: 'volim',
    tip: 'Više volim X nego Y — the standard way to say you prefer something.',
  },
  {
    mode: 'voljeti',
    q: 'Koja je razlika u težini: "volim te" i "sviđaš mi se"?',
    en: 'Which is stronger?',
    opts: ['volim te', 'sviđaš mi se', 'jednake su', 'ovisi o tonu'],
    answer: 'volim te',
    tip: 'Volim te is love. Sviđaš mi se is attraction — and the difference matters.',
  },

  // ── zamjenice ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenice',
    q: 'Sviđa ____ se. (meni)',
    en: 'I like it.',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'The person is a DATIVE clitic: mi, ti, mu, joj, nam, vam, im.',
  },
  {
    mode: 'zamjenice',
    q: 'Sviđa ____ se? (tebi)',
    en: 'Do you like it?',
    opts: ['ti', 'te', 'tebe', 'tvoj'],
    answer: 'ti',
    tip: 'Sviđa ti se? — the everyday way to ask.',
  },
  {
    mode: 'zamjenice',
    q: 'Sviđa ____ se. (njoj)',
    en: 'She likes it.',
    opts: ['joj', 'je', 'nju', 'njezin'],
    answer: 'joj',
    tip: 'Dative joj, not accusative je.',
  },
  {
    mode: 'zamjenice',
    q: 'Sviđa ____ se. (njemu)',
    en: 'He likes it.',
    opts: ['mu', 'ga', 'njega', 'njegov'],
    answer: 'mu',
    tip: 'mu — the same dative clitic set as in daj mu, reci mu.',
  },
  {
    mode: 'zamjenice',
    q: 'Koji padež nosi osobu?',
    en: 'Which case carries the person?',
    opts: ['dativ', 'akuzativ', 'genitiv', 'nominativ'],
    answer: 'dativ',
    tip: 'Dative throughout — the thing appeals TO someone.',
  },
  {
    mode: 'zamjenice',
    q: 'Sviđa ____ se. (nama)',
    en: 'We like it.',
    opts: ['nam', 'nas', 'mi', 'naše'],
    answer: 'nam',
    tip: 'nam. Nas would be the accusative and belongs to a different verb.',
  },
  {
    mode: 'zamjenice',
    q: 'Gdje stoji "mi" u rečenici?',
    en: 'Where does the clitic sit?',
    opts: ['na drugome mjestu', 'na početku', 'na kraju', 'bilo gdje'],
    answer: 'na drugome mjestu',
    tip: 'Second position, like every Croatian clitic: sviđa mi se, meni se sviđa.',
  },
  {
    mode: 'zamjenice',
    q: 'Sviđa ____ se. (njima)',
    en: 'They like it.',
    opts: ['im', 'ih', 'njih', 'njihov'],
    answer: 'im',
    tip: 'im — dative plural.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: '____ mi se film.',
    en: 'I like the film.',
    opts: ['Sviđa', 'Sviđaju', 'Sviđam', 'Sviđaš'],
    answer: 'Sviđa',
    tip: 'One film → singular verb. The verb counts the THING, not the person.',
  },
  {
    mode: 'slaganje',
    q: '____ mi se filmovi.',
    en: 'I like films.',
    opts: ['Sviđaju', 'Sviđa', 'Sviđam', 'Sviđamo'],
    answer: 'Sviđaju',
    tip: 'Films are plural → sviđaju. The mi never changes.',
  },
  {
    mode: 'slaganje',
    q: 'S čime se slaže glagol?',
    en: 'What does the verb agree with?',
    opts: ['sa stvari', 's osobom', 'ni s čim', 's oboje'],
    answer: 'sa stvari',
    tip: 'With the thing, which is the grammatical subject.',
  },
  {
    mode: 'slaganje',
    q: '____ ti se ova pjesma?',
    en: 'Do you like this song?',
    opts: ['Sviđa', 'Sviđaju', 'Sviđaš', 'Sviđam'],
    answer: 'Sviđa',
    tip: 'One song → sviđa.',
  },
  {
    mode: 'slaganje',
    q: '____ nam se nove cipele.',
    en: 'We like the new shoes.',
    opts: ['Sviđaju', 'Sviđa', 'Sviđamo', 'Sviđate'],
    answer: 'Sviđaju',
    tip: 'Shoes are plural → sviđaju nam se.',
  },
  {
    mode: 'slaganje',
    q: 'Sviđaš ____ se. (ti meni)',
    en: 'I like you.',
    opts: ['mi', 'ti', 'me', 'te'],
    answer: 'mi',
    tip: 'YOU are the subject here, so the verb is sviđaš and I am the dative mi.',
  },
  {
    mode: 'slaganje',
    q: 'U prošlom vremenu: ____ mi se film.',
    en: 'I liked the film.',
    opts: ['Svidio se', 'Sviđao sam', 'Svidjela se', 'Sviđali su'],
    answer: 'Svidio se',
    tip: 'The participle agrees with film, which is masculine: svidio mi se.',
  },
  {
    mode: 'slaganje',
    q: '____ mi se knjiga. (prošlo)',
    en: 'I liked the book.',
    opts: ['Svidjela se', 'Svidio se', 'Svidjelo se', 'Svidjeli su se'],
    answer: 'Svidjela se',
    tip: 'Knjiga is feminine → svidjela mi se.',
  },
];
