// src/data/drills/b1/comparativesA2Drill.ts
//
// B1 COMPARISON OF ADJECTIVES — the drill for the `comparatives-a2` lesson
// (B1 position 1).
//
// Three modes, nine items each:
//   oblik    — building the comparative: -iji, -ji with its sound change, -ši, and the
//              irregular ones
//   odnego   — "than": od + genitive, nego + nominative, nego before a phrase or a clause
//   slaganje — the comparative and the superlative agree and decline like any adjective;
//              naj- + comparative
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook, lesson 6 "Odnosi, izgled, budućnost" — 96 (the
//   dialogue "Tko je bolji?": "Alen je zgodniji i društveniji od Marina", "Marin je bio
//   bolji student"), 97 (KOMPARATIV NA -IJI: marljiviji, pouzdaniji, stariji automobil /
//   starija knjiga / starije selo, "Marin je simpatičniji nego Alen. nego + NOMINATIV",
//   "Marin je simpatičniji od Alena. od + GENITIV"), 98 (the comparative in -ji with its
//   sound changes: drag – draži, mlad – mlađi, kratak – kraći, visok – viši; the
//   comparative in -ši, "samo tri pridjeva": lak, mek, lijep), 99 (the irregular
//   comparatives dobar – bolji, zao – gori, velik – veći, malen – manji, dug – dulji; ije
//   in the stem becomes je; SUPERLATIV: naj + komparativ; DEKLINACIJA KOMPARATIVA I
//   SUPERLATIVA: najbolji student, najboljem studentu, najboljeg studenta), 104 (the five
//   friends: "inteligentnija od drugih", "najbolja studentica od svih").
//
// Where the book and the lesson differ:
//   - The lesson says "a smaller group" takes -ši. The book says only three adjectives
//     do: lak, mek and lijep. The drill follows the book.
//   - The book gives zao – gori; the lesson adds loš – gori and says lošiji is standard
//     too. The book gives dug – dulji; the lesson says duži is standard too. So gori is
//     never set against lošiji, and dulji never against duži.
//   - The lesson says nego keeps the case of the first noun; the book says nego +
//     nominative. Both come to the same thing in the sentences used here. Od and nego
//     are never offered against each other where both could stand: in every item the
//     form of the next word (Alena or Alen, a phrase, a clause) leaves only one.
//   - Crnji, ljenji and bjelji have competing forms in use, so they are not tested.
//   - Grammar-order fence: this is the first B1 lesson. No comparative of adverbs (two
//     lessons later), no futur II, no relative clauses beyond the book's own example.
//     The superlative is drilled only as naj- + a comparative from these pages, as the
//     book and the lesson both teach it here.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMPARATIVES_A2_MODE_LABELS: Record<string, string> = {
  oblik: '📐 Oblik komparativa',
  odnego: '⚖️ Od ili nego',
  slaganje: '🧩 Slaganje i naj-',
};

export const COMPARATIVES_A2_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Marin je marljiv, ali je Igor još ____.',
    en: 'Marin is hardworking, but Igor is even more hardworking.',
    opts: ['marljiviji', 'marljivši', 'marljivji', 'više marljiv'],
    answer: 'marljiviji',
    tip: 'Most adjectives add -iji to the stem: marljiv → marljiviji. The ending -ši belongs to only three adjectives (lak, mek, lijep), and marljivji is not a form. Više marljiv copies English "more"; Croatian changes the adjective itself.',
  },
  {
    mode: 'oblik',
    q: 'Klari je Marin drag, ali Alen joj je ____.',
    en: 'Klara is fond of Marin, but Alen is dearer to her.',
    opts: ['draži', 'dragiji', 'dragši', 'više drag'],
    answer: 'draži',
    tip: 'Drag takes -ji, and g softens to ž before it: draži. Dragiji uses the wrong ending, dragši borrows -ši, which only lak, mek and lijep take, and više drag is the English pattern.',
  },
  {
    mode: 'oblik',
    q: 'Ovaj je put kratak, a onaj preko šume još je ____.',
    en: 'This road is short, and the one through the forest is even shorter.',
    opts: ['kraći', 'kratkiji', 'kratči', 'kraćiji'],
    answer: 'kraći',
    tip: 'Adjectives in -ak drop that ending and then take -ji, and t softens to ć: kratak → kraći. Kratkiji keeps -ak and adds -iji, kratči has the wrong sound change, and kraćiji adds a second ending to a finished comparative.',
  },
  {
    mode: 'oblik',
    q: 'Tko je ____, Marin ili Alen?',
    en: 'Who is better-looking, Marin or Alen?',
    opts: ['ljepši', 'lijepši', 'ljepiji', 'lijepiji'],
    answer: 'ljepši',
    tip: 'Lijep is one of the three adjectives with -ši, and ije in the stem shortens to je: ljepši. Lijepši keeps the long ije. Ljepiji and lijepiji use -iji, which lijep does not take.',
  },
  {
    mode: 'oblik',
    q: 'Marin je bio dobar student, ali je Anita bila još ____.',
    en: 'Marin was a good student, but Anita was an even better one.',
    opts: ['bolja', 'dobrija', 'dobrja', 'više dobra'],
    answer: 'bolja',
    tip: 'Dobar is irregular: bolji, bolja, bolje. Dobrija and dobrja build a regular comparative that does not exist, and više dobra is the English pattern.',
  },
  {
    mode: 'oblik',
    q: 'Moj stan je malen, a tvoj je još ____.',
    en: 'My apartment is small, and yours is even smaller.',
    opts: ['manji', 'maleniji', 'malji', 'više malen'],
    answer: 'manji',
    tip: 'Malen is irregular: manji. Maleniji and malji treat it as a regular adjective, and više malen copies English "more".',
  },
  {
    mode: 'oblik',
    q: 'Koji pridjev tvori komparativ nastavkom -ši?',
    en: 'Which adjective forms its comparative with the ending -ši?',
    opts: ['lak', 'jak', 'mlad', 'star'],
    answer: 'lak',
    tip: 'Only three adjectives take -ši: lak → lakši, mek → mekši, lijep → ljepši. Jak and mlad take -ji with a sound change (jači, mlađi), and star takes -iji (stariji).',
  },
  {
    mode: 'oblik',
    q: 'Sava je duga rijeka, ali je Dunav još ____.',
    en: 'The Sava is a long river, but the Danube is even longer.',
    opts: ['dulji', 'dugiji', 'dugši', 'više dug'],
    answer: 'dulji',
    tip: 'Dug is irregular: dulji. Dugiji and dugši add regular endings to a stem that does not take them, and više dug is the English pattern.',
  },
  {
    mode: 'oblik',
    q: 'Brat je visok, ali je sestra još ____.',
    en: 'The brother is tall, but the sister is even taller.',
    opts: ['viša', 'visokija', 'visočija', 'višija'],
    answer: 'viša',
    tip: 'Adjectives in -ok drop that ending and take -ji: visok → viši, viša. Visokija keeps -ok, visočija softens k and still keeps it, and višija adds a second ending to a finished comparative.',
  },

  // ── odnego ────────────────────────────────────────────────────────────────
  {
    mode: 'odnego',
    q: 'Marin je simpatičniji ____ Alena.',
    en: 'Marin is nicer than Alen.',
    opts: ['od', 'nego', 'kao', 'iz'],
    answer: 'od',
    tip: 'Alena is a genitive, and "than" before a genitive is od: od + GENITIV. Nego would need the nominative Alen. Kao is for "as… as", not for "than", and iz means "out of".',
  },
  {
    mode: 'odnego',
    q: 'Igor je stariji nego ____.',
    en: 'Igor is older than I am.',
    opts: ['ja', 'mene', 'meni', 'mnom'],
    answer: 'ja',
    tip: 'Nego is followed by the nominative, the same case as Igor: nego ja. Mene is the genitive and goes with od (stariji od mene). Meni is the dative and mnom the instrumental.',
  },
  {
    mode: 'odnego',
    q: 'Tanja je mlađa od ____.',
    en: 'Tanja is younger than her brother.',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'brata',
    tip: 'Od takes the genitive: od brata. Brat is the nominative, which follows nego, not od. Bratu is the dative and bratom the instrumental.',
  },
  {
    mode: 'odnego',
    q: 'Anita je inteligentnija ____.',
    en: 'Anita is more intelligent than all the students.',
    opts: ['od svih studenata', 'nego svih studenata', 'od svi studenti', 'kao svi studenti'],
    answer: 'od svih studenata',
    tip: 'Od + the genitive: od svih studenata. Nego cannot be followed by a genitive, and od cannot be followed by the nominative svi studenti. Kao means "as", so it does not say "than".',
  },
  {
    mode: 'odnego',
    q: 'U Zagrebu su stanovi skuplji ____ u Osijeku.',
    en: 'Apartments are more expensive in Zagreb than in Osijek.',
    opts: ['nego', 'od', 'kao', 'što'],
    answer: 'nego',
    tip: 'Before a phrase with a preposition (u Osijeku) only nego works. Od must be followed directly by a noun or pronoun in the genitive. Kao is for equality, and što alone does not mean "than".',
  },
  {
    mode: 'odnego',
    q: 'Film je bolji ____ sam očekivala.',
    en: 'The movie is better than I expected.',
    opts: ['nego što', 'od', 'kao', 'od što'],
    answer: 'nego što',
    tip: 'Before a whole clause with a verb, "than" is nego što. Od takes a genitive noun, not a clause, and od što is not a phrase. Kao would say "as good as".',
  },
  {
    mode: 'odnego',
    q: 'Koja je rečenica pravilna?',
    en: 'Which sentence is correct?',
    opts: [
      'Alen je zgodniji od Marina.',
      'Alen je zgodniji od Marin.',
      'Alen je zgodniji nego Marina.',
      'Alen je više zgodan od Marina.',
    ],
    answer: 'Alen je zgodniji od Marina.',
    tip: 'Od + genitive: od Marina. Od Marin leaves the name in the nominative, and nego Marina puts a genitive after nego, which takes the nominative. Više zgodan builds "more" with a separate word; the adjective itself changes: zgodniji.',
  },
  {
    mode: 'odnego',
    q: 'Moja sestra je viša od ____.',
    en: 'My sister is taller than I am.',
    opts: ['mene', 'ja', 'meni', 'me'],
    answer: 'mene',
    tip: 'Od takes the genitive, and after a preposition the long form is used: od mene. Ja is the nominative and goes with nego. Meni is the dative, and the short form me cannot follow a preposition.',
  },
  {
    mode: 'odnego',
    q: 'Kuće su skuplje ____ stanovi.',
    en: 'Houses are more expensive than apartments.',
    opts: ['nego', 'od', 'kao', 'a'],
    answer: 'nego',
    tip: 'Stanovi is a nominative, so the word is nego: nego + NOMINATIV. Od would need the genitive stanova. Kao is for "as… as", and a only sets two statements side by side.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Ovo je ____ knjiga od one na polici.',
    en: 'This is an older book than the one on the shelf.',
    opts: ['starija', 'stariji', 'starije', 'stariju'],
    answer: 'starija',
    tip: 'A comparative agrees with its noun like any adjective: knjiga is feminine singular, so starija. Stariji is masculine (stariji automobil) and starije is neuter (starije selo). Stariju is the accusative, but the noun here is in the nominative.',
  },
  {
    mode: 'slaganje',
    q: 'Naše selo je ____ od vašega.',
    en: 'Our village is prettier than yours.',
    opts: ['ljepše', 'ljepši', 'ljepša', 'ljepšu'],
    answer: 'ljepše',
    tip: 'Selo is neuter singular, so the comparative is ljepše. Ljepši is masculine (ljepši park) and ljepša is feminine (ljepša kuća). Ljepšu is a feminine accusative.',
  },
  {
    mode: 'slaganje',
    q: 'Ove torte su ____ od onih kolača.',
    en: 'These cakes are sweeter than those pastries.',
    opts: ['slađe', 'slađi', 'slađa', 'slađu'],
    answer: 'slađe',
    tip: 'Torte is feminine plural, so slađe. Slađi is masculine (slađi kolači), slađa is the feminine singular (slađa torta), and slađu is a feminine accusative singular.',
  },
  {
    mode: 'slaganje',
    q: 'Ti si ____ djevojka koju znam.',
    en: 'You are the nicest girl I know.',
    opts: ['najsimpatičnija', 'najsimpatična', 'simpatičnija', 'najsimpatičniji'],
    answer: 'najsimpatičnija',
    tip: 'The superlative is naj- + the comparative, and it agrees with djevojka: najsimpatičnija. Najsimpatična puts naj- on the plain adjective. Simpatičnija is only "nicer", and najsimpatičniji is masculine.',
  },
  {
    mode: 'slaganje',
    q: 'Dali smo izvrsnu ocjenu ____ studentu.',
    en: 'We gave an excellent grade to the best student.',
    opts: ['najboljem', 'najboljeg', 'najbolji', 'najboljim'],
    answer: 'najboljem',
    tip: 'A superlative declines like any adjective. Studentu is a dative, so najboljem. Najboljeg is the genitive and accusative (Čekam najboljeg studenta), najbolji is the nominative, and najboljim is the instrumental.',
  },
  {
    mode: 'slaganje',
    q: 'Tražimo ____ stan od ovoga.',
    en: 'We are looking for a bigger apartment than this one.',
    opts: ['veći', 'većeg', 'većem', 'veća'],
    answer: 'veći',
    tip: 'Stan is the object, and for a masculine thing the accusative looks like the nominative: veći stan. Većeg is the accusative for a person or an animal (većeg psa). Većem is the dative or locative, and veća is feminine.',
  },
  {
    mode: 'slaganje',
    q: 'Imam ____ brata i mlađu sestru.',
    en: 'I have an older brother and a younger sister.',
    opts: ['starijeg', 'stariji', 'starijem', 'stariju'],
    answer: 'starijeg',
    tip: 'Brata is the accusative of a person, so the comparative takes -eg: starijeg brata. Stariji is the nominative, starijem is the dative or locative, and stariju is feminine (stariju sestru).',
  },
  {
    mode: 'slaganje',
    q: 'Razgovaramo o ____ studentici na fakultetu.',
    en: 'We are talking about the best student in the department.',
    opts: ['najboljoj', 'najbolju', 'najbolja', 'najboljom'],
    answer: 'najboljoj',
    tip: 'O takes the locative, and studentici is feminine: o najboljoj studentici. Najbolju is the accusative, najbolja the nominative and najboljom the instrumental.',
  },
  {
    mode: 'slaganje',
    q: 'Kako se tvori superlativ?',
    en: 'How is the superlative formed?',
    opts: [
      'naj + komparativ: najveći',
      'naj + pozitiv: najvelik',
      'više + pozitiv: više velik',
      'komparativ + -ši: većiši',
    ],
    answer: 'naj + komparativ: najveći',
    tip: 'The superlative is naj- in front of the comparative: veći → najveći, bolji → najbolji. Naj- never goes on the plain adjective (najvelik), više velik is the English pattern, and a comparative takes no second ending.',
  },
];
