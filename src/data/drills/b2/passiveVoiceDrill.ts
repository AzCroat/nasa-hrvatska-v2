// src/data/drills/b2/passiveVoiceDrill.ts
//
// B2 PASSIVE VOICE — the drill for the `passive-voice` lesson (B2 position 33).
//
// Three modes, nine items each:
//   biti  — biti + the glagolski pridjev trpni: agreement with the subject, the past
//           (bila je održana) and the future (će biti održana)
//   se    — the se-passive: the verb agrees with the subject, where se stands, and
//           telling it apart from a reflexive verb
//   izbor — from active to passive and back, done against in progress, and what to do
//           when the doer matters
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 122 (when it is not important who did
//   something, only that it was done, Croatian uses the trpni pridjev or the se-passive:
//   "Stipendije su automatski produljene" / "Stipendije se automatski produljuju"; the
//   se-passive is se + an active verb in the 3rd person singular or plural), 123 (the
//   text on the državna matura: "ispita koji se polažu na kraju srednje škole",
//   "Obvezni ispiti državne mature mogu se polagati na dvjema razinama"), 126 ("Festival
//   je održan u Zagrebu"), 176–177 ("Filmski festival u Berlinu… osnovan je ubrzo
//   nakon Filmskog festivala u Cannesu", "Najveći se dio njih održava u Zagrebu").
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 144 (the trpni pridjev "u tvorbi
//   pasiva"), 146–147 (practice sentences in all three tenses: "Provalnik je uhvaćen",
//   "Nastava će biti održana u uobičajeno vrijeme", "Film će biti prikazan na festivalu
//   u Veneciji", "Modna revija bila je održana u Zadru", "Haljina će biti završena do
//   sutra", "Kuće su spaljene u ratu", "Izložba je otvorena u petak prošli tjedan",
//   "Moja molba nažalost je odbijena. Nadam se da će biti prihvaćena sljedeći put").
//
// Where the books and the lesson differ:
//   - The lesson teaches an agent with od + genitive and then says style guides prefer
//     the active. Neither book prints an agent at all: both say the passive is for when
//     the doer does not matter. The drill follows the books. Od + genitive is never
//     offered, as right or as wrong, and when the doer matters the answer is the active
//     sentence.
//   - The lesson calls the se-passive conversational. The textbook says it is
//     especially common in scientific and administrative writing and also not rare in
//     everyday speech. No item asks about register.
//   - The impersonal type with an accusative (Ispite se polaže) is debated in the norm.
//     It is never offered. Wrong se-options fail on agreement or on an extra auxiliary.
//   - Se after the first word and se after the first phrase are both standard, so an
//     item about the place of se only offers se at the very start or the very end as
//     wrong.
//   - Grammar-order fence: no verbal nouns in -nje, no conditional, no verbal adverbs.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PASSIVE_VOICE_MODE_LABELS: Record<string, string> = {
  biti: '🏗️ Biti + trpni pridjev',
  se: '🔁 Se-pasiv: prodaje se',
  izbor: '🔀 Aktiv ili pasiv?',
};

export const PASSIVE_VOICE_DRILL_DATA: ModeDrillItem[] = [
  // ── biti ──────────────────────────────────────────────────────────────────
  {
    mode: 'biti',
    q: 'Festival je ____ u Zagrebu.',
    en: 'The festival was held in Zagreb.',
    opts: ['održan', 'održana', 'održano', 'održao'],
    answer: 'održan',
    tip: 'The passive is biti + the trpni pridjev, which agrees with the subject. Festival is masculine: je održan. Održana is feminine and održano neuter. Održao is the active form: the festival itself would have held something.',
  },
  {
    mode: 'biti',
    q: 'Stipendije su automatski ____.',
    en: 'The scholarships have been extended automatically.',
    opts: ['produljene', 'produljeni', 'produljena', 'produljile'],
    answer: 'produljene',
    tip: 'Stipendije is a feminine plural, so the participle ends in -e: su produljene. Produljeni is the masculine plural. Produljena is the feminine singular or the neuter plural. Produljile is active: the scholarships would have extended something.',
  },
  {
    mode: 'biti',
    q: 'Nastava će ____ održana u uobičajeno vrijeme.',
    en: 'Classes will be held at the usual time.',
    opts: ['biti', 'bila', 'je', 'se'],
    answer: 'biti',
    tip: 'The future passive is će biti + the participle: će biti održana. Bila belongs to the past (bila je održana). Je cannot follow će. Se builds the other passive, with an active verb, not with a participle.',
  },
  {
    mode: 'biti',
    q: 'Modna revija ____ je održana u Zadru.',
    en: 'The fashion show had been held in Zadar.',
    opts: ['bila', 'bio', 'bilo', 'bile'],
    answer: 'bila',
    tip: 'In the past passive both parts agree with the subject. Revija is a feminine singular: bila je održana. Bio is masculine and bilo neuter. Bile is the feminine plural.',
  },
  {
    mode: 'biti',
    q: 'Film će biti ____ na festivalu u Veneciji.',
    en: 'The film will be shown at the festival in Venice.',
    opts: ['prikazan', 'prikazati', 'prikazao', 'prikazana'],
    answer: 'prikazan',
    tip: 'After će biti comes the participle, agreeing with film, a masculine noun: prikazan. Prikazati is the infinitive of the active future (će prikazati film). Prikazao is an active past form. Prikazana is feminine.',
  },
  {
    mode: 'biti',
    q: 'Provalnik ____ uhvaćen sinoć.',
    en: 'The burglar was caught last night.',
    opts: ['je', 'se', 'su', 'ga'],
    answer: 'je',
    tip: 'The participle needs a form of biti that agrees with the subject: provalnik je uhvaćen. Se goes with an active verb, never with the participle. Su is plural. Ga is an object pronoun, and a passive sentence has no object.',
  },
  {
    mode: 'biti',
    q: 'Haljina će biti ____ do sutra.',
    en: 'The dress will be finished by tomorrow.',
    opts: ['završena', 'završen', 'završila', 'završeno'],
    answer: 'završena',
    tip: 'Haljina is feminine, so the participle is završena. Završen is masculine and završeno neuter. Završila is an active form and cannot follow će biti.',
  },
  {
    mode: 'biti',
    q: 'Nadam se da će moja molba sljedeći put biti ____.',
    en: 'I hope my request will be accepted next time.',
    opts: ['prihvaćena', 'prihvatila', 'prihvaćen', 'prihvatiti'],
    answer: 'prihvaćena',
    tip: 'Će biti + the participle, agreeing with molba, a feminine noun: prihvaćena. Prihvatila is active: the request would accept something. Prihvaćen is masculine. Prihvatiti is an infinitive and cannot follow biti.',
  },
  {
    mode: 'biti',
    q: 'Kuće su ____ u ratu.',
    en: 'The houses were burned down in the war.',
    opts: ['spaljene', 'spaljeni', 'spalile', 'spaljena'],
    answer: 'spaljene',
    tip: 'Kuće is a feminine plural: su spaljene. Spaljeni is the masculine plural. Spalile is active: the houses would have burned something. Spaljena is the feminine singular or the neuter plural.',
  },

  // ── se ────────────────────────────────────────────────────────────────────
  {
    mode: 'se',
    q: 'Na maturi ____ obvezni i izborni predmeti.',
    en: 'Required and elective subjects are taken at the graduation exam.',
    opts: ['se polažu', 'se polaže', 'su polažu', 'se polagati'],
    answer: 'se polažu',
    tip: 'The se-passive is se + an active verb in the 3rd person, and the verb agrees with the subject. Predmeti is plural: se polažu. Se polaže is singular. Su cannot stand with a present form. Se polagati has an infinitive where a finite verb is needed.',
  },
  {
    mode: 'se',
    q: 'Stipendije se automatski ____.',
    en: 'Scholarships are extended automatically.',
    opts: ['produljuju', 'produljuje', 'produljene', 'produljiti'],
    answer: 'produljuju',
    tip: 'Se goes with an active verb that agrees with the subject. Stipendije is plural: se produljuju. Produljuje is singular. Produljene is the participle, which goes with su, not with se. Produljiti is an infinitive.',
  },
  {
    mode: 'se',
    q: 'Najveći se dio festivala ____ u Zagrebu.',
    en: 'Most of the festivals are held in Zagreb.',
    opts: ['održava', 'održavaju', 'održan', 'održavati'],
    answer: 'održava',
    tip: 'The subject is dio, a singular noun; festivala is only its genitive. So the verb is singular: se održava. Održavaju agrees with the wrong word. Održan is the participle and does not go with se. Održavati is an infinitive.',
  },
  {
    mode: 'se',
    q: 'U kojoj rečenici „se“ stoji na pravom mjestu?',
    opts: [
      'Karte se kupuju na blagajni.',
      'Se karte kupuju na blagajni.',
      'Karte kupuju na blagajni se.',
      'Karte su se kupuju na blagajni.',
    ],
    answer: 'Karte se kupuju na blagajni.',
    tip: 'Se is a short word that cannot open a sentence or wait until the end; it comes early, here right after the first word. The last sentence adds su, but a present form takes no auxiliary.',
  },
  {
    mode: 'se',
    q: 'Obvezni ispiti ____ polagati na dvjema razinama.',
    en: 'The required exams can be taken at two levels.',
    opts: ['mogu se', 'može se', 'mogu biti', 'mogu su'],
    answer: 'mogu se',
    tip: 'With a modal verb, se joins the modal, and the modal agrees with the subject. Ispiti is plural: mogu se polagati. Može se is singular. Mogu biti would need a participle after it, not an infinitive. Mogu su puts two finite verbs together.',
  },
  {
    mode: 'se',
    lead: 'Prodaje se kuća s vrtom.',
    q: 'Što kaže ovaj oglas?',
    opts: [
      'A house with a yard is for sale.',
      'The house is selling its yard.',
      'Somebody has already sold a house with a yard.',
      'The owner is looking for a house with a yard.',
    ],
    answer: 'A house with a yard is for sale.',
    tip: 'Se + an active verb is a passive with no doer named: the house is being sold, by whoever owns it. Kuća is the subject, not the seller. The verb is in the present, so nothing has been sold yet, and nobody is looking to buy.',
  },
  {
    mode: 'se',
    q: 'Mobiteli se na ispitu ne ____.',
    en: 'Cell phones are not used during the exam.',
    opts: ['koriste', 'koristi', 'korišteni', 'koristiti'],
    answer: 'koriste',
    tip: 'The verb agrees with the subject even when it is negated. Mobiteli is plural: se ne koriste. Koristi is singular. Korišteni is the participle and would need su, not se. Koristiti is an infinitive.',
  },
  {
    mode: 'se',
    q: 'Kuća se ____ tri godine.',
    en: 'The house was under construction for three years.',
    opts: ['gradila', 'gradio', 'gradilo', 'gradili'],
    answer: 'gradila',
    tip: 'In the past the se-passive is se + the active past form, which agrees with the subject. Kuća is feminine: se gradila. Gradio is masculine and gradilo neuter. Gradili is plural.',
  },
  {
    mode: 'se',
    q: 'U kojoj rečenici „se“ tvori pasiv?',
    opts: [
      'Kruh se peče svako jutro.',
      'Marko se brije svako jutro.',
      'Djeca se boje mraka.',
      'Ana se glasno smije.',
    ],
    answer: 'Kruh se peče svako jutro.',
    tip: 'Bread does not bake itself: somebody bakes it and is not named. That is the se-passive. Marko shaves himself, which is a true reflexive. Bojati se and smijati se are verbs that always carry se and have nothing passive about them.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    lead: 'Učenici su očistili učionicu.',
    q: 'Kako glasi ista rečenica u pasivu?',
    opts: [
      'Učionica je očišćena.',
      'Učionica je očistila.',
      'Učionica se očišćena.',
      'Učionice je očišćena.',
    ],
    answer: 'Učionica je očišćena.',
    tip: 'The object becomes the subject in the nominative, and the verb becomes je + the participle: Učionica je očišćena. Je očistila is still active: the classroom would have cleaned something. Se does not go with a participle. Učionice is a genitive, and the subject must be in the nominative.',
  },
  {
    mode: 'izbor',
    lead: 'Ovdje prodaju karte.',
    q: 'Kako glasi ista rečenica u se-pasivu?',
    opts: [
      'Ovdje se prodaju karte.',
      'Ovdje se prodaju karata.',
      'Ovdje su prodaju karte.',
      'Ovdje se prodane karte.',
    ],
    answer: 'Ovdje se prodaju karte.',
    tip: 'Add se and let the verb agree with karte, which is now the subject: se prodaju karte. Karata is a genitive and cannot be the subject. Su does not stand with a present form. Prodane is a participle and does not go with se.',
  },
  {
    mode: 'izbor',
    q: 'Želite istaknuti autora romana. Koja je rečenica prirodna i pravilna?',
    opts: [
      'Roman je napisao Miroslav Krleža.',
      'Roman je napisan Miroslavom Krležom.',
      'Roman se napisao Miroslav Krleža.',
      'Roman je napisan Miroslav Krleža.',
    ],
    answer: 'Roman je napisao Miroslav Krleža.',
    tip: 'The passive is for when the doer does not matter. When he does, Croatian keeps the active and simply puts the object first: Roman je napisao Krleža. An instrumental for the doer copies other languages. The se-passive never names a doer, and a bare nominative cannot follow a passive.',
  },
  {
    mode: 'izbor',
    q: 'Kada se u hrvatskom upotrebljava pasiv?',
    opts: [
      'when it does not matter who did it, only that it was done',
      'whenever the sentence is in the past',
      'only in questions',
      'when the subject is a person',
    ],
    answer: 'when it does not matter who did it, only that it was done',
    tip: 'Both passives leave the doer out because the doer is not the point: Stipendije su produljene. The passive is not tied to one tense, it is not a question form, and its subject is usually a thing, not a person.',
  },
  {
    mode: 'izbor',
    q: 'Auto je još u servisu i mehaničar na njemu radi. Što ćete reći?',
    opts: ['Auto se popravlja.', 'Auto je popravljen.', 'Auto je popravio.', 'Auto će popravljen.'],
    answer: 'Auto se popravlja.',
    tip: 'Work in progress is se + an imperfective present: se popravlja. Je popravljen names the finished result, and the car is not ready yet. Je popravio is active and would make the car the repairman. Će popravljen is missing biti.',
  },
  {
    mode: 'izbor',
    q: 'Na računu je nula i ništa više ne dugujete. Što ćete reći?',
    opts: ['Račun je plaćen.', 'Račun se plaća.', 'Račun je platio.', 'Račun se platiti.'],
    answer: 'Račun je plaćen.',
    tip: 'A finished result is je + the participle of a perfective verb: je plaćen. Se plaća says the paying is still going on or is a general rule. Je platio is active and would make the bill the payer. Se platiti has an infinitive where a finite verb is needed.',
  },
  {
    mode: 'izbor',
    lead: 'Otvorili su izložbu u petak.',
    q: 'Koja pasivna rečenica kaže isto?',
    opts: [
      'Izložba je otvorena u petak.',
      'Izložbu je otvorena u petak.',
      'Izložba je otvoren u petak.',
      'Izložba je otvorila u petak.',
    ],
    answer: 'Izložba je otvorena u petak.',
    tip: 'The accusative izložbu becomes the nominative subject izložba, and the participle agrees with it: otvorena. Izložbu keeps the object case. Otvoren is masculine. Je otvorila is active: the exhibition would have opened something.',
  },
  {
    mode: 'izbor',
    lead: 'Sutra će objaviti rezultate.',
    q: 'Kako glasi ista rečenica u pasivu s glagolom biti?',
    opts: [
      'Rezultati će biti objavljeni sutra.',
      'Rezultati će objavljeni sutra.',
      'Rezultate će biti objavljeni sutra.',
      'Rezultati će biti objavili sutra.',
    ],
    answer: 'Rezultati će biti objavljeni sutra.',
    tip: 'The future passive is će biti + the participle, with the old object as a nominative subject: Rezultati će biti objavljeni. Without biti the sentence is incomplete. Rezultate keeps the object case. Objavili is an active form.',
  },
  {
    mode: 'izbor',
    q: 'Koja je od ovih rečenica pasivna?',
    opts: [
      'Most je izgrađen prije sto godina.',
      'Radnici su izgradili most.',
      'Most je bio vrlo star.',
      'Radnici su gradili sto godina.',
    ],
    answer: 'Most je izgrađen prije sto godina.',
    tip: 'Je + the trpni pridjev, with the thing made as the subject and no doer: that is the passive. In the second and fourth sentences the workers are the subject and do the building. Most je bio star has an ordinary adjective, not a participle.',
  },
];
