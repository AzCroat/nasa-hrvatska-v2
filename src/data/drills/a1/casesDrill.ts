// src/data/drills/a1/casesDrill.ts
//
// A1 THE SEVEN CASES — the drill for the `cases` lesson.
//
// Hrvatski za početnike 1 has no single page that explains "what a case is": it works in
// the nominative through its first units (pages 11–21, "Tko je to? Što je ovo?", "To je
// moja obitelj…") and then introduces each case with its own question pair (koga? što?
// on page 37, and so on). This drill therefore tests what the lesson teaches — the idea
// of a case, the seven names, and finding the subject with Tko? and Što? — using the
// book's nominative sentences about family and the town. No case ending other than the
// nominative appears: objects are words whose form does not change (ručak, čaj, pismo).
//
// Three modes:
//   subjekt — finding the subject of a sentence
//   tkosto  — Tko? for people and animals, Što? for things
//   padezi  — what a case is, and the seven names

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CASES_MODE_LABELS: Record<string, string> = {
  subjekt: '🎯 Subjekt',
  tkosto: '❓ Tko? Što?',
  padezi: '🗺️ Padeži',
};

export const CASES_DRILL_DATA: ModeDrillItem[] = [
  // ── subjekt ───────────────────────────────────────────────────────────────
  {
    mode: 'subjekt',
    q: 'Mama danas kuha ručak. — Which word is the subject?',
    en: 'Mom is cooking lunch today.',
    opts: ['Mama', 'danas', 'kuha', 'ručak'],
    answer: 'Mama',
    tip: 'Ask Tko kuha? — Mama. She does the action, so she is the subject. ručak is what gets cooked, kuha is the verb, and danas only says when.',
  },
  {
    mode: 'subjekt',
    q: 'Naš pas spava ovdje. — Which word is the subject?',
    en: 'Our dog sleeps here.',
    opts: ['pas', 'naš', 'spava', 'ovdje'],
    answer: 'pas',
    tip: 'Ask Tko spava? — pas. The noun is the subject; naš only describes it, spava is the verb, and ovdje says where.',
  },
  {
    mode: 'subjekt',
    q: 'Danas ručak kuha tata. — Which word is the subject?',
    en: 'Today Dad is cooking lunch.',
    opts: ['tata', 'ručak', 'kuha', 'Danas'],
    answer: 'tata',
    tip: 'Ask Tko kuha? — tata. The subject does not have to come first: Croatian word order is free, so do not pick ručak just because it stands before the verb.',
  },
  {
    mode: 'subjekt',
    q: 'Kuća je stara, ali lijepa. — Which word is the subject?',
    en: 'The house is old but beautiful.',
    opts: ['Kuća', 'stara', 'lijepa', 'je'],
    answer: 'Kuća',
    tip: 'Ask Što je staro? — Kuća. The sentence is about the house. stara and lijepa describe it, and je is the verb.',
  },
  {
    mode: 'subjekt',
    q: 'Ovdje radi moja sestra. — Which word is the subject?',
    en: 'My sister works here.',
    opts: ['sestra', 'Ovdje', 'radi', 'moja'],
    answer: 'sestra',
    tip: 'Ask Tko radi? — sestra. She stands last, but she is still the one doing it. Ovdje says where, radi is the verb, and moja describes sestra.',
  },
  {
    mode: 'subjekt',
    q: 'Studenti danas čitaju novine. — Which word is the subject?',
    en: 'The students are reading the newspaper today.',
    opts: ['Studenti', 'novine', 'čitaju', 'danas'],
    answer: 'Studenti',
    tip: 'Ask Tko čita? — Studenti. novine is what they read, čitaju is the verb (plural, to match studenti), and danas says when.',
  },
  {
    mode: 'subjekt',
    q: 'Čaj svaki dan pije Ana. — Which word is the subject?',
    en: 'Ana drinks tea every day.',
    opts: ['Ana', 'Čaj', 'dan', 'pije'],
    answer: 'Ana',
    tip: 'Ask Tko pije? — Ana. Tea cannot drink, so Čaj is not the subject even though it comes first. svaki dan says how often, and pije is the verb.',
  },
  {
    mode: 'subjekt',
    q: 'More je danas mirno. — Which word is the subject?',
    en: 'The sea is calm today.',
    opts: ['More', 'danas', 'mirno', 'je'],
    answer: 'More',
    tip: 'Ask Što je mirno? — More. A thing can be the subject too. mirno describes it, danas says when, and je is the verb.',
  },
  {
    mode: 'subjekt',
    q: 'Ana i Marko ____ pismo.',
    en: 'Ana and Marko are reading a letter.',
    opts: ['čitaju', 'čita', 'čitam', 'čitaš'],
    answer: 'čitaju',
    tip: 'The verb agrees with the subject. Ana i Marko are two people, so the "they" form: čitaju. čita would fit Ana alone; čitam and čitaš are for ja and ti.',
  },

  // ── tkosto ────────────────────────────────────────────────────────────────
  {
    mode: 'tkosto',
    q: '____ čita novine? — Ana.',
    en: '… is reading the newspaper? — Ana.',
    opts: ['Tko', 'Što', 'Gdje', 'Čije'],
    answer: 'Tko',
    tip: 'The answer is a person, so the question is Tko? Što? asks about a thing, Gdje? about a place, and Čije? about an owner.',
  },
  {
    mode: 'tkosto',
    q: '____ je ovo? — To je naša kuća.',
    en: '… is this? — That is our house.',
    opts: ['Što', 'Tko', 'Gdje', 'Kako'],
    answer: 'Što',
    tip: 'A house is a thing, so Što? Tko? is only for people and animals, Gdje? asks where, and Kako? asks how.',
  },
  {
    mode: 'tkosto',
    q: '____ je to? — To je moj brat Ivan.',
    en: '… is that? — That is my brother Ivan.',
    opts: ['Tko', 'Što', 'Čiji', 'Gdje'],
    answer: 'Tko',
    tip: 'A brother is a person, so Tko? Što? would ask about a thing, Čiji? asks whose, and Gdje? asks where.',
  },
  {
    mode: 'tkosto',
    q: '____ spava tamo? — Naš pas Reks.',
    en: '… is sleeping over there? — Our dog Reks.',
    opts: ['Tko', 'Što', 'Čiji', 'Gdje'],
    answer: 'Tko',
    tip: 'Tko? is for people AND animals, so it fits a dog. Što? is only for things; Čiji? asks whose; Gdje? asks where.',
  },
  {
    mode: 'tkosto',
    q: '____ su oni? — To su moji roditelji.',
    en: '… are they? — Those are my parents.',
    opts: ['Tko', 'Što', 'Gdje', 'Kako'],
    answer: 'Tko',
    tip: 'Parents are people, so Tko? The word stays Tko even for several people. Što? is for things, Gdje? for places, and Kako? asks how.',
  },
  {
    mode: 'tkosto',
    q: '____ je staro, ali lijepo? — Naše selo.',
    en: '… is old but beautiful? — Our village.',
    opts: ['Što', 'Tko', 'Gdje', 'Čiji'],
    answer: 'Što',
    tip: 'A village is a thing, so Što? Tko? is only for people and animals, Gdje? asks where, and Čiji? asks whose.',
  },
  {
    mode: 'tkosto',
    q: 'Mama radi. — Which question finds the subject?',
    en: 'Mom is working.',
    opts: ['Tko radi?', 'Što radi?', 'Gdje radi?', 'Kako radi?'],
    answer: 'Tko radi?',
    tip: 'The subject is a person, so ask Tko? about the verb: Tko radi? — Mama. Što radi? asks what she is doing; Gdje? and Kako? ask where and how.',
  },
  {
    mode: 'tkosto',
    q: 'Auto je nov. — Which question finds the subject?',
    en: 'The car is new.',
    opts: ['Što je novo?', 'Tko je nov?', 'Čiji je auto?', 'Kakav je auto?'],
    answer: 'Što je novo?',
    tip: 'A car is a thing, so ask Što? — Što je novo? Auto. Tko? is for people and animals; Čiji? asks for the owner and Kakav? for a description.',
  },
  {
    mode: 'tkosto',
    q: 'Tko? asks about ____.',
    opts: ['people and animals', 'things', 'places', 'times'],
    answer: 'people and animals',
    tip: 'Tko? is "who" and covers people and animals. Things take Što?, places take Gdje?, and times take Kada?',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'How many cases does Croatian have?',
    opts: ['7', '4', '6', '3'],
    answer: '7',
    tip: 'Croatian has seven cases: nominativ, genitiv, dativ, akuzativ, vokativ, lokativ and instrumental. Each one is a job a word can do in a sentence.',
  },
  {
    mode: 'padezi',
    q: 'Which case is the dictionary form of a noun?',
    opts: ['nominativ', 'akuzativ', 'genitiv', 'lokativ'],
    answer: 'nominativ',
    tip: 'A dictionary lists nouns in the nominative: kuća, grad, more. The other three are forms the noun takes for other jobs, and each gets its own lesson.',
  },
  {
    mode: 'padezi',
    q: 'English "he / him / his" works like a case system. Which pair shows the same idea?',
    opts: ['they / them', 'big / bigger', 'go / went', 'cat / cats'],
    answer: 'they / them',
    tip: 'they / them is one word in two forms, chosen by its job in the sentence: that is a case. big / bigger compares, go / went is tense, and cat / cats is number.',
  },
  {
    mode: 'padezi',
    q: 'In Croatian, what mainly shows who does what in a sentence?',
    opts: [
      'the ending of the word',
      'the order of the words',
      'a capital letter',
      'a word like "the"',
    ],
    answer: 'the ending of the word',
    tip: 'The ending carries the job, which is why word order can move around. English relies on word order; Croatian has no word for "the", and capitals mark names.',
  },
  {
    mode: 'padezi',
    q: 'Which of these is NOT one of the seven cases?',
    opts: ['infinitiv', 'dativ', 'vokativ', 'instrumental'],
    answer: 'infinitiv',
    tip: 'The infinitive is the dictionary form of a VERB (čitati, raditi), not a case. Dativ, vokativ and instrumental are three of the seven cases.',
  },
  {
    mode: 'padezi',
    q: 'In "Ana čita", why is Ana in the nominative?',
    opts: [
      'She is the one doing the action',
      'She is the first word',
      'Ana is a name',
      'Ana ends in -a',
    ],
    answer: 'She is the one doing the action',
    tip: 'The nominative marks the subject, the doer. Position does not decide it, and neither does being a name or the ending -a: any noun can be a subject.',
  },
  {
    mode: 'padezi',
    q: 'A noun you know shows up with a different ending. What has happened?',
    opts: [
      'It is the same word doing a different job',
      'It is a different word',
      'It is always a plural',
      'It is a spelling mistake',
    ],
    answer: 'It is the same word doing a different job',
    tip: 'A new ending means a new job in the sentence, not a new word. It is not necessarily a plural, and it is not a mistake.',
  },
  {
    mode: 'padezi',
    q: 'Which case, taught in the next lesson, marks the object — what you see, have or want?',
    opts: ['akuzativ', 'nominativ', 'vokativ', 'lokativ'],
    answer: 'akuzativ',
    tip: 'The accusative marks the object. The nominative is the subject, the vocative is for calling someone, and the locative says where something is.',
  },
  {
    mode: 'padezi',
    q: 'The words you have learned so far — kuća, brat, more, gradovi — are all in which case?',
    opts: ['nominativ', 'akuzativ', 'dativ', 'instrumental'],
    answer: 'nominativ',
    tip: 'Everything so far, singular and plural, has been the nominative: the subject form. The other three cases have endings you have not met yet.',
  },
];
