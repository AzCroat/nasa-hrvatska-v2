// src/data/drills/a1/bodyHealthDrill.ts
//
// A1 THE BODY AND FEELING UNWELL — the drill for the `body-health` lesson (A1, 87).
//
// Follows Hrvatski za početnike 1, pages 123–125 ("Zdravlje i sport"): the dialogue "Kod
// liječnika" ("Bolesna sam. Sve me boli. Imam visoku temperaturu…" – "Što Vas boli?"), the
// note "boli me, bole me", the picture pages "Tijelo i njegovi dijelovi" and "Lice", the
// notes oko, uho → oči, uši and usta, leđa (plural only), the row "Boli ____ glava. (ja)"
// and the dialogue "U ordinaciji" ("ne osjećam se dobro"). As in the boljeti drill, a dative
// form (Boli mi…) is never offered as a wrong option, because natives say it.
//
// Three modes:
//   tijelo   — the parts of the body, and the ones that are always plural
//   boli     — the body part is the subject: boli me, bole me
//   lijecnik — at the doctor's and the pharmacy

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const BODY_HEALTH_MODE_LABELS: Record<string, string> = {
  tijelo: '🧍 Tijelo',
  boli: '🤕 Boli me, bole me',
  lijecnik: '🩺 Kod liječnika',
};

export const BODY_HEALTH_DRILL_DATA: ModeDrillItem[] = [
  // ── tijelo ────────────────────────────────────────────────────────────────
  {
    mode: 'tijelo',
    q: 'Što znači "grlo"?',
    opts: ['throat', 'neck', 'stomach', 'back'],
    answer: 'throat',
    tip: 'grlo is the throat, the part that is sore when you have a cold. The neck is vrat, the stomach is trbuh, and the back is leđa.',
  },
  {
    mode: 'tijelo',
    q: 'Što znači "leđa"?',
    opts: ['back', 'legs', 'ears', 'teeth'],
    answer: 'back',
    tip: 'leđa is the back, and the word is always plural. Legs are noge, ears are uši, and teeth are zubi.',
  },
  {
    mode: 'tijelo',
    q: 'Što znači "noga"?',
    opts: ['leg or foot', 'arm or hand', 'knee', 'nose'],
    answer: 'leg or foot',
    tip: 'noga covers both the leg and the foot, just as ruka covers the arm and the hand. The knee is koljeno, and the nose is nos.',
  },
  {
    mode: 'tijelo',
    q: 'Koji dio tijela NIJE na glavi?',
    en: 'Which part of the body is NOT on the head?',
    opts: ['koljeno', 'uho', 'nos', 'usta'],
    answer: 'koljeno',
    tip: 'koljeno is the knee, which is on the leg. uho (ear), nos (nose) and usta (mouth) are all on the head.',
  },
  {
    mode: 'tijelo',
    q: 'Ovo je uho. Ovo su ____.',
    en: 'This is an ear. These are ears.',
    opts: ['uši', 'uha', 'uhi', 'uhovi'],
    answer: 'uši',
    tip: 'uho is neuter, but its plural is the separate form uši, like oko → oči. uha follows the regular neuter rule, and uhi and uhovi use masculine endings.',
  },
  {
    mode: 'tijelo',
    q: 'Njezine oči su ____.',
    en: 'Her eyes are blue.',
    opts: ['plave', 'plava', 'plavi', 'plavo'],
    answer: 'plave',
    tip: 'oko is neuter, but oči is a feminine plural, as njezine shows, so the color is plave. plava is the neuter plural or feminine singular, plavi is masculine plural, and plavo is singular.',
  },
  {
    mode: 'tijelo',
    q: 'Usta su ____.',
    en: 'The mouth is small.',
    opts: ['mala', 'malo', 'male', 'mali'],
    answer: 'mala',
    tip: 'usta is a neuter word that exists only in the plural, so it takes su and the neuter plural adjective: mala. malo is singular, male is feminine plural, and mali is masculine.',
  },
  {
    mode: 'tijelo',
    q: 'Koja je riječ uvijek u množini?',
    en: 'Which word is always plural?',
    opts: ['leđa', 'glava', 'noga', 'ruka'],
    answer: 'leđa',
    tip: 'leđa has no singular: even one back is "leđa", with a plural verb. glava, noga and ruka are ordinary singular nouns with the plurals glave, noge and ruke.',
  },
  {
    mode: 'tijelo',
    q: 'Desna ruka i ____ ruka.',
    en: 'The right hand and the left hand.',
    opts: ['lijeva', 'lijevo', 'lijevi', 'lijevu'],
    answer: 'lijeva',
    tip: 'ruka is feminine, so "left" matches desna: lijeva ruka. lijevo is the neuter form (and the direction word), lijevi is masculine, and lijevu is the object form.',
  },

  // ── boli ──────────────────────────────────────────────────────────────────
  {
    mode: 'boli',
    q: '____ me glava.',
    en: 'My head hurts.',
    opts: ['Boli', 'Bole', 'Bolim', 'Boliš'],
    answer: 'Boli',
    tip: 'The head is the subject, and it is one thing, so the verb is boli. Bole is for several things, and Bolim and Boliš make "I" or "you" the subject.',
  },
  {
    mode: 'boli',
    q: 'Jako me ____ leđa.',
    en: 'My back hurts a lot.',
    opts: ['bole', 'boli', 'bolim', 'bolimo'],
    answer: 'bole',
    tip: 'leđa is always plural, so the verb is plural too: bole. boli is for one thing, and bolim and bolimo count the person instead of the body part.',
  },
  {
    mode: 'boli',
    q: 'Baku ____ noge.',
    en: "Grandma's legs hurt.",
    opts: ['bole', 'boli', 'bolim', 'boliš'],
    answer: 'bole',
    tip: 'The verb counts the body part, not the person: noge is plural, so bole. boli would go with one leg (noga), and bolim and boliš are the ja and ti forms.',
  },
  {
    mode: 'boli',
    q: 'Danas me boli ____.',
    en: 'My throat hurts today.',
    opts: ['grlo', 'grla', 'grlu', 'grlom'],
    answer: 'grlo',
    tip: 'The body part is the subject of boli, so it stays in its dictionary form: grlo. grla, grlu and grlom are other forms of the word and cannot be the subject here.',
  },
  {
    mode: 'boli',
    q: 'Navečer me bole ____.',
    en: 'My eyes hurt in the evening.',
    opts: ['oči', 'oko', 'oka', 'očima'],
    answer: 'oči',
    tip: 'bole is plural, so the subject must be plural: oči. oko is one eye and would need boli, and oka and očima are not subject forms.',
  },
  {
    mode: 'boli',
    q: 'Kako se kaže "My head hurts"?',
    opts: ['Boli me glava.', 'Ja bolim glavu.', 'Me boli glava.', 'Glava bolim.'],
    answer: 'Boli me glava.',
    tip: 'The head does the hurting and you are the object: Boli me glava. "Ja bolim glavu" copies the English, "Me boli glava" starts with the short word me, which cannot come first, and "Glava bolim" mixes the two.',
  },
  {
    mode: 'boli',
    q: 'Boli ____ zub.',
    en: 'His tooth hurts.',
    opts: ['ga', 'on', 'ih', 'se'],
    answer: 'ga',
    tip: 'The person is the object, in the short form: ga for him. on is the subject form, ih means "them", and se is the reflexive word, which boljeti does not use.',
  },
  {
    mode: 'boli',
    q: 'Što ____ boli?',
    cue: 'The doctor is asking you, formally.',
    en: 'What hurts?',
    opts: ['Vas', 'Vi', 'ti', 'ja'],
    answer: 'Vas',
    tip: 'The person in pain is the object, and the formal object form is Vas: Što Vas boli? Vi, ti and ja are subject forms, and the subject here is što.',
  },
  {
    mode: 'boli',
    q: 'Sve me ____.',
    en: 'Everything hurts.',
    opts: ['boli', 'bole', 'bolim', 'bolimo'],
    answer: 'boli',
    tip: 'sve ("everything") counts as one thing, so the verb is singular: Sve me boli. bole needs a plural subject such as noge, and bolim and bolimo make the person the subject.',
  },

  // ── lijecnik ──────────────────────────────────────────────────────────────
  {
    mode: 'lijecnik',
    q: 'Ne ____ se dobro.',
    en: 'I do not feel well.',
    opts: ['osjećam', 'osjećaš', 'osjeća', 'osjećaju'],
    answer: 'osjećam',
    tip: 'You are talking about yourself, so the verb ends in -m: Ne osjećam se dobro. osjećaš is ti, osjeća is on/ona, and osjećaju is oni.',
  },
  {
    mode: 'lijecnik',
    q: 'Imam visoku ____.',
    en: 'I have a high temperature.',
    opts: ['temperaturu', 'temperatura', 'temperature', 'temperaturi'],
    answer: 'temperaturu',
    tip: 'What you have is the object, and visoku already shows the ending: temperaturu. temperatura is the dictionary form, and temperature and temperaturi are other forms.',
  },
  {
    mode: 'lijecnik',
    q: '____ sam. Sve me boli.',
    cue: 'Ana (a woman) is speaking.',
    en: 'I am sick. Everything hurts.',
    opts: ['Bolesna', 'Bolestan', 'Bolesno', 'Bolesni'],
    answer: 'Bolesna',
    tip: 'A woman says Bolesna sam: the adjective matches the speaker, and bolestan loses its a and t. Bolestan is what a man says, Bolesno is neuter, and Bolesni is plural.',
  },
  {
    mode: 'lijecnik',
    q: '____ sam i jako kašljem.',
    cue: 'Marko (a man) is speaking.',
    en: 'I have a cold and I am coughing a lot.',
    opts: ['Prehlađen', 'Prehlađena', 'Prehlađeno', 'Prehlađeni'],
    answer: 'Prehlađen',
    tip: 'A man says Prehlađen sam, with no ending. Prehlađena is what a woman says, Prehlađeno is neuter, and Prehlađeni is for several people.',
  },
  {
    mode: 'lijecnik',
    q: 'Idem u ____ po lijek.',
    en: 'I am going to the pharmacy for medicine.',
    opts: ['ljekarnu', 'ljekarna', 'ljekarni', 'ljekarne'],
    answer: 'ljekarnu',
    tip: 'After idem u the place you are heading to takes -u: u ljekarnu. ljekarna is the dictionary form, u ljekarni says where you already are, and ljekarne is another form.',
  },
  {
    mode: 'lijecnik',
    q: 'Sada sam kod ____.',
    en: "Right now I am at the doctor's.",
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    tip: 'kod is followed by the genitive: kod liječnika. liječnik is the dictionary form, liječniku goes with k (toward the doctor), and liječnikom goes with s.',
  },
  {
    mode: 'lijecnik',
    q: 'Boli me zub. Moram ići k ____.',
    en: 'My tooth hurts. I have to go to the doctor.',
    opts: ['liječniku', 'liječnika', 'liječnik', 'liječnikom'],
    answer: 'liječniku',
    tip: 'k (toward a person) takes the dative: k liječniku. liječnika is the form after kod, liječnik is the dictionary form, and liječnikom goes with s.',
  },
  {
    mode: 'lijecnik',
    q: 'Morate piti puno ____.',
    en: 'You must drink a lot of tea.',
    opts: ['čaja', 'čaj', 'čaju', 'čajem'],
    answer: 'čaja',
    tip: 'After puno (a lot of) the noun is in the genitive: puno čaja. čaj is the dictionary form, and čaju and čajem are forms used after other words.',
  },
  {
    mode: 'lijecnik',
    q: 'Ovo je ____ za antibiotik.',
    cue: 'The doctor hands you a piece of paper for the pharmacy.',
    opts: ['recept', 'račun', 'lijek', 'zub'],
    answer: 'recept',
    tip: 'The paper a doctor writes for the pharmacy is a recept. račun is a bill, lijek is the medicine itself, and zub is a tooth.',
  },
  {
    mode: 'lijecnik',
    q: 'Imate li nešto ____ glavobolju?',
    en: 'Do you have something for a headache?',
    opts: ['za', 'kod', 'k', 'iz'],
    answer: 'za',
    tip: 'glavobolju is the object form, and the preposition that takes it and means "for" is za. kod and iz need the genitive, and k needs the dative and means "toward".',
  },
];
