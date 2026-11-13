// src/data/drills/a2/declensionReviewDrill.ts
//
// A2 DECLENSION REVIEW — the drill for the `declension-review` lesson (A2 position 3).
//
// Three modes, eight items each:
//   jednina — one noun, the case its sentence demands (singular)
//   mnozina — the same in the plural, including the genitive plural after numbers
//   pitanja — which question each case answers, and which case a word is in
//
// Distractors are the same noun in the wrong case. The English gloss names the
// meaning only, never a Croatian form.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DECLENSION_REVIEW_MODE_LABELS: Record<string, string> = {
  jednina: '1️⃣ Jednina',
  mnozina: '🔢 Množina',
  pitanja: '❓ Pitanja',
};

export const DECLENSION_REVIEW_DRILL_DATA: ModeDrillItem[] = [
  // ── jednina ───────────────────────────────────────────────────────────────
  {
    mode: 'jednina',
    q: 'Nemam ____.',
    en: 'I have no brother.',
    opts: ['brat', 'brata', 'bratu', 'bratom'],
    answer: 'brata',
    tip: 'Nemati takes the genitive.',
  },
  {
    mode: 'jednina',
    q: 'Pišem pismo ____.',
    en: 'I am writing a letter to my mother.',
    opts: ['majku', 'majke', 'majci', 'majkom'],
    answer: 'majci',
    tip: 'To whom? The dative — and the k becomes c before -i.',
  },
  {
    mode: 'jednina',
    q: 'Čekam ____ na stanici.',
    en: 'I am waiting for the bus at the stop.',
    opts: ['autobus', 'autobusa', 'autobusu', 'autobusom'],
    answer: 'autobus',
    tip: 'A masculine thing does not change in the accusative.',
  },
  {
    mode: 'jednina',
    q: 'Zovem ____ svaki dan.',
    en: 'I call my friend every day.',
    opts: ['prijatelj', 'prijatelja', 'prijatelju', 'prijateljem'],
    answer: 'prijatelja',
    tip: 'A living masculine object looks like the genitive.',
  },
  {
    mode: 'jednina',
    q: 'Živimo na ____.',
    en: 'We live in the countryside.',
    opts: ['selo', 'sela', 'selu', 'selom'],
    answer: 'selu',
    tip: 'Where? Na + locative.',
  },
  {
    mode: 'jednina',
    q: 'Idem u kino s ____.',
    en: 'I am going to the cinema with my husband.',
    opts: ['muž', 'muža', 'mužom', 'mužem'],
    answer: 'mužem',
    tip: 'After a soft ž the instrumental is -em.',
  },
  {
    mode: 'jednina',
    q: 'Pijem kavu bez ____.',
    en: 'I drink coffee without sugar.',
    opts: ['šećer', 'šećera', 'šećeru', 'šećerom'],
    answer: 'šećera',
    tip: 'Bez takes the genitive.',
  },
  {
    mode: 'jednina',
    q: 'Razgovaramo o ____.',
    en: 'We are talking about the film.',
    opts: ['film', 'filma', 'filmu', 'filmom'],
    answer: 'filmu',
    tip: 'O + locative.',
  },
  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'U sobi je deset ____.',
    en: 'There are ten students in the room.',
    opts: ['studenti', 'studente', 'studenata', 'studentima'],
    answer: 'studenata',
    tip: 'From five upwards: the genitive plural, with an extra a.',
  },
  {
    mode: 'mnozina',
    q: 'Rado pomažem ____.',
    en: 'I am glad to help my neighbours.',
    opts: ['susjedi', 'susjede', 'susjeda', 'susjedima'],
    answer: 'susjedima',
    tip: 'Pomagati takes the dative — here plural.',
  },
  {
    mode: 'mnozina',
    q: 'Volim velike ____.',
    en: 'I love big cities.',
    opts: ['gradovi', 'gradove', 'gradova', 'gradovima'],
    answer: 'gradove',
    tip: 'Masculine plural accusative: -ove.',
  },
  {
    mode: 'mnozina',
    q: 'Djeca se igraju sa ____.',
    en: 'The children are playing with the dogs.',
    opts: ['psi', 'pse', 'pasa', 'psima'],
    answer: 'psima',
    tip: 'With what? Instrumental plural.',
  },
  {
    mode: 'mnozina',
    q: 'Često pričam o ____.',
    en: 'I often talk about my sisters.',
    opts: ['sestre', 'sestara', 'sestrama', 'sestri'],
    answer: 'sestrama',
    tip: 'O + locative, feminine plural: -ama.',
  },
  {
    mode: 'mnozina',
    q: 'Na stolu su ____.',
    en: 'There are apples on the table.',
    opts: ['jabuke', 'jabuka', 'jabukama', 'jabuku'],
    answer: 'jabuke',
    tip: 'The subject of su: nominative plural.',
  },
  {
    mode: 'mnozina',
    q: 'Ljeti putujemo po ____.',
    en: 'In summer we travel around the islands.',
    opts: ['otoci', 'otoke', 'otoka', 'otocima'],
    answer: 'otocima',
    tip: 'Po + locative plural, and the k softens to c.',
  },
  {
    mode: 'mnozina',
    q: 'Nema ____ u parku.',
    en: 'There are no children in the park.',
    opts: ['djeca', 'djece', 'djeci', 'djecom'],
    answer: 'djece',
    tip: 'Nema takes the genitive; djeca declines like žena.',
  },
  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: 'Na koje pitanje odgovara genitiv?',
    en: 'Which question does the genitive answer?',
    opts: ['Koga? Čega?', 'Komu? Čemu?', 'S kim? Čim?', 'Tko? Što?'],
    answer: 'Koga? Čega?',
    tip: 'Of whom, of what — from, without, after quantities.',
  },
  {
    mode: 'pitanja',
    q: 'Na koje pitanje odgovara dativ?',
    en: 'Which question does the dative answer?',
    opts: ['Koga? Što?', 'Komu? Čemu?', 'Gdje?', 'S kim? Čim?'],
    answer: 'Komu? Čemu?',
    tip: 'To whom, for whom.',
  },
  {
    mode: 'pitanja',
    q: 'Na koje pitanje odgovara instrumental?',
    en: 'Which question does the instrumental answer?',
    opts: ['Tko? Što?', 'Koga? Čega?', 'Komu? Čemu?', 'S kim? Čim?'],
    answer: 'S kim? Čim?',
    tip: 'With whom, by what means.',
  },
  {
    mode: 'pitanja',
    q: 'Koji padež nikad ne dolazi bez prijedloga?',
    en: 'Which case never comes without a preposition?',
    opts: ['nominativ', 'akuzativ', 'lokativ', 'genitiv'],
    answer: 'lokativ',
    tip: 'u, na, o, po, pri — always one of them.',
  },
  {
    mode: 'pitanja',
    q: 'Koji padež koristimo kad nekoga dozivamo?',
    en: 'Which case do we use to call out to someone?',
    opts: ['vokativ', 'dativ', 'lokativ', 'instrumental'],
    answer: 'vokativ',
    tip: 'Ivane! Ana! Brate!',
  },
  {
    mode: 'pitanja',
    q: 'U rečenici "Idem u grad" imenica je u ____.',
    en: 'In the sentence meaning "I am going to town", which case is the noun?',
    opts: ['akuzativu', 'lokativu', 'genitivu', 'dativu'],
    answer: 'akuzativu',
    tip: 'Motion towards a place: u + accusative.',
  },
  {
    mode: 'pitanja',
    q: 'U rečenici "Živim u gradu" imenica je u ____.',
    en: 'In the sentence meaning "I live in town", which case is the noun?',
    opts: ['akuzativu', 'lokativu', 'instrumentalu', 'nominativu'],
    answer: 'lokativu',
    tip: 'Where? u + locative.',
  },
  {
    mode: 'pitanja',
    q: 'Koji padeži u množini imaju isti nastavak?',
    en: 'Which cases share one ending in the plural?',
    opts: [
      'dativ, lokativ i instrumental',
      'genitiv i lokativ',
      'nominativ i dativ',
      'akuzativ i instrumental',
    ],
    answer: 'dativ, lokativ i instrumental',
    tip: '-ima for masculine and neuter, -ama for feminine.',
  },
];
