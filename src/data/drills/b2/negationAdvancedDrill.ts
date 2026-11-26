// src/data/drills/b2/negationAdvancedDrill.ts
//
// B2 NEGATION, ADVANCED — the drill for the `negation-advanced` lesson
// (B2 position 52).
//
// Three modes, nine items each:
//   nini   — listing what is absent: ni… ni… with a negated verb, niti… niti…
//            between clauses, nikakav and its forms, a kamoli
//   nesamo — ne samo… nego i…, nego after a negative, and what exactly is denied
//   adane  — "without doing" as a clause (a da ne / a da nije), and the negative
//            questions with zar, nije li, zar ne and Da nisi…!
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 96 (the declension of nikakav, with the
//   preposition splitting it: ni od kakvih, ni na kakve, ni o kakvim), 159 (the
//   conjunctions ni and niti: "Ni otac ni majka nisu znali za to", "Niti su došli
//   niti su se javili"), 201–203 (NIJEKANJE: multiple negation, the place of ne,
//   negative questions with li, zar, zar ne and da, the command "Da to nisi nikomu
//   rekao!").
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 34–35 (niti joining two clauses:
//   "Niti se znam rolati niti to želim naučiti", niti + an affirmative verb), 86–87
//   (GRADACIJSKE REČENICE: a kamoli, pa čak ni), 238–239 ("Ne samo da si skuhala
//   ručak. Štoviše…").
//
// Where the books and the lesson differ:
//   - The lesson says niti… niti… "works identically" to ni… ni…. Both books say they
//     are mostly not interchangeable: ni… ni… lists parts of a sentence and the verb
//     is negated (Ni otac ni majka nisu znali), while niti… niti… joins whole clauses
//     and the verbs stay affirmative (Niti jede niti pije). The drill follows the
//     books, and never asks the learner to choose between ni and niti in one slot.
//   - "A da ne" (without doing) is in neither book; it comes from the lesson only.
//   - A kamoli and the split forms ni o kakvim / ni na koga are in the books but not
//     in the lesson. One item each, following the books.
//   - After ne samo the lesson teaches nego i. Već i is also standard after a
//     negative, so već is never offered as a wrong answer.
//   - The textbook also allows the tag "nije li?" (Pušenje je ovdje zabranjeno, nije
//     li?), so it is not offered against zar ne.
//   - After a negated transitive verb both the accusative and the genitive are
//     standard, so nikakav is tested only after nema / nije bilo and with a noun whose
//     form fixes the case.
//   - Grammar-order fence: no verbal adverbs.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NEGATION_ADVANCED_MODE_LABELS: Record<string, string> = {
  nini: '🚫 Ni… ni…, nikakav',
  nesamo: '➕ Ne samo… nego i…',
  adane: '🤐 A da ne, zar ne',
};

export const NEGATION_ADVANCED_DRILL_DATA: ModeDrillItem[] = [
  // ── nini ──────────────────────────────────────────────────────────────────
  {
    mode: 'nini',
    q: 'Ni kolegica ni šef ____ odgovorili na poruku.',
    en: 'Neither my colleague nor the boss replied to the message.',
    opts: ['nisu', 'su', 'nije', 'je'],
    answer: 'nisu',
    tip: 'After ni… ni… the verb is still negated, and with two subjects it is plural: nisu odgovorili. Su drops the negation, the classic English-based slip. Nije and je are singular and do not match odgovorili.',
  },
  {
    mode: 'nini',
    q: 'U selu ____ ni trgovine ni pošte.',
    en: 'The village has neither a store nor a post office.',
    opts: ['nema', 'ima', 'nisu', 'su'],
    answer: 'nema',
    tip: 'Ni… ni… lists what is absent, and the verb is still negated: nema ni trgovine ni pošte. Ima drops the negation. Nisu and su would need nominative subjects, but trgovine and pošte are genitives.',
  },
  {
    mode: 'nini',
    q: 'Nema ____ sumnje da je u pravu.',
    en: 'There is no doubt whatsoever that she is right.',
    opts: ['nikakve', 'nikakva', 'nikakvu', 'nikakvom'],
    answer: 'nikakve',
    tip: 'Nikakav declines like an adjective, and nema takes the genitive: nikakve sumnje. Nikakva is the nominative and nikakvu the accusative. Nikakvom is the instrumental.',
  },
  {
    mode: 'nini',
    q: 'Ne želim razgovarati ____.',
    en: 'I do not want to talk about any problems whatsoever.',
    opts: [
      'ni o kakvim problemima',
      'ni kakvim problemima',
      'ni o kakve probleme',
      'o nikakvi problemi',
    ],
    answer: 'ni o kakvim problemima',
    tip: 'Ni goes before the preposition and kakvim stays separate: ni + o + kakvim, with the locative after o. Ni kakvim drops the preposition o that razgovarati needs, ni o kakve probleme uses the accusative after o, and o nikakvi problemi has the nominative.',
  },
  {
    mode: 'nini',
    q: 'Nije imao ____ iskustva s djecom.',
    en: 'He had no experience at all with children.',
    opts: ['nikakvog', 'nikakav', 'nikakvom', 'nikakvim'],
    answer: 'nikakvog',
    tip: 'Iskustva is a genitive, and nikakav agrees with it: nikakvog iskustva. Nikakav is the masculine nominative and does not agree with the neuter iskustvo at all. Nikakvom and nikakvim are the locative and instrumental forms.',
  },
  {
    mode: 'nini',
    q: 'Koja je rečenica s „niti… niti…“ standardna?',
    opts: [
      'Niti jede meso niti pije mlijeko.',
      'Niti ne jede meso niti ne pije mlijeko.',
      'Niti jede meso nego pije mlijeko.',
      'Niti jede meso ali pije mlijeko.',
    ],
    answer: 'Niti jede meso niti pije mlijeko.',
    tip: 'Niti… niti… joins two clauses and already carries the negation, so the verbs stay affirmative: niti jede niti pije. Adding ne to each verb doubles it. Nego and ali cannot be the second half of the pair.',
  },
  {
    mode: 'nini',
    q: 'Nikako ____ mogu pronaći ključeve.',
    en: 'I simply cannot find the keys.',
    opts: ['ne', 'ni', 'niti', 'da'],
    answer: 'ne',
    tip: 'Nikako strengthens a denial, but the verb must still be negated with ne: nikako ne mogu. Ni and niti are used for listing, not for negating a verb. Da is not a negation.',
  },
  {
    mode: 'nini',
    q: 'Ni u Rijeci ni u Puli ____ slobodnih soba.',
    en: 'There were no free rooms in either Rijeka or Pula.',
    opts: ['nije bilo', 'je bilo', 'nisu bile', 'su bile'],
    answer: 'nije bilo',
    tip: 'Slobodnih soba is a genitive, so the verb is the frozen neuter singular nije bilo, and ni… ni… keeps it negated. Je bilo drops the negation. Nisu bile and su bile would need the nominative slobodne sobe.',
  },
  {
    mode: 'nini',
    q: 'Nemam novca ni za kino, ____ za putovanje.',
    en: 'I do not have money even for the movies, let alone for a trip.',
    opts: ['a kamoli', 'nego i', 'pa čak i', 'ali i'],
    answer: 'a kamoli',
    tip: 'After a negated "not even", a kamoli adds the thing that is even less possible: let alone. Nego i belongs after ne samo. Pa čak i and ali i are affirmative and cannot follow nemam… ni.',
  },

  // ── nesamo ────────────────────────────────────────────────────────────────
  {
    mode: 'nesamo',
    q: 'Ne samo da je stan velik, ____ je i jeftin.',
    en: 'Not only is the apartment big, it is also cheap.',
    opts: ['nego', 'ali', 'a', 'pa'],
    answer: 'nego',
    tip: 'After a negative the contrast is nego: ne samo… nego i…. Ali is the slip the lesson names; it is used after an affirmative statement. A and pa do not pair with ne samo.',
  },
  {
    mode: 'nesamo',
    q: 'Ona ne samo da pjeva, nego ____ sklada pjesme.',
    en: 'Not only does she sing, she also writes songs.',
    opts: ['i', 'ni', 'a', 'ili'],
    answer: 'i',
    tip: 'The second half adds something, so it carries i (also): nego i sklada. Ni is the negative partner and would deny the second half. A and ili cannot follow nego.',
  },
  {
    mode: 'nesamo',
    q: '____ da je zakasnio, nego se nije ni ispričao.',
    en: 'Not only was he late, he did not even apologize.',
    opts: ['Ne samo', 'Ni samo', 'Nikako', 'Niti'],
    answer: 'Ne samo',
    tip: 'The pair opens with ne samo (da) and is answered by nego. Ni samo is not a Croatian phrase. Nikako and niti are negations of their own and cannot set up nego.',
  },
  {
    mode: 'nesamo',
    q: 'U kojoj je rečenici par „ne samo… nego i…“ pravilno složen?',
    opts: [
      'Ne samo da kuha, nego i peče kruh.',
      'Ne samo da kuha, ali i peče kruh.',
      'Ne samo da kuha, a i peče kruh.',
      'Samo ne da kuha, nego i peče kruh.',
    ],
    answer: 'Ne samo da kuha, nego i peče kruh.',
    tip: 'Ne samo da… nego i…, in that order. Ali and a are not used after a negative first half. Samo ne turns the opener around and means something else ("just not").',
  },
  {
    mode: 'nesamo',
    lead: 'Nisam ja razbio čašu.',
    q: 'Što ova rečenica niječe?',
    opts: [
      'da sam to bio baš ja',
      'da je čaša razbijena',
      'da je to bila čaša',
      'da se išta dogodilo',
    ],
    answer: 'da sam to bio baš ja',
    tip: 'The word next to the negated verb is the focus: nisam JA. The glass is broken, but somebody else did it. To deny the object you would say Nisam razbio čašu, nego tanjur; nothing here denies that something happened.',
  },
  {
    mode: 'nesamo',
    q: 'Konobar vam je donio juhu, a vi ste naručili salatu. Što ćete reći?',
    opts: [
      'Nisam naručio juhu, nego salatu.',
      'Nisam ja naručio juhu.',
      'Nisam ništa naručio.',
      'Nitko nije naručio juhu.',
    ],
    answer: 'Nisam naručio juhu, nego salatu.',
    tip: 'You deny the object and correct it with nego: ne juhu, nego salatu. Nisam ja naručio says somebody else ordered. Nisam ništa naručio denies ordering at all, and nitko nije naručio speaks for the whole table.',
  },
  {
    mode: 'nesamo',
    q: 'Nije došao autom, ____ vlakom.',
    en: 'He did not come by car, but by train.',
    opts: ['nego', 'ali', 'pa', 'niti'],
    answer: 'nego',
    tip: 'A correction after a negative takes nego: ne autom, nego vlakom. Ali contrasts two things that are both true. Pa adds a next step, and niti would add a second negation.',
  },
  {
    mode: 'nesamo',
    q: 'Ne samo da ____ položila ispit, nego ima i najbolju ocjenu u razredu.',
    en: 'Not only did she pass the exam, she also has the best grade in the class.',
    opts: ['je', 'nije', 'bi', 'će'],
    answer: 'je',
    tip: 'Ne samo da does not negate the verb: she did pass, so it is the affirmative je položila. Nije would say she failed, which contradicts the second half. Bi and će are the conditional and the future, but the sentence is about the past.',
  },
  {
    mode: 'nesamo',
    lead: 'Ne samo da govori talijanski, nego ga i predaje.',
    q: 'Što govornik tvrdi o toj osobi?',
    opts: [
      'This person speaks Italian and also teaches it.',
      'This person does not speak Italian but teaches it.',
      'This person only speaks Italian.',
      'This person neither speaks nor teaches Italian.',
    ],
    answer: 'This person speaks Italian and also teaches it.',
    tip: 'Ne samo… nego i… asserts both halves: the first is taken as given, and the second is the point being added. It is not a denial of the first half, it is not "only", and "neither… nor…" would be ni… ni….',
  },

  // ── adane ─────────────────────────────────────────────────────────────────
  {
    mode: 'adane',
    q: 'Izašla je iz sobe ____ nikoga pogledala.',
    en: 'She left the room without looking at anyone.',
    opts: ['a da nije', 'bez da je', 'bez', 'a ne'],
    answer: 'a da nije',
    tip: '"Without doing" is a clause in Croatian: a da + a negated verb, here a da nije nikoga pogledala. Bez da is not standard. Bez takes a noun in the genitive, not a verb, and a ne cannot be followed by the participle pogledala.',
  },
  {
    mode: 'adane',
    q: 'Teško mi je proći pokraj pekarnice a da ____ kupim burek.',
    en: 'I find it hard to walk past the bakery without buying a burek.',
    opts: ['ne', 'ni', 'nisam', 'niti'],
    answer: 'ne',
    tip: 'For now or in general the clause is a da ne + the present: a da ne kupim. Ni and niti are for listing, not for negating a verb. Nisam is the past auxiliary and does not go with kupim.',
  },
  {
    mode: 'adane',
    q: 'Kako se kaže „He left without paying“?',
    opts: [
      'Otišao je a da nije platio.',
      'Otišao je bez platiti.',
      'Otišao je a ne platio.',
      'Otišao je da nije platio.',
    ],
    answer: 'Otišao je a da nije platio.',
    tip: 'A da nije platio: the "without doing" clause, in the past because the leaving is past. Bez + infinitive copies English and is the mistake the lesson names. A ne platio has no auxiliary, and without a the clause loses its meaning.',
  },
  {
    mode: 'adane',
    q: 'Rijetko prođe dan a da se ____ čujemo.',
    en: 'A day rarely goes by without us talking.',
    opts: ['ne', 'ni', 'nismo', 'niti'],
    answer: 'ne',
    tip: 'A da + ne + the present: a da se ne čujemo. Nismo is the past auxiliary and does not go with the present čujemo. Ni and niti do not negate a verb on their own.',
  },
  {
    mode: 'adane',
    q: 'Potpisao je ugovor a da ga ____ pročitao.',
    en: 'He signed the contract without reading it.',
    opts: ['nije', 'je', 'ne', 'ni'],
    answer: 'nije',
    tip: 'The signing is past, so the clause is in the past too: a da ga nije pročitao. Je would say that he did read it. Ne and ni cannot stand with the participle pročitao; the perfect needs the auxiliary.',
  },
  {
    mode: 'adane',
    q: '____ ne znaš da je sutra praznik?',
    en: 'You mean you do not know that tomorrow is a holiday?',
    opts: ['Zar', 'Da', 'Jer', 'Li'],
    answer: 'Zar',
    tip: 'Zar opens a question that shows surprise or doubt: Zar ne znaš? Da at the start would make a statement or a wish, and jer means "because". Li never stands first; it follows the verb (Ne znaš li?).',
  },
  {
    mode: 'adane',
    q: 'Lijepo pjeva, ____?',
    en: 'She sings beautifully, doesn’t she?',
    opts: ['zar ne', 'zar da', 'je li ne', 'ne li'],
    answer: 'zar ne',
    tip: 'The tag at the end of a statement is zar ne, whatever the verb or person. Zar da, je li ne and ne li are not Croatian tags; li has to follow a verb.',
  },
  {
    mode: 'adane',
    q: '____ li to tvoja sestra na fotografiji?',
    en: 'Isn’t that your sister in the photo?',
    opts: ['Nije', 'Ne', 'Ni', 'Nema'],
    answer: 'Nije',
    tip: 'A negated question that expects "yes" starts with the negated verb, and li follows it: Nije li to tvoja sestra? Ne and ni are not verbs, so li cannot attach to them. Nema would ask whether she is absent and needs the genitive.',
  },
  {
    mode: 'adane',
    lead: 'Da to nisi nikomu rekao!',
    q: 'Što govornik izriče ovom rečenicom?',
    opts: [
      'a sharp order not to tell anyone',
      'a wish that you had told someone',
      'surprise that you told no one',
      'a polite question about what you said',
    ],
    answer: 'a sharp order not to tell anyone',
    tip: 'Da + a negated past form is a strong, direct ban: do not dare tell anyone. It is far sharper than nemoj. It is not a wish, it is not surprise (that would be Zar nisi…?), and there is nothing polite about it.',
  },
];
