import React from 'react';
import ModeDrill from './ModeDrill';

// C1 concessive-clauses drill (C1 tranche 6, 2026-08-15): the conjunctions
// (iako, premda, makar, koliko god, ma sto god), unatoc/usprkos + DATIVE
// (never genitive), nuances (iako vs ako, pa makar, god) and paraphrase
// (ali -> iako, ipak -> dopusnost).
const MODE_LABEL: Record<string, string> = {
  veznici: '🔀 Veznici',
  nijanse: '🌓 Nijanse',
  preoblika: '🔄 Preoblike',
};

const DATA = [
  {
    mode: 'veznici',
    q: '____ je bio umoran, ostao je do kraja.',
    opts: ['Iako', 'Jer', 'Čim', 'Tako da'],
    answer: 'Iako',
    en: '___ he was tired, he stayed to the end',
    tip: 'Dopusnost: iako/premda + rečenica.',
  },
  {
    mode: 'veznici',
    q: '____ smo ga upozorili, opet je zakasnio. (birano)',
    opts: ['Premda', 'Zato što', 'Budući da', 'Pa'],
    answer: 'Premda',
    en: '___ we warned him, he was late again (elevated style)',
    tip: 'Premda = birana inačica od iako.',
  },
  {
    mode: 'veznici',
    q: 'Doći ću, ____ bilo i kasno.',
    opts: ['makar', 'iako', 'premda', 'jer'],
    answer: 'makar',
    en: 'I will come, be it ever so late',
    tip: 'Makar + pridjev radni u želnom (optativnom) značenju: makar bilo i kasno.',
  },
  {
    mode: 'veznici',
    q: '____ se trudio, nije uspio.',
    opts: ['Koliko god', 'Toliko', 'Čim', 'Budući da'],
    answer: 'Koliko god',
    en: '___ he tried, he did not succeed',
    tip: 'Koliko god / ma koliko = pojačana dopusnost.',
  },
  {
    mode: 'veznici',
    q: 'Ma ____ rekao, neću se predomisliti.',
    opts: ['što god', 'koliko', 'kako da', 'zašto'],
    answer: 'što god',
    en: '___ you say, I will not change my mind',
    tip: 'Ma što god + pridjev radni (rekao): opća dopusnost.',
  },
  {
    mode: 'veznici',
    q: 'Izašli smo ____ tomu što je padala kiša.',
    opts: ['unatoč', 'zbog', 'radi', 'prema'],
    answer: 'unatoč',
    en: 'we went out ___ it was raining',
    tip: 'Unatoč tomu što + rečenica.',
  },
  {
    mode: 'veznici',
    q: '„Iako” i „premda” izriču:',
    opts: ['dopusnost', 'uzrok', 'posljedicu', 'namjeru'],
    answer: 'dopusnost',
    en: 'what do iako and premda express?',
    tip: 'Radnja se dogodila usprkos zapreci.',
  },
  {
    mode: 'veznici',
    q: '____ kiši, utakmica se igra. (prijedlog + D)',
    opts: ['Usprkos', 'Zbog', 'Radi', 'Pomoću'],
    answer: 'Usprkos',
    en: '___ the rain, the match is on',
    tip: 'Usprkos/unatoč + DATIV: usprkos kiši.',
  },
  {
    mode: 'nijanse',
    q: '„Iako pada kiša” prema „ako pada kiša”:',
    opts: [
      'iako = stvarna zapreka, ako = uvjet',
      'ako = zapreka, iako = uvjet',
      'znače isto',
      'iako je upitno',
    ],
    answer: 'iako = stvarna zapreka, ako = uvjet',
    en: 'iako vs ako',
    tip: 'Jedno slovo mijenja sve: dopusnost vs pogodba.',
  },
  {
    mode: 'nijanse',
    q: '„Makar” uz brojeve znači:',
    opts: ['barem (makar jednom)', 'najviše', 'točno', 'nikad'],
    answer: 'barem (makar jednom)',
    en: '"makar" with a number',
    tip: 'Dođi makar jednom = barem jednom.',
  },
  {
    mode: 'nijanse',
    q: '„Pa makar” izriče:',
    opts: ['spremnost na krajnju posljedicu', 'uzrok', 'vrijeme', 'način'],
    answer: 'spremnost na krajnju posljedicu',
    en: 'what does "pa makar" express?',
    tip: 'Reći ću istinu, pa makar me koštalo posla.',
  },
  {
    mode: 'nijanse',
    q: 'Dopusnu rečenicu pojačava čestica:',
    opts: ['god (tko god, kad god)', 'li', 'zar', 'ne'],
    answer: 'god (tko god, kad god)',
    en: 'which particle strengthens a concessive clause?',
    tip: 'Tko god došao, dobrodošao je.',
  },
  {
    mode: 'nijanse',
    q: '„Bilo kako bilo, moramo dalje.” — izraz znači:',
    opts: ['kako god stvari stajale', 'bilo je dobro', 'na bilo kojem mjestu', 'nitko ne zna'],
    answer: 'kako god stvari stajale',
    en: 'what does the expression mean?',
    tip: 'Ustaljena dopusna formula.',
  },
  {
    mode: 'nijanse',
    q: '„Unatoč” i „usprkos” traže:',
    opts: ['dativ', 'genitiv', 'akuzativ', 'instrumental'],
    answer: 'dativ',
    en: 'which case do unatoč and usprkos take?',
    tip: 'Unatoč upozorenju, usprkos zabrani.',
  },
  {
    mode: 'nijanse',
    q: 'Pogrešno je reći „unatoč toga” jer:',
    opts: [
      'unatoč traži dativ (tomu)',
      'unatoč traži akuzativ',
      'toga ne postoji',
      'unatoč je glagol',
    ],
    answer: 'unatoč traži dativ (tomu)',
    en: 'why unatoč toga is wrong',
    tip: 'Česta pogreška: genitiv umjesto dativa.',
  },
  {
    mode: 'nijanse',
    q: '„Koliko god znao, ispit je težak.” — glagol iza koliko god:',
    opts: ['pridjev radni (znao)', 'infinitiv', 'trpni pridjev', 'aorist'],
    answer: 'pridjev radni (znao)',
    en: 'the verb form after koliko god',
    tip: 'Koliko god (bio) znao/učio/htio.',
  },
  {
    mode: 'preoblika',
    q: '„Padala je kiša, ali smo izašli.” dopusno:',
    opts: [
      'Iako je padala kiša, izašli smo.',
      'Jer je padala kiša, izašli smo.',
      'Čim je padala kiša, izašli smo.',
      'Da je padala kiša, izašli smo.',
    ],
    answer: 'Iako je padala kiša, izašli smo.',
    en: 'the concessive version',
    tip: 'Suprotnu rečenicu preoblikuj dopusnom.',
  },
  {
    mode: 'preoblika',
    q: '„Trudio se, ali bez uspjeha.” = „____ trudu, nije uspio.”',
    opts: ['Unatoč', 'Zbog', 'Zahvaljujući', 'Prema'],
    answer: 'Unatoč',
    en: '___ his effort, he failed',
    tip: 'Unatoč + D: unatoč trudu.',
  },
  {
    mode: 'preoblika',
    q: '„Bio je bolestan. Ipak je došao.” jednom rečenicom:',
    opts: [
      'Iako je bio bolestan, došao je.',
      'Budući da je bio bolestan, došao je.',
      'Čim je bio bolestan, došao je.',
      'Da je bio bolestan, došao bi.',
    ],
    answer: 'Iako je bio bolestan, došao je.',
    en: 'in one sentence',
    tip: 'Ipak signalizira dopusnost → iako.',
  },
  {
    mode: 'preoblika',
    q: '„Znanje ne jamči uspjeh.” dopusno o osobi:',
    opts: [
      'Koliko god znao, možeš ne uspjeti.',
      'Zato što znaš, uspjet ćeš.',
      'Čim znaš, uspio si.',
      'Ako znaš, znaš.',
    ],
    answer: 'Koliko god znao, možeš ne uspjeti.',
    en: 'the concessive version, about a person',
    tip: 'Koliko god + dopusna preoblika.',
  },
  {
    mode: 'preoblika',
    q: 'Dopusnost prilogom: „____ , nije se naljutio.”',
    opts: ['Začudo', 'Stoga', 'Dakle', 'Potom'],
    answer: 'Začudo',
    en: '___, he did not get angry',
    tip: 'Začudo/ipak nose dopusnu nijansu u prilogu.',
  },
  {
    mode: 'preoblika',
    q: '„I da mi platiš, ne bih to učinio.” — „i da” izriče:',
    opts: ['dopusni uvjet (čak i ako)', 'stvarni uvjet', 'vrijeme', 'uzrok'],
    answer: 'dopusni uvjet (čak i ako)',
    en: 'what does "i da" express here?',
    tip: 'I da + prezent, a glavna surečenica u kondicionalu = čak i ako.',
  },
  {
    mode: 'preoblika',
    q: 'Birani red: „Premda umoran, ____ .”',
    opts: ['nastavio je raditi', 'ali je stao', 'pa je legao', 'jer je radio'],
    answer: 'nastavio je raditi',
    en: 'which ending fits?',
    tip: 'Eliptična dopusna: premda + pridjev.',
  },
  {
    mode: 'preoblika',
    q: '„Svejedno” u „Znao je, svejedno je pitao” znači:',
    opts: ['ipak, unatoč tomu', 'jednako', 'nevažno komu', 'uzrok'],
    answer: 'ipak, unatoč tomu',
    en: 'what does "svejedno" mean here?',
    tip: 'Svejedno kao dopusni prilog.',
  },
];

export { DATA as DOPUSNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DopusneDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dopusne"
      title={'🛡️ Dopusne rečenice'}
      subtitle={'iako, premda, makar, unatoč tomu — against the odds'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — dopusnost je vaša! 🏆',
        good: 'Vrlo dobro vladanje dopusnim rečenicama! 💪',
        more: 'Dopusne rečenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
