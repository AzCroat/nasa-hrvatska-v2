import React, { useState, useEffect } from 'react';
import { getMasteryProfile } from '../../lib/masteryLedger';
import { getCurrentContentLevel, type SkillKey } from '../../lib/cefrCertification';

/**
 * SkillRadar — five skills, from the mastery ledger (rewritten 2026-09-23).
 *
 * WHAT IT USED TO DO, AND WHY IT WAS WRONG. It read five fields off `stats`:
 *
 *     Vocab      (st.wl || 0) / 2
 *     Grammar    (st.gc || 0) * 10
 *     Listening  (st.listen || 0) * 20
 *     Speaking   (st.speak || 0) * 10
 *     Reading    (st.rc || 0) * 5
 *
 * **`wl`, `listen` and `speak` DO NOT EXIST on `Stats`** — not in the type, not
 * in `statsReducer`, not in the merge, not in `sanitizeStats`, and written by
 * nothing anywhere in `src`. So three of the five axes were `undefined || 0` and
 * plotted ZERO for every learner, forever, while printing a literal **"0%"**
 * beside each.
 *
 * It did not stop at displaying them. `weakIdx` takes the lowest score and the
 * component renders **"Focus here →"** on it; with three axes tied at zero the
 * reduce keeps the FIRST, which is index 0 — **Vocab**. Every learner who has
 * ever opened this card has been told their weakest skill is vocabulary and to
 * focus there, on the evidence of a field that does not exist. That is the
 * "lightest skill" defect again: a RECOMMENDATION derived from a measurement
 * that was never taken.
 *
 * The two surviving axes were not honest either. `gc * 10` asserts that ten
 * grammar completions is 100% of something, and `rc * 5` that twenty readings
 * is — conversion factors nobody defined, rendered as a percentage.
 *
 * WHY THE LEDGER. `lib/masteryLedger` is the app's canonical per-skill
 * measurement and already carries exactly these skills: a 0–1 `score` from real
 * graded outcomes, a `samples` count, and a `tested` flag that says whether
 * there is enough evidence to speak at all. It is what `buildPlanReason` and
 * `weakestProductionKind` already consult to decide what to recommend, so the
 * radar and the recommender now answer from one source instead of disagreeing.
 *
 * AN UNMEASURED SKILL IS NOT A ZERO. A skill with no cell, or with too few
 * samples to be `tested`, renders as "not measured yet" — never as 0%, and
 * never as the weakest. That is the rule the concept map, `productionReason`
 * and the weak-topics card all follow: "nothing measured" and "nothing there"
 * are different facts.
 */
interface RadarSkill {
  label: string;
  key: SkillKey;
  /** 0–100, or null when the ledger has no verdict to report. */
  score: number | null;
}

export default function SkillRadar() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Read at the level the outcomes were RECORDED at — the same expression
  // `recordExerciseOutcome` keys its cells on, so the radar cannot read a level
  // nothing was written to.
  const profile = getMasteryProfile(getCurrentContentLevel());
  const skills: RadarSkill[] = (
    [
      ['Vocab', 'vocab'],
      ['Grammar', 'grammar'],
      ['Listening', 'listening'],
      ['Speaking', 'speaking'],
      ['Reading', 'reading'],
    ] as Array<[string, SkillKey]>
  ).map(([label, key]) => {
    const m = profile[key];
    return { label, key, score: m && m.tested ? Math.round(m.score * 100) : null };
  });
  const measured = skills.filter((s) => s.score !== null);

  const cx = 100,
    cy = 100,
    R = 80;
  const angles = [0, 72, 144, 216, 288]; // degrees, top = Vocab

  function polarToXY(angleDeg: number, r: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function pentagonPoints(r: number) {
    return angles
      .map((a) => {
        const p = polarToXY(a, r);
        return `${p.x},${p.y}`;
      })
      .join(' ');
  }

  const dataPoints = animated
    ? skills.map((s, i) => polarToXY(angles[i]!, ((s.score ?? 0) / 100) * R))
    : skills.map((_, i) => polarToXY(angles[i]!, 0));

  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  // "Focus here" may only ever point at a skill the ledger has MEASURED. With
  // three axes structurally stuck at zero this used to resolve to index 0
  // (Vocab) for every learner alive. -1 means "say nothing", which is the
  // correct output when nothing has been measured.
  const weakIdx =
    measured.length > 0
      ? skills.indexOf(
          measured.reduce((a, b) => ((b.score as number) < (a.score as number) ? b : a)),
        )
      : -1;

  const labelOffsets = [
    { dx: 0, dy: -12 }, // top (Vocab)
    { dx: 14, dy: -6 }, // upper-right (Grammar)
    { dx: 10, dy: 12 }, // lower-right (Listening)
    { dx: -10, dy: 12 }, // lower-left (Speaking)
    { dx: -14, dy: -6 }, // upper-left (Reading)
  ];

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--card-b)',
        borderRadius: 16,
        padding: '16px',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 800,
          color: 'var(--subtext)',
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          marginBottom: 12,
        }}
      >
        📊 Skill Profile
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
          {/* Guide pentagons at 25%, 50%, 75% */}
          {[0.25, 0.5, 0.75].map((pct) => (
            <polygon
              key={pct}
              points={pentagonPoints(R * pct)}
              fill="none"
              stroke="var(--bar-bg)"
              strokeWidth="1"
            />
          ))}
          {/* Outer pentagon */}
          <polygon
            points={pentagonPoints(R)}
            fill="none"
            stroke="var(--bar-bg)"
            strokeWidth="1.5"
          />
          {/* Axis lines */}
          {angles.map((a, i) => {
            const p = polarToXY(a, R);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="var(--bar-bg)"
                strokeWidth="1"
              />
            );
          })}
          {/* Data polygon */}
          <polygon
            points={dataPolygon}
            fill="var(--accent, var(--info))"
            fillOpacity="0.25"
            stroke="var(--accent, var(--info))"
            strokeWidth="2"
            style={{ transition: animated ? 'all 0.6s ease' : 'none' }}
          />
          {/* Data point dots */}
          {dataPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill="var(--accent, var(--info))" />
          ))}
          {/* Labels */}
          {skills.map((s, i) => {
            const vertex = polarToXY(angles[i]!, R);
            const off = labelOffsets[i] ?? { dx: 0, dy: 0 };
            const lx = vertex.x + off.dx * 2.2;
            const ly = vertex.y + off.dy * 2.2;
            return (
              <g key={i}>
                <text
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="var(--subtext)"
                >
                  {s.label}
                </text>
                <text
                  x={lx}
                  y={ly + 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontWeight="600"
                  fill="var(--accent, var(--info))"
                >
                  {s.score === null ? '—' : `${s.score}%`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Horizontal skill bars */}
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {skills.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 58,
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--subtext)',
                textAlign: 'right',
                flexShrink: 0,
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                flex: 1,
                height: 7,
                borderRadius: 4,
                background: 'var(--bar-bg)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: 4,
                  background: i === weakIdx ? 'var(--error)' : 'var(--accent, var(--info))',
                  width: animated ? `${s.score ?? 0}%` : '0%',
                  transition: 'width 0.6s ease',
                }}
              />
            </div>
            <div
              data-testid={`radar-score-${s.key}`}
              style={{
                width: s.score === null ? 68 : 30,
                fontSize: 10,
                fontWeight: 700,
                color: 'var(--subtext)',
                whiteSpace: 'nowrap',
              }}
            >
              {s.score === null ? 'not measured' : `${s.score}%`}
            </div>
            {i === weakIdx && (
              <div
                data-testid="radar-focus"
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: 'var(--error)',
                  whiteSpace: 'nowrap',
                }}
              >
                Focus here →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
