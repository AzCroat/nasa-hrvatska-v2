// src/data/drills/a2/conditionalWishesDrill.ts
//
// A2 WISHES AND POLITE REQUESTS — the drill for the `conditional-wishes` lesson.
//
// The conditional is what makes Croatian polite: Htio / Htjela bih (I'd like), Volio /
// Voljela bih (I'd love to), Bi li mi mogao… (to a friend), Biste li mi mogli… (to Vi),
// Mogli bismo… (we could), Trebao bi… (you should). Every participle agrees with its
// subject, and what you would like is in the accusative.
//
// Three modes:
//   zelje      — ordering and wishing
//   molbe      — polite requests, friend vs Vi
//   prijedlozi — suggestions and advice

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONDITIONAL_WISHES_MODE_LABELS: Record<string, string> = {
  zelje: '☕ Želje',
  molbe: '🙏 Molbe',
  prijedlozi: '💡 Prijedlozi',
};

export const CONDITIONAL_WISHES_DRILL_DATA: ModeDrillItem[] = [
  // ── zelje ─────────────────────────────────────────────────────────────────
  {
    mode: 'zelje',
    q: '____ bih kavu, molim.',
    en: "I'd like a coffee, please. (a man speaking)",
    opts: ['Htio', 'Htjela', 'Hoću', 'Htjeli'],
    answer: 'Htio',
    tip: 'The participle of htjeti for a man.',
  },
  {
    mode: 'zelje',
    q: '____ bih čaj, molim.',
    en: "I'd like a tea, please. (a woman speaking)",
    opts: ['Htjela', 'Htio', 'Hoću', 'Htjele'],
    answer: 'Htjela',
    tip: 'The participle of htjeti for a woman.',
  },
  {
    mode: 'zelje',
    q: 'Htio bih ____, molim.',
    en: "I'd like the soup, please.",
    opts: ['juhu', 'juha', 'juhe', 'juhom'],
    answer: 'juhu',
    tip: 'What you would like is in the accusative: juhu.',
  },
  {
    mode: 'zelje',
    q: 'Željela bih ____ vode.',
    en: "I'd like a glass of water.",
    opts: ['čašu', 'čaša', 'čaše', 'čašom'],
    answer: 'čašu',
    tip: 'The glass is the object: accusative čašu.',
  },
  {
    mode: 'zelje',
    q: '____ bih živjeti na moru.',
    en: "I'd love to live by the sea. (a man speaking)",
    opts: ['Volio', 'Voljela', 'Volim', 'Voljeli'],
    answer: 'Volio',
    tip: 'The participle of voljeti for a man.',
  },
  {
    mode: 'zelje',
    q: 'Ja bih ____ posjetiti Dubrovnik.',
    en: "I'd love to visit Dubrovnik. (a woman speaking)",
    opts: ['voljela', 'volio', 'voli', 'voljeti'],
    answer: 'voljela',
    tip: 'The participle of voljeti for a woman — with lj.',
  },
  {
    mode: 'zelje',
    q: 'Što biste ____?',
    en: 'What would you like? (a waiter to a guest)',
    opts: ['željeli', 'željela', 'željeti', 'želio'],
    answer: 'željeli',
    tip: 'Polite Vi takes the plural participle.',
  },
  {
    mode: 'zelje',
    q: 'Htjela bih ____.',
    en: "I'd like to pay.",
    opts: ['platiti', 'platim', 'platila', 'plati'],
    answer: 'platiti',
    tip: 'After htjela bih comes the infinitive.',
  },
  // ── molbe ─────────────────────────────────────────────────────────────────
  {
    mode: 'molbe',
    q: 'Bi li mi ____ pomoći?',
    en: 'Could you help me? (to a friend, a man)',
    opts: ['mogao', 'mogla', 'mogli', 'moći'],
    answer: 'mogao',
    tip: 'The participle agrees with the friend, a man.',
  },
  {
    mode: 'molbe',
    q: 'Bi li mi ____ dodati sol?',
    en: 'Could you pass me the salt? (to a friend, a woman)',
    opts: ['mogla', 'mogao', 'mogli', 'moći'],
    answer: 'mogla',
    tip: 'The participle agrees with the friend, a woman.',
  },
  {
    mode: 'molbe',
    q: '____ li mi mogli pomoći?',
    en: 'Could you help me? (to a stranger)',
    opts: ['Biste', 'Bi', 'Bih', 'Bismo'],
    answer: 'Biste',
    tip: 'A stranger is Vi: biste.',
  },
  {
    mode: 'molbe',
    q: 'Biste li mi mogli ____ put do kolodvora?',
    en: 'Could you show me the way to the station?',
    opts: ['pokazati', 'pokazali', 'pokažete', 'pokazao'],
    answer: 'pokazati',
    tip: 'After mogli comes the infinitive.',
  },
  {
    mode: 'molbe',
    q: 'Kako pristojno pitaš nepoznatu osobu za pomoć?',
    en: 'How do you politely ask a stranger for help?',
    opts: ['Biste li mi mogli pomoći?', 'Pomozi mi!', 'Bi li mi mogao pomoći?', 'Hoćeš mi pomoći?'],
    answer: 'Biste li mi mogli pomoći?',
    tip: 'A stranger is Vi, and the conditional softens the request.',
  },
  {
    mode: 'molbe',
    q: 'Što zvuči kao zahtjev, a ne kao pristojna narudžba?',
    en: 'Which sounds like a demand rather than a polite order?',
    opts: ['Hoću kavu!', 'Htio bih kavu.', 'Htjela bih kavu.', 'Želio bih kavu.'],
    answer: 'Hoću kavu!',
    tip: 'Correct grammar, but blunt. The conditional is polite.',
  },
  {
    mode: 'molbe',
    q: 'Bi li mi ____ sol?',
    en: 'Would you pass me the salt? (to a friend, a man)',
    opts: ['dodao', 'dodala', 'dodaj', 'dodati'],
    answer: 'dodao',
    tip: 'Here the participle of dodati itself follows bi li mi, agreeing with a man.',
  },
  {
    mode: 'molbe',
    q: 'Biste li mi mogli ____?',
    en: 'Could you help me?',
    opts: ['pomoći', 'pomognete', 'pomogli', 'pomoć'],
    answer: 'pomoći',
    tip: 'After mogli comes the infinitive pomoći. pomoć is the noun.',
  },
  // ── prijedlozi ────────────────────────────────────────────────────────────
  {
    mode: 'prijedlozi',
    q: 'Mogli ____ ići u kino.',
    en: 'We could go to the cinema.',
    opts: ['bismo', 'bi', 'biste', 'bih'],
    answer: 'bismo',
    tip: 'mi → bismo: a suggestion.',
  },
  {
    mode: 'prijedlozi',
    q: 'Trebao ____ se odmoriti.',
    en: 'You should rest. (to a friend, a man)',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'ti → bi: advice.',
  },
  {
    mode: 'prijedlozi',
    q: '____ bi nazvati mamu.',
    en: 'You should call your mum. (to a friend, a woman)',
    opts: ['Trebala', 'Trebao', 'Trebali', 'Trebalo'],
    answer: 'Trebala',
    tip: 'The participle agrees with the friend, a woman.',
  },
  {
    mode: 'prijedlozi',
    q: '____ bismo ići na more.',
    en: 'We could go to the seaside.',
    opts: ['Mogli', 'Mogla', 'Mogu', 'Moći'],
    answer: 'Mogli',
    tip: 'For mi the participle is plural: mogli.',
  },
  {
    mode: 'prijedlozi',
    q: 'Koji je prijedlog u kondicionalu?',
    en: 'Which suggestion uses the conditional?',
    opts: [
      'Mogli bismo ići na izlet.',
      'Idemo na izlet!',
      'Išli smo na izlet.',
      'Ići ćemo na izlet.',
    ],
    answer: 'Mogli bismo ići na izlet.',
    tip: 'mogli bismo = we could. The others are the present, the past and the future.',
  },
  {
    mode: 'prijedlozi',
    q: 'Koji je savjet prijatelju?',
    en: 'Which one is advice to a friend, a man?',
    opts: [
      'Trebao bi ići liječniku.',
      'Trebao sam ići liječniku.',
      'Trebao bih ići liječniku.',
      'Trebali su ići liječniku.',
    ],
    answer: 'Trebao bi ići liječniku.',
    tip: 'trebao bi = you should. bih would be advice to yourself.',
  },
  {
    mode: 'prijedlozi',
    q: 'Mogli bismo ____ večeras.',
    en: 'We could go out tonight.',
    opts: ['izaći', 'izašli', 'izađemo', 'izaći ćemo'],
    answer: 'izaći',
    tip: 'After mogli bismo comes the infinitive.',
  },
  {
    mode: 'prijedlozi',
    q: 'Trebali ____ se odmoriti.',
    en: 'You should rest. (formal)',
    opts: ['biste', 'bismo', 'bi', 'bih'],
    answer: 'biste',
    tip: 'Formal Vi → biste, with the plural participle trebali.',
  },
];
