import React from 'react';
import ModeDrill from './ModeDrill';

// C1 — figurative idioms: recognise the non-literal meaning (the literal gloss
// is given as a tip). Knowing idiomatic meaning beyond the words is C1 territory.
const DATA = [
  {
    q: 'praviti od muhe slona',
    opts: [
      'to make a mountain out of a molehill',
      'to work very hard',
      'to tell a long story',
      'to raise animals',
    ],
    answer: 'to make a mountain out of a molehill',
    tip: "Literally 'to make an elephant out of a fly' — to exaggerate.",
  },
  {
    q: 'naći zajednički jezik',
    opts: [
      'to find common ground',
      'to learn a language',
      'to translate a text',
      'to lose an argument',
    ],
    answer: 'to find common ground',
    tip: "Literally 'to find a common language' — to reach mutual understanding.",
  },
  {
    q: 'kupiti mačka u vreći',
    opts: [
      'to buy something sight unseen',
      'to adopt a pet',
      'to get a great bargain',
      'to go shopping',
    ],
    answer: 'to buy something sight unseen',
    tip: "Literally 'to buy a cat in a bag' — to buy a pig in a poke.",
  },
  {
    q: 'vući nekoga za nos',
    opts: ['to deceive someone', 'to annoy someone', 'to help someone', 'to follow someone'],
    answer: 'to deceive someone',
    tip: "Literally 'to pull someone by the nose' — to mislead/fool them.",
  },
  {
    q: 'obećavati brda i doline',
    opts: [
      'to promise the moon',
      'to plan a hiking trip',
      'to describe the scenery',
      'to keep a promise',
    ],
    answer: 'to promise the moon',
    tip: "Literally 'to promise mountains and valleys' — to make extravagant promises.",
  },
  {
    q: 'pala mu sjekira u med',
    opts: [
      'he had a stroke of luck',
      'he made a big mistake',
      'he got injured',
      'he started cooking',
    ],
    answer: 'he had a stroke of luck',
    tip: "Literally 'his axe fell into honey' — unexpected good fortune.",
  },
  {
    q: 'bacati drvlje i kamenje (na nekoga)',
    opts: ['to harshly attack/criticise', 'to build a house', 'to clean the yard', 'to give gifts'],
    answer: 'to harshly attack/criticise',
    tip: "Literally 'to throw timber and stones' — to lambast someone.",
  },
  {
    q: 'držati nekome fige',
    opts: [
      'to keep fingers crossed for someone',
      'to owe someone money',
      'to be angry at someone',
      'to wait for someone',
    ],
    answer: 'to keep fingers crossed for someone',
    tip: "Literally 'to hold figs (crossed fingers)' — to wish someone luck.",
  },
  {
    q: 'biti na konju',
    opts: ['to be in a winning position', 'to be travelling', 'to be late', 'to be tired'],
    answer: 'to be in a winning position',
    tip: "Literally 'to be on the horse' — to have the upper hand / be sorted.",
  },
  {
    q: 'trla baba lan',
    opts: ['idle, pointless activity', 'hard manual labour', 'a family gathering', 'a clever plan'],
    answer: 'idle, pointless activity',
    tip: "From 'trla baba lan da joj prođe dan' — doing something just to pass the time.",
  },
  {
    q: 'gledati kroz prste (nekome)',
    opts: ['to turn a blind eye', 'to watch closely', 'to count money', 'to be jealous'],
    answer: 'to turn a blind eye',
    tip: "Literally 'to look through one's fingers' — to overlook a fault.",
  },
  {
    q: 'dobiti nogu',
    opts: ['to get fired/dumped', 'to win a prize', 'to start running', 'to get hurt'],
    answer: 'to get fired/dumped',
    tip: "Literally 'to get the foot' — to be dismissed or broken up with.",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'What does this idiom mean?' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function IdiomDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="idiomdrill"
      title={'💬 Idioms'}
      subtitle={'Figurative expressions — beyond the literal'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Idioms mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — idioms take time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
