// src/data/drills/c1/ethnonymsDrill.ts
//
// C1 ETHNONYMS AND PLACE ADJECTIVES — the drill for the `ethnonyms` lesson
// (C1 position 26).
//
// Three modes, eight items each:
//   stanovnik — the man, and the plural: Zagrepčanin, Zagrepčani, Varaždinac
//   stanovnica — the woman: Splićanka, Puljanka, Hrvatica
//   pridjev   — the place adjective, with its small letter: zagrebački, osječki
//
// Every wrong option is a form a learner builds by skipping the sound change, keeping
// -in in the plural, or capitalising the adjective. The traditional pair Dubrovkinja /
// Dubrovčanka (both in use) is never tested.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ETHNONYMS_MODE_LABELS: Record<string, string> = {
  stanovnik: '🧔 Stanovnik',
  stanovnica: '👩 Stanovnica',
  pridjev: '🏷️ Pridjev',
};

export const ETHNONYMS_DRILL_DATA: ModeDrillItem[] = [
  // ── stanovnik ─────────────────────────────────────────────────────────────
  {
    mode: 'stanovnik',
    q: 'Marko je iz Splita. On je ____.',
    en: 'Marko is from Split.',
    opts: ['Splićanin', 'Splitanin', 'Splitčanin', 'Splićan'],
    answer: 'Splićanin',
    tip: 't + j gives ć before -anin.',
  },
  {
    mode: 'stanovnik',
    q: 'Ivan je iz Zagreba. On je ____.',
    en: 'Ivan is from Zagreb.',
    opts: ['Zagrepčanin', 'Zagrebčanin', 'Zagrebanin', 'Zagrepčan'],
    answer: 'Zagrepčanin',
    tip: 'b becomes p before the voiceless č.',
  },
  {
    mode: 'stanovnik',
    q: 'Luka je iz Rijeke. On je ____.',
    en: 'Luka is from Rijeka.',
    opts: ['Riječanin', 'Rijekanin', 'Riječan', 'Riječkanin'],
    answer: 'Riječanin',
    tip: 'k becomes č, and ije shortens to je.',
  },
  {
    mode: 'stanovnik',
    q: 'Petar je iz Zadra. On je ____.',
    en: 'Petar is from Zadar.',
    opts: ['Zadranin', 'Zadarac', 'Zadarin', 'Zadrančanin'],
    answer: 'Zadranin',
    tip: 'The fleeting a of Zadar drops.',
  },
  {
    mode: 'stanovnik',
    q: 'Josip je iz Varaždina. On je ____.',
    en: 'Josip is from Varaždin.',
    opts: ['Varaždinac', 'Varaždinčanin', 'Varaždinjanin', 'Varaždinik'],
    answer: 'Varaždinac',
    tip: 'Varaždin belongs to the -ac family.',
  },
  {
    mode: 'stanovnik',
    q: 'Ljudi iz Zagreba su ____.',
    en: 'People from Zagreb.',
    opts: ['Zagrepčani', 'Zagrepčanini', 'Zagrebčani', 'Zagrepčanci'],
    answer: 'Zagrepčani',
    tip: 'The -in of -anin drops in the plural.',
  },
  {
    mode: 'stanovnik',
    q: 'Ljudi iz Osijeka su ____.',
    en: 'People from Osijek.',
    opts: ['Osječani', 'Osiječani', 'Osječanini', 'Osijekčani'],
    answer: 'Osječani',
    tip: 'k becomes č, ije shortens, and the plural drops -in.',
  },
  {
    mode: 'stanovnik',
    q: 'Ljudi iz Varaždina su ____.',
    en: 'People from Varaždin.',
    opts: ['Varaždinci', 'Varaždinaci', 'Varaždinčani', 'Varaždinovci'],
    answer: 'Varaždinci',
    tip: 'The a of -ac is fleeting.',
  },
  // ── stanovnica ────────────────────────────────────────────────────────────
  {
    mode: 'stanovnica',
    q: 'Ivana je iz Splita. Ona je ____.',
    en: 'Ivana is from Split.',
    opts: ['Splićanka', 'Splitanka', 'Splitčanka', 'Splitkinja'],
    answer: 'Splićanka',
    tip: 'The same ć as in the masculine, and -anka for a woman.',
  },
  {
    mode: 'stanovnica',
    q: 'Ana živi u Puli, gdje je i rođena. Ona je ____.',
    en: 'Ana lives in Pula, where she was born.',
    opts: ['Puljanka', 'Pulanka', 'Pulka', 'Puljkinja'],
    answer: 'Puljanka',
    tip: 'l + j gives lj.',
  },
  {
    mode: 'stanovnica',
    q: 'Marija je iz Osijeka. Ona je ____.',
    en: 'Marija is from Osijek.',
    opts: ['Osječanka', 'Osiječanka', 'Osijekanka', 'Osječka'],
    answer: 'Osječanka',
    tip: 'k becomes č and ije shortens.',
  },
  {
    mode: 'stanovnica',
    q: 'Lucija je iz Varaždina. Ona je ____.',
    en: 'Lucija is from Varaždin.',
    opts: ['Varaždinka', 'Varaždinkinja', 'Varaždinčanka', 'Varaždinica'],
    answer: 'Varaždinka',
    tip: 'The -ac family takes -ka for a woman.',
  },
  {
    mode: 'stanovnica',
    q: 'Ona je iz Hrvatske. Ona je ____.',
    en: 'She is from Croatia.',
    opts: ['Hrvatica', 'Hrvatka', 'Hrvatskinja', 'hrvatica'],
    answer: 'Hrvatica',
    tip: 'A nation takes a capital; the feminine is -ica.',
  },
  {
    mode: 'stanovnica',
    q: 'Claire je iz Francuske. Ona je ____.',
    en: 'Claire is from France.',
    opts: ['Francuskinja', 'Francuska', 'Francuzka', 'francuskinja'],
    answer: 'Francuskinja',
    tip: 'One of the traditional feminines in -kinja, with a capital.',
  },
  {
    mode: 'stanovnica',
    q: 'Nina je iz Šibenika. Ona je ____.',
    en: 'Nina is from Šibenik.',
    opts: ['Šibenčanka', 'Šibenikanka', 'Šibenka', 'Šibenskinja'],
    answer: 'Šibenčanka',
    tip: 'k becomes č before the suffix.',
  },
  {
    mode: 'stanovnica',
    q: 'Eleni je iz Grčke. Ona je ____.',
    en: 'Eleni is from Greece.',
    opts: ['Grkinja', 'Grkica', 'Grčka', 'Grkinka'],
    answer: 'Grkinja',
    tip: 'Another traditional feminine in -kinja.',
  },
  // ── pridjev ───────────────────────────────────────────────────────────────
  {
    mode: 'pridjev',
    q: 'Vozimo se ____ tramvajem.',
    en: 'We ride the Zagreb tram.',
    opts: ['zagrebačkim', 'Zagrebačkim', 'zagrepčkim', 'zagrebskim'],
    answer: 'zagrebačkim',
    tip: 'An adjective takes a small letter, and no voiceless consonant follows b.',
  },
  {
    mode: 'pridjev',
    q: 'Prošetali smo ____ rivom.',
    en: 'We walked along the Split waterfront.',
    opts: ['splitskom', 'Splitskom', 'splićanskom', 'splićkom'],
    answer: 'splitskom',
    tip: 'The adjective is built on the town name itself, without jotation.',
  },
  {
    mode: 'pridjev',
    q: 'Na tržnici smo kupili ____ kulen.',
    en: 'At the market we bought Osijek kulen.',
    opts: ['osječki', 'osiječki', 'Osječki', 'osijekski'],
    answer: 'osječki',
    tip: 'k becomes č, ije shortens, and the adjective is small.',
  },
  {
    mode: 'pridjev',
    q: 'Radi u ____ luci.',
    en: 'He works in the port of Rijeka.',
    opts: ['riječkoj', 'Riječkoj', 'rijekoj', 'rijekskoj'],
    answer: 'riječkoj',
    tip: 'k becomes č and ije shortens to je.',
  },
  {
    mode: 'pridjev',
    q: 'Posjetili smo ____ katedralu svetoga Jakova.',
    en: 'We visited the Šibenik cathedral of St James.',
    opts: ['šibensku', 'Šibensku', 'šibeničku', 'šibenišku'],
    answer: 'šibensku',
    tip: 'The -ik drops before -ski, and the adjective is small.',
  },
  {
    mode: 'pridjev',
    q: 'Šetali smo po ____ zidinama.',
    en: 'We walked on the Dubrovnik city walls.',
    opts: ['dubrovačkim', 'Dubrovačkim', 'dubrovničkim', 'dubrovnikskim'],
    answer: 'dubrovačkim',
    tip: 'The -nik shortens before -ački.',
  },
  {
    mode: 'pridjev',
    q: 'Na ____ rivi sviraju morske orgulje.',
    en: 'The sea organ plays on the Zadar waterfront.',
    opts: ['zadarskoj', 'Zadarskoj', 'zadranskoj', 'zadrskoj'],
    answer: 'zadarskoj',
    tip: 'The adjective keeps the a of Zadar and takes a small letter.',
  },
  {
    mode: 'pridjev',
    q: 'Ona dobro govori ____ jezik.',
    en: 'She speaks the German language well.',
    opts: ['njemački', 'Njemački', 'nijemački', 'njemačkski'],
    answer: 'njemački',
    tip: 'A language takes a small letter.',
  },
];
