// src/data/drills/b1/instrumentalAdjectivesDrill.ts
//
// B1 ADJECTIVES IN THE INSTRUMENTAL — the drill for the `instrumental-adjectives` lesson.
//
// Every word in front of an instrumental noun follows it: -im for masculine and neuter,
// -om for feminine, -im in the plural for every gender. The distractors are the endings
// a learner actually reaches for: the feminine -om on a masculine noun, the locative
// -em / -oj from the previous lesson, the genitive plural -ih, or the nominative.
//
// Three modes:
//   muski   — masculine and neuter nouns (-im)
//   zenski  — feminine nouns (-om)
//   mnozina — the plural (-im, every gender)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INSTRUMENTAL_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  muski: '🧔 Muški i srednji rod',
  zenski: '👩 Ženski rod',
  mnozina: '👥 Množina',
};

export const INSTRUMENTAL_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── muski ─────────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'Idem u kino s ____ bratom.',
    en: 'I am going to the cinema with my older brother.',
    opts: ['starijim', 'starijom', 'starijem', 'stariji'],
    answer: 'starijim',
    tip: 'Brat is masculine: the adjective in the instrumental ends in -im.',
  },
  {
    mode: 'muski',
    q: 'Razgovarao sam s ____ profesorom.',
    en: 'I talked to that professor.',
    opts: ['tim', 'tom', 'toj', 'taj'],
    answer: 'tim',
    tip: 'Taj in the masculine instrumental is tim. Tom is the feminine instrumental.',
  },
  {
    mode: 'muski',
    q: 'Putujemo ____ vlakom.',
    en: 'We are travelling on the night train.',
    opts: ['noćnim', 'noćnom', 'noćnoj', 'noćni'],
    answer: 'noćnim',
    tip: 'The train is the means, with no preposition; vlak is masculine, so -im.',
  },
  {
    mode: 'muski',
    q: 'Mačka spava pod ____ stolom.',
    en: 'The cat sleeps under the old table.',
    opts: ['starim', 'starom', 'staroj', 'stari'],
    answer: 'starim',
    tip: 'Pod takes the instrumental; stol is masculine: starim stolom.',
  },
  {
    mode: 'muski',
    q: 'Volim čaj s ____ mlijekom.',
    en: 'I like tea with warm milk.',
    opts: ['toplim', 'toplom', 'toploj', 'toplo'],
    answer: 'toplim',
    tip: 'Mlijeko is neuter, and the neuter shares -im with the masculine.',
  },
  {
    mode: 'muski',
    q: 'Ivan živi sa ____ djedom.',
    en: 'Ivan lives with his grandfather.',
    opts: ['svojim', 'svojom', 'svojem', 'svoj'],
    answer: 'svojim',
    tip: 'Svoj points back at Ivan; djed is masculine: svojim djedom. Svojem is the locative.',
  },
  {
    mode: 'muski',
    q: 'Pišem pismo ____ perom.',
    en: 'I am writing the letter with a new pen.',
    opts: ['novim', 'novom', 'novoj', 'novo'],
    answer: 'novim',
    tip: 'Pero is neuter and it is the tool: novim perom.',
  },
  {
    mode: 'muski',
    q: 'Upoznao sam se s ____ susjedom.',
    en: 'I have met our neighbour.',
    opts: ['našim', 'našom', 'našem', 'naš'],
    answer: 'našim',
    tip: 'Naš has a soft stem, but the instrumental ignores it: našim, always -im.',
  },
  {
    mode: 'muski',
    q: 'Kava sa ____ šećerom, molim.',
    en: 'Coffee with brown sugar, please.',
    opts: ['smeđim', 'smeđom', 'smeđem', 'smeđi'],
    answer: 'smeđim',
    tip: 'Šećer is masculine: smeđim šećerom. -em belongs to the locative.',
  },
  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Idem na izlet s ____ prijateljicom.',
    en: 'I am going on a trip with my best friend (a woman).',
    opts: ['najboljom', 'najboljim', 'najboljoj', 'najbolja'],
    answer: 'najboljom',
    tip: 'Prijateljica is feminine: the adjective rhymes with it, -om.',
  },
  {
    mode: 'zenski',
    q: 'Razgovarala sam s tom ____ ženom.',
    en: 'I talked to that kind woman.',
    opts: ['ljubaznom', 'ljubaznim', 'ljubaznoj', 'ljubazna'],
    answer: 'ljubaznom',
    tip: 'Žena is feminine: -om. Ljubaznoj is the dative or locative.',
  },
  {
    mode: 'zenski',
    q: 'Djeca se igraju pred ____ zgradom.',
    en: 'The children play in front of our building.',
    opts: ['našom', 'našim', 'našoj', 'naša'],
    answer: 'našom',
    tip: 'Pred takes the instrumental, and zgrada is feminine: našom zgradom.',
  },
  {
    mode: 'zenski',
    q: 'Marko ide na more sa ____ djevojkom.',
    en: 'Marko is going to the seaside with his girlfriend.',
    opts: ['svojom', 'svojim', 'svojoj', 'svoja'],
    answer: 'svojom',
    tip: 'Djevojka is feminine; svoj points back at Marko: sa svojom djevojkom.',
  },
  {
    mode: 'zenski',
    q: 'Pišem ____ olovkom.',
    en: 'I am writing with a red pencil.',
    opts: ['crvenom', 'crvenim', 'crvenoj', 'crvena'],
    answer: 'crvenom',
    tip: 'The pencil is the tool, with no preposition; olovka is feminine: crvenom.',
  },
  {
    mode: 'zenski',
    q: 'Nad ____ bijelom kućom leti avion.',
    en: 'A plane is flying over that white house.',
    opts: ['onom', 'onim', 'onoj', 'ona'],
    answer: 'onom',
    tip: 'Nad takes the instrumental; onaj before a feminine noun becomes onom.',
  },
  {
    mode: 'zenski',
    q: 'Plaćam ____ karticom.',
    en: 'I am paying with my new card.',
    opts: ['novom', 'novim', 'novoj', 'nova'],
    answer: 'novom',
    tip: 'Kartica is feminine and it is the means: novom karticom.',
  },
  {
    mode: 'zenski',
    q: 'Ana živi s ____ sestrom.',
    en: 'Ana lives with her younger sister.',
    opts: ['mlađom', 'mlađim', 'mlađoj', 'mlađa'],
    answer: 'mlađom',
    tip: 'Sestra is feminine: mlađom sestrom.',
  },
  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Ljeto provodim sa ____ prijateljima.',
    en: 'I spend the summer with old friends.',
    opts: ['starim', 'starom', 'starih', 'stari'],
    answer: 'starim',
    tip: 'The instrumental plural takes -im for every gender. -ih is the genitive.',
  },
  {
    mode: 'mnozina',
    q: 'Družimo se s ____ susjedima.',
    en: 'We spend time with our neighbours.',
    opts: ['našim', 'našom', 'naših', 'naši'],
    answer: 'našim',
    tip: 'Plural instrumental: našim susjedima.',
  },
  {
    mode: 'mnozina',
    q: 'Pišemo ____ olovkama.',
    en: 'We are writing with green pencils.',
    opts: ['zelenim', 'zelenom', 'zelenih', 'zelene'],
    answer: 'zelenim',
    tip: 'Olovkama is plural: the feminine drops its singular -om and takes -im.',
  },
  {
    mode: 'mnozina',
    q: 'Dobro se slažem s ____ kolegicama.',
    en: 'I get on well with my new colleagues (women).',
    opts: ['novim', 'novom', 'novih', 'nove'],
    answer: 'novim',
    tip: 'A feminine plural in the instrumental still takes -im: s novim kolegicama.',
  },
  {
    mode: 'mnozina',
    q: 'Sjedimo pred ____ visokim zgradama.',
    en: 'We are sitting in front of those tall buildings.',
    opts: ['onim', 'onom', 'onih', 'oni'],
    answer: 'onim',
    tip: 'Plural instrumental: onim visokim zgradama.',
  },
  {
    mode: 'mnozina',
    q: 'Djeca idu na izlet sa ____ učiteljima.',
    en: 'The children are going on a trip with their teachers.',
    opts: ['svojim', 'svojom', 'svojih', 'svoji'],
    answer: 'svojim',
    tip: 'Svoj points back at djeca; the plural instrumental is svojim.',
  },
  {
    mode: 'mnozina',
    q: 'Kruh s ____ maslinama.',
    en: 'Bread with black olives.',
    opts: ['crnim', 'crnom', 'crnih', 'crne'],
    answer: 'crnim',
    tip: 'Maslinama is plural: crnim maslinama.',
  },
  {
    mode: 'mnozina',
    q: 'Razgovaram s ____ ljudima.',
    en: 'I am talking with these people.',
    opts: ['ovim', 'ovom', 'ovih', 'ovi'],
    answer: 'ovim',
    tip: 'Ljudi in the instrumental is ljudima, and ovaj becomes ovim.',
  },
];
