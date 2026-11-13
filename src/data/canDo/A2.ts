// src/data/canDo/A2.ts
//
// CAN-DO STATEMENTS FOR THE A2 UNITS (academic recommendation 6, 2026-09-29).
//
// Two or three per unit, in plain learner-facing English, each beginning "I can …"
// and each something a learner can check against themselves: an action, not a topic.
// Drawn from the spine `objectives` of the unit's five lessons
// (functions/api/content/_data/curriculum.js), so a statement never promises more
// than the unit teaches.
//
// Keyed by unit id — level + 1-based position in level, e.g. 'A2-4' — the same keys
// as COURSE_UNIT_TITLES. A unit whose five lessons change must have its statements
// re-read, exactly as its title must.

export const CAN_DO_A2: Readonly<Record<string, readonly string[]>> = {
  // present · vi-vs-ti · declension-review · adjective-agreement · relational-adjectives
  'A2-1': [
    'I can use irregular verbs such as ići, moći and htjeti in the present tense.',
    'I can choose between ti and Vi and switch to ti when I am invited to.',
    'I can make an adjective agree with its noun and turn a town into an adjective, such as splitski or riječki.',
  ],
  // possessive-adjectives-cases · official-forms · accusative-adjectives · accusative-deep · svoj
  'A2-2': [
    'I can say whose something is in any case, as in u Aninoj kući or s Markovim bratom.',
    'I can answer an official’s questions about my birth, address and occupation.',
    'I can put a noun and its adjective in the accusative and use svoj for my own.',
  ],
  // clitic-order · verbs-nuti · weekend-plans · hobbies-free-time · school-studies
  'A2-3': [
    'I can line up short pronouns in the right order, as in Dao sam joj ga.',
    'I can talk about my weekend plans and book a room.',
    'I can say what I do in my free time and what and where I study.',
  ],
  // grocery-shopping · visiting-customs · locative-adjectives · dative-locative · plural-cases
  'A2-4': [
    'I can buy food in the amounts Croatians use, such as kilogram jabuka or deset deka sira.',
    'I can greet my hosts, accept or refuse food politely and thank them with Hvala na pozivu.',
    'I can say where something is with adjectives in the locative, as in u velikom gradu.',
  ],
  // prepositions-action · work-jobs · quality-of-life · problems-at-work · informal-email
  'A2-5': [
    'I can say where something is going and where it is, choosing the right case after u and na.',
    'I can talk about my job, give my opinion with mislim da and complain mildly about problems.',
    'I can write an email to a friend that opens with Dragi or Draga and closes warmly.',
  ],
  // house-home · describing-people · aspect · aspect-pairs · aspect-in-past
  'A2-6': [
    'I can describe my home room by room and say what someone looks like and what they are like.',
    'I can use common aspect pairs such as pisati and napisati.',
    'I can tell an activity from a result in the past: Čitao sam knjigu, Pročitao sam knjigu.',
  ],
  // adverbs · conditional-forms · conditional-wishes · conditional-if · imperative-review
  'A2-7': [
    'I can say how and how often something is done with adverbs such as brzo, često and rijetko.',
    'I can ask politely and say what I would like, as in Biste li mi mogli pomoći?',
    'I can say what I would do if things were different and give commands such as Daj mi ga!',
  ],
  // vocative-review · modal-verbs-a2 · volunteering · agreeing-disagreeing · dative-adjectives
  'A2-8': [
    'I can address people correctly, from Ivane to dame i gospodo.',
    'I can say what I can, must and may do, and talk about whom I help as a volunteer.',
    'I can agree and disagree politely, as in Slažem se s tobom or Ne bih rekao.',
  ],
  // possessive-dative · verbs-with-dative-a2 · impersonal · impersonal-feelings · car-and-traffic
  'A2-9': [
    'I can say whose something is and what happened to it with a short dative, as in Ukrali su mi novčanik.',
    'I can say how I feel and whom I miss: Hladno mi je, Nedostaješ mi.',
    'I can explain a car problem to a mechanic, as in Auto mi se pokvario.',
  ],
  // travel-transport · public-transport · phone-calls-a2 · plans-invitations · celebrations-holidays
  'A2-10': [
    'I can buy a ticket, read a timetable and ask where to get off or change.',
    'I can make a formal phone call and leave a voicemail message.',
    'I can invite someone out, fix a time and place, and wish people Sretan Božić.',
  ],
};
