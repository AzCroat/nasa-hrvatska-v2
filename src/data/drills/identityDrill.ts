// src/data/drills/identityDrill.ts
//
// C1 CROATIAN LANGUAGE IDENTITY — the drill for the `language-identity` lesson.
//
// A CONSTRAINT THIS BANK IS BUILT AROUND, and the reason it looks different
// from its lesson.
//
// The lesson teaches the contrast with Croatian's neighbours, and its table has
// a column headed with a neighbouring standard. That lesson holds the ONE
// sanctioned `CONTRASTIVE_LESSONS` carve-out in `lintCroatianText.mjs`, because
// there naming the form IS the teaching: it is a labelled comparison column,
// not a form a learner meets unmarked.
//
// A drill cannot do that. Its options are CLICKABLE, so a "which of these is
// Croatian?" item would put a neighbouring standard's word in front of the
// learner as a live choice — exactly what the 2026-08-26 distractor directive
// forbids, and the shape the carve-out was written NOT to cover.
//
// So this drill teaches the same subject from the Croatian side only: the
// purist tradition and Šulek's coinages, the native compounds the language
// actually built (*zrakoplov*, *sveučilište*, *tisuća*), glagoljica as the
// cultural anchor, and the standing of the heritage dialects and of diaspora
// Croatian. Every distractor is another Croatian or international word, wrong
// for a Croatian-internal reason. That is a genuine subset of what the lesson
// teaches — its second objective, "recognise the lexical choices that mark a
// text as Croatian" — and it is the only shape the distractor rule allows.
//
// Three modes:
//   tvorba   — building rather than borrowing
//   bastina  — glagoljica, Šulek and the revival
//   stav     — dialects, diaspora, and why the subject needs care

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const IDENTITY_MODE_LABELS: Record<string, string> = {
  tvorba: '🏗️ Graditi, ne posuđivati',
  bastina: '📜 Baština',
  stav: '🤝 Stav prema govornicima',
};

export const IDENTITY_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Od čega je složeno "zrakoplov"?',
    en: 'What is zrakoplov built from?',
    opts: ['zrak + ploviti', 'zrak + plovak', 'zra + koplje', 'zora + plov'],
    answer: 'zrak + ploviti',
    tip: 'Air plus sail — a native compound, built rather than borrowed.',
  },
  {
    mode: 'tvorba',
    q: 'Od čega je složeno "sveučilište"?',
    en: 'What is sveučilište built from?',
    opts: ['sve + učiti', 'svet + učilište', 'svega + lište', 'svečano + učilište'],
    answer: 'sve + učiti',
    tip: 'An all-learning-place. The parts give the meaning away.',
  },
  {
    mode: 'tvorba',
    q: 'Odakle riječ "tisuća"?',
    en: 'Where does tisuća come from?',
    opts: ['iz staroslavenskoga', 'iz latinskoga', 'iz njemačkoga', 'iz talijanskoga'],
    answer: 'iz staroslavenskoga',
    tip: 'An Old Slavic inheritance, not a coinage — and it is the standard form.',
  },
  {
    mode: 'tvorba',
    q: 'Koja je domaća riječ za "computer"?',
    en: 'computer',
    opts: ['računalo', 'kompjuter', 'brojilo', 'strojopis'],
    answer: 'računalo',
    tip: 'From računati — and kompjuter is what people say out loud.',
  },
  {
    mode: 'tvorba',
    q: 'Koja je domaća riječ za "keyboard"?',
    en: 'keyboard',
    opts: ['tipkovnica', 'klavijatura', 'tipkalo', 'slovnica'],
    answer: 'tipkovnica',
    tip: 'From tipka. Klavijatura is a musical keyboard.',
  },
  {
    mode: 'tvorba',
    q: 'Koja je domaća riječ za "geography"?',
    en: 'geography',
    opts: ['zemljopis', 'geografija', 'zemljoslovlje', 'krajopis'],
    answer: 'zemljopis',
    tip: 'Both exist and both are correct; zemljopis is the native one.',
  },
  {
    mode: 'tvorba',
    q: 'Zašto se radije tvori nego posuđuje?',
    en: 'Why build rather than borrow?',
    opts: [
      'to je svjesna tradicija od preporoda',
      'posuđenice su zabranjene',
      'nema drugog načina',
      'radi kratkoće',
    ],
    answer: 'to je svjesna tradicija od preporoda',
    tip: 'A deliberate tradition rather than a quirk — and it is still productive.',
  },
  {
    mode: 'tvorba',
    q: 'Znači li to da su posuđenice pogrešne?',
    en: 'Does that make loanwords wrong?',
    opts: [
      'ne, ali domaća riječ ima prednost u standardu',
      'da, uvijek',
      'ovisi o jeziku iz kojega su',
      'samo u govoru',
    ],
    answer: 'ne, ali domaća riječ ima prednost u standardu',
    tip: 'Inflacija, referendum and telefon bother nobody. A preference is a preference.',
  },

  // ── bastina ───────────────────────────────────────────────────────────────
  {
    mode: 'bastina',
    q: 'Tko je stvorio stotine hrvatskih znanstvenih naziva u 19. stoljeću?',
    en: 'Who coined hundreds of scientific terms?',
    opts: ['Bogoslav Šulek', 'Ljudevit Gaj', 'Vuk Karadžić', 'Vatroslav Jagić'],
    answer: 'Bogoslav Šulek',
    tip: 'kisik, dušik, plin and many more came from his dictionaries.',
  },
  {
    mode: 'bastina',
    q: 'Što je "glagoljica"?',
    en: 'What is glagoljica?',
    opts: ['staro hrvatsko pismo', 'narječje', 'pravopis', 'rječnik'],
    answer: 'staro hrvatsko pismo',
    tip: 'Used on the coast for around a thousand years, in liturgy and in law.',
  },
  {
    mode: 'bastina',
    q: 'Od kojega se stoljeća glagoljica veže uz hrvatsku kulturu?',
    en: 'From which century?',
    opts: ['od 9.', 'od 12.', 'od 15.', 'od 19.'],
    answer: 'od 9.',
    tip: 'A cultural anchor, and a very long one.',
  },
  {
    mode: 'bastina',
    q: 'Tko je dao slova č, ć, š, ž, đ?',
    en: 'Who gave the alphabet its diacritics?',
    opts: ['Ljudevit Gaj', 'Bogoslav Šulek', 'Marko Marulić', 'Bartol Kašić'],
    answer: 'Ljudevit Gaj',
    tip: 'In the 1830s — hence gajica.',
  },
  {
    mode: 'bastina',
    q: 'Što je bio "narodni preporod"?',
    en: 'What was the national revival?',
    opts: [
      'pokret za standardizaciju i obnovu jezika',
      'gospodarski program',
      'književni pravac',
      'vjerski pokret',
    ],
    answer: 'pokret za standardizaciju i obnovu jezika',
    tip: 'It produced the alphabet, the standard and the coinage habit together.',
  },
  {
    mode: 'bastina',
    q: 'Što je "kisik" prije bila?',
    en: 'What was kisik before?',
    opts: ['Šulekova kovanica', 'stara narodna riječ', 'posuđenica', 'dijalektizam'],
    answer: 'Šulekova kovanica',
    tip: 'Coined in the 19th century and completely ordinary today.',
  },
  {
    mode: 'bastina',
    q: 'Koja je latinska osnova hrvatskoga pisma danas?',
    en: 'Which script does Croatian use?',
    opts: ['latinica', 'glagoljica', 'oboje jednako', 'ovisi o kraju'],
    answer: 'latinica',
    tip: 'Latin script with Gaj diacritics — glagoljica is heritage, not current use.',
  },
  {
    mode: 'bastina',
    q: 'Zašto je jedan glas jedno slovo korisno?',
    en: 'Why is one sound to one letter useful?',
    opts: ['izgovor se čita izravno iz pisma', 'kraće je', 'lakše se tiska', 'nije korisno'],
    answer: 'izgovor se čita izravno iz pisma',
    tip: 'Which is why a learner can pronounce a Croatian word on sight.',
  },

  // ── stav ──────────────────────────────────────────────────────────────────
  {
    mode: 'stav',
    q: 'Kakav je status čakavskoga i kajkavskoga?',
    en: 'What is the status of the heritage dialects?',
    opts: ['cijenjena baština', 'nepravilan govor', 'zastarjeli oblici', 'strani utjecaj'],
    answer: 'cijenjena baština',
    tip: 'Treasured heritage varieties, with their own literature.',
  },
  {
    mode: 'stav',
    q: 'Je li nasljedni hrvatski iz dijaspore "loš" hrvatski?',
    en: 'Is heritage Croatian broken Croatian?',
    opts: [
      'ne, često čuva starije oblike',
      'da, pun je pogrešaka',
      'da, previše je engleskoga',
      'samo u drugoj generaciji',
    ],
    answer: 'ne, često čuva starije oblike',
    tip: 'It often preserves what the homeland standard has moved on from.',
  },
  {
    mode: 'stav',
    q: 'Zašto se o jeziku ovdje govori s pažnjom?',
    en: 'Why does the subject need care?',
    opts: [
      'jezik je i pitanje identiteta',
      'jer je gramatika teška',
      'jer se stalno mijenja',
      'nema razloga',
    ],
    answer: 'jezik je i pitanje identiteta',
    tip: 'For many speakers, using Croatian is a cultural act as much as a practical one.',
  },
  {
    mode: 'stav',
    q: 'Što znači "purizam" u jezičnom smislu?',
    en: 'What is linguistic purism?',
    opts: [
      'sklonost domaćim riječima pred posuđenicama',
      'ispravljanje govornika',
      'čuvanje starih oblika',
      'odbacivanje narječja',
    ],
    answer: 'sklonost domaćim riječima pred posuđenicama',
    tip: 'A preference in the standard, with a long and productive history.',
  },
  {
    mode: 'stav',
    q: 'Što je "standardni jezik"?',
    en: 'What is a standard language?',
    opts: [
      'dogovoreni oblik za javnu uporabu',
      'najstariji oblik',
      'najrašireniji govor',
      'najpravilniji dijalekt',
    ],
    answer: 'dogovoreni oblik za javnu uporabu',
    tip: 'Agreed rather than found — which is why it can be revised.',
  },
  {
    mode: 'stav',
    q: 'Kako se odgovara nekomu tko se ispričava za svoj hrvatski?',
    en: 'Answering an apology for someone Croatian:',
    opts: [
      'Ma odlično govorite!',
      'Da, malo se čuje.',
      'Nema veze, razumijem.',
      'Trebate više vježbati.',
    ],
    answer: 'Ma odlično govorite!',
    tip: 'Warm contradiction — the same move the humour lesson taught.',
  },
  {
    mode: 'stav',
    q: 'Što je "materinski jezik"?',
    en: 'What is materinski jezik?',
    opts: [
      'mother tongue',
      'the national language',
      'a first foreign language',
      'the home dialect',
    ],
    answer: 'mother tongue',
    tip: 'And for many diaspora speakers the answer is genuinely complicated.',
  },
  {
    mode: 'stav',
    q: 'Zašto je vrijedno znati koje su riječi domaće kovanice?',
    en: 'Why know which words were coined?',
    opts: [
      'jer se po njima prepoznaje hrvatski tekst',
      'radi pravopisa',
      'radi naglaska',
      'nije vrijedno',
    ],
    answer: 'jer se po njima prepoznaje hrvatski tekst',
    tip: 'The lexical choices are what mark a text, more than the grammar does.',
  },
];
