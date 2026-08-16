// src/data/writingTasks.ts
//
// Written-production tasks for the CEFR Level Check (Phase 1 mastery gate,
// 2026-08-16). A check that grants B1+ status administers ONE writing task at
// the difficulty of the level whose competency it measures (the set's
// levelFrom), mirroring how the speaking section is levelled. Scored via
// /api/correct mode 'writeeval' (0–100, normalised to 0..1 by the exam
// screen) — the same evaluator WritingScreen practice uses, so exam and
// practice agree on what "good writing" means.
//
// Croatian prompt text follows the content-authoring standard (štokavski,
// full diacritics, V-form politeness where register calls for it).

import type { CefrLevel } from '../lib/cefr.js';

export interface WritingTask {
  id: string;
  /** Task instruction shown to the learner, in Croatian. */
  prompt: string;
  /** English rendering of the instruction. */
  promptEn: string;
  /** Minimum word count before the response can be submitted. */
  minWords: number;
}

/** Tasks keyed by the DIFFICULTY level they measure (the check's levelFrom). */
export const WRITING_TASKS: Partial<Record<CefrLevel, WritingTask[]>> = {
  A2: [
    {
      id: 'a2-w1',
      prompt:
        'Napišite kratku poruku prijatelju: pozovite ga na ručak u subotu. Napišite gdje se nalazite, u koliko sati i što ćete jesti.',
      promptEn:
        'Write a short message to a friend: invite them to lunch on Saturday. Say where you will meet, at what time, and what you will eat.',
      minWords: 30,
    },
    {
      id: 'a2-w2',
      prompt:
        'Opišite svoj uobičajeni dan: kada ustajete, što radite ujutro, poslijepodne i navečer. Koristite barem pet različitih glagola.',
      promptEn:
        'Describe your typical day: when you get up, what you do in the morning, afternoon and evening. Use at least five different verbs.',
      minWords: 30,
    },
    {
      id: 'a2-w3',
      prompt:
        'Napišite razglednicu s putovanja: gdje ste, kakvo je vrijeme, što ste danas vidjeli i kada se vraćate kući.',
      promptEn:
        'Write a postcard from a trip: where you are, what the weather is like, what you saw today, and when you are coming home.',
      minWords: 30,
    },
  ],
  B1: [
    {
      id: 'b1-w1',
      prompt:
        'Prošli ste vikend posjetili grad koji vam se jako svidio. Napišite e-poruku prijateljici: opišite što ste vidjeli, što vas je iznenadilo i zašto biste joj preporučili da i ona ode onamo.',
      promptEn:
        'Last weekend you visited a city you really liked. Write an email to a friend: describe what you saw, what surprised you, and why you would recommend she go there too.',
      minWords: 60,
    },
    {
      id: 'b1-w2',
      prompt:
        'Vaš susjed svira bubnjeve svaku večer do ponoći. Napišite mu pristojnu poruku: objasnite problem, kako utječe na vas i predložite rješenje koje bi odgovaralo objema stranama.',
      promptEn:
        'Your neighbour plays the drums every evening until midnight. Write him a polite message: explain the problem, how it affects you, and propose a solution that would suit both sides.',
      minWords: 60,
    },
    {
      id: 'b1-w3',
      prompt:
        'Vaš grad traži prijedloge građana za uređenje starog parka. Napišite prijedlog: opišite sadašnje stanje, predložite dvije konkretne promjene i objasnite kome bi one koristile.',
      promptEn:
        'Your city is collecting citizens’ proposals for renovating the old park. Write a proposal: describe the current state, suggest two concrete changes, and explain who would benefit.',
      minWords: 60,
    },
  ],
  B2: [
    {
      id: 'b2-w1',
      prompt:
        'Sve više mladih iz Hrvatske odlazi raditi u inozemstvo. Napišite kratak osvrt: iznesite dva razloga za odlazak i dva argumenta zašto bi ostanak mogao biti bolji izbor, pa zaključite vlastitim mišljenjem.',
      promptEn:
        'More and more young people are leaving Croatia to work abroad. Write a short reflection: give two reasons for leaving and two arguments why staying might be the better choice, then close with your own opinion.',
      minWords: 90,
    },
    {
      id: 'b2-w2',
      prompt:
        'Naručili ste proizvod preko interneta, a stigao je oštećen. Napišite službenu pritužbu trgovini: opišite što se dogodilo, što ste dosad poduzeli i što očekujete kao rješenje. Pazite na formalni ton.',
      promptEn:
        'You ordered a product online and it arrived damaged. Write a formal complaint to the shop: describe what happened, what you have done so far, and what you expect as a resolution. Mind the formal register.',
      minWords: 90,
    },
    {
      id: 'b2-w3',
      prompt:
        'Prijavljujete se za posao u hrvatskoj tvrtki. Napišite motivacijsko pismo: predstavite se, istaknite dva relevantna iskustva i objasnite zašto želite raditi upravo ondje. Pazite na formalni ton.',
      promptEn:
        'You are applying for a job at a Croatian company. Write a motivation letter: introduce yourself, highlight two relevant experiences, and explain why you want to work there. Mind the formal register.',
      minWords: 90,
    },
  ],
  C1: [
    {
      id: 'c1-w1',
      prompt:
        '„Tehnologija zbližava ljude koliko ih i udaljava." Napišite argumentirani esej: razradite obje strane tvrdnje, potkrijepite ih primjerima iz vlastitog iskustva ili javnog života te oblikujte jasan zaključak.',
      promptEn:
        '"Technology brings people together as much as it drives them apart." Write an argumentative essay: develop both sides of the claim, support them with examples from your own experience or public life, and form a clear conclusion.',
      minWords: 120,
    },
    {
      id: 'c1-w2',
      prompt:
        'Gradska uprava planira ukinuti besplatne programe u knjižnicama zbog štednje. Napišite otvoreno pismo gradonačelniku u kojem se tome protivite: iznesite posljedice odluke, ponudite alternativu i pozovite na javnu raspravu.',
      promptEn:
        'The city government plans to cut free library programmes to save money. Write an open letter to the mayor opposing this: lay out the consequences of the decision, offer an alternative, and call for a public debate.',
      minWords: 120,
    },
    {
      id: 'c1-w3',
      prompt:
        'Pročitali ste tvrdnju da društvene mreže mladima štete više nego što im koriste. Napišite osvrt za studentski časopis: zauzmite jasan stav, predvidite najjači protuargument i odgovorite na njega.',
      promptEn:
        'You have read the claim that social media harms young people more than it benefits them. Write a piece for a student magazine: take a clear position, anticipate the strongest counter-argument, and answer it.',
      minWords: 120,
    },
  ],
  C2: [
    {
      id: 'c2-w1',
      prompt:
        'Odaberite hrvatsku poslovicu koja po vašem mišljenju najbolje sažima odnos Hrvata prema obitelji. Napišite esej u kojem je tumačite, smještate u kulturni kontekst i propitujete vrijedi li još u suvremenom društvu.',
      promptEn:
        'Choose a Croatian proverb that in your view best captures Croatians’ relationship to family. Write an essay interpreting it, placing it in cultural context, and questioning whether it still holds in contemporary society.',
      minWords: 150,
    },
    {
      id: 'c2-w2',
      prompt:
        'Uredništvo vas je zamolilo za kritički osvrt na suvremeni hrvatski film ili roman po vašem izboru. Napišite recenziju: smjestite djelo u kontekst, ocijenite njegove domete i stilske postupke te obrazložite konačan sud.',
      promptEn:
        'An editorial board has asked you for a critical review of a contemporary Croatian film or novel of your choice. Write the review: place the work in context, assess its achievements and stylistic devices, and justify your final judgement.',
      minWords: 150,
    },
    {
      id: 'c2-w3',
      prompt:
        '„Jezik je jedina domovina.“ Napišite esej u kojem tu misao potvrđujete, osporavate ili preoblikujete, oslanjajući se na vlastito iskustvo dvojezičnosti ili života između kultura.',
      promptEn:
        '“Language is the only homeland.” Write an essay confirming, contesting or reshaping this thought, drawing on your own experience of bilingualism or life between cultures.',
      minWords: 150,
    },
  ],
};

/** Deterministic-enough pick for exams: uses the provided rng (0..1). */
export function pickWritingTask(
  level: CefrLevel,
  rng: () => number = Math.random,
): WritingTask | null {
  const bank = WRITING_TASKS[level];
  if (!bank || bank.length === 0) return null;
  return bank[Math.floor(rng() * bank.length) % bank.length] ?? null;
}
