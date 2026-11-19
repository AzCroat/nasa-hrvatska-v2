// lessonGrammarBook.js — slides and practice taken from Vinko Grubišić, "Croatian Grammar"
// (Hrvatska sveučilišna naklada, Zagreb 2007), placed in the lesson where the level and the
// topic fit. Added 2026-11-19 at the owner's request ("add new Croatian Grammar to the
// application where it is appropriate based on CEFR level").
//
// HOW IT WORKS. `withGrammarBook(lessons)` runs once, after `withPractice`, in lessons.js.
// For each lesson id below it (1) inserts the new rule/table/example slides before the
// first worked example (else the first quiz, else the check), and (2) appends the new items
// to that lesson's practice slide. Nothing in the spine changes, so units, unit tests,
// retention records and the course map are untouched.
//
// WHAT WAS CHECKED AGAINST THE APP FIRST (the book's 247 pages were compared topic by topic
// with all 345 lessons): the app already teaches the book's cases, tenses, aspect, numerals,
// word order, clauses and punctuation. These additions are the points it did NOT teach —
// each written from the book's own numbered paragraph (cited in `source`).
//
// RULES FOR EDITING: every question must be answerable without being told the answer (no
// cue in the form the item asks for); American English; standard Croatian only.

export const LESSON_GRAMMAR_BOOK = {
  // ── A2 ─────────────────────────────────────────────────────────────────────
  'prepositions-action': {
    source: 'Grubišić §39b — the facultative preposition forms s/sa and k/ka',
    slides: [
      {
        type: 'rule',
        title: 'Easy to Say: s or sa, k or ka',
        body:
          'Two small prepositions have a longer twin that is used to make speech easier. ' +
          's (with) becomes sa before a word that starts with s, š, z or ž: sa sestrom, sa Šimom, sa zebrom, sa ženom. ' +
          'It is also used before a hard group of consonants: sa mnom, sa psom, sa pčelom. ' +
          'k (toward, to someone) becomes ka before a word that starts with k or g: Idemo ka gradu. Idemo ka krdu. ' +
          'Before other letters it stays k: Idemo k selu. Idem k liječniku.',
        highlight: 'sa mnom · sa sestrom · ka gradu · k selu',
      },
      {
        type: 'table',
        title: 'Which Form?',
        headers: ['Next word starts with', 'Form', 'Example'],
        rows: [
          ['s, š, z, ž', 'sa', 'sa sestrom, sa ženom'],
          ['a hard group (mn, ps, pč)', 'sa', 'sa mnom, sa psom'],
          ['any other letter', 's', 's bratom, s Anom'],
          ['k or g', 'ka', 'ka gradu, ka kući'],
          ['any other letter', 'k', 'k selu, k liječniku'],
        ],
      },
    ],
    practice: [
      {
        q: 'Šetam ___ psom svako jutro.',
        options: ['s', 'sa', 'se', 'su'],
        correct: 1,
        hint: 'The next word starts with a hard group of consonants: ps.',
        explanation: 'sa psom — before a hard consonant group the longer form sa is used.',
      },
      {
        q: 'Idemo ___ gradu.',
        options: ['k', 'ka', 'ko', 'ga'],
        correct: 1,
        hint: 'The next word starts with g.',
        explanation: 'ka gradu — k becomes ka before a word that starts with k or g.',
      },
      {
        q: 'Idem ___ liječniku.',
        options: ['ka', 'ke', 'k', 'ki'],
        correct: 2,
        hint: 'The next word starts with l, so nothing needs to be added.',
        explanation: 'k liječniku — k stays k before any letter except k or g.',
      },
      {
        type: 'type',
        q: 'Kava ___ Ivanom (with Ivan) je dobra.',
        answer: 's',
        hint: 'Ivan starts with i, an ordinary letter.',
        explanation: 's Ivanom — before an ordinary letter the short s is used.',
      },
    ],
  },

  // ── B2 ─────────────────────────────────────────────────────────────────────
  'noun-peculiarities-e': {
    source: 'Grubišić §41 — double dative/locative forms of feminine nouns in -tka',
    slides: [
      {
        type: 'rule',
        title: 'Two Forms for the Same Case: bitka, bitki or bici',
        body:
          'A few feminine nouns in -tka have two correct dative and locative singular forms: ' +
          'bitka → bitki or bici (battle), pripovijetka → pripovijetki or pripovijeci (short story), zagonetka → zagonetki or zagoneci (riddle). ' +
          'Other nouns in -tka, such as patka (duck) → patki, have only the -ki form.',
        highlight: 'bitki / bici · pripovijetki / pripovijeci · zagonetki / zagoneci',
      },
    ],
    practice: [
      {
        q: 'Which of these is NOT a correct dative singular of zagonetka?',
        options: ['zagonetki', 'zagoneci', 'zagonetci', 'zagonetke'],
        correct: 2,
        hint: 'Two of the four are the correct dative: one keeps the t, one drops it. One of the others is the genitive.',
        explanation:
          'zagonetci mixes the two patterns. The dative forms are zagonetki and zagoneci; zagonetke is the genitive.',
      },
      {
        q: 'Dative singular of patka (duck): "Dajem kruh ___."',
        options: ['patki', 'paci', 'patci', 'patke'],
        correct: 0,
        hint: 'patka is a two-syllable noun in -tka, so the velar does not change.',
        explanation: 'patki — only the -ki form exists for patka (not patci or paci).',
      },
    ],
  },

  'word-formation-agents': {
    source: 'Grubišić §27 (voicing), §30 (-ski, -stvo and prefixes), §34 (reduction), §40 (l → o)',
    slides: [
      {
        type: 'rule',
        title: 'When Two Consonants Meet: the First Gives In',
        body:
          'Building a word often puts two consonants side by side. If one is voiced and the other voiceless, the FIRST changes to match the second — and the spelling follows the sound. ' +
          'rob → ropstvo (b becomes p before s): slave, slavery. svat → svadba (t becomes d before b): wedding guest, wedding. ' +
          'glas → glazba (s becomes z before b): voice, music. muž → muški (ž becomes š before k): man, masculine. ' +
          'rijedak → rijetka (d becomes t before k): rare. drugi → drukčiji (g becomes k before č): second, different. ' +
          'Two letters stand outside this rule: v and f never change — ovca, novci, lovci.',
        highlight: 'rob → ropstvo · svat → svadba · glas → glazba · muž → muški',
      },
      {
        type: 'rule',
        title: 'Where the Rule Stops: -ski, -stvo and Some Prefixes',
        body:
          'The rule is not applied in the endings -ski and -stvo, or in prefixes that end in d: the spelling keeps the base word so you can still see it. ' +
          'grad → gradski (not "gratski"), brat → bratski and bratstvo (not "bradstvo"). ' +
          'Prefixes: predstaviti (to introduce), odšišati (to give a haircut), nadstojnik (supervisor). ' +
          'In fast speech, voicing also crosses word borders — bez stida is heard as "bestida" — but the written form stays the same.',
        highlight: 'gradski · bratstvo · predstaviti',
      },
      {
        type: 'rule',
        title: 'Too Many Consonants: One Drops',
        body:
          'When the same or very similar consonants meet, one of them drops. ' +
          'Rus + ski → ruski (Russian). mjesto → mjestni → mjesni (local). ' +
          'The noun otac loses its t before an ending that starts with c or č: otac → oca (genitive singular), otac → oče (vocative). ' +
          'od + duljiti → oduljiti (to drag out). The shorter form is the standard spelling.',
        highlight: 'otac → oca · oče · mjesni · ruski',
      },
      {
        type: 'rule',
        title: 'Nouns in -lac: l Turns into o',
        body:
          'Agent nouns in -lac (the doer: nosilac, čitalac, slušalac) change their l to o whenever an ending is added that makes l end a syllable. ' +
          'nosilac → nosioca (genitive singular, also accusative), nosioci (plural), nosiocima. ' +
          'In the genitive plural the l stays, because it begins a syllable: nosilaca. ' +
          'The same change gives the masculine past form: nosio (but nosila, nosilo, nosili). ' +
          'It is not applied in every word: molba, žalba, sol and the names Mika and Jelka keep l.',
        highlight: 'nosilac → nosioca → nosilaca · nosio, nosila',
      },
      {
        type: 'table',
        title: 'Sound Changes When Words Are Built',
        headers: ['Change', 'What happens', 'Examples'],
        rows: [
          [
            'Voicing',
            'the first consonant matches the second',
            'rob → ropstvo, svat → svadba, glas → glazba',
          ],
          [
            'No change',
            'v and f; -ski, -stvo; some prefixes',
            'ovca, gradski, bratstvo, predstaviti',
          ],
          [
            'Reduction',
            'one of two similar consonants drops',
            'otac → oca, mjestni → mjesni, Rus + ski → ruski',
          ],
          ['l → o', 'l ends a syllable in -lac nouns', 'nosilac → nosioca (but nosilaca)'],
        ],
      },
      {
        type: 'example',
        title: 'The Sound Changes in Sentences',
        items: [
          {
            hr: 'Svadba je u subotu, a svatova ima oko stotinu.',
            en: 'The wedding is on Saturday, and there are about a hundred wedding guests.',
            note: 'svadba — from svat with the voicing change t → d',
          },
          {
            hr: 'Glazba iz susjedstva čuje se cijelu noć.',
            en: 'Music from next door can be heard all night.',
            note: 'glazba — from glas: s becomes z before b',
          },
          {
            hr: 'Ovo je knjiga mog oca.',
            en: 'This is my father’s book.',
            note: 'oca — the t of otac drops before the genitive ending',
          },
          {
            hr: 'Nosioci projekta sastaju se u petak.',
            en: 'The project holders meet on Friday.',
            note: 'nosioci — the l of nosilac becomes o before the plural ending',
          },
          {
            hr: 'To je odluka svih nosilaca projekta.',
            en: 'This is the decision of all the project holders.',
            note: 'nosilaca — in the genitive plural the l stays',
          },
          {
            hr: 'Imamo dobar mjesni vlak do Splita.',
            en: 'We have a good local train to Split.',
            note: 'mjesni — mjestni with the t reduced',
          },
        ],
      },
    ],
    practice: [
      {
        q: 'Which is the correct word for "wedding party", built from svat?',
        options: ['svatba', 'svadba', 'svapba', 'svabba'],
        correct: 1,
        hint: 'The first consonant takes on the voicing of the second, which is voiced.',
        explanation: 'svadba — t becomes d because b is voiced.',
      },
      {
        q: 'Rob means "slave". Which word means "slavery"?',
        options: ['robstvo', 'ropstvo', 'robtvo', 'ropztvo'],
        correct: 1,
        hint: 'The consonant after b is voiceless.',
        explanation: 'ropstvo — b becomes p before the voiceless s.',
      },
      {
        q: 'Which is the adjective from grad (city)?',
        options: ['gratski', 'gradski', 'gradzki', 'grakski'],
        correct: 1,
        hint: 'This ending is one of the places where the voicing rule is NOT applied.',
        explanation: 'gradski — the ending -ski keeps the d so the base word stays visible.',
      },
      {
        q: 'Which is the correct adjective for "local", built from mjesto?',
        options: ['mjestni', 'mjesni', 'mjezni', 'mjesctni'],
        correct: 1,
        hint: 'One of the two consonants in the middle drops.',
        explanation: 'mjesni — the t drops (mjestni → mjesni).',
      },
      {
        type: 'type',
        q: 'Ovo je knjiga mog ____. (father)',
        answer: 'oca',
        hint: 'Genitive of otac: the t drops before the ending.',
        explanation: 'mog oca — otac loses its t before the genitive ending.',
      },
      {
        type: 'type',
        q: 'Genitive singular of nosilac: ____',
        answer: 'nosioca',
        hint: 'l turns into o before an ending.',
        explanation: 'nosioca — l becomes o where it would end a syllable.',
      },
      {
        q: 'Genitive plural of čitalac (reader): "Ima puno ___."',
        options: ['čitaoca', 'čitalaca', 'čitalca', 'čitaoci'],
        correct: 1,
        hint: 'In the genitive plural an a is inserted, and the l begins a syllable.',
        explanation:
          'čitalaca — the l stays; the change to o happens only where l ends a syllable.',
      },
      {
        q: 'In which word is the voicing rule NOT applied?',
        options: ['glazba', 'ropstvo', 'bratstvo', 'svadba'],
        correct: 2,
        hint: 'Look for the ending that keeps the base word visible.',
        explanation: 'bratstvo keeps the t of brat; the others show the voicing change.',
      },
    ],
  },
};

/**
 * Place each overlay's slides and practice items into its lesson.
 * A lesson id that is not in the list is returned untouched; an overlay for a lesson that
 * does not exist is a programming error and is reported by grubisicOverlay.test.ts.
 */
export function withGrammarBook(lessons) {
  return lessons.map((lesson) => {
    const extra = LESSON_GRAMMAR_BOOK[lesson.id];
    if (!extra) return lesson;
    const slides = [...lesson.slides];
    const worked = slides.findIndex((s) => s.type === 'worked');
    const quiz = slides.findIndex((s) => s.type === 'quiz');
    const check = slides.findIndex((s) => s.type === 'check');
    const at = worked >= 0 ? worked : quiz >= 0 ? quiz : check >= 0 ? check : slides.length;
    slides.splice(at, 0, ...extra.slides);
    if (Array.isArray(extra.practice) && extra.practice.length) {
      const pi = slides.findIndex((s) => s.type === 'practice');
      if (pi >= 0) {
        slides[pi] = { ...slides[pi], items: [...slides[pi].items, ...extra.practice] };
      }
    }
    return { ...lesson, slides };
  });
}
