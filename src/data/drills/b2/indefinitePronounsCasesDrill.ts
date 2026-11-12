// src/data/drills/b2/indefinitePronounsCasesDrill.ts
//
// B2 INDEFINITE PRONOUNS IN EVERY CASE — the drill for the `indefinite-pronouns-cases`
// lesson.
//
// The short and long forms (nekoga / nekog, nekomu / nekome / nekom) are all standard, so
// no item offers two of them. With a preposition nitko and ništa split (ni s kim, ni o
// čemu); the unsplit forms are colloquial and are the distractors the split items test.
//
// Three modes:
//   padezi — netko, nešto, nitko, ništa, svatko, svašta in their cases
//   ni     — the split: ni + preposition + pronoun
//   izbor  — which pronoun, and the double negative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INDEFINITE_PRONOUNS_CASES_MODE_LABELS: Record<string, string> = {
  padezi: '🔤 Padeži',
  ni: '✂️ Ni s kim',
  izbor: '❓ Izbor',
};

export const INDEFINITE_PRONOUNS_CASES_DRILL_DATA: ModeDrillItem[] = [
  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Čekam ____ ispred kina.',
    en: 'I am waiting for someone in front of the cinema.',
    opts: ['nekoga', 'netko', 'nekomu', 'nekim'],
    answer: 'nekoga',
    tip: 'The object of čekati: accusative.',
  },
  {
    mode: 'padezi',
    q: 'Razgovarala sam s ____ iz banke.',
    en: 'I talked with someone from the bank.',
    opts: ['nekim', 'netko', 'nekoga', 'nekomu'],
    answer: 'nekim',
    tip: 's + instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Ne poznajem ____ u ovom gradu.',
    en: 'I do not know anyone in this town.',
    opts: ['nikoga', 'nitko', 'nikim', 'ništa'],
    answer: 'nikoga',
    tip: 'The object, a person, with ni-.',
  },
  {
    mode: 'padezi',
    q: 'Bojim se ____.',
    en: 'I am afraid of something.',
    opts: ['nečega', 'nešto', 'nečemu', 'nečim'],
    answer: 'nečega',
    tip: 'bojati se takes the genitive.',
  },
  {
    mode: 'padezi',
    q: 'Bavi se ____ zanimljivim.',
    en: 'He does something interesting.',
    opts: ['nečim', 'nešto', 'nečega', 'nečemu'],
    answer: 'nečim',
    tip: 'baviti se takes the instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Ne vjerujem ____.',
    en: 'I trust no one.',
    opts: ['nikomu', 'nitko', 'nikim', 'nikoga'],
    answer: 'nikomu',
    tip: 'vjerovati takes the dative.',
  },
  {
    mode: 'padezi',
    q: 'Ne bojim se ____.',
    en: 'I am not afraid of anything.',
    opts: ['ničega', 'ničemu', 'ničim', 'nešto'],
    answer: 'ničega',
    tip: 'bojati se + genitive, with ni- because the verb is negated.',
  },
  {
    mode: 'padezi',
    q: 'Dali smo poklon ____ u razredu.',
    en: 'We gave a present to everyone in the class.',
    opts: ['svakome', 'svatko', 'svakoga', 'svakim'],
    answer: 'svakome',
    tip: 'To whom? — the dative.',
  },
  {
    mode: 'padezi',
    q: 'Na sajmu smo vidjeli ____.',
    en: 'At the fair we saw all sorts of things.',
    opts: ['svašta', 'svačemu', 'svačim', 'svakoga'],
    answer: 'svašta',
    tip: 'The accusative of svašta is svašta.',
  },
  {
    mode: 'padezi',
    q: 'Ovo je poklon za ____ posebnog.',
    en: 'This is a present for someone special.',
    opts: ['nekoga', 'netko', 'nekomu', 'nekim'],
    answer: 'nekoga',
    tip: 'za + accusative.',
  },
  // ── ni ────────────────────────────────────────────────────────────────────
  {
    mode: 'ni',
    q: 'Ni ____ nisam razgovarao.',
    en: 'I did not talk with anyone.',
    opts: ['s kim', 's nikim', 'kim s', 's koga'],
    answer: 's kim',
    tip: 'ni, then the preposition, then the instrumental.',
  },
  {
    mode: 'ni',
    q: 'Nisam dobila poruku ni ____.',
    en: 'I did not get a message from anyone.',
    opts: ['od koga', 'od nikoga', 'koga od', 'od kim'],
    answer: 'od koga',
    tip: 'od + genitive, split around ni.',
  },
  {
    mode: 'ni',
    q: 'Ne razmišljam ni ____.',
    en: 'I am not thinking about anything.',
    opts: ['o čemu', 'o ničemu', 'čemu o', 'o čega'],
    answer: 'o čemu',
    tip: 'o + locative, split around ni.',
  },
  {
    mode: 'ni',
    q: 'To nisam kupio ni ____.',
    en: 'I did not buy that for anyone.',
    opts: ['za koga', 'za nikoga', 'koga za', 'za kim'],
    answer: 'za koga',
    tip: 'za + accusative, split around ni.',
  },
  {
    mode: 'ni',
    q: 'Koja je rečenica standardna?',
    en: 'Which sentence is standard Croatian?',
    opts: [
      'Ni s kim ne razgovaram.',
      'S nikim ne razgovaram.',
      'Kim s ni ne razgovaram.',
      'Ni s koga ne razgovaram.',
    ],
    answer: 'Ni s kim ne razgovaram.',
    tip: 'The split form, with the verb negated.',
  },
  {
    mode: 'ni',
    q: 'Koja je rečenica standardna?',
    en: 'Which sentence is standard Croatian?',
    opts: ['Ni o čemu ne znam.', 'O ničemu ne znam.', 'O ni čemu ne znam.', 'Ni o ničemu ne znam.'],
    answer: 'Ni o čemu ne znam.',
    tip: 'ni — preposition — pronoun.',
  },
  {
    mode: 'ni',
    q: 'Nije se svađao ni ____.',
    en: 'He did not argue with anyone.',
    opts: ['s kim', 's nikim', 'kim s', 's kome'],
    answer: 's kim',
    tip: 's + instrumental kim, after ni.',
  },
  {
    mode: 'ni',
    q: 'Ne ovisim ni ____.',
    en: 'I do not depend on anyone.',
    opts: ['o kome', 'o nikome', 'kome o', 'o koga'],
    answer: 'o kome',
    tip: 'ovisiti o + locative, split around ni.',
  },
  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: '____ te traži na telefonu.',
    en: 'Someone is asking for you on the phone.',
    opts: ['Netko', 'Nitko', 'Nekoga', 'Nikoga'],
    answer: 'Netko',
    tip: 'The subject: someone.',
  },
  {
    mode: 'izbor',
    q: '____ ne zna gdje su ključevi.',
    en: 'Nobody knows where the keys are.',
    opts: ['Nitko', 'Nikoga', 'Nikomu', 'Nikim'],
    answer: 'Nitko',
    tip: 'The subject, in the nominative.',
  },
  {
    mode: 'izbor',
    q: 'Je li ____ zvao?',
    en: 'Did anyone call?',
    opts: ['itko', 'ikoga', 'ikomu', 'ikim'],
    answer: 'itko',
    tip: 'Anyone at all, as the subject of a question.',
  },
  {
    mode: 'izbor',
    q: '____ ima pravo na svoje mišljenje.',
    en: 'Everyone has the right to their own opinion.',
    opts: ['Svatko', 'Svakoga', 'Svakome', 'Svakim'],
    answer: 'Svatko',
    tip: 'The subject: everyone.',
  },
  {
    mode: 'izbor',
    q: 'Ima li ____ za jelo?',
    en: 'Is there anything at all to eat?',
    opts: ['išta', 'ičemu', 'ičim', 'ništa'],
    answer: 'išta',
    tip: 'Anything at all, in a question.',
  },
  {
    mode: 'izbor',
    q: 'Nitko ____ došao.',
    en: 'Nobody came.',
    opts: ['nije', 'je', 'ni', 'nisu'],
    answer: 'nije',
    tip: 'Croatian negates twice: nitko AND nije.',
  },
  {
    mode: 'izbor',
    q: 'Ništa ____ vidim.',
    en: 'I see nothing.',
    opts: ['ne', 'ni', 'nije', 'nisam'],
    answer: 'ne',
    tip: 'The verb is negated as well.',
  },
  {
    mode: 'izbor',
    q: 'Ostao je bez ____.',
    en: 'He was left without anyone.',
    opts: ['ikoga', 'itko', 'ikomu', 'ikim'],
    answer: 'ikoga',
    tip: 'bez + genitive.',
  },
];
