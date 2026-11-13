// src/lib/categoryRoutes.ts
//
// CATEGORY → SCREEN ROUTING, extracted from useDailySession.ts (2026-08-28).
//
// Pure data, and the only reason it lives in its own module is that the hook
// had reached its 800-line lint cap and the coupling keeps needing new rows.
// Nothing else changed: the same three maps, the same comments, and
// useDailySession still passes them into buildCurriculumSlots exactly as before.
//
// The distinction that governs every row here: a category IN `ALL_CATEGORIES`
// is picked by the adaptive scheduler, so routing it changes what every learner
// at that level is served. A category NOT in it (nominative, subordination,
// numerals, word-order, idioms, passive, nominalization, register) is reachable
// only through the teach → practice coupling, so a row for it changes the
// coupling and nothing else. Check which kind you have before adding one.

import type { SkillCategory } from './adaptive';
import { CEFR_EXERCISE_POOL } from './sessionPools';

/** Maps adaptive SkillCategory → exercise screen id */
export const CATEGORY_SCREEN_MAP: Partial<Record<SkillCategory, string>> = {
  genitive: 'genitivedrill',
  accusative: 'accusativedrill',
  // 'nominative' is not in ALL_CATEGORIES, so the adaptive queue never picks it
  // and this row is inert for resolveAdaptiveActivity. It exists for the teach →
  // practice coupling: the A1 `cases` lesson teaches the case SYSTEM, and
  // nominative is where a learner starts using it. Without a route the coupling
  // would queue a category it could never resolve, and the lesson would once
  // again lead nowhere.
  nominative: 'nomdrill',
  // Route each case to its dedicated drill (these components already exist and
  // are registered in AppRouter). Previously dative-locative/instrumental/vocative
  // all collapsed to generic 'cloze', so even when the adaptive picker chose them
  // the learner never got a real case drill. Dative & locative share endings in
  // Croatian, so the locative drill covers the combined 'dative-locative' category.
  'dative-locative': 'locdrill',
  // Like 'nominative' above, 'subordination' is NOT in ALL_CATEGORIES, so the
  // adaptive queue never picks it and this row is inert for
  // resolveAdaptiveActivity. It exists for the teach → practice coupling, and it
  // repairs a mapping that has never resolved: `complex-sentences` (B2) has
  // pointed at this category since the coupling shipped, with no route to
  // follow, while eight subordination drills sat in the pool unreachable.
  subordination: 'subordination',
  // Five more categories that the coupling pointed at with no route to follow
  // (found 2026-08-28 by curriculumCouplingResolves.test.ts, which walks the
  // REAL maps instead of a copy). Ten lessons across every level queued a
  // category that could never become an activity. Like 'nominative' and
  // 'subordination', none of these is in ALL_CATEGORIES, so the adaptive picker
  // is unaffected — this changes the coupling and nothing else.
  numerals: 'numtime',
  // The A1 gender lesson's drill (owner decision, 2026-08-28). genderdrill is
  // A1, so unlike the old 'vocab-a2' route this resolves for exactly the
  // learners the lesson is written for.
  gender: 'genderdrill',
  // A1 plural drill (practice programme wave 1, 2026-08-29).
  plural: 'pluraldrill',
  negation: 'negacija',
  adjectives: 'pridjevi',
  demonstratives: 'pokazne',
  having: 'imatidrill',
  imperative: 'imperativ',
  // Existing A1 drill, retagged 2026-08-29 (it was 'nominative').
  possessives: 'possess',
  // A1 tranche 3 (2026-08-29). `time` routes to the A1 clock-and-calendar
  // drill, NOT to `numtime`/`datumi` — the `numerals` category already owns
  // those and they are about counting and ordinal declension.
  questions: 'upitne',
  'place-prepositions': 'mjesto',
  time: 'vrijemea1',
  greetings: 'pozdravi',
  // A2 tranche 1 (2026-08-29). Each replaces a route that existed only at B1/B2
  // and so could never resolve for the A2 lesson that needed it.
  'reflexive-possessive': 'svojdrill',
  'plural-cases': 'mnozinapadezi',
  quantity: 'kolicinaa2',
  comparison: 'komparacija',
  // B1 tranche 1 (2026-08-29). None of these reuses an existing category: the
  // drills that already taught this material are tagged `subordination`,
  // `passive` and `register`, all of which route elsewhere and three of which
  // would have collided on one screen.
  'infinitive-da': 'infda',
  'reported-speech': 'prepricavanje',
  impersonal: 'bezlicnob1',
  'time-clauses': 'vrijemeklauze',
  'cause-purpose': 'uzrokb1',
  // C2 tranche 1 (2026-08-29). No new drills — each of these routes to an
  // EXISTING C2 screen that was already the right exercise and could not be
  // reached, because its pool tag was one of the C-level catch-alls (`register`
  // held sixteen entries) and a category routes to one screen only.
  // B2 tranche 1 (2026-08-29). `i-declension` keeps the C1 drill as its PRIMARY
  // route — `isklonidba` is that paradigm and was simply mis-tagged
  // `instrumental`, which is a case, not a declension class — with the new B2
  // bank as the easier route below it. The other four are authored B2 drills
  // whose nearest existing match sat at C1/C2 with nothing lower to fall to.
  // C1 tranche 1 (2026-08-29). `collocations` and `prosody` route to existing C1
  // screens that were only ever unreachable because their pool tag was a
  // catch-all; the other four route to authored C1 banks.
  // A1 topical block (2026-08-29). Topic-specific banks, each routed to itself.
  family: 'obitelj',
  countries: 'zemlje',
  food: 'hrana',
  directions: 'grad',
  weather: 'meteo',
  preferences: 'svidjanje',
  // A2 topical block (2026-08-29). Each routes to its own authored bank. None
  // routes to the same-named REFERENCE screen (`clothes`, `bodydesc`,
  // `professions`, `countries`, `lifeevents`): those are browse lists with no
  // completion, so a coupling at one could resolve and never clear.
  home: 'dom',
  health: 'zdravlje',
  clothing: 'odjeca',
  'a2-declension-review': 'a2declensionreview',
  'a2-relational-adjectives': 'a2relationaladjectives',
  'a2-possessive-adjectives-cases': 'a2possessiveadjectivescases',
  'a2-official-forms': 'a2officialforms',
  'a2-accusative-adjectives': 'a2accusativeadjectives',
  'a2-clitic-order': 'a2cliticorder',
  'a2-verbs-nuti': 'a2verbsnuti',
  'a2-weekend-plans': 'a2weekendplans',
  'a2-grocery-shopping': 'a2groceryshopping',
  'a2-visiting-customs': 'a2visitingcustoms',
  'a2-locative-adjectives': 'a2locativeadjectives',
  'a2-quality-of-life': 'a2qualityoflife',
  'a2-problems-at-work': 'a2problemsatwork',
  'a2-informal-email': 'a2informalemail',
  'a2-aspect-pairs': 'a2aspectpairs',
  'a2-aspect-in-past': 'a2aspectinpast',
  'a2-conditional-forms': 'a2conditionalforms',
  'a2-conditional-wishes': 'a2conditionalwishes',
  'a2-conditional-if': 'a2conditionalif',
  'a2-imperative-review': 'a2imperativereview',
  'a2-vocative-review': 'a2vocativereview',
  'a2-volunteering': 'a2volunteering',
  'a2-agreeing-disagreeing': 'a2agreeingdisagreeing',
  'a2-dative-adjectives': 'a2dativeadjectives',
  'a2-possessive-dative': 'a2possessivedative',
  'a2-verbs-with-dative-a2': 'a2verbswithdativea2',
  'a2-impersonal-feelings': 'a2impersonalfeelings',
  'a2-car-and-traffic': 'a2carandtraffic',
  'a2-public-transport': 'a2publictransport',
  'a2-phone-calls-a2': 'a2phonecallsa2',
  'b1-superlatives-irregular': 'b1superlativesirregular',
  'b1-comparative-adverbs': 'b1comparativeadverbs',
  'b1-character-traits': 'b1charactertraits',
  'b1-appearance-compliments': 'b1appearancecompliments',
  'b1-future-ii': 'b1futureii',
  'b1-instrumental-adjectives': 'b1instrumentaladjectives',
  'b1-verbs-with-instrumental': 'b1verbswithinstrumental',
  'b1-job-application': 'b1jobapplication',
  'b1-satisfaction-disappointment': 'b1satisfactiondisappointment',
  'b1-genitive-adjectives': 'b1genitiveadjectives',
  'b1-genitive-plural-special': 'b1genitivepluralspecial',
  'b1-time-genitive': 'b1timegenitive',
  'b1-verbs-with-genitive': 'b1verbswithgenitive',
  'b1-nouns-en-et': 'b1nounsenet',
  'b1-verbs-peci-sti': 'b1verbspecisti',
  'b1-names-and-meanings': 'b1namesandmeanings',
  'b1-love-and-marriage': 'b1loveandmarriage',
  'b1-foreign-nouns-declension': 'b1foreignnounsdeclension',
  'b1-verbs-vati-jem': 'b1verbsvatijem',
  'b1-croats-abroad': 'b1croatsabroad',
  'b2-noun-peculiarities-a': 'b2nounpeculiaritiesa',
  'b2-present-ati-tricky': 'b2presentatitricky',
  'b2-false-friends': 'b2falsefriends',
  'b2-literacy-and-language': 'b2literacyandlanguage',
  'b2-noun-peculiarities-e': 'b2nounpeculiaritiese',
  'b2-present-ivati-nuti': 'b2presentivatinuti',
  'b2-internet-society': 'b2internetsociety',
  'b2-internationalisms': 'b2internationalisms',
  'b2-human-rights': 'b2humanrights',
  'b2-relative-pronouns-cases': 'b2relativepronounscases',
  'b2-predicate-instrumental': 'b2predicateinstrumental',
  'b2-comparative-idioms': 'b2comparativeidioms',
  'b2-reading-culture': 'b2readingculture',
  'b2-indefinite-pronouns-cases': 'b2indefinitepronounscases',
  'b2-body-part-nouns': 'b2bodypartnouns',
  'b2-colloquialisms': 'b2colloquialisms',
  'b2-health-prevention': 'b2healthprevention',
  'b2-agreement-special-nouns': 'b2agreementspecialnouns',
  'b2-quantity-agreement': 'b2quantityagreement',
  'b2-family-changes': 'b2familychanges',
  'b2-reflexive-sebe': 'b2reflexivesebe',
  'b2-verbal-nouns-intro': 'b2verbalnounsintro',
  'b2-higher-education': 'b2highereducation',
  'b2-iterative-conditional': 'b2iterativeconditional',
  'b2-word-formation-agents': 'b2wordformationagents',
  'b2-perfective-present': 'b2perfectivepresent',
  'b2-coordinate-clauses': 'b2coordinateclauses',
  'b2-consumerism-advertising': 'b2consumerismadvertising',
  'b2-dependent-clauses-b2': 'b2dependentclausesb2',
  'b2-film-and-music': 'b2filmandmusic',
  'b2-genitive-of-negation': 'b2genitiveofnegation',
  'b2-climate-environment': 'b2climateenvironment',
  'b2-reported-speech-b2': 'b2reportedspeechb2',
  'b2-interjections': 'b2interjections',
  'b2-travel-and-sport': 'b2travelandsport',
  'b2-conditional': 'b2conditional',
  'b2-unreal-conditions': 'b2unrealconditions',
  'b2-concession-contrast': 'b2concessioncontrast',
  'c1-i-nouns-mati-kci': 'c1inounsmatikci',
  'c1-accusative-measure-manner': 'c1accusativemeasuremanner',
  'c1-coordinate-conclusive-clauses': 'c1coordinateconclusiveclauses',
  'c1-abbreviations': 'c1abbreviations',
  'c1-collective-nouns': 'c1collectivenouns',
  'c1-temporal-accusative': 'c1temporalaccusative',
  'c1-adversative-clauses': 'c1adversativeclauses',
  'c1-comma-basics': 'c1commabasics',
  'c1-collective-plural': 'c1collectiveplural',
  'c1-temporal-locative-idioms': 'c1temporallocativeidioms',
  'c1-disjunctive-gradational-clauses': 'c1disjunctivegradationalclauses',
  'c1-irregular-nouns-doba-dio': 'c1irregularnounsdobadio',
  'c1-rare-genitive-prepositions': 'c1raregenitiveprepositions',
  'c1-comma-dependent-clauses': 'c1commadependentclauses',
  'c1-emphatic-genitive-stalo': 'c1emphaticgenitivestalo',
  'c1-multi-subject-agreement': 'c1multisubjectagreement',
  'c1-cause-consequence-clauses': 'c1causeconsequenceclauses',
  'c1-ethnonyms': 'c1ethnonyms',
  'c1-objective-genitive': 'c1objectivegenitive',
  'c1-capitals-names-geography': 'c1capitalsnamesgeography',
  'c1-hypocoristics-dvojica': 'c1hypocoristicsdvojica',
  'c1-ethical-dative': 'c1ethicaldative',
  'c1-capitals-institutions': 'c1capitalsinstitutions',
  'c1-indefinite-adjectives': 'c1indefiniteadjectives',
  'c1-exclamatory-dative': 'c1exclamatorydative',
  'c1-depersonalization': 'c1depersonalization',
  'c1-prefixed-verbs': 'c1prefixedverbs',
  'c1-comparative-clauses': 'c1comparativeclauses',
  'c1-direct-speech-spelling': 'c1directspeechspelling',
  'a1-sounds-palatals': 'a1soundspalatals',
  'a1-biti-questions-negation': 'a1bitiquestionsnegation',
  'a1-plural-irregular': 'a1pluralirregular',
  'a1-jobs-professions': 'a1jobsprofessions',
  'a1-nationalities': 'a1nationalities',
  'a1-numbers-11-1000': 'a1numbers11to1000',
  'a1-zvati-se': 'a1zvatise',
  'a1-masculine-plural-ovi': 'a1masculinepluralovi',
  'a1-sibilarization': 'a1sibilarization',
  'a1-fleeting-a': 'a1fleetinga',
  'a1-colours': 'a1colours',
  'a1-possessive-adjectives': 'a1possessiveadjectives',
  'a1-verbs-ati-irati': 'a1verbsatiirati',
  'a1-accusative-animate': 'a1accusativeanimate',
  'a1-at-the-hotel': 'a1atthehotel',
  'a1-trebati-need': 'a1trebatineed',
  'a1-smjeti-permission': 'a1smjetipermission',
  'a1-money-exchange': 'a1moneyexchange',
  'a1-ici-going': 'a1icigoing',
  'a1-u-na-motion': 'a1unamotion',
  'a1-za-accusative': 'a1zaaccusative',
  'a1-accusative-pronouns': 'a1accusativepronouns',
  'a1-travel-agency': 'a1travelagency',
  'a1-jesti-piti': 'a1jestipiti',
  'a1-at-the-restaurant': 'a1attherestaurant',
  'a1-verbs-iti-jeti': 'a1verbsitijeti',
  'a1-locative-pronouns': 'a1locativepronouns',
  'a1-verbs-ovati': 'a1verbsovati',
  'a1-months': 'a1months',
  'a1-flat-rooms': 'a1flatrooms',
  'a1-phone-call': 'a1phonecall',
  'a1-past-irregular': 'a1pastirregular',
  'a1-past-story': 'a1paststory',
  'a1-future-plans': 'a1futureplans',
  'a1-dative-prepositions': 'a1dativeprepositions',
  'a1-giving-and-sending': 'a1givingandsending',
  'a1-verbs-with-dative': 'a1verbswithdative',
  'a1-postcards-wishes': 'a1postcardswishes',
  'a1-daily-routine': 'a1dailyroutine',
  'a1-reflexive-past-future': 'a1reflexivepastfuture',
  'a1-school-education': 'a1schooleducation',
  'a1-instrumental-means': 'a1instrumentalmeans',
  'a1-instrumental-place': 'a1instrumentalplace',
  'a1-instrumental-pronouns': 'a1instrumentalpronouns',
  'a1-genitive-partitive': 'a1genitivepartitive',
  'a1-nemati-genitive': 'a1nematigenitive',
  'a1-genitive-prepositions': 'a1genitiveprepositions',
  'a1-genitive-pronouns': 'a1genitivepronouns',
  'a1-numbers-genitive': 'a1numbersgenitive',
  'a1-dates-years': 'a1datesyears',
  'a1-boljeti': 'a1boljeti',
  'a1-i-nouns-intro': 'a1inounsintro',
  'a1-pluralia-tantum': 'a1pluraliatantum',
  'a1-sports-free-time': 'a1sportsfreetime',
  'a1-abstract-ost': 'a1abstractost',
  'a1-feelings': 'a1feelings',
  'a1-imperative-negative': 'a1imperativenegative',
  'a1-infinitive-ci': 'a1infinitiveci',
  'a1-formal-address': 'a1formaladdress',
  'a1-travel-croatia': 'a1travelcroatia',
  appearance: 'izgled',
  jobs: 'zanimanja',
  education: 'skola',
  hobbies: 'hobiji',
  travel: 'putovanje',
  invitations: 'dogovor',
  celebrations: 'blagdani',
  // B1 topical block (2026-08-30). Each routes to its own authored bank.
  opinions: 'misljenje',
  feelings: 'osjecaji',
  complaints: 'zalbe',
  bureaucracy: 'salter',
  renting: 'najam',
  'job-search': 'zivotopis',
  news: 'mediji',
  technology: 'tehnologija',
  nature: 'priroda',
  cooking: 'kuhanje',
  // B2 functional block (2026-08-30). Each routes to its own authored bank.
  argument: 'argumentacija',
  hedging: 'ograde',
  abstract: 'apstraktno',
  registers: 'registri',
  presenting: 'izlaganje',
  meetings: 'sastanci',
  business: 'poslovno',
  politics: 'politika',
  smalltalk: 'caskanje',
  humour: 'humor',
  'language-history': 'povijestjezika',
  literature: 'knjizevnost',
  // C1 functional block (2026-08-30). Each routes to its own authored bank.
  particles: 'cestice',
  debate: 'debata',
  'formal-speech': 'govor',
  translation: 'prevodjenje',
  proofreading: 'lektura',
  'media-analysis': 'analizamedija',
  legal: 'pravo',
  science: 'znanost',
  arts: 'umjetnost',
  regional: 'regionalizmi',
  identity: 'identitet',
  diaspora: 'dijaspora',
  norm: 'norma',
  'declension-exceptions': 'sklonidbaizn',
  'number-norm': 'brojevinorma',
  'agreement-subtleties': 'slaganjec2',
  'case-subtleties': 'padezisupt',
  modality: 'naciniobveze',
  rhythm: 'ritam',
  irony: 'ironija',
  wordplay: 'humorjezik',
  'literary-style': 'knjizevni',
  'old-texts': 'staritekstovi',
  reconstruction: 'rekonstrukcija',
  spontaneous: 'spontano',
  'specialist-translation': 'prevodjenjestr',
  phraseology: 'frazemi',
  'dialects-deep': 'dijalektic2',
  'language-society': 'jezikdrustvo',
  politeness: 'persiranje',
  'preposition-case': 'prijedlozia2',
  'adjective-agreement': 'slaganjea2',
  adverbs: 'prilozia2',
  conjunctions: 'veznici',
  'relative-koji': 'kojia2',
  indefinites: 'neodredjenea2',
  duration: 'trajanje',
  position: 'polozaj',
  'real-conditions': 'stvarniuvjeti',
  wishes: 'zaljenje',
  'modal-nuance': 'modalninijanse',
  'two-case-prepositions': 'dvopadezni',
  alphabet: 'alphabet',
  collocations: 'kolokacije',
  prosody: 'pitchaccent',
  'advanced-comparison': 'usporedbec1',
  'word-formation': 'tvorbac1',
  diminutives: 'deminutivi',
  summarising: 'sazimanje',
  'i-declension': 'isklonidba',
  'verbal-adverbs': 'prilozib2',
  'negation-advanced': 'negacijab2',
  'aspect-verbs': 'vidglagoli',
  intensity: 'intenzitet',
  orthography: 'pravopis',
  punctuation: 'interpunkcija',
  'admin-style': 'administrativni',
  'academic-style': 'akademski',
  'journalistic-style': 'novinski',
  'figures-of-speech': 'stilskefigure',
  editing: 'lektor',
  precision: 'preciznost',
  // The C1 verb-government lesson's drill (owner decision, 2026-08-28). The
  // pool entry now carries this category, so the route and the tag agree and
  // the coupling lands on RekcijaDrill rather than the locative drill.
  // `rekcija` is B2 and the lesson is C1, so no easier fallback is needed.
  'verb-government': 'rekcija',
  // Same class again (2026-08-28): RegisterDrill is standard-vs-colloquial and
  // the C2 `razgovorni-stil` lesson is exactly that. Not in ALL_CATEGORIES, so
  // like the rows above this touches the coupling and nothing else.
  register: 'register',
  'word-order': 'wordorderdrill',
  // Repointed from the reference screen to the DRILL (2026-08-30), which closes
  // the last dead-end coupling in the app.
  //
  // The 2026-08-28 dead-mapping repair routed five orphan categories by name,
  // and `idioms` had two candidates: `idioms` (B1, IdiomsScreen — a browse list,
  // tap an idiom to hear it, no quiz and no completion) and `idiomdrill` (C1, a
  // real graded drill on twelve figurative idioms, finishing through
  // completeExercise). It picked the one whose id matched the category name, so
  // the C1 `idioms-register` lesson queued a category resolving to a screen the
  // learner could never finish — it squatted a session slot for its whole TTL.
  //
  // `couplingClearingPath.test.ts` caught that and it was exempted, with the
  // recorded reason "needs an idiom DRILL at C1 (`frazeologija` exists but is
  // C2)". That reason named the wrong candidate: `idiomdrill` was in the pool at
  // C1 the entire time, so no drill ever had to be written. The exemption is
  // gone with this row.
  //
  // `idioms` is NOT in ALL_CATEGORIES, so this touches the coupling and nothing
  // the adaptive picker does; IdiomsScreen stays reachable through the P3 fill,
  // which walks the pool directly.
  idioms: 'idiomdrill',
  passive: 'passive',
  nominalization: 'nominalization',
  instrumental: 'instrumental',
  vocative: 'vocative',
  'past-tense': 'cloze',
  'future-tense': 'future',
  'aspect-imperfective': 'aspectdrill',
  'aspect-perfective': 'aspectdrill',
  'aspect-negation': 'aspectdrill',
  conditional: 'cloze',
  clitics: 'clitic',
  'vocab-a2': 'znam',
  'vocab-b1': 'znam',
  'vocab-b2': 'znam',
  // 'speaking' category adaptive picks don't route to a dedicated drill here;
  // spoken output is guaranteed by the production slot instead (PRODUCTION_POOL,
  // which since Wave 3 includes speaking_sprint again — it uses only browser
  // speech APIs, no AI quota).
  // Listening-channel fix (2026-08-14): 'listening' routes to the authored
  // graded-story bank (A1+, zero AI cost — NOT ai_listening, which spends
  // quota). The screen levels its own content, and its quiz finish now runs
  // through completeExercise, so the session-category bridge reschedules
  // listening from real accuracy like any grammar category.
  listening: 'listening_comprehension',
  // Production-teaching (2026-08-18): 'writing' routes to the guided-writing
  // teaching screen (A1+; study → frames → free production). This is what
  // makes a weak writing signal — from an exam, a graded submission's
  // error-types, or the session-category bridge — actually reschedule
  // WRITING practice; before this the category didn't exist and written
  // production could only win a random draw in the production slot.
  writing: 'writing_guided',
};

// Lower-level equivalent for a category whose mapped drill is CEFR-locked.
// Only for categories where a genuinely easier drill teaches the SAME concept —
// never a substitute from a different skill. Consulted by
// resolveAdaptiveActivity, which still CEFR-gates the fallback itself, so this
// can never surface a locked screen; it only rescues a category that would
// otherwise be dropped for the whole level.
export const CATEGORY_EASIER_SCREEN: Partial<Record<SkillCategory, string>> = {
  // present-tense maps to `cloze` (A2). A1 learners meet verbs in the
  // `present-tense-verbs` lesson and previously had nowhere to practise them.
  'present-tense': 'presentdrill',
  // b2-conditional maps to `b2conditional` (B2). The lesson id 'conditional' is ALSO the
  // completion key of the B1 ConditionalScreen, so a B1 learner queues this category too;
  // the A2 conditional-forms drill is the conditional drill that learner can open.
  'b2-conditional': 'a2conditionalforms',
  // subordination maps to `subordination` (B2). The B1 relative-clause lesson
  // needs a drill a B1 learner can actually open, and `relpron` is the one that
  // teaches the same thing one level down.
  subordination: 'relpron',
  // clitics maps to `clitic` (B2). The A2 `object-pronouns` lesson is where
  // me/te/ga/joj are actually taught, and CLAUDE.md recorded that lesson as
  // unmappable precisely because the only clitic drill was two levels above it.
  // Unlike the rows above this one, `clitics` IS in ALL_CATEGORIES, so this
  // also changes the adaptive picker: a learner below B2 measured weak on
  // clitics used to have the category dropped for their whole level and is now
  // served the A2 drill. That is the same fix `present-tense` got, and the same
  // reason.
  clitics: 'objekt',
  // i-declension maps to `isklonidba` (C1). The B2 lesson that teaches this
  // paradigm needs a drill a B2 learner can open.
  'i-declension': 'isklonidbab2',
};

// Screen → CEFR lookup derived from the pool. Used to CEFR-gate the adaptive
// pick (resolveAdaptiveActivity) so the coverage floor can't surface a locked
// drill (e.g. B1 accusative, B2 clitics) to an A1/A2 user.
export const SCREEN_CEFR: Record<string, string> = {
  ...Object.fromEntries(CEFR_EXERCISE_POOL.map((e) => [e.screen, e.cefr])),
  // vocative (VocativeScreen) is routed by the adaptive picker but is not part of
  // the Priority-3 fill pool, so it has no pool-derived CEFR. Part of the full
  // case system introduced at A1.
  vocative: 'A1',
};
