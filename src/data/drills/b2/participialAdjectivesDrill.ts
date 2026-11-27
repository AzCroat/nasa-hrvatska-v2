// src/data/drills/b2/participialAdjectivesDrill.ts
//
// B2 PARTICIPIAL ADJECTIVES — the drill for the `participial-adjectives` lesson
// (B2 position 32).
//
// Three modes (10 + 9 + 9 items):
//   tvorba   — building the glagolski pridjev trpni: -n, -en and -jen with the
//              softened consonant, -nut, -t, and the -sti verbs (ukraden)
//   slaganje — it agrees like any adjective in gender, number and case
//   upotreba — what it says and where it can stand: odvezen against odveden, položen
//              against polagan, rođena against rodila, adjective or part of the verb
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 126 (the trpni pridjev as an ordinary adjective
//   or in the passive: "Održani su festivali postigli veliku popularnost", "Festival je
//   održan u Zagrebu"; made only from verbs that take an accusative object; the endings
//   -n, -en), 127 (-jen and the softening: voziti → vožen, probuditi → probuđen,
//   častiti → čašćen, kupiti → kupljen; odnesen, pokrenut, ukraden), 128 (odvezen by
//   car against odveden on foot), 123 ("Položena viša razina obveznog ispita…"), 177
//   ("Motovun film festival koji je pokrenut 1997. godine").
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 144–145 (the same rule and the
//   table of endings), 146–147 (the practice sentences: "Odluka je donesena", "Ispit
//   je puno puta polagan, a sad je konačno položen", "Bicikl je star, ali malo vožen",
//   "Stan je upravo očišćen", "Ozlijeđenom pješaku odmah je pružena prva pomoć", "Sve
//   je bilo napisano rukom", "Ulice su obasjane suncem", "Nikad ne jedem prženo meso",
//   "Jutros sam skoro obukla zgužvanu košulju", "Ove su hlače kupljene u Trstu"), 148
//   (the headline "Izgubljeno dijete cijelu noć grijao pas").
//
// Where the books and the lesson differ:
//   - The lesson gives three endings and a small -t group. The books give a longer
//     table: -sen (odnesen), -den (ukraden), -zen and -den for the two verbs odvesti,
//     -ven (dobiven), -jen (razvijen). The drill follows the books for donesen, ukraden
//     and odvezen / odveden.
//   - Dobiven and razvijen have second forms in use (dobit, razvit), so neither verb
//     is in the drill. Donijet is likewise never offered against donesen.
//   - The books say the participle is made only from verbs with an accusative object.
//     The lesson does not say so. One item follows the books.
//   - The -t group (uzet, poznat) is in the lesson only; the books do not list it. Two
//     items follow the lesson.
//   - The books make the learner type the form from an infinitive in brackets. Here
//     the English line gives the verb and the options are all built on the same stem,
//     so the question never shows the form it asks for.
//   - Grammar-order fence: no se-passive, no agent with od, no future passive, no
//     verbal nouns in -nje, no conditional, no verbal adverbs.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PARTICIPIAL_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  tvorba: '🛠️ Tvorba: plaćen, pokrenut',
  slaganje: '🤝 Slaganje: prženo meso',
  upotreba: '🔍 Odvezen ili odveden?',
};

export const PARTICIPIAL_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Račun je već ____.',
    en: 'The bill has already been paid.',
    opts: ['plaćen', 'platen', 'platjen', 'platnut'],
    answer: 'plaćen',
    tip: 'Verbs in -iti take -jen, and t + j merges into ć: platiti → plaćen. Platen leaves out the softening. Platjen leaves the j unmerged. Platnut uses -nut, which belongs only to verbs in -nuti.',
  },
  {
    mode: 'tvorba',
    q: 'Ključ je ____ ispod stola.',
    en: 'The key was found under the table.',
    opts: ['pronađen', 'pronaćen', 'pronajden', 'pronašen'],
    answer: 'pronađen',
    tip: 'Naći and its compounds have đ in the participle: naći → nađen, pronaći → pronađen. Pronaćen keeps the ć of the infinitive. Pronajden leaves the sounds unmerged. Pronašen is built on the past form pronašao.',
  },
  {
    mode: 'tvorba',
    q: 'Odluka je ____ jučer.',
    en: 'The decision was made yesterday.',
    opts: ['donesena', 'donešena', 'donijena', 'donesta'],
    answer: 'donesena',
    tip: 'Donijeti and odnijeti build the participle on the present stem with -sen: donesem → donesen, donesena. Donešena softens an s that has no reason to change. Donijena and donesta are not forms of this verb.',
  },
  {
    mode: 'tvorba',
    q: 'Festival u Motovunu ____ je 1997. godine.',
    en: 'The festival in Motovun was launched in 1997.',
    opts: ['pokrenut', 'pokrenjen', 'pokrenen', 'pokrenuven'],
    answer: 'pokrenut',
    tip: 'Verbs in -nuti take -nut: pokrenuti → pokrenut. Pokrenjen and pokrenen force the -jen and -en of the -iti verbs onto it. Pokrenuven uses -ven, which belongs to a few short verbs only.',
  },
  {
    mode: 'tvorba',
    q: 'Bicikl mu je ____ ispred zgrade.',
    en: 'His bike was stolen in front of the building.',
    opts: ['ukraden', 'ukrađen', 'ukrasten', 'ukrasnut'],
    answer: 'ukraden',
    tip: 'Ukrasti has the stem ukrad- (ukradem) and takes plain -en: ukraden. Ukrađen softens the d, which happens only before -jen in -iti verbs. Ukrasten is built on the infinitive. Ukrasnut uses the ending of -nuti verbs.',
  },
  {
    mode: 'tvorba',
    q: 'Ove su hlače ____ u Trstu.',
    en: 'These pants were bought in Trieste.',
    opts: ['kupljene', 'kupjene', 'kupene', 'kupnute'],
    answer: 'kupljene',
    tip: 'After a lip consonant (p, b, v, m) an l appears before -jen: kupiti → kupljen. Kupjene leaves the j unmerged. Kupene leaves out the softening. Kupnute uses the ending of -nuti verbs.',
  },
  {
    mode: 'tvorba',
    q: 'Sir je ____ na tanke kriške.',
    en: 'The cheese has been cut into thin slices.',
    opts: ['narezan', 'narežen', 'narezen', 'nareznut'],
    answer: 'narezan',
    tip: 'Verbs in -ati take -n on the infinitive stem: narezati → narezan. Narežen copies the present nareže. Narezen uses the -en of other verb groups. Nareznut uses the ending of -nuti verbs.',
  },
  {
    mode: 'tvorba',
    q: 'Bicikl je star, ali malo ____.',
    en: 'The bike is old but has hardly been ridden.',
    opts: ['vožen', 'vozen', 'vozjen', 'voznut'],
    answer: 'vožen',
    tip: 'Before -jen, z + j merges into ž: voziti → vožen. Vozen leaves out the softening. Vozjen leaves the j unmerged. Voznut uses the ending of -nuti verbs.',
  },
  {
    mode: 'tvorba',
    q: 'Stan je upravo ____.',
    en: 'The apartment has just been cleaned.',
    opts: ['očišćen', 'očisten', 'očistjen', 'očistan'],
    answer: 'očišćen',
    tip: 'Before -jen, st + j merges into šć: očistiti → očišćen (as in častiti → čašćen). Očisten leaves out the softening. Očistjen leaves the j unmerged. Očistan uses the -n of the -ati verbs.',
  },
  {
    mode: 'tvorba',
    q: 'Sva su mjesta u prvom redu već ____.',
    en: 'All the seats in the front row are already taken.',
    opts: ['uzeta', 'uzena', 'uzeljena', 'uzmena'],
    answer: 'uzeta',
    tip: 'A small group takes -t: uzeti → uzet, početi → počet. Mjesta is a neuter plural, so uzeta. Uzena and uzeljena force -en and -jen onto the verb. Uzmena is built on the present uzmem.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Nikad ne jedem ____ meso.',
    en: 'I never eat fried meat.',
    opts: ['prženo', 'pržen', 'pržena', 'prženog'],
    answer: 'prženo',
    tip: 'The participle agrees like any adjective. Meso is neuter and stands in the accusative, which for a neuter noun equals the nominative: prženo meso. Pržen is masculine and pržena feminine. Prženog is a genitive and does not go with the form meso.',
  },
  {
    mode: 'slaganje',
    q: 'Jutros sam skoro obukla ____ košulju.',
    en: 'This morning I almost put on a wrinkled shirt.',
    opts: ['zgužvanu', 'zgužvana', 'zgužvan', 'zgužvanoj'],
    answer: 'zgužvanu',
    tip: 'Košulju is a feminine accusative, so the participle is too: zgužvanu košulju. Zgužvana is the nominative. Zgužvan is masculine. Zgužvanoj is the dative or locative.',
  },
  {
    mode: 'slaganje',
    q: 'Čekali smo pred ____ vratima.',
    en: 'We waited in front of the closed door.',
    opts: ['zatvorenim', 'zatvorenom', 'zatvorena', 'zatvorenih'],
    answer: 'zatvorenim',
    tip: 'Vrata is a plural noun, and pred for a place takes the instrumental: pred zatvorenim vratima. Zatvorenom is a singular form. Zatvorena is the nominative. Zatvorenih is the genitive.',
  },
  {
    mode: 'slaganje',
    q: 'Ulice su ____ suncem.',
    en: 'The streets are bathed in sunlight.',
    opts: ['obasjane', 'obasjani', 'obasjana', 'obasjano'],
    answer: 'obasjane',
    tip: 'Ulice is a feminine plural, so the participle ends in -e: obasjane. Obasjani is the masculine plural. Obasjana is the feminine singular or the neuter plural. Obasjano is the neuter singular.',
  },
  {
    mode: 'slaganje',
    q: '____ festivali postigli su veliku popularnost.',
    en: 'The festivals that were held became very popular.',
    opts: ['Održani', 'Održane', 'Održana', 'Održan'],
    answer: 'Održani',
    tip: 'Before a noun the participle is an ordinary adjective. Festivali is a masculine plural: održani festivali. Održane is the feminine plural. Održana is the feminine singular or the neuter plural. Održan is the masculine singular.',
  },
  {
    mode: 'slaganje',
    q: 'Prozori su jučer ____.',
    en: 'The windows were washed yesterday.',
    opts: ['oprani', 'oprane', 'oprana', 'opran'],
    answer: 'oprani',
    tip: 'Prozori is a masculine plural, so the participle ends in -i: oprani. Oprane is the feminine plural. Oprana is the feminine singular or the neuter plural. Opran is the masculine singular.',
  },
  {
    mode: 'slaganje',
    q: '____ dijete cijelu je noć grijao pas.',
    en: 'A dog kept the lost child warm all night.',
    opts: ['Izgubljeno', 'Izgubljen', 'Izgubljena', 'Izgubljenog'],
    answer: 'Izgubljeno',
    tip: 'Dijete is neuter and is the object here (the dog did the warming), and a neuter accusative equals the nominative: izgubljeno dijete. Izgubljen is masculine and izgubljena feminine. Izgubljenog is the accusative of a masculine person, not of a neuter noun.',
  },
  {
    mode: 'slaganje',
    q: '____ pješaku odmah je pružena prva pomoć.',
    en: 'The injured pedestrian was given first aid right away.',
    opts: ['Ozlijeđenom', 'Ozlijeđeni', 'Ozlijeđenog', 'Ozlijeđenim'],
    answer: 'Ozlijeđenom',
    tip: 'Pješaku is a masculine dative (help is given to him), so the participle is in the dative too: ozlijeđenom pješaku. Ozlijeđeni is the nominative. Ozlijeđenog is the genitive or accusative. Ozlijeđenim is the instrumental.',
  },
  {
    mode: 'slaganje',
    q: 'Sve je bilo ____ rukom, a ne na računalu.',
    en: 'Everything was written by hand, not on a computer.',
    opts: ['napisano', 'napisan', 'napisana', 'napisani'],
    answer: 'napisano',
    tip: 'Sve is neuter singular (bilo shows it), so the participle is napisano. Napisan is masculine and napisana feminine. Napisani is a masculine plural.',
  },

  // ── upotreba ──────────────────────────────────────────────────────────────
  {
    mode: 'upotreba',
    q: 'Djeca su u školu ____ autobusom.',
    en: 'The children were taken to school by bus.',
    opts: ['odvezena', 'odvedena', 'odvežena', 'odvesta'],
    answer: 'odvezena',
    tip: 'Two verbs share the infinitive odvesti. Taking someone by vehicle (vozim) gives odvezen; leading someone on foot (vodim) gives odveden. A bus means odvezena; odvedena would mean the children were walked there. Odvežena softens a z that does not change here, and odvesta is built on the infinitive.',
  },
  {
    mode: 'upotreba',
    q: 'Gosti su ____ pješice do trga.',
    en: 'The guests were led on foot to the square.',
    opts: ['odvedeni', 'odvezeni', 'odveli', 'odvesti'],
    answer: 'odvedeni',
    tip: 'On foot it is the verb of leading (vodim): odveden, odvedeni. Odvezeni means taken by car or bus, which pješice rules out. Odveli is the active past form: it would say the guests led someone else. Odvesti is the infinitive.',
  },
  {
    mode: 'upotreba',
    q: 'Od kojeg se glagola ne može tvoriti glagolski pridjev trpni?',
    opts: ['sjediti', 'napisati', 'kupiti', 'otvoriti'],
    answer: 'sjediti',
    tip: 'The participle is made only from verbs that take an object in the accusative. Sjediti has no object, so it has no such form. Napisati, kupiti and otvoriti all take one: napisan, kupljen, otvoren.',
  },
  {
    mode: 'upotreba',
    lead: 'Održani su festivali postigli veliku popularnost.',
    q: 'Koju službu u ovoj rečenici ima prva riječ?',
    opts: [
      'It is an ordinary adjective describing the festivals.',
      'It is part of the verb, forming a passive.',
      'It is the past tense of the main verb.',
      'It is an adverb describing how they succeeded.',
    ],
    answer: 'It is an ordinary adjective describing the festivals.',
    tip: 'The participle has two jobs: an ordinary adjective before a noun, or part of a passive (Festival je održan). Here the verb is su postigli, and održani only describes festivali. It is not a past tense, and an adverb would not agree with the noun.',
  },
  {
    mode: 'upotreba',
    lead: 'Položena viša razina ispita omogućuje pristup svim programima.',
    q: 'Što ovdje znači „položena viša razina“?',
    opts: [
      'the higher level, once it has been passed',
      'the higher level, while it is being taken',
      'whoever is going to take the higher level',
      'the higher level that nobody passes',
    ],
    answer: 'the higher level, once it has been passed',
    tip: 'Položen comes from the perfective položiti, so it names a finished result: passed. An exam that is only being taken would be from the imperfective polagati. The form says nothing about the future, and it is not negative.',
  },
  {
    mode: 'upotreba',
    q: 'Ispit je puno puta polagan, a sad je konačno ____.',
    en: 'The exam was taken many times, and now it has finally been passed.',
    opts: ['položen', 'polagan', 'položan', 'položnut'],
    answer: 'položen',
    tip: 'The participle keeps the aspect of its verb. Polagati (to take an exam) gives polagan; položiti (to pass it) gives položen, the result that konačno announces. Položan and položnut use the endings of other verb groups.',
  },
  {
    mode: 'upotreba',
    q: 'Koji oblik može stajati ispred imenice kao pridjev: „____ pismo“?',
    en: 'a written letter',
    opts: ['napisano', 'napisalo', 'napisati', 'napiše'],
    answer: 'napisano',
    tip: 'Only the trpni pridjev (in -n, -en, -t) works as an adjective before a noun: napisano pismo. Napisalo is the form used to build the past tense. Napisati is the infinitive and napiše the present.',
  },
  {
    mode: 'upotreba',
    q: 'Moja je baka ____ u Lici.',
    en: 'My grandmother was born in Lika.',
    opts: ['rođena', 'rodila', 'rodena', 'rodjena'],
    answer: 'rođena',
    tip: 'Roditi → rođen, with d + j merged into đ; with baka it is rođena. Rodila is the active form: it would say that grandmother gave birth. Rodena leaves out the softening, and rodjena leaves the j unmerged.',
  },
  {
    mode: 'upotreba',
    q: 'Motovun je ____ po filmskom festivalu.',
    en: 'Motovun is known for its film festival.',
    opts: ['poznat', 'poznao', 'poznaje', 'poznavao'],
    answer: 'poznat',
    tip: 'Poznat belongs to the small -t group and is used as an adjective: known, famous. Poznao and poznavao are active past forms: the town itself would know someone. Poznaje is the present "knows".',
  },
];
