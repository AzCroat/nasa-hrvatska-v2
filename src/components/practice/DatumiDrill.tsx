import React from 'react';
import ModeDrill from './ModeDrill';

// C1 dates-and-time drill (C1 tranche 3, 2026-08-15): ordinal formation and
// declension, dates in the genitive (drugog svibnja, devedeset prve), month
// names, and the clock idioms that trip learners (pola osam = 7:30,
// petnaest do deset, vikendom).
const MODE_LABEL: Record<string, string> = {
  redni: '🥇 Redni brojevi',
  datum: '📆 Nadnevci',
  vrijeme: '⏰ Sat i razdoblja',
};

const DATA = [
  {
    mode: 'redni',
    q: 'Danas je ____ svibnja. (15.)',
    opts: ['petnaesti', 'petnaest', 'petnaestog', 'petnaesto'],
    answer: 'petnaesti',
    en: 'today is the fifteenth of May',
    tip: 'Datum kao subjekt: NOMINATIV rednoga broja — petnaesti svibnja.',
  },
  {
    mode: 'redni',
    q: 'Rođena je ____ svibnja. (2.)',
    opts: ['drugog', 'drugi', 'druga', 'dva'],
    answer: 'drugog',
    en: 'she was born on the second of May',
    tip: 'Nadnevak radnje: GENITIV — drugog(a) svibnja.',
  },
  {
    mode: 'redni',
    q: 'Sastanak je ____ ožujka. (21.)',
    opts: ['dvadeset prvog', 'dvadeset prvi', 'dvadeset jednog', 'dvadeset i jedan'],
    answer: 'dvadeset prvog',
    en: 'the meeting is on the 21st of March',
    tip: 'U složenim rednim brojevima sklanja se samo posljednji član.',
  },
  {
    mode: 'redni',
    q: 'U zaglavlju dopisa: „Zagreb, ____ kolovoza 2026.”',
    opts: ['15.', '15', 'petnaest', '15-og'],
    answer: '15.',
    en: 'Zagreb, 15 August 2026',
    tip: 'Redni broj pisan brojkom dobiva TOČKU: 15. kolovoza.',
  },
  {
    mode: 'redni',
    q: 'Živimo u ____ stoljeću. (21.)',
    opts: ['dvadeset prvom', 'dvadeset prvo', 'dvadesetprvom', 'dvadeset i jedan'],
    answer: 'dvadeset prvom',
    en: 'we live in the 21st century',
    tip: 'Lokativ rednoga broja: u dvadeset prvom stoljeću.',
  },
  {
    mode: 'redni',
    q: '____ godišnjica mature slavi se u lipnju. (10.)',
    opts: ['Deseta', 'Deset', 'Desete', 'Deseti'],
    answer: 'Deseta',
    en: 'the tenth anniversary of graduation',
    tip: 'Godišnjica je ž. roda: deseta.',
  },
  {
    mode: 'redni',
    q: 'Redni broj od 100 glasi:',
    opts: ['stoti', 'stotinjak', 'stotinski', 'stotina'],
    answer: 'stoti',
    en: 'the hundredth',
    tip: 'Sto → stoti (stota, stoto).',
  },
  {
    mode: 'redni',
    q: 'Osvojila je ____ mjesto na natjecanju. (7.)',
    opts: ['sedmo', 'sedam', 'sedmi', 'sedmu'],
    answer: 'sedmo',
    en: 'she took seventh place in the competition',
    tip: 'Mjesto je sr. roda: sedmo mjesto.',
  },
  {
    mode: 'datum',
    q: 'Praznik pada ____ lipnja. (22.)',
    opts: ['dvadeset drugog', 'dvadeset drugi', 'dvadeset dva', 'dvadeset druge'],
    answer: 'dvadeset drugog',
    en: 'the holiday falls on the 22nd of June',
    tip: 'Nadnevak: genitiv — dvadeset drugog lipnja.',
  },
  {
    mode: 'datum',
    q: 'Pismo je datirano ____. (1. 9.)',
    opts: ['prvog rujna', 'prvi rujan', 'jedan rujna', 'prvog rujan'],
    answer: 'prvog rujna',
    en: 'the letter is dated the first of September',
    tip: 'Oba člana u genitivu: prvog(a) rujna.',
  },
  {
    mode: 'datum',
    q: 'Mjesec koji dolazi nakon lipnja jest:',
    opts: ['srpanj', 'kolovoz', 'svibanj', 'rujan'],
    answer: 'srpanj',
    en: 'which month comes after June?',
    tip: 'Lipanj (6.) → srpanj (7.) → kolovoz (8.).',
  },
  {
    mode: 'datum',
    q: 'Veljača dolazi ____ siječnja.',
    opts: ['poslije', 'prije', 'umjesto', 'tijekom'],
    answer: 'poslije',
    en: 'February comes ___ January',
    tip: 'Siječanj (1.) → veljača (2.).',
  },
  {
    mode: 'datum',
    q: 'Krajem ____ počinju adventske pripreme. (studeni)',
    opts: ['studenoga', 'studenija', 'studena', 'studenom'],
    answer: 'studenoga',
    en: 'at the end of November the Advent preparations begin',
    tip: 'Studeni se sklanja kao pridjev: G studenog(a).',
  },
  {
    mode: 'datum',
    q: 'U „tisuću devetsto devedeset prve” godina stoji u:',
    opts: ['genitivu', 'nominativu', 'lokativu', 'akuzativu'],
    answer: 'genitivu',
    en: 'which case is the year in? (in 1991)',
    tip: 'Godina radnje: genitiv — devedeset prve (godine).',
  },
  {
    mode: 'datum',
    q: 'Radimo od ____ do petka.',
    opts: ['ponedjeljka', 'ponedjeljak', 'ponedjeljku', 'ponedjeljkom'],
    answer: 'ponedjeljka',
    en: 'we work from Monday to Friday',
    tip: 'Od + G: od ponedjeljka.',
  },
  {
    mode: 'datum',
    q: 'Svi sveti slave se ____ studenoga. (1.)',
    opts: ['prvog', 'prvi', 'jednog', 'prve'],
    answer: 'prvog',
    en: 'All Saints is celebrated on the 1st of November',
    tip: 'Nadnevak: genitiv rednoga broja.',
  },
  {
    mode: 'vrijeme',
    q: 'Sastanak počinje u ____ sati. (8)',
    opts: ['osam', 'osmim', 'osmih', 'osme'],
    answer: 'osam',
    en: 'the meeting starts at eight o’clock',
    tip: 'U + glavni broj: u osam sati.',
  },
  {
    mode: 'vrijeme',
    q: '„Pola ____” znači 7:30.',
    opts: ['osam', 'sedam', 'devet', 'sedam i pol'],
    answer: 'osam',
    en: 'how to say 7:30',
    tip: 'Pola osam = pola PUTA DO osam = 7:30!',
  },
  {
    mode: 'vrijeme',
    q: '„____ deset” znači 9:45.',
    opts: ['Petnaest do', 'Četvrt na', 'Deset do', 'Petnaest poslije'],
    answer: 'Petnaest do',
    en: 'how to say 9:45',
    tip: 'Petnaest do deset — vrijeme prije punog sata.',
  },
  {
    mode: 'vrijeme',
    q: 'Radim ____ jutra ____ mraka.',
    opts: ['od, do', 'iz, do', 's, na', 'od, prema'],
    answer: 'od, do',
    en: 'I work ___ morning ___ dark',
    tip: 'Od + G … do + G: od jutra do mraka.',
  },
  {
    mode: 'vrijeme',
    q: 'Vidimo se ____ dva tjedna.',
    opts: ['za', 'kroz', 'u', 'na'],
    answer: 'za',
    en: 'see you in two weeks',
    tip: 'Za + akuzativ = nakon isteka razdoblja.',
  },
  {
    mode: 'vrijeme',
    q: 'Stigli su ____ noći.',
    opts: ['usred', 'kroz sredinu', 'na sred', 'između'],
    answer: 'usred',
    en: 'they arrived in the middle of the night',
    tip: 'Usred + G: usred noći, usred zime.',
  },
  {
    mode: 'vrijeme',
    q: 'Predstava je trajala ____ tri sata. (otprilike)',
    opts: ['oko', 'okolo', 'o', 'pri'],
    answer: 'oko',
    en: 'the show lasted about three hours',
    tip: 'Oko + G izriče približnost: oko tri sata.',
  },
  {
    mode: 'vrijeme',
    q: '„____ spavamo duže.” (svaki vikend)',
    opts: ['Vikendom', 'Na vikendu', 'U vikend', 'Preko vikendom'],
    answer: 'Vikendom',
    en: 'at weekends we sleep longer',
    tip: 'Instrumental vremena: vikendom, nedjeljom, ljeti.',
  },
];

export { DATA as DATUMI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DatumiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="datumi"
      title={'📅 Datumi i vrijeme'}
      subtitle={'drugog svibnja, pola osam — telling time like a native'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — kalendar i sat su vaši! 🏆',
        good: 'Vrlo dobro snalaženje s vremenom! 💪',
        more: 'Datumi i vrijeme traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
