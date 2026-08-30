// src/components/practice/drills/RegistersDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/registersDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { REGISTERS_DRILL_DATA, REGISTERS_MODE_LABELS } from '../../../data/drills/registersDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RegistersDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="registri"
      title="🎩 Registri u pisanju"
      subtitle="pasiv i poimeničenje — dvije operacije, tri registra"
      modeLabels={REGISTERS_MODE_LABELS}
      data={REGISTERS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — svaki registar vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Registri traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
