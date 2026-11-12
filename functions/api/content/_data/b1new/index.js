// functions/api/content/_data/b1new/index.js
//
// THE NEW B1 LESSONS (Croaticum restructure, stage 4, owner directive 2026-11-12).
//
// B1 follows lessons 6–10 of Razgovarajte s nama! A2-B1 and grows to 50 lessons. The new
// lessons are authored in four batch files so they can be written in parallel; this file
// merges them. Each spine entry carries `masterOrder`, its final B1 position. Its `order` comes from
// levelOrders.js, the one ordered list for the level.
import { ORDER_B1 } from '../levelOrders.js';
import * as b01 from './batch01.js';
import * as b02 from './batch02.js';
import * as b03 from './batch03.js';
import * as b04 from './batch04.js';

const BATCHES = [b01, b02, b03, b04];

export const SPINE_B1_NEW = BATCHES.flatMap((b) => b.SPINE).map((e) => {
  const order = ORDER_B1.indexOf(e.id) + 1;
  if (order < 1) throw new Error(`b1new: ${e.id} is not in ORDER_B1 (levelOrders.js)`);
  return { ...e, level: 'B1', order };
});

export const LESSONS_B1_NEW = BATCHES.flatMap((b) => b.LESSONS);

export const PRACTICE_B1_NEW = Object.assign({}, ...BATCHES.map((b) => b.PRACTICE));
