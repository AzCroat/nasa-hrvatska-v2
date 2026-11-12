// src/data/drills/a1/sportsFreeTimeDrill.ts
//
// A1 SPORT AND FREE TIME — the drill for the `sports-free-time` lesson (new A1, 91).
//
// Three verbs carry it. igrati takes an ordinary object in the accusative (Igram
// nogomet, Igramo košarku); baviti se takes the instrumental and never drops se
// (Bavim se plivanjem); voljeti takes a second verb in the -ti form (Volim trčati).
// "Volim plivanje" is correct Croatian, so a verbal noun is never offered as a wrong
// option after volim, and "u slobodnom vremenu" is correct, so it is never offered
// against "u slobodno vrijeme" either.
//
// Three modes:
//   igrati   — igrati + accusative
//   baviti   — baviti se + instrumental
//   voljeti  — voljeti + infinitive, and how often, where, for whom

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SPORTS_FREE_TIME_MODE_LABELS: Record<string, string> = {
  igrati: '⚽ Igrati',
  baviti: '🏊 Baviti se',
  voljeti: '❤️ Volim, idem, navijam',
};

export const SPORTS_FREE_TIME_DRILL_DATA: ModeDrillItem[] = [
  // ── igrati ────────────────────────────────────────────────────────────────
  {
    mode: 'igrati',
    q: 'Igram ____.',
    en: 'I play football.',
    opts: ['nogomet', 'nogometom', 'nogometa', 'nogometu'],
    answer: 'nogomet',
    tip: 'igrati takes the accusative; a masculine thing looks like the subject form.',
  },
  {
    mode: 'igrati',
    q: 'Igramo ____.',
    en: 'We play basketball.',
    opts: ['košarku', 'košarka', 'košarkom', 'košarci'],
    answer: 'košarku',
    tip: 'igrati + accusative: feminine -a becomes -u.',
  },
  {
    mode: 'igrati',
    q: 'Igraš li ____?',
    en: 'Do you play tennis?',
    opts: ['tenis', 'tenisom', 'tenisa', 'tenisu'],
    answer: 'tenis',
    tip: 'igrati + accusative.',
  },
  {
    mode: 'igrati',
    q: 'Djed igra ____.',
    en: 'Grandad plays chess.',
    opts: ['šah', 'šahom', 'šaha', 'šahu'],
    answer: 'šah',
    tip: 'igrati + accusative.',
  },
  {
    mode: 'igrati',
    q: 'Na plaži igramo ____.',
    en: 'On the beach we play volleyball.',
    opts: ['odbojku', 'odbojka', 'odbojkom', 'odbojci'],
    answer: 'odbojku',
    tip: 'igrati + accusative: -a becomes -u.',
  },
  {
    mode: 'igrati',
    q: 'Moja sestra igra ____.',
    en: 'My sister plays handball.',
    opts: ['rukomet', 'rukometom', 'rukometa', 'rukometu'],
    answer: 'rukomet',
    tip: 'igrati + accusative.',
  },
  {
    mode: 'igrati',
    q: 'Subotom ____ košarku.',
    en: 'On Saturdays we play basketball.',
    opts: ['igramo', 'igrate', 'igraju', 'igram'],
    answer: 'igramo',
    tip: 'We: the -mo ending.',
  },
  {
    mode: 'igrati',
    q: 'Gledamo ____ na televiziji.',
    en: 'We are watching the match on television.',
    opts: ['utakmicu', 'utakmica', 'utakmicom', 'utakmici'],
    answer: 'utakmicu',
    tip: 'gledati takes an ordinary object: the accusative.',
  },

  // ── baviti ────────────────────────────────────────────────────────────────
  {
    mode: 'baviti',
    q: 'Bavim se ____.',
    en: 'I do sport.',
    opts: ['sportom', 'sport', 'sporta', 'sportu'],
    answer: 'sportom',
    tip: 'baviti se takes the instrumental: masculine -om.',
  },
  {
    mode: 'baviti',
    q: 'Sestra se bavi ____.',
    en: 'My sister does swimming.',
    opts: ['plivanjem', 'plivanje', 'plivati', 'plivanju'],
    answer: 'plivanjem',
    tip: 'baviti se + instrumental: neuter -e becomes -em.',
  },
  {
    mode: 'baviti',
    q: 'Tata se bavi ____.',
    en: 'Dad plays tennis as his sport.',
    opts: ['tenisom', 'tenis', 'tenisa', 'tenisu'],
    answer: 'tenisom',
    tip: 'baviti se + instrumental: -om.',
  },
  {
    mode: 'baviti',
    q: '____ se baviš?',
    en: 'What do you do?',
    opts: ['Čime', 'Što', 'Koga', 'Kome'],
    answer: 'Čime',
    tip: 'baviti se needs the instrumental, so the question word is the instrumental of što.',
  },
  {
    mode: 'baviti',
    q: 'Bavim ____ trčanjem.',
    en: 'I do running.',
    opts: ['se', 'sam', 'me', 'si'],
    answer: 'se',
    tip: 'The verb is baviti se.',
  },
  {
    mode: 'baviti',
    q: 'Brat se bavi ____.',
    en: 'My brother does hiking.',
    opts: ['planinarenjem', 'planinarenje', 'planinariti', 'planinarenju'],
    answer: 'planinarenjem',
    tip: 'baviti se + instrumental: -em.',
  },
  {
    mode: 'baviti',
    q: 'Mi se ____ sportom.',
    en: 'We do sport.',
    opts: ['bavimo', 'bavite', 'bave', 'bavim'],
    answer: 'bavimo',
    tip: 'We: the -mo ending.',
  },
  {
    mode: 'baviti',
    q: 'Ana se bavi ____.',
    en: 'Ana plays basketball as her sport.',
    opts: ['košarkom', 'košarku', 'košarka', 'košarci'],
    answer: 'košarkom',
    tip: 'baviti se + instrumental: feminine -a becomes -om.',
  },

  // ── voljeti ───────────────────────────────────────────────────────────────
  {
    mode: 'voljeti',
    q: 'Volim ____.',
    en: 'I like swimming.',
    opts: ['plivati', 'plivam', 'plivanjem', 'pliva'],
    answer: 'plivati',
    tip: 'After volim, the second verb stays in the -ti form.',
  },
  {
    mode: 'voljeti',
    q: 'Ne volim ____.',
    en: 'I do not like skiing.',
    opts: ['skijati', 'skijam', 'skijanjem', 'skija'],
    answer: 'skijati',
    tip: 'After volim, the infinitive.',
  },
  {
    mode: 'voljeti',
    q: 'Volimo ____ u parku.',
    en: 'We like running in the park.',
    opts: ['trčati', 'trčimo', 'trčanjem', 'trči'],
    answer: 'trčati',
    tip: 'Only the first verb changes for the person.',
  },
  {
    mode: 'voljeti',
    q: 'Navijam ____ Hajduk.',
    en: 'I support Hajduk.',
    opts: ['za', 'na', 'u', 's'],
    answer: 'za',
    tip: 'navijati za + accusative.',
  },
  {
    mode: 'voljeti',
    q: 'Idem ____ trening.',
    en: 'I am going to training.',
    opts: ['na', 'za', 'u', 's'],
    answer: 'na',
    tip: 'Going to an event: na + accusative.',
  },
  {
    mode: 'voljeti',
    q: 'Dva ____ tjedno idem na bazen.',
    en: 'Twice a week I go to the pool.',
    opts: ['puta', 'put', 'puti', 'putova'],
    answer: 'puta',
    tip: 'After dva, the genitive singular.',
  },
  {
    mode: 'voljeti',
    q: 'U ____ vrijeme igram šah.',
    en: 'In my free time I play chess.',
    opts: ['slobodno', 'slobodnom', 'slobodnog', 'slobodna'],
    answer: 'slobodno',
    tip: 'u + accusative: vrijeme is neuter, and its describing word matches it.',
  },
  {
    mode: 'voljeti',
    q: '____ igramo nogomet.',
    en: 'At weekends we play football.',
    opts: ['Vikendom', 'Vikend', 'Vikenda', 'Vikendu'],
    answer: 'Vikendom',
    tip: 'vikendom — at weekends, like subotom on Saturdays.',
  },
];
