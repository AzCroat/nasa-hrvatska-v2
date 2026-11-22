// src/data/drills/a1/instrumentalIntroDrill.ts
//
// A1 THE INSTRUMENTAL — the drill for the `instrumental-intro` lesson.
//
// Follows Hrvatski za početnike 1, pages 101–103 (unit "Putujemo zajedno"): the dialogue
// "Putujemo, ali čime?" (avionom, autom, autobusom, brodom), the INSTRUMENTAL IMENICA
// table ((s) kim? (s) čim?: autom / s prijateljem · s mamom · selom / morem) with its
// rule for -em after a soft consonant, the text "Čime se vozimo u Zagrebu?" (tramvajem,
// uspinjačom, biciklom, žičarom) and the rows "Ja se vozim ____. (vlak)". Singular nouns
// only; the instrumental of pronouns (sa mnom) has its own later lesson.
//
// Three modes:
//   sredstvo — the means, with no preposition: vlakom, tramvajem
//   drustvo  — company, with s or sa: s bratom, sa sestrom
//   izbor    — with or without s, -om or -em, and baviti se

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INSTRUMENTAL_INTRO_MODE_LABELS: Record<string, string> = {
  sredstvo: '🚋 Čime?',
  drustvo: '🧑‍🤝‍🧑 S kim?',
  izbor: '🎯 Izbor',
};

export const INSTRUMENTAL_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── sredstvo ──────────────────────────────────────────────────────────────
  {
    mode: 'sredstvo',
    q: 'U Dubrovnik putujemo ____. (brod)',
    en: 'We are traveling to Dubrovnik by boat.',
    opts: ['brodom', 'brodem', 'brodu', 'broda'],
    answer: 'brodom',
    tip: 'The means of travel takes the instrumental with no preposition: brod + -om. -em is only for stems ending in a soft consonant; brodu and broda are other cases.',
  },
  {
    mode: 'sredstvo',
    q: 'Po gradu se vozim ____. (tramvaj)',
    en: 'I get around town by streetcar.',
    opts: ['tramvajem', 'tramvajom', 'tramvaju', 'tramvaja'],
    answer: 'tramvajem',
    tip: 'tramvaj ends in j, a soft consonant, so the ending is -em: tramvajem. "tramvajom" uses the ending for hard consonants.',
  },
  {
    mode: 'sredstvo',
    q: 'Na posao idem ____. (auto)',
    en: 'I go to work by car.',
    opts: ['autom', 'autem', 'auta', 'autu'],
    answer: 'autom',
    tip: 'auto → autom: the -o is replaced by -om. No "s" is needed, because a car is a means, not company.',
  },
  {
    mode: 'sredstvo',
    q: 'Jasna ne voli autobus. Ona putuje ____. (avion)',
    en: 'Jasna does not like the bus. She travels by plane.',
    opts: ['avionom', 'avionem', 'avionu', 'aviona'],
    answer: 'avionom',
    tip: 'avion ends in a hard consonant: avion + -om. English "by" has no separate word in Croatian; the ending does the job.',
  },
  {
    mode: 'sredstvo',
    q: 'Na Gornji grad idemo ____. (uspinjača)',
    en: 'We go to the Upper Town by funicular.',
    opts: ['uspinjačom', 'uspinjačem', 'uspinjaču', 'uspinjači'],
    answer: 'uspinjačom',
    tip: 'A feminine noun always takes -om, even after the soft č: uspinjačom. The -em rule applies only to masculine and neuter nouns.',
  },
  {
    mode: 'sredstvo',
    q: 'Kad je lijepo vrijeme, vozim se ____. (bicikl)',
    en: 'When the weather is nice, I ride my bike.',
    opts: ['biciklom', 'biciklem', 'biciklu', 'bicikla'],
    answer: 'biciklom',
    tip: 'bicikl ends in a hard l, so -om: biciklom. Only lj is soft; a plain l is not.',
  },
  {
    mode: 'sredstvo',
    q: 'Na Sljeme se vozimo ____. (žičara)',
    en: 'We ride up Sljeme by cable car.',
    opts: ['žičarom', 'žičaru', 'žičari', 'žičarem'],
    answer: 'žičarom',
    tip: 'Feminine -a → -om: žičarom. žičaru and žičari are the accusative and the locative.',
  },
  {
    mode: 'sredstvo',
    q: 'Pišem ____. (olovka)',
    en: 'I am writing with a pencil.',
    opts: ['olovkom', 'olovku', 'olovki', 's olovkom'],
    answer: 'olovkom',
    tip: 'A tool is a means, so the bare instrumental: olovkom. Adding s would make the pencil your companion.',
  },
  {
    mode: 'sredstvo',
    q: '____ ideš na fakultet? — Tramvajem.',
    en: '… do you get to the university? — By streetcar.',
    opts: ['Čime', 'S kim', 'Kamo', 'Što'],
    answer: 'Čime',
    tip: 'Čime? asks for the means and is answered with a bare instrumental. S kim? asks who you are with, Kamo? where to, and Što? what.',
  },

  // ── drustvo ───────────────────────────────────────────────────────────────
  {
    mode: 'drustvo',
    q: 'Idem u kino s ____. (brat)',
    en: 'I am going to the movies with my brother.',
    opts: ['bratom', 'bratem', 'brata', 'bratu'],
    answer: 'bratom',
    tip: 'Company takes s + instrumental: s bratom. brat ends in a hard consonant, so -om, not -em.',
  },
  {
    mode: 'drustvo',
    q: 'Putujem s ____. (prijatelj)',
    en: 'I am traveling with a friend.',
    opts: ['prijateljem', 'prijateljom', 'prijatelja', 'prijatelju'],
    answer: 'prijateljem',
    tip: 'prijatelj ends in lj, a soft consonant, so -em: s prijateljem. "prijateljom" uses the hard ending.',
  },
  {
    mode: 'drustvo',
    q: 'Razgovaram s ____. (mama)',
    en: 'I am talking with Mom.',
    opts: ['mamom', 'mamu', 'mami', 'mamem'],
    answer: 'mamom',
    tip: 'Feminine -a → -om: s mamom. mamu is the accusative and mami the dative; neither can follow s in this meaning.',
  },
  {
    mode: 'drustvo',
    q: 'Svaki dan plivam s ____. (Ana)',
    en: 'I swim with Ana every day.',
    opts: ['Anom', 'Anu', 'Ani', 'Ane'],
    answer: 'Anom',
    tip: 'A name in -a takes -om too: s Anom. Anu, Ani and Ane are other cases.',
  },
  {
    mode: 'drustvo',
    q: 'Pijem kavu s ____. (mlijeko)',
    en: 'I drink coffee with milk.',
    opts: ['mlijekom', 'mlijekem', 'mlijeka', 'mlijeku'],
    answer: 'mlijekom',
    tip: 'A thing that comes along with another also takes s: kava s mlijekom. Neuter -o → -om.',
  },
  {
    mode: 'drustvo',
    q: 'Stanujem s ____. (cimer)',
    en: 'I live with a roommate.',
    opts: ['cimerom', 'cimerem', 'cimera', 'cimeru'],
    answer: 'cimerom',
    tip: 'cimer ends in a hard consonant, so -om: s cimerom. cimera is the accusative.',
  },
  {
    mode: 'drustvo',
    q: 'Idem na more ____ sestrom.',
    en: 'I am going to the seaside with my sister.',
    opts: ['sa', 's', 'za', 'na'],
    answer: 'sa',
    tip: 'Before a word that starts with s, š, z or ž, s becomes sa so it can be said: sa sestrom. za and na do not mean "with".',
  },
  {
    mode: 'drustvo',
    q: 'U subotu treniram ____ Šimom.',
    en: 'On Saturday I train with Šime.',
    opts: ['sa', 's', 'se', 'su'],
    answer: 'sa',
    tip: 'Šimom starts with š, so sa: sa Šimom. Plain s is for all other sounds; se and su are different words.',
  },
  {
    mode: 'drustvo',
    q: '____ putuješ u Split? — S bratom.',
    en: '… are you traveling to Split? — With my brother.',
    opts: ['S kim', 'Čime', 'Tko', 'Koga'],
    answer: 'S kim',
    tip: 'The answer names company, so S kim? ("with whom?"). Čime? would ask for the means of transport, such as vlakom.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'Which sentence is correct for "I am going by train"?',
    opts: ['Idem vlakom.', 'Idem s vlakom.', 'Idem vlak.', 'Idem na vlakom.'],
    answer: 'Idem vlakom.',
    tip: 'A means of transport takes the bare instrumental. "s vlakom" would make the train your companion, and vlak has no ending at all.',
  },
  {
    mode: 'izbor',
    q: 'Which sentence is correct for "I am going with my brother"?',
    opts: ['Idem s bratom.', 'Idem bratom.', 'Idem s brata.', 'Idem sa bratu.'],
    answer: 'Idem s bratom.',
    tip: 'A person you are with needs s. Without it, "Idem bratom" would mean you are riding your brother. s takes the instrumental, not brata or bratu.',
  },
  {
    mode: 'izbor',
    q: 'Bavim se ____. (sport)',
    en: 'I do sports.',
    opts: ['sportom', 'sport', 'sporta', 'sa sportom'],
    answer: 'sportom',
    tip: 'baviti se takes the instrumental with no preposition: Bavim se sportom. The plain form sport is the common mistake.',
  },
  {
    mode: 'izbor',
    q: 'Moja sestra se bavi ____. (glazba)',
    en: 'My sister is involved in music.',
    opts: ['glazbom', 'glazbu', 'glazbi', 's glazbom'],
    answer: 'glazbom',
    tip: 'baviti se + bare instrumental: glazbom. English suggests an object, but glazbu is wrong here, and no s is needed.',
  },
  {
    mode: 'izbor',
    q: 'Putujem ____ sa sestrom.',
    en: 'I am traveling by bus with my sister.',
    opts: ['autobusom', 's autobusom', 'autobus', 'autobusu'],
    answer: 'autobusom',
    tip: 'One sentence, both jobs: the means has no preposition (autobusom), the company has one (sa sestrom).',
  },
  {
    mode: 'izbor',
    q: 'Idemo ____ na more.',
    en: 'We are going to the seaside by car.',
    opts: ['autom', 's autom', 'sa autom', 'auto'],
    answer: 'autom',
    tip: 'By car is a means: bare autom. "s autom" is what English "with" tempts you to say, and sa is only used before s, š, z and ž.',
  },
  {
    mode: 'izbor',
    q: 'Which noun takes -em, not -om?',
    opts: ['prijatelj', 'brat', 'vlak', 'auto'],
    answer: 'prijatelj',
    tip: 'prijatelj ends in the soft lj: prijateljem. brat, vlak and auto take the usual -om: bratom, vlakom, autom.',
  },
  {
    mode: 'izbor',
    q: 'Pijem čaj ____.',
    en: 'I drink tea with lemon.',
    opts: ['s limunom', 'limunom', 's limuna', 'sa limunom'],
    answer: 's limunom',
    tip: 'Something that comes along with the tea takes s + instrumental: s limunom. Without s it would be a tool; limuna is the wrong case; sa is only for words in s, š, z, ž.',
  },
  {
    mode: 'izbor',
    q: 'Brod plovi ____.',
    en: 'The ship sails by sea.',
    opts: ['morem', 'morom', 'moru', 's morem'],
    answer: 'morem',
    tip: 'A neuter noun in -e takes -em: more → morem. "morom" copies the -om of selo → selom, and no s is needed for a route.',
  },
];
