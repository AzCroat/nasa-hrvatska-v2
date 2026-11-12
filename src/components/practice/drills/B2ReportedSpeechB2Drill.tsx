// src/components/practice/drills/B2ReportedSpeechB2Drill.tsx
//
// Engine-backed drill for the B2 lesson `reported-speech-b2` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/reportedSpeechB2Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REPORTED_SPEECH_B2_DRILL_DATA,
  REPORTED_SPEECH_B2_MODE_LABELS,
} from '../../../data/drills/b2/reportedSpeechB2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ReportedSpeechB2Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2reportedspeechb2"
      title="Rekao je da mu ga je dao"
      subtitle="Practise what the lesson taught"
      modeLabels={REPORTED_SPEECH_B2_MODE_LABELS}
      data={REPORTED_SPEECH_B2_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
