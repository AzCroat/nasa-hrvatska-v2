// src/data/drills/b2/wishesRegretsDrill.ts
//
// B2 WISHES AND REGRETS — the drill for the `wishes-regrets` lesson (B2 position 48).
//
// Three modes, nine items each:
//   zelja    — Da barem…, Kamo sreće da…, Volio bih da + a clause for someone else,
//              Volio bih + infinitive for yourself
//   trebao   — should against should have, could against could have:
//              trebao bih / trebao sam, mogao bih / mogao sam, morao sam
//   zaljenje — Šteta što… and Žao mi je što… for something that really happened,
//              and žao + dative of the person + genitive of the one you pity
//
// Book pages (printed numbers):
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — 126 (GENITIV S PRILOGOM ŽAO:
//   "Mariji je bilo žao onog starog psa", žao mi / ti / mu je + genitive), 184–186
//   (POGODBENE REČENICE: the unreal condition with da, "Da je mlađi, brže bi trčao",
//   present or perfect after da).
//   Razgovarajte s nama! B2 textbook — thin: 179–180 (UVJETNE REČENICE, real and
//   possible conditions) and one unreal wish inside a text on 144 ("Da mi je sad 30
//   godina… ne bih mogla živjeti od ove struke").
//
// Where the books and the lesson differ:
//   - Neither book teaches Da barem, Kamo sreće da, Volio bih da, Šteta što or the
//     trebao sam / trebao bih contrast. All of that comes from the lesson. The books
//     give the base it stands on: da + present or perfect for something unreal.
//   - The grammar book teaches žao with the genitive (Žao mi je tog psa: I feel sorry
//     for that dog); the lesson teaches only Žao mi je što + a clause. The drill has
//     both, in separate items.
//   - Volio bih da + present for the same subject (the Serbian-style da clause) is
//     never offered, as right or as wrong. Same subject: infinitive. New subject: da.
//   - Grammar-order fence: no verbal adverbs, no hedging vocabulary, no reported
//     speech.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const WISHES_REGRETS_MODE_LABELS: Record<string, string> = {
  zelja: '🌠 Da barem, volio bih',
  trebao: '↩️ Trebao sam, mogao sam',
  zaljenje: '😔 Šteta što, žao mi je',
};

export const WISHES_REGRETS_DRILL_DATA: ModeDrillItem[] = [
  // ── zelja ─────────────────────────────────────────────────────────────────
  {
    mode: 'zelja',
    q: 'Da barem ____ bliže moru!',
    en: 'If only we lived closer to the sea!',
    opts: ['živimo', 'živjeti', 'živjeli bismo', 'ćemo živjeti'],
    answer: 'živimo',
    tip: 'A wish about now is da barem + the present: da barem živimo. An infinitive cannot follow da. The conditional and the future are what English suggests, but Croatian does not use them after da barem.',
  },
  {
    mode: 'zelja',
    q: 'Da barem ____ poslala tu poruku!',
    en: 'If only I had not sent that message! (a woman speaking)',
    opts: ['nisam', 'ne bih', 'neću', 'nemam'],
    answer: 'nisam',
    tip: 'A wish about the past is da barem + the perfect: da barem nisam poslala. Ne bih is the conditional, which does not follow da barem. Neću is the future, and nemam is "I do not have", not an auxiliary.',
  },
  {
    mode: 'zelja',
    q: 'Voljela bih da nas ____ češće.',
    en: 'I wish you would visit us more often.',
    opts: ['posjećuješ', 'posjećivati', 'bi posjećivao', 'ćeš posjećivati'],
    answer: 'posjećuješ',
    tip: 'A wish about somebody else is voljela bih da + the present: da nas posjećuješ. The infinitive would make the speaker the visitor. The conditional and the future are not used inside this clause.',
  },
  {
    mode: 'zelja',
    q: 'Volio bih ____ Dubrovnik izvan sezone.',
    en: 'I would like to see Dubrovnik out of season.',
    opts: ['vidjeti', 'vidio', 'vidim', 'viđen'],
    answer: 'vidjeti',
    tip: 'When the wish is about yourself, volio bih takes an infinitive: volio bih vidjeti. Vidio would need its own auxiliary, vidim is a present tense form that cannot follow bih, and viđen is the passive adjective.',
  },
  {
    mode: 'zelja',
    q: 'Koja rečenica izriče želju o drugoj osobi?',
    opts: [
      'Voljela bih da ostaneš još koji dan.',
      'Voljela bih ostati još koji dan.',
      'Voljela sam ostati još koji dan.',
      'Volim ostati još koji dan.',
    ],
    answer: 'Voljela bih da ostaneš još koji dan.',
    tip: 'Da ostaneš has a new subject, you, so it needs a clause. Voljela bih ostati is a wish about the speaker herself. Voljela sam ostati is the past ("I liked staying") and volim ostati is a habit, so neither is a wish.',
  },
  {
    mode: 'zelja',
    q: 'Volio bih da ____ jučer bila s nama.',
    en: 'I wish you had been with us yesterday.',
    opts: ['si', 'budeš', 'bi', 'ćeš'],
    answer: 'si',
    tip: 'For something already past the clause takes the perfect: da si bila. Budeš belongs after ako or kad and looks forward. Bi is the conditional and ćeš the future, and neither is used after volio bih da.',
  },
  {
    mode: 'zelja',
    q: 'Kamo sreće da ____ ranije počeli štedjeti!',
    en: 'If only we had started saving earlier!',
    opts: ['smo', 'bismo', 'ćemo', 'budemo'],
    answer: 'smo',
    tip: 'Kamo sreće da is the warmer version of da barem, and a wish about the past takes the perfect: da smo počeli. Bismo is the conditional, ćemo the future and budemo looks forward after ako or kad.',
  },
  {
    mode: 'zelja',
    q: 'Što znači „Da barem znam plivati!“?',
    opts: [
      'If only I could swim!',
      'At least I can swim.',
      'I should have gone swimming.',
      'I am sure that I can swim.',
    ],
    answer: 'If only I could swim!',
    tip: 'Da barem + present is a wish about now: the speaker cannot swim and wishes otherwise. Barem alone means "at least", but with da it carries the wistfulness. Regret about the past would be Trebao sam…, and nothing here expresses certainty.',
  },
  {
    mode: 'zelja',
    q: 'Koja je rečenica potpuna i točna želja?',
    opts: [
      'Da barem imam auto!',
      'Da barem imati auto!',
      'Da barem ću imati auto!',
      'Da barem bih imao auto!',
    ],
    answer: 'Da barem imam auto!',
    tip: 'Da barem needs no main clause and takes the plain present: da barem imam. An infinitive cannot follow da. The future ću and the conditional bih are not used after da barem.',
  },

  // ── trebao ────────────────────────────────────────────────────────────────
  {
    mode: 'trebao',
    lead: 'Karte su rasprodane.',
    q: 'Kako izraziti žaljenje zbog toga?',
    opts: [
      'Trebali smo ih kupiti prošli tjedan.',
      'Trebali bismo ih kupiti prošli tjedan.',
      'Trebamo ih kupiti prošli tjedan.',
      'Trebat ćemo ih kupiti prošli tjedan.',
    ],
    answer: 'Trebali smo ih kupiti prošli tjedan.',
    tip: 'Regret about the past is the plain past of trebati + infinitive: trebali smo. Trebali bismo is advice for now and cannot go with prošli tjedan. The present and the future clash with "last week" too.',
  },
  {
    mode: 'trebao',
    lead: 'Stalno si umoran.',
    q: 'Kako dati savjet za ubuduće?',
    opts: [
      'Trebao bi ranije ići spavati.',
      'Trebao si ranije ići spavati.',
      'Mogao si ranije ići spavati.',
      'Morao si ranije ići spavati.',
    ],
    answer: 'Trebao bi ranije ići spavati.',
    tip: 'Advice for now or the future is the conditional: trebao bi. Trebao si is regret about the past (you should have). Mogao si is a missed chance in the past, and morao si says that you actually had to.',
  },
  {
    mode: 'trebao',
    q: '____ ti pomoći, ali nisi me zvala.',
    en: 'I could have helped you, but you did not call me.',
    opts: ['Mogao sam', 'Mogao bih', 'Mogu', 'Moći ću'],
    answer: 'Mogao sam',
    tip: 'A missed possibility in the past is the plain past of moći: mogao sam. Mogao bih is an offer for now. Mogu is the present and moći ću the future; neither fits a chance that is already gone.',
  },
  {
    mode: 'trebao',
    q: 'Sutra sam slobodan. ____ ti pomoći oko selidbe.',
    en: 'I am free tomorrow. I could help you with the move.',
    opts: ['Mogao bih', 'Mogao sam', 'Trebao sam', 'Morao sam'],
    answer: 'Mogao bih',
    tip: 'An open possibility is the conditional: mogao bih. Mogao sam would be a missed chance in the past, which clashes with sutra. Trebao sam is regret and morao sam is a past obligation.',
  },
  {
    mode: 'trebao',
    q: 'Što znači „Morao sam otići ranije“?',
    opts: [
      'I had to leave earlier, and I did.',
      'I should have left earlier, but I did not.',
      'I ought to leave earlier.',
      'I could leave earlier.',
    ],
    answer: 'I had to leave earlier, and I did.',
    tip: 'The past of morati is a real obligation that was carried out. "I should have left" is Trebao sam otići. "I ought to leave" is Morao bih or Trebao bih otići, and "I could leave" is Mogao bih otići.',
  },
  {
    mode: 'trebao',
    q: 'Stan je bio jeftin. ____ ga kupiti, ali smo predugo čekali.',
    en: 'The apartment was cheap. We could have bought it, but we waited too long.',
    opts: ['Mogli smo', 'Mogli bismo', 'Možemo', 'Moći ćemo'],
    answer: 'Mogli smo',
    tip: 'The chance is gone, so it is the plain past of moći: mogli smo ga kupiti. Mogli bismo would mean the chance is still open. Možemo and moći ćemo are the present and the future.',
  },
  {
    mode: 'trebao',
    q: 'Djeco, ____ me pitati prije nego što ste uzeli auto!',
    en: 'Kids, you should have asked me before you took the car!',
    opts: ['trebali ste', 'trebali biste', 'trebate', 'trebat ćete'],
    answer: 'trebali ste',
    tip: 'The car is already taken, so this is a reproach about the past: trebali ste pitati. Trebali biste is advice for next time. Trebate and trebat ćete are the present and the future.',
  },
  {
    mode: 'trebao',
    q: 'Koji par točno povezuje hrvatsku i englesku rečenicu?',
    opts: [
      'Trebao sam nazvati. — I should have called.',
      'Trebao bih nazvati. — I should have called.',
      'Trebao sam nazvati. — I ought to call.',
      'Mogao bih nazvati. — I could have called.',
    ],
    answer: 'Trebao sam nazvati. — I should have called.',
    tip: 'Trebao sam is the past: I should have. Trebao bih is advice for now: I ought to. Mogao bih is "I could"; "I could have called" is Mogao sam nazvati.',
  },
  {
    mode: 'trebao',
    q: 'Liječnik kaže: „____ manje soliti hranu.“',
    en: 'The doctor says: "You should put less salt on your food."',
    opts: ['Trebali biste', 'Trebali ste', 'Morali ste', 'Mogli ste'],
    answer: 'Trebali biste',
    tip: 'Advice for now is the conditional: trebali biste. Trebali ste is a reproach about the past. Morali ste says you were obliged to, and mogli ste is a missed chance.',
  },

  // ── zaljenje ──────────────────────────────────────────────────────────────
  {
    mode: 'zaljenje',
    q: 'Šteta ____ koncert nije bio na otvorenom.',
    en: 'It is a shame the concert was not outdoors.',
    opts: ['što', 'da', 'ako', 'kad'],
    answer: 'što',
    tip: 'Šteta što introduces a fact, something that really happened. Da is kept for wishes and things that are not real. Ako and kad would turn the fact into a condition or a time.',
  },
  {
    mode: 'zaljenje',
    q: 'Žao ____ je što smo propustili tvoj rođendan.',
    en: 'We are sorry we missed your birthday.',
    cue: 'mi',
    opts: ['nam', 'nas', 'naš', 'našem'],
    answer: 'nam',
    tip: 'The person who feels sorry stands in the dative: žao nam je. Nas is the genitive or accusative. Naš and našem are forms of the possessive "our", not of the pronoun.',
  },
  {
    mode: 'zaljenje',
    q: 'Žao mi je ____ ispred zgrade.',
    en: 'I feel sorry for the abandoned dogs outside the building.',
    cue: 'napušteni psi',
    opts: ['napuštenih pasa', 'napušteni psi', 'napuštenim psima', 'napuštene pse'],
    answer: 'napuštenih pasa',
    tip: 'The one you feel sorry for stands in the genitive after žao: žao mi je napuštenih pasa. The nominative, the dative and the accusative are the cases English speakers reach for, but žao takes none of them here.',
  },
  {
    mode: 'zaljenje',
    q: 'Koja rečenica žali zbog nečega što se stvarno dogodilo?',
    opts: [
      'Žao mi je što je utakmica otkazana.',
      'Da barem otkažu utakmicu!',
      'Trebali bi otkazati utakmicu.',
      'Volio bih da otkažu utakmicu.',
    ],
    answer: 'Žao mi je što je utakmica otkazana.',
    tip: 'Žao mi je što + a fact: the match really was called off. Da barem and volio bih da are wishes about something that has not happened. Trebali bi is advice.',
  },
  {
    mode: 'zaljenje',
    q: 'Šteta što ____ ponijeli kupaće kostime.',
    en: 'It is a shame we did not bring our swimsuits.',
    opts: ['nismo', 'ne bismo', 'nećemo', 'nemamo'],
    answer: 'nismo',
    tip: 'The thing regretted really happened, so the clause is in the plain past: nismo ponijeli. Ne bismo is the conditional and nećemo the future. Nemamo is "we do not have", not an auxiliary.',
  },
  {
    mode: 'zaljenje',
    q: '____ mi je što kasnim.',
    en: 'I am sorry I am late.',
    opts: ['Žao', 'Šteta', 'Žalost', 'Žalim'],
    answer: 'Žao',
    tip: 'The personal regret is Žao mi je što…, with the person in the dative. Šteta is impersonal and takes no mi (Šteta što kasnim). Žalost is a noun, and žalim is a verb that cannot be followed by mi je.',
  },
  {
    mode: 'zaljenje',
    q: 'Bilo ____ je žao što ne može doći na vjenčanje.',
    en: 'She was sorry she could not come to the wedding.',
    cue: 'ona',
    opts: ['joj', 'je', 'nju', 'ona'],
    answer: 'joj',
    tip: 'The person who feels sorry is in the dative, and the dative of ona is joj: bilo joj je žao. Je and nju are accusative forms. Ona is the nominative, which žao never takes.',
  },
  {
    mode: 'zaljenje',
    lead: 'Nisam ti rekao istinu.',
    q: 'Kako se ispričati za to?',
    opts: [
      'Žao mi je što ti nisam rekao istinu.',
      'Žao sam što ti nisam rekao istinu.',
      'Šteta mi što ti nisam rekao istinu.',
      'Žao mi je ako ti ne bih rekao istinu.',
    ],
    answer: 'Žao mi je što ti nisam rekao istinu.',
    tip: 'Žao mi je što + the plain past, because it really happened. Žao sam copies English "I am sorry"; in Croatian the person is in the dative. Šteta takes no mi. The last option turns the fact into an unreal condition.',
  },
  {
    mode: 'zaljenje',
    q: 'Što znači „Šteta što je ljeto tako kratko“?',
    opts: [
      'It is a shame that summer is so short.',
      'I wish summer were shorter.',
      'Summer should have been short.',
      'Luckily, summer is short.',
    ],
    answer: 'It is a shame that summer is so short.',
    tip: 'Šteta što + a fact is regret about how things are. A wish would be Da barem… or Volio bih da…. "Should have" is trebao + the past, and šteta is never good news.',
  },
];
