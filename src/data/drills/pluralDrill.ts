// src/data/drills/pluralDrill.ts
//
// A1 PLURAL FORMATION — the drill for the `plural-nouns` lesson (practice
// programme wave 1, 2026-08-29).
//
// `plural-nouns` is A1 order 9 and taught nothing but the plural. Before this
// bank there was no plural drill at any level, so the lesson taught the single
// most-used noun operation in the language and the app never once asked for it.
//
// Three modes, eight items each:
//   osnovno    — the regular -i / -e / -a endings by gender
//   nepravilno — the plurals that break the rule a beginner has just learned
//   umnozak    — the "long plural" of monosyllabic masculines (-ovi / -evi),
//                which is where an A1 learner's first guess is reliably wrong
//
// DISTRACTOR RULE (owner directive): every wrong option is wrong by CROATIAN
// morphology — a real ending applied to the wrong gender, a singular where a
// plural belongs, the short plural where the long one is required. None is a
// Serbian form and none is gibberish.

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PLURAL_MODE_LABELS: Record<string, string> = {
  osnovno: '📐 Osnovna množina',
  nepravilno: '⚡ Nepravilna množina',
  umnozak: '📚 Duga množina',
};

export const PLURAL_DRILL_DATA: ModeDrillItem[] = [
  // ── osnovno: the regular endings ──────────────────────────────────────────
  {
    mode: 'osnovno',
    q: 'jedan stol → dva ____',
    en: 'one table → two tables',
    opts: ['stolovi', 'stoli', 'stole', 'stola'],
    answer: 'stolovi',
    tip: 'Stol is a one-syllable masculine, so it takes the LONG plural: stolovi.',
  },
  {
    mode: 'osnovno',
    q: 'jedna knjiga → tri ____',
    en: 'one book → three books',
    opts: ['knjige', 'knjigi', 'knjiga', 'knjigovi'],
    answer: 'knjige',
    tip: 'Feminine nouns in -a take -e in the plural: knjiga → knjige.',
  },
  {
    mode: 'osnovno',
    q: 'jedno selo → dva ____',
    en: 'one village → two villages',
    opts: ['sela', 'seli', 'sele', 'selovi'],
    answer: 'sela',
    tip: 'Neuter nouns in -o take -a: selo → sela.',
  },
  {
    mode: 'osnovno',
    q: 'jedan student → pet ____',
    en: 'one student → five students',
    opts: ['studenata', 'studenti', 'studente', 'studentima'],
    answer: 'studenata',
    tip: 'After five and above the noun stands in the GENITIVE plural: pet studenata.',
  },
  {
    mode: 'osnovno',
    q: 'jedna žena → dvije ____',
    en: 'one woman → two women',
    opts: ['žene', 'ženi', 'žena', 'ženama'],
    answer: 'žene',
    tip: 'Two, three and four take the genitive SINGULAR, which for žena looks like žene.',
  },
  {
    mode: 'osnovno',
    q: 'jedno more → dva ____',
    en: 'one sea → two seas',
    opts: ['mora', 'mori', 'more', 'morevi'],
    answer: 'mora',
    tip: 'Neuter in -e behaves like neuter in -o: more → mora.',
  },
  {
    mode: 'osnovno',
    q: 'jedan prozor → tri ____',
    en: 'one window → three windows',
    opts: ['prozora', 'prozori', 'prozore', 'prozorima'],
    answer: 'prozora',
    tip: 'Prozor is two syllables, so the short plural: prozori — and after tri, prozora.',
  },
  {
    mode: 'osnovno',
    q: 'jedna sestra → dvije ____',
    en: 'one sister → two sisters',
    opts: ['sestre', 'sestri', 'sestara', 'sestrama'],
    answer: 'sestre',
    tip: 'Dvije takes the genitive singular: sestre. Sestara is the genitive PLURAL, for five and above.',
  },

  // ── nepravilno: the ones that break the rule ──────────────────────────────
  {
    mode: 'nepravilno',
    q: 'jedan čovjek → mnogo ____',
    en: 'one person → many people',
    opts: ['ljudi', 'čovjeci', 'čovjekovi', 'čovjeka'],
    answer: 'ljudi',
    tip: 'Čovjek has no plural of its own — the language uses a different word entirely: ljudi.',
  },
  {
    mode: 'nepravilno',
    q: 'jedno dijete → troje ____',
    en: 'one child → three children',
    opts: ['djece', 'djeteta', 'djetovi', 'dijeta'],
    answer: 'djece',
    tip: 'Djeca is a collective: it looks plural but agrees as a feminine singular — djeca je došla.',
  },
  {
    mode: 'nepravilno',
    q: 'jedan brat → dva ____',
    en: 'one brother → two brothers',
    opts: ['brata', 'bratovi', 'brati', 'braće'],
    answer: 'brata',
    tip: 'Dva brata for the count; the collective braća is what you use for the brothers as a group.',
  },
  {
    mode: 'nepravilno',
    q: 'jedno oko → dva ____',
    en: 'one eye → two eyes',
    opts: ['oka', 'oki', 'okovi', 'oke'],
    answer: 'oka',
    tip: 'Dva oka keeps the old dual. The plural oči (feminine) is what you use for the eyes generally.',
  },
  {
    mode: 'nepravilno',
    q: 'jedna ruka → dvije ____',
    en: 'one hand → two hands',
    opts: ['ruke', 'ruki', 'ruku', 'rukama'],
    answer: 'ruke',
    tip: 'Dvije ruke. Ruku is the genitive plural — pet ruku.',
  },
  {
    mode: 'nepravilno',
    q: 'jedan prijatelj → dva ____',
    en: 'one friend → two friends',
    opts: ['prijatelja', 'prijatelji', 'prijateljovi', 'prijateljima'],
    answer: 'prijatelja',
    tip: 'Prijatelji is the nominative plural; after dva it stands in the genitive singular, prijatelja.',
  },
  {
    mode: 'nepravilno',
    q: 'jedna noć → tri ____',
    en: 'one night → three nights',
    opts: ['noći', 'noće', 'noća', 'noćevi'],
    answer: 'noći',
    tip: 'Noć is feminine despite the consonant ending, and its plural is noći — not noće.',
  },
  {
    mode: 'nepravilno',
    q: 'jedno ime → dva ____',
    en: 'one name → two names',
    opts: ['imena', 'ime', 'imi', 'imevi'],
    answer: 'imena',
    tip: 'Ime adds -en- before the ending: ime → imena. Same for vrijeme → vremena.',
  },

  // ── umnozak: the long plural of short masculines ──────────────────────────
  {
    mode: 'umnozak',
    q: 'jedan grad → mnogo ____',
    en: 'one city → many cities',
    opts: ['gradova', 'grada', 'gradi', 'grade'],
    answer: 'gradova',
    tip: 'One-syllable masculines take -ovi: gradovi. After mnogo, the genitive plural gradova.',
  },
  {
    mode: 'umnozak',
    q: 'jedan ključ → dva ____',
    en: 'one key → two keys',
    opts: ['ključa', 'ključi', 'ključovi', 'ključeve'],
    answer: 'ključa',
    tip: 'The plural is ključevi (-evi after a soft consonant), but after dva you need ključa.',
  },
  {
    mode: 'umnozak',
    q: 'Koja je množina od "muž"?',
    en: 'What is the plural of "husband"?',
    opts: ['muževi', 'muži', 'mužovi', 'muža'],
    answer: 'muževi',
    tip: 'Soft consonant (ž) takes -evi, not -ovi: muževi.',
  },
  {
    mode: 'umnozak',
    q: 'Koja je množina od "nož"?',
    en: 'What is the plural of "knife"?',
    opts: ['noževi', 'nožovi', 'noži', 'nože'],
    answer: 'noževi',
    tip: 'Again the soft-consonant rule: nož → noževi.',
  },
  {
    mode: 'umnozak',
    q: 'Koja je množina od "sin"?',
    en: 'What is the plural of "son"?',
    opts: ['sinovi', 'sini', 'sinevi', 'sina'],
    answer: 'sinovi',
    tip: 'Hard consonant, so -ovi: sinovi.',
  },
  {
    mode: 'umnozak',
    q: 'Koja je množina od "vlak"?',
    en: 'What is the plural of "train"?',
    opts: ['vlakovi', 'vlaci', 'vlakevi', 'vlaka'],
    answer: 'vlakovi',
    tip: 'Vlak → vlakovi. Vlaci would apply the short plural this noun does not take.',
  },
  {
    mode: 'umnozak',
    q: 'Koja je množina od "sat" (u značenju "ura")?',
    en: 'What is the plural of "sat" (meaning hour)?',
    opts: ['sati', 'satovi', 'sate', 'sata'],
    answer: 'sati',
    tip: 'Two plurals, two meanings: sati are hours, satovi are clocks or school lessons.',
  },
  {
    mode: 'umnozak',
    q: 'Koja je množina od "put" (u značenju "cesta")?',
    en: 'What is the plural of "put" (meaning road)?',
    opts: ['putovi', 'puti', 'putevi', 'puta'],
    answer: 'putovi',
    tip: 'Putovi for roads. Puta is what you use for counting times: tri puta.',
  },
];
