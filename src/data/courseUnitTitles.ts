// src/data/courseUnitTitles.ts
//
// THE UNIT NAMES (Step 3, 2026-09-26).
//
// The ONLY authored part of the course structure. Units themselves are derived
// by chunking the spine (see src/lib/courseUnits.ts) precisely so that 180
// lesson ids are not restated in a second file that can drift; a name, though,
// cannot be derived from five lesson titles without reading like a list.
//
// So this is a short list of strings, and the drift risk they carry is answered by a test
// rather than by a comment: `courseUnitTitles.test.ts` pins every unit's FIRST
// and LAST lesson id, so a spine reorder that changes what a unit spans fails
// and NAMES the unit whose title has to be re-read. A title describing five
// lessons it no longer covers is exactly the failure the derivation avoids
// everywhere else.
//
// VOICE: the `objectives` voice from the spine — learner-facing plain English,
// "you will be able to…", no grammar jargon without a gloss. The subtitle says
// what the learner can DO when the unit is finished, because that is the only
// honest thing a unit name can promise before the unit test exists to check it.

export interface CourseUnitTitle {
  title: string;
  subtitle: string;
}

/** Keyed by unit id — level + 1-based position in level, e.g. 'A1-4'. */
export const COURSE_UNIT_TITLES: Readonly<Record<string, CourseUnitTitle>> = {
  // ── A1 ──────────────────────────────────────────────────────────────────────
  'A1-1': {
    title: 'Sounds, Hellos and Being',
    subtitle: 'Read any Croatian word aloud, greet people, and say who you are and are not.',
  },
  'A1-2': {
    title: 'Naming Things, One and Many',
    subtitle:
      'Tell a noun’s gender, point at things, ask simple questions, and make a noun plural.',
  },
  'A1-3': {
    title: 'Work, Countries and Numbers',
    subtitle:
      'Say what you do, where you are from and which language you speak, and count to a thousand.',
  },
  'A1-4': {
    title: 'Names, Family and Plurals',
    subtitle:
      'Say your name, introduce your family, and form the plurals that add -ovi or change their last consonant.',
  },
  'A1-5': {
    title: 'Describing and Doing',
    subtitle:
      'Handle the disappearing a, describe things in colour, say whose they are, and use regular verbs.',
  },
  'A1-6': {
    title: 'Saying No, and the First Case',
    subtitle:
      'Say what you do not do, use -irati verbs, learn what a case is, and name what you see and want.',
  },
  'A1-7': {
    title: 'Having, Needing and Being Allowed',
    subtitle: 'Say what you have, book a hotel room, and say what you can, must, need and may do.',
  },
  'A1-8': {
    title: 'Money, Days and Going Places',
    subtitle: 'Change money, name the days, and say where you are going and who something is for.',
  },
  'A1-9': {
    title: 'Pronouns, Trips and Meals',
    subtitle: 'Use me, te and ga correctly, book a trip, and order food and drink.',
  },
  'A1-10': {
    title: 'Shopping and Where Things Are',
    subtitle: 'Use -iti and -jeti verbs, shop for clothes, and say where something is.',
  },
  'A1-11': {
    title: 'Talking About, Months and Home',
    subtitle:
      'Talk about someone, use -ovati verbs, name the months, describe a flat, and make a phone call.',
  },
  'A1-12': {
    title: 'The Past and the Weather',
    subtitle:
      'Say what you did, including with irregular verbs, ask about the past, tell a short story, and talk about the weather.',
  },
  'A1-13': {
    title: 'The Future and the Dative',
    subtitle:
      'Say what you will do, make plans, say who something is for or towards, and use short pronouns.',
  },
  'A1-14': {
    title: 'Giving, Liking and the Daily Routine',
    subtitle:
      'Give and send things to people, say what you like, write a postcard, and describe your day.',
  },
  'A1-15': {
    title: 'School and the Instrumental',
    subtitle:
      'Use reflexive verbs in the past and future, talk about school, and say who you are with and how you travel.',
  },
  'A1-16': {
    title: 'Under, Between and the Genitive',
    subtitle:
      'Say where something is with pred and pod, use sa mnom, and start using the genitive.',
  },
  'A1-17': {
    title: 'From, At and How Many',
    subtitle: 'Use iz, od, do, kod and bez, count things correctly, and give a date.',
  },
  'A1-18': {
    title: 'Years, Health and Special Nouns',
    subtitle: 'Say a year, describe what hurts, and use nouns like stvar and hlače correctly.',
  },
  'A1-19': {
    title: 'Free Time, Feelings and Instructions',
    subtitle:
      'Talk about sport and free time, say how you feel, and tell someone to do or not to do something.',
  },
  'A1-20': {
    title: 'Addressing People and Travelling in Croatia',
    subtitle:
      'Use verbs like doći and moći, address someone correctly, find your way, and plan a trip.',
  },

  // ── A2 ──────────────────────────────────────────────────────────────────────
  'A2-1': {
    title: 'Address, Agreement and Possession',
    subtitle:
      'Choose between ti and Vi, make adjectives agree, use svoj, and put objects in the accusative.',
  },
  'A2-2': {
    title: 'Plural, Place and Home',
    subtitle:
      'Use the cases in the plural, choose the right preposition for an action, and describe where you live.',
  },
  'A2-3': {
    title: 'People, Work and Study',
    subtitle:
      'Describe a person, talk about work and study, choose between the two aspects, and say what you must do.',
  },
  'A2-4': {
    title: 'Comparing, Joining and Free Time',
    subtitle: 'Compare two things, join two clauses, say “the one that…”, and talk about hobbies.',
  },
  'A2-5': {
    title: 'Plans, Travel and Celebrations',
    subtitle:
      'Make an arrangement, buy a ticket, say what is done without naming who did it, and greet on a holiday.',
  },

  // ── B1 ──────────────────────────────────────────────────────────────────────
  'B1-1': {
    title: 'The Cases in Depth and Aspect',
    subtitle:
      'Use the genitive and instrumental with confidence, count nouns correctly, and start choosing between aspects.',
  },
  'B1-2': {
    title: 'Aspect, Prefixes and Movement',
    subtitle:
      'Choose perfective or imperfective, read what a prefix does to a verb, and come, go and put things correctly.',
  },
  'B1-3': {
    title: 'Time, Conditions and Reports',
    subtitle:
      'Sequence events in one sentence, give a real condition, say why, report what someone said, and say “the one who…”.',
  },
  'B1-4': {
    title: 'Stories, Opinions and Problems',
    subtitle:
      'Narrate an event, say what you think and feel, complain properly, and deal with an office.',
  },
  'B1-5': {
    title: 'Home, Work and the World',
    subtitle:
      'Rent a flat, handle a job interview, follow the news, and talk about technology and nature.',
  },
  'B1-6': {
    title: 'Food and Cooking',
    subtitle: 'Talk about food and cooking, from a recipe to a restaurant table.',
  },

  // ── B2 ────────────────────────────────────────────────────────────────────
  'B2-1': {
    title: 'Word Order, and Aspect’s Hard Cases',
    subtitle:
      'Place the little words where a native does, and pick the right aspect after a modal or a negative command.',
  },
  'B2-2': {
    title: 'The Passive and the Conditional',
    subtitle:
      'Say what was done without naming who did it, and what would happen if things were different.',
  },
  'B2-3': {
    title: 'Nuance, Concession and Regret',
    subtitle: 'Express a regret, grade an obligation, and concede a point without giving it away.',
  },
  'B2-4': {
    title: 'Building an Argument',
    subtitle: 'Argue a case, hedge a claim precisely, and discuss ideas rather than things.',
  },
  'B2-5': {
    title: 'Register at Work',
    subtitle: 'Write a formal email, give a presentation, and hold your side of a negotiation.',
  },
  'B2-6': {
    title: 'Society, Humour and the Language Itself',
    subtitle:
      'Follow a political discussion, keep a conversation going, and hear when a Croatian does not mean it literally.',
  },

  // ── C1 ────────────────────────────────────────────────────────────────────
  'C1-1': {
    title: 'Precision in the Core Grammar',
    subtitle:
      'Order the little words exactly, put the emphasis where you mean it, and read the literary past tenses.',
  },
  'C1-2': {
    title: 'Word-Building and Condensation',
    subtitle:
      'Turn clauses into phrases, build new words from old ones, and count people the Croatian way.',
  },
  'C1-3': {
    title: 'Clauses, Collocation and Attitude',
    subtitle:
      'Use the full range of clauses, choose words that belong together, and carry attitude in one small word.',
  },
  'C1-4': {
    title: 'Idiom, Accent and Argument',
    subtitle:
      'Use an idiom correctly, hear the four accents, summarise fairly, and hold a position under pressure.',
  },
  'C1-5': {
    title: 'Formal, Legal and Critical Croatian',
    subtitle:
      'Speak on an occasion, spot a false friend, proofread your own writing, and read a contract without panic.',
  },
  'C1-6': {
    title: 'Specialist Fields and Identity',
    subtitle:
      'Discuss science and the arts, place a speaker by how they talk, and talk about a half-inherited language.',
  },

  // ── C2 ────────────────────────────────────────────────────────────────────
  'C2-1': {
    title: 'The Standard and Its Arguments',
    subtitle:
      'Know what the standard says, where educated speakers differ, and how to punctuate and decline the hard cases.',
  },
  'C2-2': {
    title: 'Where the Rules Run Out',
    subtitle:
      'Handle agreement with a complicated subject, case that carries meaning on its own, and the moods for what never happened.',
  },
  'C2-3': {
    title: 'Style, Rhythm and Subtext',
    subtitle:
      'Write with intent, control the rhythm of a sentence, and hear irony that is aimed at you.',
  },
  'C2-4': {
    title: 'The Five Functional Styles',
    subtitle:
      'Recognise and write administrative, journalistic, scientific, literary and colloquial Croatian.',
  },
  'C2-5': {
    title: 'Synthesis and Spontaneity',
    subtitle:
      'Read Croatian written before the modern standard, reconcile sources that disagree, and speak at length unprepared.',
  },
  'C2-6': {
    title: 'Professional Command',
    subtitle:
      'Translate so the result stands on its own, edit someone else’s Croatian, and read what a language choice says about a person.',
  },
};
