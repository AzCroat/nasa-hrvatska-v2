// src/components/practice/drills/AbstractDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/abstractDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ABSTRACT_DRILL_DATA, ABSTRACT_MODE_LABELS } from '../../../data/drills/abstractDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AbstractDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="apstraktno"
      title="💡 Apstraktne teme"
      subtitle="nastavak -ost, i-sklonidba, ovisiti O i odnositi se NA"
      modeLabels={ABSTRACT_MODE_LABELS}
      data={ABSTRACT_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — pojmovno čisto! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Apstraktne teme traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
