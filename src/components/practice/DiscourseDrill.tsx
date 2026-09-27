import React from 'react';
import ModeDrill from './ModeDrill';

// C1 — discourse connectors: linking ideas in formal/written register
// (consequence, concession, addition, contrast). Cohesion at text level is C1.
const DATA = [
  {
    mode: 'posljedica',
    q: 'Cijene rastu; ___, kupovna moć pada. (therefore)',
    opts: ['stoga', 'naime', 'unatoč tome', 'doduše'],
    answer: 'stoga',
    en: 'Prices are rising; therefore, purchasing power is falling.',
    tip: "'stoga' = therefore (consequence).",
  },
  {
    mode: 'dodavanje',
    q: 'Projekt je uspješan; ___, dobio je nagradu. (moreover)',
    opts: ['štoviše', 'naime', 'unatoč tome', 'inače'],
    answer: 'štoviše',
    en: 'The project is successful; moreover, it won an award.',
    tip: "'štoviše' = moreover / what's more (addition, intensifying).",
  },
  {
    mode: 'suprotnost',
    q: 'Bilo je hladno; ___ smo otišli na izlet. (despite that)',
    opts: ['unatoč tome', 'stoga', 'naime', 'dakle'],
    answer: 'unatoč tome',
    en: 'It was cold; despite that, we went on the trip.',
    tip: "'unatoč tome' = despite that (concession).",
  },
  {
    mode: 'suprotnost',
    q: 'Plan je dobar; ___, ima rizika. (however)',
    opts: ['međutim', 'stoga', 'naime', 'dakle'],
    answer: 'međutim',
    en: 'The plan is good; however, there are risks.',
    tip: "'međutim' = however (contrast).",
  },
  {
    mode: 'suprotnost',
    q: 'Volim grad; ___, ne bih ondje živio. (admittedly)',
    opts: ['doduše', 'štoviše', 'stoga', 'naime'],
    answer: 'doduše',
    en: "I love the city; admittedly, I wouldn't live there.",
    tip: "'doduše' = admittedly / though (qualifying concession).",
  },
  {
    mode: 'dodavanje',
    q: 'On nije lijen; ___, vrlo je marljiv. (on the contrary)',
    opts: ['dapače', 'stoga', 'naime', 'ipak'],
    answer: 'dapače',
    en: "He isn't lazy; on the contrary, he's very diligent.",
    tip: "'dapače' = on the contrary / indeed (reinforcing reversal).",
  },
  {
    mode: 'posljedica',
    q: 'Treba učiti; ___ ćeš pasti ispit. (otherwise)',
    opts: ['inače', 'naime', 'štoviše', 'doduše'],
    answer: 'inače',
    en: "You need to study; otherwise you'll fail the exam.",
    tip: "'inače' = otherwise (alternative consequence).",
  },
  {
    mode: 'posljedica',
    q: 'Sve je spremno; ___ možemo početi. (accordingly)',
    opts: ['prema tome', 'unatoč tome', 'naime', 'doduše'],
    answer: 'prema tome',
    en: 'Everything is ready; accordingly, we can begin.',
    tip: "'prema tome' = accordingly / so (drawing a conclusion).",
  },
  {
    mode: 'dodavanje',
    q: 'Zatvoreno je; ___, ne radi se nedjeljom. (namely)',
    opts: ['naime', 'štoviše', 'unatoč tome', 'međutim'],
    answer: 'naime',
    en: "It's closed; namely, they don't work on Sundays.",
    tip: "'naime' = namely / that is (explanatory).",
  },
  {
    mode: 'posljedica',
    q: 'Kasnio je; ___, propustio je sastanak. (consequently)',
    opts: ['posljedično', 'naime', 'doduše', 'štoviše'],
    answer: 'posljedično',
    en: 'He was late; consequently, he missed the meeting.',
    tip: "'posljedično' = consequently (formal consequence).",
  },
  {
    mode: 'posljedica',
    q: 'Vlak je otkazan; ___ smo morali uzeti autobus. (that is why)',
    opts: ['zato', 'naime', 'doduše', 'štoviše'],
    answer: 'zato',
    en: 'The train was cancelled; that is why we had to take the bus.',
    tip: "'zato' = that is why (consequence; at home in speech and writing alike).",
  },
  {
    mode: 'posljedica',
    q: 'Svi su se složili; ___, prijedlog je prihvaćen. (so / thus)',
    opts: ['dakle', 'međutim', 'štoviše', 'doduše'],
    answer: 'dakle',
    en: 'Everyone agreed; so the proposal was accepted.',
    tip: "'dakle' = so, thus (drawing the conclusion from what came before).",
  },
  {
    mode: 'posljedica',
    q: 'Mjerenja su dala iste rezultate; ___ zaključujemo da je hipoteza potvrđena. (on that basis)',
    opts: ['na temelju toga', 'unatoč tome', 'osim toga', 's druge strane'],
    answer: 'na temelju toga',
    en: 'The measurements gave the same results; on that basis we conclude the hypothesis is confirmed.',
    tip: "'na temelju toga' = on that basis (academic and formal conclusions).",
  },
  {
    mode: 'posljedica',
    q: 'Nije bilo dovoljno prijava; ___ je natječaj poništen. (as a result)',
    opts: ['slijedom toga', 'naime', 'doduše', 'dapače'],
    answer: 'slijedom toga',
    en: 'There were not enough applications; as a result, the call was cancelled.',
    tip: "'slijedom toga' = as a result (administrative and legal style).",
  },
  {
    mode: 'suprotnost',
    q: 'Stan je malen; ___, lokacija je izvrsna. (on the other hand)',
    opts: ['s druge strane', 'stoga', 'štoviše', 'naime'],
    answer: 's druge strane',
    en: 'The flat is small; on the other hand, the location is excellent.',
    tip: "'s druge strane' = on the other hand (weighing one side against another).",
  },
  {
    mode: 'suprotnost',
    q: 'Trudio se cijelu godinu; ___ nije položio ispit. (nevertheless)',
    opts: ['ipak', 'stoga', 'štoviše', 'naime'],
    answer: 'ipak',
    en: 'He worked hard all year; nevertheless, he did not pass the exam.',
    tip: "'ipak' = nevertheless, still (the expected result did not follow).",
  },
  {
    mode: 'suprotnost',
    q: 'Ideja je zanimljiva, ___ bi provedba bila preskupa. (but)',
    opts: ['no', 'stoga', 'naime', 'štoviše'],
    answer: 'no',
    en: 'The idea is interesting, but carrying it out would be too expensive.',
    tip: "'no' = but — the written, more formal equivalent of 'ali'.",
  },
  {
    mode: 'suprotnost',
    q: '___ je padala kiša, utakmica je odigrana. (although)',
    opts: ['Iako', 'Stoga', 'Štoviše', 'Naime'],
    answer: 'Iako',
    en: 'Although it was raining, the match was played.',
    tip: "'iako' = although. It opens a clause of its own, unlike 'unatoč tome', which points back to the previous sentence.",
  },
  {
    mode: 'suprotnost',
    q: 'Govorio je o uspjesima; o gubicima ___ nije rekao ni riječ. (on the other hand)',
    opts: ['pak', 'stoga', 'naime', 'dakle'],
    answer: 'pak',
    en: 'He talked about the successes; about the losses, on the other hand, he said nothing.',
    tip: "'pak' = on the other hand. It follows the word it contrasts ('o gubicima pak'), which is typical of written Croatian.",
  },
  {
    mode: 'dodavanje',
    q: 'Hotel je blizu plaže; ___, cijene su povoljne. (besides that)',
    opts: ['osim toga', 'međutim', 'stoga', 'unatoč tome'],
    answer: 'osim toga',
    en: 'The hotel is near the beach; besides that, the prices are reasonable.',
    tip: "'osim toga' = besides that, in addition.",
  },
  {
    mode: 'dodavanje',
    q: 'Tvrtka posluje s gubitkom; ___, troši više nego što zarađuje. (in other words)',
    opts: ['drugim riječima', 'unatoč tome', 'inače', 'doduše'],
    answer: 'drugim riječima',
    en: 'The company is running at a loss; in other words, it spends more than it earns.',
    tip: "'drugim riječima' = in other words (restating the same point more plainly).",
  },
  {
    mode: 'dodavanje',
    q: 'Plaća je dobra; ___ dobivaš i dodatne slobodne dane. (on top of that)',
    opts: ['uz to', 'međutim', 'naime', 'stoga'],
    answer: 'uz to',
    en: 'The pay is good; on top of that, you get extra days off.',
    tip: "'uz to' = on top of that (another point in the same direction).",
  },
  {
    mode: 'dodavanje',
    q: 'Mnogi hrvatski gradovi privlače turiste, ___ Dubrovnik i Split. (for example)',
    opts: ['primjerice', 'međutim', 'stoga', 'doduše'],
    answer: 'primjerice',
    en: 'Many Croatian towns attract tourists, for example Dubrovnik and Split.',
    tip: "'primjerice' = for example — the formal equivalent of 'na primjer'.",
  },
  {
    mode: 'dodavanje',
    q: 'Projekt kasni; ___, troškovi su veći od planiranih. (furthermore)',
    opts: ['nadalje', 'doduše', 'ipak', 'inače'],
    answer: 'nadalje',
    en: 'The project is late; furthermore, the costs are higher than planned.',
    tip: "'nadalje' = furthermore (the next point in a list, typical of reports).",
  },
];

// Three question types, 8 each (expanded 2026-09-27 from a single 10-item list), so
// the run is 4 of each — the same shape as every other engine drill.
const MODE_LABEL: Record<string, string> = {
  posljedica: '➡️ Posljedica i zaključak',
  suprotnost: '↔️ Suprotnost i dopuštanje',
  dodavanje: '➕ Dodavanje i objašnjenje',
};

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DiscourseDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="discourse"
      title={'🪡 Discourse Connectors'}
      subtitle={'Linking ideas in formal register'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Perfect! Cohesion mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — connectors take time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
