// src/data/drills/iDeclensionDrill.ts
//
// B2 I-DECLENSION — the drill for the `i-declension` lesson.
//
// `isklonidba` already exists and is exactly this paradigm, but it is C1, so a
// B2 learner cannot open it — and it was tagged `instrumental`, which is simply
// wrong: the i-declension is a whole declension class, not a case. Both are
// fixed here; this bank is the B2-reachable half, and the C1 drill keeps the
// primary route.
//
// Why it earns a drill: this is the class that makes a learner doubt everything
// they know about gender. `stvar`, `noć`, `ljubav`, `riječ` end in a consonant
// and are FEMININE, and every abstract noun in -ost belongs here — which is
// most of the abstract vocabulary a B2 learner is starting to need. The
// paradigm itself is shorter than the -a class, not harder: three cases share
// one ending.
//
// Three modes:
//   prepoznaj — which nouns belong to this class
//   padezi    — the endings, and the -i that covers three cases at once
//   slaganje  — adjectives still agree as feminine

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const I_DECLENSION_MODE_LABELS: Record<string, string> = {
  prepoznaj: '🔍 Koja je vrsta',
  padezi: '📐 Nastavci',
  slaganje: '🤝 Slaganje',
};

export const I_DECLENSION_DRILL_DATA: ModeDrillItem[] = [
  // ── prepoznaj ─────────────────────────────────────────────────────────────
  {
    mode: 'prepoznaj',
    q: 'Kojeg je roda "stvar"?',
    en: 'What gender is stvar?',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'ovisi'],
    answer: 'ženskoga',
    tip: 'It ends in a consonant and is feminine — the whole difficulty of this class.',
  },
  {
    mode: 'prepoznaj',
    q: 'Kojoj vrsti pripada "radost"?',
    en: 'Which class does radost belong to?',
    opts: ['i-sklonidbi', 'a-sklonidbi', 'e-sklonidbi', 'nijednoj'],
    answer: 'i-sklonidbi',
    tip: 'EVERY noun in -ost belongs here: radost, mladost, mogućnost, vrijednost.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koja riječ NIJE i-sklonidbe?',
    en: 'Which one is not in this class?',
    opts: ['knjiga', 'noć', 'ljubav', 'riječ'],
    answer: 'knjiga',
    tip: 'Knjiga ends in -a, so it is the ordinary feminine class.',
  },
  {
    mode: 'prepoznaj',
    q: 'Po čemu prepoznajemo ovu vrstu?',
    en: 'How do you recognise the class?',
    opts: [
      'ženski rod, završava suglasnikom',
      'muški rod na -a',
      'srednji rod na -e',
      'po naglasku',
    ],
    answer: 'ženski rod, završava suglasnikom',
    tip: 'Feminine and consonant-final. Those two facts together define it.',
  },
  {
    mode: 'prepoznaj',
    q: 'Kojeg je roda "misao"?',
    en: 'What gender is misao?',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'ovisi o rečenici'],
    answer: 'ženskoga',
    tip: 'Misao is feminine and belongs here; its stem is misl- (genitive misli).',
  },
  {
    mode: 'prepoznaj',
    q: 'Koja je od ovih riječi i-sklonidbe?',
    en: 'Which of these belongs to the class?',
    opts: ['pomoć', 'pomoćnik', 'pomaganje', 'pomoćni'],
    answer: 'pomoć',
    tip: 'Pomoć — feminine, consonant-final.',
  },
  {
    mode: 'prepoznaj',
    q: 'Je li ova sklonidba dulja ili kraća od a-sklonidbe?',
    en: 'Is this paradigm longer or shorter?',
    opts: ['kraća', 'dulja', 'jednaka', 'nema pravila'],
    answer: 'kraća',
    tip: 'Shorter — three cases share one ending. It is smaller, not harder.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koja riječ pripada i-sklonidbi?',
    en: 'Which one belongs here?',
    opts: ['večer', 'večera', 'večernji', 'navečer'],
    answer: 'večer',
    tip: 'Večer (evening) is feminine i-declension; večera (dinner) is the -a class.',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Nemam ____. (stvar)',
    en: 'I do not have the thing.',
    opts: ['stvari', 'stvara', 'stvaru', 'stvarom'],
    answer: 'stvari',
    tip: 'Genitive singular: -i.',
  },
  {
    mode: 'padezi',
    q: 'Radujem se ____. (ljubav)',
    en: 'I look forward to love.',
    opts: ['ljubavi', 'ljubava', 'ljubavu', 'ljubavom'],
    answer: 'ljubavi',
    tip: 'Dative singular: also -i.',
  },
  {
    mode: 'padezi',
    q: 'Govorimo o ____. (mogućnost)',
    en: 'We are talking about the possibility.',
    opts: ['mogućnosti', 'mogućnosta', 'mogućnostu', 'mogućnošću'],
    answer: 'mogućnosti',
    tip: 'Locative singular: -i again. Genitive, dative and locative are identical.',
  },
  {
    mode: 'padezi',
    q: 'Vidim ____. (noć)',
    en: 'I see the night.',
    opts: ['noć', 'noći', 'noću', 'noćom'],
    answer: 'noć',
    tip: 'The accusative is IDENTICAL to the nominative — nothing changes at all.',
  },
  {
    mode: 'padezi',
    q: 'Koliko padeža dijeli nastavak -i u jednini?',
    en: 'How many singular cases share -i?',
    opts: ['tri', 'dva', 'četiri', 'jedan'],
    answer: 'tri',
    tip: 'Genitive, dative and locative. Learn one ending and three cases are done.',
  },
  {
    mode: 'padezi',
    q: 'Putujem ____. (noć — instrumental)',
    en: 'I travel by night.',
    opts: ['noću', 'noć', 'noći', 'noćom'],
    answer: 'noću',
    tip: 'The instrumental is -ju or -i; noću has become the fixed adverb for "at night".',
  },
  {
    mode: 'padezi',
    q: 'Ispunjen ____. (ljubav — instrumental)',
    en: 'Filled with love.',
    opts: ['ljubavlju', 'ljubavi', 'ljubavom', 'ljubav'],
    answer: 'ljubavlju',
    tip: 'The -ju ending triggers jotation: ljubav → ljubavlju.',
  },
  {
    mode: 'padezi',
    q: 'Imam mnogo ____. (stvar — genitiv množine)',
    en: 'I have a lot of things.',
    opts: ['stvari', 'stvara', 'stvarova', 'stvarima'],
    answer: 'stvari',
    tip: 'Genitive plural is also -i — which is why context does so much work here.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: '____ stvar. (velik)',
    en: 'a big thing',
    opts: ['velika', 'velik', 'veliko', 'veliki'],
    answer: 'velika',
    tip: 'Feminine agreement, despite the consonant ending: velika stvar.',
  },
  {
    mode: 'slaganje',
    q: '____ noć. (dug)',
    en: 'a long night',
    opts: ['duga', 'dug', 'dugo', 'dugi'],
    answer: 'duga',
    tip: 'duga noć — the adjective tells you the gender the noun hides.',
  },
  {
    mode: 'slaganje',
    q: 'To je ____ mogućnost. (jedini)',
    en: 'That is the only possibility.',
    opts: ['jedina', 'jedini', 'jedino', 'jedinu'],
    answer: 'jedina',
    tip: 'Feminine again: jedina mogućnost.',
  },
  {
    mode: 'slaganje',
    q: 'U ____ noći. (hladan)',
    en: 'in the cold night',
    opts: ['hladnoj', 'hladnom', 'hladnu', 'hladna'],
    answer: 'hladnoj',
    tip: 'Locative feminine on the adjective, -i on the noun: u hladnoj noći.',
  },
  {
    mode: 'slaganje',
    q: 'Zašto je slaganje ovdje zbunjujuće?',
    en: 'Why is agreement confusing here?',
    opts: [
      'imenica izgleda muški, a ženskoga je roda',
      'pridjev se ne mijenja',
      'nema pravila',
      'rod ovisi o padežu',
    ],
    answer: 'imenica izgleda muški, a ženskoga je roda',
    tip: 'The noun gives no clue; the adjective is what shows the gender.',
  },
  {
    mode: 'slaganje',
    q: '____ riječ. (nov)',
    en: 'a new word',
    opts: ['nova', 'nov', 'novo', 'novi'],
    answer: 'nova',
    tip: 'nova riječ.',
  },
  {
    mode: 'slaganje',
    q: 'Ta ____ je bila teška. (odluka → misao)',
    en: 'That thought was hard.',
    opts: ['misao', 'misla', 'mislu', 'misli'],
    answer: 'misao',
    tip: 'Nominative singular: misao. The past participle bila also agrees as feminine.',
  },
  {
    mode: 'slaganje',
    q: 'Ljubav je ____. (velik)',
    en: 'Love is great.',
    opts: ['velika', 'velik', 'veliko', 'veliki'],
    answer: 'velika',
    tip: 'Predicate adjectives agree too: ljubav je velika.',
  },
];
