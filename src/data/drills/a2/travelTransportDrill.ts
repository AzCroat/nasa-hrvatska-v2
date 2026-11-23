// src/data/drills/a2/travelTransportDrill.ts
//
// A2 TRAVEL AND TRANSPORT — the drill for the `travel-transport` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 30, 81–82 and 87: the booking questions on the
// weekend-offers page ("Imate li slobodan apartman za dvije osobe? Koliko košta noćenje?
// Možemo li rezervirati… od… do… na ime…?"), "Zajedničko korištenje automobila" (putovati
// automobilom), the tram-stop dialogue ("ići tramvajem i pješice") and the debate "Je li
// bolje voziti se autom ili javnim prijevozom?". The book has no ticket-counter dialogue at
// this level; the ticket mode follows the lesson (polaziti / dolaziti, za + accusative,
// iz + genitive).
//
// Three modes:
//   cime     — the means of transport: the bare instrumental, and pješice
//   karta    — tickets and schedules: za Pulu, iz Zadra, polazi, dolazi
//   smjestaj — somewhere to stay: slobodna soba, noćenje, rezervacija

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TRAVEL_TRANSPORT_MODE_LABELS: Record<string, string> = {
  cime: '🚆 Čime putuješ?',
  karta: '🎫 Karta i vozni red',
  smjestaj: '🏨 Smještaj',
};

export const TRAVEL_TRANSPORT_DRILL_DATA: ModeDrillItem[] = [
  // ── cime ──────────────────────────────────────────────────────────────────
  {
    mode: 'cime',
    q: 'Na posao idem ____.',
    en: 'I go to work by tram.',
    opts: ['tramvajem', 'tramvajom', 's tramvajem', 'tramvaju'],
    answer: 'tramvajem',
    tip: 'A means of transport is the instrumental with no preposition, and after the soft j the ending is -em: tramvajem. "tramvajom" has the wrong vowel, s would make the tram your companion, and tramvaju is the dative or locative.',
  },
  {
    mode: 'cime',
    q: 'Iz Zagreba u London letimo ____.',
    en: 'From Zagreb to London we fly by plane.',
    opts: ['avionom', 'avion', 's avionom', 'avionu'],
    answer: 'avionom',
    tip: 'Transport is the bare instrumental: avionom. avion is the dictionary form, s avionom would mean together with a plane, and avionu is the dative or locative.',
  },
  {
    mode: 'cime',
    q: 'Tom ne ide autom. Ide tramvajem i ____.',
    en: 'Tom does not go by car. He goes by tram and on foot.',
    opts: ['pješice', 'pješicom', 'nogama', 'na nogu'],
    answer: 'pješice',
    tip: 'On foot is its own word, pješice, with no ending to add. "pješicom" forces the transport ending onto it, and nogama and "na nogu" translate the English literally.',
  },
  {
    mode: 'cime',
    q: 'Djeca idu u školu ____.',
    en: 'The children go to school by bus.',
    opts: ['autobusom', 'autobus', 's autobusom', 'autobusu'],
    answer: 'autobusom',
    tip: 'The means of transport is the instrumental alone: autobusom. autobus is the dictionary form, s autobusom adds a preposition that turns the bus into company, and autobusu is the dative or locative.',
  },
  {
    mode: 'cime',
    q: 'Vozimo se ____ do mora.',
    en: 'We are driving to the sea by car.',
    opts: ['autom', 'auto', 's autom', 'autu'],
    answer: 'autom',
    tip: 'voziti se takes the bare instrumental: autom. auto is the dictionary form, s autom would mean alongside a car, and autu is the dative or locative.',
  },
  {
    mode: 'cime',
    q: '____ putuješ u Split? — Vlakom.',
    en: 'How are you getting to Split? — By train.',
    opts: ['Čime', 'Što', 'S čim', 'Kime'],
    answer: 'Čime',
    tip: 'The answer is an instrumental (vlakom), and the instrumental of što is čime — with no preposition, just like the answer. Što is the subject form, S čim asks what you have with you, and Kime asks about a person.',
  },
  {
    mode: 'cime',
    q: 'Ljeti se po gradu vozim ____.',
    en: 'In summer I ride a bike around town.',
    opts: ['biciklom', 'bicikl', 's biciklom', 'biciklu'],
    answer: 'biciklom',
    tip: 'With se the verb is voziti se, and what you ride is in the instrumental: biciklom. bicikl would fit only without se (vozim bicikl), s biciklom means walking beside it, and biciklu is the dative or locative.',
  },
  {
    mode: 'cime',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (We are traveling by train.)',
    opts: ['Putujemo vlakom.', 'Putujemo s vlakom.', 'Putujemo na vlak.', 'Putujemo vlak.'],
    answer: 'Putujemo vlakom.',
    tip: 'Transport is the instrumental with nothing in front: Putujemo vlakom. s vlakom makes the train a companion, na vlak means onto the train, and vlak with no ending cannot say how you travel.',
  },
  {
    mode: 'cime',
    q: 'Na otok Hvar idemo ____.',
    en: 'We are going to the island of Hvar by ferry.',
    opts: ['trajektom', 'trajekt', 's trajektom', 'trajektu'],
    answer: 'trajektom',
    tip: 'The ferry is the means, so the instrumental with no preposition: trajektom. trajekt is the dictionary form, s trajektom would mean in the company of a ferry, and trajektu is the dative or locative.',
  },

  // ── karta ─────────────────────────────────────────────────────────────────
  {
    mode: 'karta',
    q: 'Jednu ____ kartu za Rijeku, molim.',
    en: 'One one-way ticket to Rijeka, please.',
    opts: ['jednosmjernu', 'jednosmjerna', 'jednosmjerne', 'jednosmjernoj'],
    answer: 'jednosmjernu',
    tip: 'What you ask for is in the accusative, and the adjective matches jednu and kartu: jednosmjernu. jednosmjerna is the subject form, jednosmjerne is the form after dvije, and jednosmjernoj is the locative.',
  },
  {
    mode: 'karta',
    q: 'Kad polazi vlak ____?',
    en: 'When does the train to Pula leave?',
    opts: ['za Pulu', 'za Pula', 'iz Pulu', 'za Puli'],
    answer: 'za Pulu',
    tip: 'The destination of a train is za + accusative: za Pulu. "za Pula" leaves the name unchanged, iz marks where it comes from and takes the genitive, and Puli is the locative.',
  },
  {
    mode: 'karta',
    q: 'Autobus ____ dolazi u pet.',
    en: 'The bus from Zadar arrives at five.',
    opts: ['iz Zadra', 'iz Zadar', 'za Zadra', 'od Zadru'],
    answer: 'iz Zadra',
    tip: 'Where it comes from is iz + genitive, and Zadar loses its a: iz Zadra. "iz Zadar" has no case ending, za is for the destination and takes the accusative, and od with Zadru mixes a preposition with the wrong case.',
  },
  {
    mode: 'karta',
    q: 'Trajekt ____ u podne, a na otok dolazi u dva.',
    en: 'The ferry leaves at noon and gets to the island at two.',
    opts: ['polazi', 'dolazi', 'polazim', 'polaze'],
    answer: 'polazi',
    tip: 'Leaving is polaziti, and the ferry is one thing: polazi. dolazi means arrives, which comes later in the sentence, polazim is the form for I, and polaze is plural.',
  },
  {
    mode: 'karta',
    q: 'Vlak polazi iz Splita u dva, a u Zagreb ____ u osam.',
    en: 'The train leaves Split at two and gets to Zagreb at eight.',
    opts: ['dolazi', 'polazi', 'dolaze', 'dolazim'],
    answer: 'dolazi',
    tip: 'Getting somewhere is dolaziti: dolazi. polazi is the departure, already given for Split, dolaze is the plural, and dolazim is the form for I.',
  },
  {
    mode: 'karta',
    q: 'Autobus čeka na ____ broj tri.',
    en: 'The bus is waiting at platform number three.',
    opts: ['peronu', 'peron', 'perona', 'peronom'],
    answer: 'peronu',
    tip: 'Waiting is a position, so na + locative: na peronu. na peron is for walking onto it, perona is the genitive (s perona — from the platform), and peronom is the instrumental.',
  },
  {
    mode: 'karta',
    q: 'Koliko traje put do ____?',
    en: 'How long does the trip to Dubrovnik take?',
    opts: ['Dubrovnika', 'Dubrovnik', 'Dubrovniku', 'Dubrovnikom'],
    answer: 'Dubrovnika',
    tip: 'do takes the genitive: do Dubrovnika. Dubrovnik unchanged is what za or u would take, Dubrovniku is the locative, and Dubrovnikom the instrumental.',
  },
  {
    mode: 'karta',
    q: 'Kad polazi vlak? Pogledaj ____.',
    en: 'When does the train leave? Look at the …',
    opts: ['vozni red', 'peron', 'prtljagu', 'kašnjenje'],
    answer: 'vozni red',
    tip: 'Departure and arrival times are on the vozni red, the schedule. A peron is the platform, prtljaga is your luggage, and kašnjenje is a delay.',
  },
  {
    mode: 'karta',
    q: 'Imamo puno ____: dva kofera i tri torbe.',
    en: 'We have a lot of luggage: two suitcases and three bags.',
    opts: ['prtljage', 'prtljaga', 'prtljagu', 'prtljagom'],
    answer: 'prtljage',
    tip: 'puno takes the genitive: puno prtljage. prtljaga is the dictionary form, prtljagu the accusative you would use without puno, and prtljagom the instrumental.',
  },
  {
    mode: 'karta',
    q: 'Dvije ____ karte za Zadar, molim.',
    en: 'Two round-trip tickets to Zadar, please.',
    opts: ['povratne', 'povratnu', 'povratna', 'povratnih'],
    answer: 'povratne',
    tip: 'After dvije both words end in -e: dvije povratne karte. povratnu is for one ticket (jednu povratnu kartu), povratna is the subject form, and povratnih is what follows pet and more.',
  },

  // ── smjestaj ──────────────────────────────────────────────────────────────
  {
    mode: 'smjestaj',
    q: 'Imate li ____ sobu za večeras?',
    en: 'Do you have a room available for tonight?',
    opts: ['slobodnu', 'slobodna', 'slobodan', 'slobodnoj'],
    answer: 'slobodnu',
    tip: 'sobu is the object of imate, a feminine accusative, and the adjective matches: slobodnu. slobodna is the subject form, slobodan is masculine (slobodan apartman), and slobodnoj is the locative.',
  },
  {
    mode: 'smjestaj',
    q: 'Koliko košta jedno ____ s doručkom?',
    en: 'How much is one night with breakfast?',
    opts: ['noćenje', 'noćenja', 'noćenju', 'noć'],
    answer: 'noćenje',
    tip: 'One overnight stay is the subject of košta, and jedno shows a neuter noun: noćenje. noćenja is the genitive, noćenju the locative, and noć is feminine, so it could not follow jedno.',
  },
  {
    mode: 'smjestaj',
    q: 'Rezervirali smo sobu na ____ Kovač.',
    en: 'We reserved a room under the name Kovač.',
    opts: ['ime', 'imenu', 'imena', 'imenom'],
    answer: 'ime',
    tip: 'The set phrase is na ime + the surname, with the accusative, which for the neuter ime is unchanged. imenu is the locative, imena the genitive, and imenom the instrumental.',
  },
  {
    mode: 'smjestaj',
    q: 'Je li večera ____ u cijenu?',
    en: 'Is dinner included in the price?',
    opts: ['uključena', 'uključen', 'uključeno', 'uključiti'],
    answer: 'uključena',
    tip: 'The word agrees with večera, which is feminine: uključena. uključen is what you say about doručak (masculine), uključeno is neuter, and uključiti is the infinitive.',
  },
  {
    mode: 'smjestaj',
    q: 'Želimo rezervirati sobu od petka do ____.',
    en: 'We would like to reserve a room from Friday to Sunday.',
    opts: ['nedjelje', 'nedjelja', 'nedjelju', 'nedjelji'],
    answer: 'nedjelje',
    tip: 'do takes the genitive, just as od did with petka: do nedjelje. nedjelja is the dictionary form, nedjelju is what follows u, and nedjelji is the dative or locative.',
  },
  {
    mode: 'smjestaj',
    q: 'Ne želimo hotel. Želimo sami kuhati, zato tražimo ____.',
    en: 'We do not want a hotel. We want to cook for ourselves, so we are looking for …',
    opts: ['apartman', 'kolodvor', 'peron', 'trajekt'],
    answer: 'apartman',
    tip: 'An apartman is a place to stay with its own kitchen, which is what most people rent on the coast. A kolodvor is a station, a peron a platform, and a trajekt a ferry.',
  },
  {
    mode: 'smjestaj',
    q: 'Dobar dan, imam rezervaciju. Htio bih se ____.',
    en: 'Hello, I have a reservation. I would like to check in.',
    opts: ['prijaviti', 'prijavim', 'prijavio', 'prijavljen'],
    answer: 'prijaviti',
    tip: 'After htio bih the verb stays in the infinitive: prijaviti. prijavim is the present, prijavio is the past form, and prijavljen means already registered.',
  },
  {
    mode: 'smjestaj',
    q: 'Tražimo ____ blizu mora: hotel ili apartman.',
    en: 'We are looking for accommodation near the sea: a hotel or an apartment.',
    opts: ['smještaj', 'smještaja', 'smještaju', 'smještajem'],
    answer: 'smještaj',
    tip: 'What you are looking for is the object, and a masculine thing does not change in the accusative: smještaj. smještaja is the genitive, smještaju the dative or locative, smještajem the instrumental.',
  },
  {
    mode: 'smjestaj',
    q: 'Ostajemo tri ____.',
    en: 'We are staying three nights.',
    opts: ['noći', 'noć', 'noća', 'noćima'],
    answer: 'noći',
    tip: 'After dva/dvije, tri and četiri comes the genitive singular, and for the feminine noun noć that is noći. noć is the dictionary form, "noća" treats it like a masculine noun, and noćima is a plural case form.',
  },
];
