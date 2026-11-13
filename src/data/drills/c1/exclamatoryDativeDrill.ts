// src/data/drills/c1/exclamatoryDativeDrill.ts
//
// C1 EXCLAMATORY AND EMPHATIC DATIVE — the drill for the `exclamatory-dative` lesson.
//
// usklični dativ: Blago tebi!, Jao meni!, Teško onome…, Slava junacima!, Hvala Bogu!, and
// the fixed wishes Pokoj mu duši!, Laka mu zemlja!. emfatični dativ (dativ zakletve):
// Tako mi svega!, Tako mi Boga!, Majke mi!. Živjela Hrvatska! is a nominative.
//
// Not offered as a distractor: the clitic after blago, and any form a region might use
// (jao mene); distractors are wrong by case or are not pronouns at all.
//
// Three modes:
//   usklicni  — the exclamatory dative
//   zakletva  — the dative of the oath
//   prepoznaj — which is which, and what it means

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const EXCLAMATORY_DATIVE_MODE_LABELS: Record<string, string> = {
  usklicni: '❗ Usklični dativ',
  zakletva: '🤞 Dativ zakletve',
  prepoznaj: '🔎 Prepoznaj',
};

export const EXCLAMATORY_DATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── usklicni ──────────────────────────────────────────────────────────────
  {
    mode: 'usklicni',
    q: 'Blago ____, sutra putuješ!',
    en: 'Lucky you, you travel tomorrow!',
    opts: ['tebi', 'tebe', 'tvoj', 'ti si'],
    answer: 'tebi',
    tip: 'blago + the stressed dative: Blago tebi!',
  },
  {
    mode: 'usklicni',
    q: 'Jao ____, izgubio sam ključeve!',
    en: "Oh no, I've lost my keys!",
    opts: ['meni', 'moj', 'ja', 'mojem'],
    answer: 'meni',
    tip: 'jao + the dative: Jao meni!',
  },
  {
    mode: 'usklicni',
    q: 'Slava ____!',
    en: 'Glory to the heroes!',
    opts: ['junacima', 'junaci', 'junake', 'junakom'],
    answer: 'junacima',
    tip: 'Glory goes to someone: dative plural junacima.',
  },
  {
    mode: 'usklicni',
    q: 'Hvala ____ što ste svi živi i zdravi.',
    en: 'Thank God you are all alive and well.',
    opts: ['Bogu', 'Bog', 'Boga', 'Bogom'],
    answer: 'Bogu',
    tip: 'hvala + dative: Hvala Bogu.',
  },
  {
    mode: 'usklicni',
    q: 'Čast i slava ____ braniteljima.',
    en: 'Honour and glory to the fallen defenders.',
    opts: ['palim', 'pali', 'pale', 'palog'],
    answer: 'palim',
    tip: 'The adjective agrees with the dative plural braniteljima.',
  },
  {
    mode: 'usklicni',
    q: 'Pokoj mu ____.',
    en: 'May his soul rest in peace.',
    opts: ['duši', 'duša', 'dušu', 'dušom'],
    answer: 'duši',
    tip: 'Peace is wished to the soul: the dative duši.',
  },
  {
    mode: 'usklicni',
    q: 'Teško ____ tko ne zna čekati!',
    en: "Woe to anyone who can't wait!",
    opts: ['onome', 'onaj', 'onoga', 'onim'],
    answer: 'onome',
    tip: 'teško + dative singular: onome.',
  },
  {
    mode: 'usklicni',
    q: 'Blago ____ koja odrastaju uz baku.',
    en: 'Lucky are the children who grow up with a grandmother.',
    opts: ['djeci', 'djeca', 'djecu', 'djecom'],
    answer: 'djeci',
    tip: 'blago + dative: djeci.',
  },

  // ── zakletva ──────────────────────────────────────────────────────────────
  {
    mode: 'zakletva',
    q: 'Tako ____ svega, nisam to rekao!',
    en: "I swear on everything, I didn't say it!",
    opts: ['mi', 'meni', 'me', 'moj'],
    answer: 'mi',
    tip: 'The oath takes the dative clitic of the one who swears.',
  },
  {
    mode: 'zakletva',
    q: 'Tako ____ Boga, reci mi istinu!',
    en: "For God's sake, tell me the truth!",
    opts: ['ti', 'tebi', 'te', 'tvoj'],
    answer: 'ti',
    tip: 'The listener is asked to swear: the clitic ti.',
  },
  {
    mode: 'zakletva',
    q: 'Tako mi ____, govorim istinu!',
    en: "I swear on everything, I'm telling the truth!",
    opts: ['svega', 'sve', 'svemu', 'svim'],
    answer: 'svega',
    tip: 'What you swear by goes in the genitive: svega.',
  },
  {
    mode: 'zakletva',
    q: 'Tako mi ____!',
    en: 'So help me God!',
    opts: ['Boga', 'Bog', 'Bogu', 'Bogom'],
    answer: 'Boga',
    tip: 'The genitive of what is sworn by: Boga.',
  },
  {
    mode: 'zakletva',
    q: '____ mi, nisam znao!',
    en: "I swear on my mother, I didn't know!",
    opts: ['Majke', 'Majka', 'Majci', 'Majku'],
    answer: 'Majke',
    tip: 'The short oath: genitive + mi.',
  },
  {
    mode: 'zakletva',
    q: 'Koji je padež „mi“ u „Tako mi svega!“?',
    opts: ['dativ', 'genitiv', 'akuzativ', 'nominativ'],
    answer: 'dativ',
    tip: 'mi is the dative clitic; svega is the genitive.',
  },
  {
    mode: 'zakletva',
    q: 'Koji je padež „svega“ u „Tako mi svega!“?',
    opts: ['genitiv', 'dativ', 'lokativ', 'instrumental'],
    answer: 'genitiv',
    tip: 'What you swear by is in the genitive.',
  },
  {
    mode: 'zakletva',
    q: 'Kako se zove dativ u „Tako mi Boga!“?',
    opts: ['dativ zakletve', 'etički dativ', 'usklični dativ', 'posvojni dativ'],
    answer: 'dativ zakletve',
    tip: 'The emfatični dativ, also called the dativ zakletve.',
  },

  // ── prepoznaj ─────────────────────────────────────────────────────────────
  {
    mode: 'prepoznaj',
    q: 'U kojem uzviku NEMA dativa?',
    opts: ['Živjela Hrvatska!', 'Hvala Bogu!', 'Blago tebi!', 'Jao meni!'],
    answer: 'Živjela Hrvatska!',
    tip: 'Hrvatska is the nominative subject of the wish.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je usklični dativ?',
    opts: ['Slava junacima!', 'Daj mi kruha.', 'Tako mi svega!', 'Pomogao sam mu.'],
    answer: 'Slava junacima!',
    tip: 'No verb, and glory goes to the dative. Tako mi svega is the oath.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je dativ zakletve?',
    opts: ['Tako mi svega!', 'Blago tebi!', 'Kako ti je mama?', 'Hvala Bogu!'],
    answer: 'Tako mi svega!',
    tip: 'An oath: tako + clitic + genitive.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je padež „Hrvatska“ u „Živjela Hrvatska!“?',
    opts: ['nominativ', 'dativ', 'genitiv', 'akuzativ'],
    answer: 'nominativ',
    tip: 'It is the subject of the wish.',
  },
  {
    mode: 'prepoznaj',
    q: 'Što znači „Blago tebi!“?',
    opts: ['Lucky you!', 'Woe is you!', 'Thank you!', 'Glory to you!'],
    answer: 'Lucky you!',
    tip: 'blago + dative: good fortune.',
  },
  {
    mode: 'prepoznaj',
    q: 'Što znači „Jao meni!“?',
    opts: ['Woe is me!', 'Lucky me!', 'Help me!', 'Glory to me!'],
    answer: 'Woe is me!',
    tip: 'jao + dative: misfortune.',
  },
  {
    mode: 'prepoznaj',
    q: 'Što znači „Laka mu zemlja!“?',
    opts: [
      'May the earth rest lightly on him!',
      'The earth is light for him.',
      'He bought cheap land.',
      'He fell to the ground.',
    ],
    answer: 'May the earth rest lightly on him!',
    tip: 'A fixed wish for the dead, built on the dative mu.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je usklični dativ?',
    opts: [
      'Blago onima koji znaju čekati!',
      'Rekao sam mu istinu.',
      'Kupila mi je knjigu.',
      'Tako ti Boga!',
    ],
    answer: 'Blago onima koji znaju čekati!',
    tip: 'No verb with blago; the dative names those it is about.',
  },
];
