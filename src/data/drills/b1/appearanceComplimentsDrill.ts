// src/data/drills/b1/appearanceComplimentsDrill.ts
//
// B1 APPEARANCE AND COMPLIMENTS — the drill for the `appearance-compliments` lesson.
//
// Hair, eyes and beards go with imati + accusative; glasses (naočale, always plural)
// are worn. A compliment uses izgledati + adverb (Lijepo izgledaš) or stajati + the
// person in the dative (Ta ti haljina stoji). A compliment is answered with Hvala,
// returned with i ti, and a wish with a dative with i tebi.
//
// Three modes:
//   izgled     — describing how someone looks
//   kompliment — izgledati and stajati
//   odgovor    — taking and returning a compliment

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const APPEARANCE_COMPLIMENTS_MODE_LABELS: Record<string, string> = {
  izgled: '👤 Izgled',
  kompliment: '💐 Kompliment',
  odgovor: '🙏 Odgovor',
};

export const APPEARANCE_COMPLIMENTS_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'izgled',
    q: 'Ima ____ smeđu kosu.',
    en: 'She has short brown hair.',
    opts: ['kratku', 'kratka', 'kratkoj', 'kratkom'],
    answer: 'kratku',
    tip: 'imati takes the accusative.',
  },
  {
    mode: 'izgled',
    q: 'Ima ____ oči.',
    en: 'He has blue eyes.',
    opts: ['plave', 'plava', 'plavu', 'plavi'],
    answer: 'plave',
    tip: 'oči is a feminine plural.',
  },
  {
    mode: 'izgled',
    q: 'Nosi ____.',
    en: 'He wears glasses.',
    opts: ['naočale', 'naočalu', 'naočala', 'naočalama'],
    answer: 'naočale',
    tip: 'Glasses are always plural; accusative after nositi.',
  },
  {
    mode: 'izgled',
    q: 'Djed ima sijedu kosu i bijelu ____.',
    en: 'Grandad has grey hair and a white beard.',
    opts: ['bradu', 'brada', 'bradi', 'brade'],
    answer: 'bradu',
    tip: 'Accusative after imati.',
  },
  {
    mode: 'izgled',
    q: 'Visok je i ____.',
    en: 'He is tall and slim.',
    opts: ['vitak', 'vitka', 'vitko', 'vitki'],
    answer: 'vitak',
    tip: 'Masculine singular after biti.',
  },
  {
    mode: 'izgled',
    q: 'Ima dugu ____ kosu.',
    en: 'She has long curly hair.',
    opts: ['kovrčavu', 'kovrčava', 'kovrčavoj', 'kovrčave'],
    answer: 'kovrčavu',
    tip: 'Both adjectives in the accusative.',
  },
  {
    mode: 'izgled',
    q: 'Sestra je ____ od mene.',
    en: 'My sister is shorter than me.',
    opts: ['niža', 'nizija', 'niži', 'najniža'],
    answer: 'niža',
    tip: 'nizak → niži, feminine for sestra.',
  },
  {
    mode: 'izgled',
    q: 'Izgleda ____ glumica.',
    en: 'She looks like an actress.',
    opts: ['kao', 'nego', 'od', 'što'],
    answer: 'kao',
    tip: 'izgledati kao + nominative.',
  },
  {
    mode: 'kompliment',
    q: 'Ta ____ haljina stoji.',
    en: 'That dress suits you.',
    opts: ['ti', 'te', 'tebe', 'tvoja'],
    answer: 'ti',
    tip: 'stajati takes the person in the dative.',
  },
  {
    mode: 'kompliment',
    q: 'Ova boja ____ lijepo stoji.',
    en: 'This colour suits her nicely.',
    opts: ['joj', 'je', 'nju', 'ona'],
    answer: 'joj',
    tip: 'The short dative of ona.',
  },
  {
    mode: 'kompliment',
    q: 'Te cipele ti dobro ____.',
    en: 'Those shoes suit you well.',
    opts: ['stoje', 'stoji', 'stojiš', 'stojim'],
    answer: 'stoje',
    tip: 'The shoes are plural.',
  },
  {
    mode: 'kompliment',
    q: '____ izgledaš!',
    en: 'You look lovely!',
    opts: ['Lijepo', 'Lijepom', 'Lijepu', 'Lijepoj'],
    answer: 'Lijepo',
    tip: 'izgledati + the adverb.',
  },
  {
    mode: 'kompliment',
    q: 'Izgledaš ____, jesi li bio na moru?',
    en: 'You look rested, were you at the seaside?',
    opts: ['odmorno', 'odmor', 'odmara', 'odmoru'],
    answer: 'odmorno',
    tip: 'izgledati + the adverb in -o.',
  },
  {
    mode: 'kompliment',
    q: 'Kraća kosa ti ____ stoji.',
    en: 'Shorter hair suits you better.',
    opts: ['bolje', 'bolja', 'bolji', 'dobro'],
    answer: 'bolje',
    tip: 'A comparative adverb with stajati.',
  },
  {
    mode: 'kompliment',
    q: 'Nova frizura ____ odlično stoji.',
    en: 'The new haircut suits him perfectly.',
    opts: ['mu', 'ga', 'njega', 'on'],
    answer: 'mu',
    tip: 'The short dative of on.',
  },
  {
    mode: 'kompliment',
    q: 'Izgledaš ____ nego prošli put.',
    en: 'You look younger than last time.',
    opts: ['mlađe', 'mlado', 'najmlađe', 'mlađem'],
    answer: 'mlađe',
    tip: 'The comparative adverb.',
  },
  {
    mode: 'odgovor',
    q: 'Lijepo izgledaš! — Hvala, i ____!',
    en: 'You look lovely! — Thanks, so do you!',
    opts: ['ti', 'tebi', 'tebe', 'te'],
    answer: 'ti',
    tip: 'The compliment had you as the subject.',
  },
  {
    mode: 'odgovor',
    q: 'Ugodan ti vikend! — Hvala, i ____.',
    en: 'Have a nice weekend! — Thanks, you too.',
    opts: ['tebi', 'ti', 'tebe', 'te'],
    answer: 'tebi',
    tip: 'A wish with a dative is answered in the dative.',
  },
  {
    mode: 'odgovor',
    q: 'Ta ti jakna stoji. — Ma ____, stara je.',
    en: 'That jacket suits you. — Oh, come on, it’s old.',
    opts: ['daj', 'dam', 'daje', 'dao'],
    answer: 'daj',
    tip: 'The modest Ma daj.',
  },
  {
    mode: 'odgovor',
    q: 'Hvala, drago mi je da ti se ____.',
    en: 'Thanks, I am glad you like it.',
    opts: ['sviđa', 'sviđaš', 'sviđam', 'sviđati'],
    answer: 'sviđa',
    tip: 'The thing liked is the subject.',
  },
  {
    mode: 'odgovor',
    q: 'Lijepo izgledaš. — ____!',
    en: 'You look lovely. — Thank you!',
    opts: ['Hvala', 'Molim', 'Nema na čemu', 'Izvoli'],
    answer: 'Hvala',
    tip: 'A compliment is answered with thanks.',
  },
  {
    mode: 'odgovor',
    q: 'Ugodan vam dan! — Hvala, i ____.',
    en: 'Have a nice day! — Thank you, you too.',
    opts: ['vama', 'vi', 'vas', 'vam'],
    answer: 'vama',
    tip: 'The polite dative, long form.',
  },
  {
    mode: 'odgovor',
    q: 'Lijepo izgledate, gospođo! — Hvala, i ____!',
    en: 'You look lovely, madam! — Thank you, so do you!',
    opts: ['vi', 'vama', 'vas', 'vam'],
    answer: 'vi',
    tip: 'The compliment had Vi as the subject.',
  },
  {
    mode: 'odgovor',
    q: 'Ta ti boja stoji. — Hvala, drago ____ je.',
    en: 'That colour suits you. — Thanks, I am glad.',
    opts: ['mi', 'me', 'ja', 'meni'],
    answer: 'mi',
    tip: 'drago + the short dative.',
  },
];
