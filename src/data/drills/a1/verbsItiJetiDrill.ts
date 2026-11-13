// src/data/drills/a1/verbsItiJetiDrill.ts
//
// A1 VERBS IN -ITI AND -JETI — the drill for the `verbs-iti-jeti` lesson (new A1, 46).
//
// -iti and -jeti verbs take -im, -iš, -i, -imo, -ite, -e; the -je- of a -jeti verb
// belongs only to the infinitive (vidjeti → vidim). The commonest error is giving
// "they" the -ati ending (govoraju), so the contrast with -ati verbs has its own mode.
// The exceptions (pijem, razumijem, smijem, držim, trčim) have a third.
//
// Three modes:
//   oblici   — the six present forms of -iti and -jeti verbs
//   ati-iti  — telling the -am pattern from the -im pattern
//   iznimke  — the common exceptions

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_ITI_JETI_MODE_LABELS: Record<string, string> = {
  oblici: '🗣️ Oblici',
  'ati-iti': '⚖️ -ati ili -iti',
  iznimke: '⚠️ Iznimke',
};

export const VERBS_ITI_JETI_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ hrvatski.',
    en: 'I speak Croatian.',
    opts: ['govorim', 'govoram', 'govorem', 'govoriju'],
    answer: 'govorim',
    tip: 'govoriti → govor- + -im.',
  },
  {
    mode: 'oblici',
    q: 'Ti ____ more?',
    en: 'Can you see the sea?',
    opts: ['vidiš', 'vidješ', 'vidaš', 'vidjiš'],
    answer: 'vidiš',
    tip: 'The -je- of vidjeti disappears: vidiš.',
  },
  {
    mode: 'oblici',
    q: 'On ____ svaki dan.',
    en: 'He works every day.',
    opts: ['radi', 'rada', 'radiju', 'radu'],
    answer: 'radi',
    tip: 'He/she ends in -i.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ kavu.',
    en: 'We love coffee.',
    opts: ['volimo', 'voljemo', 'volamo', 'volemo'],
    answer: 'volimo',
    tip: 'voljeti → vol- + -imo.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ hrvatski?',
    en: 'Are you learning Croatian?',
    opts: ['učite', 'učete', 'učate', 'učitete'],
    answer: 'učite',
    tip: 'učiti → uč- + -ite.',
  },
  {
    mode: 'oblici',
    q: 'Oni ____ engleski.',
    en: 'They speak English.',
    opts: ['govore', 'govoriju', 'govoraju', 'govoru'],
    answer: 'govore',
    tip: '"They" ends in -e in this group.',
  },
  {
    mode: 'oblici',
    q: 'Baka i djed ____ sami.',
    en: 'Grandma and grandpa live alone.',
    opts: ['žive', 'živiju', 'živjeju', 'živu'],
    answer: 'žive',
    tip: 'živjeti → živ- + -e.',
  },
  {
    mode: 'oblici',
    q: 'Što ____?',
    en: 'What do you think? (one friend)',
    opts: ['misliš', 'mislaš', 'misleš', 'misljiš'],
    answer: 'misliš',
    tip: 'misliti → misl- + -iš.',
  },
  {
    mode: 'oblici',
    q: 'Djeca ____ sladoled.',
    en: 'Children love ice cream.',
    opts: ['vole', 'voljeju', 'volaju', 'volju'],
    answer: 'vole',
    tip: 'The "they" form of voljeti.',
  },
  {
    mode: 'oblici',
    q: 'Ja ____ more.',
    en: 'I see the sea.',
    opts: ['vidim', 'vidjem', 'vidam', 'vidjim'],
    answer: 'vidim',
    tip: 'Drop the whole -jeti, then add -im.',
  },

  // ── ati-iti ───────────────────────────────────────────────────────────────
  {
    mode: 'ati-iti',
    q: 'Ona ____ knjigu.',
    en: 'She is reading a book.',
    opts: ['čita', 'čiti', 'čite', 'čitim'],
    answer: 'čita',
    tip: 'čitati is an -ati verb: -am, -aš, -a.',
  },
  {
    mode: 'ati-iti',
    q: 'Oni ____ film.',
    en: 'They are watching a film.',
    opts: ['gledaju', 'glede', 'gledu', 'gledije'],
    answer: 'gledaju',
    tip: '-ati verbs take -aju in "they".',
  },
  {
    mode: 'ati-iti',
    q: 'Oni ____ svaki dan.',
    en: 'They work every day.',
    opts: ['rade', 'radaju', 'radiju', 'radu'],
    answer: 'rade',
    tip: '-iti verbs take -e in "they".',
  },
  {
    mode: 'ati-iti',
    q: 'Koji je oblik za "ja" od glagola pitati?',
    en: 'What is the "I" form of this verb?',
    opts: ['pitam', 'pitim', 'pitem', 'pitujem'],
    answer: 'pitam',
    tip: 'An -ati verb: -am.',
  },
  {
    mode: 'ati-iti',
    q: 'Koji je oblik za "ja" od glagola nositi?',
    en: 'What is the "I" form of this verb?',
    opts: ['nosim', 'nosam', 'nosem', 'nosujem'],
    answer: 'nosim',
    tip: 'An -iti verb: -im.',
  },
  {
    mode: 'ati-iti',
    q: 'Mama ____ ručak.',
    en: 'Mum is cooking lunch.',
    opts: ['kuha', 'kuhi', 'kuhe', 'kuhim'],
    answer: 'kuha',
    tip: 'kuhati is an -ati verb.',
  },
  {
    mode: 'ati-iti',
    q: 'Mi ____ i pričamo.',
    en: 'We are sitting and talking.',
    opts: ['sjedimo', 'sjedemo', 'sjedijemo', 'sjedujemo'],
    answer: 'sjedimo',
    tip: 'sjediti → sjed- + -imo.',
  },
  {
    mode: 'ati-iti',
    q: 'Koji nastavak ima "oni" kod pravilnih glagola na -iti?',
    en: 'Which ending does "they" take with regular -iti verbs?',
    opts: ['-e', '-aju', '-u', '-iju'],
    answer: '-e',
    tip: 'oni govore, oni rade, oni vole (exceptions such as piti have -ju: piju).',
  },

  // ── iznimke ───────────────────────────────────────────────────────────────
  {
    mode: 'iznimke',
    q: 'Ja ____ kavu.',
    en: 'I drink coffee.',
    opts: ['pijem', 'pim', 'pijim', 'pijam'],
    answer: 'pijem',
    tip: 'A short -iti verb: piti → pijem.',
  },
  {
    mode: 'iznimke',
    q: 'Ne ____ vas.',
    en: 'I don’t understand you.',
    opts: ['razumijem', 'razumim', 'razumjem', 'razumijam'],
    answer: 'razumijem',
    tip: 'razumjeti is an exception: razumijem.',
  },
  {
    mode: 'iznimke',
    q: 'Vi ____ hrvatski?',
    en: 'Do you understand Croatian?',
    opts: ['razumijete', 'razumite', 'razumjete', 'razumijate'],
    answer: 'razumijete',
    tip: 'razumijem, razumiješ, razumije, razumijemo, razumijete, razumiju.',
  },
  {
    mode: 'iznimke',
    q: 'Ne ____ ovdje pušiti.',
    en: 'I am not allowed to smoke here.',
    opts: ['smijem', 'smim', 'smjem', 'smijam'],
    answer: 'smijem',
    tip: 'smjeti → smijem, like razumjeti.',
  },
  {
    mode: 'iznimke',
    q: 'Ja ____ loptu.',
    en: 'I am holding the ball.',
    opts: ['držim', 'držam', 'držem', 'držujem'],
    answer: 'držim',
    tip: 'držati is an -ati verb that goes to -im.',
  },
  {
    mode: 'iznimke',
    q: 'Oni ____ svako jutro.',
    en: 'They run every morning.',
    opts: ['trče', 'trčaju', 'trču', 'trčiju'],
    answer: 'trče',
    tip: 'trčati → trčim, trče.',
  },
  {
    mode: 'iznimke',
    q: 'Ptica ____.',
    en: 'The bird is flying.',
    opts: ['leti', 'letji', 'leta', 'letje'],
    answer: 'leti',
    tip: 'letjeti drops its -je-: leti.',
  },
  {
    mode: 'iznimke',
    q: 'Oni ____ vodu.',
    en: 'They are drinking water.',
    opts: ['piju', 'pije', 'pijaju', 'pe'],
    answer: 'piju',
    tip: 'piti: pijem, piješ, pije, pijemo, pijete, piju.',
  },
];
