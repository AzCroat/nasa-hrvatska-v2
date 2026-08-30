import React, { lazy, useRef, useEffect, useState } from 'react';
import { lsGet, lsSet } from '../lib/safeStorage';
import { AnimatePresence, motion, type TargetAndTransition } from 'framer-motion';
import { useSwipeBack } from '../hooks/useSwipeBack.js';
import { isChunkLoadError, reloadWithCachePurge } from '../lib/chunkErrors';
import { getUserCefr } from '../lib/cefr.js';
// On Android WebView (Capacitor), Framer Motion entry animations can stall
// leaving elements permanently at opacity:0. Skip entry animation on native.
// Capacitor Android: https://localhost with NO port. Dev server always has a port.
const _isNative =
  typeof window !== 'undefined' &&
  window.location.hostname === 'localhost' &&
  !window.location.port;
// Local Fisher-Yates shuffle — keeps chunk-data out of AppRouter's startup import.
// Screens that need data (V, SHADOWING) import it directly. Grammar moved
// to /api/content/grammar (SP11b); use useGrammar() hook for those.
function _sh<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}
import ScreenErrorBoundary from './shared/ScreenErrorBoundary';
import { addWordToSRS } from '../lib/srs.js';
const WelcomeScreen = lazyWithReload(() => import('./home/WelcomeScreen'));
const PlacementTest = lazyWithReload(() => import('../components/auth/PlacementTest'));
const EquivalencyTestScreen = lazyWithReload(() => import('./profile/EquivalencyTestScreen'));
import { useApp } from '../context/AppContext';
import { useStats } from '../context/StatsContext';

// Wraps React.lazy() to detect stale-chunk errors and self-heal with a
// cache-purge reload. Capped at 2 attempts via sessionStorage.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lazyWithReload(fn: () => Promise<any>) {
  return lazy(() =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fn().catch((e: any) => {
      const msg = (((e?.message as string) || '') + ((e?.name as string) || '')).toLowerCase();
      if (isChunkLoadError(msg) && reloadWithCachePurge('nh_reload_attempt')) {
        return new Promise(() => {}); // keep pending so React doesn't render an error state
      }
      throw e;
    }),
  );
}

// Tabs + screens — lazy-loaded on first use
const HomeTab = lazyWithReload(() => import('./home/HomeTab'));
const LearnTab = lazyWithReload(() => import('./learn/LearnTab'));
const HrvatskaTab = lazyWithReload(() => import('./hrvatska/HrvatskaTab'));
const RazgovorTab = lazyWithReload(() => import('./razgovor/RazgovorTab'));
const ImmersionHub = lazyWithReload(() => import('./croatia/ImmersionHub'));
const AIConversation = lazyWithReload(() => import('./croatia/AIConversation'));
const MajaScreen = lazyWithReload(() => import('./croatia/MajaScreen'));
const PersonaScreen = lazyWithReload(() => import('./croatia/PersonaScreen'));
const ProfileTab = lazyWithReload(() => import('./profile/ProfileTab'));
const ContactScreen = lazyWithReload(() => import('./profile/ContactScreen'));
const GradTab = lazyWithReload(() => import('./grad/GradTab'));
const LessonScreen = lazyWithReload(() => import('./learn/LessonScreen'));
const GrammarScreen = lazyWithReload(() => import('./learn/GrammarScreen'));
const AlphabetScreen = lazyWithReload(() => import('./learn/AlphabetScreen'));
const ReadingList = lazyWithReload(() => import('./learn/ReadingList'));
const ReadingScreen = lazyWithReload(() => import('./learn/ReadingScreen'));
const BadgesScreen = lazyWithReload(() => import('./profile/BadgesScreen'));
const ProfileScreen = lazyWithReload(() => import('./profile/ProfileScreen'));
const VocabJournal = lazyWithReload(() => import('./profile/VocabJournal'));
const FavoritesScreen = lazyWithReload(() => import('./profile/FavoritesScreen'));
const LearnPath = lazyWithReload(() => import('./profile/LearnPath'));
const LevelQuiz = lazyWithReload(() => import('./learn/LevelQuiz'));
const SentenceTileScreen = lazyWithReload(() => import('./practice/SentenceTileScreen'));
const ProverbsScreen = lazyWithReload(() => import('./croatia/ProverbsScreen'));
const Flashcards = lazyWithReload(() => import('./practice/Flashcards'));
const ListeningScreen = lazyWithReload(() => import('./practice/ListeningScreen'));
const McGame = lazyWithReload(() => import('./practice/McGame'));
const IdiomsScreen = lazyWithReload(() => import('./croatia/IdiomsScreen'));
const PrivacyScreen = lazyWithReload(() => import('./shared/PrivacyScreen'));
const TextingScreen = lazyWithReload(() => import('./croatia/TextingScreen'));
const FriendsScreen = lazyWithReload(() => import('./croatia/FriendsScreen'));
const FoodOrderScreen = lazyWithReload(() => import('./croatia/FoodOrderScreen'));
const TransportScreen = lazyWithReload(() => import('./croatia/TransportScreen'));
const EmergencyScreen = lazyWithReload(() => import('./croatia/EmergencyScreen'));
const PopCultureScreen = lazyWithReload(() => import('./croatia/PopCultureScreen'));
const PracticalScreen = lazyWithReload(() => import('./croatia/PracticalScreen'));
const SchoolScreen = lazyWithReload(() => import('./croatia/SchoolScreen'));
const GroceryScreen = lazyWithReload(() => import('./croatia/GroceryScreen'));
const CroatiaHistoryScreen = lazyWithReload(() => import('./croatia/CroatiaHistoryScreen'));
const BasketballScreen = lazyWithReload(() => import('./croatia/BasketballScreen'));
const GymScreen = lazyWithReload(() => import('./croatia/GymScreen'));
const HNLScreen = lazyWithReload(() => import('./croatia/HNLScreen'));
const CroatiaAthletes = lazyWithReload(() => import('./croatia/CroatiaAthletes'));
const RegionScreen = lazyWithReload(() => import('./croatia/RegionScreen'));
const CultureDeepDiveScreen = lazyWithReload(() => import('./croatia/CultureDeepDiveScreen'));
const RoleplayScreen = lazyWithReload(() => import('./croatia/RoleplayScreen'));
const RecipesScreen = lazyWithReload(() => import('./croatia/RecipesScreen'));
const CityOfDayScreen = lazyWithReload(() => import('./croatia/CityOfDayScreen'));
const EventsCalendar = lazyWithReload(() => import('./croatia/EventsCalendar'));
const Top100Screen = lazyWithReload(() => import('./croatia/Top100Screen'));
const KingsScreen = lazyWithReload(() => import('./croatia/KingsScreen'));
const CrMap = lazyWithReload(() => import('./croatia/CrMap'));
const AspectScreen = lazyWithReload(() => import('./learn/AspectScreen'));
const FalseFriendsScreen = lazyWithReload(() => import('./learn/FalseFriendsScreen'));
const DeclensionScreen = lazyWithReload(() => import('./learn/DeclensionScreen'));
const BrzaliceScreen = lazyWithReload(() => import('./learn/BrzaliceScreen'));
const DialectsScreen = lazyWithReload(() => import('./learn/DialectsScreen'));
const DiminutivesScreen = lazyWithReload(() => import('./learn/DiminutivesScreen'));
const WordFormScreen = lazyWithReload(() => import('./learn/WordFormScreen'));
const ColorQuirkScreen = lazyWithReload(() => import('./learn/ColorQuirkScreen'));
const SvojMojScreen = lazyWithReload(() => import('./learn/SvojMojScreen'));
const ConditionalScreen = lazyWithReload(() => import('./learn/ConditionalScreen'));
const FormalRegisterScreen = lazyWithReload(() => import('./learn/FormalRegisterScreen'));
const ImpersonalScreen = lazyWithReload(() => import('./learn/ImpersonalScreen'));
const TechVocScreen = lazyWithReload(() => import('./learn/TechVocScreen'));
const BureaucraticScreen = lazyWithReload(() => import('./learn/BureaucraticScreen'));
const CountriesScreen = lazyWithReload(() => import('./learn/CountriesScreen'));
const ProfessionsScreen = lazyWithReload(() => import('./learn/ProfessionsScreen'));
const WeatherScreen = lazyWithReload(() => import('./learn/WeatherScreen'));
const ClothesScreen = lazyWithReload(() => import('./learn/ClothesScreen'));
const BodyDescScreen = lazyWithReload(() => import('./learn/BodyDescScreen'));
const PhonologyScreen = lazyWithReload(() => import('./learn/PhonologyScreen'));
const ModalScreen = lazyWithReload(() => import('./learn/ModalScreen'));
const PadeziScreen = lazyWithReload(() => import('./learn/PadeziScreen'));
const PadezifullScreen = lazyWithReload(() => import('./learn/PadezifullScreen'));
const TensesScreen = lazyWithReload(() => import('./learn/TensesScreen'));
const ReflexiveScreen = lazyWithReload(() => import('./practice/exercises/ReflexiveScreen'));
const FillStoryScreen = lazyWithReload(() => import('./practice/exercises/FillStoryScreen'));
const ConvMatchScreen = lazyWithReload(() => import('./practice/exercises/ConvMatchScreen'));
const ScenesScreen = lazyWithReload(() => import('./practice/exercises/ScenesScreen'));
const PronounsScreen = lazyWithReload(() => import('./practice/exercises/PronounsScreen'));
const GenderDrillScreen = lazyWithReload(() => import('./practice/exercises/GenderDrillScreen'));
const SentenceBuilderScreen = lazyWithReload(
  () => import('./practice/exercises/SentenceBuilderScreen'),
);
const VerbDrillScreen = lazyWithReload(() => import('./practice/exercises/VerbDrillScreen'));
const TenseFlipScreen = lazyWithReload(() => import('./practice/exercises/TenseFlipScreen'));
const RiddlesScreen = lazyWithReload(() => import('./practice/exercises/RiddlesScreen'));
const LogicQuizScreen = lazyWithReload(() => import('./practice/exercises/LogicQuizScreen'));
const OrdinalsScreen = lazyWithReload(() => import('./practice/exercises/OrdinalsScreen'));
const RelativePronounsScreen = lazyWithReload(
  () => import('./practice/exercises/RelativePronounsScreen'),
);
const EmotionGenderScreen = lazyWithReload(
  () => import('./practice/exercises/EmotionGenderScreen'),
);
const OppositesScreen = lazyWithReload(() => import('./practice/exercises/OppositesScreen'));
const CityLocativeScreen = lazyWithReload(() => import('./practice/exercises/CityLocativeScreen'));
const AccusativeDrill = lazyWithReload(() => import('./practice/AccusativeDrill'));
const ColorAgreementScreen = lazyWithReload(
  () => import('./practice/exercises/ColorAgreementScreen'),
);
const PossessivesScreen = lazyWithReload(() => import('./practice/exercises/PossessivesScreen'));
const QuestionWordsScreen = lazyWithReload(
  () => import('./practice/exercises/QuestionWordsScreen'),
);
const NegationScreen = lazyWithReload(() => import('./practice/exercises/NegationScreen'));
const SibilarizationScreen = lazyWithReload(
  () => import('./practice/exercises/SibilarizationScreen'),
);
const RestaurantScreen = lazyWithReload(() => import('./practice/exercises/RestaurantScreen'));
const ProfessionGenderScreen = lazyWithReload(
  () => import('./practice/exercises/ProfessionGenderScreen'),
);
const ComparativesScreen = lazyWithReload(() => import('./practice/exercises/ComparativesScreen'));
const FutureTenseScreen = lazyWithReload(() => import('./practice/exercises/FutureTenseScreen'));
const McResult = lazyWithReload(() => import('./practice/McResult'));
const StoryScreens = lazyWithReload(() => import('./practice/StoryScreens'));
const NumTime = lazyWithReload(() => import('./practice/NumTime'));
const Unjumble = lazyWithReload(() => import('./practice/Unjumble'));
const PrepDrill = lazyWithReload(() => import('./practice/PrepDrill'));
const TypingScreen = lazyWithReload(() => import('./practice/TypingScreen'));
const ConjugationDrill = lazyWithReload(() => import('./practice/ConjugationDrill'));
const ConjugationLab = lazyWithReload(() => import('./practice/ConjugationLab'));
const ConjugationSessionDrill = lazyWithReload(() => import('./practice/ConjugationSessionDrill'));
const ZnamGame = lazyWithReload(() => import('./practice/ZnamGame'));
const BojeGame = lazyWithReload(() => import('./practice/BojeGame'));
const MatchGame = lazyWithReload(() => import('./practice/MatchGame'));
const WordSprint = lazyWithReload(() => import('./practice/WordSprint'));
const SpeakingScreen = lazyWithReload(() => import('./practice/SpeakingScreen'));
const SpeakingSprintScreen = lazyWithReload(() => import('./practice/SpeakingSprintScreen'));
const PitchAccentScreen = lazyWithReload(() => import('./practice/PitchAccentScreen'));
const ShadowingScreen = lazyWithReload(() => import('./practice/ShadowingScreen'));
const ReviewScreen = lazyWithReload(() => import('./practice/ReviewScreen'));
const WritingScreen = lazyWithReload(() => import('./practice/WritingScreen'));
const GuidedWritingScreen = lazyWithReload(() => import('./practice/GuidedWritingScreen'));
const ListeningPath = lazyWithReload(() => import('./practice/ListeningPath'));
const AspectDrillScreen = lazyWithReload(() => import('./practice/AspectDrillScreen'));
const TranslateDrillsScreen = lazyWithReload(() => import('./practice/TranslateDrillsScreen'));
const CliticDrill = lazyWithReload(() => import('./practice/CliticDrill'));
const AnimateAccDrill = lazyWithReload(() => import('./practice/AnimateAccDrill'));
const PassiveDrill = lazyWithReload(() => import('./practice/PassiveDrill'));
const InstrumentalDrill = lazyWithReload(() => import('./practice/InstrumentalDrill'));
const DativeDrill = lazyWithReload(() => import('./practice/DativeDrill'));
const GenitiveDrill = lazyWithReload(() => import('./practice/GenitiveDrill'));
const NominativeDrill = lazyWithReload(() => import('./practice/NominativeDrill'));
// A1 verb + syntax drills (recommender audit, 2026-08-20): A1 taught verbs and
// word order but had no drill at its own level to practise either.
const PresentTenseDrill = lazyWithReload(() => import('./practice/PresentTenseDrill'));
const WordOrderDrill = lazyWithReload(() => import('./practice/WordOrderDrill'));
const LocativeDrill = lazyWithReload(() => import('./practice/LocativeDrill'));
const FleetingADrill = lazyWithReload(() => import('./practice/FleetingADrill'));
const SlangScreen = lazyWithReload(() => import('./practice/SlangScreen'));
const NumbersCasesDrill = lazyWithReload(() => import('./practice/NumbersCasesDrill'));
const ImperativeDrill = lazyWithReload(() => import('./practice/ImperativeDrill'));
const C2StructureDrill = lazyWithReload(() => import('./practice/C2StructureDrill'));
const GerundDrill = lazyWithReload(() => import('./practice/GerundDrill'));
const PrecisionDrill = lazyWithReload(() => import('./practice/PrecisionDrill'));
const FuturDrugiDrill = lazyWithReload(() => import('./practice/FuturDrugiDrill'));
const KolokacijeDrill = lazyWithReload(() => import('./practice/KolokacijeDrill'));
const PogodbeneDrill = lazyWithReload(() => import('./practice/PogodbeneDrill'));
const OdredjenostDrill = lazyWithReload(() => import('./practice/OdredjenostDrill'));
const DatumiDrill = lazyWithReload(() => import('./practice/DatumiDrill'));
const PosudjeniceDrill = lazyWithReload(() => import('./practice/PosudjeniceDrill'));
const GlasovnePromjeneDrill = lazyWithReload(() => import('./practice/GlasovnePromjeneDrill'));
const AdministrativniDrill = lazyWithReload(() => import('./practice/AdministrativniDrill'));
const BezlicneDrill = lazyWithReload(() => import('./practice/BezlicneDrill'));
const GlagolskiPriloziDrill = lazyWithReload(() => import('./practice/GlagolskiPriloziDrill'));
const AoristImperfektDrill = lazyWithReload(() => import('./practice/AoristImperfektDrill'));
const RekcijaDrill = lazyWithReload(() => import('./practice/RekcijaDrill'));
// Engine-backed drills (practice programme, 2026-08-29): a thin lazy wrapper
// per drill over the shared ModeDrill engine, each carrying its own data bank.
// Lazy, not static — firstPaintGraph.test.ts forbids src/data on the
// first-paint path, and at 180 drills a static bank import would ship every
// bank to every learner on first load. See practice/ModeDrill.tsx.
const PluralDrill = lazyWithReload(() => import('./practice/drills/PluralDrill'));
const NegationDrill = lazyWithReload(() => import('./practice/drills/NegationDrill'));
const AdjectivesDrill = lazyWithReload(() => import('./practice/drills/AdjectivesDrill'));
const DemonstrativesDrill = lazyWithReload(() => import('./practice/drills/DemonstrativesDrill'));
const ImatiDrill = lazyWithReload(() => import('./practice/drills/ImatiDrill'));
const ImperativeA1Drill = lazyWithReload(() => import('./practice/drills/ImperativeA1Drill'));
const QuestionsDrill = lazyWithReload(() => import('./practice/drills/QuestionsDrill'));
const PlacePrepositionsDrill = lazyWithReload(
  () => import('./practice/drills/PlacePrepositionsDrill'),
);
const TimeCalendarDrill = lazyWithReload(() => import('./practice/drills/TimeCalendarDrill'));
const GreetingsDrill = lazyWithReload(() => import('./practice/drills/GreetingsDrill'));
const SvojDrill = lazyWithReload(() => import('./practice/drills/SvojDrill'));
const ObjectPronounsDrill = lazyWithReload(() => import('./practice/drills/ObjectPronounsDrill'));
const PluralCasesDrill = lazyWithReload(() => import('./practice/drills/PluralCasesDrill'));
const QuantityDrill = lazyWithReload(() => import('./practice/drills/QuantityDrill'));
const ComparisonDrill = lazyWithReload(() => import('./practice/drills/ComparisonDrill'));
const InfinitiveDaDrill = lazyWithReload(() => import('./practice/drills/InfinitiveDaDrill'));
const ReportedSpeechB1Drill = lazyWithReload(
  () => import('./practice/drills/ReportedSpeechB1Drill'),
);
const ImpersonalB1Drill = lazyWithReload(() => import('./practice/drills/ImpersonalB1Drill'));
const TimeClausesDrill = lazyWithReload(() => import('./practice/drills/TimeClausesDrill'));
const CausePurposeDrill = lazyWithReload(() => import('./practice/drills/CausePurposeDrill'));
const IDeclensionDrill = lazyWithReload(() => import('./practice/drills/IDeclensionDrill'));
const VerbalAdverbsDrill = lazyWithReload(() => import('./practice/drills/VerbalAdverbsDrill'));
const NegationAdvancedDrill = lazyWithReload(
  () => import('./practice/drills/NegationAdvancedDrill'),
);
const AspectVerbsDrill = lazyWithReload(() => import('./practice/drills/AspectVerbsDrill'));
const IntensityDrill = lazyWithReload(() => import('./practice/drills/IntensityDrill'));
const AdvancedComparisonDrill = lazyWithReload(
  () => import('./practice/drills/AdvancedComparisonDrill'),
);
const WordFormationDrill = lazyWithReload(() => import('./practice/drills/WordFormationDrill'));
const DiminutivesC1Drill = lazyWithReload(() => import('./practice/drills/DiminutivesC1Drill'));
const SummarisingDrill = lazyWithReload(() => import('./practice/drills/SummarisingDrill'));
const FamilyDrill = lazyWithReload(() => import('./practice/drills/FamilyDrill'));
const CountriesDrill = lazyWithReload(() => import('./practice/drills/CountriesDrill'));
const FoodDrinkDrill = lazyWithReload(() => import('./practice/drills/FoodDrinkDrill'));
const DirectionsDrill = lazyWithReload(() => import('./practice/drills/DirectionsDrill'));
const WeatherDrill = lazyWithReload(() => import('./practice/drills/WeatherDrill'));
const PreferencesDrill = lazyWithReload(() => import('./practice/drills/PreferencesDrill'));
const HomeDrill = lazyWithReload(() => import('./practice/drills/HomeDrill'));
const HealthDrill = lazyWithReload(() => import('./practice/drills/HealthDrill'));
const ClothingDrill = lazyWithReload(() => import('./practice/drills/ClothingDrill'));
const AppearanceDrill = lazyWithReload(() => import('./practice/drills/AppearanceDrill'));
const JobsDrill = lazyWithReload(() => import('./practice/drills/JobsDrill'));
const EducationDrill = lazyWithReload(() => import('./practice/drills/EducationDrill'));
const HobbiesDrill = lazyWithReload(() => import('./practice/drills/HobbiesDrill'));
const TravelDrill = lazyWithReload(() => import('./practice/drills/TravelDrill'));
const InvitationsDrill = lazyWithReload(() => import('./practice/drills/InvitationsDrill'));
const CelebrationsDrill = lazyWithReload(() => import('./practice/drills/CelebrationsDrill'));
const OpinionsDrill = lazyWithReload(() => import('./practice/drills/OpinionsDrill'));
const FeelingsDrill = lazyWithReload(() => import('./practice/drills/FeelingsDrill'));
const ComplaintsDrill = lazyWithReload(() => import('./practice/drills/ComplaintsDrill'));
const BureaucracyDrill = lazyWithReload(() => import('./practice/drills/BureaucracyDrill'));
const RentingDrill = lazyWithReload(() => import('./practice/drills/RentingDrill'));
const JobSearchDrill = lazyWithReload(() => import('./practice/drills/JobSearchDrill'));
const NewsDrill = lazyWithReload(() => import('./practice/drills/NewsDrill'));
const TechnologyDrill = lazyWithReload(() => import('./practice/drills/TechnologyDrill'));
const NatureDrill = lazyWithReload(() => import('./practice/drills/NatureDrill'));
const CookingDrill = lazyWithReload(() => import('./practice/drills/CookingDrill'));
const ArgumentDrill = lazyWithReload(() => import('./practice/drills/ArgumentDrill'));
const HedgingDrill = lazyWithReload(() => import('./practice/drills/HedgingDrill'));
const AbstractDrill = lazyWithReload(() => import('./practice/drills/AbstractDrill'));
const RegistersDrill = lazyWithReload(() => import('./practice/drills/RegistersDrill'));
const PresentingDrill = lazyWithReload(() => import('./practice/drills/PresentingDrill'));
const MeetingsDrill = lazyWithReload(() => import('./practice/drills/MeetingsDrill'));
const BusinessDrill = lazyWithReload(() => import('./practice/drills/BusinessDrill'));
const PoliticsDrill = lazyWithReload(() => import('./practice/drills/PoliticsDrill'));
const SmalltalkDrill = lazyWithReload(() => import('./practice/drills/SmalltalkDrill'));
const HumourDrill = lazyWithReload(() => import('./practice/drills/HumourDrill'));
const LanguageHistoryDrill = lazyWithReload(() => import('./practice/drills/LanguageHistoryDrill'));
const LiteratureDrill = lazyWithReload(() => import('./practice/drills/LiteratureDrill'));
const ParticlesDrill = lazyWithReload(() => import('./practice/drills/ParticlesDrill'));
const DebateDrill = lazyWithReload(() => import('./practice/drills/DebateDrill'));
const FormalSpeechDrill = lazyWithReload(() => import('./practice/drills/FormalSpeechDrill'));
const TranslationDrill = lazyWithReload(() => import('./practice/drills/TranslationDrill'));
const ProofreadingDrill = lazyWithReload(() => import('./practice/drills/ProofreadingDrill'));
const MediaAnalysisDrill = lazyWithReload(() => import('./practice/drills/MediaAnalysisDrill'));
const LegalDrill = lazyWithReload(() => import('./practice/drills/LegalDrill'));
const ScienceDrill = lazyWithReload(() => import('./practice/drills/ScienceDrill'));
const ArtsDrill = lazyWithReload(() => import('./practice/drills/ArtsDrill'));
const RegionalDrill = lazyWithReload(() => import('./practice/drills/RegionalDrill'));
const IdentityDrill = lazyWithReload(() => import('./practice/drills/IdentityDrill'));
const DiasporaDrill = lazyWithReload(() => import('./practice/drills/DiasporaDrill'));
const PravopisDrill = lazyWithReload(() => import('./practice/PravopisDrill'));
const KonektoriDrill = lazyWithReload(() => import('./practice/KonektoriDrill'));
const RazgovorniDrill = lazyWithReload(() => import('./practice/RazgovorniDrill'));
const VidImperativDrill = lazyWithReload(() => import('./practice/VidImperativDrill'));
const PosvojniDrill = lazyWithReload(() => import('./practice/PosvojniDrill'));
const VremenskeDrill = lazyWithReload(() => import('./practice/VremenskeDrill'));
const SklonidbaBrojevaDrill = lazyWithReload(() => import('./practice/SklonidbaBrojevaDrill'));
const NamjeraDrill = lazyWithReload(() => import('./practice/NamjeraDrill'));
const SrocnostDrill = lazyWithReload(() => import('./practice/SrocnostDrill'));
const EnklitikeDrill = lazyWithReload(() => import('./practice/EnklitikeDrill'));
const AkademskiDrill = lazyWithReload(() => import('./practice/AkademskiDrill'));
const InterpunkcijaDrill = lazyWithReload(() => import('./practice/InterpunkcijaDrill'));
const MnozinaDrill = lazyWithReload(() => import('./practice/MnozinaDrill'));
const ProstorniDrill = lazyWithReload(() => import('./practice/ProstorniDrill'));
const StupnjevanjeDrill = lazyWithReload(() => import('./practice/StupnjevanjeDrill'));
const TrpniDrill = lazyWithReload(() => import('./practice/TrpniDrill'));
const InfinitivDaDrill = lazyWithReload(() => import('./practice/InfinitivDaDrill'));
const VidskiParoviDrill = lazyWithReload(() => import('./practice/VidskiParoviDrill'));
const VelikoSlovoDrill = lazyWithReload(() => import('./practice/VelikoSlovoDrill'));
const KraticeDrill = lazyWithReload(() => import('./practice/KraticeDrill'));
const LektorDrill = lazyWithReload(() => import('./practice/LektorDrill'));
const ZamjeniceDrill = lazyWithReload(() => import('./practice/ZamjeniceDrill'));
const UzrocneDrill = lazyWithReload(() => import('./practice/UzrocneDrill'));
const KolicinaDrill = lazyWithReload(() => import('./practice/KolicinaDrill'));
const DopusneDrill = lazyWithReload(() => import('./practice/DopusneDrill'));
const PluskvamperfektDrill = lazyWithReload(() => import('./practice/PluskvamperfektDrill'));
const SavSvakiDrill = lazyWithReload(() => import('./practice/SavSvakiDrill'));
const NovinskiDrill = lazyWithReload(() => import('./practice/NovinskiDrill'));
const PrenesenaDrill = lazyWithReload(() => import('./practice/PrenesenaDrill'));
const ModalnostDrill = lazyWithReload(() => import('./practice/ModalnostDrill'));
const PrijedloziGenDrill = lazyWithReload(() => import('./practice/PrijedloziGenDrill'));
const ImeniceMeDrill = lazyWithReload(() => import('./practice/ImeniceMeDrill'));
const PitanjaDrill = lazyWithReload(() => import('./practice/PitanjaDrill'));
const DvovidniDrill = lazyWithReload(() => import('./practice/DvovidniDrill'));
const ISklonidbaDrill = lazyWithReload(() => import('./practice/ISklonidbaDrill'));
const VrijemeIzrazDrill = lazyWithReload(() => import('./practice/VrijemeIzrazDrill'));
const SlojeviDrill = lazyWithReload(() => import('./practice/SlojeviDrill'));
const ParniVezniciDrill = lazyWithReload(() => import('./practice/ParniVezniciDrill'));
const EponimiDrill = lazyWithReload(() => import('./practice/EponimiDrill'));
const ZeljeDrill = lazyWithReload(() => import('./practice/ZeljeDrill'));
const UsporedbeDrill = lazyWithReload(() => import('./practice/UsporedbeDrill'));
const PribliznoDrill = lazyWithReload(() => import('./practice/PribliznoDrill'));
const UljudnostDrill = lazyWithReload(() => import('./practice/UljudnostDrill'));
const KalkoviDrill = lazyWithReload(() => import('./practice/KalkoviDrill'));
const GlagoliGovorenjaDrill = lazyWithReload(() => import('./practice/GlagoliGovorenjaDrill'));
const PosloviceDrill = lazyWithReload(() => import('./practice/PosloviceDrill'));
const StilskeFigureDrill = lazyWithReload(() => import('./practice/StilskeFigureDrill'));
const DopisiDrill = lazyWithReload(() => import('./practice/DopisiDrill'));
const NeodredjeneDrill = lazyWithReload(() => import('./practice/NeodredjeneDrill'));
const SlaganjeBrojevaDrill = lazyWithReload(() => import('./practice/SlaganjeBrojevaDrill'));
const PovratniDrill = lazyWithReload(() => import('./practice/PovratniDrill'));
const SklonidbaImenaDrill = lazyWithReload(() => import('./practice/SklonidbaImenaDrill'));
const PrijedlozniIzraziDrill = lazyWithReload(() => import('./practice/PrijedlozniIzraziDrill'));
const FrazeologijaDrill = lazyWithReload(() => import('./practice/FrazeologijaDrill'));
const TvorbaRijeciDrill = lazyWithReload(() => import('./practice/TvorbaRijeciDrill'));
const SinonimijaDrill = lazyWithReload(() => import('./practice/SinonimijaDrill'));
const EmfazaDrill = lazyWithReload(() => import('./practice/EmfazaDrill'));
const VidNijanseDrill = lazyWithReload(() => import('./practice/VidNijanseDrill'));
const ReportedSpeechDrill = lazyWithReload(() => import('./practice/ReportedSpeechDrill'));
const MotionVerbsDrill = lazyWithReload(() => import('./practice/MotionVerbsDrill'));
const ParticipleDrill = lazyWithReload(() => import('./practice/ParticipleDrill'));
const SubordinationDrill = lazyWithReload(() => import('./practice/SubordinationDrill'));
const ConditionalDrill = lazyWithReload(() => import('./practice/ConditionalDrill'));
const IdiomDrill = lazyWithReload(() => import('./practice/IdiomDrill'));
const DiscourseDrill = lazyWithReload(() => import('./practice/DiscourseDrill'));
const RegisterDrill = lazyWithReload(() => import('./practice/RegisterDrill'));
const NominalizationDrill = lazyWithReload(() => import('./practice/NominalizationDrill'));
const NegationGenDrill = lazyWithReload(() => import('./practice/NegationGenDrill'));
const VocativeScreen = lazyWithReload(() => import('./practice/VocativeScreen'));
const CollocationsGame = lazyWithReload(() => import('./practice/CollocationsGame'));
const WordFamilies = lazyWithReload(() => import('./practice/WordFamilies'));
const DictationScreen = lazyWithReload(() => import('./practice/DictationScreen'));
const PronunciationContrast = lazyWithReload(() => import('./practice/PronunciationContrast'));
const DialogueSim = lazyWithReload(() => import('./practice/DialogueSim'));
const CefrTest = lazyWithReload(() => import('./practice/CefrTest'));
const MyWordsScreen = lazyWithReload(() => import('./practice/MyWordsScreen'));
const CertificateScreen = lazyWithReload(() => import('./profile/CertificateScreen'));
const MistakesScreen = lazyWithReload(() => import('./practice/MistakesScreen'));
const AnalyticsScreen = lazyWithReload(() => import('./profile/AnalyticsScreen'));
const GrammarReference = lazyWithReload(() => import('./shared/GrammarReference'));
const BakaSummer = lazyWithReload(() => import('./croatia/BakaSummer'));
const CroatiaToday = lazyWithReload(() => import('./croatia/CroatiaToday'));
const SurvivalDinner = lazyWithReload(() => import('./croatia/SurvivalDinner'));
const ClozeEngine = lazyWithReload(() => import('./practice/ClozeEngine'));
const GrammarConstellation = lazyWithReload(() => import('./learn/GrammarConstellation'));
const GrammarExplainer = lazyWithReload(() => import('./learn/GrammarExplainer'));
const CaseTransformer = lazyWithReload(() => import('./learn/CaseTransformer'));
const VocabScenes = lazyWithReload(() => import('./learn/VocabScenes'));
const AnimatedLesson = lazyWithReload(() => import('./learn/AnimatedLesson'));
const GrammarReader = lazyWithReload(() => import('./learn/GrammarReader'));
const KaficScreen = lazyWithReload(() => import('./croatia/KaficScreen'));
const DiasporaNote = lazyWithReload(() => import('./croatia/DiasporaNote'));
const TiViScreen = lazyWithReload(() => import('./learn/TiViScreen'));
const GrammarVideos = lazyWithReload(() => import('./learn/GrammarVideos'));
const LifeEventsScreen = lazyWithReload(() => import('./croatia/LifeEventsScreen'));
const CivicScreen = lazyWithReload(() => import('./croatia/CivicScreen'));
const EasterScreen = lazyWithReload(() => import('./croatia/EasterScreen'));
const PostcardScreen = lazyWithReload(() => import('./croatia/PostcardScreen'));
const StoryModeScreen = lazyWithReload(() => import('./croatia/StoryModeScreen'));
const HeritageStoryScreen = lazyWithReload(() => import('./croatia/HeritageStoryScreen'));
const CroatianNewsScreen = lazyWithReload(() => import('./croatia/CroatianNewsScreen'));
const PhraseOfDayScreen = lazyWithReload(() => import('./croatia/PhraseOfDayScreen'));
const AIListeningScreen = lazyWithReload(() => import('./practice/AIListeningScreen'));
const AIStoryScreen = lazyWithReload(() => import('./practice/AIStoryScreen'));
const VideoLessonScreen = lazyWithReload(() => import('./practice/VideoLessonScreen'));
const GrammarDiagnosisScreen = lazyWithReload(() => import('./home/GrammarDiagnosisScreen'));
const MicroLessonScreen = lazyWithReload(() => import('./learn/MicroLessonScreen'));
const LiveTutorScreen = lazyWithReload(() => import('./croatia/LiveTutorScreen'));
const PhotoVocabScanner = lazyWithReload(() => import('./shared/PhotoVocabScanner'));
const TermsOfService = lazyWithReload(() => import('./shared/TermsOfService'));
const GradedInputScreen = lazyWithReload(() => import('./learn/GradedInputScreen'));
const PronunciationCourse = lazyWithReload(() => import('./learn/PronunciationCourse'));
const AdvancedVocabScreen = lazyWithReload(() => import('./learn/AdvancedVocabScreen'));
const PitchAccentMastery = lazyWithReload(() => import('./learn/PitchAccentMastery'));
const HeritagePathScreen = lazyWithReload(() => import('./croatia/HeritagePathScreen'));
const DialectAwarenessScreen = lazyWithReload(() => import('./croatia/DialectAwarenessScreen'));
const HeritageModeScreen = lazyWithReload(() => import('./learn/HeritageModeScreen'));
const PhonemePracticeScreen = lazyWithReload(() => import('./learn/PhonemePracticeScreen'));
const PracticalCroatianScreen = lazyWithReload(() => import('./learn/PracticalCroatianScreen'));
const FrequencyTrackScreen = lazyWithReload(() => import('./learn/FrequencyTrackScreen'));
const GrammarTrackScreen = lazyWithReload(() => import('./learn/GrammarTrackScreen'));
const GrammarUnitDetail = lazyWithReload(() => import('./learn/GrammarUnitDetail'));
const ListeningComprehensionScreen = lazyWithReload(
  () => import('./practice/ListeningComprehensionScreen'),
);
const PronunciationAssessScreen = lazyWithReload(
  () => import('./practice/PronunciationAssessScreen'),
);
const ProductionDrillScreen = lazyWithReload(() => import('./practice/ProductionDrillScreen'));
const AdaptiveReviewScreen = lazyWithReload(() => import('./practice/AdaptiveReviewScreen'));
const PastTenseLessonScreen = lazyWithReload(() => import('./learn/PastTenseLessonScreen'));
const FutureTenseLessonScreen = lazyWithReload(() => import('./learn/FutureTenseLessonScreen'));
const ArcadeHub = lazyWithReload(() => import('./practice/ArcadeHub'));
const AlkaScreen = lazyWithReload(() => import('./practice/alka/AlkaScreen'));
const MapScreen = lazyWithReload(() => import('./practice/MapScreen'));

// Tab order used for slide direction. Defined at module scope so it's not
// recreated on every render.
const TAB_ORDER = ['home', 'learn', 'practice', 'croatia', 'profile'];

/**
 * ScreenGuard — shown when a stateful exercise screen loads after a hard refresh
 * and its required launch-time data is missing. Provides a clear path back rather
 * than rendering an empty or broken exercise screen.
 */
function ScreenGuard({ goBack, label = 'exercise' }: { goBack: () => void; label?: string }) {
  // A hard refresh on an exercise screen loses its launch-time data but NOT the
  // sessionStorage launch markers (those survive reload). The launched activity
  // can no longer be finished here, so the markers are stale. Clear them on mount:
  // otherwise a later, unrelated drill finishing via completeExercise (which calls
  // signalSessionCompleteIfActive() with no screen arg) would falsely complete this
  // stranded Today's Session activity. The activity correctly stays incomplete — the
  // user re-launches it fresh from Today. (Mirrors setTab's tab-away cleanup, which
  // the back path can bypass via navigate(-1) after a refresh.)
  useEffect(() => {
    try {
      sessionStorage.removeItem('nh_session_started');
      sessionStorage.removeItem('nh_session_category');
    } catch {
      /* sessionStorage unavailable — non-fatal */
    }
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: 32,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 56, marginBottom: 16 }}>🔄</div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--heading)', marginBottom: 8 }}>
        Session refreshed
      </h2>
      <p
        style={{
          fontSize: 14,
          color: 'var(--subtext)',
          marginBottom: 28,
          maxWidth: 280,
          lineHeight: 1.5,
        }}
      >
        This {label} needs to be started from the Practice tab — your previous session data couldn't
        be restored.
      </p>
      <button
        onClick={goBack}
        style={{
          background: 'var(--info)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '14px 32px',
          fontSize: 15,
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: "'Outfit',sans-serif",
        }}
      >
        Back to Practice
      </button>
    </div>
  );
}

/**
 * AppRouter — renders the correct screen component for `currentScreen`.
 * All screen-level lazy imports live here; App.jsx just passes props and renders <AppRouter />.
 *
 * Shared app state is pulled from AppContext via useApp().
 * Only high-frequency lesson/exercise state remains as direct props.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AppRouter(props: Record<string, any>) {
  // Pull shared state from context
  const ctx = useApp();
  const { stats, setStats, level, award } = useStats();
  const {
    currentScreen,
    authUser,
    authScreen: _authScreen,
    name,
    setName,
    doOut,
    favs,
    toggleFav,
    setScr,
    goBack,
    tab,
    setTab,
    sCurEx,
    jWords: _jWords,
    setJWords,
    srchQ,
    setSrchQ,
    srchR,
    srchOpen,
    setSrchOpen,
    doSearch,

    dchlA,
    sDchlA,
    dchlSl,
    sDchlSl,
    resumeLesson,
    launchPathItem,
    launchAnimLesson,
    launchMcGame,
    launchLegendary,
    launchCheckpoint,
    mcGameComplete,
    launchFlashcards,
    launchListening,
    launchMatch,
    launchSpeaking,
    launchSessionActivity,
    _syncReady,
    doSyncNow,
    lastSyncedAt,
    icons,
    allCats,
    getWeekStats,
    isNewUserWindow,
    daysSinceJoin,
    comebackBonus,
    weeklyXP: _weeklyXP,
  } = ctx;

  // Direct props: high-frequency lesson/exercise screen state
  const {
    // Placement
    setPlacementQ,
    setPlacementIdx,
    setPlacementScore,
    setPlacementAnswers,
    setPlacementXp,
    getPlacementCt,
    setShowFirstWords,
    // Lesson screen state
    lt,
    li,
    lx,
    ls,
    lp,
    la,
    lsl,
    qi,
    sLt,
    sLi,
    sLx,
    sLs,
    sLp,
    sLa,
    sLsl,
    sQi,
    // Grammar screen state
    gl,
    gx,
    gp,
    gs,
    ga,
    gsl,
    sGl,
    sGp,
    sGx,
    sGs,
    sGa,
    sGsl,
    // Match / MC state
    matchInitPool,
    mcInitQ,
    mcResultQ,
    mcResultScore,
    mcMistakes,
    // Reading state
    rp,
    rph,
    rqi,
    rsc,
    ra,
    rsl,
    hw,
    sRph,
    sRqi,
    sRsc,
    sRa,
    sRsl,
    sHw,
    sRp,
    // Speaking state
    sw,
    si,
    sx,
    sr,
    ssc,
    sSr,
    sSx,
    sSw,
    sSsc,
    // Misc exercise state
    animLesson,
    fcInitPool,
    lsInitQ,
    curEx: _curEx,
  } = props;

  const _transKey = currentScreen === 'dashboard' ? 'dashboard-' + tab : currentScreen;

  // ── Tab scroll-position save / restore ───────────────────────────────────
  // Saves window.scrollY when the user leaves a tab, restores it when they return.
  // This means a user who was halfway through the Practice exercise list gets
  // placed back there after switching to Croatia tab and back.
  const tabScrollRef = useRef<Record<string, number>>({});
  useEffect(() => {
    const savedY = tabScrollRef.current[tab] || 0;
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: savedY, behavior: 'instant' });
    });
    const saveScroll = () => {
      tabScrollRef.current[tab] = window.scrollY;
    };
    window.addEventListener('scroll', saveScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('scroll', saveScroll);
    };
  }, [tab]);

  // Tab directional transitions — computed synchronously during render so the
  // className is correct on the same frame the animation plays.
  // MUST NOT use useEffect here: effects run after paint, making tabDirection
  // always one render late (the animation would fire before direction is updated).
  const prevTabRef = useRef(tab);
  let tabSlideClass = 'tab-enter'; // default for first render
  if (prevTabRef.current !== tab) {
    const prevIdx = TAB_ORDER.indexOf(prevTabRef.current);
    const nextIdx = TAB_ORDER.indexOf(tab);
    tabSlideClass = nextIdx > prevIdx ? 'slide-in-right' : 'slide-in-left';
    prevTabRef.current = tab; // update synchronously — safe inside render when the value derives from props
  }

  // Swipe-back: disabled on flashcards (has its own swipe handling)
  const swipeEnabled = currentScreen !== 'flashcards';
  useSwipeBack(goBack, swipeEnabled);

  // SP7: deep-link target story for GradedInputScreen (e.g. from Story of the Day card).
  // Cleared on goBack so future entries via the Practice tab start on the catalog.
  const [pendingStoryId, setPendingStoryId] = useState<string | null>(null);
  // SP9: deep-link target grammar unit for GrammarUnitDetail (set by GrammarTrackScreen).
  const [pendingGrammarUnitId, setPendingGrammarUnitId] = useState<string | null>(null);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={_transKey}
        initial={_isNative ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={(_isNative ? false : { opacity: 0, y: -8 }) as TargetAndTransition | undefined}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        style={{ height: '100%' }}
      >
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            name={name}
            au={authUser}
            st={stats}
            setScr={setScr}
            setName={setName}
            setPlacementQ={setPlacementQ}
            setPlacementIdx={setPlacementIdx}
            setPlacementScore={setPlacementScore}
            setPlacementAnswers={setPlacementAnswers}
            setPlacementXp={setPlacementXp}
          />
        )}
        {currentScreen === 'placement' && (
          <PlacementTest
            onComplete={async function (level: number) {
              lsSet('placement_done', '1');
              // ALSO flag user as onboarded so Firebase sync persists this
              // across devices. buildProgressSnapshot reads `onboarded` and
              // `nh_placement_done` from localStorage and writes them into
              // the Firebase profile; applyRemoteProgress on a new device
              // sets localStorage from those fields, which short-circuits
              // the App.tsx:1303 placement-trigger check. Without these two
              // writes, a user who completed placement on device A would be
              // re-prompted on device B until Firebase MERGE_REMOTE happened
              // to land xp > 0 before the 1200ms placement timer fired.
              lsSet('nh_placement_done', 'true');
              lsSet('onboarded', 'true');
              // getPlacementCt is async (LEARN_PATH ships from /api/content/core).
              // It MUST be awaited: assigning the raw Promise to `ct` set stats.ct
              // to a Promise (breaking every `[...stats.ct]` spread and the
              // firebase.ts arrayUnion filter → sync crash) and made
              // `lc = Math.max(prev.lc, undefined)` = NaN. Resolve once, and fall
              // back to no pre-credit if content can't load (offline) rather than
              // stranding the user on the placement screen.
              let ct: string[] = [];
              try {
                ct = await getPlacementCt(level);
              } catch {
                ct = [];
              }
              setStats(function (prev) {
                return {
                  ...prev,
                  ct,
                  lc: Math.max(prev.lc, ct.length),
                };
              });
              if (typeof award === 'function') award(25);
              setShowFirstWords(true);
              setTab('learn');
            }}
            onCancel={function () {
              setTab('learn');
            }}
          />
        )}
        {currentScreen === 'equivalency' && (
          <EquivalencyTestScreen
            userEligible={getUserCefr(stats.xp || 0, stats.lc || 0, stats.gc || 0)}
            userLessonCount={stats.lc || 0}
            onBackToProfile={() => setTab('profile')}
          />
        )}
        {
          // ═══ DASHBOARD ═══
          currentScreen === 'dashboard' && (
            <div className="dash">
              <div style={{ position: 'relative', marginBottom: 20 }}>
                <div style={{ position: 'relative' }} role="search">
                  <span
                    style={{
                      position: 'absolute',
                      left: 14,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: 16,
                      pointerEvents: 'none',
                      opacity: 0.4,
                    }}
                    aria-hidden="true"
                  >
                    🔍
                  </span>
                  <input
                    type="search"
                    role="combobox"
                    id="app-search"
                    value={srchQ}
                    onChange={function (e) {
                      setSrchQ(e.target.value);
                      doSearch(e.target.value);
                      setSrchOpen(true);
                    }}
                    onFocus={function () {
                      if (srchQ) setSrchOpen(true);
                    }}
                    onKeyDown={function (e) {
                      if (e.key === 'Escape') {
                        setSrchOpen(false);
                        setSrchQ('');
                      }
                    }}
                    placeholder="Search words, phrases, screens…"
                    aria-label="Search vocabulary, phrases, and screens"
                    aria-expanded={srchOpen && srchQ.length > 0}
                    aria-controls="search-results"
                    aria-autocomplete="list"
                    autoComplete="off"
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 44px',
                      fontSize: 14,
                      borderRadius: 14,
                      boxShadow: '0 1px 3px rgba(0,0,0,.05)',
                    }}
                  />
                </div>
                {srchOpen && srchQ && srchR.length === 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      left: 0,
                      right: 0,
                      background: 'var(--card)',
                      borderRadius: 16,
                      boxShadow: '0 12px 40px rgba(0,0,0,.14)',
                      zIndex: 100,
                      border: '1.5px solid var(--card-b)',
                      padding: '20px 16px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
                    <div style={{ fontSize: 14, color: 'var(--subtext)', fontWeight: 600 }}>
                      No results for "{srchQ}"
                    </div>
                  </div>
                )}
                {srchOpen && srchR.length > 0 && (
                  <div
                    id="search-results"
                    role="listbox"
                    aria-label="Search results"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      left: 0,
                      right: 0,
                      background: 'var(--card)',
                      borderRadius: 16,
                      boxShadow: '0 12px 40px rgba(0,0,0,.14)',
                      zIndex: 100,
                      maxHeight: 320,
                      overflow: 'auto',
                      border: '1.5px solid var(--card-b)',
                    }}
                  >
                    {srchR.map(function (
                      r: { hr: string; en: string; type: string; cat?: string; go: string },
                      i: number,
                    ) {
                      return (
                        <div
                          key={r.hr + ':' + r.type + ':' + i}
                          className="sr-item"
                          role="option"
                          onClick={function () {
                            setSrchOpen(false);
                            setSrchQ('');
                            if (r.type === 'vocab' && r.cat) {
                              launchPathItem({ go: 'lesson', topic: r.cat });
                            } else {
                              setScr(r.go);
                            }
                          }}
                        >
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--heading)' }}>
                              {r.hr}
                            </div>
                            <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
                              {r.en}
                            </div>
                          </div>
                          <span
                            style={{
                              fontSize: 10,
                              padding: '3px 9px',
                              borderRadius: 20,
                              fontWeight: 700,
                              background:
                                r.type === 'vocab'
                                  ? '#dbeafe'
                                  : r.type === 'screen'
                                    ? '#dcfce7'
                                    : '#fef9c3',
                              color:
                                r.type === 'vocab'
                                  ? '#1d4ed8'
                                  : r.type === 'screen'
                                    ? '#166534'
                                    : '#a16207',
                            }}
                          >
                            {r.type}
                          </span>
                        </div>
                      );
                    })}
                    <button
                      className="sr-close"
                      onClick={function () {
                        setSrchOpen(false);
                      }}
                      aria-label="Close search"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
              {
                // ═══ TAB: HOME ═══
                tab === 'home' && (
                  <div key="tab-home" className={tabSlideClass}>
                    <React.Suspense fallback={null}>
                      <ScreenErrorBoundary name="HomeTab">
                        <HomeTab
                          dchlA={dchlA}
                          sDchlA={sDchlA}
                          dchlSl={dchlSl}
                          sDchlSl={sDchlSl}
                          getWeekStats={getWeekStats}
                          setTab={(id: string) => {
                            const VALID_TABS: Record<string, number> = {
                              home: 1,
                              learn: 1,
                              practice: 1,
                              croatia: 1,
                              profile: 1,
                            };
                            if (VALID_TABS[id]) setTab(id);
                            else setScr(id);
                          }}
                          sCurEx={sCurEx}
                          allCats={allCats}
                          sh={_sh}
                          launchPathItem={launchPathItem}
                          launchActivity={launchSessionActivity}
                          syncReady={_syncReady}
                          onSyncNow={doSyncNow}
                          authUser={authUser}
                          comebackBonus={comebackBonus}
                          goal={lsGet('nh_goal') || 'fluent'}
                          isNewUserWindow={isNewUserWindow}
                          daysSinceJoin={daysSinceJoin}
                          resumeLesson={resumeLesson}
                          launchStory={(storyId: string) => {
                            setPendingStoryId(storyId);
                            setScr('graded_input');
                          }}
                        />
                      </ScreenErrorBoundary>
                    </React.Suspense>
                  </div>
                )
              }
              {
                // ═══ TAB: LEARN ═══
                tab === 'learn' && (
                  <div key="tab-learn" className={tabSlideClass}>
                    <React.Suspense fallback={null}>
                      <ScreenErrorBoundary name="LearnTab">
                        <LearnTab
                          allCats={allCats}
                          icons={icons}
                          sCurEx={sCurEx}
                          sh={_sh}
                          sLt={sLt}
                          sLi={sLi}
                          sLx={sLx}
                          sLs={sLs}
                          sLp={sLp}
                          sLa={sLa}
                          sLsl={sLsl}
                          sGl={sGl}
                          sGp={sGp}
                          sGx={sGx}
                          sGs={sGs}
                          sGa={sGa}
                          sGsl={sGsl}
                          launchPathItem={launchPathItem}
                          launchAnimLesson={launchAnimLesson}
                        />
                      </ScreenErrorBoundary>
                    </React.Suspense>
                  </div>
                )
              }
              {
                // ═══ TAB: PRACTICE ═══
                tab === 'practice' && (
                  <div key="tab-practice" className={tabSlideClass}>
                    <React.Suspense fallback={null}>
                      <ScreenErrorBoundary name="GradTab">
                        <GradTab
                          allCats={allCats}
                          sh={_sh}
                          sCurEx={sCurEx}
                          onLaunchQuiz={launchMcGame}
                          onLaunchFlash={launchFlashcards}
                          onLaunchListen={launchListening}
                          onLaunchMatch={launchMatch}
                          onLaunchSpeaking={launchSpeaking}
                        />
                      </ScreenErrorBoundary>
                    </React.Suspense>
                  </div>
                )
              }
              {
                // ═══ TAB: AI TUTOR ═══
                tab === 'ai' && (
                  <div key="tab-ai" className={tabSlideClass}>
                    <React.Suspense fallback={null}>
                      <ScreenErrorBoundary name="RazgovorTab">
                        <RazgovorTab setScr={setScr} sCurEx={sCurEx} />
                      </ScreenErrorBoundary>
                    </React.Suspense>
                  </div>
                )
              }
              {
                // ═══ TAB: CROATIA (Hrvatska — Phase 7b doors redesign) ═══
                tab === 'croatia' && (
                  <div key="tab-croatia" className={tabSlideClass}>
                    <React.Suspense fallback={null}>
                      <ScreenErrorBoundary name="HrvatskaTab">
                        <HrvatskaTab setScr={setScr} sCurEx={sCurEx} />
                      </ScreenErrorBoundary>
                    </React.Suspense>
                  </div>
                )
              }
              {
                // ═══ TAB: PROFILE ═══
                tab === 'profile' && (
                  <div key="tab-profile" className={tabSlideClass}>
                    <React.Suspense fallback={null}>
                      <ScreenErrorBoundary name="ProfileTab">
                        <ProfileTab
                          syncReady={_syncReady}
                          onSyncNow={doSyncNow}
                          lastSyncedAt={lastSyncedAt as number}
                          onTakeEquivalencyTest={() => setScr('equivalency')}
                          userEligible={getUserCefr(stats.xp || 0, stats.lc || 0, stats.gc || 0)}
                        />
                      </ScreenErrorBoundary>
                    </React.Suspense>
                  </div>
                )
              }
            </div>
          )
        }
        {currentScreen === 'modal' && (
          <ScreenErrorBoundary key="modal" name="modal">
            <ModalScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'history' && (
          <ScreenErrorBoundary key="history" name="history">
            <CroatiaHistoryScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'events' && (
          <ScreenErrorBoundary key="events" name="events">
            <EventsCalendar goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'top100' && (
          <ScreenErrorBoundary key="top100" name="top100">
            <Top100Screen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {
          // ═══ MULTIPLE CHOICE GAME — guard: requires mcInitQ from launch ═══
          currentScreen === 'mcgame' &&
            (mcInitQ?.length > 0 ? (
              <ScreenErrorBoundary key="mcgame" name="mcgame">
                <McGame
                  questions={mcInitQ}
                  onComplete={mcGameComplete}
                  goBack={goBack}
                  award={award}
                />
              </ScreenErrorBoundary>
            ) : (
              <ScreenGuard goBack={goBack} label="quiz" />
            ))
        }
        {currentScreen === 'mcresult' &&
          (mcResultQ?.length > 0 ? (
            <ScreenErrorBoundary key="mcresult" name="mcresult">
              <McResult
                questions={mcResultQ}
                score={mcResultScore}
                mistakes={mcMistakes}
                setScr={setScr}
                goBack={goBack}
                onNewGame={launchMcGame}
                award={award}
              />
            </ScreenErrorBoundary>
          ) : (
            <ScreenGuard goBack={goBack} label="quiz result" />
          ))}
        {currentScreen === 'padezi' && (
          <ScreenErrorBoundary key="padezi" name="padezi">
            <PadeziScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'unjumble' && (
          <ScreenErrorBoundary key="unjumble" name="unjumble">
            <Unjumble goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'idioms' && (
          <ScreenErrorBoundary key="idioms" name="idioms">
            <IdiomsScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'privacy' && (
          <ScreenErrorBoundary key="privacy" name="privacy">
            <PrivacyScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'terms' && (
          <ScreenErrorBoundary key="terms" name="terms">
            <TermsOfService goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'flashcards' &&
          (fcInitPool?.length > 0 ? (
            <ScreenErrorBoundary key="flashcards" name="flashcards">
              <Flashcards pool={fcInitPool} goBack={goBack} award={award} />
            </ScreenErrorBoundary>
          ) : (
            <ScreenGuard goBack={goBack} label="flashcard session" />
          ))}
        {currentScreen === 'listening' &&
          (lsInitQ?.length > 0 ? (
            <ScreenErrorBoundary key="listening" name="listening">
              <ListeningScreen questions={lsInitQ} goBack={goBack} award={award} />
            </ScreenErrorBoundary>
          ) : (
            <ScreenGuard goBack={goBack} label="listening exercise" />
          ))}
        {currentScreen === 'storyselect' && (
          <ScreenErrorBoundary key="storyselect" name="storyselect">
            <StoryScreens goBack={goBack} award={award} sCurEx={sCurEx} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'numtime' && (
          <ScreenErrorBoundary key="numtime" name="numtime">
            <NumTime goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'proverbs' && (
          <ScreenErrorBoundary key="proverbs" name="proverbs">
            <ProverbsScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'contact' && (
          <ScreenErrorBoundary key="contact" name="contact">
            <ContactScreen
              goBack={goBack}
              authUser={authUser}
              name={name}
              level={level}
              stats={stats}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'school' && (
          <ScreenErrorBoundary key="school" name="school">
            <SchoolScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'texting' && (
          <ScreenErrorBoundary key="texting" name="texting">
            <TextingScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'friends' && (
          <ScreenErrorBoundary key="friends" name="friends">
            <FriendsScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'foodorder' && (
          <ScreenErrorBoundary key="foodorder" name="foodorder">
            <FoodOrderScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'transport' && (
          <ScreenErrorBoundary key="transport" name="transport">
            <TransportScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'emergency' && (
          <ScreenErrorBoundary key="emergency" name="emergency">
            <EmergencyScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'football' && (
          <ScreenErrorBoundary key="football" name="football">
            <HNLScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'croatiaathletes' && (
          <ScreenErrorBoundary key="croatiaathletes" name="croatiaathletes">
            <CroatiaAthletes goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'immersion' && (
          <ScreenErrorBoundary key="immersion" name="immersion">
            <ImmersionHub goBack={goBack} setScr={setScr} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'aiconvo' && (
          <ScreenErrorBoundary key="aiconvo" name="aiconvo">
            <AIConversation goBack={goBack} setScr={setScr} sCurEx={sCurEx} setJWords={setJWords} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'popculture' && (
          <ScreenErrorBoundary key="popculture" name="popculture">
            <PopCultureScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'basketball' && (
          <ScreenErrorBoundary key="basketball" name="basketball">
            <BasketballScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'gym' && (
          <ScreenErrorBoundary key="gym" name="gym">
            <GymScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'practical' && (
          <ScreenErrorBoundary key="practical" name="practical">
            <PracticalScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kultura_b2' && (
          <ScreenErrorBoundary key="kultura_b2" name="kultura_b2">
            <CultureDeepDiveScreen tier="B2" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kultura_c1' && (
          <ScreenErrorBoundary key="kultura_c1" name="kultura_c1">
            <CultureDeepDiveScreen tier="C1" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kultura_c2' && (
          <ScreenErrorBoundary key="kultura_c2" name="kultura_c2">
            <CultureDeepDiveScreen tier="C2" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_labin' && (
          <ScreenErrorBoundary key="region_labin" name="region_labin">
            <RegionScreen regionKey="labin" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_bibinje' && (
          <ScreenErrorBoundary key="region_bibinje" name="region_bibinje">
            <RegionScreen regionKey="bibinje" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_hercegovina' && (
          <ScreenErrorBoundary key="region_hercegovina" name="region_hercegovina">
            <RegionScreen regionKey="hercegovina" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_vukovar' && (
          <ScreenErrorBoundary key="region_vukovar" name="region_vukovar">
            <RegionScreen regionKey="vukovar" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_zagreb' && (
          <ScreenErrorBoundary key="region_zagreb" name="region_zagreb">
            <RegionScreen regionKey="zagreb" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_split' && (
          <ScreenErrorBoundary key="region_split" name="region_split">
            <RegionScreen regionKey="split" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_mostar' && (
          <ScreenErrorBoundary key="region_mostar" name="region_mostar">
            <RegionScreen regionKey="mostar" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_tomislavgrad' && (
          <ScreenErrorBoundary key="region_tomislavgrad" name="region_tomislavgrad">
            <RegionScreen regionKey="tomislavgrad" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_knin' && (
          <ScreenErrorBoundary key="region_knin" name="region_knin">
            <RegionScreen regionKey="knin" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'cityofday' && (
          <ScreenErrorBoundary key="cityofday" name="cityofday">
            <CityOfDayScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'region_vinkovci' && (
          <ScreenErrorBoundary key="region_vinkovci" name="region_vinkovci">
            <RegionScreen regionKey="vinkovci" goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'padezifull' && (
          <ScreenErrorBoundary key="padezifull" name="padezifull">
            <PadezifullScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'aspect' && (
          <ScreenErrorBoundary key="aspect" name="aspect">
            <AspectScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grammarvideos' && (
          <ScreenErrorBoundary key="grammarvideos" name="grammarvideos">
            <GrammarVideos goBack={goBack} setScr={setScr} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grammarexplainer' && (
          <ScreenErrorBoundary key="grammarexplainer" name="grammarexplainer">
            <GrammarExplainer goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'casetransformer' && (
          <ScreenErrorBoundary key="casetransformer" name="casetransformer">
            <CaseTransformer goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vocabscenes' && (
          <ScreenErrorBoundary key="vocabscenes" name="vocabscenes">
            <VocabScenes goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {
          // ═══ ANIMATED LESSON ═══
          currentScreen === 'animlesson' && animLesson && (
            <ScreenErrorBoundary key="animlesson" name="animlesson">
              <AnimatedLesson lesson={animLesson} goBack={goBack} award={award} />
            </ScreenErrorBoundary>
          )
        }
        {
          // Reload / shared-link on /animlesson loses the ephemeral `animLesson`
          // state; without this the screen rendered fully blank with no way back.
          currentScreen === 'animlesson' && !animLesson && (
            <ScreenGuard goBack={goBack} label="animated lesson" />
          )
        }
        {currentScreen === 'grammarreader' && (
          <ScreenErrorBoundary key="grammarreader" name="grammarreader">
            <GrammarReader goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'falsefr' && (
          <ScreenErrorBoundary key="falsefr" name="falsefr">
            <FalseFriendsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prepdrill' && (
          <ScreenErrorBoundary key="prepdrill" name="prepdrill">
            <PrepDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'declension' && (
          <ScreenErrorBoundary key="declension" name="declension">
            <DeclensionScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'brzalice' && (
          <ScreenErrorBoundary key="brzalice" name="brzalice">
            <BrzaliceScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dialects' && (
          <ScreenErrorBoundary key="dialects" name="dialects">
            <DialectsScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'diminutives' && (
          <ScreenErrorBoundary key="diminutives" name="diminutives">
            <DiminutivesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'wordform' && (
          <ScreenErrorBoundary key="wordform" name="wordform">
            <WordFormScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'colorquirk' && (
          <ScreenErrorBoundary key="colorquirk" name="colorquirk">
            <ColorQuirkScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'svojmoj' && (
          <ScreenErrorBoundary key="svojmoj" name="svojmoj">
            <SvojMojScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'conditional' && (
          <ScreenErrorBoundary key="conditional" name="conditional">
            <ConditionalScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'formalregister' && (
          <ScreenErrorBoundary key="formalregister" name="formalregister">
            <FormalRegisterScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'impersonal' && (
          <ScreenErrorBoundary key="impersonal" name="impersonal">
            <ImpersonalScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'techvoc' && (
          <ScreenErrorBoundary key="techvoc" name="techvoc">
            <TechVocScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'bureaucratic' && (
          <ScreenErrorBoundary key="bureaucratic" name="bureaucratic">
            <BureaucraticScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'countries' && (
          <ScreenErrorBoundary key="countries" name="countries">
            <CountriesScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'professions' && (
          <ScreenErrorBoundary key="professions" name="professions">
            <ProfessionsScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'weather' && (
          <ScreenErrorBoundary key="weather" name="weather">
            <WeatherScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'clothes' && (
          <ScreenErrorBoundary key="clothes" name="clothes">
            <ClothesScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'bodydesc' && (
          <ScreenErrorBoundary key="bodydesc" name="bodydesc">
            <BodyDescScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'phonology' && (
          <ScreenErrorBoundary key="phonology" name="phonology">
            <PhonologyScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'typing' && (
          <ScreenErrorBoundary key="typing" name="typing">
            <TypingScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'tenses' && (
          <ScreenErrorBoundary key="tenses" name="tenses">
            <TensesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'crmap' && (
          <ScreenErrorBoundary key="crmap" name="crmap">
            <CrMap goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grocery' && (
          <ScreenErrorBoundary key="grocery" name="grocery">
            <GroceryScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'recipes' && (
          <ScreenErrorBoundary key="recipes" name="recipes">
            <RecipesScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'roleplay' && (
          <ScreenErrorBoundary key="roleplay" name="roleplay">
            <RoleplayScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'journal' && (
          <ScreenErrorBoundary key="journal" name="journal">
            <VocabJournal goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'learnpath' && (
          <ScreenErrorBoundary key="learnpath" name="learnpath">
            <LearnPath
              st={stats}
              setScr={setScr}
              goBack={goBack}
              onLaunchItem={launchPathItem}
              onLaunchLegendary={launchLegendary}
              onLaunchCheckpoint={launchCheckpoint}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'levelquiz' && (
          <ScreenErrorBoundary key="levelquiz" name="levelquiz">
            <LevelQuiz
              levelNumber={(() => {
                try {
                  return (
                    JSON.parse(sessionStorage.getItem('nh_level_quiz') || '{}').levelNumber ?? 1
                  );
                } catch {
                  return 1;
                }
              })()}
              questions={(() => {
                try {
                  return (
                    JSON.parse(sessionStorage.getItem('nh_level_quiz') || '{}').questions ?? []
                  );
                } catch {
                  return [];
                }
              })()}
              goBack={goBack}
              award={award}
            />
          </ScreenErrorBoundary>
        )}
        {
          // ═══ FAVORITES ═══
          currentScreen === 'favorites' && (
            <ScreenErrorBoundary key="favorites" name="favorites">
              <FavoritesScreen favs={favs} toggleFav={toggleFav} setScr={setScr} goBack={goBack} />
            </ScreenErrorBoundary>
          )
        }
        {currentScreen === 'reflexive' && (
          <ScreenErrorBoundary key="reflexive" name="reflexive">
            <ReflexiveScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'fillstory' && (
          <ScreenErrorBoundary key="fillstory" name="fillstory">
            <FillStoryScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'convmatch' && (
          <ScreenErrorBoundary key="convmatch" name="convmatch">
            <ConvMatchScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'scenes' && (
          <ScreenErrorBoundary key="scenes" name="scenes">
            <ScenesScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pronouns' && (
          <ScreenErrorBoundary key="pronouns" name="pronouns">
            <PronounsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'genderdrill' && (
          <ScreenErrorBoundary key="genderdrill" name="genderdrill">
            <GenderDrillScreen goBack={goBack} award={award} setSt={setStats} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sentbuild' && (
          <ScreenErrorBoundary key="sentbuild" name="sentbuild">
            <SentenceBuilderScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sentencetiles' && (
          <ScreenErrorBoundary key="sentencetiles" name="sentencetiles">
            <SentenceTileScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'verbdrill' && (
          <ScreenErrorBoundary key="verbdrill" name="verbdrill">
            <VerbDrillScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'tenseflip' && (
          <ScreenErrorBoundary key="tenseflip" name="tenseflip">
            <TenseFlipScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'riddles' && (
          <ScreenErrorBoundary key="riddles" name="riddles">
            <RiddlesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'logicquiz' && (
          <ScreenErrorBoundary key="logicquiz" name="logicquiz">
            <LogicQuizScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'ordinals' && (
          <ScreenErrorBoundary key="ordinals" name="ordinals">
            <OrdinalsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'relpron' && (
          <ScreenErrorBoundary key="relpron" name="relpron">
            <RelativePronounsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'emogender' && (
          <ScreenErrorBoundary key="emogender" name="emogender">
            <EmotionGenderScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'opposites' && (
          <ScreenErrorBoundary key="opposites" name="opposites">
            <OppositesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'cityloc' && (
          <ScreenErrorBoundary key="cityloc" name="cityloc">
            <CityLocativeScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'accusativedrill' && (
          <ScreenErrorBoundary key="accusativedrill" name="accusativedrill">
            <AccusativeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'coloragree' && (
          <ScreenErrorBoundary key="coloragree" name="coloragree">
            <ColorAgreementScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'possess' && (
          <ScreenErrorBoundary key="possess" name="possess">
            <PossessivesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'qwords' && (
          <ScreenErrorBoundary key="qwords" name="qwords">
            <QuestionWordsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'negation' && (
          <ScreenErrorBoundary key="negation" name="negation">
            <NegationScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sibil' && (
          <ScreenErrorBoundary key="sibil" name="sibil">
            <SibilarizationScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'restaurant' && (
          <ScreenErrorBoundary key="restaurant" name="restaurant">
            <RestaurantScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'profgender' && (
          <ScreenErrorBoundary key="profgender" name="profgender">
            <ProfessionGenderScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'comparatives' && (
          <ScreenErrorBoundary key="comparatives" name="comparatives">
            <ComparativesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'future' && (
          <ScreenErrorBoundary key="future" name="future">
            <FutureTenseScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kings' && (
          <ScreenErrorBoundary key="kings" name="kings">
            <KingsScreen goBack={goBack} award={award} setSt={setStats} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'conjdrill' && (
          <ScreenErrorBoundary key="conjdrill" name="conjdrill">
            <ConjugationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'conjlab' && (
          <ScreenErrorBoundary key="conjlab" name="conjlab">
            <ConjugationLab goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'conjpractice' && (
          <ScreenErrorBoundary key="conjpractice" name="conjpractice">
            <ConjugationSessionDrill
              category={
                (typeof _curEx === 'string' && _curEx.startsWith('conjpractice:')
                  ? _curEx.slice('conjpractice:'.length)
                  : 'present-tense') as React.ComponentProps<
                  typeof ConjugationSessionDrill
                >['category']
              }
              cefr={
                getUserCefr(stats.xp || 0, stats.lc || 0, stats.gc || 0) as
                  'A1' | 'A2' | 'B1' | 'B2'
              }
              goBack={goBack}
              award={award}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'znam' && (
          <ScreenErrorBoundary key="znam" name="znam">
            <ZnamGame goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'boje' && (
          <ScreenErrorBoundary key="boje" name="boje">
            <BojeGame goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'match' &&
          (matchInitPool?.length > 0 ? (
            <ScreenErrorBoundary key="match" name="match">
              <MatchGame initPool={matchInitPool} goBack={goBack} award={award} />
            </ScreenErrorBoundary>
          ) : (
            <ScreenGuard goBack={goBack} label="match game" />
          ))}
        {currentScreen === 'wordsprint' && (
          <ScreenErrorBoundary key="wordsprint" name="wordsprint">
            <WordSprint sh={_sh} award={award} goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'speaking' &&
          (sw?.[0] ? (
            <ScreenErrorBoundary key="speaking" name="speaking">
              <SpeakingScreen
                sw={sw}
                si={si}
                sx={sx}
                sr={sr}
                ssc={ssc}
                sSr={sSr}
                sSx={sSx}
                sSw={sSw}
                sSsc={sSsc}
                goBack={goBack}
                award={award}
                setSt={setStats}
              />
            </ScreenErrorBoundary>
          ) : (
            // Without launch-time state (`sw`), SpeakingScreen renders `null` —
            // a blank, back-button-less screen that pins the daily session
            // (nh_session_started stays set, never cleared). ScreenGuard shows a
            // recovery path AND clears the stale session markers, matching the
            // guarded flashcards/mcgame/match/listening routes. This is the ONE
            // parent-launch-state session exercise that previously lacked it.
            <ScreenGuard goBack={goBack} label="speaking practice" />
          ))}
        {currentScreen === 'speaking_sprint' && (
          <ScreenErrorBoundary key="speaking_sprint" name="speaking_sprint">
            <SpeakingSprintScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pitchaccent' && (
          <ScreenErrorBoundary key="pitchaccent" name="pitchaccent">
            <PitchAccentScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'shadowing' && (
          <ScreenErrorBoundary key="shadowing" name="shadowing">
            <ShadowingScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'review' && (
          <ScreenErrorBoundary key="review" name="review">
            <ReviewScreen goBack={goBack} award={award} allCats={allCats} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'writing' && (
          <ScreenErrorBoundary key="writing" name="writing">
            <WritingScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'writing_guided' && (
          <ScreenErrorBoundary key="writing_guided" name="writing_guided">
            <GuidedWritingScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'listeningpath' && (
          <ScreenErrorBoundary key="listeningpath" name="listeningpath">
            <ListeningPath goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'aspectdrill' && (
          <ScreenErrorBoundary key="aspectdrill" name="aspectdrill">
            <AspectDrillScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'translate_drills' && (
          <ScreenErrorBoundary key="translate_drills" name="translate_drills">
            <TranslateDrillsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'clitic' && (
          <ScreenErrorBoundary key="clitic" name="clitic">
            <CliticDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'numcases' && (
          <ScreenErrorBoundary key="numcases" name="numcases">
            <NumbersCasesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'imperative' && (
          <ScreenErrorBoundary key="imperative" name="imperative">
            <ImperativeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'c2drill' && (
          <ScreenErrorBoundary key="c2drill" name="c2drill">
            <C2StructureDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'gerunddrill' && (
          <ScreenErrorBoundary key="gerunddrill" name="gerunddrill">
            <GerundDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'preciznost' && (
          <ScreenErrorBoundary key="preciznost" name="preciznost">
            <PrecisionDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'frazeologija' && (
          <ScreenErrorBoundary key="frazeologija" name="frazeologija">
            <FrazeologijaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'tvorbarijeci' && (
          <ScreenErrorBoundary key="tvorbarijeci" name="tvorbarijeci">
            <TvorbaRijeciDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sinonimija' && (
          <ScreenErrorBoundary key="sinonimija" name="sinonimija">
            <SinonimijaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'povratni' && (
          <ScreenErrorBoundary key="povratni" name="povratni">
            <PovratniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sklonidbaimena' && (
          <ScreenErrorBoundary key="sklonidbaimena" name="sklonidbaimena">
            <SklonidbaImenaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prijedlozni' && (
          <ScreenErrorBoundary key="prijedlozni" name="prijedlozni">
            <PrijedlozniIzraziDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'bezlicne' && (
          <ScreenErrorBoundary key="bezlicne" name="bezlicne">
            <BezlicneDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'neodredjene' && (
          <ScreenErrorBoundary key="neodredjene" name="neodredjene">
            <NeodredjeneDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'slaganjebrojeva' && (
          <ScreenErrorBoundary key="slaganjebrojeva" name="slaganjebrojeva">
            <SlaganjeBrojevaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'posudjenice' && (
          <ScreenErrorBoundary key="posudjenice" name="posudjenice">
            <PosudjeniceDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'glasovnepromjene' && (
          <ScreenErrorBoundary key="glasovnepromjene" name="glasovnepromjene">
            <GlasovnePromjeneDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'administrativni' && (
          <ScreenErrorBoundary key="administrativni" name="administrativni">
            <AdministrativniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'poslovice' && (
          <ScreenErrorBoundary key="poslovice" name="poslovice">
            <PosloviceDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'stilskefigure' && (
          <ScreenErrorBoundary key="stilskefigure" name="stilskefigure">
            <StilskeFigureDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dopisi' && (
          <ScreenErrorBoundary key="dopisi" name="dopisi">
            <DopisiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zelje' && (
          <ScreenErrorBoundary key="zelje" name="zelje">
            <ZeljeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'usporedbe' && (
          <ScreenErrorBoundary key="usporedbe" name="usporedbe">
            <UsporedbeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'priblizno' && (
          <ScreenErrorBoundary key="priblizno" name="priblizno">
            <PribliznoDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'uljudnost' && (
          <ScreenErrorBoundary key="uljudnost" name="uljudnost">
            <UljudnostDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kalkovi' && (
          <ScreenErrorBoundary key="kalkovi" name="kalkovi">
            <KalkoviDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'glagoligovorenja' && (
          <ScreenErrorBoundary key="glagoligovorenja" name="glagoligovorenja">
            <GlagoliGovorenjaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prijedlozigen' && (
          <ScreenErrorBoundary key="prijedlozigen" name="prijedlozigen">
            <PrijedloziGenDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'imenicame' && (
          <ScreenErrorBoundary key="imenicame" name="imenicame">
            <ImeniceMeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pitanja' && (
          <ScreenErrorBoundary key="pitanja" name="pitanja">
            <PitanjaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dvovidni' && (
          <ScreenErrorBoundary key="dvovidni" name="dvovidni">
            <DvovidniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'isklonidba' && (
          <ScreenErrorBoundary key="isklonidba" name="isklonidba">
            <ISklonidbaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vrijemeizraz' && (
          <ScreenErrorBoundary key="vrijemeizraz" name="vrijemeizraz">
            <VrijemeIzrazDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'slojevi' && (
          <ScreenErrorBoundary key="slojevi" name="slojevi">
            <SlojeviDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'parniveznici' && (
          <ScreenErrorBoundary key="parniveznici" name="parniveznici">
            <ParniVezniciDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'eponimi' && (
          <ScreenErrorBoundary key="eponimi" name="eponimi">
            <EponimiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zamjenice' && (
          <ScreenErrorBoundary key="zamjenice" name="zamjenice">
            <ZamjeniceDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'uzrocne' && (
          <ScreenErrorBoundary key="uzrocne" name="uzrocne">
            <UzrocneDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kolicina' && (
          <ScreenErrorBoundary key="kolicina" name="kolicina">
            <KolicinaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dopusne' && (
          <ScreenErrorBoundary key="dopusne" name="dopusne">
            <DopusneDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pluskvamperfekt' && (
          <ScreenErrorBoundary key="pluskvamperfekt" name="pluskvamperfekt">
            <PluskvamperfektDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'savsvaki' && (
          <ScreenErrorBoundary key="savsvaki" name="savsvaki">
            <SavSvakiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'novinski' && (
          <ScreenErrorBoundary key="novinski" name="novinski">
            <NovinskiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prenesena' && (
          <ScreenErrorBoundary key="prenesena" name="prenesena">
            <PrenesenaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'modalnost' && (
          <ScreenErrorBoundary key="modalnost" name="modalnost">
            <ModalnostDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'mnozina' && (
          <ScreenErrorBoundary key="mnozina" name="mnozina">
            <MnozinaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prostorni' && (
          <ScreenErrorBoundary key="prostorni" name="prostorni">
            <ProstorniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'stupnjevanje' && (
          <ScreenErrorBoundary key="stupnjevanje" name="stupnjevanje">
            <StupnjevanjeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'trpni' && (
          <ScreenErrorBoundary key="trpni" name="trpni">
            <TrpniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'infinitivda' && (
          <ScreenErrorBoundary key="infinitivda" name="infinitivda">
            <InfinitivDaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vidskiparovi' && (
          <ScreenErrorBoundary key="vidskiparovi" name="vidskiparovi">
            <VidskiParoviDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'velikoslovo' && (
          <ScreenErrorBoundary key="velikoslovo" name="velikoslovo">
            <VelikoSlovoDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kratice' && (
          <ScreenErrorBoundary key="kratice" name="kratice">
            <KraticeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'lektor' && (
          <ScreenErrorBoundary key="lektor" name="lektor">
            <LektorDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vidimperativ' && (
          <ScreenErrorBoundary key="vidimperativ" name="vidimperativ">
            <VidImperativDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'posvojni' && (
          <ScreenErrorBoundary key="posvojni" name="posvojni">
            <PosvojniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vremenske' && (
          <ScreenErrorBoundary key="vremenske" name="vremenske">
            <VremenskeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sklonidbabrojeva' && (
          <ScreenErrorBoundary key="sklonidbabrojeva" name="sklonidbabrojeva">
            <SklonidbaBrojevaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'namjera' && (
          <ScreenErrorBoundary key="namjera" name="namjera">
            <NamjeraDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'srocnost' && (
          <ScreenErrorBoundary key="srocnost" name="srocnost">
            <SrocnostDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'enklitike' && (
          <ScreenErrorBoundary key="enklitike" name="enklitike">
            <EnklitikeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'akademski' && (
          <ScreenErrorBoundary key="akademski" name="akademski">
            <AkademskiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'interpunkcija' && (
          <ScreenErrorBoundary key="interpunkcija" name="interpunkcija">
            <InterpunkcijaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pravopis' && (
          <ScreenErrorBoundary key="pravopis" name="pravopis">
            <PravopisDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'konektori' && (
          <ScreenErrorBoundary key="konektori" name="konektori">
            <KonektoriDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'razgovorni' && (
          <ScreenErrorBoundary key="razgovorni" name="razgovorni">
            <RazgovorniDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'glagolskiprilozi' && (
          <ScreenErrorBoundary key="glagolskiprilozi" name="glagolskiprilozi">
            <GlagolskiPriloziDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'aoristimperfekt' && (
          <ScreenErrorBoundary key="aoristimperfekt" name="aoristimperfekt">
            <AoristImperfektDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pluraldrill' && (
          <ScreenErrorBoundary key="pluraldrill" name="pluraldrill">
            <PluralDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'negacija' && (
          <ScreenErrorBoundary key="negacija" name="negacija">
            <NegationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pridjevi' && (
          <ScreenErrorBoundary key="pridjevi" name="pridjevi">
            <AdjectivesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pokazne' && (
          <ScreenErrorBoundary key="pokazne" name="pokazne">
            <DemonstrativesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'imatidrill' && (
          <ScreenErrorBoundary key="imatidrill" name="imatidrill">
            <ImatiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'imperativ' && (
          <ScreenErrorBoundary key="imperativ" name="imperativ">
            <ImperativeA1Drill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'upitne' && (
          <ScreenErrorBoundary key="upitne" name="upitne">
            <QuestionsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'mjesto' && (
          <ScreenErrorBoundary key="mjesto" name="mjesto">
            <PlacePrepositionsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vrijemea1' && (
          <ScreenErrorBoundary key="vrijemea1" name="vrijemea1">
            <TimeCalendarDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pozdravi' && (
          <ScreenErrorBoundary key="pozdravi" name="pozdravi">
            <GreetingsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'svojdrill' && (
          <ScreenErrorBoundary key="svojdrill" name="svojdrill">
            <SvojDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'objekt' && (
          <ScreenErrorBoundary key="objekt" name="objekt">
            <ObjectPronounsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'mnozinapadezi' && (
          <ScreenErrorBoundary key="mnozinapadezi" name="mnozinapadezi">
            <PluralCasesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kolicinaa2' && (
          <ScreenErrorBoundary key="kolicinaa2" name="kolicinaa2">
            <QuantityDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'komparacija' && (
          <ScreenErrorBoundary key="komparacija" name="komparacija">
            <ComparisonDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'infda' && (
          <ScreenErrorBoundary key="infda" name="infda">
            <InfinitiveDaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prepricavanje' && (
          <ScreenErrorBoundary key="prepricavanje" name="prepricavanje">
            <ReportedSpeechB1Drill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'bezlicnob1' && (
          <ScreenErrorBoundary key="bezlicnob1" name="bezlicnob1">
            <ImpersonalB1Drill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vrijemeklauze' && (
          <ScreenErrorBoundary key="vrijemeklauze" name="vrijemeklauze">
            <TimeClausesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'uzrokb1' && (
          <ScreenErrorBoundary key="uzrokb1" name="uzrokb1">
            <CausePurposeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'isklonidbab2' && (
          <ScreenErrorBoundary key="isklonidbab2" name="isklonidbab2">
            <IDeclensionDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prilozib2' && (
          <ScreenErrorBoundary key="prilozib2" name="prilozib2">
            <VerbalAdverbsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'negacijab2' && (
          <ScreenErrorBoundary key="negacijab2" name="negacijab2">
            <NegationAdvancedDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vidglagoli' && (
          <ScreenErrorBoundary key="vidglagoli" name="vidglagoli">
            <AspectVerbsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'intenzitet' && (
          <ScreenErrorBoundary key="intenzitet" name="intenzitet">
            <IntensityDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'usporedbec1' && (
          <ScreenErrorBoundary key="usporedbec1" name="usporedbec1">
            <AdvancedComparisonDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'tvorbac1' && (
          <ScreenErrorBoundary key="tvorbac1" name="tvorbac1">
            <WordFormationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'deminutivi' && (
          <ScreenErrorBoundary key="deminutivi" name="deminutivi">
            <DiminutivesC1Drill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sazimanje' && (
          <ScreenErrorBoundary key="sazimanje" name="sazimanje">
            <SummarisingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'obitelj' && (
          <ScreenErrorBoundary key="obitelj" name="obitelj">
            <FamilyDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zemlje' && (
          <ScreenErrorBoundary key="zemlje" name="zemlje">
            <CountriesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'hrana' && (
          <ScreenErrorBoundary key="hrana" name="hrana">
            <FoodDrinkDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grad' && (
          <ScreenErrorBoundary key="grad" name="grad">
            <DirectionsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'meteo' && (
          <ScreenErrorBoundary key="meteo" name="meteo">
            <WeatherDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'svidjanje' && (
          <ScreenErrorBoundary key="svidjanje" name="svidjanje">
            <PreferencesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dom' && (
          <ScreenErrorBoundary key="dom" name="dom">
            <HomeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zdravlje' && (
          <ScreenErrorBoundary key="zdravlje" name="zdravlje">
            <HealthDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'odjeca' && (
          <ScreenErrorBoundary key="odjeca" name="odjeca">
            <ClothingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'izgled' && (
          <ScreenErrorBoundary key="izgled" name="izgled">
            <AppearanceDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zanimanja' && (
          <ScreenErrorBoundary key="zanimanja" name="zanimanja">
            <JobsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'skola' && (
          <ScreenErrorBoundary key="skola" name="skola">
            <EducationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'hobiji' && (
          <ScreenErrorBoundary key="hobiji" name="hobiji">
            <HobbiesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'putovanje' && (
          <ScreenErrorBoundary key="putovanje" name="putovanje">
            <TravelDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dogovor' && (
          <ScreenErrorBoundary key="dogovor" name="dogovor">
            <InvitationsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'blagdani' && (
          <ScreenErrorBoundary key="blagdani" name="blagdani">
            <CelebrationsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'misljenje' && (
          <ScreenErrorBoundary key="misljenje" name="misljenje">
            <OpinionsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'osjecaji' && (
          <ScreenErrorBoundary key="osjecaji" name="osjecaji">
            <FeelingsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zalbe' && (
          <ScreenErrorBoundary key="zalbe" name="zalbe">
            <ComplaintsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'salter' && (
          <ScreenErrorBoundary key="salter" name="salter">
            <BureaucracyDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'najam' && (
          <ScreenErrorBoundary key="najam" name="najam">
            <RentingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'zivotopis' && (
          <ScreenErrorBoundary key="zivotopis" name="zivotopis">
            <JobSearchDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'mediji' && (
          <ScreenErrorBoundary key="mediji" name="mediji">
            <NewsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'tehnologija' && (
          <ScreenErrorBoundary key="tehnologija" name="tehnologija">
            <TechnologyDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'priroda' && (
          <ScreenErrorBoundary key="priroda" name="priroda">
            <NatureDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kuhanje' && (
          <ScreenErrorBoundary key="kuhanje" name="kuhanje">
            <CookingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'argumentacija' && (
          <ScreenErrorBoundary key="argumentacija" name="argumentacija">
            <ArgumentDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'ograde' && (
          <ScreenErrorBoundary key="ograde" name="ograde">
            <HedgingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'apstraktno' && (
          <ScreenErrorBoundary key="apstraktno" name="apstraktno">
            <AbstractDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'registri' && (
          <ScreenErrorBoundary key="registri" name="registri">
            <RegistersDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'izlaganje' && (
          <ScreenErrorBoundary key="izlaganje" name="izlaganje">
            <PresentingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'sastanci' && (
          <ScreenErrorBoundary key="sastanci" name="sastanci">
            <MeetingsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'poslovno' && (
          <ScreenErrorBoundary key="poslovno" name="poslovno">
            <BusinessDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'politika' && (
          <ScreenErrorBoundary key="politika" name="politika">
            <PoliticsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'caskanje' && (
          <ScreenErrorBoundary key="caskanje" name="caskanje">
            <SmalltalkDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'humor' && (
          <ScreenErrorBoundary key="humor" name="humor">
            <HumourDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'povijestjezika' && (
          <ScreenErrorBoundary key="povijestjezika" name="povijestjezika">
            <LanguageHistoryDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'knjizevnost' && (
          <ScreenErrorBoundary key="knjizevnost" name="knjizevnost">
            <LiteratureDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'cestice' && (
          <ScreenErrorBoundary key="cestice" name="cestice">
            <ParticlesDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'debata' && (
          <ScreenErrorBoundary key="debata" name="debata">
            <DebateDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'govor' && (
          <ScreenErrorBoundary key="govor" name="govor">
            <FormalSpeechDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'prevodjenje' && (
          <ScreenErrorBoundary key="prevodjenje" name="prevodjenje">
            <TranslationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'lektura' && (
          <ScreenErrorBoundary key="lektura" name="lektura">
            <ProofreadingDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'analizamedija' && (
          <ScreenErrorBoundary key="analizamedija" name="analizamedija">
            <MediaAnalysisDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pravo' && (
          <ScreenErrorBoundary key="pravo" name="pravo">
            <LegalDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'znanost' && (
          <ScreenErrorBoundary key="znanost" name="znanost">
            <ScienceDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'umjetnost' && (
          <ScreenErrorBoundary key="umjetnost" name="umjetnost">
            <ArtsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'regionalizmi' && (
          <ScreenErrorBoundary key="regionalizmi" name="regionalizmi">
            <RegionalDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'identitet' && (
          <ScreenErrorBoundary key="identitet" name="identitet">
            <IdentityDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dijaspora' && (
          <ScreenErrorBoundary key="dijaspora" name="dijaspora">
            <DiasporaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'rekcija' && (
          <ScreenErrorBoundary key="rekcija" name="rekcija">
            <RekcijaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pogodbene' && (
          <ScreenErrorBoundary key="pogodbene" name="pogodbene">
            <PogodbeneDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'odredjenost' && (
          <ScreenErrorBoundary key="odredjenost" name="odredjenost">
            <OdredjenostDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'datumi' && (
          <ScreenErrorBoundary key="datumi" name="datumi">
            <DatumiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kolokacije' && (
          <ScreenErrorBoundary key="kolokacije" name="kolokacije">
            <KolokacijeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'emfaza' && (
          <ScreenErrorBoundary key="emfaza" name="emfaza">
            <EmfazaDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vidnijanse' && (
          <ScreenErrorBoundary key="vidnijanse" name="vidnijanse">
            <VidNijanseDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'futur2' && (
          <ScreenErrorBoundary key="futur2" name="futur2">
            <FuturDrugiDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'neizravni' && (
          <ScreenErrorBoundary key="neizravni" name="neizravni">
            <ReportedSpeechDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kretanje' && (
          <ScreenErrorBoundary key="kretanje" name="kretanje">
            <MotionVerbsDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'neggen' && (
          <ScreenErrorBoundary key="neggen" name="neggen">
            <NegationGenDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'animateacc' && (
          <ScreenErrorBoundary key="animateacc" name="animateacc">
            <AnimateAccDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'passive' && (
          <ScreenErrorBoundary key="passive" name="passive">
            <PassiveDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'instrumental' && (
          <ScreenErrorBoundary key="instrumental" name="instrumental">
            <InstrumentalDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dative' && (
          <ScreenErrorBoundary key="dative" name="dative">
            <DativeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'nomdrill' && (
          <ScreenErrorBoundary key="nomdrill" name="nomdrill">
            <NominativeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'presentdrill' && (
          <ScreenErrorBoundary key="presentdrill" name="presentdrill">
            <PresentTenseDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'wordorderdrill' && (
          <ScreenErrorBoundary key="wordorderdrill" name="wordorderdrill">
            <WordOrderDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'genitivedrill' && (
          <ScreenErrorBoundary key="genitivedrill" name="genitivedrill">
            <GenitiveDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'locdrill' && (
          <ScreenErrorBoundary key="locdrill" name="locdrill">
            <LocativeDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'fleetinga' && (
          <ScreenErrorBoundary key="fleetinga" name="fleetinga">
            <FleetingADrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'participles' && (
          <ScreenErrorBoundary key="participles" name="participles">
            <ParticipleDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'subordination' && (
          <ScreenErrorBoundary key="subordination" name="subordination">
            <SubordinationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'conditionaldrill' && (
          <ScreenErrorBoundary key="conditionaldrill" name="conditionaldrill">
            <ConditionalDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'idiomdrill' && (
          <ScreenErrorBoundary key="idiomdrill" name="idiomdrill">
            <IdiomDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'discourse' && (
          <ScreenErrorBoundary key="discourse" name="discourse">
            <DiscourseDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'register' && (
          <ScreenErrorBoundary key="register" name="register">
            <RegisterDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'nominalization' && (
          <ScreenErrorBoundary key="nominalization" name="nominalization">
            <NominalizationDrill goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'collocations' && (
          <ScreenErrorBoundary key="collocations" name="collocations">
            <CollocationsGame goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'wordfamilies' && (
          <ScreenErrorBoundary key="wordfamilies" name="wordfamilies">
            <WordFamilies goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dictation' && (
          <ScreenErrorBoundary key="dictation" name="dictation">
            <DictationScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'proncontrast' && (
          <ScreenErrorBoundary key="proncontrast" name="proncontrast">
            <PronunciationContrast goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dialogue' && (
          <ScreenErrorBoundary key="dialogue" name="dialogue">
            <DialogueSim goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'cefrtest' && (
          <ScreenErrorBoundary key="cefrtest" name="cefrtest">
            <CefrTest goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'slang' && (
          <ScreenErrorBoundary key="slang" name="slang">
            <SlangScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'baka_summer' && (
          <ScreenErrorBoundary key="baka_summer" name="baka_summer">
            <BakaSummer goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'croatia_today' && (
          <ScreenErrorBoundary key="croatia_today" name="croatia_today">
            <CroatiaToday goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'survival_dinner' && (
          <ScreenErrorBoundary key="survival_dinner" name="survival_dinner">
            <SurvivalDinner goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'kafic' && (
          <ScreenErrorBoundary key="kafic" name="kafic">
            <KaficScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'diaspora' && (
          <ScreenErrorBoundary key="diaspora" name="diaspora">
            <DiasporaNote goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'tivicompare' && (
          <ScreenErrorBoundary key="tivicompare" name="tivicompare">
            <TiViScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'lifeevents' && (
          <ScreenErrorBoundary key="lifeevents" name="lifeevents">
            <LifeEventsScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'civic' && (
          <ScreenErrorBoundary key="civic" name="civic">
            <CivicScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'easter' && (
          <ScreenErrorBoundary key="easter" name="easter">
            <EasterScreen onBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'postcard' && (
          <ScreenErrorBoundary key="postcard" name="postcard">
            <PostcardScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'storymode' && (
          <ScreenErrorBoundary key="storymode" name="storymode">
            <StoryModeScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'personas' && (
          <ScreenErrorBoundary key="personas" name="personas">
            <PersonaScreen goBack={goBack} setScr={setScr} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'maja' && (
          <ScreenErrorBoundary key="maja" name="maja">
            <MajaScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'live_tutor' && (
          <ScreenErrorBoundary key="live_tutor" name="live_tutor">
            <LiveTutorScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'photo_vocab' && (
          <ScreenErrorBoundary key="photo_vocab" name="photo_vocab">
            <PhotoVocabScanner
              goBack={goBack}
              level={level}
              onSaveWords={(words: Array<{ word: string; translation: string }>) => {
                // Scanner words are { word: <hr>, translation: <en> } (VocabWord).
                // The old { hr, en } reads were always undefined, so every save
                // silently dropped — the lazy import erases prop types, which is
                // why the mismatch never failed typecheck.
                words.forEach((w: { word: string; translation: string }) => {
                  if (w.word && w.translation) {
                    setJWords((prev: Array<{ hr: string; en: string }> | null) => [
                      ...(prev || []),
                      { hr: w.word, en: w.translation },
                    ]);
                    addWordToSRS(w.word);
                  }
                });
              }}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'ai_listening' && (
          <ScreenErrorBoundary key="ai_listening" name="ai_listening">
            <AIListeningScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'ai_story' && (
          <ScreenErrorBoundary key="ai_story" name="ai_story">
            <AIStoryScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'video_lesson' && (
          <ScreenErrorBoundary key="video_lesson" name="video_lesson">
            <VideoLessonScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grammar_diagnosis' && (
          <ScreenErrorBoundary key="grammar_diagnosis" name="grammar_diagnosis">
            <GrammarDiagnosisScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'micro_lesson' && (
          <ScreenErrorBoundary key="micro_lesson" name="micro_lesson">
            <MicroLessonScreen
              goBack={goBack}
              award={award}
              goFlashcards={() => {
                setTab('practice');
                setScr('dashboard');
              }}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'heritage' && (
          <ScreenErrorBoundary key="heritage" name="heritage">
            <HeritageStoryScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'croatianews' && (
          <ScreenErrorBoundary key="croatianews" name="croatianews">
            <CroatianNewsScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'phraseofday' && (
          <ScreenErrorBoundary key="phraseofday" name="phraseofday">
            <PhraseOfDayScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'cloze' && (
          <ScreenErrorBoundary key="cloze" name="cloze">
            <ClozeEngine goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'graded_input' && (
          <ScreenErrorBoundary key="graded_input" name="graded_input">
            <GradedInputScreen
              goBack={() => {
                setPendingStoryId(null);
                goBack();
              }}
              award={award}
              initialStoryId={pendingStoryId ?? undefined}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pronunciation_course' && (
          <ScreenErrorBoundary key="pronunciation_course" name="pronunciation_course">
            <PronunciationCourse goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'past_tense_lesson' && (
          <ScreenErrorBoundary key="past_tense_lesson" name="past_tense_lesson">
            <PastTenseLessonScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'future_tense_lesson' && (
          <ScreenErrorBoundary key="future_tense_lesson" name="future_tense_lesson">
            <FutureTenseLessonScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'advanced_vocab' && (
          <ScreenErrorBoundary key="advanced_vocab" name="advanced_vocab">
            <AdvancedVocabScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pronunciation_assess' && (
          <ScreenErrorBoundary key="pronunciation_assess" name="pronunciation_assess">
            <PronunciationAssessScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'production_drill' && (
          <ScreenErrorBoundary key="production_drill" name="production_drill">
            <ProductionDrillScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'adaptive_review' && (
          <ScreenErrorBoundary key="adaptive_review" name="adaptive_review">
            <AdaptiveReviewScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'pitch_accent' && (
          <ScreenErrorBoundary key="pitch_accent" name="pitch_accent">
            <PitchAccentMastery goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'vocative' && (
          <ScreenErrorBoundary key="vocative" name="vocative">
            <VocativeScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'heritage_path' && (
          <ScreenErrorBoundary key="heritage_path" name="heritage_path">
            <HeritagePathScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'dialect_awareness' && (
          <ScreenErrorBoundary key="dialect_awareness" name="dialect_awareness">
            <DialectAwarenessScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'heritage_mode' && (
          <ScreenErrorBoundary key="heritage_mode" name="heritage_mode">
            <HeritageModeScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'phoneme_practice' && (
          <ScreenErrorBoundary key="phoneme_practice" name="phoneme_practice">
            <PhonemePracticeScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'frequency_track' && (
          <ScreenErrorBoundary key="frequency_track" name="frequency_track">
            <FrequencyTrackScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'practical_croatian' && (
          <ScreenErrorBoundary key="practical_croatian" name="practical_croatian">
            <PracticalCroatianScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grammarmap' && (
          <ScreenErrorBoundary key="grammarmap" name="grammarmap">
            <GrammarConstellation goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grammar_track' && (
          <ScreenErrorBoundary key="grammar_track" name="grammar_track">
            <GrammarTrackScreen
              goBack={goBack}
              launchGrammarUnit={(unitId: string) => {
                setPendingGrammarUnitId(unitId);
                setScr('grammar_unit_detail');
              }}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'grammar_unit_detail' && pendingGrammarUnitId && (
          <ScreenErrorBoundary key="grammar_unit_detail" name="grammar_unit_detail">
            <GrammarUnitDetail
              unitId={pendingGrammarUnitId}
              goBack={() => {
                setPendingGrammarUnitId(null);
                goBack();
              }}
            />
          </ScreenErrorBoundary>
        )}
        {
          // Reload / shared-link on /grammar_unit_detail loses `pendingGrammarUnitId`;
          // without this the screen rendered fully blank (it's also not in `stm`,
          // so the tab defaults to home) with no way back.
          currentScreen === 'grammar_unit_detail' && !pendingGrammarUnitId && (
            <ScreenGuard goBack={goBack} label="grammar unit" />
          )
        }
        {currentScreen === 'listening_comprehension' && (
          <ScreenErrorBoundary key="listening_comprehension" name="listening_comprehension">
            <ListeningComprehensionScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'my_words' && (
          <ScreenErrorBoundary key="my_words" name="my_words">
            <MyWordsScreen
              onBack={goBack}
              award={typeof award === 'function' ? award : undefined}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'mistakes' && (
          <ScreenErrorBoundary key="mistakes" name="mistakes">
            <MistakesScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'analytics' && (
          <ScreenErrorBoundary key="analytics" name="analytics">
            <AnalyticsScreen goBack={goBack} stats={stats} name={name} />
          </ScreenErrorBoundary>
        )}
        {
          // ═══ GRAMMAR REFERENCE ═══
          currentScreen === 'grammar-ref' && (
            <ScreenErrorBoundary key="grammar-ref" name="grammar-ref">
              <GrammarReference onClose={() => setScr('dashboard')} />
            </ScreenErrorBoundary>
          )
        }
        {
          // ═══ NEW PLACEMENT TEST (first-time users) ═══
          currentScreen === 'new-placement' && (
            <ScreenErrorBoundary key="new-placement" name="new-placement">
              <PlacementTest
                onComplete={async function (level: number) {
                  lsSet('placement_done', '1');
                  // ALSO flag user as onboarded so Firebase sync persists this
                  // across devices. buildProgressSnapshot reads `onboarded` and
                  // `nh_placement_done` from localStorage and writes them into
                  // the Firebase profile; applyRemoteProgress on a new device
                  // sets localStorage from those fields, which short-circuits
                  // the App.tsx:1303 placement-trigger check. Without these two
                  // writes, a user who completed placement on device A would be
                  // re-prompted on device B until Firebase MERGE_REMOTE happened
                  // to land xp > 0 before the 1200ms placement timer fired.
                  lsSet('nh_placement_done', 'true');
                  lsSet('onboarded', 'true');
                  // getPlacementCt is async — must be awaited. Assigning the raw
                  // Promise corrupted stats.ct (breaking spreads + the sync
                  // arrayUnion filter) and made lc = Math.max(prev.lc, undefined)
                  // = NaN. Resolve once; fall back to no pre-credit if offline.
                  let ct: string[] = [];
                  try {
                    ct = await getPlacementCt(level);
                  } catch {
                    ct = [];
                  }
                  setStats(function (prev) {
                    return {
                      ...prev,
                      ct,
                      lc: Math.max(prev.lc, ct.length),
                    };
                  });
                  if (typeof award === 'function') award(25);
                  setShowFirstWords(true);
                  setTimeout(() => setTab('learn'), 300);
                }}
                onCancel={function () {
                  setScr('dashboard');
                }}
              />
            </ScreenErrorBoundary>
          )
        }
        {
          // ═══ VOCABULARY LESSON ═══
          currentScreen === 'lesson' && lt && (
            <ScreenErrorBoundary key="lesson" name="lesson">
              <LessonScreen
                lt={lt}
                li={li}
                lx={lx}
                ls={ls}
                lp={lp}
                la={la}
                lsl={lsl}
                qi={qi}
                icons={icons}
                sLi={sLi}
                sLx={sLx}
                sLs={sLs}
                sLp={sLp}
                sLa={sLa}
                sLsl={sLsl}
                sQi={sQi}
                goBack={goBack}
                award={award}
                setSt={setStats}
                setScr={setScr}
                goToPractice={() => {
                  goBack();
                  setTimeout(() => setTab('practice'), 50);
                }}
              />
            </ScreenErrorBoundary>
          )
        }
        {
          // Reload / shared-link on /lesson loses `lt` (lessonTopic React state);
          // without this guard LessonScreen rendered blank ("Lesson · Question of ?")
          // with no way back. Mirrors the grammar_unit_detail reload guard above.
          currentScreen === 'lesson' && !lt && <ScreenGuard goBack={goBack} label="lesson" />
        }
        {
          // ═══ GRAMMAR ═══
          currentScreen === 'grammar' && gl && (
            <ScreenErrorBoundary key="grammar" name="grammar">
              <GrammarScreen
                gl={gl}
                gp={gp}
                gx={gx}
                gs={gs}
                ga={ga}
                gsl={gsl}
                sGp={sGp}
                sGx={sGx}
                sGs={sGs}
                sGa={sGa}
                sGsl={sGsl}
                goBack={goBack}
                award={award}
                setSt={setStats}
              />
            </ScreenErrorBoundary>
          )
        }
        {
          // Reload on /grammar loses `gl` (grammarLesson React state → null); guard
          // the otherwise-blank GrammarScreen with a clear path back, as above.
          currentScreen === 'grammar' && !gl && (
            <ScreenGuard goBack={goBack} label="grammar lesson" />
          )
        }
        {currentScreen === 'alphabet' && (
          <ScreenErrorBoundary key="alphabet" name="alphabet">
            <AlphabetScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {
          // ═══ READING LIST ═══
          currentScreen === 'readlist' && (
            <ScreenErrorBoundary key="readlist" name="readlist">
              <ReadingList
                setScr={setScr}
                sRp={sRp}
                sRph={sRph}
                sRqi={sRqi}
                sRsc={sRsc}
                sRa={sRa}
                sRsl={sRsl}
                sHw={sHw}
                sCurEx={sCurEx}
                goBack={goBack}
              />
            </ScreenErrorBoundary>
          )
        }
        {
          // ═══ READING ═══
          currentScreen === 'reading' && (
            <ScreenErrorBoundary key="reading" name="reading">
              <ReadingScreen
                rp={rp}
                rph={rph}
                rqi={rqi}
                rsc={rsc}
                ra={ra}
                rsl={rsl}
                hw={hw}
                sRph={sRph}
                sRqi={sRqi}
                sRsc={sRsc}
                sRa={sRa}
                sRsl={sRsl}
                sHw={sHw}
                goBack={goBack}
                setScr={setScr}
                award={award}
                setSt={setStats}
              />
            </ScreenErrorBoundary>
          )
        }
        {currentScreen === 'badges' && (
          <ScreenErrorBoundary key="badges" name="badges">
            <BadgesScreen badges={stats.badges} stats={stats} goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {
          // ═══ PROFILE ═══
          currentScreen === 'profile' && (
            <ScreenErrorBoundary key="profile" name="profile">
              <ProfileScreen
                name={name}
                level={level}
                st={stats}
                authUser={authUser}
                goBack={goBack}
                doOut={doOut}
                setScr={setScr}
              />
            </ScreenErrorBoundary>
          )
        }
        {currentScreen === 'certificate' && (
          <ScreenErrorBoundary key="certificate" name="certificate">
            <CertificateScreen name={name} level={level} st={stats} goBack={goBack} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'arcade' && (
          <ScreenErrorBoundary key="arcade" name="arcade">
            <ArcadeHub
              goBack={goBack}
              onLaunch={(modeId: string) => {
                // Set curEx to the mode id so award() keys its once-per-day XP
                // cooldown on the game itself — not a stale exercise id, which
                // would drop the ride's XP or poison another exercise's cooldown.
                sCurEx(modeId);
                setScr(modeId);
              }}
            />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'alka' && (
          <ScreenErrorBoundary key="alka" name="alka">
            <AlkaScreen goBack={goBack} award={award} />
          </ScreenErrorBoundary>
        )}
        {currentScreen === 'map' && (
          <ScreenErrorBoundary key="map" name="map">
            <MapScreen goBack={goBack} />
          </ScreenErrorBoundary>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
