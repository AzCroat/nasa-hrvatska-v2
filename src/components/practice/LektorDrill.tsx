import React from 'react';
import ModeDrill from './ModeDrill';

// C2 normative-traps drill (C2 tranche 5, 2026-08-15): normative rekcija
// (koristiti se cim, kontaktirati s kim, upravljati cime, zahvaliti vs
// zahvaliti se), lexical traps (posljednji/zadnji, cijena iznosi,
// sljedeci/slijedeci, dolazis li) and fixed forms (s obzirom na to da,
// unatoc tomu, najjaci, sa mnom).
const MODE_LABEL: Record<string, string> = {
  rekcija: '🎯 Rekcija',
  leksik: '📖 Leksik',
  oblici: '📐 Oblici',
};

const DATA = [
  {
    mode: 'rekcija',
    q: 'Birani standard: „____ ovu priliku.” (koristiti)',
    opts: ['Iskoristite', 'Koristite se', 'Koristite s', 'Iskoristite se'],
    answer: 'Iskoristite',
    en: 'seize this opportunity',
    tip: 'Birano: iskoristiti što / koristiti se čim.',
  },
  {
    mode: 'rekcija',
    q: 'Birani standard: „Koristim se ____ .” (rječnik)',
    opts: ['rječnikom', 'rječnik', 'rječnika', 'na rječnik'],
    answer: 'rječnikom',
    en: 'I use a dictionary',
    tip: 'Koristiti se + INSTRUMENTAL (birani standard).',
  },
  {
    mode: 'rekcija',
    q: 'Birani standard: „Kontaktirajte ____ .” (mi)',
    opts: ['s nama', 'nas izravno bez s', 'nam', 'o nama'],
    answer: 's nama',
    en: 'contact us',
    tip: 'Birano: kontaktirati S KIM (biti u kontaktu s).',
  },
  {
    mode: 'rekcija',
    q: '„Upravljati” traži:',
    opts: ['instrumental (tvrtkom)', 'akuzativ (tvrtku)', 'genitiv (tvrtke)', 'dativ (tvrtki)'],
    answer: 'instrumental (tvrtkom)',
    en: 'to manage takes the instrumental',
    tip: 'Upravljati čime: tvrtkom, vozilom, državom.',
  },
  {
    mode: 'rekcija',
    q: '„Rukovoditi” traži:',
    opts: [
      'instrumental (projektom)',
      'akuzativ (projekt)',
      'genitiv (projekta)',
      'lokativ (projektu)',
    ],
    answer: 'instrumental (projektom)',
    en: 'to lead takes the instrumental',
    tip: 'Rukovoditi čime — nikad „rukovoditi projekt”.',
  },
  {
    mode: 'rekcija',
    q: 'Birani standard: „Oženio ____ .” (Ana)',
    opts: ['se Anom', 'je Anu', 'se s Anom', 'je s Anom'],
    answer: 'se Anom',
    en: 'he married Ana',
    tip: 'Oženiti se KIME (instrumental, bez s).',
  },
  {
    mode: 'rekcija',
    q: '„Zahvaliti” komu na čemu — pravilno je:',
    opts: [
      'Zahvaljujem Vam na pomoći.',
      'Zahvaljujem se Vama za pomoć.',
      'Zahvaljujem za pomoć Vas.',
      'Se zahvaljujem na pomoć.',
    ],
    answer: 'Zahvaljujem Vam na pomoći.',
    en: 'thank you for your help',
    tip: 'Zahvaliti (bez se!) + D + na + L; „zahvaliti se” = odbiti.',
  },
  {
    mode: 'rekcija',
    q: '„Smetati” traži:',
    opts: [
      'dativ (smeta mi)',
      'akuzativ (smeta me birano)',
      'genitiv (smeta mene)',
      'instrumental (smeta mnome)',
    ],
    answer: 'dativ (smeta mi)',
    en: 'to bother takes the dative',
    tip: 'Birano: smeta MI, smeta susjedima.',
  },
  {
    mode: 'leksik',
    q: 'Razlika: „zadnji” prema „posljednji” —',
    opts: [
      'posljednji je birani izbor za „krajnji u nizu”',
      'zadnji je jedini pravilan',
      'posljednji znači „straga”',
      'razlike nema nikad',
    ],
    answer: 'posljednji je birani izbor za „krajnji u nizu”',
    en: 'posljednji vs zadnji',
    tip: 'Birano: posljednji vlak; zadnji = koji je straga.',
  },
  {
    mode: 'leksik',
    q: '„Cijena ____ 100 eura.” (birano)',
    opts: ['iznosi', 'košta', 'je koštala od', 'stoji na'],
    answer: 'iznosi',
    en: 'the price amounts to 100 euros',
    tip: 'Roba košta, ali CIJENA IZNOSI (cijena ne košta!).',
  },
  {
    mode: 'leksik',
    q: 'Birani izbor: „____ tjedan” (koji dolazi)',
    opts: ['sljedeći', 'slijedeći', 'idući jedino', 'naredni'],
    answer: 'sljedeći',
    en: 'next week',
    tip: 'Sljedeći (pridjev); slijedeći je glagolski prilog.',
  },
  {
    mode: 'leksik',
    q: '„Da li dolaziš?” u biranom standardu glasi:',
    opts: ['Dolaziš li?', 'Da li dolaziš stvarno?', 'Jel dolaziš?', 'Dal dolaziš?'],
    answer: 'Dolaziš li?',
    en: 'are you coming? (formal inversion)',
    tip: 'Birano pitanje: glagol + li (ne „da li”).',
  },
  {
    mode: 'leksik',
    q: 'Birani standard: „u vezi ____ ” (taj problem)',
    opts: ['s tim problemom', 'tog problema', 'tim problemom', 'na taj problem'],
    answer: 's tim problemom',
    en: 'in connection with that problem',
    tip: 'U vezi S ČIM (ne „u vezi čega”).',
  },
  {
    mode: 'leksik',
    q: '„Po tom pitanju” u biranom stilu glasi:',
    opts: ['o tome / u vezi s tim', 'po tome pitanju', 'na to pitanje', 'za to pitanje'],
    answer: 'o tome / u vezi s tim',
    en: 'regarding that (avoiding po pitanju)',
    tip: '„Po pitanju” je birokratizam — bolje: o tome.',
  },
  {
    mode: 'leksik',
    q: 'Mjerna riječ uz nebrojivo: „____ informacija” (velika količina)',
    opts: ['mnogo', 'puno kao jedino', 'hrpa', 'masa'],
    answer: 'mnogo',
    en: 'a lot of information',
    tip: 'Birano: mnogo (puno = razgovorno; hrpa/masa = žargon).',
  },
  {
    mode: 'leksik',
    q: '„Ispravan” prema „pravilan”:',
    opts: [
      'pravilan = u skladu s pravilom',
      'ispravan = lijep',
      'istoznačni su uvijek',
      'pravilan = popravljen',
    ],
    answer: 'pravilan = u skladu s pravilom',
    en: 'pravilan follows a rule; ispravan works',
    tip: 'Pravilan oblik (gramatika); ispravan uređaj (radi).',
  },
  {
    mode: 'oblici',
    q: 'Pravilna je sveza:',
    opts: ['s obzirom na to da', 'obzirom da', 's obzirom da', 'obzirom na to'],
    answer: 's obzirom na to da',
    en: 'considering that — the full form',
    tip: 'Jedina potpuna sveza: s obzirom na to da.',
  },
  {
    mode: 'oblici',
    q: 'Pravilan je oblik s dativom:',
    opts: ['unatoč tomu', 'unatoč toga', 'uprkos toga', 'unatoč tome što nikad'],
    answer: 'unatoč tomu',
    en: 'despite that — dative!',
    tip: 'Unatoč/usprkos + DATIV: unatoč tomu, usprkos kiši.',
  },
  {
    mode: 'oblici',
    q: 'Birani standard: „____ mišljenju…” (po/prema)',
    opts: ['prema mojem', 'po mom', 'po mojemu', 'na moje'],
    answer: 'prema mojem',
    en: 'in my opinion — prema + D',
    tip: 'Birano: prema mojem mišljenju (po = razgovorno).',
  },
  {
    mode: 'oblici',
    q: 'Pravilno je napisan superlativ:',
    opts: ['najjači', 'naj jači', 'najači', 'nāj-jači'],
    answer: 'najjači',
    en: 'the strongest — double j',
    tip: 'Naj- + jak: najjači (dva j se pišu oba).',
  },
  {
    mode: 'oblici',
    q: 'Pravilan oblik glagola u „on ____ ” (moći, prezent):',
    opts: ['može', 'more', 'možde', 'možeti'],
    answer: 'može',
    en: 'he can',
    tip: 'Moći: mogu, možeš, može (more = dijalektno).',
  },
  {
    mode: 'oblici',
    q: '„S” ili „sa” — pravilno je:',
    opts: ['sa školom', 'sa mnom i sa tobom', 'sa radom', 'sa autom'],
    answer: 'sa školom',
    en: 'sa before s/š/z/ž (and mnom)',
    tip: 'Sa samo ispred s, š, z, ž (i „sa mnom”): sa školom, s autom.',
  },
  {
    mode: 'oblici',
    q: 'Pravilan je izraz:',
    opts: [
      'u skladu s propisima',
      'u skladu propisa',
      'uskladno propisima',
      'na skladu s propisima',
    ],
    answer: 'u skladu s propisima',
    en: 'in accordance with regulations',
    tip: 'U skladu S ČIM — instrumental s prijedlogom s.',
  },
  {
    mode: 'oblici',
    q: 'Vokativ imena „Marko” glasi:',
    opts: ['Marko', 'Marku', 'Marče', 'Markone'],
    answer: 'Marko',
    en: 'Marko! (vocative = nominative)',
    tip: 'Imena na -o imaju V = N: Marko! Ivo!',
  },
];

export { DATA as LEKTOR_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LektorDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="lektor"
      title={'🧐 Lektorske zamke'}
      subtitle={'koristiti se čime, s obzirom na to da — the traps editors circle in red'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — lektor bi vas pohvalio! 🏆',
        good: 'Vrlo dobro izbjegavate lektorske zamke! 💪',
        more: 'Lektorske zamke traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
