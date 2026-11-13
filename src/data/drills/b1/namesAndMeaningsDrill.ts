// src/data/drills/b1/namesAndMeaningsDrill.ts
//
// B1 NAMES AND WHAT THEY MEAN — the drill for the `names-and-meanings` lesson.
//
// Names are words (Zlatko from zlato, Mirna from miran), they carry a name day, and
// they decline. The trap the drill keeps returning to: Ivana is both the accusative of
// the man Ivan and the woman's name, whose accusative is Ivanu; a woman's surname in a
// consonant never changes (s gospođom Horvat).
//
// Three modes:
//   znacenje — what a name means and where it comes from
//   padezi   — names in the cases, po + locative, women's surnames
//   imendan  — name days and things named after people

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NAMES_AND_MEANINGS_MODE_LABELS: Record<string, string> = {
  znacenje: '💡 Značenje',
  padezi: '🔤 Imena u padežima',
  imendan: '🎉 Imendan',
};

export const NAMES_AND_MEANINGS_DRILL_DATA: ModeDrillItem[] = [
  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Koje ime dolazi od riječi za žuti plemeniti metal?',
    en: 'Which name comes from the word for gold?',
    opts: ['Zlatko', 'Zoran', 'Zvonimir', 'Zdenko'],
    answer: 'Zlatko',
    tip: 'Zlatko comes from zlato, gold.',
  },
  {
    mode: 'znacenje',
    q: 'Ime Mirna dolazi od pridjeva ____.',
    en: 'The name Mirna comes from the adjective meaning calm.',
    opts: ['miran', 'mio', 'mirisan', 'mlad'],
    answer: 'miran',
    tip: 'miran, mirna, mirno — calm, peaceful.',
  },
  {
    mode: 'znacenje',
    q: 'Ime Vedran dolazi od pridjeva ____.',
    en: 'The name Vedran comes from the adjective for a clear sky.',
    opts: ['vedar', 'velik', 'veseo', 'vrijedan'],
    answer: 'vedar',
    tip: 'vedro nebo is a cloudless sky; a vedar person is cheerful.',
  },
  {
    mode: 'znacenje',
    q: 'Ime Snježana povezano je s riječju ____.',
    en: 'The name Snježana is linked to the word for snow.',
    opts: ['snijeg', 'san', 'sunce', 'snaga'],
    answer: 'snijeg',
    tip: 'snijeg — snow; the ije becomes je in Snježana.',
  },
  {
    mode: 'znacenje',
    q: 'Tihomir = tih + ____',
    en: 'Tihomir is built from the words for quiet and peace.',
    opts: ['mir', 'mira', 'miran', 'mirno'],
    answer: 'mir',
    tip: 'Many old names end in -mir, the noun for peace.',
  },
  {
    mode: 'znacenje',
    q: 'Branimir = ____ + mir',
    en: 'The first part of the name is the verb meaning to defend.',
    opts: ['braniti', 'brati', 'brijati', 'brojiti'],
    answer: 'braniti',
    tip: 'braniti — to defend.',
  },
  {
    mode: 'znacenje',
    q: 'Ljubica je žensko ime, ali i naziv za jedan ____.',
    en: 'Ljubica is a girl’s name, but also the name of a flower.',
    opts: ['cvijet', 'grad', 'otok', 'ples'],
    answer: 'cvijet',
    tip: 'ljubica — the violet.',
  },
  {
    mode: 'znacenje',
    q: 'Što je prezime Petrović izvorno značilo?',
    en: 'What did this surname originally mean?',
    opts: ['son of Petar', 'town of Petar', 'friend of Petar', 'servant of Petar'],
    answer: 'son of Petar',
    tip: '-ić was a diminutive: little Petar, Petar’s son.',
  },
  {
    mode: 'znacenje',
    q: 'Najčešće prezime u Hrvatskoj je ____.',
    en: 'The most common surname in Croatia.',
    opts: ['Horvat', 'Tesla', 'Modrić', 'Penkala'],
    answer: 'Horvat',
    tip: 'Horvat — an old northern form of the word Hrvat.',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Jučer sam u gradu vidio ____.',
    en: 'Yesterday in town I saw Ivan (the man).',
    opts: ['Ivana', 'Ivanu', 'Ivan', 'Ivanom'],
    answer: 'Ivana',
    tip: 'The man Ivan is animate: his accusative looks like the genitive.',
  },
  {
    mode: 'padezi',
    q: 'Na koncertu sam srela ____.',
    en: 'At the concert I met Ivana (the woman).',
    opts: ['Ivana', 'Ivanu', 'Ivani', 'Ivanom'],
    answer: 'Ivanu',
    tip: 'The woman Ivana declines like žena: ženu, Ivanu.',
  },
  {
    mode: 'padezi',
    q: 'Idem u kino s ____.',
    en: 'I am going to the cinema with Luka.',
    opts: ['Lukom', 'Lukem', 'Luki', 'Luku'],
    answer: 'Lukom',
    tip: 's + the instrumental; Luka takes the endings of žena.',
  },
  {
    mode: 'padezi',
    q: 'Ovo je poklon za ____.',
    en: 'This is a present for Nikola.',
    opts: ['Nikolu', 'Nikolom', 'Nikoli', 'Nikole'],
    answer: 'Nikolu',
    tip: 'za + the accusative: like ženu.',
  },
  {
    mode: 'padezi',
    q: 'Razgovarao sam sa susjedom, gospođom ____.',
    opts: ['Horvat', 'Horvatom', 'Horvata', 'Horvatu'],
    answer: 'Horvat',
    tip: 'A woman’s surname that ends in a consonant never changes.',
  },
  {
    mode: 'padezi',
    q: 'Razgovarao sam sa susjedom, gospodinom ____.',
    opts: ['Horvatom', 'Horvat', 'Horvata', 'Horvatu'],
    answer: 'Horvatom',
    tip: 'A man’s surname declines: s + the instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Pismo je za gospođu ____.',
    opts: ['Babić', 'Babića', 'Babiću', 'Babićem'],
    answer: 'Babić',
    tip: 'gospođa changes to gospođu, her surname does not.',
  },
  {
    mode: 'padezi',
    q: 'Sretan imendan, ____!',
    en: 'Happy name day, Ivan!',
    opts: ['Ivane', 'Ivana', 'Ivanu', 'Ivanom'],
    answer: 'Ivane',
    tip: 'Calling to someone: the vocative.',
  },
  {
    mode: 'padezi',
    q: 'Dobio je ime po ____.',
    en: 'He was named after his grandfather.',
    opts: ['djedu', 'djed', 'djeda', 'djedom'],
    answer: 'djedu',
    tip: 'po in the sense "named after" takes the locative.',
  },
  {
    mode: 'padezi',
    q: 'Nazvali su je po ____.',
    en: 'They named her after her grandmother.',
    opts: ['baki', 'baka', 'baku', 'bakom'],
    answer: 'baki',
    tip: 'po + the locative: baki.',
  },
  {
    mode: 'padezi',
    q: 'Bili smo kod ____ na ručku.',
    en: 'We had lunch at Marko’s place.',
    opts: ['Marka', 'Marku', 'Markom', 'Marke'],
    answer: 'Marka',
    tip: 'kod + the genitive; the -o drops.',
  },

  // ── imendan ───────────────────────────────────────────────────────────────
  {
    mode: 'imendan',
    q: 'Ivan slavi imendan na Ivanje, ____.',
    opts: ['24. lipnja', '6. prosinca', '19. ožujka', '11. studenoga'],
    answer: '24. lipnja',
    tip: 'Ivanje, the feast of John the Baptist, is in midsummer.',
  },
  {
    mode: 'imendan',
    q: 'Nikola slavi imendan ____.',
    opts: ['6. prosinca', '24. lipnja', '29. lipnja', '15. kolovoza'],
    answer: '6. prosinca',
    tip: 'Sveti Nikola comes early in December.',
  },
  {
    mode: 'imendan',
    q: 'Josip slavi imendan ____.',
    opts: ['19. ožujka', '26. prosinca', '11. studenoga', '29. lipnja'],
    answer: '19. ožujka',
    tip: 'Sveti Josip is in spring.',
  },
  {
    mode: 'imendan',
    q: 'Kako nekome čestitaš imendan?',
    en: 'How do you wish someone a happy name day?',
    opts: ['Sretan imendan!', 'Sretna imendan!', 'Sretno imendan!', 'Sretni imendanu!'],
    answer: 'Sretan imendan!',
    tip: 'imendan is masculine: sretan, as in Sretan rođendan!',
  },
  {
    mode: 'imendan',
    q: 'Riječ kravata dolazi od imena ____.',
    en: 'The word for necktie comes from the name of a people.',
    opts: ['Hrvata', 'Francuza', 'Talijana', 'Mađara'],
    answer: 'Hrvata',
    tip: 'French cravate comes from Croate.',
  },
  {
    mode: 'imendan',
    q: 'Penkala je dobila ime po izumitelju ____ Penkali.',
    en: 'The penkala is named after its inventor.',
    opts: ['Slavoljubu', 'Slavoljub', 'Slavoljuba', 'Slavoljubom'],
    answer: 'Slavoljubu',
    tip: 'po + the locative, and both words agree.',
  },
  {
    mode: 'imendan',
    q: 'Jedinica za magnetsku indukciju dobila je ime po ____.',
    en: 'The unit of magnetic flux density is named after the inventor.',
    opts: ['Nikoli Tesli', 'Nikola Tesla', 'Nikolu Teslu', 'Nikolom Teslom'],
    answer: 'Nikoli Tesli',
    tip: 'po + the locative; Tesla declines like žena.',
  },
];
