// src/data/drills/reconstructionDrill.ts
//
// C2 REKONSTRUKCIJA ARGUMENTA — the drill for the `rekonstrukcija-argumenta`
// lesson.
//
// The C1 debate lesson taught conceding before disagreeing. This one is the
// step before that: SAYING BACK what the other person argued, accurately and in
// their strongest version, before touching it.
//
// Three things make it work. Naming the parts separately — *Autor polazi od
// pretpostavke da…*, *Ključni je korak…*, *Iz toga zaključuje da…* — so the
// objection can be placed at a specific step instead of at the conclusion in
// general. RECONSTRUCTING THE STRONGEST VERSION, which is a credibility move
// rather than a courtesy: defeating a weak version proves nothing. And MARKING
// THE BOUNDARY — *Toliko o njegovu stajalištu* — so the reader knows where the
// summary ends and you begin.
//
// Three modes:
//   dijelovi — premise, inference, conclusion
//   najjaca  — reconstructing the strongest version
//   granica  — marking where your own voice starts

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const RECONSTRUCTION_MODE_LABELS: Record<string, string> = {
  dijelovi: '🧩 Dijelovi argumenta',
  najjaca: '💪 Najjača verzija',
  granica: '🚧 Granica glasa',
};

export const RECONSTRUCTION_DRILL_DATA: ModeDrillItem[] = [
  // ── dijelovi ──────────────────────────────────────────────────────────────
  {
    mode: 'dijelovi',
    q: 'Autor polazi od ____ da je tržište zasićeno. (pretpostavka)',
    en: 'The author proceeds from the assumption that…',
    opts: ['pretpostavke', 'pretpostavku', 'pretpostavka', 'pretpostavkom'],
    answer: 'pretpostavke',
    tip: 'polaziti OD plus the genitive.',
  },
  {
    mode: 'dijelovi',
    q: 'Koja su tri dijela argumenta?',
    en: 'The three parts:',
    opts: [
      'pretpostavka, zaključivanje, zaključak',
      'uvod, razrada, kraj',
      'teza, dokaz, primjer',
      'pitanje, odgovor, provjera',
    ],
    answer: 'pretpostavka, zaključivanje, zaključak',
    tip: 'Name them separately and the objection has somewhere to land.',
  },
  {
    mode: 'dijelovi',
    q: 'Iz toga ____ da mjere nisu djelovale.',
    en: 'From this he concludes that…',
    opts: ['zaključuje', 'zaključak', 'zaključiti', 'zaključno'],
    answer: 'zaključuje',
    tip: 'Iz toga zaključuje da… — and iz takes the genitive.',
  },
  {
    mode: 'dijelovi',
    q: 'Ključni je ____ u tom rasuđivanju drugi. (korak)',
    en: 'The key step in that reasoning is the second one.',
    opts: ['korak', 'koraka', 'koraku', 'korakom'],
    answer: 'korak',
    tip: 'Naming the step is what turns disagreement into analysis.',
  },
  {
    mode: 'dijelovi',
    q: 'Zašto se prigovor smješta na određeni korak?',
    en: 'Why locate the objection precisely?',
    opts: [
      'inače se odbija cijeli argument bez razloga',
      'kraće je',
      'uljudnije je',
      'nema razloga',
    ],
    answer: 'inače se odbija cijeli argument bez razloga',
    tip: 'A general objection can be answered generally, which settles nothing.',
  },
  {
    mode: 'dijelovi',
    q: 'Što je "premisa"?',
    en: 'What is a premise?',
    opts: ['polazna tvrdnja', 'zaključak', 'dokaz', 'primjer'],
    answer: 'polazna tvrdnja',
    tip: 'What the argument starts from, and often what is worth questioning.',
  },
  {
    mode: 'dijelovi',
    q: 'Njegov je argument u ____ sljedeći.',
    en: 'His argument is essentially the following.',
    opts: ['osnovi', 'osnovu', 'osnove', 'osnovom'],
    answer: 'osnovi',
    tip: 'u osnovi — locative, and it signals a summary is coming.',
  },
  {
    mode: 'dijelovi',
    q: 'Što se provjerava prije prigovora?',
    en: 'What do you check first?',
    opts: ['jeste li dobro razumjeli', 'tko je autor', 'koliko je tekst dug', 'ništa'],
    answer: 'jeste li dobro razumjeli',
    tip: 'Ako sam dobro razumio, tvrdnja glasi… — and it costs one sentence.',
  },

  // ── najjaca ───────────────────────────────────────────────────────────────
  {
    mode: 'najjaca',
    q: 'Najjača verzija toga argumenta ____.',
    en: 'The strongest version would be…',
    opts: ['bila bi', 'bit će', 'jest', 'bila je'],
    answer: 'bila bi',
    tip: 'The conditional, because you are constructing rather than reporting.',
  },
  {
    mode: 'najjaca',
    q: 'Zašto rekonstruirati najjaču verziju?',
    en: 'Why reconstruct the strongest version?',
    opts: [
      'pobjeda nad slabom verzijom ništa ne dokazuje',
      'iz uljudnosti',
      'radi duljine',
      'da se izbjegne sukob',
    ],
    answer: 'pobjeda nad slabom verzijom ništa ne dokazuje',
    tip: 'A credibility move, and the lesson is explicit that it is not a courtesy.',
  },
  {
    mode: 'najjaca',
    q: 'Što je "slamnati čovjek" u raspravi?',
    en: 'What is a straw man?',
    opts: [
      'oslabljena verzija tuđe tvrdnje',
      'anoniman izvor',
      'nedokazana premisa',
      'lažni zaključak',
    ],
    answer: 'oslabljena verzija tuđe tvrdnje',
    tip: 'Easy to knock down, and it convinces nobody who was listening.',
  },
  {
    mode: 'najjaca',
    q: 'Što dobiva onaj tko prizna dobru točku?',
    en: 'What does conceding a good point buy?',
    opts: ['vjerodostojnost za ostale', 'vrijeme', 'simpatije', 'ništa'],
    answer: 'vjerodostojnost za ostale',
    tip: 'The C1 lesson said the same thing; here it is applied to a whole case.',
  },
  {
    mode: 'najjaca',
    q: 'Ako sam dobro ____, tvrdnja glasi…',
    en: 'If I have understood correctly…',
    opts: ['razumio', 'razumijem', 'razumjeti', 'razumljivo'],
    answer: 'razumio',
    tip: 'The participle, and it agrees with the speaker.',
  },
  {
    mode: 'najjaca',
    q: 'Kako se traži potvrda rekonstrukcije?',
    en: 'Asking them to confirm it:',
    opts: ['Je li to ispravan prikaz?', 'Slažete li se?', 'Razumijete li?', 'Točno?'],
    answer: 'Je li to ispravan prikaz?',
    tip: 'It asks about the summary, not about the claim.',
  },
  {
    mode: 'najjaca',
    q: 'Što ako rekonstrukcija bude odbijena?',
    en: 'If they reject your summary?',
    opts: ['ispraviti je prije prigovora', 'nastaviti svejedno', 'odustati', 'ponoviti je'],
    answer: 'ispraviti je prije prigovora',
    tip: 'Otherwise the objection lands on something nobody said.',
  },
  {
    mode: 'najjaca',
    q: 'Koji je rizik prejake rekonstrukcije?',
    en: 'The risk of overstating their case?',
    opts: ['nikakav, to je poštena granica', 'gubitak rasprave', 'zvuči neiskreno', 'predugo je'],
    answer: 'nikakav, to je poštena granica',
    tip: 'If the strongest version survives, that is a finding worth having.',
  },

  // ── granica ───────────────────────────────────────────────────────────────
  {
    mode: 'granica',
    q: 'Kako se označava kraj rekonstrukcije?',
    en: 'Marking the end of the summary:',
    opts: ['Toliko o njegovu stajalištu.', 'Dakle.', 'Nastavljam.', 'To je sve.'],
    answer: 'Toliko o njegovu stajalištu.',
    tip: 'The boundary marker — and after it the voice is yours.',
  },
  {
    mode: 'granica',
    q: 'Zašto je granica važna?',
    en: 'Why does the boundary matter?',
    opts: ['čitatelj inače ne zna tko govori', 'radi duljine', 'radi uljudnosti', 'nije važna'],
    answer: 'čitatelj inače ne zna tko govori',
    tip: 'An unmarked transition reads as attributing your view to them.',
  },
  {
    mode: 'granica',
    q: 'Toliko o ____ stajalištu. (njegov)',
    en: 'So much for his position.',
    opts: ['njegovu', 'njegovom', 'njegova', 'njegovim'],
    answer: 'njegovu',
    tip: 'The definite adjective in the locative: njegovu stajalištu.',
  },
  {
    mode: 'granica',
    q: 'Što se rabi za uvođenje vlastitoga prigovora?',
    en: 'Introducing your own objection:',
    opts: ['Ovdje bih se usprotivio.', 'Ne slažem se.', 'To je pogrešno.', 'Nastavljam dalje.'],
    answer: 'Ovdje bih se usprotivio.',
    tip: 'Ovdje locates it; the conditional keeps it a position rather than a verdict.',
  },
  {
    mode: 'granica',
    q: 'Što znači "iz toga ne slijedi da"?',
    en: 'What does that name?',
    opts: ['prekid u zaključivanju', 'netočnu premisu', 'loš izvor', 'promjenu teme'],
    answer: 'prekid u zaključivanju',
    tip: 'The premise may be true and the conclusion still not follow.',
  },
  {
    mode: 'granica',
    q: 'Koja je razlika između napada na premisu i na zaključivanje?',
    en: 'Attacking the premise against the inference?',
    opts: [
      'jedno osporava polazište, drugo korak',
      'nema razlike',
      'jedno je jače',
      'jedno je uljudnije',
    ],
    answer: 'jedno osporava polazište, drugo korak',
    tip: 'Two different objections, and saying which one you are making is the skill.',
  },
  {
    mode: 'granica',
    q: 'Što se postiže preciznim smještanjem prigovora?',
    en: 'What does precise placement achieve?',
    opts: ['rasprava se može riješiti', 'kraća je', 'zvuči stručnije', 'ništa'],
    answer: 'rasprava se može riješiti',
    tip: 'A specific disagreement can be settled; a general one cannot.',
  },
  {
    mode: 'granica',
    q: 'Zašto je rekonstrukcija dio pisanja, a ne samo govora?',
    en: 'Why does this belong to writing too?',
    opts: [
      'akademski tekst prikazuje tuđe stavove',
      'samo je govorna vještina',
      'radi citiranja',
      'ne pripada pisanju',
    ],
    answer: 'akademski tekst prikazuje tuđe stavove',
    tip: 'Every literature review is a sequence of reconstructions.',
  },
];
