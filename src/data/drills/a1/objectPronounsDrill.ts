// src/data/drills/a1/objectPronounsDrill.ts
//
// A1 OBJECT PRONOUNS — the drill for the `object-pronouns` lesson (A1, 65).
//
// Hrvatski za početnike 1 has no chapter on object pronouns. It only uses them in scattered
// places, and this drill gathers those: pages 9–11 ("Drago mi je."), page 51 ("Lične
// zamjenice u akuzativu": me, te, ga, je/ju, nas, vas, ih, with "Zanima me studij." ·
// "Zanimaju ga kompjutori." · "Zanima nas film."), page 63 ("imenica → lična zamjenica":
// "Moram probati haljinu. → Moram je probati."), pages 128–129 (unit "Volim te!" ·
// "Napisat ću joj poruku."), page 130 ("Dativ ličnih zamjenica": mi, ti, mu, joj, nam, vam,
// im, with "Hladno mi je!" · "Vruće mu je!"), page 133 ("Molim te") and page 139 ("Drago mi
// je što te vidim").
//
// Where the book and the lesson differ: the book gives the two tables and example
// sentences, but never states the second-position rule for these pronouns, never puts a
// dative and an accusative pronoun side by side ("Dajem ti ga."), and never explains ju
// before the auxiliary je ("Vidio ju je."). Those three points come from the lesson. The
// book also drills the long forms (meni, njemu, njoj) next to the short ones; the lesson
// asks for the short forms, so the long forms appear here only as wrong options.
//
// Three modes:
//   akuzativ — the short accusative forms: me, te, ga, je, nas, vas, ih
//   dativ    — the short dative forms: mi, ti, mu, joj, nam, vam, im
//   mjesto   — where the small words go: second position, dative before accusative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const OBJECT_PRONOUNS_MODE_LABELS: Record<string, string> = {
  akuzativ: '👀 Vidim ga',
  dativ: '✉️ Pišem mu',
  mjesto: '🧩 Dajem ti ga',
};

export const OBJECT_PRONOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── akuzativ ──────────────────────────────────────────────────────────────
  {
    mode: 'akuzativ',
    q: 'Luka je moj susjed. Vidim ____ svaki dan.',
    en: 'Luka is my neighbor. I see him every day.',
    opts: ['ga', 'mu', 'je', 'ih'],
    answer: 'ga',
    tip: 'vidjeti takes a direct object, and the short accusative for a man is ga: Vidim ga. mu is the dative ("to him"), je stands for a woman, and ih is for several people.',
  },
  {
    mode: 'akuzativ',
    q: 'Imam novu jaknu. Želim ____ nositi sutra.',
    en: 'I have a new jacket. I want to wear it tomorrow.',
    opts: ['je', 'ga', 'joj', 'ih'],
    answer: 'je',
    tip: 'jakna is feminine, so "it" is the feminine short accusative je: Želim je nositi. ga stands for a masculine or neuter noun, joj is the dative ("to her"), and ih is for several things.',
  },
  {
    mode: 'akuzativ',
    q: 'Marko i ja volimo filmove. Zanima ____ hrvatski film.',
    en: 'Marko and I love movies. Croatian film interests us.',
    opts: ['nas', 'nam', 'mi', 'nama'],
    answer: 'nas',
    tip: 'zanimati takes the accusative of the person who is interested, and for "us" that is nas: Zanima nas film. nam and nama are dative forms, and mi is the subject form "we".',
  },
  {
    mode: 'akuzativ',
    q: 'Volim te.',
    cue: 'What does it mean?',
    opts: ['I love you.', 'I love him.', 'You love me.', 'I love them.'],
    answer: 'I love you.',
    tip: 'Volim is the ja form, so "I" is the one who loves, and te is the short accusative of ti: "I love you." "I love him" is Volim ga, "You love me" is Voliš me, and "I love them" is Volim ih.',
  },
  {
    mode: 'akuzativ',
    q: 'Gdje su moji ključevi? Ne vidim ____.',
    en: 'Where are my keys? I do not see them.',
    opts: ['ih', 'im', 'ga', 'oni'],
    answer: 'ih',
    tip: 'ključevi are several things, so the short accusative is ih: Ne vidim ih. im is the dative ("to them"), ga stands for one masculine thing, and oni is the subject form.',
  },
  {
    mode: 'akuzativ',
    q: 'Kako se kaže: "Ana knows me well"?',
    opts: [
      'Ana me dobro poznaje.',
      'Ana mi dobro poznaje.',
      'Ana ja dobro poznaje.',
      'Me Ana dobro poznaje.',
    ],
    answer: 'Ana me dobro poznaje.',
    tip: 'poznavati takes the accusative, so "me" is me, right after the first word: Ana me dobro poznaje. mi is the dative ("to me"), ja is the subject form, and a short form like me can never open a sentence.',
  },
  {
    mode: 'akuzativ',
    lead: 'Čekam Mariju u kafiću.',
    q: 'Čekam ____ u kafiću.',
    cue: 'Say it again without the name.',
    opts: ['je', 'ga', 'joj', 'ona'],
    answer: 'je',
    tip: 'Mariju is a feminine direct object, so it becomes the short accusative je: Čekam je u kafiću. ga stands for a man, joj is the dative ("to her"), and ona is the subject form.',
  },
  {
    mode: 'akuzativ',
    q: 'Halo, mama? Ne čujem ____ dobro.',
    en: 'Hello, Mom? I cannot hear you well.',
    opts: ['te', 'ti', 'tebi', 'mu'],
    answer: 'te',
    tip: 'čuti takes a direct object, and the short accusative of ti is te: Ne čujem te. ti and tebi are dative forms ("to you"), and mu means "to him".',
  },
  {
    mode: 'akuzativ',
    q: 'Dobar dan, gospodine Horvat. Mogu li ____ nešto pitati?',
    en: 'Hello, Mr. Horvat. May I ask you something?',
    opts: ['vas', 'vam', 'vi', 'te'],
    answer: 'vas',
    tip: 'pitati takes the accusative of the person you ask, and you say Vi to Mr. Horvat, so it is vas. vam is the dative, vi is the subject form, and te is for someone you call ti.',
  },

  // ── dativ ─────────────────────────────────────────────────────────────────
  {
    mode: 'dativ',
    q: 'Baka ima težak kovčeg. Pomažem ____.',
    en: 'Grandma has a heavy suitcase. I am helping her.',
    opts: ['joj', 'je', 'ju', 'ona'],
    answer: 'joj',
    tip: 'pomagati takes the dative, and the short dative for a woman is joj: Pomažem joj. je and ju are accusative forms ("her" as a direct object), and ona is the subject form.',
  },
  {
    mode: 'dativ',
    q: 'Nemam jaknu. Hladno ____ je.',
    en: 'I do not have a jacket. I am cold.',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'Croatian says "it is cold to me", with the short dative: Hladno mi je. me and mene are accusative forms, and ja is the subject form, which this pattern does not use.',
  },
  {
    mode: 'dativ',
    q: 'Luka je na moru. Vruće ____ je.',
    en: 'Luka is at the seaside. He is hot.',
    opts: ['mu', 'ga', 'on', 'joj'],
    answer: 'mu',
    tip: 'Feelings like vruće and hladno take the dative of the person: Vruće mu je. ga is the accusative, on is the subject form, and joj would be about a woman.',
  },
  {
    mode: 'dativ',
    q: 'Hvala ____, gospođo Kovač!',
    en: 'Thank you, Mrs. Kovač!',
    opts: ['vam', 'vas', 'vi', 'te'],
    answer: 'vam',
    tip: 'hvala takes the dative ("thanks to you"), and you say Vi to Mrs. Kovač: Hvala vam. vas is the accusative, vi is the subject form, and te is the accusative for someone you call ti.',
  },
  {
    mode: 'dativ',
    q: 'Moja baka živi u Osijeku. Poslat ću ____ razglednicu.',
    en: 'My grandma lives in Osijek. I will send her a postcard.',
    opts: ['joj', 'je', 'mu', 'nju'],
    answer: 'joj',
    tip: 'The postcard is the direct object and grandma is the one who receives it, so she is in the dative: Poslat ću joj razglednicu. je and nju are accusative forms, and mu means "to him".',
  },
  {
    mode: 'dativ',
    q: 'Moji roditelji žive u Americi. Pišem ____ svaki tjedan.',
    en: 'My parents live in America. I write to them every week.',
    opts: ['im', 'ih', 'njih', 'oni'],
    answer: 'im',
    tip: 'You write TO someone, so pisati takes the dative, and for "them" the short form is im: Pišem im. ih and njih are accusative forms, and oni is the subject form.',
  },
  {
    mode: 'dativ',
    q: 'Konobar nam donosi kavu.',
    cue: 'Who is the coffee for?',
    opts: ['For us', 'For me', 'For them', 'For you'],
    answer: 'For us',
    tip: 'nam is the short dative of mi (we): the waiter is bringing coffee to us. "For me" would be mi, "for them" im, and "for you" ti or vam.',
  },
  {
    mode: 'dativ',
    q: 'Kako se kaže: "The teacher is explaining the rule to him"?',
    opts: [
      'Profesorica mu objašnjava pravilo.',
      'Profesorica ga objašnjava pravilo.',
      'Profesorica on objašnjava pravilo.',
      'Profesorica objašnjava pravilo mu.',
    ],
    answer: 'Profesorica mu objašnjava pravilo.',
    tip: 'The rule is the direct object and "to him" is the dative mu, in second position: Profesorica mu objašnjava pravilo. ga is the accusative, on is the subject form, and a short form cannot wait until the end of the sentence.',
  },
  {
    mode: 'dativ',
    q: 'Sretan rođendan! Želim ____ sve najbolje.',
    en: 'Happy birthday! I wish you all the best.',
    opts: ['ti', 'te', 'tebe', 'tvoj'],
    answer: 'ti',
    tip: 'You wish something TO someone, so the person is in the dative: Želim ti sve najbolje. te and tebe are accusative forms, and tvoj means "your".',
  },
  {
    mode: 'dativ',
    lead: 'Pomažem bratu.',
    q: 'Pomažem ____.',
    cue: 'Say it again without the noun.',
    opts: ['mu', 'ga', 'joj', 'on'],
    answer: 'mu',
    tip: 'bratu is a masculine dative, so it becomes the short dative mu: Pomažem mu. ga is the accusative, which pomagati does not take, joj is for a woman, and on is the subject form.',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Kako se kaže: "Today I am waiting for him in town"?',
    opts: [
      'Danas ga čekam u gradu.',
      'Ga danas čekam u gradu.',
      'Danas čekam u gradu ga.',
      'Danas čekam ga u gradu.',
    ],
    answer: 'Danas ga čekam u gradu.',
    tip: 'The short pronoun goes in second position, right after the first word: Danas ga čekam u gradu. It can never open the sentence, and it cannot slide to third place or to the end.',
  },
  {
    mode: 'mjesto',
    q: 'Ana radi u banci. Ja ____ dobro.',
    en: 'Ana works at a bank. I know her well.',
    opts: ['je poznajem', 'poznajem je', 'joj poznajem', 'poznajem ona'],
    answer: 'je poznajem',
    tip: 'Ja is the first word, so the short pronoun comes right after it, before the verb: Ja je poznajem dobro. "Ja poznajem je" pushes it to third place, joj is the dative, and ona is the subject form.',
  },
  {
    mode: 'mjesto',
    q: 'Imaš li moj rječnik? — Da, odmah ____ dajem.',
    en: 'Do you have my dictionary? — Yes, I am giving it to you right away.',
    opts: ['ti ga', 'ga ti', 'te ga', 'ti je'],
    answer: 'ti ga',
    tip: 'When two short pronouns meet, the dative comes before the accusative: ti ga (to you + it). "ga ti" is the English order, te is an accusative form, and je would stand for a feminine noun, but rječnik is masculine.',
  },
  {
    mode: 'mjesto',
    q: 'Marko treba olovku. Dajem ____.',
    en: 'Marko needs a pencil. I am giving it to him.',
    opts: ['mu je', 'je mu', 'ga je', 'mu ga'],
    answer: 'mu je',
    tip: 'To whom comes before what: the dative mu (to Marko), then the accusative je (olovka is feminine). "je mu" has the order backward, "ga je" has no dative at all, and "mu ga" would stand for a masculine thing.',
  },
  {
    mode: 'mjesto',
    q: 'Ana je bila na koncertu. Luka ____ je vidio.',
    en: 'Ana was at the concert. Luka saw her.',
    opts: ['ju', 'je', 'joj', 'ga'],
    answer: 'ju',
    tip: 'Next to the auxiliary je, the accusative "her" becomes ju so that two identical words do not meet: Luka ju je vidio. joj is the dative, and ga stands for a man.',
  },
  {
    mode: 'mjesto',
    q: 'Marko je bio u gradu. Jučer ____ vidio na trgu.',
    en: 'Marko was in town. Yesterday I saw him on the square.',
    opts: ['sam ga', 'ga sam', 'sam mu', 'je ga'],
    answer: 'sam ga',
    tip: 'Both small words follow the first word, and sam goes before the pronoun: Jučer sam ga vidio. "ga sam" has them in the wrong order, mu is the dative, and "je ga" uses the wrong person and puts je in front, where it never stands.',
  },
  {
    mode: 'mjesto',
    q: 'Danas radim. Nazvat ____ sutra.',
    en: 'I am working today. I will call you tomorrow.',
    opts: ['ću te', 'te ću', 'ću ti', 'ćeš te'],
    answer: 'ću te',
    tip: 'ću comes first and the pronoun follows it: Nazvat ću te sutra. "te ću" has the order backward, ti is the dative, but nazvati takes the accusative, and ćeš is the ti form of the verb, not the ja form.',
  },
  {
    mode: 'mjesto',
    q: 'To su moji susjedi. ____ svaki dan.',
    cue: 'vidjeti (ja)',
    en: 'These are my neighbors. I see them every day.',
    opts: ['Vidim ih', 'Ih vidim', 'Vidim im', 'Vidim oni'],
    answer: 'Vidim ih',
    tip: 'A short pronoun can never open a sentence, so the verb goes first and the pronoun second: Vidim ih. "Ih vidim" starts with the short form, im is the dative, and oni is the subject form.',
  },
  {
    mode: 'mjesto',
    q: 'Mama mi ga kupuje.',
    cue: 'What does it mean?',
    opts: [
      'Mom is buying it for me.',
      'I am buying it for Mom.',
      'Mom is buying me for him.',
      'He is buying it for Mom.',
    ],
    answer: 'Mom is buying it for me.',
    tip: 'Mama is the subject, mi is the dative "for me", and ga is the accusative "it"; the dative comes first. The verb kupuje is the ona form, so Mom is the one buying, not "I" and not "he", and mi can only mean "to me" or "for me".',
  },
];
