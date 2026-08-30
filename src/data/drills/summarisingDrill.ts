// src/data/drills/summarisingDrill.ts
//
// C1 SUMMARISING & PARAPHRASE — the drill for the `summarising-paraphrase`
// lesson.
//
// Nothing in the app drills this, at any level, and it is the skill the C1
// descriptor leans on hardest: reading a text and saying what it claimed without
// copying how it said it. The lesson's central instruction is one a learner will
// otherwise never discover — **paraphrase by changing STRUCTURE, not by swapping
// synonyms.** Substituting word for word produces a sentence that is neither the
// original nor natural Croatian, and it is what every untaught learner does.
//
// The rest is the machinery an exam actually rewards: the fixed openers, the
// attribution formulas that keep somebody else's claim clearly theirs, and the
// order in which material gets cut when the summary must be shorter.
//
// Three modes:
//   uvod       — the fixed openers and what case each governs
//   navodjenje — attributing a claim to its author
//   preoblika  — structural paraphrase, and what to cut first

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const SUMMARISING_MODE_LABELS: Record<string, string> = {
  uvod: '🚪 Uvodne formule',
  navodjenje: '💬 Navođenje autora',
  preoblika: '🔄 Preoblikovanje',
};

export const SUMMARISING_DRILL_DATA: ModeDrillItem[] = [
  // ── uvod ──────────────────────────────────────────────────────────────────
  {
    mode: 'uvod',
    q: 'Riječ je o ____. (nova metoda)',
    en: 'It concerns a new method.',
    opts: ['novoj metodi', 'nova metoda', 'novu metodu', 'nove metode'],
    answer: 'novoj metodi',
    tip: 'Riječ je o + LOCATIVE — the standard opener, and the case is the half people miss.',
  },
  {
    mode: 'uvod',
    q: 'Koji padež traži "riječ je o"?',
    en: 'Which case does it govern?',
    opts: ['lokativ', 'genitiv', 'akuzativ', 'dativ'],
    answer: 'lokativ',
    tip: 'Locative, because of o. Riječ je o tome da…',
  },
  {
    mode: 'uvod',
    q: 'Tekst ____ o klimatskim promjenama.',
    en: 'The text deals with climate change.',
    opts: ['govori', 'kaže', 'priča', 'zbori'],
    answer: 'govori',
    tip: 'Tekst govori o… — neutral and standard for written summary.',
  },
  {
    mode: 'uvod',
    q: 'U članku se ____ problem nezaposlenosti.',
    en: 'The article addresses unemployment.',
    opts: ['obrađuje', 'obrađiva', 'obradio', 'obrađivati'],
    answer: 'obrađuje',
    tip: 'The impersonal se-construction is the default voice of academic summary.',
  },
  {
    mode: 'uvod',
    q: 'Zašto se u sažetku rabi bezlična konstrukcija?',
    en: 'Why the impersonal construction?',
    opts: ['sažetak nije o vama', 'kraća je', 'lakša je', 'traži manje padeža'],
    answer: 'sažetak nije o vama',
    tip: 'The summary reports the text, so the summariser stays out of it.',
  },
  {
    mode: 'uvod',
    q: 'Autor se bavi ____. (pitanje identiteta)',
    en: 'The author deals with the question of identity.',
    opts: ['pitanjem identiteta', 'pitanja identiteta', 'pitanje identiteta', 'pitanju identiteta'],
    answer: 'pitanjem identiteta',
    tip: 'Baviti se takes the INSTRUMENTAL: bavi se pitanjem.',
  },
  {
    mode: 'uvod',
    q: 'Ukratko, ____ je da troškovi rastu.',
    en: 'In short, the point is that costs are rising.',
    opts: ['bit', 'bitka', 'biti', 'bitno'],
    answer: 'bit',
    tip: 'Bit je da… — the compact way to state the core claim.',
  },
  {
    mode: 'uvod',
    q: 'Koja formula otvara sažetak najneutralnije?',
    en: 'Which opener is the most neutral?',
    opts: ['Riječ je o…', 'Meni se čini…', 'Svi znaju…', 'Naravno…'],
    answer: 'Riječ je o…',
    tip: 'The other three smuggle in an opinion the source text may not hold.',
  },

  // ── navodjenje ────────────────────────────────────────────────────────────
  {
    mode: 'navodjenje',
    q: 'Autor ____ da je problem sustavan.',
    en: 'The author claims the problem is systemic.',
    opts: ['tvrdi', 'tvrdio', 'tvrditi', 'tvrdnja'],
    answer: 'tvrdi',
    tip: 'Autor tvrdi da… — present tense, and da is compulsory.',
  },
  {
    mode: 'navodjenje',
    q: '____ članku, broj se udvostručio.',
    en: 'According to the article, the number doubled.',
    opts: ['Prema', 'Po', 'Za', 'Uz'],
    answer: 'Prema',
    tip: 'Prema + DATIVE: prema članku, prema autoru, prema podacima.',
  },
  {
    mode: 'navodjenje',
    q: 'Koji padež traži "prema"?',
    en: 'Which case after prema?',
    opts: ['dativ', 'genitiv', 'akuzativ', 'lokativ'],
    answer: 'dativ',
    tip: 'Dative. Prema Katičiću, prema istraživanju.',
  },
  {
    mode: 'navodjenje',
    q: 'Kako navodite ime autora?',
    en: 'How do you cite the author name?',
    opts: ['sklanja se', 'ostaje nepromijenjeno', 'stavlja se u zagradu', 'izostavlja se'],
    answer: 'sklanja se',
    tip: 'Croatian declines cited names: prema Katičiću, kako navodi Silić.',
  },
  {
    mode: 'navodjenje',
    q: 'Zašto stalno navoditi izvor?',
    en: 'Why attribute constantly?',
    opts: ['tuđa tvrdnja ostaje tuđa', 'produljuje tekst', 'traži se u pravopisu', 'zvuči učeno'],
    answer: 'tuđa tvrdnja ostaje tuđa',
    tip: 'Without it the reader cannot tell the source apart from the summariser.',
  },
  {
    mode: 'navodjenje',
    q: 'Kako ____ Silić, norma nije statična.',
    en: 'As Silić notes, the norm is not static.',
    opts: ['navodi', 'naveo', 'navoditi', 'navod'],
    answer: 'navodi',
    tip: 'kako navodi + nominative subject — a clean attribution frame.',
  },
  {
    mode: 'navodjenje',
    q: 'Koji glagol izriče najslabije jamstvo?',
    en: 'Which verb commits the source least?',
    opts: ['navodno tvrdi', 'dokazuje', 'utvrđuje', 'pokazuje'],
    answer: 'navodno tvrdi',
    tip: 'Reporting verbs grade endorsement — the same scale the journalistic-style lesson uses.',
  },
  {
    mode: 'navodjenje',
    q: 'U radu se ____ na ranija istraživanja.',
    en: 'The paper refers to earlier research.',
    opts: ['upućuje', 'upućivati', 'uputio', 'uputa'],
    answer: 'upućuje',
    tip: 'Upućivati na + accusative — the standard cross-reference formula.',
  },

  // ── preoblika ─────────────────────────────────────────────────────────────
  {
    mode: 'preoblika',
    q: 'Kako se ispravno parafrazira?',
    en: 'How do you paraphrase properly?',
    opts: ['promjenom strukture', 'zamjenom sinonima', 'skraćivanjem rečenica', 'prijevodom'],
    answer: 'promjenom strukture',
    tip: 'Change the STRUCTURE. Swapping synonyms leaves the original sentence wearing a disguise.',
  },
  {
    mode: 'preoblika',
    q: '"Vlada je donijela odluku" → imenski oblik:',
    en: 'Nominalise it.',
    opts: [
      'donošenje odluke Vlade',
      'Vlada donosi odluku',
      'odluka je donesena',
      'donijeti odluku',
    ],
    answer: 'donošenje odluke Vlade',
    tip: 'verb → noun is the commonest compression move: donijeti → donošenje.',
  },
  {
    mode: 'preoblika',
    q: '"Znanstvenici su otkrili lijek" → pasiv:',
    en: 'Make it passive.',
    opts: ['Lijek je otkriven', 'Lijek otkriva', 'Otkriti lijek', 'Lijek se otkrio'],
    answer: 'Lijek je otkriven',
    tip: 'active → passive shifts the focus without changing the claim.',
  },
  {
    mode: 'preoblika',
    q: 'Što se u sažetku reže PRVO?',
    en: 'What gets cut first?',
    opts: ['primjeri', 'tvrdnja', 'zaključak', 'ograde'],
    answer: 'primjeri',
    tip: 'Examples first, qualifications second, the claim never.',
  },
  {
    mode: 'preoblika',
    q: 'Što se reže POSLJEDNJE?',
    en: 'And last?',
    opts: ['tvrdnja', 'primjeri', 'ponavljanja', 'ilustracije'],
    answer: 'tvrdnja',
    tip: 'The claim is the thing the summary exists to carry.',
  },
  {
    mode: 'preoblika',
    q: '"Kad je stigao, svi su otišli" → skratite u izraz:',
    en: 'Compress the clause into a phrase.',
    opts: ['Po njegovu dolasku', 'Kad dolazi', 'Da je stigao', 'Stigao je'],
    answer: 'Po njegovu dolasku',
    tip: 'clause → phrase, using a verbal noun. Po + locative.',
  },
  {
    mode: 'preoblika',
    q: 'Zašto zamjena sinonima nije parafraza?',
    en: 'Why is synonym-swapping not paraphrase?',
    opts: ['struktura ostaje tuđa', 'sinonimi ne postoje', 'predugo traje', 'mijenja značenje'],
    answer: 'struktura ostaje tuđa',
    tip: 'The sentence is still the author’s; only its vocabulary has been repainted.',
  },
  {
    mode: 'preoblika',
    q: 'Koja je preoblika najkorisnija za kraćenje?',
    en: 'Which transformation compresses most?',
    opts: ['glagol → imenica', 'imenica → glagol', 'jednina → množina', 'prezent → futur'],
    answer: 'glagol → imenica',
    tip: 'Nominalisation packs a whole clause into a phrase — the C1 condensation skill.',
  },
];
