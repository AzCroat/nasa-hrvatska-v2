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
// Every level A1–C2 has ≥12 units (writingCurriculum.test.ts pins this; 8 → 12 on
// 2026-09-28, the owner's content-expansion item 4): A1
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

  // ── opinion / description ──────────────────────────────────────────────────
  {
    id: 'a1-season',
    level: 'A1',
    title: 'My favourite season',
    prompt:
      'Napiši koje godišnje doba najviše voliš: kakvo je vrijeme, što tada radiš i zašto ti se sviđa.',
    promptEn:
      'Write which season you like most: what the weather is like, what you do then and why you like it.',
    minWords: 20,
    model:
      'Moje najdraže godišnje doba je ljeto. Ljeti je toplo i sunčano. ' +
      'Idem na more i plivam svaki dan. Volim sladoled i duge večeri. ' +
      'Zimu ne volim jer je hladno i pada snijeg. ' +
      'Jesen je lijepa, ali kratka. A proljeće? Proljeće je dobro za šetnju.',
    modelEn:
      'My favourite season is summer. In summer it is warm and sunny. ' +
      'I go to the seaside and swim every day. I like ice cream and long evenings. ' +
      'I do not like winter because it is cold and it snows. ' +
      'Autumn is beautiful, but short. And spring? Spring is good for a walk.',
    structures: [
      {
        hr: 'Moje najdraže godišnje doba je ljeto.',
        en: 'My favourite season is summer.',
        why: '"najdraže" is the superlative of "drag" (dear) — the everyday way to say "favourite". It agrees with the neuter "doba".',
      },
      {
        hr: 'Idem na more',
        en: 'I go to the seaside',
        why: '"na" + accusative for movement TOWARDS a place: more stays "more" here because neuter nouns look the same in the accusative.',
      },
      {
        hr: 'Zimu ne volim jer je hladno',
        en: 'I do not like winter because it is cold',
        why: 'What you (do not) like is the object, so it takes the accusative: zima → zimu. "jer" then gives the reason.',
      },
    ],
    frames: [
      {
        before: 'Ljeti je',
        answer: 'toplo',
        accept: ['vruće', 'sunčano', 'lijepo'],
        after: 'i sunčano.',
        hint: 'A weather word in the neuter form — Croatian says "it is warm" with just the adjective.',
      },
      {
        before: 'Ne volim',
        answer: 'zimu',
        accept: ['jesen', 'kišu'],
        after: 'jer je hladno.',
        hint: 'The season you do not like is the object — accusative: zima → ...',
      },
      {
        before: 'Zimi pada',
        answer: 'snijeg',
        accept: ['kiša'],
        after: 'i ne idem van.',
        hint: 'What falls in winter? The subject stays in the dictionary form.',
      },
    ],
    connectives: ['i', 'ali', 'jer', 'a', 'svaki dan'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      {
        id: 'season',
        label: 'Name a season (ljeto, zima, jesen, proljeće)',
        words: ['ljeto', 'zim', 'jesen', 'proljeće'],
      },
      { id: 'why', label: 'Give a reason with "jer"', words: ['jer'] },
    ],
  },
  // ── transactional ─────────────────────────────────────────────────────────
  {
    id: 'a1-shopping',
    level: 'A1',
    title: 'A shopping note',
    prompt:
      'Napiši kratku poruku nekome kod kuće: što treba kupiti u dućanu, koliko i gdje je novac.',
    promptEn:
      'Write a short note to someone at home: what needs buying at the shop, how much, and where the money is.',
    minWords: 20,
    model:
      'Bog, Marko! Idem na posao. Molim te, idi u dućan. ' +
      'Trebamo kruh, mlijeko i šest jaja. Kupi i sir i dvije jabuke za mene. ' +
      'Nemamo kave! Novac je na stolu u kuhinji. ' +
      'Vidimo se navečer. Pusa, Ana',
    modelEn:
      'Hi, Marko! I am going to work. Please go to the shop. ' +
      'We need bread, milk and six eggs. Buy cheese too, and two apples for me. ' +
      'We have no coffee! The money is on the table in the kitchen. ' +
      'See you this evening. Kiss, Ana',
    structures: [
      {
        hr: 'Molim te, idi u dućan.',
        en: 'Please go to the shop.',
        why: '"idi" is the imperative of "ići" — how you ask someone you say "ti" to. "u" + accusative because it is movement INTO the shop.',
      },
      {
        hr: 'Trebamo kruh, mlijeko i šest jaja.',
        en: 'We need bread, milk and six eggs.',
        why: 'After five and above the noun goes into the genitive plural: jaje → šest jaja. Two to four take a different form (dvije jabuke).',
      },
      {
        hr: 'Nemamo kave!',
        en: 'We have no coffee!',
        why: '"nemati" (not to have) takes the genitive, not the accusative: kava → nemamo kave. The same rule gives "nema kruha".',
      },
    ],
    frames: [
      {
        before: 'Molim te, kupi',
        answer: 'kruh',
        accept: ['sir', 'mlijeko', 'kavu', 'jabuke'],
        after: 'i mlijeko.',
        hint: 'What to buy is the object of "kupi" — accusative; "kruh" does not change.',
      },
      {
        before: 'Nemamo',
        answer: 'mlijeka',
        accept: ['kruha', 'kave', 'sira'],
        after: ', molim te kupi.',
        hint: '"nemati" takes the genitive: mlijeko → ...',
      },
      {
        before: 'Novac je na',
        answer: 'stolu',
        accept: ['polici', 'prozoru'],
        after: 'u kuhinji.',
        hint: '"na" for WHERE something is takes the locative: stol → ...',
      },
    ],
    connectives: ['i', 'molim te', 'za mene', 'navečer', 'vidimo se'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      {
        id: 'items',
        label: 'Name at least one thing to buy (kruh, mlijeko, jaja, sir, kava)',
        words: ['kruh', 'mlijek', 'jaj', 'sir', 'kav'],
      },
      { id: 'please', label: 'Ask politely with "molim"', words: ['molim'] },
    ],
  },
  // ── personal / formulaic ──────────────────────────────────────────────────
  {
    id: 'a1-thanks',
    level: 'A1',
    title: 'A thank-you note',
    prompt:
      'Napiši kratku zahvalu rodbini u Hrvatskoj: na čemu zahvaljuješ, kako ste vi i kada se vidite.',
    promptEn:
      'Write a short thank-you note to relatives in Croatia: what you are thanking them for, how you all are, and when you will see each other.',
    minWords: 20,
    model:
      'Draga teto Marija, hvala na poklonu! Knjiga je jako lijepa i čitam je svaki dan. ' +
      'Hvala i na ručku u nedjelju. Juha je bila odlična. ' +
      'Kod nas je sve dobro. Mama i tata te pozdravljaju. ' +
      'Vidimo se uskoro! Pusa, Ivana',
    modelEn:
      'Dear Aunt Marija, thank you for the present! The book is very beautiful and I read it every day. ' +
      'Thank you also for lunch on Sunday. The soup was excellent. ' +
      'Everything is fine with us. Mum and Dad send their greetings. ' +
      'See you soon! Kiss, Ivana',
    structures: [
      {
        hr: 'hvala na poklonu',
        en: 'thank you for the present',
        why: 'You thank someone "na" + locative in Croatian, not "za": poklon → hvala na poklonu, ručak → hvala na ručku.',
      },
      {
        hr: 'Kod nas je sve dobro.',
        en: 'Everything is fine with us.',
        why: '"kod" + genitive means "at somebody\'s place / with us": kod nas, kod bake. It is for WHERE, never for going somewhere.',
      },
      {
        hr: 'Mama i tata te pozdravljaju.',
        en: 'Mum and Dad send you their greetings.',
        why: 'The short pronoun "te" (you) sits in second position, right after the first phrase — never at the very start of the sentence.',
      },
    ],
    frames: [
      {
        before: 'Hvala na',
        answer: 'poklonu',
        accept: ['ručku', 'pomoći', 'pozivu', 'večeri'],
        after: ', jako mi se sviđa.',
        hint: '"hvala na" + locative: poklon → ...',
      },
      {
        before: 'Kod',
        answer: 'nas',
        accept: ['bake', 'mene'],
        after: 'je sve dobro.',
        hint: '"kod" + genitive of "mi" (we) — the form you also hear in "kod nas doma".',
      },
      {
        before: 'Vidimo',
        answer: 'se',
        after: 'uskoro!',
        hint: 'The little reflexive word "vidjeti se" needs — "we see each other".',
      },
    ],
    connectives: ['i', 'jako', 'uskoro', 'svaki dan', 'kod nas'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'thanks', label: 'Thank them with "hvala na"', words: ['hvala na'] },
      { id: 'address', label: 'Open with "Draga" or "Dragi"', words: ['draga', 'dragi'] },
    ],
  },
  // ── description / narrative ───────────────────────────────────────────────
  {
    id: 'a1-pet',
    level: 'A1',
    title: 'My pet',
    prompt:
      'Opiši svog ljubimca (ili ljubimca koga poznaješ): kako se zove, kakav je i što voli raditi.',
    promptEn:
      'Describe your pet (or a pet you know): its name, what it is like and what it likes doing.',
    minWords: 20,
    model:
      'Imam psa. Zove se Lola i ima tri godine. Lola je mala i smeđa. ' +
      'Voli trčati u parku i spavati na krevetu. Svaki dan idemo u šetnju. ' +
      'Ona jede meso i pije puno vode. ' +
      'Nemam mačku, ali moja sestra ima dvije mačke.',
    modelEn:
      'I have a dog. Her name is Lola and she is three years old. Lola is small and brown. ' +
      'She likes running in the park and sleeping on the bed. Every day we go for a walk. ' +
      'She eats meat and drinks a lot of water. ' +
      'I do not have a cat, but my sister has two cats.',
    structures: [
      {
        hr: 'Imam psa.',
        en: 'I have a dog.',
        why: '"imati" takes the accusative, and for a living masculine noun the accusative looks like the genitive: pas → imam psa (but imam stan).',
      },
      {
        hr: 'trčati u parku',
        en: 'running in the park',
        why: '"u" + locative for WHERE something happens: park → u parku. Compare "idem u park" (going INTO it) with the accusative.',
      },
      {
        hr: 'pije puno vode',
        en: 'drinks a lot of water',
        why: 'After a quantity word like "puno" or "malo" the noun takes the genitive: voda → puno vode.',
      },
    ],
    frames: [
      {
        before: 'Imam',
        answer: 'psa',
        accept: ['mačku', 'zeca', 'papigu', 'ribicu'],
        after: '. Zove se Rex.',
        hint: 'A living masculine noun after "imati" takes the genitive-looking accusative: pas → ...',
      },
      {
        before: 'Voli spavati na',
        answer: 'krevetu',
        accept: ['kauču', 'podu', 'suncu'],
        after: '.',
        hint: '"na" for WHERE takes the locative: krevet → ...',
      },
      {
        before: 'Pije puno',
        answer: 'vode',
        accept: ['mlijeka'],
        after: 'svaki dan.',
        hint: 'After "puno" the noun takes the genitive: voda → ...',
      },
    ],
    connectives: ['i', 'ali', 'svaki dan', 'puno', 'malo'],
    checklist: [
      { id: 'len', label: 'At least 20 words', minWords: 20 },
      { id: 'have', label: 'Say what you have with "imam"', words: ['imam'] },
      { id: 'name', label: 'Give the name with "zove se"', words: ['zove se'] },
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

  // ── personal: a thank-you letter after a stay ─────────────────────────────
  {
    id: 'a2-thanks',
    level: 'A2',
    title: 'A thank-you letter after a visit',
    prompt:
      'Bio si ili bila si tjedan dana kod tete u Hrvatskoj. Napiši joj kratko pismo: zahvali na svemu, napiši što ti se najviše svidjelo i pozovi je k sebi.',
    promptEn:
      'You spent a week at your aunt’s in Croatia. Write her a short letter: thank her for everything, say what you liked most and invite her to visit you.',
    minWords: 30,
    model:
      'Draga teta Ana, hvala ti na svemu! Kod tebe sam se osjećala kao kod kuće. ' +
      'Najviše su mi se svidjeli izleti na more i tvoje palačinke s orasima. ' +
      'Puno sam naučila i sada bolje razumijem hrvatski. ' +
      'Sljedeće ljeto dođi k nama u Kanadu! Pozdravi djeda i Luku. Voli te Marija.',
    modelEn:
      'Dear Aunt Ana, thank you for everything! At your place I felt at home. ' +
      'I liked the trips to the sea and your pancakes with walnuts most of all. ' +
      'I learned a lot and now I understand Croatian better. ' +
      'Next summer, come to us in Canada! Say hello to Grandpa and Luka. Love, Marija.',
    structures: [
      {
        hr: 'hvala ti na svemu',
        en: 'thank you for everything',
        why: '"hvala na" takes the locative — you thank someone ON a thing, so "sve" becomes "svemu".',
      },
      {
        hr: 'Kod tebe sam se osjećala kao kod kuće',
        en: 'At your place I felt at home',
        why: '"kod" + genitive says WHERE you are (at someone’s place); "osjećala" ends in -la because the writer is a woman.',
      },
      {
        hr: 'dođi k nama',
        en: 'come to us',
        why: 'Movement TO a person is "k" + dative ("nama"), never "kod" — "kod" only says where something is.',
      },
    ],
    frames: [
      {
        before: 'Hvala ti na',
        answer: 'svemu',
        after: '!',
        hint: 'The locative of "sve" — "hvala na" always takes the locative.',
      },
      {
        before: 'Kod tebe sam se',
        answer: 'osjećala',
        accept: ['osjećao'],
        after: 'kao kod kuće.',
        hint: 'Past participle of "osjećati se" — feminine or masculine, agreeing with you.',
      },
      {
        before: 'Sljedeće ljeto dođi',
        answer: 'k nama',
        accept: ['nama'],
        after: 'u Kanadu!',
        hint: 'Movement towards a person: "k" plus the dative pronoun.',
      },
    ],
    connectives: ['hvala na', 'najviše', 'i', 'sada', 'sljedeće ljeto'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'thanks',
        label: 'Thank them with "hvala na"',
        words: ['hvala na', 'hvala ti', 'hvala vam'],
      },
      {
        id: 'past',
        label: 'Say what you did in the past tense',
        words: [' sam ', ' smo ', ' su '],
      },
      {
        id: 'invite',
        label: 'Invite them to visit you',
        words: ['dođi', 'dođite', 'k nama', 'posjeti'],
      },
    ],
  },
  // ── transactional / formal: enquiring about a flat to rent ────────────────
  {
    id: 'a2-flat-enquiry',
    level: 'A2',
    title: 'Asking about a flat to rent',
    prompt:
      'Vidio si ili vidjela si oglas za stan u Splitu. Napiši poruku vlasniku: predstavi se, pitaj tri stvari o stanu i predloži kada bi ga mogao ili mogla pogledati.',
    promptEn:
      'You saw an advert for a flat in Split. Write to the owner: introduce yourself, ask three things about the flat and suggest when you could view it.',
    minWords: 30,
    model:
      'Poštovani gospodine Marić, zovem se Ivan Novak i javljam se zbog oglasa za stan na Bačvicama. ' +
      'Zanima me je li stan još slobodan i koliko košta najam mjesečno. ' +
      'Jesu li režije uključene u cijenu? Ima li stan parkirno mjesto? ' +
      'Htio bih doći pogledati stan u petak poslije podne, ako Vam odgovara. ' +
      'Unaprijed hvala na odgovoru. S poštovanjem, Ivan Novak',
    modelEn:
      'Dear Mr Marić, my name is Ivan Novak and I am writing about the advert for the flat in Bačvice. ' +
      'I would like to know whether the flat is still available and how much the rent is per month. ' +
      'Are the utilities included in the price? Does the flat have a parking space? ' +
      'I would like to come and see the flat on Friday afternoon, if that suits you. ' +
      'Thank you in advance for your reply. Yours faithfully, Ivan Novak',
    structures: [
      {
        hr: 'javljam se zbog oglasa',
        en: 'I am writing about the advert',
        why: '"zbog" (because of, regarding) always takes the genitive — "oglas" becomes "oglasa".',
      },
      {
        hr: 'Zanima me je li stan još slobodan',
        en: 'I would like to know whether the flat is still free',
        why: '"Zanima me" (it interests me) + "je li" makes a polite indirect question; "me" sits in second position.',
      },
      {
        hr: 'Htio bih doći pogledati stan',
        en: 'I would like to come and see the flat',
        why: '"htio bih" (a woman writes "htjela bih") is the polite conditional for a request; the infinitives follow it directly.',
      },
      {
        hr: 'ako Vam odgovara',
        en: 'if that suits you',
        why: 'Formal "Vam" with a capital V, in the dative — "odgovarati" means to suit SOMEONE, so the person is dative.',
      },
    ],
    frames: [
      {
        before: 'Javljam se',
        answer: 'zbog',
        after: 'oglasa za stan.',
        hint: '"because of / regarding" — the preposition that takes the genitive.',
      },
      {
        before: 'Zanima me je',
        answer: 'li',
        after: 'stan još slobodan.',
        hint: 'The question particle that follows "je" in an indirect question.',
      },
      {
        before: 'Htio',
        answer: 'bih',
        after: 'doći pogledati stan u petak.',
        hint: 'The conditional auxiliary for "I would" — first person singular.',
      },
      {
        before: 'Unaprijed hvala na',
        answer: 'odgovoru',
        after: '.',
        hint: 'The locative of "odgovor" (reply) after "hvala na".',
      },
    ],
    connectives: ['zanima me', 'je li', 'ako', 'unaprijed', 's poštovanjem'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'formal',
        label: 'Open and close formally',
        words: ['poštovani', 'poštovana', 's poštovanjem'],
      },
      { id: 'ask', label: 'Ask at least one question with "li"', words: [' li '] },
      {
        id: 'request',
        label: 'Make a polite request with "htio bih" or "htjela bih"',
        words: ['htio bih', 'htjela bih'],
      },
    ],
  },
  // ── narrative: a family celebration in the past tense ─────────────────────
  {
    id: 'a2-celebration',
    level: 'A2',
    title: 'A family celebration',
    prompt:
      'Napiši kratku priču o proslavi u svojoj obitelji, na primjer o bakinu rođendanu: tko je došao, što ste jeli i što se dogodilo.',
    promptEn:
      'Write a short story about a celebration in your family, for example your grandmother’s birthday: who came, what you ate and what happened.',
    minWords: 30,
    model:
      'Prošle subote baka je slavila osamdeseti rođendan. ' +
      'Došla je cijela obitelj: tetke, stričevi i desetak rođaka iz Zagreba i Australije. ' +
      'Mama je ispekla veliku tortu, a djed je otvorio bocu domaće rakije. ' +
      'Nakon ručka pjevali smo stare pjesme i baka je zaplakala od sreće. ' +
      'Bio je to najljepši dan u godini.',
    modelEn:
      'Last Saturday grandma celebrated her eightieth birthday. ' +
      'The whole family came: aunts, uncles and about ten cousins from Zagreb and Australia. ' +
      'Mum baked a big cake, and grandpa opened a bottle of home-made rakija. ' +
      'After lunch we sang old songs and grandma cried with happiness. ' +
      'It was the most beautiful day of the year.',
    structures: [
      {
        hr: 'Prošle subote baka je slavila',
        en: 'Last Saturday grandma celebrated',
        why: 'Time "when" goes in the genitive ("prošle subote"); the participle "slavila" ends in -la because "baka" is feminine.',
      },
      {
        hr: 'desetak rođaka iz Zagreba',
        en: 'about ten cousins from Zagreb',
        why: 'After a quantity ("desetak", or any number from five up) the noun is in the genitive plural; "iz" also takes the genitive.',
      },
      {
        hr: 'pjevali smo stare pjesme',
        en: 'we sang old songs',
        why: 'The past tense for "we": participle in -li plus "smo" in second position, right after the first word.',
      },
      {
        hr: 'zaplakala od sreće',
        en: 'cried with happiness',
        why: 'The cause of a feeling is "od" + genitive — "sreća" becomes "sreće".',
      },
    ],
    frames: [
      {
        before: 'Prošle subote baka je',
        answer: 'slavila',
        after: 'rođendan.',
        hint: 'Past participle of "slaviti", feminine singular to agree with "baka".',
      },
      {
        before: 'Došlo je desetak',
        answer: 'rođaka',
        after: 'iz Zagreba.',
        hint: 'After "desetak" (about ten) the noun takes the genitive plural.',
      },
      {
        before: 'Nakon ručka',
        answer: 'pjevali smo',
        accept: ['smo pjevali'],
        after: 'stare pjesme.',
        hint: 'Past tense for "we": participle in -li plus "smo".',
      },
      {
        before: 'Baka je zaplakala od',
        answer: 'sreće',
        after: '.',
        hint: '"od" + genitive gives the cause — the genitive of "sreća".',
      },
    ],
    connectives: ['prošle subote', 'nakon', 'a', 'i', 'zatim'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      { id: 'past', label: 'Tell it in the past tense', words: [' je ', ' smo ', ' su '] },
      {
        id: 'who',
        label: 'Say who came',
        words: ['došla', 'došao', 'došli', 'obitelj', 'rođaci', 'rođaka'],
      },
      {
        id: 'when',
        label: 'Say when it happened',
        words: ['prošle', 'prošli', 'prošlog', 'jučer', 'u subotu', 'u nedjelju'],
      },
    ],
  },
  // ── argumentative: city or countryside, with reasons ──────────────────────
  {
    id: 'a2-city-village',
    level: 'A2',
    title: 'City or countryside?',
    prompt:
      'Tvoj prijatelj želi znati gdje bi ti radije živio ili živjela: u gradu ili na selu. Napiši mu što misliš i objasni zašto, s barem dva razloga.',
    promptEn:
      'Your friend wants to know where you would rather live: in the city or in the countryside. Write what you think and explain why, with at least two reasons.',
    minWords: 30,
    model:
      'Ja bih radije živjela na selu nego u gradu. ' +
      'Na selu je mirno i zrak je čist, a ljudi se poznaju i pomažu jedni drugima. ' +
      'U gradu ima više posla i sve je blizu, ali je prometno i skupo. ' +
      'Meni je najvažnije imati vrt i vrijeme za obitelj. ' +
      'Zato mislim da je život na selu bolji, iako nije uvijek lak.',
    modelEn:
      'I would rather live in the countryside than in the city. ' +
      'In the countryside it is peaceful and the air is clean, and people know each other and help one another. ' +
      'In the city there is more work and everything is close, but it is busy and expensive. ' +
      'For me the most important thing is to have a garden and time for family. ' +
      'So I think life in the countryside is better, even if it is not always easy.',
    structures: [
      {
        hr: 'Ja bih radije živjela na selu nego u gradu',
        en: 'I would rather live in the countryside than in the city',
        why: '"bih radije ... nego" states a preference; "na selu" and "u gradu" are both locative because they say where.',
      },
      {
        hr: 'U gradu ima više posla',
        en: 'In the city there is more work',
        why: '"ima" means "there is", and after "više" (more) the noun goes into the genitive — "posao" becomes "posla".',
      },
      {
        hr: 'Zato mislim da je',
        en: 'That is why I think that',
        why: '"Zato" (therefore) draws the conclusion; "mislim da" opens the opinion clause, with "je" straight after "da".',
      },
      {
        hr: 'iako nije uvijek lak',
        en: 'even though it is not always easy',
        why: '"iako" (although) admits the other side — it makes an opinion sound balanced rather than stubborn.',
      },
    ],
    frames: [
      {
        before: 'Ja bih radije živio na',
        answer: 'selu',
        after: 'nego u gradu.',
        hint: 'Locative of "selo" after "na" — it says where.',
      },
      {
        before: 'U gradu ima više',
        answer: 'posla',
        after: 'i sve je blizu.',
        hint: 'After "više" the noun is in the genitive — "posao" changes its ending.',
      },
      {
        before: 'Zato mislim',
        answer: 'da',
        after: 'je život na selu bolji.',
        hint: 'The little word that introduces "I think THAT ...".',
      },
      {
        before: 'Na selu je mirno,',
        answer: 'ali',
        accept: ['no', 'a'],
        after: 'nema puno posla.',
        hint: 'The word for "but" that introduces the other side.',
      },
    ],
    connectives: ['radije', 'nego', 'zato', 'ali', 'iako'],
    checklist: [
      { id: 'len', label: 'At least 30 words', minWords: 30 },
      {
        id: 'pref',
        label: 'State your preference with "radije" or "više volim"',
        words: ['radije', 'više volim', 'draže mi je'],
      },
      { id: 'reason', label: 'Give a reason with "jer" or "zato"', words: ['jer', 'zato', 'zbog'] },
      {
        id: 'other',
        label: 'Mention the other side with "ali" or "iako"',
        words: ['ali', 'iako', 's druge strane'],
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

  // ── formal / transactional ─────────────────────────────────────────────────
  {
    id: 'b1-enquiry',
    level: 'B1',
    title: 'An enquiry about a course',
    prompt:
      'Želite upisati ljetni tečaj hrvatskoga jezika. Napišite upit školi: što Vas zanima, koja pitanja imate i zamolite za odgovor.',
    promptEn:
      'You want to enrol in a summer Croatian course. Write an enquiry to the school: what interests you, what questions you have, and ask for a reply.',
    minWords: 50,
    model:
      'Poštovani, zanima me ljetni tečaj hrvatskoga jezika koji organizirate u srpnju. ' +
      'Učim hrvatski već dvije godine i htio bih ga poboljšati prije posjeta obitelji u Hrvatskoj. ' +
      'Biste li mi mogli poslati raspored nastave i cijenu tečaja? ' +
      'Također me zanima je li smještaj uključen u cijenu ili ga moram sam tražiti. ' +
      'Ako postoji popust za rane prijave, bio bih Vam zahvalan na informaciji. ' +
      'Unaprijed hvala na odgovoru. S poštovanjem, Marko Kovač',
    modelEn:
      'Dear Sir or Madam, I am interested in the summer Croatian course you are organising in July. ' +
      'I have been learning Croatian for two years and would like to improve it before visiting family in Croatia. ' +
      'Could you send me the class timetable and the price of the course? ' +
      'I would also like to know whether accommodation is included in the price or whether I have to find it myself. ' +
      'If there is a discount for early registration, I would be grateful for the information. ' +
      'Thank you in advance for your reply. Respectfully, Marko Kovač',
    structures: [
      {
        hr: 'tečaj hrvatskoga jezika koji organizirate',
        en: 'the Croatian course which you are organising',
        why: 'The relative pronoun "koji" agrees with "tečaj" (masculine singular) and lets you add detail without starting a new sentence.',
      },
      {
        hr: 'Biste li mi mogli poslati',
        en: 'Could you send me',
        why: 'In a polite question the particle "li" comes straight after "Biste" and the short pronoun "mi" follows it — the whole cluster sits in second position.',
      },
      {
        hr: 'bio bih Vam zahvalan na informaciji',
        en: 'I would be grateful to you for the information',
        why: '"zahvalan na" takes the locative (informacija → informaciji), and the capitalised "Vam" keeps the formal register.',
      },
      {
        hr: 'Poštovani, ... S poštovanjem',
        en: 'Dear Sir or Madam, ... Respectfully',
        why: 'The formal frame every official email needs: the opening and the closing belong together.',
      },
    ],
    frames: [
      {
        before: 'Biste',
        answer: 'li',
        after: 'mi mogli poslati raspored?',
        hint: 'The question particle — it comes right after "Biste", never after "mogli".',
      },
      {
        before: 'Zanima me tečaj',
        answer: 'koji',
        after: 'organizirate u srpnju.',
        hint: 'The relative pronoun "which" for a masculine singular noun (tečaj).',
      },
      {
        before: 'Unaprijed hvala na',
        answer: 'odgovoru',
        accept: ['informaciji', 'pomoći'],
        after: '.',
        hint: '"hvala na" takes the locative: odgovor → ...',
      },
      {
        before: 'Htio bih',
        answer: 'ga',
        after: 'poboljšati prije ljeta.',
        hint: 'The short accusative pronoun "it" (hrvatski is masculine), placed right after "bih".',
      },
    ],
    connectives: ['također', 'zanima me', 'je li', 'ako', 'unaprijed'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'formal',
        label: 'Open with "Poštovani" and close with "S poštovanjem"',
        words: ['poštovani'],
      },
      {
        id: 'polite-q',
        label: 'Ask at least one polite question with "Biste li" or "Molim Vas"',
        words: ['biste li', 'molim vas'],
      },
      {
        id: 'relative',
        label: 'Use a relative clause with "koji / koja / koje"',
        words: ['koji', 'koja', 'koje'],
      },
    ],
  },

  // ── personal ───────────────────────────────────────────────────────────────
  {
    id: 'b1-invitation',
    level: 'B1',
    title: 'Invite a friend to a celebration',
    prompt:
      'Slaviš rođendan. Napiši prijateljici poruku s pozivom: kada i gdje se okupljate, što planirate i do kada ti treba javiti.',
    promptEn:
      'You are celebrating your birthday. Write a friend an invitation: when and where you are meeting, what you plan and by when she should let you know.',
    minWords: 50,
    model:
      'Draga Petra, sljedeće subote slavim trideseti rođendan i bilo bi mi jako drago da dođeš. ' +
      'Okupljamo se kod mene oko sedam, a poslije idemo u restoran koji si mi preporučila prošle godine. ' +
      'Ako ti odgovara, mogla bi doći malo ranije pa da mi pomogneš s tortom. ' +
      'Ne moraš ništa donositi — dovoljno je da dođeš. ' +
      'Javi mi do četvrtka možeš li, jer moram rezervirati stol. ' +
      'Radujem se našem druženju! Puno pozdrava, Ana',
    modelEn:
      'Dear Petra, next Saturday I am celebrating my thirtieth birthday and I would be really glad if you came. ' +
      'We are gathering at my place around seven, and afterwards we are going to the restaurant you recommended to me last year. ' +
      'If it suits you, you could come a little earlier and help me with the cake. ' +
      'You do not have to bring anything — it is enough that you come. ' +
      'Let me know by Thursday whether you can, because I have to book a table. ' +
      'I am looking forward to our get-together! Lots of love, Ana',
    structures: [
      {
        hr: 'bilo bi mi jako drago da dođeš',
        en: 'I would be really glad if you came',
        why: 'The conditional "bilo bi mi drago" followed by a "da" clause in the present tense — Croatian says "that you come", not "if you came".',
      },
      {
        hr: 'restoran koji si mi preporučila',
        en: 'the restaurant you recommended to me',
        why: 'A relative clause with two clitics in second position: the auxiliary "si" comes before the dative pronoun "mi".',
      },
      {
        hr: 'Radujem se našem druženju',
        en: 'I am looking forward to our get-together',
        why: '"radovati se" takes the dative — druženje → druženju, and the possessive "naš" agrees: našem.',
      },
      {
        hr: 'Draga Petra, ... Puno pozdrava',
        en: 'Dear Petra, ... Lots of love',
        why: 'The personal frame: "Draga/Dragi" plus the first name to open, and a warm closing instead of "S poštovanjem".',
      },
    ],
    frames: [
      {
        before: 'Bilo bi mi drago da',
        answer: 'dođeš',
        accept: ['dođete'],
        after: '.',
        hint: 'After "da" the verb is in the present tense — the "you" form of "doći".',
      },
      {
        before: 'Radujem se',
        answer: 'druženju',
        accept: ['zabavi', 'proslavi', 'rođendanu'],
        after: '.',
        hint: '"radovati se" takes the dative: druženje → ...',
      },
      {
        before: 'To je restoran',
        answer: 'koji',
        after: 'si mi preporučila.',
        hint: 'The relative pronoun for a masculine singular noun (restoran).',
      },
      {
        before: 'Javi mi možeš',
        answer: 'li',
        after: 'doći.',
        hint: 'The yes/no particle — it comes straight after the verb it asks about.',
      },
    ],
    connectives: ['a poslije', 'ako', 'pa', 'jer', 'dovoljno je'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'personal',
        label: 'Open with "Draga" or "Dragi" and the name',
        words: ['draga', 'dragi'],
      },
      {
        id: 'invite',
        label: 'Invite with "bilo bi mi (jako) drago da" or "pozivam te"',
        words: ['bilo bi mi', 'pozivam te', 'pozivam vas'],
      },
      {
        id: 'reply',
        label: 'Ask for a reply: "javi mi" or "možeš li"',
        words: ['javi mi', 'možeš li'],
      },
    ],
  },

  // ── descriptive / evaluative ──────────────────────────────────────────────
  {
    id: 'b1-restaurant',
    level: 'B1',
    title: 'A restaurant review',
    prompt:
      'Bili ste u restoranu. Napišite kratku recenziju: što ste naručili, kakva je bila usluga, što vam se svidjelo i što ne, i biste li ga preporučili.',
    promptEn:
      'You went to a restaurant. Write a short review: what you ordered, what the service was like, what you liked and did not, and whether you would recommend it.',
    minWords: 50,
    model:
      'Prošle subote bili smo na večeri u konobi Dalmatino, koja se nalazi blizu stare tržnice. ' +
      'Ambijent je ugodan, a konobar koji nas je posluživao bio je vrlo ljubazan i strpljiv. ' +
      'Naručili smo crni rižot i pečenu ribu; riba je bila svježa, ali rižot je, po mom mišljenju, bio preslan. ' +
      'Čekali smo glavno jelo gotovo četrdeset minuta, što je predugo za poluprazan restoran. ' +
      'Cijene su umjerene, a porcije velike. ' +
      'Unatoč sporoj usluzi, preporučila bih ovu konobu svima koji vole domaću kuhinju, ali bih rezervirala stol i došla ranije.',
    modelEn:
      'Last Saturday we had dinner at the tavern Dalmatino, which is located near the old market. ' +
      'The atmosphere is pleasant, and the waiter who served us was very kind and patient. ' +
      'We ordered black risotto and grilled fish; the fish was fresh, but the risotto was, in my opinion, too salty. ' +
      'We waited almost forty minutes for the main course, which is too long for a half-empty restaurant. ' +
      'The prices are moderate and the portions large. ' +
      'Despite the slow service, I would recommend this tavern to everyone who loves home cooking, but I would book a table and arrive earlier.',
    structures: [
      {
        hr: 'konobar koji nas je posluživao',
        en: 'the waiter who served us',
        why: 'A relative clause with "koji"; inside it the clitics keep their order — the pronoun "nas" comes before the auxiliary "je".',
      },
      {
        hr: 'Unatoč sporoj usluzi',
        en: 'Despite the slow service',
        why: '"unatoč" takes the DATIVE, not the genitive — usluga → usluzi, and the adjective follows: sporoj.',
      },
      {
        hr: 'preporučila bih ovu konobu svima koji vole',
        en: 'I would recommend this tavern to everyone who loves',
        why: 'A recommendation in the conditional ("bih"), with "svima koji" — dative "to everyone" plus a relative clause.',
      },
      {
        hr: 'po mom mišljenju',
        en: 'in my opinion',
        why: 'The standard way to mark an opinion as yours, so a critical remark reads as fair rather than rude.',
      },
    ],
    frames: [
      {
        before: 'Konobar',
        answer: 'koji',
        after: 'nas je posluživao bio je ljubazan.',
        hint: 'The relative pronoun for a masculine singular noun (konobar).',
      },
      {
        before: 'Unatoč sporoj',
        answer: 'usluzi',
        accept: ['cijeni', 'glazbi'],
        after: ', vratila bih se.',
        hint: '"unatoč" takes the dative: usluga → ...',
      },
      {
        before: 'Preporučila',
        answer: 'bih',
        accept: ['bi'],
        after: 'ovaj restoran svima.',
        hint: 'The conditional helper for "I" — it turns "recommend" into "would recommend".',
      },
      {
        before: 'Naručili smo dvije',
        answer: 'porcije',
        after: 'rižota.',
        hint: 'After "dvije" the noun takes the genitive singular: porcija → ...',
      },
    ],
    connectives: ['po mom mišljenju', 'unatoč', 'što je', 'ali', 'svima koji'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'opinion',
        label: 'Mark an opinion: "po mom mišljenju", "mislim da" or "čini mi se"',
        words: ['po mom mišljenju', 'mislim da', 'čini mi se'],
      },
      {
        id: 'relative',
        label: 'Use a relative clause with "koji / koja / koje"',
        words: ['koji', 'koja', 'koje'],
      },
      {
        id: 'recommend',
        label: 'Say whether you would recommend it: "preporučio/preporučila bih"',
        words: ['preporučila bih', 'preporučio bih', 'ne bih preporučila', 'ne bih preporučio'],
      },
    ],
  },

  // ── argumentative / semi-formal ────────────────────────────────────────────
  {
    id: 'b1-proposal',
    level: 'B1',
    title: 'A suggestion to your colleagues',
    prompt:
      'Na poslu Vam nešto smeta. Napišite kolegama poruku: opišite problem, predložite konkretno rješenje i zamolite ih za mišljenje.',
    promptEn:
      'Something at work bothers you. Write your colleagues a message: describe the problem, propose a concrete solution and ask for their opinion.',
    minWords: 50,
    model:
      'Dragi kolege, već nekoliko mjeseci primjećujem da naši sastanci često traju predugo i da na kraju nemamo vremena za najvažnije teme. ' +
      'Predlažem da svaki sastanak počne točno u devet i da traje najviše četrdeset pet minuta. ' +
      'Osim toga, bilo bi korisno da dnevni red dobijemo dan ranije, kako bismo se mogli pripremiti. ' +
      'Znam da nije lako promijeniti navike, ali vjerujem da bismo tako uštedjeli vrijeme i radili mirnije. ' +
      'Što mislite o tome? Ako se slažete, mogli bismo pokušati već od sljedećeg tjedna. ' +
      'Hvala vam na pažnji, Ivan',
    modelEn:
      'Dear colleagues, for several months I have noticed that our meetings often run too long and that in the end we have no time for the most important topics. ' +
      'I propose that every meeting start at nine sharp and last at most forty-five minutes. ' +
      'Besides that, it would be useful to receive the agenda a day earlier, so that we could prepare. ' +
      'I know it is not easy to change habits, but I believe we would save time this way and work more calmly. ' +
      'What do you think about it? If you agree, we could try from next week. ' +
      'Thank you for your attention, Ivan',
    structures: [
      {
        hr: 'Predlažem da svaki sastanak počne',
        en: 'I propose that every meeting start',
        why: 'After "predlažem" Croatian uses "da" plus the PRESENT tense (a perfective verb) — never an infinitive as English might suggest.',
      },
      {
        hr: 'kako bismo se mogli pripremiti',
        en: 'so that we could prepare',
        why: 'A purpose clause: "kako" plus the conditional "bismo", with the reflexive "se" tucked in right after it.',
      },
      {
        hr: 'vjerujem da bismo tako uštedjeli vrijeme',
        en: 'I believe we would save time this way',
        why: 'The conditional for "we" (bismo + the l-participle in the plural) states a likely result without promising it.',
      },
      {
        hr: 'Što mislite o tome?',
        en: 'What do you think about it?',
        why: '"misliti o" takes the locative (to → tome); asking for their view is what turns a complaint into a proposal.',
      },
    ],
    frames: [
      {
        before: 'Predlažem da sastanak',
        answer: 'počne',
        accept: ['započne'],
        after: 'u devet.',
        hint: 'After "predlažem da" the verb is in the present tense (perfective) — never the infinitive.',
      },
      {
        before: 'Bilo bi korisno da dnevni red',
        answer: 'dobijemo',
        accept: ['dobivamo', 'imamo'],
        after: 'dan ranije.',
        hint: '"da" + present tense: the "we" form of "dobiti".',
      },
      {
        before: 'Tako',
        answer: 'bismo',
        after: 'uštedjeli vrijeme.',
        hint: 'The conditional helper for "we".',
      },
      {
        before: 'Hvala vam na',
        answer: 'pažnji',
        accept: ['vremenu', 'strpljenju', 'razumijevanju'],
        after: '.',
        hint: '"hvala na" takes the locative: pažnja → ...',
      },
    ],
    connectives: ['predlažem da', 'osim toga', 'kako bismo', 'ako se slažete', 'što mislite'],
    checklist: [
      { id: 'len', label: 'At least 50 words', minWords: 50 },
      {
        id: 'propose',
        label: 'Propose with "predlažem da" or "bilo bi dobro / korisno da"',
        words: ['predlažem da', 'bilo bi dobro da', 'bilo bi korisno da'],
      },
      {
        id: 'cond',
        label: 'Use the conditional: "bismo", "bih" or "bi"',
        words: ['bismo', 'bih', 'bilo bi'],
      },
      {
        id: 'ask',
        label: 'Ask for their view: "što mislite" or "slažete li se"',
        words: ['što mislite', 'slažete li se'],
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

  // ── formal / transactional: a consumer complaint ─────────────────────────
  {
    id: 'b2-refund',
    level: 'B2',
    title: 'A complaint to an online shop',
    prompt:
      'Naručili ste proizvod preko interneta. Stigao je kasno i oštećen, a na Vašu prvu pritužbu nitko nije odgovorio. Napišite službenu poruku trgovini: opišite što se dogodilo, pozovite se na svoja prava i zatražite zamjenu ili povrat novca u određenom roku.',
    promptEn:
      'You ordered a product online. It arrived late and damaged, and nobody answered your first complaint. Write a formal message to the shop: describe what happened, refer to your rights and request a replacement or a refund within a set deadline.',
    minWords: 80,
    model:
      'Poštovani, obraćam Vam se u vezi s narudžbom broj 4471, koju sam platila 3. rujna. ' +
      'Paket je isporučen tek nakon dva tjedna, a kada sam ga otvorila, vidjela sam da je proizvod oštećen: ekran je bio napuknut, a kutija zgužvana. ' +
      'Unatoč mojoj pritužbi poslanoj istoga dana, do danas nisam dobila nikakav odgovor. ' +
      'S obzirom na to da je roba stigla oštećena, prema Zakonu o zaštiti potrošača imam pravo na zamjenu ili povrat novca. ' +
      'Stoga Vas molim da mi u roku od osam dana potvrdite kako će reklamacija biti riješena. ' +
      'Ako odgovor ne bih dobila ni tada, bit ću prisiljena obratiti se inspekciji. ' +
      'S poštovanjem, Ana Jurić',
    modelEn:
      'Dear Sir or Madam, I am writing to you regarding order number 4471, which I paid for on 3 September. ' +
      'The parcel was delivered only after two weeks, and when I opened it I saw that the product was damaged: the screen was cracked and the box crushed. ' +
      'Despite my complaint sent the same day, to this day I have received no reply at all. ' +
      'Given that the goods arrived damaged, under the Consumer Protection Act I am entitled to a replacement or a refund. ' +
      'I therefore ask you to confirm within eight days how the claim will be resolved. ' +
      'If I were not to receive a reply even then, I will be forced to turn to the inspectorate. ' +
      'Respectfully, Ana Jurić',
    structures: [
      {
        hr: 'Paket je isporučen tek nakon dva tjedna',
        en: 'The parcel was delivered only after two weeks',
        why: 'A passive participle agrees with its subject like an adjective: "paket" is masculine, so "isporučen" — a feminine "roba" would be "isporučena".',
      },
      {
        hr: 'Unatoč mojoj pritužbi poslanoj istoga dana',
        en: 'Despite my complaint sent the same day',
        why: '"unatoč" takes the DATIVE, not the genitive — and the participle "poslanoj" follows the noun into the dative too.',
      },
      {
        hr: 'S obzirom na to da je roba stigla oštećena',
        en: 'Given that the goods arrived damaged',
        why: '"s obzirom na" governs the accusative; "to da" turns a whole clause into the thing you are taking into account.',
      },
      {
        hr: 'Ako odgovor ne bih dobila ni tada',
        en: 'If I were not to receive a reply even then',
        why: '"ako" + the conditional (bih) states a possible future outcome more cautiously than the present would — correct standard Croatian, not a mistake.',
      },
    ],
    frames: [
      {
        before: 'Unatoč mojoj',
        answer: 'pritužbi',
        after: 'do danas nisam dobila odgovor.',
        hint: 'The noun "pritužba" (complaint) in the case "unatoč" governs — the dative, not the genitive.',
      },
      {
        before: 'Paket je',
        answer: 'isporučen',
        accept: ['dostavljen'],
        after: 'tek nakon dva tjedna.',
        hint: 'The passive participle of "isporučiti" (deliver), agreeing with the masculine subject.',
      },
      {
        before: 'S obzirom',
        answer: 'na',
        after: 'to da je roba stigla oštećena, tražim povrat novca.',
        hint: 'The preposition that completes "s obzirom ___" — it takes the accusative.',
      },
      {
        before: 'Molim Vas da mi potvrdite kako će reklamacija biti',
        answer: 'riješena',
        after: 'u roku od osam dana.',
        hint: 'The passive participle of "riješiti" (resolve), agreeing with the feminine subject "reklamacija".',
      },
    ],
    connectives: ['u vezi s', 'unatoč', 's obzirom na', 'stoga', 'u protivnom', 'u roku od'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'formal',
        label: 'Open and close formally ("Poštovani", "S poštovanjem")',
        words: ['poštovani', 's poštovanjem'],
      },
      {
        id: 'passive',
        label: 'Use a passive participle that agrees ("isporučen", "oštećena", "riješena")',
        words: ['isporučen', 'dostavljen', 'oštećen', 'riješen'],
      },
      {
        id: 'concession',
        label: 'Concede or frame with "unatoč", "iako" or "s obzirom na"',
        words: ['unatoč', 'iako', 's obzirom na'],
      },
      {
        id: 'deadline',
        label: 'Set a deadline ("u roku od", "najkasnije")',
        words: ['u roku od', 'najkasnije'],
      },
    ],
  },

  // ── personal: advice to a friend ─────────────────────────────────────────
  {
    id: 'b2-advice',
    level: 'B2',
    title: 'Advice to a friend facing a choice',
    prompt:
      'Prijatelj se dvoumi između sigurnog posla u rodnom gradu i rizičnije ponude u inozemstvu. Napišite mu pismo: pokažite da razumijete obje strane, iznesite svoje mišljenje i predložite kako da odluči.',
    promptEn:
      'A friend is torn between a safe job in his home town and a riskier offer abroad. Write him a letter: show you understand both sides, give your opinion and suggest how he should decide.',
    minWords: 80,
    model:
      'Dragi Luka, dugo sam razmišljao o onome što si mi rekao u petak. ' +
      'Razumijem zašto te ponuda iz Berlina privlači: plaća je bolja, a posao zanimljiviji od svega što si dosad radio. ' +
      'Iako je odlazak veliki rizik, mislim da bi ti bilo gore ostati i poslije se pitati što bi bilo da si otišao. ' +
      'Međutim, ne želim da odlučiš samo zbog novca. ' +
      'Što više razmišljam o tome, to mi se više čini da je pravo pitanje kako se osjećaš kad zamisliš sebe ondje za godinu dana. ' +
      'Ako bi ti se pokazalo da to ipak nije za tebe, uvijek se možeš vratiti; posao u Zagrebu nikamo ne bježi. ' +
      'Rekao si mi da ti je Marta rekla kako će te podržati u svakom slučaju, a to nije malo. ' +
      'Nazovi me kad odlučiš. Grli te, Ivan',
    modelEn:
      'Dear Luka, I have thought for a long time about what you told me on Friday. ' +
      'I understand why the offer from Berlin attracts you: the pay is better and the work more interesting than anything you have done so far. ' +
      'Although leaving is a big risk, I think it would be worse for you to stay and later wonder what would have happened had you gone. ' +
      'However, I do not want you to decide only because of the money. ' +
      'The more I think about it, the more it seems to me that the real question is how you feel when you picture yourself there a year from now. ' +
      'If it were to turn out that it is not for you after all, you can always come back; the job in Zagreb is not going anywhere. ' +
      'You told me Marta said she will support you whatever happens, and that is not nothing. ' +
      'Call me when you decide. Hugs, Ivan',
    structures: [
      {
        hr: 'Iako je odlazak veliki rizik, mislim da bi ti bilo gore ostati',
        en: 'Although leaving is a big risk, I think it would be worse for you to stay',
        why: '"iako" grants the other side its point first; the main clause then takes yours — the B2 way to disagree without dismissing.',
      },
      {
        hr: 'Što više razmišljam o tome, to mi se više čini',
        en: 'The more I think about it, the more it seems to me',
        why: 'The correlative "što … to" links two comparatives that move together — "the more …, the more …".',
      },
      {
        hr: 'Ako bi ti se pokazalo da to ipak nije za tebe',
        en: 'If it were to turn out that it is not for you after all',
        why: '"ako" + the conditional (bi) for an outcome that is possible but uncertain — softer than the present, and fully standard Croatian.',
      },
      {
        hr: 'Rekao si mi da ti je Marta rekla kako će te podržati',
        en: 'You told me Marta said she will support you',
        why: 'Reported speech nests with "da" and "kako", and Croatian keeps the tense that was actually spoken — no shift to the past as in English.',
      },
    ],
    frames: [
      {
        before: 'Što više razmišljam,',
        answer: 'to',
        after: 'mi se više čini da već znaš odgovor.',
        hint: 'The word that answers "što" in the "the more …, the more …" pattern.',
      },
      {
        before: 'Ako',
        answer: 'bi',
        after: 'ti se pokazalo da to nije za tebe, uvijek se možeš vratiti.',
        hint: 'The conditional auxiliary (third person) after "ako" — a possible outcome, not an impossible one.',
      },
      {
        before: 'Marta ti je rekla',
        answer: 'kako',
        accept: ['da'],
        after: 'će te podržati u svakom slučaju.',
        hint: 'The conjunction that introduces what someone said, after a verb of saying.',
      },
      {
        before: 'Unatoč',
        answer: 'riziku',
        after: 'mislim da trebaš otići.',
        hint: 'The noun "rizik" (risk) in the case "unatoč" demands — the dative.',
      },
    ],
    connectives: ['iako', 'međutim', 'što … to', 'ako bi', 'ipak', 'u svakom slučaju'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'personal',
        label: 'Open and close like a friend ("Dragi/Draga", "Grli te")',
        words: ['dragi', 'draga', 'grli te', 'pozdrav'],
      },
      {
        id: 'concession',
        label: 'Grant the other side a point ("iako", "međutim", "unatoč")',
        words: ['iako', 'međutim', 'unatoč'],
      },
      {
        id: 'conditional',
        label: 'Use "ako" with the conditional ("ako bi …")',
        words: ['ako bi', 'ako bih', 'ako biste'],
      },
      {
        id: 'reported',
        label: 'Report what someone said ("rekao si da", "rekla je kako")',
        words: ['rekao si', 'rekla si', 'rekao je', 'rekla je', 'rekao mi je', 'rekla mi je'],
      },
    ],
  },

  // ── report / narrative: minutes with reported speech ─────────────────────
  {
    id: 'b2-minutes',
    level: 'B2',
    title: 'Minutes of a residents’ meeting',
    prompt:
      'Bili ste na sastanku suvlasnika zgrade o obnovi krova. Napišite kratak zapisnik za susjede koji nisu došli: tko je što rekao, koje su odluke donesene i što slijedi.',
    promptEn:
      'You attended a meeting of the building’s co-owners about renovating the roof. Write short minutes for the neighbours who did not come: who said what, which decisions were taken and what happens next.',
    minWords: 80,
    model:
      'Zapisnik sa sastanka suvlasnika održanog 12. listopada. ' +
      'Sastanku je prisustvovalo dvadeset suvlasnika, a vodio ga je predstavnik stanara, gospodin Barić. ' +
      'Na početku je objasnio da je krov pregledan i da je stanje gore nego što se očekivalo: dvije grede su oštećene, a izolacija je gotovo posve dotrajala. ' +
      'Gospođa Novak pitala je hoće li se obnova moći platiti iz pričuve, na što je odgovoreno da pričuva pokriva otprilike polovicu troška. ' +
      'Iako je nekoliko suvlasnika bilo protiv dodatnih uplata, većina se složila da se posao ne smije odgađati. ' +
      'S obzirom na visinu troškova, odlučeno je da se prikupe još dvije ponude prije konačne odluke. ' +
      'Zaključeno je da će se sljedeći sastanak održati za mjesec dana, a ponude će suvlasnicima biti poslane e-poštom najkasnije do kraja tjedna.',
    modelEn:
      'Minutes of the co-owners’ meeting held on 12 October. ' +
      'Twenty co-owners attended, and the meeting was chaired by the residents’ representative, Mr Barić. ' +
      'At the start he explained that the roof had been inspected and that its condition is worse than expected: two beams are damaged and the insulation has almost completely worn out. ' +
      'Mrs Novak asked whether the renovation could be paid from the reserve fund, to which the answer was that the fund covers roughly half the cost. ' +
      'Although several co-owners were against additional payments, the majority agreed that the work must not be postponed. ' +
      'Given the size of the costs, it was decided to collect two more quotes before a final decision. ' +
      'It was concluded that the next meeting will be held in a month, and the quotes will be sent to the co-owners by e-mail no later than the end of the week.',
    structures: [
      {
        hr: 'Zapisnik sa sastanka suvlasnika održanog 12. listopada',
        en: 'Minutes of the co-owners’ meeting held on 12 October',
        why: 'A passive participle can trail its noun like an adjective and takes its case: "sastanka" is genitive, so "održanog". Note "sa" before an s-.',
      },
      {
        hr: 'Gospođa Novak pitala je hoće li se obnova moći platiti',
        en: 'Mrs Novak asked whether the renovation could be paid',
        why: 'A reported yes/no question keeps "li" — "pitala je hoće li" — with the future exactly as it was asked; Croatian does not shift the tense.',
      },
      {
        hr: 'odlučeno je da se prikupe još dvije ponude',
        en: 'it was decided to collect two more quotes',
        why: 'The impersonal passive (neuter participle + "je") states a decision without naming who took it — the register of minutes and reports.',
      },
      {
        hr: 'S obzirom na visinu troškova',
        en: 'Given the size of the costs',
        why: '"s obzirom na" governs the accusative ("visinu"), and "troškova" is the genitive plural saying whose size.',
      },
    ],
    frames: [
      {
        before: 'Krov je',
        answer: 'pregledan',
        after: 'i stanje je gore nego što se očekivalo.',
        hint: 'The passive participle of "pregledati" (inspect), agreeing with the masculine subject.',
      },
      {
        before: 'Gospođa Novak pitala je',
        answer: 'hoće li',
        accept: ['može li'],
        after: 'se obnova moći platiti iz pričuve.',
        hint: 'A reported yes/no question: the future auxiliary followed by the question particle.',
      },
      {
        before: 'S obzirom na',
        answer: 'visinu',
        after: 'troškova, odlučeno je da se prikupe još dvije ponude.',
        hint: 'The noun "visina" (amount) in the case "s obzirom na" governs — the accusative.',
      },
      {
        before: 'Sljedeći sastanak održat će se za mjesec',
        answer: 'dana',
        after: ', o čemu će svi biti obaviješteni.',
        hint: 'The word for "days" that follows "mjesec" in the idiom for "in a month" — genitive plural.',
      },
    ],
    connectives: ['na početku', 'na što', 'iako', 's obzirom na', 'odlučeno je', 'zaključeno je'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'reported',
        label: 'Report what was said or asked ("objasnio je da", "pitala je hoće li")',
        words: [
          'rekao je da',
          'rekla je da',
          'objasnio je da',
          'objasnila je da',
          'pitao je',
          'pitala je',
          'hoće li',
        ],
      },
      {
        id: 'passive',
        label: 'State a decision in the passive ("odlučeno je", "zaključeno je")',
        words: ['odlučeno je', 'zaključeno je', 'dogovoreno je', 'odgovoreno je'],
      },
      {
        id: 'next',
        label: 'Say what happens next and by when ("najkasnije", "sljedeći sastanak")',
        words: ['najkasnije', 'do kraja', 'sljedeći sastanak', 'za mjesec'],
      },
    ],
  },

  // ── argumentative: a policy essay ─────────────────────────────────────────
  {
    id: 'b2-car-free',
    level: 'B2',
    title: 'Cars out of the city centre?',
    prompt:
      'Gradska uprava predlaže da se središte grada zatvori za automobile. Napišite kratak esej: iznesite argumente za i protiv, priznajte protuargument i zauzmite stav.',
    promptEn:
      'The city council proposes closing the city centre to cars. Write a short essay: give the arguments for and against, acknowledge the counter-argument and take a position.',
    minWords: 80,
    model:
      'Prijedlog da se središte grada zatvori za automobile podijelio je građane. ' +
      'Zagovornici ističu da bi središte bez prometa bilo tiše, sigurnije i ugodnije za pješake: što je manje automobila, to je zrak čistiji. ' +
      'Protivnici, međutim, upozoravaju da bi trgovci mogli izgubiti kupce, a stariji ljudi teže doći do liječnika ili ljekarne. ' +
      'Iako su ti strahovi opravdani, iskustva drugih gradova pokazuju da promet u trgovinama nakon zatvaranja obično raste, jer ljudi ondje provode više vremena. ' +
      'S obzirom na to da je javni prijevoz već sada dobro organiziran, smatram da prijedlog treba prihvatiti, ali postupno. ' +
      'Ako bi se središte zatvorilo odjednom, otpor bi bio prevelik; ako se zatvara ulica po ulica, građani se mogu naviknuti. ' +
      'Unatoč prosvjedima, dugoročna korist za sve veća je od kratkoročne neugodnosti.',
    modelEn:
      'The proposal to close the city centre to cars has divided the citizens. ' +
      'Supporters point out that a centre without traffic would be quieter, safer and more pleasant for pedestrians: the fewer cars, the cleaner the air. ' +
      'Opponents, however, warn that shopkeepers could lose customers, and older people would find it harder to reach a doctor or a pharmacy. ' +
      'Although those fears are justified, the experience of other cities shows that footfall in shops usually rises after a closure, because people spend more time there. ' +
      'Given that public transport is already well organised, I believe the proposal should be accepted, but gradually. ' +
      'If the centre were closed all at once, the resistance would be too great; if it is closed street by street, people can get used to it. ' +
      'Despite the protests, the long-term benefit for everyone outweighs the short-term inconvenience.',
    structures: [
      {
        hr: 'što je manje automobila, to je zrak čistiji',
        en: 'the fewer cars, the cleaner the air',
        why: 'The correlative "što … to" pairs two comparatives; after "manje" the counted noun stands in the genitive plural ("automobila").',
      },
      {
        hr: 'Protivnici, međutim, upozoravaju da',
        en: 'Opponents, however, warn that',
        why: '"međutim" sits inside the sentence between commas — its natural essay position, not only at the start.',
      },
      {
        hr: 'Iako su ti strahovi opravdani, iskustva drugih gradova pokazuju',
        en: 'Although those fears are justified, the experience of other cities shows',
        why: 'Concede with "iako", then answer with evidence; "opravdani" is a passive participle used as a predicate and agrees in the masculine plural.',
      },
      {
        hr: 'Ako bi se središte zatvorilo odjednom, otpor bi bio prevelik',
        en: 'If the centre were closed all at once, the resistance would be too great',
        why: '"ako" with the conditional in both clauses describes a possible policy and its likely result — standard Croatian, never an error.',
      },
      {
        hr: 'Unatoč prosvjedima',
        en: 'Despite the protests',
        why: '"unatoč" takes the dative — here the dative plural "prosvjedima", not a genitive "prosvjeda".',
      },
    ],
    frames: [
      {
        before: 'Što je manje automobila,',
        answer: 'to',
        after: 'je zrak čistiji.',
        hint: 'The word that answers "što" in the "the fewer …, the cleaner …" pattern.',
      },
      {
        before: 'Unatoč',
        answer: 'prosvjedima',
        after: 'korist je veća od neugodnosti.',
        hint: 'The noun "prosvjed" (protest) in the plural, in the case "unatoč" governs — the dative.',
      },
      {
        before: 'Ako',
        answer: 'bi',
        after: 'se središte zatvorilo odjednom, građani se ne mogu naviknuti.',
        hint: 'The conditional auxiliary after "ako" for a possible outcome — correct Croatian, not an error.',
      },
      {
        before: 'Iako su ti strahovi',
        answer: 'opravdani',
        after: ', iskustva drugih gradova govore drugačije.',
        hint: 'The participle "justified" agreeing with the masculine plural subject "strahovi".',
      },
    ],
    connectives: ['međutim', 'iako', 'što … to', 's obzirom na', 'unatoč', 'smatram da'],
    checklist: [
      { id: 'len', label: 'At least 80 words', minWords: 80 },
      {
        id: 'sides',
        label: 'Name both sides ("zagovornici", "protivnici", "s jedne strane")',
        words: ['zagovornici', 'protivnici', 's jedne strane', 'za i protiv'],
      },
      {
        id: 'concession',
        label: 'Concede a point ("iako", "međutim", "unatoč")',
        words: ['iako', 'međutim', 'unatoč'],
      },
      {
        id: 'correlative',
        label: 'Use "što …, to …" ("što je manje …, to je …")',
        words: ['što je manje', 'što je više', 'što više', 'što manje'],
      },
      {
        id: 'stance',
        label: 'Take a position ("smatram da", "mislim da")',
        words: ['smatram da', 'mislim da', 'po mojem mišljenju', 'po mom mišljenju'],
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

  {
    id: 'c1-recommendation',
    level: 'C1',
    title: 'A letter of recommendation',
    prompt:
      'Bivša suradnica moli vas za pismo preporuke za mjesto voditeljice projekata. Napišite ga: navedite u kojem ste svojstvu surađivali, potkrijepite ocjenu konkretnim primjerom i zaključite jasnom preporukom.',
    promptEn:
      'A former colleague asks you for a letter of recommendation for a project-manager post. Write it: state in what capacity you worked together, back your assessment with a concrete example and close with a clear recommendation.',
    minWords: 100,
    model:
      'Poštovani, s velikim zadovoljstvom preporučujem kolegicu Ivanu Barić za mjesto voditeljice projekata u Vašoj ustanovi. ' +
      'Tijekom trogodišnje suradnje u našem odjelu pokazala se kao osoba koja preuzima odgovornost prije nego što to itko od nje zatraži. ' +
      'Vodeći tim od šest suradnika, uspjela je skratiti rokove isporuke, a pritom nije narušila kvalitetu rada. ' +
      'Naime, u razdoblju kad je odjel ostao bez dvoje iskusnih suradnika, ona je preuzela njihove zadatke bez ijedne primjedbe i završila ih u roku. ' +
      'Posebno ističem njezinu sposobnost da složene probleme svede na nekoliko jasnih pitanja, zahvaljujući čemu su sastanci koje je vodila trajali upola kraće. ' +
      'Držim stoga da bi Vaša ustanova njezinim dolaskom dobila stručnjakinju koja ne čeka upute, nego ih oblikuje. ' +
      'Stojim Vam na raspolaganju za sve dodatne obavijesti. S poštovanjem, dr. sc. Marko Horvat',
    modelEn:
      'Dear Sir or Madam, it is with great pleasure that I recommend my colleague Ivana Barić for the post of project manager at your institution. ' +
      'During three years of working together in our department she proved to be someone who takes responsibility before anyone asks it of her. ' +
      'Leading a team of six, she managed to shorten delivery deadlines without compromising the quality of the work. ' +
      'Indeed, in the period when the department lost two experienced staff, she took over their tasks without a single complaint and finished them on time. ' +
      'I would single out her ability to reduce complex problems to a few clear questions, thanks to which the meetings she chaired took half as long. ' +
      'I therefore hold that with her arrival your institution would gain a professional who does not wait for instructions but shapes them. ' +
      'I remain at your disposal for any further information. Respectfully, Dr Marko Horvat',
    structures: [
      {
        hr: 'Vodeći tim od šest suradnika, uspjela je skratiti rokove isporuke',
        en: 'Leading a team of six, she managed to shorten delivery deadlines',
        why: 'The present verbal adverb ("vodeći") condenses a whole clause into one word, and "šest suradnika" shows the genitive plural after a number above four.',
      },
      {
        hr: 'zahvaljujući čemu su sastanci koje je vodila trajali upola kraće',
        en: 'thanks to which the meetings she chaired took half as long',
        why: '"zahvaljujući" takes the dative — here the pronoun "čemu" links a whole result back to the cause without starting a new sentence.',
      },
      {
        hr: 'Držim stoga da bi Vaša ustanova njezinim dolaskom dobila stručnjakinju',
        en: 'I therefore hold that with her arrival your institution would gain a professional',
        why: 'Condensation at C1: the instrumental "njezinim dolaskom" replaces a whole "if she came" clause, and "stoga" sits in second position after the verb.',
      },
    ],
    frames: [
      {
        before: 'Tijekom trogodišnje',
        answer: 'suradnje',
        after: 'pokazala se kao iznimno pouzdana osoba.',
        hint: 'The noun "cooperation / working together" in the genitive — "tijekom" always takes the genitive.',
      },
      {
        before: 'Sastanci su trajali kraće zahvaljujući njezinoj',
        answer: 'sposobnosti',
        after: 'da složene probleme svede na jasna pitanja.',
        hint: 'The dative of the feminine i-noun "ability" — "zahvaljujući" governs the dative.',
      },
      {
        before: 'Držim',
        answer: 'stoga',
        accept: ['zato', 'dakle'],
        after: 'da bi Vaša ustanova njezinim dolaskom mnogo dobila.',
        hint: 'The formal connector "therefore", placed in second position right after the verb.',
      },
    ],
    connectives: [
      'tijekom',
      'pritom',
      'naime',
      'zahvaljujući čemu',
      'držim stoga da',
      'stojim na raspolaganju',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'open',
        label: 'Open formally ("Poštovani") and close with "S poštovanjem"',
        words: ['poštovani'],
      },
      {
        id: 'recommend',
        label: 'State the recommendation ("preporučujem" / "ističem")',
        words: ['preporuč', 'ističem'],
      },
      {
        id: 'cause',
        label: 'Link an example to its result ("zahvaljujući", "pritom", "stoga")',
        words: ['zahvaljujući', 'pritom', 'stoga'],
      },
    ],
  },
  {
    id: 'c1-advice-letter',
    level: 'C1',
    title: 'Advice on a hard decision',
    prompt:
      'Prijatelj u Hrvatskoj pita vas treba li preuzeti očev obrt ili ostati na sigurnom poslu. Napišite mu pismo: odvagnite obje strane, recite što biste vi učinili i zašto, ne skrivajući da odluka ima cijenu.',
    promptEn:
      'A friend in Croatia asks whether he should take over his father’s workshop or stay in a secure job. Write him a letter: weigh both sides, say what you would do and why, without hiding that the decision has a cost.',
    minWords: 100,
    model:
      'Dragi Marko, dugo sam razmišljao o tvome pitanju i neću se praviti da imam jednostavan odgovor. ' +
      'Preuzeti očev obrt znači preuzeti i sve ono što uz njega ide: dugove koje ti nije spominjao, kupce koji su navikli na njega, a ne na tebe, i selo koje će svaku tvoju promjenu mjeriti prema onome kako je bilo prije. ' +
      'S druge strane, da sam na tvome mjestu, teško bih podnio da radionica u kojoj smo odrasli završi kao skladište. ' +
      'Naime, nije riječ samo o poslu, nego o tome hoćeš li za deset godina žaliti što nisi pokušao. ' +
      'Odluka stoga ne ovisi o brojkama, koliko god ih pregledavao, nego o tome jesi li spreman prvih nekoliko godina raditi za manje nego sada. ' +
      'Ako jesi, javi mi — pomoći ću ti koliko mogu. Tvoj Ivan',
    modelEn:
      'Dear Marko, I have thought about your question for a long time and I will not pretend to have a simple answer. ' +
      'Taking over your father’s workshop means taking over everything that comes with it: the debts he never mentioned to you, the customers who are used to him and not to you, and a village that will measure every change you make against how it used to be. ' +
      'On the other hand, if I were in your place, I would find it hard to bear the workshop we grew up in ending as a storeroom. ' +
      'Because this is not only about a job, but about whether in ten years you will regret not having tried. ' +
      'So the decision does not depend on the figures, however often you go over them, but on whether you are prepared to earn less than now for the first few years. ' +
      'If you are, let me know — I will help as much as I can. Yours, Ivan',
    structures: [
      {
        hr: 'da sam na tvome mjestu, teško bih podnio',
        en: 'if I were in your place, I would find it hard to bear',
        why: 'The unreal conditional: "da" + present of "biti" sets up the hypothesis, and the conditional "bih podnio" carries the consequence — the way to give advice without giving orders.',
      },
      {
        hr: 'nije riječ samo o poslu, nego o tome hoćeš li',
        en: 'this is not only about a job, but about whether',
        why: '"riječ je o" + locative names what something is really about; "o tome" + an embedded question lets a whole clause take the locative slot.',
      },
      {
        hr: 'Odluka stoga ne ovisi o brojkama',
        en: 'So the decision does not depend on the figures',
        why: '"ovisiti o" governs the locative — a verb-government point learners get wrong — and "stoga" takes second position after the subject.',
      },
    ],
    frames: [
      {
        before: 'Da sam na tvome',
        answer: 'mjestu',
        after: ', ne bih žurio s odlukom.',
        hint: 'The locative of "place" after "na" — the "if I were you" formula.',
      },
      {
        before: 'Nije riječ samo o',
        answer: 'poslu',
        after: ', nego o obitelji.',
        hint: 'The locative of "posao" after "o" — the fleeting "a" drops before the ending.',
      },
      {
        before: 'Odluka ne ovisi o',
        answer: 'brojkama',
        after: ', nego o tome jesi li spreman raditi za manje.',
        hint: '"ovisiti o" + locative — the plural of "brojka" (figure).',
      },
    ],
    connectives: ['s druge strane', 'naime', 'stoga', 'koliko god', 'riječ je o', 'ovisi o'],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'open',
        label: 'Open personally ("Dragi" / "Draga")',
        words: ['dragi', 'draga'],
      },
      {
        id: 'weigh',
        label: 'Weigh both sides ("s druge strane", "naime")',
        words: ['s druge strane', 's jedne strane', 'naime'],
      },
      {
        id: 'advise',
        label: 'Give advice conditionally ("da sam na tvome mjestu", "ovisi o")',
        words: ['da sam na tvome mjestu', 'da sam na tvom mjestu', 'ovisi o'],
      },
    ],
  },
  {
    id: 'c1-abstract',
    level: 'C1',
    title: 'An academic abstract',
    prompt:
      'Napišite sažetak istraživačkog rada o radu od kuće u malim tvrtkama: predmet, metodu, glavni nalaz, njegovo tumačenje i ograničenje istraživanja — u bezličnom akademskom registru.',
    promptEn:
      'Write the abstract of a research paper on working from home in small firms: subject, method, main finding, its interpretation and the study’s limitation — in impersonal academic register.',
    minWords: 100,
    model:
      'U radu se analizira utjecaj rada od kuće na produktivnost zaposlenika u malim hrvatskim tvrtkama. ' +
      'Polazeći od pretpostavke da se učinak ne može mjeriti samo brojem odrađenih sati, autori su proveli anketu među 214 zaposlenika i dvanaest intervjua s upravama tvrtki. ' +
      'Rezultati pokazuju da produktivnost ne ovisi toliko o mjestu rada koliko o jasnoći zadataka: zaposlenici s precizno određenim ciljevima postizali su usporedive rezultate bez obzira na to jesu li radili od kuće ili u uredu. ' +
      'Pritom se pokazalo da uprave koje inzistiraju na stalnom nadzoru bilježe veću fluktuaciju radnika. ' +
      'Naime, nadzor se u razgovorima dosljedno tumačio kao nepovjerenje. ' +
      'Stoga se zaključuje da bi ulaganje u definiranje zadataka donijelo više nego ulaganje u sustave praćenja. ' +
      'Ograničenje istraživanja jest usmjerenost na jedan sektor, zbog čega se nalazi ne mogu bez ograda poopćiti.',
    modelEn:
      'The paper analyses the effect of working from home on employee productivity in small Croatian firms. ' +
      'Starting from the assumption that performance cannot be measured by hours worked alone, the authors surveyed 214 employees and conducted twelve interviews with company managements. ' +
      'The results show that productivity depends less on the place of work than on the clarity of tasks: employees with precisely defined goals achieved comparable results regardless of whether they worked from home or in the office. ' +
      'It further emerged that managements which insist on constant supervision record higher staff turnover. ' +
      'In the interviews, supervision was consistently read as distrust. ' +
      'It is therefore concluded that investing in task definition would yield more than investing in monitoring systems. ' +
      'The study’s limitation is its focus on a single sector, for which reason the findings cannot be generalised without reservation.',
    structures: [
      {
        hr: 'U radu se analizira utjecaj rada od kuće na produktivnost',
        en: 'The paper analyses the effect of working from home on productivity',
        why: 'Academic Croatian hides the author: the "se" passive ("analizira se") plus the nominalisation "utjecaj X na Y" turns a whole sentence into a noun phrase.',
      },
      {
        hr: 'Polazeći od pretpostavke da se učinak ne može mjeriti',
        en: 'Starting from the assumption that performance cannot be measured',
        why: 'The present verbal adverb "polazeći od" + genitive frames the method in one breath; "da" then unpacks the assumption.',
      },
      {
        hr: 'ne ovisi toliko o mjestu rada koliko o jasnoći zadataka',
        en: 'depends less on the place of work than on the clarity of tasks',
        why: '"ne toliko … koliko" ranks two causes; both sit in the locative because "ovisiti o" governs it.',
      },
      {
        hr: 'uprave koje inzistiraju na stalnom nadzoru',
        en: 'managements which insist on constant supervision',
        why: '"inzistirati na" takes the locative — the same government as "hvala na" and one of the C1 verb-government points.',
      },
    ],
    frames: [
      {
        before: 'U radu se',
        answer: 'analizira',
        accept: ['istražuje', 'razmatra', 'ispituje'],
        after: 'utjecaj rada od kuće na produktivnost.',
        hint: 'The impersonal "se" form of "to analyse" — the academic way of saying "the paper analyses".',
      },
      {
        before: 'Uprave koje inzistiraju na stalnom',
        answer: 'nadzoru',
        after: 'bilježe veću fluktuaciju radnika.',
        hint: '"inzistirati na" + locative — the masculine noun for "supervision".',
      },
      {
        before: 'Produktivnost ne ovisi o mjestu rada, nego o',
        answer: 'jasnoći',
        after: 'zadataka.',
        hint: 'The locative of "jasnoća" (clarity) after "ovisi o".',
      },
    ],
    connectives: [
      'polazeći od',
      'rezultati pokazuju da',
      'pritom',
      'naime',
      'stoga se zaključuje',
      'zbog čega',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'impersonal',
        label: 'Use the impersonal "se" form ("analizira se", "zaključuje se")',
        words: ['se analizira', 'analizira se', 'se istražuje', 'se zaključuje', 'zaključuje se'],
      },
      {
        id: 'finding',
        label: 'Report the finding ("rezultati pokazuju da", "pokazalo se da")',
        words: ['rezultati pokazuju', 'pokazalo se', 'utvrđeno je'],
      },
      {
        id: 'connect',
        label: 'Connect precisely ("pritom", "naime", "stoga")',
        words: ['pritom', 'naime', 'stoga'],
      },
    ],
  },
  {
    id: 'c1-incident-report',
    level: 'C1',
    title: 'An incident report',
    prompt:
      'U skladištu se dogodio manji incident bez ozlijeđenih. Kao voditelj napišite službeno izvješće: točan slijed događaja, što je utvrđeno pregledom, što je poduzeto i što predlažete da se ne ponovi.',
    promptEn:
      'A minor incident with no injuries has occurred in the warehouse. As the manager, write the official report: the exact sequence of events, what the inspection established, what was done and what you propose so it does not recur.',
    minWords: 100,
    model:
      'Predmet: izvješće o incidentu u skladištu, 14. svibnja. ' +
      'Dana 14. svibnja oko 9.30 sati viličar kojim je upravljao djelatnik M. K. zahvatio je regal u trećem redu, nakon čega su se s gornje police srušile tri palete ambalaže. ' +
      'Ozlijeđenih nije bilo, budući da se u tom trenutku u prolazu nitko nije nalazio. ' +
      'Došavši na mjesto događaja, voditelj smjene isključio je struju u tom dijelu skladišta i zatražio da se prolaz zatvori dok se regal ne provjeri. ' +
      'Pregledom je utvrđeno da je regal bio preopterećen, a da je označena nosivost premašena za približno četrdeset posto. ' +
      'Djelatnik je saslušan i izjavio je da ga nitko nije upozorio na ograničenje. ' +
      'Predlažem stoga da se nosivost vidljivo označi na svakom regalu i da se sve smjene ponovno upoznaju s pravilima slaganja tereta. ' +
      'Izvješće sastavio: Tomislav Perić, voditelj skladišta.',
    modelEn:
      'Subject: report on the incident in the warehouse, 14 May. ' +
      'On 14 May at about 9.30 a forklift driven by employee M. K. struck a rack in the third row, after which three pallets of packaging fell from the top shelf. ' +
      'There were no injuries, since nobody was in the aisle at that moment. ' +
      'On arriving at the scene, the shift leader switched off the power in that part of the warehouse and asked for the aisle to be closed until the rack had been checked. ' +
      'The inspection established that the rack had been overloaded and that the marked load capacity had been exceeded by roughly forty per cent. ' +
      'The employee was interviewed and stated that nobody had warned him of the limit. ' +
      'I therefore propose that the load capacity be visibly marked on every rack and that all shifts be briefed again on the rules for stacking goods. ' +
      'Report compiled by: Tomislav Perić, warehouse manager.',
    structures: [
      {
        hr: 'viličar kojim je upravljao djelatnik',
        en: 'a forklift driven by an employee',
        why: 'The relative pronoun takes the case its own verb demands: "upravljati" governs the instrumental, so "kojim" — literally "which the employee was operating".',
      },
      {
        hr: 'Došavši na mjesto događaja, voditelj smjene isključio je struju',
        en: 'On arriving at the scene, the shift leader switched off the power',
        why: 'The past verbal adverb "došavši" orders two actions by one person without "kad je došao" — the compact chronology a report needs.',
      },
      {
        hr: 'Pregledom je utvrđeno da je regal bio preopterećen',
        en: 'The inspection established that the rack had been overloaded',
        why: 'The instrumental of means ("pregledom" = by inspection) plus the impersonal passive "utvrđeno je" state a finding without naming who found it.',
      },
      {
        hr: 'Predlažem stoga da se nosivost vidljivo označi',
        en: 'I therefore propose that the load capacity be visibly marked',
        why: '"predlažem da se" + present is how a proposal is phrased — the "se" passive keeps the focus on what should happen, not on who does it.',
      },
    ],
    frames: [
      {
        before: 'Viličar',
        answer: 'kojim',
        after: 'je upravljao djelatnik zahvatio je regal.',
        hint: 'The relative pronoun in the instrumental — "upravljati" (to operate) takes the instrumental.',
      },
      {
        before: 'Došavši na mjesto',
        answer: 'događaja',
        after: ', voditelj smjene isključio je struju.',
        hint: 'The genitive of "događaj" (event) — "the scene OF the event".',
      },
      {
        before: 'Pregledom je',
        answer: 'utvrđeno',
        accept: ['ustanovljeno'],
        after: 'da je regal bio preopterećen.',
        hint: 'The neuter passive participle for "established" — the impersonal "it was established".',
      },
    ],
    connectives: [
      'dana',
      'nakon čega',
      'budući da',
      'došavši',
      'pregledom je utvrđeno',
      'predlažem stoga da',
    ],
    checklist: [
      { id: 'len', label: 'At least 100 words', minWords: 100 },
      {
        id: 'time',
        label: 'Fix the time precisely ("dana", "oko … sati", "nakon čega")',
        words: ['dana', 'oko', 'nakon čega'],
      },
      {
        id: 'passive',
        label: 'Report findings impersonally ("utvrđeno je", "saslušan je")',
        words: ['utvrđeno', 'ustanovljeno', 'saslušan'],
      },
      {
        id: 'propose',
        label: 'Propose a measure ("predlažem da se")',
        words: ['predlažem', 'predlaže se'],
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

  {
    id: 'c2-open-letter',
    level: 'C2',
    title: 'An open letter',
    prompt:
      'Napišite otvoreno pismo gradskoj vlasti o odluci koja pogađa vaš kvart. Recite zašto pišete javno, iznesite činjenice i brojke, priznajte što protivnoj strani stoji, pa zatražite konkretnu odgodu ili izmjenu — službeno, bez povišenog tona.',
    promptEn:
      'Write an open letter to the city authorities about a decision that affects your neighbourhood. Say why you are writing publicly, give the facts and figures, concede what the other side has right, then ask for a specific postponement or amendment — formally, without raising your voice.',
    minWords: 120,
    model:
      'Poštovani gradonačelniče, poštovani vijećnici, ' +
      'obraćam Vam se javno jer su privatni dopisi u posljednjih šest mjeseci ostali bez odgovora. ' +
      'Riječ je o najavljenom zatvaranju knjižnice u Trnju, koje se u obrazloženju naziva „racionalizacijom mreže“. ' +
      'Više od dvije tisuće građana potpisalo je peticiju protiv te odluke, a među njima je i dvjestotinjak učenika obližnje škole, kojima je ta čitaonica jedino mirno mjesto za učenje. ' +
      'Unatoč tomu, prijedlog je upućen na glasovanje bez javne rasprave. ' +
      'Ne osporavam da grad mora štedjeti; osporavam da se štedi ondje gdje je ušteda najmanja, a šteta najveća. ' +
      'Da je uprava objavila brojke, o njima bismo mogli razgovarati; ovako možemo samo nagađati. ' +
      'Stoga Vas molim da odluku odgodite dok se ne provede javno savjetovanje i dok se ne razmotri prijedlog udruge stanara o zajedničkom financiranju. ' +
      'Knjižnica koja se jednom zatvori više se ne otvara. ' +
      'S poštovanjem, Ana Kovač, u ime Inicijative za Trnje',
    modelEn:
      'Dear Mayor, dear Councillors, ' +
      'I am addressing you publicly because private letters over the past six months have gone unanswered. ' +
      'This concerns the announced closure of the library in Trnje, which the explanatory note calls a “rationalisation of the network”. ' +
      'More than two thousand residents have signed a petition against that decision, among them some two hundred pupils of the nearby school, for whom that reading room is the only quiet place to study. ' +
      'Despite this, the proposal has been sent to a vote without public consultation. ' +
      'I do not dispute that the city must save; I dispute that it is saving where the saving is smallest and the damage greatest. ' +
      'Had the administration published the figures, we could discuss them; as it is, we can only guess. ' +
      'I therefore ask you to postpone the decision until a public consultation has been held and until the residents’ association’s proposal for joint funding has been considered. ' +
      'A library that closes does not reopen. ' +
      'Yours faithfully, Ana Kovač, on behalf of the Trnje Initiative',
    structures: [
      {
        hr: 'Više od dvije tisuće građana potpisalo je peticiju',
        en: 'More than two thousand residents have signed a petition',
        why: 'A quantity subject ("više od dvije tisuće građana") takes a NEUTER SINGULAR verb — potpisalo je — however many people it names.',
      },
      {
        hr: 'Unatoč tomu, prijedlog je upućen na glasovanje bez javne rasprave',
        en: 'Despite this, the proposal has been sent to a vote without public consultation',
        why: '"unatoč" governs the DATIVE (tomu), never the genitive; the passive participle "upućen" keeps the letter impersonal and the blame unspoken.',
      },
      {
        hr: 'Da je uprava objavila brojke, o njima bismo mogli razgovarati',
        en: 'Had the administration published the figures, we could discuss them',
        why: 'The past counterfactual: "da" + perfect in the condition, the conditional ("bismo mogli") in the result — a reproach delivered as a hypothesis.',
      },
    ],
    frames: [
      {
        before: 'Unatoč',
        answer: 'tomu',
        accept: ['tome'],
        after: ', prijedlog je upućen na glasovanje.',
        hint: 'The dative of "to" — "unatoč" takes the dative, never the genitive.',
      },
      {
        before: 'Više od dvije tisuće građana',
        answer: 'potpisalo je',
        accept: ['je potpisalo'],
        after: 'peticiju.',
        hint: 'Neuter singular agreement after a quantity expression.',
      },
      {
        before: 'Da je uprava objavila brojke, o njima',
        answer: 'bismo',
        after: 'mogli razgovarati.',
        hint: 'The conditional auxiliary, first person plural, in second position.',
      },
    ],
    connectives: ['riječ je o', 'unatoč tomu', 'ne osporavam da', 'stoga', 'dok se ne', 'u ime'],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'formal',
        label: 'Open and close formally ("Poštovani" … "S poštovanjem")',
        words: ['poštovani', 's poštovanjem'],
      },
      {
        id: 'concede',
        label: 'Concede what the other side has right ("ne osporavam da", "unatoč")',
        words: ['ne osporavam', 'priznajem', 'unatoč'],
      },
      {
        id: 'ask',
        label: 'Ask for something specific with a condition ("molim da … dok se ne")',
        words: ['molim', 'dok se ne', 'odgod'],
      },
    ],
  },
  {
    id: 'c2-review',
    level: 'C2',
    title: 'A theatre review',
    prompt:
      'Napišite kazališnu kritiku predstave koju ste (stvarno ili izmišljeno) gledali. Opišite redateljski postupak, recite što je najbolje, a što slabije, i završite ocjenom koja obvezuje — bez prepričavanja radnje.',
    promptEn:
      'Write a theatre review of a production you have (really or fictionally) seen. Describe the director’s approach, say what is best and what is weaker, and end with a verdict that commits you — without retelling the plot.',
    minWords: 120,
    model:
      'Nova produkcija zagrebačkoga nezavisnog kazališta „Skladište“ traje sat i četrdeset minuta i u tom vremenu ne dopušta nijedan udoban trenutak. ' +
      'Redateljica je klasični tekst o obiteljskom nasljedstvu smjestila u praznu dvoranu s jednim stolom, a glumcima uskratila sve čime se obično prikriva slab tekst: kostime, glazbu, svjetlosne efekte. ' +
      'Ostale su samo riječi i stanke. ' +
      'Upravo su stanke ono najbolje u predstavi: u njima se čuje da likovi jedni drugima ne vjeruju ni kad govore istinu. ' +
      'Slabiji je drugi dio, u kojem redateljica, kao da se uplašila vlastite strogosti, dopušta dvije scene vike koje objašnjavaju ono što je publika već shvatila. ' +
      'Da je predstava završila dvadeset minuta ranije, bila bi gotovo savršena. ' +
      'Ovako je vrlo dobra, što je u sezoni prosječnih premijera više nego dovoljno. ' +
      'Preporučujem je onima koji od kazališta ne traže utjehu.',
    modelEn:
      'The new production by the Zagreb independent theatre “Skladište” runs an hour and forty minutes and in that time allows not one comfortable moment. ' +
      'The director has set a classic text about a family inheritance in an empty hall with a single table, and denied the actors everything that usually hides a weak script: costumes, music, lighting effects. ' +
      'Only words and pauses remain. ' +
      'The pauses are precisely what is best in the production: in them you can hear that the characters do not believe one another even when they tell the truth. ' +
      'The second part is weaker; in it the director, as if frightened by her own severity, allows two shouting scenes that explain what the audience has already understood. ' +
      'Had the production ended twenty minutes earlier, it would have been almost perfect. ' +
      'As it is, it is very good, which in a season of average premieres is more than enough. ' +
      'I recommend it to those who do not go to the theatre for comfort.',
    structures: [
      {
        hr: 'glumcima uskratila sve čime se obično prikriva slab tekst',
        en: 'denied the actors everything that usually hides a weak script',
        why: 'The relative "čime" is the INSTRUMENTAL of "što" — "with which"; the case is carried by the relative pronoun, not by a preposition.',
      },
      {
        hr: 'Upravo su stanke ono najbolje u predstavi',
        en: 'The pauses are precisely what is best in the production',
        why: 'Fronting "upravo" pins the emphasis on one word, and the enclitic "su" still lands in second position — after "upravo", not after the subject.',
      },
      {
        hr: 'Da je predstava završila dvadeset minuta ranije, bila bi gotovo savršena',
        en: 'Had the production ended twenty minutes earlier, it would have been almost perfect',
        why: 'The critic’s counterfactual: "da" + perfect states what did not happen, and the conditional "bila bi" states the verdict it cost.',
      },
    ],
    frames: [
      {
        before: 'Redateljica je glumcima uskratila sve',
        answer: 'čime',
        after: 'se obično prikriva slab tekst.',
        hint: 'The instrumental of the relative "što" — "with which".',
      },
      {
        before: 'Upravo',
        answer: 'su',
        after: 'stanke ono najbolje u predstavi.',
        hint: 'The enclitic auxiliary in second position — right after the fronted "upravo".',
      },
      {
        before: 'Da je predstava završila ranije,',
        answer: 'bila bi',
        after: 'gotovo savršena.',
        hint: 'The conditional in the main clause of a counterfactual — "would have been".',
      },
    ],
    connectives: ['upravo', 'slabiji je', 'kao da', 'ovako', 'više nego dovoljno', 'preporučujem'],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'both',
        label: 'Judge in both directions — what is best and what is weaker',
        words: ['najbolje', 'slabij', 'najslabij', 'nedostaje'],
      },
      {
        id: 'cond',
        label: 'Use a counterfactual or a "kao da" comparison',
        words: ['da je', 'bila bi', 'bio bi', 'kao da'],
      },
      {
        id: 'verdict',
        label: 'End with a verdict that commits you ("preporučujem")',
        words: ['preporučujem', 'ne preporučujem', 'vrijedi'],
      },
    ],
  },
  {
    id: 'c2-three-styles',
    level: 'C2',
    title: 'One event, three styles',
    prompt:
      'Isti događaj — pucanje vodovodne cijevi, kvar, nesreća bez žrtava — opišite tri puta: administrativnim, novinarskim i književnim stilom. Svaki dio označite i neka se razlikuju rječnikom, rečenicom i onim što smiju reći.',
    promptEn:
      'Describe the same event — a burst water main, a breakdown, an accident without casualties — three times: in administrative, journalistic and literary style. Label each part and make them differ in vocabulary, sentence shape and what they are allowed to say.',
    minWords: 120,
    model:
      'Administrativni stil: Obavještavaju se građani da je zbog puknuća vodovodne cijevi promet Ilicom od Frankopanske do Gundulićeve ulice obustavljen do daljnjega. ' +
      'Radovi se izvode u nadležnosti gradskoga komunalnog poduzeća, a završetak se predviđa u roku od četrdeset osam sati. ' +
      'Novinarski stil: Ilica je od jutros zatvorena. ' +
      'Cijev je pukla oko pet sati, a voda je do dolaska ekipa poplavila tri podruma. ' +
      'Stanari kažu da su kvar prijavljivali još prošle zime. ' +
      'Iz poduzeća poručuju da će ulica biti prohodna do petka. ' +
      'Književni stil: Ulica se probudila s rijekom umjesto pločnika. ' +
      'Voda je tekla polako, gotovo pristojno, zaobilazeći stupove kao da se ispričava, i nosila je sa sobom sve ono što grad inače uspješno skriva: pikule, jedan ključ, cipelu bez para. ' +
      'Ljudi su stajali na rubu i gledali kao da ih se ne tiče, dok im je voda već bila do koljena.',
    modelEn:
      'Administrative style: Citizens are informed that, owing to a burst water main, traffic along Ilica between Frankopanska and Gundulićeva Street is suspended until further notice. ' +
      'The works are being carried out under the authority of the municipal utility company, and completion is expected within forty-eight hours. ' +
      'Journalistic style: Ilica has been closed since this morning. ' +
      'The pipe burst at around five o’clock, and by the time the crews arrived the water had flooded three basements. ' +
      'Residents say they had been reporting the fault since last winter. ' +
      'The company says the street will be passable by Friday. ' +
      'Literary style: The street woke up with a river in place of a pavement. ' +
      'The water flowed slowly, almost politely, skirting the lampposts as if apologising, and carried with it everything the city otherwise hides so well: marbles, a single key, a shoe without its pair. ' +
      'People stood at the edge and watched as if it were none of their business, while the water was already up to their knees.',
    structures: [
      {
        hr: 'Obavještavaju se građani da je ... promet ... obustavljen do daljnjega',
        en: 'Citizens are informed that ... traffic ... is suspended until further notice',
        why: 'The administrative voice: an impersonal reflexive passive ("obavještavaju se") with no one doing the informing, and the frozen genitive formula "do daljnjega".',
      },
      {
        hr: 'Iz poduzeća poručuju da će ulica biti prohodna do petka',
        en: 'The company says the street will be passable by Friday',
        why: 'Journalistic attribution: "iz" + genitive names the source and a bare third-person plural ("poručuju") stands in for the unnamed spokesperson.',
      },
      {
        hr: 'Voda je tekla polako, gotovo pristojno, zaobilazeći stupove kao da se ispričava',
        en: 'The water flowed slowly, almost politely, skirting the lampposts as if apologising',
        why: 'The literary voice: a present gerund ("zaobilazeći") hangs a second action on the first, and "kao da" lets the water have manners without anyone claiming it does.',
      },
    ],
    frames: [
      {
        before: 'Promet je obustavljen do',
        answer: 'daljnjega',
        accept: ['daljnjeg'],
        after: '.',
        hint: 'The frozen genitive in the administrative formula "until further notice".',
      },
      {
        before: 'Radovi se izvode u',
        answer: 'nadležnosti',
        after: 'gradskoga komunalnog poduzeća.',
        hint: 'The locative of "nadležnost" after "u" — the administrative way of saying who is responsible.',
      },
      {
        before: 'Voda je tekla polako,',
        answer: 'zaobilazeći',
        after: 'stupove kao da se ispričava.',
        hint: 'The present gerund of "zaobilaziti" — the literary way to attach a second action to the first.',
      },
    ],
    connectives: [
      'obavještavaju se',
      'do daljnjega',
      'u roku od',
      'poručuju da',
      'kao da',
      'umjesto',
    ],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'admin',
        label: 'An administrative marker ("obavještavaju se", "do daljnjega", "u roku od")',
        words: ['obavještava', 'do daljnjega', 'u roku od', 'nadležnost'],
      },
      {
        id: 'press',
        label: 'A journalistic attribution ("kažu da", "poručuju", "prema")',
        words: ['kažu da', 'poručuju', 'prema ', 'izvor'],
      },
      {
        id: 'lit',
        label: 'A literary device — a gerund ("-ći"), "kao da" or "umjesto"',
        words: ['kao da', 'ći ', 'umjesto'],
      },
    ],
  },
  {
    id: 'c2-counterfactual',
    level: 'C2',
    title: 'A counterfactual essay',
    prompt:
      'Napišite esej koji polazi od pitanja „Što bi bilo da …?“ o jednoj povijesnoj ili jezičnoj odluci. Ne nabrajajte posljedice — argumentirajte ih, dopustite protuargument i završite zaključkom koji nešto tvrdi.',
    promptEn:
      'Write an essay that starts from the question “What if …?” about one historical or linguistic decision. Do not list the consequences — argue them, allow a counter-argument, and end with a conclusion that asserts something.',
    minWords: 120,
    model:
      'Što bi bilo da je Ljudevit Gaj u tridesetim godinama devetnaestoga stoljeća za osnovicu književnoga jezika izabrao kajkavski, govor vlastitoga grada, a ne štokavski, govor većine? ' +
      'Pitanje nije samo igra: ono pokazuje koliko je toga u jeziku odluka, a koliko sudbina. ' +
      'Zagreb bi danas pisao onako kako govori, i „kaj“ ne bi bilo obilježje zavičaja, nego norme. ' +
      'Dalmacija i Slavonija učile bi školski jezik kao nešto tuđe, kao što danas Zagorje uči svoj. ' +
      'Vjerojatno bismo imali manje zajedničkoga sa susjedima, ali i manje nesporazuma oko toga čiji je jezik čiji. ' +
      'Bismo li bili bogatiji? Teško je reći. ' +
      'Jezik koji nitko ne mora učiti brzo se prestaje razvijati, a jezik koji svi moraju učiti nikome nije posve svoj. ' +
      'Gaj je izabrao većinu, i to je bio politički, a ne jezični izbor. ' +
      'Da je izabrao drukčije, ne bismo bili drugi narod; bili bismo isti narod s drugim pravopisom svojih svađa.',
    modelEn:
      'What if Ljudevit Gaj, in the 1830s, had chosen as the basis of the literary language Kajkavian, the speech of his own city, rather than Štokavian, the speech of the majority? ' +
      'The question is not merely a game: it shows how much in a language is decision and how much is fate. ' +
      'Zagreb would today write the way it speaks, and “kaj” would be a mark not of home but of the norm. ' +
      'Dalmatia and Slavonia would learn the school language as something foreign, as Zagorje today learns its own. ' +
      'We would probably have less in common with our neighbours, but also fewer misunderstandings about whose language is whose. ' +
      'Would we be richer? Hard to say. ' +
      'A language nobody has to learn soon stops developing, and a language everybody has to learn is never entirely anyone’s own. ' +
      'Gaj chose the majority, and that was a political, not a linguistic, choice. ' +
      'Had he chosen otherwise, we would not be a different nation; we would be the same nation with a different spelling for its quarrels.',
    structures: [
      {
        hr: 'Što bi bilo da je Ljudevit Gaj ... izabrao kajkavski',
        en: 'What if Ljudevit Gaj had chosen Kajkavian',
        why: 'The counterfactual question shape: impersonal "što bi bilo" + "da" + the perfect — the whole essay hangs on a condition that never happened.',
      },
      {
        hr: 'Dalmacija i Slavonija učile bi školski jezik kao nešto tuđe',
        en: 'Dalmatia and Slavonia would learn the school language as something foreign',
        why: 'Two feminine subjects joined by "i" take a feminine PLURAL participle (učile), and the conditional "bi" sits in second position after the whole subject.',
      },
      {
        hr: 'Da je izabrao drukčije, ne bismo bili drugi narod',
        en: 'Had he chosen otherwise, we would not be a different nation',
        why: 'The negated conditional: "ne" attaches to the auxiliary ("ne bismo"), and the concession it introduces is what keeps the essay from being a fantasy.',
      },
    ],
    frames: [
      {
        before: 'Što bi',
        answer: 'bilo',
        after: 'da je Gaj izabrao kajkavski?',
        hint: 'The neuter participle of "biti" in the impersonal "what would have been".',
      },
      {
        before: 'Dalmacija i Slavonija',
        answer: 'učile bi',
        accept: ['bi učile'],
        after: 'školski jezik kao nešto tuđe.',
        hint: 'Two feminine subjects take a feminine plural participle, and the conditional "bi" follows in second position.',
      },
      {
        before: 'Da je izabrao drukčije, ne',
        answer: 'bismo',
        after: 'bili drugi narod.',
        hint: 'The first-person-plural conditional auxiliary, right after the negation.',
      },
    ],
    connectives: [
      'što bi bilo da',
      'vjerojatno bismo',
      'teško je reći',
      'a ne',
      'bili bismo',
      'oko toga',
    ],
    checklist: [
      { id: 'len', label: 'At least 120 words', minWords: 120 },
      {
        id: 'cond',
        label: 'A counterfactual condition ("da je …", "da nije …")',
        words: ['da je', 'da nije', 'da se'],
      },
      {
        id: 'result',
        label: 'A conditional result ("bismo", "bi")',
        words: ['bismo', 'bi '],
      },
      {
        id: 'question',
        label: 'Pose at least one open question ("bismo li …?")',
        words: ['bismo li', 'bi li', 'je li', '?'],
      },
    ],
  },
];

/** Units at exactly `level`, in curriculum order. */
export function unitsForLevel(level: CefrLevel): WritingUnit[] {
  return WRITING_CURRICULUM.filter((u) => u.level === level);
}
