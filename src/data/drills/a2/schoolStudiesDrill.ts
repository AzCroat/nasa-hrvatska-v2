// src/data/drills/a2/schoolStudiesDrill.ts
//
// A2 SCHOOL AND STUDYING — the drill for the `school-studies` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 16–18, 104, 108, 118 and 133: the students
// who learn Croatian at Croaticum ("Neki studenti uče hrvatski zato što imaju hrvatsko
// podrijetlo", "Što studirate?", Barbara: "Studiram geografiju. Stanujem blizu
// fakulteta"), the five friends in the student dorm (Anita "lako uči i uvijek dobiva
// izvrsne ocjene", Alma studies journalism, Igor math and computer science), the plans
// of the graduates ("Diplomirat ću", "upisati fakultet"), the teacher who loves "učenike
// i predmet koji predaje", and the writer's school memories (domaća zadaća, gimnazija,
// knjižnica, "predaje književnost").
//
// Where the book and the lesson differ: the book has no lesson about the school system;
// school and college words come up inside texts about students, jobs and memories. The
// lesson adds the system itself (vrtić, osnovna škola, srednja škola, gimnazija, fakultet,
// sveučilište) and the pairs učiti / studirati and učenik / student. The drill practices
// the lesson's pairs with the book's people and sentences. It needs no plural cases, no
// conditional and no aspect pairs.
//
// Three modes:
//   glagoli — učiti, studirati, predavati: the right verb and its form
//   tkoGdje — učenik or student, u školi or na fakultetu, and the places
//   ispiti  — ispit, ocjena, zadaća, predmet, predavanje, diplomirati

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SCHOOL_STUDIES_MODE_LABELS: Record<string, string> = {
  glagoli: '📖 Učim ili studiram?',
  tkoGdje: '🏫 Tko i gdje?',
  ispiti: '📝 Ispiti i ocjene',
};

export const SCHOOL_STUDIES_DRILL_DATA: ModeDrillItem[] = [
  // ── glagoli ───────────────────────────────────────────────────────────────
  {
    mode: 'glagoli',
    q: 'Ne govorim dobro hrvatski. Zato ga navečer ____ na tečaju.',
    en: 'I do not speak Croatian well. That is why I take a course in the evening.',
    opts: ['učim', 'studiram', 'predajem', 'diplomiram'],
    answer: 'učim',
    tip: 'Learning a language in a course is učiti: učim. studiram would mean a college degree in Croatian, predajem would mean you are the teacher, and diplomiram means I am graduating.',
  },
  {
    mode: 'glagoli',
    q: 'Profesor Horvat radi na fakultetu. On ____ književnost, a studenti slušaju.',
    en: 'Professor Horvat works at the college. He teaches literature, and the students listen.',
    opts: ['predaje', 'studira', 'uči', 'diplomira'],
    answer: 'predaje',
    tip: 'What a professor does in front of students is predavati: predaje književnost. studira and uči are what the students do, and diplomira means he is graduating.',
  },
  {
    mode: 'glagoli',
    q: 'Anita i Igor ____ u Zagrebu i stanuju u domu.',
    en: 'Anita and Igor go to college in Zagreb and live in a dorm.',
    opts: ['studiraju', 'studira', 'studiramo', 'studirate'],
    answer: 'studiraju',
    tip: 'Anita and Igor are oni, so the verb ends in -aju: studiraju. studira is for one person, studiramo is we, and studirate is you.',
  },
  {
    mode: 'glagoli',
    q: 'Bog, ja sam Igor. Što ti ____? — Informatiku.',
    en: 'Hi, I am Igor. What do you study? — Computer science.',
    opts: ['studiraš', 'studirate', 'studira', 'studiram'],
    answer: 'studiraš',
    tip: 'Igor says ti, so the verb ends in -š: studiraš. studirate goes with Vi, studira is he or she, and studiram is I.',
  },
  {
    mode: 'glagoli',
    q: 'Anita lako ____ i ima dobru ocjenu iz matematike.',
    en: 'Anita learns easily and has a good grade in math.',
    opts: ['uči', 'učim', 'učiš', 'uče'],
    answer: 'uči',
    tip: 'Anita is one person, ona, so the form is uči. učim is I, učiš is you, and uče is they.',
  },
  {
    mode: 'glagoli',
    q: 'Lorena želi ____ još jedan fakultet.',
    en: 'Lorena wants to enroll in one more degree program.',
    opts: ['upisati', 'predavati', 'učiti', 'diplomirati'],
    answer: 'upisati',
    tip: 'The set phrase for starting a degree is upisati fakultet. predavati means to teach, učiti does not take fakultet as its object, and diplomirati is what you do at the end, not something you do to a fakultet.',
  },
  {
    mode: 'glagoli',
    q: 'Kad sam bio dječak, ____ sam u školu u Vukovaru.',
    en: 'When I was a boy, I went to school in Vukovar.',
    opts: ['išao', 'studirao', 'predavao', 'diplomirao'],
    answer: 'išao',
    tip: 'A child goes to school: ići u školu, so išao sam u školu. studirao is only for college, predavao would make the boy the teacher, and diplomirao means graduated from college.',
  },
  {
    mode: 'glagoli',
    q: 'Neki studenti ____ hrvatski zato što imaju hrvatsko podrijetlo.',
    en: 'Some students learn Croatian because they have Croatian roots.',
    opts: ['uče', 'uči', 'učimo', 'učite'],
    answer: 'uče',
    tip: 'studenti are oni, so the verb is uče. uči is for one person, učimo is we, and učite is you.',
  },
  {
    mode: 'glagoli',
    q: 'Koja rečenica govori o fakultetu, a ne o školi?',
    en: 'Which sentence is about college, not about school?',
    opts: ['Studiram novinarstvo.', 'Idem u treći razred.', 'Ja sam učenik.', 'Idem u gimnaziju.'],
    answer: 'Studiram novinarstvo.',
    tip: 'studirati is used only for a degree at a fakultet. razred, učenik and gimnazija all belong to school: a grade, a school student, and an academic high school.',
  },

  // ── tkoGdje ───────────────────────────────────────────────────────────────
  {
    mode: 'tkoGdje',
    q: 'Anita studira elektrotehniku. Ona je ____.',
    en: 'Anita studies electrical engineering. What is she?',
    opts: ['studentica', 'učenica', 'učiteljica', 'student'],
    answer: 'studentica',
    tip: 'Someone who studies at a fakultet is a student, and a woman is a studentica. An učenica goes to school, an učiteljica teaches in one, and student is the form for a man.',
  },
  {
    mode: 'tkoGdje',
    q: 'U gimnaziji radi profesor, a uči ____.',
    en: 'At an academic high school, a teacher works and a student learns.',
    opts: ['učenik', 'student', 'učitelj', 'studentica'],
    answer: 'učenik',
    tip: 'A gimnazija is a school, and a person who learns at a school is an učenik. student and studentica are only for college, and an učitelj teaches in elementary school.',
  },
  {
    mode: 'tkoGdje',
    q: 'Sada sam na ____, imam predavanje do dva.',
    en: 'I am at the college now; I have a lecture until two.',
    opts: ['fakultetu', 'fakultet', 'fakulteta', 'fakultetom'],
    answer: 'fakultetu',
    tip: 'Where you are is na + locative: na fakultetu. na fakultet is for going there, fakulteta is the genitive, and fakultetom the instrumental.',
  },
  {
    mode: 'tkoGdje',
    q: 'Ujutro idem ____ fakultet, a moj mali brat u školu.',
    en: 'In the morning I go to college, and my little brother goes to school.',
    opts: ['na', 'u', 'iz', 'kod'],
    answer: 'na',
    tip: 'Croatian pairs each place with one preposition: u školu, but na fakultet. u is the pair for škola, iz means out of and kod means at someone’s place, and both of those take the genitive.',
  },
  {
    mode: 'tkoGdje',
    q: 'Moja sestra ima šesnaest godina i ide u ____.',
    en: 'My sister is sixteen and goes to an academic high school.',
    opts: ['gimnaziju', 'gimnazija', 'gimnaziji', 'gimnazije'],
    answer: 'gimnaziju',
    tip: 'Going somewhere is u + accusative, and a noun in -a takes -u: u gimnaziju. gimnazija is the dictionary form, gimnaziji is where you already are, and gimnazije is the genitive.',
  },
  {
    mode: 'tkoGdje',
    q: 'Dijete ima četiri godine. Ujutro ide u ____.',
    en: 'The child is four. Where does it go in the morning?',
    opts: ['vrtić', 'gimnaziju', 'srednju školu', 'razred'],
    answer: 'vrtić',
    tip: 'Before school age a child goes to vrtić, preschool. gimnazija and srednja škola are for teenagers, and a razred is a grade inside a school.',
  },
  {
    mode: 'tkoGdje',
    q: 'Filozofski fakultet je dio ____ u Zagrebu.',
    en: 'The Faculty of Philosophy is part of the University of Zagreb.',
    opts: ['Sveučilišta', 'Sveučilište', 'Sveučilištu', 'Sveučilištem'],
    answer: 'Sveučilišta',
    tip: 'A fakultet is one part of a sveučilište, and "part of" takes the genitive: dio Sveučilišta. Sveučilište is the dictionary form, Sveučilištu the dative or locative, and Sveučilištem the instrumental.',
  },
  {
    mode: 'tkoGdje',
    q: 'Moj sin ima sedam godina i ide u prvi ____.',
    en: 'My son is seven and is in first grade.',
    opts: ['razred', 'predmet', 'ispit', 'fakultet'],
    answer: 'razred',
    tip: 'A school year is a razred: ide u prvi razred. A predmet is a subject such as math, an ispit is an exam, and a fakultet is for adults and takes na, not u.',
  },
  {
    mode: 'tkoGdje',
    q: 'Anita je studentica i stanuje u ____ blizu fakulteta.',
    en: 'Anita is a college student and lives in a dorm near the college.',
    opts: ['domu', 'dom', 'doma', 'domom'],
    answer: 'domu',
    tip: 'Where she lives is u + locative: u domu, short for studentski dom. dom is the dictionary form, doma is the genitive, and domom the instrumental.',
  },

  // ── ispiti ────────────────────────────────────────────────────────────────
  {
    mode: 'ispiti',
    q: 'U lipnju imam težak ____ iz povijesti. Moram puno učiti.',
    en: 'In June I have a hard history exam. I have to study a lot.',
    opts: ['ispit', 'razred', 'fakultet', 'učenik'],
    answer: 'ispit',
    tip: 'What you take in a subject is an ispit: ispit iz povijesti. A razred is a grade, a fakultet is the institution, and an učenik is a school student.',
  },
  {
    mode: 'ispiti',
    q: 'Anita puno uči. Iz matematike ima dobru ____.',
    en: 'Anita studies a lot. She has a good grade in math.',
    opts: ['ocjenu', 'ocjena', 'ocjeni', 'ocjenom'],
    answer: 'ocjenu',
    tip: 'What she has is the object, and dobru already shows the accusative: dobru ocjenu. ocjena is the dictionary form, ocjeni the dative, and ocjenom the instrumental.',
  },
  {
    mode: 'ispiti',
    q: 'Za domaću ____ pišem sastav o Zagrebu.',
    en: 'For homework I am writing an essay about Zagreb.',
    opts: ['zadaću', 'zadaća', 'zadaće', 'zadaćom'],
    answer: 'zadaću',
    tip: 'za takes the accusative, as domaću shows: za domaću zadaću. zadaća is the dictionary form, zadaće the genitive, and zadaćom the instrumental.',
  },
  {
    mode: 'ispiti',
    q: 'Matematika je moj omiljeni ____ u školi.',
    en: 'Math is my favorite subject at school.',
    opts: ['predmet', 'razred', 'vrtić', 'učitelj'],
    answer: 'predmet',
    tip: 'Math, history and Croatian are each a predmet, a school subject. A razred is a grade, a vrtić is a preschool, and an učitelj is a teacher.',
  },
  {
    mode: 'ispiti',
    q: 'Maja u lipnju završava fakultet: ona će ____.',
    en: 'Maja finishes college in June: she is going to graduate.',
    opts: ['diplomirati', 'upisati', 'predavati', 'učiti'],
    answer: 'diplomirati',
    tip: 'Finishing a degree is diplomirati. upisati is the opposite end, enrolling; predavati is what a professor does; and učiti is what she has been doing all along.',
  },
  {
    mode: 'ispiti',
    q: 'Profesor govori, a studenti slušaju i pišu. To je ____.',
    en: 'The professor talks, and the students listen and write. What is it?',
    opts: ['predavanje', 'zadaća', 'ocjena', 'knjižnica'],
    answer: 'predavanje',
    tip: 'A class where the professor speaks is a predavanje, a lecture. zadaća is homework, an ocjena is a grade, and a knjižnica is a library.',
  },
  {
    mode: 'ispiti',
    q: 'Trebam knjigu za ispit, ali je ne želim kupiti. Idem u ____.',
    en: 'I need a book for the exam, but I do not want to buy it. Where do I go?',
    opts: ['knjižnicu', 'knjižaru', 'gimnaziju', 'vrtić'],
    answer: 'knjižnicu',
    tip: 'You borrow books in a knjižnica, a library. A knjižara is a bookstore, where you would have to buy it; a gimnazija is a high school and a vrtić is a preschool.',
  },
  {
    mode: 'ispiti',
    q: 'Kakvu ocjenu ima Anita iz matematike? — ____.',
    en: 'What kind of grade does Anita have in math? — An excellent one.',
    opts: ['Izvrsnu', 'Izvrsna', 'Izvrsno', 'Izvrsni'],
    answer: 'Izvrsnu',
    tip: 'The answer copies the form of the question: Kakvu ocjenu? — Izvrsnu, feminine accusative. Izvrsna is the subject form, Izvrsno is neuter or means "excellently", and Izvrsni is a masculine form.',
  },
  {
    mode: 'ispiti',
    q: 'Maja kaže: „Diplomirat ću i odmah tražiti posao.“ Što Maja sada radi?',
    opts: [
      'She is finishing college',
      'She is starting elementary school',
      'She teaches at a high school',
      'She is looking for a preschool',
    ],
    answer: 'She is finishing college',
    tip: 'diplomirati means to graduate from college, so Maja is at the end of her studies and will look for a job next. Nothing in her sentence is about elementary school, teaching or preschool.',
  },
];
