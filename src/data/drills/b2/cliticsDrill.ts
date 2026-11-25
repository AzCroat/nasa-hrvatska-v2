// src/data/drills/b2/cliticsDrill.ts
//
// B2 CLITICS — the drill for the `clitics` lesson (B2 position 14,
// "Clitic Pronouns & Word Order").
//
// Three modes (9 + 9 + 10 items):
//   mjesto — second position: after the first stressed word or phrase, never first,
//            never straight after i / a / dakle, straight after jer
//   niz    — the cluster of two or three clitics: li – ću/bih/sam – dative –
//            accusative or genitive – se – je, and ju je
//   sluh   — the ear: repairing a sentence built in English word order, and picking
//            the neutral sentence when a long pronoun would add stress
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 7 (contents: position of clitics after
//   conjunctions), 155 (unit 9 goals), 158–159 (i, pa, te, ni, niti), 162–163 (a, ali,
//   no, nego, već), 166–167 (ili, samo što, zato, stoga, dakle), 211 (unit 12 repeats
//   clitic order).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 14 (REDOSLIJED ENKLITIKA: the
//   model sentence Poklonio im ju je and the order table), 15–20 (its practice).
//
// Where the books and the lesson differ:
//   - The textbook teaches placement almost only through conjunctions (no clitic after
//     i, ni, a, no, dakle; clitics follow pa, te, niti, samo što). The lesson never
//     mentions conjunctions; it teaches the first-phrase rule instead. The drill has
//     both, using only the conjunctions where the book allows one placement (i, a,
//     dakle). Ali, nego, već, zato and stoga "may" take a clitic, so they are not used.
//   - The grammar book's table is li – verbal clitics – dative – accusative/genitive –
//     se – je and its model has ju je. The lesson's table starts at bi, has no li slot
//     and no genitive, and writes the feminine accusative as je (Kupila bih ti je).
//     Both je and ju are standard, so they are never offered against each other; ju
//     is the answer only before the auxiliary je.
//   - The lesson calls se je non-standard in writing, while the A2 drill treats it as
//     standard. No item here offers se je, as right or as wrong.
//   - The lesson allows the cluster to split the first phrase (Moja mi je sestra) as
//     well as to follow it (Moja sestra mi je). No item offers both, and no item
//     marks verb + clitics after a long first phrase as wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CLITICS_MODE_LABELS: Record<string, string> = {
  mjesto: '📍 Drugo mjesto',
  niz: '🔗 Niz enklitika',
  sluh: '👂 Zvuči li prirodno?',
};

export const CLITICS_DRILL_DATA: ModeDrillItem[] = [
  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Koja je rečenica točna?',
    en: 'I called him last night.',
    opts: [
      'Sinoć sam ga nazvao.',
      'Sam ga sinoć nazvao.',
      'Ga sam sinoć nazvao.',
      'Sinoć nazvao sam ga.',
    ],
    answer: 'Sinoć sam ga nazvao.',
    tip: 'Sinoć is the first stressed word, so sam ga comes straight after it. A sentence cannot begin with sam or ga, and ga never stands before sam. In the last option the cluster has slipped to third place, behind the verb.',
  },
  {
    mode: 'mjesto',
    q: 'Gdje stoje kratke riječi kad rečenica počinje s dvije riječi koje idu zajedno?',
    en: 'My sister saw him in town.',
    opts: [
      'Moja sestra ga je vidjela u gradu.',
      'Moja sestra je ga vidjela u gradu.',
      'Ga je moja sestra vidjela u gradu.',
      'Moja sestra vidjela u gradu ga je.',
    ],
    answer: 'Moja sestra ga je vidjela u gradu.',
    tip: 'Moja sestra is one phrase, and the cluster ga je follows it. Je closes the cluster, so je ga is the wrong order. Ga cannot open a sentence, and the cluster cannot wait until the end.',
  },
  {
    mode: 'mjesto',
    q: 'Rečenica počinje prilogom. Koja je točna?',
    en: 'Yesterday we saw him at the market.',
    opts: [
      'Jučer smo ga vidjeli na tržnici.',
      'Jučer vidjeli smo ga na tržnici.',
      'Smo ga jučer vidjeli na tržnici.',
      'Jučer mi smo ga vidjeli na tržnici.',
    ],
    answer: 'Jučer smo ga vidjeli na tržnici.',
    tip: 'A one-word adverb fills the first place, so smo ga comes right after Jučer. After Jučer vidjeli or Jučer mi the cluster is already in third place, and smo cannot begin a sentence.',
  },
  {
    mode: 'mjesto',
    q: 'Rečenica počinje prijedlogom. Koja je točna?',
    en: 'We met at that concert.',
    opts: [
      'Na tom koncertu smo se upoznali.',
      'Na smo se tom koncertu upoznali.',
      'Smo se na tom koncertu upoznali.',
      'Na tom koncertu se smo upoznali.',
    ],
    answer: 'Na tom koncertu smo se upoznali.',
    tip: 'A preposition has no stress of its own, so nothing can follow Na directly: the first phrase is Na tom koncertu. Smo cannot begin a sentence, and se comes after smo, never before it.',
  },
  {
    mode: 'mjesto',
    q: 'Enklitike mogu stajati i iza prve naglašene riječi. Koja je rečenica točna?',
    en: 'My brother helped me.',
    opts: [
      'Moj mi je brat pomogao.',
      'Moj je mi brat pomogao.',
      'Mi je moj brat pomogao.',
      'Moj brat je mi pomogao.',
    ],
    answer: 'Moj mi je brat pomogao.',
    tip: 'The cluster may split the phrase and stand after its first stressed word: Moj mi je brat. Inside the cluster the dative comes before je, so je mi is wrong in both places, and mi cannot open the sentence.',
  },
  {
    mode: 'mjesto',
    q: 'Nazvao me je i ____.',
    en: 'He called me and apologized to me.',
    opts: ['ispričao mi se', 'mi se ispričao', 'se mi ispričao', 'ispričao se mi'],
    answer: 'ispričao mi se',
    tip: 'A clitic never stands straight after the conjunction i, so the verb comes first and mi se follows it. That rules out mi se ispričao and se mi ispričao. In ispričao se mi the order is wrong: the dative comes before se.',
  },
  {
    mode: 'mjesto',
    q: 'Nju sam pozvala, a ____ nisam.',
    en: 'I invited her, but not him.',
    opts: ['njega', 'ga', 'mu', 'on'],
    answer: 'njega',
    tip: 'No clitic can follow the conjunction a, and a contrast needs a stressed word, so the long form njega is used. Ga and mu are short forms (and mu is dative). On is the nominative, but the verb needs an object.',
  },
  {
    mode: 'mjesto',
    q: 'Marko nije došao na sastanak, dakle ____.',
    en: 'Marko did not come to the meeting, so he forgot it.',
    opts: ['zaboravio ga je', 'ga je zaboravio', 'je ga zaboravio', 'zaboravio je ga'],
    answer: 'zaboravio ga je',
    tip: 'Clitics do not stand right after dakle, so the verb comes first and the cluster follows it. That rules out the two options that start with ga or je. Inside the cluster the accusative ga comes before je.',
  },
  {
    mode: 'mjesto',
    q: 'Ne mogu ti posuditi kišobran jer ____.',
    en: 'I cannot lend you the umbrella because I lost it.',
    opts: ['sam ga izgubio', 'ga sam izgubio', 'sam izgubio ga', 'izgubio ga sam'],
    answer: 'sam ga izgubio',
    tip: 'Jer opens the clause and the clitics come straight after it, in their fixed order: jer sam ga izgubio. Ga never stands before sam, the verb cannot come between sam and ga, and izgubio ga sam puts the cluster after the verb in the wrong order.',
  },

  // ── niz ───────────────────────────────────────────────────────────────────
  {
    mode: 'niz',
    lead: 'Baka je poklonila unucima staru sliku.',
    q: 'Baka ____ poklonila.',
    en: 'Grandma gave it to them.',
    opts: ['im ju je', 'im je je', 'ju im je', 'je im ju'],
    answer: 'im ju je',
    tip: 'Dative, then accusative, then je at the very end: im ju je. Two je in a row are avoided, so the feminine pronoun is ju here. Ju im puts the accusative before the dative, and je cannot open the cluster.',
  },
  {
    mode: 'niz',
    q: 'Rado ____ pokazao, ali žurim.',
    en: 'I would gladly show them to you, but I am in a hurry.',
    opts: ['bih vam ih', 'vam bih ih', 'bih ih vam', 'vam ih bih'],
    answer: 'bih vam ih',
    tip: 'The conditional bih comes first, then the dative vam, then the accusative ih. A pronoun never stands before bih, and ih vam has the accusative before the dative.',
  },
  {
    mode: 'niz',
    q: 'Sutra ____ vratiti.',
    en: 'Tomorrow they will return it to us.',
    opts: ['će nam ga', 'nam će ga', 'će ga nam', 'nam ga će'],
    answer: 'će nam ga',
    tip: 'The future auxiliary će leads the cluster, then dative nam, then accusative ga. Only je goes to the end; će never does. Ga nam has the accusative before the dative.',
  },
  {
    mode: 'niz',
    q: 'Taj film ____ svidio.',
    en: 'I liked that movie.',
    opts: ['mi se', 'se mi', 'mi je se', 'je mi se'],
    answer: 'mi se',
    tip: 'The dative mi comes before se. Je never stands before se, so mi je se and je mi se are both wrong; after se the third-person je is simply left out here.',
  },
  {
    mode: 'niz',
    q: 'Jučer ____ javio.',
    en: 'Yesterday I got in touch with him.',
    opts: ['sam mu se', 'mu sam se', 'sam se mu', 'se sam mu'],
    answer: 'sam mu se',
    tip: 'Sam comes first, then the dative mu, and se closes the cluster. Mu cannot stand before sam, and se cannot stand before a pronoun or before sam.',
  },
  {
    mode: 'niz',
    q: 'Hoće ____ svidjeti naš dar?',
    en: 'Will they like our gift?',
    opts: ['li im se', 'im li se', 'li se im', 'se li im'],
    answer: 'li im se',
    tip: 'Li always opens the cluster, right after the verb. Then comes the dative im, and se is last. Nothing can stand before li, and se never comes before a dative pronoun.',
  },
  {
    mode: 'niz',
    q: 'Sestra ____ vidjela u tramvaju.',
    en: 'My sister saw me on the tram.',
    opts: ['me je', 'je me', 'mi je', 'je mi'],
    answer: 'me je',
    tip: 'Vidjeti takes the accusative, so the pronoun is me, and je closes the cluster: me je. Je me has je too early. Mi is the dative (to me), which this verb does not take, in either order.',
  },
  {
    mode: 'niz',
    lead: 'Hoćemo li kupiti psa?',
    q: 'Djeca ____ jako veselila.',
    en: 'The kids would be really happy about him.',
    opts: ['bi mu se', 'mu bi se', 'bi se mu', 'se bi mu'],
    answer: 'bi mu se',
    tip: 'Bi comes first, then the dative mu (veseliti se takes the dative), and se is last. A pronoun or se cannot stand before bi, and se cannot stand before mu.',
  },
  {
    mode: 'niz',
    q: 'Dobro ____ sjećam.',
    en: 'I remember them well.',
    opts: ['ih se', 'se ih', 'im se', 'se im'],
    answer: 'ih se',
    tip: 'Sjećati se takes the genitive, and the short genitive ih sits in the same slot as an accusative: before se. Se ih has the order reversed. Im is the dative, which this verb does not take.',
  },

  // ── sluh ──────────────────────────────────────────────────────────────────
  {
    mode: 'sluh',
    lead: 'Moj brat je mi rekao istinu.',
    q: 'Učenik je složio rečenicu kao na engleskom. Kako glasi točno?',
    en: 'My brother told me the truth.',
    opts: [
      'Moj brat mi je rekao istinu.',
      'Moj brat rekao je mi istinu.',
      'Mi je moj brat rekao istinu.',
      'Moj brat je rekao mi istinu.',
    ],
    answer: 'Moj brat mi je rekao istinu.',
    tip: 'English keeps the auxiliary first and the pronoun after the verb. In Croatian mi and je stay together after Moj brat, with je last. Mi cannot open the sentence, and rekao mi or rekao je mi leaves a clitic stranded behind the verb.',
  },
  {
    mode: 'sluh',
    lead: 'Moram nazvati ga večeras.',
    q: 'Ova rečenica zvuči strano. Popravite je.',
    en: 'I have to call him tonight.',
    opts: [
      'Moram ga nazvati večeras.',
      'Ga moram nazvati večeras.',
      'Moram večeras nazvati ga.',
      'Moram nazvati večeras ga.',
    ],
    answer: 'Moram ga nazvati večeras.',
    tip: 'The pronoun belongs to nazvati, but it still moves up to second place in the sentence: Moram ga. English leaves it after the infinitive, which is what the other two options do. Ga cannot begin a sentence.',
  },
  {
    mode: 'sluh',
    lead: 'Ana je dala mi ih jučer.',
    q: 'Kako bi to rekao izvorni govornik?',
    en: 'Ana gave them to me yesterday.',
    opts: [
      'Ana mi ih je dala jučer.',
      'Ana je mi ih dala jučer.',
      'Ana mi je ih dala jučer.',
      'Ana dala mi ih je jučer.',
    ],
    answer: 'Ana mi ih je dala jučer.',
    tip: 'All three clitics gather after Ana: dative mi, accusative ih, and je at the end. Je cannot stand before the pronouns or between them. After a one-word subject the cluster does not wait for the verb.',
  },
  {
    mode: 'sluh',
    q: 'Koja rečenica zvuči neutralno, bez isticanja osobe?',
    en: 'I saw him yesterday.',
    opts: [
      'Jučer sam ga vidio.',
      'Jučer sam vidio njega.',
      'Jučer ja sam ga vidio.',
      'Jučer sam vidio ga.',
    ],
    answer: 'Jučer sam ga vidio.',
    tip: 'The neutral sentence uses the short form in second place: sam ga. Vidio njega is grammatical, but the long form stresses him (him, not someone else). After Jučer ja the cluster is in third place, and ga cannot stay behind the verb.',
  },
  {
    mode: 'sluh',
    q: '____ sam to rekao, a ne njoj.',
    en: 'I said that to HIM, not to her.',
    opts: ['Njemu', 'Mu', 'Ga', 'Njega'],
    answer: 'Njemu',
    tip: 'A short form cannot open a sentence or carry a contrast, so the long dative Njemu is needed. Mu is the short dative. Ga and Njega are accusative, and reći takes the dative for the person.',
  },
  {
    mode: 'sluh',
    lead: 'Ja ću vidjeti te sutra.',
    q: 'Rečenica prati engleski red riječi. Koja je točna?',
    en: 'I will see you tomorrow.',
    opts: [
      'Vidjet ću te sutra.',
      'Ću te vidjeti sutra.',
      'Vidjet te ću sutra.',
      'Ja ću sutra vidjeti te.',
    ],
    answer: 'Vidjet ću te sutra.',
    tip: 'Ću and te form one cluster, ću first, right after the first word. Ću cannot begin a sentence, te cannot stand before ću, and te cannot be left at the end after the verb.',
  },
  {
    mode: 'sluh',
    lead: 'Djeca igraju se u parku.',
    q: 'Gdje treba stajati se? Izaberite ispravnu rečenicu.',
    en: 'The children are playing in the park.',
    opts: [
      'Djeca se igraju u parku.',
      'Se djeca igraju u parku.',
      'Djeca igraju u parku se.',
      'Djeca u parku igraju se.',
    ],
    answer: 'Djeca se igraju u parku.',
    tip: 'Se does not have to follow its verb; it has to be second, right after Djeca. It cannot open the sentence, and at the end or after two other phrases it is far too late.',
  },
  {
    mode: 'sluh',
    lead: 'Želim da vratiš mi je sutra.',
    q: 'Govori se o knjizi. Kako glasi ispravna rečenica?',
    en: 'I want you to return it to me tomorrow.',
    opts: [
      'Želim da mi je vratiš sutra.',
      'Želim da je mi vratiš sutra.',
      'Želim mi je da vratiš sutra.',
      'Želim da vratiš je mi sutra.',
    ],
    answer: 'Želim da mi je vratiš sutra.',
    tip: 'Inside the da clause the clitics come straight after da, dative mi before accusative je. Je mi has the wrong order. The pronouns belong to vratiš, so they cannot jump out in front of da or stay behind the verb.',
  },
  {
    mode: 'sluh',
    lead: 'Zašto ti nisi rekao mi?',
    q: 'Popravite pitanje tako da zvuči hrvatski.',
    en: 'Why did you not tell me?',
    opts: [
      'Zašto mi nisi rekao?',
      'Zašto nisi mi rekao?',
      'Mi zašto nisi rekao?',
      'Zašto nisi rekao mi?',
    ],
    answer: 'Zašto mi nisi rekao?',
    tip: 'After a question word the clitic comes at once: Zašto mi. Nisi is a full stressed word, not a clitic, so mi does not wait for it. Mi cannot open the question or close it.',
  },
  {
    mode: 'sluh',
    lead: 'Mi smo vratili se kući kasno.',
    q: 'Koja rečenica zvuči kao da ju je rekao Hrvat?',
    en: 'We got home late.',
    opts: [
      'Kući smo se vratili kasno.',
      'Kući vratili smo se kasno.',
      'Kući se smo vratili kasno.',
      'Smo se kući vratili kasno.',
    ],
    answer: 'Kući smo se vratili kasno.',
    tip: 'Smo and se stay together, smo first, right after the first word Kući. With the verb in between, the cluster is in third place. Se never stands before smo, and smo cannot begin a sentence.',
  },
];
