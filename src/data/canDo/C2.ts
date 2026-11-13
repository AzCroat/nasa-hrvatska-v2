// src/data/canDo/C2.ts
//
// CAN-DO STATEMENTS FOR THE SIX C2 UNITS (academic recommendation 6, 2026-09-29).
//
// Two or three per unit, in plain learner-facing English, each beginning "I can…"
// and each something a learner could be observed doing. They are drawn from the
// `objectives` of the unit's five lessons in functions/api/content/_data/curriculum.js
// and promise nothing those lessons do not teach. Units are keyed as in
// courseUnitTitles.ts (level + 1-based position in the level).

export const CAN_DO_C2: Readonly<Record<string, readonly string[]>> = {
  // norma-i-uzus · pravopis-dvojbe · glagolski-vid-granice · kondicional-drugi · glagolski-nacini
  'C2-1': [
    'I can tell what the standard prescribes from what educated speakers say.',
    'I can handle contested spellings and the verbs that are both aspects.',
    'I can use bio bih došao for what never happened and mark how certain I am.',
  ],
  // stilske-figure · ritam-recenice · ironija-podtekst · humor-jezicni · administrativni-stil
  'C2-2': [
    'I can vary sentence rhythm and use rhetorical figures.',
    'I can hear irony, understatement and puns.',
    'I can write in the administrative register and decode it into plain Croatian.',
  ],
  // publicisticki-stil · znanstveni-stil · knjizevni-stil · razgovorni-stil · stari-tekstovi
  'C2-3': [
    'I can read a news text, a scientific paper and literary prose the way each was built.',
    'I can switch to the colloquial register deliberately.',
    'I can read Croatian written before Gaj’s spelling reform.',
  ],
  // sinteza-izvora · rekonstrukcija-argumenta · precizno-nijansiranje · spontani-govor · prevodjenje-strucno
  'C2-4': [
    'I can synthesise several sources by idea and reconstruct someone else’s argument fairly.',
    'I can choose between near-synonyms such as znati and poznavati.',
    'I can speak at length without preparation and translate a professional text.',
  ],
  // uredjivanje-teksta · frazeologija-dubinska · dijalekti-dubinski · jezik-i-drustvo
  'C2-5': [
    'I can edit someone else’s Croatian and give a reason for every change.',
    'I can recognise a proverb from its opening and the allusions serious writing assumes.',
    'I can follow kajkavian and čakavian speech and choose what my Croatian signals.',
  ],
};
