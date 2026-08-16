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

// B2 genitive-prepositions drill (B2 tranche 7, 2026-08-15): the iz-
// series (ispred/iza/iznad/ispod + G), pokraj/izmedju/blizu/oko/izvan/
// unutar/duz, the nasuprot-takes-dative trap, and the pred+I / ispred+G
// pairs.
const MODE_LABEL: Record<string, string> = {
  mjesto: '📍 Mjesto',
  padez: '📐 Padež',
  kontrast: '⚖️ Kontrasti',
};

const DATA = [
  {
    mode: 'mjesto',
    q: 'Automobil je parkiran ____ kuće. (sprijeda)',
    opts: ['ispred', 'pred', 'pri', 'o'],
    answer: 'ispred',
    en: 'the car is parked in front of the house',
    tip: 'Ispred + genitiv (pred + I je par bez kretanja).',
  },
  {
    mode: 'mjesto',
    q: 'Vrt se nalazi ____ zgrade. (straga)',
    opts: ['iza', 'za', 'od', 'po'],
    answer: 'iza',
    en: 'the garden is behind the building',
    tip: 'Iza + genitiv: iza zgrade.',
  },
  {
    mode: 'mjesto',
    q: 'Lampa visi ____ stola.',
    opts: ['iznad', 'nad', 'na', 'uz'],
    answer: 'iznad',
    en: 'the lamp hangs above the table',
    tip: 'Iznad + genitiv (nad + I je par).',
  },
  {
    mode: 'mjesto',
    q: 'Papuče su ____ kreveta.',
    opts: ['ispod', 'pod', 'po', 'niz'],
    answer: 'ispod',
    en: 'the slippers are under the bed',
    tip: 'Ispod + genitiv.',
  },
  {
    mode: 'mjesto',
    q: 'Sjedi ____ prozora. (uz sam prozor)',
    opts: ['pokraj', 'preko', 'kroz', 'na'],
    answer: 'pokraj',
    en: 'she sits by the window',
    tip: 'Pokraj/pored + genitiv.',
  },
  {
    mode: 'mjesto',
    q: 'Kafić je ____ pošte i banke.',
    opts: ['između', 'među', 'izvan', 'oko'],
    answer: 'između',
    en: 'the cafe is between the post office and the bank',
    tip: 'Između + genitiv (među + I za mnoštvo).',
  },
  {
    mode: 'mjesto',
    q: 'Živimo ____ centra. (nedaleko)',
    opts: ['blizu', 'kod bliskog', 'uz', 'k'],
    answer: 'blizu',
    en: 'we live near the centre',
    tip: 'Blizu + genitiv: blizu centra.',
  },
  {
    mode: 'mjesto',
    q: 'Okupili su se ____ vatre.',
    opts: ['oko', 'okolo uz', 'o', 'uza'],
    answer: 'oko',
    en: 'they gathered around the fire',
    tip: 'Oko + genitiv: oko vatre, oko stola.',
  },
  {
    mode: 'padez',
    q: '„Nasuprot” je iznimka jer traži:',
    opts: ['dativ (nasuprot kolodvoru)', 'genitiv', 'akuzativ', 'instrumental'],
    answer: 'dativ (nasuprot kolodvoru)',
    en: 'nasuprot takes the dative',
    tip: 'Nasuprot, usprkos, unatoč — dativna trojka.',
  },
  {
    mode: 'padez',
    q: 'Ispred, iza, iznad, ispod traže:',
    opts: ['genitiv', 'dativ', 'akuzativ', 'lokativ'],
    answer: 'genitiv',
    en: 'the iz- series takes the genitive',
    tip: 'Svi složeni s iz-: genitiv.',
  },
  {
    mode: 'padez',
    q: '„Sjedimo ____ stolom” prema „sjedimo pokraj stola”:',
    opts: [
      'za (instrumental) / pokraj (genitiv)',
      'za (genitiv) / pokraj (dativ)',
      'oba genitiv',
      'oba instrumental',
    ],
    answer: 'za (instrumental) / pokraj (genitiv)',
    en: 'two ways to sit by a table',
    tip: 'Za stolom (I) = uz stol radno; pokraj stola (G) = kraj njega.',
  },
  {
    mode: 'padez',
    q: 'Prošli smo ____ mosta. (donja strana)',
    opts: ['ispod', 'pod', 'po', 'niz'],
    answer: 'ispod',
    en: 'we passed under the bridge',
    tip: 'I kretanje: ispod + G (pod + A/I također može).',
  },
  {
    mode: 'padez',
    q: '„Preko” u „preko puta škole” znači:',
    opts: ['nasuprot školi', 'iznad škole', 'kroz školu', 'oko škole'],
    answer: 'nasuprot školi',
    en: 'preko puta = across from',
    tip: 'Preko puta + G = nasuprot.',
  },
  {
    mode: 'padez',
    q: 'Izašli su ____ grada. (napustili područje)',
    opts: ['izvan', 'van iz u', 'od', 'među'],
    answer: 'izvan',
    en: 'they went outside the city',
    tip: 'Izvan + G: izvan grada, izvan zgrade.',
  },
  {
    mode: 'padez',
    q: '„Unutar” traži:',
    opts: ['genitiv (unutar zgrade)', 'akuzativ', 'dativ', 'lokativ'],
    answer: 'genitiv (unutar zgrade)',
    en: 'unutar takes the genitive',
    tip: 'Unutar granica, unutar tvrtke.',
  },
  {
    mode: 'padez',
    q: '„Duž” u „duž obale” traži:',
    opts: ['genitiv', 'akuzativ', 'instrumental', 'dativ'],
    answer: 'genitiv',
    en: 'duz (along) takes the genitive',
    tip: 'Duž obale, duž rijeke, uzduž ceste.',
  },
  {
    mode: 'kontrast',
    q: '„Pred kućom” i „ispred kuće” —',
    opts: ['znače isto, drugi padež', 'suprotna značenja', 'pred je pogrešno', 'ispred znači iza'],
    answer: 'znače isto, drugi padež',
    en: 'pred + I equals ispred + G',
    tip: 'Parovi: pred/ispred, nad/iznad, pod/ispod, za/iza.',
  },
  {
    mode: 'kontrast',
    q: '„Među prijateljima” prema „između dva prijatelja”:',
    opts: ['među za mnoštvo, između za dvoje', 'obrnuto', 'isti padež', 'među je zastarjelo'],
    answer: 'među za mnoštvo, između za dvoje',
    en: 'medju (among) vs izmedju (between)',
    tip: 'Među + I (mnoštvo); između + G (obično dvoje).',
  },
  {
    mode: 'kontrast',
    q: 'Sakrio se ____ vrata. (kretanje, smjer)',
    opts: ['iza', 'za s akuzativom samo', 'od', 'izvan'],
    answer: 'iza',
    en: 'he hid behind the door',
    tip: 'Iza + G pokriva i cilj kretanja: stao je iza vrata.',
  },
  {
    mode: 'kontrast',
    q: 'Stanujemo ____ škole, a radim ____ centru.',
    opts: ['blizu … u', 'u … blizu', 'kod … na', 'među … o'],
    answer: 'blizu … u',
    en: 'we live near the school; I work in the centre',
    tip: 'Blizu + G; u + L.',
  },
  {
    mode: 'kontrast',
    q: '„Oko podneva” pokazuje da „oko” može značiti:',
    opts: ['približno vrijeme', 'samo prostor', 'organ vida', 'okvir'],
    answer: 'približno vrijeme',
    en: 'around noon (approximation)',
    tip: 'Oko + G i za približnost: oko pet sati.',
  },
  {
    mode: 'kontrast',
    q: 'Sve je propalo ____ tebe! (krivnja)',
    opts: ['zbog', 'iza', 'ispred', 'blizu'],
    answer: 'zbog',
    en: 'it all failed because of you',
    tip: 'Zbog + G — uzrok, ne mjesto.',
  },
  {
    mode: 'kontrast',
    q: '„Povrh svega” znači:',
    opts: ['uz sve to, dodatno', 'ispod svega', 'umjesto svega', 'protiv svega'],
    answer: 'uz sve to, dodatno',
    en: 'on top of everything',
    tip: 'Povrh + G: povrh svega, povrh plaće.',
  },
  {
    mode: 'kontrast',
    q: 'Došao je ____ mene. (zamijenio me)',
    opts: ['umjesto', 'izvan', 'povrh', 'iznad'],
    answer: 'umjesto',
    en: 'he came instead of me',
    tip: 'Umjesto + G: umjesto mene, umjesto odgovora.',
  },
];

export { DATA as PRIJEDLOZI_GEN_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrijedloziGenDrill({ goBack, award }: Props) {
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
          key: 'prijedlozigen',
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
          '🗺️ Prijedlozi s genitivom',
          'ispred kuće, između dva svijeta — the genitive map of space',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — prostor genitiva je vaš! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje genitivnim prijedlozima! 💪'
                : 'Prijedlozi s genitivom traže još vježbe.'}
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
        '🗺️ Prijedlozi s genitivom',
        'ispred kuće, između dva svijeta — the genitive map of space',
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
