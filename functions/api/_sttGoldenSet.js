// functions/api/_sttGoldenSet.js
//
// STT GOLDEN SET (owner directive, 2026-08-19 — assessment gap #7). The
// speaking-score pipeline has two stages: speech-to-text, then the CEFR
// rubric. golden-calibration.js proves the RUBRIC is honest (it feeds known
// transcripts); nothing verified the STT stage in front of it — the
// historically weakest link for Croatian. This set closes that: known
// phrases are synthesized through the app's own production TTS voice and run
// through the REAL production provider chain (_transcribe.js), and the
// word-error rate against the known text must stay inside band.
//
// Phrase design: native-standard Croatian, phonetically diverse on purpose —
// diacritic-dense words (č/ć/š/ž/đ), numbers, the exam-answer register, and
// the palatal clusters (lj/nj) Croatian STT most often fumbles. Clean
// synthetic audio should transcribe near-perfectly; the band is wide because
// it exists to catch GROSS breakage (provider drift, language mis-config,
// format rot), not to pin provider variance.

export const STT_GOLDEN_PHRASES = [
  {
    id: 'stt-greeting',
    text: 'Dobar dan, kako ste danas?',
  },
  {
    id: 'stt-diacritics',
    text: 'Čaša svježega soka i žlica šećera već čekaju na stolu.',
  },
  {
    id: 'stt-numbers',
    text: 'Imam trideset i sedam godina i živim u Zagrebu već pet godina.',
  },
  {
    id: 'stt-palatals',
    text: 'Moja obitelj njeguje ljubav prema knjigama i putovanjima.',
  },
  {
    id: 'stt-exam-register',
    text: 'Prošlog ljeta posjetili smo Dubrovnik i razgledali stare gradske zidine.',
  },
  {
    id: 'stt-question',
    text: 'Možete li mi reći koliko košta karta do Splita?',
  },
];

/** Max acceptable word-error rate per sample. Synthetic studio-clean audio
 *  through a healthy provider chain lands near 0; a sample above this means
 *  the STT stage broke for real speech too. Widening it is an owner-visible
 *  calibration decision — note it in the PR. */
export const STT_WER_BAND = 0.34;

/** Two or more samples out of band = systematic drift (same rule as the
 *  rubric golden set). */
export const STT_DRIFT_THRESHOLD = 2;

/** Normalize for WER: lowercase, strip punctuation, collapse whitespace.
 *  Diacritics are KEPT — c/č/ć distinctions are exactly what Croatian STT
 *  must get right. */
export function normalizeForWer(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[.,!?;:'"„“”()\-—–…]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Word-error rate: word-level Levenshtein distance / reference length. */
export function wordErrorRate(reference, hypothesis) {
  const ref = normalizeForWer(reference).split(' ').filter(Boolean);
  const hyp = normalizeForWer(hypothesis).split(' ').filter(Boolean);
  if (ref.length === 0) return hyp.length === 0 ? 0 : 1;
  const dp = Array.from({ length: ref.length + 1 }, (_, i) => {
    const row = new Array(hyp.length + 1).fill(0);
    row[0] = i;
    return row;
  });
  for (let j = 0; j <= hyp.length; j++) dp[0][j] = j;
  for (let i = 1; i <= ref.length; i++) {
    for (let j = 1; j <= hyp.length; j++) {
      const sub = ref[i - 1] === hyp[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + sub);
    }
  }
  return dp[ref.length][hyp.length] / ref.length;
}
