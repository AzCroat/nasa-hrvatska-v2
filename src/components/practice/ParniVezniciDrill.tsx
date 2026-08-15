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

// C2 correlative-conjunctions drill (C2 tranche 7, 2026-08-15): the pairs
// (ne samo...nego i, i...i, ni...ni, ili...ili, bilo...bilo, cas...cas,
// sto...to), agreement and negation rules (ni vs niti, plural with i...i,
// kamoli) and paired formulas (htio-ne htio, kad-tad, manje-vise).
const MODE_LABEL: Record<string, string> = {
  parovi: '👯 Parovi',
  slaganje: '⚖️ Slaganje',
  uporaba: '🧩 Sklopovi',
};

const DATA = [
  {
    mode: 'parovi',
    q: '„____ samo pametan, ____ i vrijedan.”',
    opts: ['Ne … nego', 'I … i', 'Ni … ni', 'Ili … ili'],
    answer: 'Ne … nego',
    en: 'not only smart but also hardworking',
    tip: 'Ne samo…nego (već) i — stupnjevana tvrdnja.',
  },
  {
    mode: 'parovi',
    q: '„____ danas, ____ sutra — svejedno mi je.”',
    opts: ['Bilo … bilo', 'Ne … nego', 'Kako … tako', 'Što … to'],
    answer: 'Bilo … bilo',
    en: 'whether today or tomorrow',
    tip: 'Bilo…bilo = ravnodušan izbor.',
  },
  {
    mode: 'parovi',
    q: '„____ jedni ____ drugi nisu došli.”',
    opts: ['Ni … ni', 'I … i', 'Ili … ili', 'Čas … čas'],
    answer: 'Ni … ni',
    en: 'neither the ones nor the others came',
    tip: 'Ni…ni uz niječni glagol.',
  },
  {
    mode: 'parovi',
    q: '„____ se smije, ____ plače.” (izmjena)',
    opts: ['Čas … čas', 'Bilo … bilo', 'Ni … ni', 'Ne … nego'],
    answer: 'Čas … čas',
    en: 'now she laughs, now she cries',
    tip: 'Čas…čas = brza izmjena stanja.',
  },
  {
    mode: 'parovi',
    q: '„____ učiš, ____ ćeš i znati.”',
    opts: ['Kako … tako', 'Čas … čas', 'Bilo … bilo', 'Ili … ili'],
    answer: 'Kako … tako',
    en: 'as you study, so shall you know',
    tip: 'Kako…tako = razmjernost načina.',
  },
  {
    mode: 'parovi',
    q: '„____ položiš, ____ ponavljaš — odluči se!”',
    opts: ['Ili … ili', 'Ni … ni', 'I … i', 'Kako … tako'],
    answer: 'Ili … ili',
    en: 'either you pass or you repeat',
    tip: 'Ili…ili = isključiv izbor.',
  },
  {
    mode: 'parovi',
    q: '„____ roditelji ____ učitelji podupiru projekt.”',
    opts: ['I … i', 'Ni … ni', 'Ili … ili', 'Čas … čas'],
    answer: 'I … i',
    en: 'both parents and teachers support it',
    tip: 'I…i = zbrajanje obiju strana.',
  },
  {
    mode: 'parovi',
    q: '„____ više radiš, ____ više griješiš od umora.”',
    opts: ['Što … to', 'Kako … tako', 'Čas … čas', 'Bilo … bilo'],
    answer: 'Što … to',
    en: 'the more you work, the more you err',
    tip: 'Što + komparativ, to + komparativ.',
  },
  {
    mode: 'slaganje',
    q: 'Uz „ni…ni” glagol je:',
    opts: ['niječan (ni on ni ona NISU došli)', 'potvrdan', 'u infinitivu', 'u imperativu'],
    answer: 'niječan (ni on ni ona NISU došli)',
    en: 'ni...ni requires a negated verb',
    tip: 'Dvostruka negacija je u hrvatskome obvezna.',
  },
  {
    mode: 'slaganje',
    q: '„Niti” prema „ni”:',
    opts: [
      'niti stoji uz glagol bez ne',
      'ni stoji uz glagol bez ne',
      'isti su uvijek',
      'niti je zastarjelo',
    ],
    answer: 'niti stoji uz glagol bez ne',
    en: 'niti carries its own negation',
    tip: 'Niti jede niti spava (bez ne); ni on NE jede.',
  },
  {
    mode: 'slaganje',
    q: 'Pravilno je:',
    opts: [
      'Niti pije niti puši.',
      'Niti ne pije niti ne puši.',
      'Ni pije ni puši.',
      'Niti pije ni ne puši.',
    ],
    answer: 'Niti pije niti puši.',
    en: 'he neither drinks nor smokes',
    tip: 'Niti + potvrdan glagolski oblik.',
  },
  {
    mode: 'slaganje',
    q: '„I…i” s jedninama slaže glagol u:',
    opts: ['množini (i Ivan i Marko dolaze)', 'jednini uvijek', 'srednjem rodu', 'infinitivu'],
    answer: 'množini (i Ivan i Marko dolaze)',
    en: 'i...i takes a plural verb',
    tip: 'Zbrojeni subjekti → množina.',
  },
  {
    mode: 'slaganje',
    q: '„Ili Ivan ili Marko ____ prvi.” (doći će)',
    opts: ['će doći', 'će doći njih dvojica', 'dolaze obojica', 'došli su'],
    answer: 'će doći',
    en: 'either Ivan or Marko will come first',
    tip: 'Ili…ili: glagol prema bližem subjektu (jednina).',
  },
  {
    mode: 'slaganje',
    q: '„Ne samo da kasni, nego ____ ni ispričao.”',
    opts: ['se nije', 'je se ne', 'nije se bio bi', 'se je'],
    answer: 'se nije',
    en: 'not only late — he did not even apologize',
    tip: 'Ne samo da…, nego se nije ni ispričao.',
  },
  {
    mode: 'slaganje',
    q: '„Kamoli” u „ne zna hodati, a kamoli trčati” znači:',
    opts: ['a još manje', 'a pogotovo', 'ali ipak', 'baš zato'],
    answer: 'a još manje',
    en: 'let alone run',
    tip: 'Negacija + kamoli = a još manje.',
  },
  {
    mode: 'slaganje',
    q: '„Nekmoli” je knjiška inačica od:',
    opts: ['kamoli', 'nego', 'nikako', 'makar'],
    answer: 'kamoli',
    en: 'nekmoli = let alone (bookish)',
    tip: 'Stariji tekstovi: ne zna čitati, nekmoli pisati.',
  },
  {
    mode: 'uporaba',
    q: 'Spoji: „Uspjeh ovisi ____ o radu ____ o sreći.”',
    opts: ['i … i', 'ni … ni', 'čas … čas', 'što … to'],
    answer: 'i … i',
    en: 'success depends both on work and on luck',
    tip: 'I…i uz ponovljeni prijedlog.',
  },
  {
    mode: 'uporaba',
    q: '„Bilo kamo krenuo, prati ga sreća.” — „bilo” + upitna riječ daje:',
    opts: ['opću dopusnost (kamo god)', 'mjesto', 'vrijeme', 'uzrok'],
    answer: 'opću dopusnost (kamo god)',
    en: 'bilo kamo = wherever',
    tip: 'Bilo tko/što/kamo = tko god/što god/kamo god.',
  },
  {
    mode: 'uporaba',
    q: '„Kako-tako” (spojeno crticom) znači:',
    opts: ['osrednje, s mukom prihvatljivo', 'izvrsno', 'nikako', 'brzo'],
    answer: 'osrednje, s mukom prihvatljivo',
    en: 'kako-tako = so-so',
    tip: 'Prošao je kako-tako.',
  },
  {
    mode: 'uporaba',
    q: '„Prije ____ poslije, istina izlazi na vidjelo.”',
    opts: ['ili', 'i', 'ni', 'nego'],
    answer: 'ili',
    en: 'sooner or later the truth comes out',
    tip: 'Prije ili poslije = kad-tad.',
  },
  {
    mode: 'uporaba',
    q: '„Htio-ne htio, morat ćeš.” — sklop izriče:',
    opts: ['neizbježnost bez obzira na volju', 'želju', 'zabranu', 'pitanje'],
    answer: 'neizbježnost bez obzira na volju',
    en: 'willy-nilly',
    tip: 'Parni sklop suprotnosti: htio-ne htio.',
  },
  {
    mode: 'uporaba',
    q: '„Manje-više” znači:',
    opts: ['otprilike, uglavnom', 'nikako', 'sve', 'ništa'],
    answer: 'otprilike, uglavnom',
    en: 'manje-vise = more or less',
    tip: 'Parna priložna sveza.',
  },
  {
    mode: 'uporaba',
    q: '„Kad-tad” znači:',
    opts: ['jednom sigurno, prije ili poslije', 'nikad', 'odmah', 'rijetko'],
    answer: 'jednom sigurno, prije ili poslije',
    en: 'kad-tad = sooner or later',
    tip: 'Kad-tad će se saznati.',
  },
  {
    mode: 'uporaba',
    q: '„Ovako ili onako, odluka pada danas.”',
    opts: ['na ovaj ili onaj način', 'nikako', 'polako', 'netočno'],
    answer: 'na ovaj ili onaj način',
    en: 'one way or another',
    tip: 'Parna formula neizbježnosti.',
  },
];

export { DATA as PARNI_VEZNICI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ParniVezniciDrill({ goBack, award }: Props) {
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
          key: 'parniveznici',
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
          '🔗 Parni veznici',
          'ne samo…nego i, ni…ni, čas…čas — conjunctions that hunt in pairs',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — parovi su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje parnim veznicima! 💪'
                : 'Parni veznici traže još vježbe.'}
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
        '🔗 Parni veznici',
        'ne samo…nego i, ni…ni, čas…čas — conjunctions that hunt in pairs',
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
