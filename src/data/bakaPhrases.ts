/**
 * BAKA_PHRASES — the Heritage Mode phrase list.
 *
 * Moved out of HeritageModeScreen because two places now need it: the screen
 * that renders it, and applyRemoteProgress, which migrates saved bookmarks from
 * the positional indices they used to be stored as into phrase keys. A lib
 * importing a component would be the wrong direction and would drag React into
 * the sync path.
 *
 * ORDER IS NO LONGER LOAD-BEARING for saved bookmarks — that was the bug — but
 * `hr` now is: it is the key a learner's saved phrases are stored under, and all
 * entries must keep unique `hr` values. savedPhrases.test.ts asserts that.
 */
export const BAKA_PHRASES = [
  {
    hr: 'Nedostajete mi.',
    en: 'I miss you (formal, to older relatives).',
    audio: 'Nedostajete mi.',
  },
  {
    hr: 'Jako sam sretan što sam ovdje.',
    en: 'I am so happy to be here. (masculine)',
    audio: 'Jako sam sretan što sam ovdje.',
  },
  {
    hr: 'Jako sam sretna što sam ovdje.',
    en: 'I am so happy to be here. (feminine)',
    audio: 'Jako sam sretna što sam ovdje.',
  },
  {
    hr: 'Pričajte mi o staroj domovini.',
    en: 'Tell me about the old homeland.',
    audio: 'Pričajte mi o staroj domovini.',
  },
  {
    hr: 'Naučio sam malo hrvatskog.',
    en: 'I learned a bit of Croatian. (masculine)',
    audio: 'Naučio sam malo hrvatskog.',
  },
  {
    hr: 'Naučila sam malo hrvatskog.',
    en: 'I learned a bit of Croatian. (feminine)',
    audio: 'Naučila sam malo hrvatskog.',
  },
  { hr: 'Još uvijek učim.', en: "I'm still learning.", audio: 'Još uvijek učim.' },
  {
    hr: 'Možete li ponoviti, molim?',
    en: 'Could you repeat that, please?',
    audio: 'Možete li ponoviti, molim?',
  },
  { hr: 'Sporije, molim.', en: 'Slower, please.', audio: 'Sporije, molim.' },
  {
    hr: 'Kako se to kaže na hrvatskom?',
    en: 'How do you say that in Croatian?',
    audio: 'Kako se to kaže na hrvatskom?',
  },
  { hr: 'Hrana je bila izvrsna.', en: 'The food was excellent.', audio: 'Hrana je bila izvrsna.' },
  {
    hr: 'Ponosim se svojim korijenima.',
    en: 'I am proud of my roots.',
    audio: 'Ponosim se svojim korijenima.',
  },
];
