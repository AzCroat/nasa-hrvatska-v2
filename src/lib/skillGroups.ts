// src/lib/skillGroups.ts
//
// The coarse skill family each fine-grained SkillCategory belongs to.
//
// Promoted from src/tests/content-coverage.test.ts (2026-08-20) when the daily
// session needed it at runtime, not just at CI time. Keeping one map serves both
// purposes: the coverage gate tabulates (level × group) from it, and the session
// builder uses it to vary the fill by SKILL rather than by screen. The gate's
// exhaustiveness assertion — every pool category must appear here — now guards
// the production map, so a new category cannot silently join the pool ungrouped.
//
// WHY THE SESSION NEEDS THIS
// The Priority-3 fill excluded recently-seen SCREENS, which reads as variety but
// is not: A1's pool is case-heavy (9 of 33 entries), so three different screens
// could hand a learner three case drills in a row and every one of them passed
// the recency filter. Grouping is what lets the builder notice that.

import type { SkillCategory } from './adaptive';

export const SKILL_GROUPS = [
  'vocab',
  'case',
  'verb',
  'syntax',
  'speaking',
  'listening',
  'reading',
] as const;

export type SkillGroup = (typeof SKILL_GROUPS)[number];

/**
 * Every pool category maps to exactly one skill group. A category with no entry
 * here is a bug — the coverage matrix would silently miscount it, and the
 * session's variety pass would treat it as ungrouped. Asserted exhaustive by
 * src/tests/content-coverage.test.ts.
 */
export const SKILL_GROUP: Record<SkillCategory, SkillGroup> = {
  'vocab-a2': 'vocab',
  'vocab-b1': 'vocab',
  'vocab-b2': 'vocab',
  // REGROUPED to 'case' (2026-08-31). It sat in 'vocab' for a reason that was
  // about CONTINUITY, not classification: genderdrill had grouped there via its
  // old 'vocab-a2' tag, and the retag deliberately changed nothing about the
  // variety pass. That was the right call when SKILL_GROUP had one consumer.
  // It now has two — GRAMMAR_STRUCTURE_CATEGORIES is derived from it — and
  // under the second one "gender is vocabulary" is simply false: noun gender
  // decides declension class and every agreement that follows from it, which is
  // the most structural thing an A1 learner meets. Leaving it in 'vocab' meant
  // the `gender` lesson's own drill did not count as grammar on the day it was
  // taught.
  gender: 'case',
  // Plural formation is noun morphology, so it varies against the cases rather
  // than against vocabulary — a session serving a plural drill beside three
  // case drills is the monotony the variety pass exists to prevent.
  plural: 'case',
  // A1 tranche 2 (2026-08-29). Noun-phrase morphology groups with the cases;
  // negation and the imperative are verb operations; possessives agree like
  // adjectives, so both sit in the noun-phrase family.
  adjectives: 'case',
  demonstratives: 'case',
  possessives: 'case',
  negation: 'verb',
  imperative: 'verb',
  having: 'verb',
  // A1 tranche 3 (2026-08-29). `questions` is sentence construction — li
  // placement and question-word order — so it groups with word-order and the
  // clitics, not with vocabulary. `place-prepositions` is a case choice
  // (locative vs accusative vs genitive) and groups with the cases for exactly
  // the reason `verb-government` does. `greetings` is the one genuinely lexical
  // member of this tranche. `time` covers the clock, the days and the months —
  // a closed vocabulary set with one counting rule attached, and grouping it as
  // 'case' would let it sit beside three case drills in a session, which is the
  // monotony the variety pass exists to stop.
  questions: 'syntax',
  'place-prepositions': 'case',
  time: 'vocab',
  greetings: 'vocab',
  // A2 tranche 1 (2026-08-29). Three are noun-phrase morphology and group with
  // the cases; `comparison` is adjective morphology and groups there too, for
  // the same reason `adjectives` does. Nothing here joins 'vocab' — every one of
  // them is a form the learner has to build.
  'reflexive-possessive': 'case',
  'plural-cases': 'case',
  quantity: 'case',
  comparison: 'case',
  // B1 tranche 1 (2026-08-29). Four are clause construction and group with
  // 'syntax', beside the other subordination content they sit next to in a
  // session. `impersonal` is grouped with the VERBS, not with syntax: what the
  // learner is choosing there is a verb form (treba, se-constructions, the
  // subjectless third person), and grouping it as syntax would let it appear
  // alongside three other clause drills — the monotony the variety pass exists
  // to prevent.
  'infinitive-da': 'syntax',
  'reported-speech': 'syntax',
  'time-clauses': 'syntax',
  'cause-purpose': 'syntax',
  impersonal: 'verb',
  // C2 tranche 1 (2026-08-29). Every row here PRESERVES the group the entry
  // already had through its old catch-all tag, so the P3 variety pass behaves
  // byte-identically to before the retag — the same rule the `rekcija` retag
  // followed. `academic-style` therefore stays in 'verb' (it inherited that from
  // `nominalization`) and the two style drills stay in 'syntax' (from
  // `discourse`), which reads oddly in isolation and is deliberate: changing a
  // grouping and a tag in one commit would make a variety regression impossible
  // to attribute. Regrouping them is a separate decision.
  // B2 tranche 1 (2026-08-29). `i-declension` is a noun paradigm and groups
  // with the cases — which is also the group it already had via its old
  // (wrong) `instrumental` tag, so the variety pass is unchanged by the retag.
  // The three verb-side categories group as verbs. `intensity` was described
  // here as "adverbial grading" and sat with vocab until the 2026-08-31
  // re-audit moved it to 'case' — see the B2 functional block below for the
  // items that decided it.
  // C1 tranche 1 (2026-08-29). The two RETAGS preserve the group their old
  // catch-all tag gave them, so the P3 variety pass is unchanged: `collocations`
  // stays in 'vocab' (from register) and `prosody` in 'speaking'. Of the four
  // authored, `advanced-comparison` is case government and groups with the
  // cases; `word-formation` and `diminutives` are lexical; `summarising` is
  // structural rewriting and sits with syntax.
  // A1 topical block. REGROUPED BY STRUCTURE (2026-08-31), which is the rule
  // the A2 block below already followed and this one did not: these five were
  // classified by their TOPIC LABEL — family, countries, food, directions,
  // weather all sound like vocabulary — while each drill's own bank header
  // describes the structure it actually tests. The banks were right and the
  // rows were wrong, and it went unnoticed because SKILL_GROUP had a single
  // consumer (the variety pass) where the error was invisible. Deriving
  // GRAMMAR_STRUCTURE_CATEGORIES from it made the error load-bearing: the
  // `food-drink` lesson's own drill teaches accusative-vs-genitive and did not
  // count as grammar on the day it was taught.
  //
  // What each one actually drills, from its bank:
  //   family     — irregular plurals with plural agreement (braća, djeca,
  //                ljudi take a plural verb) plus possessive agreement. Noun
  //                morphology, so 'case' beside `plural` and `possessives`.
  //   countries  — iz + genitive for origin, u + locative for residence, plus
  //                the Hrvat/Hrvatica gender pair. 'case'.
  //   food       — what you ORDER is accusative, what you order a QUANTITY of
  //                is genitive. A case drill wearing a café menu. 'case'.
  //   directions — the polite imperatives that come back at you (idite,
  //                skrenite) are the half the header calls hard, so 'verb',
  //                beside `imperative`. Its third mode is genitive position
  //                words and the instrumental of travel, so 'case' would also
  //                be defensible; 'verb' keeps it away from the case cluster
  //                the variety pass exists to break up.
  //   weather    — the SUBJECTLESS sentence (Hladno je — there is no "it").
  //                That is exactly what `impersonal` is, and `impersonal` is
  //                grouped 'verb' for the same stated reason. 'verb'.
  //
  // `preferences` was already the exception here and stays 'verb': its subject
  // is the sviđati se flip, not the vocabulary of liking things.
  family: 'case',
  countries: 'case',
  food: 'case',
  directions: 'verb',
  weather: 'verb',
  preferences: 'verb',
  // A2 topical block (2026-08-29). Three are grouped by the STRUCTURE their
  // drill actually tests rather than by their topic label, because SKILL_GROUP
  // is what the P3 variety pass reads: `home` and `travel` are case selection
  // (u/na with the locative; the instrumental of means), so they group with
  // 'case', and `health` is the boljeti construction — which verb form the
  // sentence takes and what it agrees with — so it groups with 'verb'. The
  // remaining six are lexical (clothing moved to 'case' below).
  home: 'case',
  health: 'verb',
  // clothing: the bank drills nositi + accusative (crvenu majicu) and plural-only
  // agreement (nove hlače) — 14 form-production items of 24 — so it is structural,
  // by the same item count that regrouped the A1 topic drills (2026-11-12, when the
  // clothes lesson moved into A1 with the Croaticum restructure).
  clothing: 'case',
  // A2–C1 lesson drills (2026-11-12). Grouped from the lesson id (verb / clause topics) and,
  // for topic lessons, by how much of the bank produces a form (10+ fill-in items → case).
  'a2-declension-review': 'case',
  'a2-relational-adjectives': 'vocab',
  'a2-possessive-adjectives-cases': 'case',
  'a2-official-forms': 'case',
  'a2-accusative-adjectives': 'case',
  'a2-clitic-order': 'syntax',
  'a2-verbs-nuti': 'verb',
  'a2-weekend-plans': 'case',
  'a2-grocery-shopping': 'case',
  'a2-visiting-customs': 'case',
  'a2-locative-adjectives': 'case',
  'a2-quality-of-life': 'case',
  'a2-problems-at-work': 'case',
  'a2-informal-email': 'case',
  'a2-aspect-pairs': 'verb',
  'a2-aspect-in-past': 'verb',
  'a2-conditional-forms': 'verb',
  'a2-conditional-wishes': 'verb',
  'a2-conditional-if': 'verb',
  'a2-imperative-review': 'verb',
  'a2-vocative-review': 'case',
  'a2-volunteering': 'case',
  'a2-agreeing-disagreeing': 'case',
  'a2-dative-adjectives': 'case',
  'a2-possessive-dative': 'case',
  'a2-verbs-with-dative-a2': 'verb',
  'a2-impersonal-feelings': 'verb',
  'a2-car-and-traffic': 'case',
  'a2-public-transport': 'case',
  'a2-phone-calls-a2': 'case',
  'b1-superlatives-irregular': 'case',
  'b1-comparative-adverbs': 'verb',
  'b1-character-traits': 'case',
  'b1-appearance-compliments': 'case',
  'b1-future-ii': 'verb',
  'b1-instrumental-adjectives': 'case',
  'b1-verbs-with-instrumental': 'verb',
  'b1-job-application': 'case',
  'b1-satisfaction-disappointment': 'case',
  'b1-genitive-adjectives': 'case',
  'b1-genitive-plural-special': 'case',
  'b1-time-genitive': 'case',
  'b1-verbs-with-genitive': 'verb',
  'b1-nouns-en-et': 'case',
  'b1-verbs-peci-sti': 'verb',
  'b1-names-and-meanings': 'case',
  'b1-love-and-marriage': 'case',
  'b1-foreign-nouns-declension': 'case',
  'b1-verbs-vati-jem': 'verb',
  'b1-croats-abroad': 'case',
  'b2-noun-peculiarities-a': 'case',
  'b2-present-ati-tricky': 'verb',
  'b2-false-friends': 'case',
  'b2-literacy-and-language': 'case',
  'b2-noun-peculiarities-e': 'case',
  'b2-present-ivati-nuti': 'verb',
  'b2-internet-society': 'case',
  'b2-internationalisms': 'case',
  'b2-human-rights': 'case',
  'b2-relative-pronouns-cases': 'case',
  'b2-predicate-instrumental': 'case',
  'b2-comparative-idioms': 'case',
  'b2-reading-culture': 'case',
  'b2-indefinite-pronouns-cases': 'case',
  'b2-body-part-nouns': 'case',
  'b2-colloquialisms': 'case',
  'b2-health-prevention': 'case',
  'b2-agreement-special-nouns': 'case',
  'b2-quantity-agreement': 'case',
  'b2-family-changes': 'case',
  'b2-reflexive-sebe': 'verb',
  'b2-verbal-nouns-intro': 'verb',
  'b2-higher-education': 'case',
  'b2-iterative-conditional': 'verb',
  'b2-word-formation-agents': 'case',
  'b2-perfective-present': 'verb',
  'b2-coordinate-clauses': 'syntax',
  'b2-consumerism-advertising': 'case',
  'b2-dependent-clauses-b2': 'syntax',
  'b2-film-and-music': 'case',
  'b2-genitive-of-negation': 'case',
  'b2-climate-environment': 'case',
  'b2-reported-speech-b2': 'verb',
  'b2-interjections': 'case',
  'b2-travel-and-sport': 'case',
  'c1-i-nouns-mati-kci': 'case',
  'c1-accusative-measure-manner': 'case',
  'c1-coordinate-conclusive-clauses': 'syntax',
  'c1-abbreviations': 'case',
  'c1-collective-nouns': 'case',
  'c1-temporal-accusative': 'case',
  'c1-adversative-clauses': 'syntax',
  'c1-comma-basics': 'syntax',
  'c1-collective-plural': 'case',
  'c1-temporal-locative-idioms': 'case',
  'c1-disjunctive-gradational-clauses': 'syntax',
  'c1-irregular-nouns-doba-dio': 'case',
  'c1-rare-genitive-prepositions': 'case',
  'c1-comma-dependent-clauses': 'syntax',
  'c1-emphatic-genitive-stalo': 'case',
  'c1-multi-subject-agreement': 'case',
  'c1-cause-consequence-clauses': 'syntax',
  'c1-ethnonyms': 'case',
  'c1-objective-genitive': 'case',
  'c1-capitals-names-geography': 'vocab',
  'c1-hypocoristics-dvojica': 'case',
  'c1-ethical-dative': 'case',
  'c1-capitals-institutions': 'vocab',
  'c1-indefinite-adjectives': 'case',
  'c1-exclamatory-dative': 'case',
  'c1-depersonalization': 'verb',
  'c1-prefixed-verbs': 'verb',
  'c1-comparative-clauses': 'syntax',
  'c1-direct-speech-spelling': 'syntax',
  // A1 lesson drills (2026-11-12). Grouped by what each bank drills: nearly every item
  // produces a form, so the grammar families; the pronunciation drill is lexical, like alphabet.
  'a1-sounds-palatals': 'vocab',
  'a1-biti-questions-negation': 'verb',
  'a1-plural-irregular': 'case',
  'a1-jobs-professions': 'case',
  'a1-nationalities': 'case',
  'a1-numbers-11-1000': 'case',
  'a1-zvati-se': 'verb',
  'a1-masculine-plural-ovi': 'case',
  'a1-sibilarization': 'case',
  'a1-fleeting-a': 'case',
  'a1-colours': 'case',
  'a1-possessive-adjectives': 'case',
  'a1-verbs-ati-irati': 'verb',
  'a1-accusative-animate': 'case',
  'a1-at-the-hotel': 'case',
  'a1-trebati-need': 'verb',
  'a1-smjeti-permission': 'verb',
  'a1-money-exchange': 'case',
  'a1-ici-going': 'verb',
  'a1-u-na-motion': 'case',
  'a1-za-accusative': 'case',
  'a1-accusative-pronouns': 'case',
  'a1-travel-agency': 'case',
  'a1-jesti-piti': 'verb',
  'a1-at-the-restaurant': 'case',
  'a1-verbs-iti-jeti': 'verb',
  'a1-locative-pronouns': 'case',
  'a1-verbs-ovati': 'verb',
  'a1-months': 'case',
  'a1-flat-rooms': 'case',
  'a1-phone-call': 'verb',
  'a1-past-irregular': 'verb',
  'a1-past-story': 'verb',
  'a1-future-plans': 'verb',
  'a1-dative-prepositions': 'case',
  'a1-giving-and-sending': 'case',
  'a1-verbs-with-dative': 'verb',
  'a1-postcards-wishes': 'case',
  'a1-daily-routine': 'verb',
  'a1-reflexive-past-future': 'verb',
  'a1-school-education': 'verb',
  'a1-instrumental-means': 'case',
  'a1-instrumental-place': 'case',
  'a1-instrumental-pronouns': 'case',
  'a1-genitive-partitive': 'case',
  'a1-nemati-genitive': 'case',
  'a1-genitive-prepositions': 'case',
  'a1-genitive-pronouns': 'case',
  'a1-numbers-genitive': 'case',
  'a1-dates-years': 'case',
  'a1-boljeti': 'verb',
  'a1-i-nouns-intro': 'case',
  'a1-pluralia-tantum': 'case',
  'a1-sports-free-time': 'verb',
  'a1-abstract-ost': 'case',
  'a1-feelings': 'case',
  'a1-imperative-negative': 'verb',
  'a1-infinitive-ci': 'verb',
  'a1-formal-address': 'case',
  'a1-travel-croatia': 'case',
  appearance: 'vocab',
  jobs: 'vocab',
  education: 'vocab',
  hobbies: 'vocab',
  travel: 'case',
  invitations: 'vocab',
  celebrations: 'vocab',
  // B1 topical block (2026-08-30), grouped by the structure the drill tests
  // rather than by the topic label — SKILL_GROUP is what the P3 variety pass
  // reads. `feelings` is case government end to end (bojati se + genitive,
  // nadati se + dative), so it groups with 'case', exactly as `verb-government`
  // does. `opinions` and `news` are clause structure (the obligatory da; the
  // verbless headline and reported speech), so 'syntax'. `complaints`,
  // `job-search` and `cooking` turn on a verb form — the fault-reporting
  // reflexive and the conditional, the participle agreeing with the applicant,
  // and the recipe imperative — so 'verb'. The remaining four are lexical.
  //
  // TWO OF THOSE FOUR WERE RE-AUDITED AND MOVED (2026-08-31), by the same
  // finding that corrected the A1 block — with one difference worth recording:
  // at A1 the drills' own bank HEADERS already named the structure and the rows
  // contradicted them, so reading the headers was enough. Here the headers are
  // not reliable in either direction, so the ITEMS decided it.
  //
  // The criterion, stated so it is re-checkable rather than a judgement call:
  // a drill counts as structural when its FORM-PRODUCTION items (a `____` the
  // learner must fill with an inflected form or a governed preposition) are a
  // substantial share of the bank AND actually test a grammatical choice.
  // Measured over the 24-item banks:
  //   food 14/24, home 12/24            — already 'case', the calibration
  //   bureaucracy 11/24  -> 'verb'      — see below
  //   renting 9/24       -> 'case'      — see below
  //   nature 7/24        -> stays vocab — 10 of its items are pure glosses
  //                                       ("Što je 'uvala'?"); only 3 test u/na
  //   technology 4/24    -> stays vocab — 17% form items; the lesson is the
  //                                       native/international register split
  //
  // `bureaucracy` is the impersonal register, and its `sluzbeni` mode drills the
  // construction rather than naming it: *Potrebno je priložiti* (neuter, with
  // nothing to agree with), *Zahtjev se predaje*, *Molba se podnosi*, and an
  // item that asks outright who the subject is — the answer being nobody. That
  // is the same se-construction `impersonal` is grouped 'verb' for.
  //
  // `renting` is the one whose header UNDERSELLS it: it is written about the
  // room-counting fact that costs a learner money, but the bank drills quantity
  // genitive (*55 kvadrata*, *500 eura*), participle agreement (*jesu li režije
  // uključene*), accusative plural (*kućne ljubimce*) and locative with an
  // ordinal (*na četvrtom katu*). A learner doing it practises case, whatever
  // the lesson is called.
  opinions: 'syntax',
  feelings: 'case',
  complaints: 'verb',
  bureaucracy: 'verb',
  renting: 'case',
  'job-search': 'verb',
  news: 'syntax',
  technology: 'vocab',
  nature: 'vocab',
  cooking: 'verb',
  // B2 functional block (2026-08-30), grouped by the structure each drill
  // tests. `abstract` is declension plus fixed prepositions, so 'case'.
  // `argument` and `registers` are clause-level operations (the u tome što
  // frame; the passive/nominalization pair), so 'syntax'. `hedging` turns on
  // the conditional, so 'verb'. `presenting`, `meetings` and `smalltalk` are
  // spoken performance, so 'speaking'. `literature` is a reading drill and is
  // the first entry to use that group. The remaining four are lexical.
  //
  // THREE MOVED ON THE 2026-08-31 RE-AUDIT, by the same item-share criterion the
  // B1 block records. Form-production share of each 24-item bank, against the
  // calibration (food 14/24 and home 12/24, both 'case'; renting 9/24 was the
  // lowest accepted):
  //   meetings 15/24, intensity 12/24, presenting 11/24, politics 11/24,
  //   nature 7/24 and technology 4/24 (both rejected at B1), smalltalk 7/24,
  //   business 6/24, literature 6/24, humour 2/24, language-history 2/24.
  //
  // Counting was not sufficient — a `____` can be a vocabulary fill — so the
  // four over the bar were read item by item, and only three survived:
  //
  //   intensity  -> 'case'   sve + comparative (*sve bolje*, *sve kraći*) and
  //                          the *što… to* correlative. It was 'vocab' as
  //                          "adverbial grading", but the items produce
  //                          comparative FORMS, and `comparison` and
  //                          `advanced-comparison` are both 'case'.
  //   politics   -> 'case'   participle agreement with subject gender (*Sabor
  //                          je izglasao* / *Vlada je podnijela*), locative
  //                          (*u Saboru*), the *su održani* passive, and
  //                          accusative government (*na izbore*, *za stranku*).
  //   meetings   -> 'syntax' its header states the structural point outright —
  //                          *Predlažem da* takes a da-CLAUSE with the present
  //                          tense, not the infinitive, because the subject
  //                          changes. That is what `infinitive-da` is 'syntax'
  //                          for. It was 'speaking' as spoken performance, but
  //                          the bank is a multiple-choice drill with no
  //                          microphone, and SKILL_GROUP is read only by the
  //                          variety pass and the grammar derivation — nothing
  //                          about production or the mastery ledger reads it.
  //
  // `presenting` was the one rejected of the four: its header calls the
  // structure "signposting", but the form items are a grab-bag (*bih*,
  // *izlaganja*, *u tri dijela*, *ste došli*) rather than one structure being
  // drilled, so it stays 'speaking'. `smalltalk`, `business`, `humour`,
  // `language-history` and `literature` are all well under the bar.
  argument: 'syntax',
  hedging: 'verb',
  abstract: 'case',
  registers: 'syntax',
  presenting: 'speaking',
  meetings: 'syntax',
  business: 'vocab',
  politics: 'case',
  smalltalk: 'speaking',
  humour: 'vocab',
  'language-history': 'vocab',
  literature: 'reading',
  // C1 functional block (2026-08-30), grouped by what each drill exercises.
  // `particles`, `debate` and `formal-speech` are spoken performance.
  // `translation` and `proofreading` are clause-level repair, so 'syntax'.
  // `media-analysis` and `legal` are both reading a text for what it does not
  // say outright. The remaining five are lexical.
  particles: 'speaking',
  debate: 'speaking',
  'formal-speech': 'speaking',
  translation: 'syntax',
  proofreading: 'syntax',
  'media-analysis': 'reading',
  legal: 'reading',
  science: 'vocab',
  arts: 'vocab',
  regional: 'vocab',
  identity: 'vocab',
  diaspora: 'vocab',
  norm: 'syntax',
  'declension-exceptions': 'case',
  'number-norm': 'case',
  'agreement-subtleties': 'syntax',
  'case-subtleties': 'case',
  modality: 'verb',
  rhythm: 'syntax',
  irony: 'speaking',
  wordplay: 'speaking',
  'literary-style': 'reading',
  'old-texts': 'reading',
  reconstruction: 'reading',
  spontaneous: 'speaking',
  'specialist-translation': 'syntax',
  phraseology: 'vocab',
  'dialects-deep': 'vocab',
  'language-society': 'vocab',
  politeness: 'vocab',
  'preposition-case': 'case',
  'adjective-agreement': 'case',
  adverbs: 'vocab',
  conjunctions: 'syntax',
  'relative-koji': 'syntax',
  // indefinites: regrouped 'vocab' → 'case' (2026-11-12): 14 of its 24 items produce a form
  // (negative concord, nikoga/ničega, ni s kim), the same bar that regrouped the A1 topic drills.
  indefinites: 'case',
  duration: 'case',
  position: 'verb',
  'real-conditions': 'verb',
  wishes: 'verb',
  'modal-nuance': 'verb',
  'two-case-prepositions': 'case',
  alphabet: 'vocab',
  collocations: 'vocab',
  prosody: 'speaking',
  'advanced-comparison': 'case',
  'word-formation': 'vocab',
  diminutives: 'vocab',
  summarising: 'syntax',
  'i-declension': 'case',
  'verbal-adverbs': 'verb',
  'negation-advanced': 'verb',
  'aspect-verbs': 'verb',
  // Moved from 'vocab' 2026-08-31; rationale with the B2 functional block above.
  intensity: 'case',
  orthography: 'vocab',
  punctuation: 'vocab',
  'admin-style': 'vocab',
  'academic-style': 'verb',
  'journalistic-style': 'syntax',
  'figures-of-speech': 'syntax',
  editing: 'vocab',
  precision: 'vocab',
  nominative: 'case',
  genitive: 'case',
  accusative: 'case',
  'dative-locative': 'case',
  // Grouped with the CASES, not with the verbs, and deliberately: the variety
  // pass exists to stop a session serving four case drills in a row, and a
  // learner doing `rekcija` is picking a case. Grouping it as 'verb' would let
  // it appear alongside three other case drills — the exact failure the pass
  // was built to prevent. This also keeps the pass's behaviour byte-identical
  // to before the retag, when the entry grouped as 'case' via dative-locative.
  'verb-government': 'case',
  instrumental: 'case',
  vocative: 'case',
  'present-tense': 'verb',
  'past-tense': 'verb',
  'future-tense': 'verb',
  'aspect-imperfective': 'verb',
  'aspect-perfective': 'verb',
  'aspect-negation': 'verb',
  conditional: 'verb',
  'word-order': 'syntax',
  clitics: 'syntax',
  subordination: 'syntax',
  discourse: 'syntax',
  passive: 'verb',
  participle: 'verb',
  nominalization: 'verb',
  numerals: 'case',
  idioms: 'vocab',
  register: 'vocab',
  speaking: 'speaking',
  listening: 'listening',
  reading: 'reading',
  // 'writing' HAS exactly one CEFR_EXERCISE_POOL entry — `dictation`, retagged
  // here from 'speaking' on 2026-09-23 so the fill pool and PRODUCTION_POOL stop
  // disagreeing about the same screen. This comment used to say the family had no
  // fill-pool entries and that the row existed "for type completeness"; the
  // contingency it described ("if a writing entry ever joins the fill pool it will
  // vary against speaking rather than counting as a family of its own") is now
  // live, and it is exactly why that retag moved NOTHING: both 'speaking' and
  // 'writing' land in this one family, so the P3 variety pass is byte-identical
  // across the change.
  writing: 'speaking',
  // Rotating animated-lesson slot: catalog is predominantly verbal morphology.
  'grammar-lesson': 'verb',
};

/**
 * Skill group for a session activity's category, or undefined.
 *
 * Sessions carry Croatia activities tagged 'culture'/'practical'/'general',
 * which are deliberately outside the skill taxonomy — they return undefined and
 * the variety pass leaves them alone rather than forcing them into a family they
 * do not belong to.
 */
export function skillGroupOf(category: string): SkillGroup | undefined {
  return SKILL_GROUP[category as SkillCategory];
}
