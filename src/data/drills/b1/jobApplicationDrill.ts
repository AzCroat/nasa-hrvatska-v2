// src/data/drills/b1/jobApplicationDrill.ts
//
// B1 THE JOB APPLICATION — the drill for the `job-application` lesson.
//
// A formal application is built from fixed phrases (Poštovani…, Javljam se na Vaš
// natječaj…, U prilogu šaljem…, S poštovanjem) around a short story told in the past
// tense. The two modes drill the frame and the forms inside it: the participle that
// shows the writer's gender, the genitive of the job title, the instrumental after
// služiti se.
//
// Two modes:
//   pismo — the fixed phrases and the register of the letter
//   oblik — the case and gender forms inside them

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const JOB_APPLICATION_MODE_LABELS: Record<string, string> = {
  pismo: '✉️ Pismo',
  oblik: '🔤 Oblici',
};

export const JOB_APPLICATION_DRILL_DATA: ModeDrillItem[] = [
  // ── pismo ─────────────────────────────────────────────────────────────────
  {
    mode: 'pismo',
    q: 'Which greeting opens a formal letter to a woman whose name you do not know?',
    opts: ['Poštovana gospođo,', 'Draga moja,', 'Bok!', 'Ćao,'],
    answer: 'Poštovana gospođo,',
    tip: 'Poštovani / Poštovana is the formal greeting; the others are for friends.',
  },
  {
    mode: 'pismo',
    q: 'Which line ends a formal application?',
    opts: ['S poštovanjem,', 'Pozdrav, vidimo se!', 'Puno pusa,', 'Javi se!'],
    answer: 'S poštovanjem,',
    tip: 'S poštovanjem, then your name, is the formal sign-off.',
  },
  {
    mode: 'pismo',
    q: '____ se na Vaš natječaj za radno mjesto kuhara.',
    en: 'I am applying for your vacancy for a cook.',
    opts: ['Javljam', 'Javljaš', 'Javi', 'Javljamo'],
    answer: 'Javljam',
    tip: 'The writer is ja: javljam se.',
  },
  {
    mode: 'pismo',
    q: 'U ____ šaljem životopis.',
    en: 'Attached I am sending my CV.',
    opts: ['prilogu', 'prilog', 'prilogom', 'priloga'],
    answer: 'prilogu',
    tip: 'U prilogu — u + the locative, a fixed phrase.',
  },
  {
    mode: 'pismo',
    q: 'Za sve informacije stojim Vam na ____.',
    en: 'I am at your disposal for any information.',
    opts: ['raspolaganju', 'raspolaganje', 'raspolaganjem', 'raspolaganja'],
    answer: 'raspolaganju',
    tip: 'Stajati na raspolaganju — na + the locative of a place where you stand.',
  },
  {
    mode: 'pismo',
    q: 'Nadam se Vašem pozitivnom ____.',
    en: 'I hope for a positive reply.',
    opts: ['odgovoru', 'odgovor', 'odgovorom', 'odgovora'],
    answer: 'odgovoru',
    tip: 'Nadati se takes the dative: odgovoru.',
  },
  {
    mode: 'pismo',
    q: 'Predmet: Prijava na ____ za radno mjesto vozača',
    en: 'Subject: Application for the driver vacancy',
    opts: ['natječaj', 'natječaju', 'natječajem', 'natječaja'],
    answer: 'natječaj',
    tip: 'Prijava na + the accusative: na natječaj.',
  },
  {
    mode: 'pismo',
    q: 'Which line belongs in a formal application?',
    opts: [
      'Mogao bih početi raditi od 1. ožujka.',
      'Hej, treba mi posao!',
      'Daj mi taj posao.',
      'Javi mi se brzo!',
    ],
    answer: 'Mogao bih početi raditi od 1. ožujka.',
    tip: 'The conditional makes it a polite offer; the others speak to a friend.',
  },
  {
    mode: 'pismo',
    q: 'Željela ____ raditi u Vašem hotelu.',
    en: 'I would like to work in your hotel.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'The conditional for ja: bih.',
  },
  {
    mode: 'pismo',
    q: 'Which greeting is right for Mr Kovač?',
    opts: [
      'Poštovani gospodine Kovaču,',
      'Poštovani gospodin Kovač,',
      'Dragi Kovač,',
      'Poštovana gospođo Kovaču,',
    ],
    answer: 'Poštovani gospodine Kovaču,',
    tip: 'You address him in the vocative: gospodine Kovaču.',
  },
  {
    mode: 'pismo',
    q: 'U ____, 3. svibnja 2027.',
    en: 'Place and date: in Split, 3 May 2027.',
    opts: ['Splitu', 'Split', 'Splita', 'Splitom'],
    answer: 'Splitu',
    tip: 'The place of writing is u + the locative.',
  },
  {
    mode: 'pismo',
    q: 'Which sentence gives a reason you want the job?',
    opts: [
      'Želim raditi kod Vas jer volim rad s ljudima.',
      'Ne znam zašto.',
      'Posao je posao.',
      'Hej, što ima?',
    ],
    answer: 'Želim raditi kod Vas jer volim rad s ljudima.',
    tip: 'A reason with jer makes the motivation believable.',
  },
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Ivana piše: "____ sam tri godine kao konobarica."',
    en: 'Ivana writes: I worked for three years as a waitress.',
    opts: ['Radila', 'Radio', 'Radili', 'Radilo'],
    answer: 'Radila',
    tip: 'The participle agrees with the writer, a woman: radila.',
  },
  {
    mode: 'oblik',
    q: 'Marko piše: "____ sam srednju školu u Puli."',
    en: 'Marko writes: I finished secondary school in Pula.',
    opts: ['Završio', 'Završila', 'Završili', 'Završilo'],
    answer: 'Završio',
    tip: 'One man: završio.',
  },
  {
    mode: 'oblik',
    q: 'Imam pet godina ____.',
    en: 'I have five years of experience.',
    opts: ['iskustva', 'iskustvo', 'iskustvom', 'iskustvu'],
    answer: 'iskustva',
    tip: 'Experience is counted, so it goes into the genitive.',
  },
  {
    mode: 'oblik',
    q: 'Dobro se služim ____.',
    en: 'I am good with computers.',
    opts: ['računalom', 'računalo', 'računala', 'računalu'],
    answer: 'računalom',
    tip: 'Služiti se takes the instrumental.',
  },
  {
    mode: 'oblik',
    q: 'Služim se njemačkim ____.',
    en: 'I speak German.',
    opts: ['jezikom', 'jezik', 'jezika', 'jeziku'],
    answer: 'jezikom',
    tip: 'Služiti se + instrumental: njemačkim jezikom.',
  },
  {
    mode: 'oblik',
    q: 'Javljam se na ____ oglas.',
    en: 'I am responding to your advertisement.',
    opts: ['Vaš', 'Vašem', 'Vašim', 'Vašeg'],
    answer: 'Vaš',
    tip: 'Na + accusative; oglas is not alive, so the accusative looks like the nominative.',
  },
  {
    mode: 'oblik',
    q: 'Radio sam kao ____ u trgovini.',
    en: 'I worked as a shop assistant (a man writing).',
    opts: ['prodavač', 'prodavačica', 'prodavača', 'prodavačem'],
    answer: 'prodavač',
    tip: 'After kao comes the nominative, and the job title agrees with the writer.',
  },
  {
    mode: 'oblik',
    q: 'Ana piše: "Radila sam kao ____ u hotelu."',
    en: 'Ana writes: I worked as a cook in a hotel.',
    opts: ['kuharica', 'kuhar', 'kuharom', 'kuhara'],
    answer: 'kuharica',
    tip: 'A woman writing: the feminine job title, in the nominative after kao.',
  },
  {
    mode: 'oblik',
    q: 'Javljam se na natječaj za radno mjesto ____.',
    en: 'I am applying for the post of waiter.',
    opts: ['konobara', 'konobar', 'konobaru', 'konobarom'],
    answer: 'konobara',
    tip: 'The job title after radno mjesto goes into the genitive.',
  },
  {
    mode: 'oblik',
    q: 'U prilogu šaljem presliku ____.',
    en: 'Attached I send a copy of my diploma.',
    opts: ['diplome', 'diploma', 'diplomu', 'diplomom'],
    answer: 'diplome',
    tip: 'A copy OF something: the genitive, diplome.',
  },
  {
    mode: 'oblik',
    q: 'Imam vozačku ____ B kategorije.',
    en: 'I have a category B driving licence.',
    opts: ['dozvolu', 'dozvola', 'dozvoli', 'dozvolom'],
    answer: 'dozvolu',
    tip: 'The object of imam: the accusative, dozvolu.',
  },
  {
    mode: 'oblik',
    q: 'Zahvaljujem na ____.',
    en: 'Thank you for your attention.',
    opts: ['pažnji', 'pažnja', 'pažnju', 'pažnjom'],
    answer: 'pažnji',
    tip: 'Zahvaljivati na, like hvala na, takes the locative: pažnji.',
  },
];
