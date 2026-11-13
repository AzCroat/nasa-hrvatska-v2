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
// The second is that a news sentence names its source, a verb of saying and
// then da: *Policija javlja da nema žrtava*. The rules for turning a quoted
// sentence into a report (no backshift) are taught later, at B1-44
// reported-speech, so this drill does not test them (book-order audit,
// 2026-11-13).
//
// Three modes:
//   naslovi — the verbless headline
//   mediji  — media words, verbs of saying + da, vjerovati + dative
//   izvor   — navodno, and marking a claim as second-hand

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NEWS_MODE_LABELS: Record<string, string> = {
  naslovi: '📰 Naslovi',
  mediji: '📺 Mediji',
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
    opts: ['headline, title', 'article', 'paragraph', 'report'],
    answer: 'headline, title',
    tip: 'Headline, and the title of a book too. (Older administrative style also used it for the address on a letter.)',
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
    opts: ['TV news bulletin', 'a weekly magazine', 'diary only', 'weather report'],
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

  // ── mediji ────────────────────────────────────────────────────────────────
  {
    mode: 'mediji',
    q: 'Policija javlja ____ nema žrtava.',
    en: 'The police report that there are no casualties.',
    opts: ['da', 'što', 'li', 'jer'],
    answer: 'da',
    tip: 'After a verb of saying, Croatian needs da — the same da as after mislim.',
  },
  {
    mode: 'mediji',
    q: 'Ne vjerujem ____.',
    en: 'I do not believe that newspaper.',
    opts: ['tim novinama', 'te novine', 'tih novina', 'u te novine'],
    answer: 'tim novinama',
    tip: 'vjerovati takes the dative.',
  },
  {
    mode: 'mediji',
    q: 'Što je "sapunica"?',
    en: 'What is a sapunica?',
    opts: ['soap opera', 'bar of soap', 'news bulletin', 'cartoon'],
    answer: 'soap opera',
    tip: 'Built on sapun, soap — a long-running TV drama.',
  },
  {
    mode: 'mediji',
    q: 'Što je "žuti tisak"?',
    en: 'What is the žuti tisak?',
    opts: ['the tabloid press', 'old newspapers', 'printed maps', 'the weather page'],
    answer: 'the tabloid press',
    tip: 'Literally "the yellow press": gossip, scandal, celebrities.',
  },
  {
    mode: 'mediji',
    q: 'Što je "feljton"?',
    en: 'What is a feljton?',
    opts: ['a serialised newspaper feature', 'a headline', 'a TV channel', 'a radio presenter'],
    answer: 'a serialised newspaper feature',
    tip: 'A longer piece published in parts, often on history or culture.',
  },
  {
    mode: 'mediji',
    q: 'U romanu je Ivan ____ — sve se vrti oko njega.',
    en: 'In the novel Ivan is the main character — everything revolves around him.',
    opts: ['glavni lik', 'sporedni lik', 'glavni naslov', 'glavni izvor'],
    answer: 'glavni lik',
    tip: 'glavni lik is the main character; sporedni lik a minor one.',
  },
  {
    mode: 'mediji',
    q: 'Ministar je ____ da je zadovoljan. (stated)',
    en: 'The minister stated that he is satisfied.',
    opts: ['izjavio', 'izjavila', 'izjavili', 'izjaviti'],
    answer: 'izjavio',
    tip: 'Ministar is masculine singular, so the past form ends in -o.',
  },
  {
    mode: 'mediji',
    q: 'Novinari ____ da je ministar znao za problem.',
    en: 'Journalists claim that the minister knew about the problem.',
    opts: ['tvrde', 'tvrdi', 'tvrdim', 'tvrdiš'],
    answer: 'tvrde',
    tip: 'novinari is plural: oni tvrde.',
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
    q: 'Prema ____, broj raste. (izvještaj)',
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
    q: 'Nisam siguran ____ to točno.',
    en: 'I am not sure whether that is true.',
    opts: ['je li', 'li je', 'ako', 'što'],
    answer: 'je li',
    tip: 'Je li introduces an indirect yes-no question. ako is a conditional if.',
  },
  {
    mode: 'izvor',
    q: 'Što znači "objaviti"?',
    en: 'What does objaviti mean?',
    opts: ['to publish', 'to explain', 'to object', 'to broadcast live'],
    answer: 'to publish',
    tip: 'And javiti is to report or let someone know.',
  },
];
