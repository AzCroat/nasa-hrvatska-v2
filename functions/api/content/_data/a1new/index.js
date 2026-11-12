// functions/api/content/_data/a1new/index.js
//
// THE NEW A1 LESSONS (Croaticum restructure, stage 2, owner directive 2026-11-12).
//
// A1 follows Hrvatski za početnike 1 and grows from 40 lessons to 100. The new lessons
// are authored in ten batch files so they can be written in parallel; this file merges
// them. Each spine entry carries `masterOrder`, its final position in A1. Its `order` is
// that master position; the existing 40 A1 lessons in curriculum.js carry theirs.
import * as b01 from './batch01.js';
import * as b02 from './batch02.js';
import * as b03 from './batch03.js';
import * as b04 from './batch04.js';
import * as b05 from './batch05.js';
import * as b06 from './batch06.js';
import * as b07 from './batch07.js';
import * as b08 from './batch08.js';
import * as b09 from './batch09.js';
import * as b10 from './batch10.js';

const BATCHES = [b01, b02, b03, b04, b05, b06, b07, b08, b09, b10];

export const SPINE_A1_NEW = BATCHES.flatMap((b) => b.SPINE).map((e) => ({
  ...e,
  level: 'A1',
  order: e.masterOrder,
}));

export const LESSONS_A1_NEW = BATCHES.flatMap((b) => b.LESSONS);

export const PRACTICE_A1_NEW = Object.assign({}, ...BATCHES.map((b) => b.PRACTICE));
