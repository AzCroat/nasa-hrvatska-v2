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

// C2 normative-traps drill (C2 tranche 5, 2026-08-15): normative rekcija
// (koristiti se cim, kontaktirati s kim, upravljati cime, zahvaliti vs
// zahvaliti se), lexical traps (posljednji/zadnji, cijena iznosi,
// sljedeci/slijedeci, dolazis li) and fixed forms (s obzirom na to da,
// unatoc tomu, najjaci, sa mnom).
const MODE_LABEL: Record<string, string> = {
  rekcija: '🎯 Rekcija',
  leksik: '📖 Leksik',
  oblici: '📐 Oblici',
};

const DATA = [
  {
    mode: 'rekcija',
    q: 'Birani standard: „____ ovu priliku.” (koristiti)',
    opts: ['Iskoristite', 'Koristite se', 'Koristite s', 'Iskoristite se'],
    answer: 'Iskoristite',
    en: 'seize this opportunity',
    tip: 'Birano: iskoristiti što / koristiti se čim.',
  },
  {
    mode: 'rekcija',
    q: 'Birani standard: „Koristim se ____ .” (rječnik)',
    opts: ['rječnikom', 'rječnik', 'rječnika', 'na rječnik'],
    answer: 'rječnikom',
    en: 'I use a dictionary',
    tip: 'Koristiti se + INSTRUMENTAL (birani standard).',
  },
  {
    mode: 'rekcija',
    q: 'Birani standard: „Kontaktirajte ____ .” (mi)',
    opts: ['s nama', 'nas izravno bez s', 'nam', 'o nama'],
    answer: 's nama',
    en: 'contact us',
    tip: 'Birano: kontaktirati S KIM (biti u kontaktu s).',
  },
  {
    mode: 'rekcija',
    q: '„Upravljati” traži:',
    opts: ['instrumental (tvrtkom)', 'akuzativ (tvrtku)', 'genitiv (tvrtke)', 'dativ (tvrtki)'],
    answer: 'instrumental (tvrtkom)',
    en: 'to manage takes the instrumental',
    tip: 'Upravljati čime: tvrtkom, vozilom, državom.',
  },
  {
    mode: 'rekcija',
    q: '„Rukovoditi” traži:',
    opts: [
      'instrumental (projektom)',
      'akuzativ (projekt)',
      'genitiv (projekta)',
      'lokativ (projektu)',
    ],
    answer: 'instrumental (projektom)',
    en: 'to lead takes the instrumental',
    tip: 'Rukovoditi čime — nikad „rukovoditi projekt”.',
  },
  {
    mode: 'rekcija',
    q: 'Birani standard: „Oženio ____ .” (Ana)',
    opts: ['se Anom', 'je Anu', 'se s Anom', 'je s Anom'],
    answer: 'se Anom',
    en: 'he married Ana',
    tip: 'Oženiti se KIME (instrumental, bez s).',
  },
  {
    mode: 'rekcija',
    q: '„Zahvaliti” komu na čemu — pravilno je:',
    opts: [
      'Zahvaljujem Vam na pomoći.',
      'Zahvaljujem se Vama za pomoć.',
      'Zahvaljujem za pomoć Vas.',
      'Se zahvaljujem na pomoć.',
    ],
    answer: 'Zahvaljujem Vam na pomoći.',
    en: 'thank you for your help',
    tip: 'Zahvaliti (bez se!) + D + na + L; „zahvaliti se” = odbiti.',
  },
  {
    mode: 'rekcija',
    q: '„Smetati” traži:',
    opts: [
      'dativ (smeta mi)',
      'akuzativ (smeta me birano)',
      'genitiv (smeta mene)',
      'instrumental (smeta mnome)',
    ],
    answer: 'dativ (smeta mi)',
    en: 'to bother takes the dative',
    tip: 'Birano: smeta MI, smeta susjedima.',
  },
  {
    mode: 'leksik',
    q: 'Razlika: „zadnji” prema „posljednji” —',
    opts: [
      'posljednji je birani izbor za „krajnji u nizu”',
      'zadnji je jedini pravilan',
      'posljednji znači „straga”',
      'razlike nema nikad',
    ],
    answer: 'posljednji je birani izbor za „krajnji u nizu”',
    en: 'posljednji vs zadnji',
    tip: 'Birano: posljednji vlak; zadnji = koji je straga.',
  },
  {
    mode: 'leksik',
    q: '„Cijena ____ 100 eura.” (birano)',
    opts: ['iznosi', 'košta', 'je koštala od', 'stoji na'],
    answer: 'iznosi',
    en: 'the price amounts to 100 euros',
    tip: 'Roba košta, ali CIJENA IZNOSI (cijena ne košta!).',
  },
  {
    mode: 'leksik',
    q: 'Birani izbor: „____ tjedan” (koji dolazi)',
    opts: ['sljedeći', 'slijedeći', 'idući jedino', 'naredni'],
    answer: 'sljedeći',
    en: 'next week',
    tip: 'Sljedeći (pridjev); slijedeći je glagolski prilog.',
  },
  {
    mode: 'leksik',
    q: '„Da li dolaziš?” u biranom standardu glasi:',
    opts: ['Dolaziš li?', 'Da li dolaziš stvarno?', 'Jel dolaziš?', 'Dal dolaziš?'],
    answer: 'Dolaziš li?',
    en: 'are you coming? (formal inversion)',
    tip: 'Birano pitanje: glagol + li (ne „da li”).',
  },
  {
    mode: 'leksik',
    q: 'Birani standard: „u vezi ____ ” (taj problem)',
    opts: ['s tim problemom', 'tog problema', 'tim problemom', 'na taj problem'],
    answer: 's tim problemom',
    en: 'in connection with that problem',
    tip: 'U vezi S ČIM (ne „u vezi čega”).',
  },
  {
    mode: 'leksik',
    q: '„Po tom pitanju” u biranom stilu glasi:',
    opts: ['o tome / u vezi s tim', 'po tome pitanju', 'na to pitanje', 'za to pitanje'],
    answer: 'o tome / u vezi s tim',
    en: 'regarding that (avoiding po pitanju)',
    tip: '„Po pitanju” je birokratizam — bolje: o tome.',
  },
  {
    mode: 'leksik',
    q: 'Mjerna riječ uz nebrojivo: „____ informacija” (velika količina)',
    opts: ['mnogo', 'puno kao jedino', 'hrpa', 'masa'],
    answer: 'mnogo',
    en: 'a lot of information',
    tip: 'Birano: mnogo (puno = razgovorno; hrpa/masa = žargon).',
  },
  {
    mode: 'leksik',
    q: '„Ispravan” prema „pravilan”:',
    opts: [
      'pravilan = u skladu s pravilom',
      'ispravan = lijep',
      'istoznačni su uvijek',
      'pravilan = popravljen',
    ],
    answer: 'pravilan = u skladu s pravilom',
    en: 'pravilan follows a rule; ispravan works',
    tip: 'Pravilan oblik (gramatika); ispravan uređaj (radi).',
  },
  {
    mode: 'oblici',
    q: 'Pravilna je sveza:',
    opts: ['s obzirom na to da', 'obzirom da', 's obzirom da', 'obzirom na to'],
    answer: 's obzirom na to da',
    en: 'considering that — the full form',
    tip: 'Jedina potpuna sveza: s obzirom na to da.',
  },
  {
    mode: 'oblici',
    q: 'Pravilan je oblik s dativom:',
    opts: ['unatoč tomu', 'unatoč toga', 'uprkos toga', 'unatoč tome što nikad'],
    answer: 'unatoč tomu',
    en: 'despite that — dative!',
    tip: 'Unatoč/usprkos + DATIV: unatoč tomu, usprkos kiši.',
  },
  {
    mode: 'oblici',
    q: 'Birani standard: „____ mišljenju…” (po/prema)',
    opts: ['prema mojem', 'po mom', 'po mojemu', 'na moje'],
    answer: 'prema mojem',
    en: 'in my opinion — prema + D',
    tip: 'Birano: prema mojem mišljenju (po = razgovorno).',
  },
  {
    mode: 'oblici',
    q: 'Pravilno je napisan superlativ:',
    opts: ['najjači', 'naj jači', 'najači', 'nāj-jači'],
    answer: 'najjači',
    en: 'the strongest — double j',
    tip: 'Naj- + jak: najjači (dva j se pišu oba).',
  },
  {
    mode: 'oblici',
    q: 'Pravilan oblik glagola u „on ____ ” (moći, prezent):',
    opts: ['može', 'more', 'možde', 'možeti'],
    answer: 'može',
    en: 'he can',
    tip: 'Moći: mogu, možeš, može (more = dijalektno).',
  },
  {
    mode: 'oblici',
    q: '„S” ili „sa” — pravilno je:',
    opts: ['sa školom', 'sa mnom i sa tobom', 'sa radom', 'sa autom'],
    answer: 'sa školom',
    en: 'sa before s/š/z/ž (and mnom)',
    tip: 'Sa samo ispred s, š, z, ž (i „sa mnom”): sa školom, s autom.',
  },
  {
    mode: 'oblici',
    q: 'Pravilan je izraz:',
    opts: [
      'u skladu s propisima',
      'u skladu propisa',
      'uskladno propisima',
      'na skladu s propisima',
    ],
    answer: 'u skladu s propisima',
    en: 'in accordance with regulations',
    tip: 'U skladu S ČIM — instrumental s prijedlogom s.',
  },
  {
    mode: 'oblici',
    q: 'Vokativ imena „Marko” glasi:',
    opts: ['Marko', 'Marku', 'Marče', 'Markone'],
    answer: 'Marko',
    en: 'Marko! (vocative = nominative)',
    tip: 'Imena na -o imaju V = N: Marko! Ivo!',
  },
];

export { DATA as LEKTOR_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LektorDrill({ goBack, award }: Props) {
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
          key: 'lektor',
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
          '🧐 Lektorske zamke',
          'koristiti se čime, s obzirom na to da — the traps editors circle in red',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — lektor bi vas pohvalio! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro izbjegavate lektorske zamke! 💪'
                : 'Lektorske zamke traže još vježbe.'}
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
        '🧐 Lektorske zamke',
        'koristiti se čime, s obzirom na to da — the traps editors circle in red',
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
