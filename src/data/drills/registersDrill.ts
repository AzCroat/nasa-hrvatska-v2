// src/data/drills/registersDrill.ts
//
// B2 WRITING REGISTERS — the drill for the `writing-registers` lesson.
//
// This is the lesson that explains why official Croatian looks unreadable, and
// it is not vocabulary. The same content moves across three registers by two
// mechanical transformations, applied together:
//
//   PASSIVE.  *Zakon su izmijenili* (they changed the law) → *Zakon se mijenja*
//   (se-passive, all registers) → *Zakon je izmijenjen* (biti plus participle,
//   formal). The agent disappears in stages.
//
//   NOMINALIZATION. *-anje* / *-enje* turns a verb into an abstract noun:
//   *zapošljavati → zapošljavanje*, *provoditi → provođenje*. Formal Croatian
//   stacks these freely — *Provodi se postupak zapošljavanja* is a passive and
//   two nominalizations in four words.
//
// Knowing the two operations is what lets a reader run them backwards and
// recover the sentence somebody meant.
//
// Three modes:
//   pasiv       — the two passives, and which register each belongs to
//   poimenicenje — verbs turned into nouns
//   veznici     — the discourse markers that hold formal text together

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const REGISTERS_MODE_LABELS: Record<string, string> = {
  pasiv: '🔄 Pasiv',
  poimenicenje: '🧱 Poimeničenje',
  veznici: '🔗 Konektori',
};

export const REGISTERS_DRILL_DATA: ModeDrillItem[] = [
  // ── pasiv ─────────────────────────────────────────────────────────────────
  {
    mode: 'pasiv',
    q: 'Gradimo kuću. → Kuća ____ gradi.',
    en: 'The house is being built.',
    opts: ['se', 'je', 'bi', 'su'],
    answer: 'se',
    tip: 'The se-passive — the one a native speaker reaches for.',
  },
  {
    mode: 'pasiv',
    q: 'Gradimo kuću. → Kuća ____ izgrađena.',
    en: 'The house has been built.',
    opts: ['je', 'se', 'će', 'bi'],
    answer: 'je',
    tip: 'biti plus the passive participle — the formal register.',
  },
  {
    mode: 'pasiv',
    q: 'Koja je razlika u značenju između ta dva pasiva?',
    en: 'What is the difference?',
    opts: [
      'se-pasiv je proces, particip je rezultat',
      'nema razlike',
      'jedan je prošli',
      'jedan je upitni',
    ],
    answer: 'se-pasiv je proces, particip je rezultat',
    tip: 'Kuća se gradi is going on; kuća je izgrađena is finished.',
  },
  {
    mode: 'pasiv',
    q: 'Objavljuju rezultate. → Rezultati ____ objavljeni.',
    en: 'The results have been published.',
    opts: ['su', 'se', 'je', 'će'],
    answer: 'su',
    tip: 'Rezultati is plural, so su.',
  },
  {
    mode: 'pasiv',
    q: 'Zakon mijenjaju. → Zakon se ____.',
    en: 'The law is being changed.',
    opts: ['mijenja', 'mijenjaju', 'izmijeni', 'mijenjati'],
    answer: 'mijenja',
    tip: 'The verb agrees with zakon, which is now the subject.',
  },
  {
    mode: 'pasiv',
    q: 'Koji se pasiv rabi u SVIM registrima?',
    en: 'Which passive works everywhere?',
    opts: ['se-pasiv', 'biti + particip', 'oba jednako', 'nijedan'],
    answer: 'se-pasiv',
    tip: 'The participle passive leans formal; the se-passive is at home anywhere.',
  },
  {
    mode: 'pasiv',
    q: 'Što se događa s vršiteljem radnje u pasivu?',
    en: 'What happens to the agent?',
    opts: ['nestaje ili ide u prijedložni izraz', 'ostaje subjekt', 'postaje objekt', 'ništa'],
    answer: 'nestaje ili ide u prijedložni izraz',
    tip: 'od strane Vlade — grammatical, heavy, and unmistakably official.',
  },
  {
    mode: 'pasiv',
    q: 'Pišu izvještaj. → Izvještaj ____ napisan.',
    en: 'The report has been written.',
    opts: ['je', 'se', 'su', 'bi'],
    answer: 'je',
    tip: 'Izvještaj is masculine singular.',
  },

  // ── poimenicenje ──────────────────────────────────────────────────────────
  {
    mode: 'poimenicenje',
    q: 'Od "zapošljavati" nastaje ____.',
    en: 'From zapošljavati comes…',
    opts: ['zapošljavanje', 'zaposlenje', 'zaposlenost', 'zapošljavatelj'],
    answer: 'zapošljavanje',
    tip: '-anje / -enje turns a verb into the noun of its process.',
  },
  {
    mode: 'poimenicenje',
    q: 'Od "provoditi" nastaje ____.',
    en: 'From provoditi comes…',
    opts: ['provođenje', 'provodnja', 'provodilo', 'provod'],
    answer: 'provođenje',
    tip: 'And the d softens to đ before the suffix.',
  },
  {
    mode: 'poimenicenje',
    q: 'Od "istraživati" nastaje ____.',
    en: 'From istraživati comes…',
    opts: ['istraživanje', 'istraga', 'istraživač', 'istrag'],
    answer: 'istraživanje',
    tip: 'Istraga is a criminal investigation — a different word for a different thing.',
  },
  {
    mode: 'poimenicenje',
    q: 'Kojeg su roda imenice na -anje i -enje?',
    en: 'What gender are they?',
    opts: ['srednjeg', 'muškog', 'ženskog', 'ovisi'],
    answer: 'srednjeg',
    tip: 'Neuter, all of them — obrazovanje, financiranje, provođenje.',
  },
  {
    mode: 'poimenicenje',
    q: 'Koliko poimeničenja ima "Provodi se postupak zapošljavanja"?',
    en: 'How many nominalizations?',
    opts: ['dva', 'jedno', 'tri', 'nijedno'],
    answer: 'dva',
    tip: 'postupak and zapošljavanja — plus a passive, in four words.',
  },
  {
    mode: 'poimenicenje',
    q: 'Od "obrazovati" nastaje ____.',
    en: 'From obrazovati comes…',
    opts: ['obrazovanje', 'obrazac', 'obrazovnost', 'obrazovatelj'],
    answer: 'obrazovanje',
    tip: 'Obrazac is a form you fill in — related root, unrelated meaning.',
  },
  {
    mode: 'poimenicenje',
    q: 'Zašto se poimeničenja slažu u službenom stilu?',
    en: 'Why does formal style stack them?',
    opts: ['uklanjaju vršitelja i radnju', 'kraća su', 'jasnija su', 'tako traži gramatika'],
    answer: 'uklanjaju vršitelja i radnju',
    tip: 'Nobody does anything; things simply take place. That is the whole effect.',
  },
  {
    mode: 'poimenicenje',
    q: 'Kako se "Stopa nezaposlenosti raste" čita natrag?',
    en: 'Unpacked, it means:',
    opts: [
      'sve više ljudi nema posao',
      'plaće rastu',
      'zapošljava se više ljudi',
      'stopa je stalna',
    ],
    answer: 'sve više ljudi nema posao',
    tip: 'Running the operations backwards is how you recover the sentence somebody meant.',
  },

  // ── veznici ───────────────────────────────────────────────────────────────
  {
    mode: 'veznici',
    q: 'Rezultati su dobri. ____, troškovi su visoki.',
    en: 'However, the costs are high.',
    opts: ['Međutim', 'Naime', 'Stoga', 'Štoviše'],
    answer: 'Međutim',
    tip: 'Međutim marks CONTRAST.',
  },
  {
    mode: 'veznici',
    q: 'Problem je ozbiljan. ____, nema sredstava.',
    en: 'Namely, there are no funds.',
    opts: ['Naime', 'Međutim', 'Naprotiv', 'Ipak'],
    answer: 'Naime',
    tip: 'Naime EXPLAINS what came before.',
  },
  {
    mode: 'veznici',
    q: 'Nema proračuna; ____ projekt kasni.',
    en: 'therefore the project is late',
    opts: ['stoga', 'naime', 'štoviše', 'naprotiv'],
    answer: 'stoga',
    tip: 'stoga marks a RESULT.',
  },
  {
    mode: 'veznici',
    q: 'Rezultati su dobri, ____, odlični.',
    en: 'moreover, excellent',
    opts: ['štoviše', 'međutim', 'stoga', 'ipak'],
    answer: 'štoviše',
    tip: 'štoviše ADDS, and raises the stakes.',
  },
  {
    mode: 'veznici',
    q: 'Ne pada; ____, raste.',
    en: 'on the contrary, it is rising',
    opts: ['naprotiv', 'međutim', 'naime', 'stoga'],
    answer: 'naprotiv',
    tip: 'Naprotiv contradicts outright; međutim merely qualifies.',
  },
  {
    mode: 'veznici',
    q: 'Teško je, ____ nastavljamo.',
    en: 'nevertheless we carry on',
    opts: ['ipak', 'stoga', 'naime', 'štoviše'],
    answer: 'ipak',
    tip: 'ipak concedes and continues.',
  },
  {
    mode: 'veznici',
    q: 'Provode se mjere, ____ se štede resursi.',
    en: 'while at the same time saving resources',
    opts: ['pritom', 'stoga', 'naime', 'ipak'],
    answer: 'pritom',
    tip: 'pritom marks something happening ALONGSIDE.',
  },
  {
    mode: 'veznici',
    q: 'Koja tri registra lekcija razlikuje?',
    en: 'Which three registers?',
    opts: [
      'razgovorni, novinarski, formalni',
      'pisani, govorni, službeni',
      'niski, srednji, visoki',
      'stari, novi, standardni',
    ],
    answer: 'razgovorni, novinarski, formalni',
    tip: 'The same content, three levels of passive and nominalization.',
  },
];
