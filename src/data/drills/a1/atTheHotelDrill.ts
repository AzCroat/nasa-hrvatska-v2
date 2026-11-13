// src/data/drills/a1/atTheHotelDrill.ts
//
// A1 AT THE HOTEL — the drill for the `at-the-hotel` lesson.
//
// Reception is polite vi (Imate li…?), the room is an object (slobodnu sobu), and a
// broken machine is "it" (Tuš ne radi). No locative, no instrumental and no modals:
// they arrive later in the course.
//
// Three modes:
//   prijava  — checking in, the receptionist's phrases
//   soba     — asking for and booking a room, how long you stay
//   problem  — what does not work, and the questions you ask

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const AT_THE_HOTEL_MODE_LABELS: Record<string, string> = {
  prijava: '🛎️ Prijava',
  soba: '🛏️ Soba',
  problem: '🔧 Problem',
};

export const AT_THE_HOTEL_DRILL_DATA: ModeDrillItem[] = [
  // ── prijava ──────────────────────────────────────────────────────────────
  {
    mode: 'prijava',
    q: 'Dobar dan, imam ____.',
    en: 'Good afternoon, I have a booking.',
    opts: ['rezervacija', 'rezervaciju', 'rezervacije', 'rezervaciji'],
    answer: 'rezervaciju',
    tip: 'What you have is an object: -a → -u.',
  },
  {
    mode: 'prijava',
    q: 'Na koje ____? (the receptionist asks for your name)',
    en: 'Under what name?',
    opts: ['ime', 'imena', 'imenu', 'imenom'],
    answer: 'ime',
    tip: 'ime is neuter, so it does not change: Na koje ime?',
  },
  {
    mode: 'prijava',
    q: 'Vašu ____, molim.',
    en: 'Your passport, please.',
    opts: ['putovnica', 'putovnice', 'putovnicu', 'putovnici'],
    answer: 'putovnicu',
    tip: 'The passport is asked for: putovnicu, and vaša follows.',
  },
  {
    mode: 'prijava',
    q: 'The receptionist hands you the key. What do they say?',
    en: 'Here is your key.',
    opts: ['Izvolite ključ.', 'Račun, molim.', 'Na koje ime?', 'Gdje je lift?'],
    answer: 'Izvolite ključ.',
    tip: 'Izvolite — here you are.',
  },
  {
    mode: 'prijava',
    q: 'What does the receptionist wish you at the end?',
    en: 'Enjoy your stay!',
    opts: ['Ugodan boravak!', 'Laku noć!', 'Dobar tek!', 'Sretan put!'],
    answer: 'Ugodan boravak!',
    tip: 'boravak — a stay.',
  },
  {
    mode: 'prijava',
    q: '____ li rezervaciju? (the receptionist to you)',
    en: 'Do you have a booking?',
    opts: ['Imaš', 'Imam', 'Imate', 'Imaju'],
    answer: 'Imate',
    tip: 'Staff and guests use polite vi.',
  },
  {
    mode: 'prijava',
    q: 'Which word means check-in?',
    en: 'Choose the word for arriving and registering.',
    opts: ['odjava', 'prijava', 'lozinka', 'račun'],
    answer: 'prijava',
    tip: 'prijava — check-in; odjava — checkout.',
  },
  {
    mode: 'prijava',
    q: 'You want to pay before leaving. What do you say?',
    en: 'The bill, please.',
    opts: ['Račun, molim.', 'Ključ, molim.', 'Izvolite.', 'Doručak, molim.'],
    answer: 'Račun, molim.',
    tip: 'račun — the bill.',
  },

  // ── soba ─────────────────────────────────────────────────────────────────
  {
    mode: 'soba',
    q: 'Imate li slobodnu ____?',
    en: 'Do you have a free room?',
    opts: ['soba', 'sobe', 'sobi', 'sobu'],
    answer: 'sobu',
    tip: 'The room is an object: sobu.',
  },
  {
    mode: 'soba',
    q: 'Imate li ____ sobu? (slobodan)',
    en: 'Do you have a free room?',
    opts: ['slobodna', 'slobodnu', 'slobodne', 'slobodnoj'],
    answer: 'slobodnu',
    tip: 'The adjective moves with the room: slobodnu sobu.',
  },
  {
    mode: 'soba',
    q: 'Rezerviram ____ sobu. (dvokrevetan)',
    en: 'I am booking a double room.',
    opts: ['dvokrevetnu', 'dvokrevetna', 'dvokrevetne', 'dvokrevetnoj'],
    answer: 'dvokrevetnu',
    tip: 'Feminine object: -u on the adjective too.',
  },
  {
    mode: 'soba',
    q: 'Ostajem ____ noć.',
    en: 'I am staying one night.',
    opts: ['jedna', 'jedan', 'jednu', 'jedne'],
    answer: 'jednu',
    tip: 'noć is feminine and does not change; jedna → jednu.',
  },
  {
    mode: 'soba',
    q: 'Ostajemo ____ tjedan.',
    en: 'We are staying the whole week.',
    opts: ['cijeli', 'cijelu', 'cijelog', 'cijela'],
    answer: 'cijeli',
    tip: 'tjedan is a masculine thing: nothing changes.',
  },
  {
    mode: 'soba',
    q: 'Which phrase means a single room?',
    en: 'A room with one bed.',
    opts: ['dvokrevetna soba', 'slobodna soba', 'jednokrevetna soba', 'mala soba'],
    answer: 'jednokrevetna soba',
    tip: 'jedan krevet — one bed.',
  },
  {
    mode: 'soba',
    q: 'Which sentence is the polite question to a receptionist?',
    en: 'Do you have a free room?',
    opts: [
      'Imaš li slobodnu sobu?',
      'Imate li slobodna soba?',
      'Imate li slobodnu sobu?',
      'Imam li slobodnu sobu?',
    ],
    answer: 'Imate li slobodnu sobu?',
    tip: 'Polite imate, and the object form slobodnu sobu.',
  },
  {
    mode: 'soba',
    q: 'Imamo jednu ____ sobu. (dvokrevetan)',
    en: 'We have one double room.',
    opts: ['dvokrevetna', 'dvokrevetne', 'dvokrevetnu', 'dvokrevetnom'],
    answer: 'dvokrevetnu',
    tip: 'What we have is an object: dvokrevetnu sobu.',
  },

  // ── problem ──────────────────────────────────────────────────────────────
  {
    mode: 'problem',
    q: 'Oprostite, tuš ne ____.',
    en: 'Excuse me, the shower does not work.',
    opts: ['radim', 'radi', 'rade', 'radiš'],
    answer: 'radi',
    tip: 'The shower is "it": radi.',
  },
  {
    mode: 'problem',
    q: 'Klima ____.',
    en: 'The air conditioning does not work.',
    opts: ['nije radi', 'ne radim', 'ne radi', 'ne rade'],
    answer: 'ne radi',
    tip: 'ne goes straight in front of the verb.',
  },
  {
    mode: 'problem',
    q: 'Voda je ____.',
    en: 'The water is cold.',
    opts: ['hladnu', 'hladna', 'hladne', 'hladnoj'],
    answer: 'hladna',
    tip: 'After je the adjective stays in the subject form.',
  },
  {
    mode: 'problem',
    q: '____ je doručak? — Ujutro.',
    en: 'When is breakfast? — In the morning.',
    opts: ['Gdje', 'Kada', 'Što', 'Koga'],
    answer: 'Kada',
    tip: 'A time answer: Kada?',
  },
  {
    mode: 'problem',
    q: '____ je lift? — Tamo, lijevo.',
    en: 'Where is the lift? — Over there, on the left.',
    opts: ['Kada', 'Koliko', 'Gdje', 'Tko'],
    answer: 'Gdje',
    tip: 'A place answer: Gdje?',
  },
  {
    mode: 'problem',
    q: 'Imate li wifi? Koja je ____?',
    en: 'Do you have wifi? What is the password?',
    opts: ['lozinka', 'lozinku', 'lozinke', 'lozinki'],
    answer: 'lozinka',
    tip: 'After je the noun stays in the subject form.',
  },
  {
    mode: 'problem',
    q: 'Which sentence is correct?',
    en: 'Excuse me, the lift does not work.',
    opts: [
      'Oprostite, lift ne radi.',
      'Oprostite, lift nije radi.',
      'Oprostite, lift ne radiš.',
      'Oprostite, lift ne radimo.',
    ],
    answer: 'Oprostite, lift ne radi.',
    tip: 'The lift is "it": ne radi.',
  },
  {
    mode: 'problem',
    q: 'What does "Doručak je uključen." mean?',
    en: 'Choose the meaning.',
    opts: [
      'Breakfast is included.',
      'Breakfast is over.',
      'Breakfast is cold.',
      'There is no breakfast.',
    ],
    answer: 'Breakfast is included.',
    tip: 'uključen — included.',
  },
];
