// src/data/drills/a2/officialFormsDrill.ts
//
// A2 OFFICIAL FORMS — the drill for the `official-forms` lesson (A2 position 7).
//
// Three modes, eight items each:
//   polja    — the field names on a form
//   pitanja  — an official's polite (Vi) questions
//   odgovori — answering them: rođen / rođena, the locative of places
//
// A singular participle with polite Vi (Kada ste rođena?) is heard from natives, so
// it is never offered as a distractor; the wrong options fail by case, person or word.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const OFFICIAL_FORMS_MODE_LABELS: Record<string, string> = {
  polja: '📋 Polja',
  pitanja: '🗣️ Pitanja',
  odgovori: '✍️ Odgovori',
};

export const OFFICIAL_FORMS_DRILL_DATA: ModeDrillItem[] = [
  // ── polja ─────────────────────────────────────────────────────────────────
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for your first name.',
    opts: ['ime', 'prezime', 'adresa', 'potpis'],
    answer: 'ime',
    tip: 'Ime is the first name; prezime is the family name.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for your family name.',
    opts: ['ime', 'prezime', 'spol', 'zanimanje'],
    answer: 'prezime',
    tip: 'Many forms put this field first.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for the day you were born.',
    opts: ['datum rođenja', 'mjesto rođenja', 'državljanstvo', 'zanimanje'],
    answer: 'datum rođenja',
    tip: 'A date is a datum.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for the town where you were born.',
    opts: ['datum rođenja', 'mjesto rođenja', 'adresa', 'potpis'],
    answer: 'mjesto rođenja',
    tip: 'Mjesto is a place.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for your citizenship.',
    opts: ['državljanstvo', 'država', 'državljanin', 'zanimanje'],
    answer: 'državljanstvo',
    tip: 'The noun for citizenship ends in -stvo.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for what you do for a living.',
    opts: ['zanimanje', 'spol', 'adresa', 'potpis'],
    answer: 'zanimanje',
    tip: 'Čime se bavite? — the answer goes here.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field where you sign your name.',
    opts: ['ime', 'potpis', 'prezime', 'datum'],
    answer: 'potpis',
    tip: 'Potpisati se — to sign.',
  },
  {
    mode: 'polja',
    q: 'Polje na obrascu: ____',
    en: 'The field for your street and house number.',
    opts: ['adresa', 'mjesto rođenja', 'zanimanje', 'spol'],
    answer: 'adresa',
    tip: 'Where you live now.',
  },
  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: 'Kako se ____? — Prezivam se Horvat.',
    en: 'What is your surname?',
    opts: ['prezivate', 'zovete', 'prezivaš', 'stanujete'],
    answer: 'prezivate',
    tip: 'Prezivati se, in the polite Vi form.',
  },
  {
    mode: 'pitanja',
    q: 'Kada ste ____?',
    en: 'When were you born?',
    opts: ['rođeni', 'roditi', 'rođenje', 'rođenja'],
    answer: 'rođeni',
    tip: 'The participle, plural to match Vi.',
  },
  {
    mode: 'pitanja',
    q: 'Gdje ____? — U Zagrebu.',
    en: 'Where do you live? (polite)',
    opts: ['stanujete', 'stanuješ', 'stanujem', 'stanuju'],
    answer: 'stanujete',
    tip: 'The Vi form of stanovati.',
  },
  {
    mode: 'pitanja',
    q: '____ se bavite?',
    en: 'What do you do for a living?',
    opts: ['Čime', 'Što', 'Kako', 'Kamo'],
    answer: 'Čime',
    tip: 'Baviti se takes the instrumental.',
  },
  {
    mode: 'pitanja',
    q: 'Kojeg ste ____?',
    en: 'What is your citizenship?',
    opts: ['državljanstva', 'državljanstvo', 'državljanin', 'države'],
    answer: 'državljanstva',
    tip: 'Kojeg … ? asks in the genitive.',
  },
  {
    mode: 'pitanja',
    q: '____ mi Vaš OIB, molim.',
    en: 'Tell me your personal identification number, please.',
    opts: ['Recite', 'Reci', 'Recimo', 'Rekli'],
    answer: 'Recite',
    tip: 'The polite imperative of reći.',
  },
  {
    mode: 'pitanja',
    q: 'Molim Vas, ____ obrazac.',
    en: 'Please fill in the form.',
    opts: ['ispunite', 'ispuni', 'ispunjen', 'ispunjava'],
    answer: 'ispunite',
    tip: 'The polite imperative, to match Molim Vas.',
  },
  {
    mode: 'pitanja',
    q: '____ Vaša adresa?',
    en: 'What is your address?',
    opts: ['Koja je', 'Kako je', 'Kamo je', 'Čija je'],
    answer: 'Koja je',
    tip: 'Which one? — koja, agreeing with adresa.',
  },
  // ── odgovori ──────────────────────────────────────────────────────────────
  {
    mode: 'odgovori',
    q: 'Ivan: "____ sam u Splitu."',
    en: 'I was born in Split. (a man)',
    opts: ['Rođen', 'Rođena', 'Rođeno', 'Rođenje'],
    answer: 'Rođen',
    tip: 'A man says rođen.',
  },
  {
    mode: 'odgovori',
    q: 'Marija: "____ sam u Puli."',
    en: 'I was born in Pula. (a woman)',
    opts: ['Rođen', 'Rođena', 'Rođene', 'Rođenje'],
    answer: 'Rođena',
    tip: 'A woman says rođena.',
  },
  {
    mode: 'odgovori',
    q: 'Rođena sam u ____.',
    en: 'I was born in Germany.',
    opts: ['Njemačka', 'Njemačku', 'Njemačkoj', 'Njemačke'],
    answer: 'Njemačkoj',
    tip: 'Where? u + locative; an adjective-shaped country takes -oj.',
  },
  {
    mode: 'odgovori',
    q: 'Stanujem u ____ deset.',
    en: 'I live at number ten, Vukovar Street.',
    opts: ['Vukovarska', 'Vukovarsku', 'Vukovarskoj', 'Vukovarske'],
    answer: 'Vukovarskoj',
    tip: 'Where? u + locative, feminine.',
  },
  {
    mode: 'odgovori',
    q: 'Imam hrvatsko ____.',
    en: 'I have Croatian citizenship.',
    opts: ['državljanstvo', 'državljanstva', 'državljanin', 'državu'],
    answer: 'državljanstvo',
    tip: 'A neuter object does not change.',
  },
  {
    mode: 'odgovori',
    q: 'Po ____ sam inženjer.',
    en: 'I am an engineer by profession.',
    opts: ['zanimanje', 'zanimanju', 'zanimanja', 'zanimanjem'],
    answer: 'zanimanju',
    tip: 'Po here takes the locative.',
  },
  {
    mode: 'odgovori',
    q: 'Ja sam hrvatski ____.',
    en: 'I am a Croatian citizen. (a man)',
    opts: ['državljanin', 'državljanka', 'državljanstvo', 'državljana'],
    answer: 'državljanin',
    tip: 'The masculine noun agrees with hrvatski.',
  },
  {
    mode: 'odgovori',
    q: 'Ja sam hrvatska ____.',
    en: 'I am a Croatian citizen. (a woman)',
    opts: ['državljanin', 'državljanka', 'državljanstvo', 'državljanku'],
    answer: 'državljanka',
    tip: 'The feminine noun agrees with hrvatska.',
  },
];
