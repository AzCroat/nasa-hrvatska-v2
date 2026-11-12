// src/data/drills/c1/rareGenitivePrepositionsDrill.ts
//
// C1 LESS FREQUENT GENITIVE PREPOSITIONS — the drill for the
// `rare-genitive-prepositions` lesson (C1 position 17).
//
// Three modes:
//   znacenje — choose the preposition by meaning: usred / nasred, uoči, povodom,
//              prilikom, pomoću, putem, umjesto, poput, duž, mimo
//   oblik    — the genitive form after the preposition
//   zbog     — zbog (cause) against radi (purpose), and unatoč with the DATIVE
//
// Tijekom and za vrijeme are both correct for "during", so neither is ever offered as
// a wrong answer against the other.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const RARE_GENITIVE_PREPOSITIONS_MODE_LABELS: Record<string, string> = {
  znacenje: '🧭 Značenje',
  oblik: '🔤 Genitiv',
  zbog: '⚖️ Zbog, radi, unatoč',
};

export const RARE_GENITIVE_PREPOSITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Struja je nestala ____ utakmice.',
    en: 'The power went out in the middle of the match.',
    opts: ['nasred', 'usred', 'duž', 'putem'],
    answer: 'usred',
    tip: 'The middle of an event or a period: usred.',
  },
  {
    mode: 'znacenje',
    q: 'Netko je ostavio bicikl ____ pločnika.',
    en: 'Someone left a bicycle in the middle of the pavement.',
    opts: ['nasred', 'uoči', 'povodom', 'umjesto'],
    answer: 'nasred',
    tip: 'The middle of a surface: nasred.',
  },
  {
    mode: 'znacenje',
    q: '____ Uskrsa pekarnice rade i nedjeljom.',
    en: 'On the eve of Easter the bakeries open on Sunday too.',
    opts: ['Mimo', 'Duž', 'Uoči', 'Pomoću'],
    answer: 'Uoči',
    tip: 'The time just before an event: uoči.',
  },
  {
    mode: 'znacenje',
    q: 'Općina je izdala prigodnu marku ____ obljetnice osnutka.',
    en: 'The municipality issued a commemorative stamp to mark the anniversary of its founding.',
    opts: ['putem', 'povodom', 'nasred', 'umjesto'],
    answer: 'povodom',
    tip: 'What an event marks: povodom.',
  },
  {
    mode: 'znacenje',
    q: '____ upisa morate priložiti presliku svjedodžbe.',
    en: 'When enrolling, you must enclose a copy of your certificate.',
    opts: ['Prilikom', 'Nasred', 'Poput', 'Duž'],
    answer: 'Prilikom',
    tip: 'The formal "when" of a procedure: prilikom.',
  },
  {
    mode: 'znacenje',
    q: 'Vrata su otvorili ____ posebnog alata.',
    en: 'They opened the door with the help of a special tool.',
    opts: ['uoči', 'usred', 'pomoću', 'povodom'],
    answer: 'pomoću',
    tip: 'The means that made it possible: pomoću.',
  },
  {
    mode: 'znacenje',
    q: 'Natječaj je objavljen ____ službenih novina.',
    en: 'The competition was announced through the official gazette.',
    opts: ['nasred', 'putem', 'uoči', 'mimo'],
    answer: 'putem',
    tip: 'The channel: putem.',
  },
  {
    mode: 'znacenje',
    q: '____ ceste rastu stari čempresi.',
    en: 'Old cypresses grow along the road.',
    opts: ['Duž', 'Usred', 'Povodom', 'Umjesto'],
    answer: 'Duž',
    tip: 'Along the length of something: duž.',
  },
  {
    mode: 'znacenje',
    q: 'Dozvola je izdana ____ propisa.',
    en: 'The permit was issued in breach of the regulations.',
    opts: ['povodom', 'uoči', 'mimo', 'pomoću'],
    answer: 'mimo',
    tip: 'Contrary to, outside of: mimo.',
  },
  {
    mode: 'znacenje',
    q: 'Pjeva ____ prave operne pjevačice.',
    en: 'She sings like a real opera singer.',
    opts: ['putem', 'poput', 'nasred', 'uoči'],
    answer: 'poput',
    tip: 'Like, such as: poput.',
  },

  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Usred ____ začuo se pucanj.',
    en: 'In the middle of the night a shot was heard.',
    opts: ['noći', 'noć', 'noćom', 'noćima'],
    answer: 'noći',
    tip: 'Usred + genitive; noć is an i-noun, so noći.',
  },
  {
    mode: 'oblik',
    q: 'Umjesto ____ putovali smo vlakom do Splita.',
    en: 'Instead of by bus, we travelled to Split by train.',
    opts: ['autobus', 'autobusu', 'autobusom', 'autobusa'],
    answer: 'autobusa',
    tip: 'Umjesto + genitive: autobusa.',
  },
  {
    mode: 'oblik',
    q: 'Nasred ____ stoji stara fontana.',
    en: 'An old fountain stands in the middle of the square.',
    opts: ['trgu', 'trga', 'trg', 'trgom'],
    answer: 'trga',
    tip: 'Nasred + genitive: trga.',
  },
  {
    mode: 'oblik',
    q: 'Duž ____ postavljene su nove klupe.',
    en: 'New benches have been put up along the promenade.',
    opts: ['šetnicom', 'šetnici', 'šetnicu', 'šetnice'],
    answer: 'šetnice',
    tip: 'Duž + genitive: šetnice.',
  },
  {
    mode: 'oblik',
    q: 'Uoči ____ grad je bio prepun turista.',
    en: 'On the eve of the festival the town was packed with tourists.',
    opts: ['festivala', 'festivalu', 'festival', 'festivalom'],
    answer: 'festivala',
    tip: 'Uoči + genitive: festivala.',
  },
  {
    mode: 'oblik',
    q: 'Prilikom ____ na granici pokažite putovnicu.',
    en: 'At the border check, show your passport.',
    opts: ['kontroli', 'kontrolu', 'kontrole', 'kontrolom'],
    answer: 'kontrole',
    tip: 'Prilikom + genitive: kontrole.',
  },
  {
    mode: 'oblik',
    q: 'Prevela je pjesmu pomoću starog ____.',
    en: 'She translated the poem with the help of an old dictionary.',
    opts: ['rječniku', 'rječnika', 'rječnik', 'rječnikom'],
    answer: 'rječnika',
    tip: 'Pomoću + genitive: starog rječnika.',
  },
  {
    mode: 'oblik',
    q: 'Povodom Dana ____ održana je svečana sjednica.',
    en: 'A ceremonial session was held to mark City Day.',
    opts: ['grad', 'gradu', 'grada', 'gradom'],
    answer: 'grada',
    tip: 'Dan grada — the noun grad in the genitive.',
  },

  // ── zbog ──────────────────────────────────────────────────────────────────
  {
    mode: 'zbog',
    q: 'Let je otkazan ____ magle.',
    en: 'The flight was cancelled because of the fog.',
    opts: ['radi', 'zbog', 'unatoč', 'povodom'],
    answer: 'zbog',
    tip: 'The fog is the cause: zbog.',
  },
  {
    mode: 'zbog',
    q: 'Upisala je tečaj ____ boljeg posla.',
    en: 'She enrolled in the course in order to get a better job.',
    opts: ['zbog', 'unatoč', 'radi', 'nasred'],
    answer: 'radi',
    tip: 'The purpose: radi.',
  },
  {
    mode: 'zbog',
    q: 'Unatoč ____, nastavili smo uspon.',
    en: 'Despite the wind, we went on climbing.',
    opts: ['vjetra', 'vjetrom', 'vjetar', 'vjetru'],
    answer: 'vjetru',
    tip: 'Unatoč takes the dative: vjetru.',
  },
  {
    mode: 'zbog',
    q: 'Usprkos ____ liječnika, nastavio je pušiti.',
    en: 'Despite the doctor’s warnings, he kept smoking.',
    opts: ['upozorenja', 'upozorenjima', 'upozorenje', 'upozorenjem'],
    answer: 'upozorenjima',
    tip: 'Usprkos, like unatoč, takes the dative: upozorenjima.',
  },
  {
    mode: 'zbog',
    q: 'Škola je zatvorena ____ poplave.',
    en: 'The school is closed because of the flood.',
    opts: ['radi', 'unatoč', 'zbog', 'umjesto'],
    answer: 'zbog',
    tip: 'The flood is the cause: zbog.',
  },
  {
    mode: 'zbog',
    q: 'Došli smo ranije ____ dobrih mjesta.',
    en: 'We came early to get good seats.',
    opts: ['radi', 'zbog', 'unatoč', 'mimo'],
    answer: 'radi',
    tip: 'What it was done for: radi.',
  },
  {
    mode: 'zbog',
    q: 'Unatoč ____ cijenama, hotel je pun.',
    en: 'Despite the high prices, the hotel is full.',
    opts: ['visokih', 'visokim', 'visoke', 'visokom'],
    answer: 'visokim',
    tip: 'Unatoč + dative plural: visokim cijenama.',
  },
  {
    mode: 'zbog',
    q: 'Which phrase is correct?',
    en: 'despite everything',
    opts: ['unatoč svega', 'unatoč sve', 'unatoč svemu', 'unatoč svim'],
    answer: 'unatoč svemu',
    tip: 'Unatoč + dative: svemu.',
  },
];
