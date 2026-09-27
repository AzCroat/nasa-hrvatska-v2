import React from 'react';
import ModeDrill from './ModeDrill';

// C2 precision drill — formal-register collocations, fixed preposition/case
// government, and near-synonym (prefix) discrimination: the "sounds like a
// native wrote it" layer. Distinct from the B1 CollocationsGame (everyday
// pairs like postaviti pitanje / položiti ispit); every item here is register
// or government territory the B1 game does not touch. Prompts are in Croatian
// — at C2 the metalanguage itself is part of the curriculum.
const MODE_LABEL: Record<string, string> = {
  glagolske: '🔗 Glagolske sveze',
  prijedlozi: '📍 Prijedlozi i padeži',
  nijanse: '🎯 Precizan izbor',
};

const DATA = [
  // ── Glagolske sveze (formal verb+noun collocations) ──
  {
    mode: 'glagolske',
    q: '„Sud je ____ zahtjev kao neosnovan.”',
    opts: ['odbacio', 'izbacio', 'prebacio', 'zabacio'],
    answer: 'odbacio',
    en: 'The court dismissed the claim as unfounded.',
    tip: 'Odbaciti zahtjev/tužbu/optužbe — pravni registar. Izbaciti = physically throw out.',
  },
  {
    mode: 'glagolske',
    q: '„Ministar je jučer ____ ostavku.”',
    opts: ['podnio', 'donio', 'postavio', 'učinio'],
    answer: 'podnio',
    en: 'The minister tendered his resignation yesterday.',
    tip: 'Podnijeti ostavku/zahtjev/izvještaj — službeni registar.',
  },
  {
    mode: 'glagolske',
    q: '„Iz ovoga događaja svi bismo trebali ____ pouku.”',
    opts: ['izvući', 'izvaditi', 'uzeti', 'dobiti'],
    answer: 'izvući',
    en: 'We should all draw a lesson from this event.',
    tip: 'Izvući pouku/zaključak/korist. Izvaditi je doslovno (izvaditi novčanik).',
  },
  {
    mode: 'glagolske',
    q: '„Tko će ____ posljedice za ovu pogrešku?”',
    opts: ['snositi', 'nositi', 'trpjeti', 'imati'],
    answer: 'snositi',
    en: 'Who will bear the consequences of this mistake?',
    tip: 'Snositi posljedice/odgovornost/troškove — bez prefiksa s- sveza gubi pravno-formalni ton.',
  },
  {
    mode: 'glagolske',
    q: '„Sudac je ____ presudu u korist tužitelja.”',
    opts: ['izrekao', 'rekao', 'izgovorio', 'iznio'],
    answer: 'izrekao',
    en: 'The judge pronounced a verdict in favour of the plaintiff.',
    tip: 'Izreći presudu/kaznu/opomenu. Izgovoriti se odnosi na artikulaciju riječi.',
  },
  {
    mode: 'glagolske',
    q: '„Nezadovoljni stanari ____ su žalbu na odluku.”',
    opts: ['uložili', 'stavili', 'poslali', 'učinili'],
    answer: 'uložili',
    en: 'The dissatisfied tenants lodged an appeal against the decision.',
    tip: 'Uložiti žalbu/prigovor/napor/novac — službena sveza.',
  },
  {
    mode: 'glagolske',
    q: '„Njegov je govor ____ pozornost cijele javnosti.”',
    opts: ['privukao', 'povukao', 'dovukao', 'navukao'],
    answer: 'privukao',
    en: 'His speech attracted the attention of the entire public.',
    tip: 'Privući pozornost/pažnju/ulagače. Prefiksi mijenjaju smjer: povući potez, navući zavjese.',
  },
  {
    mode: 'glagolske',
    q: '„Pri planiranju moraš ____ računa o rokovima.”',
    opts: ['voditi', 'imati', 'držati', 'uzimati'],
    answer: 'voditi',
    en: 'When planning, you must take the deadlines into account.',
    tip: 'Voditi računa o čemu — ustaljena sveza; „uzeti u obzir” je bliskoznačna alternativa.',
  },
  // ── Prijedlozi i padeži (fixed government) ──
  {
    mode: 'prijedlozi',
    q: '„S obzirom ____ okolnosti, put smo odgodili.”',
    opts: ['na', 'prema', 'o', 'za'],
    answer: 'na',
    en: 'Considering the circumstances, we postponed the trip.',
    tip: 'S obzirom NA + akuzativ. Oblik bez „s” („obzirom na”) ne pripada standardu.',
  },
  {
    mode: 'prijedlozi',
    q: '„U skladu ____ zakonom, ugovor je raskinut.”',
    opts: ['sa', 's', 'po', 'na'],
    answer: 'sa',
    en: 'In accordance with the law, the contract was terminated.',
    tip: 'U skladu s/sa + instrumental — ovdje „sa” jer sljedeća riječ počinje sa z- (sa zakonom).',
  },
  {
    mode: 'prijedlozi',
    q: '„Kad je riječ ____ financijama, oprez je nužan.”',
    opts: ['o', 'za', 'na', 'u'],
    answer: 'o',
    en: 'When it comes to finances, caution is essential.',
    tip: 'Riječ je O čemu + lokativ. „Za” je čest razgovorni otklon od standarda.',
  },
  {
    mode: 'prijedlozi',
    q: '„Unatoč ____ utakmica se ipak igrala.”',
    opts: ['kiši', 'kiše', 'kišom', 'kišu'],
    answer: 'kiši',
    en: 'Despite the rain, the match was played anyway.',
    tip: 'Unatoč/usprkos + DATIV (unatoč kiši), ne genitiv — česta pogreška i kod izvornih govornika.',
  },
  {
    mode: 'prijedlozi',
    q: '„Hvala vam ____ strpljenju i razumijevanju.”',
    opts: ['na', 'za', 'o', 'od'],
    answer: 'na',
    en: 'Thank you for your patience and understanding.',
    tip: 'Hvala/zahvaliti NA + lokativ (hvala na pomoći). „Hvala za” je otklon od standarda.',
  },
  {
    mode: 'prijedlozi',
    q: '„Svi se radujemo ____ .”',
    opts: ['vašem dolasku', 'vaš dolazak', 'vašega dolaska', 's vašim dolaskom'],
    answer: 'vašem dolasku',
    en: 'We are all looking forward to your arrival.',
    tip: 'Radovati se + DATIV (radujemo se dolasku), bez prijedloga.',
  },
  {
    mode: 'prijedlozi',
    q: '„On se odlično razumije ____ vina.”',
    opts: ['u', 'o', 'na', 'za'],
    answer: 'u',
    en: 'He knows a great deal about wines.',
    tip: 'Razumjeti se U što + akuzativ (razumjeti se u glazbu, u politiku).',
  },
  {
    mode: 'prijedlozi',
    q: '„Sve ovisi ____ vremenu.”',
    opts: ['o', 'od', 'na', 'iz'],
    answer: 'o',
    en: 'Everything depends on the weather.',
    tip: 'Ovisiti O čemu + lokativ. „Zavisiti od” nije hrvatski standard.',
  },
  // ── Precizan izbor (near-synonym / prefix discrimination) ──
  {
    mode: 'nijanse',
    q: '„Cijene su znatno ____ u odnosu na prošlu godinu.”',
    opts: ['porasle', 'narasle', 'uzrasle', 'izrasle'],
    answer: 'porasle',
    en: 'Prices have risen considerably compared to last year.',
    tip: 'Cijene/troškovi/kamate porastu; djeca narastu, biljke izrastu.',
  },
  {
    mode: 'nijanse',
    q: '„Novi zakon ____ na snagu prvoga siječnja.”',
    opts: ['stupa', 'ulazi', 'dolazi', 'staje'],
    answer: 'stupa',
    en: 'The new law comes into force on the first of January.',
    tip: 'Stupiti na snagu — pravna formula bez alternativa u standardu.',
  },
  {
    mode: 'nijanse',
    q: '„Ova odluka ____ za sobom ozbiljne posljedice.”',
    opts: ['povlači', 'vuče', 'nosi', 'tegli'],
    answer: 'povlači',
    en: 'This decision entails serious consequences.',
    tip: 'Povlačiti za sobom posljedice — preneseno; vući je doslovno.',
  },
  {
    mode: 'nijanse',
    q: '„Njihovi se stavovi bitno ____ .”',
    opts: ['razlikuju', 'razdvajaju', 'rastavljaju', 'odvajaju'],
    answer: 'razlikuju',
    en: 'Their views differ substantially.',
    tip: 'Stavovi se razlikuju; parovi se rastaju, predmeti se odvajaju.',
  },
  {
    mode: 'nijanse',
    q: '„Predsjednica je ____ dužnost u siječnju.”',
    opts: ['preuzela', 'uzela', 'zauzela', 'poduzela'],
    answer: 'preuzela',
    en: 'The president assumed office in January.',
    tip: 'Preuzeti dužnost/krivnju; poduzeti mjere; zauzeti grad/stav.',
  },
  {
    mode: 'nijanse',
    q: '„Policija je ____ istragu o nesreći.”',
    opts: ['pokrenula', 'potaknula', 'prenula', 'krenula'],
    answer: 'pokrenula',
    en: 'The police launched an investigation into the accident.',
    tip: 'Pokrenuti istragu/postupak/pitanje; potaknuti raspravu (dati poticaj, ne voditi).',
  },
  {
    mode: 'nijanse',
    q: '„Njegova je izjava ____ burne reakcije.”',
    opts: ['izazvala', 'pozvala', 'dozvala', 'sazvala'],
    answer: 'izazvala',
    en: 'His statement provoked heated reactions.',
    tip: 'Izazvati reakciju/bijes/podsmijeh; sazvati sjednicu; pozvati goste.',
  },
  {
    mode: 'nijanse',
    q: '„Rezultati ____ da je metoda učinkovita.”',
    opts: ['pokazuju', 'ukazuju', 'prikazuju', 'iskazuju'],
    answer: 'pokazuju',
    en: 'The results show that the method is effective.',
    tip: 'Pokazati DA + surečenica; ukazivati NA što (ukazuju na problem); prikazati film.',
  },
];

export { DATA as PRECISION_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrecisionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="preciznost"
      title={'🎯 Preciznost izraza'}
      subtitle={'snositi posljedice · unatoč kiši — native precision'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Izvorna preciznost — svaka sveza na mjestu! 🏆',
        good: 'Vrlo blizu izvornoga izraza! 💪',
        more: 'Ustaljene sveze i rekcija traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
