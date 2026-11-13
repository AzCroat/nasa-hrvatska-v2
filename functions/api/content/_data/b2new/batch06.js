// functions/api/content/_data/b2new/batch06.js
//
// New B2 lessons, batch 06 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 8–10:
//   perfective-present      (39) — the perfective present and future II in ako/kad/čim/dok ne clauses
//   coordinate-clauses      (41) — independent compound sentences, a / ali / nego, commas, clitics
//   consumerism-advertising (44) — consumer habits, Buy Nothing Day, the language of advertising
//   dependent-clauses-b2    (46) — causal, purpose, manner and conditional clauses
//   film-and-music          (49) — the Zagreb School of Animated Film, festivals, music therapy
//
// Authoring notes:
//   - "pošto" is TEMPORAL (after) in careful Croatian; causal "since" is budući da. Causal
//     pošto is heard, so it is explained, never offered as a wrong option.
//   - After i and a a clitic waits for the next word (i dao sam mu, a on mi je rekao);
//     after ali, pa, te, nego, već it may follow straight away (ali sam se razbolio).
//   - Dialect words are labelled as dialect wherever they appear.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'perfective-present',
    masterOrder: 39,
    prerequisites: ['real-conditions', 'time-clauses', 'conditional'],
    objectives: [
      'Use the perfective present after ako, kad, čim and dok ne for a future event',
      'Form future II (budem došao) and know it means the same in those clauses',
      'Keep the perfective present out of a main clause about now',
    ],
  },
  {
    id: 'coordinate-clauses',
    masterOrder: 41,
    prerequisites: ['clitics', 'perfective-present'],
    objectives: [
      'Join two independent clauses with i, pa, te, a, ali, nego, već, ili, samo and zato',
      'Choose between a, ali and nego',
      'Place the comma and the clitics correctly after a conjunction',
    ],
  },
  {
    id: 'consumerism-advertising',
    masterOrder: 44,
    prerequisites: ['coordinate-clauses'],
    objectives: [
      'Talk about shopping habits, discounts and consumer fever',
      'Recognise the persuasive language of advertising',
      'Tell colloquial shopping words from their standard equivalents',
    ],
  },
  {
    id: 'dependent-clauses-b2',
    masterOrder: 46,
    prerequisites: ['concession-contrast', 'cause-purpose', 'consumerism-advertising'],
    objectives: [
      'Give a reason with jer, zato što and budući da',
      'State a purpose with da and kako bi, agreeing bih, bi, bismo, biste',
      'Describe manner with kao što and set a condition with ako, kad bi and da',
    ],
  },
  {
    id: 'film-and-music',
    masterOrder: 49,
    prerequisites: ['dependent-clauses-b2'],
    objectives: [
      'Talk about film and music festivals in Croatia and Europe',
      'Know the Zagreb School of Animated Film and its Oscar',
      'Recognise dialect words in Croatian films and say what they mean',
    ],
  },
];

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // The Perfective Present
  // ─────────────────────────────────────────────────────────
  {
    id: 'perfective-present',
    title: 'When I Finish: the Perfective Present',
    subtitle: 'Ako dođeš, kad završim — and future II beside it',
    icon: '⏭️',
    level: 'B2',
    duration: '~6 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'A Present Tense That Points Forward',
        body: 'You already know two futures: future I (javit ću ti) and future II (kad budem završio). This lesson shows a third way Croatians talk about a future event in a clause with ako (if), kad (when), čim (as soon as) or dok ne (until): the present tense of a PERFECTIVE verb. Kad završim, javit ću ti. — When I finish, I will let you know. It is the everyday choice, and the theme is money: salaries, savings, loans.',
        icon: '⏭️',
      },
      {
        type: 'rule',
        title: 'A Perfective Verb Has No "Now"',
        body: 'A perfective verb sees an action as one finished whole: doći (to arrive), završiti (to finish), kupiti (to buy). Something whole cannot be "in progress", so the present tense of a perfective verb cannot describe what is happening at this moment. For that you use the imperfective partner: Sad dolazim. (I am coming now.) The perfective present lives in dependent clauses, where it points to a future (or a repeated) event: Kad dođem kući, nazvat ću te.',
        highlight: 'Kad dođem kući, nazvat ću te.',
      },
      {
        type: 'table',
        title: 'Two Ways to Say the Same Thing',
        headers: ['Perfective present', 'Future II', 'English'],
        rows: [
          ['Ako dođeš ranije, …', 'Ako budeš došao ranije, …', 'If you come earlier, …'],
          ['Kad završim, …', 'Kad budem završio, …', 'When I finish, …'],
          ['Čim stignemo, …', 'Čim budemo stigli, …', 'As soon as we arrive, …'],
          ['Kad dobijem plaću, …', 'Kad budem dobio plaću, …', 'When I get my salary, …'],
          ['Ako uštedite, …', 'Ako budete uštedjeli, …', 'If you (all) save, …'],
        ],
      },
      {
        type: 'rule',
        title: 'Future II, Briefly Again',
        body: 'Future II is the present of biti in its "budem" form plus the past participle: budem, budeš, bude, budemo, budete, budu + došao / došla / došli. It never stands alone — only after ako, kad, čim, dok ne and similar words. With a perfective verb both forms mean the same and both are standard; the perfective present is more common in speech, future II a shade more formal. With an imperfective verb such as imati, future II is the clear way to mark one future occasion: Kad budem imao vremena, nazvat ću te.',
        highlight: 'budem, budeš, bude, budemo, budete, budu',
      },
      {
        type: 'rule',
        title: 'The Main Clause Is Future I or an Imperative',
        body: 'The clause with ako or kad sets the scene; the main clause says what will happen, in future I, or what to do, in the imperative. Ako uštediš dovoljno, otići ćemo na more. Ako dođeš ranije, nazovi me. Watch the spelling of future I: an infinitive in -ti loses its i when ću follows it (javit ću, platit ću), but stays whole when ću comes first (ću ti javiti). Verbs in -ći keep everything: doći ću.',
        highlight: 'javit ću, platit ću',
      },
      {
        type: 'rule',
        title: 'Čim and Dok Ne',
        body: 'Čim (as soon as) takes the perfective present just like kad: Čim stignem, javit ću se. Dok ne means "until" and also takes a perfective verb: Neću otići dok ne završim. (I will not leave until I finish.) The ne in dok ne is part of the conjunction — the sentence is not negative in meaning.',
        highlight: 'Neću otići dok ne završim.',
      },
      {
        type: 'example',
        title: 'Plans with Money',
        items: [
          {
            hr: 'Kad dobijem plaću, platit ću sve račune.',
            en: 'When I get my salary, I will pay all the bills.',
            note: 'dobijem — perfective present after kad',
          },
          {
            hr: 'Ako uštediš dovoljno novca, možeš ljeto provesti na moru.',
            en: 'If you save enough money, you can spend the summer by the sea.',
            note: 'uštediš — perfective present after ako',
          },
          {
            hr: 'Čim prodamo stan, kupit ćemo kuću na selu.',
            en: 'As soon as we sell the flat, we will buy a house in the country.',
            note: 'prodamo — perfective present after čim',
          },
          {
            hr: 'Neću ti vratiti knjigu dok je ne pročitam.',
            en: 'I will not give the book back to you until I have read it.',
            note: 'pročitam — dok ne takes a perfective verb',
          },
          {
            hr: 'Kad budem završio fakultet, tražit ću posao u banci.',
            en: 'When I finish university, I will look for a job in a bank.',
            note: 'budem završio — future II, the same meaning as kad završim',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ako mi posudiš sto eura, vratit ću ti ih do petka.',
            en: 'If you lend me a hundred euros, I will pay you back by Friday.',
            note: 'posudiš — perfective present; vratit ću ti ih — ću, then dative, then accusative',
          },
          {
            hr: 'Kad budeš imao vremena, pogledaj ovu ponudu.',
            en: 'When you have time, have a look at this offer.',
            note: 'budeš imao — imati is imperfective, so future II marks one occasion',
          },
          {
            hr: 'Javi mi čim stigneš u banku.',
            en: 'Let me know as soon as you get to the bank.',
            note: 'stigneš — perfective present after čim',
          },
          {
            hr: 'Ako cijene opet porastu, morat ćemo manje trošiti.',
            en: 'If prices go up again, we will have to spend less.',
            note: 'porastu — the perfective porasti in the present',
          },
          {
            hr: 'Kad dobijemo kredit, počet ćemo graditi kuću.',
            en: 'When we get the loan, we will start building the house.',
            note: 'dobijemo — perfective present after kad',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Kad ___ ručak, otići ćemo u šetnju." (When we finish lunch, we will go for a walk.)',
        options: ['završimo', 'završavamo', 'završit ćemo', 'završiti'],
        correct: 0,
        explanation:
          'A single future event after kad: the perfective present, završimo. "Završit ćemo" is future I, which belongs in the main clause, and "završavamo" would describe a repeated or ongoing action.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence is NOT standard Croatian?',
        options: [
          'Kad završim, javit ću ti.',
          'Kad budem završio, javit ću ti.',
          'Kad budem završim, javit ću ti.',
          'Čim završim, javit ću ti.',
        ],
        correct: 2,
        explanation:
          '"Budem" needs the past participle (završio), not the present. The other three are all standard: the perfective present and future II mean the same here.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is mixing the two forms: "Kad budem završim" — future II takes the participle, kad budem završio, or drop budem: Kad završim, javit ću ti. The second is putting future I in the time clause: "Kad završit ću, javit ću ti" — the time clause takes the perfective present. The third is an imperfective present for one future event: "Kad dolazim kući, nazvat ću te" — use the perfective, kad dođem kući. And remember that in standard Croatian a perfective present does not stand alone as a main clause: for "I will come tomorrow" say Doći ću sutra.',
        highlight: 'Kad završim, javit ću ti.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ako ___ ranije, nazovi me." (If you arrive earlier, call me.)',
            options: ['dođi', 'dođeš', 'doći ćeš', 'doći'],
            correct: 1,
            explanation:
              'After ako, a single future event takes the perfective present: dođeš. "Dođi" is the imperative and "doći ćeš" is future I, which belongs in a main clause.',
          },
          {
            q: 'Which is future II of "završiti" for "ja" (a man speaking)?',
            options: ['bit ću završio', 'budem završiti', 'budem završio', 'sam završio'],
            correct: 2,
            explanation:
              'Future II is budem + the past participle: budem završio. "Sam završio" is the perfect, and "budem završiti" uses the infinitive.',
          },
          {
            q: 'Complete: "Neću otići dok ne ___ zadaću." (I will not leave until I write the homework.)',
            options: ['napišem', 'napisati', 'napisat ću', 'napisao'],
            correct: 0,
            explanation:
              'Dok ne (until) takes the perfective present: dok ne napišem. The ne is part of the conjunction.',
          },
          {
            q: 'Why is "Sutra dođem kod tebe" not standard Croatian?',
            options: [
              'kod tebe should be kod tebi',
              'A perfective present cannot stand alone as a main clause; say Doći ću sutra kod tebe',
              'sutra must come at the end',
              'dođem should be došao',
            ],
            correct: 1,
            explanation:
              'The perfective present needs a clause with ako, kad, čim or dok ne to point to the future. On its own, the future is future I: Doći ću sutra.',
          },
          {
            q: 'In "Kad budeš došao, javi se", what is "budeš došao"?',
            options: ['the perfect', 'conditional I', 'future I', 'future II'],
            correct: 3,
            explanation:
              'Budem / budeš / bude + the past participle is future II. It only appears after words like kad, ako and čim.',
          },
          {
            q: 'Which sentence means the same as "Čim stignem, nazvat ću te"?',
            options: [
              'Čim sam stigao, nazvao sam te.',
              'Čim budem stigao, nazvat ću te.',
              'Čim stižem, nazvao bih te.',
              'Čim stigao, nazvat ću te.',
            ],
            correct: 1,
            explanation:
              'Future II (budem stigao) and the perfective present (stignem) mean the same after čim. The first option is about the past.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Perfective Present — Key Takeaways',
        points: [
          'After ako, kad, čim and dok ne, a perfective present points to a future event',
          'Future II (budem završio) means the same there and is a shade more formal',
          'The main clause is future I or an imperative: Kad završim, javit ću ti',
          'A perfective present never describes what is happening right now',
          'For one future occasion with an imperfective verb, use future II: kad budem imao vremena',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Coordinate Clauses
  // ─────────────────────────────────────────────────────────
  {
    id: 'coordinate-clauses',
    title: 'And, But, Or, So: Compound Sentences',
    subtitle: 'i, pa, te · a, ali, nego, već · ili · samo · zato',
    icon: '🔗',
    level: 'B2',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Two Sentences That Stand on Their Own',
        body: 'A compound sentence joins two clauses that could each stand alone: Htio sam kupiti jaknu, ali bila je preskupa. The conjunction says how the two relate — adding, contrasting, choosing, excluding or concluding. Croatian has more of these words than English, and three of them, a, ali and nego, all translate as "but" or "and" while meaning quite different things. The examples are about shopping.',
        icon: '🔗',
      },
      {
        type: 'table',
        title: 'Five Kinds of Compound Sentence',
        headers: ['Kind', 'Conjunctions', 'What it does'],
        rows: [
          ['coordinate (sastavne)', 'i, pa, te', 'adds; pa adds what came next'],
          ['adversative (suprotne)', 'a, ali, nego, već, no', 'contrasts or corrects'],
          ['disjunctive (rastavne)', 'ili, ili… ili', 'offers a choice'],
          ['exclusive (isključne)', 'samo, jedino', 'names the one exception'],
          ['conclusive (zaključne)', 'dakle, stoga, zato', 'draws a conclusion'],
        ],
      },
      {
        type: 'rule',
        title: 'A, Ali or Nego?',
        body: '"A" puts two things side by side without any conflict: Ja plaćam karticom, a brat plaća gotovinom. "Ali" says the second clause goes against what you would expect from the first: Htio sam kupiti jaknu, ali bila je preskupa. "Nego" (and its synonym "već") CORRECTS something just denied — it only comes after a negation: Ne kupujem na internetu, nego u malim dućanima. "No" means the same as ali and belongs to written, bookish style.',
        highlight: 'Ne kupujem na internetu, nego u malim dućanima.',
      },
      {
        type: 'rule',
        title: 'I, Pa, Te; Samo; Zato',
        body: '"I" simply adds. "Pa" adds what came next, or a consequence: Prvo smo razgledali izloge pa smo ušli u knjižaru. "Te" means "and" in formal writing. "Samo" and "jedino" name the one exception: Cipele su lijepe, samo su malo uske. "Dakle", "stoga" and "zato" draw a conclusion: Popust traje do nedjelje, stoga ću kupiti televizor ovaj tjedan.',
        highlight: 'Cipele su lijepe, samo su malo uske.',
      },
      {
        type: 'rule',
        title: 'Where the Comma Goes',
        body: 'Croatian puts a comma before the contrasting, excluding and concluding words: a, ali, nego, već, no, samo, jedino, dakle, stoga, zato. It puts NO comma before the adding and choosing words i, pa, te and ili: Otišla sam u trgovinu i kupila sam cipele. Možeš platiti odmah ili možeš platiti na rate.',
        highlight: 'no comma before i, pa, te and ili',
      },
      {
        type: 'rule',
        title: 'Clitics After a Conjunction',
        body: 'The short words sam, si, je, mi, ti, mu, ga, se… must sit second in their clause. "I" and "a" are too light to carry them, so the clitics wait for the next word: … i dao sam mu ključ; … a on mi je rekao. After ali, pa, te, nego and već the clitics may follow straight away: … ali sam se razbolio; … pa smo otišli kući. "I sam mu dao" and "a mi je on rekao" are wrong.',
        highlight: 'a on mi je rekao',
      },
      {
        type: 'example',
        title: 'At the Shops',
        items: [
          {
            hr: 'Otišla sam u trgovački centar i kupila sam nove cipele.',
            en: 'I went to the shopping centre and bought new shoes.',
            note: 'i — adds; no comma before it',
          },
          {
            hr: 'Htio sam kupiti jaknu, ali bila je preskupa.',
            en: 'I wanted to buy a jacket, but it was too expensive.',
            note: 'ali — the expectation is broken',
          },
          {
            hr: 'Ja plaćam karticom, a moj brat uvijek plaća gotovinom.',
            en: 'I pay by card, and my brother always pays in cash.',
            note: 'a — two people side by side, no conflict',
          },
          {
            hr: 'Ne kupujem na internetu, nego u malim dućanima.',
            en: 'I do not shop online but in small shops.',
            note: 'nego — corrects what was just denied',
          },
          {
            hr: 'Možeš platiti odmah ili možeš platiti na rate.',
            en: 'You can pay now or you can pay in instalments.',
            note: 'ili — a choice; no comma before it',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Prvo smo razgledali izloge pa smo ušli u knjižaru.',
            en: 'First we looked at the shop windows and then we went into the bookshop.',
            note: 'pa — what came next; smo follows pa directly',
          },
          {
            hr: 'Cipele su lijepe, samo su malo uske.',
            en: 'The shoes are nice, only they are a bit tight.',
            note: 'samo — the one exception',
          },
          {
            hr: 'Popust traje do nedjelje, stoga ću kupiti televizor ovaj tjedan.',
            en: 'The discount lasts until Sunday, so I will buy the television this week.',
            note: 'stoga — the conclusion, after a comma',
          },
          {
            hr: 'Pitao sam prodavača za cijenu, a on mi je rekao da je sve sniženo.',
            en: 'I asked the shop assistant about the price, and he told me everything was reduced.',
            note: 'a — the clitics mi je wait for on',
          },
          {
            hr: 'Nisam ništa kupio, već sam samo razgledavao.',
            en: 'I did not buy anything; I was only browsing.',
            note: 'već — the same correction as nego',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Ne pijem kavu, ___ čaj."',
        options: ['ali', 'nego', 'a', 'pa'],
        correct: 1,
        explanation:
          'After a negation, the word that corrects it is nego (or već): Ne pijem kavu, nego čaj. "Ali" would need a clause that goes against an expectation.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence places the clitics correctly?',
        options: [
          'Došao je Ivan i sam mu dao ključ.',
          'Došao je Ivan i dao sam mu ključ.',
          'Došao je Ivan i mu sam dao ključ.',
          'Došao je Ivan i dao mu sam ključ.',
        ],
        correct: 1,
        explanation:
          '"I" cannot carry clitics, so they wait for dao: i dao sam mu ključ — auxiliary sam before the dative mu.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The commonest is "ali" after a negation: "Ne pijem kavu, ali čaj" — a correction needs nego or već: Ne pijem kavu, nego čaj. The second is a comma before i: "Kupio sam kruh, i mlijeko" — no comma before i, pa, te or ili. The third is a clitic straight after i or a: "i sam mu dao", "a mi je rekao" — say i dao sam mu, a on mi je rekao.',
        highlight: 'Ne pijem kavu, nego čaj.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Brat voli jesen, ___ sestra voli proljeće."',
            options: ['a', 'nego', 'već', 'ili'],
            correct: 0,
            explanation:
              '"A" sets two things side by side without conflict. Nego and već need a negation before them; ili offers a choice.',
          },
          {
            q: 'Complete: "Nismo išli u kino, ___ u kazalište."',
            options: ['a', 'ali', 'nego', 'pa'],
            correct: 2,
            explanation:
              'The first clause is denied and the second corrects it, so nego. (Već would be equally right.)',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Kupio sam kruh, i platio sam karticom.',
              'Kupio sam kruh i platio sam karticom.',
              'Htio sam doći ali, nisam imao vremena.',
              'Htio sam doći ali nisam imao vremena.',
            ],
            correct: 1,
            explanation:
              'No comma before i. Before ali there must be one, and it goes before the conjunction, not after it.',
          },
          {
            q: 'Complete: "Htio sam doći, ali ___ razbolio."',
            options: ['se sam', 'sam si', 'smo se', 'sam se'],
            correct: 3,
            explanation:
              'After ali the clitics may follow straight away, in the order auxiliary, then se: ali sam se razbolio.',
          },
          {
            q: 'Complete: "Stan je lijep, ___ je malo skup."',
            options: ['nego', 'samo', 'ili', 'te'],
            correct: 1,
            explanation:
              '"Samo" names the one exception: it is nice, only a bit expensive. Nego needs a negation, ili offers a choice, te adds.',
          },
          {
            q: 'Which word draws a conclusion: "Popust je velik, ___ ću kupiti dva para"?',
            options: ['zato', 'nego', 'ili', 'ali'],
            correct: 0,
            explanation:
              '"Zato" (like stoga and dakle) draws the conclusion: the discount is big, so I will buy two pairs.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Compound Sentences — Key Takeaways',
        points: [
          'i, pa, te add; a, ali, nego, već, no contrast; ili chooses; samo excludes; zato concludes',
          'a = side by side; ali = against expectation; nego / već = correction after a negation',
          'Comma before a, ali, nego, već, samo, zato — none before i, pa, te, ili',
          'Clitics wait after i and a (i dao sam mu) but may follow ali, pa, nego directly',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Consumerism and Advertising
  // ─────────────────────────────────────────────────────────
  {
    id: 'consumerism-advertising',
    title: 'Buy, Buy, Buy: Consumers and Adverts',
    subtitle: 'Shopping fever, Buy Nothing Day and the language of advertising',
    icon: '🛍️',
    level: 'B2',
    duration: '~6 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Kupujmo, kupujmo',
        body: 'Discounts, sales, "only today", "two for the price of one" — modern shopping runs on persuasion. This lesson gives you the words to talk about your own shopping habits, to describe the phenomenon of consumer fever, and to see how an advert works on you. It ends with the colloquial words people really use when they talk about money and shopping, clearly marked so you know where not to use them.',
        icon: '🛍️',
      },
      {
        type: 'table',
        title: 'Shopping Words',
        headers: ['Croatian', 'English'],
        rows: [
          ['potrošač', 'consumer'],
          ['potrošnja', 'consumption, spending'],
          ['kupnja / kupovina', 'shopping, a purchase'],
          ['popust', 'discount'],
          ['sniženje / rasprodaja', 'reduction / sale'],
          ['impulzivna kupnja', 'impulse buying'],
          ['kupiti na rate', 'to buy in instalments'],
          ['reklama / oglas', 'advert / advertisement'],
        ],
      },
      {
        type: 'rule',
        title: 'Potrošačka groznica',
        body: '"Potrošačka groznica" — consumer fever — is the urge to keep buying things we do not need, fed by sales, adverts and the feeling that everyone else has the newest model. Before the holidays and on Black Friday (Crni petak) it reaches its peak. The phrase is common in Croatian newspapers, usually with a critical tone.',
        highlight: 'potrošačka groznica',
      },
      {
        type: 'rule',
        title: 'Buy Nothing Day',
        body: '"Dan bez kupnje" (Buy Nothing Day) began in Canada in the early 1990s as a protest against consumerism. It is held in late November, on the same weekend as Black Friday, and asks people to spend one whole day without buying anything. The point is not to save money for one day, but to notice how much of what we buy we never needed.',
        highlight: 'Dan bez kupnje',
      },
      {
        type: 'table',
        title: 'The Language of Advertising',
        headers: ['Croatian', 'English', 'The trick'],
        rows: [
          ['Kupite odmah!', 'Buy now!', 'imperative, polite Vi form'],
          ['Ne propustite!', 'Do not miss it!', 'fear of missing out'],
          ['Samo danas!', 'Today only!', 'urgency'],
          ['Ograničena ponuda', 'Limited offer', 'scarcity'],
          ['Najbolji izbor za vas', 'The best choice for you', 'the superlative'],
          ['Dva za cijenu jednog', 'Two for the price of one', 'the bargain'],
        ],
      },
      {
        type: 'rule',
        title: 'How an Advert Persuades',
        body: 'Most Croatian adverts speak to you directly in the polite imperative (Kupite, Iskoristite, Probajte), promise something with a superlative (najbolji, najjeftiniji, najbrži), and add pressure with time: samo danas, do isteka zaliha (while stocks last). Reklame utječu na kupce (adverts influence buyers) less through facts than through feelings — a happy family, a beautiful beach, a sense of belonging.',
        highlight: 'Reklame utječu na kupce.',
      },
      {
        type: 'table',
        title: 'Colloquial Shopping Words',
        headers: ['Colloquial', 'Standard', 'English'],
        rows: [
          ['šoping', 'kupovina', 'shopping'],
          ['lova', 'novac', 'money'],
          ['keš', 'gotovina', 'cash'],
          ['švorc', 'bez novca', 'broke'],
          ['spiskati', 'nepromišljeno potrošiti', 'to blow (money)'],
          ['papreno', 'vrlo skupo', 'pricey'],
        ],
      },
      {
        type: 'rule',
        title: 'Know Your Register',
        body: 'The left-hand column is colloquial: you will hear it among friends and in films, and using it there sounds natural. In an essay, a complaint to a shop or a job interview it sounds careless, so use the standard word. "Potrošio sam svu lovu" is fine with a friend; in writing, Potrošio sam sav novac.',
        highlight: 'Potrošio sam sav novac.',
      },
      {
        type: 'example',
        title: 'Shopping Habits',
        items: [
          {
            hr: 'Kupujem samo ono što mi treba, a popuste ne pratim.',
            en: 'I only buy what I need, and I do not follow the discounts.',
            note: 'a — two habits side by side',
          },
          {
            hr: 'Na rasprodaji sam kupila tri haljine, ali nijednu još nisam obukla.',
            en: 'I bought three dresses at the sale, but I have not worn any of them yet.',
            note: 'ali — the typical impulse buy',
          },
          {
            hr: 'Reklame utječu na djecu više nego na odrasle.',
            en: 'Adverts influence children more than adults.',
            note: 'utjecati na + accusative: na djecu',
          },
          {
            hr: 'Prije blagdana zahvati nas prava potrošačka groznica.',
            en: 'Before the holidays a real consumer fever takes hold of us.',
            note: 'potrošačka groznica — consumer fever',
          },
          {
            hr: 'Novi mobitel kupio sam na rate jer nisam imao dovoljno novca.',
            en: 'I bought the new phone in instalments because I did not have enough money.',
            note: 'kupiti na rate — to buy in instalments',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Na Dan bez kupnje nisam potrošio ni jedan euro.',
            en: 'On Buy Nothing Day I did not spend a single euro.',
            note: 'ni jedan — not a single',
          },
          {
            hr: 'Ponuda vrijedi samo do isteka zaliha, stoga požurite!',
            en: 'The offer is valid only while stocks last, so hurry!',
            note: 'stoga — the advert draws its conclusion for you',
          },
          {
            hr: 'Ovaj šampon nije najjeftiniji, ali je najbolji za vašu kosu.',
            en: 'This shampoo is not the cheapest, but it is the best for your hair.',
            note: 'najbolji — the superlative promise',
          },
          {
            hr: 'Kod nas dobivate dva proizvoda za cijenu jednog.',
            en: 'With us you get two products for the price of one.',
            note: 'dobivati — the imperfective, a standing offer',
          },
          {
            hr: 'Kraj mjeseca je, a ja sam opet švorc.',
            en: 'It is the end of the month, and I am broke again.',
            note: 'švorc — colloquial for "without money"',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the standard word for colloquial "lova"?',
        options: ['gotovina', 'novac', 'popust', 'račun'],
        correct: 1,
        explanation:
          '"Lova" is colloquial for novac (money). Gotovina is cash, which in colloquial speech is keš.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which advertising trick does "Samo danas!" use?',
        options: ['the superlative', 'urgency', 'a bargain price', 'a famous face'],
        correct: 1,
        explanation:
          '"Today only" puts you under time pressure — urgency. The superlative would be najbolji, najjeftiniji.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is the case after utjecati na: "Reklame utječu na kupcima" — na here takes the accusative: Reklame utječu na kupce. The second is colloquial words in formal writing: "U eseju: Ljudi troše previše love" — in an essay write novca. The third is the wrong preposition with a sale: "kupiti u rasprodaji" — you buy na rasprodaji, at the sale.',
        highlight: 'Reklame utječu na kupce.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Reklame utječu na ___." (Adverts influence young people.)',
            options: ['mladima', 'mladih', 'mlade', 'mladi'],
            correct: 2,
            explanation: 'Utjecati na takes the accusative: na mlade.',
          },
          {
            q: 'What is "Dan bez kupnje"?',
            options: [
              'A day of big discounts',
              'A day on which people try to buy nothing at all',
              'The first day of the summer sales',
              'A day when shops are closed by law',
            ],
            correct: 1,
            explanation:
              'Buy Nothing Day asks people to spend a whole day without buying anything, as a protest against consumerism.',
          },
          {
            q: 'Which word is colloquial, not standard?',
            options: ['gotovina', 'potrošač', 'rasprodaja', 'keš'],
            correct: 3,
            explanation: '"Keš" is colloquial for gotovina (cash). The other three are standard.',
          },
          {
            q: 'Complete: "Kupio sam perilicu ___ rate." (I bought the washing machine in instalments.)',
            options: ['na', 'u', 'za', 'po'],
            correct: 0,
            explanation: 'You buy na rate — in instalments.',
          },
          {
            q: 'Which slogan uses the superlative?',
            options: [
              'Samo danas!',
              'Ne propustite!',
              'Dva za cijenu jednog',
              'Najbrži internet u gradu',
            ],
            correct: 3,
            explanation:
              '"Najbrži" (the fastest) is a superlative. The others use urgency and a bargain price.',
          },
          {
            q: 'What does "potrošačka groznica" describe?',
            options: [
              'an illness caught in a shopping centre',
              'the urge to keep buying things we do not need',
              'a rise in prices',
              'a shop closing down',
            ],
            correct: 1,
            explanation: 'Consumer fever: buying for the sake of buying, fed by sales and adverts.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Consumers and Adverts — Key Takeaways',
        points: [
          'potrošač, potrošnja, popust, sniženje, rasprodaja, kupiti na rate',
          'Adverts use the polite imperative, the superlative and urgency',
          'Reklame utječu na kupce — utjecati na + accusative',
          'Dan bez kupnje: one day of buying nothing, in late November',
          'lova, keš, šoping, švorc, spiskati, papreno are colloquial — keep them out of formal writing',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Dependent Clauses
  // ─────────────────────────────────────────────────────────
  {
    id: 'dependent-clauses-b2',
    title: 'Because, So That, As, If: Dependent Clauses',
    subtitle: 'jer, budući da, zato što · da, kako bi · kao što · ako, kad bi, da',
    icon: '🧩',
    level: 'B2',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Clauses That Cannot Stand Alone',
        body: 'A dependent clause hangs on a main clause and tells you why, what for, how, or on what condition something happens. You met jer, da and ako at B1. At B2 you choose between several words for the same job and you combine two dependent clauses in one sentence: Budući da nemam auto, uzet ću taksi kako bih stigao na vrijeme. The examples come from the world of film.',
        icon: '🧩',
      },
      {
        type: 'table',
        title: 'Four Kinds of Dependent Clause',
        headers: ['Kind', 'Conjunctions', 'Question it answers'],
        rows: [
          ['causal (uzročne)', 'jer, zato što, budući da', 'Why?'],
          ['purpose (namjerne)', 'da, kako bi', 'What for?'],
          ['manner (načinske)', 'kao što, kako', 'How?'],
          ['conditional (pogodbene)', 'ako, kad bi, da', 'On what condition?'],
        ],
      },
      {
        type: 'rule',
        title: 'Jer, Zato Što, Budući Da',
        body: '"Jer" follows the main clause: Ostali smo kod kuće jer je padala kiša. A written sentence does not start with jer (in speech, "Jer…" can answer a question "Zašto?"). "Zato što" also follows and stresses the reason. "Budući da" can open the sentence: Budući da pada kiša, film gledamo kod kuće. In careful Croatian "pošto" means "after" (Pošto je ručao, legao je); you will hear it used for "since", but budući da is the recommended word.',
        highlight: 'Budući da pada kiša, film gledamo kod kuće.',
      },
      {
        type: 'rule',
        title: 'Purpose: Da and Kako Bi',
        body: '"Da" + present: Došla sam da ti pomognem. "Kako bi" + participle is a shade more formal, and "bi" changes with the person: kako bih (ja), kako bi (ti, on, ona), kako bismo (mi), kako biste (vi), kako bi (oni). Štedim kako bih kupio stan. Štedimo kako bismo kupili stan. Using "kako bi" for every person is the commonest error.',
        highlight: 'kako bih, kako bi, kako bismo, kako biste',
      },
      {
        type: 'rule',
        title: 'Manner: Kao Što and Kako',
        body: '"Kao što" means "as, the way that": Sve je bilo kao što smo planirali. "Kako" does the same and also asks "how": Napravi kako želiš. Kao što is the safer choice when you mean "just as".',
        highlight: 'Sve je bilo kao što smo planirali.',
      },
      {
        type: 'rule',
        title: 'Conditions: Ako, Kad Bi, Da',
        body: '"Ako" sets a real condition, something that may happen, often with the perfective present or future II: Ako dođeš, gledat ćemo film. "Kad bi" and "da" set a condition that is NOT true now; the main clause is in the conditional: Kad bih imao vremena, išao bih u kino. Da imam vremena, išao bih u kino. (I do not have time.) You will look at unreal conditions in depth in a later lesson.',
        highlight: 'Da imam vremena, išao bih u kino.',
      },
      {
        type: 'example',
        title: 'Clauses at the Cinema',
        items: [
          {
            hr: 'Otišli smo ranije jer smo htjeli dobra mjesta.',
            en: 'We left early because we wanted good seats.',
            note: 'jer — the reason follows the main clause',
          },
          {
            hr: 'Budući da je film na engleskom, gledat ćemo ga s titlovima.',
            en: 'Since the film is in English, we will watch it with subtitles.',
            note: 'budući da — opens the sentence',
          },
          {
            hr: 'Kupili smo karte unaprijed kako bismo izbjegli red.',
            en: 'We bought tickets in advance so that we would avoid the queue.',
            note: 'kako bismo — mi form',
          },
          {
            hr: 'Došla sam da zajedno pogledamo novi film.',
            en: 'I came so that we could watch the new film together.',
            note: 'da + present — purpose',
          },
          {
            hr: 'Kraj filma bio je upravo kao što sam očekivao.',
            en: 'The end of the film was exactly as I had expected.',
            note: 'kao što — manner',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ako karte budu rasprodane, gledat ćemo film kod kuće.',
            en: 'If the tickets are sold out, we will watch a film at home.',
            note: 'ako + future II — a real condition',
          },
          {
            hr: 'Kad bih imala više vremena, išla bih na svaki festival.',
            en: 'If I had more time, I would go to every festival.',
            note: 'kad bih — a woman speaking, the condition is not true',
          },
          {
            hr: 'Redatelj je snimao noću zato što je trebao praznu ulicu.',
            en: 'The director filmed at night because he needed an empty street.',
            note: 'zato što — stresses the reason',
          },
          {
            hr: 'Budući da nemam auto, uzet ću taksi kako bih stigao na premijeru.',
            en: 'Since I do not have a car, I will take a taxi so that I get to the premiere.',
            note: 'budući da + kako bih — two dependent clauses in one sentence',
          },
          {
            hr: 'Glumica je govorila tiho kako bi publika pažljivo slušala.',
            en: 'The actress spoke quietly so that the audience would listen carefully.',
            note: 'kako bi — the subject publika is third person',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Štedim ___ kupio novi televizor." (a man speaking)',
        options: ['kako bi', 'kako bih', 'kako bismo', 'kako biste'],
        correct: 1,
        explanation: 'The subject is ja, so kako bih. "Kako bi" belongs to ti, on, ona and oni.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which word can open the sentence: "___ pada kiša, ostat ćemo kod kuće"?',
        options: ['Jer', 'Budući da', 'Kako bi', 'Kao što'],
        correct: 1,
        explanation:
          '"Budući da" can stand at the beginning. "Jer" follows the main clause, and kako bi and kao što do not give a reason.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is one form for all persons: "Štedimo kako bi kupili stan" — with mi it is kako bismo: Štedimo kako bismo kupili stan. The second is opening a written sentence with jer: "Jer je padala kiša, ostali smo kod kuće" — use Budući da je padala kiša, …, or put jer after the main clause. The third is zbog before a clause: "zbog je padala kiša" — zbog takes a noun (zbog kiše); before a clause use jer or zato što.',
        highlight: 'Štedimo kako bismo kupili stan.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Učimo hrvatski ___ razumjeli filmove bez titlova."',
            options: ['kako bismo', 'kako bi', 'kako bih', 'kako biste'],
            correct: 0,
            explanation: 'The subject is mi, so kako bismo.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Jer je bio umoran, otišao je kući.',
              'Zbog je bio umoran, otišao je kući.',
              'Budući da je bio umoran, otišao je kući.',
              'Kako bi bio umoran, otišao je kući.',
            ],
            correct: 2,
            explanation:
              'Budući da can open a sentence. Jer follows the main clause, zbog takes a noun, and kako bi gives a purpose.',
          },
          {
            q: 'In careful Croatian, what does "pošto" mean in "Pošto je ručao, legao je"?',
            options: ['because', 'if', 'although', 'after'],
            correct: 3,
            explanation:
              'In careful Croatian pošto is temporal: after he had lunch, he lay down. For "since" use budući da.',
          },
          {
            q: 'Complete: "Sve je prošlo ___ smo planirali." (just as)',
            options: ['jer', 'kao što', 'budući da', 'kako bi'],
            correct: 1,
            explanation: '"Kao što" describes manner: just as we had planned.',
          },
          {
            q: 'Complete: "Došao sam ___ ti pomognem."',
            options: ['da', 'jer', 'ako', 'kao što'],
            correct: 0,
            explanation: 'Purpose with the present tense takes da: da ti pomognem.',
          },
          {
            q: 'Which sentence says the condition is NOT true now?',
            options: [
              'Ako imam vremena, doći ću.',
              'Kad imam vremena, dolazim.',
              'Da imam vremena, došao bih.',
              'Kad budem imao vremena, doći ću.',
            ],
            correct: 2,
            explanation:
              'Da + present with a conditional main clause means the condition is unreal: I do not have time. The others are real or repeated situations.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Dependent Clauses — Key Takeaways',
        points: [
          'jer and zato što follow the main clause; budući da may open the sentence',
          'pošto means "after" in careful Croatian; for "since" use budući da',
          'kako bih, kako bi, kako bismo, kako biste — agree with the subject',
          'kao što = just as; ako = a real condition; kad bi / da = an unreal one',
          'Two dependent clauses can share one sentence: Budući da…, …, kako bih…',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Film and Music
  // ─────────────────────────────────────────────────────────
  {
    id: 'film-and-music',
    title: 'Like in the Movies: Film and Music',
    subtitle: 'The Zagreb School, festivals, music as therapy and dialect on screen',
    icon: '🎬',
    level: 'B2',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Kao u filmu',
        body: 'Croatia has a small film industry with an outsized place in one art in particular: animation. This lesson tells the story of the Zagreb School of Animated Film and its Oscar, walks through the festivals where Croatians watch films and hear music, looks at music as therapy, and teaches you to recognise the dialect words that characters use on screen.',
        icon: '🎬',
      },
      {
        type: 'rule',
        title: 'The Zagreb School of Animated Film',
        body: "In the late 1950s artists at the studio Zagreb film developed a new style of cartoon: simple, stylised drawings, few movements and stories for adults as much as for children. Critics called it the Zagreb School of Animated Film (Zagrebačka škola crtanog filma). In 1962 Dušan Vukotić's short film Surogat won the Oscar for the best animated short film — the first animated film made outside the United States to win it. Profesor Baltazar, the friendly inventor of the later TV series, also comes from Zagreb film.",
        highlight: 'Zagrebačka škola crtanog filma',
      },
      {
        type: 'table',
        title: 'Festivals',
        headers: ['Festival', 'Where', 'What'],
        rows: [
          ['Animafest', 'Zagreb', 'animated film, since 1972'],
          ['Pulski filmski festival', 'Pula, in the Roman Arena', 'Croatian film, since 1954'],
          ['Motovun Film Festival', 'Motovun, Istria', 'independent film'],
          ['Festival dalmatinskih klapa', 'Omiš', 'klapa singing'],
          [
            'Venecija, Cannes, Berlin',
            'Italy, France, Germany',
            'the great European film festivals',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Animafest and Pula',
        body: 'Animafest Zagreb, founded in 1972, is one of the oldest festivals of animated film in the world. The Pula Film Festival has screened films in the Roman amphitheatre since 1954, so thousands of people watch a premiere under the open sky in a building almost two thousand years old. Among the great European festivals, Venice is the oldest; Cannes and Berlin followed after the Second World War.',
        highlight: 'Animafest Zagreb',
      },
      {
        type: 'rule',
        title: 'Music as Therapy',
        body: 'Glazbena terapija (also called muzikoterapija) uses music — listening, singing, playing — to help people: children with developmental difficulties, older people with memory loss, patients recovering from a stroke. Music reaches emotions and memories that words sometimes cannot. Klapa singing, the traditional a cappella singing of Dalmatia, is on the UNESCO list of intangible cultural heritage since 2012.',
        highlight: 'glazbena terapija',
      },
      {
        type: 'table',
        title: 'Dialect Words on Screen',
        headers: ['Word', 'Dialect', 'Standard meaning'],
        rows: [
          ['kaj', 'kajkavian (Zagreb, the north)', 'što — what'],
          ['ča', 'čakavian (Istria, the islands)', 'što — what'],
          ['fjaka', 'Dalmatian', 'a sleepy, idle mood in the heat'],
          ['đir', 'Dalmatian', 'šetnja — a stroll'],
          ['ćakula', 'Dalmatian', 'razgovor, čavrljanje — a chat'],
          ['šjor', 'Dalmatian', 'gospodin — mister, sir'],
        ],
      },
      {
        type: 'rule',
        title: 'Dialect in Films',
        body: 'Croatian films often let characters speak their own dialect, because it tells you at once where they are from. In Tko pjeva zlo ne misli (1970, directed by Krešo Golik), set in 1930s Zagreb, the family speaks with a kajkavian flavour; films set in Dalmatia are full of fjaka and đir. These words are dialect, not standard Croatian: understand them, enjoy them, and use the standard word when you write.',
        highlight: 'Tko pjeva zlo ne misli',
      },
      {
        type: 'example',
        title: 'Talking About Films',
        items: [
          {
            hr: 'Surogat je prvi animirani film izvan Amerike koji je dobio Oscara.',
            en: 'Ersatz is the first animated film from outside America to win an Oscar.',
            note: 'koji — a relative clause about the film',
          },
          {
            hr: 'Svake godine idem na Animafest jer volim kratke animirane filmove.',
            en: 'Every year I go to Animafest because I love short animated films.',
            note: 'jer — the reason after the main clause',
          },
          {
            hr: 'Budući da se festival održava u Areni, film gledamo pod vedrim nebom.',
            en: 'Since the festival is held in the Arena, we watch the film under the open sky.',
            note: 'budući da — opens the sentence',
          },
          {
            hr: 'Redatelj je snimio film na otoku kako bi glumci govorili pravim dijalektom.',
            en: 'The director shot the film on an island so that the actors would speak the real dialect.',
            note: 'kako bi — purpose, glumci is third person',
          },
          {
            hr: 'U tom filmu likovi govore kajkavski, kao što se govorilo u starom Zagrebu.',
            en: 'In that film the characters speak kajkavian, as people spoke in old Zagreb.',
            note: 'kao što — manner',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Na koncertu klape u Omišu pjevala je cijela publika.',
            en: 'At the klapa concert in Omiš the whole audience sang.',
            note: 'na koncertu — at a concert takes na',
          },
          {
            hr: 'Glazbena terapija pomaže starijim ljudima da se prisjete prošlosti.',
            en: 'Music therapy helps older people remember the past.',
            note: 'pomagati + dative: starijim ljudima',
          },
          {
            hr: 'Film smo gledali u kinu, a poslije smo o njemu pričali do ponoći.',
            en: 'We watched the film at the cinema, and afterwards we talked about it until midnight.',
            note: 'u kinu — at the cinema takes u',
          },
          {
            hr: 'Ljeti me u Splitu uhvati fjaka pa ne radim ništa.',
            en: 'In summer in Split I get that idle mood and do nothing.',
            note: 'fjaka — a Dalmatian word',
          },
          {
            hr: 'Kad bih mogao, išao bih svako ljeto na Motovun Film Festival.',
            en: 'If I could, I would go to the Motovun Film Festival every summer.',
            note: 'kad bih — an unreal condition',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which film won the Oscar for the best animated short film in 1962?',
        options: ['Profesor Baltazar', 'Surogat', 'Tko pjeva zlo ne misli', 'Animafest'],
        correct: 1,
        explanation:
          "Dušan Vukotić's Surogat. Profesor Baltazar is a later TV series, Tko pjeva zlo ne misli a 1970 feature film, and Animafest a festival.",
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does the kajkavian word "kaj" mean?',
        options: ['where', 'what', 'when', 'who'],
        correct: 1,
        explanation:
          '"Kaj" is the kajkavian word for što (what), just as "ča" is the čakavian one.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The prepositions trip people up: "na kinu", "u festivalu", "u koncertu". The cinema is a building, so u: u kinu. A festival and a concert are events, so na: na festivalu, na koncertu — u kinu, na festivalu. The second is treating dialect words as standard: in an essay write šetnja, not đir, and što, not kaj.',
        highlight: 'u kinu, na festivalu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Who directed the Oscar-winning film Surogat?',
            options: ['Krešo Golik', 'Dušan Vukotić', 'Zlatko Grgić', 'Antun Vrdoljak'],
            correct: 1,
            explanation: 'Dušan Vukotić, of the Zagreb School of Animated Film.',
          },
          {
            q: 'Where is the Pula Film Festival held?',
            options: [
              'in a modern cinema',
              'in a theatre in Zagreb',
              'in the Roman amphitheatre, the Arena',
              'on a ship',
            ],
            correct: 2,
            explanation: 'Films are screened in the Arena, the Roman amphitheatre in Pula.',
          },
          {
            q: 'Complete: "Sinoć smo gledali film ___ kinu."',
            options: ['na', 'po', 'kod', 'u'],
            correct: 3,
            explanation: 'The cinema is a building: u kinu.',
          },
          {
            q: '"Idemo na đir." Which kind of word is "đir"?',
            options: [
              'a Dalmatian dialect word for a stroll',
              'a standard word for a film festival',
              'a kajkavian word for a concert',
              'an English loanword for a guitar',
            ],
            correct: 0,
            explanation: '"Đir" is Dalmatian: a stroll. The standard word is šetnja.',
          },
          {
            q: 'What is Animafest?',
            options: [
              'a music festival on the coast',
              'a festival of animated film in Zagreb',
              'a television series',
              'a film studio in Pula',
            ],
            correct: 1,
            explanation: 'Animafest Zagreb, founded in 1972, is a festival of animated film.',
          },
          {
            q: 'Complete: "Glazbena terapija pomaže ___ da se opuste." (helps patients relax)',
            options: ['pacijenti', 'pacijentima', 'pacijente', 'pacijenata'],
            correct: 1,
            explanation: 'Pomagati takes the dative: pomaže pacijentima.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Film and Music — Key Takeaways',
        points: [
          'The Zagreb School of Animated Film: Surogat won an Oscar in 1962',
          'Animafest (Zagreb), Pula (the Arena), Motovun; Venice is the oldest European festival',
          'Glazbena terapija helps people through listening, singing and playing',
          'kaj, ča, fjaka, đir, ćakula, šjor are dialect words — understand them, write the standard',
          'u kinu, but na festivalu and na koncertu',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'perfective-present': {
    worked: [
      {
        title: 'Building a "When…, I will…" Sentence',
        problem: 'Reci: "When I finish the report, I will call you." (završiti, nazvati)',
        en: 'Say: When I finish the report, I will call you.',
        steps: [
          {
            label: 'The time clause',
            text: 'Finishing is one complete future event, and završiti is perfective, so after kad use its present: kad završim.',
          },
          {
            label: 'The main clause',
            text: 'The main clause is future I. Nazvati loses its i before ću: nazvat ću.',
          },
          {
            label: 'The clitic',
            text: 'te (you, accusative) follows ću: nazvat ću te.',
          },
        ],
        answer: 'Kad završim izvještaj, nazvat ću te.',
      },
      {
        title: 'Swapping In Future II',
        problem: 'Napiši s futurom II: "Ako dođeš ranije, nazovi me." (speaking to a man)',
        en: 'Rewrite with future II: If you come earlier, call me.',
        steps: [
          {
            label: 'The form of biti',
            text: 'Future II uses the budem forms; for ti that is budeš.',
          },
          {
            label: 'The participle',
            text: 'doći → došao for a man (došla for a woman).',
          },
          {
            label: 'Keep the main clause',
            text: 'The imperative nazovi me does not change; the meaning is the same, only a shade more formal.',
          },
        ],
        answer: 'Ako budeš došao ranije, nazovi me.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Kad ___ plaću, platit ću račune." (When I get my salary…)',
          options: ['dobivam', 'dobijem', 'dobit ću', 'dobiti'],
          correct: 1,
          hint: 'One future event after kad takes the perfective verb in the present.',
          explanation: 'Kad dobijem plaću — dobiti is perfective.',
        },
        {
          q: 'Dopuni: "Čim ___ u Zagreb, javit ćemo se." (As soon as we arrive…)',
          options: ['stignemo', 'stići ćemo', 'stigli', 'stići'],
          correct: 0,
          hint: 'After čim, the same form as after kad.',
          explanation: 'Čim stignemo — perfective present.',
        },
        {
          q: 'Dopuni: "Ne izlazi iz kuće dok ne ___ zadaću." (until you write)',
          options: ['pišeš', 'napisati', 'napišeš', 'napisat ćeš'],
          correct: 2,
          hint: 'Dok ne (until) takes a perfective verb in the present.',
          explanation: 'Dok ne napišeš zadaću.',
        },
        {
          q: 'Dopuni: "Kad ___ završila fakultet, otvorit ću tvrtku." (a woman speaking)',
          options: ['sam', 'bih', 'budem', 'ću'],
          correct: 2,
          hint: 'Future II needs a form of biti that only appears in this tense.',
          explanation: 'Kad budem završila — future II.',
        },
        {
          q: 'Which sentence is NOT standard?',
          options: [
            'Ako uštediš, otići ćemo na more.',
            'Ako budeš uštedio, otići ćemo na more.',
            'Ako uštedit ćeš, otići ćemo na more.',
            'Kad uštediš, otići ćemo na more.',
          ],
          correct: 2,
          hint: 'Future I belongs in the main clause, not after ako.',
          explanation: 'After ako use the perfective present or future II.',
        },
        {
          q: 'Dopuni: "Ako mi ___ sto eura, vratit ću ti ih sutra." (If you lend me…)',
          options: ['posudiš', 'posuđuješ', 'posudio', 'posudit ćeš'],
          correct: 0,
          hint: 'One future act of lending — the perfective verb in the present.',
          explanation: 'Ako mi posudiš — posuditi is perfective.',
        },
        {
          q: 'Dopuni: "Kad dobijem kredit, ___ graditi kuću." (I will start)',
          options: ['počnem', 'počet ću', 'počeo bih', 'počinjem'],
          correct: 1,
          hint: 'The main clause carries the future tense itself.',
          explanation: 'Počet ću — future I in the main clause.',
        },
        {
          q: 'What is wrong with "Sutra kupim novi mobitel" in standard Croatian?',
          options: [
            'Nothing is wrong',
            'kupim cannot stand alone as a main clause about the future; say Sutra ću kupiti novi mobitel',
            'mobitel should be mobitela',
            'sutra must go last',
          ],
          correct: 1,
          hint: 'Where does the perfective present belong?',
          explanation: 'Alone, the future is future I: Sutra ću kupiti novi mobitel.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Kad ____ posao, nazvat ću te.' (When I finish work — završiti)",
          answer: 'završim',
          hint: 'The perfective verb in the present, ja form.',
          explanation: 'Kad završim posao — perfective present.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Ako ____ ranije, čekaj me ispred kina.' (If you arrive earlier — doći, ti)",
          answer: 'dođeš',
          hint: 'The present of doći, ti form.',
          explanation: 'Ako dođeš ranije — perfective present.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Kad ____ imao vremena, pomoći ću ti.' (future II, ja)",
          answer: 'budem',
          hint: 'The special form of biti used only in future II, ja form.',
          explanation: 'Kad budem imao vremena — future II.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Čim prodamo auto, ____ ti novac.' (I will return — vratiti)",
          answer: 'vratit ću',
          hint: 'Future I; the infinitive in -ti loses its i before the auxiliary.',
          explanation: 'Vratit ću ti novac — future I, written as two words.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kad ___ ručak, idemo van." (When we have eaten lunch…)',
        options: ['pojedemo', 'jedemo', 'pojest ćemo', 'pojesti'],
        correct: 0,
        explanation: 'One future event after kad: the perfective present, pojedemo.',
      },
      {
        q: 'Which is future II of "doći" for "mi" (a group of men)?',
        options: ['bit ćemo došli', 'budemo došli', 'smo došli', 'budemo doći'],
        correct: 1,
        explanation: 'Future II: budemo + the participle došli.',
      },
      {
        q: 'Complete: "Ostat ću ovdje dok ne ___ sve račune." (until I pay)',
        options: ['plaćam', 'platiti', 'platim', 'platit ću'],
        correct: 2,
        explanation: 'Dok ne takes the perfective present: dok ne platim.',
      },
      {
        q: 'Which sentence is NOT standard Croatian?',
        options: [
          'Čim stigneš, javi se.',
          'Čim budeš stigao, javi se.',
          'Kad stigneš, javi se.',
          'Čim stići ćeš, javi se.',
        ],
        correct: 3,
        explanation: 'Future I does not go after čim; use the perfective present or future II.',
      },
      {
        q: 'Why can "dođem" not mean "I am coming (right now)"?',
        options: [
          'Because it is a past form',
          'Because a perfective verb sees the action as finished, so it has no "now"; say dolazim',
          'Because it is the imperative',
          'Because it needs ću',
        ],
        correct: 1,
        explanation:
          'A perfective present cannot describe an action in progress; the imperfective dolazim can.',
      },
      {
        q: 'Complete: "Ako cijene ___, kupit ćemo manje." (If prices go up…)',
        options: ['porastu', 'rastu', 'porast će', 'porasti'],
        correct: 0,
        explanation: 'One future change after ako: the perfective present, porastu.',
      },
    ],
    vocab: [
      ['plaća', 'salary, wage', 'Kad dobijem plaću, idemo na večeru.'],
      ['račun', 'bill; account', 'Platit ću račun čim stignem kući.'],
      ['uštedjeti', 'to save (money)', 'Ako uštedimo, ljeti idemo na Hvar.'],
      ['posuditi', 'to lend; to borrow', 'Možeš li mi posuditi deset eura?'],
      ['vratiti', 'to give back, to repay', 'Vratit ću ti novac sljedeći tjedan.'],
      ['kredit', 'loan', 'Kad dobijemo kredit, kupit ćemo stan.'],
      ['štednja', 'savings', 'Sav novac imamo na štednji.'],
      ['trošiti', 'to spend', 'Ove godine trošimo manje nego prošle.'],
      ['čim', 'as soon as', 'Javi mi čim saznaš cijenu.'],
      ['dok ne', 'until', 'Neću kupiti auto dok ne uštedim dovoljno.'],
    ],
  },

  'coordinate-clauses': {
    worked: [
      {
        title: 'A, Ali or Nego?',
        problem: 'Poveži: "Ne plaćam gotovinom." + "Plaćam karticom."',
        en: 'Link: I do not pay in cash. I pay by card.',
        steps: [
          {
            label: 'Look at the first clause',
            text: 'It is a negation: Ne plaćam gotovinom.',
          },
          {
            label: 'What does the second do?',
            text: 'It corrects the first — not cash, card — so the conjunction is nego (or već).',
          },
          {
            label: 'Comma and shortening',
            text: 'A comma before nego; the repeated verb can drop: nego karticom.',
          },
        ],
        answer: 'Ne plaćam gotovinom, nego karticom.',
      },
      {
        title: 'Clitics After I',
        problem: 'Poveži s "i": "Došla je Ana." + "Dala sam joj poklon."',
        en: 'Link with "i": Ana came. I gave her a present.',
        steps: [
          {
            label: 'No comma',
            text: 'i adds the next event; no comma goes before it.',
          },
          {
            label: 'I cannot carry clitics',
            text: 'sam and joj cannot lean on i, so they wait for the next word, dala.',
          },
          {
            label: 'Clitic order',
            text: 'Auxiliary first, then the dative: dala sam joj.',
          },
        ],
        answer: 'Došla je Ana i dala sam joj poklon.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Ja volim more, ___ moj muž voli planine."',
          options: ['a', 'nego', 'već', 'ili'],
          correct: 0,
          hint: 'Two people side by side, nothing denied, no conflict.',
          explanation: 'a — Ja volim more, a moj muž voli planine.',
        },
        {
          q: 'Dopuni: "Htjela sam kupiti haljinu, ___ nisam imala dovoljno novca."',
          options: ['nego', 'ili', 'ali', 'pa'],
          correct: 2,
          hint: 'The second clause goes against what the first leads you to expect.',
          explanation: 'ali — the plan was broken.',
        },
        {
          q: 'Dopuni: "Nije to bio popust, ___ obična cijena."',
          options: ['a', 'već', 'pa', 'te'],
          correct: 1,
          hint: 'A correction after a negation — a synonym of nego.',
          explanation: 'već — Nije to bio popust, već obična cijena.',
        },
        {
          q: 'Dopuni: "Platit ćete gotovinom ___ karticom?"',
          options: ['ili', 'nego', 'a', 'zato'],
          correct: 0,
          hint: 'A choice between two things.',
          explanation: 'ili — a choice.',
        },
        {
          q: 'Dopuni: "Najprije smo ručali ___ smo otišli u kupovinu." (and then)',
          options: ['i', 'pa', 'a', 'ili'],
          correct: 1,
          hint: 'You want the word for what came next — and it must be able to carry smo.',
          explanation: 'pa smo otišli — pa carries the clitic; "i smo" and "a smo" are impossible.',
        },
        {
          q: 'Dopuni: "Hrana je bila odlična, ___ je usluga bila spora."',
          options: ['nego', 'te', 'samo', 'ili'],
          correct: 2,
          hint: 'Everything was good, with one exception.',
          explanation: 'samo — Hrana je bila odlična, samo je usluga bila spora.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Otišao sam u dućan, i kupio sam mlijeko.',
            'Otišao sam u dućan i kupio sam mlijeko.',
            'Bilo je skupo ali, kupio sam ga.',
            'Bilo je skupo ali kupio sam ga.',
          ],
          correct: 1,
          hint: 'No comma before the adding words; a comma before the contrasting ones.',
          explanation: 'No comma before i.',
        },
        {
          q: 'Dopuni: "Pitala sam ga za savjet, a ___."',
          options: ['mi je on rekao', 'on mi je rekao', 'je on mi rekao', 'on je mi rekao'],
          correct: 1,
          hint: 'After a, the clitics wait for the next word, then go in the order dative before je.',
          explanation: 'a on mi je rekao.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Ne kupujem odjeću na internetu, ____ u trgovini.' (correction after a negation)",
          answer: 'nego',
          accept: ['već'],
          hint: 'The word that corrects what was just denied.',
          explanation: 'nego (or već) — the correction.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Popust traje samo do petka, ____ požurite.' (so — the conclusion)",
          answer: 'zato',
          accept: ['stoga', 'dakle'],
          hint: 'A conclusive conjunction; there is a comma before it.',
          explanation: 'zato (or stoga) — the conclusion.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Nisam mogao doći, ali ____ ti poslao poklon.' (ja)",
          answer: 'sam',
          hint: 'The auxiliary for ja, straight after ali, before the dative ti.',
          explanation: 'ali sam ti poslao poklon.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Ja pijem kavu, ____ ona pije čaj.' (side by side, no conflict)",
          answer: 'a',
          hint: 'The short word that compares two people without opposition.',
          explanation: 'a — Ja pijem kavu, a ona pije čaj.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Otac plaća račune, ___ majka kupuje namirnice."',
        options: ['nego', 'a', 'već', 'ili'],
        correct: 1,
        explanation: '"A" — two people side by side, nothing denied.',
      },
      {
        q: 'Complete: "Ne idemo na more, ___ na planinu."',
        options: ['ali', 'a', 'pa', 'nego'],
        correct: 3,
        explanation: 'A correction after a negation: nego.',
      },
      {
        q: 'Which sentence places the clitics correctly?',
        options: [
          'Nazvao sam Marka, a mi on nije odgovorio.',
          'Nazvao sam Marka, a on mi nije odgovorio.',
          'Nazvao sam Marka, a on nije mi odgovorio.',
          'Nazvao sam Marka, a nije mi on odgovorio.',
        ],
        correct: 1,
        explanation: 'After a the clitic waits: a on mi nije odgovorio.',
      },
      {
        q: 'Which conjunction needs NO comma before it?',
        options: ['ali', 'nego', 'zato', 'ili'],
        correct: 3,
        explanation: 'No comma before i, pa, te and ili.',
      },
      {
        q: 'Complete: "Auto je dobar, ___ troši previše goriva." (only)',
        options: ['jedino', 'nego', 'te', 'ili'],
        correct: 0,
        explanation: '"Jedino" names the one exception, like samo.',
      },
      {
        q: 'Complete: "Trgovina je zatvorena, ___ ćemo doći sutra." (so)',
        options: ['nego', 'stoga', 'ili', 'a'],
        correct: 1,
        explanation: '"Stoga" draws the conclusion.',
      },
    ],
    vocab: [
      ['nego', 'but (rather), after a negation', 'Ne želim čaj, nego kavu.'],
      ['već', 'but (rather), after a negation', 'Nisam umoran, već gladan.'],
      ['a', 'and, while (side by side)', 'Ja sam iz Splita, a ona je iz Osijeka.'],
      ['pa', 'and then, and so', 'Kupili smo karte pa smo ušli u kino.'],
      ['te', 'and (formal)', 'Ugovor je potpisan te je projekt počeo.'],
      ['stoga', 'therefore', 'Kasnimo, stoga moramo požuriti.'],
      ['jedino', 'only, except that', 'Sve je spremno, jedino nemamo kruha.'],
      ['izlog', 'shop window', 'U izlogu je bila lijepa jakna.'],
      ['trgovački centar', 'shopping centre', 'Subotom je trgovački centar pun ljudi.'],
      ['na rate', 'in instalments', 'Televizor smo kupili na rate.'],
    ],
  },

  'consumerism-advertising': {
    worked: [
      {
        title: 'From Colloquial to Standard',
        problem: 'Napiši standardno: "Na šopingu sam spiskao svu lovu."',
        en: 'Write it in standard Croatian: I blew all my money shopping.',
        steps: [
          {
            label: 'šoping',
            text: 'The standard word is kupovina: u kupovini.',
          },
          {
            label: 'spiskati',
            text: 'The standard verb is potrošiti (here nepromišljeno potrošiti, to spend thoughtlessly).',
          },
          {
            label: 'lova',
            text: 'The standard word is novac; with sav it agrees: sav novac.',
          },
        ],
        answer: 'U kupovini sam potrošio sav novac.',
      },
      {
        title: 'Reading an Advert',
        problem: 'Analiziraj: "Iskoristite priliku! Najbolje cijene u gradu — samo danas!"',
        en: 'Analyse: Seize the chance! The best prices in town — today only!',
        steps: [
          {
            label: 'Iskoristite',
            text: 'A polite imperative (Vi form) — the advert tells you what to do.',
          },
          {
            label: 'Najbolje',
            text: 'A superlative — the promise that nothing is better.',
          },
          {
            label: 'Samo danas',
            text: 'Urgency — time pressure so you do not stop to think.',
          },
        ],
        answer: 'Imperativ + superlativ + hitnost.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the standard word for colloquial "keš"?',
          options: ['novac', 'gotovina', 'kartica', 'popust'],
          correct: 1,
          hint: 'Money in notes and coins, not on a card.',
          explanation: 'keš = gotovina (cash).',
        },
        {
          q: 'Dopuni: "Kupila sam ove čizme ___ rasprodaji."',
          options: ['u', 'na', 'za', 'po'],
          correct: 1,
          hint: 'A sale is an event, like a concert.',
          explanation: 'na rasprodaji.',
        },
        {
          q: 'Dopuni: "Reklame najviše utječu na ___." (children)',
          options: ['djecu', 'djeci', 'djece', 'djecom'],
          correct: 0,
          hint: 'utjecati na takes the accusative.',
          explanation: 'utječu na djecu.',
        },
        {
          q: 'Which trick does "Do isteka zaliha!" use?',
          options: ['the superlative', 'scarcity and urgency', 'a famous face', 'a guarantee'],
          correct: 1,
          hint: 'What happens when the stock runs out?',
          explanation: 'While stocks last — scarcity, so hurry.',
        },
        {
          q: 'What does "švorc" mean?',
          options: ['rich', 'broke', 'stingy', 'generous'],
          correct: 1,
          hint: 'It is colloquial, and the standard is "bez novca".',
          explanation: 'švorc = without money, broke.',
        },
        {
          q: 'Which slogan uses the polite imperative?',
          options: [
            'Najjeftinije u gradu',
            'Probajte novi okus!',
            'Dva za cijenu jednog',
            'Samo danas',
          ],
          correct: 1,
          hint: 'Look for a verb in the Vi form telling you what to do.',
          explanation: 'Probajte — polite imperative.',
        },
        {
          q: 'Dopuni: "Prije Božića zahvati nas potrošačka ___."',
          options: ['groznica', 'bolest', 'temperatura', 'prehlada'],
          correct: 0,
          hint: 'The fixed phrase uses the word for fever.',
          explanation: 'potrošačka groznica — consumer fever.',
        },
        {
          q: 'Where would "papreno" be out of place?',
          options: [
            'in a chat with a friend',
            'in a formal complaint to a shop',
            'in a film dialogue',
            'in a text message',
          ],
          correct: 1,
          hint: 'It is colloquial.',
          explanation: 'In a formal complaint write vrlo skupo.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Kupio sam perilicu na ____.' (in instalments)",
          answer: 'rate',
          hint: 'The plural of rata, accusative after na.',
          explanation: 'kupiti na rate.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Dan bez ____ obilježava se krajem studenoga.' (Buy Nothing Day)",
          answer: 'kupnje',
          accept: ['kupovine'],
          hint: 'The genitive of the standard word for shopping.',
          explanation: 'Dan bez kupnje.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Ovaj tjedan sve je 30 posto jeftinije — veliko je ____.' (reduction)",
          answer: 'sniženje',
          hint: 'A neuter noun from sniziti, to lower.',
          explanation: 'sniženje — a price reduction.',
        },
        {
          type: 'type',
          q: "Napiši standardno: 'Nemam love.' → 'Nemam ____.'",
          answer: 'novca',
          hint: 'The standard word for money, in the genitive after nemam.',
          explanation: 'Nemam novca.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is the standard word for colloquial "šoping"?',
        options: ['kupovina', 'trgovina', 'rasprodaja', 'potrošač'],
        correct: 0,
        explanation: 'šoping = kupovina (shopping).',
      },
      {
        q: 'Complete: "Te su reklame utjecale na ___." (on my decision)',
        options: ['moju odluku', 'mojoj odluci', 'moje odluke', 'mojom odlukom'],
        correct: 0,
        explanation: 'utjecati na + accusative: na moju odluku.',
      },
      {
        q: 'Which slogan creates urgency?',
        options: [
          'Najbolja kava',
          'Ne propustite — samo do nedjelje!',
          'Kvaliteta za vas',
          'Hrvatski proizvod',
        ],
        correct: 1,
        explanation: 'A deadline — samo do nedjelje — is urgency.',
      },
      {
        q: 'Complete: "Sve smo kupili ___ rasprodaji."',
        options: ['u', 'za', 'na', 'kod'],
        correct: 2,
        explanation: 'na rasprodaji — at the sale.',
      },
      {
        q: 'When is Buy Nothing Day held?',
        options: ['in January', 'at Easter', 'in late November', "on New Year's Eve"],
        correct: 2,
        explanation: 'In late November, the same weekend as Black Friday.',
      },
      {
        q: 'Which of these is colloquial?',
        options: ['potrošiti', 'spiskati', 'uštedjeti', 'platiti'],
        correct: 1,
        explanation: 'spiskati — to blow money; the standard is potrošiti.',
      },
    ],
    vocab: [
      ['potrošač', 'consumer', 'Svaki potrošač ima pravo na račun.'],
      ['potrošnja', 'consumption, spending', 'Potrošnja raste prije blagdana.'],
      ['popust', 'discount', 'Studenti imaju popust od deset posto.'],
      ['rasprodaja', 'sale', 'Na rasprodaji je sve upola cijene.'],
      ['sniženje', 'price reduction', 'Sniženje vrijedi do kraja mjeseca.'],
      ['reklama', 'advert', 'Ta reklama prikazuje sretnu obitelj.'],
      ['utjecati na', 'to influence', 'Reklame utječu na naše odluke.'],
      ['impulzivna kupnja', 'impulse buying', 'Impulzivna kupnja često završi u ormaru.'],
      ['ponuda', 'offer', 'Ponuda vrijedi samo danas.'],
      ['lova', 'money (colloquial)', 'Nemam love za kino.'],
    ],
  },

  'dependent-clauses-b2': {
    worked: [
      {
        title: 'Purpose with Kako Bi',
        problem: 'Reci: "We are saving so that we can buy a flat." (štedjeti, kupiti)',
        en: 'Say: We are saving so that we can buy a flat.',
        steps: [
          {
            label: 'The main clause',
            text: 'mi + štedjeti in the present: Štedimo.',
          },
          {
            label: 'Choose the conjunction',
            text: 'A purpose: kako bi — and bi agrees with mi, so kako bismo.',
          },
          {
            label: 'The participle',
            text: 'mi → plural participle kupili: kako bismo kupili stan.',
          },
        ],
        answer: 'Štedimo kako bismo kupili stan.',
      },
      {
        title: 'Two Dependent Clauses',
        problem:
          'Poveži: "Nemam auto." + "Uzet ću taksi." + "Želim stići na vrijeme." (a man speaking)',
        en: 'Link: I have no car. I will take a taxi. I want to arrive on time.',
        steps: [
          {
            label: 'The reason first',
            text: 'To open the sentence with the reason, use budući da: Budući da nemam auto,',
          },
          {
            label: 'The main clause',
            text: 'uzet ću taksi — future I, -ti drops its i before ću.',
          },
          {
            label: 'The purpose',
            text: 'kako bih (ja) + the participle: kako bih stigao na vrijeme.',
          },
        ],
        answer: 'Budući da nemam auto, uzet ću taksi kako bih stigao na vrijeme.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Ostali smo kod kuće ___ je padala kiša."',
          options: ['jer', 'kako bi', 'kao što', 'da'],
          correct: 0,
          hint: 'A reason after the main clause.',
          explanation: 'jer — the reason follows.',
        },
        {
          q: 'Dopuni: "Učim svaki dan ___ položio ispit." (a man speaking)',
          options: ['kako bi', 'kako bismo', 'kako bih', 'kako biste'],
          correct: 2,
          hint: 'The subject is ja.',
          explanation: 'kako bih položio.',
        },
        {
          q: 'Dopuni: "___ je film dug, ponesite nešto za jelo."',
          options: ['Jer', 'Budući da', 'Kako bi', 'Ako bi'],
          correct: 1,
          hint: 'The reason opens the sentence.',
          explanation: 'Budući da je film dug, …',
        },
        {
          q: 'Dopuni: "Napravili smo sve ___ ste nam rekli." (just as)',
          options: ['jer', 'kao što', 'budući da', 'kako bismo'],
          correct: 1,
          hint: 'Manner — "just as".',
          explanation: 'kao što ste nam rekli.',
        },
        {
          q: 'Dopuni: "Nazvala sam te ___ ti čestitam rođendan."',
          options: ['da', 'jer', 'budući da', 'kao što'],
          correct: 0,
          hint: 'A purpose with a verb in the present.',
          explanation: 'da ti čestitam — purpose.',
        },
        {
          q: 'Dopuni: "Vi ste došli ranije ___ dobili dobra mjesta."',
          options: ['kako bi', 'kako bih', 'kako bismo', 'kako biste'],
          correct: 3,
          hint: 'Match bi to vi.',
          explanation: 'kako biste dobili.',
        },
        {
          q: 'Which sentence uses "pošto" in its careful, standard meaning?',
          options: [
            'Pošto je završio film, redatelj je otputovao.',
            'Pošto nemam novca, ne idem.',
            'Pošto pada kiša, ostajemo.',
            'Pošto sam bolestan, ne radim.',
          ],
          correct: 0,
          hint: 'In careful Croatian pošto is about time, not cause.',
          explanation: 'Pošto je završio = after he had finished.',
        },
        {
          q: 'Which sentence states an unreal condition?',
          options: [
            'Ako dođeš, gledat ćemo film.',
            'Kad bih znao svirati, svirao bih u bendu.',
            'Kad dođem, javit ću se.',
            'Ako bude padala kiša, ostat ćemo kod kuće.',
          ],
          correct: 1,
          hint: 'Look for a conditional in both clauses.',
          explanation: 'Kad bih znao… — I cannot play, so it is unreal.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Govorim polako ____ me svi razumiju.' (so that — the short word + present)",
          answer: 'da',
          hint: 'The purpose conjunction that takes the present tense.',
          explanation: 'da me svi razumiju.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Štedimo kako ____ otišli na more.' (mi)",
          answer: 'bismo',
          hint: 'The conditional auxiliary for mi.',
          explanation: 'kako bismo otišli.',
        },
        {
          type: 'type',
          q: "Dopuni: '____ da je bio bolestan, nije došao na posao.' (since — opening the sentence)",
          answer: 'Budući',
          hint: 'The first word of the causal conjunction that may open a sentence.',
          explanation: 'Budući da je bio bolestan, …',
        },
        {
          type: 'type',
          q: "Dopuni: 'Sve je bilo kao ____ smo zamislili.' (just as)",
          answer: 'što',
          hint: 'The second word of the manner conjunction.',
          explanation: 'kao što smo zamislili.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Došli smo ranije ___ razgovarali s redateljem."',
        options: ['kako bi', 'kako bih', 'kako bismo', 'kako biste'],
        correct: 2,
        explanation: 'The subject is mi: kako bismo.',
      },
      {
        q: 'Which word may open a sentence giving a reason?',
        options: ['jer', 'budući da', 'kako bi', 'da'],
        correct: 1,
        explanation: 'Budući da can stand first; jer follows the main clause.',
      },
      {
        q: 'Complete: "Nije došao ___ je bio bolestan."',
        options: ['kako bi', 'kao što', 'zato što', 'da'],
        correct: 2,
        explanation: '"Zato što" gives the reason, stressing it.',
      },
      {
        q: 'Complete: "Ponašaj se ___ te učila majka." (just as)',
        options: ['jer', 'budući da', 'kako bi', 'kao što'],
        correct: 3,
        explanation: '"Kao što" — just as your mother taught you.',
      },
      {
        q: 'What is wrong with "Zbog je bilo hladno, ostali smo unutra"?',
        options: [
          'Nothing is wrong',
          'zbog takes a noun, not a clause: zbog hladnoće, or jer je bilo hladno',
          'ostali should be ostao',
          'unutra should be unutri',
        ],
        correct: 1,
        explanation: 'Zbog + genitive noun; a clause needs jer or zato što.',
      },
      {
        q: 'Complete: "___ imam više novca, kupio bih kuću na moru." (but I do not)',
        options: ['Da', 'Ako', 'Jer', 'Čim'],
        correct: 0,
        explanation: 'Da + present with a conditional main clause: an unreal condition.',
      },
    ],
    vocab: [
      ['budući da', 'since, as (cause)', 'Budući da je kasno, idemo kući.'],
      ['zato što', 'because', 'Ne idem zato što sam umoran.'],
      ['kako bi', 'so that, in order to', 'Govorio je glasno kako bi ga svi čuli.'],
      ['kao što', 'just as', 'Učini kao što sam ti rekao.'],
      ['pošto', 'after (careful Croatian)', 'Pošto je ručao, otišao je u šetnju.'],
      ['titlovi', 'subtitles', 'Gledam filmove s hrvatskim titlovima.'],
      ['premijera', 'premiere', 'Na premijeri su bili svi glumci.'],
      ['redatelj', 'film director', 'Redatelj je dobio nagradu za najbolji film.'],
      ['unaprijed', 'in advance', 'Karte smo kupili unaprijed.'],
    ],
  },

  'film-and-music': {
    worked: [
      {
        title: 'Telling the Oscar Story',
        problem: 'Reci: "Ersatz won the Oscar in 1962 because it was something entirely new."',
        en: 'Say: Ersatz won the Oscar in 1962 because it was something entirely new.',
        steps: [
          {
            label: 'The main clause',
            text: 'Surogat je dobio Oscara — Oscar is a name and counts as animate, so the accusative is Oscara.',
          },
          {
            label: 'The year',
            text: '1962. godine (or just 1962.) — Croatian writes a dot after an ordinal year.',
          },
          {
            label: 'The reason',
            text: 'After the main clause, jer: jer je bio nešto posve novo.',
          },
        ],
        answer: 'Surogat je 1962. dobio Oscara jer je bio nešto posve novo.',
      },
      {
        title: 'Dialect Into Standard',
        problem: 'Napiši standardno: "Kaj radiš? Idemo na đir." (kajkavian + Dalmatian)',
        en: "Write it in standard Croatian: What are you doing? Let's go for a stroll.",
        steps: [
          {
            label: 'kaj',
            text: 'The kajkavian word for što.',
          },
          {
            label: 'radiš',
            text: 'The verb is already standard, so it stays: radiš.',
          },
          {
            label: 'đir',
            text: 'The Dalmatian word for šetnja; "ići na đir" is "ići u šetnju".',
          },
        ],
        answer: 'Što radiš? Idemo u šetnju.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which studio did the Zagreb School of Animated Film grow out of?',
          options: ['Jadran film', 'Zagreb film', 'Hollywood', 'Pula film'],
          correct: 1,
          hint: 'The studio carries the name of the city.',
          explanation: 'Zagreb film.',
        },
        {
          q: 'Dopuni: "Sinoć smo bili ___ koncertu klape."',
          options: ['u', 'na', 'po', 'za'],
          correct: 1,
          hint: 'A concert is an event.',
          explanation: 'na koncertu.',
        },
        {
          q: 'What does the Dalmatian word "fjaka" describe?',
          options: ['a strong wind', 'a sleepy, idle mood in the heat', 'a fishing boat', 'a song'],
          correct: 1,
          hint: 'Think of a hot afternoon when nobody wants to move.',
          explanation: 'fjaka — the idle mood of a Dalmatian summer.',
        },
        {
          q: 'Which is the oldest of the great European film festivals?',
          options: ['Cannes', 'Berlin', 'Venice', 'Motovun'],
          correct: 2,
          hint: 'It began before the Second World War, in Italy.',
          explanation: 'Venice is the oldest.',
        },
        {
          q: 'Dopuni: "Glazbena terapija pomaže ___ ljudima." (older people)',
          options: ['starije', 'starijim', 'stariji', 'starijih'],
          correct: 1,
          hint: 'pomagati takes the dative plural.',
          explanation: 'pomaže starijim ljudima.',
        },
        {
          q: 'In which city is the Festival dalmatinskih klapa held?',
          options: ['Omiš', 'Osijek', 'Varaždin', 'Karlovac'],
          correct: 0,
          hint: 'A Dalmatian town at the mouth of the Cetina.',
          explanation: 'Omiš.',
        },
        {
          q: 'Which word is čakavian for "what"?',
          options: ['kaj', 'ča', 'tko', 'gdje'],
          correct: 1,
          hint: 'The dialect is named after it.',
          explanation: 'ča — čakavian.',
        },
        {
          q: 'Dopuni: "Ovaj tjedan u ___ igra novi hrvatski film."',
          options: ['kina', 'kinu', 'kino', 'kinom'],
          correct: 1,
          hint: 'Location after u takes the locative.',
          explanation: 'u kinu.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Animafest je festival ____ filma.' (animated)",
          answer: 'animiranog',
          hint: 'The adjective animirani in the genitive singular masculine.',
          explanation: 'festival animiranog filma.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Pulski filmski festival održava se u ____.' (the Roman amphitheatre — Arena)",
          answer: 'Areni',
          accept: ['areni'],
          hint: 'Locative of the feminine noun.',
          explanation: 'u Areni.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Dušan Vukotić dobio je ____ 1962.' (the Oscar — Oscar)",
          answer: 'Oscara',
          accept: ['oscara'],
          hint: 'An award named after a person: the accusative looks like the genitive.',
          explanation: 'dobio je Oscara.',
        },
        {
          type: 'type',
          q: "Napiši standardno: 'Idemo na đir.' → 'Idemo u ____.'",
          answer: 'šetnju',
          hint: 'The standard noun for a stroll, accusative after u.',
          explanation: 'Idemo u šetnju.',
        },
      ],
    },
    checkB: [
      {
        q: 'In which year did Surogat win the Oscar?',
        options: ['1954', '1962', '1972', '1990'],
        correct: 1,
        explanation: 'In 1962, at the Academy Awards for the films of 1961.',
      },
      {
        q: 'Complete: "Upoznali smo se ___ festivalu u Motovunu."',
        options: ['u', 'kod', 'na', 'po'],
        correct: 2,
        explanation: 'A festival is an event: na festivalu.',
      },
      {
        q: 'What is "šjor" in standard Croatian?',
        options: ['gospodin', 'prijatelj', 'ribar', 'pjevač'],
        correct: 0,
        explanation: '"Šjor" is Dalmatian for gospodin, mister.',
      },
      {
        q: 'Since when has klapa singing been on the UNESCO intangible heritage list?',
        options: ['1954', '1972', '1991', '2012'],
        correct: 3,
        explanation: 'Since 2012.',
      },
      {
        q: 'Which festival is in Istria?',
        options: ['Animafest', 'Motovun Film Festival', 'Festival dalmatinskih klapa', 'Cannes'],
        correct: 1,
        explanation: 'Motovun is a hill town in Istria.',
      },
      {
        q: 'Complete: "Gledali smo film ___ kinu u centru grada."',
        options: ['u', 'na', 'kod', 'pod'],
        correct: 0,
        explanation: 'The cinema is a building: u kinu.',
      },
    ],
    vocab: [
      ['crtani film', 'cartoon, animated film', 'Djeca subotom gledaju crtane filmove.'],
      ['redateljica', 'film director (woman)', 'Redateljica je snimila film o svom otoku.'],
      ['glumac', 'actor', 'Taj glumac igra u svim hrvatskim serijama.'],
      ['nagrada', 'award, prize', 'Film je dobio nagradu publike.'],
      ['festival', 'festival', 'Na festivalu smo vidjeli dvadeset filmova.'],
      ['klapa', 'klapa (Dalmatian a cappella group)', 'Klapa je pjevala na rivi.'],
      ['glazbena terapija', 'music therapy', 'Glazbena terapija pomaže djeci.'],
      ['dijalekt', 'dialect', 'Likovi u filmu govore dalmatinskim dijalektom.'],
      ['gledatelj', 'viewer', 'Film je vidjelo sto tisuća gledatelja.'],
    ],
  },
};
