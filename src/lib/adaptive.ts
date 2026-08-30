/**
 * Adaptive learning — per-topic accuracy tracking + path adjustment.
 *
 * localStorage key 'topic_accuracy': { [topicId]: { attempts, correct, lastAttempt } }
 *
 * Exports:
 *   recordTopicResult(topicId, correct)     — record a right/wrong answer
 *   getTopicAccuracy(topicId)               — { accuracy, attempts } or null
 *   getWeakTopics(threshold)                — topics below threshold, sorted worst-first
 *   getRecommendedLesson(cefrLevel)         — lesson ID to prioritize next, based on gaps
 *   getDifficultyRecommendation()           — 'beginner'|'intermediate'|'advanced'
 *   shouldTriggerRemedial(topicId)          — true when accuracy is critically low (≥5 attempts, <50%)
 *   getPersonalizedPath(cefrLevel, stats)   — ordered array of {id, reason} lesson recommendations
 */

const KEY = 'topic_accuracy';
// Topic data older than 30 days is considered stale and resets on next attempt.
// This prevents old struggles from permanently marking a topic as "weak" after
// the learner has had a long break and potentially improved through other means.
const STALE_MS = 30 * 24 * 60 * 60 * 1000;

interface TopicData {
  attempts: number;
  correct: number;
  lastAttempt: number;
}

interface TopicMap {
  [topicId: string]: TopicData;
}

function _load(): TopicMap {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

function _save(data: TopicMap): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

// ─── Core tracking ──────────────────────────────────────────────────────────

export function recordTopicResult(topicId: string, correct: boolean): void {
  const data = _load();
  const curr = data[topicId] || { attempts: 0, correct: 0, lastAttempt: 0 };
  // If last attempt was >30 days ago, start a fresh window so historical
  // struggles don't permanently haunt the adaptive panel.
  const isStale = curr.lastAttempt > 0 && Date.now() - curr.lastAttempt > STALE_MS;
  const base = isStale ? { attempts: 0, correct: 0 } : curr;
  data[topicId] = {
    attempts: base.attempts + 1,
    correct: base.correct + (correct ? 1 : 0),
    lastAttempt: Date.now(),
  };
  _save(data);
}

export function getTopicAccuracy(topicId: string): { accuracy: number; attempts: number } | null {
  const data = _load();
  const t = data[topicId];
  if (!t || t.attempts === 0) return null;
  return { accuracy: Math.round((t.correct / t.attempts) * 100), attempts: t.attempts };
}

export function getWeakTopics(
  threshold = 60,
): Array<{ id: string; accuracy: number; attempts: number }> {
  const data = _load();
  const now = Date.now();
  return Object.entries(data)
    .filter(
      ([, v]) =>
        v.attempts >= 3 &&
        (v.correct / v.attempts) * 100 < threshold &&
        now - v.lastAttempt < STALE_MS, // only surface recent data
    )
    .map(([id, v]) => ({
      id,
      accuracy: Math.round((v.correct / v.attempts) * 100),
      attempts: v.attempts,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

// ─── Path adjustment ─────────────────────────────────────────────────────────

/**
 * Returns the recommended next animated lesson ID based on what the learner
 * has attempted and where their gaps are. Falls back to a level-appropriate default.
 */
export function getRecommendedLesson(cefrLevel: string): string {
  const weak = getWeakTopics(65);

  // Map topic IDs to animated lesson IDs
  const TOPIC_TO_LESSON: Record<string, string> = {
    grammar: 'past-tense',
    past: 'past-tense',
    tenses: 'past-tense',
    future: 'future-tense',
    formal: 'vi-vs-ti',
    alphabet: 'alphabet',
  };

  for (const { id } of weak) {
    for (const [topic, lesson] of Object.entries(TOPIC_TO_LESSON)) {
      if (id.toLowerCase().includes(topic)) return lesson;
    }
  }

  const LEVEL_DEFAULT: Record<string, string> = {
    A1: 'alphabet',
    A2: 'past-tense',
    B1: 'future-tense',
    B2: 'future-tense',
    C1: 'vi-vs-ti',
  };
  return LEVEL_DEFAULT[cefrLevel] || 'past-tense';
}

/**
 * Returns recommended exercise difficulty based on rolling accuracy across all topics.
 */
export function getDifficultyRecommendation(): 'beginner' | 'intermediate' | 'advanced' {
  const data = _load();
  const entries = Object.values(data);
  if (entries.length < 5) return 'beginner';

  const avg =
    entries.reduce((sum, v) => {
      return sum + (v.attempts > 0 ? v.correct / v.attempts : 0);
    }, 0) / entries.length;

  const avgPct = avg * 100;
  if (avgPct >= 78) return 'advanced';
  if (avgPct >= 58) return 'intermediate';
  return 'beginner';
}

/**
 * Returns true if a topic needs urgent remedial review.
 */
export function shouldTriggerRemedial(topicId: string): boolean {
  const data = _load();
  const t = data[topicId];
  if (!t || t.attempts < 5) return false;
  return t.correct / t.attempts < 0.5;
}

interface PathItem {
  id: string;
  label: string;
  reason: string;
  urgent: boolean;
}

/**
 * Returns a prioritized, personalized learning path.
 */
export function getPersonalizedPath(cefrLevel: string, stats?: { diff?: string }): PathItem[] {
  const weak = getWeakTopics(65);
  const critical = getWeakTopics(50);

  const path: PathItem[] = [];

  for (const { id, accuracy } of critical) {
    path.push({
      id,
      label: id.charAt(0).toUpperCase() + id.slice(1),
      reason: `Accuracy ${accuracy}% — needs urgent review`,
      urgent: true,
    });
  }

  for (const { id, accuracy } of weak.filter((w) => !critical.find((c) => c.id === w.id))) {
    path.push({
      id,
      label: id.charAt(0).toUpperCase() + id.slice(1),
      reason: `Accuracy ${accuracy}% — practice recommended`,
      urgent: false,
    });
  }

  if (path.length === 0) {
    const NEXT: Record<string, PathItem[]> = {
      A1: [
        {
          id: 'grammar',
          label: 'Basic Grammar',
          reason: 'Next step for A1 learners',
          urgent: false,
        },
      ],
      A2: [{ id: 'past-tense', label: 'Past Tense', reason: 'Core A2 milestone', urgent: false }],
      B1: [
        { id: 'future-tense', label: 'Future Tense', reason: 'Core B1 milestone', urgent: false },
        {
          id: 'aspect',
          label: 'Verb Aspect',
          reason: 'Imperfective vs perfective — key B1 concept',
          urgent: false,
        },
      ],
      B2: [
        {
          id: 'conditionals',
          label: 'Conditional',
          reason: 'If-then structures — B2 requirement',
          urgent: false,
        },
        {
          id: 'formal-register',
          label: 'Formal Register',
          reason: 'Professional Croatian — B2 skill',
          urgent: false,
        },
      ],
      C1: [
        {
          id: 'phonology',
          label: 'Phonology & Pitch',
          reason: 'C1 precision — tonal accuracy',
          urgent: false,
        },
      ],
    };
    return NEXT[cefrLevel] ?? NEXT['B1'] ?? [];
  }

  return path;
}

// ─── Skill categories ─────────────────────────────────────────────────────────

export type SkillCategory =
  | 'genitive'
  | 'accusative'
  | 'dative-locative'
  | 'instrumental'
  | 'vocative'
  | 'nominative'
  | 'word-order'
  | 'passive'
  | 'numerals'
  | 'participle'
  | 'subordination'
  | 'idioms'
  | 'discourse'
  | 'register'
  | 'nominalization'
  | 'listening'
  | 'present-tense'
  | 'past-tense'
  | 'future-tense'
  | 'aspect-imperfective'
  | 'aspect-perfective'
  | 'aspect-negation'
  | 'conditional'
  | 'clitics'
  | 'vocab-a2'
  | 'vocab-b1'
  | 'vocab-b2'
  | 'speaking'
  // Promoted to a schedulable category (production-teaching, 2026-08-18):
  // written production was structurally unschedulable before — both writing
  // screens were tagged 'speaking' and no adaptive route existed, so a weak
  // writing result had no path back into practice. CATEGORY_SCREEN_MAP routes
  // it to the guided-writing teaching screen (A1+, one /api/correct call on
  // the learner's explicit submit).
  | 'writing'
  // Pool-only tag (Wave 3): reading-comprehension activities (graded reader,
  // AI story). Not an adaptive-tracker topic — used for session-pool
  // classification and the content-coverage matrix only.
  | 'reading'
  // Pool-only tag (Wave 5): the rotating animated-lesson slot (45-lesson
  // catalog, topic varies per serve). Same pool-only status as 'reading'.
  | 'grammar-lesson'
  // Pool-only tag (2026-08-28, owner decision): WHICH CASE A VERB DEMANDS —
  // bojati se + genitive, radovati se + dative, baviti se + instrumental.
  // `RekcijaDrill` teaches exactly this and was tagged 'dative-locative',
  // which routed it to the LOCATIVE drill and made the C1 verb-government
  // lesson unmappable: the coupling would have resolved to the wrong
  // exercise. Retagging is the fix, and it is deliberately pool-only — see
  // the note below — so the adaptive picker is unaffected.
  | 'verb-government'
  // Pool-only tag (2026-08-28, owner decision): NOUN GENDER. `genderdrill` is
  // an A1 drill that was tagged 'vocab-a2', a category routed to `znam` (A2) —
  // so the A1 `gender` lesson's coupling resolved to a screen its own learners
  // could not open. The alternative fix, an easier route for 'vocab-a2', would
  // have changed what the adaptive picker serves every A1 learner; this one is
  // pool-only, so it does not.
  | 'gender'
  // Pool-only tag (practice programme wave 1, 2026-08-29): PLURAL FORMATION.
  // The A1 `plural-nouns` lesson had no drill at any level — the app taught the
  // commonest noun operation in the language and never asked for it once.
  | 'plural'
  // Pool-only tags (practice programme, A1 tranche 2, 2026-08-29). Each was
  // authored for a specific A1 lesson that had no drill anywhere. None is in
  // ALL_CATEGORIES, so the adaptive picker is untouched.
  | 'negation'
  | 'adjectives'
  | 'demonstratives'
  | 'having'
  | 'imperative'
  // Retagged existing A1 drill (`possess`) — see sessionPools.
  | 'possessives'
  // Pool-only tags (practice programme, A1 tranche 3, 2026-08-29). Same rule
  // again: each was authored for one A1 lesson that led nowhere, and none is in
  // ALL_CATEGORIES. `time` deliberately does not reuse 'numerals', which routes
  // to the C1 dates drill — telling the time at A1 and declining ordinals at C1
  // are not the same practice.
  | 'questions'
  | 'place-prepositions'
  | 'time'
  | 'greetings'
  // Pool-only tags (practice programme, A2 tranche 1, 2026-08-29). `clitics` is
  // deliberately NOT among them: the A2 object-pronoun drill is wired as
  // CATEGORY_EASIER_SCREEN.clitics instead, because clitics is a real
  // ALL_CATEGORIES member whose only drill was B2-gated.
  | 'reflexive-possessive'
  | 'plural-cases'
  | 'quantity'
  | 'comparison'
  // Pool-only tags (practice programme, B1 tranche 1, 2026-08-29). Every one of
  // these lessons had an existing drill at B2/C1 that ALSO carried a category
  // already routed elsewhere — three of them share `subordination`, whose easier
  // route is `relpron`. Reusing those categories would have sent three different
  // B1 lessons to the same drill, and one of them to relative pronouns.
  | 'infinitive-da'
  | 'reported-speech'
  | 'impersonal'
  | 'time-clauses'
  | 'cause-purpose'
  // Pool-only tags (practice programme, C2 tranche 1, 2026-08-29). C2's gap was
  // neither missing drills nor CEFR gating — it was CATEGORY OVERLOADING. The
  // C-level pool has sixteen entries tagged `register` alone, and a category
  // routes to exactly ONE screen, so fifteen of them were unreachable through
  // the coupling and any lesson mapped to `register` got the generic C1 drill
  // instead of the specific one. Each of these splits one excellent existing
  // drill out under its own tag. No new content; see practiceDrillEntries.
  | 'orthography'
  | 'punctuation'
  | 'admin-style'
  | 'academic-style'
  | 'journalistic-style'
  | 'figures-of-speech'
  | 'editing'
  | 'precision'
  // Pool-only tags (practice programme, B2 tranche 1, 2026-08-29). A FOURTH
  // pattern: at B2 the drill that matched usually sat at C1/C2 — ABOVE the
  // lesson — and CATEGORY_EASIER_SCREEN only routes downward, so unlike A2/B1
  // there was no lower drill to fall back to. These five are authored.
  // `i-declension` is the exception and carries both: the C1 `isklonidba` as
  // the primary route and the new B2 bank as the easier one.
  | 'i-declension'
  | 'verbal-adverbs'
  | 'negation-advanced'
  | 'aspect-verbs'
  | 'intensity'
  // Pool-only tags (practice programme, C1 tranche 1, 2026-08-29). A MIX: C1 is
  // the only level where both earlier moves were available and both were partly
  // wrong. `collocations` and `prosody` are retags of C1 drills that were buried
  // under the `register` and `speaking` catch-alls; the other four are authored,
  // because the nearest existing drill was either C2-gated (`tvorbarijeci`) or a
  // genuine content mismatch (`stupnjevanje` builds comparatives; the B1
  // `diminutives` screen has no augmentative content at all).
  | 'collocations'
  | 'prosody'
  | 'advanced-comparison'
  | 'word-formation'
  | 'diminutives'
  | 'summarising'
  // Pool-only tags (practice programme, A1 TOPICAL block, 2026-08-29). This
  // block was left uncoupled from the start for a good reason: the only partner
  // on offer was a topic-blind vocabulary game, and pairing a lesson on family
  // words with a round of random nouns claims a connection the app cannot
  // deliver. What makes these drills honest is that the LESSONS are not
  // topic-blind either — each is a topic plus a structure (irregular plurals
  // with plural agreement, the country/nationality/language triple, accusative
  // vs genitive when ordering, the subjectless sentence, the sviđati se flip),
  // and the structure is what a drill can actually test.
  | 'family'
  | 'countries'
  | 'food'
  | 'directions'
  | 'weather'
  | 'preferences'
  // Pool-only tags (practice programme, A2 TOPICAL block, 2026-08-29). Same
  // shape as the A1 block above: each lesson is a topic PLUS a structure, and
  // the structure is what the drill tests — u/na with the locative against the
  // genitive position words, the boljeti construction where the body part is
  // the subject, nositi + accusative, Kakav? against Koji?, the female job
  // form as the standard one, učiti against studirati, igrati against svirati,
  // the instrumental of means, the present tense doing an arranged future, and
  // sretan agreeing with the occasion.
  | 'home'
  | 'health'
  | 'clothing'
  | 'appearance'
  | 'jobs'
  | 'education'
  | 'hobbies'
  | 'travel'
  | 'invitations'
  | 'celebrations'
  // Pool-only tags (practice programme, B1 TOPICAL block, 2026-08-30). Same
  // shape again: the obligatory `da` after every opinion frame, the case each
  // reflexive emotion verb governs, reporting a fault rather than a culprit,
  // the impersonal register of official Croatian, how rooms are counted, the
  // participle agreeing with the applicant, the verbless headline, the native
  // against international word layer, the named winds, and the recipe's
  // imperative plus genitive.
  | 'opinions'
  | 'feelings'
  | 'complaints'
  | 'bureaucracy'
  | 'renting'
  | 'job-search'
  | 'news'
  | 'technology'
  | 'nature'
  | 'cooking'
  // Pool-only tags (practice programme, B2 FUNCTIONAL block, 2026-08-30). The
  // level's second half: the fixed `u tome što` frame, hedging on two
  // independent axes, -ost nouns and the prepositions the discussion verbs
  // demand, the passive-plus-nominalization pair that makes official Croatian
  // look the way it does, signposting a talk, `predlažem da` + present,
  // dobit/gubitak/gospodarstvo, Sabor and the pluralia-tantum `izbori`,
  // hesitating aloud, the `ma` particle and understatement, the jat reflex,
  // and how to pick a first book.
  | 'argument'
  | 'hedging'
  | 'abstract'
  | 'registers'
  | 'presenting'
  | 'meetings'
  | 'business'
  | 'politics'
  | 'smalltalk'
  | 'humour'
  | 'language-history'
  | 'literature'
  // Pool-only tags (practice programme, C1 FUNCTIONAL block, 2026-08-30): the
  // attitude particles, conceding before defeating a point, the ceremonial
  // formulas and the dative nazdraviti takes, the calques that mark a text as
  // translated, checking a draft in passes, who disappeared into a passive,
  // temeljem/sukladno and the deadline, splitting a coined technical term,
  // potresan as praise, understanding a regional variety without performing it,
  // what marks a text as Croatian, and zavičaj.
  | 'particles'
  | 'debate'
  | 'formal-speech'
  | 'translation'
  | 'proofreading'
  | 'media-analysis'
  | 'legal'
  | 'science'
  | 'arts'
  | 'regional'
  | 'identity'
  | 'diaspora'
  // Pool-only tags (practice programme, C2 block, 2026-08-30 — the last of
  // the programme): the gap between what is prescribed and what is said, the
  // nouns that decline unlike their neighbours, quantity agreement, the
  // subject that is not what it looks like, two correct cases meaning
  // different things, obligation against permission, why a correct sentence
  // can sound wrong, saying one thing and meaning another, wordplay,
  // reading for what is not stated, texts written before Gaj, rebuilding an
  // argument the text never states, speaking without preparation,
  // terminology rather than dictionary, where a frazem comes from, what the
  // three dialects actually do, and what a language choice says about you.
  | 'norm'
  | 'declension-exceptions'
  | 'number-norm'
  | 'agreement-subtleties'
  | 'case-subtleties'
  | 'modality'
  | 'rhythm'
  | 'irony'
  | 'wordplay'
  | 'literary-style'
  | 'old-texts'
  | 'reconstruction'
  | 'spontaneous'
  | 'specialist-translation'
  | 'phraseology'
  | 'dialects-deep'
  | 'language-society'
  // Pool-only tags (practice programme, the DEBT block, 2026-08-30): the
  // thirteen lessons that had no drill at any level. Vi against ti, which
  // case a preposition takes, the adjective ending table, adverb formation,
  // a against ali, the two questions that fix `koji`, the netko/nitko/svatko
  // grid, placing an event in time, change against state, conditions that
  // may really happen, one vowel between advice and regret, how hard a
  // modal lands, and the prepositions whose case changes their meaning.
  | 'politeness'
  | 'preposition-case'
  | 'adjective-agreement'
  | 'adverbs'
  | 'conjunctions'
  | 'relative-koji'
  | 'indefinites'
  | 'duration'
  | 'position'
  | 'real-conditions'
  | 'wishes'
  | 'modal-nuance'
  | 'two-case-prepositions'
  // Pool-only tag (2026-08-30). The A1 alphabet quiz, retagged off `vocab-a2`
  // so the A1 lesson can couple to the screen that teaches it rather than to
  // an A2 vocabulary game.
  | 'alphabet';

// NOTE: the pool-only tags ('nominative', 'word-order', 'passive', 'numerals',
// 'participle', 'subordination', 'idioms', 'discourse', 'register',
// 'nominalization', 'verb-government', 'gender', 'plural', 'negation', 'adjectives',
// 'demonstratives', 'having', 'imperative', 'possessives', 'questions',
// 'place-prepositions', 'time', 'greetings', 'reflexive-possessive',
// 'plural-cases', 'quantity', 'comparison', 'infinitive-da', 'reported-speech',
// 'impersonal', 'time-clauses', 'cause-purpose', 'orthography', 'punctuation',
// 'admin-style', 'academic-style', 'journalistic-style', 'figures-of-speech',
// 'editing', 'precision', 'i-declension', 'verbal-adverbs', 'negation-advanced',
// 'aspect-verbs', 'intensity', 'collocations', 'prosody', 'advanced-comparison',
// 'word-formation', 'diminutives', 'summarising', 'family', 'countries', 'food',
// 'directions', 'weather', 'preferences', 'home', 'health', 'clothing',
// 'appearance', 'jobs', 'education', 'hobbies', 'travel', 'invitations',
// 'celebrations', 'opinions', 'feelings', 'complaints', 'bureaucracy',
// 'renting', 'job-search', 'news', 'technology', 'nature', 'cooking',
// 'argument', 'hedging', 'abstract', 'registers', 'presenting', 'meetings',
// 'business', 'politics', 'smalltalk', 'humour', 'language-history',
// 'literature', 'particles', 'debate', 'formal-speech', 'translation',
// 'proofreading', 'media-analysis', 'legal', 'science', 'arts', 'regional',
// 'identity', 'diaspora') are valid SkillCategory tags used to label
// CEFR_EXERCISE_POOL honestly, but are deliberately NOT listed here.
// ALL_CATEGORIES drives the adaptive scheduler/queue; omitting them keeps the
// adaptive picker's behaviour unchanged. They are wired into scheduling/coverage
// in later phases.
// 'listening' was promoted from pool-only (listening-channel fix, 2026-08-14):
// long-form comprehension now schedules like grammar — served by the adaptive
// pick (CATEGORY_SCREEN_MAP routes it to the authored graded-story bank, zero
// AI cost) and rescheduled from real quiz accuracy via the session-category
// bridge. Appended LAST so a brand-new user's first adaptive pick is still
// genitive (the never-seen tie keeps ALL_CATEGORIES order).
export const ALL_CATEGORIES: SkillCategory[] = [
  'genitive',
  'accusative',
  'dative-locative',
  'instrumental',
  'vocative',
  'present-tense',
  'past-tense',
  'future-tense',
  'aspect-imperfective',
  'aspect-perfective',
  'aspect-negation',
  'conditional',
  'clitics',
  'vocab-a2',
  'vocab-b1',
  'vocab-b2',
  'speaking',
  'listening',
  // Appended LAST (same rule as 'listening' above): a brand-new user's first
  // adaptive pick must stay genitive — the never-seen tie keeps list order.
  'writing',
];

// Conjugation categories: drilled by the conjugation engine (flag-gated).
export const CONJ_CATEGORIES: ReadonlySet<SkillCategory> = new Set([
  'present-tense',
  'past-tense',
  'future-tense',
  'conditional',
  'aspect-imperfective',
  'aspect-perfective',
  'aspect-negation',
]);

// Minimum CEFR at which each conjugation category may surface in the session.
// Mirrors the owning curriculum unit's CEFR (see src/lib/conjugation/curriculum.ts).
export const CATEGORY_MIN_CEFR: Partial<Record<SkillCategory, 'A1' | 'A2' | 'B1' | 'B2'>> = {
  'present-tense': 'A1',
  'past-tense': 'A2',
  'future-tense': 'A2',
  conditional: 'B1',
  'aspect-imperfective': 'B1',
  'aspect-negation': 'B1',
  'aspect-perfective': 'B2',
};

// ─── Category card schema ──────────────────────────────────────────────────────

interface CategoryCard {
  stability: number; // interval in days (starts at 1)
  recentAccuracy: number; // EWMA 0.0–1.0 (α=0.3, starts at 0.5)
  due: number; // Unix ms timestamp for next scheduled review
  lastSeen: number; // Unix ms timestamp of last session
}

type CategoryMap = Partial<Record<SkillCategory, CategoryCard>>;

const CAT_KEY = 'nh_cat_sr';

function _loadCats(): CategoryMap {
  try {
    return JSON.parse(localStorage.getItem(CAT_KEY) || '{}') as CategoryMap;
  } catch {
    return {};
  }
}

function _saveCats(data: CategoryMap): void {
  try {
    localStorage.setItem(CAT_KEY, JSON.stringify(data));
  } catch {}
}

function _defaultCard(): CategoryCard {
  return { stability: 1, recentAccuracy: 0.5, due: Date.now(), lastSeen: 0 };
}

// Grade → interval in days. Stability grows on repeated Good/Easy ratings.
function _gradeInterval(grade: 1 | 2 | 3 | 4, stability: number): number {
  switch (grade) {
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return Math.max(7, Math.round(stability * 1.5));
    case 4:
      return Math.max(10, Math.min(60, Math.round(stability * 2.5)));
  }
}

// Map category FSRS stability → difficulty tier 1–5
function _stabilityToDifficulty(stability: number): 1 | 2 | 3 | 4 | 5 {
  if (stability <= 1) return 1;
  if (stability <= 3) return 2;
  if (stability <= 7) return 3;
  if (stability <= 14) return 4;
  return 5;
}

// ─── Public category API ───────────────────────────────────────────────────────

/**
 * Rate a category after a practice session.
 * accuracy: 0.0–1.0 (correct answers / total questions for that session).
 * Updates EWMA recentAccuracy and schedules the next due date.
 */
export function rateCategorySession(category: SkillCategory, accuracy: number): void {
  const data = _loadCats();
  const card = data[category] ?? _defaultCard();

  // EWMA: weight recent session at 30%, history at 70%
  const newAccuracy = 0.3 * accuracy + 0.7 * card.recentAccuracy;

  // Map accuracy → FSRS grade
  const grade: 1 | 2 | 3 | 4 = accuracy >= 0.9 ? 4 : accuracy >= 0.7 ? 3 : accuracy >= 0.5 ? 2 : 1;

  const interval = _gradeInterval(grade, card.stability);
  // Stability grows on Good/Easy; halves on Hard/Again (floor at 1)
  const newStability = grade >= 3 ? interval : Math.max(1, card.stability * 0.5);

  data[category] = {
    stability: newStability,
    recentAccuracy: newAccuracy,
    due: Date.now() + interval * 86400000,
    lastSeen: Date.now(),
  };

  _saveCats(data);
}

// Coverage floor (floored-FSRS): a category not practised within this many days
// — including never-seen ones — is treated as "starved" and force-promoted to
// the front of the queue. Guarantees every category resurfaces on a bounded
// cadence so the case/verb system gets systematic coverage instead of tail
// categories starving behind perpetually-due front ones.
const COVERAGE_FLOOR_DAYS = 14;

/**
 * Build a prioritised practice queue.
 *
 * Priority: starved categories first (coverage floor — most-neglected, i.e.
 * oldest lastSeen, first), then ordinary FSRS ordering for the rest: due-in-past
 * → lowest recentAccuracy → balanced fill. The starved-first rule also removes
 * the previous ALL_CATEGORIES tie-order bias that over-served genitive.
 * Returns up to maxSlots items, each with the user's current difficulty tier.
 */
export function getDueCategoryQueue(
  maxSlots = 6,
): Array<{ category: SkillCategory; difficulty: 1 | 2 | 3 | 4 | 5 }> {
  const data = _loadCats();
  const now = Date.now();
  const floorMs = COVERAGE_FLOOR_DAYS * 86400000;

  // Starved: never seen (lastSeen 0) or last seen longer ago than the floor.
  // Most-neglected first; a stable sort keeps ALL_CATEGORIES order among equally
  // never-seen categories, so a brand-new user still starts at genitive.
  const starved = ALL_CATEGORIES.filter((c) => now - (data[c]?.lastSeen ?? 0) >= floorMs).sort(
    (a, b) => (data[a]?.lastSeen ?? 0) - (data[b]?.lastSeen ?? 0),
  );
  const starvedSet = new Set(starved);

  const rest = ALL_CATEGORIES.filter((c) => !starvedSet.has(c));
  const due = rest.filter((c) => (data[c]?.due ?? 0) <= now);
  const weak = rest
    .filter((c) => !due.includes(c))
    .sort((a, b) => (data[a]?.recentAccuracy ?? 0.5) - (data[b]?.recentAccuracy ?? 0.5));
  const balanced = rest.filter((c) => !due.includes(c) && !weak.slice(0, 3).includes(c));

  const queue = [...starved, ...due, ...weak.slice(0, 3), ...balanced].slice(0, maxSlots);

  return queue.map((category) => ({
    category,
    difficulty: _stabilityToDifficulty(data[category]?.stability ?? 1),
  }));
}

/**
 * What the scheduler actually knows about a category — for surfaces that need to
 * EXPLAIN a recommendation rather than act on it (per-activity reasons,
 * 2026-08-20).
 *
 * `lastSeen === 0` is the never-practised sentinel written by _defaultCard, and
 * it is the reason `accuracy` is null there: the stored 0.5 is a neutral EWMA
 * seed, not a measurement. Reporting it as "50% right" would be inventing a
 * result the learner never produced, so callers get null and say nothing.
 */
export function getCategoryStatus(category: SkillCategory): {
  seen: boolean;
  accuracy: number | null;
  lastSeen: number;
} {
  const card = _loadCats()[category];
  if (!card || !card.lastSeen) return { seen: false, accuracy: null, lastSeen: 0 };
  return { seen: true, accuracy: card.recentAccuracy, lastSeen: card.lastSeen };
}

/**
 * Returns the recommended difficulty tier (1–5) for a given category.
 * Used by exercise screens to filter content to the appropriate level.
 */
export function getCategoryDifficulty(category: SkillCategory): 1 | 2 | 3 | 4 | 5 {
  const data = _loadCats();
  return _stabilityToDifficulty(data[category]?.stability ?? 1);
}
