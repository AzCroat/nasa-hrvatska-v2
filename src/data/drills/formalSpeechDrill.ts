// src/data/drills/formalSpeechDrill.ts
//
// C1 FORMAL SPEECH & CEREMONY — the drill for the `formal-speech` lesson.
//
// A learner who can argue at C1 can still be handed a glass at a wedding and
// have nothing to say, because ceremonial Croatian is FORMULAIC and the
// formulas are not derivable. *Dragi prijatelji* or *Poštovani uzvanici*, then
// *Dopustite mi da kažem nekoliko riječi*, then the address, the reason and the
// wish — and then stop. Short is correct here; a long toast is a mistake, not
// generosity.
//
// One piece of grammar carries real weight: *NAZDRAVITI TAKES THE DATIVE*.
// *Nazdravljam mladencima*, not the accusative a learner reaches for by analogy
// with English "toast someone".
//
// And condolences are *sućut*, and only *sućut* — *Moja iskrena sućut*. There
// is no second option and improvising one at a funeral is the worst possible
// moment to be inventive.
//
// Three modes:
//   oslovljavanje — opening a formal address
//   nazdravljanje — the toast, and the dative it takes
//   prigode       — the right formula for each occasion

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const FORMAL_SPEECH_MODE_LABELS: Record<string, string> = {
  oslovljavanje: '🎙️ Oslovljavanje',
  nazdravljanje: '🥂 Zdravica',
  prigode: '📅 Prigode',
};

export const FORMAL_SPEECH_DRILL_DATA: ModeDrillItem[] = [
  // ── oslovljavanje ─────────────────────────────────────────────────────────
  {
    mode: 'oslovljavanje',
    q: 'Kako se oslovljava svečani skup?',
    en: 'Addressing a formal gathering:',
    opts: ['Poštovani uzvanici,', 'Dragi svi,', 'Bok svima,', 'Ljudi,'],
    answer: 'Poštovani uzvanici,',
    tip: 'Poštovani for a formal room; dragi prijatelji among friends.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Kako se traži riječ na svečanosti?',
    en: 'Asking for the floor:',
    opts: [
      'Dopustite mi da kažem nekoliko riječi.',
      'Mogu li nešto reći?',
      'Htio bih govoriti.',
      'Slušajte me.',
    ],
    answer: 'Dopustite mi da kažem nekoliko riječi.',
    tip: 'The fixed formula — and da plus the present, because the subject changes.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Nekoliko ____ . (riječ)',
    en: 'a few words',
    opts: ['riječi', 'riječ', 'riječima', 'riječju'],
    answer: 'riječi',
    tip: 'Genitive plural after a quantity — and riječ is i-declension.',
  },
  {
    mode: 'oslovljavanje',
    q: 'U ____ cijele obitelji…',
    en: 'On behalf of the whole family…',
    opts: ['ime', 'imenu', 'imena', 'imenom'],
    answer: 'ime',
    tip: 'u ime plus the genitive of who you speak for.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Koja je konvencionalna duljina zdravice?',
    en: 'How long should a toast be?',
    opts: ['dvije-tri rečenice', 'jedna minuta', 'pet minuta', 'koliko treba'],
    answer: 'dvije-tri rečenice',
    tip: 'Address, reason, wish. Short is correct, not curt.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Koja su tri dijela zdravice?',
    en: 'The three parts:',
    opts: [
      'oslovljavanje, razlog, želja',
      'uvod, razrada, zaključak',
      'pozdrav, šala, kraj',
      'zahvala, priča, nazdravljanje',
    ],
    answer: 'oslovljavanje, razlog, želja',
    tip: 'Everything else is optional and most of it is a mistake.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Kako govornik iz dijaspore razoruža slušatelje?',
    en: 'A diaspora speaker disarms a room with:',
    opts: [
      'Oprostite na mom hrvatskom…',
      'Govorit ću na engleskom.',
      'Ne znam dobro hrvatski.',
      'Bit ću kratak jer ne znam.',
    ],
    answer: 'Oprostite na mom hrvatskom…',
    tip: 'Disarming, not embarrassing — and the room is on your side from the first line.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Koji padež traži "oprostite na"?',
    en: 'Which case after oprostite na?',
    opts: ['lokativ', 'akuzativ', 'genitiv', 'dativ'],
    answer: 'lokativ',
    tip: 'na plus the locative — the same government as hvala na.',
  },

  // ── nazdravljanje ─────────────────────────────────────────────────────────
  {
    mode: 'nazdravljanje',
    q: 'Nazdravljam ____. (mladenci)',
    en: 'I raise a toast to the newlyweds.',
    opts: ['mladencima', 'mladence', 'mladenaca', 'mladenci'],
    answer: 'mladencima',
    tip: 'NAZDRAVITI TAKES THE DATIVE — not the accusative English suggests.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Koji padež traži "nazdraviti"?',
    en: 'Which case?',
    opts: ['dativ', 'akuzativ', 'genitiv', 'instrumental'],
    answer: 'dativ',
    tip: 'You drink TO someone, and Croatian marks it.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Htio bih ____ našim domaćinima.',
    en: 'I would like to toast our hosts.',
    opts: ['nazdraviti', 'nazdravljam', 'nazdravlja', 'nazdravljen'],
    answer: 'nazdraviti',
    tip: 'The infinitive after the conditional of htjeti.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Što se kaže pri kucanju čašama?',
    en: 'On clinking glasses:',
    opts: ['Živjeli!', 'Dobar tek!', 'Čestitam!', 'Sretno!'],
    answer: 'Živjeli!',
    tip: 'Or U zdravlje! — and eye contact is expected.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Nazdravljam ____. (slavljenica)',
    en: 'A toast to the woman celebrating.',
    opts: ['slavljenici', 'slavljenicu', 'slavljenice', 'slavljenicom'],
    answer: 'slavljenici',
    tip: 'Dative singular feminine.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Zašto je engleski obrazac ovdje zamka?',
    en: 'Why is English the trap?',
    opts: [
      '"toast someone" sugerira akuzativ',
      'nema zamke',
      'red riječi se razlikuje',
      'vrijeme se razlikuje',
    ],
    answer: '"toast someone" sugerira akuzativ',
    tip: 'A direct object in English, a dative in Croatian.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Što znači "Još mnogo godina!"?',
    en: 'What does it mean?',
    opts: ['Many more years!', 'It has been years.', 'Years ago.', 'Every year.'],
    answer: 'Many more years!',
    tip: 'The anniversary wish.',
  },
  {
    mode: 'nazdravljanje',
    q: 'Kome se nazdravlja na umirovljenju?',
    en: 'At a retirement you toast:',
    opts: ['umirovljeniku', 'umirovljenika', 'umirovljenikom', 'umirovljenik'],
    answer: 'umirovljeniku',
    tip: 'Dative again — the case is the whole rule.',
  },

  // ── prigode ───────────────────────────────────────────────────────────────
  {
    mode: 'prigode',
    q: 'Što se kaže na sprovodu?',
    en: 'At a funeral:',
    opts: ['Moja iskrena sućut.', 'Žao mi je jako.', 'Sve najbolje.', 'Snažno vas grlim.'],
    answer: 'Moja iskrena sućut.',
    tip: 'Sućut, and only sućut. This is not the moment to improvise.',
  },
  {
    mode: 'prigode',
    q: 'Postoji li alternativa za "sućut"?',
    en: 'Is there an alternative?',
    opts: ['ne, to je jedini oblik', 'da, nekoliko', 'ovisi o kraju', 'ovisi o dobi'],
    answer: 'ne, to je jedini oblik',
    tip: 'Primite moju iskrenu sućut. Anything invented lands badly.',
  },
  {
    mode: 'prigode',
    q: 'Što se kaže mladencima?',
    en: 'To newlyweds:',
    opts: ['Sretno mladencima!', 'Čestitam vjenčanje!', 'Sve najbolje braku!', 'Živjeli mladenci!'],
    answer: 'Sretno mladencima!',
    tip: 'And the dative again.',
  },
  {
    mode: 'prigode',
    q: 'Što se kaže na krštenju?',
    en: 'At a christening:',
    opts: ['Čestitam!', 'Sretno!', 'Živjeli!', 'Sućut.'],
    answer: 'Čestitam!',
    tip: 'Čestitam covers congratulation of every kind.',
  },
  {
    mode: 'prigode',
    q: 'Što se kaže pri umirovljenju?',
    en: 'On retirement:',
    opts: [
      'Uživajte u zasluženom odmoru.',
      'Sretno dalje.',
      'Čestitam na kraju.',
      'Sve najbolje u mirovini.',
    ],
    answer: 'Uživajte u zasluženom odmoru.',
    tip: 'Zaslužen — deserved. The word does the work.',
  },
  {
    mode: 'prigode',
    q: 'Čestitam ti na ____! (obljetnica)',
    en: 'Congratulations on the anniversary!',
    opts: ['obljetnici', 'obljetnicu', 'obljetnice', 'obljetnicom'],
    answer: 'obljetnici',
    tip: 'čestitati NA plus the locative.',
  },
  {
    mode: 'prigode',
    q: 'Što je "uzvanik"?',
    en: 'What is an uzvanik?',
    opts: ['an invited guest', 'a speaker', 'a host', 'a witness'],
    answer: 'an invited guest',
    tip: 'From zvati — and Poštovani uzvanici opens a formal room.',
  },
  {
    mode: 'prigode',
    q: 'Zašto je kratka zdravica bolja?',
    en: 'Why keep it short?',
    opts: ['takva je konvencija', 'nitko ne sluša', 'lakše je', 'nije bolja'],
    answer: 'takva je konvencija',
    tip: 'Two or three sentences. Length reads as self-indulgence, not warmth.',
  },
];
