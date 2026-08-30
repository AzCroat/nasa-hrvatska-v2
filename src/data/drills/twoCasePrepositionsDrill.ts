// src/data/drills/twoCasePrepositionsDrill.ts
//
// B2 PREPOSITIONS WITH TWO CASES — the drill for `prepositions-advanced`.
//
// The A2 lesson taught that *u* and *na* take the accusative for motion and the
// locative for position. This is the same machinery applied to the prepositions
// where the case change alters the MEANING rather than the direction, and the
// lesson's own closing advice is the drill's spine:
//
//   WHEN A PREPOSITION SEEMS WRONG, CHECK THE CASE BEFORE THE DICTIONARY.
//
// The four that matter:
//
//   ZA. Accusative = for, intended for (*Ovo je za tebe*), or in, time from now
//   (*Vraćam se za sat*). Instrumental = AT, seated at (*Sjedimo za stolom* —
//   we are sitting AT the table, not behind it, and that mistranslation is the
//   commonest one in the whole topic). Genitive = during (*za vrijeme rata*).
//
//   PO. Locative = around, over (*po gradu*) or according to (*po mom
//   mišljenju*). Accusative = TO FETCH — *Idem po kruh*, I am going to get
//   bread. That last one has no English preposition behind it at all and
//   learners simply never produce it.
//
//   S. Instrumental = with. Genitive = down from (*s krova*).
//
//   O. Locative = about (*o tome*). Accusative = against (*udario je o zid*).
//
// And the motion group — *pred*, *nad*, *pod*, *među* — runs the A2 rule
// exactly: accusative for motion, instrumental for position. *Pod stol* is
// going under it; *pod stolom* is being under it.
//
// `prostorni` (B2) is spatial prepositions tagged `accusative`, a real
// ALL_CATEGORIES member claimed elsewhere, so it could not serve this.
//
// Three modes:
//   za    — the three cases of za
//   po    — around, according to, and going to fetch
//   ostali — s, o, and the motion group

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TWO_CASE_PREPOSITIONS_MODE_LABELS: Record<string, string> = {
  za: '🎁 Za',
  po: '🛒 Po',
  ostali: '🔧 S, o i skupina kretanja',
};

export const TWO_CASE_PREPOSITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── za ────────────────────────────────────────────────────────────────────
  {
    mode: 'za',
    q: 'Ovo je za ____. (ti)',
    en: 'This is for you.',
    opts: ['tebe', 'tobom', 'tebi', 'ti'],
    answer: 'tebe',
    tip: 'za plus the accusative — intended for someone.',
  },
  {
    mode: 'za',
    q: 'Sjedimo za ____. (stol)',
    en: 'We are sitting at the table.',
    opts: ['stolom', 'stol', 'stola', 'stolu'],
    answer: 'stolom',
    tip: 'za plus the INSTRUMENTAL means AT — seated at it, not behind it.',
  },
  {
    mode: 'za',
    q: 'Što znači "Sjedimo za stolom"?',
    en: 'What does it mean?',
    opts: ['sjedimo pri stolu', 'sjedimo iza stola', 'sjedimo na stolu', 'sjedimo pod stolom'],
    answer: 'sjedimo pri stolu',
    tip: 'The behind-the-table reading is the commonest mistranslation in this topic.',
  },
  {
    mode: 'za',
    q: 'Vraćam se za ____. (sat)',
    en: 'I am coming back in an hour.',
    opts: ['sat', 'satom', 'sata', 'satu'],
    answer: 'sat',
    tip: 'Accusative again, and now it means in — time from now.',
  },
  {
    mode: 'za',
    q: 'Za vrijeme ____ nije radio. (rat)',
    en: 'During the war he did not work.',
    opts: ['rata', 'rat', 'ratom', 'ratu'],
    answer: 'rata',
    tip: 'za vrijeme plus the genitive — during.',
  },
  {
    mode: 'za',
    q: 'Koliko padeža uzima "za"?',
    en: 'How many cases does za take?',
    opts: ['tri', 'jedan', 'dva', 'četiri'],
    answer: 'tri',
    tip: 'Accusative, instrumental and genitive — and each is a different meaning.',
  },
  {
    mode: 'za',
    q: 'Ovo je lijek za ____. (glavobolja)',
    en: 'This is a medicine for a headache.',
    opts: ['glavobolju', 'glavoboljom', 'glavobolje', 'glavobolji'],
    answer: 'glavobolju',
    tip: 'Accusative — what the thing is intended for.',
  },
  {
    mode: 'za',
    q: 'Radim za ____. (ta tvrtka)',
    en: 'I work for that company.',
    opts: ['tu tvrtku', 'tom tvrtkom', 'te tvrtke', 'toj tvrtki'],
    answer: 'tu tvrtku',
    tip: 'Accusative — on behalf of.',
  },

  // ── po ────────────────────────────────────────────────────────────────────
  {
    mode: 'po',
    q: 'Šetamo po ____. (grad)',
    en: 'We are walking around the city.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    tip: 'po plus the locative — around, over, all through.',
  },
  {
    mode: 'po',
    q: 'Idem po ____. (kruh)',
    en: 'I am going to get bread.',
    opts: ['kruh', 'kruhu', 'kruha', 'kruhom'],
    answer: 'kruh',
    tip: 'PO PLUS THE ACCUSATIVE MEANS TO FETCH — and English has no preposition for it.',
  },
  {
    mode: 'po',
    q: 'Što znači "Idem po kruh"?',
    en: 'What does it mean?',
    opts: ['idem kupiti kruh', 'hodam po kruhu', 'idem s kruhom', 'idem umjesto kruha'],
    answer: 'idem kupiti kruh',
    tip: 'Going to get it and come back. Learners never produce this because nothing prompts it.',
  },
  {
    mode: 'po',
    q: 'Po ____ mišljenju, griješi. (moj)',
    en: 'In my opinion, he is wrong.',
    opts: ['mom', 'moj', 'moga', 'mojim'],
    answer: 'mom',
    tip: 'po plus the locative — according to.',
  },
  {
    mode: 'po',
    q: 'Idem po ____. (sestra — to pick her up)',
    en: 'I am going to pick up my sister.',
    opts: ['sestru', 'sestri', 'sestre', 'sestrom'],
    answer: 'sestru',
    tip: 'Accusative — fetching a person works the same way.',
  },
  {
    mode: 'po',
    q: 'Kako se razlikuju ta dva "po"?',
    en: 'How do the two po differ?',
    opts: ['po padežu', 'po naglasku', 'po redu riječi', 'po registru'],
    answer: 'po padežu',
    tip: 'Locative wanders; accusative fetches.',
  },
  {
    mode: 'po',
    q: 'Knjige su razbacane po ____. (soba)',
    en: 'The books are scattered around the room.',
    opts: ['sobi', 'sobu', 'sobe', 'sobom'],
    answer: 'sobi',
    tip: 'Locative — spread over a surface or an area.',
  },
  {
    mode: 'po',
    q: 'Po ____ je to normalno. (zakon)',
    en: 'According to the law that is normal.',
    opts: ['zakonu', 'zakon', 'zakona', 'zakonom'],
    answer: 'zakonu',
    tip: 'According to → locative.',
  },

  // ── ostali ────────────────────────────────────────────────────────────────
  {
    mode: 'ostali',
    q: 'Razgovaram s ____. (brat)',
    en: 'I am talking with my brother.',
    opts: ['bratom', 'brata', 'bratu', 'brat'],
    answer: 'bratom',
    tip: 's plus the instrumental — with.',
  },
  {
    mode: 'ostali',
    q: 'Pao je s ____. (krov)',
    en: 'He fell off the roof.',
    opts: ['krova', 'krovom', 'krov', 'krovu'],
    answer: 'krova',
    tip: 's plus the GENITIVE means down from. Same word, different case, different job.',
  },
  {
    mode: 'ostali',
    q: 'Razgovaramo o ____. (posao)',
    en: 'We are talking about work.',
    opts: ['poslu', 'posao', 'posla', 'poslom'],
    answer: 'poslu',
    tip: 'o plus the locative — about.',
  },
  {
    mode: 'ostali',
    q: 'Udario je glavom o ____. (zid)',
    en: 'He hit his head against the wall.',
    opts: ['zid', 'zidu', 'zida', 'zidom'],
    answer: 'zid',
    tip: 'o plus the ACCUSATIVE means against — impact, not topic.',
  },
  {
    mode: 'ostali',
    q: 'Lopta se otkotrljala pod ____. (stol)',
    en: 'The ball rolled under the table.',
    opts: ['stol', 'stolom', 'stola', 'stolu'],
    answer: 'stol',
    tip: 'Motion → accusative. The A2 rule, unchanged.',
  },
  {
    mode: 'ostali',
    q: 'Lopta je pod ____. (stol)',
    en: 'The ball is under the table.',
    opts: ['stolom', 'stol', 'stola', 'stolu'],
    answer: 'stolom',
    tip: 'Position → instrumental for this group, not locative.',
  },
  {
    mode: 'ostali',
    q: 'Koji padež uzima skupina pred/nad/pod/među za položaj?',
    en: 'Which case for position?',
    opts: ['instrumental', 'lokativ', 'genitiv', 'akuzativ'],
    answer: 'instrumental',
    tip: 'Unlike u and na, which take the locative. Worth learning as its own group.',
  },
  {
    mode: 'ostali',
    q: 'Prijedlog izgleda pogrešno. Što provjeravate prvo?',
    en: 'A preposition seems wrong. Check what first?',
    opts: ['padež', 'rječnik', 'red riječi', 'rod'],
    answer: 'padež',
    tip: 'The case, before the dictionary. That is the whole B2 lesson in one line.',
  },
];
