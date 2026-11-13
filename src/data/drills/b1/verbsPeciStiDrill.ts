// src/data/drills/b1/verbsPeciStiDrill.ts
//
// B1 VERBS WITH A HIDDEN CONSONANT — the drill for the `verbs-peci-sti` lesson.
//
// peći → pečem … peku, vući → vučem … vuku, moći → mogu, možeš; krasti → kradem,
// plesti → pletem, jesti → jedem. The errors are a present built from the infinitive
// ("pećem", "krastim"), č in the oni form ("peču"), "možem", a d kept in the past
// ("kradao") and rečem used for "I am saying".
//
// Three modes:
//   ci     — the present of peći, teći, vući, reći / kazati and moći
//   sti    — the present of the -sti verbs
//   proslo — the past and the command

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_PECI_STI_MODE_LABELS: Record<string, string> = {
  ci: '🥖 Pečem, vučem',
  sti: '🧶 Kradem, pletem',
  proslo: '⏪ Pekao, reci!',
};

export const VERBS_PECI_STI_DRILL_DATA: ModeDrillItem[] = [
  // ── ci ────────────────────────────────────────────────────────────────────
  {
    mode: 'ci',
    q: 'Svake nedjelje baka ____ kruh.',
    en: 'Every Sunday Grandma bakes bread.',
    opts: ['peče', 'peke', 'peći', 'pečuje'],
    answer: 'peče',
    tip: 'The hidden k turns into č before e.',
  },
  {
    mode: 'ci',
    q: 'U ovoj pekarnici ____ najbolje kifle.',
    en: 'In this bakery they bake the best rolls.',
    opts: ['peku', 'peču', 'pečeju', 'pekeju'],
    answer: 'peku',
    tip: 'Before -u the k stays: peku.',
  },
  {
    mode: 'ci',
    q: 'Rijeka Sava ____ kroz Zagreb.',
    en: 'The river Sava flows through Zagreb.',
    opts: ['teče', 'teku', 'teći', 'teke'],
    answer: 'teče',
    tip: 'Tek- + e: teče.',
  },
  {
    mode: 'ci',
    q: 'Ti ____ kofer, a ja nosim torbe.',
    en: 'You pull the suitcase, and I carry the bags.',
    opts: ['vučeš', 'vukeš', 'vučiš', 'vuciš'],
    answer: 'vučeš',
    tip: 'Vuk- + eš: the k becomes č.',
  },
  {
    mode: 'ci',
    q: 'Konji ____ kola po selu.',
    en: 'The horses pull the cart through the village.',
    opts: ['vuku', 'vuču', 'vučeju', 'vuke'],
    answer: 'vuku',
    tip: 'The oni form keeps the k: vuku.',
  },
  {
    mode: 'ci',
    q: 'Ja to ne ____ sama napraviti.',
    en: 'I can’t do that on my own.',
    opts: ['mogu', 'možem', 'moćem', 'mogem'],
    answer: 'mogu',
    tip: 'The ja form of moći is mogu.',
  },
  {
    mode: 'ci',
    q: '____ li mi pomoći?',
    en: 'Can you help me? (to a friend)',
    opts: ['Možeš', 'Mogeš', 'Moćeš', 'Mogu'],
    answer: 'Možeš',
    tip: 'The hidden g turns into ž before e.',
  },
  {
    mode: 'ci',
    q: 'Što ____, idemo li u kino?',
    en: 'What do you say, shall we go to the cinema?',
    opts: ['kažeš', 'kazaš', 'rekneš', 'kažem'],
    answer: 'kažeš',
    tip: 'For saying right now use kazati: kažeš.',
  },
  {
    mode: 'ci',
    q: 'Kad mu ____ istinu, bit će ljut.',
    en: 'When I tell him the truth, he will be angry.',
    opts: ['rečem', 'rekem', 'reknem', 'rečim'],
    answer: 'rečem',
    tip: 'After kad, the perfective present of reći: rečem.',
  },

  // ── sti ───────────────────────────────────────────────────────────────────
  {
    mode: 'sti',
    q: 'Lopovi ____ bicikle ispred fakulteta.',
    en: 'Thieves steal bicycles in front of the faculty.',
    opts: ['kradu', 'krastu', 'kraju', 'kradeju'],
    answer: 'kradu',
    tip: 'Krasti hides a d: kradem … kradu.',
  },
  {
    mode: 'sti',
    q: 'Moja mama ____ džemper za unuka.',
    en: 'My mum is knitting a jumper for her grandson.',
    opts: ['plete', 'plesti', 'pleta', 'plese'],
    answer: 'plete',
    tip: 'Plesti hides a t: pletem, plete.',
  },
  {
    mode: 'sti',
    q: 'Što ____ za doručak?',
    en: 'What do you eat for breakfast?',
    opts: ['jedeš', 'jeseš', 'jesteš', 'jediš'],
    answer: 'jedeš',
    tip: 'Jesti hides a d: jedem, jedeš.',
  },
  {
    mode: 'sti',
    q: 'Ne boj se, moj pas ne ____.',
    en: 'Don’t be afraid, my dog doesn’t bite.',
    opts: ['grize', 'grise', 'gristi', 'grizi'],
    answer: 'grize',
    tip: 'Gristi hides a z: grizem, grize.',
  },
  {
    mode: 'sti',
    q: 'Djeca brzo ____.',
    en: 'Children grow fast.',
    opts: ['rastu', 'rasu', 'rastaju', 'rastiju'],
    answer: 'rastu',
    tip: 'Rasti → rastem … rastu.',
  },
  {
    mode: 'sti',
    q: 'Svako jutro ____ pod u kuhinji.',
    en: 'Every morning I sweep the kitchen floor.',
    opts: ['metem', 'mestem', 'medem', 'mesem'],
    answer: 'metem',
    tip: 'Mesti hides a t: metem.',
  },
  {
    mode: 'sti',
    q: 'Mi uvijek ____ zajedno u nedjelju.',
    en: 'We always eat together on Sunday.',
    opts: ['jedemo', 'jestemo', 'jedimo', 'jesemo'],
    answer: 'jedemo',
    tip: 'Jesti → jedem … jedemo.',
  },
  {
    mode: 'sti',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: [
      'Netko krade novac iz blagajne.',
      'Netko krasti novac iz blagajne.',
      'Netko kraje novac iz blagajne.',
      'Netko kradi novac iz blagajne.',
    ],
    answer: 'Netko krade novac iz blagajne.',
    tip: 'The on form of krasti: krade.',
  },

  // ── proslo ────────────────────────────────────────────────────────────────
  {
    mode: 'proslo',
    q: 'Jučer sam ____ kolače za rođendan.',
    en: 'Yesterday I baked cakes for the birthday. (a man speaking)',
    opts: ['pekao', 'pečao', 'pekeo', 'pečio'],
    answer: 'pekao',
    tip: 'The past brings the hidden k back.',
  },
  {
    mode: 'proslo',
    q: 'Netko mi je u tramvaju ____ novčanik.',
    en: 'Someone stole my wallet on the tram.',
    opts: ['ukrao', 'ukradao', 'ukrastio', 'ukradio'],
    answer: 'ukrao',
    tip: 'The hidden d disappears in the past: ukrao.',
  },
  {
    mode: 'proslo',
    q: 'Što si ____ za ručak?',
    en: 'What did you eat for lunch? (to a woman)',
    opts: ['jela', 'jedla', 'jestila', 'jedila'],
    answer: 'jela',
    tip: 'Jesti → jeo, jela: the d disappears.',
  },
  {
    mode: 'proslo',
    q: 'Nije ____ doći jer je bio bolestan.',
    en: 'He couldn’t come because he was ill.',
    opts: ['mogao', 'možao', 'moćao', 'mogeo'],
    answer: 'mogao',
    tip: 'The past of moći brings the g back: mogao.',
  },
  {
    mode: 'proslo',
    q: '____ mi istinu!',
    en: 'Tell me the truth! (to a friend)',
    opts: ['Reci', 'Reći', 'Rekni', 'Reki'],
    answer: 'Reci',
    tip: 'k → c before the -i of the command.',
  },
  {
    mode: 'proslo',
    q: 'Na vratima piše ____ — pull.',
    en: 'The word printed on the door means "pull".',
    opts: ['Vuci', 'Vuči', 'Vuki', 'Vukni'],
    answer: 'Vuci',
    tip: 'The command of vući: vuci.',
  },
  {
    mode: 'proslo',
    q: 'Baka je cijelu zimu ____ šalove.',
    en: 'Grandma knitted scarves all winter.',
    opts: ['plela', 'pletla', 'plestila', 'pletala'],
    answer: 'plela',
    tip: 'The hidden t disappears in the past: pleo, plela.',
  },
];
