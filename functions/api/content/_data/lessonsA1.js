// ═══════════════════════════════════════════════════════════
// A1 CURRICULUM — lessons 5–30 (Wave 1 content, 2026-08-28)
// ═══════════════════════════════════════════════════════════
//
// WHY THIS FILE EXISTS SEPARATELY: lessons.js is already ~6,000 lines for 45
// lessons. The curriculum targets ~30 per level, so the catalog is heading for
// roughly four times that. Splitting per level now is cheap; splitting a
// 24,000-line file later is not. LESSONS spreads this array in, so every
// consumer — the spine test, /api/content/lessons, /api/content/lessons/{id} —
// sees one flat catalog exactly as before.
//
// WHAT A1 WAS MISSING, AND WHY IT MATTERED
// ----------------------------------------
// A1 had nine lessons. It taught the alphabet, gender, verbs and the IDEA of
// cases — and then stopped, one step short of every structure a beginner
// actually needs to say anything:
//
//   * no plural at all, so a learner could name one thing and not two;
//   * no negation, so they could not say what they did not want;
//   * no accusative, so they could not name what they were eating, buying,
//     reading or looking at — the first case anyone needs;
//   * no locative, so they could not say where they were;
//   * no possessives, so they could not say "my sister";
//   * no adjectives, though `gender` explicitly told them agreement was coming.
//
// The lessons below close that, and they are sequenced so each one is usable
// with only what came before it. Every case lesson sits after the `cases`
// primer, which is the app's only "what IS a case" explanation.
//
// AUTHORING RULES (see CLAUDE.md → Croatian Content Authoring)
//   * Standard štokavski, full diacritics, correct case government.
//   * Every technical term is glossed in plain English on first use, and
//     anchored to something the learner already says in English where one
//     exists — the same "English bridge" method the case concept cards use.
//   * Quiz distractors are wrong in a way a learner is actually wrong: a case
//     error, a gender mismatch, an English word order. Never a Serbian form,
//     and never real Croatian marked incorrect.

/** @type {ReadonlyArray<object>} */
import { LESSONS_A1_NEW } from './a1new/index.js';

export const LESSONS_A1 = [
  // ─────────────────────────────────────────────────────────
  // Plural of Nouns
  // ─────────────────────────────────────────────────────────
  {
    id: 'plural-nouns',
    title: 'Plural of Nouns',
    subtitle: 'One book, two books — how Croatian nouns become plural',
    icon: '📚',
    level: 'A1',
    duration: '~6 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'From One to Many',
        body: 'English adds -s and stops: book → books. Croatian changes the ending instead, and which ending it takes depends on the gender you already learned. That is the whole trick — if you know a noun is feminine, you already know most of its plural.',
        icon: '📚',
      },
      {
        type: 'rule',
        title: 'Feminine: -a becomes -e',
        body: 'The easiest one, and the most reliable rule in the whole system. A feminine noun ends in -a, and its plural ends in -e. žena (woman) → žene (women). knjiga (book) → knjige (books). sestra (sister) → sestre (sisters). Nothing else changes.',
        highlight: '-a → -e',
      },
      {
        type: 'rule',
        title: 'Neuter: -o and -e become -a',
        body: 'A neuter noun ends in -o or -e, and its plural ends in -a. selo (village) → sela (villages). more (sea) → mora (seas). pismo (letter) → pisma (letters). Notice that a neuter plural now ends in -a, which is the feminine SINGULAR ending — that is a real source of confusion, and the only cure is to know the noun.',
        highlight: '-o / -e → -a',
      },
      {
        type: 'rule',
        title: 'Masculine: add -i',
        body: 'A masculine noun ends in a consonant, and the basic plural adds -i. student → studenti. prijatelj (friend) → prijatelji. profesor → profesori. This is the default, and it covers most longer masculine nouns.',
        highlight: 'consonant + -i',
      },
      {
        type: 'rule',
        title: 'Short Masculine Nouns Grow',
        body: 'One-syllable masculine nouns usually take an extra -ov- or -ev- before the -i. stol (table) → stolovi. grad (city) → gradovi. sin (son) → sinovi. After a soft consonant (č, ć, đ, dž, š, ž, j, lj, nj) it is -ev-: muž (husband) → muževi, nož (knife) → noževi, kralj (king) → kraljevi. A final c takes -ev- too, and changes to č in front of it: stric (uncle) → stričevi, zec (rabbit) → zečevi. There is no shortcut here — learn the plural with the word, the way you learned der/die/das if you ever studied German.',
        highlight: 'stol → stolovi',
      },
      {
        type: 'table',
        title: 'The Three Patterns',
        headers: ['Gender', 'Singular', 'Plural', 'Change'],
        rows: [
          ['Masculine (long)', 'student', 'studenti', 'add -i'],
          ['Masculine (short)', 'grad', 'gradovi', 'add -ovi'],
          ['Masculine (soft, short)', 'muž', 'muževi', 'add -evi'],
          ['Feminine', 'knjiga', 'knjige', '-a → -e'],
          ['Neuter', 'selo', 'sela', '-o → -a'],
          ['Neuter', 'more', 'mora', '-e → -a'],
        ],
      },
      {
        type: 'rule',
        title: 'When k, g and h Soften',
        body: 'Before the plural -i, a final k, g or h changes: k → c, g → z, h → s. vojnik (soldier) → vojnici. đak (pupil) → đaci. bubreg (kidney) → bubrezi. orah (walnut) → orasi. This is not an exception you have to memorise word by word — it is a sound rule that runs through the whole language, and you will meet it again later, in other forms of nouns.',
        highlight: 'k → c, g → z, h → s',
      },
      {
        type: 'example',
        title: 'Singular and Plural Side by Side',
        items: [
          {
            hr: 'Ovo je knjiga. Ovo su knjige.',
            en: 'This is a book. These are books.',
            note: 'je → su: the verb changes too',
          },
          {
            hr: 'Ovo je grad. Ovo su gradovi.',
            en: 'This is a city. These are cities.',
            note: 'the short masculine noun grad → gradovi takes -ovi',
          },
          {
            hr: 'Sestra je ovdje. Sestre su ovdje.',
            en: 'The sister is here. The sisters are here.',
            note: 'sestra → sestre, and je → su',
          },
          {
            hr: 'To je more. To su mora.',
            en: 'That is a sea. Those are seas.',
            note: 'the neuter noun more → mora changes -e → -a',
          },
          {
            hr: 'Student je tu. Studenti su tu.',
            en: 'The student is here. The students are here.',
            note: 'plural subject, plural verb',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Five You Simply Have to Know',
        body: 'A handful of very common nouns have plurals that follow no pattern, and they are common precisely because they are old. čovjek (person) → ljudi (people). dijete (child) → djeca (children). brat (brother) → braća (brothers). oko (eye) → oči, uho (ear) → uši. Learn these five as vocabulary, not as grammar.',
        highlight: 'čovjek → ljudi',
      },
      {
        type: 'example',
        title: 'The Irregulars in Use',
        items: [
          {
            hr: 'Čovjek je ovdje. Ljudi su ovdje.',
            en: 'The man is here. The people are here.',
            note: 'never "čovjeci"',
          },
          {
            hr: 'Dijete je tamo. Djeca su tamo.',
            en: 'The child is over there. The children are over there.',
            note: 'djeca looks singular but means many',
          },
          {
            hr: 'Braća su studenti.',
            en: 'The brothers are students.',
            note: 'braća takes a plural verb',
          },
          {
            hr: 'Ovo su oči, a ovo su uši.',
            en: 'These are eyes, and these are ears.',
            note: 'oko → oči, uho → uši',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Knjige su tu.',
            en: 'The books are here.',
            note: 'knjiga → knjige: feminine -a → -e',
          },
          {
            hr: 'Prijatelji su tamo.',
            en: 'The friends are over there.',
            note: 'prijatelj → prijatelji: masculine + -i',
          },
          {
            hr: 'To su sela, a ono su gradovi.',
            en: 'Those are villages, and those over there are cities.',
            note: 'selo → sela, grad → gradovi',
          },
          {
            hr: 'Sinovi su studenti.',
            en: 'The sons are students.',
            note: 'sin → sinovi: a short masculine noun grows',
          },
          {
            hr: 'Vojnici su ovdje.',
            en: 'The soldiers are here.',
            note: 'vojnik → vojnici: k softens to c before -i',
          },
          {
            hr: 'Muževi su doma.',
            en: 'The husbands are at home.',
            note: 'muž → muževi: -evi after a soft consonant',
          },
          {
            hr: 'Đaci su tu, a profesori su tamo.',
            en: 'The pupils are here, and the teachers are over there.',
            note: 'đak → đaci; profesor → profesori',
          },
          {
            hr: 'Jesu li to pisma? — Da, to su pisma.',
            en: 'Are those letters? — Yes, those are letters.',
            note: 'pismo → pisma: neuter -o → -a',
          },
          {
            hr: 'Ljudi su ovdje, a djeca su tamo.',
            en: 'The people are here, and the children are over there.',
            note: 'ljudi — the plural of čovjek',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the plural of "sestra" (sister)?',
        options: ['sestri', 'sestre', 'sestrovi', 'sestra'],
        correct: 1,
        explanation:
          'Feminine nouns end in -a and take -e in the plural: sestra → sestre. The ending -i belongs to masculine nouns and -ovi to short masculine ones, so neither can apply to a feminine noun.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "These are cities"?',
        options: ['Ovo su grad.', 'Ovo su gradi.', 'Ovo su gradovi.', 'Ovo su gradove.'],
        correct: 2,
        explanation:
          '"Grad" is a one-syllable masculine noun, so it grows to "gradovi" rather than taking a bare -i. "Grad" leaves the noun singular under a plural verb, and "gradove" is not the plural you say after "ovo su".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, adding -i to a feminine noun the way English adds -s to everything: "sestri" is not the plural of sestra — it is sestre. Second, treating a neuter plural as a feminine singular because it ends in -a: sela is many villages, so it is Sela su ovdje, never "Sela je ovdje". Third, forgetting that short masculine nouns grow: "gradi", "sini" and "stoli" do not exist — it is gradovi, sinovi, stolovi.',
        highlight: 'Sela su ovdje',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ su tu." (The letters are here — "pismo" is neuter.)',
            options: ['Pismi', 'Pisme', 'Pisma', 'Pismovi'],
            correct: 2,
            explanation:
              'A neuter noun in -o takes -a in the plural: pismo → pisma. "Pismi" borrows the masculine ending, "pisme" the feminine one, and "pismovi" the growth pattern that belongs only to short masculine nouns.',
          },
          {
            q: 'Complete: "___ su ovdje." (The tables are here — "stol" is a short masculine noun.)',
            options: ['Stoli', 'Stolovi', 'Stole', 'Stola'],
            correct: 1,
            explanation:
              'One-syllable masculine nouns add -ov- before the -i: stol → stolovi. A bare "stoli" is the commonest learner error; "stole" and "stola" are not the plural at all.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Vojniki su ovdje.',
              'Vojnikovi su ovdje.',
              'Vojnik su ovdje.',
              'Vojnici su ovdje.',
            ],
            correct: 3,
            explanation:
              'Before the plural -i a final k becomes c: vojnik → vojnici. "Vojniki" skips the sound change, "vojnikovi" applies the short-noun growth to a two-syllable noun, and "vojnik su" leaves the noun singular under a plural verb.',
          },
          {
            q: 'What is wrong with "Djeca je tamo."?',
            options: [
              'djeca should be djece',
              'je should be su — djeca takes a plural verb',
              'tamo should be ovdje',
              'Nothing — the sentence is correct',
            ],
            correct: 1,
            explanation:
              '"Djeca" looks singular but means "children", and it takes a plural verb: Djeca su tamo. The noun and the place word are already right.',
          },
          {
            q: 'What is the plural of "čovjek" (person)?',
            options: ['čovjeci', 'čovjekovi', 'ljudi', 'čovjeki'],
            correct: 2,
            explanation:
              '"Čovjek" has a completely different word for its plural: ljudi. "Čovjeci", "čovjeki" and "čovjekovi" apply regular patterns to a noun that does not follow them.',
          },
          {
            q: 'What is the plural of "muž" (husband)?',
            options: ['muževi', 'muži', 'mužovi', 'muže'],
            correct: 0,
            explanation:
              '"Muž" is a short masculine noun ending in a soft consonant, so it grows with -ev-: muževi. "Mužovi" uses the hard-consonant -ov-, "muži" skips the growth, and "muže" is the feminine pattern.',
          },
          {
            q: 'Which sentence correctly puts "To je more." into the plural?',
            options: ['To su mora.', 'To su more.', 'To su mori.', 'To su morovi.'],
            correct: 0,
            explanation:
              'Neuter -e becomes -a in the plural and the verb becomes su: To su mora. "Mori" and "morovi" borrow masculine patterns, and "more" leaves the noun singular.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Plural — Key Takeaways',
        points: [
          'Feminine -a → -e: knjiga → knjige',
          'Neuter -o / -e → -a: selo → sela, more → mora',
          'Masculine + -i: student → studenti',
          'Short masculine nouns grow: grad → gradovi, muž → muževi',
          'Before -i, k → c, g → z, h → s: vojnik → vojnici',
          'Learn the five irregulars as words: ljudi, djeca, braća, oči, uši',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Saying No
  // ─────────────────────────────────────────────────────────
  {
    id: 'negation',
    title: 'Saying No',
    subtitle: 'Negation, the three fused verbs, and why Croatian doubles up',
    icon: '🚫',
    level: 'A1',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Negation Is Almost Free',
        body: 'Croatian has no equivalent of English "do": there is no "I do not know", only "not I-know". You put "ne" in front of the verb and you are done. Three very common verbs fuse with it instead, and one rule about double negatives will surprise you — that is the whole lesson.',
        icon: '🚫',
      },
      {
        type: 'rule',
        title: 'The Rule: ne + verb',
        body: 'Put "ne" immediately before the verb, as a separate word. znam (I know) → ne znam (I do not know). razumijem → ne razumijem (I do not understand). govorim hrvatski → ne govorim hrvatski. Nothing else in the sentence moves.',
        highlight: 'ne + verb',
      },
      {
        type: 'rule',
        title: 'Three Verbs Fuse With It',
        body: 'Exactly three verbs write the negation as one word, and they are three of the most common verbs in the language. biti (to be) → nisam, nisi, nije, nismo, niste, nisu. imati (to have) → nemam, nemaš, nema, nemamo, nemate, nemaju. htjeti (to want) → neću, nećeš, neće, nećemo, nećete, neće. Everything else keeps "ne" separate.',
        highlight: 'nisam · nemam · neću',
      },
      {
        type: 'table',
        title: 'The Three Fused Verbs in Full',
        headers: ['', 'biti (be)', 'imati (have)', 'htjeti (want)'],
        rows: [
          ['ja', 'nisam', 'nemam', 'neću'],
          ['ti', 'nisi', 'nemaš', 'nećeš'],
          ['on / ona / ono', 'nije', 'nema', 'neće'],
          ['mi', 'nismo', 'nemamo', 'nećemo'],
          ['vi', 'niste', 'nemate', 'nećete'],
          ['oni / one / ona', 'nisu', 'nemaju', 'neće'],
        ],
      },
      {
        type: 'example',
        title: 'Everyday Negatives',
        items: [
          {
            hr: 'Ne znam.',
            en: 'I do not know.',
            note: 'the single most useful sentence at A1',
          },
          {
            hr: 'Ne razumijem. Ne govorim dobro hrvatski.',
            en: 'I do not understand. I do not speak Croatian well.',
            note: 'ne + verb, twice',
          },
          {
            hr: 'Nisam iz Hrvatske.',
            en: 'I am not from Croatia.',
            note: 'biti fuses: nisam, not "ne sam"',
          },
          {
            hr: 'Nemam vremena.',
            en: 'I do not have time.',
            note: 'a fixed phrase — learn it whole',
          },
          {
            hr: 'Neću, hvala.',
            en: 'I do not want to, thank you.',
            note: 'htjeti fuses: neću, not "ne hoću"',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Two Negatives Are Required, Not Wrong',
        body: 'English teachers spend years telling you not to say "I do not know nothing". Croatian requires exactly that. If the sentence contains a negative word — nitko (nobody), ništa (nothing), nikad (never), nigdje (nowhere), nijedan (not one) — the verb must ALSO be negated. Nitko ne zna. (Nobody knows.) Ništa ne vidim. (I see nothing.) Nikad ne kasnim. (I am never late.) Leaving the verb positive is not a milder version — it is simply ungrammatical.',
        highlight: 'Nitko ne zna.',
      },
      {
        type: 'example',
        title: 'Double Negation in Practice',
        items: [
          {
            hr: 'Nitko ne zna gdje je.',
            en: 'Nobody knows where he is.',
            note: 'nitko AND ne — both required',
          },
          {
            hr: 'Ništa ne razumijem.',
            en: 'I do not understand anything.',
            note: 'literally: nothing I-do-not-understand',
          },
          {
            hr: 'Nikad ne kasnim.',
            en: 'I am never late.',
            note: 'nikad + ne kasnim',
          },
          {
            hr: 'Nitko nije ovdje.',
            en: 'Nobody is here.',
            note: 'nitko + nije',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Two Phrases to Learn Whole',
        body: 'Two everyday phrases with the fused negative of imati are worth learning now, as whole blocks: Nemam vremena. (I do not have time.) Nema problema. (No problem.) The noun after them has a different ending from the one in the dictionary — vrijeme becomes vremena, problem becomes problema — and you will learn why in a later lesson. For now, do not build these: just say them.',
        highlight: 'Nema problema.',
      },
      {
        type: 'example',
        title: 'Answering in the Negative',
        items: [
          {
            hr: 'Govoriš li hrvatski? — Ne, ne govorim.',
            en: 'Do you speak Croatian? — No, I do not.',
            note: 'the first "ne" answers, the second negates',
          },
          {
            hr: 'Jesi li umoran? — Nisam.',
            en: 'Are you tired? — I am not.',
            note: 'one word is a complete answer',
          },
          {
            hr: 'Imaš li auto? — Nemam.',
            en: 'Do you have a car? — I do not.',
            note: 'no need to repeat the noun',
          },
          {
            hr: 'To nije problem.',
            en: 'That is not a problem.',
            note: 'nije — the most useful fused form of all',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Danas ne radim.',
            en: 'I am not working today.',
            note: 'ne + verb, as separate words',
          },
          {
            hr: 'Nismo umorni, nismo gladni.',
            en: 'We are not tired, we are not hungry.',
            note: 'biti fuses: nismo',
          },
          {
            hr: 'Oni nemaju vremena.',
            en: 'They do not have time.',
            note: 'nemaju — the same fixed phrase, for "they"',
          },
          {
            hr: 'Ona neće, a on hoće.',
            en: 'She does not want to, and he does.',
            note: 'neće — the fused negative of htjeti',
          },
          {
            hr: 'Nikad ne jedem meso.',
            en: 'I never eat meat.',
            note: 'nikad + ne — both are required',
          },
          {
            hr: 'Nitko ne govori engleski.',
            en: 'Nobody speaks English.',
            note: 'nitko + ne govori',
          },
          {
            hr: 'Ne, hvala, ne pušim.',
            en: 'No thank you, I do not smoke.',
            note: 'the first ne answers, the second negates',
          },
          {
            hr: 'To nije daleko.',
            en: 'That is not far.',
            note: 'nije — the most common fused form',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Imaš li auto? How do you answer "I do not (have one)"?',
        options: ['Ne imam.', 'Nemam.', 'Nisam.', 'Neću.'],
        correct: 1,
        explanation:
          '"Imati" is one of the three verbs that fuse with the negation, so it is "nemam" and never "ne imam". "Nisam" negates "to be" and "neću" negates "to want" — different verbs entirely.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "Nobody knows"?',
        options: ['Nitko zna.', 'Nitko ne zna.', 'Ne nitko zna.', 'Netko ne zna.'],
        correct: 1,
        explanation:
          'A negative word such as "nitko" requires the verb to be negated too, so "nitko ne zna" is the only grammatical option. "Netko ne zna" is a real Croatian sentence, but it means "somebody does not know" — a different statement.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, keeping "ne" separate from the three verbs that fuse: "ne sam", "ne imam" and "ne hoću" are wrong — the forms are nisam, nemam, neću. Second, dropping the "ne" after nitko, ništa or nikad because English forbids a double negative: "Nitko zna" is not a sentence — it must be Nitko ne zna. Third, the opposite error, gluing "ne" to verbs that do not fuse: "neznam" and "nerazumijem" written as one word — every other verb keeps ne separate: ne znam, ne razumijem.',
        highlight: 'Nitko ne zna',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ umoran danas." (I am not tired today.)',
            options: ['Nisam', 'Ne sam', 'Nemam', 'Neću'],
            correct: 0,
            explanation:
              '"Biti" fuses with the negation: nisam. "Ne sam" splits a verb that never splits, "nemam" negates having and "neću" negates wanting.',
          },
          {
            q: 'Complete: "Oni ___ auto." (They do not have a car.)',
            options: ['ne imaju', 'nisu', 'nemaju', 'neće'],
            correct: 2,
            explanation:
              '"Imati" is one of the three fused verbs, so the third person plural is nemaju. "Ne imaju" is the unfused error, and "nisu" and "neće" belong to biti and htjeti.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Ništa vidim.', 'Ne ništa vidim.', 'Ništa ne vidim.', 'Vidim ne ništa.'],
            correct: 2,
            explanation:
              'A negative word such as "ništa" requires "ne" directly before the verb: Ništa ne vidim. Leaving the verb positive is ungrammatical, and "ne" cannot attach to "ništa" or trail after the verb.',
          },
          {
            q: 'What is wrong with "Ja neznam gdje je pošta."?',
            options: [
              'gdje should be kamo',
              'je should be su',
              'Nothing is wrong',
              'neznam should be two words: ne znam',
            ],
            correct: 3,
            explanation:
              'Only biti, imati and htjeti fuse with the negation. "Znati" keeps "ne" as a separate word: ne znam. "Gdje je pošta" is correct — the post office is not moving, so gdje is right.',
          },
          {
            q: 'What does "Ne razumijem." mean?',
            options: [
              'I do not understand.',
              'I do not know.',
              'I am not here.',
              'I do not want to.',
            ],
            correct: 0,
            explanation:
              '"Razumijem" is "I understand", and ne in front of it negates it. "I do not know" is ne znam, "I am not here" is nisam ovdje and "I do not want to" is neću.',
          },
          {
            q: 'Which is the correct negative of "hoću" (I want)?',
            options: ['ne hoću', 'nehoću', 'neću', 'nisam hoću'],
            correct: 2,
            explanation:
              '"Htjeti" fuses with the negation into neću. "Ne hoću" keeps a separation this verb does not allow, and "nisam hoću" stacks two verbs where one is needed.',
          },
          {
            q: 'Someone asks "Imaš li auto?" (Do you have a car?). Which one-word answer means "I do not"?',
            options: ['Ne imam.', 'Nisam.', 'Nemam.', 'Nemaš.'],
            correct: 2,
            explanation:
              'The question uses "imati", so the answer is its fused negative in the first person: Nemam. "Nisam" answers a question about being, and "nemaš" is the second person — it would tell the asker what THEY lack.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Negation — Key Takeaways',
        points: [
          'ne goes directly before the verb, as a separate word: ne znam',
          'Three verbs fuse: nisam (biti), nemam (imati), neću (htjeti)',
          'Negative words demand a negative verb: Nitko ne zna. Ništa ne vidim.',
          'Learn Nemam vremena and Nema problema as whole phrases',
          'Nisam / Nemam / Neću are complete answers on their own',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Adjectives and Agreement
  // ─────────────────────────────────────────────────────────
  {
    id: 'adjectives-basic',
    title: 'Adjectives and Agreement',
    subtitle: 'Making describing words match the noun they describe',
    icon: '🎨',
    level: 'A1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Adjectives Have to Match',
        body: 'The gender lesson promised that gender would matter once you met adjectives. This is where it pays off. An English adjective never changes — a big table, a big book, big tables. A Croatian adjective changes its ending to match the noun in gender and number, and once you can do that, your sentences stop sounding like a word list.',
        icon: '🎨',
      },
      {
        type: 'rule',
        title: 'The Three Basic Endings',
        body: 'Take the adjective in its plain masculine form and add nothing for masculine, -a for feminine, -o for neuter. velik (big) → velik stol, velika knjiga, veliko selo. mlad (young) → mlad čovjek, mlada žena, mlado dijete. If that pattern looks familiar, it should — it is the same -∅ / -a / -o that marks the genders themselves.',
        highlight: 'velik · velika · veliko',
      },
      {
        type: 'table',
        title: 'Agreement at a Glance',
        headers: ['', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['big', 'velik stol', 'velika kuća', 'veliko selo'],
          ['small', 'mali grad (malen grad)', 'mala soba', 'malo dijete'],
          ['new', 'nov auto', 'nova knjiga', 'novo pismo'],
          ['good', 'dobar dan', 'dobra ideja', 'dobro jutro'],
          ['beautiful', 'lijep pogled', 'lijepa pjesma', 'lijepo more'],
        ],
      },
      {
        type: 'rule',
        title: 'Plural: -i, -e, -a',
        body: 'In the plural the three endings are -i for masculine, -e for feminine and -a for neuter. veliki stolovi, velike knjige, velika sela. Notice that the neuter plural adjective ends in -a, exactly like the neuter plural noun it describes — the two rhyme, which makes them easy to remember together.',
        highlight: 'veliki · velike · velika',
      },
      {
        type: 'rule',
        title: 'The Fleeting A',
        body: 'A few common adjectives lose a vowel when an ending is added. dobar (good) → dobra, dobro, dobri. This is the same "fleeting a" you meet elsewhere in the language: it appears in the bare masculine form and vanishes as soon as anything follows. Other examples: sretan (happy) → sretna, sretno; hladan (cold) → hladna, hladno; pametan (clever) → pametna, pametno.',
        highlight: 'dobar → dobra',
      },
      {
        type: 'rule',
        title: 'Two Masculine Forms, One Small Difference',
        body: 'Masculine adjectives have a short form and a long form: velik and veliki. The short form works like English "a big table" — velik stol, nov auto — and is what you use after "je": Stol je velik. The long form works like "the big table" and points at a specific one: Veliki stol je tu. Both can stand in front of a noun; after "je" use the short form. One everyday word breaks the pattern: the short form of mali is malen, which you will rarely hear — mali is used in both places (Grad je mali, mali grad).',
        highlight: 'Stol je velik. / Veliki stol...',
      },
      {
        type: 'example',
        title: 'Agreement in Whole Sentences',
        items: [
          {
            hr: 'Ovo je velika kuća.',
            en: 'This is a big house.',
            note: 'kuća is feminine, so velika',
          },
          {
            hr: 'Zagreb je lijep grad.',
            en: 'Zagreb is a beautiful city.',
            note: 'grad is masculine, so lijep',
          },
          {
            hr: 'More je danas toplo.',
            en: 'The sea is warm today.',
            note: 'more is neuter, so toplo',
          },
          {
            hr: 'To su dobri prijatelji.',
            en: 'Those are good friends.',
            note: 'masculine plural → -i',
          },
          {
            hr: 'Moja mala sestra je studentica.',
            en: 'My little sister is a student.',
            note: 'both moja and mala agree with sestra',
          },
        ],
      },
      {
        type: 'example',
        title: 'Adjectives Worth Knowing Today',
        items: [
          { hr: 'velik / mali', en: 'big / small', note: 'the first pair anyone needs' },
          { hr: 'nov / star', en: 'new / old', note: 'star also means old in age' },
          { hr: 'dobar / loš', en: 'good / bad', note: 'dobar loses its a: dobra' },
          { hr: 'lijep / ružan', en: 'beautiful / ugly', note: 'ružan → ružna' },
          { hr: 'skup / jeftin', en: 'expensive / cheap', note: 'essential when shopping' },
          { hr: 'topao / hladan', en: 'warm / cold', note: 'topao → topla, toplo' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ovo je moj novi auto.',
            en: 'This is my new car.',
            note: 'masculine long form in front of the noun',
          },
          {
            hr: 'Juha je vruća.',
            en: 'The soup is hot.',
            note: 'juha is feminine, so vruć → vruća',
          },
          {
            hr: 'Stari grad je lijep.',
            en: 'The old town is beautiful.',
            note: 'stari before the noun, lijep after je',
          },
          {
            hr: 'Kava je jako dobra.',
            en: 'The coffee is very good.',
            note: 'dobar loses its a: dobra',
          },
          {
            hr: 'Hladno pivo, molim.',
            en: 'A cold beer, please.',
            note: 'pivo is neuter, so hladno',
          },
          {
            hr: 'Ulice su uske i stare.',
            en: 'The streets are narrow and old.',
            note: 'feminine plural → -e on both adjectives',
          },
          {
            hr: 'Stanovi su skupi, a sobe su jeftine.',
            en: 'The flats are expensive, and the rooms are cheap.',
            note: 'masculine plural → -i, feminine plural → -e',
          },
          {
            hr: 'Sela su tiha i mala.',
            en: 'The villages are quiet and small.',
            note: 'neuter plural → -a, rhyming with sela',
          },
          {
            hr: 'Djeca su sretna.',
            en: 'The children are happy.',
            note: 'djeca takes the -a ending: sretan → sretna',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "a new book"? ("knjiga" is feminine.)',
        options: ['nov knjiga', 'nova knjiga', 'novo knjiga', 'novi knjiga'],
        correct: 1,
        explanation:
          'Feminine nouns take an adjective ending in -a, so "nova knjiga". The forms "nov" and "novi" are masculine and "novo" is neuter — none of them can sit in front of a feminine noun.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "More je ___" (The sea is warm).',
        options: ['topao', 'topla', 'toplo', 'topli'],
        correct: 2,
        explanation:
          '"More" is neuter — it ends in -e — so the adjective takes the neuter ending -o: toplo. "Topao" is the masculine form, "topla" the feminine and "topli" the masculine plural.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, leaving the adjective in its dictionary form for every noun, as English does: "velik kuća" — kuća is feminine, so it is velika kuća. Second, keeping the fleeting a when an ending is added: "dobara", "dobaro" — the vowel drops the moment anything follows: dobra, dobro. Third, reading the neuter plural as feminine singular because it ends in -a: velika sela is right (neuter plural), while "velike sela" borrows the feminine plural ending and is wrong.',
        highlight: 'velika kuća',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ovo je ___ soba." (This is a small room — "soba" is feminine.)',
            options: ['mali', 'mala', 'malo', 'male'],
            correct: 1,
            explanation:
              'A feminine singular noun takes the -a ending: mala soba. "Mali" is masculine, "malo" is neuter and "male" is the feminine PLURAL.',
          },
          {
            q: 'Complete: "Pivo je ___." (The beer is cold — "pivo" is neuter.)',
            options: ['hladan', 'hladna', 'hladni', 'hladno'],
            correct: 3,
            explanation:
              '"Pivo" ends in -o and is neuter, so the adjective takes -o: hladno. "Hladan" is masculine, "hladna" feminine and "hladni" masculine plural — and note that the fleeting a has dropped in all three ending forms.',
          },
          {
            q: 'Which is correct?',
            options: ['Dobra ideja.', 'Dobar ideja.', 'Dobro ideja.', 'Dobara ideja.'],
            correct: 0,
            explanation:
              '"Ideja" is feminine, so the adjective takes -a, and "dobar" drops its fleeting a before the ending: dobra ideja. "Dobara" keeps a vowel that must vanish, and "dobar" / "dobro" are the wrong genders.',
          },
          {
            q: 'What is wrong with "Gradovi su veliki i lijepe."?',
            options: [
              'gradovi should be gradi',
              'lijepe should be lijepi — masculine plural',
              'veliki should be velika',
              'Nothing is wrong',
            ],
            correct: 1,
            explanation:
              '"Gradovi" is masculine plural, so both adjectives take -i: veliki i lijepi. "Lijepe" is the feminine plural ending. The noun itself is right — grad grows to gradovi.',
          },
          {
            q: 'What does "sretan" (happy) become in front of a feminine noun?',
            options: ['sretana', 'sretno', 'sretni', 'sretna'],
            correct: 3,
            explanation:
              '"Sretan" has a fleeting a, so it drops the vowel and adds the feminine -a: sretna. "Sretana" keeps the vowel, and "sretno" / "sretni" are the neuter and masculine plural forms.',
          },
          {
            q: 'Complete: "Moja sestra je ___." (My sister is young.)',
            options: ['mlad', 'mladi', 'mlada', 'mlado'],
            correct: 2,
            explanation:
              'The adjective agrees with "sestra", which is feminine: mlada. Your own gender never matters — only the gender of the noun being described.',
          },
          {
            q: 'Complete: "Sela su ___." (The villages are small.)',
            options: ['mali', 'male', 'mala', 'malo'],
            correct: 2,
            explanation:
              '"Sela" is a neuter plural, and the neuter plural adjective ends in -a to match it: Sela su mala. "Male" is feminine plural, "mali" masculine plural and "malo" neuter singular.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Adjectives — Key Takeaways',
        points: [
          'An adjective matches its noun in gender and number',
          'Singular: -∅ masculine, -a feminine, -o neuter (velik, velika, veliko)',
          'Plural: -i masculine, -e feminine, -a neuter (veliki, velike, velika)',
          'Some adjectives drop a vowel when an ending is added: dobar → dobra',
          'Short form after je (Stol je velik); in front of the noun, short = "a" (velik stol), long = "the" (veliki stol)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // My, Your, Our — Possessives
  // ─────────────────────────────────────────────────────────
  {
    id: 'possessives',
    title: 'My, Your, Our',
    subtitle: 'Possessive words, and why they change with the thing owned',
    icon: '🔑',
    level: 'A1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Whose Is It?',
        body: 'English possessives never change: my brother, my sister, my books. Croatian possessives change their ending — they agree with the thing OWNED, not with the owner. That single sentence explains almost everything in this lesson.',
        icon: '🔑',
      },
      {
        type: 'rule',
        title: 'They Agree With What Is Owned',
        body: 'This is the trap for English speakers, so it is worth saying twice. In "moja sestra" the -a comes from "sestra" being feminine — not from anything about me. The same speaker says "moj brat" and "moje pismo" without changing anything about themselves. Ask "what gender is the thing?", never "who owns it?".',
        highlight: 'moj brat · moja sestra · moje pismo',
      },
      {
        type: 'table',
        title: 'The Seven Possessives',
        headers: ['English', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['my', 'moj', 'moja', 'moje'],
          ['your (one person)', 'tvoj', 'tvoja', 'tvoje'],
          ['his / its', 'njegov', 'njegova', 'njegovo'],
          ['her', 'njezin (njen)', 'njezina', 'njezino'],
          ['our', 'naš', 'naša', 'naše'],
          ['your (plural / polite)', 'vaš', 'vaša', 'vaše'],
          ['their', 'njihov', 'njihova', 'njihovo'],
        ],
      },
      {
        type: 'rule',
        title: 'The Owner Picks the Word, the Thing Picks the Ending',
        body: 'English changes the word for the owner: his book, her book. Croatian does too — njegov for a male owner, njezin for a female one — but then the ENDING still follows the thing owned. A man says "njegov brat" about another man\'s brother and "njegova sestra" about that same man\'s sister. Both forms njezin and njen are correct and current; njezin is the more formal.',
        highlight: 'njegova sestra = his sister',
      },
      {
        type: 'rule',
        title: 'Plural Possessives',
        body: 'In the plural, possessives take -i for masculine, -e for feminine and -a for neuter nouns. moji prijatelji (my friends), moje sestre (my sisters), moja pisma (my letters). Look at the noun: if it is a masculine plural, the possessive ends in -i; feminine plural, -e; neuter plural, -a.',
        highlight: 'moji · moje · moja',
      },
      {
        type: 'example',
        title: 'Talking About People',
        items: [
          {
            hr: 'Ovo je moj brat.',
            en: 'This is my brother.',
            note: 'brat is masculine → moj',
          },
          {
            hr: 'Moja majka je iz Dalmacije.',
            en: 'My mother is from Dalmatia.',
            note: 'majka is feminine → moja',
          },
          {
            hr: 'Naša obitelj je iz Zagreba.',
            en: 'Our family is from Zagreb.',
            note: 'obitelj is feminine → naša',
          },
          {
            hr: 'Njegovi roditelji su Hrvati.',
            en: 'His parents are Croatian.',
            note: 'plural masculine → njegovi',
          },
          {
            hr: 'Kako se zove vaša kći?',
            en: 'What is your daughter called?',
            note: 'vaša — polite, to someone you address formally',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Often Leaves Them Out',
        body: 'Where English insists on a possessive, Croatian frequently drops it because the meaning is obvious. Talking about your own family, "Mama je ovdje" is the natural way to say "My mum is here", and "Tata je Hrvat" is "My dad is Croatian". Using moja or moj there is not wrong, but leaving it out sounds more natural when it is clear whose mum or dad you mean.',
        highlight: 'Mama je ovdje.',
      },
      {
        type: 'example',
        title: 'Asking Whose',
        items: [
          {
            hr: 'Čiji je ovo auto?',
            en: 'Whose car is this?',
            note: 'čiji for a masculine noun',
          },
          {
            hr: 'Čija je ovo knjiga?',
            en: 'Whose book is this?',
            note: 'čija for a feminine noun',
          },
          {
            hr: 'Čije je ovo mjesto?',
            en: 'Whose seat is this?',
            note: 'čije for a neuter noun',
          },
          {
            hr: 'To je moje.',
            en: 'That is mine.',
            note: 'neuter moje works as a standalone "mine"',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Tvoja kava je tu.',
            en: 'Your coffee is here.',
            note: 'kava is feminine → tvoja',
          },
          {
            hr: 'Njezin muž je liječnik.',
            en: 'Her husband is a doctor.',
            note: 'female owner, masculine thing → njezin',
          },
          {
            hr: 'Naše selo je ondje.',
            en: 'Our village is over there.',
            note: 'selo is neuter → naše',
          },
          {
            hr: 'Njihova djeca su ovdje.',
            en: 'Their children are here.',
            note: 'djeca takes the -a form → njihova',
          },
          {
            hr: 'Jesu li vaši roditelji Hrvati?',
            en: 'Are your parents Croatian?',
            note: 'masculine plural → vaši; polite vaš',
          },
          {
            hr: 'Moje sestre su studentice.',
            en: 'My sisters are students.',
            note: 'feminine plural → moje',
          },
          {
            hr: 'Njegov auto je tamo.',
            en: 'His car is over there.',
            note: 'male owner, masculine thing → njegov',
          },
          {
            hr: 'Gdje je tvoj brat? — Tamo.',
            en: 'Where is your brother? — Over there.',
            note: 'brat is masculine → tvoj',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "my sister"? ("sestra" is feminine.)',
        options: ['moj sestra', 'moja sestra', 'moje sestra', 'moji sestra'],
        correct: 1,
        explanation:
          'The possessive agrees with the thing owned, and "sestra" is feminine, so it takes -a: moja sestra. Your own gender never affects the form.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You are talking about your friend Marko’s sister. Which is correct?',
        options: ['njegov sestra', 'njegova sestra', 'njezina sestra', 'njihova sestra'],
        correct: 1,
        explanation:
          '"Njegov" marks a male owner, and the ending then follows "sestra", which is feminine — so "njegova sestra". "Njezina" would mean a woman\'s sister and "njihova" would mean several people\'s sister.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, choosing the ending by the OWNER: a woman writes "moja brat" because she is female — but brat is masculine, so it is moj brat whoever is speaking. Second, using njegov for a female owner: her book is njezina knjiga, not "njegova knjiga" — njegov marks a male owner. Third, mixing a masculine plural ending with a feminine noun: "moji sestre" — a feminine plural takes -e on both words: moje sestre.',
        highlight: 'moj brat whoever is speaking',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ovo je ___ pismo." (This is my letter — "pismo" is neuter.)',
            options: ['moj', 'moja', 'moje', 'moji'],
            correct: 2,
            explanation:
              'The possessive agrees with the thing owned, and "pismo" is neuter, so it takes -e: moje pismo. "Moj" is masculine, "moja" feminine and "moji" masculine plural.',
          },
          {
            q: 'Complete: "___ obitelj je ovdje." (Our family is here — "obitelj" is feminine.)',
            options: ['Naš', 'Naša', 'Naše', 'Naši'],
            correct: 1,
            explanation:
              '"Obitelj" ends in a consonant but is feminine, so the possessive takes -a: naša obitelj. The consonant ending tempts learners into the masculine "naš" — the gender of the noun decides, not its last letter.',
          },
          {
            q: 'Which sentence is correct? (Her car is here.)',
            options: [
              'Njezin auto je ovdje.',
              'Njezina auto je ovdje.',
              'Njezino auto je ovdje.',
              'Njezini auto je ovdje.',
            ],
            correct: 0,
            explanation:
              '"Njezin" marks a female owner, and the ending then follows "auto", which is masculine: njezin auto. The -a, -o and -i endings would need a feminine, neuter or plural noun.',
          },
          {
            q: 'What is wrong with "Tvoji sestra je ovdje."?',
            options: [
              'je should be su',
              'sestra should be sestru',
              'Nothing is wrong',
              'tvoji should be tvoja',
            ],
            correct: 3,
            explanation:
              '"Sestra" is feminine singular, so the possessive must be tvoja. "Tvoji" is the masculine plural form and cannot sit in front of one sister. The verb and the noun are already correct.',
          },
          {
            q: 'A woman is talking about her own brother. What does she say?',
            options: ['njezin brat', 'moj brat', 'moja brat', 'njegov brat'],
            correct: 1,
            explanation:
              'Her own brother is "my brother", and "brat" is masculine, so it is moj brat — her gender changes nothing. "Njezin brat" would be some other woman\'s brother, and "moja brat" matches the owner instead of the noun.',
          },
          {
            q: 'How do you ask "Whose book is this?" ("knjiga" is feminine.)',
            options: [
              'Čiji je ovo knjiga?',
              'Čija je ovo knjiga?',
              'Čije je ovo knjiga?',
              'Čiji je ova knjiga?',
            ],
            correct: 1,
            explanation:
              '"Čiji" agrees with the thing asked about, and "knjiga" is feminine: čija. The neutral "ovo je" then works exactly as it does in "Ovo je knjiga".',
          },
          {
            q: 'Complete: "Ovo je ___ kuća." (This is their house.)',
            options: ['njihov kuća', 'njegova kuća', 'njihove kuća', 'njihova kuća'],
            correct: 3,
            explanation:
              '"Their" is njihov, and "kuća" is feminine, so it takes -a: njihova kuća. "Njegova" would mean one man owns it, and "njihove" is the feminine plural ending in front of a singular noun.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Possessives — Key Takeaways',
        points: [
          'Possessives agree with the thing OWNED, never with the owner',
          'moj / tvoj / njegov / njezin / naš / vaš / njihov',
          'Endings: moj / moja / moje and naš / naša / naše, but njegov / njegova / njegovo; plural -i / -e / -a',
          'njegov = a male owner, njezin (njen) = a female owner',
          'Croatian often omits them where English requires one: Mama je ovdje.',
          'Čiji? Čija? Čije? — whose, agreeing with the thing asked about',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // This, That, Over There
  // ─────────────────────────────────────────────────────────
  {
    id: 'demonstratives',
    title: 'This, That, Over There',
    subtitle: 'Pointing at things — and the three-way distance system',
    icon: '👉',
    level: 'A1',
    duration: '~5 min',
    color: '#d97706',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'English Has Two, Croatian Has Three',
        body: 'English points with "this" and "that". Croatian points with three words, and the middle one has no English equivalent: ovaj is near ME, taj is near YOU, onaj is near neither of us. Once you notice it, you will hear speakers switching between them constantly.',
        icon: '👉',
      },
      {
        type: 'table',
        title: 'The Three Distances',
        headers: ['Word', 'Distance', 'English', 'Place word'],
        rows: [
          ['ovaj', 'near the speaker', 'this (here)', 'ovdje — here'],
          ['taj', 'near the listener', 'that (by you)', 'tu — here (by us), there (by you)'],
          ['onaj', 'away from both', 'that (over there)', 'ondje / tamo — over there'],
        ],
      },
      {
        type: 'rule',
        title: 'They Agree With the Noun',
        body: 'Each of the three changes for the gender of the noun it stands in front of: ovaj stol (masculine), ova knjiga (feminine), ovo selo (neuter). The same pattern runs through taj / ta / to and onaj / ona / ono. The plural forms come later, once you have learned the plural of nouns. One note on tu: in everyday speech it usually simply means "here" — Knjiga je tu, the book is here.',
        highlight: 'ovaj · ova · ovo',
      },
      {
        type: 'table',
        title: 'All Three, All Genders',
        headers: ['', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['this (by me)', 'ovaj', 'ova', 'ovo'],
          ['that (by you)', 'taj', 'ta', 'to'],
          ['that (over there)', 'onaj', 'ona', 'ono'],
        ],
      },
      {
        type: 'rule',
        title: 'The Neuter Form Is Your Workhorse',
        body: 'To say "this is…" or "that is…" about anything at all, use the neuter form and do not worry about the gender of what follows. Ovo je knjiga. Ovo je Marko. To je problem. The neuter here is not describing the noun — it is standing in for "this thing", which is why it never changes. This is the single most useful pattern in the lesson.',
        highlight: 'Ovo je... / To je...',
      },
      {
        type: 'example',
        title: 'Pointing at Things',
        items: [
          {
            hr: 'Ovo je kuća.',
            en: 'This is a house.',
            note: 'neuter ovo, whatever follows',
          },
          {
            hr: 'Ovaj stol je ovdje.',
            en: 'This table is here.',
            note: 'ovaj agrees with stol',
          },
          {
            hr: 'Ta knjiga je tu.',
            en: 'That book is there, by you.',
            note: 'the book is near the listener',
          },
          {
            hr: 'Ona planina je Medvednica.',
            en: 'That mountain over there is Medvednica.',
            note: 'far from both of us; planina is feminine',
          },
          {
            hr: 'To nije problem.',
            en: 'That is not a problem.',
            note: 'to as a neutral "that"',
          },
        ],
      },
      {
        type: 'example',
        title: 'Here, There and Over There',
        items: [
          {
            hr: 'Ovdje smo.',
            en: 'We are here.',
            note: 'ovdje pairs with ovaj',
          },
          {
            hr: 'Knjiga je tu.',
            en: 'The book is here.',
            note: 'tu pairs with taj; in everyday speech it usually means "here"',
          },
          {
            hr: 'Marko je ondje.',
            en: 'Marko is over there.',
            note: 'ondje pairs with onaj; tamo is just as common',
          },
          {
            hr: 'Odakle si? — Odavde.',
            en: 'Where are you from? — From here.',
            note: 'odavde / odande — from here / from there',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ova žena je Ana.',
            en: 'This woman is Ana.',
            note: 'ova agrees with žena (feminine)',
          },
          {
            hr: 'Taj grad je Split.',
            en: 'That town is Split.',
            note: 'taj — the one you mentioned, or near you',
          },
          {
            hr: 'Ono selo je Brod.',
            en: 'That village over there is Brod.',
            note: 'neuter onaj → ono',
          },
          {
            hr: 'Ovaj čovjek je Ivan, a ona žena je Maja.',
            en: 'This man is Ivan, and that woman over there is Maja.',
            note: 'near me → ovaj; far from both → ona',
          },
          {
            hr: 'Ono dijete je Luka.',
            en: 'That child over there is Luka.',
            note: 'dijete is neuter → ono',
          },
          {
            hr: 'To je otac, a ovo je majka.',
            en: 'That is the father, and this is the mother.',
            note: 'to je / ovo je — the neuter workhorse',
          },
          {
            hr: 'Je li ovo auto? — Da, ovo je auto.',
            en: 'Is this a car? — Yes, this is a car.',
            note: 'ovo stays neuter in a question too',
          },
          {
            hr: 'Tamo je more, a ovdje je grad.',
            en: 'The sea is over there, and the town is here.',
            note: 'tamo and ovdje — the two ends of the scale',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are holding a book and want to say "This is a book". Which is correct?',
        options: ['Ovaj je knjiga.', 'Ovo je knjiga.', 'Taj je knjiga.'],
        correct: 1,
        explanation:
          'When you say "this is…" about a thing, Croatian uses the neuter "ovo" no matter what follows. "Ova knjiga je tu" is also correct, but there "ova" sits directly in front of the noun and agrees with it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Your friend is holding a pen (olovka, feminine). How do you say "that pen (in your hand)"?',
        options: ['ova olovka', 'ta olovka', 'ona olovka'],
        correct: 1,
        explanation:
          'Something near the LISTENER takes the "taj" family, and "olovka" is feminine, so it is "ta olovka". "Ova olovka" would mean the pen is in your own hand and "ona olovka" that it is away from both of you.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using ovaj or ova to open a "this is…" sentence: the opener is always the neuter — Ovo je knjiga, not "Ovaj je knjiga". Second, translating every English "that" as onaj: if the thing is near the listener or was just mentioned, it is taj — Taj grad je Split. Third, forgetting agreement in front of a noun: "ovaj knjiga" — knjiga is feminine, so it is ova knjiga.',
        highlight: 'Ovo je knjiga',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ stol je ovdje." (This table, right next to me, is here.)',
            options: ['Ovo', 'Ova', 'Ovaj', 'Ono'],
            correct: 2,
            explanation:
              'In front of a noun the demonstrative agrees with it, and "stol" is masculine: ovaj stol. "Ovo" is only for the sentence opener "this is…", "ova" is feminine and "ono" is neuter and far away.',
          },
          {
            q: 'Which word opens "This is…" about anything at all, whatever the gender of what follows?',
            options: ['ovaj', 'ova', 'ovo', 'ovi'],
            correct: 2,
            explanation:
              'The neuter "ovo" stands in for "this thing" and never changes: Ovo je knjiga, Ovo je moj brat. The other three agree with a noun that follows them directly.',
          },
          {
            q: 'Your friend is holding a pen. Which sentence correctly says "That pen is there, by you"?',
            options: [
              'Ta olovka je tu.',
              'Taj olovka je tu.',
              'To olovka je tu.',
              'Ti olovka je tu.',
            ],
            correct: 0,
            explanation:
              'Something near the listener takes the "taj" family, and "olovka" is feminine: ta olovka. "Taj" is masculine, "to" neuter, and "ti" is the pronoun "you".',
          },
          {
            q: 'What is wrong with "Onaj kuća je tamo."?',
            options: [
              'je should be su',
              'tamo should come first',
              'Nothing is wrong',
              'onaj should be ona',
            ],
            correct: 3,
            explanation:
              '"Kuća" is feminine, so the far demonstrative must be "ona": Ona kuća je tamo. The verb and the place word are already right.',
          },
          {
            q: 'Your friend points at a mountain far from both of you. Complete: "___ planina je Medvednica." ("planina" is feminine.)',
            options: ['Ova', 'Ta', 'Ona', 'Ono'],
            correct: 2,
            explanation:
              'Away from both speaker and listener is the "onaj" family, and the feminine form is ona: Ona planina. "Ova" would put it beside you, "ta" beside your friend, and "ono" is neuter.',
          },
          {
            q: 'Which place word pairs with "taj"?',
            options: ['ovdje', 'tu', 'ondje', 'odavde'],
            correct: 1,
            explanation:
              'The three-way split runs through the place words too: ovaj – ovdje, taj – tu, onaj – ondje (or tamo). "Odavde" means "from here" and belongs to a different set.',
          },
          {
            q: 'Complete: "___ dijete je Luka." (That child over there — "dijete" is neuter.)',
            options: ['Onaj', 'Ona', 'Ono', 'Oni'],
            correct: 2,
            explanation:
              '"Dijete" is neuter, so the far demonstrative is ono: Ono dijete. "Onaj" is masculine, "ona" feminine, and "oni" is the pronoun "they".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Demonstratives — Key Takeaways',
        points: [
          'ovaj = near me, taj = near you, onaj = away from both',
          'Place words follow the same three-way split: ovdje / tu / ondje (or tamo); everyday tu usually means "here"',
          'All three agree with the gender of the noun: ovaj stol, ova knjiga, ovo selo',
          'For "this is…" and "that is…", use the neuter: Ovo je… / To je…',
          'To je… is one of the most useful sentence openers at A1',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Accusative — Naming the Object
  // ─────────────────────────────────────────────────────────
  {
    id: 'accusative-intro',
    title: 'The Accusative',
    subtitle: 'The case for the thing you eat, buy, read or see',
    icon: '🎯',
    level: 'A1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The First Case You Actually Need',
        body: 'The cases lesson explained what a case IS. This is the first one you will use in almost every sentence you speak. The accusative marks the thing the verb acts on — what you drink, buy, read, see, want. English does this too, but only with pronouns: you say "I see HIM", not "I see he". That is exactly the same instinct, and Croatian applies it to every noun.',
        icon: '🎯',
      },
      {
        type: 'rule',
        title: 'The English Bridge: he → him',
        body: 'English kept case endings on a handful of words and threw the rest away. he/him, she/her, they/them, who/whom. Nobody has to think about it — you would never say "I see he". The accusative is that instinct written out on every noun in the language, so trust the instinct and just learn the endings.',
        highlight: 'I see HIM, not "I see he"',
      },
      {
        type: 'rule',
        title: 'Feminine: -a becomes -u',
        body: 'The clearest rule of the three, and the one you will use most. A feminine noun ending in -a takes -u as its object form. kava → Pijem kavu. (I drink coffee.) knjiga → Čitam knjigu. (I read a book.) sestra → Vidim sestru. (I see my sister.) One vowel changes and nothing else.',
        highlight: '-a → -u',
      },
      {
        type: 'rule',
        title: 'Neuter: Nothing Changes',
        body: 'Neuter nouns look identical whether they are the subject or the object. more → Vidim more. (I see the sea.) pismo → Čitam pismo. (I am reading a letter.) mlijeko → Pijem mlijeko. This is genuinely free — one whole gender you never have to adjust.',
        highlight: 'neuter = unchanged',
      },
      {
        type: 'rule',
        title: 'Masculine Things: Nothing Changes',
        body: 'A masculine noun that names a THING does not change at all as an object: stol → Vidim stol. grad → Vidim grad. auto → Vidim auto. film → Gledam film. Masculine nouns for PEOPLE and ANIMALS do change — that is the whole of the next lesson, so for now practise with things.',
        highlight: 'masculine thing = unchanged',
      },
      {
        type: 'table',
        title: 'The Accusative at a Glance',
        headers: ['Noun type', 'Subject form', 'Object form', 'Example'],
        rows: [
          ['Masculine thing', 'stol', 'stol', 'Vidim stol.'],
          ['Feminine in -a', 'kava', 'kavu', 'Pijem kavu.'],
          ['Feminine in a consonant', 'noć', 'noć', 'Volim noć.'],
          ['Neuter', 'more', 'more', 'Vidim more.'],
        ],
      },
      {
        type: 'example',
        title: 'Verbs That Take an Object',
        items: [
          {
            hr: 'Pijem kavu svako jutro.',
            en: 'I drink coffee every morning.',
            note: 'kava → kavu',
          },
          {
            hr: 'Čitam zanimljivu knjigu.',
            en: 'I am reading an interesting book.',
            note: 'the adjective takes -u as well: zanimljivu',
          },
          {
            hr: 'Gledam film.',
            en: 'I am watching a film.',
            note: 'film is masculine and not alive → unchanged',
          },
          {
            hr: 'Volim ovu kuću.',
            en: 'I love this house.',
            note: 'kuća → kuću, and ova follows it: ovu',
          },
          {
            hr: 'Pišem pismo.',
            en: 'I am writing a letter.',
            note: 'pismo is neuter → unchanged',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The Adjective Comes Along',
        body: 'Whatever ending the noun takes, its adjective and possessive take a matching one. Feminine is the tidiest: velika kuća → Vidim veliku kuću. moja knjiga → Čitam moju knjigu. With a masculine thing or a neuter noun nothing changes, so nothing in front of it changes either: Vidim nov auto. Do not drill these now — just notice that the whole phrase moves together, never the noun alone.',
        highlight: 'Vidim veliku kuću.',
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kupujem kruh i mlijeko.',
            en: 'I am buying bread and milk.',
            note: 'masculine not alive and neuter → both unchanged',
          },
          {
            hr: 'Svako jutro pijem čaj.',
            en: 'Every morning I drink tea.',
            note: 'čaj — masculine, not alive',
          },
          {
            hr: 'Volim moju sestru.',
            en: 'I love my sister.',
            note: 'sestra → sestru, and moja follows it: moju',
          },
          {
            hr: 'Gledamo utakmicu.',
            en: 'We are watching the match.',
            note: 'utakmica → utakmicu',
          },
          {
            hr: 'Čekamo autobus.',
            en: 'We are waiting for the bus.',
            note: 'autobus is a masculine thing → unchanged',
          },
          {
            hr: 'Mama kuha juhu, a tata pravi salatu.',
            en: 'Mum is cooking soup, and dad is making a salad.',
            note: 'juha → juhu, salata → salatu',
          },
          {
            hr: 'Gledamo televiziju.',
            en: 'We are watching television.',
            note: 'televizija → televiziju',
          },
          {
            hr: 'Učim hrvatsku gramatiku.',
            en: 'I am learning Croatian grammar.',
            note: 'the adjective takes -u as well',
          },
          {
            hr: 'Ujutro pijem kavu, a navečer pijem čaj.',
            en: 'In the morning I drink coffee, and in the evening I drink tea.',
            note: 'kava → kavu; čaj — a masculine thing, unchanged',
          },
          {
            hr: 'Danas čitam knjigu, a sutra gledam film.',
            en: 'Today I am reading a book, and tomorrow I am watching a film.',
            note: 'knjiga → knjigu; film unchanged',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am drinking water"? ("voda" is feminine.)',
        options: ['Pijem voda.', 'Pijem vodu.', 'Pijem vode.', 'Pijem vodi.'],
        correct: 1,
        explanation:
          'A feminine noun in -a takes -u as the object: voda → vodu. "Voda" is the subject form, "vode" and "vodi" belong to other cases you will meet later.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "I see a big house"?',
        options: ['Vidim velika kuća.', 'Vidim veliku kuću.', 'Vidim velika kuću.'],
        correct: 1,
        explanation:
          '"Kuća" is feminine, so it takes -u: kuću. The adjective moves with it, giving "veliku kuću". Changing only the noun leaves the phrase half-finished.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, leaving a feminine noun in its dictionary form: "Pijem kava" — the object takes -u: Pijem kavu. Second, adding an ending to a masculine thing: "Vidim auta", "Čitam romana" — a car and a novel stay as they are: Vidim auto, Čitam roman. Third, changing the noun but not the word in front of it: "Vidim velika kuću" — the whole phrase moves together: Vidim veliku kuću.',
        highlight: 'Pijem kavu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Jedem ___." (I am eating soup — "juha" is feminine.)',
            options: ['juha', 'juhu', 'juhom', 'juhi'],
            correct: 1,
            explanation:
              'A feminine noun in -a takes -u as the object: juha → juhu. "Juha" is the subject form, and "juhom" and "juhi" belong to other uses.',
          },
          {
            q: 'Complete: "Vidim ___." (I see a table — a masculine thing.)',
            options: ['stolu', 'stol', 'stola', 'stole'],
            correct: 1,
            explanation:
              'A masculine noun that names a thing does not change as an object: Vidim stol. The other three are forms of the word that belong to other uses.',
          },
          {
            q: 'Which sentence is correct? (I am looking at the sea — "more" is neuter.)',
            options: ['Gledam more.', 'Gledam mora.', 'Gledam moru.', 'Gledam morem.'],
            correct: 0,
            explanation:
              'Neuter nouns never change in the accusative: Gledam more. "Mora", "moru" and "morem" are real forms of the word, but they belong to other cases.',
          },
          {
            q: 'What is wrong with "Pijem kava."?',
            options: [
              'pijem should be pije',
              'Nothing is wrong',
              'kava should be kavu — the object takes -u',
              'kava should be kave',
            ],
            correct: 2,
            explanation:
              '"Kava" is feminine, so as the object it takes -u: Pijem kavu. The verb is already right.',
          },
          {
            q: 'Which noun stays exactly the same when it becomes the object?',
            options: ['kava (coffee)', 'knjiga (book)', 'more (sea)', 'juha (soup)'],
            correct: 2,
            explanation:
              '"More" is neuter, and neuter nouns never change as the object: Vidim more. The other three are feminine in -a and take -u.',
          },
          {
            q: 'Complete: "Gledam ___." (I am watching a film — a masculine thing.)',
            options: ['filma', 'film', 'filmu', 'filme'],
            correct: 1,
            explanation:
              'A masculine thing does not change as the object: Gledam film. Adding -a is only for people and animals, which come in the next lesson.',
          },
          {
            q: 'Complete: "Kupujem ___." (I am buying a new bag — "nova torba".)',
            options: ['nova torba', 'novu torbu', 'novom torbom', 'novoj torbi'],
            correct: 1,
            explanation:
              'The whole phrase moves together: the feminine noun takes -u and so does its adjective — novu torbu. Changing only the noun, or leaving both as they are, is the commonest slip.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Accusative — Key Takeaways',
        points: [
          'The accusative marks what the verb acts on — the same instinct as English he → him',
          'Feminine -a → -u: Pijem kavu.',
          'Neuter never changes: Vidim more.',
          'A masculine thing stays the same (Vidim stol); people and animals come next lesson',
          'Adjectives and possessives take a matching ending — the phrase moves together',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Imati — Having and Not Having
  // ─────────────────────────────────────────────────────────
  {
    id: 'imati-nemati',
    title: 'Having and Not Having',
    subtitle: 'imati, nemati, and the ima / nema that means "there is"',
    icon: '🎒',
    level: 'A1',
    duration: '~6 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'One Verb, Three Jobs',
        body: '"Imati" is the second verb every learner needs after "biti". It says what you own, it says how old you are, and in the third person it turns into the way Croatian says "there is" and "there is not". Three very different jobs from one small verb.',
        icon: '🎒',
      },
      {
        type: 'table',
        title: 'imati — to have',
        headers: ['Person', 'Positive', 'Negative'],
        rows: [
          ['ja', 'imam', 'nemam'],
          ['ti', 'imaš', 'nemaš'],
          ['on / ona / ono', 'ima', 'nema'],
          ['mi', 'imamo', 'nemamo'],
          ['vi', 'imate', 'nemate'],
          ['oni / one / ona', 'imaju', 'nemaju'],
        ],
      },
      {
        type: 'rule',
        title: 'What You Have Is an Object',
        body: 'The thing you have takes the accusative, exactly like the thing you drink or read. Imam sestru. (I have a sister — sestra → sestru.) Imam brata. (I have a brother — alive, so brata.) Imam auto. (I have a car — not alive, so unchanged.) If you can order a coffee, you can already say what you own.',
        highlight: 'Imam sestru.',
      },
      {
        type: 'rule',
        title: 'Nemati Works the Same Way',
        body: 'In the negative, what you do not have is also an object: Nemam auto. (I do not have a car.) Nemam rezervaciju. (I do not have a reservation.) Nemam ni sestru ni brata. (I have neither a sister nor a brother.) Two everyday phrases are different and worth learning whole: Nemam vremena. (I have no time.) Nema problema. (No problem.) Their nouns take another ending, which you will meet in a later lesson — for now, just say them.',
        highlight: 'Nemam rezervaciju.',
      },
      {
        type: 'example',
        title: 'Saying What You Have',
        items: [
          {
            hr: 'Imam sestru i brata.',
            en: 'I have a sister and a brother.',
            note: 'sestra → sestru; brat is alive → brata',
          },
          {
            hr: 'Imaš li sestru?',
            en: 'Do you have a sister?',
            note: 'li makes it a yes/no question',
          },
          {
            hr: 'Nemamo auto, ali imamo bicikl.',
            en: 'We do not have a car, but we have a bike.',
            note: 'nemamo — one word, always',
          },
          {
            hr: 'Danas nemam vremena.',
            en: 'I do not have time today.',
            note: 'a fixed phrase — learn it whole',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Age Is Something You Have',
        body: 'Croatian does not say "I am thirty" — it says "I have thirty years". Koliko imaš godina? (How old are you? — literally: how many years do you have?) Imam trideset godina. (I am thirty.) Learn the answer with your own number as one phrase; the word for "years" has another form after some numbers, which the numbers lesson explains later. If you are ever unsure, remember that Croatian treats age as a possession, and the question word is "koliko" rather than "kako star".',
        highlight: 'Imam trideset godina.',
      },
      {
        type: 'rule',
        title: 'Ima Also Means "There Is"',
        body: 'The third-person form ima does double duty as the word for "there is". Ima li ovdje bankomat? (Is there a cash machine here?) — Ima. (There is.) Ima li ovdje hotel? With one thing, the noun simply stays as it is in the dictionary. The negative, nema, changes the noun after it, so for now use it only in the phrases you know: Nema problema. Nema na čemu.',
        highlight: 'Ima li ovdje bankomat?',
      },
      {
        type: 'example',
        title: 'Is There…?',
        items: [
          {
            hr: 'Ima li ovdje kavana?',
            en: 'Is there a café here?',
            note: 'ima li — the standard way to ask',
          },
          {
            hr: 'Ima li ovdje bankomat? — Ima.',
            en: 'Is there a cash machine here? — There is.',
            note: 'one word is a complete answer',
          },
          {
            hr: 'Ima li ovdje hotel? — Ima, tamo.',
            en: 'Is there a hotel here? — Yes, over there.',
            note: 'one thing: the noun stays as it is',
          },
          {
            hr: 'Nema problema!',
            en: 'No problem!',
            note: 'you will hear this constantly',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Imam psa i mačku.',
            en: 'I have a dog and a cat.',
            note: 'psa (alive) and mačka → mačku',
          },
          {
            hr: 'Imaš li kartu?',
            en: 'Do you have a ticket?',
            note: 'karta → kartu',
          },
          {
            hr: 'Moj brat ima auto, a ja imam bicikl.',
            en: 'My brother has a car, and I have a bike.',
            note: 'masculine things stay unchanged',
          },
          {
            hr: 'Nemam kišobran.',
            en: 'I do not have an umbrella.',
            note: 'nemati + the object, like imati',
          },
          {
            hr: 'Imate li slobodnu sobu?',
            en: 'Do you have a free room?',
            note: 'V-form; slobodna soba → slobodnu sobu',
          },
          {
            hr: 'Nemam rezervaciju.',
            en: 'I do not have a reservation.',
            note: 'rezervacija → rezervaciju',
          },
          {
            hr: 'Imamo veliku kuću.',
            en: 'We have a big house.',
            note: 'the adjective moves with the noun',
          },
          {
            hr: 'Ima li ovdje restoran? — Ima, tamo.',
            en: 'Is there a restaurant here? — There is, over there.',
            note: 'ima = there is',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I have a sister"?',
        options: ['Imam sestra.', 'Imam sestru.', 'Imam sestri.', 'Ima sestru.'],
        correct: 1,
        explanation:
          'What you have is an object, so "sestra" takes the accusative -u: Imam sestru. "Ima sestru" would mean he or she has a sister, not you.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you ask someone how old they are?',
        options: ['Kako star si?', 'Koliko imaš godina?', 'Koliko si godina?', 'Koliko star imaš?'],
        correct: 1,
        explanation:
          'Croatian treats age as something you HAVE, so the question is "Koliko imaš godina?" — how many years do you have. Building it around "biti" or around "star" is a direct translation from English and does not work here.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, keeping the dictionary form after imam: "Imam sestra" — what you have is an object: Imam sestru. Second, translating age with biti: "Ja sam trideset" — Croatian has its years: Imam trideset godina. Third, writing the negative as two words: "ne imam" — imati fuses into nemam: Nemam auto.',
        highlight: 'Imam trideset godina',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Imam ___." (I have a brother.)',
            options: ['brat', 'brata', 'bratu', 'brate'],
            correct: 1,
            explanation:
              'What you have is an object, and "brat" is masculine and alive, so it takes -a: Imam brata. "Brat" is the subject form, and "bratu" and "brate" are forms for other uses.',
          },
          {
            q: 'Complete: "Ja ___ auto." (I do not have a car.)',
            options: ['nije', 'nisam', 'nemam', 'ne imam'],
            correct: 2,
            explanation:
              'The negative of imam is the fused nemam: Nemam auto. "Nisam" and "nije" negate being, and "ne imam" splits a verb that fuses.',
          },
          {
            q: 'Which is the correct polite way to ask someone their age?',
            options: [
              'Koliko imate godina?',
              'Koliko ste godina?',
              'Kako ste star?',
              'Koliko godina ste?',
            ],
            correct: 0,
            explanation:
              'Age is something you have, so the question uses imati with the V-form: Koliko imate godina? The other three build it on biti or on "star", copying English.',
          },
          {
            q: 'What is wrong with "Imam sestra."?',
            options: [
              'imam should be imamo',
              'sestra should be sestre',
              'Nothing is wrong',
              'sestra should be sestru — what you have is an object',
            ],
            correct: 3,
            explanation:
              'What you have takes the accusative, and feminine -a becomes -u: Imam sestru. The verb is already right.',
          },
          {
            q: 'What does "Nema problema!" mean?',
            options: [
              'There is a problem.',
              'No problem!',
              'I do not have a problem.',
              'Do not make problems!',
            ],
            correct: 1,
            explanation:
              '"Nema problema" is a fixed phrase — literally "there is no problem" — and the everyday way to say "no problem".',
          },
          {
            q: 'Complete: "Moja sestra ___ psa." (My sister has a dog.)',
            options: ['imam', 'ima', 'imaju', 'imate'],
            correct: 1,
            explanation:
              '"Moja sestra" is one person, third person singular, so the verb is ima. "Imam" is I, "imaju" is they and "imate" is you (plural or polite).',
          },
          {
            q: 'Complete: "___ li auto?" (Do you have a car? — to a friend.)',
            options: ['Imaš', 'Ima', 'Imam', 'Imate'],
            correct: 0,
            explanation:
              'A friend is addressed with the "ti" form: Imaš li auto? "Imate" is the polite or plural form, "ima" is he or she, and "imam" would ask whether I have one.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Imati — Key Takeaways',
        points: [
          'imam, imaš, ima, imamo, imate, imaju — and the fused negative nemam…',
          'What you HAVE is accusative: Imam sestru.',
          'nemati works the same way: Nemam auto. Learn Nemam vremena and Nema problema as phrases.',
          'Age is a possession: Koliko imaš godina? — Imam trideset godina.',
          'ima also means "there is": Ima li ovdje bankomat?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Locative — Saying Where You Are
  // ─────────────────────────────────────────────────────────
  {
    id: 'locative-intro',
    title: 'The Locative',
    subtitle: 'Where you are, and the case that never appears alone',
    icon: '📍',
    level: 'A1',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Case for "Where"',
        body: 'You can now say what you are doing to something. This case says where you are while you do it. It is the friendliest case in the language: the endings are short, there are only two of them worth learning today, and it never turns up without a preposition to warn you it is coming.',
        icon: '📍',
      },
      {
        type: 'rule',
        title: 'It Never Stands Alone',
        body: 'Every other case can appear on its own. The locative cannot — it only ever follows one of a small set of prepositions: u (in), na (on, at), o (about), po (around, along), pri (near, at). That is genuinely useful, because it means you always get a warning that the locative is coming. When you hear "u" or "na" and nothing is moving, the locative follows.',
        highlight: 'u · na · o · po · pri',
      },
      {
        type: 'rule',
        title: 'Masculine and Neuter Take -u',
        body: 'Both masculine and neuter nouns end in -u in the locative. grad → u gradu (in town). Zagreb → u Zagrebu. stol → na stolu (on the table). more → na moru (at the seaside). selo → u selu (in the village). One ending covers two genders.',
        highlight: 'masculine & neuter → -u',
      },
      {
        type: 'rule',
        title: 'Feminine Takes -i',
        body: 'A feminine noun in -a swaps it for -i. škola → u školi (at school). kuća → u kući (in the house — being at home is a set phrase, doma). Hrvatska → u Hrvatskoj — an adjective-shaped country name, which behaves slightly differently and is worth learning as a phrase. Notice the contrast with the accusative: u školu is going TO school, u školi is being AT school.',
        highlight: 'feminine → -i',
      },
      {
        type: 'table',
        title: 'Where To vs. Where',
        headers: ['Noun', 'Motion (accusative)', 'Position (locative)'],
        rows: [
          ['škola', 'Idem u školu.', 'U školi sam.'],
          ['grad', 'Idem u grad.', 'U gradu sam.'],
          ['more', 'Idem na more.', 'Na moru sam.'],
          ['kuća', 'Idem u kuću.', 'U kući sam.'],
          ['posao', 'Idem na posao.', 'Na poslu sam.'],
        ],
      },
      {
        type: 'rule',
        title: 'Kamo? and Gdje?',
        body: 'Croatian has separate question words for the two ideas, which makes the choice easier than it looks. "Gdje?" asks where something IS and expects the locative: Gdje si? — U kući sam. "Kamo?" asks where something is GOING and expects the accusative: Kamo ideš? — U grad. In everyday speech many speakers use "gdje" for both, but the answer still follows the rule.',
        highlight: 'Gdje si? / Kamo ideš?',
      },
      {
        type: 'example',
        title: 'Saying Where You Are',
        items: [
          {
            hr: 'Živim u Zagrebu.',
            en: 'I live in Zagreb.',
            note: 'masculine → -u',
          },
          {
            hr: 'Radim u banci.',
            en: 'I work at a bank.',
            note: 'banka → banci, with k → c before -i',
          },
          {
            hr: 'Knjiga je na stolu.',
            en: 'The book is on the table.',
            note: 'na + locative = on',
          },
          {
            hr: 'Ljeti smo uvijek na moru.',
            en: 'In summer we are always at the seaside.',
            note: 'more → moru',
          },
          {
            hr: 'Moji roditelji žive u Kanadi.',
            en: 'My parents live in Canada.',
            note: 'Kanada → Kanadi',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Radim u uredu u centru.',
            en: 'I work in an office in the centre.',
            note: 'ured → uredu, centar → centru: masculine -u',
          },
          {
            hr: 'Djeca su u parku.',
            en: 'The children are in the park.',
            note: 'park → parku',
          },
          {
            hr: 'Sjedimo u kavani i pijemo kavu.',
            en: 'We are sitting in a café and drinking coffee.',
            note: 'kavana → kavani; kavu is the object',
          },
          {
            hr: 'Ključevi su u torbi.',
            en: 'The keys are in the bag.',
            note: 'torba → torbi',
          },
          {
            hr: 'Živimo na otoku.',
            en: 'We live on an island.',
            note: 'otok → otoku; islands take na',
          },
          {
            hr: 'Pričamo o školi.',
            en: 'We are talking about school.',
            note: 'o + locative: škola → školi',
          },
          {
            hr: 'Baka je u vrtu.',
            en: 'Grandma is in the garden.',
            note: 'vrt → vrtu',
          },
          {
            hr: 'Na stolu je pismo za tebe.',
            en: 'There is a letter for you on the table.',
            note: 'na stolu — position, so the locative',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Also "About"',
        body: 'The preposition "o" plus the locative means "about" in the sense of a topic. Govorimo o filmu. (We are talking about the film.) Mislim o poslu. (I am thinking about work.) Pričamo o Zagrebu. (We are talking about Zagreb.) It is the same ending you already know, doing a completely different job.',
        highlight: 'Govorimo o filmu.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am at school"? ("škola" is feminine.)',
        options: ['U školu sam.', 'U školi sam.', 'U škola sam.', 'Na školi sam.'],
        correct: 1,
        explanation:
          'Position takes the locative, and a feminine noun swaps -a for -i: u školi. "U školu" is the accusative, which would mean you are going to school rather than already there.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence means "I am going to town" (not "I am in town")?',
        options: ['U gradu sam.', 'Idem u grad.', 'Idem u gradu.', 'Grad sam.'],
        correct: 1,
        explanation:
          'Motion takes the accusative, and "grad" is masculine and not alive, so it does not change: Idem u grad. "U gradu" is the locative and describes where you already are.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using the accusative for where you ARE: "Živim u Zagreb", "U školu sam" — position takes the locative: Živim u Zagrebu, U školi sam. Second, choosing the preposition from English: "na Zagrebu", or "u moru" when you mean at the seaside (that says you are in the water) — the pairing is fixed: u Zagrebu, na moru. Third, forgetting the k → c change before -i: "u banki" — banka becomes u banci.',
        highlight: 'Živim u Zagrebu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Radim ___." (I work at a school — "škola" is feminine.)',
            options: ['u školu', 'u školi', 'u škola', 'u škole'],
            correct: 1,
            explanation:
              'Being somewhere takes the locative, and a feminine noun swaps -a for -i: u školi. "U školu" is the accusative for going there, and "škola" / "škole" are other cases.',
          },
          {
            q: 'Complete: "Knjige su ___." (The books are on the table.)',
            options: ['na stol', 'na stolu', 'na stola', 'u stolu'],
            correct: 1,
            explanation:
              'A masculine noun takes -u in the locative: na stolu. "Na stol" would be motion onto the table, "stola" is a case you meet later, and "u stolu" would put the books inside it.',
          },
          {
            q: 'Which sentence is correct? (I live in Split.)',
            options: ['Živim u Split.', 'Živim u Splita.', 'Živim u Splitu.', 'Živim na Splitu.'],
            correct: 2,
            explanation:
              '"Split" is masculine, so the locative is Splitu, and cities take u: Živim u Splitu. "U Split" is the accusative of motion, "Splita" is a case you meet later, and "na" is not the preposition cities use.',
          },
          {
            q: 'What is wrong with "Idem u gradu."?',
            options: [
              'u should be na',
              'idem should be ide',
              'Nothing is wrong',
              'gradu should be grad — motion takes the accusative',
            ],
            correct: 3,
            explanation:
              '"Idem" is motion, so the accusative follows: Idem u grad. "U gradu" is the locative and only works when you are already there — U gradu sam.',
          },
          {
            q: 'Which question word expects a locative answer?',
            options: ['Kamo?', 'Gdje?', 'Odakle?', 'Kada?'],
            correct: 1,
            explanation:
              '"Gdje?" asks where something IS, and the answer takes the locative: Gdje si? — U kući sam. "Kamo?" asks where something is going and expects the accusative.',
          },
          {
            q: 'Complete: "Govorimo ___." (We are talking about the film.)',
            options: ['o film', 'o filma', 'o filmu', 'u filmu'],
            correct: 2,
            explanation:
              '"O" plus the locative means "about", and the masculine "film" takes -u: o filmu. "O film" has no ending, "filma" is a case you meet later, and "u filmu" would mean in the film.',
          },
          {
            q: 'Which statement about the locative is true?',
            options: [
              'It never appears without a preposition',
              'It marks the direct object of a verb',
              'It follows only verbs of motion',
              'It never changes the noun',
            ],
            correct: 0,
            explanation:
              'The locative is the one case that only ever follows a preposition — u, na, o, po, pri. The direct object is the accusative, motion takes the accusative, and the locative changes every noun that enters it.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Locative — Key Takeaways',
        points: [
          'The locative never appears without a preposition: u, na, o, po, pri',
          'Masculine and neuter take -u: u gradu, na moru',
          'Feminine takes -i: u školi, u kući',
          'Motion uses the accusative, position uses the locative: u školu vs. u školi',
          'Gdje? expects a locative answer; Kamo? expects an accusative one',
          'o + locative means "about": Govorimo o filmu.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Prepositions of Place
  // ─────────────────────────────────────────────────────────
  {
    id: 'prepositions-place',
    title: 'U and Na: Where vs Where To',
    subtitle: 'Gdje? takes the locative, kamo? takes the accusative',
    icon: '🧭',
    level: 'A1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Two Questions, Two Cases',
        body: 'You know three cases now: the nominative, the accusative and the locative. The two little words u and na can take both of the last two, and the choice is never a guess. Ask yourself one question: is someone going somewhere, or is someone already there? Going takes the accusative, being there takes the locative.',
        icon: '🧭',
      },
      {
        type: 'rule',
        title: 'The Big Two: u and na',
        body: '"u" is in or into, "na" is on, at or onto. Both take the accusative when something is moving towards a place and the locative when nothing is moving. Whether a place uses u or na is partly idiomatic and simply has to be learned with the word: u gradu but na moru, u školi but na fakultetu, u kući but na poslu.',
        highlight: 'u = in · na = on / at',
      },
      {
        type: 'table',
        title: 'Which Places Take Which',
        headers: ['Place', 'Preposition', 'Where? (locative)', 'Where to? (accusative)'],
        rows: [
          ['grad (town)', 'u', 'u gradu', 'u grad'],
          ['škola (school)', 'u', 'u školi', 'u školu'],
          ['kuća (house)', 'u', 'u kući', 'u kuću'],
          ['kino (cinema)', 'u', 'u kinu', 'u kino'],
          ['more (sea, seaside)', 'na', 'na moru', 'na more'],
          ['posao (work)', 'na', 'na poslu', 'na posao'],
          ['tržnica (market)', 'na', 'na tržnici', 'na tržnicu'],
          ['otok (island)', 'na', 'na otoku', 'na otok'],
        ],
      },
      {
        type: 'rule',
        title: 'Kamo? and Gdje?',
        body: 'Croatian has two different words for English "where". Kamo? asks where to — the answer moves, so it takes the accusative: Kamo ideš? — U grad. Gdje? asks where something is — the answer stays put, so it takes the locative: Gdje si? — U gradu. The verb usually tells you too: ići (to go) points to a destination, while biti (to be), živjeti (to live), raditi (to work) and učiti (to study) happen in a place.',
        highlight: 'Kamo ideš? — U grad. · Gdje si? — U gradu.',
      },
      {
        type: 'example',
        title: 'Going and Being',
        items: [
          { hr: 'Idem u grad.', en: 'I am going into town.', note: 'u + accusative: moving' },
          { hr: 'U gradu sam.', en: 'I am in town.', note: 'u + locative: already there' },
          { hr: 'Idemo na more.', en: 'We are going to the seaside.', note: 'na + accusative' },
          {
            hr: 'Ljeti smo na moru.',
            en: 'In summer we are at the seaside.',
            note: 'na + locative',
          },
          {
            hr: 'Djeca idu u školu.',
            en: 'The children are going to school.',
            note: 'u školu: moving',
          },
          { hr: 'Djeca su u školi.', en: 'The children are at school.', note: 'u školi: there' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Marko ide na posao, a Ana je već na poslu.',
            en: 'Marko is going to work, and Ana is already at work.',
            note: 'na posao, then na poslu',
          },
          {
            hr: 'Stavljam knjigu na stol. Knjiga je na stolu.',
            en: 'I put the book on the table. The book is on the table.',
            note: 'na stol: moving · na stolu: lying there',
          },
          {
            hr: 'Večeras idemo u kino.',
            en: 'Tonight we are going to the cinema.',
            note: 'u kino: moving',
          },
          {
            hr: 'Moja sestra radi u uredu.',
            en: 'My sister works in an office.',
            note: 'u uredu: raditi happens in a place',
          },
          {
            hr: 'Idem na tržnicu. Mama je već na tržnici.',
            en: 'I am going to the market. Mum is already at the market.',
            note: 'na tržnicu, then na tržnici',
          },
          {
            hr: 'Živimo u stanu u Splitu.',
            en: 'We live in a flat in Split.',
            note: 'živjeti: a place, so the locative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Kamo ideš? — (to the market)',
        options: ['Na tržnicu.', 'Na tržnici.', 'Na tržnica.', 'U tržnicom.'],
        correct: 0,
        explanation:
          'Kamo asks where to, so the answer moves and takes the accusative: na tržnicu. Na tržnici would answer gdje? — where you already are.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Gdje ste? — (at the seaside)',
        options: ['Na more.', 'Na moru.', 'Na mora.', 'Na morem.'],
        correct: 1,
        explanation:
          'Gdje asks where something is, so the answer takes the locative: na moru. Na more is the answer to kamo? — going to the seaside.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using the locative after a verb of going: "Idem u gradu" — when you are on the way, the place takes the accusative. Second, using the accusative for where you already are: "Ja sam u grad" — being there takes the locative. The pair to remember: Idem u grad. — U gradu sam. Third, swapping u and na: the place decides, so learn it with its word — na posao and na poslu, never "u posao".',
        highlight: 'Idem u grad. — U gradu sam.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Idem ___." (I am going into town.)',
            options: ['u grad', 'u gradu', 'u grada', 'u gradom'],
            correct: 0,
            explanation:
              'Idem means you are on the way, so the place takes the accusative: u grad. U gradu would mean you are already there.',
          },
          {
            q: 'Complete: "Ana je ___." (Ana is at school.)',
            options: ['u školu', 'u škola', 'u školi', 'u školo'],
            correct: 2,
            explanation:
              'Je tells you Ana is already there, so the place takes the locative: u školi. U školu would be going to school.',
          },
          {
            q: 'Which answers "Kamo ideš?" (to work)',
            options: ['Na poslu.', 'Na posao.', 'Na posla.', 'Na poslom.'],
            correct: 1,
            explanation:
              'Kamo asks where to, so the accusative: na posao. Na poslu answers gdje? — where you are.',
          },
          {
            q: 'Which answers "Gdje si?" (on the beach)',
            options: ['Na plažu.', 'Na plaža.', 'Na plažom.', 'Na plaži.'],
            correct: 3,
            explanation:
              'Gdje asks where you are, so the locative: na plaži. Na plažu is the answer to kamo? — going to the beach.',
          },
          {
            q: 'What is wrong with "Idem u kinu."?',
            options: [
              'kinu should be kino — going takes the accusative',
              'u should be na',
              'Nothing is wrong',
              'Idem should be idu',
            ],
            correct: 0,
            explanation:
              'Idem is a verb of going, so the place takes the accusative: Idem u kino. Kinu is the locative, for being at the cinema.',
          },
          {
            q: 'Complete: "Moj brat radi ___." (My brother works in an office.)',
            options: ['u ured', 'u ureda', 'u uredu', 'u uredom'],
            correct: 2,
            explanation: 'Raditi happens in a place, nobody is moving, so the locative: u uredu.',
          },
          {
            q: 'Which word asks "where to"?',
            options: ['Gdje', 'Kamo', 'Tko', 'Kada'],
            correct: 1,
            explanation:
              'Kamo asks where to and is answered with the accusative. Gdje asks where something is and is answered with the locative.',
          },
          {
            q: 'Complete: "Ljeti idemo ___." (In summer we go to the island.)',
            options: ['na otok', 'na otoku', 'na otoka', 'na otokom'],
            correct: 0,
            explanation:
              'Idemo is a verb of going, so the accusative: na otok. Na otoku would mean you are already on the island.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'U and Na — Key Takeaways',
        points: [
          'u = in, into · na = on, at, onto',
          'Kamo? (where to) → accusative: Idem u grad.',
          'Gdje? (where) → locative: U gradu sam.',
          'ići points to a destination; biti, živjeti, raditi, učiti happen in a place',
          'Whether a place takes u or na is idiomatic: u gradu, but na moru and na poslu',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Genitive — Of, From, and Absence
  // ─────────────────────────────────────────────────────────
  {
    id: 'genitive-intro',
    title: 'The Genitive',
    subtitle: 'Belonging, quantity, absence — the busiest case in Croatian',
    icon: '🔗',
    level: 'A1',
    duration: '~7 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'The Case You Have Already Been Using',
        body: 'You have been saying one genitive since the first week without being told: Ja sam iz Zagreba. That -a on Zagreba is this case. It is the most frequently used case in Croatian, and it does four jobs — belonging, quantity, absence, and following a long list of prepositions. Here it is properly.',
        icon: '🔗',
      },
      {
        type: 'rule',
        title: "The English Bridge: the dog's bone",
        body: 'English has one surviving genitive and uses it constantly: the apostrophe-s. "the dog\'s bone", "my sister\'s car", "the end of the film". Croatian has no apostrophe — it changes the ending of the OWNER instead, and puts the owner second. auto moje sestre = my sister\'s car, literally "car of-my-sister". For one named person or one family member Croatian often prefers the possessive adjective you already know — sestrin auto, Markov brat — but the genitive works for every owner.',
        highlight: 'auto moje sestre',
      },
      {
        type: 'rule',
        title: 'Masculine and Neuter Take -a',
        body: "Both take -a in the genitive singular. grad → centar grada (the centre of the city). brat → auto moga brata (my brother's car). more → boja mora (the colour of the sea). pismo → kraj pisma (the end of the letter). If a masculine noun is alive, its genitive looks identical to its accusative — that overlap is normal and causes no confusion in practice.",
        highlight: 'masculine & neuter → -a',
      },
      {
        type: 'rule',
        title: 'Feminine Takes -e',
        body: 'A feminine noun in -a swaps it for -e. sestra → auto moje sestre. kuća → vrata kuće (the door of the house). Hrvatska → iz Hrvatske (from Croatia). škola → blizu škole (near the school). One vowel again, and you have the most common genitive ending in the language.',
        highlight: 'feminine → -e',
      },
      {
        type: 'table',
        title: 'The Genitive Endings',
        headers: ['Gender', 'Subject form', 'Genitive', 'In a phrase'],
        rows: [
          ['Masculine', 'grad', 'grada', 'centar grada'],
          ['Masculine', 'brat', 'brata', 'auto moga brata'],
          ['Feminine', 'sestra', 'sestre', 'knjiga moje sestre'],
          ['Feminine', 'Hrvatska', 'Hrvatske', 'iz Hrvatske'],
          ['Neuter', 'more', 'mora', 'boja mora'],
          ['Neuter', 'selo', 'sela', 'blizu sela'],
        ],
      },
      {
        type: 'rule',
        title: 'Job Two: Quantity',
        body: 'After a word of quantity, the thing measured goes into the genitive. čaša vode (a glass of water). šalica kave (a cup of coffee). malo kruha (a little bread). puno ljudi (a lot of people). This is the same instinct as English "of", and it is why a café order sounds the way it does.',
        highlight: 'šalica kave',
      },
      {
        type: 'rule',
        title: 'Counting Many: the Genitive Plural',
        body: 'Quantities of countable things need the genitive PLURAL, and its basic shapes are few. Most nouns end in -a: kuća → puno kuća, jabuka → kilogram jabuka, selo → puno sela, prijatelj → puno prijatelja. A short masculine noun that takes -ovi in the plural keeps it: gradovi → puno gradova. When the stem ends in two consonants, a helping a slips in between them: student → puno studenata, sestra → puno sestara. A handful take -i instead, and they are worth learning as words: ljudi (people), sati (hours).',
        highlight: 'puno ljudi',
      },
      {
        type: 'rule',
        title: 'Job Three: Absence',
        body: 'When something is not there, it takes the genitive. Nema kruha. (There is no bread.) Nemam novca. (I have no money.) Nema nikoga. (There is nobody.) You met this in the negation lesson as a set of phrases; now you can see why. Absence in Croatian is expressed as a lack OF something, and "of" is the genitive.',
        highlight: 'Nema kruha.',
      },
      {
        type: 'rule',
        title: 'Job Four: After Prepositions',
        body: 'More prepositions take the genitive than take any other case. iz (out of, from), od (from), do (to, until), bez (without), kod (at), poslije (after), prije (before), zbog (because of), plus a whole group of place words you meet in the next lessons. Kava bez šećera. (Coffee without sugar.) Iz Hrvatske sam. (I am from Croatia.) Vidimo se poslije posla.',
        highlight: 'iz · od · do · bez · kod · prije · poslije',
      },
      {
        type: 'example',
        title: 'The Genitive at Work',
        items: [
          {
            hr: 'Ovo je kuća moje bake.',
            en: "This is my grandmother's house.",
            note: 'belonging — the owner goes second and takes -e',
          },
          {
            hr: 'Molim vas, čašu vode.',
            en: 'A glass of water, please.',
            note: 'quantity — voda → vode',
          },
          {
            hr: 'Kavu bez šećera, molim.',
            en: 'Coffee without sugar, please.',
            note: 'bez + genitive',
          },
          {
            hr: 'Moji roditelji su iz Hrvatske.',
            en: 'My parents are from Croatia.',
            note: 'iz + genitive — how you say where you are from',
          },
          {
            hr: 'Nema mlijeka u hladnjaku.',
            en: 'There is no milk in the fridge.',
            note: 'absence + a locative for the place',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ovo je auto moga brata.',
            en: "This is my brother's car.",
            note: 'belonging — brat → brata, owner second',
          },
          {
            hr: 'Kupujem kilogram jabuka i litru mlijeka.',
            en: 'I am buying a kilo of apples and a litre of milk.',
            note: 'quantity — jabuka (plural), mlijeka',
          },
          {
            hr: 'Centar grada je pun turista.',
            en: 'The city centre is full of tourists.',
            note: 'grada — masculine -a; pun + genitive',
          },
          {
            hr: 'Nema mjesta u tramvaju.',
            en: 'There is no room on the tram.',
            note: 'absence — mjesto → mjesta',
          },
          {
            hr: 'Vraćam se poslije posla.',
            en: 'I come back after work.',
            note: 'poslije + genitive: posla',
          },
          {
            hr: 'Iz Rijeke sam, ali živim u Osijeku.',
            en: 'I am from Rijeka, but I live in Osijek.',
            note: 'iz + genitive against u + locative',
          },
          {
            hr: 'Prije ručka pijemo kavu.',
            en: 'Before lunch we drink coffee.',
            note: 'prije + genitive: ručka',
          },
          {
            hr: 'Boja mora je danas tamnoplava.',
            en: 'The colour of the sea is dark blue today.',
            note: 'more → mora: neuter -a',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "a cup of coffee"? ("kava" is feminine.)',
        options: ['šalica kava', 'šalica kavu', 'šalica kave', 'šalica kavi'],
        correct: 2,
        explanation:
          'A quantity word puts what is measured into the genitive, and a feminine noun swaps -a for -e: šalica kave. "Kavu" is the accusative — right for drinking the coffee, wrong for measuring it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence says "I am from Croatia"?',
        options: [
          'Ja sam iz Hrvatska.',
          'Ja sam iz Hrvatsku.',
          'Ja sam iz Hrvatskoj.',
          'Ja sam iz Hrvatske.',
        ],
        correct: 3,
        explanation:
          '"Iz" always takes the genitive, and the genitive of "Hrvatska" is "Hrvatske". The other endings are the subject form, the accusative and the locative — the locative "u Hrvatskoj" is right for living there, not for coming from there.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, putting the owner first, as English does: "moje sestre auto" — Croatian puts the owner second: auto moje sestre. Second, using the accusative after a quantity: "čaša vodu" — what is measured takes the genitive: čaša vode. Third, using the locative after iz: "iz Hrvatskoj" — iz always takes the genitive, iz Hrvatske; u Hrvatskoj is where you live, not where you are from.',
        highlight: 'auto moje sestre',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ovo je kuća ___." (This is my grandmother\'s house — "moja baka".)',
            options: ['moja baka', 'moju baku', 'moje bake', 'mojoj baki'],
            correct: 2,
            explanation:
              'The owner goes second and takes the genitive, and the possessive moves with it: kuća moje bake. "Moju baku" is the accusative and "mojoj baki" another case entirely.',
          },
          {
            q: 'Complete: "Molim vas, šalicu ___." (A cup of tea, please — "čaj" is masculine.)',
            options: ['čaj', 'čaja', 'čaju', 'čajem'],
            correct: 1,
            explanation:
              'After a quantity word the thing measured takes the genitive, and a masculine noun takes -a: šalicu čaja. "Čaj" would be right for ordering the tea itself, not for measuring it.',
          },
          {
            q: 'Which sentence is correct? (There is no sugar.)',
            options: ['Nema šećer.', 'Nema šećera.', 'Nema šećeru.', 'Nije šećera.'],
            correct: 1,
            explanation:
              'Absence takes the genitive: nema šećera. "Šećer" is the subject form, "šećeru" the locative, and "nije" negates being rather than existence.',
          },
          {
            q: 'What is wrong with "Kava bez mlijeko, molim."?',
            options: [
              'bez should be s',
              'kava should be kave',
              'Nothing is wrong',
              'mlijeko should be mlijeka — bez takes the genitive',
            ],
            correct: 3,
            explanation:
              '"Bez" (without) is one of the many prepositions that rule the genitive, and the neuter "mlijeko" takes -a: bez mlijeka. Changing the preposition would change the meaning, and "kave" would make the coffee itself a genitive for no reason.',
          },
          {
            q: 'Which job is the genitive doing in "puno ljudi" (a lot of people)?',
            options: ['belonging', 'quantity', 'absence', 'motion towards'],
            correct: 1,
            explanation:
              '"Puno" is a word of quantity, so what is counted goes into the genitive — the same pattern as čaša vode and šalica kave. Motion towards is the accusative, not the genitive at all.',
          },
          {
            q: 'Complete: "Vidimo se poslije ___." (See you after work — "posao".)',
            options: ['posao', 'poslu', 'posla', 'poslom'],
            correct: 2,
            explanation:
              '"Poslije" takes the genitive, and "posao" becomes posla (the -ao ending contracts). "Poslu" is the locative you know from na poslu, and "poslom" is the instrumental.',
          },
          {
            q: 'Complete: "Moji roditelji su iz ___." (My parents are from Germany — "Njemačka".)',
            options: ['Njemačka', 'Njemačku', 'Njemačkoj', 'Njemačke'],
            correct: 3,
            explanation:
              '"Iz" takes the genitive, and an adjective-shaped country name takes -e there: iz Njemačke. "U Njemačkoj" is the locative for living there, and "Njemačku" is the accusative for going there.',
          },
          {
            q: 'What is the genitive of "grad" (city)?',
            options: ['gradu', 'grada', 'gradom', 'grade'],
            correct: 1,
            explanation:
              'Masculine nouns take -a in the genitive: grad → grada, as in centar grada. "Gradu" is the locative, "gradom" the instrumental, and "grade" is not a genitive form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Genitive — Key Takeaways',
        points: [
          'Croatian\'s answer to English ’s and "of" — the owner goes second',
          'Masculine and neuter take -a; feminine takes -e',
          'Quantity: šalica kave, čaša vode, puno ljudi',
          'Absence: nema kruha, nemam novca',
          'A long list of prepositions demand it: iz, od, do, bez, kod, prije, poslije',
          'It is the most common case in Croatian — time spent here pays off everywhere',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Vocative — Calling Someone
  // ─────────────────────────────────────────────────────────
  {
    id: 'vocative-intro',
    title: 'The Vocative',
    subtitle: 'The case for addressing someone directly',
    icon: '📣',
    level: 'A1',
    duration: '~5 min',
    color: '#e11d48',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'A Case Just for Names',
        body: 'The vocative has one job: it marks the person you are speaking TO. English lost it centuries ago and only kept a fossil or two — "O Lord". Croatian uses it every time anyone calls out a name, which means you will hear it long before you need to produce it.',
        icon: '📣',
      },
      {
        type: 'rule',
        title: 'Why It Matters More Than It Looks',
        body: 'In relaxed speech you will hear people call out a plain "Ivan!", and nobody minds. But the standard form — the one in writing, in polite address and in most mouths — is the vocative: "Ivane!", "gospodine!", "profesore!". Using it is one of the fastest ways to sound like you belong.',
        highlight: 'Ivane!',
      },
      {
        type: 'rule',
        title: 'Masculine: add -e',
        body: 'Most masculine nouns and names add -e. Ivan → Ivane! brat → brate! gospodin → gospodine! profesor → profesore! doktor → doktore! This one ending covers the great majority of what you will need.',
        highlight: 'Ivan → Ivane',
      },
      {
        type: 'rule',
        title: 'After a Soft Consonant, -u',
        body: 'If the noun ends in a soft consonant — č, ć, đ, š, ž, j, lj, nj — it takes -u instead, simply because -e is awkward there. prijatelj → prijatelju! muž → mužu! kralj → kralju! You can hear why: "prijatelje" fights the tongue in a way "prijatelju" does not. A noun in -c is the exception: it takes -e and c becomes č — stric → striče! otac → oče!',
        highlight: 'prijatelj → prijatelju',
      },
      {
        type: 'rule',
        title: 'When k, g and h Change',
        body: 'A final k, g or h softens before the -e, the same way it did in the plural. junak (hero) → junače! Bog → Bože! duh → duše! vojnik → vojniče! If you learned k → c, g → z, h → s for the plural, note that before -e it goes further: k → č, g → ž, h → š.',
        highlight: 'junak → junače',
      },
      {
        type: 'table',
        title: 'The Patterns',
        headers: ['Ending', 'Vocative', 'Example', 'Called as'],
        rows: [
          ['hard consonant', '+ -e', 'Ivan', 'Ivane!'],
          ['soft consonant', '+ -u', 'prijatelj', 'prijatelju!'],
          ['-k / -g / -h', 'softens + -e', 'junak', 'junače!'],
          ['feminine -a', '+ -o', 'žena', 'ženo!'],
          ['feminine -ica', '+ -e', 'učiteljica', 'učiteljice!'],
          ['masculine -o / -e', 'unchanged', 'Marko', 'Marko!'],
        ],
      },
      {
        type: 'rule',
        title: 'Feminine: -o, but Names Usually Stay',
        body: 'A feminine noun in -a takes -o: žena → ženo! majka → majko! gospođa → gospođo! Nouns in -ica take -e instead: učiteljica → učiteljice! sestrica → sestrice! Female first names are the everyday exception: many stay exactly as they are — Marija!, Ivana! — and with others you will hear both, Ana! and Ano!. Both are Croatian; when you are unsure, the name as it is will never sound wrong.',
        highlight: 'Marija! · Ivana!',
      },
      {
        type: 'rule',
        title: 'Some Names Never Change',
        body: 'Masculine names ending in -o or -e are already comfortable to call out and stay as they are: Marko!, Ivo!, Mate!, Hrvoje!. If a name already ends in a vowel, leave it alone. A foreign name ending in a consonant usually behaves like a Croatian one: Peter → Petere!, Tom → Tome!.',
        highlight: 'Marko! Ivo! Mate!',
      },
      {
        type: 'example',
        title: 'Calling and Greeting',
        items: [
          {
            hr: 'Ivane, dođi ovamo!',
            en: 'Ivan, come here!',
            note: 'the everyday vocative',
          },
          {
            hr: 'Dobar dan, gospodine!',
            en: 'Good day, sir!',
            note: 'gospodin → gospodine — polite and standard',
          },
          {
            hr: 'Oprostite, gospođo.',
            en: 'Excuse me, madam.',
            note: 'gospođa → gospođo',
          },
          {
            hr: 'Hvala, prijatelju.',
            en: 'Thank you, my friend.',
            note: 'soft consonant → -u',
          },
          {
            hr: 'Ana, imaš li minutu?',
            en: 'Ana, do you have a minute?',
            note: 'female first names normally stay unchanged',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Marko, gdje si?',
            en: 'Marko, where are you?',
            note: 'names in -o stay unchanged',
          },
          {
            hr: 'Hvala vam, doktore!',
            en: 'Thank you, doctor!',
            note: 'doktor → doktore',
          },
          {
            hr: 'Mama, jesi li kod kuće?',
            en: 'Mum, are you at home?',
            note: 'with mama you hear both mama and mamo',
          },
          {
            hr: 'Bože, kako je vruće!',
            en: 'God, how hot it is!',
            note: 'Bog → Bože: g softens to ž',
          },
          {
            hr: 'Dobro jutro, profesore.',
            en: 'Good morning, professor.',
            note: 'profesor → profesore',
          },
          {
            hr: 'Sretan rođendan, brate!',
            en: 'Happy birthday, brother!',
            note: 'brat → brate',
          },
          {
            hr: 'Gospođo Horvat, izvolite.',
            en: 'Mrs Horvat, here you are.',
            note: 'gospođa → gospođo; surnames stay unchanged',
          },
          {
            hr: 'Luka, dođi na ručak!',
            en: 'Luka, come to lunch!',
            note: 'male names in -a stay as they are',
          },
          {
            hr: 'Hvala ti, Petre, na pomoći.',
            en: 'Thank you for the help, Petar.',
            note: 'Petar → Petre: the a drops before -e',
          },
          {
            hr: 'Gospodine Kovaču, imate li trenutak?',
            en: 'Mr Kovač, do you have a moment?',
            note: 'both change: gospodin → gospodine, Kovač → Kovaču',
          },
          {
            hr: 'Bako, kad je ručak?',
            en: 'Grandma, when is lunch?',
            note: 'baka → bako: feminine -a → -o',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You want to call out to your friend Ivan. What do you say?',
        options: ['Ivano!', 'Ivane!', 'Ivanu!', 'Ivana!'],
        correct: 1,
        explanation:
          'A masculine name ending in a hard consonant takes -e in the vocative: Ivane! "Ivanu" and "Ivana" are other cases, and "Ivano" puts a feminine ending on a man\'s name.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you politely address a man you do not know?',
        options: ['gospodin', 'gospodine', 'gospodinu', 'gospodo'],
        correct: 1,
        explanation:
          '"Gospodin" ends in a hard consonant, so the vocative is "gospodine". "Gospodinu" is the dative and "gospodo" addresses a group of gentlemen rather than one man.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, reaching for another case ending: "Ivanu, dođi!" — that -u belongs to other cases; calling him is Ivane, dođi! Second, adding -e after a soft consonant: "prijatelje" — soft consonants take -u: prijatelju. Third, giving a man\'s name the feminine -o: "Ivano!", "Josipo!" — the -o is for feminine nouns such as gospođo and majko.',
        highlight: 'prijatelju',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___, dođi ovamo!" (Brother, come here! — "brat".)',
            options: ['Brati', 'Brate', 'Bratu', 'Brata'],
            correct: 1,
            explanation:
              '"Brat" ends in a hard consonant, so calling him adds -e: brate! "Bratu" and "brata" are other cases, and "brati" is not a form of this word.',
          },
          {
            q: 'Complete: "Hvala, ___!" (Thank you, Josip!)',
            options: ['Josipi', 'Josipe', 'Josipu', 'Josipo'],
            correct: 1,
            explanation:
              'A masculine name in a hard consonant takes -e: Josipe! "Josipu" is the dative, "Josipi" is not a form of the name, and "Josipo" applies the feminine ending to a male name.',
          },
          {
            q: 'Which sentence is correct? (Calling to your friend Hrvoje.)',
            options: ['Hrvoje, čekaj!', 'Hrvoju, čekaj!', 'Hrvojo, čekaj!', 'Hrvoja, čekaj!'],
            correct: 0,
            explanation:
              'Masculine names already ending in a vowel do not change when called: Hrvoje! Adding -u, -o or -a invents an ending the name does not take.',
          },
          {
            q: 'What is wrong with "Oprostite, gospodinu, gdje je pošta?"',
            options: [
              'oprostite should be oprosti',
              'gdje should be kamo',
              'Nothing is wrong',
              'gospodinu should be gospodine',
            ],
            correct: 3,
            explanation:
              'You are addressing the man directly, so the vocative: gospodine. "Gospodinu" is the dative. "Oprostite" is correctly polite, and "gdje" is right because the post office is not moving.',
          },
          {
            q: 'How do you politely address a woman you do not know?',
            options: ['gospođa', 'gospođo', 'gospođe', 'gospođu'],
            correct: 1,
            explanation:
              'A feminine noun in -a takes -o when you call to it: gospođo. "Gospođe" is the genitive (or a plural) and "gospođu" the accusative — neither addresses anyone.',
          },
          {
            q: 'What happens to "junak" (hero) when you call out to one?',
            options: ['junake', 'junaku', 'junače', 'junaci'],
            correct: 2,
            explanation:
              'A final k softens to č before the vocative -e: junače! "Junake" skips the sound change, "junaku" uses the soft-consonant ending on a hard one, and "junaci" is the plural.',
          },
          {
            q: 'Which of these names stays exactly the same when you call to it?',
            options: ['Ivan', 'Marko', 'Petar', 'Tomislav'],
            correct: 1,
            explanation:
              '"Marko" ends in a vowel, so it is already comfortable to call out and does not change. The other three end in a hard consonant and take -e: Ivane, Petre, Tomislave.',
          },
          {
            q: 'What is the vocative of "prijatelj" (friend)?',
            options: ['prijatelje', 'prijatelju', 'prijateljo', 'prijatelja'],
            correct: 1,
            explanation:
              '"Prijatelj" ends in the soft consonant lj, so it takes -u rather than -e: prijatelju! "Prijatelje" fights the tongue, "prijateljo" is a feminine ending, and "prijatelja" is the accusative or genitive.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Vocative — Key Takeaways',
        points: [
          'The vocative marks the person you are speaking to',
          'Masculine hard consonant + -e: Ivan → Ivane!',
          'Masculine soft consonant + -u: prijatelj → prijatelju!',
          'k, g, h soften before -e: junak → junače!',
          'Feminine -a → -o (ženo!), -ica → -e (učiteljice!)',
          'Many female first names stay unchanged: Marija!, Ivana!',
          'Names already ending in a vowel do not change: Marko!, Ivo!',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Can, Must, Want
  // ─────────────────────────────────────────────────────────
  {
    id: 'modals-basic',
    title: 'Can, Must, Want',
    subtitle: 'moći, morati, htjeti, trebati — and the infinitive that follows',
    icon: '💪',
    level: 'A1',
    duration: '~6 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Four Verbs That Unlock Whole Sentences',
        body: 'Once you can say "I want", "I can", "I have to" and "I need", you can build a sentence around almost any verb you know — including verbs you have not learned to conjugate. That is why these four are worth a lesson of their own: they multiply everything else you have.',
        icon: '💪',
      },
      {
        type: 'rule',
        title: 'The Pattern: modal + infinitive',
        body: 'Conjugate the modal verb for the person, then leave the second verb in its dictionary form — the infinitive, which always ends in -ti or -ći. Želim učiti. (I want to learn.) Moram ići. (I have to go.) Mogu doći. (I can come.) Only the first verb changes, exactly as in English "I must GO", not "I must goes".',
        highlight: 'Moram ići.',
      },
      {
        type: 'table',
        title: 'moći — to be able to',
        headers: ['Person', 'Form', 'Example'],
        rows: [
          ['ja', 'mogu', 'Mogu doći sutra.'],
          ['ti', 'možeš', 'Možeš li ponoviti?'],
          ['on / ona', 'može', 'Ne može doći.'],
          ['mi', 'možemo', 'Možemo krenuti.'],
          ['vi', 'možete', 'Možete sjesti.'],
          ['oni / one', 'mogu', 'Mogu čekati.'],
        ],
      },
      {
        type: 'rule',
        title: 'moći Is Slightly Irregular',
        body: 'Notice that "ja" and "oni" share the same form, "mogu", and that the g becomes ž everywhere in between: mogu, but možeš, može, možemo, možete. It is a regular sound change in Croatian verbs, not a random exception, and you will meet it again. And "Može!" on its own is one of the most useful words in the language: it means "sure", "fine by me", "go ahead".',
        highlight: 'Može!',
      },
      {
        type: 'table',
        title: 'morati, htjeti, trebati',
        headers: ['Person', 'morati (must)', 'htjeti (want)', 'trebati (need)'],
        rows: [
          ['ja', 'moram', 'hoću', 'trebam'],
          ['ti', 'moraš', 'hoćeš', 'trebaš'],
          ['on / ona', 'mora', 'hoće', 'treba'],
          ['mi', 'moramo', 'hoćemo', 'trebamo'],
          ['vi', 'morate', 'hoćete', 'trebate'],
          ['oni / one', 'moraju', 'hoće', 'trebaju'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Ways to Want',
        body: '"Htjeti" (hoću) and "željeti" (želim) both mean to want. "Hoću" is direct and everyday; "želim" is a little softer and more polite. Its negative is the fused "neću" you already know. For a polite request, add molim (please): Molim Vas kavu. (A coffee, please.) Želim kavu, molim. "Hoću kavu" on its own is grammatical but sounds blunt.',
        highlight: 'Molim Vas kavu.',
      },
      {
        type: 'rule',
        title: 'Trebati Has a Second Life',
        body: '"Trebam" plus an infinitive means "I need to". Trebam ići. But "trebati" also takes a plain object for a thing you need, exactly like imati: Trebam pomoć. (I need help.) Trebamo kartu. (We need a ticket.) Trebam taksi. (I need a taxi.)',
        highlight: 'Trebam pomoć.',
      },
      {
        type: 'example',
        title: 'Everyday Modal Sentences',
        items: [
          {
            hr: 'Moram ići, kasnim.',
            en: 'I have to go, I am late.',
            note: 'moram + infinitive',
          },
          {
            hr: 'Možete li ponoviti?',
            en: 'Could you repeat that?',
            note: 'V-form request — polite to a stranger',
          },
          {
            hr: 'Ne mogu doći večeras.',
            en: 'I cannot come tonight.',
            note: 'ne stays separate: ne mogu',
          },
          {
            hr: 'Želim rezervirati stol.',
            en: 'I want to book a table.',
            note: 'želim — a little softer than hoću',
          },
          {
            hr: 'Trebam naučiti hrvatski.',
            en: 'I need to learn Croatian.',
            note: 'trebam + infinitive',
          },
          {
            hr: 'Znaš li plivati?',
            en: 'Can you swim?',
            note: 'znati + infinitive = know HOW to',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Želim naučiti kuhati.',
            en: 'I want to learn to cook.',
            note: 'želim + infinitive (two of them here)',
          },
          {
            hr: 'Moramo kupiti kruh.',
            en: 'We have to buy bread.',
            note: 'moramo + infinitive; kruh is the object',
          },
          {
            hr: 'Možeš li doći sutra?',
            en: 'Can you come tomorrow?',
            note: 'možeš li — the question form',
          },
          {
            hr: 'Ne mogu naći ključ.',
            en: 'I cannot find the key.',
            note: 'ne stays separate from mogu',
          },
          {
            hr: 'Trebamo kartu.',
            en: 'We need a ticket.',
            note: 'trebati + a plain object',
          },
          {
            hr: 'Djeca moraju učiti.',
            en: 'Children have to study.',
            note: 'moraju — the oni form',
          },
          {
            hr: 'Mogu li platiti, molim?',
            en: 'Can I pay, please?',
            note: 'mogu li — a polite request with molim',
          },
          {
            hr: 'Molim Vas jednu kavu i jedan čaj.',
            en: 'One coffee and one tea, please.',
            note: 'the polite way to order: molim Vas + what you want',
          },
          {
            hr: 'Znam voziti, ali danas ne mogu.',
            en: 'I know how to drive, but today I cannot.',
            note: 'znati = a skill; moći = able right now',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Moći or Znati?',
        body: 'English uses "can" for both ability and permission, so both come out as "can swim" and "can go". Croatian splits them. "Znati" is a skill you learned: Znam plivati. (I can swim — I know how.) "Moći" is being able to right now: Danas ne mogu plivati, umoran sam. (I cannot swim today, I am tired.) Choosing the wrong one is understandable but noticeable.',
        highlight: 'Znam plivati. / Mogu plivati.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I have to go"?',
        options: ['Moram idem.', 'Moram ići.', 'Moram ide.', 'Moram idemo.'],
        correct: 1,
        explanation:
          'A modal verb is followed by the infinitive, the dictionary form ending in -ti or -ći: moram ići. Conjugating the second verb as well ("moram idem") is the most common learner error here.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You learned to swim as a child. How do you say "I can swim"?',
        options: ['Mogu plivati.', 'Znam plivati.', 'Moram plivati.', 'Hoću plivati.'],
        correct: 1,
        explanation:
          'For a skill you have acquired, Croatian uses "znati": Znam plivati. "Mogu plivati" is also correct Croatian, but it means you are able to swim right now — in this pool, today.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, conjugating both verbs: "moram idem", "želim učim" — only the modal changes, and the second verb stays in the infinitive: moram ići, želim učiti. Second, using moći for a learned skill: "Mogu plivati" answers whether you are able to right now; a skill you have is Znam plivati. Third, ordering with a bare "hoću": Hoću kavu is grammatical but blunt — the polite form is Molim Vas kavu, or Želim kavu, molim.',
        highlight: 'moram ići',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Želim ___ hrvatski." (I want to learn Croatian.)',
            options: ['učim', 'učiti', 'uči', 'učite'],
            correct: 1,
            explanation:
              'After a modal the second verb stays in the infinitive: želim učiti. "Učim", "uči" and "učite" conjugate it a second time.',
          },
          {
            q: 'Complete: "Oni ___ raditi u subotu." (They have to work on Saturday.)',
            options: ['mora', 'moram', 'moraju', 'morate'],
            correct: 2,
            explanation:
              '"Oni" is the third person plural, so the modal is moraju. "Mora" is he or she, "moram" is I, and "morate" is you (plural or polite).',
          },
          {
            q: 'Which sentence is correct? (Could you repeat that? — politely.)',
            options: [
              'Možete li ponoviti?',
              'Možete li ponovite?',
              'Možete ponovite li?',
              'Možeš li ponovite?',
            ],
            correct: 0,
            explanation:
              'The polite V-form is možete, "li" follows it directly, and the second verb is the infinitive ponoviti. Conjugating "ponovite" or moving "li" breaks the pattern, and "možeš" is not polite to a stranger.',
          },
          {
            q: 'What is wrong with "Ne znam doći sutra, radim." (I cannot come tomorrow, I am working.)',
            options: [
              'doći should be dođem',
              'radim should be raditi',
              'Nothing is wrong',
              'znam should be mogu — this is about being able, not a skill',
            ],
            correct: 3,
            explanation:
              'Coming tomorrow is not a learned skill, so "znati" is the wrong verb — it is about ability in the circumstances: Ne mogu doći sutra. The infinitive "doći" and the separate "radim" are already right.',
          },
          {
            q: 'What does "Može!" mean on its own?',
            options: [
              'It is possible that he comes.',
              'Sure, fine by me.',
              'He must.',
              'I need it.',
            ],
            correct: 1,
            explanation:
              '"Može!" is the everyday way to say "sure" or "go ahead" — an agreement, not a statement about someone else. It is one of the most useful single words in the language.',
          },
          {
            q: 'Complete: "___ pomoć." (I need help.)',
            options: ['Trebam', 'Trebaš', 'Trebamo', 'Trebati'],
            correct: 0,
            explanation:
              '"Trebati" can take a plain object, and the first person is trebam: Trebam pomoć. "Trebaš" is you, "trebamo" is we, and the bare infinitive cannot stand as the main verb.',
          },
          {
            q: 'You are ordering a coffee in a café. Which is the polite way?',
            options: ['Hoću kavu.', 'Kava.', 'Molim Vas kavu.', 'Kavu hoću.'],
            correct: 2,
            explanation:
              'Molim Vas kavu — "please" plus the V-form is the polite way to order. A bare hoću, either way round, is grammatical but blunt, and "Kava." just names the drink.',
          },
          {
            q: 'Which form of "moći" goes with "ja"?',
            options: ['možem', 'mogu', 'može', 'možu'],
            correct: 1,
            explanation:
              '"Moći" is slightly irregular: the "ja" form is mogu, which "oni" shares. "Možem" and "možu" apply the regular pattern to a verb that does not follow it, and "može" is he or she.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Modals — Key Takeaways',
        points: [
          'Modal + infinitive: only the first verb changes (Moram ići.)',
          'moći: mogu, možeš, može, možemo, možete, mogu — and Može! means "sure"',
          'morati: moram… · htjeti: hoću… (negative neću) · trebati: trebam…',
          'For polite requests: Molim Vas kavu. / Želim kavu, molim.',
          'znati + infinitive = know how to; moći = able to right now',
          'Trebam pomoć — trebati also takes a plain object',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Giving Instructions
  // ─────────────────────────────────────────────────────────
  {
    id: 'imperative-basic',
    title: 'Giving Instructions',
    subtitle: 'The imperative — asking, telling, and asking politely',
    icon: '☝️',
    level: 'A1',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'How to Ask For Things',
        body: 'The imperative is the form you use to tell someone to do something — sit down, come here, pass me the salt. It sounds abrupt described that way, but in practice it is how every polite request, every recipe and every set of directions is built. You will need it the first time you ask anyone for anything.',
        icon: '☝️',
      },
      {
        type: 'rule',
        title: 'Build It From the "Oni" Form',
        body: 'Take the "oni" (they) form of the present, drop the final vowel (-u or -e), and you have the stem. Then add -i for one person, -imo for "let us", -ite for a group or for politeness. pišu → piš- → piši! pišimo! pišite! govore → govor- → govori! govorimo! govorite! It is one rule and it covers most verbs.',
        highlight: 'piši! · pišimo! · pišite!',
      },
      {
        type: 'rule',
        title: 'Vowel + -ju Takes -j',
        body: 'If the "oni" form ends in a vowel plus -ju — -aju, -iju, -uju — take off the -u, and the imperative ends in -j rather than -i. čitaju → čitaj! (read!) gledaju → gledaj! (look!) daju → daj! (give!) piju → pij! (drink!) kupuju → kupuj! (buy!) čuju → čuj! (listen!) The plural forms follow: čitajmo!, čitajte!, pijte!. "Daj" and "dajte" are worth learning right now — they are how you ask for anything to be passed to you.',
        highlight: 'čitaj! · daj! · gledaj!',
      },
      {
        type: 'table',
        title: 'Three Forms, One Stem',
        headers: ['Verb', 'you (one)', 'let us', 'you (plural / polite)'],
        rows: [
          ['čitati (read)', 'čitaj!', 'čitajmo!', 'čitajte!'],
          ['govoriti (speak)', 'govori!', 'govorimo!', 'govorite!'],
          ['pisati (write)', 'piši!', 'pišimo!', 'pišite!'],
          ['doći (come)', 'dođi!', 'dođimo!', 'dođite!'],
          ['ići (go)', 'idi!', 'idimo!', 'idite!'],
          ['biti (be)', 'budi!', 'budimo!', 'budite!'],
        ],
      },
      {
        type: 'rule',
        title: 'The -ite Form Is the Polite One',
        body: 'The plural form does double duty: it addresses a group, and it addresses one person you are being formal with — exactly like the V-form you met in greetings. To a friend: Sjedni! To a stranger, a customer, an older person: Sjednite! Getting this right matters more than the grammar itself, because using the singular with a stranger sounds curt.',
        highlight: 'Sjedni! → Sjednite!',
      },
      {
        type: 'rule',
        title: 'Saying "Do Not": nemoj',
        body: 'The safest way to forbid something is "nemoj" plus the infinitive: nemoj (one person), nemojmo (let us not), nemojte (plural or polite). Nemoj ići! (Do not go!) Nemojte se brinuti. (Do not worry.) Nemoj zaboraviti. (Do not forget.) One word to learn, and it works with every verb in the language. You will also hear "ne" + the imperative for bans and warnings (Ne brini! Ne zaboravi!) — also correct.',
        highlight: 'Nemoj ići!',
      },
      {
        type: 'rule',
        title: 'The Words That Soften Everything',
        body: 'A bare imperative can sound sharp, and Croatian softens it the same way English does. "Molim" (please) and "molim te" / "molim vas" turn an order into a request. "Izvoli" / "izvolite" means "here you are" or "go ahead". "Oprosti" / "oprostite" means "sorry" or "excuse me" and is how you open a request to a stranger. Attach one of these and the imperative becomes ordinary politeness.',
        highlight: 'molim vas · izvolite · oprostite',
      },
      {
        type: 'example',
        title: 'Requests You Will Use',
        items: [
          {
            hr: 'Oprostite, možete li mi pomoći?',
            en: 'Excuse me, could you help me?',
            note: 'the safest way to open with a stranger',
          },
          {
            hr: 'Daj mi vode, molim te.',
            en: 'Pass me some water, please.',
            note: 'daj + molim te, to a friend',
          },
          {
            hr: 'Dođite sutra ujutro.',
            en: 'Come tomorrow morning.',
            note: 'polite plural form',
          },
          {
            hr: 'Nemojte se brinuti.',
            en: 'Do not worry.',
            note: 'nemojte + infinitive',
          },
          {
            hr: 'Izvolite, sjednite.',
            en: 'Please, take a seat.',
            note: 'two polite forms together',
          },
          {
            hr: 'Idi ravno pa skreni lijevo.',
            en: 'Go straight on, then turn left.',
            note: 'directions are pure imperative',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Čitaj polako, molim te.',
            en: 'Read slowly, please.',
            note: 'čitaju → čitaj: the -aju verbs take -j',
          },
          {
            hr: 'Pišite jasno, molim vas.',
            en: 'Write clearly, please.',
            note: 'pišu → pišite: the polite form',
          },
          {
            hr: 'Dođi na kavu u pet.',
            en: 'Come for coffee at five.',
            note: 'doći → dođi, to a friend',
          },
          {
            hr: 'Krenimo, kasno je.',
            en: "Let's go, it is late.",
            note: '-imo = let us',
          },
          {
            hr: 'Nemoj kasniti!',
            en: "Don't be late!",
            note: 'nemoj + infinitive',
          },
          {
            hr: 'Nemojte zaboraviti kartu.',
            en: "Don't forget the ticket.",
            note: 'nemojte — plural or polite',
          },
          {
            hr: 'Pričekajte trenutak, molim vas.',
            en: 'Please wait a moment.',
            note: '-ite softened with molim vas',
          },
          {
            hr: 'Budi tih, dijete spava.',
            en: 'Be quiet, the child is sleeping.',
            note: 'biti → budi',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are asking a stranger to sit down. Which is right?',
        options: ['Sjedni!', 'Sjednite!', 'Sjediš!', 'Nemoj sjesti!'],
        correct: 1,
        explanation:
          'The -ite form is used for a group and for one person you address formally, so a stranger gets "Sjednite!". "Sjedni!" is for a friend, "sjediš" is a statement rather than a request, and "nemoj sjesti" tells them not to.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "Do not forget!" to a friend?',
        options: ['Nemoj zaboraviš!', 'Nemoj zaboraviti!', 'Ne zaboraviti!', 'Nemoj zaboravi!'],
        correct: 1,
        explanation:
          '"Nemoj" takes the infinitive: Nemoj zaboraviti! Not the present (zaboraviš) or the imperative (zaboravi). "Ne zaboravi!" also works, as a friendly reminder.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, conjugating the verb after nemoj: "Nemoj zaboraviš" — nemoj takes the infinitive: Nemoj zaboraviti. Second, using the singular with a stranger: "Sjedni" to a customer or an older person sounds curt — the polite form is Sjednite. Third, using a present-tense statement as a request: "Daš mi vode" tells someone what they do; asking them is the imperative, Daj mi vode.',
        highlight: 'Nemoj zaboraviti',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ mi sol, molim te." (Pass me the salt, please — to a friend.)',
            options: ['Daj', 'Daš', 'Dati', 'Dajte'],
            correct: 0,
            explanation:
              '"Daju" ends in -aju, so the imperative is daj. "Daš" is a statement, "dati" the infinitive, and "dajte" the polite form — which clashes with the friendly "molim te".',
          },
          {
            q: 'Complete: "___ ravno, gospodine." (Go straight on, sir.)',
            options: ['Idi', 'Idite', 'Ideš', 'Ići'],
            correct: 1,
            explanation:
              'A stranger addressed as "gospodine" gets the polite -ite form: Idite ravno. "Idi" is for a friend, "ideš" is a statement and "ići" the infinitive.',
          },
          {
            q: 'Which sentence is correct? (Do not worry — said politely.)',
            options: [
              'Nemojte se brinete.',
              'Ne brinuti se.',
              'Nemojte se brinuti.',
              'Nemoj se brinuti, gospodine.',
            ],
            correct: 2,
            explanation:
              '"Nemojte" plus the infinitive: Nemojte se brinuti. Conjugating "brinete" after nemojte is wrong, a bare infinitive is not a request, and the singular "nemoj" does not match a polite "gospodine".',
          },
          {
            q: 'What is wrong with "Nemoj kasniš!"?',
            options: [
              'nemoj should be ne',
              'nemoj should be nemojte',
              'Nothing is wrong',
              'kasniš should be kasniti — nemoj takes the infinitive',
            ],
            correct: 3,
            explanation:
              '"Nemoj" is always followed by the infinitive: Nemoj kasniti! "Ne kasniš" would be a statement that you are not late, and switching to "nemojte" only changes who you are talking to.',
          },
          {
            q: 'What does "Izvolite" mean?',
            options: ['Sorry', 'Here you are / go ahead', 'Thank you', 'Goodbye'],
            correct: 1,
            explanation:
              '"Izvolite" is the polite "here you are" or "go ahead" — a waiter says it to open, a host says it handing you something. Sorry is oprostite, and thank you is hvala.',
          },
          {
            q: 'Complete: "___ hrvatski!" (Let\'s speak Croatian!)',
            options: ['Govorite', 'Govori', 'Govorimo', 'Govoriti'],
            correct: 2,
            explanation:
              '"Let us" is the -imo form: govorimo! "Govorite" tells a group to speak, "govori" tells one person, and "govoriti" is the infinitive.',
          },
          {
            q: 'What is the imperative of "pisati" (to write) for one person?',
            options: ['pisaj', 'piši', 'pišite', 'piše'],
            correct: 1,
            explanation:
              'The "oni" form is pišu; drop the -u and add -i: piši! "Pisaj" builds from the infinitive instead of the stem, "pišite" is the plural or polite form, and "piše" is a statement.',
          },
          {
            q: 'Which phrase softens a request to a stranger?',
            options: ['molim te', 'molim vas', 'daj', 'hoću'],
            correct: 1,
            explanation:
              '"Molim vas" is the polite "please" that goes with the V-form. "Molim te" is for a friend, "daj" is itself a bare imperative, and "hoću" is a blunt "I want".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Imperative — Key Takeaways',
        points: [
          'Take the "oni" form, drop the final -u/-e, add -i / -imo / -ite',
          'Verbs whose "oni" form ends in -aju take -j: čitaj!, daj!',
          'The -ite form is both plural and polite: Sjednite!',
          'Negative instructions use nemoj / nemojmo / nemojte + infinitive',
          'molim (te / vas), izvolite and oprostite soften any request',
          'Directions are pure imperative: Idi ravno pa skreni lijevo.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Reflexive Verbs and Daily Routine
  // ─────────────────────────────────────────────────────────
  {
    id: 'reflexive-verbs',
    title: 'Verbs With "Se"',
    subtitle: 'Reflexive verbs, your daily routine, and where "se" sits',
    icon: '🔁',
    level: 'A1',
    duration: '~6 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'You Already Know One',
        body: 'The very first thing you learned to say was "Kako se zoveš?" — and that little "se" is a whole verb class. A large family of Croatian verbs carries "se", some because the action comes back to the doer, many simply because that is the verb. Learning where "se" goes is most of the work.',
        icon: '🔁',
      },
      {
        type: 'rule',
        title: 'What "Se" Does',
        body: 'In its clearest use, "se" means the action returns to the doer: tuširam se (I shower myself), oblačim se (I dress myself). But many verbs carry "se" with no reflexive meaning at all — smijati se (to laugh), bojati se (to be afraid), sjećati se (to remember), dogoditi se (to happen). Treat "se" as part of the verb and learn it with the word, the way you learn a noun with its gender.',
        highlight: 'zvati se · tuširati se · smijati se',
      },
      {
        type: 'rule',
        title: 'Where "Se" Goes: Second Position',
        body: 'This is the part worth real attention. "Se" is a clitic — a word too small to stand alone — and Croatian clitics take the SECOND position in the sentence, not a position next to their verb. Zovem se Ana. Kako se zoveš? Ja se zovem Ana. In each one, "se" is the second element, whatever comes first. Put it at the very start and the sentence stops being Croatian.',
        highlight: 'Kako se zoveš?',
      },
      {
        type: 'table',
        title: 'Second Position in Action',
        headers: ['Sentence', 'First element', 'Where se sits'],
        rows: [
          ['Zovem se Ana.', 'Zovem', 'right after the verb'],
          ['Ja se zovem Ana.', 'Ja', 'right after the pronoun'],
          ['Kako se zoveš?', 'Kako', 'right after the question word'],
          ['Danas se odmaram.', 'Danas', 'right after the time word'],
          ['Ne osjećam se dobro.', 'Ne osjećam', 'after the negated verb'],
        ],
      },
      {
        type: 'rule',
        title: 'Conjugate the Verb, Never the "Se"',
        body: '"Se" never changes — not for person, not for number, not for tense. Only the verb moves. zovem se, zoveš se, zove se, zovemo se, zovete se, zovu se. That makes reflexive verbs no harder to conjugate than any other; the only new thing is placement.',
        highlight: 'se never changes',
      },
      {
        type: 'example',
        title: 'A Day in Croatian',
        items: [
          {
            hr: 'Budim se u sedam.',
            en: 'I wake up at seven.',
            note: 'buditi se — to wake up',
          },
          {
            hr: 'Tuširam se i oblačim se.',
            en: 'I shower and get dressed.',
            note: 'two reflexives in a row',
          },
          {
            hr: 'Vraćam se kući oko šest.',
            en: 'I get back home around six.',
            note: 'vraćati se — to return',
          },
          {
            hr: 'Navečer se odmaram.',
            en: 'In the evening I rest.',
            note: 'navečer comes first, so se follows it',
          },
          {
            hr: 'Ne osjećam se dobro danas.',
            en: 'I do not feel well today.',
            note: 'osjećati se — to feel',
          },
        ],
      },
      {
        type: 'example',
        title: 'Common Verbs That Carry "Se"',
        items: [
          { hr: 'zvati se', en: 'to be called', note: 'Kako se zoveš?' },
          { hr: 'veseliti se', en: 'to look forward to', note: 'Veselim se vikendu.' },
          { hr: 'bojati se', en: 'to be afraid', note: 'Ne bojim se.' },
          { hr: 'smijati se', en: 'to laugh', note: 'Zašto se smiješ?' },
          { hr: 'nalaziti se', en: 'to be located', note: 'Gdje se nalazi kolodvor?' },
          { hr: 'dogoditi se', en: 'to happen', note: 'Što se dogodilo?' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Moj otac se zove Ivan.',
            en: 'My father is called Ivan.',
            note: 'se follows the first phrase, moj otac',
          },
          {
            hr: 'Kad se budiš u subotu?',
            en: 'When do you wake up on Saturday?',
            note: 'kad opens, so se comes second',
          },
          {
            hr: 'Ona se često smije.',
            en: 'She often laughs.',
            note: 'smijati se — se is part of the verb',
          },
          {
            hr: 'Veselimo se ljetu na otoku.',
            en: 'We are looking forward to the summer on the island.',
            note: 'veseliti se + dative: ljeto → ljetu',
          },
          {
            hr: 'Kolodvor se nalazi u centru.',
            en: 'The station is in the centre.',
            note: 'nalaziti se — to be located',
          },
          {
            hr: 'Djeca se igraju u dvorištu.',
            en: 'The children are playing in the yard.',
            note: 'igrati se — to play',
          },
          {
            hr: 'Ovdje se govori hrvatski.',
            en: 'Croatian is spoken here.',
            note: 'impersonal se',
          },
          {
            hr: 'Vidimo se sutra!',
            en: 'See you tomorrow!',
            note: 'vidjeti se — literally "we see each other"',
          },
          {
            hr: 'Kako se to piše?',
            en: 'How is that spelled?',
            note: 'impersonal se after kako',
          },
        ],
      },
      {
        type: 'rule',
        title: 'It Also Means "One" or "People"',
        body: 'A third use, and a very common one on signs and in instructions: "se" makes a sentence impersonal, the way English uses "you" or "one". Kako se to kaže na hrvatskom? (How do you say that in Croatian?) Ovdje se ne puši. (No smoking here — literally "here one does not smoke".) Gdje se kupuju karte? (Where does one buy tickets?) You will read this form constantly.',
        highlight: 'Ovdje se ne puši.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is correct?',
        options: ['Se zovem Ana.', 'Zovem se Ana.', 'Zovem Ana se.', 'Zovem sebe Ana.'],
        correct: 1,
        explanation:
          '"Se" takes the second position, so it follows the first element of the sentence: Zovem se Ana. It can never open a sentence, which rules out the first option outright.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Kako ___ kaže na hrvatskom?" (How do you say it in Croatian?)',
        options: ['se', 'si', 'sam', 'su'],
        correct: 0,
        explanation:
          'This is the impersonal "se" — "how does one say" — and it sits in second position after the question word "kako". The other options are forms of "biti" and do not belong here.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, putting se first: "Se zovem Ana" — a clitic can never open a sentence: Zovem se Ana. Second, gluing se to the verb when something else comes first: "Kako zoveš se?" — se goes to second position, so it is Kako se zoveš? Third, changing se for the person on the model of English myself / yourself, inventing forms like "zovem me" and "zoveš te" — se is the same for everyone: zovem se, zoveš se.',
        highlight: 'Zovem se Ana',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Kako ___ zove tvoj brat?" (What is your brother called?)',
            options: ['se', 'si', 'je', 'sam'],
            correct: 0,
            explanation:
              '"Zvati se" carries se, and se sits in second position after "kako". The other options are forms of "biti", which has no place in this sentence.',
          },
          {
            q: 'Complete: "Ujutro ___ tuširam." (In the morning I shower.)',
            options: ['me', 'sam', 'se', 'si'],
            correct: 2,
            explanation:
              '"Tuširati se" keeps se for every person — it never becomes "me" for I. "Ujutro" opens the sentence, so se comes right after it.',
          },
          {
            q: 'Which sentence is correct? (I feel well.)',
            options: [
              'Se osjećam dobro.',
              'Osjećam se dobro.',
              'Osjećam dobro se.',
              'Dobro osjećam se.',
            ],
            correct: 1,
            explanation:
              'Se takes second position, immediately after whatever opens the sentence: Osjećam se dobro. It cannot come first, and it cannot trail at the end.',
          },
          {
            q: 'What is wrong with "Zašto smiješ se?"',
            options: [
              'smiješ should be smijem',
              'se should be si',
              'Nothing is wrong',
              'se should come right after zašto: Zašto se smiješ?',
            ],
            correct: 3,
            explanation:
              'When a question word opens the sentence, se follows it, not the verb: Zašto se smiješ? The verb form is right for "you", and se never changes to "si".',
          },
          {
            q: 'What does "Ovdje se ne puši." mean?',
            options: [
              'I do not smoke here.',
              'No smoking here.',
              'He does not smoke here.',
              'Do not smoke!',
            ],
            correct: 1,
            explanation:
              'This is the impersonal se — "here one does not smoke" — the wording you read on signs. Nobody in particular is the subject, which is exactly what the impersonal form does.',
          },
          {
            q: 'Complete: "Djeca ___ u parku." (The children are playing in the park.)',
            options: ['igraju se', 'se igraju', 'igra se', 'igrate se'],
            correct: 1,
            explanation:
              '"Djeca" opens the sentence, so se comes immediately after it and then the plural verb: Djeca se igraju. Putting se after the verb pushes it out of second position, and "igra" / "igrate" are the wrong persons.',
          },
          {
            q: 'What is "se" doing in "Kako se to kaže?" (How do you say that?)',
            options: [
              'reflexive — the thing says itself',
              'impersonal — how does one say it',
              'it marks the past tense',
              'it makes the question polite',
            ],
            correct: 1,
            explanation:
              'This is the impersonal use: "how is that said", with no particular subject. Se has nothing to do with tense or politeness.',
          },
          {
            q: 'Complete: "Mi ___ vraćamo kući u šest." (We get back home at six.)',
            options: ['se', 'nas', 'si', 'smo'],
            correct: 0,
            explanation:
              '"Vraćati se" keeps se for "we" as for everyone else, and it sits after "mi". "Nas" is the English "ourselves" instinct, and "smo" is a form of biti.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Verbs With Se — Key Takeaways',
        points: [
          '"Se" is part of the verb — learn it together with the word',
          'It never changes: zovem se, zoveš se, zove se…',
          'It takes SECOND position, after whatever opens the sentence',
          'Daily routine runs on these: budim se, tuširam se, vraćam se',
          'Impersonal "se" = English "one" or "you": Ovdje se ne puši.',
          'Gdje se nalazi…? is how you ask where something is',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Likes and Preferences
  // ─────────────────────────────────────────────────────────
  {
    id: 'likes-preferences',
    title: 'Likes and Preferences',
    subtitle: 'voljeti, sviđati se, and the sentence that turns inside out',
    icon: '❤️',
    level: 'A1',
    duration: '~6 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Two Ways to Like Something',
        body: 'Croatian has two words for liking, and they are not interchangeable. One behaves exactly as English does. The other flips the sentence around so that the thing you like becomes the subject — which feels strange for about a week and then becomes automatic.',
        icon: '❤️',
      },
      {
        type: 'rule',
        title: 'Voljeti — the Easy One',
        body: '"Voljeti" works like English "to love" or "to like a lot", and the thing you love is a plain object in the accusative. Volim kavu. (I love coffee.) Volim Zagreb. Volim more. Conjugation: volim, voliš, voli, volimo, volite, vole. If you can say "pijem kavu", you can already say "volim kavu".',
        highlight: 'Volim kavu.',
      },
      {
        type: 'rule',
        title: 'Sviđati Se — the One That Flips',
        body: 'This is the everyday word for liking something, and its logic is the reverse of English. The THING is the subject and does the pleasing; YOU are on the receiving end. Sviđa mi se Zagreb literally says "Zagreb is pleasing to me". So the verb agrees with the thing, not with you: Sviđa mi se film (one thing, sviđa) but Sviđaju mi se filmovi (several things, sviđaju).',
        highlight: 'Sviđa mi se Zagreb.',
      },
      {
        type: 'rule',
        title: 'The English Bridge: "it appeals to me"',
        body: 'English has this pattern too, just less often. "It appeals to me." "That suits me." "It seems fine to me." In every one, the thing is the subject and the person is the receiver — which is exactly how "sviđati se" works. If you build your sentence around "appeals to me" rather than "I like", the Croatian falls out correctly.',
        highlight: 'Zagreb appeals to me',
      },
      {
        type: 'table',
        title: 'The Little Word for "To Me"',
        headers: ['Person', 'Form', 'Example'],
        rows: [
          ['to me', 'mi', 'Sviđa mi se.'],
          ['to you', 'ti', 'Sviđa ti se?'],
          ['to him', 'mu', 'Sviđa mu se.'],
          ['to her', 'joj', 'Sviđa joj se.'],
          ['to us', 'nam', 'Sviđa nam se.'],
          ['to you (plural)', 'vam', 'Sviđa vam se?'],
          ['to them', 'im', 'Sviđa im se.'],
        ],
      },
      {
        type: 'rule',
        title: 'One or Many Changes the Verb',
        body: 'Because the thing liked is the subject, the verb counts the THING and not the person. Sviđa mi se ova pjesma. (I like this song — one song.) Sviđaju mi se ove pjesme. (I like these songs — several.) English speakers reliably say "sviđa mi se" for everything at first; noticing the plural is what makes it sound native.',
        highlight: 'Sviđa / Sviđaju',
      },
      {
        type: 'example',
        title: 'Saying What You Like',
        items: [
          {
            hr: 'Sviđa mi se ovaj grad.',
            en: 'I like this city.',
            note: 'one thing → sviđa',
          },
          {
            hr: 'Sviđaju mi se hrvatske pjesme.',
            en: 'I like Croatian songs.',
            note: 'several things → sviđaju',
          },
          {
            hr: 'Sviđa li ti se more?',
            en: 'Do you like the sea?',
            note: 'li makes it a question; ti = to you',
          },
          {
            hr: 'Volim kavu, ali ne volim čaj.',
            en: 'I love coffee, but I do not like tea.',
            note: 'voljeti takes a plain object',
          },
          {
            hr: 'Više volim more nego planine.',
            en: 'I prefer the sea to the mountains.',
            note: 'više volim = I prefer',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sviđa mi se tvoj auto.',
            en: 'I like your car.',
            note: 'one thing → sviđa',
          },
          {
            hr: 'Sviđaju joj se ove cipele.',
            en: 'She likes these shoes.',
            note: 'joj = to her; cipele is plural → sviđaju',
          },
          {
            hr: 'Sviđa nam se ovaj restoran.',
            en: 'We like this restaurant.',
            note: 'nam = to us',
          },
          {
            hr: 'Voliš li sport?',
            en: 'Do you like sport?',
            note: 'voljeti + a plain object',
          },
          {
            hr: 'Moja baka voli more.',
            en: 'My grandmother loves the sea.',
            note: 'voli — third person',
          },
          {
            hr: 'Više volim kavu nego čaj.',
            en: 'I prefer coffee to tea.',
            note: 'nego joins the two things compared',
          },
          {
            hr: 'Ne volim zimu, prehladno je.',
            en: 'I do not like winter, it is too cold.',
            note: 'zima → zimu in the accusative',
          },
          {
            hr: 'Sviđa li vam se Hrvatska?',
            en: 'Do you like Croatia?',
            note: 'vam — polite; li makes the question',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Preferring, and Not Liking',
        body: '"Više volim" is how you say you prefer something: Više volim čaj. (I prefer tea.) To compare two things, join them with "nego": Više volim čaj nego kavu. For dislike, "ne volim" is the ordinary negative, and "mrzim" means to hate — strong, and used more freely than English "hate", though still not something to say about a person you have just met.',
        highlight: 'Više volim čaj nego kavu.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I like this song"? ("pjesma" is one song.)',
        options: [
          'Sviđam ovu pjesmu.',
          'Sviđa mi se ova pjesma.',
          'Sviđaju mi se ova pjesma.',
          'Sviđa me ova pjesma.',
        ],
        correct: 1,
        explanation:
          'The thing liked is the subject, so it stays in its subject form ("ova pjesma") and the verb is singular to match it. You appear as "mi" — to me. Making yourself the subject is the reflex English gives you, and it is the one to unlearn.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ mi se hrvatski filmovi." (I like Croatian films.)',
        options: ['Sviđa', 'Sviđaju', 'Sviđam', 'Volim'],
        correct: 1,
        explanation:
          '"Filmovi" is plural and it is the subject of the sentence, so the verb must be plural too: sviđaju. "Volim hrvatske filmove" would also be correct Croatian, but it uses the other verb and the other sentence pattern entirely.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, making yourself the subject of sviđati se: "Sviđam ovaj film" — the film is the subject and you are mi: Sviđa mi se ovaj film. Second, ignoring the plural: "Sviđa mi se filmovi" — several things need sviđaju: Sviđaju mi se filmovi. Third, using the accusative after sviđati se: "Sviđa mi se ovu pjesmu" — the thing liked is the subject and stays in its dictionary form: ova pjesma.',
        highlight: 'Sviđa mi se ovaj film',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ mi se Dubrovnik." (I like Dubrovnik.)',
            options: ['Sviđa', 'Sviđaju', 'Sviđam', 'Sviđaš'],
            correct: 0,
            explanation:
              'Dubrovnik is one thing and it is the subject, so the verb is singular: sviđa. "Sviđaju" is for several things, and "sviđam" / "sviđaš" make a person the subject, which this verb does not do.',
          },
          {
            q: 'Complete: "Sviđaju ___ se hrvatske pjesme." (She likes Croatian songs.)',
            options: ['mu', 'joj', 'ju', 'nju'],
            correct: 1,
            explanation:
              '"To her" is the little word joj. "Mu" is to him, and "ju" / "nju" are object forms meaning "her", not "to her".',
          },
          {
            q: 'Which sentence is correct? (We like this house.)',
            options: [
              'Sviđamo se ova kuća.',
              'Sviđa nam se ovu kuću.',
              'Sviđa nam se ova kuća.',
              'Sviđaju nam se ova kuća.',
            ],
            correct: 2,
            explanation:
              'The house is the subject, so it stays "ova kuća" and the verb is singular; we appear as nam. "Sviđamo" makes us the subject, "ovu kuću" is an accusative the pattern never uses, and "sviđaju" is plural for one house.',
          },
          {
            q: 'What is wrong with "Volim kava i čaj."?',
            options: [
              'volim should be sviđa',
              'i should be nego',
              'Nothing is wrong',
              'kava should be kavu — voljeti takes the accusative',
            ],
            correct: 3,
            explanation:
              '"Voljeti" works like English: the thing loved is a plain object, so the feminine "kava" takes -u: Volim kavu i čaj. "Čaj" is masculine and not alive, so it is already right.',
          },
          {
            q: 'What does "Više volim more nego planine." mean?',
            options: [
              'I love the sea and the mountains.',
              'I prefer the sea to the mountains.',
              'I like the mountains more than the sea.',
              'I do not like the sea.',
            ],
            correct: 1,
            explanation:
              '"Više volim X nego Y" is "I prefer X to Y". The thing before nego is the one preferred — here, the sea.',
          },
          {
            q: 'Complete: "Voli li tvoj brat ___?" (Does your brother like football? — "nogomet".)',
            options: ['nogomet', 'nogometa', 'nogometu', 'nogometom'],
            correct: 0,
            explanation:
              '"Voljeti" takes the accusative, and "nogomet" is masculine and not alive, so it does not change: Voli li tvoj brat nogomet? The other forms belong to other cases.',
          },
          {
            q: 'Which little word means "to us"?',
            options: ['mi', 'nam', 'vam', 'im'],
            correct: 1,
            explanation:
              '"Nam" is to us: Sviđa nam se. "Mi" is to me, "vam" to you (plural or polite) and "im" to them.',
          },
          {
            q: 'Complete: "Sviđaju ___ ovi gradovi." (They like these cities.)',
            options: ['ih se', 'im se', 'se im', 'mu se'],
            correct: 1,
            explanation:
              '"To them" is im, and it comes before se in the cluster: Sviđaju im se. "Ih" is the object form "them", the order "se im" is wrong, and "mu" is to him.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Likes — Key Takeaways',
        points: [
          'voljeti behaves like English: Volim kavu — plain object',
          'sviđati se flips it: the thing is the subject, you are "mi"',
          'Think "it appeals to me", not "I like it"',
          'The verb counts the thing: Sviđa mi se film / Sviđaju mi se filmovi',
          'mi, ti, mu, joj, nam, vam, im — the little word for the person',
          'Više volim X nego Y = I prefer X to Y',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Family and People
  // ─────────────────────────────────────────────────────────
  {
    id: 'family-people',
    title: 'Family and People',
    subtitle: 'Talking about the people closest to you',
    icon: '👨‍👩‍👧',
    level: 'A1',
    duration: '~6 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'The First Thing Anyone Asks',
        body: 'Family is where most conversations in Croatian go within about three minutes, and for anyone with Croatian roots it is usually the reason for learning in the first place. This lesson gives you the words, and puts them straight to work with the possessives you already know.',
        icon: '👨‍👩‍👧',
      },
      {
        type: 'table',
        title: 'The Immediate Family',
        headers: ['Croatian', 'English', 'Gender'],
        rows: [
          ['obitelj', 'family', 'feminine'],
          ['majka / mama', 'mother / mum', 'feminine'],
          ['otac / tata', 'father / dad', 'masculine'],
          ['roditelji', 'parents', 'masculine plural'],
          ['sin', 'son', 'masculine'],
          ['kći / kćer', 'daughter (kćerka is colloquial)', 'feminine'],
          ['brat', 'brother', 'masculine'],
          ['sestra', 'sister', 'feminine'],
          ['dijete / djeca', 'child / children', 'neuter / plural'],
        ],
      },
      {
        type: 'rule',
        title: 'Mama and Tata Are Not Childish',
        body: 'Unlike English, where an adult saying "mummy" raises eyebrows, Croatian adults use "mama" and "tata" as the normal everyday words for their parents. "Majka" and "otac" are more formal and turn up in writing, in official contexts and when speaking about someone else\'s parents. Use mama and tata about your own.',
        highlight: 'mama · tata',
      },
      {
        type: 'table',
        title: 'The Wider Family',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['baka', 'grandmother', 'also nona in Dalmatia and Istria'],
          ['djed', 'grandfather', 'also nono on the coast'],
          ['unuk / unuka', 'grandson / granddaughter', ''],
          ['stric', 'uncle', "father's brother"],
          ['ujak', 'uncle', "mother's brother"],
          ['teta / tetka', 'aunt', 'either side'],
          ['bratić / sestrična', 'cousin (male / female)', ''],
          ['muž / žena', 'husband / wife', 'suprug / supruga is more formal'],
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Names the Side of the Family',
        body: 'English has one word for uncle. Croatian has two, and they are not interchangeable: "stric" is your father\'s brother, "ujak" your mother\'s. This is not a nicety — a relative will notice if you get it wrong, because the word itself says which side of the family you mean. For aunts the everyday word "teta" covers both sides.',
        highlight: 'stric = father’s side · ujak = mother’s side',
      },
      {
        type: 'rule',
        title: 'Three Plurals to Watch',
        body: 'The family words include several of the irregular plurals from the plural lesson. brat → braća (brothers). dijete → djeca (children). čovjek → ljudi (people). "Braća" and "djeca" look singular and feminine but refer to a group, and they take a plural verb: Moja braća su ovdje. Moja djeca su tamo.',
        highlight: 'braća · djeca · ljudi',
      },
      {
        type: 'example',
        title: 'Introducing Your Family',
        items: [
          {
            hr: 'Ovo je moja obitelj.',
            en: 'This is my family.',
            note: 'obitelj is feminine → moja',
          },
          {
            hr: 'To je moj brat, a to su moje sestre.',
            en: 'That is my brother, and those are my sisters.',
            note: 'moj brat, moje sestre — the possessive follows the relative',
          },
          {
            hr: 'Moji roditelji su iz Splita.',
            en: 'My parents are from Split.',
            note: 'roditelji is plural masculine → moji',
          },
          {
            hr: 'Moja baka je iz Dalmacije.',
            en: 'My grandmother is from Dalmatia.',
            note: 'iz Dalmacije — a whole phrase, as in the countries lesson',
          },
          {
            hr: 'Kako se zove tvoj brat?',
            en: 'What is your brother called?',
            note: 'zvati se — and se in second position',
          },
          {
            hr: 'Djed je Hrvat, a baka je Talijanka.',
            en: 'Grandpa is Croatian, and grandma is Italian.',
            note: 'family words with nationality words',
          },
        ],
      },
      {
        type: 'example',
        title: 'Questions About Family',
        items: [
          {
            hr: 'Je li to tvoj brat? — Ne, to je moj bratić.',
            en: 'Is that your brother? — No, that is my cousin.',
            note: 'bratić — a male cousin',
          },
          {
            hr: 'Kako se zove tvoja sestra?',
            en: 'What is your sister called?',
            note: 'sestra is feminine → tvoja',
          },
          {
            hr: 'Jesi li oženjen? / Jesi li udana?',
            en: 'Are you married?',
            note: 'oženjen of a man, udana of a woman',
          },
          {
            hr: 'Odakle je tvoja obitelj?',
            en: 'Where is your family from?',
            note: 'the question every diaspora learner gets',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Moj stric je iz Zadra.',
            en: 'My uncle is from Zadar.',
            note: "stric — father's brother",
          },
          {
            hr: 'Ujak i ujna su ovdje.',
            en: 'My uncle and aunt are here.',
            note: "ujak — mother's brother; ujna is his wife",
          },
          {
            hr: 'Ovo su baka i djed, a ovo su njihovi unuci.',
            en: 'These are grandma and grandpa, and these are their grandchildren.',
            note: 'unuk → unuci: k softens to c before -i',
          },
          {
            hr: 'Moja kći je studentica.',
            en: 'My daughter is a student.',
            note: 'kći — feminine, so moja',
          },
          {
            hr: 'Njegova žena je učiteljica.',
            en: 'His wife is a teacher.',
            note: 'žena also means wife',
          },
          {
            hr: 'Naša djeca su Kanađani.',
            en: 'Our children are Canadian.',
            note: 'djeca + a plural verb',
          },
          {
            hr: 'Moja sestrična je iz Australije.',
            en: 'My cousin is from Australia.',
            note: 'sestrična — a female cousin',
          },
          {
            hr: 'Tata je liječnik, a mama je profesorica.',
            en: 'Dad is a doctor and mum is a teacher.',
            note: 'mama and tata — normal adult words',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Your mother’s brother is visiting. What do you call him?',
        options: ['stric', 'ujak', 'tetak', 'djed'],
        correct: 1,
        explanation:
          'Croatian names the side of the family: "ujak" is your mother’s brother and "stric" your father’s. "Tetak" is an aunt’s husband and "djed" is a grandfather.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "my sisters"? ("sestra" is feminine.)',
        options: ['moj sestre', 'moja sestre', 'moje sestre', 'moji sestre'],
        correct: 2,
        explanation:
          'A feminine plural takes -e on both the possessive and the noun: moje sestre. "Moja" is feminine singular and "moji" is masculine plural.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using one word for uncle: "moj stric" for your mother\'s brother — the word itself names the side: ujak on your mother\'s side, stric on your father\'s. Second, treating braća and djeca as singular because they end in -a: "Moja braća je" — they take a plural verb: Moja braća su ovdje. Third, matching the possessive to yourself: "moja brat" — it agrees with the relative: moj brat, moja sestra.',
        highlight: 'Moja braća su ovdje',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Your father’s brother is your…',
            options: ['ujak', 'stric', 'tetak', 'djed'],
            correct: 1,
            explanation:
              'Your father\'s brother is stric; ujak is your mother\'s brother. "Tetak" is an aunt\'s husband and "djed" a grandfather.',
          },
          {
            q: 'Which word means "daughter"?',
            options: ['kći', 'sin', 'unuka', 'sestra'],
            correct: 0,
            explanation:
              'Kći (also kćer) is a daughter. "Sin" is a son, "unuka" a granddaughter and "sestra" a sister.',
          },
          {
            q: 'Which sentence is correct? (My children are here.)',
            options: [
              'Moja djeca su ovdje.',
              'Moje djeca su ovdje.',
              'Moja djeca je ovdje.',
              'Moji djeca su ovdje.',
            ],
            correct: 0,
            explanation:
              '"Djeca" takes the -a form of the possessive (moja) and a plural verb (su). "Moje" and "moji" are the wrong endings, and "je" is singular.',
          },
          {
            q: 'What is wrong with "Moja braća je tamo."?',
            options: [
              'braća should be brati',
              'moja should be moji',
              'Nothing is wrong',
              'je should be su — braća takes a plural verb',
            ],
            correct: 3,
            explanation:
              '"Braća" looks singular but means brothers, and it takes a plural verb: Moja braća su tamo. The possessive "moja" is correct, and "brati" is not a Croatian plural.',
          },
          {
            q: 'Which words do adults use for their own parents in everyday speech?',
            options: ['majka i otac', 'mama i tata', 'gospođa i gospodin', 'baka i djed'],
            correct: 1,
            explanation:
              'Unlike English, "mama" and "tata" are the normal adult words. "Majka" and "otac" are formal or written, and "baka i djed" are grandparents.',
          },
          {
            q: 'What is the plural of "dijete" (child)?',
            options: ['dijeti', 'djeca', 'djetevi', 'dijetovi'],
            correct: 1,
            explanation:
              '"Dijete" has an irregular plural: djeca, which takes a plural verb (Djeca su ovdje). The other three apply regular patterns it does not follow.',
          },
          {
            q: 'What is the plural of "brat"?',
            options: ['brati', 'bratovi', 'braća', 'bratevi'],
            correct: 2,
            explanation:
              '"Brat" has an irregular plural: braća. The other three apply regular patterns it does not follow.',
          },
          {
            q: '"Jesi li udana?" is a question you ask…',
            options: ['a man', 'a woman', 'a child', 'anyone at all'],
            correct: 1,
            explanation:
              '"Udana" is the word for a married woman; a married man is oženjen, so you would ask him "Jesi li oženjen?".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Family — Key Takeaways',
        points: [
          'obitelj, majka/mama, otac/tata, brat, sestra, sin, kći',
          'Adults say mama and tata — they are not childish words',
          'stric is your father’s brother, ujak your mother’s',
          'braća, djeca and ljudi are irregular plurals that take plural verbs',
          'Kako se zove tvoj brat? — how to ask about a relative',
          'Possessives agree with the relative, not with you: moj brat, moja sestra',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Countries, Nationalities and Languages
  // ─────────────────────────────────────────────────────────
  {
    id: 'countries-languages',
    title: 'Where You Are From',
    subtitle: 'Countries, nationalities and languages',
    icon: '🌍',
    level: 'A1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Odakle si?',
        body: '"Where are you from?" is the second question anyone asks, and for a heritage learner it is rarely a simple one. This lesson gives you the country, the nationality and the language — three different words in Croatian where English often reuses one — plus a way to answer that covers a complicated family history.',
        icon: '🌍',
      },
      {
        type: 'rule',
        title: 'Three Words, Not One',
        body: 'English says "I am English, from England, and I speak English" using one word three times. Croatian uses three different words, and they follow a pattern: the country is a noun, the nationality is a noun that changes for male and female, and the language is a lower-case word ending in -ski (sometimes -čki or -ški: njemački). Engleska, Englez / Engleskinja, engleski.',
        highlight: 'Engleska · Englez · engleski',
      },
      {
        type: 'table',
        title: 'Country, Person, Language',
        headers: ['Country', 'Man', 'Woman', 'Language'],
        rows: [
          ['Hrvatska', 'Hrvat', 'Hrvatica', 'hrvatski'],
          ['Engleska', 'Englez', 'Engleskinja', 'engleski'],
          ['Njemačka', 'Nijemac', 'Njemica', 'njemački'],
          ['Italija', 'Talijan', 'Talijanka', 'talijanski'],
          ['Amerika', 'Amerikanac', 'Amerikanka', 'engleski'],
          ['Kanada', 'Kanađanin', 'Kanađanka', 'engleski / francuski'],
          ['Australija', 'Australac', 'Australka', 'engleski'],
        ],
      },
      {
        type: 'rule',
        title: 'Languages Are Lower Case',
        body: 'Croatian capitalises the country and the nationality but NOT the language: Hrvatska, Hrvat, but hrvatski. The same goes for adjectives made from place names — hrvatska glazba (Croatian music), zagrebačke ulice (Zagreb streets). English capitalises all of them, so this is a habit worth breaking early if you plan to write anything.',
        highlight: 'Hrvat, but hrvatski',
      },
      {
        type: 'rule',
        title: 'A Phrase to Learn Whole: Ja sam iz…',
        body: 'To say where you are from, Croatian says "Ja sam iz…" — I am from… — and the place name after iz changes its ending: Hrvatska becomes Hrvatske, Zagreb becomes Zagreba. You will learn why in a later lesson. For now, do not try to build it: learn the phrase for YOUR country and YOUR city as one block, the way you learned "Kako se zoveš?". Ja sam iz Hrvatske. Ja sam iz Kanade. Ja sam iz Zagreba.',
        highlight: 'Ja sam iz Hrvatske.',
      },
      {
        type: 'example',
        title: 'Answering the Question',
        items: [
          {
            hr: 'Odakle si? — Ja sam iz Kanade.',
            en: 'Where are you from? — I am from Canada.',
            note: 'a whole phrase, learned as one block',
          },
          {
            hr: 'Ja sam Hrvatica, a ona je Australka.',
            en: 'I am Croatian, and she is Australian.',
            note: 'a woman speaking: Hrvatica',
          },
          {
            hr: 'Djed i baka su iz Dalmacije.',
            en: 'Grandpa and grandma are from Dalmatia.',
            note: 'the diaspora answer — the region, not just the country',
          },
          {
            hr: 'Hrvatski je jezik, a Hrvatska je zemlja.',
            en: 'Croatian is a language, and Croatia is a country.',
            note: 'the language is lower case, the country is not',
          },
          {
            hr: 'Ja sam Kanađanin, a ona je Kanađanka.',
            en: 'I am Canadian (a man), and she is Canadian (a woman).',
            note: 'one country, a word for a man and a word for a woman',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Tata je Hrvat, a mama je Talijanka.',
            en: 'Dad is Croatian and mum is Italian.',
            note: 'male and female nationality forms',
          },
          {
            hr: 'On je Nijemac, a ona je Njemica.',
            en: 'He is German, and she is German.',
            note: 'Nijemac for a man, Njemica for a woman',
          },
          {
            hr: 'Je li on Englez? — Ne, on je Amerikanac.',
            en: 'Is he English? — No, he is American.',
            note: 'nationality words for men',
          },
          {
            hr: 'Talijanski je jezik, a Italija je zemlja.',
            en: 'Italian is a language, and Italy is a country.',
            note: 'languages are lower case',
          },
          {
            hr: 'Jesi li ti Hrvat? — Jesam.',
            en: 'Are you Croatian? — I am.',
            note: 'the short answer from the biti lesson',
          },
          {
            hr: 'Jeste li vi Kanađanin?',
            en: 'Are you Canadian?',
            note: 'to a man, politely',
          },
          {
            hr: 'Odakle ste? — Iz Australije.',
            en: 'Where are you from? — From Australia.',
            note: 'the polite form of the question',
          },
          {
            hr: 'Ona je Amerikanka, a on je Englez.',
            en: 'She is American, and he is English.',
            note: 'Amerikanka — the word for a woman',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Talking About Croatian Regions',
        body: 'For anyone with family roots here, the region often matters more than the country. Dalmacija (the coast and islands), Slavonija (the eastern plains), Istra (the peninsula in the north-west), Zagorje (the hills north of Zagreb), Lika, Kvarner, Podravina. Saying "Ja sam iz Slavonije" tells a Croatian far more than "Ja sam iz Hrvatske" — and it is almost always the follow-up question. Learn the phrase for your own family’s region as one block.',
        highlight: 'Ja sam iz Dalmacije.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How does a woman say "I am Croatian"?',
        options: ['Ja sam Hrvat.', 'Ja sam Hrvatica.', 'Ja sam hrvatski.', 'Ja sam Hrvatska.'],
        correct: 1,
        explanation:
          'The nationality has separate male and female forms: Hrvat for a man, Hrvatica for a woman. "Hrvatski" is the language and "Hrvatska" is the country.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A man from Italy introduces himself. Which is right?',
        options: ['Ja sam Talijanka.', 'Ja sam Talijan.', 'Ja sam Italija.', 'Ja sam talijanski.'],
        correct: 1,
        explanation:
          'An Italian man is Talijan. "Talijanka" is a woman, "Italija" the country and "talijanski" the language.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using the country or the language for the person: "Ja sam Hrvatska", "Ja sam hrvatski" — the person is Hrvat or Hrvatica. Second, capitalising the language as English does: "Govorim Hrvatski" — languages are lower case: hrvatski. Third, giving a woman the word for a man: "Ona je Nijemac" — a German woman is Njemica.',
        highlight: 'Hrvat or Hrvatica',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Moj muž je ___." (My husband is German.)',
            options: ['Njemačka', 'Nijemac', 'njemački', 'Njemica'],
            correct: 1,
            explanation:
              'A German man is Nijemac. "Njemačka" is the country, "njemački" the language, and "Njemica" a German woman.',
          },
          {
            q: 'Complete: "Ona je ___." (She is Canadian.)',
            options: ['Kanađanin', 'Kanada', 'Kanađanka', 'kanadski'],
            correct: 2,
            explanation:
              'A Canadian woman is Kanađanka. "Kanađanin" is a man, "Kanada" the country, and "kanadski" the word for things Canadian.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Jezik je Hrvatski.',
              'Jezik je hrvatski.',
              'Jezik je Hrvat.',
              'Jezik je Hrvatica.',
            ],
            correct: 1,
            explanation:
              'Languages are lower-case words in -ski: hrvatski. Capitals belong to the country and the person, and "Hrvat" and "Hrvatica" name people rather than a language.',
          },
          {
            q: 'What is wrong with "Ana je Talijan."?',
            options: [
              'Ana should be Ane',
              'je should be su',
              'Nothing is wrong',
              'Talijan should be Talijanka — Ana is a woman',
            ],
            correct: 3,
            explanation:
              'Ana is a woman, so she is Talijanka. "Talijan" is the word for an Italian man; "Ana je" is already correct.',
          },
          {
            q: 'A woman from Australia introduces herself. Which is right?',
            options: [
              'Ja sam Australac.',
              'Ja sam Australka.',
              'Ja sam Australija.',
              'Ja sam australski.',
            ],
            correct: 1,
            explanation:
              'The nationality has a female form: Australka. "Australac" is a man, "Australija" is the country, and "australski" is the word for things Australian.',
          },
          {
            q: 'Which word is the COUNTRY?',
            options: ['Nijemac', 'njemački', 'Njemica', 'Njemačka'],
            correct: 3,
            explanation:
              'Njemačka is the country (Germany). Nijemac and Njemica are a German man and woman, and njemački is the language.',
          },
          {
            q: 'Which word is the language of Italy?',
            options: ['Talijan', 'Italija', 'talijanski', 'Talijanka'],
            correct: 2,
            explanation:
              'The language is the lower-case word in -ski: talijanski. "Talijan" and "Talijanka" are an Italian man and woman, and "Italija" is the country.',
          },
          {
            q: '"Odakle si?" asks…',
            options: [
              'where you live',
              'where you are from',
              'where you are going',
              'what you speak',
            ],
            correct: 1,
            explanation:
              '"Odakle" means "from where", so the answer is the phrase "Ja sam iz…": Ja sam iz Kanade. Where you live is a different question.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Where You Are From — Key Takeaways',
        points: [
          'Country, nationality and language are three different words',
          'Nationality has male and female forms: Hrvat / Hrvatica',
          'Languages are lower case and usually end in -ski: hrvatski, engleski',
          'Learn "Ja sam iz …" for your own country and city as one whole phrase',
          'Naming the region says far more than naming the country',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Food, Drink and Ordering
  // ─────────────────────────────────────────────────────────
  {
    id: 'food-drink',
    title: 'Food, Drink and Ordering',
    subtitle: 'In a café and at the table — with the accusative doing the work',
    icon: '☕',
    level: 'A1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Your First Real Conversation',
        body: 'Ordering in a café is where most learners have their first exchange with a stranger that actually works. It is also a perfect test of what you have learned: what you order is the object of the sentence, so it takes the accusative, and one polite word — molim — does the rest.',
        icon: '☕',
      },
      {
        type: 'table',
        title: 'Drinks',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['kava', 'coffee', 'the centre of Croatian social life'],
          ['čaj', 'tea', 'masculine'],
          ['voda', 'water', 'gazirana / negazirana — sparkling / still'],
          ['sok', 'juice', 'masculine'],
          ['mlijeko', 'milk', 'neuter'],
          ['pivo', 'beer', 'neuter'],
          ['vino', 'wine', 'crno / bijelo — red / white'],
          ['rakija', 'fruit brandy', 'expect to be offered some'],
        ],
      },
      {
        type: 'table',
        title: 'Food',
        headers: ['Croatian', 'English', 'Gender'],
        rows: [
          ['kruh', 'bread', 'masculine'],
          ['sir', 'cheese', 'masculine'],
          ['meso', 'meat', 'neuter'],
          ['riba', 'fish', 'feminine'],
          ['juha', 'soup', 'feminine'],
          ['salata', 'salad', 'feminine'],
          ['voće / povrće', 'fruit / vegetables', 'both neuter, both collective'],
          ['kolač', 'cake', 'masculine'],
          ['sladoled', 'ice cream', 'masculine'],
        ],
      },
      {
        type: 'rule',
        title: 'What You Eat Is an Object',
        body: 'Everything you eat, drink or order goes into the accusative. Jedem kruh. (masculine, not alive — unchanged.) Pijem kavu. (feminine — kava becomes kavu.) Jedem meso. (neuter — unchanged.) Uzimam juhu. (feminine — juha becomes juhu.) Only the feminine words change, which makes a menu much less frightening than it looks.',
        highlight: 'Pijem kavu. Jedem kruh.',
      },
      {
        type: 'rule',
        title: 'Ordering Politely',
        body: 'The blunt way is "Hoću kavu" — correct, but it sounds abrupt from a stranger. The natural ways are the thing plus "molim": "Kavu, molim." or "Molim Vas kavu." (to a waiter, with a capital V for one person you address formally). You will also hear "Želim kavu." (I want a coffee) — learn želim as a phrase for now; its verb family comes in a later lesson. To a friend it is "molim te".',
        highlight: 'Molim Vas kavu.',
      },
      {
        type: 'example',
        title: 'A Café Exchange',
        items: [
          { hr: 'Izvolite?', en: 'What can I get you?', note: 'how a waiter opens' },
          {
            hr: 'Molim Vas jednu kavu.',
            en: 'One coffee, please.',
            note: 'kava → kavu: what you order',
          },
          {
            hr: 'Za mene čaj, molim.',
            en: 'Tea for me, please.',
            note: 'čaj is masculine and not alive — unchanged',
          },
          { hr: 'Imate li juhu?', en: 'Do you have soup?', note: 'juha → juhu' },
          {
            hr: 'Želim ribu i salatu.',
            en: 'I would like fish and salad.',
            note: 'both feminine → -u',
          },
          { hr: 'Račun, molim.', en: 'The bill, please.', note: 'two words that end every visit' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          { hr: 'Jedete li ribu?', en: 'Do you eat fish?', note: 'riba → ribu; V-form' },
          {
            hr: 'Za doručak jedem kruh i sir.',
            en: 'For breakfast I eat bread and cheese.',
            note: 'masculine, not alive — unchanged',
          },
          {
            hr: 'Pijemo crno vino.',
            en: 'We are drinking red wine.',
            note: 'neuter vino — unchanged',
          },
          {
            hr: 'Moja sestra pije čaj, a ja pijem kavu.',
            en: 'My sister drinks tea, and I drink coffee.',
            note: 'only the feminine noun changes',
          },
          {
            hr: 'Djeca jedu sladoled.',
            en: 'The children are eating ice cream.',
            note: 'sladoled — unchanged',
          },
          {
            hr: 'Hvala, ne jedem meso.',
            en: 'Thank you, I do not eat meat.',
            note: 'ne goes right before the verb',
          },
          {
            hr: 'Voda je hladna, a kava je vruća.',
            en: 'The water is cold, and the coffee is hot.',
            note: 'subjects — the dictionary form',
          },
          {
            hr: 'Molim te sol. — Izvoli!',
            en: 'The salt, please. — Here you are!',
            note: 'molim te to a friend; izvoli is the friendly izvolite',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Coffee Is Not a Drink, It Is an Appointment',
        body: 'When a Croatian says "Idemo na kavu", the coffee is beside the point — it means an hour or two of sitting and talking. Turning down an invitation to kava reads as turning down the company. "Idemo na kavu?" is one of the most useful sentences you can learn, and "Može!" is the answer.',
        highlight: 'Idemo na kavu?',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you order a coffee? ("kava" is feminine.)',
        options: ['Molim Vas kava.', 'Molim Vas kavu.', 'Molim Vas kavom.', 'Molim Vas kavi.'],
        correct: 1,
        explanation:
          'What you order is an object, so the feminine "kava" takes the accusative ending -u: kavu.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you ask for the bill?',
        options: ['Račun je.', 'Imam račun.', 'Račun, molim.', 'Račun, hvala?'],
        correct: 2,
        explanation:
          '"Račun, molim." — the thing you want plus molim. "Imam račun" means you already have it.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, ordering with the dictionary form: "Molim Vas kava", "Jednu kava" — what you order takes the accusative: Molim Vas kavu. Second, changing a word that does not change: "Pijem pivu" — pivo is neuter and stays as it is: Pijem pivo. Third, the wrong "please" for the person: molim Vas to a waiter, molim te to a friend.',
        highlight: 'Molim Vas kavu.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Molim Vas ___." (soup — "juha")',
            options: ['juha', 'juhu', 'juhom', 'juhi'],
            correct: 1,
            explanation: 'What you order is an object, so the feminine "juha" takes -u: juhu.',
          },
          {
            q: 'Complete: "Za mene ___, molim." (tea — "čaj")',
            options: ['čaju', 'čajem', 'čaj', 'čajevi'],
            correct: 2,
            explanation:
              '"Čaj" is masculine and not alive, so it stays as it is in the accusative.',
          },
          {
            q: 'Which sentence says "I drink beer"?',
            options: ['Pijem pivu.', 'Pijem pivi.', 'Pijem pivom.', 'Pijem pivo.'],
            correct: 3,
            explanation:
              '"Pivo" is neuter, and a neuter noun looks the same in the accusative: Pijem pivo.',
          },
          {
            q: 'What is wrong with "Molim Vas salata."?',
            options: [
              'salata should be salatu — what you order takes the accusative',
              'Vas should be vi',
              'molim should be molite',
              'Nothing is wrong',
            ],
            correct: 0,
            explanation:
              'The salad is what you are asking for, so feminine salata becomes salatu: Molim Vas salatu.',
          },
          {
            q: 'What is "Idemo na kavu?" really?',
            options: [
              'an order for coffee',
              'a question about the price',
              'an invitation to sit and talk',
              'a request for the bill',
            ],
            correct: 2,
            explanation:
              '"Going for a coffee" in Croatia means an hour or two of company — the coffee is beside the point. "Može!" is the answer.',
          },
          {
            q: 'How does a waiter usually open?',
            options: ['Izvolite?', 'Račun?', 'Može?', 'Hvala?'],
            correct: 0,
            explanation:
              '"Izvolite?" is the waiter\'s "what can I get you?". "Račun" is what you ask for at the end, and "može" and "hvala" are answers, not openings.',
          },
          {
            q: 'Complete: "Jedete li ___?" (fish — "riba")',
            options: ['ribom', 'ribi', 'riba', 'ribu'],
            correct: 3,
            explanation: 'The fish is what you eat — the object — so riba becomes ribu.',
          },
          {
            q: 'You are ordering from a waiter. Which is the polite one?',
            options: ['Kavu, molim.', 'Kava, molim.', 'Kavom, molim.', 'Kavi, molim.'],
            correct: 0,
            explanation: 'The thing you want, in the accusative, plus molim: Kavu, molim.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Food and Drink — Key Takeaways',
        points: [
          'What you eat or order is accusative: Pijem kavu. Jedem kruh.',
          'Only feminine nouns change: kava → kavu, juha → juhu',
          'Order with the thing plus molim: Kavu, molim. · Molim Vas kavu.',
          'Račun, molim — the bill, please',
          'Izvolite? is the waiter opening; Može! is a cheerful yes',
          'Idemo na kavu? is an invitation to company, not to caffeine',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Shopping and Prices
  // ─────────────────────────────────────────────────────────
  {
    id: 'shopping-prices',
    title: 'Shopping and Prices',
    subtitle: 'Asking what things cost, and numbers past a hundred',
    icon: '🛒',
    level: 'A1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Numbers You Can Spend',
        body: 'You can count to a hundred. Shopping needs bigger numbers, a handful of shop words and two questions: Koliko košta? and Imate li…? Prices you will read as figures for now — saying "ten euros" aloud changes the ending of euro, and that pattern comes later in the course, together with the case it uses.',
        icon: '🛒',
      },
      {
        type: 'table',
        title: 'The Bigger Numbers',
        headers: ['Number', 'Croatian', 'Number', 'Croatian'],
        rows: [
          ['20', 'dvadeset', '100', 'sto'],
          ['30', 'trideset', '200', 'dvjesto'],
          ['40', 'četrdeset', '300', 'tristo'],
          ['50', 'pedeset', '500', 'petsto'],
          ['60', 'šezdeset', '1000', 'tisuća'],
          ['70', 'sedamdeset', '2000', 'dvije tisuće'],
          ['80', 'osamdeset', '', ''],
          ['90', 'devedeset', '', ''],
        ],
      },
      {
        type: 'rule',
        title: 'Building Numbers Is Just Addition',
        body: 'Croatian builds compound numbers by writing the parts in order, with no extra words. 21 = dvadeset jedan. 35 = trideset pet. 148 = sto četrdeset osam. 2026 = dvije tisuće dvadeset šest. There is nothing to memorise beyond the tens and hundreds you already have. A thousand is "tisuća"; two thousand is "dvije tisuće", because tisuća is feminine.',
        highlight: 'sto četrdeset osam',
      },
      {
        type: 'rule',
        title: 'Money in Croatia',
        body: 'Croatia uses the euro: the euro and the cent. On price tags and receipts you read figures, and Croatians write a decimal COMMA, not a point: 5,20 €. Saying an amount aloud changes the ending of euro after the number, and you will learn that pattern later; for now, read the figure, or point and ask. You will still hear "kuna" from older speakers out of habit; the currency changed in 2023.',
        highlight: '5,20 €',
      },
      {
        type: 'example',
        title: 'In the Shop',
        items: [
          {
            hr: 'Koliko ovo košta?',
            en: 'How much does this cost?',
            note: 'the essential question',
          },
          {
            hr: 'Koliko je ovo?',
            en: 'How much is this?',
            note: 'just as common, and just as correct',
          },
          {
            hr: 'Imate li kruh?',
            en: 'Do you have bread?',
            note: 'kruh — the accusative, unchanged',
          },
          {
            hr: 'Trebam mlijeko i sir.',
            en: 'I need milk and cheese.',
            note: 'trebati + the accusative',
          },
          {
            hr: 'To je preskupo.',
            en: 'That is too expensive.',
            note: 'pre- means "too": preskupo, premalo',
          },
          { hr: 'Imate li sitno?', en: 'Do you have change?', note: 'sitno = small change' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ova majica je jeftina.',
            en: 'This T-shirt is cheap.',
            note: 'jeftin / skup — cheap / expensive',
          },
          {
            hr: 'Ta torba je preskupa.',
            en: 'That bag is too expensive.',
            note: 'agrees with the feminine torba',
          },
          { hr: 'Uzimam ovo.', en: 'I will take this.', note: 'uzimati — to take' },
          { hr: 'Imate li vrećicu?', en: 'Do you have a bag?', note: 'vrećica → vrećicu' },
          { hr: 'Gdje je ljekarna?', en: 'Where is the pharmacy?', note: 'ljekarna — medicine' },
          {
            hr: 'Dućan je zatvoren, ali tržnica je otvorena.',
            en: 'The shop is closed, but the market is open.',
            note: 'otvoren / zatvoren — open / closed',
          },
          {
            hr: 'Jabuke su svježe i jeftine.',
            en: 'The apples are fresh and cheap.',
            note: 'plural adjectives agree',
          },
          {
            hr: 'Koliko košta kruh?',
            en: 'How much is the bread?',
            note: 'the thing you ask about is the subject',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Where You Shop',
        body: 'A few words to recognise: "dućan" and "trgovina" are both shops, "supermarket" is what you expect, and "tržnica" is the open-air market where most Croatians still buy fruit and vegetables. "Pekarnica" is a bakery, "ljekarna" a pharmacy, "kiosk" the little stand selling newspapers and tickets.',
        highlight: 'dućan · tržnica · pekarnica · ljekarna',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you ask what something costs?',
        options: ['Koliko ovo košta?', 'Tko ovo košta?', 'Kako ovo košta?', 'Kada ovo košta?'],
        correct: 0,
        explanation:
          '"Koliko" asks how much and "košta" is the verb to cost: Koliko ovo košta? "Koliko je ovo?" says the same thing.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "preskupo" mean?',
        options: ['very cheap', 'too expensive', 'free', 'closed'],
        correct: 1,
        explanation: 'pre- means "too", and skup means expensive: preskupo — too expensive.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, asking the price with "kako" (how): "Kako ovo košta?" — the price is an amount, so koliko: Koliko ovo košta? Second, writing a decimal point on a price: "5.20 €" — Croatian uses a comma: 5,20 €. Third, forgetting that an adjective agrees: "Torba je preskup" — torba is feminine: Torba je preskupa.',
        highlight: 'Koliko ovo košta?',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you say 150?',
            options: ['sto pedeset', 'petsto', 'pedeset sto', 'sto pet'],
            correct: 0,
            explanation:
              'Compound numbers are the parts in order: sto (100) + pedeset (50) = sto pedeset. Petsto is 500 and sto pet is 105.',
          },
          {
            q: 'Which question asks the price?',
            options: ['Gdje ovo košta?', 'Koliko ovo košta?', 'Kada ovo košta?', 'Tko ovo košta?'],
            correct: 1,
            explanation: '"Koliko" asks how much: Koliko ovo košta?',
          },
          {
            q: 'Where do you go to buy medicine?',
            options: ['pekarnica', 'tržnica', 'ljekarna', 'kiosk'],
            correct: 2,
            explanation:
              '"Ljekarna" is the pharmacy. "Pekarnica" is a bakery, "tržnica" the open-air market, and "kiosk" the stand for newspapers and tickets.',
          },
          {
            q: 'How is five euros twenty written on a Croatian price tag?',
            options: ['5.20 €', '5,20 €', '5:20 €', '520 €'],
            correct: 1,
            explanation: 'Croatian writes a decimal comma: 5,20 €.',
          },
          {
            q: 'Complete: "Ta torba je ___." (too expensive)',
            options: ['preskup', 'preskupa', 'preskupi', 'preskupe'],
            correct: 1,
            explanation: 'Torba is feminine, so the adjective ends in -a: preskupa.',
          },
          {
            q: 'How do you say 2000?',
            options: ['dvije tisuće', 'dva tisuća', 'dvjesto', 'dvadeset tisuća'],
            correct: 0,
            explanation:
              '"Tisuća" is feminine, so two of them is dvije tisuće. "Dvjesto" is 200 and "dvadeset tisuća" is 20,000.',
          },
          {
            q: 'What does "Imate li sitno?" ask?',
            options: [
              'Do you have small change?',
              'Do you have a small size?',
              'Is it small?',
              'Is it cheap?',
            ],
            correct: 0,
            explanation: 'Sitno is small change: Imate li sitno? — Do you have change?',
          },
          {
            q: 'Complete: "Imate li ___?" (a bag — vrećica)',
            options: ['vrećica', 'vrećici', 'vrećicom', 'vrećicu'],
            correct: 3,
            explanation:
              'The bag is what you ask for — the object — so feminine -a becomes -u: vrećicu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Shopping — Key Takeaways',
        points: [
          'Tens and hundreds: dvadeset, pedeset, sto, dvjesto, tisuća',
          'Compound numbers are simple addition: sto četrdeset osam',
          'Koliko ovo košta? · Koliko je ovo? — the questions you will use most',
          'Prices are written with a comma: 5,20 €',
          'pre- means too: preskupo',
          'dućan, tržnica, pekarnica, ljekarna — where to go for what',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Finding Your Way
  // ─────────────────────────────────────────────────────────
  {
    id: 'directions-town',
    title: 'Finding Your Way',
    subtitle: 'Asking for directions, and understanding the answer',
    icon: '🗺️',
    level: 'A1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Asking Is the Easy Half',
        body: 'Asking for directions takes one sentence. Understanding the reply is the hard part, and it is mostly imperatives and prepositions — both of which you now have. This lesson gives you the question, the place names, and the handful of instructions you are actually likely to hear back.',
        icon: '🗺️',
      },
      {
        type: 'rule',
        title: 'Two Ways to Ask',
        body: '"Gdje je…?" is the direct one: Gdje je kolodvor? (Where is the station?) "Gdje se nalazi…?" is slightly more formal and very common on signs and in speech: Gdje se nalazi ljekarna? Open either with "Oprostite" and you have a polite, complete request: Oprostite, gdje je tržnica?',
        highlight: 'Oprostite, gdje je…?',
      },
      {
        type: 'table',
        title: 'Places in Town',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['kolodvor', 'station', 'pošta', 'post office'],
          ['trg', 'square', 'banka', 'bank'],
          ['ulica', 'street', 'ljekarna', 'pharmacy'],
          ['crkva', 'church', 'bolnica', 'hospital'],
          ['tržnica', 'market', 'kavana', 'café'],
          ['muzej', 'museum', 'restoran', 'restaurant'],
          ['park', 'park', 'kino', 'cinema'],
        ],
      },
      {
        type: 'rule',
        title: 'The Instructions You Will Hear',
        body: 'Directions come back as imperatives, usually in the polite -ite form. Idite ravno. (Go straight on.) Skrenite lijevo. (Turn left.) Skrenite desno. (Turn right.) Prijeđite ulicu. (Cross the street.) Nastavite do trga. (Carry on as far as the square.) If you learn only "ravno", "lijevo" and "desno", you will follow most answers.',
        highlight: 'ravno · lijevo · desno',
      },
      {
        type: 'table',
        title: 'Position Words',
        headers: ['Croatian', 'English', 'Case it takes'],
        rows: [
          ['pored / do', 'next to', 'genitive'],
          ['blizu', 'near', 'genitive'],
          ['ispred', 'in front of', 'genitive'],
          ['iza', 'behind', 'genitive'],
          ['preko puta', 'across from', 'genitive'],
          ['na uglu', 'on the corner', 'locative'],
          ['u centru', 'in the centre', 'locative'],
        ],
      },
      {
        type: 'example',
        title: 'Asking and Answering',
        items: [
          {
            hr: 'Oprostite, gdje je glavni kolodvor?',
            en: 'Excuse me, where is the main station?',
            note: 'glavni = main',
          },
          {
            hr: 'Idite ravno pa skrenite desno.',
            en: 'Go straight on, then turn right.',
            note: 'pa = and then',
          },
          {
            hr: 'To je preko puta pošte.',
            en: 'It is across from the post office.',
            note: 'preko puta + genitive: pošte',
          },
          {
            hr: 'Je li daleko? — Ne, pet minuta pješice.',
            en: 'Is it far? — No, five minutes on foot.',
            note: 'pet minuta — genitive plural after 5',
          },
          {
            hr: 'Gdje se nalazi ljekarna?',
            en: 'Where is the pharmacy?',
            note: 'nalaziti se = to be located',
          },
          {
            hr: 'Izgubio sam se. / Izgubila sam se.',
            en: 'I am lost.',
            note: 'a man says izgubio, a woman izgubila',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Oprostite, gdje je pošta? — Pored banke, na uglu.',
            en: 'Excuse me, where is the post office? — Next to the bank, on the corner.',
            note: 'pored + genitive; na uglu locative',
          },
          {
            hr: 'Prijeđite ulicu i idite lijevo.',
            en: 'Cross the street and go left.',
            note: 'two polite imperatives',
          },
          {
            hr: 'Muzej je na trgu, blizu crkve.',
            en: 'The museum is on the square, near the church.',
            note: 'na trgu locative; blizu + genitive',
          },
          {
            hr: 'Idem na posao tramvajem.',
            en: 'I go to work by tram.',
            note: 'tramvajem — instrumental, no preposition',
          },
          {
            hr: 'Kolodvor je daleko, idite autobusom.',
            en: 'The station is far, take the bus.',
            note: 'autobusom — the means of travel',
          },
          {
            hr: 'Koji tramvaj ide do glavnog trga?',
            en: 'Which tram goes to the main square?',
            note: 'do + genitive: glavnog trga',
          },
          {
            hr: 'Nastavite ravno do kina.',
            en: 'Carry on straight ahead as far as the cinema.',
            note: 'nastavite — polite; do + genitive',
          },
          {
            hr: 'Bolnica je preko puta parka.',
            en: 'The hospital is across from the park.',
            note: 'preko puta + genitive: parka',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Getting Around',
        body: 'Useful when the answer is "not near": "tramvajem" by tram, "autobusom" by bus, "autom" by car, "vlakom" by train. Those endings are the instrumental, marking the means of doing something — the same case as "plaćam karticom". On foot is a different kind of word: "pješice" (or "pješke") is an adverb, a word of its own with no case ending. Zagreb runs on trams, and "Koji tramvaj ide do centra?" is a question worth having ready.',
        highlight: 'pješice · tramvajem · autobusom',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A local tells you "Skrenite lijevo". What should you do?',
        options: ['Go straight on', 'Turn left', 'Turn right', 'Cross the street'],
        correct: 1,
        explanation:
          '"Skrenite" is the polite imperative of "to turn" and "lijevo" is left. Straight on would be "idite ravno", right would be "skrenite desno", and crossing would be "prijeđite ulicu".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "The bank is next to the market"?',
        options: [
          'Banka je pored tržnica.',
          'Banka je pored tržnici.',
          'Banka je pored tržnice.',
          'Banka je pored tržnicu.',
        ],
        correct: 2,
        explanation:
          '"Pored" always takes the genitive, and the genitive of the feminine "tržnica" is "tržnice". The other endings are the subject form, the locative and the accusative.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, giving the singular imperative to a stranger: "Skreni lijevo" — the polite reply is Skrenite lijevo. Second, using the wrong case after a position word: "pored pošta", "blizu crkva" — these take the genitive: pored pošte, blizu crkve. Third, adding a preposition to say how you travel, as English does: "s tramvajem", "u autobus" — the means of travel is the bare instrumental: tramvajem, autobusom.',
        highlight: 'Skrenite lijevo',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Oprostite, gdje je ___?" (Excuse me, where is the station? — "kolodvor".)',
            options: ['kolodvora', 'kolodvor', 'kolodvoru', 'kolodvorom'],
            correct: 1,
            explanation:
              'After "gdje je" the place is the subject, so it stays in its dictionary form: kolodvor. "Kolodvora" is the genitive, "kolodvoru" the locative and "kolodvorom" the instrumental.',
          },
          {
            q: 'Complete: "Idem u školu ___." (I go to school by bus — "autobus".)',
            options: ['autobus', 'autobusa', 'autobusom', 'u autobusu'],
            correct: 2,
            explanation:
              'The means of travel is the instrumental with no preposition: autobusom. "U autobusu" says where you are sitting, not how you travel, and the other two are the wrong cases.',
          },
          {
            q: 'Which sentence is correct? (Turn right — said politely to a stranger.)',
            options: ['Skreni desno.', 'Skrenite desno.', 'Skreneš desno.', 'Skrenuti desno.'],
            correct: 1,
            explanation:
              'Directions come back in the polite -ite form: Skrenite desno. "Skreni" is for a friend, "skreneš" is a statement and "skrenuti" the infinitive.',
          },
          {
            q: 'What is wrong with "Ljekarna je blizu pošta."?',
            options: [
              'blizu should be na',
              'ljekarna should be ljekarnu',
              'Nothing is wrong',
              'pošta should be pošte — blizu takes the genitive',
            ],
            correct: 3,
            explanation:
              '"Blizu" belongs to the genitive group, and the feminine "pošta" becomes pošte. The subject "ljekarna" is right as it is.',
          },
          {
            q: 'What does "Idite ravno pa skrenite lijevo." mean?',
            options: [
              'Turn left, then go straight on',
              'Go straight on, then turn left',
              'Go straight on, then turn right',
              'Cross the street and turn left',
            ],
            correct: 1,
            explanation:
              '"Idite ravno" is go straight on, "pa" is and then, and "skrenite lijevo" is turn left. Right would be desno, and crossing would be prijeđite.',
          },
          {
            q: 'Complete: "Muzej je ___." (The museum is on the corner — "ugao".)',
            options: ['na ugao', 'na uglu', 'u uglu', 'na ugla'],
            correct: 1,
            explanation:
              'A street corner is na plus the locative: na uglu (the a drops out). "Na ugao" is motion towards it, "u uglu" is the inside corner of a room, and "ugla" is the genitive.',
          },
          {
            q: 'What does "Je li daleko?" mean?',
            options: ['Is it near?', 'Is it open?', 'Is it expensive?', 'Is it far?'],
            correct: 3,
            explanation:
              '"Daleko" means far, so the question asks whether it is far. Near would be "blizu", and the usual answer is a number of minutes — pet minuta pješice.',
          },
          {
            q: 'Complete: "Pet minuta ___." (Five minutes on foot.)',
            options: ['pješice', 'pješaka', 'na noge', 'nogom'],
            correct: 0,
            explanation:
              '"On foot" is the single word pješice, an adverb. "Pješaka" is a case form of pješak (a pedestrian), and "na noge" / "nogom" are word-for-word translations that Croatian does not use for walking somewhere.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Directions — Key Takeaways',
        points: [
          'Oprostite, gdje je…? / Gdje se nalazi…? — the two ways to ask',
          'ravno, lijevo, desno — the three words that decode most answers',
          'Instructions come back as polite imperatives: Idite… Skrenite…',
          'Position words mostly take the genitive: pored, blizu, ispred, preko puta',
          'Means of travel takes the instrumental: tramvajem, autobusom; on foot is the adverb pješice',
          'Je li daleko? — Is it far?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Weather and Seasons
  // ─────────────────────────────────────────────────────────
  {
    id: 'weather-seasons',
    title: 'Weather and Seasons',
    subtitle: 'Small talk that works anywhere, and the four seasons',
    icon: '🌤️',
    level: 'A1',
    duration: '~5 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Safest Conversation There Is',
        body: 'Weather is where every learner should start speaking, because the sentences are short, nobody minds if you get one wrong, and you can have the same exchange with anyone. It also introduces a very Croatian sentence shape: one word plus "je", with no subject at all.',
        icon: '🌤️',
      },
      {
        type: 'rule',
        title: 'Sentences With No Subject',
        body: 'English insists on a subject even when there is nothing to be the subject of: "IT is cold." Croatian simply drops it. Hladno je. (It is cold.) Toplo je. (It is warm.) Vruće je. (It is hot.) Sunčano je. (It is sunny.) The neuter adjective plus "je" is a complete sentence, and this pattern goes far beyond the weather: Dobro je. Teško je. Kasno je.',
        highlight: 'Hladno je.',
      },
      {
        type: 'table',
        title: 'Describing the Day',
        headers: ['Croatian', 'English'],
        rows: [
          ['Sunčano je.', 'It is sunny.'],
          ['Oblačno je.', 'It is cloudy.'],
          ['Toplo je.', 'It is warm.'],
          ['Hladno je.', 'It is cold.'],
          ['Vruće je.', 'It is hot.'],
          ['Vjetrovito je.', 'It is windy.'],
          ['Maglovito je.', 'It is foggy.'],
        ],
      },
      {
        type: 'rule',
        title: 'Rain and Snow Fall',
        body: 'Croatian does not say "it is raining" — it says the rain falls. Pada kiša. (It is raining, literally "rain is falling".) Pada snijeg. (It is snowing.) Pada tuča. (It is hailing.) The noun is the subject and "pada" is the verb, so you can also say "Kiša pada" with no change in meaning — just a shift in emphasis.',
        highlight: 'Pada kiša.',
      },
      {
        type: 'rule',
        title: 'Asking About the Weather',
        body: '"Kakvo je vrijeme?" is how you ask what the weather is like — "kakvo" means "what kind of", and "vrijeme" is both weather and time, so context does the work. And the answer that covers everything: "Lijepo je." (It is lovely.)',
        highlight: 'Kakvo je vrijeme?',
      },
      {
        type: 'table',
        title: 'The Four Seasons',
        headers: ['Season', 'English', 'In that season'],
        rows: [
          ['proljeće', 'spring', 'u proljeće'],
          ['ljeto', 'summer', 'ljeti'],
          ['jesen', 'autumn', 'u jesen'],
          ['zima', 'winter', 'zimi'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Have Their Own Word',
        body: 'The everyday way to say "in summer" and "in winter" is a single word: ljeti and zimi. Spring and autumn use a preposition instead: u proljeće, u jesen. You will also hear u ljeto or na ljeto for one particular summer — both are correct — but for "in summer, as a rule" ljeti is the word. Four short forms, and you will use them constantly once you can talk about when you visit.',
        highlight: 'ljeti · zimi · u proljeće · u jesen',
      },
      {
        type: 'example',
        title: 'Weather Small Talk',
        items: [
          {
            hr: 'Kakvo je vrijeme danas?',
            en: 'What is the weather like today?',
            note: 'the opening line',
          },
          {
            hr: 'Sunčano je i toplo.',
            en: 'It is sunny and warm.',
            note: 'two subjectless sentences joined',
          },
          {
            hr: 'Pada kiša cijeli dan.',
            en: 'It has been raining all day.',
            note: 'Croatian uses the present here',
          },
          {
            hr: 'Ljeti je na moru jako vruće.',
            en: 'In summer it is very hot at the seaside.',
            note: 'ljeti + na moru (locative)',
          },
          {
            hr: 'Zimi pada snijeg u Zagorju.',
            en: 'In winter it snows in Zagorje.',
            note: 'zimi — one word for "in winter"',
          },
          {
            hr: 'Nebo je plavo i sunčano je.',
            en: 'The sky is blue and it is sunny.',
            note: 'a subject, then a subjectless sentence',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Danas je oblačno i hladno.',
            en: 'Today it is cloudy and cold.',
            note: 'no subject — two neuter adjectives and je',
          },
          {
            hr: 'Noću je hladno, a danju je toplo.',
            en: 'At night it is cold, and by day it is warm.',
            note: 'noću, danju — one word for "at night", "by day"',
          },
          {
            hr: 'U proljeće je Zagreb prekrasan.',
            en: 'In spring Zagreb is beautiful.',
            note: 'u proljeće — spring takes u',
          },
          {
            hr: 'Zimi je u Lici jako hladno.',
            en: 'In winter it is very cold in Lika.',
            note: 'zimi; u Lici — k → c in the locative',
          },
          {
            hr: 'Kakvo je vrijeme u Splitu? — Sunčano i vjetrovito.',
            en: 'What is the weather like in Split? — Sunny and windy.',
            note: 'a subjectless answer',
          },
          {
            hr: 'Ljeti uvijek idemo na more.',
            en: 'In summer we always go to the seaside.',
            note: 'ljeti — one word for "in summer"',
          },
          {
            hr: 'U jesen često pada kiša.',
            en: 'In autumn it often rains.',
            note: 'u jesen — autumn takes u',
          },
          {
            hr: 'Vruće je, idemo na plažu!',
            en: "It is hot, let's go to the beach!",
            note: 'vruće je — the neuter pattern',
          },
          {
            hr: 'Kasno je i mračno je.',
            en: 'It is late and it is dark.',
            note: 'the same pattern beyond weather',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "It is raining"?',
        options: ['Ono kiši.', 'Pada kiša.', 'To je kiša.', 'Kiša je.'],
        correct: 1,
        explanation:
          'Croatian says the rain falls: Pada kiša. There is no dummy "it" to build a sentence around, and "Kiša je" would simply identify something as rain rather than describe the weather.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which single word means "in summer"?',
        options: ['ljeto', 'ljeti', 'ljeta', 'ljetu'],
        correct: 1,
        explanation:
          'Summer and winter have their own single-word forms: ljeti and zimi. Ljeto is just the name of the season. Spring and autumn use a preposition — u proljeće, u jesen.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, inserting a subject for the English "it": "Ono je hladno" — the weather has no subject, so it is simply Hladno je (and "To je hladno" says that some THING is cold). Second, translating "it is raining" with biti: "Kiša je" — the rain falls: Pada kiša. Third, forgetting that vrijeme is neuter: "Vrijeme je lijep" — say Vrijeme je lijepo.',
        highlight: 'Hladno je',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ je danas." (It is warm today.)',
            options: ['Topao', 'Topla', 'Toplo', 'Topli'],
            correct: 2,
            explanation:
              'A weather sentence has no subject, and the adjective takes the neuter -o: Toplo je. "Topao", "topla" and "topli" would each need a noun of that gender to agree with.',
          },
          {
            q: 'Complete: "___ kiša." (It is raining.)',
            options: ['Pada', 'Je', 'Ima', 'Padaju'],
            correct: 0,
            explanation:
              'Croatian says the rain falls: Pada kiša. "Kiša je" identifies something as rain, "ima kiša" is not a pattern, and "padaju" is plural for one noun.',
          },
          {
            q: 'Which sentence is correct? (What is the weather like?)',
            options: [
              'Kakvo je vrijeme?',
              'Kakav je vrijeme?',
              'Kakva je vrijeme?',
              'Kakvo su vrijeme?',
            ],
            correct: 0,
            explanation:
              '"Vrijeme" is neuter, so the question word is kakvo: Kakvo je vrijeme? "Kakav" and "kakva" are the wrong genders, and "su" is plural for one thing.',
          },
          {
            q: 'What is wrong with "Danas je hladan i pada kiša."?',
            options: [
              'danas should be sutra',
              'pada should be padaju',
              'Nothing is wrong',
              'hladan should be hladno — the weather sentence takes the neuter',
            ],
            correct: 3,
            explanation:
              'With no subject, the adjective takes the neuter form: Danas je hladno. "Hladan" is masculine and would need a masculine noun. "Pada kiša" is already right.',
          },
          {
            q: 'What does "ljeti" mean?',
            options: ['in spring', 'in summer', 'in autumn', 'in winter'],
            correct: 1,
            explanation:
              '"Ljeti" is the single-word form for "in summer"; "zimi" is its winter twin. Spring and autumn use u instead: u proljeće, u jesen.',
          },
          {
            q: 'Complete: "___ često pada kiša." (In autumn it often rains.)',
            options: ['Jesen', 'U jesen', 'U jesenu', 'U jesena'],
            correct: 1,
            explanation:
              'Autumn takes the preposition: u jesen. A bare "jesen" names the season without saying "in", and "jesenu" / "jesena" are not forms of this word.',
          },
          {
            q: 'What does "Kasno je." mean?',
            options: ['He is late.', 'It is late.', 'The evening.', 'It is cold.'],
            correct: 1,
            explanation:
              'The subjectless pattern goes beyond weather: Kasno je is "it is late". "He is late" would need a subject and a different word — kasni.',
          },
          {
            q: 'Complete: "Pada ___." (It is snowing — "snijeg".)',
            options: ['snijeg', 'snijega', 'snijegu', 'snijegom'],
            correct: 0,
            explanation:
              'The snow is the SUBJECT of "pada", so it stays in its dictionary form: Pada snijeg. The other forms are other cases and cannot be the subject.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Weather — Key Takeaways',
        points: [
          'Croatian drops the dummy subject: Hladno je. Toplo je. Sunčano je.',
          'Rain and snow FALL: Pada kiša. Pada snijeg.',
          'Kakvo je vrijeme? — what is the weather like?',
          'proljeće, ljeto, jesen, zima',
          'ljeti and zimi are the single words; spring and autumn take u',
          'The subjectless pattern works far beyond weather: Kasno je. Teško je.',
        ],
      },
    ],
  },
  ...LESSONS_A1_NEW,
];
