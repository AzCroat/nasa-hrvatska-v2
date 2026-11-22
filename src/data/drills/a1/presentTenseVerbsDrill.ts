// src/data/drills/a1/presentTenseVerbsDrill.ts
//
// A1 PRESENT TENSE — the drill for the `present-tense-verbs` lesson.
//
// Follows Hrvatski za početnike 1, pages 36–39: PREZENT GLAGOLA NA -ati with imati and
// znati, the Kostelić family text (pjevati, svirati, trenirati, skijati) and the fill-in
// rows "Tata danas ____ ručak. (kuhati)". The -im and -em patterns use the verbs the lesson
// itself teaches (govoriti, raditi, živjeti, piti, pisati). This lesson comes before the
// accusative, so every object is a word whose form does not change (film, čaj, ručak,
// pismo, novine).
//
// Three modes:
//   am   — the -am pattern (imati, znati, kuhati…)
//   imem — the -im and -em patterns (govoriti, raditi, piti, pisati)
//   oni  — the "they" form, which differs in each pattern: -aju, -e, -u

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PRESENT_TENSE_VERBS_MODE_LABELS: Record<string, string> = {
  am: '🅰️ -am',
  imem: '✳️ -im / -em',
  oni: '👥 Oni',
};

export const PRESENT_TENSE_VERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── am ────────────────────────────────────────────────────────────────────
  {
    mode: 'am',
    q: 'Ja ____ auto. (imati)',
    en: 'I have a car.',
    opts: ['imam', 'imaš', 'ima', 'imaju'],
    answer: 'imam',
    tip: 'ja → -am: imam. imaš is the ti form, ima is for on or ona, and imaju for oni.',
  },
  {
    mode: 'am',
    q: 'Ti dobro ____ hrvatski. (znati)',
    en: 'You know Croatian well.',
    opts: ['znaš', 'znam', 'zna', 'znaju'],
    answer: 'znaš',
    tip: 'ti → -aš: znaš. znam is the ja form, zna is for on or ona, and znaju for oni.',
  },
  {
    mode: 'am',
    q: 'Tata danas ____ ručak. (kuhati)',
    en: 'Dad is cooking lunch today.',
    opts: ['kuha', 'kuham', 'kuhaš', 'kuhaju'],
    answer: 'kuha',
    tip: 'Tata is "he", and on / ona takes the bare -a: kuha. kuham is ja, kuhaš is ti, and kuhaju is oni.',
  },
  {
    mode: 'am',
    q: 'Mi ____ film. (gledati)',
    en: 'We are watching a movie.',
    opts: ['gledamo', 'gledate', 'gledaju', 'gledam'],
    answer: 'gledamo',
    tip: 'mi → -amo: gledamo. gledate is the vi form, gledaju is oni, and gledam is only one person, ja.',
  },
  {
    mode: 'am',
    q: 'Vi ____ nogomet. (igrati)',
    en: 'You play soccer. (to several people)',
    opts: ['igrate', 'igramo', 'igraju', 'igraš'],
    answer: 'igrate',
    tip: 'vi → -ate: igrate. igramo is mi, igraju is oni, and igraš is ti, one person.',
  },
  {
    mode: 'am',
    q: 'Moj brat ____ i svira. (pjevati)',
    en: 'My brother sings and plays music.',
    opts: ['pjeva', 'pjevam', 'pjevaju', 'pjevaš'],
    answer: 'pjeva',
    tip: 'brat is "he", so the bare -a: pjeva, matching svira. pjevam is ja, pjevaš is ti, and pjevaju is oni.',
  },
  {
    mode: 'am',
    q: 'Ja svaki dan ____ novine. (čitati)',
    en: 'I read the newspaper every day.',
    opts: ['čitam', 'čitaš', 'čitamo', 'čitaju'],
    answer: 'čitam',
    tip: 'ja → -am: čitam. čitaš is ti, čitamo is mi, and čitaju is oni.',
  },
  {
    mode: 'am',
    q: 'Ana i ja danas ____ ovdje. (ručati)',
    en: 'Ana and I are having lunch here today.',
    opts: ['ručamo', 'ručaju', 'ručate', 'ručam'],
    answer: 'ručamo',
    tip: 'Ana and I are "we", so -amo: ručamo. ručaju would leave the speaker out, ručate is vi, and ručam is only ja.',
  },
  {
    mode: 'am',
    q: 'znati → ja ____',
    en: 'I know.',
    opts: ['znam', 'znajem', 'znaš', 'znaju'],
    answer: 'znam',
    tip: 'Drop -ti and add -m: zna-m. "znajem" builds the ja form from the oni form znaju, which is a common slip. znaš is ti and znaju is oni.',
  },

  // ── imem ──────────────────────────────────────────────────────────────────
  {
    mode: 'imem',
    q: 'Ja ____ hrvatski. (govoriti)',
    en: 'I speak Croatian.',
    opts: ['govorim', 'govoriš', 'govori', 'govore'],
    answer: 'govorim',
    tip: 'An -iti verb takes -im for ja: govorim. govoriš is ti, govori is on or ona, and govore is oni.',
  },
  {
    mode: 'imem',
    q: 'Ti ____ ovdje. (raditi)',
    en: 'You work here.',
    opts: ['radiš', 'radim', 'radi', 'rade'],
    answer: 'radiš',
    tip: 'ti → -iš: radiš. radim is ja, radi is on or ona, and rade is oni.',
  },
  {
    mode: 'imem',
    q: 'Mi ____ ovdje. (živjeti)',
    en: 'We live here.',
    opts: ['živimo', 'živite', 'žive', 'živim'],
    answer: 'živimo',
    tip: 'živjeti follows the -im pattern, and mi takes -imo: živimo. živite is vi, žive is oni, and živim is ja.',
  },
  {
    mode: 'imem',
    q: 'Vi dobro ____ hrvatski. (govoriti)',
    en: 'You speak Croatian well. (politely)',
    opts: ['govorite', 'govorimo', 'govore', 'govoriš'],
    answer: 'govorite',
    tip: 'vi → -ite: govorite. govorimo is mi, govore is oni, and govoriš is the informal ti.',
  },
  {
    mode: 'imem',
    q: 'Tata ____ svaki dan. (raditi)',
    en: 'Dad works every day.',
    opts: ['radi', 'radim', 'rade', 'radiš'],
    answer: 'radi',
    tip: 'Tata is "he", and on takes the bare -i: radi. radim is ja, radiš is ti, and rade is oni.',
  },
  {
    mode: 'imem',
    q: 'Ja ____ čaj. (piti)',
    en: 'I am drinking tea.',
    opts: ['pijem', 'pim', 'piješ', 'pije'],
    answer: 'pijem',
    tip: 'piti is an -em verb with a j in it: pijem. "pim" just swaps -ti for -m, which works for -ati verbs but not here. piješ is ti and pije is on or ona.',
  },
  {
    mode: 'imem',
    q: 'Što ____? (piti, ti)',
    en: 'What are you drinking?',
    opts: ['piješ', 'pijem', 'pije', 'piju'],
    answer: 'piješ',
    tip: 'ti → -eš: piješ. pijem is ja, pije is on or ona, and piju is oni.',
  },
  {
    mode: 'imem',
    q: 'Mama ____ pismo. (pisati)',
    en: 'Mom is writing a letter.',
    opts: ['piše', 'pisa', 'pišem', 'pišu'],
    answer: 'piše',
    tip: 'pisati looks like an -am verb but follows the -em pattern, and s changes to š: piše. "pisa" treats it like kuhati → kuha. pišem is ja and pišu is oni.',
  },
  {
    mode: 'imem',
    q: 'pisati → ja ____',
    en: 'I write.',
    opts: ['pišem', 'pisam', 'pisim', 'pišu'],
    answer: 'pišem',
    tip: 'pisati is an -em verb with š: pišem. "pisam" copies the -am pattern, "pisim" the -im pattern, and pišu is the oni form.',
  },

  // ── oni ───────────────────────────────────────────────────────────────────
  {
    mode: 'oni',
    q: 'Oni ____ film. (gledati)',
    en: 'They are watching a movie.',
    opts: ['gledaju', 'glede', 'gledu', 'gleda'],
    answer: 'gledaju',
    tip: 'An -am verb takes -aju for oni: gledaju. The endings -e and -u belong to the -im and -em patterns, and gleda is only one person.',
  },
  {
    mode: 'oni',
    q: 'Maja i Ivan ____ hrvatski. (govoriti)',
    en: 'Maja and Ivan speak Croatian.',
    opts: ['govore', 'govoriju', 'govoraju', 'govori'],
    answer: 'govore',
    tip: 'An -im verb takes -e for oni: govore. "govoriju" and "govoraju" copy the -aju of -am verbs, and govori is only one person.',
  },
  {
    mode: 'oni',
    q: 'Oni ____ čaj. (piti)',
    en: 'They are drinking tea.',
    opts: ['piju', 'pije', 'pijeju', 'pijaju'],
    answer: 'piju',
    tip: 'An -em verb takes -u for oni: piju. pije is one person, and "pijeju" and "pijaju" add an ending this pattern does not have.',
  },
  {
    mode: 'oni',
    q: 'Studenti ____ novine. (čitati)',
    en: 'The students are reading the newspaper.',
    opts: ['čitaju', 'čite', 'čitu', 'čita'],
    answer: 'čitaju',
    tip: 'čitati is an -am verb, so oni takes -aju: čitaju. -e and -u are the endings of the other two patterns, and čita is one person.',
  },
  {
    mode: 'oni',
    q: 'Janica i Ivica ____ svaki dan. (trenirati)',
    en: 'Janica and Ivica train every day.',
    opts: ['treniraju', 'trenire', 'treniru', 'trenira'],
    answer: 'treniraju',
    tip: 'Verbs in -irati work like every -ati verb: treniram, treniraju. -e and -u belong to other patterns, and trenira is one person.',
  },
  {
    mode: 'oni',
    q: 'Djeca ____ nogomet. (igrati)',
    en: 'The children are playing soccer.',
    opts: ['igraju', 'igra', 'igre', 'igramo'],
    answer: 'igraju',
    tip: 'djeca takes a plural verb, and igrati is an -am verb: igraju. igra is singular, "igre" uses the -im ending, and igramo is "we".',
  },
  {
    mode: 'oni',
    q: 'Oni ____ ovdje. (raditi)',
    en: 'They work here.',
    opts: ['rade', 'radiju', 'radaju', 'radi'],
    answer: 'rade',
    tip: 'raditi is an -im verb, so oni takes -e: rade. "radiju" and "radaju" copy the -aju of -am verbs, and radi is one person.',
  },
  {
    mode: 'oni',
    q: 'Prijatelji ____ pisma. (pisati)',
    en: 'The friends are writing letters.',
    opts: ['pišu', 'pisaju', 'piše', 'pišeju'],
    answer: 'pišu',
    tip: 'pisati is an -em verb with š: pišem, pišu. "pisaju" treats it as an -am verb, piše is one person, and "pišeju" doubles the ending.',
  },
  {
    mode: 'oni',
    q: 'Moji roditelji ____ ovdje. (živjeti)',
    en: 'My parents live here.',
    opts: ['žive', 'živiju', 'živu', 'živi'],
    answer: 'žive',
    tip: 'živjeti follows the -im pattern, so oni takes -e: žive. "živiju" copies -aju, "živu" uses the -em ending, and živi is one person.',
  },
];
