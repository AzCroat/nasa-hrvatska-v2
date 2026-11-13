// src/data/drills/b2/filmAndMusicDrill.ts
//
// B2 FILM AND MUSIC — the drill for the `film-and-music` lesson (B2 position 49).
//
// Three modes, eight items each:
//   film     — the Zagreb School of Animated Film, Surogat, the festivals, u kinu / na festivalu
//   glazba   — klapa, music festivals, music therapy (pomagati + dative)
//   dijalekt — dialect words heard in films, always labelled with their dialect
//
// Facts used: Dušan Vukotić's Surogat won the Oscar for the best animated short in
// 1962; Animafest Zagreb was founded in 1972; the Pula Film Festival screens in the
// Roman Arena (since 1954); Venice is the oldest of the great European festivals;
// klapa singing joined the UNESCO intangible heritage list in 2012.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FILM_AND_MUSIC_MODE_LABELS: Record<string, string> = {
  film: '🎬 Film',
  glazba: '🎶 Glazba',
  dijalekt: '🗣️ Dijalekt',
};

export const FILM_AND_MUSIC_DRILL_DATA: ModeDrillItem[] = [
  // ── film ──────────────────────────────────────────────────────────────────
  {
    mode: 'film',
    q: 'Koji je film 1962. dobio Oscara za najbolji animirani kratki film?',
    en: 'Which film won the Oscar for the best animated short film in 1962?',
    opts: ['Surogat', 'Profesor Baltazar', 'Tko pjeva zlo ne misli', 'Animafest'],
    answer: 'Surogat',
    tip: "Dušan Vukotić's film, from the Zagreb School.",
  },
  {
    mode: 'film',
    q: 'Tko je režirao film Surogat?',
    en: 'Who directed the film Ersatz?',
    opts: ['Krešo Golik', 'Dušan Vukotić', 'Antun Vrdoljak', 'Zlatko Grgić'],
    answer: 'Dušan Vukotić',
    tip: 'A leading artist of the Zagreb School of Animated Film.',
  },
  {
    mode: 'film',
    q: 'Animafest je festival ____ filma.',
    en: 'Animafest is a festival of animated film.',
    opts: ['animiranog', 'animirani', 'animiranom', 'animiranim'],
    answer: 'animiranog',
    tip: 'festival + genitive: animiranog filma.',
  },
  {
    mode: 'film',
    q: 'Pulski filmski festival održava se u ____.',
    en: 'The Pula Film Festival is held in the Arena.',
    opts: ['Areni', 'Arenu', 'Arena', 'Arenom'],
    answer: 'Areni',
    tip: 'Location after u: the locative.',
  },
  {
    mode: 'film',
    q: 'Sinoć smo gledali film ____ kinu.',
    en: 'Last night we watched a film at the cinema.',
    opts: ['na', 'u', 'po', 'za'],
    answer: 'u',
    tip: 'The cinema is a building: u kinu.',
  },
  {
    mode: 'film',
    q: 'Upoznali smo se ____ festivalu.',
    en: 'We met at the festival.',
    opts: ['u', 'na', 'kod', 'pod'],
    answer: 'na',
    tip: 'A festival is an event: na festivalu.',
  },
  {
    mode: 'film',
    q: 'Which is the oldest of the great European film festivals?',
    opts: ['Cannes', 'Berlin', 'Venice', 'Motovun'],
    answer: 'Venice',
    tip: 'It began before the Second World War.',
  },
  {
    mode: 'film',
    q: 'Gledam filmove s hrvatskim ____.',
    en: 'I watch films with Croatian subtitles.',
    opts: ['titlovima', 'titlove', 'titlova', 'titlovi'],
    answer: 'titlovima',
    tip: 's + instrumental plural.',
  },

  // ── glazba ────────────────────────────────────────────────────────────────
  {
    mode: 'glazba',
    q: 'Glazbena terapija pomaže starijim ____.',
    en: 'Music therapy helps older people.',
    opts: ['ljudima', 'ljude', 'ljudi', 'ljudski'],
    answer: 'ljudima',
    tip: 'pomagati + dative plural.',
  },
  {
    mode: 'glazba',
    q: 'Festival dalmatinskih klapa održava se u ____.',
    en: 'The Festival of Dalmatian Klapa Groups is held in Omiš.',
    opts: ['Omišu', 'Omiš', 'Omiša', 'Omišom'],
    answer: 'Omišu',
    tip: 'Location after u: the locative.',
  },
  {
    mode: 'glazba',
    q: 'Sinoć smo bili ____ koncertu.',
    en: 'Last night we were at a concert.',
    opts: ['u', 'na', 'po', 'za'],
    answer: 'na',
    tip: 'A concert is an event: na koncertu.',
  },
  {
    mode: 'glazba',
    q: 'Since when has klapa singing been on the UNESCO intangible heritage list?',
    opts: ['since 1954', 'since 1972', 'since 1991', 'since 2012'],
    answer: 'since 2012',
    tip: 'Well into the 21st century.',
  },
  {
    mode: 'glazba',
    q: 'What is klapa?',
    opts: [
      'a Dalmatian a cappella singing group',
      'a kind of guitar',
      'a film studio',
      'a folk dance from Slavonia',
    ],
    answer: 'a Dalmatian a cappella singing group',
    tip: 'Voices only, usually men, traditionally Dalmatian.',
  },
  {
    mode: 'glazba',
    q: 'Glazba pomaže pacijentima da se ____.',
    en: 'Music helps patients relax.',
    opts: ['opuste', 'opustiti', 'opustili', 'opustit će'],
    answer: 'opuste',
    tip: 'da + the present tense.',
  },
  {
    mode: 'glazba',
    q: 'Glazbena terapija pomaže djeci ____ izraze osjećaje.',
    en: 'Music therapy helps children express their feelings.',
    opts: ['da', 'jer', 'zato', 'ako'],
    answer: 'da',
    tip: 'pomagati nekome da + present.',
  },
  {
    mode: 'glazba',
    q: 'Klapa je pjevala, a cijela ____ pjevala je s njom.',
    en: 'The klapa sang, and the whole audience sang along.',
    opts: ['publika', 'publiku', 'publici', 'publikom'],
    answer: 'publika',
    tip: 'The subject of pjevala: nominative.',
  },

  // ── dijalekt ──────────────────────────────────────────────────────────────
  {
    mode: 'dijalekt',
    q: 'In kajkavian, "what" is ____.',
    opts: ['kaj', 'ča', 'tko', 'gdje'],
    answer: 'kaj',
    tip: 'The dialect is named after its word for "what".',
  },
  {
    mode: 'dijalekt',
    q: 'In čakavian, "what" is ____.',
    opts: ['kaj', 'ča', 'kad', 'koji'],
    answer: 'ča',
    tip: 'The dialect is named after its word for "what".',
  },
  {
    mode: 'dijalekt',
    q: 'The Dalmatian word "fjaka" describes:',
    opts: [
      'a sleepy, idle mood in the heat',
      'a strong north wind',
      'a fishing net',
      'a wedding song',
    ],
    answer: 'a sleepy, idle mood in the heat',
    tip: 'A hot afternoon when nobody wants to move.',
  },
  {
    mode: 'dijalekt',
    q: '"Idemo na đir" (Dalmatian) in standard Croatian is "Idemo u ____".',
    opts: ['šetnju', 'kino', 'trgovinu', 'školu'],
    answer: 'šetnju',
    tip: 'đir is a stroll.',
  },
  {
    mode: 'dijalekt',
    q: 'The Dalmatian word "šjor" means:',
    opts: ['mister, sir', 'fisherman', 'friend', 'singer'],
    answer: 'mister, sir',
    tip: 'The standard word is gospodin.',
  },
  {
    mode: 'dijalekt',
    q: 'The Dalmatian word "ćakula" means:',
    opts: ['a chat', 'a fight', 'a boat', 'a song'],
    answer: 'a chat',
    tip: 'The standard words are razgovor, čavrljanje.',
  },
  {
    mode: 'dijalekt',
    q: 'In "Tko pjeva zlo ne misli", set in 1930s Zagreb, the family speaks with a flavour of ____.',
    opts: ['kajkavian', 'čakavian', 'Dalmatian ikavian', 'Slavonian'],
    answer: 'kajkavian',
    tip: 'Zagreb lies in the kajkavian north.',
  },
  {
    mode: 'dijalekt',
    q: 'In an essay, which word should replace dialect "kaj"?',
    opts: ['što', 'ča', 'zašto', 'tko'],
    answer: 'što',
    tip: 'Write the standard word for "what".',
  },
];
