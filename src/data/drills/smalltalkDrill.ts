// src/data/drills/smalltalkDrill.ts
//
// B2 CONVERSATIONAL FLUENCY — the drill for the `small-talk-fluency` lesson.
//
// Fluency at this level is not more vocabulary; it is what you do in the two
// seconds when a word will not come. A learner who has everything else goes
// SILENT there, and silence in a Croatian conversation is read as scepticism or
// disagreement rather than as thinking.
//
// So the material is the hesitation itself. *Pa* is the default opener and is
// entirely unmarked — *Pa, ovisi…* is how most answers begin. *Ovaj* is pure
// hesitation, *zapravo* and *u biti* buy a beat while reframing, and *Kako se
// ono kaže…* keeps you in the conversation while you hunt for the word, rather
// than dropping out of it.
//
// The other half is reacting while listening: *stvarno*, *aha*, *jasno*, *ma
// nemoj*, *i onda?*. A Croatian speaker expects a noise every few seconds and
// reads its absence as a problem.
//
// Three modes:
//   poštapalice — the fillers, and pa above all
//   popravak    — repairing out loud when the word will not come
//   reakcije    — keeping the other person in it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const SMALLTALK_MODE_LABELS: Record<string, string> = {
  postapalice: '💬 Poštapalice',
  popravak: '🔧 Popravak',
  reakcije: '👂 Reakcije',
};

export const SMALLTALK_DRILL_DATA: ModeDrillItem[] = [
  // ── postapalice ───────────────────────────────────────────────────────────
  {
    mode: 'postapalice',
    q: 'Koja riječ najčešće otvara odgovor?',
    en: 'Which word opens most answers?',
    opts: ['pa', 'ovaj', 'znaš', 'zapravo'],
    answer: 'pa',
    tip: 'Pa, ovisi… — entirely unmarked, and it buys a whole beat.',
  },
  {
    mode: 'postapalice',
    q: 'Što znači "ovaj…" usred rečenice?',
    en: 'What does ovaj… do mid-sentence?',
    opts: ['čisto oklijevanje', 'pokazuje na nešto', 'ispravlja', 'pita'],
    answer: 'čisto oklijevanje',
    tip: 'Pure hesitation — the Croatian "um". It points at nothing.',
  },
  {
    mode: 'postapalice',
    q: 'Što znači "zapravo"?',
    en: 'What does zapravo mean?',
    opts: ['actually', 'apparently', 'obviously', 'eventually'],
    answer: 'actually',
    tip: 'It reframes what you were about to say, and buys the time to do it.',
  },
  {
    mode: 'postapalice',
    q: 'Što znači "u biti"?',
    en: 'What does u biti mean?',
    opts: ['basically, in essence', 'in being', 'in fact only', 'in short'],
    answer: 'basically, in essence',
    tip: 'From bit, essence.',
  },
  {
    mode: 'postapalice',
    q: 'Zašto je šutnja lošija od poštapalice?',
    en: 'Why is silence worse than a filler?',
    opts: ['čita se kao neslaganje', 'nepristojna je', 'prekida rečenicu', 'nije lošija'],
    answer: 'čita se kao neslaganje',
    tip: 'Attentive silence reads as scepticism, not as politeness.',
  },
  {
    mode: 'postapalice',
    q: '____, ovisi o tome koliko imamo vremena.',
    en: 'Well, it depends how much time we have.',
    opts: ['Pa', 'Ovaj', 'Jasno', 'Stvarno'],
    answer: 'Pa',
    tip: 'Pa opens; ovaj hesitates. They are not interchangeable.',
  },
  {
    mode: 'postapalice',
    q: 'Je li "pa" na početku odgovora obilježeno?',
    en: 'Is a sentence-initial pa marked?',
    opts: ['ne, posve je neutralno', 'da, nepristojno je', 'da, formalno je', 'samo u pisanju'],
    answer: 'ne, posve je neutralno',
    tip: 'Which is exactly why it is the safest thing to reach for.',
  },
  {
    mode: 'postapalice',
    q: 'Kako da ____ … nisam siguran.',
    en: 'How shall I put it… I am not sure.',
    opts: ['kažem', 'kažeš', 'reći', 'rekao'],
    answer: 'kažem',
    tip: 'Kako da kažem… — first person, and it announces that you are choosing words.',
  },

  // ── popravak ──────────────────────────────────────────────────────────────
  {
    mode: 'popravak',
    q: 'Kako se ____ kaže… ona stvar za kavu.',
    en: 'What is the word for it… that coffee thing.',
    opts: ['ono', 'to', 'ovo', 'onaj'],
    answer: 'ono',
    tip: 'Kako se ono kaže… — a fixed phrase, and ono is not doing its usual job.',
  },
  {
    mode: 'popravak',
    q: 'Ne mogu se ____ riječi.',
    en: 'I cannot remember the word.',
    opts: ['sjetiti', 'sjećati', 'sjetim', 'sjetio'],
    answer: 'sjetiti',
    tip: 'Sjetiti se takes the GENITIVE: sjetiti se riječi.',
  },
  {
    mode: 'popravak',
    q: 'Koji padež traži "sjetiti se"?',
    en: 'Which case?',
    opts: ['genitiv', 'dativ', 'akuzativ', 'lokativ'],
    answer: 'genitiv',
    tip: 'Ne mogu se sjetiti njegova imena.',
  },
  {
    mode: 'popravak',
    q: 'Kako se traži vrijeme za razmišljanje?',
    en: 'Buying a moment:',
    opts: ['Da razmislim.', 'Razmislim.', 'Razmišljam da.', 'Da razmišljam.'],
    answer: 'Da razmislim.',
    tip: 'Da plus the perfective present — a complete moment of thought.',
  },
  {
    mode: 'popravak',
    q: 'Ne znam kako se to kaže ____ hrvatskom.',
    en: 'I do not know how to say it in Croatian.',
    opts: ['na', 'u', 'po', 'za'],
    answer: 'na',
    tip: 'na hrvatskom — na plus the locative for a language.',
  },
  {
    mode: 'popravak',
    q: 'Zašto je popravak naglas bolji od tišine?',
    en: 'Why repair out loud?',
    opts: ['sugovornik može pomoći', 'zvuči tečnije', 'kupuje više vremena', 'nema razlike'],
    answer: 'sugovornik može pomoći',
    tip: 'Nine times out of ten they supply the word, and the conversation never stops.',
  },
  {
    mode: 'popravak',
    q: '____ kao ono što se stavlja na kruh.',
    en: 'Something like the thing you put on bread.',
    opts: ['Nešto', 'Netko', 'Nekako', 'Nekada'],
    answer: 'Nešto',
    tip: 'Nešto kao… — describing your way round the missing word.',
  },
  {
    mode: 'popravak',
    q: 'Kako bih ____ rekao…',
    en: 'How would I put this…',
    opts: ['to', 'ovo', 'ono', 'tako'],
    answer: 'to',
    tip: 'Kako bih to rekao — the conditional, and it signals care rather than doubt.',
  },

  // ── reakcije ──────────────────────────────────────────────────────────────
  {
    mode: 'reakcije',
    q: 'Što znači "Ma nemoj!"?',
    en: 'What does Ma nemoj! mean?',
    opts: ['You do not say!', 'Do not do it!', 'Never mind.', 'Stop that.'],
    answer: 'You do not say!',
    tip: 'Literally "do not", but it registers surprise, not a prohibition.',
  },
  {
    mode: 'reakcije',
    q: 'Kako se traži nastavak priče?',
    en: 'Asking them to go on:',
    opts: ['I onda?', 'I to?', 'Pa što?', 'Zašto?'],
    answer: 'I onda?',
    tip: 'I onda? — and then? It costs two words and keeps a story alive.',
  },
  {
    mode: 'reakcije',
    q: 'Što znači "Jasno."?',
    en: 'What does Jasno mean here?',
    opts: ['Right, I see.', 'Clearly not.', 'Obviously.', 'Bright.'],
    answer: 'Right, I see.',
    tip: 'It signals you are following. Say it often.',
  },
  {
    mode: 'reakcije',
    q: 'Kako se traži pojašnjenje?',
    en: 'Asking what they mean:',
    opts: ['Kako to misliš?', 'Što to misliš?', 'Kako misliti?', 'Na što misliš to?'],
    answer: 'Kako to misliš?',
    tip: 'Kako, not što — a fixed pairing.',
  },
  {
    mode: 'reakcije',
    q: 'Koliko često se reagira u hrvatskom razgovoru?',
    en: 'How often should you react?',
    opts: ['stalno, svakih par sekundi', 'na kraju', 'jednom po temi', 'rijetko'],
    answer: 'stalno, svakih par sekundi',
    tip: 'A listener who makes no noise is assumed to disagree.',
  },
  {
    mode: 'reakcije',
    q: 'Što znači "Stvarno?"',
    en: 'What does Stvarno? mean?',
    opts: ['Really?', 'For real, honestly.', 'Truly not.', 'In fact.'],
    answer: 'Really?',
    tip: 'The commonest reaction there is.',
  },
  {
    mode: 'reakcije',
    q: 'Koja reakcija pokazuje slaganje?',
    en: 'Which signals agreement?',
    opts: ['Slažem se.', 'Kako to misliš?', 'I onda?', 'Stvarno?'],
    answer: 'Slažem se.',
    tip: 'The others keep the story going without committing.',
  },
  {
    mode: 'reakcije',
    q: 'Što se često ponavlja u znak slaganja?',
    en: 'The doubled agreement noise:',
    opts: ['da, da', 'ne, ne', 'jest, jest', 'tako, tako'],
    answer: 'da, da',
    tip: 'Da, da — and doubling makes it warmer, not more emphatic.',
  },
];
