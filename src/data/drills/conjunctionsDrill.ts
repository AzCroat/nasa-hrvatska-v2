// src/data/drills/conjunctionsDrill.ts
//
// A2 JOINING SENTENCES — the drill for the `conjunctions` lesson.
//
// The lesson's own closing line is that connecting sentences is what separates
// A2 from A1, and it is right: a learner with A1 grammar and these eight words
// sounds twice as fluent as one with better endings and no connectors.
//
// The pool's `subordination` family (`relpron`, `subordination`, `uzrocne`,
// `vremenske`) all sits at B1–B2 and every one of those categories is spoken
// for by a B1 or B2 lesson, so none of it could serve this.
//
// Three things carry real weight:
//
//   A IS NOT ALI. *A* sets two things side by side — *Ja radim, a on spava*,
//   I work whereas he sleeps, and nothing is wrong with either. *Ali* marks a
//   genuine obstacle — *Radim, ali nisam umoran*. English says "but" for both,
//   so this has to be learned as a distinction English does not make.
//
//   AFTER A NEGATIVE, USE NEGO. *Nije crno nego bijelo* — not *ali bijelo*,
//   which is the direct calque and is wrong. *Već* does the same job.
//
//   JER CANNOT OPEN A SENTENCE. *Zato što* can. This is a hard placement rule
//   with no exceptions, and it catches learners who have been answering
//   *Zašto?* with a bare *Jer…* all year.
//
// And the comma is not optional before *ali*, *a*, *nego*, *jer* and *iako* —
// Croatian punctuates these, English often does not.
//
// Three modes:
//   osnovni — i, pa, ili, and what each adds
//   akontrastali — the a / ali / nego distinction
//   uzrok — jer, zato što, iako, and the commas

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const CONJUNCTIONS_MODE_LABELS: Record<string, string> = {
  osnovni: '🔗 Osnovni veznici',
  akontrastali: '⚖️ A ili ali',
  uzrok: '🧩 Uzrok i zarez',
};

export const CONJUNCTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── osnovni ───────────────────────────────────────────────────────────────
  {
    mode: 'osnovni',
    q: 'Kava ____ kolač.',
    en: 'Coffee and cake.',
    opts: ['i', 'pa', 'ili', 'a'],
    answer: 'i',
    tip: 'Plain addition — the simplest join there is.',
  },
  {
    mode: 'osnovni',
    q: 'Došao je ____ smo jeli.',
    en: 'He came and then we ate.',
    opts: ['pa', 'i', 'ili', 'ali'],
    answer: 'pa',
    tip: 'pa adds SEQUENCE: and then. i would only list the two.',
  },
  {
    mode: 'osnovni',
    q: 'Čaj ____ kava?',
    en: 'Tea or coffee?',
    opts: ['ili', 'i', 'pa', 'a'],
    answer: 'ili',
    tip: 'A straight choice.',
  },
  {
    mode: 'osnovni',
    q: 'Što "pa" dodaje čemu "i" nema?',
    en: 'What does pa add?',
    opts: ['slijed u vremenu', 'suprotnost', 'uzrok', 'ništa'],
    answer: 'slijed u vremenu',
    tip: 'One thing after another, and often because of it.',
  },
  {
    mode: 'osnovni',
    q: 'Radim ____ učim.',
    en: 'I work and I study.',
    opts: ['i', 'pa', 'nego', 'jer'],
    answer: 'i',
    tip: 'Two things that are both true, in no particular order.',
  },
  {
    mode: 'osnovni',
    q: 'Zašto su veznici važni na razini A2?',
    en: 'Why do connectors matter at A2?',
    opts: ['spajaju rečenice u govor', 'lakši su od padeža', 'traži ih gramatika', 'nisu važni'],
    answer: 'spajaju rečenice u govor',
    tip: 'Short sentences plus connectors is what stops sounding like a list.',
  },
  {
    mode: 'osnovni',
    q: 'Čekat ću ____ ne dođeš.',
    en: 'I will wait until you come.',
    opts: ['dok', 'kad', 'pa', 'ili'],
    answer: 'dok',
    tip: 'dok ne — until. The ne is part of the construction, not a negation.',
  },
  {
    mode: 'osnovni',
    q: 'Nazovi me ____ stigneš.',
    en: 'Call me when you arrive.',
    opts: ['kad', 'dok', 'pa', 'nego'],
    answer: 'kad',
    tip: 'kad for a point; dok for a stretch.',
  },

  // ── akontrastali ──────────────────────────────────────────────────────────
  {
    mode: 'akontrastali',
    q: 'Ja radim, ____ on spava.',
    en: 'I work, whereas he sleeps.',
    opts: ['a', 'ali', 'nego', 'jer'],
    answer: 'a',
    tip: 'A sets two things SIDE BY SIDE. Nothing is wrong with either of them.',
  },
  {
    mode: 'akontrastali',
    q: 'Radim, ____ nisam umoran.',
    en: 'I work, but I am not tired.',
    opts: ['ali', 'a', 'nego', 'pa'],
    answer: 'ali',
    tip: 'ALI marks a real obstacle — something that works against the first half.',
  },
  {
    mode: 'akontrastali',
    q: 'U čemu je razlika između "a" i "ali"?',
    en: 'a against ali:',
    opts: ['a usporeduje, ali se protivi', 'a je formalnije', 'ali je kraće', 'nema razlike'],
    answer: 'a usporeduje, ali se protivi',
    tip: 'English says "but" for both, which is why this has to be learned.',
  },
  {
    mode: 'akontrastali',
    q: 'Nije crno ____ bijelo.',
    en: 'It is not black but white.',
    opts: ['nego', 'ali', 'a', 'i'],
    answer: 'nego',
    tip: 'AFTER A NEGATIVE, NEGO. Ali here is the calque from English and is wrong.',
  },
  {
    mode: 'akontrastali',
    q: 'Koja riječ radi isti posao kao "nego"?',
    en: 'Which does the same job?',
    opts: ['već', 'ali', 'pa', 'ili'],
    answer: 'već',
    tip: 'Nije crno već bijelo — interchangeable here.',
  },
  {
    mode: 'akontrastali',
    q: 'Ne pijem kavu ____ čaj.',
    en: 'I do not drink coffee but tea.',
    opts: ['nego', 'ali', 'a', 'pa'],
    answer: 'nego',
    tip: 'The first half is negated, so nego. The rule is mechanical.',
  },
  {
    mode: 'akontrastali',
    q: 'Ona je visoka, ____ ja sam nizak.',
    en: 'She is tall, whereas I am short.',
    opts: ['a', 'nego', 'jer', 'pa'],
    answer: 'a',
    tip: 'A comparison of two facts, neither of them an obstacle.',
  },
  {
    mode: 'akontrastali',
    q: 'Htio sam doći, ____ nisam mogao.',
    en: 'I wanted to come, but I could not.',
    opts: ['ali', 'a', 'nego', 'i'],
    answer: 'ali',
    tip: 'A genuine obstacle. This is what ali is for.',
  },

  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Ostajem doma ____ pada kiša.',
    en: 'I am staying home because it is raining.',
    opts: ['jer', 'zato', 'iako', 'ako'],
    answer: 'jer',
    tip: 'jer introduces the reason, and it goes in the middle.',
  },
  {
    mode: 'uzrok',
    q: 'Koji veznik NE smije otvoriti rečenicu?',
    en: 'Which cannot open a sentence?',
    opts: ['jer', 'zato što', 'iako', 'ako'],
    answer: 'jer',
    tip: 'JER CANNOT COME FIRST. Zato što can, and that is the way round it.',
  },
  {
    mode: 'uzrok',
    q: '____ pada kiša, ostajem doma.',
    en: 'Because it is raining, I am staying home.',
    opts: ['Zato što', 'Jer', 'Nego', 'Pa'],
    answer: 'Zato što',
    tip: 'When the reason comes first, it has to be zato što.',
  },
  {
    mode: 'uzrok',
    q: 'Idem van ____ pada kiša.',
    en: 'I am going out although it is raining.',
    opts: ['iako', 'jer', 'ako', 'nego'],
    answer: 'iako',
    tip: 'iako concedes — it grants the obstacle and carries on.',
  },
  {
    mode: 'uzrok',
    q: '____ imaš vremena, javi mi.',
    en: 'If you have time, let me know.',
    opts: ['Ako', 'Iako', 'Jer', 'Nego'],
    answer: 'Ako',
    tip: 'ako = if. One letter from iako, and the opposite meaning.',
  },
  {
    mode: 'uzrok',
    q: 'Gdje ide zarez: "Radim ali nisam umoran"?',
    en: 'Where does the comma go?',
    opts: ['prije "ali"', 'iza "ali"', 'nema zareza', 'na kraju'],
    answer: 'prije "ali"',
    tip: 'Radim, ali nisam umoran. Croatian punctuates this where English often does not.',
  },
  {
    mode: 'uzrok',
    q: 'Ispred kojih veznika ide zarez?',
    en: 'Which ones take a comma?',
    opts: ['ali, a, nego, jer, iako', 'i, pa, ili', 'svih', 'nijednog'],
    answer: 'ali, a, nego, jer, iako',
    tip: 'And i, pa, ili take none when they simply join.',
  },
  {
    mode: 'uzrok',
    q: 'Je li zarez ovdje stvar stila?',
    en: 'Is the comma a style choice?',
    opts: ['ne, pravilo je', 'da', 'samo u pismu', 'samo u dugim rečenicama'],
    answer: 'ne, pravilo je',
    tip: 'A rule, and one of the few punctuation rules worth learning early.',
  },
];
