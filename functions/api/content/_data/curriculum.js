// functions/api/content/_data/curriculum.js
//
// THE CURRICULUM SPINE (Wave 1, 2026-08-28).
//
// WHY THIS EXISTS: the app guaranteed no teaching. Every slot the daily session
// guaranteed was practice or assessment; a lesson could only win a fill slot, as
// one A1-tagged pool entry among ~100. Lessons existed but nothing sequenced or
// scheduled them — selection was "least-recently-served", which is rotation, not
// pedagogy. See docs/curriculum-design.md.
//
// WHAT THIS FILE IS, AND DELIBERATELY IS NOT
// ------------------------------------------
// It is the ORDER and the DEPENDENCIES — the syllabus. It is not lesson content
// (that stays in lessons.js) and it does not restate facts that already have a
// home:
//
//   * which category a lesson teaches   → LESSON_TAUGHT_CATEGORY (teachPractice.ts)
//   * which drill practises a category  → CATEGORY_SCREEN_MAP (useDailySession.ts)
//
// Both already exist and are already conservative on purpose. Copying them here
// would create a second source of truth that silently drifts, so the spine
// carries only what is genuinely new: `order`, `prerequisites`, `objectives`.
//
// A lesson with no honest category mapping (alphabet, greetings, basic-questions)
// simply has none, and gets no follow-on drill. That is the same rule the reason
// strings follow: say nothing rather than invent a pairing. A wrong drill after a
// lesson is worse than no drill.
//
// FIELD RULES (enforced by src/tests/curriculumSpine.test.ts)
//   id            — must exist in LESSONS; every LESSON must appear here exactly once
//   level         — must equal the lesson's own level, so the two cannot disagree
//   order         — dense and unique within a level, 1-based
//   prerequisites — lesson ids, same level or LOWER, never a cycle
//   objectives    — non-empty. A lesson that cannot say what it teaches is not a
//                   lesson. Learner-facing plain English, never grammar jargon
//                   without a gloss.

/** @typedef {'A1'|'A2'|'B1'|'B2'|'C1'|'C2'} CEFRLevel */

/**
 * @typedef {object} CurriculumEntry
 * @property {string}   id             lesson id in LESSONS
 * @property {CEFRLevel} level
 * @property {number}   order          1-based position within the level
 * @property {string[]} prerequisites  lesson ids that must be completed first
 * @property {string[]} objectives     learner-facing "you will be able to…"
 */

/** @type {ReadonlyArray<CurriculumEntry>} */
export const CURRICULUM = [
  // ── A1 ────────────────────────────────────────────────────────────────────
  // Sounds before words, words before sentences, sentences before cases.
  //
  // The 2026-08-28 expansion took A1 from 9 lessons to 30, and the shape of the
  // gap is worth recording: A1 taught the alphabet, gender, verbs and the IDEA
  // of a case, then stopped one step short of every structure a beginner needs
  // to say anything at all. No plural, no negation, no accusative, no locative,
  // no possessives, no adjectives — although `gender` explicitly promised that
  // agreement was coming.
  //
  // `cases` sits at 16, the hinge of the level. Everything before it can be said
  // with subject forms alone; everything after it depends on knowing what a case
  // IS. It is A1 by owner directive (2026-08-18) — the only "what is a case"
  // explanation must never sit above the drills that need it — and the four case
  // lessons that follow are the reason that directive matters.
  {
    id: 'alphabet',
    level: 'A1',
    order: 1,
    prerequisites: [],
    objectives: [
      'Read any Croatian word aloud, because the alphabet is almost perfectly phonetic',
      'Recognise the eight letters English does not have: č ć đ š ž lj nj dž',
      'Hear the difference between č and ć — the one that changes meaning',
    ],
  },
  {
    id: 'greetings-farewells',
    level: 'A1',
    order: 2,
    prerequisites: ['alphabet'],
    objectives: [
      'Greet someone and say goodbye at the right level of formality',
      'Choose between bog and dobar dan without sounding too casual',
      'Ask how someone is and answer when asked',
    ],
  },
  {
    id: 'pronouns-biti',
    level: 'A1',
    order: 3,
    prerequisites: ['greetings-farewells'],
    objectives: [
      'Say who you are and where you are from',
      'Use all six forms of biti (to be) in the present',
      'Understand why Croatian usually drops ja, ti and mi',
    ],
  },
  {
    id: 'gender',
    level: 'A1',
    order: 4,
    prerequisites: ['alphabet'],
    objectives: [
      'Tell a noun’s gender from its ending in most cases',
      'Know which endings lie, and which nouns you simply have to learn',
      'Understand why gender matters before you meet adjectives or the past tense',
    ],
  },
  {
    id: 'plural-nouns',
    level: 'A1',
    order: 5,
    prerequisites: ['gender'],
    objectives: [
      'Make any regular noun plural from its gender alone',
      'Handle the short masculine nouns that grow: grad → gradovi',
      'Recognise the five irregular plurals you cannot avoid: ljudi, djeca, braća, oči, uši',
    ],
  },
  {
    id: 'basic-questions',
    level: 'A1',
    order: 6,
    prerequisites: ['pronouns-biti'],
    objectives: [
      'Ask who, what, where, when and how much',
      'Form a yes/no question with li and with je li',
      'Answer a question without repeating the whole sentence',
    ],
  },
  {
    id: 'present-tense-verbs',
    level: 'A1',
    order: 7,
    prerequisites: ['pronouns-biti'],
    objectives: [
      'Conjugate regular verbs in the present across all three patterns',
      'Recognise which pattern a verb follows from its infinitive',
      'Say what you do every day',
    ],
  },
  {
    id: 'negation',
    level: 'A1',
    order: 8,
    prerequisites: ['present-tense-verbs'],
    objectives: [
      'Negate any verb by putting ne in front of it',
      'Use the three fused negatives correctly: nisam, nemam, neću',
      'Double up the way Croatian requires: Nitko ne zna, Ništa ne vidim',
    ],
  },
  {
    id: 'adjectives-basic',
    level: 'A1',
    order: 9,
    prerequisites: ['gender', 'plural-nouns'],
    objectives: [
      'Make an adjective agree with its noun in gender and number',
      'Use the twenty adjectives that cover most everyday description',
      'Know why dobar becomes dobra — the vowel that disappears',
    ],
  },
  {
    id: 'possessives',
    level: 'A1',
    order: 10,
    prerequisites: ['adjectives-basic'],
    objectives: [
      'Say my, your, his, her, our and their with the right ending',
      'Agree the possessive with the thing OWNED, not with the owner',
      'Ask whose something is: Čiji? Čija? Čije?',
    ],
  },
  {
    id: 'demonstratives',
    level: 'A1',
    order: 11,
    prerequisites: ['adjectives-basic'],
    objectives: [
      'Point at things using the three-way system: ovaj, taj, onaj',
      'Match each one to its place word: ovdje, tu, ondje',
      'Open a sentence with Ovo je… or To je… about anything at all',
    ],
  },
  {
    id: 'family-people',
    level: 'A1',
    order: 12,
    prerequisites: ['possessives'],
    objectives: [
      'Name everyone in your family, immediate and extended',
      'Choose between stric and ujak — Croatian names the side of the family',
      'Answer the question every heritage learner is asked: Odakle je tvoja obitelj?',
    ],
  },
  {
    id: 'countries-languages',
    level: 'A1',
    order: 13,
    prerequisites: ['pronouns-biti'],
    objectives: [
      'Say which country you are from, live in, and which languages you speak',
      'Use the separate male and female nationality forms: Hrvat, Hrvatica',
      'Name the Croatian region your family comes from, which says far more than the country',
    ],
  },
  {
    id: 'numbers-time',
    level: 'A1',
    order: 14,
    prerequisites: ['gender'],
    objectives: [
      'Count, give your phone number and say your age',
      'Tell the time and ask what time it is',
      'Know why jedan changes shape but pet never does',
    ],
  },
  {
    id: 'time-calendar',
    level: 'A1',
    order: 15,
    prerequisites: ['numbers-time'],
    objectives: [
      'Name the days, months and seasons',
      'Say when something happens, not just what happens',
      'Give and understand a date',
    ],
  },
  {
    id: 'cases',
    level: 'A1',
    order: 16,
    prerequisites: ['gender'],
    objectives: [
      'Understand what a case is, using English he / him / his as the bridge',
      'Name all seven Croatian cases and the question each one answers',
      'See why the word for the same thing changes shape mid-sentence',
    ],
  },
  {
    id: 'accusative-intro',
    level: 'A1',
    order: 17,
    prerequisites: ['cases'],
    objectives: [
      'Name what the verb acts on: Pijem kavu, Vidim brata',
      'Ask the one question Croatian needs and English does not — is the noun alive?',
      'Tell motion from position: Idem u grad against U gradu sam',
    ],
  },
  {
    id: 'imati-nemati',
    level: 'A1',
    order: 18,
    prerequisites: ['accusative-intro'],
    objectives: [
      'Say what you have and what you do not have',
      'Give your age the Croatian way: Imam trideset godina',
      'Use ima and nema for "there is" and "there is not"',
    ],
  },
  {
    id: 'locative-intro',
    level: 'A1',
    order: 19,
    prerequisites: ['cases'],
    objectives: [
      'Say where you are, live and work: u Zagrebu, u školi, na moru',
      'Recognise the one case that never appears without a preposition',
      'Answer Gdje? with a locative and Kamo? with an accusative',
    ],
  },
  {
    id: 'prepositions-place',
    level: 'A1',
    order: 20,
    prerequisites: ['locative-intro'],
    objectives: [
      'Place anything in space: pored, blizu, ispred, iza, ispod, između',
      'Learn each preposition together with the case it always rules',
      'Use kod for being at someone’s place, and kod kuće for being at home',
    ],
  },
  {
    id: 'genitive-intro',
    level: 'A1',
    order: 21,
    prerequisites: ['prepositions-place'],
    objectives: [
      'Show belonging without an apostrophe: auto moje sestre',
      'Measure things: čaša vode, šalica kave, puno ljudi',
      'Say where you are from and what is missing: iz Hrvatske, nema kruha',
    ],
  },
  {
    id: 'vocative-intro',
    level: 'A1',
    order: 22,
    prerequisites: ['cases'],
    objectives: [
      'Call someone by name the way a Croatian does: Ivane, not Ivan',
      'Address a stranger politely: gospodine, gospođo',
      'Know which names change and which stay as they are',
    ],
  },
  {
    id: 'modals-basic',
    level: 'A1',
    order: 23,
    prerequisites: ['present-tense-verbs', 'accusative-intro'],
    objectives: [
      'Say what you can, must, want and need to do',
      'Build a sentence around any verb you know, using only its dictionary form',
      'Choose between znati and moći — a learned skill or a present ability',
    ],
  },
  {
    id: 'imperative-basic',
    level: 'A1',
    order: 24,
    prerequisites: ['present-tense-verbs'],
    objectives: [
      'Ask someone to do something, formally and informally',
      'Tell someone not to, using nemoj rather than a plain ne',
      'Soften any request with molim, izvolite and oprostite',
    ],
  },
  {
    id: 'reflexive-verbs',
    level: 'A1',
    order: 25,
    prerequisites: ['present-tense-verbs'],
    objectives: [
      'Use the large family of verbs that carry se, starting with zvati se',
      'Put se in second position, where Croatian clitics belong',
      'Describe your daily routine, and read the impersonal se on every sign',
    ],
  },
  {
    id: 'likes-preferences',
    level: 'A1',
    order: 26,
    prerequisites: ['reflexive-verbs'],
    objectives: [
      'Say what you like two ways: volim kavu and sviđa mi se Zagreb',
      'Turn the sentence around so the thing liked becomes the subject',
      'Say what you prefer: Više volim more nego planine',
    ],
  },
  {
    id: 'food-drink',
    level: 'A1',
    order: 27,
    prerequisites: ['accusative-intro', 'genitive-intro'],
    objectives: [
      'Order in a café and read a simple menu',
      'Ask politely with Htio bih or Htjela bih rather than a blunt Hoću',
      'Use the accusative for what you order and the genitive for how much',
    ],
  },
  {
    id: 'shopping-prices',
    level: 'A1',
    order: 28,
    prerequisites: ['numbers-time', 'accusative-intro'],
    objectives: [
      'Count past a hundred and say any price in euros',
      'Apply the rule every counted noun follows: 1, then 2–4, then 5 and up',
      'Ask what something costs and say how you will pay',
    ],
  },
  {
    id: 'directions-town',
    level: 'A1',
    order: 29,
    prerequisites: ['prepositions-place', 'imperative-basic'],
    objectives: [
      'Ask where something is, and understand the directions you get back',
      'Name the places in a Croatian town you will actually look for',
      'Say how you are travelling: pješice, tramvajem, autobusom',
    ],
  },
  {
    id: 'weather-seasons',
    level: 'A1',
    order: 30,
    prerequisites: ['present-tense-verbs'],
    objectives: [
      'Describe the weather with the subjectless pattern: Hladno je, Pada kiša',
      'Ask what the weather is like, today and tomorrow',
      'Name the seasons and say when something happens: ljeti, zimi, u proljeće',
    ],
  },

  // ── A2 ────────────────────────────────────────────────────────────────────
  {
    id: 'present',
    level: 'A2',
    order: 1,
    prerequisites: ['present-tense-verbs'],
    objectives: [
      'Conjugate irregular and stem-changing verbs with confidence',
      'Handle the verbs that break every rule: ići, moći, htjeti',
      'Self-correct when a verb ending sounds wrong',
    ],
  },
  {
    id: 'vi-vs-ti',
    level: 'A2',
    order: 2,
    prerequisites: ['greetings-farewells'],
    objectives: [
      'Choose Vi or ti correctly and know what each choice signals',
      'Move from Vi to ti when invited, and not before',
      'Write and speak politely without sounding stiff',
    ],
  },
  {
    id: 'accusative-deep',
    level: 'A2',
    order: 3,
    prerequisites: ['cases'],
    objectives: [
      'Mark the direct object — the thing the verb acts on',
      'Use the accusative for motion towards a place',
      'Know why animate masculine nouns behave differently',
    ],
  },
  {
    id: 'adjective-agreement',
    level: 'A2',
    order: 4,
    prerequisites: ['gender'],
    objectives: [
      'Match an adjective to its noun in gender, number and case',
      'Describe people and things accurately',
      'Recognise the definite and indefinite adjective forms',
    ],
  },
  {
    id: 'past-tense',
    level: 'A2',
    order: 5,
    prerequisites: ['present'],
    objectives: [
      'Talk about what happened, using the perfect tense',
      'Build the past from the l-participle plus biti',
      'Get the participle to agree with who is speaking',
    ],
  },
  {
    id: 'prepositions-action',
    level: 'A2',
    order: 6,
    prerequisites: ['accusative-deep'],
    objectives: [
      'Say where something is and where it is going',
      'Use the prepositions that take two different cases, and know which is which',
      'Stop translating English prepositions word for word',
    ],
  },
  {
    id: 'modal-verbs-a2',
    level: 'A2',
    order: 7,
    prerequisites: ['present'],
    objectives: [
      'Say what you can, must, want and are allowed to do',
      'Combine a modal with an infinitive correctly',
      'Soften a request so it does not sound like an order',
    ],
  },
  {
    id: 'comparatives-a2',
    level: 'A2',
    order: 8,
    prerequisites: ['adjective-agreement'],
    objectives: [
      'Compare two things and name the best of many',
      'Form comparatives regularly, and learn the handful that are irregular',
      'Use od and nego to say "than"',
    ],
  },

  // ── B1 ────────────────────────────────────────────────────────────────────
  // The three case deep-dives come first: they are the spine of B1 and
  // everything else at this level leans on them.
  {
    id: 'genitive-deep',
    level: 'B1',
    order: 1,
    prerequisites: ['cases'],
    objectives: [
      'Express possession — the case that means "of"',
      'Say that something is absent, with nema',
      'Use the genitive after quantities and most prepositions',
    ],
  },
  {
    id: 'dative-locative',
    level: 'B1',
    order: 2,
    prerequisites: ['cases'],
    objectives: [
      'Say who you are giving something to, or speaking to',
      'Say where something is, as opposed to where it is going',
      'Handle the verbs that demand the dative, such as radovati se',
    ],
  },
  {
    id: 'instrumental',
    level: 'B1',
    order: 3,
    prerequisites: ['cases'],
    objectives: [
      'Say what you did something with, and who you did it with',
      'Choose between s and sa correctly',
      'Use the instrumental for means of travel',
    ],
  },
  {
    id: 'numbers-nouns',
    level: 'B1',
    order: 4,
    prerequisites: ['numbers-time', 'genitive-deep'],
    objectives: [
      'Put the right case after a number — the rule that trips up every learner',
      'Know why 2, 3 and 4 behave unlike 5 and above',
      'Count things aloud without stalling',
    ],
  },
  {
    id: 'future-tense',
    level: 'B1',
    order: 5,
    prerequisites: ['present'],
    objectives: [
      'Talk about what will happen',
      'Use both the full and the contracted future forms',
      'Place the future clitic correctly in the sentence',
    ],
  },
  {
    id: 'aspect',
    level: 'B1',
    order: 6,
    prerequisites: ['past-tense'],
    objectives: [
      'Understand aspect — whether an action is complete or ongoing',
      'See why Croatian needs two verbs where English needs one',
      'Recognise aspect pairs when you meet them in a dictionary',
    ],
  },
  {
    id: 'aspect-imperfective',
    level: 'B1',
    order: 7,
    prerequisites: ['aspect'],
    objectives: [
      'Describe habits, repeated actions and actions in progress',
      'Choose the imperfective when the process matters more than the result',
      'Use the imperfective correctly in the past',
    ],
  },
  {
    id: 'aspect-perfective',
    level: 'B1',
    order: 8,
    prerequisites: ['aspect'],
    objectives: [
      'Describe a single completed action with a result',
      'Know why a perfective verb cannot mean "I am doing" right now',
      'Pick the right aspect when telling a story',
    ],
  },
  {
    id: 'motion-verbs',
    level: 'B1',
    order: 9,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Use ići, doći, otići and their relatives precisely',
      'Say you are going somewhere versus you go there regularly',
      'Add prefixes to change where the motion leads',
    ],
  },
  {
    id: 'feelings-inner-life',
    level: 'B1',
    order: 10,
    prerequisites: ['dative-locative'],
    objectives: [
      'Say how you feel with the constructions Croatian actually uses',
      'Handle the verbs where the feeling happens "to you" rather than by you',
      'Talk about hopes, worries and preferences',
    ],
  },

  // ── B2 ────────────────────────────────────────────────────────────────────
  {
    id: 'clitics',
    level: 'B2',
    order: 1,
    prerequisites: ['pronouns-biti'],
    objectives: [
      'Place short pronouns and auxiliaries in second position, where Croatian insists',
      'Order a cluster of clitics correctly',
      'Hear when a sentence is grammatical but sounds foreign',
    ],
  },
  {
    id: 'conditional',
    level: 'B2',
    order: 2,
    prerequisites: ['past-tense'],
    objectives: [
      'Say what you would do',
      'Make a polite request with htio bih rather than a bare demand',
      'Build if-clauses that hold together',
    ],
  },
  {
    id: 'aspect-negation',
    level: 'B2',
    order: 3,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Negate correctly, and know why negation usually takes the imperfective',
      'Give and refuse commands',
      'Use the genitive of negation where it is still expected',
    ],
  },
  {
    id: 'complex-sentences',
    level: 'B2',
    order: 4,
    prerequisites: ['clitics'],
    objectives: [
      'Join clauses with da, koji, jer and kad',
      'Keep word order intact once a subordinate clause is attached',
      'Say what someone else said without garbling the tense',
    ],
  },
  {
    id: 'passive-voice',
    level: 'B2',
    order: 5,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Form the passive both ways Croatian allows',
      'Choose the se-passive where a native speaker would',
      'Read official and news Croatian, where the passive lives',
    ],
  },
  {
    id: 'writing-registers',
    level: 'B2',
    order: 6,
    prerequisites: ['vi-vs-ti'],
    objectives: [
      'Write an email that lands at the right level of formality',
      'Move between spoken, written and official registers deliberately',
      'Recognise which forms belong only in writing',
    ],
  },

  // ── C1 ────────────────────────────────────────────────────────────────────
  {
    id: 'clitics-advanced',
    level: 'C1',
    order: 1,
    prerequisites: ['clitics'],
    objectives: [
      'Order every clitic in a full cluster without hesitating',
      'Handle the cases where second position is not the second word',
      'Sound native in the one area that most reveals a foreign speaker',
    ],
  },
  {
    id: 'word-order-emphasis',
    level: 'C1',
    order: 2,
    prerequisites: ['clitics-advanced'],
    objectives: [
      'Move the emphasis of a sentence by moving its words',
      'Know which orders are genuinely fixed and which are free',
      'Front information deliberately rather than by accident',
    ],
  },
  {
    id: 'aorist-imperfekt',
    level: 'C1',
    order: 3,
    prerequisites: ['past-tense'],
    objectives: [
      'Recognise the aorist and imperfect in literature and older writing',
      'Understand what they convey that the perfect does not',
      'Form them for the verbs where they are still in living use',
    ],
  },
  {
    id: 'verbal-nouns',
    level: 'C1',
    order: 4,
    prerequisites: ['passive-voice'],
    objectives: [
      'Turn a verb into a noun, the way formal Croatian prefers',
      'Use present and past participles as modifiers',
      'Compress a whole clause into a single phrase',
    ],
  },
  {
    id: 'tvorba-rijeci',
    level: 'C1',
    order: 5,
    prerequisites: ['verbal-nouns'],
    objectives: [
      'Predict a word’s meaning from its prefix and suffix',
      'Build new words the way the language itself does',
      'Read unfamiliar vocabulary without reaching for a dictionary',
    ],
  },
  {
    id: 'collective-numbers',
    level: 'C1',
    order: 6,
    prerequisites: ['numbers-nouns'],
    objectives: [
      'Count mixed groups of people, where ordinary numbers fail',
      'Use dvoje, troje and the collective forms correctly',
      'Refer to pairs and sets naturally',
    ],
  },
  {
    id: 'idioms-register',
    level: 'C1',
    order: 7,
    prerequisites: ['word-order-emphasis'],
    objectives: [
      'Use idioms that native speakers actually say',
      'Judge when an expression is too colloquial for the moment',
      'Understand humour and understatement',
    ],
  },
  {
    id: 'language-identity',
    level: 'C1',
    order: 8,
    prerequisites: ['idioms-register'],
    objectives: [
      'Understand what distinguishes Croatian from its neighbours',
      'Recognise the lexical choices that mark a text as Croatian',
      'Navigate the subject with the care it deserves',
    ],
  },

  // ── C2 ────────────────────────────────────────────────────────────────────
  {
    id: 'pluskvamperfekt',
    level: 'C2',
    order: 1,
    prerequisites: ['aorist-imperfekt'],
    objectives: [
      'Express an action completed before another past action',
      'Sequence tenses across a complex narrative',
      'Read older and literary Croatian without stumbling',
    ],
  },
  {
    id: 'zarez-interpunkcija',
    level: 'C2',
    order: 2,
    prerequisites: ['complex-sentences'],
    objectives: [
      'Place the Croatian comma by rule, not by English habit',
      'Punctuate subordinate clauses correctly',
      'Write text that reads as edited rather than drafted',
    ],
  },
  {
    id: 'stilske-figure',
    level: 'C2',
    order: 3,
    prerequisites: ['idioms-register'],
    objectives: [
      'Recognise and use the rhetorical figures Croatian prose favours',
      'Vary sentence rhythm deliberately',
      'Write persuasively rather than merely correctly',
    ],
  },
  {
    id: 'administrativni-stil',
    level: 'C2',
    order: 4,
    prerequisites: ['writing-registers', 'verbal-nouns'],
    objectives: [
      'Read contracts, forms and official correspondence',
      'Write in the administrative register when you must',
      'Decode bureaucratic Croatian into plain language',
    ],
  },
];

/** Lookup by lesson id. */
export const CURRICULUM_BY_ID = new Map(CURRICULUM.map((e) => [e.id, e]));

/** CEFR levels in curriculum order. */
export const CURRICULUM_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/**
 * Spine for one level, ordered.
 * @param {string} level
 * @returns {CurriculumEntry[]}
 */
export function spineForLevel(level) {
  return CURRICULUM.filter((e) => e.level === level).sort((a, b) => a.order - b.order);
}
