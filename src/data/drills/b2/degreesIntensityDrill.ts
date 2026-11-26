// src/data/drills/b2/degreesIntensityDrill.ts
//
// B2 DEGREES AND INTENSITY — the drill for the `degrees-intensity` lesson
// (B2 position 23).
//
// Three modes, nine items each:
//   sve     — sve + comparative (more and more) and što… to… (the more, the more)
//   stupanj — the scale jedva, pomalo, prilično, vrlo / jako, izuzetno, krajnje,
//             and the particle čak
//   pre     — the prefix pre- meaning "too" on adjectives and adverbs, premalo and
//             previše with a quantity, and pre- on a verb (presoliti)
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 119 (POJAČAJNE ČESTICE: pa, ma, baš, bar,
//   makar, samo, čak, ni, and sve with the comparative: "U Hrvatskoj se studira u sve
//   više gradova", "Sve rjeđe ih viđam"; the comparative may be doubled: "sve ljepše
//   i ljepše"), 118 (the text with jedva, premala, predugo), 144–145 (sve brže,
//   prilično neobična zanimanja).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 22–23 (quantity adverbs: premalo,
//   previše, "Premalo je ljudi došlo na koncert"), 156–157 (PREFIKS PRE-: on a verb it
//   can mean that something was overdone: presoliti, prekuhati, pretjerati), 238–239
//   (POJAČAJNI KONEKTORI: čak, čak i, baš, štoviše), 251 (model sentence "Sve više
//   ljudi…").
//
// Where the books and the lesson differ:
//   - The lesson calls a doubled comparative an error ("više i više ljudi"). The
//     textbook allows doubling when sve stands in front (sve više i više gradova).
//     So a bare "više i više" is never offered as a wrong answer, and one item teaches
//     the textbook's doubled form with sve.
//   - Neither book has što… to… or the scale of intensifiers as a rule; both come
//     from the lesson. The books only use jedva, prilično, vrlo and izuzetno in texts.
//   - The lesson teaches pre- on adjectives and adverbs only. The grammar book teaches
//     it on verbs. One item (presoliti) follows the grammar book.
//   - Croatian often uses a plain adjective for "too" (Cipele su mi male), so no item
//     offers the plain adjective against the pre- form.
//   - Grammar-order fence: no passive, no participial adjectives, no verbal nouns,
//     no conditional, no reported speech, no verbal adverbs.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DEGREES_INTENSITY_MODE_LABELS: Record<string, string> = {
  sve: '📈 Sve više, što… to…',
  stupanj: '🎚️ Jedva ili krajnje',
  pre: '⚠️ Pre- znači previše',
};

export const DEGREES_INTENSITY_DRILL_DATA: ModeDrillItem[] = [
  // ── sve ───────────────────────────────────────────────────────────────────
  {
    mode: 'sve',
    q: 'Benzin je sve ____.',
    en: 'Gas is getting more and more expensive.',
    cue: 'skup',
    opts: ['skuplji', 'skup', 'najskuplji', 'preskup'],
    answer: 'skuplji',
    tip: 'Sve is followed by the comparative: sve skuplji. Skup is the basic form, and sve skup is not possible. Najskuplji is the superlative, and preskup means "too expensive", a different idea that does not combine with sve.',
  },
  {
    mode: 'sve',
    q: 'Sve ____ ljudi kupuje preko interneta.',
    en: 'More and more people shop online.',
    opts: ['više', 'mnogo', 'puno', 'najviše'],
    answer: 'više',
    tip: 'A growing number is sve + the comparative of mnogo: sve više ljudi. Mnogo and puno are the basic forms and do not follow sve. Najviše is the superlative.',
  },
  {
    mode: 'sve',
    q: 'Što ____ vježbaš, to bolje sviraš.',
    en: 'The more you practice, the better you play.',
    opts: ['više', 'mnogo', 'najviše', 'previše'],
    answer: 'više',
    tip: 'Both halves of što… to… take a comparative: što više, to bolje. Mnogo is the basic form and najviše the superlative. Previše means "too much", which is not a comparative.',
  },
  {
    mode: 'sve',
    q: 'Što je put duži, ____ je karta skuplja.',
    en: 'The longer the journey, the more expensive the ticket.',
    opts: ['to', 'tako', 'taj', 'zato'],
    answer: 'to',
    tip: 'The fixed pair is što… to…. Tako is the slip the lesson warns about (Što prije, tako bolje). Taj is a demonstrative that would need a noun, and zato means "that is why".',
  },
  {
    mode: 'sve',
    q: 'Što prije kreneš, to ____ stigneš.',
    en: 'The sooner you set off, the earlier you arrive.',
    opts: ['ranije', 'rano', 'najranije', 'prerano'],
    answer: 'ranije',
    tip: 'The to half needs a comparative as well: to ranije. Rano is the basic form and najranije the superlative. Prerano means "too early".',
  },
  {
    mode: 'sve',
    q: 'Javi mi se što ____.',
    en: 'Get in touch as soon as possible.',
    opts: ['prije', 'rano', 'najprije', 'prvo'],
    answer: 'prije',
    tip: 'Što + comparative on its own means "as … as possible": što prije. Rano is not a comparative. Najprije and prvo both mean "first of all", which is about order, not speed.',
  },
  {
    mode: 'sve',
    lead: 'Vrijeme je sve ljepše.',
    q: 'Koja rečenica znači isto, samo jače?',
    opts: [
      'Vrijeme je sve ljepše i ljepše.',
      'Vrijeme je najljepše.',
      'Vrijeme je prelijepo.',
      'Vrijeme je jedva lijepo.',
    ],
    answer: 'Vrijeme je sve ljepše i ljepše.',
    tip: 'After sve the comparative may be doubled for emphasis: sve ljepše i ljepše. Najljepše is the superlative, a fixed top and not a trend. Prelijepo is "gorgeous" and jedva lijepo is "barely nice".',
  },
  {
    mode: 'sve',
    q: 'Sve ____ ih viđam otkad su se preselili.',
    en: 'I see them more and more rarely since they moved.',
    opts: ['rjeđe', 'rijetko', 'najrjeđe', 'rijetki'],
    answer: 'rjeđe',
    tip: 'Sve + the comparative of rijetko: sve rjeđe. Rijetko is the basic adverb and najrjeđe the superlative. Rijetki is an adjective (rare ones) and cannot describe how often you see someone.',
  },
  {
    mode: 'sve',
    q: 'Posao je postajao sve ____, pa je dao otkaz.',
    en: 'The job was getting harder and harder, so he quit.',
    opts: ['teži', 'težak', 'najteži', 'pretežak'],
    answer: 'teži',
    tip: 'Sve + the comparative, agreeing with posao: sve teži. Težak is the basic form. Najteži is the superlative, and pretežak means "too hard", which does not follow sve.',
  },

  // ── stupanj ───────────────────────────────────────────────────────────────
  {
    mode: 'stupanj',
    q: 'Magla je bila gusta: ____ smo vidjeli cestu.',
    en: 'The fog was thick: we could barely see the road.',
    opts: ['jedva', 'vrlo', 'izuzetno', 'krajnje'],
    answer: 'jedva',
    tip: 'Jedva means barely, the bottom of the scale. Vrlo, izuzetno and krajnje all strengthen a word, and they stand before an adjective or adverb, not directly before a verb like vidjeli.',
  },
  {
    mode: 'stupanj',
    q: 'Koji je niz poredan od najslabijeg do najjačeg?',
    opts: [
      'jedva – prilično – vrlo – krajnje',
      'krajnje – vrlo – prilično – jedva',
      'vrlo – jedva – krajnje – prilično',
      'prilično – jedva – vrlo – krajnje',
    ],
    answer: 'jedva – prilično – vrlo – krajnje',
    tip: 'Jedva (barely) is the weakest, then prilično (fairly), then vrlo (very), and krajnje (extremely) is the strongest. The second option is the same scale upside down, and the other two put jedva in the wrong place.',
  },
  {
    mode: 'stupanj',
    q: 'Film nije bio ni loš ni sjajan. Bio je ____ dobar.',
    opts: ['prilično', 'krajnje', 'izuzetno', 'jedva'],
    answer: 'prilično',
    tip: 'Prilično is measured praise: fairly good, with no enthusiasm. Krajnje and izuzetno would make the film brilliant, which the first sentence rules out. Jedva would make it almost bad.',
  },
  {
    mode: 'stupanj',
    q: 'Prijateljici šaljete poruku nakon lijepe večeri. Što je najprirodnije?',
    opts: [
      'Jako mi je drago što smo se vidjele!',
      'Krajnje mi je drago što smo se vidjele!',
      'Jedva mi je drago što smo se vidjele!',
      'Pomalo mi je drago što smo se vidjele!',
    ],
    answer: 'Jako mi je drago što smo se vidjele!',
    tip: 'Jako is the everyday spoken "very", and jako mi je drago is the natural phrase. Krajnje belongs with strong, mostly negative judgments and sounds stiff here. Jedva (barely) and pomalo (somewhat) would be an insult.',
  },
  {
    mode: 'stupanj',
    q: 'Koja riječ najjače pojačava pridjev „opasan“?',
    opts: ['krajnje', 'prilično', 'pomalo', 'vrlo'],
    answer: 'krajnje',
    tip: 'Krajnje (extremely) is at the top of the scale. Vrlo is "very", one step lower. Prilično is only "fairly", and pomalo is "somewhat", near the bottom.',
  },
  {
    mode: 'stupanj',
    q: 'Koncert je bio ____ dobar: takav se čuje jednom u deset godina.',
    opts: ['izuzetno', 'pomalo', 'jedva', 'prilično'],
    answer: 'izuzetno',
    tip: 'Once in ten years is an exception, and izuzetno means exceptionally. Pomalo (somewhat), jedva (barely) and prilično (fairly) are all too weak for a concert like that.',
  },
  {
    mode: 'stupanj',
    q: 'Juha je ____ slana, ali još se može jesti.',
    en: 'The soup is a little salty, but you can still eat it.',
    opts: ['pomalo', 'krajnje', 'izuzetno', 'previše'],
    answer: 'pomalo',
    tip: 'Pomalo means somewhat, a little, which fits "you can still eat it". Krajnje and izuzetno would make it extremely salty, and previše means too salty; none of the three goes with the second half of the sentence.',
  },
  {
    mode: 'stupanj',
    q: 'Što znači „prilično neobična zanimanja“?',
    opts: [
      'fairly unusual jobs',
      'barely unusual jobs',
      'extremely unusual jobs',
      'jobs that are too unusual',
    ],
    answer: 'fairly unusual jobs',
    tip: 'Prilično is "fairly, quite", the middle of the scale. "Barely" is jedva, "extremely" is krajnje, and "too unusual" would be previše neobična.',
  },
  {
    mode: 'stupanj',
    q: 'Došlo je ____ sto ljudi, a očekivali smo trideset.',
    en: 'As many as a hundred people came, and we had expected thirty.',
    opts: ['čak', 'jedva', 'samo', 'ni'],
    answer: 'čak',
    tip: 'Čak stresses that the number is surprisingly high: čak sto ljudi. Jedva and samo would say the number is low, which clashes with expecting thirty. Ni stresses a negation and needs a negated verb.',
  },

  // ── pre ───────────────────────────────────────────────────────────────────
  {
    mode: 'pre',
    q: 'Ne mogu kupiti taj stan: ____ je.',
    en: 'I cannot buy that apartment: it is too expensive.',
    opts: ['preskup', 'skuplji', 'najskuplji', 'jeftin'],
    answer: 'preskup',
    tip: 'Pre- glued to an adjective means "too": preskup. Skuplji is "more expensive" and needs something to compare with. Najskuplji is "the most expensive", and jeftin is the opposite, cheap.',
  },
  {
    mode: 'pre',
    q: 'Ove su mi cipele ____: trebam broj veći.',
    en: 'These shoes are too small for me: I need one size up.',
    opts: ['premale', 'prevelike', 'najveće', 'veće'],
    answer: 'premale',
    tip: 'Needing a bigger size means the shoes are too small: premale. Prevelike is the opposite, too big. Najveće and veće say they are large, which would not call for a bigger size.',
  },
  {
    mode: 'pre',
    q: 'Nazvala si ____: svi još spavaju.',
    en: 'You called too early: everyone is still asleep.',
    opts: ['prerano', 'prekasno', 'ranije', 'najranije'],
    answer: 'prerano',
    tip: 'Pre- works on adverbs too: prerano is "too early", written as one word. Prekasno is "too late", the opposite. Ranije is "earlier" and najranije "earliest"; neither says that it was too much.',
  },
  {
    mode: 'pre',
    lead: 'Studenti predugo studiraju.',
    q: 'Što ovdje znači „predugo“?',
    opts: ['for too long', 'very briefly', 'longer and longer', 'a long time ago'],
    answer: 'for too long',
    tip: 'Pre- + dugo: too long. "Longer and longer" would be sve dulje. "A long time ago" is davno, and nothing in predugo means brief.',
  },
  {
    mode: 'pre',
    lead: 'Kava je preslatka.',
    q: 'Koja rečenica znači gotovo isto?',
    opts: [
      'Kava je previše slatka.',
      'Kava je sve slađa.',
      'Kava je prilično slatka.',
      'Kava je jedva slatka.',
    ],
    answer: 'Kava je previše slatka.',
    tip: 'Pre- on the adjective and previše in front of it say much the same: too sweet. Sve slađa is "sweeter and sweeter", prilično slatka is "fairly sweet", and jedva slatka is "barely sweet".',
  },
  {
    mode: 'pre',
    q: 'Torba je ____ za ručnu prtljagu, morate je predati.',
    en: 'The bag is too big for hand luggage; you have to check it in.',
    opts: ['prevelika', 'premala', 'najmanja', 'manja'],
    answer: 'prevelika',
    tip: 'A bag that has to be checked in is too big: prevelika. Premala is too small, the opposite. Najmanja and manja say it is small, and a small bag would be allowed on board.',
  },
  {
    mode: 'pre',
    q: 'Što znači glagol „presoliti“?',
    opts: [
      'to put in too much salt',
      'to salt something again',
      'to stop adding salt',
      'to add just a little salt',
    ],
    answer: 'to put in too much salt',
    tip: 'On some verbs pre- means that the action was overdone: presoliti, prekuhati, pretjerati. It does not mean "again" here, it does not mean stopping, and it is the opposite of "just a little".',
  },
  {
    mode: 'pre',
    q: 'Djeca su ____ za taj film.',
    en: 'The children are too young for that film.',
    opts: ['premlada', 'prestara', 'mlađa', 'najmlađa'],
    answer: 'premlada',
    tip: 'Too young is pre- + mlad, agreeing with djeca: premlada. Prestara is too old. Mlađa is "younger" and najmlađa "the youngest"; they compare, but they do not say "too".',
  },
  {
    mode: 'pre',
    q: '____ je ljudi došlo na izložbu: galerija je bila gotovo prazna.',
    en: 'Too few people came to the exhibition: the gallery was almost empty.',
    opts: ['Premalo', 'Previše', 'Najviše', 'Sve više'],
    answer: 'Premalo',
    tip: 'Pre- + malo with a quantity: premalo ljudi, too few people. Previše is too many, which does not go with an empty gallery. Najviše is "the most" and sve više is "more and more".',
  },
];
