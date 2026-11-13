// functions/api/content/_data/a2new/index.js
//
// THE NEW A2 LESSONS (Croaticum restructure, stage 3, owner directive 2026-11-12).
//
// A2 follows lessons 1–5 of Razgovarajte s nama! A2-B1 and grows to 50 lessons. The new
// lessons are authored in five batch files so they can be written in parallel; this file
// merges them. Each spine entry carries `masterOrder`, its final A2 position. Its `order` comes from
// levelOrders.js, the one ordered list for the level.
import { ORDER_A2 } from '../levelOrders.js';
import * as b01 from './batch01.js';
import * as b02 from './batch02.js';
import * as b03 from './batch03.js';
import * as b04 from './batch04.js';
import * as b05 from './batch05.js';

const BATCHES = [b01, b02, b03, b04, b05];

export const SPINE_A2_NEW = BATCHES.flatMap((b) => b.SPINE).map((e) => {
  const order = ORDER_A2.indexOf(e.id) + 1;
  if (order < 1) throw new Error(`a2new: ${e.id} is not in ORDER_A2 (levelOrders.js)`);
  return { ...e, level: 'A2', order };
});

export const LESSONS_A2_NEW = BATCHES.flatMap((b) => b.LESSONS);

export const PRACTICE_A2_NEW = Object.assign({}, ...BATCHES.map((b) => b.PRACTICE));
