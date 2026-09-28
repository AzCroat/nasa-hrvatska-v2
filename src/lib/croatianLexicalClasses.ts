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
  // second batch (2026-09-28): `vidim suradnik`, `vozim biciklist` reported
  'suradnik',
  'biciklist',
  'pješak',
  'sportaš',
  'trener',
  'igrač',
  'plivač',
  'znanstvenik',
  'inženjer',
  'programer',
  'zubar',
  'pekar',
  'mesar',
  'frizer',
  'taksist',
  'pijanist',
  'gitarist',
  'stanar',
  'gledatelj',
  'slušatelj',
  'sudionik',
  'natjecatelj',
  'pobjednik',
  'gubitnik',
  'poznanik',
  'svekar',
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
  'crv',
  'mrav',
  'pauk',
  'leptir',
  'kit',
]);

/**
 * Consonant-final nouns that are FEMININE i-declension (`noć → noći`). The
 * spelling cannot tell them from a masculine noun, which is why ReferenceDesk
 * offers a gender switch; for these the answer is known, and a learner tapping
 * `pomoć` must not be shown `pomoća`. Polysyllabic `-ost` is a RULE (radost,
 * mladost), so it is not listed. `bol` is listed as FEMININE: the norm admits
 * both genders, but the feminine (`boli`, `bolovi` is the masculine plural) is
 * the one the app's own content uses, and a caller wanting the masculine passes
 * it explicitly. `-est`/`-ijest` (vijest, bolest, svijest) is NOT a rule — `gost`
 * and `test` are masculine — so those are listed one by one.
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
  // second batch (2026-09-28): `vijest` and `povijest` came out masculine (`vijesta`)
  'vijest',
  'povijest',
  'obavijest',
  'svijest',
  'savjest',
  'bolest',
  'strast',
  'bol',
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
  'pješak', // pješaka, never pješka (reported 2026-09-28)
  'divljak',
  'zemljak',
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
 *  rule that a polysyllable takes the short one (`prijatelj → prijatelji`).
 *  The -am nouns whose a is fleeting (`pojam → pojmovi`) belong here too: their
 *  oblique stem is one syllable, like posao's. And the long-yat MONOSYLLABLES:
 *  `snijeg`, `lijek`, `svijet` are one spoken syllable that the counter reads as
 *  two — deliberately, because `klijent` is spelled the same way and has two —
 *  so without this list they took the short plural and sibilarized: `snijezi`,
 *  `lijeci`. `grijeh → grijesi` genuinely takes the short one and is NOT here. */
export const LONG_PLURAL: ReadonlySet<string> = new Set([
  'tečaj',
  'slučaj',
  'zmaj',
  'pojam',
  'sajam',
  'ritam',
  'najam',
  'zajam',
  'snijeg',
  'svijet',
  'cvijet',
  'vijek',
  'bijeg',
  'lijek',
  'tijek',
]);

/**
 * Nouns with a FLEETING a outside the productive `-ac`/`-ak` scope: `pojam →
 * pojma`, `sajam → sajma`, `Zadar → Zadra`, `svekar → svekra`. The engine's
 * fleeting-a rule is deliberately narrow (stated generally it turned `grad` into
 * `grd`), so these are listed; `centar`-class nouns already have attested tables.
 * Reported 2026-09-28 as `pojama`, `sajama`, `ritama`, `Zadara`.
 */
export const FLEETING_A: ReadonlySet<string> = new Set([
  'pojam',
  'sajam',
  'ritam',
  'najam',
  'zajam',
  'zadar',
  'svekar',
  'vepar',
]);

/**
 * Monosyllables whose long yat SHORTENS before the long-plural infix: `snijeg →
 * snjegovi`, `svijet → svjetovi`, `cvijet → cvjetovi`, `vijek → vjekovi`. Lexical:
 * `lijek → lijekovi` keeps it, and `brijeg → bregovi` shortens differently (r + je
 * → re), so brijeg is NOT here and gets the plain rule. Every member must also be
 * in LONG_PLURAL (the shortening happens before the -ovi infix and nowhere else).
 * Reported 2026-09-28 as `snijezi` — a sibilarized short plural.
 */
export const YAT_SHORTENS_IN_PLURAL: ReadonlySet<string> = new Set([
  'snijeg',
  'svijet',
  'cvijet',
  'vijek',
  'bijeg',
]);

/**
 * MASCULINE loanwords in `-o` (`auto`, `euro`, `radio`): the neuter rule gave
 * `auta` as the plural and `radia` as the genitive. They decline on the a-stem
 * with the plural `-i` (auti, euri, radiji); an `-io` stem takes a j (radija,
 * studiju). `kino` is neuter and is NOT here. `metro` is left out because its
 * genitive plural is not settled.
 */
export const MASCULINE_O: ReadonlySet<string> = new Set([
  'auto',
  'euro',
  'radio',
  'studio',
  'video',
]);

/**
 * MASCULINE nouns in `-a` — `tata`, `kolega`, `gazda`. They take the e-declension
 * endings (kolege, kolegi, kolegu) but are masculine for agreement, and they do
 * NOT sibilarize (`kolegi`, never `kolezi` — the feminine rule gave that).
 * Reported 2026-09-28 as feminine, with `kolezi`.
 */
export const MASCULINE_A: ReadonlySet<string> = new Set([
  'tata',
  'kolega',
  'papa',
  'gazda',
  'sluga',
  'vođa',
]);

/** Of those, the ones whose vocative EQUALS the nominative (`kolega!`, `tata!`);
 *  the rest take `-o` (`gazdo`, `vođo`). */
export const VOCATIVE_IS_NOMINATIVE: ReadonlySet<string> = new Set(['tata', 'kolega', 'papa']);

/**
 * PLURALIA TANTUM — nouns with no singular. Neuter `-a` (`vrata`, `leđa`, `usta`,
 * `prsa`) read as feminine SINGULARS (`vrate`, `vratu`); feminine `-e` (`hlače`,
 * `novine`) read as neuter singulars (`hlača`, `hlačem`). Every cell of these
 * shows the plural form, and the note says why.
 */
export const PLURALIA_TANTUM_N: ReadonlySet<string> = new Set([
  'vrata',
  'leđa',
  'usta',
  'prsa',
  'pluća',
  'kola',
]);
export const PLURALIA_TANTUM_F: ReadonlySet<string> = new Set([
  'hlače',
  'novine',
  'škare',
  'naočale',
  'gaće',
]);

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
  // A consonant + t stem in -i where the rule's epenthesis is wrong (`poanata`).
  poanta: 'poanti',
  // masculine: gost takes the old genitive plural in -iju; sat the -i plural
  // (`pet sati`, never `pet sata`); vikend keeps its cluster (`vikenda`, where the
  // polysyllabic-cluster rule gave `vikenada`).
  gost: 'gostiju',
  sat: 'sati',
  vikend: 'vikenda',
};
