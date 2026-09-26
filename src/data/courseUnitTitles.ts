// src/data/courseUnitTitles.ts
//
// THE 36 UNIT NAMES (Step 3, 2026-09-26).
//
// The ONLY authored part of the course structure. Units themselves are derived
// by chunking the spine (see src/lib/courseUnits.ts) precisely so that 180
// lesson ids are not restated in a second file that can drift; a name, though,
// cannot be derived from five lesson titles without reading like a list.
//
// So this is 36 strings, and the drift risk they carry is answered by a test
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
  // ── A1 ────────────────────────────────────────────────────────────────────
  'A1-1': {
    title: 'Sounds, Hellos and Naming Things',
    subtitle: 'Read any Croatian word aloud, say who you are, and make a noun plural.',
  },
  'A1-2': {
    title: 'Asking, Doing, Denying, Describing',
    subtitle: 'Ask a question, use any regular verb, say no, and make a describing word agree.',
  },
  'A1-3': {
    title: 'People, Places and Numbers',
    subtitle: 'Point at things, introduce your family, say where you are from, and tell the time.',
  },
  'A1-4': {
    title: 'The Cases Begin (Padeži)',
    subtitle:
      'Learn what a case is, then use the accusative and the locative — and the prepositions that demand them.',
  },
  'A1-5': {
    title: 'Belonging, Addressing, Asking',
    subtitle:
      'Use the genitive and the vocative, say what you can and must do, and give an instruction.',
  },
  'A1-6': {
    title: 'Out in the World',
    subtitle: 'Order food, ask a price, find your way, and talk about the weather.',
  },

  // ── A2 ────────────────────────────────────────────────────────────────────
  'A2-1': {
    title: 'Address, Objects and the Dative',
    subtitle: 'Choose between ti and Vi, replace a noun with a pronoun, and use the dative.',
  },
  'A2-2': {
    title: 'Agreement and the Instrumental',
    subtitle:
      'Say who you are with, make adjectives agree in every case, and use svoj — the possessive English does not have.',
  },
  'A2-3': {
    title: 'Talking About Yesterday',
    subtitle: 'Build the past tense, ask and deny in it, give a date, and count things properly.',
  },
  'A2-4': {
    title: 'Comparing and Joining',
    subtitle:
      'Compare two things, join two clauses, and say “the one that…” without repeating yourself.',
  },
  'A2-5': {
    title: 'Home, Body and Work',
    subtitle: 'Describe where you live, say what hurts, and talk about what you do all day.',
  },
  'A2-6': {
    title: 'Plans, Travel and Celebrations',
    subtitle: 'Make an arrangement, buy a ticket, and know what to say on a Croatian holiday.',
  },

  // ── B1 ────────────────────────────────────────────────────────────────────
  'B1-1': {
    title: 'The Cases in Depth, and the Future',
    subtitle:
      'Use every case with confidence, count correctly, and talk about what is going to happen.',
  },
  'B1-2': {
    title: 'Verb Aspect — the Central Idea',
    subtitle:
      'Choose between the two verbs Croatian has for one English verb, and read what a prefix does to a verb.',
  },
  'B1-3': {
    title: 'Movement, Position and Sequence',
    subtitle: 'Come and go correctly, put things places, and sequence two events in one sentence.',
  },
  'B1-4': {
    title: 'Reasons, Reports and Stories',
    subtitle:
      'Say if, why and what someone else told you — then narrate an event from start to finish.',
  },
  'B1-5': {
    title: 'Opinions, Feelings and Getting Things Done',
    subtitle:
      'Say what you think, how you feel, and what has gone wrong — at the bank, the office and the flat.',
  },
  'B1-6': {
    title: 'The World You Read About',
    subtitle:
      'Handle an interview, follow a news report, and talk about technology, nature and food.',
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
