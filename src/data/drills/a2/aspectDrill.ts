// src/data/drills/a2/aspectDrill.ts
//
// A2 VERB ASPECT — the drill for the `aspect` lesson (the concept lesson).
//
// Follows Razgovarajte s nama! A2–B1, lesson 4 "Planovi, želje, mogućnosti", pages 62–64
// (the text "Volontiranje", the box GLAGOLSKI VID (ASPEKT) with its two columns of VIDSKI
// PAROVI, and the dialogue "Radno ljeto" of Tanja and Marin), the two-column list of
// nesvršeni and svršeni glagoli on page 91, the table GLAGOLSKI VID U RAZLIČITIM
// VREMENIMA on page 124 (Anita čita knjigu / Anita će pročitati knjigu), and the
// dictionary abbreviations svrš. and nesvrš. on page 172, used in the word list from
// page 173 on.
//
// Where the book and the lesson differ: the book names the two kinds of verbs nesvršeni
// (imperfektivni) and svršeni (perfektivni) glagoli and defines them as "radnja u procesu"
// against "gotova radnja" that has a "rezultat"; the lesson says imperfective and
// perfective, and process against completion. The drill uses both sets of words. The book
// states that a svršeni verb cannot be used in a simple present-tense sentence (Anita sada
// čita, never pročita); the lesson only implies it. The lesson also shows the past tense,
// chains of events, "kad dođeš" and the prefix patterns; those belong to the next two
// lessons (aspect-pairs, aspect-in-past) and are not drilled here. The book introduces
// aspect next to the conditional and, on page 124, adds dvovidni glagoli (ručati, čuti);
// the lesson teaches neither at this point, so neither is drilled.
//
// Every context item carries a signal that leaves only ONE aspect correct: "upravo",
// "sada" or a duration for the nesvršeni verb; "cijelo", "do kraja" or one single act for
// the svršeni verb. Habits are not tested against a svršeni present, because an iterative
// perfective (Svako jutro popijem kavu) is correct Croatian.
//
// Three modes:
//   traje      — in progress or finished: choose the verb for the situation
//   dvaGlagola — why Croatian has two verbs where English has one
//   rjecnik    — reading the dictionary: svrš., nesvrš. and the pair

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ASPECT_MODE_LABELS: Record<string, string> = {
  traje: '⏳ Traje ili gotovo?',
  dvaGlagola: '👥 Zašto dva glagola?',
  rjecnik: '📖 U rječniku',
};

export const ASPECT_DRILL_DATA: ModeDrillItem[] = [
  // ── traje ─────────────────────────────────────────────────────────────────
  {
    mode: 'traje',
    q: 'Volonteri su sada u parku: upravo ____ botanički vrt.',
    en: 'The volunteers are in the park now: at this moment they are fixing up the botanical garden.',
    opts: ['uređuju', 'urede', 'urediti', 'uređivati'],
    answer: 'uređuju',
    tip: 'upravo means at this very moment, so the work is in progress: the nesvršeni verb in the present, uređuju. urede is the svršeni present, which cannot show an action that is still going on; urediti and uređivati are infinitives with no helping verb.',
  },
  {
    mode: 'traje',
    q: 'Gdje je Anita? — U sobi je, sada ____ knjigu.',
    en: 'Where is Anita? — She is in her room, she is reading a book now.',
    opts: ['čita', 'pročita', 'pročitati', 'čitati'],
    answer: 'čita',
    tip: 'sada shows the reading is still going on, so the nesvršeni present: čita. The book says it directly: Anita sada čita, never pročita, because a svršeni verb cannot show a process that is not over. pročitati and čitati are infinitives.',
  },
  {
    mode: 'traje',
    q: 'Tanja već dva sata ____ o planovima za ljeto.',
    en: 'Tanja has been thinking about her summer plans for two hours now.',
    opts: ['razmišlja', 'razmisli', 'razmisliti', 'razmišljati'],
    answer: 'razmišlja',
    tip: 'već dva sata is a duration that is still running, so the nesvršeni present: razmišlja. razmisli is the svršeni verb, which names one finished thought and cannot last two hours; razmisliti and razmišljati are infinitives.',
  },
  {
    mode: 'traje',
    q: 'Što sada radiš? — ____ ručak, dođi za pola sata.',
    en: 'What are you doing now? — I am cooking lunch, come in half an hour.',
    opts: ['Kuham', 'Skuham', 'Skuhati', 'Kuhati'],
    answer: 'Kuham',
    tip: 'Što sada radiš? asks about an action in progress, and the lunch is not ready yet: Kuham. Skuham is the svršeni present and cannot mean "I am in the middle of it"; Skuhati and Kuhati are infinitives, not an answer about yourself.',
  },
  {
    mode: 'traje',
    q: 'Koja rečenica govori o radnji koja upravo traje?',
    en: 'Which sentence is about an action that is going on right now?',
    opts: [
      'Marin gleda film.',
      'Marin će pogledati film.',
      'Marin mora pogledati film.',
      'Marin želi pogledati film.',
    ],
    answer: 'Marin gleda film.',
    tip: 'gleda is the nesvršeni verb in the present: the movie is on and Marin is in the middle of it. The other three use pogledati, the svršeni verb: a whole movie he will, must or wants to see, not one that is running now.',
  },
  {
    mode: 'traje',
    q: 'Ne brini se, večeras ću ____ cijelu zadaću do kraja.',
    en: 'Do not worry, I will get the whole homework done tonight.',
    opts: ['napisati', 'pisati', 'pišem', 'napišem'],
    answer: 'napisati',
    tip: 'cijelu and do kraja promise a finished result, so the svršeni verb, and after ću it is the infinitive: napisati. pisati would only promise that you will spend time on it; pišem and napišem are present forms and cannot follow ću.',
  },
  {
    mode: 'traje',
    q: 'Samo trenutak! Moram ____ ovu kavu do kraja, a onda idemo.',
    en: 'Just a moment! I have to finish this coffee, and then we go.',
    opts: ['popiti', 'piti', 'pijem', 'popijem'],
    answer: 'popiti',
    tip: 'do kraja means the cup will be empty, one finished result: the svršeni verb, in the infinitive after moram: popiti. piti names only the activity, with no end; pijem and popijem are present forms and cannot follow moram.',
  },
  {
    mode: 'traje',
    q: 'Hvala na knjizi! Sutra ću ti je ____.',
    en: 'Thanks for the book! You will have it back tomorrow.',
    opts: ['vratiti', 'vraćati', 'vraćam', 'vratim'],
    answer: 'vratiti',
    tip: 'One book handed back once, with a result: the svršeni verb, in the infinitive after ću: vratiti. vraćati would mean handing it back again and again or being in the middle of it; vraćam and vratim are present forms and cannot follow ću.',
  },
  {
    mode: 'traje',
    q: 'Koja rečenica obećava gotov rezultat?',
    en: 'Which sentence promises a finished result?',
    opts: ['Kupit ću kruh.', 'Kupujem kruh.', 'Volim kupovati kruh.', 'Kupovat ću kruh.'],
    answer: 'Kupit ću kruh.',
    tip: 'kupiti is the svršeni verb: Kupit ću kruh means the bread will be bought. Kupujem kruh is the action in progress, Volim kupovati kruh is about the activity itself, and Kupovat ću kruh says you will be doing the buying, not that it gets done.',
  },

  // ── dvaGlagola ────────────────────────────────────────────────────────────
  {
    mode: 'dvaGlagola',
    q: 'pisati — napisati',
    en: 'English has one verb here, "to write". Why does Croatian have two?',
    opts: [
      'One shows the action in progress, the other shows it finished.',
      'One is for the present, the other for the past.',
      'One is polite, the other is for friends.',
      'One is for a man, the other for a woman.',
    ],
    answer: 'One shows the action in progress, the other shows it finished.',
    tip: 'This is glagolski vid, aspect: pisati is the writing going on, napisati is the writing brought to a result. It is not about tense, since both verbs have a past and a future; it is not about politeness, and verbs do not come in a male and a female version.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Na koje pitanje odgovara rečenica „Čitam knjigu“?',
    en: 'Which question does the sentence "I am reading a book" answer?',
    opts: ['Što radiš?', 'Što ćeš napraviti?', 'Što moraš napraviti?', 'Što želiš napraviti?'],
    answer: 'Što radiš?',
    tip: 'Čitam is a nesvršeni verb in the present: an action in progress, and that is what Što radiš? asks about. The three questions with napraviti ask for a result you will, must or want to reach, and they need a svršeni verb such as pročitati.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Što ćeš napraviti do sutra? — ____',
    en: 'What will you get done by tomorrow?',
    opts: ['Pročitat ću knjigu.', 'Čitam knjigu.', 'Čitati knjigu.', 'Volim čitati knjige.'],
    answer: 'Pročitat ću knjigu.',
    tip: 'Što ćeš napraviti? asks for a result, so the answer needs the svršeni verb in the future: Pročitat ću knjigu. Čitam knjigu is what you are doing now, Čitati knjigu has no ću, and Volim čitati knjige is about what you like.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Što znači „Popit ću kavu“?',
    opts: [
      'I will drink the coffee up.',
      'I am drinking coffee right now.',
      'I like to drink coffee.',
      'I will be drinking coffee for hours.',
    ],
    answer: 'I will drink the coffee up.',
    tip: 'popiti is the svršeni verb: the coffee will be finished. "Right now" would be Pijem kavu, "I like to" would be Volim piti kavu, and "for hours" is a duration, which needs the nesvršeni piti: Pit ću kavu.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Što znači „Učim hrvatski“?',
    opts: [
      'I am in the process of learning Croatian.',
      'I already know Croatian perfectly.',
      'I will have Croatian mastered by Friday.',
      'I have to master Croatian.',
    ],
    answer: 'I am in the process of learning Croatian.',
    tip: 'učiti is the nesvršeni verb: it shows the learning going on and says nothing about the end. Knowing it perfectly, having it mastered by Friday or having to master it are all results, and a result is the job of the svršeni partner, naučiti.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Nesvršeni glagoli izražavaju ____.',
    en: "Complete the book's rule about imperfective verbs.",
    opts: ['radnju u procesu', 'gotovu radnju', 'rezultat radnje', 'kraj radnje'],
    answer: 'radnju u procesu',
    tip: 'A nesvršeni (imperfective) verb shows radnja u procesu, an action in progress. gotova radnja (a finished action), rezultat (the result) and kraj (the end) are all what the svršeni verb shows.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Svršeni glagol pokazuje da radnja ima ____.',
    en: "Complete the book's rule about perfective verbs.",
    opts: ['rezultat', 'trajanje', 'proces', 'naviku'],
    answer: 'rezultat',
    tip: 'A svršeni (perfective) verb says the action is done and has a rezultat. trajanje (duration), proces (a process) and navika (a habit) are what the nesvršeni verb is for.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Zašto ne možemo reći „Anita sada pročita knjigu“?',
    en: 'Why is this wrong for "Anita is reading a book now"?',
    opts: [
      'A svršeni verb cannot show an action that is still going on.',
      'The word sada has to come first in the sentence.',
      'The noun knjigu is in the wrong case.',
      'A book cannot be the object of this verb.',
    ],
    answer: 'A svršeni verb cannot show an action that is still going on.',
    tip: 'pročitati names a finished reading, and something happening now is not finished, so the present needs the nesvršeni verb: Anita sada čita knjigu. The word order is fine, knjigu is the right accusative, and pročitati knjigu is a normal phrase in the future.',
  },
  {
    mode: 'dvaGlagola',
    q: 'Marin uči riječi. / Marin će naučiti riječi.',
    en: 'What does only the SECOND sentence tell you?',
    opts: [
      'That he will know the words at the end.',
      'That he is studying at this moment.',
      'That the studying takes a long time.',
      'That he does not like studying.',
    ],
    answer: 'That he will know the words at the end.',
    tip: 'naučiti is the svršeni verb, so the second sentence promises the result: the words will be learned. Studying at this moment is what the first sentence says with uči; neither sentence says how long it takes or whether he likes it.',
  },

  // ── rjecnik ───────────────────────────────────────────────────────────────
  {
    mode: 'rjecnik',
    q: 'U rječniku piše: „baciti svrš.“ Što znači kratica svrš.?',
    en: 'The dictionary entry has an abbreviation after the verb. What does it stand for?',
    opts: [
      'perfective: the action is seen as finished',
      'imperfective: the action is in progress',
      'the verb is irregular',
      'the verb is used only in the plural',
    ],
    answer: 'perfective: the action is seen as finished',
    tip: 'svrš. is short for svršeni vid, the perfective aspect: baciti is one finished throw. The imperfective is marked nesvrš., as in bacati; the abbreviation says nothing about irregular forms or about the plural.',
  },
  {
    mode: 'rjecnik',
    q: 'Koja oznaka stoji u rječniku uz glagol „učiti“?',
    en: 'Which label does the dictionary print next to the verb meaning to study, to be learning?',
    opts: ['nesvrš.', 'svrš.', 'mr', 'mn'],
    answer: 'nesvrš.',
    tip: 'učiti is the process of learning, so the label is nesvrš., nesvršeni vid. svrš. belongs to its partner naučiti; mr (muški rod, masculine) and mn (množina, plural) are labels for nouns, not for verbs.',
  },
  {
    mode: 'rjecnik',
    q: 'U popisu riječi stoji par: jesti — ____.',
    en: 'The word list gives two verbs for "to eat". Which one is the partner?',
    opts: ['pojesti', 'popiti', 'pogledati', 'pokazati'],
    answer: 'pojesti',
    tip: 'The two verbs of a pair share one meaning: jesti is eating in progress and pojesti is eating something up. popiti is the partner of piti (to drink), pogledati of gledati (to watch) and pokazati of pokazivati (to show).',
  },
  {
    mode: 'rjecnik',
    q: 'Koji glagol je par glagola „vraćati se“?',
    en: 'Which verb is the partner of the verb meaning to be coming back?',
    opts: ['vratiti se', 'vrtjeti se', 'veseliti se', 'vidjeti se'],
    answer: 'vratiti se',
    tip: 'A pair keeps the same meaning: vraćati se is the coming back in progress, vratiti se is the return completed. vrtjeti se means to spin, veseliti se to look forward to something, and vidjeti se to see each other.',
  },
  {
    mode: 'rjecnik',
    q: 'Mladi uređuju vrtove i uče hrvatski.',
    en: 'What kind of verbs are uređuju and uče in this sentence?',
    opts: [
      'nesvršeni: they show work in progress',
      'svršeni: they show a finished result',
      'one of each kind',
      'neither kind: they are nouns',
    ],
    answer: 'nesvršeni: they show work in progress',
    tip: 'uređivati and učiti are both nesvršeni: the sentence describes what the young people are busy doing, with no end in view. The svršeni partners would be urediti and naučiti, and both words are verbs in the present, not nouns.',
  },
  {
    mode: 'rjecnik',
    q: 'Želim naučiti hrvatski i napraviti nešto korisno.',
    en: 'What do naučiti and napraviti have in common?',
    opts: [
      'Both are svršeni: each names a result.',
      'Both are nesvršeni: each names a process.',
      'Both are in the present tense.',
      'Both are nouns.',
    ],
    answer: 'Both are svršeni: each names a result.',
    tip: 'naučiti (to get something learned) and napraviti (to get something made) are both svršeni: the speaker wants results. The process verbs would be učiti and raditi; here both words are infinitives after želim, not present forms and not nouns.',
  },
  {
    mode: 'rjecnik',
    q: 'U koji stupac ide glagol „dolaziti“?',
    en: 'The book sorts verbs into two columns. Which column does this verb go in?',
    opts: [
      'nesvršeni glagoli, next to raditi and učiti',
      'svršeni glagoli, next to napraviti and naučiti',
      'both columns',
      'neither column',
    ],
    answer: 'nesvršeni glagoli, next to raditi and učiti',
    tip: 'dolaziti shows the coming as a process, so it stands with the nesvršeni verbs raditi and učiti. Its svršeni partner is doći, which goes with napraviti and naučiti. It has one aspect only, so it cannot stand in both columns or in neither.',
  },
  {
    mode: 'rjecnik',
    q: 'U engleskom rječniku: to buy. U hrvatskom rječniku: ____',
    en: 'One English verb, two Croatian verbs. Which two?',
    opts: [
      'kupovati and kupiti',
      'kupovati and prodavati',
      'kupiti and kupac',
      'kupovati and kupovina',
    ],
    answer: 'kupovati and kupiti',
    tip: 'The pair is kupovati (nesvrš., the buying in progress) and kupiti (svrš., the purchase made). prodavati means to sell, kupac is a noun (a buyer), and kupovina is a noun too (shopping).',
  },
  {
    mode: 'rjecnik',
    q: 'Rječnik ima dva glagola za „to read“. Koji trebaš za rečenicu „I will read the whole book through“?',
    opts: ['pročitati', 'čitati', 'čitanje', 'čitatelj'],
    answer: 'pročitati',
    tip: 'The whole book, read through, is a result, so you need the verb marked svrš.: pročitati. čitati is marked nesvrš. and shows only the reading in progress; čitanje (reading) and čitatelj (a reader) are nouns.',
  },
  {
    mode: 'rjecnik',
    q: 'Koji glagol u rječniku ima oznaku svrš.?',
    en: 'Which of these verbs does the dictionary mark as perfective?',
    opts: ['pogledati', 'gledati', 'pričati', 'otvarati'],
    answer: 'pogledati',
    tip: 'pogledati is a finished look, so it is marked svrš. gledati (to be watching), pričati (to be telling) and otvarati (to be opening) all show an action in progress and are marked nesvrš.',
  },
];
