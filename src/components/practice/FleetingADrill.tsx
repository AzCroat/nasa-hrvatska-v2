import React from 'react';
import ModeDrill from './ModeDrill';

const DATA = [
  // l → o in past tense (masculine singular)
  {
    q: 'On ___ cijelu noć. (pisati = to write)',
    opts: ['pisao', 'pišao', 'pisali', 'pisal'],
    answer: 'pisao',
    en: 'He wrote all night.',
    tip: 'Masc past tense l→o: pisati → pisa-l → pisa-o = pisao',
  },
  {
    q: 'On ___ svaki dan. (čitati = to read)',
    opts: ['čitao', 'čital', 'čitali', 'čitaje'],
    answer: 'čitao',
    en: 'He read every day.',
    tip: 'l→o: čitati → čita-l → čita-o = čitao',
  },
  {
    q: 'On ___ u tvornici. (raditi = to work)',
    opts: ['radio', 'radil', 'radili', 'radijo'],
    answer: 'radio',
    en: 'He worked in the factory.',
    tip: 'l→o: raditi → radi-l → radi-o = radio',
  },
  {
    q: 'On ___ kuću. (graditi = to build)',
    opts: ['gradio', 'gradil', 'gradili', 'gradijo'],
    answer: 'gradio',
    en: 'He built a house.',
    tip: 'l→o: graditi → gradi-l → gradi-o = gradio',
  },
  {
    q: 'On ___ bolestan. (biti = to be)',
    opts: ['bio', 'bil', 'bilio', 'bili'],
    answer: 'bio',
    en: 'He was sick.',
    tip: 'biti → bi-l → bi-o = bio. The most important l→o: bio/bila/bilo',
  },
  {
    q: 'On ___ u školu. (ići = to go)',
    opts: ['išao', 'išal', 'išali', 'išo'],
    answer: 'išao',
    en: 'He went to school.',
    tip: 'ići → irregular: iš-ao. Note the stem change: ići → išao',
  },
  {
    q: 'On ___ film. (gledati = to watch)',
    opts: ['gledao', 'gledo', 'gledal', 'gledali'],
    answer: 'gledao',
    en: 'He watched the film.',
    tip: 'l→o: gledati → gleda-l → gleda-o = gledao',
  },
  {
    q: 'On ___ hrvatski. (govoriti = to speak)',
    opts: ['govorio', 'govori', 'govorili', 'govorijo'],
    answer: 'govorio',
    en: 'He spoke Croatian.',
    tip: 'l→o: govoriti → govori-l → govori-o = govorio',
  },
  {
    q: 'On ___ na odmor. (doći = to come/arrive)',
    opts: ['došao', 'doći', 'došli', 'došo'],
    answer: 'došao',
    en: 'He arrived on vacation.',
    tip: 'doći → irregular: došao. Major irregular verb — memorise this form.',
  },
  {
    q: 'On ___ more. (vidjeti = to see)',
    opts: ['vidio', 'vidjel', 'vidjeli', 'vidijo'],
    answer: 'vidio',
    en: 'He saw the sea.',
    tip: 'l→o: vidjeti → vidi-l → vidi-o = vidio',
  },
  // Fleeting-a in nouns (mobile vowel)
  {
    q: "Genitive singular of 'otac' (father) is:",
    opts: ['oca', 'otaca', 'otca', 'ocu'],
    answer: 'oca',
    en: 'of the father',
    tip: "Fleeting-a: otac → the -a- between 't' and 'c' disappears → oc- + -a → oca",
  },
  {
    q: "Accusative of 'pisac' (writer, animate) is:",
    opts: ['pisca', 'pisac', 'pisacu', 'piscem'],
    answer: 'pisca',
    en: 'the writer (as object)',
    tip: 'Fleeting-a: pisac → pisc- (drop -a-) → pisca (accusative = genitive for animate)',
  },
  {
    q: "Dative singular of 'lonac' (pot) is:",
    opts: ['loncu', 'lonac', 'lonca', 'loncem'],
    answer: 'loncu',
    en: 'to the pot',
    tip: 'Fleeting-a: lonac → lonc- (drop -a-) → loncu (dative: -u)',
  },
  {
    q: "Genitive singular of 'vjetar' (wind) is:",
    opts: ['vjetra', 'vjetara', 'vjetru', 'vjetrom'],
    answer: 'vjetra',
    en: 'of the wind',
    tip: "Fleeting-a: vjetar → vjetr- (the -a- between 't' and 'r' disappears) → vjetra",
  },
  {
    q: "Genitive singular of 'san' (dream/sleep) is:",
    opts: ['sna', 'sana', 'snu', 'snom'],
    answer: 'sna',
    en: 'of the dream',
    tip: 'Fleeting-a: san → the -a- drops → sn- + -a → sna',
  },
  // Fleeting-a in adjectives
  {
    q: "Feminine form of 'dobar' (good) is:",
    opts: ['dobra', 'dobara', 'dobrim', 'dobrih'],
    answer: 'dobra',
    en: 'good (feminine)',
    tip: "Fleeting-a in adjective: dobar → the -a- between 'b' and 'r' drops → dobr- + -a → dobra",
  },
  {
    q: "Feminine form of 'slobodan' (free) is:",
    opts: ['slobodna', 'slobodana', 'slobodnoj', 'slobodnih'],
    answer: 'slobodna',
    en: 'free (feminine)',
    tip: 'Fleeting-a: slobodan → the -a- before -n drops → slobodn- + -a → slobodna',
  },
  {
    q: "Feminine form of 'bistar' (clear/bright) is:",
    opts: ['bistra', 'bistara', 'bistrom', 'bistrih'],
    answer: 'bistra',
    en: 'clear/bright (feminine)',
    tip: "Fleeting-a: bistar → the -a- between 't' and 'r' drops → bistr- + -a → bistra",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the correct form' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FleetingADrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="fleetinga"
      title={'✨ Fleeting-A & L→O'}
      subtitle={'Mobile vowels and past tense l→o changes'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! C1 phonology mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep at it — these patterns become automatic!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
