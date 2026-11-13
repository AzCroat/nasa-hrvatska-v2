// src/data/drills/c1/indefiniteAdjectivesDrill.ts
//
// C1 INDEFINITE AND DEFINITE ADJECTIVES — the drill for the `indefinite-adjectives` lesson.
//
// nov / novi: the indefinite describes (Kakav?), the definite identifies (Koji?). The short
// oblique forms (nova, novu) are literary or fixed (čovjek dobra srca). -ski, -nji,
// comparatives and superlatives are definite only; possessives in -ov, -in indefinite only.
//
// Never offered as the error: a definite form after Kakav? in a predicate (it can read as
// "the X one", and is heard in speech), and dobrog beside dobra in a fixed phrase. Where an
// item tests the indefinite, the distractors are wrong by gender or case instead.
//
// Three modes:
//   vid    — describe or identify
//   oblici — the indefinite forms, short oblique forms
//   jedan  — adjectives with only one form
//   navesci — the optional -a, -e, -u of -oga, -ome, -omu, -ima (workbook p. 221)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INDEFINITE_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  vid: '🎨 Kakav ili koji?',
  oblici: '🔤 Oblici',
  jedan: '1️⃣ Jedan oblik',
  navesci: '➕ Navesci',
};

export const INDEFINITE_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── vid ───────────────────────────────────────────────────────────────────
  {
    mode: 'vid',
    q: 'Kakav je tvoj grad? — ____.',
    en: 'What is your town like? — Old.',
    opts: ['Star', 'Stara', 'Staro', 'Starog'],
    answer: 'Star',
    tip: 'Kakav asks for a description of a masculine noun: the indefinite form.',
  },
  {
    mode: 'vid',
    q: 'Koji kaput uzimaš? — ____.',
    en: 'Which coat are you taking? — The black one.',
    opts: ['Crni', 'Crn', 'Crna', 'Crnog'],
    answer: 'Crni',
    tip: 'Koji asks which one: the definite form identifies.',
  },
  {
    mode: 'vid',
    q: 'Film je bio ____.',
    en: 'The film was good.',
    opts: ['dobar', 'dobra', 'dobro', 'dobrog'],
    answer: 'dobar',
    tip: 'A describing predicate: the indefinite form, with the fleeting a.',
  },
  {
    mode: 'vid',
    q: 'Moj je djed još uvijek ____.',
    en: 'My grandfather is still healthy.',
    opts: ['zdrav', 'zdrava', 'zdravo', 'zdravog'],
    answer: 'zdrav',
    tip: 'Masculine, describing: zdrav.',
  },
  {
    mode: 'vid',
    q: 'Koji ti se auto više sviđa, ____ ili stari?',
    en: 'Which car do you like more, the new one or the old one?',
    opts: ['novi', 'nov', 'nova', 'novog'],
    answer: 'novi',
    tip: 'Choosing one of two: the definite form.',
  },
  {
    mode: 'vid',
    q: 'Kakav je bio ispit? — ____.',
    en: 'How was the exam? — Easy.',
    opts: ['Lagan', 'Lagana', 'Laganu', 'Laganog'],
    answer: 'Lagan',
    tip: 'A description of a masculine noun: lagan.',
  },
  {
    mode: 'vid',
    q: 'Ovaj je stan ____, ali udoban.',
    en: 'This flat is small but comfortable.',
    opts: ['malen', 'malena', 'maleno', 'malenog'],
    answer: 'malen',
    tip: 'The indefinite form of mali is malen.',
  },
  {
    mode: 'vid',
    q: 'Koje pitanje traži neodređeni oblik pridjeva?',
    en: 'Which question asks for the indefinite form of the adjective?',
    opts: ['Kakav?', 'Koji?', 'Čiji?', 'Gdje?'],
    answer: 'Kakav?',
    tip: 'Kakav? asks what kind; the indefinite describes.',
  },

  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Kratki genitiv neodređenog oblika pridjeva „nov“: ____',
    en: 'The short genitive of the indefinite form.',
    opts: ['nova', 'novu', 'novi', 'novim'],
    answer: 'nova',
    tip: 'Genitive nova; the definite is novoga, novog.',
  },
  {
    mode: 'oblici',
    q: 'Kratki dativ neodređenog oblika pridjeva „nov“: ____',
    en: 'The short dative of the indefinite form.',
    opts: ['novu', 'nova', 'novi', 'novo'],
    answer: 'novu',
    tip: 'Dative and locative novu; the definite is novome, novom.',
  },
  {
    mode: 'oblici',
    q: 'Bio je to čovjek ____ srca.',
    en: 'He was a man with a good heart.',
    opts: ['dobra', 'dobar', 'dobri', 'dobru'],
    answer: 'dobra',
    tip: 'A fixed description with the short genitive: dobra srca (dobrog srca is the everyday form).',
  },
  {
    mode: 'oblici',
    q: 'U sobu je ušao mladić visoka ____.',
    en: 'A tall young man came into the room.',
    opts: ['rasta', 'rast', 'rastu', 'rastom'],
    answer: 'rasta',
    tip: 'Noun and short adjective are both genitive: visoka rasta.',
  },
  {
    mode: 'oblici',
    q: 'Baka je žena ____ duha.',
    en: 'Grandma is a woman of cheerful spirit.',
    opts: ['vedra', 'vedar', 'vedri', 'vedru'],
    answer: 'vedra',
    tip: 'The short genitive agreeing with duha: vedra duha.',
  },
  {
    mode: 'oblici',
    q: 'Neodređeni oblik pridjeva „teški“: ____',
    en: 'The indefinite form of the adjective meaning heavy or hard.',
    opts: ['težak', 'teška', 'teško', 'teškog'],
    answer: 'težak',
    tip: 'The root is težak; in teški the a drops out, ž meets k and is devoiced to š.',
  },
  {
    mode: 'oblici',
    q: 'Neodređeni oblik pridjeva „mali“: ____',
    en: 'The indefinite form of the adjective meaning small.',
    opts: ['malen', 'mal', 'malo', 'mala'],
    answer: 'malen',
    tip: 'mali has a longer indefinite form: malen.',
  },
  {
    mode: 'oblici',
    q: 'Neodređeni oblik pridjeva „svijetli“: ____',
    en: 'The indefinite form of the adjective meaning bright.',
    opts: ['svijetao', 'svijetal', 'svijetla', 'svijetlo'],
    answer: 'svijetao',
    tip: 'Final l becomes o, with the fleeting a: svijetao.',
  },

  // ── jedan ─────────────────────────────────────────────────────────────────
  {
    mode: 'jedan',
    q: 'Koji pridjev ima samo određeni oblik?',
    opts: ['hrvatski', 'nov', 'star', 'lijep'],
    answer: 'hrvatski',
    tip: 'Adjectives in -ski have only the definite form.',
  },
  {
    mode: 'jedan',
    q: 'Koji pridjev ima samo određeni oblik?',
    opts: ['gornji', 'mlad', 'dobar', 'topao'],
    answer: 'gornji',
    tip: 'gornji, donji: definite only.',
  },
  {
    mode: 'jedan',
    q: 'Koji pridjev ima samo određeni oblik?',
    opts: ['najbolji', 'zdrav', 'velik', 'crn'],
    answer: 'najbolji',
    tip: 'Comparatives and superlatives are definite only.',
  },
  {
    mode: 'jedan',
    q: 'Koji pridjev ima samo neodređeni oblik?',
    opts: ['majčin', 'plavi', 'donji', 'bolji'],
    answer: 'majčin',
    tip: 'Possessive adjectives in -in and -ov are indefinite only.',
  },
  {
    mode: 'jedan',
    q: 'Koji pridjev ima samo neodređeni oblik?',
    opts: ['Markov', 'zeleni', 'jutarnji', 'najveći'],
    answer: 'Markov',
    tip: 'A possessive adjective in -ov: indefinite only.',
  },
  {
    mode: 'jedan',
    q: 'Kakav je taj običaj? — Tipično ____.',
    en: 'What is that custom like? — Typically Dalmatian.',
    opts: ['dalmatinski', 'dalmatinsk', 'dalmatinska', 'dalmatinskog'],
    answer: 'dalmatinski',
    tip: '-ski adjectives have one form, even after Kakav.',
  },
  {
    mode: 'jedan',
    q: 'Gdje se vidi razlika između neodređenog i određenog oblika?',
    en: 'Where does the difference between the two forms show?',
    opts: [
      'u jednini muškog i srednjeg roda',
      'u svim padežima i rodovima',
      'samo u množini',
      'samo u ženskom rodu',
    ],
    answer: 'u jednini muškog i srednjeg roda',
    tip: 'nov / novi, and in G, D, L nova / novoga, novu / novome. The feminine and the plural look the same.',
  },
  {
    mode: 'jedan',
    q: 'Ivan je ____ od brata.',
    en: 'Ivan is better than his brother.',
    opts: ['bolji', 'bolj', 'dobar', 'boljeg'],
    answer: 'bolji',
    tip: 'Comparatives have only the definite form: bolji.',
  },

  // ── navesci ───────────────────────────────────────────────────────────────
  {
    mode: 'navesci',
    q: 'Razgovaramo o ____ studentima.',
    en: 'We are talking about the new students.',
    opts: ['novim', 'novima', 'novome', 'novoga'],
    answer: 'novim',
    tip: 'A noun in -ima follows, so the adjective takes no navezak: novim studentima.',
  },
  {
    mode: 'navesci',
    q: 'Žene više nisu smatrane ____.',
    en: 'Women are no longer considered weaker.',
    opts: ['slabijima', 'slabijim', 'slabije', 'slabiji'],
    answer: 'slabijima',
    tip: 'No noun follows the adjective, so it needs the navezak: slabijima.',
  },
  {
    mode: 'navesci',
    q: 'Pomažemo ____ ljudima u susjedstvu.',
    en: 'We help the elderly people in the neighbourhood.',
    opts: ['starijim', 'starijima', 'starijeg', 'starijem'],
    answer: 'starijim',
    tip: 'Before a noun in -ima, no navezak: starijim ljudima.',
  },
  {
    mode: 'navesci',
    q: 'Idemo na more s ____ prijateljima.',
    en: 'We are going to the seaside with good friends.',
    opts: ['dobrim', 'dobrima', 'dobroga', 'dobrome'],
    answer: 'dobrim',
    tip: 'Instrumental plural before a noun: dobrim prijateljima, never dobrima prijateljima.',
  },
  {
    mode: 'navesci',
    q: 'Te dvije knjige smatram ____.',
    en: 'I consider those two books the best.',
    opts: ['najboljima', 'najboljim', 'najbolje', 'najbolji'],
    answer: 'najboljima',
    tip: 'The adjective stands alone, with no noun after it: najboljima.',
  },
  {
    mode: 'navesci',
    q: 'Koji je spoj pravilan u visokom stilu?',
    en: 'Which phrase is correct in high style?',
    opts: [
      'mojemu mlađem bratu',
      'mojem mlađemu bratu',
      'mojima mlađima bratu',
      'mojega mlađem bratu',
    ],
    answer: 'mojemu mlađem bratu',
    tip: 'When there are several adjectives, the navezak goes on the first one.',
  },
  {
    mode: 'navesci',
    q: 'Prema preporuci za visoki stil: Razgovarali smo o ____ poslu.',
    en: 'Following the high-style recommendation: We talked about the finished job.',
    opts: ['obavljenome', 'obavljenoga', 'obavljenima', 'obavljenomu'],
    answer: 'obavljenome',
    tip: 'In high style the navezak -e goes with the locative, -u with the dative.',
  },
  {
    mode: 'navesci',
    q: 'Prema preporuci za visoki stil: Veselimo se ____ danu.',
    en: 'Following the high-style recommendation: We are looking forward to the sunny day.',
    opts: ['sunčanomu', 'sunčanoga', 'sunčanima', 'sunčanome'],
    answer: 'sunčanomu',
    tip: 'In high style the navezak -u goes with the dative, -e with the locative.',
  },
];
