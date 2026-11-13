// src/data/drills/b1/relativeDeepDrill.ts
//
// B1 čiji, gdje, ono što, što — the drill for the `relative-deep` lesson.
//
// The lesson adds four relative words to koji (taught one lesson earlier): čiji (whose),
// agreeing with the thing OWNED; gdje / kamo / odakle for places; ono što, "the thing
// that"; and bare što for a whole preceding clause. The drill practises exactly those —
// it never asks for a case of koji, which the koji drill already covers.
//
// Three modes:
//   ciji   — čiji and its agreement with the thing owned
//   mjesto — gdje (where), kamo (where to), odakle (where from)
//   sto    — ono što for "what", što for a whole clause, and koji vs što

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const RELATIVE_DEEP_MODE_LABELS: Record<string, string> = {
  ciji: '👤 čiji',
  mjesto: '📍 gdje · kamo · odakle',
  sto: '💬 ono što · što',
};

export const RELATIVE_DEEP_DRILL_DATA: ModeDrillItem[] = [
  // ── ciji ──────────────────────────────────────────────────────────────────
  {
    mode: 'ciji',
    q: 'To je čovjek ____ je kuća izgorjela.',
    en: 'That is the man whose house burned down.',
    opts: ['čija', 'čiji', 'čije', 'koji'],
    answer: 'čija',
    tip: 'čiji agrees with the thing owned: kuća is feminine, so čija.',
  },
  {
    mode: 'ciji',
    q: 'Upoznala sam ženu ____ sin studira u Zagrebu.',
    en: 'I met the woman whose son studies in Zagreb.',
    opts: ['čija', 'čiji', 'čiju', 'koja'],
    answer: 'čiji',
    tip: 'The agreement follows sin (masculine), not the woman: čiji.',
  },
  {
    mode: 'ciji',
    q: 'To je prijatelj ____ sam sestru upoznao.',
    en: 'That is the friend whose sister I met.',
    opts: ['čija', 'čiju', 'čiji', 'čijom'],
    answer: 'čiju',
    tip: 'sestru is the object (accusative, feminine), so čiju.',
  },
  {
    mode: 'ciji',
    q: 'Studenti ____ su prijave stigle na vrijeme dobit će odgovor.',
    en: 'Students whose applications arrived on time will get an answer.',
    opts: ['čiji', 'čija', 'čije', 'koje'],
    answer: 'čije',
    tip: 'prijave is feminine plural, so čije.',
  },
  {
    mode: 'ciji',
    q: 'Dijete ____ je pas pobjegao plače.',
    en: 'The child whose dog ran away is crying.',
    opts: ['čiji', 'čije', 'čija', 'koje'],
    answer: 'čiji',
    tip: 'pas is masculine: čiji, whatever the owner is.',
  },
  {
    mode: 'ciji',
    q: 'Pisac ____ knjigu čitam dolazi u naš grad.',
    en: 'The writer whose book I am reading is coming to our town.',
    opts: ['čija', 'čiju', 'čijeg', 'kojeg'],
    answer: 'čiju',
    tip: 'knjigu is the object of čitam: feminine accusative, čiju.',
  },
  {
    mode: 'ciji',
    q: 'Susjedi ____ auto stoji ispred kuće su na moru.',
    en: 'The neighbours whose car is standing in front of the house are at the seaside.',
    opts: ['čiji', 'čija', 'čije', 'koji'],
    answer: 'čiji',
    tip: 'auto is masculine singular, so čiji — the plural owners do not count.',
  },
  {
    mode: 'ciji',
    q: 'Kako se kaže "the girl whose parents I know"?',
    en: 'Choose the correct Croatian.',
    opts: [
      'djevojka čije roditelje poznajem',
      'djevojka čija roditelje poznajem',
      'djevojka koje roditelje poznajem',
      'djevojka čiji roditelji poznajem',
    ],
    answer: 'djevojka čije roditelje poznajem',
    tip: 'roditelje is the object, masculine plural accusative: čije.',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'To je grad ____ sam odrastao.',
    en: 'That is the town where I grew up.',
    opts: ['gdje', 'kamo', 'odakle', 'što'],
    answer: 'gdje',
    tip: 'A place where something happens: gdje.',
  },
  {
    mode: 'mjesto',
    q: 'Otok ____ idemo ljeti je malen i miran.',
    en: 'The island we go to in summer is small and quiet.',
    opts: ['gdje', 'kamo', 'odakle', 'koji'],
    answer: 'kamo',
    tip: 'Going TO a place is movement: kamo.',
  },
  {
    mode: 'mjesto',
    q: 'Selo ____ je moja obitelj nalazi se u Lici.',
    en: 'The village my family comes from is in Lika.',
    opts: ['odakle', 'gdje', 'kamo', 'kojem'],
    answer: 'odakle',
    tip: 'Where FROM — origin: odakle.',
  },
  {
    mode: 'mjesto',
    q: 'Restoran ____ smo večerali ne radi ponedjeljkom.',
    en: 'The restaurant where we had dinner is closed on Mondays.',
    opts: ['gdje', 'kamo', 'odakle', 'čiji'],
    answer: 'gdje',
    tip: 'Where something happened: gdje (or u kojem).',
  },
  {
    mode: 'mjesto',
    q: 'Plaža ____ smo išli prošlog ljeta bila je puna ljudi.',
    en: 'The beach we went to last summer was full of people.',
    opts: ['kamo', 'gdje', 'odakle', 'koju'],
    answer: 'kamo',
    tip: 'smo išli — movement towards: kamo.',
  },
  {
    mode: 'mjesto',
    q: 'Grad ____ dolaze naši gosti je daleko.',
    en: 'The town our guests come from is far away.',
    opts: ['odakle', 'gdje', 'kamo', 'koji'],
    answer: 'odakle',
    tip: 'dolaziti iz — the starting point, so odakle.',
  },
  {
    mode: 'mjesto',
    q: 'Ovo je kuća u ____ sam odrastao. (kuća is feminine)',
    en: 'This is the house I grew up in.',
    opts: ['kojoj', 'kojem', 'koju', 'koja'],
    answer: 'kojoj',
    tip: 'u + the locative, feminine: u kojoj — the same meaning as gdje.',
  },
  {
    mode: 'mjesto',
    q: 'Koja riječ znači "kamo"?',
    en: 'Which meaning does kamo carry?',
    opts: ['where to', 'where (location)', 'where from', 'whose'],
    answer: 'where to',
    tip: 'gdje is location, kamo direction, odakle origin.',
  },

  // ── sto ───────────────────────────────────────────────────────────────────
  {
    mode: 'sto',
    q: '____ me muči je cijena.',
    en: 'What worries me is the price.',
    opts: ['Ono što', 'Koji', 'Čiji', 'Gdje'],
    answer: 'Ono što',
    tip: '"What" in the sense of "the thing that" is ono što.',
  },
  {
    mode: 'sto',
    q: 'Ne razumijem ____ govoriš.',
    en: 'I do not understand what you are saying.',
    opts: ['ono što', 'onaj koji', 'ono koje', 'čije'],
    answer: 'ono što',
    tip: 'There is no noun for koji to agree with, so ono što.',
  },
  {
    mode: 'sto',
    q: 'Reci mi ____ stvarno misliš.',
    en: 'Tell me what you really think.',
    opts: ['ono što', 'koje', 'onaj koji', 'gdje'],
    answer: 'ono što',
    tip: 'the thing that you think: ono što.',
  },
  {
    mode: 'sto',
    q: 'Zakasnio je, ____ me nije iznenadilo.',
    en: 'He was late, which did not surprise me.',
    opts: ['što', 'koji', 'koje', 'čije'],
    answer: 'što',
    tip: 'The relative refers to the whole clause, not a noun: što.',
  },
  {
    mode: 'sto',
    q: 'Cijeli je dan padala kiša, ____ nam je pokvarilo planove.',
    en: 'It rained all day, which ruined our plans.',
    opts: ['što', 'koja', 'koje', 'ono koje'],
    answer: 'što',
    tip: 'What ruined the plans is the whole first clause, so što.',
  },
  {
    mode: 'sto',
    q: 'Sve je prošlo dobro, ____ je bilo veliko olakšanje.',
    en: 'Everything went well, which was a great relief.',
    opts: ['što', 'koje', 'koji', 'gdje'],
    answer: 'što',
    tip: 'English "which" for a whole idea is što in Croatian.',
  },
  {
    mode: 'sto',
    q: 'Upoznala sam čovjeka ____ radi u bolnici.',
    en: 'I met a man who works in a hospital.',
    opts: ['koji', 'što', 'ono što', 'čiji'],
    answer: 'koji',
    tip: 'Here there IS a noun — čovjek — so koji.',
  },
  {
    mode: 'sto',
    q: 'Spot the error: "Dobio je posao, koji me jako razveselilo."',
    en: 'He got the job, which made me very happy.',
    opts: [
      'koji should be što — it refers to the whole clause',
      'koji should be koje',
      'razveselilo should be razveselio',
      'Nothing is wrong',
    ],
    answer: 'koji should be što — it refers to the whole clause',
    tip: 'koji must attach to a noun; a whole idea takes što.',
  },
  {
    mode: 'sto',
    q: 'Ono ____ kažeš nije istina.',
    en: 'What you are saying is not true.',
    opts: ['što', 'koje', 'koji', 'čije'],
    answer: 'što',
    tip: 'ono što — "the thing that"; koje would need a neuter noun to agree with.',
  },
];
