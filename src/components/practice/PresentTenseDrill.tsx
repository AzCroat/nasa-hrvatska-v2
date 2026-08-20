// src/components/practice/PresentTenseDrill.tsx
//
// A1 present-tense practice — the drill the 2026-08-20 recommender audit found
// missing. A1 TEACHES verbs (`present-tense-verbs` and `pronouns-biti` are both
// A1 lessons) but the lowest verb drill in CEFR_EXERCISE_POOL was A2, and A1 is
// the one level that cannot inherit downward. So the learner met "govorim" in a
// lesson and was never once asked to produce it.
//
// DISTRACTOR DESIGN: every wrong option is another PERSON of the SAME verb
// (govorim / govoriš / govori / govore). That is the mistake learners actually
// make — reaching for the wrong ending, not the wrong verb — so a wrong tap is
// diagnostic. Options are never scrambled across verbs, which would make the
// item answerable by recognising the stem instead of the ending.

import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import A1ConceptIntro from './A1ConceptIntro';
import DrillExplainCard from './DrillExplainCard';
import { useExplainError } from '../../hooks/useExplainError';
import { getCurrentContentLevel } from '../../lib/cefrCertification';
import { useStats } from '../../context/StatsContext';
import { rnd } from '../../lib/random.js';

function shLocal<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

export interface VerbItem {
  q: string;
  opts: string[];
  answer: string;
  en: string;
  tip: string;
}

export const DATA: VerbItem[] = [
  {
    q: 'Ja ___ iz Hrvatske.',
    opts: ['sam', 'si', 'je', 'smo'],
    answer: 'sam',
    en: 'I am from Croatia.',
    tip: '"biti" (to be) is irregular — you memorise it: sam, si, je, smo, ste, su. For "I" it is sam.',
  },
  {
    q: 'Ti ___ moj prijatelj.',
    opts: ['sam', 'si', 'je', 'ste'],
    answer: 'si',
    en: 'You are my friend.',
    tip: 'For "you" (one person, informal) the word is si. Use ste for a group or for politeness.',
  },
  {
    q: 'Vi ___ iz Amerike.',
    opts: ['sam', 'si', 'smo', 'ste'],
    answer: 'ste',
    en: 'You are from America.',
    tip: '"Vi" takes ste — both for several people and when being polite to one person.',
  },
  {
    q: 'Ona ___ u Splitu.',
    opts: ['živim', 'živiš', 'živi', 'žive'],
    answer: 'živi',
    en: 'She lives in Split.',
    tip: 'he/she/it takes the bare ending — živi. It is the shortest form of the six.',
  },
  {
    q: 'Mi ___ kavu svako jutro.',
    opts: ['pijem', 'piješ', 'pije', 'pijemo'],
    answer: 'pijemo',
    en: 'We drink coffee every morning.',
    tip: '"We" ends in -mo: pijemo, idemo, jedemo. Hear the -mo and you hear "we".',
  },
  {
    q: 'Vi ___ hrvatski vrlo dobro.',
    opts: ['govorim', 'govoriš', 'govorite', 'govore'],
    answer: 'govorite',
    en: 'You speak Croatian very well.',
    tip: '"Vi" ends in -te: govorite, radite, znate.',
  },
  {
    q: 'Oni ___ u bolnici.',
    opts: ['radim', 'radiš', 'radi', 'rade'],
    answer: 'rade',
    en: 'They work in a hospital.',
    tip: '"They" ends in -e or -ju: rade, govore, but čitaju, imaju. Both mean "they".',
  },
  {
    q: 'Ja ___ knjigu svaku večer.',
    opts: ['čitam', 'čitaš', 'čita', 'čitamo'],
    answer: 'čitam',
    en: 'I read a book every evening.',
    tip: '"I" ends in -m. Almost without exception: čitam, imam, radim, govorim.',
  },
  {
    q: '___ li brata?',
    opts: ['Imam', 'Imaš', 'Ima', 'Imate'],
    answer: 'Imaš',
    en: 'Do you have a brother?',
    tip: 'The question is aimed at "you", so the verb takes the -š ending: imaš.',
  },
  {
    q: 'On ___ u trgovinu.',
    opts: ['idem', 'ideš', 'ide', 'idu'],
    answer: 'ide',
    en: 'He is going to the shop.',
    tip: '"ići" (to go) changes a lot — idem, ideš, ide — but the endings are the normal ones.',
  },
  {
    q: 'Mi ___ film.',
    opts: ['gledam', 'gledaš', 'gleda', 'gledamo'],
    answer: 'gledamo',
    en: 'We are watching a film.',
    tip: 'Croatian has one present tense — gledamo covers both "we watch" and "we are watching".',
  },
  {
    q: 'Ja ___ hrvatski svaki dan.',
    opts: ['učim', 'učiš', 'uči', 'uče'],
    answer: 'učim',
    en: 'I study Croatian every day.',
    tip: 'The -m ending already says "I", so "ja" is optional: Učim hrvatski is a full sentence.',
  },
  {
    q: 'Moja mama ___ ručak.',
    opts: ['kuham', 'kuhaš', 'kuha', 'kuhaju'],
    answer: 'kuha',
    en: 'My mum is cooking lunch.',
    tip: '"Moja mama" is one person — she — so the verb takes the he/she form: kuha.',
  },
  {
    q: 'Ona ___ pismo baki.',
    opts: ['pišem', 'pišeš', 'piše', 'pišu'],
    answer: 'piše',
    en: 'She is writing a letter to grandma.',
    tip: '"pisati" shifts its stem to piš- but the endings do not change: pišem, pišeš, piše.',
  },
  {
    q: 'Djeca ___ glazbu.',
    opts: ['slušam', 'slušaš', 'sluša', 'slušaju'],
    answer: 'slušaju',
    en: 'The children are listening to music.',
    tip: '"Djeca" is more than one, so the verb is the they-form: slušaju.',
  },
  {
    q: 'Mi ___ kruh i sir.',
    opts: ['jedem', 'jedeš', 'jede', 'jedemo'],
    answer: 'jedemo',
    en: 'We are eating bread and cheese.',
    tip: 'Again the -mo that means "we": jedemo.',
  },
  {
    q: 'Ja te ___.',
    opts: ['volim', 'voliš', 'voli', 'vole'],
    answer: 'volim',
    en: 'I love you.',
    tip: 'The most useful -m form there is: volim.',
  },
  {
    q: '___ li gdje je kolodvor?',
    opts: ['Znam', 'Znaš', 'Zna', 'Znaju'],
    answer: 'Znaš',
    en: 'Do you know where the station is?',
    tip: 'Asking one person you know well — the -š form: znaš. To a stranger you would say Znate li...?',
  },
  {
    q: 'Moj brat ___ do deset sati.',
    opts: ['spavam', 'spavaš', 'spava', 'spavaju'],
    answer: 'spava',
    en: 'My brother sleeps until ten.',
    tip: 'One brother — he — so the bare he/she form: spava.',
  },
  {
    q: 'Ja ne ___ dobro.',
    opts: ['razumijem', 'razumiješ', 'razumije', 'razumiju'],
    answer: 'razumijem',
    en: "I don't understand well.",
    tip: 'A phrase worth memorising whole: Ne razumijem. Note "ne" sits right in front of the verb.',
  },
];

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PresentTenseDrill({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    shLocal(DATA)
      .slice(0, 10)
      // Options are shuffled but never mixed between items — see the distractor
      // note at the top of the file.
      .map((item) => ({ ...item, opts: shLocal([...item.opts]) })),
  );
  const total = q.length;
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const {
    explain,
    request: requestExplain,
    reset: resetExplain,
  } = useExplainError('case_drill', getCurrentContentLevel());

  const cur = q[idx]!;
  const answered = chosen !== null;

  function pick(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === cur.answer) {
      setScore((s) => s + 1);
    } else {
      void requestExplain(opt, cur.answer, cur.q);
    }
  }

  function next() {
    if (idx + 1 >= total) {
      if (!finishFired.current) {
        finishFired.current = true;
        const res = completeExercise({
          key: 'present-tense',
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
      resetExplain();
    }
  }

  if (showIntro && !done) {
    return (
      <div className="scr-wrap">
        {H('🗣️ Present Tense', 'Who is doing it — and the ending that says so', goBack)}
        <div style={{ marginTop: 12 }}>
          <A1ConceptIntro conceptId="present-tense" onStart={() => setShowIntro(false)} />
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="scr-wrap">
        {H('🗣️ Present Tense', 'Who is doing it — and the ending that says so', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Perfect! You can hear who is doing it. 🏆'
              : score >= total * 0.8
                ? 'Strong work — the endings are becoming automatic.'
                : 'Keep going — listen for the ending: -m is "I", -š is "you", -mo is "we".'}
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
      {H('🗣️ Present Tense', 'Who is doing it — and the ending that says so', goBack)}
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
            color: '#64748b',
            marginBottom: 6,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          Choose the right ending
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#0e7490', lineHeight: 1.4 }}>
          {cur.q}
        </div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{cur.en}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 16 }}>
          {cur.opts.map((opt: string) => {
            let bg = 'white';
            let bc = 'rgba(14,116,144,.12)';
            if (answered) {
              if (opt === cur.answer) {
                bg = '#dcfce7';
                bc = '#16a34a';
              } else if (opt === chosen) {
                bg = '#fee2e2';
                bc = '#dc2626';
              }
            }
            return (
              <button
                key={opt}
                className="ob"
                style={{ background: bg, borderColor: bc }}
                onClick={() => pick(opt)}
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
              padding: '10px 14px',
              background: '#f0f9ff',
              borderRadius: 10,
              border: '1px solid #bae6fd',
              fontSize: 14,
              color: '#0369a1',
            }}
          >
            <strong>{chosen === cur.answer ? '✅ Correct!' : '❌ Incorrect.'}</strong> {cur.tip}
          </div>
        )}
        {answered && chosen !== cur.answer && <DrillExplainCard state={explain} />}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 16 }} onClick={next}>
            {idx + 1 >= total ? 'See results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}
