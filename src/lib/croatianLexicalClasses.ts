// src/lib/croatianLexicalClasses.ts
//
// The LEXICAL half of the declension rules (2026-09-28). Data only; the rules
// that read these sets live in `croatianMorphology.ts`. Same split as
// `croatianIrregulars.ts`, and for the same reason: a class Croatian decides
// word by word cannot be stated as a rule, and the engine's own history is the
// proof — the general fleeting-a rule turned `grad` into `grd`.
//
// Every set below exists because the rules produced a WRONG FORM for a real word
// a learner meets (reported by the speaking-curriculum authors while verifying
// build sentences against `decline()`, then probed one by one):
//   vidim prijatelj · pomoća · posaa · danovi · gostovi · stricovi · rođka ·
//   na baci · mačci · jusi · hrvatsci · glazaba · tečaji.
// A word absent from a set gets the regular rule exactly as before; these sets
// can only correct a form, never invent one.
//
// The Croatian here is guarded IN croatianMorphology.test.ts (Serbism and
// Cyrillic over every produced form), not by the lint TARGETS — the same
// arrangement the irregulars file has, for the same reason.

/**
 * Masculine nouns naming a PERSON or an ANIMAL. Their accusative singular copies
 * the genitive (`vidim prijatelja`), where a thing's copies the nominative
 * (`vidim grad`). Animacy is lexical — `pokazatelj` (an indicator) and
 * `prijatelj` share a suffix — so it is a list, and a noun missing from it keeps
 * the old table together with the note that states the rule.
 */
export const ANIMATE_MASCULINE: ReadonlySet<string> = new Set([
  // family
  'sin',
  'muž',
  'djed',
  'unuk',
  'stric',
  'ujak',
  'rođak',
  'bratić',
  'nećak',
  'zet',
  'tast',
  'svekar',
  'šogor',
  'djever',
  'kum',
  'suprug',
  'zaručnik',
  'roditelj',
  'momak',
  'dječak',
  'mladić',
  'starac',
  // people and roles
  'prijatelj',
  'susjed',
  'gost',
  'domaćin',
  'stranac',
  'turist',
  'sponzor',
  'specijalist',
  'putnik',
  'vozač',
  'učitelj',
  'profesor',
  'učenik',
  'student',
  'liječnik',
  'doktor',
  'ljekarnik',
  'konobar',
  'kuhar',
  'prodavač',
  'kupac',
  'klijent',
  'šef',
  'direktor',
  'ravnatelj',
  'radnik',
  'majstor',
  'vlasnik',
  'stanodavac',
  'predsjednik',
  'gradonačelnik',
  'policajac',
  'vojnik',
  'odvjetnik',
  'svjedok',
  'novinar',
  'pisac',
  'pjesnik',
  'glumac',
  'borac',
  'pjevač',
  'slikar',
  'ribar',
  'mornar',
  'seljak',
  'junak',
  'hrvat',
  'partner',
  'kandidat',
  'pacijent',
  'posjetitelj',
  'čitatelj',
  'autor',
  // animals
  'mačak',
  'konj',
  'vuk',
  'medvjed',
  'zec',
  'miš',
  'jelen',
  'dupin',
  'galeb',
  'magarac',
  'jarac',
  'bik',
  'lav',
  'orao',
  'golub',
  'vrabac',
  'ptić',
]);

/**
 * Consonant-final nouns that are FEMININE i-declension (`noć → noći`). The
 * spelling cannot tell them from a masculine noun, which is why ReferenceDesk
 * offers a gender switch; for these the answer is known, and a learner tapping
 * `pomoć` must not be shown `pomoća`. Polysyllabic `-ost` is a RULE (radost,
 * mladost), so it is not listed; `bol` is both genders in the norm, so it is not
 * either.
 */
export const FEMININE_CONSONANT: ReadonlySet<string> = new Set([
  'noć',
  'pomoć',
  'moć',
  'stvar',
  'riječ',
  'ljubav',
  'sol',
  'kost',
  'čast',
  'večer',
  'jesen',
  'krv',
  'laž',
  'smrt',
  'zvijer',
  'vlast',
  'pamet',
  'obitelj',
  'glad',
  'ćud',
  'mast',
  'nit',
  'sućut',
]);

/** Polysyllabic `-ak` nouns whose `a` is NOT fleeting (`rođak → rođaka`). The
 *  fleeting a is productive for derived nouns (`početak → početka`) and absent in
 *  these, and nothing in the spelling says which. */
export const KEEPS_A: ReadonlySet<string> = new Set([
  'rođak',
  'ujak',
  'junak',
  'seljak',
  'čudak',
  'prostak',
]);

/** Monosyllables that take the SHORT plural (`dan → dani`), against the rule
 *  that a monosyllable takes `-ovi`/`-evi` (`grad → gradovi`). */
export const SHORT_PLURAL: ReadonlySet<string> = new Set([
  'dan',
  'gost',
  'zub',
  'konj',
  'prst',
  'crv',
  'mrav',
  'vuk',
  'sat',
]);

/** Polysyllables that take the LONG plural (`tečaj → tečajevi`), against the
 *  rule that a polysyllable takes the short one (`prijatelj → prijatelji`). */
export const LONG_PLURAL: ReadonlySet<string> = new Set(['tečaj', 'slučaj', 'zmaj']);

/**
 * Feminine `-a` nouns that do NOT sibilarize before the dative/locative `-i`,
 * beyond the phonological classes the engine applies itself (a stem in
 * -čk/-ćk/-tk/-šk/-zg, and h after a vowel). These are the hypocoristic family
 * words — `baka → baki`, never `baci` — which grammars list by name.
 */
export const NO_SIBILARIZATION: ReadonlySet<string> = new Set(['baka', 'seka', 'deka', 'zeka']);

/**
 * Country names that are ADJECTIVES in form and decline like one:
 * `u Hrvatskoj`, `iz Njemačke`. The noun rules gave `u hrvatsci`.
 */
export const ADJECTIVAL_FEMININE: ReadonlySet<string> = new Set([
  'hrvatska',
  'njemačka',
  'engleska',
  'francuska',
  'švedska',
  'češka',
  'slovačka',
  'grčka',
  'poljska',
  'danska',
  'norveška',
  'irska',
  'škotska',
  'nizozemska',
  'rumunjska',
]);

/** Genitive plurals the cluster rule gets wrong: `majka → majki` (not the
 *  epenthetic `majaka`), `sestrična → sestrična`. Stems in consonant + b
 *  (`glazba → glazbi`) are a rule in the engine, not listed here. */
export const GENITIVE_PLURAL: Readonly<Record<string, string>> = {
  majka: 'majki',
  // Consonant + n/t stems whose genitive plural is -i, not the epenthetic a:
  // the rule gave "jakana" and "lopata" — the second is a different word (a
  // shovel). Both reported by the curriculum authors verifying build sentences.
  jakna: 'jakni',
  lopta: 'lopti',
  // …and the consonant + lj exception the other way: zemlja keeps the a.
  zemlja: 'zemalja',
  sestrična: 'sestrična',
  // masculine: gost takes the old genitive plural in -iju.
  gost: 'gostiju',
};
