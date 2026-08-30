// src/data/drills/debateDrill.ts
//
// C1 DEBATE & PERSUASION — the drill for the `debate-persuasion` lesson.
//
// The move this lesson is built on is not a phrase but a tactic: CONCEDE THE
// TRUE PART FIRST. *To stoji, ali…* grants what is actually right and then
// isolates what is not, and it makes every later point more credible rather
// than less. A flat contradiction at C1 reads as not having listened.
//
// The second is *Ne radi se o X, nego o Y* — rejecting the FRAMING rather than
// the claim. It is the highest-leverage sentence in a Croatian argument and it
// has a fixed shape: *nego* after the negative, both halves with the same
// preposition and case.
//
// The third is asking for evidence without heat: *Na temelju čega?*, *Možete li
// to potkrijepiti?*, *Iz toga ne slijedi da…* — each naming a specific gap
// rather than expressing general doubt.
//
// Three modes:
//   ustupak  — conceding before disagreeing
//   okvir    — ne radi se o X, nego o Y
//   dokazi   — raising the standard, and losing gracefully

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DEBATE_MODE_LABELS: Record<string, string> = {
  ustupak: '🤝 Ustupak',
  okvir: '🖼️ Okvir rasprave',
  dokazi: '🔍 Dokazi',
};

export const DEBATE_DRILL_DATA: ModeDrillItem[] = [
  // ── ustupak ───────────────────────────────────────────────────────────────
  {
    mode: 'ustupak',
    q: 'Kako se počinje neslaganje na C1 razini?',
    en: 'How does a C1 disagreement open?',
    opts: ['To stoji, ali…', 'Nije točno.', 'Griješite.', 'Ne slažem se.'],
    answer: 'To stoji, ali…',
    tip: 'Grant the true part first — it makes the rest more credible, not less.',
  },
  {
    mode: 'ustupak',
    q: 'Što znači "To stoji"?',
    en: 'What does To stoji mean?',
    opts: ['To je točno.', 'To stoji na mjestu.', 'To čeka.', 'To ostaje.'],
    answer: 'To je točno.',
    tip: 'Stajati here means to hold, to be valid.',
  },
  {
    mode: 'ustupak',
    q: 'Slažem se do ____ mjere.',
    en: 'I agree to a certain extent.',
    opts: ['određene', 'određenu', 'određena', 'određenom'],
    answer: 'određene',
    tip: 'do plus the genitive: do određene mjere.',
  },
  {
    mode: 'ustupak',
    q: 'Tu se ne ____ složio.',
    en: 'There I would not agree.',
    opts: ['bih', 'bi', 'bismo', 'ću'],
    answer: 'bih',
    tip: 'The conditional softens the refusal into an opinion.',
  },
  {
    mode: 'ustupak',
    q: 'Zašto se ustupak isplati?',
    en: 'Why does conceding pay?',
    opts: [
      'ostali argumenti postaju vjerodostojniji',
      'skraćuje raspravu',
      'izbjegava se sukob',
      'ne isplati se',
    ],
    answer: 'ostali argumenti postaju vjerodostojniji',
    tip: 'A speaker who never concedes is heard as advocating, not reasoning.',
  },
  {
    mode: 'ustupak',
    q: 'To je točno samo ____.',
    en: 'That is only partly true.',
    opts: ['djelomično', 'djelomičan', 'dijelom je', 'djelomice su'],
    answer: 'djelomično',
    tip: 'It concedes and limits in one adverb.',
  },
  {
    mode: 'ustupak',
    q: 'Kako se izriče snažno neslaganje bez grubosti?',
    en: 'Strong disagreement, politely:',
    opts: ['Upravo suprotno.', 'Glupost.', 'Nije istina.', 'Ma dajte.'],
    answer: 'Upravo suprotno.',
    tip: 'It contradicts the claim without touching the person.',
  },
  {
    mode: 'ustupak',
    q: 'Ne ____ rekao da je to tako.',
    en: 'I would not say that is so.',
    opts: ['bih', 'ću', 'sam', 'bi'],
    answer: 'bih',
    tip: 'The most hedged refusal in the set, and often the most effective.',
  },

  // ── okvir ─────────────────────────────────────────────────────────────────
  {
    mode: 'okvir',
    q: 'Ne radi se o novcu, ____ o principu.',
    en: 'It is not about money, but about principle.',
    opts: ['nego', 'ali', 'već i', 'da'],
    answer: 'nego',
    tip: 'NEGO after a negative. Ali would join two claims instead of replacing one.',
  },
  {
    mode: 'okvir',
    q: 'Što taj obrazac odbacuje?',
    en: 'What does that pattern reject?',
    opts: ['okvir rasprave', 'samu tvrdnju', 'sugovornika', 'dokaz'],
    answer: 'okvir rasprave',
    tip: 'It says the question itself was the wrong one.',
  },
  {
    mode: 'okvir',
    q: 'Ne radi se o ____, nego o vremenu. (cijena)',
    en: 'It is not about the price, but about time.',
    opts: ['cijeni', 'cijenu', 'cijene', 'cijenom'],
    answer: 'cijeni',
    tip: 'o plus the locative — and both halves must match.',
  },
  {
    mode: 'okvir',
    q: 'Moraju li obje polovice imati isti prijedlog?',
    en: 'Must both halves share the preposition?',
    opts: ['da', 'ne', 'samo u pisanju', 'ovisi o padežu'],
    answer: 'da',
    tip: 'o … nego o …, za … nego za …. Mixing them breaks the parallel.',
  },
  {
    mode: 'okvir',
    q: 'Upravo je ____ tome stvar.',
    en: 'That is exactly the point.',
    opts: ['u', 'na', 'o', 'za'],
    answer: 'u',
    tip: 'Upravo je u tome stvar — the same u tome frame as the B2 argument lesson.',
  },
  {
    mode: 'okvir',
    q: 'Kako se vraća raspravu na temu?',
    en: 'Bringing it back:',
    opts: ['Vratimo se na…', 'Vratimo na…', 'Vraćamo se u…', 'Vrati se na…'],
    answer: 'Vratimo se na…',
    tip: 'Vratimo se NA plus the accusative, and the first-person plural includes them.',
  },
  {
    mode: 'okvir',
    q: '"To ne odgovara na pitanje." — što se prigovara?',
    en: 'What is the objection?',
    opts: ['izbjegavanje', 'netočnost', 'nepristojnost', 'ponavljanje'],
    answer: 'izbjegavanje',
    tip: 'It names evasion precisely, without calling it that.',
  },
  {
    mode: 'okvir',
    q: 'Zašto je odbacivanje okvira jače od odbacivanja tvrdnje?',
    en: 'Why is rejecting the framing stronger?',
    opts: ['ruši i sve što na njemu stoji', 'kraće je', 'uljudnije je', 'nije jače'],
    answer: 'ruši i sve što na njemu stoji',
    tip: 'Refute the claim and the next one follows; refute the frame and none do.',
  },

  // ── dokazi ────────────────────────────────────────────────────────────────
  {
    mode: 'dokazi',
    q: 'Na ____ čega to tvrdite?',
    en: 'On what basis do you claim that?',
    opts: ['temelju', 'temelj', 'temelja', 'temeljem'],
    answer: 'temelju',
    tip: 'na temelju plus the genitive — calm, and hard to dismiss.',
  },
  {
    mode: 'dokazi',
    q: 'Možete li to ____?',
    en: 'Can you support that?',
    opts: ['potkrijepiti', 'potkrepljivati', 'potkrepa', 'potkrijepljen'],
    answer: 'potkrijepiti',
    tip: 'The infinitive after a modal.',
  },
  {
    mode: 'dokazi',
    q: '"Iz toga ne slijedi da…" — što se imenuje?',
    en: 'What does that name?',
    opts: ['logička praznina', 'netočan podatak', 'loš ton', 'promjena teme'],
    answer: 'logička praznina',
    tip: 'A specific gap between premise and conclusion, not general doubt.',
  },
  {
    mode: 'dokazi',
    q: 'Koji padež traži "iz"?',
    en: 'Which case after iz?',
    opts: ['genitiv', 'lokativ', 'akuzativ', 'dativ'],
    answer: 'genitiv',
    tip: 'iz toga — genitive, always.',
  },
  {
    mode: 'dokazi',
    q: 'Kako se gubi rasprava dostojanstveno?',
    en: 'Losing gracefully:',
    opts: ['Prihvaćam argument.', 'Kako hoćete.', 'Nema veze.', 'Svejedno.'],
    answer: 'Prihvaćam argument.',
    tip: 'It is a move, not a surrender — and it costs you nothing next time.',
  },
  {
    mode: 'dokazi',
    q: 'Što je "dokaz"?',
    en: 'What is a dokaz?',
    opts: ['evidence, proof', 'a document', 'an argument', 'a witness'],
    answer: 'evidence, proof',
    tip: 'And dokazati is to prove.',
  },
  {
    mode: 'dokazi',
    q: 'Što znači "neuvjerljivo"?',
    en: 'What does neuvjerljivo mean?',
    opts: ['unconvincing', 'unbelievable', 'uncertain', 'unclear'],
    answer: 'unconvincing',
    tip: 'From uvjeriti, to convince.',
  },
  {
    mode: 'dokazi',
    q: 'Zašto se traži dokaz mirno, a ne oštro?',
    en: 'Why ask calmly?',
    opts: ['teret dokaza ostaje na drugoj strani', 'zvuči uljudnije', 'kraće je', 'nije važno'],
    answer: 'teret dokaza ostaje na drugoj strani',
    tip: 'Heat lets them argue with your tone instead of your point.',
  },
];
