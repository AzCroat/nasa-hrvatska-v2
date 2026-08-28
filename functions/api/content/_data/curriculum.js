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
  // The expansion to 30 (2026-08-28). A2 had eight lessons and they were all
  // about verbs and adjectives: the level that is meant to let a learner
  // describe a past event, make a plan and give an opinion had no dative, no
  // instrumental, no object pronouns, no plural beyond the subject form, no
  // conjunctions past `i` — and nothing functional at all.
  //
  // The order runs: the case system finished (3–12), then tense and comparison
  // (13–17), then the joining words that are what actually separates A2 from A1
  // (18–20), then ten functional lessons that put all of it to work. A learner
  // who stops halfway still has a usable level; that is what the ordering is
  // for.
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
    id: 'object-pronouns',
    level: 'A2',
    order: 3,
    prerequisites: ['present'],
    objectives: [
      'Say “I see her” without repeating the name',
      'Use the short forms me, te, ga, je and mi, ti, mu, joj',
      'Place them in second position, and put the dative before the accusative',
    ],
  },
  {
    id: 'accusative-deep',
    level: 'A2',
    order: 4,
    prerequisites: ['cases'],
    objectives: [
      'Mark the direct object — the thing the verb acts on',
      'Use the accusative for motion towards a place',
      'Know why animate masculine nouns behave differently',
    ],
  },
  {
    id: 'dative-intro',
    level: 'A2',
    order: 5,
    prerequisites: ['object-pronouns'],
    objectives: [
      'Say who you gave, wrote, said or explained something to',
      'Use the verbs that demand it: dati, reći, pomoći, vjerovati',
      'See why “sviđa mi se” and “hladno mi je” are built the way they are',
    ],
  },
  {
    id: 'instrumental-intro',
    level: 'A2',
    order: 6,
    prerequisites: ['accusative-deep'],
    objectives: [
      'Say who you are with and what you are travelling by',
      'Tell the means (vlakom) from the company (s bratom)',
      'Use baviti se to talk about a regular activity',
    ],
  },
  {
    id: 'prepositions-action',
    level: 'A2',
    order: 7,
    prerequisites: ['accusative-deep'],
    objectives: [
      'Say where something is and where it is going',
      'Use the prepositions that take two different cases, and know which is which',
      'Stop translating English prepositions word for word',
    ],
  },
  {
    id: 'adjective-agreement',
    level: 'A2',
    order: 8,
    prerequisites: ['gender'],
    objectives: [
      'Match an adjective to its noun in gender, number and case',
      'Describe people and things accurately',
      'Recognise the definite and indefinite adjective forms',
    ],
  },
  {
    id: 'svoj',
    level: 'A2',
    order: 9,
    prerequisites: ['possessives', 'adjective-agreement'],
    objectives: [
      'Say “his own” rather than “someone else’s” — a distinction English cannot make',
      'Point a possessive back at the subject of the sentence',
      'Stop saying moju knjigu where a Croatian says svoju',
    ],
  },
  {
    id: 'plural-cases',
    level: 'A2',
    order: 10,
    prerequisites: ['plural-nouns', 'accusative-deep'],
    objectives: [
      'Use the plural as an object, not only as a subject',
      'Form the genitive plural — the long -a after numbers and quantities',
      'Cover the dative, locative and instrumental plural with one ending',
    ],
  },
  {
    id: 'quantity',
    level: 'A2',
    order: 11,
    prerequisites: ['plural-cases'],
    objectives: [
      'Say how much and how many, and get the case right every time',
      'Choose the genitive singular or plural by whether the thing is countable',
      'Keep the verb singular after a quantity phrase',
    ],
  },
  {
    id: 'ordinals-dates',
    level: 'A2',
    order: 12,
    prerequisites: ['numbers-time', 'adjective-agreement'],
    objectives: [
      'Give and understand a date in Croatian',
      'Use ordinals as the adjectives they are',
      'Recognise the old Slavic month names, which look nothing like the English ones',
    ],
  },
  {
    id: 'past-tense',
    level: 'A2',
    order: 13,
    prerequisites: ['present'],
    objectives: [
      'Talk about what happened, using the perfect tense',
      'Build the past from the l-participle plus biti',
      'Get the participle to agree with who is speaking',
    ],
  },
  {
    id: 'past-questions-negation',
    level: 'A2',
    order: 14,
    prerequisites: ['past-tense'],
    objectives: [
      'Ask whether something happened, and say it did not',
      'Put the auxiliary where Croatian word order demands',
      'Use Je li…? — the question form you will need most',
    ],
  },
  {
    id: 'adverbs',
    level: 'A2',
    order: 15,
    prerequisites: ['adjective-agreement'],
    objectives: [
      'Describe HOW something is done, not just what it is',
      'Build an adverb from any adjective in one step',
      'Say how often with uvijek, često, ponekad, rijetko and nikad',
    ],
  },
  {
    id: 'comparatives-a2',
    level: 'A2',
    order: 16,
    prerequisites: ['adjective-agreement'],
    objectives: [
      'Compare two things and name the best of many',
      'Form comparatives regularly, and learn the handful that are irregular',
      'Use od and nego to say "than"',
    ],
  },
  {
    id: 'modal-verbs-a2',
    level: 'A2',
    order: 17,
    prerequisites: ['present'],
    objectives: [
      'Say what you can, must, want and are allowed to do',
      'Combine a modal with an infinitive correctly',
      'Soften a request so it does not sound like an order',
    ],
  },
  {
    id: 'conjunctions',
    level: 'A2',
    order: 18,
    prerequisites: ['past-tense'],
    objectives: [
      'Join two sentences into one — the thing that makes A2 A2',
      'Choose between a and ali, which English collapses into “but”',
      'Use nego after a negative, and put the commas where Croatian wants them',
    ],
  },
  {
    id: 'relative-koji',
    level: 'A2',
    order: 19,
    prerequisites: ['conjunctions'],
    objectives: [
      'Say “the woman who…”, “the book which…”, “the town where I live”',
      'Take gender from the noun outside and case from the clause inside',
      'Put the preposition in front, where Croatian requires it',
    ],
  },
  {
    id: 'indefinites',
    level: 'A2',
    order: 20,
    prerequisites: ['negation'],
    objectives: [
      'Say someone, no one, everyone — and the same for things and places',
      'Build the whole set from three prefixes rather than memorising twenty words',
      'Remember that the ni- family always needs a negated verb',
    ],
  },
  {
    id: 'house-home',
    level: 'A2',
    order: 21,
    prerequisites: ['locative-intro', 'prepositions-action'],
    objectives: [
      'Describe where you live, room by room',
      'Place furniture and objects using the prepositions you know',
      'Give your floor and say whether it is a kuća or a stan',
    ],
  },
  {
    id: 'body-health',
    level: 'A2',
    order: 22,
    prerequisites: ['object-pronouns'],
    objectives: [
      'Say what hurts, using the sentence pattern where the pain is the subject',
      'Name the parts of the body, including the ones that are always plural',
      'Get through a visit to the doctor or the pharmacy',
    ],
  },
  {
    id: 'clothes-appearance',
    level: 'A2',
    order: 23,
    prerequisites: ['adjective-agreement'],
    objectives: [
      'Say what you and other people are wearing',
      'Buy clothes: try something on, ask for another size, ask for another colour',
      'Agree colours with the thing they describe',
    ],
  },
  {
    id: 'describing-people',
    level: 'A2',
    order: 24,
    prerequisites: ['clothes-appearance'],
    objectives: [
      'Describe what someone looks like and what they are like',
      'Talk about hair and eyes the way a Croatian does',
      'Ask Kakav je? for character and Koji je? for which one',
    ],
  },
  {
    id: 'work-jobs',
    level: 'A2',
    order: 25,
    prerequisites: ['instrumental-intro'],
    objectives: [
      'Say what you do for a living and ask what someone else does',
      'Use the female form of a job title, which is standard and not optional',
      'Talk about the office, the hours, the salary and the holiday',
    ],
  },
  {
    id: 'school-studies',
    level: 'A2',
    order: 26,
    prerequisites: ['work-jobs'],
    objectives: [
      'Say what you are studying, where, and for how long',
      'Tell učiti from studirati, and učenik from student',
      'Talk about exams, subjects, marks and homework',
    ],
  },
  {
    id: 'hobbies-free-time',
    level: 'A2',
    order: 27,
    prerequisites: ['instrumental-intro'],
    objectives: [
      'Say what you do in your free time',
      'Choose between igrati, svirati and igrati se — three verbs for one English word',
      'Use the instrumental of time: subotom, vikendom, ljeti',
    ],
  },
  {
    id: 'travel-transport',
    level: 'A2',
    order: 28,
    prerequisites: ['instrumental-intro'],
    objectives: [
      'Buy a ticket and ask when something leaves and arrives',
      'Name every way of getting around a long, narrow country',
      'Check into a hotel or an apartman',
    ],
  },
  {
    id: 'plans-invitations',
    level: 'A2',
    order: 29,
    prerequisites: ['ordinals-dates'],
    objectives: [
      'Invite someone out, and accept or decline gracefully',
      'Use the present tense for an arranged future',
      'Fix a time and a place, and close with Vidimo se',
    ],
  },
  {
    id: 'celebrations-holidays',
    level: 'A2',
    order: 30,
    prerequisites: ['ordinals-dates'],
    objectives: [
      'Know the Croatian calendar and what is said at each occasion',
      'Agree sretan with what follows: Sretan Božić, Sretna Nova godina',
      'Understand the imendan, and what to bring when invited to someone’s home',
    ],
  },

  // ── B1 ────────────────────────────────────────────────────────────────────
  // The expansion to 30 (2026-08-28). B1's ten lessons were the remaining cases
  // and the aspect system — the two hardest things in Croatian, taught well.
  // What they were not was B1. The level CEFR defines as "can describe
  // experiences, give reasons and explanations for opinions and plans, and
  // produce connected text" had no reported speech, no time clauses, no
  // conditions, no cause and no purpose — and one topical lesson out of ten.
  //
  // The order runs: the cases and aspect as before (1-12), then the machinery
  // for joining and supposing (13-20), then ten lessons that put it to work on
  // the situations B1 is actually measured on. `cause-purpose` is the literal
  // "give reasons and explanations" half of the level descriptor, and until now
  // the level contained nothing for it.
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
    id: 'time-duration',
    level: 'B1',
    order: 6,
    prerequisites: ['future-tense'],
    objectives: [
      'Say when something happened and how long it lasted',
      'Tell prije (ago) from za (in), which mirror each other',
      'Use the PRESENT for something still going on: Živim ovdje pet godina',
    ],
  },
  {
    id: 'aspect',
    level: 'B1',
    order: 7,
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
    order: 8,
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
    order: 9,
    prerequisites: ['aspect'],
    objectives: [
      'Describe a single completed action with a result',
      'Know why a perfective verb cannot mean "I am doing" right now',
      'Pick the right aspect when telling a story',
    ],
  },
  {
    id: 'verb-prefixes',
    level: 'B1',
    order: 10,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Read an unknown verb by stripping its prefix and finding the root',
      'Recognise that the prefixes echo the prepositions: u-, iz-, do-, pre-',
      'Grow vocabulary by families rather than one word at a time',
    ],
  },
  {
    id: 'motion-verbs',
    level: 'B1',
    order: 11,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Use ići, doći, otići and their relatives precisely',
      'Say you are going somewhere versus you go there regularly',
      'Add prefixes to change where the motion leads',
    ],
  },
  {
    id: 'position-placement',
    level: 'B1',
    order: 12,
    prerequisites: ['verb-prefixes'],
    objectives: [
      'Tell sitting down from being seated — sjesti against sjediti',
      'Choose the accusative for a change of position and the locative for a state',
      'Use staviti for putting something and stajati for where it stands',
    ],
  },
  {
    id: 'infinitive-vs-da',
    level: 'B1',
    order: 13,
    prerequisites: ['future-tense'],
    objectives: [
      'Separate the compulsory da (that) from the one competing with the infinitive',
      'Use the plain infinitive after a modal, as standard Croatian does',
      'Know when the subject changes and a full clause is required',
    ],
  },
  {
    id: 'impersonal',
    level: 'B1',
    order: 14,
    prerequisites: ['infinitive-vs-da'],
    objectives: [
      'Say what one should do, without naming anyone',
      'Read the modal-plus-se wording every sign and rule in Croatia uses',
      'Add a person in the dative: Treba mi odmor, Hladno mi je',
    ],
  },
  {
    id: 'time-clauses',
    level: 'B1',
    order: 15,
    prerequisites: ['time-duration'],
    objectives: [
      'Sequence events with kad, dok, čim, prije nego što, nakon što',
      'Use the PRESENT in a time clause that points at the future',
      'Let aspect carry the narrative: imperfective background, perfective event',
    ],
  },
  {
    id: 'real-conditions',
    level: 'B1',
    order: 16,
    prerequisites: ['time-clauses'],
    objectives: [
      'Talk about conditions that may genuinely be met',
      'Keep the if-clause in the present, exactly as English does',
      'Recognise the budem-form Croatian uses for a future condition',
    ],
  },
  {
    id: 'cause-purpose',
    level: 'B1',
    order: 17,
    prerequisites: ['real-conditions'],
    objectives: [
      'Give reasons and state aims — the half of B1 the level is defined by',
      'Choose jer for a clause and zbog for a noun',
      'Separate zbog (a cause, looking back) from radi (a purpose, looking forward)',
    ],
  },
  {
    id: 'reported-speech',
    level: 'B1',
    order: 18,
    prerequisites: ['infinitive-vs-da'],
    objectives: [
      'Pass on what somebody said, asked or requested',
      'Keep the tense they used — Croatian does not backshift the way English does',
      'Shift the pronouns and time words to your own point of view',
    ],
  },
  {
    id: 'relative-deep',
    level: 'B1',
    order: 19,
    prerequisites: ['reported-speech'],
    objectives: [
      'Say whose, where, and what — beyond the basic koji',
      'Use što when the relative refers to a whole clause rather than a noun',
      'Reach for ono što where English says the thing that',
    ],
  },
  {
    id: 'telling-a-story',
    level: 'B1',
    order: 20,
    prerequisites: ['reported-speech', 'aspect-perfective'],
    objectives: [
      'Narrate an event from beginning to end',
      'Set the scene with the imperfective and move it on with the perfective',
      'Keep a listener in it: Stvarno? Ma daj! I što onda?',
    ],
  },
  {
    id: 'opinions-agreeing',
    level: 'B1',
    order: 21,
    prerequisites: ['cause-purpose'],
    objectives: [
      'Say what you think and why',
      'Agree, half-agree and disagree without it becoming a confrontation',
      'Use imati pravo, because being right is something you have',
    ],
  },
  {
    id: 'feelings-inner-life',
    level: 'B1',
    order: 22,
    prerequisites: ['dative-locative'],
    objectives: [
      'Say how you feel with the constructions Croatian actually uses',
      'Handle the verbs where the feeling happens "to you" rather than by you',
      'Talk about hopes, worries and preferences',
    ],
  },
  {
    id: 'complaints-problems',
    level: 'B1',
    order: 23,
    prerequisites: ['opinions-agreeing'],
    objectives: [
      'Explain what has gone wrong and ask for it to be fixed',
      'Report the fault rather than blaming a person, as Croatian does',
      'Stay firm and polite using the conditional: Htio bih…',
    ],
  },
  {
    id: 'bureaucracy',
    level: 'B1',
    order: 24,
    prerequisites: ['impersonal'],
    objectives: [
      'Get through a counter at the bank, the post office or the council',
      'Name the documents you will be asked for, starting with the OIB',
      'Read the impersonal wording official forms and notices are written in',
    ],
  },
  {
    id: 'renting-flat',
    level: 'B1',
    order: 25,
    prerequisites: ['bureaucracy'],
    objectives: [
      'Read a rental advert and understand what it is actually offering',
      'Know that rooms are counted without the kitchen and bathroom',
      'Ask the questions that matter: režije, polog, ugovor',
    ],
  },
  {
    id: 'job-interview',
    level: 'B1',
    order: 26,
    prerequisites: ['opinions-agreeing'],
    objectives: [
      'Write a Croatian CV and covering letter',
      'Talk about your experience with the participle agreeing with you',
      'Answer an interview question with a reason attached',
    ],
  },
  {
    id: 'media-news',
    level: 'B1',
    order: 27,
    prerequisites: ['reported-speech'],
    objectives: [
      'Read a headline, which usually has no verb in it',
      'Follow a report built almost entirely on reported speech',
      'Mark a claim as second-hand with navodno',
    ],
  },
  {
    id: 'technology-internet',
    level: 'B1',
    order: 28,
    prerequisites: ['media-news'],
    objectives: [
      'Handle everyday digital vocabulary in Croatian',
      'Recognise the native words — računalo, preglednik, poveznica — and where they belong',
      'Log in, download, save and share without reaching for English',
    ],
  },
  {
    id: 'environment-nature',
    level: 'B1',
    order: 29,
    prerequisites: ['opinions-agreeing'],
    objectives: [
      'Describe the Croatian landscape, coast and islands',
      'Tell the bura from the jugo, which matters on the coast',
      'Discuss the environment: okoliš, onečišćenje, zaštititi',
    ],
  },
  {
    id: 'food-cooking',
    level: 'B1',
    order: 30,
    prerequisites: ['impersonal'],
    objectives: [
      'Read a Croatian recipe, which is pure imperative and genitive',
      'Name the regional dishes and know which half of the country they come from',
      'Sit down to a Croatian table without missing the expected phrases',
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
