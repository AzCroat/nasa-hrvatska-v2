// src/data/drills/c1/coordinateConclusiveClausesDrill.ts
//
// C1 COORDINATE AND CONCLUSIVE CLAUSES — the drill for `coordinate-conclusive-clauses`.
//
// Three modes:
//   veznici — choose the connector: i, pa, te, dakle, stoga, zato, prema tome
//   zarez   — the comma: none before i, te, niti; one before stoga, zato, prema tome
//   negacija — ni … ni with a negated verb, and niti opening a second clause
//
// No item turns on a comma before conclusive pa, where the guides differ, and no
// option is a sentence that is correct with a different meaning from its gloss.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COORDINATE_CONCLUSIVE_CLAUSES_MODE_LABELS: Record<string, string> = {
  veznici: '🔗 Veznici',
  zarez: '✏️ Zarez',
  negacija: '🚫 Ni i niti',
};

const PUNCT = 'Koja je rečenica točno napisana?';

export const COORDINATE_CONCLUSIVE_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── veznici ───────────────────────────────────────────────────────────────
  {
    mode: 'veznici',
    q: 'Bio sam bolestan, ____ nisam došao.',
    en: 'I was ill; that is why I did not come.',
    opts: ['zato', 'zato što', 'jer', 'iako'],
    answer: 'zato',
    tip: 'zato looks back at the reason already given.',
  },
  {
    mode: 'veznici',
    q: 'Cesta je zatvorena, ____ idemo obilaznicom.',
    en: 'The road is closed, therefore we are taking the bypass.',
    opts: ['stoga', 'jer', 'iako', 'ako'],
    answer: 'stoga',
    tip: 'stoga — the formal "therefore".',
  },
  {
    mode: 'veznici',
    q: 'Prvo smo ručali ____ smo otišli na plažu.',
    en: 'First we had lunch and then we went to the beach.',
    opts: ['pa', 'jer', 'iako', 'niti'],
    answer: 'pa',
    tip: 'pa adds what comes next in time.',
  },
  {
    mode: 'veznici',
    q: 'Svjetla su ugašena, ____ nikoga nema kod kuće.',
    en: 'The lights are off, so nobody is at home.',
    opts: ['dakle', 'jer', 'premda', 'ako'],
    answer: 'dakle',
    tip: 'dakle draws a conclusion.',
  },
  {
    mode: 'veznici',
    q: 'Vlada je razmotrila prijedlog ____ ga uputila Saboru.',
    en: 'The government considered the proposal and sent it to Parliament.',
    opts: ['te', 'niti', 'jer', 'ako'],
    answer: 'te',
    tip: 'te is the formal "and" of official texts.',
  },
  {
    mode: 'veznici',
    q: 'Rok je istekao, ____ prijava nije valjana.',
    en: 'The deadline has passed; consequently the application is not valid.',
    opts: ['prema tome', 'zato što', 'jer', 'iako'],
    answer: 'prema tome',
    tip: 'prema tome — consequently, formal and legal style.',
  },
  {
    mode: 'veznici',
    q: 'Nisam došao ____ sam bio bolestan.',
    en: 'I did not come because I was ill.',
    opts: ['zato što', 'zato', 'stoga', 'dakle'],
    answer: 'zato što',
    tip: 'zato što introduces the reason; zato alone points back at one.',
  },
  {
    mode: 'veznici',
    q: 'Kasno je, ____ idemo kući.',
    en: 'It is late, so let us go home.',
    opts: ['pa', 'niti', 'jer', 'iako'],
    answer: 'pa',
    tip: 'In speech pa can draw a conclusion: so.',
  },

  // ── zarez ─────────────────────────────────────────────────────────────────
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'He entered the room and sat down.',
    opts: [
      'Ušao je u sobu i sjeo.',
      'Ušao je u sobu, i sjeo.',
      'Ušao je, u sobu i sjeo.',
      'Ušao je u sobu i, sjeo.',
    ],
    answer: 'Ušao je u sobu i sjeo.',
    tip: 'No comma before i between coordinate clauses.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'The train is late, so we will be late.',
    opts: [
      'Vlak kasni, stoga ćemo zakasniti.',
      'Vlak kasni stoga, ćemo zakasniti.',
      'Vlak, kasni stoga ćemo zakasniti.',
      'Vlak kasni stoga ćemo, zakasniti.',
    ],
    answer: 'Vlak kasni, stoga ćemo zakasniti.',
    tip: 'A comma before the conclusive connector.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'He neither ate nor drank.',
    opts: [
      'Nije jeo niti je pio.',
      'Nije jeo niti je, pio.',
      'Nije, jeo niti je pio.',
      'Nije jeo niti, je pio.',
    ],
    answer: 'Nije jeo niti je pio.',
    tip: 'niti joins like i, without a comma.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'We invited guests and prepared dinner.',
    opts: [
      'Pozvali smo goste te pripremili večeru.',
      'Pozvali smo goste, te pripremili večeru.',
      'Pozvali smo goste te, pripremili večeru.',
      'Pozvali, smo goste te pripremili večeru.',
    ],
    answer: 'Pozvali smo goste te pripremili večeru.',
    tip: 'te behaves like i: no comma.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'I was tired, so I went to bed early.',
    opts: [
      'Bio sam umoran, zato sam rano legao.',
      'Bio sam umoran zato, sam rano legao.',
      'Bio sam, umoran zato sam rano legao.',
      'Bio sam umoran zato sam, rano legao.',
    ],
    answer: 'Bio sam umoran, zato sam rano legao.',
    tip: 'A comma before zato when it opens the second clause.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'He opened the window and breathed in the air.',
    opts: [
      'Otvorio je prozor i udahnuo zrak.',
      'Otvorio je prozor, i udahnuo zrak.',
      'Otvorio je, prozor i udahnuo zrak.',
      'Otvorio je prozor i, udahnuo zrak.',
    ],
    answer: 'Otvorio je prozor i udahnuo zrak.',
    tip: 'No comma before i.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'We have no tickets; consequently we cannot get in.',
    opts: [
      'Nemamo karte, prema tome ne možemo ući.',
      'Nemamo karte prema tome, ne možemo ući.',
      'Nemamo, karte prema tome ne možemo ući.',
      'Nemamo karte prema, tome ne možemo ući.',
    ],
    answer: 'Nemamo karte, prema tome ne možemo ući.',
    tip: 'A comma before prema tome.',
  },
  {
    mode: 'zarez',
    q: PUNCT,
    en: 'He bought bread and went home.',
    opts: [
      'Kupio je kruh i vratio se kući.',
      'Kupio je kruh, i vratio se kući.',
      'Kupio je, kruh i vratio se kući.',
      'Kupio je kruh i, vratio se kući.',
    ],
    answer: 'Kupio je kruh i vratio se kući.',
    tip: 'No comma before i between coordinate clauses.',
  },

  // ── negacija ──────────────────────────────────────────────────────────────
  {
    mode: 'negacija',
    q: 'Ne pijem ____ kavu ni čaj.',
    en: 'I drink neither coffee nor tea.',
    opts: ['ni', 'i', 'ili', 'a'],
    answer: 'ni',
    tip: 'ni stands before each member, and the verb keeps ne.',
  },
  {
    mode: 'negacija',
    q: '____ ni zimu ni kišu.',
    en: 'I like neither winter nor rain.',
    opts: ['Ne volim', 'Volim', 'Nisam volim', 'Ni volim'],
    answer: 'Ne volim',
    tip: 'The verb is negated as well: Ne volim ni … ni.',
  },
  {
    mode: 'negacija',
    q: 'Nije jeo ____ je pio cijeli dan.',
    en: 'He neither ate nor drank all day.',
    opts: ['niti', 'i', 'pa', 'te'],
    answer: 'niti',
    tip: 'niti opens the second negative clause.',
  },
  {
    mode: 'negacija',
    q: 'Nismo ga ____ vidjeli ____ čuli.',
    en: 'We neither saw nor heard him.',
    opts: ['ni … ni', 'i … i', 'ili … ili', 'te … te'],
    answer: 'ni … ni',
    tip: 'With a negated verb, ni before each member.',
  },
  {
    mode: 'negacija',
    q: 'U toj kući nema ____ struje ____ vode.',
    en: 'In that house there is neither electricity nor water.',
    opts: ['ni … ni', 'i … i', 'ili … ili', 'pa … pa'],
    answer: 'ni … ni',
    tip: 'nema is negative, so ni … ni follows.',
  },
  {
    mode: 'negacija',
    q: 'Nije htio pomoći ____ je dopustio drugima da pomognu.',
    en: 'He did not want to help, nor did he let others help.',
    opts: ['niti', 'pa', 'te', 'i'],
    answer: 'niti',
    tip: 'A second negative clause is joined with niti.',
  },
  {
    mode: 'negacija',
    q: 'Ne govori ____ engleski ni njemački.',
    en: 'He speaks neither English nor German.',
    opts: ['ni', 'i', 'ili', 'pa'],
    answer: 'ni',
    tip: 'ni … ni with the negated verb.',
  },
  {
    mode: 'negacija',
    q: 'Ne jede ____ meso ____ ribu.',
    en: 'She eats neither meat nor fish.',
    opts: ['ni … ni', 'i … i', 'ili … ili', 'te … te'],
    answer: 'ni … ni',
    tip: 'ni before each member, and ne on the verb.',
  },
];
