// src/components/practice/drills/B1ReportedSpeechDrill.tsx
//
// Engine-backed drill for the B1 lesson `reported-speech`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/reportedSpeechDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REPORTED_SPEECH_DRILL_DATA,
  REPORTED_SPEECH_MODE_LABELS,
} from '../../../data/drills/b1/reportedSpeechDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1ReportedSpeechDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1reportedspeech"
      title={'💬 Neizravni govor'}
      subtitle="Practice what the lesson taught"
      modeLabels={REPORTED_SPEECH_MODE_LABELS}
      data={REPORTED_SPEECH_DRILL_DATA}
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
