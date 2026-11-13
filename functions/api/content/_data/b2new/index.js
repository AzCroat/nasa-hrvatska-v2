// functions/api/content/_data/b2new/index.js
//
// THE NEW B2 LESSONS (Croaticum restructure, stage 5, owner directive 2026-11-12).
//
// B2 follows the twelve lessons of Razgovarajte s nama! B2 and grows to 65 lessons. The new
// lessons are authored in seven batch files so they can be written in parallel; this file
// merges them. Each spine entry carries `masterOrder`, its final B2 position. Its `order` comes from
// levelOrders.js, the one ordered list for the level.
import { ORDER_B2 } from '../levelOrders.js';
import * as b01 from './batch01.js';
import * as b02 from './batch02.js';
import * as b03 from './batch03.js';
import * as b04 from './batch04.js';
import * as b05 from './batch05.js';
import * as b06 from './batch06.js';
import * as b07 from './batch07.js';

const BATCHES = [b01, b02, b03, b04, b05, b06, b07];

export const SPINE_B2_NEW = BATCHES.flatMap((b) => b.SPINE).map((e) => {
  const order = ORDER_B2.indexOf(e.id) + 1;
  if (order < 1) throw new Error(`b2new: ${e.id} is not in ORDER_B2 (levelOrders.js)`);
  return { ...e, level: 'B2', order };
});

export const LESSONS_B2_NEW = BATCHES.flatMap((b) => b.LESSONS);

export const PRACTICE_B2_NEW = Object.assign({}, ...BATCHES.map((b) => b.PRACTICE));
