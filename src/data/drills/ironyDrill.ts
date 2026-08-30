// src/data/drills/ironyDrill.ts
//
// C2 IRONIJA I PODTEKST — the drill for the `ironija-podtekst` lesson.
//
// The B2 humour lesson introduced *ma* and understatement. This one is the
// harder half: hearing praise turn into its opposite with nothing in the
// grammar to mark it.
//
// *BAŠ* IS THE WORKHORSE. *Baš si mi pomogao* is either genuine thanks or
// exactly the reverse, and only the situation decides. The lesson gives the
// working rule: in a tense exchange, read *baš* plus praise as sarcasm until
// proven otherwise. *Svaka čast* behaves the same way.
//
// UNDERSTATEMENT IS THE DEFAULT, so *Nije loše* is genuine praise and reading
// it literally means missing a compliment.
//
// AND IN WRITING irony rides on things you can actually see: a diminutive where
// the thing is large, quotation marks around a word the writer rejects, and
// register incongruity — formal vocabulary in a trivial context.
//
// Three modes:
//   markeri — the spoken markers and which way they cut
//   podcijenjeno — understatement as approval
//   pisano  — how irony shows in writing

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const IRONY_MODE_LABELS: Record<string, string> = {
  markeri: '🎯 Markeri',
  podcijenjeno: '🤏 Podcjenjivanje',
  pisano: '✒️ Ironija u pismu',
};

export const IRONY_DRILL_DATA: ModeDrillItem[] = [
  // ── markeri ───────────────────────────────────────────────────────────────
  {
    mode: 'markeri',
    q: '"Baš si mi pomogao." U napetom razgovoru to znači ____.',
    en: 'In a tense exchange it means:',
    opts: ['nisi mi pomogao', 'iskrena zahvala', 'pitanje', 'ispriku'],
    answer: 'nisi mi pomogao',
    tip: 'The working rule: baš plus praise reads as sarcasm until proven otherwise.',
  },
  {
    mode: 'markeri',
    q: 'Što "baš" radi neutralno?',
    en: 'What does baš do neutrally?',
    opts: ['pojačava', 'niječe', 'pita', 'ublažava'],
    answer: 'pojačava',
    tip: 'It intensifies — which is exactly why it can flip.',
  },
  {
    mode: 'markeri',
    q: '"Svaka čast, stvarno." Kako se čita?',
    en: 'How is that read?',
    opts: ['ovisno o situaciji', 'uvijek kao pohvala', 'uvijek kao prijekor', 'kao pitanje'],
    answer: 'ovisno o situaciji',
    tip: 'Praise or its exact opposite, and stvarno usually tips it.',
  },
  {
    mode: 'markeri',
    q: 'Što znači "Taman posla!"?',
    en: 'What does Taman posla mean?',
    opts: ['nikako, ni govora', 'upravo tako', 'baš na vrijeme', 'dosta posla'],
    answer: 'nikako, ni govora',
    tip: 'An indignant refusal, and nothing to do with work.',
  },
  {
    mode: 'markeri',
    q: 'Što znači "Nego što!"?',
    en: 'What does Nego što mean?',
    opts: ['naravno da jest', 'nego što drugo', 'nikako', 'možda'],
    answer: 'naravno da jest',
    tip: 'Emphatic agreement — Je li dobro? — Nego što!',
  },
  {
    mode: 'markeri',
    q: '"E pa, hvala lijepa." Kakav je ton?',
    en: 'What tone is that?',
    opts: ['pomiren, često sarkastičan', 'topao', 'formalan', 'ravnodušan'],
    answer: 'pomiren, često sarkastičan',
    tip: 'E pa signals resignation before the sentence has said anything.',
  },
  {
    mode: 'markeri',
    q: 'Što označava ironiju u gramatici?',
    en: 'What marks irony grammatically?',
    opts: ['ništa', 'čestica', 'red riječi', 'kondicional'],
    answer: 'ništa',
    tip: 'Nothing does — which is why it is the last thing to arrive.',
  },
  {
    mode: 'markeri',
    q: 'Što nosi većinu govorne ironije?',
    en: 'What carries most spoken irony?',
    opts: ['retoričko pitanje', 'kondicional', 'deminutiv', 'pasiv'],
    answer: 'retoričko pitanje',
    tip: 'A što si ti očekivao? — and it leaves no room for an answer.',
  },

  // ── podcijenjeno ──────────────────────────────────────────────────────────
  {
    mode: 'podcijenjeno',
    q: '"Nije loše" o vašem radu znači ____.',
    en: 'Said of your work, it means:',
    opts: ['vrlo dobro', 'osrednje', 'loše', 'nedovršeno'],
    answer: 'vrlo dobro',
    tip: 'Understatement is the default, so this is genuine praise.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Zašto se hvali podcjenjivanjem?',
    en: 'Why understate praise?',
    opts: ['izravna pohvala zvuči neiskreno', 'iz škrtosti', 'radi kratkoće', 'nema razloga'],
    answer: 'izravna pohvala zvuči neiskreno',
    tip: 'Full-volume praise reads as flattery, so the volume comes down.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Kako se odgovara na "Nije loše"?',
    en: 'How do you answer it?',
    opts: ['Hvala!', 'Popravit ću.', 'Žao mi je.', 'Znam.'],
    answer: 'Hvala!',
    tip: 'Take it as the compliment it is.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Što je jače: "Odlično je" ili "Nije loše"?',
    en: 'Which is stronger in this register?',
    opts: ['Nije loše', 'Odlično je', 'jednako su', 'ovisi o tonu'],
    answer: 'Nije loše',
    tip: 'The double negative outranks the plain positive. That is the style.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Što se gubi doslovnim čitanjem?',
    en: 'What does a literal reading lose?',
    opts: ['kompliment', 'informacija', 'ton', 'ništa'],
    answer: 'kompliment',
    tip: 'And the speaker watches it land as indifference.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Što znači "Može proći"?',
    en: 'What does Može proći mean?',
    opts: ['sasvim je dobro', 'jedva prolazi', 'može se propustiti', 'dopušteno je'],
    answer: 'sasvim je dobro',
    tip: 'Another understatement, and rather warmer than it sounds.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Kako se podcjenjivanje razlikuje od ironije?',
    en: 'Understatement against irony?',
    opts: [
      'podcjenjivanje je iskreno, ironija nije',
      'isto su',
      'ironija je jača',
      'podcjenjivanje je pisano',
    ],
    answer: 'podcjenjivanje je iskreno, ironija nije',
    tip: 'One means less than it says; the other means the opposite.',
  },
  {
    mode: 'podcijenjeno',
    q: 'Prijatelj kaže "Ma nije to ništa." o velikom uspjehu. Odgovarate:',
    en: 'A friend downplays a success. You say:',
    opts: ['Ma kako nije!', 'Da, nije.', 'Slažem se.', 'Šteta.'],
    answer: 'Ma kako nije!',
    tip: 'Warm contradiction is the expected answer, not agreement.',
  },

  // ── pisano ────────────────────────────────────────────────────────────────
  {
    mode: 'pisano',
    q: 'Na čemu jaše ironija u pisanju?',
    en: 'What carries written irony?',
    opts: ['deminutiv, navodnici i neslaganje registra', 'uskličnik', 'kurziv', 'duljina rečenice'],
    answer: 'deminutiv, navodnici i neslaganje registra',
    tip: 'Three things a reader can actually see on the page.',
  },
  {
    mode: 'pisano',
    q: '"Stigao je računčić od četiristo eura." Što radi deminutiv?',
    en: 'What does the diminutive do?',
    opts: ['ironizira veličinu', 'ublažava', 'izražava nježnost', 'skraćuje'],
    answer: 'ironizira veličinu',
    tip: 'A little bill of four hundred euros — the mismatch IS the joke.',
  },
  {
    mode: 'pisano',
    q: 'Što znače navodnici oko riječi?',
    en: 'What do quotation marks signal?',
    opts: ['pisac odbacuje naziv', 'citat', 'strana riječ', 'naslov'],
    answer: 'pisac odbacuje naziv',
    tip: 'The so-called effect, done with punctuation instead of takozvani.',
  },
  {
    mode: 'pisano',
    q: 'Što je "neslaganje registra"?',
    en: 'What is register incongruity?',
    opts: ['svečan izraz o sitnici', 'miješanje narječja', 'duga rečenica', 'strana riječ'],
    answer: 'svečan izraz o sitnici',
    tip: 'Ceremonial vocabulary applied to something trivial reads as irony.',
  },
  {
    mode: 'pisano',
    q: 'Zašto je pisana ironija lakša za učenika od govorne?',
    en: 'Why is written irony easier?',
    opts: ['znakovi su vidljivi', 'tekstovi su kraći', 'ima više konteksta', 'nije lakša'],
    answer: 'znakovi su vidljivi',
    tip: 'In speech the marker is tone, and tone leaves no trace.',
  },
  {
    mode: 'pisano',
    q: 'Što je najsigurnije pravilo pri sumnji?',
    en: 'The safest rule when unsure:',
    opts: [
      'u napetom razgovoru čitati pohvalu kao sarkazam',
      'uvijek doslovno',
      'uvijek ironično',
      'pitati',
    ],
    answer: 'u napetom razgovoru čitati pohvalu kao sarkazam',
    tip: 'The lesson gives it as a working default, not a certainty.',
  },
  {
    mode: 'pisano',
    q: 'Je li propuštanje ironije na C2 razini neuspjeh?',
    en: 'Is missing it a failure?',
    opts: [
      'ne, cilj je prepoznati sredstvo',
      'da',
      'samo u pisanju',
      'samo među izvornim govornicima',
    ],
    answer: 'ne, cilj je prepoznati sredstvo',
    tip: 'Recognising the device is the achievable goal; catching every instance is not.',
  },
  {
    mode: 'pisano',
    q: 'Što retoričko pitanje ostavlja sugovorniku?',
    en: 'What does a rhetorical question leave?',
    opts: ['nimalo prostora', 'izbor', 'vrijeme', 'objašnjenje'],
    answer: 'nimalo prostora',
    tip: 'Which is precisely why it carries so much of the irony.',
  },
];
