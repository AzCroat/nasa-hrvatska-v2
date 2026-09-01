// scripts/lintCroatianText.mjs
//
// CI lint that scans every Croatian text field in the content data files
// for non-Croatian-Latin characters. Catches the class of encoding-bleed
// bugs surfaced by the 2026-05-20 quality audit:
//   - Cyrillic chars mid-word (e.g. украшavamo)
//   - Cedilla-z `ţ` (Romanian/Turkish) where Croatian `ž` is expected
//   - Other Latin-with-accent confusions
//
// Croatian standard alphabet (Latin-only):
//   a b c č ć d đ e f g h i j k l m n o p r s š t u v z ž
//   plus loanword/proper-noun chars: q w x y
//   plus standard punctuation, digits, spaces, common typographic marks.
//
// Anything outside that whitelist in a `hr:`, `text:`, `paragraphs[]`, or
// other Croatian-text field is a lint error.
//
// Run: `node scripts/lintCroatianText.mjs`
//   exits 0 on clean, 1 on findings (CI fail).

import { readFile, readdir } from 'node:fs/promises';
import { resolve, relative, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

// Files to scan — server data is the canonical source; client data mirrors.
const TARGETS = [
  'functions/api/content/_data/scenarios.js',
  'functions/api/content/_data/lessons.js',
  // The A1 expansion (2026-08-28) lives in its own module. Adding it here is
  // not optional bookkeeping: a lesson file outside TARGETS is a file everyone
  // believes is linted and is not, which is precisely how exercises.js went 81
  // levelled exercises without ever being scanned.
  'functions/api/content/_data/lessonsA1.js',
  'functions/api/content/_data/lessonsA2.js',
  'functions/api/content/_data/lessonsB1.js',
  'functions/api/content/_data/lessonsB2.js',
  'functions/api/content/_data/lessonsC1.js',
  'functions/api/content/_data/lessonsC2.js',
  'functions/api/content/_data/gradedStories.js',
  'functions/api/content/_data/vocabulary.js',
  'functions/api/content/_data/vocabScenes.js',
  // exercises.js was absent from this list entirely — 81 levelled exercises
  // and 356 option arrays of authored Croatian, never once scanned. Found while
  // verifying the distractor pass on 2026-08-26.
  'functions/api/content/_data/exercises.js',
  'functions/api/content/_data/grammar.js',
  'functions/api/content/_data/grammarAdvanced.js',
  'functions/api/content/_data/learnPath.js',
  'functions/api/content/_data/core.js',
  'src/data/scenarios.js',
  'src/data/vocabulary.js',
  'src/data/cultural/proverbs.js',
  'src/data/cultural/history.js',
  'src/data/cultural/regions.js',
  'src/data/cultural/language.js',
  'src/data/cultural/events.js',
  'src/data/cultural/deepdives.js',
  'functions/api/content/_data/cultural/deepdives.js',
  // CEFR equivalency item bank — A1 inline (TypeScript) + A2–C1 JSON banks.
  // Included to catch encoding-bleed (Cyrillic homoglyphs, U+00AD soft hyphens,
  // mojibake, etc.) introduced by subagent authoring of the expanded 60/60/30 sets.
  'src/data/cefrEquivalencyItems.ts',
  'src/data/cefrEquivalencyItems/a2_to_b1.json',
  'src/data/cefrEquivalencyItems/b1_to_b2.json',
  'src/data/cefrEquivalencyItems/b2_to_c1.json',
  'src/data/cefrEquivalencyItems/c1_to_c2.json',
  'src/data/cefrEquivalencyItems/c2_mastery.json',
  // Guided-writing curriculum (2026-08-18): authored model texts, frames and
  // prompts — the largest single block of authored Croatian prose in src/.
  'src/data/writingCurriculum.ts',
  // ── 2026-08-26 sweep: everything else carrying authored Croatian ──────────
  'src/data/cultural/geography.js',
  'functions/api/content/_data/cultural/geography.js',
  'src/data/exercises.js',
  'functions/api/content/_data/cultural/regions.js',
  'functions/api/content/_data/cultural/history.js',
  'functions/api/content/_data/cultural/proverbs.js',
  'functions/api/content/_data/cultural/language.js',
  'src/data/bakaLetters.ts',
  'src/data/content.tsx',
  'src/data/daily-content.js',
  'src/data/writingTasks.ts',
  'src/data/speakingTasks.ts',
  'src/data/pitchAccentContent.js',
  'src/data/cultural/media.js',
  // Engine-backed drill banks (practice programme, 2026-08-29). A drill is now
  // a data file rather than a component, so this directory is where authored
  // Croatian practice content lives from here on.
  // ── 2026-08-31: the hand-written drill components ─────────────────────────
  // The 75+ drills that predate the ModeDrill engine are DATA wearing a .tsx
  // extension: q / answer / opts / tip, the same shape as src/data/drills/*
  // which has been linted since 2026-08-29. They carry essentially no English
  // UI prose (measured), which is what makes them separable from the rest of
  // src/components — the reason the component tree was excluded wholesale.
  'src/components/practice/AccusativeDrill.tsx',
  'src/components/practice/AdministrativniDrill.tsx',
  'src/components/practice/AkademskiDrill.tsx',
  'src/components/practice/AnimateAccDrill.tsx',
  'src/components/practice/AoristImperfektDrill.tsx',
  'src/components/practice/BezlicneDrill.tsx',
  'src/components/practice/C2StructureDrill.tsx',
  'src/components/practice/CliticDrill.tsx',
  'src/components/practice/ConditionalDrill.tsx',
  'src/components/practice/ConjugationDrill.tsx',
  'src/components/practice/ConjugationSessionDrill.tsx',
  'src/components/practice/DativeDrill.tsx',
  'src/components/practice/DatumiDrill.tsx',
  'src/components/practice/DiscourseDrill.tsx',
  'src/components/practice/DopisiDrill.tsx',
  'src/components/practice/DopusneDrill.tsx',
  'src/components/practice/DvovidniDrill.tsx',
  'src/components/practice/EmfazaDrill.tsx',
  'src/components/practice/EnklitikeDrill.tsx',
  'src/components/practice/EponimiDrill.tsx',
  'src/components/practice/FleetingADrill.tsx',
  'src/components/practice/FrazeologijaDrill.tsx',
  'src/components/practice/FuturDrugiDrill.tsx',
  'src/components/practice/GenitiveDrill.tsx',
  'src/components/practice/GerundDrill.tsx',
  'src/components/practice/GlagoliGovorenjaDrill.tsx',
  'src/components/practice/GlagolskiPriloziDrill.tsx',
  'src/components/practice/GlasovnePromjeneDrill.tsx',
  'src/components/practice/ISklonidbaDrill.tsx',
  'src/components/practice/IdiomDrill.tsx',
  'src/components/practice/ImeniceMeDrill.tsx',
  'src/components/practice/ImperativeDrill.tsx',
  'src/components/practice/InfinitivDaDrill.tsx',
  'src/components/practice/InstrumentalDrill.tsx',
  'src/components/practice/InterpunkcijaDrill.tsx',
  'src/components/practice/KalkoviDrill.tsx',
  'src/components/practice/KolicinaDrill.tsx',
  'src/components/practice/KolokacijeDrill.tsx',
  'src/components/practice/KonektoriDrill.tsx',
  'src/components/practice/KraticeDrill.tsx',
  'src/components/practice/LektorDrill.tsx',
  'src/components/practice/LocativeDrill.tsx',
  'src/components/practice/MnozinaDrill.tsx',
  'src/components/practice/ModalnostDrill.tsx',
  'src/components/practice/ModeDrill.tsx',
  'src/components/practice/MotionVerbsDrill.tsx',
  'src/components/practice/NamjeraDrill.tsx',
  'src/components/practice/NegationGenDrill.tsx',
  'src/components/practice/NeodredjeneDrill.tsx',
  'src/components/practice/NominalizationDrill.tsx',
  'src/components/practice/NominativeDrill.tsx',
  'src/components/practice/NovinskiDrill.tsx',
  'src/components/practice/NumbersCasesDrill.tsx',
  'src/components/practice/OdredjenostDrill.tsx',
  'src/components/practice/ParniVezniciDrill.tsx',
  'src/components/practice/ParticipleDrill.tsx',
  'src/components/practice/PassiveDrill.tsx',
  'src/components/practice/PitanjaDrill.tsx',
  'src/components/practice/PluskvamperfektDrill.tsx',
  'src/components/practice/PogodbeneDrill.tsx',
  'src/components/practice/PosloviceDrill.tsx',
  'src/components/practice/PosudjeniceDrill.tsx',
  'src/components/practice/PosvojniDrill.tsx',
  'src/components/practice/PovratniDrill.tsx',
  'src/components/practice/PravopisDrill.tsx',
  'src/components/practice/PrecisionDrill.tsx',
  'src/components/practice/PrenesenaDrill.tsx',
  'src/components/practice/PrepDrill.tsx',
  'src/components/practice/PresentTenseDrill.tsx',
  'src/components/practice/PribliznoDrill.tsx',
  'src/components/practice/PrijedloziGenDrill.tsx',
  'src/components/practice/PrijedlozniIzraziDrill.tsx',
  'src/components/practice/ProstorniDrill.tsx',
  'src/components/practice/RazgovorniDrill.tsx',
  'src/components/practice/RegisterDrill.tsx',
  'src/components/practice/RekcijaDrill.tsx',
  'src/components/practice/ReportedSpeechDrill.tsx',
  'src/components/practice/SavSvakiDrill.tsx',
  'src/components/practice/SinonimijaDrill.tsx',
  'src/components/practice/SklonidbaBrojevaDrill.tsx',
  'src/components/practice/SklonidbaImenaDrill.tsx',
  'src/components/practice/SlaganjeBrojevaDrill.tsx',
  'src/components/practice/SlojeviDrill.tsx',
  'src/components/practice/SrocnostDrill.tsx',
  'src/components/practice/StilskeFigureDrill.tsx',
  'src/components/practice/StupnjevanjeDrill.tsx',
  'src/components/practice/SubordinationDrill.tsx',
  'src/components/practice/TrpniDrill.tsx',
  'src/components/practice/TvorbaRijeciDrill.tsx',
  'src/components/practice/UljudnostDrill.tsx',
  'src/components/practice/UsporedbeDrill.tsx',
  'src/components/practice/UzrocneDrill.tsx',
  'src/components/practice/VelikoSlovoDrill.tsx',
  'src/components/practice/VidImperativDrill.tsx',
  'src/components/practice/VidNijanseDrill.tsx',
  'src/components/practice/VidskiParoviDrill.tsx',
  'src/components/practice/VremenskeDrill.tsx',
  'src/components/practice/VrijemeIzrazDrill.tsx',
  'src/components/practice/WordOrderDrill.tsx',
  'src/components/practice/ZamjeniceDrill.tsx',
  'src/components/practice/ZeljeDrill.tsx',
  // ── 2026-08-31, second wave: the rest of the authored Croatian in src/ ────
  // Censused before adding rather than assumed. All 90 remaining candidates
  // were dry-run through this lint and produced ONE finding — a false positive
  // (the Turkish etymon handled in findBadInString). The recorded reason for
  // excluding the component tree, that it mixes Croatian with English UI copy,
  // did not describe what was actually left: 83 of the 90 carry no English UI
  // prose at all.
  //
  // These 45 are the files the lint SCANS meaningfully (>=30 strings each,
  // 10,287 in total). Files it would barely see are deliberately NOT here: a
  // target whose fields never match is a file everybody believes is linted and
  // is not, which is the exercises.js / lessons.js finding this list exists to
  // avoid repeating. dialogueScenarios.js is absent because it is already
  // walked structurally, and test files are absent because they are not
  // learner-facing content.
  'src/lib/frequency500.ts',
  'src/components/practice/listening/exercises.ts',
  'src/components/practice/slangData.js',
  'src/components/practice/CefrTest.tsx',
  'src/components/learn/VocabSceneData.js',
  'src/components/practice/ClozeEngine.tsx',
  'src/components/croatia/BakaSummer.tsx',
  'src/components/learn/PracticalCroatianScreen.tsx',
  'src/components/learn/PitchAccentMastery.tsx',
  'src/components/practice/PronunciationContrast.tsx',
  'src/components/practice/CollocationsGame.tsx',
  'src/components/practice/DictationScreen.tsx',
  'src/components/croatia/ConversationScenarios.js',
  'src/components/practice/WordFamilies.tsx',
  'src/components/practice/ProductionDrillScreen.tsx',
  'src/components/croatia/CroatiaToday.tsx',
  'src/components/croatia/LifeEventsScreen.tsx',
  'src/components/learn/ConstellationData.js',
  'src/components/practice/SpeakingSprintScreen.tsx',
  'src/components/practice/exercises/NegationScreen.tsx',
  'src/components/croatia/HeritagePathScreen.tsx',
  'src/components/auth/PlacementTest.tsx',
  'src/components/learn/PastTenseLessonScreen.tsx',
  'src/components/learn/FutureTenseLessonScreen.tsx',
  'src/components/croatia/EasterScreen.tsx',
  'src/components/learn/CaseTransformerData.js',
  'src/components/croatia/CivicScreen.tsx',
  'src/components/learn/GrammarTrackScreen.tsx',
  'src/lib/lessonQuizBanks.ts',
  'src/components/croatia/DialectAwarenessScreen.tsx',
  'src/components/practice/PronunciationAssessScreen.tsx',
  'src/components/home/heroData.ts',
  'src/components/croatia/MediaTab.tsx',
  'src/components/learn/PhonemePracticeScreen.tsx',
  'src/components/croatia/SurvivalDinner.tsx',
  'src/data/caseConcepts.ts',
  'src/components/learn/TiViScreen.tsx',
  'src/components/hrvatska/doors.ts',
  'src/components/learn/HeritageModeScreen.tsx',
  'src/components/croatia/AIConversation.tsx',
  'src/components/home/heroHelpers.ts',
  'src/components/practice/WritingScreen.tsx',
  'src/components/croatia/KaficScreen.tsx',
  'src/components/croatia/MediaPlayerUtils.tsx',
  'src/hooks/useAward.ts',
  'src/data/drills/pluralDrill.ts',
  'src/data/drills/negationDrill.ts',
  'src/data/drills/adjectivesDrill.ts',
  'src/data/drills/demonstrativesDrill.ts',
  'src/data/drills/imatiDrill.ts',
  'src/data/drills/imperativeDrill.ts',
  'src/data/drills/questionsDrill.ts',
  'src/data/drills/placePrepositionsDrill.ts',
  'src/data/drills/timeCalendarDrill.ts',
  'src/data/drills/greetingsDrill.ts',
  'src/data/drills/svojDrill.ts',
  'src/data/drills/objectPronounsDrill.ts',
  'src/data/drills/pluralCasesDrill.ts',
  'src/data/drills/quantityDrill.ts',
  'src/data/drills/comparisonDrill.ts',
  'src/data/drills/infinitiveDaDrill.ts',
  'src/data/drills/reportedSpeechDrill.ts',
  'src/data/drills/impersonalDrill.ts',
  'src/data/drills/timeClausesDrill.ts',
  'src/data/drills/causePurposeDrill.ts',
  'src/data/drills/iDeclensionDrill.ts',
  'src/data/drills/verbalAdverbsDrill.ts',
  'src/data/drills/negationAdvancedDrill.ts',
  'src/data/drills/aspectVerbsDrill.ts',
  'src/data/drills/intensityDrill.ts',
  'src/data/drills/advancedComparisonDrill.ts',
  'src/data/drills/wordFormationDrill.ts',
  'src/data/drills/diminutivesC1Drill.ts',
  'src/data/drills/summarisingDrill.ts',
  'src/data/drills/familyDrill.ts',
  'src/data/drills/countriesDrill.ts',
  'src/data/drills/foodDrinkDrill.ts',
  'src/data/drills/directionsDrill.ts',
  'src/data/drills/weatherDrill.ts',
  'src/data/drills/preferencesDrill.ts',
  'src/data/drills/homeDrill.ts',
  'src/data/drills/healthDrill.ts',
  'src/data/drills/clothingDrill.ts',
  'src/data/drills/appearanceDrill.ts',
  'src/data/drills/jobsDrill.ts',
  'src/data/drills/educationDrill.ts',
  'src/data/drills/hobbiesDrill.ts',
  'src/data/drills/travelDrill.ts',
  'src/data/drills/invitationsDrill.ts',
  'src/data/drills/celebrationsDrill.ts',
  'src/data/drills/opinionsDrill.ts',
  'src/data/drills/feelingsDrill.ts',
  'src/data/drills/complaintsDrill.ts',
  'src/data/drills/bureaucracyDrill.ts',
  'src/data/drills/rentingDrill.ts',
  'src/data/drills/jobSearchDrill.ts',
  'src/data/drills/newsDrill.ts',
  'src/data/drills/technologyDrill.ts',
  'src/data/drills/natureDrill.ts',
  'src/data/drills/cookingDrill.ts',
  'src/data/drills/argumentDrill.ts',
  'src/data/drills/hedgingDrill.ts',
  'src/data/drills/abstractDrill.ts',
  'src/data/drills/registersDrill.ts',
  'src/data/drills/presentingDrill.ts',
  'src/data/drills/meetingsDrill.ts',
  'src/data/drills/businessDrill.ts',
  'src/data/drills/politicsDrill.ts',
  'src/data/drills/smalltalkDrill.ts',
  'src/data/drills/humourDrill.ts',
  'src/data/drills/languageHistoryDrill.ts',
  'src/data/drills/literatureDrill.ts',
  'src/data/drills/particlesDrill.ts',
  'src/data/drills/debateDrill.ts',
  'src/data/drills/formalSpeechDrill.ts',
  'src/data/drills/translationDrill.ts',
  'src/data/drills/proofreadingDrill.ts',
  'src/data/drills/mediaAnalysisDrill.ts',
  'src/data/drills/legalDrill.ts',
  'src/data/drills/scienceDrill.ts',
  'src/data/drills/artsDrill.ts',
  'src/data/drills/regionalDrill.ts',
  'src/data/drills/identityDrill.ts',
  'src/data/drills/diasporaDrill.ts',
  'src/data/drills/normDrill.ts',
  'src/data/drills/declensionExceptionsDrill.ts',
  'src/data/drills/numberNormDrill.ts',
  'src/data/drills/agreementSubtletiesDrill.ts',
  'src/data/drills/caseSubtletiesDrill.ts',
  'src/data/drills/modalityDrill.ts',
  'src/data/drills/rhythmDrill.ts',
  'src/data/drills/ironyDrill.ts',
  'src/data/drills/wordplayDrill.ts',
  'src/data/drills/literaryStyleDrill.ts',
  'src/data/drills/oldTextsDrill.ts',
  'src/data/drills/reconstructionDrill.ts',
  'src/data/drills/spontaneousDrill.ts',
  'src/data/drills/specialistTranslationDrill.ts',
  'src/data/drills/phraseologyDrill.ts',
  'src/data/drills/dialectsDeepDrill.ts',
  'src/data/drills/languageSocietyDrill.ts',
  'src/data/drills/politenessDrill.ts',
  'src/data/drills/prepositionCaseDrill.ts',
  'src/data/drills/adjectiveAgreementDrill.ts',
  'src/data/drills/adverbsDrill.ts',
  'src/data/drills/conjunctionsDrill.ts',
  'src/data/drills/relativeKojiDrill.ts',
  'src/data/drills/indefinitesDrill.ts',
  'src/data/drills/durationDrill.ts',
  'src/data/drills/positionDrill.ts',
  'src/data/drills/realConditionsDrill.ts',
  'src/data/drills/wishesDrill.ts',
  'src/data/drills/modalNuanceDrill.ts',
  'src/data/drills/twoCasePrepositionsDrill.ts',
  // ── 2026-09-01, third wave: the ModeDrill wrappers and the last content ──
  // The 109 lazy wrappers in practice/drills/ are the OTHER half of every
  // engine-backed drill: the bank in src/data/drills/ has been linted since
  // 2026-08-29, but the wrapper owns the title, the subtitle and the three
  // praise lines a learner reads on finishing — and those were invisible to
  // the matcher on both counts (JSX attributes, and field names it did not
  // list). Derived from the glob by croatianLintTargets.test.ts, so wrapper
  // number 110 cannot land outside this list quietly.
  'src/components/practice/drills/AbstractDrill.tsx',
  'src/components/practice/drills/AdjectiveAgreementDrill.tsx',
  'src/components/practice/drills/AdjectivesDrill.tsx',
  'src/components/practice/drills/AdvancedComparisonDrill.tsx',
  'src/components/practice/drills/AdverbsDrill.tsx',
  'src/components/practice/drills/AgreementSubtletiesDrill.tsx',
  'src/components/practice/drills/AppearanceDrill.tsx',
  'src/components/practice/drills/ArgumentDrill.tsx',
  'src/components/practice/drills/ArtsDrill.tsx',
  'src/components/practice/drills/AspectVerbsDrill.tsx',
  'src/components/practice/drills/BureaucracyDrill.tsx',
  'src/components/practice/drills/BusinessDrill.tsx',
  'src/components/practice/drills/CaseSubtletiesDrill.tsx',
  'src/components/practice/drills/CausePurposeDrill.tsx',
  'src/components/practice/drills/CelebrationsDrill.tsx',
  'src/components/practice/drills/ClothingDrill.tsx',
  'src/components/practice/drills/ComparisonDrill.tsx',
  'src/components/practice/drills/ComplaintsDrill.tsx',
  'src/components/practice/drills/ConjunctionsDrill.tsx',
  'src/components/practice/drills/CookingDrill.tsx',
  'src/components/practice/drills/CountriesDrill.tsx',
  'src/components/practice/drills/DebateDrill.tsx',
  'src/components/practice/drills/DeclensionExceptionsDrill.tsx',
  'src/components/practice/drills/DemonstrativesDrill.tsx',
  'src/components/practice/drills/DialectsDeepDrill.tsx',
  'src/components/practice/drills/DiasporaDrill.tsx',
  'src/components/practice/drills/DiminutivesC1Drill.tsx',
  'src/components/practice/drills/DirectionsDrill.tsx',
  'src/components/practice/drills/DurationDrill.tsx',
  'src/components/practice/drills/EducationDrill.tsx',
  'src/components/practice/drills/FamilyDrill.tsx',
  'src/components/practice/drills/FeelingsDrill.tsx',
  'src/components/practice/drills/FoodDrinkDrill.tsx',
  'src/components/practice/drills/FormalSpeechDrill.tsx',
  'src/components/practice/drills/GreetingsDrill.tsx',
  'src/components/practice/drills/HealthDrill.tsx',
  'src/components/practice/drills/HedgingDrill.tsx',
  'src/components/practice/drills/HobbiesDrill.tsx',
  'src/components/practice/drills/HomeDrill.tsx',
  'src/components/practice/drills/HumourDrill.tsx',
  'src/components/practice/drills/IDeclensionDrill.tsx',
  'src/components/practice/drills/IdentityDrill.tsx',
  'src/components/practice/drills/ImatiDrill.tsx',
  'src/components/practice/drills/ImperativeA1Drill.tsx',
  'src/components/practice/drills/ImpersonalB1Drill.tsx',
  'src/components/practice/drills/IndefinitesDrill.tsx',
  'src/components/practice/drills/InfinitiveDaDrill.tsx',
  'src/components/practice/drills/IntensityDrill.tsx',
  'src/components/practice/drills/InvitationsDrill.tsx',
  'src/components/practice/drills/IronyDrill.tsx',
  'src/components/practice/drills/JobSearchDrill.tsx',
  'src/components/practice/drills/JobsDrill.tsx',
  'src/components/practice/drills/LanguageHistoryDrill.tsx',
  'src/components/practice/drills/LanguageSocietyDrill.tsx',
  'src/components/practice/drills/LegalDrill.tsx',
  'src/components/practice/drills/LiteraryStyleDrill.tsx',
  'src/components/practice/drills/LiteratureDrill.tsx',
  'src/components/practice/drills/MediaAnalysisDrill.tsx',
  'src/components/practice/drills/MeetingsDrill.tsx',
  'src/components/practice/drills/ModalNuanceDrill.tsx',
  'src/components/practice/drills/ModalityDrill.tsx',
  'src/components/practice/drills/NatureDrill.tsx',
  'src/components/practice/drills/NegationAdvancedDrill.tsx',
  'src/components/practice/drills/NegationDrill.tsx',
  'src/components/practice/drills/NewsDrill.tsx',
  'src/components/practice/drills/NormDrill.tsx',
  'src/components/practice/drills/NumberNormDrill.tsx',
  'src/components/practice/drills/ObjectPronounsDrill.tsx',
  'src/components/practice/drills/OldTextsDrill.tsx',
  'src/components/practice/drills/OpinionsDrill.tsx',
  'src/components/practice/drills/ParticlesDrill.tsx',
  'src/components/practice/drills/PhraseologyDrill.tsx',
  'src/components/practice/drills/PlacePrepositionsDrill.tsx',
  'src/components/practice/drills/PluralCasesDrill.tsx',
  'src/components/practice/drills/PluralDrill.tsx',
  'src/components/practice/drills/PolitenessDrill.tsx',
  'src/components/practice/drills/PoliticsDrill.tsx',
  'src/components/practice/drills/PositionDrill.tsx',
  'src/components/practice/drills/PreferencesDrill.tsx',
  'src/components/practice/drills/PrepositionCaseDrill.tsx',
  'src/components/practice/drills/PresentingDrill.tsx',
  'src/components/practice/drills/ProofreadingDrill.tsx',
  'src/components/practice/drills/QuantityDrill.tsx',
  'src/components/practice/drills/QuestionsDrill.tsx',
  'src/components/practice/drills/RealConditionsDrill.tsx',
  'src/components/practice/drills/ReconstructionDrill.tsx',
  'src/components/practice/drills/RegionalDrill.tsx',
  'src/components/practice/drills/RegistersDrill.tsx',
  'src/components/practice/drills/RelativeKojiDrill.tsx',
  'src/components/practice/drills/RentingDrill.tsx',
  'src/components/practice/drills/ReportedSpeechB1Drill.tsx',
  'src/components/practice/drills/RhythmDrill.tsx',
  'src/components/practice/drills/ScienceDrill.tsx',
  'src/components/practice/drills/SmalltalkDrill.tsx',
  'src/components/practice/drills/SpecialistTranslationDrill.tsx',
  'src/components/practice/drills/SpontaneousDrill.tsx',
  'src/components/practice/drills/SummarisingDrill.tsx',
  'src/components/practice/drills/SvojDrill.tsx',
  'src/components/practice/drills/TechnologyDrill.tsx',
  'src/components/practice/drills/TimeCalendarDrill.tsx',
  'src/components/practice/drills/TimeClausesDrill.tsx',
  'src/components/practice/drills/TranslationDrill.tsx',
  'src/components/practice/drills/TravelDrill.tsx',
  'src/components/practice/drills/TwoCasePrepositionsDrill.tsx',
  'src/components/practice/drills/VerbalAdverbsDrill.tsx',
  'src/components/practice/drills/WeatherDrill.tsx',
  'src/components/practice/drills/WishesDrill.tsx',
  'src/components/practice/drills/WordFormationDrill.tsx',
  'src/components/practice/drills/WordplayDrill.tsx',
  //
  // The curriculum spine: 55 Croatian strings, NONE of which this lint saw until
  // `objectives` joined the array pass on 2026-09-01. Adding the pass without
  // adding the file would have been the whole exercise in miniature, and that is
  // exactly what happened — the mutation run caught it (a Cyrillic `а` injected
  // into an objective passed clean, because the pass had nothing to run on).
  'functions/api/content/_data/curriculum.js',
  //
  // The remaining authored Croatian outside TARGETS, chosen by COVERAGE RATIO
  // rather than by string count. The >=30-strings rule the second wave used was
  // a proxy for "does the lint genuinely see this file"; the ratio measures it
  // directly, which is what the exercises.js / lessons.js finding was really
  // about. Every file below is one the widened matcher sees at least half of,
  // and most of them all of. The comment on each is cro=Croatian strings the
  // file holds, %=share of them the lint scans.
  'functions/api/_sttGoldenSet.js',  // 4cro 100%
  'functions/api/content/_data/cultural/events.js',  // 8cro 100%
  'functions/api/content/_data/seasonalCampaigns.js',  // 1cro 100%
  'functions/api/conversational-tutor.js',  // 2cro 50%
  'functions/api/flux-generate.js',  // 1cro 100%
  'functions/api/news.js',  // 10cro 70%
  'src/components/croatia/ConversationBubble.tsx',  // 1cro 100%
  'src/components/croatia/CroatiaAthletes.tsx',  // 7cro 100%
  'src/components/croatia/CroatianNewsScreen.tsx',  // 9cro 78%
  'src/components/croatia/CultureDeepDiveScreen.tsx',  // 1cro 100%
  'src/components/croatia/DiasporaNote.tsx',  // 6cro 83%
  'src/components/croatia/MajaDebrief.tsx',  // 1cro 100%
  'src/components/croatia/MajaScreenUtils.js',  // 5cro 60%
  'src/components/croatia/PhraseOfDayScreen.tsx',  // 31cro 65%
  'src/components/croatia/SpotifySection.tsx',  // 3cro 100%
  'src/components/croatia/StoryModeData.js',  // 2cro 100%
  'src/components/grad/PlaceScreen.tsx',  // 6cro 100%
  'src/components/grad/gradModel.ts',  // 1cro 100%
  'src/components/grad/places.ts',  // 12cro 92%
  'src/components/home/DailyCroatianSection.tsx',  // 1cro 100%
  'src/components/home/HeroStats.tsx',  // 2cro 50%
  'src/components/home/SpeedChallenge.tsx',  // 4cro 100%
  'src/components/home/hostFamily.ts',  // 5cro 80%
  'src/components/learn/GrammarExplainer.tsx',  // 4cro 50%
  'src/components/learn/GrammarReader.tsx',  // 10cro 100%
  'src/components/learn/GrammarVideos.tsx',  // 2cro 100%
  'src/components/learn/LearnTab.tsx',  // 2cro 50%
  'src/components/practice/AdaptiveReviewScreen.tsx',  // 2cro 100%
  'src/components/practice/AspectDrillScreen.tsx',  // 6cro 67%
  'src/components/practice/FlashcardCardBack.tsx',  // 1cro 100%
  'src/components/practice/MapScreen.tsx',  // 1cro 100%
  'src/components/practice/SprintFeedbackPhase.tsx',  // 1cro 100%
  'src/components/practice/VideoLessonScreen.tsx',  // 2cro 100%
  'src/components/practice/exerciseCatalog.ts',  // 7cro 100%
  'src/components/practice/listening/aiListeningTopics.ts',  // 2cro 100%
  'src/components/profile/CertificateScreen.tsx',  // 2cro 50%
  'src/components/profile/CroatianErrorInsights.tsx',  // 29cro 52%
  'src/components/razgovor/partners.ts',  // 22cro 100%
  'src/components/shared/AmbientPlayer.tsx',  // 2cro 100%
  'src/components/shared/CroatianCross.tsx',  // 1cro 100%
  'src/components/shared/EmptyState.tsx',  // 1cro 100%
  'src/components/shared/GrammarReference.tsx',  // 17cro 76%
  'src/components/shared/KnightCompanion.tsx',  // 5cro 100%
  'src/components/shared/OnboardingTour.tsx',  // 4cro 50%
  'src/data/bakaPhrases.ts',  // 8cro 100%
  'src/hooks/useNotifications.ts',  // 10cro 50%
  'src/lib/aspectPairs.ts',  // 10cro 100%
  'src/lib/conjugation/curriculum.ts',  // 9cro 67%
  'src/lib/croatiaPool.ts',  // 2cro 100%
  'src/lib/drillPoolEntries.ts',  // 13cro 100%
  'src/lib/legacySavedPhraseIndex.ts',  // 8cro 100%
  'src/lib/nextStep.ts',  // 1cro 100%
  'src/lib/pushNotifications.ts',  // 1cro 100%
  'src/lib/sessionPools.ts',  // 7cro 100%
  'src/sw.js',  // 2cro 100%
];

// Whitelist: Croatian Latin + common punctuation + digits + typographic marks.
// We include q/w/x/y for loanwords (e.g. "wifi", "taxi") and proper nouns.
const ALLOWED_RE = /^[\sa-zA-ZČčĆćĐđŠšŽž0-9À-ſȘ-ț,.!?'":;\-—–…()\[\]\/&%@#=+*–—‘’“”]*$/;

// More targeted: a string is "suspicious" if it contains specific bad chars.
// We focus on the encoding-bleed classes from the audit.
const BAD_CHARS_RE = /[Ѐ-ӿԀ-ԯŢ-ţŞ-şĞ-ğİ-ı­]/g;
//  ^ Cyrillic blocks (Ѐ-ӿ already covers А-я) + Romanian Ţ/ţ + Turkish Ş/ş Ğ/ğ İ/ı
//  + U+00AD SOFT HYPHEN (invisible; breaks copy-paste and TTS in JSON item banks).

// Match `hr: '...'` / `hr: "..."` / `hr: \`...\`` — and, since 2026-09-01, the
// JSX form `hr="..."` as well.
//
// THE MATCHER, NOT THE TARGET LIST, WAS THE BINDING CONSTRAINT (2026-09-01).
// Adding files stopped buying coverage some time ago and nobody measured it. A
// census of every candidate outside TARGETS found 1,159 Croatian strings of
// which this regex saw 137 — TWELVE PER CENT. Two structural reasons, both
// invisible from a target list:
//
//   1. THE JSX SEPARATOR. `title="🔢 Množina"` is an attribute, not an object
//      field, so `\s*:\s*` never matched it. That is how the 109 ModeDrill
//      wrappers present every string they own. `(?::|=)` covers both.
//   2. THE PRAISE TRIPLE. `perfect` / `good` / `more` are the lines shown at the
//      END of a drill — the most-read Croatian in the practice programme, since
//      a learner sees one every single time they finish. 109 of each, and not
//      one of them was ever in a field name this regex listed.
//
// The remaining additions come from the same census, ranked by volume: `label`
// (54), `desc` (30), `example` (15), `blurb`, `line`, `word`, `phrase`, `audio`,
// `pair`, `chant`, `content`, `full`, `mixed`, `role`, `subtitle` (77 in JSX).
//
// Widening is the dangerous direction — the 123-false-positive lesson — so it
// was dry-run before it was written: over the 303 existing targets it sees 1,408
// MORE strings and reports zero new findings, and over all 270 remaining
// candidates it reports zero. Re-measure the same way before adding a key.
const CRO_FIELD_RE =
  /(hr|text|paragraphs|q|a|answer|prompt|response|tagline|intro|history|didYouKnow|name|title|en|note|exs?|ex|perfect|good|more|subtitle|label|desc|example|line|blurb|word|phrase|audio|pair|chant|content|full|mixed|role)\s*(?::|=)\s*(['"`])((?:[^\\]|\\.)*?)\2/g;

async function* walkTargets() {
  for (const rel of TARGETS) {
    const abs = resolve(REPO_ROOT, rel);
    let buf;
    try {
      buf = await readFile(abs, 'utf8');
    } catch {
      continue; // file may not exist on some setups
    }
    yield { rel, buf };
  }
}

// Turkish letters sit in BAD_CHARS_RE because inside CROATIAN text they are
// mojibake for š/g/i. Inside an ENGLISH gloss quoting a foreign etymon they are
// correct spelling: slangData carries `en: 'Enemies — from Turkish "düşman"'`
// beside the Croatian `Dušmani`, which is the etymology stated accurately. It
// was the ONLY finding across all 90 remaining candidate files.
//
// Scoped as tightly as that warrants — the Turkish class only, in the
// English-gloss fields only. Cyrillic and the invisible soft hyphen stay
// flagged everywhere, `en` included, because neither is ever legitimate in any
// field of this app. Mutation-checked: a Cyrillic homoglyph injected into an
// `en` field still fails the build.
const TURKISH_LETTERS_RE = /[Ţ-ţŞ-şĞ-ğİ-ı]/;
const FOREIGN_ETYMON_FIELDS = new Set(['en', 'note']);

function findBadInString(s, fieldName) {
  if (!s) return null;
  let bad = [...s.matchAll(BAD_CHARS_RE)];
  if (FOREIGN_ETYMON_FIELDS.has(fieldName)) {
    bad = bad.filter((m) => !TURKISH_LETTERS_RE.test(m[0]));
  }
  if (bad.length === 0) return null;
  return bad.map((m) => ({ char: m[0], codePoint: m[0].codePointAt(0).toString(16) }));
}

// ── Serbism blocklist (owner directive, 2026-08-17) ──────────────────────────
// SINGLE SOURCE OF TRUTH: functions/api/_serbisms.js (output-observation
// directive, 2026-08-18) — the same rules screen the static content here AND
// the sampled live AI responses in /api/output-observatory. Add rules THERE.
// Standard Croatian only, high-precision, Unicode lookarounds (JS ASCII \b
// mis-fires around č/ć/đ/š/ž), bare-ekavica-only forms — see the module.
import { SERBISM_RULES } from '../functions/api/_serbisms.js';

/** English-gloss fields where a Serbian form may legitimately appear. */
const SERBISM_EXEMPT_FIELDS = new Set(['en', 'note']);

// ── Contrastive FILES: the drill equivalent of CONTRASTIVE_LESSONS ───────────
//
// `PosudjeniceDrill` (C2) is a standard-vs-non-standard discrimination drill.
// Its whole subject is the pairs a heritage speaker mixes — tisuća/hiljada,
// kruh/hljeb, vlak/voz — and every item's `tip` names the non-standard member
// AS non-standard ("Hrvatski standard: tisuća (hiljada je nestandardna)").
// The learner is not meeting an unlabelled Serbism; they are being taught to
// tell the two apart, which is the same justification CONTRASTIVE_LESSONS
// records for `language-identity`: naming the form IS the teaching.
//
// This does NOT loosen the distractor directive. That directive exists because
// a wrong answer is rendered on screen as a clickable option with nothing
// marking it foreign. Here the question stem, the answer key and the tip all
// mark it. A drill that merely happened to use `hiljada` as a throwaway
// distractor would still be a bug, and would not belong on this list.
//
// Scoped to the FILE and Serbisms only — encoding bleed still fails the build
// inside these files, exactly as it does inside the contrastive lessons. The
// cost is the same and should be accepted as reluctantly: a genuine unrelated
// Serbism in this one file would now pass. The list can only shrink.
const CONTRASTIVE_FILES = new Set(['src/components/practice/PosudjeniceDrill.tsx']);

// ── The two checks are not the same check (2026-08-26) ───────────────────────
//
// ENCODING BLEED is always a defect. A Cyrillic homoglyph or a soft hyphen is a
// bug wherever it appears — including inside a deliberately WRONG multiple-choice
// option, which still has to render and still has to be copy-pasteable.
//
// A SERBISM is a defect in every string a learner can READ as Croatian — and
// that includes a distractor. Owner directive, 2026-08-26: no Serbian forms in
// content, full stop. A wrong answer is still rendered on screen as a clickable
// option, so a learner meets it whether or not they pick it; teaching the
// Croatian/Serbian contrast by putting the Serbian form in front of them is the
// one method this app does not use. Distractors must be wrong in some OTHER way
// — case, aspect, register, word order — of which there is no shortage.
//
// Only the ENGLISH fields (subtitle, en, tip) are exempt, as before.
//
// So the passes below separate them, and the classification is structural
// rather than regex-guessed wherever the data shape allows it.

function findSerbisms(fieldName, s) {
  if (!s || SERBISM_EXEMPT_FIELDS.has(fieldName)) return null;
  const hits = [];
  for (const rule of SERBISM_RULES) {
    const m = s.match(rule.re);
    if (m) hits.push({ word: m[0], use: rule.use });
  }
  return hits.length > 0 ? hits : null;
}

// ── Pass 2: distractor arrays, ENCODING ONLY ─────────────────────────────────
//
// CRO_FIELD_RE never matched `opts`/`options`/`choices`, so every
// multiple-choice array in every target file has been invisible to this lint —
// 356 arrays in exercises.js alone. A homoglyph in a wrong answer would have
// shipped unseen.
//
// SERBISMS ARE CHECKED HERE TOO as of 2026-08-29, and the old "encoding only"
// scope was simply older than the rule. This pass predates the 2026-08-26 owner
// directive that a Serbian form must never reach a learner INCLUDING as a
// distractor — a wrong answer is rendered on screen as a clickable option, so
// the learner meets it either way. The dialogue bank got a structural walker
// for that directive; these arrays were left behind, which meant the one place
// a distractor actually lives was the one place the distractor rule was not
// enforced. Found while mutation-testing a new drill bank: a Serbism injected
// into `opts` passed clean.
//
// `objectives` joined this pass on 2026-09-01. The curriculum spine holds 55
// Croatian strings and the lint saw NONE of them: objectives are a bare string
// array, so neither the field regex nor the distractor pass reached them. They
// are the "you will be able to…" lines the spine's own field rules call
// learner-facing, and they quote Croatian forms throughout.
const ARRAY_FIELD_RE = /(opts|options|choices|distractors|objectives)\s*:\s*\[([^\]]*)\]/g;
const QUOTED_RE = /(['"`])((?:[^\\]|\\.)*?)\1/g;

function* arrayStrings(buf) {
  for (const m of buf.matchAll(ARRAY_FIELD_RE)) {
    for (const q of m[2].matchAll(QUOTED_RE)) {
      if (q[2].length > 0) yield { field: m[1], content: q[2], index: m.index };
    }
  }
}

// ── Pass 3: structured targets ───────────────────────────────────────────────
//
// dialogueScenarios.js could not be added to TARGETS at all: a regex cannot
// tell `opts[answer]` (correct Croatian) from `opts[1..3]` (deliberately
// wrong), so the whole file — the app's entire authored conversation bank, 38
// scenarios — was unlinted. Walking the real objects makes the distinction
// exact, because `answer` names which option is the correct one.
import { SCENARIOS } from '../src/components/practice/dialogueScenarios.js';

/** kind: 'croatian'/'distractor' → both checks · 'gloss' (English) → encoding only. */
function* dialogueStrings() {
  for (const s of SCENARIOS) {
    yield { loc: `${s.id}.title`, field: 'title', content: s.title, kind: 'croatian' };
    // Subtitles are English one-liners for the menu card.
    yield { loc: `${s.id}.subtitle`, field: 'subtitle', content: s.subtitle, kind: 'gloss' };
    for (let i = 0; i < s.turns.length; i++) {
      const t = s.turns[i];
      const at = `${s.id}.turns[${i}]`;
      yield { loc: `${at}.speaker`, field: 'speaker', content: t.speaker, kind: 'croatian' };
      yield { loc: `${at}.line`, field: 'line', content: t.line, kind: 'croatian' };
      yield { loc: `${at}.en`, field: 'en', content: t.en, kind: 'gloss' };
      // Tips are English teaching notes and may NAME a Serbian form in order to
      // contrast it — that is the lesson, not a leak.
      yield { loc: `${at}.tip`, field: 'tip', content: t.tip, kind: 'gloss' };
      for (let j = 0; j < t.opts.length; j++) {
        yield {
          loc: `${at}.opts[${j}]`,
          field: 'opts',
          content: t.opts[j],
          kind: j === t.answer ? 'croatian' : 'distractor',
        };
      }
    }
  }
}

// ── Lesson tables, highlights and summaries ──────────────────────────────────
//
// lessons.js has been in TARGETS for a long time, which made it look covered.
// It was covered only where CRO_FIELD_RE matches — `hr`, `title`, `q`, `note`.
// It never matched a TABLE, and the tables are where a lesson keeps most of its
// vocabulary: every `rows` cell in every lesson has been invisible. The A1
// expansion (2026-08-28) put roughly 150 new Croatian cells in tables and found
// the gap while mutation-testing the guard on its own content.
//
// Walked structurally rather than by regex for the same reason as the dialogue
// bank: only the data knows which cell is which. A `rows` cell is Croatian a
// learner reads, so it gets both checks; `headers` are column labels and
// `points` are summary bullets that mix both languages, so headers take the
// encoding check only.
import { LESSONS } from '../functions/api/content/_data/lessons.js';

// THE ONE CARVE-OUT, and it is deliberately a single lesson id rather than a
// field name or a pattern. `language-identity` (C1) is a contrastive lesson
// whose table has a column headed Serbian: naming the form IS the teaching,
// exactly as the dialogue bank's English `tip` field may name one in order to
// contrast it. The owner directive it sits against — never put a Serbian form
// in front of a learner — was written about DISTRACTORS, where the learner
// meets the form as a clickable answer with nothing marking it as foreign.
// A labelled comparison column is the opposite case, and this app's audience is
// a diaspora that grew up hearing both varieties mixed.
//
// Encoding is still checked here. Only the Serbism check is suspended, and only
// inside these lessons, so a homoglyph still fails the build.
// If the owner decides one of these lessons should not name the forms it names,
// delete the entry — nothing else depends on this set.
//
// `dijalekti-dubinski` (C2, added 2026-08-28) is the second entry and it is a
// DIFFERENT collision, worth stating so nobody generalises from the first.
// Kajkavian realises the old yat as e — lep, mleko — and that is a Croatian
// dialect form spoken across the north-west of the country, including Zagreb.
// It is homographic with Serbian ekavica and the blocklist cannot tell them
// apart by pattern, because there is no pattern to tell apart: the strings are
// identical. The lesson is the app's explanation of the three-way yat reflex
// (lijep / lep / lip), which is the single most useful diagnostic a learner has
// for placing a speaker, and every occurrence is explicitly labelled kajkavian.
// Flagging it as a Serbism would be the lint stating something false about
// Croatian, which is worse than the gap it leaves.
//
// The scope is the whole lesson rather than its tables because the same labelled
// contrast appears in a highlight and a summary point. That is a real cost: a
// genuine Serbism inside this one lesson would now pass. It is accepted here and
// should not be accepted casually — this list can only shrink.
const CONTRASTIVE_LESSONS = new Set(['language-identity', 'dijalekti-dubinski']);

function* lessonStrings() {
  for (const l of LESSONS) {
    for (let i = 0; i < (l.slides || []).length; i++) {
      const s = l.slides[i];
      const at = `${l.id}.slides[${i}]`;
      // 'gloss' = encoding checked, Serbism check suspended. Contrastive lessons
      // name non-standard forms as their subject matter, so every Croatian-kind
      // string in them is glossed; encoding still fails the build everywhere.
      const kind = CONTRASTIVE_LESSONS.has(l.id) ? 'gloss' : 'croatian';
      if (typeof s.highlight === 'string') {
        yield { loc: `${at}.highlight`, field: 'highlight', content: s.highlight, kind };
      }
      for (const h of Array.isArray(s.headers) ? s.headers : []) {
        yield { loc: `${at}.headers`, field: 'headers', content: h, kind: 'gloss' };
      }
      for (let r = 0; r < (Array.isArray(s.rows) ? s.rows : []).length; r++) {
        for (const cell of Array.isArray(s.rows[r]) ? s.rows[r] : []) {
          yield { loc: `${at}.rows[${r}]`, field: 'rows', content: cell, kind };
        }
      }
      for (const p of Array.isArray(s.points) ? s.points : []) {
        yield { loc: `${at}.points`, field: 'points', content: p, kind };
      }
    }
  }
}

const STRUCTURED = [
  { rel: 'src/components/practice/dialogueScenarios.js', strings: dialogueStrings },
  { rel: 'lessons.js + per-level lesson files (tables)', strings: lessonStrings },
];

function checkStructured() {
  const out = [];
  for (const { rel, strings } of STRUCTURED) {
    const findings = [];
    for (const { loc, field, content, kind } of strings()) {
      if (typeof content !== 'string' || content.length === 0) continue;
      const bad = findBadInString(content, field);
      if (bad) findings.push({ line: loc, field, snippet: content.slice(0, 80), badChars: bad });
      if (kind !== 'gloss') {
        const serbisms = findSerbisms(field, content);
        if (serbisms) findings.push({ line: loc, field, snippet: content.slice(0, 80), serbisms });
      }
    }
    out.push({ rel, findings });
  }
  return out;
}

async function main() {
  let totalFindings = 0;
  for await (const { rel, buf } of walkTargets()) {
    const findings = [];
    // A contrastive file suspends the SERBISM half only; findBadInString (the
    // encoding check) runs on every string regardless.
    const serbismsOff = CONTRASTIVE_FILES.has(rel);
    for (const m of buf.matchAll(CRO_FIELD_RE)) {
      // m[1] = field name, m[3] = string contents
      // Skip English-only fields by heuristic: `en` is the English translation,
      // but it CAN contain a Croatian word in the gloss (rare). Allow it.
      const fieldName = m[1];
      const content = m[3];
      // Skip very short non-text content
      if (content.length === 0) continue;
      const bad = findBadInString(content, fieldName);
      if (bad) {
        const line = buf.slice(0, m.index).split('\n').length;
        findings.push({
          line,
          field: fieldName,
          snippet: content.slice(0, 80),
          badChars: bad,
        });
      }
      const serbisms = serbismsOff ? null : findSerbisms(fieldName, content);
      if (serbisms) {
        const line = buf.slice(0, m.index).split('\n').length;
        findings.push({
          line,
          field: fieldName,
          snippet: content.slice(0, 80),
          serbisms,
        });
      }
    }
    // Distractor arrays: BOTH checks (see ARRAY_FIELD_RE for why the Serbism
    // half was missing until 2026-08-29).
    for (const { field, content, index } of arrayStrings(buf)) {
      const line = buf.slice(0, index).split('\n').length;
      const bad = findBadInString(content, field);
      if (bad) {
        findings.push({ line, field, snippet: content.slice(0, 80), badChars: bad });
      }
      const serbisms = serbismsOff ? null : findSerbisms(field, content);
      if (serbisms) {
        findings.push({ line, field, snippet: content.slice(0, 80), serbisms });
      }
    }
    if (findings.length > 0) {
      console.error(`\n=== ${rel} ===`);
      for (const f of findings) {
        const chars = f.badChars
          ? f.badChars.map((b) => `${b.char} (U+${b.codePoint.toUpperCase()})`).join(', ')
          : f.serbisms.map((s) => `Serbism "${s.word}" → use ${s.use}`).join(', ');
        console.error(`  ${rel}:${f.line}  [${f.field}]  ${chars}`);
        console.error(`    "${f.snippet.replace(/\n/g, ' ')}..."`);
      }
      totalFindings += findings.length;
    }
  }
  for (const { rel, findings } of checkStructured()) {
    if (findings.length === 0) continue;
    console.error(`\n=== ${rel} ===`);
    for (const f of findings) {
      const chars = f.badChars
        ? f.badChars.map((b) => `${b.char} (U+${b.codePoint.toUpperCase()})`).join(', ')
        : f.serbisms.map((s) => `Serbism "${s.word}" → use ${s.use}`).join(', ');
      console.error(`  ${rel}  ${f.line}  [${f.field}]  ${chars}`);
      console.error(`    "${f.snippet.replace(/\n/g, ' ')}..."`);
    }
    totalFindings += findings.length;
  }

  if (totalFindings > 0) {
    console.error('');
    console.error(`✖ Croatian text lint: ${totalFindings} finding(s).`);
    console.error('  Encoding bleed: Croatian standard Latin is the only script allowed, in');
    console.error('  every string — a homoglyph in a wrong answer is still a bug.');
    console.error('  Serbism: reported in every Croatian string, distractors included.');
    process.exit(1);
  } else {
    console.log(
      '✓ Croatian text lint: 0 findings across',
      TARGETS.length + STRUCTURED.length,
      'files (' + STRUCTURED.length + ' walked structurally).',
    );
  }
}

await main();
