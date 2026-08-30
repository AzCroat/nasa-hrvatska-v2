// src/data/drills/artsDrill.ts
//
// C1 ARTS & CULTURE — the drill for the `arts-culture` lesson.
//
// The trap here is not vocabulary but VALENCE. *Potresan* looks like a warning
// and is a compliment: a *potresna predstava* is one that moved you badly, in
// the way serious work is supposed to. A learner who avoids it because it
// sounds negative loses the strongest praise in the register — and a learner
// who reaches for *dojmljiv* every time sounds like a press release.
//
// The other half is the standard/casual split that runs through the whole
// field: *glazba* is the standard word and *muzika* the casual one, *kazalište*
// is the theatre and *redatelj* the director. Getting these right is most of
// what makes a Croatian speaker place you.
//
// And the cultural anchors are worth knowing because they come up: *klapa*,
// the *Dubrovačke ljetne igre*, and the festival names people actually use.
//
// Three modes:
//   nazivi  — the standard words, and their casual counterparts
//   sudovi  — the vocabulary of judgement, and what each one signals
//   dogadaji — klapa, festivals and what is on

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ARTS_MODE_LABELS: Record<string, string> = {
  nazivi: '🎭 Nazivi',
  sudovi: '⭐ Sudovi',
  dogadaji: '🎪 Događaji',
};

export const ARTS_DRILL_DATA: ModeDrillItem[] = [
  // ── nazivi ────────────────────────────────────────────────────────────────
  {
    mode: 'nazivi',
    q: 'Koja je standardna riječ za "music"?',
    en: 'music',
    opts: ['glazba', 'muzika', 'napjev', 'svirka'],
    answer: 'glazba',
    tip: 'glazba is standard; muzika is casual and perfectly common in speech.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "kazalište"?',
    en: 'What is a kazalište?',
    opts: ['theatre', 'cinema', 'concert hall', 'stage'],
    answer: 'theatre',
    tip: 'The cinema is kino; the stage is pozornica.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "redatelj"?',
    en: 'What is a redatelj?',
    opts: ['director', 'editor', 'producer', 'stage manager'],
    answer: 'director',
    tip: 'Of a play or a film. A conductor is dirigent.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "predstava"?',
    en: 'What is a predstava?',
    opts: ['a play or performance', 'an introduction', 'a presentation', 'a screening'],
    answer: 'a play or performance',
    tip: 'Predstavljanje is an introduction — one suffix apart.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "skladatelj"?',
    en: 'What is a skladatelj?',
    opts: ['composer', 'arranger', 'lyricist', 'librettist'],
    answer: 'composer',
    tip: 'From skladati, to compose.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "izložba"?',
    en: 'What is an izložba?',
    opts: ['exhibition', 'gallery', 'installation', 'catalogue'],
    answer: 'exhibition',
    tip: 'Held in a galerija or a muzej.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "scenarij"?',
    en: 'What is a scenarij?',
    opts: ['screenplay', 'stage set', 'scenario in general', 'programme'],
    answer: 'screenplay',
    tip: 'And a scenarist writes it.',
  },
  {
    mode: 'nazivi',
    q: 'Bio sam ____ kazalištu.',
    en: 'I was at the theatre.',
    opts: ['u', 'na', 'kod', 'po'],
    answer: 'u',
    tip: 'u kazalištu but na koncertu and na izložbi. Learned per word.',
  },

  // ── sudovi ────────────────────────────────────────────────────────────────
  {
    mode: 'sudovi',
    q: 'Je li "potresna predstava" pohvala?',
    en: 'Is potresan praise?',
    opts: ['da, snažna pohvala', 'ne, prigovor', 'neutralno je', 'ovisi o tonu'],
    answer: 'da, snažna pohvala',
    tip: 'Moving, harrowing — and in this register that is high praise.',
  },
  {
    mode: 'sudovi',
    q: 'Što znači "dojmljiv"?',
    en: 'What does dojmljiv mean?',
    opts: ['impressive', 'moving to tears', 'imposing in size', 'memorable only'],
    answer: 'impressive',
    tip: 'Safe and slightly bland — the word a press release reaches for.',
  },
  {
    mode: 'sudovi',
    q: 'Što znači "nadahnut"?',
    en: 'What does nadahnut mean?',
    opts: ['inspired', 'inspiring to others', 'ambitious', 'original'],
    answer: 'inspired',
    tip: 'The work was inspired; nadahnjujuć would be inspiring.',
  },
  {
    mode: 'sudovi',
    q: 'Što znači "prenapuhan"?',
    en: 'What does prenapuhan mean?',
    opts: ['overblown', 'inflated in price', 'exaggerated in length', 'overrated by critics'],
    answer: 'overblown',
    tip: 'Literally over-inflated — and it is the sharpest word in the negative set.',
  },
  {
    mode: 'sudovi',
    q: 'Što znači "predvidljiv"?',
    en: 'What does predvidljiv mean?',
    opts: ['predictable', 'foreseeable in a good sense', 'conventional', 'derivative'],
    answer: 'predictable',
    tip: 'And in criticism it is damning without being loud.',
  },
  {
    mode: 'sudovi',
    q: 'Predstava je bila ____. (duhovit)',
    en: 'The play was witty.',
    opts: ['duhovita', 'duhovit', 'duhovito', 'duhoviti'],
    answer: 'duhovita',
    tip: 'Predstava is feminine.',
  },
  {
    mode: 'sudovi',
    q: 'Zašto se ne treba držati samo riječi "dojmljiv"?',
    en: 'Why not stick to dojmljiv?',
    opts: ['zvuči kao promidžbeni tekst', 'nije standardno', 'preslabo je', 'nema razloga'],
    answer: 'zvuči kao promidžbeni tekst',
    tip: 'Praise with no shape reads as praise with no opinion.',
  },
  {
    mode: 'sudovi',
    q: 'Kako se kaže zašto vas je nešto dirnulo?',
    en: 'Saying why it moved you:',
    opts: ['Dirnulo me jer…', 'Dirnut sam od…', 'Bio sam dirnut sa…', 'Dirnulo mi je jer…'],
    answer: 'Dirnulo me jer…',
    tip: 'Accusative object, and jer for the reason — the precision the lesson asks for.',
  },

  // ── dogadaji ──────────────────────────────────────────────────────────────
  {
    mode: 'dogadaji',
    q: 'Što je "klapa"?',
    en: 'What is a klapa?',
    opts: [
      'dalmatinsko višeglasno pjevanje',
      'skupina prijatelja',
      'vrsta plesa',
      'narodni instrument',
    ],
    answer: 'dalmatinsko višeglasno pjevanje',
    tip: 'A capella harmony singing, and on the UNESCO list. It also means a group of mates.',
  },
  {
    mode: 'dogadaji',
    q: 'Što su "Dubrovačke ljetne igre"?',
    en: 'What are they?',
    opts: [
      'kazališni i glazbeni festival',
      'sportsko natjecanje',
      'dječje igre',
      'filmski festival',
    ],
    answer: 'kazališni i glazbeni festival',
    tip: 'Summer, in the city itself — the streets are the stage.',
  },
  {
    mode: 'dogadaji',
    q: 'Što je "nastup"?',
    en: 'What is a nastup?',
    opts: ['a performance, a gig', 'an entrance', 'an appearance in court', 'a debut only'],
    answer: 'a performance, a gig',
    tip: 'And nastupiti is to perform.',
  },
  {
    mode: 'dogadaji',
    q: 'Idem ____ koncert.',
    en: 'I am going to a concert.',
    opts: ['na', 'u', 'do', 'k'],
    answer: 'na',
    tip: 'na koncert, na izložbu — but u kazalište.',
  },
  {
    mode: 'dogadaji',
    q: 'Što je "zbor"?',
    en: 'What is a zbor?',
    opts: ['choir', 'assembly only', 'orchestra', 'ensemble of any kind'],
    answer: 'choir',
    tip: 'It also means an assembly — zbor građana.',
  },
  {
    mode: 'dogadaji',
    q: 'Što je "gluma"?',
    en: 'What is gluma?',
    opts: ['acting', 'a role', 'a rehearsal', 'a monologue'],
    answer: 'acting',
    tip: 'The actor is glumac or glumica.',
  },
  {
    mode: 'dogadaji',
    q: 'Karta je ____ . (rasprodan)',
    en: 'The tickets are sold out.',
    opts: ['rasprodana', 'rasprodan', 'rasprodano', 'rasprodani'],
    answer: 'rasprodana',
    tip: 'Karta is feminine singular.',
  },
  {
    mode: 'dogadaji',
    q: 'Kako se pita što se prikazuje?',
    en: 'Asking what is on:',
    opts: ['Što se igra?', 'Što ide?', 'Što se radi?', 'Što je unutra?'],
    answer: 'Što se igra?',
    tip: 'In a theatre. For a cinema, Što se prikazuje?',
  },
];
