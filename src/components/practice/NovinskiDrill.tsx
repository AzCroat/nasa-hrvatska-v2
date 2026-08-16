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

// C2 journalese drill (C2 tranche 6, 2026-08-15): headline grammar
// (dropped auxiliaries, nominal and passive headlines, headline present),
// decoding newsroom metaphors and formulas (zeleno svjetlo, mrtva tocka,
// izvori bliski...), and register conventions (navodno, lead, hedged
// conditional).
const MODE_LABEL: Record<string, string> = {
  naslovi: '🗞️ Naslovi',
  dekod: '🔍 Dekodiranje',
  stil: '🖋️ Stil',
};

const DATA = [
  {
    mode: 'naslovi',
    q: 'Naslov „Vlada povisila mirovine” izostavlja:',
    opts: ['pomoćni glagol (je)', 'subjekt', 'objekt', 'prijedlog'],
    answer: 'pomoćni glagol (je)',
    en: 'headline drops the auxiliary',
    tip: 'Novinski perfekt bez je: Vlada (je) povisila.',
  },
  {
    mode: 'naslovi',
    q: 'Naslov „Dinamo prvak!” izostavlja:',
    opts: ['glagol biti (je postao)', 'subjekt', 'pridjev', 'veznik'],
    answer: 'glagol biti (je postao)',
    en: 'headline drops the copula',
    tip: 'Imenski naslov: Dinamo (je) prvak.',
  },
  {
    mode: 'naslovi',
    q: '„Potres pogodio Zagreb” u punoj rečenici glasi:',
    opts: [
      'Potres je pogodio Zagreb.',
      'Potres pogodit Zagreb.',
      'Potres bi pogodio Zagreb.',
      'Zagreb pogodio potres je.',
    ],
    answer: 'Potres je pogodio Zagreb.',
    en: 'an earthquake hit Zagreb',
    tip: 'Vrati ispušteno je.',
  },
  {
    mode: 'naslovi',
    q: 'Naslov „U tijeku pregovori o plaćama” počiva na:',
    opts: ['imenskom (bezglagolskom) izrazu', 'aoristu', 'imperativu', 'kondicionalu'],
    answer: 'imenskom (bezglagolskom) izrazu',
    en: 'a verbless nominal headline',
    tip: 'Pregovori su u tijeku → U tijeku pregovori.',
  },
  {
    mode: 'naslovi',
    q: '„Cijene ____ nakon blagdana” (tipičan naslovni prezent)',
    opts: ['padaju', 'su pale bile', 'bijahu pale', 'padoše davno'],
    answer: 'padaju',
    en: 'prices fall after the holidays',
    tip: 'Naslovni prezent za svježe vijesti.',
  },
  {
    mode: 'naslovi',
    q: 'Upitni naslov „Kraj krize?” sugerira:',
    opts: ['neizvjesnost i poziv na čitanje', 'potvrdu činjenice', 'zapovijed', 'ispriku'],
    answer: 'neizvjesnost i poziv na čitanje',
    en: 'a question headline hooks the reader',
    tip: 'Upitnik prodaje neizvjesnost.',
  },
  {
    mode: 'naslovi',
    q: '„Uhićen osumnjičeni za prijevaru” — oblik „uhićen” je:',
    opts: ['trpni pridjev bez pomoćnoga glagola', 'aorist', 'prilog', 'imperativ'],
    answer: 'trpni pridjev bez pomoćnoga glagola',
    en: 'arrested: passive with dropped aux',
    tip: '(Je) uhićen — pasivni naslov bez je.',
  },
  {
    mode: 'naslovi',
    q: 'Zašto naslovi vole pasiv („Zakon izglasan”)?',
    opts: ['vršitelj je nevažan ili poznat', 'pasiv je duži', 'zabranjen je aktiv', 'zbog rime'],
    answer: 'vršitelj je nevažan ili poznat',
    en: 'passives foreground the event',
    tip: 'Bitno je ŠTO se dogodilo, ne tko je digao ruku.',
  },
  {
    mode: 'dekod',
    q: '„Sabor dao zeleno svjetlo proračunu” znači:',
    opts: ['odobrio je proračun', 'ugasio je svjetla', 'vratio je proračun', 'odgodio je sjednicu'],
    answer: 'odobrio je proračun',
    en: 'gave the green light = approved',
    tip: 'Novinska metafora odobravanja.',
  },
  {
    mode: 'dekod',
    q: '„Cijene idu u nebo” znači:',
    opts: ['naglo rastu', 'padaju', 'miruju', 'ukinute su'],
    answer: 'naglo rastu',
    en: 'prices are skyrocketing',
    tip: 'Metafora vertikale: u nebo = strmoglav rast.',
  },
  {
    mode: 'dekod',
    q: '„Pregovori na mrtvoj točki” znači:',
    opts: ['zastali su bez pomaka', 'uspješno su završeni', 'tek počinju', 'tajni su'],
    answer: 'zastali su bez pomaka',
    en: 'talks at a standstill',
    tip: 'Mrtva točka = zastoj.',
  },
  {
    mode: 'dekod',
    q: '„Vlada pod povećalom javnosti” znači:',
    opts: [
      'javnost je pomno promatra',
      'vlada kupuje povećala',
      'javnost je ravnodušna',
      'vlada je raspuštena',
    ],
    answer: 'javnost je pomno promatra',
    en: 'under public scrutiny',
    tip: 'Pod povećalom = pod strogim nadzorom.',
  },
  {
    mode: 'dekod',
    q: '„Rekordna berba oborila sve rekorde” je primjer:',
    opts: ['pleonazma (nepotrebna ponavljanja)', 'metafore', 'arhaizma', 'eufemizma'],
    answer: 'pleonazma (nepotrebna ponavljanja)',
    en: 'a tautology in journalism',
    tip: 'Rekordna + oborila rekorde = dvaput isto.',
  },
  {
    mode: 'dekod',
    q: '„Izvori bliski vladi tvrde…” signalizira:',
    opts: ['neslužbenu, neimenovanu informaciju', 'službenu objavu', 'zakon', 'sudsku presudu'],
    answer: 'neslužbenu, neimenovanu informaciju',
    en: 'sources close to the government',
    tip: 'Novinarska formula za neimenovane izvore.',
  },
  {
    mode: 'dekod',
    q: '„U žiži interesa” znači:',
    opts: ['u središtu pozornosti', 'na rubu', 'u tajnosti', 'izvan teme'],
    answer: 'u središtu pozornosti',
    en: 'in the spotlight',
    tip: 'Žiža = fokus.',
  },
  {
    mode: 'dekod',
    q: '„Ministar odbacio optužbe” — „odbacio” ovdje znači:',
    opts: ['zanijekao je', 'bacio je u koš', 'prihvatio je', 'proslijedio je'],
    answer: 'zanijekao je',
    en: 'dismissed the accusations',
    tip: 'Odbaciti optužbe = zanijekati.',
  },
  {
    mode: 'stil',
    q: 'Novinski stil od standarda traži:',
    opts: ['sažetost i provjerljivost', 'žargon', 'osobne uvrede', 'duge rečenice'],
    answer: 'sažetost i provjerljivost',
    en: 'concision and verifiability',
    tip: 'Kratko, točno, provjerljivo.',
  },
  {
    mode: 'stil',
    q: '„Navodno” u vijesti signalizira:',
    opts: ['nepotvrđenu tvrdnju', 'sigurnu činjenicu', 'ironiju', 'zapovijed'],
    answer: 'nepotvrđenu tvrdnju',
    en: 'allegedly = unconfirmed',
    tip: 'Ograda od neprovjerenoga.',
  },
  {
    mode: 'stil',
    q: 'Lead (glava vijesti) odgovara na:',
    opts: ['tko, što, kada, gdje, zašto', 'samo zašto', 'samo tko', 'ništa od toga'],
    answer: 'tko, što, kada, gdje, zašto',
    en: 'the 5W lead',
    tip: 'Pet novinarskih pitanja u prvom odlomku.',
  },
  {
    mode: 'stil',
    q: '„Kako doznajemo” u vijesti je:',
    opts: ['novinarska formula ekskluzivnosti', 'citat čitatelja', 'zakon', 'pravopisno pravilo'],
    answer: 'novinarska formula ekskluzivnosti',
    en: 'as we have learned (exclusive)',
    tip: 'Signal vlastita izvora redakcije.',
  },
  {
    mode: 'stil',
    q: 'Senzacionalistički naslov prepoznajemo po:',
    opts: ['pretjeranim riječima (šok, drama, hit)', 'brojkama', 'navodnicima izvora', 'datumu'],
    answer: 'pretjeranim riječima (šok, drama, hit)',
    en: 'clickbait markers',
    tip: 'Šok! Drama! Nećete vjerovati!',
  },
  {
    mode: 'stil',
    q: '„Priopćenje za javnost” je:',
    opts: ['službena pisana izjava institucije', 'trač', 'anonimno pismo', 'oglas'],
    answer: 'službena pisana izjava institucije',
    en: 'a press release',
    tip: 'Institucionalni izvor vijesti.',
  },
  {
    mode: 'stil',
    q: 'Kondicional u „Porezi bi mogli rasti” izriče:',
    opts: ['oprez prema neprovjerenom', 'sigurnost', 'prošlost', 'zapovijed'],
    answer: 'oprez prema neprovjerenom',
    en: 'taxes might rise — hedged',
    tip: 'Novinarski kondicional ograde.',
  },
  {
    mode: 'stil',
    q: 'Razlika vijesti i komentara:',
    opts: [
      'vijest iznosi činjenice, komentar stav',
      'vijest je dulja',
      'komentar nema autora',
      'nema razlike',
    ],
    answer: 'vijest iznosi činjenice, komentar stav',
    en: 'news reports, commentary opines',
    tip: 'Odvajanje informacije od mišljenja.',
  },
];

export { DATA as NOVINSKI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NovinskiDrill({ goBack, award }: Props) {
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
          key: 'novinski',
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
        {H('📰 Novinski stil', 'Vlada povisila mirovine — reading between the headlines', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — novine su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro čitanje novinskoga stila! 💪'
                : 'Novinski stil traži još vježbe.'}
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
      {H('📰 Novinski stil', 'Vlada povisila mirovine — reading between the headlines', goBack)}
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
