// src/data/writingCurriculum.ts
//
// GUIDED WRITING CURRICULUM (production-teaching directive, 2026-08-18).
//
// The audit that motivated this file: writing was the app's only rubric-graded
// production skill, yet it was TEST-only — WritingScreen offers a prompt and a
// grader, no model, no scaffold, and no A1 content anywhere in the app. This
// file is the teaching side: each unit walks the learner through the study →
// guided → free-production ladder that writing pedagogy actually uses:
//
//   Stage 1 STUDY   — a native-standard model text with its load-bearing
//                     structures called out (what to imitate and why).
//   Stage 2 FRAMES  — the learner completes key forms inside guided sentences
//                     (checked locally, accent-tolerant; zero AI cost).
//   Stage 3 WRITE   — free production against a visible checklist, graded by
//                     /api/correct (mode 'writeeval') — the SAME evaluator the
//                     exam uses, so practice and exam agree on "good writing".
//
// Croatian follows the content-authoring standard (owner directive 2026-07-16):
// standard štokavski, full diacritics, correct case government, second-position
// clitics, `sa` only before s/š/z/ž, V-form politeness in formal registers,
// the greeting `bog` (2026-07 owner decision). This file is scanned by
// scripts/lintCroatianText.mjs — keep it clean.
//
// Every level A1–C2 has ≥3 units (writingCurriculum.test.ts pins this): A1
// deliberately included — before this file A1 learners had NO writing content.

import type { CefrLevel } from '../lib/cefr.js';

export interface WritingStructure {
  /** The pattern as it appears in the model text (verbatim substring). */
  hr: string;
  en: string;
  /** Why this structure matters — the teaching point. */
  why: string;
}

export interface WritingFrame {
  /** Sentence fragment before the gap. */
  before: string;
  /** The expected fill (canonical form). */
  answer: string;
  /** Alternative accepted forms (gender/aspect variants). */
  accept?: string[];
  /** Sentence fragment after the gap. */
  after: string;
  /** English hint naming the target structure — teach, don't riddle. */
  hint: string;
}

export interface WritingChecklistItem {
  id: string;
  /** Shown to the learner while writing. */
  label: string;
  /** Satisfied when the text contains ANY of these (case-insensitive). */
  words?: string[];
  /** Satisfied at this word count. */
  minWords?: number;
}

export interface WritingUnit {
  id: string;
  level: CefrLevel;
  title: string;
  /** Task instruction, in Croatian. */
  prompt: string;
  promptEn: string;
  minWords: number;
  /** The model text studied in stage 1. */
  model: string;
  modelEn: string;
  structures: WritingStructure[];
  frames: WritingFrame[];
  /** Useful-words panel shown during stage 3. */
  connectives: string[];
  checklist: WritingChecklistItem[];
}

export const WRITING_CURRICULUM: WritingUnit[] = [
  // ── A1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'a1-introduce',
    level: 'A1',
    title: 'Introduce yourself',
    prompt: 'Predstavi se: kako se zoveš, odakle si, gdje živiš i što voliš.',
    promptEn:
      'Introduce yourself: your name, where you are from, where you live and what you like.',
    minWords: 20,
    model:
      'Zovem se Ana. Imam trideset godina. Dolazim iz Kanade, ali moja obitelj je iz Hrvatske. ' +
      'Živim u Torontu s mužem i kćeri. Učim hrvatski jer želim razgovarati s bakom. ' +
      'Volim glazbu i more.',
    modelEn:
      'My name is Ana. I am thirty years old. I come from Canada, but my family is from Croatia. ' +
      'I live in Toronto with my husband and daughter. I am learning Croatian because I want to talk with my grandma. ' +
      'I like music and the sea.',
    structures: [
      {
        hr: 'Zovem se Ana.',
        en: 'My name is Ana.',
        why: 'The reflexive verb "zvati se" — the standard way to give your name.',
      },
      {
        hr: 'Dolazim iz Kanade',
        en: 'I come from Canada',
        why: '"iz" + genitive for origin: Kanada → iz Kanade.',
      },
      {
        hr: 'Živim u Torontu',
        en: 'I live in Toronto',
        why: '"u" + locative for location: Toronto → u Torontu.',
      },
    ],
    frames: [
      {
        before: 'Zovem',
        answer: 'se',
        after: 'Marko i dolazim iz Australije.',
        hint: 'The little reflexive word that "zvati" needs — second position in the sentence.',
      },
      {
        before: 'Dolazim iz',
        answer: 'Njemačke',
        accept: ['Amerike', 'Kanade', 'Australije', 'Irske'],
        after: ', ali moja obitelj je iz Hrvatske.',
        hint: 'A country after "iz" takes the genitive: Njemačka → ...',
      },
      {
        before: 'Živim u',
        answer: 'Zagrebu',
        accept: ['Splitu', 'Torontu', 'Sydneyu'],
        after: 's obitelji.',
        hint: 'A city after "u" takes the locative: Zagreb → ...',
      },
    ],
    connectives: ['i', 'ali', 'jer', 'zato'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'name', label: 'Say your name with "zovem se"', words: ['zovem se'] },
      { id: 'why', label: 'Give one reason with "jer" or "zato"', words: ['jer', 'zato'] },
    ],
  },
  {
    id: 'a1-family',
    level: 'A1',
    title: 'My family',
    prompt: 'Napiši nekoliko rečenica o svojoj obitelji: tko su, kako se zovu i što rade.',
    promptEn:
      'Write a few sentences about your family: who they are, their names and what they do.',
    minWords: 20,
    model:
      'Moja obitelj nije velika. Imam brata i sestru. Brat se zove Ivan i radi u banci. ' +
      'Sestra se zove Marija i studira medicinu. Moji roditelji žive u malom gradu blizu mora. ' +
      'Često ih zovem nedjeljom.',
    modelEn:
      'My family is not big. I have a brother and a sister. My brother is called Ivan and works in a bank. ' +
      'My sister is called Marija and studies medicine. My parents live in a small town near the sea. ' +
      'I often call them on Sundays.',
    structures: [
      {
        hr: 'Imam brata i sestru.',
        en: 'I have a brother and a sister.',
        why: 'Objects of "imati" take the accusative: brat → brata, sestra → sestru.',
      },
      {
        hr: 'Brat se zove Ivan',
        en: 'My brother is called Ivan',
        why: '"se" sits in second position — after the first stressed word.',
      },
      {
        hr: 'blizu mora',
        en: 'near the sea',
        why: '"blizu" governs the genitive: more → mora.',
      },
    ],
    frames: [
      {
        before: 'Imam',
        answer: 'brata',
        after: 'i dvije sestre.',
        hint: '"imati" takes the accusative — brat → ...',
      },
      {
        before: 'Sestra se',
        answer: 'zove',
        after: 'Petra i ima dvadeset godina.',
        hint: 'The verb for giving a name, third person: zvati se → ona se ...',
      },
      {
        before: 'Roditelji žive blizu',
        answer: 'mora',
        after: ', u malom mjestu.',
        hint: '"blizu" needs the genitive: more → ...',
      },
    ],
    connectives: ['i', 'a', 'ali', 'često', 'nedjeljom'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'have', label: 'Use "imam" with a family member', words: ['imam'] },
      { id: 'names', label: 'Give a name with "zove se"', words: ['zove se'] },
    ],
  },
  {
    id: 'a1-day',
    level: 'A1',
    title: 'My day',
    prompt: 'Opiši svoj dan: kada ustaješ, što radiš ujutro, poslijepodne i navečer.',
    promptEn:
      'Describe your day: when you get up, what you do in the morning, afternoon and evening.',
    minWords: 25,
    model:
      'Ustajem u sedam sati. Prvo pijem kavu, a onda doručkujem. Radim od devet do pet. ' +
      'Poslijepodne idem u šetnju ili kuham večeru. Navečer gledam televiziju i čitam knjigu. ' +
      'Spavam oko jedanaest sati.',
    modelEn:
      'I get up at seven. First I drink coffee, and then I have breakfast. I work from nine to five. ' +
      'In the afternoon I go for a walk or cook dinner. In the evening I watch TV and read a book. ' +
      'I sleep around eleven.',
    structures: [
      {
        hr: 'Ustajem u sedam sati.',
        en: 'I get up at seven.',
        why: '"u" + a clock time — the standard time-of-day pattern.',
      },
      {
        hr: 'Prvo pijem kavu, a onda doručkujem.',
        en: 'First I drink coffee, and then I have breakfast.',
        why: '"prvo ... a onda" sequences your day; "kava" becomes "kavu" as the object.',
      },
      {
        hr: 'od devet do pet',
        en: 'from nine to five',
        why: '"od ... do" for ranges of time.',
      },
    ],
    frames: [
      {
        before: 'Ustajem',
        answer: 'u',
        after: 'šest sati i pijem kavu.',
        hint: 'The preposition for clock times.',
      },
      {
        before: 'Pijem',
        answer: 'kavu',
        after: 'i jedem kruh.',
        hint: '"kava" as the object of "piti" — accusative.',
      },
      {
        before: 'Radim',
        answer: 'od',
        accept: [],
        after: 'devet do pet.',
        hint: 'The first half of the "from ... to" pattern.',
      },
    ],
    connectives: ['prvo', 'onda', 'poslije', 'navečer', 'ujutro'],
    checklist: [
      { id: 'len', label: 'At least 25 words', minWords: 25 },
      { id: 'time', label: 'Give a clock time with "u ... sati"', words: ['sati', 'sat'] },
      { id: 'seq', label: 'Sequence with "prvo" or "onda"', words: ['prvo', 'onda', 'zatim'] },
    ],
  },

  // ── A2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'a2-invite',
    level: 'A2',
    title: 'Invite a friend',
    prompt:
      'Napiši poruku prijatelju: pozovi ga na ručak u subotu. Napiši gdje se nalazite, u koliko sati i što ćete jesti.',
    promptEn:
      'Write a message to a friend: invite them to lunch on Saturday. Say where you will meet, at what time and what you will eat.',
    minWords: 30,
    model:
      'Bog Ivane! Dođi u subotu k nama na ručak. Nalazimo se kod mene u stanu u podne. ' +
      'Kuham sarmu, a za desert imamo palačinke. Ponesi samo dobru volju! Javi mi možeš li doći. ' +
      'Vidimo se!',
    modelEn:
      'Hi Ivan! Come to our place for lunch on Saturday. We are meeting at my flat at noon. ' +
      'I am cooking sarma, and for dessert we have pancakes. Bring only your good mood! Let me know if you can come. ' +
      'See you!',
    structures: [
      {
        hr: 'Bog Ivane!',
        en: 'Hi Ivan!',
        why: 'Addressing someone by name uses the vocative: Ivan → Ivane.',
      },
      {
        hr: 'Dođi u subotu',
        en: 'Come on Saturday',
        why: 'The imperative "dođi" invites; "u" + accusative for days: subota → u subotu.',
      },
      {
        hr: 'Javi mi možeš li doći.',
        en: 'Let me know if you can come.',
        why: 'The question particle "li" sits right after the verb: možeš li.',
      },
    ],
    frames: [
      {
        before: 'Dođi u',
        answer: 'subotu',
        accept: ['nedjelju', 'petak'],
        after: 'na ručak!',
        hint: 'A day after "u" takes the accusative: subota → ...',
      },
      {
        before: 'Nalazimo se u',
        answer: 'podne',
        after: 'kod mene.',
        hint: 'The word for noon — no change needed after "u".',
      },
      {
        before: 'Javi mi',
        answer: 'možeš li',
        after: 'doći.',
        hint: 'Verb + the question particle "li" — "whether you can".',
      },
    ],
    connectives: ['a', 'i', 'za desert', 'u podne', 'kod mene'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'day',
        label: 'Name the day with "u subotu" (or another day)',
        words: ['u subotu', 'u nedjelju', 'u petak'],
      },
      { id: 'food', label: 'Say what you will eat', words: ['jesti', 'jedemo', 'kuham', 'ručak'] },
    ],
  },
  {
    id: 'a2-postcard',
    level: 'A2',
    title: 'A postcard from a trip',
    prompt:
      'Napiši razglednicu s putovanja: gdje si, kakvo je vrijeme, što si danas vidio ili vidjela i kada se vraćaš.',
    promptEn:
      'Write a postcard from a trip: where you are, what the weather is like, what you saw today and when you are coming back.',
    minWords: 30,
    model:
      'Draga Marija, javljam se iz Dubrovnika! Vrijeme je predivno — sunčano i toplo. ' +
      'Jutros smo prošetali starim gradom i popeli se na zidine. Poslije smo jeli ribu uz more. ' +
      'Vraćamo se u nedjelju navečer. Puno pozdrava!',
    modelEn:
      'Dear Marija, greetings from Dubrovnik! The weather is wonderful — sunny and warm. ' +
      'This morning we walked through the old town and climbed the walls. Afterwards we ate fish by the sea. ' +
      'We are coming back on Sunday evening. Many greetings!',
    structures: [
      {
        hr: 'javljam se iz Dubrovnika',
        en: 'greetings from Dubrovnik',
        why: '"iz" + genitive for where you are writing from: Dubrovnik → iz Dubrovnika.',
      },
      {
        hr: 'Jutros smo prošetali starim gradom',
        en: 'This morning we walked through the old town',
        why: 'Past tense: "smo" (second position) + the -li/-la/-lo participle.',
      },
      {
        hr: 'popeli se na zidine',
        en: 'climbed the walls',
        why: 'In the joined clause the helper is not repeated — "se" simply follows the participle: i popeli se.',
      },
    ],
    frames: [
      {
        before: 'Javljam se iz',
        answer: 'Splita',
        accept: ['Zagreba', 'Dubrovnika', 'Zadra'],
        after: '— ovdje je prekrasno!',
        hint: 'A city after "iz" takes the genitive: Split → ...',
      },
      {
        before: 'Jutros',
        answer: 'smo',
        after: 'prošetali starim gradom.',
        hint: 'The past-tense helper for "we" — second position in the sentence.',
      },
      {
        before: 'Vraćamo se u',
        answer: 'nedjelju',
        accept: ['subotu', 'ponedjeljak'],
        after: 'navečer.',
        hint: 'A day after "u" takes the accusative: nedjelja → ...',
      },
    ],
    connectives: ['jutros', 'poslije', 'zatim', 'navečer', 'uz more'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'weather',
        label: 'Describe the weather',
        words: ['vrijeme', 'sunčano', 'toplo', 'kiša', 'oblačno'],
      },
      { id: 'past', label: 'Say what you did with "smo" or "sam"', words: [' smo ', ' sam '] },
    ],
  },
  {
    id: 'a2-weekend',
    level: 'A2',
    title: 'Last weekend',
    prompt: 'Opiši što si radio ili radila prošli vikend. Koristi prošlo vrijeme.',
    promptEn: 'Describe what you did last weekend. Use the past tense.',
    minWords: 35,
    model:
      'Prošli vikend bio je miran. U subotu ujutro išla sam na tržnicu i kupila povrće i sir. ' +
      'Poslijepodne sam čitala knjigu na balkonu. U nedjelju smo posjetili prijatelje. ' +
      'Skuhali su odličan ručak i dugo smo razgovarali. Kući sam se vratila umorna, ali sretna.',
    modelEn:
      'Last weekend was calm. On Saturday morning I went to the market and bought vegetables and cheese. ' +
      'In the afternoon I read a book on the balcony. On Sunday we visited friends. ' +
      'They cooked an excellent lunch and we talked for a long time. I came home tired but happy.',
    structures: [
      {
        hr: 'išla sam na tržnicu',
        en: 'I went to the market',
        why: 'Past tense agrees with the speaker: išla (f) / išao (m) + "sam".',
      },
      {
        hr: 'kupila povrće i sir',
        en: 'bought vegetables and cheese',
        why: 'One "sam" serves both verbs — no need to repeat the helper.',
      },
      {
        hr: 'Kući sam se vratila',
        en: 'I came home',
        why: 'Clitic cluster order: sam + se, together in second position.',
      },
    ],
    frames: [
      {
        before: 'U subotu',
        answer: 'sam',
        after: 'išao na tržnicu.',
        hint: 'The past-tense helper for "I" — second position.',
      },
      {
        before: 'Poslijepodne sam',
        answer: 'čitala',
        accept: ['čitao'],
        after: 'knjigu na balkonu.',
        hint: 'Past participle of "čitati" — match your own gender.',
      },
      {
        before: 'Kući sam',
        answer: 'se',
        after: 'vratila kasno navečer.',
        hint: '"vratiti se" — the reflexive joins the cluster after "sam".',
      },
    ],
    connectives: ['prvo', 'zatim', 'poslijepodne', 'navečer', 'na kraju'],
    checklist: [
      { id: 'len', label: 'At least 35 words', minWords: 35 },
      { id: 'past', label: 'Use the past tense ("sam" + participle)', words: [' sam '] },
      {
        id: 'seq',
        label: 'Order events with "zatim" or "poslije"',
        words: ['zatim', 'poslije', 'onda'],
      },
    ],
  },

  // ── B1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'b1-city',
    level: 'B1',
    title: 'A city you visited',
    prompt:
      'Napiši e-poruku prijateljici o gradu koji si nedavno posjetio ili posjetila: što si vidio, što te iznenadilo i zašto joj preporučuješ da i ona ode onamo.',
    promptEn:
      'Write an email to a friend about a city you recently visited: what you saw, what surprised you and why you recommend she go there too.',
    minWords: 50,
    model:
      'Draga Petra, prošli tjedan posjetila sam Zadar i moram ti reći — oduševljena sam. ' +
      'Grad koji sam zamišljala kao usputnu stanicu pokazao se pravim otkrićem. ' +
      'Najviše su me iznenadile morske orgulje: sjediš na stubama, slušaš more i ne želiš otići. ' +
      'Vidjela sam i rimski forum te prekrasan zalazak sunca. ' +
      'Preporučujem ti da odeš onamo u rujnu, kad nema gužve. Sigurna sam da bi ti se svidjelo.',
    modelEn:
      'Dear Petra, last week I visited Zadar and I have to tell you — I am thrilled. ' +
      'A city I had imagined as a stopover turned out to be a real discovery. ' +
      'The sea organ surprised me the most: you sit on the steps, listen to the sea and never want to leave. ' +
      'I also saw the Roman forum and a gorgeous sunset. ' +
      'I recommend you go there in September, when there are no crowds. I am sure you would like it.',
    structures: [
      {
        hr: 'Grad koji sam zamišljala',
        en: 'A city I had imagined',
        why: 'The relative pronoun "koji" builds richer sentences than two short ones.',
      },
      {
        hr: 'Najviše su me iznenadile morske orgulje',
        en: 'The sea organ surprised me the most',
        why: '"iznenaditi" puts the surprised person in the accusative: me — inside the su+me cluster.',
      },
      {
        hr: 'Preporučujem ti da odeš onamo',
        en: 'I recommend you go there',
        why: '"preporučiti" + dative (ti) + "da" clause — the standard recommendation shape.',
      },
    ],
    frames: [
      {
        before: 'Grad',
        answer: 'koji',
        after: 'sam posjetila zove se Šibenik.',
        hint: 'The relative pronoun — "the city THAT I visited".',
      },
      {
        before: 'Najviše',
        answer: 'me',
        after: 'je iznenadila stara jezgra grada.',
        hint: '"It surprised ME" — the short accusative pronoun, second position, before "je".',
      },
      {
        before: 'Preporučujem',
        answer: 'ti',
        after: 'da odeš onamo na jesen.',
        hint: '"I recommend TO YOU" — the short dative pronoun.',
      },
    ],
    connectives: ['najviše', 'također', 'osim toga', 'zato', 'kad'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      { id: 'rel', label: 'Use a "koji" clause', words: ['koji', 'koja', 'koje'] },
      {
        id: 'rec',
        label: 'Recommend with "preporučujem"',
        words: ['preporučujem', 'preporučila', 'preporučio'],
      },
    ],
  },
  {
    id: 'b1-hobby',
    level: 'B1',
    title: 'Why I love my hobby',
    prompt:
      'Napiši tekst o svom hobiju: kako si počeo ili počela, koliko se dugo time baviš i zašto ti je važan.',
    promptEn:
      'Write about your hobby: how you started, how long you have been doing it and why it matters to you.',
    minWords: 50,
    model:
      'Već pet godina bavim se fotografijom. Počelo je slučajno: na putovanju sam posudila bratov fotoaparat ' +
      'i više ga nisam htjela vratiti. Fotografiranje me naučilo gledati svijet pažljivije — ' +
      'svjetlo, boje i male trenutke koje inače ne primjećujemo. ' +
      'Vikendom često ustajem prije zore da bih uhvatila najbolje svjetlo. ' +
      'Taj mi hobi daje mir i podsjeća me da ljepota postoji svuda oko nas.',
    modelEn:
      'I have been doing photography for five years. It started by accident: on a trip I borrowed my brother’s camera ' +
      'and did not want to give it back. Photography taught me to look at the world more carefully — ' +
      'light, colours and small moments we usually miss. ' +
      'On weekends I often get up before dawn to catch the best light. ' +
      'That hobby gives me peace and reminds me that beauty exists all around us.',
    structures: [
      {
        hr: 'Već pet godina bavim se fotografijom',
        en: 'I have been doing photography for five years',
        why: '"baviti se" + instrumental (fotografijom); "već" + present = "have been ...ing".',
      },
      {
        hr: 'da bih uhvatila najbolje svjetlo',
        en: 'in order to catch the best light',
        why: 'Purpose clause "da bih" — the conditional expresses "so that I could".',
      },
      {
        hr: 'Taj mi hobi daje mir',
        en: 'That hobby gives me peace',
        why: 'The dative "mi" slips into second position, splitting "taj hobi".',
      },
    ],
    frames: [
      {
        before: 'Bavim se',
        answer: 'plivanjem',
        accept: ['fotografijom', 'glazbom', 'kuhanjem', 'trčanjem'],
        after: 'već tri godine.',
        hint: '"baviti se" takes the instrumental: plivanje → ...',
      },
      {
        before: 'Ustajem rano da',
        answer: 'bih',
        after: 'imao više vremena za trening.',
        hint: 'The conditional helper for "I" in a purpose clause: da ... imao.',
      },
      {
        before: 'Taj',
        answer: 'mi',
        after: 'hobi puno znači.',
        hint: '"means a lot TO ME" — the short dative pronoun, second position.',
      },
    ],
    connectives: ['već', 'slučajno', 'često', 'osim toga', 'zato što'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      { id: 'instr', label: 'Use "bavim se" + your hobby', words: ['bavim se'] },
      { id: 'dur', label: 'Say how long with "već"', words: ['već'] },
    ],
  },
  {
    id: 'b1-complaint',
    level: 'B1',
    title: 'A polite complaint',
    prompt:
      'Naručili ste knjigu preko interneta, a stigla je oštećena. Napišite pristojnu pritužbu trgovini: što se dogodilo i što tražite.',
    promptEn:
      'You ordered a book online and it arrived damaged. Write a polite complaint to the shop: what happened and what you are asking for.',
    minWords: 50,
    model:
      'Poštovani, prošlog tjedna naručila sam knjigu preko Vaše internetske stranice. ' +
      'Paket je stigao na vrijeme, ali knjiga je, nažalost, oštećena — korice su poderane. ' +
      'Hvala Vam na brzoj dostavi, no ovakav proizvod ne mogu pokloniti kao što sam planirala. ' +
      'Htjela bih zamoliti da mi pošaljete novi primjerak ili vratite novac. ' +
      'Račun šaljem u prilogu. Unaprijed zahvaljujem na razumijevanju. S poštovanjem, Ivana Horvat',
    modelEn:
      'Dear Sir or Madam, last week I ordered a book through your website. ' +
      'The parcel arrived on time, but the book is unfortunately damaged — the cover is torn. ' +
      'Thank you for the fast delivery, but I cannot gift a product like this as I had planned. ' +
      'I would like to ask you to send me a new copy or refund the money. ' +
      'I attach the receipt. Thank you in advance for your understanding. Respectfully, Ivana Horvat',
    structures: [
      {
        hr: 'Hvala Vam na brzoj dostavi',
        en: 'Thank you for the fast delivery',
        why: '"hvala na" + locative — the correct case after this phrase.',
      },
      {
        hr: 'Htjela bih zamoliti',
        en: 'I would like to ask',
        why: 'Conditional softening — polite requests use "htio/htjela bih", never a bare imperative.',
      },
      {
        hr: 'Poštovani, ... S poštovanjem',
        en: 'Dear Sir or Madam, ... Respectfully',
        why: 'The formal frame; the capitalised "Vam/Vaše" keeps the V-form register.',
      },
    ],
    frames: [
      {
        before: 'Hvala Vam na',
        answer: 'pomoći',
        accept: ['dostavi', 'odgovoru', 'strpljenju'],
        after: '.',
        hint: '"hvala na" takes the locative: pomoć → ...',
      },
      {
        before: 'Htio',
        answer: 'bih',
        after: 'zamoliti za povrat novca.',
        hint: 'The conditional helper that makes a request polite.',
      },
      {
        before: 'Molim Vas da',
        answer: 'mi',
        after: 'pošaljete novi primjerak.',
        hint: '"send TO ME" — the short dative pronoun inside the "da" clause.',
      },
    ],
    connectives: ['nažalost', 'no', 'stoga', 'u prilogu', 'unaprijed'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'formal',
        label: 'Open with "Poštovani" and close with "S poštovanjem"',
        words: ['poštovani'],
      },
      {
        id: 'cond',
        label: 'Soften the request with "htio/htjela bih" or "molim Vas"',
        words: ['bih', 'molim'],
      },
    ],
  },

  // ── B2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'b2-remote-work',
    level: 'B2',
    title: 'For and against remote work',
    prompt:
      'Napišite kratak esej o prednostima i nedostacima rada od kuće. Iznesite obje strane i vlastito mišljenje.',
    promptEn:
      'Write a short essay on the advantages and disadvantages of working from home. Present both sides and your own opinion.',
    minWords: 80,
    model:
      'Rad od kuće u posljednjih je nekoliko godina postao svakodnevica mnogih zaposlenika. ' +
      'S jedne strane, prednosti su očite: nema putovanja na posao, radno se vrijeme lakše prilagođava ' +
      'obiteljskim obvezama, a mnogi tvrde da se kod kuće bolje koncentriraju. ' +
      'S druge strane, granica između posla i privatnog života postaje nejasna. ' +
      'Iako štedimo vrijeme, često radimo dulje nego u uredu, a nedostaju nam i razgovori s kolegama. ' +
      'Po mojem mišljenju, najbolje je kombinirano rješenje: nekoliko dana kod kuće, ' +
      'a ostatak tjedna u uredu. Tako zadržavamo slobodu, ali ne gubimo zajedništvo.',
    modelEn:
      'Working from home has become everyday reality for many employees in recent years. ' +
      'On the one hand, the advantages are obvious: no commuting, working hours adapt more easily ' +
      'to family obligations, and many claim they concentrate better at home. ' +
      'On the other hand, the line between work and private life becomes blurred. ' +
      'Although we save time, we often work longer than at the office, and we miss talking to colleagues. ' +
      'In my opinion, a combined solution is best: a few days at home, ' +
      'the rest of the week at the office. That way we keep the freedom but do not lose the community.',
    structures: [
      {
        hr: 'S jedne strane ... S druge strane',
        en: 'On the one hand ... on the other hand',
        why: 'The frame every balanced argument hangs on.',
      },
      {
        hr: 'Iako štedimo vrijeme, često radimo dulje',
        en: 'Although we save time, we often work longer',
        why: 'The concessive "iako" admits the other side before countering it.',
      },
      {
        hr: 'Po mojem mišljenju',
        en: 'In my opinion',
        why: 'Signals the shift from weighing sides to your own stance.',
      },
    ],
    frames: [
      {
        before: 'S jedne',
        answer: 'strane',
        after: ', rad od kuće štedi vrijeme.',
        hint: 'Complete the "on the one hand" formula.',
      },
      {
        before: '',
        answer: 'Iako',
        accept: ['Premda'],
        after: 'štedimo vrijeme, često radimo dulje.',
        hint: 'The concessive conjunction — "although".',
      },
      {
        before: 'Po mojem',
        answer: 'mišljenju',
        after: ', najbolje je kombinirano rješenje.',
        hint: '"In my opinion" — the noun takes the locative.',
      },
    ],
    connectives: [
      's jedne strane',
      's druge strane',
      'iako',
      'međutim',
      'stoga',
      'po mojem mišljenju',
    ],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'both',
        label: 'Present both sides with "s jedne/druge strane"',
        words: ['s jedne strane', 's druge strane'],
      },
      { id: 'conc', label: 'Concede a point with "iako" or "premda"', words: ['iako', 'premda'] },
      {
        id: 'own',
        label: 'Give your own view',
        words: ['po mojem mišljenju', 'smatram', 'mislim da'],
      },
    ],
  },
  {
    id: 'b2-experience',
    level: 'B2',
    title: 'An experience that changed you',
    prompt:
      'Opišite događaj koji vas je promijenio: što se dogodilo, kako ste se osjećali i što ste iz toga naučili.',
    promptEn:
      'Describe an event that changed you: what happened, how you felt and what you learned from it.',
    minWords: 80,
    model:
      'Prije nekoliko godina prvi sam put sama otputovala u Hrvatsku, u selo iz kojega potječe moja obitelj. ' +
      'Dok sam hodala ulicom kojom je nekad hodala moja baka, osjećala sam se čudno — kao kod kuće, ' +
      'iako sam ondje bila stranac. Susjeda me prepoznala po prezimenu i pozvala na kavu. ' +
      'Razgovarale smo satima, a ja sam shvaćala tek pola. Nakon što sam se vratila, ' +
      'upisala sam tečaj hrvatskoga. Taj me posjet naučio da jezik nije samo gramatika, ' +
      'nego most prema ljudima koje volimo.',
    modelEn:
      'A few years ago I travelled alone to Croatia for the first time, to the village my family comes from. ' +
      'As I walked down the street my grandmother once walked, I felt strange — at home, ' +
      'although I was a stranger there. A neighbour recognised me by my surname and invited me for coffee. ' +
      'We talked for hours, and I understood only half. After I returned, ' +
      'I enrolled in a Croatian course. That visit taught me that language is not just grammar, ' +
      'but a bridge to the people we love.',
    structures: [
      {
        hr: 'Dok sam hodala ulicom',
        en: 'As I was walking down the street',
        why: '"dok" + imperfective for the background action a story hangs on.',
      },
      {
        hr: 'Nakon što sam se vratila',
        en: 'After I returned',
        why: '"nakon što" introduces a completed prior event — perfective aspect.',
      },
      {
        hr: 'nije samo gramatika, nego most',
        en: 'not just grammar, but a bridge',
        why: 'The "ne samo ... nego" contrast — a B2 staple for conclusions.',
      },
    ],
    frames: [
      {
        before: '',
        answer: 'Dok',
        after: 'sam hodala gradom, razmišljala sam o obitelji.',
        hint: 'The conjunction for "while/as" — background action.',
      },
      {
        before: 'Nakon',
        answer: 'što',
        after: 'sam se vratila kući, sve se promijenilo.',
        hint: 'Complete the two-word conjunction "after".',
      },
      {
        before: 'Jezik nije samo gramatika,',
        answer: 'nego',
        after: 'most prema ljudima.',
        hint: 'The contrast word in "not only ... but".',
      },
    ],
    connectives: ['dok', 'nakon što', 'tek', 'ne samo — nego', 'shvatiti'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      { id: 'bg', label: 'Set a scene with "dok"', words: ['dok'] },
      {
        id: 'seq',
        label: 'Sequence with "nakon što" or "prije nego što"',
        words: ['nakon što', 'prije nego'],
      },
      {
        id: 'lesson',
        label: 'Say what you learned',
        words: ['naučio', 'naučila', 'shvatio', 'shvatila'],
      },
    ],
  },
  {
    id: 'b2-motivation',
    level: 'B2',
    title: 'A motivation letter',
    prompt:
      'Prijavljujete se za ljetnu školu hrvatskoga jezika u Zagrebu. Napišite motivacijsko pismo: tko ste, zašto se prijavljujete i što očekujete od programa.',
    promptEn:
      'You are applying for a Croatian summer school in Zagreb. Write a motivation letter: who you are, why you are applying and what you expect from the programme.',
    minWords: 80,
    model:
      'Poštovani, zovem se Luka Kovačević i javljam se na natječaj za ljetnu školu hrvatskoga jezika. ' +
      'Odrastao sam u Australiji u obitelji hrvatskih iseljenika, pa hrvatski razumijem, ' +
      'ali bih želio znatno poboljšati govor i pisanje. ' +
      'Budući da planiram studirati u Zagrebu, ovaj bi mi program omogućio i jezičnu pripremu ' +
      'i prvi duži boravak u Hrvatskoj. Posebno me zanimaju radionice o kulturi i svakodnevnoj komunikaciji. ' +
      'Uvjeren sam da bih svojim trudom i motivacijom pridonio grupi. ' +
      'Zahvaljujem na razmatranju prijave i stojim na raspolaganju za sva pitanja. S poštovanjem, Luka Kovačević',
    modelEn:
      'Dear Sir or Madam, my name is Luka Kovačević and I am applying for the Croatian language summer school. ' +
      'I grew up in Australia in a family of Croatian emigrants, so I understand Croatian, ' +
      'but I would like to significantly improve my speaking and writing. ' +
      'Since I plan to study in Zagreb, this programme would give me both language preparation ' +
      'and my first longer stay in Croatia. I am especially interested in the workshops on culture and everyday communication. ' +
      'I am convinced I would contribute to the group with my effort and motivation. ' +
      'Thank you for considering my application; I remain available for any questions. Respectfully, Luka Kovačević',
    structures: [
      {
        hr: 'Budući da planiram studirati u Zagrebu',
        en: 'Since I plan to study in Zagreb',
        why: '"budući da" gives a formal reason — stronger register than "jer".',
      },
      {
        hr: 'ovaj bi mi program omogućio',
        en: 'this programme would give me',
        why: 'Conditional + clitic cluster: bi + mi, both in second position.',
      },
      {
        hr: 'stojim na raspolaganju',
        en: 'I remain at your disposal',
        why: 'A fixed formal-letter formula worth owning at B2.',
      },
    ],
    frames: [
      {
        before: '',
        answer: 'Budući da',
        after: 'planiram studirati u Zagrebu, prijavljujem se na program.',
        hint: 'The formal two-word "since/because".',
      },
      {
        before: 'Ovaj',
        answer: 'bi',
        after: 'mi program puno pomogao.',
        hint: 'The conditional helper — second position, before "mi".',
      },
      {
        before: 'Stojim na',
        answer: 'raspolaganju',
        after: 'za sva pitanja.',
        hint: 'Complete the formal closing formula.',
      },
    ],
    connectives: ['budući da', 'stoga', 'posebno', 'osim toga', 'uvjeren sam'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      { id: 'reason', label: 'Give a formal reason with "budući da"', words: ['budući da'] },
      { id: 'cond', label: 'Use the conditional ("bih/bi")', words: ['bih', ' bi '] },
      { id: 'close', label: 'Close formally', words: ['s poštovanjem'] },
    ],
  },

  // ── C1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'c1-uniforms',
    level: 'C1',
    title: 'Argue a position',
    prompt:
      'Napišite argumentacijski tekst: jeste li za obvezne školske odore ili protiv njih? Iznesite protuargument i pobijte ga.',
    promptEn:
      'Write an argumentative text: are you for or against mandatory school uniforms? Present a counter-argument and refute it.',
    minWords: 100,
    model:
      'Rasprava o obveznim školskim odorama nerijetko se svodi na pitanje ukusa, ' +
      'no smatram da je riječ o dubljem društvenom pitanju. ' +
      'Odore smanjuju vidljive razlike među učenicima iz različitih imovinskih slojeva, ' +
      'čime se ublažava vršnjački pritisak koji skupa odjeća neizbježno stvara. ' +
      'Protivnici opravdano ističu da se time ograničava sloboda izražavanja. ' +
      'No taj argument previđa ključnu činjenicu: identitet se ne gradi markom tenisica, ' +
      'nego znanjem, stavovima i odnosima. Štoviše, upravo odora oslobađa učenike ' +
      'svakodnevne utrke u odijevanju. Zaključno, prednosti pretežu: škola bi trebala biti prostor ' +
      'u kojem vrijednost određuje ono što znaš, a ne ono što nosiš.',
    modelEn:
      'The debate on mandatory school uniforms is not seldom reduced to a question of taste, ' +
      'but I believe it is a deeper social issue. ' +
      'Uniforms reduce the visible differences between pupils from different economic backgrounds, ' +
      'which softens the peer pressure that expensive clothing inevitably creates. ' +
      'Opponents rightly point out that this limits freedom of expression. ' +
      'But that argument overlooks a key fact: identity is not built by a brand of sneakers, ' +
      'but by knowledge, attitudes and relationships. Moreover, it is precisely the uniform that frees pupils ' +
      'from the daily race of dressing up. In conclusion, the advantages prevail: school should be a place ' +
      'where your worth is determined by what you know, not what you wear.',
    structures: [
      {
        hr: 'nerijetko se svodi na pitanje ukusa, no smatram',
        en: 'is not seldom reduced to a question of taste, but I believe',
        why: 'Litotes ("nerijetko") plus a pivot "no" — concede the framing, then deepen it.',
      },
      {
        hr: 'čime se ublažava vršnjački pritisak',
        en: 'which softens peer pressure',
        why: 'The instrumental relative "čime" compresses a whole causal clause.',
      },
      {
        hr: 'Protivnici opravdano ističu ... No taj argument previđa',
        en: 'Opponents rightly point out ... But that argument overlooks',
        why: 'The steelman-then-refute move — name the counter-argument fairly, then dismantle it.',
      },
    ],
    frames: [
      {
        before: '',
        answer: 'Premda',
        accept: ['Iako'],
        after: 'razumijem protuargumente, ostajem pri svom stavu.',
        hint: 'The formal concessive opener.',
      },
      {
        before: 'Odore smanjuju razlike,',
        answer: 'čime',
        after: 'se ublažava vršnjački pritisak.',
        hint: 'The instrumental relative — "by which".',
      },
      {
        before: 'Protivnici opravdano',
        answer: 'ističu',
        after: 'da se ograničava sloboda izražavanja.',
        hint: 'The verb for "point out" — present, third person plural.',
      },
    ],
    connectives: ['premda', 'štoviše', 'no', 'zaključno', 'upravo', 'čime'],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      { id: 'conc', label: 'Open with a concession ("premda/iako")', words: ['premda', 'iako'] },
      {
        id: 'counter',
        label: 'Name and refute a counter-argument',
        words: ['protivnici', 'no ', 'međutim'],
      },
      { id: 'concl', label: 'Conclude explicitly', words: ['zaključno', 'u konačnici', 'stoga'] },
    ],
  },
  {
    id: 'c1-review',
    level: 'C1',
    title: 'A critical review',
    prompt:
      'Napišite recenziju knjige ili filma koji vas se dojmio: sažmite djelo, ocijenite njegove jake i slabe strane i dajte preporuku.',
    promptEn:
      'Write a review of a book or film that made an impression on you: summarise the work, assess its strengths and weaknesses and give a recommendation.',
    minWords: 100,
    model:
      'Riječ je o romanu koji se čita u dahu, ali dugo ne zaboravlja. ' +
      'Radnja prati tri generacije jedne obitelji između Dalmacije i tuđine, ' +
      'a pripovijedanje se vješto izmjenjuje između prošlosti i sadašnjosti. ' +
      'Najveća je snaga romana upravo jezik: škrt, precizan, bez suvišnih ukrasa. ' +
      'Slabosti ipak postoje — završetak djeluje ishitreno, kao da je autorici ponestalo prostora, ' +
      'a pojedini sporedni likovi ostaju tek skicirani. ' +
      'Unatoč tim zamjerkama, roman toplo preporučujem svakomu koga zanima iskustvo iseljeništva. ' +
      'Malo je knjiga koje tako uvjerljivo pokazuju što znači pripadati dvama svjetovima, a nijednomu posve.',
    modelEn:
      'This is a novel you read in one breath but do not forget for a long time. ' +
      'The plot follows three generations of a family between Dalmatia and foreign lands, ' +
      'and the narration skilfully alternates between past and present. ' +
      'The novel’s greatest strength is precisely its language: spare, precise, without needless ornament. ' +
      'Weaknesses do exist — the ending feels rushed, as if the author ran out of space, ' +
      'and certain minor characters remain mere sketches. ' +
      'Despite these objections, I warmly recommend the novel to anyone interested in the emigrant experience. ' +
      'Few books show so convincingly what it means to belong to two worlds, and to neither completely.',
    structures: [
      {
        hr: 'Riječ je o romanu koji ...',
        en: 'This is a novel that ...',
        why: '"riječ je o" + locative — the standard critical-register opener.',
      },
      {
        hr: 'Unatoč tim zamjerkama',
        en: 'Despite these objections',
        why: '"unatoč" governs the DATIVE — a case-government point learners miss.',
      },
      {
        hr: 'pripadati dvama svjetovima, a nijednomu posve',
        en: 'to belong to two worlds, and to neither completely',
        why: 'Dative government of "pripadati", with the dual form "dvama".',
      },
    ],
    frames: [
      {
        before: 'Riječ je o',
        answer: 'romanu',
        accept: ['filmu', 'knjizi'],
        after: 'koji se dugo pamti.',
        hint: '"riječ je o" takes the locative: roman → ...',
      },
      {
        before: 'Unatoč',
        answer: 'zamjerkama',
        accept: ['slabostima', 'nedostacima'],
        after: ', djelo toplo preporučujem.',
        hint: '"unatoč" takes the dative: zamjerke → ...',
      },
      {
        before: 'Najveća je snaga romana',
        answer: 'upravo',
        after: 'jezik.',
        hint: 'The intensifier — "precisely / exactly".',
      },
    ],
    connectives: ['riječ je o', 'unatoč', 'ipak', 'upravo', 'tek', 'posve'],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      { id: 'open', label: 'Open with "riječ je o"', words: ['riječ je o'] },
      { id: 'weak', label: 'Name a weakness honestly', words: ['slabost', 'zamjerk', 'nedostat'] },
      {
        id: 'rec',
        label: 'Give a clear recommendation',
        words: ['preporučujem', 'preporučila', 'preporučio'],
      },
    ],
  },
  {
    id: 'c1-proposal',
    level: 'C1',
    title: 'A proposal to the city',
    prompt:
      'Napišite prijedlog gradskoj upravi: predložite konkretno poboljšanje u svom kvartu, obrazložite ga i predvidite moguće prigovore.',
    promptEn:
      'Write a proposal to the city administration: propose a concrete improvement in your neighbourhood, justify it and anticipate possible objections.',
    minWords: 100,
    model:
      'Poštovani, obraćam Vam se s prijedlogom uređenja zapuštenog parka u Vukovarskoj ulici. ' +
      'Park je nekoć bio središte kvarta, no posljednjih godina služi uglavnom kao prečac i parkiralište. ' +
      'Predlažem tri zahvata: obnovu dječjeg igrališta, postavljanje javne rasvjete ' +
      'i sadnju drvoreda uz južni rub. ' +
      'Troškove bi valjalo promatrati kao ulaganje, a ne kao izdatak: ' +
      'uređeni park povećava sigurnost, potiče susjedstvo na druženje i podiže vrijednost cijeloga kvarta. ' +
      'Svjestan sam da bi se moglo prigovoriti kako proračun ne dopušta nove projekte. ' +
      'Stoga predlažem faznu provedbu, pri čemu bi se prva faza mogla financirati iz postojećega programa za zelene površine. ' +
      'Zahvaljujem na pozornosti i rado ću sudjelovati u javnoj raspravi. S poštovanjem, Marin Jurić',
    modelEn:
      'Dear Sir or Madam, I am writing to you with a proposal to restore the neglected park on Vukovarska Street. ' +
      'The park was once the heart of the neighbourhood, but in recent years it serves mostly as a shortcut and a car park. ' +
      'I propose three interventions: renovating the playground, installing public lighting ' +
      'and planting a line of trees along the southern edge. ' +
      'The costs should be seen as an investment, not an expense: ' +
      'a maintained park increases safety, encourages neighbours to socialise and raises the value of the whole district. ' +
      'I am aware one might object that the budget does not allow new projects. ' +
      'I therefore propose phased implementation, whereby the first phase could be financed from the existing green-spaces programme. ' +
      'Thank you for your attention; I will gladly take part in the public consultation. Respectfully, Marin Jurić',
    structures: [
      {
        hr: 'Troškove bi valjalo promatrati kao ulaganje',
        en: 'The costs should be seen as an investment',
        why: '"valjalo bi" + infinitive — impersonal recommendation, formal register.',
      },
      {
        hr: 'Svjestan sam da bi se moglo prigovoriti',
        en: 'I am aware one might object',
        why: 'Anticipating objections with the impersonal "moglo bi se" strengthens a proposal.',
      },
      {
        hr: 'pri čemu bi se prva faza mogla financirati',
        en: 'whereby the first phase could be financed',
        why: '"pri čemu" links a clause of accompanying detail — administrative register.',
      },
    ],
    frames: [
      {
        before: 'Troškove bi',
        answer: 'valjalo',
        after: 'promatrati kao ulaganje.',
        hint: 'The impersonal "it would be advisable to" verb.',
      },
      {
        before: 'Svjestan sam da bi se',
        answer: 'moglo',
        after: 'prigovoriti kako proračun ne dopušta nove projekte.',
        hint: 'The impersonal "one might" — neuter participle of moći.',
      },
      {
        before: 'Predlažem faznu provedbu,',
        answer: 'pri čemu',
        after: 'bi prva faza počela odmah.',
        hint: 'The two-word administrative connective "whereby".',
      },
    ],
    connectives: ['stoga', 'pri čemu', 'valjalo bi', 'nekoć', 'uglavnom'],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'concrete',
        label: 'Propose something concrete with "predlažem"',
        words: ['predlažem'],
      },
      {
        id: 'objection',
        label: 'Anticipate an objection',
        words: ['prigovoriti', 'prigovor', 'moglo bi se'],
      },
      { id: 'formal', label: 'Keep the formal frame', words: ['s poštovanjem'] },
    ],
  },

  // ── C2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'c2-diaspora',
    level: 'C2',
    title: 'An essay on identity',
    prompt:
      'Napišite esej o dvojnom identitetu iseljeništva: može li se istinski pripadati dvjema kulturama? Razvijte tezu, antitezu i sintezu.',
    promptEn:
      'Write an essay on the dual identity of the diaspora: can one truly belong to two cultures? Develop thesis, antithesis and synthesis.',
    minWords: 120,
    model:
      'Pitanje dvojnoga identiteta prati iseljeništvo otkako ono postoji, ' +
      'no odgovori se mijenjaju s generacijama. ' +
      'Prva generacija najčešće živi razapeta između nostalgije i prilagodbe: ' +
      'domovina joj je ondje gdje više ne živi, a novi dom ostaje donekle stran. ' +
      'Moglo bi se ustvrditi da je takav rascjep osiromašenje — čovjek, navodno, nigdje ne pripada posve. ' +
      'Dapače, upravo suprotno: dvostruka pripadnost nije polovična, nego udvostručena. ' +
      'Tko odrasta s dvama jezicima, raspolaže i dvama načinima mišljenja; ' +
      'tko slavi dvostruke blagdane, baštini dvije povijesti. ' +
      'Istina, takva punina ima cijenu — trajni osjećaj da je dio nas uvijek negdje drugdje. ' +
      'U konačnici, pripadnost nije posuda koja se dijeljenjem prazni, nego plamen koji se dijeljenjem širi: ' +
      'identitet iseljenika nije ni ovdje ni ondje, nego — i ovdje i ondje.',
    modelEn:
      'The question of dual identity has followed emigration since it began, ' +
      'but the answers change with the generations. ' +
      'The first generation most often lives torn between nostalgia and adaptation: ' +
      'its homeland is where it no longer lives, while the new home remains somewhat foreign. ' +
      'One might claim that such a split is an impoverishment — a person, supposedly, never belongs anywhere completely. ' +
      'On the contrary — quite the opposite: dual belonging is not halved, but doubled. ' +
      'Whoever grows up with two languages commands two ways of thinking; ' +
      'whoever celebrates two sets of holidays inherits two histories. ' +
      'True, such fullness has a price — the permanent feeling that a part of us is always somewhere else. ' +
      'Ultimately, belonging is not a vessel emptied by sharing, but a flame that spreads by sharing: ' +
      'the emigrant’s identity is neither here nor there, but — both here and there.',
    structures: [
      {
        hr: 'Moglo bi se ustvrditi da ... Dapače, upravo suprotno',
        en: 'One might claim that ... On the contrary, quite the opposite',
        why: 'The dialectic hinge: voice the antithesis impersonally, then overturn it with "dapače".',
      },
      {
        hr: 'Tko odrasta s dvama jezicima, raspolaže i dvama načinima mišljenja',
        en: 'Whoever grows up with two languages commands two ways of thinking',
        why: 'Aphoristic "tko ... (taj)" parallelism; "raspolagati" governs the instrumental.',
      },
      {
        hr: 'nije posuda koja se dijeljenjem prazni, nego plamen koji se dijeljenjem širi',
        en: 'not a vessel emptied by sharing, but a flame that spreads by sharing',
        why: 'Balanced metaphor with instrumental gerunds — C2 rhetorical craft.',
      },
    ],
    frames: [
      {
        before: 'Moglo bi se',
        answer: 'ustvrditi',
        accept: ['tvrditi', 'reći'],
        after: 'da dvojni identitet osiromašuje čovjeka.',
        hint: 'The formal verb for "assert/claim" after the impersonal conditional.',
      },
      {
        before: '',
        answer: 'Dapače',
        accept: ['Naprotiv'],
        after: ', dvostruka pripadnost obogaćuje.',
        hint: 'The one-word rebuttal — "on the contrary / indeed".',
      },
      {
        before: 'Tko odrasta s',
        answer: 'dvama',
        after: 'jezicima, misli na dva načina.',
        hint: 'The dual-form instrumental of "dva".',
      },
    ],
    connectives: ['dapače', 'navodno', 'u konačnici', 'štoviše', 'donekle', 'posve'],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'anti',
        label: 'Voice the opposing view impersonally',
        words: ['moglo bi se', 'navodno'],
      },
      { id: 'rebut', label: 'Overturn it ("dapače/naprotiv")', words: ['dapače', 'naprotiv'] },
      {
        id: 'synth',
        label: 'Close with a synthesis',
        words: ['u konačnici', 'zaključno', 'naposljetku'],
      },
    ],
  },
  {
    id: 'c2-column',
    level: 'C2',
    title: 'A newspaper column',
    prompt:
      'Napišite novinsku kolumnu o svakodnevnoj pojavi koja vas istodobno zabavlja i ljuti (npr. redovi, mobiteli za stolom, "samo pet minuta"). Dopuštena je ironija.',
    promptEn:
      'Write a newspaper column about an everyday phenomenon that both amuses and irritates you (e.g. queues, phones at the table, "just five minutes"). Irony is allowed.',
    minWords: 120,
    model:
      'Postoji rečenica kojom u ovoj zemlji počinje svako čekanje: "Samo malo, odmah sam kod vas." ' +
      'Ta je izjava, dakako, mjerna jedinica bez pokrića — nešto poput inflacije u obliku vremena. ' +
      '"Samo malo" traje od pet minuta do pola sata, ovisno o tome ima li dotični kavu pri ruci. ' +
      'Nemojmo se zavaravati: svi smo i sami izgovorili tu čaroliju, ' +
      'najčešće upravo onda kada smo znali da od "odmah" neće biti ništa. ' +
      'Ipak, u toj maloj laži ima nečega gotovo nježnoga. ' +
      'Ona ne znači "brzo ću", nego "vidim vas, postojite, ne ljutite se". ' +
      'U zemljama u kojima se sve mjeri sekundama ljudi možda štede vrijeme, ' +
      'ali ga, čini mi se, nemaju s kim podijeliti. ' +
      'Stoga, kad mi netko sljedeći put poruči da je "odmah kod mene", nasmiješit ću se i naručiti kavu. ' +
      'Ionako znam da imam vremena.',
    modelEn:
      'There is a sentence with which every wait in this country begins: "Just a moment, I’ll be right with you." ' +
      'That statement is, of course, a unit of measure without collateral — something like inflation in the form of time. ' +
      '"Just a moment" lasts from five minutes to half an hour, depending on whether the person has coffee at hand. ' +
      'Let us not kid ourselves: we have all uttered that spell ourselves, ' +
      'usually precisely when we knew that "right away" would come to nothing. ' +
      'And yet there is something almost tender in that little lie. ' +
      'It does not mean "I’ll be quick", but "I see you, you exist, don’t be angry". ' +
      'In countries where everything is measured in seconds people may save time, ' +
      'but it seems to me they have no one to share it with. ' +
      'So the next time someone tells me they’ll be "right with me", I will smile and order a coffee. ' +
      'I know I have time anyway.',
    structures: [
      {
        hr: 'Ta je izjava, dakako, mjerna jedinica bez pokrića',
        en: 'That statement is, of course, a unit of measure without collateral',
        why: 'Ironic register: the parenthetical "dakako" and a deadpan metaphor.',
      },
      {
        hr: 'Nemojmo se zavaravati',
        en: 'Let us not kid ourselves',
        why: 'First-person-plural imperative pulls the reader into complicity — a column staple.',
      },
      {
        hr: 'ne znači "brzo ću", nego "vidim vas, postojite, ne ljutite se"',
        en: 'does not mean "I’ll be quick", but "I see you, you exist, don’t be angry"',
        why: 'Reinterpreting a cliché is the column’s pivot from irony to warmth.',
      },
    ],
    frames: [
      {
        before: 'Ta je izjava,',
        answer: 'dakako',
        accept: ['naravno'],
        after: ', obećanje bez pokrića.',
        hint: 'The ironic parenthetical "of course".',
      },
      {
        before: '',
        answer: 'Nemojmo',
        after: 'se zavaravati: svi to radimo.',
        hint: 'The first-person-plural negative imperative — "let us not".',
      },
      {
        before: 'Ljudi štede vrijeme, ali ga nemaju s',
        answer: 'kim',
        after: 'podijeliti.',
        hint: 'The instrumental of "tko" after "s".',
      },
    ],
    connectives: ['dakako', 'ipak', 'ionako', 'stoga', 'upravo', 'čini mi se'],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'irony',
        label: 'Use an ironic aside ("dakako", "naravno")',
        words: ['dakako', 'naravno'],
      },
      {
        id: 'we',
        label: 'Pull the reader in ("nemojmo", "svi smo")',
        words: ['nemojmo', 'svi smo'],
      },
      { id: 'turn', label: 'Turn from irony to a real point', words: ['ipak', 'no ', 'međutim'] },
    ],
  },
  {
    id: 'c2-abstract',
    level: 'C2',
    title: 'An academic abstract',
    prompt:
      'Napišite sažetak (apstrakt) zamišljenog istraživanja o očuvanju hrvatskoga jezika u iseljeništvu: cilj, metodu, rezultate i zaključak — u akademskom registru.',
    promptEn:
      'Write an abstract of an imagined study on the preservation of Croatian in the diaspora: aim, method, results and conclusion — in academic register.',
    minWords: 100,
    model:
      'U radu se istražuje međugeneracijski prijenos hrvatskoga jezika u iseljeničkim zajednicama Sjeverne Amerike. ' +
      'Polazi se od pretpostavke da očuvanje jezika ne ovisi ponajprije o formalnoj poduci, ' +
      'nego o obiteljskim jezičnim praksama. ' +
      'Istraživanje je provedeno na uzorku od stotinu obitelji, kombiniranjem upitnika i polustrukturiranih intervjua. ' +
      'Rezultati pokazuju da djeca iz obitelji u kojima se hrvatski govori svakodnevno, ' +
      'makar i s pogreškama, postižu znatno višu komunikacijsku kompetenciju ' +
      'od djece izložene isključivo subotnjoj školi. ' +
      'Nadalje, utvrđena je snažna povezanost između jezične sigurnosti roditelja i ustrajnosti prijenosa. ' +
      'Zaključuje se da je svakodnevna, emocionalno ukorijenjena uporaba jezika presudnija od gramatičke točnosti ' +
      'te se predlaže da programi za dijasporu težište pomaknu s poduke na poticanje obiteljske komunikacije.',
    modelEn:
      'This paper investigates the intergenerational transmission of Croatian in the emigrant communities of North America. ' +
      'It starts from the assumption that language preservation depends not primarily on formal instruction, ' +
      'but on family language practices. ' +
      'The study was conducted on a sample of one hundred families, combining questionnaires and semi-structured interviews. ' +
      'The results show that children from families in which Croatian is spoken daily, ' +
      'even with mistakes, achieve markedly higher communicative competence ' +
      'than children exposed only to Saturday school. ' +
      'Furthermore, a strong correlation was established between parents’ linguistic confidence and the persistence of transmission. ' +
      'It is concluded that everyday, emotionally rooted language use is more decisive than grammatical accuracy, ' +
      'and it is proposed that diaspora programmes shift their focus from instruction to encouraging family communication.',
    structures: [
      {
        hr: 'U radu se istražuje ... Polazi se od pretpostavke',
        en: 'This paper investigates ... It starts from the assumption',
        why: 'Impersonal "se" constructions — the backbone of Croatian academic register.',
      },
      {
        hr: 'makar i s pogreškama',
        en: 'even with mistakes',
        why: 'The concessive particle "makar" compresses a whole clause.',
      },
      {
        hr: 'Zaključuje se da ... te se predlaže da',
        en: 'It is concluded that ... and it is proposed that',
        why: 'Chained impersonal passives close an abstract without a visible author.',
      },
    ],
    frames: [
      {
        before: 'U radu',
        answer: 'se',
        after: 'istražuje prijenos jezika u iseljeništvu.',
        hint: 'The impersonal particle that makes academic Croatian authorless.',
      },
      {
        before: 'Djeca napreduju,',
        answer: 'makar',
        after: 'i s pogreškama.',
        hint: 'The concessive particle — "even if".',
      },
      {
        before: 'Zaključuje se',
        answer: 'da',
        after: 'je svakodnevna uporaba presudna.',
        hint: 'The conjunction that introduces the conclusion clause.',
      },
    ],
    connectives: ['nadalje', 'ponajprije', 'te', 'makar', 'presudno', 'težište'],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'impersonal',
        label: 'Use impersonal "se" forms',
        words: ['istražuje se', 'u radu se', 'zaključuje se', 'polazi se'],
      },
      { id: 'method', label: 'Name a method', words: ['uzorku', 'upitnik', 'intervju', 'metod'] },
      { id: 'concl', label: 'Conclude impersonally', words: ['zaključuje se', 'predlaže se'] },
    ],
  },
];

/** Units at exactly `level`, in curriculum order. */
export function unitsForLevel(level: CefrLevel): WritingUnit[] {
  return WRITING_CURRICULUM.filter((u) => u.level === level);
}
