/**
 * src/lib/attemptEvidence.ts
 *
 * AUDIT TRAIL for AI-scored Level Check sections (analysis-trust directive,
 * 2026-08-16): every certification attempt keeps the EVIDENCE its production
 * scores were based on — the transcript the system actually heard (or the
 * typed fallback answer), the essay as submitted, and the evaluator's
 * structured output (per-criterion scores, corrections, feedback). A score
 * that looks wrong can now be inspected instead of taken on faith.
 *
 * DELIBERATELY LOCAL-ONLY. This store is NOT part of buildProgressSnapshot
 * and never syncs to Firestore: transcripts + essays would bloat the 200 KB
 * progress blob for zero merge value. The certification RESULT (scores,
 * pass/fail) still syncs via nh_cefr_certifications; the evidence stays on
 * the device where the attempt ran — which is where anyone auditing it
 * (learner or parent) actually is. Best-effort by design: storage failure
 * must never affect the attempt itself.
 */

import type { CefrLevel } from './cefr.js';
import { StorageKeys } from './constants/storage.js';

const KEY = StorageKeys.CEFR_ATTEMPT_EVIDENCE;
/** Most recent attempts whose evidence we keep. */
const MAX_RECORDS = 10;
// Caps keep a full store around ~40 KB worst case — far from any quota.
const MAX_TRANSCRIPT_CHARS = 800;
const MAX_ESSAY_CHARS = 3000;
const MAX_NOTE_CHARS = 200;
const MAX_LIST_ITEMS = 5;

export interface SpeakingEvidence {
  /** The task prompt the learner answered. */
  prompt: string;
  /** What the system HEARD (STT transcript), or the typed fallback answer. */
  transcript: string;
  /** Per-criterion rubric scores (0..1). */
  scores: { range: number; accuracy: number; fluency: number; task: number };
  /** Equal-weight overall (0..1) — the number that entered the exam scores. */
  overall: number;
  /** True when the answer was TYPED (mic-denied fallback), not transcribed. */
  typed?: boolean;
}

export interface WritingEvidence {
  /** The writing task prompt (EN form, as sent to the evaluator). */
  prompt: string;
  /** The essay exactly as submitted for evaluation. */
  text: string;
  /** Normalized score (0..1) — the number that entered the exam scores. */
  score: number;
  correctedText?: string;
  levelDemonstrated?: string;
  changes?: Array<{ original: string; corrected: string; note?: string; errorType?: string }>;
  strengths?: string[];
  improvements?: string[];
}

export interface AttemptEvidence {
  speaking?: SpeakingEvidence[];
  writing?: WritingEvidence;
}

export interface EvidenceRecord {
  /** Matches CertificationAttempt.takenAt — the join key to the attempt. */
  at: number;
  level: CefrLevel;
  evidence: AttemptEvidence;
}

interface Store {
  v: 1;
  records: EvidenceRecord[];
}

function readStore(): Store {
  if (typeof localStorage === 'undefined') return { v: 1, records: [] };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { v: 1, records: [] };
    const parsed = JSON.parse(raw) as Store;
    if (!parsed || parsed.v !== 1 || !Array.isArray(parsed.records)) return { v: 1, records: [] };
    return parsed;
  } catch {
    return { v: 1, records: [] };
  }
}

const cut = (s: unknown, max: number): string => String(s ?? '').slice(0, max);

/** Bound every free-text field so the store can never grow past its budget. */
function truncate(ev: AttemptEvidence): AttemptEvidence {
  const out: AttemptEvidence = {};
  if (ev.speaking && ev.speaking.length > 0) {
    out.speaking = ev.speaking.slice(0, MAX_LIST_ITEMS).map((s) => ({
      prompt: cut(s.prompt, MAX_NOTE_CHARS),
      transcript: cut(s.transcript, MAX_TRANSCRIPT_CHARS),
      scores: s.scores,
      overall: s.overall,
      ...(s.typed ? { typed: true as const } : {}),
    }));
  }
  if (ev.writing) {
    const w = ev.writing;
    out.writing = {
      prompt: cut(w.prompt, MAX_NOTE_CHARS),
      text: cut(w.text, MAX_ESSAY_CHARS),
      score: w.score,
      ...(w.correctedText ? { correctedText: cut(w.correctedText, MAX_ESSAY_CHARS) } : {}),
      ...(w.levelDemonstrated ? { levelDemonstrated: cut(w.levelDemonstrated, 40) } : {}),
      ...(Array.isArray(w.changes) && w.changes.length > 0
        ? {
            changes: w.changes.slice(0, MAX_LIST_ITEMS).map((c) => ({
              original: cut(c.original, MAX_NOTE_CHARS),
              corrected: cut(c.corrected, MAX_NOTE_CHARS),
              ...(c.note ? { note: cut(c.note, MAX_NOTE_CHARS) } : {}),
              ...(c.errorType ? { errorType: cut(c.errorType, 20) } : {}),
            })),
          }
        : {}),
      ...(Array.isArray(w.strengths) && w.strengths.length > 0
        ? { strengths: w.strengths.slice(0, MAX_LIST_ITEMS).map((s) => cut(s, MAX_NOTE_CHARS)) }
        : {}),
      ...(Array.isArray(w.improvements) && w.improvements.length > 0
        ? {
            improvements: w.improvements
              .slice(0, MAX_LIST_ITEMS)
              .map((s) => cut(s, MAX_NOTE_CHARS)),
          }
        : {}),
    };
  }
  return out;
}

/**
 * Persist the evidence behind one attempt. Call right after
 * recordEquivalencyAttempt, with `at` = the attempt's takenAt. No-op when
 * there is no evidence (MCQ-only attempts) or storage is unavailable.
 */
export function recordAttemptEvidence(rec: EvidenceRecord): void {
  if (!rec.evidence.speaking?.length && !rec.evidence.writing) return;
  try {
    const store = readStore();
    store.records.push({ at: rec.at, level: rec.level, evidence: truncate(rec.evidence) });
    if (store.records.length > MAX_RECORDS) {
      store.records = store.records.slice(-MAX_RECORDS);
    }
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* best-effort: evidence must never affect the attempt itself */
  }
}

/** All kept evidence records, oldest first. */
export function getAttemptEvidence(): EvidenceRecord[] {
  return readStore().records;
}

/** Evidence for a specific attempt (joined on takenAt), or null. */
export function findAttemptEvidence(at: number): EvidenceRecord | null {
  const records = readStore().records;
  for (let i = records.length - 1; i >= 0; i--) {
    if (records[i]!.at === at) return records[i]!;
  }
  return null;
}
