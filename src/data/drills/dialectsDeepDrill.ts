// src/data/drills/dialectsDeepDrill.ts
//
// C2 THE THREE DIALECTS IN DEPTH — the drill for `dijalekti-dubinski`.
//
// A CONSTRAINT THIS BANK IS BUILT AROUND, and the third time it has bitten.
//
// The lesson teaches the three-way yat reflex — *lijep* (standard), the
// kajkavian *e* form, *lip* (čakavian and ikavian štokavian) — and that
// three-way split is a learner's single best diagnostic for placing a speaker.
// The kajkavian member of it is HOMOGRAPHIC with Serbian ekavica: the strings
// are identical and no pattern can separate them. That is exactly why
// `dijalekti-dubinski` holds the second `CONTRASTIVE_LESSONS` carve-out in
// `lintCroatianText.mjs` — inside the LESSON the form is a labelled row in a
// three-column table, which is teaching, not a Serbism.
//
// A DRILL CANNOT INHERIT THAT. The carve-out is scoped to a lesson id, and the
// reason it exists does not transfer: a drill's options are CLICKABLE, so
// putting the bare ekavian form in an option list hands the learner a string
// they cannot tell from Serbian, unlabelled, as a live choice. Same call as
// `regionalDrill` and `languageHistoryDrill`, both of which the lint caught
// making exactly this mistake before it was written down.
//
// So the kajkavian reflex is taught HERE BY ITS NAME — "refleks e" — and never
// by an example word, while the standard and čakavian members are shown in full
// because neither collides with anything. Everything else about kajkavian is
// fully drillable and none of it is homographic: *kaj*, *delaš*, *bum išel*,
// *domov*, *bil*, *znal*, *došel*, *cajger*, *farba*.
//
// Three modes:
//   prepoznavanje — što, kaj, ča, the yat reflex, and where each is spoken
//   osobine       — what each dialect actually does differently
//   prebacivanje  — code-switching, and why a dialect feature is not an error

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DIALECTS_DEEP_MODE_LABELS: Record<string, string> = {
  prepoznavanje: '🗺️ Prepoznavanje',
  osobine: '🔍 Osobine',
  prebacivanje: '🔀 Prebacivanje',
};

export const DIALECTS_DEEP_DRILL_DATA: ModeDrillItem[] = [
  // ── prepoznavanje ─────────────────────────────────────────────────────────
  {
    mode: 'prepoznavanje',
    q: 'Po čemu tri narječja nose imena?',
    en: 'What are the three dialects named after?',
    opts: ['po riječi za "što"', 'po pokrajinama', 'po naglasku', 'po refleksu jata'],
    answer: 'po riječi za "što"',
    tip: 'što, kaj, ča — the question word names the dialect.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Gdje se govori kajkavski?',
    en: 'Where is kajkavian spoken?',
    opts: ['Zagreb, Zagorje, Međimurje', 'Istra i otoci', 'Slavonija', 'Dalmatinsko zaleđe'],
    answer: 'Zagreb, Zagorje, Međimurje',
    tip: 'The north-west — and that includes the capital.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Gdje se govori čakavski?',
    en: 'Where is čakavian spoken?',
    opts: ['Istra, Kvarner, otoci', 'Zagorje', 'Slavonija', 'Baranja'],
    answer: 'Istra, Kvarner, otoci',
    tip: 'Istria, the Kvarner and the islands, plus stretches of the coast.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Koje je narječje osnovica standarda?',
    en: 'Which dialect is the standard built on?',
    opts: ['štokavsko', 'kajkavsko', 'čakavsko', 'sva tri podjednako'],
    answer: 'štokavsko',
    tip: 'Štokavian — which is why the other two can sound foreign to a learner.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Kako glasi čakavski refleks jata u riječi "lijep"?',
    en: 'The čakavian yat reflex of lijep is:',
    opts: ['lip', 'ljep', 'lijp', 'lijep'],
    answer: 'lip',
    tip: 'The i-reflex — and it turns up in Dalmatian štokavian speech too.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Koliko refleksa jata razlikuje ova lekcija?',
    en: 'How many yat reflexes?',
    opts: ['tri', 'dva', 'četiri', 'jedan'],
    answer: 'tri',
    tip: 'The standard ije/je, the kajkavian e-reflex, and the čakavian i.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Znači li ikavski izgovor da je govor čakavski?',
    en: 'Does an ikavian reflex mean čakavian?',
    opts: [
      'ne, ima ga i u štokavskom',
      'da, uvijek',
      'da, osim u Istri',
      'samo u starijoj književnosti',
    ],
    answer: 'ne, ima ga i u štokavskom',
    tip: 'Dalmatian štokavian is widely ikavian. The reflex narrows the field; it does not settle it.',
  },
  {
    mode: 'prepoznavanje',
    q: 'Otprilike koliki dio zemlje kod kuće govori nešto drugo od standarda?',
    en: 'Roughly how much of the country speaks something other than the standard at home?',
    opts: ['oko polovice', 'oko desetine', 'gotovo nitko', 'gotovo svi'],
    answer: 'oko polovice',
    tip: 'Which is why this is a listening skill and not a curiosity.',
  },

  // ── osobine ───────────────────────────────────────────────────────────────
  {
    mode: 'osobine',
    q: 'Kako kajkavski gradi budućnost?',
    en: 'How does kajkavian build the future?',
    opts: ['bum išel', 'budem išao', 'ići ću', 'idem'],
    answer: 'bum išel',
    tip: 'bum plus the -l participle — nothing like ići ću.',
  },
  {
    mode: 'osobine',
    q: 'Koja vremena kajkavski uopće nema?',
    en: 'Which tenses does kajkavian lack entirely?',
    opts: ['aorist i imperfekt', 'perfekt i futur', 'pluskvamperfekt', 'kondicional'],
    answer: 'aorist i imperfekt',
    tip: 'Neither one exists there — a bigger structural gap than the vocabulary is.',
  },
  {
    mode: 'osobine',
    q: 'Iz kojih jezika kajkavski ima najviše posuđenica?',
    en: 'Kajkavian borrowings come mainly from:',
    opts: ['njemačkoga i mađarskoga', 'talijanskoga', 'turskoga', 'francuskoga'],
    answer: 'njemačkoga i mađarskoga',
    tip: 'cajger, špancirati, farba — the north-west neighbours.',
  },
  {
    mode: 'osobine',
    q: 'Što čakavski radi s krajnjim -m?',
    en: 'What does čakavian do with final -m?',
    opts: ['prelazi u -n', 'ispada', 'udvostručuje se', 'ništa'],
    answer: 'prelazi u -n',
    tip: 'nisan, san — and it is the feature that settles čakavian fastest.',
  },
  {
    mode: 'osobine',
    q: 'Kako u čakavskom glasi standardno "bio"?',
    en: 'Standard bio, in čakavian:',
    opts: ['bil', 'bijo', 'biv', 'bio'],
    answer: 'bil',
    tip: 'The old -l is preserved where the standard turned it to -o.',
  },
  {
    mode: 'osobine',
    q: 'Iz kojega jezika čakavski ima škuru, pjat i kužinu?',
    en: 'škura, pjat, kužina come from:',
    opts: ['mletačkoga', 'njemačkoga', 'mađarskoga', 'grčkoga'],
    answer: 'mletačkoga',
    tip: 'Centuries of Venetian along the coast.',
  },
  {
    mode: 'osobine',
    q: 'Koje je narječje najkonzervativnije?',
    en: 'Which is the most conservative?',
    opts: ['čakavsko', 'kajkavsko', 'štokavsko', 'nijedno'],
    answer: 'čakavsko',
    tip: 'It keeps the oldest features — and is the hardest of the three to follow at speed.',
  },
  {
    mode: 'osobine',
    q: 'Standardno "Idem kući" — kako to zvuči u čakavskom?',
    en: 'Idem kući, in čakavian:',
    opts: ['Gren doma', 'Idem domov', 'Idem doma', 'Gren kući'],
    answer: 'Gren doma',
    tip: 'Kajkavian says Idem domov — the two are not interchangeable.',
  },

  // ── prebacivanje ──────────────────────────────────────────────────────────
  {
    mode: 'prebacivanje',
    q: 'Kolega iz Zagreba na pauzi prijeđe na kajkavske oblike. Što se dogodilo?',
    en: 'A Zagreb colleague switches into kajkavian at the coffee break:',
    opts: ['promijenio je registar', 'pogriješio je', 'govori drugi jezik', 'ne zna standard'],
    answer: 'promijenio je registar',
    tip: 'The switch reports the situation, not the speaker.',
  },
  {
    mode: 'prebacivanje',
    q: 'Je li dijalektalna crta pogreška?',
    en: 'Is a dialect feature a mistake?',
    opts: ['ne, izbor je registra', 'da, u svakom kontekstu', 'samo u pisanju', 'ovisi o kraju'],
    answer: 'ne, izbor je registra',
    tip: 'Hearing it as error misreads both the speaker and the situation.',
  },
  {
    mode: 'prebacivanje',
    q: 'Koliko ljudi govori samo jedno narječje bez prebacivanja?',
    en: 'How many people speak only one variety?',
    opts: ['gotovo nitko', 'većina', 'polovica', 'svi izvan gradova'],
    answer: 'gotovo nitko',
    tip: 'Almost everyone code-switches, often mid-conversation.',
  },
  {
    mode: 'prebacivanje',
    q: 'Što vam prebacivanje govori?',
    en: 'What does a switch tell you?',
    opts: ['nešto o situaciji', 'nešto o obrazovanju', 'nešto o dobi', 'ništa'],
    answer: 'nešto o situaciji',
    tip: 'Which way somebody switches is situational information, not a verdict on them.',
  },
  {
    mode: 'prebacivanje',
    q: 'Koji je registar prikladan za službeni izvještaj?',
    en: 'Which register for an official report?',
    opts: ['standardni štokavski', 'mjesni govor', 'mješavina', 'kako tko govori'],
    answer: 'standardni štokavski',
    tip: 'And relaxed local speech for the coffee afterwards. Both, chosen.',
  },
  {
    mode: 'prebacivanje',
    q: 'Kako se najbolje reagira na sugovornika koji govori mjesnim govorom?',
    en: 'Someone answers you in the local dialect. You:',
    opts: [
      'nastavite razgovor normalno',
      'ispravite ga',
      'prijeđete na engleski',
      'zamolite ga za standard',
    ],
    answer: 'nastavite razgovor normalno',
    tip: 'Correcting a dialect is correcting somebody for being from where they are from.',
  },
  {
    mode: 'prebacivanje',
    q: 'Imaju li kajkavski i čakavski svoju književnost?',
    en: 'Do the heritage dialects have their own literature?',
    opts: ['da, i staru i suvremenu', 'ne', 'samo usmenu', 'samo do 19. stoljeća'],
    answer: 'da, i staru i suvremenu',
    tip: 'Krleža wrote Balade Petrice Kerempuha in kajkavian, in the twentieth century.',
  },
  {
    mode: 'prebacivanje',
    q: 'Zašto je za slušanje korisno znati crte narječja?',
    en: 'Why is knowing the features useful?',
    opts: [
      'razgovor postaje pratljiv, ne samo prepoznatljiv',
      'radi ispravljanja',
      'radi pisanja',
      'nije korisno',
    ],
    answer: 'razgovor postaje pratljiv, ne samo prepoznatljiv',
    tip: 'C1 taught you to recognise them. This is the step from recognising to following.',
  },
];
