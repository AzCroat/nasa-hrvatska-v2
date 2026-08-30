// src/data/drills/politenessDrill.ts
//
// A2 VI AND TI — the drill for the `vi-vs-ti` lesson.
//
// WHY THIS NEEDED A NEW BANK RATHER THAN A ROUTE. The pool already has
// `tivicompare` at A2, labelled "Ti vs Vi", which looks like the obvious
// partner. It is a REFERENCE entry — a browse list with no quiz and no
// completion — so a coupling routed at it resolves and then never clears,
// which is exactly the live `idioms` defect one level up. It is also tagged
// `register`, a category already routed to `razgovorni` for the C2 colloquial
// lesson. Gated by shape rather than by CEFR, and claimed either way.
//
// The teaching this drills is a SOCIAL rule with a grammatical tail, and the
// grammatical tail is where learners actually come unstuck:
//
//   VI TAKES THE PLURAL VERB, ALWAYS — *Vi ste*, *Vi radite*, *Kako ste?* —
//   even though it addresses one person. A learner who says *Vi si* has
//   produced the one form that cannot exist.
//
//   THE PARTICIPLE AGREES WITH THE REAL PERSON, NOT THE PRONOUN. Speaking to
//   one woman: *Vi ste došli* is the standard written form, and this is the
//   detail no phrasebook mentions.
//
//   THE SWITCH IS OFFERED, NOT TAKEN. *Možemo li prijeći na ti?* comes from
//   the older or more senior person. Proposing it upward is the mistake, and
//   accepting warmly when it arrives is the whole of the etiquette.
//
// The default is the useful part for a heritage learner: when in doubt, Vi.
// It is never rude, and Croatians will invite you down from it.
//
// Three modes:
//   kada    — which one the situation calls for
//   oblici  — the verb forms Vi takes
//   prijelaz — the offer, and how it is answered

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const POLITENESS_MODE_LABELS: Record<string, string> = {
  kada: '🎩 Kada Vi, kada ti',
  oblici: '🔤 Oblici uz Vi',
  prijelaz: '🤝 Prijelaz na ti',
};

export const POLITENESS_DRILL_DATA: ModeDrillItem[] = [
  // ── kada ──────────────────────────────────────────────────────────────────
  {
    mode: 'kada',
    q: 'Prvi put upoznajete roditelje svoje djevojke. Kako im se obraćate?',
    en: 'Meeting your partner’s parents for the first time:',
    opts: ['Vi', 'ti', 'ovisi o dobi', 'bez zamjenice'],
    answer: 'Vi',
    tip: 'Vi, and keep it until they say otherwise. This one matters more than any other.',
  },
  {
    mode: 'kada',
    q: 'Razgovarate s liječnikom. Kako mu se obraćate?',
    en: 'Talking to a doctor:',
    opts: ['Vi', 'ti', 'svejedno', 'ti ako je mlad'],
    answer: 'Vi',
    tip: 'Doctors, teachers and officials: Vi, whatever their age.',
  },
  {
    mode: 'kada',
    q: 'Razgovarate s desetogodišnjim djetetom. Kako mu se obraćate?',
    en: 'Talking to a ten-year-old:',
    opts: ['ti', 'Vi', 'ovisi', 'Vi dok ne kaže drukčije'],
    answer: 'ti',
    tip: 'Children get ti. Using Vi to a child sounds like a joke.',
  },
  {
    mode: 'kada',
    q: 'Ne znate koji oblik odabrati. Što birate?',
    en: 'You are not sure which to use:',
    opts: ['Vi', 'ti', 'izbjegavate zamjenicu', 'pitate'],
    answer: 'Vi',
    tip: 'When in doubt, Vi. It is never rude; ti to the wrong person can be.',
  },
  {
    mode: 'kada',
    q: 'Kolegi ste iste dobi i radite zajedno godinama. Što rabite?',
    en: 'A colleague your own age, for years:',
    opts: ['ti', 'Vi', 'Vi u uredu, ti izvan njega', 'oboje svejedno'],
    answer: 'ti',
    tip: 'Peers move to ti quickly, and staying on Vi would read as cold.',
  },
  {
    mode: 'kada',
    q: 'Kako se piše uljudno "Vi" u pismu?',
    en: 'How is the polite form written?',
    opts: ['velikim slovom', 'malim slovom', 'svejedno', 'u zagradama'],
    answer: 'velikim slovom',
    tip: 'Capital Vi in writing marks the polite form and separates it from plural vi.',
  },
  {
    mode: 'kada',
    q: 'Obraćate se dvojici prijatelja odjednom. Koji je to "vi"?',
    en: 'Addressing two friends at once:',
    opts: ['obično množinsko vi', 'uljudno Vi', 'ti', 'nijedno'],
    answer: 'obično množinsko vi',
    tip: 'Same word, different job — and lower case, because nothing polite is happening.',
  },
  {
    mode: 'kada',
    q: 'Zašto je "Vi" korisno strancu?',
    en: 'Why is Vi useful for a foreigner?',
    opts: ['odmah pokazuje poštovanje', 'lakše se izgovara', 'kraće je', 'izbjegava padeže'],
    answer: 'odmah pokazuje poštovanje',
    tip: 'Getting it right with older people earns immediate goodwill.',
  },

  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Kako ____? (uljudno, jednoj osobi)',
    en: 'How are you? (polite, to one person)',
    opts: ['ste', 'si', 'je', 'sam'],
    answer: 'ste',
    tip: 'VI ALWAYS TAKES THE PLURAL VERB — Kako ste? — even for one person.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ hrvatski jako dobro.',
    en: 'You speak Croatian very well. (polite)',
    opts: ['govorite', 'govoriš', 'govori', 'govorim'],
    answer: 'govorite',
    tip: 'Second person plural, always.',
  },
  {
    mode: 'oblici',
    q: 'Koji je oblik nemoguć?',
    en: 'Which form cannot exist?',
    opts: ['Vi si', 'Vi ste', 'ti si', 'vi ste'],
    answer: 'Vi si',
    tip: 'Vi with a singular verb is the one combination Croatian has no use for.',
  },
  {
    mode: 'oblici',
    q: 'Obraćate se jednoj ženi: Vi ste ____.',
    en: 'To one woman: You have come.',
    opts: ['došli', 'došla', 'došle', 'došao'],
    answer: 'došli',
    tip: 'The standard written form keeps the participle plural with the polite Vi.',
  },
  {
    mode: 'oblici',
    q: 'Kako glasi uljudni imperativ od "doći"?',
    en: 'The polite imperative of doći:',
    opts: ['Dođite', 'Dođi', 'Dođimo', 'Doći'],
    answer: 'Dođite',
    tip: 'The plural imperative doubles as the polite one.',
  },
  {
    mode: 'oblici',
    q: 'Kako se uljudno pita za ime?',
    en: 'Asking someone’s name politely:',
    opts: ['Kako se zovete?', 'Kako se zoveš?', 'Kako se zove?', 'Kako te zovu?'],
    answer: 'Kako se zovete?',
    tip: 'And Kako se zoveš? is the same question to a friend.',
  },
  {
    mode: 'oblici',
    q: 'Koji je uljudni oblik od "Možeš li mi pomoći?"',
    en: 'The polite version:',
    opts: [
      'Možete li mi pomoći?',
      'Možeš li mi pomoći?',
      'Može li mi pomoći?',
      'Mogu li mi pomoći?',
    ],
    answer: 'Možete li mi pomoći?',
    tip: 'Only the verb changes — the rest of the sentence is untouched.',
  },
  {
    mode: 'oblici',
    q: 'Koji je posvojni pridjev uz uljudno Vi?',
    en: 'The possessive that goes with polite Vi:',
    opts: ['Vaš', 'tvoj', 'njegov', 'svoj'],
    answer: 'Vaš',
    tip: 'Vaša adresa, Vaš broj — capitalised in writing like Vi itself.',
  },

  // ── prijelaz ──────────────────────────────────────────────────────────────
  {
    mode: 'prijelaz',
    q: 'Kako glasi ponuda prijelaza na "ti"?',
    en: 'The offer to switch:',
    opts: ['Možemo li prijeći na ti?', 'Hoćemo li ti?', 'Smijem li na ti?', 'Idemo na ti?'],
    answer: 'Možemo li prijeći na ti?',
    tip: 'The fixed phrase, and it is short because the ceremony is small.',
  },
  {
    mode: 'prijelaz',
    q: 'Tko obično nudi prijelaz?',
    en: 'Who normally offers?',
    opts: ['stariji ili nadređeni', 'mlađi', 'gost', 'tko se prvi sjeti'],
    answer: 'stariji ili nadređeni',
    tip: 'It comes down the age or seniority gradient, never up it.',
  },
  {
    mode: 'prijelaz',
    q: 'Ponudili su vam prijelaz na "ti". Što činite?',
    en: 'You have been offered ti:',
    opts: ['prihvaćate srdačno', 'uljudno odbijate', 'ostajete na Vi', 'pitate zašto'],
    answer: 'prihvaćate srdačno',
    tip: 'Always accept warmly. Declining reads as keeping the person at a distance.',
  },
  {
    mode: 'prijelaz',
    q: 'Kako se srdačno prihvaća?',
    en: 'Accepting warmly:',
    opts: ['Naravno, rado!', 'Dobro.', 'Ako baš hoćete.', 'Može, valjda.'],
    answer: 'Naravno, rado!',
    tip: 'The others all accept and manage to sound reluctant doing it.',
  },
  {
    mode: 'prijelaz',
    q: 'Smijete li vi ponuditi prijelaz mnogo starijoj osobi?',
    en: 'May you offer it to someone much older?',
    opts: [
      'bolje ne, njihovo je da ponude',
      'da, uvijek',
      'da, nakon dva susreta',
      'nikad nitko ne nudi',
    ],
    answer: 'bolje ne, njihovo je da ponude',
    tip: 'Offering upward is the one move that lands badly.',
  },
  {
    mode: 'prijelaz',
    q: 'Što ako pogriješite i kažete "ti" umjesto "Vi"?',
    en: 'If you slip and say ti:',
    opts: [
      'ljubazno će vas ispraviti',
      'uvrijedit će se',
      'nitko ne primjećuje',
      'razgovor završava',
    ],
    answer: 'ljubazno će vas ispraviti',
    tip: 'Croatians correct a foreigner kindly. The slip costs nothing; not trying does.',
  },
  {
    mode: 'prijelaz',
    q: 'Nakon prijelaza na "ti", vraćate li se na "Vi"?',
    en: 'Do you go back to Vi afterwards?',
    opts: ['ne', 'da, u uredu', 'da, pred drugima', 'ovisi o danu'],
    answer: 'ne',
    tip: 'The switch is one-way. Going back would say something you did not mean.',
  },
  {
    mode: 'prijelaz',
    q: 'Što znači ako netko dugo ostaje na "Vi"?',
    en: 'Someone stays on Vi for a long time:',
    opts: ['drži distancu', 'ne voli vas', 'ne zna hrvatski', 'ništa'],
    answer: 'drži distancu',
    tip: 'Distance, not dislike — and in some workplaces it is simply the house style.',
  },
];
