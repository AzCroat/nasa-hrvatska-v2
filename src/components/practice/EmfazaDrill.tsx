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

// C1 word-order & emphasis drill (C1 tranche, 2026-08-14): information
// structure — the neutral SVO-with-second-position-clitics baseline, fronting
// for topic/contrast, focus-to-the-end in answers, emphatic constructions,
// and clitic-cluster ordering in complex sentences.
const MODE_LABEL: Record<string, string> = {
  tema: '📌 Tema i red',
  fokus: '💥 Isticanje',
  stil: '🧩 Zanaglasnice',
};

const DATA = [
  {
    mode: 'tema',
    q: 'Neutralni (neobilježeni) red riječi:',
    opts: [
      'Marko je jučer kupio auto.',
      'Jučer je Marko kupio auto.',
      'Auto je Marko kupio jučer.',
      'Kupio je Marko jučer auto.',
    ],
    answer: 'Marko je jučer kupio auto.',
    en: 'the neutral word order',
    tip: 'Neutralno: subjekt na početku, zanaglasnica (je) na drugom mjestu.',
  },
  {
    mode: 'tema',
    q: 'Želimo istaknuti VRIJEME: „____ je Marko kupio auto.”',
    opts: ['Jučer', 'Auto', 'Marko', 'Kupio'],
    answer: 'Jučer',
    en: 'fronting the time expression for emphasis',
    tip: 'Ono što ističemo dolazi na početak rečenice.',
  },
  {
    mode: 'tema',
    q: '„Knjigu sam ti već vratila.” — na početku je istaknut:',
    opts: ['objekt', 'subjekt', 'prilog', 'glagol'],
    answer: 'objekt',
    en: 'what is fronted in this sentence',
    tip: 'Objekt (knjigu) na prvome mjestu — tematizacija.',
  },
  {
    mode: 'tema',
    q: 'Odgovor na „Tko je razbio prozor?” najprirodnije glasi:',
    opts: [
      'Prozor je razbio Ivan.',
      'Ivan je razbio prozor.',
      'Razbio je Ivan prozor.',
      'Prozor je Ivan razbio.',
    ],
    answer: 'Prozor je razbio Ivan.',
    en: 'the natural answer puts the NEW information last',
    tip: 'Fokus (nova obavijest — IVAN) dolazi na kraj rečenice.',
  },
  {
    mode: 'tema',
    q: 'Odgovor na „Što je Ivan razbio?” najprirodnije glasi:',
    opts: [
      'Ivan je razbio prozor.',
      'Prozor je razbio Ivan.',
      'Razbio je prozor Ivan.',
      'Prozor je Ivan razbio.',
    ],
    answer: 'Ivan je razbio prozor.',
    en: 'again — new information (the window) goes last',
    tip: 'Poznato (Ivan) naprijed, novo (prozor) na kraj.',
  },
  {
    mode: 'tema',
    q: '„Vina više nemamo, piva ima.” — na početcima surečenica istaknuti su:',
    opts: ['objekti u genitivu', 'subjekti', 'prilozi', 'glagoli'],
    answer: 'objekti u genitivu',
    en: 'contrastive fronting of partitive genitives',
    tip: 'Partitivni genitivi (vina, piva) sprijeda — kontrastna tema.',
  },
  {
    mode: 'tema',
    q: 'Kontrast radnji: „____ ću ja, a ti operi suđe.”',
    opts: ['Kuhati', 'Ja', 'Suđe', 'Operi'],
    answer: 'Kuhati',
    en: 'fronting the verb for contrast',
    tip: 'Infinitiv na početku suprotstavlja radnje: kuhati ↔ oprati.',
  },
  {
    mode: 'tema',
    q: 'Najneutralnije zvuči:',
    opts: [
      'Sutra idemo na more.',
      'Na more sutra idemo.',
      'Idemo sutra na more.',
      'Na more idemo sutra.',
    ],
    answer: 'Sutra idemo na more.',
    en: 'the most neutral variant',
    tip: 'Vremenski prilog prirodno otvara neutralnu rečenicu; odredište na kraju.',
  },
  {
    mode: 'fokus',
    q: 'Emfatično: „____ je taj koji je sve organizirao.”',
    opts: ['On', 'Njega', 'Njemu', 'Njim'],
    answer: 'On',
    en: 'HE is the one who organized everything',
    tip: 'Rascijepljena konstrukcija: On je taj koji… (nominativ).',
  },
  {
    mode: 'fokus',
    q: '„Upravo ____ tražim!” (tebe)',
    opts: ['tebe', 'te', 'ti', 'tobom'],
    answer: 'tebe',
    en: 'it is precisely YOU I am looking for',
    tip: 'Uz „upravo” dolazi puni (naglašeni) oblik zamjenice, ne zanaglasnica.',
  },
  {
    mode: 'fokus',
    q: '„Ni ____ to ne bih rekao.” (njemu)',
    opts: ['njemu', 'mu', 'njega', 'on'],
    answer: 'njemu',
    en: 'I would not tell even HIM that',
    tip: 'Iza „ni” obvezno puni oblik: ni njemu (zanaglasnica ne može).',
  },
  {
    mode: 'fokus',
    q: '„____ sam ja kriv?!” — čestica za nevjericu:',
    opts: ['Zar', 'Li', 'Da', 'Je'],
    answer: 'Zar',
    en: 'am I really the one to blame?!',
    tip: '„Zar” uvodi pitanje s čuđenjem ili nevjericom.',
  },
  {
    mode: 'fokus',
    q: '„To je ____ što me najviše ljuti.”',
    opts: ['ono', 'to', 'ovo', 'nešto'],
    answer: 'ono',
    en: 'that is THE thing that annoys me most',
    tip: 'Rascijepljena rečenica: To je ono što…',
  },
  {
    mode: 'fokus',
    q: 'Tematizator: „A ____ se tiče cijene, o njoj ćemo poslije.”',
    opts: ['što', 'koliko', 'kako', 'čega'],
    answer: 'što',
    en: 'as far as the price is concerned…',
    tip: 'Što se tiče + genitiv — izdvaja temu na početak.',
  },
  {
    mode: 'fokus',
    q: '„Istinu govoreći, ____ mi se ne ide.”',
    opts: ['nikamo', 'nigdje', 'nikuda', 'nikad'],
    answer: 'nikamo',
    en: 'to be honest, I do not feel like going anywhere',
    tip: 'NIKAMO = ni prema kojem odredištu (smjer); nigdje = mjesto.',
  },
  {
    mode: 'fokus',
    q: 'Ironično čuđenje: „Ma ____!”',
    opts: ['nemoj', 'neću', 'šuti', 'daj'],
    answer: 'nemoj',
    en: 'you do not say!',
    tip: '„Ma nemoj” — ustaljena ironična reakcija na očito.',
  },
  {
    mode: 'stil',
    q: '„Dao ____ za rođendan.” (njemu, njega)',
    opts: ['mu ga je', 'mu je ga', 'ga mu je', 'je mu ga'],
    answer: 'mu ga je',
    en: 'he gave it to him for his birthday',
    tip: 'Redoslijed zanaglasnica: dativ > akuzativ > je: mu ga je.',
  },
  {
    mode: 'stil',
    q: 'Pitanje s „li”: „____ li se sjećaš onog ljeta?”',
    opts: ['Sjećaš', 'Da', 'Jesi', 'Što'],
    answer: 'Sjećaš',
    en: 'do you remember that summer?',
    tip: 'Naglašeni glagol + li: Sjećaš li se…',
  },
  {
    mode: 'stil',
    q: 'Iza veznika „da”: „…da ____ vidjeli.”',
    opts: ['smo ga', 'ga smo', 'smo njega', 'njega smo'],
    answer: 'smo ga',
    en: '…that we saw him',
    tip: 'U klasteru pomoćni glagol (smo) prije zamjenice (ga).',
  },
  {
    mode: 'stil',
    q: '„Htio ____ predstaviti.” (vama, sebe)',
    opts: ['bih vam se', 'bih se vam', 'vam bih se', 'se bih vam'],
    answer: 'bih vam se',
    en: 'I would like to introduce myself to you',
    tip: 'bih (pomoćni) > vam (dativ) > se: htio bih vam se predstaviti.',
  },
  {
    mode: 'stil',
    q: 'Prirodnije u poruci:',
    opts: [
      'Javit ću vam se sutra.',
      'Ja ću se vama javiti sutra.',
      'Sutra ja ću vam se javiti.',
      'Javit ću se vama sutra.',
    ],
    answer: 'Javit ću vam se sutra.',
    en: 'I will get back to you tomorrow',
    tip: 'Zanaglasnice u klasteru (ću vam se); puni oblici samo za isticanje.',
  },
  {
    mode: 'stil',
    q: '„Kad ____ vratio, nazovi me.”',
    opts: ['se budeš', 'budeš se', 'se bude', 'budeš'],
    answer: 'se budeš',
    en: 'when you get back, call me',
    tip: 'Zanaglasnica se odmah iza veznika; budeš je naglašeni oblik.',
  },
  {
    mode: 'stil',
    q: '„Čini ____ da smo se već sreli.”',
    opts: ['mi se', 'se mi', 'me se', 'mi'],
    answer: 'mi se',
    en: 'it seems to me we have already met',
    tip: 'Dativ prije se: čini mi se.',
  },
  {
    mode: 'stil',
    q: 'Neutralan red s dvije zanaglasnice: „Ana ____ pokazala fotografije.”',
    opts: ['nam je', 'je nam', 'nama je', 'je nama'],
    answer: 'nam je',
    en: 'Ana showed us the photographs',
    tip: 'Dativna zanaglasnica (nam) prije je: Ana nam je pokazala…',
  },
];

export { DATA as EMFAZA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EmfazaDrill({ goBack, award }: Props) {
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
          key: 'emfaza',
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
        {H('🎯 Red riječi', 'novo na kraj, poznato na početak — information structure', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — red riječi vam je prirodan! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje isticanjem! 💪'
                : 'Red riječi i zanaglasnice traže još vježbe.'}
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
      {H('🎯 Red riječi', 'novo na kraj, poznato na početak — information structure', goBack)}
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
