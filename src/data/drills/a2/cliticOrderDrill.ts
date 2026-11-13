// src/data/drills/a2/cliticOrderDrill.ts
//
// A2 CLITIC ORDER — the drill for the `clitic-order` lesson (A2 position 11).
//
// Three modes, eight items each:
//   redanje — dative before accusative: Dao sam joj ga
//   je      — je closes the cluster, and ju je instead of je je
//   pitanja — li opens the cluster: Sviđa li ti se? Jesi li mu rekao?
//
// Every wrong option is a real misordering. The order se je (Vratio se je) and a
// free-standing ju are standard Croatian, so neither is ever offered as wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CLITIC_ORDER_MODE_LABELS: Record<string, string> = {
  redanje: '🔀 Redoslijed',
  je: '🔚 Je na kraju',
  pitanja: '❓ Pitanja s li',
};

export const CLITIC_ORDER_DRILL_DATA: ModeDrillItem[] = [
  // ── redanje ───────────────────────────────────────────────────────────────
  {
    mode: 'redanje',
    q: 'Dao sam ____.',
    en: 'I gave it (the key) to her.',
    opts: ['joj ga', 'ga joj', 'je ga', 'ga je'],
    answer: 'joj ga',
    tip: 'To whom before what.',
  },
  {
    mode: 'redanje',
    q: 'Pokazat ću ____.',
    en: 'I will show them to you. (Vi)',
    opts: ['vam ih', 'ih vam', 'vas ih', 'ih vas'],
    answer: 'vam ih',
    tip: 'The dative, then the accusative.',
  },
  {
    mode: 'redanje',
    q: 'Poslala sam ____ jučer.',
    en: 'I sent it (the parcel) to him yesterday.',
    opts: ['mu ga', 'ga mu', 'mu ih', 'ga je'],
    answer: 'mu ga',
    tip: 'Two short forms, dative first.',
  },
  {
    mode: 'redanje',
    q: 'Sutra ću ____ donijeti.',
    en: 'I will bring it (the cake) to you tomorrow.',
    opts: ['ti ga', 'ga ti', 'te ga', 'ga te'],
    answer: 'ti ga',
    tip: 'Ti is the dative "to you"; te would be "you" as an object.',
  },
  {
    mode: 'redanje',
    q: 'Kupili smo ____.',
    en: 'We bought it (the car) for them.',
    opts: ['im ga', 'ga im', 'ih ga', 'ga ih'],
    answer: 'im ga',
    tip: 'Im is the dative "to them"; ih is the accusative.',
  },
  {
    mode: 'redanje',
    q: 'Ivan ____ dao.',
    en: 'Ivan gave it (the key) to me.',
    opts: ['mi ga je', 'je mi ga', 'mi je ga', 'ga mi je'],
    answer: 'mi ga je',
    tip: 'Dative, accusative — and je at the end.',
  },
  {
    mode: 'redanje',
    q: 'Jučer ____ vidio.',
    en: 'Yesterday I saw them. (a man speaking)',
    opts: ['sam ih', 'ih sam', 'sam im', 'im sam'],
    answer: 'sam ih',
    tip: 'Sam opens the cluster; ih is the accusative.',
  },
  {
    mode: 'redanje',
    q: 'Kad ____ poslao?',
    en: 'When did you send it (the parcel) to her? (to a man, ti)',
    opts: ['si joj ga', 'joj si ga', 'si ga joj', 'joj ga si'],
    answer: 'si joj ga',
    tip: 'Si, then the dative, then the accusative.',
  },
  // ── je ────────────────────────────────────────────────────────────────────
  {
    mode: 'je',
    q: 'Vidio ____ u gradu.',
    en: 'He saw her in town.',
    opts: ['ju je', 'je je', 'je ju', 'joj je'],
    answer: 'ju je',
    tip: 'Two je side by side are not allowed: ju je.',
  },
  {
    mode: 'je',
    q: 'Ana ____ poklonila.',
    en: 'Ana gave it (the watch) to him as a present.',
    opts: ['mu ga je', 'je mu ga', 'mu je ga', 'ga je mu'],
    answer: 'mu ga je',
    tip: 'Je closes the cluster.',
  },
  {
    mode: 'je',
    q: 'Rekla ____ istinu.',
    en: 'She told us the truth.',
    opts: ['nam je', 'je nam', 'nas je', 'je nas'],
    answer: 'nam je',
    tip: 'The dative before je.',
  },
  {
    mode: 'je',
    q: 'Poslao ____ poruku.',
    en: 'He sent me a message.',
    opts: ['mi je', 'je mi', 'me je', 'je me'],
    answer: 'mi je',
    tip: 'To me is the dative mi, and je goes last.',
  },
  {
    mode: 'je',
    q: 'Dao ____ ključ.',
    en: 'He gave him the key.',
    opts: ['mu je', 'je mu', 'ga je', 'je ga'],
    answer: 'mu je',
    tip: 'To him is the dative mu, before je.',
  },
  {
    mode: 'je',
    q: 'Kupila ____.',
    en: 'She bought it (the bread) for us.',
    opts: ['nam ga je', 'je nam ga', 'nam je ga', 'ga nam je'],
    answer: 'nam ga je',
    tip: 'Dative, accusative, je.',
  },
  {
    mode: 'je',
    q: 'Pokazala ____ grad.',
    en: 'She showed them the town.',
    opts: ['im je', 'je im', 'ih je', 'je ih'],
    answer: 'im je',
    tip: 'To them is the dative im.',
  },
  {
    mode: 'je',
    q: 'Upoznao ____ prošle godine.',
    en: 'He met her last year.',
    opts: ['ju je', 'je je', 'je ju', 'joj je'],
    answer: 'ju je',
    tip: 'The accusative "her" before je is ju.',
  },
  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: 'Sviđa ____ se Zagreb?',
    en: 'Do you like Zagreb? (ti)',
    opts: ['li ti', 'ti li', 'li te', 'te li'],
    answer: 'li ti',
    tip: 'Li opens the cluster; the one who likes is in the dative.',
  },
  {
    mode: 'pitanja',
    q: 'Jesi ____ rekao?',
    en: 'Did you tell him?',
    opts: ['li mu', 'mu li', 'li ga', 'ga li'],
    answer: 'li mu',
    tip: 'Li first; you tell TO someone, so the dative.',
  },
  {
    mode: 'pitanja',
    q: 'Hoćeš ____ dati?',
    en: 'Will you give it (the key) to me?',
    opts: ['li mi ga', 'mi li ga', 'li ga mi', 'mi ga li'],
    answer: 'li mi ga',
    tip: 'Li, dative, accusative.',
  },
  {
    mode: 'pitanja',
    q: 'Je ____ svidjelo?',
    en: 'Did you like it? (ti)',
    opts: ['li ti se', 'ti li se', 'li se ti', 'se li ti'],
    answer: 'li ti se',
    tip: 'Li, then ti, then se.',
  },
  {
    mode: 'pitanja',
    q: '____ li ih vidjeli?',
    en: 'Have you seen them? (Vi)',
    opts: ['Jeste', 'Ste', 'Jesi', 'Jesmo'],
    answer: 'Jeste',
    tip: 'A question cannot open with a short form; the full form is jeste.',
  },
  {
    mode: 'pitanja',
    q: 'Kad ____ ga kupila?',
    en: 'When did you buy it? (to a woman, ti)',
    opts: ['si', 'li si', 'je', 'li'],
    answer: 'si',
    tip: 'After a question word, li is not needed.',
  },
  {
    mode: 'pitanja',
    q: 'Možete ____ pomoći?',
    en: 'Can you help me? (Vi)',
    opts: ['li mi', 'mi li', 'li me', 'me li'],
    answer: 'li mi',
    tip: 'Li first; pomoći takes the dative.',
  },
  {
    mode: 'pitanja',
    q: 'Daješ ____ knjigu?',
    en: 'Are you giving her the book?',
    opts: ['li joj', 'joj li', 'li ju', 'ju li'],
    answer: 'li joj',
    tip: 'Li first; to her is the dative joj.',
  },
];
