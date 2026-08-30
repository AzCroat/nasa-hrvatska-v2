// src/data/drills/adjectiveAgreementDrill.ts
//
// A2 ADJECTIVE AGREEMENT — the drill for the `adjective-agreement` lesson.
//
// This lesson spent a long time on the DELIBERATELY UNMAPPED list, recorded as
// having "no unambiguous drill". That was true of the drills the app had — the
// A1 `pridjevi` bank teaches which adjectives exist and is claimed by the A1
// lesson, `coloragree` and `srocnost` are tagged `nominative`, and the C2
// `slaganjec2` is agreement subtleties for people who mastered this years ago.
// None of them drills the thing this lesson teaches, which is the ENDING TABLE.
//
// The one idea: AN ADJECTIVE COPIES ITS NOUN THREE TIMES OVER — gender, number
// and case. Nothing about the adjective decides anything; it reads all three off
// the noun and follows.
//
//   The nominative is the easy row — *veliki* / *velika* / *veliko*.
//
//   THE ACCUSATIVE IS WHERE ANIMACY BITES. *Vidim veliki stol* keeps the
//   nominative form, because a table is inanimate; *Vidim velikog psa* takes
//   *-og*, because a dog is not. Same gender, same case, two endings, and the
//   split is alive or not alive.
//
//   The oblique cases pair up and can be learned as pairs: genitive *-og / -e*,
//   dative and locative *-om / -oj*, instrumental *-im / -om*.
//
// Every distractor is another real ending from the same table — the mistake a
// learner actually makes is grabbing the wrong row, never inventing a form.
//
// Three modes:
//   nominativ — the base row, and reading gender off the noun
//   akuzativ  — the animacy split
//   ostali    — genitive, dative-locative, instrumental

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ADJECTIVE_AGREEMENT_MODE_LABELS: Record<string, string> = {
  nominativ: '🟦 Nominativ',
  akuzativ: '🟨 Akuzativ i živost',
  ostali: '🟩 Ostali padeži',
};

export const ADJECTIVE_AGREEMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── nominativ ─────────────────────────────────────────────────────────────
  {
    mode: 'nominativ',
    q: '____ stol. (velik)',
    en: 'a big table',
    opts: ['veliki', 'velika', 'veliko', 'velike'],
    answer: 'veliki',
    tip: 'Stol is masculine, so the -i ending.',
  },
  {
    mode: 'nominativ',
    q: '____ kuća. (velik)',
    en: 'a big house',
    opts: ['velika', 'veliki', 'veliko', 'velikoj'],
    answer: 'velika',
    tip: 'Kuća is feminine → -a.',
  },
  {
    mode: 'nominativ',
    q: '____ selo. (velik)',
    en: 'a big village',
    opts: ['veliko', 'veliki', 'velika', 'velikom'],
    answer: 'veliko',
    tip: 'Selo is neuter → -o.',
  },
  {
    mode: 'nominativ',
    q: '____ more. (lijep)',
    en: 'a beautiful sea',
    opts: ['lijepo', 'lijepi', 'lijepa', 'lijepom'],
    answer: 'lijepo',
    tip: 'More is neuter even though it ends in -e.',
  },
  {
    mode: 'nominativ',
    q: 'Što određuje nastavak pridjeva?',
    en: 'What decides the adjective ending?',
    opts: ['imenica uz njega', 'sam pridjev', 'glagol', 'red riječi'],
    answer: 'imenica uz njega',
    tip: 'Gender, number and case all come from the noun. The adjective only follows.',
  },
  {
    mode: 'nominativ',
    q: '____ knjige. (dobar, množina)',
    en: 'good books',
    opts: ['dobre', 'dobra', 'dobri', 'dobro'],
    answer: 'dobre',
    tip: 'Feminine plural → -e.',
  },
  {
    mode: 'nominativ',
    q: '____ studenti. (dobar)',
    en: 'good students',
    opts: ['dobri', 'dobre', 'dobra', 'dobar'],
    answer: 'dobri',
    tip: 'Masculine plural → -i.',
  },
  {
    mode: 'nominativ',
    q: 'Koliko stvari pridjev preuzima od imenice?',
    en: 'How many things does it copy?',
    opts: ['tri', 'jednu', 'dvije', 'nijednu'],
    answer: 'tri',
    tip: 'Gender, number and case — all three, every time.',
  },

  // ── akuzativ ──────────────────────────────────────────────────────────────
  {
    mode: 'akuzativ',
    q: 'Vidim ____ stol. (velik)',
    en: 'I see a big table.',
    opts: ['veliki', 'velikog', 'velikom', 'velika'],
    answer: 'veliki',
    tip: 'A table is inanimate, so the accusative looks exactly like the nominative.',
  },
  {
    mode: 'akuzativ',
    q: 'Vidim ____ psa. (velik)',
    en: 'I see a big dog.',
    opts: ['velikog', 'veliki', 'velikom', 'velikim'],
    answer: 'velikog',
    tip: 'A dog is ANIMATE — masculine animate accusative takes -og.',
  },
  {
    mode: 'akuzativ',
    q: 'Što razlikuje ta dva nastavka?',
    en: 'What splits them?',
    opts: ['živost imenice', 'rod', 'broj', 'položaj u rečenici'],
    answer: 'živost imenice',
    tip: 'Alive or not alive. Nothing else in the accusative behaves this way.',
  },
  {
    mode: 'akuzativ',
    q: 'Imam ____ sestru. (mlad)',
    en: 'I have a younger sister.',
    opts: ['mlađu', 'mlada', 'mlade', 'mladoj'],
    answer: 'mlađu',
    tip: 'Feminine accusative → -u, and mlad compares to mlađi.',
  },
  {
    mode: 'akuzativ',
    q: 'Čitam ____ pismo. (dug)',
    en: 'I am reading a long letter.',
    opts: ['dugo', 'dugi', 'dugu', 'dugom'],
    answer: 'dugo',
    tip: 'Neuter never changes in the accusative.',
  },
  {
    mode: 'akuzativ',
    q: 'Poznajem ____ čovjeka. (star)',
    en: 'I know an old man.',
    opts: ['starog', 'stari', 'starom', 'starim'],
    answer: 'starog',
    tip: 'Animate again — a person, so -og.',
  },
  {
    mode: 'akuzativ',
    q: 'Kupujem ____ auto. (nov)',
    en: 'I am buying a new car.',
    opts: ['novi', 'novog', 'novom', 'nova'],
    answer: 'novi',
    tip: 'A car is inanimate, whatever its owner feels about it.',
  },
  {
    mode: 'akuzativ',
    q: 'Koji rod uopće nema promjene u akuzativu?',
    en: 'Which gender never changes?',
    opts: ['srednji', 'ženski', 'muški živi', 'muški neživi'],
    answer: 'srednji',
    tip: 'Neuter is identical to the nominative, singular and plural.',
  },

  // ── ostali ────────────────────────────────────────────────────────────────
  {
    mode: 'ostali',
    q: 'Nemam ____ auta. (nov)',
    en: 'I do not have a new car.',
    opts: ['novog', 'novi', 'novom', 'novim'],
    answer: 'novog',
    tip: 'Genitive masculine → -og.',
  },
  {
    mode: 'ostali',
    q: 'Iz ____ kuće. (velik)',
    en: 'from the big house',
    opts: ['velike', 'veliku', 'velikoj', 'velika'],
    answer: 'velike',
    tip: 'Genitive feminine → -e.',
  },
  {
    mode: 'ostali',
    q: 'U ____ gradu. (velik)',
    en: 'in the big city',
    opts: ['velikom', 'veliki', 'velikog', 'velikim'],
    answer: 'velikom',
    tip: 'Locative masculine → -om, and the dative takes the same form.',
  },
  {
    mode: 'ostali',
    q: 'U ____ kući. (star)',
    en: 'in the old house',
    opts: ['staroj', 'stare', 'staru', 'starom'],
    answer: 'staroj',
    tip: 'Locative feminine → -oj.',
  },
  {
    mode: 'ostali',
    q: 'S ____ prijateljem. (dobar)',
    en: 'with a good friend',
    opts: ['dobrim', 'dobrom', 'dobrog', 'dobri'],
    answer: 'dobrim',
    tip: 'Instrumental masculine → -im.',
  },
  {
    mode: 'ostali',
    q: 'S ____ sestrom. (mlad)',
    en: 'with the younger sister',
    opts: ['mlađom', 'mlađim', 'mlađu', 'mlađe'],
    answer: 'mlađom',
    tip: 'Instrumental feminine → -om. The masculine and feminine swap shapes here.',
  },
  {
    mode: 'ostali',
    q: 'Koja se dva padeža uvijek slažu u nastavku?',
    en: 'Which two always share endings?',
    opts: ['dativ i lokativ', 'genitiv i akuzativ', 'nominativ i instrumental', 'nijedna dva'],
    answer: 'dativ i lokativ',
    tip: 'Learn them as one row and the table gets a third shorter.',
  },
  {
    mode: 'ostali',
    q: 'Zašto je vrijedno naučiti tablicu?',
    en: 'Why learn the table?',
    opts: ['vrijedi za svaki pridjev', 'samo za velik i mali', 'radi izgovora', 'radi reda riječi'],
    answer: 'vrijedi za svaki pridjev',
    tip: 'One table, every adjective in the language. It is the best return in Croatian grammar.',
  },
];
