// src/data/drills/imatiDrill.ts
//
// A1 IMATI / NEMATI — the drill for the `imati-nemati` lesson.
//
// This looks like a vocabulary item and is actually a grammar one, which is why
// it deserves its own drill: imati takes the ACCUSATIVE, nemati flips its object
// to the GENITIVE, and the negative fuses into one word. A learner who has only
// met "imam" will say "nemam vrijeme" for years unless something asks.
//
// Three modes:
//   oblici  — the conjugation, positive and negative
//   padez   — accusative after imati, genitive after nemati
//   izrazi  — the set phrases built on it (imati pravo, ima li, nema veze)

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const IMATI_MODE_LABELS: Record<string, string> = {
  oblici: '🔤 Oblici',
  padez: '🎯 Padež objekta',
  izrazi: '💬 Ustaljeni izrazi',
};

export const IMATI_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ sestru.',
    en: 'I have a sister.',
    opts: ['imam', 'imaš', 'ima', 'imamo'],
    answer: 'imam',
    tip: 'imam, imaš, ima, imamo, imate, imaju.',
  },
  {
    mode: 'oblici',
    q: 'Oni ____ dvoje djece.',
    en: 'They have two children.',
    opts: ['imaju', 'ima', 'imamo', 'imate'],
    answer: 'imaju',
    tip: 'Third person plural: imaju.',
  },
  {
    mode: 'oblici',
    q: 'Ti ____ vremena?',
    en: 'Do you have time?',
    opts: ['imaš', 'imam', 'ima', 'imate'],
    answer: 'imaš',
    tip: 'Second person singular: imaš.',
  },
  {
    mode: 'oblici',
    q: 'Ja ____ novca.',
    en: 'I do not have money.',
    opts: ['nemam', 'ne imam', 'nisam', 'neću'],
    answer: 'nemam',
    tip: 'Imati is one of the four verbs that fuse with ne: nemam, never "ne imam".',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ auto.',
    en: 'We do not have a car.',
    opts: ['nemamo', 'ne mamo', 'nismo', 'nemaju'],
    answer: 'nemamo',
    tip: 'imamo → nemamo.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ pravo.',
    en: 'You are right.',
    opts: ['imate', 'imaš', 'ima', 'imaju'],
    answer: 'imate',
    tip: 'Second person plural / polite: imate.',
  },
  {
    mode: 'oblici',
    q: 'Ona ____ psa.',
    en: 'She has a dog.',
    opts: ['ima', 'imaju', 'imam', 'imate'],
    answer: 'ima',
    tip: 'Third person singular: ima.',
  },
  {
    mode: 'oblici',
    q: 'On ____ brata.',
    en: 'He does not have a brother.',
    opts: ['nema', 'ne ima', 'nije', 'nemaju'],
    answer: 'nema',
    tip: 'ima → nema.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Imam ____. (auto)',
    en: 'I have a car.',
    opts: ['auto', 'auta', 'autom', 'autu'],
    answer: 'auto',
    tip: 'Imati takes the accusative; auto is inanimate so it looks like the nominative.',
  },
  {
    mode: 'padez',
    q: 'Nemam ____. (auto)',
    en: 'I do not have a car.',
    opts: ['auta', 'auto', 'autom', 'autu'],
    answer: 'auta',
    tip: 'NEMATI flips the object to the genitive: nemam auta.',
  },
  {
    mode: 'padez',
    q: 'Imam ____. (vrijeme)',
    en: 'I have time.',
    opts: ['vrijeme', 'vremena', 'vremenu', 'vremenom'],
    answer: 'vrijeme',
    tip: 'Accusative after the positive: imam vrijeme.',
  },
  {
    mode: 'padez',
    q: 'Nemam ____. (vrijeme)',
    en: 'I do not have time.',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    tip: 'The single commonest form of this whole pattern: nemam vremena.',
  },
  {
    mode: 'padez',
    q: 'Ima li ____? (kruh)',
    en: 'Is there any bread?',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    tip: 'Partitive genitive in an existential question: ima li kruha?',
  },
  {
    mode: 'padez',
    q: 'Imam ____. (brat)',
    en: 'I have a brother.',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'brata',
    tip: 'Brat is ANIMATE masculine, so its accusative equals the genitive: brata.',
  },
  {
    mode: 'padez',
    q: 'Nemamo ____. (problem)',
    en: 'We have no problem.',
    opts: ['problema', 'problem', 'problemu', 'problemom'],
    answer: 'problema',
    tip: 'Genitive after nemati: nemamo problema.',
  },
  {
    mode: 'padez',
    q: 'Zašto "nemam novca", a ne "nemam novac"?',
    en: 'Why the genitive?',
    opts: ['nemati traži genitiv', 'novac je uvijek u genitivu', 'to je množina', 'nema razlike'],
    answer: 'nemati traži genitiv',
    tip: 'The negated verb pulls its object into the genitive. Both are heard, but the genitive is standard.',
  },

  // ── izrazi ────────────────────────────────────────────────────────────────
  {
    mode: 'izrazi',
    q: '____ veze.',
    en: 'Never mind.',
    opts: ['Nema', 'Nije', 'Ne', 'Nemam'],
    answer: 'Nema',
    tip: 'Nema veze — one of the most-used phrases in the language.',
  },
  {
    mode: 'izrazi',
    q: 'Imaš ____. (you are right)',
    en: 'You are right.',
    opts: ['pravo', 'prava', 'pravu', 'pravom'],
    answer: 'pravo',
    tip: 'Imati pravo = to be right. Not "biti u pravu" only — both exist.',
  },
  {
    mode: 'izrazi',
    q: '____ li kave?',
    en: 'Is there any coffee?',
    opts: ['Ima', 'Imaš', 'Nema', 'Jesi'],
    answer: 'Ima',
    tip: 'Ima li is the existential "is there": ima li kave?',
  },
  {
    mode: 'izrazi',
    q: 'Koliko ____ godina?',
    en: 'How old are you?',
    opts: ['imaš', 'jesi', 'si', 'ima'],
    answer: 'imaš',
    tip: 'Croatian HAS years rather than IS them: koliko imaš godina?',
  },
  {
    mode: 'izrazi',
    q: '____ na umu da je kasno.',
    en: 'Bear in mind that it is late.',
    opts: ['Imaj', 'Imati', 'Imam', 'Ima'],
    answer: 'Imaj',
    tip: 'Imati na umu = to bear in mind; here in the imperative.',
  },
  {
    mode: 'izrazi',
    q: 'Nema ____. (there is nobody)',
    en: 'There is nobody.',
    opts: ['nikoga', 'nitko', 'nikome', 'nikim'],
    answer: 'nikoga',
    tip: 'Nema takes the genitive, and nitko → nikoga.',
  },
  {
    mode: 'izrazi',
    q: 'Ima ____ godina kako ga nisam vidio.',
    en: 'It has been years since I saw him.',
    opts: ['pet', 'peti', 'petu', 'petih'],
    answer: 'pet',
    tip: 'Ima + a time expression means "it has been": ima pet godina.',
  },
  {
    mode: 'izrazi',
    q: 'Što znači "nema na čemu"?',
    en: 'What does "nema na čemu" mean?',
    opts: ['you are welcome', 'there is nothing', 'I do not know', 'never'],
    answer: 'you are welcome',
    tip: 'The standard reply to hvala — literally "there is nothing on which".',
  },
];
