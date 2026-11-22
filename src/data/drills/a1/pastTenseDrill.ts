// src/data/drills/a1/pastTenseDrill.ts
//
// A1 THE PAST TENSE — the drill for the `past-tense` lesson.
//
// Follows Hrvatski za početnike 1, pages 73–76 (unit "Gdje ste bili?"): PERFEKT GLAGOLA
// biti first ("Ja sam bila u kupovini. On je bio na utakmici."), then the text "Njezin
// vikend" and the rows "Marin ____ knjigu. (kupiti)", the negative form ("Mi nismo bili na
// fakultetu") and PERFEKT GLAGOLA NA -jeti (želio / željela). The book's order is kept:
// biti, then -ati and -iti verbs, then -jeti. Questions in the past are the subject of a
// later lesson and are left out, as are the irregular verbs other than ići.
//
// Three modes:
//   biti    — the past of biti: bio, bila, bilo, bili, bile
//   particip — the participle agrees with who did it
//   red     — sam / je in second place, and nisam for "did not"

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PAST_TENSE_MODE_LABELS: Record<string, string> = {
  biti: '🕰️ Bio, bila',
  particip: '🔤 Particip',
  red: '↔️ Red riječi',
};

export const PAST_TENSE_DRILL_DATA: ModeDrillItem[] = [
  // ── biti ──────────────────────────────────────────────────────────────────
  {
    mode: 'biti',
    q: 'Hrvoje je ____ u Varaždinu.',
    en: 'Hrvoje was in Varaždin.',
    opts: ['bio', 'bila', 'bili', 'bilo'],
    answer: 'bio',
    tip: 'Hrvoje is one man, so the masculine form: bio. bila is for a woman, bilo for a neuter subject, and bili for several people.',
  },
  {
    mode: 'biti',
    q: 'Ana je ____ u kupovini.',
    en: 'Ana was out shopping.',
    opts: ['bila', 'bio', 'bile', 'bilo'],
    answer: 'bila',
    tip: 'Ana is one woman, so -la: bila. bio is for a man, bile for several women, and bilo for a neuter subject.',
  },
  {
    mode: 'biti',
    q: 'Ivan i Ana: "Mi smo ____ u Zagrebu."',
    en: 'Ivan and Ana: "We were in Zagreb."',
    opts: ['bili', 'bile', 'bio', 'bila'],
    answer: 'bili',
    tip: 'A man and a woman together take the -li form: bili. bile is only for a group of women; bio and bila are for one person.',
  },
  {
    mode: 'biti',
    q: 'Dijete je ____ na igralištu.',
    en: 'The child was at the playground.',
    opts: ['bilo', 'bio', 'bila', 'bili'],
    answer: 'bilo',
    tip: 'dijete is a neuter noun, so the participle takes -lo: bilo. bio and bila follow masculine and feminine subjects.',
  },
  {
    mode: 'biti',
    q: 'One su ____ na tržnici.',
    en: 'They (women) were at the market.',
    opts: ['bile', 'bili', 'bila', 'bilo'],
    answer: 'bile',
    tip: 'one is a group of women only, so -le: bile. bili is for men or a mixed group, and bila is for one woman.',
  },
  {
    mode: 'biti',
    q: 'Koncert je ____ izvrstan.',
    en: 'The concert was excellent.',
    opts: ['bio', 'bila', 'bilo', 'bili'],
    answer: 'bio',
    tip: 'Things have gender too: koncert is masculine, so bio. bilo is the trap; "it" is not automatically neuter in Croatian.',
  },
  {
    mode: 'biti',
    q: 'Ja ____ bila u klubu.',
    en: 'I was at the club. (a woman speaking)',
    opts: ['sam', 'si', 'je', 'su'],
    answer: 'sam',
    tip: 'The helper is the present of biti, matched to the person: ja → sam. si is for ti, je for on or ona, and su for oni.',
  },
  {
    mode: 'biti',
    q: 'Oni ____ bili na izletu.',
    en: 'They were on a trip.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'oni → su. je goes with one person, smo with mi, and ste with vi.',
  },
  {
    mode: 'biti',
    q: 'Vi ____ bili u Beču.',
    en: 'You were in Vienna. (to several people)',
    opts: ['ste', 'smo', 'su', 'si'],
    answer: 'ste',
    tip: 'vi → ste. smo goes with mi, su with oni, and si with ti (which would also need bio or bila).',
  },

  // ── particip ──────────────────────────────────────────────────────────────
  {
    mode: 'particip',
    q: 'Marin je ____ rječnik. (kupiti)',
    en: 'Marin bought a dictionary.',
    opts: ['kupio', 'kupila', 'kupili', 'kupilo'],
    answer: 'kupio',
    tip: 'Drop -ti and add the ending for the subject. Marin is a man: kupi-o. kupila is for a woman, kupili for several people, and kupilo for a neuter subject.',
  },
  {
    mode: 'particip',
    q: 'Jasna je ____ glazbu. (slušati)',
    en: 'Jasna listened to music.',
    opts: ['slušala', 'slušao', 'slušali', 'slušale'],
    answer: 'slušala',
    tip: 'Jasna is one woman: sluša-la. slušao is for a man; slušali and slušale are plural.',
  },
  {
    mode: 'particip',
    q: 'Tata je ____ večeru. (kuhati)',
    en: 'Dad cooked dinner.',
    opts: ['kuhao', 'kuhala', 'kuhali', 'kuhalo'],
    answer: 'kuhao',
    tip: 'tata is a man: kuha-o. The participle follows the SUBJECT, so the feminine večeru does not matter; kuhala would mean a woman cooked.',
  },
  {
    mode: 'particip',
    q: 'Studenti su ____ nogomet. (igrati)',
    en: 'The students played soccer.',
    opts: ['igrali', 'igrale', 'igrao', 'igrala'],
    answer: 'igrali',
    tip: 'studenti is a masculine plural: igra-li. igrale is only for women; igrao and igrala are for one person.',
  },
  {
    mode: 'particip',
    q: 'Moje sestre su ____ cijeli dan. (plivati)',
    en: 'My sisters swam all day.',
    opts: ['plivale', 'plivali', 'plivala', 'plivao'],
    answer: 'plivale',
    tip: 'sestre are all women, so -le: plivale. plivali is for men or a mixed group, and plivala is for one woman.',
  },
  {
    mode: 'particip',
    q: 'Dijete je ____. (spavati)',
    en: 'The child slept.',
    opts: ['spavalo', 'spavao', 'spavala', 'spavali'],
    answer: 'spavalo',
    tip: 'dijete is neuter, so -lo: spavalo. spavao and spavala follow masculine and feminine subjects.',
  },
  {
    mode: 'particip',
    q: 'One su ____ u Splitu. (živjeti)',
    en: 'They (women) lived in Split.',
    opts: ['živjele', 'živjeli', 'živjela', 'živio'],
    answer: 'živjele',
    tip: 'A -jeti verb keeps -je- before -la, -li, -le: živjele. živjeli is for men or a mixed group, živjela for one woman, and živio for one man.',
  },
  {
    mode: 'particip',
    q: 'Jučer sam ____ sestru u gradu. (vidjeti — a man speaking)',
    en: 'Yesterday I saw my sister in town.',
    opts: ['vidio', 'vidjeo', 'vidjela', 'vidjeli'],
    answer: 'vidio',
    tip: 'In the masculine singular a -jeti verb ends in -io: vidio, like želio. "vidjeo" keeps the -je- by mistake; vidjela is what a woman says.',
  },
  {
    mode: 'particip',
    q: 'Ona je ____ kupiti nove cipele. (željeti)',
    en: 'She wanted to buy new shoes.',
    opts: ['željela', 'želio', 'željeli', 'želila'],
    answer: 'željela',
    tip: 'željeti keeps -je- in the feminine: željela. želio is the masculine form, željeli is plural, and "želila" drops the -je-.',
  },
  {
    mode: 'particip',
    q: 'Petra i Ivan su ____ u kino. (ići)',
    en: 'Petra and Ivan went to the movies.',
    opts: ['išli', 'išle', 'išao', 'išla'],
    answer: 'išli',
    tip: 'ići is irregular in the past: išao, išla, išli, išle. A woman and a man together take išli; išle is only for women.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is correct for "I worked yesterday" (a man speaking)?',
    opts: ['Jučer sam radio.', 'Sam radio jučer.', 'Jučer radio sam.', 'Jučer sam radila.'],
    answer: 'Jučer sam radio.',
    tip: 'sam goes in second place, right after Jučer. It can never open the sentence, and it cannot wait until after radio. radila is what a woman says.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "She read a book"?',
    opts: ['Čitala je knjigu.', 'Je čitala knjigu.', 'Čitala knjigu je.', 'Čitao je knjigu.'],
    answer: 'Čitala je knjigu.',
    tip: 'With no pronoun, the participle comes first and je follows it. je cannot open the sentence or drift to the end, and čitao would be a man.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "We watched a movie"?',
    opts: ['Gledali smo film.', 'Smo gledali film.', 'Gledali film smo.', 'Gledali su film.'],
    answer: 'Gledali smo film.',
    tip: 'smo takes second place, after the participle. It cannot come first or last, and su would mean "they watched".',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "I was at work" (a man speaking)?',
    opts: [
      'Ja sam bio na poslu.',
      'Ja bio sam na poslu.',
      'Sam ja bio na poslu.',
      'Ja je bio na poslu.',
    ],
    answer: 'Ja sam bio na poslu.',
    tip: 'With the pronoun first, sam comes straight after it: Ja sam bio. It cannot follow the participle here or open the sentence, and je belongs to on.',
  },
  {
    mode: 'red',
    q: 'Ja ____ radio. Bio sam doma.',
    en: 'I did not work. I was at home.',
    opts: ['nisam', 'ne sam', 'nisi', 'nije'],
    answer: 'nisam',
    tip: 'The negative helper is one fused word: nisam. "ne sam" does not exist, nisi is the ti form, and nije the on / ona form.',
  },
  {
    mode: 'red',
    q: 'Ona ____ bila na koncertu.',
    en: 'She was not at the concert.',
    opts: ['nije', 'nisu', 'ne je', 'nisam'],
    answer: 'nije',
    tip: 'ona → nije, written as one word. "ne je" is not Croatian; nisu is for oni and nisam for ja.',
  },
  {
    mode: 'red',
    q: 'Mi ____ bili na izletu.',
    en: 'We were not on the trip.',
    opts: ['nismo', 'niste', 'nisu', 'ne smo'],
    answer: 'nismo',
    tip: 'mi → nismo. niste is for vi, nisu for oni, and "ne smo" wrongly splits the word in two.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "Josip did not buy bread"?',
    opts: [
      'Josip nije kupio kruh.',
      'Josip ne je kupio kruh.',
      'Josip nije kupiti kruh.',
      'Josip nije kupila kruh.',
    ],
    answer: 'Josip nije kupio kruh.',
    tip: 'nije + the participle, which still agrees with Josip: nije kupio. "ne je" is not a word, kupiti is the infinitive, and kupila would be a woman.',
  },
  {
    mode: 'red',
    q: 'In the past tense, the participle (radio, radila, radili) agrees with ____.',
    opts: ['the subject, who did it', 'the object', 'the time word', 'nothing: it never changes'],
    answer: 'the subject, who did it',
    tip: 'The participle takes the gender and number of the subject: Ana je radila, Ivan je radio. The object and the time word have no effect on it.',
  },
];
