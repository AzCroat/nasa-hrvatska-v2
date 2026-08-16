import React, { useState, useRef, useEffect } from 'react';
import { H, Bar, speak } from '../../data';
import { useStats } from '../../context/StatsContext';
import { useApp } from '../../context/AppContext';
import { rnd } from '../../lib/random.js';
import { markQuest } from '../../lib/quests.js';
import { getUserCefr, cefrRank } from '../../lib/cefr';
import { ssGet } from '../../lib/safeStorage';

import DialogueScenarioMenu from './DialogueScenarioMenu';
import DialogueResultsScreen from './DialogueResultsScreen';
import DialogueGuidedMode from './DialogueGuidedMode';
import DialogueAiMode from './DialogueAiMode';
import InteractionPathBanner from './InteractionPathBanner';
import { SCENARIOS } from './dialogueScenarios.js';
import { _aiPost } from '../../lib/aiPost';
import { shouldShowAdvancedBridge } from '../../lib/conversationLevel';
import {
  getNextInteractionUnit,
  getInteractionProgress,
  markInteractionUnitDone,
} from '../../lib/interactionCurriculum';

// Normalize Croatian diacritics for lenient free-text comparison
function normCro(s: string) {
  return s
    .toLowerCase()
    .replace(/[čć]/g, 'c')
    .replace(/š/g, 's')
    .replace(/ž/g, 'z')
    .replace(/đ/g, 'd')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Build a shuffled options array for a single turn; returns { opts, correctIdx }
function shuffleTurnOpts(turn: any) {
  const indices = turn.opts.map((_: unknown, i: number) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffledOpts = indices.map((i: number) => turn.opts[i]);
  const correctIdx = indices.indexOf(turn.answer);
  return { opts: shuffledOpts, correctIdx };
}

export default function DialogueSim({
  award,
}: {
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}) {
  const { level: userLevel, stats } = useStats();
  // Spontaneous-conversation default (owner directive 2026-08-14): when the
  // DAILY SESSION launches the conversation anchor at B1+, open the AI
  // conversation directly — the budget raise + ledger reconciliation exist to
  // fund exactly this. Guided stays one tap away and remains the default for
  // Practice-tab visits, A1/A2, and whenever AI limits answer 429 (the client
  // already degrades calmly via classifyAiLimit).
  const sessionAiFirst =
    ssGet('nh_session_started') === 'dialogue' &&
    cefrRank(getUserCefr(stats?.xp || 0, stats?.lc || 0, stats?.gc || 0)) >= cefrRank('B1');
  const { setScr, sCurEx } = useApp();
  const finishFired = useRef(false);
  const [scenario, setScenario] = useState<any>(null);
  const [turnIdx, setTurnIdx] = useState(0);
  const [shuffledTurns, setShuffledTurns] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [done, setDone] = useState(false);
  const [freeMode, setFreeMode] = useState(false);
  const [freeInput, setFreeInput] = useState('');
  const [freeResult, setFreeResult] = useState<any>(null);

  // AI Conversation Mode state
  const [aiMode, setAiMode] = useState(false);
  const [aiHistory, setAiHistory] = useState<any[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiCoaching, setAiCoaching] = useState<any>(null);
  const [aiTurns, setAiTurns] = useState(0);
  const [aiDone, setAiDone] = useState(false);
  const [aiError, setAiError] = useState('');

  // Speak NPC line whenever a new guided turn loads
  useEffect(() => {
    if (!scenario || !scenario.turns[turnIdx] || aiMode) return;
    const line = scenario.turns[turnIdx].line;
    if (line && !line.startsWith('[')) speak(line);
  }, [scenario, turnIdx, aiMode]);

  function startScenario(s: any) {
    finishFired.current = false;
    setScenario(s);
    setShuffledTurns(s.turns.map(shuffleTurnOpts));
    setTurnIdx(0);
    setScore(0);
    setAnswered(false);
    setSelected(-1);
    setDone(false);
    setFreeInput('');
    setFreeResult(null);
    setAiMode(sessionAiFirst);
    setAiHistory([]);
    setAiInput('');
    setAiLoading(false);
    setAiCoaching(null);
    setAiTurns(0);
    setAiDone(false);
    setAiError('');
  }

  function handleSelect(i: number) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === shuffledTurns[turnIdx]?.correctIdx) {
      setScore((sc) => sc + 1);
    }
  }

  function handleFreeSubmit() {
    if (answered || !freeInput.trim()) return;
    const turn = scenario.turns[turnIdx];
    const correctAnswer = turn.opts[turn.answer];
    const userTrimmed = freeInput.trim().toLowerCase();
    const correctTrimmed = correctAnswer.toLowerCase();
    const matched =
      userTrimmed === correctTrimmed || normCro(userTrimmed) === normCro(correctTrimmed);
    setFreeResult({ matched, input: freeInput.trim(), correct: correctAnswer });
    setAnswered(true);
    if (matched) {
      setScore((sc) => sc + 1);
    }
  }

  function handleContinue() {
    const nextIdx = turnIdx + 1;
    if (nextIdx >= scenario.turns.length) {
      if (!finishFired.current) {
        finishFired.current = true;
        if (award) {
          // `score` already includes the final turn: handleSelect/handleFreeSubmit
          // incremented it on this turn's answer before Continue was tapped (a
          // separate click, so the state has flushed). Re-adding `lastCorrect`
          // here double-counted the last correct answer, over-awarding 6 XP and
          // contradicting the score shown on the results screen.
          award(score * 6, false, 'speaking');
        }
        markQuest('speak');
        // Content-Rec #9: this scenario counts toward the conversation path.
        markInteractionUnitDone(scenario.id);
      }
      setDone(true);
    } else {
      setTurnIdx(nextIdx);
      setAnswered(false);
      setSelected(-1);
      setFreeInput('');
      setFreeResult(null);
    }
  }

  function goBack() {
    setScenario(null);
    setDone(false);
    setAnswered(false);
    setSelected(-1);
    setTurnIdx(0);
    setScore(0);
    setShuffledTurns([]);
    setFreeInput('');
    setFreeResult(null);
    setAiMode(false);
    setAiHistory([]);
    setAiInput('');
    setAiLoading(false);
    setAiCoaching(null);
    setAiTurns(0);
    setAiDone(false);
    setAiError('');
  }

  async function sendAiMessage() {
    if (!aiInput.trim() || aiLoading || aiDone) return;
    const userMsg = aiInput.trim();
    setAiInput('');
    setAiLoading(true);
    setAiError('');
    const newHistory = [...aiHistory, { role: 'user', content: userMsg, id: Date.now() }];
    setAiHistory(newHistory);
    try {
      // _aiPost attaches the userContext payload (incl. active-vocab targets) so
      // the AI partner weaves in the learner's words in context (Rec #3 part 2).
      const res = await _aiPost(
        '/api/dialogue',
        {
          scenario_id: scenario.id,
          userMessage: userMsg,
          // Cap to last 14 messages (7 turns) — prevents context window overflow on long sessions
          history: aiHistory.slice(-14),
          level: userLevel || 'A2',
        },
        { signal: AbortSignal.timeout(25000) },
      );
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setAiHistory([...newHistory, { role: 'assistant', content: data.reply, id: Date.now() + 1 }]);
      setAiCoaching(data.coaching || null);
      setAiTurns((t) => t + 1);
    } catch {
      setAiError('Could not reach Maja. Please try again.');
      // Roll back the optimistic user turn but put the text back in the box so
      // the learner can resend it rather than losing what they typed.
      setAiHistory(aiHistory);
      setAiInput(userMsg);
    } finally {
      setAiLoading(false);
    }
  }

  // --- MENU SCREEN ---
  if (!scenario) {
    const lvl = String(userLevel || 'A1');
    // Route to the advanced (B2–C2) AIConversation scenarios (Content-Rec #4 / #9).
    const goAdvanced = () => {
      sCurEx?.('aiconvo');
      setScr('aiconvo');
    };
    // Content-Rec #9: the structured conversation path — what to practise next.
    const nextUnit = getNextInteractionUnit(lvl);
    const progress = getInteractionProgress();
    return (
      <DialogueScenarioMenu
        scenarios={SCENARIOS}
        onSelect={startScenario}
        userLevel={lvl}
        onAdvanced={goAdvanced}
        topBanner={
          <InteractionPathBanner
            nextUnit={nextUnit}
            progress={progress}
            showAdvancedBridge={shouldShowAdvancedBridge(lvl)}
            onStart={() => {
              const s = SCENARIOS.find((x: { id: string }) => x.id === nextUnit?.id);
              if (s) startScenario(s);
            }}
            onAdvanced={goAdvanced}
          />
        }
      />
    );
  }

  const totalTurns = scenario.turns.length;

  // --- RESULTS SCREEN ---
  if (done) {
    return (
      <DialogueResultsScreen
        scenario={scenario}
        score={score}
        totalTurns={totalTurns}
        onBack={goBack}
      />
    );
  }

  // --- CONVERSATION SCREEN ---
  const turn = scenario.turns[turnIdx];
  const shuffled = shuffledTurns[turnIdx] || { opts: turn.opts, correctIdx: turn.answer };
  const isCorrect = selected === shuffled.correctIdx;

  return (
    <div className="scr-wrap">
      {H('💬 ' + scenario.title, scenario.subtitle, goBack)}
      <Bar v={turnIdx + 1} mx={totalTurns} h={6} color="#0e7490" />

      <div
        style={{
          marginTop: 16,
          marginBottom: 8,
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--subtext)',
        }}
      >
        Turn {turnIdx + 1} of {totalTurns}
      </div>

      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => {
            setAiMode(false);
            setAiHistory([]);
            setAiInput('');
            setAiTurns(0);
            setAiDone(false);
            setAiCoaching(null);
          }}
          style={{
            flex: 1,
            padding: '9px',
            borderRadius: 10,
            border: 'none',
            cursor: 'pointer',
            background: !aiMode ? '#0e7490' : 'var(--card)',
            color: !aiMode ? '#fff' : 'var(--subtext)',
            fontWeight: 700,
            fontSize: 12,
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          📋 Guided Practice
        </button>
        <button
          onClick={() => {
            setAiMode(true);
            setAiHistory([]);
            setAiInput('');
            setAiTurns(0);
            setAiDone(false);
            setAiCoaching(null);
          }}
          style={{
            flex: 1,
            padding: '9px',
            borderRadius: 10,
            border: 'none',
            cursor: 'pointer',
            background: aiMode ? '#7c3aed' : 'var(--card)',
            color: aiMode ? '#fff' : 'var(--subtext)',
            fontWeight: 700,
            fontSize: 12,
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          ✨ AI Conversation
        </button>
      </div>

      {aiMode ? (
        <DialogueAiMode
          scenario={scenario}
          aiHistory={aiHistory}
          aiLoading={aiLoading}
          aiCoaching={aiCoaching}
          aiError={aiError}
          aiInput={aiInput}
          aiDone={aiDone}
          aiTurns={aiTurns}
          onInputChange={setAiInput}
          onSend={sendAiMessage}
          onFinish={() => {
            if (!finishFired.current) {
              finishFired.current = true;
              if (award) award(aiTurns * 5, false, 'speaking');
              // Content-Rec #9: an AI conversation on this scenario also
              // completes its conversation-path unit.
              markInteractionUnitDone(scenario.id);
            }
            setAiDone(true);
          }}
          onBack={goBack}
          finishFired={finishFired}
          award={award}
        />
      ) : (
        <DialogueGuidedMode
          scenario={scenario}
          turnIdx={turnIdx}
          totalTurns={totalTurns}
          turn={turn}
          shuffled={shuffled}
          answered={answered}
          selected={selected}
          isCorrect={isCorrect}
          freeMode={freeMode}
          freeInput={freeInput}
          freeResult={freeResult}
          onSelect={handleSelect}
          onFreeInput={setFreeInput}
          onFreeSubmit={handleFreeSubmit}
          onContinue={handleContinue}
          onBack={goBack}
          onToggleFreeMode={() => {
            setFreeMode((m) => !m);
            setFreeInput('');
            setFreeResult(null);
          }}
          onSwitchToAi={() => {
            setAiMode(true);
          }}
        />
      )}
    </div>
  );
}
