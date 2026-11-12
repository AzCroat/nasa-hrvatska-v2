// src/components/practice/drills/A1SoundsPalatalsDrill.tsx
//
// Engine-backed drill for the A1 lesson `sounds-palatals` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/soundsPalatalsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SOUNDS_PALATALS_DRILL_DATA,
  SOUNDS_PALATALS_MODE_LABELS,
} from '../../../data/drills/a1/soundsPalatalsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1SoundsPalatalsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1soundspalatals"
      title="The Soft Sounds: Č Ć Dž Đ Lj Nj"
      subtitle="Practise what the lesson taught"
      modeLabels={SOUNDS_PALATALS_MODE_LABELS}
      data={SOUNDS_PALATALS_DRILL_DATA}
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
