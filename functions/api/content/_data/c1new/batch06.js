// functions/api/content/_data/c1new/batch06.js
//
// New C1 lessons, batch 06 (Croaticum restructure, stage 6, 2026-11-12). See c1new/index.js.
//
// Four lessons from Razgovarajte s nama! B2-C1, lessons 9 and 10:
//   depersonalization (41) · prefixed-verbs (42) · comparative-clauses (48)
//   · direct-speech-spelling (49)
// (masterOrder 47, the pluperfect, is the existing C2 lesson `pluskvamperfekt` moved into
// C1 by the integration pass — it is deliberately not authored here.)
// Drill banks for each lesson live in src/data/drills/c1/.

// ─────────────────────────────────────────────────────────────────────────────
// 41 · depersonalization — Priča se da…, Ne zna se tko…, Kažu da…
// ─────────────────────────────────────────────────────────────────────────────
const L_DEPERSONALIZATION = {
  id: 'depersonalization',
  title: 'Saying It Without a Subject',
  subtitle: 'Priča se da…, Ne zna se tko…, Kažu da… — the depersonalised statement',
  icon: '🌫️',
  level: 'C1',
  duration: '~6 min',
  color: '#475569',
  bg: '#f1f5f9',
  slides: [
    {
      type: 'intro',
      title: 'When Nobody in Particular Says It',
      body: 'English reaches for "people say", "it is said", "one never knows". Croatian has a whole family of constructions that leave the doer out entirely — grammarians call it obezličenje, depersonalisation. They are everywhere: in gossip (Priča se da…), on notices (Ovdje se ne puši), in the news (Javljaju da…) and in official reports (Utvrđeno je da…). Choosing the right one is what makes a sentence sound Croatian rather than translated.',
      icon: '🌫️',
    },
    {
      type: 'rule',
      title: 'Se + Third Person Singular',
      body: 'The commonest tool is the verb in the third person singular with se and no subject at all: Priča se da će tvornica zatvoriti. Govori se da… Zna se tko je kriv. Ne zna se kada će radovi završiti. Ovdje se radi do pet. In the past the verb is NEUTER SINGULAR, because there is no subject for it to agree with: Pričalo se, Znalo se, Radilo se. Standard usage drops je after se in the past: Pričalo se da…, not "Pričalo se je".',
      highlight: 'Pričalo se da…',
    },
    {
      type: 'table',
      title: 'Present and Past',
      headers: ['Present', 'Past', 'Meaning'],
      rows: [
        ['Priča se da…', 'Pričalo se da…', 'it is (was) rumoured that'],
        ['Ne zna se tko…', 'Nije se znalo tko…', 'nobody knows (knew) who'],
        ['Smatra se da…', 'Smatralo se da…', 'it is (was) considered that'],
        ['Očekuje se da…', 'Očekivalo se da…', 'it is (was) expected that'],
        ['Ovdje se ne puši.', 'Ovdje se nije pušilo.', 'no smoking here (there was none)'],
      ],
    },
    {
      type: 'rule',
      title: 'Negation and Word Order',
      body: 'se is a clitic, so it takes second position in the sentence; ne stands directly before the verb. Ovdje se puši? → Ovdje se ne puši. If the sentence opens with the verb, ne comes first and se follows the verb: Ne puši se ovdje. Both are good Croatian. What is impossible is ne between se and nothing — "Ovdje ne se puši" — or se at the very start of the sentence.',
      highlight: 'Ovdje se ne puši.',
    },
    {
      type: 'rule',
      title: 'The Third Person Plural: Kažu da…',
      body: 'A bare third person plural with no subject points at unnamed people, the media or "them": Kažu da će sutra padati snijeg. Javljaju da je autocesta zatvorena. Pišu u novinama da… It is the spoken option, and it carries a faint sense that somebody — people, reporters — is the source. Priča se da… presents the same content as a rumour with no source at all.',
      highlight: 'Kažu da…',
    },
    {
      type: 'rule',
      title: 'Feelings With a Dative: Spava mi se',
      body: "A neighbouring construction puts the person in the dative and the verb impersonally with se: Spava mi se (I feel sleepy). Ne da mi se (I can't be bothered). Plače joj se (she feels like crying). Pije mi se kava (I fancy a coffee). The person does not act; the urge happens to them. In the past the verb is again neuter singular: Spavalo mi se cijeli dan.",
      highlight: 'Spava mi se',
    },
    {
      type: 'rule',
      title: 'The Formal Report: Utvrđeno je da…',
      body: 'Official and academic Croatian depersonalises with the neuter passive participle plus da: Utvrđeno je da… (it has been established that), Odlučeno je da… (it has been decided that), Zaključeno je da… The se-forms work in the same register: Smatra se da…, Očekuje se da…, Predlaže se da… When there IS an object, the standard turns it into the subject of a se-passive and makes the verb agree: Ovdje se grade kuće (houses are being built here). Other tools: treba + infinitive (Treba paziti), potrebno je / moguće je + infinitive, and the generic čovjek (Čovjek nikad ne zna).',
      highlight: 'Utvrđeno je da…',
    },
    {
      type: 'example',
      title: 'In Conversation and on Notices',
      items: [
        {
          hr: 'U susjedstvu se priča da će stara tvornica konačno postati kulturni centar.',
          en: 'People in the neighbourhood are saying that the old factory will finally become a cultural centre.',
          note: 'se + 3rd singular: a rumour without a source',
        },
        {
          hr: 'Još se uvijek ne zna tko je napisao to anonimno pismo.',
          en: 'It is still not known who wrote that anonymous letter.',
          note: 'negated impersonal: ne directly before zna',
        },
        {
          hr: 'U ovoj se zgradi ne puši, a psi se moraju voditi na uzici.',
          en: 'There is no smoking in this building, and dogs must be kept on a lead.',
          note: 'a notice: impersonal se, then a se-passive with psi as subject',
        },
        {
          hr: 'Kažu da će ove zime biti manje snijega nego prošle.',
          en: 'They say there will be less snow this winter than last.',
          note: 'third person plural: unnamed people as the source',
        },
        {
          hr: 'Nakon onog ručka toliko mi se spavalo da sam zaspao na kauču.',
          en: 'After that lunch I was so sleepy that I fell asleep on the sofa.',
          note: 'dative + se, past tense in the neuter singular',
        },
      ],
    },
    {
      type: 'example',
      title: 'In the News and in Reports',
      items: [
        {
          hr: 'Javljaju da je zbog jakog vjetra prekinut trajektni promet prema otocima.',
          en: 'It is reported that because of strong wind the ferry service to the islands has been suspended.',
          note: 'third person plural as a news formula',
        },
        {
          hr: 'Dugo se smatralo da je ta crkva sagrađena u petnaestom stoljeću.',
          en: 'It was long thought that this church was built in the fifteenth century.',
          note: 'past impersonal: the neuter singular participle',
        },
        {
          hr: 'Analizom uzoraka utvrđeno je da voda u bunaru nije za piće.',
          en: 'Analysis of the samples established that the water in the well is not drinkable.',
          note: 'formal report: neuter participle + da',
        },
        {
          hr: 'Na sastanku je odlučeno da se radovi odgode do proljeća.',
          en: 'At the meeting it was decided that the works be postponed until spring.',
          note: 'odlučeno je da: nobody is named as deciding',
        },
        {
          hr: 'Očekuje se da će nova pravila stupiti na snagu početkom godine.',
          en: 'The new rules are expected to come into force at the start of the year.',
          note: 'se + 3rd singular in formal prose',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'In the past tense, what form does the verb of an impersonal se-statement take?',
      options: [
        'masculine singular',
        'neuter singular',
        'third person plural',
        'it agrees with the speaker',
      ],
      correct: 1,
      explanation:
        'There is no subject to agree with, so the past participle is neuter singular: Pričalo se, Znalo se, Smatralo se.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which construction suits an official report best?',
      options: [
        'Kažu da je voda zagađena.',
        'Utvrđeno je da je voda zagađena.',
        'Čovjek kaže da je voda zagađena.',
        'Pričaju da je voda zagađena.',
      ],
      correct: 1,
      explanation:
        'The neuter participle with da — utvrđeno je da — is the formal depersonalised statement. Kažu and pričaju belong to speech and point vaguely at "people".',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first is agreeing the past impersonal with a person: "Pričao se da…" or "Pričali su se da…" — with no subject, the verb is neuter: Pričalo se da… The second is the position of ne: "Ovdje ne se puši" — se stays in second position and ne goes straight before the verb, so Ovdje se ne puši. The third is putting the experiencer in the wrong case: "Spavam se" or "Spava me se" — the person who feels the urge is in the dative: Spava mi se. The fourth is the English-shaped "Ljudi kažu da…" in every sentence — Croatian usually drops the subject and says Kažu da… or Priča se da…',
      highlight: 'Ovdje se ne puši',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "___ se da će tvornica zatvoriti." (people were saying — past)',
          options: ['Pričalo', 'Pričao', 'Pričali', 'Pričala'],
          correct: 0,
          explanation:
            'An impersonal se-verb has no subject, so in the past it is neuter singular: Pričalo se.',
        },
        {
          q: 'Which is the standard negative of "Ovdje se puši."?',
          options: [
            'Ovdje ne se puši.',
            'Ovdje se ne puši.',
            'Ovdje se puši ne.',
            'Se ovdje ne puši.',
          ],
          correct: 1,
          explanation:
            'se keeps second position and ne stands directly before the verb. se can never open a sentence.',
        },
        {
          q: 'What does "Kažu da je cesta zatvorena" suggest about the source?',
          options: [
            'the speaker closed the road personally',
            'the road closed by itself',
            'one named official said so',
            'unnamed people or the media are the source',
          ],
          correct: 3,
          explanation:
            'A bare third person plural points vaguely at "them" — people, reporters — without naming anyone.',
        },
        {
          q: 'Complete the report: "Nakon analize ___ je da su podaci točni." (it was established)',
          options: ['utvrđen', 'utvrđena', 'utvrđeno', 'utvrđeni'],
          correct: 2,
          explanation:
            'The formal depersonalised statement uses the neuter participle: utvrđeno je da…',
        },
        {
          q: 'How do you say "I can\'t be bothered to work today"?',
          options: [
            'Ne da me se danas raditi.',
            'Ne dam se danas raditi.',
            'Ne da mi se danas raditi.',
            'Ne dajem se danas raditi.',
          ],
          correct: 2,
          explanation:
            'The person is in the dative and the verb is impersonal with se: Ne da mi se. "Ne dam se" means "I won\'t give in".',
        },
        {
          q: 'Which sentence says "Houses are being built here"?',
          options: [
            'Ovdje se gradi kuća.',
            'Ovdje se grade kuće.',
            'Ovdje grade se kuće.',
            'Ovdje se grade kuća.',
          ],
          correct: 1,
          explanation:
            'The object becomes the subject of a se-passive and the verb agrees: kuće se grade. se gradi kuća is a single house, and se cannot follow the verb in third position here.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Depersonalisation — Key Takeaways',
      points: [
        'se + 3rd singular, no subject: Priča se da…, Ne zna se tko…',
        'In the past the verb is neuter singular: Pričalo se, Nije se znalo',
        'Ovdje se ne puši: se second, ne straight before the verb',
        'Kažu da…, Javljaju da… — the spoken third person plural',
        'Dative + se for an urge: Spava mi se, Ne da mi se',
        'Formal reports: Utvrđeno je da…, Odlučeno je da…, Smatra se da…',
      ],
    },
  ],
};

const P_DEPERSONALIZATION = {
  worked: [
    {
      title: 'Taking the People Out',
      problem: 'Depersonaliziraj: "Ljudi su govorili da će se most srušiti."',
      en: 'Depersonalise: People were saying the bridge would collapse.',
      steps: [
        {
          label: 'Who is the subject?',
          text: '"Ljudi" is nobody in particular — exactly the subject a depersonalised statement leaves out.',
        },
        {
          label: 'Choose the construction',
          text: 'A rumour with no source: se + the verb in the third person singular.',
        },
        {
          label: 'The tense',
          text: 'It happened in the past, and with no subject the participle is neuter singular: govorilo se. je is dropped after se.',
        },
        {
          label: 'Keep the da-clause',
          text: 'The content of the rumour stays exactly as it was.',
        },
      ],
      answer: 'Govorilo se da će se most srušiti.',
    },
    {
      title: 'Writing It Up Formally',
      problem:
        'Za službeno izvješće: "Komisija je otkrila da su podaci netočni." (the commission does not matter)',
      en: 'For an official report: The commission found that the data were inaccurate.',
      steps: [
        {
          label: 'Register',
          text: 'A report states findings, not who found them — the agent goes.',
        },
        {
          label: 'The formula',
          text: 'The neuter passive participle of a perfective verb with je: utvrđeno je.',
        },
        {
          label: 'The content',
          text: 'The finding follows in a da-clause, unchanged: da su podaci netočni.',
        },
      ],
      answer: 'Utvrđeno je da su podaci netočni.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Complete: "U gradu se ___ da će cijene porasti." (it is being said)',
        options: ['govori', 'govore', 'govorilo', 'govorim'],
        correct: 0,
        hint: 'Impersonal se takes the third person singular of the present.',
        explanation: 'U gradu se govori da… — se with the 3rd singular, no subject.',
      },
      {
        q: 'Complete: "Nekad se ___ da je Zemlja ravna." (people believed)',
        options: ['vjerovao', 'vjerovali', 'vjerovalo', 'vjerovala'],
        correct: 2,
        hint: 'In the past an impersonal se-verb has no subject to agree with.',
        explanation: 'Neuter singular: Nekad se vjerovalo da…',
      },
      {
        q: 'Which sentence is a depersonalised statement?',
        options: [
          'Ana zna tko je kriv.',
          'Zna se tko je kriv.',
          'Znam tko je kriv.',
          'Oni znaju tko je kriv.',
        ],
        correct: 1,
        hint: 'Look for se and no subject at all.',
        explanation: 'Zna se tko je kriv — everyone knows, nobody in particular.',
      },
      {
        q: 'Which sentence points at unnamed people or the media as the source?',
        options: [
          'Javljam da je trajekt otkazan.',
          'Javljaju da je trajekt otkazan.',
          'Javila sam da je trajekt otkazan.',
          'Javljamo se da je trajekt otkazan.',
        ],
        correct: 1,
        hint: 'A bare third person plural with no subject.',
        explanation: 'Javljaju da… — "it is reported", with a vague "they" behind it.',
      },
      {
        q: 'Complete: "Nakon tog ručka ___ se spavalo." (I felt sleepy)',
        options: ['me', 'mi', 'ja', 'mene'],
        correct: 1,
        hint: 'The person who feels the urge is in the dative, as a short clitic.',
        explanation: 'Nakon tog ručka mi se spavalo — dative clitic before se.',
      },
      {
        q: 'Which word order is standard?',
        options: [
          'Se ne puši u ovoj zgradi.',
          'Ne se puši u ovoj zgradi.',
          'U ovoj zgradi ne se puši.',
          'Ne puši se u ovoj zgradi.',
        ],
        correct: 3,
        hint: 'se never opens a sentence; ne sits right before the verb.',
        explanation: 'Ne puši se u ovoj zgradi — or U ovoj se zgradi ne puši.',
      },
      {
        q: 'Which opening suits an official report?',
        options: [
          'Utvrđen je da su pravila prekršena.',
          'Utvrđeni su da su pravila prekršena.',
          'Utvrdili smo se da su pravila prekršena.',
          'Utvrđeno je da su pravila prekršena.',
        ],
        correct: 3,
        hint: 'The formal formula uses the neuter participle and da.',
        explanation: 'Utvrđeno je da… — no agent, neuter participle.',
      },
      {
        q: 'Complete: "O tome se dugo ništa nije ___." (nothing was said)',
        options: ['govorio', 'govorila', 'govorili', 'govorilo'],
        correct: 3,
        hint: 'No subject means the neuter singular participle.',
        explanation: 'O tome se dugo ništa nije govorilo.',
      },
      {
        type: 'type',
        q: 'Ne ____ se kada će radovi završiti. (it is not known — present)',
        answer: 'zna',
        hint: 'The verb znati, third person singular present.',
        explanation: 'Ne zna se kada… — the negated impersonal.',
      },
      {
        type: 'type',
        q: '____ se da je ondje nekad bio samostan. (it used to be said — past, a verb of telling)',
        answer: 'Pričalo',
        accept: ['Govorilo'],
        hint: 'The neuter singular past of pričati or govoriti.',
        explanation: 'Pričalo se da… (or Govorilo se da…).',
      },
      {
        type: 'type',
        q: '____ na radiju da je autocesta zatvorena. (they report — the vague third person plural)',
        answer: 'Javljaju',
        hint: 'The verb javljati, third person plural present.',
        explanation: 'Javljaju na radiju da… — the news formula.',
      },
      {
        type: 'type',
        q: 'Jako mi se ____. (I feel very sleepy — spavati)',
        answer: 'spava',
        hint: 'The impersonal third person singular present of the verb in brackets.',
        explanation: 'Jako mi se spava — dative + se.',
      },
      {
        type: 'type',
        q: 'Nakon istrage ____ je da nitko nije ozlijeđen. (it was established — utvrditi)',
        answer: 'utvrđeno',
        hint: 'The neuter passive participle of the verb in brackets.',
        explanation: 'Utvrđeno je da… — the formal report formula.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Dugo se ___ tko je napisao to pismo." (nobody knew — past)',
      options: ['nije znao', 'nije znalo', 'nisu znali', 'nije znala'],
      correct: 1,
      explanation: 'The negated past impersonal: Dugo se nije znalo — neuter singular.',
    },
    {
      q: 'Which sentence is the standard "No parking here"?',
      options: [
        'Ovdje se ne parkira.',
        'Ovdje ne se parkira.',
        'Ovdje se parkira ne.',
        'Se ovdje ne parkira.',
      ],
      correct: 0,
      explanation: 'se in second position, ne straight before the verb.',
    },
    {
      q: 'Complete: "___ je da se sastanak odgodi." (it has been decided)',
      options: ['Odlučen', 'Odlučena', 'Odlučeni', 'Odlučeno'],
      correct: 3,
      explanation: 'The formal formula takes the neuter participle: Odlučeno je da…',
    },
    {
      q: 'How do you say "I feel sleepy"?',
      options: ['Spavam se.', 'Spava mi se.', 'Spava me se.', 'Spavam mi se.'],
      correct: 1,
      explanation: 'The experiencer is in the dative and the verb impersonal: Spava mi se.',
    },
    {
      q: 'Which sentence presents something as a rumour with no source at all?',
      options: [
        'Ministar kaže da će porezi pasti.',
        'Priča se da će porezi pasti.',
        'Rekao sam da će porezi pasti.',
        'Ivana tvrdi da će porezi pasti.',
      ],
      correct: 1,
      explanation: 'Priča se da… names nobody. The others all have a subject.',
    },
    {
      q: 'Rewrite impersonally: "Ljudi smatraju da je to dobro rješenje."',
      options: [
        'Smatra se da je to dobro rješenje.',
        'Smatraju se da je to dobro rješenje.',
        'Se smatra da je to dobro rješenje.',
        'Smatrano se da je to dobro rješenje.',
      ],
      correct: 0,
      explanation: 'se + 3rd singular: Smatra se da… se cannot open the sentence.',
    },
  ],
  vocab: [
    ['obezličenje', 'depersonalisation', 'Obezličenjem se vršitelj radnje izostavlja.'],
    ['glasina', 'rumour', 'Priča se da je to samo glasina.'],
    ['utvrditi', 'to establish (a fact)', 'Utvrđeno je da su podaci točni.'],
    ['smatrati', 'to consider, to hold', 'Smatra se da je crkva vrlo stara.'],
    ['očekivati', 'to expect', 'Očekuje se da će cijene porasti.'],
    ['javljati', 'to report (news)', 'Javljaju da je cesta zatvorena.'],
    ['izvješće', 'report', 'U izvješću je navedeno da nema štete.'],
    ['stupiti na snagu', 'to come into force', 'Zakon stupa na snagu idući mjesec.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 42 · prefixed-verbs — do-, iz-, na-, nad-, o-, od-, po-, pod-, pre-, pred-, pri-,
//      pro-, raz-, s-, u-, uz-, za-
// ─────────────────────────────────────────────────────────────────────────────
const L_PREFIXED_VERBS = {
  id: 'prefixed-verbs',
  title: 'Prefixed Verbs',
  subtitle: 'One root, seventeen prefixes: how pisati and ići become dozens of verbs',
  icon: '🧩',
  level: 'C1',
  duration: '~7 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'A Prefix Does Two Jobs',
      body: 'Put a prefix in front of a Croatian verb and two things happen at once. The meaning shifts — direction, completion, a beginning, a result — and the verb becomes PERFECTIVE. pisati (to write, imperfective) gives potpisati (to sign), opisati (to describe), prepisati (to copy), zapisati (to write down) — all perfective. Learn what each prefix means and a whole family of verbs opens up from one root.',
      icon: '🧩',
    },
    {
      type: 'table',
      title: 'The Family of pisati',
      headers: ['Prefix', 'Verb', 'Meaning'],
      rows: [
        ['do-', 'dopisati', 'to add in writing, to finish writing'],
        ['iz-', 'ispisati', 'to write out, to print out; to deregister'],
        ['na-', 'napisati', 'to write (to the end)'],
        ['o-', 'opisati', 'to describe'],
        ['od-', 'otpisati', 'to write off; to write back'],
        ['po-', 'popisati', 'to list, to take an inventory or census'],
        ['pod-', 'potpisati', 'to sign'],
        ['pre-', 'prepisati', 'to copy'],
        ['pri-', 'pripisati', 'to attribute; to add'],
        ['pro-', 'propisati', 'to prescribe, to lay down (a rule)'],
        ['raz-', 'raspisati', 'to announce (a tender, elections)'],
        ['u-', 'upisati', 'to enrol, to write in'],
        ['za-', 'zapisati', 'to write down, to record'],
      ],
    },
    {
      type: 'table',
      title: 'The Family of ići',
      headers: ['Prefix', 'Verb (present)', 'Meaning'],
      rows: [
        ['do-', 'doći (dođem)', 'to come, to arrive'],
        ['iz-', 'izaći / izići (izađem / iziđem)', 'to go out'],
        ['na-', 'naći (nađem)', 'to find'],
        ['nad-', 'nadići (nadiđem)', 'to overcome, to surpass'],
        ['o-', 'obići (obiđem)', 'to go round, to visit'],
        ['od-', 'otići (odem)', 'to leave, to go away'],
        ['po-', 'poći (pođem)', 'to set off'],
        ['pre-', 'prijeći (prijeđem)', 'to cross, to go over'],
        ['pri-', 'prići (priđem)', 'to approach, to come up to'],
        ['pro-', 'proći (prođem)', 'to pass, to go through'],
        ['raz-', 'razići se (raziđemo se)', 'to disperse, to part'],
        ['s-', 'sići (siđem)', 'to come down'],
        ['u-', 'ući (uđem)', 'to enter'],
        ['za-', 'zaći (zađem)', 'to go behind; (of the sun) to set'],
      ],
    },
    {
      type: 'rule',
      title: 'What Each Prefix Means',
      body: 'do- reaching or adding (doći, dopisati); iz- out of, or thoroughly (izaći, ispisati); na- onto, or simply completion (napisati, naći); nad- over, above, surpassing (nadići, nadmašiti, nadživjeti); o- around, covering (obići, opisati); od- away, off, back (otići, otpisati); po- setting off, a little, or completion (poći, popričati, popisati); pod- under (potpisati — writing under; podcrtati); pre- across, over again (prijeći, prepisati); pred- in front, before (predvidjeti, predložiti); pri- towards, attaching (prići, pripisati); pro- through, past (proći, propisati); raz- apart, in all directions (razići se, raspisati); s- down, together (sići, skupiti); u- into (ući, upisati); uz- up (uspeti se, uzdignuti); za- behind, beginning, recording (zaći, zaplakati, zapisati).',
      highlight: 'od- away, off, back',
    },
    {
      type: 'rule',
      title: 'Spelling: the Prefix Assimilates',
      body: 'Croatian spelling follows pronunciation. A prefix ending in a voiced consonant becomes voiceless before p, t, k, s, š, č, ć, f, h: iz + pisati → ispisati, od + pisati → otpisati, pod + pisati → potpisati, raz + pisati → raspisati, uz + peti se → uspeti se. Before a voiced consonant or a vowel nothing changes: odgovoriti, izabrati, podići, razbiti. So "podpisati" and "odpisati" are spelling errors.',
      highlight: 'pod + pisati → potpisati',
    },
    {
      type: 'rule',
      title: 'Aspect: the New Imperfective',
      body: 'Because a prefix makes the verb perfective, Croatian builds a NEW imperfective with a suffix when it needs the ongoing or repeated sense: potpisati → potpisivati, opisati → opisivati, prepisati → prepisivati, upisati → upisivati, zapisati → zapisivati. The ići family uses -laziti: doći → dolaziti, otići → odlaziti, izaći → izlaziti, ući → ulaziti, proći → prolaziti, naći → nalaziti, obići → obilaziti, prijeći → prelaziti, sići → silaziti, zaći → zalaziti. Sunce zalazi (the sun is setting) is the ongoing process; Sunce je zašlo (the sun has set) is the result.',
      highlight: 'obići → obilaziti',
    },
    {
      type: 'example',
      title: 'The pisati Family at Work',
      items: [
        {
          hr: 'Molim vas da potpišete ugovor na dnu svake stranice.',
          en: 'Please sign the contract at the bottom of every page.',
          note: 'pod- under: writing your name under the text',
        },
        {
          hr: 'Ministarstvo je raspisalo natječaj za obnovu stare knjižnice.',
          en: 'The ministry announced a tender for the renovation of the old library.',
          note: 'raz- outwards: sending the announcement out',
        },
        {
          hr: 'Zakon propisuje da se porez plaća do kraja mjeseca.',
          en: 'The law lays down that the tax is paid by the end of the month.',
          note: 'pro- with pisati: to prescribe, to lay down',
        },
        {
          hr: 'Ove su godine u prvi razred upisali više djece nego lani.',
          en: 'This year they enrolled more children in the first grade than last year.',
          note: 'u- into: writing a name into the register',
        },
        {
          hr: 'Banka mu je otpisala dio duga jer je izgubio posao.',
          en: 'The bank wrote off part of his debt because he lost his job.',
          note: 'od- off, away',
        },
      ],
    },
    {
      type: 'example',
      title: 'The ići Family at Work',
      items: [
        {
          hr: 'Ljeti obilazimo otoke, a ove smo godine obišli cijeli Kvarner.',
          en: 'In summer we visit the islands, and this year we went round the whole Kvarner.',
          note: 'obilaziti for the habit, obići for the completed tour',
        },
        {
          hr: 'Konobar je prišao našem stolu i preporučio domaću ribu.',
          en: 'The waiter came up to our table and recommended the local fish.',
          note: 'pri- towards, with the dative',
        },
        {
          hr: 'Kad prijeđete most, siđite niz stepenice do obale.',
          en: 'When you have crossed the bridge, go down the steps to the shore.',
          note: 'pre- across; s- down',
        },
        {
          hr: 'Sunce je zašlo iza brda, a djeca su još uvijek bila na plaži.',
          en: 'The sun had set behind the hill, and the children were still on the beach.',
          note: 'za- behind: the sun "going behind"',
        },
        {
          hr: 'Nakon koncerta ljudi su se polako razišli po gradu.',
          en: 'After the concert people slowly dispersed through the town.',
          note: 'raz- apart, in all directions',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What does adding a prefix such as za- or pod- usually do to the aspect of pisati?',
      options: [
        'nothing — it stays imperfective',
        'it makes the verb perfective',
        'it makes the verb reflexive',
        'it turns the verb into a noun',
      ],
      correct: 1,
      explanation:
        'A prefix both shifts the meaning and makes the verb perfective: zapisati, potpisati. A new imperfective is then built with a suffix: zapisivati, potpisivati.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which verb means "to copy (a text)"?',
      options: ['propisati', 'opisati', 'prepisati', 'upisati'],
      correct: 2,
      explanation:
        'pre- means across, from one place onto another: prepisati. propisati is to lay down a rule, opisati to describe, upisati to enrol.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first is spelling the prefix as it looks rather than as it sounds: "podpisati", "odpisati", "razpisati" — Croatian writes the assimilation: potpisati, otpisati, raspisati. The second is confusing two prefixes on one root: propisati (to lay down a rule) is not prepisati (to copy), and opisati (to describe) is not upisati (to enrol). The third is a prefixed perfective for an action spread over time: "Cijelo smo popodne obišli muzej" — duration needs the new imperfective: Cijelo smo popodne obilazili muzej. The fourth is the present of otići: the standard is odem, odeš, ode — not "otiđem".',
      highlight: 'potpisati, otpisati, raspisati',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Zakon ___ da se porez plaća do kraja mjeseca." (lays down)',
          options: ['propisuje', 'prepisuje', 'opisuje', 'upisuje'],
          correct: 0,
          explanation:
            'pro- with pisati means to lay down a rule: propisuje. prepisuje is copies, opisuje describes, upisuje enrols.',
        },
        {
          q: 'Complete: "___ broj da ga ne zaboraviš." (write down)',
          options: ['Opiši', 'Potpiši', 'Zapiši', 'Otpiši'],
          correct: 2,
          explanation: 'za- here records something: zapiši broj.',
        },
        {
          q: 'Which spelling is correct?',
          options: ['podpisati', 'potpisati', 'potbisati', 'pod pisati'],
          correct: 1,
          explanation: 'd becomes t before p, and Croatian writes it: potpisati.',
        },
        {
          q: 'Complete: "Sunce ___ iza brda." (is setting)',
          options: ['zalazi', 'izlazi', 'dolazi', 'ulazi'],
          correct: 0,
          explanation:
            'za- behind: the sun goes behind the hill. izlazi is rising; dolazi and ulazi do not fit.',
        },
        {
          q: 'Which is the imperfective partner of "prijeći"?',
          options: ['prijelaziti', 'proći', 'prelaziti', 'prijeđivati'],
          correct: 2,
          explanation:
            'The secondary imperfective of the ići family ends in -laziti, with short e: prelaziti.',
        },
        {
          q: 'Which sentence means "We went round the whole old town"?',
          options: [
            'Otišli smo cijeli stari grad.',
            'Ušli smo cijeli stari grad.',
            'Došli smo cijeli stari grad.',
            'Obišli smo cijeli stari grad.',
          ],
          correct: 3,
          explanation: 'o- around, with a direct object: obići grad.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Prefixed Verbs — Key Takeaways',
      points: [
        'A prefix shifts the meaning AND makes the verb perfective',
        'pisati: dopisati, ispisati, opisati, otpisati, potpisati, prepisati, propisati, upisati, zapisati',
        'ići: doći, izaći, naći, obići, otići, poći, prijeći, prići, proći, sići, ući, zaći',
        'Spelling assimilates: ispisati, otpisati, potpisati, raspisati',
        'The new imperfective: potpisivati, obilaziti, prelaziti, zalaziti',
      ],
    },
  ],
};

const P_PREFIXED_VERBS = {
  worked: [
    {
      title: 'Writing Under Something',
      problem: 'Odaberi glagol: "Molim vas da ___ ovaj ugovor do petka." (sign)',
      en: 'Choose the verb: Please sign this contract by Friday.',
      steps: [
        {
          label: 'The root',
          text: 'Signing is a kind of writing, so the root is pisati.',
        },
        {
          label: 'The prefix',
          text: 'Signing is writing your name UNDER the text: pod-.',
        },
        {
          label: 'The spelling',
          text: 'd becomes voiceless before p, and Croatian writes it: potpisati.',
        },
        {
          label: 'The form',
          text: 'After molim vas da comes the present, 2nd plural: potpišete.',
        },
      ],
      answer: 'Molim vas da potpišete ovaj ugovor do petka.',
    },
    {
      title: 'Once, or Every Summer?',
      problem: 'Prevedi: "Every summer we go round the island."',
      en: 'Translate: Every summer we go round the island.',
      steps: [
        {
          label: 'The meaning',
          text: 'Going round something is o- + ići: obići.',
        },
        {
          label: 'The aspect',
          text: 'Every summer is a habit, and a habit is normally expressed with the imperfective.',
        },
        {
          label: 'The new imperfective',
          text: 'The ići family builds it with -laziti: obilaziti, 1st plural obilazimo.',
        },
      ],
      answer: 'Svakog ljeta obilazimo otok.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Complete: "Učiteljica je rekla da ___ tekst s ploče." (we copy)',
        options: ['prepišemo', 'propišemo', 'opišemo', 'otpišemo'],
        correct: 0,
        hint: 'This prefix means across: from one place onto another.',
        explanation: 'prepisati — to copy.',
      },
      {
        q: 'Complete: "Banka mu je ___ dug." (wrote off)',
        options: ['opisala', 'upisala', 'otpisala', 'prepisala'],
        correct: 2,
        hint: 'The prefix meaning away, off.',
        explanation: 'otpisati dug — to write off a debt.',
      },
      {
        q: 'Complete: "Trener je poraz ___ umoru igrača." (attributed)',
        options: ['pripisao', 'propisao', 'upisao', 'prepisao'],
        correct: 0,
        hint: 'The prefix meaning towards, attaching one thing to another.',
        explanation: 'pripisati nešto nečemu — to attribute something to something.',
      },
      {
        q: 'Which prefix carries the meaning "out of"?',
        options: ['u-', 'iz-', 'za-', 'do-'],
        correct: 1,
        hint: 'Think of the verb for going out of a building.',
        explanation: 'iz-: izaći, ispisati.',
      },
      {
        q: 'Complete: "Konobar je ___ našem stolu." (came up to)',
        options: ['prošao', 'prišao', 'obišao', 'sišao'],
        correct: 1,
        hint: 'The prefix meaning towards, with the dative.',
        explanation: 'prići nekome — to come up to someone.',
      },
      {
        q: 'Which spelling is correct?',
        options: ['razpisati', 'raz pisati', 'raspisati', 'rasbisati'],
        correct: 2,
        hint: 'z becomes voiceless before p, and the spelling shows it.',
        explanation: 'raz + pisati → raspisati.',
      },
      {
        q: 'What does "nadživjeti" mean?',
        options: ['to outlive', 'to live under', 'to revive', 'to move in'],
        correct: 0,
        hint: 'nad- means over, above, surpassing.',
        explanation: 'nadživjeti — to live longer than someone.',
      },
      {
        q: 'Which is the imperfective partner of "obići"?',
        options: ['obilasiti', 'obićivati', 'obidovati', 'obilaziti'],
        correct: 3,
        hint: 'The ići family builds its new imperfective with -laziti.',
        explanation: 'obići → obilaziti.',
      },
      {
        type: 'type',
        q: '____ se, molim vas, na dnu obrasca. (sign — formal imperative, pod- + pisati)',
        answer: 'Potpišite',
        hint: 'Remember what happens to d before p.',
        explanation: 'Potpišite se — pod- assimilates to pot- before p.',
      },
      {
        type: 'type',
        q: 'Liječnik je pacijentu ____ mirovanje. (prescribed — pro- + pisati)',
        answer: 'propisao',
        hint: 'The past participle, masculine singular.',
        explanation: 'propisati — to prescribe.',
      },
      {
        type: 'type',
        q: 'Ljeti sunce ____ tek oko devet sati. (sets — za- + ići, imperfective)',
        answer: 'zalazi',
        hint: 'The new imperfective of the ići family ends in -laziti; 3rd singular present.',
        explanation: 'Sunce zalazi — the ongoing process.',
      },
      {
        type: 'type',
        q: 'Prošlog smo ljeta ____ cijelu Istru. (went round — o- + ići, perfective)',
        answer: 'obišli',
        hint: 'The perfective past, masculine plural.',
        explanation: 'Obišli smo cijelu Istru.',
      },
      {
        type: 'type',
        q: 'Sina ove godine ____ u prvi razred. (I am enrolling — u- + pisati, imperfective)',
        answer: 'upisujem',
        hint: 'The new imperfective in -ivati, 1st singular present.',
        explanation: 'upisivati → upisujem.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Molim vas, ___ ovdje, na dnu stranice." (sign)',
      options: ['opišite', 'potpišite', 'prepišite', 'propišite'],
      correct: 1,
      explanation: 'pod- under: potpisati.',
    },
    {
      q: 'Complete: "Grad je ___ natječaj za novu knjižnicu." (announced a tender)',
      options: ['raspisao', 'prepisao', 'upisao', 'dopisao'],
      correct: 0,
      explanation: 'raspisati natječaj — to announce a tender.',
    },
    {
      q: 'Which spelling is correct?',
      options: ['odpisati', 'otpisati', 'otbisati', 'od-pisati'],
      correct: 1,
      explanation: 'd becomes t before p: otpisati.',
    },
    {
      q: 'Complete: "Djeca su ___ niz stepenice." (came down)',
      options: ['izašla', 'ušla', 'sišla', 'obišla'],
      correct: 2,
      explanation: 's- down: sići, sišla.',
    },
    {
      q: 'Which prefix means "over, above, surpassing"?',
      options: ['pod-', 'nad-', 'pred-', 'pri-'],
      correct: 1,
      explanation: 'nad-: nadići, nadmašiti, nadživjeti.',
    },
    {
      q: 'Which is the imperfective partner of "upisati"?',
      options: ['upisavati', 'upisovati', 'upisuvati', 'upisivati'],
      correct: 3,
      explanation: 'The pisati family forms it with -ivati: upisivati.',
    },
  ],
  vocab: [
    ['potpisati', 'to sign', 'Potpišite ugovor na dnu stranice.'],
    ['propisati', 'to prescribe, to lay down', 'Zakon propisuje rok plaćanja.'],
    ['raspisati', 'to announce (a tender, elections)', 'Vlada je raspisala izbore.'],
    ['upisati', 'to enrol', 'Upisala je fakultet u Zagrebu.'],
    ['otpisati', 'to write off', 'Banka je otpisala dug.'],
    ['obići', 'to go round, to visit', 'Obišli smo cijeli stari grad.'],
    ['prijeći', 'to cross', 'Prijeđite cestu na pješačkom prijelazu.'],
    ['nadmašiti', 'to surpass', 'Rezultati su nadmašili očekivanja.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 48 · comparative-clauses — kao što, kao da, koliko… toliko, što… to, nego što
// ─────────────────────────────────────────────────────────────────────────────
const L_COMPARATIVE_CLAUSES = {
  id: 'comparative-clauses',
  title: 'Comparative Clauses',
  subtitle: 'kao što, kao da, nego što, koliko… toliko, što… to',
  icon: '⚖️',
  level: 'C1',
  duration: '~6 min',
  color: '#0f766e',
  bg: '#f0fdfa',
  slides: [
    {
      type: 'intro',
      title: 'Comparing Whole Situations',
      body: 'At B1 you compared two things: veći od mene, bolje nego jučer. A comparative clause (usporedna or poredbena rečenica) compares a whole situation with another: He behaves AS IF he were the boss; it is dearer THAN WE THOUGHT; THE SOONER we leave, THE BETTER. Croatian has five workhorses for this, and each has its own rules about tense and commas.',
      icon: '⚖️',
    },
    {
      type: 'table',
      title: 'The Five Conjunctions',
      headers: ['Conjunction', 'Meaning', 'Example'],
      rows: [
        ['kao što', 'as, the way (a real fact)', 'Učinio je kao što smo se dogovorili.'],
        ['kao da', 'as if (only an appearance)', 'Ponaša se kao da je šef.'],
        ['nego što', 'than (after a comparative)', 'Skuplje je nego što sam mislio.'],
        ['koliko… toliko', 'as much… so much', 'Koliko radiš, toliko zaradiš.'],
        ['što… to', 'the more… the more', 'Što prije, to bolje.'],
      ],
    },
    {
      type: 'rule',
      title: 'Kao što: a Real Comparison',
      body: 'kao što compares with something that really is or was: Sve je ispalo kao što smo planirali (everything turned out as we had planned). Kao što znate, ured je zatvoren (as you know, the office is closed). kako can often stand in for it: Sve je ispalo kako smo planirali.',
      highlight: 'kao što smo planirali',
    },
    {
      type: 'rule',
      title: 'Kao da: As If — and the Tense Stays Put',
      body: 'kao da compares with something that only APPEARS to be the case: Ponaša se kao da je šef (he behaves as if he were the boss). Izgleda kao da će padati kiša. The key point for English speakers: the verb after kao da does not shift into the past when the main verb does. Ponašao se kao da je šef. Gledala me kao da me ne poznaje. For something that would have happened EARLIER, the perfect is used: Gleda me kao da me nikad nije vidio.',
      highlight: 'Ponašao se kao da je šef.',
    },
    {
      type: 'rule',
      title: 'Nego što: Than + a Clause',
      body: 'After a comparative, a noun or adverb is compared with od or nego: skuplje od kave, bolje nego jučer. When a whole clause follows, standard Croatian uses nego što: Stan je skuplji nego što smo očekivali. Radio je više nego što je trebalo. od cannot introduce a clause, so "skuplji od što smo očekivali" is impossible.',
      highlight: 'nego što smo očekivali',
    },
    {
      type: 'rule',
      title: 'Proportion: Koliko… Toliko and Što… To',
      body: 'koliko… toliko measures amount against amount: Koliko platiš, toliko dobiješ. Koliko si uložio, toliko ćeš i dobiti. što… to pairs two comparatives — the more one thing, the more another: Što prije, to bolje. Što više čitaš, to bolje pišeš. Što je stariji, to je mudriji. The variant čim… tim (Čim prije, tim bolje) is also heard and written; što… to is the commoner pair.',
      highlight: 'Što prije, to bolje.',
    },
    {
      type: 'rule',
      title: 'Commas',
      body: 'When the comparative clause comes FIRST, a comma separates it from the main clause: Kao što sam rekao, sastanak je otkazan. Koliko radiš, toliko zaradiš. Što prije krenemo, to ćemo prije stići. When the comparison follows a comparative or a verb it is tied to, there is no comma: Skuplje je nego što sam mislio. Ponaša se kao da je šef.',
      highlight: 'Koliko radiš, toliko zaradiš.',
    },
    {
      type: 'example',
      title: 'As, As If, Than',
      items: [
        {
          hr: 'Sve je na kraju ispalo točno onako kao što smo planirali još prošle zime.',
          en: 'In the end everything turned out exactly as we had planned last winter.',
          note: 'kao što: a real fact as the standard of comparison',
        },
        {
          hr: 'Novi kolega ponaša se kao da je on šef cijelog odjela.',
          en: 'The new colleague behaves as if he were the head of the whole department.',
          note: 'kao da: only an appearance',
        },
        {
          hr: 'Gledala me je kao da me nikad u životu nije vidjela.',
          en: 'She looked at me as if she had never seen me in her life.',
          note: 'kao da + the perfect for something earlier',
        },
        {
          hr: 'Popravak automobila bio je skuplji nego što nam je majstor rekao.',
          en: 'The car repair was more expensive than the mechanic had told us.',
          note: 'nego što after a comparative, no comma',
        },
        {
          hr: 'Kao što svi znate, sastanak je pomaknut na četvrtak u deset sati.',
          en: 'As you all know, the meeting has been moved to Thursday at ten.',
          note: 'the clause comes first, so a comma follows it',
        },
      ],
    },
    {
      type: 'example',
      title: 'Proportion',
      items: [
        {
          hr: 'Koliko truda uložiš u učenje jezika, toliko ćeš i napredovati.',
          en: 'As much effort as you put into learning a language, so much progress will you make.',
          note: 'koliko… toliko: amount against amount',
        },
        {
          hr: 'Što više čitaš na hrvatskom, to ti je lakše pisati i govoriti.',
          en: 'The more you read in Croatian, the easier it is for you to write and speak.',
          note: 'što… to with two comparatives',
        },
        {
          hr: 'Što smo se više približavali obali, to je vjetar bio jači.',
          en: 'The closer we got to the shore, the stronger the wind became.',
          note: 'što… to in the past',
        },
        {
          hr: 'Ako želiš rezervirati smještaj na moru, što prije, to bolje.',
          en: 'If you want to book accommodation at the seaside, the sooner the better.',
          note: 'the short fixed form, with a comma',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which conjunction introduces an unreal comparison — "as if"?',
      options: ['kao što', 'kao da', 'nego što', 'koliko'],
      correct: 1,
      explanation:
        'kao da compares with an appearance: Ponaša se kao da je šef. kao što compares with a real fact.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'After a comparative, what introduces a whole clause?',
      options: ['od', 'od što', 'nego što', 'kao da'],
      correct: 2,
      explanation:
        'od and nego take a noun or adverb; a clause needs nego što: skuplje nego što sam mislio.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first is od before a clause: "Bolje je od što sam mislio" — a clause after a comparative needs nego što: Bolje je nego što sam mislio. The second is translating "as if" word for word as "kao ako" — Croatian says kao da. The third is shifting the verb after kao da into the past to match English "he behaved as if he WAS": when the appearance is simultaneous, the present stays — Ponašao se kao da je šef. The fourth is a missing comma when the comparative clause comes first: Koliko radiš, toliko zaradiš.',
      highlight: 'Bolje je nego što sam mislio.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ponaša se ___ je on ovdje šef." (as if)',
          options: ['kao da', 'kao ako', 'kako ako', 'nego da'],
          correct: 0,
          explanation: 'An unreal comparison takes kao da. "kao ako" is a calque of English.',
        },
        {
          q: 'Complete: "Stan je skuplji ___ smo očekivali."',
          options: ['od što', 'nego što', 'kao da', 'koliko'],
          correct: 1,
          explanation: 'A clause after a comparative needs nego što.',
        },
        {
          q: 'Complete: "___ prije krenemo, to ćemo prije stići."',
          options: ['Koliko', 'Kao', 'Što', 'Nego'],
          correct: 2,
          explanation: 'Two comparatives in proportion: što… to.',
        },
        {
          q: 'Which sentence is correctly punctuated?',
          options: [
            'Koliko radiš toliko zaradiš.',
            'Koliko, radiš toliko zaradiš.',
            'Koliko radiš toliko, zaradiš.',
            'Koliko radiš, toliko zaradiš.',
          ],
          correct: 3,
          explanation: 'The comparative clause comes first, so a comma closes it.',
        },
        {
          q: '"Ponašao se kao da ništa ne zna." Why is zna in the present?',
          options: [
            'kao da describes an appearance at that moment, so the verb does not shift into the past',
            'it is a mistake for znao',
            'kao da is always followed by the future',
            'the present means he will know later',
          ],
          correct: 0,
          explanation:
            'Croatian does not backshift after kao da when the appearance is simultaneous with the main verb.',
        },
        {
          q: 'Complete: "Sve je ispalo točno ___ smo planirali." (exactly as)',
          options: ['nego da', 'koliko što', 'od što', 'kao što'],
          correct: 3,
          explanation: 'A real comparison with what actually happened: kao što.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Comparative Clauses — Key Takeaways',
      points: [
        'kao što: a real comparison — kao što smo planirali',
        'kao da: as if — the tense stays put: Ponašao se kao da je šef',
        'nego što after a comparative before a clause; never od',
        'koliko… toliko for amount; što… to for two comparatives',
        'Comparative clause first → comma; tied after the main clause → no comma',
      ],
    },
  ],
};

const P_COMPARATIVE_CLAUSES = {
  worked: [
    {
      title: 'Joining Two Sentences With a Comparison',
      problem: 'Spoji u jednu rečenicu: "Cijena je bila visoka. Nismo to očekivali."',
      en: 'Join into one sentence: The price was high. We did not expect it.',
      steps: [
        {
          label: 'What is being compared?',
          text: 'The real price against what we expected — so the adjective goes into the comparative: viša.',
        },
        {
          label: 'The conjunction',
          text: 'A whole clause follows the comparative, so nego što.',
        },
        {
          label: 'The polarity',
          text: 'The comparison itself says we expected less, so the clause is positive: smo očekivali.',
        },
        {
          label: 'Commas',
          text: 'The comparison follows the comparative it depends on: no comma.',
        },
      ],
      answer: 'Cijena je bila viša nego što smo očekivali.',
    },
    {
      title: 'The More…, the Less…',
      problem: 'Prevedi: "The more you practise, the less you are afraid."',
      en: 'Translate: The more you practise, the less you are afraid.',
      steps: [
        {
          label: 'The pair',
          text: 'Two comparatives in proportion: što… to.',
        },
        {
          label: 'The comparatives',
          text: 'more → više, less → manje.',
        },
        {
          label: 'Word order and comma',
          text: 'The što-clause comes first and is closed with a comma; the clitic se follows to: to se manje bojiš.',
        },
      ],
      answer: 'Što više vježbaš, to se manje bojiš.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Complete: "Izgleda ___ će padati kiša." (as if)',
        options: ['kao da', 'kao ako', 'nego da', 'kako ako'],
        correct: 0,
        hint: 'An appearance, not a fact: the "as if" conjunction.',
        explanation: 'Izgleda kao da će padati kiša.',
      },
      {
        q: 'Complete: "Zarada je bila manja ___ su obećali."',
        options: ['od što', 'nego što', 'koliko', 'kao da'],
        correct: 1,
        hint: 'A clause follows a comparative.',
        explanation: 'manja nego što su obećali.',
      },
      {
        q: 'Complete: "Što prije, ___ bolje."',
        options: ['tako', 'to', 'toliko', 'nego'],
        correct: 1,
        hint: 'The partner of što in a pair of comparatives.',
        explanation: 'Što prije, to bolje.',
      },
      {
        q: 'Which sentence is correctly punctuated?',
        options: [
          'Kao što znate ured je zatvoren.',
          'Kao što, znate ured je zatvoren.',
          'Kao što znate, ured je zatvoren.',
          'Kao, što znate ured je zatvoren.',
        ],
        correct: 2,
        hint: 'The comparative clause comes first.',
        explanation: 'A comma closes the opening kao što clause.',
      },
      {
        q: 'What does "Ponašao se kao da je šef" mean?',
        options: [
          'He behaved as if he were the boss.',
          'He behaved the way the boss behaves.',
          'He behaved better than the boss.',
          'He became the boss.',
        ],
        correct: 0,
        hint: 'kao da compares with an appearance.',
        explanation: 'An unreal comparison: as if he were the boss.',
      },
      {
        q: 'Complete: "Učinio sam točno ___ si mi rekao."',
        options: ['nego što', 'koliko', 'od što', 'kao što'],
        correct: 3,
        hint: 'A real comparison with what you were told.',
        explanation: 'točno kao što si mi rekao.',
      },
      {
        q: 'Complete: "Koliko si uložio, ___ ćeš i dobiti."',
        options: ['toliko', 'to', 'nego', 'kao'],
        correct: 0,
        hint: 'koliko has its own partner word.',
        explanation: 'Koliko… toliko: amount against amount.',
      },
      {
        q: 'Which pair takes a comparative in both halves: "the sooner…, the better…"?',
        options: ['kao što… tako', 'što… to', 'nego… nego', 'kao da… da'],
        correct: 1,
        hint: 'The same pair as in a well-known short phrase about hurrying.',
        explanation: 'Što prije krenemo, to ćemo prije stići.',
      },
      {
        type: 'type',
        q: 'Skuplje je ____ sam mislio. (than — before a clause)',
        answer: 'nego što',
        hint: 'Two words: the comparison word that is not od, plus a second word.',
        explanation: 'Skuplje je nego što sam mislio.',
      },
      {
        type: 'type',
        q: 'Ponaša se ____ ga se ništa ne tiče. (as if)',
        answer: 'kao da',
        hint: 'Two words for an unreal comparison.',
        explanation: 'Ponaša se kao da ga se ništa ne tiče.',
      },
      {
        type: 'type',
        q: '____ više čitaš, to bolje pišeš.',
        answer: 'Što',
        hint: 'The first half of the pair that ends in to.',
        explanation: 'Što više čitaš, to bolje pišeš.',
      },
      {
        type: 'type',
        q: 'Koliko radiš, ____ zaradiš.',
        answer: 'toliko',
        hint: 'The partner of koliko.',
        explanation: 'Koliko radiš, toliko zaradiš.',
      },
      {
        type: 'type',
        q: 'Sve je prošlo ____ smo se dogovorili. (as — a real comparison)',
        answer: 'kao što',
        accept: ['kako'],
        hint: 'Two words for a comparison with what really happened.',
        explanation: 'kao što smo se dogovorili (kako is also correct).',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Gleda me ___ me nikad prije nije vidio." (as if)',
      options: ['kao ako', 'kao da', 'kako ako', 'nego što'],
      correct: 1,
      explanation: 'An unreal comparison takes kao da.',
    },
    {
      q: 'Complete: "Posao je trajao dulje ___ smo mislili."',
      options: ['nego što', 'od što', 'kao da', 'koliko'],
      correct: 0,
      explanation: 'A clause after a comparative: nego što.',
    },
    {
      q: 'Complete: "Što više vježbaš, ___ bolje govoriš."',
      options: ['tako', 'nego', 'to', 'kao'],
      correct: 2,
      explanation: 'što… to with two comparatives.',
    },
    {
      q: 'Complete: "___ platiš, toliko dobiješ."',
      options: ['Kao što', 'Što', 'Nego', 'Koliko'],
      correct: 3,
      explanation: 'toliko answers koliko.',
    },
    {
      q: 'Which sentence is correctly punctuated?',
      options: [
        'Kao što sam rekao sastanak je otkazan.',
        'Kao što sam rekao, sastanak je otkazan.',
        'Kao, što sam rekao sastanak je otkazan.',
        'Kao što, sam rekao sastanak je otkazan.',
      ],
      correct: 1,
      explanation: 'The comparative clause comes first, so a comma follows it.',
    },
    {
      q: 'Which sentence is correctly punctuated?',
      options: [
        'Stan je veći, nego što smo mislili.',
        'Stan je veći nego što smo mislili.',
        'Stan je, veći nego što smo mislili.',
        'Stan je veći nego, što smo mislili.',
      ],
      correct: 1,
      explanation: 'nego što follows the comparative it depends on: no comma.',
    },
  ],
  vocab: [
    ['usporedba', 'comparison', 'Usporedba dviju ponuda pokazala je razliku u cijeni.'],
    ['ponašati se', 'to behave', 'Ponaša se kao da je šef.'],
    ['očekivati', 'to expect', 'Bilo je skuplje nego što smo očekivali.'],
    ['uložiti', 'to invest, to put in', 'Koliko uložiš, toliko dobiješ.'],
    ['zaraditi', 'to earn', 'Koliko radiš, toliko zaradiš.'],
    ['napredovati', 'to make progress', 'Što više vježbaš, to brže napreduješ.'],
    ['ispasti', 'to turn out', 'Sve je ispalo kao što smo planirali.'],
    ['dogovoriti se', 'to agree, to arrange', 'Učinio je kao što smo se dogovorili.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 49 · direct-speech-spelling — writing direct speech per Hrvatski pravopis
// ─────────────────────────────────────────────────────────────────────────────
const L_DIRECT_SPEECH_SPELLING = {
  id: 'direct-speech-spelling',
  title: 'Writing Direct Speech',
  subtitle: 'Croatian quotation marks, and where the comma, colon and capital go',
  icon: '💬',
  level: 'C1',
  duration: '~6 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'Same Words, Different Punctuation',
      body: "Direct speech (upravni govor) reports someone's exact words; reported speech (neupravni govor) retells them in a da-clause. Croatian punctuates direct speech differently from English — different quotation marks, the comma OUTSIDE them, and a colon where English often has a comma. These are the rules of Hrvatski pravopis, and they are exactly what a Croatian editor checks first.",
      icon: '💬',
    },
    {
      type: 'rule',
      title: 'The Marks Themselves',
      body: 'Croatian quotation marks (navodnici) open LOW and close HIGH: „Dođi.“ The pointed marks »Dođi.« are also accepted in print. English-style "…" are not the Croatian norm. A quotation inside a quotation takes single marks (polunavodnici): ‚…‘ — for example „Rekao je ‚nikad‘ i otišao.“ Printers also use other single-mark shapes; what matters is that the inner pair is single.',
      highlight: '„Dođi.“',
    },
    {
      type: 'table',
      title: 'Where the Reporting Clause Goes',
      headers: ['Position', 'Pattern'],
      rows: [
        ['before', 'Rekla je: „Dođi.“'],
        ['after', '„Dođi“, rekla je.'],
        ['after a question', '„Dolaziš li?“ upitala je.'],
        ['in the middle', '„Dođi“, rekla je, „i donesi kruh.“'],
        ['a quoted fragment', 'Rekao je da je to „posljednja prilika“.'],
      ],
    },
    {
      type: 'rule',
      title: 'Reporting Clause Before',
      body: 'The reporting clause (rekla je, upitao je, viknula je) is followed by a colon. The quotation then begins with a capital letter, and its own full stop, question mark or exclamation mark stays INSIDE the closing mark: Rekla je: „Dođi.“ Upitao je: „Gdje si?“',
      highlight: 'Rekla je: „Dođi.“',
    },
    {
      type: 'rule',
      title: 'Reporting Clause After',
      body: 'A quoted statement loses its full stop, and a comma comes AFTER the closing mark; the reporting clause continues in lower case: „Dođi“, rekla je. A question mark or exclamation mark is kept inside, and then there is no comma at all: „Dolaziš li?“ upitala je. „Stani!“ viknuo je. Note the order in the reporting clause: verb first, then the speaker — rekao je Marko.',
      highlight: '„Dođi“, rekla je.',
    },
    {
      type: 'rule',
      title: 'Reporting Clause in the Middle',
      body: 'When one sentence is split by the reporting clause, commas stand on both sides of it and the second part continues in lower case: „Dođi“, rekla je, „i donesi kruh.“ If the first part was already a complete sentence and a new one begins, the reporting clause ends with a full stop and the new quotation opens with a capital: „Dođi“, rekla je. „Večera je gotova.“',
      highlight: '„Dođi“, rekla je, „i donesi kruh.“',
    },
    {
      type: 'rule',
      title: 'Quoted Fragments and Literary Dialogue',
      body: "When only a few words are quoted inside your own sentence, they keep their lower case and the sentence's full stop goes outside: Ministar ga je nazvao „povijesnim danom“. In novels and stories dialogue is often written with a dash instead of quotation marks: each speaker's turn starts on a new line with a dash, and the reporting clause is set off by dashes without a comma: — Dođi — rekla je. Recognise it when you read; in essays, letters and articles use quotation marks.",
      highlight: 'posljednja prilika“.',
    },
    {
      type: 'example',
      title: 'Before and After',
      items: [
        {
          hr: 'Majka je s vrata viknula: „Zatvori prozor, hladno je!“',
          en: 'Mother shouted from the door: "Close the window, it\'s cold!"',
          note: 'colon, capital, the exclamation mark inside',
        },
        {
          hr: '„Kasnit ću pola sata“, rekao je Marko i spustio slušalicu.',
          en: '"I\'ll be half an hour late," said Marko and hung up.',
          note: 'no full stop inside, comma after the closing mark',
        },
        {
          hr: '„Jesi li već bila u Dubrovniku?“ upitala me nova susjeda.',
          en: '"Have you been to Dubrovnik yet?" my new neighbour asked me.',
          note: 'question mark kept, so no comma',
        },
        {
          hr: 'Profesor je na kraju predavanja rekao: „Do idućeg tjedna pročitajte treće poglavlje.“',
          en: 'At the end of the lecture the professor said: "Read the third chapter by next week."',
          note: 'the full stop belongs to the quotation, so it stays inside',
        },
      ],
    },
    {
      type: 'example',
      title: 'Middle, Fragments, Quotes Within Quotes',
      items: [
        {
          hr: '„Ne znam“, rekla je tiho, „gdje sam ostavila ključeve.“',
          en: '"I don\'t know," she said quietly, "where I left my keys."',
          note: 'one sentence split: commas on both sides, lower case after',
        },
        {
          hr: '„Stigli smo“, rekao je vozač. „Molim vas, nemojte ništa zaboraviti u autobusu.“',
          en: '"We\'ve arrived," said the driver. "Please don\'t leave anything on the bus."',
          note: 'a new sentence after the reporting clause: full stop, then a capital',
        },
        {
          hr: 'Ministar je otvaranje novog mosta nazvao „povijesnim danom“ za cijelu regiju.',
          en: 'The minister called the opening of the new bridge "a historic day" for the whole region.',
          note: 'a quoted fragment keeps its lower case',
        },
        {
          hr: 'Ana je napisala: „Na rastanku mi je rekao ‚nikad te neću zaboraviti‘ i otišao.“',
          en: "Ana wrote: \"When we parted he said to me 'I'll never forget you' and left.\"",
          note: 'a quotation inside a quotation takes single marks',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'In „Dođi“, rekla je. — where is the comma?',
      options: [
        'inside the closing mark',
        'after the closing mark',
        'there is no comma',
        'before the opening mark',
      ],
      correct: 1,
      explanation:
        'Croatian puts the comma outside the quotation marks, unlike English: „Dođi“, rekla je.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which mark follows a reporting clause that comes BEFORE the quotation?',
      options: ['a comma', 'a full stop', 'a colon', 'a dash'],
      correct: 2,
      explanation: 'Rekla je: „Dođi.“ — a colon, then a capital letter.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first is the English comma inside the marks: „Dođi,“ rekla je — in Croatian the comma comes after the closing mark: „Dođi“, rekla je. The second is keeping the full stop before the reporting clause: „Dođi.“ rekla je — the statement loses its full stop and takes a comma instead. The third is adding a comma after a question or exclamation mark: „Dolaziš li?“, upitala je — the question mark is enough. The fourth is a capital letter in the reporting clause after the quotation or in the continuation of a split sentence: „Dođi“, Rekla je, „I donesi kruh.“ The fifth is a comma instead of a colon before the quotation: Rekla je, „Dođi.“',
      highlight: '„Dođi“, rekla je.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which is correctly punctuated? (She said: Come.)',
          options: [
            'Rekla je: „Dođi.“',
            'Rekla je „Dođi.“',
            'Rekla je: „dođi.“',
            'Rekla je, „Dođi.“',
          ],
          correct: 0,
          explanation: 'Colon after the reporting clause, capital letter, full stop inside.',
        },
        {
          q: 'Which is correctly punctuated? (Come, she said.)',
          options: [
            '„Dođi,“ rekla je.',
            '„Dođi“, rekla je.',
            '„Dođi.“ rekla je.',
            '„Dođi“, Rekla je.',
          ],
          correct: 1,
          explanation:
            'The statement loses its full stop, the comma comes after the closing mark, and the reporting clause stays in lower case.',
        },
        {
          q: 'Which is correctly punctuated? (Are you coming? she asked.)',
          options: [
            '„Dolaziš li?“, upitala je.',
            '„Dolaziš li“, upitala je?',
            '„Dolaziš li?“ upitala je.',
            '„Dolaziš li?“ Upitala je.',
          ],
          correct: 2,
          explanation: 'The question mark stays inside and replaces the comma; lower case follows.',
        },
        {
          q: 'Which is correctly punctuated? (Come, she said, and bring bread.)',
          options: [
            '„Dođi“, rekla je, „I donesi kruh.“',
            '„Dođi,“ rekla je „i donesi kruh.“',
            '„Dođi“ rekla je „i donesi kruh.“',
            '„Dođi“, rekla je, „i donesi kruh.“',
          ],
          correct: 3,
          explanation:
            'One sentence split in two: commas on both sides of the reporting clause, and the second part continues in lower case.',
        },
        {
          q: 'What marks a quotation inside a quotation?',
          options: [
            'single quotation marks',
            'another pair of double low-high marks',
            'brackets',
            'dashes',
          ],
          correct: 0,
          explanation: 'The inner quotation takes single marks (polunavodnici).',
        },
        {
          q: "In novels, what often opens each speaker's line instead of quotation marks?",
          options: ['a dash', 'a colon', 'a semicolon', 'an asterisk'],
          correct: 0,
          explanation: 'Literary dialogue is often written with a dash: — Dođi — rekla je.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Direct Speech — Key Takeaways',
      points: [
        'Croatian marks open low, close high: „…“ (»…« also accepted)',
        'Before: Rekla je: „Dođi.“ — colon, capital, punctuation inside',
        'After: „Dođi“, rekla je. — comma outside, lower case',
        '„Dolaziš li?“ upitala je. — no comma after ? or !',
        'Middle: „Dođi“, rekla je, „i donesi kruh.“',
        'Quote within a quote: single marks; quoted fragment: full stop outside',
      ],
    },
  ],
};

const P_DIRECT_SPEECH_SPELLING = {
  worked: [
    {
      title: 'Moving the Reporting Clause to the End',
      problem: 'Napiši s navodnicima, najava iza: Marko je rekao „Doći ću sutra.“',
      en: 'Write with quotation marks, reporting clause after: Marko said "I\'ll come tomorrow."',
      steps: [
        {
          label: 'The quotation',
          text: 'Open low, close high: „Doći ću sutra…“.',
        },
        {
          label: 'The full stop',
          text: 'A statement followed by its reporting clause loses its full stop.',
        },
        {
          label: 'The comma',
          text: 'The comma comes after the closing mark, not inside it.',
        },
        {
          label: 'The reporting clause',
          text: 'Lower case, verb first: rekao je Marko.',
        },
      ],
      answer: '„Doći ću sutra“, rekao je Marko.',
    },
    {
      title: 'Splitting One Sentence',
      problem:
        'Podijeli rečenicu najavom u sredini: She said "I don\'t know where I left my keys."',
      en: 'Split the sentence with the reporting clause in the middle.',
      steps: [
        {
          label: 'Where to split',
          text: 'After Ne znam — the rest, gdje sam ostavila ključeve, is still the same sentence.',
        },
        {
          label: 'The commas',
          text: 'A comma after the first closing mark and another after the reporting clause.',
        },
        {
          label: 'The second part',
          text: 'It continues the same sentence, so it starts with a lower-case letter and ends with the full stop inside.',
        },
      ],
      answer: '„Ne znam“, rekla je, „gdje sam ostavila ključeve.“',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: "Which is correctly punctuated? (I'm tired, said Ivan.)",
        options: [
          '„Umoran sam,“ rekao je Ivan.',
          '„Umoran sam“, rekao je Ivan.',
          '„Umoran sam.“ rekao je Ivan.',
          '„Umoran sam“, Rekao je Ivan.',
        ],
        correct: 1,
        hint: 'Croatian keeps the comma outside the marks.',
        explanation: 'No full stop inside, comma after the closing mark, lower case.',
      },
      {
        q: 'Which is correctly punctuated? (Mum said: Close the window.)',
        options: [
          'Mama je rekla: „Zatvori prozor.“',
          'Mama je rekla „zatvori prozor.“',
          'Mama je rekla: „zatvori prozor“.',
          'Mama je rekla, „Zatvori prozor.“',
        ],
        correct: 0,
        hint: 'A reporting clause before the quotation is followed by a particular mark, then a capital.',
        explanation: 'Colon, capital, full stop inside.',
      },
      {
        q: 'Which is correctly punctuated? (Are you coming? asked Ana.)',
        options: [
          '„Dolaziš li?“, upitala je Ana.',
          '„Dolaziš li“, upitala je Ana?',
          '„Dolaziš li?“ upitala je Ana.',
          '„Dolaziš li?“ Upitala je Ana.',
        ],
        correct: 2,
        hint: "A question mark inside the marks does the comma's job.",
        explanation: 'No comma after ? or !, and lower case after.',
      },
      {
        q: 'Which is correctly punctuated? (I know, he said, but it is too late.)',
        options: [
          '„Znam,“ rekao je, „ali je prekasno.“',
          '„Znam“, rekao je, „Ali je prekasno.“',
          '„Znam“ rekao je „ali je prekasno.“',
          '„Znam“, rekao je, „ali je prekasno.“',
        ],
        correct: 3,
        hint: 'One sentence split in two: commas on both sides, and it continues.',
        explanation: 'Lower case in the continuation, commas outside the marks.',
      },
      {
        q: 'Which is correctly punctuated? (She wrote: He said "never" and left.)',
        options: [
          'Napisala je: „Rekao je „nikad“ i otišao.“',
          'Napisala je: „Rekao je ‚nikad‘ i otišao.“',
          'Napisala je: „Rekao je (nikad) i otišao.“',
          'Napisala je: „Rekao je - nikad - i otišao.“',
        ],
        correct: 1,
        hint: 'A quotation inside a quotation needs a different, smaller pair.',
        explanation: 'The inner quotation takes single marks.',
      },
      {
        q: 'Which is correctly punctuated? (The minister called it "a historic day".)',
        options: [
          'Ministar ga je nazvao „Povijesnim danom.“',
          'Ministar ga je nazvao: „povijesnim danom“.',
          'Ministar ga je nazvao „povijesnim danom“.',
          'Ministar ga je nazvao, „povijesnim danom“.',
        ],
        correct: 2,
        hint: 'A quoted fragment is part of your own sentence.',
        explanation: "Lower case, no colon, and the sentence's full stop outside.",
      },
      {
        q: 'Which is a correct line of literary dialogue written with dashes?',
        options: [
          '— Dođi — rekla je.',
          '— Dođi, — rekla je.',
          '— Dođi. — Rekla je.',
          'Dođi — rekla je —.',
        ],
        correct: 0,
        hint: 'With dashes, the reporting clause is set off without a comma.',
        explanation: 'The turn opens with a dash and the reporting clause sits between dashes.',
      },
      {
        q: 'In "Rekla je: „Dođi.“" which word begins with a capital letter after the colon?',
        options: ['none of them', 'rekla', 'Dođi', 'every word'],
        correct: 2,
        hint: 'After the colon a whole sentence is being quoted.',
        explanation: 'A full quoted sentence after a colon begins with a capital.',
      },
      {
        type: 'type',
        q: 'Direct speech is called ____ govor in Croatian.',
        answer: 'upravni',
        hint: 'Reported speech has the same name with the negative prefix ne- in front.',
        explanation: 'upravni govor (direct) against neupravni govor (reported).',
      },
      {
        type: 'type',
        q: 'A reporting clause before a quotation is followed by a ____ (the Croatian name of the mark ":").',
        answer: 'dvotočka',
        accept: ['dvotočku'],
        hint: 'Literally "two points".',
        explanation: 'Rekla je: „Dođi.“ — a dvotočka.',
      },
      {
        type: 'type',
        q: 'Single quotation marks used inside a quotation are called ____.',
        answer: 'polunavodnici',
        hint: 'Half of the ordinary marks, as the Croatian name says.',
        explanation: 'navodnici are the ordinary marks; polunavodnici the inner ones.',
      },
      {
        type: 'type',
        q: 'In „Dođi“, rekla je. the full stop of the quoted statement is replaced by a ____ (the Croatian name of the mark).',
        answer: 'zarez',
        hint: 'The same mark that separates clauses in a sentence.',
        explanation: 'The zarez comes after the closing mark.',
      },
    ],
  },
  checkB: [
    {
      q: 'Which is correctly punctuated? (He asked: Where are you?)',
      options: [
        'Upitao je: „Gdje si?“',
        'Upitao je: „gdje si?“',
        'Upitao je „Gdje si?“',
        'Upitao je, „Gdje si?“',
      ],
      correct: 0,
      explanation: 'Colon, capital, question mark inside.',
    },
    {
      q: "Which is correctly punctuated? (I'll be late, he said.)",
      options: [
        '„Kasnit ću,“ rekao je.',
        '„Kasnit ću.“ rekao je.',
        '„Kasnit ću“, rekao je.',
        '„Kasnit ću“, Rekao je.',
      ],
      correct: 2,
      explanation: 'No full stop inside, comma after the closing mark, lower case.',
    },
    {
      q: 'Which is correctly punctuated? (Stop! she shouted.)',
      options: [
        '„Stani!“, viknula je.',
        '„Stani!“ viknula je.',
        '„Stani“! viknula je.',
        '„Stani!“ Viknula je.',
      ],
      correct: 1,
      explanation: 'The exclamation mark stays inside and there is no comma.',
    },
    {
      q: 'Which is correctly punctuated? (Tomorrow, she said, we leave early.)',
      options: [
        '„Sutra“ rekla je „krećemo rano.“',
        '„Sutra,“ rekla je, „krećemo rano.“',
        '„Sutra“, rekla je, „Krećemo rano.“',
        '„Sutra“, rekla je, „krećemo rano.“',
      ],
      correct: 3,
      explanation: 'Commas outside the marks on both sides; the continuation in lower case.',
    },
    {
      q: 'Which is correctly punctuated? (He said it was "the last chance".)',
      options: [
        'Rekao je da je to „posljednja prilika“.',
        'Rekao je da je to „Posljednja prilika.“',
        'Rekao je da je to: „posljednja prilika“.',
        'Rekao je da je to, „posljednja prilika“.',
      ],
      correct: 0,
      explanation: 'A quoted fragment keeps lower case and the full stop goes outside.',
    },
    {
      q: 'In „Dođi.“ where do the two quotation marks sit?',
      options: ['both high', 'opening high, closing low', 'opening low, closing high', 'both low'],
      correct: 2,
      explanation: 'Croatian quotation marks open low and close high.',
    },
  ],
  vocab: [
    ['upravni govor', 'direct speech', 'Upravni govor bilježimo navodnicima.'],
    ['neupravni govor', 'reported speech', 'U neupravnom govoru riječi prepričavamo.'],
    ['navodnici', 'quotation marks', 'Hrvatski navodnici otvaraju se dolje.'],
    ['polunavodnici', 'single quotation marks', 'Navod unutar navoda piše se u polunavodnicima.'],
    ['dvotočka', 'colon', 'Iza najave dolazi dvotočka.'],
    ['zarez', 'comma', 'Zarez se piše iza navodnika.'],
    ['citat', 'quotation', 'Navela je kratak citat iz romana.'],
    ['pravopis', 'spelling rules, orthography', 'Pravopis propisuje pisanje navodnika.'],
  ],
};

/** Spine entries for this batch. `masterOrder` is the lesson's final C1 position. */
export const SPINE = [
  {
    id: 'depersonalization',
    masterOrder: 41,
    prerequisites: ['passive-choices', 'impersonal'],
    objectives: [
      'Make depersonalised statements with se: Priča se da…, Ne zna se tko…',
      'Put the impersonal verb into the past as a neuter singular: Pričalo se',
      'Use the subjectless third person plural: Kažu da…, Javljaju da…',
      'Choose the formal formula for a report: Utvrđeno je da…, Smatra se da…',
    ],
  },
  {
    id: 'prefixed-verbs',
    masterOrder: 42,
    prerequisites: ['tvorba-rijeci', 'aspect-nuance'],
    objectives: [
      'Know what each of the seventeen verbal prefixes adds to a root',
      'Use the pisati and ići families: potpisati, propisati, obići, prijeći',
      'Spell the assimilated prefixes: ispisati, otpisati, potpisati, raspisati',
      'Form the new imperfective: potpisivati, obilaziti, prelaziti',
    ],
  },
  {
    id: 'comparative-clauses',
    masterOrder: 48,
    prerequisites: ['clause-types', 'comparison-advanced'],
    objectives: [
      'Compare with a real fact (kao što) and an appearance (kao da)',
      'Keep the present after kao da: Ponašao se kao da je šef',
      'Use nego što before a clause after a comparative',
      'Express proportion with koliko… toliko and što… to, with the right commas',
    ],
  },
  {
    id: 'direct-speech-spelling',
    masterOrder: 49,
    prerequisites: ['reported-speech', 'clause-types'],
    objectives: [
      'Write Croatian quotation marks „…“ and single marks inside a quotation',
      'Punctuate a reporting clause before, after and in the middle of direct speech',
      'Place the comma outside the marks and drop it after ? and !',
      'Recognise dash dialogue in literature',
    ],
  },
];

/** Lesson bodies (same shape as lessonsC1.js). */
export const LESSONS = [
  L_DEPERSONALIZATION,
  L_PREFIXED_VERBS,
  L_COMPARATIVE_CLAUSES,
  L_DIRECT_SPEECH_SPELLING,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  depersonalization: P_DEPERSONALIZATION,
  'prefixed-verbs': P_PREFIXED_VERBS,
  'comparative-clauses': P_COMPARATIVE_CLAUSES,
  'direct-speech-spelling': P_DIRECT_SPEECH_SPELLING,
};
