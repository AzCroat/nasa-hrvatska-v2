import React from 'react';
import ModeDrill from './ModeDrill';

// C1 — nominalization (glagolska imenica / deverbal nouns): forming the noun
// from a verb, the backbone of formal "nominal style". Mostly -nje, but several
// high-frequency deverbal nouns are irregular (dolazak, odluka, odgovor).
const DATA = [
  {
    mode: 'nje',
    q: 'čitati → ___ (the reading)',
    opts: ['čitanje', 'čitatelj', 'čitao', 'čitalac'],
    answer: 'čitanje',
    en: 'reading',
    tip: 'Verbal noun -nje from the passive participle stem: čita-nje.',
  },
  {
    mode: 'nje',
    q: 'putovati → ___ (the travel/journey)',
    opts: ['putovanje', 'putnik', 'putovao', 'put'],
    answer: 'putovanje',
    en: 'travelling / journey',
    tip: 'putova-nje (verbal noun); "putnik" = traveller, "put" = road/trip.',
  },
  {
    mode: 'nje',
    q: 'rješavati → ___ (the solving)',
    opts: ['rješavanje', 'rješenje', 'rješavač', 'riješen'],
    answer: 'rješavanje',
    en: 'the (process of) solving',
    tip: 'Imperfective → process noun rješava-nje; "rješenje" = the solution (result).',
  },
  {
    mode: 'nepravilne',
    q: 'dolaziti → ___ (the arrival)',
    opts: ['dolazak', 'dolaženje', 'dolazni', 'došao'],
    answer: 'dolazak',
    en: 'arrival',
    tip: 'Irregular deverbal noun: "dolazak" (not the regular -nje form).',
  },
  {
    mode: 'nepravilne',
    q: 'odlučiti → ___ (the decision)',
    opts: ['odluka', 'odlučivanje', 'odlučan', 'odlučio'],
    answer: 'odluka',
    en: 'decision',
    tip: '"odluka" = the decision (result); "odlučivanje" = the act of deciding.',
  },
  {
    mode: 'nepravilne',
    q: 'odgovoriti → ___ (the answer)',
    opts: ['odgovor', 'odgovaranje', 'odgovoran', 'odgovorio'],
    answer: 'odgovor',
    en: 'answer / reply',
    tip: 'Irregular deverbal noun "odgovor"; "odgovoran" = responsible (adjective).',
  },
  {
    mode: 'nje',
    q: 'razmišljati → ___ (the thinking)',
    opts: ['razmišljanje', 'razmislio', 'mislilac', 'razuman'],
    answer: 'razmišljanje',
    en: 'thinking / reflection',
    tip: 'razmišlja-nje (verbal noun).',
  },
  {
    mode: 'nepravilne',
    q: 'graditi → ___ (the construction)',
    opts: ['gradnja', 'graditelj', 'građen', 'gradio'],
    answer: 'gradnja',
    en: 'building / construction',
    tip: '"gradnja" (deverbal noun); "graditelj" = builder.',
  },
  {
    mode: 'nje',
    q: 'plivati → ___ (swimming)',
    opts: ['plivanje', 'plivač', 'plivao', 'pliva'],
    answer: 'plivanje',
    en: 'swimming',
    tip: 'pliva-nje (verbal noun); "plivač" = swimmer.',
  },
  {
    mode: 'nje',
    q: 'pisati → ___ (the writing)',
    opts: ['pisanje', 'pisac', 'pismo', 'pisao'],
    answer: 'pisanje',
    en: 'writing (the activity)',
    tip: 'pisa-nje (verbal noun); "pisac" = writer, "pismo" = letter.',
  },
  {
    mode: 'nje',
    q: 'učiti → ___ (learning)',
    opts: ['učenje', 'učenik', 'učio', 'učitelj'],
    answer: 'učenje',
    en: 'learning',
    tip: '-iti verbs take -enje: uči-ti → uč-enje. "učenik" = pupil, "učitelj" = teacher.',
  },
  {
    mode: 'nje',
    q: 'pjevati → ___ (singing)',
    opts: ['pjevanje', 'pjevač', 'pjevao', 'pjesma'],
    answer: 'pjevanje',
    en: 'singing',
    tip: 'pjeva-nje (verbal noun); "pjevač" = singer, "pjesma" = song.',
  },
  {
    mode: 'nepravilne',
    q: 'voziti → ___ (the ride, driving)',
    opts: ['vožnja', 'vozač', 'vozilo', 'vozio'],
    answer: 'vožnja',
    en: 'the ride, driving',
    tip: 'The everyday noun is "vožnja", with z → ž; "vozač" = driver, "vozilo" = vehicle.',
  },
  {
    mode: 'nepravilne',
    q: 'odlaziti → ___ (the departure)',
    opts: ['odlazak', 'odlaženje', 'odlazni', 'otišao'],
    answer: 'odlazak',
    en: 'departure',
    tip: 'Like dolazak: "odlazak" = departure. "odlazni" is the adjective (odlazni let).',
  },
  {
    mode: 'nepravilne',
    q: 'prodati → ___ (the sale)',
    opts: ['prodaja', 'prodavanje', 'prodavač', 'prodao'],
    answer: 'prodaja',
    en: 'sale',
    tip: '"prodaja" = sale (the result, the word business uses); "prodavač" = seller.',
  },
  {
    mode: 'nepravilne',
    q: 'početi → ___ (the beginning)',
    opts: ['početak', 'počinjanje', 'početni', 'počeo'],
    answer: 'početak',
    en: 'beginning',
    tip: '"početak" = beginning; "početni" is the adjective (početni tečaj).',
  },
  {
    mode: 'stil',
    q: 'Kad je vlada donijela odluku, … → Nakon ___ odluke, …',
    opts: ['donošenja', 'donošenje', 'donijeti', 'donesene'],
    answer: 'donošenja',
    en: 'After the decision was made, …',
    tip: 'Nakon + genitive, so the verbal noun donošenje goes into the genitive: nakon donošenja odluke.',
  },
  {
    mode: 'stil',
    q: 'Zato što je cijena porasla, … → Zbog ___ cijene, …',
    opts: ['porasta', 'porast', 'porasti', 'porasla'],
    answer: 'porasta',
    en: 'Because of the price rise, …',
    tip: 'Zbog + genitive: porast → porasta. "Zbog porasta cijene" is the nominal form of "zato što je cijena porasla".',
  },
  {
    mode: 'stil',
    q: 'Dok su gradili most, … → Tijekom ___ mosta, …',
    opts: ['gradnje', 'gradnja', 'graditi', 'gradnjom'],
    answer: 'gradnje',
    en: 'During the construction of the bridge, …',
    tip: 'Tijekom + genitive: gradnja → gradnje.',
  },
  {
    mode: 'stil',
    q: 'Da bismo poboljšali uslugu, … → Radi ___ usluge, …',
    opts: ['poboljšanja', 'poboljšanje', 'poboljšati', 'poboljšanom'],
    answer: 'poboljšanja',
    en: 'In order to improve the service, …',
    tip: 'Radi + genitive states a purpose in nominal style: radi poboljšanja usluge.',
  },
  {
    mode: 'stil',
    q: 'Kad smo stigli u hotel, … → Po ___ u hotel, …',
    opts: ['dolasku', 'dolazak', 'dolaska', 'dolaskom'],
    answer: 'dolasku',
    en: 'On arrival at the hotel, …',
    tip: 'Po + locative = upon: po dolasku, po završetku — the formal way to say "when we arrived".',
  },
  {
    mode: 'stil',
    q: 'Ako ne platite na vrijeme, … → U slučaju ___ na vrijeme, …',
    opts: ['neplaćanja', 'neplaćanje', 'neplaćanju', 'neplaćeno'],
    answer: 'neplaćanja',
    en: 'In case of non-payment on time, …',
    tip: 'U slučaju + genitive; the negation joins the verbal noun as one word: neplaćanje → neplaćanja.',
  },
  {
    mode: 'stil',
    q: 'Knjižnica je zatvorena jer se obnavlja. → Knjižnica je zatvorena zbog ___.',
    opts: ['obnove', 'obnova', 'obnoviti', 'obnovljena'],
    answer: 'obnove',
    en: 'The library is closed for renovation.',
    tip: 'Zbog + genitive: obnova → obnove. Formal notices prefer the noun to a "jer" clause.',
  },
  {
    mode: 'stil',
    q: 'Nakon što je završio studij, … → Po ___ studija, …',
    opts: ['završetku', 'završetak', 'završetka', 'završiti'],
    answer: 'završetku',
    en: 'After he finished his studies, …',
    tip: 'Po + locative: završetak → završetku (the a drops: završet-ku). After "nakon" it would be the genitive: nakon završetka.',
  },
];

// Three question types, 8 each (expanded 2026-09-27 from a single 10-item list), so
// the run is 4 of each — the same shape as every other engine drill.
const MODE_LABEL: Record<string, string> = {
  nje: '🔧 Glagolska imenica na -nje',
  nepravilne: '🧩 Nepravilne imenice',
  stil: '📄 Nominalni stil',
};

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NominalizationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="nominalization"
      title={'🏛️ Nominalization'}
      subtitle={'Verbal nouns and nominal style'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Perfect! Nominal style mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — deverbal nouns take time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
