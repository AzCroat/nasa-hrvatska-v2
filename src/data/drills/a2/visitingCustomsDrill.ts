// src/data/drills/a2/visitingCustomsDrill.ts
//
// A2 VISITING A CROATIAN HOME — the drill for the `visiting-customs` lesson.
//
// The guest’s script, from the door to the goodbye, with its one grammar point
// (hvala na + locative) and its register point (vi to a friend's parents, ti to the
// friend). Distractors are real Croatian in the wrong moment or the wrong form.
//
// Three modes:
//   dolazak  — arriving, the gift, the shoes
//   stol     — at the table: help yourself, I am full, the toast
//   odlazak  — leaving and thanking: Hvala na pozivu

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VISITING_CUSTOMS_MODE_LABELS: Record<string, string> = {
  dolazak: '🚪 Dolazak',
  stol: '🍽️ Za stolom',
  odlazak: '👋 Odlazak',
};

export const VISITING_CUSTOMS_DRILL_DATA: ModeDrillItem[] = [
  // ── dolazak ───────────────────────────────────────────────────────────────
  {
    mode: 'dolazak',
    q: 'Oprostite što ____.',
    en: 'Sorry I am late.',
    opts: ['kasnim', 'kasnite', 'kasni', 'kasniti'],
    answer: 'kasnim',
    tip: 'The lateness is yours: the ja form.',
  },
  {
    mode: 'dolazak',
    q: 'Domaćica otvara vrata: "____ došli!"',
    en: 'The hostess opens the door: Welcome!',
    opts: ['Dobro', 'Dobri', 'Dobra', 'Dobru'],
    answer: 'Dobro',
    tip: 'The greeting is Dobro došli!',
  },
  {
    mode: 'dolazak',
    q: 'Izvolite, ____!',
    en: 'Here you are, come in! (to guests)',
    opts: ['uđite', 'uđete', 'uđi', 'ulazim'],
    answer: 'uđite',
    tip: 'The polite command of ući.',
  },
  {
    mode: 'dolazak',
    q: 'Trebam li se ____?',
    en: 'Should I take my shoes off?',
    opts: ['izuti', 'izujem', 'izuo', 'izut'],
    answer: 'izuti',
    tip: 'After trebam li, the infinitive.',
  },
  {
    mode: 'dolazak',
    q: 'Koje cvijeće NE nosite u goste?',
    en: 'Which flowers do you NOT take when visiting?',
    opts: ['krizanteme', 'ruže', 'tulipane', 'suncokrete'],
    answer: 'krizanteme',
    tip: 'Chrysanthemums are cemetery flowers in Croatia.',
  },
  {
    mode: 'dolazak',
    q: 'Izvolite, ovo je ____ vas.',
    en: 'Here you are, this is for you.',
    opts: ['za', 'na', 'od', 'u'],
    answer: 'za',
    tip: 'For you: za + accusative vas.',
  },
  {
    mode: 'dolazak',
    q: 'Donijela sam malo ____.',
    en: 'I have brought some flowers.',
    opts: ['cvijeća', 'cvijeće', 'cvijeću', 'cvijećem'],
    answer: 'cvijeća',
    tip: 'After malo, the genitive.',
  },
  {
    mode: 'dolazak',
    q: 'Prijatelju: "Oprosti što ____!"',
    en: 'To a friend: Sorry I am late!',
    opts: ['kasnim', 'kasniš', 'kasnimo', 'kasnite'],
    answer: 'kasnim',
    tip: 'Oprosti for a friend, and the lateness is still yours.',
  },
  // ── stol ──────────────────────────────────────────────────────────────────
  {
    mode: 'stol',
    q: '____ se, ima još kolača!',
    en: 'Help yourselves, there is more cake!',
    opts: ['Poslužite', 'Poslužimo', 'Poslužuju', 'Posluži'],
    answer: 'Poslužite',
    tip: 'The host’s polite command to the guests.',
  },
  {
    mode: 'stol',
    q: 'Hvala, ____ sam. (a woman speaking)',
    en: 'Thank you, I am full.',
    opts: ['sita', 'sit', 'siti', 'sito'],
    answer: 'sita',
    tip: 'The adjective agrees with a woman speaking.',
  },
  {
    mode: 'stol',
    q: 'Hvala, ____ sam. (a man speaking)',
    en: 'Thank you, I am full.',
    opts: ['sit', 'sita', 'siti', 'sito'],
    answer: 'sit',
    tip: 'Masculine, no ending.',
  },
  {
    mode: 'stol',
    q: 'Zdravica — što kažemo?',
    en: 'A toast — what do we say?',
    opts: ['Živjeli!', 'Dobar tek!', 'Laku noć!', 'Sretan put!'],
    answer: 'Živjeli!',
    tip: 'The toast, said looking each other in the eye.',
  },
  {
    mode: 'stol',
    q: 'Što kažemo prije jela?',
    en: 'What do we say before the meal?',
    opts: ['Dobar tek!', 'Živjeli!', 'Dobro došli!', 'Moram ići!'],
    answer: 'Dobar tek!',
    tip: 'It wishes everyone a good appetite.',
  },
  {
    mode: 'stol',
    q: '____ još, molim vas!',
    en: 'Take some more, please!',
    opts: ['Uzmite', 'Uzmete', 'Uzimate', 'Uzeti'],
    answer: 'Uzmite',
    tip: 'The polite command of uzeti.',
  },
  {
    mode: 'stol',
    q: 'Jako je ____!',
    en: 'It is delicious!',
    opts: ['ukusno', 'ukusan', 'ukusna', 'ukusni'],
    answer: 'ukusno',
    tip: 'With an unspoken "it", the neuter form.',
  },
  {
    mode: 'stol',
    q: 'Domaćin nudi kavu. Pristojno odbijate:',
    en: 'The host offers coffee. You refuse politely:',
    opts: [
      'Ne, hvala, ne treba.',
      'Ne, hvala, ne trebam li.',
      'Ne treba, hvala vas.',
      'Hvala ne, treba.',
    ],
    answer: 'Ne, hvala, ne treba.',
    tip: 'Ne, hvala, ne treba — no, thanks, there is no need.',
  },
  // ── odlazak ───────────────────────────────────────────────────────────────
  {
    mode: 'odlazak',
    q: 'Hvala na ____!',
    en: 'Thanks for the invitation!',
    opts: ['pozivu', 'poziv', 'poziva', 'pozivom'],
    answer: 'pozivu',
    tip: 'After hvala na, the locative.',
  },
  {
    mode: 'odlazak',
    q: 'Hvala na ____, bilo je jako lijepo.',
    en: 'Thank you for dinner, it was really lovely.',
    opts: ['večeri', 'večera', 'večeru', 'večerom'],
    answer: 'večeri',
    tip: 'Feminine locative: večeri.',
  },
  {
    mode: 'odlazak',
    q: 'Moram ____, sutra rano radim.',
    en: 'I have to go, I start work early tomorrow.',
    opts: ['ići', 'idem', 'išao', 'ide'],
    answer: 'ići',
    tip: 'After moram, the infinitive.',
  },
  {
    mode: 'odlazak',
    q: 'Hvala na ____!',
    en: 'Thanks for lunch!',
    opts: ['ručku', 'ručak', 'ručaku', 'ručkom'],
    answer: 'ručku',
    tip: 'Locative of ručak; the a drops out: ručku.',
  },
  {
    mode: 'odlazak',
    q: 'Roditeljima prijatelja: "Hvala ____ na pozivu."',
    en: 'To a friend’s parents: Thank you for the invitation.',
    opts: ['vam', 'ti', 'tebi', 'vas'],
    answer: 'vam',
    tip: 'Formal, and hvala takes the dative: vam.',
  },
  {
    mode: 'odlazak',
    q: 'Pozdravite ____ obitelj!',
    en: 'Give my regards to your family!',
    opts: ['svoju', 'svoja', 'svojoj', 'svoje'],
    answer: 'svoju',
    tip: 'Obitelj is a feminine object: accusative.',
  },
  {
    mode: 'odlazak',
    q: 'Domaćin na vratima: "Hvala što ste ____!"',
    en: 'The host at the door: Thank you for coming!',
    opts: ['došli', 'dođete', 'doći', 'dolazite'],
    answer: 'došli',
    tip: 'The coming has happened: past tense, došli.',
  },
  {
    mode: 'odlazak',
    q: 'Vidimo se ____!',
    en: 'See you soon!',
    opts: ['uskoro', 'jučer', 'prije', 'davno'],
    answer: 'uskoro',
    tip: 'Uskoro — soon.',
  },
];
