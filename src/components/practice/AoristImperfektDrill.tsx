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

// B2 literary-past-tenses drill (B2 tranche 3, 2026-08-15): aorist forms
// (perfective, sudden sequenced actions; bih as the living aorist of biti),
// imperfect forms (imperfective, background duration), and usage — where the
// two tenses live today (literature, storytelling, the texting revival).
const MODE_LABEL: Record<string, string> = {
  aorist: '⚡ Aorist',
  imperfekt: '🌊 Imperfekt',
  uporaba: '📖 Uporaba',
};

const DATA = [
  {
    mode: 'aorist',
    q: 'Aorist glagola „reći” u 1. licu jednine glasi:',
    opts: ['rekoh', 'rekah', 'rečeh', 'rekih'],
    answer: 'rekoh',
    en: 'I said (aorist)',
    tip: 'Rekoh, reče, rekosmo, rekoše — aorist svršenih glagola.',
  },
  {
    mode: 'aorist',
    q: 'Aorist glagola „doći” u 3. licu množine glasi:',
    opts: ['dođoše', 'dođahu', 'dođeše', 'dođiše'],
    answer: 'dođoše',
    en: 'they came (aorist)',
    tip: 'Dođoh, dođe, dođoše; -ahu je nastavak IMPERFEKTA.',
  },
  {
    mode: 'aorist',
    q: 'On ____ i ode. (reći, aorist 3. jd.)',
    opts: ['reče', 'reko', 'rekne', 'rečaše'],
    answer: 'reče',
    en: 'he said and left',
    tip: '3. jd. aorista bez nastavka: on reče.',
  },
  {
    mode: 'aorist',
    q: 'Aorist se u pravilu tvori od:',
    opts: ['svršenih glagola', 'nesvršenih glagola', 'samo povratnih glagola', 'pomoćnih glagola'],
    answer: 'svršenih glagola',
    en: 'from perfective verbs',
    tip: 'Aorist = svršena prošla radnja; imperfekt uzima nesvršene.',
  },
  {
    mode: 'aorist',
    q: 'Aorist glagola „pasti” u 1. licu jednine glasi:',
    opts: ['padoh', 'padah', 'pao', 'padnuh'],
    answer: 'padoh',
    en: 'I fell (aorist)',
    tip: 'Padoh, pade, padosmo — infinitivna osnova pad-.',
  },
  {
    mode: 'aorist',
    q: 'Aorist glagola „vidjeti” u 3. licu jednine glasi:',
    opts: ['vidje', 'vidjeh', 'viđaše', 'vidi'],
    answer: 'vidje',
    en: 'he/she saw (aorist)',
    tip: 'Vidjeh (ja), vidje (on); „dođoh, vidjeh, pobijedih”.',
  },
  {
    mode: 'aorist',
    q: 'Koji je oblik zapravo aorist glagola „biti” — i živi u kondicionalu?',
    opts: ['bih', 'bijah', 'budoh', 'bjeh'],
    answer: 'bih',
    en: 'the aorist of to be, alive in the conditional',
    tip: 'Bih/bi/bismo/biste jest aorist od biti — zato „rekao bih”.',
  },
  {
    mode: 'aorist',
    q: 'Svi ____ u smijeh. (prasnuti, aorist 3. mn.)',
    opts: ['prasnuše', 'prasnuhu', 'prasnuli', 'prasnuše se'],
    answer: 'prasnuše',
    en: 'everyone burst out laughing',
    tip: 'Prasnuh, prasnu, prasnuše — nagli slijed radnji.',
  },
  {
    mode: 'imperfekt',
    q: 'Imperfekt glagola „biti” u 3. licu jednine glasi:',
    opts: ['bijaše', 'bi', 'bio je', 'bijahe'],
    answer: 'bijaše',
    en: 'it was (imperfect)',
    tip: 'Bijah, bijaše, bijahu — najčešći imperfekt uopće.',
  },
  {
    mode: 'imperfekt',
    q: 'Imperfekt glagola „čitati” u 1. licu jednine glasi:',
    opts: ['čitah', 'čitoh', 'pročitah', 'čitavah'],
    answer: 'čitah',
    en: 'I was reading (imperfect)',
    tip: 'Čitah, čitaše, čitahu; „pročitah” bi bio aorist svršenoga.',
  },
  {
    mode: 'imperfekt',
    q: 'Starac ____ svake večeri uz vatru. (pripovijedati, imperfekt)',
    opts: ['pripovijedaše', 'pripovjedi', 'ispripovijeda', 'pripovijedahu'],
    answer: 'pripovijedaše',
    en: 'the old man used to tell stories by the fire',
    tip: 'Trajna, ponavljana prošla radnja → imperfekt 3. jd.',
  },
  {
    mode: 'imperfekt',
    q: 'Imperfekt se tvori od:',
    opts: ['nesvršenih glagola', 'svršenih glagola', 'samo pomoćnih glagola', 'glagola kretanja'],
    answer: 'nesvršenih glagola',
    en: 'from imperfective verbs',
    tip: 'Imperfekt = trajanje u prošlosti, pa traži nesvršeni vid.',
  },
  {
    mode: 'imperfekt',
    q: 'Imperfekt glagola „govoriti” u 3. licu množine glasi:',
    opts: ['govorahu', 'govoriše', 'govorili', 'govorehu'],
    answer: 'govorahu',
    en: 'they were speaking (imperfect)',
    tip: 'Govorah, govoraše, govorahu; -iše bi bio aorist.',
  },
  {
    mode: 'imperfekt',
    q: 'More ____ mirno. (biti, imperfekt 3. jd.)',
    opts: ['bijaše', 'bi', 'bilo je', 'bude'],
    answer: 'bijaše',
    en: 'the sea was calm',
    tip: 'Opisno pripovijedanje: more bijaše mirno.',
  },
  {
    mode: 'imperfekt',
    q: 'Imperfekt glagola „imati” u 3. licu jednine glasi:',
    opts: ['imaše', 'imade', 'imala je', 'imahe'],
    answer: 'imaše',
    en: 'he/she had (imperfect)',
    tip: 'Imah, imaše, imahu; „imade” je aoristni oblik.',
  },
  {
    mode: 'imperfekt',
    q: 'Imperfekt glagola „htjeti” u 3. licu jednine glasi:',
    opts: ['htijaše', 'htjede', 'htio je', 'htjeti će'],
    answer: 'htijaše',
    en: 'he/she wanted (imperfect)',
    tip: 'Htijah, htijaše; „htjede” je aorist.',
  },
  {
    mode: 'uporaba',
    q: 'Aorist i imperfekt danas su najčešći u:',
    opts: [
      'književnosti i pripovijedanju',
      'svakodnevnom razgovoru',
      'službenim dopisima',
      'vremenskoj prognozi',
    ],
    answer: 'književnosti i pripovijedanju',
    en: 'in literature and storytelling',
    tip: 'U govoru ih je zamijenio perfekt; u prozi čuvaju ritam pripovijedanja.',
  },
  {
    mode: 'uporaba',
    q: '„Dođoh, vidjeh, pobijedih.” — koji je to glagolski oblik?',
    opts: ['aorist', 'imperfekt', 'perfekt', 'pluskvamperfekt'],
    answer: 'aorist',
    en: 'I came, I saw, I conquered',
    tip: 'Tri svršene radnje u nizu — školski primjer aorista.',
  },
  {
    mode: 'uporaba',
    q: 'Kojim oblikom u razgovoru zamjenjujemo „stigoh”?',
    opts: ['stigao sam', 'stizah', 'bio bih stigao', 'stignem'],
    answer: 'stigao sam',
    en: 'I arrived (everyday perfect)',
    tip: 'Perfekt je preuzeo ulogu aorista u govoru.',
  },
  {
    mode: 'uporaba',
    q: '„Bijaše jednom jedan kralj.” — oblik „bijaše” je:',
    opts: ['imperfekt', 'aorist', 'perfekt', 'kondicional'],
    answer: 'imperfekt',
    en: 'once upon a time there was a king',
    tip: 'Bajkoviti početak: imperfekt glagola biti.',
  },
  {
    mode: 'uporaba',
    q: 'Aorist izriče radnju koja je:',
    opts: [
      'svršena, često nagla i u nizu',
      'trajala u prošlosti',
      'istodobna sa sadašnjošću',
      'planirana u budućnosti',
    ],
    answer: 'svršena, često nagla i u nizu',
    en: 'a completed, often sudden past action',
    tip: 'Aorist gura pripovijedanje naprijed: uđe, sjedne, reče.',
  },
  {
    mode: 'uporaba',
    q: 'Imperfekt izriče radnju koja je:',
    opts: [
      'trajala ili se ponavljala u prošlosti',
      'naglo završila',
      'tek najavljena',
      'uvjetovana',
    ],
    answer: 'trajala ili se ponavljala u prošlosti',
    en: 'an ongoing or repeated past action',
    tip: 'Imperfekt slika pozadinu: sunce zalažaše, ljudi šetahu.',
  },
  {
    mode: 'uporaba',
    q: 'U porukama se aorist vraća („stigoh!”) jer je:',
    opts: ['kraći od perfekta', 'službeniji od perfekta', 'jedini pravilan oblik', 'stran jezik'],
    answer: 'kraći od perfekta',
    en: 'shorter than the perfect — texting revival',
    tip: '„Stigoh” štedi znakove naspram „stigao sam” — živa renesansa aorista.',
  },
  {
    mode: 'uporaba',
    q: 'Uto ____ vjetar i ugasi svijeću. (puhnuti, aorist)',
    opts: ['puhnu', 'puhaše', 'je puhnuo', 'puše'],
    answer: 'puhnu',
    en: 'just then a wind blew and put out the candle',
    tip: 'Aorist 3. jd.: puhnu — nagla radnja u pripovijedanju.',
  },
];

export { DATA as AORIST_IMPERFEKT_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AoristImperfektDrill({ goBack, award }: Props) {
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
          key: 'aoristimperfekt',
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
        {H('📜 Aorist i imperfekt', 'dođoh, vidjeh, bijaše — the narrative past tenses', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — pripovijedate kao klasik! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje pripovjednim vremenima! 💪'
                : 'Aorist i imperfekt traže još vježbe.'}
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
      {H('📜 Aorist i imperfekt', 'dođoh, vidjeh, bijaše — the narrative past tenses', goBack)}
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
