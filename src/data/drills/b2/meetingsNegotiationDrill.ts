// src/data/drills/b2/meetingsNegotiationDrill.ts
//
// B2 MEETINGS AND NEGOTIATION — the drill for the `meetings-negotiation` lesson
// (B2 position 65).
//
// Three modes, nine items each:
//   rijec     — taking a turn: asking for the floor, interrupting politely,
//               nadovezati se na + accusative
//   prijedlog — Predlažem da / Što mislite o tome da + a clause in the present;
//               Mogli bismo + infinitive
//   dogovor   — disagreeing by conceding first, and closing the loop
//               (ostati pri + locative, Tko preuzima…?, Dogovoreno.)
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — thin: it has no meeting or negotiation unit.
//   What it has is the classroom debate that ends in an agreed conclusion: 17, 33, 56,
//   87 and 137 ("Organizirajte raspravu… Na kraju rasprave oblikujte zajedničke
//   zaključke"), and 53 (explain why you agree or disagree with a view).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — thin: no meeting phrases either.
//   Used here: 160–161 (predložiti with a da clause in the present: "Predložio sam
//   bratu da prodamo zajednički stan"), 62–63 (SUPROTNI KONEKTORI: a, no, ali,
//   međutim, naprotiv), 36–37 (zato, stoga, dakle and the closing connectors).
//
// Where the books and the lesson differ:
//   - Every fixed phrase (Oprostite što prekidam, Ako smijem, nadovezati se na,
//     Slažem se u načelu, Dogovoreno, Tko preuzima to?) comes from the lesson only;
//     neither book teaches them. The books supply the grammar underneath: predložiti
//     da + present, and the contrast connectors used to concede and then qualify.
//   - The lesson's closing phrase is ostati pri + locative. Ostati na tome is also
//     heard, so no item offers pri against na; the item asks for the case after pri.
//   - The Serbian-style da + present for the same subject is never offered. The da
//     clauses here are the ones the lesson teaches, where the subject changes
//     (I propose, we do).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MEETINGS_NEGOTIATION_MODE_LABELS: Record<string, string> = {
  rijec: '🙋 Uzeti riječ',
  prijedlog: '💡 Predlažem da…',
  dogovor: '🤝 Slaganje i dogovor',
};

export const MEETINGS_NEGOTIATION_DRILL_DATA: ModeDrillItem[] = [
  // ── rijec ─────────────────────────────────────────────────────────────────
  {
    mode: 'rijec',
    q: 'Htjela bih se nadovezati na ____ kolegice Marić.',
    en: 'I would like to build on what my colleague Ms. Marić pointed out.',
    cue: 'primjedba',
    opts: ['primjedbu', 'primjedbi', 'primjedbe', 'primjedbom'],
    answer: 'primjedbu',
    tip: 'Nadovezati se na takes the accusative: na primjedbu. Primjedbi is the dative or locative, the slip the lesson warns about (na tome instead of na to). Primjedbe is the genitive and primjedbom the instrumental.',
  },
  {
    mode: 'rijec',
    q: 'Koja rečenica pristojno traži riječ na sastanku?',
    opts: [
      'Mogu li samo nešto kratko dodati?',
      'Sad ja govorim.',
      'Pustite mene.',
      'To nije točno.',
    ],
    answer: 'Mogu li samo nešto kratko dodati?',
    tip: 'Mogu li nešto dodati? asks for the turn instead of taking it, and samo kratko promises to be brief. The other three grab the floor or attack the speaker, which is heard as rude in a Croatian meeting.',
  },
  {
    mode: 'rijec',
    q: '____ smijem, imam još jedno pitanje.',
    en: 'If I may, I have one more question.',
    opts: ['Ako', 'Da', 'Jer', 'Iako'],
    answer: 'Ako',
    tip: 'Ako smijem is the fixed polite opener, a real condition: if I am allowed. Da smijem would be an unreal condition and needs a conditional after it. Jer (because) and iako (although) do not make sense in front of a request.',
  },
  {
    mode: 'rijec',
    q: 'Oprostite ____ prekidam, ali vrijeme nam istječe.',
    en: 'Sorry to interrupt, but we are running out of time.',
    opts: ['što', 'da', 'koji', 'dok'],
    answer: 'što',
    tip: 'You apologize for a fact (you really are interrupting), and a fact after oprostite takes što. Da is not standard here. Koji is a relative pronoun with nothing to refer to, and dok would mean "while".',
  },
  {
    mode: 'rijec',
    q: 'Htio bih se nadovezati na ono ____ je gospodin Horvat rekao.',
    en: 'I would like to build on what Mr. Horvat said.',
    opts: ['što', 'koje', 'da', 'čega'],
    answer: 'što',
    tip: 'After the neuter pronoun ono the relative word is što: ono što je rekao. Koje would need a noun to refer to. Da would turn it into "that he said", and čega is the genitive, but rekao needs an object in the accusative.',
  },
  {
    mode: 'rijec',
    q: 'Smijem li ____ nešto pitati?',
    en: 'May I ask you something? (formal)',
    opts: ['vas', 'vama', 'vi', 'vaš'],
    answer: 'vas',
    tip: 'Pitati takes the person in the accusative: pitati vas. Vama is the dative, which English "ask you" tempts you into. Vi is the nominative and vaš is the possessive "your".',
  },
  {
    mode: 'rijec',
    q: 'U kojoj je rečenici padež iza „nadovezati se na“ točan?',
    opts: [
      'Nadovezala bih se na vaš prijedlog.',
      'Nadovezala bih se na vašem prijedlogu.',
      'Nadovezala bih se na vašeg prijedloga.',
      'Nadovezala bih se na vašim prijedlogom.',
    ],
    answer: 'Nadovezala bih se na vaš prijedlog.',
    tip: 'Nadovezati se na + accusative: na vaš prijedlog. Na vašem prijedlogu is the locative, which fits a place, not this verb. The genitive and the instrumental cannot follow na here at all.',
  },
  {
    mode: 'rijec',
    q: 'Prije nego što nastavimo, ____ li netko nešto dodati?',
    en: 'Before we go on, does anyone want to add something?',
    opts: ['želi', 'žele', 'želimo', 'želite'],
    answer: 'želi',
    tip: 'Netko is singular, so the verb is in the 3rd person singular: želi li netko. Žele is plural. Želimo and želite have the subjects mi and vi, which clash with netko.',
  },
  {
    mode: 'rijec',
    q: 'Na sastanku morate prekinuti kolegu, ali pristojno. Što ćete reći?',
    opts: [
      'Oprostite što prekidam, ali ovo je važno.',
      'Prestanite govoriti, ovo je važno.',
      'Šutite, ovo je važno.',
      'Vi to ne znate, ovo je važno.',
    ],
    answer: 'Oprostite što prekidam, ali ovo je važno.',
    tip: 'Oprostite što prekidam, ali… is the standard interruption: it apologizes first and then gives the reason. The other three are orders or a personal attack, and they end the discussion instead of joining it.',
  },

  // ── prijedlog ─────────────────────────────────────────────────────────────
  {
    mode: 'prijedlog',
    q: 'Predlažem da raspravu ____ za sljedeći tjedan.',
    en: 'I propose we leave the discussion for next week.',
    opts: ['ostavimo', 'ostaviti', 'bismo ostavili', 'ćemo ostaviti'],
    answer: 'ostavimo',
    tip: 'Predlažem da is followed by the present: da ostavimo. The subject changes (I propose, we leave), so an infinitive is not possible. A conditional or a future after predlažem da is the classic mistake, even though the action lies ahead.',
  },
  {
    mode: 'prijedlog',
    q: 'Predlažem da svaki odjel ____ svoj izvještaj do petka.',
    en: 'I propose that each department send its report by Friday.',
    opts: ['pošalje', 'poslati', 'bi poslao', 'će poslati'],
    answer: 'pošalje',
    tip: 'The clause after predlažem da takes the present, here the perfective present pošalje, because one finished act is meant. The infinitive cannot carry the new subject svaki odjel. The conditional and the future are not used after predlažem da.',
  },
  {
    mode: 'prijedlog',
    q: 'Što mislite o tome da ____ još jednog dobavljača?',
    en: 'What do you think about looking for one more supplier?',
    opts: ['potražimo', 'potražiti', 'bismo potražili', 'ćemo potražiti'],
    answer: 'potražimo',
    tip: 'Što mislite o tome da works like predlažem da: a clause in the present, da potražimo. The infinitive cannot follow da. The conditional and the future are the same mistake as after predlažem.',
  },
  {
    mode: 'prijedlog',
    q: 'Koji je prijedlog pravilno složen?',
    opts: [
      'Predlažem da napravimo kratku stanku.',
      'Predlažem da bismo napravili kratku stanku.',
      'Predlažem da ćemo napraviti kratku stanku.',
      'Predlažem da napraviti kratku stanku.',
    ],
    answer: 'Predlažem da napravimo kratku stanku.',
    tip: 'Predlažem da + present: da napravimo. The conditional (da bismo napravili) and the future (da ćemo napraviti) are the two errors the lesson names. Da can never be followed by an infinitive.',
  },
  {
    mode: 'prijedlog',
    q: 'Predložio sam kolegama da sastanak ____ na ponedjeljak.',
    en: 'I suggested to my colleagues that we move the meeting to Monday.',
    opts: ['premjestimo', 'premjestiti', 'bismo premjestili', 'premjestili'],
    answer: 'premjestimo',
    tip: 'Even when predložiti is in the past, the clause stays in the present: da premjestimo. The infinitive cannot follow da. The conditional is not used after predložiti da, and premjestili on its own has no auxiliary.',
  },
  {
    mode: 'prijedlog',
    q: 'Mogli bismo ____ rok za tjedan dana.',
    en: 'We could extend the deadline by a week.',
    opts: ['produžiti', 'produžimo', 'produžili', 'produžuje'],
    answer: 'produžiti',
    tip: 'Mogli bismo is a modal with the same subject, so it takes an infinitive: mogli bismo produžiti. Produžimo is the present that would follow predlažem da. Produžili and produžuje are finite forms that cannot follow a modal.',
  },
  {
    mode: 'prijedlog',
    lead: 'Predlažem da odgodimo odluku.',
    q: 'Tko bi prema ovom prijedlogu odgodio odluku?',
    opts: ['mi svi zajedno', 'samo govornik', 'samo vi, bez govornika', 'netko izvan sastanka'],
    answer: 'mi svi zajedno',
    tip: 'Predlažem is "I", but odgodimo is "we": the subject changes inside the sentence, and that is why Croatian needs da and a clause. Odgodim would be the speaker alone, odgodite would be "you", and odgode would be other people.',
  },
  {
    mode: 'prijedlog',
    q: 'Predlažem da se ____ u četvrtak u devet.',
    en: 'I propose we meet on Thursday at nine.',
    opts: ['nađemo', 'naći', 'bismo našli', 'ćemo naći'],
    answer: 'nađemo',
    tip: 'Predlažem da + present: da se nađemo. The infinitive naći cannot follow da. The conditional and the future are the usual English-based slips; the present covers the future here.',
  },
  {
    mode: 'prijedlog',
    q: 'Što mislite ____ da zaposlimo još jednu osobu?',
    en: 'What do you think about hiring one more person?',
    opts: ['o tome', 'o to', 'na tome', 'u to'],
    answer: 'o tome',
    tip: 'Misliti o takes the locative, and the clause hangs on the pronoun: o tome da… O to has the wrong case. Na tome and u to belong to other verbs (raditi na tome, vjerovati u to).',
  },

  // ── dogovor ───────────────────────────────────────────────────────────────
  {
    mode: 'dogovor',
    q: 'Slažem se u načelu, ____ brine me cijena.',
    en: 'I agree in principle, but the price worries me.',
    opts: ['ali', 'nego', 'jer', 'pa'],
    answer: 'ali',
    tip: 'Concede first, then qualify with ali. Nego is used only after a negative (ne ovo, nego ono). Jer would make the worry the reason for agreeing, and pa would make it a consequence.',
  },
  {
    mode: 'dogovor',
    q: 'Razumijem vaš stav, ____ rok je prekratak.',
    en: 'I understand your position; however, the deadline is too short.',
    opts: ['međutim', 'zato', 'dakle', 'naime'],
    answer: 'međutim',
    tip: 'Međutim introduces the opposing point after a concession. Zato and dakle draw a conclusion, as if the short deadline followed from understanding. Naime would explain the first half, not contrast with it.',
  },
  {
    mode: 'dogovor',
    q: 'Ne slažete se, ali ne želite svađu. Koji je odgovor najbolji?',
    opts: [
      'To je dobra ideja, no pitanje je imamo li dovoljno ljudi.',
      'Ne slažem se.',
      'To nema smisla.',
      'Vi uvijek griješite.',
    ],
    answer: 'To je dobra ideja, no pitanje je imamo li dovoljno ljudi.',
    tip: 'Conceding first (To je dobra ideja, no…) keeps the discussion open. A bare Ne slažem se lands much harder in a Croatian meeting than "I disagree" does in English. The last two reject the idea or the person outright.',
  },
  {
    mode: 'dogovor',
    q: 'Znači, ostajemo pri ____.',
    en: 'So, we are sticking with the first agreement.',
    cue: 'prvi dogovor',
    opts: ['prvom dogovoru', 'prvi dogovor', 'prvog dogovora', 'prvim dogovorom'],
    answer: 'prvom dogovoru',
    tip: 'Ostati pri takes the locative: pri prvom dogovoru. Prvi dogovor is the nominative or accusative. Prvog dogovora is the genitive and prvim dogovorom the instrumental; pri takes neither.',
  },
  {
    mode: 'dogovor',
    q: 'Kojom rečenicom voditelj traži osobu koja će obaviti zadatak?',
    opts: [
      'Tko preuzima to?',
      'Dogovoreno.',
      'Vraćamo se na to sljedeći put.',
      'Slažem se u načelu.',
    ],
    answer: 'Tko preuzima to?',
    tip: 'Tko preuzima to? asks who is taking the task on. Dogovoreno confirms an agreement, Vraćamo se na to sljedeći put postpones the item, and Slažem se u načelu is a concession before a "but".',
  },
  {
    mode: 'dogovor',
    q: 'Što znači „Dogovoreno.“ na kraju rasprave?',
    opts: [
      'Agreed: the matter is settled.',
      'Let us start negotiating.',
      'I do not agree.',
      'We will see about that later.',
    ],
    answer: 'Agreed: the matter is settled.',
    tip: 'Dogovoreno closes the loop: it turns a discussion into a decision. It does not open negotiations, it is the opposite of a refusal, and postponing is said with Vraćamo se na to sljedeći put.',
  },
  {
    mode: 'dogovor',
    q: 'Danas nemamo vremena za tu točku. ____ se na nju sljedeći put.',
    en: 'We do not have time for that item today. We will come back to it next time.',
    opts: ['Vraćamo', 'Vraćaju', 'Vratili', 'Vratiti'],
    answer: 'Vraćamo',
    tip: 'The speaker closes on behalf of the group: vraćamo se, the present used for a fixed plan. Vraćaju se would be "they". Vratili has no auxiliary, and the infinitive vratiti cannot be the verb of the sentence.',
  },
  {
    mode: 'dogovor',
    q: 'Nisam sigurna da ____ to najbolje rješenje.',
    en: 'I am not sure that is the best solution.',
    opts: ['je', 'bi', 'biti', 'bude'],
    answer: 'je',
    tip: 'The soft disagreement is Nisam siguran da je to najbolje rješenje, with the plain present je. Bi would need a participle (da bi to bilo). Biti is an infinitive and bude belongs after ako or kad.',
  },
  {
    mode: 'dogovor',
    q: 'Slažem se ____ vama, ali imam jednu primjedbu.',
    en: 'I agree with you, but I have one remark.',
    opts: ['s', 'sa', 'na', 'o'],
    answer: 's',
    tip: 'Slagati se s + instrumental: s vama. The longer form sa is standard only before s, š, z, ž and in sa mnom, so not before vama. Na and o do not go with slagati se when a person follows.',
  },
];
