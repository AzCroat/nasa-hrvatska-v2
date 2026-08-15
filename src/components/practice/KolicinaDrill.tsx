import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import { useStats } from '../../context/StatsContext';

import { rnd } from '../../lib/random.js';
import { drawDrillRun } from '../../lib/drillRun';
function shLocal<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

// B2 quantity drill (B2 tranche 6, 2026-08-15): the partitive genitive
// after measures (casa vode, kilogram jabuka), quantity words (malo/dosta/
// previse/nekoliko + G, nema + G) and countability nuances (mnogo vs puno,
// casa vina vs casa za vino, fractions + G pl).
const MODE_LABEL: Record<string, string> = {
  partitiv: '🥛 Partitivni G',
  mjere: '⚖️ Mjere',
  brojivo: '🔢 Brojivo i ne',
};

const DATA = [
  {
    mode: 'partitiv',
    q: 'Popij čašu ____ ! (voda)',
    opts: ['vode', 'vodu', 'vodi', 'vodom'],
    answer: 'vode',
    en: 'drink a glass of water',
    tip: 'Mjera + partitivni genitiv: čaša vode.',
  },
  {
    mode: 'partitiv',
    q: 'Kupi kilogram ____ . (jabuke)',
    opts: ['jabuka', 'jabuke', 'jabukama', 'jabuku'],
    answer: 'jabuka',
    en: 'buy a kilo of apples',
    tip: 'Kilogram + G mn: kilogram jabuka.',
  },
  {
    mode: 'partitiv',
    q: 'Dodaj malo ____ . (sol)',
    opts: ['soli', 'sol', 'solju', 'solima'],
    answer: 'soli',
    en: 'add a little salt',
    tip: 'Malo/mnogo/dosta + genitiv.',
  },
  {
    mode: 'partitiv',
    q: 'Na stolu je komad ____ . (kruh)',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    en: 'there is a piece of bread on the table',
    tip: 'Komad/kriška/šalica + G.',
  },
  {
    mode: 'partitiv',
    q: 'Imamo dosta ____ . (vrijeme)',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: 'we have enough time',
    tip: 'Dosta + G: dosta vremena, dosta posla.',
  },
  {
    mode: 'partitiv',
    q: 'U hladnjaku nema ____ . (mlijeko)',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    en: 'there is no milk in the fridge',
    tip: 'Nema + G (niječno postojanje).',
  },
  {
    mode: 'partitiv',
    q: 'Želite li još ____ ? (juha)',
    opts: ['juhe', 'juhu', 'juhi', 'juhom'],
    answer: 'juhe',
    en: 'would you like more soup?',
    tip: 'Još + partitivni G: još juhe, još kave.',
  },
  {
    mode: 'partitiv',
    q: 'Pojeo je previše ____ . (kolači)',
    opts: ['kolača', 'kolače', 'kolačima', 'kolači'],
    answer: 'kolača',
    en: 'he ate too many cakes',
    tip: 'Previše/premalo + G mn.',
  },
  {
    mode: 'mjere',
    q: 'Litra ____ , molim. (ulje)',
    opts: ['ulja', 'ulje', 'ulju', 'uljem'],
    answer: 'ulja',
    en: 'a litre of oil, please',
    tip: 'Mjerne jedinice + G: litra ulja, metar tkanine.',
  },
  {
    mode: 'mjere',
    q: 'Šalica ____ ujutro je obavezna. (kava)',
    opts: ['kave', 'kavu', 'kavi', 'kavom'],
    answer: 'kave',
    en: 'a cup of coffee in the morning is a must',
    tip: 'Šalica kave, čaša soka.',
  },
  {
    mode: 'mjere',
    q: 'Vrećica ____ , molim. (bomboni)',
    opts: ['bombona', 'bombone', 'bombonima', 'bomboni'],
    answer: 'bombona',
    en: 'a bag of sweets, please',
    tip: 'Vrećica + G mn: vrećica bombona.',
  },
  {
    mode: 'mjere',
    q: 'Buket ____ za rođendan. (ruže)',
    opts: ['ruža', 'ruže', 'ružama', 'ružu'],
    answer: 'ruža',
    en: 'a bouquet of roses for the birthday',
    tip: 'Buket + G mn: buket ruža, buket cvijeća.',
  },
  {
    mode: 'mjere',
    q: 'Nekoliko ____ čekalo je ispred. (putnik)',
    opts: ['putnika', 'putnici', 'putnicima', 'putnike'],
    answer: 'putnika',
    en: 'several passengers waited outside',
    tip: 'Nekoliko + G mn: nekoliko putnika.',
  },
  {
    mode: 'mjere',
    q: 'Većina ____ glasala je za. (zastupnici)',
    opts: ['zastupnika', 'zastupnici', 'zastupnicima', 'zastupnike'],
    answer: 'zastupnika',
    en: 'most representatives voted in favour',
    tip: 'Većina/manjina + G mn.',
  },
  {
    mode: 'mjere',
    q: 'Par ____ i krećemo. (minute)',
    opts: ['minuta', 'minute', 'minutama', 'minutu'],
    answer: 'minuta',
    en: 'a couple of minutes and we are off',
    tip: 'Par + G mn: par minuta.',
  },
  {
    mode: 'mjere',
    q: 'Pola ____ dovoljno je. (sat)',
    opts: ['sata', 'sat', 'satu', 'satom'],
    answer: 'sata',
    en: 'half an hour is enough',
    tip: 'Pola + G jd: pola sata, pola kruha.',
  },
  {
    mode: 'brojivo',
    q: '„Mnogo” ili „puno” u biranom stilu:',
    opts: ['mnogo', 'puno', 'oba nikad', 'hrpa'],
    answer: 'mnogo',
    en: 'many/much — formal choice',
    tip: 'Birano: mnogo ljudi; puno je razgovorno.',
  },
  {
    mode: 'brojivo',
    q: 'Uz brojive imenice „nekoliko” znači:',
    opts: ['neodređen manji broj (3-10)', 'točno tri', 'više od sto', 'ništa'],
    answer: 'neodređen manji broj (3-10)',
    en: 'several = a small indefinite number',
    tip: 'Nekoliko knjiga = otprilike 3-10.',
  },
  {
    mode: 'brojivo',
    q: '„Malo ljudi” prema „nekoliko ljudi”:',
    opts: [
      'malo naglašava oskudicu',
      'nekoliko naglašava oskudicu',
      'znače isto uvijek',
      'malo znači nula',
    ],
    answer: 'malo naglašava oskudicu',
    en: 'malo stresses scarcity',
    tip: 'Malo ljudi je došlo (premalo); nekoliko = neutralno.',
  },
  {
    mode: 'brojivo',
    q: 'Uz zbrojeve „sto”, „tisuću”, „milijun” imenica stoji u:',
    opts: ['genitivu množine', 'nominativu množine', 'dativu', 'akuzativu jednine'],
    answer: 'genitivu množine',
    en: 'hundreds and thousands take G pl',
    tip: 'Sto kuna, tisuću ljudi, milijun razloga.',
  },
  {
    mode: 'brojivo',
    q: '„Čaša vina” prema „čaša za vino”:',
    opts: [
      'prva je sadržaj, druga namjena',
      'prva je namjena, druga sadržaj',
      'znače isto',
      'druga je pogrešna',
    ],
    answer: 'prva je sadržaj, druga namjena',
    en: 'a glass of wine vs a wine glass',
    tip: 'G = što je unutra; za + A = čemu služi.',
  },
  {
    mode: 'brojivo',
    q: 'Kako pitamo za količinu nebrojivoga?',
    opts: ['Koliko?', 'Koliki?', 'Koji?', 'Čiji?'],
    answer: 'Koliko?',
    en: 'how much? = koliko',
    tip: 'Koliko vode? Koliko vremena?',
  },
  {
    mode: 'brojivo',
    q: '„Trećina ____ nije glasovala.” (birači)',
    opts: ['birača', 'birači', 'biračima', 'birače'],
    answer: 'birača',
    en: 'a third of the voters did not vote',
    tip: 'Razlomci + G mn: trećina birača, četvrtina prihoda.',
  },
  {
    mode: 'brojivo',
    q: 'Nakon „obilje” dolazi:',
    opts: [
      'genitiv (obilje hrane)',
      'akuzativ (obilje hranu)',
      'dativ (obilje hrani)',
      'instrumental (obilje hranom)',
    ],
    answer: 'genitiv (obilje hrane)',
    en: 'an abundance of food',
    tip: 'Obilje/manjak/višak + G.',
  },
];

export { DATA as KOLICINA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KolicinaDrill({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    drawDrillRun(DATA).map((item) => ({ ...item, opts: shLocal([...item.opts]) })),
  );
  const total = q.length;
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);

  const cur = q[idx]!;
  const answered = chosen !== null;

  function pick(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === cur.answer) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= total) {
      if (!finishFired.current) {
        finishFired.current = true;
        const res = completeExercise({
          key: 'kolicina',
          score,
          total,
          xp: score * 5,
          stats,
          setStats,
          writeDelta,
          award,
        });
        setPassed(res.passed);
      }
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setChosen(null);
    }
  }

  if (done) {
    return (
      <div className="scr-wrap">
        {H(
          '🧺 Izricanje količine',
          'čaša vode, kilogram jabuka — the partitive genitive at work',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — količine su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje količinama! 💪'
                : 'Izricanje količine traži još vježbe.'}
          </div>
          {!passed && (
            <button
              className="b bp"
              data-testid="drill-retry"
              style={{ width: '100%', marginBottom: 10 }}
              onClick={() => {
                finishFired.current = false;
                setIdx(0);
                setChosen(null);
                setScore(0);
                setPassed(false);
                setDone(false);
              }}
            >
              🔁 Try again (need 75%)
            </button>
          )}
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scr-wrap">
      {H(
        '🧺 Izricanje količine',
        'čaša vode, kilogram jabuka — the partitive genitive at work',
        goBack,
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
        <span style={{ fontSize: 13, color: '#64748b', whiteSpace: 'nowrap' }}>
          {idx + 1} / {total}
        </span>
        <Bar v={idx + 1} mx={total} />
      </div>
      <div className="c" style={{ marginTop: 16 }}>
        <div
          style={{
            fontSize: 13,
            color: '#7c3aed',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {MODE_LABEL[cur.mode]}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{cur.q}</div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 14 }}>{cur.en}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {cur.opts.map((opt) => {
            const isCorrect = opt === cur.answer;
            const showState = answered && (isCorrect || opt === chosen);
            return (
              <button
                key={opt}
                onClick={() => pick(opt)}
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: answered ? 'default' : 'pointer',
                  border: showState
                    ? isCorrect
                      ? '2px solid #16a34a'
                      : '2px solid #dc2626'
                    : '1.5px solid var(--card-b)',
                  background: showState ? (isCorrect ? '#f0fdf4' : '#fef2f2') : 'var(--card)',
                  color: 'var(--text)',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div
            style={{
              marginTop: 14,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--bar-bg)',
              fontSize: 13,
              color: 'var(--subtext)',
            }}
          >
            💡 {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 14 }} onClick={next}>
            {idx + 1 >= total ? 'Rezultat →' : 'Dalje →'}
          </button>
        )}
      </div>
    </div>
  );
}
