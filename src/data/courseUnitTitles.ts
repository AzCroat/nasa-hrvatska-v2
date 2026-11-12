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
    title: 'Verbs, Vi and the Case Table',
    subtitle:
      'Conjugate the irregular verbs, choose ti or Vi, see all seven cases together, and make adjectives agree.',
  },
  'A2-2': {
    title: 'Whose Is It? Forms and Objects',
    subtitle:
      'Say whose something is in any case, fill in an official form, and put adjectives and objects in the accusative.',
  },
  'A2-3': {
    title: 'Small Words, Weekends and Study',
    subtitle:
      'Put the short words in the right order, use verbs like krenuti and doći, and talk about your weekend, hobbies and studies.',
  },
  'A2-4': {
    title: 'Shopping, Visiting and More Cases',
    subtitle:
      'Buy food by the kilo, behave well as a guest, and use adjectives and plurals in the dative and locative.',
  },
  'A2-5': {
    title: 'Work, Opinions and Writing Home',
    subtitle:
      'Talk about your job and its problems, say what makes a good life, and write an email to a friend.',
  },
  'A2-6': {
    title: 'Home, People and Verb Aspect',
    subtitle:
      'Describe your home and the people in it, and choose between an ongoing and a finished action.',
  },
  'A2-7': {
    title: 'Would, Could and Commands',
    subtitle:
      'Say how and how often, use the conditional for wishes, requests and imagined conditions, and give any command.',
  },
  'A2-8': {
    title: 'Calling, Helping and Agreeing',
    subtitle:
      'Address people correctly, say what you can and must do, talk about helping others, and agree or disagree politely.',
  },
  'A2-9': {
    title: 'To Me, For Me: The Dative',
    subtitle:
      'Use the short dative for whose and how you feel, use the verbs that take it, and get help when your car breaks down.',
  },
  'A2-10': {
    title: 'Getting Around and Getting Together',
    subtitle:
      'Buy tickets and find your stop, make a polite phone call, invite people out, and wish them well on holidays.',
  },

  // ── B1 ──────────────────────────────────────────────────────────────────────
  'B1-1': {
    title: 'Comparing People and Things',
    subtitle:
      'Compare and rank with bolji and najbolji, describe character and looks, and pay or accept a compliment.',
  },
  'B1-2': {
    title: 'Aspect, Prefixes and Time',
    subtitle:
      'Choose the right aspect in any tense, read a verb by its prefix, and link events with kad, čim and dok.',
  },
  'B1-3': {
    title: 'If, And, But, and With Whom',
    subtitle:
      'State real conditions, join sentences with a, ali and nego, and use the instrumental with adjectives and verbs.',
  },
  'B1-4': {
    title: 'Applying, Reacting and Moving',
    subtitle:
      'Apply for a job in writing and at an interview, say how pleased you are, and describe movement and position.',
  },
  'B1-5': {
    title: 'The Genitive in Depth',
    subtitle:
      'Use the genitive for possession, absence, numbers and dates, including adjectives and the tricky plural forms.',
  },
  'B1-6': {
    title: 'Stories, News and Feelings',
    subtitle:
      'Say when and for how long, talk about fears and memories, tell a story from start to finish, and follow the news.',
  },
  'B1-7': {
    title: 'Names, Love and Koji',
    subtitle:
      'Decline ime and dijete, conjugate verbs like peći, talk about names and relationships, and use koji clauses.',
  },
  'B1-8': {
    title: 'Someone, Whose and What I Think',
    subtitle:
      'Use richer relative clauses and words like netko and nitko, give opinions, decline foreign names, and conjugate davati.',
  },
  'B1-9': {
    title: 'Reasons, Reports and Complaints',
    subtitle:
      'Talk about Croats abroad, give reasons and aims, report what others said, and complain politely but firmly.',
  },
  'B1-10': {
    title: 'Daily Life: Offices to Kitchens',
    subtitle:
      'Deal with offices and rental adverts, use digital vocabulary, discuss nature, and follow a Croatian recipe.',
  },

  // ── B2 ──────────────────────────────────────────────────────────────────────
  'B2-1': {
    title: 'Tricky Nouns, Verbs and False Friends',
    subtitle:
      'Handle irregular masculine plurals and -ati verbs, make a verb imperfective again, and avoid the false friends.',
  },
  'B2-2': {
    title: 'Feminine Forms and Language History',
    subtitle:
      'Decline tricky feminine nouns, conjugate -ivati verbs, choose aspect after other verbs, and discuss life online.',
  },
  'B2-3': {
    title: 'Rights, Politics and Clitics',
    subtitle:
      'Use international words, negate and command with the right aspect, place clitics, and discuss rights and politics.',
  },
  'B2-4': {
    title: 'Koji, Idioms and Croatian Books',
    subtitle:
      'Use koji in every case, say what someone became, use idioms like zdrav kao dren, and talk about books.',
  },
  'B2-5': {
    title: 'Body, Health and Everyday Slang',
    subtitle:
      'Use nitko and ništa in every case, say what hurts, grade intensity, recognise slang, and talk about staying healthy.',
  },
  'B2-6': {
    title: 'Agreement, Family and Fluency',
    subtitle:
      'Make words agree with tata, braća and numbers, decline nouns like stvar, discuss family change, and keep talking.',
  },
  'B2-7': {
    title: 'Sebe, the Passive and University',
    subtitle:
      'Use sebe and sobom, form both passives, build nouns from verbs, and describe studying in Croatia.',
  },
  'B2-8': {
    title: 'Conditionals, Habits and Business',
    subtitle:
      'Use the conditional for requests and past habits, build nouns for people and qualities, and discuss the economy.',
  },
  'B2-9': {
    title: 'Linking Clauses and Conceding',
    subtitle:
      'Join and nest clauses, concede before disagreeing, read adverts critically, and use prepositions with two cases.',
  },
  'B2-10': {
    title: 'Wishes, Regrets and Unreal Ifs',
    subtitle:
      'Give reasons and purposes, say what would have happened, express wishes and regrets, and talk about film and music.',
  },
  'B2-11': {
    title: 'Negation, Hedging and the Climate',
    subtitle:
      'Use the genitive of negation, read -ći and -vši forms, hedge a claim, and discuss natural disasters.',
  },
  'B2-12': {
    title: 'Reporting, Reacting and Arguing',
    subtitle:
      'Report questions and commands, use interjections, talk about sport and travel, read irony, and build an argument.',
  },
  'B2-13': {
    title: 'Formal Writing and Speaking',
    subtitle:
      'Discuss abstract topics, write a formal email at the right register, give a presentation, and negotiate in meetings.',
  },

  // ── C1 ──────────────────────────────────────────────────────────────────────
  'C1-1': {
    title: 'Clitics, Measures and Abbreviations',
    subtitle:
      'Order any clitic cluster, decline kći, express measures, draw conclusions, and write abbreviations correctly.',
  },
  'C1-2': {
    title: 'Numbers, Collectives and Commas',
    subtitle:
      'Write numbers and dates by the norm, decline collective nouns, express time in the accusative, and place basic commas.',
  },
  'C1-3': {
    title: 'Word Order and Verb Government',
    subtitle:
      'Shift emphasis with word order, use time phrases in the locative, build ne samo… nego i, and know each verb’s case.',
  },
  'C1-4': {
    title: 'Fine Aspect and the Croatian Comma',
    subtitle:
      'Choose aspect where both are possible, decline posao and dio, use rarer prepositions, and punctuate dependent clauses.',
  },
  'C1-5': {
    title: 'Clauses, Verbal Nouns and Subtle Cases',
    subtitle:
      'Build every clause type, compress clauses into nouns, use the emphatic genitive, and make verbs agree with two subjects.',
  },
  'C1-6': {
    title: 'Agreement, Condensation and Collocations',
    subtitle:
      'Agree verbs with complex subjects, state causes and consequences, write dense prose, and name the people of a town.',
  },
  'C1-7': {
    title: 'Names, Passives and Word Building',
    subtitle:
      'Use the genitive after a noun, capitalise names and places, choose the right passive, build words, and count groups of men.',
  },
  'C1-8': {
    title: 'Exceptions, Groups and Tone',
    subtitle:
      'Decline the nouns that break the rules, count mixed groups, use the ethical dative, capitalise institutions, and hear tone.',
  },
  'C1-9': {
    title: 'Particles, Idioms and Nuance',
    subtitle:
      'Choose nov or novi, use exclamations like Blago tebi!, compare with precision, and use particles and idioms naturally.',
  },
  'C1-10': {
    title: 'Prefixes, Prosody and Academic Writing',
    subtitle:
      'Speak without a subject, use verbal prefixes, hear pitch accent, summarise and paraphrase, and write an academic essay.',
  },
  'C1-11': {
    title: 'Old Tenses, Quotes and Debate',
    subtitle:
      'Read the aorist, imperfect and pluperfect, use kao da and nego što, punctuate direct speech, and win a debate.',
  },
  'C1-12': {
    title: 'Speeches, Translation and Official Texts',
    subtitle:
      'Give a formal address, avoid translation traps, edit your own Croatian, read the media critically, and handle legal texts.',
  },
  'C1-13': {
    title: 'Science, Culture and Identity',
    subtitle:
      'Read technical Croatian, discuss the arts, recognise regional varieties, and talk about language and heritage.',
  },

  // ── C2 ──────────────────────────────────────────────────────────────────────
  'C2-1': {
    title: 'Norm, Spelling and Modality',
    subtitle:
      'Tell the norm from usage, handle contested spellings, master the hard edges of aspect, and use the second conditional.',
  },
  'C2-2': {
    title: 'Style, Irony and Humour',
    subtitle:
      'Use rhetorical figures and sentence rhythm, read irony and puns, and write in the administrative register.',
  },
  'C2-3': {
    title: 'The Functional Styles and Older Texts',
    subtitle:
      'Read journalistic, scientific, literary and colloquial Croatian as each is built, and read texts written before Gaj.',
  },
  'C2-4': {
    title: 'Synthesis, Argument and Translation',
    subtitle:
      'Synthesise sources, reconstruct an argument, choose between near-synonyms, speak at length unprepared, and translate.',
  },
  'C2-5': {
    title: 'Editing, Proverbs and Dialects',
    subtitle:
      'Edit someone else’s Croatian, recognise proverbs and allusions, follow the dialects, and choose your register deliberately.',
  },
};
