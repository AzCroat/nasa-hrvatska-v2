// src/data/drills/b1/genitiveAdjectivesDrill.ts
//
// B1 ADJECTIVES IN THE GENITIVE — the drill for the `genitive-adjectives` lesson.
//
// Every word in front of a genitive noun follows it: -og (-eg after a soft stem) for
// masculine and neuter, -e for feminine, -ih in the plural for every gender. The
// distractors are the endings a learner actually reaches for: the locative -om / -em /
// -oj, the accusative -u, the instrumental -im, and the impossible "-og after a soft
// stem". The longer forms (staroga, moga, mojeg) are all correct, so none of them is
// ever offered as a wrong option.
//
// Three modes:
//   muski   — masculine and neuter nouns (-og / -eg)
//   zenski  — feminine nouns (-e)
//   mnozina — the plural (-ih, every gender)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  muski: '🧔 Muški i srednji rod',
  zenski: '👩 Ženski rod',
  mnozina: '👥 Množina',
};

export const GENITIVE_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── muski ─────────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'Ja sam iz ____ sela.',
    en: 'I am from a small village.',
    opts: ['malog', 'malom', 'mali', 'malim'],
    answer: 'malog',
    tip: 'Iz takes the genitive; selo is neuter: malog sela.',
  },
  {
    mode: 'muski',
    q: 'Živim blizu ____ parka.',
    en: 'I live near a big park.',
    opts: ['velikog', 'velikom', 'veliki', 'velikim'],
    answer: 'velikog',
    tip: 'Blizu takes the genitive; park is masculine: velikog parka.',
  },
  {
    mode: 'muski',
    q: 'Kod ____ susjeda je zabava.',
    en: 'There is a party at our neighbour’s.',
    opts: ['našeg', 'našog', 'našem', 'našim'],
    answer: 'našeg',
    tip: 'Naš has a soft stem, so the ending is -eg: našeg.',
  },
  {
    mode: 'muski',
    q: 'U hladnjaku nema ____ mlijeka.',
    en: 'There is no fresh milk in the fridge.',
    opts: ['svježeg', 'svježog', 'svježem', 'svježim'],
    answer: 'svježeg',
    tip: 'Nema takes the genitive; after the soft ž the ending is -eg.',
  },
  {
    mode: 'muski',
    q: 'Ovo je auto ____ brata.',
    en: 'This is my brother’s car.',
    opts: ['mojeg', 'mojem', 'mojim', 'moj'],
    answer: 'mojeg',
    tip: 'The owner goes into the genitive: mojeg brata (mog and moga are also correct).',
  },
  {
    mode: 'muski',
    q: 'Nakon ____ dugog dana idem spavati.',
    en: 'After that long day I am going to bed.',
    opts: ['tog', 'tom', 'tim', 'taj'],
    answer: 'tog',
    tip: 'Nakon takes the genitive; taj becomes tog.',
  },
  {
    mode: 'muski',
    q: 'Popij malo ____ čaja.',
    en: 'Have a little hot tea.',
    opts: ['vrućeg', 'vrućog', 'vrućem', 'vrućim'],
    answer: 'vrućeg',
    tip: 'Malo takes the genitive; vruć has a soft stem: vrućeg.',
  },
  {
    mode: 'muski',
    q: 'Ivan je kod ____ djeda.',
    en: 'Ivan is at his grandfather’s.',
    opts: ['svojeg', 'svojem', 'svojim', 'svoj'],
    answer: 'svojeg',
    tip: 'Kod takes the genitive; svoj points back at Ivan: svojeg djeda (svog also correct).',
  },
  {
    mode: 'muski',
    q: 'Kraj ____ filma je tužan.',
    en: 'The end of this film is sad.',
    opts: ['ovog', 'ovom', 'ovim', 'ovaj'],
    answer: 'ovog',
    tip: 'The end OF the film: the genitive, ovog filma.',
  },
  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Ne mogu bez ____ pomoći.',
    en: 'I can’t manage without your help.',
    opts: ['tvoje', 'tvoju', 'tvojom', 'tvojoj'],
    answer: 'tvoje',
    tip: 'Bez takes the genitive; pomoć is feminine: tvoje pomoći.',
  },
  {
    mode: 'zenski',
    q: 'Ana je kod ____ sestre.',
    en: 'Ana is at her sister’s.',
    opts: ['svoje', 'svoju', 'svojoj', 'svojom'],
    answer: 'svoje',
    tip: 'Kod takes the genitive: svoje sestre.',
  },
  {
    mode: 'zenski',
    q: 'Djeca se igraju ispred ____ škole.',
    en: 'The children play in front of the new school.',
    opts: ['nove', 'novu', 'novoj', 'novom'],
    answer: 'nove',
    tip: 'Ispred takes the genitive; škola is feminine: nove škole.',
  },
  {
    mode: 'zenski',
    q: 'Blizu ____ zgrade je park.',
    en: 'There is a park near our building.',
    opts: ['naše', 'našu', 'našoj', 'našom'],
    answer: 'naše',
    tip: 'Blizu + genitive; the feminine ending is -e even after a soft stem.',
  },
  {
    mode: 'zenski',
    q: 'Iz ____ sobe čujem glazbu.',
    en: 'I hear music from the next room.',
    opts: ['susjedne', 'susjednu', 'susjednoj', 'susjednom'],
    answer: 'susjedne',
    tip: 'Iz takes the genitive; soba is feminine: susjedne sobe.',
  },
  {
    mode: 'zenski',
    q: 'Ovo je kuća ____ bake.',
    en: 'This is my grandmother’s house.',
    opts: ['moje', 'moju', 'mojoj', 'mojom'],
    answer: 'moje',
    tip: 'The owner in the genitive: moje bake.',
  },
  {
    mode: 'zenski',
    q: 'Bez ____ kave ne mogu početi dan.',
    en: 'I can’t start the day without strong coffee.',
    opts: ['jake', 'jaku', 'jakoj', 'jakom'],
    answer: 'jake',
    tip: 'Bez + genitive: jake kave.',
  },
  {
    mode: 'zenski',
    q: 'Do ____ ulice ima pet minuta.',
    en: 'It is five minutes to the main street.',
    opts: ['glavne', 'glavnu', 'glavnoj', 'glavnom'],
    answer: 'glavne',
    tip: 'Do takes the genitive; ulica is feminine: glavne ulice.',
  },
  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Imam puno ____ prijatelja.',
    en: 'I have a lot of good friends.',
    opts: ['dobrih', 'dobrim', 'dobri', 'dobre'],
    answer: 'dobrih',
    tip: 'Puno + the genitive plural: -ih. Dobrim is the instrumental plural.',
  },
  {
    mode: 'mnozina',
    q: 'Na polici je pet ____ knjiga.',
    en: 'There are five old books on the shelf.',
    opts: ['starih', 'starim', 'stare', 'staroj'],
    answer: 'starih',
    tip: 'After pet comes the genitive plural: starih knjiga.',
  },
  {
    mode: 'mnozina',
    q: 'Na stolu je deset ____ čaša.',
    en: 'There are ten empty glasses on the table.',
    opts: ['praznih', 'praznim', 'prazne', 'prazni'],
    answer: 'praznih',
    tip: 'Prazan loses its fleeting a and takes the plural -ih: praznih.',
  },
  {
    mode: 'mnozina',
    q: 'U gradu ima mnogo ____ zgrada.',
    en: 'There are many tall buildings in the town.',
    opts: ['visokih', 'visokim', 'visoke', 'visoki'],
    answer: 'visokih',
    tip: 'Mnogo + the genitive plural: visokih zgrada.',
  },
  {
    mode: 'mnozina',
    q: 'Bez ____ ključeva ne možemo ući.',
    en: 'Without these keys we can’t get in.',
    opts: ['ovih', 'ovim', 'ove', 'ovi'],
    answer: 'ovih',
    tip: 'Bez + the genitive plural: ovih ključeva.',
  },
  {
    mode: 'mnozina',
    q: 'Imamo puno ____ susjeda.',
    en: 'We have a lot of kind neighbours.',
    opts: ['ljubaznih', 'ljubaznim', 'ljubazni', 'ljubazne'],
    answer: 'ljubaznih',
    tip: 'Puno + the genitive plural: ljubaznih susjeda.',
  },
  {
    mode: 'mnozina',
    q: 'Kod ____ roditelja smo svake nedjelje.',
    en: 'We are at our parents’ every Sunday.',
    opts: ['naših', 'našim', 'naši', 'naše'],
    answer: 'naših',
    tip: 'Kod + the genitive plural: naših roditelja.',
  },
  {
    mode: 'mnozina',
    q: 'Na plaži je malo ____ ljudi.',
    en: 'There are few young people on the beach.',
    opts: ['mladih', 'mladim', 'mladi', 'mlade'],
    answer: 'mladih',
    tip: 'Malo + the genitive plural: mladih ljudi.',
  },
];
