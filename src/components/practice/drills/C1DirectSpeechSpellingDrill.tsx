// src/components/practice/drills/C1DirectSpeechSpellingDrill.tsx
//
// Engine-backed drill for the C1 lesson `direct-speech-spelling` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/directSpeechSpellingDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DIRECT_SPEECH_SPELLING_DRILL_DATA,
  DIRECT_SPEECH_SPELLING_MODE_LABELS,
} from '../../../data/drills/c1/directSpeechSpellingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1DirectSpeechSpellingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1directspeechspelling"
      title="Writing Direct Speech"
      subtitle="Practise what the lesson taught"
      modeLabels={DIRECT_SPEECH_SPELLING_MODE_LABELS}
      data={DIRECT_SPEECH_SPELLING_DRILL_DATA}
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
