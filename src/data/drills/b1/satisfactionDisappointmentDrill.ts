// src/data/drills/b1/satisfactionDisappointmentDrill.ts
//
// B1 SATISFACTION AND DISAPPOINTMENT — the drill for the `satisfaction-disappointment`
// lesson.
//
// zadovoljan, oduševljen and razočaran take the instrumental and agree with the person
// who feels. The reactions mode drills the fixed phrases: Kakva šteta!, Baš mi je
// drago!, Nisam nimalo zadovoljan, Film mi se (nije) svidio.
//
// Three modes:
//   padez    — the instrumental after the adjective
//   rod      — the adjective agreeing with the speaker
//   reakcija — reactions, degrees and reasons

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SATISFACTION_DISAPPOINTMENT_MODE_LABELS: Record<string, string> = {
  padez: '🔤 Instrumental',
  rod: '👫 Slaganje',
  reakcija: '🎭 Reakcije',
};

export const SATISFACTION_DISAPPOINTMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Zadovoljan sam ____ poslom.',
    en: 'I am happy with my new job.',
    opts: ['novim', 'novi', 'novom', 'novu'],
    answer: 'novim',
    tip: 'Zadovoljan + instrumental; posao is masculine: novim poslom.',
  },
  {
    mode: 'padez',
    q: 'Oduševljeni smo ____.',
    en: 'We are thrilled with the concert.',
    opts: ['koncertom', 'koncert', 'koncertu', 'koncerta'],
    answer: 'koncertom',
    tip: 'Oduševljen takes the instrumental with no preposition.',
  },
  {
    mode: 'padez',
    q: 'Razočarana sam ____.',
    en: 'I am disappointed with the result.',
    opts: ['rezultatom', 'rezultat', 'rezultatu', 'rezultata'],
    answer: 'rezultatom',
    tip: 'Razočaran + instrumental: rezultatom.',
  },
  {
    mode: 'padez',
    q: 'Nisam zadovoljan ____ u restoranu.',
    en: 'I am not satisfied with the service in the restaurant.',
    opts: ['uslugom', 'usluga', 'uslugu', 'usluzi'],
    answer: 'uslugom',
    tip: 'Usluga is feminine: uslugom.',
  },
  {
    mode: 'padez',
    q: 'Mama je oduševljena ____ poklonom.',
    en: 'Mum is thrilled with your present.',
    opts: ['tvojim', 'tvoj', 'tvojem', 'tvojom'],
    answer: 'tvojim',
    tip: 'Poklon is masculine: tvojim poklonom.',
  },
  {
    mode: 'padez',
    q: 'Šef je zadovoljan ____ radom.',
    en: 'The boss is pleased with our work.',
    opts: ['našim', 'naš', 'našem', 'našom'],
    answer: 'našim',
    tip: 'Rad is masculine: našim radom.',
  },
  {
    mode: 'padez',
    q: 'Bili smo razočarani ____ hotelom.',
    en: 'We were disappointed with that hotel.',
    opts: ['tim', 'taj', 'tom', 'toj'],
    answer: 'tim',
    tip: 'Hotel is masculine: tim hotelom. Tom is the feminine instrumental.',
  },
  {
    mode: 'padez',
    q: 'Djeca su oduševljena ____ i plažom.',
    en: 'The children are thrilled with the sea and the beach.',
    opts: ['morem', 'more', 'moru', 'mora'],
    answer: 'morem',
    tip: 'Both nouns go into the instrumental: morem i plažom.',
  },
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Ana: "Jako sam ____ svojim stanom."',
    en: 'Ana: I am very pleased with my flat.',
    opts: ['zadovoljna', 'zadovoljan', 'zadovoljni', 'zadovoljne'],
    answer: 'zadovoljna',
    tip: 'One woman: zadovoljna.',
  },
  {
    mode: 'rod',
    q: 'Marko: "Nisam ____ filmom."',
    en: 'Marko: I am not thrilled with the film.',
    opts: ['oduševljen', 'oduševljena', 'oduševljeni', 'oduševljene'],
    answer: 'oduševljen',
    tip: 'One man: oduševljen.',
  },
  {
    mode: 'rod',
    q: 'Ana i Iva su ____ izletom.',
    en: 'Ana and Iva are disappointed with the trip.',
    opts: ['razočarane', 'razočarana', 'razočaran', 'razočarani'],
    answer: 'razočarane',
    tip: 'Two women: the feminine plural, razočarane.',
  },
  {
    mode: 'rod',
    q: 'Marko i Ana su ____ hotelom.',
    en: 'Marko and Ana are pleased with the hotel.',
    opts: ['zadovoljni', 'zadovoljne', 'zadovoljan', 'zadovoljna'],
    answer: 'zadovoljni',
    tip: 'A man and a woman together: the masculine plural, zadovoljni.',
  },
  {
    mode: 'rod',
    q: 'Profesorica je ____ našim radom.',
    en: 'The teacher (a woman) is pleased with our work.',
    opts: ['zadovoljna', 'zadovoljan', 'zadovoljni', 'zadovoljno'],
    answer: 'zadovoljna',
    tip: 'Profesorica is a woman: zadovoljna.',
  },
  {
    mode: 'rod',
    q: 'Moji roditelji su ____ tvojim poklonom.',
    en: 'My parents are thrilled with your present.',
    opts: ['oduševljeni', 'oduševljen', 'oduševljena', 'oduševljene'],
    answer: 'oduševljeni',
    tip: 'Roditelji is masculine plural: oduševljeni.',
  },
  {
    mode: 'rod',
    q: 'Ivan: "Bio sam jako ____ rezultatom."',
    en: 'Ivan: I was very disappointed with the result.',
    opts: ['razočaran', 'razočarana', 'razočarani', 'razočarano'],
    answer: 'razočaran',
    tip: 'One man: razočaran, matching bio.',
  },
  {
    mode: 'rod',
    q: 'Sestra: "Nisam nimalo ____."',
    en: 'My sister: I am not at all satisfied.',
    opts: ['zadovoljna', 'zadovoljan', 'zadovoljni', 'zadovoljno'],
    answer: 'zadovoljna',
    tip: 'Sestra is a woman: zadovoljna.',
  },
  // ── reakcija ──────────────────────────────────────────────────────────────
  {
    mode: 'reakcija',
    q: 'Your friend got the job. What do you say?',
    opts: ['Baš mi je drago!', 'Kakva šteta!', 'Očekivao sam više.', 'Nije mi se svidjelo.'],
    answer: 'Baš mi je drago!',
    tip: 'Baš mi je drago — I am really glad.',
  },
  {
    mode: 'reakcija',
    q: 'The concert was cancelled. What do you say?',
    opts: ['Kakva šteta!', 'Odlično!', 'Super!', 'Prekrasno!'],
    answer: 'Kakva šteta!',
    tip: 'Kakva šteta! — What a pity!',
  },
  {
    mode: 'reakcija',
    q: 'Film mi se nije ____.',
    en: 'I didn’t like the film.',
    opts: ['svidio', 'svidjela', 'svidjelo', 'svidjeti'],
    answer: 'svidio',
    tip: 'The participle agrees with film, which is masculine: svidio.',
  },
  {
    mode: 'reakcija',
    q: 'Nisam ____ zadovoljan.',
    en: 'I am not at all satisfied.',
    opts: ['nimalo', 'ništa', 'nitko', 'nigdje'],
    answer: 'nimalo',
    tip: 'Nisam nimalo — not at all. It needs the negation in front.',
  },
  {
    mode: 'reakcija',
    q: 'Nisam zadovoljan hotelom ____ je soba bila prljava.',
    en: 'I am not happy with the hotel because the room was dirty.',
    opts: ['jer', 'ali', 'ili', 'nego'],
    answer: 'jer',
    tip: 'The dirty room is the reason: jer.',
  },
  {
    mode: 'reakcija',
    q: 'Which sentence means "I am not very pleased"?',
    opts: [
      'Nisam baš zadovoljan.',
      'Jako sam zadovoljan.',
      'Potpuno sam zadovoljan.',
      'Oduševljen sam.',
    ],
    answer: 'Nisam baš zadovoljan.',
    tip: 'Nisam baš is "not very"; nisam nimalo would be "not at all".',
  },
  {
    mode: 'reakcija',
    q: 'Drago mi je ____ ste došli.',
    en: 'I am glad you came.',
    opts: ['što', 'koji', 'ili', 'nego'],
    answer: 'što',
    tip: 'After drago, žao and šteta the reason follows što.',
  },
  {
    mode: 'reakcija',
    q: 'Očekivala sam ____.',
    en: 'I expected more.',
    opts: ['više', 'najviše', 'manje', 'mnogi'],
    answer: 'više',
    tip: 'Više is the comparative of mnogo: more.',
  },
];
