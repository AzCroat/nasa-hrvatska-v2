// src/data/canDo/C2.ts
//
// CAN-DO STATEMENTS FOR THE SIX C2 UNITS (academic recommendation 6, 2026-09-29).
//
// Two or three per unit, in plain learner-facing English, each beginning "I can…"
// and each something a learner could be observed doing. They are drawn from the
// `objectives` of the unit's five lessons in functions/api/content/_data/curriculum.js
// and promise nothing those lessons do not teach. Units are keyed as in
// courseUnitTitles.ts (level + 1-based position in the level).
//
//   C2-1  norma-i-uzus · pravopis-dvojbe · zarez-interpunkcija · sklonidba-iznimke · brojevi-norma
//   C2-2  slaganje-suptilnosti · padezne-suptilnosti · glagolski-vid-granice · pluskvamperfekt · kondicional-drugi
//   C2-3  glagolski-nacini · stilske-figure · ritam-recenice · ironija-podtekst · humor-jezicni
//   C2-4  administrativni-stil · publicisticki-stil · znanstveni-stil · knjizevni-stil · razgovorni-stil
//   C2-5  stari-tekstovi · sinteza-izvora · rekonstrukcija-argumenta · precizno-nijansiranje · spontani-govor
//   C2-6  prevodjenje-strucno · uredjivanje-teksta · frazeologija-dubinska · dijalekti-dubinski · jezik-i-drustvo

export const CAN_DO_C2: Readonly<Record<string, readonly string[]>> = {
  'C2-1': [
    'I can tell a form the standard prescribes from one that is merely common in speech, and choose the right one for the reader.',
    'I can place Croatian commas by rule and write the contested spellings (neću, bih, capitals) consistently.',
    'I can decline foreign names correctly and write numbers, dates, percentages and percentage points the Croatian way.',
  ],
  'C2-2': [
    'I can make the verb agree with a quantity, collective or mixed-gender subject, and keep dva studenta apart from pet studenata.',
    'I can use bare cases for time, means and "some of", and the genitive after a negated verb, on purpose.',
    'I can mark the earlier of two past events with the pluperfect and say what would have happened with bio bih došao.',
  ],
  'C2-3': [
    'I can express obligation personally or impersonally and mark how sure I am with the right particle.',
    'I can name and use the main rhetorical figures and vary my sentence rhythm so the important point lands last.',
    'I can hear irony, understatement and wordplay in Croatian and read them as the speaker meant them.',
  ],
  'C2-4': [
    'I can read and decode an official decision or contract, and write in the administrative register when I must.',
    'I can read a news report and an academic paper as they were built, and write in the impersonal scholarly voice.',
    'I can follow the aorist, imperfect and dialogue dialect of a novel, and switch deliberately into relaxed spoken Croatian.',
  ],
  'C2-5': [
    'I can read older Croatian texts by sounding out pre-Gaj spelling and recognising the old narrative tenses.',
    'I can synthesise several sources by idea and reconstruct someone else’s argument fairly before I object to it.',
    'I can choose precisely between near-synonyms and speak at length without preparation, repairing a sentence as I go.',
  ],
  'C2-6': [
    'I can translate a professional text for its purpose and edit someone else’s Croatian without rewriting their voice.',
    'I can recognise proverbs from their first half and understand the classical and biblical allusions serious writing assumes.',
    'I can follow kajkavian and čakavian speech and adjust Vi, dialect and anglicisms to the impression I want to make.',
  ],
};
