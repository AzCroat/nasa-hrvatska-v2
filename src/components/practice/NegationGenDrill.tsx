import React from 'react';
import ModeDrill from './ModeDrill';

const DATA = [
  {
    affirm: 'Imam brata.',
    neg_prompt: "I don't have a brother.",
    opts: ['Nemam brata.', 'Nemam brat.', 'Nemam bratu.', 'Nemam bratom.'],
    answer: 'Nemam brata.',
    en: "I don't have a brother.",
    tip: "'brat' (animate masc) — accusative and genitive singular look the same: 'brata'",
  },
  {
    affirm: 'Imam auto.',
    neg_prompt: "I don't have a car.",
    opts: ['Nemam auta.', 'Nemam auto.', 'Nemam autu.', 'Nemam autom.'],
    answer: 'Nemam auta.',
    en: "I don't have a car.",
    tip: "'auto' (inanimate masc) → accusative = nominative ('auto') but genitive = 'auta'. Nemati takes the genitive.",
  },
  {
    affirm: 'Imam novac.',
    neg_prompt: "I don't have money.",
    opts: ['Nemam novca.', 'Nemam novac.', 'Nemam novcu.', 'Nemam novcem.'],
    answer: 'Nemam novca.',
    en: "I don't have money.",
    tip: "'novac' (masc inanimate) → genitive 'novca'. Negation triggers genitive!",
  },
  {
    affirm: 'Imam knjigu.',
    neg_prompt: "I don't have the book.",
    opts: ['Nemam knjige.', 'Nemam knjigu.', 'Nemam knjizi.', 'Nemam knjigom.'],
    answer: 'Nemam knjige.',
    en: "I don't have the book.",
    tip: "'knjiga' (fem) → accusative 'knjigu' → genitive 'knjige'",
  },
  {
    affirm: 'Imam vremena.',
    neg_prompt: "I don't have time.",
    opts: ['Nemam vremena.', 'Nemam vrijeme.', 'Nemam vremenu.', 'Nemam vremenom.'],
    answer: 'Nemam vremena.',
    en: "I don't have time.",
    tip: "'vrijeme' (neuter) → genitive 'vremena'. Already genitive even affirmatively (partitive use)!",
  },
  {
    affirm: 'Imam psa.',
    neg_prompt: "I don't have a dog.",
    opts: ['Nemam psa.', 'Nemam pas.', 'Nemam psu.', 'Nemam psom.'],
    answer: 'Nemam psa.',
    en: "I don't have a dog.",
    tip: "'pas' (animate masc, fleeting -a-) → accusative and genitive look the same: 'psa'",
  },
  {
    affirm: 'Imam sestru.',
    neg_prompt: "I don't have a sister.",
    opts: ['Nemam sestre.', 'Nemam sestru.', 'Nemam sestri.', 'Nemam sestrom.'],
    answer: 'Nemam sestre.',
    en: "I don't have a sister.",
    tip: "'sestra' (fem) → accusative 'sestru' → genitive 'sestre'",
  },
  {
    affirm: 'Imam odgovor.',
    neg_prompt: "I don't have an answer.",
    opts: ['Nemam odgovora.', 'Nemam odgovor.', 'Nemam odgovoru.', 'Nemam odgovorom.'],
    answer: 'Nemam odgovora.',
    en: "I don't have an answer.",
    tip: "'odgovor' (masc inanimate) → genitive 'odgovora'",
  },
  {
    affirm: 'Imam posao.',
    neg_prompt: "I don't have a job.",
    opts: ['Nemam posla.', 'Nemam posao.', 'Nemam poslu.', 'Nemam poslom.'],
    answer: 'Nemam posla.',
    en: "I don't have a job.",
    tip: "'posao' (masc inanimate) → genitive 'posla'. Note vowel drop: posao → posl-",
  },
  {
    affirm: 'Imam kišobran.',
    neg_prompt: "I don't have an umbrella.",
    opts: ['Nemam kišobrana.', 'Nemam kišobran.', 'Nemam kišobranu.', 'Nemam kišobranom.'],
    answer: 'Nemam kišobrana.',
    en: "I don't have an umbrella.",
    tip: "'kišobran' (masc inanimate) → genitive 'kišobrana'",
  },
  {
    affirm: 'Imam ideju.',
    neg_prompt: "I don't have an idea.",
    opts: ['Nemam ideje.', 'Nemam ideju.', 'Nemam ideji.', 'Nemam idejom.'],
    answer: 'Nemam ideje.',
    en: "I don't have an idea.",
    tip: "'ideja' (fem) → accusative 'ideju' → genitive 'ideje'",
  },
  {
    affirm: 'Imam ulaznicu.',
    neg_prompt: "I don't have a ticket.",
    opts: ['Nemam ulaznice.', 'Nemam ulaznicu.', 'Nemam ulaznici.', 'Nemam ulaznicom.'],
    answer: 'Nemam ulaznice.',
    en: "I don't have a ticket.",
    tip: "'ulaznica' (fem) → accusative 'ulaznicu' → genitive 'ulaznice'",
  },
  {
    affirm: 'Imam ključ.',
    neg_prompt: "I don't have the key.",
    opts: ['Nemam ključa.', 'Nemam ključ.', 'Nemam ključu.', 'Nemam ključem.'],
    answer: 'Nemam ključa.',
    en: "I don't have the key.",
    tip: "'ključ' (masc inanimate) → genitive 'ključa'",
  },
  {
    affirm: 'Imam stan.',
    neg_prompt: "I don't have an apartment.",
    opts: ['Nemam stana.', 'Nemam stan.', 'Nemam stanu.', 'Nemam stanom.'],
    answer: 'Nemam stana.',
    en: "I don't have an apartment.",
    tip: "'stan' (masc inanimate) → genitive 'stana'",
  },
  {
    affirm: 'Imam kuću.',
    neg_prompt: "I don't have a house.",
    opts: ['Nemam kuće.', 'Nemam kuću.', 'Nemam kući.', 'Nemam kućom.'],
    answer: 'Nemam kuće.',
    en: "I don't have a house.",
    tip: "'kuća' (fem) → accusative 'kuću' → genitive 'kuće'",
  },
  {
    affirm: 'Imam dječaka.',
    neg_prompt: "I don't have a boy.",
    opts: ['Nemam dječaka.', 'Nemam dječak.', 'Nemam dječaku.', 'Nemam dječakom.'],
    answer: 'Nemam dječaka.',
    en: "I don't have a boy.",
    tip: "'dječak' (masc animate) → accusative and genitive look the same: 'dječaka'",
  },
  {
    affirm: 'Imam rješenje.',
    neg_prompt: "I don't have a solution.",
    opts: ['Nemam rješenja.', 'Nemam rješenje.', 'Nemam rješenju.', 'Nemam rješenjem.'],
    answer: 'Nemam rješenja.',
    en: "I don't have a solution.",
    tip: "'rješenje' (neuter) → genitive 'rješenja'",
  },
  {
    affirm: 'Imam bicikl.',
    neg_prompt: "I don't have a bike.",
    opts: ['Nemam bicikla.', 'Nemam bicikl.', 'Nemam biciklu.', 'Nemam biciklom.'],
    answer: 'Nemam bicikla.',
    en: "I don't have a bike.",
    tip: "'bicikl' (masc inanimate) → genitive 'bicikla'",
  },
  {
    affirm: 'Imam prijatelja.',
    neg_prompt: "I don't have a friend.",
    opts: ['Nemam prijatelja.', 'Nemam prijatelj.', 'Nemam prijatelju.', 'Nemam prijateljem.'],
    answer: 'Nemam prijatelja.',
    en: "I don't have a friend.",
    tip: "'prijatelj' (masc animate) → accusative and genitive sg look the same: 'prijatelja'",
  },
  {
    affirm: 'Imam mobitel.',
    neg_prompt: "I don't have a mobile phone.",
    opts: ['Nemam mobitela.', 'Nemam mobitel.', 'Nemam mobitelu.', 'Nemam mobitelom.'],
    answer: 'Nemam mobitela.',
    en: "I don't have a mobile phone.",
    tip: "'mobitel' (masc inanimate) → genitive 'mobitela'",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'How do you negate this?' };
const BANK = DATA.map(({ affirm, neg_prompt, en: _en, ...rest }) => ({
  ...rest,
  lead: affirm,
  q: neg_prompt,
  mode: 'fill',
}));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NegationGenDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="negationgen"
      title={'❌ Genitive of Negation'}
      subtitle={'Negate correctly — accusative shifts to genitive'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Genitive of negation mastered! 🏆',
        good: 'Great feel for negation! 💪',
        more: 'Keep practising — this rule is tricky but crucial!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
