// src/data/drills/a2/describingPeopleDrill.ts
//
// A2 DESCRIBING PEOPLE — the drill for the `describing-people` lesson.
//
// Follows Razgovarajte s nama! A2–B1, lesson 6 "Odnosi, izgled, budućnost", pages 97, 102
// and 104: the question "Kakav je Alen, a kakav Marin?", the vocabulary page "Lijep(a) kao
// slika" in its order (STAS: visok, nizak, mršav · DOB: mlad, star · KOSA: plava, crna,
// smeđa, sijeda · OČI: plave, zelene, smeđe · brada) and "Još neke ljudske karakteristike"
// (ljubazan, otvoren, veseo… tvrdoglav kao magarac). The book teaches the comparative on
// these pages; the app teaches it later, so no comparative is used here.
//
// Three modes:
//   izgled  — build and age: the adjective agrees with the person
//   kosaOci — hair and eyes: imati + accusative, and plava / sijeda
//   kakav   — character, and Kakav? against Koji?

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DESCRIBING_PEOPLE_MODE_LABELS: Record<string, string> = {
  izgled: '🧍 Izgled',
  kosaOci: '👁️ Kosa i oči',
  kakav: '💬 Kakav je?',
};

export const DESCRIBING_PEOPLE_DRILL_DATA: ModeDrillItem[] = [
  // ── izgled ────────────────────────────────────────────────────────────────
  {
    mode: 'izgled',
    q: 'Moja mama nije visoka. Ona je ____.',
    en: 'My mom is not tall. She is short.',
    opts: ['niska', 'nizak', 'nizka', 'niski'],
    answer: 'niska',
    tip: 'mama is feminine, and nizak drops its a and turns z into s before k: niska. nizak is the masculine form, "nizka" is a misspelling, and niski is a masculine form too.',
  },
  {
    mode: 'izgled',
    q: 'Djed je ____, ima osamdeset godina.',
    en: 'Grandpa is old, he is eighty.',
    opts: ['star', 'stara', 'staro', 'mlad'],
    answer: 'star',
    tip: 'djed is masculine, so the adjective has no ending after je: star. stara is feminine, staro neuter, and mlad means young — not at eighty.',
  },
  {
    mode: 'izgled',
    q: 'Petar je vrlo ____.',
    en: 'Petar is very attractive.',
    opts: ['zgodan', 'zgodna', 'zgodno', 'zgodne'],
    answer: 'zgodan',
    tip: 'Petar is a man, so the masculine form: zgodan. zgodna is for a woman, zgodno is neuter, and zgodne is a feminine plural.',
  },
  {
    mode: 'izgled',
    q: 'I njegova sestra je ____.',
    en: 'His sister is attractive too.',
    opts: ['zgodna', 'zgodan', 'zgodana', 'zgodno'],
    answer: 'zgodna',
    tip: 'sestra is feminine, and zgodan drops its a when an ending is added: zgodna. zgodan is the masculine form, "zgodana" keeps an a that has to go, and zgodno is neuter.',
  },
  {
    mode: 'izgled',
    q: 'Tanja i Klara su ____.',
    en: 'Tanja and Klara are young.',
    opts: ['mlade', 'mladi', 'mlada', 'mlad'],
    answer: 'mlade',
    tip: 'Two women are a feminine plural, so the adjective ends in -e: mlade. mladi is for men or a mixed group, mlada is one woman, mlad one man.',
  },
  {
    mode: 'izgled',
    q: 'Alen i Marin su ____.',
    en: 'Alen and Marin are tall.',
    opts: ['visoki', 'visoke', 'visoka', 'visok'],
    answer: 'visoki',
    tip: 'Two men are a masculine plural, so the adjective ends in -i: visoki. visoke is for women, visoka is one woman, and visok describes only one man.',
  },
  {
    mode: 'izgled',
    q: 'Tata nosi ____.',
    en: 'Dad wears glasses.',
    opts: ['naočale', 'naočalu', 'naočala', 'naočali'],
    answer: 'naočale',
    tip: 'naočale exists only in the plural, and as the object of nosi it stays naočale. "naočalu" and "naočali" treat it as a singular word, and naočala is the genitive.',
  },
  {
    mode: 'izgled',
    q: 'Moj stric ima ____.',
    en: 'My uncle has a beard.',
    opts: ['bradu', 'brada', 'brade', 'bradom'],
    answer: 'bradu',
    tip: 'What he has is the object of imati, so the accusative: bradu. brada is the dictionary form, brade the genitive, and bradom the instrumental (s bradom).',
  },
  {
    mode: 'izgled',
    q: 'Ivo je krupan, a njegov brat je ____.',
    en: 'Ivo is well-built, and his brother is slim.',
    opts: ['mršav', 'mršava', 'mršavo', 'mršavi'],
    answer: 'mršav',
    tip: 'brat is masculine, and after je the short form with no ending is used: mršav. mršava is feminine, mršavo neuter, and mršavi is the plural.',
  },

  // ── kosaOci ───────────────────────────────────────────────────────────────
  {
    mode: 'kosaOci',
    q: 'Klara ima ____ kosu.',
    en: 'Klara has blond hair.',
    opts: ['plavu', 'plava', 'plave', 'plavom'],
    answer: 'plavu',
    tip: 'kosu is the object of ima, and the adjective follows it into the accusative: plavu kosu. plava is the subject form, plave is the form for eyes (plural), plavom is the instrumental.',
  },
  {
    mode: 'kosaOci',
    q: 'Marin ima ____ oči.',
    en: 'Marin has brown eyes.',
    opts: ['smeđe', 'smeđa', 'smeđu', 'smeđi'],
    answer: 'smeđe',
    tip: 'oči is plural and takes the feminine plural ending -e: smeđe oči. smeđa and smeđu are singular forms (they go with kosa and kosu), and smeđi is masculine.',
  },
  {
    mode: 'kosaOci',
    q: 'Baka ima ____ kosu.',
    en: 'Grandma has gray hair.',
    opts: ['sijedu', 'sivu', 'sijeda', 'siva'],
    answer: 'sijedu',
    tip: 'Gray hair has its own word, sijeda, and after ima it is in the accusative: sijedu kosu. sivu and siva are the gray of objects, not of hair, and sijeda is the subject form.',
  },
  {
    mode: 'kosaOci',
    q: 'Ima dugu crnu ____.',
    en: 'She has long black hair.',
    opts: ['kosu', 'kosa', 'kose', 'kosom'],
    answer: 'kosu',
    tip: 'dugu and crnu are accusatives, and the noun matches them: kosu. kosa is the subject form, kose the genitive, and kosom the instrumental.',
  },
  {
    mode: 'kosaOci',
    q: 'Njezina kosa je ____ i kovrčava.',
    en: 'Her hair is short and curly.',
    opts: ['kratka', 'kratku', 'kratke', 'kratak'],
    answer: 'kratka',
    tip: 'Here kosa is the subject with je, so the adjective stays in the subject form, like kovrčava: kratka. kratku is only for after imati, kratke is plural, and kratak is masculine.',
  },
  {
    mode: 'kosaOci',
    q: 'Njegove oči su ____.',
    en: 'His eyes are green.',
    opts: ['zelene', 'zeleni', 'zelena', 'zelenu'],
    answer: 'zelene',
    tip: 'oči takes the feminine plural, as Njegove shows: zelene. zeleni is the masculine plural, zelena a singular form, and zelenu a feminine accusative singular.',
  },
  {
    mode: 'kosaOci',
    q: 'Tanja ima kratku ____ kosu.',
    en: 'Tanja has short straight hair.',
    opts: ['ravnu', 'ravna', 'ravne', 'ravan'],
    answer: 'ravnu',
    tip: 'Every adjective follows kosu into the accusative, like kratku: ravnu. ravna is the subject form, ravne is plural, and ravan is masculine.',
  },
  {
    mode: 'kosaOci',
    q: 'Što znači „plava kosa“?',
    en: 'Choose the English meaning.',
    opts: ['blond hair', 'blue hair', 'gray hair', 'brown hair'],
    answer: 'blond hair',
    tip: 'plav means blue for eyes and things, but with kosa it means blond. Gray hair is sijeda kosa and brown hair is smeđa kosa.',
  },
  {
    mode: 'kosaOci',
    q: 'Kakvu kosu ima Marta? — ____.',
    en: 'What kind of hair does Marta have? — Long and black.',
    opts: ['Dugu i crnu', 'Duga i crna', 'Dugi i crni', 'Duge i crne'],
    answer: 'Dugu i crnu',
    tip: 'The short answer keeps the case of the question: Kakvu kosu? — Dugu i crnu (accusative). Duga i crna is the subject form, Dugi i crni is masculine, and Duge i crne is plural.',
  },

  // ── kakav ─────────────────────────────────────────────────────────────────
  {
    mode: 'kakav',
    q: '____ je tvoj novi šef? — Strog, ali pravedan.',
    en: 'What is your new boss like? — Strict but fair.',
    opts: ['Kakav', 'Kakva', 'Koji', 'Kako'],
    answer: 'Kakav',
    tip: 'A question about character is Kakav, in the masculine for šef. Kakva is the feminine form, Koji asks which one out of several, and Kako asks how someone is doing.',
  },
  {
    mode: 'kakav',
    q: '____ je tvoja nova kolegica? — Vesela i otvorena.',
    en: 'What is your new colleague like? — Cheerful and outgoing.',
    opts: ['Kakva', 'Kakav', 'Koja', 'Kako'],
    answer: 'Kakva',
    tip: 'The answer describes her character, so the question is Kakva, feminine like kolegica. Kakav is masculine, Koja would ask which colleague, and Kako asks how.',
  },
  {
    mode: 'kakav',
    q: '____ je tvoja prijateljica? — Ona s naočalama.',
    en: 'Which one is your friend? — The one with glasses.',
    opts: ['Koja', 'Kakva', 'Koji', 'Kako'],
    answer: 'Koja',
    tip: 'The answer picks one person out of a group, so the question is Koja — which one. Kakva would ask what she is like, Koji is masculine, and Kako asks how.',
  },
  {
    mode: 'kakav',
    q: '____ su tvoji susjedi? — Dragi i ljubazni.',
    en: 'What are your neighbors like? — Lovely and polite.',
    opts: ['Kakvi', 'Kakve', 'Kakav', 'Kako'],
    answer: 'Kakvi',
    tip: 'susjedi is a masculine plural, so the question word is Kakvi, with the same -i as dragi. Kakve is the feminine plural, Kakav is singular, and Kako asks how they are doing.',
  },
  {
    mode: 'kakav',
    q: 'Ana uvijek pomaže. Ona je vrlo ____.',
    en: 'Ana always helps. She is very kind.',
    opts: ['ljubazna', 'ljubazan', 'ljubazana', 'ljubazno'],
    answer: 'ljubazna',
    tip: 'Ana is a woman, and ljubazan drops its last a before the ending: ljubazna. ljubazan is the masculine form, "ljubazana" keeps the a, and ljubazno is neuter.',
  },
  {
    mode: 'kakav',
    q: 'Marin puno radi. On je ____.',
    en: 'Marin works a lot. What is he like?',
    opts: ['vrijedan', 'lijen', 'sramežljiv', 'nestrpljiv'],
    answer: 'vrijedan',
    tip: 'Someone who works a lot is vrijedan, hard-working. lijen is the opposite (lazy), sramežljiv means shy, and nestrpljiv means impatient.',
  },
  {
    mode: 'kakav',
    q: 'Iva ne voli čekati. Ona je ____.',
    en: 'Iva does not like waiting. What is she like?',
    opts: ['nestrpljiva', 'strpljiva', 'vesela', 'sramežljiva'],
    answer: 'nestrpljiva',
    tip: 'Not liking to wait is being impatient: nestrpljiva. strpljiva is the opposite (patient), vesela means cheerful, and sramežljiva means shy.',
  },
  {
    mode: 'kakav',
    q: 'Naša učiteljica je ____ i strpljiva.',
    en: 'Our teacher is cheerful and patient.',
    opts: ['vesela', 'veseo', 'veselo', 'veseli'],
    answer: 'vesela',
    tip: 'učiteljica is feminine, and veseo becomes vesela (the o goes back to l). veseo is the masculine form, veselo neuter, and veseli is the plural.',
  },
  {
    mode: 'kakav',
    q: 'Djed uvijek kaže „ne“. On je ____ kao magarac.',
    en: 'Grandpa always says "no". He is as … as a donkey.',
    opts: ['tvrdoglav', 'pametan', 'vrijedan', 'strpljiv'],
    answer: 'tvrdoglav',
    tip: 'The set comparison is "tvrdoglav kao magarac" — as stubborn as a donkey. pametan (clever), vrijedan (hard-working) and strpljiv (patient) do not describe someone who always says no.',
  },
  {
    mode: 'kakav',
    q: 'Sandra je pametna, a i njezin sin je ____.',
    en: 'Sandra is clever, and her son is clever too.',
    opts: ['pametan', 'pametna', 'pametno', 'pametne'],
    answer: 'pametan',
    tip: 'sin is masculine, so the form without an ending, which keeps its a: pametan. pametna is the feminine form used for Sandra, pametno is neuter, and pametne a feminine plural.',
  },
];
