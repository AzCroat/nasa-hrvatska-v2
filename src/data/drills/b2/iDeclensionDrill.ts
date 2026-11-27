// src/data/drills/b2/iDeclensionDrill.ts
//
// B2 THE I-DECLENSION — the drill for the `i-declension` lesson (B2 position 28).
//
// Three modes (9 + 9 + 10 items):
//   padezi   — the endings: genitive, dative and locative in -i, the accusative equal
//              to the nominative, the plural in -i and -ima
//   rod      — these nouns are feminine: adjectives, pronouns and verbs agree with
//              them as with any feminine noun, and -ost marks the class
//   ju       — the second instrumental in -ju and its sound changes: ljubavlju,
//              mišlju, poviješću, smrću, glađu, krvlju, riječju, solju, noću
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 47 (IMENICE I-VRSTE: feminine nouns ending in
//   a consonant, named after the genitive in -i; -ost marks them; adjectives with them
//   are feminine: "Svatko ima pravo na život, slobodu i osobnu sigurnost", "zaštitu od
//   nezaposlenosti"), 48 (the most frequent i-nouns; the declension of ljubav; the
//   instrumental in -i and -ju with mladošću, krvlju, smrću, glađu, mišlju; the -i
//   ending is always possible, jesen and the nouns in -ad never take -ju), 49 (misao:
//   misli, mišlju), 50 (bol in two genders; momčad: "Igrali smo protiv izvrsne
//   momčadi", "Na turniru su igrale najbolje momčadi"), 201 ("Nije rekla ni riječi").
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 12–13 (the declension of
//   vrijednost; the two instrumentals: "Mnogi su festivali inspirirani poviješću",
//   "turističkom vrijednošću / turističkom vrijednosti"; a list of i-nouns).
//
// Where the books and the lesson differ:
//   - Both books and the lesson give two standard instrumentals, -i and -ju. The
//     grammar book adds that -i is preferred when an adjective stands with the noun.
//     So the -i form is never offered as a wrong answer in the ju mode; the wrong
//     options there are unmerged or masculine-style forms (ljubavju, smrtom).
//   - The textbook says jesen and the nouns in -ad never take -ju. Their -ju forms are
//     not offered at all, as right or as wrong.
//   - The textbook separates bol (masculine, pain of the body) from bol (feminine, pain
//     of the heart); the lesson says both genders are standard for both. No item asks
//     the learner to choose a gender for bol.
//   - Both books put kći (and the grammar book mati) in this class. Those two are a C1
//     lesson, so they are not in this drill.
//   - "Nije rekla ni riječi" is the textbook's genitive; the accusative riječ is also
//     standard after a negated verb, so it is not offered against it.
//   - Grammar-order fence: no participles used as adjectives, no passive, no
//     conditional, no verbal adverbs; no kći or mati (C1).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const I_DECLENSION_B2_MODE_LABELS: Record<string, string> = {
  padezi: '🗝️ Padeži: -i, -ima',
  rod: '👗 Ženski rod: duga noć',
  ju: '🔊 Instrumental na -ju',
};

export const I_DECLENSION_B2_DRILL_DATA: ModeDrillItem[] = [
  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'U juhi nema ____.',
    en: 'There is no salt in the soup.',
    opts: ['soli', 'sole', 'sola', 'solu'],
    answer: 'soli',
    tip: 'Nema takes the genitive, and the genitive of this class ends in -i: soli. Sole is the ending of the -a nouns (žena → žene). Sola and solu treat the word as masculine, which it is not.',
  },
  {
    mode: 'padezi',
    q: 'Cijelu ____ nisam spavao.',
    en: 'I did not sleep all night.',
    opts: ['noć', 'noću', 'noći', 'noća'],
    answer: 'noć',
    tip: 'The accusative of this class is the same as the nominative: cijelu noć. Only the adjective shows the case. Noću borrows the -u of the -a nouns (ženu). Noći is the genitive, dative or locative, and noća is a masculine-style ending.',
  },
  {
    mode: 'padezi',
    q: 'Zaboravila je kod nas sve svoje ____.',
    en: 'She left all her things at our place.',
    opts: ['stvari', 'stvare', 'stvarove', 'stvara'],
    answer: 'stvari',
    tip: 'The plural of this class ends in -i in the nominative, genitive and accusative: sve svoje stvari. Stvare is the plural of the -a nouns. Stvarove and stvara are masculine endings.',
  },
  {
    mode: 'padezi',
    q: 'O tim ____ ne razgovaramo za stolom.',
    en: 'We do not talk about those things at the table.',
    opts: ['stvarima', 'stvarama', 'stvarovima', 'stvarih'],
    answer: 'stvarima',
    tip: 'The dative, locative and instrumental plural end in -ima: o tim stvarima. Stvarama is the ending of the -a nouns (ženama). Stvarovima is a masculine plural, and stvarih is not a noun ending at all.',
  },
  {
    mode: 'padezi',
    q: 'Hvala ti na ____.',
    en: 'Thank you for your help.',
    opts: ['pomoći', 'pomoć', 'pomoću', 'pomoća'],
    answer: 'pomoći',
    tip: 'Hvala na takes the locative, and the locative ends in -i: na pomoći. Pomoć is the nominative and accusative. Pomoću is the instrumental (and the preposition "by means of"). Pomoća is a masculine-style ending.',
  },
  {
    mode: 'padezi',
    q: 'Od straha nije rekao ni ____.',
    en: 'He was so scared that he did not say a word.',
    opts: ['riječi', 'riječa', 'riječe', 'riječu'],
    answer: 'riječi',
    tip: 'The genitive after a negated verb with ni ends in -i: ni riječi. Riječa is a masculine genitive. Riječe is the genitive of the -a nouns, and riječu is their accusative.',
  },
  {
    mode: 'padezi',
    q: 'Svatko ima pravo na zaštitu od ____.',
    en: 'Everyone has the right to protection from unemployment.',
    opts: ['nezaposlenosti', 'nezaposlenoste', 'nezaposlenosta', 'nezaposlenost'],
    answer: 'nezaposlenosti',
    tip: 'Od takes the genitive, and every noun in -ost has the genitive in -i: od nezaposlenosti. Nezaposlenoste has the ending of the -a nouns, and nezaposlenosta a masculine one. Nezaposlenost is the nominative and accusative.',
  },
  {
    mode: 'padezi',
    q: 'Ne mogu se sjetiti ni jedne pametne ____.',
    en: 'I cannot think of a single clever thought.',
    opts: ['misli', 'misao', 'misla', 'misle'],
    answer: 'misli',
    tip: 'Sjetiti se takes the genitive. The o of misao is an old l, and it comes back in every other case: misao → misli. Misao is the nominative and accusative. Misla copies posao → posla, a masculine noun. Misle is the ending of the -a nouns.',
  },
  {
    mode: 'padezi',
    q: 'U nesreći je izgubio mnogo ____.',
    en: 'He lost a lot of blood in the accident.',
    opts: ['krvi', 'krve', 'krva', 'krvu'],
    answer: 'krvi',
    tip: 'Mnogo takes the genitive: mnogo krvi. Krve is the genitive of the -a nouns. Krva is a masculine genitive, and krvu is the accusative of the -a nouns.',
  },

  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Bila je to ____ noć.',
    en: 'It was a long night.',
    opts: ['duga', 'dugi', 'dugo', 'dugu'],
    answer: 'duga',
    tip: 'Noć ends in a consonant but is feminine, so the adjective is feminine: duga noć. Dugi is masculine, the trap the consonant sets. Dugo is neuter. Dugu is the accusative, but after bila je to the noun is in the nominative.',
  },
  {
    mode: 'rod',
    q: 'Svatko ima pravo na život, slobodu i ____ sigurnost.',
    en: 'Everyone has the right to life, liberty and personal security.',
    opts: ['osobnu', 'osobni', 'osobnog', 'osobna'],
    answer: 'osobnu',
    tip: 'Pravo na takes the accusative. The noun does not change (sigurnost), but the adjective takes the feminine accusative -u: osobnu sigurnost. Osobni and osobnog are masculine forms. Osobna is the nominative.',
  },
  {
    mode: 'rod',
    q: 'Zdravlje je ____ stvar na svijetu.',
    en: 'Health is the most important thing in the world.',
    opts: ['najvažnija', 'najvažniji', 'najvažnije', 'najvažniju'],
    answer: 'najvažnija',
    tip: 'The adjective agrees with stvar, which is feminine: najvažnija stvar. Najvažniji is masculine. Najvažnije would agree with the neuter zdravlje, but the adjective stands with stvar. Najvažniju is the accusative.',
  },
  {
    mode: 'rod',
    q: 'Koja je od ovih imenica ženskog roda?',
    opts: ['radost', 'most', 'gost', 'post'],
    answer: 'radost',
    tip: 'Radost is built from the adjective rad with the suffix -ost, and every such noun is a feminine i-noun: velika radost. In most, gost and post the letters -ost are part of the root, and all three are masculine: stari most, dragi gost, dugi post.',
  },
  {
    mode: 'rod',
    q: 'U ____ mladosti živio je u Rijeci.',
    en: 'In his early youth he lived in Rijeka.',
    opts: ['ranoj', 'ranom', 'ranu', 'rana'],
    answer: 'ranoj',
    tip: 'U + the locative, and mladost is feminine: u ranoj mladosti. Ranom is the masculine and neuter locative. Ranu is the accusative and rana the nominative.',
  },
  {
    mode: 'rod',
    q: 'Na turniru su igrale ____ momčadi.',
    en: 'The best teams played at the tournament.',
    opts: ['najbolje', 'najbolji', 'najbolja', 'najboljih'],
    answer: 'najbolje',
    tip: 'Momčadi is a feminine plural here (igrale shows it), so the adjective is najbolje. Najbolji is the masculine plural. Najbolja is the feminine singular. Najboljih is the genitive plural, but this is the subject.',
  },
  {
    mode: 'rod',
    q: 'Ljubav prema moru ____ ga je u Dalmaciju.',
    en: 'Love of the sea brought him to Dalmatia.',
    opts: ['dovela', 'doveo', 'dovelo', 'doveli'],
    answer: 'dovela',
    tip: 'The subject is ljubav, a feminine noun, so the verb in the past is feminine: ljubav je dovela. Doveo is masculine and dovelo neuter (it would agree with more, which is not the subject). Doveli is plural.',
  },
  {
    mode: 'rod',
    q: 'Ta mogućnost postoji, ali ____ nitko ne spominje.',
    en: 'That possibility exists, but nobody mentions it.',
    opts: ['je', 'ga', 'ih', 'mu'],
    answer: 'je',
    tip: 'Mogućnost is feminine, so "it" as an object is the feminine je. Ga is masculine or neuter. Ih is plural. Mu is the dative "to him", and spominjati takes the accusative.',
  },
  {
    mode: 'rod',
    q: 'Nema ____ stvari od zdravlja.',
    en: 'There is nothing more important than health.',
    opts: ['važnije', 'važnijeg', 'važniji', 'važnija'],
    answer: 'važnije',
    tip: 'Nema takes the genitive. Stvari is the genitive singular of a feminine noun, so the adjective is the feminine genitive važnije. Važnijeg is the masculine and neuter genitive. Važniji and važnija are nominatives.',
  },

  // ── ju ────────────────────────────────────────────────────────────────────
  {
    mode: 'ju',
    q: 'Kolače peče s velikom ____.',
    en: 'She bakes cakes with great love.',
    opts: ['ljubavlju', 'ljubavju', 'ljubavom', 'ljubavu'],
    answer: 'ljubavlju',
    tip: 'The second instrumental ending is -ju, and v + j gives vlj: ljubav → ljubavlju. Ljubavju leaves the j unmerged. Ljubavom is a masculine instrumental. Ljubavu is the accusative of the -a nouns.',
  },
  {
    mode: 'ju',
    q: 'On se cijeli život bavi ____.',
    en: 'He has worked on history all his life.',
    opts: ['poviješću', 'povijestju', 'povijestom', 'povijestu'],
    answer: 'poviješću',
    tip: 'Baviti se takes the instrumental. With -ju, st + j gives šć: povijest → poviješću. Povijestju leaves the j unmerged. Povijestom is a masculine ending, and povijestu is the accusative of the -a nouns.',
  },
  {
    mode: 'ju',
    q: 'S tom ____ otišao je na spavanje.',
    en: 'He went to bed with that thought.',
    opts: ['mišlju', 'misaom', 'mislju', 'misaoju'],
    answer: 'mišlju',
    tip: 'Misao has the stem misl-, and sl + j gives šlj: mišlju. Misaom and misaoju keep the o, which exists only in the nominative and accusative; misaom also has a masculine ending. Mislju leaves out the change of s to š.',
  },
  {
    mode: 'ju',
    q: 'Njegovom ____ završilo je jedno doba.',
    en: 'An era ended with his death.',
    opts: ['smrću', 'smrtju', 'smrtom', 'smrćom'],
    answer: 'smrću',
    tip: 'With -ju, t + j gives ć: smrt → smrću. Smrtju leaves the j unmerged. Smrtom is a masculine instrumental, and smrćom mixes the sound change with that masculine ending.',
  },
  {
    mode: 'ju',
    q: 'Ti se ljudi svaki dan bore s ____ i neimaštinom.',
    en: 'Those people struggle with hunger and poverty every day.',
    opts: ['glađu', 'gladju', 'gladom', 'glađom'],
    answer: 'glađu',
    tip: 'With -ju, d + j gives đ: glad → glađu. Gladju leaves the j unmerged. Gladom is a masculine instrumental, and glađom mixes the sound change with that masculine ending.',
  },
  {
    mode: 'ju',
    q: 'Sve je to platio znojem i ____.',
    en: 'He paid for all of it with sweat and blood.',
    opts: ['krvlju', 'krvju', 'krvom', 'krvu'],
    answer: 'krvlju',
    tip: 'With -ju, v + j gives vlj: krv → krvlju. Krvju leaves the j unmerged. Krvom copies the masculine znojem next to it, but krv is feminine. Krvu is the accusative of the -a nouns.',
  },
  {
    mode: 'ju',
    q: 'Poziv smo prihvatili s ____.',
    en: 'We gladly accepted the invitation.',
    opts: ['radošću', 'radostju', 'radostom', 'radošćom'],
    answer: 'radošću',
    tip: 'Every noun in -ost can take -ju, and st + j gives šć: radost → radošću. Radostju leaves the j unmerged. Radostom is a masculine instrumental, and radošćom mixes the sound change with that masculine ending.',
  },
  {
    mode: 'ju',
    q: 'Jednom ____: ne dolazim.',
    en: 'In a word: I am not coming.',
    opts: ['riječju', 'riječom', 'riječem', 'riječu'],
    answer: 'riječju',
    tip: 'After č nothing can merge, so -ju simply attaches: riječ → riječju. The fixed phrase is jednom riječju. Riječom and riječem are masculine instrumentals. Riječu is the accusative of the -a nouns.',
  },
  {
    mode: 'ju',
    q: 'Meso je natrljao ____ i paprom.',
    en: 'He rubbed the meat with salt and pepper.',
    opts: ['solju', 'solom', 'solem', 'solu'],
    answer: 'solju',
    tip: 'Here nothing changes and -ju simply attaches: sol → solju. Solom and solem are masculine instrumentals, copied from paprom, but sol is feminine. Solu is not an instrumental at all.',
  },
  {
    mode: 'ju',
    lead: 'Noću ne vozim.',
    q: 'Što u ovoj rečenici znači prva riječ?',
    opts: ['at night', 'the night (as an object)', 'of the night', 'nights (plural)'],
    answer: 'at night',
    tip: 'Noć + -ju gives noću, an instrumental that is used as the adverb "at night". As an object the word does not change (Volim noć). "Of the night" is the genitive noći, and the plural is also noći.',
  },
];
