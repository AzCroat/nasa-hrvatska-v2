/**
 * writingPrompts.ts — the free-writing bank for `WritingScreen`.
 *
 * Extracted from the screen on 2026-09-23 when authoring the A1 tier took that
 * file past the 800-line ESLint cap. The cap was NOT raised and no override was
 * added — same move as `sessionPools`, `croatiaPool`, `categoryRoutes` and
 * `retentionSlot` before it, and this lands beside `writingCurriculum.ts`, the
 * bank Guided Writing uses.
 *
 * Every entry carries a CEFR `level`, and `WritingScreen` serves the bank
 * through `levelledBank`, so an entry above the learner is withheld. The A1
 * tier is load-bearing rather than decorative: below `LEVELLED_BANK_MIN`
 * survivors `levelledBank` serves the WHOLE bank, so with nothing at A1 an A1
 * learner was handed all twenty prompts, C1 entries included — the filter
 * standing down at the one level it exists to protect. Pinned per level by
 * `levelledBankFloor.test.ts`; the screen's badge must also carry an arm for
 * every level authored here (`writing-screen.test.tsx`), because the ternary's
 * final arm is C1's colour and an unarmed level renders AS C1.
 *
 * In `scripts/lintCroatianText.mjs` TARGETS.
 */
export type WritingPrompt = {
  en: string;
  hr: string;
  level: string;
  focus: string;
};

export const PROMPTS: WritingPrompt[] = [
  // A1 — subject forms and the present tense only, one clause at a time.
  // AUTHORED 2026-09-23 because the bank had NOTHING at A1 and `levelledBank`'s
  // floor therefore served the WHOLE 20-prompt bank there, C1 entries included —
  // the filter disabling itself at exactly the level it exists to protect. The
  // module's own docstring names that case and says "the honest fix is content",
  // so this is that fix rather than a wider floor. A1 IS reachable here: the pool
  // gates this screen at A2, but the search index carries `go: 'writing'` and
  // `SearchModal.navigate` calls `setScr` with no CEFR check.
  {
    en: 'Write your name, where you are from, and where you live',
    hr: 'Napiši kako se zoveš, odakle si i gdje živiš',
    level: 'A1',
    focus: "Verb 'zvati se' + 'biti' (subject forms only)",
  },
  {
    en: 'Name three things in your room',
    hr: 'Napiši tri stvari u svojoj sobi',
    level: 'A1',
    focus: 'Nominative + gender of nouns',
  },
  {
    en: 'Write what you like and what you do not like',
    hr: 'Napiši što voliš, a što ne voliš',
    level: 'A1',
    focus: "Present tense + negation with 'ne'",
  },
  {
    en: 'Count the people in your family and say who they are',
    hr: 'Napiši koliko vas je u obitelji i tko su',
    level: 'A1',
    focus: 'Numbers + plural of family words',
  },
  // A2 — simple present, basic vocabulary
  {
    en: 'Describe your morning routine',
    hr: 'Opiši svoju jutarnju rutinu',
    level: 'A2',
    focus: 'Present tense + daily verbs',
  },
  {
    en: 'Write about your family',
    hr: 'Napiši o svojoj obitelji',
    level: 'A2',
    focus: "Verb 'biti' + nominative",
  },
  {
    en: 'Describe the weather today',
    hr: 'Opiši današnje vrijeme',
    level: 'A2',
    focus: 'Adjective agreement',
  },
  {
    en: 'Write about where you live',
    hr: 'Napiši o tome gdje živiš',
    level: 'A2',
    focus: 'Locative case (u/na + place)',
  },
  // B1 — past tense, accusative, broader vocabulary
  {
    en: 'Describe a typical day in Croatia',
    hr: 'Opiši tipičan dan u Hrvatskoj',
    level: 'B1',
    focus: 'Past tense (perfective/imperfective)',
  },
  { en: 'Write about your hobby', hr: 'Opiši svoj hobi', level: 'B1', focus: 'Accusative case' },
  {
    en: 'Write a short text about Croatia',
    hr: 'Napiši kratki tekst o Hrvatskoj',
    level: 'B1',
    focus: 'Culture vocabulary',
  },
  {
    en: 'Describe a Croatian city you know',
    hr: 'Opiši hrvatski grad koji poznaješ',
    level: 'B1',
    focus: 'Genitive + prepositions',
  },
  {
    en: 'Write about your favorite Croatian food',
    hr: 'Napiši o svojoj omiljenoj hrvatskoj hrani',
    level: 'B1',
    focus: 'Adjective-noun agreement',
  },
  {
    en: 'Write about a recent trip or outing',
    hr: 'Napiši o nedavnom putovanju ili izletu',
    level: 'B1',
    focus: 'Past tense + travel vocabulary',
  },
  // B2 — conditional, complex sentences
  {
    en: 'If you could live in Croatia, where would you choose?',
    hr: 'Kad bi mogao/mogla živjeti u Hrvatskoj, gdje bi odabrao/la?',
    level: 'B2',
    focus: 'Conditional mood (bih/bi)',
  },
  {
    en: 'Describe a conversation you had recently',
    hr: 'Opiši razgovor koji si nedavno imao/imala',
    level: 'B2',
    focus: 'Reported speech + past tense',
  },
  {
    en: 'Write about Croatian culture or customs you admire',
    hr: 'Napiši o hrvatskoj kulturi ili običajima koji ti se sviđaju',
    level: 'B2',
    focus: 'Relative clauses',
  },
  {
    en: 'Why do you learn Croatian? Write a short letter.',
    hr: 'Zašto učiš hrvatski? Napiši kratko pismo.',
    level: 'B2',
    focus: 'Modal verbs + dative',
  },
  {
    en: 'Compare life in Croatia with your home country',
    hr: 'Usporedi život u Hrvatskoj s tvojom domovinom',
    level: 'B2',
    focus: 'Comparatives + contrast conjunctions',
  },
  // C1 — subjunctive-like structures, all 7 cases, complex syntax
  {
    en: 'Describe what would need to change for you to speak Croatian fluently',
    hr: 'Opiši što bi trebalo promijeniti da govoriš tečno hrvatski',
    level: 'C1',
    focus: 'da + present tense (subjunctive pattern)',
  },
  {
    en: 'Write a persuasive paragraph: why is Croatian worth learning?',
    hr: 'Napiši uvjerljiv odlomak: zašto je vrijedno učiti hrvatski?',
    level: 'C1',
    focus: 'Complex clauses + formal register',
  },
  {
    en: 'Describe a family tradition in Croatian',
    hr: 'Opiši obiteljsku tradiciju na hrvatskom',
    level: 'C1',
    focus: 'All 7 cases in natural context',
  },
  {
    en: 'Write about something you wish had been different',
    hr: 'Napiši o nečemu što bi željeo/željela promijeniti',
    level: 'C1',
    focus: 'Conditional + past tense contrast',
  },
  {
    en: 'Write about why you learn Croatian',
    hr: 'Napiši zašto učiš hrvatski',
    level: 'A2',
    focus: 'Basic sentence structure',
  },
];
