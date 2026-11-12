// src/data/drills/b1/comparativeAdverbsDrill.ts
//
// B1 COMPARATIVE ADVERBS — the drill for the `comparative-adverbs` lesson.
//
// The comparative adverb is the neuter comparative (brže, bolje, sporije, više, manje).
// "Than" is od + genitive or nego + the same case, and only nego before a time word,
// a prepositional phrase or an infinitive. Three patterns: sve + comparative (more and
// more), što + comparative (as … as possible), što …, to … (the more …, the more …).
//
// Three modes:
//   prilog — the comparative or superlative adverb
//   nego   — od or nego, and the case that follows
//   izrazi — sve bolje, što prije, što više …, to …

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMPARATIVE_ADVERBS_MODE_LABELS: Record<string, string> = {
  prilog: '🏃 Prilog',
  nego: '⚖️ Od ili nego',
  izrazi: '💬 Izrazi',
};

export const COMPARATIVE_ADVERBS_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'prilog',
    q: 'Govorite ____, molim vas.',
    en: 'Speak more slowly, please.',
    opts: ['sporiji', 'sporije', 'spor', 'najsporiji'],
    answer: 'sporije',
    tip: 'An action takes the adverb: the neuter comparative.',
  },
  {
    mode: 'prilog',
    q: 'Ivan trči ____ od mene.',
    en: 'Ivan runs faster than me.',
    opts: ['brži', 'brže', 'brzo', 'brža'],
    answer: 'brže',
    tip: 'Running is an action, so the adverb in -e.',
  },
  {
    mode: 'prilog',
    q: 'Marko pjeva ____ od brata.',
    en: 'Marko sings better than his brother.',
    opts: ['bolji', 'bolje', 'dobro', 'dobrije'],
    answer: 'bolje',
    tip: 'dobro → bolje; bolji is the adjective.',
  },
  {
    mode: 'prilog',
    q: 'Pišem ti ____ nego prije.',
    en: 'I write to you more often than before.',
    opts: ['češće', 'čestije', 'često', 'češći'],
    answer: 'češće',
    tip: 'često → češće.',
  },
  {
    mode: 'prilog',
    q: 'Autobusi voze ____ nedjeljom.',
    en: 'Buses run less often on Sundays.',
    opts: ['rijetko', 'rjeđe', 'rjeđi', 'rijetkije'],
    answer: 'rjeđe',
    tip: 'rijetko → rjeđe; the ije shortens.',
  },
  {
    mode: 'prilog',
    q: 'Danas sam radio ____ nego jučer.',
    en: 'I worked more today than yesterday.',
    opts: ['više', 'mnogo', 'veće', 'najviše'],
    answer: 'više',
    tip: 'mnogo → više.',
  },
  {
    mode: 'prilog',
    q: 'Moraš jesti ____ šećera.',
    en: 'You must eat less sugar.',
    opts: ['manje', 'manji', 'manjeg', 'najmanje'],
    answer: 'manje',
    tip: 'malo → manje, still with the genitive.',
  },
  {
    mode: 'prilog',
    q: 'Baka kuha ____ na svijetu.',
    en: 'Grandma cooks the best in the world.',
    opts: ['najbolje', 'najbolja', 'bolje', 'najdobrije'],
    answer: 'najbolje',
    tip: 'naj- + the comparative adverb.',
  },
  {
    mode: 'nego',
    q: 'Ana govori brže ____ ja.',
    en: 'Ana speaks faster than I do.',
    opts: ['nego', 'od', 'kao', 'što'],
    answer: 'nego',
    tip: 'ja is nominative, so nego.',
  },
  {
    mode: 'nego',
    q: 'Ana govori brže od ____.',
    en: 'Ana speaks faster than me.',
    opts: ['mene', 'ja', 'meni', 'mnom'],
    answer: 'mene',
    tip: 'od + genitive.',
  },
  {
    mode: 'nego',
    q: 'Danas je toplije ____ jučer.',
    en: 'It is warmer today than yesterday.',
    opts: ['od', 'nego', 'kao', 'do'],
    answer: 'nego',
    tip: 'Before a time word only nego works.',
  },
  {
    mode: 'nego',
    q: 'Više volim čaj nego ____.',
    en: 'I prefer tea to coffee.',
    opts: ['kava', 'kavu', 'kave', 'kavi'],
    answer: 'kavu',
    tip: 'After nego the same case as čaj: accusative.',
  },
  {
    mode: 'nego',
    q: 'U Splitu je toplije ____ u Zagrebu.',
    en: 'It is warmer in Split than in Zagreb.',
    opts: ['od', 'kao', 'nego', 'do'],
    answer: 'nego',
    tip: 'Before a phrase with a preposition only nego works.',
  },
  {
    mode: 'nego',
    q: 'Više volim čitati nego ____ televiziju.',
    en: 'I prefer reading to watching TV.',
    opts: ['gledam', 'gledati', 'gledanje', 'gledao'],
    answer: 'gledati',
    tip: 'Two infinitives compared: the second matches the first.',
  },
  {
    mode: 'nego',
    q: 'Petra pliva bolje od ____.',
    en: 'Petra swims better than her sister.',
    opts: ['sestre', 'sestra', 'sestri', 'sestru'],
    answer: 'sestre',
    tip: 'od + genitive.',
  },
  {
    mode: 'nego',
    q: 'Bolje kasno ____ nikad.',
    en: 'Better late than never.',
    opts: ['nego', 'od', 'kao', 'pa'],
    answer: 'nego',
    tip: 'Two adverbs compared: nego.',
  },
  {
    mode: 'izrazi',
    q: 'Govoriš hrvatski ____ bolje.',
    en: 'You speak Croatian better and better.',
    opts: ['sve', 'što', 'to', 'više'],
    answer: 'sve',
    tip: 'sve + comparative = more and more.',
  },
  {
    mode: 'izrazi',
    q: 'Dođi ____ prije!',
    en: 'Come as soon as possible!',
    opts: ['što', 'sve', 'to', 'nego'],
    answer: 'što',
    tip: 'što + comparative = as … as possible.',
  },
  {
    mode: 'izrazi',
    q: 'Što više čitaš, ____ bolje pišeš.',
    en: 'The more you read, the better you write.',
    opts: ['to', 'što', 'nego', 'sve'],
    answer: 'to',
    tip: 'The pattern is što …, to ….',
  },
  {
    mode: 'izrazi',
    q: '____ više vježbaš, to manje griješiš.',
    en: 'The more you practise, the fewer mistakes you make.',
    opts: ['Što', 'Sve', 'To', 'Nego'],
    answer: 'Što',
    tip: 'The first half opens with što.',
  },
  {
    mode: 'izrazi',
    q: 'Javi mi se što ____.',
    en: 'Get in touch as soon as possible.',
    opts: ['prije', 'brz', 'brzo', 'prvi'],
    answer: 'prije',
    tip: 'što prije = as soon as possible.',
  },
  {
    mode: 'izrazi',
    q: 'Ljeto volim ____.',
    en: 'I like summer most of all.',
    opts: ['najviše', 'više', 'najveće', 'najmnogo'],
    answer: 'najviše',
    tip: 'mnogo → više → najviše.',
  },
  {
    mode: 'izrazi',
    q: 'Vrijeme je sve ____.',
    en: 'The weather is getting worse and worse.',
    opts: ['gore', 'gori', 'najgore', 'gorem'],
    answer: 'gore',
    tip: 'sve + comparative; neuter for vrijeme.',
  },
  {
    mode: 'izrazi',
    q: 'Piši mi što ____.',
    en: 'Write to me as often as you can.',
    opts: ['češće', 'često', 'češći', 'najčešće'],
    answer: 'češće',
    tip: 'što + comparative.',
  },
];
