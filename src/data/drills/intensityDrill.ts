// src/data/drills/intensityDrill.ts
//
// B2 DEGREES & INTENSITY — the drill for the `degrees-intensity` lesson.
//
// Not the same thing as comparison, and worth saying so because the names are
// close: `stupnjevanje` (B2) and the A2 `komparacija` both build comparatives —
// *veći*, *najveći*. This lesson is about GRADING what you have already said:
// how much, how fast it is rising, and how strong the word you reached for
// sounds. Nothing in the app drilled that, and pairing this lesson with a
// comparative drill would have been the wrong-drill mistake.
//
// The half that is invisible to a learner is register. *Jako*, *vrlo* and
// *veoma* all translate as "very" and are not interchangeable: one is spoken,
// one is written, one is literary. A B2 learner who writes *jako važno* in an
// essay has made no grammatical error at all.
//
// Three modes:
//   rast     — sve + comparative, and što… to…
//   pojacala — the intensifier scale, and which register each belongs to
//   prefiks  — pre- meaning "too", against vrlo meaning "very"

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const INTENSITY_MODE_LABELS: Record<string, string> = {
  rast: '📈 Sve više',
  pojacala: '🔊 Pojačala',
  prefiks: '⚠️ Pre- znači previše',
};

export const INTENSITY_DRILL_DATA: ModeDrillItem[] = [
  // ── rast ──────────────────────────────────────────────────────────────────
  {
    mode: 'rast',
    q: 'Govori ____ bolje.',
    en: 'He speaks better and better.',
    opts: ['sve', 'vrlo', 'jako', 'previše'],
    answer: 'sve',
    tip: 'sve + comparative = more and more: sve bolje, sve brže, sve više.',
  },
  {
    mode: 'rast',
    q: 'Dani su ____ kraći.',
    en: 'The days are getting shorter and shorter.',
    opts: ['sve', 'vrlo', 'previše', 'krajnje'],
    answer: 'sve',
    tip: 'sve kraći — the construction says the change is ongoing.',
  },
  {
    mode: 'rast',
    q: '____ prije, ____ bolje.',
    en: 'The sooner, the better.',
    opts: ['Što… to', 'Kako… tako', 'Ako… onda', 'Dok… dok'],
    answer: 'Što… to',
    tip: 'Što prije, to bolje — the fixed "the more… the more" frame.',
  },
  {
    mode: 'rast',
    q: '____ više učim, ____ manje znam.',
    en: 'The more I learn, the less I know.',
    opts: ['Što… to', 'Sve… sve', 'Kad… tad', 'Jer… zato'],
    answer: 'Što… to',
    tip: 'Both halves take a comparative, and the second opens with to.',
  },
  {
    mode: 'rast',
    q: 'Što znači "sve više"?',
    en: 'What does sve više mean?',
    opts: ['raste s vremenom', 'vrlo mnogo', 'previše', 'dovoljno'],
    answer: 'raste s vremenom',
    tip: 'It reports a rising trend, not a quantity.',
  },
  {
    mode: 'rast',
    q: 'Cijene rastu ____ brže.',
    en: 'Prices are rising faster and faster.',
    opts: ['sve', 'vrlo', 'jako', 'krajnje'],
    answer: 'sve',
    tip: 'sve brže.',
  },
  {
    mode: 'rast',
    q: 'Koji oblik ide iza "sve"?',
    en: 'Which form follows sve?',
    opts: ['komparativ', 'superlativ', 'pozitiv', 'infinitiv'],
    answer: 'komparativ',
    tip: 'Always the comparative. Sve dobro would mean something else entirely.',
  },
  {
    mode: 'rast',
    q: 'Postaje mi ____ jasnije.',
    en: 'It is becoming clearer and clearer to me.',
    opts: ['sve', 'vrlo', 'previše', 'jedva'],
    answer: 'sve',
    tip: 'sve jasnije.',
  },

  // ── pojacala ──────────────────────────────────────────────────────────────
  {
    mode: 'pojacala',
    q: 'Koje je pojačalo najslabije?',
    en: 'Which is the weakest?',
    opts: ['jedva', 'prilično', 'vrlo', 'izuzetno'],
    answer: 'jedva',
    tip: 'jedva (barely) → pomalo → prilično → vrlo → izuzetno → krajnje.',
  },
  {
    mode: 'pojacala',
    q: 'Koje je najjače?',
    en: 'Which is the strongest?',
    opts: ['krajnje', 'prilično', 'pomalo', 'vrlo'],
    answer: 'krajnje',
    tip: 'Krajnje sits at the top of the scale and is used sparingly.',
  },
  {
    mode: 'pojacala',
    q: 'Koje se pojačalo rabi u GOVORU?',
    en: 'Which one belongs to speech?',
    opts: ['jako', 'vrlo', 'veoma', 'krajnje'],
    answer: 'jako',
    tip: 'Jako is spoken, vrlo is written, veoma is literary. All three mean "very".',
  },
  {
    mode: 'pojacala',
    q: 'Koje biste napisali u eseju?',
    en: 'Which would you write in an essay?',
    opts: ['vrlo', 'jako', 'strašno', 'baš'],
    answer: 'vrlo',
    tip: 'Vrlo is the neutral written choice. Jako važno in an essay is not a grammar error — it is a register one.',
  },
  {
    mode: 'pojacala',
    q: 'Koje zvuči književno?',
    en: 'Which sounds literary?',
    opts: ['veoma', 'jako', 'baš', 'skroz'],
    answer: 'veoma',
    tip: 'Veoma is the most elevated of the three.',
  },
  {
    mode: 'pojacala',
    q: 'Bilo je ____ zanimljivo. (umjereno)',
    en: 'It was fairly interesting.',
    opts: ['prilično', 'krajnje', 'jedva', 'izuzetno'],
    answer: 'prilično',
    tip: 'Prilično sits in the middle: more than a little, less than very.',
  },
  {
    mode: 'pojacala',
    q: '____ sam ga čuo.',
    en: 'I could barely hear him.',
    opts: ['Jedva', 'Vrlo', 'Izuzetno', 'Prilično'],
    answer: 'Jedva',
    tip: 'Jedva marks the bottom of the scale.',
  },
  {
    mode: 'pojacala',
    q: 'Zašto je izbor pojačala važan?',
    en: 'Why does the choice matter?',
    opts: ['nosi registar', 'mijenja padež', 'mijenja vrijeme', 'nije važan'],
    answer: 'nosi registar',
    tip: 'They are grammatically interchangeable and stylistically are not.',
  },

  // ── prefiks ───────────────────────────────────────────────────────────────
  {
    mode: 'prefiks',
    q: 'Što znači "preskup"?',
    en: 'What does preskup mean?',
    opts: ['preskupo, više nego treba', 'vrlo skup', 'najskuplji', 'jeftin'],
    answer: 'preskupo, više nego treba',
    tip: 'pre- means TOO, not very. Preskup = too expensive, and that is a complaint.',
  },
  {
    mode: 'prefiks',
    q: 'Kaput je ____. (too big)',
    en: 'The coat is too big.',
    opts: ['prevelik', 'vrlo velik', 'najveći', 'veći'],
    answer: 'prevelik',
    tip: 'prevelik = too big. Vrlo velik would just be very big, with no problem implied.',
  },
  {
    mode: 'prefiks',
    q: 'Koja je razlika: "prevelik" i "vrlo velik"?',
    en: 'What is the difference?',
    opts: ['previše / jako', 'formalno / neformalno', 'nema razlike', 'množina / jednina'],
    answer: 'previše / jako',
    tip: 'Pre- says it exceeds what is wanted; vrlo just measures.',
  },
  {
    mode: 'prefiks',
    q: 'Stigli smo ____. (too late)',
    en: 'We arrived too late.',
    opts: ['prekasno', 'vrlo kasno', 'kasnije', 'najkasnije'],
    answer: 'prekasno',
    tip: 'prekasno — too late to be any use.',
  },
  {
    mode: 'prefiks',
    q: 'Što izriče prefiks "pre-" na pridjevu?',
    en: 'What does pre- express?',
    opts: ['prekomjernost', 'najviši stupanj', 'usporedbu', 'umanjenicu'],
    answer: 'prekomjernost',
    tip: 'Excess. It is a judgement, not a measurement.',
  },
  {
    mode: 'prefiks',
    q: 'Juha je ____. (too salty)',
    en: 'The soup is too salty.',
    opts: ['preslana', 'vrlo slana', 'slanija', 'najslanija'],
    answer: 'preslana',
    tip: 'preslana — and it is a complaint about the soup.',
  },
  {
    mode: 'prefiks',
    q: 'Ako je nešto "vrlo dobro", je li to problem?',
    en: 'Is "vrlo dobro" a problem?',
    opts: ['ne', 'da', 'ovisi', 'uvijek'],
    answer: 'ne',
    tip: 'No — only pre- carries the "more than it should be" judgement.',
  },
  {
    mode: 'prefiks',
    q: 'Zadaća je bila ____. (too hard)',
    en: 'The homework was too hard.',
    opts: ['preteška', 'vrlo teška', 'teža', 'najteža'],
    answer: 'preteška',
    tip: 'preteška.',
  },
];
