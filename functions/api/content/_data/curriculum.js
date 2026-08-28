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
  // The expansion to 30 (2026-08-28). B2 had SIX lessons - the thinnest level
  // in the app after C2, and the one a learner spends longest inside. The six
  // covered clitics, the conditional, aspect in negation, complex sentences,
  // the passive and written register. Absent: unreal conditions, so the level
  // had the conditional MOOD but no way to say "if I had known"; verbal adverbs
  // and participial adjectives, two of the three constructions that make
  // written Croatian look written; secondary imperfectives, so aspect was
  // taught in one direction only; the entire i-DECLENSION, a noun class
  // containing stvar, noc, ljubav, rijec and misao that had never been taught
  // at any level; and anything for ARGUMENT, though "give the advantages and
  // disadvantages" is the level descriptor itself.
  //
  // The order runs: morphology (2-8), then the conditional and modality
  // (9-12), then the joining and calibrating machinery (13-17), then argument
  // and register (18-24), then the topical lessons that need all of it.
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
    id: 'i-declension',
    level: 'B2',
    order: 2,
    prerequisites: ['plural-cases'],
    objectives: [
      'Decline the feminine nouns that end in a consonant: stvar, noć, ljubav, riječ',
      'Recognise that every -ost noun belongs to this class',
      'Stop applying the -a pattern where the accusative should not change at all',
    ],
  },
  {
    id: 'aspect-suffixes',
    level: 'B2',
    order: 3,
    prerequisites: ['verb-prefixes'],
    objectives: [
      'Run the aspect system in reverse: make a perfective imperfective again',
      'Recognise -ivati, -avati and -vati as imperfective markers when reading',
      'See one root yield three verbs: pisati, zapisati, zapisivati',
    ],
  },
  {
    id: 'aspect-with-verbs',
    level: 'B2',
    order: 4,
    prerequisites: ['aspect-suffixes'],
    objectives: [
      'Know which aspect a phase verb, a modal or a negative command demands',
      'Use the modal choice deliberately: an activity or a result',
      'Remember that anything repeated goes imperfective whatever the frame',
    ],
  },
  {
    id: 'aspect-negation',
    level: 'B2',
    order: 5,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Negate correctly, and know why negation usually takes the imperfective',
      'Give and refuse commands',
      'Use the genitive of negation where it is still expected',
    ],
  },
  {
    id: 'participial-adjectives',
    level: 'B2',
    order: 6,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Build the passive participle from any verb: napisan, otvoren, plaćen',
      'Decline it as an ordinary adjective',
      'See that it is the ingredient the passive is made from',
    ],
  },
  {
    id: 'passive-voice',
    level: 'B2',
    order: 7,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Form the passive both ways Croatian allows',
      'Choose the se-passive where a native speaker would',
      'Read official and news Croatian, where the passive lives',
    ],
  },
  {
    id: 'verbal-adverbs',
    level: 'B2',
    order: 8,
    prerequisites: ['participial-adjectives'],
    objectives: [
      'Read the -ći and -vši forms that make written Croatian look written',
      'Pair them correctly: imperfective gives -ći, perfective gives -vši',
      'Keep the subject shared, and reach for dok when it is not',
    ],
  },
  {
    id: 'conditional',
    level: 'B2',
    order: 9,
    prerequisites: ['past-tense'],
    objectives: [
      'Say what you would do',
      'Make a polite request with htio bih rather than a bare demand',
      'Build if-clauses that hold together',
    ],
  },
  {
    id: 'unreal-conditions',
    level: 'B2',
    order: 10,
    prerequisites: ['conditional'],
    objectives: [
      'Say what would have happened if things had been different',
      'Choose da for the unreal where ako marks the real',
      'Stop producing ako bih, which marks a learner immediately',
    ],
  },
  {
    id: 'wishes-regrets',
    level: 'B2',
    order: 11,
    prerequisites: ['unreal-conditions'],
    objectives: [
      'Express a wish and a regret: Da barem…, Trebao sam…',
      'Separate should from should have, and could from could have',
      'Use volio bih da for someone else and the infinitive for yourself',
    ],
  },
  {
    id: 'modal-nuance',
    level: 'B2',
    order: 12,
    prerequisites: ['conditional'],
    objectives: [
      'Calibrate advice against obligation using the conditional',
      'Use the modals for probability as well as necessity',
      'Keep smjeti apart from moći — permission is not ability',
    ],
  },
  {
    id: 'complex-sentences',
    level: 'B2',
    order: 13,
    prerequisites: ['clitics'],
    objectives: [
      'Join clauses with da, koji, jer and kad',
      'Keep word order intact once a subordinate clause is attached',
      'Say what someone else said without garbling the tense',
    ],
  },
  {
    id: 'concession-contrast',
    level: 'B2',
    order: 14,
    prerequisites: ['complex-sentences'],
    objectives: [
      'Concede a point before disagreeing with it',
      'Use the Iako…, ipak… shape that structures a Croatian argument',
      'Remember that unatoč and usprkos take the DATIVE',
    ],
  },
  {
    id: 'prepositions-advanced',
    level: 'B2',
    order: 15,
    prerequisites: ['i-declension'],
    objectives: [
      'Read the prepositions that take more than one case',
      'Tell za stolom from za stol, and po kruh from po gradu',
      'Check the case before the dictionary when a preposition seems wrong',
    ],
  },
  {
    id: 'degrees-intensity',
    level: 'B2',
    order: 16,
    prerequisites: ['concession-contrast'],
    objectives: [
      'Say more and more, and the more… the more…',
      'Calibrate with jedva, prilično, vrlo, izuzetno and krajnje',
      'Use the pre- prefix to mean too: preskup, prevelik, prekasno',
    ],
  },
  {
    id: 'negation-advanced',
    level: 'B2',
    order: 17,
    prerequisites: ['concession-contrast'],
    objectives: [
      'Deny precisely rather than wholesale',
      'Use ni… ni…, nikakav and ne samo… nego i…',
      'Say without doing something, which Croatian builds as a clause',
    ],
  },
  {
    id: 'argument-structure',
    level: 'B2',
    order: 18,
    prerequisites: ['concession-contrast'],
    objectives: [
      'Give the advantages and disadvantages of an option — the level descriptor',
      'Open on a topic with Što se tiče… and close with Sve u svemu…',
      'Use the fixed shape u tome što, which is not guessable from its parts',
    ],
  },
  {
    id: 'hedging-precision',
    level: 'B2',
    order: 19,
    prerequisites: ['argument-structure'],
    objectives: [
      'Say how sure you are, and how much you are claiming',
      'Hedge with the conditional alone, without extra vocabulary',
      'Attribute a claim rather than owning it: navodno, koliko ja znam',
    ],
  },
  {
    id: 'abstract-topics',
    level: 'B2',
    order: 20,
    prerequisites: ['argument-structure'],
    objectives: [
      'Discuss ideas, society and values',
      'Build abstract nouns with -ost, and know they are i-declension feminines',
      'Carry the fixed prepositions: ovisiti O, odnositi se NA',
    ],
  },
  {
    id: 'writing-registers',
    level: 'B2',
    order: 21,
    prerequisites: ['vi-vs-ti'],
    objectives: [
      'Write an email that lands at the right level of formality',
      'Move between spoken, written and official registers deliberately',
      'Recognise which forms belong only in writing',
    ],
  },
  {
    id: 'formal-email',
    level: 'B2',
    order: 22,
    prerequisites: ['writing-registers'],
    objectives: [
      'Write a Croatian formal email that looks like one',
      'Use Poštovani and choose between S poštovanjem and Lijep pozdrav',
      'Keep the V-form, capitalised, from the first word to the last',
    ],
  },
  {
    id: 'presentations',
    level: 'B2',
    order: 23,
    prerequisites: ['argument-structure'],
    objectives: [
      'Structure a talk and signpost every turn in it',
      'Refer to what is on screen, and close with Hvala na pažnji',
      'Handle a question you cannot answer without losing composure',
    ],
  },
  {
    id: 'meetings-negotiation',
    level: 'B2',
    order: 24,
    prerequisites: ['presentations'],
    objectives: [
      'Take a turn in a meeting without being rude',
      'Propose with Predlažem da and a present-tense clause',
      'Disagree by conceding first, and close the loop explicitly',
    ],
  },
  {
    id: 'business-economy',
    level: 'B2',
    order: 25,
    prerequisites: ['meetings-negotiation'],
    objectives: [
      'Read and discuss the business pages',
      'Use the native words: dobit, gubitak, gospodarstvo',
      'Understand why the tourist season carries so much economic weight',
    ],
  },
  {
    id: 'politics-society',
    level: 'B2',
    order: 26,
    prerequisites: ['abstract-topics'],
    objectives: [
      'Follow Croatian political reporting',
      'Name the institutions, starting with the Sabor',
      'Handle izbori, which has no singular and takes plural agreement',
    ],
  },
  {
    id: 'small-talk-fluency',
    level: 'B2',
    order: 27,
    prerequisites: ['hedging-precision'],
    objectives: [
      'Hesitate in Croatian rather than in silence',
      'Keep a conversation alive when a word will not come',
      'React while listening, because attentive silence reads as scepticism',
    ],
  },
  {
    id: 'humour-irony',
    level: 'B2',
    order: 28,
    prerequisites: ['small-talk-fluency'],
    objectives: [
      'Hear when a Croatian does not mean it literally',
      'Read the ma particle and the habit of understatement',
      'Answer self-deprecation the way it expects to be answered',
    ],
  },
  {
    id: 'language-history',
    level: 'B2',
    order: 29,
    prerequisites: ['abstract-topics'],
    objectives: [
      'Understand why standard Croatian is shaped the way it is',
      'Place the three dialect groups: štokavski, čakavski, kajkavski',
      'See the ije/je alternation as the jat reflex rather than an irregularity',
    ],
  },
  {
    id: 'literature-canon',
    level: 'B2',
    order: 30,
    prerequisites: ['language-history'],
    objectives: [
      'Choose a first Croatian book that will not defeat you',
      'Talk about a novel: radnja, lik, prijevod',
      'Read a page before reaching for the dictionary, not the other way round',
    ],
  },

  // ── C1 ────────────────────────────────────────────────────────────────────
  //
  // C1 had EIGHT lessons and was, before this wave, the level where the app
  // stopped teaching and started assuming. The eight covered clitic order,
  // word formation, the aorist, verbal nouns, collective numbers, idiom and
  // language identity — good lessons, but the level descriptor is "can use
  // language flexibly and effectively for social, academic and professional
  // purposes" and there was nothing academic, nothing professional, nothing on
  // register beyond a single idiom lesson, and no explanation anywhere of which
  // case a verb governs — the single most common source of C1-level error.
  //
  // The order below has a hinge at `condensation` (7): everything before it is
  // about getting a sentence RIGHT, everything after is about choosing between
  // sentences that are all right. The professional/academic block (18–23) sits
  // above the machinery it needs, and the domain block (24–27) above that.
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
    id: 'verb-government',
    level: 'C1',
    order: 3,
    prerequisites: ['prepositions-advanced'],
    objectives: [
      'Know which case each common verb demands, and stop guessing',
      'Use the verbs whose case differs from the English preposition',
      'Recognise that a verb changing case changes its meaning',
    ],
  },
  {
    id: 'aspect-nuance',
    level: 'C1',
    order: 4,
    prerequisites: ['aspect-suffixes'],
    objectives: [
      'Choose an aspect where both are grammatical and only one is right',
      'Use the imperfective for politeness, habit and attempt',
      'Hear what a native speaker means by the aspect they chose',
    ],
  },
  {
    id: 'aorist-imperfekt',
    level: 'C1',
    order: 5,
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
    order: 6,
    prerequisites: ['passive-voice'],
    objectives: [
      'Turn a verb into a noun, the way formal Croatian prefers',
      'Use present and past participles as modifiers',
      'Compress a whole clause into a single phrase',
    ],
  },
  {
    id: 'condensation',
    level: 'C1',
    order: 7,
    prerequisites: ['verbal-nouns'],
    objectives: [
      'Compress a subordinate clause into a phrase, and expand it back',
      'Choose between a clause and a phrase for the register you want',
      'Write the dense Croatian that formal prose expects',
    ],
  },
  {
    id: 'tvorba-rijeci',
    level: 'C1',
    order: 8,
    prerequisites: ['verbal-nouns'],
    objectives: [
      'Predict a word’s meaning from its prefix and suffix',
      'Build new words the way the language itself does',
      'Read unfamiliar vocabulary without reaching for a dictionary',
    ],
  },
  {
    id: 'diminutives-augmentatives',
    level: 'C1',
    order: 9,
    prerequisites: ['tvorba-rijeci'],
    objectives: [
      'Form diminutives and augmentatives and know what they signal',
      'Hear affection, contempt and irony in a suffix',
      'Avoid the diminutive that turns a serious sentence comic',
    ],
  },
  {
    id: 'collective-numbers',
    level: 'C1',
    order: 10,
    prerequisites: ['numbers-nouns'],
    objectives: [
      'Count mixed groups of people, where ordinary numbers fail',
      'Use dvoje, troje and the collective forms correctly',
      'Refer to pairs and sets naturally',
    ],
  },
  {
    id: 'clause-types',
    level: 'C1',
    order: 11,
    prerequisites: ['complex-sentences'],
    objectives: [
      'Name and build every subordinate clause type Croatian uses',
      'Pick the conjunction that carries the relation you mean',
      'Read a long sentence by finding its clauses first',
    ],
  },
  {
    id: 'comparison-advanced',
    level: 'C1',
    order: 12,
    prerequisites: ['degrees-intensity'],
    objectives: [
      'Compare with od, nego and the structures each one requires',
      'Use the irregular comparatives without hesitating',
      'Express proportion, gradual change and the superlative of a set',
    ],
  },
  {
    id: 'passive-choices',
    level: 'C1',
    order: 13,
    prerequisites: ['verbal-nouns'],
    objectives: [
      'Choose between the participial passive, se-passive and impersonal',
      'Know which one a Croatian writer would actually use',
      'Avoid the English-shaped passive that marks a text as translated',
    ],
  },
  {
    id: 'collocations',
    level: 'C1',
    order: 14,
    prerequisites: ['tvorba-rijeci'],
    objectives: [
      'Pair verbs and nouns the way Croatian pairs them',
      'Stop translating English collocations word by word',
      'Sound fluent by choosing the expected word, not a correct one',
    ],
  },
  {
    id: 'discourse-particles',
    level: 'C1',
    order: 15,
    prerequisites: ['word-order-emphasis'],
    objectives: [
      'Use pa, ma, baš, valjda, zar and the rest as native speakers do',
      'Soften, insist and signal attitude with a single small word',
      'Hear the difference the particle makes to an otherwise identical sentence',
    ],
  },
  {
    id: 'idioms-register',
    level: 'C1',
    order: 16,
    prerequisites: ['word-order-emphasis'],
    objectives: [
      'Use idioms that native speakers actually say',
      'Judge when an expression is too colloquial for the moment',
      'Understand humour and understatement',
    ],
  },
  {
    id: 'accent-prosody',
    level: 'C1',
    order: 17,
    prerequisites: ['clitics-advanced'],
    objectives: [
      'Understand what Croatian pitch accent is and where it falls',
      'Distinguish the word pairs that differ only in accent',
      'Phrase a sentence so the stresses land where a native ear expects',
    ],
  },
  {
    id: 'summarising-paraphrase',
    level: 'C1',
    order: 18,
    prerequisites: ['condensation'],
    objectives: [
      'Summarise a Croatian text without copying its sentences',
      'Report what a source says with the right reporting verb',
      'Say the same thing three ways and pick the best one',
    ],
  },
  {
    id: 'academic-writing',
    level: 'C1',
    order: 19,
    prerequisites: ['summarising-paraphrase'],
    objectives: [
      'Structure an essay the way Croatian academic writing structures one',
      'Use the impersonal and passive conventions of scholarly prose',
      'Cite, hedge and conclude in the register the genre demands',
    ],
  },
  {
    id: 'debate-persuasion',
    level: 'C1',
    order: 20,
    prerequisites: ['argument-structure', 'discourse-particles'],
    objectives: [
      'Concede a point and then defeat it',
      'Build an argument aloud, with the connectives that hold it together',
      'Disagree strongly without being rude',
    ],
  },
  {
    id: 'formal-speech',
    level: 'C1',
    order: 21,
    prerequisites: ['debate-persuasion'],
    objectives: [
      'Give a toast, a thank-you and a short formal address',
      'Use the ceremonial formulas Croatian occasions expect',
      'Open and close a speech without translating an English one',
    ],
  },
  {
    id: 'translation-pitfalls',
    level: 'C1',
    order: 22,
    prerequisites: ['collocations'],
    objectives: [
      'Recognise the English structures that do not survive translation',
      'Fix the calques that mark your Croatian as translated',
      'Translate meaning rather than words, in both directions',
    ],
  },
  {
    id: 'proofreading-editing',
    level: 'C1',
    order: 23,
    prerequisites: ['academic-writing'],
    objectives: [
      'Find your own errors in the order they are worth finding',
      'Check agreement, case and clitic position systematically',
      'Edit a draft into something a native speaker would sign',
    ],
  },
  {
    id: 'media-analysis',
    level: 'C1',
    order: 24,
    prerequisites: ['clause-types'],
    objectives: [
      'Read a Croatian news article for what it does not say',
      'Recognise the passive and nominal styles that hide an agent',
      'Tell reporting from commentary in the language itself',
    ],
  },
  {
    id: 'law-administration',
    level: 'C1',
    order: 25,
    prerequisites: ['passive-choices'],
    objectives: [
      'Read a contract, a form and an official decision',
      'Decode the administrative constructions into plain Croatian',
      'Handle the paperwork a life in Croatia actually requires',
    ],
  },
  {
    id: 'science-technology',
    level: 'C1',
    order: 26,
    prerequisites: ['tvorba-rijeci'],
    objectives: [
      'Read technical and scientific Croatian without panic',
      'Know when Croatian coins a word and when it borrows one',
      'Describe a process, a measurement and a result',
    ],
  },
  {
    id: 'arts-culture',
    level: 'C1',
    order: 27,
    prerequisites: ['idioms-register'],
    objectives: [
      'Discuss a book, a film or an exhibition in Croatian',
      'Use the vocabulary of criticism without sounding like a review',
      'Say why something moved you, precisely',
    ],
  },
  {
    id: 'regional-varieties',
    level: 'C1',
    order: 28,
    prerequisites: ['accent-prosody'],
    objectives: [
      'Recognise kajkavski and čakavski when you hear them',
      'Understand the regional words that standard Croatian does not use',
      'Know which of your own forms belong to a region rather than the standard',
    ],
  },
  {
    id: 'language-identity',
    level: 'C1',
    order: 29,
    prerequisites: ['regional-varieties'],
    objectives: [
      'Understand what distinguishes Croatian from its neighbours',
      'Recognise the lexical choices that mark a text as Croatian',
      'Navigate the subject with the care it deserves',
    ],
  },
  {
    id: 'diaspora-identity',
    level: 'C1',
    order: 30,
    prerequisites: ['language-identity'],
    objectives: [
      'Talk about heritage, generation and belonging in Croatian',
      'Recognise the diaspora forms that differ from the homeland standard',
      'Answer “where are you from?” in the way the question is meant',
    ],
  },
  // ── C2 ────────────────────────────────────────────────────────────────────
  //
  // C2 had FOUR lessons — one tense, one punctuation mark, one style topic and
  // one genre — for the level a learner is meant to spend years inside. The
  // CEFR descriptor is not "more grammar": it is understanding virtually
  // everything heard or read, SYNTHESISING several sources into a coherent
  // account, RECONSTRUCTING arguments, and DIFFERENTIATING FINER SHADES OF
  // MEANING. Almost none of that was represented anywhere in the app.
  //
  // Five blocks, and the ordering is the design:
  //   1–8   PRECISION — the last five per cent, where the question stops being
  //         "is this correct" and becomes "which correct form";
  //   9–11  the tense and mood system at full range;
  //   12–15 STYLE — rhythm, irony, and the humour that needs the grammar;
  //   16–21 GENRE — the five functional styles Croatian linguistics names,
  //         plus reading text written before the modern standard;
  //   22–27 SYNTHESIS AND PRODUCTION — the CEFR descriptors, taught directly;
  //   28–30 DEPTH — phraseology, the dialects, and what a choice signals.
  //
  // The hinge is at `norma-i-uzus` (1): the level opens by establishing that
  // correctness alone has stopped being the question. Every later block
  // depends on that frame, which is why it is first rather than the tense.
  {
    id: 'norma-i-uzus',
    level: 'C2',
    order: 1,
    prerequisites: ['proofreading-editing'],
    objectives: [
      'Tell what the standard prescribes from what educated speakers do',
      'Recognise hypercorrection as its own class of error',
      'Choose a register for the reader and stay inside it',
    ],
  },
  {
    id: 'pravopis-dvojbe',
    level: 'C2',
    order: 2,
    prerequisites: ['norma-i-uzus'],
    objectives: [
      'Handle the spellings Croatians themselves argue about',
      'Write ne, the conditional and capitals by rule',
      'Be consistent where the rule is genuinely contested',
    ],
  },
  {
    id: 'zarez-interpunkcija',
    level: 'C2',
    order: 3,
    prerequisites: ['complex-sentences'],
    objectives: [
      'Place the Croatian comma by rule, not by English habit',
      'Punctuate subordinate clauses correctly',
      'Write text that reads as edited rather than drafted',
    ],
  },
  {
    id: 'sklonidba-iznimke',
    level: 'C2',
    order: 4,
    prerequisites: ['norma-i-uzus'],
    objectives: [
      'Decline foreign names instead of leaving them uninflected',
      'Handle the nouns whose plural or gender breaks the pattern',
      'Know which nouns carry two plurals with two meanings',
    ],
  },
  {
    id: 'brojevi-norma',
    level: 'C2',
    order: 5,
    prerequisites: ['collective-numbers'],
    objectives: [
      'Punctuate numbers, dates and measurements the Croatian way',
      'Choose between a declined and an undeclined number by register',
      'Keep postotak and postotni bod apart',
    ],
  },
  {
    id: 'slaganje-suptilnosti',
    level: 'C2',
    order: 6,
    prerequisites: ['sklonidba-iznimke'],
    objectives: [
      'Agree a verb with a coordinated, collective or quantity subject',
      'Stop the verb drifting to the nearest noun',
      'Know why five behaves differently from four',
    ],
  },
  {
    id: 'padezne-suptilnosti',
    level: 'C2',
    order: 7,
    prerequisites: ['verb-government'],
    objectives: [
      'Use the genitive of negation and the partitive deliberately',
      'Express time with bare cases and no preposition',
      'Read the dative of the affected person and the bare instrumental',
    ],
  },
  {
    id: 'glagolski-vid-granice',
    level: 'C2',
    order: 8,
    prerequisites: ['aspect-nuance'],
    objectives: [
      'Handle the verbs that are both aspects at once',
      'Never put a perfective in an ordinary negated imperative',
      'Know which contexts choose the aspect for you',
    ],
  },
  {
    id: 'pluskvamperfekt',
    level: 'C2',
    order: 9,
    prerequisites: ['aorist-imperfekt'],
    objectives: [
      'Express an action completed before another past action',
      'Sequence tenses across a complex narrative',
      'Read older and literary Croatian without stumbling',
    ],
  },
  {
    id: 'kondicional-drugi',
    level: 'C2',
    order: 10,
    prerequisites: ['unreal-conditions'],
    objectives: [
      'Build and use bio bih došao for what never happened',
      'Tell the second conditional from the pluperfect at a glance',
      'Know when the first conditional is already enough',
    ],
  },
  {
    id: 'glagolski-nacini',
    level: 'C2',
    order: 11,
    prerequisites: ['kondicional-drugi'],
    objectives: [
      'Express obligation personally and impersonally',
      'Hear the future used as an instruction rather than a prediction',
      'Mark your certainty with the right particle',
    ],
  },
  {
    id: 'stilske-figure',
    level: 'C2',
    order: 12,
    prerequisites: ['idioms-register'],
    objectives: [
      'Recognise and use the rhetorical figures Croatian prose favours',
      'Vary sentence rhythm deliberately',
      'Write persuasively rather than merely correctly',
    ],
  },
  {
    id: 'ritam-recenice',
    level: 'C2',
    order: 13,
    prerequisites: ['stilske-figure'],
    objectives: [
      'Vary sentence length so the reader knows what matters',
      'Use end weight to put the news where it lands',
      'Get out of a tangle by condensing or stopping',
    ],
  },
  {
    id: 'ironija-podtekst',
    level: 'C2',
    order: 14,
    prerequisites: ['humour-irony'],
    objectives: [
      'Hear the markers that turn praise into sarcasm',
      'Read Croatian understatement as the approval it is',
      'Spot written irony in register incongruity and diminutives',
    ],
  },
  {
    id: 'humor-jezicni',
    level: 'C2',
    order: 15,
    prerequisites: ['ironija-podtekst'],
    objectives: [
      'Follow puns that turn on pitch accent or a case ending',
      'Recognise the diminutive as a comic instrument',
      'Hear a dialect switch as a comic register rather than an error',
    ],
  },
  {
    id: 'administrativni-stil',
    level: 'C2',
    order: 16,
    prerequisites: ['writing-registers', 'verbal-nouns'],
    objectives: [
      'Read contracts, forms and official correspondence',
      'Write in the administrative register when you must',
      'Decode bureaucratic Croatian into plain language',
    ],
  },
  {
    id: 'publicisticki-stil',
    level: 'C2',
    order: 17,
    prerequisites: ['media-analysis'],
    objectives: [
      'Read a Croatian news text the way it was built',
      'Hear the endorsement carried by kaže, tvrdi, navodi and ističe',
      'Recognise the agentless construction that conceals a source',
    ],
  },
  {
    id: 'znanstveni-stil',
    level: 'C2',
    order: 18,
    prerequisites: ['academic-writing'],
    objectives: [
      'Navigate a Croatian paper from sažetak to literatura',
      'Write in the impersonal voice the genre expects',
      'Hedge, cite and decline cited names correctly',
    ],
  },
  {
    id: 'knjizevni-stil',
    level: 'C2',
    order: 19,
    prerequisites: ['literature-canon'],
    objectives: [
      'Recognise the aorist, imperfect and free indirect style at work',
      'Read dialect in dialogue as characterisation',
      'Parse a long literary sentence instead of being defeated by it',
    ],
  },
  {
    id: 'razgovorni-stil',
    level: 'C2',
    order: 20,
    prerequisites: ['idioms-register'],
    objectives: [
      'Recognise the shortenings and intonation questions of real speech',
      'Use diminutives for warmth rather than size',
      'Switch registers deliberately and never drift between them',
    ],
  },
  {
    id: 'stari-tekstovi',
    level: 'C2',
    order: 21,
    prerequisites: ['language-history'],
    objectives: [
      'Resolve pre-Gaj spelling by reading it aloud',
      'Read the aorist, imperfect and pluperfect as ordinary narrative',
      'Meet čakavian and kajkavian texts as the literary languages they were',
    ],
  },
  {
    id: 'sinteza-izvora',
    level: 'C2',
    order: 22,
    prerequisites: ['summarising-paraphrase'],
    objectives: [
      'Organise a synthesis by idea rather than by source',
      'State the common ground before the divergence',
      'Report what no source says as a finding',
    ],
  },
  {
    id: 'rekonstrukcija-argumenta',
    level: 'C2',
    order: 23,
    prerequisites: ['sinteza-izvora'],
    objectives: [
      'Separate premise, inference and conclusion in someone else’s case',
      'Reconstruct the strongest version before rejecting it',
      'Mark where the reconstruction ends and your voice begins',
    ],
  },
  {
    id: 'precizno-nijansiranje',
    level: 'C2',
    order: 24,
    prerequisites: ['collocations'],
    objectives: [
      'Choose between near-synonyms that a dictionary treats as equal',
      'Keep znati and poznavati, moći and znati, apart',
      'Test a word choice by collocation rather than by definition',
    ],
  },
  {
    id: 'spontani-govor',
    level: 'C2',
    order: 25,
    prerequisites: ['debate-persuasion'],
    objectives: [
      'Buy time with real Croatian fillers rather than translated English ones',
      'Repair a failing sentence in place instead of restarting it',
      'Announce a structure you can finish',
    ],
  },
  {
    id: 'prevodjenje-strucno',
    level: 'C2',
    order: 26,
    prerequisites: ['translation-pitfalls'],
    objectives: [
      'Decide what a translation is for before translating it',
      'Handle terms with no equivalent honestly',
      'Read the result as a Croatian text, without the original',
    ],
  },
  {
    id: 'uredjivanje-teksta',
    level: 'C2',
    order: 27,
    prerequisites: ['proofreading-editing'],
    objectives: [
      'Know the difference between korektura, lektura and redaktura',
      'Ask whether a sentence is wrong or merely not yours',
      'Give every change a one-line reason',
    ],
  },
  {
    id: 'frazeologija-dubinska',
    level: 'C2',
    order: 28,
    prerequisites: ['idioms-register'],
    objectives: [
      'Recognise a proverb from its opening, because that is all you will hear',
      'Read the classical and biblical allusions serious writing assumes',
      'Use them sparingly enough to sound native',
    ],
  },
  {
    id: 'dijalekti-dubinski',
    level: 'C2',
    order: 29,
    prerequisites: ['regional-varieties'],
    objectives: [
      'Follow kajkavian and čakavian rather than only recognising them',
      'Use the yat reflex to place a speaker in one word',
      'Read a dialect feature as a register choice, never as a mistake',
    ],
  },
  {
    id: 'jezik-i-drustvo',
    level: 'C2',
    order: 30,
    prerequisites: ['dijalekti-dubinski'],
    objectives: [
      'Know what your Vi, your dialect and your anglicisms signal',
      'Keep messaging Croatian out of professional writing',
      'Hold several Croatians and choose between them deliberately',
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
