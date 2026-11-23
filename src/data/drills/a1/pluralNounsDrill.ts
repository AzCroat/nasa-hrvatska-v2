// src/data/drills/a1/pluralNounsDrill.ts
//
// A1 PLURAL OF NOUNS — the drill for the `plural-nouns` lesson (A1, 10).
//
// Follows Hrvatski za početnike 1, pages 13–14: the "Napravite množinu" rows ("To je
// knjiga. To su ____."), the jednina/množina table (poklon → pokloni, knjiga → knjige,
// pismo/sunce → pisma/sunca) and čovjek → ljudi; the short masculine nouns that grow
// (most → mostovi, nož → noževi) are on page 23. Sentences use only biti and ovo/to/ono,
// which is all a learner has at this point: no cases, no other verbs.
//
// Three modes:
//   zenskiSrednji — feminine -a → -e, neuter -o/-e → -a
//   muski         — masculine + -i, short nouns + -ovi/-evi, k → c
//   recenica      — je → su, and the plurals learned as words (ljudi, djeca, braća, oči, uši)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PLURAL_NOUNS_MODE_LABELS: Record<string, string> = {
  zenskiSrednji: '🅰️ -a → -e, -o → -a',
  muski: '➕ -i i -ovi',
  recenica: '👥 Je ili su? Ljudi, djeca',
};

export const PLURAL_NOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── zenskiSrednji ─────────────────────────────────────────────────────────
  {
    mode: 'zenskiSrednji',
    q: 'To je knjiga. To su ____.',
    en: 'That is a book. Those are books.',
    opts: ['knjige', 'knjigi', 'knjiga', 'knjigovi'],
    answer: 'knjige',
    tip: 'A feminine noun in -a changes that -a to -e: knjiga → knjige. -i and -ovi are masculine plural endings, and knjiga is still one book.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'Ovo je olovka. Ovo su ____.',
    en: 'This is a pencil. These are pencils.',
    opts: ['olovke', 'olovka', 'olovki', 'olovkovi'],
    answer: 'olovke',
    tip: 'olovka is feminine, so -a becomes -e: olovke. olovka is the singular; -i and -ovi belong to masculine nouns such as student and grad.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'Ono je kuća. Ono su ____.',
    en: 'That over there is a house. Those are houses.',
    opts: ['kuće', 'kući', 'kuća', 'kućevi'],
    answer: 'kuće',
    tip: 'Feminine -a → -e: kuća → kuće. kuća is one house, and -i or -evi are endings for masculine nouns, which end in a consonant.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'To je žena. To su ____.',
    en: 'That is a woman. Those are women.',
    opts: ['žene', 'ženi', 'žena', 'ženovi'],
    answer: 'žene',
    tip: 'žena ends in -a, so the plural ends in -e: žene. The masculine endings -i and -ovi do not attach to a feminine noun, and žena is the singular.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'To je selo. To su ____.',
    en: 'That is a village. Those are villages.',
    opts: ['sela', 'sele', 'seli', 'selo'],
    answer: 'sela',
    tip: 'A neuter noun in -o takes -a in the plural: selo → sela. -e is the feminine plural ending, -i the masculine one, and selo is still singular.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'Ovo je pismo. Ovo su ____.',
    en: 'This is a letter. These are letters.',
    opts: ['pisma', 'pisme', 'pismi', 'pismovi'],
    answer: 'pisma',
    tip: 'Neuter -o → -a: pismo → pisma. pisme copies the feminine pattern, and pismi and pismovi copy the masculine ones.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'To je more. To su ____.',
    en: 'That is a sea. Those are seas.',
    opts: ['mora', 'more', 'mori', 'morevi'],
    answer: 'mora',
    tip: 'A neuter noun in -e also takes -a: more → mora. more is the singular (its -e is not a feminine plural), and -i and -evi are masculine endings.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'Koja je riječ u množini?',
    en: 'Which word is in the plural?',
    opts: ['sestre', 'sestra', 'more', 'selo'],
    answer: 'sestre',
    tip: 'sestre is the plural of sestra (-a → -e). more ends in -e too, but it is a neuter singular, just like selo; sestra is one sister.',
  },
  {
    mode: 'zenskiSrednji',
    q: 'Koja je riječ u jednini?',
    en: 'Which word is in the singular?',
    opts: ['žena', 'sela', 'pisma', 'mora'],
    answer: 'žena',
    tip: 'žena is one woman: a feminine singular in -a. sela, pisma and mora also end in -a, but they are neuter plurals (selo, pismo, more).',
  },

  // ── muski ─────────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'To je student. To su ____.',
    en: 'That is a student. Those are students.',
    opts: ['studenti', 'studente', 'studenta', 'studentovi'],
    answer: 'studenti',
    tip: 'A masculine noun ends in a consonant and adds -i: studenti. -e and -a are the feminine and neuter plural endings, and -ovi is only for short nouns.',
  },
  {
    mode: 'muski',
    q: 'To je profesor. To su ____.',
    en: 'That is a professor. Those are professors.',
    opts: ['profesori', 'profesore', 'profesora', 'profesorovi'],
    answer: 'profesori',
    tip: 'Longer masculine nouns simply add -i: profesori. -ovi is for one-syllable nouns such as grad, and -e and -a belong to the other two genders.',
  },
  {
    mode: 'muski',
    q: 'Ovo je telefon. Ovo su ____.',
    en: 'This is a telephone. These are telephones.',
    opts: ['telefoni', 'telefone', 'telefona', 'telefonovi'],
    answer: 'telefoni',
    tip: 'telefon is masculine and long, so it adds -i: telefoni. -e is the feminine plural, -a the neuter plural, and -ovi is not needed on a long noun.',
  },
  {
    mode: 'muski',
    q: 'To je prijatelj. To su ____.',
    en: 'That is a friend. Those are friends.',
    opts: ['prijatelji', 'prijatelje', 'prijatelja', 'prijateljevi'],
    answer: 'prijatelji',
    tip: 'prijatelj has three syllables, so it just adds -i: prijatelji. The extra -ev- is only for short nouns, and -e and -a are not masculine plural endings.',
  },
  {
    mode: 'muski',
    q: 'To je grad. To su ____.',
    en: 'That is a city. Those are cities.',
    opts: ['gradovi', 'gradi', 'grade', 'grada'],
    answer: 'gradovi',
    tip: 'A one-syllable masculine noun grows: grad + ov + i = gradovi. gradi forgets the -ov-, and grade and grada borrow feminine and neuter endings.',
  },
  {
    mode: 'muski',
    q: 'To je most. To su ____.',
    en: 'That is a bridge. Those are bridges.',
    opts: ['mostovi', 'mosti', 'mostevi', 'moste'],
    answer: 'mostovi',
    tip: 'most is short, so it takes -ov- before -i: mostovi. mosti leaves it out, -ev- is only used after a soft consonant such as ž, and -e is feminine.',
  },
  {
    mode: 'muski',
    q: 'To je muž. To su ____.',
    en: 'That is a husband. Those are husbands.',
    opts: ['muževi', 'mužovi', 'muži', 'muže'],
    answer: 'muževi',
    tip: 'After a soft consonant (ž, š, č, ć, j…) the short noun takes -ev-, not -ov-: muž → muževi. muži has no extension at all, and -e is the feminine ending.',
  },
  {
    mode: 'muski',
    q: 'Ovo je nož. Ovo su ____.',
    en: 'This is a knife. These are knives.',
    opts: ['noževi', 'nožovi', 'noži', 'noža'],
    answer: 'noževi',
    tip: 'nož is short and ends in the soft consonant ž, so it takes -ev-: noževi. nožovi uses the hard version, noži forgets the extension, and -a is neuter.',
  },
  {
    mode: 'muski',
    q: 'To je vojnik. To su ____.',
    en: 'That is a soldier. Those are soldiers.',
    opts: ['vojnici', 'vojniki', 'vojnikovi', 'vojnike'],
    answer: 'vojnici',
    tip: 'Before the plural -i a final k changes to c: vojnik → vojnici. vojniki keeps the k, -ovi is for short nouns only, and -e is the feminine ending.',
  },

  // ── recenica ──────────────────────────────────────────────────────────────
  {
    mode: 'recenica',
    q: 'Sestre ____ ovdje.',
    en: 'The sisters are here.',
    opts: ['su', 'je', 'ste', 'smo'],
    answer: 'su',
    tip: 'A plural noun takes the plural verb: sestra je, but sestre su. ste goes with vi and smo with mi.',
  },
  {
    mode: 'recenica',
    q: 'Ovo ____ studenti.',
    en: 'These are students.',
    opts: ['su', 'je', 'si', 'ste'],
    answer: 'su',
    tip: 'ovo does not change, but the verb does: Ovo je student, Ovo su studenti. je is for one, and si and ste are the forms for ti and vi.',
  },
  {
    mode: 'recenica',
    q: 'Gdje ____ profesori?',
    en: 'Where are the professors?',
    opts: ['su', 'je', 'si', 'sam'],
    answer: 'su',
    tip: 'profesori is plural, so the verb is su. je would ask about one professor, and si and sam belong to ti and ja.',
  },
  {
    mode: 'recenica',
    q: 'Djeca ____ tu.',
    en: 'The children are here.',
    opts: ['su', 'je', 'smo', 'si'],
    answer: 'su',
    tip: 'djeca ends in -a and looks singular, but it means several children, so the verb is plural: Djeca su tu. je is the trap here; smo and si are for mi and ti.',
  },
  {
    mode: 'recenica',
    q: 'To je čovjek. To su ____.',
    en: 'That is a person. Those are people.',
    opts: ['ljudi', 'čovjeci', 'čovjeki', 'čovjekovi'],
    answer: 'ljudi',
    tip: 'čovjek has a plural that is a different word: ljudi. No rule builds it, so čovjeci, čovjeki and čovjekovi do not exist; learn ljudi as a word.',
  },
  {
    mode: 'recenica',
    q: 'To je dijete. To su ____.',
    en: 'That is a child. Those are children.',
    opts: ['djeca', 'dijeta', 'dijeti', 'dijetovi'],
    answer: 'djeca',
    tip: 'The plural of dijete is the separate word djeca. The regular neuter and masculine endings (-a, -i, -ovi) do not work on this noun.',
  },
  {
    mode: 'recenica',
    q: 'To je brat. To su ____.',
    en: 'That is a brother. Those are brothers.',
    opts: ['braća', 'brati', 'bratovi', 'brate'],
    answer: 'braća',
    tip: 'brat is short, but it does not take -ovi: its plural is the word braća. brati, bratovi and brate apply regular endings this noun does not use.',
  },
  {
    mode: 'recenica',
    q: 'Ovo je oko. Ovo su ____.',
    en: 'This is an eye. These are eyes.',
    opts: ['oči', 'oka', 'oki', 'okovi'],
    answer: 'oči',
    tip: 'oko is neuter, but your two eyes are oči, a plural you learn as a word. oka follows the regular neuter rule, and oki and okovi use masculine endings.',
  },
  {
    mode: 'recenica',
    q: 'Ovo je uho. Ovo su ____.',
    en: 'This is an ear. These are ears.',
    opts: ['uši', 'uha', 'uhi', 'uhovi'],
    answer: 'uši',
    tip: 'Like oko → oči, uho has its own plural: uši. uha follows the regular neuter rule, and uhi and uhovi use masculine endings.',
  },
  {
    mode: 'recenica',
    q: 'Ljudi ____ ovdje.',
    en: 'The people are here.',
    opts: ['su', 'je', 'ste', 'sam'],
    answer: 'su',
    tip: 'ljudi is the plural of čovjek, so the verb is su: Čovjek je ovdje, Ljudi su ovdje. ste and sam go with vi and ja.',
  },
];
