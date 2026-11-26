// src/data/drills/b2/aspectWithVerbsDrill.ts
//
// B2 ASPECT AFTER ANOTHER VERB — the drill for the `aspect-with-verbs` lesson
// (B2 position 8).
//
// Three modes (9 + 9 + 10 items):
//   faza      — phase verbs (početi, počinjati, nastaviti, prestati) take only an
//               imperfective infinitive; uspjeti and zaboraviti take a perfective one
//   modal     — after a modal the choice is yours and it changes the meaning:
//               an activity (imperfective) or a finished result (perfective)
//   trajanje  — negative commands with nemoj, and anything that lasts or repeats
//               (stalno, dugo, satima, danima, godinama) goes imperfective
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 57–58 (imperfective and perfective verbs, what
//   each kind means), 58–59 (PRILOZI I GLAGOLSKI VID: dugo, stalno, cijeli dan, satima,
//   danima, mjesecima, godinama with imperfective verbs; odjednom, iznenada, odmah,
//   naglo with perfective verbs), 59 (FAZNI GLAGOLI I GLAGOLSKI VID: početi, počinjati,
//   nastaviti, nastavljati, prestati, prestajati + imperfective only), 60 (habitual
//   actions, and "za pola sata" against "pola sata"), 202 (nemoj, nemojmo, nemojte).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — it has no rule box for aspect,
//   only a "V. GLAGOLSKI VID" practice block in every unit that makes the learner pick
//   one member of a pair from the context: 32–33, 114–115 (where "Moramo što prije
//   obnoviti školu" stands beside "Moramo što prije početi obnavljati školu").
//
// Where the books and the lesson differ:
//   - The textbook allows a perfective present for habits (Svaki dan popijem jednu
//     kavu; Uvijek ona plati račun) and says an imperfective is possible there too.
//     The lesson says the verb that carries the repetition goes imperfective. So no
//     item sets the two aspects against each other after svaki dan / uvijek / često in
//     the present. Repetition items use the adverbs the textbook ties to imperfective
//     verbs (stalno, dugo, satima, danima, godinama, cijelu noć), in the past tense.
//   - The textbook prints both Nemoj pisati pismo and Nemoj napisati pismo; the lesson
//     says nemoj is normally followed by an imperfective and keeps the perfective for
//     a warning about one act (Nemoj pasti!). Nemoj items therefore carry stalno, dugo
//     or svaki dan, which leave only the imperfective.
//   - The lesson adds uspjeti, zaboraviti and voljeti, which neither book lists. They
//     are used here as the lesson teaches them.
//   - Grammar-order fence: no passive, no verbal adverbs, no conditional.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ASPECT_WITH_VERBS_MODE_LABELS: Record<string, string> = {
  faza: '▶️ Početi, prestati, uspjeti',
  modal: '🎯 Aktivnost ili rezultat',
  trajanje: '🔁 Nemoj i ponavljanje',
};

export const ASPECT_WITH_VERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── faza ──────────────────────────────────────────────────────────────────
  {
    mode: 'faza',
    q: 'Prošle je jeseni počela ____ gitaru.',
    en: 'Last fall she started playing the guitar.',
    opts: ['svirati', 'odsvirati', 'zasvirati', 'svirala'],
    answer: 'svirati',
    tip: 'Početi is a phase verb, and a phase verb takes only an imperfective infinitive: počela je svirati. Odsvirati and zasvirati are perfective, and you cannot begin a completed action. Svirala is a past tense form, not an infinitive.',
  },
  {
    mode: 'faza',
    q: 'Djeca su prestala ____ čim je ušla učiteljica.',
    en: 'The children stopped shouting as soon as the teacher came in.',
    opts: ['vikati', 'viknuti', 'povikati', 'viču'],
    answer: 'vikati',
    tip: 'Prestati is a phase verb, so the infinitive is imperfective: prestala su vikati. Viknuti (one shout) and povikati are perfective. Viču is a present tense form.',
  },
  {
    mode: 'faza',
    q: 'Nakon stanke nastavili smo ____ zadatke.',
    en: 'After the break we went on solving the exercises.',
    opts: ['rješavati', 'riješiti', 'riješili', 'rješavamo'],
    answer: 'rješavati',
    tip: 'Nastaviti means the action is still running, so it takes imperfective rješavati. Riješiti is perfective and names the finished result. Riješili and rješavamo are finite forms and cannot follow nastavili smo.',
  },
  {
    mode: 'faza',
    q: 'Svako jutro počinjem ____ u osam.',
    en: 'Every morning I start working at eight.',
    opts: ['raditi', 'odraditi', 'napraviti', 'radim'],
    answer: 'raditi',
    tip: 'Počinjati is the imperfective partner of početi, and it is a phase verb too: it takes imperfective raditi. Odraditi and napraviti are perfective. Radim is a present tense form.',
  },
  {
    mode: 'faza',
    q: 'Koja je rečenica točna?',
    opts: [
      'Prestala sam kupovati novine.',
      'Prestala sam kupiti novine.',
      'Prestala sam nakupovati novine.',
      'Prestala sam pokupovati novine.',
    ],
    answer: 'Prestala sam kupovati novine.',
    tip: 'After prestati only the imperfective kupovati is possible. Kupiti, nakupovati and pokupovati are all perfective: each names a finished purchase, and a finished action cannot be stopped.',
  },
  {
    mode: 'faza',
    q: 'Moramo što prije početi ____ stan.',
    en: 'We have to start doing up the apartment as soon as possible.',
    opts: ['uređivati', 'urediti', 'uredili', 'uredimo'],
    answer: 'uređivati',
    tip: 'Moramo could take either aspect, but the infinitive here depends on početi, and a phase verb allows only the imperfective uređivati. Urediti is perfective. Uredili and uredimo are finite forms.',
  },
  {
    mode: 'faza',
    q: 'Uspjeli smo ____ zadnji vlak.',
    en: 'We managed to catch the last train.',
    opts: ['uhvatiti', 'hvatati', 'hvatali', 'uhvatimo'],
    answer: 'uhvatiti',
    tip: 'Uspjeti is about an outcome, so it takes the perfective: uspjeli smo uhvatiti. Hvatati is imperfective and names the trying, not the success. Hvatali and uhvatimo are finite forms.',
  },
  {
    mode: 'faza',
    q: 'Zaboravila sam ____ prozor prije odlaska.',
    en: 'I forgot to close the window before leaving.',
    opts: ['zatvoriti', 'zatvarati', 'zatvorila', 'zatvaram'],
    answer: 'zatvoriti',
    tip: 'Forgetting to do one specific thing is about a result that did not happen: perfective zatvoriti. Zatvarati is imperfective and would describe the process. Zatvorila and zatvaram are finite forms.',
  },
  {
    mode: 'faza',
    q: 'Prestani se ____ i reci mi što se dogodilo.',
    en: 'Stop laughing and tell me what happened.',
    opts: ['smijati', 'nasmijati', 'nasmijao', 'smiješ'],
    answer: 'smijati',
    tip: 'Prestani is the imperative of the phase verb prestati, so the infinitive is imperfective: prestani se smijati. Nasmijati se is perfective (one laugh, done). Nasmijao and smiješ are finite forms.',
  },

  // ── modal ─────────────────────────────────────────────────────────────────
  {
    mode: 'modal',
    q: 'Do sutra moram ____ ovaj obrazac.',
    en: 'I have to get this form filled in by tomorrow.',
    opts: ['ispuniti', 'ispunjavati', 'ispunjavam', 'ispunio'],
    answer: 'ispuniti',
    tip: 'A deadline (do sutra) asks for a finished result, so the modal takes perfective ispuniti. Ispunjavati is imperfective and would only say that you spend time on it. Ispunjavam and ispunio are finite forms.',
  },
  {
    mode: 'modal',
    q: 'Cijeli vikend moram ____ za ispit.',
    en: 'I have to study for the exam all weekend.',
    opts: ['učiti', 'naučiti', 'naučio', 'učim'],
    answer: 'učiti',
    tip: 'Cijeli vikend is a stretch of time, and an action spread over a stretch is an activity: imperfective učiti. Naučiti is perfective and names the result, which does not fit "all weekend". Naučio and učim are finite forms.',
  },
  {
    mode: 'modal',
    q: 'Koja rečenica govori o gotovom rezultatu, a ne o aktivnosti?',
    opts: [
      'Večeras želim prevesti taj članak.',
      'Večeras želim malo prevoditi.',
      'Večeras želim prevoditi do ponoći.',
      'Večeras želim prevoditi u miru.',
    ],
    answer: 'Večeras želim prevesti taj članak.',
    tip: 'Perfective prevesti means the article will be translated by the end. The other three use imperfective prevoditi: they talk about spending the evening translating, with no promise that anything gets finished.',
  },
  {
    mode: 'modal',
    q: 'Koja rečenica govori o aktivnosti, a ne o gotovom rezultatu?',
    opts: [
      'Sutra moram kuhati za goste.',
      'Sutra moram skuhati ručak do podneva.',
      'Sutra moram ispeći kolač.',
      'Sutra moram pripremiti večeru.',
    ],
    answer: 'Sutra moram kuhati za goste.',
    tip: 'Imperfective kuhati describes what you will be busy with. Skuhati, ispeći and pripremiti are perfective: each one names a finished lunch, cake or dinner.',
  },
  {
    mode: 'modal',
    q: 'Možeš li mi ____ sol?',
    en: 'Can you pass me the salt?',
    opts: ['dodati', 'dodavati', 'dodaj', 'dodaješ'],
    answer: 'dodati',
    tip: 'One single act with a clear end is perfective: dodati. Dodavati is imperfective and would mean passing it again and again. Dodaj is an imperative and dodaješ a present tense form; neither can follow možeš li.',
  },
  {
    mode: 'modal',
    q: 'Ne mogu ____ ovu bocu, čep se zaglavio.',
    en: 'I cannot get this bottle open, the cap is stuck.',
    opts: ['otvoriti', 'otvarati', 'otvorio', 'otvaram'],
    answer: 'otvoriti',
    tip: 'What fails here is the result (the bottle open), so the modal takes perfective otvoriti. Otvarati would describe the activity of opening bottles in general. Otvorio and otvaram are finite forms.',
  },
  {
    mode: 'modal',
    q: 'Volim nedjeljom dugo ____.',
    en: 'I like to sleep late on Sundays.',
    opts: ['spavati', 'zaspati', 'prespavati', 'spavam'],
    answer: 'spavati',
    tip: 'Voljeti is about an activity you enjoy, so it takes the imperfective: volim spavati. Zaspati (to fall asleep) and prespavati (to sleep through something) are perfective. Spavam is a present tense form.',
  },
  {
    mode: 'modal',
    q: 'Želim ____ cijelu knjigu do kraja tjedna.',
    en: 'I want to get the whole book read by the end of the week.',
    opts: ['pročitati', 'čitati', 'čitam', 'pročitao'],
    answer: 'pročitati',
    tip: 'Cijelu knjigu and a deadline point to a finished result: perfective pročitati. Čitati would only say you want to spend time reading. Čitam and pročitao are finite forms.',
  },
  {
    mode: 'modal',
    q: 'Moramo što prije ____ krov, kiša ulazi u kuću.',
    en: 'We have to fix the roof as soon as possible; rain is getting into the house.',
    opts: ['popraviti', 'popravljati', 'popravljamo', 'popravili'],
    answer: 'popraviti',
    tip: 'Što prije asks for the result, a roof that is fixed: perfective popraviti. Popravljati is the activity and would fit only after a phase verb (početi popravljati). Popravljamo and popravili are finite forms.',
  },

  // ── trajanje ──────────────────────────────────────────────────────────────
  {
    mode: 'trajanje',
    q: 'Nemoj me stalno ____ dok govorim.',
    en: 'Do not keep interrupting me while I am talking.',
    opts: ['prekidati', 'prekinuti', 'prekinuo', 'prekineš'],
    answer: 'prekidati',
    tip: 'A negative command normally takes the imperfective, and stalno (all the time) leaves no other choice: nemoj prekidati. Prekinuti is perfective, one single interruption. Prekinuo and prekineš are finite forms.',
  },
  {
    mode: 'trajanje',
    q: 'Nemojte večeras dugo ____ televiziju.',
    en: 'Do not watch television for long tonight.',
    opts: ['gledati', 'pogledati', 'pogledali', 'gledate'],
    answer: 'gledati',
    tip: 'Nemojte + dugo (for a long time) needs the imperfective gledati. Pogledati is perfective, a single look, and cannot last "for long". Pogledali and gledate are finite forms.',
  },
  {
    mode: 'trajanje',
    q: 'Što govornik izriče rečenicom „Nemoj pasti!“?',
    opts: [
      'a warning about one accident that could happen right now',
      'a ban on a long-standing habit',
      'an order to keep doing something',
      'a polite request to begin',
    ],
    answer: 'a warning about one accident that could happen right now',
    tip: 'Pasti is perfective. After nemoj the perfective is kept for a sharp warning about one specific act. A ban on a habit takes the imperfective (Nemoj padati would be about falling again and again). Nemoj never tells someone to continue or to begin.',
  },
  {
    mode: 'trajanje',
    q: 'Nemoj svaki dan ____ istu košulju.',
    en: 'Do not wear the same shirt every day.',
    opts: ['nositi', 'ponijeti', 'donijeti', 'nosio'],
    answer: 'nositi',
    tip: 'A negative command about a daily habit takes imperfective nositi. Ponijeti (to take along) and donijeti (to bring) are perfective and mean something else. Nosio is a past tense form.',
  },
  {
    mode: 'trajanje',
    q: 'Godinama smo svake subote ____ na tržnicu.',
    en: 'For years we went to the market every Saturday.',
    opts: ['išli', 'otišli', 'otići', 'idemo'],
    answer: 'išli',
    tip: 'Godinama (for years) goes with an imperfective verb: išli smo. Otišli is perfective, one departure, and cannot repeat for years. Otići is an infinitive and idemo a present tense form; neither fits after smo.',
  },
  {
    mode: 'trajanje',
    q: 'Cijelu je noć ____ snijeg.',
    en: 'It snowed all night.',
    opts: ['padao', 'pao', 'pasti', 'pada'],
    answer: 'padao',
    tip: 'Cijelu noć is a stretch of time, so the verb is imperfective: padao je. Pao is perfective (it fell, once and done). Pasti is an infinitive and pada a present tense form.',
  },
  {
    mode: 'trajanje',
    q: 'Danima sam ____ taj izvještaj i još nije gotov.',
    en: 'I was writing that report for days and it is still not done.',
    opts: ['pisao', 'napisao', 'napisati', 'pišem'],
    answer: 'pisao',
    tip: 'Danima (for days) needs the imperfective, and the report is not finished: pisao sam. Napisao would say it is written. Napisati is an infinitive and pišem a present tense form.',
  },
  {
    mode: 'trajanje',
    q: 'Satima smo ____ na granici.',
    en: 'We waited at the border for hours.',
    opts: ['čekali', 'dočekali', 'pričekati', 'čekamo'],
    answer: 'čekali',
    tip: 'Satima (for hours) goes with an imperfective verb: čekali smo. Dočekali is perfective and means the waiting ended with an arrival. Pričekati is a perfective infinitive and čekamo a present tense form; neither fits after smo.',
  },
  {
    mode: 'trajanje',
    q: 'Prošle je godine stalno ____ na posao.',
    en: 'Last year he was late for work all the time.',
    opts: ['kasnio', 'zakasnio', 'zakasniti', 'kasni'],
    answer: 'kasnio',
    tip: 'Stalno (all the time) goes with an imperfective verb: kasnio je. Zakasnio is perfective and describes one occasion. Zakasniti is an infinitive and kasni a present tense form.',
  },
  {
    mode: 'trajanje',
    q: 'Uz koji prilog najčešće dolazi svršeni glagol?',
    opts: ['odjednom', 'satima', 'stalno', 'godinama'],
    answer: 'odjednom',
    tip: 'Odjednom (suddenly) marks one moment, and a single moment is perfective: Odjednom je ustao. Satima, stalno and godinama all describe something that lasts or repeats, so they go with imperfective verbs.',
  },
];
