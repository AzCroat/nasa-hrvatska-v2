// src/data/drills/a2/adverbsDrill.ts
//
// A2 ADVERBS — the drill for the `adverbs` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 46, 104–105, 116 and 133: the five friends
// in the student dorm ("Lako uči i uvijek dobiva izvrsne ocjene", "Oni se lijepo druže i
// dobro se slažu", Igor who works well for his bosses), the grammar box "Komparacija
// priloga", the visiting customs ("često zovu prijatelje", "Gosti obično dolaze…", "još
// dugo razgovarati u hodniku i na vratima"), the working customs ("ponekad teško naći
// posao") and the writer's memories ("svaki dan", "nikad nisam objavio", "Rano sam počeo
// čitati").
//
// Where the book and the lesson differ: the book takes the plain adverb for granted and
// only gives a grammar box for its comparison (bolje, lakše, brže, najviše). The lesson
// teaches the step before that: making the adverb from the neuter adjective (brz → brzo),
// the adverbs of place and time, and how often, with "nikad" and a negative verb. The
// drill practices the lesson's material with the adverbs the book's texts use; the
// comparison is left for the comparatives lesson that follows.
//
// Three modes:
//   tvorba       — from adjective to adverb, and telling the two apart
//   kolikoCesto  — uvijek, često, obično, ponekad, rijetko, nikad (+ ne)
//   gdjeKada     — adverbs of place and time: vani, gore, blizu, odmah, rano, uskoro

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ADVERBS_MODE_LABELS: Record<string, string> = {
  tvorba: '🛠️ Kako?',
  kolikoCesto: '🔁 Koliko često?',
  gdjeKada: '📍 Gdje? Kada?',
};

export const ADVERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Anita ____ uči i ima izvrsnu ocjenu.',
    en: 'Anita learns easily and has an excellent grade.',
    cue: 'lak',
    opts: ['lako', 'lak', 'laka', 'laki'],
    answer: 'lako',
    tip: 'The word says how she learns, so it is an adverb, and the adverb is the neuter form of the adjective: lak → lako. lak, laka and laki are adjective forms that need a noun to describe.',
  },
  {
    mode: 'tvorba',
    q: 'Prijatelji se ____ druže.',
    en: 'The friends get along nicely.',
    cue: 'lijep',
    opts: ['lijepo', 'lijep', 'lijepa', 'lijepi'],
    answer: 'lijepo',
    tip: 'How they spend time together is an adverb: lijep → lijepo. It does not agree with prijatelji, because it describes the verb. lijep, lijepa and lijepi are adjective forms.',
  },
  {
    mode: 'tvorba',
    q: 'U knjižnici govorimo ____.',
    en: 'In the library we speak quietly.',
    cue: 'tih',
    opts: ['tiho', 'tih', 'tiha', 'tihi'],
    answer: 'tiho',
    tip: 'How we speak is an adverb, the neuter form of the adjective: tih → tiho. tih, tiha and tihi describe a noun, and there is no noun here to describe.',
  },
  {
    mode: 'tvorba',
    q: 'Njegova gitara je ____, ali on svira loše.',
    en: 'His guitar is good, but he plays badly.',
    opts: ['dobra', 'dobro', 'dobar', 'dobru'],
    answer: 'dobra',
    tip: 'Here the word describes the noun gitara, so it is an adjective and must agree with it: dobra. dobro would be right for how he plays, not for the guitar; dobar is masculine and dobru is an object form.',
  },
  {
    mode: 'tvorba',
    q: 'Igor radi ____ i šefovi su zadovoljni.',
    en: 'Igor does good-quality work and his bosses are happy.',
    cue: 'kvalitetan',
    opts: ['kvalitetno', 'kvalitetan', 'kvalitetna', 'kvalitetni'],
    answer: 'kvalitetno',
    tip: 'How Igor works is an adverb: kvalitetan → kvalitetno, the neuter form. kvalitetan, kvalitetna and kvalitetni are adjective forms and would need a noun.',
  },
  {
    mode: 'tvorba',
    q: 'Susjedi ____ slušaju glazbu i ne mogu spavati.',
    en: 'The neighbors are playing music loudly and I cannot sleep.',
    cue: 'glasan',
    opts: ['glasno', 'glasan', 'glasna', 'glasni'],
    answer: 'glasno',
    tip: 'How they play the music is an adverb: glasan → glasno. It stays the same even though susjedi is plural. glasan, glasna and glasni are adjective forms.',
  },
  {
    mode: 'tvorba',
    q: 'Alen ____ pleše, ali voli plesati.',
    en: 'Alen dances badly, but he likes to dance.',
    cue: 'loš',
    opts: ['loše', 'loš', 'loša', 'loši'],
    answer: 'loše',
    tip: 'After a soft consonant such as š the neuter form ends in -e, not -o, so the adverb is loše. loš, loša and loši are adjective forms.',
  },
  {
    mode: 'tvorba',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (The professor explains clearly.)',
    opts: [
      'Profesorica jasno objašnjava.',
      'Profesorica jasna objašnjava.',
      'Profesorica jasan objašnjava.',
      'Profesorica jasnu objašnjava.',
    ],
    answer: 'Profesorica jasno objašnjava.',
    tip: 'How she explains is an adverb, and an adverb never agrees with the subject: jasno. jasna, jasan and jasnu are adjective forms, and none of them can describe a verb.',
  },
  {
    mode: 'tvorba',
    q: 'Ponekad je ____ naći posao.',
    en: 'Sometimes it is hard to find a job.',
    cue: 'težak',
    opts: ['teško', 'težak', 'teška', 'teški'],
    answer: 'teško',
    tip: 'In a sentence with no subject, "je" is followed by the neuter form, which is also the adverb: težak → teško. težak, teška and teški would each need a noun to agree with.',
  },

  // ── kolikoCesto ───────────────────────────────────────────────────────────
  {
    mode: 'kolikoCesto',
    q: 'Gosti ____ malo kasne: to je običaj.',
    en: 'Guests usually arrive a little late: it is the custom.',
    opts: ['obično', 'nikad', 'rijetko', 'jučer'],
    answer: 'obično',
    tip: 'A custom is what people usually do: obično. nikad would need a negative verb, rijetko means rarely and goes against "it is the custom", and jučer means yesterday.',
  },
  {
    mode: 'kolikoCesto',
    q: 'Anita je odlična studentica. ____ ima izvrsnu ocjenu.',
    en: 'Anita is a great student. She always has an excellent grade.',
    opts: ['Uvijek', 'Nikad', 'Rijetko', 'Sutra'],
    answer: 'Uvijek',
    tip: 'A great student gets top grades every time: Uvijek. Nikad would need "nema", Rijetko says the opposite of a great student, and Sutra means tomorrow.',
  },
  {
    mode: 'kolikoCesto',
    q: 'Na Mljetu još ____ nisam bila, ali želim ići.',
    en: 'I have never been to Mljet yet, but I want to go.',
    opts: ['nikad', 'uvijek', 'često', 'obično'],
    answer: 'nikad',
    tip: 'She wants to go because she has not been there, and with the negative nisam the word is nikad: two negatives together are the rule in Croatian. uvijek, često and obično do not fit "još … nisam".',
  },
  {
    mode: 'kolikoCesto',
    q: 'Alma nikad ____ na predavanja u osam ujutro.',
    en: 'Alma never goes to the eight o’clock lectures.',
    opts: ['ne ide', 'ide', 'ići', 'idu'],
    answer: 'ne ide',
    tip: 'nikad is a negative word, so the verb has to be negative too: nikad ne ide. ide leaves the verb positive, ići is the infinitive, and idu is plural and still positive.',
  },
  {
    mode: 'kolikoCesto',
    q: 'Igor puno radi i ____ ide u kino — samo jedanput godišnje.',
    en: 'Igor works a lot and rarely goes to the movie theater — only once a year.',
    opts: ['rijetko', 'često', 'uvijek', 'nikad'],
    answer: 'rijetko',
    tip: 'Once a year is rarely: rijetko. često and uvijek say the opposite, and nikad would need "ne ide" and would not fit with once a year.',
  },
  {
    mode: 'kolikoCesto',
    q: 'Hrvati vole goste i ____ zovu prijatelje u svoj dom.',
    en: 'Croatians love having guests and often invite friends to their home.',
    opts: ['često', 'rijetko', 'nikad', 'jučer'],
    answer: 'često',
    tip: 'People who love having guests invite them often: često. rijetko says the opposite, nikad would need "ne zovu", and jučer means yesterday and would need the past tense.',
  },
  {
    mode: 'kolikoCesto',
    q: 'U Finskoj je ____ teško naći posao, ali ne uvijek.',
    en: 'In Finland it is sometimes hard to find a job, but not always.',
    opts: ['ponekad', 'nikad', 'sutra', 'vani'],
    answer: 'ponekad',
    tip: '"But not always" tells you it happens some of the time: ponekad. nikad would need "nije", sutra means tomorrow, and vani means outside.',
  },
  {
    mode: 'kolikoCesto',
    q: '„Katkad idem na posao pješice.“ Koja riječ znači isto što i „katkad“?',
    en: 'Which word means the same as "katkad"?',
    opts: ['ponekad', 'uvijek', 'nikad', 'obično'],
    answer: 'ponekad',
    tip: 'katkad and ponekad both mean sometimes, now and then. uvijek is always, nikad is never, and obično is usually.',
  },
  {
    mode: 'kolikoCesto',
    q: 'Izaberi točnu rečenicu.',
    en: 'Which sentence is correct? (We rarely travel in the winter.)',
    opts: [
      'Zimi rijetko putujemo.',
      'Zimi rijetko ne putujemo.',
      'Zimi rijetka putujemo.',
      'Zimi rijetki putujemo.',
    ],
    answer: 'Zimi rijetko putujemo.',
    tip: 'rijetko is not a negative word, so the verb stays positive, and as an adverb it never changes form. "rijetko ne putujemo" would mean we rarely stay home; rijetka and rijetki are adjective forms.',
  },

  // ── gdjeKada ──────────────────────────────────────────────────────────────
  {
    mode: 'gdjeKada',
    q: 'Djeca nisu u kući. Igraju se ____, u vrtu.',
    en: 'The kids are not in the house. They are playing outside, in the yard.',
    opts: ['vani', 'unutra', 'gore', 'jučer'],
    answer: 'vani',
    tip: 'Not in the house but in the yard is outside: vani. unutra means inside, gore means upstairs, and jučer is a time word, yesterday.',
  },
  {
    mode: 'gdjeKada',
    q: 'Ured je na trećem katu. Šef je ____, a ja sam dolje na ulazu.',
    en: 'The office is on the third floor. The boss is upstairs, and I am down at the entrance.',
    opts: ['gore', 'vani', 'daleko', 'sutra'],
    answer: 'gore',
    tip: 'The opposite of dolje is gore, up or upstairs. vani means outside, daleko means far away, and sutra is a time word, tomorrow.',
  },
  {
    mode: 'gdjeKada',
    q: 'Kasnimo! Moramo ____ krenuti.',
    en: 'We are late! We have to leave right away.',
    opts: ['odmah', 'jučer', 'rijetko', 'nikad'],
    answer: 'odmah',
    tip: 'When you are late you leave at once: odmah. jučer is yesterday, rijetko means rarely, and nikad means never and would need a negative verb.',
  },
  {
    mode: 'gdjeKada',
    q: 'Stanujem ____ fakulteta: samo pet minuta pješice.',
    en: 'I live near the college: only five minutes on foot.',
    opts: ['blizu', 'daleko', 'gore', 'vani'],
    answer: 'blizu',
    tip: 'Five minutes on foot is near, and blizu can stand right before a genitive: blizu fakulteta. daleko says the opposite and needs od, and gore and vani do not take a noun.',
  },
  {
    mode: 'gdjeKada',
    q: 'Pisac je ____ počeo čitati: imao je samo tri godine.',
    en: 'The writer started reading early: he was only three years old.',
    opts: ['rano', 'kasno', 'sutra', 'tamo'],
    answer: 'rano',
    tip: 'Reading at the age of three is early: rano. kasno means late, sutra is tomorrow and cannot go with the past tense, and tamo means there.',
  },
  {
    mode: 'gdjeKada',
    q: 'Gosti još ____ razgovaraju u hodniku i na vratima.',
    en: 'The guests go on talking for a long time in the hallway and at the door.',
    opts: ['dugo', 'daleko', 'sutra', 'gore'],
    answer: 'dugo',
    tip: 'For a long time is dugo. daleko is about distance, not time; sutra means tomorrow; and gore means upstairs, which does not fit with the hallway and the door.',
  },
  {
    mode: 'gdjeKada',
    q: 'Cesta je uska. Vozi ____, molim te!',
    en: 'The road is narrow. Drive slowly, please!',
    opts: ['polako', 'brzo', 'glasno', 'jučer'],
    answer: 'polako',
    tip: 'On a narrow road you ask a driver to go slowly: polako. brzo means fast, glasno means loudly, and jučer means yesterday and cannot go with a request.',
  },
  {
    mode: 'gdjeKada',
    q: '____ smo bili u kinu, a sutra idemo u kazalište.',
    en: 'Yesterday we were at the movie theater, and tomorrow we are going to the theater.',
    opts: ['Jučer', 'Uskoro', 'Odmah', 'Sada'],
    answer: 'Jučer',
    tip: 'The past tense "smo bili" and the contrast with sutra point to yesterday: Jučer. Uskoro means soon, Odmah right away, and Sada now, and none of them goes with something already over.',
  },
  {
    mode: 'gdjeKada',
    q: 'Vlak dolazi za pet minuta. ____ će biti ovdje.',
    en: 'The train arrives in five minutes. It will be here soon.',
    opts: ['Uskoro', 'Jučer', 'Rijetko', 'Daleko'],
    answer: 'Uskoro',
    tip: 'In five minutes is soon: Uskoro. Jučer means yesterday and cannot go with the future, Rijetko means rarely, and Daleko means far away.',
  },
];
