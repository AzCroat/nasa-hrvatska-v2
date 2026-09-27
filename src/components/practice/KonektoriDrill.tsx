import React from 'react';
import ModeDrill from './ModeDrill';

// C2 discourse-connectors drill (C2 tranche 3, 2026-08-15): meaning
// (consequence, concession, explanation, amplification), near-synonym nuance
// (naime vs dakle, iako vs zato sto, nego vs no, budući da sentence-initially)
// and register (formal replacements for colloquial linkers).
const MODE_LABEL: Record<string, string> = {
  znacenje: '🎯 Značenje',
  nijanse: '🌓 Nijanse',
  formalno: '🏛️ Formalno',
};

const DATA = [
  {
    mode: 'znacenje',
    q: 'Kasnio je na vlak; ____ je propustio i sastanak.',
    opts: ['stoga', 'premda', 'naime', 'štoviše'],
    answer: 'stoga',
    en: 'he was late for the train; therefore he missed the meeting too',
    tip: 'Stoga = posljedica (therefore).',
  },
  {
    mode: 'znacenje',
    q: 'Nije došao na proslavu, ____ se bio najavio.',
    opts: ['premda', 'stoga', 'dakle', 'naime'],
    answer: 'premda',
    en: 'he did not come to the party, although he had said he would',
    tip: 'Premda/iako = dopusnost (although).',
  },
  {
    mode: 'znacenje',
    q: 'Sve je skuplje; ____, cijene energije naglo rastu.',
    opts: ['naime', 'stoga', 'ipak', 'potom'],
    answer: 'naime',
    en: 'everything is pricier; namely, energy costs are soaring',
    tip: 'Naime uvodi objašnjenje ili pojašnjenje.',
  },
  {
    mode: 'znacenje',
    q: 'Nije samo pametan; ____, izuzetno je marljiv.',
    opts: ['štoviše', 'premda', 'doduše', 'inače'],
    answer: 'štoviše',
    en: 'he is not just smart; moreover, he is extremely hardworking',
    tip: 'Štoviše pojačava prethodnu tvrdnju.',
  },
  {
    mode: 'znacenje',
    q: 'Plan nije uspio; ____ moramo pokušati ponovno.',
    opts: ['unatoč tomu', 'naime', 'potom', 'štoviše'],
    answer: 'unatoč tomu',
    en: 'the plan failed; nevertheless we must try again',
    tip: 'Unatoč tomu = usprkos rečenomu (nevertheless).',
  },
  {
    mode: 'znacenje',
    q: 'Prvo dovršimo izvještaj; ____ možemo na kavu.',
    opts: ['potom', 'naime', 'premda', 'doduše'],
    answer: 'potom',
    en: 'first we finish the report; then we can go for coffee',
    tip: 'Potom/zatim = vremenski slijed.',
  },
  {
    mode: 'znacenje',
    q: 'Posao je, ____, naporan, ali izvrsno plaćen.',
    opts: ['doduše', 'stoga', 'potom', 'dakle'],
    answer: 'doduše',
    en: 'the job is, admittedly, exhausting, but superbly paid',
    tip: 'Doduše priznaje ograničenje prije suprotstavljanja.',
  },
  {
    mode: 'znacenje',
    q: 'Misliš, ____, da nemamo drugog izbora?',
    opts: ['dakle', 'naime', 'premda', 'uoči'],
    answer: 'dakle',
    en: 'so you think we have no other choice?',
    tip: 'Dakle izvodi zaključak iz rečenoga.',
  },
  {
    mode: 'nijanse',
    q: 'Zaključak je jasan: ____, moramo štedjeti.',
    opts: ['dakle', 'naime', 'doduše', 'premda'],
    answer: 'dakle',
    en: 'the conclusion is clear: therefore, we must save',
    tip: 'Dakle = zaključak; naime = objašnjenje. Ovdje zaključujemo.',
  },
  {
    mode: 'nijanse',
    q: 'Nešto ću ti priznati: ____, nikad nisam volio ovaj posao.',
    opts: ['naime', 'dakle', 'stoga', 'potom'],
    answer: 'naime',
    en: 'I will confess something: namely, I never liked this job',
    tip: 'Najava objašnjenja → naime.',
  },
  {
    mode: 'nijanse',
    q: 'Obećao je doći; ____, nije se pojavio.',
    opts: ['međutim', 'stoga', 'naime', 'potom'],
    answer: 'međutim',
    en: 'he promised to come; however, he did not show up',
    tip: 'Suprotnost očekivanju → međutim.',
  },
  {
    mode: 'nijanse',
    q: '____ je padala kiša, izašli smo u šetnju.',
    opts: ['Iako', 'Zato što', 'Budući da', 'Naime'],
    answer: 'Iako',
    en: 'although it was raining, we went for a walk',
    tip: 'Dopusnost (unatoč kiši) → iako.',
  },
  {
    mode: 'nijanse',
    q: 'Nisam došao ____ sam bio bolestan.',
    opts: ['zato što', 'iako', 'međutim', 'štoviše'],
    answer: 'zato što',
    en: 'I did not come because I was ill',
    tip: 'Uzrok → zato što / jer.',
  },
  {
    mode: 'nijanse',
    q: '____ nije bilo struje, nastava je otkazana.',
    opts: ['Budući da', 'Jer', 'Međutim', 'Štoviše'],
    answer: 'Budući da',
    en: 'since there was no electricity, classes were cancelled',
    tip: 'Na početku rečenice uzrok uvodi BUDUĆI DA — ne „jer”.',
  },
  {
    mode: 'nijanse',
    q: 'Automobil nije crn, ____ tamnoplav.',
    opts: ['nego', 'no', 'ali', 'već da'],
    answer: 'nego',
    en: 'the car is not black but dark blue',
    tip: 'Iza niječnice ispravak uvodi NEGO (ili već).',
  },
  {
    mode: 'nijanse',
    q: 'Trudio se svim silama, ____ rezultata nije bilo.',
    opts: ['no', 'nego', 'naime', 'potom'],
    answer: 'no',
    en: 'he tried his hardest, yet there were no results',
    tip: 'No = ali (blaža suprotnost); nego traži niječnicu ispred.',
  },
  {
    mode: 'formalno',
    q: 'Razgovorno „al” u eseju postaje:',
    opts: ['međutim', 'fakat', 'pa', 'ma'],
    answer: 'međutim',
    en: 'colloquial but → formal however',
    tip: 'U formalnom tekstu: no, ali, međutim.',
  },
  {
    mode: 'formalno',
    q: 'Kolokvijalno uzročno „pošto” u standardu glasi:',
    opts: ['budući da', 'nakon što', 'pošto-poto', 'otkad'],
    answer: 'budući da',
    en: 'the standard causal connector',
    tip: 'U standardu je pošto samo VREMENSKO; uzrok = budući da / jer.',
  },
  {
    mode: 'formalno',
    q: 'U službenom dopisu „isto tako” bolje je zamijeniti s:',
    opts: ['nadalje', 'kužiš', 'e da', 'usput'],
    answer: 'nadalje',
    en: 'furthermore (formal linking)',
    tip: 'Nadalje, također, povrh toga — formalni dodavači.',
  },
  {
    mode: 'formalno',
    q: '„Slijedom navedenoga” u dopisu znači:',
    opts: ['u skladu s onim što je rečeno', 'suprotno rečenomu', 'bez obzira na sve', 'na brzinu'],
    answer: 'u skladu s onim što je rečeno',
    en: 'pursuant to the foregoing',
    tip: 'Administrativni konektor posljedice/nadovezivanja.',
  },
  {
    mode: 'formalno',
    q: 'Za zaključni odlomak eseja prikladan je konektor:',
    opts: ['naposljetku', 'frka je', 'eto', 'aha'],
    answer: 'naposljetku',
    en: 'finally / in conclusion',
    tip: 'Naposljetku, zaključno, na kraju — zaključni signali.',
  },
  {
    mode: 'formalno',
    q: 'Razgovorno potvrdno „nego šta” u standardu glasi:',
    opts: ['dakako', 'ma daj', 'nema frke', 'aha'],
    answer: 'dakako',
    en: 'colloquial sure thing → standard certainly',
    tip: 'Dakako, svakako, naravno — standardne potvrde.',
  },
  {
    mode: 'formalno',
    q: 'Koji je oblik NEPRAVILAN (česta pogreška)?',
    opts: ['obzirom da', 's obzirom na to da', 'budući da', 'zato što'],
    answer: 'obzirom da',
    en: 'the clipped obzirom da is nonstandard',
    tip: 'Pravilno je samo: s obzirom na to da.',
  },
  {
    mode: 'formalno',
    q: 'Razgovorni uvod „što se tiče” u formalnom stilu:',
    opts: ['glede', 'kužiš', 'ono', 'ma'],
    answer: 'glede',
    en: 'regarding (formal)',
    tip: 'Glede / u pogledu / u vezi s — formalne inačice.',
  },
];

export { DATA as KONEKTORI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KonektoriDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="konektori"
      title={'🔗 Tekstni konektori'}
      subtitle={'stoga, naime, međutim — the glue of connected prose'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — tekst vam teče! 🏆',
        good: 'Vrlo dobro vladanje konektorima! 💪',
        more: 'Tekstni konektori traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
