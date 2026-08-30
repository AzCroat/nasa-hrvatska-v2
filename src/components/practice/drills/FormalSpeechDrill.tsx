// src/components/practice/drills/FormalSpeechDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/formalSpeechDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FORMAL_SPEECH_DRILL_DATA,
  FORMAL_SPEECH_MODE_LABELS,
} from '../../../data/drills/formalSpeechDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FormalSpeechDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="govor"
      title="🥂 Svečani govor"
      subtitle="nazdravljam mladencima — i zašto je kratko ispravno"
      modeLabels={FORMAL_SPEECH_MODE_LABELS}
      data={FORMAL_SPEECH_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sala je ustala! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Svečani govor traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
