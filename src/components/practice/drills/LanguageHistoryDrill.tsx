// src/components/practice/drills/LanguageHistoryDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/languageHistoryDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LANGUAGE_HISTORY_DRILL_DATA,
  LANGUAGE_HISTORY_MODE_LABELS,
} from '../../../data/drills/languageHistoryDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LanguageHistoryDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="povijestjezika"
      title="📜 Povijest jezika"
      subtitle="što, ča, kaj — i jat koji objašnjava pola nepravilnosti"
      modeLabels={LANGUAGE_HISTORY_MODE_LABELS}
      data={LANGUAGE_HISTORY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve na svom mjestu! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Povijest jezika traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
