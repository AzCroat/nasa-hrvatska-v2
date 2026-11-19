import React, { useEffect, useMemo, useState } from 'react';
import { preloadAudio } from '../../data';
import { getWordOfDay, getPhraseOfDay } from '../../lib/wordOfDay.js';
import { useApp } from '../../context/AppContext';
import { useStats } from '../../context/StatsContext';
import DailyInputCard from '../home/DailyInputCard';
import WeakWordsPanel from '../home/WeakWordsPanel';
import TodaysDiscoveries from '../home/TodaysDiscoveries';

const DOORS = [
  {
    id: 'more-open-practice',
    tab: 'practice',
    title: 'Practice',
    sub: 'Games and drills at your course level',
  },
  {
    id: 'more-open-talk',
    tab: 'ai',
    title: 'Talk',
    sub: 'Conversation practice with the AI tutor',
  },
  {
    id: 'more-open-croatia',
    tab: 'croatia',
    title: 'Croatia',
    sub: 'Culture, cities, history and news',
  },
];

// The optional extras. The course lives on Today and Course; everything here is a
// door into a screen that used to be a tab of its own, plus the three cards that
// used to sit under the daily session on Home.
export default function MoreTab({
  setTab,
  sCurEx,
}: {
  setTab: (tab: string) => void;
  sCurEx?: (screen: string) => void;
}) {
  const { setScr } = useApp();
  const { stats } = useStats();

  // Word/phrase of the day refresh after midnight when the app regains visibility.
  const [dayIdx, setDayIdx] = useState(() => Math.floor(Date.now() / 86400000));
  useEffect(() => {
    const check = () => {
      const d = Math.floor(Date.now() / 86400000);
      setDayIdx((prev) => (prev !== d ? d : prev));
    };
    document.addEventListener('visibilitychange', check);
    return () => document.removeEventListener('visibilitychange', check);
  }, []);
  // dayIdx signals a calendar day change; getWordOfDay reads Date internally.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wod = useMemo(() => getWordOfDay(), [dayIdx]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pod = useMemo(() => getPhraseOfDay(), [dayIdx]);
  useEffect(() => {
    if (wod?.hr) preloadAudio(wod.hr);
  }, [wod]);

  return (
    <div data-testid="more-tab">
      <div style={{ marginBottom: 14, fontFamily: "'Outfit',sans-serif" }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: 'var(--heading)' }}>More</h1>
        <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--subtext)', lineHeight: 1.4 }}>
          Optional extras. Your course is on the Today and Course tabs.
        </p>
      </div>

      {DOORS.map((d) => (
        <button
          key={d.id}
          type="button"
          data-testid={d.id}
          onClick={() => setTab(d.tab)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            width: '100%',
            textAlign: 'left',
            padding: '14px 16px',
            marginBottom: 10,
            borderRadius: 14,
            border: '1.5px solid var(--card-b)',
            background: 'var(--card)',
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          <span style={{ flex: 1, minWidth: 0 }}>
            <span
              style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}
            >
              {d.title}
            </span>
            <span style={{ display: 'block', fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
              {d.sub}
            </span>
          </span>
          <span style={{ fontSize: 15, color: 'var(--subtext)', flexShrink: 0 }}>→</span>
        </button>
      ))}

      <DailyInputCard stats={stats} setScr={setScr} sCurEx={sCurEx} />
      <WeakWordsPanel setScr={setScr} />
      <TodaysDiscoveries wod={wod} pod={pod} setScr={setScr} />
    </div>
  );
}
