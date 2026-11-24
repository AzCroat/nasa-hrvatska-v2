// src/data/drills/a1/imatiNematiDrill.ts
//
// A1 HAVING AND NOT HAVING — the drill for the `imati-nemati` lesson (A1, 31).
//
// Follows Hrvatski za početnike 1, pages 35–37 and 40: the hotel reception dialogue ("Imate
// li rezervaciju…?" — "Nemam rezervaciju za sobu. Imam za apartman." · "Imam jedan kofer i
// jednu torbu." · "Nema problema, imamo lift."), the table "glagol imati" with its
// negative (ja nemam … oni nemaju), "Što Hrvatska ima?" ("Ima zastavu i grb… predsjednika
// i premijera… more…"), the tourist-office dialogue ("Ima li Zagreb metro?" — "Ne!
// Nažalost, nema." · "Imamo planinu Medvednicu.") and "Imate li omiljenu…?". The book does
// not teach age with imati or "Ima li ovdje…?" on these pages; both come from the lesson.
// As in the book and the lesson, the thing you do not have stays in the accusative here
// (nema auto); nema + genitive is a later lesson.
//
// Three modes:
//   oblici — the forms of imati and nemati
//   objekt — what you have: the accusative after imam and nemam
//   imaLi  — "there is", age, and the fixed phrases

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IMATI_NEMATI_MODE_LABELS: Record<string, string> = {
  oblici: '🗝️ Imam, imaš, ima',
  objekt: '🧳 Imam torbu',
  imaLi: '🏧 Ima li ovdje…?',
};

export const IMATI_NEMATI_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Recepcionar: ____ li rezervaciju? — Turist: Da, za apartman.',
    en: 'Receptionist: Do you have a reservation? — Tourist: Yes, for an apartment.',
    opts: ['Imate', 'Imaš', 'Imam', 'Imaju'],
    answer: 'Imate',
    tip: 'A receptionist addresses a guest as Vi, and the Vi form is Imate. Imaš is for a friend, Imam is "I have", and Imaju is "they have".',
  },
  {
    mode: 'oblici',
    q: 'Moji prijatelji ____ velik apartman.',
    en: 'My friends have a big apartment.',
    opts: ['imaju', 'ima', 'imamo', 'imate'],
    answer: 'imaju',
    tip: 'prijatelji are oni, and the oni form is imaju. ima is for one person, imamo is "we have", and imate is "you have".',
  },
  {
    mode: 'oblici',
    q: 'Zagreb ____ tramvaje i autobuse.',
    en: 'Zagreb has trams and buses.',
    opts: ['ima', 'imaju', 'imam', 'imaš'],
    answer: 'ima',
    tip: 'The verb follows Zagreb, one city (on), so it is ima. imaju would be for several owners; the trams and buses are what the city has, not who has them. imam is "I have" and imaš is "you have".',
  },
  {
    mode: 'oblici',
    q: 'Nema problema, mi ____ lift.',
    en: 'No problem, we have an elevator.',
    opts: ['imamo', 'imate', 'imaju', 'imam'],
    answer: 'imamo',
    tip: 'mi takes the ending -mo: imamo. imate is for vi, imaju is for oni, and imam is for ja.',
  },
  {
    mode: 'oblici',
    q: 'Tom, ____ li ti plan grada?',
    en: 'Tom, do you have a map of the city?',
    opts: ['imaš', 'imate', 'ima', 'imam'],
    answer: 'imaš',
    tip: 'A first name and ti call for the ti form: imaš. imate is the polite or plural form, ima is for on or ona, and imam is "I have".',
  },
  {
    mode: 'oblici',
    q: 'Ja ____ rezervaciju za sobu. Imam za apartman.',
    en: 'I do not have a reservation for a room. I have one for an apartment.',
    opts: ['nemam', 'nemaš', 'nema', 'nisam'],
    answer: 'nemam',
    tip: 'imati fuses with ne into one word, and the ja form is nemam. nemaš is "you do not have", nema is "he or she does not have", and nisam is "I am not", from biti.',
  },
  {
    mode: 'oblici',
    q: 'Martin ____ auto. On ima bicikl.',
    en: 'Martin does not have a car. He has a bicycle.',
    opts: ['nema', 'nemam', 'nemaju', 'nije'],
    answer: 'nema',
    tip: 'Martin is on, and the negative on form is nema. nemam is "I do not have", nemaju is "they do not have", and nije is "is not", from biti.',
  },
  {
    mode: 'oblici',
    q: 'Oni ____ vremena za kino.',
    en: 'They do not have time for the movies.',
    opts: ['nemaju', 'nema', 'nemamo', 'nisu'],
    answer: 'nemaju',
    tip: 'The negative oni form is nemaju. nema is for one person, nemamo is "we do not have", and nisu is "they are not", from biti.',
  },
  {
    mode: 'oblici',
    q: 'Imate li vi auto? — Ne, ____. Imamo bicikle.',
    opts: ['nemamo', 'nemate', 'nemam', 'nemaju'],
    answer: 'nemamo',
    tip: 'Imamo in the next sentence shows that mi is answering, so the negative is nemamo. nemate repeats the vi of the question, nemam is only one person, and nemaju is about other people.',
  },

  // ── objekt ────────────────────────────────────────────────────────────────
  {
    mode: 'objekt',
    q: 'Turist ima jedan kofer i jednu ____.',
    cue: '(torba)',
    en: 'The tourist has one suitcase and one bag.',
    opts: ['torbu', 'torba', 'torbe', 'torbi'],
    answer: 'torbu',
    tip: 'What you have is an object, and a feminine noun in -a takes -u: torbu. torba is the dictionary form, torbe is the plural, and torbi is another form, not used for an object.',
  },
  {
    mode: 'objekt',
    q: 'Hrvatska ima zastavu i ____.',
    en: 'Croatia has a flag and a coat of arms.',
    opts: ['grb', 'grba', 'grbu', 'grbom'],
    answer: 'grb',
    tip: 'grb is a masculine thing, not alive, so as an object it does not change: ima grb. grba is the ending for people and animals only, and grbu and grbom are other forms.',
  },
  {
    mode: 'objekt',
    q: 'Moja sestra ima ____.',
    cue: '(pas)',
    en: 'My sister has a dog.',
    opts: ['psa', 'pas', 'psu', 'psi'],
    answer: 'psa',
    tip: 'A dog is alive, so the masculine object adds -a, and pas loses its a: psa. pas is the dictionary form, psu is another form, and psi is the plural, "dogs", as a subject.',
  },
  {
    mode: 'objekt',
    q: 'Hrvatska ima umjerenu i mediteransku ____.',
    cue: '(klima)',
    en: 'Croatia has a moderate and a Mediterranean climate.',
    opts: ['klimu', 'klima', 'klime', 'klimi'],
    answer: 'klimu',
    tip: 'klima is feminine, and as an object it takes -u, like the adjectives in front of it: mediteransku klimu. klima is the dictionary form, and klime and klimi are other forms.',
  },
  {
    mode: 'objekt',
    q: 'Zagreb ima ____ Medvednicu.',
    cue: '(planina)',
    en: 'Zagreb has the mountain Medvednica.',
    opts: ['planinu', 'planina', 'planine', 'planini'],
    answer: 'planinu',
    tip: 'Both words are objects and both take -u: planinu Medvednicu. planina is the dictionary form, planine is the plural, and planini is another form.',
  },
  {
    mode: 'objekt',
    q: 'Hrvatska ima ____.',
    en: 'Croatia has a sea.',
    opts: ['more', 'moru', 'morem', 'morima'],
    answer: 'more',
    tip: 'A neuter noun does not change as an object: ima more. moru, morem and morima are forms used after other words, never for the thing you have.',
  },
  {
    mode: 'objekt',
    q: 'Hrvatska ima ____ i premijera.',
    cue: '(predsjednik)',
    en: 'Croatia has a president and a prime minister.',
    opts: ['predsjednika', 'predsjednik', 'predsjedniku', 'predsjednici'],
    answer: 'predsjednika',
    tip: 'A president is a person, so the masculine object adds -a: predsjednika, like premijera. predsjednik is the dictionary form, predsjedniku is another form, and predsjednici is the plural.',
  },
  {
    mode: 'objekt',
    q: 'Marko nema ____, ali ima sestru.',
    cue: '(brat)',
    en: 'Marko does not have a brother, but he has a sister.',
    opts: ['brata', 'brat', 'bratu', 'braća'],
    answer: 'brata',
    tip: 'nemati takes an object just as imati does, and a brother is a person, so it adds -a: nema brata. brat is the dictionary form, bratu is another form, and braća means "brothers".',
  },
  {
    mode: 'objekt',
    q: 'Imaš li omiljenu ____?',
    cue: '(knjiga)',
    en: 'Do you have a favorite book?',
    opts: ['knjigu', 'knjiga', 'knjige', 'knjizi'],
    answer: 'knjigu',
    tip: 'knjiga is feminine, and as an object it takes -u, like omiljenu in front of it: omiljenu knjigu. knjiga is the dictionary form, knjige is the plural, and knjizi is another form.',
  },

  // ── imaLi ─────────────────────────────────────────────────────────────────
  {
    mode: 'imaLi',
    q: '____ li Zagreb metro? — Ne, nažalost.',
    en: 'Does Zagreb have a subway? — No, unfortunately.',
    opts: ['Ima', 'Imaš', 'Imaju', 'Je'],
    answer: 'Ima',
    tip: 'Zagreb is one city, so the question is Ima li…? Imaš is for ti, Imaju is for oni, and Je li would ask whether Zagreb is a subway.',
  },
  {
    mode: 'imaLi',
    q: 'Što znači "Ima li ovdje restoran?"',
    opts: [
      'Is there a restaurant here?',
      'Do you have a restaurant?',
      'Is this a restaurant?',
      'Where is the restaurant?',
    ],
    answer: 'Is there a restaurant here?',
    tip: 'Ima on its own also means "there is", so Ima li ovdje…? asks "Is there … here?" "Do you have" would be Imate li, "Is this" would be Je li ovo, and "Where" would be Gdje.',
  },
  {
    mode: 'imaLi',
    q: 'Koliko imaš godina? — ____ dvadeset godina.',
    en: 'How old are you? — I am twenty.',
    opts: ['Imam', 'Ja sam', 'Imaš', 'Jesam'],
    answer: 'Imam',
    tip: 'Croatian "has" its years: Imam dvadeset godina. Ja sam and Jesam use biti, as English does, which is wrong here, and Imaš is the form of the question, "you have".',
  },
  {
    mode: 'imaLi',
    q: 'Koliko ____ godina, gospodine Weber?',
    en: 'How old are you, Mr. Weber?',
    opts: ['imate', 'imaš', 'ste', 'ima'],
    answer: 'imate',
    tip: 'Age is asked with imati, and gospodine calls for the polite form: Koliko imate godina? imaš is for a friend, ste is a form of biti, and ima asks about a third person.',
  },
  {
    mode: 'imaLi',
    q: 'Moja baka ____ osamdeset godina.',
    en: 'My grandmother is eighty.',
    opts: ['ima', 'je', 'imaju', 'imam'],
    answer: 'ima',
    tip: 'Age uses imati, and baka is ona: ima osamdeset godina. je copies the English "is", imaju is for several people, and imam is "I have".',
  },
  {
    mode: 'imaLi',
    q: 'Hvala! — ____ na čemu.',
    en: 'Thank you! — You are welcome.',
    opts: ['Nema', 'Nemam', 'Nije', 'Ima'],
    answer: 'Nema',
    tip: 'The fixed reply to Hvala is Nema na čemu. Nemam would mean "I do not have", Nije is "is not", and Ima says the opposite, "there is".',
  },
  {
    mode: 'imaLi',
    q: 'Imate li plan grada? — ____',
    opts: ['Imam, izvolite!', 'Jesam, izvolite!', 'Nisam.', 'Ima trideset godina.'],
    answer: 'Imam, izvolite!',
    tip: 'A question with imati is answered with imati: Imam. Jesam and Nisam answer questions with biti (Jeste li…?), and "Ima trideset godina" gives an age, which nobody asked for.',
  },
  {
    mode: 'imaLi',
    q: 'Imate li brata ili sestru? — ____ brata.',
    cue: 'You and your sister answer together. You have a brother.',
    opts: ['Imamo', 'Jesmo', 'Imaš', 'Smo'],
    answer: 'Imamo',
    tip: 'Two people answering together say "we have": Imamo. Jesmo and Smo are forms of biti, "we are", and Imaš is "you have" (one person), which does not fit an answer about yourselves.',
  },
  {
    mode: 'imaLi',
    q: 'Što znači "Nemam vremena"?',
    opts: [
      'I do not have time.',
      'There is no problem.',
      'I am not on time.',
      'The weather is not good.',
    ],
    answer: 'I do not have time.',
    tip: 'Nemam is "I do not have", and vremena is "time" in this fixed phrase. "No problem" is Nema problema, "I am not" would be nisam, and nothing in the phrase is about the weather.',
  },
];
