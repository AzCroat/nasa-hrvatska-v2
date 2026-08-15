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

// B2 cause-and-consequence drill (B2 tranche 6, 2026-08-15): causal
// conjunctions (jer, zato sto, buduci da sentence-initially), causal
// prepositions (zbog/od/iz, zahvaljujuci + D), consequence (tako da, pa,
// stoga, toliko...da, a da + conditional) and the cause/consequence split.
const MODE_LABEL: Record<string, string> = {
  uzrok: '❓ Uzrok',
  posljedica: '➡️ Posljedica',
  razlika: '⚖️ Razlike',
};

const DATA = [
  {
    mode: 'uzrok',
    q: 'Nisam došao ____ sam bio bolestan.',
    opts: ['jer', 'tako da', 'iako', 'čim'],
    answer: 'jer',
    en: 'I did not come because I was ill',
    tip: 'Uzrok: jer + rečenica.',
  },
  {
    mode: 'uzrok',
    q: '____ je padala kiša, utakmica je odgođena.',
    opts: ['Budući da', 'Jer', 'Tako da', 'Toliko da'],
    answer: 'Budući da',
    en: 'since it was raining, the match was postponed',
    tip: 'Na početku rečenice: budući da (ne jer).',
  },
  {
    mode: 'uzrok',
    q: 'Zakasnio je ____ gužve u prometu.',
    opts: ['zbog', 'radi', 'od', 'uz'],
    answer: 'zbog',
    en: 'he was late because of the traffic',
    tip: 'Uzrok imenicom: zbog + genitiv.',
  },
  {
    mode: 'uzrok',
    q: 'Pocrvenjela je ____ srama.',
    opts: ['od', 'zbog', 'iz', 'za'],
    answer: 'od',
    en: 'she blushed with shame',
    tip: 'Neposredni fiziološki uzrok: od + G (od srama, od hladnoće).',
  },
  {
    mode: 'uzrok',
    q: 'Učinio je to ____ ljubavi.',
    opts: ['iz', 'od', 'zbog', 'po'],
    answer: 'iz',
    en: 'he did it out of love',
    tip: 'Unutarnja pobuda: iz + G (iz ljubavi, iz znatiželje).',
  },
  {
    mode: 'uzrok',
    q: '„Zato što” najčešće dolazi:',
    opts: ['iza glavne surečenice', 'na početku rečenice', 'umjesto posljedice', 'uz imperativ'],
    answer: 'iza glavne surečenice',
    en: 'zato sto follows the main clause',
    tip: 'Ostao sam kod kuće zato što pada kiša.',
  },
  {
    mode: 'uzrok',
    q: '„Zahvaljujući ____ , sve je uspjelo.” (vaša pomoć)',
    opts: ['vašoj pomoći', 'vaše pomoći', 'vašu pomoć', 'vašom pomoći'],
    answer: 'vašoj pomoći',
    en: 'thanks to your help',
    tip: 'Zahvaljujući + DATIV (samo za pozitivno!).',
  },
  {
    mode: 'uzrok',
    q: 'Za negativan uzrok umjesto „zahvaljujući” kažemo:',
    opts: ['zbog', 'radi', 'pomoću', 'unatoč'],
    answer: 'zbog',
    en: 'negative causes take zbog',
    tip: 'Zahvaljujući pobjedi, ali ZBOG ozljede.',
  },
  {
    mode: 'posljedica',
    q: 'Bio je umoran, ____ je rano legao.',
    opts: ['tako da', 'jer', 'budući da', 'iako'],
    answer: 'tako da',
    en: 'he was tired, so he went to bed early',
    tip: 'Posljedica: tako da.',
  },
  {
    mode: 'posljedica',
    q: 'Vikao je ____ glasno da su ga svi čuli.',
    opts: ['toliko', 'tako da', 'jer', 'čim'],
    answer: 'toliko',
    en: 'he shouted so loudly that everyone heard him',
    tip: 'Toliko/tako + da: mjera s posljedicom.',
  },
  {
    mode: 'posljedica',
    q: 'Snijeg je padao cijelu noć, ____ su ceste zatvorene.',
    opts: ['pa', 'jer', 'budući da', 'iako'],
    answer: 'pa',
    en: 'it snowed all night, so the roads are closed',
    tip: 'Pa uvodi posljedicu/nastavak.',
  },
  {
    mode: 'posljedica',
    q: '„Stoga” izriče:',
    opts: ['posljedicu', 'uzrok', 'dopusnost', 'vrijeme'],
    answer: 'posljedicu',
    en: 'stoga marks consequence',
    tip: 'Kasnio je; stoga je propustio početak.',
  },
  {
    mode: 'posljedica',
    q: 'Bila je ____ sretna da je zaplakala.',
    opts: ['toliko', 'tako da', 'zbog toga', 'onoliko'],
    answer: 'toliko',
    en: 'she was so happy she cried',
    tip: 'Toliko + pridjev + da.',
  },
  {
    mode: 'posljedica',
    q: 'Radi ____ da mu nitko ništa ne može prigovoriti.',
    opts: ['tako', 'toliko', 'onako', 'ovako da'],
    answer: 'tako',
    en: 'he works in such a way that no one can fault him',
    tip: 'Tako + da: način s posljedicom.',
  },
  {
    mode: 'posljedica',
    q: 'Nema smisla čekati, ____ krenimo odmah.',
    opts: ['stoga', 'jer', 'budući da', 'premda'],
    answer: 'stoga',
    en: 'no point waiting, therefore let us go now',
    tip: 'Stoga/dakle + zaključna posljedica.',
  },
  {
    mode: 'posljedica',
    q: '„Previše je skupo ____ bismo to kupili.”',
    opts: ['a da', 'tako da', 'jer', 'čim'],
    answer: 'a da',
    en: 'too expensive for us to buy',
    tip: 'Previše/pre- + a da + kondicional: posljedica nemogućnosti.',
  },
  {
    mode: 'razlika',
    q: '„Jer” i „zato što” izriču ____, a „tako da” ____ .',
    opts: ['uzrok / posljedicu', 'posljedicu / uzrok', 'vrijeme / mjesto', 'način / cilj'],
    answer: 'uzrok / posljedicu',
    en: 'cause vs consequence',
    tip: 'Uzrok objašnjava zašto; posljedica što je iz toga proizašlo.',
  },
  {
    mode: 'razlika',
    q: 'Koja rečenica izriče UZROK?',
    opts: [
      'Ostali smo doma jer je oluja.',
      'Oluja je, tako da smo ostali doma.',
      'Oluja je, pa smo ostali doma.',
      'Oluja je, stoga smo ostali doma.',
    ],
    answer: 'Ostali smo doma jer je oluja.',
    en: 'which sentence states a cause?',
    tip: 'Jer/zato što/budući da = uzrok; pa/tako da/stoga = posljedica.',
  },
  {
    mode: 'razlika',
    q: '„Zbog” i „iz” razlikuju se:',
    opts: [
      'zbog = vanjski uzrok, iz = unutarnja pobuda',
      'iz = mjesto, zbog = vrijeme',
      'značenja su ista',
      'zbog ide s dativom',
    ],
    answer: 'zbog = vanjski uzrok, iz = unutarnja pobuda',
    en: 'zbog vs iz',
    tip: 'Zbog kiše (okolnost), iz ljubavi (motiv).',
  },
  {
    mode: 'razlika',
    q: '„Od” kao uzrok tipičan je za:',
    opts: ['tjelesne i osjetilne reakcije', 'planirane radnje', 'buduće događaje', 'tuđe odluke'],
    answer: 'tjelesne i osjetilne reakcije',
    en: 'od for physical reactions',
    tip: 'Drhtati od straha, plakati od sreće, umoran od posla.',
  },
  {
    mode: 'razlika',
    q: 'Pitanje za uzrok glasi:',
    opts: ['Zašto?', 'Kamo?', 'Otkad?', 'Čime?'],
    answer: 'Zašto?',
    en: 'the question for cause is why',
    tip: 'Zašto? → jer/zato što/zbog.',
  },
  {
    mode: 'razlika',
    q: '„Kako je učio, ____ je i prošao.”',
    opts: ['tako', 'toliko', 'stoga', 'zbog toga što'],
    answer: 'tako',
    en: 'as he studied, so he passed',
    tip: 'Kako…tako: razmjerna posljedica.',
  },
  {
    mode: 'razlika',
    q: 'Birani veznik uzroka za formalne tekstove:',
    opts: ['budući da', 'pošto', 'jerbo', 'kako'],
    answer: 'budući da',
    en: 'the formal causal conjunction',
    tip: 'Pošto je vremensko; jerbo arhaično; budući da birano.',
  },
  {
    mode: 'razlika',
    q: '„Nije došao, a razlog je bolest.” — jednom rečenicom:',
    opts: [
      'Nije došao zbog bolesti.',
      'Nije došao radi bolesti.',
      'Nije došao od bolesti.',
      'Nije došao uz bolest.',
    ],
    answer: 'Nije došao zbog bolesti.',
    en: 'he did not come due to illness',
    tip: 'Uzrok imenicom: zbog + G.',
  },
];

export { DATA as UZROCNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function UzrocneDrill({ goBack, award }: Props) {
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
          key: 'uzrocne',
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
          '⚙️ Uzrok i posljedica',
          'jer, zbog, iz, tako da — why it happened and what followed',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — uzroci su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje uzrokom i posljedicom! 💪'
                : 'Uzročne i posljedične rečenice traže još vježbe.'}
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
        '⚙️ Uzrok i posljedica',
        'jer, zbog, iz, tako da — why it happened and what followed',
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
