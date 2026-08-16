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

// C2 figurative-meanings drill (C2 tranche 6, 2026-08-15): polysemous
// verbs (pasti na ispitu, doci do, nositi se s), noun metaphors (glava
// obitelji, korijen problema, val poskupljenja) and adjective metaphors
// (vruca tema, hladan odgovor, zlatne ruke).
const MODE_LABEL: Record<string, string> = {
  glagoli: '🏃 Glagoli',
  imenice: '🏛️ Imenice',
  pridjevi: '🎨 Pridjevi',
};

const DATA = [
  {
    mode: 'glagoli',
    q: '„Pao je na ispitu” znači:',
    opts: ['nije položio ispit', 'fizički se srušio', 'zaspao je', 'pobijedio je'],
    answer: 'nije položio ispit',
    en: 'he failed the exam',
    tip: 'Pasti na ispitu = ne položiti.',
  },
  {
    mode: 'glagoli',
    q: '„Kako ide?” pita:',
    opts: ['kako napreduju stvari', 'kamo hodaš', 'koji je smjer', 'čiji je red'],
    answer: 'kako napreduju stvari',
    en: 'how is it going?',
    tip: 'Ići = napredovati, odvijati se.',
  },
  {
    mode: 'glagoli',
    q: '„Došlo je do nesreće” znači:',
    opts: [
      'nesreća se dogodila',
      'netko je stigao do mjesta',
      'nesreća je izbjegnuta',
      'vozilo je došlo',
    ],
    answer: 'nesreća se dogodila',
    en: 'an accident occurred',
    tip: 'Doći do + G = dogoditi se.',
  },
  {
    mode: 'glagoli',
    q: '„Vrijeme leti” znači:',
    opts: ['brzo prolazi', 'zrakoplovi kasne', 'oluja dolazi', 'sat je pokvaren'],
    answer: 'brzo prolazi',
    en: 'time flies',
    tip: 'Letjeti = veoma brzo prolaziti.',
  },
  {
    mode: 'glagoli',
    q: '„Držati riječ” znači:',
    opts: ['ispuniti obećanje', 'glasno govoriti', 'šutjeti', 'pisati govor'],
    answer: 'ispuniti obećanje',
    en: 'to keep one\u2019s word',
    tip: 'Držati = pridržavati se obećanoga.',
  },
  {
    mode: 'glagoli',
    q: '„Nositi se s problemom” znači:',
    opts: ['suočavati se s njim', 'nositi ga u torbi', 'izbjegavati ga', 'prodavati ga'],
    answer: 'suočavati se s njim',
    en: 'to cope with a problem',
    tip: 'Nositi se s čim = boriti se, izlaziti na kraj.',
  },
  {
    mode: 'glagoli',
    q: '„Pustiti nekoga na miru” znači:',
    opts: ['ne uznemiravati ga', 'osloboditi iz zatvora', 'poslati na odmor', 'zaboraviti ime'],
    answer: 'ne uznemiravati ga',
    en: 'to leave someone alone',
    tip: 'Na miru = bez uznemiravanja.',
  },
  {
    mode: 'glagoli',
    q: '„Voda je provrila, a i on je proključao” — drugi dio znači:',
    opts: ['naglo se razljutio', 'skuhao je čaj', 'oznojio se', 'utopio se'],
    answer: 'naglo se razljutio',
    en: 'he boiled over with anger',
    tip: 'Proključati = planuti od bijesa.',
  },
  {
    mode: 'imenice',
    q: '„Glava obitelji” znači:',
    opts: ['osoba koja vodi obitelj', 'najstarija glava', 'liječnik', 'kuća'],
    answer: 'osoba koja vodi obitelj',
    en: 'the head of the family',
    tip: 'Glava = vodeća osoba.',
  },
  {
    mode: 'imenice',
    q: '„Srce grada” znači:',
    opts: ['samo središte grada', 'bolnica', 'glavni trg jedino', 'stanovnici'],
    answer: 'samo središte grada',
    en: 'the heart of the city',
    tip: 'Srce = najuže središte.',
  },
  {
    mode: 'imenice',
    q: '„Ključ uspjeha” znači:',
    opts: ['ono što omogućuje uspjeh', 'metalni ključ', 'lozinka', 'novac'],
    answer: 'ono što omogućuje uspjeh',
    en: 'the key to success',
    tip: 'Ključ = presudno sredstvo.',
  },
  {
    mode: 'imenice',
    q: '„Val poskupljenja” znači:',
    opts: ['niz poskupljenja koji se širi', 'morski val', 'poplava', 'sniženje'],
    answer: 'niz poskupljenja koji se širi',
    en: 'a wave of price hikes',
    tip: 'Val = niz događaja koji se širi poput vala.',
  },
  {
    mode: 'imenice',
    q: '„Sjena sumnje” znači:',
    opts: ['i najmanja sumnja', 'mrak', 'duh', 'fotografija'],
    answer: 'i najmanja sumnja',
    en: 'a shadow of doubt',
    tip: 'Sjena = trag, natruha.',
  },
  {
    mode: 'imenice',
    q: '„Korijen problema” znači:',
    opts: ['izvor, uzrok problema', 'biljka', 'matematička operacija', 'kraj problema'],
    answer: 'izvor, uzrok problema',
    en: 'the root of the problem',
    tip: 'Korijen = duboki uzrok.',
  },
  {
    mode: 'imenice',
    q: '„Plodovi rada” znači:',
    opts: ['rezultati truda', 'voće s tržnice', 'plaća jedino', 'alati'],
    answer: 'rezultati truda',
    en: 'the fruits of labour',
    tip: 'Plod = rezultat.',
  },
  {
    mode: 'imenice',
    q: '„Teret odgovornosti” znači:',
    opts: ['pritisak koji odgovornost donosi', 'prtljaga', 'kamion', 'porez'],
    answer: 'pritisak koji odgovornost donosi',
    en: 'the burden of responsibility',
    tip: 'Teret = ono što pritišće.',
  },
  {
    mode: 'pridjevi',
    q: '„Težak dan” znači:',
    opts: ['naporan dan', 'dan koji puno važe', 'dug dan doslovno', 'kišni dan'],
    answer: 'naporan dan',
    en: 'a hard day',
    tip: 'Težak = naporan, zahtjevan.',
  },
  {
    mode: 'pridjevi',
    q: '„Visoka cijena” u „platili smo visoku cijenu” znači:',
    opts: ['velika žrtva ili gubitak', 'cijena na polici', 'porez', 'inflacija'],
    answer: 'velika žrtva ili gubitak',
    en: 'we paid a high price (figuratively)',
    tip: 'Visoka cijena = velike posljedice.',
  },
  {
    mode: 'pridjevi',
    q: '„Suha činjenica” znači:',
    opts: ['gola, neuljepšana činjenica', 'činjenica bez vode', 'dosadna laž', 'tajna'],
    answer: 'gola, neuljepšana činjenica',
    en: 'a dry fact',
    tip: 'Suh = bez ukrasa.',
  },
  {
    mode: 'pridjevi',
    q: '„Vruća tema” znači:',
    opts: ['aktualna i osjetljiva tema', 'tema o ljetu', 'opasan predmet', 'svađa'],
    answer: 'aktualna i osjetljiva tema',
    en: 'a hot topic',
    tip: 'Vruć = aktualan, raspravljan.',
  },
  {
    mode: 'pridjevi',
    q: '„Hladan odgovor” znači:',
    opts: [
      'odgovor bez topline i susretljivosti',
      'odgovor iz hladnjaka',
      'tih odgovor',
      'brz odgovor',
    ],
    answer: 'odgovor bez topline i susretljivosti',
    en: 'a cold reply',
    tip: 'Hladan = neprijazan.',
  },
  {
    mode: 'pridjevi',
    q: '„Slijepa poslušnost” znači:',
    opts: ['poslušnost bez razmišljanja', 'poslušnost slijepih', 'sporost', 'odanost psu'],
    answer: 'poslušnost bez razmišljanja',
    en: 'blind obedience',
    tip: 'Slijep = bez prosuđivanja.',
  },
  {
    mode: 'pridjevi',
    q: '„Zlatne ruke” znači:',
    opts: ['iznimna spretnost u poslu', 'nakit', 'bogatstvo', 'žute rukavice'],
    answer: 'iznimna spretnost u poslu',
    en: 'golden hands = great skill',
    tip: 'Zlatan = dragocjen, vrstan.',
  },
  {
    mode: 'pridjevi',
    q: '„Tanka granica” znači:',
    opts: ['jedva zamjetna razlika', 'uska cesta', 'granica države', 'dijeta'],
    answer: 'jedva zamjetna razlika',
    en: 'a fine line',
    tip: 'Tanak = jedva postojeći.',
  },
];

export { DATA as PRENESENA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrenesenaDrill({ goBack, award }: Props) {
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
          key: 'prenesena',
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
          '🌈 Prenesena značenja',
          'pao na ispitu, srce grada — when words stop being literal',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — metafore su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro čitanje prenesenih značenja! 💪'
                : 'Prenesena značenja traže još vježbe.'}
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
        '🌈 Prenesena značenja',
        'pao na ispitu, srce grada — when words stop being literal',
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
