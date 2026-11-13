// src/data/drills/b2/conditionalB2Drill.ts
//
// B2 THE CONDITIONAL — the drill for the `conditional` lesson (B2 position 36).
//
// The lesson used to be routed to the cloze bank, whose 66 sentences contain no
// conditional at all (B2 book comparison, 2026-11-13). This bank drills exactly what
// the lesson teaches: the auxiliary by person (bih, bi, bi, bismo, biste, bi) with an
// agreeing participle, the clitic never opening its clause, polite requests (Biste li
// mi mogli…?) and wishes, and present hypotheticals with kad bih / da + present.
//
// NOT here, on purpose: da + perfect for the unreal PAST (Da sam znao, rekao bih ti).
// That is lesson #47 `unreal-conditions`, and it has its own drill.
//
// Where a bare form could belong to two persons (Volio bi = you / he would love), the
// subject is written in, so exactly one option is right.
//
// Three modes, eight items each:
//   oblici — the auxiliary by person and the participle's gender
//   molbe  — polite requests, wishes and advice
//   uvjet  — present hypotheticals: kad bih, da + present

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONDITIONAL_B2_MODE_LABELS: Record<string, string> = {
  oblici: '🧩 Oblici',
  molbe: '🙏 Molbe i želje',
  uvjet: '💭 Kad bih…',
};

export const CONDITIONAL_B2_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Mi ____ rado došli na večeru.',
    en: 'We would gladly come to dinner.',
    opts: ['bismo', 'biste', 'bi', 'bih'],
    answer: 'bismo',
    tip: 'mi → bismo: the conditional auxiliary changes by person.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ to mogli bolje objasniti.',
    en: 'You (all) could explain that better.',
    opts: ['biste', 'bismo', 'bih', 'bi'],
    answer: 'biste',
    tip: 'vi → biste.',
  },
  {
    mode: 'oblici',
    q: 'Ja ____ radije ostala kod kuće.',
    en: 'I (a woman) would rather stay at home.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'ja → bih, and the participle agrees with the speaker: ostala.',
  },
  {
    mode: 'oblici',
    q: 'Oni ____ došli, ali nemaju vremena.',
    en: 'They would come, but they have no time.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'oni → bi, the same form as on and ona.',
  },
  {
    mode: 'oblici',
    q: 'Sestra bi ____ s nama, ali radi.',
    en: 'My sister would go with us, but she is working.',
    opts: ['išla', 'išao', 'išli', 'išle'],
    answer: 'išla',
    tip: 'The participle agrees with the subject: sestra → feminine singular išla.',
  },
  {
    mode: 'oblici',
    q: 'Djeca bi se ____ cijeli dan.',
    en: 'The children would play all day.',
    opts: ['igrala', 'igrao', 'igrali', 'igrale'],
    answer: 'igrala',
    tip: 'djeca takes a participle in -a: djeca bi se igrala.',
  },
  {
    mode: 'oblici',
    q: 'Koja je rečenica ispravna?',
    en: 'I would like to book a table.',
    opts: [
      'Htio bih rezervirati stol.',
      'Bih htio rezervirati stol.',
      'Htio ću rezervirati stol.',
      'Htio bi ja rezervirati stol.',
    ],
    answer: 'Htio bih rezervirati stol.',
    tip: 'bih is a clitic: it cannot open the sentence, and a polite wish is the conditional, not the future.',
  },
  {
    mode: 'oblici',
    q: 'Ti ____ trebao više spavati.',
    en: 'You should sleep more.',
    opts: ['bi', 'bih', 'biste', 'bismo'],
    answer: 'bi',
    tip: 'ti → bi. Trebao bi = you should.',
  },

  // ── molbe ─────────────────────────────────────────────────────────────────
  {
    mode: 'molbe',
    q: '____ li mi mogli pomoći s kovčegom?',
    en: 'Could you help me with the suitcase? (formal)',
    opts: ['Biste', 'Bismo', 'Bih', 'Bi'],
    answer: 'Biste',
    tip: 'Biste li mi mogli…? — the polite request, Vi-form.',
  },
  {
    mode: 'molbe',
    q: 'Biste li mi ____ preporučiti dobar restoran?',
    en: 'Could you recommend a good restaurant?',
    opts: ['mogli', 'moći', 'možete', 'mogu'],
    answer: 'mogli',
    tip: 'The conditional needs its participle: biste … mogli. Without it there is no verb.',
  },
  {
    mode: 'molbe',
    q: 'Ja ____ htjela kavu s mlijekom, molim.',
    en: 'I (a woman) would like a coffee with milk, please.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'Htjela bih — the polite way to ask for something.',
  },
  {
    mode: 'molbe',
    q: 'Bio bih Vam ____ na brzom odgovoru.',
    en: 'I would be grateful for a quick reply.',
    opts: ['zahvalan', 'zahvalno', 'zahvalni', 'zahvalnu'],
    answer: 'zahvalan',
    tip: 'The adjective agrees with the (male) speaker: zahvalan. A woman writes Bila bih Vam zahvalna.',
  },
  {
    mode: 'molbe',
    q: 'Što ____ Vi preporučili za večeru?',
    en: 'What would you recommend for dinner? (formal)',
    opts: ['biste', 'bismo', 'bih', 'bi'],
    answer: 'biste',
    tip: 'Vi → biste, even when you address one person politely.',
  },
  {
    mode: 'molbe',
    q: 'Ja ____ volio posjetiti Dubrovnik.',
    en: 'I would love to visit Dubrovnik.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'A wish: volio / voljela bih + infinitive.',
  },
  {
    mode: 'molbe',
    q: 'Na tvom mjestu, ja ____ pričekao.',
    en: 'In your place, I would wait.',
    opts: ['bih', 'bismo', 'ću', 'biste'],
    answer: 'bih',
    tip: 'Advice from your own point of view: ja bih + participle.',
  },
  {
    mode: 'molbe',
    q: 'Ja ____ rekao da je to točno.',
    en: 'I would say that is right.',
    opts: ['bih', 'bi', 'biste', 'bismo'],
    answer: 'bih',
    tip: 'Rekao bih da… softens an opinion.',
  },

  // ── uvjet ─────────────────────────────────────────────────────────────────
  {
    mode: 'uvjet',
    q: 'Kad ____ imao vremena, učio bih više.',
    en: 'If I had time, I would study more.',
    opts: ['bih', 'bismo', 'ću', 'biste'],
    answer: 'bih',
    tip: 'kad bih + participle: an imagined condition, with the conditional in both halves.',
  },
  {
    mode: 'uvjet',
    q: 'Da ____ više novca, kupio bih auto.',
    en: 'If I had more money, I would buy a car.',
    opts: ['imam', 'imao', 'imati', 'imaj'],
    answer: 'imam',
    tip: 'da + present, then the conditional: Da imam…, kupio bih.',
  },
  {
    mode: 'uvjet',
    q: 'Kad bismo krenuli ranije, ____ bismo prije mraka.',
    en: 'If we set off earlier, we would arrive before dark.',
    opts: ['stigli', 'stići', 'stignemo', 'stigao'],
    answer: 'stigli',
    tip: 'mi → bismo with a plural participle: stigli.',
  },
  {
    mode: 'uvjet',
    q: 'Da imaš vremena, ____ bismo popiti kavu.',
    en: 'If you had time, we could have a coffee.',
    opts: ['mogli', 'možemo', 'moći', 'mogao'],
    answer: 'mogli',
    tip: 'The main clause is conditional: mogli bismo.',
  },
  {
    mode: 'uvjet',
    q: 'Ja bih radije ostala kod kuće nego ____ na zabavu.',
    en: 'I (a woman) would rather stay at home than go to the party.',
    opts: ['išla', 'išao', 'išle', 'idem'],
    answer: 'išla',
    tip: 'radije bih … nego … : both participles agree with the speaker.',
  },
  {
    mode: 'uvjet',
    q: 'Kad bih ____ u Zagrebu, šetao bih Gornjim gradom.',
    en: 'If I lived in Zagreb, I would walk around the Upper Town.',
    opts: ['živio', 'živim', 'živjeti', 'živ'],
    answer: 'živio',
    tip: 'kad bih + participle: živio.',
  },
  {
    mode: 'uvjet',
    q: 'Koja je rečenica ispravna?',
    en: 'If I had time, I would come.',
    opts: [
      'Kad bih imao vremena, došao bih.',
      'Kad bih imao vremena, došao sam.',
      'Kad imao bih vremena, došao bih.',
      'Kad bih imao vremena, bih došao.',
    ],
    answer: 'Kad bih imao vremena, došao bih.',
    tip: 'bih follows kad in the first clause and the participle in the second: it never opens a clause.',
  },
  {
    mode: 'uvjet',
    q: 'Da ____ na tvom mjestu, pričekao bih.',
    en: 'If I were in your place, I would wait.',
    opts: ['sam', 'bih', 'budem', 'bio'],
    answer: 'sam',
    tip: 'da + the present of biti (sam). Da bih means "in order to".',
  },
];
