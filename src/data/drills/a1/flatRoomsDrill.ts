// src/data/drills/a1/flatRoomsDrill.ts
//
// A1 MY FLAT — the drill for the `flat-rooms` lesson (new A1, 54).
//
// Rooms and furniture, and where things are: u + locative for inside, na + locative
// for on a surface, with the fixed na-places (balkon, zid, pod). Adjectives appear only
// in the nominative, after je. Items whose options are Croatian words for an English
// prompt carry no gloss.
//
// Three modes:
//   sobe  — the rooms and the furniture
//   gdje  — u / na + the locative
//   opis  — describing the flat

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FLAT_ROOMS_MODE_LABELS: Record<string, string> = {
  sobe: '🛋️ Sobe i namještaj',
  gdje: '📍 Gdje je?',
  opis: '🏠 Opis stana',
};

export const FLAT_ROOMS_DRILL_DATA: ModeDrillItem[] = [
  // ── sobe ──────────────────────────────────────────────────────────────────
  {
    mode: 'sobe',
    q: 'Kako se kaže "kitchen"?',
    opts: ['kuhinja', 'kupaonica', 'hodnik', 'soba'],
    answer: 'kuhinja',
    tip: 'Mama je u kuhinji.',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "bathroom"?',
    opts: ['kupaonica', 'kuhinja', 'balkon', 'hodnik'],
    answer: 'kupaonica',
    tip: 'Tata je u kupaonici.',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "hallway"?',
    opts: ['hodnik', 'balkon', 'ormar', 'kauč'],
    answer: 'hodnik',
    tip: 'Ključevi su u hodniku.',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "bed"?',
    opts: ['krevet', 'ormar', 'stolica', 'polica'],
    answer: 'krevet',
    tip: 'Mačka spava na krevetu.',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "wardrobe"?',
    opts: ['ormar', 'krevet', 'stol', 'hladnjak'],
    answer: 'ormar',
    tip: 'Odjeća je u ormaru.',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "fridge"?',
    opts: ['hladnjak', 'štednjak', 'ormar', 'kauč'],
    answer: 'hladnjak',
    tip: 'Mlijeko je u hladnjaku. (štednjak is the cooker.)',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "shelf"?',
    opts: ['polica', 'stolica', 'slika', 'lampa'],
    answer: 'polica',
    tip: 'Knjiga je na polici.',
  },
  {
    mode: 'sobe',
    q: 'Kako se kaže "sofa"?',
    opts: ['kauč', 'krevet', 'tepih', 'stol'],
    answer: 'kauč',
    tip: 'Pas spava na kauču.',
  },

  // ── gdje ──────────────────────────────────────────────────────────────────
  {
    mode: 'gdje',
    q: 'Mama je u ____.',
    en: 'Mum is in the kitchen.',
    opts: ['kuhinji', 'kuhinju', 'kuhinja', 'kuhinje'],
    answer: 'kuhinji',
    tip: 'Being there: locative, feminine -a → -i.',
  },
  {
    mode: 'gdje',
    q: 'Knjige su na ____.',
    en: 'The books are on the shelf.',
    opts: ['polici', 'polica', 'policu', 'policom'],
    answer: 'polici',
    tip: 'na + locative: na polici.',
  },
  {
    mode: 'gdje',
    q: 'Odjeća je u ____.',
    en: 'The clothes are in the wardrobe.',
    opts: ['ormaru', 'ormar', 'ormara', 'ormarom'],
    answer: 'ormaru',
    tip: 'Masculine: -u.',
  },
  {
    mode: 'gdje',
    q: 'Mlijeko je u ____.',
    en: 'The milk is in the fridge.',
    opts: ['hladnjaku', 'hladnjak', 'hladnjaka', 'hladnjku'],
    answer: 'hladnjaku',
    tip: 'The a in hladnjak stays: u hladnjaku.',
  },
  {
    mode: 'gdje',
    q: 'Sjedimo ____ balkonu.',
    en: 'We are sitting on the balcony.',
    opts: ['na', 'u', 'o', 'po'],
    answer: 'na',
    tip: 'A balcony always takes na.',
  },
  {
    mode: 'gdje',
    q: 'Slika je na ____.',
    en: 'The picture is on the wall.',
    opts: ['zidu', 'zid', 'zida', 'zidom'],
    answer: 'zidu',
    tip: 'na zidu.',
  },
  {
    mode: 'gdje',
    q: 'Tepih je na ____.',
    en: 'The rug is on the floor.',
    opts: ['podu', 'pod', 'poda', 'podom'],
    answer: 'podu',
    tip: 'na podu.',
  },
  {
    mode: 'gdje',
    q: 'Tata je u ____.',
    en: 'Dad is in the bathroom.',
    opts: ['kupaonici', 'kupaonica', 'kupaonicu', 'kupaonice'],
    answer: 'kupaonici',
    tip: 'u kupaonici.',
  },
  {
    mode: 'gdje',
    q: 'Djeca su u ____.',
    en: 'The children are in the room.',
    opts: ['sobi', 'soba', 'sobu', 'sobe'],
    answer: 'sobi',
    tip: 'u sobi.',
  },
  {
    mode: 'gdje',
    q: 'Ključevi su u ____.',
    en: 'The keys are in the hallway.',
    opts: ['hodniku', 'hodnik', 'hodnika', 'hodnikom'],
    answer: 'hodniku',
    tip: 'u hodniku.',
  },
  {
    mode: 'gdje',
    q: 'Mačka spava na ____.',
    en: 'The cat is sleeping on the bed.',
    opts: ['krevetu', 'krevet', 'kreveta', 'krevetom'],
    answer: 'krevetu',
    tip: 'na krevetu.',
  },

  // ── opis ──────────────────────────────────────────────────────────────────
  {
    mode: 'opis',
    q: 'Stan je ____.',
    en: 'The flat is big.',
    opts: ['velik', 'velika', 'veliko', 'velike'],
    answer: 'velik',
    tip: 'stan is masculine.',
  },
  {
    mode: 'opis',
    q: 'Kuhinja je ____.',
    en: 'The kitchen is small.',
    opts: ['mala', 'malen', 'malo', 'male'],
    answer: 'mala',
    tip: 'kuhinja is feminine.',
  },
  {
    mode: 'opis',
    q: 'Kupaonica je ____.',
    en: 'The bathroom is new.',
    opts: ['nova', 'nov', 'novo', 'nove'],
    answer: 'nova',
    tip: 'kupaonica is feminine.',
  },
  {
    mode: 'opis',
    q: 'Soba je ____.',
    en: 'The room is bright.',
    opts: ['svijetla', 'svijetao', 'svijetlo', 'svijetle'],
    answer: 'svijetla',
    tip: 'soba is feminine.',
  },
  {
    mode: 'opis',
    q: 'Stan ____ balkon.',
    en: 'The flat has a balcony.',
    opts: ['ima', 'je', 'imam', 'imaju'],
    answer: 'ima',
    tip: 'imati: stan ima.',
  },
  {
    mode: 'opis',
    q: 'Imam ____ stan.',
    en: 'I have a nice flat.',
    opts: ['lijep', 'lijepa', 'lijepo', 'lijepu'],
    answer: 'lijep',
    tip: 'stan is masculine and a thing, so the accusative looks the same.',
  },
];
