import React from 'react';
import ModeDrill from './ModeDrill';

// B2 — Croatian participles: glagolski prilog sadašnji (present adverbial, -ći),
// glagolski prilog prošli (past adverbial, -vši) and the passive/past participle
// (trpni / radni pridjev) in attributive and adverbial use.
const DATA = [
  {
    q: '___ knjigu, zaspao je. (čitati — while reading)',
    opts: ['Čitajući', 'Čitati', 'Čitao', 'Pročitavši'],
    answer: 'Čitajući',
    en: 'While reading a book, he fell asleep.',
    tip: 'Present adverbial participle (simultaneous action): 3rd pl present čita-ju → čita-jući.',
  },
  {
    q: '___ posao, otišao je kući. (završiti — having finished)',
    opts: ['Završivši', 'Završavajući', 'Završiti', 'Završen'],
    answer: 'Završivši',
    en: 'Having finished the work, he went home.',
    tip: 'Past adverbial participle (prior action): perfective infinitive stem + -vši: završi-vši.',
  },
  {
    q: '___ na posao, sreo je prijatelja. (ići — while going)',
    opts: ['Idući', 'Išavši', 'Ići', 'Išao'],
    answer: 'Idući',
    en: 'While going to work, he met a friend.',
    tip: 'Present adverbial participle from ići: id-u → id-ući → idući.',
  },
  {
    q: '___ vijest, počela je plakati. (čuti — having heard)',
    opts: ['Čuvši', 'Čujući', 'Čula', 'Čuti'],
    answer: 'Čuvši',
    en: 'Having heard the news, she started crying.',
    tip: 'Past adverbial participle (the hearing came first): ču-ti → ču-vši.',
  },
  {
    q: '___ na klupi, odmarao se. (sjediti — while sitting)',
    opts: ['Sjedeći', 'Sjedivši', 'Sjedio', 'Sjediti'],
    answer: 'Sjedeći',
    en: 'Sitting on the bench, he was resting.',
    tip: 'Present adverbial participle: sjed-e → sjed-eći (i-class verbs take -eći).',
  },
  {
    q: 'To je dobro ___ esej. (write — passive participle)',
    opts: ['napisan', 'napisao', 'pišući', 'napisavši'],
    answer: 'napisan',
    en: 'That is a well-written essay.',
    tip: 'Passive participle used attributively (masc sg): napisati → napisan.',
  },
  {
    q: 'Vrata su bila ___. (open — passive participle, neut pl)',
    opts: ['otvorena', 'otvoren', 'otvoreno', 'otvarajući'],
    answer: 'otvorena',
    en: 'The door was open(ed).',
    tip: 'Passive participle agrees with vrata (neuter pl): otvoren-a.',
  },
  {
    q: '___ istinu, nije ništa rekao. (znati — knowing)',
    opts: ['Znajući', 'Znavši', 'Znao', 'Znati'],
    answer: 'Znajući',
    en: 'Knowing the truth, he said nothing.',
    tip: 'Present adverbial participle: zna-ju → zna-jući.',
  },
  {
    q: '___ kući, legao je spavati. (doći — having arrived)',
    opts: ['Došavši', 'Dolazeći', 'Došao', 'Doći'],
    answer: 'Došavši',
    en: 'Having arrived home, he went to sleep.',
    tip: 'Past adverbial participle: perfective doći (dođ-) → doš-avši.',
  },
  {
    q: 'Pročitao je ___ pismo. (received — passive participle)',
    opts: ['primljeno', 'primljen', 'primivši', 'primati'],
    answer: 'primljeno',
    en: 'He read the received letter.',
    tip: 'Passive participle agreeing with pismo (neuter sg): primljen-o.',
  },
  {
    q: '___ pažljivo, sve je razumjela. (slušati — listening)',
    opts: ['Slušajući', 'Slušavši', 'Slušala', 'Slušati'],
    answer: 'Slušajući',
    en: 'Listening carefully, she understood everything.',
    tip: 'Present adverbial participle: sluša-ju → sluša-jući.',
  },
  {
    q: 'Grad ima mnogo ___ zgrada. (build — passive participle, gen pl)',
    opts: ['izgrađenih', 'izgrađen', 'gradeći', 'izgradivši'],
    answer: 'izgrađenih',
    en: 'The city has many built(-up) buildings.',
    tip: 'Passive participle declined (gen pl after mnogo): izgrađen-ih.',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the correct participle' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ParticipleDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="participles"
      title={'🍂 Participles'}
      subtitle={'Adverbial (-ći / -vši) and passive participles'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Participles mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — participles take time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
