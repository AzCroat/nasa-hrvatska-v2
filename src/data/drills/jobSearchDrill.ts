// src/data/drills/jobSearchDrill.ts
//
// B1 APPLYING FOR A JOB — the drill for the `job-interview` lesson.
//
// The structure is the past participle, and this is the first place a learner
// has to get it right about THEMSELVES in a document somebody else will read.
// *Radio sam* if you are a man, *radila sam* if you are a woman — and the same
// for *diplomirao / diplomirala*, *bio / bila*, *završio / završila*. A CV is
// wall-to-wall past participles about one person, so a single wrong ending is
// not a slip; it is visible on every line.
//
// Two lexical traps carry real weight here. A CV is a *životopis*, not a
// *biografija* — a biografija is a book about somebody's life. And the covering
// letter is a *zamolba* or *motivacijsko pismo*.
//
// The third piece is what an interview answer is made of: a reason. *Javljam se
// jer…*, *zbog…*, *kako bih…* — an answer with no reason attached reads as
// evasive rather than modest.
//
// Three modes:
//   papiri  — životopis, zamolba, natječaj
//   particip — the participle agreeing with you
//   intervju — the questions, and answering with a reason

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const JOB_SEARCH_MODE_LABELS: Record<string, string> = {
  papiri: '📑 Životopis',
  particip: '🧍 Radio ili radila',
  intervju: '🎤 Razgovor',
};

export const JOB_SEARCH_DRILL_DATA: ModeDrillItem[] = [
  // ── papiri ────────────────────────────────────────────────────────────────
  {
    mode: 'papiri',
    q: 'Kako se na hrvatskom kaže "CV"?',
    en: 'CV',
    opts: ['životopis', 'biografija', 'osobni list', 'prijavnica'],
    answer: 'životopis',
    tip: 'Biografija is a book about someone’s life, not a document you send.',
  },
  {
    mode: 'papiri',
    q: 'Što je "zamolba"?',
    en: 'What is a zamolba?',
    opts: ['covering letter', 'application form', 'reference', 'contract'],
    answer: 'covering letter',
    tip: 'Also called motivacijsko pismo.',
  },
  {
    mode: 'papiri',
    q: 'Što je "natječaj"?',
    en: 'What is a natječaj?',
    opts: ['job advert, vacancy', 'competition prize', 'interview', 'probation'],
    answer: 'job advert, vacancy',
    tip: 'Also oglas za posao. A natječaj is the formal, published version.',
  },
  {
    mode: 'papiri',
    q: 'Što je "preporuka"?',
    en: 'What is a preporuka?',
    opts: ['reference', 'recommendation letter you write', 'promotion', 'notice'],
    answer: 'reference',
    tip: 'From preporučiti, to recommend.',
  },
  {
    mode: 'papiri',
    q: 'Imam pet godina ____. (iskustvo)',
    en: 'I have five years of experience.',
    opts: ['iskustva', 'iskustvo', 'iskustvu', 'iskustvom'],
    answer: 'iskustva',
    tip: 'Genitive after a quantity: pet godina iskustva.',
  },
  {
    mode: 'papiri',
    q: 'Šaljem ____ na vaš natječaj. (prijava)',
    en: 'I am sending an application.',
    opts: ['prijavu', 'prijava', 'prijave', 'prijavom'],
    answer: 'prijavu',
    tip: 'Accusative after slati.',
  },
  {
    mode: 'papiri',
    q: 'Kako se zatvara pisana zamolba?',
    en: 'Closing a written application:',
    opts: ['Unaprijed zahvaljujem.', 'Vidimo se.', 'Hvala i pozdrav.', 'Čekam odgovor.'],
    answer: 'Unaprijed zahvaljujem.',
    tip: 'Thanking in advance — the standard formal close.',
  },
  {
    mode: 'papiri',
    q: 'Što je "radno iskustvo"?',
    en: 'What is radno iskustvo?',
    opts: ['work experience', 'working hours', 'work permit', 'job description'],
    answer: 'work experience',
    tip: 'The heading that takes up most of a životopis.',
  },

  // ── particip ──────────────────────────────────────────────────────────────
  {
    mode: 'particip',
    q: 'Muškarac piše: ____ sam kao konobar.',
    en: 'A man writes: I worked as a waiter.',
    opts: ['Radio', 'Radila', 'Radili', 'Radio bih'],
    answer: 'Radio',
    tip: 'The participle agrees with the person writing.',
  },
  {
    mode: 'particip',
    q: 'Žena piše: ____ sam kao konobarica.',
    en: 'A woman writes: I worked as a waitress.',
    opts: ['Radila', 'Radio', 'Radile', 'Radilo'],
    answer: 'Radila',
    tip: 'Radila sam — and the job title takes its female form too.',
  },
  {
    mode: 'particip',
    q: 'Žena piše: ____ sam na Filozofskom fakultetu.',
    en: 'A woman writes: I graduated from…',
    opts: ['Diplomirala', 'Diplomirao', 'Diplomirali', 'Diplomiralo'],
    answer: 'Diplomirala',
    tip: 'Every past-tense line in a CV carries this ending.',
  },
  {
    mode: 'particip',
    q: 'S čime se slaže particip u "radio sam"?',
    en: 'What does the participle agree with?',
    opts: ['s govornikom', 's poslodavcem', 's poslom', 'ni s čim'],
    answer: 's govornikom',
    tip: 'With whoever the sentence is about — here, you.',
  },
  {
    mode: 'particip',
    q: 'Muškarac: ____ sam projektom od 2020.',
    en: 'A man: I have led the project since 2020.',
    opts: ['Vodio', 'Vodila', 'Vodili', 'Vodit'],
    answer: 'Vodio',
    tip: 'And voditi takes the instrumental: vodio sam projektom.',
  },
  {
    mode: 'particip',
    q: 'Zašto se pogrešan nastavak lako primijeti?',
    en: 'Why is a wrong ending so visible?',
    opts: ['životopis je pun participa', 'nije se primijeti', 'kratak je', 'čita ga stroj'],
    answer: 'životopis je pun participa',
    tip: 'Every line about your past carries one, all about the same person.',
  },
  {
    mode: 'particip',
    q: 'Trenutno ____ u banci.',
    en: 'I currently work at a bank.',
    opts: ['radim', 'radio sam', 'radit ću', 'radeći'],
    answer: 'radim',
    tip: 'A current job takes the PRESENT — the past participle would end it.',
  },
  {
    mode: 'particip',
    q: 'Zadužen ____ za marketing. (žena)',
    en: 'A woman: I am responsible for marketing.',
    opts: ['Zadužena sam', 'Zadužen sam', 'Zaduženo sam', 'Zaduženi sam'],
    answer: 'Zadužena sam',
    tip: 'The adjective agrees too, not only the participle.',
  },

  // ── intervju ──────────────────────────────────────────────────────────────
  {
    mode: 'intervju',
    q: 'Recite nam nešto o ____. (sebe)',
    en: 'Tell us something about yourself.',
    opts: ['sebi', 'sebe', 'sobom', 'se'],
    answer: 'sebi',
    tip: 'o plus the LOCATIVE, and the reflexive pronoun goes with it: o sebi.',
  },
  {
    mode: 'intervju',
    q: 'Javljam se ____ me zanima ovo područje.',
    en: 'I am applying because this field interests me.',
    opts: ['jer', 'zbog', 'radi', 'da'],
    answer: 'jer',
    tip: 'jer introduces a CLAUSE. zbog needs a noun after it.',
  },
  {
    mode: 'intervju',
    q: 'Javljam se ____ iskustva u ovom poslu.',
    en: 'I am applying because of my experience in this work.',
    opts: ['zbog', 'jer', 'da', 'kako'],
    answer: 'zbog',
    tip: 'zbog plus a NOUN in the genitive. The pair with jer is the whole rule.',
  },
  {
    mode: 'intervju',
    q: 'Zašto se ____ na ovo mjesto?',
    en: 'Why are you applying for this post?',
    opts: ['javljate', 'javljaš', 'javljam', 'javiti'],
    answer: 'javljate',
    tip: 'An interview panel is Vi, always.',
  },
  {
    mode: 'intervju',
    q: 'Koje su vaše ____?',
    en: 'What are your strengths?',
    opts: ['prednosti', 'prednost', 'prednosti su', 'prednostima'],
    answer: 'prednosti',
    tip: 'prednosti — and the matching weakness is nedostaci.',
  },
  {
    mode: 'intervju',
    q: 'Gdje se ____ za pet godina?',
    en: 'Where do you see yourself in five years?',
    opts: ['vidite', 'vidiš', 'vidim', 'vidjeti'],
    answer: 'vidite',
    tip: 'And za plus the accusative for a point in the future.',
  },
  {
    mode: 'intervju',
    q: 'Prijavio sam se ____ stekao novo iskustvo.',
    en: 'I applied in order to gain new experience.',
    opts: ['kako bih', 'jer', 'zbog', 'zato'],
    answer: 'kako bih',
    tip: 'kako bih plus the participle expresses PURPOSE — looking forward, not back.',
  },
  {
    mode: 'intervju',
    q: 'Imate li ____ za nas?',
    en: 'Do you have any questions for us?',
    opts: ['pitanja', 'pitanje', 'pitanju', 'pitanjima'],
    answer: 'pitanja',
    tip: 'Accusative plural — and having one ready is expected.',
  },
];
