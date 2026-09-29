import React from 'react';
import ModeDrill from './ModeDrill';

// C2 figures-of-speech drill (C2 tranche 9, 2026-08-15): recognizing the
// core figures (metaphor, metonymy, hyperbole, litotes, irony, anaphora,
// onomatopoeia), telling them apart, and reading them in headlines,
// literature and ads.
const MODE_LABEL: Record<string, string> = {
  prepoznaj: '🔍 Prepoznavanje',
  razlike: '⚖️ Razlike',
  citanje: '📖 U tekstu',
};

const DATA = [
  {
    mode: 'prepoznaj',
    q: '„More se smije” sadrži:',
    opts: ['personifikaciju', 'hiperbolu', 'ironiju', 'litotu'],
    answer: 'personifikaciju',
    en: 'the sea laughs — personification',
    tip: 'Neživo dobiva ljudsku radnju.',
  },
  {
    mode: 'prepoznaj',
    q: '„Rekao sam ti to sto puta!” sadrži:',
    opts: ['hiperbolu', 'litotu', 'metonimiju', 'epitet'],
    answer: 'hiperbolu',
    en: 'I told you a hundred times',
    tip: 'Pretjerivanje radi isticanja.',
  },
  {
    mode: 'prepoznaj',
    q: '„Nije to loše” (za izvrsnu stvar) sadrži:',
    opts: ['litotu', 'hiperbolu', 'personifikaciju', 'onomatopeju'],
    answer: 'litotu',
    en: 'not bad at all — litotes',
    tip: 'Ublaženo niječno umjesto pohvale.',
  },
  {
    mode: 'prepoznaj',
    q: '„Popio je cijelu čašu” — a mislimo na sadržaj. To je:',
    opts: ['metonimija', 'metafora', 'ironija', 'anafora'],
    answer: 'metonimija',
    en: 'he drank the glass — metonymy',
    tip: 'Posuda za sadržaj.',
  },
  {
    mode: 'prepoznaj',
    q: '„Baš si mi pomogao!” (nakon štete) sadrži:',
    opts: ['ironiju', 'litotu', 'epitet', 'gradaciju'],
    answer: 'ironiju',
    en: 'great help you were! — irony',
    tip: 'Suprotno od rečenoga.',
  },
  {
    mode: 'prepoznaj',
    q: '„Zlatne ruke, srce od kamena” — oba izraza su:',
    opts: ['metafore', 'poredbe', 'onomatopeje', 'anafore'],
    answer: 'metafore',
    en: 'golden hands, heart of stone',
    tip: 'Prijenos značenja bez kao.',
  },
  {
    mode: 'prepoznaj',
    q: '„Zuji, zveči, zvoni, zvuči” sadrži:',
    opts: ['onomatopeju i aliteraciju', 'ironiju', 'litotu', 'metonimiju'],
    answer: 'onomatopeju i aliteraciju',
    en: 'buzzing, clanging — sound figures',
    tip: 'Zvuk oponaša značenje; z se ponavlja.',
  },
  {
    mode: 'prepoznaj',
    q: '„Kamo ideš, kamo žuriš, kamo bježiš?” sadrži:',
    opts: ['anaforu', 'epiforu', 'litotu', 'metonimiju'],
    answer: 'anaforu',
    en: 'where…, where…, where… — anaphora',
    tip: 'Isti početak uzastopnih cjelina.',
  },
  {
    mode: 'razlike',
    q: 'Metafora se od poredbe razlikuje:',
    opts: ['nema poredbene riječi (kao)', 'duža je', 'ima rimu', 'uvijek je smiješna'],
    answer: 'nema poredbene riječi (kao)',
    en: 'metaphor drops the like',
    tip: 'Hrabar je kao lav (poredba) → on je lav (metafora).',
  },
  {
    mode: 'razlike',
    q: '„Hrvatska je pobijedila” (reprezentacija) je:',
    opts: ['metonimija (zemlja za momčad)', 'hiperbola', 'ironija', 'litota'],
    answer: 'metonimija (zemlja za momčad)',
    en: 'Croatia won — metonymy',
    tip: 'Cjelina za dio: država za tim.',
  },
  {
    mode: 'razlike',
    q: 'Eufemizam je:',
    opts: ['blaži izraz za neugodno', 'pretjerivanje', 'izrugivanje', 'ponavljanje'],
    answer: 'blaži izraz za neugodno',
    en: 'a euphemism softens',
    tip: 'Preminuo je; treća dob; skromnih mogućnosti.',
  },
  {
    mode: 'razlike',
    q: '„Grmi i sijeva, a on ni da trepne” — kontrast je:',
    opts: ['antiteza', 'anafora', 'epitet', 'elipsa'],
    answer: 'antiteza',
    en: 'thunder vs calm — antithesis',
    tip: 'Suprotstavljene slike.',
  },
  {
    mode: 'razlike',
    q: '„Stotine i stotine, tisuće, mnoštvo!” niže:',
    opts: ['gradaciju', 'litotu', 'ironiju', 'metonimiju'],
    answer: 'gradaciju',
    en: 'hundreds, thousands — gradation',
    tip: 'Pojačavanje u nizu.',
  },
  {
    mode: 'razlike',
    q: '„Bijeli snijeg” kao stalni ukras je:',
    opts: ['epitet', 'metafora', 'ironija', 'elipsa'],
    answer: 'epitet',
    en: 'white snow — an epithet',
    tip: 'Stalni pridjev slike.',
  },
  {
    mode: 'razlike',
    q: 'Retoričko pitanje:',
    opts: ['ne očekuje odgovor', 'traži brz odgovor', 'postavlja ga sudac', 'uvijek je uvreda'],
    answer: 'ne očekuje odgovor',
    en: 'expects no answer',
    tip: 'Tko to još ne zna?',
  },
  {
    mode: 'razlike',
    q: '„Kupio kruh, mlijeko, novine.” (bez veznika) je:',
    opts: ['asindeton', 'polisindeton', 'anafora', 'antiteza'],
    answer: 'asindeton',
    en: 'no conjunctions — asyndeton',
    tip: 'Nabrajanje bez i.',
  },
  {
    mode: 'citanje',
    q: '„Cijeli je grad izašao na ulice” — figura:',
    opts: ['hiperbola s metonimijom', 'litota', 'ironija', 'epitet'],
    answer: 'hiperbola s metonimijom',
    en: 'the whole town came out',
    tip: 'Grad = ljudi; cijeli = pretjerano.',
  },
  {
    mode: 'citanje',
    q: 'Naslov „Tišina koja govori” počiva na:',
    opts: ['paradoksu/oksimoronu', 'anafori', 'asindetonu', 'epitetu'],
    answer: 'paradoksu/oksimoronu',
    en: 'the silence that speaks',
    tip: 'Proturječje s dubljim smislom.',
  },
  {
    mode: 'citanje',
    q: '„Otišao je među zvijezde” (o smrti) je:',
    opts: ['eufemizam', 'ironija', 'litota', 'gradacija'],
    answer: 'eufemizam',
    en: 'he went to the stars',
    tip: 'Ublažena slika smrti.',
  },
  {
    mode: 'citanje',
    q: 'Reklama „Najbolji okus ikada!” rabi:',
    opts: ['hiperbolu', 'litotu', 'antitezu', 'elipsu'],
    answer: 'hiperbolu',
    en: 'best taste ever!',
    tip: 'Reklamno pretjerivanje.',
  },
  {
    mode: 'citanje',
    q: '„Pametan k’o noć” u šali je:',
    opts: ['ironija', 'pohvala', 'litota', 'eufemizam'],
    answer: 'ironija',
    en: 'smart as the night = not smart',
    tip: 'Poredba s obrnutim značenjem.',
  },
  {
    mode: 'citanje',
    q: '„Danas — kiša. Sutra — sunce.” izostavlja glagole:',
    opts: ['elipsa', 'anafora', 'metafora', 'gradacija'],
    answer: 'elipsa',
    en: 'ellipsis drops the verbs',
    tip: 'Sažetost novinskoga stila.',
  },
  {
    mode: 'citanje',
    q: 'Političar „nije najsretnije formulirao” izjavu — figura:',
    opts: ['litota (ublažavanje kritike)', 'hiperbola', 'onomatopeja', 'anafora'],
    answer: 'litota (ublažavanje kritike)',
    en: 'not the happiest phrasing',
    tip: 'Diplomatska litota.',
  },
  {
    mode: 'citanje',
    q: 'Prepoznavanje figura pomaže:',
    opts: [
      'čitanju književnosti i medija s razumijevanjem',
      'samo pjesnicima',
      'pravopisu',
      'izgovoru',
    ],
    answer: 'čitanju književnosti i medija s razumijevanjem',
    en: 'figures unlock literature and media',
    tip: 'Cilj: čitati između redaka.',
  },
];

export { DATA as STILSKE_FIGURE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function StilskeFigureDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="stilskefigure"
      title={'🎭 Stilske figure'}
      subtitle={'metafora, ironija, litota — reading between the lines'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — figure su vaše! 🏆',
        good: 'Vrlo dobro prepoznavanje stilskih figura! 💪',
        more: 'Stilske figure traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
