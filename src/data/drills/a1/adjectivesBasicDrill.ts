// src/data/drills/a1/adjectivesBasicDrill.ts
//
// A1 ADJECTIVES AND AGREEMENT — the drill for the `adjectives-basic` lesson (A1, 23).
//
// Follows Hrvatski za početnike 1, pages 28–29: "Karakteristike stvari" (the car dialogue:
// velik, brz, lijep, skup), the table of opisni pridjevi (nov automobil · nova torba · novo
// odijelo; novi automobili · nove torbe · nova odijela), the notes dobar – dobra and
// debeo – debela, and the exercise "Upišite točan pridjev" ("Avion je brz. (brz / brza /
// brzo)"). The book's Kakav? / Kakva? questions are left out: the course teaches kakav in
// a later lesson. Only biti is used as a verb.
//
// Three modes:
//   rod          — singular: nothing, -a, -o
//   mnozina      — plural: -i, -e, -a
//   nepostojanoA — the vowel that disappears: dobar → dobra, topao → topla

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ADJECTIVES_BASIC_MODE_LABELS: Record<string, string> = {
  rod: '🎯 Rod: velik, velika, veliko',
  mnozina: '👥 Množina: -i, -e, -a',
  nepostojanoA: '✂️ dobar → dobra',
};

export const ADJECTIVES_BASIC_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Kuća je ____.',
    en: 'The house is old.',
    opts: ['stara', 'star', 'staro', 'stari'],
    answer: 'stara',
    tip: 'kuća is feminine, so the adjective takes -a: stara. star is the masculine form, staro the neuter one, and stari is a masculine plural.',
  },
  {
    mode: 'rod',
    q: 'Auto je ____.',
    en: 'The car is fast.',
    opts: ['brz', 'brza', 'brzo', 'brze'],
    answer: 'brz',
    tip: 'auto ends in -o but is a masculine noun, so the adjective has no ending: brz. brzo treats it as neuter, brza as feminine, and brze is a feminine plural.',
  },
  {
    mode: 'rod',
    q: 'Selo je ____.',
    en: 'The village is small.',
    opts: ['malo', 'mala', 'mali', 'male'],
    answer: 'malo',
    tip: 'selo is neuter, so the adjective ends in -o: malo. mala is feminine, mali is masculine, and male is a feminine plural.',
  },
  {
    mode: 'rod',
    q: 'More je ____.',
    en: 'The sea is blue.',
    opts: ['plavo', 'plava', 'plav', 'plavi'],
    answer: 'plavo',
    tip: 'more is neuter, and a color agrees like any adjective: plavo. plava goes with a feminine noun, plav with a masculine one, and plavi with a masculine plural.',
  },
  {
    mode: 'rod',
    q: 'Ovo je ____ torba.',
    en: 'This is a cheap bag.',
    opts: ['jeftina', 'jeftin', 'jeftino', 'jeftini'],
    answer: 'jeftina',
    tip: 'torba is feminine, so it is jeftina torba. jeftin is the dictionary (masculine) form, jeftino is neuter, and jeftini is a masculine plural.',
  },
  {
    mode: 'rod',
    q: 'To je ____ pismo.',
    en: 'That is a new letter.',
    opts: ['novo', 'nov', 'nova', 'novi'],
    answer: 'novo',
    tip: 'pismo is neuter: novo pismo. nov is masculine (nov auto), nova is feminine (nova torba), and novi is a masculine form too.',
  },
  {
    mode: 'rod',
    q: 'Zagreb je ____ grad.',
    en: 'Zagreb is a beautiful city.',
    opts: ['lijep', 'lijepa', 'lijepo', 'lijepe'],
    answer: 'lijep',
    tip: 'grad is masculine, so the adjective stays in its plain form: lijep grad. lijepa is feminine, lijepo neuter, and lijepe a feminine plural.',
  },
  {
    mode: 'rod',
    q: 'Moja sestra je ____.',
    en: 'My sister is young.',
    opts: ['mlada', 'mlad', 'mlado', 'mladi'],
    answer: 'mlada',
    tip: 'sestra is feminine: mlada. mlad would describe a brother, mlado a neuter noun such as dijete, and mladi several men.',
  },
  {
    mode: 'rod',
    q: 'Obitelj je ____.',
    en: 'The family is big.',
    opts: ['velika', 'velik', 'veliko', 'veliki'],
    answer: 'velika',
    tip: 'obitelj ends in a consonant but is feminine, so the adjective is velika. velik and veliki treat it as masculine, and veliko as neuter.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Auti su ____.',
    en: 'The cars are fast.',
    opts: ['brzi', 'brze', 'brza', 'brz'],
    answer: 'brzi',
    tip: 'auti is a masculine plural, so the adjective ends in -i: brzi. brze is the feminine plural, brza the neuter plural, and brz is singular.',
  },
  {
    mode: 'mnozina',
    q: 'Knjige su ____.',
    en: 'The books are new.',
    opts: ['nove', 'novi', 'nova', 'nov'],
    answer: 'nove',
    tip: 'knjige is a feminine plural, so the adjective ends in -e too: nove. novi is the masculine plural, nova the neuter plural, and nov is singular.',
  },
  {
    mode: 'mnozina',
    q: 'Sela su ____.',
    en: 'The villages are small.',
    opts: ['mala', 'male', 'mali', 'malo'],
    answer: 'mala',
    tip: 'sela is a neuter plural, and the adjective rhymes with it: mala sela. male borrows the feminine plural ending, mali the masculine one, and malo is singular.',
  },
  {
    mode: 'mnozina',
    q: 'Kuće su ____.',
    en: 'The houses are white.',
    opts: ['bijele', 'bijeli', 'bijela', 'bijel'],
    answer: 'bijele',
    tip: 'kuće is a feminine plural: bijele. bijeli is for a masculine plural, bijela describes one house (or a neuter plural), and bijel is masculine singular.',
  },
  {
    mode: 'mnozina',
    q: 'To su ____ prijatelji.',
    en: 'Those are good friends.',
    opts: ['dobri', 'dobre', 'dobra', 'dobar'],
    answer: 'dobri',
    tip: 'prijatelji is a masculine plural, so it is dobri prijatelji. dobre is for a feminine plural, dobra for a feminine singular, and dobar for one friend.',
  },
  {
    mode: 'mnozina',
    q: 'Gradovi su ____.',
    en: 'The cities are beautiful.',
    opts: ['lijepi', 'lijepe', 'lijepa', 'lijep'],
    answer: 'lijepi',
    tip: 'gradovi is masculine plural: lijepi. lijepe is the feminine plural ending, lijepa the neuter plural, and lijep describes one city.',
  },
  {
    mode: 'mnozina',
    q: 'Ovo su ____ pisma.',
    en: 'These are old letters.',
    opts: ['stara', 'stare', 'stari', 'staro'],
    answer: 'stara',
    tip: 'pisma is a neuter plural, so the adjective ends in -a: stara pisma. stare is the feminine plural, stari the masculine plural, and staro is one letter.',
  },
  {
    mode: 'mnozina',
    q: 'Moje sestre su ____.',
    en: 'My sisters are young.',
    opts: ['mlade', 'mladi', 'mlada', 'mlad'],
    answer: 'mlade',
    tip: 'sestre is a feminine plural, so the adjective is mlade. mladi is for men or a mixed group, mlada describes one sister, and mlad one brother.',
  },
  {
    mode: 'mnozina',
    q: 'Djeca su ____.',
    en: 'The children are happy.',
    opts: ['sretna', 'sretni', 'sretne', 'sretan'],
    answer: 'sretna',
    tip: 'djeca takes the -a form of the adjective, just as it takes moja: Djeca su sretna. sretni and sretne are the usual plural endings but not with djeca; sretan is masculine singular.',
  },

  // ── nepostojanoA ──────────────────────────────────────────────────────────
  {
    mode: 'nepostojanoA',
    q: 'Kava je ____.',
    en: 'The coffee is good.',
    opts: ['dobra', 'dobara', 'dobar', 'dobro'],
    answer: 'dobra',
    tip: 'kava is feminine, and dobar loses its a when an ending is added: dobra. dobara keeps the vowel, dobar is masculine, and dobro is neuter.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Vino je ____.',
    en: 'The wine is good.',
    opts: ['dobro', 'dobaro', 'dobar', 'dobra'],
    answer: 'dobro',
    tip: 'vino is neuter: dobar drops its a and adds -o, dobro. dobaro keeps the a, dobar is the masculine form, and dobra is feminine.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Voda je ____.',
    en: 'The water is cold.',
    opts: ['hladna', 'hladana', 'hladan', 'hladno'],
    answer: 'hladna',
    tip: 'hladan works like dobar: the a disappears before an ending, so the feminine is hladna. hladana keeps it, hladan is masculine, and hladno is neuter.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Mama je ____.',
    en: 'Mom is happy.',
    opts: ['sretna', 'sretana', 'sretan', 'sretno'],
    answer: 'sretna',
    tip: 'sretan → sretna: the a drops out when the feminine -a is added. sretana keeps the vowel, sretan would describe a man, and sretno is neuter.',
  },
  {
    mode: 'nepostojanoA',
    q: 'More je danas ____.',
    en: 'The sea is warm today.',
    opts: ['toplo', 'topalo', 'topao', 'topla'],
    answer: 'toplo',
    tip: 'topao is the masculine form only; with an ending the stem is topl-, so the neuter is toplo. topalo keeps the a, and topla is the feminine form.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Dan je ____.',
    en: 'The day is cold.',
    opts: ['hladan', 'hladn', 'hladna', 'hladno'],
    answer: 'hladan',
    tip: 'dan is masculine and there is no ending, so the a stays: hladan. hladn drops it too early, hladna is feminine, and hladno is neuter.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Moj brat je ____.',
    en: 'My brother is clever.',
    opts: ['pametan', 'pametn', 'pametna', 'pametno'],
    answer: 'pametan',
    tip: 'With a masculine noun the adjective keeps its full form: pametan. The a only disappears before an ending, as in pametna (feminine) and pametno (neuter).',
  },
  {
    mode: 'nepostojanoA',
    q: 'Juha je ____.',
    en: 'The soup is warm.',
    opts: ['topla', 'topala', 'topao', 'toplo'],
    answer: 'topla',
    tip: 'juha is feminine: topao becomes topla. topala keeps a vowel that has to go, topao is masculine, and toplo is neuter.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Prijatelji su ____.',
    en: 'The friends are good.',
    opts: ['dobri', 'dobari', 'dobar', 'dobre'],
    answer: 'dobri',
    tip: 'The plural -i is an ending too, so the a drops out: dobri. dobari keeps it, dobar is singular, and dobre is the feminine plural.',
  },
  {
    mode: 'nepostojanoA',
    q: 'Sestre su ____.',
    en: 'The sisters are happy.',
    opts: ['sretne', 'sretane', 'sretni', 'sretan'],
    answer: 'sretne',
    tip: 'sestre is a feminine plural, and sretan loses its a before the ending: sretne. sretane keeps the vowel, sretni is the masculine plural, and sretan is singular.',
  },
];
