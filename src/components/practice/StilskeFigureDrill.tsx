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

// C2 figures-of-speech drill (C2 tranche 9, 2026-08-15): recognizing the
// core figures (metaphor, metonymy, hyperbole, litotes, irony, anaphora,
// onomatopoeia), telling them apart, and reading them in headlines,
// literature and ads.
const MODE_LABEL: Record<string, string> = {
  prepoznaj: '🔍 Prepoznavanje',
  razlike: '⚖️ Razlike',
  citanje: '📖 U tekstu',
};

const DATA = [
  {
    mode: 'prepoznaj',
    q: '„More se smije” sadrži:',
    opts: ['personifikaciju', 'hiperbolu', 'ironiju', 'litotu'],
    answer: 'personifikaciju',
    en: 'the sea laughs — personification',
    tip: 'Neživo dobiva ljudsku radnju.',
  },
  {
    mode: 'prepoznaj',
    q: '„Rekao sam ti to sto puta!” sadrži:',
    opts: ['hiperbolu', 'litotu', 'metonimiju', 'epitet'],
    answer: 'hiperbolu',
    en: 'I told you a hundred times',
    tip: 'Pretjerivanje radi isticanja.',
  },
  {
    mode: 'prepoznaj',
    q: '„Nije to loše” (za izvrsnu stvar) sadrži:',
    opts: ['litotu', 'hiperbolu', 'personifikaciju', 'onomatopeju'],
    answer: 'litotu',
    en: 'not bad at all — litotes',
    tip: 'Ublaženo niječno umjesto pohvale.',
  },
  {
    mode: 'prepoznaj',
    q: '„Popio je cijelu čašu” — a mislimo na sadržaj. To je:',
    opts: ['metonimija', 'metafora', 'ironija', 'anafora'],
    answer: 'metonimija',
    en: 'he drank the glass — metonymy',
    tip: 'Posuda za sadržaj.',
  },
  {
    mode: 'prepoznaj',
    q: '„Baš si mi pomogao!” (nakon štete) sadrži:',
    opts: ['ironiju', 'litotu', 'epitet', 'gradaciju'],
    answer: 'ironiju',
    en: 'great help you were! — irony',
    tip: 'Suprotno od rečenoga.',
  },
  {
    mode: 'prepoznaj',
    q: '„Zlatne ruke, srce od kamena” — oba izraza su:',
    opts: ['metafore', 'poredbe', 'onomatopeje', 'anafore'],
    answer: 'metafore',
    en: 'golden hands, heart of stone',
    tip: 'Prijenos značenja bez kao.',
  },
  {
    mode: 'prepoznaj',
    q: '„Zuji, zveči, zvoni, zvuči” (Nazor) sadrži:',
    opts: ['onomatopeju i aliteraciju', 'ironiju', 'litotu', 'metonimiju'],
    answer: 'onomatopeju i aliteraciju',
    en: 'buzzing, clanging — sound figures',
    tip: 'Zvuk oponaša značenje; z se ponavlja.',
  },
  {
    mode: 'prepoznaj',
    q: '„Kamo ideš, kamo žuriš, kamo bježiš?” sadrži:',
    opts: ['anaforu', 'epiforu', 'litotu', 'metonimiju'],
    answer: 'anaforu',
    en: 'where…, where…, where… — anaphora',
    tip: 'Isti početak uzastopnih cjelina.',
  },
  {
    mode: 'razlike',
    q: 'Metafora se od poredbe razlikuje:',
    opts: ['nema poredbene riječi (kao)', 'duža je', 'ima rimu', 'uvijek je smiješna'],
    answer: 'nema poredbene riječi (kao)',
    en: 'metaphor drops the like',
    tip: 'Lav je (kao) junak → on je lav.',
  },
  {
    mode: 'razlike',
    q: '„Hrvatska je pobijedila” (reprezentacija) je:',
    opts: ['metonimija (zemlja za momčad)', 'hiperbola', 'ironija', 'litota'],
    answer: 'metonimija (zemlja za momčad)',
    en: 'Croatia won — metonymy',
    tip: 'Cjelina za dio: država za tim.',
  },
  {
    mode: 'razlike',
    q: 'Eufemizam je:',
    opts: ['blaži izraz za neugodno', 'pretjerivanje', 'izrugivanje', 'ponavljanje'],
    answer: 'blaži izraz za neugodno',
    en: 'a euphemism softens',
    tip: 'Preminuo je; treća dob; skromnih mogućnosti.',
  },
  {
    mode: 'razlike',
    q: '„Grmi i sijeva, a on ni da trepne” — kontrast je:',
    opts: ['antiteza', 'anafora', 'epitet', 'elipsa'],
    answer: 'antiteza',
    en: 'thunder vs calm — antithesis',
    tip: 'Suprotstavljene slike.',
  },
  {
    mode: 'razlike',
    q: '„Stotine i stotine, tisuće, mnoštvo!” niže:',
    opts: ['gradaciju', 'litotu', 'ironiju', 'metonimiju'],
    answer: 'gradaciju',
    en: 'hundreds, thousands — gradation',
    tip: 'Pojačavanje u nizu.',
  },
  {
    mode: 'razlike',
    q: '„Bijeli snijeg” kao stalni ukras je:',
    opts: ['epitet', 'metafora', 'ironija', 'elipsa'],
    answer: 'epitet',
    en: 'white snow — an epithet',
    tip: 'Stalni pridjev slike.',
  },
  {
    mode: 'razlike',
    q: 'Retoričko pitanje:',
    opts: ['ne očekuje odgovor', 'traži brz odgovor', 'postavlja ga sudac', 'uvijek je uvreda'],
    answer: 'ne očekuje odgovor',
    en: 'expects no answer',
    tip: 'Tko to još ne zna?',
  },
  {
    mode: 'razlike',
    q: '„Kupio kruh, mlijeko, novine.” (bez veznika) je:',
    opts: ['asindeton', 'polisindeton', 'anafora', 'antiteza'],
    answer: 'asindeton',
    en: 'no conjunctions — asyndeton',
    tip: 'Nabrajanje bez i.',
  },
  {
    mode: 'citanje',
    q: '„Cijeli je grad izašao na ulice” — figura:',
    opts: ['hiperbola s metonimijom', 'litota', 'ironija', 'epitet'],
    answer: 'hiperbola s metonimijom',
    en: 'the whole town came out',
    tip: 'Grad = ljudi; cijeli = pretjerano.',
  },
  {
    mode: 'citanje',
    q: 'Naslov „Tišina koja govori” počiva na:',
    opts: ['paradoksu/oksimoronu', 'anafori', 'asindetonu', 'epiteti'],
    answer: 'paradoksu/oksimoronu',
    en: 'the silence that speaks',
    tip: 'Proturječje s dubljim smislom.',
  },
  {
    mode: 'citanje',
    q: '„Otišao je među zvijezde” (o smrti) je:',
    opts: ['eufemizam', 'ironija', 'litota', 'gradacija'],
    answer: 'eufemizam',
    en: 'he went to the stars',
    tip: 'Ublažena slika smrti.',
  },
  {
    mode: 'citanje',
    q: 'Reklama „Najbolji okus ikada!” rabi:',
    opts: ['hiperbolu', 'litotu', 'antitezu', 'elipsu'],
    answer: 'hiperbolu',
    en: 'best taste ever!',
    tip: 'Reklamno pretjerivanje.',
  },
  {
    mode: 'citanje',
    q: '„Pametan k’o noć” u šali je:',
    opts: ['ironija', 'pohvala', 'litota', 'eufemizam'],
    answer: 'ironija',
    en: 'smart as the night = not smart',
    tip: 'Poredba s obrnutim značenjem.',
  },
  {
    mode: 'citanje',
    q: '„Danas — kiša. Sutra — sunce.” izostavlja glagole:',
    opts: ['elipsa', 'anafora', 'metafora', 'gradacija'],
    answer: 'elipsa',
    en: 'ellipsis drops the verbs',
    tip: 'Sažetost novinskoga stila.',
  },
  {
    mode: 'citanje',
    q: 'Političar „nije najsretnije formulirao” izjavu — figura:',
    opts: ['litota (ublažavanje kritike)', 'hiperbola', 'onomatopeja', 'anafora'],
    answer: 'litota (ublažavanje kritike)',
    en: 'not the happiest phrasing',
    tip: 'Diplomatska litota.',
  },
  {
    mode: 'citanje',
    q: 'Prepoznavanje figura pomaže:',
    opts: [
      'čitanju književnosti i medija s razumijevanjem',
      'samo pjesnicima',
      'pravopisu',
      'izgovoru',
    ],
    answer: 'čitanju književnosti i medija s razumijevanjem',
    en: 'figures unlock literature and media',
    tip: 'Cilj: čitati između redaka.',
  },
];

export { DATA as STILSKE_FIGURE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function StilskeFigureDrill({ goBack, award }: Props) {
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
          key: 'stilskefigure',
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
        {H('🎭 Stilske figure', 'metafora, ironija, litota — reading between the lines', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — figure su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro prepoznavanje stilskih figura! 💪'
                : 'Stilske figure traže još vježbe.'}
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
      {H('🎭 Stilske figure', 'metafora, ironija, litota — reading between the lines', goBack)}
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
