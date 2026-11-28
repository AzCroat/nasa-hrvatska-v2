// src/data/drills/b1/conjunctionsDrill.ts
//
// B1 JOINING SENTENCES — the drill for the `conjunctions` lesson (B1 position 12).
//
// Three modes, nine items each:
//   nizanje  — adding and setting side by side: i, pa, a, ili
//   suprotno — the obstacle (ali), the replacement after a negative (nego), and iako
//   uzrok    — jer, zato što and zato, and where the comma goes
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — the book has no page of its own for
//   conjunctions; the drill is built from the sentences it prints: 19 ("Iako…"), 24 ("Ona
//   s tatom govori ruski, a s mamom…", "zna i ruski zato što je njezin tata Rus"), 30
//   ("Marin radi, a Tanja je studentica"), 33 ("Ako nas slučajno ne nađete, nazovite pa
//   ću doći po vas!"), 45 ("Volim tebe, a ne njega!"), 46 ("nije pristojno odmah puno
//   jesti i piti, nego trebamo pričekati…", "Zato često zovu prijatelje"), 53 ("Čuli su
//   da je Istra vrlo zanimljiva pa su odlučili…"), 65 ("Volontiram jer volim druženja i
//   putovanja", "Zato ovo radim. Ali i zato što mogu upoznati različite ljude"), 67
//   ("zato što su kuće skupe"), 72 (PISANJE ZAREZA: a comma after a dependent clause that
//   comes first, none when it comes second), 90 ("Njegovo lice bilo mi je poznato, ali
//   nisam se odmah sjetila tko je on", "jer sam se htjela smiriti"), 98 ("Klari je Marin
//   drag, ali Alen joj je draži"), 104 ("Voli sve sportove, a trenira atletiku",
//   "nemaju puno novca pa Igor mora sam zarađivati"), 113 ("Dobro je imati prijatelje na
//   poslu, ali nije jako važno"), 133 ("ne zato što sam bio talent nego zato što sam jako
//   želio nešto svirati"), 149 ("Glumica je grozna, ali ime nije loše").
//
// Where the book and the lesson differ:
//   - The lesson makes a against ali its main point, but it also says that ali in place
//     of a "is not wrong", only sharper. So a and ali are never offered against each
//     other in a sentence; the difference is asked once, as a question about meaning.
//   - I, a and pa can often all join the same two statements, so no item offers two of
//     them where both would stand.
//   - After a negative the lesson allows nego "or već". Već is never a wrong option.
//   - Jer and zato što both mean "because" and are never offered against each other,
//     except at the start of a sentence, where the lesson allows only zato što.
//   - The comma rule is printed in the book for the conditional (page 72); the lesson
//     states it in general, and the drill follows the lesson's wording.
//   - Grammar-order fence: no budući da, da bi, zbog or radi (cause and purpose come
//     later), no relative koji, no reported speech, no instrumental-only patterns.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONJUNCTIONS_MODE_LABELS: Record<string, string> = {
  nizanje: '🔗 I, pa, a, ili',
  suprotno: '↔️ Ali, nego, iako',
  uzrok: '💡 Jer, zato, zarez',
};

export const CONJUNCTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── nizanje ───────────────────────────────────────────────────────────────
  {
    mode: 'nizanje',
    q: 'Marin radi, ____ Tanja je studentica.',
    en: 'Marin works, and Tanja studies.',
    opts: ['a', 'nego', 'jer', 'ili'],
    answer: 'a',
    tip: 'A sets two people side by side: he does one thing, she another. Nego needs a negative before it. Jer would make her studies the reason he works, and ili would offer a choice between the two.',
  },
  {
    mode: 'nizanje',
    q: 'Ako nas ne nađete, nazovite ____ ću doći po vas.',
    en: 'If you do not find us, call and then I will come get you.',
    opts: ['pa', 'ili', 'nego', 'iako'],
    answer: 'pa',
    tip: 'Pa adds the next step: call, and then I come. Ili would make it a choice. Nego needs a negative before it, and iako ("although") would make the call an obstacle.',
  },
  {
    mode: 'nizanje',
    q: 'Hoćete li ići na more ____ u planine?',
    en: 'Will you go to the seaside or to the mountains?',
    opts: ['ili', 'pa', 'nego', 'jer'],
    answer: 'ili',
    tip: 'Ili offers a choice between two things. Pa would mean first one and then the other. Nego needs a negative or a comparative before it, and jer gives a reason.',
  },
  {
    mode: 'nizanje',
    q: 'Volim tebe, ____ njega!',
    en: 'I love you, not him!',
    opts: ['a ne', 'ili ne', 'jer ne', 'pa ne'],
    answer: 'a ne',
    tip: 'A ne sets the thing you mean against the thing you do not: tebe, a ne njega. Ili ne would be a choice, jer ne a reason, and pa ne a next step; none of them contrasts the two people.',
  },
  {
    mode: 'nizanje',
    q: 'Njegovi roditelji nemaju puno novca ____ Igor mora sam zarađivati.',
    en: 'His parents do not have much money, so Igor has to earn his own.',
    opts: ['pa', 'jer', 'ili', 'nego'],
    answer: 'pa',
    tip: 'Pa adds what follows from the first half: and so. Jer would turn it around and make his job the cause of their lack of money. Ili is a choice, and nego would replace the first half instead of adding to it.',
  },
  {
    mode: 'nizanje',
    q: 'Ona s tatom govori ruski, ____ s mamom hrvatski.',
    en: 'She speaks Russian with her dad and Croatian with her mom.',
    opts: ['a', 'pa', 'jer', 'nego'],
    answer: 'a',
    tip: 'Two parallel facts, set side by side: a. Pa would make a sequence, first Russian and then Croatian. Jer would give a reason, and nego needs a negative before it.',
  },
  {
    mode: 'nizanje',
    q: 'Koji veznik znači „and then“ ili „and so“?',
    en: 'Which conjunction means "and then" or "and so"?',
    opts: ['pa', 'ili', 'ali', 'iako'],
    answer: 'pa',
    tip: 'Pa adds a next step or a result: Došao je pa smo jeli. Ili means "or", ali means "but", and iako means "although".',
  },
  {
    mode: 'nizanje',
    q: 'Vikendica je lijepa ____ ima vrt.',
    en: 'The weekend house is pretty and has a garden.',
    opts: ['i', 'ili', 'nego', 'jer'],
    answer: 'i',
    tip: 'I simply adds a second fact about the same thing. Ili would make the two facts a choice. Nego needs a negative before it, and jer would say the garden is why the house is pretty.',
  },
  {
    mode: 'nizanje',
    q: 'Koji veznik samo stavlja dvije osobe ili stvari jednu uz drugu, bez prigovora?',
    en: 'Which conjunction only sets two people or things side by side, with no objection?',
    opts: ['a', 'ali', 'nego', 'iako'],
    answer: 'a',
    tip: 'A is neutral: Ja radim, a on spava. Ali adds a note of objection or an obstacle. Nego replaces something that was denied, and iako means "although".',
  },

  // ── suprotno ──────────────────────────────────────────────────────────────
  {
    mode: 'suprotno',
    q: 'Njegovo lice bilo mi je poznato, ____ nisam se odmah sjetila tko je on.',
    en: 'His face was familiar to me, but I did not remember right away who he was.',
    opts: ['ali', 'nego', 'ili', 'jer'],
    answer: 'ali',
    tip: 'Ali marks a real obstacle: the face was familiar, and still she could not place him. Nego follows a negative, and the first half is not negated. Ili is a choice, and jer would make the second half a reason.',
  },
  {
    mode: 'suprotno',
    q: 'Vikendica nije u Delnicama, ____ u malom selu blizu Delnica.',
    en: 'The weekend house is not in Delnice but in a small village near Delnice.',
    opts: ['nego', 'ali', 'ili', 'pa'],
    answer: 'nego',
    tip: 'One thing is denied and another put in its place, so nego. Ali after a negative is the classic slip: English has one "but", Croatian splits it. Ili is a choice, and pa adds a next step.',
  },
  {
    mode: 'suprotno',
    q: 'Svirao sam violinu ne zato što sam bio talent, ____ zato što sam jako želio svirati.',
    en: 'I played the violin not because I was talented but because I really wanted to play.',
    opts: ['nego', 'ali', 'ili', 'pa'],
    answer: 'nego',
    tip: 'Ne… nego…: the first reason is denied and the true one replaces it. Ali does not follow a denial like this. Ili would leave both reasons open, and pa would add the second one to the first.',
  },
  {
    mode: 'suprotno',
    q: '____ je Danijela još mala, ide s roditeljima u vikendicu.',
    en: 'Although Danijela is still little, she is going to the weekend house with her parents.',
    opts: ['Iako', 'Ali', 'Nego', 'Pa'],
    answer: 'Iako',
    tip: 'Iako ("although") opens a clause that does not stop the main one. Ali, nego and pa join the second half to the first; none of them can open a dependent clause at the start of a sentence.',
  },
  {
    mode: 'suprotno',
    q: 'Glumica je grozna, ____ ime nije loše.',
    en: 'The actress is awful, but the name is not bad.',
    opts: ['ali', 'nego', 'pa', 'ili'],
    answer: 'ali',
    tip: 'Ali sets a real contrast after an affirmative statement. Nego needs a negative in the first half. Pa would make the good name follow from the awful actress, and ili is a choice.',
  },
  {
    mode: 'suprotno',
    q: 'U kojoj je rečenici veznik pravilno upotrijebljen?',
    en: 'In which sentence is the conjunction used correctly?',
    opts: [
      'Ne pijem kavu nego čaj.',
      'Ne pijem kavu ali čaj.',
      'Ne pijem kavu jer čaj.',
      'Ne pijem kavu iako čaj.',
    ],
    answer: 'Ne pijem kavu nego čaj.',
    tip: 'After a denial the replacement takes nego: ne kavu nego čaj. Ali is the English-based slip. Jer and iako need a whole clause with a verb after them, and čaj alone is not one.',
  },
  {
    mode: 'suprotno',
    q: 'Idemo na izlet ____ je hladno.',
    en: 'We are going on the trip although it is cold.',
    opts: ['iako', 'nego', 'ili', 'pa'],
    answer: 'iako',
    tip: 'The cold does not stop the trip, so iako. Nego needs a negative before it. Ili would make the cold a choice, and pa would make it a result of the trip.',
  },
  {
    mode: 'suprotno',
    lead: 'Iako je umoran, Tom kuha večeru.',
    q: 'Što je točno?',
    opts: [
      'Tom is tired and cooks anyway.',
      'Tom cooks because he is tired.',
      'Tom is not tired.',
      'Tom does not cook.',
    ],
    answer: 'Tom is tired and cooks anyway.',
    tip: 'Iako states something true that fails to stop the main action. A reason would be jer or zato što. Neither half of the sentence is negated.',
  },
  {
    mode: 'suprotno',
    q: 'Dobro je imati prijatelje na poslu, ____ nije jako važno.',
    en: 'It is good to have friends at work, but it is not very important.',
    opts: ['ali', 'nego', 'pa', 'ako'],
    answer: 'ali',
    tip: 'Ali limits what was just said. Nego needs a negative in the first half, and here the first half is affirmative. Pa would add a result, and ako would turn the second half into a condition.',
  },

  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Volontiram ____ volim druženja i putovanja.',
    en: 'I volunteer because I like socializing and traveling.',
    opts: ['jer', 'zato', 'pa', 'iako'],
    answer: 'jer',
    tip: 'Jer introduces the reason. Zato on its own means "that is why" and introduces the result, not the cause. Pa adds a next step, and iako would say she volunteers in spite of liking it.',
  },
  {
    mode: 'uzrok',
    q: '____ su kuće skupe, Hrvati češće kupuju stanove.',
    en: 'Because houses are expensive, Croatians more often buy apartments.',
    opts: ['Zato što', 'Jer', 'Zato', 'Pa'],
    answer: 'Zato što',
    tip: 'Zato što can open a sentence. Jer cannot; it only follows the main half (…kupuju stanove jer su kuće skupe). Zato alone introduces a result, and pa joins a second half to a first.',
  },
  {
    mode: 'uzrok',
    q: 'Trebam radno iskustvo. ____ volontiram.',
    en: 'I need work experience. That is why I volunteer.',
    opts: ['Zato', 'Zato što', 'Jer', 'Iako'],
    answer: 'Zato',
    tip: 'Zato alone points back at the reason just given and introduces the result. Zato što and jer introduce the cause, which would turn the two sentences around. Iako means "although".',
  },
  {
    mode: 'uzrok',
    q: '— Zašto učiš hrvatski? — ____ imam hrvatske korijene.',
    en: 'Why are you studying Croatian? — Because I have Croatian roots.',
    opts: ['Zato što', 'Zato', 'Zašto', 'Iako'],
    answer: 'Zato što',
    tip: 'An answer to zašto that gives the reason starts with zato što. Zato alone means "that is why" and needs the reason before it. Zašto is the question word, and iako means "although".',
  },
  {
    mode: 'uzrok',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'Ne idem van jer pada kiša.',
      'Ne idem van, jer, pada kiša.',
      'Ne idem, van jer pada kiša.',
      'Ne idem van jer, pada kiša.',
    ],
    answer: 'Ne idem van jer pada kiša.',
    tip: 'A dependent clause that follows the main clause takes no comma. Commas around jer, after idem or after jer all cut the sentence where there is no break.',
  },
  {
    mode: 'uzrok',
    q: 'U kojoj je rečenici zarez na pravom mjestu?',
    en: 'In which sentence is the comma in the right place?',
    opts: [
      'Radim, ali nisam umoran.',
      'Radim ali, nisam umoran.',
      'Radim ali nisam, umoran.',
      'Radim, ali, nisam umoran.',
    ],
    answer: 'Radim, ali nisam umoran.',
    tip: 'The comma goes before the contrast words ali, a, nego and već, never after them. A comma on both sides of ali is wrong too, and a comma before umoran splits the verb from its adjective.',
  },
  {
    mode: 'uzrok',
    q: 'Koja je rečenica s „iako“ pravilno napisana?',
    en: 'Which sentence with iako is punctuated correctly?',
    opts: [
      'Iako je kasno, idemo u kino.',
      'Iako je kasno idemo, u kino.',
      'Iako, je kasno idemo u kino.',
      'Iako je, kasno idemo u kino.',
    ],
    answer: 'Iako je kasno, idemo u kino.',
    tip: 'When the dependent clause comes first, a comma closes it off: Iako je kasno, … The other three put the comma inside one of the two clauses.',
  },
  {
    mode: 'uzrok',
    q: 'Otišla sam na kavu ____ sam se htjela smiriti.',
    en: 'I went for a coffee because I wanted to calm down.',
    opts: ['jer', 'zato', 'nego', 'ili'],
    answer: 'jer',
    tip: 'Jer + a clause gives the reason. Zato alone introduces a result and would need the reason before it. Nego needs a negative before it, and ili is a choice.',
  },
  {
    mode: 'uzrok',
    lead: 'Mnogi Hrvati vole primati posjete, zato često zovu prijatelje u svoj dom.',
    q: 'Što je uzrok, a što posljedica?',
    opts: [
      'Liking visits is the cause; inviting friends is the result.',
      'Inviting friends is the cause; liking visits is the result.',
      'Both halves are causes.',
      'The two halves are not linked.',
    ],
    answer: 'Liking visits is the cause; inviting friends is the result.',
    tip: 'Zato alone means "that is why": the reason comes first and the result follows it. So there is one cause and one result, and the two halves are linked. With zato što the order would be the other way around, cause after the conjunction.',
  },
];
