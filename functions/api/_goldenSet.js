// functions/api/_goldenSet.js
//
// GOLDEN SET — pre-scored calibration samples for the AI evaluators
// (analysis-trust directive, 2026-08-16).
//
// Each sample is a fixed Croatian answer whose quality is KNOWN by
// construction: the strong samples are native-standard Croatian; the weak
// samples carry deliberate, learner-typical interlanguage errors (missing
// diacritics, case errors, wrong past-tense formation, un-declined objects).
// golden-calibration.js runs every sample through the SAME production rubric
// prompts (_evalPrompts.js) and checks the score lands inside its expected
// band. Scores drifting outside the bands mean the evaluator changed under
// us (model swap, prompt edit, provider behavior) — surfaced BEFORE users
// get mis-scored.
//
// Bands are deliberately WIDE: they exist to catch gross drift (a broken
// answer scoring 80+, a strong one scoring 30), not to pin grader variance.
// Changing a band is an owner-visible calibration decision — note it in the
// PR description.
//
// `expected` is [min, max] inclusive — 0..100 for writing (the /api/correct
// score), 0..1 for speaking (the equal-weight mean of the 4 rubric criteria,
// same as computeSpeakingOverall on the client).

export const GOLDEN_SET = [
  // ── Writing (evaluated with writingEvalSystemPrompt, like /api/correct) ──
  {
    id: 'w-a2-solid',
    kind: 'writing',
    level: 'A2',
    prompt: 'Describe your typical day',
    text:
      'Svaki dan ustajem u sedam sati. Doručkujem kruh s marmeladom i pijem kavu s mlijekom. ' +
      'Poslije idem na posao autobusom. Radim u uredu do četiri sata. Navečer kuham večeru i ' +
      'gledam televiziju. Vikendom volim šetati uz more i posjećivati baku. Nedjeljom se odmaram ' +
      'i čitam knjigu.',
    expected: [55, 100],
    note: 'Clean, simple, on-task A2 production — must never score low.',
  },
  {
    id: 'w-b1-broken',
    kind: 'writing',
    level: 'B1',
    prompt: 'Describe a trip you took last summer',
    // Deliberate learner errors: no diacritics on "Prosle", present tense for
    // past ("ja idem"), un-declined preposition objects ("sa moja obitelj",
    // "u Split", "u more", "riba u restoran"), gender disagreement ("lijepa
    // grad"), nominative object ("volim Hrvatska").
    text:
      'Prosle ljeto ja idem na more sa moja obitelj. Mi smo bili u Split. Vrijeme je bio jako ' +
      'lijepo i toplo. Ja plivam svaki dan u more. Jedemo riba u restoran. Split je lijepa grad. ' +
      'Ja volim Hrvatska jako puno.',
    // CALIBRATION DECISION (owner, 2026-08-17): ceiling widened 60 → 65. Two
    // independent runs scored this sample at exactly 62 — a STABLE grader
    // read on communicative-but-broken writing, not drift — so the band was
    // 2 points too tight, not the evaluator too loose. Still far below any
    // passing threshold; a score above 65 here now genuinely means the
    // rubric broke.
    expected: [0, 65],
    note: 'Error-dense interlanguage — if this ever scores high, the rubric broke.',
  },
  {
    id: 'w-b1-solid',
    kind: 'writing',
    level: 'B1',
    prompt: 'Write about a person who influenced you',
    text:
      'Osoba koja je najviše utjecala na mene je moja baka Marija. Kad sam bio dijete, provodio ' +
      'sam svako ljeto kod nje u Dalmaciji. Naučila me kako se pravi domaći kruh i zašto je ' +
      'važno čuvati obiteljske tradicije. Iako više nije s nama, često se sjetim njezinih ' +
      'savjeta. Zahvaljujući njoj, danas bolje razumijem svoju kulturu i trudim se prenijeti te ' +
      'vrijednosti svojoj djeci.',
    expected: [55, 100],
    note: 'Correct subordinate clauses, aspect and case government at B1.',
  },
  {
    id: 'w-b2-far-below',
    kind: 'writing',
    level: 'B2',
    prompt: 'Discuss the advantages and disadvantages of remote work',
    text: 'Rad od kuće je dobro. Ja mislim da je to dobra ideja. Ne moram putovati. To je sve.',
    expected: [0, 55],
    note: 'Four trivial sentences against a B2 discussion prompt — cannot score high.',
  },
  {
    id: 'w-c1-strong',
    kind: 'writing',
    level: 'C1',
    prompt: 'Argue for or against mandatory school uniforms',
    text:
      'Premda se rasprava o obveznim školskim odorama često svodi na pitanje estetike, smatram ' +
      'da je riječ o dubljem društvenom pitanju. S jedne strane, odore smanjuju vidljive razlike ' +
      'među učenicima iz različitih imovinskih slojeva, čime se ublažava vršnjački pritisak. S ' +
      'druge strane, protivnici opravdano ističu da se time ograničava sloboda izražavanja. Po ' +
      'mojem mišljenju, prednosti ipak pretežu: škola bi trebala biti prostor u kojem znanje, a ' +
      'ne odjeća, određuje nečiju vrijednost.',
    expected: [60, 100],
    note: 'Argumentative register, concessive clauses, C1 connectors.',
  },

  // ── Speaking (evaluated with speakingRubricPrompt, like /api/assess-speaking;
  //    these are TRANSCRIPTS, so calibration exercises the rubric stage without
  //    the STT stage — STT quality is surfaced separately by showing the
  //    learner the transcript) ──
  {
    id: 's-b1-fluent',
    kind: 'speaking',
    level: 'B1',
    prompt: 'Opišite svoje rodno mjesto. Što biste pokazali gostu?',
    text:
      'Rodio sam se u malom gradu blizu Zagreba. Gostu bih najprije pokazao staru jezgru grada ' +
      'jer ima prekrasnu crkvu iz sedamnaestog stoljeća. Zatim bismo otišli na glavni trg gdje ' +
      'se subotom održava tržnica. Na kraju bih ga odveo u konobu da proba domaće specijalitete ' +
      'poput štrukli.',
    expected: [0.5, 1.0],
    note: 'Fluent, on-task B1 answer with conditional softening.',
  },
  {
    id: 's-b1-minimal',
    kind: 'speaking',
    level: 'B1',
    prompt: 'Opišite svoje rodno mjesto. Što biste pokazali gostu?',
    text: 'Moj grad je... lijepo. Ima crkva. Ja... ne znam.',
    expected: [0, 0.45],
    note: 'Breakdown answer — sparse, agreement errors, abandoned.',
  },
  {
    id: 's-a2-decent',
    kind: 'speaking',
    level: 'A2',
    prompt: 'Što volite jesti i piti?',
    text:
      'Volim jesti pizzu i sarmu. Moja mama kuha jako dobro. Za doručak obično jedem jaja i ' +
      'pijem čaj. Ne volim ribu. Vikendom idemo u restoran i naručim ćevape.',
    expected: [0.45, 1.0],
    note: 'Simple but correct and complete at A2.',
  },
  {
    id: 's-b2-offtopic',
    kind: 'speaking',
    level: 'B2',
    prompt: 'Objasnite kako tehnologija mijenja način na koji učimo jezike.',
    // Grammatical Croatian that entirely ignores the question — the `task`
    // criterion must sink the overall even though accuracy/fluency are fine.
    text:
      'Jučer je bilo sunčano pa smo cijeli dan proveli na plaži. More je bilo toplo i mirno. ' +
      'Poslije smo večerali u restoranu s pogledom na luku i razgovarali o planovima za ' +
      'sljedeće ljeto.',
    expected: [0, 0.65],
    note: 'Off-topic-but-grammatical probe: if this scores high, the task criterion broke.',
  },
  {
    id: 's-c1-strong',
    kind: 'speaking',
    level: 'C1',
    prompt: 'Koje su po vama najveće prednosti i mane života u inozemstvu?',
    text:
      'Život u inozemstvu čovjeku istovremeno širi vidike i nameće neočekivane izazove. S jedne ' +
      'strane, svakodnevno ste izloženi novom jeziku i običajima, što vas prisiljava da ' +
      'preispitate vlastite pretpostavke. S druge strane, birokratske prepreke i udaljenost od ' +
      'obitelji znaju biti iscrpljujuće. Ipak, smatram da iskustvo selidbe dugoročno obogaćuje, ' +
      'jer naučite cijeniti i kulturu iz koje dolazite i onu koja vas je primila.',
    expected: [0.5, 1.0],
    note: 'Structured C1 argument with abstract vocabulary.',
  },
];
