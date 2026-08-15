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

// C2 orthography drill (C2 tranche 3, 2026-08-15): comma rules (inversion,
// vocative, apposition, adversatives, parentheticals), ije/je alternations
// under syllable shortening, and spelled-together vs apart (neću, sljedeći,
// pisat cu, uoci, za sto).
const MODE_LABEL: Record<string, string> = {
  zarez: '💬 Zarez',
  ijeje: '🌗 Ije/je',
  sastavljeno: '🧩 Sastavljeno?',
};

const DATA = [
  {
    mode: 'zarez',
    q: 'Zavisna surečenica ispred glavne — koja je rečenica pravilna?',
    opts: [
      'Kad dođeš kući, javi se.',
      'Kad dođeš kući javi se.',
      'Kad, dođeš kući, javi se.',
      'Kad dođeš, kući javi se.',
    ],
    answer: 'Kad dođeš kući, javi se.',
    en: 'when you get home, call me',
    tip: 'Inverzija: zavisna surečenica ISPRED glavne odvaja se zarezom.',
  },
  {
    mode: 'zarez',
    q: 'Zavisna surečenica iza glavne — koja je rečenica pravilna?',
    opts: [
      'Javi se kad dođeš kući.',
      'Javi se, kad dođeš kući.',
      'Javi se kad, dođeš kući.',
      'Javi, se kad dođeš kući.',
    ],
    answer: 'Javi se kad dođeš kući.',
    en: 'call me when you get home',
    tip: 'U običnom redu (glavna pa zavisna) zarez se NE piše.',
  },
  {
    mode: 'zarez',
    q: 'Vokativ se odvaja zarezom. Koja je rečenica pravilna?',
    opts: ['Ivane, dođi ovamo.', 'Ivane dođi ovamo.', 'Ivane dođi, ovamo.', 'Ivane, dođi, ovamo.'],
    answer: 'Ivane, dođi ovamo.',
    en: 'Ivan, come here',
    tip: 'Vokativ (izravno obraćanje) uvijek se odvaja zarezom.',
  },
  {
    mode: 'zarez',
    q: 'Apozicija — koja je rečenica pravilna?',
    opts: [
      'Zagreb, glavni grad Hrvatske, slavi rođendan.',
      'Zagreb glavni grad Hrvatske slavi rođendan.',
      'Zagreb, glavni grad Hrvatske slavi rođendan.',
      'Zagreb glavni grad, Hrvatske, slavi rođendan.',
    ],
    answer: 'Zagreb, glavni grad Hrvatske, slavi rođendan.',
    en: 'Zagreb, the capital of Croatia, celebrates its birthday',
    tip: 'Apozicija se odvaja zarezima s OBIJU strana.',
  },
  {
    mode: 'zarez',
    q: 'Ispred kojih veznika u pravilu piše zarez?',
    opts: ['ali, nego, no, već', 'i, pa, te', 'ili, iliti', 'da, kako'],
    answer: 'ali, nego, no, već',
    en: 'before adversative conjunctions',
    tip: 'Suprotni veznici traže zarez: Došao je, ali nije ostao.',
  },
  {
    mode: 'zarez',
    q: 'Nabrajanje — koja je rečenica pravilna?',
    opts: [
      'Kupili smo kruh, mlijeko i sir.',
      'Kupili smo kruh, mlijeko, i sir.',
      'Kupili smo, kruh, mlijeko i sir.',
      'Kupili smo kruh mlijeko i sir.',
    ],
    answer: 'Kupili smo kruh, mlijeko i sir.',
    en: 'we bought bread, milk and cheese',
    tip: 'U nabrajanju zarez ide među članove, ali NE ispred sastavnoga i.',
  },
  {
    mode: 'zarez',
    q: '„Dakle” umetnuto u sredinu rečenice:',
    opts: [
      'odvaja se zarezima s obje strane',
      'ne odvaja se nikad',
      'odvaja se samo slijeva',
      'piše se u zagradama',
    ],
    answer: 'odvaja se zarezima s obje strane',
    en: 'parenthetical dakle takes commas on both sides',
    tip: 'Umetnute riječi: Rezultat je, dakle, jasan.',
  },
  {
    mode: 'zarez',
    q: 'Konektor na početku rečenice — koja je pravilna?',
    opts: [
      'Međutim, plan se promijenio.',
      'Međutim plan se promijenio.',
      'Međutim; plan se promijenio.',
      'Međutim: plan se promijenio.',
    ],
    answer: 'Međutim, plan se promijenio.',
    en: 'however, the plan changed',
    tip: 'Tekstni konektor na početku rečenice odvaja se zarezom.',
  },
  {
    mode: 'ijeje',
    q: 'Komparativ pridjeva „lijep” glasi:',
    opts: ['ljepši', 'lijepši', 'lepši', 'ljepšiji'],
    answer: 'ljepši',
    en: 'more beautiful',
    tip: 'Kraćenjem sloga ije → je: lijep → ljepši.',
  },
  {
    mode: 'ijeje',
    q: 'Genitiv jednine imenice „vrijeme” glasi:',
    opts: ['vremena', 'vrijemena', 'vrjemena', 'vremjena'],
    answer: 'vremena',
    en: 'of time / weather',
    tip: 'Vrijeme → vremena: ije se krati u e (bez j!).',
  },
  {
    mode: 'ijeje',
    q: 'Umanjenica od „cvijet” glasi:',
    opts: ['cvjetić', 'cvijetić', 'cvetić', 'cvijetčić'],
    answer: 'cvjetić',
    en: 'little flower',
    tip: 'Kratki slog: cvijet → cvjetić, cvjetni.',
  },
  {
    mode: 'ijeje',
    q: 'Pridjev od „snijeg” glasi:',
    opts: ['snježan', 'sniježan', 'snežan', 'snjegan'],
    answer: 'snježan',
    en: 'snowy',
    tip: 'Snijeg → snježan (kraćenje ije → je).',
  },
  {
    mode: 'ijeje',
    q: 'Knjiga u kojoj su popisane riječi zove se:',
    opts: ['rječnik', 'riječnik', 'rečnik', 'rijećnik'],
    answer: 'rječnik',
    en: 'dictionary',
    tip: 'Riječ → rječnik: u izvedenici se slog krati.',
  },
  {
    mode: 'ijeje',
    q: 'Genitiv jednine imenice „dijete” glasi:',
    opts: ['djeteta', 'dijeteta', 'deteta', 'djece'],
    answer: 'djeteta',
    en: 'of the child',
    tip: 'Dijete → djeteta; množina ide na djeca (G: djece).',
  },
  {
    mode: 'ijeje',
    q: 'Muški rod radnoga pridjeva glagola „htjeti” glasi:',
    opts: ['htio', 'htjeo', 'hteo', 'htijo'],
    answer: 'htio',
    en: '(he) wanted',
    tip: 'Htjela, htjelo — ali muški rod HTIO (je → i ispred o).',
  },
  {
    mode: 'ijeje',
    q: 'Pridjev od „mlijeko” glasi:',
    opts: ['mliječni', 'mlječni', 'mlečni', 'mljekni'],
    answer: 'mliječni',
    en: 'dairy, milk-',
    tip: 'Ovdje dužina OSTAJE: mlijeko → mliječni (ali mljekar!).',
  },
  {
    mode: 'sastavljeno',
    q: 'Niječni oblik glagola htjeti u futuru standardno pišemo:',
    opts: ['neću', 'ne ću', 'néću', 'ne-ću'],
    answer: 'neću',
    en: 'I will not',
    tip: 'Suvremena norma preporučuje sastavljeno: neću, nećeš.',
  },
  {
    mode: 'sastavljeno',
    q: '____ tjedna idem na more.',
    opts: ['Sljedećeg', 'Slijedećeg', 'Sledećeg', 'Slijedečeg'],
    answer: 'Sljedećeg',
    en: 'next week I am going to the coast',
    tip: 'Pridjev je SLJEDEĆI; „slijedeći” je glagolski prilog (slijedeći trag).',
  },
  {
    mode: 'sastavljeno',
    q: 'Futur I. glagola „pisati” s enklitikom iza infinitiva pišemo:',
    opts: ['pisat ću', 'pisati ću', 'pisaću', 'pisat-ću'],
    answer: 'pisat ću',
    en: 'I will write',
    tip: 'Infinitiv gubi završno -i ispred ću: pisat ću (rastavljeno).',
  },
  {
    mode: 'sastavljeno',
    q: 'Došli su ____ blagdana. (neposredno prije)',
    opts: ['uoči', 'u oči', 'uočí', 'u-oči'],
    answer: 'uoči',
    en: 'they arrived on the eve of the holiday',
    tip: 'Prijedlog UOČI piše se sastavljeno; „u oči” = pogledati u oči.',
  },
  {
    mode: 'sastavljeno',
    q: 'Meni je ____ hoćemo li ići danas ili sutra.',
    opts: ['svejedno', 'sve jedno', 'sve-jedno', 'svejedno,'],
    answer: 'svejedno',
    en: 'it is all the same to me',
    tip: 'Prilog svejedno piše se sastavljeno.',
  },
  {
    mode: 'sastavljeno',
    q: '____ se točno zalažete? (za koju stvar)',
    opts: ['Za što', 'Zašto', 'Zaš to', 'Za-što'],
    answer: 'Za što',
    en: 'what exactly do you advocate for?',
    tip: 'Zašto = why; ZA ŠTO (rastavljeno) = za koju stvar.',
  },
  {
    mode: 'sastavljeno',
    q: '____ te nema, sve je drukčije. (od trenutka kad)',
    opts: ['Otkad', 'Od kad', 'Otkada je', 'Od-kad'],
    answer: 'Otkad',
    en: 'since you have been gone, everything is different',
    tip: 'Vremenski prilog otkad piše se sastavljeno.',
  },
  {
    mode: 'sastavljeno',
    q: 'Pozdrav pri odlasku pišemo:',
    opts: ['doviđenja', 'do viđenja', 'do-viđenja', 'doviđenja!'],
    answer: 'doviđenja',
    en: 'goodbye',
    tip: 'Pozdrav doviđenja srastao je u jednu riječ.',
  },
];

export { DATA as PRAVOPIS_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PravopisDrill({ goBack, award }: Props) {
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
          key: 'pravopis',
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
          '✒️ Pravopis',
          'zarez, ije/je, sastavljeno ili rastavljeno — the fine print of standard Croatian',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — pišete besprijekorno! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje pravopisom! 💪'
                : 'Pravopis traži još vježbe.'}
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
        '✒️ Pravopis',
        'zarez, ije/je, sastavljeno ili rastavljeno — the fine print of standard Croatian',
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
