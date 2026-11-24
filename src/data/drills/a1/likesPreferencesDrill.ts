// src/data/drills/a1/likesPreferencesDrill.ts
//
// A1 LIKES AND PREFERENCES — the drill for the `likes-preferences` lesson (A1, 73).
//
// Follows Hrvatski za početnike 1, page 129 (unit "Volim te!"): "Tko ili što vam se
// sviđa?", Hrvoje and Silvija in the car ("Sviđa ti se ova glazba?" — "Da, lagana je,
// nježna."), the pattern "Hrvoju se sviđa Silvija. Njemu se sviđa Silvija. Sviđa mu se
// Silvija." and "Sviđa mi se… jer… / Ne sviđaju mi se… jer…". voljeti is taught much
// earlier in the book and is gathered here from pages 40 ("Volim tortu."), 47 ("Znaš da
// ne volim balet." · "Ja volim disko."), 52 ("Jako volim plivati." — "Ja više volim
// sunčanje."), 59 ("Ova mi se sviđa.") and 62–64 ("ali mi se ne sviđa model" · "Ne volimo
// konvencionalnu odjeću." · the voljeti rows). The book never states "više volim … nego …"
// as a rule and does not use mrziti; both come from the lesson. The book also drills the
// long forms (njemu, njoj); the lesson teaches the short ones (mi, ti, mu, joj, nam, vam,
// im), so only those are asked for.
//
// Three modes:
//   voljeti  — volim + what you love (the accusative)
//   svidjati — sviđa mi se: the thing is the subject
//   vise     — preferring, not liking, and what the sentences mean

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LIKES_PREFERENCES_MODE_LABELS: Record<string, string> = {
  voljeti: '❤️ Volim kavu',
  svidjati: '👍 Sviđa mi se',
  vise: '⚖️ Više volim…',
};

export const LIKES_PREFERENCES_DRILL_DATA: ModeDrillItem[] = [
  // ── voljeti ───────────────────────────────────────────────────────────────
  {
    mode: 'voljeti',
    q: 'Petra jako ____ plivati.',
    en: 'Petra really likes swimming.',
    opts: ['voli', 'volim', 'vole', 'volimo'],
    answer: 'voli',
    tip: 'Petra is ona, and the ona form of voljeti is voli. volim is "I like", vole is "they like", and volimo is "we like".',
  },
  {
    mode: 'voljeti',
    q: 'Mi pankeri ne ____ konvencionalnu odjeću.',
    en: 'We punks do not like conventional clothes.',
    opts: ['volimo', 'volite', 'vole', 'voli'],
    answer: 'volimo',
    tip: 'Mi takes -mo: ne volimo. volite is for vi, vole is for oni, and voli is for on or ona.',
  },
  {
    mode: 'voljeti',
    q: 'Moji prijatelji ____ disko.',
    en: 'My friends like the disco.',
    opts: ['vole', 'voli', 'volimo', 'volite'],
    answer: 'vole',
    tip: 'prijatelji are oni, and the oni form of voljeti ends in -e: vole. voli is for one person, volimo is "we like", and volite is "you like".',
  },
  {
    mode: 'voljeti',
    q: '____ li Vi hrvatsku kuhinju?',
    en: 'Do you like Croatian cooking?',
    opts: ['Volite', 'Voliš', 'Volim', 'Vole'],
    answer: 'Volite',
    tip: 'The polite Vi takes -te: Volite li Vi…? Voliš is for a friend (ti), Volim is "I like", and Vole is "they like".',
  },
  {
    mode: 'voljeti',
    q: 'Mariano ne voli ____.',
    cue: '(opera)',
    en: 'Mariano does not like opera.',
    opts: ['operu', 'opera', 'opere', 'operi'],
    answer: 'operu',
    tip: 'What you love or do not love is a plain object in the accusative, and a feminine noun in -a takes -u: operu. opera is the dictionary form, and opere and operi are other forms.',
  },
  {
    mode: 'voljeti',
    q: 'Silvija voli laganu ____.',
    cue: '(glazba)',
    en: 'Silvija likes soft music.',
    opts: ['glazbu', 'glazba', 'glazbe', 'glazbi'],
    answer: 'glazbu',
    tip: 'After voli the thing is an object, and glazba takes -u, like laganu in front of it: laganu glazbu. glazba is the dictionary form, and glazbe and glazbi are other forms.',
  },
  {
    mode: 'voljeti',
    q: 'Hrvoje voli ____.',
    cue: '(Silvija)',
    en: 'Hrvoje loves Silvija.',
    opts: ['Silviju', 'Silvija', 'Silviji', 'Silvije'],
    answer: 'Silviju',
    tip: 'A person you love is an object too, and a name in -a takes -u: Silviju. Silvija is the dictionary form, Silviji is the "to Silvija" form that goes with sviđati se, and Silvije is another form.',
  },
  {
    mode: 'voljeti',
    q: 'Volim ____.',
    cue: '(ova kravata)',
    en: 'I love this tie.',
    opts: ['ovu kravatu', 'ova kravata', 'ove kravate', 'ovoj kravati'],
    answer: 'ovu kravatu',
    tip: 'With voljeti the thing is an object, so both words take -u: ovu kravatu. "ova kravata" is the dictionary form, which goes with sviđa mi se, "ove kravate" is the plural, and "ovoj kravati" is another form.',
  },
  {
    mode: 'voljeti',
    q: 'Što znači "Jako volim plivati"?',
    opts: [
      'I really like swimming.',
      'I prefer swimming.',
      'I do not like swimming.',
      'I can swim well.',
    ],
    answer: 'I really like swimming.',
    tip: 'jako makes volim stronger: "I really like". "I prefer" would be više volim, "I do not like" would be ne volim, and "I can swim" would need znam or mogu.',
  },

  // ── svidjati ──────────────────────────────────────────────────────────────
  {
    mode: 'svidjati',
    q: 'Kupac: Ova kravata ____ se sviđa.',
    en: 'Customer: I like this tie.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'With sviđati se the person is "to me": mi. me is the object form ("me"), ja is the subject form ("I"), and moj means "my".',
  },
  {
    mode: 'svidjati',
    q: 'Tom voli boks. Boks ____ se sviđa.',
    en: 'Tom loves boxing. He likes boxing.',
    opts: ['mu', 'ga', 'joj', 'on'],
    answer: 'mu',
    tip: 'The thing is pleasing "to him": mu. ga is the object form ("him"), joj is "to her", and on is the subject form ("he").',
  },
  {
    mode: 'svidjati',
    q: 'Silvija voli laganu glazbu. Ta glazba ____ se sviđa.',
    en: 'Silvija loves soft music. She likes that music.',
    opts: ['joj', 'je', 'mu', 'ona'],
    answer: 'joj',
    tip: 'The music is pleasing "to her": joj. je is the object form ("her"), mu is "to him", and ona is the subject form ("she").',
  },
  {
    mode: 'svidjati',
    q: 'Sviđa ____ se ova glazba? — Da, lagana je.',
    cue: 'Hrvoje asks his girlfriend.',
    opts: ['ti', 'te', 'ga', 'tvoj'],
    answer: 'ti',
    tip: 'He asks whether the music is pleasing "to you", and to a girlfriend that is ti. te is the object form ("you"), ga means "him", and tvoj means "your".',
  },
  {
    mode: 'svidjati',
    q: 'Mi volimo Hrvatsku. Hrvatska ____ se sviđa.',
    en: 'We love Croatia. We like Croatia.',
    opts: ['nam', 'nas', 'naš', 'im'],
    answer: 'nam',
    tip: 'Croatia is pleasing "to us": nam. nas is the object form ("us"), naš means "our", and im is "to them".',
  },
  {
    mode: 'svidjati',
    q: 'Studenti vole Zagreb. Zagreb ____ se sviđa.',
    en: 'The students love Zagreb. They like Zagreb.',
    opts: ['im', 'ih', 'nam', 'oni'],
    answer: 'im',
    tip: 'Zagreb is pleasing "to them": im. ih is the object form ("them"), nam is "to us", and oni is the subject form ("they").',
  },
  {
    mode: 'svidjati',
    q: 'Bijele cipele mi se ____, ali su skupe.',
    en: 'I like the white shoes, but they are expensive.',
    opts: ['sviđaju', 'sviđa', 'sviđam', 'sviđamo'],
    answer: 'sviđaju',
    tip: 'The verb agrees with the thing liked, and cipele are several: sviđaju. sviđa is for one thing, and sviđam and sviđamo would make "I" or "we" the ones who are pleasing.',
  },
  {
    mode: 'svidjati',
    q: 'Cipele su udobne, ali model mi se ne ____.',
    en: 'The shoes are comfortable, but I do not like the style.',
    opts: ['sviđa', 'sviđaju', 'sviđam', 'sviđaš'],
    answer: 'sviđa',
    tip: 'The subject of this verb is model, one thing, so it is sviđa. sviđaju would agree with cipele, which belong to the first half of the sentence, sviđam is "I am pleasing", and sviđaš is "you are pleasing".',
  },
  {
    mode: 'svidjati',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: [
      'Sviđa mi se ovaj šal.',
      'Sviđam ovaj šal.',
      'Sviđa me se ovaj šal.',
      'Sviđaju mi se ovaj šal.',
    ],
    answer: 'Sviđa mi se ovaj šal.',
    tip: 'The scarf is the subject and you are mi: Sviđa mi se ovaj šal. "Sviđam" makes you the subject, me is the wrong form of "me", and sviđaju is for several things, not one scarf.',
  },

  // ── vise ──────────────────────────────────────────────────────────────────
  {
    mode: 'vise',
    q: 'Gordana ____ voli sunčanje nego plivanje.',
    en: 'Gordana prefers sunbathing to swimming.',
    opts: ['više', 'jako', 'puno', 'vrlo'],
    answer: 'više',
    tip: 'Preferring is više voljeti, and nego needs više before it: više voli sunčanje nego plivanje. jako, puno and vrlo only make the liking stronger; they cannot be followed by nego.',
  },
  {
    mode: 'vise',
    q: 'Više volim skijanje ____ nogomet.',
    en: 'I prefer skiing to soccer.',
    opts: ['nego', 'ili', 'kao', 'ali'],
    answer: 'nego',
    tip: 'The two things you compare are joined with nego: više volim skijanje nego nogomet. ili means "or", kao means "like / as", and ali means "but".',
  },
  {
    mode: 'vise',
    q: 'Više volim sok nego ____.',
    cue: '(voda)',
    en: 'I prefer juice to water.',
    opts: ['vodu', 'voda', 'vode', 'vodi'],
    answer: 'vodu',
    tip: 'Both things are objects of volim, so the one after nego is in the accusative too: vodu. voda is the dictionary form, and vode and vodi are other forms.',
  },
  {
    mode: 'vise',
    q: 'Znaš da ____ balet. Može u disko?',
    en: 'You know I do not like ballet. How about the disco?',
    opts: ['ne volim', 'ne voliš', 'ne voli', 'ne vole'],
    answer: 'ne volim',
    tip: 'The speaker is talking about his own taste, so the ja form: ne volim. ne voliš is "you do not like", ne voli is "he or she does not like", and ne vole is "they do not like".',
  },
  {
    mode: 'vise',
    q: 'Ne volim zimu. Zapravo, ____ zimu!',
    en: 'I do not like winter. Actually, I hate winter!',
    opts: ['mrzim', 'volim', 'više volim', 'želim'],
    answer: 'mrzim',
    tip: '"To hate" is mrziti: mrzim zimu. volim says the opposite, više volim means "I prefer", and želim means "I want".',
  },
  {
    mode: 'vise',
    q: 'Kamo ideš na ljetovanje: na more ili u planine? — ____',
    en: 'Where are you going for summer vacation: to the sea or to the mountains? — …',
    opts: ['Više volim more.', 'Više volim nego more.', 'Više sviđam more.', 'Više mi se more.'],
    answer: 'Više volim more.',
    tip: '"I prefer the sea" is Više volim more. nego needs a second thing after it, "sviđam" would make you the subject, and "Više mi se more" has lost its verb sviđa.',
  },
  {
    mode: 'vise',
    q: 'Sviđa mi se ____.',
    en: 'I like this dress.',
    opts: ['ova haljina', 'ovu haljinu', 'ove haljine', 'ovoj haljini'],
    answer: 'ova haljina',
    tip: 'With sviđati se the thing liked is the subject, so it stays in its dictionary form: ova haljina. "ovu haljinu" is the object form that goes with volim, "ove haljine" would need sviđaju, and "ovoj haljini" is another form.',
  },
  {
    mode: 'vise',
    q: 'Što znači "Više volim more nego planine"?',
    opts: [
      'I prefer the sea to the mountains.',
      'I prefer the mountains to the sea.',
      'I love the sea and the mountains.',
      'I like neither the sea nor the mountains.',
    ],
    answer: 'I prefer the sea to the mountains.',
    tip: 'What comes right after više volim is the thing you prefer (more), and what follows nego is the one that loses (planine). The second option swaps them, and there is no "and" and no negative in the sentence.',
  },
  {
    mode: 'vise',
    q: 'Što znači "Ne sviđa mi se model"?',
    opts: [
      'I do not like the style.',
      'The style does not suit him.',
      'I am not a model.',
      'You do not like the style.',
    ],
    answer: 'I do not like the style.',
    tip: 'mi is "to me", so the sentence says the style is not pleasing to me: "I do not like the style". "Him" would be mu, "you" would be ti, and "I am not" would be nisam.',
  },
];
