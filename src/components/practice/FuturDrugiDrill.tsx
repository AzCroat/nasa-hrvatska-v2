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

// B2 futur drugi drill — the taught-but-never-drilled gap: the futur-ii
// grammar unit (grammarAdvanced) had no pool drill. Three modes: formation
// (budem + pridjev radni), subordinate-clause usage (kad/ako/dok + futur II),
// and futur I vs II discrimination. Croatian prompts with English glosses.
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  uporaba: '🧩 U surečenici',
  izbor: '⚖️ Futur I ili II',
};

const DATA = [
  {
    mode: 'tvorba',
    q: "Futur drugi od 'imati' u 1. l. jd. glasi:",
    opts: ['budem imao', 'budem imati', 'bit ću imao', 'budem imam'],
    answer: 'budem imao',
    en: 'the future II of "to have", 1st person singular',
    tip: 'Svršeni prezent glagola biti (budem) + glagolski pridjev radni: budem imao/imala.',
  },
  {
    mode: 'tvorba',
    q: "Futur drugi od 'raditi' u 3. l. mn. glasi:",
    opts: ['budu radili', 'bude radili', 'budu raditi', 'će raditi'],
    answer: 'budu radili',
    en: 'the future II of "to work", 3rd person plural',
    tip: 'budu + radili (pridjev radni u množini).',
  },
  {
    mode: 'tvorba',
    q: 'Dopuni: „Ako ____ (ti) sutra slobodna, nazovi me.”',
    opts: ['budeš', 'bit ćeš', 'budeš biti', 'si'],
    answer: 'budeš',
    en: "If you're free tomorrow, call me.",
    tip: "Iza 'ako' za budućnost dolazi svršeni prezent glagola biti: ako budeš slobodna.",
  },
  {
    mode: 'tvorba',
    q: "Futur drugi od 'učiti' u 1. l. mn.:",
    opts: ['budemo učili', 'budemo učiti', 'ćemo učiti', 'budemo učimo'],
    answer: 'budemo učili',
    en: 'the future II of "to study", 1st person plural',
    tip: 'budem/budeš/bude/budemo/budete/budu + pridjev radni: budemo učili.',
  },
  {
    mode: 'tvorba',
    q: 'Pomoćni glagol futura drugog jest:',
    opts: ['budem, budeš, bude…', 'ću, ćeš, će…', 'jesam, jesi, je…', 'bih, bi, bi…'],
    answer: 'budem, budeš, bude…',
    en: 'the auxiliary of the future II',
    tip: "Svršeni prezent glagola 'biti'. Oblici 'ću, ćeš…' tvore futur PRVI.",
  },
  {
    mode: 'tvorba',
    q: "Futur drugi od 'ići' u 2. l. jd. (muški rod):",
    opts: ['budeš išao', 'budeš ići', 'ideš budeš', 'bit ćeš išao'],
    answer: 'budeš išao',
    en: 'the future II of "to go", 2nd person singular',
    tip: 'budeš + išao. Infinitiv se u futuru drugom nikad ne rabi.',
  },
  {
    mode: 'tvorba',
    q: 'Koji oblik NIJE futur drugi?',
    opts: ['budem pisao', 'budete pisali', 'budu pisale', 'bit ćemo pisali'],
    answer: 'bit ćemo pisali',
    en: 'Which form is NOT a future II?',
    tip: '„Bit ćemo pisali” miješa futur prvi s pridjevom radnim — takav oblik ne postoji u standardu.',
  },
  {
    mode: 'tvorba',
    q: "Futur drugi glagola 'vidjeti' za žensku osobu (3. l. jd.):",
    opts: ['bude vidjela', 'bude vidio', 'budu vidjele', 'vidjet će'],
    answer: 'bude vidjela',
    en: 'the future II of "to see", 3rd person singular feminine',
    tip: 'Pridjev radni slaže se s rodom: bude vidjela.',
  },
  {
    mode: 'uporaba',
    q: '„Kad ____ vremena, doći ću k vama.”',
    opts: ['budem imao', 'imat ću', 'imao sam', 'bih imao'],
    answer: 'budem imao',
    en: 'When I have time, I will come to see you.',
    tip: "Iza 'kad' za budućnost → futur drugi; futur prvi ostaje u glavnoj surečenici.",
  },
  {
    mode: 'uporaba',
    q: '„Ako ne ____ kišiti, idemo na izlet.”',
    opts: ['bude', 'hoće', 'je', 'bi'],
    answer: 'bude',
    en: "If it doesn't rain, we're going on a trip.",
    tip: 'Pogodbena surečenica o budućnosti: ako ne bude kišilo / ako ne bude kišiti.',
  },
  {
    mode: 'uporaba',
    q: '„Dok ____ u Zagrebu, posjećivat ću tetu.”',
    opts: ['budem živio', 'živjet ću', 'bih živio', 'sam živio'],
    answer: 'budem živio',
    en: 'While I live in Zagreb, I will visit my aunt.',
    tip: "Iza 'dok' za buduće trajanje → futur drugi nesvršenoga glagola.",
  },
  {
    mode: 'uporaba',
    q: '„Ako ____ pitanja, slobodno ih postavite.”',
    opts: ['bude', 'budu', 'će biti', 'jesu'],
    answer: 'bude',
    en: 'If there are any questions, feel free to ask them.',
    tip: "Bezlično 'ako bude pitanja' — futur drugi glagola biti + genitiv.",
  },
  {
    mode: 'uporaba',
    q: 'U glavnoj surečenici uz futur drugi obično stoji:',
    opts: ['futur prvi ili imperativ', 'aorist', 'imperfekt', 'pluskvamperfekt'],
    answer: 'futur prvi ili imperativ',
    en: 'What usually stands in the main clause alongside a future II?',
    tip: 'Kad budem imao vremena, DOĆI ĆU / DOĐI: glavna surečenica nosi futur prvi ili imperativ.',
  },
  {
    mode: 'uporaba',
    q: '„Kupit ćemo stan kad ____ dovoljno novca.”',
    opts: ['budemo imali', 'imat ćemo', 'imamo li', 'bismo imali'],
    answer: 'budemo imali',
    en: 'We will buy a flat when we have enough money.',
    tip: 'Vremenska surečenica o budućnosti → futur drugi: kad budemo imali.',
  },
  {
    mode: 'uporaba',
    q: '„Ako sutra ____ sunčano, idemo na plažu.”',
    opts: ['bude', 'će biti', 'je', 'bi bilo'],
    answer: 'bude',
    en: "If it's sunny tomorrow, we're going to the beach.",
    tip: "Iza 'ako' nikad futur prvi — dolazi futur drugi (bude sunčano).",
  },
  {
    mode: 'uporaba',
    q: '„Dok ti ____ zadaću, ja ću skuhati večeru.”',
    opts: ['budeš pisao', 'pisat ćeš', 'pišeš budeš', 'si pisao'],
    answer: 'budeš pisao',
    en: 'While you do your homework, I will cook dinner.',
    tip: 'Usporedne buduće radnje: dok + futur drugi, glavna surečenica futur prvi.',
  },
  {
    mode: 'izbor',
    q: '„Sutra ____ baku.” (glavna surečenica)',
    opts: ['posjetit ću', 'budem posjetio', 'posjetim', 'bih posjetio'],
    answer: 'posjetit ću',
    en: 'Tomorrow I will visit grandma.',
    tip: 'U glavnoj surečenici budućnost izriče futur PRVI — futur drugi ondje ne dolazi.',
  },
  {
    mode: 'izbor',
    q: '„Javi mi čim ____.”',
    opts: ['stigneš', 'budeš stigao', 'stići ćeš', 'stigao si'],
    answer: 'stigneš',
    en: 'Let me know as soon as you arrive.',
    tip: 'Uz svršene glagole u vremenskoj surečenici standard radije bira prezent (čim stigneš); futur drugi tu zvuči obilježeno.',
  },
  {
    mode: 'izbor',
    q: '„Vjerujem da ____ uspjeti.”',
    opts: ['ćeš', 'budeš', 'bi', 'si'],
    answer: 'ćeš',
    en: 'I believe you will succeed.',
    tip: "Iza 'da' u objektnoj surečenici → futur prvi (da ćeš uspjeti), ne futur drugi.",
  },
  {
    mode: 'izbor',
    q: '„Ako ____ išta trebali, nazovite nas.”',
    opts: ['budete', 'ćete', 'biste', 'jeste'],
    answer: 'budete',
    en: 'If you need anything, call us.',
    tip: 'Pogodba o budućnosti → futur drugi: ako budete trebali.',
  },
  {
    mode: 'izbor',
    q: '„____ li nam se pridružiti večeras?”',
    opts: ['Hoćete', 'Budete', 'Biste', 'Jeste'],
    answer: 'Hoćete',
    en: 'Will you join us tonight?',
    tip: 'Izravno pitanje o budućnosti → futur prvi s česticom li: hoćete li.',
  },
  {
    mode: 'izbor',
    q: '„Kad ____ stariji, razumjet ćeš.”',
    opts: ['budeš', 'ćeš biti', 'si', 'bi bio'],
    answer: 'budeš',
    en: 'When you are older, you will understand.',
    tip: 'Kad + futur drugi (budeš stariji); futur prvi ostaje u glavnoj surečenici.',
  },
  {
    mode: 'izbor',
    q: '„Obećao je da ____ pomoći.”',
    opts: ['će', 'bude', 'bi', 'je'],
    answer: 'će',
    en: 'He promised he would help.',
    tip: "Iza 'da' nakon glagola govorenja/obećavanja → futur prvi, bez pomicanja vremena.",
  },
  {
    mode: 'izbor',
    q: '„Dok se ____ vraćali, već će pasti mrak.”',
    opts: ['budemo', 'ćemo', 'bismo', 'smo'],
    answer: 'budemo',
    en: 'By the time we are coming back, it will already be dark.',
    tip: 'Dok + futur drugi povratnoga glagola: dok se budemo vraćali.',
  },
];

export { DATA as FUTUR2_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FuturDrugiDrill({ goBack, award }: Props) {
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
          key: 'futur2',
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
        {H('🔮 Futur drugi', 'kad budem imao — the future before the future', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — futur drugi je vaš! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje složenom budućnošću! 💪'
                : 'Tvorba i surečenice traže još vježbe.'}
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
      {H('🔮 Futur drugi', 'kad budem imao — the future before the future', goBack)}
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
