// src/data/drills/opinionsDrill.ts
//
// B1 OPINIONS & AGREEING — the drill for the `opinions-agreeing` lesson.
//
// The structure under the phrases is one word English speakers delete without
// noticing. Every Croatian opinion frame takes *da*, and *da* is NEVER dropped:
// *mislim da je dobro*, not **mislim je dobro*. English says "I think it's
// good" and omits "that" as a matter of course, so the omission carries
// straight over and produces a sentence with no clause boundary in it.
//
// Two idioms have to be met rather than derived. Being right is something you
// HAVE — *imaš pravo* — and a bare *ne slažem se* lands harder in Croatian than
// "I disagree" does in English, so the concession comes first: *razumijem,
// ali…*, *možda, ali…*.
//
// Three modes:
//   mislimda   — the obligatory da
//   slaganje   — agreeing, half-agreeing and disagreeing
//   ublazavanje — conceding first, and the register that goes with it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const OPINIONS_MODE_LABELS: Record<string, string> = {
  mislimda: '💭 Obavezno "da"',
  slaganje: '🤝 Slaganje',
  ublazavanje: '🕊️ Ublažavanje',
};

export const OPINIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── mislimda ──────────────────────────────────────────────────────────────
  {
    mode: 'mislimda',
    q: 'Mislim ____ je to dobra ideja.',
    en: 'I think that is a good idea.',
    opts: ['da', 'što', 'kako', 'ako'],
    answer: 'da',
    tip: 'Mislim DA — and unlike English "that", it can never be left out.',
  },
  {
    mode: 'mislimda',
    q: 'Zašto je "Mislim je to dobro" pogrešno?',
    en: 'Why is that wrong?',
    opts: ['nedostaje "da"', 'krivi red riječi', 'treba genitiv', 'nije pogrešno'],
    answer: 'nedostaje "da"',
    tip: 'English drops "that" freely. Croatian does not drop da at all.',
  },
  {
    mode: 'mislimda',
    q: 'Čini mi se ____ nije tako.',
    en: 'It seems to me that it is not so.',
    opts: ['da', 'kao', 'što', 'li'],
    answer: 'da',
    tip: 'Čini mi se da… — a softer opener, and it takes da like the rest.',
  },
  {
    mode: 'mislimda',
    q: 'Koji je oblik uljudniji i oprezniji?',
    en: 'Which is the most cautious?',
    opts: ['Rekao bih da…', 'Siguran sam da…', 'Mislim da…', 'Znam da…'],
    answer: 'Rekao bih da…',
    tip: 'The conditional hedges: rekao bih da…, "I would say that".',
  },
  {
    mode: 'mislimda',
    q: 'Po mom ____ , to nije točno.',
    en: 'In my opinion, that is not right.',
    opts: ['mišljenju', 'mišljenje', 'mišljenja', 'mišljenjem'],
    answer: 'mišljenju',
    tip: 'po plus the LOCATIVE: po mom mišljenju.',
  },
  {
    mode: 'mislimda',
    q: 'Koji izraz zvuči najformalnije?',
    en: 'Which sounds most formal?',
    opts: ['Po mom mišljenju…', 'Mislim da…', 'Čini mi se…', 'Rekao bih…'],
    answer: 'Po mom mišljenju…',
    tip: 'Fine in writing or a meeting; a shade stiff over coffee.',
  },
  {
    mode: 'mislimda',
    q: 'Nisam siguran, ____ mislim da vrijedi pokušati.',
    en: 'I am not sure, but I think it is worth a try.',
    opts: ['ali', 'nego', 'jer', 'da'],
    answer: 'ali',
    tip: 'ali joins the two halves. Nego needs a negative in front of it.',
  },
  {
    mode: 'mislimda',
    q: 'Siguran sam ____ ćemo uspjeti.',
    en: 'I am sure we will succeed.',
    opts: ['da', 'kako', 'što', 'ako'],
    answer: 'da',
    tip: 'Even the strongest frame takes da.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Kako se kaže "you are right"?',
    en: 'You are right.',
    opts: ['Imaš pravo.', 'Jesi pravo.', 'Si pravo.', 'Praviš pravo.'],
    answer: 'Imaš pravo.',
    tip: 'Being right is something you HAVE in Croatian: imati pravo.',
  },
  {
    mode: 'slaganje',
    q: 'Potpuno se ____.',
    en: 'I completely agree.',
    opts: ['slažem', 'slažim', 'složim', 'slaže'],
    answer: 'slažem',
    tip: 'slagati se → slažem se.',
  },
  {
    mode: 'slaganje',
    q: 'Koji glagol nosi "I agree"?',
    en: 'Which verb?',
    opts: ['slagati se', 'složiti', 'sladiti se', 'slijediti'],
    answer: 'slagati se',
    tip: 'And the se is not optional.',
  },
  {
    mode: 'slaganje',
    q: 'Blago neslaganje glasi ____.',
    en: 'A mild disagreement:',
    opts: ['Nisam siguran u to.', 'Ne slažem se.', 'Griješiš.', 'Nije tako.'],
    answer: 'Nisam siguran u to.',
    tip: 'It questions the claim without contradicting the person.',
  },
  {
    mode: 'slaganje',
    q: 'Koji padež traži "siguran u"?',
    en: 'Nisam siguran u ____',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'dativ'],
    answer: 'akuzativ',
    tip: 'u plus the accusative here: nisam siguran u to.',
  },
  {
    mode: 'slaganje',
    q: 'Ona ____ pravo.',
    en: 'She is right.',
    opts: ['ima', 'je', 'jest', 'stoji'],
    answer: 'ima',
    tip: 'ona ima pravo.',
  },
  {
    mode: 'slaganje',
    q: 'Kako se djelomično slažete?',
    en: 'Half-agreeing:',
    opts: ['Možda, ali…', 'Slažem se.', 'Ne slažem se.', 'Naravno.'],
    answer: 'Možda, ali…',
    tip: 'Concede the half you accept, then turn.',
  },
  {
    mode: 'slaganje',
    q: 'Kako se kaže "I do not agree"?',
    en: 'I do not agree.',
    opts: ['Ne slažem se.', 'Ne slažem.', 'Nisam slažem se.', 'Neslažem se.'],
    answer: 'Ne slažem se.',
    tip: 'ne is a separate word before the verb, and the se stays.',
  },

  // ── ublazavanje ───────────────────────────────────────────────────────────
  {
    mode: 'ublazavanje',
    q: 'Zašto se prvo popušta pa onda proturječi?',
    en: 'Why concede first?',
    opts: ['golo neslaganje zvuči oštro', 'tako je kraće', 'gramatika to traži', 'nema razloga'],
    answer: 'golo neslaganje zvuči oštro',
    tip: 'A bare ne slažem se lands harder than "I disagree" does in English.',
  },
  {
    mode: 'ublazavanje',
    q: '____ , ali mislim da nije tako.',
    en: 'I understand, but…',
    opts: ['Razumijem', 'Razumim', 'Razumjeti', 'Razumio'],
    answer: 'Razumijem',
    tip: 'Razumijem, ali… — the standard concession.',
  },
  {
    mode: 'ublazavanje',
    q: 'Koji je oblik najmekši?',
    en: 'Which is softest?',
    opts: ['Čini mi se da…', 'Siguran sam da…', 'Znam da…', 'Očito je da…'],
    answer: 'Čini mi se da…',
    tip: 'It reports an impression rather than a fact.',
  },
  {
    mode: 'ublazavanje',
    q: 'Koji padež nosi osobu u "čini mi se"?',
    en: 'Which case carries the person?',
    opts: ['dativ', 'akuzativ', 'genitiv', 'nominativ'],
    answer: 'dativ',
    tip: 'Another dative-of-experience sentence: it seems TO me.',
  },
  {
    mode: 'ublazavanje',
    q: 'Kako uljudno tražite tuđe mišljenje?',
    en: 'Asking for someone else’s view:',
    opts: ['Što ti misliš?', 'Reci mišljenje.', 'Misli!', 'Znaš li?'],
    answer: 'Što ti misliš?',
    tip: 'Or Kako ti gledaš na to? To a stranger: Što vi mislite?',
  },
  {
    mode: 'ublazavanje',
    q: 'Ne slažem se ____ tobom.',
    en: 'I do not agree with you.',
    opts: ['s', 'sa', 'za', 'o'],
    answer: 's',
    tip: 'sa only before s, š, z, ž — tobom starts with t, so plain s.',
  },
  {
    mode: 'ublazavanje',
    q: 'Ne slažem se ____ svime. (that)',
    en: 'I do not agree with all of it.',
    opts: ['sa', 's', 'za', 'o'],
    answer: 'sa',
    tip: 'svime starts with s, so sa. The rule is about what comes next.',
  },
  {
    mode: 'ublazavanje',
    q: 'Kako se pita za razlog nečijeg stava?',
    en: 'Asking why they think that:',
    opts: ['Zašto tako misliš?', 'Zbog čega misliš?', 'Za što misliš?', 'Kako misliš?'],
    answer: 'Zašto tako misliš?',
    tip: 'Zašto asks for a reason; kako misliš? asks what they mean.',
  },
];
