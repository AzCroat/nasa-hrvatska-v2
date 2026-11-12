// src/data/drills/c1/collectiveNounsDrill.ts
//
// C1 COLLECTIVE NOUNS — the drill for the `collective-nouns` lesson.
//
// Two modes:
//   oblici   — the collectives in their cases: lišće, cvijeće, granje, braća, djeca, telad
//   slaganje — what agrees with them: Lišće je opalo, Braća su došla, Telad je pasla
//
// The semantic plural heard in speech (Braća su došli, Djeca su umorni) is never
// offered as a wrong option; the distractors are wrong in gender, number or case.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COLLECTIVE_NOUNS_MODE_LABELS: Record<string, string> = {
  oblici: '🍂 Oblici',
  slaganje: '🤝 Slaganje',
};

export const COLLECTIVE_NOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'U jesen ____ opada s drveća.',
    en: 'In autumn the leaves fall from the trees.',
    opts: ['lišće', 'listovi', 'lišća', 'listova'],
    answer: 'lišće',
    tip: 'The foliage as one mass is lišće, with a singular verb.',
  },
  {
    mode: 'oblici',
    q: 'Kupio joj je buket ____.',
    en: 'He bought her a bouquet of flowers.',
    opts: ['cvijeća', 'cvijeće', 'cvijeću', 'cvjetovi'],
    answer: 'cvijeća',
    tip: 'buket takes the genitive: cvijeća.',
  },
  {
    mode: 'oblici',
    q: 'Nakon oluje cesta je bila puna ____.',
    en: 'After the storm the road was full of branches.',
    opts: ['granja', 'granje', 'granju', 'granjem'],
    answer: 'granja',
    tip: 'pun takes the genitive: granja.',
  },
  {
    mode: 'oblici',
    q: 'Put je bio posut ____.',
    en: 'The path was strewn with stones.',
    opts: ['kamenjem', 'kamenje', 'kamenja', 'kamenju'],
    answer: 'kamenjem',
    tip: 'The instrumental of kamenje, like poljem.',
  },
  {
    mode: 'oblici',
    q: 'Jastuk je napunjen guščjim ____.',
    en: 'The pillow is filled with goose feathers.',
    opts: ['perjem', 'perje', 'perja', 'perju'],
    answer: 'perjem',
    tip: 'The instrumental of perje.',
  },
  {
    mode: 'oblici',
    q: 'Berba ____ počinje u rujnu.',
    en: 'The grape harvest begins in September.',
    opts: ['grožđa', 'grožđe', 'grožđu', 'grožđem'],
    answer: 'grožđa',
    tip: 'berba takes the genitive: grožđa.',
  },
  {
    mode: 'oblici',
    q: 'Dao sam ____ ključeve od kuće.',
    en: 'I gave my brothers the house keys.',
    opts: ['braći', 'braća', 'braću', 'braće'],
    answer: 'braći',
    tip: 'The dative of braća, like ženi.',
  },
  {
    mode: 'oblici',
    q: 'Volim se igrati s ____.',
    en: 'I like playing with the children.',
    opts: ['djecom', 'djeca', 'djeci', 'djecu'],
    answer: 'djecom',
    tip: 's + instrumental: djecom, like ženom.',
  },
  {
    mode: 'oblici',
    q: 'Dame i ____, dobro došli!',
    en: 'Ladies and gentlemen, welcome!',
    opts: ['gospodo', 'gospoda', 'gospode', 'gospodi'],
    answer: 'gospodo',
    tip: 'The vocative of gospoda.',
  },
  {
    mode: 'oblici',
    q: 'Seljak je hranio ____ u staji.',
    en: 'The farmer was feeding the calves in the barn.',
    opts: ['telad', 'teladu', 'telade', 'teladom'],
    answer: 'telad',
    tip: 'telad is a feminine i-noun: the accusative is the same as the nominative.',
  },
  {
    mode: 'oblici',
    q: 'Djed je cijelu večer pričao o svojoj ____.',
    en: 'Grandpa talked about his grandchildren all evening.',
    opts: ['unučadi', 'unučad', 'unučadu', 'unučadima'],
    answer: 'unučadi',
    tip: 'o + locative of the i-noun unučad: unučadi.',
  },
  {
    mode: 'oblici',
    q: 'U toj šumi ima mnogo starog ____.',
    en: 'There are many old trees in that forest.',
    opts: ['drveća', 'drveće', 'drveću', 'drvećem'],
    answer: 'drveća',
    tip: 'mnogo takes the genitive: starog drveća.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Lišće je već ____.',
    en: 'The leaves have already fallen.',
    opts: ['opalo', 'opali', 'opala', 'opao'],
    answer: 'opalo',
    tip: 'lišće is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Cvijeće u vrtu je ____.',
    en: 'The flowers in the garden have wilted.',
    opts: ['uvelo', 'uveli', 'uvela', 'uveo'],
    answer: 'uvelo',
    tip: 'cvijeće is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Moja ____ žive u Kanadi.',
    en: 'My brothers live in Canada.',
    opts: ['braća', 'brata', 'braće', 'braćo'],
    answer: 'braća',
    tip: 'The nominative of the collective; the verb is plural.',
  },
  {
    mode: 'slaganje',
    q: 'Djeca ____ umorna nakon izleta.',
    en: 'The children are tired after the trip.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'djeca takes a plural verb.',
  },
  {
    mode: 'slaganje',
    q: 'Gospoda su ____ za stol.',
    en: 'The gentlemen sat down at the table.',
    opts: ['sjela', 'sjelo', 'sjeo', 'sjele'],
    answer: 'sjela',
    tip: 'With gospoda, the participle ends in -a.',
  },
  {
    mode: 'slaganje',
    q: 'Telad je ____ na livadi.',
    en: 'The calves were grazing in the meadow.',
    opts: ['pasla', 'pasao', 'paslo', 'pasli'],
    answer: 'pasla',
    tip: 'telad is feminine singular.',
  },
  {
    mode: 'slaganje',
    q: 'Naša je momčad sinoć ____.',
    en: 'Our team won last night.',
    opts: ['pobijedila', 'pobijedio', 'pobijedilo', 'pobijedili'],
    answer: 'pobijedila',
    tip: 'momčad is a feminine singular -ad noun.',
  },
  {
    mode: 'slaganje',
    q: 'Grožđe je ove godine rano ____.',
    en: 'The grapes ripened early this year.',
    opts: ['dozrelo', 'dozreli', 'dozrela', 'dozreo'],
    answer: 'dozrelo',
    tip: 'grožđe is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: '____ djeca igraju se u parku.',
    en: 'Small children are playing in the park.',
    opts: ['Mala', 'Mali', 'Malo', 'Male'],
    answer: 'Mala',
    tip: 'An attribute of djeca takes the feminine singular form.',
  },
  {
    mode: 'slaganje',
    q: 'Drveće je ____.',
    en: 'The trees have blossomed.',
    opts: ['procvjetalo', 'procvjetali', 'procvjetala', 'procvjetao'],
    answer: 'procvjetalo',
    tip: 'drveće is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Prasad je bila ____.',
    en: 'The piglets were hungry.',
    opts: ['gladna', 'gladan', 'gladni', 'gladno'],
    answer: 'gladna',
    tip: 'prasad is feminine singular.',
  },
  {
    mode: 'slaganje',
    q: 'Lišće je žuto i vjetar ____ nosi.',
    en: 'The leaves are yellow and the wind carries them.',
    opts: ['ga', 'ih', 'je', 'ju'],
    answer: 'ga',
    tip: 'The pronoun follows the form: lišće is neuter singular, so ga.',
  },
];
