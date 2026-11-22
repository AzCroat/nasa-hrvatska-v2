// src/data/drills/a1/futureTenseDrill.ts
//
// A1 THE FUTURE TENSE — the drill for the `future-tense` lesson.
//
// Follows Hrvatski za početnike 1, pages 84–85: the friends planning a Saturday trip
// (who will call whom, who will bring what), the FUTUR table in three columns (ja ću
// zvati · ja neću zvati · Hoću li ja zvati?), then FUTUR U INVERZIJI GLAGOLA NA -ti
// (zvat ću) and NA -ći (reći ću — "u futuru ne gube završno -i"), and the A/B rows that
// set "Ja ću čitati" against "Čitat ću". The placement rule is the one on page 144. The
// dative comes after this lesson, so nobody is given or told anything here.
//
// Three modes:
//   pomocni   — ću, ćeš, će… and neću, and Hoćeš li…?
//   inverzija — the short form: Zvat ću, but Doći ću
//   red       — where ću goes in the sentence

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FUTURE_TENSE_MODE_LABELS: Record<string, string> = {
  pomocni: '🔤 Ću, ćeš, će',
  inverzija: '✂️ Zvat ću',
  red: '↔️ Red riječi',
};

export const FUTURE_TENSE_DRILL_DATA: ModeDrillItem[] = [
  // ── pomocni ───────────────────────────────────────────────────────────────
  {
    mode: 'pomocni',
    q: 'Ja ____ zvati Katarinu.',
    en: 'I will call Katarina.',
    opts: ['ću', 'ćeš', 'će', 'ćemo'],
    answer: 'ću',
    tip: 'ja → ću. ćeš is for ti, će for on, ona and oni, and ćemo for mi. The second verb stays in the infinitive.',
  },
  {
    mode: 'pomocni',
    q: 'Ti ____ nositi vodu i sok.',
    en: 'You will bring water and juice.',
    opts: ['ćeš', 'ću', 'će', 'ćete'],
    answer: 'ćeš',
    tip: 'ti → ćeš. ću is for ja, će for on or ona, and ćete for vi.',
  },
  {
    mode: 'pomocni',
    q: 'Vesna ____ nositi gitaru.',
    en: 'Vesna will bring a guitar.',
    opts: ['će', 'ću', 'ćeš', 'ćemo'],
    answer: 'će',
    tip: 'Vesna is "she": će. ću is ja, ćeš is ti, and ćemo is mi. The form is the same for a man or a woman.',
  },
  {
    mode: 'pomocni',
    q: 'Mi ____ u subotu planinariti.',
    en: 'We will go hiking on Saturday.',
    opts: ['ćemo', 'ćete', 'će', 'ću'],
    answer: 'ćemo',
    tip: 'mi → ćemo. ćete is for vi, će for oni, and ću for ja.',
  },
  {
    mode: 'pomocni',
    q: 'Vi ____ kupiti kekse.',
    en: 'You will buy cookies. (to several people)',
    opts: ['ćete', 'ćemo', 'će', 'ćeš'],
    answer: 'ćete',
    tip: 'vi → ćete. ćemo is for mi, će for oni, and ćeš for one person, ti.',
  },
  {
    mode: 'pomocni',
    q: 'Djevojke ____ nositi sendviče.',
    en: 'The girls will bring sandwiches.',
    opts: ['će', 'ćemo', 'ćete', 'ću'],
    answer: 'će',
    tip: 'oni and one take the same form as on and ona: će. ćemo is "we will", ćete "you will", and ću "I will".',
  },
  {
    mode: 'pomocni',
    q: 'Vesna ____ biti u Zagrebu. Bit će u Sarajevu.',
    en: 'Vesna will not be in Zagreb. She will be in Sarajevo.',
    opts: ['neće', 'ne će', 'nećeš', 'nije'],
    answer: 'neće',
    tip: 'The negative is one word: neće. "ne će" is a spelling mistake, nećeš is the ti form, and nije is the present "is not".',
  },
  {
    mode: 'pomocni',
    q: 'Mi ____ jesti ribu.',
    en: 'We will not eat fish.',
    opts: ['nećemo', 'ne ćemo', 'nećete', 'nismo'],
    answer: 'nećemo',
    tip: 'mi → nećemo, written as one word. nećete is for vi, and nismo belongs to the past tense (nismo jeli).',
  },
  {
    mode: 'pomocni',
    q: '____ li ti kupiti ulaznice?',
    en: 'Will you buy the tickets?',
    opts: ['Hoćeš', 'Ćeš', 'Hoće', 'Hoćete'],
    answer: 'Hoćeš',
    tip: 'A yes/no question uses the long form plus li: Hoćeš li…? The short ćeš cannot open a sentence; hoće is on or ona, and hoćete is vi.',
  },
  {
    mode: 'pomocni',
    q: '____ li one biti ovdje u nedjelju?',
    en: 'Will they be here on Sunday?',
    opts: ['Hoće', 'Će', 'Hoćeju', 'Hoćemo'],
    answer: 'Hoće',
    tip: 'one → Hoće li…? The short će cannot come first, "hoćeju" is not a form, and hoćemo is "we".',
  },

  // ── inverzija ─────────────────────────────────────────────────────────────
  {
    mode: 'inverzija',
    q: '____ ću Ivana i Sanju. (zvati)',
    en: 'I will call Ivan and Sanja.',
    opts: ['Zvat', 'Zvati', 'Zva', 'Zvao'],
    answer: 'Zvat',
    tip: 'When a -ti infinitive stands in front of ću, it drops its final -i: Zvat ću. "Zvati ću" keeps the -i, and zvao is the past form.',
  },
  {
    mode: 'inverzija',
    q: '____ će lijepo! (biti)',
    en: 'It will be nice!',
    opts: ['Bit', 'Biti', 'Bi', 'Bilo'],
    answer: 'Bit',
    tip: 'biti in front of će loses its -i: Bit će. "Biti će" is the common spelling mistake, and bilo is the past form.',
  },
  {
    mode: 'inverzija',
    q: '____ ću novi kaput. (kupiti)',
    en: 'I will buy a new coat.',
    opts: ['Kupit', 'Kupiti', 'Kupi', 'Kupio'],
    answer: 'Kupit',
    tip: 'kupiti → Kupit ću. The -i goes only because the infinitive comes first; kupio is the past form.',
  },
  {
    mode: 'inverzija',
    q: '____ ćeš ovaj grad. (voljeti)',
    en: 'You will love this city.',
    opts: ['Voljet', 'Voljeti', 'Volit', 'Voli'],
    answer: 'Voljet',
    tip: 'voljeti → Voljet ćeš: only the last -i is dropped. "Volit" is built from volim instead of the infinitive.',
  },
  {
    mode: 'inverzija',
    q: '____ ćemo na izlet.',
    en: 'We will go on a trip.',
    opts: ['Ići', 'Ić', 'It', 'Idemo'],
    answer: 'Ići',
    tip: 'An infinitive in -ći keeps its -i in the future: Ići ćemo. "Ić ćemo" clips it like a -ti verb, and idemo is the present.',
  },
  {
    mode: 'inverzija',
    q: '____ ćete na večeru.',
    en: 'You will come to dinner.',
    opts: ['Doći', 'Doć', 'Došli', 'Dođi'],
    answer: 'Doći',
    tip: 'doći ends in -ći, so nothing is dropped: Doći ćete. "Doć" clips it by mistake, and došli is the past form.',
  },
  {
    mode: 'inverzija',
    q: '____ će na vrijeme.',
    en: 'He will arrive on time.',
    opts: ['Stići', 'Stić', 'Stit', 'Stigao'],
    answer: 'Stići',
    tip: 'stići is a -ći verb and stays whole: Stići će. Only -ti verbs lose the -i (Kupit će); stigao is the past form.',
  },
  {
    mode: 'inverzija',
    q: 'Ja ću ____ knjigu cijelo popodne.',
    en: 'I will read a book all afternoon.',
    opts: ['čitati', 'čitat', 'čitam', 'čitala'],
    answer: 'čitati',
    tip: 'When ću comes BEFORE the verb, the infinitive stays whole: Ja ću čitati. The clipped čitat is only for the order Čitat ću; čitam is the present.',
  },
  {
    mode: 'inverzija',
    q: 'Which is spelled correctly for "I will read a book"?',
    opts: ['Čitat ću knjigu.', 'Čitati ću knjigu.', 'Čitatću knjigu.', 'Čitat ču knjigu.'],
    answer: 'Čitat ću knjigu.',
    tip: 'Two words, no -i, and ć with the soft hook: Čitat ću. The other versions keep the -i, run the words together, or write ču with the wrong letter.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is correct for "I will come tomorrow"?',
    opts: ['Sutra ću doći.', 'Ću doći sutra.', 'Sutra doći ću.', 'Sutra ću dođem.'],
    answer: 'Sutra ću doći.',
    tip: 'ću is a short form and takes second place, right after Sutra. It can never open the sentence, and the verb after it stays in the infinitive, not dođem.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "We will set off at nine"?',
    opts: [
      'Krenut ćemo u devet.',
      'Ćemo krenuti u devet.',
      'Krenuti ćemo u devet.',
      'Krenut u devet ćemo.',
    ],
    answer: 'Krenut ćemo u devet.',
    tip: 'With no pronoun, the clipped infinitive comes first and ćemo follows at once. ćemo cannot open the sentence or wait until the end, and krenuti must lose its -i here.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "Maja will come, but Petar will not"?',
    opts: [
      'Maja će doći, ali Petar neće.',
      'Maja će doći, ali Petar ne će.',
      'Maja doći će, ali Petar neće.',
      'Će Maja doći, ali Petar neće.',
    ],
    answer: 'Maja će doći, ali Petar neće.',
    tip: 'će sits second, right after Maja, and neće is one word. će cannot follow the infinitive when a subject stands first, and it cannot open the sentence.',
  },
  {
    mode: 'red',
    q: 'Which question is correct for "What will you do tomorrow?"',
    opts: [
      'Što ćeš raditi sutra?',
      'Što raditi ćeš sutra?',
      'Što hoćeš li raditi sutra?',
      'Ćeš što raditi sutra?',
    ],
    answer: 'Što ćeš raditi sutra?',
    tip: 'After a question word the short form follows directly: Što ćeš…? The long form with li is only for yes/no questions, and ćeš can never come first.',
  },
  {
    mode: 'red',
    q: 'U subotu ____ biti lijepo vrijeme.',
    en: 'The weather will be nice on Saturday.',
    opts: ['će', 'ću', 'je', 'ćemo'],
    answer: 'će',
    tip: 'vrijeme is "it", so će, placed right after the opening phrase U subotu. ću is "I will", ćemo "we will", and je is the present tense.',
  },
  {
    mode: 'red',
    q: 'Koga ____ ti zvati?',
    en: 'Who will you call?',
    opts: ['ćeš', 'ćete', 'ću', 'hoćeš li'],
    answer: 'ćeš',
    tip: 'ti → ćeš, straight after the question word Koga. ćete goes with vi, ću with ja, and "hoćeš li" is only for yes/no questions.',
  },
  {
    mode: 'red',
    q: '— Hoćeš li i ti ići na more? — ____. Sutra ću raditi cijeli dan.',
    en: 'Will you go to the seaside too? — I will not. I will work all day tomorrow.',
    opts: ['Neću', 'Nećeš', 'Ne ću', 'Nisam'],
    answer: 'Neću',
    tip: 'Answer for yourself with the ja form, one word: Neću. Nećeš repeats "you", "Ne ću" is a spelling mistake, and Nisam is for the past or for biti.',
  },
  {
    mode: 'red',
    q: 'Someone asks whether Maja will come. Which one-word answer means "Yes, she will"?',
    opts: ['Hoće', 'Će', 'Hoću', 'Jest'],
    answer: 'Hoće',
    tip: 'A one-word "yes" repeats the long form: Hoće. The short će cannot stand alone, Hoću would mean "I will", and Jest answers a question that starts with Je li.',
  },
  {
    mode: 'red',
    q: 'A man and a woman each say "I will work." How do the two sentences differ?',
    opts: [
      'They do not: both say Radit ću.',
      'The verb ending differs.',
      'The form of ću differs.',
      'The word order differs.',
    ],
    answer: 'They do not: both say Radit ću.',
    tip: 'The future has no gender: everyone says Radit ću. Only the past tense changes with the speaker (radio sam, radila sam).',
  },
];
