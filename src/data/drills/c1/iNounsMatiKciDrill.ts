// src/data/drills/c1/iNounsMatiKciDrill.ts
//
// C1 THE i-DECLENSION, kći AND mati — the drill for the `i-nouns-mati-kci` lesson.
//
// Three modes:
//   instrumental — the -ju instrumental and its sound changes (radošću, smrću, ljubavlju)
//   mnozina      — the plural, and the genitive plural očiju, ušiju, kostiju
//   kci          — kći in its cases, and the literary mati
//
// Where two forms are both standard (radosti / radošću, kosti / kostiju) only one of
// them is ever offered, so no item marks a correct form wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const I_NOUNS_MATI_KCI_MODE_LABELS: Record<string, string> = {
  instrumental: '🔧 Instrumental -ju',
  mnozina: '👀 Množina',
  kci: '👩‍👧 Kći i mati',
};

export const I_NOUNS_MATI_KCI_DRILL_DATA: ModeDrillItem[] = [
  // ── instrumental ──────────────────────────────────────────────────────────
  {
    mode: 'instrumental',
    q: 'Prihvatila je ponudu s ____.',
    en: 'She accepted the offer with joy.',
    opts: ['radošću', 'radostju', 'radosću', 'radostom'],
    answer: 'radošću',
    tip: 'st + j melts into šć: radost → radošću (radosti is the other standard form).',
  },
  {
    mode: 'instrumental',
    q: 'Grad je ____ potpuno drukčiji.',
    en: 'At night the city is completely different.',
    opts: ['noću', 'noćom', 'noćiju', 'noćem'],
    answer: 'noću',
    tip: 'The instrumental of noć, used as the adverb "at night".',
  },
  {
    mode: 'instrumental',
    q: 'Pismo je završio s ____.',
    en: 'He ended the letter with love.',
    opts: ['ljubavlju', 'ljubavju', 'ljubavom', 'ljubavlu'],
    answer: 'ljubavlju',
    tip: 'After v, the j of -ju brings an l with it: ljubavlju.',
  },
  {
    mode: 'instrumental',
    q: 'Jednom ____, sve je propalo.',
    en: 'In a word, everything fell through.',
    opts: ['riječju', 'riječom', 'riječjom', 'riječa'],
    answer: 'riječju',
    tip: 'A fixed phrase: after č the ending -ju is simply added.',
  },
  {
    mode: 'instrumental',
    q: 'Služi se ____, a ne srcem.',
    en: 'He uses his head, not his heart.',
    opts: ['pameću', 'pametju', 'pametom', 'pamećom'],
    answer: 'pameću',
    tip: 'služiti se takes the instrumental; t + j melts into ć.',
  },
  {
    mode: 'instrumental',
    q: 'Branitelji su slobodu platili ____.',
    en: 'The defenders paid for freedom with their lives.',
    opts: ['smrću', 'smrtju', 'smrtom', 'smrćom'],
    answer: 'smrću',
    tip: 'smrt + ju: t + j gives ć.',
  },
  {
    mode: 'instrumental',
    q: 'Zaokupljen je jednom ____.',
    en: 'He is preoccupied with one thought.',
    opts: ['mišlju', 'misaoju', 'mislom', 'misaom'],
    answer: 'mišlju',
    tip: 'The stem of misao is misl-, and sl + j becomes šlj.',
  },
  {
    mode: 'instrumental',
    q: 'Bolesnik je bio iscrpljen ____.',
    en: 'The patient was exhausted by hunger.',
    opts: ['glađu', 'gladju', 'gladom', 'glađom'],
    answer: 'glađu',
    tip: 'd + j melts into đ: glad → glađu.',
  },
  {
    mode: 'instrumental',
    q: 'Rana je bila prekrivena ____.',
    en: 'The wound was covered in blood.',
    opts: ['krvlju', 'krvju', 'krvom', 'krvima'],
    answer: 'krvlju',
    tip: 'After v, an l appears: krv → krvlju.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Zaljubio se do ____.',
    en: 'He fell head over heels in love.',
    opts: ['ušiju', 'uha', 'uši', 'ušima'],
    answer: 'ušiju',
    tip: 'do takes the genitive; the genitive plural of uši is ušiju.',
  },
  {
    mode: 'mnozina',
    q: 'Suze su joj tekle iz ____.',
    en: 'Tears were running from her eyes.',
    opts: ['očiju', 'oka', 'oči', 'očima'],
    answer: 'očiju',
    tip: 'iz takes the genitive; oči has only očiju.',
  },
  {
    mode: 'mnozina',
    q: 'Pas je zakopao hrpu ____.',
    en: 'The dog buried a pile of bones.',
    opts: ['kostiju', 'kostima', 'kostiji', 'kostova'],
    answer: 'kostiju',
    tip: 'Genitive plural after hrpa: kostiju (kosti is equally standard).',
  },
  {
    mode: 'mnozina',
    q: 'O tim ____ ne razgovaramo za stolom.',
    en: 'We do not talk about those things at the table.',
    opts: ['stvarima', 'stvari', 'stvarama', 'stvarih'],
    answer: 'stvarima',
    tip: 'o + locative plural: -ima.',
  },
  {
    mode: 'mnozina',
    q: 'Proveo je mnogo ____ bez sna.',
    en: 'He spent many nights without sleep.',
    opts: ['noći', 'noćima', 'noć', 'noćeva'],
    answer: 'noći',
    tip: 'mnogo takes the genitive plural, which for noć is noći.',
  },
  {
    mode: 'mnozina',
    q: 'Njezine su ____ bile zanimljive, ali neostvarive.',
    en: 'Her ideas were interesting but unrealistic.',
    opts: ['misli', 'misaoi', 'misle', 'mislovi'],
    answer: 'misli',
    tip: 'The plural of misao is misli, feminine: njezine misli.',
  },
  {
    mode: 'mnozina',
    q: 'Iz trgovine je donio dvije ____.',
    en: 'He brought two things from the shop.',
    opts: ['stvari', 'stvarima', 'stvar', 'stvara'],
    answer: 'stvari',
    tip: 'After dvije, an i-noun has the form in -i.',
  },
  {
    mode: 'mnozina',
    q: 'Gledali su nas širom otvorenih ____.',
    en: 'They watched us with wide-open eyes.',
    opts: ['očiju', 'očima', 'oči', 'oka'],
    answer: 'očiju',
    tip: 'The genitive of manner: širom otvorenih očiju.',
  },
  {
    mode: 'mnozina',
    q: 'Boli me u ____.',
    en: 'My ears hurt.',
    opts: ['ušima', 'ušiju', 'uši', 'uhom'],
    answer: 'ušima',
    tip: 'u + locative plural: ušima.',
  },

  // ── kci ───────────────────────────────────────────────────────────────────
  {
    mode: 'kci',
    q: 'Moja ____ studira u Osijeku.',
    en: 'My daughter studies in Osijek.',
    opts: ['kći', 'kćeri', 'kćerom', 'kćere'],
    answer: 'kći',
    tip: 'The standard nominative is kći.',
  },
  {
    mode: 'kci',
    q: 'Svako jutro vodim ____ u školu.',
    en: 'Every morning I take my daughter to school.',
    opts: ['kćer', 'kći', 'kćerom', 'kćere'],
    answer: 'kćer',
    tip: 'voditi takes the accusative: kćer.',
  },
  {
    mode: 'kci',
    q: 'Kupili smo ____ bicikl.',
    en: 'We bought our daughter a bicycle.',
    opts: ['kćeri', 'kći', 'kćer', 'kćerom'],
    answer: 'kćeri',
    tip: 'The one you buy for is in the dative: kćeri.',
  },
  {
    mode: 'kci',
    q: 'Imaju dvije ____ i sina.',
    en: 'They have two daughters and a son.',
    opts: ['kćeri', 'kći', 'kćer', 'kćerima'],
    answer: 'kćeri',
    tip: 'After dvije, the form is kćeri.',
  },
  {
    mode: 'kci',
    q: 'Ponosni smo na svoju ____.',
    en: 'We are proud of our daughter.',
    opts: ['kćer', 'kći', 'kćerom', 'kćere'],
    answer: 'kćer',
    tip: 'ponosan na + accusative: svoju kćer.',
  },
  {
    mode: 'kci',
    q: 'Već tri dana nema vijesti od ____.',
    en: 'For three days there has been no news from his daughter.',
    opts: ['kćeri', 'kćer', 'kći', 'kćere'],
    answer: 'kćeri',
    tip: 'od takes the genitive: kćeri.',
  },
  {
    mode: 'kci',
    q: 'U staroj pjesmi sin se oprašta od ____.',
    en: 'In the old poem the son takes leave of his mother.',
    opts: ['matere', 'mati', 'materi', 'materom'],
    answer: 'matere',
    tip: 'The literary genitive of mati is matere.',
  },
  {
    mode: 'kci',
    q: 'Svake je nedjelje pisao ____.',
    en: 'Every Sunday he wrote to his mother.',
    opts: ['materi', 'mati', 'matere', 'materom'],
    answer: 'materi',
    tip: 'pisati komu: the literary dative materi (in speech, majci).',
  },
  {
    mode: 'kci',
    q: 'Pjesnik se sjeća svoje ____.',
    en: 'The poet remembers his mother.',
    opts: ['matere', 'materi', 'mater', 'materom'],
    answer: 'matere',
    tip: 'sjećati se takes the genitive: matere.',
  },
];
