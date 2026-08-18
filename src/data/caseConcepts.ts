// src/data/caseConcepts.ts
//
// CASE CONCEPT CARDS (concept-teaching directive, 2026-08-18). The audit
// finding these exist to fix: the app's only "what is a case" explanation was
// ~90 words gated at B1, while every case drill unlocked at A1 — an English
// speaker met "genitive" as an arbitrary quiz label, never as an idea.
//
// Every card teaches through the ENGLISH BRIDGE: English speakers already use
// a case system — he/him/his, who/whom, they/them/their — they have just
// never been told that's what it is. Each card names the concept in plain
// English, anchors it to something the learner already says daily, and shows
// one example plus one contrast. NO unglossed jargon: every technical term
// arrives with its plain-word translation.
//
// Consumed by CaseConceptIntro (the teaching phase every case drill now opens
// with — the AspectDrillScreen pattern, ported). Croatian follows the
// content-authoring standard: štokavski, full diacritics.

export interface CaseConceptExample {
  hr: string;
  en: string;
  note: string;
}

export interface CaseConcept {
  id: string;
  icon: string;
  /** Plain-English name: the concept, not the label. */
  title: string;
  /** The question this case answers, HR + EN. */
  question: string;
  /** What it does, in plain English. */
  whatItDoes: string;
  /** The hook to something the learner already says in English. */
  englishBridge: string;
  example: CaseConceptExample;
  counterex: CaseConceptExample;
}

/**
 * The one-time global primer shown before the learner's FIRST case drill —
 * the mental model everything else hangs on.
 */
export const WHY_WORDS_CHANGE = {
  icon: '🔑',
  title: 'Why Croatian words change',
  body:
    'You already use a case system — in English. You say "HE is here" but "I see HIM" ' +
    'and "that is HIS coat": same person, three forms, chosen by the job the word does ' +
    'in the sentence. English does this only for pronouns (he/him/his, who/whom, ' +
    'they/them/their) and marks every other job with word order and little words ' +
    '(of, to, with). Croatian does the exact same thing — it just does it on EVERY ' +
    'noun, by changing the ending. Each "case" is one job a word can have. ' +
    'Learn the job, and the ending starts to make sense.',
  example: {
    hr: 'Pas vidi mačku. / Mačka vidi psa.',
    en: 'The dog sees the cat. / The cat sees the dog.',
    note: 'The ending — not the word order — tells you who is doing the seeing.',
  },
} as const;

export const CASE_CONCEPTS: CaseConcept[] = [
  {
    id: 'nominative',
    icon: '👤',
    title: 'Nominative — the "he" form',
    question: 'tko? što? — who? what?',
    whatItDoes:
      'The dictionary form, and the form for the one DOING the action (the subject). ' +
      'When a word is the star of the sentence, it stays in its base form.',
    englishBridge:
      'This is English "he/she/they" — the form you use when the person is doing the ' +
      'action: "HE reads." Every Croatian word you look up arrives in nominative.',
    example: {
      hr: 'Žena čita knjigu.',
      en: 'The woman reads a book.',
      note: '"žena" does the reading → base form, unchanged.',
    },
    counterex: {
      hr: 'Vidim ženu.',
      en: 'I see the woman.',
      note: 'Now she is being seen, not doing — so the ending changes (that is accusative).',
    },
  },
  {
    id: 'genitive',
    icon: '🔗',
    title: 'Genitive — the "of / \'s" case',
    question: 'koga? čega? — of whom? of what?',
    whatItDoes:
      'Belonging, quantity, and absence. Where English says "of something", ' +
      '"somebody\'s", "a lot OF", or "there is no…", Croatian changes the ending instead.',
    englishBridge:
      'English "the dog\'s bone" and "a cup of tea" — the \'s and the "of" ARE this case. ' +
      'Croatian has no separate word for "of": the ending does that work.',
    example: {
      hr: 'auto moga brata',
      en: "my brother's car",
      note: 'brat → brata: the ending is the apostrophe-s.',
    },
    counterex: {
      hr: 'Nema kruha.',
      en: 'There is no bread.',
      note: 'kruh → kruha: after "nema" (there is no), the missing thing takes the of-form.',
    },
  },
  {
    id: 'dative',
    icon: '🎁',
    title: 'Dative — the "to someone" case',
    question: 'komu? čemu? — to whom? to what?',
    whatItDoes:
      'The receiver. Whoever something is given, said, sent or shown TO takes this ending — ' +
      'giving, telling, helping, writing all point at a receiver.',
    englishBridge:
      'English "give HIM the book" = "give the book TO HIM" — that to-form is exactly this ' +
      'case. Croatian marks the receiver on the word itself instead of using "to".',
    example: {
      hr: 'Dajem knjigu sestri.',
      en: 'I give the book to my sister.',
      note: 'sestra → sestri: she is the receiver.',
    },
    counterex: {
      hr: 'Vidim sestru.',
      en: 'I see my sister.',
      note: 'No receiving here — she is the direct object, so the ending is different.',
    },
  },
  {
    id: 'accusative',
    icon: '🎯',
    title: 'Accusative — the "him" case',
    question: 'koga? što? — whom? what?',
    whatItDoes:
      'The direct object: the thing the action lands on. Whatever you see, buy, eat or ' +
      'love takes this ending. Also used for the destination after "u/na" with motion.',
    englishBridge:
      'English "he → him" IS this change: "HE sees the dog" but "the dog sees HIM". ' +
      'Croatian applies that he→him switch to every noun, not just pronouns.',
    example: {
      hr: 'Vidim muškarca.',
      en: 'I see the man.',
      note: 'muškarac → muškarca: the seeing lands on him.',
    },
    counterex: {
      hr: 'Muškarac vidi mene.',
      en: 'The man sees me.',
      note: 'Now HE is the do-er (base form) and "me" carries the object ending.',
    },
  },
  {
    id: 'locative',
    icon: '📍',
    title: 'Locative — the "where-at / about" case',
    question: 'o kome? o čemu? gdje? — about whom? where at?',
    whatItDoes:
      'Location you are AT (not going to) and topics you talk ABOUT. It never appears ' +
      'alone — always after a little word: u (in), na (on/at), o (about), pri (near).',
    englishBridge:
      'English "IN Zagreb", "ON the table", "ABOUT the book" — the preposition + place ' +
      'combo. Croatian keeps the little word AND marks the noun. Key trick: going TO a ' +
      'place is a different ending than being AT it.',
    example: {
      hr: 'Živim u Zagrebu.',
      en: 'I live in Zagreb.',
      note: 'Zagreb → Zagrebu: you are AT the place (no motion).',
    },
    counterex: {
      hr: 'Idem u Zagreb.',
      en: 'I am going to Zagreb.',
      note: 'Motion toward → no -u ending: that is the destination (accusative) form.',
    },
  },
  {
    id: 'instrumental',
    icon: '🛠️',
    title: 'Instrumental — the "with / by" case',
    question: 's kim? čime? — with whom? by what means?',
    whatItDoes:
      'The tool, the means, and the company: what you do something WITH, how you travel, ' +
      'and who comes along. Tools stand alone; people take "s/sa" (with).',
    englishBridge:
      'English "write WITH a pen", "travel BY bus", "coffee WITH my sister" — one ending ' +
      'covers all three. For tools Croatian even drops the "with": the ending alone says it.',
    example: {
      hr: 'Pišem olovkom.',
      en: 'I write with a pencil.',
      note: 'olovka → olovkom: the ending IS the "with" — no extra word needed.',
    },
    counterex: {
      hr: 'Putujem sa sestrom.',
      en: 'I travel with my sister.',
      note: 'Company (a person) keeps the word "s/sa" — plus the same ending.',
    },
  },
  {
    id: 'vocative',
    icon: '📣',
    title: 'Vocative — the "calling someone" form',
    question: 'izravno obraćanje — direct address',
    whatItDoes:
      'The form for speaking TO someone — greeting, calling, getting attention. ' +
      'Only the person addressed changes; the rest of the sentence is untouched.',
    englishBridge:
      'English does this with tone and a comma: "John, come here!" Croatian gives the ' +
      'name itself a calling form: Ivan becomes "Ivane!" — you can HEAR being addressed.',
    example: {
      hr: 'Ivane, dođi!',
      en: 'Ivan, come here!',
      note: 'Ivan → Ivane: the calling form.',
    },
    counterex: {
      hr: 'Ivan dolazi.',
      en: 'Ivan is coming.',
      note: 'Talking ABOUT Ivan, not TO him → base form.',
    },
  },
  {
    id: 'clitics',
    icon: '🧲',
    title: 'Clitics — the little words with an assigned seat',
    question: 'sam, je, se, mi, ga… — where do they go?',
    whatItDoes:
      "Not a case — a seating rule. Croatian's tiny unstressed words (sam/si/je, se, " +
      'mi/ti/mu, ga/je) cannot start a sentence or stand alone: they sit in SECOND ' +
      'position, right after the first stressed word, in a fixed order.',
    englishBridge:
      'Like English contractions: "I\'ve" works, but you can\'t answer "Have you?" with ' +
      'just "\'ve" — the little word must lean on a neighbor. Croatian\'s lean into ' +
      'slot two, always.',
    example: {
      hr: 'Jučer sam ga vidio.',
      en: 'Yesterday I saw him.',
      note: '"sam ga" sits right after the first word — second position, fixed order.',
    },
    counterex: {
      hr: 'Vidio sam ga jučer.',
      en: 'I saw him yesterday.',
      note: 'Different first word, same rule: the cluster still claims slot two.',
    },
  },
];

/** Lookup by id; null for an unknown id (caller falls back to no intro). */
export function caseConceptById(id: string): CaseConcept | null {
  return CASE_CONCEPTS.find((c) => c.id === id) ?? null;
}
