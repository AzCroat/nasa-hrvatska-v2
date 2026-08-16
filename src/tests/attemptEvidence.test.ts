/**
 * attemptEvidence.test.ts — the Level Check audit trail store (analysis-trust
 * directive, 2026-08-16).
 *
 * Guarantees under test:
 *   - evidence is joined to its attempt by takenAt and readable back
 *   - the store is bounded: record cap + per-field truncation
 *   - no-evidence attempts write nothing (MCQ-only checks stay storage-free)
 *   - the store is LOCAL-ONLY: it must never enter buildProgressSnapshot
 *     (transcripts/essays would bloat the synced 200 KB progress blob)
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  recordAttemptEvidence,
  getAttemptEvidence,
  findAttemptEvidence,
} from '../lib/attemptEvidence';

const KEY = 'nh_cefr_attempt_evidence';

const speakingItem = (transcript = 'Rodio sam se u malom gradu.') => ({
  prompt: 'Opišite svoje rodno mjesto.',
  transcript,
  scores: { range: 0.8, accuracy: 0.7, fluency: 0.8, task: 0.9 },
  overall: 0.8,
});

describe('attemptEvidence store', () => {
  beforeEach(() => localStorage.clear());

  it('records evidence and finds it by the attempt timestamp', () => {
    recordAttemptEvidence({
      at: 1755400000000,
      level: 'B1',
      evidence: {
        speaking: [speakingItem()],
        writing: { prompt: 'Describe a trip', text: 'Prošlog ljeta…', score: 0.65 },
      },
    });
    const rec = findAttemptEvidence(1755400000000);
    expect(rec).not.toBeNull();
    expect(rec!.level).toBe('B1');
    expect(rec!.evidence.speaking![0]!.transcript).toBe('Rodio sam se u malom gradu.');
    expect(rec!.evidence.writing!.score).toBe(0.65);
    expect(findAttemptEvidence(123)).toBeNull();
  });

  it('writes NOTHING for an attempt with no production evidence', () => {
    recordAttemptEvidence({ at: 1, level: 'A2', evidence: {} });
    expect(localStorage.getItem(KEY)).toBeNull();
    expect(getAttemptEvidence()).toEqual([]);
  });

  it('caps the store at the 10 most recent records', () => {
    for (let i = 0; i < 14; i++) {
      recordAttemptEvidence({ at: i, level: 'B1', evidence: { speaking: [speakingItem()] } });
    }
    const records = getAttemptEvidence();
    expect(records).toHaveLength(10);
    expect(records[0]!.at).toBe(4); // oldest four evicted
    expect(records[9]!.at).toBe(13);
  });

  it('truncates oversized free-text fields so the store stays bounded', () => {
    recordAttemptEvidence({
      at: 42,
      level: 'B2',
      evidence: {
        speaking: [speakingItem('x'.repeat(5000))],
        writing: {
          prompt: 'p'.repeat(1000),
          text: 'y'.repeat(10000),
          score: 0.5,
          correctedText: 'z'.repeat(10000),
          changes: Array.from({ length: 12 }, () => ({
            original: 'o'.repeat(500),
            corrected: 'c',
            note: 'n'.repeat(500),
          })),
        },
      },
    });
    const rec = findAttemptEvidence(42)!;
    expect(rec.evidence.speaking![0]!.transcript.length).toBeLessThanOrEqual(800);
    expect(rec.evidence.writing!.text.length).toBeLessThanOrEqual(3000);
    expect(rec.evidence.writing!.correctedText!.length).toBeLessThanOrEqual(3000);
    expect(rec.evidence.writing!.changes!.length).toBeLessThanOrEqual(5);
    expect(rec.evidence.writing!.changes![0]!.original.length).toBeLessThanOrEqual(200);
  });

  it('survives corrupted storage (returns empty, does not throw)', () => {
    localStorage.setItem(KEY, '{not json');
    expect(getAttemptEvidence()).toEqual([]);
    recordAttemptEvidence({ at: 7, level: 'B1', evidence: { speaking: [speakingItem()] } });
    expect(findAttemptEvidence(7)).not.toBeNull();
  });

  it('is LOCAL-ONLY: the evidence key never appears in the sync snapshot source', () => {
    // Transcripts + essays must not ride the synced progress blob. If someone
    // wires this store into the snapshot, this test names the decision.
    const snapshotSrc = readFileSync('src/lib/progressSnapshot.ts', 'utf8');
    expect(snapshotSrc.includes('attemptEvidence')).toBe(false);
    expect(snapshotSrc.includes(KEY)).toBe(false);
  });
});
