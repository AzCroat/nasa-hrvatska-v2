// src/data/drills/oldTextsDrill.ts
//
// C2 STARI TEKSTOVI — the drill for the `stari-tekstovi` lesson.
//
// BEFORE GAJ, EVERY WRITER SPELLED DIFFERENTLY. The diacritics did not exist,
// so *č*, *ć* and *š* were written with digraphs — *cs*, *ch*, *sz*, and
// several other systems besides. The practical instruction is not to decode it
// letter by letter but to READ IT ALOUD: the spelling is foreign, the language
// is not, and the ear resolves what the eye cannot.
//
// The tenses a learner never uses are the ones those texts run on: the aorist
// and imperfect are the ordinary narrative spine, and *bijah*, *bijaše*,
// *reče*, *dođe* appear on every page.
//
// A small set of shifted words covers most of the vocabulary gap — *vazda* for
// *uvijek*, *jur* for *već* — and *knjiga* meant a letter as well as a book.
//
// And the dialects were LITERARY LANGUAGES: Marulić wrote čakavian as a
// standard, not as a curiosity.
//
// Three modes:
//   pravopis — pre-Gaj spelling, and reading it aloud
//   vremena  — the narrative tenses of older prose
//   rijeci   — the shifted words, and the literary dialects

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const OLD_TEXTS_MODE_LABELS: Record<string, string> = {
  pravopis: '🖋️ Staro pisanje',
  vremena: '⏳ Stara vremena',
  rijeci: '📖 Stare riječi',
};

export const OLD_TEXTS_DRILL_DATA: ModeDrillItem[] = [
  // ── pravopis ──────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Što u starom pisanju odgovara slovu "č"?',
    en: 'Which digraph stood for č?',
    opts: ['cs', 'sz', 'ie', 'tj'],
    answer: 'cs',
    tip: 'Before Gaj there were no diacritics, so digraphs did the work.',
  },
  {
    mode: 'pravopis',
    q: 'Što je najpraktičniji postupak sa starim pravopisom?',
    en: 'The practical method:',
    opts: ['čitati naglas', 'tražiti svaki znak', 'prepisati u moderni pravopis', 'preskočiti'],
    answer: 'čitati naglas',
    tip: 'The spelling is foreign; the language is not. The ear resolves it.',
  },
  {
    mode: 'pravopis',
    q: 'Što odgovara slovu "š"?',
    en: 'Which stood for š?',
    opts: ['sz', 'cs', 'ch', 'zs'],
    answer: 'sz',
    tip: 'One of several systems — and writers were not consistent with each other.',
  },
  {
    mode: 'pravopis',
    q: 'Što odgovara "ć" i "đ" u 19. stoljeću?',
    en: 'Nineteenth-century printing used:',
    opts: ['tj i dj', 'cs i sz', 'ie i ye', 'ch i zh'],
    answer: 'tj i dj',
    tip: 'And dj survives today in transliteration where đ is unavailable.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se pisao odraz jata?',
    en: 'How was the yat reflex written?',
    opts: ['ie ili ye', 'ije samo', 'e', 'i'],
    answer: 'ie ili ye',
    tip: 'Older spellings of what is now ije or je.',
  },
  {
    mode: 'pravopis',
    q: 'Jesu li pisci prije Gaja pisali jednako?',
    en: 'Did writers spell alike?',
    opts: ['ne, svatko svoje', 'da', 'po regijama', 'po tiskarama'],
    answer: 'ne, svatko svoje',
    tip: 'Which is why one decoding table never quite covers the next text.',
  },
  {
    mode: 'pravopis',
    q: 'Kada su uvedeni dijakritici?',
    en: 'When did the diacritics arrive?',
    opts: ['1830-ih', '1750-ih', '1900-ih', '1600-ih'],
    answer: '1830-ih',
    tip: 'Gaj, in the 1830s — hence gajica.',
  },
  {
    mode: 'pravopis',
    q: 'Što je "jest" u starijim tekstovima?',
    en: 'What is jest there?',
    opts: ['puni oblik od "je"', 'imenica', 'aorist', 'prilog'],
    answer: 'puni oblik od "je"',
    tip: 'Where modern Croatian uses the clitic je, older texts often write jest.',
  },

  // ── vremena ───────────────────────────────────────────────────────────────
  {
    mode: 'vremena',
    q: 'Koje je vrijeme "bijaše"?',
    en: 'What is bijaše?',
    opts: ['imperfekt od biti', 'aorist od biti', 'pluskvamperfekt', 'kondicional'],
    answer: 'imperfekt od biti',
    tip: 'And bijah is the first person — the backbone of older narrative.',
  },
  {
    mode: 'vremena',
    q: 'Koje je vrijeme "dođe" u pripovijedanju?',
    en: 'What is dođe in a narrative?',
    opts: ['aorist', 'prezent', 'imperfekt', 'futur'],
    answer: 'aorist',
    tip: 'Though it looks like a present, in these texts it is the aorist.',
  },
  {
    mode: 'vremena',
    q: 'Zašto je to zamka za učenika?',
    en: 'Why is that a trap?',
    opts: [
      'oblik izgleda kao prezent',
      'riječ je nepoznata',
      'nedostaje pomoćni glagol',
      'nije zamka',
    ],
    answer: 'oblik izgleda kao prezent',
    tip: 'You read a present tense and the whole passage shifts out of time.',
  },
  {
    mode: 'vremena',
    q: 'Koja tri vremena nose stariju prozu?',
    en: 'Which three carry older prose?',
    opts: [
      'aorist, imperfekt, pluskvamperfekt',
      'perfekt, prezent, futur',
      'aorist, futur, kondicional',
      'prezent, imperfekt, futur drugi',
    ],
    answer: 'aorist, imperfekt, pluskvamperfekt',
    tip: 'The three a modern speaker never produces.',
  },
  {
    mode: 'vremena',
    q: 'Što je 1. lice jednine imperfekta od "biti"?',
    en: '1st singular imperfect of biti:',
    opts: ['bijah', 'bijaše', 'bih', 'bijasmo'],
    answer: 'bijah',
    tip: 'bijah, bijaše, bijasmo — and bih is the conditional, a different thing.',
  },
  {
    mode: 'vremena',
    q: 'Kako se pluskvamperfekt gradi?',
    en: 'How is the pluperfect built?',
    opts: ['bio je + particip', 'bih + particip', 'aorist + particip', 'prezent + particip'],
    answer: 'bio je + particip',
    tip: 'bio je došao — the action before the action.',
  },
  {
    mode: 'vremena',
    q: 'Koji je red napada na stari tekst?',
    en: 'The order of attack:',
    opts: [
      'glagoli, pa izgovor pravopisa, pa rječnik',
      'rječnik pa glagoli',
      'redom od početka',
      'preskočiti nepoznato',
    ],
    answer: 'glagoli, pa izgovor pravopisa, pa rječnik',
    tip: 'Verbs first, sound out the spelling, and look up only what blocks.',
  },
  {
    mode: 'vremena',
    q: 'Zašto glagoli prvi?',
    en: 'Why the verbs first?',
    opts: ['nose okvir rečenice', 'najkraći su', 'najlakši su', 'najčešći su'],
    answer: 'nose okvir rečenice',
    tip: 'With the frame in place the unknown nouns matter much less.',
  },

  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Što znači "vazda"?',
    en: 'What does vazda mean?',
    opts: ['uvijek', 'nikad', 'odmah', 'jedva'],
    answer: 'uvijek',
    tip: 'And it survives in some dialects today.',
  },
  {
    mode: 'rijeci',
    q: 'Što znači "jur"?',
    en: 'What does jur mean?',
    opts: ['već', 'jer', 'jedva', 'jučer'],
    answer: 'već',
    tip: 'A small set of shifted words covers most of the gap.',
  },
  {
    mode: 'rijeci',
    q: 'Što je "knjiga" moglo značiti?',
    en: 'What could knjiga mean?',
    opts: ['i pismo', 'i novine', 'i zakon', 'i pero'],
    answer: 'i pismo',
    tip: 'A letter as well as a book — the older sense survives in fixed phrases.',
  },
  {
    mode: 'rijeci',
    q: 'Što znači "glagoljati"?',
    en: 'What does glagoljati mean?',
    opts: ['govoriti', 'pisati', 'pjevati', 'moliti'],
    answer: 'govoriti',
    tip: 'And it is the root of glagoljica.',
  },
  {
    mode: 'rijeci',
    q: 'Što je "pisac" izvorno značilo?',
    en: 'What did pisac originally mean?',
    opts: ['i prepisivač', 'i tiskar', 'i čitatelj', 'i knjižar'],
    answer: 'i prepisivač',
    tip: 'A scribe as well as an author — the sense narrowed later.',
  },
  {
    mode: 'rijeci',
    q: 'Kakav je bio status čakavskoga kod Marulića?',
    en: 'What was Marulić čakavian?',
    opts: ['književni standard', 'dijalekt bez ugleda', 'govorni jezik samo', 'strani utjecaj'],
    answer: 'književni standard',
    tip: 'A literary language, not a curiosity — which reframes the whole tradition.',
  },
  {
    mode: 'rijeci',
    q: 'Jesu li kajkavski tekstovi književnost?',
    en: 'Is kajkavian writing literature?',
    opts: ['da, s vlastitom tradicijom', 'ne', 'samo poezija', 'samo vjerski tekstovi'],
    answer: 'da, s vlastitom tradicijom',
    tip: 'Both non-standard varieties were written standards before štokavian won.',
  },
  {
    mode: 'rijeci',
    q: 'Što stari tekst mijenja u razumijevanju standarda?',
    en: 'What does reading them change?',
    opts: [
      'standard je izbor, ne nužnost',
      'ništa',
      'gramatika je bila jednostavnija',
      'jezik se nije mijenjao',
    ],
    answer: 'standard je izbor, ne nužnost',
    tip: 'The C2 point the whole level keeps returning to.',
  },
];
