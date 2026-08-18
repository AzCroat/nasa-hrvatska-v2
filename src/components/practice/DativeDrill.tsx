import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import CaseConceptIntro from './CaseConceptIntro';
import DrillExplainCard from './DrillExplainCard';
import { useExplainError } from '../../hooks/useExplainError';
import { getCurrentContentLevel } from '../../lib/cefrCertification';
import { useStats } from '../../context/StatsContext';
import { rnd } from '../../lib/random.js';

function shLocal(a: any[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export const DATA = [
  {
    q: 'Dajem poklon ___.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    en: 'I give a gift to my brother.',
    tip: 'Indirect object takes dative: brat + -u → bratu',
  },
  {
    q: 'Pomažem ___.',
    opts: ['mami', 'mama', 'mame', 'mamom'],
    answer: 'mami',
    en: 'I am helping my mom.',
    tip: "'pomoći' takes dative: mama → drop -a + -i → mami",
  },
  {
    q: 'Šaljem poruku ___.',
    opts: ['učitelju', 'učitelja', 'učiteljem', 'učitelj'],
    answer: 'učitelju',
    en: 'I am sending a message to the teacher.',
    tip: 'Indirect object: učitelj (soft -lj) → dative: učitelju',
  },
  {
    q: 'Sviđa mi se ___.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    en: 'I like the city. (The city pleases me.)',
    tip: "'sviđati se' uses dative for subject: grad + -u → gradu",
  },
  {
    q: 'Pišem pismo ___.',
    opts: ['sestri', 'sestra', 'sestre', 'sestrom'],
    answer: 'sestri',
    en: 'I am writing a letter to my sister.',
    tip: 'Indirect object: sestra → drop -a + -i → sestri',
  },
  {
    q: 'Zahvaljujem ___.',
    opts: ['prijatelju', 'prijatelja', 'prijateljem', 'prijatelj'],
    answer: 'prijatelju',
    en: 'I thank my friend.',
    tip: "'zahvaliti' takes dative: prijatelj → prijatelju",
  },
  {
    q: 'Kupujem tortu ___.',
    opts: ['sinu', 'sina', 'sin', 'sinom'],
    answer: 'sinu',
    en: 'I am buying a cake for my son.',
    tip: 'Indirect object (for whom): sin + -u → sinu',
  },
  {
    q: 'Vjerujem ___.',
    opts: ['prijatelju', 'prijatelja', 'prijateljem', 'prijatelj'],
    answer: 'prijatelju',
    en: 'I believe my friend.',
    tip: "'vjerovati' takes dative: prijatelj → prijatelju",
  },
  {
    q: 'Govorim ___.',
    opts: ['djetetu', 'dijete', 'djeteta', 'djetetom'],
    answer: 'djetetu',
    en: 'I am speaking to the child.',
    tip: 'Indirect object: dijete (neut) → dative: djetetu',
  },
  {
    q: '___ treba moja pomoć.',
    opts: ['Liječniku', 'Liječnika', 'Liječnik', 'Liječnikom'],
    answer: 'Liječniku',
    en: 'The doctor needs my help.',
    tip: "'trebati' takes dative for the person who needs: liječnik + -u → liječniku",
  },
  {
    q: 'Daje novac ___.',
    opts: ['ženi', 'žena', 'žene', 'ženom'],
    answer: 'ženi',
    en: 'He gives money to the woman.',
    tip: 'Indirect object: žena → drop -a + -i → ženi',
  },
  {
    q: 'Idemo prema ___.',
    opts: ['moru', 'more', 'mora', 'morem'],
    answer: 'moru',
    en: 'We are going towards the sea.',
    tip: "'prema' (towards) takes dative: more (neuter) → moru",
  },
  {
    q: 'Hvala ___!',
    opts: ['svima', 'svi', 'sve', 'svakom'],
    answer: 'svima',
    en: 'Thank you to everyone!',
    tip: "'hvala' takes dative: svi → dative plural: svima",
  },
  {
    q: 'Koliko je godina ___?',
    opts: ['tebi', 'ti', 'tebe', 'tobom'],
    answer: 'tebi',
    en: 'How old are you?',
    tip: "Age expression uses dative. Long form 'tebi' in question position.",
  },
  {
    q: 'Nasuprot ___.',
    opts: ['kući', 'kuća', 'kuće', 'kućom'],
    answer: 'kući',
    en: 'Opposite the house.',
    tip: "'nasuprot' (opposite) takes dative: kuća → drop -a + -i → kući",
  },
  {
    q: 'Šaljem poruku ___.',
    opts: ['tati', 'tata', 'tate', 'tatom'],
    answer: 'tati',
    en: 'I am sending a message to my dad.',
    tip: 'Indirect object: tata (masc -a noun) → drop -a + -i → tati',
  },
  {
    q: 'Pomaže li ___?',
    opts: ['djeci', 'dijete', 'djece', 'djecom'],
    answer: 'djeci',
    en: 'Does she help the children?',
    tip: "'pomoći' + dative: djeca → djeci (irregular plural dative)",
  },
  {
    q: 'Recite ___.',
    opts: ['meni', 'ja', 'mene', 'mnom'],
    answer: 'meni',
    en: 'Tell me! (emphatic)',
    tip: "Long dative pronoun for emphasis: 'meni'. Short clitic form: 'mi'.",
  },
  {
    q: 'Slat ću pismo ___.',
    opts: ['mami', 'mama', 'mame', 'mamom'],
    answer: 'mami',
    en: 'I will send a letter to mom.',
    tip: 'Indirect object: mama → drop -a + -i → mami',
  },
  {
    q: 'Pišem ___.',
    opts: ['prijatelju', 'prijatelja', 'prijateljem', 'prijatelj'],
    answer: 'prijatelju',
    en: 'I am writing to my friend.',
    tip: "'pisati' (to write to) takes dative: prijatelj → prijatelju",
  },
  // ── 2026-07 depth expansion (+30): more governance patterns + PLURAL forms ──
  {
    q: 'Šaljem pismo ___.',
    opts: ['prijatelju', 'prijatelja', 'prijatelj', 'prijateljem'],
    answer: 'prijatelju',
    en: 'I am sending a letter to a friend.',
    tip: 'Recipient takes dative: prijatelj → prijatelju.',
  },
  {
    q: 'Pomažem ___ u kuhinji.',
    opts: ['mami', 'mamu', 'mama', 'mamom'],
    answer: 'mami',
    en: 'I help mum in the kitchen.',
    tip: "'Pomagati' governs the DATIVE: mama → mami.",
  },
  {
    q: 'Radujem se ___.',
    opts: ['ljetu', 'ljeto', 'ljeta', 'ljetom'],
    answer: 'ljetu',
    en: 'I am looking forward to summer.',
    tip: "'Radovati se' + dative: ljeto → ljetu.",
  },
  {
    q: 'Idem k ___.',
    opts: ['baki', 'baku', 'baka', 'bakom'],
    answer: 'baki',
    en: "I am going to grandma's.",
    tip: 'Direction to a person: k/ka + dative. Sibilarization: baka → baki.',
  },
  {
    q: 'Vjerujem svom ___.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    en: 'I trust my brother.',
    tip: "'Vjerovati' + dative: brat → bratu.",
  },
  {
    q: 'Ovaj kaput pripada ___.',
    opts: ['susjedi', 'susjedu', 'susjeda', 'susjedom'],
    answer: 'susjedi',
    en: 'This coat belongs to the (female) neighbour.',
    tip: "'Pripadati' + dative. Feminine susjeda → susjedi.",
  },
  {
    q: 'Čestitam ti na ___!',
    opts: ['uspjehu', 'uspjeh', 'uspjeha', 'uspjehom'],
    answer: 'uspjehu',
    en: 'I congratulate you on your success!',
    tip: "'Na' after čestitati takes locative — same form as dative: uspjeh → uspjehu.",
  },
  {
    q: 'Hvala ___ na pomoći.',
    opts: ['vama', 'vas', 'vi', 'vami'],
    answer: 'vama',
    en: 'Thank you (formal) for the help.',
    tip: "'Hvala' + dative of the person: vi → vama.",
  },
  {
    q: 'Obećao sam ___ da ću doći.',
    opts: ['sestri', 'sestru', 'sestra', 'sestrom'],
    answer: 'sestri',
    en: 'I promised my sister that I would come.',
    tip: 'Person promised-to takes dative: sestra → sestri.',
  },
  {
    q: 'Djeca se vesele ___.',
    opts: ['Božiću', 'Božić', 'Božića', 'Božićem'],
    answer: 'Božiću',
    en: 'The children are looking forward to Christmas.',
    tip: "'Veseliti se' + dative: Božić → Božiću.",
  },
  {
    q: 'Približavamo se ___.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    en: 'We are approaching the city.',
    tip: "'Približavati se' + dative: grad → gradu.",
  },
  {
    q: 'To se ___ ne sviđa.',
    opts: ['tati', 'tatu', 'tata', 'tatom'],
    answer: 'tati',
    en: 'Dad does not like that.',
    tip: "'Sviđati se' — the experiencer is dative: tata → tati.",
  },
  {
    q: 'Unatoč ___, izašli smo van.',
    opts: ['kiši', 'kišu', 'kiša', 'kišom'],
    answer: 'kiši',
    en: 'Despite the rain, we went outside.',
    tip: "'Unatoč' governs the DATIVE: kiša → kiši.",
  },
  {
    q: 'Zahvaljujući ___, položio sam ispit.',
    opts: ['profesoru', 'profesora', 'profesor', 'profesorom'],
    answer: 'profesoru',
    en: 'Thanks to the professor, I passed the exam.',
    tip: "'Zahvaljujući' + dative: profesor → profesoru.",
  },
  {
    q: 'Divim se njezinoj ___.',
    opts: ['hrabrosti', 'hrabrost', 'hrabrošću', 'hrabrostima'],
    answer: 'hrabrosti',
    en: 'I admire her courage.',
    tip: "'Diviti se' + dative. i-declension: hrabrost → hrabrosti.",
  },
  {
    q: 'Mačka prilazi ___.',
    opts: ['vratima', 'vrata', 'vratiju', 'vratama'],
    answer: 'vratima',
    en: 'The cat approaches the door.',
    tip: "PLURAL-only noun: vrata → vratima ('prilaziti' + dative).",
  },
  {
    q: 'Učiteljica objašnjava zadatak ___.',
    opts: ['učenicima', 'učenike', 'učenika', 'učenici'],
    answer: 'učenicima',
    en: 'The teacher explains the task to the pupils.',
    tip: 'PLURAL dative: učenici → učenicima.',
  },
  {
    q: 'Nosimo poklone ___.',
    opts: ['djevojčicama', 'djevojčice', 'djevojčica', 'djevojčici'],
    answer: 'djevojčicama',
    en: 'We bring presents to the girls.',
    tip: 'PLURAL feminine: djevojčice → djevojčicama.',
  },
  {
    q: 'Pišem poruku ___.',
    opts: ['roditeljima', 'roditelje', 'roditelja', 'roditelji'],
    answer: 'roditeljima',
    en: 'I am writing a message to my parents.',
    tip: 'PLURAL: roditelji → roditeljima.',
  },
  {
    q: 'Konobar donosi račun ___.',
    opts: ['gostima', 'goste', 'gostiju', 'gosti'],
    answer: 'gostima',
    en: 'The waiter brings the bill to the guests.',
    tip: 'PLURAL: gosti → gostima.',
  },
  {
    q: 'Baka priča priče ___.',
    opts: ['unucima', 'unuke', 'unuka', 'unuci'],
    answer: 'unucima',
    en: 'Grandma tells stories to her grandchildren.',
    tip: 'PLURAL: unuci → unucima.',
  },
  {
    q: 'Grad pomaže ___ nakon poplave.',
    opts: ['obiteljima', 'obitelji', 'obitelja', 'obiteljama'],
    answer: 'obiteljima',
    en: 'The city helps the families after the flood.',
    tip: 'PLURAL i-declension: obitelji → obiteljima.',
  },
  {
    q: 'Dajem vodu ___.',
    opts: ['psima', 'pse', 'pasa', 'psi'],
    answer: 'psima',
    en: 'I give water to the dogs.',
    tip: 'PLURAL: psi → psima (note the fleeting -a-: pas → psi).',
  },
  {
    q: 'Kupujemo sladoled ___.',
    opts: ['djeci', 'djecu', 'djece', 'djecom'],
    answer: 'djeci',
    en: 'We are buying the children ice cream.',
    tip: "Collective 'djeca' declines as feminine singular: djeca → djeci.",
  },
  {
    q: 'Novinar postavlja pitanje ___.',
    opts: ['ministru', 'ministra', 'ministar', 'ministrom'],
    answer: 'ministru',
    en: 'The journalist asks the minister a question.',
    tip: 'Person asked takes dative: ministar → ministru (fleeting -a-).',
  },
  {
    q: 'Ova pjesma je posvećena ___.',
    opts: ['majci', 'majku', 'majka', 'majkom'],
    answer: 'majci',
    en: 'This song is dedicated to mother.',
    tip: 'Sibilarization k→c: majka → majci.',
  },
  {
    q: 'Smijemo se ___, ne tebi!',
    opts: ['vicu', 'vic', 'vica', 'vicem'],
    answer: 'vicu',
    en: 'We are laughing at the joke, not at you!',
    tip: "'Smijati se' + dative: vic → vicu.",
  },
  {
    q: 'Javite se ___ sutra ujutro.',
    opts: ['liječnici', 'liječnicu', 'liječnica', 'liječnicom'],
    answer: 'liječnici',
    en: 'Contact the (female) doctor tomorrow morning.',
    tip: "'Javiti se' + dative. Feminine: liječnica → liječnici.",
  },
  {
    q: 'Sve to zahvaljujemo našim ___.',
    opts: ['bakama', 'bake', 'baka', 'baki'],
    answer: 'bakama',
    en: 'We owe everything to our grandmas.',
    tip: 'PLURAL: bake → bakama.',
  },
  {
    q: 'Nastavnik je zadovoljan, a to znači puno ___.',
    opts: ['studentima', 'studente', 'studenata', 'studenti'],
    answer: 'studentima',
    en: 'The teacher is satisfied, and that means a lot to the students.',
    tip: 'PLURAL: studenti → studentima.',
  },
];

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DativeDrill({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    shLocal(DATA)
      .slice(0, 20)
      .map((item) => ({ ...item, opts: shLocal([...item.opts]) })),
  );
  const total = q.length;
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);
  // Concept-teaching (2026-08-18): teach the concept BEFORE testing it —
  // the AspectDrillScreen pattern. Returning learners tap straight through.
  const [showIntro, setShowIntro] = useState(true);
  const {
    explain,
    request: requestExplain,
    reset: resetExplain,
  } = useExplainError('case_drill', getCurrentContentLevel());

  const cur = q[idx]!;
  const answered = chosen !== null;

  function pick(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === cur.answer) {
      setScore((s) => s + 1);
    } else {
      // Wrong answer → plain-English AI explanation (fail-soft; the static
      // tip below is always there regardless).
      void requestExplain(opt, cur.answer, cur.q);
    }
  }

  function next() {
    if (idx + 1 >= total) {
      if (!finishFired.current) {
        finishFired.current = true;
        const res = completeExercise({
          key: 'dative',
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
      resetExplain();
    }
  }

  if (showIntro && !done) {
    return (
      <div className="scr-wrap">
        {H('🤝 Dative Case', 'Indirect objects, giving, helping, liking', goBack)}
        <div style={{ marginTop: 12 }}>
          <CaseConceptIntro conceptId="dative" onStart={() => setShowIntro(false)} />
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="scr-wrap">
        {H('🤝 Dative Case', 'Indirect objects, giving, helping, liking', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Perfect! Dative mastered! 🏆'
              : score >= total * 0.8
                ? 'Great work! 💪'
                : 'Keep practising — dative is essential!'}
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
      {H('🤝 Dative Case', 'Indirect objects, giving, helping, liking', goBack)}
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
            color: '#64748b',
            marginBottom: 6,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          Fill the blank
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#0e7490', lineHeight: 1.4 }}>
          {cur.q}
        </div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{cur.en}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 16 }}>
          {cur.opts.map((opt: string) => {
            let bg = 'white';
            let bc = 'rgba(14,116,144,.12)';
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
                style={{ background: bg, borderColor: bc }}
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
              background: '#f0f9ff',
              borderRadius: 10,
              border: '1px solid #bae6fd',
              fontSize: 14,
              color: '#0369a1',
            }}
          >
            <strong>{chosen === cur.answer ? '✅ Correct!' : '❌ Incorrect.'}</strong> {cur.tip}
          </div>
        )}
        {answered && chosen !== cur.answer && <DrillExplainCard state={explain} />}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 16 }} onClick={next}>
            {idx + 1 >= total ? 'See results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}
