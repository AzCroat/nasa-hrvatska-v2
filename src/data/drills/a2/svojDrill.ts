// src/data/drills/a2/svojDrill.ts
//
// A2 SVOJ — the drill for the `svoj` lesson.
//
// Follows Razgovarajte s nama! A2–B1, lesson 2 "Kad će taj vikend", page 41: Martina
// packing for the weekend ("Moram uzeti Josipove, Danijeline i svoje stvari! Spakirala sam
// svoju i njezinu odjeću."), the table "Ja imam svoju olovku — NE: Ja imam moju olovku",
// the contrast "On ima svoju olovku / On ima njegovu olovku (tuđu!)", the accusative forms
// of svoj (svojeg, svoj, svoju, svoje) and the note that svoj is never used in the
// nominative or outside a sentence ("NE: Ovo je svoj auto").
//
// Where the book and the lesson differ: the book introduces svoj in the accusative only
// and brings the other cases back later, one case per lesson (pages 55, 82, 115 and 128).
// The lesson shows svoj in several cases at once. The drill stays with the book: every
// answer is an accusative singular (or a nominative where svoj is not allowed), so it
// needs no plural and no case taught after this lesson.
//
// Three modes:
//   oblik   — the right form of svoj: svoj, svojeg, svoju, svoje
//   cije    — svoj or njegov / njezin / njihov / moj: whose is it?
//   pravilo — reading who the owner is, and where svoj cannot stand

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SVOJ_MODE_LABELS: Record<string, string> = {
  oblik: '🪞 Svoj, svoju, svoje',
  cije: '👥 Svoj ili njegov?',
  pravilo: '🔍 Čije je to?',
};

export const SVOJ_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Martina pakira ____ odjeću.',
    en: 'Martina is packing her own clothes.',
    opts: ['svoju', 'svoja', 'svoje', 'svojeg'],
    answer: 'svoju',
    tip: 'odjeću is a feminine object, so svoj takes -u like the noun: svoju odjeću. svoja is the subject form, svoje is neuter, and svojeg is for a living masculine object.',
  },
  {
    mode: 'oblik',
    q: 'Josip traži ____ mobitel.',
    en: 'Josip is looking for his own cell phone.',
    opts: ['svoj', 'svojeg', 'svoju', 'svoje'],
    answer: 'svoj',
    tip: 'mobitel is a masculine thing, not a living being, so as an object it does not change: svoj mobitel. svojeg is only for people and animals, svoju is feminine, and svoje is neuter.',
  },
  {
    mode: 'oblik',
    q: 'Marin zove ____ susjeda.',
    en: 'Marin is calling his own neighbor.',
    opts: ['svojeg', 'svoj', 'svoju', 'svoje'],
    answer: 'svojeg',
    tip: 'A neighbor is a living masculine object, so svoj takes -eg: svojeg susjeda. svoj is for masculine things, svoju is feminine, and svoje is neuter.',
  },
  {
    mode: 'oblik',
    q: 'Tanja voli ____ selo.',
    en: 'Tanja loves her own village.',
    opts: ['svoje', 'svoju', 'svoj', 'svojeg'],
    answer: 'svoje',
    tip: 'selo is neuter, so the form is svoje. svoju would need a feminine noun, svoj a masculine thing, and svojeg a living masculine object.',
  },
  {
    mode: 'oblik',
    q: 'Danijela ima ____.',
    en: 'Danijela has her own toy.',
    cue: 'svoj + igračka',
    opts: ['svoju igračku', 'svoja igračka', 'svojoj igrački', 'svoj igračku'],
    answer: 'svoju igračku',
    tip: 'What she has is the object, so both words go into the accusative feminine: svoju igračku. svoja igračka is the subject form, svojoj igrački is the dative, and svoj is masculine and does not match igračku.',
  },
  {
    mode: 'oblik',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (I am looking for my dog.)',
    opts: ['Tražim svojeg psa.', 'Tražim svoj pas.', 'Tražim svoju psa.', 'Tražim svoj psa.'],
    answer: 'Tražim svojeg psa.',
    tip: 'A dog is a living masculine object, so both words change: svojeg psa. svoj pas leaves both in the subject form, svoju is feminine, and svoj psa changes only the noun.',
  },
  {
    mode: 'oblik',
    q: 'Igor ima ____ auto, ali vozi bicikl.',
    en: 'Igor has his own car, but he rides a bike.',
    opts: ['svoj', 'svoje', 'svojeg', 'svoju'],
    answer: 'svoj',
    tip: 'auto ends in -o but it is masculine, and it is a thing, so the form is svoj auto. svoje would treat it as neuter, svojeg is for living beings, and svoju is feminine.',
  },
  {
    mode: 'oblik',
    q: 'Napiši ____ ime ovdje, molim te.',
    en: 'Write your name here, please.',
    opts: ['svoje', 'svoj', 'svoju', 'svojeg'],
    answer: 'svoje',
    tip: 'The person who writes is also the owner of the name, so svoj, and ime is neuter: svoje ime. svoj is masculine, svoju is feminine, and svojeg is for a living masculine object.',
  },
  {
    mode: 'oblik',
    q: 'Sandra čeka ____ muža ispred ureda.',
    en: 'Sandra is waiting for her husband in front of the office.',
    opts: ['svojeg', 'svoj', 'svoju', 'svoje'],
    answer: 'svojeg',
    tip: 'The form follows the thing owned, not the owner: muž is a living masculine object, so svojeg muža, even though Sandra is a woman. svoj is for things, svoju is feminine, and svoje is neuter.',
  },

  // ── cije ──────────────────────────────────────────────────────────────────
  {
    mode: 'cije',
    q: 'Martina pakira Danijelinu odjeću. Pakira ____ odjeću.',
    en: 'Martina is packing Danijela’s clothes. She is packing her clothes.',
    opts: ['njezinu', 'svoju', 'njegovu', 'njihovu'],
    answer: 'njezinu',
    tip: 'The clothes belong to Danijela, not to Martina, who is the subject, so svoj is out and the word is njezinu. svoju would mean Martina’s own clothes, njegovu means a man’s, and njihovu means several people’s.',
  },
  {
    mode: 'cije',
    q: 'Ovo je Martinina torba. Martina nosi ____ torbu.',
    en: 'This is Martina’s bag. Martina is carrying her bag.',
    opts: ['svoju', 'njezinu', 'njegovu', 'moju'],
    answer: 'svoju',
    tip: 'The bag belongs to Martina and Martina is the subject, so svoju. njezinu would mean the bag of some other woman, njegovu a man’s bag, and moju the speaker’s.',
  },
  {
    mode: 'cije',
    q: 'Josip nema olovku. Ana ima dvije i kaže: „Uzmi ____ olovku!“',
    en: 'Josip has no pencil. Ana has two and says: "Take my pencil!"',
    opts: ['moju', 'svoju', 'tvoju', 'njegovu'],
    answer: 'moju',
    tip: 'The one who takes is Josip (ti), but the pencil is Ana’s, so the owner is not the subject and svoj is not possible: moju. svoju and tvoju would both mean Josip’s own pencil, which he does not have, and njegovu means another man’s.',
  },
  {
    mode: 'cije',
    q: 'Ne trebam tvoju olovku. Imam ____.',
    en: 'I do not need your pencil. I have my own.',
    opts: ['svoju', 'moju', 'tvoju', 'svoja'],
    answer: 'svoju',
    tip: 'I am the subject and I am the owner, so the word is svoju. "Imam moju" is the mistake the book marks with NE, tvoju is the pencil you just refused, and svoja is a subject form.',
  },
  {
    mode: 'cije',
    q: 'Ivan i Marko su braća. Ivan vozi Markov auto: vozi ____ auto.',
    en: 'Ivan and Marko are brothers. Ivan drives Marko’s car: he drives his car.',
    opts: ['njegov', 'svoj', 'njezin', 'njihov'],
    answer: 'njegov',
    tip: 'The car is Marko’s, not the subject Ivan’s, so njegov. svoj would mean Ivan’s own car, njezin means a woman’s, and njihov would mean the car belongs to both of them.',
  },
  {
    mode: 'cije',
    q: 'Tom i Sandra imaju kuću u Zagrebu. Oni vole ____ kuću.',
    en: 'Tom and Sandra have a house in Zagreb. They love their house.',
    opts: ['svoju', 'njihovu', 'njezinu', 'svoje'],
    answer: 'svoju',
    tip: 'The owners (oni) are the subject, so svoju. njihovu would mean a house that belongs to other people, njezinu only some other woman’s house, and svoje does not match the feminine kuću.',
  },
  {
    mode: 'cije',
    q: 'Susjedi imaju psa. Mi ponekad čuvamo ____ psa.',
    en: 'The neighbors have a dog. We sometimes look after their dog.',
    opts: ['njihovog', 'svojeg', 'njegovog', 'njihov'],
    answer: 'njihovog',
    tip: 'The dog belongs to the neighbors, and the subject is mi, so svoj is out: njihovog psa. svojeg would mean our own dog, njegovog only one man’s dog, and njihov is the subject form.',
  },
  {
    mode: 'cije',
    q: 'Klara je Anina prijateljica. Pitam Anu: „Čekaš li ____ prijateljicu?“',
    en: 'Klara is Ana’s friend. I ask Ana: "Are you waiting for your friend?"',
    opts: ['svoju', 'tvoju', 'moju', 'njezinu'],
    answer: 'svoju',
    tip: 'The subject of čekaš is ti, and the friend is hers, so the rule gives svoju. tvoju is heard in everyday speech but is the form teachers correct, moju would make Klara my friend, and njezinu some other woman’s.',
  },
  {
    mode: 'cije',
    q: 'Klara je Marinova sestra. Alen, Marinov prijatelj, voli Klaru: on voli ____ sestru.',
    en: 'Klara is Marin’s sister. Alen, Marin’s friend, loves Klara: he loves his sister.',
    opts: ['njegovu', 'svoju', 'njezinu', 'njihovu'],
    answer: 'njegovu',
    tip: 'The sister is Marin’s, and the subject is Alen, so njegovu. svoju would make Klara Alen’s own sister, njezinu means a woman’s sister, and njihovu the sister of several people.',
  },

  // ── pravilo ───────────────────────────────────────────────────────────────
  {
    mode: 'pravilo',
    q: '„On ima njegovu olovku.“ Čija je olovka?',
    opts: ['Another man’s', 'His own', 'A woman’s', 'The speaker’s'],
    answer: 'Another man’s',
    tip: 'njegovu never points back at the subject, so the pencil belongs to a different man. His own would be svoju, a woman’s would be njezinu, and the speaker’s would be moju.',
  },
  {
    mode: 'pravilo',
    q: 'Martina kaže: „Spakirala sam svoju i njezinu odjeću.“ Čiju je odjeću spakirala?',
    opts: [
      'Her own and another girl’s',
      'Only her own',
      'Only another girl’s',
      'Her own and a boy’s',
    ],
    answer: 'Her own and another girl’s',
    tip: 'svoju points back at Martina, the subject, and njezinu at a different female person, so she packed both. A boy’s clothes would be njegovu.',
  },
  {
    mode: 'pravilo',
    q: 'Petar i Igor su prijatelji. Koja rečenica kaže da Petar nosi Igorovu gitaru?',
    en: 'Which sentence says that Petar is carrying Igor’s guitar?',
    opts: [
      'Petar nosi njegovu gitaru.',
      'Petar nosi svoju gitaru.',
      'Petar nosi njezinu gitaru.',
      'Petar nosi svoj gitaru.',
    ],
    answer: 'Petar nosi njegovu gitaru.',
    tip: 'njegovu means the guitar of another man, here Igor. svoju would be Petar’s own guitar, njezinu a woman’s, and svoj does not match the feminine gitaru.',
  },
  {
    mode: 'pravilo',
    q: 'Mama kaže sinu: „Uzmi svoju jaknu!“ Čiju jaknu sin treba uzeti?',
    opts: ['His own', 'His mom’s', 'His brother’s', 'His sister’s'],
    answer: 'His own',
    tip: 'The subject of uzmi is ti, the son, and svoju points back at the subject, so it is his own jacket. His mom’s would be moju, his brother’s njegovu, and his sister’s njezinu.',
  },
  {
    mode: 'pravilo',
    q: 'Koja rečenica NIJE točna?',
    en: 'Which sentence is NOT correct?',
    opts: [
      'Ja imam moju olovku.',
      'Ja imam svoju olovku.',
      'Ti imaš svoju olovku.',
      'Ovo je moja olovka.',
    ],
    answer: 'Ja imam moju olovku.',
    tip: 'When the owner is the subject, the possessive is svoj, so "Ja imam moju olovku" is the mistake. The two sentences with svoju follow the rule, and "Ovo je moja olovka" is right because there the pencil itself is the subject.',
  },
  {
    mode: 'pravilo',
    q: 'Tanja i Marin zovu svojeg susjeda. Čiji je to susjed?',
    opts: ['Tanja and Marin’s', 'Another couple’s', 'Another man’s', 'The speaker’s'],
    answer: 'Tanja and Marin’s',
    tip: 'svoj points back at the subject whoever it is, and here the subject is Tanja and Marin. Another couple’s neighbor would be njihovog, another man’s njegovog, and the speaker’s mojeg.',
  },
  {
    mode: 'pravilo',
    q: 'Ovo je ____ auto. Vozim ga svaki dan.',
    en: 'This is my car. I drive it every day.',
    opts: ['moj', 'svoj', 'svojeg', 'moju'],
    answer: 'moj',
    tip: 'After "Ovo je" the car is in the subject form, and svoj is never used there, so moj. svoj and svojeg have no subject to point back to, and moju is a feminine object form.',
  },
  {
    mode: 'pravilo',
    q: '— Čija je ovo olovka? — ____.',
    en: 'Whose pencil is this? — Mine.',
    opts: ['Moja', 'Svoja', 'Svoju', 'Moju'],
    answer: 'Moja',
    tip: 'A one-word answer has no subject for svoj to point back to, so it is Moja, in the same form as the question word čija. Svoja and Svoju cannot stand outside a sentence, and Moju is an object form.',
  },
  {
    mode: 'pravilo',
    q: '____ sestra studira novinarstvo.',
    en: 'My sister studies journalism.',
    opts: ['Moja', 'Svoja', 'Svoju', 'Moju'],
    answer: 'Moja',
    tip: 'Here sestra is the subject itself, and svoj cannot be part of the subject, so Moja. Svoja and Svoju are forms of svoj, and Moju is the object form.',
  },
];
