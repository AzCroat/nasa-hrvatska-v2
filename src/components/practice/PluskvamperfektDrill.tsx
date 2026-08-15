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

// C1 pluperfect drill (C1 tranche 6, 2026-08-15): formation (perfekt of
// biti + l-participle; archaic bijah dosao), usage (past-before-past, vec,
// narrative style, perfect as everyday substitute) and sequence of tenses
// (reported speech, nakon sto / tek sto).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  uporaba: '🎯 Uporaba',
  slaganje: '⏱️ Slijed vremena',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Pluskvamperfekt glagola „doći” (ja, m.) glasi:',
    opts: ['bio sam došao', 'sam bio doći', 'došao bio', 'bih bio došao'],
    answer: 'bio sam došao',
    en: 'I had come',
    tip: 'Perfekt glagola biti + pridjev radni: bio sam došao.',
  },
  {
    mode: 'tvorba',
    q: 'Pluskvamperfekt od „napisati” (ona) glasi:',
    opts: ['bila je napisala', 'je bila napisati', 'napisala bila je bi', 'bi bila napisala'],
    answer: 'bila je napisala',
    en: 'she had written',
    tip: 'Bila je + napisala.',
  },
  {
    mode: 'tvorba',
    q: 'Pluskvamperfekt se tvori od:',
    opts: [
      'perfekta glagola biti i pridjeva radnog',
      'prezenta i infinitiva',
      'aorista i imperativa',
      'futura i participa',
    ],
    answer: 'perfekta glagola biti i pridjeva radnog',
    en: 'how the pluperfect is formed',
    tip: 'Bio sam/bila si/bili smo + radni pridjev.',
  },
  {
    mode: 'tvorba',
    q: 'Pluskvamperfekt od „otići” (oni) glasi:',
    opts: ['bili su otišli', 'su bili otići', 'otišli bili su bi', 'bi bili otišli'],
    answer: 'bili su otišli',
    en: 'they had left',
    tip: 'Bili su + otišli.',
  },
  {
    mode: 'tvorba',
    q: 'Starija tvorba s imperfektom glasi:',
    opts: ['bijah došao', 'budem došao', 'bih došao', 'bio bih došao'],
    answer: 'bijah došao',
    en: 'the archaic pluperfect with the imperfect',
    tip: 'Bijah/bijaše + radni pridjev — književni prizvuk.',
  },
  {
    mode: 'tvorba',
    q: 'Pluskvamperfekt od „zaspati” (dijete, sr. rod) glasi:',
    opts: ['bilo je zaspalo', 'bio je zaspao', 'bila je zaspala', 'je bilo zaspati'],
    answer: 'bilo je zaspalo',
    en: 'the child had fallen asleep',
    tip: 'Srednji rod: bilo je zaspalo.',
  },
  {
    mode: 'tvorba',
    q: 'Niječni pluskvamperfekt od „vidjeti” (ja, m.) glasi:',
    opts: ['nisam bio vidio', 'bio nisam vidio', 'ne bio sam vidio', 'nisam vidio bio ću'],
    answer: 'nisam bio vidio',
    en: 'I had not seen',
    tip: 'Niječnica na pomoćni glagol: nisam bio vidio.',
  },
  {
    mode: 'tvorba',
    q: 'Pluskvamperfekt od „vratiti se” (mi) glasi:',
    opts: [
      'bili smo se vratili',
      'smo se bili vratiti',
      'vratili bili smo se bi',
      'bi se bili vratili',
    ],
    answer: 'bili smo se vratili',
    en: 'we had returned',
    tip: 'Bili smo se vratili — se uz enklitike.',
  },
  {
    mode: 'uporaba',
    q: 'Pluskvamperfekt izriče radnju koja se dogodila:',
    opts: ['prije druge prošle radnje', 'poslije sadašnjosti', 'istodobno s budućom', 'koja traje'],
    answer: 'prije druge prošle radnje',
    en: 'a past before the past',
    tip: 'Kad su stigli, vlak je već BIO OTIŠAO.',
  },
  {
    mode: 'uporaba',
    q: 'Kad smo došli, predstava ____ . (već početi)',
    opts: ['je već bila počela', 'već počinje', 'će već početi', 'već počne'],
    answer: 'je već bila počela',
    en: 'when we arrived, the show had already begun',
    tip: 'Ranija prošla radnja → pluskvamperfekt.',
  },
  {
    mode: 'uporaba',
    q: 'Uz pluskvamperfekt često dolazi prilog:',
    opts: ['već', 'sutra', 'sada', 'uskoro'],
    answer: 'već',
    en: 'already pairs with the pluperfect',
    tip: 'Već je bio otišao; već su bili večerali.',
  },
  {
    mode: 'uporaba',
    q: 'Vratio je knjigu koju ____ prošle godine. (posuditi)',
    opts: ['je bio posudio', 'će posuditi', 'posuđuje', 'bi posudio'],
    answer: 'je bio posudio',
    en: 'he returned the book he had borrowed last year',
    tip: 'Posudba prethodi vraćanju → pluskvamperfekt.',
  },
  {
    mode: 'uporaba',
    q: 'U svakodnevnom govoru pluskvamperfekt se često zamjenjuje:',
    opts: ['perfektom', 'aoristom', 'futurom II', 'imperativom'],
    answer: 'perfektom',
    en: 'everyday speech uses the perfect instead',
    tip: 'Kad su stigli, vlak je već otišao — i to je pravilno.',
  },
  {
    mode: 'uporaba',
    q: 'Pluskvamperfekt je danas obilježje:',
    opts: ['brižljiva pripovjednog stila', 'sportskih prijenosa', 'SMS poruka', 'reklama'],
    answer: 'brižljiva pripovjednog stila',
    en: 'a marker of careful narrative style',
    tip: 'Njeguje ga proza; govor ga gubi.',
  },
  {
    mode: 'uporaba',
    q: '„Sjetio sam se da ____ vrata.” (ne zaključati)',
    opts: ['nisam bio zaključao', 'neću zaključati', 'ne zaključavam', 'ne bih zaključao'],
    answer: 'nisam bio zaključao',
    en: 'I remembered I had not locked the door',
    tip: 'Ranija propuštena radnja → niječni pluskvamperfekt.',
  },
  {
    mode: 'uporaba',
    q: '„Tek što ____ , telefon je zazvonio.” (sjesti — bio)',
    opts: ['sam bio sjeo', 'sjednem', 'ću sjesti', 'bih sjeo'],
    answer: 'sam bio sjeo',
    en: 'no sooner had I sat down than the phone rang',
    tip: 'Tek što + pluskvamperfekt: neposredni slijed.',
  },
  {
    mode: 'slaganje',
    q: '„Rekao je da je vlak ____ .” (otići prije)',
    opts: ['već bio otišao', 'već otišao sutra', 'tek otići', 'upravo odlazi jučer'],
    answer: 'već bio otišao',
    en: 'he said the train had already left',
    tip: 'Neupravni govor čuva prethodnost pluskvamperfektom.',
  },
  {
    mode: 'slaganje',
    q: 'Redoslijed: „____ doručkovao, pa je izašao.”',
    opts: ['Bio je', 'Bit će', 'Bude', 'Bi'],
    answer: 'Bio je',
    en: 'he had had breakfast, then went out',
    tip: 'Prva od dviju prošlih radnji → pluskvamperfekt.',
  },
  {
    mode: 'slaganje',
    q: 'Koja rečenica pravilno slaže vremena?',
    opts: [
      'Kad je stigla, već smo bili večerali.',
      'Kad je stigla, već večeramo.',
      'Kad stigne, već smo bili večerali.',
      'Kad je stigla, već ćemo večerati.',
    ],
    answer: 'Kad je stigla, već smo bili večerali.',
    en: 'by the time she arrived, we had eaten',
    tip: 'Prethodnost u prošlosti → pluskvamperfekt.',
  },
  {
    mode: 'slaganje',
    q: '„Nakon što ____ sve provjerio, potpisao je.” (biti)',
    opts: ['je bio', 'će biti', 'bude', 'bi'],
    answer: 'je bio',
    en: 'after he had checked everything, he signed',
    tip: 'Nakon što + pluskvamperfekt za ranije.',
  },
  {
    mode: 'slaganje',
    q: 'Pluskvamperfekt u odnosu na perfekt je:',
    opts: ['relativno (odnosno) vrijeme', 'apsolutno vrijeme', 'buduće vrijeme', 'način'],
    answer: 'relativno (odnosno) vrijeme',
    en: 'a relative tense',
    tip: 'Mjeri se prema drugoj prošloj radnji, ne prema sada.',
  },
  {
    mode: 'slaganje',
    q: '„Izgubio je sat koji mu ____ djed.” (pokloniti)',
    opts: ['je bio poklonio', 'će pokloniti', 'poklanja', 'bi poklonio'],
    answer: 'je bio poklonio',
    en: 'he lost the watch his grandfather had given him',
    tip: 'Darivanje prethodi gubitku.',
  },
  {
    mode: 'slaganje',
    q: 'U prijevodu engleskoga „had done” najtočnije odgovara:',
    opts: ['pluskvamperfekt', 'aorist', 'prezent', 'futur II'],
    answer: 'pluskvamperfekt',
    en: 'English had done = pluperfect',
    tip: 'Had left = bio je otišao.',
  },
  {
    mode: 'slaganje',
    q: '„Da sam ____ , ne bih pogriješio.” (znati — ranije)',
    opts: ['bio znao', 'znat', 'znam', 'budem znao'],
    answer: 'bio znao',
    en: 'had I known, I would not have erred',
    tip: 'Irealna prošlost rabi bio + radni (kondicional II. logika).',
  },
];

export { DATA as PLUSKVAMPERFEKT_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PluskvamperfektDrill({ goBack, award }: Props) {
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
          key: 'pluskvamperfekt',
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
        {H('⏮️ Pluskvamperfekt', 'bio sam došao — the past before the past', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — i pretprošlost je vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje pluskvamperfektom! 💪'
                : 'Pluskvamperfekt traži još vježbe.'}
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
      {H('⏮️ Pluskvamperfekt', 'bio sam došao — the past before the past', goBack)}
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
