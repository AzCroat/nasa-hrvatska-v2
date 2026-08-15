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

// C2 clitic-cluster drill (C2 tranche 4, 2026-08-15): order inside the
// cluster (li > verbal aux > dative > accusative > se > je; se absorbs je),
// second-position placement (no sentence-initial clitics, no leaning on
// i/a, parenthetical commas block attachment) and clusters after
// subordinators.
const MODE_LABEL: Record<string, string> = {
  poredak: '⛓️ Poredak',
  polozaj: '📍 Položaj',
  slozeni: '🧩 U zavisnima',
};

const DATA = [
  {
    mode: 'poredak',
    q: 'Dao ____ jučer. (je + mi + ga)',
    opts: ['mi ga je', 'je mi ga', 'ga mi je', 'mi je ga'],
    answer: 'mi ga je',
    en: 'he gave it to me yesterday',
    tip: 'Poredak: dativ → akuzativ → JE na kraju (mi ga je).',
  },
  {
    mode: 'poredak',
    q: 'Sjećam ____ često. (se + ga)',
    opts: ['ga se', 'se ga', 'se njega', 'njega se ga'],
    answer: 'ga se',
    en: 'I often remember him',
    tip: 'Zamjenica prije se: sjećam GA SE.',
  },
  {
    mode: 'poredak',
    q: 'Predstavila ____ jučer. (je + mu + ih)',
    opts: ['mu ih je', 'je mu ih', 'ih mu je', 'mu je ih'],
    answer: 'mu ih je',
    en: 'she introduced them to him yesterday',
    tip: 'Dativ (mu) → akuzativ (ih) → je.',
  },
  {
    mode: 'poredak',
    q: 'Bojiš ____ ? (li + se + ga)',
    opts: ['li ga se', 'li se ga', 'se li ga', 'ga li se'],
    answer: 'li ga se',
    en: 'are you afraid of him?',
    tip: 'LI je prva enklitika; zamjenica prije se.',
  },
  {
    mode: 'poredak',
    q: 'Smijali ____ cijelu večer. (smo + se + mu)',
    opts: ['smo mu se', 'smo se mu', 'mu smo se', 'se smo mu'],
    answer: 'smo mu se',
    en: 'we laughed at him all evening',
    tip: 'Glagolska (smo) → dativ (mu) → se.',
  },
  {
    mode: 'poredak',
    q: 'Ona ____ vratila. (povratni glagol, 3. jd. perfekta)',
    opts: ['se', 'se je', 'je se', 'si se'],
    answer: 'se',
    en: 'she came back',
    tip: 'Se + je stapa se u SE: vratila se (ne *vratila se je).',
  },
  {
    mode: 'poredak',
    q: 'Rekla ____ istinu. (bi + vam)',
    opts: ['bi vam', 'vam bi', 'bi vas', 'vam se bi'],
    answer: 'bi vam',
    en: 'she would tell you the truth',
    tip: 'Glagolska enklitika (bi) prije zamjeničke (vam).',
  },
  {
    mode: 'poredak',
    q: 'Hoćeš ____ pokazati? (li + mi + ga)',
    opts: ['li mi ga', 'li ga mi', 'mi li ga', 'ga mi li'],
    answer: 'li mi ga',
    en: 'will you show it to me?',
    tip: 'Li → dativ → akuzativ: hoćeš li mi ga pokazati.',
  },
  {
    mode: 'polozaj',
    q: 'Enklitike u rečenici stoje:',
    opts: [
      'na drugome mjestu, iza prve naglašene riječi',
      'uvijek na početku',
      'uvijek na kraju',
      'bilo gdje',
    ],
    answer: 'na drugome mjestu, iza prve naglašene riječi',
    en: 'clitics sit in second position',
    tip: 'Vukovsko pravilo: enklitika se naslanja na prvu naglašenu riječ.',
  },
  {
    mode: 'polozaj',
    q: 'Birani stil — koja je rečenica najbolja?',
    opts: [
      'Moja je sestra jučer stigla.',
      'Je moja sestra jučer stigla.',
      'Moja sestra jučer stigla je.',
      'Moja sestra jučer je bila stigla.',
    ],
    answer: 'Moja je sestra jučer stigla.',
    en: 'in careful style the clitic splits the phrase',
    tip: 'Birano: enklitika iza PRVE riječi (Moja JE sestra…).',
  },
  {
    mode: 'polozaj',
    q: 'Enklitika ne smije stajati:',
    opts: ['na početku rečenice', 'iza glagola', 'iza veznika da', 'na drugome mjestu'],
    answer: 'na početku rečenice',
    en: 'a clitic can never open the sentence',
    tip: '*Mi se čini → Čini mi se.',
  },
  {
    mode: 'polozaj',
    q: 'Jučer ____ ga vidio u gradu. (sam)',
    opts: ['sam', 'sam ja', 'je', 'bih'],
    answer: 'sam',
    en: 'yesterday I saw him in town',
    tip: 'Prilog otvara rečenicu, enklitike odmah iza: Jučer sam ga…',
  },
  {
    mode: 'polozaj',
    q: 'Umetnuta surečenica — koja je rečenica pravilna?',
    opts: [
      'Moj brat, koji živi u Splitu, došao je jučer.',
      'Moj brat, koji živi u Splitu, je došao jučer.',
      'Moj brat koji živi u Splitu je, došao jučer.',
      'Moj brat, je koji živi u Splitu, došao jučer.',
    ],
    answer: 'Moj brat, koji živi u Splitu, došao je jučer.',
    en: 'after a parenthetical the clitic cannot follow the comma',
    tip: 'Iza zareza enklitika ne može: umetak traži došao JE.',
  },
  {
    mode: 'polozaj',
    q: 'U pitanju „li” dolazi:',
    opts: ['odmah iza glagola', 'na početak rečenice', 'na kraj rečenice', 'iza subjekta'],
    answer: 'odmah iza glagola',
    en: 'li follows the verb directly',
    tip: 'Dolaziš li? Znate li? — glagol + li.',
  },
  {
    mode: 'polozaj',
    q: 'Kako pravilno počinje rečenica?',
    opts: [
      'Čini mi se da je kasno.',
      'Mi se čini da je kasno.',
      'Se čini mi da je kasno.',
      'Je mi se čini da kasno.',
    ],
    answer: 'Čini mi se da je kasno.',
    en: 'it seems to me it is late',
    tip: 'Glagol otvara, enklitike druge: Čini mi se…',
  },
  {
    mode: 'polozaj',
    q: 'Iza veznika „i” — koja je rečenica pravilna?',
    opts: [
      'I rekao mu je istinu.',
      'I je mu rekao istinu.',
      'I mu je rekao istinu.',
      'I je rekao mu istinu.',
    ],
    answer: 'I rekao mu je istinu.',
    en: 'and he told him the truth',
    tip: 'Enklitika se ne naslanja na veznik i/a — treba naglašena riječ.',
  },
  {
    mode: 'slozeni',
    q: 'U zavisnoj surečenici enklitike dolaze:',
    opts: ['odmah iza veznika', 'na kraj surečenice', 'ispred veznika', 'bilo gdje'],
    answer: 'odmah iza veznika',
    en: 'in subordinate clauses clitics follow the conjunction',
    tip: '…jer MI JE rekao; …da SAM GA vidio.',
  },
  {
    mode: 'slozeni',
    q: 'Mislim da ____ vidio. (sam + ga)',
    opts: ['sam ga', 'ga sam', 'sam njega ga', 'ga se sam'],
    answer: 'sam ga',
    en: 'I think that I saw him',
    tip: 'Da + glagolska (sam) + zamjenička (ga).',
  },
  {
    mode: 'slozeni',
    q: 'Pitala je hoćemo ____ doći.',
    opts: ['li', 'li mi', 'da', 'se'],
    answer: 'li',
    en: 'she asked whether we would come',
    tip: 'Neizravno pitanje: hoćemo LI doći.',
  },
  {
    mode: 'slozeni',
    q: 'Čovjek koji ____ jučer pomogao zove se Marko. (mi + je)',
    opts: ['mi je', 'je mi', 'mi ga je', 'je'],
    answer: 'mi je',
    en: 'the man who helped me yesterday is called Marko',
    tip: 'Koji + dativ (mi) + je.',
  },
  {
    mode: 'slozeni',
    q: 'Kad ____ vidjeli, pozdravili su nas. (su + nas)',
    opts: ['su nas', 'nas su', 'su se nas', 'nas se su'],
    answer: 'su nas',
    en: 'when they saw us, they greeted us',
    tip: 'Veznik kad + glagolska (su) + akuzativ (nas).',
  },
  {
    mode: 'slozeni',
    q: 'Rekla je da ____ vratiti sutra. (će + se)',
    opts: ['će se', 'se će', 'će je se', 'se hoće'],
    answer: 'će se',
    en: 'she said she would come back tomorrow',
    tip: 'Da + će + se: da će se vratiti.',
  },
  {
    mode: 'slozeni',
    q: 'Ako ____ vidiš, javi mi. (ga)',
    opts: ['ga', 'njega', 'mu', 'se'],
    answer: 'ga',
    en: 'if you see him, let me know',
    tip: 'Ako + enklitika odmah: ako ga vidiš.',
  },
  {
    mode: 'slozeni',
    q: 'Nadam se da ____ svidjeti. (će + ti + se)',
    opts: ['će ti se', 'ti će se', 'će se ti', 'se će ti'],
    answer: 'će ti se',
    en: 'I hope you will like it',
    tip: 'Će (glagolska) → ti (dativ) → se: da će ti se svidjeti.',
  },
];

export { DATA as ENKLITIKE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EnklitikeDrill({ goBack, award }: Props) {
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
          key: 'enklitike',
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
        {H('⛓️ Red enklitika', 'mi ga je, li ga se — the untouchable word chain', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — enklitike su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje enklitikama! 💪'
                : 'Red enklitika traži još vježbe.'}
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
      {H('⛓️ Red enklitika', 'mi ga je, li ga se — the untouchable word chain', goBack)}
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
