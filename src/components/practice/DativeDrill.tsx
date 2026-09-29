import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';

export const DATA = [
  {
    q: 'Dajem poklon ___.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    en: 'I give a gift to my brother.',
    tip: 'Indirect object takes dative: brat + -u → bratu',
  },
  {
    q: 'Pomažem ___.',
    opts: ['mami', 'mama', 'mame', 'mamom'],
    answer: 'mami',
    en: 'I am helping my mom.',
    tip: "'pomoći' takes dative: mama → drop -a + -i → mami",
  },
  {
    q: 'Šaljem poruku ___.',
    opts: ['učitelju', 'učitelja', 'učiteljem', 'učitelj'],
    answer: 'učitelju',
    en: 'I am sending a message to the teacher.',
    tip: 'Indirect object: učitelj (soft -lj) → dative: učitelju',
  },
  {
    q: 'Ovaj grad se sviđa ___.',
    opts: ['bratu', 'brat', 'brata', 'bratom'],
    answer: 'bratu',
    en: 'My brother likes this city. (The city pleases my brother.)',
    tip: "'sviđati se': the thing liked is the subject (grad); the person who likes it is dative: brat → bratu",
  },
  {
    q: 'Pišem pismo ___.',
    opts: ['sestri', 'sestra', 'sestre', 'sestrom'],
    answer: 'sestri',
    en: 'I am writing a letter to my sister.',
    tip: 'Indirect object: sestra → drop -a + -i → sestri',
  },
  {
    q: 'Zahvaljujem ___.',
    opts: ['prijatelju', 'prijatelja', 'prijateljem', 'prijatelj'],
    answer: 'prijatelju',
    en: 'I thank my friend.',
    tip: "'zahvaliti' takes dative: prijatelj → prijatelju",
  },
  {
    q: 'Kupujem tortu ___.',
    opts: ['sinu', 'sina', 'sin', 'sinom'],
    answer: 'sinu',
    en: 'I am buying a cake for my son.',
    tip: 'Indirect object (for whom): sin + -u → sinu',
  },
  {
    q: 'Vjerujem ___.',
    opts: ['prijatelju', 'prijatelja', 'prijateljem', 'prijatelj'],
    answer: 'prijatelju',
    en: 'I believe my friend.',
    tip: "'vjerovati' takes dative: prijatelj → prijatelju",
  },
  {
    q: 'Govorim ___.',
    opts: ['djetetu', 'dijete', 'djeteta', 'djetetom'],
    answer: 'djetetu',
    en: 'I am speaking to the child.',
    tip: 'Indirect object: dijete (neut) → dative: djetetu',
  },
  {
    q: '___ treba moja pomoć.',
    opts: ['Liječniku', 'Liječnika', 'Liječnik', 'Liječnikom'],
    answer: 'Liječniku',
    en: 'The doctor needs my help.',
    tip: "'trebati' takes dative for the person who needs: liječnik + -u → liječniku",
  },
  {
    q: 'Daje novac ___.',
    opts: ['ženi', 'žena', 'žene', 'ženom'],
    answer: 'ženi',
    en: 'He gives money to the woman.',
    tip: 'Indirect object: žena → drop -a + -i → ženi',
  },
  {
    q: 'Idemo prema ___.',
    opts: ['moru', 'more', 'mora', 'morem'],
    answer: 'moru',
    en: 'We are going towards the sea.',
    tip: "'prema' (towards) takes dative: more (neuter) → moru",
  },
  {
    q: 'Hvala ___!',
    opts: ['svima', 'svi', 'sve', 'svih'],
    answer: 'svima',
    en: 'Thank you to everyone!',
    tip: "'hvala' takes dative: svi → dative plural: svima",
  },
  {
    q: 'Koliko je godina ___?',
    opts: ['tebi', 'ti', 'tebe', 'tobom'],
    answer: 'tebi',
    en: 'How old are you?',
    tip: "Age expression uses dative. Long form 'tebi' in question position.",
  },
  {
    q: 'Nasuprot ___.',
    opts: ['kući', 'kuća', 'kuće', 'kućom'],
    answer: 'kući',
    en: 'Opposite the house.',
    tip: "'nasuprot' (opposite) takes dative: kuća → drop -a + -i → kući",
  },
  {
    q: 'Šaljem poruku ___.',
    opts: ['tati', 'tata', 'tate', 'tatom'],
    answer: 'tati',
    en: 'I am sending a message to my dad.',
    tip: 'Indirect object: tata (masc -a noun) → drop -a + -i → tati',
  },
  {
    q: 'Pomaže li ___?',
    opts: ['djeci', 'dijete', 'djece', 'djecom'],
    answer: 'djeci',
    en: 'Does she help the children?',
    tip: "'pomoći' + dative: djeca → djeci (irregular plural dative)",
  },
  {
    q: 'Recite ___.',
    opts: ['meni', 'ja', 'mene', 'mnom'],
    answer: 'meni',
    en: 'Tell me! (emphatic)',
    tip: "Long dative pronoun for emphasis: 'meni'. Short clitic form: 'mi'.",
  },
  {
    q: 'Slat ću pismo ___.',
    opts: ['mami', 'mama', 'mame', 'mamom'],
    answer: 'mami',
    en: 'I will send a letter to mom.',
    tip: 'Indirect object: mama → drop -a + -i → mami',
  },
  {
    q: 'Pišem ___.',
    opts: ['prijatelju', 'prijatelja', 'prijateljem', 'prijatelj'],
    answer: 'prijatelju',
    en: 'I am writing to my friend.',
    tip: "'pisati' (to write to) takes dative: prijatelj → prijatelju",
  },
  // ── 2026-07 depth expansion (+30): more governance patterns + PLURAL forms ──
  {
    q: 'Šaljem pismo ___.',
    opts: ['prijatelju', 'prijatelja', 'prijatelj', 'prijateljem'],
    answer: 'prijatelju',
    en: 'I am sending a letter to a friend.',
    tip: 'Recipient takes dative: prijatelj → prijatelju.',
  },
  {
    q: 'Pomažem ___ u kuhinji.',
    opts: ['mami', 'mamu', 'mama', 'mamom'],
    answer: 'mami',
    en: 'I help mum in the kitchen.',
    tip: "'Pomagati' governs the DATIVE: mama → mami.",
  },
  {
    q: 'Radujem se ___.',
    opts: ['ljetu', 'ljeto', 'ljeta', 'ljetom'],
    answer: 'ljetu',
    en: 'I am looking forward to summer.',
    tip: "'Radovati se' + dative: ljeto → ljetu.",
  },
  {
    q: 'Idem k ___.',
    opts: ['baki', 'baku', 'baka', 'bakom'],
    answer: 'baki',
    en: "I am going to grandma's.",
    tip: 'Direction to a person: k/ka + dative: baka → baki (no sibilarization in this family word — not baci).',
  },
  {
    q: 'Vjerujem svom ___.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    en: 'I trust my brother.',
    tip: "'Vjerovati' + dative: brat → bratu.",
  },
  {
    q: 'Ovaj kaput pripada ___.',
    opts: ['susjedi', 'susjede', 'susjeda', 'susjedom'],
    answer: 'susjedi',
    en: 'This coat belongs to the (female) neighbour.',
    tip: "'Pripadati' + dative. Feminine susjeda → susjedi.",
  },
  {
    q: 'Čestitam ti na ___!',
    opts: ['uspjehu', 'uspjeh', 'uspjeha', 'uspjehom'],
    answer: 'uspjehu',
    en: 'I congratulate you on your success!',
    tip: "'Na' after čestitati takes locative — same form as dative: uspjeh → uspjehu.",
  },
  {
    q: 'Hvala ___ na pomoći.',
    opts: ['vama', 'vas', 'vi', 'vami'],
    answer: 'vama',
    en: 'Thank you (formal) for the help.',
    tip: "'Hvala' + dative of the person: vi → vama.",
  },
  {
    q: 'Obećao sam ___ da ću doći.',
    opts: ['sestri', 'sestru', 'sestra', 'sestrom'],
    answer: 'sestri',
    en: 'I promised my sister that I would come.',
    tip: 'Person promised-to takes dative: sestra → sestri.',
  },
  {
    q: 'Djeca se vesele ___.',
    opts: ['Božiću', 'Božić', 'Božića', 'Božićem'],
    answer: 'Božiću',
    en: 'The children are looking forward to Christmas.',
    tip: "'Veseliti se' + dative: Božić → Božiću.",
  },
  {
    q: 'Približavamo se ___.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    en: 'We are approaching the city.',
    tip: "'Približavati se' + dative: grad → gradu.",
  },
  {
    q: 'To se ___ ne sviđa.',
    opts: ['tati', 'tatu', 'tata', 'tatom'],
    answer: 'tati',
    en: 'Dad does not like that.',
    tip: "'Sviđati se' — the experiencer is dative: tata → tati.",
  },
  {
    q: 'Unatoč ___, izašli smo van.',
    opts: ['kiši', 'kišu', 'kiša', 'kišom'],
    answer: 'kiši',
    en: 'Despite the rain, we went outside.',
    tip: "'Unatoč' governs the DATIVE: kiša → kiši.",
  },
  {
    q: 'Zahvaljujući ___, položio sam ispit.',
    opts: ['profesoru', 'profesora', 'profesor', 'profesorom'],
    answer: 'profesoru',
    en: 'Thanks to the professor, I passed the exam.',
    tip: "'Zahvaljujući' + dative: profesor → profesoru.",
  },
  {
    q: 'Divim se njezinoj ___.',
    opts: ['hrabrosti', 'hrabrost', 'hrabrošću', 'hrabrostima'],
    answer: 'hrabrosti',
    en: 'I admire her courage.',
    tip: "'Diviti se' + dative. i-declension: hrabrost → hrabrosti.",
  },
  {
    q: 'Mačka prilazi ___.',
    opts: ['vratima', 'vrata', 'vratiju', 'vratama'],
    answer: 'vratima',
    en: 'The cat approaches the door.',
    tip: "PLURAL-only noun: vrata → vratima ('prilaziti' + dative).",
  },
  {
    q: 'Učiteljica objašnjava zadatak ___.',
    opts: ['učenicima', 'učenike', 'učenikom', 'učenici'],
    answer: 'učenicima',
    en: 'The teacher explains the task to the pupils.',
    tip: 'PLURAL dative: učenici → učenicima.',
  },
  {
    q: 'Nosimo poklone ___.',
    opts: ['djevojčicama', 'djevojčice', 'djevojčica', 'djevojčicom'],
    answer: 'djevojčicama',
    en: 'We bring presents to the girls.',
    tip: 'PLURAL feminine: djevojčice → djevojčicama.',
  },
  {
    q: 'Pišem poruku ___.',
    opts: ['roditeljima', 'roditelje', 'roditelja', 'roditelji'],
    answer: 'roditeljima',
    en: 'I am writing a message to my parents.',
    tip: 'PLURAL: roditelji → roditeljima.',
  },
  {
    q: 'Konobar donosi račun ___.',
    opts: ['gostima', 'goste', 'gostiju', 'gosti'],
    answer: 'gostima',
    en: 'The waiter brings the bill to the guests.',
    tip: 'PLURAL: gosti → gostima.',
  },
  {
    q: 'Baka priča priče ___.',
    opts: ['unucima', 'unuke', 'unuka', 'unuci'],
    answer: 'unucima',
    en: 'Grandma tells stories to her grandchildren.',
    tip: 'PLURAL: unuci → unucima.',
  },
  {
    q: 'Grad pomaže ___ nakon poplave.',
    opts: ['obiteljima', 'obitelj', 'obitelja', 'obiteljama'],
    answer: 'obiteljima',
    en: 'The city helps the families after the flood.',
    tip: 'PLURAL i-declension: obitelji → obiteljima.',
  },
  {
    q: 'Dajem vodu ___.',
    opts: ['psima', 'pse', 'pasa', 'psi'],
    answer: 'psima',
    en: 'I give water to the dogs.',
    tip: 'PLURAL: psi → psima (note the fleeting -a-: pas → psi).',
  },
  {
    q: 'Kupujemo sladoled ___.',
    opts: ['djeci', 'djecu', 'djece', 'djecom'],
    answer: 'djeci',
    en: 'We are buying the children ice cream.',
    tip: "Collective 'djeca' declines as feminine singular: djeca → djeci.",
  },
  {
    q: 'Novinar postavlja pitanje ___.',
    opts: ['ministru', 'ministre', 'ministar', 'ministrom'],
    answer: 'ministru',
    en: 'The journalist asks the minister a question.',
    tip: 'Person asked takes dative: ministar → ministru (fleeting -a-).',
  },
  {
    q: 'Ova pjesma je posvećena ___.',
    opts: ['majci', 'majku', 'majka', 'majkom'],
    answer: 'majci',
    en: 'This song is dedicated to mother.',
    tip: 'Sibilarization k→c: majka → majci.',
  },
  {
    q: 'Smijemo se ___, ne tebi!',
    opts: ['vicu', 'vic', 'vica', 'vicem'],
    answer: 'vicu',
    en: 'We are laughing at the joke, not at you!',
    tip: "'Smijati se' + dative: vic → vicu.",
  },
  {
    q: 'Javite se ___ sutra ujutro.',
    opts: ['liječnici', 'liječnicu', 'liječnica', 'liječnicom'],
    answer: 'liječnici',
    en: 'Contact the (female) doctor tomorrow morning.',
    tip: "'Javiti se' + dative. Feminine: liječnica → liječnici.",
  },
  {
    q: 'Sve to zahvaljujemo našim ___.',
    opts: ['bakama', 'bake', 'baka', 'baki'],
    answer: 'bakama',
    en: 'We owe everything to our grandmas.',
    tip: 'PLURAL: bake → bakama.',
  },
  {
    q: 'Nastavnik je zadovoljan, a to znači puno ___.',
    opts: ['studentima', 'studente', 'studentom', 'studenti'],
    answer: 'studentima',
    en: 'The teacher is satisfied, and that means a lot to the students.',
    tip: 'PLURAL: studenti → studentima.',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Fill the blank' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dative"
      title={'🤝 Dative Case'}
      subtitle={'Indirect objects, giving, helping, liking'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Dative mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — dative is essential!',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="dative" onStart={start} />}
      explainType="case_drill"
    />
  );
}
