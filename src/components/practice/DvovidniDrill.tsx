import React from 'react';
import ModeDrill from './ModeDrill';

// C1 biaspectual-verbs drill (C1 tranche 7, 2026-08-15): recognizing
// biaspectuals (rucati, cuti, vidjeti, -irati loans), reading aspect from
// context (dok/cim, upravo, odmah, measures of duration) and the nuances
// (prefix reinforcement, futur II, dictionary dv. tag).
const MODE_LABEL: Record<string, string> = {
  prepoznaj: '🔍 Prepoznavanje',
  kontekst: '🎬 Kontekst',
  nijansa: '🌗 Nijanse',
};

const DATA = [
  {
    mode: 'prepoznaj',
    q: 'Koji je glagol dvovidan (i svršen i nesvršen)?',
    opts: ['ručati', 'pisati', 'napisati', 'čitati'],
    answer: 'ručati',
    en: 'rucati is biaspectual',
    tip: 'Ručati, večerati, doručkovati — oba vida u istom obliku.',
  },
  {
    mode: 'prepoznaj',
    q: '„Čuti” je:',
    opts: ['dvovidan', 'samo svršen', 'samo nesvršen', 'bezličan'],
    answer: 'dvovidan',
    en: 'cuti works in both aspects',
    tip: 'Čujem sad (nesvršeno) / čuo sam prasak (svršeno).',
  },
  {
    mode: 'prepoznaj',
    q: '„Vidjeti” je:',
    opts: ['dvovidan', 'samo svršen', 'samo nesvršen', 'pomoćni'],
    answer: 'dvovidan',
    en: 'vidjeti is biaspectual',
    tip: 'Vidim te (sada) / vidio sam ga jučer (jednom).',
  },
  {
    mode: 'prepoznaj',
    q: 'Posuđenice na „-irati” najčešće su:',
    opts: ['dvovidne', 'samo svršene', 'samo nesvršene', 'neprelazne'],
    answer: 'dvovidne',
    en: 'borrowed -irati verbs are biaspectual',
    tip: 'Organizirati, telefonirati, analizirati — oba vida.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji glagol NIJE dvovidan?',
    opts: ['pročitati', 'organizirati', 'ručati', 'čuti'],
    answer: 'pročitati',
    en: 'procitati is purely perfective',
    tip: 'Prefiks pro- fiksira svršenost.',
  },
  {
    mode: 'prepoznaj',
    q: '„Krstiti” (i svršeno i nesvršeno) potvrđuje da su dvovidni:',
    opts: ['i neki domaći glagoli', 'samo posuđenice', 'samo glagoli jela', 'samo povratni'],
    answer: 'i neki domaći glagoli',
    en: 'native verbs can be biaspectual too',
    tip: 'Krstiti, ručati, čuti, vidjeti — domaći dvovidni.',
  },
  {
    mode: 'prepoznaj',
    q: '„Analizirati” u „upravo analiziramo podatke” ima vid:',
    opts: ['nesvršeni', 'svršeni', 'oba istodobno', 'nijedan'],
    answer: 'nesvršeni',
    en: 'right now = imperfective reading',
    tip: 'Kontekst bira vid dvovidnoga glagola.',
  },
  {
    mode: 'prepoznaj',
    q: '„Analizirati” u „sutra ćemo analizirati sve uzorke do kraja” čita se:',
    opts: ['svršeno', 'nesvršeno', 'bezlično', 'pasivno'],
    answer: 'svršeno',
    en: 'to completion = perfective reading',
    tip: 'Do kraja + rok → svršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Dok smo ____ , zazvonio je telefon.” (ručati — u tijeku)',
    opts: ['ručali', 'poručali', 'naručali', 'doručali'],
    answer: 'ručali',
    en: 'while we were having lunch',
    tip: 'Dok + trajanje → nesvršeno čitanje istoga oblika.',
  },
  {
    mode: 'kontekst',
    q: '„Čim ____ , idemo.” (ručati — dovršiti)',
    opts: ['ručamo', 'ručavamo', 'budemo ručavali', 'ručasmo'],
    answer: 'ručamo',
    en: 'as soon as we finish lunch, we go',
    tip: 'Čim + prezent dvovidnoga = svršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Tvrtka ____ izlet svake godine.” (organizirati)',
    opts: ['organizira', 'izorganizira', 'organizirava', 'sorganizira'],
    answer: 'organizira',
    en: 'the firm organizes a trip every year',
    tip: 'Ponavljanje → nesvršeno čitanje; oblik ostaje isti.',
  },
  {
    mode: 'kontekst',
    q: '„Jučer su ____ savršen doček.” (organizirati, jednom)',
    opts: ['organizirali', 'organizirávali', 'organizavali', 'izorganiziravali'],
    answer: 'organizirali',
    en: 'yesterday they organized a perfect welcome',
    tip: 'Jednokratni rezultat → svršeno čitanje istoga oblika.',
  },
  {
    mode: 'kontekst',
    q: '„____ li me? Halo?” (čuti, sada)',
    opts: ['Čuješ', 'Začuješ', 'Očuješ', 'Čuvaš'],
    answer: 'Čuješ',
    en: 'can you hear me?',
    tip: 'Trenutačna percepcija → nesvršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Odjednom sam ____ korake.” (čuti, trenutak)',
    opts: ['čuo', 'čuvao', 'začuvao', 'slušao'],
    answer: 'čuo',
    en: 'suddenly I heard footsteps',
    tip: 'Trenutak → svršeno čitanje: čuo sam.',
  },
  {
    mode: 'kontekst',
    q: '„Svake nedjelje ____ kod bake.” (večerati)',
    opts: ['večeramo', 'povečeramo', 'izvečeramo', 'navečeramo'],
    answer: 'večeramo',
    en: 'we have dinner at grandma\u2019s every Sunday',
    tip: 'Navika → nesvršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Brzo smo ____ i krenuli.” (večerati, dovršeno)',
    opts: ['večerali', 'povečerávali', 'večeravali', 'izvečeravali'],
    answer: 'večerali',
    en: 'we had a quick dinner and set off',
    tip: 'Slijed radnji → svršeno čitanje.',
  },
  {
    mode: 'nijansa',
    q: 'Kad kontekst mora razlikovati vid, jeziku pomažu:',
    opts: ['prilozi i veznici (upravo, čim, dok)', 'samo intonacija', 'padeži', 'navodnici'],
    answer: 'prilozi i veznici (upravo, čim, dok)',
    en: 'adverbs disambiguate biaspectuals',
    tip: 'Upravo analiziramo (ns) vs čim analiziramo (sv).',
  },
  {
    mode: 'nijansa',
    q: 'Za jasno nesvršeno od „organizirati” govornici katkad rabe:',
    opts: ['organizirati uz priloge trajanja', 'izorganizirati', 'sorganizirati', 'naorganizirati'],
    answer: 'organizirati uz priloge trajanja',
    en: 'duration adverbs mark the imperfective',
    tip: 'Trenutačno organiziramo — prilog nosi vid.',
  },
  {
    mode: 'nijansa',
    q: 'Prefiks uz dvovidni glagol (npr. „isprogramirati”):',
    opts: ['naglašava svršenost', 'čini ga nesvršenim', 'ne mijenja ništa', 'briše značenje'],
    answer: 'naglašava svršenost',
    en: 'prefixes force the perfective',
    tip: 'Isprogramirati, odreagirati — razgovorno pojačana svršenost.',
  },
  {
    mode: 'nijansa',
    q: '„Telefonirati” u „telefonirao je sat vremena”:',
    opts: ['nesvršeno čitanje', 'svršeno čitanje', 'pogrešna rečenica', 'pasiv'],
    answer: 'nesvršeno čitanje',
    en: 'he was on the phone for an hour',
    tip: 'Mjera trajanja → nesvršeni vid.',
  },
  {
    mode: 'nijansa',
    q: '„Jesi li večerao?” pita o:',
    opts: ['dovršenoj radnji (svršeno)', 'navici', 'trajanju', 'budućnosti'],
    answer: 'dovršenoj radnji (svršeno)',
    en: 'have you had dinner? (result)',
    tip: 'Perfekt dvovidnoga: rezultatsko čitanje.',
  },
  {
    mode: 'nijansa',
    q: 'Futur II. od dvovidnoga („budem ručao”) signalizira:',
    opts: ['nesvršenu nijansu u zavisnoj', 'svršenu prošlost', 'zapovijed', 'pasiv'],
    answer: 'nesvršenu nijansu u zavisnoj',
    en: 'budem rucao leans imperfective',
    tip: 'Ako budem ručao kad nazoveš…',
  },
  {
    mode: 'nijansa',
    q: '„Reagirati” u „odmah je reagirao” čita se:',
    opts: ['svršeno', 'nesvršeno', 'bezlično', 'upitno'],
    answer: 'svršeno',
    en: 'he reacted at once',
    tip: 'Odmah + jednokratno → svršeno.',
  },
  {
    mode: 'nijansa',
    q: 'Dvovidnost je u rječnicima označena:',
    opts: ['dv. (dvovidan)', 'ns. samo', 'sv. samo', 'nema oznake'],
    answer: 'dv. (dvovidan)',
    en: 'dictionaries tag dv.',
    tip: 'Oznaka dv. uz ručati, čuti, organizirati.',
  },
];

export { DATA as DVOVIDNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DvovidniDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dvovidni"
      title={'🪞 Dvovidni glagoli'}
      subtitle={'ručati, čuti, organizirati — one form, both aspects'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — dvovidnost je vaša! 🏆',
        good: 'Vrlo dobro vladanje dvovidnim glagolima! 💪',
        more: 'Dvovidni glagoli traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
