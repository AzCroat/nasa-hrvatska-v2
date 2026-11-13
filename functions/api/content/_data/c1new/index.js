// functions/api/content/_data/c1new/index.js
//
// THE NEW C1 LESSONS (Croaticum restructure, stage 6, owner directive 2026-11-12).
//
// C1 follows the ten lessons of Razgovarajte s nama! Gramatika i pravopis hrvatskoga jezika
// s vježbama za razine B2-C1 and grows to 60 lessons. The new lessons are authored in six
// batch files so they can be written in parallel; this file merges them. Each spine entry
// carries `masterOrder`; its `order` comes from levelOrders.js, the one ordered list for C1.
import { ORDER_C1 } from '../levelOrders.js';
import * as b01 from './batch01.js';
import * as b02 from './batch02.js';
import * as b03 from './batch03.js';
import * as b04 from './batch04.js';
import * as b05 from './batch05.js';
import * as b06 from './batch06.js';

const BATCHES = [b01, b02, b03, b04, b05, b06];

export const SPINE_C1_NEW = BATCHES.flatMap((b) => b.SPINE).map((e) => {
  const order = ORDER_C1.indexOf(e.id) + 1;
  if (order < 1) throw new Error(`c1new: ${e.id} is not in ORDER_C1 (levelOrders.js)`);
  return { ...e, level: 'C1', order };
});

export const LESSONS_C1_NEW = BATCHES.flatMap((b) => b.LESSONS);

export const PRACTICE_C1_NEW = Object.assign({}, ...BATCHES.map((b) => b.PRACTICE));
