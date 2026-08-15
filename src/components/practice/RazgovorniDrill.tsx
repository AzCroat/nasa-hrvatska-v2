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

// C2 colloquial-register drill (C2 tranche 3, 2026-08-15): decoding
// pan-Croatian colloquialisms into standard, recognizing natural colloquial
// equivalents, and choosing the register a situation demands (job
// application vs text to a friend vs official minutes).
const MODE_LABEL: Record<string, string> = {
  dekod: '🔍 Dekodiranje',
  obrnuto: '🔁 Obrnuto',
  situacija: '🎭 Situacija',
};

const DATA = [
  {
    mode: 'dekod',
    q: 'Razgovorno „fakat” u standardu znači:',
    opts: ['zaista', 'možda', 'nikako', 'otprilike'],
    answer: 'zaista',
    en: 'colloquial fakat = really',
    tip: 'Fakat je stvarno/zaista: „Fakat je dobar film.”',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „komp” u standardu je:',
    opts: ['računalo', 'ormar', 'automobil', 'telefon'],
    answer: 'računalo',
    en: 'colloquial komp = computer',
    tip: 'Skraćeno od kompjutor; standardno: računalo.',
  },
  {
    mode: 'dekod',
    q: '„Frka je!” znači:',
    opts: ['panika je, gužva je', 'tišina je', 'dosadno je', 'hladno je'],
    answer: 'panika je, gužva je',
    en: 'frka = panic, rush',
    tip: 'Frka = žurba, panika, napeta situacija.',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „murja” znači:',
    opts: ['policija', 'vojska', 'vatrogasci', 'pošta'],
    answer: 'policija',
    en: 'murja = the police (slang)',
    tip: 'Žargonski naziv za policiju.',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „lova” znači:',
    opts: ['novac', 'hrana', 'sreća', 'ljubav'],
    answer: 'novac',
    en: 'lova = money (slang)',
    tip: 'Ima love = ima novca.',
  },
  {
    mode: 'dekod',
    q: '„Kužiš?” u standardu glasi:',
    opts: ['Razumiješ?', 'Čuješ?', 'Vidiš?', 'Trčiš?'],
    answer: 'Razumiješ?',
    en: 'kuziš = do you get it?',
    tip: 'Kužiti = razumjeti, shvaćati.',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „faca” znači:',
    opts: ['dojmljiva ili važna osoba', 'vrsta kolača', 'dio automobila', 'loš učenik'],
    answer: 'dojmljiva ili važna osoba',
    en: 'faca = a cool/important person',
    tip: 'On je prava faca = dojmljiv čovjek.',
  },
  {
    mode: 'dekod',
    q: '„Štreber” je razgovorni naziv za:',
    opts: ['pretjerano marljiva učenika', 'lijenog radnika', 'dobrog kuhara', 'starog susjeda'],
    answer: 'pretjerano marljiva učenika',
    en: 'streber = an overzealous student',
    tip: 'Blago podrugljivo: uči više nego što itko traži.',
  },
  {
    mode: 'obrnuto',
    q: '„Razumiješ li?” najprirodnije razgovorno glasi:',
    opts: ['Kužiš?', 'Izvolite?', 'Molim?', 'Dakako?'],
    answer: 'Kužiš?',
    en: 'standard do you understand → colloquial kuziš',
    tip: 'Najčešći razgovorni ekvivalent.',
  },
  {
    mode: 'obrnuto',
    q: '„Novac” u žargonu je:',
    opts: ['lova', 'roba', 'kusur', 'marka'],
    answer: 'lova',
    en: 'money → lova',
    tip: 'Lova, kinta, pare — žargonski nazivi za novac.',
  },
  {
    mode: 'obrnuto',
    q: '„Računalo” razgovorno zovemo:',
    opts: ['komp', 'stroj', 'kutija', 'ekran'],
    answer: 'komp',
    en: 'computer → komp',
    tip: 'Komp — univerzalna razgovorna pokrata.',
  },
  {
    mode: 'obrnuto',
    q: '„Izvrsno!” mladi razgovorno kažu:',
    opts: ['mrak', 'mrak i po', 'svjetlo', 'sjena'],
    answer: 'mrak',
    en: 'excellent → mrak (lit. darkness)',
    tip: 'Mrak = super, odlično (žargon pohvale).',
  },
  {
    mode: 'obrnuto',
    q: '„Prijatelj” razgovorno je:',
    opts: ['frend', 'kolega s posla', 'znanac', 'sugovornik'],
    answer: 'frend',
    en: 'friend → frend',
    tip: 'Anglizam frend u opuštenom govoru.',
  },
  {
    mode: 'obrnuto',
    q: '„Dosadno mi je zbog njega” razgovorno:',
    opts: ['smara me', 'veseli me', 'čudi me', 'krijepi me'],
    answer: 'smara me',
    en: 'he bores me → smara me',
    tip: 'Smarati = gnjaviti, dosađivati.',
  },
  {
    mode: 'obrnuto',
    q: '„Brzo je otišao” pojačano razgovorno:',
    opts: ['zbrisao je', 'došetao je', 'pristigao je', 'svratio je'],
    answer: 'zbrisao je',
    en: 'he took off → zbrisao je',
    tip: 'Zbrisati = naglo otići, pobjeći.',
  },
  {
    mode: 'obrnuto',
    q: '„Mnogo posla” razgovorno:',
    opts: ['hrpa posla', 'svežanj posla', 'niska posla', 'šaka posla'],
    answer: 'hrpa posla',
    en: 'a lot of work → a heap of work',
    tip: 'Hrpa = razgovorna mjera za mnogo.',
  },
  {
    mode: 'situacija',
    q: 'Prikladan početak molbe za posao:',
    opts: ['Poštovani gospodine Horvat,', 'Bog svima!', 'Ej, ljudi!', 'Dragi moji!'],
    answer: 'Poštovani gospodine Horvat,',
    en: 'the proper salutation in a job application',
    tip: 'Formalni dopis traži Poštovani + prezime i V-oblik.',
  },
  {
    mode: 'situacija',
    q: 'U poruci bliskom prijatelju najprirodnije zvuči:',
    opts: [
      'Ej, jesi za kavu?',
      'Poštovani, biste li imali vremena za kavu?',
      'Ovim putem Vas pozivam na kavu.',
      'Uljudno molim odgovor glede kave.',
    ],
    answer: 'Ej, jesi za kavu?',
    en: 'texting a close friend about coffee',
    tip: 'Razgovorni stil za bliske ljude; formalno bi zvučalo hladno.',
  },
  {
    mode: 'situacija',
    q: 'U eseju umjesto „hrpa problema” pišemo:',
    opts: ['mnoštvo problema', 'brdo problema', 'more frke', 'tona bedova'],
    answer: 'mnoštvo problema',
    en: 'a heap of problems → a multitude of problems',
    tip: 'Formalni stil traži neutralnu mjeru: mnoštvo, niz, brojni.',
  },
  {
    mode: 'situacija',
    q: 'U službenom e-mailu izbjegavamo:',
    opts: ['žargon i pretjerane emotikone', 'uljudne formule', 'punktuaciju', 'svoj potpis'],
    answer: 'žargon i pretjerane emotikone',
    en: 'what to avoid in a formal e-mail',
    tip: 'Standardni jezik, V-oblik, bez „frke” i 😂.',
  },
  {
    mode: 'situacija',
    q: 'Profesoru se na fakultetu obraćamo:',
    opts: [
      'Poštovani profesore, biste li…',
      'Ej profo, daj…',
      'Kužiš profesore…',
      'Bog stari, imaš minutu?',
    ],
    answer: 'Poštovani profesore, biste li…',
    en: 'addressing a professor',
    tip: 'V-oblik + uljudni kondicional (biste li).',
  },
  {
    mode: 'situacija',
    q: '„Šef je skužio grešku” u zapisniku postaje:',
    opts: [
      'Voditelj je uočio pogrešku.',
      'Šef je skužio propust.',
      'Gazda je provalio grešku.',
      'Šef je ukapirao problem.',
    ],
    answer: 'Voditelj je uočio pogrešku.',
    en: 'the boss spotted the mistake — minutes version',
    tip: 'Zapisnik traži neutralan leksik: voditelj, uočiti, pogreška.',
  },
  {
    mode: 'situacija',
    q: 'Koja rečenica pripada razgovornomu stilu?',
    opts: [
      'Daj mi pet minuta, frka mi je.',
      'Molim Vas pričekajte pet minuta.',
      'Ljubazno molim za kratku odgodu.',
      'Zamolio bih Vas za strpljenje.',
    ],
    answer: 'Daj mi pet minuta, frka mi je.',
    en: 'which sentence is colloquial?',
    tip: 'Imperativ „daj” + žargon „frka” = razgovorni registar.',
  },
  {
    mode: 'situacija',
    q: '„Nema frke” u formalnom odgovoru glasi:',
    opts: ['U redu je, riješit ćemo.', 'Frka otpada.', 'Sve pet, šefe.', 'Ma opušteno.'],
    answer: 'U redu je, riješit ćemo.',
    en: 'no worries → formal equivalent',
    tip: 'Formalno: u redu je / nema poteškoća / dogovoreno.',
  },
];

export { DATA as RAZGOVORNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RazgovorniDrill({ goBack, award }: Props) {
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
          key: 'razgovorni',
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
        {H('🗣️ Razgovorni jezik', 'frka, lova, kužiš — decoding how people actually talk', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — kužite sve! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro snalaženje u registrima! 💪'
                : 'Razgovorni registar traži još vježbe.'}
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
      {H('🗣️ Razgovorni jezik', 'frka, lova, kužiš — decoding how people actually talk', goBack)}
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
