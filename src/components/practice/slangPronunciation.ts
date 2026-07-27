/**
 * slangPronunciation — IPA pronunciation overrides for the Slang & Psovanje screen.
 *
 * Azure's hr-HR neural voice mis-segments some low-frequency / vulgar words —
 * notably ones with a prefix+consonant boundary like od+jebi or s+jebano — reading
 * "odjebi" as "od jeb i". An explicit IPA <phoneme> fixes those (see /api/tts and
 * speak()'s `phoneme` option).
 *
 * Keyed by the exact entry.hr string. IPA is standard štokavski (phonemic). Only
 * single-word entries are listed — Azure <phoneme> applies one pronunciation to the
 * whole wrapped text, so multi-word phrases are left to the voice's normal reading.
 * To extend: add `'<hr word>': '<ipa>'`. Words not in the map speak unchanged.
 */
export const SLANG_IPA: Record<string, string> = {
  Odjebi: 'ˈodjebi',
  Sjebano: 'ˈsjebano',
  Jebeno: 'ˈjebeno',
  Jebačina: 'jeˈbatʃina',
  'Pizdjen/a': 'ˈpizdjen',
  Pizdarija: 'pizˈdarija',
  Govnar: 'ˈgovnar',
  Govno: 'ˈgovno',
  Sranje: 'ˈsraɲe',
  Kreten: 'ˈkreten',
};

/** IPA override for a Croatian slang entry, or undefined if the voice reads it fine. */
export function ipaFor(hr: string): string | undefined {
  return SLANG_IPA[hr];
}
