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

// B2 verbs-of-motion drill (glagoli kretanja) — the verbs-of-motion grammar
// unit had no pool drill. Three modes: prefix semantics (u-/iz-/pre-/do-/ob-/
// s-/na-/pri- on ici), aspect pairs (-laziti imperfectives), and preposition/
// case government (u+A, iz+G, do+G, preko+G, s+G, prici+D).
const MODE_LABEL: Record<string, string> = {
  prefiksi: '🧭 Prefiksi',
  parovi: '🔁 Vidski parovi',
  rekcija: '📍 Prijedlog i padež',
};

const DATA = [
  {
    mode: 'prefiksi',
    q: '„____ smo u kuću čim je počela kiša.”',
    opts: ['Ušli', 'Izašli', 'Prešli', 'Sišli'],
    answer: 'Ušli',
    en: 'We went into the house as soon as the rain started.',
    tip: 'u- = kretanje prema unutra: ući u + akuzativ.',
  },
  {
    mode: 'prefiksi',
    q: '„____ je s posla u pet.”',
    opts: ['Otišla', 'Došla', 'Ušla', 'Prišla'],
    answer: 'Otišla',
    en: 'She left work at five.',
    tip: 'ot- = udaljavanje: otići s posla.',
  },
  {
    mode: 'prefiksi',
    q: '„____ smo rijeku starim mostom.”',
    opts: ['Prešli', 'Prošli', 'Obišli', 'Ušli'],
    answer: 'Prešli',
    en: 'We crossed the river by the old bridge.',
    tip: 'pre- = s jedne strane na drugu: prijeći rijeku.',
  },
  {
    mode: 'prefiksi',
    q: '„Kad ____ do križanja, skrenite desno.”',
    opts: ['dođete', 'odete', 'uđete', 'siđete'],
    answer: 'dođete',
    en: 'When you reach the crossroads, turn right.',
    tip: 'do- = dosezanje cilja: doći do + genitiv.',
  },
  {
    mode: 'prefiksi',
    q: '„____ je cijeli grad tražeći poklon.”',
    opts: ['Obišla', 'Otišla', 'Ušla', 'Izašla'],
    answer: 'Obišla',
    en: 'She went all around town looking for a present.',
    tip: 'ob- = kretanje uokolo: obići grad.',
  },
  {
    mode: 'prefiksi',
    q: '„____ smo niz strme stube u konobu.”',
    opts: ['Sišli', 'Uzašli', 'Prešli', 'Naišli'],
    answer: 'Sišli',
    en: 'We went down the steep stairs into the tavern.',
    tip: 's(i)- = kretanje prema dolje: sići niz stube.',
  },
  {
    mode: 'prefiksi',
    q: '„Na povratku smo ____ na staru prijateljicu.”',
    opts: ['naišli', 'prešli', 'sišli', 'ušli'],
    answer: 'naišli',
    en: 'On the way back we ran into an old friend.',
    tip: 'na- + na = slučajan susret: naići na koga.',
  },
  {
    mode: 'prefiksi',
    q: '„____ mi malo bliže da te bolje čujem.”',
    opts: ['Priđi', 'Otiđi', 'Izađi', 'Siđi'],
    answer: 'Priđi',
    en: 'Come a little closer so I can hear you better.',
    tip: 'pri- = približavanje: prići bliže (+ dativ).',
  },
  {
    mode: 'parovi',
    q: "Nesvršeni parnjak glagola 'ući' jest:",
    opts: ['ulaziti', 'ući se', 'uhoditi', 'ulazati'],
    answer: 'ulaziti',
    en: 'the imperfective partner of "to enter"',
    tip: 'ući (pf.) / ulaziti (impf.) — parovi kretanja tvore se osnovom -laziti.',
  },
  {
    mode: 'parovi',
    q: "Svršeni parnjak glagola 'dolaziti':",
    opts: ['doći', 'dolaznuti', 'dohodati', 'doletjeti'],
    answer: 'doći',
    en: 'the perfective partner of "to come"',
    tip: 'dolaziti (impf.) / doći (pf.).',
  },
  {
    mode: 'parovi',
    q: '„Svako jutro ____ iz kuće u sedam.” (navika)',
    opts: ['izlazim', 'izađem', 'izaći ću', 'izašao sam'],
    answer: 'izlazim',
    en: 'Every morning I leave the house at seven.',
    tip: 'Navika/ponavljanje → nesvršeni prezent: izlazim.',
  },
  {
    mode: 'parovi',
    q: '„Jučer sam ____ iz ureda ranije.” (jednokratno)',
    opts: ['izašao', 'izlazio', 'izlazim', 'izlazit ću'],
    answer: 'izašao',
    en: 'Yesterday I left the office earlier.',
    tip: 'Jednokratna dovršena radnja → svršeni oblik: izašao.',
  },
  {
    mode: 'parovi',
    q: "Nesvršeni parnjak glagola 'prijeći':",
    opts: ['prelaziti', 'prijelaziti', 'prehodati', 'prelazati'],
    answer: 'prelaziti',
    en: 'the imperfective partner of "to cross"',
    tip: 'prijeći (pf.) / prelaziti (impf.) — pazite na ije/e u osnovi.',
  },
  {
    mode: 'parovi',
    q: '„Dok smo ____ granicu, pokazali smo putovnice.” (proces)',
    opts: ['prelazili', 'prešli', 'prijeđemo', 'prelazimo'],
    answer: 'prelazili',
    en: 'While we were crossing the border, we showed our passports.',
    tip: 'Dok + trajanje u prošlosti → nesvršeni perfekt: prelazili.',
  },
  {
    mode: 'parovi',
    q: "Svršeni parnjak glagola 'odlaziti':",
    opts: ['otići', 'odlaznuti', 'othodati', 'odići'],
    answer: 'otići',
    en: 'the perfective partner of "to leave"',
    tip: 'odlaziti (impf.) / otići (pf.).',
  },
  {
    mode: 'parovi',
    q: '„Cijele večeri gosti su ____ i dolazili.”',
    opts: ['odlazili', 'otišli', 'odu', 'će otići'],
    answer: 'odlazili',
    en: 'All evening the guests kept leaving and arriving.',
    tip: 'Ponavljanje kroz vrijeme → nesvršeni oblik: odlazili i dolazili.',
  },
  {
    mode: 'rekcija',
    q: '„Ušla je ____.”',
    opts: ['u sobu', 'u sobi', 'iz sobe', 'na sobu'],
    answer: 'u sobu',
    en: 'She entered the room.',
    tip: 'ući U + AKUZATIV (kamo? — u sobu); lokativ bi značio mjesto, ne cilj.',
  },
  {
    mode: 'rekcija',
    q: '„Izašao je ____.”',
    opts: ['iz zgrade', 'iz zgradu', 'od zgrade', 'u zgradi'],
    answer: 'iz zgrade',
    en: 'He came out of the building.',
    tip: 'izaći IZ + GENITIV: iz zgrade.',
  },
  {
    mode: 'rekcija',
    q: '„Došli smo ____.”',
    opts: ['do mora', 'do more', 'u moru', 's mora'],
    answer: 'do mora',
    en: 'We reached the sea.',
    tip: 'doći DO + GENITIV: do mora.',
  },
  {
    mode: 'rekcija',
    q: '„Prešli smo ____.”',
    opts: ['preko mosta', 'preko most', 'kroz mosta', 'na mostu'],
    answer: 'preko mosta',
    en: 'We crossed over the bridge.',
    tip: 'prijeći PREKO + GENITIV (ili izravno: prijeći most + akuzativ).',
  },
  {
    mode: 'rekcija',
    q: '„Prošli smo ____ stari dio grada.”',
    opts: ['kroz', 'preko', 'po', 'uz'],
    answer: 'kroz',
    en: 'We passed through the old part of town.',
    tip: 'proći KROZ + AKUZATIV: kroz stari dio grada.',
  },
  {
    mode: 'rekcija',
    q: '„Popeli smo se ____.”',
    opts: ['na vrh', 'na vrhu', 'u vrh', 's vrha'],
    answer: 'na vrh',
    en: 'We climbed to the top.',
    tip: 'popeti se NA + AKUZATIV (kamo? — na vrh); „na vrhu” odgovara na pitanje gdje.',
  },
  {
    mode: 'rekcija',
    q: '„Sišla je ____.”',
    opts: ['s pozornice', 's pozornicu', 'iz pozornice', 'na pozornici'],
    answer: 's pozornice',
    en: 'She came down off the stage.',
    tip: 'sići S + GENITIV: s pozornice.',
  },
  {
    mode: 'rekcija',
    q: '„Prišao je ____ i pozdravio nas.”',
    opts: ['našem stolu', 'naš stol', 'našega stola', 'na naš stol'],
    answer: 'našem stolu',
    en: 'He came up to our table and greeted us.',
    tip: 'prići + DATIV: prići stolu.',
  },
];

export { DATA as KRETANJE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function MotionVerbsDrill({ goBack, award }: Props) {
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
          key: 'kretanje',
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
        {H('🚶 Glagoli kretanja', 'doći · otići · prijeći — prefixes in motion', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršena orijentacija — svi smjerovi točni! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro snalaženje u prefiksima! 💪'
                : 'Prefiksi i rekcija traže još vježbe.'}
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
      {H('🚶 Glagoli kretanja', 'doći · otići · prijeći — prefixes in motion', goBack)}
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
            const isChosen = opt === chosen;
            return (
              <button
                key={opt}
                className="ob"
                onClick={() => pick(opt)}
                style={{
                  textAlign: 'left',
                  ...(answered && isCorrect
                    ? { borderColor: '#16a34a', background: 'rgba(22,163,74,.08)' }
                    : answered && isChosen
                      ? { borderColor: '#dc2626', background: 'rgba(220,38,38,.08)' }
                      : {}),
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
              marginTop: 12,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--info-bg, rgba(56,189,248,.08))',
              fontSize: 13.5,
              lineHeight: 1.55,
            }}
          >
            💡 {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 14 }} onClick={next}>
            {idx + 1 >= total ? 'Završi →' : 'Dalje →'}
          </button>
        )}
      </div>
    </div>
  );
}
