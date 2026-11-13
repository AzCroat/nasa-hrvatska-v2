// src/data/drills/b1/futureIiDrill.ts
//
// B1 FUTURE II — the drill for the `future-ii` lesson.
//
// budem, budeš, bude, budemo, budete, budu + the l-participle, after kad, ako, čim and
// dok when the clause points at the future. The ordinary future (ću imati) is wrong
// there and budem never takes an infinitive. With a perfective verb the present is also
// correct (Kad dođem = Kad budem došao), so the two are never set against each other.
//
// Three modes:
//   oblik — the right form of budem, and the participle agreeing
//   red   — clitics before budem: Kad se budem vratio
//   izbor — futur II, the ordinary future, or the present

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FUTURE_II_MODE_LABELS: Record<string, string> = {
  oblik: '🧩 Oblik',
  red: '🔀 Red riječi',
  izbor: '⏳ Izbor',
};

export const FUTURE_II_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'oblik',
    q: 'Kad ____ imao vremena, nazvat ću te.',
    en: 'When I have time, I will call you.',
    opts: ['budem', 'budeš', 'bude', 'budemo'],
    answer: 'budem',
    tip: 'The ja form.',
  },
  {
    mode: 'oblik',
    q: 'Ako ____ trebao pomoć, zovi me.',
    en: 'If you need help, call me.',
    opts: ['budeš', 'budem', 'ćeš', 'si'],
    answer: 'budeš',
    tip: 'The ti form; ćeš is wrong after ako.',
  },
  {
    mode: 'oblik',
    q: 'Ako ____ padala kiša, ostat ćemo kod kuće.',
    en: 'If it rains, we will stay at home.',
    opts: ['bude', 'budu', 'će', 'je'],
    answer: 'bude',
    tip: 'Third person singular for kiša.',
  },
  {
    mode: 'oblik',
    q: 'Kad ____ bili u Splitu, posjetit ćemo baku.',
    en: 'When we are in Split, we will visit grandma.',
    opts: ['budemo', 'budete', 'ćemo', 'smo'],
    answer: 'budemo',
    tip: 'The mi form.',
  },
  {
    mode: 'oblik',
    q: 'Ako ____ imali pitanja, javite se.',
    en: 'If you have any questions, get in touch.',
    opts: ['budete', 'budemo', 'ćete', 'ste'],
    answer: 'budete',
    tip: 'The vi form.',
  },
  {
    mode: 'oblik',
    q: 'Kad djeca ____ spavala, gledat ćemo film.',
    en: 'When the children are asleep, we will watch a film.',
    opts: ['budu', 'bude', 'će', 'su'],
    answer: 'budu',
    tip: 'The oni form.',
  },
  {
    mode: 'oblik',
    q: 'Kad budem ____ vremena, učit ću plesati.',
    en: 'Ana: When I have time, I will learn to dance.',
    opts: ['imala', 'imao', 'imati', 'imam'],
    answer: 'imala',
    tip: 'A woman speaking: the feminine participle.',
  },
  {
    mode: 'oblik',
    q: 'Čim budemo ____ posao, idemo na kavu.',
    en: 'As soon as we finish work, we are going for coffee.',
    opts: ['završili', 'završiti', 'završimo', 'završio'],
    answer: 'završili',
    tip: 'The plural participle after budemo.',
  },
  {
    mode: 'red',
    q: '____, nazvat ću te.',
    en: 'When I get back, I will call you.',
    opts: [
      'Kad se budem vratio',
      'Kad budem se vratio',
      'Kad budem vratio se',
      'Se kad budem vratio',
    ],
    answer: 'Kad se budem vratio',
    tip: 'The clitic goes second, before budem.',
  },
  {
    mode: 'red',
    q: '____, reći ću mu.',
    en: 'When I see him, I will tell him.',
    opts: ['Kad ga budem vidio', 'Kad budem ga vidio', 'Kad budem vidio ga', 'Ga kad budem vidio'],
    answer: 'Kad ga budem vidio',
    tip: 'The clitic goes second, before budem.',
  },
  {
    mode: 'red',
    q: '____, sve ćemo ti ispričati.',
    en: 'When we get back, we will tell you everything.',
    opts: [
      'Kad se budemo vratili',
      'Kad budemo se vratili',
      'Kad budemo vratili se',
      'Se kad budemo vratili',
    ],
    answer: 'Kad se budemo vratili',
    tip: 'The clitic goes second, before budemo.',
  },
  {
    mode: 'red',
    q: '____, javi mi se.',
    en: 'If you get bored, get in touch.',
    opts: [
      'Ako ti bude dosadno',
      'Ako bude ti dosadno',
      'Ako bude dosadno ti',
      'Ti ako bude dosadno',
    ],
    answer: 'Ako ti bude dosadno',
    tip: 'The dative clitic goes second, right after ako.',
  },
  {
    mode: 'red',
    q: '____, pozdravi je.',
    en: 'When you see her, say hello to her.',
    opts: ['Kad je budeš vidio', 'Kad budeš je vidio', 'Kad budeš vidio je', 'Je kad budeš vidio'],
    answer: 'Kad je budeš vidio',
    tip: 'The clitic goes second, before budeš.',
  },
  {
    mode: 'red',
    q: '____, kupit ću ti ga.',
    en: 'If I find it, I will buy it for you.',
    opts: ['Ako ga budem našao', 'Ako budem ga našao', 'Ako budem našao ga', 'Ga ako budem našao'],
    answer: 'Ako ga budem našao',
    tip: 'The clitic goes second, before budem.',
  },
  {
    mode: 'red',
    q: '____, nazvat ću te.',
    en: 'If I get lost, I will call you.',
    opts: [
      'Ako se budem izgubio',
      'Ako budem se izgubio',
      'Ako budem izgubio se',
      'Se ako budem izgubio',
    ],
    answer: 'Ako se budem izgubio',
    tip: 'The clitic goes second, before budem.',
  },
  {
    mode: 'red',
    q: '____, bit će ti lakše.',
    en: 'When you get used to it, it will be easier for you.',
    opts: [
      'Kad se budeš navikao',
      'Kad budeš se navikao',
      'Kad budeš navikao se',
      'Se kad budeš navikao',
    ],
    answer: 'Kad se budeš navikao',
    tip: 'The clitic goes second, before budeš.',
  },
  {
    mode: 'izbor',
    q: 'Kad ____ vremena, nazvat ću te.',
    en: 'A man: When I have time, I will call you.',
    opts: ['budem imao', 'ću imati', 'budem imati', 'sam imao'],
    answer: 'budem imao',
    tip: 'Futur II: budem + participle.',
  },
  {
    mode: 'izbor',
    q: 'Ako vam ____ pomoć, javite se.',
    en: 'If you need help, get in touch.',
    opts: ['bude trebala', 'će trebati', 'bude trebati', 'budete trebali'],
    answer: 'bude trebala',
    tip: 'Futur II; pomoć is the subject of trebati, so the participle is feminine singular.',
  },
  {
    mode: 'izbor',
    q: 'Kad ____ vremena, čitam.',
    en: 'Whenever I have time, I read.',
    opts: ['imam', 'budem imao', 'ću imati', 'imao'],
    answer: 'imam',
    tip: 'A habit: present in both halves.',
  },
  {
    mode: 'izbor',
    q: 'Dok ____ kod nas, osjećaj se kao kod kuće.',
    en: 'While you are staying with us, make yourself at home.',
    opts: ['budeš', 'ćeš biti', 'budeš biti', 'si bio'],
    answer: 'budeš',
    tip: 'budeš alone = you will be.',
  },
  {
    mode: 'izbor',
    q: 'Kad ____ kući, nazvat ću te.',
    en: 'When I get home, I will call you.',
    opts: ['dođem', 'ću doći', 'budem doći', 'sam došao'],
    answer: 'dođem',
    tip: 'A perfective verb can take the present here.',
  },
  {
    mode: 'izbor',
    q: 'Ako ____ lijepo vrijeme, idemo na izlet.',
    en: 'If the weather is nice, we are going on a trip.',
    opts: ['bude', 'će biti', 'budu', 'je bilo'],
    answer: 'bude',
    tip: 'bude alone = it will be.',
  },
  {
    mode: 'izbor',
    q: 'Čim ____ s poslom, javit ću ti se.',
    en: 'A man: As soon as I am done with work, I will let you know.',
    opts: ['budem gotov', 'ću biti gotov', 'budem biti gotov', 'sam bio gotov'],
    answer: 'budem gotov',
    tip: 'budem + adjective = I will be.',
  },
  {
    mode: 'izbor',
    q: 'Ako ____, javi mi.',
    en: 'A man: If you are going to be late, let me know.',
    opts: ['budeš kasnio', 'ćeš kasniti', 'budeš kasniti', 'si kasnio'],
    answer: 'budeš kasnio',
    tip: 'budeš + participle, never an infinitive.',
  },
];
