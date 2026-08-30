// src/data/drills/humourDrill.ts
//
// B2 HUMOUR, IRONY & TONE — the drill for the `humour-irony` lesson.
//
// This is the last thing to arrive in any language, and in Croatian the reason
// is specific: the literal reading and the intended one are often opposites,
// and nothing in the grammar marks which is meant.
//
// *Ma* at the front of a sentence dismisses whatever came before — *Ma daj!*,
// *Ma kakvi!*, *Ma pusti* — and a learner who parses it as a word rather than a
// gesture hears an incomplete sentence. Understatement is the house style, so
// *nije loše* is high praise rather than a lukewarm review, and reading it
// literally means missing a compliment.
//
// *Nema veze* is reassurance, not indifference. *Fjaka* is a real coastal
// condition and calling it laziness misses the joke and the point. And
// self-deprecation invites warm CONTRADICTION — agreeing with someone who has
// just run themselves down is the wrong move, said sincerely.
//
// Three modes:
//   ma        — the dismissal particle
//   podcijeni — understatement, and what it actually means
//   ton       — reading the tone, and answering it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const HUMOUR_MODE_LABELS: Record<string, string> = {
  ma: '🙅 Čestica "ma"',
  podcijeni: '🤏 Podcjenjivanje',
  ton: '🎭 Ton',
};

export const HUMOUR_DRILL_DATA: ModeDrillItem[] = [
  // ── ma ────────────────────────────────────────────────────────────────────
  {
    mode: 'ma',
    q: 'Što radi "ma" na početku rečenice?',
    en: 'What does sentence-initial ma do?',
    opts: [
      'odbacuje ono što je rečeno',
      'pojačava tvrdnju',
      'postavlja pitanje',
      'ništa, popuna je',
    ],
    answer: 'odbacuje ono što je rečeno',
    tip: 'It is a gesture more than a word — and it dismisses what came before.',
  },
  {
    mode: 'ma',
    q: 'Što znači "Ma kakvi!"?',
    en: 'What does Ma kakvi! mean?',
    opts: ['No way, nonsense', 'What kind exactly?', 'How lovely', 'Which ones?'],
    answer: 'No way, nonsense',
    tip: 'Literally "what sort" — and it means the suggestion is absurd.',
  },
  {
    mode: 'ma',
    q: 'Što znači "Ma daj!"?',
    en: 'What does Ma daj! mean?',
    opts: ['Come off it!', 'Give it to me!', 'Go on then.', 'Please do.'],
    answer: 'Come off it!',
    tip: 'Disbelief, usually friendly. Nothing is being given.',
  },
  {
    mode: 'ma',
    q: 'Što znači "Ma pusti."?',
    en: 'What does Ma pusti mean?',
    opts: ['Forget about it.', 'Let me go.', 'Release it.', 'Leave now.'],
    answer: 'Forget about it.',
    tip: 'Ma pusti — drop the subject, it is not worth it.',
  },
  {
    mode: 'ma',
    q: 'Zašto je "ma" teško za učenika?',
    en: 'Why is ma hard?',
    opts: ['nema doslovno značenje', 'rijetko je', 'formalno je', 'ima mnogo oblika'],
    answer: 'nema doslovno značenje',
    tip: 'There is nothing to translate — only a function to recognise.',
  },
  {
    mode: 'ma',
    q: 'Netko kaže da neće uspjeti. Toplo ga demantirate: ____',
    en: 'Warmly contradicting them:',
    opts: ['Ma bit će sve u redu.', 'Vjerojatno neće.', 'Možda si u pravu.', 'Da, teško.'],
    answer: 'Ma bit će sve u redu.',
    tip: 'Ma softens the contradiction into reassurance.',
  },
  {
    mode: 'ma',
    q: 'Je li "ma" nepristojno?',
    en: 'Is ma rude?',
    opts: ['ne, obično je prisno', 'da, uvijek', 'samo prema strancima', 'samo u pisanju'],
    answer: 'ne, obično je prisno',
    tip: 'It reads as familiar rather than dismissive of the PERSON.',
  },
  {
    mode: 'ma',
    q: 'Što znači "Nema veze"?',
    en: 'What does Nema veze mean?',
    opts: [
      'Never mind, it does not matter',
      'There is no connection',
      'I do not care',
      'No signal',
    ],
    answer: 'Never mind, it does not matter',
    tip: 'Reassurance, not indifference — an important difference when apologising.',
  },

  // ── podcijeni ─────────────────────────────────────────────────────────────
  {
    mode: 'podcijeni',
    q: 'Netko kuša vaše jelo i kaže "Nije loše." Što misli?',
    en: 'They say "not bad". They mean:',
    opts: ['jako je dobro', 'osrednje je', 'nije im se svidjelo', 'previše je slano'],
    answer: 'jako je dobro',
    tip: 'Understatement is the house style. Nije loše is high praise.',
  },
  {
    mode: 'podcijeni',
    q: 'Zašto je doslovno čitanje ovdje pogreška?',
    en: 'Why is the literal reading wrong?',
    opts: ['propušta se kompliment', 'nema pogreške', 'zvuči hladno', 'krivi je padež'],
    answer: 'propušta se kompliment',
    tip: 'And the speaker sees the compliment land as indifference.',
  },
  {
    mode: 'podcijeni',
    q: 'Što znači "Baš ti hvala." ironično?',
    en: 'Said with an edge, it means:',
    opts: ['nisi mi pomogao', 'iskrena zahvala', 'ne treba mi', 'pitanje'],
    answer: 'nisi mi pomogao',
    tip: '"Thanks a lot" — and Croatian uses it the same way English does.',
  },
  {
    mode: 'podcijeni',
    q: '"Super, samo to mi je trebalo." Što se misli?',
    en: 'What is meant?',
    opts: ['upravo suprotno', 'iskreno oduševljenje', 'olakšanje', 'pitanje'],
    answer: 'upravo suprotno',
    tip: 'The opposite — and the tone is the only marker.',
  },
  {
    mode: 'podcijeni',
    q: 'Kako se odgovara na "Nije loše"?',
    en: 'How do you answer it?',
    opts: ['Hvala!', 'Žao mi je.', 'Popravit ću.', 'Zašto ne?'],
    answer: 'Hvala!',
    tip: 'Take it as the compliment it is.',
  },
  {
    mode: 'podcijeni',
    q: 'Što znači "Može proći."?',
    en: 'What does Može proći mean?',
    opts: ['sasvim je u redu', 'jedva prolazi', 'može proći pored', 'dopušteno je'],
    answer: 'sasvim je u redu',
    tip: 'Another understatement — it is fine, and rather better than fine.',
  },
  {
    mode: 'podcijeni',
    q: 'Koji je oblik pohvale najjači u ovom stilu?',
    en: 'Which is strongest in this register?',
    opts: ['Nije loše.', 'Dobro je.', 'U redu je.', 'Prolazi.'],
    answer: 'Nije loše.',
    tip: 'The double negative outranks the plain positive. That is the whole style.',
  },
  {
    mode: 'podcijeni',
    q: 'Zašto se hvali podcjenjivanjem?',
    en: 'Why praise by understating?',
    opts: ['izravna pohvala zvuči pretjerano', 'iz škrtosti', 'iz nesigurnosti', 'nema razloga'],
    answer: 'izravna pohvala zvuči pretjerano',
    tip: 'Full-volume praise reads as insincere, so the volume comes down.',
  },

  // ── ton ───────────────────────────────────────────────────────────────────
  {
    mode: 'ton',
    q: 'Što je "fjaka"?',
    en: 'What is fjaka?',
    opts: ['stanje blaženog nerada na obali', 'lijenost', 'umor', 'dosada'],
    answer: 'stanje blaženog nerada na obali',
    tip: 'A legitimate coastal condition. Calling it laziness misses the joke.',
  },
  {
    mode: 'ton',
    q: 'Uhvatila ____ je fjaka.',
    en: 'The fjaka has got me.',
    opts: ['me', 'mi', 'ja', 'mene'],
    answer: 'me',
    tip: 'Accusative — fjaka is the subject and it does the catching.',
  },
  {
    mode: 'ton',
    q: 'Netko se sam omalovažava. Što se očekuje?',
    en: 'Someone runs themselves down. You should:',
    opts: ['toplo proturječiti', 'složiti se', 'šutjeti', 'promijeniti temu'],
    answer: 'toplo proturječiti',
    tip: 'Ma odlično je! Agreeing is the wrong move, said sincerely.',
  },
  {
    mode: 'ton',
    q: 'Što znači "Dobro, dobro."?',
    en: 'What does Dobro, dobro mean?',
    opts: ['U redu, dosta je', 'Vrlo dobro', 'Slažem se posve', 'Nastavi'],
    answer: 'U redu, dosta je',
    tip: 'Doubling here means "enough", not "very good".',
  },
  {
    mode: 'ton',
    q: 'Što označava ironiju u hrvatskom?',
    en: 'What marks irony?',
    opts: ['ton, ne gramatika', 'poseban veznik', 'red riječi', 'kondicional'],
    answer: 'ton, ne gramatika',
    tip: 'Nothing in the sentence marks it, which is why it arrives last.',
  },
  {
    mode: 'ton',
    q: 'Zašto se "nema veze" ne prevodi kao "nije me briga"?',
    en: 'Why is it not indifference?',
    opts: ['tješi, ne odbacuje', 'kraće je', 'formalnije je', 'isto je'],
    answer: 'tješi, ne odbacuje',
    tip: 'Said after an apology it means "do not worry about it".',
  },
  {
    mode: 'ton',
    q: 'Prijatelj kaže "Nije to ništa posebno" o svom uspjehu. Odgovarate:',
    en: 'A friend downplays a success. You say:',
    opts: ['Ma kako nije!', 'Da, nije.', 'Vidi se.', 'Šteta.'],
    answer: 'Ma kako nije!',
    tip: 'Contradiction, warmly — and ma does the softening.',
  },
  {
    mode: 'ton',
    q: 'Zašto humor stiže posljednji?',
    en: 'Why does humour arrive last?',
    opts: [
      'traži da čujete i ono što nije rečeno',
      'rječnik je težak',
      'gramatika je složena',
      'malo se rabi',
    ],
    answer: 'traži da čujete i ono što nije rečeno',
    tip: 'Every other skill is about what was said.',
  },
];
