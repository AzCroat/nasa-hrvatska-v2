// src/components/practice/drills/ReportedSpeechB1Drill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/reportedSpeechDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REPORTED_SPEECH_DRILL_DATA,
  REPORTED_SPEECH_MODE_LABELS,
} from '../../../data/drills/reportedSpeechDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ReportedSpeechB1Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prepricavanje"
      title="🗣️ Neizravni govor"
      subtitle="rekao je da dolazi — Croatian never shifts the tense"
      modeLabels={REPORTED_SPEECH_MODE_LABELS}
      data={REPORTED_SPEECH_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — neizravni govor je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Neizravni govor traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
