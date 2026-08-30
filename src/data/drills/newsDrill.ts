// src/data/drills/newsDrill.ts
//
// B1 NEWS & MEDIA — the drill for the `media-news` lesson.
//
// Two structures make a Croatian news text readable, and neither is a
// vocabulary problem.
//
// The first is that HEADLINES DROP THE VERB. *Nova pravila na snazi od
// siječnja* has no *su* in it, and a learner scanning for the verb concludes
// the sentence is broken. The reader has to supply *je* or *su* mentally, which
// nobody tells you.
//
// The second is that news runs on reported speech and CROATIAN DOES NOT
// BACKSHIFT. English turns "I will come" into "he said he WOULD come";
// Croatian keeps the tense the speaker used — *rekao je da će doći*. So the
// future stays future and the present stays present, which is simpler than
// English and therefore gets over-corrected by anyone who learned the English
// rule.
//
// Three modes:
//   naslovi    — the verbless headline
//   prenosenje — reported speech, and the absent backshift
//   izvor      — navodno, and marking a claim as second-hand

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NEWS_MODE_LABELS: Record<string, string> = {
  naslovi: '📰 Naslovi',
  prenosenje: '🗣️ Prenošenje',
  izvor: '🔎 Izvor',
};

export const NEWS_DRILL_DATA: ModeDrillItem[] = [
  // ── naslovi ───────────────────────────────────────────────────────────────
  {
    mode: 'naslovi',
    q: 'Što nedostaje u naslovu "Nova pravila na snazi od siječnja"?',
    en: 'What is missing?',
    opts: ['glagol "su"', 'subjekt', 'padež', 'ništa'],
    answer: 'glagol "su"',
    tip: 'Headlines drop biti. Supply su and the sentence resolves.',
  },
  {
    mode: 'naslovi',
    q: 'Koji se glagol najčešće izostavlja u naslovima?',
    en: 'Which verb is dropped?',
    opts: ['biti', 'imati', 'moći', 'htjeti'],
    answer: 'biti',
    tip: 'je and su, almost always.',
  },
  {
    mode: 'naslovi',
    q: 'Naslov: "Vlada spremna na pregovore". Koji oblik dodajete?',
    en: 'Which form do you supply?',
    opts: ['je', 'su', 'će', 'bi'],
    answer: 'je',
    tip: 'Vlada is singular feminine: Vlada JE spremna.',
  },
  {
    mode: 'naslovi',
    q: 'Naslov: "Cijene više nego lani". Koji oblik?',
    en: 'Which form?',
    opts: ['su', 'je', 'bi', 'ću'],
    answer: 'su',
    tip: 'Cijene is plural, so su.',
  },
  {
    mode: 'naslovi',
    q: 'Što je "naslov"?',
    en: 'What is a naslov?',
    opts: ['headline, title', 'article', 'address', 'report'],
    answer: 'headline, title',
    tip: 'A false friend — it also means the title of a book, not an address.',
  },
  {
    mode: 'naslovi',
    q: 'Što je "članak"?',
    en: 'What is a članak?',
    opts: ['article', 'member', 'chapter', 'column'],
    answer: 'article',
    tip: 'Also an article of law, and an ankle. Context decides.',
  },
  {
    mode: 'naslovi',
    q: 'Što je "dnevnik"?',
    en: 'What is the dnevnik?',
    opts: ['TV news bulletin', 'daily paper', 'diary only', 'weather report'],
    answer: 'TV news bulletin',
    tip: 'It also means a diary, but on television it is the evening news.',
  },
  {
    mode: 'naslovi',
    q: 'Zašto naslovi izostavljaju glagol?',
    en: 'Why drop it?',
    opts: ['radi kratkoće', 'jer je zabranjen', 'radi uljudnosti', 'jer je nepoznat'],
    answer: 'radi kratkoće',
    tip: 'Space. The same instinct as an English headline, taken further.',
  },

  // ── prenosenje ────────────────────────────────────────────────────────────
  {
    mode: 'prenosenje',
    q: 'Rekao je: "Doći ću." → Rekao je da ____ doći.',
    en: 'He said he would come.',
    opts: ['će', 'bi', 'je', 'da će'],
    answer: 'će',
    tip: 'Croatian does NOT backshift. The future he used stays future.',
  },
  {
    mode: 'prenosenje',
    q: 'Rekla je: "Radim." → Rekla je da ____.',
    en: 'She said she was working.',
    opts: ['radi', 'je radila', 'bi radila', 'će raditi'],
    answer: 'radi',
    tip: 'The present she used stays present, even though English shifts it.',
  },
  {
    mode: 'prenosenje',
    q: 'Što Hrvatski NE radi pri prenošenju?',
    en: 'What does Croatian not do?',
    opts: ['ne pomiče vrijeme', 'ne mijenja zamjenice', 'ne rabi da', 'ne rabi prošlo'],
    answer: 'ne pomiče vrijeme',
    tip: 'Tenses stay. Pronouns and time words DO shift.',
  },
  {
    mode: 'prenosenje',
    q: 'Rekao je: "Ja sam umoran." → Rekao je da ____ umoran.',
    en: 'He said he was tired.',
    opts: ['je', 'sam', 'bi', 'će biti'],
    answer: 'je',
    tip: 'The tense stays present; the PERSON shifts from ja to on.',
  },
  {
    mode: 'prenosenje',
    q: 'Rekla je: "Bio sam ovdje jučer." Što se mijenja?',
    en: 'What changes?',
    opts: ['zamjenice i priložne oznake', 'samo vrijeme', 'ništa', 'samo padež'],
    answer: 'zamjenice i priložne oznake',
    tip: 'ovdje may become ondje, jučer may become dan ranije. The tense does not move.',
  },
  {
    mode: 'prenosenje',
    q: 'Pitao je: "Dolaziš li?" → Pitao je ____ dolazim.',
    en: 'He asked whether I was coming.',
    opts: ['dolazim li', 'da dolazim', 'ako dolazim', 'što dolazim'],
    answer: 'dolazim li',
    tip: 'A reported question keeps li, or uses je li. Never ako.',
  },
  {
    mode: 'prenosenje',
    q: 'Koji glagol uvodi zahtjev, a ne izjavu?',
    en: 'Which introduces a request?',
    opts: ['zamoliti', 'reći', 'javiti', 'objaviti'],
    answer: 'zamoliti',
    tip: 'Zamolio je da dođem — and a request takes da plus the present.',
  },
  {
    mode: 'prenosenje',
    q: 'Zašto se hrvatski govornici ovdje "prepravljaju"?',
    en: 'Why do learners over-correct here?',
    opts: [
      'primjenjuju englesko pravilo',
      'pravilo je teško',
      'nema pravila',
      'gramatike se ne slažu',
    ],
    answer: 'primjenjuju englesko pravilo',
    tip: 'They shift the tense because English does. Croatian is simpler here.',
  },

  // ── izvor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izvor',
    q: 'Što znači "navodno"?',
    en: 'What does navodno mean?',
    opts: ['apparently, allegedly', 'certainly', 'finally', 'officially'],
    answer: 'apparently, allegedly',
    tip: 'It marks a claim as second-hand and takes no responsibility for it.',
  },
  {
    mode: 'izvor',
    q: 'Čuo sam na ____ da su cijene porasle. (vijesti)',
    en: 'I heard on the news that…',
    opts: ['vijestima', 'vijesti', 'vijestiju', 'vijestima su'],
    answer: 'vijestima',
    tip: 'na plus the LOCATIVE plural: na vijestima.',
  },
  {
    mode: 'izvor',
    q: '____ je u novinama da će padati kiša.',
    en: 'It said in the paper that it would rain.',
    opts: ['Pisalo', 'Pisao', 'Pisala', 'Piše'],
    answer: 'Pisalo',
    tip: 'Neuter — nothing is the subject. Pisalo je u novinama da…',
  },
  {
    mode: 'izvor',
    q: 'Prema ____ , broj raste. (izvještaj)',
    en: 'According to the report, the number is rising.',
    opts: ['izvještaju', 'izvještaja', 'izvještaj', 'izvještajem'],
    answer: 'izvještaju',
    tip: 'prema takes the DATIVE.',
  },
  {
    mode: 'izvor',
    q: 'Što je "izvor"?',
    en: 'What is an izvor?',
    opts: ['source', 'issue', 'edition', 'excerpt'],
    answer: 'source',
    tip: 'Also a spring of water — the same idea underneath.',
  },
  {
    mode: 'izvor',
    q: '____ da će biti izbora.',
    en: 'They say there will be elections.',
    opts: ['Kažu', 'Kaže', 'Rekli', 'Govori'],
    answer: 'Kažu',
    tip: 'Kažu da… — an unnamed "they", the vaguest source there is.',
  },
  {
    mode: 'izvor',
    q: 'Nisam siguran ____ je to točno.',
    en: 'I am not sure whether that is true.',
    opts: ['je li', 'da li', 'ako', 'što'],
    answer: 'je li',
    tip: 'Je li introduces an indirect yes-no question. ako is a conditional if.',
  },
  {
    mode: 'izvor',
    q: 'Što znači "objaviti"?',
    en: 'What does objaviti mean?',
    opts: ['to publish', 'to explain', 'to announce a name', 'to broadcast live'],
    answer: 'to publish',
    tip: 'And javiti is to report or let someone know.',
  },
];
