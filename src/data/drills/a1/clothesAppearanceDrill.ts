// src/data/drills/a1/clothesAppearanceDrill.ts
//
// A1 CLOTHES — the drill for the `clothes-appearance` lesson (A1, 47).
//
// Follows Hrvatski za početnike 1, pages 59–63 ("Odijelo (ne) čini čovjeka"): the shop
// dialogue "Želim kupiti košulju" ("Kakvu boju želite?" – "Plavu." · "Koju veličinu
// trebate?" – "Broj 42." · "Gdje je kabina?"), the picture page "Odjeća, obuća i ostalo"
// (kapa, šešir, haljina, majica, kaput, čarape, tenisice, cipele), and the sentences with
// nositi and želim ("Oni nose…", "Želim nove cipele"). Paying and prices at the end of the
// dialogue belong to the next lesson and are not used.
//
// Three modes:
//   nosim    — nositi and what you wear, as an object
//   boje     — colors and other adjectives agree with the piece of clothing
//   trgovina — buying clothes: try on, size, color

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CLOTHES_APPEARANCE_MODE_LABELS: Record<string, string> = {
  nosim: '👕 Što nosiš?',
  boje: '🎨 Boje se slažu',
  trgovina: '🛍️ U trgovini',
};

export const CLOTHES_APPEARANCE_DRILL_DATA: ModeDrillItem[] = [
  // ── nosim ─────────────────────────────────────────────────────────────────
  {
    mode: 'nosim',
    q: 'Danas nosim ____. (bijela košulja)',
    en: 'Today I am wearing a white shirt.',
    opts: ['bijelu košulju', 'bijela košulja', 'bijelu košulja', 'bijela košulju'],
    answer: 'bijelu košulju',
    tip: 'What you wear is the object, and the color changes with the noun: bijelu košulju. "bijela košulja" changes nothing, and the mixed versions change only one word.',
  },
  {
    mode: 'nosim',
    q: 'Ana nosi ____. (crvena haljina)',
    en: 'Ana is wearing a red dress.',
    opts: ['crvenu haljinu', 'crvena haljina', 'crven haljinu', 'crvenu haljina'],
    answer: 'crvenu haljinu',
    tip: 'haljina is feminine, so both words take -u: crvenu haljinu. "crvena haljina" is the dictionary form, crven is masculine, and "crvenu haljina" changes only the color.',
  },
  {
    mode: 'nosim',
    q: 'Moj djed nosi ____.',
    en: 'My grandfather wears a black hat.',
    opts: ['crni šešir', 'crnu šešir', 'crnog šešira', 'crna šešir'],
    answer: 'crni šešir',
    tip: 'šešir is a masculine thing, so the object does not change: crni šešir. crnu and crna are feminine forms, and "crnog šešira" is the pattern for people and animals.',
  },
  {
    mode: 'nosim',
    q: 'Brat nosi ____.',
    en: 'My brother is wearing a new sweater.',
    opts: ['novi džemper', 'novu džemper', 'novog džempera', 'nova džemper'],
    answer: 'novi džemper',
    tip: 'A masculine thing stays as it is when it is the object: novi džemper. novu and nova are feminine, and "novog džempera" treats a sweater like a living being.',
  },
  {
    mode: 'nosim',
    q: 'Marko nosi ____.',
    en: 'Marko is wearing blue pants.',
    opts: ['plave hlače', 'plavu hlaču', 'plava hlače', 'plavi hlače'],
    answer: 'plave hlače',
    tip: 'hlače exists only in the plural, and a feminine plural looks the same as an object: plave hlače. There is no singular "hlaču", and plava and plavi do not match a feminine plural.',
  },
  {
    mode: 'nosim',
    q: 'Na posao nosim ____.',
    en: 'I wear black shoes to work.',
    opts: ['crne cipele', 'crna cipele', 'crni cipele', 'crne cipela'],
    answer: 'crne cipele',
    tip: 'cipele is a feminine plural, and both words keep -e as an object: crne cipele. crna and crni do not match it, and cipela is a single shoe.',
  },
  {
    mode: 'nosim',
    q: 'Djeca ____ crvene kape.',
    en: 'The children are wearing red caps.',
    opts: ['nose', 'nosu', 'nosi', 'nosimo'],
    answer: 'nose',
    tip: 'nositi is an -iti verb, so "they" ends in -e: oni nose. nosu copies the -u of verbs like piju, nosi is for one person, and nosimo is for mi.',
  },
  {
    mode: 'nosim',
    q: 'Što ____ danas? — Nosim traperice i majicu.',
    en: 'What are you wearing today? — I am wearing jeans and a T-shirt.',
    opts: ['nosiš', 'nosim', 'nosi', 'nose'],
    answer: 'nosiš',
    tip: 'The answer is "Nosim…", so the question was put to ti: nosiš. nosim is the ja form, nosi is on/ona, and nose is oni.',
  },
  {
    mode: 'nosim',
    q: 'Mi ____ tenisice.',
    en: 'We wear sneakers.',
    opts: ['nosimo', 'nosim', 'nosite', 'nose'],
    answer: 'nosimo',
    tip: 'With mi the verb ends in -imo: nosimo. nosim is ja, nosite is vi, and nose is oni.',
  },

  // ── boje ──────────────────────────────────────────────────────────────────
  {
    mode: 'boje',
    q: 'Majica je ____.',
    en: 'The T-shirt is red.',
    opts: ['crvena', 'crven', 'crveno', 'crvene'],
    answer: 'crvena',
    tip: 'majica is feminine, so the color takes -a: crvena. crven is the masculine form, crveno the neuter one, and crvene is for a feminine plural such as cipele.',
  },
  {
    mode: 'boje',
    q: 'Kaput je ____.',
    en: 'The coat is black.',
    opts: ['crn', 'crna', 'crno', 'crne'],
    answer: 'crn',
    tip: 'kaput is masculine, so the color has no ending: crn. crna would describe a jakna, crno a neuter noun, and crne a feminine plural.',
  },
  {
    mode: 'boje',
    q: 'Šal je ____.',
    en: 'The scarf is brown.',
    opts: ['smeđ', 'smeđa', 'smeđe', 'smeđi'],
    answer: 'smeđ',
    tip: 'šal is masculine: smeđ. smeđa is the feminine form, smeđe the neuter one (after đ the neuter ending is -e), and smeđi is a masculine plural.',
  },
  {
    mode: 'boje',
    q: 'Hlače su ____.',
    en: 'The pants are new.',
    opts: ['nove', 'nova', 'novi', 'nov'],
    answer: 'nove',
    tip: 'hlače is always plural and feminine, so the adjective ends in -e: nove. nova and nov are singular forms, and novi is a masculine plural.',
  },
  {
    mode: 'boje',
    q: 'Cipele su ____.',
    en: 'The shoes are black.',
    opts: ['crne', 'crni', 'crna', 'crn'],
    answer: 'crne',
    tip: 'cipele is a feminine plural: crne cipele. crni is the masculine plural, crna describes one feminine thing, and crn one masculine thing.',
  },
  {
    mode: 'boje',
    q: 'Traperice su ____.',
    en: 'The jeans are blue.',
    opts: ['plave', 'plava', 'plavi', 'plavo'],
    answer: 'plave',
    tip: 'Like hlače, traperice is a plural-only feminine word, so the color is plave. plava and plavo are singular forms, and plavi is a masculine plural.',
  },
  {
    mode: 'boje',
    q: 'Čarape su ____.',
    en: 'The socks are white.',
    opts: ['bijele', 'bijeli', 'bijela', 'bijel'],
    answer: 'bijele',
    tip: 'čarape is a feminine plural (one sock is čarapa): bijele. bijeli is the masculine plural, bijela one feminine thing, and bijel one masculine thing.',
  },
  {
    mode: 'boje',
    q: 'Haljina je ____.',
    en: 'The dress is beautiful.',
    opts: ['lijepa', 'lijep', 'lijepo', 'lijepe'],
    answer: 'lijepa',
    tip: 'haljina is feminine: lijepa. lijep goes with a masculine noun such as kaput, lijepo with a neuter noun, and lijepe with a feminine plural.',
  },
  {
    mode: 'boje',
    q: 'Džemper je ____.',
    en: 'The sweater is warm.',
    opts: ['topao', 'topla', 'toplo', 'topli'],
    answer: 'topao',
    tip: 'džemper is masculine, so the adjective keeps its full form: topao. topla is feminine (topla jakna), toplo is neuter, and topli is a masculine plural.',
  },

  // ── trgovina ──────────────────────────────────────────────────────────────
  {
    mode: 'trgovina',
    q: 'Želim kupiti ____. (ova jakna)',
    en: 'I want to buy this jacket.',
    opts: ['ovu jaknu', 'ova jakna', 'ovu jakna', 'ovaj jaknu'],
    answer: 'ovu jaknu',
    tip: 'The jacket is what you want to buy, so both words change: ovu jaknu. "ova jakna" is the dictionary form, "ovu jakna" changes one word only, and ovaj is masculine.',
  },
  {
    mode: 'trgovina',
    q: 'Mogu li ____ ovu haljinu?',
    en: 'Can I try on this dress?',
    opts: ['probati', 'probam', 'probaš', 'proba'],
    answer: 'probati',
    tip: 'After mogu the second verb stays in the infinitive: Mogu li probati? probam, probaš and proba are present-tense forms and cannot follow mogu.',
  },
  {
    mode: 'trgovina',
    q: 'Gdje je ____?',
    cue: 'You want to try the shirt on.',
    opts: ['kabina', 'kapa', 'košulja', 'veličina'],
    answer: 'kabina',
    tip: 'The fitting room is kabina. kapa is a cap, košulja is the shirt itself, and veličina is the size.',
  },
  {
    mode: 'trgovina',
    q: '____ boju želite? — Plavu.',
    en: 'What color would you like? — Blue.',
    opts: ['Kakvu', 'Kakva', 'Kakav', 'Kakvo'],
    answer: 'Kakvu',
    tip: 'boju is a feminine object (želite boju), so the question word changes with it: Kakvu boju? Kakva is the subject form, and Kakav and Kakvo are masculine and neuter.',
  },
  {
    mode: 'trgovina',
    q: 'Kakvu boju želite? — ____, molim. (zelena)',
    en: 'What color would you like? — Green, please.',
    opts: ['Zelenu', 'Zelena', 'Zeleno', 'Zeleni'],
    answer: 'Zelenu',
    tip: 'The short answer continues the question: (Želim) zelenu (boju), so it keeps the object ending -u. Zelena is the dictionary form, and Zeleno and Zeleni do not match boja.',
  },
  {
    mode: 'trgovina',
    q: 'Koju ____ trebate? — Broj 42.',
    en: 'What … do you need? — Number 42.',
    opts: ['veličinu', 'veličina', 'boju', 'kabinu'],
    answer: 'veličinu',
    tip: 'A number answers a question about size, and after trebate the word is an object: veličinu. veličina is the subject form, boju asks about color, and kabinu is the fitting room.',
  },
  {
    mode: 'trgovina',
    q: 'Ove cipele nisu moj ____. Trebam 38.',
    en: 'These shoes are not my size. I need a 38.',
    opts: ['broj', 'boja', 'kabina', 'kaput'],
    answer: 'broj',
    tip: 'Your size in shoes and clothes is your broj (number). boja is color, kabina is the fitting room, and kaput is a coat.',
  },
  {
    mode: 'trgovina',
    q: 'Trebate li i ____? (kapa)',
    en: 'Do you need a cap too?',
    opts: ['kapu', 'kapa', 'kapi', 'kapom'],
    answer: 'kapu',
    tip: 'What you need is the object, so feminine -a becomes -u: kapu. kapa is the dictionary form, and kapi and kapom are other forms of the word.',
  },
  {
    mode: 'trgovina',
    q: 'Imamo plavu i ____ košulju. (zelena)',
    en: 'We have a blue and a green shirt.',
    opts: ['zelenu', 'zelena', 'zeleni', 'zeleno'],
    answer: 'zelenu',
    tip: 'Both colors describe the object košulju, so both end in -u: plavu i zelenu. zelena is the dictionary form, zeleni is masculine, and zeleno is neuter.',
  },
  {
    mode: 'trgovina',
    q: '____ ovu jaknu, hvala.',
    en: 'I will take this jacket, thank you.',
    opts: ['Uzimam', 'Uzimaš', 'Uzima', 'Uzimaju'],
    answer: 'Uzimam',
    tip: 'The buyer speaks about himself or herself, so the verb ends in -m: Uzimam. Uzimaš is ti, Uzima is on/ona, and Uzimaju is oni.',
  },
];
