// src/data/drills/c1/depersonalizationDrill.ts
//
// C1 DEPERSONALISATION — the drill for the `depersonalization` lesson.
//
// Statements with no named doer: se + 3rd singular (Priča se da…), its neuter past
// (Pričalo se), the position of ne (Ovdje se ne puši), the subjectless 3rd plural
// (Kažu da…), the dative + se urge (Spava mi se) and the formal report formula
// (Utvrđeno je da…). Distractors are wrong by agreement, case or clitic position —
// never a correct alternative.
//
// Three modes:
//   se       — impersonal se and its past
//   osjecaj  — the 3rd plural and the dative + se urge
//   sluzbeno — the formal, written register

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DEPERSONALIZATION_MODE_LABELS: Record<string, string> = {
  se: '🌫️ Priča se',
  osjecaj: '💭 Kažu / Spava mi se',
  sluzbeno: '📄 Službeno',
};

export const DEPERSONALIZATION_DRILL_DATA: ModeDrillItem[] = [
  // ── se ────────────────────────────────────────────────────────────────────
  {
    mode: 'se',
    q: 'U gradu se ____ da će most biti zatvoren.',
    en: 'In town it is being said that the bridge will be closed.',
    opts: ['govori', 'govore', 'govorim', 'govoreći'],
    answer: 'govori',
    tip: 'Impersonal se takes the third person singular of the present.',
  },
  {
    mode: 'se',
    q: 'Prije se ____ da je u toj kući živio pjesnik.',
    en: 'People used to say that a poet had lived in that house.',
    opts: ['pričao', 'pričali', 'pričalo', 'pričala'],
    answer: 'pričalo',
    tip: 'No subject, so the past participle is neuter singular.',
  },
  {
    mode: 'se',
    q: 'Još se ne ____ tko je pobijedio na izborima.',
    en: 'It is not yet known who won the election.',
    opts: ['zna', 'znaju', 'znam', 'znao'],
    answer: 'zna',
    tip: 'The negated impersonal: ne zna se, with the 3rd singular.',
  },
  {
    mode: 'se',
    q: 'Koja je rečenica standardna?',
    en: 'No smoking here.',
    opts: ['Ovdje se ne puši.', 'Ovdje ne se puši.', 'Se ovdje ne puši.', 'Ovdje se puši ne.'],
    answer: 'Ovdje se ne puši.',
    tip: 'se keeps second position and ne stands straight before the verb.',
  },
  {
    mode: 'se',
    q: 'Dugo se nije ____ gdje je blago skriveno.',
    en: 'For a long time nobody knew where the treasure was hidden.',
    opts: ['znao', 'znala', 'znali', 'znalo'],
    answer: 'znalo',
    tip: 'The negated past impersonal is neuter singular.',
  },
  {
    mode: 'se',
    q: 'Koja je rečenica standardna?',
    en: 'In this office people work until five.',
    opts: [
      'U ovom se uredu radi do pet.',
      'U ovom uredu radi se do pet se.',
      'Se u ovom uredu radi do pet.',
      'U ovom se uredu rade do pet.',
    ],
    answer: 'U ovom se uredu radi do pet.',
    tip: 'Impersonal se + 3rd singular; se in second position.',
  },
  {
    mode: 'se',
    q: 'Na tom se otoku nekad ____ samo ribom i maslinama.',
    en: 'On that island people used to live only on fish and olives.',
    opts: ['živjelo', 'živio', 'živjeli', 'živjela'],
    answer: 'živjelo',
    tip: 'Past impersonal: the neuter singular participle.',
  },
  {
    mode: 'se',
    q: 'Koja rečenica ne imenuje nikoga?',
    en: 'Everyone knows who is responsible.',
    opts: [
      'Zna se tko je odgovoran.',
      'Znam tko je odgovoran.',
      'Marko zna tko je odgovoran.',
      'Znamo se tko je odgovoran.',
    ],
    answer: 'Zna se tko je odgovoran.',
    tip: 'se + 3rd singular with no subject at all.',
  },

  // ── osjecaj ───────────────────────────────────────────────────────────────
  {
    mode: 'osjecaj',
    q: '____ da će sutra padati snijeg.',
    en: 'They say it will snow tomorrow.',
    opts: ['Kažu', 'Kaže', 'Kažem', 'Kazati'],
    answer: 'Kažu',
    tip: 'A bare third person plural points at unnamed people.',
  },
  {
    mode: 'osjecaj',
    q: '____ na radiju da je autocesta zatvorena.',
    en: 'It is being reported on the radio that the motorway is closed.',
    opts: ['Javljaju', 'Javlja se', 'Javljam', 'Javljajući'],
    answer: 'Javljaju',
    tip: 'The news formula: the subjectless third person plural.',
  },
  {
    mode: 'osjecaj',
    q: 'Jako mi se ____.',
    en: 'I feel very sleepy.',
    opts: ['spava', 'spavam', 'spavaju', 'spavati'],
    answer: 'spava',
    tip: 'The urge happens to you: dative + se + 3rd singular.',
  },
  {
    mode: 'osjecaj',
    q: 'Ne da ____ se danas ići van.',
    en: "I can't be bothered to go out today.",
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'The person who feels it is in the dative, as a clitic.',
  },
  {
    mode: 'osjecaj',
    q: 'Nakon one vijesti ____ se plakalo.',
    en: 'After that news she felt like crying.',
    opts: ['joj', 'je', 'ona', 'nju'],
    answer: 'joj',
    tip: 'Dative + se for an involuntary urge: joj se plakalo.',
  },
  {
    mode: 'osjecaj',
    q: 'Cijeli dan mi se ____ kava.',
    en: 'I fancied a coffee all day.',
    opts: ['pila', 'pilo', 'pio', 'pili'],
    answer: 'pila',
    tip: 'Here kava is the subject, so the participle agrees with it: feminine.',
  },
  {
    mode: 'osjecaj',
    q: 'Koja rečenica kaže "I don\'t feel like working"?',
    en: 'Choose the dative + se construction.',
    opts: ['Ne radi mi se.', 'Ne radim se.', 'Ne radi me se.', 'Ne radim mi se.'],
    answer: 'Ne radi mi se.',
    tip: 'The person in the dative, the verb in the impersonal 3rd singular.',
  },
  {
    mode: 'osjecaj',
    q: '____ u novinama da će porezi rasti.',
    en: 'The papers say taxes will go up.',
    opts: ['Pišu', 'Piše se', 'Pišem', 'Pisani'],
    answer: 'Pišu',
    tip: 'The vague third person plural: "they write".',
  },

  // ── sluzbeno ──────────────────────────────────────────────────────────────
  {
    mode: 'sluzbeno',
    q: 'Analizom uzoraka ____ je da je voda ispravna.',
    en: 'Analysis of the samples established that the water is safe.',
    opts: ['utvrđeno', 'utvrđen', 'utvrđena', 'utvrđeni'],
    answer: 'utvrđeno',
    tip: 'The report formula: neuter participle + je + da.',
  },
  {
    mode: 'sluzbeno',
    q: 'Na sjednici je ____ da se rok produlji.',
    en: 'At the session it was decided that the deadline be extended.',
    opts: ['odlučeno', 'odlučen', 'odlučila', 'odlučeni'],
    answer: 'odlučeno',
    tip: 'Nobody is named as deciding: the neuter participle.',
  },
  {
    mode: 'sluzbeno',
    q: '____ se da će radovi trajati dvije godine.',
    en: 'The works are expected to last two years.',
    opts: ['Očekuje', 'Očekuju', 'Očekujem', 'Očekivan'],
    answer: 'Očekuje',
    tip: 'se + 3rd singular with a da-clause: očekuje se da…',
  },
  {
    mode: 'sluzbeno',
    q: 'Koja je rečenica primjerena službenom izvješću?',
    en: 'It is considered that the measure was successful.',
    opts: [
      'Smatra se da je mjera bila uspješna.',
      'Se smatra da je mjera bila uspješna.',
      'Smatraju se da je mjera bila uspješna.',
      'Smatrano se da je mjera bila uspješna.',
    ],
    answer: 'Smatra se da je mjera bila uspješna.',
    tip: 'se never opens the sentence; the verb is 3rd singular.',
  },
  {
    mode: 'sluzbeno',
    q: 'Ovdje se ____ nove kuće.',
    en: 'New houses are being built here.',
    opts: ['grade', 'gradi', 'gradimo', 'građene'],
    answer: 'grade',
    tip: 'With an object the standard makes it the subject and the verb agrees: kuće se grade.',
  },
  {
    mode: 'sluzbeno',
    q: '____ je da se zahtjev preda do petka.',
    en: 'The application must be submitted by Friday.',
    opts: ['Potrebno', 'Potreban', 'Potrebna', 'Potrebni'],
    answer: 'Potrebno',
    tip: 'An impersonal predicate with a da-clause stays neuter.',
  },
  {
    mode: 'sluzbeno',
    q: 'Istragom je ____ da nitko nije ozlijeđen.',
    en: 'The investigation established that nobody was injured.',
    opts: ['utvrđeno', 'utvrdilo', 'utvrđen', 'utvrđeni'],
    answer: 'utvrđeno',
    tip: 'The passive participle, neuter: utvrđeno je da…',
  },
  {
    mode: 'sluzbeno',
    q: 'Dugo se ____ da je crkva iz petnaestog stoljeća.',
    en: 'It was long thought that the church dated from the fifteenth century.',
    opts: ['smatralo', 'smatrao', 'smatrali', 'smatrala'],
    answer: 'smatralo',
    tip: 'The past of an impersonal se-verb is neuter singular.',
  },
];
