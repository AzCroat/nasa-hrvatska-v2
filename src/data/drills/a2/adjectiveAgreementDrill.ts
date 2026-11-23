// src/data/drills/a2/adjectiveAgreementDrill.ts
//
// A2 ADJECTIVE AGREEMENT — the drill for the `adjective-agreement` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 31 and 33: the text "Vikend na selu" with its
// questions "Kakva je vikendica? Kakvi su prijatelji? Kakva su polja? Kakve su sobe?", and
// the AKUZATIV PRIDJEVA table in the book's order (lijepu vikendicu · zelen vrt · dobrog
// susjeda · maleno selo · velike sobe). Page 17 adds the note that tata looks feminine but
// takes masculine agreement. The locative and instrumental items use only the endings the
// lesson's own table shows.
//
// Three modes:
//   rod     — one noun, one gender: the adjective copies it (kakav? kakva? kakvo?)
//   mnozina — the plural: kakvi? kakve? kakva?
//   padez   — the adjective follows its noun into the case

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ADJECTIVE_AGREEMENT_MODE_LABELS: Record<string, string> = {
  rod: '🏡 Kakav? Kakva? Kakvo?',
  mnozina: '👥 Množina',
  padez: '🧩 Pridjev u padežu',
};

export const ADJECTIVE_AGREEMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Selo je ____ i mirno.',
    en: 'The village is small and quiet.',
    opts: ['malo', 'mali', 'mala', 'male'],
    answer: 'malo',
    tip: 'selo ends in -o, so it is neuter and the adjective ends in -o too: malo. mali is masculine, mala is feminine, and male is a plural form.',
  },
  {
    mode: 'rod',
    q: 'Kuća je ____.',
    en: 'The house is beautiful.',
    opts: ['lijepa', 'lijep', 'lijepo', 'lijepi'],
    answer: 'lijepa',
    tip: 'kuća ends in -a and is feminine, so the adjective takes -a: lijepa. lijep and lijepi are masculine, lijepo is neuter.',
  },
  {
    mode: 'rod',
    q: 'Kakav je vrt? — Vrt je ____.',
    en: 'What is the garden like? — The garden is green.',
    opts: ['zelen', 'zelena', 'zeleno', 'zelene'],
    answer: 'zelen',
    tip: 'vrt is masculine, and after je the short masculine form with no ending is the normal one: zelen. zelena is feminine, zeleno neuter, zelene plural.',
  },
  {
    mode: 'rod',
    q: '____ je kuća? — Velika i stara.',
    en: 'What is the house like? — Big and old.',
    opts: ['Kakva', 'Kakav', 'Kakvo', 'Kakvi'],
    answer: 'Kakva',
    tip: 'The question word agrees with the noun as well: kuća is feminine, so Kakva. Kakav asks about a masculine noun, Kakvo about a neuter one, Kakvi about several.',
  },
  {
    mode: 'rod',
    q: 'To je ____ more.',
    en: 'That is a blue sea.',
    opts: ['plavo', 'plavi', 'plava', 'plave'],
    answer: 'plavo',
    tip: 'more ends in -e and is neuter, so the adjective takes the neuter -o: plavo. plavi is masculine, plava feminine, plave plural.',
  },
  {
    mode: 'rod',
    q: 'Naš ____ susjed zove se Ivan.',
    en: 'Our good neighbor is called Ivan.',
    opts: ['dobri', 'dobra', 'dobro', 'dobre'],
    answer: 'dobri',
    tip: 'susjed is masculine (naš shows it too), and before a noun the masculine form ends in -i: dobri susjed. dobra is feminine, dobro neuter, dobre plural.',
  },
  {
    mode: 'rod',
    q: 'Ovo je moja ____ soba.',
    en: 'This is my new room.',
    opts: ['nova', 'novi', 'novo', 'nove'],
    answer: 'nova',
    tip: 'soba is feminine, like moja in front of it, so the adjective is nova. novi is masculine, novo neuter, and nove would be several rooms.',
  },
  {
    mode: 'rod',
    q: 'Večer je ____.',
    en: 'The evening is warm.',
    opts: ['topla', 'topao', 'toplo', 'tople'],
    answer: 'topla',
    tip: 'večer has no -a but it is feminine (dobra večer), so the adjective is topla. topao is the masculine form, toplo the neuter one, tople a plural.',
  },
  {
    mode: 'rod',
    q: 'Vrijeme je danas ____.',
    en: 'The weather is nice today.',
    opts: ['lijepo', 'lijep', 'lijepa', 'lijepi'],
    answer: 'lijepo',
    tip: 'vrijeme ends in -e and is neuter, so the adjective takes -o: lijepo. lijep and lijepi go with masculine nouns, lijepa with feminine ones.',
  },
  {
    mode: 'rod',
    q: 'Tata je još ____.',
    en: 'Dad is still young.',
    opts: ['mlad', 'mlada', 'mlado', 'mlade'],
    answer: 'mlad',
    tip: 'tata ends in -a but names a man, so the adjective is masculine: mlad. mlada would follow the ending instead of the person; mlado is neuter and mlade plural.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Sobe su ____.',
    en: 'The rooms are big.',
    opts: ['velike', 'velika', 'veliki', 'veliko'],
    answer: 'velike',
    tip: 'sobe is a feminine plural, and the adjective takes -e with it: velike. velika is one feminine thing, veliki is masculine, veliko neuter singular.',
  },
  {
    mode: 'mnozina',
    q: 'Sela su ____.',
    en: 'The villages are small.',
    opts: ['mala', 'male', 'mali', 'malo'],
    answer: 'mala',
    tip: 'sela is the plural of the neuter selo, and a neuter plural adjective ends in -a: mala. male goes with feminine plurals, mali with masculine ones, malo with one village.',
  },
  {
    mode: 'mnozina',
    q: 'Naši prijatelji su ____.',
    en: 'Our friends are lovely.',
    opts: ['dragi', 'drage', 'draga', 'drag'],
    answer: 'dragi',
    tip: 'prijatelji is a masculine plural, so the adjective ends in -i: dragi. drage is the feminine plural, draga one woman, drag one man.',
  },
  {
    mode: 'mnozina',
    q: 'Kakvi su susjedi? — Susjedi su ____.',
    en: 'What are the neighbors like? — The neighbors are good.',
    opts: ['dobri', 'dobre', 'dobra', 'dobar'],
    answer: 'dobri',
    tip: 'Kakvi already shows a masculine plural, and the answer matches it: dobri. dobre is the feminine plural, dobra feminine singular, dobar one man.',
  },
  {
    mode: 'mnozina',
    q: 'Ulice u gradu su ____.',
    en: 'The streets in the town are quiet.',
    opts: ['mirne', 'mirni', 'mirna', 'miran'],
    answer: 'mirne',
    tip: 'ulice is a feminine plural, so the adjective takes -e: mirne. mirni is the masculine plural, mirna one street, miran a masculine singular.',
  },
  {
    mode: 'mnozina',
    q: '____ su sobe? — Velike i lijepe.',
    en: 'What are the rooms like? — Big and beautiful.',
    opts: ['Kakve', 'Kakvi', 'Kakva', 'Kakav'],
    answer: 'Kakve',
    tip: 'sobe is a feminine plural, so the question word is Kakve, with the same -e as velike and lijepe. Kakvi is for masculine plurals, Kakva for one feminine noun or a neuter plural, Kakav for one masculine noun.',
  },
  {
    mode: 'mnozina',
    q: 'Imamo dva psa. Psi su ____.',
    en: 'We have two dogs. The dogs are black.',
    opts: ['crni', 'crne', 'crna', 'crn'],
    answer: 'crni',
    tip: 'psi is a masculine plural, so the adjective ends in -i: crni. crne is the feminine plural, crna feminine singular, and crn describes only one dog.',
  },
  {
    mode: 'mnozina',
    q: 'Moje sestre su ____.',
    en: 'My sisters are young.',
    opts: ['mlade', 'mladi', 'mlada', 'mlad'],
    answer: 'mlade',
    tip: 'sestre is a feminine plural (moje shows it), so the adjective is mlade. mladi is for men or mixed groups, mlada is one sister, mlad one man.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Imamo ____ kuću.',
    en: 'We have a beautiful house.',
    opts: ['lijepu', 'lijepa', 'lijepe', 'lijepi'],
    answer: 'lijepu',
    tip: 'kuću is the object, a feminine accusative in -u, and the adjective takes the same -u: lijepu. lijepa stays in the dictionary form, lijepe is plural, lijepi masculine.',
  },
  {
    mode: 'padez',
    q: 'Kuća ima ____ vrt.',
    en: 'The house has a big garden.',
    opts: ['veliki', 'velikog', 'veliku', 'velika'],
    answer: 'veliki',
    tip: 'vrt is a masculine thing, so as an object neither word changes: veliki vrt. velikog is only for people and animals, veliku and velika are feminine forms.',
  },
  {
    mode: 'padez',
    q: 'Imamo ____ susjeda.',
    en: 'We have a good neighbor.',
    opts: ['dobrog', 'dobri', 'dobru', 'dobar'],
    answer: 'dobrog',
    tip: 'A neighbor is a person, so the masculine object takes -og on the adjective and -a on the noun: dobrog susjeda. dobri and dobar are subject forms, dobru is feminine.',
  },
  {
    mode: 'padez',
    q: 'Idemo u ____ selo.',
    en: 'We are going to a small village.',
    opts: ['malo', 'malu', 'malog', 'mala'],
    answer: 'malo',
    tip: 'selo is neuter, and a neuter noun and its adjective look the same in the accusative as in the dictionary: malo selo. malu is feminine, malog is for masculine people and animals, mala does not match selo.',
  },
  {
    mode: 'padez',
    q: 'Susjed ima ____ psa.',
    en: 'The neighbor has an old dog.',
    opts: ['starog', 'stari', 'staru', 'staro'],
    answer: 'starog',
    tip: 'A dog is alive, so both words take the animate accusative: starog psa. stari is the subject form, staru is feminine and staro neuter.',
  },
  {
    mode: 'padez',
    q: 'Nina ima ____ mačku.',
    en: 'Nina has a white cat.',
    opts: ['bijelu', 'bijela', 'bijelog', 'bijeli'],
    answer: 'bijelu',
    tip: 'mačku is a feminine accusative, so the adjective ends in -u as well: bijelu. bijela is the subject form, bijelog and bijeli are masculine.',
  },
  {
    mode: 'padez',
    q: 'Kuća ima ____ sobe.',
    en: 'The house has big rooms.',
    opts: ['velike', 'velika', 'veliku', 'veliki'],
    answer: 'velike',
    tip: 'sobe is a feminine plural object, and the adjective takes -e with it: velike sobe. veliku would be one room, velika is the singular subject form, veliki is masculine.',
  },
  {
    mode: 'padez',
    q: 'Živimo u ____ gradu.',
    en: 'We live in an old town.',
    opts: ['starom', 'stari', 'starog', 'staroj'],
    answer: 'starom',
    tip: 'u gradu is the locative, and a masculine adjective takes -om there: u starom gradu. stari is the subject form, starog the animate accusative, staroj the feminine locative.',
  },
  {
    mode: 'padez',
    q: 'Sjedimo u ____ kuhinji.',
    en: 'We are sitting in the new kitchen.',
    opts: ['novoj', 'nova', 'novu', 'novom'],
    answer: 'novoj',
    tip: 'u kuhinji is a feminine locative, and the feminine adjective ending there is -oj: u novoj kuhinji. nova is the subject form, novu the accusative, novom the masculine ending.',
  },
  {
    mode: 'padez',
    q: 'Putujem s ____ prijateljem.',
    en: 'I am traveling with a good friend.',
    opts: ['dobrim', 'dobrom', 'dobrog', 'dobri'],
    answer: 'dobrim',
    tip: 's takes the instrumental, and a masculine adjective ends in -im there: s dobrim prijateljem. dobrom is the feminine instrumental, dobrog the accusative, dobri the subject form.',
  },
];
