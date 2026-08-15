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

// C2 structure drill — the session pool's first C2 grammar drill (before this,
// the guaranteed-grammar slot silently served C1 to C2 users). Three modes
// mirroring the C2 animated lessons: literary past tenses (aorist/imperfekt/
// pluskvamperfekt), administrative nominal style, and comma rules. Prompts are
// in Croatian — at C2 the metalanguage itself is part of the curriculum.
const MODE_LABEL: Record<string, string> = {
  tense: '📜 Književna vremena',
  nominal: '🏛️ Nominalni stil',
  comma: '✒️ Zarez',
};

const DATA = [
  // ── Literary past tenses ──
  {
    mode: 'tense',
    q: "„Uđe u sobu i sjede za stol.” — koji je oblik 'uđe'?",
    opts: ['aorist', 'prezent', 'imperfekt', 'perfekt'],
    answer: 'aorist',
    en: 'He entered the room and sat down.',
    tip: 'Svršeni glagol u pripovjednom nizu: aorist 3. l. jd. (ući → uđe). Prezent bi bio „ulazi".',
  },
  {
    mode: 'tense',
    q: "„More šumljaše pod prozorom.” — koji je oblik 'šumljaše'?",
    opts: ['imperfekt', 'aorist', 'kondicional', 'pluskvamperfekt'],
    answer: 'imperfekt',
    en: 'The sea murmured beneath the window.',
    tip: 'Nesvršeni glagol, trajna pozadinska radnja: imperfekt (šumjeti → šumljaše).',
  },
  {
    mode: 'tense',
    q: "„Rekoh ti da ne ideš!” — 'rekoh' je:",
    opts: [
      'aorist, 1. lice jednine',
      'prezent, 1. lice jednine',
      'imperfekt, 1. lice jednine',
      'krnji perfekt',
    ],
    answer: 'aorist, 1. lice jednine',
    en: 'I told you not to go!',
    tip: 'reći → rekoh (aorist, -h za 1. l. jd.). U govoru preživljava kao dramatičan izraz.',
  },
  {
    mode: 'tense',
    q: "„Bijaše hladna jesenska noć.” — 'bijaše' je:",
    opts: [
      'imperfekt glagola biti',
      'aorist glagola biti',
      'perfekt glagola biti',
      'kondicional glagola biti',
    ],
    answer: 'imperfekt glagola biti',
    en: 'It was a cold autumn night.',
    tip: 'biti → bijah, bijaše... — imperfekt za opis stanja. Aorist glagola biti glasi bih/bi.',
  },
  {
    mode: 'tense',
    q: "„Svi zašutješe kad starac progovori.” — 'zašutješe' je:",
    opts: [
      'aorist, 3. lice množine',
      'imperfekt, 3. lice množine',
      'prezent, 3. lice množine',
      'futur drugi',
    ],
    answer: 'aorist, 3. lice množine',
    en: 'Everyone fell silent when the old man spoke.',
    tip: 'Svršeni zašutjeti → zašutješe (-še za 3. l. mn.): nagao, dovršen događaj.',
  },
  {
    mode: 'tense',
    q: "„Djeca se igrahu na trgu.” — 'igrahu' je:",
    opts: [
      'imperfekt, 3. lice množine',
      'aorist, 3. lice množine',
      'perfekt bez pomoćnog glagola',
      'glagolski prilog sadašnji',
    ],
    answer: 'imperfekt, 3. lice množine',
    en: 'The children were playing on the square.',
    tip: 'Nesvršeni igrati se → igrahu: radnja koja je trajala. Aorist se tvori od svršenih glagola.',
  },
  {
    mode: 'tense',
    q: 'Imperfekt glagola živjeti u 3. licu jednine glasi:',
    opts: ['življaše', 'živješe', 'živio bi', 'živjet će'],
    answer: 'življaše',
    en: 'The imperfect of "to live", 3rd person singular.',
    tip: 'živjeti → življah, življaše... (jotacija v+j → vlj). „Starac življaše sam na otoku."',
  },
  {
    mode: 'tense',
    q: 'Pluskvamperfekt: „Vlak je već ___ kad smo stigli.”',
    opts: ['bio otišao', 'otišao', 'bijaše otići', 'bio otići'],
    answer: 'bio otišao',
    en: 'The train had already left when we arrived.',
    tip: 'Pluskvamperfekt = perfekt glagola biti + glagolski pridjev radni: je bio otišao.',
  },
  // ── Nominal / administrative style ──
  {
    mode: 'nominal',
    q: "„Prilikom podnošenja zahtjeva priložite presliku.” — što znači 'prilikom podnošenja zahtjeva'?",
    opts: [
      'kad podnosite zahtjev',
      'nakon što je zahtjev odbijen',
      'ako povučete zahtjev',
      'prije nego što zahtjev napišete',
    ],
    answer: 'kad podnosite zahtjev',
    en: 'When submitting the request, attach a copy.',
    tip: 'Nominalni stil „raspetljava" se vraćanjem glagola: podnošenje → podnositi.',
  },
  {
    mode: 'nominal',
    q: 'Odaberite ispravnu nominalizaciju rečenice „Kad je stigao, svi su ustali.”',
    opts: [
      'Njegov je dolazak sve podigao na noge.',
      'Stigavši, svi su ustali.',
      'On stiže i svi ustaju.',
      'Svi su ustali jer stiže.',
    ],
    answer: 'Njegov je dolazak sve podigao na noge.',
    en: 'When he arrived, everyone stood up.',
    tip: '„Stigavši, svi su ustali” je klasična pogreška: glagolski prilog mora dijeliti subjekt s glavnom rečenicom — a ustali su SVI, ne onaj koji je stigao.',
  },
  {
    mode: 'nominal',
    q: "Glagolska osnova izraza 'donošenje odluke' jest:",
    opts: ['donijeti odluku', 'donositi se', 'odlučivati se', 'odnositi odluku'],
    answer: 'donijeti odluku',
    en: 'the making of a decision → to make a decision',
    tip: 'donošenje ← donositi/donijeti; „donijeti odluku" standardna je kolokacija.',
  },
  {
    mode: 'nominal',
    q: '„Uslijed neplaćanja računa usluga je obustavljena.” — prirodnija svakodnevna verzija?',
    opts: [
      'Budući da račun nije plaćen, usluga je isključena.',
      'Zbog plaćanja računa usluga uredno radi.',
      'Nakon plaćanja računa usluga je obustavljena.',
      'Račun nije plaćen, pa usluga.',
    ],
    answer: 'Budući da račun nije plaćen, usluga je isključena.',
    en: 'Due to non-payment of the bill, service was suspended.',
    tip: 'uslijed + genitiv (administrativno) ≈ budući da + rečenica (neutralno).',
  },
  {
    mode: 'nominal',
    q: "Koji izraz pripada administrativnom stilu u značenju 'platiti'?",
    opts: ['izvršiti uplatu', 'dati novce', 'počastiti', 'potrošiti se'],
    answer: 'izvršiti uplatu',
    en: 'to effect payment (officialese for "to pay")',
    tip: 'Administrativni stil voli raščlanjeni predikat: izvršiti uplatu, obaviti pregled, podnijeti prijavu.',
  },
  {
    mode: 'nominal',
    q: "„Po izvršenom pregledu izdaje se potvrda.” — 'po izvršenom pregledu' znači:",
    opts: ['nakon pregleda', 'tijekom pregleda', 'prije pregleda', 'umjesto pregleda'],
    answer: 'nakon pregleda',
    en: 'Upon completion of the examination, a certificate is issued.',
    tip: 'po + lokativ u administrativnom stilu = „nakon": po završetku, po primitku, po izvršenom pregledu.',
  },
  {
    mode: 'nominal',
    q: 'Nominalna verzija zabrane „Zabranjeno je pušiti.” glasi:',
    opts: ['Zabranjeno pušenje.', 'Zabranjeno pušiti se.', 'Pušači zabranjeni.', 'Ne puši se!'],
    answer: 'Zabranjeno pušenje.',
    en: 'No smoking.',
    tip: 'Infinitiv → glagolska imenica: pušiti → pušenje. Standardna forma javnih natpisa.',
  },
  {
    mode: 'nominal',
    q: "„Radi utvrđivanja činjeničnog stanja provodi se očevid.” — 'radi' ovdje izriče:",
    opts: [
      'svrhu (s ciljem da se utvrdi)',
      'uzrok (zato što je utvrđeno)',
      'dopuštanje (iako je utvrđeno)',
      'sredstvo (pomoću utvrđivanja)',
    ],
    answer: 'svrhu (s ciljem da se utvrdi)',
    en: 'For the purpose of establishing the facts, an inspection is carried out.',
    tip: 'radi + genitiv = svrha; zbog + genitiv = uzrok. Standard ih razlikuje — „radi kiše” je pogreška.',
  },
  // ── Comma rules ──
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Kad dođeš, javi se.',
      'Kad dođeš javi se.',
      'Javi se, kad dođeš.',
      'Kad, dođeš, javi se.',
    ],
    answer: 'Kad dođeš, javi se.',
    en: 'When you arrive, let me know.',
    tip: 'Inverzija (zavisna surečenica ispred glavne) traži zarez; u redovnom poretku („Javi se kad dođeš") zareza nema.',
  },
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Htio sam doći, ali nisam stigao.',
      'Htio sam doći ali nisam stigao.',
      'Htio sam doći, ali, nisam stigao.',
      'Htio sam, doći ali nisam stigao.',
    ],
    answer: 'Htio sam doći, ali nisam stigao.',
    en: 'I wanted to come, but I did not make it.',
    tip: 'Ispred suprotnih veznika a, ali, nego, no, već zarez se uvijek piše.',
  },
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Mislim da imaš pravo.',
      'Mislim, da imaš pravo.',
      'Mislim da, imaš pravo.',
      'Mislim, da, imaš pravo.',
    ],
    answer: 'Mislim da imaš pravo.',
    en: 'I think you are right.',
    tip: "Ispred izričnoga 'da' zarez se ne piše — navika iz drugih jezika ovdje vara.",
  },
  {
    mode: 'comma',
    q: 'Gdje idu zarezi: „To je naravno samo prijedlog”?',
    opts: [
      'To je, naravno, samo prijedlog.',
      'To je naravno, samo prijedlog.',
      'To je, naravno samo prijedlog.',
      'Zarezi nisu potrebni.',
    ],
    answer: 'To je, naravno, samo prijedlog.',
    en: 'That is, of course, only a proposal.',
    tip: 'Umetnuti komentar odvaja se zarezima s OBJE strane — jednostrano ograđivanje najčešća je pogreška.',
  },
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Ivane, dođi večeras.',
      'Ivane dođi večeras.',
      'Ivane dođi, večeras.',
      'Ivane, dođi, večeras.',
    ],
    answer: 'Ivane, dođi večeras.',
    en: 'Ivan, come tonight.',
    tip: 'Vokativ se uvijek odvaja zarezom: „Hvala ti, bako."',
  },
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Nije problem u novcu, nego u vremenu.',
      'Nije problem u novcu nego u vremenu.',
      'Nije problem, u novcu nego u vremenu.',
      'Nije problem u novcu nego, u vremenu.',
    ],
    answer: 'Nije problem u novcu, nego u vremenu.',
    en: 'The problem is not money but time.',
    tip: "Ispred 'nego' (suprotni veznik) zarez je obvezan.",
  },
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Kupio je kruh, mlijeko i jaja.',
      'Kupio je kruh, mlijeko, i jaja.',
      'Kupio je, kruh, mlijeko i jaja.',
      'Kupio je kruh mlijeko i jaja.',
    ],
    answer: 'Kupio je kruh, mlijeko i jaja.',
    en: 'He bought bread, milk and eggs.',
    tip: "U nabrajanju zarez dolazi među članovima, ali NE ispred sastavnoga 'i' (za razliku od engleskoga).",
  },
  {
    mode: 'comma',
    q: 'Koja je rečenica ispravno napisana?',
    opts: [
      'Moja sestra, inače profesorica, seli se u Rijeku.',
      'Moja sestra inače profesorica, seli se u Rijeku.',
      'Moja sestra, inače profesorica seli se u Rijeku.',
      'Moja sestra inače profesorica seli se u Rijeku.',
    ],
    answer: 'Moja sestra, inače profesorica, seli se u Rijeku.',
    en: 'My sister, a teacher by the way, is moving to Rijeka.',
    tip: 'Umetnuta apozicija ograđuje se zarezima s obje strane.',
  },
];

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C2StructureDrill({ goBack, award }: Props) {
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
          key: 'c2drill',
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
        {H('🎓 C2 Structure Drill', 'Literary tenses · nominal style · the comma', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Bez pogreške — vladate strukturom! 🏆'
              : score >= total * 0.8
                ? 'Snažno vladanje naprednim registrom! 💪'
                : 'Književna vremena i zarez traže još vježbe.'}
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
      {H('🎓 C2 Structure Drill', 'Literary tenses · nominal style · the comma', goBack)}
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
            marginBottom: 6,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {MODE_LABEL[cur.mode]}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#0e7490', lineHeight: 1.5 }}>
          {cur.q}
        </div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{cur.en}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
          {cur.opts.map((opt: string) => {
            let bg = 'white';
            let bc = 'rgba(124,58,237,.15)';
            if (answered) {
              if (opt === cur.answer) {
                bg = '#dcfce7';
                bc = '#16a34a';
              } else if (opt === chosen) {
                bg = '#fee2e2';
                bc = '#dc2626';
              }
            }
            return (
              <button
                key={opt}
                className="ob"
                style={{ background: bg, borderColor: bc, textAlign: 'left' }}
                onClick={() => pick(opt)}
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
              padding: '10px 14px',
              background: '#f5f3ff',
              borderRadius: 10,
              border: '1px solid #ddd6fe',
              fontSize: 14,
              color: '#5b21b6',
            }}
          >
            <strong>{chosen === cur.answer ? '✅ Točno!' : '❌ Netočno.'}</strong> {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 16 }} onClick={next}>
            {idx + 1 >= total ? 'See results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}

export { DATA as C2_DRILL_DATA };
