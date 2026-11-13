// src/data/drills/b2/humanRightsDrill.ts
//
// B2 HUMAN RIGHTS — the drill for the `human-rights` lesson.
//
//   words   — ljudska prava, sloboda govora, dostojanstvo, manjina, diskriminacija
//   govern  — pravo na + acc, boriti se / zalagati se za + acc, slagati se s + instr
//   formal  — Smatram da…, Djelomično se slažem…, Ne bih se složio…, Treba naglasiti…
//
// Distractors are wrong by preposition, case or form.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const HUMAN_RIGHTS_MODE_LABELS: Record<string, string> = {
  words: '⚖️ The words of rights',
  govern: '🔗 pravo na, boriti se za',
  formal: '🎙️ Formal discussion',
};

export const HUMAN_RIGHTS_DRILL_DATA: ModeDrillItem[] = [
  // ── words ────────────────────────────────────────────────────────────────
  {
    mode: 'words',
    q: 'Sloboda ____ temelj je demokracije.',
    en: 'Freedom of speech is the foundation of democracy.',
    opts: ['govor', 'govora', 'govoru', 'govorom'],
    answer: 'govora',
    tip: 'sloboda govora — "freedom of speech", genitive.',
  },
  {
    mode: 'words',
    q: 'Svi ljudi rađaju se slobodni i jednaki u ____ i pravima.',
    en: 'All human beings are born free and equal in dignity and rights.',
    opts: ['dostojanstvu', 'dostojanstvo', 'dostojanstva', 'dostojanstvom'],
    answer: 'dostojanstvu',
    tip: 'u + locative of a neuter noun.',
  },
  {
    mode: 'words',
    q: 'Talijanska nacionalna ____ živi uglavnom u Istri.',
    en: 'The Italian national minority lives mostly in Istria.',
    opts: ['većina', 'jednakost', 'manjina', 'sloboda'],
    answer: 'manjina',
    tip: 'manjina — a minority; većina is a majority.',
  },
  {
    mode: 'words',
    q: 'Zakon zabranjuje ____ na temelju vjere.',
    en: 'The law forbids discrimination on the basis of religion.',
    opts: ['dostojanstvo', 'ravnopravnost', 'slobodu', 'diskriminaciju'],
    answer: 'diskriminaciju',
    tip: 'diskriminacija, accusative as the object.',
  },
  {
    mode: 'words',
    q: 'Ravnopravnost ____ zajamčena je Ustavom.',
    en: 'Equality between the sexes is guaranteed by the Constitution.',
    opts: ['spol', 'spolova', 'spolovima', 'spolove'],
    answer: 'spolova',
    tip: 'ravnopravnost + genitive plural: spolova.',
  },
  {
    mode: 'words',
    q: 'Novinari su upozorili na ____ ljudskih prava.',
    en: 'Journalists warned of violations of human rights.',
    opts: ['kršiti', 'krši', 'kršenje', 'kršenju'],
    answer: 'kršenje',
    tip: 'upozoriti na + accusative; the noun is kršenje.',
  },
  {
    mode: 'words',
    q: 'Globalizacija ima i prednosti i ____.',
    en: 'Globalisation has both advantages and disadvantages.',
    opts: ['nedostatak', 'nedostataka', 'nedostacima', 'nedostatke'],
    answer: 'nedostatke',
    tip: 'The object of ima, plural: nedostatke.',
  },
  {
    mode: 'words',
    q: 'Opća deklaracija o ljudskim pravima donesena je ____ godine.',
    en: 'The Universal Declaration of Human Rights was adopted three years after the Second World War.',
    opts: ['1918.', '1948.', '1991.', '1848.'],
    answer: '1948.',
    tip: 'On 10 December 1948, by the UN General Assembly.',
  },
  // ── govern ───────────────────────────────────────────────────────────────
  {
    mode: 'govern',
    q: 'Svatko ima pravo ____ rad.',
    en: 'Everyone has the right to work.',
    opts: ['za', 'o', 'na', 'od'],
    answer: 'na',
    tip: 'pravo na + accusative.',
  },
  {
    mode: 'govern',
    q: 'Bore se ____ slobodu.',
    en: 'They are fighting for freedom.',
    opts: ['za', 'na', 'o', 's'],
    answer: 'za',
    tip: 'boriti se za + accusative.',
  },
  {
    mode: 'govern',
    q: 'Slažem se ____ Vama.',
    en: 'I agree with you.',
    opts: ['na', 'za', 's', 'o'],
    answer: 's',
    tip: 'slagati se s + instrumental.',
  },
  {
    mode: 'govern',
    q: 'Zalažem se ____ jednaka prava.',
    en: 'I stand up for equal rights.',
    opts: ['na', 'o', 'u', 'za'],
    answer: 'za',
    tip: 'zalagati se za + accusative.',
  },
  {
    mode: 'govern',
    q: 'Imate pravo ____.',
    en: 'You have the right to remain silent.',
    opts: ['šutjeti', 'šutite', 'šutiš', 'šutnja'],
    answer: 'šutjeti',
    tip: 'imati pravo + infinitive.',
  },
  {
    mode: 'govern',
    q: 'Pripadnici manjina imaju pravo na vlastiti ____.',
    en: 'Members of minorities have the right to their own language.',
    opts: ['jezika', 'jezik', 'jeziku', 'jezikom'],
    answer: 'jezik',
    tip: 'na + accusative; jezik is a thing, so it does not change.',
  },
  {
    mode: 'govern',
    q: 'Diskriminacija na ____ podrijetla je zabranjena.',
    en: 'Discrimination on the basis of origin is forbidden.',
    opts: ['temelj', 'temelja', 'temelju', 'temeljem'],
    answer: 'temelju',
    tip: 'na temelju + genitive: on the basis of.',
  },
  {
    mode: 'govern',
    q: 'Ona se ____ za prava djece.',
    en: 'She stands up for children’s rights.',
    opts: ['zalaga', 'zalagi', 'zalagaje', 'zalaže'],
    answer: 'zalaže',
    tip: 'zalagati: the g becomes ž in the present — zalažem, zalaže.',
  },
  // ── formal ───────────────────────────────────────────────────────────────
  {
    mode: 'formal',
    q: '____ da je globalizacija donijela više koristi nego štete.',
    en: 'I believe globalisation has brought more benefit than harm.',
    opts: ['Smatrati', 'Smatram', 'Smatrajući', 'Smatran'],
    answer: 'Smatram',
    tip: 'Smatram da… — the formal way to give a view.',
  },
  {
    mode: 'formal',
    q: 'Djelomično se ____ s Vama, ali…',
    en: 'I partly agree with you, but…',
    opts: ['slagam', 'slažim', 'slaže', 'slažem'],
    answer: 'slažem',
    tip: 'slagati → slažem.',
  },
  {
    mode: 'formal',
    q: 'Ne bih se ____ s tim.',
    en: 'I would not agree with that. (a man speaking)',
    opts: ['složila', 'složio', 'složili', 'složiti'],
    answer: 'složio',
    tip: 'The participle agrees with the speaker: a man, složio.',
  },
  {
    mode: 'formal',
    q: 'Treba ____ da su ljudska prava univerzalna.',
    en: 'It must be stressed that human rights are universal.',
    opts: ['naglasim', 'naglašen', 'naglasiti', 'naglasio'],
    answer: 'naglasiti',
    tip: 'Treba + infinitive: Treba naglasiti da…',
  },
  {
    mode: 'formal',
    q: '____ mojem mišljenju, to nije pravedno.',
    en: 'In my opinion, that is not fair.',
    opts: ['Za', 'Od', 'Na', 'Prema'],
    answer: 'Prema',
    tip: 'Prema mojem mišljenju… — a formal way to give a view.',
  },
  {
    mode: 'formal',
    q: 'S druge ____, ne smijemo zaboraviti siromašne zemlje.',
    en: 'On the other hand, we mustn’t forget poor countries.',
    opts: ['strana', 'strane', 'stranu', 'stranom'],
    answer: 'strane',
    tip: 's + genitive here: s druge strane.',
  },
  {
    mode: 'formal',
    q: 'Dopustite mi ____ nešto dodam.',
    en: 'Allow me to add something.',
    opts: ['što', 'koji', 'da', 'kad'],
    answer: 'da',
    tip: 'Dopustite mi da… + present.',
  },
  {
    mode: 'formal',
    q: 'Slažete li se ____ ovim prijedlogom?',
    en: 'Do you agree with this proposal?',
    opts: ['na', 's', 'za', 'o'],
    answer: 's',
    tip: 'slagati se s + instrumental: s ovim prijedlogom.',
  },
];
