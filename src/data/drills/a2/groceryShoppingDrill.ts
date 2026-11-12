// src/data/drills/a2/groceryShoppingDrill.ts
//
// A2 GROCERY SHOPPING — the drill for the `grocery-shopping` lesson.
//
// One pattern carries the whole topic: an amount word, then the food in the genitive
// (genitive plural for things you count, singular for things you do not). On top of
// it, the amount word itself takes whatever case its job needs — accusative as the
// object of Dajte mi… — and the number rules (dvije boce, pet boca).
//
// Three modes:
//   genitiv  — the food after the amount word
//   kolicina — the amount word: accusative object, numbers, kila / deka
//   kupnja   — market and supermarket phrases

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GROCERY_SHOPPING_MODE_LABELS: Record<string, string> = {
  genitiv: '🍎 Kilogram čega?',
  kolicina: '⚖️ Količina',
  kupnja: '🛒 Na tržnici',
};

export const GROCERY_SHOPPING_DRILL_DATA: ModeDrillItem[] = [
  // ── genitiv ───────────────────────────────────────────────────────────────
  {
    mode: 'genitiv',
    q: 'Trebam litru ____.',
    en: 'I need a litre of milk.',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'After an amount word the food is genitive; milk is not counted, so singular.',
  },
  {
    mode: 'genitiv',
    q: 'Dajte mi kilogram ____.',
    en: 'Give me a kilo of apples.',
    opts: ['jabuka', 'jabuke', 'jabuku', 'jabukama'],
    answer: 'jabuka',
    tip: 'Apples are counted: genitive plural.',
  },
  {
    mode: 'genitiv',
    q: 'Kupila sam kutiju ____.',
    en: 'I bought a box of eggs.',
    opts: ['jaja', 'jaje', 'jajem', 'jajima'],
    answer: 'jaja',
    tip: 'Eggs are counted: genitive plural.',
  },
  {
    mode: 'genitiv',
    q: 'Boca ____ je u hladnjaku.',
    en: 'The bottle of water is in the fridge.',
    opts: ['vode', 'voda', 'vodu', 'vodom'],
    answer: 'vode',
    tip: 'Water is not counted: genitive singular.',
  },
  {
    mode: 'genitiv',
    q: 'Koliko košta kilogram ____?',
    en: 'How much is a kilo of tomatoes?',
    opts: ['rajčica', 'rajčicu', 'rajčicom', 'rajčici'],
    answer: 'rajčica',
    tip: 'Tomatoes are counted: genitive plural, which here looks like the basic form.',
  },
  {
    mode: 'genitiv',
    q: 'Uzet ću paket ____.',
    en: 'I will take a packet of rice.',
    opts: ['riže', 'riža', 'rižu', 'rižom'],
    answer: 'riže',
    tip: 'Rice is not counted: genitive singular.',
  },
  {
    mode: 'genitiv',
    q: 'Na stolu je staklenka ____.',
    en: 'There is a jar of honey on the table.',
    opts: ['meda', 'med', 'medu', 'medom'],
    answer: 'meda',
    tip: 'Honey: genitive singular.',
  },
  {
    mode: 'genitiv',
    q: 'Dajte mi komad ____.',
    en: 'Give me a piece of cheese.',
    opts: ['sira', 'sir', 'siru', 'sirom'],
    answer: 'sira',
    tip: 'Cheese: genitive singular.',
  },
  // ── kolicina ──────────────────────────────────────────────────────────────
  {
    mode: 'kolicina',
    q: 'Dajte mi ____ jabuka, molim vas.',
    en: 'Give me a kilo of apples, please.',
    opts: ['kilu', 'kila', 'kile', 'kilom'],
    answer: 'kilu',
    tip: 'The amount word is the object, so it takes the accusative.',
  },
  {
    mode: 'kolicina',
    q: 'Trebamo ____ ulja.',
    en: 'We need a bottle of oil.',
    opts: ['bocu', 'boca', 'boce', 'bocom'],
    answer: 'bocu',
    tip: 'As the object of trebamo, boca takes the accusative.',
  },
  {
    mode: 'kolicina',
    q: 'Kupio sam dvije ____ vina.',
    en: 'I bought two bottles of wine.',
    opts: ['boce', 'boca', 'bocu', 'bocama'],
    answer: 'boce',
    tip: 'After dvije, the short plural.',
  },
  {
    mode: 'kolicina',
    q: 'Kupila sam pet ____ vode.',
    en: 'I bought five bottles of water.',
    opts: ['boca', 'boce', 'bocu', 'bocama'],
    answer: 'boca',
    tip: 'Five and above take the genitive plural.',
  },
  {
    mode: 'kolicina',
    q: 'Uzet ću pola ____ sira.',
    en: 'I will take half a kilo of cheese.',
    opts: ['kile', 'kila', 'kilu', 'kilom'],
    answer: 'kile',
    tip: 'Pola is an amount word too: it takes the genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Deset deka šunke je…',
    en: 'Ten deka of ham is…',
    opts: ['100 grama', '10 grama', '1 kilogram', '10 kilograma'],
    answer: '100 grama',
    tip: 'One deka is ten grams.',
  },
  {
    mode: 'kolicina',
    q: 'Trebam tri ____ krumpira.',
    en: 'I need three kilos of potatoes.',
    opts: ['kile', 'kila', 'kilu', 'kilama'],
    answer: 'kile',
    tip: 'After tri, the short plural of kila.',
  },
  {
    mode: 'kolicina',
    q: 'Molim vas, ____ mlijeka.',
    en: 'A litre of milk, please.',
    opts: ['litru', 'litra', 'litre', 'litri'],
    answer: 'litru',
    tip: 'What you ask for is the object: accusative.',
  },
  {
    mode: 'kolicina',
    q: 'Uzmi dva ____ brašna.',
    en: 'Take two kilograms of flour.',
    opts: ['kilograma', 'kilogram', 'kilogramu', 'kilogrami'],
    answer: 'kilograma',
    tip: 'After dva, a masculine noun takes the form ending in -a.',
  },
  // ── kupnja ────────────────────────────────────────────────────────────────
  {
    mode: 'kupnja',
    q: 'Gdje se plaća u supermarketu?',
    en: 'Where do you pay in the supermarket?',
    opts: ['na blagajni', 'na štandu', 'u košarici', 'u hladnjaku'],
    answer: 'na blagajni',
    tip: 'Blagajna is the checkout.',
  },
  {
    mode: 'kupnja',
    q: 'Prodavač pita: "Je li to ____?"',
    en: 'The seller asks: Is that everything?',
    opts: ['sve', 'svi', 'sva', 'svega'],
    answer: 'sve',
    tip: 'The fixed question is Je li to sve?',
  },
  {
    mode: 'kupnja',
    q: 'Trebate li ____?',
    en: 'Do you need a bag?',
    opts: ['vrećicu', 'vrećica', 'vrećici', 'vrećicom'],
    answer: 'vrećicu',
    tip: 'Object of trebate: accusative.',
  },
  {
    mode: 'kupnja',
    q: 'Platit ću ____.',
    en: 'I will pay by card.',
    opts: ['karticom', 'kartica', 'karticu', 'kartici'],
    answer: 'karticom',
    tip: 'The means of paying: instrumental, no preposition.',
  },
  {
    mode: 'kupnja',
    q: 'U supermarketu uzmem košaricu ili ____.',
    en: 'In the supermarket I take a basket or a trolley.',
    opts: ['kolica', 'kolicu', 'kolicom', 'kolice'],
    answer: 'kolica',
    tip: 'Kolica is plural only; its accusative is kolica.',
  },
  {
    mode: 'kupnja',
    q: 'Na ____ je voće svježe.',
    en: 'At the market the fruit is fresh.',
    opts: ['tržnici', 'tržnica', 'tržnicu', 'tržnicom'],
    answer: 'tržnici',
    tip: 'A place: na + locative.',
  },
  {
    mode: 'kupnja',
    q: '____ košta kilogram jabuka?',
    en: 'How much is a kilo of apples?',
    opts: ['Koliko', 'Kako', 'Što', 'Gdje'],
    answer: 'Koliko',
    tip: 'Asking a price: Koliko košta…?',
  },
];
