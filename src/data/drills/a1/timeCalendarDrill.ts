// src/data/drills/a1/timeCalendarDrill.ts
//
// A1 DAYS, MONTHS AND SEASONS — the drill for the `time-calendar` lesson (A1, 37).
//
// Follows Hrvatski za početnike 1, page 48 ("Kada?": ponedjeljak … nedjelja · u četvrtak ·
// u subotu · u nedjelju · "Kada Tom ide u grad?" — "U subotu." · ujutro, u podne,
// poslijepodne, navečer, u ponoć · zimi, ljeti), page 72 ("Mjeseci": siječanj … prosinac)
// and page 82 ("Godišnja doba": proljeće, ljeto, jesen, zima and their months). The book
// practices the days with ići (Kada ideš na predavanje?), which the app teaches one lesson
// later, so the sentences here use imati, raditi, učiti and biti. The book gives every
// month with its "in" form (u siječnju) and says "na jesen"; the lesson teaches the month
// names only and "u jesen", so no item asks for "in" a month. danas, sutra, jučer, uvijek,
// nikad and ponekad come from the lesson.
//
// Three modes:
//   dani    — the days, and u + day
//   mjeseci — the months and the seasons
//   kada    — the everyday time words

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TIME_CALENDAR_MODE_LABELS: Record<string, string> = {
  dani: '📅 U subotu',
  mjeseci: '🍂 Mjeseci i godišnja doba',
  kada: '⏰ Danas, sutra, uvijek',
};

export const TIME_CALENDAR_DRILL_DATA: ModeDrillItem[] = [
  // ── dani ──────────────────────────────────────────────────────────────────
  {
    mode: 'dani',
    q: 'Kada je konferencija? — U ____.',
    cue: '(srijeda)',
    en: 'When is the conference? — On Wednesday.',
    opts: ['srijedu', 'srijeda', 'srijede', 'srijedi'],
    answer: 'srijedu',
    tip: 'On a day is u + accusative, and a feminine day changes -a to -u: u srijedu. srijeda is the dictionary form, and srijede and srijedi are other forms, not used for "on Wednesday".',
  },
  {
    mode: 'dani',
    q: 'Trgovina ne radi u ____.',
    cue: '(nedjelja)',
    en: 'The store is not open on Sunday.',
    opts: ['nedjelju', 'nedjelja', 'nedjelje', 'nedjelji'],
    answer: 'nedjelju',
    tip: 'nedjelja is feminine, so after u it takes -u: u nedjelju. nedjelja is the dictionary form, and nedjelje and nedjelji are other forms, not used for "on Sunday".',
  },
  {
    mode: 'dani',
    q: 'Imamo hrvatski u ponedjeljak i u ____.',
    en: 'We have Croatian on Monday and on Friday.',
    opts: ['petak', 'petka', 'petku', 'petkom'],
    answer: 'petak',
    tip: 'A masculine day does not change after u: u petak, just like u ponedjeljak. petka, petku and petkom are other forms of the word, not the one for "on Friday".',
  },
  {
    mode: 'dani',
    q: 'Koncert je ____ subotu.',
    en: 'The concert is on Saturday.',
    opts: ['u', 'na', 'iz', 'za'],
    answer: 'u',
    tip: 'A day needs u in front of it: u subotu. na is not used with days of the week, iz means "out of", and za subotu would mean "for Saturday", not "on Saturday".',
  },
  {
    mode: 'dani',
    q: 'Danas je ponedjeljak. Sutra je ____.',
    opts: ['utorak', 'srijeda', 'nedjelja', 'četvrtak'],
    answer: 'utorak',
    tip: 'The day after ponedjeljak (Monday) is utorak (Tuesday). srijeda is Wednesday, četvrtak is Thursday, and nedjelja is Sunday, the day before Monday.',
  },
  {
    mode: 'dani',
    q: 'Sutra je petak. Danas je ____.',
    opts: ['četvrtak', 'subota', 'srijeda', 'utorak'],
    answer: 'četvrtak',
    tip: 'If tomorrow is petak (Friday), today is četvrtak (Thursday), the fourth day. subota is Saturday, srijeda is Wednesday, and utorak is Tuesday.',
  },
  {
    mode: 'dani',
    q: 'Vikend: subota i ____.',
    opts: ['nedjelja', 'nedjelju', 'petak', 'ponedjeljak'],
    answer: 'nedjelja',
    tip: 'The weekend is subota and nedjelja, and with no u in front the day keeps its dictionary form. nedjelju is only for after u, petak is Friday, and ponedjeljak is Monday.',
  },
  {
    mode: 'dani',
    q: 'Kada trebaš auto? — ____',
    en: 'When do you need the car? — On Monday.',
    opts: ['U ponedjeljak.', 'U ponedjeljka.', 'Ponedjeljak je.', 'Na ponedjeljku.'],
    answer: 'U ponedjeljak.',
    tip: '"On Monday" is u + the day, and a masculine day does not change: U ponedjeljak. ponedjeljka adds an ending the day does not take here, "Ponedjeljak je" means "it is Monday", and na is not used with days.',
  },
  {
    mode: 'dani',
    q: 'Što znači "u utorak"?',
    opts: ['on Tuesday', 'on Thursday', 'in the morning', 'tomorrow'],
    answer: 'on Tuesday',
    tip: 'utorak is Tuesday, so u utorak is "on Tuesday". Thursday is četvrtak, "in the morning" is ujutro, and "tomorrow" is sutra.',
  },

  // ── mjeseci ───────────────────────────────────────────────────────────────
  {
    mode: 'mjeseci',
    q: 'siječanj, veljača, ____, travanj',
    opts: ['ožujak', 'svibanj', 'lipanj', 'listopad'],
    answer: 'ožujak',
    tip: 'The third month is ožujak (March), between veljača and travanj. svibanj is May, lipanj is June, and listopad is October.',
  },
  {
    mode: 'mjeseci',
    q: 'Ljeto: lipanj, srpanj i ____.',
    en: 'Summer: June, July and …',
    opts: ['kolovoz', 'rujan', 'svibanj', 'prosinac'],
    answer: 'kolovoz',
    tip: 'After srpanj (July) comes kolovoz (August), the last summer month. rujan is September, svibanj is May, and prosinac is December.',
  },
  {
    mode: 'mjeseci',
    q: 'Zimski mjeseci su prosinac, ____ i veljača.',
    en: 'The winter months are December, … and February.',
    opts: ['siječanj', 'studeni', 'srpanj', 'svibanj'],
    answer: 'siječanj',
    tip: 'Between prosinac and veljača comes siječanj (January). studeni is November, srpanj is July, and svibanj is May.',
  },
  {
    mode: 'mjeseci',
    q: 'Jesen: rujan, listopad i ____.',
    en: 'Fall: September, October and …',
    opts: ['studeni', 'prosinac', 'srpanj', 'ožujak'],
    answer: 'studeni',
    tip: 'After listopad (October) comes studeni (November), the cold month. prosinac is December, srpanj is July, and ožujak is March.',
  },
  {
    mode: 'mjeseci',
    q: 'Ožujak, travanj i svibanj: to je ____.',
    opts: ['proljeće', 'ljeto', 'jesen', 'zima'],
    answer: 'proljeće',
    tip: 'March, April and May are spring: proljeće. ljeto is summer, jesen is fall, and zima is winter.',
  },
  {
    mode: 'mjeseci',
    q: 'Zimi radim, a ____ imam odmor.',
    en: 'In winter I work, and in summer I have a vacation.',
    opts: ['ljeti', 'ljeto', 'ljetu', 'ljeta'],
    answer: 'ljeti',
    tip: '"In summer" is the single word ljeti, the partner of zimi. ljeto is the name of the season, and ljetu and ljeta are other forms of it that do not mean "in summer" on their own.',
  },
  {
    mode: 'mjeseci',
    q: 'Kako se kaže "in winter"?',
    opts: ['zimi', 'zima', 'zimu', 'zime'],
    answer: 'zimi',
    tip: '"In winter" is one word, zimi, with no u in front. zima is the name of the season, and zimu and zime are other forms of it.',
  },
  {
    mode: 'mjeseci',
    q: 'Što znači "listopad"?',
    opts: ['October', 'November', 'September', 'August'],
    answer: 'October',
    tip: 'listopad is October, the month when leaves fall (list + pad). November is studeni, September is rujan, and August is kolovoz.',
  },
  {
    mode: 'mjeseci',
    q: 'Koja je rečenica točno napisana?',
    en: 'Which sentence is written correctly?',
    opts: [
      'Danas je petak, a mjesec je svibanj.',
      'Danas je Petak, a mjesec je svibanj.',
      'Danas je petak, a mjesec je Svibanj.',
      'Danas je Petak, a mjesec je Svibanj.',
    ],
    answer: 'Danas je petak, a mjesec je svibanj.',
    tip: 'Croatian does not capitalize days or months inside a sentence: petak, svibanj. The other three sentences capitalize one or both of them, as English does.',
  },

  // ── kada ──────────────────────────────────────────────────────────────────
  {
    mode: 'kada',
    q: 'Danas ne mogu. Možemo li ____, u petak?',
    cue: 'Today is Thursday.',
    opts: ['sutra', 'jučer', 'danas', 'nikad'],
    answer: 'sutra',
    tip: 'Friday is the day after Thursday, so it is sutra, "tomorrow". jučer is "yesterday", danas is "today", which the speaker has just ruled out, and nikad means "never".',
  },
  {
    mode: 'kada',
    q: 'Učim svaki dan: ponedjeljak, utorak, srijeda… ____ učim!',
    opts: ['Uvijek', 'Nikad', 'Ponekad', 'Jučer'],
    answer: 'Uvijek',
    tip: 'Someone who studies every day studies always: Uvijek. Nikad means "never" and would also need ne, Ponekad means only "sometimes", and Jučer means "yesterday".',
  },
  {
    mode: 'kada',
    q: 'Ne pušim. ____ ne pušim.',
    en: 'I do not smoke. I never smoke.',
    opts: ['Nikad', 'Uvijek', 'Često', 'Ponekad'],
    answer: 'Nikad',
    tip: '"Never" is Nikad, and it keeps the ne on the verb: Nikad ne pušim. Uvijek is "always", Često is "often", and Ponekad is "sometimes".',
  },
  {
    mode: 'kada',
    q: 'Sada je 8 sati ____.',
    cue: 'The sun has just come up and you are on your way to class.',
    opts: ['ujutro', 'navečer', 'u podne', 'u ponoć'],
    answer: 'ujutro',
    tip: 'The sun has just come up, so it is eight in the morning: ujutro. navečer is "in the evening", u podne is "at noon", and u ponoć is "at midnight".',
  },
  {
    mode: 'kada',
    q: 'Ručamo u ____, u 12 sati.',
    en: 'We have lunch at …, at twelve.',
    opts: ['podne', 'ponoć', 'jutro', 'večer'],
    answer: 'podne',
    tip: 'Lunch at twelve is at noon: u podne. ponoć is midnight, the other twelve, and jutro and večer are the morning and the evening.',
  },
  {
    mode: 'kada',
    q: 'Ne radim svaki dan. Radim ____.',
    opts: ['ponekad', 'uvijek', 'nikad', 'jučer'],
    answer: 'ponekad',
    tip: 'Not every day, but on some days: ponekad, "sometimes". uvijek means "always", nikad would need ne in front of the verb, and jučer means "yesterday".',
  },
  {
    mode: 'kada',
    q: 'Suprotno od "uvijek" je ____.',
    en: 'The opposite of "uvijek" is …',
    opts: ['nikad', 'često', 'sada', 'danas'],
    answer: 'nikad',
    tip: 'uvijek is "always", and its opposite is nikad, "never". često means "often", sada means "now", and danas means "today".',
  },
  {
    mode: 'kada',
    q: 'Što znači "jučer"?',
    opts: ['yesterday', 'tomorrow', 'today', 'this morning'],
    answer: 'yesterday',
    tip: 'jučer is "yesterday". "Tomorrow" is sutra, "today" is danas, and "this morning" is jutros.',
  },
  {
    mode: 'kada',
    q: 'Što znači "večeras"?',
    opts: ['this evening', 'this morning', 'every evening', 'yesterday evening'],
    answer: 'this evening',
    tip: 'večeras is "this evening", today only. "This morning" is jutros, "every evening" would be svaki dan navečer, and "yesterday evening" would need jučer.',
  },
];
