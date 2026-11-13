// src/data/drills/a1/travelCroatiaDrill.ts
//
// A1 TRAVELLING IN CROATIA — the drill for the `travel-croatia` capstone.
//
// Going: u / na + accusative; being: u / na + locative. Islands take na. Transport is the
// bare instrumental. The trip is told in the past and planned in the future. Facts about
// places are real: Dubrovnik's walls, Zadar's sea organ, Pula's Arena, Split's palace.
//
// Three modes:
//   kamo       — u / na and the case
//   prijevoz   — transport in the instrumental
//   putovanje  — past, future, weather and places

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TRAVEL_CROATIA_MODE_LABELS: Record<string, string> = {
  kamo: '🧭 Kamo i gdje',
  prijevoz: '🚆 Prijevoz',
  putovanje: '🧳 Putovanje',
};

export const TRAVEL_CROATIA_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'kamo',
    q: 'Idemo ____ Split.',
    en: 'We are going to Split.',
    opts: ['u', 'na', 'iz', 'po'],
    answer: 'u',
    tip: 'Cities take u.',
  },
  {
    mode: 'kamo',
    q: 'Idemo ____ Hvar.',
    en: 'We are going to Hvar.',
    opts: ['na', 'u', 'iz', 'po'],
    answer: 'na',
    tip: 'Islands take na.',
  },
  {
    mode: 'kamo',
    q: 'Bili smo u ____.',
    en: 'We were in Zadar.',
    opts: ['Zadru', 'Zadar', 'Zadaru', 'Zadra'],
    answer: 'Zadru',
    tip: 'Locative, and the fleeting a drops.',
  },
  {
    mode: 'kamo',
    q: 'Ljeto provodimo na ____.',
    en: 'We spend the summer on Hvar.',
    opts: ['Hvaru', 'Hvar', 'Hvara', 'Hvarom'],
    answer: 'Hvaru',
    tip: 'Being somewhere: the locative.',
  },
  {
    mode: 'kamo',
    q: 'Sutra putujemo u ____.',
    en: 'Tomorrow we travel to Pula.',
    opts: ['Pulu', 'Pula', 'Puli', 'Pulom'],
    answer: 'Pulu',
    tip: 'Going somewhere: the accusative.',
  },
  {
    mode: 'kamo',
    q: 'U ____ smo vidjeli Arenu.',
    en: 'In Pula we saw the Arena.',
    opts: ['Puli', 'Pula', 'Pulu', 'Pulom'],
    answer: 'Puli',
    tip: 'Being somewhere: the locative.',
  },
  {
    mode: 'kamo',
    q: 'Na ____ smo vidjeli jezera.',
    en: 'At Plitvice we saw the lakes.',
    opts: ['Plitvicama', 'Plitvice', 'Plitvica', 'Plitvicom'],
    answer: 'Plitvicama',
    tip: 'Plitvice is plural only: locative plural.',
  },
  {
    mode: 'kamo',
    q: 'Idemo ____ Istru.',
    en: 'We are going to Istria.',
    opts: ['u', 'na', 'iz', 'kod'],
    answer: 'u',
    tip: 'Regions take u.',
  },
  {
    mode: 'prijevoz',
    q: 'Putujemo ____.',
    en: 'We are travelling by train.',
    opts: ['vlakom', 'vlak', 'vlaku', 'vlaka'],
    answer: 'vlakom',
    tip: 'Transport: the bare instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'Na Hvar idemo ____.',
    en: 'We go to Hvar by ferry.',
    opts: ['trajektom', 'trajekt', 'trajektu', 'trajekta'],
    answer: 'trajektom',
    tip: 'Transport: the instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'Iz Zagreba smo išli ____.',
    en: 'From Zagreb we went by bus.',
    opts: ['autobusom', 'autobus', 'autobusu', 'autobusa'],
    answer: 'autobusom',
    tip: 'Transport: the instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'Do Splita ćemo ići ____.',
    en: 'We will go to Split by car.',
    opts: ['autom', 'auto', 'autu', 'auta'],
    answer: 'autom',
    tip: 'Auto is neuter: autom.',
  },
  {
    mode: 'prijevoz',
    q: 'Došli su ____ iz Londona.',
    en: 'They came from London by plane.',
    opts: ['avionom', 'avion', 'avionu', 'aviona'],
    answer: 'avionom',
    tip: 'Transport: the instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'Po otoku smo se vozili ____.',
    en: 'We rode around the island by bike.',
    opts: ['biciklom', 'bicikl', 'biciklu', 'bicikla'],
    answer: 'biciklom',
    tip: 'Transport: the instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'Na otok idemo ____.',
    en: 'We are going to the island by boat.',
    opts: ['brodom', 'brod', 'brodu', 'broda'],
    answer: 'brodom',
    tip: 'Transport: the instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'U grad idem ____.',
    en: 'I go into town on foot.',
    opts: ['pješice', 'pješak', 'pješaka', 'pješakom'],
    answer: 'pješice',
    tip: 'On foot is an adverb, not the instrumental of pješak.',
  },
  {
    mode: 'putovanje',
    q: 'Prošlog ljeta ____ na Hvaru.',
    en: 'Last summer we were on Hvar.',
    opts: ['smo bili', 'ćemo biti', 'smo bila', 'su bili'],
    answer: 'smo bili',
    tip: 'Last summer: the past tense.',
  },
  {
    mode: 'putovanje',
    q: 'Sljedeće godine ____ ići u Dubrovnik.',
    en: 'Next year we will go to Dubrovnik.',
    opts: ['ćemo', 'smo', 'ste', 'ću'],
    answer: 'ćemo',
    tip: 'The future for mi.',
  },
  {
    mode: 'putovanje',
    q: 'Na Hvaru je bilo ____.',
    en: 'It was hot on Hvar.',
    opts: ['vruće', 'vruć', 'vruća', 'vrući'],
    answer: 'vruće',
    tip: 'Weather: the neuter form.',
  },
  {
    mode: 'putovanje',
    q: 'Glavni grad Hrvatske je ____.',
    en: 'The capital of Croatia is…',
    opts: ['Zagreb', 'Split', 'Zadar', 'Osijek'],
    answer: 'Zagreb',
    tip: 'Zagreb is the capital.',
  },
  {
    mode: 'putovanje',
    q: 'Dubrovnik je poznat po gradskim ____.',
    en: 'Dubrovnik is famous for its city walls.',
    opts: ['zidinama', 'zidine', 'zidina', 'zidinu'],
    answer: 'zidinama',
    tip: 'Po + locative plural.',
  },
  {
    mode: 'putovanje',
    q: 'U Zadru možete slušati morske ____.',
    en: 'In Zadar you can listen to the sea organ.',
    opts: ['orgulje', 'orgulja', 'orguljama', 'orgulju'],
    answer: 'orgulje',
    tip: 'Orgulje is plural only; accusative orgulje.',
  },
  {
    mode: 'putovanje',
    q: 'U Splitu je ____ palača.',
    en: "In Split there is Diocletian's Palace.",
    opts: ['Dioklecijanova', 'Dioklecijanovu', 'Dioklecijanovoj', 'Dioklecijanov'],
    answer: 'Dioklecijanova',
    tip: 'The subject form, feminine to match palača.',
  },
  {
    mode: 'putovanje',
    q: 'Na Plitvicama ima puno jezera i ____.',
    en: 'At Plitvice there are many lakes and waterfalls.',
    opts: ['slapova', 'slapovi', 'slapove', 'slapovima'],
    answer: 'slapova',
    tip: 'After puno, the genitive plural.',
  },
];
