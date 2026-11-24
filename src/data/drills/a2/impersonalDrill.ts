// src/data/drills/a2/impersonalDrill.ts
//
// A2 IMPERSONAL SENTENCES — the drill for the `impersonal` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 46, 79, 100, 102, 113, 116, 118 and 147: the
// visiting customs ("pristojno je donijeti neki mali dar", "Nije pristojno odbiti jelo",
// "Nepristojno je i prebrzo otići kući"), the text on phones in traffic ("Razgovarati
// mobitelom tijekom vožnje jako je opasno", "Je li to potrebno?"), the neutral answers
// ("Teško je reći", "Svejedno mi je"), dressing for the occasion ("Važno je biti
// prikladno obučen"), friendship at work ("Ne treba ih miješati"), the working customs
// ("Posao se može tražiti na internetu", "Očekuje se da…"), the pros and cons of
// freelance work ("može se kombinirati više poslova") and the wedding ("U ponoć se jede
// torta").
//
// Where the book and the lesson differ: the book has no grammar box for impersonal
// sentences; they simply run through its texts about customs, rules and work. The lesson
// names the patterns and puts them side by side: treba + infinitive, a person in the
// dative (Treba mi…), a modal with se (može se, ne smije se), and je with a neuter word
// (Potrebno je, Moguće je, Žao mi je). The drill practices the lesson's patterns in the
// book's situations.
//
// Three modes:
//   treba — treba + infinitive, and who needs what: Treba joj odmor
//   se    — može se, ne smije se, kaže se: the wording of rules and customs
//   je    — Važno je, Opasno je, Svejedno mi je: je with a neuter word

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IMPERSONAL_MODE_LABELS: Record<string, string> = {
  treba: '☝️ Treba…',
  se: '🪧 Može se, ne smije se',
  je: '💬 Važno je, žao mi je',
};

export const IMPERSONAL_DRILL_DATA: ModeDrillItem[] = [
  // ── treba ─────────────────────────────────────────────────────────────────
  {
    mode: 'treba',
    q: 'U Hrvatskoj je običaj: kad se ide u goste, ____ donijeti mali dar.',
    en: 'It is the custom in Croatia: when you go visiting, you should bring a small gift.',
    opts: ['treba', 'trebati', 'trebaju', 'trebali'],
    answer: 'treba',
    tip: 'A rule for everybody names no person, so the verb stays in the one fixed form: treba + infinitive. trebati is the infinitive, trebaju would need a "they" as subject, and trebali is a past form without its helping verb.',
  },
  {
    mode: 'treba',
    q: 'Prijateljstvo je prijateljstvo, a posao je posao. Ne treba ih ____.',
    en: 'Friendship is friendship and work is work. One should not mix them.',
    opts: ['miješati', 'miješa', 'miješam', 'miješaju'],
    answer: 'miješati',
    tip: 'After treba the second verb is always an infinitive: Ne treba ih miješati. miješa, miješam and miješaju are present-tense forms and cannot follow treba.',
  },
  {
    mode: 'treba',
    q: 'Sandra puno radi. Treba ____ godišnji odmor.',
    en: 'Sandra works a lot. She needs a vacation.',
    opts: ['joj', 'ona', 'nju', 'je'],
    answer: 'joj',
    tip: 'The person who needs something goes into the dative, and for ona the short dative is joj: Treba joj odmor. ona is the subject form, and nju and je are accusatives.',
  },
  {
    mode: 'treba',
    q: 'Djeci ____ nove knjige za školu.',
    en: 'The children need new books for school.',
    opts: ['trebaju', 'treba', 'trebam', 'trebamo'],
    answer: 'trebaju',
    tip: 'The thing needed is the subject of the sentence, and knjige is plural, so the verb is plural too: trebaju. treba would fit one book, and trebam and trebamo would make "I" or "we" the subject.',
  },
  {
    mode: 'treba',
    q: 'Na vratima piše: „Treba pozvoniti.“ Što to znači?',
    opts: [
      'You should ring the bell',
      'I am ringing the bell',
      'He rang the bell',
      'Do not ring the bell',
    ],
    answer: 'You should ring the bell',
    tip: 'treba + infinitive says what ought to be done, by anyone who reads it. It names no "I" or "he", it is not a past tense, and without ne it is not a ban.',
  },
  {
    mode: 'treba',
    q: 'Koja rečenica nema subjekt?',
    en: 'Which sentence has no subject (names no person)?',
    opts: [
      'Treba kupiti kruh.',
      'Trebam kupiti kruh.',
      'Trebaš kupiti kruh.',
      'Marko treba kupiti kruh.',
    ],
    answer: 'Treba kupiti kruh.',
    tip: '"Treba kupiti kruh" only says that bread has to be bought, by nobody in particular. Trebam is I, Trebaš is you, and in the last sentence Marko is the subject.',
  },
  {
    mode: 'treba',
    q: '____ treba pomoć oko zadaće.',
    en: 'Marko needs help with his homework.',
    cue: 'Marko',
    opts: ['Marku', 'Marko', 'Marka', 'Markom'],
    answer: 'Marku',
    tip: 'The person who needs something is in the dative: Marku treba pomoć. Marko is the subject form, Marka the genitive or accusative, and Markom the instrumental.',
  },
  {
    mode: 'treba',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (I need a new passport.)',
    opts: [
      'Treba mi nova putovnica.',
      'Treba me nova putovnica.',
      'Trebaju mi nova putovnica.',
      'Treba ja nova putovnica.',
    ],
    answer: 'Treba mi nova putovnica.',
    tip: 'The person is in the dative (mi) and the verb agrees with the one thing needed: Treba mi nova putovnica. me is an accusative, Trebaju is plural for a single passport, and ja is the subject form.',
  },
  {
    mode: 'treba',
    q: 'Za taj posao ____ radno iskustvo.',
    en: 'Work experience is needed for that job.',
    opts: ['treba', 'trebaju', 'trebati', 'trebali'],
    answer: 'treba',
    tip: 'What is needed, radno iskustvo, is one thing, so the verb is singular: treba. trebaju is plural, trebati is the infinitive, and trebali is a past form without its helping verb.',
  },

  // ── se ────────────────────────────────────────────────────────────────────
  {
    mode: 'se',
    q: 'Posao se ____ tražiti na internetu.',
    en: 'You can look for a job on the internet.',
    opts: ['može', 'mogu', 'možeš', 'možemo'],
    answer: 'može',
    tip: 'With se and no person named, the modal stays in the third person singular: može se. mogu, možeš and možemo each bring in a person, which is what this pattern avoids.',
  },
  {
    mode: 'se',
    q: 'U crkvu se ne ____ ići u kratkim hlačama.',
    en: 'You are not allowed to go to church in shorts.',
    opts: ['smije', 'smiju', 'smijem', 'smiješ'],
    answer: 'smije',
    tip: 'A rule for everyone is ne smije se + infinitive, with the verb in the third person singular. smiju is plural, smijem is I, and smiješ is you.',
  },
  {
    mode: 'se',
    q: 'Na svadbi u ponoć ____ jede torta.',
    en: 'At a wedding the cake is eaten at midnight.',
    opts: ['se', 'je', 'ju', 'su'],
    answer: 'se',
    tip: 'The little word se turns "someone eats" into "is eaten", with nobody named: se jede torta. je and su are forms of biti and would need a past form after them, and ju means her or it.',
  },
  {
    mode: 'se',
    q: 'Na svadbi se ____ stare pjesme.',
    en: 'Old songs are sung at a wedding.',
    opts: ['pjevaju', 'pjeva', 'pjevam', 'pjevamo'],
    answer: 'pjevaju',
    tip: 'With se the thing itself is the subject, and stare pjesme is plural, so the verb is plural: pjevaju se. pjeva would fit one song, and pjevam and pjevamo name a person.',
  },
  {
    mode: 'se',
    q: 'Na ulici piše: „Ovdje se ne parkira.“ Što to znači?',
    opts: [
      'Parking is not allowed here',
      'He is not parking here',
      'I do not park here',
      'There is free parking here',
    ],
    answer: 'Parking is not allowed here',
    tip: 'se with a third-person verb is the wording of signs: nobody parks here, so you may not either. It names no "he" or "I", and with ne it is a ban, not an offer.',
  },
  {
    mode: 'se',
    q: '____ se da zaposlenik dolazi na vrijeme.',
    en: 'It is expected that an employee comes on time.',
    opts: ['Očekuje', 'Očekujem', 'Očekuješ', 'Očekuju'],
    answer: 'Očekuje',
    tip: 'Before a da-clause the pattern is the third person singular with se: Očekuje se da… Očekujem and Očekuješ name a person, and Očekuju is plural with nothing plural to agree with.',
  },
  {
    mode: 'se',
    q: 'Kako se ____ „hvala“ na engleskom?',
    en: 'How do you say "hvala" in English?',
    opts: ['kaže', 'kažem', 'kažeš', 'kažu'],
    answer: 'kaže',
    tip: 'English uses "you" here, but Croatian uses se with the third person singular: Kako se kaže…? kažem is I, kažeš is you, and kažu is they, and none of them goes with se in this meaning.',
  },
  {
    mode: 'se',
    q: 'Izaberi točnu rečenicu.',
    en: 'Which sentence is correct? (Is swimming allowed here?)',
    opts: [
      'Smije li se ovdje plivati?',
      'Smije se li ovdje plivati?',
      'Smije li ovdje se plivati?',
      'Smiju li se ovdje plivati?',
    ],
    answer: 'Smije li se ovdje plivati?',
    tip: 'In a question the verb comes first, then li, then se: Smije li se… se cannot come before li or move further down the sentence, and Smiju is plural, which this pattern never is.',
  },
  {
    mode: 'se',
    q: '„U Hrvatskoj se pije puno kave.“ Tko pije kavu?',
    opts: ['People in general', 'Only the speaker', 'One person named earlier', 'Nobody'],
    answer: 'People in general',
    tip: 'se with a third-person verb talks about what people in general do, without naming anyone. It is not "I", it does not point at one person, and without ne it is not a negative.',
  },

  // ── je ────────────────────────────────────────────────────────────────────
  {
    mode: 'je',
    q: 'Na svadbu ne idemo u trenirci. ____ je biti prikladno obučen.',
    en: 'We do not go to a wedding in a tracksuit. It is important to be dressed for the occasion.',
    opts: ['Važno', 'Opasno', 'Hladno', 'Kasno'],
    answer: 'Važno',
    tip: 'The sentence gives a reason for dressing well, so "it is important": Važno je. Opasno means dangerous, Hladno cold, and Kasno late, and none of them explains the tracksuit rule.',
  },
  {
    mode: 'je',
    q: 'Razgovarati mobitelom tijekom vožnje jako je ____.',
    en: 'Talking on a cell phone while driving is very dangerous.',
    opts: ['opasno', 'opasan', 'opasna', 'opasni'],
    answer: 'opasno',
    tip: 'The subject is an action (razgovarati), not a noun, so the word after je takes the neuter form: opasno. opasan is masculine, opasna feminine, and opasni a plural form, and each needs a noun.',
  },
  {
    mode: 'je',
    q: 'Gosti su tek došli, a domaćini nude večeru. ____ je odmah otići kući.',
    en: 'The guests have just arrived and the hosts are offering dinner. It is rude to go home right away.',
    opts: ['Nepristojno', 'Pristojno', 'Potrebno', 'Hladno'],
    answer: 'Nepristojno',
    tip: 'Leaving as soon as dinner is offered is bad manners: Nepristojno je. Pristojno means polite, the opposite; Potrebno means necessary; and Hladno means cold.',
  },
  {
    mode: 'je',
    q: 'Gospodine, je li ____ hladno? Mogu zatvoriti prozor.',
    en: 'Sir, are you cold? I can close the window.',
    opts: ['Vam', 'Vas', 'Vi', 'Vaš'],
    answer: 'Vam',
    tip: 'The person who feels cold goes into the dative: Je li Vam hladno? Vas is an accusative, Vi is the subject form, which this sentence does not have, and Vaš means your.',
  },
  {
    mode: 'je',
    q: '— Kava ili čaj? — ____ mi je.',
    en: 'Coffee or tea? — I do not mind either way.',
    opts: ['Svejedno', 'Žao', 'Hladno', 'Kasno'],
    answer: 'Svejedno',
    tip: '"Svejedno mi je" means it is all the same to me. Žao mi je is I am sorry, Hladno mi je is I am cold, and Kasno is late; none of them answers the question.',
  },
  {
    mode: 'je',
    q: 'Ne mogu doći na tvoj rođendan. ____ mi je.',
    en: 'I cannot come to your birthday. I am sorry.',
    opts: ['Žao', 'Drago', 'Vruće', 'Dobro'],
    answer: 'Žao',
    tip: '"Žao mi je" is the set phrase for I am sorry. Drago mi je means I am glad, Vruće mi je I am hot, and Dobro mi je I feel fine, and none of them fits bad news.',
  },
  {
    mode: 'je',
    q: 'Za posao u međunarodnoj tvrtki ____ je znati engleski.',
    en: 'For a job at an international company it is necessary to know English.',
    opts: ['potrebno', 'opasno', 'nepristojno', 'kasno'],
    answer: 'potrebno',
    tip: 'What a job requires is necessary: potrebno je + infinitive. opasno means dangerous, nepristojno rude, and kasno late.',
  },
  {
    mode: 'je',
    q: '____ je da vlak kasni; još ne znamo.',
    en: 'It is possible that the train is late; we do not know yet.',
    opts: ['Moguće', 'Moguć', 'Može', 'Mogu'],
    answer: 'Moguće',
    tip: 'Before je and a da-clause the word is in the neuter form: Moguće je da… Moguć is masculine and needs a noun, and Može and Mogu are verbs, which cannot stand before je.',
  },
  {
    mode: 'je',
    q: 'Samo je jedna rečenica točna. Koja?',
    en: 'Which sentence is correct? (I find it hard to get up early.)',
    opts: [
      'Teško mi je rano ustati.',
      'Teško je mi rano ustati.',
      'Teško ja je rano ustati.',
      'Težak mi je rano ustati.',
    ],
    answer: 'Teško mi je rano ustati.',
    tip: 'The person is in the dative and comes before je: Teško mi je. "je mi" has the two short words in the wrong order, ja is the subject form, and Težak is a masculine adjective where the neuter Teško is needed.',
  },
];
