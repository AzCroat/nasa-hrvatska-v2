// src/data/drills/a1/genitivePronounsDrill.ts
//
// A1 GENITIVE PRONOUNS — the drill for the `genitive-pronouns` lesson.
//
// mene/me, tebe/te, njega/ga, nje/je, nas, vas, njih/ih, koga. After a preposition
// always the long form (kod mene); after nema the short form in second place
// (Danas ga nema). The only pronoun that differs from the accusative is ona:
// genitive nje, accusative nju. Where an emphatic long form would also be correct
// (Danas njega nema), it is never offered as a wrong option.
//
// Two modes:
//   prijedlog — the long form after a preposition
//   nema      — the short form after nema, and nje against nju

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_PRONOUNS_MODE_LABELS: Record<string, string> = {
  prijedlog: '🏠 Kod mene',
  nema: '🚫 Nema ga',
};

export const GENITIVE_PRONOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── prijedlog ─────────────────────────────────────────────────────────────
  {
    mode: 'prijedlog',
    q: 'Večeras smo kod ____. (ja)',
    en: 'Tonight we are at my place.',
    opts: ['me', 'mene', 'meni', 'mnom'],
    answer: 'mene',
    tip: 'After a preposition, the long form.',
  },
  {
    mode: 'prijedlog',
    q: 'Ne idem na more bez ____. (ti)',
    en: 'I am not going to the seaside without you.',
    opts: ['tebe', 'te', 'tebi', 'tobom'],
    answer: 'tebe',
    tip: 'bez + the long genitive form.',
  },
  {
    mode: 'prijedlog',
    q: 'Ovaj poklon je od ____. (on)',
    en: 'This present is from him.',
    opts: ['ga', 'njemu', 'njega', 'njim'],
    answer: 'njega',
    tip: 'od + the long form.',
  },
  {
    mode: 'prijedlog',
    q: 'Moja sestra živi blizu ____. (ona)',
    en: 'My sister lives near her.',
    opts: ['nju', 'njoj', 'njom', 'nje'],
    answer: 'nje',
    tip: 'The genitive of ona is nje; nju is the accusative.',
  },
  {
    mode: 'prijedlog',
    q: 'Možeš li doći do ____ poslije posla? (mi)',
    en: 'Can you come over to our place after work?',
    opts: ['nas', 'nama', 'nam', 'mi'],
    answer: 'nas',
    tip: 'do + the genitive of mi.',
  },
  {
    mode: 'prijedlog',
    q: 'Kod ____ je uvijek lijepo. (vi)',
    en: 'It is always lovely at your place.',
    opts: ['vama', 'vas', 'vam', 'vi'],
    answer: 'vas',
    tip: 'kod + the genitive of vi.',
  },
  {
    mode: 'prijedlog',
    q: 'Bez ____ ne idemo na izlet. (oni)',
    en: 'We are not going on the trip without them.',
    opts: ['ih', 'njima', 'oni', 'njih'],
    answer: 'njih',
    tip: 'After bez, the long form.',
  },
  {
    mode: 'prijedlog',
    q: 'Kod ____ spavaš večeras? (tko)',
    en: 'Whose place are you sleeping at tonight?',
    opts: ['koga', 'kome', 'tko', 'kim'],
    answer: 'koga',
    tip: 'The genitive of tko is koga.',
  },
  {
    mode: 'prijedlog',
    q: 'Pismo je od ____. (ona)',
    en: 'The letter is from her.',
    opts: ['nje', 'nju', 'je', 'njoj'],
    answer: 'nje',
    tip: 'After od, the long genitive form of ona.',
  },
  {
    mode: 'prijedlog',
    q: 'Ne mogu bez ____. (ona)',
    en: 'I cannot manage without her.',
    opts: ['nju', 'nje', 'ona', 'njom'],
    answer: 'nje',
    tip: 'Genitive nje — not the accusative nju.',
  },
  {
    mode: 'prijedlog',
    q: 'Moj stan je blizu ____. (ti)',
    en: 'My flat is near you.',
    opts: ['tobom', 'tebi', 'tebe', 'te'],
    answer: 'tebe',
    tip: 'blizu + the long form.',
  },
  {
    mode: 'prijedlog',
    q: 'Poklon je od ____. (mi)',
    en: 'The present is from us.',
    opts: ['nama', 'nas', 'mi', 'nam'],
    answer: 'nas',
    tip: 'od + the genitive of mi.',
  },
  {
    mode: 'prijedlog',
    q: 'Što znači "kod nas"?',
    opts: ['at our place, or in our country', 'with us', 'without us', 'to us'],
    answer: 'at our place, or in our country',
    tip: 'kod = at someone’s place.',
  },
  // ── nema ──────────────────────────────────────────────────────────────────
  {
    mode: 'nema',
    q: 'Gdje je Marko? — Nema ____. (on)',
    en: 'Where is Marko? — He is not here.',
    opts: ['ga', 'mu', 'on', 'njim'],
    answer: 'ga',
    tip: 'nema + the short genitive form.',
  },
  {
    mode: 'nema',
    q: 'Gdje je Ana? — Nema ____. (ona)',
    en: 'Where is Ana? — She is not here.',
    opts: ['joj', 'ona', 'je', 'njom'],
    answer: 'je',
    tip: 'The short genitive of ona is je.',
  },
  {
    mode: 'nema',
    q: 'Gdje su djeca? — Nema ____. (oni)',
    en: 'Where are the children? — They are not here.',
    opts: ['oni', 'im', 'njima', 'ih'],
    answer: 'ih',
    tip: 'The short genitive of oni is ih.',
  },
  {
    mode: 'nema',
    q: 'Gdje je Ivan? Danas ____ nema.',
    en: 'Where is Ivan? He is not here today.',
    opts: ['ga', 'on', 'mu', 'njemu'],
    answer: 'ga',
    tip: 'A short form goes second: Danas ga nema.',
  },
  {
    mode: 'nema',
    q: 'Ana je bolesna, pa ____ nema na poslu.',
    en: 'Ana is ill, so she is not at work.',
    opts: ['joj', 'je', 'ona', 'njom'],
    answer: 'je',
    tip: 'The short genitive of ona, right after pa.',
  },
  {
    mode: 'nema',
    q: 'Koja rečenica znači "They are not here"?',
    en: 'Which sentence means they are not here?',
    opts: ['Nema ih.', 'Nema oni.', 'Nisu ih.', 'Nema njima.'],
    answer: 'Nema ih.',
    tip: 'nema + the short form ih.',
  },
  {
    mode: 'nema',
    q: 'Koja rečenica znači "He is not here"?',
    en: 'Which sentence means he is not here?',
    opts: ['Nema mu.', 'Nije ga.', 'Nema ga.', 'Nema on.'],
    answer: 'Nema ga.',
    tip: 'nema + the short form ga.',
  },
  {
    mode: 'nema',
    q: 'Koji je oblik genitiv od "ona"?',
    en: 'Which form is the genitive of ona?',
    opts: ['nju', 'nje', 'njoj', 'njom'],
    answer: 'nje',
    tip: 'nje — the one pronoun that differs from the accusative (nju).',
  },
  {
    mode: 'nema',
    q: 'Što nije u redu: "Večeras smo kod me."?',
    en: 'What is wrong with this sentence?',
    opts: ['me should be mene', 'kod should be u', 'smo should be sam', 'Nothing'],
    answer: 'me should be mene',
    tip: 'After a preposition, never a short form.',
  },
  {
    mode: 'nema',
    q: 'Što nije u redu: "Ne idem bez nju."?',
    en: 'What is wrong with this sentence?',
    opts: ['nju should be nje', 'bez should be s', 'idem should be ide', 'Nothing'],
    answer: 'nju should be nje',
    tip: 'nju is the accusative; bez takes the genitive, nje.',
  },
  {
    mode: 'nema',
    q: 'Zašto ____ nema? (oni)',
    en: 'Why are they not here?',
    opts: ['ih', 'njima', 'oni', 'im'],
    answer: 'ih',
    tip: 'A short form, in second place after zašto.',
  },
];
