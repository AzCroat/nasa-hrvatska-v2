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

// C2 sound-alternations drill (C2 tranche 2, 2026-08-15): the
// morphophonology behind every paradigm — sibilarization/palatalization,
// fleeting a, ije/je/e alternations, voicing assimilation and jotation.
const MODE_LABEL: Record<string, string> = {
  sibpal: '🎼 Sibilarizacija i palatalizacija',
  nepija: '🫥 Nepostojano a i ije/je',
  jednac: '🤝 Jednačenja i jotacija',
};

const DATA = [
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „ruka”:',
    opts: ['ruci', 'ruki', 'rukici', 'ruku'],
    answer: 'ruci',
    en: 'the dative/locative singular of hand',
    tip: 'Sibilarizacija k→c: ruka → ruci.',
  },
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „noga”:',
    opts: ['nozi', 'nogi', 'nožici', 'nogu'],
    answer: 'nozi',
    en: 'the dative/locative singular of leg',
    tip: 'Sibilarizacija g→z: noga → nozi.',
  },
  {
    mode: 'sibpal',
    q: 'Vokativ jednine od „Bog”:',
    opts: ['Bože', 'Bogu', 'Bogo', 'Božiću'],
    answer: 'Bože',
    en: 'the vocative of God',
    tip: 'Palatalizacija g→ž pred -e: Bog → Bože.',
  },
  {
    mode: 'sibpal',
    q: 'Vokativ jednine od „junak”:',
    opts: ['junače', 'junaku', 'junako', 'junakiću'],
    answer: 'junače',
    en: 'the vocative of hero',
    tip: 'Palatalizacija k→č: junak → junače.',
  },
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „svrha”:',
    opts: ['svrsi', 'svrhi', 'svrši', 'svrhu'],
    answer: 'svrsi',
    en: 'the dative/locative of purpose',
    tip: 'Sibilarizacija h→s: svrha → svrsi.',
  },
  {
    mode: 'sibpal',
    q: 'Nominativ množine od „oblak”:',
    opts: ['oblaci', 'oblaki', 'oblakovi', 'oblače'],
    answer: 'oblaci',
    en: 'the plural of cloud',
    tip: 'Sibilarizacija u N mn.: oblak → oblaci.',
  },
  {
    mode: 'sibpal',
    q: 'Prezent 1. l. jd. od „peći”:',
    opts: ['pečem', 'pekem', 'pećem', 'pecem'],
    answer: 'pečem',
    en: 'I bake (present tense of to bake)',
    tip: 'Palatalizacija k→č pred -em: peći (pek-) → pečem.',
  },
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „knjiga”:',
    opts: ['knjizi', 'knjigi', 'knjiži', 'knjigu'],
    answer: 'knjizi',
    en: 'the dative/locative of book',
    tip: 'Sibilarizacija g→z: knjiga → knjizi.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „pas”:',
    opts: ['psa', 'pasa', 'pesa', 'pas'],
    answer: 'psa',
    en: 'the genitive of dog',
    tip: 'Nepostojano a: pas → psa.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „vrabac”:',
    opts: ['vrapca', 'vrabca', 'vrabaca', 'vrapcu'],
    answer: 'vrapca',
    en: 'the genitive of sparrow',
    tip: 'Nepostojano a + jednačenje b→p: vrabac → vrapca.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „dijete”:',
    opts: ['djeteta', 'dijeteta', 'diteta', 'djetete'],
    answer: 'djeteta',
    en: 'the genitive of child',
    tip: 'Ije→je u kosim padežima: dijete → djeteta.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „vrijeme”:',
    opts: ['vremena', 'vrijemena', 'vremenu', 'vrjemena'],
    answer: 'vremena',
    en: 'the genitive of time/weather',
    tip: 'Ije→e: vrijeme → vremena.',
  },
  {
    mode: 'nepija',
    q: 'Umanjenica od „cvijet”:',
    opts: ['cvjetić', 'cvijetić', 'cvitić', 'cvjetak mali'],
    answer: 'cvjetić',
    en: 'a little flower',
    tip: 'Ije→je pred sufiksom: cvijet → cvjetić.',
  },
  {
    mode: 'nepija',
    q: 'Komparativ od „lijep”:',
    opts: ['ljepši', 'lijepši', 'ljepšiji', 'lipši'],
    answer: 'ljepši',
    en: 'more beautiful',
    tip: 'Ije→je u komparativu: lijep → ljepši.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv množine od „sestra”:',
    opts: ['sestara', 'sestri', 'sestrā bez a', 'sester'],
    answer: 'sestara',
    en: 'the genitive plural of sister',
    tip: 'Umetnuto (nepostojano) a: sestra → sestara.',
  },
  {
    mode: 'nepija',
    q: 'Ona je donijela, a on je ____.',
    opts: ['donio', 'donjeo', 'donesao', 'donijeo'],
    answer: 'donio',
    en: 'she brought it, and he brought it too',
    tip: 'Pridjev radni m. roda: donijeti → donio (ije→i).',
  },
  {
    mode: 'jednac',
    q: 'Mačka je izašla ____ stola.',
    opts: ['ispod', 'izpod', 'iz pod', 'izspod'],
    answer: 'ispod',
    en: 'the cat came out from under the table',
    tip: 'Jednačenje po zvučnosti z→s: iz+pod → ispod.',
  },
  {
    mode: 'jednac',
    q: 'Pridjev od „bez kraja”:',
    opts: ['beskrajan', 'bezkrajan', 'beskonačan bez', 'bezkonačan'],
    answer: 'beskrajan',
    en: 'endless',
    tip: 'Jednačenje z→s pred bezvučnim k: bez+krajan → beskrajan.',
  },
  {
    mode: 'jednac',
    q: 'raz + staviti =',
    opts: ['rastaviti', 'razstaviti', 'rasstaviti', 'razastaviti'],
    answer: 'rastaviti',
    en: 'to take apart',
    tip: 'Jednačenje z→s pa ispadanje ss→s: raz+staviti → rastaviti.',
  },
  {
    mode: 'jednac',
    q: 'od + pisati =',
    opts: ['otpisati', 'odpisati', 'otpisivati od', 'odpisat'],
    answer: 'otpisati',
    en: 'to write off',
    tip: 'Jednačenje d→t pred bezvučnim p: od+pisati → otpisati.',
  },
  {
    mode: 'jednac',
    q: 'Ženski rod od „težak”:',
    opts: ['teška', 'težka', 'teškana', 'težska'],
    answer: 'teška',
    en: 'heavy (feminine)',
    tip: 'Nepostojano a ispada, ž se jednači u š: težak → teška.',
  },
  {
    mode: 'jednac',
    q: 'Komparativ od „sladak”:',
    opts: ['slađi', 'sladiji', 'slatkiji', 'sladji'],
    answer: 'slađi',
    en: 'sweeter',
    tip: 'Jotacija d+j→đ: sladak → slađi.',
  },
  {
    mode: 'jednac',
    q: 'Komparativ od „drag”:',
    opts: ['draži', 'dragiji', 'dražiji', 'dragši'],
    answer: 'draži',
    en: 'dearer',
    tip: 'Jotacija g+j→ž: drag → draži.',
  },
  {
    mode: 'jednac',
    q: 'Vokativ jednine od „otac”:',
    opts: ['oče', 'otače', 'ocu', 'otac'],
    answer: 'oče',
    en: 'father! (vocative)',
    tip: 'Nepostojano a + palatalizacija c→č: otac → oče.',
  },
];

export { DATA as GLASOVNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GlasovnePromjeneDrill({ goBack, award }: Props) {
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
          key: 'glasovnepromjene',
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
          '🌊 Glasovne promjene',
          'ruka → ruci, otac → oče — the sound alternation system',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — glasovi vas slušaju! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje promjenama! 💪'
                : 'Glasovne promjene traže još vježbe.'}
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
      {H('🌊 Glasovne promjene', 'ruka → ruci, otac → oče — the sound alternation system', goBack)}
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
