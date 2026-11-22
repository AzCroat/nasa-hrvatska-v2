// src/data/drills/a1/accusativeIntroDrill.ts
//
// A1 THE ACCUSATIVE — the drill for the `accusative-intro` lesson.
//
// Follows Hrvatski za početnike 1, pages 35–37: the hotel reception dialogue ("Imam jedan
// kofer i jednu torbu"), "Što Hrvatska ima?" ("Ima zastavu i grb… more…"), the AKUZATIV
// table (koga? što?: otok · kravatu · more) and the row "Hrvatska ima ____. (kravata)".
// Only what this lesson teaches: feminine -a → -u, and neuter nouns and masculine THINGS
// unchanged. Masculine people and animals (prijatelja) belong to the next lesson.
//
// Three modes:
//   zenski         — feminine -a becomes -u
//   nepromijenjeno — masculine things and neuter nouns stay as they are
//   fraza          — the adjective and possessive move with the noun

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_INTRO_MODE_LABELS: Record<string, string> = {
  zenski: '🅰️ -a → -u',
  nepromijenjeno: '🟰 Bez promjene',
  fraza: '🧩 Fraza',
};

export const ACCUSATIVE_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Italija ima ____. (zastava)',
    en: 'Italy has a flag.',
    opts: ['zastavu', 'zastava', 'zastave', 'zastavi'],
    answer: 'zastavu',
    tip: 'The flag is what Italy has, so it is the object: feminine -a becomes -u. zastava is the subject form, and -e and -i are endings of other forms.',
  },
  {
    mode: 'zenski',
    q: 'Pijem ____. (kava)',
    en: 'I am drinking coffee.',
    opts: ['kavu', 'kava', 'kave', 'kavi'],
    answer: 'kavu',
    tip: 'What you drink is the object: kava → kavu. "Pijem kava" leaves the noun in its dictionary form, the most common slip.',
  },
  {
    mode: 'zenski',
    q: 'Mama kuha ____. (juha)',
    en: 'Mom is cooking soup.',
    opts: ['juhu', 'juha', 'juhe', 'juhi'],
    answer: 'juhu',
    tip: 'Što kuha? — juhu. Feminine -a becomes -u for the object. juha is the subject form; -e and -i belong to other forms.',
  },
  {
    mode: 'zenski',
    q: 'Čitam ____. (knjiga)',
    en: 'I am reading a book.',
    opts: ['knjigu', 'knjiga', 'knjige', 'knjizi'],
    answer: 'knjigu',
    tip: 'Što čitam? — knjigu. One vowel changes and nothing else. knjiga is the subject form, and knjige would be several books.',
  },
  {
    mode: 'zenski',
    q: 'Volim ____. (mama)',
    en: 'I love my mom.',
    opts: ['mamu', 'mama', 'mame', 'mami'],
    answer: 'mamu',
    tip: 'The person you love is the object: mama → mamu. The rule is the same for people and things in -a.',
  },
  {
    mode: 'zenski',
    q: 'Zagreb ima ____. (uspinjača)',
    en: 'Zagreb has a funicular.',
    opts: ['uspinjaču', 'uspinjača', 'uspinjače', 'uspinjači'],
    answer: 'uspinjaču',
    tip: 'What Zagreb has is the object: uspinjača → uspinjaču. A long word follows the same rule as kava → kavu.',
  },
  {
    mode: 'zenski',
    q: 'Večeras gledamo ____. (televizija)',
    en: 'We are watching TV tonight.',
    opts: ['televiziju', 'televizija', 'televizije', 'televiziji'],
    answer: 'televiziju',
    tip: 'Što gledamo? — televiziju. Only the final -a changes to -u; the -ij- before it stays.',
  },
  {
    mode: 'zenski',
    q: 'Turist ima ____. (rezervacija)',
    en: 'The tourist has a reservation.',
    opts: ['rezervaciju', 'rezervacija', 'rezervacije', 'rezervaciji'],
    answer: 'rezervaciju',
    tip: 'The reservation is the object of ima: rezervacija → rezervaciju. rezervacija is the subject form.',
  },
  {
    mode: 'zenski',
    q: 'Imam ____. (sestra)',
    en: 'I have a sister.',
    opts: ['sestru', 'sestra', 'sestre', 'sestri'],
    answer: 'sestru',
    tip: 'The sister is the object of imam. Feminine -a becomes -u. sestre would be several sisters, and sestra is the subject form.',
  },

  // ── nepromijenjeno ────────────────────────────────────────────────────────
  {
    mode: 'nepromijenjeno',
    q: 'Naš grad ima zastavu i ____.',
    en: 'Our city has a flag and a coat of arms.',
    opts: ['grb', 'grba', 'grbu', 'grbom'],
    answer: 'grb',
    tip: 'A masculine thing does not change as an object: grb stays grb. Do not copy the -u of zastavu onto it, and -a is only for people and animals.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Dalmacija ima ____.',
    en: 'Dalmatia has the sea.',
    opts: ['more', 'mora', 'moru', 'morom'],
    answer: 'more',
    tip: 'A neuter noun looks the same as subject and object: more. The other three are endings of other forms.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Gledamo novi ____.',
    en: 'We are watching a new movie.',
    opts: ['film', 'filma', 'filmu', 'filmom'],
    answer: 'film',
    tip: 'film is a masculine thing, so nothing is added. "Gledamo filma" gives a thing the ending that only people and animals take.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Večeras pišem ____.',
    en: 'Tonight I am writing a letter.',
    opts: ['pismo', 'pisma', 'pismu', 'pismom'],
    answer: 'pismo',
    tip: 'pismo is neuter, and neuter nouns never change as objects. pisma would be several letters.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Moj brat ima ____.',
    en: 'My brother has a car.',
    opts: ['auto', 'auta', 'autu', 'autom'],
    answer: 'auto',
    tip: 'auto is a masculine thing and stays as it is: Moj brat ima auto. "auta" is a common mistake.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Imam jednu knjigu i jedan ____.',
    en: 'I have one book and one dictionary.',
    opts: ['rječnik', 'rječnika', 'rječniku', 'rječnikom'],
    answer: 'rječnik',
    tip: 'knjiga changed to knjigu, but rječnik is a masculine thing and does not change. jedan stays unchanged in front of it too.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Dijete pije ____.',
    en: 'The child is drinking milk.',
    opts: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
    answer: 'mlijeko',
    tip: 'mlijeko is neuter: same form for subject and object. Only feminine nouns in -a change here (Pijem kavu).',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Čekam ____.',
    en: 'I am waiting for the bus.',
    opts: ['autobus', 'autobusa', 'autobusu', 'autobusom'],
    answer: 'autobus',
    tip: 'A bus is a masculine thing, so no ending: Čekam autobus. Croatian needs no word for "for" here either.',
  },
  {
    mode: 'nepromijenjeno',
    q: 'Which of these nouns changes its ending when it is the object?',
    opts: ['kravata', 'grb', 'more', 'stan'],
    answer: 'kravata',
    tip: 'Only the feminine noun in -a changes: Imam kravatu. grb and stan are masculine things, and more is neuter; all three stay the same.',
  },

  // ── fraza ─────────────────────────────────────────────────────────────────
  {
    mode: 'fraza',
    q: 'Vidim ____ kuću. (velika)',
    en: 'I see a big house.',
    opts: ['veliku', 'velika', 'velike', 'veliko'],
    answer: 'veliku',
    tip: 'The adjective moves with its noun: velika kuća → veliku kuću. "velika kuću" changes only the noun; veliko is the neuter form.',
  },
  {
    mode: 'fraza',
    q: 'Čitam ____ knjigu. (moja)',
    en: 'I am reading my book.',
    opts: ['moju', 'moja', 'moje', 'moj'],
    answer: 'moju',
    tip: 'The possessive takes -u together with the noun: moja knjiga → moju knjigu. moja is the subject form; moj and moje go with masculine and neuter nouns.',
  },
  {
    mode: 'fraza',
    q: 'Dalmacija ima ____ klimu. (mediteranska)',
    en: 'Dalmatia has a Mediterranean climate.',
    opts: ['mediteransku', 'mediteranska', 'mediteranske', 'mediteransko'],
    answer: 'mediteransku',
    tip: 'klimu is a feminine object, so the adjective takes -u as well: mediteransku klimu. The whole phrase changes together.',
  },
  {
    mode: 'fraza',
    q: 'Imam jedan ključ i ____ olovku. (jedna)',
    en: 'I have one key and one pencil.',
    opts: ['jednu', 'jedna', 'jedno', 'jedan'],
    answer: 'jednu',
    tip: 'jedna changes like an adjective: jedna olovka → jednu olovku. jedan stays with the masculine ključ, and jedno is for neuter nouns.',
  },
  {
    mode: 'fraza',
    q: 'Pijem ____ kavu. (crna)',
    en: 'I am drinking black coffee.',
    opts: ['crnu', 'crna', 'crne', 'crni'],
    answer: 'crnu',
    tip: 'crna kava → crnu kavu: both words take -u. crna is the subject form, and crni is the masculine form.',
  },
  {
    mode: 'fraza',
    q: 'Čekam ____ sestru. (tvoja)',
    en: 'I am waiting for your sister.',
    opts: ['tvoju', 'tvoja', 'tvoje', 'tvoj'],
    answer: 'tvoju',
    tip: 'tvoja sestra → tvoju sestru. The possessive follows the noun into the object form; tvoja is the subject form.',
  },
  {
    mode: 'fraza',
    q: 'Vidim ____ auto.',
    en: 'I see a new car.',
    opts: ['nov', 'novu', 'nova', 'novo'],
    answer: 'nov',
    tip: 'auto is a masculine thing and does not change, so its adjective does not change either: nov auto. novu is for a feminine object, and novo would treat auto as neuter.',
  },
  {
    mode: 'fraza',
    q: 'Volimo ____ more.',
    en: 'We love our sea.',
    opts: ['naše', 'našu', 'naša', 'naš'],
    answer: 'naše',
    tip: 'more is neuter and stays the same as an object, and so does its possessive: naše more. našu would need a feminine noun (našu kuću).',
  },
  {
    mode: 'fraza',
    q: 'Imamo veliku kuću, ali ____ kuhinju. (mala)',
    en: 'We have a big house but a small kitchen.',
    opts: ['malu', 'mala', 'male', 'mali'],
    answer: 'malu',
    tip: 'kuhinju is a feminine object, so its adjective takes -u as well: malu kuhinju, just like veliku kuću. mala is the subject form, and mali is masculine.',
  },
];
