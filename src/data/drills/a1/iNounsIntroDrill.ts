// src/data/drills/a1/iNounsIntroDrill.ts
//
// A1 FEMININE NOUNS WITHOUT -a — the drill for the `i-nouns-intro` lesson (new A1, 89).
//
// stvar, noć, ljubav, radost, riječ, sol, kost, večer: feminine, ending in a
// consonant. The subject and object forms are the bare noun; the genitive and the
// locative add -i. The describing word carries the case: laku noć, o toj stvari.
// The instrumental of ljubav is ljubavlju or ljubavi — both standard — so neither is
// ever offered as a wrong option, and večera (dinner) is never offered against večer.
// S ljubavlju is only RECOGNISED (the lesson does not teach the instrumental of this
// group), so it is asked as a meaning. The -ost rule is about ABSTRACT nouns: gost and
// most are masculine (2026-11-13).
// Items whose options are English carry no gloss: the gloss would answer them.
//
// Three modes:
//   rod     — the gender shows on the describing word
//   padez   — bare in subject and object, -i after bez, od, o, u
//   fraze   — the set phrases and the meanings

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const I_NOUNS_INTRO_MODE_LABELS: Record<string, string> = {
  rod: '♀️ Rod',
  padez: '🔤 Padež',
  fraze: '🌙 Izrazi i značenja',
};

export const I_NOUNS_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: '____ stvar je nova.',
    en: 'That thing is new.',
    opts: ['Ta', 'Taj', 'To', 'Te'],
    answer: 'Ta',
    tip: 'stvar is feminine.',
  },
  {
    mode: 'rod',
    q: 'Dobra ____!',
    en: 'Good evening!',
    opts: ['večer', 'večeri', 'večerom', 'večeru'],
    answer: 'večer',
    tip: 'A greeting is the subject form: the bare noun.',
  },
  {
    mode: 'rod',
    q: 'To je ____ ljubav.',
    en: 'That is a great love.',
    opts: ['velika', 'velik', 'veliko', 'veliki'],
    answer: 'velika',
    tip: 'ljubav is feminine, so the describing word ends in -a.',
  },
  {
    mode: 'rod',
    q: 'Ova ____ je jako stara.',
    en: 'This bone is very old.',
    opts: ['kost', 'kosti', 'kostu', 'kosta'],
    answer: 'kost',
    tip: 'The subject form is the bare noun.',
  },
  {
    mode: 'rod',
    q: 'Moja ____ je velika.',
    en: 'My joy is great.',
    opts: ['radost', 'radosti', 'radostu', 'radošću'],
    answer: 'radost',
    tip: 'The subject form is the bare noun.',
  },
  {
    mode: 'rod',
    q: 'Ova riječ je ____.',
    en: 'This word is new.',
    opts: ['nova', 'nov', 'novo', 'novi'],
    answer: 'nova',
    tip: 'riječ is feminine.',
  },
  {
    mode: 'rod',
    q: 'Ta stvar je ____.',
    en: 'That thing is expensive.',
    opts: ['skupa', 'skup', 'skupo', 'skupi'],
    answer: 'skupa',
    tip: 'stvar is feminine: -a on the describing word.',
  },
  {
    mode: 'rod',
    q: '____ mladost je bila lijepa.',
    en: 'My youth was beautiful.',
    opts: ['Moja', 'Moj', 'Moje', 'Moju'],
    answer: 'Moja',
    tip: 'mladost is an abstract noun made with -ost (mlad → mladost): feminine.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Juha je bez ____.',
    en: 'The soup is without salt.',
    opts: ['soli', 'sol', 'sole', 'solu'],
    answer: 'soli',
    tip: 'bez takes the genitive, and this group adds -i.',
  },
  {
    mode: 'padez',
    q: 'Pričamo o ____.',
    en: 'We are talking about love.',
    opts: ['ljubavi', 'ljubav', 'ljubavu', 'ljubave'],
    answer: 'ljubavi',
    tip: 'o takes the locative: -i.',
  },
  {
    mode: 'padez',
    q: 'Ne razumijem tu ____.',
    en: 'I do not understand that word.',
    opts: ['riječ', 'riječi', 'riječu', 'riječa'],
    answer: 'riječ',
    tip: 'The object form is the bare noun; only ta changes to tu.',
  },
  {
    mode: 'padez',
    q: 'U ____ je padala kiša.',
    en: 'It rained in the night.',
    opts: ['noći', 'noć', 'noću', 'noćom'],
    answer: 'noći',
    tip: 'u + the locative: -i.',
  },
  {
    mode: 'padez',
    q: 'Plakala je od ____.',
    en: 'She cried with joy.',
    opts: ['radosti', 'radost', 'radostu', 'radošću'],
    answer: 'radosti',
    tip: 'od takes the genitive: -i.',
  },
  {
    mode: 'padez',
    q: 'Kupujem tu ____.',
    en: 'I am buying that thing.',
    opts: ['stvar', 'stvari', 'stvaru', 'stvara'],
    answer: 'stvar',
    tip: 'The object form is the bare noun.',
  },
  {
    mode: 'padez',
    q: 'Pas jede ____.',
    en: 'The dog is eating a bone.',
    opts: ['kost', 'kostu', 'kosta', 'kostom'],
    answer: 'kost',
    tip: 'The object form is the bare noun.',
  },
  {
    mode: 'padez',
    q: 'Ova pjesma je o velikoj ____.',
    en: 'This song is about a great love.',
    opts: ['ljubavi', 'ljubav', 'ljubavu', 'ljubave'],
    answer: 'ljubavi',
    tip: 'o + the locative: velikoj and ljubavi.',
  },

  // ── fraze ─────────────────────────────────────────────────────────────────
  {
    mode: 'fraze',
    q: '____ noć!',
    en: 'Good night!',
    opts: ['Laku', 'Laka', 'Lako', 'Lakoj'],
    answer: 'Laku',
    tip: 'Good night is wished in the accusative: the describing word takes -u.',
  },
  {
    mode: 'fraze',
    q: 'Što znači "S ljubavlju, Ana" na kraju pisma?',
    opts: ['With love, Ana', 'Without love, Ana', 'About love, Ana', 'My love Ana'],
    answer: 'With love, Ana',
    tip: 's means "with"; S ljubavlju is a set phrase that closes a letter.',
  },
  {
    mode: 'fraze',
    q: 'U ____ sam puno putovao.',
    en: 'In my youth I travelled a lot.',
    opts: ['mladosti', 'mladost', 'mladostu', 'mladosta'],
    answer: 'mladosti',
    tip: 'u + the locative: -i.',
  },
  {
    mode: 'fraze',
    q: 'Imam puno ____ u torbi.',
    en: 'I have a lot of things in my bag.',
    opts: ['stvari', 'stvar', 'stvara', 'stvaru'],
    answer: 'stvari',
    tip: 'puno takes the genitive plural, which here ends in -i.',
  },
  {
    mode: 'fraze',
    q: 'Što znači "radost"?',
    opts: ['joy', 'sadness', 'youth', 'love'],
    answer: 'joy',
    tip: 'radost — joy; plakati od radosti, to cry with joy.',
  },
  {
    mode: 'fraze',
    q: 'Što znači "riječ"?',
    opts: ['word', 'thing', 'night', 'bone'],
    answer: 'word',
    tip: 'riječ — word: Ne znam tu riječ.',
  },
  {
    mode: 'fraze',
    q: 'Kojeg je roda imenica "noć"?',
    en: 'What gender is the noun for night?',
    opts: ['ženskog', 'muškog', 'srednjeg', 'nema roda'],
    answer: 'ženskog',
    tip: 'You can see it in dobra noć and laku noć.',
  },
  {
    mode: 'fraze',
    q: 'Apstraktne imenice na -ost (radost, mladost, starost) su ____ roda.',
    en: 'Abstract nouns made with -ost are of this gender.',
    opts: ['ženskog', 'muškog', 'srednjeg', 'svakog'],
    answer: 'ženskog',
    tip: 'radost, mladost, starost — all feminine. (gost and most are masculine: they are not built with -ost.)',
  },
];
