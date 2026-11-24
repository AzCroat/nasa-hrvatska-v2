// src/data/drills/a1/prepositionsPlaceDrill.ts
//
// A1 U AND NA: WHERE VS WHERE TO — the drill for the `prepositions-place` lesson (A1, 50).
//
// Follows Hrvatski za početnike 1, pages 47–48 and 53 for going ("Kamo idu turisti?" —
// "Turisti idu na Plitvice." · "Oni idu u grad. Oni idu na tenis." · "Ja idem u
// kazalište." · the choices u crkvu / na skijanje / na fakultet / na posao / u kino, and
// "akuzativne uloge: cilj — Idem u grad.") and pages 64–66 and 68 for being there ("Na
// stolu su knjige. U ormaru je odjeća." · "Gdje je Jelsa?" — "Na Hvaru." · "Gdje je
// Sljeme?" — "Na Medvednici."). The book teaches the two halves in separate units, the
// accusative with ići and the locative with rooms and towns; the lesson sets them side by
// side as kamo? against gdje?, and that contrast is what the drill practices. Singular
// only, and no country names in -ska (u Hrvatskoj), which the book adds on page 69.
//
// Three modes:
//   kamo   — going there: u / na + accusative
//   gdje   — being there: u / na + locative
//   uIliNa — u or na, and kamo? or gdje?

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PREPOSITIONS_PLACE_MODE_LABELS: Record<string, string> = {
  kamo: '➡️ Kamo? U grad',
  gdje: '📍 Gdje? U gradu',
  uIliNa: '🔀 U ili na?',
};

export const PREPOSITIONS_PLACE_DRILL_DATA: ModeDrillItem[] = [
  // ── kamo ──────────────────────────────────────────────────────────────────
  {
    mode: 'kamo',
    q: 'Sutra želim ići u ____.',
    en: 'Tomorrow I want to go to the theater.',
    opts: ['kazalište', 'kazalištu', 'kazališta', 'kazalištem'],
    answer: 'kazalište',
    tip: 'ići is movement toward a place, so u takes the accusative, and a neuter noun does not change: u kazalište. kazalištu is the form for being there, and kazališta and kazalištem are other forms.',
  },
  {
    mode: 'kamo',
    q: 'Za vikend idemo na ____.',
    cue: '(Korčula)',
    en: 'For the weekend we are going to Korčula.',
    opts: ['Korčulu', 'Korčuli', 'Korčula', 'Korčule'],
    answer: 'Korčulu',
    tip: 'Going somewhere takes the accusative, and a feminine name in -a takes -u: na Korčulu. Korčuli is the form for being there, Korčula is the dictionary form, and Korčule is another form.',
  },
  {
    mode: 'kamo',
    q: 'U nedjelju idemo u ____.',
    cue: '(crkva)',
    en: 'On Sunday we are going to church.',
    opts: ['crkvu', 'crkvi', 'crkva', 'crkve'],
    answer: 'crkvu',
    tip: 'idemo is movement, so the place is in the accusative: u crkvu. u crkvi means "in church", already there, crkva is the dictionary form, and crkve is another form.',
  },
  {
    mode: 'kamo',
    q: 'Svaki dan idem na ____.',
    en: 'Every day I go to the university.',
    opts: ['fakultet', 'fakultetu', 'fakulteta', 'fakultetom'],
    answer: 'fakultet',
    tip: 'Going takes the accusative, and a masculine thing does not change: na fakultet. na fakultetu means "at the university", already there, and fakulteta and fakultetom are other forms.',
  },
  {
    mode: 'kamo',
    q: 'Kamo ideš? — U ____.',
    cue: '(trgovina)',
    en: 'Where are you going? — To the store.',
    opts: ['trgovinu', 'trgovini', 'trgovina', 'trgovine'],
    answer: 'trgovinu',
    tip: 'Kamo? asks where to, and the answer is in the accusative: u trgovinu. u trgovini answers Gdje?, trgovina is the dictionary form, and trgovine is another form.',
  },
  {
    mode: 'kamo',
    q: 'Moram ići na ____.',
    en: 'I have to go to work.',
    opts: ['posao', 'poslu', 'posla', 'poslom'],
    answer: 'posao',
    tip: 'On the way to work is the accusative, and posao does not change: na posao. na poslu means "at work", already there, and posla and poslom are other forms.',
  },
  {
    mode: 'kamo',
    q: 'Mariano voli plesati. Navečer ide u ____.',
    en: 'Mariano likes to dance. In the evening he goes to the disco.',
    opts: ['disko', 'disku', 'diska', 'diskom'],
    answer: 'disko',
    tip: 'ide shows movement, so the accusative: u disko, unchanged. u disku means "in the disco", where he already is, and diska and diskom are other forms.',
  },
  {
    mode: 'kamo',
    q: 'Ana je u školi. I Marko ide u ____.',
    en: 'Ana is at school. Marko is going to school too.',
    opts: ['školu', 'škola', 'škole', 'školom'],
    answer: 'školu',
    tip: 'Ana is already there (u školi), but Marko is on his way, and going takes the accusative: u školu. škola is the dictionary form, and škole and školom are other forms.',
  },
  {
    mode: 'kamo',
    q: 'Kamo idemo? Točna rečenica je:',
    en: 'Where are we going? The correct sentence is:',
    opts: ['Idemo na izlet.', 'Idemo na izletu.', 'Idemo u izletu.', 'Mi smo na izlet.'],
    answer: 'Idemo na izlet.',
    tip: 'Going takes the accusative: Idemo na izlet. "na izletu" and "u izletu" use the form for being there after a verb of going, and "Mi smo na izlet" uses the going form after biti.',
  },

  // ── gdje ──────────────────────────────────────────────────────────────────
  {
    mode: 'gdje',
    q: 'Arena je u ____.',
    cue: '(Pula)',
    en: 'The Arena is in Pula.',
    opts: ['Puli', 'Pulu', 'Pula', 'Pule'],
    answer: 'Puli',
    tip: 'Nothing is moving, so u takes the locative, and a feminine name in -a takes -i: u Puli. u Pulu would mean "to Pula", Pula is the dictionary form, and Pule is another form.',
  },
  {
    mode: 'gdje',
    q: 'Zlatni rat je na ____.',
    cue: '(Brač)',
    en: 'Zlatni rat is on Brač.',
    opts: ['Braču', 'Brač', 'Brača', 'Bračem'],
    answer: 'Braču',
    tip: 'Being on an island is na + locative, and a masculine name takes -u: na Braču. na Brač would mean going there, and Brača and Bračem are other forms.',
  },
  {
    mode: 'gdje',
    q: 'Zagrepčani su u subotu na ____.',
    cue: '(Medvednica)',
    en: 'On Saturday the people of Zagreb are on Medvednica.',
    opts: ['Medvednici', 'Medvednicu', 'Medvednica', 'Medvednice'],
    answer: 'Medvednici',
    tip: 'su says where they are, so the locative: na Medvednici. na Medvednicu is for going there, Medvednica is the dictionary form, and Medvednice is another form.',
  },
  {
    mode: 'gdje',
    q: 'Studenti su na ____.',
    cue: '(predavanje)',
    en: 'The students are at a lecture.',
    opts: ['predavanju', 'predavanje', 'predavanja', 'predavanjem'],
    answer: 'predavanju',
    tip: 'Being there is the locative, and a neuter noun takes -u: na predavanju. na predavanje is for going to it, and predavanja and predavanjem are other forms.',
  },
  {
    mode: 'gdje',
    q: 'Tata je još na ____.',
    cue: '(posao)',
    en: 'Dad is still at work.',
    opts: ['poslu', 'posao', 'posla', 'poslom'],
    answer: 'poslu',
    tip: 'He is there, not on his way, so the locative: na poslu (posao loses its a). na posao is for going to work, and posla and poslom are other forms.',
  },
  {
    mode: 'gdje',
    q: 'Čokolada je na ____.',
    cue: '(kompjutor)',
    en: 'The chocolate is on the computer.',
    opts: ['kompjutoru', 'kompjutor', 'kompjutora', 'kompjutorom'],
    answer: 'kompjutoru',
    tip: 'Where something lies is na + locative, and a masculine noun takes -u: na kompjutoru. na kompjutor would mean putting it there, and kompjutora and kompjutorom are other forms.',
  },
  {
    mode: 'gdje',
    q: 'Mama kupuje voće na ____.',
    cue: '(tržnica)',
    en: 'Mom is buying fruit at the market.',
    opts: ['tržnici', 'tržnicu', 'tržnica', 'tržnice'],
    answer: 'tržnici',
    tip: 'Buying happens in a place, with no movement toward it, so the locative: na tržnici. na tržnicu is for going to the market, tržnica is the dictionary form, and tržnice is another form.',
  },
  {
    mode: 'gdje',
    q: 'Marko ide u kino, a Ana je već u ____.',
    en: 'Marko is going to the movie theater, and Ana is already there.',
    opts: ['kinu', 'kina', 'kinom', 'kinima'],
    answer: 'kinu',
    tip: 'Ana is already there, and being there is the locative: u kinu. kina and kinom are other forms of the word, and kinima is a plural form; none of them says where someone is after u.',
  },
  {
    mode: 'gdje',
    q: 'Gdje smo večeras? Točna rečenica je:',
    en: 'Where are we this evening? The correct sentence is:',
    opts: [
      'Večeras smo u restoranu.',
      'Večeras smo u restoran.',
      'Večeras smo na restoran.',
      'Večeras idemo u restoranu.',
    ],
    answer: 'Večeras smo u restoranu.',
    tip: 'biti says where you are, so the locative: u restoranu. "u restoran" is the form for going there, restoran does not take na, and "idemo u restoranu" puts the being-there form after a verb of going.',
  },

  // ── uIliNa ────────────────────────────────────────────────────────────────
  {
    mode: 'uIliNa',
    q: 'Večeras idemo ____ koncert.',
    en: 'This evening we are going to a concert.',
    opts: ['na', 'u', 'iz', 'o'],
    answer: 'na',
    tip: 'Events take na: na koncert, like na izlet and na tenis. u is for going into a building or a town, iz means "out of", and o means "about".',
  },
  {
    mode: 'uIliNa',
    q: 'Idemo ____ kafić, na kavu.',
    en: 'We are going to a café, for a coffee.',
    opts: ['u', 'na', 'iz', 'o'],
    answer: 'u',
    tip: 'A café is a room you go into, so u: u kafić. na is for the event or the activity (na kavu), iz means "out of", and o means "about".',
  },
  {
    mode: 'uIliNa',
    q: 'Studenti su ____ fakultetu.',
    en: 'The students are at the university.',
    opts: ['na', 'u', 'iz', 'za'],
    answer: 'na',
    tip: 'fakultet goes with na: na fakultet, na fakultetu. u is not the word this place takes, iz would need another ending and means "out of", and za means "for".',
  },
  {
    mode: 'uIliNa',
    q: 'Turisti su ____ hotelu.',
    en: 'The tourists are at the hotel.',
    opts: ['u', 'na', 'iz', 'za'],
    answer: 'u',
    tip: 'A hotel is a building you are inside, so u: u hotelu. na hotelu would mean on top of it, iz means "out of", and za means "for".',
  },
  {
    mode: 'uIliNa',
    q: '____ ideš? — Na posao.',
    opts: ['Kamo', 'Gdje', 'Tko', 'Kada'],
    answer: 'Kamo',
    tip: 'ideš and the accusative na posao show a destination, so the question is Kamo?, "where to". Gdje? asks where someone is and would get na poslu, Tko asks who, and Kada asks when.',
  },
  {
    mode: 'uIliNa',
    q: '____ si? — Na poslu.',
    opts: ['Gdje', 'Kamo', 'Što', 'Odakle'],
    answer: 'Gdje',
    tip: 'si and the locative na poslu say where someone is, so the question is Gdje? Kamo? asks where to and would get na posao, Što asks what, and Odakle asks where from.',
  },
  {
    mode: 'uIliNa',
    q: 'Kamo idete? — ____',
    opts: ['Na otok Brač.', 'Na otoku Braču.', 'U otok Brač.', 'U otoku Braču.'],
    answer: 'Na otok Brač.',
    tip: 'Kamo? needs the accusative, and an island takes na: Na otok Brač. "Na otoku Braču" answers Gdje?, and u is not used with otok in either form.',
  },
  {
    mode: 'uIliNa',
    q: 'Gdje su studenti? — ____',
    opts: ['Na skijanju.', 'Na skijanje.', 'U skijanju.', 'U skijanje.'],
    answer: 'Na skijanju.',
    tip: 'Gdje? needs the locative, and an activity takes na: Na skijanju. "Na skijanje" answers Kamo?, and u is not used with skijanje in either form.',
  },
  {
    mode: 'uIliNa',
    q: 'Što znači "Idem u grad, a Ana je već u gradu"?',
    opts: [
      'I am going to town, and Ana is already in town.',
      'I am in town, and Ana is already going to town.',
      'I am going out of town, and Ana is in town.',
      'Ana and I are going to town.',
    ],
    answer: 'I am going to town, and Ana is already in town.',
    tip: 'Idem u grad (accusative) is movement toward town; je u gradu (locative) is being there. The second option swaps the two, "out of" would be iz, and the last one ignores "je već u gradu".',
  },
];
