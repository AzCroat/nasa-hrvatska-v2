// src/data/drills/a1/familyPeopleDrill.ts
//
// A1 FAMILY AND PEOPLE — the drill for the `family-people` lesson (A1, 18).
//
// Follows Hrvatski za početnike 1, pages 20–21: the family tree of "Moja obitelj" (mama,
// tata, djed, baka, sin, kći, the note that obitelj is feminine), the text "Obitelj Anić"
// (roditelji, teta, stric, bratići i sestrične), zvati se, and the possessives used on
// relatives ("Martin je njezin muž. Danijela je njegova žena. … njihova djeca"). The book
// names only stric; ujak is added because the lesson teaches the two sides of the family.
// Only biti, zvati se and possessives: no imati and no object forms yet.
//
// Three modes:
//   tkoJeTko — who is who in the family
//   posvojne — moj, moja, moje agree with the relative
//   razgovor — talking about the family: zvati se, su, odakle

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FAMILY_PEOPLE_MODE_LABELS: Record<string, string> = {
  tkoJeTko: '👪 Tko je tko?',
  posvojne: '🧩 Moj, moja, moje',
  razgovor: '💬 Razgovor o obitelji',
};

export const FAMILY_PEOPLE_DRILL_DATA: ModeDrillItem[] = [
  // ── tkoJeTko ──────────────────────────────────────────────────────────────
  {
    mode: 'tkoJeTko',
    q: 'Moja mama je Ana. Njezin brat je moj ____.',
    en: 'My mom is Ana. Her brother is my uncle.',
    opts: ['ujak', 'stric', 'djed', 'bratić'],
    answer: 'ujak',
    tip: "Your mother's brother is ujak. stric is the uncle on your father's side, djed is a grandfather, and bratić is a male cousin.",
  },
  {
    mode: 'tkoJeTko',
    q: 'Moj tata je Martin. Njegov brat je moj ____.',
    en: 'My dad is Martin. His brother is my uncle.',
    opts: ['stric', 'ujak', 'bratić', 'sin'],
    answer: 'stric',
    tip: "Your father's brother is stric. ujak is your mother's brother, bratić is a cousin, and sin is a son.",
  },
  {
    mode: 'tkoJeTko',
    q: 'Moj tata je Martin. Njegova mama je moja ____.',
    en: 'My dad is Martin. His mom is my grandmother.',
    opts: ['baka', 'teta', 'sestra', 'kći'],
    answer: 'baka',
    tip: "A parent's mother is baka. teta is an aunt (a parent's sister), sestra is your own sister, and kći is a daughter.",
  },
  {
    mode: 'tkoJeTko',
    q: 'Moja mama je Danijela. Njezin tata je moj ____.',
    en: 'My mom is Danijela. Her dad is my grandfather.',
    opts: ['djed', 'stric', 'ujak', 'brat'],
    answer: 'djed',
    tip: "A parent's father is djed. stric and ujak are uncles (the brothers of your parents), and brat is your own brother.",
  },
  {
    mode: 'tkoJeTko',
    q: 'Mama i tata su moji ____.',
    en: 'Mom and Dad are my parents.',
    opts: ['roditelji', 'roditelj', 'bratići', 'djedovi'],
    answer: 'roditelji',
    tip: 'Mom and Dad together are roditelji, a plural. roditelj is just one parent, bratići are cousins, and djedovi are grandfathers.',
  },
  {
    mode: 'tkoJeTko',
    q: 'Moj stric je Marko. Njegov sin je moj ____.',
    en: 'My uncle is Marko. His son is my cousin.',
    opts: ['bratić', 'brat', 'sestrična', 'unuk'],
    answer: 'bratić',
    tip: "An uncle's son is bratić, a male cousin. brat is the son of your own parents, sestrična is a female cousin, and unuk is a grandson.",
  },
  {
    mode: 'tkoJeTko',
    q: 'Moja teta je Sonja. Njezina kći je moja ____.',
    en: 'My aunt is Sonja. Her daughter is my cousin.',
    opts: ['sestrična', 'sestra', 'bratić', 'baka'],
    answer: 'sestrična',
    tip: "An aunt's daughter is sestrična, a female cousin. sestra is your own sister, bratić is a male cousin, and baka is a grandmother.",
  },
  {
    mode: 'tkoJeTko',
    q: 'Martin je muž, a Danijela je njegova ____.',
    en: 'Martin is the husband, and Danijela is his wife.',
    opts: ['žena', 'kći', 'sestra', 'teta'],
    answer: 'žena',
    tip: 'Husband and wife are muž and žena. kći is a daughter, sestra a sister and teta an aunt, and none of them is the partner of a muž.',
  },
  {
    mode: 'tkoJeTko',
    q: 'Luka je sin, a Ema je ____.',
    en: 'Luka is the son, and Ema is the daughter.',
    opts: ['kći', 'unuk', 'muž', 'djed'],
    answer: 'kći',
    tip: 'The pair is sin (son) and kći (daughter). unuk, muž and djed are all male relatives: a grandson, a husband and a grandfather.',
  },

  // ── posvojne ──────────────────────────────────────────────────────────────
  {
    mode: 'posvojne',
    q: 'Ovo je ____ brat.',
    en: 'This is my brother.',
    opts: ['moj', 'moja', 'moje', 'moji'],
    answer: 'moj',
    tip: 'The possessive matches the relative, not the speaker: brat is masculine, so moj brat. moja is feminine, moje neuter, and moji is for several men.',
  },
  {
    mode: 'posvojne',
    q: 'Ovo je ____ sestra.',
    en: 'This is my sister.',
    opts: ['moja', 'moj', 'moje', 'moji'],
    answer: 'moja',
    tip: 'sestra is feminine, so it is moja sestra, even when a man is speaking. moj goes with brat, moje with a neuter noun, and moji with a masculine plural.',
  },
  {
    mode: 'posvojne',
    q: 'To su ____ roditelji.',
    en: 'Those are my parents.',
    opts: ['moji', 'moje', 'moja', 'moj'],
    answer: 'moji',
    tip: 'roditelji is a masculine plural, so the possessive ends in -i: moji roditelji. moje is for a feminine plural such as sestre, and moj and moja are singular.',
  },
  {
    mode: 'posvojne',
    q: 'To su ____ sestre.',
    en: 'Those are our sisters.',
    opts: ['naše', 'naši', 'naša', 'naš'],
    answer: 'naše',
    tip: 'sestre is a feminine plural, so it is naše sestre. naši goes with a masculine plural (naši roditelji), and naša and naš are singular forms.',
  },
  {
    mode: 'posvojne',
    q: 'Ovo je ____ dijete.',
    en: 'This is their child.',
    opts: ['njihovo', 'njihov', 'njihova', 'njihovi'],
    answer: 'njihovo',
    tip: 'dijete is neuter, so the possessive takes -o: njihovo dijete. njihov is masculine, njihova feminine, and njihovi a masculine plural.',
  },
  {
    mode: 'posvojne',
    q: 'To su ____ djeca.',
    en: 'Those are my children.',
    opts: ['moja', 'moji', 'moje', 'moj'],
    answer: 'moja',
    tip: 'djeca (and braća) take the -a form: moja djeca, moja braća. moji and moje are the usual plural forms, but not with these two words; moj is singular.',
  },
  {
    mode: 'posvojne',
    q: 'Kako se zove ____ baka?',
    en: "What is your grandmother's name?",
    opts: ['tvoja', 'tvoj', 'tvoje', 'tvoji'],
    answer: 'tvoja',
    tip: 'baka is feminine, so it is tvoja baka. tvoj would go with djed, tvoje with a neuter noun, and tvoji with a plural such as roditelji.',
  },
  {
    mode: 'posvojne',
    q: 'Martin je ____ muž.',
    en: 'Martin is her husband.',
    opts: ['njezin', 'njezina', 'njezino', 'njegov'],
    answer: 'njezin',
    tip: '"Her" is njezin, and it matches muž, which is masculine. njezina and njezino are the feminine and neuter forms, and njegov means "his".',
  },
  {
    mode: 'posvojne',
    q: 'Danijela je ____ žena.',
    en: 'Danijela is his wife.',
    opts: ['njegova', 'njegov', 'njezina', 'njegovo'],
    answer: 'njegova',
    tip: '"His" is njegov, and with the feminine noun žena it becomes njegova. njezina means "her", and njegov and njegovo are the masculine and neuter forms.',
  },
  {
    mode: 'posvojne',
    q: '____ obitelj je iz Splita.',
    en: 'My family is from Split.',
    opts: ['Moja', 'Moj', 'Moje', 'Moji'],
    answer: 'Moja',
    tip: 'obitelj ends in a consonant but is a feminine noun, so it is moja obitelj. Moj treats it as masculine, Moje as neuter, and Moji as a plural.',
  },

  // ── razgovor ──────────────────────────────────────────────────────────────
  {
    mode: 'razgovor',
    q: 'Kako ____ tvoj brat?',
    en: "What is your brother's name?",
    opts: ['se zove', 'se zoveš', 'se zovu', 'se zovem'],
    answer: 'se zove',
    tip: 'The question is about him (on), so the verb is se zove. se zoveš asks about you, se zovem is "my name is", and se zovu is for several people.',
  },
  {
    mode: 'razgovor',
    q: 'Djed i baka ____ Ante i Marija.',
    en: 'Grandpa and Grandma are called Ante and Marija.',
    opts: ['se zovu', 'se zove', 'se zovemo', 'se zovete'],
    answer: 'se zovu',
    tip: 'Two people are "they", so the verb is se zovu. se zove is for one person, se zovemo for "we" and se zovete for "you".',
  },
  {
    mode: 'razgovor',
    q: 'Naša djeca ____ studenti.',
    en: 'Our children are students.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'djeca looks singular because of its -a, but it means several children and takes the plural verb su. je is the common slip; smo and ste are for mi and vi.',
  },
  {
    mode: 'razgovor',
    q: 'Odakle je tvoja obitelj? — ____.',
    en: 'Where is your family from?',
    opts: ['Iz Splita', 'Dobro, hvala', 'Zove se Ana', 'Moj brat'],
    answer: 'Iz Splita',
    tip: 'Odakle? asks where from, so the answer starts with iz: Iz Splita. "Dobro, hvala" answers Kako si?, "Zove se Ana" answers a name question, and "Moj brat" answers Tko?',
  },
  {
    mode: 'razgovor',
    q: '____ je tvoja baka? — Iz Dalmacije.',
    en: '… — From Dalmatia.',
    opts: ['Odakle', 'Tko', 'Kako', 'Što'],
    answer: 'Odakle',
    tip: 'The answer names a place of origin (iz Dalmacije), so the question word is Odakle. Tko asks who, Kako asks how, and Što asks what.',
  },
  {
    mode: 'razgovor',
    q: 'Je li Ana tvoja sestra? — Ne, ____ sestra. Ona je moja sestrična.',
    en: 'Is Ana your sister? — No, she is not my sister. She is my cousin.',
    opts: ['nije moja', 'nisu moja', 'nisam moja', 'nije moj'],
    answer: 'nije moja',
    tip: 'One person, so nije, and sestra is feminine, so moja. nisu is for several people, nisam means "I am not", and moj is the masculine form.',
  },
  {
    mode: 'razgovor',
    q: 'Ovo su baka i djed, a ovo su njihovi ____.',
    en: 'These are Grandma and Grandpa, and these are their grandsons.',
    opts: ['unuci', 'unuki', 'unukovi', 'unuk'],
    answer: 'unuci',
    tip: 'unuk adds the plural -i, and k changes to c before it: unuci. unuki keeps the k, unukovi adds an extension the word does not take, and unuk is one grandson.',
  },
  {
    mode: 'razgovor',
    q: 'Marko i Ivan su moja ____.',
    en: 'Marko and Ivan are my brothers.',
    opts: ['braća', 'brati', 'bratovi', 'brat'],
    answer: 'braća',
    tip: 'The plural of brat is the word braća, which is why the possessive is moja. brati and bratovi use regular endings this noun does not take; brat is one brother.',
  },
  {
    mode: 'razgovor',
    q: 'Ivan i ja ____ braća.',
    en: 'Ivan and I are brothers.',
    opts: ['smo', 'su', 'ste', 'sam'],
    answer: 'smo',
    tip: '"Ivan and I" is "we", so the verb is smo. su would be "they are", ste is "you are", and sam is only for ja alone.',
  },
];
