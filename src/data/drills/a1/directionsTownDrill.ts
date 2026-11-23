// src/data/drills/a1/directionsTownDrill.ts
//
// A1 FINDING YOUR WAY — the drill for the `directions-town` lesson (A1, 99).
//
// Follows Hrvatski za početnike 1, pages 110–111: "Gdje se nalazi Hrvatska?" (blizu, pokraj,
// između, daleko od + genitive), the street dialogue "Gdje je kazalište?" ("možete li mi
// pomoći?" · "Je li daleko od…?" · "idem pješice" · "idite ravno do…" · "Lijevo od…
// nalazi se…") and the exercise "Gdje je što u Zagrebu? Upotrijebite genitiv"; getting
// around by tram, bus and on foot is on pages 102–103 ("Vozimo se tramvajem"). The book
// gives only "idite ravno" as a street instruction; skrenite and prijeđite come from the
// lesson.
//
// Three modes:
//   gdjeJe   — asking where something is, and position words with the genitive
//   upute    — the instructions you hear back
//   prijevoz — on foot, by tram, by bus

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DIRECTIONS_TOWN_MODE_LABELS: Record<string, string> = {
  gdjeJe: '📍 Gdje je…?',
  upute: '🧭 Idite ravno',
  prijevoz: '🚋 Pješice ili tramvajem?',
};

export const DIRECTIONS_TOWN_DRILL_DATA: ModeDrillItem[] = [
  // ── gdjeJe ────────────────────────────────────────────────────────────────
  {
    mode: 'gdjeJe',
    q: 'Oprostite, gdje se ____ ljekarna?',
    en: 'Excuse me, where is the pharmacy (located)?',
    opts: ['nalazi', 'nalaze', 'nalazim', 'nalaziti'],
    answer: 'nalazi',
    tip: 'ljekarna is one thing, so the verb is nalazi: Gdje se nalazi…? nalaze is for several places, nalazim is the ja form, and nalaziti is the infinitive.',
  },
  {
    mode: 'gdjeJe',
    q: 'Pošta je blizu ____. (banka)',
    en: 'The post office is near the bank.',
    opts: ['banke', 'banka', 'banku', 'banci'],
    answer: 'banke',
    tip: 'blizu takes the genitive: blizu banke. banka is the dictionary form, banku is the object form, and banci is the form after u for a location.',
  },
  {
    mode: 'gdjeJe',
    q: 'Muzej je pokraj ____. (park)',
    en: 'The museum is next to the park.',
    opts: ['parka', 'park', 'parku', 'parkom'],
    answer: 'parka',
    tip: 'pokraj takes the genitive, and a masculine noun adds -a: pokraj parka. park is the dictionary form, u parku is "in the park", and parkom goes with s.',
  },
  {
    mode: 'gdjeJe',
    q: 'Kino je između ____ i pošte. (crkva)',
    en: 'The movie theater is between the church and the post office.',
    opts: ['crkve', 'crkva', 'crkvu', 'crkvi'],
    answer: 'crkve',
    tip: 'između takes the genitive for both places: između crkve i pošte. crkva is the dictionary form, crkvu the object form, and crkvi the form for a location.',
  },
  {
    mode: 'gdjeJe',
    q: 'Je li kolodvor daleko od ____? (trg)',
    en: 'Is the station far from the square?',
    opts: ['trga', 'trg', 'trgu', 'trgom'],
    answer: 'trga',
    tip: 'od is a genitive preposition: daleko od trga. trg is the dictionary form, na trgu says where something is, and trgom is a form used after other words.',
  },
  {
    mode: 'gdjeJe',
    q: 'Bolnica je preko puta ____. (tržnica)',
    en: 'The hospital is across from the market.',
    opts: ['tržnice', 'tržnica', 'tržnicu', 'tržnici'],
    answer: 'tržnice',
    tip: 'preko puta takes the genitive: preko puta tržnice. tržnica is the dictionary form, tržnicu the object form, and na tržnici means "at the market".',
  },
  {
    mode: 'gdjeJe',
    q: 'Ljekarna je na ____. (ugao)',
    en: 'The pharmacy is on the corner.',
    opts: ['uglu', 'ugao', 'ugla', 'uglom'],
    answer: 'uglu',
    tip: 'na for a location takes the locative, and ugao changes its stem to ugl-: na uglu. ugao is the dictionary form, ugla is the genitive, and uglom is another form.',
  },
  {
    mode: 'gdjeJe',
    q: 'Muzej je lijevo ____ banke.',
    en: 'The museum is to the left of the bank.',
    opts: ['od', 'do', 'iz', 'na'],
    answer: 'od',
    tip: '"To the left of" is lijevo od, with the genitive: lijevo od banke. do means "up to" or "next to", iz means "out of", and na does not take the form banke.',
  },
  {
    mode: 'gdjeJe',
    q: 'Restoran je ispred ____. (kino)',
    en: 'The restaurant is in front of the movie theater.',
    opts: ['kina', 'kino', 'kinu', 'kinom'],
    answer: 'kina',
    tip: 'ispred takes the genitive, and a neuter noun in -o takes -a: ispred kina. kino is the dictionary form, u kinu is "in the theater", and kinom is another form.',
  },
  {
    mode: 'gdjeJe',
    q: 'Je li daleko? — Ne, ____ je. Pet minuta pješice.',
    en: 'Is it far? — No, it is … Five minutes on foot.',
    opts: ['blizu', 'daleko', 'ravno', 'desno'],
    answer: 'blizu',
    tip: 'Five minutes on foot is near: blizu. daleko means "far", which the answer has just denied, and ravno and desno are directions (straight, right), not distances.',
  },

  // ── upute ─────────────────────────────────────────────────────────────────
  {
    mode: 'upute',
    q: '____ ravno do glavnog trga. (ići)',
    cue: 'A passer-by is answering a stranger.',
    en: 'Go straight to the main square.',
    opts: ['Idite', 'Idi', 'Idete', 'Ići'],
    answer: 'Idite',
    tip: 'Directions to a stranger use the polite -ite form: Idite. Idi is for a friend, Idete is a statement ("you are going"), and Ići is the infinitive.',
  },
  {
    mode: 'upute',
    q: '____ lijevo kod banke. (skrenuti)',
    cue: 'A passer-by is answering a stranger.',
    en: 'Turn left at the bank.',
    opts: ['Skrenite', 'Skreni', 'Skrenete', 'Skrenuti'],
    answer: 'Skrenite',
    tip: 'To a stranger the instruction is Skrenite. Skreni sounds curt unless you know the person, Skrenete is the present tense, and Skrenuti is the infinitive.',
  },
  {
    mode: 'upute',
    q: '____ desno pa idi ravno. (skrenuti)',
    en: 'Turn right, then go straight.',
    opts: ['Skreni', 'Skrenite', 'Skreneš', 'Skrenuti'],
    answer: 'Skreni',
    tip: 'The second verb, idi, shows that a friend is being addressed, so the first one matches it: Skreni. Skrenite would need idite, Skreneš is a statement, and Skrenuti is the infinitive.',
  },
  {
    mode: 'upute',
    q: '____ ulicu kod pošte. (prijeći)',
    cue: 'A passer-by is answering a stranger.',
    en: 'Cross the street at the post office.',
    opts: ['Prijeđite', 'Prijeđete', 'Prijeći', 'Prijeđu'],
    answer: 'Prijeđite',
    tip: 'From oni prijeđu: drop -u and add -ite for a polite instruction: Prijeđite. Prijeđete is the present tense, Prijeći is the infinitive, and Prijeđu is "they cross".',
  },
  {
    mode: 'upute',
    q: 'Idite ravno do ____. (kino)',
    en: 'Go straight as far as the movie theater.',
    opts: ['kina', 'kino', 'kinu', 'kinom'],
    answer: 'kina',
    tip: 'do ("as far as") takes the genitive: do kina. kino is the dictionary form, kinu is the form for a location, and kinom is another form.',
  },
  {
    mode: 'upute',
    q: 'Nastavite ravno do ____. (bolnica)',
    en: 'Carry on straight as far as the hospital.',
    opts: ['bolnice', 'bolnica', 'bolnicu', 'bolnici'],
    answer: 'bolnice',
    tip: 'After do the noun is in the genitive: do bolnice. bolnica is the dictionary form, u bolnicu means "into the hospital", and u bolnici means "in the hospital".',
  },
  {
    mode: 'upute',
    q: 'Što znači "Skrenite desno"?',
    opts: ['Turn right.', 'Turn left.', 'Go straight.', 'Cross the street.'],
    answer: 'Turn right.',
    tip: 'skrenite is "turn" and desno is "right". Left is lijevo, "go straight" is Idite ravno, and "cross the street" is Prijeđite ulicu.',
  },
  {
    mode: 'upute',
    q: 'Što znači "Idite ravno pa lijevo"?',
    opts: [
      'Go straight, then left.',
      'Go left, then straight.',
      'Go straight, then right.',
      'Go back, then left.',
    ],
    answer: 'Go straight, then left.',
    tip: 'ravno is "straight", pa is "and then", and lijevo is "left", in that order. Right would be desno, and nothing in the sentence means "back".',
  },
  {
    mode: 'upute',
    q: 'Oprostite, ____ li mi pomoći? Ne znam gdje je muzej.',
    en: 'Excuse me, can you help me? I do not know where the museum is.',
    opts: ['možete', 'možeš', 'mogu', 'može'],
    answer: 'možete',
    tip: 'Oprostite is formal, so the verb is the Vi form: možete. možeš is for a friend, mogu means "I can" or "they can", and može is the on/ona form.',
  },

  // ── prijevoz ──────────────────────────────────────────────────────────────
  {
    mode: 'prijevoz',
    q: 'Na posao idem ____. (tramvaj)',
    en: 'I go to work by tram.',
    opts: ['tramvajem', 'tramvajom', 'tramvaj', 's tramvajem'],
    answer: 'tramvajem',
    tip: 'The means of travel is the instrumental with no preposition, and after the soft j the ending is -em: tramvajem. tramvajom uses the hard ending, tramvaj has none, and "s tramvajem" would mean "together with a tram".',
  },
  {
    mode: 'prijevoz',
    q: 'Kolodvor je daleko, idite ____. (autobus)',
    en: 'The station is far, go by bus.',
    opts: ['autobusom', 'autobusem', 'u autobus', 's autobusom'],
    answer: 'autobusom',
    tip: 'By bus is the bare instrumental: autobusom. autobusem uses the ending for soft stems, "u autobus" means "into the bus", and s is only for company, not for the means.',
  },
  {
    mode: 'prijevoz',
    q: 'U Split putujemo ____. (vlak)',
    en: 'We are traveling to Split by train.',
    opts: ['vlakom', 'vlaku', 's vlakom', 'na vlak'],
    answer: 'vlakom',
    tip: 'The means of travel takes -om and no preposition: vlakom. vlaku is the form for a location, "s vlakom" adds a preposition that means "together with", and "na vlak" means "onto the train".',
  },
  {
    mode: 'prijevoz',
    q: 'Na otok idemo ____. (brod)',
    en: 'We are going to the island by boat.',
    opts: ['brodom', 'brodem', 's brodom', 'brod'],
    answer: 'brodom',
    tip: 'By boat is brodom, the instrumental on its own. brodem uses the soft ending that d does not need, "s brodom" would mean "together with a boat", and brod has no ending.',
  },
  {
    mode: 'prijevoz',
    q: 'U grad idemo ____. (auto)',
    en: 'We are going downtown by car.',
    opts: ['autom', 'autem', 's autom', 'auto'],
    answer: 'autom',
    tip: 'By car is autom, with no preposition. autem uses the wrong vowel, "s autom" adds a preposition that is only for company, and auto is the dictionary form.',
  },
  {
    mode: 'prijevoz',
    q: 'Trg je blizu. Idem ____.',
    en: 'The square is near. I am going on foot.',
    opts: ['pješice', 'pješicom', 's pješice', 'na pješice'],
    answer: 'pješice',
    tip: 'pješice is an adverb, a word of its own with no case ending and no preposition. pješicom gives it an ending as if it were a vehicle, and s or na in front of it is not Croatian.',
  },
  {
    mode: 'prijevoz',
    q: 'Moja sestra ____ vozi autobusom.',
    en: 'My sister rides the bus.',
    opts: ['se', 'sam', 'sebe', 'si'],
    answer: 'se',
    tip: 'Riding as a passenger is voziti se: Vozi se autobusom. Without se she would be driving the bus herself; sam and si are forms of biti, and sebe is the long form, not used with this verb.',
  },
  {
    mode: 'prijevoz',
    q: '____ ideš na posao? — Autobusom.',
    en: 'How do you get to work? — By bus.',
    opts: ['Čime', 'Kamo', 'Gdje', 'Tko'],
    answer: 'Čime',
    tip: 'The answer names the means (autobusom), so the question word is Čime, "by what". Kamo asks where to, Gdje asks where, and Tko asks who.',
  },
  {
    mode: 'prijevoz',
    q: 'Koji tramvaj ide do ____? (glavni kolodvor)',
    en: 'Which tram goes to the main station?',
    opts: ['glavnog kolodvora', 'glavni kolodvor', 'glavnom kolodvoru', 'glavnim kolodvorom'],
    answer: 'glavnog kolodvora',
    tip: 'do takes the genitive, and the adjective changes with the noun: do glavnog kolodvora. "glavni kolodvor" is the dictionary form, and the other two are the forms used after prema and s.',
  },
];
