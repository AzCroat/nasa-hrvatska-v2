import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';

export const DATA = [
  {
    q: '___ čita knjigu.',
    opts: ['Ana', 'Anu', 'Ane', 'Anom'],
    answer: 'Ana',
    en: 'Ana reads a book.',
    tip: 'Subject takes nominative. The doer of the action stays in its base form: Ana.',
  },
  {
    q: '___ trči u parku.',
    opts: ['Marko', 'Marka', 'Marku', 'Markom'],
    answer: 'Marko',
    en: 'Marko runs in the park.',
    tip: 'Masc names ending in -o keep -o in nominative singular: Marko.',
  },
  {
    q: '___ piše pismo.',
    opts: ['Učitelj', 'Učitelja', 'Učitelju', 'Učiteljem'],
    answer: 'Učitelj',
    en: 'The teacher writes a letter.',
    tip: "Masc 'učitelj' has zero ending (no suffix) in nominative singular.",
  },
  {
    q: '___ kuha juhu.',
    opts: ['Mama', 'Mamu', 'Mami', 'Mamom'],
    answer: 'Mama',
    en: 'Mom cooks soup.',
    tip: 'Fem nouns ending in -a in nominative singular: mama.',
  },
  {
    q: '___ spava na podu.',
    opts: ['Mačka', 'Mačku', 'Mački', 'Mačkom'],
    answer: 'Mačka',
    en: 'The cat sleeps on the floor.',
    tip: "Fem 'mačka' — nominative singular ends in -a.",
  },
  {
    q: '___ dolazi sutra.',
    opts: ['Brat', 'Brata', 'Bratu', 'Bratom'],
    answer: 'Brat',
    en: 'My brother is coming tomorrow.',
    tip: "Masc 'brat' has zero ending in nominative singular.",
  },
  {
    q: 'Moj otac je ___.',
    opts: ['liječnik', 'liječnika', 'liječniku', 'liječnikom'],
    answer: 'liječnik',
    en: 'My father is a doctor.',
    tip: "After 'je' (is), the predicate noun takes nominative: liječnik.",
  },
  {
    q: 'Ona je ___.',
    opts: ['učiteljica', 'učiteljicu', 'učiteljici', 'učiteljicom'],
    answer: 'učiteljica',
    en: 'She is a teacher.',
    tip: "Predicate nominative after 'je' — fem 'učiteljica'.",
  },
  {
    q: 'To je ___.',
    opts: ['knjiga', 'knjigu', 'knjizi', 'knjigom'],
    answer: 'knjiga',
    en: 'This is a book.',
    tip: "After 'to je' (this is), noun stays in nominative: knjiga.",
  },
  {
    q: 'Ovo je ___.',
    opts: ['kuća', 'kuću', 'kući', 'kućom'],
    answer: 'kuća',
    en: 'This is a house.',
    tip: "After 'ovo je' the noun is in nominative — fem 'kuća'.",
  },
  {
    q: 'Hrvatska je ___.',
    opts: ['zemlja', 'zemlju', 'zemlji', 'zemljom'],
    answer: 'zemlja',
    en: 'Croatia is a country.',
    tip: "Predicate nominative — fem 'zemlja'.",
  },
  {
    q: '___ trče u parku.',
    opts: ['Djeca', 'Djecu', 'Djece', 'Djecom'],
    answer: 'Djeca',
    en: 'Children run in the park.',
    tip: "'djeca' is a collective noun taking plural verb agreement — nominative form: djeca.",
  },
  {
    q: '___ se igraju.',
    opts: ['Studenti', 'Studente', 'Studentima', 'Studenata'],
    answer: 'Studenti',
    en: 'Students are playing.',
    tip: 'Masc plural nominative ends in -i: student -> studenti.',
  },
  {
    q: '___ pjevaju.',
    opts: ['Djevojke', 'Djevojaka', 'Djevojkama', 'Djevojku'],
    answer: 'Djevojke',
    en: 'Girls are singing.',
    tip: 'Fem plural nominative — djevojka -> djevojke.',
  },
  {
    q: '___ su lijepa.',
    opts: ['Sela', 'Sele', 'Selima', 'Selo'],
    answer: 'Sela',
    en: 'The villages are pretty.',
    tip: 'Neut nouns in -o have plural in -a: selo (sg) -> sela (pl).',
  },
  {
    q: 'Muški rod (nom sg): ___',
    opts: ['Brat', 'Brata', 'Sestra', 'Sestrom'],
    answer: 'Brat',
    en: 'Masculine (nom sg): brat.',
    tip: 'Masc nouns in nom sg typically end in a consonant — brat.',
  },
  {
    q: 'Ženski rod (nom sg): ___',
    opts: ['Mama', 'Mami', 'Mamom', 'Mame'],
    answer: 'Mama',
    en: 'Feminine (nom sg): mama.',
    tip: 'Fem nouns in nom sg typically end in -a — mama.',
  },
  {
    q: 'Srednji rod (nom sg): ___',
    opts: ['Selo', 'Sela', 'Selu', 'Selom'],
    answer: 'Selo',
    en: 'Neuter (nom sg): selo.',
    tip: 'Neut nouns in nom sg typically end in -o or -e — selo.',
  },
  {
    q: 'Muški rod (nom sg): ___',
    opts: ['prozor', 'prozora', 'prozoru', 'prozorom'],
    answer: 'prozor',
    en: 'Masculine (nom sg): prozor (window).',
    tip: 'Masc inanimate noun with zero ending in nominative — prozor.',
  },
  {
    q: 'Ženski rod (nom pl): ___',
    opts: ['žene', 'žena', 'ženama', 'ženu'],
    answer: 'žene',
    en: 'Feminine (nom pl): žene (women).',
    tip: 'Fem plural nominative: žena (sg) -> žene (pl).',
  },
  // ── 2026-07 depth expansion (+30): predicates, plural subjects, agreement ──
  {
    q: '___ kuha ručak.',
    opts: ['Baka', 'Baku', 'Bake', 'Bakom'],
    answer: 'Baka',
    en: 'Grandma is cooking lunch.',
    tip: 'The doer stays in the base (nominative) form: baka.',
  },
  {
    q: '___ lete prema jugu.',
    opts: ['Ptice', 'Pticama', 'Ptica', 'Pticu'],
    answer: 'Ptice',
    en: 'The birds fly south.',
    tip: 'PLURAL subject: ptica → ptice (feminine pl. nominative -e).',
  },
  {
    q: '___ su na stolu.',
    opts: ['Ključevi', 'Ključeve', 'Ključeva', 'Ključevima'],
    answer: 'Ključevi',
    en: 'The keys are on the table.',
    tip: 'PLURAL masculine with -ev- extension: ključ → ključevi.',
  },
  {
    q: 'Moja ___ radi u bolnici.',
    opts: ['teta', 'tetu', 'tete', 'tetom'],
    answer: 'teta',
    en: 'My aunt works at the hospital.',
    tip: 'Subject in nominative: teta.',
  },
  {
    q: '___ je glavni grad Hrvatske.',
    opts: ['Zagreb', 'Zagreba', 'Zagrebu', 'Zagrebom'],
    answer: 'Zagreb',
    en: 'Zagreb is the capital of Croatia.',
    tip: "Subject of 'biti': nominative — Zagreb.",
  },
  {
    q: '___ padaju sa stabla.',
    opts: ['Jabuke', 'Jabuka', 'Jabukama', 'Jabuku'],
    answer: 'Jabuke',
    en: 'Apples are falling from the tree.',
    tip: 'PLURAL feminine subject: jabuka → jabuke.',
  },
  {
    q: 'Ovo ___ je jako staro.',
    opts: ['selo', 'sela', 'selu', 'selom'],
    answer: 'selo',
    en: 'This village is very old.',
    tip: 'Neuter subject stays -o: selo.',
  },
  {
    q: '___ se igraju u dvorištu.',
    opts: ['Djeca', 'Djecu', 'Djece', 'Djeci'],
    answer: 'Djeca',
    en: 'The children play in the yard.',
    tip: "Collective 'djeca' is the subject form (with plural verb!).",
  },
  {
    q: 'Na nebu su tamni ___.',
    opts: ['oblaci', 'oblake', 'oblaka', 'oblacima'],
    answer: 'oblaci',
    en: 'There are dark clouds in the sky.',
    tip: 'PLURAL with sibilarization k→c: oblak → oblaci.',
  },
  {
    q: '___ je otvoren do osam.',
    opts: ['Dućan', 'Dućana', 'Dućanu', 'Dućanom'],
    answer: 'Dućan',
    en: 'The shop is open until eight.',
    tip: 'Subject: dućan (nominative).',
  },
  {
    q: 'Njegovi ___ žive u Osijeku.',
    opts: ['roditelji', 'roditelje', 'roditelja', 'roditeljima'],
    answer: 'roditelji',
    en: 'His parents live in Osijek.',
    tip: 'PLURAL masculine: roditelj → roditelji.',
  },
  {
    q: '___ su skupe ove godine.',
    opts: ['Jagode', 'Jagoda', 'Jagodama', 'Jagodu'],
    answer: 'Jagode',
    en: 'Strawberries are expensive this year.',
    tip: 'PLURAL subject with adjective agreement: jagode su skupe.',
  },
  {
    q: 'Naš ___ je star deset godina.',
    opts: ['pas', 'psa', 'psu', 'psom'],
    answer: 'pas',
    en: 'Our dog is ten years old.',
    tip: 'Nominative keeps the fleeting -a-: pas (but psa, psu...).',
  },
  {
    q: '___ Hrvatske je prekrasna.',
    opts: ['Obala', 'Obalu', 'Obale', 'Obalom'],
    answer: 'Obala',
    en: 'The coast of Croatia is beautiful.',
    tip: 'The head noun is the subject: obala (Hrvatske is genitive attribute).',
  },
  {
    q: 'Ta ___ mi se jako sviđa.',
    opts: ['pjesma', 'pjesmu', 'pjesme', 'pjesmom'],
    answer: 'pjesma',
    en: 'I really like that song.',
    tip: "With 'sviđati se' the THING liked is the subject → nominative: pjesma.",
  },
  {
    q: '___ dolaze večeras u sedam.',
    opts: ['Gosti', 'Goste', 'Gostiju', 'Gostima'],
    answer: 'Gosti',
    en: 'The guests are coming tonight at seven.',
    tip: 'PLURAL: gost → gosti.',
  },
  {
    q: 'Zimi su ___ kratki.',
    opts: ['dani', 'dane', 'dana', 'danima'],
    answer: 'dani',
    en: 'In winter the days are short.',
    tip: 'PLURAL subject: dan → dani.',
  },
  {
    q: 'Moje ___ su prljave.',
    opts: ['cipele', 'cipela', 'cipelama', 'cipelu'],
    answer: 'cipele',
    en: 'My shoes are dirty.',
    tip: 'PLURAL feminine: cipela → cipele.',
  },
  {
    q: '___ je pun turista.',
    opts: ['Trg', 'Trga', 'Trgu', 'Trgom'],
    answer: 'Trg',
    en: 'The square is full of tourists.',
    tip: 'Subject: trg (turista is genitive after pun).',
  },
  {
    q: 'Bakina ___ je najbolja.',
    opts: ['juha', 'juhu', 'juhe', 'juhom'],
    answer: 'juha',
    en: "Grandma's soup is the best.",
    tip: 'Subject with possessive adjective: juha.',
  },
  {
    q: '___ voze polako kroz maglu.',
    opts: ['Vozači', 'Vozače', 'Vozača', 'Vozačima'],
    answer: 'Vozači',
    en: 'The drivers drive slowly through the fog.',
    tip: 'PLURAL: vozač → vozači.',
  },
  {
    q: 'Ljeti ___ kasno zalazi.',
    opts: ['sunce', 'sunca', 'suncu', 'suncem'],
    answer: 'sunce',
    en: 'In summer the sun sets late.',
    tip: 'Neuter subject: sunce.',
  },
  {
    q: 'Ove ___ su iz bakinog vrta.',
    opts: ['rajčice', 'rajčica', 'rajčicama', 'rajčicu'],
    answer: 'rajčice',
    en: "These tomatoes are from grandma's garden.",
    tip: 'PLURAL: rajčica → rajčice.',
  },
  {
    q: '___ i ___ igraju šah.',
    opts: ['Djed, unuk', 'Djeda, unuka', 'Djedu, unuku', 'Djedom, unukom'],
    answer: 'Djed, unuk',
    en: 'Grandpa and grandson play chess.',
    tip: 'Both coordinated subjects are nominative: djed i unuk.',
  },
  {
    q: 'Kakav ___ !',
    opts: ['dan', 'dana', 'danu', 'danom'],
    answer: 'dan',
    en: 'What a day!',
    tip: 'Exclamations of identification use nominative: kakav dan!',
  },
  {
    q: 'To su moji najbolji ___.',
    opts: ['prijatelji', 'prijatelje', 'prijatelja', 'prijateljima'],
    answer: 'prijatelji',
    en: 'Those are my best friends.',
    tip: "Predicate of 'biti' is nominative: prijatelji.",
  },
  {
    q: '___ na stolu miriše prekrasno.',
    opts: ['Kolač', 'Kolača', 'Kolaču', 'Kolačem'],
    answer: 'Kolač',
    en: 'The cake on the table smells wonderful.',
    tip: 'Subject: kolač.',
  },
  {
    q: 'Stara ___ je pored crkve.',
    opts: ['škola', 'školu', 'škole', 'školom'],
    answer: 'škola',
    en: 'The old school is next to the church.',
    tip: 'Subject: škola.',
  },
  {
    q: '___ ovog filma je predugačak.',
    opts: ['Početak', 'Početka', 'Početku', 'Početkom'],
    answer: 'Početak',
    en: 'The beginning of this film is too long.',
    tip: 'Head noun subject: početak (ovog filma = genitive attribute).',
  },
  {
    q: 'Njezine ___ uvijek nasmiju cijeli razred.',
    opts: ['šale', 'šala', 'šalama', 'šalu'],
    answer: 'šale',
    en: 'Her jokes always make the whole class laugh.',
    tip: 'PLURAL subject: šala → šale.',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Fill the blank' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NominativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="nominative"
      title={'🏷️ Nominative Case'}
      subtitle={'Subjects and identity statements'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Nominative mastered! 🏆',
        good: 'Great work! Nominative is the foundation!',
        more: 'Keep practising — nominative tells you who or what is doing the action!',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="nominative" onStart={start} />}
      explainType="case_drill"
    />
  );
}
