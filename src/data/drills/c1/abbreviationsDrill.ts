// src/data/drills/c1/abbreviationsDrill.ts
//
// C1 ABBREVIATIONS — the drill for the `abbreviations` lesson, per Hrvatski pravopis.
//
// Three modes:
//   kratice — shortened words take a full stop: npr., tj., itd., tzv., str., br., st.
//   pokrate — initialisms in capitals, declined after a hyphen: HNK-u, EU-a, HRT-a
//   mjere   — symbols without a full stop (km, kg, h, min, EUR), ordinals with one
//
// Nothing tests a point where usage differs (the space before %, HINA or Hina, the
// spacing of a date), and the English glosses spell out the organisations rather than
// quoting the abbreviation the item asks for.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ABBREVIATIONS_MODE_LABELS: Record<string, string> = {
  kratice: '✒️ Kratice',
  pokrate: '🏛️ Pokrate',
  mjere: '📐 Mjere i brojevi',
};

export const ABBREVIATIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── kratice ───────────────────────────────────────────────────────────────
  {
    mode: 'kratice',
    q: 'U parku raste mnogo drveća, ____ hrastovi i bukve.',
    en: 'Many trees grow in the park, for example oaks and beeches.',
    opts: ['npr.', 'npr', 'n.pr.', 'Npr.'],
    answer: 'npr.',
    tip: 'A kratica: small letters and one full stop.',
  },
  {
    mode: 'kratice',
    q: 'Ostao je dvije godine, ____ dvadeset četiri mjeseca.',
    en: 'He stayed two years, that is, twenty-four months.',
    opts: ['tj.', 't.j.', 'tj', 'TJ.'],
    answer: 'tj.',
    tip: 'to jest → tj., with one full stop.',
  },
  {
    mode: 'kratice',
    q: 'Kupili smo kruh, mlijeko, sir ____',
    en: 'We bought bread, milk, cheese and so on.',
    opts: ['itd.', 'i.t.d.', ', itd.', 'itd..'],
    answer: 'itd.',
    tip: 'No comma before itd., and its full stop also ends the sentence.',
  },
  {
    mode: 'kratice',
    q: 'To je ____ zlatno doba hrvatskog filma.',
    en: 'That is the so-called golden age of Croatian film.',
    opts: ['tzv.', 'tkzv.', 't.z.v.', 'tzv'],
    answer: 'tzv.',
    tip: 'takozvani → tzv.',
  },
  {
    mode: 'kratice',
    q: 'Pročitajte tekst na ____ 45.',
    en: 'Read the text on page 45.',
    opts: ['str.', 'str', 'Str.', 'st.'],
    answer: 'str.',
    tip: 'stranica → str.; st. stands for stoljeće.',
  },
  {
    mode: 'kratice',
    q: 'Crkva je sagrađena u 12. ____',
    en: 'The church was built in the 12th century.',
    opts: ['st.', 'st', 'St.', 's.t.'],
    answer: 'st.',
    tip: 'stoljeće → st.; its full stop also ends the sentence.',
  },
  {
    mode: 'kratice',
    q: 'Prodaju voće, povrće ____',
    en: 'They sell fruit, vegetables and the like.',
    opts: ['i sl.', 'isl.', 'i sl', 'i.sl.'],
    answer: 'i sl.',
    tip: 'i slično → i sl., two words.',
  },
  {
    mode: 'kratice',
    q: 'Imate li račun ____ 123?',
    en: 'Do you have invoice number 123?',
    opts: ['br.', 'br', 'Br.', 'b.r.'],
    answer: 'br.',
    tip: 'broj → br.',
  },
  {
    mode: 'kratice',
    q: 'Grad je osnovan u 4. st. ____',
    en: 'The town was founded in the 4th century BC.',
    opts: ['pr. Kr.', 'pr.Kr', 'Pr. kr.', 'p.K.'],
    answer: 'pr. Kr.',
    tip: 'prije Krista → pr. Kr., with a capital for the name.',
  },

  // ── pokrate ───────────────────────────────────────────────────────────────
  {
    mode: 'pokrate',
    q: 'Gledali smo operu u ____.',
    en: 'We watched an opera at the Croatian National Theatre.',
    opts: ['HNK-u', 'HNKu', 'H.N.K.-u', 'Hnk-u'],
    answer: 'HNK-u',
    tip: 'Capitals, no full stops, the ending after a hyphen.',
  },
  {
    mode: 'pokrate',
    q: 'Hrvatska je članica ____ od 2013.',
    en: 'Croatia has been a member of the European Union since 2013.',
    opts: ['EU-a', 'EUa', 'E.U.-a', 'Eu-a'],
    answer: 'EU-a',
    tip: 'Read e-u, so the genitive is EU-a.',
  },
  {
    mode: 'pokrate',
    q: 'O tome se dugo raspravljalo u ____.',
    en: 'That was discussed at length in the United Nations.',
    opts: ['UN-u', 'UNu', 'U.N.-u', 'Un-u'],
    answer: 'UN-u',
    tip: 'The locative ending after a hyphen.',
  },
  {
    mode: 'pokrate',
    q: 'Utakmica je na programu ____.',
    en: 'The match is on Croatian Radiotelevision.',
    opts: ['HRT-a', 'HRTa', 'H.R.T.-a', 'Hrt-a'],
    answer: 'HRT-a',
    tip: 'The genitive ending after a hyphen.',
  },
  {
    mode: 'pokrate',
    q: 'Zemlje članice ____ sastale su se u Bruxellesu.',
    en: 'The member countries of the North Atlantic alliance met in Brussels.',
    opts: ['NATO-a', 'NATOa', 'N.A.T.O.-a', 'NATO.-a'],
    answer: 'NATO-a',
    tip: 'Even a pokrata read as a word takes its ending after a hyphen when written in capitals.',
  },
  {
    mode: 'pokrate',
    q: 'Radi na ____ već deset godina.',
    en: 'She has worked at Croatian Radiotelevision for ten years.',
    opts: ['HRT-u', 'HRTu', 'HRT.-u', 'H.R.T.-u'],
    answer: 'HRT-u',
    tip: 'The locative ending after a hyphen.',
  },
  {
    mode: 'pokrate',
    q: 'Razgovarao sam s ____ Babićem.',
    en: 'I spoke with Dr Babić.',
    opts: ['dr.', 'dr.-om', 'drom.', 'Dr.'],
    answer: 'dr.',
    tip: 'A kratica takes no ending; the surname carries the instrumental.',
  },
  {
    mode: 'pokrate',
    q: 'Predavanje drži ____ Horvat.',
    en: 'Professor Horvat is giving the lecture.',
    opts: ['prof.', 'prof', 'Prof.', 'p.r.o.f.'],
    answer: 'prof.',
    tip: 'Inside a sentence the title is written in small letters, with a full stop.',
  },

  // ── mjere ─────────────────────────────────────────────────────────────────
  {
    mode: 'mjere',
    q: 'Do vrha imamo još 5 ____ hoda.',
    en: 'We still have five kilometres to walk to the summit.',
    opts: ['km', 'km.', 'Km', 'K.M.'],
    answer: 'km',
    tip: 'A unit symbol: small letters, no full stop.',
  },
  {
    mode: 'mjere',
    q: 'Paket od 3 ____ stigao je jučer.',
    en: 'The three-kilogram parcel arrived yesterday.',
    opts: ['kg', 'kg.', 'Kg', 'KG.'],
    answer: 'kg',
    tip: 'A unit symbol takes no full stop.',
  },
  {
    mode: 'mjere',
    q: 'Sastanak u 10 ____ održat će se u velikoj dvorani.',
    en: 'The ten o’clock meeting will be held in the main hall.',
    opts: ['h', 'h.', 'H', 'H.'],
    answer: 'h',
    tip: 'The symbol for the hour: h, no full stop.',
  },
  {
    mode: 'mjere',
    q: 'Trčao je 30 ____ bez stanke.',
    en: 'He ran for thirty minutes without a break.',
    opts: ['min', 'min.', 'Min', 'MIN.'],
    answer: 'min',
    tip: 'min is a symbol: no full stop.',
  },
  {
    mode: 'mjere',
    q: 'Cijena je 15 ____ po osobi.',
    en: 'The price is fifteen euros per person.',
    opts: ['EUR', 'Eur.', 'E.U.R.', 'eur.'],
    answer: 'EUR',
    tip: 'The currency code: capitals, no full stop.',
  },
  {
    mode: 'mjere',
    q: 'Torba teži ____ kg.',
    en: 'The bag weighs two and a half kilograms.',
    opts: ['2,5', '2.5', '2;5', '2-5'],
    answer: '2,5',
    tip: 'Croatian writes a decimal comma.',
  },
  {
    mode: 'mjere',
    q: 'Hrvatska je ušla u Europsku uniju ____ srpnja 2013.',
    en: 'Croatia joined the European Union on the first of July 2013.',
    opts: ['1.', '1', '1-og', '1-vog'],
    answer: '1.',
    tip: 'An ordinal number takes a full stop.',
  },
  {
    mode: 'mjere',
    q: 'Ta je crkva iz ____ stoljeća.',
    en: 'That church is from the fifteenth century.',
    opts: ['15.', '15', '15-og', '15-tog'],
    answer: '15.',
    tip: 'The ordinal takes a full stop and no ending.',
  },
];
