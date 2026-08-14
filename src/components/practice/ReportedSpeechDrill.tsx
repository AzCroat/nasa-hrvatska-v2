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

// B2 reported-speech drill (neizravni govor) — the reported-speech grammar
// unit had no pool drill. The core insight drilled here: Croatian does NOT
// backshift tenses (unlike English) — persons and time/place markers shift,
// tenses stay. Three modes: statements, questions (li), commands (da+prezent).
const MODE_LABEL: Record<string, string> = {
  izjave: '💬 Izjave',
  pitanja: '❓ Pitanja',
  zapovijedi: '📣 Zapovijedi',
};

const DATA = [
  {
    mode: 'izjave',
    q: '„Doći ću sutra.” → Marko je rekao da ____ doći sutradan.',
    opts: ['će', 'bi', 'bude', 'je htio'],
    answer: 'će',
    en: 'Marko said he would come the next day.',
    tip: 'Hrvatski NE pomiče vremena kao engleski: futur ostaje futur (da će doći).',
  },
  {
    mode: 'izjave',
    q: '„Umorna sam.” → Ana je rekla da ____ umorna.',
    opts: ['je', 'je bila', 'bude', 'bi bila'],
    answer: 'je',
    en: 'Ana said she was tired.',
    tip: 'Prezent ostaje prezent — nema slaganja vremena unatrag.',
  },
  {
    mode: 'izjave',
    q: '„Kupio sam kruh.” → Ivan je rekao da ____ kruh.',
    opts: ['je kupio', 'kupuje', 'će kupiti', 'bi kupio'],
    answer: 'je kupio',
    en: 'Ivan said he had bought bread.',
    tip: 'Perfekt ostaje perfekt: da je kupio.',
  },
  {
    mode: 'izjave',
    q: 'Što se pri prenošenju tuđih riječi u hrvatskome MIJENJA?',
    opts: [
      'osobe i oznake vremena/mjesta; glagolska vremena ostaju',
      'glagolska se vremena pomiču unatrag',
      'ništa se ne mijenja',
      'samo red riječi',
    ],
    answer: 'osobe i oznake vremena/mjesta; glagolska vremena ostaju',
    en: 'What changes when reporting speech in Croatian?',
    tip: 'Mijenjaju se zamjenice, osobe i priložne oznake (sutra → sutradan); vremena ostaju kakva jesu.',
  },
  {
    mode: 'izjave',
    q: '„Živim u Splitu.” → Petra je rekla da ____ u Splitu.',
    opts: ['živi', 'je živjela', 'će živjeti', 'bi živjela'],
    answer: 'živi',
    en: 'Petra said she lives in Split.',
    tip: 'Treća osoba + isti prezent: da živi.',
  },
  {
    mode: 'izjave',
    q: '„Sutra” u neizravnom govoru (uz glagol u perfektu) obično postaje:',
    opts: ['sutradan', 'jučer', 'danas', 'prekjučer'],
    answer: 'sutradan',
    en: '"Tomorrow" in reported speech usually becomes…',
    tip: 'Priložne se oznake pomiču s gledišta pripovjedača: sutra → sutradan / sljedećega dana.',
  },
  {
    mode: 'izjave',
    q: '„Ne mogu doći.” → Luka je javio da ne ____ doći.',
    opts: ['može', 'bi mogao', 'bude mogao', 'moći'],
    answer: 'može',
    en: 'Luka reported that he could not come.',
    tip: 'Prezent ostaje: da ne može doći. Osoba se prilagođava (ja → on).',
  },
  {
    mode: 'izjave',
    q: '„Ovdje je hladno.” — preneseno s odmakom mjesta: „Rekla je da je ____ hladno.”',
    opts: ['ondje', 'ovdje', 'negdje', 'nigdje'],
    answer: 'ondje',
    en: 'She said it was cold there.',
    tip: 'Mjesne oznake mijenjaju gledište: ovdje → ondje/tamo.',
  },
  {
    mode: 'pitanja',
    q: '„Dolaziš li sutra?” → Pitala me ____ sutra.',
    opts: ['dolazim li', 'da li dolazim', 'ako dolazim', 'li dolazim'],
    answer: 'dolazim li',
    en: 'She asked me whether I was coming tomorrow.',
    tip: "Neizravno da/ne pitanje uvodi 'li' iza glagola; „da li” nije preporučeno u standardu.",
  },
  {
    mode: 'pitanja',
    q: '„Gdje stanuješ?” → Pitao me gdje ____.',
    opts: ['stanujem', 'stanuješ', 'stanuje', 'bih stanovao'],
    answer: 'stanujem',
    en: 'He asked me where I live.',
    tip: 'Upitna riječ ostaje, a osoba se prilagođava: gdje stanujem.',
  },
  {
    mode: 'pitanja',
    q: '„Jesi li gladan?” → Zanimalo ju je ____ gladan.',
    opts: ['jesam li', 'da li sam', 'sam li', 'ako sam'],
    answer: 'jesam li',
    en: 'She wondered whether I was hungry.',
    tip: 'Naglašeni oblik + li: jesam li. Nenaglašeno „sam li” nije moguće.',
  },
  {
    mode: 'pitanja',
    q: '„Kada počinje film?” → Pitali smo kada ____ film.',
    opts: ['počinje', 'je počeo', 'bi počeo', 'počne'],
    answer: 'počinje',
    en: 'We asked when the film starts.',
    tip: 'Vrijeme se ne pomiče: počinje ostaje počinje.',
  },
  {
    mode: 'pitanja',
    q: '„Hoćeš li mi pomoći?” → Pitao me ____ mu pomoći.',
    opts: ['hoću li', 'hoćeš li', 'bih li', 'da hoću'],
    answer: 'hoću li',
    en: 'He asked me whether I would help him.',
    tip: 'Osoba se prilagođava (ti → ja), futur ostaje: hoću li mu pomoći.',
  },
  {
    mode: 'pitanja',
    q: 'Čestica koja uvodi neizravno da/ne pitanje jest:',
    opts: ['li', 'zar', 'ne', 'što'],
    answer: 'li',
    en: 'The particle that introduces an indirect yes/no question',
    tip: "Pitao je dolazi LI — 'li' stoji odmah iza glagola.",
  },
  {
    mode: 'pitanja',
    q: '„Zašto kasniš?” → Htjela je znati zašto ____.',
    opts: ['kasnim', 'kasniš', 'kasni', 'bih kasnio'],
    answer: 'kasnim',
    en: 'She wanted to know why I was late.',
    tip: 'Upitna riječ ostaje; druga osoba prelazi u prvu: zašto kasnim.',
  },
  {
    mode: 'pitanja',
    q: '„Koliko košta karta?” → Pitao sam koliko ____ karta.',
    opts: ['košta', 'je koštala', 'bi koštala', 'koštat će'],
    answer: 'košta',
    en: 'I asked how much the ticket costs.',
    tip: 'Bez pomicanja vremena: koliko košta.',
  },
  {
    mode: 'zapovijedi',
    q: '„Dođi sutra!” → Rekao mi je da ____ sutradan.',
    opts: ['dođem', 'dođi', 'ću doći', 'bih došao'],
    answer: 'dođem',
    en: 'He told me to come the next day.',
    tip: 'Zapovijed se prenosi s da + prezent: da dođem.',
  },
  {
    mode: 'zapovijedi',
    q: '„Nemojte pušiti!” → Zamolila nas je da ne ____.',
    opts: ['pušimo', 'pušite', 'pušiti', 'bismo pušili'],
    answer: 'pušimo',
    en: 'She asked us not to smoke.',
    tip: 'Niječna zapovijed → da ne + prezent u odgovarajućoj osobi.',
  },
  {
    mode: 'zapovijedi',
    q: '„Zatvori prozor!” → Rekla mu je ____ prozor.',
    opts: ['da zatvori', 'zatvori', 'da će zatvoriti', 'neka zatvorit'],
    answer: 'da zatvori',
    en: 'She told him to close the window.',
    tip: 'Da + prezent (da zatvori); futur bi značio izjavu, ne zapovijed.',
  },
  {
    mode: 'zapovijedi',
    q: 'Zapovijed upućena trećoj osobi prenosi se i česticom:',
    opts: ['neka', 'hajde', 'daj', 'evo'],
    answer: 'neka',
    en: 'A command to a third person can also be reported with…',
    tip: 'Neka dođe! — neka + prezent za treću osobu.',
  },
  {
    mode: 'zapovijedi',
    q: '„Požuri!” → Viknuo je da ____.',
    opts: ['požurim', 'požuri', 'ću požuriti', 'požurivši'],
    answer: 'požurim',
    en: 'He shouted at me to hurry.',
    tip: 'Da + prezent u prvoj osobi: da požurim.',
  },
  {
    mode: 'zapovijedi',
    q: '„Ne diraj to!” → Upozorila ga je da to ne ____.',
    opts: ['dira', 'diraj', 'dirati', 'bi dirao'],
    answer: 'dira',
    en: 'She warned him not to touch it.',
    tip: 'Da + prezent treće osobe: da to ne dira.',
  },
  {
    mode: 'zapovijedi',
    q: '„Pričekajte trenutak!” → Zamolio nas je da ____ trenutak.',
    opts: ['pričekamo', 'pričekajte', 'pričekati', 'ćemo pričekati'],
    answer: 'pričekamo',
    en: 'He asked us to wait a moment.',
    tip: 'Da + prezent prve osobe množine: da pričekamo.',
  },
  {
    mode: 'zapovijedi',
    q: '„Neka se javi sutra!” — ova rečenica izriče:',
    opts: [
      'zapovijed/želju upućenu trećoj osobi',
      'izravno pitanje',
      'pogodbu',
      'želju govornika o sebi',
    ],
    answer: 'zapovijed/želju upućenu trećoj osobi',
    en: 'What does this sentence express?',
    tip: 'Neka + prezent = zapovijed ili želja o trećoj osobi.',
  },
];

export { DATA as NEIZRAVNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ReportedSpeechDrill({ goBack, award }: Props) {
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
          key: 'neizravni',
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
        {H('💬 Neizravni govor', 'rekao je da... — reporting without backshift', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Besprijekorno prenosite tuđe riječi! 🏆'
              : score >= total * 0.8
                ? 'Snažno vladanje neizravnim govorom! 💪'
                : 'Čestica li i da + prezent traže još vježbe.'}
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
      {H('💬 Neizravni govor', 'rekao je da... — reporting without backshift', goBack)}
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
