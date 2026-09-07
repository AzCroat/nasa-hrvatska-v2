// src/data/speakingCurriculum.ts
//
// GUIDED SPEAKING CURRICULUM (2026-09-07).
//
// THE FINDING THIS CLOSES. Writing has had the full teaching ladder since
// 2026-08-18 — `writingCurriculum.ts`, 48 units, model → frames → free
// production graded by the same rubric the exam uses. Speaking had the
// GRADING half and never the TEACHING half, and the grading half turned out
// not to be reachable at all:
//
//   * `SpeakingScreen` carries three open-ended prompt pools (8 + 5 + 5 = 18
//     items), three rendering branches for them, and the speaking coach.
//     NO LAUNCH PATH EVER PUTS AN OPEN-ENDED ITEM INTO ITS ITEM LIST. Every
//     route — the Practice-tab launcher, the daily-session branch, the learn
//     path branch, the Me-tab goal shortcut — feeds `acquisitionPool` VOCAB
//     ROWS, so `sw[2]` is a gloss, never one of the three type strings the
//     branches switch on. The commit that added the prompts (d51e9de1,
//     2026-04-25) touched two component files and no launcher; the path has
//     been dead since the day it was written.
//   * So `requestSpeakingCoach` is never called from practice, and
//     `recordMasteryEvent({ skill: 'speaking' })` fires ONLY from the Level
//     Check and the checkpoints — assessments. The 2026-08-18 audit finding
//     that daily speech "fed nothing back to the mastery ledger" was answered
//     by writing `speakingCoach.ts`, which is correct and tested, and by
//     wiring it into a screen state nothing produces. That is the
//     component-test / wiring-test split this repo already has a rule about:
//     `speakingCoach.test.js` proves the library records mastery, and nothing
//     proved a learner can reach the library.
//   * The 18 dead prompts are also unlevelled — one pool for A1 through C2, so
//     the path, had it worked, would have asked a beginner "Što misliš o
//     klimatskim promjenama?". The levelling is the symptom; the dead wiring
//     is the defect.
//
// This file is the teaching side, and `GuidedSpeakingScreen` is a REACHABLE
// entry point to the coach. Three stages, each using a mechanism that already
// exists in the app:
//
//   Stage 1 LISTEN   — hear a native-standard spoken model (TTS) and read what
//                      to steal from it. No mic needed.
//   Stage 2 REHEARSE — say the unit's load-bearing phrases one at a time.
//                      Browser SpeechRecognition when available, self-confirm
//                      otherwise. This stage TEACHES; it never blocks.
//   Stage 3 SPEAK    — free spoken production against a visible checklist. The
//                      transcript comes from the browser recognizer (ZERO AI
//                      cost, no STT charge) or from typing when the mic is
//                      unavailable, and ONE /api/speaking-coach call grades it
//                      on the exam's four rubric criteria — the same shape and
//                      the same cost profile as Guided Writing's single
//                      /api/correct call.
//
// WHY THE MODELS ARE SPOKEN CROATIAN, NOT WRITTEN CROATIAN. A model a learner
// is asked to imitate ALOUD has to be sayable: short clauses, the discourse
// particles a native actually uses to buy a moment (`pa`, `znaš`, `evo`,
// `zapravo`), and questions back to the other person. Reading a written essay
// aloud teaches the wrong register, which is precisely the gap the CEFR
// descriptors from B1 up are about.
//
// Croatian follows the content-authoring standard (owner directive
// 2026-07-16): standard štokavski, full diacritics, correct case government,
// second-position clitics, `sa` only before s/š/z/ž, V-form politeness in
// formal registers, the greeting `bog` (2026-07 owner decision). This file is
// in scripts/lintCroatianText.mjs TARGETS — and `usefulPhrases` was added to
// the lint's ARRAY_FIELD_RE in the same change, because a bare Croatian array
// is exactly the shape that made `connectives` invisible in the writing
// curriculum for eighteen days. Mutation-verified, both directions.
//
// Every level A1–C2 has ≥8 units (speakingCurriculum.test.ts pins it), with a
// genre spread rather than eight variations on one register: A1 survival and
// self, A2 narrative and transaction, B1 opinion and account, B2 argument and
// negotiation, C1 structured reasoning, C2 nuance and register play.

import type { CefrLevel } from '../lib/cefr.js';

export interface SpeakingStructure {
  /** The pattern as it appears in the model (verbatim substring). */
  hr: string;
  en: string;
  /** Why it matters — the teaching point, in plain words. */
  why: string;
}

export interface RehearsePhrase {
  /** Said aloud in stage 2. Kept short enough to say in one breath. */
  hr: string;
  en: string;
  /** One line on what saying it drills. */
  why: string;
}

export interface SpeakingChecklistItem {
  id: string;
  /** Shown to the learner while they speak. */
  label: string;
  /** Satisfied when the transcript contains ANY of these (case-insensitive). */
  words?: string[];
  /** Satisfied at this spoken word count. */
  minWords?: number;
}

export interface SpeakingUnit {
  id: string;
  level: CefrLevel;
  title: string;
  /** Task instruction, in Croatian. */
  prompt: string;
  promptEn: string;
  /** Spoken word floor before the answer can be sent for coaching. */
  minWords: number;
  /** The spoken model heard and read in stage 1. */
  model: string;
  modelEn: string;
  structures: SpeakingStructure[];
  rehearse: RehearsePhrase[];
  /** Phrase panel shown during stage 3 — read, not tapped into a text box. */
  usefulPhrases: string[];
  checklist: SpeakingChecklistItem[];
}

export const SPEAKING_CURRICULUM: SpeakingUnit[] = [
  // ── A1 — survival and self ──────────────────────────────────────────────────
  {
    id: 'a1-introduce',
    level: 'A1',
    title: 'Introduce yourself',
    prompt: 'Predstavi se naglas: kako se zoveš, odakle si, gdje živiš i zašto učiš hrvatski.',
    promptEn:
      'Introduce yourself out loud: your name, where you are from, where you live and why you are learning Croatian.',
    minWords: 15,
    model:
      'Bog! Zovem se Ivana. Dolazim iz Kanade, iz Toronta. ' +
      'Moja je obitelj iz Hrvatske, iz Splita. ' +
      'Živim u Torontu i radim u bolnici. ' +
      'Učim hrvatski jer želim razgovarati s bakom na hrvatskom. A ti, odakle si?',
    modelEn:
      'Hi! My name is Ivana. I come from Canada, from Toronto. ' +
      'My family is from Croatia, from Split. ' +
      'I live in Toronto and I work in a hospital. ' +
      'I am learning Croatian because I want to talk with my grandma in Croatian. And you, where are you from?',
    structures: [
      {
        hr: 'Zovem se Ivana.',
        en: 'My name is Ivana.',
        why: 'The reflexive verb "zvati se" — the normal way to say your name. The little word "se" sits right after the verb here.',
      },
      {
        hr: 'Dolazim iz Kanade',
        en: 'I come from Canada',
        why: '"iz" always takes the genitive: Kanada becomes iz Kanade, Split becomes iz Splita.',
      },
      {
        hr: 'A ti, odakle si?',
        en: 'And you, where are you from?',
        why: 'Hand the question back. A conversation is a rally, not a speech — natives do this constantly.',
      },
    ],
    rehearse: [
      {
        hr: 'Zovem se Ivana i dolazim iz Kanade.',
        en: 'My name is Ivana and I come from Canada.',
        why: 'Two clauses joined with "i" — the simplest way to say more than one thing.',
      },
      {
        hr: 'Živim u Torontu i radim u bolnici.',
        en: 'I live in Toronto and I work in a hospital.',
        why: '"u" + locative twice: Toronto → u Torontu, bolnica → u bolnici.',
      },
      {
        hr: 'Učim hrvatski jer želim razgovarati s bakom.',
        en: 'I am learning Croatian because I want to talk with my grandma.',
        why: '"jer" gives your reason; "s" + instrumental for who you talk with.',
      },
    ],
    usefulPhrases: ['Bog!', 'Zovem se…', 'Dolazim iz…', 'Živim u…', 'Drago mi je.', 'A ti?'],
    checklist: [
      { id: 'name', label: 'Say your name with "zovem se"', words: ['zovem se'] },
      { id: 'origin', label: 'Say where you are from with "iz"', words: ['iz '] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-cafe',
    level: 'A1',
    title: 'Order in a café',
    prompt: 'Naruči nešto u kafiću: pozdravi, reci što želiš i pitaj koliko košta.',
    promptEn:
      'Order something in a café: greet the server, say what you want and ask how much it costs.',
    minWords: 15,
    model:
      'Dobar dan! Molim vas jednu kavu s mlijekom. ' +
      'Imate li kolače? Onda i jedan komad torte, molim. ' +
      'Koliko to košta? Evo, izvolite. Hvala lijepa!',
    modelEn:
      'Good day! One coffee with milk, please. ' +
      'Do you have cakes? Then a slice of cake as well, please. ' +
      'How much is that? Here you go. Thank you very much!',
    structures: [
      {
        hr: 'Molim vas jednu kavu',
        en: 'One coffee, please',
        why: 'What you order goes in the accusative: kava → jednu kavu. "Molim vas" is the polite frame you can put around anything.',
      },
      {
        hr: 's mlijekom',
        en: 'with milk',
        why: '"s" + instrumental. It stays "s" here — only before s, š, z and ž does it become "sa".',
      },
      {
        hr: 'Imate li kolače?',
        en: 'Do you have cakes?',
        why: 'A yes/no question: verb, then "li". Much more natural than raising your voice at the end.',
      },
    ],
    rehearse: [
      {
        hr: 'Molim vas jednu kavu s mlijekom.',
        en: 'One coffee with milk, please.',
        why: 'The whole order in one breath — accusative for the drink, instrumental for what is in it.',
      },
      {
        hr: 'Imate li nešto bez šećera?',
        en: 'Do you have anything without sugar?',
        why: '"bez" + genitive: šećer → bez šećera.',
      },
      {
        hr: 'Koliko to košta?',
        en: 'How much does that cost?',
        why: 'The question you will use in every shop in Croatia.',
      },
    ],
    usefulPhrases: [
      'Dobar dan!',
      'Molim vas…',
      'Imate li…?',
      'Koliko košta?',
      'Izvolite.',
      'Hvala lijepa!',
    ],
    checklist: [
      { id: 'polite', label: 'Use "molim vas"', words: ['molim vas', 'molim'] },
      { id: 'price', label: 'Ask the price', words: ['koliko'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-family',
    level: 'A1',
    title: 'Talk about your family',
    prompt: 'Ispričaj tko je u tvojoj obitelji: koliko ih je, kako se zovu i što rade.',
    promptEn:
      'Say who is in your family: how many there are, what they are called and what they do.',
    minWords: 15,
    model:
      'U mojoj obitelji ima nas četvero. ' +
      'Imam muža i dvoje djece, sina i kćer. ' +
      'Muž se zove Petar i radi kao učitelj. ' +
      'Sin ima deset godina, a kći ima sedam. ' +
      'Moji roditelji žive blizu nas.',
    modelEn:
      'There are four of us in my family. ' +
      'I have a husband and two children, a son and a daughter. ' +
      'My husband is called Petar and he works as a teacher. ' +
      'My son is ten years old, and my daughter is seven. ' +
      'My parents live near us.',
    structures: [
      {
        hr: 'Imam muža i dvoje djece',
        en: 'I have a husband and two children',
        why: '"imati" takes the accusative: muž → muža. Croatian counts mixed groups of children with "dvoje".',
      },
      {
        hr: 'Muž se zove Petar',
        en: 'My husband is called Petar',
        why: 'The clitic "se" goes in second position — right after the first word of the sentence.',
      },
      {
        hr: 'Sin ima deset godina',
        en: 'My son is ten years old',
        why: 'Croatian says you HAVE years, not that you ARE them. After numbers from five up: genitive plural, godina.',
      },
    ],
    rehearse: [
      {
        hr: 'U mojoj obitelji ima nas četvero.',
        en: 'There are four of us in my family.',
        why: '"u" + locative for the group, and the collective number natives actually use for people.',
      },
      {
        hr: 'Brat se zove Marko i radi kao kuhar.',
        en: 'My brother is called Marko and he works as a cook.',
        why: 'Second-position "se" again, then "kao" + nominative for a job.',
      },
      {
        hr: 'Moji roditelji žive blizu nas.',
        en: 'My parents live near us.',
        why: '"blizu" + genitive: mi → nas.',
      },
    ],
    usefulPhrases: ['Imam…', 'Nemam…', 'zove se…', 'radi kao…', 'ima … godina', 'stariji od mene'],
    checklist: [
      { id: 'have', label: 'Use "imam" to say who you have', words: ['imam'] },
      { id: 'job', label: 'Say what someone does', words: ['radi', 'radim', 'kao'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-day',
    level: 'A1',
    title: 'Your daily routine',
    prompt: 'Opiši svoj običan dan: kada ustaješ, što radiš danju i što radiš navečer.',
    promptEn:
      'Describe an ordinary day: when you get up, what you do during the day and in the evening.',
    minWords: 15,
    model:
      'Ustajem u sedam sati. ' +
      'Doručkujem kruh i pijem kavu. ' +
      'Na posao idem autobusom i radim od devet do pet. ' +
      'Poslije posla kuham večeru. ' +
      'Navečer čitam ili gledam televiziju, a spavam oko jedanaest.',
    modelEn:
      'I get up at seven. ' +
      'I have bread for breakfast and drink coffee. ' +
      'I go to work by bus and I work from nine to five. ' +
      'After work I cook dinner. ' +
      'In the evening I read or watch television, and I go to sleep around eleven.',
    structures: [
      {
        hr: 'Ustajem u sedam sati',
        en: 'I get up at seven',
        why: '"u" + a clock time. After numbers from five up, the noun goes in the genitive plural: sati.',
      },
      {
        hr: 'idem autobusom',
        en: 'I go by bus',
        why: 'How you travel is the instrumental with no preposition at all: autobus → autobusom.',
      },
      {
        hr: 'Poslije posla',
        en: 'After work',
        why: '"poslije" + genitive: posao → posla. Note the "o" disappears.',
      },
    ],
    rehearse: [
      {
        hr: 'Ustajem u sedam i pijem kavu.',
        en: 'I get up at seven and drink coffee.',
        why: 'Clock time plus a present-tense verb — the backbone of any routine.',
      },
      {
        hr: 'Na posao idem autobusom.',
        en: 'I go to work by bus.',
        why: '"na" + accusative for where you are heading, instrumental for how.',
      },
      {
        hr: 'Navečer gledam televiziju ili čitam.',
        en: 'In the evening I watch television or read.',
        why: 'Accusative object, then a second option with "ili".',
      },
    ],
    usefulPhrases: ['ujutro', 'poslijepodne', 'navečer', 'obično', 'ponekad', 'svaki dan'],
    checklist: [
      { id: 'time', label: 'Say a time with "u"', words: ['u sedam', 'u osam', 'u devet', 'u '] },
      { id: 'evening', label: 'Say what you do in the evening', words: ['navečer'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-town',
    level: 'A1',
    title: 'Describe where you live',
    prompt: 'Opiši mjesto u kojem živiš: je li veliko ili malo, što ima i što ti se sviđa.',
    promptEn:
      'Describe the place where you live: is it big or small, what is there and what you like about it.',
    minWords: 15,
    model:
      'Živim u malom gradu blizu mora. ' +
      'Grad nije velik, ali je jako lijep. ' +
      'U centru je stara crkva i velika tržnica. ' +
      'Ima nekoliko kafića i jedna knjižnica. ' +
      'Najviše mi se sviđa što je more blizu.',
    modelEn:
      'I live in a small town near the sea. ' +
      'The town is not big, but it is very pretty. ' +
      'In the centre there is an old church and a big market. ' +
      'There are a few cafés and one library. ' +
      'What I like most is that the sea is close.',
    structures: [
      {
        hr: 'u malom gradu',
        en: 'in a small town',
        why: 'After "u" the adjective changes too, not just the noun: mali grad → u malom gradu.',
      },
      {
        hr: 'blizu mora',
        en: 'near the sea',
        why: '"blizu" + genitive: more → mora.',
      },
      {
        hr: 'Najviše mi se sviđa',
        en: 'What I like most',
        why: 'Croatian says the thing pleases YOU: "mi" is the dative. The two little words stay together in second position.',
      },
    ],
    rehearse: [
      {
        hr: 'Živim u malom gradu blizu mora.',
        en: 'I live in a small town near the sea.',
        why: 'Locative after "u", genitive after "blizu" — two cases in one short sentence.',
      },
      {
        hr: 'Grad nije velik, ali je jako lijep.',
        en: 'The town is not big, but it is very pretty.',
        why: 'Negation with "nije", then a contrast with "ali".',
      },
      {
        hr: 'U centru je stara crkva.',
        en: 'In the centre there is an old church.',
        why: 'Croatian has no word for "there is" — the verb "je" does the work.',
      },
    ],
    usefulPhrases: ['blizu', 'daleko od', 'u centru', 'nekoliko', 'najviše mi se sviđa', 'ima'],
    checklist: [
      { id: 'place', label: 'Say where you live with "u"', words: ['živim u', 'u '] },
      { id: 'like', label: 'Say what you like', words: ['sviđa', 'volim'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-directions',
    level: 'A1',
    title: 'Ask for directions',
    prompt: 'Zaustavi nekoga na ulici i pitaj za put do kolodvora. Budi pristojan.',
    promptEn: 'Stop someone in the street and ask the way to the station. Be polite.',
    minWords: 15,
    model:
      'Oprostite, smijem li pitati? ' +
      'Tražim autobusni kolodvor. Znate li gdje je? ' +
      'Je li daleko odavde? ' +
      'Dakle, idem ravno pa skrenem lijevo kod crkve. ' +
      'Hvala vam puno, lijep dan!',
    modelEn:
      'Excuse me, may I ask you something? ' +
      'I am looking for the bus station. Do you know where it is? ' +
      'Is it far from here? ' +
      'So, I go straight on and then turn left at the church. ' +
      'Thank you very much, have a nice day!',
    structures: [
      {
        hr: 'Oprostite, smijem li pitati?',
        en: 'Excuse me, may I ask?',
        why: 'Opening a stranger politely. "Oprostite" is the V-form — use it with anyone you do not know.',
      },
      {
        hr: 'Znate li gdje je?',
        en: 'Do you know where it is?',
        why: 'A question inside a question. The "li" attaches to the first verb, then "gdje" starts the second part.',
      },
      {
        hr: 'skrenem lijevo kod crkve',
        en: 'I turn left at the church',
        why: '"kod" + genitive for a landmark: crkva → kod crkve.',
      },
    ],
    rehearse: [
      {
        hr: 'Oprostite, tražim autobusni kolodvor.',
        en: 'Excuse me, I am looking for the bus station.',
        why: '"tražiti" takes the accusative — and the adjective moves with the noun.',
      },
      {
        hr: 'Je li daleko odavde?',
        en: 'Is it far from here?',
        why: 'The full question form "je li" — no verb to repeat, so it opens the sentence.',
      },
      {
        hr: 'Idem ravno pa skrenem lijevo.',
        en: 'I go straight on and then turn left.',
        why: 'Repeating directions back is how you check you understood.',
      },
    ],
    usefulPhrases: ['Oprostite…', 'Tražim…', 'ravno', 'lijevo', 'desno', 'Je li daleko?'],
    checklist: [
      { id: 'polite', label: 'Open politely with "oprostite"', words: ['oprostite'] },
      { id: 'ask', label: 'Ask a real question', words: ['li', 'gdje'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-market',
    level: 'A1',
    title: 'Buy food at the market',
    prompt: 'Kupi voće i povrće na tržnici: pitaj što imaju, reci koliko želiš i plati.',
    promptEn:
      'Buy fruit and vegetables at the market: ask what they have, say how much you want and pay.',
    minWords: 15,
    model:
      'Dobro jutro! Imate li rajčice danas? ' +
      'Molim vas kilogram rajčica i pola kile jabuka. ' +
      'Jesu li slatke? ' +
      'Dobro, uzet ću i malo sira. ' +
      'Koliko je sve zajedno? Izvolite, hvala!',
    modelEn:
      'Good morning! Do you have tomatoes today? ' +
      'A kilo of tomatoes and half a kilo of apples, please. ' +
      'Are they sweet? ' +
      'Good, I will take a little cheese as well. ' +
      'How much is it altogether? Here you go, thank you!',
    structures: [
      {
        hr: 'kilogram rajčica',
        en: 'a kilo of tomatoes',
        why: 'A quantity is followed by the genitive plural: rajčice → kilogram rajčica. This is the partitive genitive.',
      },
      {
        hr: 'malo sira',
        en: 'a little cheese',
        why: 'Same rule with an uncountable thing: sir → malo sira.',
      },
      {
        hr: 'uzet ću',
        en: 'I will take',
        why: 'The future: the infinitive loses its final "i" and the little "ću" follows.',
      },
    ],
    rehearse: [
      {
        hr: 'Molim vas kilogram jabuka.',
        en: 'A kilo of apples, please.',
        why: 'The partitive genitive plural — the commonest mistake English speakers make at a market.',
      },
      {
        hr: 'Imate li nešto jeftinije?',
        en: 'Do you have anything cheaper?',
        why: 'A comparative after "nešto" — polite, and useful everywhere.',
      },
      {
        hr: 'Koliko je sve zajedno?',
        en: 'How much is it altogether?',
        why: 'The sentence that ends every market transaction.',
      },
    ],
    usefulPhrases: ['kilogram', 'pola kile', 'malo', 'svježe', 'zajedno', 'Uzet ću…'],
    checklist: [
      { id: 'quantity', label: 'Ask for a quantity', words: ['kilogram', 'kile', 'malo', 'pola'] },
      { id: 'pay', label: 'Ask what it comes to', words: ['koliko'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },
  {
    id: 'a1-plans',
    level: 'A1',
    title: 'Arrange to meet a friend',
    prompt: 'Nazovi prijatelja i dogovori kad ćete se naći: predloži dan, vrijeme i mjesto.',
    promptEn: 'Call a friend and arrange to meet: suggest a day, a time and a place.',
    minWords: 15,
    model:
      'Bog, Ana! Kako si? ' +
      'Jesi li slobodna u subotu? ' +
      'Možemo se naći na kavi. ' +
      'Odgovara li ti u šest, kod trga? ' +
      'Super, onda se vidimo u subotu. Bog!',
    modelEn:
      'Hi, Ana! How are you? ' +
      'Are you free on Saturday? ' +
      'We could meet for a coffee. ' +
      'Does six at the square suit you? ' +
      'Great, see you on Saturday then. Bye!',
    structures: [
      {
        hr: 'Jesi li slobodna u subotu?',
        en: 'Are you free on Saturday?',
        why: 'Days of the week take "u" + accusative: subota → u subotu. The adjective agrees with who you are speaking to.',
      },
      {
        hr: 'Možemo se naći',
        en: 'We could meet',
        why: 'A soft suggestion. "se" stays right after the first word of the clause.',
      },
      {
        hr: 'Odgovara li ti',
        en: 'Does it suit you',
        why: 'Croatian says it suits TO you — "ti" is the dative. This is the polite way to propose a time.',
      },
    ],
    rehearse: [
      {
        hr: 'Jesi li slobodan u subotu?',
        en: 'Are you free on Saturday?',
        why: 'Question word order plus "u" + accusative for the day.',
      },
      {
        hr: 'Možemo se naći u šest kod trga.',
        en: 'We could meet at six by the square.',
        why: 'Time with "u", place with "kod" + genitive.',
      },
      {
        hr: 'Onda se vidimo u subotu.',
        en: 'See you on Saturday then.',
        why: 'How Croatians actually end a plan — present tense doing the work of a future.',
      },
    ],
    usefulPhrases: ['Jesi li slobodan/slobodna?', 'Možemo…', 'Odgovara mi.', 'Vidimo se!', 'Bog!'],
    checklist: [
      { id: 'day', label: 'Suggest a day', words: ['subotu', 'nedjelju', 'petak', 'u '] },
      { id: 'meet', label: 'Suggest meeting', words: ['naći', 'vidimo', 'možemo'] },
      { id: 'len', label: 'Speak at least 15 words', minWords: 15 },
    ],
  },

  // ── A2 — narrative and transaction ──────────────────────────────────────────
  {
    id: 'a2-weekend',
    level: 'A2',
    title: 'Tell someone about your weekend',
    prompt: 'Ispričaj što si radio ili radila prošli vikend. Reci gdje si bio i kako je bilo.',
    promptEn: 'Tell someone what you did last weekend. Say where you were and what it was like.',
    minWords: 20,
    model:
      'Prošli sam vikend bio u Zagrebu kod prijatelja. ' +
      'Putovali smo vlakom u petak navečer. ' +
      'U subotu smo šetali gornjim gradom i pili kavu na trgu. ' +
      'Navečer smo išli na koncert, ali je bio prepun pa smo brzo otišli. ' +
      'U nedjelju sam se vratio kući. Bilo je super, samo prekratko.',
    modelEn:
      'Last weekend I was in Zagreb at a friend’s place. ' +
      'We travelled by train on Friday evening. ' +
      'On Saturday we walked around the upper town and had coffee on the square. ' +
      'In the evening we went to a concert, but it was packed so we left quickly. ' +
      'On Sunday I came home. It was great, just too short.',
    structures: [
      {
        hr: 'Prošli sam vikend bio',
        en: 'Last weekend I was',
        why: 'The past tense is two words, and the little one ("sam") goes in SECOND position — after the first word, not after the whole phrase.',
      },
      {
        hr: 'Putovali smo vlakom',
        en: 'We travelled by train',
        why: 'How you travel is the instrumental with no preposition: vlak → vlakom.',
      },
      {
        hr: 'bio prepun pa smo brzo otišli',
        en: 'it was packed so we left quickly',
        why: '"pa" links a consequence — the everyday spoken way to say "and so".',
      },
    ],
    rehearse: [
      {
        hr: 'Prošli sam vikend bio kod prijatelja.',
        en: 'Last weekend I was at a friend’s place.',
        why: 'Second-position "sam", then "kod" + genitive for whose place.',
      },
      {
        hr: 'U subotu smo šetali i pili kavu.',
        en: 'On Saturday we walked and had coffee.',
        why: 'Two past verbs sharing one auxiliary — say it as one flowing phrase.',
      },
      {
        hr: 'Bilo je super, samo prekratko.',
        en: 'It was great, just too short.',
        why: 'A verdict on the whole weekend in four words. Natives close a story like this.',
      },
    ],
    usefulPhrases: ['prošli vikend', 'najprije', 'onda', 'poslije toga', 'na kraju', 'Bilo je…'],
    checklist: [
      { id: 'past', label: 'Use the past tense', words: ['sam', 'smo', 'bio', 'bila', 'bilo'] },
      { id: 'verdict', label: 'Say what it was like', words: ['bilo je', 'super', 'zanimljivo'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-doctor',
    level: 'A2',
    title: 'At the doctor',
    prompt: 'Objasni liječniku što te boli, koliko dugo traje i pitaj što da radiš.',
    promptEn:
      'Explain to the doctor what hurts, how long it has lasted, and ask what you should do.',
    minWords: 20,
    model:
      'Dobar dan, doktore. Boli me grlo već tri dana. ' +
      'Imam temperaturu i kašljem, osobito navečer. ' +
      'Uzimam čaj i tablete protiv bolova, ali mi nije bolje. ' +
      'Trebam li antibiotik ili je dovoljno da odmaram? ' +
      'Imate li nešto što mogu kupiti u ljekarni bez recepta?',
    modelEn:
      'Good day, doctor. My throat has been hurting for three days. ' +
      'I have a temperature and I cough, especially in the evening. ' +
      'I am drinking tea and taking painkillers, but I am not getting better. ' +
      'Do I need an antibiotic, or is resting enough? ' +
      'Do you have anything I can buy at the pharmacy without a prescription?',
    structures: [
      {
        hr: 'Boli me grlo',
        en: 'My throat hurts',
        why: 'Croatian says the throat hurts ME. The part that hurts is the subject; you are the object.',
      },
      {
        hr: 'već tri dana',
        en: 'for three days now',
        why: '"već" plus a length of time — the way to say something has been going on and still is.',
      },
      {
        hr: 'mi nije bolje',
        en: 'I am not getting better',
        why: 'Again the dative: better TO me. The two little words sit together.',
      },
    ],
    rehearse: [
      {
        hr: 'Boli me glava već dva dana.',
        en: 'I have had a headache for two days.',
        why: 'The hurt-me pattern with a length of time — the sentence every doctor’s visit starts with.',
      },
      {
        hr: 'Imam temperaturu i kašljem.',
        en: 'I have a temperature and I cough.',
        why: 'Accusative object, then a plain present-tense verb.',
      },
      {
        hr: 'Trebam li antibiotik?',
        en: 'Do I need an antibiotic?',
        why: 'Asking about your own treatment politely, with "li".',
      },
    ],
    usefulPhrases: ['Boli me…', 'već … dana', 'osobito', 'nije mi bolje', 'ljekarna', 'recept'],
    checklist: [
      { id: 'symptom', label: 'Say what hurts with "boli me"', words: ['boli'] },
      { id: 'duration', label: 'Say how long', words: ['već', 'dana', 'tjedan'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-person',
    level: 'A2',
    title: 'Describe a person you know',
    prompt: 'Opiši nekoga koga dobro poznaješ: kako izgleda, kakav je i zašto ti je važan.',
    promptEn:
      'Describe someone you know well: what they look like, what they are like and why they matter to you.',
    minWords: 20,
    model:
      'Opisat ću vam svoju najbolju prijateljicu. ' +
      'Zove se Marija, visoka je i ima kratku smeđu kosu. ' +
      'Uvijek je nasmijana i jako je strpljiva. ' +
      'Poznajemo se od djetinjstva, išle smo zajedno u školu. ' +
      'Važna mi je jer joj mogu reći sve, i uvijek me sasluša.',
    modelEn:
      'I will describe my best friend to you. ' +
      'Her name is Marija, she is tall and has short brown hair. ' +
      'She is always smiling and very patient. ' +
      'We have known each other since childhood, we went to school together. ' +
      'She matters to me because I can tell her everything, and she always listens to me.',
    structures: [
      {
        hr: 'ima kratku smeđu kosu',
        en: 'she has short brown hair',
        why: 'Both adjectives change with the noun into the accusative: kratka smeđa kosa → kratku smeđu kosu.',
      },
      {
        hr: 'Poznajemo se od djetinjstva',
        en: 'We have known each other since childhood',
        why: '"od" + genitive for a starting point, and "se" here means "each other".',
      },
      {
        hr: 'Važna mi je jer joj mogu reći sve',
        en: 'She matters to me because I can tell her everything',
        why: 'Two datives in one sentence: important TO me, tell TO her.',
      },
    ],
    rehearse: [
      {
        hr: 'Visoka je i ima kratku smeđu kosu.',
        en: 'She is tall and has short brown hair.',
        why: 'Adjective agreement twice — once with the subject, once inside the object.',
      },
      {
        hr: 'Uvijek je nasmijana i vrlo strpljiva.',
        en: 'She is always smiling and very patient.',
        why: 'Character adjectives agreeing with a feminine subject.',
      },
      {
        hr: 'Poznajemo se od djetinjstva.',
        en: 'We have known each other since childhood.',
        why: 'Reciprocal "se" plus "od" + genitive.',
      },
    ],
    usefulPhrases: ['izgleda kao', 'ima … kosu', 'karakterom je', 'poznajemo se', 'zato što'],
    checklist: [
      { id: 'looks', label: 'Describe how they look', words: ['visok', 'visoka', 'kosu', 'oči'] },
      { id: 'why', label: 'Say why they matter', words: ['jer', 'zato'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-shop-problem',
    level: 'A2',
    title: 'Return something to a shop',
    prompt:
      'Vrati nešto u trgovinu: objasni što nije u redu, reci kad si to kupio i pitaj što se može učiniti.',
    promptEn:
      'Return something to a shop: explain what is wrong, say when you bought it and ask what can be done.',
    minWords: 20,
    model:
      'Dobar dan. Kupio sam ovu majicu prošli tjedan kod vas. ' +
      'Nažalost, prevelika mi je i boja nije kao na slici. ' +
      'Evo računa. Mogu li je zamijeniti za manju? ' +
      'Ako nemate manju, može li povrat novca? ' +
      'Hvala vam na pomoći.',
    modelEn:
      'Good day. I bought this T-shirt here last week. ' +
      'Unfortunately it is too big for me and the colour is not like in the picture. ' +
      'Here is the receipt. Could I exchange it for a smaller one? ' +
      'If you do not have a smaller one, is a refund possible? ' +
      'Thank you for your help.',
    structures: [
      {
        hr: 'prevelika mi je',
        en: 'it is too big for me',
        why: 'The prefix "pre-" means "too". And again the dative: too big TO me.',
      },
      {
        hr: 'Mogu li je zamijeniti',
        en: 'Could I exchange it',
        why: '"je" here is "it" (the T-shirt, feminine) in the accusative, sitting in second position.',
      },
      {
        hr: 'Hvala vam na pomoći',
        en: 'Thank you for your help',
        why: '"hvala na" always takes the locative: pomoć → na pomoći. This is a fixed pattern worth memorising.',
      },
    ],
    rehearse: [
      {
        hr: 'Kupio sam ovu majicu prošli tjedan.',
        en: 'I bought this T-shirt last week.',
        why: 'Past tense with a demonstrative in the accusative: ova majica → ovu majicu.',
      },
      {
        hr: 'Mogu li je zamijeniti za manju?',
        en: 'Could I exchange it for a smaller one?',
        why: '"za" + accusative, and a comparative adjective agreeing with a feminine noun.',
      },
      {
        hr: 'Hvala vam na pomoći.',
        en: 'Thank you for your help.',
        why: 'The locative after "na" in a fixed thank-you. Say it until it is automatic.',
      },
    ],
    usefulPhrases: ['Nažalost…', 'Evo računa.', 'zamijeniti', 'povrat novca', 'Može li…?'],
    checklist: [
      {
        id: 'problem',
        label: 'Say what is wrong',
        words: ['prevelika', 'premala', 'ne radi', 'nije'],
      },
      { id: 'request', label: 'Ask for a solution', words: ['mogu li', 'može li', 'zamijeniti'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-job',
    level: 'A2',
    title: 'Talk about your work',
    prompt: 'Ispričaj čime se baviš: gdje radiš, što točno radiš i što ti se sviđa ili ne sviđa.',
    promptEn:
      'Talk about what you do: where you work, what exactly you do and what you like or dislike about it.',
    minWords: 20,
    model:
      'Radim kao medicinska sestra u velikoj bolnici. ' +
      'Počinjem u sedam ujutro i smjena traje dvanaest sati. ' +
      'Najviše volim rad s pacijentima jer svaki dan naučim nešto novo. ' +
      'Ne volim papirologiju, ali to ide uz posao. ' +
      'Kolege su odlične i zato ostajem ovdje.',
    modelEn:
      'I work as a nurse in a big hospital. ' +
      'I start at seven in the morning and the shift lasts twelve hours. ' +
      'What I like most is working with patients, because every day I learn something new. ' +
      'I do not like the paperwork, but that comes with the job. ' +
      'My colleagues are excellent and that is why I stay here.',
    structures: [
      {
        hr: 'Radim kao medicinska sestra',
        en: 'I work as a nurse',
        why: '"kao" keeps the nominative — the job name does not change form here.',
      },
      {
        hr: 'rad s pacijentima',
        en: 'working with patients',
        why: '"s" + instrumental plural: pacijenti → s pacijentima.',
      },
      {
        hr: 'to ide uz posao',
        en: 'that comes with the job',
        why: 'A real spoken idiom. "uz" + accusative — it says "it is part of the deal" without complaining.',
      },
    ],
    rehearse: [
      {
        hr: 'Radim kao učitelj u osnovnoj školi.',
        en: 'I work as a teacher in a primary school.',
        why: '"kao" + nominative for the job, "u" + locative for the place.',
      },
      {
        hr: 'Smjena traje dvanaest sati.',
        en: 'The shift lasts twelve hours.',
        why: 'After numbers from five up, the genitive plural: sati.',
      },
      {
        hr: 'Najviše volim rad s ljudima.',
        en: 'What I like most is working with people.',
        why: 'Instrumental plural after "s" — ljudi → s ljudima.',
      },
    ],
    usefulPhrases: ['Radim kao…', 'Bavim se…', 'smjena', 'kolege', 'plaća', 'ide uz posao'],
    checklist: [
      { id: 'role', label: 'Say your role with "kao"', words: ['kao', 'bavim se', 'radim'] },
      {
        id: 'opinion',
        label: 'Say what you like or dislike',
        words: ['volim', 'ne volim', 'sviđa'],
      },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-invitation',
    level: 'A2',
    title: 'Turn down an invitation kindly',
    prompt:
      'Prijatelj te zove na rođendan, ali ne možeš doći. Zahvali, objasni zašto i predloži nešto drugo.',
    promptEn:
      'A friend invites you to a birthday party but you cannot come. Say thank you, explain why and suggest something else.',
    minWords: 20,
    model:
      'Hvala ti na pozivu, baš mi je drago što si me zvao. ' +
      'Nažalost, ne mogu doći u subotu jer radim cijeli vikend. ' +
      'Stvarno mi je žao, jako bih volio doći. ' +
      'Možemo li se naći sljedeći tjedan? ' +
      'Čestitam ti unaprijed i uživaj!',
    modelEn:
      'Thank you for the invitation, I am really glad you asked me. ' +
      'Unfortunately I cannot come on Saturday because I am working all weekend. ' +
      'I am really sorry, I would very much like to come. ' +
      'Could we meet next week instead? ' +
      'Congratulations in advance, and enjoy!',
    structures: [
      {
        hr: 'Hvala ti na pozivu',
        en: 'Thank you for the invitation',
        why: '"hvala na" + locative again: poziv → na pozivu. Same pattern as "hvala na pomoći".',
      },
      {
        hr: 'jako bih volio doći',
        en: 'I would very much like to come',
        why: 'The conditional softens a refusal — it says the wish was real even though the answer is no.',
      },
      {
        hr: 'Možemo li se naći sljedeći tjedan?',
        en: 'Could we meet next week?',
        why: 'Never refuse without offering an alternative. This is the sentence that keeps the friendship.',
      },
    ],
    rehearse: [
      {
        hr: 'Hvala ti na pozivu.',
        en: 'Thank you for the invitation.',
        why: 'The locative after "na" — a fixed pattern you will use constantly.',
      },
      {
        hr: 'Nažalost, ne mogu doći jer radim.',
        en: 'Unfortunately I cannot come because I am working.',
        why: 'The refusal plus a reason with "jer" — never leave the reason out.',
      },
      {
        hr: 'Jako bih volio doći.',
        en: 'I would very much like to come.',
        why: 'The conditional "bih" in second position — this is what makes a no sound warm.',
      },
    ],
    usefulPhrases: ['Hvala na pozivu.', 'Nažalost…', 'Žao mi je.', 'Volio bih…', 'Možemo li…?'],
    checklist: [
      { id: 'thanks', label: 'Thank them', words: ['hvala'] },
      { id: 'reason', label: 'Give a reason with "jer"', words: ['jer', 'zato što'] },
      { id: 'alt', label: 'Suggest something else', words: ['možemo', 'drugi put', 'sljedeći'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-trip',
    level: 'A2',
    title: 'Tell the story of a trip',
    prompt: 'Ispričaj o putovanju: kamo si išao, s kim, što ste radili i bi li išao ponovno.',
    promptEn:
      'Tell the story of a trip: where you went, with whom, what you did and whether you would go again.',
    minWords: 20,
    model:
      'Ljetos smo bili na moru, u Zadru. ' +
      'Išli smo autom, vozili smo se pet sati. ' +
      'Svaki smo dan plivali, a navečer smo šetali starim gradom. ' +
      'Jedan smo dan išli brodom na otok i to mi je bilo najljepše. ' +
      'Sigurno bismo išli ponovno, možda već sljedeće godine.',
    modelEn:
      'This summer we were at the seaside, in Zadar. ' +
      'We went by car, we drove for five hours. ' +
      'Every day we swam, and in the evening we walked around the old town. ' +
      'One day we took a boat to an island and that was the loveliest part for me. ' +
      'We would definitely go again, maybe as early as next year.',
    structures: [
      {
        hr: 'Svaki smo dan plivali',
        en: 'Every day we swam',
        why: 'The little "smo" goes after the first WORD, which splits "svaki dan" apart. This sounds odd to English ears and is exactly right.',
      },
      {
        hr: 'išli brodom na otok',
        en: 'took a boat to an island',
        why: 'Instrumental for the vehicle, "na" + accusative for the destination.',
      },
      {
        hr: 'Sigurno bismo išli ponovno',
        en: 'We would definitely go again',
        why: 'The conditional for a hypothetical — "bismo" is the "we" form.',
      },
    ],
    rehearse: [
      {
        hr: 'Ljetos smo bili na moru.',
        en: 'This summer we were at the seaside.',
        why: '"na" + locative for being somewhere, with the auxiliary in second position.',
      },
      {
        hr: 'Svaki smo dan plivali u moru.',
        en: 'Every day we swam in the sea.',
        why: 'The clitic splitting a phrase — say it aloud until it stops feeling wrong.',
      },
      {
        hr: 'Sigurno bismo išli ponovno.',
        en: 'We would definitely go again.',
        why: 'The plural conditional, second position again.',
      },
    ],
    usefulPhrases: ['ljetos', 'zimus', 'najprije', 'jedan dan', 'najljepše', 'ponovno'],
    checklist: [
      { id: 'where', label: 'Say where you went', words: ['bili', 'išli', 'putovali'] },
      { id: 'again', label: 'Say whether you would go again', words: ['bih', 'bismo', 'ponovno'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },
  {
    id: 'a2-message',
    level: 'A2',
    title: 'Leave a voice message',
    prompt: 'Ostavi glasovnu poruku: reci tko si, zašto zoveš, što trebaš i kada te mogu dobiti.',
    promptEn:
      'Leave a voice message: say who you are, why you are calling, what you need and when they can reach you.',
    minWords: 20,
    model:
      'Bog, ovdje Ivana. ' +
      'Zovem te zbog subote, oko dogovora za put. ' +
      'Htjela sam pitati krećemo li ujutro ili poslijepodne. ' +
      'Javi mi se kad stigneš, može i porukom. ' +
      'Danas sam dostupna do osam navečer. Čujemo se!',
    modelEn:
      'Hi, this is Ivana. ' +
      'I am calling about Saturday, about the arrangement for the trip. ' +
      'I wanted to ask whether we are leaving in the morning or the afternoon. ' +
      'Get back to me when you can, a text is fine too. ' +
      'I am available until eight this evening. Talk soon!',
    structures: [
      {
        hr: 'Zovem te zbog subote',
        en: 'I am calling you about Saturday',
        why: '"zbog" always takes the genitive: subota → zbog subote.',
      },
      {
        hr: 'krećemo li ujutro',
        en: 'whether we are leaving in the morning',
        why: 'The same "li" that makes a question also means "whether" inside a sentence.',
      },
      {
        hr: 'Javi mi se kad stigneš',
        en: 'Get back to me when you can',
        why: 'An imperative with two little words after it — dative "mi" and reflexive "se", in that order.',
      },
    ],
    rehearse: [
      {
        hr: 'Bog, ovdje Ivana.',
        en: 'Hi, this is Ivana.',
        why: 'How Croatians open a call — "ovdje" plus your name, no verb at all.',
      },
      {
        hr: 'Zovem te zbog subote.',
        en: 'I am calling you about Saturday.',
        why: 'Genitive after "zbog", with the object pronoun in second position.',
      },
      {
        hr: 'Javi mi se kad možeš.',
        en: 'Get back to me when you can.',
        why: 'The fixed cluster "mi se" — the order never changes.',
      },
    ],
    usefulPhrases: ['ovdje…', 'zovem zbog…', 'Htjela sam pitati…', 'Javi mi se.', 'Čujemo se!'],
    checklist: [
      { id: 'who', label: 'Say who is calling', words: ['ovdje', 'zovem'] },
      { id: 'why', label: 'Say why you are calling', words: ['zbog', 'oko', 'pitati'] },
      { id: 'len', label: 'Speak at least 20 words', minWords: 20 },
    ],
  },

  // ── B1 — opinion and account ────────────────────────────────────────────────
  {
    id: 'b1-opinion',
    level: 'B1',
    title: 'Give an opinion on a change',
    prompt:
      'U tvom gradu žele zabraniti automobile u centru. Reci što misliš, navedi dva razloga i priznaj jedan protuargument.',
    promptEn:
      'Your town wants to ban cars from the centre. Say what you think, give two reasons and acknowledge one counter-argument.',
    minWords: 30,
    model:
      'Mislim da bi to bila dobra odluka, iako razumijem zašto se ljudi bune. ' +
      'S jedne strane, centar bi bio mnogo tiši i sigurniji za djecu. ' +
      'S druge strane, kafići i trgovine žive od ljudi koji dolaze autom. ' +
      'Ipak smatram da bi se to riješilo boljim prijevozom i parkiralištima na rubu grada. ' +
      'Kad sam bio u Ljubljani, vidio sam da to funkcionira.',
    modelEn:
      'I think it would be a good decision, although I understand why people object. ' +
      'On the one hand, the centre would be much quieter and safer for children. ' +
      'On the other hand, cafés and shops live off the people who come by car. ' +
      'Still, I believe that could be solved with better transport and car parks on the edge of town. ' +
      'When I was in Ljubljana, I saw that it works.',
    structures: [
      {
        hr: 'Mislim da bi to bila dobra odluka',
        en: 'I think it would be a good decision',
        why: 'An opinion in Croatian almost always opens a "da" clause. The conditional inside it keeps the claim modest.',
      },
      {
        hr: 'iako razumijem zašto se ljudi bune',
        en: 'although I understand why people object',
        why: 'Conceding before you argue makes the argument stronger, and "iako" is the word that does it.',
      },
      {
        hr: 'S jedne strane… S druge strane…',
        en: 'On the one hand… On the other hand…',
        why: 'The two-sided frame. Once you can say this pair, you can structure any opinion.',
      },
    ],
    rehearse: [
      {
        hr: 'Mislim da bi to bila dobra odluka.',
        en: 'I think it would be a good decision.',
        why: 'The "da" clause plus a conditional — the core of every opinion you will give.',
      },
      {
        hr: 'Iako razumijem argumente protiv, ipak se ne slažem.',
        en: 'Although I understand the arguments against, I still disagree.',
        why: '"iako" with "ipak" answering it — the standard concession pair.',
      },
      {
        hr: 'To bi se riješilo boljim prijevozom.',
        en: 'That would be solved with better transport.',
        why: 'Instrumental for the means, with the reflexive passive "se".',
      },
    ],
    usefulPhrases: [
      'Mislim da…',
      'S jedne strane…',
      'S druge strane…',
      'Iako…',
      'Ipak smatram…',
      'Na kraju',
    ],
    checklist: [
      { id: 'stance', label: 'State your position', words: ['mislim', 'smatram', 'slažem'] },
      {
        id: 'concede',
        label: 'Acknowledge the other side',
        words: ['iako', 's druge strane', 'ipak'],
      },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-anecdote',
    level: 'B1',
    title: 'Tell an anecdote',
    prompt:
      'Ispričaj nešto smiješno ili neugodno što ti se dogodilo. Postavi scenu, ispričaj što se dogodilo i završi poantom.',
    promptEn:
      'Tell something funny or embarrassing that happened to you. Set the scene, say what happened and finish with a point.',
    minWords: 30,
    model:
      'Neću zaboraviti prvi put kad sam naručivao kavu u Splitu. ' +
      'Htio sam reći da želim kavu s mlijekom, ali sam pomiješao riječi i tražio kavu s maslinama. ' +
      'Konobar me pogledao, nasmijao se i pitao jesam li siguran. ' +
      'Cijeli je kafić čuo, a ja sam pocrvenio do ušiju. ' +
      'Otad me pamti i uvijek me pita želim li nešto posebno u kavi.',
    modelEn:
      'I will never forget the first time I ordered coffee in Split. ' +
      'I wanted to say I wanted coffee with milk, but I mixed up the words and asked for coffee with olives. ' +
      'The waiter looked at me, laughed and asked if I was sure. ' +
      'The whole café heard, and I went red to the ears. ' +
      'Ever since, he remembers me and always asks whether I want anything special in my coffee.',
    structures: [
      {
        hr: 'Neću zaboraviti prvi put kad sam',
        en: 'I will never forget the first time I',
        why: 'A story opener that promises the listener something worth waiting for.',
      },
      {
        hr: 'pitao jesam li siguran',
        en: 'asked if I was sure',
        why: 'Reported question. Croatian keeps the tense of the original words — "jesam", not "was".',
      },
      {
        hr: 'Otad me pamti',
        en: 'Ever since, he remembers me',
        why: 'The closing move: what the story left behind. "otad" ties then to now.',
      },
    ],
    rehearse: [
      {
        hr: 'Neću zaboraviti kad sam prvi put došao u Split.',
        en: 'I will never forget the first time I came to Split.',
        why: 'Future negative plus a past clause — the standard anecdote opening.',
      },
      {
        hr: 'Pitao me jesam li siguran.',
        en: 'He asked me if I was sure.',
        why: 'Reported question with "li" and the tense unchanged.',
      },
      {
        hr: 'Cijeli je kafić čuo, a ja sam pocrvenio.',
        en: 'The whole café heard, and I went red.',
        why: 'Two clauses joined with "a" for contrast, auxiliary second in each.',
      },
    ],
    usefulPhrases: ['Neću zaboraviti…', 'U jednom trenutku', 'Odjednom', 'Na kraju', 'Otad'],
    checklist: [
      { id: 'scene', label: 'Set the scene', words: ['kad', 'jednom', 'prvi put'] },
      { id: 'point', label: 'Finish with a point', words: ['otad', 'na kraju', 'zato'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-interview',
    level: 'B1',
    title: 'Answer "tell me about yourself"',
    prompt:
      'Na razgovoru za posao odgovori na pitanje „Recite nam nešto o sebi.“ Govori o iskustvu, snazi i zašto želiš taj posao.',
    promptEn:
      'In a job interview, answer "tell us something about yourself". Talk about your experience, a strength and why you want the job.',
    minWords: 30,
    model:
      'Hvala vam na prilici. U struci radim već šest godina, uglavnom u malim timovima. ' +
      'Zadnje tri godine vodim projekte, pa sam navikao raditi pod rokovima. ' +
      'Rekao bih da mi je najveća snaga to što dobro slušam ljude prije nego što predložim rješenje. ' +
      'Vaša me tvrtka zanima jer radite s podacima, a to me oduvijek privlačilo. ' +
      'Vjerujem da bih se brzo uklopio u vaš tim.',
    modelEn:
      'Thank you for the opportunity. I have been working in the field for six years, mostly in small teams. ' +
      'For the last three years I have been leading projects, so I am used to working to deadlines. ' +
      'I would say my greatest strength is that I listen to people carefully before proposing a solution. ' +
      'Your company interests me because you work with data, and that has always drawn me. ' +
      'I believe I would fit into your team quickly.',
    structures: [
      {
        hr: 'U struci radim već šest godina',
        en: 'I have been working in the field for six years',
        why: 'Croatian uses the PRESENT with "već" for something still going on. Using the past here would say you stopped.',
      },
      {
        hr: 'Rekao bih da mi je najveća snaga',
        en: 'I would say my greatest strength is',
        why: 'The conditional makes a self-assessment sound measured rather than boastful.',
      },
      {
        hr: 'prije nego što predložim rješenje',
        en: 'before I propose a solution',
        why: '"prije nego što" + present — the standard way to sequence two actions.',
      },
    ],
    rehearse: [
      {
        hr: 'U struci radim već šest godina.',
        en: 'I have been working in the field for six years.',
        why: 'Present tense with "već" — the tense choice that marks a fluent speaker.',
      },
      {
        hr: 'Navikao sam raditi pod rokovima.',
        en: 'I am used to working to deadlines.',
        why: 'A participle plus an infinitive, with the auxiliary in second position.',
      },
      {
        hr: 'Vjerujem da bih se brzo uklopio.',
        en: 'I believe I would fit in quickly.',
        why: 'A "da" clause with a conditional and a reflexive verb — three things at once.',
      },
    ],
    usefulPhrases: [
      'Hvala na prilici.',
      'U struci radim…',
      'Rekao bih da…',
      'Najveća mi je snaga…',
      'Zanima me…',
    ],
    checklist: [
      { id: 'exp', label: 'Say how long you have done it', words: ['već', 'godina', 'godine'] },
      { id: 'why', label: 'Say why this job', words: ['jer', 'zanima', 'zato'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-landlord',
    level: 'B1',
    title: 'Report a problem to your landlord',
    prompt:
      'Nazovi stanodavca: opiši kvar, reci koliko dugo traje, objasni zašto je hitno i zamoli za popravak.',
    promptEn:
      'Call your landlord: describe the fault, say how long it has lasted, explain why it is urgent and ask for a repair.',
    minWords: 30,
    model:
      'Dobar dan, zovem vas zbog stana u Ulici kralja Zvonimira. ' +
      'Grijanje ne radi već tjedan dana, a temperatura je noću oko dvanaest stupnjeva. ' +
      'Osim toga, voda curi ispod sudopera pa se bojim da će se pod oštetiti. ' +
      'Bio bih vam zahvalan kad biste poslali majstora ovaj tjedan. ' +
      'Kod kuće sam svaki dan poslije pet, pa mi javite kad odgovara.',
    modelEn:
      'Good day, I am calling about the flat in Ulica kralja Zvonimira. ' +
      'The heating has not worked for a week, and the temperature at night is around twelve degrees. ' +
      'On top of that, water is leaking under the sink so I am afraid the floor will be damaged. ' +
      'I would be grateful if you could send someone this week. ' +
      'I am home every day after five, so let me know when suits you.',
    structures: [
      {
        hr: 'Grijanje ne radi već tjedan dana',
        en: 'The heating has not worked for a week',
        why: 'Present + "već" again: the problem is still happening, which is exactly the point of the call.',
      },
      {
        hr: 'se bojim da će se pod oštetiti',
        en: 'I am afraid the floor will be damaged',
        why: 'A consequence stated as a fear — much more persuasive than a demand.',
      },
      {
        hr: 'Bio bih vam zahvalan kad biste poslali',
        en: 'I would be grateful if you could send',
        why: 'A double conditional in the V-form. This is the politest request Croatian has, and it works on officials too.',
      },
    ],
    rehearse: [
      {
        hr: 'Grijanje ne radi već tjedan dana.',
        en: 'The heating has not worked for a week.',
        why: 'Present with "već" — the tense that says the problem is still live.',
      },
      {
        hr: 'Bojim se da će se pod oštetiti.',
        en: 'I am afraid the floor will be damaged.',
        why: 'A "da" clause with a future and a reflexive passive.',
      },
      {
        hr: 'Bio bih vam zahvalan kad biste poslali majstora.',
        en: 'I would be grateful if you could send someone.',
        why: 'Both halves conditional, V-form throughout. Learn it as one block.',
      },
    ],
    usefulPhrases: ['Zovem vas zbog…', 'već … dana', 'Osim toga', 'Bio bih zahvalan…', 'Javite mi'],
    checklist: [
      { id: 'fault', label: 'Describe the fault', words: ['ne radi', 'curi', 'pokvaren'] },
      { id: 'request', label: 'Make a polite request', words: ['bih', 'biste', 'molim'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-tradition',
    level: 'B1',
    title: 'Explain a tradition',
    prompt:
      'Objasni nekome tko ne poznaje tvoju kulturu jedan običaj: kada se održava, što se radi i što znači.',
    promptEn:
      'Explain a custom to someone who does not know your culture: when it happens, what is done and what it means.',
    minWords: 30,
    model:
      'Kod nas se na Badnjak ne jede meso, nego riba i bakalar. ' +
      'Cijela se obitelj okupi kod bake, obično oko šest sati. ' +
      'Djeca kite bor dok stariji kuhaju, a poslije večere idemo na ponoćku. ' +
      'Običaj je da se tada nikome ne žuri i da se ne gleda na sat. ' +
      'Za mene to nije toliko vjerska stvar koliko dan kad se svi vidimo.',
    modelEn:
      'Where I come from, no meat is eaten on Christmas Eve, but fish and salt cod instead. ' +
      'The whole family gathers at grandma’s, usually around six. ' +
      'The children decorate the tree while the older ones cook, and after dinner we go to midnight mass. ' +
      'The custom is that nobody is in a hurry then and nobody looks at the clock. ' +
      'For me it is not so much a religious thing as the day when we all see each other.',
    structures: [
      {
        hr: 'se na Badnjak ne jede meso',
        en: 'no meat is eaten',
        why: 'The reflexive passive: Croatian says "it eats itself" where English says "is eaten". This is how customs are described.',
      },
      {
        hr: 'meso, nego riba',
        en: 'not meat, but fish',
        why: 'After a negative, "nego" is the correct word for "but". Using "ali" here is the classic learner slip.',
      },
      {
        hr: 'nije toliko … koliko',
        en: 'not so much … as',
        why: 'A comparison that lets you correct someone’s assumption gently.',
      },
    ],
    rehearse: [
      {
        hr: 'Kod nas se na Badnjak ne jede meso.',
        en: 'Where I come from, no meat is eaten on Christmas Eve.',
        why: 'Reflexive passive with the clitic in second position.',
      },
      {
        hr: 'Djeca kite bor dok stariji kuhaju.',
        en: 'The children decorate the tree while the older ones cook.',
        why: '"dok" for two things happening at once.',
      },
      {
        hr: 'Običaj je da se nikome ne žuri.',
        en: 'The custom is that nobody is in a hurry.',
        why: 'An impersonal construction with a dative — nobody HAS a hurry in Croatian.',
      },
    ],
    usefulPhrases: ['Kod nas se…', 'Običaj je da…', 'dok', 'nego', 'Za mene to znači…'],
    checklist: [
      { id: 'when', label: 'Say when it happens', words: ['na ', 'kada', 'svake godine'] },
      { id: 'mean', label: 'Say what it means to you', words: ['za mene', 'znači'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-apology',
    level: 'B1',
    title: 'Apologise and put it right',
    prompt:
      'Zaboravio si na dogovor i netko te čekao. Ispričaj se, objasni bez izgovora i predloži kako ćeš to popraviti.',
    promptEn:
      'You forgot an arrangement and someone was waiting for you. Apologise, explain without making excuses and propose how you will put it right.',
    minWords: 30,
    model:
      'Jako mi je žao zbog jučer, stvarno nemam opravdanje. ' +
      'Zapisao sam krivi datum u kalendar i shvatio sam tek navečer. ' +
      'Znam da si me čekao pola sata i da ti je to pokvarilo popodne. ' +
      'Neću to tako ostaviti — javit ću se sutra i dogovoriti novi termin. ' +
      'Sljedeći put častim ja, ako mi daš još jednu priliku.',
    modelEn:
      'I am very sorry about yesterday, I really have no excuse. ' +
      'I wrote the wrong date in my calendar and only realised in the evening. ' +
      'I know you waited half an hour for me and that it ruined your afternoon. ' +
      'I will not leave it like this — I will call tomorrow and arrange a new time. ' +
      'Next time it is on me, if you give me another chance.',
    structures: [
      {
        hr: 'Jako mi je žao zbog jučer',
        en: 'I am very sorry about yesterday',
        why: 'Croatian puts the sorrow in the dative: it is sorry TO me. "zbog" then takes the genitive.',
      },
      {
        hr: 'da ti je to pokvarilo popodne',
        en: 'that it ruined your afternoon',
        why: 'Naming the cost to the OTHER person is what makes an apology land.',
      },
      {
        hr: 'Neću to tako ostaviti',
        en: 'I will not leave it like this',
        why: 'A negative future used as a promise. Follow it immediately with the concrete fix.',
      },
    ],
    rehearse: [
      {
        hr: 'Jako mi je žao, nemam opravdanje.',
        en: 'I am very sorry, I have no excuse.',
        why: 'The dative "mi" cluster, then a flat admission — no excuses attached.',
      },
      {
        hr: 'Znam da si me čekao pola sata.',
        en: 'I know you waited half an hour for me.',
        why: 'A "da" clause in the past with two clitics in a row: "si me".',
      },
      {
        hr: 'Javit ću se sutra i dogovoriti novi termin.',
        en: 'I will call tomorrow and arrange a new time.',
        why: 'The future with a reflexive verb — the concrete repair, not a vague promise.',
      },
    ],
    usefulPhrases: ['Žao mi je zbog…', 'Nemam opravdanje.', 'Znam da…', 'Neću to tako ostaviti.'],
    checklist: [
      { id: 'sorry', label: 'Apologise clearly', words: ['žao', 'ispričavam', 'oprosti'] },
      { id: 'fix', label: 'Propose a concrete fix', words: ['javit', 'dogovorit', 'sljedeći put'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-compare',
    level: 'B1',
    title: 'Compare two options and choose',
    prompt:
      'Biraš između dva stana. Usporedi ih po cijeni, lokaciji i veličini, pa reci koji biraš i zašto.',
    promptEn:
      'You are choosing between two flats. Compare them on price, location and size, then say which you choose and why.',
    minWords: 30,
    model:
      'Prvi je stan jeftiniji za dvjesto eura, ali je puno dalje od centra. ' +
      'Drugi je manji, međutim ima balkon i nalazi se blizu tramvaja. ' +
      'Što se tiče buke, prvi je mirniji jer gleda na dvorište. ' +
      'Ako gledam samo cijenu, prvi je bolji izbor. ' +
      'Ipak bih uzeo drugi, zato što bih svaki dan gubio sat vremena na putovanje.',
    modelEn:
      'The first flat is two hundred euros cheaper, but it is much further from the centre. ' +
      'The second is smaller, however it has a balcony and is close to the tram. ' +
      'As for noise, the first is quieter because it faces the courtyard. ' +
      'If I look only at the price, the first is the better choice. ' +
      'Still, I would take the second, because I would lose an hour a day travelling.',
    structures: [
      {
        hr: 'jeftiniji za dvjesto eura',
        en: 'two hundred euros cheaper',
        why: 'The size of a difference goes with "za" + accusative.',
      },
      {
        hr: 'Što se tiče buke',
        en: 'As for noise',
        why: 'A topic-changing phrase that takes the genitive. It buys you a moment and sounds fluent.',
      },
      {
        hr: 'Ipak bih uzeo drugi, zato što',
        en: 'Still, I would take the second, because',
        why: 'Decide out loud, then justify. A comparison without a decision is not an answer.',
      },
    ],
    rehearse: [
      {
        hr: 'Prvi je jeftiniji, ali je dalje od centra.',
        en: 'The first is cheaper, but it is further from the centre.',
        why: 'Two comparatives, and "od" + genitive for what you compare against.',
      },
      {
        hr: 'Što se tiče buke, prvi je mirniji.',
        en: 'As for noise, the first is quieter.',
        why: 'The genitive after "što se tiče" — practise it until it comes automatically.',
      },
      {
        hr: 'Ipak bih uzeo drugi zato što ima balkon.',
        en: 'Still, I would take the second because it has a balcony.',
        why: 'Conditional decision plus a reason clause.',
      },
    ],
    usefulPhrases: [
      'jeftiniji od',
      'veći od',
      'Što se tiče…',
      'međutim',
      'Ako gledam…',
      'Ipak bih…',
    ],
    checklist: [
      { id: 'compare', label: 'Use a comparative', words: ['jeftiniji', 'veći', 'manji', 'bolji'] },
      { id: 'choose', label: 'Say which you choose', words: ['bih', 'biram', 'uzeo'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },
  {
    id: 'b1-retell',
    level: 'B1',
    title: 'Retell something you read',
    prompt:
      'Prepričaj vijest ili članak koji si nedavno pročitao: o čemu je bilo, što su rekli i što ti misliš.',
    promptEn:
      'Retell a piece of news or an article you read recently: what it was about, what was said and what you think.',
    minWords: 30,
    model:
      'Jučer sam pročitao članak o cijenama stanova u Zagrebu. ' +
      'Pisalo je da su cijene u godinu dana porasle za petnaest posto. ' +
      'Stručnjaci kažu da je razlog manjak novogradnje, a ne samo turizam. ' +
      'Spominjali su i da mladi sve kasnije odlaze od roditelja. ' +
      'Mene je najviše iznenadilo to što se najviše gradi izvan grada, gdje ljudi ionako ne žele živjeti.',
    modelEn:
      'Yesterday I read an article about flat prices in Zagreb. ' +
      'It said that prices had risen by fifteen per cent in a year. ' +
      'Experts say the reason is a shortage of new construction, and not only tourism. ' +
      'They also mentioned that young people are leaving their parents’ homes later and later. ' +
      'What surprised me most is that most building is happening outside the city, where people do not want to live anyway.',
    structures: [
      {
        hr: 'Pisalo je da su cijene … porasle',
        en: 'It said that prices had risen',
        why: 'Reporting what a text said. Croatian keeps the original tense inside "da" — no shifting back.',
      },
      {
        hr: 'porasle za petnaest posto',
        en: 'risen by fifteen per cent',
        why: '"za" + accusative for the size of a change — the same pattern as "jeftiniji za dvjesto eura".',
      },
      {
        hr: 'Mene je najviše iznenadilo to što',
        en: 'What surprised me most is that',
        why: 'Fronting "mene" marks the switch from the report to your own reaction.',
      },
    ],
    rehearse: [
      {
        hr: 'Pisalo je da su cijene porasle za petnaest posto.',
        en: 'It said that prices had risen by fifteen per cent.',
        why: 'Reported speech with a percentage — tense unchanged inside "da".',
      },
      {
        hr: 'Stručnjaci kažu da je razlog manjak novogradnje.',
        en: 'Experts say the reason is a shortage of new construction.',
        why: 'Attributing a claim to a source instead of stating it as your own.',
      },
      {
        hr: 'Mene je najviše iznenadilo to što se gradi izvan grada.',
        en: 'What surprised me most is that building is happening outside the city.',
        why: 'The reaction frame plus a reflexive passive.',
      },
    ],
    usefulPhrases: [
      'Pročitao sam da…',
      'Pisalo je da…',
      'Prema članku',
      'Stručnjaci kažu…',
      'Iznenadilo me…',
    ],
    checklist: [
      {
        id: 'source',
        label: 'Say where it came from',
        words: ['članak', 'vijest', 'pisalo', 'pročitao'],
      },
      { id: 'react', label: 'Give your own reaction', words: ['mene', 'mislim', 'iznenadilo'] },
      { id: 'len', label: 'Speak at least 30 words', minWords: 30 },
    ],
  },

  // ── B2 — argument, negotiation, register ────────────────────────────────────
  {
    id: 'b2-argument',
    level: 'B2',
    title: 'Make a case in a meeting',
    prompt:
      'Na sastanku predloži da tim uvede jedan dan rada od kuće. Obrazloži prijedlog, predvidi prigovor i odgovori na njega.',
    promptEn:
      'In a meeting, propose that the team introduce one day of working from home. Justify the proposal, anticipate an objection and answer it.',
    minWords: 40,
    model:
      'Predlažem da uvedemo jedan dan rada od kuće, recimo srijedu. ' +
      'Razlog je jednostavan: zadaci koji traže koncentraciju stalno se prekidaju u uredu. ' +
      'S obzirom na to da smo prošli kvartal izgubili dvoje ljudi, mislim da je i zadržavanje kolega argument. ' +
      'Znam da će netko reći kako će komunikacija patiti. ' +
      'Zato bih predložio da srijedom nemamo nijedan sastanak, nego da sve dogovorimo u utorak. ' +
      'Ako nakon tri mjeseca ne bude bolje, vraćamo se na staro.',
    modelEn:
      'I propose we introduce one day of working from home, say Wednesday. ' +
      'The reason is simple: tasks that require concentration are constantly interrupted in the office. ' +
      'Given that we lost two people last quarter, I think retaining colleagues is an argument too. ' +
      'I know someone will say that communication will suffer. ' +
      'That is why I would propose we hold no meetings at all on Wednesdays, and arrange everything on Tuesday instead. ' +
      'If it is no better after three months, we go back to the old way.',
    structures: [
      {
        hr: 'Predlažem da uvedemo',
        en: 'I propose we introduce',
        why: '"predlažem da" takes a full clause in the PRESENT, not an infinitive — because the person doing it changes.',
      },
      {
        hr: 'S obzirom na to da',
        en: 'Given that',
        why: 'The register marker that turns an opinion into a case. Note "na to da", not "na da".',
      },
      {
        hr: 'Znam da će netko reći kako',
        en: 'I know someone will say that',
        why: 'Stating the objection yourself, before anyone else does. It disarms the room and buys you the answer.',
      },
    ],
    rehearse: [
      {
        hr: 'Predlažem da uvedemo jedan dan rada od kuće.',
        en: 'I propose we introduce one day of working from home.',
        why: 'The da-clause in the present — the single most-missed structure at this level.',
      },
      {
        hr: 'S obzirom na to da smo izgubili dvoje ljudi…',
        en: 'Given that we lost two people…',
        why: 'A formal causal frame with a past clause inside it.',
      },
      {
        hr: 'Ako nakon tri mjeseca ne bude bolje, vraćamo se na staro.',
        en: 'If it is no better after three months, we go back to the old way.',
        why: 'A real conditional offer — it makes the proposal reversible and therefore easy to accept.',
      },
    ],
    usefulPhrases: [
      'Predlažem da…',
      'S obzirom na to da…',
      'Razlog je…',
      'Znam da će netko reći…',
      'Zato bih…',
    ],
    checklist: [
      {
        id: 'proposal',
        label: 'State the proposal',
        words: ['predlažem', 'predložio', 'predložila'],
      },
      { id: 'objection', label: 'Answer an objection', words: ['znam da', 'netko će', 'prigovor'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-negotiate',
    level: 'B2',
    title: 'Negotiate a deadline',
    prompt:
      'Rok je prekratak. Objasni zašto, ponudi rješenje i dogovori nešto s čim obje strane mogu živjeti.',
    promptEn:
      'The deadline is too short. Explain why, offer a solution and settle on something both sides can live with.',
    minWords: 40,
    model:
      'Razumijem da vam je rok važan i ne želim ga jednostavno odbiti. ' +
      'Problem je što posao u tri tjedna ne možemo napraviti kvalitetno, a loša verzija nikome ne koristi. ' +
      'Nudim dvije mogućnosti: ili produljujemo rok za deset dana, ili u prvoj fazi isporučujemo samo najvažniji dio. ' +
      'Meni je druga opcija draža jer biste nešto imali već za dva tjedna. ' +
      'Ako pristanete, danas vam mogu poslati točan popis onoga što ulazi u prvu fazu. ' +
      'Kako vam to zvuči?',
    modelEn:
      'I understand the deadline matters to you and I do not want to simply refuse it. ' +
      'The problem is that we cannot do the work well in three weeks, and a poor version serves nobody. ' +
      'I am offering two options: either we extend the deadline by ten days, or in the first phase we deliver only the most important part. ' +
      'I prefer the second, because you would have something in two weeks. ' +
      'If you agree, I can send you an exact list today of what goes into the first phase. ' +
      'How does that sound to you?',
    structures: [
      {
        hr: 'Razumijem da vam je rok važan',
        en: 'I understand the deadline matters to you',
        why: 'Open by naming THEIR interest. The dative "vam" puts them in the sentence before you state your problem.',
      },
      {
        hr: 'ili … ili …',
        en: 'either … or …',
        why: 'Two named options are a negotiation; one refusal is a wall.',
      },
      {
        hr: 'Kako vam to zvuči?',
        en: 'How does that sound to you?',
        why: 'Handing the turn back keeps it a conversation. Ending on your own terms invites a no.',
      },
    ],
    rehearse: [
      {
        hr: 'Razumijem da vam je rok važan.',
        en: 'I understand the deadline matters to you.',
        why: 'A da-clause with a dative — the opening move of every negotiation.',
      },
      {
        hr: 'Ili produljujemo rok, ili isporučujemo samo prvi dio.',
        en: 'Either we extend the deadline, or we deliver only the first part.',
        why: 'The paired conjunction with two present-tense clauses.',
      },
      {
        hr: 'Ako pristanete, danas vam mogu poslati popis.',
        en: 'If you agree, I can send you a list today.',
        why: 'A conditional with a dative object — concrete, immediate, easy to say yes to.',
      },
    ],
    usefulPhrases: [
      'Razumijem da…',
      'Problem je što…',
      'Nudim dvije mogućnosti…',
      'Meni je draže…',
      'Kako vam to zvuči?',
    ],
    checklist: [
      { id: 'their', label: 'Name their interest first', words: ['razumijem', 'vam je', 'vama'] },
      { id: 'options', label: 'Offer at least two options', words: ['ili', 'mogućnost', 'opcija'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-feedback',
    level: 'B2',
    title: 'Give difficult feedback',
    prompt:
      'Kolega stalno kasni s dijelom posla. Reci mu to izravno, ali s poštovanjem, i dogovorite što dalje.',
    promptEn:
      'A colleague is repeatedly late with their part of the work. Tell them directly but respectfully, and agree what happens next.',
    minWords: 40,
    model:
      'Htio bih razgovarati o rokovima, i to otvoreno, jer mi je stalo do našeg odnosa. ' +
      'Primijetio sam da su zadnja tri puta tvoji dijelovi stigli nekoliko dana nakon dogovora. ' +
      'Ne govorim to da bih te napao — posljedica je da onda ja radim navečer, a to dugoročno ne ide. ' +
      'Zanima me kako ti to vidiš i je li nešto konkretno u putu. ' +
      'Ako je posla previše, možemo ga preraspodijeliti; ako je problem u rokovima, dogovorimo realnije. ' +
      'Bitno mi je da izađemo iz ovog razgovora s planom, a ne s lošim osjećajem.',
    modelEn:
      'I would like to talk about deadlines, and openly, because our relationship matters to me. ' +
      'I have noticed that the last three times your parts arrived several days after what we agreed. ' +
      'I am not saying this to attack you — the consequence is that I then work in the evenings, and that does not work long term. ' +
      'I want to know how you see it and whether something specific is in the way. ' +
      'If there is too much work, we can redistribute it; if the problem is the deadlines, let us agree more realistic ones. ' +
      'What matters to me is that we leave this conversation with a plan, not with a bad feeling.',
    structures: [
      {
        hr: 'jer mi je stalo do našeg odnosa',
        en: 'because our relationship matters to me',
        why: '"stalo mi je do" + genitive. Saying it first turns criticism into care.',
      },
      {
        hr: 'Primijetio sam da su … stigli',
        en: 'I have noticed that … arrived',
        why: 'Report the observable fact, not the character. "You are unreliable" is an accusation; this is evidence.',
      },
      {
        hr: 'Zanima me kako ti to vidiš',
        en: 'I want to know how you see it',
        why: 'The turn where feedback becomes a conversation. Ask it before you propose the fix.',
      },
    ],
    rehearse: [
      {
        hr: 'Stalo mi je do našeg odnosa.',
        en: 'Our relationship matters to me.',
        why: '"stalo mi je do" + genitive — a fixed pattern with a dative and a genitive together.',
      },
      {
        hr: 'Primijetio sam da su zadnja tri puta kasnili.',
        en: 'I noticed that the last three times they were late.',
        why: 'A da-clause in the past with participle agreement.',
      },
      {
        hr: 'Zanima me kako ti to vidiš.',
        en: 'I want to know how you see it.',
        why: 'The accusative "me" plus an embedded question — hands over the turn.',
      },
    ],
    usefulPhrases: [
      'Htio bih razgovarati o…',
      'Primijetio sam da…',
      'Posljedica je…',
      'Kako ti to vidiš?',
      'Bitno mi je da…',
    ],
    checklist: [
      {
        id: 'fact',
        label: 'State an observable fact',
        words: ['primijetio', 'primijetila', 'zadnja'],
      },
      { id: 'turn', label: 'Ask for their view', words: ['kako ti', 'zanima me', 'što misliš'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-trend',
    level: 'B2',
    title: 'Describe a trend',
    prompt:
      'Opiši promjenu koju si primijetio: što se mijenja, koliko, otkad i što misliš da je uzrok.',
    promptEn:
      'Describe a change you have noticed: what is changing, by how much, since when and what you think is causing it.',
    minWords: 40,
    model:
      'Broj ljudi koji rade na daljinu naglo je porastao nakon dvadesete godine. ' +
      'U našoj je struci taj udio s desetak posto skočio na gotovo polovicu. ' +
      'Posljednje dvije godine rast se usporio, ali povratka na staro nije bilo. ' +
      'Uzrok nije samo tehnologija; stanovi u velikim gradovima postali su nedostupni, pa se ljudi sele. ' +
      'Zanimljivo je da su tvrtke koje su prve dopustile rad od kuće danas najveće. ' +
      'Očekujem da će se to nastaviti, samo sporije nego dosad.',
    modelEn:
      'The number of people working remotely rose sharply after 2020. ' +
      'In our field that share jumped from around ten per cent to almost half. ' +
      'Over the last two years the growth has slowed, but there has been no return to how it was. ' +
      'The cause is not only technology; flats in big cities became unaffordable, so people are moving. ' +
      'It is interesting that the companies which allowed working from home first are the biggest today. ' +
      'I expect it to continue, only more slowly than before.',
    structures: [
      {
        hr: 'naglo je porastao',
        en: 'rose sharply',
        why: 'The participle agrees with its subject: broj is masculine, so porastao. Get this wrong and the sentence names the wrong subject.',
      },
      {
        hr: 's desetak posto skočio na gotovo polovicu',
        en: 'jumped from around ten per cent to almost half',
        why: 'A range needs both ends: "s" + genitive for the start, "na" + accusative for the finish.',
      },
      {
        hr: 'Očekujem da će se to nastaviti',
        en: 'I expect it to continue',
        why: 'A prediction inside a "da" clause, with the future and a reflexive verb.',
      },
    ],
    rehearse: [
      {
        hr: 'Broj korisnika naglo je porastao.',
        en: 'The number of users rose sharply.',
        why: 'Participle agreeing with a masculine subject, auxiliary in second position.',
      },
      {
        hr: 'Udio je skočio s deset na pedeset posto.',
        en: 'The share jumped from ten to fifty per cent.',
        why: 'Both ends of a range, each with its own case.',
      },
      {
        hr: 'Očekujem da će se rast usporiti.',
        en: 'I expect the growth to slow.',
        why: 'Future inside a da-clause with a reflexive verb.',
      },
    ],
    usefulPhrases: [
      'naglo je porastao',
      'postupno se smanjuje',
      'udio',
      'u odnosu na',
      'Uzrok je…',
      'Očekujem da…',
    ],
    checklist: [
      { id: 'number', label: 'Give a figure', words: ['posto', 'puta', 'broj', 'udio'] },
      { id: 'cause', label: 'Suggest a cause', words: ['uzrok', 'zbog', 'jer', 'razlog'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-disagree',
    level: 'B2',
    title: 'Disagree without a fight',
    prompt:
      'Netko tvrdi da učenje jezika u aplikaciji nema smisla. Ne slaži se, ali priznaj što je točno u toj tvrdnji.',
    promptEn:
      'Someone claims that learning a language in an app is pointless. Disagree, but admit what is right in the claim.',
    minWords: 40,
    model:
      'Djelomično se slažem, i to me možda iznenađuje koliko i tebe. ' +
      'Točno je da nitko nije progovorio samo zato što je svaki dan dodirivao ekran. ' +
      'Ali mislim da je usporedba kriva: aplikacija ne zamjenjuje razgovor, nego ga priprema. ' +
      'Kad sam prošli mjesec bio u Zadru, nisam bio bez riječi, i to zato što sam ih prije toga tisuću puta ponovio. ' +
      'Ono što aplikacija ne može jest strah, a strah se lomi samo s ljudima. ' +
      'Zato bih rekao da nije pitanje ili-ili, nego redoslijeda.',
    modelEn:
      'I partly agree, and that may surprise me as much as it surprises you. ' +
      'It is true that nobody ever started speaking just because they touched a screen every day. ' +
      'But I think the comparison is wrong: an app does not replace conversation, it prepares it. ' +
      'When I was in Zadar last month I was not lost for words, and that is because I had repeated them a thousand times beforehand. ' +
      'What an app cannot do is fear, and fear is only broken with people. ' +
      'So I would say it is not a question of either-or, but of order.',
    structures: [
      {
        hr: 'Djelomično se slažem',
        en: 'I partly agree',
        why: 'Conceding first is not weakness — it earns you the right to the "but" that follows.',
      },
      {
        hr: 'ne zamjenjuje razgovor, nego ga priprema',
        en: 'does not replace conversation, it prepares it',
        why: 'After a negative it is "nego", never "ali". The clitic "ga" then sits in second position.',
      },
      {
        hr: 'nije pitanje ili-ili, nego redoslijeda',
        en: 'it is not a question of either-or, but of order',
        why: 'Reframing the question instead of winning the old one. "pitanje" governs the genitive.',
      },
    ],
    rehearse: [
      {
        hr: 'Djelomično se slažem, ali mislim da je usporedba kriva.',
        en: 'I partly agree, but I think the comparison is wrong.',
        why: 'Concession then counter, with the reflexive in second position.',
      },
      {
        hr: 'Aplikacija ne zamjenjuje razgovor, nego ga priprema.',
        en: 'An app does not replace conversation, it prepares it.',
        why: '"nego" after a negative, then the accusative clitic "ga".',
      },
      {
        hr: 'Nije pitanje ili-ili, nego redoslijeda.',
        en: 'It is not a question of either-or, but of order.',
        why: 'Genitive after "pitanje", and the reframe that ends the argument well.',
      },
    ],
    usefulPhrases: [
      'Djelomično se slažem…',
      'Točno je da…',
      'Ali mislim da…',
      'nego',
      'Zato bih rekao…',
    ],
    checklist: [
      { id: 'concede', label: 'Admit what is right', words: ['točno je', 'slažem', 'razumijem'] },
      { id: 'nego', label: 'Use "nego" after a negative', words: ['nego'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-process',
    level: 'B2',
    title: 'Explain how something is done',
    prompt:
      'Objasni nekome kako se predaje zahtjev za neki dokument: koje su faze, što treba i gdje ljudi najčešće pogriješe.',
    promptEn:
      'Explain how an application for a document is submitted: the stages, what is needed and where people most often go wrong.',
    minWords: 40,
    model:
      'Postupak nije težak, ali se mora ići po redu. ' +
      'Najprije se ispunjava obrazac koji se preuzima na internetskoj stranici. ' +
      'Zatim se prilažu dokazi: preslika osobne, potvrda o prebivalištu i uplatnica. ' +
      'Zahtjev se predaje osobno na šalteru ili poštom, s tim da se poštom šalje preporučeno. ' +
      'Rješenje obično stigne u roku od trideset dana. ' +
      'Najčešća je greška što ljudi zaborave potpisati obrazac na drugoj stranici, pa se sve vraća na početak.',
    modelEn:
      'The procedure is not difficult, but it has to be done in order. ' +
      'First the form is filled in, and it is downloaded from the website. ' +
      'Then the evidence is attached: a copy of your ID, a proof of residence and a payment slip. ' +
      'The application is submitted in person at the counter or by post, with the proviso that by post it is sent registered. ' +
      'The decision usually arrives within thirty days. ' +
      'The commonest mistake is that people forget to sign the form on the second page, so the whole thing goes back to the start.',
    structures: [
      {
        hr: 'Zahtjev se predaje',
        en: 'The application is submitted',
        why: 'The impersonal "se" is the register of every official instruction in Croatian. Nobody is named as the doer.',
      },
      {
        hr: 'u roku od trideset dana',
        en: 'within thirty days',
        why: '"u roku od" + genitive — a fixed administrative phrase worth learning whole.',
      },
      {
        hr: 'Najčešća je greška što',
        en: 'The commonest mistake is that',
        why: 'Warning about the pitfall is what makes an explanation useful rather than merely correct.',
      },
    ],
    rehearse: [
      {
        hr: 'Najprije se ispunjava obrazac.',
        en: 'First the form is filled in.',
        why: 'The impersonal "se" with the clitic in second position.',
      },
      {
        hr: 'Zahtjev se predaje osobno ili poštom.',
        en: 'The application is submitted in person or by post.',
        why: 'Impersonal passive plus the instrumental for the means.',
      },
      {
        hr: 'Rješenje stiže u roku od trideset dana.',
        en: 'The decision arrives within thirty days.',
        why: 'The fixed phrase "u roku od" with a genitive.',
      },
    ],
    usefulPhrases: [
      'Najprije se…',
      'Zatim se…',
      'Potrebno je…',
      'u roku od',
      'Najčešća je greška…',
    ],
    checklist: [
      {
        id: 'steps',
        label: 'Give the stages in order',
        words: ['najprije', 'zatim', 'potom', 'na kraju'],
      },
      {
        id: 'pitfall',
        label: 'Warn about a common mistake',
        words: ['greška', 'zaborave', 'najčešće'],
      },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-toast',
    level: 'B2',
    title: 'Give a short toast',
    prompt:
      'Nazdravi na proslavi: obrati se društvu, reci nešto konkretno o osobi i završi zdravicom.',
    promptEn:
      'Give a toast at a celebration: address the company, say something specific about the person and finish with the toast itself.',
    minWords: 40,
    model:
      'Dragi svi, samo nakratko, da nam se hrana ne ohladi. ' +
      'Marka poznajem petnaest godina i za to vrijeme nikad nisam čuo da je nekome rekao „nemam vremena“. ' +
      'Kad mi je pukla cijev usred zime, došao je s alatom prije nego što sam stigao nazvati majstora. ' +
      'Takvi se ljudi ne biraju često i zato smo večeras svi ovdje. ' +
      'Želim mu zdravlja, mira i mnogo ovakvih večeri. ' +
      'Živjeli!',
    modelEn:
      'Dear everyone, just briefly, so the food does not go cold. ' +
      'I have known Marko for fifteen years and in all that time I have never heard him tell anyone "I have no time". ' +
      'When a pipe burst on me in the middle of winter, he turned up with his tools before I had managed to call a plumber. ' +
      'People like that do not come along often, and that is why we are all here tonight. ' +
      'I wish him health, peace and many more evenings like this one. ' +
      'Cheers!',
    structures: [
      {
        hr: 'Marka poznajem petnaest godina',
        en: 'I have known Marko for fifteen years',
        why: 'Present tense for something still true, and the name fronted into the accusative for emphasis.',
      },
      {
        hr: 'Kad mi je pukla cijev',
        en: 'When a pipe burst on me',
        why: 'The dative of the person affected. Croatian puts you in the sentence where English would need "on me" or nothing at all.',
      },
      {
        hr: 'Želim mu zdravlja, mira',
        en: 'I wish him health, peace',
        why: 'What you wish someone goes in the GENITIVE, and the person in the dative. This is what makes a toast sound like a toast.',
      },
    ],
    rehearse: [
      {
        hr: 'Marka poznajem petnaest godina.',
        en: 'I have known Marko for fifteen years.',
        why: 'Fronted accusative with the present tense for an ongoing state.',
      },
      {
        hr: 'Kad mi je pukla cijev, došao je odmah.',
        en: 'When a pipe burst on me, he came at once.',
        why: 'The dative of the affected person inside a time clause.',
      },
      {
        hr: 'Želim mu zdravlja i mira. Živjeli!',
        en: 'I wish him health and peace. Cheers!',
        why: 'Dative for who, genitive for what — then the one word every toast ends on.',
      },
    ],
    usefulPhrases: ['Dragi svi…', 'samo nakratko', 'Poznajem ga…', 'Želim mu…', 'Živjeli!'],
    checklist: [
      {
        id: 'specific',
        label: 'Say something specific, not generic',
        words: ['kad', 'jednom', 'sjećam'],
      },
      { id: 'toast', label: 'Finish with the toast', words: ['živjeli', 'nazdravlje', 'želim'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },
  {
    id: 'b2-formal-complaint',
    level: 'B2',
    title: 'Make a formal complaint',
    prompt:
      'Nazovi tvrtku i formalno se požali: navedi broj narudžbe, opiši što nije u redu, pozovi se na dogovoreno i reci što očekuješ.',
    promptEn:
      'Call a company and complain formally: give the order number, describe what is wrong, refer to what was agreed and say what you expect.',
    minWords: 40,
    model:
      'Dobar dan, obraćam vam se u vezi s narudžbom broj tri četiri sedam dva. ' +
      'Naručio sam perilicu s ugradnjom, a dostavljena je bez nje, i to deset dana nakon dogovorenog roka. ' +
      'U potvrdi koju sam dobio izričito piše da je ugradnja uključena u cijenu. ' +
      'Zvao sam vas dvaput i nitko mi se nije javio, što me dodatno razočaralo. ' +
      'Očekujem da se ugradnja obavi ovaj tjedan ili da mi se razlika vrati na račun. ' +
      'Molim vas pisani odgovor u roku od osam dana.',
    modelEn:
      'Good day, I am contacting you regarding order number three four seven two. ' +
      'I ordered a washing machine with installation, and it was delivered without it, ten days after the agreed deadline. ' +
      'The confirmation I received states explicitly that installation is included in the price. ' +
      'I called you twice and nobody got back to me, which disappointed me further. ' +
      'I expect the installation to be carried out this week, or the difference to be refunded to my account. ' +
      'Please send a written reply within eight days.',
    structures: [
      {
        hr: 'obraćam vam se u vezi s narudžbom',
        en: 'I am contacting you regarding order',
        why: '"u vezi s" takes the instrumental. This one phrase sets the whole call to a formal register.',
      },
      {
        hr: 'U potvrdi … izričito piše da',
        en: 'The confirmation states explicitly that',
        why: 'Citing the document rather than your memory. In a complaint, evidence outranks feeling.',
      },
      {
        hr: 'Očekujem da se ugradnja obavi',
        en: 'I expect the installation to be carried out',
        why: 'The impersonal "se" keeps the demand about the outcome rather than about a person to blame.',
      },
    ],
    rehearse: [
      {
        hr: 'Obraćam vam se u vezi s narudžbom broj tri četiri sedam dva.',
        en: 'I am contacting you regarding order number three four seven two.',
        why: 'Instrumental after "u vezi s", V-form throughout — the formal opening line.',
      },
      {
        hr: 'U potvrdi izričito piše da je ugradnja uključena.',
        en: 'The confirmation states explicitly that installation is included.',
        why: 'Locative after "u", then a da-clause with participle agreement.',
      },
      {
        hr: 'Molim vas pisani odgovor u roku od osam dana.',
        en: 'Please send a written reply within eight days.',
        why: 'Accusative object plus the fixed administrative "u roku od" + genitive.',
      },
    ],
    usefulPhrases: [
      'Obraćam vam se u vezi s…',
      'Izričito piše da…',
      'Očekujem da…',
      'u roku od',
      'pisani odgovor',
    ],
    checklist: [
      { id: 'ref', label: 'Give the reference', words: ['narudžb', 'broj', 'potvrd'] },
      { id: 'expect', label: 'Say what you expect', words: ['očekujem', 'molim', 'zahtijevam'] },
      { id: 'len', label: 'Speak at least 40 words', minWords: 40 },
    ],
  },

  // ── C1 — structured reasoning ───────────────────────────────────────────────
  {
    id: 'c1-thesis',
    level: 'C1',
    title: 'Argue a thesis properly',
    prompt:
      'Iznesi tezu o tome treba li fakultet biti besplatan. Postavi tezu, potkrijepi je, iznesi protuargument u najjačem obliku i zauzmi stav.',
    promptEn:
      'Argue a thesis on whether university should be free. State the thesis, support it, state the counter-argument at its strongest and take a position.',
    minWords: 50,
    model:
      'Tvrdim da besplatan fakultet nije pitanje velikodušnosti, nego računa. ' +
      'Budući da se stanovništvo smanjuje, svaki obrazovani čovjek koji ostane vrijedi više nego prije deset godina. ' +
      'Najjači protuargument nije da je skupo, nego da se novac slijeva onima koji bi studirali ionako, dok se djeci iz malih mjesta ne mijenja ništa. ' +
      'To priznajem: besplatna upisnina ne plaća stanarinu u Zagrebu. ' +
      'Upravo zato smatram da je pitanje krivo postavljeno. ' +
      'Nije riječ o tome je li školarina nula, nego o tome pokriva li država ono što studiranje uistinu košta.',
    modelEn:
      'I argue that free university is not a question of generosity, but of arithmetic. ' +
      'Since the population is shrinking, every educated person who stays is worth more than ten years ago. ' +
      'The strongest counter-argument is not that it is expensive, but that the money flows to those who would study anyway, while nothing changes for children from small places. ' +
      'I concede that: a waived enrolment fee does not pay rent in Zagreb. ' +
      'That is precisely why I think the question is wrongly framed. ' +
      'It is not about whether tuition is zero, but about whether the state covers what studying actually costs.',
    structures: [
      {
        hr: 'Budući da se stanovništvo smanjuje',
        en: 'Since the population is shrinking',
        why: '"budući da" is the written-register causal conjunction. It opens a case; "jer" merely answers a question.',
      },
      {
        hr: 'Najjači protuargument nije … nego',
        en: 'The strongest counter-argument is not … but',
        why: 'Stating the opposing case at its STRONGEST is what separates argument from advocacy — and it makes your answer credible.',
      },
      {
        hr: 'Nije riječ o tome je li … nego o tome',
        en: 'It is not about whether … but about',
        why: 'Reframing. "riječ je o" takes the locative, and the paired "nego o tome" keeps the structure balanced.',
      },
    ],
    rehearse: [
      {
        hr: 'Tvrdim da to nije pitanje velikodušnosti, nego računa.',
        en: 'I argue that it is not a question of generosity, but of arithmetic.',
        why: 'Genitive after "pitanje", "nego" after the negative.',
      },
      {
        hr: 'Budući da se stanovništvo smanjuje, svaki čovjek vrijedi više.',
        en: 'Since the population is shrinking, every person is worth more.',
        why: 'The formal causal opener with a reflexive verb inside it.',
      },
      {
        hr: 'Nije riječ o školarini, nego o troškovima studiranja.',
        en: 'It is not about tuition, but about the costs of studying.',
        why: 'Locative after "o" twice — the reframing move in its bare form.',
      },
    ],
    usefulPhrases: [
      'Tvrdim da…',
      'Budući da…',
      'Najjači protuargument…',
      'To priznajem…',
      'Nije riječ o… nego o…',
    ],
    checklist: [
      { id: 'thesis', label: 'State a thesis, not a topic', words: ['tvrdim', 'smatram', 'teza'] },
      {
        id: 'counter',
        label: 'State the counter-argument at its strongest',
        words: ['protuargument', 'priznajem', 'najjači'],
      },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-summarise',
    level: 'C1',
    title: 'Summarise and close a discussion',
    prompt:
      'Vodio si sastanak na kojem se nisu svi složili. Sažmi što je rečeno, razdvoji dogovoreno od otvorenog i zaključi s konkretnim koracima.',
    promptEn:
      'You chaired a meeting where people did not all agree. Summarise what was said, separate what was agreed from what is open and close with concrete steps.',
    minWords: 50,
    model:
      'Sažeo bih ovako. Oko dviju stvari postoji suglasnost: da postojeći raspored ne funkcionira i da odluku ne možemo odgađati do jeseni. ' +
      'Ostaje otvoreno tko preuzima nadzor i iz kojeg se proračuna to plaća. ' +
      'Ana je iznijela zabrinutost da bi se opterećenje samo premjestilo na manji tim, i to zasad nije opovrgnuto. ' +
      'Predlažem sljedeće: Marko do petka priprema procjenu troška, Ana popisuje rizike, a ja tražim mišljenje pravne službe. ' +
      'Vraćamo se na ovo u utorak i tada odlučujemo, s podacima ili bez njih. ' +
      'Ako se netko ne slaže s ovakvim sažetkom, sada je trenutak da to kaže.',
    modelEn:
      'Let me summarise. There is agreement on two things: that the current schedule does not work and that we cannot postpone the decision until autumn. ' +
      'What remains open is who takes over supervision and which budget pays for it. ' +
      'Ana raised the concern that the load would simply shift onto a smaller team, and so far that has not been refuted. ' +
      'I propose the following: Marko prepares a cost estimate by Friday, Ana lists the risks, and I ask the legal department for an opinion. ' +
      'We come back to this on Tuesday and decide then, with or without the figures. ' +
      'If anyone disagrees with this summary, now is the moment to say so.',
    structures: [
      {
        hr: 'Oko dviju stvari postoji suglasnost',
        en: 'There is agreement on two things',
        why: '"oko" + genitive, and the dual form "dviju" for two feminine nouns — a marker of careful speech.',
      },
      {
        hr: 'Ostaje otvoreno tko preuzima',
        en: 'What remains open is who takes over',
        why: 'Naming the unresolved question explicitly is what makes a summary trustworthy rather than diplomatic.',
      },
      {
        hr: 'i to zasad nije opovrgnuto',
        en: 'and so far that has not been refuted',
        why: 'A passive participle. It records the state of the argument without taking a side.',
      },
    ],
    rehearse: [
      {
        hr: 'Oko dviju stvari postoji suglasnost.',
        en: 'There is agreement on two things.',
        why: 'Genitive after "oko" with the dual numeral.',
      },
      {
        hr: 'Ostaje otvoreno tko preuzima nadzor.',
        en: 'What remains open is who takes over supervision.',
        why: 'An embedded question as the subject of the sentence.',
      },
      {
        hr: 'Vraćamo se na ovo u utorak i tada odlučujemo.',
        en: 'We come back to this on Tuesday and decide then.',
        why: 'Present tense used as a firm future — the register of a decision, not a hope.',
      },
    ],
    usefulPhrases: [
      'Sažeo bih ovako…',
      'Postoji suglasnost oko…',
      'Ostaje otvoreno…',
      'Predlažem sljedeće…',
      'Vraćamo se na to…',
    ],
    checklist: [
      {
        id: 'split',
        label: 'Separate agreed from open',
        words: ['suglasnost', 'ostaje otvoreno', 'dogovorili'],
      },
      { id: 'steps', label: 'Close with concrete steps', words: ['predlažem', 'do petka', 'tko'] },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-hypothetical',
    level: 'C1',
    title: 'Reason about what might have been',
    prompt:
      'Odluka je donesena prije pet godina i pokazala se lošom. Objasni što bi bilo da se odlučilo drukčije — i budi pošten o tome što se ne može znati.',
    promptEn:
      'A decision was taken five years ago and turned out badly. Explain what would have happened had it been decided differently — and be honest about what cannot be known.',
    minWords: 50,
    model:
      'Da smo tada zadržali vlastiti tim, danas vjerojatno ne bismo raspravljali o ovome. ' +
      'Znanje bi ostalo u kući, a svaka bi izmjena trajala dane umjesto tjedana. ' +
      'S druge strane, ne smijemo se pretvarati da bi sve bilo idealno: plaće bi bile veće i netko bi ionako otišao. ' +
      'Ono što se s ovoga mjesta jednostavno ne može znati jest bi li nas tržište uopće čekalo. ' +
      'Zato bih izbjegao zaključak da je odluka bila glupa; bila je razumljiva s informacijama koje smo tada imali. ' +
      'Pouka nije „nikad ne izdvajaj posao“, nego da ugovor mora predvidjeti izlaz.',
    modelEn:
      'Had we kept our own team then, we would probably not be discussing this today. ' +
      'The knowledge would have stayed in-house, and every change would have taken days instead of weeks. ' +
      'On the other hand, we must not pretend everything would have been ideal: salaries would have been higher and someone would have left anyway. ' +
      'What simply cannot be known from where we stand is whether the market would have waited for us at all. ' +
      'So I would avoid the conclusion that the decision was stupid; it was understandable with the information we had then. ' +
      'The lesson is not "never outsource", but that a contract must provide for an exit.',
    structures: [
      {
        hr: 'Da smo tada zadržali … ne bismo raspravljali',
        en: 'Had we kept … we would not be discussing',
        why: 'The counterfactual: "da" + past in the condition, conditional in the result. Using "ako" here would make it a real possibility.',
      },
      {
        hr: 'ne smijemo se pretvarati da bi sve bilo idealno',
        en: 'we must not pretend everything would have been ideal',
        why: 'Guarding your own hypothetical. Without this move, counterfactual reasoning is just wishful thinking.',
      },
      {
        hr: 'Ono što se … ne može znati jest',
        en: 'What cannot be known is',
        why: 'A nominalised clause as the subject, with "jest" for emphasis — the register that marks C1.',
      },
    ],
    rehearse: [
      {
        hr: 'Da smo tada odlučili drukčije, danas bismo bili u boljoj poziciji.',
        en: 'Had we decided differently then, we would be in a better position today.',
        why: 'The full counterfactual pair — "da" + past, then the conditional.',
      },
      {
        hr: 'Ne smijemo se pretvarati da bi sve bilo idealno.',
        en: 'We must not pretend everything would have been ideal.',
        why: 'A modal with a reflexive, then a conditional inside a da-clause.',
      },
      {
        hr: 'Ono što se ne može znati jest bi li tržište čekalo.',
        en: 'What cannot be known is whether the market would have waited.',
        why: 'Nominalised subject plus an embedded conditional question with "li".',
      },
    ],
    usefulPhrases: [
      'Da smo… ne bismo…',
      'Vjerojatno bi…',
      'Ne smijemo se pretvarati…',
      'Ono što se ne može znati…',
      'Pouka je…',
    ],
    checklist: [
      {
        id: 'counterfactual',
        label: 'Use "da" + past for the counterfactual',
        words: ['da smo', 'da je', 'bismo', 'bi '],
      },
      {
        id: 'honest',
        label: 'Say what cannot be known',
        words: ['ne može se znati', 'ne znamo', 'pretvarati'],
      },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-culture',
    level: 'C1',
    title: 'Compare two cultures without a cliché',
    prompt:
      'Usporedi kako se u dvjema sredinama koje poznaješ izražava neslaganje. Izbjegni stereotip i navedi konkretan primjer.',
    promptEn:
      'Compare how disagreement is expressed in two settings you know. Avoid stereotypes and give a concrete example.',
    minWords: 50,
    model:
      'Rekao bih da razlika nije u tome koliko su ljudi izravni, nego u tome gdje se neslaganje smije pokazati. ' +
      'Kad sam radio u Kanadi, naučio sam da se na sastanku klimne glavom, a prigovor stigne poslije, u poruci. ' +
      'Ovdje se prigovor iznese odmah, glasno, i nakon petnaest minuta svi zajedno idu na kavu. ' +
      'Meni je trebalo dosta vremena da shvatim kako to nije svađa nego način rada. ' +
      'Ono što se ovdje smatra iskrenošću, drugdje bi zvučalo bezobrazno, i obrnuto. ' +
      'Zato bih se čuvao ocjene koja je kultura pristojnija; pitanje je samo gdje se sukob obavlja.',
    modelEn:
      'I would say the difference is not in how direct people are, but in where disagreement is allowed to show. ' +
      'When I worked in Canada, I learned that you nod in the meeting, and the objection arrives afterwards, in a message. ' +
      'Here the objection is voiced immediately, loudly, and fifteen minutes later everyone goes for coffee together. ' +
      'It took me quite a while to grasp that this is not a quarrel but a way of working. ' +
      'What counts as honesty here would sound rude elsewhere, and the other way round. ' +
      'So I would be wary of judging which culture is more polite; the question is only where the conflict gets done.',
    structures: [
      {
        hr: 'nije u tome koliko … nego u tome gdje',
        en: 'is not in how much … but in where',
        why: 'The reframe again, this time across two embedded questions. It is what stops a comparison becoming a stereotype.',
      },
      {
        hr: 'Ono što se ovdje smatra iskrenošću',
        en: 'What counts as honesty here',
        why: '"smatrati" takes the instrumental for what something is counted AS: iskrenost → iskrenošću.',
      },
      {
        hr: 'bih se čuvao ocjene',
        en: 'I would be wary of judging',
        why: '"čuvati se" governs the genitive. Refusing the ranking is the honest end of a cultural comparison.',
      },
    ],
    rehearse: [
      {
        hr: 'Razlika nije u tome koliko su izravni, nego gdje to pokazuju.',
        en: 'The difference is not in how direct they are, but where they show it.',
        why: 'Two embedded questions inside a reframing pair.',
      },
      {
        hr: 'Ono što se ovdje smatra iskrenošću drugdje zvuči bezobrazno.',
        en: 'What counts as honesty here sounds rude elsewhere.',
        why: 'Instrumental after "smatrati" — the case English speakers never expect.',
      },
      {
        hr: 'Čuvao bih se ocjene koja je kultura bolja.',
        en: 'I would be wary of judging which culture is better.',
        why: 'Genitive after "čuvati se", plus an embedded question.',
      },
    ],
    usefulPhrases: [
      'Razlika nije u… nego u…',
      'Ono što se smatra…',
      'i obrnuto',
      'Čuvao bih se…',
      'Trebalo mi je vremena da…',
    ],
    checklist: [
      { id: 'example', label: 'Give a concrete example', words: ['primjer', 'kad sam', 'jednom'] },
      {
        id: 'nostereo',
        label: 'Refuse the easy ranking',
        words: ['obrnuto', 'čuvao', 'ne bih rekao'],
      },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-persuade',
    level: 'C1',
    title: 'Persuade a sceptical audience',
    prompt:
      'Uvjeri publiku koja ti ne vjeruje da vrijedi uložiti u nešto što se ne isplati odmah. Priznaj njihovu sumnju i ponudi provjerljiv korak.',
    promptEn:
      'Persuade a sceptical audience that something without an immediate payoff is worth investing in. Acknowledge their doubt and offer a verifiable step.',
    minWords: 50,
    model:
      'Ne tražim od vas da mi vjerujete na riječ, i razumijem zašto ste oprezni. ' +
      'Svaki ste put dosad čuli da će se ulaganje vratiti za godinu dana i svaki se put vratilo za tri. ' +
      'Zato ne obećavam brojku nego mjerilo: ako za šest mjeseci vrijeme obrade ne padne barem za petinu, projekt sami gasimo. ' +
      'Ono što tražim nije povjerenje, nego prostor da se pokaže. ' +
      'Svjestan sam da i to košta, i da svaki mjesec odgode netko drugi čeka na red. ' +
      'Ali odluka da se ništa ne mijenja također je odluka, samo je nitko ne mora braniti.',
    modelEn:
      'I am not asking you to take my word for it, and I understand why you are cautious. ' +
      'Every time so far you have been told the investment would pay back in a year, and every time it took three. ' +
      'So I am not promising a figure but a measure: if processing time has not fallen by at least a fifth in six months, we shut the project down ourselves. ' +
      'What I am asking for is not trust, but room to prove it. ' +
      'I am aware that costs something too, and that every month of delay means someone else waits their turn. ' +
      'But the decision to change nothing is also a decision — only nobody has to defend it.',
    structures: [
      {
        hr: 'Ne tražim od vas da mi vjerujete na riječ',
        en: 'I am not asking you to take my word for it',
        why: '"tražiti od" + genitive for the person, then a "da" clause for what you ask. Naming what you are NOT asking for lowers the guard.',
      },
      {
        hr: 'ne obećavam brojku nego mjerilo',
        en: 'I am not promising a figure but a measure',
        why: 'Replacing a promise with a test is the strongest move available to a distrusted speaker.',
      },
      {
        hr: 'odluka da se ništa ne mijenja također je odluka',
        en: 'the decision to change nothing is also a decision',
        why: 'A nominalised clause as the subject. It refuses the audience their neutral option without accusing anyone.',
      },
    ],
    rehearse: [
      {
        hr: 'Ne tražim od vas da mi vjerujete na riječ.',
        en: 'I am not asking you to take my word for it.',
        why: 'Genitive after "od", dative clitic inside the da-clause.',
      },
      {
        hr: 'Ne obećavam brojku, nego mjerilo.',
        en: 'I am not promising a figure, but a measure.',
        why: '"nego" after a negative, with two accusative objects.',
      },
      {
        hr: 'Odluka da se ništa ne mijenja također je odluka.',
        en: 'The decision to change nothing is also a decision.',
        why: 'A nominalised subject with a reflexive verb inside it.',
      },
    ],
    usefulPhrases: [
      'Ne tražim da…',
      'Razumijem zašto…',
      'Ne obećavam… nego…',
      'Svjestan sam da…',
      'Ako se ne dogodi…, gasimo.',
    ],
    checklist: [
      {
        id: 'doubt',
        label: 'Acknowledge their doubt',
        words: ['razumijem', 'oprezni', 'svjestan'],
      },
      {
        id: 'test',
        label: 'Offer a verifiable test',
        words: ['ako', 'mjerilo', 'šest mjeseci', 'gasimo'],
      },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-evidence',
    level: 'C1',
    title: 'Question someone’s evidence',
    prompt:
      'Netko iznosi zaključak na temelju jednog istraživanja. Ne odbaci ga, nego ispitaj što podaci zapravo pokazuju i što iz njih ne slijedi.',
    promptEn:
      'Someone draws a conclusion from a single study. Do not dismiss it — examine what the data actually show and what does not follow from them.',
    minWords: 50,
    model:
      'Ne osporavam podatke, zanima me samo što iz njih smijemo zaključiti. ' +
      'Istraživanje na koje se pozivate obuhvatilo je jedan grad i jednu dobnu skupinu. ' +
      'Iz toga slijedi da se u toj skupini nešto promijenilo; ne slijedi da je uzrok mjera koju branite. ' +
      'Postoji barem jedno jednostavnije objašnjenje: u istom je razdoblju otvorena nova linija, pa se promijenilo tko uopće dolazi. ' +
      'Da bismo razlikovali to dvoje, trebala bi nam usporedba s gradom u kojem mjere nije bilo. ' +
      'Ne tvrdim da griješite — tvrdim da zasad ne možemo znati tko je u pravu, a to nije isto.',
    modelEn:
      'I am not disputing the data, I only want to know what we may conclude from them. ' +
      'The study you cite covered one city and one age group. ' +
      'It follows that something changed in that group; it does not follow that the cause is the measure you are defending. ' +
      'There is at least one simpler explanation: a new line opened in the same period, so who comes at all has changed. ' +
      'To distinguish the two, we would need a comparison with a city where the measure was not in place. ' +
      'I am not claiming you are wrong — I am claiming that for now we cannot know who is right, and that is not the same thing.',
    structures: [
      {
        hr: 'Iz toga slijedi da … ne slijedi da',
        en: 'It follows that … it does not follow that',
        why: 'The precise instrument for separating a finding from its interpretation. "iz" + genitive.',
      },
      {
        hr: 'Istraživanje na koje se pozivate',
        en: 'The study you cite',
        why: 'A relative clause where the preposition governs the pronoun: "pozivati se na" + accusative → na koje.',
      },
      {
        hr: 'Da bismo razlikovali to dvoje, trebala bi nam usporedba',
        en: 'To distinguish the two, we would need a comparison',
        why: '"da bismo" + past participle is the purpose clause. Then Croatian says the comparison would be needed TO us.',
      },
    ],
    rehearse: [
      {
        hr: 'Iz toga ne slijedi da je uzrok upravo ta mjera.',
        en: 'It does not follow that the cause is that very measure.',
        why: 'Genitive after "iz", then a da-clause — the sentence that separates data from conclusion.',
      },
      {
        hr: 'Istraživanje na koje se pozivate obuhvatilo je jedan grad.',
        en: 'The study you cite covered one city.',
        why: 'A relative clause governed by the verb’s own preposition.',
      },
      {
        hr: 'Da bismo to razlikovali, trebala bi nam usporedba.',
        en: 'To distinguish that, we would need a comparison.',
        why: 'Purpose clause with "da bismo", plus a dative of the person who needs.',
      },
    ],
    usefulPhrases: [
      'Ne osporavam…',
      'Iz toga slijedi…',
      'Iz toga ne slijedi…',
      'Postoji jednostavnije objašnjenje…',
      'To nije isto.',
    ],
    checklist: [
      {
        id: 'grant',
        label: 'Grant what the data do show',
        words: ['ne osporavam', 'slijedi da', 'točno'],
      },
      {
        id: 'limit',
        label: 'Say what does not follow',
        words: ['ne slijedi', 'ne možemo znati', 'objašnjenje'],
      },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-presentation',
    level: 'C1',
    title: 'Open and close a presentation',
    prompt:
      'Održi početak i kraj stručnog izlaganja: najavi strukturu, reci zašto je tema važna sada i zaključi s jednom porukom.',
    promptEn:
      'Deliver the opening and closing of a professional talk: announce the structure, say why the topic matters now, and close with one message.',
    minWords: 50,
    model:
      'Zahvaljujem na pozivu. U sljedećih dvadeset minuta izložit ću tri stvari: što se promijenilo, zašto nas se to tiče i što predlažemo. ' +
      'Prije nego što krenem, jedna napomena: brojke koje ćete vidjeti odnose se na prošlu godinu, novije još nemamo. ' +
      'Tema je aktualna upravo sada jer se propis mijenja u siječnju, a odluku moramo donijeti prije toga. ' +
      'Zaključno bih istaknuo samo jedno. ' +
      'Rasprava se dosad vodila o troškovima, a pravo je pitanje koliko nas stoji to što ne odlučujemo. ' +
      'Hvala na pažnji, rado ću odgovoriti na pitanja.',
    modelEn:
      'Thank you for the invitation. In the next twenty minutes I will set out three things: what has changed, why it concerns us and what we propose. ' +
      'Before I start, one caveat: the figures you will see relate to last year, we do not have newer ones yet. ' +
      'The topic is current precisely now because the regulation changes in January, and we have to decide before then. ' +
      'In closing I would highlight only one thing. ' +
      'The discussion has so far been about costs, whereas the real question is what NOT deciding is costing us. ' +
      'Thank you for your attention, I will gladly take questions.',
    structures: [
      {
        hr: 'izložit ću tri stvari',
        en: 'I will set out three things',
        why: 'Announcing the count up front. The listener can now follow you instead of guessing where you are.',
      },
      {
        hr: 'brojke … odnose se na prošlu godinu',
        en: 'the figures relate to last year',
        why: '"odnositi se na" + accusative. Stating the limit of your own data before anyone asks is what earns trust.',
      },
      {
        hr: 'Zaključno bih istaknuo samo jedno',
        en: 'In closing I would highlight only one thing',
        why: 'A closing marker plus a conditional. One message is remembered; five are not.',
      },
    ],
    rehearse: [
      {
        hr: 'U sljedećih dvadeset minuta izložit ću tri stvari.',
        en: 'In the next twenty minutes I will set out three things.',
        why: 'Genitive plural after the number, and the contracted future.',
      },
      {
        hr: 'Brojke se odnose na prošlu godinu.',
        en: 'The figures relate to last year.',
        why: 'Accusative after "odnositi se na", with the clitic in second position.',
      },
      {
        hr: 'Zaključno bih istaknuo samo jedno.',
        en: 'In closing I would highlight only one thing.',
        why: 'The formal closing frame with a conditional.',
      },
    ],
    usefulPhrases: [
      'Zahvaljujem na pozivu.',
      'Izložit ću tri stvari…',
      'Jedna napomena…',
      'Zaključno bih istaknuo…',
      'Hvala na pažnji.',
    ],
    checklist: [
      {
        id: 'structure',
        label: 'Announce the structure',
        words: ['tri', 'prvo', 'izložit', 'dijela'],
      },
      {
        id: 'message',
        label: 'Close with one message',
        words: ['zaključno', 'pravo je pitanje', 'jedno'],
      },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },
  {
    id: 'c1-abstract',
    level: 'C1',
    title: 'Talk about an abstract idea',
    prompt:
      'Objasni što za tebe znači „dom“ ako si odrastao između dviju zemalja. Definiraj pojam, ograniči ga i daj primjer.',
    promptEn:
      'Explain what "home" means to you if you grew up between two countries. Define the idea, limit it and give an example.',
    minWords: 50,
    model:
      'Dom za mene odavno nije mjesto na karti, nego skup navika koje nosim sa sobom. ' +
      'Kažem to oprezno, jer takva definicija zvuči zgodno dok ne dođe trenutak da ti netko zatreba u tri ujutro. ' +
      'Tada se pokaže da je dom ipak vezan uz ljude, a ljudi imaju adresu. ' +
      'Kad sam prvi put došao u Split nakon dvadeset godina, nisam osjetio ganuće nego nešto mirnije: prepoznavanje. ' +
      'Znao sam gdje se skreće prije nego što sam vidio ulicu. ' +
      'Možda je dom upravo to — mjesto na kojem ti tijelo zna put prije nego što se glava sjeti.',
    modelEn:
      'For me home has long since not been a place on a map, but a set of habits I carry with me. ' +
      'I say that cautiously, because such a definition sounds neat until the moment comes when you need someone at three in the morning. ' +
      'Then it turns out that home is tied to people after all, and people have an address. ' +
      'When I came to Split for the first time after twenty years, I did not feel emotion but something quieter: recognition. ' +
      'I knew where to turn before I saw the street. ' +
      'Perhaps home is exactly that — the place where your body knows the way before your head remembers.',
    structures: [
      {
        hr: 'nije mjesto na karti, nego skup navika',
        en: 'is not a place on a map, but a set of habits',
        why: 'Defining by contrast. "skup" then governs the genitive plural: navike → navika.',
      },
      {
        hr: 'Kažem to oprezno, jer',
        en: 'I say that cautiously, because',
        why: 'Marking your own claim as provisional. At C1 the hedge is part of the thought, not a weakness in it.',
      },
      {
        hr: 'nisam osjetio ganuće nego nešto mirnije',
        en: 'I did not feel emotion but something quieter',
        why: '"nego" after a negative, then a comparative used as a noun — the precise word instead of the big one.',
      },
    ],
    rehearse: [
      {
        hr: 'Dom nije mjesto na karti, nego skup navika.',
        en: 'Home is not a place on a map, but a set of habits.',
        why: 'The definitional contrast with a genitive plural after "skup".',
      },
      {
        hr: 'Kažem to oprezno, jer definicija zvuči zgodno.',
        en: 'I say that cautiously, because the definition sounds neat.',
        why: 'Hedging your own claim, then giving the reason.',
      },
      {
        hr: 'Znao sam gdje se skreće prije nego što sam vidio ulicu.',
        en: 'I knew where to turn before I saw the street.',
        why: 'An impersonal "se" inside an embedded question, then a time clause.',
      },
    ],
    usefulPhrases: [
      'Za mene to znači…',
      'Kažem to oprezno…',
      'Tada se pokaže da…',
      'nego nešto…',
      'Možda je upravo to…',
    ],
    checklist: [
      { id: 'define', label: 'Define the idea', words: ['znači', 'nije', 'nego'] },
      { id: 'limit', label: 'Limit your own definition', words: ['oprezno', 'ipak', 'možda'] },
      { id: 'len', label: 'Speak at least 50 words', minWords: 50 },
    ],
  },

  // ── C2 — nuance and register play ───────────────────────────────────────────
  {
    id: 'c2-nuance',
    level: 'C2',
    title: 'Hold a position with precision',
    prompt:
      'Zauzmi stav o pitanju o kojem se ne slažeš ni s jednom stranom u potpunosti. Reci točno koliko se slažeš, s čime, i gdje prestaje tvoje slaganje.',
    promptEn:
      'Take a position on a question where you fully agree with neither side. Say exactly how far you agree, with what, and where your agreement stops.',
    minWords: 60,
    model:
      'Slažem se utoliko ukoliko govorimo o javnom prostoru; čim se rasprava premjesti na privatno vlasništvo, prestajem se slagati. ' +
      'Doduše, valja priznati da granica između to dvoje danas nije ni izbliza tako jasna kao prije trideset godina. ' +
      'Naime, veći dio onoga što doživljavamo kao trg zapravo je u nečijem vlasništvu, a mi to primijetimo tek kad nas netko zamoli da odemo. ' +
      'Ne bih zato rekao da su zagovornici propisa u krivu, nego da im je opis stvarnosti stariji od stvarnosti. ' +
      'Moje se neslaganje, dakle, ne odnosi na cilj nego na instrument. ' +
      'Štoviše, bojim se da bi predloženo rješenje učvrstilo upravo ono stanje protiv kojega je zamišljeno.',
    modelEn:
      'I agree in so far as we are talking about public space; the moment the discussion moves to private property, I stop agreeing. ' +
      'Admittedly, one must concede that the line between the two is nowhere near as clear today as it was thirty years ago. ' +
      'Namely, most of what we experience as a square is in fact in someone’s ownership, and we only notice when somebody asks us to leave. ' +
      'I would therefore not say that the advocates of the regulation are wrong, but that their description of reality is older than reality. ' +
      'My disagreement, then, is not with the goal but with the instrument. ' +
      'What is more, I am afraid the proposed solution would entrench precisely the state of affairs it is meant to work against.',
    structures: [
      {
        hr: 'utoliko ukoliko',
        en: 'in so far as',
        why: 'The correlative pair that measures agreement instead of declaring it. Nothing else in Croatian does this job as exactly.',
      },
      {
        hr: 'Doduše, valja priznati',
        en: 'Admittedly, one must concede',
        why: '"doduše" concedes without retreating, and impersonal "valja" keeps the concession from sounding personal.',
      },
      {
        hr: 'ne odnosi na cilj nego na instrument',
        en: 'is not with the goal but with the instrument',
        why: 'The finest distinction available in a disagreement — and the one that keeps you in the conversation.',
      },
    ],
    rehearse: [
      {
        hr: 'Slažem se utoliko ukoliko govorimo o javnom prostoru.',
        en: 'I agree in so far as we are talking about public space.',
        why: 'The correlative pair with a locative clause after it.',
      },
      {
        hr: 'Doduše, granica nije tako jasna kao prije.',
        en: 'Admittedly, the line is not as clear as it was.',
        why: 'Concessive adverb plus a comparison with "kao".',
      },
      {
        hr: 'Moje se neslaganje ne odnosi na cilj nego na instrument.',
        en: 'My disagreement is not with the goal but with the instrument.',
        why: 'Reflexive verb with the clitic in second position, then "nego" after the negative.',
      },
    ],
    usefulPhrases: [
      'utoliko ukoliko',
      'Doduše…',
      'Naime…',
      'Štoviše…',
      'Ne bih rekao da… nego da…',
    ],
    checklist: [
      { id: 'degree', label: 'Say how far you agree', words: ['utoliko', 'donekle', 'djelomično'] },
      { id: 'limit', label: 'Say where the agreement stops', words: ['čim', 'prestajem', 'nego'] },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-irony',
    level: 'C2',
    title: 'Use understatement and make it land',
    prompt:
      'Komentiraj situaciju koja je otišla po zlu, ali bez izravne kritike: koristi ironiju ili blagu izjavu i pazi da ne ispadneš zloban.',
    promptEn:
      'Comment on a situation that went badly, but without direct criticism: use irony or understatement, and take care not to sound spiteful.',
    minWords: 60,
    model:
      'Rekao bih da je projekt završio umjereno uspješno, ako pod uspjehom podrazumijevamo to da je uopće završio. ' +
      'Rokovi su, doduše, ispoštovani — samo ne oni iz ugovora, nego oni koje smo poslije izmislili. ' +
      'Nisam siguran je li itko računao da će nas najviše vremena stajati sastanci o tome kako uštedjeti vrijeme. ' +
      'Pritom nikoga ne krivim; svatko je od nas u nekom trenutku predložio još jedan sastanak. ' +
      'Ono što me stvarno zabrinjava nije ovaj projekt nego to koliko nam je brzo postao normalan. ' +
      'Ako se ništa ne promijeni, sljedeći ćemo put biti brži — u izmišljanju rokova.',
    modelEn:
      'I would say the project finished moderately successfully, if by success we mean that it finished at all. ' +
      'The deadlines were, admittedly, respected — only not the ones in the contract, but the ones we invented afterwards. ' +
      'I am not sure anyone reckoned that what would cost us the most time would be meetings about how to save time. ' +
      'I blame nobody in this; every one of us at some point proposed one more meeting. ' +
      'What really worries me is not this project but how quickly it became normal to us. ' +
      'If nothing changes, next time we will be faster — at inventing deadlines.',
    structures: [
      {
        hr: 'ako pod uspjehom podrazumijevamo',
        en: 'if by success we mean',
        why: 'Irony in Croatian works by redefining the term, not by exaggerating. "pod" + instrumental.',
      },
      {
        hr: 'Pritom nikoga ne krivim',
        en: 'I blame nobody in this',
        why: 'The safety line. Without it, understatement reads as contempt — and the point is lost with it.',
      },
      {
        hr: 'nije ovaj projekt nego to koliko nam je brzo postao normalan',
        en: 'is not this project but how quickly it became normal to us',
        why: 'Turning from the joke to the real claim. The irony was the way in; this is what you came to say.',
      },
    ],
    rehearse: [
      {
        hr: 'Projekt je završio umjereno uspješno, ako to nazivamo uspjehom.',
        en: 'The project finished moderately successfully, if we call that success.',
        why: 'Understatement plus a conditional redefinition.',
      },
      {
        hr: 'Rokovi su ispoštovani, samo ne oni iz ugovora.',
        en: 'The deadlines were respected, only not the ones in the contract.',
        why: 'A passive participle agreeing with a plural subject, then the turn.',
      },
      {
        hr: 'Pritom nikoga ne krivim.',
        en: 'I blame nobody in this.',
        why: 'Double negation, which Croatian requires: nikoga AND ne.',
      },
    ],
    usefulPhrases: [
      'ako pod tim podrazumijevamo',
      'doduše',
      'Pritom…',
      'Nisam siguran je li…',
      'Ono što me zabrinjava…',
    ],
    checklist: [
      {
        id: 'indirect',
        label: 'Criticise without accusing',
        words: ['doduše', 'ako', 'nisam siguran'],
      },
      {
        id: 'safe',
        label: 'Keep it from turning spiteful',
        words: ['nikoga ne krivim', 'svatko', 'pritom'],
      },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-synthesise',
    level: 'C2',
    title: 'Synthesise several sources aloud',
    prompt:
      'Tri izvora govore o istoj temi i ne slažu se. Sažmi ih, pokaži gdje se točno razilaze i reci što se iz svega zajedno može zaključiti.',
    promptEn:
      'Three sources address the same topic and disagree. Summarise them, show exactly where they diverge and say what can be concluded from all of them together.',
    minWords: 60,
    model:
      'Sva tri izvora slažu se oko činjenice: broj učenika pada već desetljeće. ' +
      'Razilaze se, međutim, u tome što ta činjenica znači. ' +
      'Ministarstvo je tumači kao demografski problem koji škola ne može riješiti; sindikat kao posljedicu ulaganja, odnosno neulaganja; a istraživanje sa sveučilišta uopće ne nudi uzrok, nego upozorava da su podaci po županijama neusporedivi. ' +
      'Meni je posljednja tvrdnja najvažnija, jer ako mjerimo različite stvari, prve se dvije ni ne mogu razriješiti. ' +
      'Zaključak koji bih izveo skromniji je nego što bi svi željeli: prije rasprave o uzroku potrebna nam je jedinstvena metodologija. ' +
      'Dotad svaka strana citira brojku koja joj odgovara, i to posve iskreno.',
    modelEn:
      'All three sources agree on the fact: pupil numbers have been falling for a decade. ' +
      'They diverge, however, on what that fact means. ' +
      'The ministry reads it as a demographic problem the school system cannot solve; the union as a consequence of investment, or rather the lack of it; while the university study offers no cause at all, but warns that the county-level data are not comparable. ' +
      'To me the last claim matters most, because if we are measuring different things, the first two cannot even be settled. ' +
      'The conclusion I would draw is more modest than anyone would like: before any argument about causes we need a single methodology. ' +
      'Until then each side cites the figure that suits it, and does so entirely sincerely.',
    structures: [
      {
        hr: 'slažu se oko činjenice … Razilaze se, međutim, u tome što',
        en: 'agree on the fact … They diverge, however, on what',
        why: 'Separating the shared facts from the contested reading is the whole skill. "oko" + genitive, "u tome što" + clause.',
      },
      {
        hr: 'odnosno neulaganja',
        en: 'or rather the lack of it',
        why: '"odnosno" corrects your own word mid-sentence — precision performed out loud, which is exactly the C2 register.',
      },
      {
        hr: 'skromniji je nego što bi svi željeli',
        en: 'is more modest than anyone would like',
        why: 'Comparative with a full clause after "nego što". Naming the conclusion’s limits protects it.',
      },
    ],
    rehearse: [
      {
        hr: 'Sva se tri izvora slažu oko činjenice.',
        en: 'All three sources agree on the fact.',
        why: 'Genitive after "oko", with the clitic in second position after "sva".',
      },
      {
        hr: 'Razilaze se u tome što ta činjenica znači.',
        en: 'They diverge on what that fact means.',
        why: '"u tome što" introducing an embedded question.',
      },
      {
        hr: 'Zaključak je skromniji nego što bi svi željeli.',
        en: 'The conclusion is more modest than anyone would like.',
        why: 'A comparative with a conditional clause after "nego što".',
      },
    ],
    usefulPhrases: [
      'Slažu se oko…',
      'Razilaze se u tome što…',
      'odnosno',
      'Zaključak koji bih izveo…',
      'Dotad…',
    ],
    checklist: [
      { id: 'agree', label: 'Say what the sources share', words: ['slažu', 'zajedničko', 'svi'] },
      {
        id: 'diverge',
        label: 'Say exactly where they diverge',
        words: ['razilaze', 'međutim', 'dok'],
      },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-mediate',
    level: 'C2',
    title: 'Mediate between two people',
    prompt:
      'Dvoje kolega se posvađalo i oboje imaju pravo u nečemu. Prevedi jedno drugome što zapravo govore i predloži izlaz koji nitko ne gubi obraz.',
    promptEn:
      'Two colleagues have fallen out and each is right about something. Translate what each is actually saying to the other and propose a way out where nobody loses face.',
    minWords: 60,
    model:
      'Oboje ste u pravu, ali ne o istoj stvari, i mislim da je to cijeli problem. ' +
      'Ana kaže da je proces predugačak; ne kaže da netko loše radi. ' +
      'Marko brani sebe od optužbe koja, koliko čujem, nije ni izrečena. ' +
      'Kad bismo maknuli riječ „sporo“ i stavili „u pet koraka umjesto tri“, vjerujem da bi rasprava trajala dvije minute. ' +
      'Predlažem da se nitko od vas ne mora povući: uzmimo jedan konkretan zahtjev i prođimo ga zajedno, korak po korak. ' +
      'Ako se pokaže da su koraci nužni, Ana će to vidjeti; ako nisu, promijenit ćemo ih, i to bez ičijeg priznanja krivnje.',
    modelEn:
      'You are both right, but not about the same thing, and I think that is the whole problem. ' +
      'Ana is saying the process is too long; she is not saying anyone is doing a bad job. ' +
      'Marko is defending himself against an accusation which, as far as I can hear, was never made. ' +
      'If we removed the word "slow" and put "in five steps instead of three", I believe the discussion would last two minutes. ' +
      'I propose that neither of you has to back down: let us take one specific request and go through it together, step by step. ' +
      'If it turns out the steps are necessary, Ana will see that; if they are not, we will change them, and without anyone admitting fault.',
    structures: [
      {
        hr: 'Oboje ste u pravu, ali ne o istoj stvari',
        en: 'You are both right, but not about the same thing',
        why: 'The mediator’s opening. It gives both sides something before it takes anything away.',
      },
      {
        hr: 'Kad bismo maknuli … vjerujem da bi rasprava trajala',
        en: 'If we removed … I believe the discussion would last',
        why: 'A conditional pair that proposes a change without ordering anyone to make it.',
      },
      {
        hr: 'da se nitko od vas ne mora povući',
        en: 'that neither of you has to back down',
        why: 'Naming face explicitly. In a mediation the unsaid fear is that agreeing means losing.',
      },
    ],
    rehearse: [
      {
        hr: 'Oboje ste u pravu, ali ne o istoj stvari.',
        en: 'You are both right, but not about the same thing.',
        why: 'The collective numeral with the V-form plural and a locative.',
      },
      {
        hr: 'Marko se brani od optužbe koja nije ni izrečena.',
        en: 'Marko is defending himself against an accusation that was never even made.',
        why: '"braniti se od" + genitive, then a passive participle in a relative clause.',
      },
      {
        hr: 'Predlažem da se nitko ne mora povući.',
        en: 'I propose that nobody has to back down.',
        why: 'A da-clause with double negation and a reflexive verb.',
      },
    ],
    usefulPhrases: [
      'Oboje ste u pravu…',
      'Ono što zapravo kaže jest…',
      'Kad bismo…',
      'Predlažem da…',
      'korak po korak',
    ],
    checklist: [
      { id: 'both', label: 'Give both sides something', words: ['oboje', 'u pravu', 'obje'] },
      { id: 'face', label: 'Protect both from losing face', words: ['povući', 'krivnje', 'nitko'] },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-rebut',
    level: 'C2',
    title: 'Rebut an unexpected point',
    prompt:
      'Usred rasprave netko iznese argument koji nisi predvidio i koji zvuči jako. Ne izbjegavaj ga: preformuliraj ga pošteno, pa odgovori.',
    promptEn:
      'Mid-discussion someone makes an argument you did not anticipate and which sounds strong. Do not dodge it: restate it fairly, then answer.',
    minWords: 60,
    model:
      'Dopustite da prvo ponovim vaš argument, da ne odgovaram na nešto što niste rekli. ' +
      'Tvrdite da svako odgađanje ide u korist onima koji imaju vremena čekati, a to su, po vama, upravo oni kojima mjera nije ni namijenjena. ' +
      'To je jak argument i priznajem da nisam imao spreman odgovor. ' +
      'Vrijedio bi u potpunosti kad bi odgoda bila neodređena. ' +
      'Ono što predlažem, međutim, ima rok: šezdeset dana i objavljen kriterij, nakon čega odluka pada bez obzira na to jesu li podaci potpuni. ' +
      'Ako mislite da ni takav rok nije obvezujuć, to je onda rasprava o povjerenju u instituciju, a ne o samoj mjeri — i tu se, moram reći, ne bih s vama ozbiljno sporio.',
    modelEn:
      'Allow me first to restate your argument, so that I do not answer something you did not say. ' +
      'You claim that any delay benefits those who can afford to wait, and those, in your view, are precisely the people the measure is not intended for. ' +
      'That is a strong argument and I admit I did not have an answer ready. ' +
      'It would hold entirely if the delay were open-ended. ' +
      'What I am proposing, however, has a deadline: sixty days and a published criterion, after which the decision is taken regardless of whether the data are complete. ' +
      'If you think even such a deadline is not binding, then this is a discussion about trust in the institution rather than about the measure itself — and there, I have to say, I would not seriously argue with you.',
    structures: [
      {
        hr: 'Dopustite da prvo ponovim vaš argument',
        en: 'Allow me first to restate your argument',
        why: 'Restating the opponent before answering. It buys thinking time and makes a straw man impossible.',
      },
      {
        hr: 'Vrijedio bi u potpunosti kad bi odgoda bila neodređena',
        en: 'It would hold entirely if the delay were open-ended',
        why: 'Granting the argument’s validity under a condition you can then remove — a rebuttal that concedes rather than denies.',
      },
      {
        hr: 'to je onda rasprava o povjerenju … a ne o samoj mjeri',
        en: 'then this is a discussion about trust … rather than about the measure itself',
        why: 'Naming which argument you are actually having. Half of all disagreements end here.',
      },
    ],
    rehearse: [
      {
        hr: 'Dopustite da prvo ponovim vaš argument.',
        en: 'Allow me first to restate your argument.',
        why: 'A V-form imperative with a da-clause — the most useful sentence in any debate.',
      },
      {
        hr: 'Vrijedio bi kad bi odgoda bila neodređena.',
        en: 'It would hold if the delay were open-ended.',
        why: 'Both halves conditional, with "kad bi" rather than "ako".',
      },
      {
        hr: 'To je rasprava o povjerenju, a ne o mjeri.',
        en: 'This is a discussion about trust, not about the measure.',
        why: 'Two locatives after "o", with the contrastive "a ne".',
      },
    ],
    usefulPhrases: [
      'Dopustite da ponovim…',
      'Tvrdite da…',
      'To je jak argument…',
      'Vrijedilo bi kad bi…',
      'a ne o…',
    ],
    checklist: [
      {
        id: 'restate',
        label: 'Restate their argument fairly',
        words: ['ponovim', 'tvrdite', 'kažete'],
      },
      {
        id: 'concede',
        label: 'Say when it would hold',
        words: ['vrijedio bi', 'kad bi', 'priznajem'],
      },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-register',
    level: 'C2',
    title: 'Say the same thing twice, in two registers',
    prompt:
      'Prenesi istu poruku dvaput: jednom službeno, nekome na visokom položaju, i jednom prijatelju. Neka sadržaj bude isti, a sve ostalo drukčije.',
    promptEn:
      'Deliver the same message twice: once formally, to someone senior, and once to a friend. Keep the content identical and change everything else.',
    minWords: 60,
    model:
      'Službeno bi to zvučalo ovako. Poštovani, dopustite jednu primjedbu na predloženi raspored. ' +
      'Kako je predviđeno, dvije bi smjene bile pokrivene istim brojem ljudi, što u praksi znači da subotom nitko ne bi mogao uzeti slobodan dan. ' +
      'Molio bih da se to preispita prije objave. ' +
      'Prijatelju bih rekao ovo: čuj, ovaj raspored ne drži vodu. ' +
      'Ispada da subotom nitko ne može uzeti slobodno, a to nitko neće izdržati ni mjesec dana. ' +
      'Reci im prije nego što to objave, jer poslije se nitko neće htjeti vraćati na to. ' +
      'Poruka je ista; razlikuje se tko smije čuti da sam ljut.',
    modelEn:
      'Formally it would sound like this. Dear Sir or Madam, allow me one observation on the proposed schedule. ' +
      'As envisaged, two shifts would be covered by the same number of people, which in practice means that on Saturdays nobody would be able to take a day off. ' +
      'I would ask that this be reconsidered before publication. ' +
      'To a friend I would say this: listen, this schedule does not hold water. ' +
      'It turns out nobody can take Saturday off, and nobody will last a month like that. ' +
      'Tell them before they publish it, because afterwards nobody will want to reopen it. ' +
      'The message is the same; what differs is who is allowed to hear that I am angry.',
    structures: [
      {
        hr: 'Molio bih da se to preispita',
        en: 'I would ask that this be reconsidered',
        why: 'Conditional plus impersonal "se": nobody is asked, nobody is blamed, and the request is still unmistakable.',
      },
      {
        hr: 'ovaj raspored ne drži vodu',
        en: 'this schedule does not hold water',
        why: 'The same judgement as above, in an idiom. Register lives in the idioms, not only in the pronouns.',
      },
      {
        hr: 'razlikuje se tko smije čuti da sam ljut',
        en: 'what differs is who is allowed to hear that I am angry',
        why: 'The actual definition of register: not what you feel, but who is permitted to know it.',
      },
    ],
    rehearse: [
      {
        hr: 'Dopustite jednu primjedbu na predloženi raspored.',
        en: 'Allow me one observation on the proposed schedule.',
        why: 'V-form imperative with "na" + accusative and a passive participle.',
      },
      {
        hr: 'Molio bih da se to preispita prije objave.',
        en: 'I would ask that this be reconsidered before publication.',
        why: 'Conditional plus impersonal "se", then a genitive after "prije".',
      },
      {
        hr: 'Čuj, ovaj raspored ne drži vodu.',
        en: 'Listen, this schedule does not hold water.',
        why: 'The informal imperative and an idiom — the same content, a different room.',
      },
    ],
    usefulPhrases: ['Poštovani…', 'Dopustite…', 'Molio bih da se…', 'Čuj…', 'Ispada da…'],
    checklist: [
      {
        id: 'formal',
        label: 'Give the formal version',
        words: ['poštovani', 'dopustite', 'molio bih'],
      },
      { id: 'informal', label: 'Give the informal version', words: ['čuj', 'slušaj', 'reci im'] },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-farewell',
    level: 'C2',
    title: 'Speak at a farewell',
    prompt:
      'Kolega odlazi nakon mnogo godina. Govori kratko, konkretno i bez patetike: reci što odlazi s njim i što ostaje.',
    promptEn:
      'A colleague is leaving after many years. Speak briefly, concretely and without sentimentality: say what goes with them and what stays.',
    minWords: 60,
    model:
      'Neću govoriti o godinama službe jer bi to zvučalo kao da je riječ o brojci. ' +
      'Radili smo zajedno jedanaest godina i u tom se vremenu, koliko se sjećam, nijednom nije dogodilo da netko ostane bez odgovora dulje od dana. ' +
      'To zvuči malo dok ne radiš negdje gdje toga nema. ' +
      'S njim odlazi znanje koje nije zapisano nigdje osim u njegovoj glavi, i toga se, budimo iskreni, malo bojimo. ' +
      'Ostaje, međutim, navika koju nam je ostavio: da se problem najprije imenuje, pa tek onda raspravlja. ' +
      'Nemojmo mu obećavati da ćemo se čuti — nazovimo ga u utorak. Sretno, i hvala na svemu.',
    modelEn:
      'I will not talk about years of service, because it would sound as though this were about a number. ' +
      'We worked together for eleven years and in all that time, as far as I remember, it never once happened that anyone was left without an answer for more than a day. ' +
      'That sounds like a small thing until you work somewhere that does not have it. ' +
      'What goes with him is knowledge written down nowhere except in his head, and, let us be honest, we are a little afraid of that. ' +
      'What stays, however, is the habit he left us: to name the problem first and only then argue about it. ' +
      'Let us not promise to keep in touch — let us call him on Tuesday. Good luck, and thank you for everything.',
    structures: [
      {
        hr: 'Nemojmo mu obećavati',
        en: 'Let us not promise him',
        why: 'A negated imperative takes the IMPERFECTIVE verb — obećavati, never obećati. This is the rule that overrides everything you learned about aspect.',
      },
      {
        hr: 'toga se … malo bojimo',
        en: 'we are a little afraid of that',
        why: '"bojati se" governs the genitive: to → toga. Admitting the fear is what keeps the speech honest.',
      },
      {
        hr: 'S njim odlazi znanje … Ostaje, međutim, navika',
        en: 'What goes with him is knowledge … What stays, however, is the habit',
        why: 'The two-part frame that turns a farewell into a thought rather than a list of compliments.',
      },
    ],
    rehearse: [
      {
        hr: 'Nemojmo mu obećavati da ćemo se čuti.',
        en: 'Let us not promise him we will keep in touch.',
        why: 'The negated imperative with the imperfective — the aspect rule that reverses at "nemoj".',
      },
      {
        hr: 'Toga se malo bojimo.',
        en: 'We are a little afraid of that.',
        why: 'Genitive after "bojati se", with the clitic in second position.',
      },
      {
        hr: 'S njim odlazi znanje koje nije nigdje zapisano.',
        en: 'What goes with him is knowledge written down nowhere.',
        why: 'Instrumental after "s", then a relative clause with a passive participle.',
      },
    ],
    usefulPhrases: [
      'Neću govoriti o…',
      'Radili smo zajedno…',
      'S njim odlazi…',
      'Ostaje, međutim…',
      'Sretno.',
    ],
    checklist: [
      {
        id: 'concrete',
        label: 'Say one concrete thing, not adjectives',
        words: ['jednom', 'nikad', 'uvijek je', 'sjećam'],
      },
      { id: 'stays', label: 'Say what stays behind', words: ['ostaje', 'ostavio', 'navika'] },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
  {
    id: 'c2-distinction',
    level: 'C2',
    title: 'Defend a fine distinction',
    prompt:
      'Netko koristi dvije riječi kao da znače isto. Objasni razliku, pokaži gdje se ona vidi u praksi i priznaj kad je razlika nevažna.',
    promptEn:
      'Someone uses two words as if they meant the same. Explain the difference, show where it shows in practice, and admit when the difference does not matter.',
    minWords: 60,
    model:
      'Koristite „odgovornost“ i „krivnja“ kao istoznačnice, a mislim da nisu, i da nam upravo to zamagljuje raspravu. ' +
      'Krivnja gleda unatrag i traži tko je pogriješio; odgovornost gleda naprijed i pita tko će popraviti. ' +
      'Razlika se vidi u jednoj rečenici: mogu biti odgovoran za nešto što nisam skrivio, i to se događa svakom tko vodi ljude. ' +
      'U svakodnevnom govoru to razlikovanje najčešće nije važno i ne bih inzistirao na njemu za stolom. ' +
      'Postaje važno onog trenutka kad netko odbije preuzeti posao jer se boji da priznaje pogrešku. ' +
      'Tada, doduše, više nije riječ o riječima nego o tome tko će sutra ujutro nazvati klijenta.',
    modelEn:
      'You use "responsibility" and "blame" as synonyms, and I think they are not, and that this is precisely what clouds the discussion. ' +
      'Blame looks backwards and asks who erred; responsibility looks forward and asks who will fix it. ' +
      'The difference shows in one sentence: I can be responsible for something I did not cause, and that happens to everyone who leads people. ' +
      'In everyday speech the distinction usually does not matter and I would not insist on it at the dinner table. ' +
      'It becomes important the moment somebody refuses to take a job on because they fear it means admitting a mistake. ' +
      'At that point, admittedly, it is no longer about words but about who calls the client tomorrow morning.',
    structures: [
      {
        hr: 'Krivnja gleda unatrag … odgovornost gleda naprijed',
        en: 'Blame looks backwards … responsibility looks forward',
        why: 'A distinction is made with a parallel, not a definition. Two clauses of the same shape make the difference audible.',
      },
      {
        hr: 'mogu biti odgovoran za nešto što nisam skrivio',
        en: 'I can be responsible for something I did not cause',
        why: 'The one sentence that could not be said if the two words meant the same. That is what proves a distinction.',
      },
      {
        hr: 'ne bih inzistirao na njemu za stolom',
        en: 'I would not insist on it at the dinner table',
        why: 'Conceding where your own distinction stops mattering. Without this, precision becomes pedantry.',
      },
    ],
    rehearse: [
      {
        hr: 'Krivnja gleda unatrag, a odgovornost naprijed.',
        en: 'Blame looks backwards, responsibility forwards.',
        why: 'The parallel structure with "a" for contrast — and the second verb left out.',
      },
      {
        hr: 'Mogu biti odgovoran za nešto što nisam skrivio.',
        en: 'I can be responsible for something I did not cause.',
        why: 'Accusative after "za", then a relative clause in the past negative.',
      },
      {
        hr: 'Ne bih inzistirao na tome za stolom.',
        en: 'I would not insist on it at the dinner table.',
        why: '"inzistirati na" + locative, in the conditional.',
      },
    ],
    usefulPhrases: [
      'nisu istoznačnice',
      'gleda unatrag / naprijed',
      'Razlika se vidi u…',
      'Ne bih inzistirao…',
      'Postaje važno kad…',
    ],
    checklist: [
      {
        id: 'parallel',
        label: 'Draw the distinction with a parallel',
        words: ['a ', 'dok', 'unatrag', 'naprijed'],
      },
      {
        id: 'concede',
        label: 'Say when it does not matter',
        words: ['nije važno', 'ne bih inzistirao', 'doduše'],
      },
      { id: 'len', label: 'Speak at least 60 words', minWords: 60 },
    ],
  },
];

/** Units for one CEFR level, in authored order (concrete → social). */
export function speakingUnitsForLevel(level: CefrLevel): SpeakingUnit[] {
  return SPEAKING_CURRICULUM.filter((u) => u.level === level);
}
