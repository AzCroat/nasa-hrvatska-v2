import React from 'react';
import ModeDrill from './ModeDrill';

// C2 calques drill (C2 tranche 8, 2026-08-15): verb calques (adresirati
// problem, praviti smisao, uzeti mjesto), phrase calques (najbolji ikad,
// na kraju dana, biti u mogucnosti) and loan replacement (deadline → rok,
// feedback → povratna informacija).
const MODE_LABEL: Record<string, string> = {
  glagoli: '🏃 Glagolski kalkovi',
  izrazi: '🧱 Izrazi',
  prepoznaj: '🔍 Prepoznavanje',
};

const DATA = [
  {
    mode: 'glagoli',
    q: 'Umjesto kalka „adresirati problem” standard kaže:',
    opts: [
      'pozabaviti se problemom',
      'adresirati pismo problemu',
      'osloviti problem',
      'problemirati',
    ],
    answer: 'pozabaviti se problemom',
    en: 'to address a problem — the calque fix',
    tip: 'Adresirati je za pošiljke; problemom se bavimo.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „to pravi smisao” standard kaže:',
    opts: ['to ima smisla', 'to čini smisao', 'to izrađuje smisao', 'smisleno pravi'],
    answer: 'to ima smisla',
    en: 'that makes sense → ima smisla',
    tip: 'Make sense ≠ praviti smisao.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „napraviti razliku” (biti važan) standard kaže:',
    opts: [
      'promijeniti stvari nabolje / biti presudan',
      'izraditi razliku',
      'učiniti razliku svima',
      'razlikovati se',
    ],
    answer: 'promijeniti stvari nabolje / biti presudan',
    en: 'to make a difference',
    tip: 'Napraviti razliku = doslovno razlikovati dvije stvari.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „uzeti mjesto” standard kaže:',
    opts: ['održati se / dogoditi se', 'zauzeti mjesto sjedeći', 'uzeti prostor', 'mjestiti se'],
    answer: 'održati se / dogoditi se',
    en: 'to take place',
    tip: 'Konferencija se održava, ne uzima mjesto.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „trčati kampanju” standard kaže:',
    opts: ['voditi kampanju', 'trčati izbore', 'juriti kampanju', 'hodati kampanju'],
    answer: 'voditi kampanju',
    en: 'to run a campaign → voditi',
    tip: 'Run ≠ trčati u prenesenu značenju.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „imati poentu” standard kaže:',
    opts: [
      'imati pravo / biti u pravu',
      'posjedovati poentu',
      'nositi poentu',
      'poentirati stalno',
    ],
    answer: 'imati pravo / biti u pravu',
    en: 'to have a point',
    tip: 'Imaš pravo — ne imaš poentu.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „aplicirati za posao” standard kaže:',
    opts: [
      'prijaviti se za posao',
      'aplicirati posao',
      'nanijeti se na posao',
      'poslati aplikaciju kožnu',
    ],
    answer: 'prijaviti se za posao',
    en: 'to apply for a job → prijaviti se',
    tip: 'Aplicirati je nanositi (boju, kremu); za posao se prijavljujemo.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „fokusirati se na” u biranom stilu:',
    opts: ['usredotočiti se na', 'fokus staviti', 'žarištiti se', 'centrirati se'],
    answer: 'usredotočiti se na',
    en: 'to focus on → usredotočiti se',
    tip: 'Domaći glagol pokriva isto.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „najbolji ikad” standard kaže:',
    opts: [
      'najbolji dosad / svih vremena',
      'najbolji ikada više',
      'ikad najbolji',
      'najbolji od ikad',
    ],
    answer: 'najbolji dosad / svih vremena',
    en: 'best ever → najbolji dosad',
    tip: 'Ikad je upitno-odnosni prilog, ne pojačivač.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „na kraju dana” (zaključno) standard kaže:',
    opts: ['na koncu / u konačnici', 'kad padne mrak', 'na kraju radnog dana', 'dok dan traje'],
    answer: 'na koncu / u konačnici',
    en: 'at the end of the day → na koncu',
    tip: 'Kalk iz engleske retorike.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „u roku od odmah” razgovorno-kalkiranog „ASAP”:',
    opts: ['što prije / čim prije', 'asapno', 'u asapu', 'brzo-brzo službeno'],
    answer: 'što prije / čim prije',
    en: 'ASAP → sto prije',
    tip: 'Molim odgovor što prije.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „biti u mogućnosti” jednostavnije je:',
    opts: ['moći', 'imati mogućnost moći', 'biti sposoban za moći', 'mogućiti'],
    answer: 'moći',
    en: 'to be in a position to → moci',
    tip: 'Birokratska perifraza → običan glagol.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „vršiti pritisak” jednostavnije je:',
    opts: ['pritiskati', 'pritisak vršiti jače', 'izvršavati tlak', 'tlačiti papire'],
    answer: 'pritiskati',
    en: 'to exert pressure',
    tip: 'Vršiti + imenica često skriva običan glagol.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „dati podršku” jednostavnije je:',
    opts: ['poduprijeti / podržati', 'darovati podršku', 'dati potporni stup', 'podrškovati'],
    answer: 'poduprijeti / podržati',
    en: 'to give support → podrzati',
    tip: 'Analitička perifraza → jedan glagol.',
  },
  {
    mode: 'izrazi',
    q: '„Imati na umu” prema kalku „držati u umu”:',
    opts: [
      'imati na umu je standard',
      'držati u umu je standard',
      'oba jednako',
      'nijedno ne postoji',
    ],
    answer: 'imati na umu je standard',
    en: 'keep in mind → imati na umu',
    tip: 'Domaći frazem već postoji — kalk je suvišan.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „praviti novac” standard kaže:',
    opts: ['zarađivati', 'kovati novac doslovno', 'izrađivati novčanice', 'novčiti'],
    answer: 'zarađivati',
    en: 'to make money → zaradjivati',
    tip: 'Novac se zarađuje (kuje ga kovnica).',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je prilog kalkiran iz engleskoga?',
    opts: [
      'definitivno ću doći (svakako)',
      'svakako ću doći',
      'sigurno ću doći',
      'doći ću bez sumnje',
    ],
    answer: 'definitivno ću doći (svakako)',
    en: 'definitely — the anglicism',
    tip: 'Definitivno = konačno; za sigurnost: svakako.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je frazem doslovno preveden?',
    opts: [
      'to nije moja šalica čaja',
      'to nije za mene',
      'to me ne privlači',
      'nisam ljubitelj toga',
    ],
    answer: 'to nije moja šalica čaja',
    en: 'not my cup of tea — calque',
    tip: 'Doslovni prijevod engleskoga frazema.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji izraz kalkira „second thoughts”?',
    opts: [
      'imati druge misli (predomišljanje)',
      'predomisliti se',
      'razmisliti ponovno',
      'dvojiti',
    ],
    answer: 'imati druge misli (predomišljanje)',
    en: 'to have second thoughts — calque',
    tip: 'Standard: predomisliti se, dvojiti.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je izraz kalk za tremu?',
    opts: ['leptirići u trbuhu', 'trema', 'uzbuđenje', 'žmarci'],
    answer: 'leptirići u trbuhu',
    en: 'butterflies in the stomach — calque',
    tip: 'Doslovan prijevod; domaće: trema, žmarci.',
  },
  {
    mode: 'prepoznaj',
    q: '„Selfie, lajkati, šerati” u standardu:',
    opts: [
      'prilagođuju se ili zamjenjuju (podijeliti)',
      'zabranjeni su',
      'pišu se izvorno u kurzivu uvijek',
      'nemaju zamjene',
    ],
    answer: 'prilagođuju se ili zamjenjuju (podijeliti)',
    en: 'adapting social-media loans',
    tip: 'Šerati → podijeliti; lajkati → sviđati se/označiti sviđanje.',
  },
  {
    mode: 'prepoznaj',
    q: '„Event” u poslovnom žargonu standard zamjenjuje:',
    opts: ['događanje / priredba', 'ivent malim slovom', 'evenat', 'skup jedino'],
    answer: 'događanje / priredba',
    en: 'event → dogadjanje',
    tip: 'Poslovni anglizmi imaju domaće parnjake.',
  },
  {
    mode: 'prepoznaj',
    q: '„Deadline” standard zamjenjuje:',
    opts: ['rok', 'mrtva linija', 'crta smrti', 'kraj vremena'],
    answer: 'rok',
    en: 'deadline',
    tip: 'Do roka, prije roka, probiti rok.',
  },
  {
    mode: 'prepoznaj',
    q: '„Feedback” standard zamjenjuje:',
    opts: ['povratna informacija', 'hranjenje natrag', 'odjek zvuka', 'odgovor jedino'],
    answer: 'povratna informacija',
    en: 'feedback',
    tip: 'Dati povratnu informaciju.',
  },
];

export { DATA as KALKOVI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KalkoviDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kalkovi"
      title={'🧬 Kalkovi i anglizmi'}
      subtitle={'adresirati problem, praviti smisao — spotting borrowed thinking'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — kalkovi vas ne varaju! 🏆',
        good: 'Vrlo dobro prepoznavanje kalkova! 💪',
        more: 'Kalkovi i anglizmi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
