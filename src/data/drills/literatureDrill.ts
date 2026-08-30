// src/data/drills/literatureDrill.ts
//
// B2 READING CROATIAN LITERATURE — the drill for the `literature-canon` lesson.
//
// The advice this lesson exists to give is practical rather than cultural: the
// first Croatian book a learner picks decides whether there is a second one.
// Reach for Krleža because he is the great name and the sentences will defeat
// you; start with Brlić-Mažuranić and the prose is clear, the stories are short
// and every Croatian already knows them, so there is something to talk about.
//
// The method matters as much as the choice. Read the PAGE, then look up three
// words — not the other way round. A learner who stops at every unknown word
// reads four sentences an evening and gives up; a learner who reads for the
// shape of it finishes the story.
//
// The vocabulary is the small set needed to say anything about a book at all:
// *radnja*, *lik*, *prijevod*, *roman*, *pripovijetka*.
//
// Three modes:
//   odakle  — where to start, and what to leave for later
//   knjiga  — talking about a book
//   citanje — the method, and the names worth knowing

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const LITERATURE_MODE_LABELS: Record<string, string> = {
  odakle: '📚 Odakle početi',
  knjiga: '📖 O knjizi',
  citanje: '🔍 Kako čitati',
};

export const LITERATURE_DRILL_DATA: ModeDrillItem[] = [
  // ── odakle ────────────────────────────────────────────────────────────────
  {
    mode: 'odakle',
    q: 'S kojim se autorom preporučuje početi?',
    en: 'Which author to start with?',
    opts: ['Ivana Brlić-Mažuranić', 'Miroslav Krleža', 'Marin Držić', 'Antun Gustav Matoš'],
    answer: 'Ivana Brlić-Mažuranić',
    tip: 'Clear prose, short stories, and every Croatian knows them.',
  },
  {
    mode: 'odakle',
    q: 'Koje je njezino najpoznatije djelo?',
    en: 'Her best-known work:',
    opts: ['Priče iz davnine', 'Povratak Filipa Latinovicza', 'Judita', 'Zlatarovo zlato'],
    answer: 'Priče iz davnine',
    tip: 'Fairy tales built on Slavic myth.',
  },
  {
    mode: 'odakle',
    q: 'Zašto Krleža nije prvi izbor?',
    en: 'Why not Krleža first?',
    opts: ['rečenice su duge i guste', 'nije važan', 'nije preveden', 'teško se nalazi'],
    answer: 'rečenice su duge i guste',
    tip: 'He is the mountain, not the foothill. Come to him later.',
  },
  {
    mode: 'odakle',
    q: 'Tko je napisao "Juditu" 1501.?',
    en: 'Who wrote Judita in 1501?',
    opts: ['Marko Marulić', 'Miroslav Krleža', 'Vladimir Nazor', 'Ivan Gundulić'],
    answer: 'Marko Marulić',
    tip: 'The name every Croatian knows — and the date with it.',
  },
  {
    mode: 'odakle',
    q: 'Tko piše moderne, čitke eseje?',
    en: 'Modern, plain-style essays:',
    opts: ['Slavenka Drakulić', 'Marko Marulić', 'Ivana Brlić-Mažuranić', 'Ivan Gundulić'],
    answer: 'Slavenka Drakulić',
    tip: 'And Dubravka Ugrešić for the same register with more edge.',
  },
  {
    mode: 'odakle',
    q: 'Tko piše namjerno pristupačne romane i drame?',
    en: 'Deliberately readable novels and plays:',
    opts: ['Miro Gavran', 'Miroslav Krleža', 'Marko Marulić', 'Vladimir Nazor'],
    answer: 'Miro Gavran',
    tip: 'Widely translated, and short.',
  },
  {
    mode: 'odakle',
    q: 'Zašto je poznata knjiga bolji prvi izbor?',
    en: 'Why pick a well-known book?',
    opts: ['ima se o čemu razgovarati', 'kraća je', 'jeftinija je', 'lakše se nalazi'],
    answer: 'ima se o čemu razgovarati',
    tip: 'Reading it buys you a conversation, which is the point.',
  },
  {
    mode: 'odakle',
    q: 'Čitam ____ Brlić-Mažuranić. (priče)',
    en: 'I am reading the stories of Brlić-Mažuranić.',
    opts: ['priče', 'priča', 'pričama', 'pričom'],
    answer: 'priče',
    tip: 'Accusative plural after čitati.',
  },

  // ── knjiga ────────────────────────────────────────────────────────────────
  {
    mode: 'knjiga',
    q: 'Što je "radnja" u knjizi?',
    en: 'What is the radnja?',
    opts: ['plot', 'setting', 'workshop', 'action scene'],
    answer: 'plot',
    tip: 'It also means a shop — context settles it instantly.',
  },
  {
    mode: 'knjiga',
    q: 'Što je "lik"?',
    en: 'What is a lik?',
    opts: ['character', 'face', 'image', 'figure of speech'],
    answer: 'character',
    tip: 'Glavni lik is the main character.',
  },
  {
    mode: 'knjiga',
    q: 'Što je "pripovijetka"?',
    en: 'What is a pripovijetka?',
    opts: ['short story', 'novel', 'fable', 'narrator'],
    answer: 'short story',
    tip: 'From pripovijedati, to narrate.',
  },
  {
    mode: 'knjiga',
    q: 'Što je "prijevod"?',
    en: 'What is a prijevod?',
    opts: ['translation', 'translator', 'preface', 'edition'],
    answer: 'translation',
    tip: 'The translator is a prevoditelj.',
  },
  {
    mode: 'knjiga',
    q: 'O čemu se ____ radi? (knjiga)',
    en: 'What is the book about?',
    opts: ['knjizi', 'knjigu', 'knjige', 'knjigom'],
    answer: 'knjizi',
    tip: 'o plus the locative — and knjiga becomes knjizi.',
  },
  {
    mode: 'knjiga',
    q: 'Roman je napisan ____ prvom licu.',
    en: 'The novel is written in the first person.',
    opts: ['u', 'na', 'po', 'za'],
    answer: 'u',
    tip: 'u prvom licu — locative.',
  },
  {
    mode: 'knjiga',
    q: 'Što je "drama" u ovom popisu?',
    en: 'What is drama here?',
    opts: ['a play', 'a genre of intensity', 'a crisis', 'a screenplay'],
    answer: 'a play',
    tip: 'The written play. A performance is predstava.',
  },
  {
    mode: 'knjiga',
    q: 'Kako se pita je li se knjiga nekomu svidjela?',
    en: 'Asking whether they liked it:',
    opts: [
      'Je li ti se svidjela knjiga?',
      'Jesi li svidio knjigu?',
      'Voliš li knjigu?',
      'Sviđaš li knjigu?',
    ],
    answer: 'Je li ti se svidjela knjiga?',
    tip: 'The sviđati se flip again — the BOOK is the subject.',
  },

  // ── citanje ───────────────────────────────────────────────────────────────
  {
    mode: 'citanje',
    q: 'Koji je preporučeni način čitanja?',
    en: 'The recommended method:',
    opts: [
      'pročitaj stranicu pa potraži tri riječi',
      'potraži svaku nepoznatu riječ',
      'čitaj samo s prijevodom',
      'čitaj naglas svaku rečenicu',
    ],
    answer: 'pročitaj stranicu pa potraži tri riječi',
    tip: 'Reading the page first is what keeps you reading at all.',
  },
  {
    mode: 'citanje',
    q: 'Što se dogodi ako se traži svaka riječ?',
    en: 'What happens if you look up everything?',
    opts: [
      'pročita se nekoliko rečenica i odustane',
      'brže se uči',
      'pamti se bolje',
      'ništa loše',
    ],
    answer: 'pročita se nekoliko rečenica i odustane',
    tip: 'Four sentences an evening is not reading; it is decoding.',
  },
  {
    mode: 'citanje',
    q: 'Čitam ____ rječnika. (bez)',
    en: 'I read without a dictionary.',
    opts: ['bez rječnika', 'bez rječnik', 'bez rječniku', 'bez rječnikom'],
    answer: 'bez rječnika',
    tip: 'bez takes the genitive.',
  },
  {
    mode: 'citanje',
    q: 'Što znači "prelistati"?',
    en: 'What does prelistati mean?',
    opts: ['to leaf through', 'to reread', 'to finish', 'to translate'],
    answer: 'to leaf through',
    tip: 'From list, a page.',
  },
  {
    mode: 'citanje',
    q: 'Zašto je bolje birati kratko za prvu knjigu?',
    en: 'Why start short?',
    opts: [
      'dovršena knjiga je poticaj',
      'kraće je jeftinije',
      'kratke su lakše napisane',
      'nema razloga',
    ],
    answer: 'dovršena knjiga je poticaj',
    tip: 'Finishing one is what makes a second one happen.',
  },
  {
    mode: 'citanje',
    q: 'Pročitao sam ____ knjigu. (cijeli)',
    en: 'I read the whole book.',
    opts: ['cijelu', 'cijela', 'cijeli', 'cijelom'],
    answer: 'cijelu',
    tip: 'Accusative feminine.',
  },
  {
    mode: 'citanje',
    q: 'Koji je vid u "pročitati"?',
    en: 'Which aspect is pročitati?',
    opts: ['svršeni', 'nesvršeni', 'dvovidni', 'nema vid'],
    answer: 'svršeni',
    tip: 'Perfective — the whole book, finished. Čitati is the process.',
  },
  {
    mode: 'citanje',
    q: 'Preporučuješ li ____? (ta knjiga)',
    en: 'Would you recommend that book?',
    opts: ['tu knjigu', 'ta knjiga', 'te knjige', 'tom knjigom'],
    answer: 'tu knjigu',
    tip: 'Accusative after preporučiti.',
  },
];
