// src/data/drills/rhythmDrill.ts
//
// C2 RITAM REČENICE — the drill for the `ritam-recenice` lesson.
//
// The last thing a text needs is not correctness but SHAPE. Three devices do
// almost all of it.
//
// VARY THE LENGTH DELIBERATELY. Long, long, SHORT — and the short one carries
// the point, because it is the one the reader notices. A page of uniformly
// medium sentences reads as having nothing to emphasise.
//
// END WEIGHT: known information first, new information last. *Ivan je jučer
// kupio auto* and *Auto je Ivan kupio jučer* are both grammatical and answer
// different questions.
//
// AND THE CLITICS FOLLOW YOUR CHOICE. Whatever you front becomes the topic, and
// second position is then fixed for you — so word order in Croatian is a
// rhetorical instrument with a mechanical consequence.
//
// The escape from a tangled sentence is condensation or a full stop. Not a
// fourth level of subordination.
//
// Three modes:
//   duljina — varying length on purpose
//   tezina  — end weight, and what fronting does
//   izlaz   — getting out of a tangle

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const RHYTHM_MODE_LABELS: Record<string, string> = {
  duljina: '📏 Duljina',
  tezina: '⚖️ Kraj rečenice',
  izlaz: '🚪 Izlaz iz zapleta',
};

export const RHYTHM_DRILL_DATA: ModeDrillItem[] = [
  // ── duljina ───────────────────────────────────────────────────────────────
  {
    mode: 'duljina',
    q: 'Koji raspored najviše ističe posljednju rečenicu?',
    en: 'Which sequence emphasises the last sentence?',
    opts: ['duga, duga, kratka', 'kratka, kratka, duga', 'sve jednake', 'duga, kratka, duga'],
    answer: 'duga, duga, kratka',
    tip: 'The short one after long ones is the one the reader hears.',
  },
  {
    mode: 'duljina',
    q: 'Kako se čita niz jednako dugih rečenica?',
    en: 'How does uniform length read?',
    opts: ['kao da ništa nije važnije', 'kao naglašeno', 'kao formalno', 'kao brzo'],
    answer: 'kao da ništa nije važnije',
    tip: 'Nothing stands out, so the reader supplies no emphasis at all.',
  },
  {
    mode: 'duljina',
    q: 'Koliko razina podređivanja lekcija preporučuje?',
    en: 'How many levels of subordination?',
    opts: ['dvije', 'četiri', 'jednu', 'nema granice'],
    answer: 'dvije',
    tip: 'Two, not four. Beyond that the reader loses the main clause.',
  },
  {
    mode: 'duljina',
    q: 'Što se dogodi na četvrtoj razini podređivanja?',
    en: 'What happens at four levels?',
    opts: ['gubi se glavna rečenica', 'tekst je formalniji', 'ništa', 'raste preciznost'],
    answer: 'gubi se glavna rečenica',
    tip: 'And a reader who has lost it rereads instead of continuing.',
  },
  {
    mode: 'duljina',
    q: 'Je li duga rečenica sama po sebi mana?',
    en: 'Is a long sentence a fault?',
    opts: ['ne, ako je građena', 'da', 'samo u novinama', 'samo u pravu'],
    answer: 'ne, ako je građena',
    tip: 'Literary Croatian is full of long sentences. They are structures, not sprawl.',
  },
  {
    mode: 'duljina',
    q: 'Čemu služi kratka rečenica poslije dugih?',
    en: 'What does the short one do?',
    opts: ['nosi poantu', 'daje predah', 'skraćuje tekst', 'mijenja temu'],
    answer: 'nosi poantu',
    tip: 'It is the position of maximum attention, so put the point there.',
  },
  {
    mode: 'duljina',
    q: 'Što je "kondenzacija"?',
    en: 'What is condensation?',
    opts: [
      'sažimanje rečenice u izraz',
      'kraćenje riječi',
      'ispuštanje detalja',
      'spajanje odlomaka',
    ],
    answer: 'sažimanje rečenice u izraz',
    tip: 'A clause becomes a phrase — the C1 skill, used here for rhythm.',
  },
  {
    mode: 'duljina',
    q: 'Koliko je previše u jednoj rečenici?',
    en: 'How much is too much?',
    opts: [
      'kad se glavna rečenica više ne vidi',
      'preko dvadeset riječi',
      'preko tri zareza',
      'nikad nije previše',
    ],
    answer: 'kad se glavna rečenica više ne vidi',
    tip: 'A test you can apply, unlike a word count.',
  },

  // ── tezina ────────────────────────────────────────────────────────────────
  {
    mode: 'tezina',
    q: 'Gdje ide nova obavijest?',
    en: 'Where does new information go?',
    opts: ['na kraj', 'na početak', 'u sredinu', 'svejedno'],
    answer: 'na kraj',
    tip: 'End weight: known first, new last.',
  },
  {
    mode: 'tezina',
    q: '"Auto je Ivan kupio jučer." Što je nova obavijest?',
    en: 'What is the news here?',
    opts: ['jučer', 'auto', 'Ivan', 'kupio'],
    answer: 'jučer',
    tip: 'The car is known; when he bought it is the answer being given.',
  },
  {
    mode: 'tezina',
    q: '"Jučer je Ivan kupio auto." Što je tema?',
    en: 'What is the topic?',
    opts: ['jučer', 'auto', 'Ivan', 'kupovina'],
    answer: 'jučer',
    tip: 'Whatever is fronted becomes the topic.',
  },
  {
    mode: 'tezina',
    q: 'Što se dogodi s enklitikama kad promijenite prvu riječ?',
    en: 'What happens to the clitics?',
    opts: ['pomiču se za njom', 'ostaju na mjestu', 'nestaju', 'udvostručuju se'],
    answer: 'pomiču se za njom',
    tip: 'Second position is measured from whatever you fronted.',
  },
  {
    mode: 'tezina',
    q: 'Koji je oblik naglašen i razgovoran?',
    en: 'Which is emphatic and spoken?',
    opts: [
      'Kupio je Ivan auto, i to jučer.',
      'Ivan je jučer kupio auto.',
      'Jučer je Ivan kupio auto.',
      'Auto je Ivan kupio jučer.',
    ],
    answer: 'Kupio je Ivan auto, i to jučer.',
    tip: 'i to adds the punch, and it belongs to speech.',
  },
  {
    mode: 'tezina',
    q: 'Je li hrvatski red riječi slobodan?',
    en: 'Is Croatian word order free?',
    opts: [
      'slobodan u poretku, vezan za enklitike',
      'posve slobodan',
      'posve vezan',
      'slobodan samo u govoru',
    ],
    answer: 'slobodan u poretku, vezan za enklitike',
    tip: 'The constituents move; second position does not.',
  },
  {
    mode: 'tezina',
    q: 'Što fronting zapravo bira?',
    en: 'What does fronting choose?',
    opts: ['temu i dah rečenice', 'padež', 'vrijeme', 'registar'],
    answer: 'temu i dah rečenice',
    tip: 'The topic and the breath — which is why it is a rhythm device.',
  },
  {
    mode: 'tezina',
    q: 'Zašto je neutralan red "Ivan je jučer kupio auto"?',
    en: 'Why is that neutral?',
    opts: ['subjekt je tema, objekt je novost', 'najkraći je', 'najčešći je', 'nije neutralan'],
    answer: 'subjekt je tema, objekt je novost',
    tip: 'The default arrangement of known and new.',
  },

  // ── izlaz ─────────────────────────────────────────────────────────────────
  {
    mode: 'izlaz',
    q: 'Rečenica se zapetljala. Koja su dva izlaza?',
    en: 'The two ways out:',
    opts: [
      'kondenzirati ili stati',
      'dodati zarez ili veznik',
      'promijeniti padež',
      'okrenuti red riječi',
    ],
    answer: 'kondenzirati ili stati',
    tip: 'Condense it into a phrase, or put a full stop and start again.',
  },
  {
    mode: 'izlaz',
    q: 'Kondenzirajte: "Nakon što je pročitao izvještaj, javio se."',
    en: 'Condense it.',
    opts: [
      'Pročitavši izvještaj, javio se.',
      'Pročitao je izvještaj i javio se.',
      'Javio se nakon izvještaja koji je pročitao.',
      'Kad je pročitao, javio se.',
    ],
    answer: 'Pročitavši izvještaj, javio se.',
    tip: 'The perfective verbal adverb turns the clause into a phrase.',
  },
  {
    mode: 'izlaz',
    q: 'Koji prilog nastaje od svršenoga glagola?',
    en: 'Which adverb comes from a perfective?',
    opts: ['-vši', '-ći', 'oba', 'nijedan'],
    answer: '-vši',
    tip: 'Perfective gives -vši, imperfective gives -ći. Pairing them wrongly is the error.',
  },
  {
    mode: 'izlaz',
    q: 'Što je uvjet za glagolski prilog?',
    en: 'What does the verbal adverb require?',
    opts: ['isti subjekt', 'isto vrijeme', 'isti padež', 'isti vid'],
    answer: 'isti subjekt',
    tip: 'Shared subject. Where it is not shared, reach for dok instead.',
  },
  {
    mode: 'izlaz',
    q: 'Kad subjekt nije isti, što se rabi?',
    en: 'When the subject differs:',
    opts: ['dok', 'pročitavši', 'čitajući', 'nakon'],
    answer: 'dok',
    tip: 'A full clause, because the phrase would attach to the wrong person.',
  },
  {
    mode: 'izlaz',
    q: 'Je li točka priznanje poraza?',
    en: 'Is a full stop an admission of defeat?',
    opts: ['ne, to je alat', 'da', 'samo u eseju', 'ovisi o duljini'],
    answer: 'ne, to je alat',
    tip: 'Two clear sentences beat one that the writer could not finish.',
  },
  {
    mode: 'izlaz',
    q: 'Što se prvo traži pri čitanju duge rečenice?',
    en: 'Reading a long sentence, find:',
    opts: ['glavnu rečenicu', 'zadnji zarez', 'subjekt', 'glagol na kraju'],
    answer: 'glavnu rečenicu',
    tip: 'Find it, then reread — the C2 reading instruction in four words.',
  },
  {
    mode: 'izlaz',
    q: 'Zašto je ritam stvar značenja, a ne ukrasa?',
    en: 'Why is rhythm meaning rather than decoration?',
    opts: [
      'određuje što čitatelj drži važnim',
      'skraćuje tekst',
      'olakšava pisanje',
      'nije stvar značenja',
    ],
    answer: 'određuje što čitatelj drži važnim',
    tip: 'Length and position tell the reader where to look.',
  },
];
