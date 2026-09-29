// src/components/learn/UnitProductionScreen.tsx
//
// THE OTHER HALF OF THE BAR (Step 3, increment 4, 2026-09-26).
//
// One task per visit — write, or speak — briefed from the unit's own five lessons'
// objectives and graded by the SAME evaluators everything else in this app uses:
// `/api/correct` mode `writeeval` for writing, `/api/speaking-coach` for speech.
// One evaluator, one standard; nothing new is authored and no second rubric exists.
//
// WHY THE SCORE DOES NOT GATE. It is recorded, shown, and fed to the mastery ledger
// and the error taxonomy — it just does not decide whether the course opens the next
// unit. The accuracy bar is the unit test, which is deterministic and re-takeable;
// putting a second threshold here would gate a learner's course progress on a
// language model's judgement of their prose. See `unitProduction.ts`.
//
// THE MIC IS NEVER REQUIRED. The spoken task takes the browser recogniser when there
// is one and TYPED Croatian otherwise, counting identically — the rule
// `GuidedSpeakingScreen` already holds, for the same reason: the transcript is what
// the coach grades, and refusing a learner for want of a microphone would make
// course progress depend on their hardware.
//
// A REFUSED EVALUATOR IS RECORDED, NOT SWALLOWED. `markProductionUnavailable` says
// the learner produced and the grader would not answer, and the gate lets that unit
// through — course progress must not depend on a live AI service the learner does
// not control. A later successful grade clears it. The learner is told which it was,
// in the app's own voice, via `aiFailure`.
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { H } from '../../data';
import { _aiPost } from '../../lib/aiPost';
import {
  failureFromResponse,
  failureFromError,
  failureFromStatus,
  reportAiFailure,
  type AiFailure,
} from '../../lib/aiFailure';
import { recordMasteryEvent } from '../../lib/masteryLedger';
import { applyWritingErrorsToAdaptive } from '../../lib/adaptiveFeedback';
import { requestSpeakingCoach } from '../../lib/speakingCoach';
import { readCurriculumSpine } from '../../lib/curriculumProgress';
import { buildCourseUnits, type CourseUnit } from '../../lib/courseUnits';
import { COURSE_UNIT_TITLES } from '../../data/courseUnitTitles';
import { recordUnitProduction, markProductionUnavailable } from '../../lib/courseUnitProgress';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import {
  readUnitProductionRequest,
  clearUnitProductionRequest,
} from '../../lib/unitProductionRequest';
import {
  briefPrompt,
  countWords,
  meetsFloor,
  unitProductionBrief,
  type ProductionKind,
} from '../../lib/unitProduction';
import type { CefrLevel } from '../../lib/cefr';
import type { CurriculumEntry } from '../../lib/curriculum';
import { canDoFor } from '../../data/courseUnitCanDo';
import { heardCroatian } from '../../lib/heardCroatian';
import SpeakCheck from '../practice/SpeakCheck';
import { unconfirmedWords, type SpokenCheck } from '../../lib/spokenCheck';

/** XP for a graded production task. Paid once per task per unit. */
export const UNIT_PRODUCTION_XP = 30;

interface Props {
  goBack: () => void;
  award: (xp: number, kind?: string) => void;
}

interface Change {
  errorType?: string;
  type?: string;
}

export default function UnitProductionScreen({ goBack, award }: Props) {
  const req = useMemo(() => readUnitProductionRequest(), []);
  const spine = useMemo<CurriculumEntry[]>(() => readCurriculumSpine(), []);
  const units = useMemo(() => buildCourseUnits(spine, COURSE_UNIT_TITLES), [spine]);
  const unit: CourseUnit | null = req ? (units.find((u) => u.id === req.unitId) ?? null) : null;
  const kind: ProductionKind = req?.kind ?? 'write';
  const brief = useMemo(() => (unit ? unitProductionBrief(unit, kind) : null), [unit, kind]);

  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<AiFailure | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [listening, setListening] = useState(false);
  const [recFailed, setRecFailed] = useState(false);
  // The spoken answer, checked against its own recording (components/practice/SpeakCheck).
  const [speakCheck, setSpeakCheck] = useState<SpokenCheck | null>(null);
  const paid = useRef(false);

  const recRef = useRef<any>(null);

  useEffect(() => clearUnitProductionRequest, []);

  const words = countWords(text);
  const enough = brief ? meetsFloor(text, brief.minWords) : false;

  const grade = useCallback(async () => {
    if (!brief || !unit || busy || !enough) return;
    setBusy(true);
    setFailure(null);
    try {
      if (kind === 'write') {
        const res = await _aiPost('/api/correct', {
          mode: 'writeeval',
          prompt: briefPrompt(brief),
          text: text.trim(),
          params: { level: brief.level, writingPrompt: briefPrompt(brief) },
        });
        if (!res.ok) {
          const f = await failureFromResponse(res);
          setFailure(f);
          reportAiFailure('unit-production-write', f);
          markProductionUnavailable(unit.id);
          // The learner PRODUCED; the grader would not answer. That excuses the task
          // (above) and must free the session slot too, or Today's Session sits at
          // N-1/N — only `award` signalled it, and a refusal pays nothing.
          signalSessionCompleteIfActive('unitproduction');
          return;
        }
        const data = (await res.json()) as { score?: number; changes?: Change[] };
        if (typeof data.score !== 'number') {
          const f = failureFromStatus(200, 'eval_unparseable');
          setFailure(f);
          reportAiFailure('unit-production-write', f);
          markProductionUnavailable(unit.id);
          signalSessionCompleteIfActive('unitproduction');
          return;
        }
        recordUnitProduction(unit.id, 'write', data.score);
        setScore(data.score);
        recordMasteryEvent({
          level: brief.level as CefrLevel,
          skill: 'writing',
          score: Math.max(0, Math.min(1, data.score / 100)),
          weight: 2,
        });
        applyWritingErrorsToAdaptive((data.changes || []).map((c) => c.errorType || c.type));
      } else {
        const outcome = await requestSpeakingCoach({
          prompt: briefPrompt(brief),
          transcript: text.trim(),
          level: brief.level,
          unconfirmed: unconfirmedWords(speakCheck),
        });
        if (!outcome || !outcome.ok) {
          const f = outcome?.ok === false ? outcome.failure : failureFromStatus(200, 'too_short');
          setFailure(f);
          markProductionUnavailable(unit.id);
          signalSessionCompleteIfActive('unitproduction');
          return;
        }
        // The coach already recorded mastery and the error loops.
        const overall = outcome.data.overall;
        recordUnitProduction(unit.id, 'speak', overall);
        setScore(Math.round(overall * 100));
      }
      if (!paid.current) {
        paid.current = true;
        award(UNIT_PRODUCTION_XP, kind === 'write' ? 'writing' : 'speaking');
      }
    } catch (e) {
      const f = failureFromError(e);
      setFailure(f);
      reportAiFailure(`unit-production-${kind}`, f);
      markProductionUnavailable(unit.id);
      signalSessionCompleteIfActive('unitproduction');
    } finally {
      setBusy(false);
    }
  }, [brief, unit, busy, enough, kind, text, award, speakCheck]);

  const toggleMic = useCallback(() => {
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) return;
    if (listening) {
      try {
        recRef.current?.stop();
      } catch {
        /* already stopped */
      }
      setListening(false);
      return;
    }
    try {
      const rec = new SR();
      rec.lang = 'hr-HR';
      rec.continuous = true;
      rec.interimResults = false;

      // NAMED `speech`, NOT `ev`. `ev.<field>` is how two AI-contract guards spell
      // "a field read off a parsed response body", so a SpeechRecognition event
      // called `ev` gets its DOM members reported as fields the writing evaluator
      // fails to send. A real name collision with a guard's own vocabulary, and
      // renaming it is the honest fix — the alternative is an exemption asserting
      // something about a guard rather than about the code.
      rec.onresult = (speech: any) => {
        let said = '';
        for (let i = speech.resultIndex; i < speech.results.length; i++) {
          said += heardCroatian(speech.results[i][0].transcript) + ' ';
        }
        setText((prev) => (prev ? `${prev} ${said}`.trim() : said.trim()));
      };
      rec.onend = () => setListening(false);
      rec.onerror = () => {
        setListening(false);
        setRecFailed(true);
      };
      recRef.current = rec;
      rec.start();
      setRecFailed(false);
      setListening(true);
    } catch {
      setListening(false);
    }
  }, [listening]);

  if (!unit || !brief) {
    return (
      <div>
        {H('Show what you know', 'Unit production', goBack)}
        <Box tone="calm" testId="unit-production-missing">
          This screen needs a unit. Open it from your course map.
        </Box>
      </div>
    );
  }

  const heading = kind === 'write' ? 'Write it' : 'Say it';

  if (score !== null) {
    return (
      <div data-testid="unit-production-result">
        {H(heading, `Unit ${unit.index} · ${unit.title}`, goBack)}
        <div
          style={{
            padding: 18,
            borderRadius: 16,
            border: '1.5px solid rgba(22,163,74,.45)',
            background: 'rgba(22,163,74,.07)',
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--heading)' }}>{score}/100</div>
          <div style={{ fontSize: 13, fontWeight: 800, marginTop: 6, color: 'var(--heading)' }}>
            Recorded — this half of the unit is done.
          </div>
          {/* THE SCORE DOES NOT GATE, and the learner is told so rather than left
              to guess whether a low number blocks them. */}
          <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 6, lineHeight: 1.5 }}>
            The score is feedback, not a bar: what the course asks for is that you produce it. Your
            mistakes have been added to what you practise next.
          </div>
        </div>
        <Primary testId="unit-production-done" onClick={goBack}>
          Back to your course
        </Primary>
      </div>
    );
  }

  return (
    <div data-testid="unit-production">
      {H(heading, `Unit ${unit.index} · ${unit.title}`, goBack)}

      <div
        style={{
          padding: 14,
          borderRadius: 14,
          background: 'var(--card)',
          border: '1.5px solid var(--card-b)',
          marginBottom: 14,
        }}
      >
        <div style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--heading)' }}>{brief.task}</div>
        <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 8, marginBottom: 4 }}>
          Show that you can:
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {(canDoFor(unit.id).length ? canDoFor(unit.id) : brief.objectives).map((o) => (
            <li
              key={o}
              data-testid="unit-production-cando"
              style={{ fontSize: 12.5, color: 'var(--heading)', lineHeight: 1.55, marginBottom: 3 }}
            >
              {o}
            </li>
          ))}
        </ul>
      </div>

      {kind === 'speak' && (
        <button
          data-testid="unit-production-mic"
          onClick={toggleMic}
          style={{
            width: '100%',
            padding: '11px 14px',
            marginBottom: 10,
            borderRadius: 12,
            border: '1.5px solid var(--card-b)',
            background: listening ? 'rgba(204,0,0,.08)' : 'var(--bar-bg)',
            fontSize: 13,
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
            color: 'var(--heading)',
          }}
        >
          {listening ? '■ Stop recording' : '🎤 Speak — or type below, it counts the same'}
        </button>
      )}

      <textarea
        className="write-area"
        data-testid="unit-production-input"
        lang="hr"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={kind === 'write' ? 'Napiši na hrvatskom…' : 'Što si rekao/rekla…'}
        rows={7}
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: 12,
          border: '1.5px solid var(--card-b)',
          fontSize: 14.5,
          lineHeight: 1.6,
          fontFamily: "'Outfit',sans-serif",
          resize: 'vertical',
          background: 'var(--card)',
          color: 'var(--heading)',
        }}
      />

      <div
        data-testid="unit-production-count"
        style={{
          fontSize: 11.5,
          color: enough ? 'var(--ink-green)' : 'var(--subtext)',
          fontWeight: 700,
          margin: '6px 2px 12px',
        }}
      >
        {words} of {brief.minWords} words
      </div>
      {kind === 'speak' && (
        <SpeakCheck
          listening={listening}
          transcript={text}
          recognizerFailed={recFailed}
          onCheck={setSpeakCheck}
          appends
        />
      )}

      {failure && (
        <Box tone="bad" testId="unit-production-failed">
          {failure.message} Nothing has been taken away — your course carries on either way, and you
          can try this again whenever you like.
        </Box>
      )}

      <Primary testId="unit-production-submit" onClick={grade} disabled={busy || !enough}>
        {busy ? 'Grading…' : failure ? 'Try again' : 'Submit'}
      </Primary>
    </div>
  );
}

function Box({
  tone,
  testId,
  children,
}: {
  tone: 'calm' | 'bad';
  testId: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-testid={testId}
      role="status"
      style={{
        padding: '13px 15px',
        borderRadius: 12,
        background: tone === 'bad' ? 'rgba(204,0,0,.08)' : 'rgba(0,0,0,.05)',
        border: tone === 'bad' ? '1px solid rgba(204,0,0,.35)' : '1px solid rgba(0,0,0,.08)',
        fontSize: 13,
        fontWeight: 700,
        lineHeight: 1.55,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function Primary({
  testId,
  onClick,
  disabled,
  children,
}: {
  testId: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '13px 16px',
        borderRadius: 12,
        border: 'none',
        background: disabled ? 'var(--card-b)' : 'var(--accent,#0e7490)',
        color: disabled ? 'var(--subtext)' : '#fff',
        fontSize: 14,
        fontWeight: 800,
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: "'Outfit',sans-serif",
      }}
    >
      {children}
    </button>
  );
}
