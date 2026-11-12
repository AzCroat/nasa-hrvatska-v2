// src/data/drills/a1/phoneCallDrill.ts
//
// A1 ON THE PHONE — the drill for the `phone-call` lesson (masterOrder 55).
//
// A phone call is built from grammar the learner already has: the person you ask
// for is the object of *tražiti* (accusative — *Tražim Marka*), where they are is
// the locative (*na poslu, na sastanku*), and a polite request is *mogu li* /
// *možete li* + infinitive. No past, no future, no dative, no instrumental.
//
// Three modes:
//   javljanje — answering, saying who you are, rescuing a bad line
//   trazim    — asking for someone: the accusative after tražiti
//   gdje      — where the person is, and the message

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PHONE_CALL_MODE_LABELS: Record<string, string> = {
  javljanje: '📞 Javljanje',
  trazim: '🔎 Tražim…',
  gdje: '📍 Gdje je?',
};

export const PHONE_CALL_DRILL_DATA: ModeDrillItem[] = [
  // ── javljanje ─────────────────────────────────────────────────────────────
  {
    mode: 'javljanje',
    q: '____ Ana Kovač, dobar dan.',
    en: 'This is Ana Kovač, good afternoon.',
    opts: ['Ovdje', 'Ovo', 'Gdje', 'Kako'],
    answer: 'Ovdje',
    tip: 'On the phone, ovdje + your name says who is speaking. "Ovo" would need je after it.',
  },
  {
    mode: 'javljanje',
    q: 'Tko je na ____?',
    en: 'Who is on the phone?',
    opts: ['telefonu', 'telefon', 'telefona', 'telefonom'],
    answer: 'telefonu',
    tip: 'na + locative, like na poslu: na telefonu.',
  },
  {
    mode: 'javljanje',
    q: 'Tko ____?',
    en: 'Who is calling?',
    opts: ['zove', 'zovem', 'zovu', 'zoveš'],
    answer: 'zove',
    tip: 'Tko takes the third person singular: Tko zove?',
  },
  {
    mode: 'javljanje',
    q: '____ li Ivana doma?',
    en: 'Is Ivana at home?',
    opts: ['Je', 'Jesi', 'Jesu', 'Ima'],
    answer: 'Je',
    tip: 'A yes/no question about one other person starts with je li.',
  },
  {
    mode: 'javljanje',
    q: 'Ne čujem ____ dobro.',
    en: 'I cannot hear you well. (polite)',
    opts: ['vas', 'vi', 'vaš', 'vama'],
    answer: 'vas',
    tip: 'You are the object of čujem, in the polite form: vas.',
  },
  {
    mode: 'javljanje',
    q: 'Možete li ____, molim?',
    en: 'Can you repeat that, please?',
    opts: ['ponoviti', 'ponovim', 'ponavlja', 'ponovili'],
    answer: 'ponoviti',
    tip: 'After možete li comes the infinitive.',
  },
  {
    mode: 'javljanje',
    q: 'Veza je ____.',
    en: 'The connection is bad.',
    opts: ['loša', 'loš', 'lošu', 'lošom'],
    answer: 'loša',
    tip: 'Veza is feminine, so the adjective is feminine too.',
  },
  {
    mode: 'javljanje',
    q: 'Imate ____ broj.',
    en: 'You have the wrong number.',
    opts: ['pogrešan', 'pogrešnu', 'pogrešna', 'pogrešnog'],
    answer: 'pogrešan',
    tip: 'Broj is masculine and not alive, so as an object it does not change, and neither does its adjective.',
  },

  // ── trazim ────────────────────────────────────────────────────────────────
  {
    mode: 'trazim',
    q: 'Tražim ____.',
    en: 'I am looking for Marko.',
    opts: ['Marka', 'Marko', 'Marku', 'Markom'],
    answer: 'Marka',
    tip: 'The person you look for is the object. A man is alive, so -a.',
  },
  {
    mode: 'trazim',
    q: 'Tražim ____.',
    en: 'I am looking for Ivana.',
    opts: ['Ivanu', 'Ivana', 'Ivani', 'Ivanom'],
    answer: 'Ivanu',
    tip: 'Feminine -a becomes -u in the accusative.',
  },
  {
    mode: 'trazim',
    q: 'Tražim ____ Horvata.',
    en: 'I am looking for Mr Horvat.',
    opts: ['gospodina', 'gospodin', 'gospodinu', 'gospodinom'],
    answer: 'gospodina',
    tip: 'Both words are masculine and alive, so both take -a.',
  },
  {
    mode: 'trazim',
    q: 'Tražim ____ Kovač.',
    en: 'I am looking for Mrs Kovač.',
    opts: ['gospođu', 'gospođa', 'gospođi', 'gospođom'],
    answer: 'gospođu',
    tip: 'gospođa → gospođu. A woman’s surname ending in a consonant does not change at all.',
  },
  {
    mode: 'trazim',
    q: 'Tražim ____.',
    en: 'I am looking for Petar.',
    opts: ['Petra', 'Petar', 'Petara', 'Petru'],
    answer: 'Petra',
    tip: 'A man, so -a — and the a of Petar drops out, as in pas → psa.',
  },
  {
    mode: 'trazim',
    q: 'Tražim ____.',
    en: 'I am looking for the director. (a woman)',
    opts: ['direktoricu', 'direktorica', 'direktorici', 'direktoricom'],
    answer: 'direktoricu',
    tip: 'Feminine -a becomes -u.',
  },
  {
    mode: 'trazim',
    q: 'Mogu li ostaviti ____?',
    en: 'Can I leave a message?',
    opts: ['poruku', 'poruka', 'poruke', 'poruci'],
    answer: 'poruku',
    tip: 'The message is the object: poruka → poruku.',
  },
  {
    mode: 'trazim',
    q: 'Ivana ima moj ____.',
    en: 'Ivana has my number.',
    opts: ['broj', 'broja', 'broju', 'brojem'],
    answer: 'broj',
    tip: 'Masculine and not alive: the object form is the same as the dictionary form.',
  },

  // ── gdje ──────────────────────────────────────────────────────────────────
  {
    mode: 'gdje',
    q: 'Ivana je na ____.',
    en: 'Ivana is at work.',
    opts: ['poslu', 'posao', 'posla', 'poslom'],
    answer: 'poslu',
    tip: 'Being somewhere is the locative, and posao loses its a: na poslu.',
  },
  {
    mode: 'gdje',
    q: 'Gospodin Horvat je na ____.',
    en: 'Mr Horvat is in a meeting.',
    opts: ['sastanku', 'sastanak', 'sastanaku', 'sastanka'],
    answer: 'sastanku',
    tip: 'Locative -u, and the a of the last syllable drops: sastanku.',
  },
  {
    mode: 'gdje',
    q: 'Marko je u ____.',
    en: 'Marko is in the office.',
    opts: ['uredu', 'ured', 'ureda', 'uredom'],
    answer: 'uredu',
    tip: 'Position: u + locative. "U ured" would be going into it.',
  },
  {
    mode: 'gdje',
    q: 'Ana je u ____.',
    en: 'Ana is at school.',
    opts: ['školi', 'školu', 'škola', 'školom'],
    answer: 'školi',
    tip: 'Position, feminine: -i. "U školu" is the way there.',
  },
  {
    mode: 'gdje',
    q: '____, Ivana nije tu.',
    en: 'Unfortunately, Ivana is not here.',
    opts: ['Nažalost', 'Naravno', 'Hvala', 'Bog'],
    answer: 'Nažalost',
    tip: 'Nažalost softens bad news.',
  },
  {
    mode: 'gdje',
    q: 'Trenutak, ____.',
    en: 'One moment, please.',
    opts: ['molim', 'hvala', 'bog', 'doviđenja'],
    answer: 'molim',
    tip: 'Molim is "please" here: asking the caller to wait.',
  },
  {
    mode: 'gdje',
    q: 'Hvala na ____.',
    en: 'Thank you for calling.',
    opts: ['pozivu', 'poziv', 'poziva', 'pozivom'],
    answer: 'pozivu',
    tip: 'hvala na takes the locative: poziv → pozivu.',
  },
  {
    mode: 'gdje',
    q: 'Želite li ostaviti ____?',
    en: 'Would you like to leave a message?',
    opts: ['poruku', 'poruka', 'poruci', 'porukom'],
    answer: 'poruku',
    tip: 'ostaviti poruku — learn it as one block; the message is the object.',
  },
];
