// src/data/drills/c1/collectivePluralDrill.ts
//
// C1 THE COLLECTIVE IN -AD — the drill for the `collective-plural` lesson (workbook
// Lesson 3, p. 70 and 78: zbirna množina).
//
// Three modes, eight items each:
//   tvorba   — the collective from the young in -e: pile → pilad, unuče → unučad
//   padezi   — declined like stvar: dobre momčadi, o siročadi, s unučadi; momčadi (pl.)
//   slaganje — one feminine noun with a singular verb: Unučad je došla, Pilad je hranjena
//
// The -je collectives (lišće, grožđe) belong to `collective-nouns` and are not drilled
// here. The instrumental in -ju (s momčadju) is correct and is never offered as wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COLLECTIVE_PLURAL_MODE_LABELS: Record<string, string> = {
  tvorba: '🐣 Tvorba na -ad',
  padezi: '📚 Padeži',
  slaganje: '🔗 Slaganje',
};

export const COLLECTIVE_PLURAL_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'pile → ____',
    en: 'chick → chicks (as a group)',
    opts: ['pilad', 'pilići', 'piladi', 'pileta'],
    answer: 'pilad',
    tip: 'The collective of the young is formed with -ad.',
  },
  {
    mode: 'tvorba',
    q: 'tele → ____',
    en: 'calf → calves (as a group)',
    opts: ['telad', 'telići', 'teleta', 'teladi'],
    answer: 'telad',
    tip: 'tele → telad; telići is the countable plural of telić.',
  },
  {
    mode: 'tvorba',
    q: 'unuče → ____',
    en: 'grandchild → grandchildren (as a group)',
    opts: ['unučad', 'unučići', 'unučeta', 'unučadi'],
    answer: 'unučad',
    tip: 'unuče → unučad.',
  },
  {
    mode: 'tvorba',
    q: 'siroče → ____',
    en: 'orphan → orphans (as a group)',
    opts: ['siročad', 'siročeta', 'siročevi', 'siročadi'],
    answer: 'siročad',
    tip: 'siroče → siročad.',
  },
  {
    mode: 'tvorba',
    q: 'mače → ____',
    en: 'kitten → kittens (as a group)',
    opts: ['mačad', 'mačeta', 'mačevi', 'mačadi'],
    answer: 'mačad',
    tip: 'mače → mačad.',
  },
  {
    mode: 'tvorba',
    q: 'pače → ____',
    en: 'duckling → ducklings (as a group)',
    opts: ['pačad', 'pačeta', 'pačevi', 'pačadi'],
    answer: 'pačad',
    tip: 'pače → pačad.',
  },
  {
    mode: 'tvorba',
    q: 'novorođenče → ____',
    en: 'newborn → newborns (as a group)',
    opts: ['novorođenčad', 'novorođenčeta', 'novorođenčevi', 'novorođenčadi'],
    answer: 'novorođenčad',
    tip: 'novorođenče → novorođenčad.',
  },
  {
    mode: 'tvorba',
    q: 'Which collective noun means "a team"?',
    en: 'It comes from the old momče, a young man.',
    opts: ['momčad', 'momci', 'momčići', 'momčadi'],
    answer: 'momčad',
    tip: 'momče → momčad: today it simply means a team.',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'U kojoj ____ igra tvoj brat?',
    en: 'Which team does your brother play for?',
    opts: ['momčadi', 'momčad', 'momčadu', 'momčadom'],
    answer: 'momčadi',
    tip: 'Locative of a stvar-type noun: u momčadi.',
  },
  {
    mode: 'padezi',
    q: 'Socijalni radnik brine se o napuštenoj ____.',
    en: 'The social worker looks after the abandoned orphans.',
    opts: ['siročadi', 'siročad', 'siročadu', 'siročadom'],
    answer: 'siročadi',
    tip: 'Locative in -i, like o stvari.',
  },
  {
    mode: 'padezi',
    q: 'Baka se igrala s ____ u vrtu.',
    en: 'Grandma played with the grandchildren in the garden.',
    opts: ['unučadi', 'unučadom', 'unučad', 'unučadu'],
    answer: 'unučadi',
    tip: 'Instrumental of a stvar-type noun: s unučadi.',
  },
  {
    mode: 'padezi',
    q: 'Seljak je na sajmu kupio ____ telad.',
    en: 'The farmer bought young calves at the fair.',
    opts: ['mladu', 'mladi', 'mladog', 'mlado'],
    answer: 'mladu',
    tip: 'Accusative feminine singular adjective; the noun itself does not change.',
  },
  {
    mode: 'padezi',
    q: 'Trener je zadovoljan ____ momčadi.',
    en: 'The coach is pleased with his team.',
    opts: ['svojom', 'svojim', 'svoju', 'svoje'],
    answer: 'svojom',
    tip: 'zadovoljan + instrumental; feminine singular adjective.',
  },
  {
    mode: 'padezi',
    q: 'U finalu su igrale dvije ____.',
    en: 'Two teams played in the final.',
    opts: ['momčadi', 'momčada', 'momčade', 'momčad'],
    answer: 'momčadi',
    tip: 'momčad is the one -ad noun with a plural: dvije momčadi.',
  },
  {
    mode: 'padezi',
    q: 'Igra u jednoj od najboljih ____ u ligi.',
    en: 'He plays for one of the best teams in the league.',
    opts: ['momčadi', 'momčadima', 'momčad', 'momčada'],
    answer: 'momčadi',
    tip: 'Genitive plural of momčad: momčadi.',
  },
  {
    mode: 'padezi',
    q: 'Čestitali smo ____ momčadi na pobjedi.',
    en: 'We congratulated the home team on the win.',
    opts: ['domaćoj', 'domaću', 'domaćom', 'domaćeg'],
    answer: 'domaćoj',
    tip: 'Dative feminine singular: domaćoj momčadi.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Unučad je jučer ____ na ručak.',
    en: 'The grandchildren came for lunch yesterday.',
    opts: ['došla', 'došli', 'došlo', 'došao'],
    answer: 'došla',
    tip: 'One feminine singular noun: došla.',
  },
  {
    mode: 'slaganje',
    q: 'Naša je momčad sinoć ____.',
    en: 'Our team won last night.',
    opts: ['pobijedila', 'pobijedili', 'pobijedilo', 'pobijedio'],
    answer: 'pobijedila',
    tip: 'momčad is feminine singular.',
  },
  {
    mode: 'slaganje',
    q: 'Mala je mačad ____ mlijeko.',
    en: 'The little kittens drank the milk.',
    opts: ['popila', 'popili', 'popilo', 'popile'],
    answer: 'popila',
    tip: 'Feminine singular participle with a collective in -ad.',
  },
  {
    mode: 'slaganje',
    q: 'Štenad je cijelu noć ____.',
    en: 'The puppies barked all night.',
    opts: ['lajala', 'lajali', 'lajalo', 'lajale'],
    answer: 'lajala',
    tip: 'štenad is one feminine noun: lajala.',
  },
  {
    mode: 'slaganje',
    q: 'Ta je domaća pilad ____ samo kukuruzom.',
    en: 'Those home-reared chicks are fed only on maize.',
    opts: ['hranjena', 'hranjeni', 'hranjeno', 'hranjen'],
    answer: 'hranjena',
    tip: 'The passive participle agrees too: feminine singular.',
  },
  {
    mode: 'slaganje',
    q: 'Novorođenčad je bila ____ cijelu noć.',
    en: 'The newborns were quiet all night.',
    opts: ['mirna', 'mirni', 'mirno', 'mirne'],
    answer: 'mirna',
    tip: 'Feminine singular adjective.',
  },
  {
    mode: 'slaganje',
    q: 'Telad je ____ na livadi.',
    en: 'The calves were grazing in the meadow.',
    opts: ['pasla', 'pasli', 'paslo', 'pasle'],
    answer: 'pasla',
    tip: 'Not neuter like tele: telad is feminine, so pasla.',
  },
  {
    mode: 'slaganje',
    q: 'Rukometna momčad ____ dobro uvježbana.',
    en: 'The handball team is well trained.',
    opts: ['je', 'su', 'jesu', 'budu'],
    answer: 'je',
    tip: 'A singular verb with one feminine noun.',
  },
];
