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
// Every level A1–C2 has ≥8 units (writingCurriculum.test.ts pins this): A1
// deliberately included — before this file A1 learners had NO writing content.
// 3 → 8 per level on 2026-09-05 (content expansion item 4): at three units a
// learner exhausted a level's writing in three sessions and the rotation
// (GuidedWritingScreen `pickUnit`) served the same model again on the fourth.
// Each level now covers a genre spread — personal, transactional, narrative,
// argumentative, formal — rather than three variations on one register.
//
// NOTE ON LINT COVERAGE (2026-09-05): this file's models, frames and word
// panels were UNSCANNED by lintCroatianText.mjs for its first eighteen days —
// `model` / `before` / `after` were not field names it knew, `connectives` /
// `accept` are bare arrays, and a `'…' + '…'` chain was scanned to its first
// literal only. All three are fixed in the lint; the header line above that
// says "keep it clean" is now true rather than aspirational.

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
      // Both orders: "Brat se zove Ivan" (clitic after the subject) is the
      // model's own form — a learner writing correct Croatian must tick the box.
      { id: 'names', label: 'Give a name with "zove se"', words: ['zove se', 'se zove'] },
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
  {
    id: 'a1-home',
    level: 'A1',
    title: 'Where I live',
    prompt: 'Opiši gdje živiš: u kući ili u stanu, koliko soba imaš i koja ti je soba najdraža.',
    promptEn:
      'Describe where you live: a house or a flat, how many rooms you have and which room is your favourite.',
    minWords: 20,
    model:
      'Živim u stanu na drugom katu. Stan nije velik, ali je svijetao. ' +
      'Imam kuhinju, dnevnu sobu, spavaću sobu i kupaonicu. ' +
      'Najdraža mi je kuhinja jer ondje pijem kavu s obitelji. ' +
      'Na balkonu imam cvijeće. Ispred zgrade je mali park.',
    modelEn:
      'I live in a flat on the second floor. The flat is not big, but it is bright. ' +
      'I have a kitchen, a living room, a bedroom and a bathroom. ' +
      'The kitchen is my favourite because I drink coffee there with my family. ' +
      'On the balcony I have flowers. In front of the building there is a small park.',
    structures: [
      {
        hr: 'Živim u stanu na drugom katu.',
        en: 'I live in a flat on the second floor.',
        why: '"u" and "na" + locative for where something is: stan → u stanu, drugi kat → na drugom katu.',
      },
      {
        hr: 'Stan nije velik, ali je svijetao.',
        en: 'The flat is not big, but it is bright.',
        why: 'Negate with "nije" and contrast with "ali" — two ideas in one sentence.',
      },
      {
        hr: 'Najdraža mi je kuhinja',
        en: 'The kitchen is my favourite',
        why: '"mi" (to me) sits in second position — literally "the kitchen is dearest to me".',
      },
    ],
    frames: [
      {
        before: 'Živim u',
        answer: 'kući',
        accept: ['stanu'],
        after: 'blizu centra.',
        hint: 'A place after "u" takes the locative: kuća → ...',
      },
      {
        before: 'Stan',
        answer: 'nije',
        after: 'velik, ali je lijep.',
        hint: 'The negative form of "je" — "is not".',
      },
      {
        before: 'Najdraža',
        answer: 'mi',
        after: 'je dnevna soba.',
        hint: '"dearest TO ME" — the short dative pronoun, second position.',
      },
    ],
    connectives: ['i', 'ali', 'jer', 'ondje', 'ispred'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'rooms', label: 'Name at least one room', words: ['kuhinj', 'sob', 'kupaonic'] },
      { id: 'fav', label: 'Say which room you like best', words: ['najdraž', 'volim'] },
    ],
  },
  {
    id: 'a1-food',
    level: 'A1',
    title: 'What I like to eat',
    prompt: 'Napiši što voliš jesti i piti, a što ne voliš. Što jedeš za doručak?',
    promptEn:
      'Write what you like to eat and drink, and what you do not like. What do you eat for breakfast?',
    minWords: 20,
    model:
      'Volim jesti ribu i salatu. Ne volim meso. Za doručak jedem kruh sa sirom i pijem čaj. ' +
      'Moja mama kuha odličnu juhu. Nedjeljom jedemo palačinke s marmeladom. ' +
      'Najviše volim sladoled od čokolade.',
    modelEn:
      'I like eating fish and salad. I do not like meat. For breakfast I eat bread with cheese and drink tea. ' +
      'My mum cooks an excellent soup. On Sundays we eat pancakes with jam. ' +
      'Most of all I like chocolate ice cream.',
    structures: [
      {
        hr: 'Volim jesti ribu i salatu.',
        en: 'I like eating fish and salad.',
        why: '"voljeti" + infinitive; the food is the object — accusative: riba → ribu, salata → salatu.',
      },
      {
        hr: 'kruh sa sirom',
        en: 'bread with cheese',
        why: '"s/sa" + instrumental for "with": sir → sa sirom ("sa" before s, š, z, ž).',
      },
      {
        hr: 'Za doručak jedem',
        en: 'For breakfast I eat',
        why: '"za" + accusative names the meal: za doručak, za ručak, za večeru.',
      },
    ],
    frames: [
      {
        before: 'Volim jesti',
        answer: 'juhu',
        accept: ['ribu', 'salatu', 'pizzu'],
        after: 'i piti sok.',
        hint: 'The object of "jesti" takes the accusative: juha → ...',
      },
      {
        before: 'Jedem kruh',
        answer: 'sa',
        after: 'sirom i rajčicom.',
        hint: '"With" before a word starting with s — s or sa?',
      },
      {
        before: 'Za',
        answer: 'doručak',
        accept: ['ručak', 'večeru'],
        after: 'jedem jaja.',
        hint: 'The meal after "za" — accusative, so "doručak" keeps its form.',
      },
    ],
    connectives: ['i', 'a', 'ali', 'najviše', 'nedjeljom'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'like', label: 'Say what you like with "volim"', words: ['volim'] },
      { id: 'not', label: 'Say what you do not like with "ne volim"', words: ['ne volim'] },
      {
        id: 'meal',
        label: 'Name a meal with "za doručak / ručak / večeru"',
        words: ['za doručak', 'za ručak', 'za večeru'],
      },
    ],
  },
  {
    id: 'a1-message',
    level: 'A1',
    title: 'A short text message',
    prompt: 'Napiši kratku poruku prijatelju: gdje si, što radiš i kada se možete vidjeti.',
    promptEn:
      'Write a short text message to a friend: where you are, what you are doing and when you can meet.',
    minWords: 20,
    model:
      'Bog Marko! Ja sam u centru, pijem kavu s Anom. Što ti radiš? ' +
      'Imaš li vremena poslije posla? Možemo se vidjeti u šest ispred kina. ' +
      'Javi mi! Vidimo se.',
    modelEn:
      'Hi Marko! I am in the centre, having coffee with Ana. What are you doing? ' +
      'Do you have time after work? We can meet at six in front of the cinema. ' +
      'Let me know! See you.',
    structures: [
      {
        hr: 'Bog Marko!',
        en: 'Hi Marko!',
        why: 'The greeting is "bog"; names ending in -o keep their form when you address someone.',
      },
      {
        hr: 'Imaš li vremena poslije posla?',
        en: 'Do you have time after work?',
        why: 'A yes/no question puts "li" right after the verb; "poslije" governs the genitive: posao → posla.',
      },
      {
        hr: 'Možemo se vidjeti u šest',
        en: 'We can meet at six',
        why: '"vidjeti se" — "se" goes second, before the infinitive; "u" + the hour.',
      },
    ],
    frames: [
      {
        before: 'Imaš',
        answer: 'li',
        after: 'vremena sutra?',
        hint: 'The question particle — straight after the verb.',
      },
      {
        before: 'Možemo',
        answer: 'se',
        after: 'vidjeti u pet.',
        hint: 'The reflexive for "meet each other" — second position.',
      },
      {
        before: 'Vidimo se poslije',
        answer: 'posla',
        accept: ['ručka', 'škole'],
        after: '.',
        hint: '"poslije" takes the genitive: posao → ...',
      },
    ],
    connectives: ['bog', 'javi mi', 'poslije', 'vidimo se', 'u šest'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'q', label: 'Ask a question with "li"', words: [' li '] },
      {
        id: 'meet',
        label: 'Suggest meeting with "vidimo se" or "možemo se vidjeti"',
        words: ['vidimo se', 'možemo se'],
      },
    ],
  },
  {
    id: 'a1-saturday',
    level: 'A1',
    title: 'My Saturday',
    prompt: 'Napiši što radiš u subotu: kamo ideš, s kim i što radite.',
    promptEn: 'Write what you do on Saturday: where you go, with whom and what you do.',
    minWords: 20,
    model:
      'U subotu idem na tržnicu s mamom. Kupujemo voće i sir. Poslije idemo u kafić na kavu. ' +
      'Poslijepodne idem k prijatelju. Igramo nogomet u parku. ' +
      'Navečer gledamo film kod mene.',
    modelEn:
      'On Saturday I go to the market with my mum. We buy fruit and cheese. Afterwards we go to a café for coffee. ' +
      'In the afternoon I go to a friend’s. We play football in the park. ' +
      'In the evening we watch a film at my place.',
    structures: [
      {
        hr: 'idem na tržnicu s mamom',
        en: 'I go to the market with my mum',
        why: 'Movement TO a place: "na/u" + accusative (tržnica → na tržnicu); "s" + instrumental for company: mama → s mamom.',
      },
      {
        hr: 'idem k prijatelju',
        en: 'I go to a friend’s',
        why: 'Going to a PERSON uses "k" + dative: prijatelj → k prijatelju.',
      },
      {
        hr: 'Igramo nogomet u parku.',
        en: 'We play football in the park.',
        why: 'Being AT a place: "u" + locative — park → u parku. Compare "idem u park" (going there).',
      },
    ],
    frames: [
      {
        before: 'U subotu idem na',
        answer: 'tržnicu',
        accept: ['plažu', 'kavu'],
        after: 's mamom.',
        hint: 'Going TO somewhere: "na" + accusative — tržnica → ...',
      },
      {
        before: 'Poslijepodne idem k',
        answer: 'baki',
        accept: ['prijatelju', 'sestri', 'bratu'],
        after: '.',
        hint: 'Going to a person: "k" + dative — baka → ...',
      },
      {
        before: 'Igramo nogomet u',
        answer: 'parku',
        accept: ['školi', 'dvorištu'],
        after: '.',
        hint: 'Where you ARE: "u" + locative — park → ...',
      },
    ],
    connectives: ['poslije', 'poslijepodne', 'navečer', 's mamom', 'kod mene'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      {
        id: 'go',
        label: 'Say where you go with "idem u / na"',
        words: ['idem u', 'idem na', 'idemo u', 'idemo na'],
      },
      {
        id: 'who',
        label: 'Say who you are with ("s mamom", "s prijateljem")',
        words: [' s ', ' sa '],
      },
    ],
  },
  {
    id: 'a1-card',
    level: 'A1',
    title: 'A birthday card',
    prompt:
      'Napiši čestitku za rođendan baki ili djedu: čestitaj, poželi nešto lijepo i reci kada dolaziš u posjet.',
    promptEn:
      'Write a birthday card to your grandma or grandpa: congratulate them, wish them something nice and say when you are coming to visit.',
    minWords: 20,
    model:
      'Draga bako, sretan ti rođendan! Želim ti puno zdravlja, sreće i ljubavi. ' +
      'Hvala ti za sve što radiš za nas. Dolazimo k tebi u nedjelju na ručak. ' +
      'Nosim ti kolač i cvijeće. Voli te tvoja Ana.',
    modelEn:
      'Dear Grandma, happy birthday! I wish you lots of health, happiness and love. ' +
      'Thank you for everything you do for us. We are coming to you on Sunday for lunch. ' +
      'I am bringing you a cake and flowers. Your Ana loves you.',
    structures: [
      {
        hr: 'Draga bako',
        en: 'Dear Grandma',
        why: 'Addressing someone: the vocative — baka → bako, djed → djede.',
      },
      {
        hr: 'Želim ti puno zdravlja, sreće i ljubavi.',
        en: 'I wish you lots of health, happiness and love.',
        why: '"puno" + genitive: zdravlje → zdravlja, sreća → sreće; "ti" = to you.',
      },
      {
        hr: 'Dolazimo k tebi u nedjelju',
        en: 'We are coming to you on Sunday',
        why: '"k" + dative for going to a person (k tebi); "u" + accusative for the day.',
      },
    ],
    frames: [
      {
        before: 'Draga',
        answer: 'bako',
        accept: ['mamo', 'teto', 'sestro'],
        after: ', sretan ti rođendan!',
        hint: 'Addressing grandma: the vocative of "baka".',
      },
      {
        before: 'Želim ti puno',
        answer: 'zdravlja',
        accept: ['uspjeha', 'veselja'],
        after: ', sreće i ljubavi.',
        hint: '"puno" takes the genitive: zdravlje → ...',
      },
      {
        before: 'Dolazimo k',
        answer: 'tebi',
        after: 'u nedjelju.',
        hint: '"to you" after "k" — the dative of "ti".',
      },
    ],
    connectives: ['sretan rođendan', 'želim ti', 'hvala ti', 'u nedjelju', 'voli te'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'wish', label: 'Wish something with "želim ti"', words: ['želim ti', 'želim vam'] },
      {
        id: 'when',
        label: 'Say when you are coming',
        words: ['dolazim', 'dolazimo', 'u subotu', 'u nedjelju'],
      },
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
  {
    id: 'a2-person',
    level: 'A2',
    title: 'Describe a friend',
    prompt:
      'Opiši svog najboljeg prijatelja ili prijateljicu: kako izgleda, kakav je karakter i što volite raditi zajedno.',
    promptEn:
      'Describe your best friend: what they look like, what their character is like and what you like doing together.',
    minWords: 30,
    model:
      'Moja najbolja prijateljica zove se Ivana. Visoka je i ima dugu smeđu kosu i zelene oči. ' +
      'Uvijek je vesela i nikad ne kasni. Poznajemo se od osnovne škole. ' +
      'Volimo zajedno šetati uz rijeku i razgovarati o svemu. ' +
      'Kad imam problem, ona me prva sasluša.',
    modelEn:
      'My best friend is called Ivana. She is tall and has long brown hair and green eyes. ' +
      'She is always cheerful and never late. We have known each other since primary school. ' +
      'We like walking along the river together and talking about everything. ' +
      'When I have a problem, she is the first to listen to me.',
    structures: [
      {
        hr: 'ima dugu smeđu kosu i zelene oči',
        en: 'has long brown hair and green eyes',
        why: 'Adjectives agree with their noun in case: duga smeđa kosa → dugu smeđu kosu (accusative).',
      },
      {
        hr: 'nikad ne kasni',
        en: 'is never late',
        why: 'Croatian doubles the negative: "nikad" AND "ne" together.',
      },
      {
        hr: 'Poznajemo se od osnovne škole.',
        en: 'We have known each other since primary school.',
        why: '"od" + genitive for "since": osnovna škola → od osnovne škole.',
      },
    ],
    frames: [
      {
        before: 'Ima',
        answer: 'plavu',
        accept: ['smeđu', 'crnu', 'dugu', 'kratku'],
        after: 'kosu i smeđe oči.',
        hint: 'The adjective must match "kosu" — feminine accusative: plava → ...',
      },
      {
        before: 'Nikad',
        answer: 'ne',
        after: 'kasni na sastanak.',
        hint: 'The second half of the double negative.',
      },
      {
        before: 'Poznajemo se od',
        answer: 'djetinjstva',
        accept: ['škole', 'fakulteta'],
        after: '.',
        hint: '"since" = "od" + genitive: djetinjstvo → ...',
      },
    ],
    connectives: ['uvijek', 'nikad', 'zajedno', 'kad', 'od'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'look',
        label: 'Describe looks (hair, eyes, height)',
        words: ['kosu', 'oči', 'visok', 'visoka', 'nizak', 'niska'],
      },
      {
        id: 'char',
        label: 'Describe character with "uvijek" or "nikad"',
        words: ['uvijek', 'nikad'],
      },
    ],
  },
  {
    id: 'a2-recipe',
    level: 'A2',
    title: 'A simple recipe',
    prompt:
      'Napiši jednostavan recept za jelo koje voliš: koji su sastojci i kako se priprema, korak po korak.',
    promptEn:
      'Write a simple recipe for a dish you like: the ingredients and how it is prepared, step by step.',
    minWords: 30,
    model:
      'Za palačinke trebate dva jaja, čašu mlijeka, žlicu šećera i malo brašna. ' +
      'Prvo pomiješajte jaja i mlijeko. Zatim dodajte šećer i brašno pa miješajte dok smjesa ne bude glatka. ' +
      'Zagrijte tavu i ulijte malo ulja. Pecite palačinke s obje strane. ' +
      'Na kraju ih namažite marmeladom.',
    modelEn:
      'For pancakes you need two eggs, a glass of milk, a spoon of sugar and a little flour. ' +
      'First mix the eggs and milk. Then add the sugar and flour and stir until the mixture is smooth. ' +
      'Heat the pan and pour in a little oil. Fry the pancakes on both sides. ' +
      'Finally spread them with jam.',
    structures: [
      {
        hr: 'čašu mlijeka, žlicu šećera i malo brašna',
        en: 'a glass of milk, a spoon of sugar and a little flour',
        why: 'Quantities take the genitive: mlijeko → mlijeka, šećer → šećera, brašno → brašna.',
      },
      {
        hr: 'Prvo pomiješajte ... Zatim dodajte',
        en: 'First mix ... Then add',
        why: 'Recipes use the polite imperative (-jte) and sequence words: prvo, zatim, na kraju.',
      },
      {
        hr: 'dok smjesa ne bude glatka',
        en: 'until the mixture is smooth',
        why: '"dok ... ne" = "until" — note the "ne" that English does not have.',
      },
    ],
    frames: [
      {
        before: 'Trebate čašu',
        answer: 'mlijeka',
        accept: ['vode', 'vina'],
        after: 'i dvije žlice šećera.',
        hint: 'A measure + genitive: mlijeko → ...',
      },
      {
        before: 'Zatim',
        answer: 'dodajte',
        accept: ['pomiješajte', 'ulijte'],
        after: 'brašno i miješajte.',
        hint: 'The polite imperative of "dodati" — "add".',
      },
      {
        before: 'Miješajte dok smjesa',
        answer: 'ne',
        after: 'bude glatka.',
        hint: 'The little word Croatian needs in "until".',
      },
    ],
    connectives: ['prvo', 'zatim', 'pa', 'na kraju', 'dok'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'qty',
        label: 'Give a quantity with the genitive (čašu mlijeka, žlicu šećera)',
        words: ['čašu', 'žlicu', 'malo', 'kilogram', 'gram'],
      },
      {
        id: 'seq',
        label: 'Sequence the steps with "prvo", "zatim", "na kraju"',
        words: ['prvo', 'zatim', 'na kraju', 'onda'],
      },
    ],
  },
  {
    id: 'a2-directions',
    level: 'A2',
    title: 'Giving directions',
    prompt: 'Prijatelj dolazi k tebi prvi put. Napiši mu kako doći od stanice do tvog stana.',
    promptEn:
      'A friend is coming to your place for the first time. Write how to get from the station to your flat.',
    minWords: 30,
    model:
      'Kad iziđeš iz tramvaja, skreni lijevo i idi ravno do semafora. ' +
      'Na semaforu prijeđi cestu i nastavi pored pekarnice. ' +
      'Nakon sto metara vidjet ćeš veliku bijelu zgradu preko puta parka. To je moja zgrada. ' +
      'Stan je na trećem katu, lijevo od lifta. Nazovi me ako se izgubiš!',
    modelEn:
      'When you get off the tram, turn left and go straight to the traffic lights. ' +
      'At the lights cross the road and continue past the bakery. ' +
      'After a hundred metres you will see a big white building opposite the park. That is my building. ' +
      'The flat is on the third floor, left of the lift. Call me if you get lost!',
    structures: [
      {
        hr: 'skreni lijevo i idi ravno do semafora',
        en: 'turn left and go straight to the traffic lights',
        why: 'Directions use the familiar imperative (skreni, idi); "do" + genitive for "as far as": semafor → do semafora.',
      },
      {
        hr: 'pored pekarnice',
        en: 'past the bakery',
        why: '"pored" (next to / past) governs the genitive: pekarnica → pekarnice.',
      },
      {
        hr: 'preko puta parka',
        en: 'opposite the park',
        why: '"preko puta" (opposite) + genitive: park → parka.',
      },
    ],
    frames: [
      {
        before: 'Idi ravno do',
        answer: 'semafora',
        accept: ['crkve', 'trga', 'mosta'],
        after: 'i skreni desno.',
        hint: '"do" takes the genitive: semafor → ...',
      },
      {
        before: 'Nastavi pored',
        answer: 'pekarnice',
        accept: ['škole', 'banke', 'pošte'],
        after: 'do kraja ulice.',
        hint: '"pored" takes the genitive: pekarnica → ...',
      },
      {
        before: 'Stan je na',
        answer: 'trećem',
        accept: ['drugom', 'prvom', 'četvrtom'],
        after: 'katu.',
        hint: 'The floor after "na" — an ordinal in the locative: treći → ...',
      },
    ],
    connectives: ['lijevo', 'desno', 'ravno', 'pored', 'preko puta', 'nakon'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'imp',
        label: 'Use imperatives (skreni, idi, prijeđi)',
        words: ['skreni', 'idi ', 'prijeđi', 'nastavi'],
      },
      {
        id: 'prep',
        label: 'Use "pored", "do" or "preko puta" with a place',
        words: ['pored', 'do ', 'preko puta'],
      },
    ],
  },
  {
    id: 'a2-apology',
    level: 'A2',
    title: 'An apology message',
    prompt:
      'Nisi došao ili došla na dogovor s prijateljem. Napiši mu poruku: ispričaj se, objasni što se dogodilo i predloži novi termin.',
    promptEn:
      'You missed a meeting with a friend. Write them a message: apologise, explain what happened and suggest a new time.',
    minWords: 30,
    model:
      'Bog Petra, jako mi je žao što jučer nisam došla na kavu. ' +
      'Autobus je kasnio pola sata, a mobitel mi se ispraznio, pa ti nisam mogla javiti. ' +
      'Nadam se da se ne ljutiš. Možemo li se vidjeti sutra u isto vrijeme? ' +
      'Kava je ovaj put na moj račun!',
    modelEn:
      'Hi Petra, I am really sorry I did not come for coffee yesterday. ' +
      'The bus was half an hour late, and my phone died, so I could not let you know. ' +
      'I hope you are not angry. Can we meet tomorrow at the same time? ' +
      'Coffee is on me this time!',
    structures: [
      {
        hr: 'jako mi je žao što',
        en: 'I am really sorry that',
        why: 'The apology formula: "žao mi je" + a "što" clause — "mi" and "je" both in second position.',
      },
      {
        hr: 'mobitel mi se ispraznio, pa ti nisam mogla javiti',
        en: 'my phone died, so I could not let you know',
        why: 'The clitic cluster keeps its order (mi se); "nisam mogla" = past negative of moći + infinitive.',
      },
      {
        hr: 'Možemo li se vidjeti sutra',
        en: 'Can we meet tomorrow',
        why: 'A question with "li" straight after the verb, then the reflexive "se".',
      },
    ],
    frames: [
      {
        before: 'Jako',
        answer: 'mi',
        after: 'je žao što nisam došao.',
        hint: '"sorry TO ME" — the short dative pronoun, second position.',
      },
      {
        before: 'Autobus je',
        answer: 'kasnio',
        after: 'pola sata.',
        hint: 'The past participle of "kasniti" — masculine, because "autobus" is masculine.',
      },
      {
        before: 'Možemo',
        answer: 'li',
        after: 'se vidjeti sutra?',
        hint: 'The question particle goes straight after the verb, before "se".',
      },
    ],
    connectives: ['žao mi je', 'jer', 'pa', 'nadam se', 'sutra'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'sorry',
        label: 'Apologise with "žao mi je" or "oprosti"',
        words: ['žao mi je', 'mi je žao', 'oprosti', 'ispričavam se'],
      },
      { id: 'why', label: 'Explain what happened in the past tense', words: [' sam ', ' je '] },
      { id: 'new', label: 'Suggest a new time', words: ['sutra', 'možemo', 'u '] },
    ],
  },
  {
    id: 'a2-summer',
    level: 'A2',
    title: 'Plans for the summer',
    prompt: 'Napiši što ćeš raditi ovog ljeta: kamo ćeš putovati, s kim i što ćete raditi ondje.',
    promptEn:
      'Write what you will do this summer: where you will travel, with whom and what you will do there.',
    minWords: 35,
    model:
      'Ovog ljeta putovat ću u Hrvatsku s obitelji. Prvo ćemo posjetiti rođake u Zagrebu, ' +
      'a zatim ćemo otići na otok Brač. Ondje ćemo se kupati, jesti svježu ribu i šetati uz more. ' +
      'Ja ću svaki dan vježbati hrvatski s bakom. Nadam se da će vrijeme biti lijepo. ' +
      'Bit će to najljepše ljeto!',
    modelEn:
      'This summer I will travel to Croatia with my family. First we will visit relatives in Zagreb, ' +
      'and then we will go to the island of Brač. There we will swim, eat fresh fish and walk by the sea. ' +
      'I will practise Croatian with my grandma every day. I hope the weather will be nice. ' +
      'It will be the best summer!',
    structures: [
      {
        hr: 'putovat ću u Hrvatsku',
        en: 'I will travel to Croatia',
        why: 'Future tense: the infinitive drops its final -i before ću (putovati → putovat ću) when the verb comes first.',
      },
      {
        hr: 'Prvo ćemo posjetiti rođake',
        en: 'First we will visit relatives',
        why: 'When another word comes first, the helper "ćemo" takes second position and the infinitive stays whole.',
      },
      {
        hr: 'Ondje ćemo se kupati',
        en: 'There we will swim',
        why: 'Future + reflexive: "ćemo se", both in the second-position cluster.',
      },
    ],
    frames: [
      {
        before: 'Ovog ljeta',
        answer: 'ću',
        after: 'putovati u Hrvatsku.',
        hint: 'The future helper for "I" — second position after "ovog ljeta".',
      },
      {
        before: 'Prvo ćemo',
        answer: 'posjetiti',
        accept: ['vidjeti'],
        after: 'rođake u Splitu.',
        hint: 'The infinitive stays whole when the helper comes first: "to visit".',
      },
      {
        before: 'Ondje ćemo',
        answer: 'se',
        after: 'kupati svaki dan.',
        hint: 'The reflexive joins the helper in the cluster: ćemo ...',
      },
    ],
    connectives: ['ovog ljeta', 'prvo', 'zatim', 'ondje', 'nadam se'],
    checklist: [
      { id: 'len', label: 'At least 35 words', minWords: 35 },
      { id: 'fut', label: 'Use the future tense (ću / ćemo / će)', words: ['ću', 'ćemo', 'će '] },
      {
        id: 'where',
        label: 'Say where you will go',
        words: ['u hrvatsku', 'na otok', 'na more', 'u '],
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
  {
    id: 'b1-job',
    level: 'B1',
    title: 'A simple job application',
    prompt:
      'Javljate se na oglas za posao konobara ili konobarice u kafiću uz more. Napišite kratku prijavu: tko ste, kakvo iskustvo imate i zašto ste dobar izbor.',
    promptEn:
      'You are replying to an ad for a waiter job at a seaside café. Write a short application: who you are, what experience you have and why you are a good choice.',
    minWords: 50,
    model:
      'Poštovani, javljam se na Vaš oglas za posao konobarice objavljen na internetu. ' +
      'Zovem se Lucija Marić, imam dvadeset tri godine i studiram turizam u Zadru. ' +
      'Dvije sam sezone radila u restoranu na Pagu, gdje sam naučila raditi brzo i pod pritiskom. ' +
      'Govorim engleski i njemački, a hrvatski mi je materinski jezik. ' +
      'Volim rad s ljudima i ne smeta mi rad vikendom. ' +
      'Rado bih došla na razgovor kad Vama odgovara. S poštovanjem, Lucija Marić',
    modelEn:
      'Dear Sir or Madam, I am replying to your advertisement for a waitress position published online. ' +
      'My name is Lucija Marić, I am twenty-three and I study tourism in Zadar. ' +
      'I worked two seasons in a restaurant on Pag, where I learned to work fast and under pressure. ' +
      'I speak English and German, and Croatian is my mother tongue. ' +
      'I enjoy working with people and do not mind weekend work. ' +
      'I would gladly come for an interview whenever suits you. Respectfully, Lucija Marić',
    structures: [
      {
        hr: 'javljam se na Vaš oglas',
        en: 'I am replying to your advertisement',
        why: '"javiti se na" + accusative — the standard opener for answering an ad; capital "Vaš" keeps the formal register.',
      },
      {
        hr: 'Dvije sam sezone radila u restoranu',
        en: 'I worked two seasons in a restaurant',
        why: 'The helper "sam" splits "dvije sezone" — clitics take second position even inside a phrase.',
      },
      {
        hr: 'ne smeta mi rad vikendom',
        en: 'weekend work does not bother me',
        why: '"smetati" + dative (mi); "vikendom" is the instrumental for "on weekends".',
      },
    ],
    frames: [
      {
        before: 'Javljam se na Vaš',
        answer: 'oglas',
        after: 'za posao konobara.',
        hint: 'The noun for "advertisement" — accusative after "na".',
      },
      {
        before: 'Dvije',
        answer: 'sam',
        after: 'godine radila u hotelu.',
        hint: 'The past helper for "I" — second position, splitting the phrase.',
      },
      {
        before: 'Ne smeta',
        answer: 'mi',
        after: 'rad vikendom.',
        hint: '"does not bother ME" — the dative pronoun.',
      },
    ],
    connectives: ['javljam se', 'gdje sam', 'osim toga', 'rado bih', 's poštovanjem'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'open',
        label: 'Open formally with "Poštovani" and "javljam se na"',
        words: ['poštovani', 'javljam se'],
      },
      {
        id: 'exp',
        label: 'Describe your experience in the past tense',
        words: ['radila sam', 'radio sam', 'sam radil', 'naučila', 'naučio'],
      },
      { id: 'close', label: 'Close with "S poštovanjem"', words: ['s poštovanjem'] },
    ],
  },
  {
    id: 'b1-anecdote',
    level: 'B1',
    title: 'A funny story',
    prompt:
      'Ispričajte smiješnu ili neugodnu zgodu koja vam se dogodila. Upotrijebite prošlo vrijeme i riječi za redoslijed događaja.',
    promptEn:
      'Tell a funny or embarrassing thing that happened to you. Use the past tense and words for the order of events.',
    minWords: 50,
    model:
      'Prošle godine dogodilo mi se nešto što još uvijek prepričavam. ' +
      'Čekala sam autobus na kolodvoru u Splitu i razgovarala na mobitel. ' +
      'Kad je autobus stigao, ušla sam, sjela i nastavila razgovor. ' +
      'Tek nakon dvadeset minuta shvatila sam da vozimo u krivom smjeru — prema Dubrovniku umjesto prema Zagrebu! ' +
      'Vozač se dugo smijao, a onda me ostavio na prvoj stanici. ' +
      'Od tada uvijek dvaput provjerim broj autobusa.',
    modelEn:
      'Last year something happened to me that I still tell people about. ' +
      'I was waiting for a bus at the station in Split and talking on my phone. ' +
      'When the bus arrived, I got on, sat down and continued the conversation. ' +
      'Only after twenty minutes did I realise we were going the wrong way — towards Dubrovnik instead of Zagreb! ' +
      'The driver laughed for a long time, and then left me at the first stop. ' +
      'Since then I always check the bus number twice.',
    structures: [
      {
        hr: 'Čekala sam autobus na kolodvoru u Splitu i razgovarala na mobitel.',
        en: 'I was waiting for a bus at the station in Split and talking on my phone.',
        why: 'Imperfective verbs (čekala, razgovarala) paint the background — what was going on.',
      },
      {
        hr: 'Kad je autobus stigao, ušla sam, sjela i nastavila razgovor.',
        en: 'When the bus arrived, I got on, sat down and continued the conversation.',
        why: 'Perfective verbs (stigao, ušla, sjela, nastavila) move the story forward, one event after another.',
      },
      {
        hr: 'Tek nakon dvadeset minuta shvatila sam',
        en: 'Only after twenty minutes did I realise',
        why: '"tek" (only, not until) delays the realisation — the hinge of every anecdote.',
      },
    ],
    frames: [
      {
        before: 'Čekala sam autobus i',
        answer: 'razgovarala',
        accept: ['čitala', 'slušala'],
        after: 'na mobitel.',
        hint: 'A background action — the IMPERFECTIVE past participle of "razgovarati".',
      },
      {
        before: 'Kad je autobus stigao,',
        answer: 'ušla',
        accept: ['ušao'],
        after: 'sam i sjela.',
        hint: 'A single completed event — the perfective "ući" in the past.',
      },
      {
        before: '',
        answer: 'Tek',
        after: 'nakon sat vremena shvatio sam pogrešku.',
        hint: 'The word for "only / not until" that delays the realisation.',
      },
    ],
    connectives: ['jednom', 'odjednom', 'tek', 'a onda', 'od tada'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'bg',
        label: 'Set the scene in the past tense (čekala sam, razgovarala sam)',
        words: ['sam ', ' je '],
      },
      {
        id: 'seq',
        label: 'Sequence events with "onda", "zatim" or "odjednom"',
        words: ['onda', 'zatim', 'odjednom', 'nakon'],
      },
      {
        id: 'end',
        label: 'Finish with what you learned or do now ("od tada")',
        words: ['od tada', 'sada', 'uvijek'],
      },
    ],
  },
  {
    id: 'b1-advice',
    level: 'B1',
    title: 'Advice to a friend',
    prompt:
      'Prijatelj vam piše da razmišlja o preseljenju u Hrvatsku, ali se boji. Napišite mu poruku sa savjetima: što bi trebao učiniti i što biste vi učinili na njegovu mjestu.',
    promptEn:
      'A friend writes that he is thinking of moving to Croatia but is afraid. Write him a message with advice: what he should do and what you would do in his place.',
    minWords: 50,
    model:
      'Dragi Tomislave, razumijem tvoj strah, ali mislim da je to prilika koju ne bi trebao propustiti. ' +
      'Na tvom mjestu ja bih najprije otišao na mjesec dana i vidio kako mi se sviđa svakodnevni život, a ne samo odmor. ' +
      'Savjetujem ti da već sada počneš tražiti posao preko interneta i da se javiš rođacima u Zagrebu. ' +
      'Trebao bi se i upisati na tečaj jezika — govoriš dobro, ali će ti pisanje trebati na poslu. ' +
      'Što god odlučiš, imaš moju podršku.',
    modelEn:
      'Dear Tomislav, I understand your fear, but I think this is an opportunity you should not miss. ' +
      'In your place I would first go for a month and see how I like everyday life, not just a holiday. ' +
      'I advise you to start looking for a job online already now and to get in touch with relatives in Zagreb. ' +
      'You should also enrol in a language course — you speak well, but you will need writing at work. ' +
      'Whatever you decide, you have my support.',
    structures: [
      {
        hr: 'Na tvom mjestu ja bih najprije otišao',
        en: 'In your place I would first go',
        why: '"na tvom mjestu" + the conditional (bih + participle) — the classic advice frame.',
      },
      {
        hr: 'Savjetujem ti da već sada počneš',
        en: 'I advise you to start already now',
        why: '"savjetovati" + dative (ti) + a "da" clause in the present — advice takes a clause, not an infinitive.',
      },
      {
        hr: 'Trebao bi se i upisati na tečaj',
        en: 'You should also enrol in a course',
        why: '"trebao bi" (you should) + infinitive; the reflexive "se" joins the "bi" cluster.',
      },
    ],
    frames: [
      {
        before: 'Na tvom mjestu ja',
        answer: 'bih',
        after: 'otišla na mjesec dana.',
        hint: 'The conditional helper for "I".',
      },
      {
        before: 'Savjetujem',
        answer: 'ti',
        after: 'da se javiš rođacima.',
        hint: '"I advise YOU" — the short dative pronoun.',
      },
      {
        before: 'Trebao',
        answer: 'bi',
        after: 'se upisati na tečaj.',
        hint: 'The conditional helper that turns "trebati" into "should".',
      },
    ],
    connectives: ['na tvom mjestu', 'savjetujem ti', 'trebao bi', 'najprije', 'što god'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'cond',
        label: 'Give advice with the conditional ("bih", "trebao bi")',
        words: ['bih', 'trebao bi', 'trebala bi'],
      },
      {
        id: 'adv',
        label: 'Use "savjetujem ti da" or "na tvom mjestu"',
        words: ['savjetujem', 'na tvom mjestu', 'na tvome mjestu'],
      },
    ],
  },
  {
    id: 'b1-forum',
    level: 'B1',
    title: 'A forum opinion post',
    prompt:
      'Na forumu se raspravlja trebaju li djeca iseljenika obvezno učiti hrvatski. Napišite svoje mišljenje: slažete li se, zašto, i odgovorite na jedan tuđi argument.',
    promptEn:
      'A forum thread asks whether emigrants’ children should be required to learn Croatian. Write your opinion: whether you agree, why, and respond to one other person’s argument.',
    minWords: 50,
    model:
      'Po mom mišljenju, djeca iseljenika trebala bi učiti hrvatski, ali ne pod prisilom. ' +
      'Slažem se s korisnikom Marinom da je jezik veza s bakama, djedovima i cijelom obitelji. ' +
      'Ne slažem se, međutim, da je dovoljna samo subotnja škola. ' +
      'Mislim da je najvažnije govoriti hrvatski kod kuće, makar i s greškama. ' +
      'Moji roditelji nisu inzistirali i danas mi je žao. ' +
      'Zato bih djeci dao priliku, ali ne i kaznu.',
    modelEn:
      'In my opinion, emigrants’ children should learn Croatian, but not under compulsion. ' +
      'I agree with user Marin that language is the link to grandmas, grandpas and the whole family. ' +
      'I do not agree, however, that Saturday school alone is enough. ' +
      'I think the most important thing is speaking Croatian at home, even with mistakes. ' +
      'My parents did not insist and today I regret it. ' +
      'So I would give children the opportunity, but not a punishment.',
    structures: [
      {
        hr: 'Slažem se s korisnikom Marinom da',
        en: 'I agree with user Marin that',
        why: '"slagati se s" + instrumental (s korisnikom Marinom) + a "da" clause — agreeing with a person.',
      },
      {
        hr: 'Ne slažem se, međutim, da',
        en: 'I do not agree, however, that',
        why: '"međutim" set off by commas signals the turn to disagreement.',
      },
      {
        hr: 'Mislim da je najvažnije govoriti hrvatski kod kuće',
        en: 'I think the most important thing is speaking Croatian at home',
        why: '"mislim da" + a clause gives your view; neuter "najvažnije" = "the most important thing".',
      },
    ],
    frames: [
      {
        before: 'Slažem se s',
        answer: 'Anom',
        accept: ['Marinom', 'Ivanom', 'tobom'],
        after: 'da je jezik važan.',
        hint: '"agree WITH" takes the instrumental: Ana → ...',
      },
      {
        before: 'Ne slažem se,',
        answer: 'međutim',
        accept: ['ipak'],
        after: ', da je škola dovoljna.',
        hint: 'The connective for "however", set off by commas.',
      },
      {
        before: 'Mislim',
        answer: 'da',
        after: 'je najvažnije govoriti kod kuće.',
        hint: 'The conjunction after "mislim" — "I think THAT".',
      },
    ],
    connectives: ['po mom mišljenju', 'slažem se', 'ne slažem se', 'međutim', 'zato'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'view',
        label: 'State your view ("po mom mišljenju", "mislim da")',
        words: ['po mom mišljenju', 'po mojem mišljenju', 'mislim da', 'smatram'],
      },
      {
        id: 'agree',
        label: 'Agree or disagree with someone ("slažem se s")',
        words: ['slažem se', 'ne slažem se'],
      },
    ],
  },
  {
    id: 'b1-tradition',
    level: 'B1',
    title: 'A family tradition',
    prompt:
      'Opišite jedan običaj koji vaša obitelj njeguje (Božić, Uskrs, Sveti Nikola, imendan...): što se radi, tko što priprema i zašto vam je važan.',
    promptEn:
      'Describe one custom your family keeps (Christmas, Easter, St Nicholas, a name day...): what is done, who prepares what and why it matters to you.',
    minWords: 50,
    model:
      'U mojoj obitelji Badnjak je važniji od samog Božića. ' +
      'Ujutro se kiti bor, a na stol se stavlja slama i tri svijeće. ' +
      'Baka peče bakalar, jer se na Badnjak ne jede meso, a mama sprema fritule. ' +
      'Navečer svi zajedno idemo na polnoćku, čak i oni koji inače ne idu u crkvu. ' +
      'Kad se vratimo, otvaramo darove. ' +
      'Taj mi je običaj važan jer se tada, jednom godišnje, cijela obitelj nađe na istom mjestu.',
    modelEn:
      'In my family Christmas Eve is more important than Christmas itself. ' +
      'In the morning the tree is decorated, and straw and three candles are placed on the table. ' +
      'Grandma bakes cod, because no meat is eaten on Christmas Eve, and Mum makes fritule. ' +
      'In the evening we all go to midnight Mass together, even those who do not usually go to church. ' +
      'When we return, we open presents. ' +
      'That custom matters to me because then, once a year, the whole family ends up in the same place.',
    structures: [
      {
        hr: 'Ujutro se kiti bor, a na stol se stavlja slama',
        en: 'In the morning the tree is decorated, and straw is placed on the table',
        why: 'Impersonal "se" for what "is done" — the voice of customs: kiti se, stavlja se.',
      },
      {
        hr: 'jer se na Badnjak ne jede meso',
        en: 'because no meat is eaten on Christmas Eve',
        why: 'Impersonal "se" + negation: "ne jede se" = "one does not eat"; "na Badnjak" = on that day.',
      },
      {
        hr: 'čak i oni koji inače ne idu u crkvu',
        en: 'even those who do not usually go to church',
        why: '"čak i" (even) + a "koji" relative clause — how you add the surprising detail.',
      },
    ],
    frames: [
      {
        before: 'Ujutro',
        answer: 'se',
        after: 'kiti bor.',
        hint: 'The impersonal particle — "the tree gets decorated".',
      },
      {
        before: 'Na Badnjak se ne',
        answer: 'jede',
        after: 'meso.',
        hint: 'Third-person present of "jesti" — "is (not) eaten".',
      },
      {
        before: 'Idu svi, čak i oni',
        answer: 'koji',
        after: 'inače ne idu u crkvu.',
        hint: 'The relative pronoun — "those WHO".',
      },
    ],
    connectives: ['ujutro', 'navečer', 'čak i', 'inače', 'jednom godišnje'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'se',
        label: 'Describe the custom with impersonal "se" (kiti se, jede se)',
        words: [' se '],
      },
      { id: 'who', label: 'Say who prepares what', words: ['peče', 'sprema', 'kuha', 'priprema'] },
      {
        id: 'why',
        label: 'Say why it matters to you ("važan mi je jer")',
        words: ['važan', 'važno', 'jer'],
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
  {
    id: 'b2-report',
    level: 'B2',
    title: 'Summarise an article',
    prompt:
      'Pročitali ste članak o tome da mladi u Hrvatskoj sve kasnije odlaze od roditelja. Napišite sažetak članka za prijatelja: o čemu je riječ, koji se podaci navode i što autorica zaključuje.',
    promptEn:
      'You have read an article saying young people in Croatia leave home later and later. Write a summary for a friend: what it is about, what data is cited and what the author concludes.',
    minWords: 80,
    model:
      'U članku se govori o tome da mladi u Hrvatskoj sve kasnije odlaze od roditelja. ' +
      'Prema podacima koje autorica navodi, prosječna dob odlaska iz roditeljskog doma iznosi trideset tri godine, što je među najvišima u Europi. ' +
      'Kao glavne razloge autorica ističe visoke cijene stanova, nesigurne poslove i snažne obiteljske veze. ' +
      'Zanimljivo je da većina ispitanika ne vidi u tome problem, nego prednost. ' +
      'Autorica ipak zaključuje da bi država trebala olakšati mladima put do prvog stana, ' +
      'jer se inače odgađaju i druge životne odluke — brak, djeca, selidba zbog posla.',
    modelEn:
      'The article is about young people in Croatia leaving their parents’ home later and later. ' +
      'According to the data the author cites, the average age of leaving the family home is thirty-three, among the highest in Europe. ' +
      'As the main reasons the author points to high housing prices, insecure jobs and strong family ties. ' +
      'Interestingly, most respondents see this not as a problem but as an advantage. ' +
      'The author nonetheless concludes that the state should make the path to a first flat easier for young people, ' +
      'because otherwise other life decisions are postponed too — marriage, children, moving for work.',
    structures: [
      {
        hr: 'U članku se govori o tome da',
        en: 'The article is about the fact that',
        why: 'The impersonal reporting frame; "o tome da" lets "o" take a whole clause.',
      },
      {
        hr: 'Prema podacima koje autorica navodi',
        en: 'According to the data the author cites',
        why: '"prema" + dative (podacima) for "according to"; the relative "koje" agrees with plural "podaci".',
      },
      {
        hr: 'ne vidi u tome problem, nego prednost',
        en: 'sees this not as a problem but as an advantage',
        why: 'The "ne ... nego" contrast — "not X but Y" — the way a summary reports a surprising finding.',
      },
    ],
    frames: [
      {
        before: 'U članku se govori o',
        answer: 'tome',
        after: 'da mladi kasno odlaze od roditelja.',
        hint: 'The demonstrative that lets "o" take a whole clause — the locative of "to".',
      },
      {
        before: 'Prema',
        answer: 'podacima',
        accept: ['istraživanju', 'autorici'],
        after: 'iz članka, prosječna dob je trideset tri godine.',
        hint: '"according to" = "prema" + dative: podaci → ...',
      },
      {
        before: 'Autorica',
        answer: 'zaključuje',
        accept: ['ističe', 'navodi'],
        after: 'da bi država trebala pomoći mladima.',
        hint: 'The reporting verb for "concludes".',
      },
    ],
    connectives: [
      'u članku se govori',
      'prema podacima',
      'autorica ističe',
      'zanimljivo je da',
      'zaključuje se',
    ],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'report',
        label: 'Report with "u članku se govori" or "autorica navodi / ističe"',
        words: ['u članku', 'navodi', 'ističe'],
      },
      {
        id: 'data',
        label: 'Cite a figure with "prema podacima"',
        words: ['prema', 'podac', 'posto', 'godin'],
      },
      { id: 'concl', label: 'Give the author’s conclusion', words: ['zaključuje', 'zaključak'] },
    ],
  },
  {
    id: 'b2-landlord',
    level: 'B2',
    title: 'A formal request to a landlord',
    prompt:
      'U stanu koji unajmljujete već tjedan dana ne radi grijanje. Napišite službenu poruku stanodavcu: opišite problem, podsjetite na ugovor i zatražite popravak u određenom roku.',
    promptEn:
      'The heating in the flat you rent has not worked for a week. Write a formal message to the landlord: describe the problem, refer to the contract and request a repair within a set deadline.',
    minWords: 80,
    model:
      'Poštovani gospodine Horvat, obraćam Vam se u vezi s grijanjem u stanu u Vukovarskoj 12, koji unajmljujem od rujna. ' +
      'Već tjedan dana radijatori ne rade, iako sam Vas o tome obavijestila telefonom prošlog ponedjeljka. ' +
      'Budući da su temperature pale ispod nule, stan je postao gotovo nepodoban za život. ' +
      'Podsjećam da je prema članku 5. ugovora održavanje instalacija obveza stanodavca. ' +
      'Stoga Vas molim da popravak organizirate u roku od tri dana. ' +
      'U protivnom bit ću prisiljena angažirati servis sama i trošak odbiti od najamnine. ' +
      'Zahvaljujem na razumijevanju i očekujem Vaš odgovor. S poštovanjem, Maja Perić',
    modelEn:
      'Dear Mr Horvat, I am writing to you regarding the heating in the flat at Vukovarska 12, which I have rented since September. ' +
      'For a week now the radiators have not worked, although I informed you of this by phone last Monday. ' +
      'Since temperatures have dropped below zero, the flat has become almost unfit to live in. ' +
      'I remind you that under Article 5 of the contract, maintenance of installations is the landlord’s obligation. ' +
      'I therefore ask you to organise the repair within three days. ' +
      'Otherwise I will be forced to hire a service myself and deduct the cost from the rent. ' +
      'Thank you for your understanding; I await your reply. Respectfully, Maja Perić',
    structures: [
      {
        hr: 'obraćam Vam se u vezi s grijanjem',
        en: 'I am writing to you regarding the heating',
        why: '"obraćati se" + dative (Vam) and "u vezi s" + instrumental — the formal way to state what a letter is about.',
      },
      {
        hr: 'iako sam Vas o tome obavijestila',
        en: 'although I informed you of this',
        why: 'Concessive "iako" + a clitic cluster (sam Vas) in second position — a formal letter still obeys clitic order.',
      },
      {
        hr: 'Stoga Vas molim da popravak organizirate u roku od tri dana.',
        en: 'I therefore ask you to organise the repair within three days.',
        why: '"stoga" draws the consequence; "u roku od" + genitive sets a deadline.',
      },
    ],
    frames: [
      {
        before: 'Obraćam Vam se u vezi',
        answer: 's',
        accept: ['sa'],
        after: 'grijanjem u stanu.',
        hint: 'The preposition in "u vezi ___ grijanjem" — instrumental "with".',
      },
      {
        before: 'Iako sam',
        answer: 'Vas',
        after: 'obavijestila telefonom, ništa se nije promijenilo.',
        hint: 'The formal "you" as object — accusative, capitalised, inside the clitic cluster.',
      },
      {
        before: 'Molim Vas da popravak organizirate u roku',
        answer: 'od',
        after: 'tri dana.',
        hint: 'The preposition that completes "within (a period of)".',
      },
    ],
    connectives: ['u vezi s', 'budući da', 'podsjećam da', 'stoga', 'u protivnom', 'u roku od'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'formal',
        label: 'Address the landlord formally ("Poštovani", "Vam", "Vas")',
        words: ['poštovani', 'vam ', 'vas '],
      },
      {
        id: 'contract',
        label: 'Refer to the contract or an obligation',
        words: ['ugovor', 'obvez', 'član'],
      },
      { id: 'deadline', label: 'Set a deadline ("u roku od")', words: ['u roku od', 'najkasnije'] },
    ],
  },
  {
    id: 'b2-screens',
    level: 'B2',
    title: 'Children and screens',
    prompt:
      'Napišite kratak komentar za školski bilten: koliko bi vremena djeca smjela provoditi pred ekranima? Iznesite svoj stav, uzmite u obzir suprotno mišljenje i predložite rješenje.',
    promptEn:
      'Write a short comment for a school newsletter: how much screen time should children have? State your view, take the opposite view into account and propose a solution.',
    minWords: 80,
    model:
      'Nerijetko se čuje da su ekrani glavni krivac za sve što ne valja s današnjom djecom — od loših ocjena do nesanice. ' +
      'Takva je tvrdnja, međutim, prejednostavna. ' +
      'S obzirom na to da djeca odrastaju u digitalnom svijetu, zabrana im ne bi pomogla, nego bi ih samo udaljila od vršnjaka. ' +
      'Što se tiče količine, stručnjaci uglavnom preporučuju najviše sat do dva dnevno, ovisno o dobi. ' +
      'Važnije od broja sati čini mi se pitanje sadržaja: sat crtića nije isto što i sat učenja programiranja. ' +
      'Predlažem stoga jednostavno pravilo — bez ekrana za stolom i sat prije spavanja, a ostalo uz razgovor, ne uz zabranu.',
    modelEn:
      'One often hears that screens are the main culprit for everything wrong with today’s children — from bad grades to insomnia. ' +
      'Such a claim, however, is too simple. ' +
      'Given that children grow up in a digital world, a ban would not help them but only distance them from their peers. ' +
      'As for quantity, experts mostly recommend at most one to two hours a day, depending on age. ' +
      'More important than the number of hours, it seems to me, is the question of content: an hour of cartoons is not the same as an hour of learning to code. ' +
      'I therefore propose a simple rule — no screens at the table and for an hour before bed, and the rest through conversation, not prohibition.',
    structures: [
      {
        hr: 'Nerijetko se čuje da',
        en: 'One often hears that',
        why: 'Impersonal "čuje se" + the litotes "nerijetko" — voice the common view without owning it.',
      },
      {
        hr: 'S obzirom na to da',
        en: 'Given that',
        why: 'The formal causal frame "given that" — takes a whole clause through "to da".',
      },
      {
        hr: 'Što se tiče količine',
        en: 'As for quantity',
        why: '"što se tiče" + genitive (količina → količine) — "as far as X is concerned", the topic-shifter.',
      },
    ],
    frames: [
      {
        before: 'Nerijetko se',
        answer: 'čuje',
        accept: ['govori', 'tvrdi'],
        after: 'da su ekrani glavni krivac.',
        hint: 'The impersonal verb — "one hears / it is heard".',
      },
      {
        before: 'S obzirom na',
        answer: 'to',
        after: 'da djeca odrastaju s tehnologijom, zabrana ne pomaže.',
        hint: 'The demonstrative that lets the frame take a clause: "s obzirom na ___ da".',
      },
      {
        before: 'Što se tiče',
        answer: 'količine',
        accept: ['sadržaja', 'vremena'],
        after: ', preporučuje se sat dnevno.',
        hint: '"što se tiče" takes the genitive: količina → ...',
      },
    ],
    connectives: [
      'nerijetko se čuje',
      'međutim',
      's obzirom na to da',
      'što se tiče',
      'čini mi se',
      'stoga',
    ],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'common',
        label: 'Voice the common view impersonally ("čuje se da", "tvrdi se")',
        words: ['čuje se', 'se čuje', 'kaže se', 'tvrdi se'],
      },
      {
        id: 'turn',
        label: 'Turn against it ("međutim", "ipak")',
        words: ['međutim', 'ipak', 'no '],
      },
      {
        id: 'prop',
        label: 'Propose a solution ("predlažem")',
        words: ['predlažem', 'rješenje', 'pravilo'],
      },
    ],
  },
  {
    id: 'b2-process',
    level: 'B2',
    title: 'How to apply for citizenship',
    prompt:
      'Prijatelj iz iseljeništva pita vas kako se podnosi zahtjev za hrvatsko državljanstvo po podrijetlu. Opišite postupak korak po korak: koji su dokumenti potrebni, gdje se zahtjev predaje i koliko sve traje.',
    promptEn:
      'A friend from the diaspora asks how to apply for Croatian citizenship by descent. Describe the procedure step by step: which documents are needed, where the application is submitted and how long it all takes.',
    minWords: 80,
    model:
      'Postupak nije složen, ali zahtijeva strpljenje. ' +
      'Najprije je potrebno prikupiti dokumente kojima se dokazuje podrijetlo: rodne listove roditelja ili djedova i vlastiti rodni list, sve prevedeno na hrvatski i ovjereno. ' +
      'Zatim se zahtjev predaje u najbližem hrvatskom konzulatu ili, ako ste u Hrvatskoj, u policijskoj upravi. ' +
      'Pri predaji se plaća upravna pristojba i obavlja kratak razgovor. ' +
      'Nakon toga slijedi najteži dio — čekanje. Odluka se u pravilu donosi u roku od godine dana, iako u praksi traje i dulje. ' +
      'Kad rješenje stigne, ostaje samo upis u knjigu državljana i podnošenje zahtjeva za putovnicu.',
    modelEn:
      'The procedure is not complicated, but it requires patience. ' +
      'First you need to gather the documents that prove your descent: the birth certificates of your parents or grandparents and your own, all translated into Croatian and certified. ' +
      'Then the application is submitted at the nearest Croatian consulate or, if you are in Croatia, at the police administration. ' +
      'On submission an administrative fee is paid and a short interview takes place. ' +
      'After that comes the hardest part — waiting. The decision is as a rule issued within a year, although in practice it takes longer. ' +
      'When the decision arrives, all that remains is entry in the register of citizens and applying for a passport.',
    structures: [
      {
        hr: 'Najprije je potrebno prikupiti dokumente kojima se dokazuje podrijetlo',
        en: 'First you need to gather the documents that prove your descent',
        why: '"potrebno je" + infinitive (impersonal necessity); "kojima" is the instrumental relative — "by which descent is proven".',
      },
      {
        hr: 'Zatim se zahtjev predaje',
        en: 'Then the application is submitted',
        why: 'The voice of procedures: impersonal "se" passive — "is submitted" — with no agent needed.',
      },
      {
        hr: 'Odluka se u pravilu donosi u roku od godine dana',
        en: 'The decision is as a rule issued within a year',
        why: '"u pravilu" (as a rule) hedges honestly; "u roku od" + genitive for the time limit.',
      },
    ],
    frames: [
      {
        before: 'Najprije je',
        answer: 'potrebno',
        accept: ['nužno'],
        after: 'prikupiti dokumente.',
        hint: 'The impersonal adjective for "necessary" — "it is necessary to".',
      },
      {
        before: 'Zatim se zahtjev',
        answer: 'predaje',
        after: 'u konzulatu.',
        hint: 'The third-person present of "predavati" with "se" — "is submitted".',
      },
      {
        before: 'Odluka se donosi u roku od',
        answer: 'godine',
        accept: ['mjeseca', 'tjedna'],
        after: 'dana.',
        hint: '"u roku od" + genitive: godina → ...',
      },
    ],
    connectives: ['najprije', 'zatim', 'pri predaji', 'nakon toga', 'u pravilu', 'na kraju'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'se',
        label: 'Describe the steps with impersonal "se" (predaje se, plaća se)',
        words: ['se predaje', 'predaje se', 'se plaća', 'plaća se', 'se donosi', 'donosi se'],
      },
      {
        id: 'seq',
        label: 'Order the steps (najprije, zatim, nakon toga)',
        words: ['najprije', 'zatim', 'nakon toga', 'na kraju'],
      },
      { id: 'time', label: 'Say how long it takes', words: ['u roku', 'traje', 'mjesec', 'godin'] },
    ],
  },
  {
    id: 'b2-which-city',
    level: 'B2',
    title: 'Which city would you recommend?',
    prompt:
      'Prijateljica iz Kanade seli se u Hrvatsku i pita vas da joj preporučite grad. Usporedite dva grada koja poznajete i obrazložite svoju preporuku.',
    promptEn:
      'A friend from Canada is moving to Croatia and asks you to recommend a city. Compare two cities you know and justify your recommendation.',
    minWords: 80,
    model:
      'Draga Nina, budući da si me pitala za savjet, usporedit ću Zagreb i Split, jer oba dobro poznajem. ' +
      'Zagreb nudi više poslova, bolju zdravstvenu skrb i bogatiji kulturni život, dok Split ima more, sunce i onaj mediteranski ritam zbog kojeg se ljudi u njega zaljubljuju. ' +
      'Za razliku od Splita, gdje su poslovi većinom sezonski, u Zagrebu ćeš lakše naći stalno zaposlenje u svojoj struci. ' +
      'S druge strane, život je u Zagrebu skuplji, a zime su duge i sive. ' +
      'Sve u svemu, preporučila bih ti Zagreb za početak: kad se snađeš i stekneš iskustvo, more ti nikamo ne bježi.',
    modelEn:
      'Dear Nina, since you asked me for advice, I will compare Zagreb and Split, because I know both well. ' +
      'Zagreb offers more jobs, better healthcare and a richer cultural life, while Split has the sea, the sun and that Mediterranean rhythm people fall in love with. ' +
      'Unlike Split, where jobs are mostly seasonal, in Zagreb you will more easily find permanent employment in your profession. ' +
      'On the other hand, life in Zagreb is more expensive, and the winters are long and grey. ' +
      'All in all, I would recommend Zagreb to start with: once you find your feet and gain experience, the sea is not going anywhere.',
    structures: [
      {
        hr: 'Zagreb nudi više poslova, bolju zdravstvenu skrb i bogatiji kulturni život, dok Split ima more',
        en: 'Zagreb offers more jobs, better healthcare and a richer cultural life, while Split has the sea',
        why: 'Comparatives (više, bolju, bogatiji) plus "dok" (while) set two options side by side in one sentence.',
      },
      {
        hr: 'Za razliku od Splita',
        en: 'Unlike Split',
        why: '"za razliku od" + genitive — "unlike X" — the sharpest contrast marker.',
      },
      {
        hr: 'Sve u svemu, preporučila bih ti Zagreb za početak',
        en: 'All in all, I would recommend Zagreb to start with',
        why: '"sve u svemu" (all in all) signals the verdict; the conditional "bih" keeps the recommendation polite.',
      },
    ],
    frames: [
      {
        before: 'Zagreb nudi više poslova,',
        answer: 'dok',
        accept: ['a'],
        after: 'Split ima more i sunce.',
        hint: 'The conjunction that sets two sides against each other — "while".',
      },
      {
        before: 'Za razliku od',
        answer: 'Splita',
        accept: ['Zagreba', 'Rijeke'],
        after: ', u Zagrebu ima više posla.',
        hint: '"unlike" = "za razliku od" + genitive: Split → ...',
      },
      {
        before: 'Sve u svemu, preporučila',
        answer: 'bih',
        after: 'ti Zagreb.',
        hint: 'The conditional helper — "I would recommend".',
      },
    ],
    connectives: ['budući da', 'dok', 'za razliku od', 's druge strane', 'sve u svemu'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'comp',
        label: 'Compare with comparatives (više, bolji, skuplji)',
        words: ['više', 'bolj', 'skuplj', 'jeftinij', 'već'],
      },
      {
        id: 'contrast',
        label: 'Contrast the two ("dok", "za razliku od", "s druge strane")',
        words: ['dok ', 'za razliku od', 's druge strane'],
      },
      {
        id: 'rec',
        label: 'Give a clear recommendation ("preporučila/preporučio bih")',
        words: ['preporuč'],
      },
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
      'u kojem vrijednost određuje ono što znaš, a ne ono što nosiš. ' +
      'U tom smislu odora nije ograničenje, nego oslobođenje.',
    modelEn:
      'The debate on mandatory school uniforms is not seldom reduced to a question of taste, ' +
      'but I believe it is a deeper social issue. ' +
      'Uniforms reduce the visible differences between pupils from different economic backgrounds, ' +
      'which softens the peer pressure that expensive clothing inevitably creates. ' +
      'Opponents rightly point out that this limits freedom of expression. ' +
      'But that argument overlooks a key fact: identity is not built by a brand of sneakers, ' +
      'but by knowledge, attitudes and relationships. Moreover, it is precisely the uniform that frees pupils ' +
      'from the daily race of dressing up. In conclusion, the advantages prevail: school should be a place ' +
      'where your worth is determined by what you know, not what you wear. ' +
      'In that sense a uniform is not a restriction, but a liberation.',
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
      // The model itself concedes with "Protivnici opravdano ističu", not with
      // a "premda" clause — the checklist must accept the model's own move.
      {
        id: 'conc',
        label: 'Concede a point ("premda / iako", "opravdano")',
        words: ['premda', 'iako', 'opravdano', 'doduše'],
      },
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
      'Malo je knjiga koje tako uvjerljivo pokazuju što znači pripadati dvama svjetovima, a nijednomu posve. ' +
      'Vrijedi ga pročitati dvaput: prvi put zbog priče, drugi put zbog rečenica.',
    modelEn:
      'This is a novel you read in one breath but do not forget for a long time. ' +
      'The plot follows three generations of a family between Dalmatia and foreign lands, ' +
      'and the narration skilfully alternates between past and present. ' +
      'The novel’s greatest strength is precisely its language: spare, precise, without needless ornament. ' +
      'Weaknesses do exist — the ending feels rushed, as if the author ran out of space, ' +
      'and certain minor characters remain mere sketches. ' +
      'Despite these objections, I warmly recommend the novel to anyone interested in the emigrant experience. ' +
      'Few books show so convincingly what it means to belong to two worlds, and to neither completely. ' +
      'It is worth reading twice: the first time for the story, the second for the sentences.',
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
  {
    id: 'c1-language-oped',
    level: 'C1',
    title: 'Language and identity',
    prompt:
      'Napišite komentar za portal o pitanju: gubi li se identitet kad se gubi jezik? Oslonite se na iskustvo iseljeništva, izbjegnite crno-bijele odgovore i završite jasnom tezom.',
    promptEn:
      'Write an op-ed for a news site on the question: is identity lost when a language is lost? Draw on the emigrant experience, avoid black-and-white answers and end with a clear thesis.',
    minWords: 100,
    model:
      'Pitanje gubi li se identitet s jezikom postavlja se najčešće onima koji ga više ne govore, a odgovaraju na njega, paradoksalno, oni koji ga nikad nisu ni prestali govoriti. ' +
      'Valja stoga imati na umu da identitet nije jednadžba s jednom nepoznanicom. ' +
      'Treća generacija iseljenika koja hrvatski razumije, ali ne govori, i dalje slavi iste blagdane, pjeva iste pjesme i pamti ista imena sela. ' +
      'Bilo bi, međutim, neiskreno tvrditi da jezik nije ništa: bez njega baština postaje muzej u koji se ulazi s vodičem. ' +
      'Riječ je, čini mi se, o razlici između pripadanja i sudjelovanja. ' +
      'Pripadati se može i bez jezika; sudjelovati — u šali, u svađi, u molitvi — ne može. ' +
      'Identitet se, dakle, ne gubi s jezikom, ali se bez njega neizbježno sužava.',
    modelEn:
      'The question of whether identity is lost along with language is asked most often of those who no longer speak it, and it is answered, paradoxically, by those who never stopped. ' +
      'It is therefore worth bearing in mind that identity is not an equation with one unknown. ' +
      'A third generation of emigrants who understand Croatian but do not speak it still celebrates the same holidays, sings the same songs and remembers the same village names. ' +
      'It would, however, be dishonest to claim that language is nothing: without it, heritage becomes a museum one enters with a guide. ' +
      'The difference, it seems to me, is between belonging and taking part. ' +
      'One can belong without the language; one cannot take part — in a joke, in an argument, in a prayer. ' +
      'Identity, then, is not lost with the language, but without it, it inevitably narrows.',
    structures: [
      {
        hr: 'Valja stoga imati na umu da',
        en: 'It is therefore worth bearing in mind that',
        why: '"valja" + infinitive is the impersonal "one ought to"; "imati na umu" = bear in mind — essayistic register.',
      },
      {
        hr: 'Bilo bi, međutim, neiskreno tvrditi da',
        en: 'It would, however, be dishonest to claim that',
        why: 'Impersonal conditional "bilo bi" + adjective + infinitive — the concession that keeps an argument honest.',
      },
      {
        hr: 'Pripadati se može i bez jezika; sudjelovati — u šali, u svađi, u molitvi — ne može.',
        en: 'One can belong without the language; one cannot take part — in a joke, in an argument, in a prayer.',
        why: 'Parallel infinitive subjects with impersonal "se može" — the antithesis carried by syntax alone.',
      },
    ],
    frames: [
      {
        before: '',
        answer: 'Valja',
        accept: ['Treba'],
        after: 'imati na umu da identitet nije jednadžba.',
        hint: 'The impersonal verb for "one ought to" — sentence-initial.',
      },
      {
        before: 'Bilo bi, međutim,',
        answer: 'neiskreno',
        accept: ['pogrešno', 'naivno'],
        after: 'tvrditi da jezik nije ništa.',
        hint: 'The neuter adjective after "bilo bi" — "it would be dishonest".',
      },
      {
        before: 'Pripadati',
        answer: 'se',
        after: 'može i bez jezika.',
        hint: 'The impersonal particle that makes "one can belong".',
      },
    ],
    connectives: [
      'valja imati na umu',
      'paradoksalno',
      'međutim',
      'riječ je o',
      'dakle',
      'neizbježno',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'frame',
        label: 'Frame the question impersonally ("postavlja se", "valja")',
        words: ['postavlja se', 'valja', 'treba'],
      },
      {
        id: 'concede',
        label: 'Concede honestly ("bilo bi neiskreno", "međutim")',
        words: ['bilo bi', 'međutim', 'ipak'],
      },
      {
        id: 'thesis',
        label: 'End with a clear thesis ("dakle")',
        words: ['dakle', 'stoga', 'zaključno'],
      },
    ],
  },
  {
    id: 'c1-appeal',
    level: 'C1',
    title: 'An objection to a decision',
    prompt:
      'Fakultet je odbio vaš zahtjev za priznavanje inozemne diplome zbog navodno nepotpune dokumentacije. Napišite prigovor: navedite činjenice, ukažite na propust i zatražite ponovno razmatranje.',
    promptEn:
      'The faculty rejected your request for recognition of a foreign degree, citing allegedly incomplete documentation. Write an objection: state the facts, point out the error and request reconsideration.',
    minWords: 100,
    model:
      'Poštovani, ulažem prigovor na rješenje od 12. ožujka kojim je odbijen moj zahtjev za priznavanje diplome. ' +
      'U obrazloženju se navodi da dokumentacija nije potpuna jer nedostaje ovjereni prijevod dopunske isprave o studiju. ' +
      'Ta je tvrdnja netočna: navedeni prijevod predan je 3. veljače, o čemu prilažem potvrdu s pečatom Vaše pisarnice. ' +
      'Držim stoga da je do odbijanja došlo zbog administrativnog propusta, a ne zbog nedostatka s moje strane. ' +
      'Molim da se rješenje preispita i da se postupak nastavi bez ponovnog plaćanja pristojbe, budući da razlog odbijanja nije na mojoj strani. ' +
      'Ako je za daljnji tijek potrebna dodatna dokumentacija, rado ću je dostaviti. S poštovanjem, Ivan Kovač',
    modelEn:
      'Dear Sir or Madam, I am lodging an objection to the decision of 12 March by which my request for recognition of my degree was rejected. ' +
      'The reasoning states that the documentation is incomplete because the certified translation of the diploma supplement is missing. ' +
      'That claim is incorrect: the translation in question was submitted on 3 February, for which I enclose a receipt stamped by your registry. ' +
      'I therefore hold that the rejection was due to an administrative error, not to any omission on my part. ' +
      'I ask that the decision be reconsidered and the procedure continued without a second fee, since the reason for rejection does not lie with me. ' +
      'If further documentation is needed for the process, I will gladly provide it. Respectfully, Ivan Kovač',
    structures: [
      {
        hr: 'ulažem prigovor na rješenje od 12. ožujka kojim je odbijen moj zahtjev',
        en: 'I am lodging an objection to the decision of 12 March by which my request was rejected',
        why: 'The legal opener: "uložiti prigovor na" + accusative; "kojim" (instrumental relative) = "by which".',
      },
      {
        hr: 'Ta je tvrdnja netočna',
        en: 'That claim is incorrect',
        why: 'A flat, formal rebuttal — "je" splits "ta tvrdnja" (second position), then the adjective.',
      },
      {
        hr: 'Držim stoga da je do odbijanja došlo zbog administrativnog propusta',
        en: 'I therefore hold that the rejection was due to an administrative error',
        why: '"držim da" (I hold that) + the impersonal "došlo je do" + genitive — naming a cause without accusing a person.',
      },
    ],
    frames: [
      {
        before: 'Ulažem prigovor na',
        answer: 'rješenje',
        accept: ['odluku'],
        after: 'od 12. ožujka.',
        hint: 'The noun for an administrative "decision / ruling" — accusative after "na".',
      },
      {
        before: 'Ta je tvrdnja',
        answer: 'netočna',
        accept: ['neutemeljena', 'pogrešna'],
        after: ': prijevod je predan u veljači.',
        hint: 'The feminine adjective for "incorrect", agreeing with "tvrdnja".',
      },
      {
        before: 'Do odbijanja je došlo',
        answer: 'zbog',
        after: 'administrativnog propusta.',
        hint: 'The preposition for "because of" — takes the genitive.',
      },
    ],
    connectives: [
      'ulažem prigovor',
      'u obrazloženju se navodi',
      'držim da',
      'stoga',
      'molim da se',
      'budući da',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'open',
        label: 'Open with "ulažem prigovor na"',
        words: ['ulažem prigovor', 'prigovor na'],
      },
      {
        id: 'rebut',
        label: 'Rebut a claim ("ta je tvrdnja netočna")',
        words: ['netočn', 'neutemeljen', 'pogrešn'],
      },
      {
        id: 'ask',
        label: 'Request reconsideration ("molim da se ... preispita")',
        words: ['preispita', 'ponovno razmotri', 'ponovno razmatranje'],
      },
    ],
  },
  {
    id: 'c1-toast',
    level: 'C1',
    title: 'A wedding toast',
    prompt:
      'Držite zdravicu na vjenčanju bliskog prijatelja. Napišite govor: obratite se uzvanicima, ispričajte kratku zgodu o paru, recite što im želite i pozovite na zdravicu.',
    promptEn:
      'You are giving a toast at a close friend’s wedding. Write the speech: address the guests, tell a short story about the couple, say what you wish them and invite everyone to raise a glass.',
    minWords: 100,
    model:
      'Draga Ana, dragi Marko, poštovani roditelji, dragi prijatelji! Dopustite mi da vam ukratko ispričam kako je počelo. ' +
      'Marko mi je prije pet godina rekao da je upoznao djevojku koja govori hrvatski bolje od njega, iako je rođena u Torontu. ' +
      'Mislio sam da se šali. Nije se šalio — Ana ga je već prve večeri ispravila tri puta. ' +
      'Od tada ga ispravlja svaki dan, a on je, koliko vidim, sretniji nego ikad. ' +
      'Draga Ana, dragi Marko, želim vam da vaš dom bude pun smijeha, da se svađate samo o tome tko će oprati suđe ' +
      'i da vas jezik — bilo koji — uvijek spaja, a nikad ne razdvaja. Podignimo čaše: za mladence, živjeli!',
    modelEn:
      'Dear Ana, dear Marko, esteemed parents, dear friends! Allow me to tell you briefly how it began. ' +
      'Five years ago Marko told me he had met a girl who spoke Croatian better than him, although she was born in Toronto. ' +
      'I thought he was joking. He was not — Ana corrected him three times on the very first evening. ' +
      'She has corrected him every day since, and he is, as far as I can see, happier than ever. ' +
      'Dear Ana, dear Marko, I wish you a home full of laughter, that you argue only about who does the dishes, ' +
      'and that language — any language — always unites you and never divides you. Let us raise our glasses: to the newlyweds, cheers!',
    structures: [
      {
        hr: 'Dopustite mi da vam ukratko ispričam',
        en: 'Allow me to tell you briefly',
        why: 'The speech opener: polite imperative "dopustite" + dative "mi" + a "da" clause — asking leave to speak.',
      },
      {
        hr: 'sretniji nego ikad',
        en: 'happier than ever',
        why: 'Comparative + "nego ikad" (than ever) — a compact superlative effect.',
      },
      {
        hr: 'Podignimo čaše: za mladence, živjeli!',
        en: 'Let us raise our glasses: to the newlyweds, cheers!',
        why: 'First-person-plural imperative "podignimo" invites everyone; "za" + accusative names who the toast is for.',
      },
    ],
    frames: [
      {
        before: 'Dopustite',
        answer: 'mi',
        after: 'da vam ispričam jednu zgodu.',
        hint: '"allow ME" — the short dative pronoun after the polite imperative.',
      },
      {
        before: 'Marko je danas sretniji nego',
        answer: 'ikad',
        after: '.',
        hint: 'The word that completes "happier than ever".',
      },
      {
        before: '',
        answer: 'Podignimo',
        accept: ['Dignimo'],
        after: 'čaše za mladence!',
        hint: 'The "let us ..." form of "podignuti" — first-person-plural imperative.',
      },
    ],
    connectives: ['dopustite mi', 'poštovani', 'od tada', 'želim vam', 'podignimo čaše', 'živjeli'],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'address',
        label: 'Address the guests with vocatives ("dragi prijatelji", "poštovani")',
        words: ['dragi', 'draga', 'poštovani'],
      },
      {
        id: 'wish',
        label: 'Wish the couple something ("želim vam da")',
        words: ['želim vam', 'želim ti'],
      },
      {
        id: 'toast',
        label: 'End with the toast ("podignimo čaše", "živjeli")',
        words: ['podignimo', 'živjeli', 'za mladence'],
      },
    ],
  },
  {
    id: 'c1-study-abroad',
    level: 'C1',
    title: 'Study at home or abroad?',
    prompt:
      'Napišite analitički tekst za studentski časopis: isplati li se mladima iz Hrvatske studirati u inozemstvu ili ostati? Usporedite obje opcije po više kriterija i dođite do odmjerene procjene.',
    promptEn:
      'Write an analytical piece for a student magazine: is it worth it for young Croatians to study abroad or to stay? Compare both options on several criteria and reach a measured assessment.',
    minWords: 100,
    model:
      'Odluka o studiju u inozemstvu rijetko se donosi na temelju jednog kriterija, pa je i ovdje valja razložiti. ' +
      'Dok strani fakulteti nude širi izbor programa i češće prakse u struci, dotle domaći nude nešto što se iz brošura ne vidi: mrežu ljudi koja ostaje i nakon diplome. ' +
      'Financijski gledano, razlika je manja nego što se čini, jer se visoke školarine u pravilu prebijaju stipendijama i radom uz studij. ' +
      'Presudan je, međutim, treći kriterij — povratak. ' +
      'Onaj tko odlazi bez namjere da se vrati stječe iskustvo, ali gubi kontekst; onaj tko ostaje zadržava kontekst, ali mu nedostaje usporedba. ' +
      'Prevaga stoga ovisi o namjeri: za onoga tko planira karijeru u Hrvatskoj, dvije godine vani i povratak čine se boljim putem od oba čista rješenja.',
    modelEn:
      'The decision to study abroad is rarely made on a single criterion, so here too it should be broken down. ' +
      'While foreign universities offer a wider choice of programmes and more frequent placements, domestic ones offer something brochures do not show: a network of people that remains after graduation. ' +
      'Financially, the difference is smaller than it seems, because high tuition fees are as a rule offset by scholarships and part-time work. ' +
      'Decisive, however, is a third criterion — return. ' +
      'Whoever leaves without intending to come back gains experience but loses context; whoever stays keeps the context but lacks comparison. ' +
      'The balance therefore depends on intent: for someone planning a career in Croatia, two years abroad and a return look like a better path than either pure option.',
    structures: [
      {
        hr: 'Dok strani fakulteti nude širi izbor programa i češće prakse u struci, dotle domaći nude',
        en: 'While foreign universities offer a wider choice of programmes and more frequent placements, domestic ones offer',
        why: 'The correlative "dok ... dotle" holds two options in one balanced sentence — analytical prose at its most compact.',
      },
      {
        hr: 'razlika je manja nego što se čini',
        en: 'the difference is smaller than it seems',
        why: 'Comparative + "nego što" + an impersonal clause — "smaller than it seems".',
      },
      {
        hr: 'Prevaga stoga ovisi o namjeri',
        en: 'The balance therefore depends on intent',
        why: '"ovisiti o" + locative (namjera → o namjeri); "prevaga" names the tipping of the balance — the verdict word.',
      },
    ],
    frames: [
      {
        before: 'Dok strani fakulteti nude više programa,',
        answer: 'dotle',
        after: 'domaći nude poznanstva.',
        hint: 'The second half of the correlative "dok ... ___".',
      },
      {
        before: 'Razlika je manja nego',
        answer: 'što',
        after: 'se čini.',
        hint: 'The word that lets "nego" take a whole clause.',
      },
      {
        before: 'Prevaga ovisi',
        answer: 'o',
        after: 'namjeri.',
        hint: 'The preposition "ovisiti" governs — it takes the locative.',
      },
    ],
    connectives: [
      'dok ... dotle',
      'u odnosu na',
      'financijski gledano',
      'presudan je',
      'prevaga',
      'stoga',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'criteria',
        label: 'Compare on more than one criterion',
        words: ['kriterij', 'financij', 's druge strane', 'dotle'],
      },
      {
        id: 'hedge',
        label: 'Hedge a claim ("u pravilu", "čini se")',
        words: ['u pravilu', 'čini se', 'uglavnom'],
      },
      {
        id: 'verdict',
        label: 'Reach a measured verdict ("prevaga", "ovisi o")',
        words: ['prevaga', 'ovisi o', 'stoga'],
      },
    ],
  },
  {
    id: 'c1-letter-editor',
    level: 'C1',
    title: 'A letter to the editor',
    prompt:
      'Napišite pismo uredniku novina kao reakciju na članak koji je iseljenike prikazao kao ljude koji se "vraćaju samo ljeti". Iznesite drugu stranu, potkrijepite je primjerima i ostanite odmjereni.',
    promptEn:
      'Write a letter to the editor reacting to an article that portrayed emigrants as people who "come back only in summer". Present the other side, support it with examples and stay measured.',
    minWords: 100,
    model:
      'Poštovani uredniče, s pozornošću sam pročitao članak "Ljetni Hrvati" objavljen 14. srpnja i osjećam potrebu iznijeti drugu stranu. ' +
      'Autor s pravom primjećuje da se dio iseljenika u domovinu vraća samo na odmor; iz toga, međutim, ne slijedi da je to sve što iseljeništvo daje. ' +
      'Dopustite tri primjera. Hrvatska katolička misija u Torontu već pedeset godina subotom uči djecu hrvatski, bez ijednog eura iz Hrvatske. ' +
      'Više od tisuću liječnika i inženjera iz dijaspore prošle je godine sudjelovalo u stručnim programima s domaćim sveučilištima. ' +
      'Naposljetku, doznake iseljenika iznose više od pet posto BDP-a. ' +
      'Ne tražim od autora da promijeni mišljenje, nego da ga upotpuni. ' +
      'Iseljenik koji se vraća samo ljeti i onaj koji domovinu nosi cijelu godinu često su ista osoba. S poštovanjem, Josip Barić, Toronto',
    modelEn:
      'Dear Editor, I read with attention the article "Summer Croats" published on 14 July, and I feel the need to present the other side. ' +
      'The author rightly notes that some emigrants return to the homeland only for holidays; it does not follow, however, that this is all the diaspora gives. ' +
      'Allow me three examples. The Croatian Catholic mission in Toronto has taught children Croatian every Saturday for fifty years, without a single euro from Croatia. ' +
      'More than a thousand doctors and engineers from the diaspora took part last year in professional programmes with Croatian universities. ' +
      'Finally, emigrants’ remittances amount to more than five per cent of GDP. ' +
      'I am not asking the author to change his mind, but to complete it. ' +
      'The emigrant who returns only in summer and the one who carries the homeland all year are often the same person. Respectfully, Josip Barić, Toronto',
    structures: [
      {
        hr: 'Autor s pravom primjećuje da ... iz toga, međutim, ne slijedi da',
        en: 'The author rightly notes that ... it does not follow, however, that',
        why: 'Grant the point ("s pravom" — rightly), then deny the inference: "iz toga ne slijedi da" is the logician’s pivot.',
      },
      {
        hr: 'Više od tisuću liječnika i inženjera iz dijaspore prošle je godine sudjelovalo',
        en: 'More than a thousand doctors and engineers from the diaspora took part last year',
        why: 'A quantity subject ("više od tisuću" + genitive plural) takes a NEUTER SINGULAR verb: sudjelovalo, not sudjelovali.',
      },
      {
        hr: 'Ne tražim od autora da promijeni mišljenje, nego da ga upotpuni.',
        en: 'I am not asking the author to change his mind, but to complete it.',
        why: '"tražiti od" + genitive + a "da" clause; "ne ... nego" reframes the demand as an addition, not an attack.',
      },
    ],
    frames: [
      {
        before: 'Autor',
        answer: 's pravom',
        accept: ['opravdano'],
        after: 'primjećuje da se dio iseljenika vraća samo ljeti.',
        hint: 'The two-word phrase for "rightly / with justification".',
      },
      {
        before: 'Više od tisuću liječnika',
        answer: 'je',
        after: 'sudjelovalo u programu.',
        hint: 'A quantity subject takes a singular helper — and the participle is neuter.',
      },
      {
        before: 'Ne tražim od autora da promijeni mišljenje,',
        answer: 'nego',
        after: 'da ga upotpuni.',
        hint: 'The contrast word in "not ... but".',
      },
    ],
    connectives: [
      's pozornošću',
      's pravom',
      'iz toga ne slijedi',
      'dopustite',
      'naposljetku',
      'ne ... nego',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'grant',
        label: 'Grant the author a point ("s pravom", "točno je da")',
        words: ['s pravom', 'točno je', 'opravdano'],
      },
      {
        id: 'ex',
        label: 'Give at least one concrete example with a number or a name',
        words: ['primjer', 'tisuć', 'posto', 'godin'],
      },
      {
        id: 'measured',
        label: 'Stay measured — reframe, do not attack ("ne ... nego")',
        words: ['nego', 'ne tražim', 'upotpun'],
      },
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
  {
    id: 'c2-portrait',
    level: 'C2',
    title: 'A portrait',
    prompt:
      'Napišite portret ili nekrolog osobe iz vaše zajednice koja je ostavila trag (učiteljica, svećenik, susjed, trener): ne životopis, nego sliku čovjeka kroz nekoliko točno odabranih detalja.',
    promptEn:
      'Write a portrait or obituary of someone from your community who left a mark (a teacher, priest, neighbour, coach): not a CV, but a picture of the person through a few precisely chosen details.',
    minWords: 120,
    model:
      'Gospođa Zdenka predavala je hrvatski u subotnjoj školi trideset i jednu godinu, i nitko od nas nije nikad doznao koliko ima godina. ' +
      'Dolazila je prva, odlazila posljednja i nosila torbu iz koje su, po potrebi, izlazile olovke, keksi i rodni listovi naših baka. ' +
      'Nije nas učila gramatiku; učila nas je da se riječ "kuća" izgovara drukčije kad je čovjek u njoj i kad je od nje daleko. ' +
      'Kad smo griješili, nije ispravljala — ponavljala je rečenicu pravilno, tiho, kao da je tek sad čula. ' +
      'Posljednjih je godina zaboravljala imena, ali ne i padeže. ' +
      'Umrla je u utorak, u snu, s naočalama na čelu i otvorenom bilježnicom na krilu. ' +
      'U njoj je, urednim rukopisom, stajao popis učenika za sljedeću subotu. Subota je došla; popis je ostao.',
    modelEn:
      'Mrs Zdenka taught Croatian at the Saturday school for thirty-one years, and none of us ever found out how old she was. ' +
      'She arrived first, left last and carried a bag from which, as needed, came pencils, biscuits and our grandmothers’ birth certificates. ' +
      'She did not teach us grammar; she taught us that the word "kuća" is pronounced differently when you are inside it and when you are far from it. ' +
      'When we made mistakes she did not correct us — she repeated the sentence correctly, quietly, as if she had only just heard it. ' +
      'In her last years she forgot names, but not cases. ' +
      'She died on a Tuesday, in her sleep, with her glasses on her forehead and an open notebook on her lap. ' +
      'In it, in neat handwriting, was the list of pupils for the following Saturday. Saturday came; the list remained.',
    structures: [
      {
        hr: 'Nije nas učila gramatiku; učila nas je da',
        en: 'She did not teach us grammar; she taught us that',
        why: 'Antithesis by repetition: the same verb, negated then affirmed, with the clitic "nas" shifting position each time.',
      },
      {
        hr: 'Posljednjih je godina zaboravljala imena, ali ne i padeže.',
        en: 'In her last years she forgot names, but not cases.',
        why: 'A genitive of time ("posljednjih godina") split by "je" in second position; "ali ne i" = "but not".',
      },
      {
        hr: 'U njoj je, urednim rukopisom, stajao popis učenika',
        en: 'In it, in neat handwriting, was the list of pupils',
        why: 'The instrumental of manner ("urednim rukopisom") set off by commas — the detail that closes a portrait.',
      },
    ],
    frames: [
      {
        before: 'Nije nas učila gramatiku; učila',
        answer: 'nas',
        after: 'je nešto važnije.',
        hint: 'The object clitic "us" — before "je" in the cluster.',
      },
      {
        before: 'Posljednjih',
        answer: 'je',
        after: 'godina zaboravljala imena.',
        hint: 'The past helper, second position — splitting the time phrase.',
      },
      {
        before: 'Popis je bio napisan',
        answer: 'urednim',
        accept: ['sitnim', 'drhtavim'],
        after: 'rukopisom.',
        hint: 'The adjective agreeing with "rukopisom" — instrumental of manner.',
      },
    ],
    connectives: [
      'nitko od nas',
      'po potrebi',
      'kao da',
      'ali ne i',
      'posljednjih godina',
      'naposljetku',
    ],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'detail',
        label: 'Build the portrait from concrete details (objects, habits), not adjectives',
        words: ['torb', 'olovk', 'naočal', 'bilježnic', 'rukopis', 'uvijek', 'svak'],
      },
      {
        id: 'anti',
        label: 'Use an antithesis ("nije ... nego", "ali ne i")',
        words: ['nije', 'ali ne i', 'nego'],
      },
      {
        id: 'close',
        label: 'Close on one image, not a summary',
        words: ['stajao', 'ostao', 'ostala', 'na krilu', 'na stolu'],
      },
    ],
  },
  {
    id: 'c2-norm-usage',
    level: 'C2',
    title: 'Norm and usage',
    prompt:
      'Napišite esej o odnosu jezične norme i uzusa: tko odlučuje što je "pravilno" kad govornici govore drukčije? Uzmite konkretan primjer iz hrvatskoga i izbjegnite i purizam i relativizam.',
    promptEn:
      'Write an essay on the relationship between linguistic norm and usage: who decides what is "correct" when speakers speak otherwise? Take a concrete Croatian example and avoid both purism and relativism.',
    minWords: 120,
    model:
      'Svaki govornik hrvatskoga barem je jednom bio ispravljen zbog nečega što govori cijela njegova ulica. ' +
      'Ta svakodnevna scena sažima staro pitanje: je li norma zapis onoga što se govori ili nalog o tome što bi se trebalo govoriti? ' +
      'Purist će reći drugo, a relativist prvo; obojica, čini se, promašuju. ' +
      'Uzmimo primjer: norma propisuje "u vezi s time", a golema većina govornika kaže "u vezi toga" — u uredima, u medijima, na sveučilištu. ' +
      'Purist u tome vidi propadanje jezika, relativist dokaz da je pravilo mrtvo. ' +
      'Oboje previđaju treću mogućnost: pravilo živi upravo zato što ga se netko još drži, a uzus ga nije zamijenio, nego mu se pridružio kao stilski slabija inačica. ' +
      'Norma, dakle, nije ni fotografija ni zakon, nego ugovor koji se povremeno obnavlja. ' +
      'Njezina je zadaća osigurati da se razumijemo preko granica dijalekata i generacija, a ne da se sramimo. ' +
      'Kad uzus jednoglasno napusti neko pravilo, norma ga prije ili poslije slijedi; kad je uzus podijeljen, norma bira — i to je jedino mjesto na kojem riječ "pravilno" ima smisla.',
    modelEn:
      'Every speaker of Croatian has at least once been corrected for something the whole street says. ' +
      'That everyday scene sums up an old question: is the norm a record of what is said, or an order about what ought to be said? ' +
      'The purist will say the latter, the relativist the former; both, it seems, miss. ' +
      'Take an example: the norm prescribes "u vezi s time", and the vast majority of speakers say "u vezi toga" — in offices, in the media, at university. ' +
      'The purist sees in this the decay of the language, the relativist proof that the rule is dead. ' +
      'Both overlook a third possibility: the rule lives precisely because someone still keeps it, and usage has not replaced it but joined it as a stylistically weaker variant. ' +
      'The norm, then, is neither a photograph nor a law, but a contract that is periodically renewed. ' +
      'Its task is to ensure we understand one another across dialects and generations, not to make us ashamed. ' +
      'When usage unanimously abandons a rule, the norm sooner or later follows; when usage is divided, the norm chooses — and that is the only place where the word "correct" makes sense.',
    structures: [
      {
        hr: 'je li norma zapis onoga što se govori ili nalog o tome što bi se trebalo govoriti',
        en: 'is the norm a record of what is said, or an order about what ought to be said',
        why: 'A framed alternative question ("je li X ili Y") with two nominalised clauses — how an essay states its problem in one breath.',
      },
      {
        hr: 'Purist će reći drugo, a relativist prvo; obojica, čini se, promašuju.',
        en: 'The purist will say the latter, the relativist the former; both, it seems, miss.',
        why: 'Chiasmus (drugo ... prvo) and a parenthetical "čini se" — dismissing both poles in one line.',
      },
      {
        hr: 'nije ni fotografija ni zakon, nego ugovor koji se povremeno obnavlja',
        en: 'is neither a photograph nor a law, but a contract that is periodically renewed',
        why: 'Double negation "ni ... ni" resolved by "nego" — the synthesis move, carried by a metaphor.',
      },
    ],
    frames: [
      {
        before: 'Je',
        answer: 'li',
        after: 'norma zapis ili nalog?',
        hint: 'The question particle — straight after the verb.',
      },
      {
        before: 'Purist će reći drugo,',
        answer: 'a',
        after: 'relativist prvo.',
        hint: 'The contrastive conjunction "whereas / and by contrast" — not "i", not "ali".',
      },
      {
        before: 'Norma nije ni fotografija ni zakon,',
        answer: 'nego',
        after: 'ugovor.',
        hint: 'The word that resolves "ni ... ni" into what it IS.',
      },
    ],
    connectives: [
      'uzmimo primjer',
      'čini se',
      'upravo zato što',
      'dakle',
      'ni ... ni',
      'prije ili poslije',
    ],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'ex',
        label: 'Use one concrete Croatian example (quote the forms)',
        words: ['"', '„', 'primjer'],
      },
      {
        id: 'both',
        label: 'Reject both poles ("purist", "relativist", "oboje")',
        words: ['purist', 'relativist', 'oboje', 'obojica'],
      },
      {
        id: 'synth',
        label: 'Synthesise ("dakle", "nego")',
        words: ['dakle', 'nego', 'naposljetku'],
      },
    ],
  },
  {
    id: 'c2-headline',
    level: 'C2',
    title: 'Analyse a headline',
    prompt:
      'Analizirajte naslov i uvod jednog novinskog članka po izboru: što se tvrdi izravno, što se sugerira, koje su riječi vrijednosno obojene i komu se tekst obraća. Pišite kao analitičar, ne kao komentator.',
    promptEn:
      'Analyse the headline and lead of a news article of your choice: what is claimed outright, what is implied, which words are value-laden and whom the text addresses. Write as an analyst, not a commentator.',
    minWords: 120,
    model:
      'Naslov "Iseljenici opet preplavili obalu" na prvi pogled prenosi vijest, a zapravo donosi ocjenu. ' +
      'Glagol "preplaviti" pripada leksiku prirodnih katastrofa; njime se ljudi koji dolaze kući pretvaraju u vodenu masu, dakle u nešto što se ne dočekuje, nego od čega se brani. ' +
      'Prilog "opet" dodaje prizvuk zamora, kao da je riječ o ponavljanju nečega nepoželjnog. ' +
      'U uvodu se navodi da su "brojke rekordne", ali se izvor tih brojki ne imenuje — statistika je tu retoričko sredstvo, a ne podatak. ' +
      'Zanimljivo je komu se tekst obraća: iseljenik, koji je nominalno tema, nigdje nije adresat; tekst govori domaćem čitatelju o njima, ne njima. ' +
      'Nije stoga riječ o vijesti o povratku, nego o vijesti o smetnji. ' +
      'Sama činjenica — da je u srpnju stiglo više ljudi nego lani — mogla je nositi i naslov "Dijaspora se vraća". Da nije, nije odluka jezika, nego urednika.',
    modelEn:
      'The headline "Emigrants flood the coast again" appears at first glance to convey news, but in fact delivers a judgement. ' +
      'The verb "preplaviti" (to flood) belongs to the vocabulary of natural disasters; through it, people coming home are turned into a mass of water — into something one does not welcome but defends against. ' +
      'The adverb "opet" (again) adds a note of weariness, as if this were the repetition of something unwanted. ' +
      'The lead states that "the numbers are record-breaking", but the source of those numbers is not named — the statistic is a rhetorical device, not a datum. ' +
      'It is interesting whom the text addresses: the emigrant, nominally the topic, is nowhere the addressee; the text speaks to the domestic reader about them, not to them. ' +
      'This is therefore not news about a return, but news about a nuisance. ' +
      'The bare fact — that more people arrived in July than last year — could equally have carried the headline "The diaspora is coming back". That it did not is a decision not of the language, but of the editor.',
    structures: [
      {
        hr: 'na prvi pogled prenosi vijest, a zapravo donosi ocjenu',
        en: 'appears at first glance to convey news, but in fact delivers a judgement',
        why: 'The analyst’s opening antithesis: "na prvi pogled ... a zapravo" — surface versus function.',
      },
      {
        hr: 'njime se ljudi koji dolaze kući pretvaraju u vodenu masu',
        en: 'through it, people coming home are turned into a mass of water',
        why: 'Instrumental "njime" (by means of it) + impersonal "se" passive — tracing what a single word DOES.',
      },
      {
        hr: 'tekst govori domaćem čitatelju o njima, ne njima',
        en: 'the text speaks to the domestic reader about them, not to them',
        why: 'Dative "čitatelju" (to whom) versus "o njima" (about whom) and bare dative "njima" (to them) — the addressee analysis in one case contrast.',
      },
    ],
    frames: [
      {
        before: 'Naslov na prvi pogled prenosi vijest, a',
        answer: 'zapravo',
        accept: ['ustvari'],
        after: 'donosi ocjenu.',
        hint: 'The adverb for "actually / in fact" that completes the antithesis.',
      },
      {
        before: 'Glagol je snažan;',
        answer: 'njime',
        after: 'se ljudi pretvaraju u prijetnju.',
        hint: 'The instrumental of "on / ono" — "by means of it".',
      },
      {
        before: 'Tekst govori čitatelju o',
        answer: 'njima',
        after: ', a ne njima.',
        hint: 'The pronoun after "o" — locative plural of "oni".',
      },
    ],
    connectives: [
      'na prvi pogled',
      'zapravo',
      'njime se',
      'dakle',
      'nije riječ o ... nego o',
      'sama činjenica',
    ],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'word',
        label: 'Analyse at least one specific word in quotation marks',
        words: ['"', '„', 'glagol', 'prilog', 'imenic', 'pridjev'],
      },
      {
        id: 'implied',
        label: 'Separate what is claimed from what is implied ("sugerira", "prizvuk")',
        words: ['sugerira', 'prizvuk', 'zapravo', 'implicit'],
      },
      {
        id: 'addressee',
        label: 'Say whom the text addresses',
        words: ['čitatelj', 'obraća', 'adresat'],
      },
    ],
  },
  {
    id: 'c2-expert-opinion',
    level: 'C2',
    title: 'An expert opinion',
    prompt:
      'Kao stručnjak za nastavu jezika dobili ste na ocjenu prijedlog programa hrvatskoga za iseljeničke škole. Napišite stručno mišljenje: ocijenite prijedlog po kriterijima, navedite prednosti i nedostatke i dajte obrazloženu preporuku.',
    promptEn:
      'As a language-teaching expert you have been asked to assess a proposed Croatian programme for diaspora schools. Write an expert opinion: evaluate the proposal against criteria, list strengths and weaknesses and give a reasoned recommendation.',
    minWords: 120,
    model:
      'Predmet ocjene: Prijedlog programa hrvatskoga jezika za dopunske škole u iseljeništvu, verzija 2. ' +
      'Prijedlog ocjenjujem prema trima kriterijima: usklađenosti sa Zajedničkim europskim referentnim okvirom, primjerenosti ciljnoj skupini i provedivosti. ' +
      'Što se prvoga tiče, program je dosljedno razrađen od A1 do B2 i ishodi su mjerljivi, što valja pohvaliti. ' +
      'Primjerenost je, međutim, upitna: program pretpostavlja učenike bez ikakva predznanja, dok većina djece u dijaspori hrvatski razumije, ali ga ne govori — riječ je, dakle, o nasljednim govornicima, kojima su potrebni drukčiji ulazni zadaci. ' +
      'Provedivost ovisi o satnici od dva sata tjedno, što je za predviđeni opseg gradiva nedovoljno, osobito u višim razinama. ' +
      'Preporučujem stoga usvajanje prijedloga uz dvije izmjene: uvođenje dijagnostičkog testa na početku svake razine i smanjenje gradiva u razinama B1 i B2 za otprilike trećinu. ' +
      'Bez tih izmjena program bi na papiru bio uzoran, a u učionici neizvediv.',
    modelEn:
      'Subject of assessment: Proposed Croatian language programme for supplementary schools in the diaspora, version 2. ' +
      'I assess the proposal against three criteria: alignment with the Common European Framework of Reference, suitability for the target group, and feasibility. ' +
      'As regards the first, the programme is consistently developed from A1 to B2 and its outcomes are measurable, which deserves praise. ' +
      'Suitability, however, is questionable: the programme assumes learners with no prior knowledge, whereas most children in the diaspora understand Croatian but do not speak it — they are, in other words, heritage speakers, who need different entry tasks. ' +
      'Feasibility depends on a timetable of two hours a week, which is insufficient for the planned scope, especially at the higher levels. ' +
      'I therefore recommend adopting the proposal with two amendments: a diagnostic test at the start of each level, and a reduction of the material at B1 and B2 by roughly a third. ' +
      'Without those amendments the programme would be exemplary on paper and unworkable in the classroom.',
    structures: [
      {
        hr: 'Prijedlog ocjenjujem prema trima kriterijima',
        en: 'I assess the proposal against three criteria',
        why: '"prema" + dative — and "tri" declines: trima. Announcing the criteria up front is what makes an opinion checkable.',
      },
      {
        hr: 'Primjerenost je, međutim, upitna',
        en: 'Suitability, however, is questionable',
        why: 'A nominalised criterion as subject + "je" in second position + parenthetical "međutim" — the register of assessment.',
      },
      {
        hr: 'Preporučujem stoga usvajanje prijedloga uz dvije izmjene',
        en: 'I therefore recommend adopting the proposal with two amendments',
        why: 'The verdict shape: "preporučujem" + a verbal noun (usvajanje) + "uz" + accusative for the conditions attached.',
      },
    ],
    frames: [
      {
        before: 'Prijedlog ocjenjujem prema',
        answer: 'trima',
        after: 'kriterijima.',
        hint: 'The dative of "tri" — numbers decline too.',
      },
      {
        before: 'Primjerenost je,',
        answer: 'međutim',
        accept: ['ipak'],
        after: ', upitna.',
        hint: 'The parenthetical "however", set off by commas.',
      },
      {
        before: 'Preporučujem usvajanje prijedloga',
        answer: 'uz',
        after: 'dvije izmjene.',
        hint: 'The preposition for "with (the following conditions attached)" — takes the accusative.',
      },
    ],
    connectives: [
      'predmet ocjene',
      'prema kriterijima',
      'što se ... tiče',
      'međutim',
      'preporučujem stoga',
      'uz izmjene',
    ],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'crit',
        label: 'Name your criteria explicitly ("prema kriterijima")',
        words: ['kriterij'],
      },
      {
        id: 'both',
        label: 'Give both strengths and weaknesses',
        words: ['pohvaliti', 'prednost', 'međutim', 'nedostat', 'upitn'],
      },
      {
        id: 'rec',
        label: 'Give a reasoned recommendation with conditions ("preporučujem ... uz")',
        words: ['preporučujem', 'uz '],
      },
    ],
  },
  {
    id: 'c2-miniature',
    level: 'C2',
    title: 'A prose miniature',
    prompt:
      'Napišite književnu crticu od jednog prizora: mjesto, doba dana, jedan čovjek, jedan pokret. Bez radnje i bez pouke — samo precizno gledanje.',
    promptEn:
      'Write a literary miniature of a single scene: a place, a time of day, one person, one movement. No plot and no moral — only precise looking.',
    minWords: 120,
    model:
      'Riva u sedam ujutro još pripada onima koji je čiste. ' +
      'Čovjek u narančastom prsluku gura metlu od jednog stupa do drugog, ne dižući pogled, kao da broji kamene ploče, a ne smeće. ' +
      'More je iza njega glatko i sivo, boje neopranih prozora; galebovi sjede na bitvama poredani kao da čekaju red. ' +
      'Iz pekarnice na uglu izlazi topao miris koji još nema kupca. ' +
      'Čovjek zastane, nasloni metlu na koljeno i iz džepa izvadi mobitel — ne da nešto pročita, nego da provjeri koliko je sati. ' +
      'Zatim ga vrati, uzme metlu i nastavi, ali sad malo brže, jer sunce je već dotaknulo vrh zvonika i za pola sata riva više neće biti njegova. ' +
      'Do tada je sve na rivi — i galebovi, i miris kruha, i tišina — na trenutak još samo njegovo.',
    modelEn:
      'The seafront at seven in the morning still belongs to those who clean it. ' +
      'A man in an orange vest pushes a broom from one lamppost to the next without lifting his eyes, as if counting the stone slabs rather than the litter. ' +
      'Behind him the sea is smooth and grey, the colour of unwashed windows; the gulls sit on the bollards in a row as if waiting their turn. ' +
      'From the bakery on the corner comes a warm smell that has no customer yet. ' +
      'The man stops, leans the broom on his knee and takes his phone out of his pocket — not to read anything, but to check the time. ' +
      'Then he puts it back, takes the broom and goes on, a little faster now, because the sun has already touched the top of the bell tower and in half an hour the seafront will no longer be his. ' +
      'Until then everything on the seafront — the gulls, the smell of bread, the silence — is for a moment still only his.',
    structures: [
      {
        hr: 'ne dižući pogled, kao da broji kamene ploče, a ne smeće',
        en: 'without lifting his eyes, as if counting the stone slabs rather than the litter',
        why: 'The present gerund (dižući) hangs a second action on the first; "kao da" + a contrasting "a ne" sharpens the image.',
      },
      {
        hr: 'glatko i sivo, boje neopranih prozora',
        en: 'smooth and grey, the colour of unwashed windows',
        why: 'The genitive of quality ("boje neopranih prozora") — precision without another adjective.',
      },
      {
        hr: 'Čovjek zastane, nasloni metlu na koljeno i iz džepa izvadi mobitel',
        en: 'The man stops, leans the broom on his knee and takes his phone out of his pocket',
        why: 'Perfective PRESENT as narrative tense (zastane, nasloni, izvadi) — the literary way to make one movement crisp.',
      },
    ],
    frames: [
      {
        before: 'Gura metlu ne',
        answer: 'dižući',
        after: 'pogled.',
        hint: 'The present gerund of "dizati" — "without lifting".',
      },
      {
        before: 'More je sivo, boje',
        answer: 'neopranih',
        accept: ['starih', 'prljavih'],
        after: 'prozora.',
        hint: 'The adjective in the genitive plural, agreeing with "prozora".',
      },
      {
        before: 'Čovjek',
        answer: 'zastane',
        accept: ['stane'],
        after: ', nasloni metlu i izvadi mobitel.',
        hint: 'The perfective present of "zastati" — a crisp, single movement.',
      },
    ],
    connectives: ['kao da', 'a ne', 'ne dižući', 'zatim', 'sad', 'jer'],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'sense',
        label: 'Give at least two senses (sight and smell, or sound)',
        words: ['miris', 'boje', 'sivo', 'zvuk', 'tiho', 'toplo', 'topao'],
      },
      {
        id: 'gerund',
        label: 'Use a gerund ("-ći") or a "kao da" comparison',
        words: ['ći ', 'kao da'],
      },
      {
        id: 'time',
        label: 'Anchor the scene in a time of day',
        words: ['ujutro', 'navečer', 'u sedam', 'u podne', 'sat'],
      },
    ],
  },
];

/** Units at exactly `level`, in curriculum order. */
export function unitsForLevel(level: CefrLevel): WritingUnit[] {
  return WRITING_CURRICULUM.filter((u) => u.level === level);
}
