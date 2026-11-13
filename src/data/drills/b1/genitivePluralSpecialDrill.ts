// src/data/drills/b1/genitivePluralSpecialDrill.ts
//
// B1 SPECIAL GENITIVE PLURALS — the drill for the `genitive-plural-special` lesson.
//
// After five and up, koliko, puno, nekoliko and bez, the genitive plural. The errors
// are the missing slipped-in a ("pet djevojka"), -ova on nouns that do not take it
// ("puno ljudova"), and the wrong ending on the body words ("deset prstova").
// mjeseci and mjeseca are BOTH correct and never stand against each other here.
//
// Three modes:
//   umetnuto — the slipped-in a: djevojaka, sestara, pisama, studenata
//   nastavak — -i, -iju and -u: torbi, stvari, ljudi, prstiju, gostiju, nogu
//   dugi     — the long plural and the contrast with two to four

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_PLURAL_SPECIAL_MODE_LABELS: Record<string, string> = {
  umetnuto: '➕ Umetnuto a',
  nastavak: '🖐️ -i, -iju, -u',
  dugi: '🏙️ -ova i brojevi',
};

export const GENITIVE_PLURAL_SPECIAL_DRILL_DATA: ModeDrillItem[] = [
  // ── umetnuto ──────────────────────────────────────────────────────────────
  {
    mode: 'umetnuto',
    q: 'U razredu je dvanaest ____.',
    en: 'There are twelve girls in the class.',
    opts: ['djevojaka', 'djevojka', 'djevojke', 'djevojkova'],
    answer: 'djevojaka',
    tip: 'The stem djevojk- ends in two consonants, so an a slips in.',
  },
  {
    mode: 'umetnuto',
    q: 'Koliko imaš ____?',
    en: 'How many sisters do you have?',
    opts: ['sestara', 'sestra', 'sestri', 'sestrama'],
    answer: 'sestara',
    tip: 'Koliko takes the genitive plural; sestr- gets an a between t and r.',
  },
  {
    mode: 'umetnuto',
    q: 'Dobila sam puno ____ iz Kanade.',
    en: 'I got a lot of letters from Canada.',
    opts: ['pisama', 'pisma', 'pismi', 'pismova'],
    answer: 'pisama',
    tip: 'Pism- ends in two consonants: pisama.',
  },
  {
    mode: 'umetnuto',
    q: 'Na predavanju je bilo sto ____.',
    en: 'There were a hundred students at the lecture.',
    opts: ['studenata', 'studenta', 'studenti', 'studentima'],
    answer: 'studenata',
    tip: 'Student ends in n + t, so an a slips in: studenata.',
  },
  {
    mode: 'umetnuto',
    q: 'Trebam pet ____ za školu.',
    en: 'I need five pencils for school.',
    opts: ['olovaka', 'olovke', 'olovkama', 'olovkom'],
    answer: 'olovaka',
    tip: 'Olovk- ends in two consonants: olovaka.',
  },
  {
    mode: 'umetnuto',
    q: 'U grupi su studenti iz deset ____.',
    en: 'In the group there are students from ten countries.',
    opts: ['zemalja', 'zemlja', 'zemlji', 'zemljama'],
    answer: 'zemalja',
    tip: 'Zemlj- ends in m + lj, so an a slips in: zemalja.',
  },
  {
    mode: 'umetnuto',
    q: 'Za stolom je sjedilo šest ____.',
    en: 'Six men were sitting at the table.',
    opts: ['muškaraca', 'muškarci', 'muškarca', 'muškarcima'],
    answer: 'muškaraca',
    tip: 'Muškarac loses its a in the plural and gets it back here: muškaraca.',
  },
  {
    mode: 'umetnuto',
    q: 'Ispred kafića stoji nekoliko ____.',
    en: 'A few lads are standing in front of the café.',
    opts: ['momaka', 'momci', 'momka', 'momcima'],
    answer: 'momaka',
    tip: 'Momak → momci → momaka: the fleeting a comes back.',
  },

  // ── nastavak ──────────────────────────────────────────────────────────────
  {
    mode: 'nastavak',
    q: 'Svaka ruka ima pet ____.',
    en: 'Every hand has five fingers.',
    opts: ['prstiju', 'prstova', 'prste', 'prstima'],
    answer: 'prstiju',
    tip: 'Fingers belong to the body words with -iju.',
  },
  {
    mode: 'nastavak',
    q: 'Na svadbi je bilo dvjesto ____.',
    en: 'There were two hundred guests at the wedding.',
    opts: ['gostiju', 'gostova', 'gosti', 'gostima'],
    answer: 'gostiju',
    tip: 'Gost takes -iju in the genitive plural.',
  },
  {
    mode: 'nastavak',
    q: 'Subotom je na tržnici puno ____.',
    en: 'On Saturdays there are a lot of people at the market.',
    opts: ['ljudi', 'ljudova', 'čovjeka', 'ljudima'],
    answer: 'ljudi',
    tip: 'The plural of čovjek is ljudi, and its genitive plural is the same.',
  },
  {
    mode: 'nastavak',
    q: 'Pauk ima osam ____.',
    en: 'A spider has eight legs.',
    opts: ['nogu', 'noga', 'nogi', 'nogama'],
    answer: 'nogu',
    tip: 'Noga and ruka take -u in the genitive plural.',
  },
  {
    mode: 'nastavak',
    q: 'Kupila sam pet ____ i sve su pune.',
    en: 'I bought five bags and they are all full.',
    opts: ['torbi', 'toraba', 'torbe', 'torbama'],
    answer: 'torbi',
    tip: 'Torba is one of the feminine nouns with -i in the genitive plural.',
  },
  {
    mode: 'nastavak',
    q: 'Moram ponijeti puno ____.',
    en: 'I have to take a lot of things.',
    opts: ['stvari', 'stvara', 'stvarova', 'stvarima'],
    answer: 'stvari',
    tip: 'Feminine nouns ending in a consonant take -i: stvari.',
  },
  {
    mode: 'nastavak',
    q: 'Čekali smo tri ____ na aerodromu.',
    en: 'We waited three hours at the airport.',
    opts: ['sata', 'sati', 'satova', 'satima'],
    answer: 'sata',
    tip: 'After three comes the genitive SINGULAR: tri sata. Pet sati is for five and up.',
  },
  {
    mode: 'nastavak',
    q: 'Glumica je poznata po ljepoti svojih ____.',
    en: 'The actress is known for the beauty of her eyes.',
    opts: ['očiju', 'oči', 'oka', 'očima'],
    answer: 'očiju',
    tip: 'Oči takes -iju in the genitive plural.',
  },
  {
    mode: 'nastavak',
    q: 'Na putu nismo spavali nekoliko ____.',
    en: 'On the trip we did not sleep for several nights.',
    opts: ['noći', 'noća', 'noćova', 'noćima'],
    answer: 'noći',
    tip: 'Noć is in the stvar group: -i.',
  },

  // ── dugi ──────────────────────────────────────────────────────────────────
  {
    mode: 'dugi',
    q: 'Hrvatska ima puno lijepih ____.',
    en: 'Croatia has a lot of beautiful towns.',
    opts: ['gradova', 'grada', 'gradovi', 'gradovima'],
    answer: 'gradova',
    tip: 'Grad has the long plural gradovi, so the genitive plural keeps -ov-.',
  },
  {
    mode: 'dugi',
    q: 'U učionici je bilo deset ____.',
    en: 'There were ten tables in the classroom.',
    opts: ['stolova', 'stola', 'stolovi', 'stolove'],
    answer: 'stolova',
    tip: 'Stol → stolovi → stolova.',
  },
  {
    mode: 'dugi',
    q: 'Ostali smo na moru deset ____.',
    en: 'We stayed at the seaside for ten days.',
    opts: ['dana', 'danova', 'dani', 'danima'],
    answer: 'dana',
    tip: 'Dan is the everyday exception: no -ov-, just dana.',
  },
  {
    mode: 'dugi',
    q: 'Imam dvije ____ i jednog brata.',
    en: 'I have two sisters and one brother.',
    opts: ['sestre', 'sestara', 'sestri', 'sestrama'],
    answer: 'sestre',
    tip: 'After two, three and four: genitive singular. The special plural is for five and up.',
  },
  {
    mode: 'dugi',
    q: 'Na izlet su došle četiri ____.',
    en: 'Four girls came on the trip.',
    opts: ['djevojke', 'djevojaka', 'djevojka', 'djevojkama'],
    answer: 'djevojke',
    tip: 'After četiri: genitive singular.',
  },
  {
    mode: 'dugi',
    q: 'Which phrase is correct?',
    en: 'Choose the correct phrase.',
    opts: ['pet muzeja', 'pet muzejova', 'pet muzeji', 'pet muzejima'],
    answer: 'pet muzeja',
    tip: 'Muzej has a short plural (muzeji), so the genitive plural is plain -a.',
  },
  {
    mode: 'dugi',
    q: 'Which phrase is correct?',
    en: 'Choose the correct phrase.',
    opts: ['bez ključeva', 'bez ključova', 'bez ključi', 'bez ključevi'],
    answer: 'bez ključeva',
    tip: 'Ključ → ključevi → ključeva: after a soft č the -ov- becomes -ev-.',
  },
];
