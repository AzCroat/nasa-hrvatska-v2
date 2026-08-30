// src/data/drills/legalDrill.ts
//
// C1 LEGAL & ADMINISTRATIVE CROATIAN — the drill for the `law-administration`
// lesson.
//
// This is the register a learner meets whether they want it or not: a rental
// contract, a residence decision, a court judgment. It is nominal and
// impersonal ON PURPOSE, and the way to read it is to unpack it back into
// clauses — *Smatra se da…* means somebody will treat it as true, *Stupa na
// snagu…* means it starts to apply.
//
// Two prepositions carry the citations and take DIFFERENT cases: *temeljem*
// plus the genitive, *sukladno* plus the dative. They appear in the same
// sentence constantly and the pairing is not guessable.
//
// And the practical instruction the lesson gives is worth drilling on its own:
// FIND THE ROK FIRST. A missed deadline in Croatian administration is usually
// irreversible, and the deadline is the one thing in the document that cannot
// be argued about later.
//
// Three modes:
//   nazivlje — the documents and what each one is
//   rekcija  — temeljem, sukladno, and the citation format
//   raspakiraj — unpacking the impersonal style, and the deadline

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const LEGAL_MODE_LABELS: Record<string, string> = {
  nazivlje: '⚖️ Nazivlje',
  rekcija: '📑 Temeljem i sukladno',
  raspakiraj: '🔓 Raspakiravanje',
};

export const LEGAL_DRILL_DATA: ModeDrillItem[] = [
  // ── nazivlje ──────────────────────────────────────────────────────────────
  {
    mode: 'nazivlje',
    q: 'Što je "rješenje" u upravnom postupku?',
    en: 'What is a rješenje?',
    opts: ['upravna odluka', 'sudska presuda', 'rješenje zadatka', 'prijedlog zakona'],
    answer: 'upravna odluka',
    tip: 'An administrative decision. A court delivers a presuda instead.',
  },
  {
    mode: 'nazivlje',
    q: 'Što je "presuda"?',
    en: 'What is a presuda?',
    opts: ['sudska odluka', 'upravna odluka', 'propis', 'žalba'],
    answer: 'sudska odluka',
    tip: 'From presuditi. The pair with rješenje is worth keeping straight.',
  },
  {
    mode: 'nazivlje',
    q: 'Što je "propis"?',
    en: 'What is a propis?',
    opts: ['regulation', 'a prescription', 'a proposal', 'a procedure'],
    answer: 'regulation',
    tip: 'From propisati, to prescribe in the legal sense.',
  },
  {
    mode: 'nazivlje',
    q: 'Što je "uredba"?',
    en: 'What is an uredba?',
    opts: ['decree, ordinance', 'an office', 'an arrangement', 'an editorial'],
    answer: 'decree, ordinance',
    tip: 'Issued by the Government rather than passed by the Sabor.',
  },
  {
    mode: 'nazivlje',
    q: 'Što je "žalba"?',
    en: 'What is a žalba?',
    opts: ['appeal', 'complaint to a shop', 'grief', 'a petition'],
    answer: 'appeal',
    tip: 'Uložiti žalbu — to lodge an appeal, and there is always a rok on it.',
  },
  {
    mode: 'nazivlje',
    q: 'Što je "stavak"?',
    en: 'What is a stavak?',
    opts: ['paragraph of an article', 'a stance', 'an item on a list', 'a clause of a contract'],
    answer: 'paragraph of an article',
    tip: 'A članak has stavci; a stavak may have točke.',
  },
  {
    mode: 'nazivlje',
    q: 'Tko su "ugovorne strane"?',
    en: 'Who are the ugovorne strane?',
    opts: ['stranke koje sklapaju ugovor', 'stranice ugovora', 'svjedoci', 'odvjetnici'],
    answer: 'stranke koje sklapaju ugovor',
    tip: 'The contracting parties — strana here is a side, not a page.',
  },
  {
    mode: 'nazivlje',
    q: 'Što znači "stupa na snagu"?',
    en: 'What does it mean?',
    opts: ['comes into force', 'is repealed', 'is proposed', 'is enforced by police'],
    answer: 'comes into force',
    tip: 'And na snazi is "in force".',
  },

  // ── rekcija ───────────────────────────────────────────────────────────────
  {
    mode: 'rekcija',
    q: 'Temeljem ____ 5. (članak)',
    en: 'pursuant to article 5',
    opts: ['članka', 'članku', 'članak', 'člankom'],
    answer: 'članka',
    tip: 'TEMELJEM takes the GENITIVE.',
  },
  {
    mode: 'rekcija',
    q: 'Sukladno ____ zakona. (odredbe)',
    en: 'in accordance with the provisions of the law',
    opts: ['odredbama', 'odredaba', 'odredbe', 'odredbama su'],
    answer: 'odredbama',
    tip: 'SUKLADNO takes the DATIVE. The pair with temeljem is the whole rule.',
  },
  {
    mode: 'rekcija',
    q: 'Koji padež traži "temeljem"?',
    en: 'Which case after temeljem?',
    opts: ['genitiv', 'dativ', 'lokativ', 'instrumental'],
    answer: 'genitiv',
    tip: 'temeljem članka, temeljem odluke.',
  },
  {
    mode: 'rekcija',
    q: 'Koji padež traži "sukladno"?',
    en: 'Which case after sukladno?',
    opts: ['dativ', 'genitiv', 'akuzativ', 'lokativ'],
    answer: 'dativ',
    tip: 'sukladno odredbama, sukladno zakonu.',
  },
  {
    mode: 'rekcija',
    q: 'Što znači zapis "čl. 5. st. 2."?',
    en: 'What does that citation mean?',
    opts: ['članak 5, stavak 2', 'članak 5 do 2', 'stranica 5, stavak 2', 'članak 52'],
    answer: 'članak 5, stavak 2',
    tip: 'And the full stops mark ordinals — peti, drugi.',
  },
  {
    mode: 'rekcija',
    q: 'Zašto točke iza brojeva?',
    en: 'Why the full stops?',
    opts: ['označavaju redne brojeve', 'kratice su', 'razdvajaju', 'nema razloga'],
    answer: 'označavaju redne brojeve',
    tip: 'The same convention as a date: 5. svibnja.',
  },
  {
    mode: 'rekcija',
    q: 'U roku ____ 15 dana.',
    en: 'within 15 days',
    opts: ['od', 'do', 'za', 'nakon'],
    answer: 'od',
    tip: 'u roku OD plus the genitive — a fixed administrative formula.',
  },
  {
    mode: 'rekcija',
    q: 'Prema ____ , zahtjev je odbijen. (rješenje)',
    en: 'According to the decision, the request was refused.',
    opts: ['rješenju', 'rješenja', 'rješenje', 'rješenjem'],
    answer: 'rješenju',
    tip: 'prema plus the dative — a third preposition, a third case.',
  },

  // ── raspakiraj ────────────────────────────────────────────────────────────
  {
    mode: 'raspakiraj',
    q: '"Smatra se da je zahtjev uredan." Tko smatra?',
    en: 'Who deems it so?',
    opts: ['nije imenovano', 'stranka', 'sud', 'ministar'],
    answer: 'nije imenovano',
    tip: 'The impersonal se — and the effect is that the rule applies to everybody.',
  },
  {
    mode: 'raspakiraj',
    q: 'Kako se "Smatra se da…" raspakira?',
    en: 'Unpacked:',
    opts: [
      'tijelo će s time postupati kao s istinom',
      'netko misli da je tako',
      'to je dokazano',
      'to je sporno',
    ],
    answer: 'tijelo će s time postupati kao s istinom',
    tip: 'A deeming provision — it fixes a fact for the purposes of the procedure.',
  },
  {
    mode: 'raspakiraj',
    q: 'Što treba pronaći prvo u svakom dopisu?',
    en: 'What do you look for first?',
    opts: ['rok', 'potpis', 'broj predmeta', 'pravnu osnovu'],
    answer: 'rok',
    tip: 'A missed deadline is usually irreversible; everything else can be argued.',
  },
  {
    mode: 'raspakiraj',
    q: 'Zašto je stil nominalan i bezličan?',
    en: 'Why the nominal, impersonal style?',
    opts: ['pravilo vrijedi za svakoga jednako', 'iz navike', 'radi kratkoće', 'da bude nejasno'],
    answer: 'pravilo vrijedi za svakoga jednako',
    tip: 'It is deliberate rather than obstructive — though the effect is both.',
  },
  {
    mode: 'raspakiraj',
    q: '"Podnositelj zahtjeva dužan je priložiti presliku." Što se traži?',
    en: 'What is required?',
    opts: [
      'da priložite presliku',
      'da dođete osobno',
      'da platite pristojbu',
      'da napišete žalbu',
    ],
    answer: 'da priložite presliku',
    tip: 'Dužan je — is obliged to. That phrase is the instruction.',
  },
  {
    mode: 'raspakiraj',
    q: 'Što znači "dostaviti"?',
    en: 'What does dostaviti mean?',
    opts: ['to submit or deliver', 'to obtain', 'to complete', 'to sign'],
    answer: 'to submit or deliver',
    tip: 'dostaviti dokumentaciju — and it is the verb every form uses.',
  },
  {
    mode: 'raspakiraj',
    q: 'Što znači "pravomoćan"?',
    en: 'What does pravomoćan mean?',
    opts: ['final, no longer appealable', 'lawful', 'enforceable by police', 'provisional'],
    answer: 'final, no longer appealable',
    tip: 'Once a decision is pravomoćna, the rok for appeal has run out.',
  },
  {
    mode: 'raspakiraj',
    q: 'Rok teče ____ dana dostave.',
    en: 'The deadline runs from the day of delivery.',
    opts: ['od', 'do', 'za', 'u'],
    answer: 'od',
    tip: 'od dana dostave — genitive, and the date of delivery is what starts it.',
  },
];
