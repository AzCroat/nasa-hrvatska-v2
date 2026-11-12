// src/data/drills/b1/verbsWithInstrumentalDrill.ts
//
// B1 VERBS WITH THE INSTRUMENTAL — the drill for the `verbs-with-instrumental` lesson.
//
// baviti se, služiti se, ponositi se, hvaliti se and upravljati take the instrumental
// with no preposition; so do the adjectives zadovoljan and oduševljen, which also agree
// with the person who feels. The third mode drills the present of čuti and its type
// (čujem, pijem, obujem, šijem).
//
// Three modes:
//   glagol  — the case after the verb
//   pridjev — zadovoljan / oduševljen: case and agreement
//   cuti    — the present (and past) of čuti, piti, obuti, šiti

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_WITH_INSTRUMENTAL_MODE_LABELS: Record<string, string> = {
  glagol: '🧰 Glagol + instrumental',
  pridjev: '😊 Zadovoljan, oduševljen',
  cuti: '👂 Čujem, pijem',
};

export const VERBS_WITH_INSTRUMENTAL_DRILL_DATA: ModeDrillItem[] = [
  // ── glagol ────────────────────────────────────────────────────────────────
  {
    mode: 'glagol',
    q: 'Bavim se ____.',
    en: 'I do sport.',
    opts: ['sportom', 'sport', 'sporta', 'sportu'],
    answer: 'sportom',
    tip: 'Baviti se takes the instrumental with no preposition.',
  },
  {
    mode: 'glagol',
    q: 'Moj otac se bavi ____.',
    en: 'My father works in farming.',
    opts: ['poljoprivredom', 'poljoprivreda', 'poljoprivredu', 'poljoprivredi'],
    answer: 'poljoprivredom',
    tip: 'Baviti se + instrumental: the feminine -om.',
  },
  {
    mode: 'glagol',
    q: 'Služim se ____ svaki dan.',
    en: 'I use a computer every day.',
    opts: ['računalom', 'računalo', 'računala', 'računalu'],
    answer: 'računalom',
    tip: 'Služiti se takes the instrumental. The accusative would follow koristiti.',
  },
  {
    mode: 'glagol',
    q: 'Služite li se ____ jezikom?',
    en: 'Do you speak English?',
    opts: ['engleskim', 'engleski', 'engleskom', 'engleskoj'],
    answer: 'engleskim',
    tip: 'Jezik is masculine, so the adjective takes -im in the instrumental.',
  },
  {
    mode: 'glagol',
    q: 'Baka se ponosi ____ unucima.',
    en: 'Grandma is proud of her grandchildren.',
    opts: ['svojim', 'svoje', 'svojom', 'svoji'],
    answer: 'svojim',
    tip: 'Ponositi se + instrumental; in the plural every adjective takes -im.',
  },
  {
    mode: 'glagol',
    q: 'Ana upravlja ____ tvrtkom.',
    en: 'Ana runs a small company.',
    opts: ['malom', 'malu', 'malim', 'maloj'],
    answer: 'malom',
    tip: 'Upravljati takes the instrumental; tvrtka is feminine: malom tvrtkom.',
  },
  {
    mode: 'glagol',
    q: 'Stalno se hvali ____ autom.',
    en: 'He keeps boasting about his new car.',
    opts: ['novim', 'novi', 'novom', 'novome'],
    answer: 'novim',
    tip: 'Hvaliti se + instrumental; auto is masculine: novim autom.',
  },
  {
    mode: 'glagol',
    q: 'Tko upravlja ____ brodom?',
    en: 'Who is steering this ship?',
    opts: ['ovim', 'ovaj', 'ovom', 'ovoj'],
    answer: 'ovim',
    tip: 'Brod is masculine, in the instrumental after upravljati: ovim brodom.',
  },
  {
    mode: 'glagol',
    q: 'Čime se ____ tvoja sestra?',
    en: 'What does your sister do?',
    opts: ['bavi', 'bave', 'baviš', 'bavimo'],
    answer: 'bavi',
    tip: 'The subject is tvoja sestra, one person: bavi.',
  },
  // ── pridjev ───────────────────────────────────────────────────────────────
  {
    mode: 'pridjev',
    q: 'Ana: "Jako sam ____ svojim poslom."',
    en: 'Ana: I am very pleased with my job.',
    opts: ['zadovoljna', 'zadovoljan', 'zadovoljni', 'zadovoljno'],
    answer: 'zadovoljna',
    tip: 'The adjective agrees with the speaker; Ana is a woman.',
  },
  {
    mode: 'pridjev',
    q: 'Marko: "Nisam ____ ovim hotelom."',
    en: 'Marko: I am not satisfied with this hotel.',
    opts: ['zadovoljan', 'zadovoljna', 'zadovoljne', 'zadovoljno'],
    answer: 'zadovoljan',
    tip: 'A man speaking: the masculine form.',
  },
  {
    mode: 'pridjev',
    q: 'Oduševljeni smo ____.',
    en: 'We are thrilled with the trip.',
    opts: ['izletom', 'izlet', 'izletu', 'izleta'],
    answer: 'izletom',
    tip: 'Oduševljen takes the instrumental with no preposition.',
  },
  {
    mode: 'pridjev',
    q: 'Jesi li zadovoljna ____ stanom?',
    en: 'Are you happy with the new flat?',
    opts: ['novim', 'novi', 'novom', 'novu'],
    answer: 'novim',
    tip: 'Zadovoljan + instrumental; stan is masculine: novim stanom.',
  },
  {
    mode: 'pridjev',
    q: 'Roditelji su ____ tvojim poklonom.',
    en: 'My parents are thrilled with your present.',
    opts: ['oduševljeni', 'oduševljen', 'oduševljena', 'oduševljeno'],
    answer: 'oduševljeni',
    tip: 'Roditelji is masculine plural, and the adjective agrees with it.',
  },
  {
    mode: 'pridjev',
    q: 'Profesor je zadovoljan ____ radom.',
    en: 'The teacher is pleased with our work.',
    opts: ['našim', 'naš', 'našem', 'našom'],
    answer: 'našim',
    tip: 'Rad is masculine, in the instrumental: našim radom.',
  },
  {
    mode: 'pridjev',
    q: 'Ponosna sam na ____ kćer.',
    en: 'I am proud of my daughter.',
    opts: ['svoju', 'svojom', 'svoja', 'svojoj'],
    answer: 'svoju',
    tip: 'The adjective ponosan works differently from ponositi se: na + accusative.',
  },
  {
    mode: 'pridjev',
    q: 'Djeca su oduševljena ____.',
    en: 'The children are thrilled with the sea.',
    opts: ['morem', 'more', 'moru', 'mora'],
    answer: 'morem',
    tip: 'More is neuter in -e, so the instrumental is morem.',
  },
  // ── cuti ──────────────────────────────────────────────────────────────────
  {
    mode: 'cuti',
    q: 'Ne ____ te dobro.',
    en: 'I can’t hear you well.',
    opts: ['čujem', 'čuem', 'čujim', 'čuim'],
    answer: 'čujem',
    tip: 'Čuti puts a j into its present: čujem, čuješ, čuje…',
  },
  {
    mode: 'cuti',
    q: '____ li me?',
    en: 'Can you hear me? (to a friend)',
    opts: ['Čuješ', 'Čujiš', 'Čuiš', 'Čujete'],
    answer: 'Čuješ',
    tip: 'To one friend: the ti form, čuješ. Čujete is for vi.',
  },
  {
    mode: 'cuti',
    q: 'Oni ____ glazbu kroz zid.',
    en: 'They hear music through the wall.',
    opts: ['čuju', 'čuje', 'čujemo', 'čujete'],
    answer: 'čuju',
    tip: 'The oni form of čuti: čuju.',
  },
  {
    mode: 'cuti',
    q: 'Ujutro ____ kavu.',
    en: 'In the morning I drink coffee.',
    opts: ['pijem', 'pim', 'pijam', 'pijim'],
    answer: 'pijem',
    tip: 'Piti follows čuti: pijem, piješ, pije…',
  },
  {
    mode: 'cuti',
    q: 'Navečer ____ čaj.',
    en: 'In the evening we drink tea.',
    opts: ['pijemo', 'pimo', 'pijamo', 'pijete'],
    answer: 'pijemo',
    tip: 'The mi form of piti: pijemo.',
  },
  {
    mode: 'cuti',
    q: 'Prvo ____ cipele, a onda izađem.',
    en: 'First I put on my shoes, then I go out.',
    opts: ['obujem', 'obuem', 'obujim', 'obuim'],
    answer: 'obujem',
    tip: 'Obuti → obujem, the same j as in čujem.',
  },
  {
    mode: 'cuti',
    q: 'Baka ____ haljinu za unuku.',
    en: 'Grandma is sewing a dress for her granddaughter.',
    opts: ['šije', 'šiti', 'šie', 'šija'],
    answer: 'šije',
    tip: 'Šiti → šijem, šiješ, šije.',
  },
  {
    mode: 'cuti',
    q: 'Jučer sam ____ lijepu vijest.',
    en: 'Yesterday I heard some good news.',
    opts: ['čuo', 'čujo', 'čuio', 'čujem'],
    answer: 'čuo',
    tip: 'The past comes from the infinitive: čuti → čuo (a man), čula (a woman).',
  },
];
