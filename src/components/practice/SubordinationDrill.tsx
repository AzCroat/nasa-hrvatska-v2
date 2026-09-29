import React from 'react';
import ModeDrill from './ModeDrill';

// B2 — subordinate clauses: choosing the right subordinating conjunction
// (concessive, causal, temporal, final, conditional) and relative pronoun (koji)
// in the correct case for complex sentences.
const DATA = [
  {
    q: 'Došao je ___ je padala kiša. (although)',
    opts: ['iako', 'jer', 'dok', 'ako'],
    answer: 'iako',
    en: 'He came although it was raining.',
    tip: "Concessive 'iako' = although. 'jer' = because, 'dok' = while, 'ako' = if.",
  },
  {
    q: 'Ostani kod kuće ___ ne ozdraviš. (until)',
    opts: ['dok', 'čim', 'jer', 'iako'],
    answer: 'dok',
    en: 'Stay home until you recover.',
    tip: "'dok ne' + present = until. 'čim' = as soon as.",
  },
  {
    q: 'Učim hrvatski ___ mogu razgovarati s rodbinom. (so that)',
    opts: ['da', 'jer', 'iako', 'dok'],
    answer: 'da',
    en: 'I study Croatian so that I can talk with relatives.',
    tip: "Final clause 'da' + present = so that / in order to.",
  },
  {
    q: '___ je bila umorna, nastavila je raditi. (even though)',
    opts: ['Iako', 'Budući da', 'Čim', 'Ako'],
    answer: 'Iako',
    en: 'Even though she was tired, she kept working.',
    tip: "Concessive at clause start: 'Iako'. 'Budući da' = since/because.",
  },
  {
    q: '___ nemam vremena, ne mogu doći. (because — formal)',
    opts: ['Budući da', 'Iako', 'Dok', 'Da'],
    answer: 'Budući da',
    en: 'Since I have no time, I cannot come.',
    tip: "'Budući da' = since/because (formal causal, clause-initial).",
  },
  {
    q: 'Nazovi me ___ stigneš. (as soon as)',
    opts: ['čim', 'dok', 'iako', 'jer'],
    answer: 'čim',
    en: 'Call me as soon as you arrive.',
    tip: "'čim' = as soon as (temporal).",
  },
  {
    q: 'Čovjek ___ sam jučer vidio je nestao. (whom — acc., animate)',
    opts: ['kojeg', 'koji', 'koje', 'kojem'],
    answer: 'kojeg',
    en: 'The man whom I saw yesterday disappeared.',
    tip: 'Relative pronoun, masc. animate direct object → accusative = genitive form: kojeg.',
  },
  {
    q: 'Žena ___ pomažem je susjeda. (whom — dative)',
    opts: ['kojoj', 'koju', 'koja', 'koje'],
    answer: 'kojoj',
    en: 'The woman whom I help is a neighbour.',
    tip: "pomagati takes dative → relative pronoun feminine dative: 'kojoj'.",
  },
  {
    q: 'Knjiga ___ čitam je zanimljiva. (which — acc.)',
    opts: ['koju', 'koja', 'koje', 'kojom'],
    answer: 'koju',
    en: 'The book which I am reading is interesting.',
    tip: 'Feminine inanimate direct object → accusative: koju (knjigu → koju).',
  },
  {
    q: 'Reci mi ___ si zakasnio. (why)',
    opts: ['zašto', 'jer', 'da', 'iako'],
    answer: 'zašto',
    en: 'Tell me why you were late.',
    tip: "Indirect question uses 'zašto' (why); 'jer' only answers, never asks.",
  },
  {
    q: 'Radit ću ___ ti pomogao. (in order to)',
    opts: ['kako bih', 'jer', 'iako', 'dok'],
    answer: 'kako bih',
    en: 'I will work in order to help you.',
    tip: "Purpose with conditional: 'kako bih' + participle = in order to (1sg).",
  },
  {
    q: 'Ne znam ___ doći. (whether/if)',
    opts: ['hoće li', 'ako', 'iako', 'jer'],
    answer: 'hoće li',
    en: "I don't know whether he will come.",
    tip: "Indirect yes/no question = verb + 'li' ('hoće li'); 'ako' is conditional, not 'whether'.",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the correct connector' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SubordinationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="subordination"
      title={'🔗 Subordinate Clauses'}
      subtitle={'Conjunctions and relative pronouns'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Complex sentences mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — conjunctions take time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
