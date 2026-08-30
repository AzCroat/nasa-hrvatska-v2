// src/data/drills/invitationsDrill.ts
//
// A2 MAKING PLANS — the drill for the `plans-invitations` lesson.
//
// The structure hiding under the phrasebook is that Croatian arranges the
// future in the PRESENT tense. *Sutra idem u Zagreb* is not a slip for *ići
// ću* — it is what a speaker says about a plan that is settled, and the future
// tense would make it sound less certain, not more. English does the same thing
// ("I'm going to Zagreb tomorrow") and then abandons it the moment a learner
// starts conjugating.
//
// The second half is a social skill with grammar attached: refusing. *Ne mogu*
// on its own is blunt; *Nažalost, ne mogu* and *Možda drugi put* are what a
// Croatian actually says. And fixing the meeting takes two cases in one
// sentence — *u osam* for the time, *ispred kina* with the genitive for the
// place.
//
// Three modes:
//   poziv    — asking, and the present tense doing the future
//   odgovor  — accepting and refusing, with the register right
//   dogovor  — fixing the time and the place

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const INVITATIONS_MODE_LABELS: Record<string, string> = {
  poziv: '📨 Poziv',
  odgovor: '✅ Da ili ne',
  dogovor: '🕗 Vrijeme i mjesto',
};

export const INVITATIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── poziv ─────────────────────────────────────────────────────────────────
  {
    mode: 'poziv',
    q: 'Sutra ____ u Zagreb. (dogovoreno)',
    en: 'I am going to Zagreb tomorrow.',
    opts: ['idem', 'ću ići', 'išao bih', 'idi'],
    answer: 'idem',
    tip: 'An arranged future takes the PRESENT tense. The future would sound less settled.',
  },
  {
    mode: 'poziv',
    q: 'Što radiš u ____? (subota)',
    en: 'What are you doing on Saturday?',
    opts: ['subotu', 'suboti', 'subote', 'subotom'],
    answer: 'subotu',
    tip: 'u plus the accusative for one particular Saturday.',
  },
  {
    mode: 'poziv',
    q: 'Jesi li ____? (slobodan, ženi)',
    en: 'Are you free? (to a woman)',
    opts: ['slobodna', 'slobodan', 'slobodno', 'slobodni'],
    answer: 'slobodna',
    tip: 'The adjective agrees with the person addressed.',
  },
  {
    mode: 'poziv',
    q: '____ li ići na kavu?',
    en: 'Do you want to go for a coffee?',
    opts: ['Hoćeš', 'Hoće', 'Hoćemo', 'Htio'],
    answer: 'Hoćeš',
    tip: 'Hoćeš li…? — the everyday invitation.',
  },
  {
    mode: 'poziv',
    q: 'Imaš li planove ____ vikend?',
    en: 'Do you have plans for the weekend?',
    opts: ['za', 'na', 'u', 'o'],
    answer: 'za',
    tip: 'planovi za vikend.',
  },
  {
    mode: 'poziv',
    q: 'Što kažeš ____ večeru?',
    en: 'How about dinner?',
    opts: ['na', 'za', 'o', 'u'],
    answer: 'na',
    tip: 'Što kažeš na…? — a fixed frame worth learning whole.',
  },
  {
    mode: 'poziv',
    q: 'Idemo u ____? (kino)',
    en: 'Shall we go to the cinema?',
    opts: ['kino', 'kinu', 'kina', 'kinom'],
    answer: 'kino',
    tip: 'Going there → accusative, and kino is neuter and does not change.',
  },
  {
    mode: 'poziv',
    q: 'Kako se uljudno poziva stranca?',
    en: 'Inviting someone you address with Vi:',
    opts: ['Jeste li slobodni?', 'Jesi li slobodan?', 'Slobodan si?', 'Budi slobodan.'],
    answer: 'Jeste li slobodni?',
    tip: 'The Vi form takes the plural throughout.',
  },

  // ── odgovor ───────────────────────────────────────────────────────────────
  {
    mode: 'odgovor',
    q: 'Najobičniji "da" u dogovoru je ____.',
    en: 'The everyday yes:',
    opts: ['Može!', 'Dobro.', 'Da.', 'Naravno.'],
    answer: 'Može!',
    tip: 'Može! — literally "it can", and it settles most invitations.',
  },
  {
    mode: 'odgovor',
    q: 'Što znači "Rado!"?',
    en: 'What does Rado! mean?',
    opts: ['Gladly!', 'Later!', 'Really?', 'Maybe.'],
    answer: 'Gladly!',
    tip: 'Warmer than Može — it says you actually want to.',
  },
  {
    mode: 'odgovor',
    q: 'Uljudno odbijanje glasi ____.',
    en: 'The polite refusal:',
    opts: ['Nažalost, ne mogu.', 'Ne mogu.', 'Neću.', 'Ne.'],
    answer: 'Nažalost, ne mogu.',
    tip: 'Ne mogu alone is blunt. Nažalost does the softening.',
  },
  {
    mode: 'odgovor',
    q: 'Što znači "Možda drugi put"?',
    en: 'What does it mean?',
    opts: ['blago odbijanje', 'prihvaćanje', 'promjena termina', 'pitanje'],
    answer: 'blago odbijanje',
    tip: 'A soft no that leaves the door open.',
  },
  {
    mode: 'odgovor',
    q: 'Trebate vremena za odluku: ____',
    en: 'You need time to decide.',
    opts: ['Javit ću ti.', 'Ne znam.', 'Možda.', 'Vidjet ćemo.'],
    answer: 'Javit ću ti.',
    tip: 'Javit ću ti — I will let you know. It buys time without refusing.',
  },
  {
    mode: 'odgovor',
    q: 'Što znači "Dogovoreno!"?',
    en: 'What does Dogovoreno! mean?',
    opts: ['It is settled!', 'Let us discuss it.', 'I disagree.', 'I am late.'],
    answer: 'It is settled!',
    tip: 'It closes the arrangement.',
  },
  {
    mode: 'odgovor',
    q: 'Zašto je samo "Neću" grubo?',
    en: 'Why is Neću alone blunt?',
    opts: ['znači "ne želim", bez isprike', 'nije hrvatski', 'preformalno je', 'nije grubo'],
    answer: 'znači "ne želim", bez isprike',
    tip: 'It states unwillingness rather than inability, and offers nothing else.',
  },
  {
    mode: 'odgovor',
    q: 'Kako se zatvara gotovo svaki dogovor?',
    en: 'How does almost every arrangement close?',
    opts: ['Vidimo se!', 'Doviđenja.', 'Hvala.', 'Bog.'],
    answer: 'Vidimo se!',
    tip: 'Vidimo se! — see you. Present tense doing the future once again.',
  },

  // ── dogovor ───────────────────────────────────────────────────────────────
  {
    mode: 'dogovor',
    q: 'Nalazimo se ____ osam.',
    en: 'We are meeting at eight.',
    opts: ['u', 'na', 'za', 'oko'],
    answer: 'u',
    tip: 'Clock time takes u: u osam, u pola devet.',
  },
  {
    mode: 'dogovor',
    q: 'Nalazimo se ispred ____. (kino)',
    en: 'We are meeting in front of the cinema.',
    opts: ['kina', 'kino', 'kinu', 'kinom'],
    answer: 'kina',
    tip: 'Ispred is a position word → GENITIVE: ispred kina.',
  },
  {
    mode: 'dogovor',
    q: 'Koliko padeža ima "Nalazimo se u osam ispred kina"?',
    en: 'How many cases are in that sentence?',
    opts: ['dva', 'jedan', 'tri', 'nijedan'],
    answer: 'dva',
    tip: 'Accusative for the time, genitive for the place — in eight words.',
  },
  {
    mode: 'dogovor',
    q: 'Vidimo se u ____ sedam. (half past six)',
    en: 'See you at half past six.',
    opts: ['pola', 'polovicu', 'pola do', 'pol'],
    answer: 'pola',
    tip: 'U pola sedam is HALF PAST SIX — Croatian counts towards the coming hour.',
  },
  {
    mode: 'dogovor',
    q: 'Nalazimo se kod ____. (kazalište)',
    en: 'We are meeting by the theatre.',
    opts: ['kazališta', 'kazalište', 'kazalištu', 'kazalištem'],
    answer: 'kazališta',
    tip: 'kod plus the genitive.',
  },
  {
    mode: 'dogovor',
    q: 'Što znači "Kasnim deset minuta"?',
    en: 'What does it mean?',
    opts: [
      'I am ten minutes late',
      'I will be there in ten minutes',
      'I left ten minutes ago',
      'I have ten minutes',
    ],
    answer: 'I am ten minutes late',
    tip: 'Kasniti — to be late. The text message you will send most often.',
  },
  {
    mode: 'dogovor',
    q: 'Odgađamo za ____. (sljedeći tjedan)',
    en: 'Let us postpone to next week.',
    opts: ['sljedeći tjedan', 'sljedećeg tjedna', 'sljedećem tjednu', 'sljedećim tjednom'],
    answer: 'sljedeći tjedan',
    tip: 'za plus the accusative.',
  },
  {
    mode: 'dogovor',
    q: 'Kako predlažete drugo vrijeme?',
    en: 'Suggesting a different time:',
    opts: ['Može li malo kasnije?', 'Hoću kasnije.', 'Kasnije je.', 'Budi kasnije.'],
    answer: 'Može li malo kasnije?',
    tip: 'Može li…? turns a demand into a question.',
  },
];
