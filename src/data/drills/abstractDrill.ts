// src/data/drills/abstractDrill.ts
//
// B2 ABSTRACT TOPICS — the drill for the `abstract-topics` lesson.
//
// Two structural facts do most of the work here, and both are declension
// problems disguised as vocabulary.
//
// First, *-ost* builds most Croatian abstract nouns — *siguran → sigurnost*,
// *odgovoran → odgovornost*, *mogućnost*, *jednakost* — and every one of them
// is an I-DECLENSION FEMININE, the class taught at B2 order 2. So a learner who
// has the suffix and not the class produces *sigurnosta*, *o mogućnosti* wrong,
// and a genitive that does not exist. The suffix is the shortcut; the
// declension is the price of it.
//
// Second, the discussion verbs carry FIXED prepositions that English does not
// predict: *ovisiti O* plus the locative (never *ovisiti od*), *odnositi se NA*
// plus the accusative. And *smatrati* takes two shapes — *smatram da je važno*
// or the more formal *smatram to važnim*, with the instrumental.
//
// Three modes:
//   ost      — the suffix, and the declension class it lands in
//   glagoli  — the discussion verbs and their prepositions
//   rasprava — using them in an actual argument

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ABSTRACT_MODE_LABELS: Record<string, string> = {
  ost: '🔤 Nastavak -ost',
  glagoli: '🔗 Glagoli i prijedlozi',
  rasprava: '💬 U raspravi',
};

export const ABSTRACT_DRILL_DATA: ModeDrillItem[] = [
  // ── ost ───────────────────────────────────────────────────────────────────
  {
    mode: 'ost',
    q: 'Od "siguran" nastaje ____.',
    en: 'From siguran comes…',
    opts: ['sigurnost', 'sigurnoća', 'sigurnina', 'siguranje'],
    answer: 'sigurnost',
    tip: '-ost builds most Croatian abstract nouns.',
  },
  {
    mode: 'ost',
    q: 'Kojoj sklonidbi pripadaju imenice na -ost?',
    en: 'Which declension do -ost nouns belong to?',
    opts: ['i-sklonidbi', 'a-sklonidbi', 'e-sklonidbi', 'srednjem rodu'],
    answer: 'i-sklonidbi',
    tip: 'Feminine i-declension, like stvar and noć. Every single one.',
  },
  {
    mode: 'ost',
    q: 'Genitiv od "mogućnost" je ____.',
    en: 'genitive of mogućnost',
    opts: ['mogućnosti', 'mogućnosta', 'mogućnostu', 'mogućnoste'],
    answer: 'mogućnosti',
    tip: 'i-declension: the genitive is -i, not -a.',
  },
  {
    mode: 'ost',
    q: 'Instrumental od "odgovornost" je ____.',
    en: 'instrumental of odgovornost',
    opts: ['odgovornošću', 'odgovornosti', 'odgovornostom', 'odgovornosom'],
    answer: 'odgovornošću',
    tip: 'The i-declension instrumental is -ju, and st + ju gives šću.',
  },
  {
    mode: 'ost',
    q: 'Od "odgovoran" nastaje ____.',
    en: 'From odgovoran comes…',
    opts: ['odgovornost', 'odgovaranje', 'odgovornoća', 'odgovorstvo'],
    answer: 'odgovornost',
    tip: 'And the fleeting a disappears: odgovoran → odgovorn- → odgovornost.',
  },
  {
    mode: 'ost',
    q: 'Koja imenica NIJE na -ost?',
    en: 'Which is not an -ost noun?',
    opts: ['sloboda', 'jednakost', 'sigurnost', 'mogućnost'],
    answer: 'sloboda',
    tip: 'Sloboda is an ordinary a-declension feminine — not every abstract noun uses -ost.',
  },
  {
    mode: 'ost',
    q: 'Govorimo o ____. (jednakost)',
    en: 'We are talking about equality.',
    opts: ['jednakosti', 'jednakosta', 'jednakostu', 'jednakošću'],
    answer: 'jednakosti',
    tip: 'The locative is -i as well — i-declension has fewer distinct forms than it looks.',
  },
  {
    mode: 'ost',
    q: 'Zašto je nastavak i prečac i zamka?',
    en: 'Why is the suffix both a shortcut and a trap?',
    opts: [
      'daje riječ, ali i sklonidbu koju treba znati',
      'nije zamka',
      'mijenja rod',
      'rijedak je',
    ],
    answer: 'daje riječ, ali i sklonidbu koju treba znati',
    tip: 'You get the word for free and inherit the whole declension with it.',
  },

  // ── glagoli ───────────────────────────────────────────────────────────────
  {
    mode: 'glagoli',
    q: 'To ovisi ____ okolnostima.',
    en: 'That depends on the circumstances.',
    opts: ['o', 'od', 'na', 'u'],
    answer: 'o',
    tip: 'Ovisiti O plus the LOCATIVE. Ovisiti od is not standard Croatian.',
  },
  {
    mode: 'glagoli',
    q: 'To se odnosi ____ sve članove.',
    en: 'That applies to all the members.',
    opts: ['na', 'o', 'za', 'prema'],
    answer: 'na',
    tip: 'Odnositi se NA plus the ACCUSATIVE — a different preposition and a different case.',
  },
  {
    mode: 'glagoli',
    q: 'Smatram ____ važnim. (formalno)',
    en: 'I consider it important.',
    opts: ['to', 'tome', 'toga', 'time'],
    answer: 'to',
    tip: 'Smatram TO VAŽNIM — accusative object, instrumental complement.',
  },
  {
    mode: 'glagoli',
    q: 'Smatram to ____. (važan)',
    en: 'I consider it important.',
    opts: ['važnim', 'važan', 'važnog', 'važnome'],
    answer: 'važnim',
    tip: 'The complement goes in the INSTRUMENTAL — this is the formal shape.',
  },
  {
    mode: 'glagoli',
    q: 'Koji je drugi, obicniji oblik?',
    en: 'What is the everyday alternative?',
    opts: ['Smatram da je važno.', 'Smatram važno.', 'Smatram o važnom.', 'Smatram za važno.'],
    answer: 'Smatram da je važno.',
    tip: 'Both are correct. The da-clause is the one you will hear.',
  },
  {
    mode: 'glagoli',
    q: 'Što znači "pretpostaviti"?',
    en: 'What does pretpostaviti mean?',
    opts: ['to assume', 'to propose', 'to postpone', 'to prefer'],
    answer: 'to assume',
    tip: 'And pretpostavka is the assumption.',
  },
  {
    mode: 'glagoli',
    q: 'Što znači "razlikovati"?',
    en: 'What does razlikovati mean?',
    opts: ['to distinguish', 'to disagree', 'to divide', 'to differ from'],
    answer: 'to distinguish',
    tip: 'Razlikovati X od Y — with od plus the genitive.',
  },
  {
    mode: 'glagoli',
    q: 'Iz toga ____ da je problem širi.',
    en: 'From that we conclude the problem is wider.',
    opts: ['zaključujemo', 'zaključimo', 'zaključiti', 'zaključno'],
    answer: 'zaključujemo',
    tip: 'The imperfective for an ongoing line of reasoning.',
  },

  // ── rasprava ──────────────────────────────────────────────────────────────
  {
    mode: 'rasprava',
    q: 'Što je "sloboda"?',
    en: 'What is sloboda?',
    opts: ['freedom', 'leisure', 'openness', 'independence'],
    answer: 'freedom',
    tip: 'Neovisnost is independence — a separate -ost noun.',
  },
  {
    mode: 'rasprava',
    q: 'Što je "pravda"?',
    en: 'What is pravda?',
    opts: ['justice', 'a right', 'a rule', 'truth'],
    answer: 'justice',
    tip: 'Pravo is a right or the law; istina is truth.',
  },
  {
    mode: 'rasprava',
    q: 'Rasprava ____ pravdi trajala je dugo.',
    en: 'The debate about justice went on a long time.',
    opts: ['o', 'na', 'za', 'oko'],
    answer: 'o',
    tip: 'Rasprava O plus the locative.',
  },
  {
    mode: 'rasprava',
    q: 'Što je "razvoj"?',
    en: 'What is razvoj?',
    opts: ['development', 'division', 'resolution', 'direction'],
    answer: 'development',
    tip: 'From razvijati. Razvijanje is the process noun; razvoj the result.',
  },
  {
    mode: 'rasprava',
    q: 'Moć ____ korumpira. (nominativ ili?)',
    en: 'Which case is moć here?',
    opts: ['nominativ', 'akuzativ', 'genitiv', 'instrumental'],
    answer: 'nominativ',
    tip: 'Moć is the subject — and it is i-declension too, like the -ost nouns.',
  },
  {
    mode: 'rasprava',
    q: 'Tvrdim ____ je to pogrešno.',
    en: 'I claim that is wrong.',
    opts: ['da', 'kako', 'što', 'jer'],
    answer: 'da',
    tip: 'Tvrditi takes a da-clause, like smatrati and pretpostaviti.',
  },
  {
    mode: 'rasprava',
    q: 'Što je "promjena"?',
    en: 'What is promjena?',
    opts: ['change', 'exchange', 'improvement', 'variety'],
    answer: 'change',
    tip: 'And klimatske promjene is the plural you will meet most.',
  },
  {
    mode: 'rasprava',
    q: 'Koje se društvo ____? (razvijati, bezlično)',
    en: 'Which society is developing?',
    opts: ['razvija', 'razvijaju', 'razvijati', 'razvio'],
    answer: 'razvija',
    tip: 'Društvo is neuter singular: društvo se razvija.',
  },
];
