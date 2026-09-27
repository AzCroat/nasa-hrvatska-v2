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
    affirm: 'Vidim auto.',
    neg_prompt: "I don't see the car.",
    opts: ['Ne vidim auta.', 'Ne vidim auto.', 'Ne vidim autu.', 'Ne vidim autom.'],
    answer: 'Ne vidim auta.',
    en: "I don't see the car.",
    tip: "'auto' (inanimate masc) → accusative = nominative ('auto') but genitive = 'auta'",
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
    affirm: 'Čitam knjigu.',
    neg_prompt: "I'm not reading a book.",
    opts: ['Ne čitam knjige.', 'Ne čitam knjigu.', 'Ne čitam knjizi.', 'Ne čitam knjiga.'],
    answer: 'Ne čitam knjige.',
    en: "I'm not reading a book.",
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
    affirm: 'Pijem kavu.',
    neg_prompt: "I'm not drinking coffee.",
    opts: ['Ne pijem kave.', 'Ne pijem kavu.', 'Ne pijem kavi.', 'Ne pijem kavom.'],
    answer: 'Ne pijem kave.',
    en: "I'm not drinking coffee.",
    tip: "'kava' (fem) → accusative 'kavu' → genitive 'kave'",
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
    affirm: 'Znam odgovor.',
    neg_prompt: "I don't know the answer.",
    opts: ['Ne znam odgovora.', 'Ne znam odgovor.', 'Ne znam odgovoru.', 'Ne znam odgovorom.'],
    answer: 'Ne znam odgovora.',
    en: "I don't know the answer.",
    tip: "'odgovor' (masc inanimate) → genitive 'odgovora'",
  },
  {
    affirm: 'Tražim posao.',
    neg_prompt: "I'm not looking for a job.",
    opts: ['Ne tražim posla.', 'Ne tražim posao.', 'Ne tražim poslu.', 'Ne tražim poslom.'],
    answer: 'Ne tražim posla.',
    en: "I'm not looking for a job.",
    tip: "'posao' (masc inanimate) → genitive 'posla'. Note vowel drop: posao → posl-",
  },
  {
    affirm: 'Kuham večeru.',
    neg_prompt: "I'm not cooking dinner.",
    opts: ['Ne kuham večere.', 'Ne kuham večeru.', 'Ne kuham večeri.', 'Ne kuham večerom.'],
    answer: 'Ne kuham večere.',
    en: "I'm not cooking dinner.",
    tip: "'večera' (fem) → accusative 'večeru' → genitive 'večere'",
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
    affirm: 'Vidim more.',
    neg_prompt: "I don't see the sea.",
    opts: ['Ne vidim mora.', 'Ne vidim more.', 'Ne vidim moru.', 'Ne vidim morima.'],
    answer: 'Ne vidim mora.',
    en: "I don't see the sea.",
    tip: "'more' (neuter) → genitive 'mora'",
  },
  {
    affirm: 'Tražim ključ.',
    neg_prompt: "I'm not looking for the key.",
    opts: ['Ne tražim ključa.', 'Ne tražim ključ.', 'Ne tražim ključu.', 'Ne tražim ključem.'],
    answer: 'Ne tražim ključa.',
    en: "I'm not looking for the key.",
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
    affirm: 'Čujem glazbu.',
    neg_prompt: "I don't hear the music.",
    opts: ['Ne čujem glazbe.', 'Ne čujem glazbu.', 'Ne čujem glazbi.', 'Ne čujem glazbom.'],
    answer: 'Ne čujem glazbe.',
    en: "I don't hear the music.",
    tip: "'glazba' (fem) → accusative 'glazbu' → genitive 'glazbe'",
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
    affirm: 'Znam rješenje.',
    neg_prompt: "I don't know the solution.",
    opts: ['Ne znam rješenja.', 'Ne znam rješenje.', 'Ne znam rješenju.', 'Ne znam rješenjem.'],
    answer: 'Ne znam rješenja.',
    en: "I don't know the solution.",
    tip: "'rješenje' (neuter) → genitive 'rješenja'",
  },
  {
    affirm: 'Pijem vodu.',
    neg_prompt: "I'm not drinking water.",
    opts: ['Ne pijem vode.', 'Ne pijem vodu.', 'Ne pijem vodi.', 'Ne pijem vodom.'],
    answer: 'Ne pijem vode.',
    en: "I'm not drinking water.",
    tip: "'voda' (fem) → accusative 'vodu' → genitive 'vode'",
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
    affirm: 'Tražim taksi.',
    neg_prompt: "I'm not looking for a taxi.",
    opts: ['Ne tražim taksija.', 'Ne tražim taksi.', 'Ne tražim taksiju.', 'Ne tražim taksijem.'],
    answer: 'Ne tražim taksija.',
    en: "I'm not looking for a taxi.",
    tip: "'taksi' (masc inanimate, foreign) → genitive 'taksija'",
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
