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

// C2 phraseology drill (C2 tranche, 2026-08-15): idioms as natives deploy
// them — meaning in context, completing the fixed form, and register fit.
// Includes the sanctioned "bok uz bok" exception (2026-07 owner decision).
const MODE_LABEL: Record<string, string> = {
  znacenje: '💡 Značenje',
  dopuna: '✍️ Dopuni frazem',
  registar: '🎭 U kontekstu',
};

const DATA = [
  {
    mode: 'znacenje',
    q: '„Obećavao je brda i doline.” — to znači da je obećavao:',
    opts: ['previše i nerealno', 'izlete u prirodu', 'kupnju zemljišta', 'malo, ali sigurno'],
    answer: 'previše i nerealno',
    en: 'he promised the moon (lit. hills and valleys)',
    tip: 'Obećavati brda i doline = davati velika, neostvariva obećanja.',
  },
  {
    mode: 'znacenje',
    q: '„Taj političar samo prodaje maglu.” — on:',
    opts: [
      'vara praznim pričama',
      'trguje na tržnici',
      'skriva istinu o vremenu',
      'govori tiho i nejasno',
    ],
    answer: 'vara praznim pričama',
    en: 'he is selling smoke — empty promises',
    tip: 'Prodavati maglu = obmanjivati bez pokrića.',
  },
  {
    mode: 'znacenje',
    q: '„Napokon smo došli na zelenu granu.” — napokon smo:',
    opts: [
      'financijski stali na noge',
      'otišli u prirodu',
      'postigli dogovor o okolišu',
      'dobili novi posao',
    ],
    answer: 'financijski stali na noge',
    en: 'we finally got back on our feet financially',
    tip: 'Doći na zelenu granu = izaći iz neimaštine, prosperirati.',
  },
  {
    mode: 'znacenje',
    q: '„Cijeli sastanak mlatili smo praznu slamu.” — raspravljali smo:',
    opts: ['bez ikakve koristi', 'o poljoprivredi', 'vrlo žustro', 'o nevažnim ljudima'],
    answer: 'bez ikakve koristi',
    en: 'we were threshing empty straw — talking to no purpose',
    tip: 'Mlatiti praznu slamu = govoriti mnogo, a reći ništa.',
  },
  {
    mode: 'znacenje',
    q: '„Radili su bok uz bok cijelu noć.” — radili su:',
    opts: ['jedan uz drugoga, zajedno', 'jedan protiv drugoga', 'u smjenama', 'bez odmora'],
    answer: 'jedan uz drugoga, zajedno',
    en: 'they worked side by side all night',
    tip: 'Bok uz bok = rame uz rame, u neposrednoj suradnji.',
  },
  {
    mode: 'znacenje',
    q: '„Kvantna fizika za mene je špansko selo.” — to mi je:',
    opts: ['posve nepoznato područje', 'omiljena tema', 'daleko putovanje', 'seoska idila'],
    answer: 'posve nepoznato područje',
    en: 'it is all Greek to me (lit. a Spanish village)',
    tip: 'Špansko selo = nešto o čemu ne znamo ništa.',
  },
  {
    mode: 'znacenje',
    q: '„Projekt nam je visio o koncu.” — projekt je bio:',
    opts: ['pred samom propašću', 'gotovo dovršen', 'obješen na oglasnoj ploči', 'vrlo skup'],
    answer: 'pred samom propašću',
    en: 'the project hung by a thread',
    tip: 'Visjeti o koncu = biti u krajnjoj opasnosti.',
  },
  {
    mode: 'znacenje',
    q: '„On ima putra na glavi.” — on:',
    opts: ['i sam nosi dio krivnje', 'voli dobro jesti', 'lako se uvrijedi', 'bogat je'],
    answer: 'i sam nosi dio krivnje',
    en: 'he has butter on his head — he is not innocent himself',
    tip: 'Imati putra na glavi = ne biti bez grijeha, pa bolje šutjeti.',
  },
  {
    mode: 'dopuna',
    q: 'Tko pod drugim jamu kopa, sam u nju ____.',
    opts: ['pada', 'skače', 'gleda', 'sjedne'],
    answer: 'pada',
    en: 'who digs a pit for another falls into it himself',
    tip: 'Poslovica o zlobi koja se vraća počinitelju.',
  },
  {
    mode: 'dopuna',
    q: 'Bez muke nema ____.',
    opts: ['nauke', 'kruha', 'sreće', 'plaće'],
    answer: 'nauke',
    en: 'no pain, no gain (no learning without effort)',
    tip: 'Rimovana poslovica: muke — nauke.',
  },
  {
    mode: 'dopuna',
    q: 'Vuk dlaku mijenja, ali ____ nikada.',
    opts: ['ćud', 'zube', 'ime', 'šumu'],
    answer: 'ćud',
    en: 'a wolf changes his coat but never his nature',
    tip: 'Ćud = narav; ljudi se u biti ne mijenjaju.',
  },
  {
    mode: 'dopuna',
    q: 'Ispeci pa ____.',
    opts: ['reci', 'jedi', 'šuti', 'kreni'],
    answer: 'reci',
    en: 'bake it, then say it — think before you speak',
    tip: 'Poziv na promišljanje prije izjave.',
  },
  {
    mode: 'dopuna',
    q: 'Krv nije ____.',
    opts: ['voda', 'vino', 'more', 'sok'],
    answer: 'voda',
    en: 'blood is thicker than water',
    tip: 'Obiteljske veze jače su od ostalih.',
  },
  {
    mode: 'dopuna',
    q: 'Željezo se kuje dok je ____.',
    opts: ['vruće', 'novo', 'meko', 'sjajno'],
    answer: 'vruće',
    en: 'strike while the iron is hot',
    tip: 'Priliku valja iskoristiti odmah.',
  },
  {
    mode: 'dopuna',
    q: 'Tiha voda ____ dere.',
    opts: ['brege', 'kamen', 'korito', 'obale'],
    answer: 'brege',
    en: 'still waters run deep (quiet water wears down hills)',
    tip: 'Frazem čuva stariji lik „brege” (brjegove).',
  },
  {
    mode: 'dopuna',
    q: 'Što možeš danas, ne ostavljaj za ____.',
    opts: ['sutra', 'poslije', 'druge', 'starost'],
    answer: 'sutra',
    en: 'do not put off until tomorrow what you can do today',
    tip: 'Ustaljeni oblik završava na „sutra”.',
  },
  {
    mode: 'registar',
    q: 'U svečanom govoru: „Zahvaljujem svima koji su nam ____ ruku u teškim trenucima.”',
    opts: ['pružili', 'dali', 'digli', 'stisnuli'],
    answer: 'pružili',
    en: 'thanks to all who extended a hand in hard times',
    tip: 'Pružiti (komu) ruku = ponuditi pomoć; svečano-neutralan izraz.',
  },
  {
    mode: 'registar',
    q: '„Nakon deset godina uzaludnih pokušaja, ____ je koplje u trnje.”',
    opts: ['bacio', 'stavio', 'zabio', 'spustio'],
    answer: 'bacio',
    en: 'after ten futile years he threw in the towel',
    tip: 'Baciti koplje u trnje = odustati od borbe.',
  },
  {
    mode: 'registar',
    q: 'Njegov uspjeh mnogima je bio ____ u oku.',
    opts: ['trn', 'prst', 'kamen', 'dim'],
    answer: 'trn',
    en: 'his success was a thorn in many an eye',
    tip: 'Biti komu trn u oku = smetati, izazivati zavist.',
  },
  {
    mode: 'registar',
    q: 'Ostavka ministra bila je kap koja je ____ čašu.',
    opts: ['prelila', 'napunila', 'razbila', 'iskapila'],
    answer: 'prelila',
    en: 'the minister’s resignation was the last straw',
    tip: 'Kap koja je prelila čašu = posljednji povod nakon mnogih.',
  },
  {
    mode: 'registar',
    q: 'Kad su svi oklijevali, ona je uzela stvar u svoje ____.',
    opts: ['ruke', 'noge', 'srce', 'okvire'],
    answer: 'ruke',
    en: 'she took matters into her own hands',
    tip: 'Uzeti stvar u svoje ruke = preuzeti inicijativu.',
  },
  {
    mode: 'registar',
    q: 'Obećao je i, kao uvijek, ____ riječ.',
    opts: ['održao', 'izdao', 'primio', 'čuvao'],
    answer: 'održao',
    en: 'he promised and, as always, kept his word',
    tip: 'Održati riječ = ispuniti obećanje (prekršiti = pogaziti riječ).',
  },
  {
    mode: 'registar',
    q: '„Nemam s njima ništa — ni rod ni ____.”',
    opts: ['pomozi bog', 'prijatelj', 'susjed', 'dug'],
    answer: 'pomozi bog',
    en: 'no kin, no connection whatsoever',
    tip: 'Ni rod ni pomozi bog = bez ikakve veze s kim.',
  },
  {
    mode: 'registar',
    q: 'Cijelo je popodne trla baba lan da joj prođe ____.',
    opts: ['dan', 'vijek', 'sat', 'trud'],
    answer: 'dan',
    en: 'busywork to pass the time',
    tip: 'Trla baba lan… = besposleno zanimanje bez svrhe.',
  },
];

export { DATA as FRAZEOLOGIJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FrazeologijaDrill({ goBack, award }: Props) {
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
          key: 'frazeologija',
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
        {H('🪢 Frazeologija', 'doći na zelenu granu — idioms the C2 way', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — frazemi su vam u malom prstu! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro poznavanje frazema! 💪'
                : 'Frazemi traže još vježbe.'}
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
      {H('🪢 Frazeologija', 'doći na zelenu granu — idioms the C2 way', goBack)}
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
