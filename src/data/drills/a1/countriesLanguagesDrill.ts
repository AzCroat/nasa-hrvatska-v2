// src/data/drills/a1/countriesLanguagesDrill.ts
//
// A1 WHERE YOU ARE FROM — the drill for the `countries-languages` lesson (A1, 13).
//
// Follows Hrvatski za početnike 1, pages 17–18 ("Što ste po nacionalnosti?"): the taxi
// dialogue ("Vi ste stranac?" — "Ja sam Čileanac."), Beata and Francesca ("Ti si
// Talijanka?" — "A ti si Hrvatica?" — "Ne, nisam. Ja sam Poljakinja."), the table zemlja ·
// stanovnik · stanovnica (Amerika · Amerikanac · Amerikanka …) and the pattern "Ja sam
// Hrvat, a ona je Hrvatica. Mi smo Hrvati."; the "Ja sam iz Amerike, iz New Yorka" cards
// are on pages 8–9. The book teaches country, man and woman, with more countries than the
// lesson (Poljska, Francuska, Čile, Kina); the language column, the lower-case rule and
// the Croatian regions come from the lesson. "iz …" is used only as the learned phrase.
//
// Three modes:
//   osoba       — the man and the woman from a country
//   zemljaJezik — country, person or language
//   odakle      — Odakle si? Ja sam iz…

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COUNTRIES_LANGUAGES_MODE_LABELS: Record<string, string> = {
  osoba: '🧑 Hrvat, Hrvatica',
  zemljaJezik: '🌍 Zemlja ili jezik?',
  odakle: '🧳 Odakle si?',
};

export const COUNTRIES_LANGUAGES_DRILL_DATA: ModeDrillItem[] = [
  // ── osoba ─────────────────────────────────────────────────────────────────
  {
    mode: 'osoba',
    q: 'Tata je Talijan, a mama je ____.',
    cue: 'Both are from Italy.',
    opts: ['Talijanka', 'Talijan', 'Italija', 'talijanski'],
    answer: 'Talijanka',
    tip: 'A woman from Italy is Talijanka. Talijan is the man, Italija is the country, and talijanski is the language.',
  },
  {
    mode: 'osoba',
    q: 'On je Francuz, a ona je ____.',
    cue: 'Both are from France.',
    opts: ['Francuskinja', 'Francuz', 'Francuska', 'francuski'],
    answer: 'Francuskinja',
    tip: 'A woman from France is Francuskinja. Francuz is the man, Francuska is the country, and francuski is the language.',
  },
  {
    mode: 'osoba',
    q: 'Je li Tom Englez? — Ne, on je ____. On je iz Amerike.',
    opts: ['Amerikanac', 'Amerikanka', 'Amerika', 'engleski'],
    answer: 'Amerikanac',
    tip: 'A man from America is Amerikanac. Amerikanka is a woman, Amerika is the country, and engleski is the language he speaks, not what he is.',
  },
  {
    mode: 'osoba',
    q: 'Beata nije Hrvatica. Ona je ____, iz Poljske.',
    opts: ['Poljakinja', 'Poljak', 'Poljska', 'poljski'],
    answer: 'Poljakinja',
    tip: 'A woman from Poland is Poljakinja. Poljak is the man, Poljska is the country, and poljski is the language.',
  },
  {
    mode: 'osoba',
    q: 'On je ____, a ona je Engleskinja.',
    cue: 'Both are from England.',
    opts: ['Englez', 'Engleska', 'engleski', 'Englezi'],
    answer: 'Englez',
    tip: 'A man from England is Englez. Engleska is the country, engleski is the language, and Englezi is the plural, for several people.',
  },
  {
    mode: 'osoba',
    q: 'Je li ona Amerikanka? — Nije, ona je ____. Ona je iz Kanade.',
    opts: ['Kanađanka', 'Kanađanin', 'Kanada', 'Kanađani'],
    answer: 'Kanađanka',
    tip: 'A woman from Canada is Kanađanka. Kanađanin is the man, Kanada is the country, and Kanađani is the plural.',
  },
  {
    mode: 'osoba',
    q: 'Mi smo iz Hrvatske. Mi smo ____.',
    opts: ['Hrvati', 'Hrvat', 'Hrvatska', 'hrvatski'],
    answer: 'Hrvati',
    tip: 'mi is several people, so the nationality is plural: Mi smo Hrvati. Hrvat is one man, Hrvatska is the country, and hrvatski is the language.',
  },
  {
    mode: 'osoba',
    q: 'On je ____, a ona je Australka.',
    cue: 'Both are from Australia.',
    opts: ['Australac', 'Austrijanac', 'Australija', 'Australci'],
    answer: 'Australac',
    tip: 'A man from Australia is Australac. Austrijanac looks similar but is a man from Austria (Austrija), Australija is the country, and Australci is the plural.',
  },
  {
    mode: 'osoba',
    q: 'Pablo je iz Čilea. On je ____.',
    opts: ['Čileanac', 'Čileanka', 'Čile', 'Čileanci'],
    answer: 'Čileanac',
    tip: 'A man from Chile is Čileanac, built like Amerikanac. Čileanka is a woman, Čile is the country, and Čileanci is the plural.',
  },

  // ── zemljaJezik ───────────────────────────────────────────────────────────
  {
    mode: 'zemljaJezik',
    q: 'Njemačka je zemlja, a ____ je jezik.',
    opts: ['njemački', 'Nijemac', 'Njemica', 'Nijemci'],
    answer: 'njemački',
    tip: 'The language is the lower-case word in -ki: njemački. Nijemac is a man from Germany, Njemica is a woman, and Nijemci is the plural, the people.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Kanađanin i Kanađanka: zemlja je ____.',
    opts: ['Kanada', 'Kanade', 'Kanađani', 'Kanađanin'],
    answer: 'Kanada',
    tip: 'The country itself is Kanada. Kanade is the form you only use after iz (iz Kanade), Kanađani is the people, and Kanađanin is one man.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Englez, Amerikanac i Australac: jezik je ____.',
    opts: ['engleski', 'Engleska', 'Englez', 'Amerikanac'],
    answer: 'engleski',
    tip: 'All three speak engleski, the lower-case word for the language. Engleska is the country, and Englez and Amerikanac are people, not languages.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Koja je rečenica točno napisana?',
    en: 'Which sentence is written correctly?',
    opts: [
      'Ana je Hrvatica, a jezik je hrvatski.',
      'Ana je hrvatica, a jezik je hrvatski.',
      'Ana je Hrvatica, a jezik je Hrvatski.',
      'Ana je hrvatica, a jezik je Hrvatski.',
    ],
    answer: 'Ana je Hrvatica, a jezik je hrvatski.',
    tip: 'Croatian capitalizes the person (Hrvatica) but not the language (hrvatski). The other sentences get one or both wrong: a lower-case hrvatica, or a capital Hrvatski, as English would write it.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Ja sam ____.',
    cue: 'A woman from Croatia says what she is.',
    opts: ['Hrvatica', 'Hrvatska', 'hrvatski', 'Hrvat'],
    answer: 'Hrvatica',
    tip: 'A person says the nationality word, and a woman says Hrvatica. Hrvatska is the country, hrvatski is the language, and Hrvat is what a man says.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Što je "talijanski"?',
    opts: ['a language', 'a country', 'a man', 'a woman'],
    answer: 'a language',
    tip: 'A lower-case word in -ski is the language: talijanski is Italian. The country is Italija, the man is Talijan, and the woman is Talijanka.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Što je "Njemica"?',
    opts: [
      'a woman from Germany',
      'a man from Germany',
      'the country Germany',
      'the German language',
    ],
    answer: 'a woman from Germany',
    tip: 'Njemica is the woman. The man is Nijemac, the country is Njemačka, and the language is njemački.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Kanada: engleski i ____.',
    cue: 'Canada has two languages. Name the second one.',
    opts: ['francuski', 'Francuska', 'Francuz', 'Francuskinja'],
    answer: 'francuski',
    tip: 'The second language is francuski, lower case and ending in -ski. Francuska is the country France, Francuz is a man from France, and Francuskinja is a woman.',
  },
  {
    mode: 'zemljaJezik',
    q: 'Hrvatska je zemlja, Hrvat je čovjek, a hrvatski je ____.',
    opts: ['jezik', 'zemlja', 'grad', 'žena'],
    answer: 'jezik',
    tip: 'hrvatski, lower case and ending in -ski, is the language: jezik. The country (zemlja) is Hrvatska, a woman (žena) is Hrvatica, and a city (grad) would be a name such as Zagreb.',
  },

  // ── odakle ────────────────────────────────────────────────────────────────
  {
    mode: 'odakle',
    q: 'Odakle si? — Ja sam ____ Kanade.',
    opts: ['iz', 'u', 'na', 'je'],
    answer: 'iz',
    tip: '"From" a country is iz: Ja sam iz Kanade. u and na say where you are or where you are going, not where you come from, and je is a form of biti.',
  },
  {
    mode: 'odakle',
    q: 'Tom je Amerikanac. On je iz ____.',
    opts: ['Amerike', 'Amerika', 'Amerikanac', 'Amerikanka'],
    answer: 'Amerike',
    tip: 'After iz the country takes the ending you learned in the phrase: iz Amerike. Amerika is the dictionary form, and Amerikanac and Amerikanka are people, not the place.',
  },
  {
    mode: 'odakle',
    q: 'Ja sam iz Hrvatske, iz ____.',
    cue: 'The region is Dalmacija.',
    opts: ['Dalmacije', 'Dalmacija', 'Dalmatinac', 'Dalmatinka'],
    answer: 'Dalmacije',
    tip: 'The region follows the same pattern as the country: iz Hrvatske, iz Dalmacije. Dalmacija is the dictionary form, and Dalmatinac and Dalmatinka are a man and a woman from there.',
  },
  {
    mode: 'odakle',
    q: 'Odakle si? — ____',
    opts: ['Ja sam iz Kanade.', 'Ja sam Kanada.', 'Ja sam iz Kanada.', 'Ja sam u Kanade.'],
    answer: 'Ja sam iz Kanade.',
    tip: 'The phrase is Ja sam iz Kanade. "Ja sam Kanada" says you are the country itself, "iz Kanada" leaves the name in its dictionary form, and u does not mean "from".',
  },
  {
    mode: 'odakle',
    q: 'Petra je Hrvatica. Ona je iz ____.',
    cue: 'Her city is Zagreb.',
    opts: ['Zagreba', 'Zagreb', 'Zagrepčanka', 'Zagrepčanin'],
    answer: 'Zagreba',
    tip: 'A city after iz changes too: iz Zagreba, as in the phrase you learned. Zagreb is the dictionary form, and Zagrepčanka and Zagrepčanin are a woman and a man from Zagreb.',
  },
  {
    mode: 'odakle',
    q: 'Ja sam iz Njemačke, iz Berlina. Ja sam ____.',
    cue: 'A man is speaking.',
    opts: ['Nijemac', 'Njemica', 'Njemačka', 'njemački'],
    answer: 'Nijemac',
    tip: 'A man from Njemačka is Nijemac. Njemica is a woman, Njemačka is the country, and njemački is the language.',
  },
  {
    mode: 'odakle',
    q: 'Jeste li Vi Kanađanin? — Ne, nisam. Ja sam iz ____.',
    cue: 'He is Australac.',
    opts: ['Australije', 'Australija', 'Austrije', 'Australka'],
    answer: 'Australije',
    tip: 'An Australac is from Australija, and after iz that is Australije. Australija is the dictionary form, Austrije would be Austria, and Australka is a woman, not a place.',
  },
  {
    mode: 'odakle',
    q: 'Odakle ____? — Mi smo iz Brazila.',
    opts: ['ste', 'si', 'je', 'su'],
    answer: 'ste',
    tip: 'The answer is Mi smo, so several people were asked: Odakle ste? si is for one friend, je asks about him or her, and su asks about them.',
  },
  {
    mode: 'odakle',
    q: 'Što znači "Ja sam iz Slavonije"?',
    opts: [
      'I am from Slavonia.',
      'I am in Slavonia.',
      'I am from Slovenia.',
      'I am going to Slavonia.',
    ],
    answer: 'I am from Slavonia.',
    tip: 'iz means "from", and Slavonija is the region in eastern Croatia. "In" would be u, Slovenia is a different word (Slovenija, a neighboring country), and nothing in the sentence means "going".',
  },
];
