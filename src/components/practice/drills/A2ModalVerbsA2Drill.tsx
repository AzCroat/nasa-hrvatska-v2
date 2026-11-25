// src/components/practice/drills/A2ModalVerbsA2Drill.tsx
//
// Engine-backed drill for the A2 lesson `modal-verbs-a2`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/modalVerbsA2Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MODAL_VERBS_A2_DRILL_DATA,
  MODAL_VERBS_A2_MODE_LABELS,
} from '../../../data/drills/a2/modalVerbsA2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ModalVerbsA2Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2modalverbsa2"
      title="🙏 Modalni glagoli"
      subtitle="Practice what the lesson taught"
      modeLabels={MODAL_VERBS_A2_MODE_LABELS}
      data={MODAL_VERBS_A2_DRILL_DATA}
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
