// src/data/drills/c1/temporalLocativeIdiomsDrill.ts
//
// C1 TIME AND FIXED PHRASES IN THE LOCATIVE — the drill for `temporal-locative-idioms`.
//
// Three modes, eight items each:
//   vrijeme — the temporal locative: u mladosti, u 13. stoljeću, u ožujku, po noći,
//             po dolasku, pri kraju
//   izrazi  — fixed locatives: u pravu, u redu, u žurbi, u kvaru, na snazi, na glasu
//   padez   — the accusative look-alikes (na vrijeme, na sreću, na brzinu, u to vrijeme)
//             against the true locatives
//
// Equally standard alternatives (noću, imaš pravo, srećom, u ono vrijeme, u noći for one
// particular night) are never offered as wrong options.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TEMPORAL_LOCATIVE_IDIOMS_MODE_LABELS: Record<string, string> = {
  vrijeme: '🕰️ Vremenski lokativ',
  izrazi: '📌 Stalni izrazi',
  padez: '⚖️ Lokativ ili akuzativ',
};

export const TEMPORAL_LOCATIVE_IDIOMS_DRILL_DATA: ModeDrillItem[] = [
  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: '____ je moj djed bio pomorac.',
    en: 'In his youth my grandfather was a sailor.',
    opts: ['U mladosti', 'U mladost', 'Na mladosti', 'Po mladost'],
    answer: 'U mladosti',
    tip: 'A stretch of life: u + locative.',
  },
  {
    mode: 'vrijeme',
    q: 'Katedrala je sagrađena ____.',
    en: 'The cathedral was built in the 13th century.',
    opts: ['u 13. stoljeću', 'u 13. stoljeće', 'na 13. stoljeću', 'po 13. stoljeću'],
    answer: 'u 13. stoljeću',
    tip: 'Centuries take u + locative.',
  },
  {
    mode: 'vrijeme',
    q: 'Rođen je ____.',
    en: 'He was born in March.',
    opts: ['u ožujku', 'u ožujak', 'na ožujku', 'po ožujku'],
    answer: 'u ožujku',
    tip: 'Months take u + locative.',
  },
  {
    mode: 'vrijeme',
    q: 'Sove love ____.',
    en: 'Owls hunt at night.',
    opts: ['po noći', 'po noć', 'na noći', 'pri noć'],
    answer: 'po noći',
    tip: 'po + locative; noću is equally standard.',
  },
  {
    mode: 'vrijeme',
    q: '____ me nazovi.',
    en: 'Call me when you arrive.',
    opts: ['Po dolasku', 'Po dolazak', 'Na dolazak', 'Pri dolazak'],
    answer: 'Po dolasku',
    tip: 'po + locative: a formal, rather rare "upon". In everyday Croatian you will more often hear Nakon dolaska.',
  },
  {
    mode: 'vrijeme',
    q: '____ su ljudi živjeli skromnije.',
    en: 'In the past people lived more modestly.',
    opts: ['U prošlosti', 'U prošlost', 'Na prošlosti', 'Po prošlost'],
    answer: 'U prošlosti',
    tip: 'A period: u + locative.',
  },
  {
    mode: 'vrijeme',
    q: '____ utakmice počela je kiša.',
    en: 'Near the end of the match it started to rain.',
    opts: ['Pri kraju', 'Pri kraj', 'Pri krajem', 'Pri kraja'],
    answer: 'Pri kraju',
    tip: 'pri + locative.',
  },
  {
    mode: 'vrijeme',
    q: 'Grad je osnovan ____.',
    en: 'The town was founded in the Middle Ages.',
    opts: ['u srednjem vijeku', 'u srednji vijek', 'na srednjem vijeku', 'po srednjem vijeku'],
    answer: 'u srednjem vijeku',
    tip: 'A period: u + locative.',
  },

  // ── izrazi ────────────────────────────────────────────────────────────────
  {
    mode: 'izrazi',
    q: 'Ti si bio u ____, a ja nisam.',
    en: 'You were right, and I was not.',
    opts: ['pravu', 'pravo', 'prava', 'pravom'],
    answer: 'pravu',
    tip: 'biti u pravu — to be right.',
  },
  {
    mode: 'izrazi',
    q: 'Sve je u ____.',
    en: 'Everything is all right.',
    opts: ['redu', 'red', 'reda', 'redom'],
    answer: 'redu',
    tip: 'u redu — all right.',
  },
  {
    mode: 'izrazi',
    q: 'Izašla je u ____ i zaboravila mobitel.',
    en: 'She left in a hurry and forgot her phone.',
    opts: ['žurbi', 'žurbu', 'žurba', 'žurbom'],
    answer: 'žurbi',
    tip: 'u žurbi — a fixed locative.',
  },
  {
    mode: 'izrazi',
    q: 'Lift je opet u ____.',
    en: 'The lift is out of order again.',
    opts: ['kvaru', 'kvar', 'kvara', 'kvarom'],
    answer: 'kvaru',
    tip: 'u kvaru — out of order.',
  },
  {
    mode: 'izrazi',
    q: 'Zakon je na ____ od siječnja.',
    en: 'The law has been in force since January.',
    opts: ['snazi', 'snagu', 'snaga', 'snagom'],
    answer: 'snazi',
    tip: 'na snazi — in force; g becomes z in the locative.',
  },
  {
    mode: 'izrazi',
    q: 'Restoran je na ____ kao najbolji u gradu.',
    en: 'The restaurant is known as the best in town.',
    opts: ['glasu', 'glas', 'glasa', 'glasom'],
    answer: 'glasu',
    tip: 'biti na glasu kao — to be known as.',
  },
  {
    mode: 'izrazi',
    q: 'Na ____ smo se ipak pomirili.',
    en: 'In the end we made up after all.',
    opts: ['kraju', 'kraj', 'kraja', 'krajem'],
    answer: 'kraju',
    tip: 'na kraju — in the end.',
  },
  {
    mode: 'izrazi',
    q: 'Radovi na cesti su u ____.',
    en: 'The roadworks are under way.',
    opts: ['tijeku', 'tijek', 'tijeka', 'tijekom'],
    answer: 'tijeku',
    tip: 'u tijeku — under way.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Stigli smo točno ____.',
    en: 'We arrived exactly on time.',
    opts: ['na vrijeme', 'na vremenu', 'u vremenu', 'po vremenu'],
    answer: 'na vrijeme',
    tip: 'An accusative, not a locative.',
  },
  {
    mode: 'padez',
    q: '____, nitko nije ozlijeđen.',
    en: 'Luckily, nobody was hurt.',
    opts: ['Na sreću', 'Na sreći', 'U sreći', 'Po sreći'],
    answer: 'Na sreću',
    tip: 'na sreću is an accusative.',
  },
  {
    mode: 'padez',
    q: 'Jeo je ____ i otrčao na vlak.',
    en: 'He ate in haste and ran for the train.',
    opts: ['na brzinu', 'na brzini', 'po brzini', 'u brzinu'],
    answer: 'na brzinu',
    tip: 'na brzinu is an accusative; compare the locative u žurbi.',
  },
  {
    mode: 'padez',
    q: '____ nismo imali mobitele.',
    en: 'At that time we did not have mobile phones.',
    opts: ['U to vrijeme', 'U tom vrijeme', 'Na to vrijeme', 'U toga vremena'],
    answer: 'U to vrijeme',
    tip: 'u to vrijeme: u + accusative.',
  },
  {
    mode: 'padez',
    q: 'U kojem je padežu izraz „na kraju“?',
    en: 'Which case is the phrase meaning "at the end" in?',
    opts: ['lokativ', 'akuzativ', 'genitiv', 'instrumental'],
    answer: 'lokativ',
    tip: 'kraju is the locative of kraj.',
  },
  {
    mode: 'padez',
    q: 'U kojem je padežu izraz „na sreću“?',
    en: 'Which case is the phrase meaning "luckily" in?',
    opts: ['lokativ', 'akuzativ', 'dativ', 'genitiv'],
    answer: 'akuzativ',
    tip: 'The locative of sreća would be sreći.',
  },
  {
    mode: 'padez',
    q: 'U kojem je padežu izraz „u žurbi“?',
    en: 'Which case is the phrase meaning "in a hurry" in?',
    opts: ['nominativ', 'akuzativ', 'lokativ', 'vokativ'],
    answer: 'lokativ',
    tip: 'žurbi is the locative of žurba.',
  },
  {
    mode: 'padez',
    q: 'U kojem je padežu izraz „na vrijeme“?',
    en: 'Which case is the phrase meaning "on time" in?',
    opts: ['lokativ', 'genitiv', 'dativ', 'akuzativ'],
    answer: 'akuzativ',
    tip: 'The locative of vrijeme would be vremenu.',
  },
];
